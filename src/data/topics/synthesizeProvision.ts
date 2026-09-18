import type { TopicContent } from './loadTopicContent'
import { bnsCasesForSection } from '../bns/cases'
import { bnsChapterById } from '../bns/chapters'
import { bnsLessonFor } from '../bns/lessons'
import { bnsSectionById } from '../bns/sections'
import { bnssChapterById } from '../bnss/chapters'
import { bnssSectionById } from '../bnss/sections'
import { bsaChapterById } from '../bsa/chapters'
import { bsaSectionById } from '../bsa/sections'

type CodeKind = 'bns' | 'bnss' | 'bsa'

type Provision = {
  id: string
  title: string
  chapter: string
  cluster: string
  gist: string
  ipc?: string
  legacy?: string
  punishment?: string
  flags: string[]
  related: string[]
}

function codeMeta(kind: CodeKind) {
  switch (kind) {
    case 'bns':
      return {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        short: 'BNS',
        legacyLabel: 'IPC',
        verb: 'offences',
      }
    case 'bnss':
      return {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        short: 'BNSS',
        legacyLabel: 'CrPC',
        verb: 'procedure',
      }
    case 'bsa':
      return {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023',
        short: 'BSA',
        legacyLabel: 'IEA',
        verb: 'evidence',
      }
  }
}

function chapterOf(kind: CodeKind, id: string) {
  if (kind === 'bns') return bnsChapterById(id)
  if (kind === 'bnss') return bnssChapterById(id)
  return bsaChapterById(id)
}

function illustration(kind: CodeKind, p: Provision): { id: string; title: string; description: string } {
  return {
    id: `${kind}-${p.id}-ex`,
    title: 'Illustration',
    description:
      kind === 'bns'
        ? `A set of facts in ${p.cluster.toLowerCase()} is charged after 1 July 2024. The correct current-law cite is BNS s. ${p.id} (${p.title}), not the old IPC number.`
        : kind === 'bnss'
          ? `A 2026 criminal proceeding reaches the stage covered by this section. Cite BNSS s. ${p.id} (${p.title}). If an older judgment uses a CrPC number, convert it — do not paste the CrPC number into a current application.`
          : `At trial the court is asked to receive or exclude evidence of the kind this section governs. Cite BSA s. ${p.id} (${p.title}), not the Indian Evidence Act number.`,
  }
}

export function synthesizeCatalogSection(kind: CodeKind, sectionId: string): TopicContent | null {
  const p: Provision | undefined =
    kind === 'bns'
      ? bnsSectionById(sectionId)
      : kind === 'bnss'
        ? bnssSectionById(sectionId)
        : bsaSectionById(sectionId)
  if (!p) return null

  const meta = codeMeta(kind)
  const chapter = chapterOf(kind, p.chapter)
  const lesson = kind === 'bns' ? bnsLessonFor(sectionId) : undefined
  const cases = kind === 'bns' ? bnsCasesForSection(sectionId) : []
  const isNew = p.flags.includes('new')
  const legacy = p.ipc || p.legacy
  const mapLine = isNew
    ? `New provision — no ${meta.legacyLabel} predecessor. Do not invent one.`
    : legacy
      ? `${meta.legacyLabel} concordance: ${legacy}. Convert the number; do not assume the ingredients are identical.`
      : `${meta.legacyLabel} concordance is not verified for this section. Confirm in the mapper / Bare Act before writing an equivalent.`

  const body = lesson?.plain ?? p.gist
  const points = lesson?.points?.length
    ? lesson.points
    : [
        `${meta.short} s. ${p.id} is titled “${p.title}”.`,
        chapter
          ? `It sits in Chapter ${chapter.roman} — ${chapter.title} (ss. ${chapter.from}–${chapter.to}).`
          : `Cluster: ${p.cluster}.`,
        mapLine,
        p.punishment ? `Punishment / consequence: ${p.punishment}` : `Read the Bare Act for the exact ingredients, proviso and punishment.`,
        `For ${meta.verb} on or after 1 July 2024, cite ${meta.short} s. ${p.id}.`,
      ]

  const study = [
    `Topic at a glance`,
    `${meta.short} Section ${p.id} — ${p.title}.`,
    `\nWhat the law says`,
    body,
    chapter ? `\nWhere it sits\nChapter ${chapter.roman} — ${chapter.title}. ${chapter.blurb}` : '',
    `\nWhy this section exists`,
    `Every Code is used section by section. This page is the study note for s. ${p.id} so you can open the exact provision, learn what it does, map the old number, and write a 10-mark answer without mixing chapters.`,
    `\nEssential idea`,
    points.map((x) => `• ${x}`).join('\n'),
    p.punishment ? `\nPunishment / consequence\n${p.punishment}` : '',
    `\n${meta.legacyLabel} mapping\n${mapLine}`,
    lesson?.exam ? `\nExam focus\n${lesson.exam}` : `\nExam focus\nName ${meta.short} s. ${p.id} and the title. State the rule in your own words. Add the ${meta.legacyLabel} number only as history. Apply it to one short fact situation.`,
    p.related.length
      ? `\nRelated sections\n${p.related.map((id) => `${meta.short} s. ${id}`).join(', ')}. Use previous/next at the bottom of this page to walk the Chapter.`
      : '',
    `\nCurrent-law position`,
    `Cite ${meta.short} s. ${p.id} for ${meta.verb} on or after 1 July 2024. Educational notes — always cross-check India Code for the authentic wording.`,
  ]
    .filter(Boolean)
    .join('\n')

  return {
    study,
    glance: `${meta.short} s. ${p.id} — ${p.title}.`,
    provisions: [
      {
        actId: meta.actId,
        actName: meta.actName,
        provisionId: `${meta.actId}-section-${p.id}`,
        section: `s. ${p.id}`,
        title: p.title,
      },
    ],
    examples: [illustration(kind, p)],
    cases: cases.map((c) => ({
      name: c.name,
      year: c.year,
      citation: c.citation,
      holding: c.holding,
    })),
    questionsAndAnswers: lesson?.quiz
      ? [
          {
            id: `${kind}-${p.id}-q1`,
            question: lesson.quiz.prompt,
            answer: lesson.quiz.choices[lesson.quiz.answer] ?? '',
            explanation: lesson.quiz.explain,
          },
        ]
      : [
          {
            id: `${kind}-${p.id}-q1`,
            question: `What is ${meta.short} s. ${p.id}?`,
            answer: `${p.title}. ${mapLine}`,
            relatedProvisionIds: [`${meta.actId}-section-${p.id}`],
          },
        ],
    misconceptions: [
      {
        id: `${kind}-${p.id}-trap`,
        trap: `Citing the old ${meta.legacyLabel} number as if it were still the current section.`,
        correction: `Write ${meta.short} s. ${p.id}. ${mapLine}`,
      },
    ],
    examTips: [
      `Cite ${meta.short} s. ${p.id}, not the old ${meta.legacyLabel} number, for post-1 July 2024 facts.`,
      ...(lesson?.exam ? [lesson.exam] : []),
    ],
    examFrameworks: [
      {
        marks: 10,
        question: `Write a note on ${meta.short} s. ${p.id} (${p.title}).`,
        steps: [
          `Introduce s. ${p.id} by title and Chapter.`,
          'State what the section does, in your own words — not only the heading.',
          'List the essential ingredients or the procedural/evidentiary rule.',
          mapLine,
          'Give one short illustration or apply it to facts.',
          'Close with the current-law citation and the 1 July 2024 date rule.',
        ],
      },
      {
        marks: 16,
        question: `Discuss ${meta.short} s. ${p.id} with connected sections in this Chapter.`,
        steps: [
          `Place s. ${p.id} in Chapter ${chapter?.roman ?? p.cluster}.`,
          'Explain the rule and every important proviso you can verify from the Bare Act.',
          'Map the old number and say what, if anything, changed.',
          'Connect the neighbouring sections listed on this page.',
          'Work a hypothetical.',
          'Add exam traps (wrong Code, wrong number, wrong date).',
          'Conclude.',
        ],
      },
    ],
    answerSkeleton: [
      `Introduction — ${meta.short} s. ${p.id}, ${p.title}.`,
      'The rule / ingredients.',
      `${meta.legacyLabel} mapping.`,
      'Illustration.',
      'Conclusion.',
    ],
    revisionPoints: [
      `${meta.short} s. ${p.id}: ${p.title}.`,
      mapLine,
      '1 July 2024 is the commencement line for the new Codes.',
    ],
    relatedTopics: p.related.map((id) => `s-${id}`),
    bareActPointers: [
      `${meta.short} s. ${p.id}`,
      chapter ? `Chapter ${chapter.roman}` : '',
      legacy ? `${meta.legacyLabel} ${legacy}` : '',
    ].filter(Boolean),
  }
}
