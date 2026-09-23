import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 21: nothing is an offence which is done by a child above seven and under twelve years of age, who has not attained sufficient maturity of understanding to judge the nature and consequences of his conduct on that occasion. Qualified doli incapax. Successor to IPC s. 83.',
  study: `Section 21 is the qualified immunity of children between seven and twelve.\n\nRule: Nothing is an offence which is done by a child above seven years of age and under twelve, who has not attained sufficient maturity of understanding to judge of the nature and consequences of his conduct on that occasion.\n\nTwo facts must be established:\n1. Age is above 7 and under 12.\n2. The child had not attained sufficient maturity of understanding on that occasion.\n\nThe burden of proving the lack of maturity is on the defence (BSA s. 108). Courts examine the nature of the act, the child’s conduct before and after, and any evidence of understanding.\n\nCite BNS s. 21 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-21-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 83. Qualified capacity between 7 and 12.'] },
    { id: 's-21-m2', title: 'Text', order: 2, content: ['Child above 7 and under 12 who has not attained sufficient maturity of understanding of the nature and consequences of the conduct on that occasion.'] },
    { id: 's-21-m3', title: 'Ingredients', order: 3, content: ['Age 7–under 12; lack of sufficient maturity of understanding on the occasion.'] },
    { id: 's-21-m4', title: 'Evidence', order: 4, content: ['Age + evidence of (im)maturity: nature of act, statements, conduct. Burden on accused on preponderance.'] },
    { id: 's-21-m5', title: 'Procedure', order: 5, content: ['Raised as a defence. If maturity is found, the child may still be dealt with under juvenile-justice law rather than ordinary criminal trial, depending on age and statute.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-21', section: 's. 21', title: 'Act of a child above seven and under twelve of immature understanding' }],
  examples: [
    { id: 's-21-ex1', title: 'Immature understanding', illustrationType: 'practical', description: 'A 9-year-old takes a valuable object without any apparent understanding that it belongs to another and that taking it is wrong. s. 21 may protect.' },
    { id: 's-21-ex2', title: 'Mature understanding', illustrationType: 'fail-scenario', description: 'A 11-year-old carefully plans a theft, hides the proceeds and lies about it. Maturity of understanding is likely to be found; s. 21 fails.' },
  ],
  hypotheticals: [{ id: 's-21-hypo', title: 'Maturity enquiry', facts: 'Accused is 10 years old; the act is a deliberate stabbing after a quarrel.', question: 'Does s. 21 apply?', applicableLaw: 'BNS s. 21.', analysis: 'Age is within range. The deliberate nature of the act is strong evidence of sufficient understanding. Defence must still prove lack of maturity on the balance of probabilities.', conclusion: 'Likely that maturity is found and the exception fails; final decision is fact-specific.' }],
  distinctions: [{ id: 's-21-dist', title: 's. 20 vs s. 21', left: 'Under 7 (s. 20)', right: '7 to under 12 (s. 21)', rows: [{ point: 'Test', left: 'Age alone', right: 'Age + lack of maturity of understanding' }] }],
  misconceptions: [{ id: 's-21-trap', trap: 'Every child under 12 is immune.', correction: 'Only those under 7 (absolute) or those 7–under 12 who lack sufficient maturity (qualified).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-21-brief', draftingCategory: 'brief', question: 'Explain the qualified doli incapax rule in BNS s. 21.', answer: 'A child above 7 and under 12 who has not attained sufficient maturity of understanding of the nature and consequences of the conduct on that occasion commits no offence. Burden on the defence.', explanation: 'Short note.' },
    { id: 's-21-sub', draftingCategory: 'submissions', question: 'Submissions on s. 21.', answer: 'I. Age 7–under 12. II. Lack of maturity proved. III. BSA s. 108 burden. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 21', 'BNS s. 20', 'BSA s. 108', 'IPC s. 83 (historical)'],
  examTips: ['State both age band and maturity test.', 'Mention burden on the accused.'],
  revisionPoints: ['7–under 12 + lack of maturity = no offence.', 'Burden on defence.'],
  relatedTopics: ['s-20', 's-22', 'general-exceptions'],
}

export default content
