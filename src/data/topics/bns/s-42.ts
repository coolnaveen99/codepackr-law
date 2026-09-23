import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 42: when the right of private defence of property extends only to causing any harm other than death (residual cases not covered by s. 41). Successor to IPC s. 104.',
  study: `Section 42 is the residual extent of private defence of property.\n\nRule: If the offence is not of any of the descriptions enumerated in s. 41, the right of private defence of property does not extend to the voluntary causing of death, but does extend to the voluntary causing of any harm other than death.\n\nEffect: for property offences that do not fall within the “death-extent” situations of s. 41, the defender may cause harm short of death only. Cite BNS s. 42 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-42-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 104. Residual property-defence extent (harm other than death).'] },
    { id: 's-42-m2', title: 'Text', order: 2, content: ['If the offence is not within s. 41, PD of property does not extend to causing death, but does extend to any harm other than death.'] },
    { id: 's-42-m3', title: 'Ingredients', order: 3, content: ['Occasion for PD of property; offence not within s. 41; force limited to harm other than death.'] },
    { id: 's-42-m4', title: 'Evidence', order: 4, content: ['Nature of the property offence; whether it fell within s. 41; degree of force used.'] },
    { id: 's-42-m5', title: 'Procedure', order: 5, content: ['If death is caused when only s. 42 applied, the killing exceeds the right.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-42', section: 's. 42', title: 'When such right extends to causing any harm other than death' }],
  examples: [
    { id: 's-42-ex1', title: 'Ordinary theft', illustrationType: 'practical', description: 'A uses force short of death to stop a daytime petty theft. s. 42 authorises harm other than death.' },
    { id: 's-42-ex2', title: 'Death for ordinary theft', illustrationType: 'fail-scenario', description: 'A kills a person committing a minor theft that did not fall under s. 41. The killing exceeds s. 42.' },
  ],
  hypotheticals: [{ id: 's-42-hypo', title: 'Residual property defence', facts: 'Minor theft; defender causes hurt but not death.', question: 'Is the force protected?', applicableLaw: 'BNS s. 42.', analysis: 'If not within s. 41, force short of death is within s. 42 (subject to necessity and s. 43 timing).', conclusion: 'Protected if not excessive.' }],
  distinctions: [{ id: 's-42-dist', title: 's. 41 vs s. 42', left: 's. 41 (may cause death)', right: 's. 42 (harm other than death only)', rows: [{ point: 'Trigger', left: 'Robbery, night house-breaking, fire to dwelling, etc.', right: 'Any other property offence occasioning PD' }] }],
  misconceptions: [{ id: 's-42-trap', trap: 'Any defence of property allows killing.', correction: 'Only the s. 41 situations allow causing death. All other property-defence cases are limited to harm short of death (s. 42).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-42-brief', draftingCategory: 'brief', question: 'Explain BNS s. 42.', answer: 'If the offence occasioning private defence of property is not within s. 41, the right does not extend to causing death, but does extend to any harm other than death.', explanation: 'Short note.' },
    { id: 's-42-sub', draftingCategory: 'submissions', question: 'Submissions on s. 42.', answer: 'I. Offence not within s. 41. II. Force short of death. III. Necessity and timing (s. 43). IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 42', 'BNS s. 41', 'BNS s. 35', 'IPC s. 104 (historical)'],
  examTips: ['Classify the property offence under s. 41 or s. 42 before deciding whether death was authorised.'],
  revisionPoints: ['Not within s. 41 → may cause harm other than death only.'],
  relatedTopics: ['s-41', 's-35', 's-43', 's-34'],
}

export default content
