import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 337 (and related): forgery of valuable security, will, etc. — aggravated forgery when the false document is a valuable security, will, authority to adopt, or other specified instrument. Higher punishment than simple forgery. Successor to IPC s. 467. Often charged with using as genuine and cheating.',
  study: `Aggravated forgery under the BNS:\n\nWhoever forges a document which purports to be a valuable security or a will, or an authority to adopt a son, or any other specified instrument of high legal consequence, is punished more severely than for simple forgery.\n\nKey points\n• Base forgery ingredients (false document + dishonest intent) must be met.\n• The document must be of the aggravated class (valuable security, will, etc.).\n• Using such a forged document as genuine is a related serious offence.\n\nCite the applicable BNS sections for post-1 July 2024 acts.`,
  sections: [
    { id: 's-337-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 467. Aggravated forgery of valuable security, will, etc.'] },
    { id: 's-337-m2', title: 'Aggravating Instruments', order: 2, content: ['Valuable security; will; authority to adopt; other instruments specified in the text.'] },
    { id: 's-337-m3', title: 'Ingredients', order: 3, content: ['(1) Forgery as defined. (2) Document is of the aggravated class.'] },
    { id: 's-337-m4', title: 'Evidence', order: 4, content: ['Nature of the instrument; falsity; authorship; intent; use.'] },
    { id: 's-337-m5', title: 'Procedure', order: 5, content: ['Serious offence; often joined with using as genuine and cheating; Sessions trial as applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-337', section: 's. 337', title: 'Forgery of valuable security, will, etc.' }],
  examples: [
    { id: 's-337-ex1', title: 'Forged will', illustrationType: 'practical', description: 'A fabricates a will to claim property. Aggravated forgery is made out.' },
    { id: 's-337-ex2', title: 'Ordinary false letter', illustrationType: 'fail-scenario', description: 'A forges an ordinary letter without it being a valuable security or will. Simple forgery may apply; the aggravated section does not.' },
  ],
  hypotheticals: [{ id: 's-337-hypo', title: 'Valuable security', facts: 'Accused forges a promissory note to obtain money.', question: 'Aggravated forgery?', applicableLaw: 'BNS aggravated-forgery provisions.', analysis: 'Promissory note is typically a valuable security — yes if forgery ingredients are met.', conclusion: 'Aggravated section attracted.' }],
  distinctions: [],
  misconceptions: [{ id: 's-337-trap', trap: 'Every forgery is punishable under the valuable-security section.', correction: 'Only when the forged document is of the specified aggravated class (valuable security, will, etc.).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-337-brief', draftingCategory: 'brief', question: 'When does aggravated forgery of valuable security/will apply under the BNS?', answer: 'When the forged document purports to be a valuable security, will, authority to adopt, or other instrument specified in the section. Base forgery ingredients must still be proved; the class of instrument elevates the punishment.', explanation: 'Short note.' },
    { id: 's-337-sub', draftingCategory: 'submissions', question: 'Submissions on aggravated forgery.', answer: 'I. Forgery ingredients. II. Document of aggravated class. III. Intent and use. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS aggravated-forgery provisions', 'BNS s. 336', 'BNS using forged document as genuine', 'IPC s. 467 (historical)'],
  examTips: ['Identify whether the instrument is a valuable security or will.', 'Pair with using as genuine and cheating when on the facts.'],
  revisionPoints: ['Aggravated when document is valuable security, will, etc.', 'Base forgery ingredients still required.', 'Higher punishment than simple forgery.'],
  relatedTopics: ['s-336', 's-318', 's-230'],
}

export default content
