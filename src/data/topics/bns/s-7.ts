import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 7 allows a court, in certain cases of imprisonment, to direct that the sentence shall be wholly rigorous, wholly simple, or partly rigorous and partly simple. It is the successor to IPC s. 60.',
  study: `Section 7 gives the sentencing court flexibility over the character of imprisonment when the offence section does not itself fix the description.\n\nRule: In every case in which an offender is punishable with imprisonment that may be rigorous or simple, the court may direct that such imprisonment shall be wholly rigorous, wholly simple, or any part rigorous and the rest simple.\n\nThe power is available only where the offence section itself permits imprisonment of either description (or does not lock the court into one description). Where the section mandates rigorous imprisonment only, s. 7 does not authorise a simple sentence.\n\nCite BNS s. 7 for post-1 July 2024 offences; substance tracks old IPC s. 60.`,
  sections: [
    { id: 's-7-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 60. Objective: flexibility in the character of imprisonment.'] },
    { id: 's-7-m2', title: 'Textual Scope', order: 2, content: ['Court may order wholly rigorous, wholly simple, or mixed, where the offence permits either description.'] },
    { id: 's-7-m3', title: 'Ingredients', order: 3, content: ['Offence punishable with imprisonment that may be rigorous or simple; court exercises the discretion under s. 7.'] },
    { id: 's-7-m4', title: 'Evidence / Sentencing', order: 4, content: ['Character of imprisonment is a sentencing choice guided by the nature of the offence and the offender.'] },
    { id: 's-7-m5', title: 'Procedure', order: 5, content: ['Recorded in the judgment of sentence under BNSS trial procedure.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-7', section: 's. 7', title: 'Sentence may be wholly or partly rigorous or simple' }],
  examples: [
    { id: 's-7-ex1', title: 'Mixed sentence', illustrationType: 'practical', description: 'An offence is punishable with imprisonment of either description up to two years. The court may order one year rigorous and one year simple under s. 7.' },
    { id: 's-7-ex2', title: 'No power where only rigorous is prescribed', illustrationType: 'fail-scenario', description: 'If the offence section mandates rigorous imprisonment only, the court cannot convert it to simple under s. 7.' },
  ],
  hypotheticals: [{ id: 's-7-hypo', title: 'Character of imprisonment', facts: 'Conviction under a section that allows imprisonment of either description.', question: 'May the court split the term into rigorous and simple portions?', applicableLaw: 'BNS s. 7.', analysis: 'Yes, provided the offence section permits either description.', conclusion: 'The court may order a mixed sentence under s. 7.' }],
  distinctions: [],
  misconceptions: [{ id: 's-7-trap', trap: 'Section 7 allows the court to reduce the maximum term.', correction: 'It only governs the character (rigorous/simple), not the length of the term, which remains governed by the offence section.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-7-brief', draftingCategory: 'brief', question: 'Explain BNS s. 7.', answer: 'Where an offence is punishable with imprisonment that may be rigorous or simple, the court may direct that the imprisonment be wholly rigorous, wholly simple, or partly each.', explanation: 'Short note.' },
    { id: 's-7-sub', draftingCategory: 'submissions', question: 'Submissions on s. 7.', answer: 'I. Scope. II. Limits (cannot override a mandatory rigorous prescription). III. Prayer for appropriate character of sentence.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 7', 'IPC s. 60 (historical)'],
  examTips: ['Emphasise that s. 7 controls character, not length, of imprisonment.'],
  revisionPoints: ['Wholly rigorous, wholly simple, or mixed.', 'Only where the offence permits either description.'],
  relatedTopics: ['s-4', 's-8'],
}

export default content
