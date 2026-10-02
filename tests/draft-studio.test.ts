import test from 'node:test'
import assert from 'node:assert/strict'
import { canEditDraftBody, canExportDraft, DRAFT_TIERS, getDraftTierMeta, tierLabel } from '../src/data/draftTiers'
import { getDraftTier, getReviewYear, markDraftUsed, matchesDraftTier, toggleDraftFavorite, type DraftUsageState } from '../src/lib/draftStudio'

const base: DraftUsageState = { favorites: [], recentlyUsed: [], usageCounts: {} }

test('draft governance defines four non-overlapping tiers', () => {
  assert.deepEqual(DRAFT_TIERS.map((x) => x.id), ['verified', 'scaffold', 'catalogue', 'checklist'])
  assert.equal(tierLabel('verified').includes('Tier 1'), true)
  assert.equal(getDraftTierMeta('catalogue').permitsDraftBody, false)
  assert.equal(getDraftTierMeta('catalogue').permitsExport, false)
})

test('unclassified templates never default to verified', () => {
  assert.equal(getDraftTier(undefined, undefined), 'scaffold')
  assert.equal(getDraftTier('catalog'), 'catalogue')
  assert.equal(getDraftTier('checklist'), 'checklist')
})

test('only Tier 1 and Tier 2 permit drafting/export', () => {
  assert.equal(canEditDraftBody('verified'), true)
  assert.equal(canExportDraft('verified'), true)
  assert.equal(canEditDraftBody('scaffold'), true)
  assert.equal(canExportDraft('scaffold'), true)
  assert.equal(canEditDraftBody('catalogue'), false)
  assert.equal(canExportDraft('catalogue'), false)
  assert.equal(canEditDraftBody('checklist'), false)
  assert.equal(canExportDraft('checklist'), false)
})

test('draft review year does not invent missing dates', () => {
  assert.equal(getReviewYear('2026-09-29'), '2026')
  assert.equal(getReviewYear(undefined), '')
})

test('draft governance tier filtering is deterministic', () => {
  assert.equal(matchesDraftTier('verified', 'verified'), true)
  assert.equal(matchesDraftTier('verified', 'scaffold'), false)
  assert.equal(matchesDraftTier('catalogue', 'catalogue'), true)
  assert.equal(matchesDraftTier('catalogue', 'all'), true)
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


test('drafting and comparison tools remain registered after UI redesign', async () => {
  const { TOOLS } = await import('../src/data/tools')
  assert.ok(TOOLS.some((tool) => tool.slug === 'legal-draft-studio'))
  assert.ok(TOOLS.some((tool) => tool.slug === 'document-compare'))
  assert.ok(TOOLS.some((tool) => tool.slug === 'concept-versus'))
})
