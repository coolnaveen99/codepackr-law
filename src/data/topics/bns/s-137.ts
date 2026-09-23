import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 137 (and related): wrongful restraint and wrongful confinement. Wrongful restraint — voluntarily obstructing a person so as to prevent that person from proceeding in any direction in which that person has a right to proceed. Wrongful confinement — wrongfully restraining a person so as to prevent that person from proceeding beyond certain circumscribing limits. Successor to IPC ss. 339–342.',
  study: `Wrongful restraint and wrongful confinement under the BNS:\n\nWrongful restraint: voluntarily obstructing any person so as to prevent that person from proceeding in any direction in which that person has a right to proceed.\n\nWrongful confinement: wrongfully restraining any person in such a manner as to prevent that person from proceeding beyond certain circumscribing limits.\n\nKey points\n• Restraint is the genus; confinement is a species (restraint within limits).\n• The person must have a right to proceed in that direction / beyond those limits.\n• Voluntarily = intention or knowledge of likelihood.\n\nAggravated forms (confinement for three or more days, for ten or more days, secret confinement, etc.) carry higher punishment.\n\nCite the applicable BNS sections for post-1 July 2024 acts. Private defence and lawful authority (e.g. arrest) are important defences.`,
  sections: [
    { id: 's-137-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 339–342. Wrongful restraint and wrongful confinement.'] },
    { id: 's-137-m2', title: 'Definitions', order: 2, content: ['Restraint: obstructing from proceeding in a direction of right. Confinement: restraining within circumscribing limits.'] },
    { id: 's-137-m3', title: 'Ingredients', order: 3, content: ['(1) Obstruction/restraint. (2) Voluntary. (3) Prevention from proceeding in a direction of right / beyond limits. (4) No lawful justification.'] },
    { id: 's-137-m4', title: 'Evidence', order: 4, content: ['Nature of the obstruction; duration; right of the victim to proceed; intention/knowledge.'] },
    { id: 's-137-m5', title: 'Procedure', order: 5, content: ['Often bailable in simple forms; aggravated confinement more serious; forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-137', section: 's. 137', title: 'Wrongful restraint and wrongful confinement' }],
  examples: [
    { id: 's-137-ex1', title: 'Wrongful restraint', illustrationType: 'practical', description: 'A blocks a public path to prevent B from walking in a direction B has a right to go. Wrongful restraint is made out.' },
    { id: 's-137-ex2', title: 'Lawful arrest', illustrationType: 'fail-scenario', description: 'A police officer lawfully arrests B. The restraint is justified by law; wrongful restraint/confinement is not made out.' },
  ],
  hypotheticals: [{ id: 's-137-hypo', title: 'Restraint vs confinement', facts: 'Accused locks the victim in a room for several hours.', question: 'Restraint or confinement?', applicableLaw: 'BNS wrongful restraint / confinement provisions.', analysis: 'Prevention from proceeding beyond the limits of the room = wrongful confinement (a species of restraint).', conclusion: 'Wrongful confinement.' }],
  distinctions: [{ id: 's-137-dist', title: 'Restraint vs Confinement', left: 'Wrongful restraint', right: 'Wrongful confinement', rows: [{ point: 'Scope', left: 'Preventing from proceeding in a direction', right: 'Preventing from proceeding beyond circumscribing limits' }] }],
  misconceptions: [{ id: 's-137-trap', trap: 'Any obstruction is wrongful restraint.', correction: 'The person must have a right to proceed in that direction, and the obstruction must be voluntary and without lawful justification.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-137-brief', draftingCategory: 'brief', question: 'Distinguish wrongful restraint and wrongful confinement under the BNS.', answer: 'Wrongful restraint is voluntarily obstructing a person from proceeding in a direction in which that person has a right to proceed. Wrongful confinement is wrongfully restraining a person so as to prevent that person from proceeding beyond certain circumscribing limits. Confinement is a species of restraint.', explanation: 'Short note.' },
    { id: 's-137-sub', draftingCategory: 'submissions', question: 'Submissions on wrongful restraint/confinement.', answer: 'I. Obstruction/restraint. II. Right to proceed. III. Voluntary and without justification. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS wrongful restraint and confinement provisions', 'BNS s. 14', 'BNS s. 34', 'IPC ss. 339–342 (historical)'],
  examTips: ['State the genus-species relationship (restraint → confinement).', 'Always check lawful justification (arrest, private defence).'],
  revisionPoints: ['Restraint = obstructing direction of right.', 'Confinement = restraining within limits.', 'Lawful authority is a defence.'],
  relatedTopics: ['s-14', 's-34', 's-130', 's-140'],
}

export default content
