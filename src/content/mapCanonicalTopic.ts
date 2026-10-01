import type { TopicContent, TopicExample, TopicHypothetical, TopicSection } from '../data/topics/topicTypes'
import type { TopicContentRecord } from './contentTypes'

function normalizeSections(content: TopicContentRecord['content']): TopicSection[] | undefined {
  if (!Array.isArray(content.sections)) return undefined
  return content.sections.map((sec, index) => {
    const raw = sec as Record<string, unknown>
    if (Array.isArray(raw.content)) {
      return {
        id: typeof raw.id === 'string' ? raw.id : `section-${index + 1}`,
        title:
          typeof raw.title === 'string'
            ? raw.title
            : typeof raw.heading === 'string'
              ? raw.heading
              : `Section ${index + 1}`,
        content: (raw.content as unknown[]).map((p) => String(p ?? '')),
        order: typeof raw.order === 'number' ? raw.order : index + 1,
      }
    }
    const heading =
      typeof raw.heading === 'string'
        ? raw.heading
        : typeof raw.title === 'string'
          ? raw.title
          : `Section ${index + 1}`
    const body = typeof raw.body === 'string' ? raw.body : ''
    return {
      id: typeof raw.id === 'string' ? raw.id : `section-${index + 1}`,
      title: heading,
      content: body ? [body] : [],
      order: typeof raw.order === 'number' ? raw.order : index + 1,
    }
  })
}

export function mapCanonicalTopicToLegacy(record: TopicContentRecord): TopicContent {
  const content = record.content || {}
  const sections = normalizeSections(content)

  if (typeof content.study === 'string' && content.study.trim()) {
    return {
      ...(content as TopicContent),
      glance: (content.glance as string | undefined) || record.title,
      study: content.study,
      sections,
    }
  }

  const examples: TopicExample[] | undefined = Array.isArray(content.examples)
    ? content.examples.map((example, index) => {
        const raw = example as Record<string, unknown>
        return {
          id: typeof raw.id === 'string' ? raw.id : `canonical-example-${index + 1}`,
          title: typeof raw.title === 'string' ? raw.title : undefined,
          description:
            typeof raw.body === 'string'
              ? raw.body
              : typeof raw.description === 'string'
                ? raw.description
                : '',
          illustrationType: 'practical' as const,
        }
      })
    : undefined

  const hypotheticals: TopicHypothetical[] | undefined = Array.isArray(content.hypotheticals)
    ? content.hypotheticals.map((item, index) => {
        const raw = item as Record<string, unknown>
        return {
          id: typeof raw.id === 'string' ? raw.id : `canonical-hypothetical-${index + 1}`,
          question: typeof raw.question === 'string' ? raw.question : '',
          analysis: typeof raw.analysis === 'string' ? raw.analysis : '',
        }
      })
    : undefined

  return {
    glance: record.title,
    study: buildStudy(content, record.title),
    examples,
    hypotheticals,
    sections,
    relatedTopics: Array.isArray(content.relatedTopics) ? content.relatedTopics : undefined,
    bareActPointers: Array.isArray(content.bareActPointers)
      ? content.bareActPointers.map((p) => String(p))
      : undefined,
  }
}

function buildStudy(content: TopicContentRecord['content'], title: string): string {
  if (typeof content.study === 'string' && content.study.trim()) return content.study
  if (typeof content.detailed === 'string' && content.detailed.trim()) return content.detailed
  const parts: string[] = []
  if (typeof content.overview === 'string' && content.overview.trim()) parts.push(content.overview)
  if (Array.isArray(content.sections)) {
    for (const section of [...content.sections].sort(
      (a, b) => ((a as { order?: number }).order ?? 0) - ((b as { order?: number }).order ?? 0),
    )) {
      const raw = section as Record<string, unknown>
      const heading =
        typeof raw.heading === 'string'
          ? raw.heading
          : typeof raw.title === 'string'
            ? raw.title
            : ''
      const body =
        typeof raw.body === 'string'
          ? raw.body
          : Array.isArray(raw.content)
            ? (raw.content as unknown[]).map(String).join('\n')
            : ''
      parts.push([heading, body].filter(Boolean).join('\n'))
    }
  }
  return parts.join('\n\n') || title
}
