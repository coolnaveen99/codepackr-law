import { articleById, articleIdFromTopicId } from '../constitution/articles'
import { bnsSectionById, sectionIdFromTopicId } from '../bns/sections'
import { bnssSectionById, bnssSectionIdFromTopicId } from '../bnss/sections'
import { bsaSectionById, bsaSectionIdFromTopicId } from '../bsa/sections'
import { synthesizeCatalogSection } from './synthesizeProvision'
import { hasCpcCatalogTopic, synthesizeCpcContent } from './synthesizeCpc'
import { synthesizeArticleContent } from './synthesizeArticle'
import type { TopicContent } from './topicTypes'

export type {
  TopicContent,
  TopicSection,
  TopicProvision,
  TopicExample,
  TopicQuestionAnswer,
  TopicHypothetical,
  TopicMisconception,
  TopicDistinction,
  TopicExamFramework,
} from './topicTypes'

export function getStudyBody(content: TopicContent | null | undefined): string {
  if (!content) return ''
  return content.study || content.detailed || content.short || ''
}

function hasStudyBody(content: TopicContent): boolean {
  return Boolean(content.study || content.detailed || content.short)
}

const topicModules = import.meta.glob<{ default: TopicContent }>('./*/*.ts', { eager: false })
const cache = new Map<string, TopicContent>()

export async function loadTopicContent(subjectSlug: string, topicId: string): Promise<TopicContent | null> {
  const key = `${subjectSlug}/${topicId}`
  if (cache.has(key)) return cache.get(key)!

  const loader = topicModules[`./${subjectSlug}/${topicId}.ts`]
  if (loader) {
    try {
      const mod = await loader()
      if (mod.default && hasStudyBody(mod.default)) {
        cache.set(key, mod.default)
        return mod.default
      }
    } catch {
      // catalog fallback
    }
  }

  if (subjectSlug === 'constitution') {
    const articleId = articleIdFromTopicId(topicId)
    const synthesized = articleId ? synthesizeArticleContent(articleId) : null
    if (synthesized) {
      cache.set(key, synthesized)
      return synthesized
    }
  }

  if (subjectSlug === 'bns') {
    const sectionId = sectionIdFromTopicId(topicId)
    if (sectionId) {
      const synthesized = await synthesizeCatalogSection('bns', sectionId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  if (subjectSlug === 'bnss') {
    const sectionId = bnssSectionIdFromTopicId(topicId)
    if (sectionId) {
      const synthesized = await synthesizeCatalogSection('bnss', sectionId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  if (subjectSlug === 'bsa') {
    const sectionId = bsaSectionIdFromTopicId(topicId)
    if (sectionId) {
      const synthesized = await synthesizeCatalogSection('bsa', sectionId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
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
