export interface ChronologyEntry {
  id: string
  date: string
  event: string
  source: string
  disputed: boolean
}

export interface ChronologyGap {
  from: string
  to: string
  days: number
}

export interface ChronologyAnalysis {
  ordered: ChronologyEntry[]
  gaps: ChronologyGap[]
  disputed: ChronologyEntry[]
  incomplete: ChronologyEntry[]
}

const MS_PER_DAY = 86_400_000

export function analyzeChronology(entries: ChronologyEntry[], gapThresholdDays = 30): ChronologyAnalysis {
  const dated = entries
    .filter((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry.date))
    .sort((a, b) => a.date.localeCompare(b.date))
  const gaps: ChronologyGap[] = []

  for (let i = 1; i < dated.length; i += 1) {
    const from = new Date(`${dated[i - 1].date}T00:00:00Z`).getTime()
    const to = new Date(`${dated[i].date}T00:00:00Z`).getTime()
    const days = Math.round((to - from) / MS_PER_DAY)
    if (days > gapThresholdDays) gaps.push({ from: dated[i - 1].date, to: dated[i].date, days })
  }

  return {
    ordered: dated,
    gaps,
    disputed: entries.filter((entry) => entry.disputed),
    incomplete: entries.filter((entry) => !entry.date || !entry.event || !entry.source),
  }
}

export function normalizeList(value: string): string[] {
  return value.split(/[\n,]+/).map((item) => item.trim()).filter(Boolean)
}
