/**
 * Browser-only progress / last-read / exam snapshot storage.
 * Never sent to any server. Keys are versioned.
 */

export interface ProgressEntry {
  topicId: string
  subjectSlug: string
  completedAt: string
}

export interface LastReadEntry {
  subjectSlug: string
  topicId: string
  sectionId?: string
  updatedAt: string
}

export interface ExamSnapshot {
  mode: string
  subjectSlug?: string
  questionIds: string[]
  answers: Record<string, string | null>
  marked: string[]
  startedAt: string
  durationMinutes: number
  currentIndex: number
}

export interface OpenedTopicEntry {
  subjectSlug: string
  topicId: string
  openedAt: string
}

const PROGRESS_KEY = 'cplaw.progress.v1'
const LAST_READ_KEY = 'cplaw.lastRead.v1'
const EXAM_KEY = 'cplaw.exam.v1'
const OPENED_KEY = 'cplaw.opened.v1'

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function getProgress(): ProgressEntry[] {
  if (typeof window === 'undefined') return []
  return safeParse<ProgressEntry[]>(localStorage.getItem(PROGRESS_KEY), [])
}

export function markTopicCompleted(subjectSlug: string, topicId: string): void {
  if (typeof window === 'undefined') return
  const list = getProgress().filter(
    (e) => !(e.subjectSlug === subjectSlug && e.topicId === topicId),
  )
  list.push({ topicId, subjectSlug, completedAt: new Date().toISOString() })
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(list))
}

export function isTopicCompleted(subjectSlug: string, topicId: string): boolean {
  return getProgress().some((e) => e.subjectSlug === subjectSlug && e.topicId === topicId)
}

export function getCompletedCount(subjectSlug?: string): number {
  const list = getProgress()
  if (!subjectSlug) return list.length
  return list.filter((e) => e.subjectSlug === subjectSlug).length
}

export function getOpenedTopics(subjectSlug?: string): string[] {
  if (typeof window === 'undefined') return []
  const list = safeParse<OpenedTopicEntry[]>(localStorage.getItem(OPENED_KEY), [])
  if (!subjectSlug) return [...new Set(list.map((e) => e.topicId))]
  return [...new Set(list.filter((e) => e.subjectSlug === subjectSlug).map((e) => e.topicId))]
}

export function getOpenedCount(subjectSlug?: string): number {
  return getOpenedTopics(subjectSlug).length
}

export function markTopicOpened(subjectSlug: string, topicId: string): void {
  if (typeof window === 'undefined') return
  const list = safeParse<OpenedTopicEntry[]>(localStorage.getItem(OPENED_KEY), [])
  if (!list.some((e) => e.subjectSlug === subjectSlug && e.topicId === topicId)) {
    list.push({ subjectSlug, topicId, openedAt: new Date().toISOString() })
    localStorage.setItem(OPENED_KEY, JSON.stringify(list))
  }
}

export function getLastRead(): LastReadEntry | null {
  if (typeof window === 'undefined') return null
  return safeParse<LastReadEntry | null>(localStorage.getItem(LAST_READ_KEY), null)
}

export function setLastRead(
  subjectSlug: string,
  topicId: string,
  sectionId?: string,
): void {
  if (typeof window === 'undefined') return
  markTopicOpened(subjectSlug, topicId)
  const entry: LastReadEntry = {
    subjectSlug,
    topicId,
    sectionId,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(LAST_READ_KEY, JSON.stringify(entry))
}

export function getExamSnapshot(): ExamSnapshot | null {
  if (typeof window === 'undefined') return null
  return safeParse<ExamSnapshot | null>(localStorage.getItem(EXAM_KEY), null)
}

export function setExamSnapshot(snapshot: ExamSnapshot | null): void {
  if (typeof window === 'undefined') return
  if (snapshot === null) {
    localStorage.removeItem(EXAM_KEY)
  } else {
    localStorage.setItem(EXAM_KEY, JSON.stringify(snapshot))
  }
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(PROGRESS_KEY)
  localStorage.removeItem(LAST_READ_KEY)
  localStorage.removeItem(EXAM_KEY)
  localStorage.removeItem(OPENED_KEY)
}
