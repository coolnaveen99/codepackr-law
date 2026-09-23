import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 31: no communication made in good faith is an offence by reason of any harm to the person to whom it is made, if it is made for the benefit of that person. Successor to IPC s. 93.',
  study: `Section 31 protects good-faith communications made for the benefit of the recipient.\n\nRule: No communication made in good faith is an offence by reason of any harm to the person to whom it is made, if it is made for the benefit of that person.\n\nClassic illustration: a surgeon honestly telling a patient that he is likely to die, in order that the patient may settle his affairs — even if the communication causes distress. Cite BNS s. 31 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-31-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 93. Good-faith beneficial communication.'] },
    { id: 's-31-m2', title: 'Text', order: 2, content: ['Communication in good faith; for the benefit of the person to whom it is made; no offence by reason of harm caused by that communication.'] },
    { id: 's-31-m3', title: 'Ingredients', order: 3, content: ['Communication; good faith; benefit of the recipient.'] },
    { id: 's-31-m4', title: 'Evidence', order: 4, content: ['Content and purpose of the communication; good faith.'] },
    { id: 's-31-m5', title: 'Procedure', order: 5, content: ['Raised when a communication is alleged to constitute an offence (e.g. by causing distress or alarm).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-31', section: 's. 31', title: 'Communication made in good faith' }],
  examples: [
    { id: 's-31-ex1', title: 'Honest medical communication', illustrationType: 'practical', description: 'A doctor truthfully informs a patient of a terminal diagnosis so the patient can arrange his affairs. The communication is protected by s. 31.' },
    { id: 's-31-ex2', title: 'Malicious communication', illustrationType: 'fail-scenario', description: 'A false and malicious statement made to cause distress is not protected by s. 31.' },
  ],
  hypotheticals: [{ id: 's-31-hypo', title: 'Beneficial communication', facts: 'Honest warning given for the recipient’s benefit causes distress.', question: 'Is an offence constituted by the communication?', applicableLaw: 'BNS s. 31.', analysis: 'If made in good faith for the recipient’s benefit — no offence by reason of that harm.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-31-trap', trap: 'Any true statement is protected under s. 31.', correction: 'It must be made in good faith and for the benefit of the person to whom it is made.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-31-brief', draftingCategory: 'brief', question: 'Explain BNS s. 31.', answer: 'No communication made in good faith is an offence by reason of any harm to the person to whom it is made, if it is made for that person’s benefit.', explanation: 'Short note.' },
    { id: 's-31-sub', draftingCategory: 'submissions', question: 'Submissions on s. 31.', answer: 'I. Good faith. II. Benefit of recipient. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 31', 'IPC s. 93 (historical)'],
  examTips: ['Classic illustration is the surgeon’s honest prognosis.'],
  revisionPoints: ['Good-faith communication for the recipient’s benefit → no offence by reason of resulting harm.'],
  relatedTopics: ['s-26', 's-30', 'general-exceptions'],
}

export default content
