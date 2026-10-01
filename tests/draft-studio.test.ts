import test from 'node:test'
import assert from 'node:assert/strict'
import { getDraftTier, getReviewYear, markDraftUsed, matchesDraftTier, toggleDraftFavorite, type DraftUsageState } from '../src/lib/draftStudio'

const base: DraftUsageState = { favorites: [], recentlyUsed: [], usageCounts: {} }

test('draft governance distinguishes reviewed and catalogue scaffolds', () => {
  assert.equal(getDraftTier(undefined, 'reviewed'), 'reviewed')
  assert.equal(getDraftTier('catalog'), 'scaffold')
  assert.equal(getDraftTier(undefined), 'reviewed')
})

test('draft review year does not invent missing dates', () => {
  assert.equal(getReviewYear('2026-09-29'), '2026')
  assert.equal(getReviewYear(undefined), '')
})

test('draft governance tier filtering is deterministic', () => {
  assert.equal(matchesDraftTier('reviewed', 'reviewed'), true)
  assert.equal(matchesDraftTier('reviewed', 'scaffold'), false)
  assert.equal(matchesDraftTier('scaffold', 'all'), true)
})

test('draft usage tracks recent items and counts locally', () => {
  const next = markDraftUsed(base, 'draft-a')
  const again = markDraftUsed(next, 'draft-a')
  assert.deepEqual(again.recentlyUsed, ['draft-a'])
  assert.equal(again.usageCounts['draft-a'], 2)
})

test('draft favourites toggle locally', () => {
  const next = toggleDraftFavorite(base, 'draft-a')
  assert.deepEqual(next.favorites, ['draft-a'])
  assert.deepEqual(toggleDraftFavorite(next, 'draft-a').favorites, [])
})
