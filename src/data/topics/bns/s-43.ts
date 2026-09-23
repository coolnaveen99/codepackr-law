import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 43: the right of private defence of property commences when a reasonable apprehension of danger to the property commences, and continues until the offender has retreated or the assistance of public authorities is obtained, or the property has been recovered, subject to the statutory detail. Successor to IPC s. 105.',
  study: `Section 43 fixes the temporal limits of private defence of property.\n\nCommencement: when a reasonable apprehension of danger to the property commences.\n\nContinuance (broad outline): until the offender has retreated, or the property has been recovered, or the assistance of the public authorities is obtained (with specific rules for theft, robbery, mischief, criminal trespass and house-breaking as in the statutory text).\n\nOnce the right has ended, further force is not protected. Cite BNS s. 43 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-43-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 105. Temporal limits of property defence.'] },
    { id: 's-43-m2', title: 'Text', order: 2, content: ['Commences with reasonable apprehension of danger to property; continues until retreat / recovery / public assistance (subject to detailed rules for each offence type).'] },
    { id: 's-43-m3', title: 'Ingredients', order: 3, content: ['Reasonable apprehension of danger to property; force used only while the right continues under the statutory tests.'] },
    { id: 's-43-m4', title: 'Evidence', order: 4, content: ['When the threat to property arose and when it ended (retreat, recovery, authorities).'] },
    { id: 's-43-m5', title: 'Procedure', order: 5, content: ['Critical when force continues after recovery or after the offender has retreated.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-43', section: 's. 43', title: 'Commencement and continuance of right of private defence of property' }],
  examples: [
    { id: 's-43-ex1', title: 'Right while theft is ongoing', illustrationType: 'practical', description: 'A uses force while a thief is still carrying away property. The right continues under s. 43.' },
    { id: 's-43-ex2', title: 'Right ended after recovery', illustrationType: 'fail-scenario', description: 'Property has been recovered and the thief has fled. A then uses force. The right under s. 43 has ended.' },
  ],
  hypotheticals: [{ id: 's-43-hypo', title: 'Property defence timing', facts: 'Thief has dropped the property and is fleeing; owner continues to attack.', question: 'Is the continued force protected?', applicableLaw: 'BNS s. 43.', analysis: 'Once the property is recovered / offender has retreated, the right typically ends.', conclusion: 'Continued force is not protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-43-trap', trap: 'Private defence of property continues indefinitely until the offender is punished.', correction: 'It continues only until retreat, recovery, or public assistance, as detailed in s. 43 — not until punishment.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-43-brief', draftingCategory: 'brief', question: 'When does the right of private defence of property commence and end under BNS s. 43?', answer: 'It commences when a reasonable apprehension of danger to the property arises, and continues until the offender has retreated, the property has been recovered, or public assistance is obtained (subject to the detailed statutory rules).', explanation: 'Short note.' },
    { id: 's-43-sub', draftingCategory: 'submissions', question: 'Submissions on s. 43.', answer: 'I. When apprehension arose. II. When right ended (retreat/recovery/authorities). III. Force within that window. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 43', 'BNS s. 35', 'BNS s. 41', 'IPC s. 105 (historical)'],
  examTips: ['Pair with s. 41 when death is caused in defence of property.'],
  revisionPoints: ['Commences with apprehension of danger to property; ends on retreat / recovery / public assistance.'],
  relatedTopics: ['s-35', 's-41', 's-40', 's-34'],
}

export default content
