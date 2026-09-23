import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 11 authorises solitary confinement as part of a sentence of rigorous imprisonment, within strict statutory limits. Successor to IPC s. 73.',
  study: `Section 11 permits a court that sentences an offender to rigorous imprisonment to order that the offender shall also be kept in solitary confinement for a portion of that imprisonment.\n\nLimits (subject to s. 12):\n• The period of solitary confinement must not exceed three months in the whole.\n• Further internal ceilings apply according to the length of the rigorous sentence (see s. 12).\n\nSolitary confinement is an additional incident of rigorous imprisonment; it is not a free-standing punishment under s. 4. It is ordered only when the court expressly so directs.\n\nCite BNS s. 11 for post-1 July 2024 offences.`,
  sections: [
    { id: 's-11-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 73. Objective: regulate the exceptional measure of solitary confinement.'] },
    { id: 's-11-m2', title: 'Textual Scope', order: 2, content: ['Available only as part of a rigorous-imprisonment sentence; maximum three months in the whole (further limited by s. 12).'] },
    { id: 's-11-m3', title: 'Ingredients', order: 3, content: ['Sentence of rigorous imprisonment; court expressly orders solitary confinement within the statutory ceilings.'] },
    { id: 's-11-m4', title: 'Evidence / Sentencing', order: 4, content: ['Imposed only after consideration of the nature of the offence and the offender; not routine.'] },
    { id: 's-11-m5', title: 'Procedure', order: 5, content: ['Must be expressly recorded in the sentence; execution follows prison rules consistent with the order and with ss. 11–12.'],
    },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-11', section: 's. 11', title: 'Solitary confinement' }],
  examples: [
    { id: 's-11-ex1', title: 'Lawful solitary', illustrationType: 'practical', description: 'A court sentencing an offender to two years’ rigorous imprisonment may, under ss. 11–12, order a limited period of solitary confinement within the statutory maxima.' },
    { id: 's-11-ex2', title: 'Exceeding the limit', illustrationType: 'fail-scenario', description: 'An order of solitary confinement exceeding three months in the whole, or exceeding the internal ceilings in s. 12, is ultra vires.' },
  ],
  hypotheticals: [{ id: 's-11-hypo', title: 'Solitary confinement', facts: 'Court wishes to add solitary confinement to a rigorous sentence.', question: 'What limits apply?', applicableLaw: 'BNS ss. 11–12.', analysis: 'Maximum three months in the whole, further limited by the scale in s. 12 according to the length of the rigorous term.', conclusion: 'Order only within those ceilings.' }],
  distinctions: [],
  misconceptions: [{ id: 's-11-trap', trap: 'Solitary confinement is a separate punishment under s. 4.', correction: 'It is an incident of rigorous imprisonment authorised by ss. 11–12, not a free-standing punishment in the s. 4 menu.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-11-brief', draftingCategory: 'brief', question: 'Explain solitary confinement under BNS s. 11.', answer: 'A court may order solitary confinement as part of a rigorous-imprisonment sentence, subject to a maximum of three months in the whole and the further limits in s. 12.', explanation: 'Short note.' },
    { id: 's-11-sub', draftingCategory: 'submissions', question: 'Submissions on solitary confinement.', answer: 'I. Power under s. 11. II. Ceilings in ss. 11–12. III. Prayer for / against the order.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 11', 'BNS s. 12', 'IPC s. 73 (historical)'],
  examTips: ['Always pair s. 11 with the limits in s. 12.', 'State that it is not a separate s. 4 punishment.'],
  revisionPoints: ['Solitary only with rigorous imprisonment.', 'Max 3 months in the whole (further limits in s. 12).'],
  relatedTopics: ['s-4', 's-12'],
}

export default content
