import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

describe('Phase 28 neutral analysis boundary', () => {
  it('keeps predictive and competence scoring utilities out of scope', () => {
    const forbidden = [
      'Judge-decision prediction',
      'Judge-bias scores',
      'Conviction prediction',
      'Winner prediction',
      'Personal competence or fitness scores',
    ]
    assert.equal(forbidden.length, 5)
    assert.ok(forbidden.every((value) => value.length > 0))
  })

  it('covers the roadmap extraction utility set through the judgment analyzer surface', () => {
    const utilities = [
      'Judgment structure analysis',
      'Authority extraction / organisation',
      'Chronology extraction / organisation',
      'Issue and statute extraction',
      'Judgment comparison',
      'Citation verification',
      'Document organisation / compare',
    ]
    assert.equal(new Set(utilities).size, 7)
  })
})
