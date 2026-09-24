import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 62: punishment for criminal conspiracy. Where the object is an offence punishable with death, life, or rigorous imprisonment of two years or upwards, the conspirator is punished as if he had abetted the offence; in other cases, imprisonment up to the statutory term and/or fine (as in the text). Successor to IPC s. 120B.',
  study: `Section 62 provides the punishment for criminal conspiracy.\n\nBroad scheme\n• If the conspiracy is to commit an offence punishable with death, imprisonment for life, or rigorous imprisonment for two years or upwards — the conspirator is punished in the same manner as if he had abetted such offence.\n• In any other case — imprisonment of either description for a term which may extend to the period stated in the section, or fine, or both.\n\nThe section works with s. 61 (definition). Cite BNS s. 62 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-62-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 120B. Punishment keyed to the seriousness of the object offence.'] },
    { id: 's-62-m2', title: 'Text', order: 2, content: ['Serious object offences → punished as for abetment of that offence; other cases → limited term and/or fine.'] },
    { id: 's-62-m3', title: 'Ingredients', order: 3, content: ['Criminal conspiracy under s. 61; identification of the object offence for the punishment scale.'] },
    { id: 's-62-m4', title: 'Evidence', order: 4, content: ['Proof of the conspiracy and of the nature of the agreed object.'] },
    { id: 's-62-m5', title: 'Procedure', order: 5, content: ['Charge under s. 61/62; may be joined with the object offence if committed.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-62', section: 's. 62', title: 'Punishment of criminal conspiracy' }],
  examples: [
    { id: 's-62-ex1', title: 'Conspiracy to commit serious offence', illustrationType: 'practical', description: 'Conspiracy to commit murder. Each conspirator is punished as if he had abetted murder.' },
    { id: 's-62-ex2', title: 'Lesser object', illustrationType: 'practical', description: 'Conspiracy to commit a minor offence not within the higher threshold. Punishment is under the residual limb of s. 62.' },
  ],
  hypotheticals: [{ id: 's-62-hypo', title: 'Punishment scale', facts: 'Conspiracy to commit an offence punishable with life imprisonment.', question: 'How are the conspirators punished?', applicableLaw: 'BNS s. 62.', analysis: 'As if they had abetted that offence.', conclusion: 'Abetment-level punishment for the object offence.' }],
  distinctions: [],
  misconceptions: [{ id: 's-62-trap', trap: 'Conspiracy is always punished more lightly than the object offence.', correction: 'For serious object offences, s. 62 punishes the conspirator as if he had abetted the offence — often the same level as the completed offence’s abetment.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-62-brief', draftingCategory: 'brief', question: 'Explain the punishment for criminal conspiracy under BNS s. 62.', answer: 'If the conspiracy is to commit an offence punishable with death, life, or RI of two years or upwards, the conspirator is punished as if he had abetted such offence. In other cases, a limited term of imprisonment and/or fine applies.', explanation: 'Short note.' },
    { id: 's-62-sub', draftingCategory: 'submissions', question: 'Submissions on s. 62.', answer: 'I. Conspiracy under s. 61. II. Nature of the object offence. III. Applicable punishment limb. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 62', 'BNS s. 61', 'BNS s. 49', 'IPC s. 120B (historical)'],
  examTips: ['Link the punishment to the seriousness of the object offence.'],
  revisionPoints: ['Serious object → punished as for abetment of that offence.', 'Lesser object → residual imprisonment/fine.'],
  relatedTopics: ['s-61', 's-45', 's-49'],
}

export default content
