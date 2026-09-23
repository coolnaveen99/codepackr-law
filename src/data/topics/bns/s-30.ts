import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 30: nothing is an offence by reason of any harm done in good faith, without criminal intent, for the benefit of a person (even without consent) in certain emergency situations (e.g. where the person is unable to consent and no guardian is available). Successor to IPC s. 92.',
  study: `Section 30 allows good-faith beneficial acts without consent in emergencies.\n\nRule: Nothing is an offence by reason of any harm done in good faith, without criminal intent, for the benefit of a person, even without that person’s consent, in the circumstances stated (person incapable of giving consent and no guardian available in time, etc.), subject to limits similar to those in s. 27 (not intentional death, etc.).\n\nClassic use: emergency medical treatment of an unconscious adult when no guardian/relative can consent in time. Cite BNS s. 30 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-30-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 92. Emergency benefit without consent.'] },
    { id: 's-30-m2', title: 'Text', order: 2, content: ['Good faith; no criminal intent; benefit of the person; without consent in the statutory emergency situations; limits on death/GH.'] },
    { id: 's-30-m3', title: 'Ingredients', order: 3, content: ['Emergency situation as defined; good faith; benefit; no criminal intent; within death/GH limits.'] },
    { id: 's-30-m4', title: 'Evidence', order: 4, content: ['Urgency; inability to obtain consent; good faith and benefit.'] },
    { id: 's-30-m5', title: 'Procedure', order: 5, content: ['Raised in emergency medical / rescue cases.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-30', section: 's. 30', title: 'Act done in good faith for benefit of a person without consent' }],
  examples: [
    { id: 's-30-ex1', title: 'Emergency surgery', illustrationType: 'practical', description: 'An unconscious accident victim needs immediate surgery; no relative can consent in time. The surgeon acts in good faith for the patient’s benefit. s. 30 may protect.' },
    { id: 's-30-ex2', title: 'No true emergency', illustrationType: 'fail-scenario', description: 'Elective procedure without consent when consent could have been obtained is not protected by s. 30.' },
  ],
  hypotheticals: [{ id: 's-30-hypo', title: 'Emergency without consent', facts: 'Unconscious patient; urgent life-saving procedure; no guardian available.', question: 'Is s. 30 available?', applicableLaw: 'BNS s. 30.', analysis: 'If good faith, benefit, true emergency, and within limits — yes.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-30-trap', trap: 'Any beneficial act without consent is protected.', correction: 'Only in the statutory emergency situations, in good faith, without criminal intent, and within the death/GH limits.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-30-brief', draftingCategory: 'brief', question: 'Explain BNS s. 30.', answer: 'Nothing is an offence by reason of harm done in good faith, without criminal intent, for the benefit of a person without consent, in the statutory emergency situations (subject to limits on death and grievous hurt).', explanation: 'Short note.' },
    { id: 's-30-sub', draftingCategory: 'submissions', question: 'Submissions on s. 30.', answer: 'I. Emergency. II. Good faith and benefit. III. Within limits. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 30', 'BNS s. 26', 'BNS s. 27', 'IPC s. 92 (historical)'],
  examTips: ['Classic example is emergency treatment of an unconscious patient.'],
  revisionPoints: ['Emergency + good faith + benefit + no consent possible → protected (within limits).'],
  relatedTopics: ['s-26', 's-27', 'general-exceptions'],
}

export default content
