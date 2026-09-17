import type { Judgment, JudgmentFilters } from '../../data/judgments/types'

const normalize = (value: string) => value.toLowerCase().trim()

export function searchJudgments(judgments: Judgment[], query: string): Judgment[] {
  const search = normalize(query)
  if (!search) return judgments

  return judgments.filter((judgment) => {
    const searchable = [
      judgment.caseName,
      judgment.shortName,
      judgment.citation,
      judgment.court,
      judgment.subject,
      ...judgment.topics,
      ...judgment.tags,
      judgment.summary,
      ...judgment.provisions.flatMap((provision) => [provision.actName, provision.section, provision.article, provision.title]),
    ].filter(Boolean).map((value) => normalize(value as string)).join(' ')
    return searchable.includes(search)
  })
}

export function filterJudgments(judgments: Judgment[], filters: JudgmentFilters, bookmarkedIds: Set<string> = new Set()): Judgment[] {
  return judgments.filter((judgment) => {
    if (filters.subject && judgment.subject !== filters.subject) return false
    if (filters.court && judgment.court !== filters.court) return false
    if (filters.year && judgment.year !== filters.year) return false
    if (filters.topic && !judgment.topics.includes(filters.topic)) return false
    if (filters.provisionId && !judgment.provisions.some((provision) => provision.provisionId === filters.provisionId)) return false
    if (filters.bookmarkedOnly && !bookmarkedIds.has(judgment.id)) return false
    return true
  })
}

export function getJudgmentSubjects(judgments: Judgment[]) {
  return [...new Set(judgments.map((judgment) => judgment.subject))].sort()
}

export function getJudgmentTopics(judgments: Judgment[]) {
  return [...new Set(judgments.flatMap((judgment) => judgment.topics))].sort()
}

export function getJudgmentYears(judgments: Judgment[]) {
  return [...new Set(judgments.map((judgment) => judgment.year).filter(Boolean) as number[])].sort((a, b) => b - a)
}
