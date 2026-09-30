import type { TopicContent, TopicExample, TopicHypothetical } from '../data/topics/topicTypes'
import type { TopicContentRecord } from './contentTypes'

export function mapCanonicalTopicToLegacy(record: TopicContentRecord): TopicContent {
  const content = record.content || {}
  if (typeof content.study === 'string' && content.study.trim()) {
    return {
      ...(content as TopicContent),
      glance: (content.glance as string | undefined) || record.title,
      study: content.study,
    }
  }

  const examples: TopicExample[] | undefined = Array.isArray(content.examples)
    ? content.examples.map((example, index) => ({
        id: `canonical-example-${index + 1}`,
        title: typeof example.title === 'string' ? example.title : undefined,
        description: typeof example.body === 'string' ? example.body : (typeof example.description === 'string' ? example.description : ''),
        illustrationType: 'practical' as const,
      }))
    : undefined

  const hypotheticals: TopicHypothetical[] | undefined = Array.isArray(content.hypotheticals)
    ? content.hypotheticals.map((item, index) => ({
        id: `canonical-hypothetical-${index + 1}`,
        question: typeof item.question === 'string' ? item.question : '',
        analysis: typeof item.analysis === 'string' ? item.analysis : '',
      }))
    : undefined

  return {
    glance: record.title,
    study: buildStudy(content, record.title),
    examples,
    hypotheticals,
    relatedTopics: Array.isArray(content.relatedTopics) ? content.relatedTopics : undefined,
  }
}

function buildStudy(content: TopicContentRecord['content'], title: string): string {
  if (typeof content.study === 'string' && content.study.trim()) return content.study
  if (typeof content.detailed === 'string' && content.detailed.trim()) return content.detailed
  const parts: string[] = []
  if (typeof content.overview === 'string' && content.overview.trim()) parts.push(content.overview)
  if (Array.isArray(content.sections)) {
    for (const section of [...content.sections].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))) {
      parts.push(`${section.heading}\n${section.body}`)
    }
  }
  return parts.join('\n\n') || title
}
