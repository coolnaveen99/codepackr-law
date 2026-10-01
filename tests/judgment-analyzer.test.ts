import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  analyzeJudgmentText,
  extractCitationCandidates,
  sectionLabel,
  validateNoInventedSourceMetadata,
} from '../src/lib/judgmentAnalyzer'

const SAMPLE = `MANEKA GANDHI V. UNION OF INDIA
Citation: AIR 1978 SC 597
Court: Supreme Court of India

FACTS:
The passport was impounded without prior hearing.

PROCEDURAL HISTORY:
The petitioner approached the Supreme Court under Article 32.

ISSUES:
Whether the procedure was fair.

SUBMISSIONS:
The petitioner challenged the order.

STATUTORY PROVISIONS:
Article 21 and Section 10(3)(c) of the Passports Act.

AUTHORITIES CITED:
AIR 1978 SC 597.

EVIDENCE:
The impounding order was produced.

REASONING:
The Court considered fairness and natural justice.

FINDINGS:
The procedure must satisfy constitutional fairness.

RATIO:
Procedure affecting personal liberty must be fair.

OBITER:
The Court made broader observations.

FINAL ORDER:
The petition was allowed.

UNRESOLVED QUESTIONS:
Later application remains outside the source text.

FOLLOW-UP AUTHORITIES:
No later authority is supplied.`

describe('PH5 Judgment Analyzer — deterministic source structure', () => {
  it('extracts the Phase 5 analysis sections without inventing absent text', () => {
    const result = analyzeJudgmentText(SAMPLE, 'txt')
    assert.equal(result.sections.facts, 'The passport was impounded without prior hearing.')
    assert.equal(result.sections.ratio, 'Procedure affecting personal liberty must be fair.')
    assert.equal(result.sections.finalOrder, 'The petition was allowed.')
    assert.equal(result.sections.authorities, 'AIR 1978 SC 597.')
    assert.equal(result.sections.unresolvedQuestions, 'Later application remains outside the source text.')
    assert.equal(result.sections.proceduralHistory, 'The petitioner approached the Supreme Court under Article 32.')
    assert.ok(result.paragraphCount >= 15)
    assert.ok(result.spans.some((span) => span.section === 'ratio'))
    assert.ok(validateNoInventedSourceMetadata(result))
  })

  it('records warnings rather than guessing when headings are absent', () => {
    const result = analyzeJudgmentText('A judgment without labelled sections and no reliable structure.', 'text')
    assert.equal(result.sections.facts, '')
    assert.equal(result.sections.ratio, '')
    assert.ok(result.warnings.some((warning) => warning.includes('No recognised section headings')))
    assert.ok(result.warnings.some((warning) => warning.includes('will not infer legal facts')))
  })

  it('keeps source line and paragraph ranges on extracted blocks', () => {
    const result = analyzeJudgmentText('FACTS:\nFirst fact.\nSecond fact.\n\nRATIO:\nThe ratio.', 'txt')
    const facts = result.spans.find((span) => span.section === 'facts')
    assert.ok(facts)
    assert.equal(facts?.startLine, 2)
    assert.equal(facts?.endLine, 3)
    assert.equal(facts?.startParagraph, 1)
    assert.equal(facts?.endParagraph, 1)
  })

  it('extracts citation candidates without claiming they are verified', () => {
    const candidates = extractCitationCandidates('AIR 1978 SC 597 and (2019) 2 SCC 1 and 2024 INSC 100.')
    assert.deepEqual(candidates, ['AIR 1978 SC 597', '(2019) 2 SCC 1', '2024 INSC 100'])
  })

  it('exposes neutral labels for all Phase 5 sections', () => {
    assert.equal(sectionLabel('ratio'), 'Ratio decidendi / holding')
    assert.equal(sectionLabel('followUpAuthorities'), 'Follow-up authorities')
  })
})
