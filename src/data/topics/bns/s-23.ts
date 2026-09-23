import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 23: nothing is an offence which is done by a person who, at the time of doing it, is incapable of knowing the nature of the act or that he is doing what is wrong or contrary to law, by reason of intoxication caused against his will. Successor to IPC s. 85. Involuntary intoxication only.',
  study: `Section 23 protects the involuntarily intoxicated person who lacks the relevant cognitive capacity.\n\nRule: Nothing is an offence which is done by a person who, at the time of doing it, is, by reason of intoxication, incapable of knowing the nature of the act or that he is doing what is either wrong or contrary to law, provided that the thing which intoxicated him was administered to him without his knowledge or against his will.\n\nKey points: the intoxication must be involuntary (without knowledge or against will); the cognitive incapacity test mirrors the insanity test; voluntary intoxication is dealt with under s. 24 (and generally does not excuse). Cite BNS s. 23 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-23-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 85. Protects only involuntary intoxication that produces cognitive incapacity.'] },
    { id: 's-23-m2', title: 'Text', order: 2, content: ['Intoxication against will / without knowledge; incapacity to know nature of act or that it is wrong/contrary to law.'] },
    { id: 's-23-m3', title: 'Ingredients', order: 3, content: ['(1) Intoxication without knowledge or against will. (2) At the time of the act, incapacity to know nature or wrongfulness.'] },
    { id: 's-23-m4', title: 'Evidence', order: 4, content: ['Burden on accused on preponderance. Evidence of how the intoxicant was administered and of cognitive state is required.'] },
    { id: 's-23-m5', title: 'Procedure', order: 5, content: ['Complete defence if both limbs are proved. Voluntary intoxication does not attract s. 23.'],
    },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-23', section: 's. 23', title: 'Act of a person incapable of judgment by reason of intoxication caused against his will' }],
  examples: [
    { id: 's-23-ex1', title: 'Involuntary intoxication', illustrationType: 'practical', description: 'A’s drink is spiked without his knowledge. He becomes incapable of knowing the nature of his subsequent act. s. 23 may protect.' },
    { id: 's-23-ex2', title: 'Voluntary intoxication', illustrationType: 'fail-scenario', description: 'A drinks heavily of his own will and then commits an offence. s. 23 does not apply; s. 24 may still be relevant for intent-based offences.' },
  ],
  hypotheticals: [{ id: 's-23-hypo', title: 'Spiked drink', facts: 'Accused’s beverage was laced without his knowledge; he later commits an act he cannot understand.', question: 'Is s. 23 available?', applicableLaw: 'BNS s. 23.', analysis: 'If involuntary administration and cognitive incapacity are proved, yes.', conclusion: 'Protected.' }],
  distinctions: [{ id: 's-23-dist', title: 's. 23 vs s. 24', left: 's. 23 (involuntary)', right: 's. 24 (voluntary / intent offences)', rows: [{ point: 'Effect', left: 'Complete defence if incapacity proved', right: 'Knowledge/intent presumed unless contrary proved; does not fully excuse' }] }],
  misconceptions: [{ id: 's-23-trap', trap: 'Any intoxication is a defence under s. 23.', correction: 'Only intoxication caused without knowledge or against the will of the accused, and only if it produces the specified cognitive incapacity.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-23-brief', draftingCategory: 'brief', question: 'Explain BNS s. 23.', answer: 'Nothing is an offence done by a person who, by reason of intoxication administered without his knowledge or against his will, is incapable of knowing the nature of the act or that it is wrong or contrary to law.', explanation: 'Short note.' },
    { id: 's-23-sub', draftingCategory: 'submissions', question: 'Submissions on s. 23.', answer: 'I. Involuntary intoxication. II. Cognitive incapacity. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 23', 'BNS s. 24', 'IPC s. 85 (historical)'],
  examTips: ['Stress “against his will / without knowledge”.', 'Contrast with voluntary intoxication under s. 24.'],
  revisionPoints: ['Involuntary intoxication + cognitive incapacity = no offence.', 'Voluntary intoxication is not under s. 23.'],
  relatedTopics: ['s-22', 's-24', 'general-exceptions'],
}

export default content
