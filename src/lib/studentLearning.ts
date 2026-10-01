export interface StudyItem {
  id: string
  subject: string
  topic: string
  targetDate: string
  cycles: number
  done: boolean
  weak: boolean
  notes: string
}

export const SAMPLE_CASE_BRIEF = {
  caseName: 'Sample case brief',
  citation: 'Enter a verified citation',
  court: 'Enter verified court',
  year: 'Enter verified year',
  facts: 'Record only material facts supported by the judgment.',
  issues: 'State the issues actually decided by the court.',
  arguments: 'Separate the parties’ submissions from the court’s reasoning.',
  reasoning: 'Trace rule → fact → inference without adding facts not found in the judgment.',
  holding: 'Record the disposition and findings actually made.',
  ratio: 'State the legal proposition necessary for the decision.',
  obiter: 'Record observations that were not necessary to the decision, if any.',
  significance: 'Explain doctrinal or practical significance without overstating the holding.',
  laterTreatment: 'Record later treatment only when independently verified.',
} as const

export const SAMPLE_STUDY_ITEM: Omit<StudyItem, 'id'> = {
  subject: 'Constitution',
  topic: 'Sample topic — replace with a registered topic',
  targetDate: new Date().toISOString().slice(0, 10),
  cycles: 3,
  done: false,
  weak: true,
  notes: 'Sample only; verify the topic against the current catalogue.',
}

export function getStudyStatus(item: StudyItem, today = new Date().toISOString().slice(0, 10)): 'completed' | 'overdue' | 'due' | 'planned' {
  if (item.done) return 'completed'
  if (!item.targetDate) return 'planned'
  if (item.targetDate < today) return 'overdue'
  if (item.targetDate === today) return 'due'
  return 'planned'
}

export function getStudyStats(items: StudyItem[], today = new Date().toISOString().slice(0, 10)) {
  return {
    total: items.length,
    done: items.filter((item) => item.done).length,
    weak: items.filter((item) => item.weak && !item.done).length,
    due: items.filter((item) => {
      const status = getStudyStatus(item, today)
      return status === 'due' || status === 'overdue'
    }).length,
  }
}

export function sortStudyItems(items: StudyItem[], today = new Date().toISOString().slice(0, 10)): StudyItem[] {
  const rank = { overdue: 0, due: 1, planned: 2, completed: 3 } as const
  return [...items].sort((a, b) => {
    const statusDiff = rank[getStudyStatus(a, today)] - rank[getStudyStatus(b, today)]
    if (statusDiff !== 0) return statusDiff
    const dateDiff = (a.targetDate || '9999-12-31').localeCompare(b.targetDate || '9999-12-31')
    if (dateDiff !== 0) return dateDiff
    return `${a.subject}\u0000${a.topic}`.localeCompare(`${b.subject}\u0000${b.topic}`)
  })
}
