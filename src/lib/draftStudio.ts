import type { DraftTier } from '../data/draftTiers'

export type DraftUsageState = {
  favorites: string[]
  recentlyUsed: string[]
  usageCounts: Record<string, number>
}

const STORAGE_KEY = 'cp-law:draft-studio:v1'

const emptyState = (): DraftUsageState => ({ favorites: [], recentlyUsed: [], usageCounts: {} })

export function readDraftUsage(): DraftUsageState {
  if (typeof window === 'undefined') return emptyState()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyState()
    const parsed = JSON.parse(raw) as Partial<DraftUsageState>
    return {
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites.filter((x): x is string => typeof x === 'string') : [],
      recentlyUsed: Array.isArray(parsed.recentlyUsed) ? parsed.recentlyUsed.filter((x): x is string => typeof x === 'string') : [],
      usageCounts: parsed.usageCounts && typeof parsed.usageCounts === 'object' ? parsed.usageCounts as Record<string, number> : {},
    }
  } catch {
    return emptyState()
  }
}

export function writeDraftUsage(state: DraftUsageState) {
  if (typeof window === 'undefined') return
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch {}
}

export function markDraftUsed(state: DraftUsageState, id: string): DraftUsageState {
  const recentlyUsed = [id, ...state.recentlyUsed.filter((x) => x !== id)].slice(0, 10)
  return { ...state, recentlyUsed, usageCounts: { ...state.usageCounts, [id]: (state.usageCounts[id] || 0) + 1 } }
}

export function toggleDraftFavorite(state: DraftUsageState, id: string): DraftUsageState {
  const favorites = state.favorites.includes(id) ? state.favorites.filter((x) => x !== id) : [...state.favorites, id]
  return { ...state, favorites }
}

/** Legacy status values are accepted only for migration; absence of explicit tier is never promoted to Tier 1. */
export function getDraftTier(status?: string, tier?: DraftTier): DraftTier {
  if (tier) return tier
  if (status === 'catalog') return 'catalogue'
  if (status === 'checklist') return 'checklist'
  return 'scaffold'
}

export function getReviewYear(lastReviewed?: string): string {
  return lastReviewed?.slice(0, 4) || ''
}

export type DraftTierFilter = 'all' | DraftTier

export function matchesDraftTier(tier: DraftTier, filter: DraftTierFilter) {
  return filter === 'all' || tier === filter
}
