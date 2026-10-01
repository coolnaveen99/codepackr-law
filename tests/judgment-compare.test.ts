import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { compareJudgments, categoryLabel } from '../src/lib/judgmentCompare'

const A = `ISSUES:
Whether Section 10 permits the order.

STATUTORY PROVISIONS:
Section 10 of the Act.
Article 21.

AUTHORITIES CITED:
AIR 1978 SC 597.

FACTS:
The authority passed the order without prior hearing.

EVIDENCE:
The record contained the impugned order.

REASONING:
The Court followed AIR 1978 SC 597.

FINAL ORDER:
The order was set aside.`

const B = `ISSUES:
Whether Section 10 permits the order on different evidence.

STATUTORY PROVISIONS:
Section 10 of the Act.
Article 21.

AUTHORITIES CITED:
AIR 1978 SC 597.

FACTS:
The authority gave a limited opportunity to respond.

EVIDENCE:
The record contained a notice and response.

REASONING:
The Court distinguished AIR 1978 SC 597 on the procedural record.

FINAL ORDER:
The appeal was dismissed.`

describe('PH6 Judgment Compare', () => {
  it('finds common issues, statutes and authorities', () => {
    const report = compareJudgments(A, B)
    assert.ok(report.common.issues.includes('section'))
    assert.ok(report.common.statutes.some((value) => value.includes('section 10')))
    assert.deepEqual(report.common.authorities, ['air 1978 sc 597'])
  })

  it('separates factual, evidentiary, reasoning and outcome differences with source lines', () => {
    const report = compareJudgments(A, B)
    assert.ok(report.differences.facts.some((item) => item.source === 'judgment-a'))
    assert.ok(report.differences.facts.some((item) => item.source === 'judgment-b'))
    assert.ok(report.differences.evidence.length > 0)
    assert.ok(report.differences.reasoning.length > 0)
    assert.ok(report.differences.outcomes.length > 0)
    assert.ok(report.differences.outcomes.every((item) => item.line > 0))
  })

  it('classifies only explicit authority treatment wording', () => {
    const report = compareJudgments(A, B)
    assert.equal(report.authorityTreatment[0].treatmentA, 'followed')
    assert.equal(report.authorityTreatment[0].treatmentB, 'distinguished')
    assert.ok(report.authorityTreatment[0].evidence.length >= 2)
  })

  it('does not infer overruling from textual differences', () => {
    const report = compareJudgments(A, B)
    assert.ok(report.warnings.some((warning) => warning.includes('overruled')))
    assert.ok(!report.authorityTreatment.some((item) => (item.treatmentA as string) === 'overruled'))
  })

  it('returns a safe empty report when either source is missing', () => {
    const report = compareJudgments(A, '')
    assert.deepEqual(report.authorityTreatment, [])
    assert.ok(report.warnings.some((warning) => warning.includes('Both judgment texts are required')))
    assert.equal(report.privacy, 'browser-local')
  })

  it('exposes labels for every comparison category', () => {
    assert.equal(categoryLabel('facts'), 'Factual differences')
    assert.equal(categoryLabel('legalRules'), 'Legal-rule differences')
    assert.equal(categoryLabel('outcomes'), 'Relief / outcome differences')
  })
})
