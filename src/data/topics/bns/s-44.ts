import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 44: if in the exercise of the right of private defence against an assault which reasonably causes apprehension of death, the defender causes harm to an innocent person, he is not guilty of an offence if he exercises his right with due care and without more harm than necessary. Successor to IPC s. 106.',
  study: `Section 44 deals with harm to an innocent third person during private defence against a deadly assault.\n\nRule: If, in the exercise of the right of private defence against an assault which reasonably causes the apprehension of death, the defender be so situated that he cannot effectively exercise that right without risk of harm to an innocent person, his right of private defence extends to the running of that risk; and he is not guilty of an offence if he exercises the right with due care and without more harm than is necessary.\n\nKey points: the original assault must reasonably cause apprehension of death; due care; no more harm than necessary. Cite BNS s. 44 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-44-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 106. Protects defender who unavoidably risks harm to an innocent person while defending against a deadly assault.'] },
    { id: 's-44-m2', title: 'Text', order: 2, content: ['Assault causing reasonable apprehension of death; cannot effectively defend without risk to innocent; due care; no more harm than necessary.'] },
    { id: 's-44-m3', title: 'Ingredients', order: 3, content: ['(1) Right of private defence against assault with reasonable apprehension of death. (2) Situation where defence cannot be effective without risk to innocent. (3) Due care. (4) No excess harm.'] },
    { id: 's-44-m4', title: 'Evidence', order: 4, content: ['Nature of the original assault; necessity of the risk; care taken.'] },
    { id: 's-44-m5', title: 'Procedure', order: 5, content: ['Raised when an innocent bystander is harmed during private defence.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-44', section: 's. 44', title: 'Right of private defence against deadly assault when there is risk of harm to innocent person' }],
  examples: [
    { id: 's-44-ex1', title: 'Unavoidable risk to bystander', illustrationType: 'practical', description: 'A is attacked with a deadly weapon in a crowded place. In defending himself with due care he unavoidably injures a bystander. s. 44 may protect.' },
    { id: 's-44-ex2', title: 'Reckless harm to innocent', illustrationType: 'fail-scenario', description: 'A, while defending, fires wildly into a crowd without due care. s. 44 does not protect the excess/reckless harm.' },
  ],
  hypotheticals: [{ id: 's-44-hypo', title: 'Bystander injury', facts: 'Deadly assault; defender’s necessary response injures a bystander despite care.', question: 'Is the defender guilty of an offence against the bystander?', applicableLaw: 'BNS s. 44.', analysis: 'If the original assault caused reasonable apprehension of death, the risk to the innocent was unavoidable, and due care was used without excess, no offence.', conclusion: 'Protected under s. 44.' }],
  distinctions: [],
  misconceptions: [{ id: 's-44-trap', trap: 'Any injury to a bystander during a fight is protected by s. 44.', correction: 'Only when the original assault reasonably caused apprehension of death, the risk was unavoidable for effective defence, and due care without excess was used.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-44-brief', draftingCategory: 'brief', question: 'Explain BNS s. 44.', answer: 'If in exercising private defence against an assault that reasonably causes apprehension of death the defender cannot effectively defend without risk of harm to an innocent person, he is not guilty of an offence if he acts with due care and without more harm than necessary.', explanation: 'Short note.' },
    { id: 's-44-sub', draftingCategory: 'submissions', question: 'Submissions on s. 44.', answer: 'I. Deadly assault / apprehension of death. II. Unavoidable risk to innocent. III. Due care / no excess. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 44', 'BNS s. 34', 'BNS s. 38', 'IPC s. 106 (historical)'],
  examTips: ['Require apprehension of death from the original assault and due care toward the innocent person.'],
  revisionPoints: ['Deadly assault + unavoidable risk to innocent + due care + no excess → no offence.'],
  relatedTopics: ['s-34', 's-38', 's-40', 'general-exceptions'],
}

export default content
