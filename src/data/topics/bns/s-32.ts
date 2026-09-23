import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 32: nothing is an offence which is done by a person who is compelled to do it by threats of instant death (subject to limits). Successor to IPC s. 94. Duress / compulsion defence.',
  study: `Section 32 is the compulsion / duress exception.\n\nRule: Except murder and offences against the State punishable with death, nothing is an offence which is done by a person who is compelled to do it by threats which reasonably cause the apprehension that instant death will be the consequence otherwise.\n\nKey limits: the threat must be of instant death; the exception does not extend to murder or capital offences against the State; the person must not have put himself in the situation of his own accord (or the statutory text’s equivalent limits). Cite BNS s. 32 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-32-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 94. Duress by threat of instant death.'] },
    { id: 's-32-m2', title: 'Text', order: 2, content: ['Compelled by threats causing reasonable apprehension of instant death; exception does not cover murder or capital State offences.'] },
    { id: 's-32-m3', title: 'Ingredients', order: 3, content: ['(1) Threat of instant death. (2) Reasonable apprehension. (3) Act done under that compulsion. (4) Offence is not murder or a capital offence against the State.'] },
    { id: 's-32-m4', title: 'Evidence', order: 4, content: ['Nature and immediacy of the threat; reasonableness of the apprehension.'] },
    { id: 's-32-m5', title: 'Procedure', order: 5, content: ['Raised as a defence. Does not protect murder.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-32', section: 's. 32', title: 'Act to which a person is compelled by threats' }],
  examples: [
    { id: 's-32-ex1', title: 'Compulsion short of murder', illustrationType: 'practical', description: 'A is forced at gunpoint to drive a getaway vehicle for a non-homicide offence. If the threat was of instant death, s. 32 may protect.' },
    { id: 's-32-ex2', title: 'Murder not protected', illustrationType: 'fail-scenario', description: 'A is compelled under threat of death to kill B. s. 32 does not protect the act of murder.' },
  ],
  hypotheticals: [{ id: 's-32-hypo', title: 'Duress', facts: 'Threat of instant death; accused commits a non-murder offence.', question: 'Is s. 32 available?', applicableLaw: 'BNS s. 32.', analysis: 'If the threat was of instant death and the offence is not murder/capital State offence, yes.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-32-trap', trap: 'Any threat of harm is enough for s. 32.', correction: 'The threat must reasonably cause apprehension of instant death; and murder / capital State offences are excluded.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-32-brief', draftingCategory: 'brief', question: 'Explain the compulsion exception in BNS s. 32.', answer: 'Nothing (except murder and capital offences against the State) is an offence done under threats that reasonably cause apprehension of instant death.', explanation: 'Short note.' },
    { id: 's-32-sub', draftingCategory: 'submissions', question: 'Submissions on s. 32.', answer: 'I. Threat of instant death. II. Reasonable apprehension. III. Offence not excluded. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 32', 'IPC s. 94 (historical)'],
  examTips: ['Stress “instant death” and the exclusion of murder.'],
  revisionPoints: ['Threat of instant death → defence (except murder / capital State offences).'],
  relatedTopics: ['s-22', 's-34', 'general-exceptions'],
}

export default content
