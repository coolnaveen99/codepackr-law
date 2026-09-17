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
  sections?: TopicSection[]
  provisions?: TopicProvision[]
  examples?: TopicExample[]
  questionsAndAnswers?: TopicQuestionAnswer[]
  relatedTopics?: string[]
  cases?: CaseCitation[]
  bareActPointers?: string[]
  examTips?: string[]
}

/** Resolve the single Study Topic body (study → detailed → short). */
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
  if (!loader) return null

  try {
    const mod = await loader()
    const content = mod.default
    if (content && hasStudyBody(content)) {
      cache.set(key, content)
      return content
    }
    return null
  } catch {
    return null
  }
}

/** Whether a content file is registered for this topic (sync check via glob keys) */
export function hasTopicContentFile(subjectSlug: string, topicId: string): boolean {
  return `./${subjectSlug}/${topicId}.ts` in topicModules
}
