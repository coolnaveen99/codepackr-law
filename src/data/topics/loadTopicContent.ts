/**
 * Lazy-load full topic learning content.
 */

import type { CaseCitation } from '../subjects'
import { articleById, articleIdFromTopicId } from '../constitution/articles'
import { CASES } from '../constitution/cases'
import { bnsSectionById, sectionIdFromTopicId } from '../bns/sections'
import { bnssSectionById, bnssSectionIdFromTopicId } from '../bnss/sections'
import { bsaSectionById, bsaSectionIdFromTopicId } from '../bsa/sections'
import { synthesizeCatalogSection } from './synthesizeProvision'
import { hasCpcCatalogTopic, synthesizeCpcContent } from './synthesizeCpc'

export type { TopicContent } from './topicTypes'
export {
  type TopicSection,
  type TopicProvision,
  type TopicExample,
  type TopicQuestionAnswer,
  type TopicHypothetical,
  type TopicMisconception,
  type TopicDistinction,
  type TopicExamFramework,
} from './topicTypes'

import type { TopicContent } from './topicTypes'

export function getStudyBody(content: TopicContent | null | undefined): string {
  if (!content) return ''
  return content.study || content.detailed || content.short || ''
}

function hasStudyBody(content: TopicContent): boolean {
  return (
    typeof content.study === 'string' ||
    typeof content.detailed === 'string' ||
    typeof content.short === 'string'
  )
}

const topicModules = import.meta.glob<{ default: TopicContent }>(
  './*/*.ts',
  { eager: false },
)

const cache = new Map<string, TopicContent>()

function cacheKey(subjectSlug: string, topicId: string) {
  return `${subjectSlug}/${topicId}`
}

export async function loadTopicContent(
  subjectSlug: string,
  topicId: string,
): Promise<TopicContent | null> {
  const key = cacheKey(subjectSlug, topicId)
  if (cache.has(key)) return cache.get(key)!

  const path = `./${subjectSlug}/${topicId}.ts`
  const loader = topicModules[path]
  if (loader) {
    try {
      const mod = await loader()
      const content = mod.default
      if (content && hasStudyBody(content)) {
        cache.set(key, content)
        return content
      }
    } catch {
      // fall through
    }
  }

  if (subjectSlug === 'constitution') {
    const { synthesizeArticleContent } = await import('./synthesizeArticle')
    const articleId = articleIdFromTopicId(topicId)
    if (articleId) {
      const synthesized = synthesizeArticleContent(articleId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  if (subjectSlug === 'bns' || subjectSlug === 'bnss' || subjectSlug === 'bsa') {
    const synthesized = await synthesizeCatalogSection(subjectSlug, subjectSlug === 'bns' ? sectionIdFromTopicId(topicId)! : subjectSlug === 'bnss' ? bnssSectionIdFromTopicId(topicId)! : bsaSectionIdFromTopicId(topicId)!)
    if (synthesized) {
      cache.set(key, synthesized)
      return synthesized
    }
  }

  if (subjectSlug === 'cpc') {
    const synthesized = synthesizeCpcContent(topicId)
    if (synthesized) {
      cache.set(key, synthesized)
      return synthesized
    }
  }

  return null
}

export function hasTopicContentFile(subjectSlug: string, topicId: string): boolean {
  if (`./${subjectSlug}/${topicId}.ts` in topicModules) return true
  if (subjectSlug === 'constitution') {
    const articleId = articleIdFromTopicId(topicId)
    return Boolean(articleId && articleById(articleId))
  }
  if (subjectSlug === 'bns') {
    const sectionId = sectionIdFromTopicId(topicId)
    return Boolean(sectionId && bnsSectionById(sectionId))
  }
  if (subjectSlug === 'bnss') {
    const sectionId = bnssSectionIdFromTopicId(topicId)
    return Boolean(sectionId && bnssSectionById(sectionId))
  }
  if (subjectSlug === 'bsa') {
    const sectionId = bsaSectionIdFromTopicId(topicId)
    return Boolean(sectionId && bsaSectionById(sectionId))
  }
  if (subjectSlug === 'cpc') return hasCpcCatalogTopic(topicId)
  return false
}
