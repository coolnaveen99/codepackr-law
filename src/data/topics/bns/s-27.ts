import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 27: nothing is an offence by reason of any harm done in good faith, for the benefit of a child under 12 or a person of unsound mind, by or by consent of the guardian or other person having lawful charge, subject to limits (not intentional death/attempt, not grievous hurt unless for prevention of death/GH or cure of grievous disease). Successor to IPC s. 89.',
  study: `Section 27 protects good-faith beneficial acts for children under 12 and persons of unsound mind, done by or with the consent of the guardian/person in lawful charge.\n\nLimits: the exception does not extend to intentional causing of death or attempt to cause death, or to doing anything which the doer knows to be likely to cause death (except for preventing death/GH or curing grievous disease); similar limits apply to grievous hurt.\n\nCite BNS s. 27 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-27-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 89. Guardian consent for benefit of child under 12 / unsound mind.'] },
    { id: 's-27-m2', title: 'Text', order: 2, content: ['Good faith; benefit of child under 12 or person of unsound mind; by or with consent of guardian/lawful charge; statutory limits on death and grievous hurt.'] },
    { id: 's-27-m3', title: 'Ingredients', order: 3, content: ['Good faith; benefit; child under 12 or unsound mind; guardian consent/act; within the death/GH limits.'] },
    { id: 's-27-m4', title: 'Evidence', order: 4, content: ['Age/mental state; guardian status; good faith and beneficial purpose.'] },
    { id: 's-27-m5', title: 'Procedure', order: 5, content: ['Raised as a defence in medical/guardian cases involving minors or persons of unsound mind.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-27', section: 's. 27', title: 'Act done in good faith for benefit of child or person of unsound mind, by or by consent of guardian' }],
  examples: [
    { id: 's-27-ex1', title: 'Guardian consent for child’s surgery', illustrationType: 'practical', description: 'A guardian consents to necessary surgery for a child under 12. The act, done in good faith for the child’s benefit, is protected by s. 27 within the statutory limits.' },
    { id: 's-27-ex2', title: 'Intentional death excluded', illustrationType: 'fail-scenario', description: 'Intentionally causing death of the child is not protected, even with guardian “consent”.' },
  ],
  hypotheticals: [{ id: 's-27-hypo', title: 'Guardian benefit', facts: 'Guardian authorises a beneficial medical procedure for a 10-year-old.', question: 'Is s. 27 available?', applicableLaw: 'BNS s. 27.', analysis: 'If good faith, benefit, and within death/GH limits — yes.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-27-trap', trap: 'Guardian consent allows any harm to a child.', correction: 'Only good-faith beneficial acts within the strict limits on death and grievous hurt.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-27-brief', draftingCategory: 'brief', question: 'Explain BNS s. 27.', answer: 'Nothing is an offence by reason of harm done in good faith for the benefit of a child under 12 or a person of unsound mind, by or with consent of the guardian, subject to limits on intentional death and grievous hurt.', explanation: 'Short note.' },
    { id: 's-27-sub', draftingCategory: 'submissions', question: 'Submissions on s. 27.', answer: 'I. Good faith and benefit. II. Guardian. III. Within limits. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 27', 'BNS s. 26', 'IPC s. 89 (historical)'],
  examTips: ['Pair with s. 26 (adult consent) and stress the under-12 / unsound-mind + guardian requirement.'],
  revisionPoints: ['Guardian + good faith + benefit of child under 12 / unsound mind → protected (within limits).'],
  relatedTopics: ['s-26', 's-28', 's-20', 'general-exceptions'],
}

export default content
