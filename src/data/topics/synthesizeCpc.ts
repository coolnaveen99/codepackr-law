import type { TopicContent } from './topicTypes'
import { cpcSectionById, cpcSectionIdFromTopicId } from '../cpc/sections'
import { cpcOrderById, cpcOrderIdFromTopicId } from '../cpc/orders'
import { CPC_EXAM_BANK, type CpcExamNote } from '../cpc/examBank'

export function hasCpcCatalogTopic(topicId: string): boolean {
  const sectionId = cpcSectionIdFromTopicId(topicId)
  if (sectionId && cpcSectionById(sectionId)) return true
  const orderId = cpcOrderIdFromTopicId(topicId)
  return Boolean(orderId && cpcOrderById(orderId))
}

function fallbackNote(cite: string, title: string, cluster: string, kind: 'section' | 'order'): CpcExamNote {
  return {
    meaning: `${cite} is the CPC heading “${title}”. It sits in ${cluster}. A scoring answer restates the rule in the student’s own words, lists who moves the court, the conditions, the consequence, and the connected Order or section.`,
    essentials: [
      `Name ${cite} and the official title.`,
      'State the working rule in one sentence.',
      kind === 'order' ? 'Name the material Rule (not only the Order).' : 'Name any connected First Schedule Order.',
      'Apply the facts. If a condition is missing, say the provision fails.',
      'Close with the Code of Civil Procedure, 1908 — still in force.',
    ],
    illustration: `Teaching example. A party relies on ${cite} (${title}). Map each fact to one condition of the heading. If every condition is present, the court applies ${cite}.`,
    failIllustration: `Change one condition (wrong court, wrong party, wrong stage of the suit, or a special statute that occupies the field). Then ${cite} is not attracted. Write that failure expressly — that contrast earns 16-mark application marks.`,
    cases: [],
    trap: 'Quoting the heading and stopping, or mixing CPC with BNSS.',
    correction: 'Explain, illustrate, apply, conclude. BNSS is criminal procedure. CPC 1908 is civil procedure.',
    neighbour: `Place ${cite} next to its neighbour in ${cluster}. Distinguish that neighbour in three lines.`,
  }
}

function build(cite: string, title: string, cluster: string, key: string, kind: 'section' | 'order'): TopicContent {
  const note = CPC_EXAM_BANK[key] ?? fallbackNote(cite, title, cluster, kind)
  const omitted = title.toLowerCase().includes('[repealed]') || title.toLowerCase() === '[omitted]' || title.toLowerCase() === '[repealed]'

  if (omitted) {
    const study = `${cite} (“${title}”) is not current working law. Write that it is repealed or omitted and move to the living heading.`
    return {
      glance: `${cite} — not current law.`,
      study,
      questionsAndAnswers: [
        { id: `${key}-10`, marks: 10, question: `Write a 10-mark note on ${cite}.`, answer: `Introduction. ${cite} is titled “${title}”.\n\nCurrent law. It is not a living heading.\n\nConclusion. Name the provision that now governs the facts.` },
      ],
      examTips: ['Do not apply a repealed CPC heading to 2026 facts.'],
    }
  }

  const caseBlock = note.cases.length
    ? note.cases.map((c, i) => `${i + 1}. ${c.name}${c.year ? ` (${c.year})` : ''}${c.citation ? `, ${c.citation}` : ''}: ${c.holding}`).join('\n')
    : `Cite a verified leading case if the question is 16 marks. Do not invent a citation. If no case is remembered, write the rule and apply the facts — a wrong invented case loses marks.`

  const study = [
    `Introduction and meaning`,
    `${cite} of the Code of Civil Procedure, 1908 is titled “${title}”. Cluster: ${cluster}.`,
    note.meaning,
    ``,
    `Why this scores marks`,
    `University and Judiciary papers set ${cite} as a 10-mark note (“explain”) or a 16-mark problem (“apply these facts”). Marks are in the conditions, the illustration, the distinction, and the application — not in copying the marginal heading.`,
    ``,
    `Essentials to write`,
    note.essentials.map((e, i) => `${i + 1}. ${e}`).join('\n'),
    ``,
    `Illustration (works)`,
    note.illustration,
    ``,
    `Illustration (fails)`,
    note.failIllustration,
    ``,
    `Authority`,
    caseBlock,
    ``,
    `Neighbour / distinction`,
    note.neighbour,
    ``,
    `Current-law close`,
    `The governing citation is ${cite} of the Code of Civil Procedure, 1908. CPC was not replaced by BNSS.`,
  ].join('\n')

  const ten = [
    `Introduction. ${cite} CPC is titled “${title}”.`,
    `Meaning. ${note.meaning}`,
    `Essentials.\n${note.essentials.map((e, i) => `${i + 1}. ${e}`).join('\n')}`,
    `Illustration. ${note.illustration}`,
    note.cases[0] ? `Authority. ${note.cases[0].name}${note.cases[0].year ? ` (${note.cases[0].year})` : ''}: ${note.cases[0].holding}` : `Authority. State a verified case if known; otherwise apply the text.`,
    `Conclusion. ${cite} of the Code of Civil Procedure, 1908 is the working heading.`,
  ].join('\n\n')

  const sixteen = [
    ten,
    `16-mark expansion. Do not repeat the 10-mark note twice.`,
    `Layer 1 — Place. Cluster: ${cluster}. ${note.neighbour}`,
    note.cases[1] ? `Layer 2 — Second authority. ${note.cases[1].name}${note.cases[1].year ? ` (${note.cases[1].year})` : ''}: ${note.cases[1].holding}` : `Layer 2 — Analytical comment. ${note.neighbour}`,
    `Layer 3 — Hypothetical in IRAC. Facts: ${note.illustration} Change one condition as follows: ${note.failIllustration}`,
    `Issue. Does ${cite} apply?`,
    `Rule. ${note.meaning}`,
    `Application. Map each fact to a condition. State which condition fails in the second illustration.`,
    `Conclusion. First illustration: ${cite} applies. Second illustration: ${cite} fails. Close with ${cite} CPC, 1908.`,
  ].join('\n\n')

  return {
    glance: `${cite} — ${title}. Exam note with illustration, distinction and 10/16-mark answers.`,
    study,
    examples: [
      { id: `${key}-ex-1`, title: 'Illustration — provision applies', description: note.illustration },
      { id: `${key}-ex-2`, title: 'Illustration — provision fails', description: note.failIllustration },
    ],
    hypotheticals: [
      {
        id: `${key}-hypo`,
        title: '16-mark hypothetical',
        facts: note.illustration,
        question: `Does ${cite} apply? Write the IRAC answer.`,
        applicableLaw: `${cite}. ${note.meaning}`,
        analysis: `List the essentials. Map facts. Then test the failure illustration: ${note.failIllustration}`,
        conclusion: `Apply ${cite} only if every condition is present.`,
      },
    ],
    misconceptions: [
      { id: `${key}-trap-1`, trap: note.trap, correction: note.correction },
      { id: `${key}-trap-2`, trap: 'Writing a one-line meaning and stopping.', correction: 'A 10-mark note needs meaning, essentials, illustration and conclusion.' },
      { id: `${key}-trap-3`, trap: 'Treating CPC as repealed by BNSS.', correction: 'BNSS is criminal procedure. CPC 1908 remains the civil code.' },
    ],
    questionsAndAnswers: [
      { id: `${key}-q-10`, marks: 10, question: `Write a 10-mark note on ${cite} (${title}).`, answer: ten, explanation: 'Introduction, meaning, essentials, illustration, authority, conclusion.' },
      { id: `${key}-q-16`, marks: 16, question: `The facts raise ${cite}. Write a 16-mark answer.`, answer: sixteen, explanation: 'Add neighbour, second authority or analysis, and a fail-illustration in IRAC.' },
    ],
    cases: note.cases,
    bareActPointers: [cite, 'Code of Civil Procedure, 1908'],
    examTips: [
      'Open with the heading, then the rule in your own words.',
      'One working illustration and one failing illustration.',
      kind === 'order' ? 'Name the Rule inside the Order.' : 'Name the connected Order if the facts use a Rule.',
      note.correction,
    ],
    examFrameworks: [
      { marks: 10, question: `Note on ${cite}`, steps: ['Heading', 'Meaning', 'Essentials', 'Illustration', 'Case if known', 'Conclusion'] },
      { marks: 16, question: `Problem on ${cite}`, steps: ['Issue', 'Rule', 'Neighbour', 'Apply facts', 'Fail-illustration', 'Authority', 'Conclusion with citation'] },
    ],
    revisionPoints: [
      `${cite}: ${title}.`,
      note.meaning,
      note.essentials[0] ?? '',
      'CPC 1908 is current law.',
    ].filter(Boolean),
    answerSkeleton: ['Introduction + citation', 'Meaning', 'Essentials (numbered)', 'Illustration / counter-illustration', 'Authority', 'Conclusion'],
  }
}

export function synthesizeCpcContent(topicId: string): TopicContent | null {
  const sectionId = cpcSectionIdFromTopicId(topicId)
  if (sectionId) {
    const s = cpcSectionById(sectionId)
    if (!s) return null
    return build(`Section ${s.id} CPC`, s.title, s.cluster, s.id, 'section')
  }
  const orderId = cpcOrderIdFromTopicId(topicId)
  if (!orderId) return null
  const o = cpcOrderById(orderId)
  if (!o) return null
  return build(`Order ${o.roman} CPC`, o.title, o.cluster, `o-${o.id}`, 'order')
}
