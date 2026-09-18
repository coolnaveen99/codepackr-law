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

type ParsedBare = {
  heading: string
  ruleParas: string[]
  illustrations: string[]
  explanations: string[]
  exceptions: string[]
  provisos: string[]
  definitions: { term: string; meaning: string }[]
}

const bareCache: Partial<Record<CodeKind, Record<string, string>>> = {}

async function loadBareAct(kind: CodeKind): Promise<Record<string, string>> {
  if (bareCache[kind]) return bareCache[kind]!
  const mod =
    kind === 'bns'
      ? await import('../bns/bareAct.json')
      : kind === 'bnss'
        ? await import('../bnss/bareAct.json')
        : await import('../bsa/bareAct.json')
  const data = (mod.default ?? mod) as Record<string, string>
  bareCache[kind] = data
  return data
}

function codeMeta(kind: CodeKind) {
  if (kind === 'bns') {
    return { short: 'BNS', act: 'Bharatiya Nyaya Sanhita, 2023', verb: 'offences', examNoun: 'offence / definition / punishment' }
  }
  if (kind === 'bnss') {
    return { short: 'BNSS', act: 'Bharatiya Nagarik Suraksha Sanhita, 2023', verb: 'criminal procedure', examNoun: 'procedural rule' }
  }
  return { short: 'BSA', act: 'Bharatiya Sakshya Adhiniyam, 2023', verb: 'evidence', examNoun: 'evidentiary rule' }
}

function chapterOf(kind: CodeKind, id: string) {
  if (kind === 'bns') return bnsChapterById(id)
  if (kind === 'bnss') return bnssChapterById(id)
  return bsaChapterById(id)
}

function catalogSection(kind: CodeKind, sectionId: string): Provision | undefined {
  if (kind === 'bns') return bnsSectionById(sectionId)
  if (kind === 'bnss') return bnssSectionById(sectionId)
  return bsaSectionById(sectionId)
}

function splitParas(text: string): string[] {
  return text.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, ' ').trim()).filter(Boolean)
}

function isHeadingLine(p: string, pattern: RegExp) {
  return pattern.test(p.trim())
}

function parseBare(text: string, fallbackTitle: string): ParsedBare {
  const paras = splitParas(text)
  let heading = fallbackTitle
  const body = [...paras]
  if (body[0] && !/^\d+\./.test(body[0]) && body[0].length < 140) {
    heading = body.shift()!.replace(/[.]+$/, '')
  }

  const illustrations: string[] = []
  const explanations: string[] = []
  const exceptions: string[] = []
  const provisos: string[] = []
  const ruleParas: string[] = []
  let mode: 'rule' | 'ill' | 'expl' | 'exc' = 'rule'

  for (const raw of body) {
    const p = raw.trim()
    if (isHeadingLine(p, /^illustrations?$/i)) {
      mode = 'ill'
      continue
    }
    if (isHeadingLine(p, /^exceptions?$/i)) {
      mode = 'exc'
      continue
    }
    if (/^explanation(\s*\d+)?\b/i.test(p) || /^explanation\s*[.—]/i.test(p)) {
      explanations.push(p)
      mode = 'expl'
      continue
    }
    if (/^exception(\s*\d+)?\b/i.test(p) && !/^exceptions?$/i.test(p)) {
      exceptions.push(p)
      mode = 'exc'
      continue
    }
    if (/^provided(\s+further)?\s+that\b/i.test(p) || /^proviso\b/i.test(p)) {
      provisos.push(p)
      continue
    }
    if (mode === 'ill') illustrations.push(p)
    else if (mode === 'exc') exceptions.push(p)
    else if (mode === 'expl') explanations.push(p)
    else ruleParas.push(p)
  }

  const definitions: { term: string; meaning: string }[] = []
  const defRe =
    /[“"']([^”"']{2,90})[”"']\s*(?:means|denotes|includes|is said to|shall mean)([^;]*?)(?:;|\.(?=\s|$))/gi
  const blob = paras.join(' ')
  let m: RegExpExecArray | null
  while ((m = defRe.exec(blob))) {
    const term = m[1].replace(/\s+/g, ' ').trim()
    const meaning = m[2].replace(/\s+/g, ' ').trim()
    if (term && meaning && !definitions.some((d) => d.term.toLowerCase() === term.toLowerCase())) {
      definitions.push({ term, meaning })
    }
  }

  return { heading, ruleParas, illustrations, explanations, exceptions, provisos, definitions }
}

function extractIngredients(ruleParas: string[]): string[] {
  const items: string[] = []
  for (const p of ruleParas) {
    const parts = p.split(/(?=\(\d+\)|\([a-z]\)|\([ivxlc]+\))/i)
    for (const part of parts) {
      const t = part.replace(/^\d+\.\s*/, '').trim()
      if (t.length > 24) items.push(t)
    }
  }
  const unique = items.filter((item, i, arr) => arr.findIndex((x) => x === item) === i)
  if (unique.length >= 2) return unique.slice(0, 16)
  return ruleParas.map((p) => p.replace(/^\d+\.\s*/, '')).filter((p) => p.length > 20).slice(0, 8)
}

function studentRule(ruleParas: string[], title: string, short: string, id: string): string {
  const first = (ruleParas[0] || '').replace(new RegExp(`^${id}\\.\\s*`), '').trim()
  if (!first) {
    return `In student language, ${short} s. ${id} is the working rule for “${title}”. Open with the title, then state the rule in your own words, then list every ingredient.`
  }
  return `In student language: ${short} s. ${id} is the rule on “${title}”. The section provides that ${first.charAt(0).toLowerCase()}${first.slice(1)}${first.endsWith('.') ? '' : '.'} Do not stop at the heading. An examiner awards marks for the ingredients, the explanations and the illustrations, not for writing the title alone.`
}

function purposeParagraph(kind: CodeKind, p: Provision, chapterTitle: string, short: string) {
  if (kind === 'bns') {
    return `Criminal law answers are won on ingredients. ${short} s. ${p.id} exists so that “${p.title}” has a closed legal test in Chapter ${chapterTitle}. A 10-mark note that only names the section scores poorly. A full-mark note defines the concept, lists every ingredient, walks the statutory illustrations, states exceptions, and applies the test to facts.`
  }
  if (kind === 'bnss') {
    return `Procedure is a sequence. ${short} s. ${p.id} is the working step for “${p.title}” inside ${chapterTitle}. University and Judiciary papers ask this as a 10-mark note (“explain the rule”) or a 16-mark problem (“apply the steps to these facts”). The student must be able to say what the court or the police must do, in what order, and what happens if a step is skipped.`
  }
  return `Evidence answers turn on relevancy, proof and exclusion. ${short} s. ${p.id} decides “${p.title}”. A full-mark answer states when the fact/document/statement is received, what the court does with it, the statutory illustrations, and the traps that make students confuse this section with its neighbours.`
}

function numbered(lines: string[]): string {
  return lines.map((l, i) => `${i + 1}. ${l}`).join('\n')
}

export async function synthesizeCatalogSection(
  kind: CodeKind,
  sectionId: string,
): Promise<TopicContent | null> {
  const p = catalogSection(kind, sectionId)
  if (!p) return null

  const meta = codeMeta(kind)
  const chapter = chapterOf(kind, p.chapter)
  const chapterTitle = chapter ? `${chapter.roman} — ${chapter.title}` : p.cluster
  const lesson = kind === 'bns' ? bnsLessonFor(sectionId) : undefined
  const cases = kind === 'bns' ? bnsCasesForSection(sectionId) : []
  const legacy = p.ipc || p.legacy

  const bare = await loadBareAct(kind)
  const raw = bare[sectionId] || bare[String(Number(sectionId))] || ''
  const parsed = parseBare(raw || `${p.title}\n\n${p.gist}`, p.title)
  const ingredients = extractIngredients(parsed.ruleParas.length ? parsed.ruleParas : [p.gist])
  const intro = lesson?.plain || p.gist

  const definitionBlock = parsed.definitions.length
    ? parsed.definitions
        .slice(0, 40)
        .map((d) => `“${d.term}” — ${d.meaning}.`)
        .join('\n\n')
    : ''

  const explanationBlock = parsed.explanations.length
    ? parsed.explanations.join('\n\n')
    : ''
  const exceptionBlock = [...parsed.exceptions, ...parsed.provisos].join('\n\n')

  const detailBlock = (parsed.ruleParas.length ? parsed.ruleParas : [p.gist]).join('\n\n')

  const hypoFacts = parsed.illustrations[0]
    ? parsed.illustrations[0]
    : `On 10 January 2026, after the new criminal laws have commenced, a fact situation arises in which the court must decide whether “${p.title}” under ${meta.short} s. ${p.id} is attracted. The record contains some facts that look like the ingredients and some facts that look like an exception or a missing condition.`

  const hypoAnalysis = [
    `Step 1 — Identify the provision. The correct current-law cite is ${meta.short} s. ${p.id} (${p.title}), Chapter ${chapterTitle}.`,
    `Step 2 — State the legal test in your own words, then list the ingredients:`,
    ...ingredients.slice(0, 8).map((ing, i) => `   (${i + 1}) ${ing}`),
    parsed.explanations.length
      ? `Step 3 — Read every Explanation. An explanation is part of the section. Omitting it is a 10-mark answer that stops at the main clause.`
      : `Step 3 — Check limitations, provisos and the rest of the Chapter so you do not apply s. ${p.id} in a vacuum.`,
    `Step 4 — Map each fact to an ingredient. Write “this fact proves ingredient (a)” or “this fact is missing, so the section is not made out”.`,
    `Step 5 — Conclude. If every essential ingredient is proved and no exception covers the case, ${meta.short} s. ${p.id} applies. If any essential ingredient fails, say so and stop. Do not invent a different section to save the answer.`,
  ].join('\n')

  const hypoConclusion = `The result depends on proof of the ingredients of ${meta.short} s. ${p.id}. A full-mark conclusion restates the test, applies it, and cites the section — it does not merely say “yes” or “no”.`

  const relatedLine = p.related.length
    ? p.related.map((id) => `${meta.short} s. ${id}`).join(', ')
    : ''

  const currentLaw = [
    `For ${meta.verb} on or after 1 July 2024, the correct citation is ${meta.short} s. ${p.id} — ${p.title}.`,
    legacy
      ? `Older books and judgments may still print a historical number (${legacy}). Convert it. Write the ${meta.short} number in a current answer. Do not treat the old number as if it were still the law.`
      : `Do not guess an old Code number for this heading.`,
    p.flags.includes('new') ? `Teaching flag: this heading is a new provision in the 2023 legislation. Do not invent a predecessor.` : '',
    p.id === '106' && kind === 'bns'
      ? `s. 106(2) was left out of the 1 July 2024 commencement notification. Do not write that the whole of s. 106 is in force.`
      : '',
  ]
    .filter(Boolean)
    .join(' ')

  const tenMarkAnswer = [
    `Introduction. ${meta.short} s. ${p.id} deals with ${p.title}. It sits in Chapter ${chapterTitle} of the ${meta.act}. After 1 July 2024 this is the current-law citation for this ${meta.examNoun}.`,
    `Meaning. ${intro}`,
    `Legal rule. ${studentRule(parsed.ruleParas, p.title, meta.short, p.id)}`,
    `Essential ingredients. A 10-mark answer must list them, not hide them in one paragraph:\n${numbered(ingredients.slice(0, 8))}`,
    parsed.definitions.length
      ? `Definitions. The examiner often opens with “define the terms”. Use the statutory meanings:\n${parsed.definitions
          .slice(0, 8)
          .map((d) => `“${d.term}” ${d.meaning}.`)
          .join(' ')}`
      : '',
    parsed.illustrations.length
      ? `Illustrations. The section itself supplies worked examples. In a 10-mark note, pick one illustration, restate its facts, and show which ingredient it proves. Illustration (a): ${parsed.illustrations[0]}`
      : `Illustration. Give one short original example (label it as an example) and apply the ingredients.`,
    parsed.explanations.length
      ? `Explanations. ${parsed.explanations[0]} An explanation is not optional commentary. It is part of the section and must appear in a full-mark note.`
      : '',
    exceptionBlock
      ? `Exceptions / provisos. ${exceptionBlock.slice(0, 500)}${exceptionBlock.length > 500 ? '…' : ''} State the exception and then say whether it is attracted on the facts.`
      : `Limitations. Apply only the conditions written in s. ${p.id}. Do not import a defence from a different chapter unless the question requires it.`,
    p.punishment ? `Consequence / punishment. ${p.punishment}` : '',
    relatedLine ? `Connected sections. Read with ${relatedLine}. A 10-mark note mentions the neighbour; a 16-mark note explains the difference.` : '',
    `Conclusion. ${meta.short} s. ${p.id} is the complete current-law heading for ${p.title}. Define, list ingredients, use an illustration, note any explanation or exception, apply, cite. That is a full 10-mark structure.`,
  ]
    .filter(Boolean)
    .join('\n\n')

  const sixteenMarkAnswer = [
    tenMarkAnswer,
    `Expanding to 16 marks. Do not repeat the same sentences. Add four more layers.`,
    `Layer 1 — Place the section in the Chapter. ${chapter?.blurb || chapterTitle}. Show the examiner you know why this heading sits where it sits.`,
    parsed.illustrations.length > 1
      ? `Layer 2 — Work a second statutory illustration. Illustration (b): ${parsed.illustrations[1]} Contrast it with illustration (a). Marks are awarded for the contrast.`
      : `Layer 2 — Work a second, slightly harder hypothetical. Change one ingredient and show why the section then fails.`,
    relatedLine
      ? `Layer 3 — Distinction. Contrast ${meta.short} s. ${p.id} with ${relatedLine}. Write a short table in prose: meaning, ingredients, stage of the case, consequence. Confusion of neighbouring sections is the most common way to lose 16-mark marks.`
      : `Layer 3 — Analytical comment. Explain a condition, a proviso, or a practical difficulty in applying s. ${p.id}. Do not invent case names.`,
    `Layer 4 — Application and current-law close. Apply the test to the problem facts in IRAC form (Issue, Rule, Application, Conclusion). Close with: “The governing citation on or after 1 July 2024 is ${meta.short} s. ${p.id}.”`,
  ].join('\n\n')

  const study = [
    `Introduction and meaning`,
    intro,
    studentRule(parsed.ruleParas, p.title, meta.short, p.id),

    `\nWhy this is asked`,
    purposeParagraph(kind, p, chapterTitle, meta.short),
    chapter?.blurb ? `Chapter setting: ${chapter.blurb}` : '',

    `\nThe provision in detail`,
    detailBlock,

    parsed.definitions.length ? `\nDefinitions and key terms\n${definitionBlock}` : '',

    `\nEssential ingredients`,
    numbered(ingredients),

    p.punishment ? `\nPunishment / legal consequence\n${p.punishment}` : '',

    parsed.illustrations.length
      ? `\nStatutory illustrations\n${parsed.illustrations
          .map((ill, i) => `(${String.fromCharCode(97 + i)}) ${ill}`)
          .join('\n\n')}`
      : '',

    explanationBlock ? `\nExplanations\n${explanationBlock}` : '',

    exceptionBlock ? `\nExceptions, limitations and provisos\n${exceptionBlock}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const sections = [
    { id: `${kind}-${p.id}-rule`, title: 'The legal rule', order: 1, content: parsed.ruleParas.length ? parsed.ruleParas : [intro] },
    ingredients.length
      ? { id: `${kind}-${p.id}-ing`, title: 'Essential ingredients', order: 2, content: ingredients }
      : null,
    parsed.definitions.length
      ? {
          id: `${kind}-${p.id}-defs`,
          title: 'Definitions and key terms',
          order: 3,
          content: parsed.definitions.map((d) => `“${d.term}” — ${d.meaning}.`),
        }
      : null,
    parsed.illustrations.length
      ? { id: `${kind}-${p.id}-ill`, title: 'Statutory illustrations', order: 4, content: parsed.illustrations }
      : null,
    parsed.explanations.length
      ? { id: `${kind}-${p.id}-expl`, title: 'Explanations', order: 5, content: parsed.explanations }
      : null,
    exceptionBlock
      ? { id: `${kind}-${p.id}-exc`, title: 'Exceptions and provisos', order: 6, content: [...parsed.exceptions, ...parsed.provisos] }
      : null,
  ].filter(Boolean) as NonNullable<TopicContent['sections']>

  const examples = parsed.illustrations.length
    ? parsed.illustrations.slice(0, 6).map((ill, i) => ({
        id: `${kind}-${p.id}-ex-${i + 1}`,
        title: `Illustration ${String.fromCharCode(97 + i)}`,
        description: ill,
      }))
    : undefined

  const questionsAndAnswers = [
    {
      id: `${kind}-${p.id}-q-10`,
      marks: 10 as const,
      question: `Write a 10-mark note on ${meta.short} s. ${p.id} (${p.title}).`,
      answer: tenMarkAnswer,
      explanation:
        'Do not submit a shortened answer. The 10-mark note above is the minimum complete structure: introduction, meaning, ingredients, illustration, explanation/exception, application, conclusion.',
    },
    {
      id: `${kind}-${p.id}-q-16`,
      marks: 16 as const,
      question: `Answer a 16-mark question: discuss ${meta.short} s. ${p.id} with illustrations and connected provisions.`,
      answer: sixteenMarkAnswer,
      explanation:
        'A 16-mark answer is the 10-mark note plus contrast, a second illustration or hypothetical, IRAC application and current-law close. It is not the 10-mark note typed twice.',
    },
  ]

  const distinctions =
    p.related.length > 0
      ? [
          {
            id: `${kind}-${p.id}-dist`,
            title: `${meta.short} s. ${p.id} and connected sections`,
            left: `${meta.short} s. ${p.id}`,
            right: relatedLine || 'Connected section',
            rows: [
              { point: 'Heading', left: p.title, right: 'Read the neighbour’s title on its own page before you write.' },
              { point: 'What you must prove', left: ingredients[0] || p.gist, right: 'Different ingredients — do not paste this section’s test onto the neighbour.' },
              { point: 'Exam trap', left: `Citing a neighbour as if it were s. ${p.id}.`, right: 'Citing s. ' + p.id + ' where the neighbour actually applies.' },
            ],
          },
        ]
      : undefined

  return {
    study,
    glance: `${meta.short} s. ${p.id} — ${p.title}.`,
    sections,
    examples,
    hypotheticals: [
      {
        id: `${kind}-${p.id}-hypo`,
        title: 'Examination hypothetical',
        facts: hypoFacts,
        question: `Whether ${meta.short} s. ${p.id} (${p.title}) applies, and how a 16-mark answer should be structured.`,
        applicableLaw: `${meta.short} s. ${p.id}. ${chapter ? `Chapter ${chapter.roman} — ${chapter.title}.` : ''} ${relatedLine ? `Connected: ${relatedLine}.` : ''}`,
        analysis: hypoAnalysis,
        conclusion: hypoConclusion,
      },
    ],
    distinctions,
    misconceptions: [
      {
        id: `${kind}-${p.id}-trap-1`,
        trap: 'Writing only the section number and the title, and calling that a 10-mark note.',
        correction: `A full-mark note defines the concept, lists ingredients, uses an illustration, states explanations/exceptions, applies the test, and concludes with ${meta.short} s. ${p.id}.`,
      },
      {
        id: `${kind}-${p.id}-trap-2`,
        trap: 'Copying a statutory illustration without mapping it to an ingredient.',
        correction: 'Quote the illustration, then write which ingredient it proves or which ingredient is missing. Mapping is the mark-earning sentence.',
      },
      {
        id: `${kind}-${p.id}-trap-3`,
        trap: 'Giving a one-line Q&A or a shortened explanation and hoping the examiner will fill the rest.',
        correction: 'Descriptive papers require a complete answer. The Q&A on this page is written at 10-mark / 16-mark length for that reason. Do not shorten it in the examination book.',
      },
    ],
    questionsAndAnswers,
    cases: cases.map((c) => ({
      name: c.name,
      year: c.year,
      citation: c.citation,
      holding: c.holding,
    })),
    examTips: [
      `Cite ${meta.short} s. ${p.id} for ${meta.verb} on or after 1 July 2024.`,
      'Ingredients first, illustration second, application third, conclusion last.',
      lesson?.exam || 'If the question is 16 marks, add a distinction, a second illustration, and IRAC.',
    ],
    examFrameworks: [
      {
        marks: 10,
        question: `Write a note on ${meta.short} s. ${p.id} (${p.title}).`,
        steps: [
          `Introduce ${meta.short} s. ${p.id} and Chapter ${chapterTitle}.`,
          'Define / state the meaning in your own words.',
          'List the essential ingredients.',
          parsed.illustrations.length
            ? 'Use one statutory illustration and map it to an ingredient.'
            : 'Give one labelled example and map it to an ingredient.',
          parsed.explanations.length || exceptionBlock
            ? 'State the material explanation or exception.'
            : 'State any express condition.',
          'Apply in four to six sentences.',
          `Conclude with the current citation — ${meta.short} s. ${p.id}.`,
        ],
      },
      {
        marks: 16,
        question: `Discuss ${meta.short} s. ${p.id} with illustrations and connected sections.`,
        steps: [
          'Everything in the 10-mark plan, written in full — not summarised.',
          'Place the section in the Chapter and explain why the heading exists.',
          parsed.illustrations.length > 1
            ? 'Work a second statutory illustration and contrast it with the first.'
            : 'Work a second hypothetical in which one ingredient fails.',
          relatedLine
            ? `Distinguish ${meta.short} s. ${p.id} from ${relatedLine}.`
            : 'Add analytical comment on a condition or practical difficulty.',
          'IRAC application to the problem facts.',
          'Name the exam traps (title-only answers, unmapped illustrations, shortened Q&A, wrong Code).',
          'Current-law conclusion.',
        ],
      },
    ],
    answerSkeleton: [
      `Introduction — ${meta.short} s. ${p.id}, ${p.title}.`,
      'Meaning and definition.',
      'Ingredients.',
      'Illustration mapped to an ingredient.',
      'Explanation / exception.',
      'Application (IRAC).',
      'Conclusion and current citation.',
    ],
    revisionPoints: [
      `${meta.short} s. ${p.id}: ${p.title}.`,
      ingredients[0] ? `First ingredient: ${ingredients[0]}` : intro,
      parsed.illustrations.length
        ? `${parsed.illustrations.length} statutory illustration(s) — quote and map.`
        : 'No printed illustration — prepare an original labelled example.',
      currentLaw,
    ],
    relatedTopics: p.related.map((id) => `s-${id}`),
  }
}
