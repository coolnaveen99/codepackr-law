import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 20: nothing is an offence which is done by a child under seven years of age. Absolute doli incapax. Successor to IPC s. 82.',
  study: `Section 20 is the absolute immunity of a child under seven.\n\nRule: Nothing is an offence which is done by a child under seven years of age.\n\nThe immunity is conclusive. There is no enquiry into maturity or understanding. The only fact to be proved is that the child had not completed seven years on the date of the act.\n\nBurden: the party asserting the age (usually the defence, but sometimes the prosecution in child-offender contexts) must establish age. Age is proved by birth certificate, school record, medical opinion, etc.\n\nCite BNS s. 20 for post-1 July 2024 acts. The uniform “child” definition in s. 2(3) (below 18) is separate; s. 20 is the criminal-capacity rule for under-sevens.`,
  sections: [
    { id: 's-20-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 82. Absolute incapacity of children under seven.'] },
    { id: 's-20-m2', title: 'Text', order: 2, content: ['Nothing is an offence which is done by a child under seven years of age.'] },
    { id: 's-20-m3', title: 'Ingredients', order: 3, content: ['The actor was under seven years of age at the time of the act.'] },
    { id: 's-20-m4', title: 'Evidence', order: 4, content: ['Age proved by documentary or medical evidence. Once under-seven is established, the exception is absolute.'] },
    { id: 's-20-m5', title: 'Procedure', order: 5, content: ['Raised as a complete bar to criminal liability. Juvenile-justice procedures may still apply for care and protection, but no offence is constituted.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-20', section: 's. 20', title: 'Act of a child under seven years of age' }],
  examples: [
    { id: 's-20-ex1', title: 'Absolute immunity', illustrationType: 'practical', description: 'A six-year-old causes the death of another child while playing with a sharp object. No offence is committed by reason of s. 20.' },
    { id: 's-20-ex2', title: 'Age boundary', illustrationType: 'fail-scenario', description: 'If the child has completed seven years, s. 20 does not apply; the qualified immunity under s. 21 (7–12) must be examined.' },
  ],
  hypotheticals: [{ id: 's-20-hypo', title: 'Age under seven', facts: 'Accused is stated to be 6 years 11 months on the date of the act.', question: 'Is any offence constituted?', applicableLaw: 'BNS s. 20.', analysis: 'If age under seven is proved, s. 20 affords absolute immunity.', conclusion: 'No offence.' }],
  distinctions: [{ id: 's-20-dist', title: 's. 20 vs s. 21', left: 's. 20 (under 7)', right: 's. 21 (7 to under 12)', rows: [{ point: 'Immunity', left: 'Absolute', right: 'Qualified — depends on maturity of understanding' }] }],
  misconceptions: [{ id: 's-20-trap', trap: 'Even a child under seven can be convicted if the act shows understanding.', correction: 'No. Immunity under s. 20 is absolute; maturity is irrelevant.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-20-brief', draftingCategory: 'brief', question: 'State the rule in BNS s. 20.', answer: 'Nothing is an offence which is done by a child under seven years of age. The immunity is absolute.', explanation: 'One-line rule.' },
    { id: 's-20-sub', draftingCategory: 'submissions', question: 'Submissions on doli incapax under s. 20.', answer: 'I. Age under seven proved. II. Absolute immunity. III. Prayer for discharge / acquittal.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 20', 'BNS s. 21', 'IPC s. 82 (historical)'],
  examTips: ['State “absolute” immunity for under-sevens.', 'Contrast with the qualified rule for 7–12 in s. 21.'],
  revisionPoints: ['Under 7 = absolute doli incapax.', 'No enquiry into understanding.'],
  relatedTopics: ['s-21', 's-2', 'general-exceptions'],
}

export default content
