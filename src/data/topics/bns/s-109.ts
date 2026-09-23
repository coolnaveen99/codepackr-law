import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 109 (and related attempt provisions): whoever attempts to commit an offence punishable with imprisonment, and in such attempt does any act towards the commission of the offence, is punished as provided (often up to one-half of the longest term for the completed offence, or as specifically stated). Attempt requires intention + an act that goes beyond preparation. Successor structure to IPC s. 511.',
  study: `Attempt under the BNS follows the classic structure: intention to commit the offence + an act towards its commission that goes beyond mere preparation.\n\nKey points\n• Preparation is not attempt. The act must be sufficiently proximate to the completion of the offence.\n• The punishment scale is generally a fraction of the completed offence (commonly up to one-half of the longest term), unless a specific attempt section provides otherwise.\n• Attempt to commit murder and certain other offences may have dedicated provisions; always check the specific section.\n\nCite the applicable BNS attempt section for post-1 July 2024 acts. Distinguish from abetment (s. 45) and conspiracy (s. 61).`,
  sections: [
    { id: 's-109-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 511. Attempt = intention + act beyond preparation.'] },
    { id: 's-109-m2', title: 'Elements of Attempt', order: 2, content: ['Intention to commit the offence; an act towards commission that is more than preparation.'] },
    { id: 's-109-m3', title: 'Ingredients', order: 3, content: ['(1) Intention. (2) Act towards commission. (3) Act goes beyond preparation. (4) Offence not completed (otherwise charge the completed offence).'] },
    { id: 's-109-m4', title: 'Evidence', order: 4, content: ['Proximity of the act to completion; intention inferred from conduct and circumstances.'] },
    { id: 's-109-m5', title: 'Procedure', order: 5, content: ['May be charged in the alternative with the completed offence where appropriate.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-109', section: 's. 109', title: 'Attempt to commit offence' }],
  examples: [
    { id: 's-109-ex1', title: 'Attempt beyond preparation', illustrationType: 'practical', description: 'A, intending to steal, breaks open a lock and is interrupted. The act has gone beyond preparation; attempt is made out.' },
    { id: 's-109-ex2', title: 'Mere preparation', illustrationType: 'fail-scenario', description: 'A buys tools intending to commit burglary but does nothing further. Preparation alone is not attempt.' },
  ],
  hypotheticals: [{ id: 's-109-hypo', title: 'Preparation vs attempt', facts: 'Accused does the last proximate act but is interrupted before completion.', question: 'Is attempt made out?', applicableLaw: 'BNS attempt provisions.', analysis: 'If the act has gone beyond preparation and is proximate to completion — yes.', conclusion: 'Attempt established.' }],
  distinctions: [{ id: 's-109-dist', title: 'Attempt vs Preparation vs Abetment', left: 'Attempt', right: 'Preparation / Abetment', rows: [{ point: 'Act', left: 'Act towards commission beyond preparation', right: 'Preparation only; or instigation/conspiracy/aid without the proximate act of the principal' }] }],
  misconceptions: [{ id: 's-109-trap', trap: 'Any step toward an offence is attempt.', correction: 'Only acts that go beyond preparation and are sufficiently proximate to completion constitute attempt.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-109-brief', draftingCategory: 'brief', question: 'What is attempt under the BNS?', answer: 'Attempt requires intention to commit the offence and an act towards its commission that goes beyond mere preparation. Punishment is generally a fraction of the completed offence unless a specific section provides otherwise.', explanation: 'Short note.' },
    { id: 's-109-sub', draftingCategory: 'submissions', question: 'Submissions on attempt.', answer: 'I. Intention. II. Act beyond preparation. III. Proximity. IV. Punishment scale. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS attempt provisions (s. 109 and related)', 'BNS s. 45', 'BNS s. 61', 'IPC s. 511 (historical)'],
  examTips: ['Always distinguish preparation from attempt.', 'State the proximity test.'],
  revisionPoints: ['Attempt = intention + act beyond preparation.', 'Preparation alone is not attempt.'],
  relatedTopics: ['s-45', 's-61', 's-101'],
}

export default content
