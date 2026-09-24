import { articleById } from '../constitution/articles'
import { CASES } from '../constitution/cases'
import type { TopicContent } from './topicTypes'

export function synthesizeArticleContent(articleId: string): TopicContent | null {
  const article = articleById(articleId)
  if (!article) return null
  const cite = `Article ${article.id}`
  const official = (article.text || '').trim()
  const omitted = Boolean(article.omitted) || /^omitted\.?$/i.test(official)
  const study = omitted
    ? `${cite} (“${article.title}”) is omitted. It is not current law.`
    : `${cite} is titled “${article.title}”.${article.cluster ? ` Cluster: ${article.cluster}.` : ''}\n\n${official || article.note || ''}\n\nCurrent through the 106th Amendment (2023).`
  const cases = CASES.filter((c) => c.articles.some((a) => a.toLowerCase() === article.id.toLowerCase()))
  return {
    glance: omitted ? `${cite} — omitted.` : `${cite} — ${article.title}.`,
    study,
    cases: cases.map((c) => ({ name: c.name, year: c.year, citation: c.citation, holding: c.holding })),
    examTips: ['Quote, explain, apply, conclude. Current through the 106th Amendment.'],
  }
}
