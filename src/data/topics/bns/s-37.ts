import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 37: there is no right of private defence against an act which does not reasonably cause apprehension of death or grievous hurt, if done by a public servant acting in good faith under colour of office, or by direction of such a public servant; nor against acts of a person under the protection of a magistrate; and the right does not extend to causing more harm than necessary. Successor to IPC s. 99.',
  study: `Section 37 restricts the right of private defence.\n\nNo right against:\n• An act which does not reasonably cause the apprehension of death or of grievous hurt, if done or attempted by a public servant acting in good faith under colour of his office, or by any person acting under the lawful direction of such public servant.\n• Acts of a person under the protection of a Magistrate.\n\nGeneral limit: the right of private defence in no case extends to the inflicting of more harm than it is necessary to inflict for the purpose of defence.\n\nExplanation clauses protect public servants acting under colour of office even if the act is not strictly justifiable by law, provided good faith and the absence of reasonable apprehension of death/GH. Cite BNS s. 37 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-37-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 99. Limits private defence against public servants and requires necessity.'] },
    { id: 's-37-m2', title: 'Text', order: 2, content: ['No right against public-servant acts (good faith, colour of office) that do not cause reasonable apprehension of death/GH; no right against protected persons under magistrate; no more harm than necessary.'] },
    { id: 's-37-m3', title: 'Ingredients of the restriction', order: 3, content: ['Public servant / person under direction; good faith; colour of office; no reasonable apprehension of death/GH → no private defence. Always: no excess force.'] },
    { id: 's-37-m4', title: 'Evidence', order: 4, content: ['Status of the actor; good faith; nature of the apprehension; proportionality of force.'] },
    { id: 's-37-m5', title: 'Procedure', order: 5, content: ['Central when the accused claims private defence against police or other public servants.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-37', section: 's. 37', title: 'Acts against which there is no right of private defence' }],
  examples: [
    { id: 's-37-ex1', title: 'Lawful arrest', illustrationType: 'practical', description: 'A resists a police officer making a lawful arrest in good faith. If there is no reasonable apprehension of death or GH, s. 37 excludes the right of private defence.' },
    { id: 's-37-ex2', title: 'Excessive force by public servant', illustrationType: 'fail-scenario', description: 'If the public servant’s act itself reasonably causes apprehension of death or grievous hurt, the restriction in s. 37 may not apply and private defence can arise.' },
  ],
  hypotheticals: [{ id: 's-37-hypo', title: 'Defence against police', facts: 'Accused uses force against an officer effecting an arrest.', question: 'Is private defence available?', applicableLaw: 'BNS s. 37.', analysis: 'If the officer acted in good faith under colour of office and there was no reasonable apprehension of death/GH, no right of private defence.', conclusion: 'Likely no defence under s. 37.' }],
  distinctions: [],
  misconceptions: [{ id: 's-37-trap', trap: 'There is never a right of private defence against a public servant.', correction: 'The restriction applies only when the act does not reasonably cause apprehension of death or grievous hurt and the public servant acts in good faith under colour of office.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-37-brief', draftingCategory: 'brief', question: 'Explain the limits on private defence in BNS s. 37.', answer: 'No right of private defence against acts of a public servant (or person under his direction) done in good faith under colour of office that do not reasonably cause apprehension of death or grievous hurt; nor against protected persons under a magistrate. The right never extends to more harm than necessary.', explanation: 'Short note.' },
    { id: 's-37-sub', draftingCategory: 'submissions', question: 'Submissions on s. 37.', answer: 'I. Public servant / good faith / colour of office. II. No apprehension of death/GH. III. Or excess force. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 37', 'BNS s. 34', 'IPC s. 99 (historical)'],
  examTips: ['Always check s. 37 when private defence is claimed against police or officials.', 'State the “no more harm than necessary” rule.'],
  revisionPoints: ['No PD against good-faith public-servant acts without apprehension of death/GH.', 'Never more harm than necessary.'],
  relatedTopics: ['s-34', 's-35', 's-38', 'general-exceptions'],
}

export default content
