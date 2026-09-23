import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 47: a person abets an offence who, in India, abets the commission of an act outside India which would constitute an offence if committed in India. Successor to IPC s. 108A. Extra-territorial abetment from India.',
  study: `Section 47 extends abetment liability to abetment in India of acts outside India.\n\nRule: A person abets an offence who, in India, abets the commission of any act without and beyond India which would constitute an offence if committed in India.\n\nEffect: instigating, conspiring for, or aiding from India an act that would be an offence if done in India is itself abetment, even though the act occurs abroad. Cite BNS s. 47 for post-1 July 2024 acts. Read with s. 1 (extra-territorial application).`,
  sections: [
    { id: 's-47-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 108A. Abetment in India of extra-territorial acts.'] },
    { id: 's-47-m2', title: 'Text', order: 2, content: ['Abetment in India of an act outside India that would be an offence if committed in India.'] },
    { id: 's-47-m3', title: 'Ingredients', order: 3, content: ['(1) Abetment occurs in India. (2) The abetted act is outside India. (3) The act would be an offence if done in India.'] },
    { id: 's-47-m4', title: 'Evidence', order: 4, content: ['Place of abetment; nature of the foreign act; would-be-offence-in-India test.'] },
    { id: 's-47-m5', title: 'Procedure', order: 5, content: ['Indian courts have jurisdiction over the abetment committed in India.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-47', section: 's. 47', title: 'Abetment in India of offences outside India' }],
  examples: [
    { id: 's-47-ex1', title: 'Abetment from India of foreign offence', illustrationType: 'practical', description: 'A in Mumbai instigates B to commit murder in a foreign country. A has abetted under s. 47; the act would be murder if committed in India.' },
    { id: 's-47-ex2', title: 'Act not an offence if done in India', illustrationType: 'fail-scenario', description: 'If the foreign act would not be an offence under Indian law, s. 47 does not apply.' },
  ],
  hypotheticals: [{ id: 's-47-hypo', title: 'Cross-border abetment', facts: 'Instigation from India of an act abroad that would be an offence in India.', question: 'Is s. 47 attracted?', applicableLaw: 'BNS s. 47; s. 1.', analysis: 'Yes — abetment in India of an act that would be an offence if done in India.', conclusion: 'Abetment under s. 47.' }],
  distinctions: [],
  misconceptions: [{ id: 's-47-trap', trap: 'Indian law cannot touch abetment of acts outside India.', correction: 's. 47 expressly covers abetment in India of acts outside India that would be offences if committed in India.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-47-brief', draftingCategory: 'brief', question: 'Explain BNS s. 47.', answer: 'A person abets an offence who, in India, abets the commission of any act outside India which would constitute an offence if committed in India.', explanation: 'Short note.' },
    { id: 's-47-sub', draftingCategory: 'submissions', question: 'Submissions on s. 47.', answer: 'I. Abetment in India. II. Act outside India. III. Would-be offence in India. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 47', 'BNS s. 1', 'BNS s. 45', 'IPC s. 108A (historical)'],
  examTips: ['Pair with s. 1 extra-territorial application.'],
  revisionPoints: ['Abetment in India of an act abroad that would be an offence in India = abetment under s. 47.'],
  relatedTopics: ['s-1', 's-45', 's-48'],
}

export default content
