import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 41: when the right of private defence of property extends to the voluntary causing of death. Specified situations (robbery, house-breaking by night, mischief by fire to dwelling, theft/mischief/house-trespass under circumstances causing reasonable apprehension of death or grievous hurt). Successor to IPC s. 103.',
  study: `Section 41 lists when private defence of property may extend to causing death.\n\nThe right extends to the voluntary causing of death or of any other harm to the wrong-doer if the offence that occasions the exercise of the right is:\n• robbery, or\n• house-breaking by night, or\n• mischief by fire on any building, tent or vessel used as a human dwelling or for custody of property, or\n• theft, mischief or house-trespass under such circumstances as may reasonably cause apprehension that death or grievous hurt will be the consequence if the right is not exercised.\n\nKey limits: reasonable apprehension where required; force not excessive; no right against acts protected by s. 37; commencement and continuance governed by s. 43. Exceeding the right may attract Exception 2 to s. 101.\n\nCite BNS s. 41 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-41-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 103. Defines when private defence of property may extend to causing death.'] },
    { id: 's-41-m2', title: 'Situations', order: 2, content: ['Robbery; house-breaking by night; mischief by fire to dwelling/custody; theft/mischief/house-trespass with reasonable apprehension of death or grievous hurt.'] },
    { id: 's-41-m3', title: 'Ingredients', order: 3, content: ['Occasion for defence of property; one of the listed situations; reasonable apprehension where required; force not excessive.'] },
    { id: 's-41-m4', title: 'Evidence', order: 4, content: ['Nature of the property offence; circumstances creating apprehension; proportionality of force.'] },
    { id: 's-41-m5', title: 'Exceeding the right', order: 5, content: ['If death is caused but the right was exceeded, Exception 2 to s. 101 may reduce the offence to culpable homicide not amounting to murder.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-41', section: 's. 41', title: 'When right of private defence of property extends to causing death' }],
  examples: [
    { id: 's-41-ex1', title: 'House-breaking by night', illustrationType: 'practical', description: 'A confronts a person house-breaking by night and, in the reasonable exercise of the right, causes death. s. 41 may protect.' },
    { id: 's-41-ex2', title: 'Daytime petty theft without apprehension of death', illustrationType: 'fail-scenario', description: 'A kills a person who is committing a minor daytime theft with no reasonable apprehension of death or grievous hurt. s. 41 does not extend to causing death on those facts.' },
  ],
  hypotheticals: [{ id: 's-41-hypo', title: 'Property defence causing death', facts: 'Night-time house-breaking; occupant kills the intruder.', question: 'Is s. 41 available?', applicableLaw: 'BNS s. 41; s. 34; s. 43; Exception 2 to s. 101.', analysis: 'House-breaking by night is a listed situation. If force was not excessive and the right had not ceased, s. 41 protects. If excessive, Exception 2 to s. 101 may still apply.', conclusion: 'Protected if within limits; otherwise partial excuse under the murder exceptions.' }],
  distinctions: [{ id: 's-41-dist', title: 's. 38 (body) vs s. 41 (property)', left: 's. 38 — body', right: 's. 41 — property', rows: [{ point: 'Trigger', left: 'Six situations centred on threats to body', right: 'Robbery, night house-breaking, fire to dwelling, theft etc. with apprehension of death/GH' }] }],
  misconceptions: [{ id: 's-41-trap', trap: 'Any defence of property justifies killing.', correction: 'Only the listed situations; force must not be excessive; the right has commencement and continuance limits (s. 43).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-41-brief', draftingCategory: 'brief', question: 'When does private defence of property extend to causing death under BNS s. 41?', answer: 'When the occasioning offence is robbery, house-breaking by night, mischief by fire to a dwelling/custody building, or theft/mischief/house-trespass under circumstances causing reasonable apprehension of death or grievous hurt, and force is not excessive.', explanation: 'Short note.' },
    { id: 's-41-sub', draftingCategory: 'submissions', question: 'Submissions on s. 41.', answer: 'I. Listed situation. II. Reasonable apprehension where required. III. No excess. IV. Alternatively Exception 2 to s. 101. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 41', 'BNS s. 34', 'BNS s. 43', 'BNS s. 101 Exception 2', 'IPC s. 103 (historical)'],
  examTips: ['List the property situations that allow causing death.', 'Always discuss excess and Exception 2 to s. 101.'],
  revisionPoints: ['Robbery / night house-breaking / fire to dwelling / theft etc. with apprehension of death or GH → may cause death.', 'No excess; check commencement/continuance.'],
  relatedTopics: ['s-34', 's-38', 's-101', 'culpable-homicide-murder'],
}

export default content
