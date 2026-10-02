import test from 'node:test'
import assert from 'node:assert/strict'
import { emptyResearchSession, saveResearchSession, researchNoteFromSession } from '../src/lib/researchSession'
import { buildCitationPayload } from '../src/lib/citationHandoff'
import { verifyCitationSync } from '../src/lib/citationVerification'
import { analyzeJudgmentText, validateNoInventedSourceMetadata } from '../src/lib/judgmentAnalyzer'
import { analyzeChronology } from '../src/lib/casePrep'
import { DRAFT_TIERS, canEditDraftBody, canExportDraft } from '../src/data/draftTiers'
import { FILING_CHECKLISTS } from '../src/data/filingChecklists'
import { COURT_PROFILES, STATE_PROFILES } from '../src/data/courtProfiles'

test('CLOSURE-004 cross-phase research → verify → analyze → prepare → draft/checklist regression', () => {
  // Research: create a structured question and authority row without any browser/network dependency.
  const session = emptyResearchSession()
  session.question.question = 'How should a cited judgment be checked before use in a case preparation workflow?'
  session.question.jurisdiction = 'India'
  session.issues.primary = 'Citation and authority verification'
  session.authorities = [{
    ...session.authorities[0],
    caseName: 'Kesavananda Bharati v State of Kerala',
    citation: 'AIR 1973 SC 1461',
    court: 'Supreme Court of India',
    issue: 'Constitutional structure',
    holding: 'User-provided research note; verify against the primary source.',
    verification: 'user-provided',
  }]
  const note = researchNoteFromSession(session)
  assert.match(note, /Question presented/)
  assert.match(note, /Verification status/)

  // Research → Citation Verifier handoff: only public case/citation material is transferred.
  const citationPayload = buildCitationPayload(session.authorities)
  assert.equal(citationPayload, 'Kesavananda Bharati v State of Kerala, AIR 1973 SC 1461')
  const verified = verifyCitationSync(citationPayload)
  assert.ok(['verified', 'partial', 'user-provided', 'not-verified', 'conflict'].includes(verified.status))
  assert.ok(Array.isArray(verified.officialSources))
  assert.notEqual(verified.status, 'does-not-exist')

  // Analyze: structure supplied judgment text and preserve source provenance.
  const judgmentText = `Kesavananda Bharati v State of Kerala\n\nFacts\nThe supplied judgment text describes the factual background.\n\nIssues\nWhether constitutional amendments are subject to substantive limits.\n\nAuthorities Cited\nPrior constitutional decisions are discussed.\n\nReasoning\nThe supplied text sets out the court's reasoning.\n\nRatio\nThe supplied text records the stated holding.\n\nFinal Order\nThe supplied text records the disposition.`
  const analysis = analyzeJudgmentText(judgmentText)
  assert.equal(analysis.sections.issues.includes('Whether constitutional amendments'), true)
  assert.equal(analysis.sections.ratio.includes('stated holding'), true)
  assert.equal(validateNoInventedSourceMetadata(analysis), true)

  // Prepare: chronology is ordered and material gaps are surfaced rather than silently ignored.
  const chronology = analyzeChronology([
    { id: '2', date: '2025-03-01', event: 'Later order', source: 'Case record', disputed: false },
    { id: '1', date: '2025-01-01', event: 'Initial filing', source: 'Case record', disputed: false },
  ], 30)
  assert.deepEqual(chronology.ordered.map((x) => x.id), ['1', '2'])
  assert.equal(chronology.gaps.length, 1)

  // Draft/checklist boundary: governance tiers prevent catalogue/checklist records from becoming filing-ready drafts.
  assert.equal(DRAFT_TIERS.length, 4)
  assert.equal(canEditDraftBody('catalogue'), false)
  assert.equal(canExportDraft('catalogue'), false)
  assert.equal(canEditDraftBody('checklist'), false)
  assert.equal(canExportDraft('checklist'), false)
  assert.ok(FILING_CHECKLISTS.length >= 13)
  assert.ok(FILING_CHECKLISTS.every((x) => x.lastReviewed && x.disclaimer))

  // Court/state configuration remains an explicit official-source boundary.
  assert.ok(STATE_PROFILES.some((x) => x.code === 'TN'))
  assert.ok(COURT_PROFILES.some((x) => x.id === 'hc-madras'))
  assert.ok(COURT_PROFILES.every((x) => /^https:\/\//.test(x.officialUrl)))

  // Session remains a structured local object ready for the existing browser-local persistence layer.
  const saved = saveResearchSession(session)
  assert.equal(saved.version, 1)
  assert.equal(saved.question.jurisdiction, 'India')
})
