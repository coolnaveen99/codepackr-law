import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 61: when two or more persons agree to do, or cause to be done, an illegal act or a legal act by illegal means, such agreement is designated a criminal conspiracy. Successor to IPC s. 120A. Agreement is the gist; overt act required only for conspiracy to commit an offence punishable with less than the statutory threshold (as in the text).',
  study: `Section 61 defines criminal conspiracy.\n\nRule: When two or more persons agree to do, or cause to be done, (1) an illegal act, or (2) an act which is not illegal by illegal means, such an agreement is designated a criminal conspiracy.\n\nProviso / related rule: for conspiracy to commit an offence punishable with less than a specified level of imprisonment (as in the statutory text), some overt act besides the agreement is required; for more serious offences the agreement alone may suffice.\n\nKey points: the agreement is the core; parties need not know each other if they are parties to the same agreement; the illegal act need not be the ultimate object if illegal means are used. Cite BNS s. 61 for post-1 July 2024 acts. Distinguish from abetment by conspiracy (s. 45) and from common intention (s. 3(5)).`,
  sections: [
    { id: 's-61-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 120A. Agreement to do an illegal act or a legal act by illegal means.'] },
    { id: 's-61-m2', title: 'Text', order: 2, content: ['Agreement of two or more; illegal act, or legal act by illegal means; designated criminal conspiracy.'] },
    { id: 's-61-m3', title: 'Ingredients', order: 3, content: ['(1) Agreement of two or more persons. (2) To do an illegal act, or a legal act by illegal means. (3) Overt act where required by the statutory threshold.'] },
    { id: 's-61-m4', title: 'Evidence', order: 4, content: ['Agreement is usually inferred from conduct, meetings, communications, and concerted action.'] },
    { id: 's-61-m5', title: 'Procedure', order: 5, content: ['Punishment under s. 62 and related sections; may be charged with the object offence as well.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-61', section: 's. 61', title: 'Criminal conspiracy' }],
  examples: [
    { id: 's-61-ex1', title: 'Agreement to commit offence', illustrationType: 'practical', description: 'A and B agree to commit robbery. The agreement is a criminal conspiracy under s. 61.' },
    { id: 's-61-ex2', title: 'No agreement', illustrationType: 'fail-scenario', description: 'A and B independently decide to commit similar crimes without any agreement. There is no conspiracy under s. 61.' },
  ],
  hypotheticals: [{ id: 's-61-hypo', title: 'Conspiracy', facts: 'Two persons agree to cause an illegal act; one later withdraws.', question: 'Is conspiracy complete?', applicableLaw: 'BNS s. 61.', analysis: 'The agreement itself constitutes the conspiracy (subject to any overt-act requirement). Withdrawal may affect later liability but does not undo the completed agreement.', conclusion: 'Conspiracy is made out upon the agreement (and overt act if required).' }],
  distinctions: [{ id: 's-61-dist', title: 'Conspiracy vs Abetment by conspiracy vs Common intention', left: 'Criminal conspiracy (s. 61)', right: 'Abetment by conspiracy (s. 45) / Common intention (s. 3(5))', rows: [{ point: 'Gist', left: 'Agreement to do illegal act / legal act by illegal means', right: 'Abetment mode; or joint liability for a completed criminal act' }] }],
  misconceptions: [{ id: 's-61-trap', trap: 'Conspiracy requires the object offence to be completed.', correction: 'The agreement (and overt act where required) is enough. The object need not succeed for the conspiracy offence to exist.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-61-brief', draftingCategory: 'brief', question: 'Define criminal conspiracy under BNS s. 61.', answer: 'When two or more persons agree to do, or cause to be done, an illegal act or a legal act by illegal means, such agreement is a criminal conspiracy. An overt act may be required for lesser object offences as per the statutory text.', explanation: 'Short note.' },
    { id: 's-61-sub', draftingCategory: 'submissions', question: 'Submissions on conspiracy under s. 61.', answer: 'I. Agreement of two or more. II. Illegal act or legal act by illegal means. III. Overt act if required. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 61', 'BNS s. 62', 'BNS s. 45', 'BNS s. 3(5)', 'IPC s. 120A (historical)'],
  examTips: ['Gist is the agreement. Distinguish from abetment and common intention.'],
  revisionPoints: ['Agreement of 2+ to do illegal act (or legal act by illegal means) = criminal conspiracy.', 'Object need not be completed.'],
  relatedTopics: ['s-45', 's-3', 's-62'],
}

export default content
