import test from 'node:test'
import assert from 'node:assert/strict'
import { RELATION_HELP, TRANSITION_HIGHLIGHTS } from '../src/data/transitionHighlights'

test('Phase 11 transition centre covers all three Sanhita pairs', () => {
  assert.deepEqual(
    [...new Set(TRANSITION_HIGHLIGHTS.map((h) => h.actPair))].sort(),
    ['bns-ipc', 'bsa-iea', 'bnss-crpc'],
  )
  assert.ok(TRANSITION_HIGHLIGHTS.length >= 6)
})

test('Phase 11 mappings use explicit non-blanket relationship labels', () => {
  for (const highlight of TRANSITION_HIGHLIGHTS) {
    assert.ok(RELATION_HELP[highlight.relation])
    assert.ok(highlight.oldRef.length > 5)
    assert.ok(highlight.newRef.length > 5)
    assert.ok(highlight.changedWording.length > 10)
    assert.ok(highlight.changedIngredients.length > 10)
    assert.ok(highlight.proceduralEffect.length > 10)
    assert.ok(highlight.commencement.length > 5)
    assert.ok(highlight.transitional.length > 10)
    assert.ok(highlight.verificationSource.includes('India Code'))
    assert.match(highlight.sourceUrl, /^https:\/\//)
    assert.ok(Array.isArray(highlight.relatedCases))
    for (const relatedCase of highlight.relatedCases) {
      assert.ok(relatedCase.title.length > 5)
      assert.match(relatedCase.url, /^https:\/\//)
      assert.ok(relatedCase.note.length > 10)
    }
  }
})

test('Phase 11 preserves honest case-source boundary', () => {
  const withCases = TRANSITION_HIGHLIGHTS.filter((h) => h.relatedCases.length > 0)
  assert.ok(withCases.length >= 2)
  assert.ok(
    TRANSITION_HIGHLIGHTS.some((h) =>
      h.relatedCases.length === 0 &&
      h.transitional.toLowerCase().includes('verify'),
    ),
  )
})
