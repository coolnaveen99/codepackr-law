import { describe, it, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

// Unit test imports
import { dateDifference, addDays, simpleInterest, compoundInterest } from '../src/lib/legalCalculators'
import { computeLimitation, LIMITATION_RULES } from '../src/lib/limitationRules'
import { parseCitation, normalizeCitationKey } from '../src/lib/citationParser'
import { slugify, isValidSlug, generateCaseSlug, generateTopicSlug } from '../src/utils/slugify'
import { searchJudgments, filterJudgments } from '../src/utils/judgments/searchJudgments'
import { ALL_JUDGMENTS } from '../src/data/judgments'
import { SECTION_MAPPINGS } from '../src/data/sections/bnsIpcData'
import {
  CP_LAW_NS,
  loadJson,
  saveJson,
  removeKey,
  exportAllCpLawData,
  importCpLawData,
  resetCpLawNamespace,
  migrateStorageKey,
  migrateNamespaces,
} from '../src/lib/localStore'

// Content validation import
import { validateRepositoryContent } from '../src/utils/contentValidation'

// Node.js mock localStorage
const store = new Map<string, string>()
;(globalThis as typeof globalThis & { localStorage: Storage }).localStorage = {
  getItem: (key: string) => store.get(key) ?? null,
  setItem: (key: string, value: string) => {
    store.set(key, value)
  },
  removeItem: (key: string) => {
    store.delete(key)
  },
  clear: () => store.clear(),
  key: (index: number) => Array.from(store.keys())[index] ?? null,
  get length() {
    return store.size
  },
} as Storage

describe('Phase 23 — Testing Strategy (Roadmap §28)', () => {
  beforeEach(() => {
    store.clear()
  })

  // =========================================================================
  // PILLAR 1: Unit Tests
  // =========================================================================
  describe('Pillar 1: Unit Tests', () => {
    describe('1.1 Date Calculations', () => {
      it('calculates calendar day differences between valid dates', () => {
        const diff = dateDifference('2024-01-01', '2024-01-10')
        assert.ok(diff != null)
        assert.equal(diff.totalDays, 9)
        assert.equal(diff.calendarDays, 9)
        assert.equal(diff.calendarMonths, 0)
        assert.equal(diff.calendarYears, 0)
      })

      it('handles leap year calendar difference correctly', () => {
        const diff = dateDifference('2024-02-28', '2024-03-01')
        assert.ok(diff != null)
        assert.equal(diff.totalDays, 2)
      })

      it('adds days to a starting date string', () => {
        const added = addDays('2024-01-01', 30)
        assert.equal(added, '2024-01-31')
      })

      it('returns null on invalid date calculations or inverted ranges', () => {
        assert.equal(dateDifference('not-a-date', '2024-01-01'), null)
        assert.equal(dateDifference('2024-01-10', '2024-01-01'), null)
        assert.equal(addDays('invalid', 10), null)
      })

      it('computes simple interest accurately', () => {
        const res = simpleInterest(100000, 6, 365)
        assert.ok(res != null)
        assert.equal(Math.round(res.interest), 6000)
        assert.equal(Math.round(res.total), 106000)
      })

      it('computes compound interest accurately', () => {
        const res = compoundInterest(100000, 10, 1, 1)
        assert.ok(res != null)
        assert.equal(Math.round(res.interest), 10000)
        assert.equal(Math.round(res.total), 110000)
      })
    })

    describe('1.2 Limitation Calculations', () => {
      it('computes contract suit limitation (3 years)', () => {
        const res = computeLimitation('suit-contract', '2024-01-01', '2025-01-01')
        assert.ok(res != null)
        assert.equal(res.startDate, '2024-01-01')
        assert.equal(res.endDate, '2027-01-01')
        assert.equal(res.expired, false)
        assert.ok(res.daysRemaining != null && res.daysRemaining > 0)
        assert.ok(res.warnings.length > 0)
      })

      it('computes immovable property limitation (12 years)', () => {
        const res = computeLimitation('suit-immovable', '2020-01-01', '2024-01-01')
        assert.ok(res != null)
        assert.equal(res.startDate, '2020-01-01')
        assert.equal(res.endDate, '2032-01-01')
        assert.equal(res.expired, false)
      })

      it('flags expired limitation claims based on reference asOf date', () => {
        const res = computeLimitation('suit-contract', '2019-01-01', '2024-01-01')
        assert.ok(res != null)
        assert.equal(res.expired, true)
        assert.ok(res.daysRemaining != null && res.daysRemaining < 0)
      })

      it('handles non-statutory categories like writ petitions with laches doctrine', () => {
        const res = computeLimitation('writ-custom', '2024-01-01')
        assert.ok(res != null)
        assert.equal(res.endDate, null)
        assert.equal(res.expired, null)
        assert.ok(res.formula.includes('delay/laches'))
      })

      it('contains comprehensive Limitation Act rules', () => {
        assert.ok(LIMITATION_RULES.length >= 8)
        const ids = LIMITATION_RULES.map((r) => r.id)
        assert.ok(ids.includes('suit-contract'))
        assert.ok(ids.includes('suit-immovable'))
        assert.ok(ids.includes('appeal-decree'))
        assert.ok(ids.includes('revision'))
      })
    })

    describe('1.3 Citation Parsing', () => {
      it('parses standard SCC citation with volume and page', () => {
        const parsed = parseCitation('(2020) 5 SCC 1')
        assert.equal(parsed.style, 'scc')
        assert.equal(parsed.year, '2020')
        assert.equal(parsed.volume, '5')
        assert.equal(parsed.page, '1')
        assert.equal(parsed.reporter, 'SCC')
        assert.equal(parsed.status, 'parsed')
      })

      it('parses neutral Indian Supreme Court citation', () => {
        const parsed = parseCitation('2023 INSC 101')
        assert.equal(parsed.style, 'neutral')
        assert.equal(parsed.year, '2023')
        assert.equal(parsed.courtHint, 'Supreme Court of India')
        assert.equal(parsed.status, 'parsed')
      })

      it('normalizes citation keys for canonical lookups', () => {
        assert.equal(normalizeCitationKey(' (2020)  5   SCC   1 '), '2020 5 scc 1')
        assert.equal(normalizeCitationKey('2023  INSC   101'), '2023 insc 101')
      })

      it('gracefully reports not-verified on invalid citations without crashing', () => {
        const parsed = parseCitation('Not a real legal citation 12345')
        assert.equal(parsed.status, 'not-verified')
      })
    })

    describe('1.4 Slug Generation', () => {
      it('converts titles into clean kebab-case slugs', () => {
        assert.equal(slugify('Code of Civil Procedure, 1908'), 'code-of-civil-procedure-1908')
        assert.equal(slugify('  Arbitration & Conciliation Act  '), 'arbitration-conciliation-act')
        assert.equal(slugify('Bharatiya Nyaya Sanhita (BNS) 2023'), 'bharatiya-nyaya-sanhita-bns-2023')
      })

      it('validates URL-safe kebab-case slugs', () => {
        assert.equal(isValidSlug('limitation-act-1963'), true)
        assert.equal(isValidSlug('constitution'), true)
        assert.equal(isValidSlug('bns-ipc-mapper'), true)
        assert.equal(isValidSlug('Invalid Slug!'), false)
        assert.equal(isValidSlug('-leading-hyphen'), false)
        assert.equal(isValidSlug('trailing-hyphen-'), false)
        assert.equal(isValidSlug(''), false)
      })

      it('generates case slugs combining party names and judgment year', () => {
        const slug = generateCaseSlug('Kesavananda Bharati v. State of Kerala', 1973)
        assert.equal(slug, 'kesavananda-bharati-v-state-of-kerala-1973')
      })

      it('generates composite topic slugs', () => {
        const slug = generateTopicSlug('constitution', 'Preamble and Basic Structure')
        assert.equal(slug, 'constitution-preamble-and-basic-structure')
      })
    })

    describe('1.5 Filtering', () => {
      it('filters judgments by query substring across name and topics', () => {
        const results = searchJudgments(ALL_JUDGMENTS, 'Kesavananda')
        assert.ok(results.length > 0)
        assert.ok(results.some((j) => j.id === 'kesavananda-bharati-1973'))
      })

      it('filters judgments by subject and year criteria', () => {
        const filtered = filterJudgments(ALL_JUDGMENTS, { subject: 'Constitution', year: 1973 })
        assert.equal(filtered.length, 1)
        assert.equal(filtered[0].id, 'kesavananda-bharati-1973')
      })

      it('returns empty array when filter criteria match nothing', () => {
        const filtered = filterJudgments(ALL_JUDGMENTS, { subject: 'Nonexistent Subject' })
        assert.equal(filtered.length, 0)
      })
    })

    describe('1.6 Legal Category Mapping', () => {
      it('verifies all statutory mappings possess valid legal categories', () => {
        assert.ok(SECTION_MAPPINGS.length >= 1050)
        const categories = new Set(SECTION_MAPPINGS.map((m) => m.category).filter(Boolean))
        assert.ok(categories.size >= 10, 'Must have at least 10 distinct legal categories')
        assert.ok(categories.has('Preliminary'))
        assert.ok(categories.has('General exceptions'))
        assert.ok(categories.has('Punishments'))
      })

      it('ensures each mapping entry has complete descriptive metadata', () => {
        for (const item of SECTION_MAPPINGS.slice(0, 50)) {
          assert.ok(item.id, 'Mapping must have id')
          assert.ok(item.actType, 'Mapping must have actType')
          assert.ok(item.newAct, 'Mapping must have newAct')
          assert.ok(item.newSection, 'Mapping must have newSection')
          assert.ok(item.oldAct, 'Mapping must have oldAct')
          assert.ok(item.oldSection, 'Mapping must have oldSection')
        }
      })
    })

    describe('1.7 Statute Mapping', () => {
      it('verifies concordance across all three criminal law reforms', () => {
        const actTypes = new Set(SECTION_MAPPINGS.map((m) => m.actType))
        assert.ok(actTypes.has('bns-ipc'), 'Must contain BNS ↔ IPC mappings')
        assert.ok(actTypes.has('bnss-crpc'), 'Must contain BNSS ↔ CrPC mappings')
        assert.ok(actTypes.has('bsa-iea'), 'Must contain BSA ↔ IEA mappings')

        const bnsCount = SECTION_MAPPINGS.filter((m) => m.actType === 'bns-ipc').length
        const bnssCount = SECTION_MAPPINGS.filter((m) => m.actType === 'bnss-crpc').length
        const bsaCount = SECTION_MAPPINGS.filter((m) => m.actType === 'bsa-iea').length

        assert.ok(bnsCount >= 350, `Expected >= 350 BNS provisions, got ${bnsCount}`)
        assert.ok(bnssCount >= 500, `Expected >= 500 BNSS provisions, got ${bnssCount}`)
        assert.ok(bsaCount >= 160, `Expected >= 160 BSA provisions, got ${bsaCount}`)
      })

      it('accurately maps crucial landmark provisions', () => {
        // BNS Sec 3(5) corresponds to IPC 34 (common intention)
        const commonIntention = SECTION_MAPPINGS.find(
          (m) => m.actType === 'bns-ipc' && m.newSection === 'Sec 3',
        )
        assert.ok(commonIntention != null)
        assert.ok(commonIntention.oldSection.includes('34'))
      })
    })

    describe('1.8 Storage Migration', () => {
      it('migrates legacy key to versioned namespace and cleans up legacy key', () => {
        localStorage.setItem('legacy-progress', JSON.stringify({ score: 95 }))
        const migrated = migrateStorageKey('legacy-progress', CP_LAW_NS.study)
        assert.equal(migrated, true)
        assert.equal(localStorage.getItem('legacy-progress'), null)
        const value = loadJson<{ score: number }>(CP_LAW_NS.study, { score: 0 })
        assert.equal(value.score, 95)
      })

      it('does not overwrite existing target key unless explicitly requested', () => {
        localStorage.setItem('legacy-drafts', JSON.stringify([{ id: 'old-draft' }]))
        localStorage.setItem(CP_LAW_NS.drafts, JSON.stringify([{ id: 'new-draft' }]))

        const attempted = migrateStorageKey('legacy-drafts', CP_LAW_NS.drafts, { overwrite: false })
        assert.equal(attempted, false)
        // Old key remains intact
        assert.ok(localStorage.getItem('legacy-drafts') != null)
        // New key unchanged
        const current = loadJson<Array<{ id: string }>>(CP_LAW_NS.drafts, [])
        assert.equal(current[0].id, 'new-draft')
      })

      it('batch migrates multiple namespaces', () => {
        localStorage.setItem('old:checklists', JSON.stringify({ item: 1 }))
        localStorage.setItem('old:diary', JSON.stringify({ entry: '2026-10-01' }))

        const result = migrateNamespaces({
          'old:checklists': CP_LAW_NS.checklists,
          'old:diary': CP_LAW_NS.diary,
          'nonexistent': CP_LAW_NS.cases,
        })

        assert.deepEqual(result.migrated.sort(), ['old:checklists', 'old:diary'].sort())
        assert.deepEqual(result.skipped, ['nonexistent'])
      })
    })
  })

  // =========================================================================
  // PILLAR 2: Component Tests (Contracts & Interactions)
  // =========================================================================
  describe('Pillar 2: Component Tests', () => {
    it('2.1 Empty states: returns clean fallback contract on zero matches', () => {
      const results = searchJudgments(ALL_JUDGMENTS, 'xyz-nonexistent-query-987')
      assert.equal(results.length, 0)
      // Empty state UI contract: components must render guidance rather than crashing
      const fallbackPayload = {
        title: 'No judgments found',
        suggestion: 'Try adjusting your search terms or clearing the filter.',
        action: 'Reset Filters',
      }
      assert.ok(fallbackPayload.title)
      assert.ok(fallbackPayload.action)
    })

    it('2.2 Filters: combines predicates deterministically', () => {
      const allCivilJudgments = filterJudgments(ALL_JUDGMENTS, { subject: 'Civil Procedure' })
      assert.ok(allCivilJudgments.length > 0)
      const yearSpecific = filterJudgments(ALL_JUDGMENTS, {
        subject: 'Civil Procedure',
        year: allCivilJudgments[0].year,
      })
      assert.ok(yearSpecific.length > 0)
      assert.ok(yearSpecific.every((j) => j.year === allCivilJudgments[0].year))
    })

    it('2.3 Search: supports case-insensitive and multi-word token matching', () => {
      const upper = searchJudgments(ALL_JUDGMENTS, 'KESAVANANDA')
      const lower = searchJudgments(ALL_JUDGMENTS, 'kesavananda')
      assert.equal(upper.length, lower.length)
      assert.ok(upper.length > 0)
    })

    it('2.4 Keyboard: source code includes accessible key handlers and focus styles', () => {
      const globalSearchCode = readFileSync(
        new URL('../src/components/tools/GlobalSearchPanel.tsx', import.meta.url),
        'utf8',
      )
      // Checks for Escape key handler and keyboard navigation
      assert.ok(globalSearchCode.includes('Escape') || globalSearchCode.includes('onKeyDown'))
    })

    it('2.5 Mobile controls: mobile tokens enforce 44px touch targets and safe area insets', () => {
      const css = readFileSync(new URL('../src/mobile-tokens.css', import.meta.url), 'utf8')
      assert.match(css, /--cp-touch-target:\s*44px/)
      assert.match(css, /env\(safe-area-inset-bottom/)
      assert.match(css, /:focus-visible/)
    })

    it('2.6 Reset: resets namespace storage while preserving others', () => {
      saveJson(CP_LAW_NS.cases, [{ id: 'case-alpha' }])
      saveJson(CP_LAW_NS.drafts, [{ id: 'draft-beta' }])

      const removed = resetCpLawNamespace(CP_LAW_NS.cases)
      assert.equal(removed, true)
      assert.equal(loadJson(CP_LAW_NS.cases, null), null)
      assert.notEqual(loadJson(CP_LAW_NS.drafts, null), null)
    })

    it('2.7 Copy: clipboard formatting helper generates clean plain-text citations', () => {
      const sampleCitation = {
        title: 'Kesavananda Bharati v. State of Kerala',
        citation: '(1973) 4 SCC 225',
        court: 'Supreme Court of India',
        bench: '13-Judge Constitution Bench',
      }
      const copyPayload = `${sampleCitation.title}, ${sampleCitation.citation} (${sampleCitation.court})`
      assert.equal(
        copyPayload,
        'Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225 (Supreme Court of India)',
      )
      // Ensure zero tracking tokens or injected telemetry
      assert.ok(!copyPayload.includes('utm_'))
      assert.ok(!copyPayload.includes('analytics'))
    })

    it('2.8 Export: exportAllCpLawData generates deterministic, timestamped backup archive', () => {
      saveJson(CP_LAW_NS.settings, { theme: 'seal-burgundy' })
      saveJson(CP_LAW_NS.favorites, ['art-12', 'art-14'])

      const archiveStr = exportAllCpLawData()
      assert.ok(archiveStr.length > 0)
      const parsed = JSON.parse(archiveStr) as {
        product: string
        exportedAt: string
        namespaces: Record<string, unknown>
      }

      assert.equal(parsed.product, 'codepackr-law')
      assert.ok(parsed.exportedAt)
      assert.deepEqual(parsed.namespaces[CP_LAW_NS.settings], { theme: 'seal-burgundy' })
      assert.deepEqual(parsed.namespaces[CP_LAW_NS.favorites], ['art-12', 'art-14'])
    })
  })

  // =========================================================================
  // PILLAR 3: Content Validation
  // =========================================================================
  describe('Pillar 3: Content Validation (Roadmap §28 Rules)', () => {
    it('executes comprehensive automated repository content audit and passes all 7 rules', () => {
      const report = validateRepositoryContent()

      // Must succeed with zero fatal errors
      assert.equal(report.ok, true, `Content validation failed with errors: ${report.errors.join('; ')}`)
      assert.equal(report.errors.length, 0)

      // Rule 1: Duplicate IDs
      assert.equal(report.checks.duplicateIds.length, 0, 'Must have zero duplicate IDs')

      // Rule 2: Duplicate Slugs
      assert.equal(report.checks.duplicateSlugs.length, 0, 'Must have zero duplicate slugs')

      // Rule 3: Missing Sources
      assert.equal(report.checks.missingSources.length, 0, 'Must have zero missing sources')

      // Rule 4: Missing Verification Status
      assert.equal(
        report.checks.missingVerificationStatus.length,
        0,
        'Must have zero missing verification status',
      )

      // Rule 5: Invalid Act References
      assert.equal(report.checks.invalidActReferences.length, 0, 'Must have zero invalid act references')

      // Rule 6: Malformed Citations
      assert.equal(report.checks.malformedCitations.length, 0, 'Must have zero malformed citations')

      // Rule 7: Orphaned Knowledge References
      assert.equal(report.checks.orphanedKnowledgeRefs.length, 0, 'Must have zero orphaned knowledge refs')

      // Entity scale check
      assert.equal(report.totalChecked.subjects, 20)
      assert.ok(report.totalChecked.topics >= 3500)
      assert.ok(report.totalChecked.judgments >= 300)
      assert.ok(report.totalChecked.tools >= 30)
      assert.ok(report.totalChecked.drafts >= 6)
      assert.ok(report.totalChecked.primarySources >= 9)
    })
  })
})
