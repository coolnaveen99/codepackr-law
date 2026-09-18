import type { TopicContent } from './loadTopicContent'
import { cpcSectionById, cpcSectionIdFromTopicId } from '../cpc/sections'
import { cpcOrderById, cpcOrderIdFromTopicId } from '../cpc/orders'

export function hasCpcCatalogTopic(topicId: string): boolean {
  const sectionId = cpcSectionIdFromTopicId(topicId)
  if (sectionId && cpcSectionById(sectionId)) return true
  const orderId = cpcOrderIdFromTopicId(topicId)
  return Boolean(orderId && cpcOrderById(orderId))
}

export function synthesizeCpcContent(topicId: string): TopicContent | null {
  const sectionId = cpcSectionIdFromTopicId(topicId)
  if (sectionId) {
    const s = cpcSectionById(sectionId)
    if (!s) return null
    const cite = `Section ${s.id} CPC`
    const omitted = s.flags.includes('repealed') || s.flags.includes('omitted')
    const study = omitted
      ? `${cite} (“${s.title}”) is ${s.flags.includes('repealed') ? 'repealed' : 'omitted'}. It is not current working law.`
      : `${cite} is titled “${s.title}” (${s.cluster}). The Code of Civil Procedure, 1908 remains in force and was not replaced by BNSS.\n\n${s.gist}\n\nWrite the heading, the working rule, any connected Order, and apply the facts.`
    const ten = omitted
      ? `Introduction. ${cite} is not current law.\n\nConclusion. Name the living heading.`
      : `Introduction. ${cite} deals with ${s.title}.\n\nMeaning. ${s.gist}\n\nOperation. State who moves the court and the consequence.\n\nConclusion. Cite ${cite} of the Code of Civil Procedure, 1908.`
    const sixteen = `${ten}\n\n16-mark expansion. Place the section in its Part. Distinguish a neighbour. Apply IRAC. Close with ${cite}.`
    return {
      glance: `${cite} — ${s.title}.`,
      study,
      questionsAndAnswers: [
        { id: `cpc-${s.id}-10`, marks: 10, question: `Write a 10-mark note on ${cite} (${s.title}).`, answer: ten },
        { id: `cpc-${s.id}-16`, marks: 16, question: `Answer a 16-mark question on ${cite}.`, answer: sixteen },
      ],
      bareActPointers: [cite],
      examTips: ['CPC 1908 is current. BNSS is criminal procedure.'],
    }
  }
  const orderId = cpcOrderIdFromTopicId(topicId)
  if (!orderId) return null
  const o = cpcOrderById(orderId)
  if (!o) return null
  const cite = `Order ${o.roman} CPC`
  const study = `${cite} is titled “${o.title}”. Orders in the First Schedule are first-class CPC provisions.\n\n${o.gist}\n\nName the Order and the material Rule. Order XIII-A and Order XV-A apply to specified commercial disputes.`
  const ten = `Introduction. ${cite} deals with ${o.title}.\n\nMeaning. ${o.gist}\n\nWorking rules. Identify the Rules the facts use.\n\nConclusion. Cite ${cite}.`
  const sixteen = `${ten}\n\n16-mark expansion. Place the Order in the life of a suit. Distinguish a neighbour. Apply IRAC.`
  return {
    glance: `${cite} — ${o.title}.`,
    study,
    questionsAndAnswers: [
      { id: `cpc-o-${o.id}-10`, marks: 10, question: `Write a 10-mark note on ${cite} (${o.title}).`, answer: ten },
      { id: `cpc-o-${o.id}-16`, marks: 16, question: `Answer a 16-mark question on ${cite}.`, answer: sixteen },
    ],
    bareActPointers: [cite],
    examTips: ['Name the Rule, not only the Order.'],
  }
}
