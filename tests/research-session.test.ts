import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  emptyResearchSession,
  emptyAuthorityRow,
  researchNoteFromSession,
  researchNoteFilename,
  researchSessionFilename,
  validateAndNormalizeSession,
  exportResearchSessionJson,
  generateResearchNoteDocx,
} from '../src/lib/researchSession'

describe('PH3-020 research question fields', () => {
  it('includes court level, date range, act, and section in the note', () => {
    const session = emptyResearchSession()
    session.question = {
      question: 'Does s. 32 CPC apply after a s. 30 summons?',
      jurisdiction: 'India — All courts',
      courtLevel: 'District Court',
      dateFrom: '2020-01-01',
      dateTo: '2026-12-31',
      subjectSlug: 'cpc',
      act: 'CPC, 1908',
      section: 's. 32',
    }
    const note = researchNoteFromSession(session)
    assert.match(note, /Court level:\*\*\s*District Court/)
    assert.match(note, /Subject:\*\*\s*cpc/)
    assert.match(note, /Act:\*\*\s*CPC, 1908/)
    assert.match(note, /Section:\*\*\s*s\. 32/)
    assert.match(note, /Date range:\*\*\s*2020-01-01 – 2026-12-31/)
  })
})

describe('PH3-030 authority matrix fields', () => {
  it('includes date, paragraph, treatment, and source in the note', () => {
    const session = emptyResearchSession()
    const row = emptyAuthorityRow()
    row.caseName = 'Maneka Gandhi'
    row.court = 'Supreme Court'
    row.date = '1978-01-25'
    row.citation = 'AIR 1978 SC 597'
    row.statute = 'Art. 21'
    row.issue = 'Procedure established by law'
    row.holding = 'Procedure must be fair, just and reasonable'
    row.paragraph = 'user note — verify on reporter'
    row.treatment = 'followed'
    row.source = 'https://example.invalid/reporter'
    row.verification = 'partial'
    session.authorities = [row]
    const note = researchNoteFromSession(session)
    assert.match(note, /Maneka Gandhi/)
    assert.match(note, /Date:\*\*\s*1978-01-25/)
    assert.match(note, /Para \/ pin cite:\*\*\s*user note/)
    assert.match(note, /Treatment:\*\*\s*followed/)
    assert.match(note, /Source:\*\*\s*https:\/\/example\.invalid\/reporter/)
    assert.match(note, /Verification status:\*\*\s*partial/)
  })
})

describe('PH3-040 research note polish / export', () => {
  it('uses clearer section labels and structured authority blocks', () => {
    const session = emptyResearchSession()
    session.question.question = 'Test question'
    session.shortAnswer = 'Tentative yes'
    const row = emptyAuthorityRow()
    row.caseName = 'Sample Case'
    row.citation = 'AIR 1978 SC 1'
    session.authorities = [row]
    const note = researchNoteFromSession(session)
    assert.match(note, /^# Research Note/m)
    assert.match(note, /## 1\. Question presented/)
    assert.match(note, /### Matter filters/)
    assert.match(note, /## 4\. Authority matrix/)
    assert.match(note, /### 1\. Sample Case/)
    assert.match(note, /## 6\. Counter-authorities and contrary views/)
    assert.match(note, /not legal advice/i)
    assert.match(note, /Paragraph \/ pin cites verified/)
  })

  it('builds a safe markdown filename from act/section', () => {
    const session = emptyResearchSession()
    session.question.act = 'CPC, 1908'
    session.question.section = 's. 32'
    const name = researchNoteFilename(session)
    assert.match(name, /^research-note-cpc-1908-\d{4}-\d{2}-\d{2}\.md$/)
  })
})

describe('PH3-050 canonical entity references in research note', () => {
  it('renders Canonical ID in the markdown note for linked authorities', () => {
    const session = emptyResearchSession()
    const row = emptyAuthorityRow()
    row.caseName = 'Maneka Gandhi v. Union of India'
    row.court = 'Supreme Court of India'
    row.citation = '(1978) 1 SCC 248'
    row.statute = 'Article 21'
    row.canonicalEntityId = 'judgment:india:maneka-gandhi-1978'
    row.verification = 'needs-review'
    session.authorities = [row]

    const note = researchNoteFromSession(session)
    assert.match(note, /Canonical ID:\*\*\s*judgment:india:maneka-gandhi-1978/)
    assert.match(note, /Verification status:\*\*\s*needs-review/)
  })

  it('renders canonical provision authorities even when caseName is blank', () => {
    const session = emptyResearchSession()
    const row = emptyAuthorityRow()
    row.statute = 'Code of Civil Procedure, 1908, Section 32'
    row.canonicalEntityId = 'provision:india:cpc-s-32'
    row.holding = 'Penalty for default'
    row.verification = 'needs-review'
    session.authorities = [row]

    const note = researchNoteFromSession(session)
    assert.match(note, /Code of Civil Procedure, 1908, Section 32/)
    assert.match(note, /Canonical ID:\*\*\s*provision:india:cpc-s-32/)
  })
})

describe('PH3-080 session JSON import/export and DOCX polish', () => {
  it('validates and normalizes valid session JSON', () => {
    const raw = {
      version: 1,
      updatedAt: '2026-10-01T12:00:00.000Z',
      question: {
        question: 'What is the standard of proof in PIL?',
        jurisdiction: 'India — Supreme Court',
        courtLevel: 'Supreme Court',
      },
      issues: {
        primary: 'Locus standi requirement',
        secondary: ['Public interest definition'],
        statutory: [],
        procedural: [],
        evidence: [],
        limitation: [],
      },
      authorities: [
        {
          caseName: 'SP Gupta v. Union of India',
          citation: 'AIR 1982 SC 149',
          verification: 'verified',
        },
      ],
      analysis: 'Liberalized standing allows any bona fide citizen to move court.',
      counterAuthorities: '',
      unresolved: '',
    }

    const session = validateAndNormalizeSession(raw)
    assert.equal(session.version, 1)
    assert.equal(session.question.question, 'What is the standard of proof in PIL?')
    assert.equal(session.authorities.length, 1)
    assert.equal(session.authorities[0].caseName, 'SP Gupta v. Union of India')
    assert.equal(session.authorities[0].verification, 'verified')
    assert.ok(session.authorities[0].id)
  })

  it('rejects non-object root inputs with descriptive error', () => {
    assert.throws(() => validateAndNormalizeSession(null), /root must be a valid JSON object/)
    assert.throws(() => validateAndNormalizeSession('invalid string'), /root must be a valid JSON object/)
    assert.throws(() => validateAndNormalizeSession(42), /root must be a valid JSON object/)
  })

  it('coerces missing fields with safe default structures', () => {
    const session = validateAndNormalizeSession({})
    assert.equal(session.version, 1)
    assert.equal(session.question.jurisdiction, 'India — All courts')
    assert.deepEqual(session.authorities, [])
    assert.equal(session.analysis, '')
  })

  it('exports session to valid JSON string', () => {
    const session = emptyResearchSession()
    session.question.question = 'Test Question'
    const jsonStr = exportResearchSessionJson(session)
    const reparsed = JSON.parse(jsonStr)
    assert.equal(reparsed.question.question, 'Test Question')
    assert.equal(reparsed.version, 1)
  })

  it('generates filename for .docx and .json extensions', () => {
    const session = emptyResearchSession()
    session.question.act = 'BNS, 2023'
    assert.match(researchNoteFilename(session, 'docx'), /^research-note-bns-2023-\d{4}-\d{2}-\d{2}\.docx$/)
    assert.match(researchSessionFilename(session), /^research-session-bns-2023-\d{4}-\d{2}-\d{2}\.json$/)
  })

  it('generates DOCX binary blob from research session', async () => {
    const session = emptyResearchSession()
    session.question.question = 'Validity of section 32 summons'
    session.question.act = 'CPC'
    session.question.section = 's. 32'
    const row = emptyAuthorityRow()
    row.caseName = 'Maneka Gandhi'
    row.citation = 'AIR 1978 SC 597'
    session.authorities = [row]

    const blob = await generateResearchNoteDocx(session)
    assert.ok(blob instanceof Blob)
    assert.ok(blob.size > 1000)
    assert.equal(blob.type, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  })
})

describe('PH3-090 Mobile UX pass for matrix + note', () => {
  it('formats authority matrix into vertical structured blocks instead of horizontal wide tables', () => {
    const session = emptyResearchSession()
    const row = emptyAuthorityRow()
    row.caseName = 'Kesavananda Bharati v. State of Kerala'
    row.citation = '(1973) 4 SCC 225'
    row.court = 'Supreme Court of India'
    row.statute = 'Constitution of India, Article 368'
    row.holding = 'Basic structure doctrine holds that Parliament cannot alter the essential features of the Constitution.'
    row.paragraph = 'Para 122'
    row.treatment = 'followed'
    row.verification = 'verified'
    session.authorities = [row]

    const note = researchNoteFromSession(session)
    // Verify vertical bullet blocks rather than markdown pipe tables (| col | col |) that cause mobile horizontal overflow
    assert.ok(!note.includes('| --- |'))
    assert.match(note, /### Kesavananda Bharati v\. State of Kerala \(\(1973\) 4 SCC 225\)/)
    assert.match(note, /- \*\*Holding \/ ratio:\*\*/)
    assert.match(note, /- \*\*Treatment:\*\* followed/)
    assert.match(note, /- \*\*Verification status:\*\* verified/)
  })

  it('keeps long questions and notes wrapped and clean for small mobile viewports', () => {
    const session = emptyResearchSession()
    session.question.question = 'Whether the provisions of section 32 read with section 30 of CPC 1908 empower the civil court to issue bailable warrant against witness who fails to attend despite valid service of summons?'
    session.analysis = 'The powers of civil court are expansive under Section 32 CPC. The court may issue warrant of arrest, attach property, impose fine not exceeding five thousand rupees, or order security.'
    
    const note = researchNoteFromSession(session)
    assert.ok(note.includes('1. Question presented'))
    assert.ok(note.includes('5. Analysis'))
    assert.ok(!note.includes('\t')) // No tabs causing layout shifts
  })
})


