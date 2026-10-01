import { PRIMARY_SOURCES, type PrimarySource, type SourceTier } from '../data/primarySources'

export interface PrimarySourceFilters {
  query?: string
  tier?: SourceTier | 'all'
  category?: string | 'all'
}

export function filterPrimarySources(
  sources: PrimarySource[],
  filters: PrimarySourceFilters = {},
): PrimarySource[] {
  const query = (filters.query || '').trim().toLowerCase()
  return sources
    .filter((source) => {
      if (filters.tier && filters.tier !== 'all' && source.tier !== filters.tier) return false
      if (filters.category && filters.category !== 'all' && source.category !== filters.category) return false
      if (!query) return true
      return [
        source.title,
        source.org,
        source.description,
        source.category,
        source.authorityType,
        source.relevantActSection,
        source.tierLabel,
      ].some((value) => value.toLowerCase().includes(query))
    })
    .sort((a, b) => a.tier - b.tier || a.title.localeCompare(b.title))
}

export function getPrimarySourceStats(sources: PrimarySource[] = PRIMARY_SOURCES) {
  return {
    total: sources.length,
    officialFirst: sources.filter((source) => source.tier <= 2).length,
    linkChecked: sources.filter((source) => source.verificationStatus === 'link-checked').length,
  }
}
