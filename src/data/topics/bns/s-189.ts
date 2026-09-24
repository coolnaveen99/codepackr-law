import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 189: unlawful assembly — an assembly of five or more persons with a common object of the kinds listed (overawing government, resisting law, committing mischief/criminal trespass, compelling, etc.). Member of an unlawful assembly is punished. Successor to IPC s. 141/143. Rioting is when force/violence is used by an unlawful assembly (related sections).',
  study: `Section 189 (and related provisions) define and punish unlawful assembly.\n\nUnlawful assembly: an assembly of five or more persons if the common object of the persons composing the assembly is one of the objects listed in the section (e.g. overawing the government by criminal force, resisting the execution of law/legal process, committing mischief or criminal trespass, compelling any person to do what he is not legally bound to do, etc.).\n\nMere presence is not enough; the person must share the common object (or join and continue knowing the object).\n\nWhen an unlawful assembly uses force or violence in prosecution of the common object, the offence becomes rioting (related section).\n\nCite BNS s. 189 for post-1 July 2024 unlawful-assembly cases. Distinguish from common intention (s. 3(5)) and conspiracy (s. 61).`,
  sections: [
    { id: 's-189-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 141/143. Five or more with a listed common object.'] },
    { id: 's-189-m2', title: 'Common Objects', order: 2, content: ['Listed objects: overawing government; resisting law/process; mischief/criminal trespass; compelling; etc. as in the text.'] },
    { id: 's-189-m3', title: 'Ingredients', order: 3, content: ['(1) Assembly of five or more. (2) Common object of a listed kind. (3) Membership (sharing or knowingly joining).'] },
    { id: 's-189-m4', title: 'Evidence', order: 4, content: ['Number; object inferred from conduct, slogans, weapons, prior events; participation of the accused.'] },
    { id: 's-189-m5', title: 'Procedure', order: 5, content: ['Often charged with rioting when force is used; forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-189', section: 's. 189', title: 'Unlawful assembly' }],
  examples: [
    { id: 's-189-ex1', title: 'Five with common object', illustrationType: 'practical', description: 'Five persons assemble to forcibly obstruct a lawful process. Unlawful assembly is made out.' },
    { id: 's-189-ex2', title: 'Four persons only', illustrationType: 'fail-scenario', description: 'Four persons with a common object do not constitute an unlawful assembly (minimum five).' },
  ],
  hypotheticals: [{ id: 's-189-hypo', title: 'Membership', facts: 'Accused joins a crowd of six that is already attacking property; he knows the object and continues.', question: 'Is he a member of an unlawful assembly?', applicableLaw: 'BNS s. 189.', analysis: 'If he shares or knowingly joins and continues with the common object — yes.', conclusion: 'Membership established.' }],
  distinctions: [{ id: 's-189-dist', title: 'Unlawful assembly vs Rioting vs Common intention', left: 'Unlawful assembly (s. 189)', right: 'Rioting / s. 3(5)', rows: [{ point: 'Focus', left: 'Five or more with listed common object', right: 'Force/violence by UA; or joint liability for a criminal act' }] }],
  misconceptions: [{ id: 's-189-trap', trap: 'Any crowd of five is an unlawful assembly.', correction: 'The common object must be one of the objects listed in the section. A peaceful gathering of five is not an unlawful assembly.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-189-brief', draftingCategory: 'brief', question: 'Define unlawful assembly under BNS s. 189.', answer: 'An assembly of five or more persons with a common object of one of the kinds listed in the section (overawing government, resisting law, mischief/criminal trespass, compelling, etc.). Membership requires sharing or knowingly joining that object.', explanation: 'Short note.' },
    { id: 's-189-sub', draftingCategory: 'submissions', question: 'Submissions on unlawful assembly.', answer: 'I. Five or more. II. Listed common object. III. Membership of the accused. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 189', 'BNS rioting provisions', 'BNS s. 3(5)', 'IPC ss. 141–143 (historical)'],
  examTips: ['State the minimum of five and the need for a listed common object.', 'Distinguish from rioting (force/violence).'],
  revisionPoints: ['Five or more + listed common object = unlawful assembly.', 'Rioting = UA + force/violence.', 'Mere presence ≠ membership.'],
  relatedTopics: ['s-3', 's-61', 's-103'],
}

export default content
