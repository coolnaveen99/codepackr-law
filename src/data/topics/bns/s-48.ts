import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 48: a person abets an offence who, without and beyond India, abets the commission of an act in India which would constitute an offence. Counterpart to s. 47. Extra-territorial abetment of Indian offences.',
  study: `Section 48 covers abetment from outside India of offences in India.\n\nRule: A person abets an offence who, without and beyond India, abets the commission of any act in India which would constitute an offence.\n\nEffect: a person abroad who instigates, conspires for, or aids an offence to be committed in India is an abettor. Jurisdiction and practical enforcement may involve extradition / mutual legal assistance, but the substantive liability is clear. Cite BNS s. 48 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-48-m1', title: 'Provenance', order: 1, content: ['Complements s. 47. Abetment outside India of acts in India.'] },
    { id: 's-48-m2', title: 'Text', order: 2, content: ['Abetment outside India of an act in India that constitutes an offence.'] },
    { id: 's-48-m3', title: 'Ingredients', order: 3, content: ['(1) Abetment occurs outside India. (2) The abetted act is in India. (3) The act constitutes an offence.'] },
    { id: 's-48-m4', title: 'Evidence', order: 4, content: ['Place of abetment; place and nature of the abetted act.'] },
    { id: 's-48-m5', title: 'Procedure', order: 5, content: ['Substantive liability under BNS; enforcement may require international cooperation.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-48', section: 's. 48', title: 'Abetment outside India for offence in India' }],
  examples: [
    { id: 's-48-ex1', title: 'Abetment from abroad', illustrationType: 'practical', description: 'A in a foreign country instigates B to commit an offence in India. A has abetted under s. 48.' },
    { id: 's-48-ex2', title: 'Act not in India', illustrationType: 'fail-scenario', description: 'If both the abetment and the act occur outside India, s. 48 does not apply (other heads under s. 1 may).' },
  ],
  hypotheticals: [{ id: 's-48-hypo', title: 'Foreign abettor', facts: 'Instigation from abroad of an offence in India.', question: 'Is s. 48 attracted?', applicableLaw: 'BNS s. 48.', analysis: 'Yes — abetment outside India of an act in India that is an offence.', conclusion: 'Abetment under s. 48.' }],
  distinctions: [{ id: 's-48-dist', title: 's. 47 vs s. 48', left: 's. 47', right: 's. 48', rows: [{ point: 'Place of abetment', left: 'In India', right: 'Outside India' }, { point: 'Place of abetted act', left: 'Outside India', right: 'In India' }] }],
  misconceptions: [{ id: 's-48-trap', trap: 'A person outside India cannot be an abettor under the BNS.', correction: 's. 48 expressly covers abetment outside India of an offence in India.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-48-brief', draftingCategory: 'brief', question: 'Explain BNS s. 48.', answer: 'A person abets an offence who, without and beyond India, abets the commission of any act in India which would constitute an offence.', explanation: 'Short note.' },
    { id: 's-48-sub', draftingCategory: 'submissions', question: 'Submissions on s. 48.', answer: 'I. Abetment outside India. II. Act in India that is an offence. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 48', 'BNS s. 47', 'BNS s. 1', 'BNS s. 45'],
  examTips: ['Contrast with s. 47 (direction of the cross-border abetment).'],
  revisionPoints: ['Abetment outside India of an offence in India = s. 48.'],
  relatedTopics: ['s-47', 's-1', 's-45'],
}

export default content
