import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 26: nothing is an offence by reason of any harm done in good faith, without criminal intent, for the benefit of the person who suffers it, with that person’s consent (above 18), even if death or grievous hurt is intended or known to be likely (subject to limits). Successor to IPC s. 88.',
  study: `Section 26 extends consent protection to beneficial acts done in good faith even where death or grievous hurt is intended or known to be likely (e.g., surgical operations).\n\nRule: Nothing is an offence by reason of any harm which may be done in good faith, without criminal intent, for the benefit of a person above 18 who suffers the harm, with that person’s consent (express or implied), whether or not death or grievous hurt is intended or known to be likely.\n\nClassic use: surgery and medical procedures performed with informed consent. Cite BNS s. 26 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-26-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 88. Protects good-faith beneficial acts with adult consent.'] },
    { id: 's-26-m2', title: 'Text', order: 2, content: ['Harm in good faith; without criminal intent; for benefit of adult sufferer; with consent; even if death/GH intended or known likely.'] },
    { id: 's-26-m3', title: 'Ingredients', order: 3, content: ['Good faith; no criminal intent; benefit of the sufferer; sufferer above 18; consent.'] },
    { id: 's-26-m4', title: 'Evidence', order: 4, content: ['Consent, age, good faith, and beneficial purpose.'] },
    { id: 's-26-m5', title: 'Procedure', order: 5, content: ['Raised as a defence, especially in medical cases.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-26', section: 's. 26', title: 'Act not intended to cause death, done by consent in good faith for person\'s benefit' }],
  examples: [
    { id: 's-26-ex1', title: 'Surgery with consent', illustrationType: 'practical', description: 'A surgeon operates with the adult patient’s informed consent for the patient’s benefit. Even if death is a known risk, s. 26 may protect.' },
    { id: 's-26-ex2', title: 'No consent / bad faith', illustrationType: 'fail-scenario', description: 'A procedure performed without consent or for an ulterior purpose is not protected by s. 26.' },
  ],
  hypotheticals: [{ id: 's-26-hypo', title: 'Medical consent', facts: 'Adult consents to high-risk surgery; death results despite care.', question: 'Is s. 26 available?', applicableLaw: 'BNS s. 26.', analysis: 'If good faith, no criminal intent, benefit, adult consent — yes.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-26-trap', trap: 'Any medical act is protected under s. 26.', correction: 'Requires good faith, no criminal intent, benefit of the patient, and valid adult consent.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-26-brief', draftingCategory: 'brief', question: 'Explain BNS s. 26.', answer: 'Nothing is an offence by reason of harm done in good faith, without criminal intent, for the benefit of an adult who consents, even if death or grievous hurt is intended or known to be likely.', explanation: 'Short note.' },
    { id: 's-26-sub', draftingCategory: 'submissions', question: 'Submissions on s. 26.', answer: 'I. Good faith and benefit. II. Adult consent. III. No criminal intent. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 26', 'BNS s. 25', 'BNS s. 27', 'IPC s. 88 (historical)'],
  examTips: ['Classic example is surgery with informed consent.'],
  revisionPoints: ['Good faith + benefit + adult consent → protected even if death/GH risked.'],
  relatedTopics: ['s-25', 's-27', 's-30', 'general-exceptions'],
}

export default content
