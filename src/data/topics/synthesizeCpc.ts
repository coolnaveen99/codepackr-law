import type { TopicContent } from './topicTypes'
import { cpcSectionById, cpcSectionIdFromTopicId } from '../cpc/sections'
import { cpcOrderById, cpcOrderIdFromTopicId } from '../cpc/orders'
import { CPC_EXAM_BANK } from '../cpc/examBank'
import { noteFromCluster } from '../cpc/examClusters'

export function hasCpcCatalogTopic(topicId: string): boolean {
  const sectionId = cpcSectionIdFromTopicId(topicId)
  if (sectionId && cpcSectionById(sectionId)) return true
  const orderId = cpcOrderIdFromTopicId(topicId)
  return Boolean(orderId && cpcOrderById(orderId))
}

function build(cite: string, title: string, cluster: string, key: string, kind: 'section' | 'order'): TopicContent {
  const note = CPC_EXAM_BANK[key] ?? noteFromCluster(cite, title, cluster, kind)
  const omitted = /\[(repealed|omitted)\]/i.test(title)

  if (omitted) {
    return {
      glance: `${cite} — not current law.`,
      study: `${cite} (“${title}”) is not current working law. Write that it is repealed or omitted and move to the living heading.`,
      questionsAndAnswers: [
        { id: `${key}-10`, marks: 10, question: `Write a 10-mark note on ${cite}.`, answer: `Introduction. ${cite} is titled “${title}”.\n\nCurrent law. It is not a living heading.\n\nConclusion. Name the provision that now governs the facts.` },
      ],
      examTips: ['Do not apply a repealed CPC heading to 2026 facts.'],
    }
  }

  const caseBlock = note.cases.map((c, i) => `${i + 1}. ${c.name}${c.year ? ` (${c.year})` : ''}${c.citation ? `, ${c.citation}` : ''}: ${c.holding}`).join('\n')

  const study = [
    `Introduction and meaning`,
    `${cite} of the Code of Civil Procedure, 1908 is titled “${title}”. Cluster: ${cluster}.`,
    note.meaning,
    ``,
    `Why this scores marks`,
    `A 10-mark question wants meaning, essentials, one illustration and a case. A 16-mark problem wants IRAC, a neighbour distinction, and a fail-illustration.`,
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
    `Cite ${cite} of the Code of Civil Procedure, 1908. CPC was not replaced by BNSS.`,
  ].join('\n')

  const ten = [
    `Introduction. ${cite} CPC is titled “${title}”.`,
    `Meaning. ${note.meaning}`,
    `Essentials.\n${note.essentials.map((e, i) => `${i + 1}. ${e}`).join('\n')}`,
    `Illustration. ${note.illustration}`,
    note.cases[0] ? `Authority. ${note.cases[0].name}${note.cases[0].year ? ` (${note.cases[0].year})` : ''}: ${note.cases[0].holding}` : '',
    `Conclusion. ${cite} of the Code of Civil Procedure, 1908 is the working heading.`,
  ].filter(Boolean).join('\n\n')

  const sixteen = [
    ten,
    `16-mark expansion.`,
    `Place. Cluster: ${cluster}. ${note.neighbour}`,
    note.cases[1] ? `Second authority. ${note.cases[1].name}${note.cases[1].year ? ` (${note.cases[1].year})` : ''}: ${note.cases[1].holding}` : `Comment. ${note.neighbour}`,
    `IRAC facts. ${note.illustration}`,
    `Change one condition. ${note.failIllustration}`,
    `Issue. Does ${cite} apply?`,
    `Rule. ${note.meaning}`,
    `Application. Map each fact to a condition. Name the missing condition in the fail-illustration.`,
    `Conclusion. First illustration: ${cite} applies. Second: it fails. Close with ${cite} CPC, 1908.`,
  ].join('\n\n')

  return {
    glance: `${cite} — ${title}. Full exam note with illustrations, cases and 10/16-mark answers.`,
    study,
    examples: [
      { id: `${key}-ex-1`, title: 'Illustration — applies', description: note.illustration },
      { id: `${key}-ex-2`, title: 'Illustration — fails', description: note.failIllustration },
    ],
    hypotheticals: [{
      id: `${key}-hypo`,
      title: '16-mark hypothetical',
      facts: note.illustration,
      question: `Does ${cite} apply?`,
      applicableLaw: `${cite}. ${note.meaning}`,
      analysis: note.failIllustration,
      conclusion: `Apply ${cite} only if every condition is present.`,
    }],
    misconceptions: [
      { id: `${key}-t1`, trap: note.trap, correction: note.correction },
      { id: `${key}-t2`, trap: 'Quoting the heading and stopping.', correction: 'Write meaning, essentials, illustration and conclusion.' },
      { id: `${key}-t3`, trap: 'Treating CPC as repealed by BNSS.', correction: 'BNSS is criminal procedure. CPC 1908 is the civil code.' },
    ],
    questionsAndAnswers: [
      { id: `${key}-q-10`, marks: 10, question: `Write a 10-mark note on ${cite} (${title}).`, answer: ten },
      { id: `${key}-q-16`, marks: 16, question: `The facts raise ${cite}. Write a 16-mark answer.`, answer: sixteen },
    ],
    cases: note.cases,
    bareActPointers: [cite, 'Code of Civil Procedure, 1908'],
    examTips: ['Heading → meaning → essentials → illustration → case → conclusion', kind === 'order' ? 'Name the Rule inside the Order.' : 'Name the connected Order if a Rule is in play.', note.correction],
    examFrameworks: [
      { marks: 10, steps: ['Heading', 'Meaning', 'Essentials', 'Illustration', 'Case', 'Conclusion'] },
      { marks: 16, steps: ['Issue', 'Rule', 'Neighbour', 'Apply', 'Fail-illustration', 'Authority', 'Conclusion'] },
    ],
    revisionPoints: [`${cite}: ${title}.`, note.meaning, 'CPC 1908 is current law.'],
    answerSkeleton: ['Citation', 'Meaning', 'Essentials', 'Illustration / counter-illustration', 'Authority', 'Conclusion'],
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
