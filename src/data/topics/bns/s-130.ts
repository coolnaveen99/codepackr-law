import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 130 (and related): criminal force — intentional use of force on a person without that person’s consent, in order to commit an offence, or intending/knowing it likely to cause injury, fear, or annoyance. Successor to IPC s. 350. Assault is the apprehension of criminal force (related section).',
  study: `Criminal force under the BNS:\n\nWhoever intentionally uses force to any person, without that person’s consent, in order to the committing of any offence, or intending to cause, or knowing it to be likely that he will cause by the use of such force, injury, fear or annoyance to the person to whom the force is used, is said to use criminal force to that other.\n\nForce is defined in the preceding definitional section (causing motion, change of motion, or cessation of motion to another, or to substance in contact, etc.).\n\nAssault is the making of any gesture or preparation intending or knowing it to be likely that such gesture/preparation will cause a person to apprehend that criminal force is about to be used.\n\nCite the applicable BNS sections for post-1 July 2024 cases. Aggravated forms (on public servant, woman, etc.) have higher punishments.`,
  sections: [
    { id: 's-130-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 349–352. Criminal force and assault.'] },
    { id: 's-130-m2', title: 'Criminal Force', order: 2, content: ['Intentional use of force without consent; to commit an offence, or intending/knowing likely injury, fear or annoyance.'] },
    { id: 's-130-m3', title: 'Assault', order: 3, content: ['Gesture or preparation causing apprehension that criminal force is about to be used.'] },
    { id: 's-130-m4', title: 'Evidence', order: 4, content: ['Use of force; absence of consent; intention/knowledge; for assault — apprehension.'] },
    { id: 's-130-m5', title: 'Procedure', order: 5, content: ['Often bailable/compoundable in simple forms per BNSS Schedule; aggravated forms more serious.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-130', section: 's. 130', title: 'Criminal force and assault' }],
  examples: [
    { id: 's-130-ex1', title: 'Criminal force', illustrationType: 'practical', description: 'A pushes B without consent intending to annoy B. Criminal force is made out.' },
    { id: 's-130-ex2', title: 'Assault without contact', illustrationType: 'practical', description: 'A raises a fist at B in a manner that causes B to apprehend immediate use of force. Assault is made out even without contact.' },
  ],
  hypotheticals: [{ id: 's-130-hypo', title: 'Force vs assault', facts: 'Accused makes a threatening gesture; no contact occurs.', question: 'Criminal force or assault?', applicableLaw: 'BNS criminal force / assault provisions.', analysis: 'Without actual use of force, it is assault (apprehension), not criminal force.', conclusion: 'Assault.' }],
  distinctions: [{ id: 's-130-dist', title: 'Criminal force vs Assault vs Hurt', left: 'Criminal force / Assault', right: 'Hurt (s. 115)', rows: [{ point: 'Result', left: 'Force used or apprehended; injury/fear/annoyance intended or known likely', right: 'Bodily pain, disease or infirmity actually caused' }] }],
  misconceptions: [{ id: 's-130-trap', trap: 'Assault requires physical contact.', correction: 'Assault is the apprehension of criminal force; contact is not required. Contact may make it criminal force or hurt.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-130-brief', draftingCategory: 'brief', question: 'Distinguish criminal force and assault under the BNS.', answer: 'Criminal force is the intentional use of force on a person without consent, to commit an offence or intending/knowing likely injury, fear or annoyance. Assault is a gesture or preparation causing apprehension that criminal force is about to be used (no contact required).', explanation: 'Short note.' },
    { id: 's-130-sub', draftingCategory: 'submissions', question: 'Submissions on criminal force/assault.', answer: 'I. Force or apprehension. II. Without consent. III. Intention/knowledge. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS criminal force and assault provisions', 'BNS s. 115', 'IPC ss. 349–352 (historical)'],
  examTips: ['Assault does not require contact; criminal force does.', 'Distinguish both from hurt.'],
  revisionPoints: ['Criminal force = intentional force without consent + offence/injury/fear/annoyance.', 'Assault = apprehension of criminal force.', 'No contact needed for assault.'],
  relatedTopics: ['s-115', 's-64', 's-34'],
}

export default content
