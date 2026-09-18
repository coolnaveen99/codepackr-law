/**
 * Lazy-load full topic learning content.
 *
 * P0 rule: one Study Topic body (not Short/Detailed UI versions).
 *
 * Metadata (list) lives in subjects.ts — always small.
 * Full notes live in src/data/topics/<subjectSlug>/<topicId>.ts
 * and are loaded only when the student opens that topic.
 */

import type { CaseCitation } from '../subjects'
import { articleById, articleIdFromTopicId } from '../constitution/articles'
import { bnsSectionById, sectionIdFromTopicId } from '../bns/sections'
import { bnssSectionById, bnssSectionIdFromTopicId } from '../bnss/sections'
import { bsaSectionById, bsaSectionIdFromTopicId } from '../bsa/sections'
import { synthesizeCatalogSection } from './synthesizeProvision'

export interface TopicSection {
  id: string
  title: string
  content: string[]
  order: number
}

export interface TopicProvision {
  actId: string
  actName: string
  provisionId: string
  section?: string
  article?: string
  title?: string
}

export interface TopicExample {
  id: string
  title?: string
  description: string
}

export interface TopicQuestionAnswer {
  id: string
  question: string
  answer: string
  explanation?: string
  relatedProvisionIds?: string[]
}

export interface TopicHypothetical {
  id: string
  title?: string
  facts: string
  question: string
  applicableLaw: string
  analysis: string
  conclusion: string
}

export interface TopicMisconception {
  id: string
  trap: string
  correction: string
}

export interface TopicDistinction {
  id: string
  title: string
  left: string
  right: string
  rows: { point: string; left: string; right: string }[]
}

export interface TopicExamFramework {
  marks: 10 | 16
  question?: string
  steps: string[]
}

export interface TopicContent {
  /**
   * Preferred single Study Topic body for new notes.
   * UI shows ONE study reader — not Short Version / Detailed Version.
   */
  study?: string
  /**
   * @deprecated Legacy — still accepted as Study Topic fallback.
   * Do not expose as a separate "Short Version" in the UI.
   */
  short?: string
  /**
   * @deprecated Legacy — still accepted as Study Topic fallback.
   * Do not expose as a separate "Detailed Version" in the UI.
   */
  detailed?: string
  glance?: string
  sections?: TopicSection[]
  provisions?: TopicProvision[]
  examples?: TopicExample[]
  hypotheticals?: TopicHypothetical[]
  distinctions?: TopicDistinction[]
  misconceptions?: TopicMisconception[]
  questionsAndAnswers?: TopicQuestionAnswer[]
  relatedTopics?: string[]
  cases?: CaseCitation[]
  bareActPointers?: string[]
  examTips?: string[]
  examFrameworks?: TopicExamFramework[]
  answerSkeleton?: string[]
  revisionPoints?: string[]
}

/** Resolve the single Study Topic body (study → detailed → short). */
export function getStudyBody(content: TopicContent | null | undefined): string {
  if (!content) return ''
  return content.study || content.detailed || content.short || ''
}

function synthesizeArticleContent(articleId: string): TopicContent | null {
  const article = articleById(articleId)
  if (!article) return null

  const amendmentLine = article.amendments?.length
    ? `Amendments that touch this article: ${article.amendments.join(', ')}.`
    : ''

  const study = [
    `Topic at a glance`,
    `Article ${article.id} — ${article.title}. Read the black-letter text first, then the meaning, then the related doctrines and cases on this page.`,
    `\nWhat the article says`,
    `“${article.text}”`,
    article.note ? `\nWhat it means\n${article.note}` : '',
    amendmentLine ? `\nCurrent-law position\n${amendmentLine}` : '',
    '\nHow to use this article in an answer',
    'Open with the text. Explain the legal idea in one or two sentences. State any essential conditions or exceptions. Cite the leading authority from the related-knowledge panel. Apply the article to the facts. Close with the current position. Educational note — always cross-check the latest Bare Act / India Code.',
  ]
    .filter(Boolean)
    .join('\n')

  return {
    study,
    glance: `Article ${article.id} — ${article.title}.`,
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: `constitution-article-${article.id.toLowerCase()}`,
        article: `Article ${article.id}`,
        title: article.title,
      },
    ],
    sections: article.note
      ? [
          {
            id: `art-${article.id.toLowerCase()}-note`,
            title: 'How this article is read',
            order: 1,
            content: [article.note],
          },
        ]
      : undefined,
    examFrameworks: [
      {
        marks: 10,
        question: `Write a note on Article ${article.id}.`,
        steps: [
          `Introduce Article ${article.id} (${article.title}) and its place in the Constitution.`,
          'State the black-letter rule in your own words. Do not stop at quoting the text.',
          'Explain the essential idea: who it binds, what it protects or empowers, and any conditions.',
          'Cite one leading authority from the related-knowledge panel and state its principle.',
          'Give a short illustration or apply the article to a simple fact situation.',
          'Note any important exception, later amendment, or related article.',
          'Conclude with the current legal position.',
        ],
      },
    ],
    revisionPoints: [
      `Article ${article.id}: ${article.title}.`,
      article.cluster ? `Cluster: ${article.cluster}.` : '',
      'Quote → meaning → authority → application → conclusion.',
    ].filter(Boolean),
    bareActPointers: [`Art ${article.id}`, article.cluster ? `Part cluster: ${article.cluster}` : ''].filter(Boolean),
    examTips: [
      'Do not treat this page as a Bare Act dump. Explain the idea, then use the related doctrines and cases.',
      'If a 16-mark question is set on this article, expand with history, related articles, more authorities, and a hypothetical.',
    ],
  }
}



function hasStudyBody(content: TopicContent): boolean {
  return (
    typeof content.study === 'string' ||
    typeof content.detailed === 'string' ||
    typeof content.short === 'string'
  )
}

/** Vite glob — only modules that exist are included; missing paths resolve to null */
const topicModules = import.meta.glob<{ default: TopicContent }>(
  './*/*.ts',
  { eager: false },
)

/** In-memory cache for the current session (no network, no persistence) */
const cache = new Map<string, TopicContent>()

function cacheKey(subjectSlug: string, topicId: string) {
  return `${subjectSlug}/${topicId}`
}

/**
 * Load full learning content for one topic.
 * Returns null if the file does not exist yet (UI shows “coming soon”).
 */
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
      // fall through to catalog synthesis
    }
  }

  if (subjectSlug === 'constitution') {
    const articleId = articleIdFromTopicId(topicId)
    if (articleId) {
      const synthesized = synthesizeArticleContent(articleId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  if (subjectSlug === 'bns') {
    const sectionId = sectionIdFromTopicId(topicId)
    if (sectionId) {
      const synthesized = synthesizeCatalogSection('bns', sectionId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  if (subjectSlug === 'bnss') {
    const sectionId = bnssSectionIdFromTopicId(topicId)
    if (sectionId) {
      const synthesized = synthesizeCatalogSection('bnss', sectionId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  if (subjectSlug === 'bsa') {
    const sectionId = bsaSectionIdFromTopicId(topicId)
    if (sectionId) {
      const synthesized = synthesizeCatalogSection('bsa', sectionId)
      if (synthesized) {
        cache.set(key, synthesized)
        return synthesized
      }
    }
  }

  return null
}

/** Whether a content file is registered for this topic (sync check via glob keys) */
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
  return false
}
