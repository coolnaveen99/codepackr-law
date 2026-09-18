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
import { CASES } from '../constitution/cases'
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
  marks?: 10 | 16
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

  const cite = `Article ${article.id}`
  const official = (article.text || '').trim()
  const omitted = Boolean(article.omitted) || /^omitted\.?$/i.test(official)

  const amendmentLine = article.amendments?.length
    ? `Amendments that touch this article: ${article.amendments.join(', ')}. Always state the latest amendment if the question is on current law. Current through the 106th Amendment (2023). The 131st Amendment Bill, 2026 was negatived — do not treat it as law.`
    : `State the current text of ${cite}. Current through the 106th Amendment (2023). The 131st Amendment Bill, 2026 was negatived — do not treat it as law.`

  const njac = ['124', '124A', '124B', '124C', '217', '222'].includes(article.id)
    ? `Current-law warning: the Constitution (Ninety-ninth Amendment) Act, 2014 (NJAC) was struck down in Supreme Court Advocates-on-Record Association v. Union of India, AIR 2016 SC 117. Do not write NJAC as the present appointment mechanism. The working rule is the collegium as restored by that holding. Name the case; do not invent a restored clause.`
    : ''

  const meaning = omitted
    ? `${cite} (“${article.title}”) is omitted. A 10-mark note states that it is omitted, names the omitting amendment if known, and says it is not current law. Do not apply an omitted article to 2026 facts.`
    : article.note
      ? article.note
      : `${cite} is the constitutional rule on “${article.title}”. A 10-mark note restates the text in the student’s own words, explains who it binds, what it protects or empowers, any proviso, and how it is applied. Quoting the article and stopping is not a full-mark answer.`

  const clauses = official
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
  const elements = clauses.length >= 2
    ? clauses.slice(0, 12)
    : official
      ? [official]
      : [`${cite} — ${article.title}.`]

  const verifiedCases = CASES.filter((c) =>
    c.articles.some((a) => a.toLowerCase() === article.id.toLowerCase()),
  )

  const tenMarkAnswer = omitted
    ? [
        `Introduction. ${cite} of the Constitution of India is titled “${article.title}”. It is omitted.`,
        `Current law. An omitted article is not a living heading. Do not apply it to facts arising today.`,
        amendmentLine,
        `Conclusion. Write that ${cite} is omitted and move to the article that actually governs the facts.`,
      ].join('\n\n')
    : [
        `Introduction. ${cite} of the Constitution of India is titled “${article.title}”.${article.cluster ? ` It sits in the ${article.cluster} cluster.` : ''}`,
        `Official text. ${official}`,
        `Meaning. ${meaning}`,
        `Legal idea. State who is bound (typically the State under Article 12, unless the article is a duty, a qualification, or a structural rule), who is protected, and what the article actually does.`,
        `Elements. A 10-mark answer lists the working points of the text:\n${elements.map((el, i) => `${i + 1}. ${el}`).join('\n')}`,
        njac,
        `Conditions / qualifications. ${amendmentLine}`,
        verifiedCases[0]
          ? `Authority. ${verifiedCases[0].name}${verifiedCases[0].year ? ` (${verifiedCases[0].year})` : ''}${verifiedCases[0].citation ? `, ${verifiedCases[0].citation}` : ''}: ${verifiedCases[0].holding} State the holding. Do not invent a bench split you have not verified.`
          : `Authority. Cite a verified leading case from the related-knowledge panel if one is on the facts. Do not invent a judgment.`,
        `Application. Take a short fact pattern and show why ${cite} is (or is not) attracted. Mapping facts to the text is the mark-earning paragraph.`,
        `Conclusion. ${cite} remains the current constitutional heading for ${article.title}. Quote, explain, apply, conclude. Current through the 106th Amendment.`,
      ]
        .filter(Boolean)
        .join('\n\n')

  const sixteenMarkAnswer = omitted
    ? `${tenMarkAnswer}\n\n16-mark expansion. Identify the successor heading (if any) and apply that heading. Do not reconstruct the omitted text as if it were in force.`
    : [
        tenMarkAnswer,
        `16-mark expansion. Do not repeat the 10-mark note twice.`,
        `Layer 1 — Place. ${article.cluster ? `Cluster: ${article.cluster}.` : 'Place the article in its Part.'} Show why this heading sits where it sits.`,
        `Layer 2 — Related articles. Name the neighbour the examiner expects (for example a neighbouring Fundamental Right, a DPSP, a remedial article, or an exception). Explain the relationship in three or four sentences.`,
        verifiedCases[1]
          ? `Layer 3 — Second authority. ${verifiedCases[1].name}${verifiedCases[1].year ? ` (${verifiedCases[1].year})` : ''}: ${verifiedCases[1].holding}`
          : `Layer 3 — Analytical comment. Explain a proviso, an exception, or a practical difficulty. Do not invent case names.`,
        njac ? `Layer 3A — ${njac}` : '',
        `Layer 4 — Hypothetical in IRAC form (Issue, Rule, Application, Conclusion). Change one condition so that ${cite} fails, and say so expressly.`,
        `Layer 5 — Current-law close. “The governing citation is ${cite} of the Constitution of India, current through the 106th Amendment.”`,
      ]
        .filter(Boolean)
        .join('\n\n')

  const study = omitted
    ? [
        `Introduction and meaning`,
        meaning,
        `\nCurrent-law position`,
        `${cite} is omitted. It is not a living article. ${amendmentLine}`,
      ].join('\n')
    : [
        `Introduction and meaning`,
        meaning,
        `In student language: ${cite} is the working rule for “${article.title}”. Open with the title, restate the text in your own words, then list every clause. An examiner awards marks for the clauses, the proviso, and the application — not for writing the number alone.`,

        `\nWhy this is asked`,
        `University and Judiciary papers set ${cite} as a 10-mark note (“explain”) or a 16-mark problem (“apply to these facts”). The marks are in the meaning, the conditions, the related articles, and the application.`,
        article.cluster ? `Constitutional setting: ${article.cluster}.` : '',

        `\nThe article in detail`,
        official,

        `\nEssential points to write`,
        elements.map((el, i) => `${i + 1}. ${el}`).join('\n'),

        njac ? `\nCurrent-law warning\n${njac}` : '',

        `\nCurrent-law position`,
        amendmentLine,
      ]
        .filter(Boolean)
        .join('\n')

  return {
    study,
    glance: omitted
      ? `${cite} — omitted. Not current law.`
      : `${cite} — ${article.title}. Official text (Legislative Department, 2024, through the 106th Amendment) with a full 10-mark and 16-mark note.`,
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: `constitution-article-${article.id.toLowerCase()}`,
        article: cite,
        title: article.title,
      },
    ],
    sections: [
      {
        id: `art-${article.id.toLowerCase()}-text`,
        title: 'Constitutional text',
        order: 1,
        content: clauses.length ? clauses : [official || article.title],
      },
    ],
    examples: omitted
      ? [
          {
            id: `art-${article.id}-ex-1`,
            title: 'Example — omitted heading',
            description: `A 2026 problem cites ${cite}. The first sentence of the answer is that the article is omitted. Apply the living article that actually governs the facts.`,
          },
        ]
      : [
          {
            id: `art-${article.id}-ex-1`,
            title: 'Example 1 — simple (teaching example)',
            description: `A short fact pattern is tested against ${cite} (${article.title}). Name the article, restate the rule, and say which facts match the text. This is a teaching example — the Constitution does not print numbered illustrations under articles the way BNS/BSA do.`,
          },
          {
            id: `art-${article.id}-ex-2`,
            title: 'Example 2 — examination (teaching example)',
            description: `Change one condition (person protected, State action, territorial limit, or a proviso) so that ${cite} is not attracted. State the failure expressly — that contrast is a 16-mark skill. Label this as an example, never as a reported case.`,
          },
        ],
    hypotheticals: [
      {
        id: `art-${article.id}-hypo`,
        title: 'Examination hypothetical',
        facts: omitted
          ? `A 2026 problem invites the court to apply ${cite} (${article.title}).`
          : `A 2026 fact situation requires the court to decide whether ${cite} (${article.title}) is attracted. Some facts look like the text; one fact looks like a missing condition or a related article.`,
        question: `Does ${cite} apply? How should a 16-mark answer be written?`,
        applicableLaw: `${cite}. ${article.cluster ? `Cluster: ${article.cluster}.` : ''} Current through the 106th Amendment.`,
        analysis: omitted
          ? `Identify that ${cite} is omitted. Name the living article. Do not reconstruct the omitted text.`
          : `Identify the article. Restate the rule. List who is bound and who is protected. Map each fact to the text. If a related article is a better fit, say so and do not force ${cite}. ${njac}`,
        conclusion: omitted
          ? `${cite} does not apply because it is omitted.`
          : `The conclusion must cite ${cite} and state whether every condition in the text is satisfied.`,
      },
    ],
    misconceptions: [
      {
        id: `art-${article.id}-trap-1`,
        trap: omitted ? 'Applying an omitted article as if it were in force.' : 'Quoting the article and stopping.',
        correction: omitted
          ? 'Write that it is omitted and apply the living heading.'
          : 'A 10-mark note explains meaning, conditions, related articles and application. The quotation is only the opening.',
      },
      {
        id: `art-${article.id}-trap-2`,
        trap: 'Writing a shortened Q&A or a one-line explanation.',
        correction: 'Descriptive papers require a complete answer. The model answers on this page are written at 10-mark / 16-mark length. Do not shorten them in the answer book.',
      },
      njac
        ? {
            id: `art-${article.id}-trap-3`,
            trap: 'Writing NJAC as current appointment law.',
            correction: njac,
          }
        : {
            id: `art-${article.id}-trap-3`,
            trap: 'Treating a pending Bill as an amendment.',
            correction: 'The last amendment in force is the 106th (2023). The 131st Amendment Bill, 2026 was negatived.',
          },
    ],
    questionsAndAnswers: [
      {
        id: `art-${article.id}-q-10`,
        marks: 10,
        question: `Write a 10-mark note on ${cite} (${article.title}).`,
        answer: tenMarkAnswer,
        explanation: 'Do not submit a shortened answer. Introduction, official text in your own words, elements, conditions, application and conclusion are all required.',
      },
      {
        id: `art-${article.id}-q-16`,
        marks: 16,
        question: `Answer a 16-mark question on ${cite}.`,
        answer: sixteenMarkAnswer,
        explanation: 'Add related articles, a verified authority with holding, a hypothetical and a current-law close. Do not repeat the 10-mark note twice.',
      },
    ],
    cases: verifiedCases.map((c) => ({
      name: c.name,
      year: c.year,
      citation: c.citation,
      holding: c.holding,
    })),
    revisionPoints: [
      `${cite}: ${article.title}.`,
      article.cluster ? `Cluster: ${article.cluster}.` : '',
      omitted ? 'Omitted — not current law.' : 'Quote → meaning → condition → authority → application → conclusion.',
      'Current through the 106th Amendment (2023).',
    ].filter(Boolean),
    examTips: [
      'This is a study note built on the official article text, not a Bare Act dump. Explain, then apply.',
      'If a 16-mark question is set, expand with related articles, a verified authority, and a hypothetical.',
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
