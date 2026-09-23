import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 39: when the right of private defence of the body extends only to causing any harm other than death (i.e. the residual cases not covered by s. 38). Successor to IPC s. 101.',
  study: `Section 39 is the residual extent of private defence of the body.\n\nRule: If the offence is not of any of the descriptions enumerated in s. 38, the right of private defence of the body does not extend to the voluntary causing of death, but does extend to the voluntary causing of any harm other than death.\n\nEffect: for assaults that do not fall within the six “death-extent” situations of s. 38, the defender may cause harm short of death, but not death. Exceeding this limit (causing death when only lesser harm was authorised) is culpable. Cite BNS s. 39 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-39-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 101. Residual body-defence extent (harm other than death).'] },
    { id: 's-39-m2', title: 'Text', order: 2, content: ['If the offence is not within s. 38, PD of body does not extend to causing death, but does extend to any harm other than death.'] },
    { id: 's-39-m3', title: 'Ingredients', order: 3, content: ['Occasion for PD of body; offence not within s. 38; force limited to harm other than death.'] },
    { id: 's-39-m4', title: 'Evidence', order: 4, content: ['Nature of the assault; whether it fell within s. 38; degree of force used.'] },
    { id: 's-39-m5', title: 'Procedure', order: 5, content: ['If death is caused when only s. 39 applied, Exception 2 to s. 101 or other liability may follow.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-39', section: 's. 39', title: 'When such right extends to causing any harm other than death' }],
  examples: [
    { id: 's-39-ex1', title: 'Ordinary assault', illustrationType: 'practical', description: 'A is slapped. He may use force short of causing death in private defence under s. 39; he may not kill the assailant.' },
    { id: 's-39-ex2', title: 'Death caused under s. 39 situation', illustrationType: 'fail-scenario', description: 'A kills in response to a minor assault that did not fall under s. 38. The killing exceeds s. 39; private defence does not fully protect.' },
  ],
  hypotheticals: [{ id: 's-39-hypo', title: 'Residual body defence', facts: 'Minor assault; defender causes grievous hurt but not death.', question: 'Is the force protected?', applicableLaw: 'BNS s. 39.', analysis: 'If the assault was not within s. 38, force short of death is within s. 39 (subject to necessity).', conclusion: 'Protected if not excessive.' }],
  distinctions: [{ id: 's-39-dist', title: 's. 38 vs s. 39', left: 's. 38 (may cause death)', right: 's. 39 (harm other than death only)', rows: [{ point: 'Trigger', left: 'Six listed situations', right: 'Any other body offence occasioning PD' }] }],
  misconceptions: [{ id: 's-39-trap', trap: 'Private defence of body always allows causing death.', correction: 'Only in the s. 38 situations. In all other cases, only harm short of death is authorised (s. 39).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-39-brief', draftingCategory: 'brief', question: 'Explain BNS s. 39.', answer: 'If the offence occasioning private defence of the body is not within s. 38, the right does not extend to causing death, but does extend to any harm other than death.', explanation: 'Short note.' },
    { id: 's-39-sub', draftingCategory: 'submissions', question: 'Submissions on s. 39.', answer: 'I. Offence not within s. 38. II. Force short of death. III. Necessity. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 39', 'BNS s. 38', 'BNS s. 34', 'IPC s. 101 (historical)'],
  examTips: ['Always classify the assault under s. 38 or s. 39 before deciding whether death was authorised.'],
  revisionPoints: ['Not within s. 38 → may cause harm other than death only.'],
  relatedTopics: ['s-38', 's-34', 's-101'],
}

export default content
