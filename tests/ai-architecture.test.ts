import test from 'node:test'
import assert from 'node:assert/strict'
import {
  AI_ARCHITECTURE_BOUNDARIES,
  buildAiLegalResponse,
  buildUnverifiedResearchSuggestion,
  validateAiLegalResponse,
} from '../src/lib/aiArchitecture'

test('Phase 17 contract labels AI output and requires verification context', () => {
  const response = buildAiLegalResponse({
    answer: 'A research suggestion.',
    sources: [{ title: 'User-provided material', sourceType: 'user-provided' }],
    evidence: ['User-provided paragraph 4'],
    uncertainty: ['Independent verification is still required.'],
    nextVerificationStep: 'Check the proposition against the official source.',
    labels: ['AI-generated'],
  })
  assert.ok(response.labels.includes('AI-generated'))
  assert.ok(response.labels.includes('source-grounded'))
  assert.ok(response.labels.includes('needs-review'))
  assert.equal(response.verificationStatus, 'unverified')
  assert.equal(validateAiLegalResponse(response).valid, true)
})

test('Phase 17 citation-bearing output cannot claim verified with an unverified citation', () => {
  const response = buildAiLegalResponse({
    answer: 'Citation-bearing research suggestion.',
    sources: [{ title: 'Official source', sourceType: 'official' }],
    evidence: ['Citation requires verification'],
    uncertainty: ['Local source index may be incomplete.'],
    nextVerificationStep: 'Check the official court record.',
    labels: ['AI-generated'],
    citationInputs: ['1999 999 SCC 999'],
  })
  assert.notEqual(response.verificationStatus, 'verified')
  assert.ok(response.labels.includes('needs-review'))
  assert.equal(validateAiLegalResponse(response).valid, true)
})

test('Phase 17 fallback explicitly refuses the false absence inference', () => {
  const response = buildUnverifiedResearchSuggestion('Possible research lead.')
  assert.equal(response.verificationStatus, 'unverified')
  assert.ok(response.uncertainty[0].includes('No authoritative source was found'))
  assert.ok(response.labels.includes('needs-review'))
})

test('Phase 17 forbids authoritative AI and predictive legal boundaries', () => {
  assert.equal(AI_ARCHITECTURE_BOUNDARIES.authoritativeAi, false)
  assert.equal(AI_ARCHITECTURE_BOUNDARIES.judicialOutcomePrediction, false)
  assert.equal(AI_ARCHITECTURE_BOUNDARIES.judgeBiasScoring, false)
  assert.equal(AI_ARCHITECTURE_BOUNDARIES.convictionPrediction, false)
  assert.equal(AI_ARCHITECTURE_BOUNDARIES.winnerPrediction, false)
  assert.equal(AI_ARCHITECTURE_BOUNDARIES.silentTelemetryOfLegalText, false)
})
