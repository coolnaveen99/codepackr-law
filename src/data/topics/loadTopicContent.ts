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
import { bnsCasesForSection } from '../bns/cases'
import { bnsChapterById } from '../bns/chapters'
import { bnsLessonFor } from '../bns/lessons'
import { bnsSectionById, sectionIdFromTopicId } from '../bns/sections'

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

function synthesizeArticleContent(articleId: string): TopicContent | null {
  const article = articleById(articleId)
  if (!article) return null

  const amendmentLine = article.amendments?.length
    ? `Amendments that touch this article: ${article.amendments.join(', ')}.`
    : ''

  const study = [
    `Text of Article ${article.id}`,
    `“${article.text}”`,
    article.note ? `\nStudy note\n${article.note}` : '',
    amendmentLine ? `\n${amendmentLine}` : '',
    '\nExam focus',
    'Start with the black-letter text. Then follow the related doctrines, cases, and amendments in the knowledge graph on this page. Content is educational — always cross-check the latest Bare Act.',
  ]
    .filter(Boolean)
    .join('\n')

  return {
    study,
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
    bareActPointers: [`Art ${article.id}`, article.cluster ? `Part cluster: ${article.cluster}` : ''].filter(Boolean),
    examTips: [
      `Cite Article ${article.id} by number in the answer.`,
      'Use related doctrines and cases from the knowledge graph rather than rewriting them here.',
    ],
  }
}

function synthesizeBnsSectionContent(sectionId: string): TopicContent | null {
  const section = bnsSectionById(sectionId)
  if (!section) return null

  const lesson = bnsLessonFor(sectionId)
  const chapter = bnsChapterById(section.chapter)
  const cases = bnsCasesForSection(sectionId)
  const ipcLine = section.flags.includes('new')
    ? 'New provision — no IPC predecessor.'
    : section.ipc
      ? `IPC predecessor: ${section.ipc}.`
      : ''

  const study = [
    `BNS Section ${section.id} — ${section.title}`,
    lesson?.plain ?? section.gist,
    chapter ? `\nChapter ${chapter.roman} — ${chapter.title}` : '',
    ipcLine ? `\n${ipcLine}` : '',
    section.punishment ? `\nPunishment\n${section.punishment}` : '',
    lesson?.points?.length ? `\nStudy points\n${lesson.points.map((p) => `• ${p}`).join('\n')}` : '',
    lesson?.exam ? `\nExam focus\n${lesson.exam}` : '',
    section.related.length
      ? `\nRelated sections: ${section.related.map((id) => `s. ${id}`).join(', ')}.`
      : '',
    '\nCite the BNS number for offences on or after 1 July 2024. Offences before that date remain IPC offences (s. 358 + Article 20(1)). Educational notes — always cross-check India Code.',
  ]
    .filter(Boolean)
    .join('\n')

  return {
    study,
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: `bns-section-${section.id}`,
        section: `s. ${section.id}`,
        title: section.title,
      },
    ],
    cases: cases.map((c) => ({
      name: c.name,
      year: c.year,
      citation: c.citation,
      holding: c.holding,
    })),
    questionsAndAnswers: lesson?.quiz
      ? [
          {
            id: `bns-${section.id}-q1`,
            question: lesson.quiz.prompt,
            answer: lesson.quiz.choices[lesson.quiz.answer] ?? '',
            explanation: lesson.quiz.explain,
          },
        ]
      : undefined,
    examTips: [
      `Cite BNS s. ${section.id}, not the old IPC number, for post-1 July 2024 facts.`,
      ...(lesson?.exam ? [lesson.exam] : []),
      'Use related doctrines and cases from the knowledge graph rather than rewriting them here.',
    ],
    bareActPointers: [
      `BNS s. ${section.id}`,
      chapter ? `Chapter ${chapter.roman}` : '',
      section.ipc ? `IPC ${section.ipc}` : '',
    ].filter(Boolean),
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
      const synthesized = synthesizeBnsSectionContent(sectionId)
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
  return false
}
