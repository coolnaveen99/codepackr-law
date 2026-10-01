import { describe, expect, it } from 'vitest'
import { getDraftTier, getReviewYear, markDraftUsed, matchesDraftTier, toggleDraftFavorite, type DraftUsageState } from '../src/lib/draftStudio'

const base: DraftUsageState = { favorites: [], recentlyUsed: [], usageCounts: {} }

describe('draft studio governance helpers', () => {
  it('distinguishes reviewed templates from catalogue scaffolds', () => {
    expect(getDraftTier(undefined, 'reviewed')).toBe('reviewed')
    expect(getDraftTier('catalog')).toBe('scaffold')
    expect(getDraftTier(undefined)).toBe('reviewed')
  })

  it('extracts review years without inventing missing dates', () => {
    expect(getReviewYear('2026-09-29')).toBe('2026')
    expect(getReviewYear(undefined)).toBe('')
  })

  it('filters governance tiers', () => {
    expect(matchesDraftTier('reviewed', 'reviewed')).toBe(true)
    expect(matchesDraftTier('reviewed', 'scaffold')).toBe(false)
    expect(matchesDraftTier('scaffold', 'all')).toBe(true)
  })

  it('persists recent usage and usage counts through deterministic state helpers', () => {
    const next = markDraftUsed(base, 'draft-a')
    const again = markDraftUsed(next, 'draft-a')
    expect(again.recentlyUsed).toEqual(['draft-a'])
    expect(again.usageCounts['draft-a']).toBe(2)
  })

  it('toggles favourites locally', () => {
    const next = toggleDraftFavorite(base, 'draft-a')
    expect(next.favorites).toEqual(['draft-a'])
    expect(toggleDraftFavorite(next, 'draft-a').favorites).toEqual([])
  })
})
