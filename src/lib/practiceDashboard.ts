import { CP_LAW_NS, loadJson, saveJson } from './localStore'

export interface FavouriteStatute {
  id: string
  name: string
  href: string
}

const DEFAULT_FAVOURITES: FavouriteStatute[] = []

export function readFavouriteStatutes(): FavouriteStatute[] {
  if (typeof window === 'undefined') return DEFAULT_FAVOURITES
  const raw = loadJson<unknown>(CP_LAW_NS.favorites, null)
  if (Array.isArray(raw)) {
    return raw.filter((x): x is FavouriteStatute =>
      !!x && typeof x === 'object' &&
      typeof (x as FavouriteStatute).id === 'string' &&
      typeof (x as FavouriteStatute).name === 'string' &&
      typeof (x as FavouriteStatute).href === 'string',
    )
  }
  if (raw && typeof raw === 'object' && Array.isArray((raw as { statutes?: unknown }).statutes)) {
    return (raw as { statutes: unknown[] }).statutes.filter((x): x is FavouriteStatute =>
      !!x && typeof x === 'object' &&
      typeof (x as FavouriteStatute).id === 'string' &&
      typeof (x as FavouriteStatute).name === 'string' &&
      typeof (x as FavouriteStatute).href === 'string',
    )
  }
  return DEFAULT_FAVOURITES
}

export function saveFavouriteStatutes(items: FavouriteStatute[]): void {
  saveJson(CP_LAW_NS.favorites, items.slice(0, 50))
}

export function toggleFavouriteStatute(items: FavouriteStatute[], item: FavouriteStatute): FavouriteStatute[] {
  return items.some((x) => x.id === item.id)
    ? items.filter((x) => x.id !== item.id)
    : [...items, item].slice(0, 50)
}

export function hasResearchActivity(raw: unknown): boolean {
  if (!raw || typeof raw !== 'object') return false
  const value = raw as Record<string, unknown>
  const question = value.question as Record<string, unknown> | undefined
  const authorities = Array.isArray(value.authorities) ? value.authorities : []
  return Boolean(
    question && typeof question.question === 'string' && question.question.trim() ||
    authorities.some((row) => {
      if (!row || typeof row !== 'object') return false
      const r = row as Record<string, unknown>
      return ['caseName', 'citation', 'statute', 'holding'].some((k) => typeof r[k] === 'string' && (r[k] as string).trim())
    }),
  )
}

export function countCompletedChecklistItems(raw: unknown): number {
  if (!raw || typeof raw !== 'object') return 0
  return Object.entries(raw as Record<string, unknown>)
    .filter(([key, value]) => key.includes(':') && value === 'done').length
}

export function countDraftActivity(raw: unknown): number {
  if (!raw || typeof raw !== 'object') return 0
  const value = raw as Record<string, unknown>
  const recent = Array.isArray(value.recentlyUsed) ? value.recentlyUsed.length : 0
  const favourites = Array.isArray(value.favorites) ? value.favorites.length : 0
  return new Set([
    ...(Array.isArray(value.recentlyUsed) ? value.recentlyUsed : []),
    ...(Array.isArray(value.favorites) ? value.favorites : []),
  ]).size || recent + favourites
}
