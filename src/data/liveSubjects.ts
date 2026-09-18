import {
  SUBJECTS,
  type LawSubjectMeta,
  type LawTopic,
} from './subjects'
import { cpcCatalogTopics } from './cpc/catalogTopics'

function attachCpcCatalog() {
  const cpc = SUBJECTS.find((s) => s.slug === 'cpc')
  if (!cpc) return
  if (cpc.topics.some((t) => t.id === 's-1' || t.id === 's-9')) return
  const extra = cpcCatalogTopics()
  const seen = new Set(cpc.topics.map((t) => t.id))
  cpc.topics.push(...extra.filter((t) => !seen.has(t.id)))
  cpc.description =
    'Complete CPC, 1908 catalog — ss. 1–158 and First Schedule Orders I–LI (including XIII-A and XV-A). Still in force; not replaced by BNSS. Open a section or Order for the study page.'
}

attachCpcCatalog()

export function enrichSubject(subject: LawSubjectMeta): LawSubjectMeta {
  return subject
}

export const LIVE_SUBJECTS: LawSubjectMeta[] = SUBJECTS

export function getSubjectBySlug(slug: string): LawSubjectMeta | undefined {
  return SUBJECTS.find((s) => s.slug === slug)
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
  const subjects = SUBJECTS.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.shortName.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.includes(q)) ||
      s.bareActs.some((b) => b.toLowerCase().includes(q)),
  )
  const topics: { subject: LawSubjectMeta; topic: LawTopic }[] = []
  for (const s of SUBJECTS) {
    for (const t of s.topics) {
      const hay = [t.name, t.range ?? '', t.note ?? '', ...(t.keywords ?? [])].join(' ').toLowerCase()
      if (hay.includes(q)) topics.push({ subject: s, topic: t })
    }
  }
  return { subjects, topics }
}
