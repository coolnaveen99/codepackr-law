import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 25: nothing is an offence which is not intended to cause death or grievous hurt, and which is not known by the doer to be likely to cause death or grievous hurt, is done by consent (express or implied) of the person (above 18) who suffers the harm. Successor to IPC s. 87.',
  study: `Section 25 is the basic consent exception for harm short of death/grievous hurt.\n\nRule: Nothing is an offence which is not intended to cause death or grievous hurt, and which is not known by the doer to be likely to cause death or grievous hurt, is done by consent (express or implied) of the person (above eighteen years of age) who suffers, or who is intended or known to be likely to suffer, the harm.\n\nKey limits: consent of a person under 18 does not protect; the act must not be intended or known to be likely to cause death or grievous hurt. Cite BNS s. 25 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-25-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 87. Consent to harm short of death/GH.'] },
    { id: 's-25-m2', title: 'Text', order: 2, content: ['No intention/knowledge of death or GH; consent of person above 18 who suffers the harm.'] },
    { id: 's-25-m3', title: 'Ingredients', order: 3, content: ['(1) No intention or knowledge of death/GH. (2) Consent (express/implied) of sufferer. (3) Sufferer above 18.'] },
    { id: 's-25-m4', title: 'Evidence', order: 4, content: ['Consent and age of the sufferer; absence of intention/knowledge of death/GH.'] },
    { id: 's-25-m5', title: 'Procedure', order: 5, content: ['Raised as a defence. Related consent sections: ss. 26–28, 30.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-25', section: 's. 25', title: 'Act not intended and not known to be likely to cause death or grievous hurt, done by consent' }],
  examples: [
    { id: 's-25-ex1', title: 'Consented minor harm', illustrationType: 'practical', description: 'A and B (both adults) agree to a friendly wrestling match. A minor injury results. s. 25 may protect.' },
    { id: 's-25-ex2', title: 'Consent of minor fails', illustrationType: 'fail-scenario', description: 'Consent of a 17-year-old does not attract s. 25; the sufferer must be above 18.' },
  ],
  hypotheticals: [{ id: 's-25-hypo', title: 'Consent', facts: 'Adult consents to a risky but non-deadly activity; minor harm results.', question: 'Is s. 25 available?', applicableLaw: 'BNS s. 25.', analysis: 'If no intention/knowledge of death/GH and valid adult consent, yes.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-25-trap', trap: 'Consent of any person protects under s. 25.', correction: 'Only consent of a person above 18; and the act must not be intended/known to cause death or grievous hurt.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-25-brief', draftingCategory: 'brief', question: 'Explain BNS s. 25.', answer: 'Nothing is an offence which is not intended or known to be likely to cause death or grievous hurt and is done by consent of the person (above 18) who suffers the harm.', explanation: 'Short note.' },
    { id: 's-25-sub', draftingCategory: 'submissions', question: 'Submissions on s. 25.', answer: 'I. No intent/knowledge of death/GH. II. Adult consent. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 25', 'BNS ss. 26–28', 'IPC s. 87 (historical)'],
  examTips: ['State the age-18 requirement and the death/GH exclusion.'],
  revisionPoints: ['Consent of person above 18; no intent/knowledge of death or GH.'],
  relatedTopics: ['s-26', 's-28', 's-2', 'general-exceptions'],
}

export default content
