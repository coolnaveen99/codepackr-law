import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 45: a person abets the doing of a thing who instigates any person to do that thing, or engages in a conspiracy for the doing of that thing, or intentionally aids by act or illegal omission the doing of that thing. Successor to IPC s. 107. Three modes of abetment.',
  study: `Section 45 defines abetment.\n\nThree modes\n1. Instigation — goading, urging, or encouraging another to do the thing.\n2. Conspiracy — engaging with one or more persons in a conspiracy for the doing of that thing (if an act or illegal omission takes place in pursuance of the conspiracy).\n3. Intentional aid — by act or illegal omission, intentionally aiding the doing of that thing.\n\nExplanation clauses clarify that a person who, by wilful misrepresentation or concealment, voluntarily causes or procures a thing to be done is said to instigate; and that aiding includes facilitating.\n\nAbetment is complete even if the abetted act is not committed (subject to punishment sections). Cite BNS s. 45 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-45-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 107. Defines the three modes of abetment.'] },
    { id: 's-45-m2', title: 'Text — Three Modes', order: 2, content: ['Instigation; conspiracy (with act/omission in pursuance); intentional aid by act or illegal omission.'] },
    { id: 's-45-m3', title: 'Ingredients', order: 3, content: ['One of the three modes; the “thing” abetted (usually an offence).'] },
    { id: 's-45-m4', title: 'Evidence', order: 4, content: ['Words, conduct, agreement, and assistance proving instigation, conspiracy, or intentional aid.'] },
    { id: 's-45-m5', title: 'Procedure', order: 5, content: ['Punishment under ss. 49–50 and related sections; may be charged with the abetted offence when committed in consequence.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-45', section: 's. 45', title: 'Abetment of a thing' }],
  examples: [
    { id: 's-45-ex1', title: 'Instigation', illustrationType: 'practical', description: 'A urges B to set fire to a house. A has abetted by instigation under s. 45.' },
    { id: 's-45-ex2', title: 'Intentional aid', illustrationType: 'practical', description: 'A supplies the weapon knowing B will use it to commit an offence. A has abetted by intentional aid.' },
  ],
  hypotheticals: [{ id: 's-45-hypo', title: 'Mode of abetment', facts: 'A and B agree that B will commit theft; A provides the keys.', question: 'Has A abetted?', applicableLaw: 'BNS s. 45.', analysis: 'Yes — conspiracy and/or intentional aid.', conclusion: 'Abetment made out.' }],
  distinctions: [{ id: 's-45-dist', title: 'Abetment vs Common intention (s. 3(5))', left: 'Abetment (s. 45)', right: 'Common intention (s. 3(5))', rows: [{ point: 'Nature', left: 'Inchoate / secondary liability for instigating, conspiring, or aiding', right: 'Joint liability for a criminal act done in furtherance of shared intention' }] }],
  misconceptions: [{ id: 's-45-trap', trap: 'Abetment requires the abetted offence to be completed.', correction: 'Abetment is complete when the instigation, conspiracy (with act in pursuance), or intentional aid occurs; the abetted act need not succeed for abetment itself to exist (punishment may differ).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-45-brief', draftingCategory: 'brief', question: 'Define abetment under BNS s. 45.', answer: 'A person abets the doing of a thing who (1) instigates any person to do it, or (2) engages in a conspiracy for the doing of it (with an act or illegal omission in pursuance), or (3) intentionally aids by act or illegal omission the doing of it.', explanation: 'Short note.' },
    { id: 's-45-sub', draftingCategory: 'submissions', question: 'Submissions on abetment under s. 45.', answer: 'I. Mode (instigation / conspiracy / aid). II. Evidence. III. Relationship with the abetted offence. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 45', 'BNS ss. 46–50', 'IPC s. 107 (historical)'],
  examTips: ['Always identify which of the three modes is relied upon.', 'Distinguish from common intention (s. 3(5)).'],
  revisionPoints: ['Three modes: instigation, conspiracy, intentional aid.', 'Abetment can exist even if the abetted act is not completed.'],
  relatedTopics: ['s-46', 's-49', 's-3', 'doctrine-common-intention'],
}

export default content
