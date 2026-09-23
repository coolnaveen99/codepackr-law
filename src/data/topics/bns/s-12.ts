import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 12 fixes the internal limits on the duration of solitary confinement according to the length of the rigorous-imprisonment sentence. Successor to IPC s. 74.',
  study: `Section 12 scales the permissible period of solitary confinement to the length of the rigorous sentence:\n\n• Sentence not exceeding six months → solitary not exceeding one month.\n• Sentence exceeding six months but not exceeding one year → solitary not exceeding two months.\n• Sentence exceeding one year → solitary not exceeding three months.\n\nIn addition, solitary confinement may not be awarded for more than fourteen days at a time, with intervals of not less duration than such periods between the periods of solitary confinement.\n\nTogether with s. 11, this forms the complete statutory regime for solitary confinement. Cite BNS s. 12 for post-1 July 2024 offences.`,
  sections: [
    { id: 's-12-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 74. Objective: prevent excessive or continuous solitary confinement.'] },
    { id: 's-12-m2', title: 'Textual Scale', order: 2, content: ['≤6 months RI → ≤1 month solitary; >6 months–1 year RI → ≤2 months; >1 year RI → ≤3 months; plus 14-day continuous limit with equal intervals.'] },
    { id: 's-12-m3', title: 'Ingredients', order: 3, content: ['Order under s. 11; compliance with the scale and the 14-day/interval rule in s. 12.'] },
    { id: 's-12-m4', title: 'Evidence', order: 4, content: ['No separate evidentiary issue; the limits are applied as a matter of law to the sentence passed.'] },
    { id: 's-12-m5', title: 'Procedure', order: 5, content: ['Prison authorities must implement the order within these statutory ceilings.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-12', section: 's. 12', title: 'Limit of solitary confinement' }],
  examples: [
    { id: 's-12-ex1', title: 'Scale applied', illustrationType: 'practical', description: 'A two-year rigorous sentence may carry up to three months’ solitary confinement, broken into periods of not more than 14 days with equal intervals.' },
    { id: 's-12-ex2', title: 'Breach of interval rule', illustrationType: 'fail-scenario', description: 'Continuous solitary for 30 days without the required intervals violates s. 12 even if the total is within the three-month ceiling.' },
  ],
  hypotheticals: [{ id: 's-12-hypo', title: 'Limits', facts: 'Nine-month rigorous sentence; court orders solitary.', question: 'What is the maximum solitary period?', applicableLaw: 'BNS s. 12.', analysis: 'Sentence exceeds six months but not one year → maximum two months solitary, subject to 14-day continuous limit and intervals.', conclusion: 'Not more than two months in total, properly broken up.' }],
  distinctions: [],
  misconceptions: [{ id: 's-12-trap', trap: 'The three-month ceiling in s. 11 is the only limit.', correction: 'Section 12 imposes tighter ceilings according to the length of the rigorous sentence and forbids continuous periods longer than 14 days without equal intervals.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-12-brief', draftingCategory: 'brief', question: 'State the limits on solitary confinement under BNS s. 12.', answer: 'Solitary is scaled to the length of the rigorous sentence (1 / 2 / 3 months) and may not exceed 14 days at a time without equal intervals.', explanation: 'Short note.' },
    { id: 's-12-sub', draftingCategory: 'submissions', question: 'Submissions on s. 12 limits.', answer: 'I. Scale. II. 14-day rule. III. Prayer for compliance / reduction.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 12', 'BNS s. 11', 'IPC s. 74 (historical)'],
  examTips: ['Always state both the overall ceiling and the 14-day continuous limit.'],
  revisionPoints: ['Scale: 1 / 2 / 3 months according to RI length.', 'Max 14 days continuous with equal intervals.'],
  relatedTopics: ['s-11', 's-4'],
}

export default content
