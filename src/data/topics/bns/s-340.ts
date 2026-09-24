import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 340 (and related): counterfeiting currency notes or bank notes — making, or performing any part of the process of making, counterfeit currency, or buying/selling/receiving counterfeit currency with knowledge. Serious economic offence. Successor structure to IPC ss. 489A–489E. High punishment scale.',
  study: `Counterfeiting currency under the BNS:\n\nWhoever counterfeits, or knowingly performs any part of the process of counterfeiting, any currency note or bank note, is punished as provided (very high scale, often life or long term).\n\nRelated offences cover:\n• Buying, selling, receiving, or disposing of counterfeit currency with knowledge.\n• Possession of counterfeit currency with knowledge and intent to use.\n• Making or possessing instruments or materials for counterfeiting.\n\nKey points\n• “Counterfeit” carries the general definition (resemblance sufficient to deceive).\n• Knowledge is central for possession/use offences.\n\nCite the applicable BNS sections for post-1 July 2024 acts. Often investigated by specialised agencies.`,
  sections: [
    { id: 's-340-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC ss. 489A–489E. Counterfeiting and related currency offences.'] },
    { id: 's-340-m2', title: 'Core Offence', order: 2, content: ['Counterfeiting currency notes or bank notes, or performing any part of the process.'] },
    { id: 's-340-m3', title: 'Related Offences', order: 3, content: ['Buying/selling/receiving with knowledge; possession with intent to use; instruments/materials for counterfeiting.'] },
    { id: 's-340-m4', title: 'Ingredients (core)', order: 4, content: ['(1) Counterfeiting or part of the process. (2) Currency note or bank note.'] },
    { id: 's-340-m5', title: 'Procedure', order: 5, content: ['Serious economic offence; specialised investigation; Sessions trial as applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-340', section: 's. 340', title: 'Counterfeiting currency notes or bank notes' }],
  examples: [
    { id: 's-340-ex1', title: 'Making counterfeit notes', illustrationType: 'practical', description: 'A operates a press to produce fake currency notes. Counterfeiting is made out.' },
    { id: 's-340-ex2', title: 'Innocent possession', illustrationType: 'fail-scenario', description: 'A receives a counterfeit note as change without knowledge. Without knowledge (and intent to use for possession offences), liability does not follow.' },
  ],
  hypotheticals: [{ id: 's-340-hypo', title: 'Possession with knowledge', facts: 'Accused is found with a bundle of counterfeit notes and evidence shows he knew and intended to circulate them.', question: 'Is a currency offence made out?', applicableLaw: 'BNS counterfeit-currency provisions.', analysis: 'Possession with knowledge and intent to use fits the related possession offence.', conclusion: 'Offence established.' }],
  distinctions: [],
  misconceptions: [{ id: 's-340-trap', trap: 'Mere possession of a counterfeit note is always an offence.', correction: 'For possession offences, knowledge (and often intent to use) is required. Innocent receipt without knowledge is not the offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-340-brief', draftingCategory: 'brief', question: 'Outline counterfeiting of currency under the BNS.', answer: 'Counterfeiting currency notes or bank notes, or performing any part of the process, is a serious offence with a high punishment scale. Related offences cover buying/selling/receiving with knowledge, possession with intent to use, and instruments/materials for counterfeiting. Knowledge is essential for possession/use offences.', explanation: 'Short note.' },
    { id: 's-340-sub', draftingCategory: 'submissions', question: 'Submissions on counterfeit currency.', answer: 'I. Counterfeiting or related conduct. II. Knowledge where required. III. Intent to use if possession. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS counterfeit-currency provisions', 'BNS definition of counterfeit', 'IPC ss. 489A–489E (historical)'],
  examTips: ['List the cluster: making, process, buying/selling, possession, instruments.', 'Stress knowledge for possession/use.'],
  revisionPoints: ['Counterfeiting currency = high-scale offence.', 'Knowledge essential for possession/use.', 'Includes electronic/process forms as per text.'],
  relatedTopics: ['s-336', 's-2', 's-318'],
}

export default content
