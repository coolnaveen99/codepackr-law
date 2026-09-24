import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 190 (and related): rioting — when an unlawful assembly or any member of it uses force or violence in prosecution of the common object, every member is guilty of rioting. Successor to IPC s. 146/147. Armed with deadly weapon is an aggravated form.',
  study: `Rioting under the BNS:\n\nWhenever force or violence is used by an unlawful assembly, or by any member thereof, in prosecution of the common object of such assembly, every member of such assembly is guilty of the offence of rioting.\n\nKey points\n• Prerequisite: an unlawful assembly (five or more with a listed common object — s. 189).\n• Force or violence used in prosecution of that common object.\n• Every member is guilty of rioting (not only the person who used force).\n\nAggravated form: rioting armed with a deadly weapon.\n\nCite the applicable BNS rioting sections for post-1 July 2024 acts. Distinguish from common intention (s. 3(5)) and from organised crime (s. 111).`,
  sections: [
    { id: 's-190-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 146/147. Unlawful assembly + force/violence in prosecution of common object.'] },
    { id: 's-190-m2', title: 'Definition', order: 2, content: ['Force or violence by UA or any member in prosecution of the common object → every member guilty of rioting.'] },
    { id: 's-190-m3', title: 'Ingredients', order: 3, content: ['(1) Unlawful assembly. (2) Force or violence. (3) In prosecution of the common object. (4) Membership of the accused.'] },
    { id: 's-190-m4', title: 'Evidence', order: 4, content: ['Existence of UA; use of force/violence; link to common object; participation of the accused.'] },
    { id: 's-190-m5', title: 'Procedure', order: 5, content: ['Often charged with the underlying offences (hurt, mischief, etc.); forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-190', section: 's. 190', title: 'Rioting' }],
  examples: [
    { id: 's-190-ex1', title: 'UA uses force', illustrationType: 'practical', description: 'An unlawful assembly of six attacks a shop in furtherance of their common object. Every member is guilty of rioting.' },
    { id: 's-190-ex2', title: 'No force', illustrationType: 'fail-scenario', description: 'An unlawful assembly gathers but uses no force or violence. Unlawful assembly is made out; rioting is not.' },
  ],
  hypotheticals: [{ id: 's-190-hypo', title: 'Member liability', facts: 'Accused is a member of a UA; another member uses force in prosecution of the common object.', question: 'Is the accused guilty of rioting?', applicableLaw: 'BNS rioting provisions.', analysis: 'Yes — every member of the UA is guilty of rioting when force/violence is used in prosecution of the common object.', conclusion: 'Rioting established against the member.' }],
  distinctions: [{ id: 's-190-dist', title: 'Rioting vs Unlawful assembly vs Common intention', left: 'Rioting', right: 'UA / s. 3(5)', rows: [{ point: 'Extra element', left: 'Force or violence in prosecution of common object', right: 'UA alone has no force requirement; s. 3(5) is joint liability for a criminal act' }] }],
  misconceptions: [{ id: 's-190-trap', trap: 'Only the person who used force is guilty of rioting.', correction: 'Every member of the unlawful assembly is guilty of rioting when force or violence is used in prosecution of the common object.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-190-brief', draftingCategory: 'brief', question: 'Define rioting under the BNS.', answer: 'When force or violence is used by an unlawful assembly or any member thereof in prosecution of the common object, every member of that assembly is guilty of rioting. Prerequisite is an unlawful assembly (s. 189).', explanation: 'Short note.' },
    { id: 's-190-sub', draftingCategory: 'submissions', question: 'Submissions on rioting.', answer: 'I. Unlawful assembly. II. Force/violence in prosecution of common object. III. Membership. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS rioting provisions', 'BNS s. 189', 'BNS s. 3(5)', 'IPC ss. 146–148 (historical)'],
  examTips: ['State that every member is liable, not only the person who used force.', 'Require an unlawful assembly as the base.'],
  revisionPoints: ['Rioting = UA + force/violence in prosecution of common object.', 'Every member is guilty.', 'No force = UA only, not rioting.'],
  relatedTopics: ['s-189', 's-3', 's-115', 's-324'],
}

export default content
