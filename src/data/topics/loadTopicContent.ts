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
    ? `Amendments that touch this article: ${article.amendments.join(', ')}. Always state the latest amendment if the question is on current law.`
    : `The text of Article ${article.id} is unamended. Its meaning may still be judicial — say so if you use case law.`

  const meaning = article.note
    ? article.note
    : `Article ${article.id} is the constitutional rule on “${article.title}”. A 10-mark note must state the text in the student’s own words, explain who it binds, what it protects or empowers, and how it is applied. Quoting the article and stopping is not a full-mark answer.`

  const study = [
    `Topic at a glance`,
    `Article ${article.id} — ${article.title}. This page is a full examination note: text, meaning, elements, application, 10-mark and 16-mark structures. It is not a Bare Act dump.`,
    `\nIntroduction and meaning`,
    meaning,
    `\nWhat the article says`,
    `“${article.text}”`,
    `Do not stop at the quotation. Restate the rule in your own words, then explain each clause.`,
    `\nWhy this article is asked`,
    `University and Judiciary papers set Article ${article.id} as a 10-mark note (“explain”) or a 16-mark problem (“apply to these facts”). The marks are in the meaning, the conditions, the related articles, and the application — not in reciting the number.`,
    article.cluster ? `\nConstitutional setting\nPart cluster: ${article.cluster}. Place the article in Part of the Constitution before you analyse it.` : '',
    `\nEssential points to write`,
    `1. Name Article ${article.id} and the title.\n2. State the black-letter rule in your own words.\n3. Identify who is bound and who is protected.\n4. State any condition, exception or later amendment.\n5. Apply to a short fact situation.\n6. Conclude with the current legal position.`,
    `\nCurrent-law position`,
    amendmentLine,
    `\nHow to write a 10-mark answer`,
    `Typical question: “Write a note on Article ${article.id}.” Open with the text in your own words. Explain the legal idea. State conditions or exceptions. Cite one leading authority from the related-knowledge panel if the article has one. Apply. Conclude.`,
    `\nHow to write a 16-mark answer`,
    `Add history or drafting context where it is legally useful, related articles, a second authority, a distinction, a hypothetical, and a current-law close. Do not lengthen the 10-mark note by repeating the same sentences.`,
  ]
    .filter(Boolean)
    .join('\n')

  const tenMark = [
    `Introduction. Article ${article.id} of the Constitution of India is titled “${article.title}”.`,
    `Text and meaning. The article provides: ${article.text} In student language: ${meaning}`,
    `Legal idea. State who is bound (typically the State, unless the article is a duty or a structural rule), who is protected, and what the article actually does.`,
    `Conditions / qualifications. ${amendmentLine}`,
    `Application. Take a short fact pattern and show why Article ${article.id} is (or is not) attracted. Mapping facts to the text is the mark-earning paragraph.`,
    `Conclusion. Article ${article.id} remains the current constitutional heading for ${article.title}. Quote, explain, apply, conclude.`,
  ].join('\n\n')

  const sixteenMark = [
    tenMark,
    `16-mark expansion. Add (1) the place of the article in its Part and cluster${article.cluster ? ` (${article.cluster})` : ''}; (2) related articles that the examiner expects to see beside it; (3) a verified leading case from the related-knowledge panel, with ratio, not merely the name; (4) a hypothetical; (5) a common trap; (6) the current-law close, including any amendment.`,
  ].join('\n\n')

  return {
    study,
    glance: `Article ${article.id} — ${article.title}. Full examination note for 10-mark and 16-mark answers.`,
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: `constitution-article-${article.id.toLowerCase()}`,
        article: `Article ${article.id}`,
        title: article.title,
      },
    ],
    sections: [
      {
        id: `art-${article.id.toLowerCase()}-text`,
        title: 'Constitutional text',
        order: 1,
        content: [article.text],
      },
      {
        id: `art-${article.id.toLowerCase()}-meaning`,
        title: 'Meaning for examination answers',
        order: 2,
        content: [meaning],
      },
    ],
    examples: [
      {
        id: `art-${article.id}-ex-1`,
        title: 'Example 1 — simple',
        description: `A short fact pattern is tested against Article ${article.id} (${article.title}). Name the article, restate the rule, and say which facts match the text.`,
      },
      {
        id: `art-${article.id}-ex-2`,
        title: 'Example 2 — examination',
        description: `Change one condition (person protected, State action, territorial limit, or an exception) so that the article is not attracted. State the failure expressly — that contrast is a 16-mark skill.`,
      },
    ],
    hypotheticals: [
      {
        id: `art-${article.id}-hypo`,
        title: 'Examination hypothetical',
        facts: `A 2026 fact situation requires the court to decide whether Article ${article.id} (${article.title}) is attracted. Some facts look like the text of the article; one fact looks like a missing condition or a related article.`,
        question: `Does Article ${article.id} apply? How should a 16-mark answer be written?`,
        applicableLaw: `Article ${article.id}. ${article.cluster ? `Cluster: ${article.cluster}.` : ''} Related articles from the related-knowledge panel must be cited if they are on the facts.`,
        analysis: `Identify the article. Restate the rule. List who is bound and who is protected. Map each fact to the text. If a related article (for example a neighbouring fundamental right, a directive principle, or a remedial article) is a better fit, say so and do not force Article ${article.id}.`,
        conclusion: `The conclusion must cite Article ${article.id} and state whether every condition in the text is satisfied. “Yes, Article ${article.id} applies” without mapping is not a full-mark ending.`,
      },
    ],
    misconceptions: [
      {
        id: `art-${article.id}-trap-1`,
        trap: 'Quoting the article and stopping.',
        correction: 'A 10-mark note explains meaning, conditions, related articles and application. The quotation is only the opening.',
      },
      {
        id: `art-${article.id}-trap-2`,
        trap: 'Writing a shortened Q&A or a one-line explanation.',
        correction: 'Descriptive papers require a complete answer. The model answers on this page are written at 10-mark / 16-mark length. Do not shorten them in the answer book.',
      },
    ],
    questionsAndAnswers: [
      {
        id: `art-${article.id}-q-10`,
        question: `Write a 10-mark note on Article ${article.id} (${article.title}).`,
        answer: tenMark,
        explanation: 'Do not submit a shortened answer. Introduction, meaning, conditions, application and conclusion are all required.',
      },
      {
        id: `art-${article.id}-q-16`,
        question: `Answer a 16-mark question on Article ${article.id}.`,
        answer: sixteenMark,
        explanation: 'Add related articles, a verified authority with ratio, a hypothetical and a current-law close. Do not repeat the 10-mark note twice.',
      },
    ],
    examFrameworks: [
      {
        marks: 10,
        question: `Write a note on Article ${article.id}.`,
        steps: [
          `Introduce Article ${article.id} (${article.title}) and its place in the Constitution.`,
          'State the black-letter rule in your own words. Do not stop at quoting the text.',
          'Explain who it binds, what it protects or empowers, and any conditions.',
          'Cite one leading authority from the related-knowledge panel and state its principle.',
          'Give a short illustration or apply the article to facts.',
          'Note any important exception, later amendment, or related article.',
          'Conclude with the current legal position.',
        ],
      },
      {
        marks: 16,
        question: `Discuss Article ${article.id} with related provisions and a hypothetical.`,
        steps: [
          'Everything in the 10-mark plan, written in full.',
          'Place the article in its Part and cluster.',
          'Add related articles and explain the relationship.',
          'Add a second verified authority with ratio if the related-knowledge panel supplies one.',
          'Work a hypothetical in IRAC form.',
          'Name exam traps (quotation-only answers, shortened Q&A, ignoring amendments).',
          'Current-law conclusion.',
        ],
      },
    ],
    answerSkeleton: [
      `Introduction — Article ${article.id}, ${article.title}.`,
      'Text in your own words.',
      'Meaning and conditions.',
      'Related article / authority.',
      'Application.',
      'Conclusion.',
    ],
    revisionPoints: [
      `Article ${article.id}: ${article.title}.`,
      article.cluster ? `Cluster: ${article.cluster}.` : '',
      'Quote → meaning → condition → authority → application → conclusion.',
    ].filter(Boolean),
    examTips: [
      'This is a study note, not a Bare Act dump. Explain, then apply.',
      'If a 16-mark question is set, expand with related articles, more authorities, and a hypothetical.',
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
