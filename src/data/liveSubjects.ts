import {
  SUBJECTS,
  type LawSubjectMeta,
  type LawTopic,
} from './subjects'
import { cpcCatalogTopics } from './cpc/catalogTopics'

export function enrichSubject(subject: LawSubjectMeta): LawSubjectMeta {
  if (subject.slug !== 'cpc') return subject
  const extra = cpcCatalogTopics()
  const seen = new Set(subject.topics.map((t) => t.id))
  return {
    ...subject,
    description:
      'Complete CPC, 1908 catalog — ss. 1–158 and First Schedule Orders I–LI (including XIII-A and XV-A). Still in force; not replaced by BNSS.',
    topics: [...subject.topics, ...extra.filter((t) => !seen.has(t.id))],
  }
}

export const LIVE_SUBJECTS: LawSubjectMeta[] = SUBJECTS.map(enrichSubject)

export function getSubjectBySlug(slug: string): LawSubjectMeta | undefined {
  return LIVE_SUBJECTS.find((s) => s.slug === slug)
}

export function getTopic(
  subjectSlug: string,
  topicId: string,
): { subject: LawSubjectMeta; topic: LawTopic } | undefined {
  const subject = getSubjectBySlug(subjectSlug)
  if (!subject) return undefined
  const topic = subject.topics.find((t) => t.id === topicId)
  if (!topic) return undefined
  return { subject, topic }
}

export function searchSubjectsAndTopics(query: string): {
  subjects: LawSubjectMeta[]
  topics: { subject: LawSubjectMeta; topic: LawTopic }[]
} {
  const q = query.trim().toLowerCase()
  if (!q) return { subjects: [], topics: [] }
  const subjects = LIVE_SUBJECTS.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.shortName.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.includes(q)) ||
      s.bareActs.some((b) => b.toLowerCase().includes(q)),
  )
  const topics: { subject: LawSubjectMeta; topic: LawTopic }[] = []
  for (const s of LIVE_SUBJECTS) {
    for (const t of s.topics) {
      const hay = [t.name, t.range ?? '', t.note ?? '', ...(t.keywords ?? [])].join(' ').toLowerCase()
      if (hay.includes(q)) topics.push({ subject: s, topic: t })
    }
  }
  return { subjects, topics }
}
