import { cpcOrderById } from '../../cpc/orders'
import { cpcSectionById } from '../../cpc/sections'
import type { TopicContent } from '../topicTypes'
import { synthesizeCpcContent } from '../synthesizeCpc'

function connectedText(ids: string[], kind: 'section' | 'order') {
  if (!ids.length) return 'the connected provisions of the CPC'
  return ids.map((id) => `${kind === 'section' ? 'Section' : 'Order'} ${id} CPC`).join(', ')
}

export function createCpcTopic(topicId: string): TopicContent {
  const sectionId = topicId.match(/^s-(.+)$/i)?.[1]
  const orderId = topicId.match(/^(?:o|order)-(.+)$/i)?.[1]
  const section = sectionId ? cpcSectionById(sectionId) : undefined
  const order = orderId ? cpcOrderById(orderId) : undefined
  const kind = section ? 'section' : 'order'
  const title = section?.title || order?.title || topicId
  const cluster = section?.cluster || order?.cluster || 'Civil procedure'
  const related = section?.related || []
  const cite = section ? `Section ${section.id} CPC` : `Order ${order?.roman || orderId} CPC`
  const base = synthesizeCpcContent(topicId) || {}
  const titleText = `${cite} - ${title}`

  return {
    ...base,
    glance: `${titleText}. Civil-procedure treatise covering statutory anatomy, mandatory conditions, forum, limitation, connected provisions, judicial authority and chamber drafting.`,
    study: `${base.study || ''}\n\nDispatcher compliance\n${titleText} must be read as part of the Code of Civil Procedure, 1908, which remains in force and is not repealed by BNSS. Distinguish a substantive CPC section from an Order and Rule. Identify the stage of the civil suit, the competent court, the pleading or application before the Court, the limitation or case-management deadline, and the precise procedural order sought.\n\nCivil litigation proof and procedural fairness\nThe party asserting the procedural foundation must establish it from the pleadings, orders, service record and admissible documents. Where electronic filings, notices, orders or account records are relied upon, check the applicable BSA 2023 route, including ss. 63, 104 and 109 where relevant. Electronic evidence does not cure defective service, lack of jurisdiction, limitation or failure to plead a material fact.\n\nSenior Counsel close\nApply the CPC provision in sequence: identify the cause of action or procedural stage, read the exact statutory or Order/Rule language, test jurisdiction and limitation, distinguish the nearest procedural remedy, apply the facts, and seek a precise order. Avoid treating procedural rules as automatic dismissal unless the Code or binding authority makes that consequence mandatory.`,
    sections: [
      {
        id: `cpc-${topicId}-module-1`,
        title: 'Provenance, Legislative Objective and Procedural Foundation',
        order: 1,
        content: [
          `${titleText} operates within the ${cluster} cluster of the Code of Civil Procedure, 1908.`,
          'Civil procedure is intended to secure fair adjudication, orderly pleadings, effective hearings and enforceable judgments, not to create technical traps detached from prejudice and justice.',
          'Read the provision with the pleadings, the nature of the suit, the stage of proceedings and the court’s case-management responsibility.',
        ],
      },
      {
        id: `cpc-${topicId}-module-2`,
        title: 'Textual Anatomy, Conditions and Connected Rules',
        order: 2,
        content: [
          `Deconstruct the exact language of ${cite}, including its clauses, provisos, explanations and discretion.`,
          `${connectedText(related, 'section')} must be distinguished rather than merged into a single generic procedural test.`,
          kind === 'order' ? 'Name the applicable Rule inside the Order before advising on the application.' : 'Identify the Order and Rule that supplies the working procedure for the statutory power.',
        ],
      },
      {
        id: `cpc-${topicId}-module-3`,
        title: 'Mandatory Procedural Ingredients and Relief Test',
        order: 3,
        content: [
          'Identify a live civil proceeding, the party or process affected and the procedural event that activates the provision.',
          'Establish each condition precedent from the plaint, written statement, application, service record, order or admitted document.',
          'Address prejudice, waiver, jurisdiction, maintainability and whether the Court has discretion or must grant the procedural consequence.',
          'State the exact relief: return or rejection, stay, injunction, framing of issue, adjournment, execution direction, appeal, revision or another CPC order.',
        ],
      },
      {
        id: `cpc-${topicId}-module-4`,
        title: 'BSA 2023 Evidence and Burden in Civil Procedure',
        order: 4,
        content: [
          'BSA s. 104 supplies the ordinary burden framework for foundational facts; a party cannot obtain a procedural order by assertion alone.',
          'BSA s. 109 applies to facts especially within knowledge only after the asserting party establishes the legal and factual foundation.',
          'Where electronic pleadings, service records, contracts, accounts or court records are relied upon, test the applicable BSA s. 63 route, authenticity, custody and weight.',
        ],
      },
      {
        id: `cpc-${topicId}-module-5`,
        title: 'Forum, Limitation, Case Management and Appellate Roadmap',
        order: 5,
        content: [
          'Identify territorial, pecuniary and subject-matter jurisdiction, including any express or implied statutory bar and the competent appellate forum.',
          'Check the Limitation Act, 1963 article or the special statute and calculate the period from the correct cause of action, decree, order or knowledge date.',
          'For pleadings and commercial suits, check the applicable filing and case-management timetable; distinguish directory timelines from mandatory forfeiture rules.',
          'State whether the immediate remedy is appeal, revision, review, reference, execution objection, amendment, rejection, return, injunction or a separate suit.',
        ],
      },
    ],
    provisions: [
      { actId: 'cpc', actName: 'Code of Civil Procedure, 1908', provisionId: `cpc-${topicId}`, section: section ? `s. ${section.id}` : undefined, title: kind === 'order' ? `Order ${order?.roman} - ${title}` : title },
      { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-s-63', section: 's. 63', title: 'Admissibility of electronic records where applicable' },
    ],
    examples: [
      { id: `cpc-${topicId}-ill-1`, title: 'Example 1 - Procedural conditions satisfied', illustrationType: 'practical', description: `The pleadings and court record establish the stage, jurisdiction, service, limitation and every condition of ${cite}. The Court applies the provision and grants the precise procedural relief sought.` },
      { id: `cpc-${topicId}-ill-2`, title: 'Example 2 - Threshold defect', illustrationType: 'fail-scenario', description: `A party invokes ${cite} without pleading the material fact, filing within limitation, proving service or satisfying the jurisdictional condition. The Court identifies the missing foundation and refuses or defers the relief according to the Code.` },
    ],
    hypotheticals: [
      {
        id: `cpc-${topicId}-hypo`,
        title: `Chamber Practice Hypothetical: ${titleText}`,
        facts: `A party seeks an order under ${cite} in a pending civil suit. The opponent raises objections on jurisdiction, limitation, pleadings, service and the authenticity of an electronic record relied upon in the application.`,
        question: `Whether the application under ${cite} is maintainable and what order should the civil court pass.`,
        applicableLaw: `Code of Civil Procedure, 1908: ${cite}, connected provisions ${connectedText(related, 'section')}; Limitation Act, 1963; BSA ss. 63, 104 and 109 where applicable.`,
        analysis: `1. Identify the civil proceeding and procedural stage. 2. Apply the exact statutory or Order/Rule conditions. 3. Test jurisdiction, limitation, service, pleading and prejudice. 4. Examine electronic material under the applicable BSA route. 5. Distinguish the nearest remedy and issue a precise order supported by the record.`,
        conclusion: `${cite} applies only if its procedural conditions and the court's jurisdiction are established. The Court should grant, modify, refuse or defer the application according to the proved record and the governing CPC discretion.`,
      },
    ],
    distinctions: [
      {
        id: `cpc-${topicId}-distinction`,
        title: `${titleText} and connected civil procedure`,
        left: cite,
        right: connectedText(related, 'section'),
        rows: [
          { point: 'Function', left: title, right: 'Connected jurisdiction, pleading, evidence, remedy or execution rule' },
          { point: 'Trigger', left: 'Its own procedural conditions', right: 'A different stage or condition must be independently established' },
          { point: 'Consequence', left: 'Specific CPC order or direction', right: 'Do not import the neighbour\'s consequence automatically' },
        ],
      },
    ],
    misconceptions: [
      { id: `cpc-${topicId}-trap-1`, trap: `Quoting ${cite} without identifying the stage, conditions and precise relief.`, correction: 'A CPC answer must connect the text to pleadings, jurisdiction, limitation, evidence and the order the Court can lawfully pass.' },
      { id: `cpc-${topicId}-trap-2`, trap: 'Treating CPC as repealed by BNSS.', correction: 'BNSS is criminal procedure. The Code of Civil Procedure, 1908 remains the governing general civil procedure statute.' },
      { id: `cpc-${topicId}-trap-3`, trap: 'Using electronic material without foundation or treating every procedural defect as fatal.', correction: 'Apply BSA requirements to digital records and distinguish curable irregularity, prejudice, jurisdictional failure and mandatory statutory consequence.' },
    ],
  }
}