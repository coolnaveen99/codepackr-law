import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 105: punishment for culpable homicide not amounting to murder. Whoever commits culpable homicide not amounting to murder shall be punished in accordance with the statutory scale (imprisonment for life or imprisonment of either description for a term which may extend to the period stated, and fine — as per the current text). This is the correct section for CHNAM — not BNS 304 (which is snatching). IPC 304 → BNS 105.',
  study: `Section 105 is the punishment section for culpable homicide not amounting to murder.\n\nIt applies when:\n• Death is caused with the mental element of s. 100, but none of the murder clauses of s. 101 is made out; or\n• A murder clause is made out but an exception to s. 101 applies (provocation, private defence exceeded in good faith, sudden fight, etc.).\n\nThe punishment scale is as stated in the section (life or term imprisonment and fine). It is not an acquittal — the killing remains culpable.\n\nCritical number trap: BNS section 304 is snatching, not culpable homicide. Always cite s. 105 for CHNAM for offences on or after 1 July 2024.`,
  sections: [
    { id: 's-105-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 304. Punishment for the residual and excepted forms of culpable homicide.'] },
    { id: 's-105-m2', title: 'When it applies', order: 2, content: ['s. 100 mental element without a s. 101 murder clause; or s. 101 clause + exception.'] },
    { id: 's-105-m3', title: 'Ingredients for punishment', order: 3, content: ['Conviction for culpable homicide not amounting to murder; then apply the s. 105 scale.'] },
    { id: 's-105-m4', title: 'Evidence', order: 4, content: ['Same evidence path as for s. 100/101; the distinction is legal (which clause/exception).'] },
    { id: 's-105-m5', title: 'Procedure', order: 5, content: ['Court of Session; sentence under the s. 105 scale.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-105', section: 's. 105', title: 'Punishment for culpable homicide not amounting to murder' }],
  examples: [
    { id: 's-105-ex1', title: 'Exception to murder', illustrationType: 'practical', description: 'Death caused under grave and sudden provocation. Murder clause may be met, but the exception takes the case to s. 105.' },
    { id: 's-105-ex2', title: 'Number trap', illustrationType: 'fail-scenario', description: 'Do not write “punishable under s. 304 BNS” for CHNAM. That section is snatching. Correct cite: s. 105.' },
  ],
  hypotheticals: [{ id: 's-105-hypo', title: 'CHNAM sentence', facts: 'Conviction for culpable homicide not amounting to murder after a sudden-fight exception is accepted.', question: 'Which section governs punishment?', applicableLaw: 'BNS s. 105.', analysis: 's. 105 is the correct punishment section.', conclusion: 'Sentence under s. 105.' }],
  distinctions: [{ id: 's-105-dist', title: 's. 105 vs s. 103 vs s. 304', left: 's. 105 (CHNAM)', right: 's. 103 (murder) / s. 304 (snatching)', rows: [{ point: 'What it punishes', left: 'Culpable homicide not amounting to murder', right: 'Murder / Snatching (different offence)' }] }],
  misconceptions: [
    { id: 's-105-trap-1', trap: 'BNS 304 is the punishment for culpable homicide not amounting to murder.', correction: 'BNS 304 is snatching. CHNAM is punished under s. 105.' },
    { id: 's-105-trap-2', trap: 'An exception to s. 101 means acquittal.', correction: 'Exceptions drop the case to CHNAM under s. 105; they do not acquit.' },
  ],
  cases: [],
  questionsAndAnswers: [
    { id: 's-105-brief', draftingCategory: 'brief', question: 'What is the correct BNS section for punishment of culpable homicide not amounting to murder?', answer: 'Section 105. (BNS 304 is snatching, not CHNAM. Exceptions to s. 101 lead to s. 105, not acquittal.)', explanation: 'Short note.' },
    { id: 's-105-sub', draftingCategory: 'submissions', question: 'Submissions on sentence under s. 105.', answer: 'I. CHNAM established (exception or residual s. 100). II. s. 105 scale. III. Mitigating factors. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 105', 'BNS s. 100', 'BNS s. 101', 'BNS s. 103', 'BNS s. 304 (snatching — do not confuse)', 'IPC s. 304 (historical)'],
  examTips: ['Most important number trap in BNS homicide: 304 is snatching; CHNAM = 105.'],
  revisionPoints: ['CHNAM punishment = s. 105.', 'BNS 304 = snatching.', 'Exceptions to murder → s. 105, not acquittal.'],
  relatedTopics: ['s-100', 's-101', 's-103', 'culpable-homicide-murder', 's-304'],
}

export default content
