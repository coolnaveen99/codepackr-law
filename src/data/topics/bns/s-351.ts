import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 351: criminal intimidation — threatening another with injury to person, reputation, or property, or to the person/reputation of anyone in whom that person is interested, with intent to cause alarm or to cause that person to do an act he is not legally bound to do or omit an act he is entitled to do. Successor to IPC s. 503/506. Aggravated forms (threat of death, grievous hurt, etc.) carry higher punishment.',
  study: `Criminal intimidation under the BNS:\n\nWhoever threatens another with any injury to his person, reputation or property, or to the person or reputation of any one in whom that person is interested, with intent to cause alarm to that person, or to cause that person to do any act which he is not legally bound to do, or to omit to do any act which that person is legally entitled to do, as the means of avoiding the execution of such threat, commits criminal intimidation.\n\nKey points\n• Threat of injury to person, reputation, or property (of the victim or someone in whom the victim is interested).\n• Intent to cause alarm, or to compel an act/omission.\n• Aggravated form when the threat is to cause death, grievous hurt, destruction of property by fire, etc.\n\nCite the applicable BNS sections for post-1 July 2024 acts. Distinguish from extortion (which requires inducement to deliver property under fear).`,
  sections: [
    { id: 's-351-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 503/506. Threat with intent to alarm or compel.'] },
    { id: 's-351-m2', title: 'Definition', order: 2, content: ['Threat of injury to person/reputation/property; intent to cause alarm or to compel act/omission.'] },
    { id: 's-351-m3', title: 'Ingredients', order: 3, content: ['(1) Threat of injury of the specified kind. (2) Intent to cause alarm or to cause the person to do/omit something.'] },
    { id: 's-351-m4', title: 'Aggravated form', order: 4, content: ['Threat to cause death, grievous hurt, destruction of property by fire, etc. — higher punishment.'] },
    { id: 's-351-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; often bailable in simple form.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-351', section: 's. 351', title: 'Criminal intimidation' }],
  examples: [
    { id: 's-351-ex1', title: 'Threat to compel', illustrationType: 'practical', description: 'A threatens to harm B’s reputation unless B withdraws a complaint. Criminal intimidation is made out.' },
    { id: 's-351-ex2', title: 'Extortion instead', illustrationType: 'fail-scenario', description: 'A threatens injury and thereby induces B to deliver money. That is extortion (s. 308), which may include intimidation as a component but is a distinct offence focused on delivery of property.' },
  ],
  hypotheticals: [{ id: 's-351-hypo', title: 'Intimidation', facts: 'Accused threatens to cause grievous hurt unless the victim stays silent.', question: 'Simple or aggravated criminal intimidation?', applicableLaw: 'BNS criminal intimidation provisions.', analysis: 'Threat of grievous hurt falls within the aggravated form.', conclusion: 'Aggravated criminal intimidation.' }],
  distinctions: [{ id: 's-351-dist', title: 'Criminal intimidation vs Extortion', left: 'Criminal intimidation', right: 'Extortion (s. 308)', rows: [{ point: 'Focus', left: 'Threat to alarm or compel act/omission', right: 'Fear of injury inducing delivery of property' }] }],
  misconceptions: [{ id: 's-351-trap', trap: 'Every threat is criminal intimidation.', correction: 'The threat must be of injury to person, reputation, or property, and with intent to cause alarm or to compel an act/omission. Idle abuse without that intent may not suffice.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-351-brief', draftingCategory: 'brief', question: 'Define criminal intimidation under the BNS.', answer: 'Threatening another with injury to person, reputation, or property (or to someone in whom that person is interested), with intent to cause alarm or to cause that person to do an act he is not bound to do or omit an act he is entitled to do. Aggravated when the threat is of death, grievous hurt, etc.', explanation: 'Short note.' },
    { id: 's-351-sub', draftingCategory: 'submissions', question: 'Submissions on criminal intimidation.', answer: 'I. Threat of injury. II. Intent to alarm or compel. III. Aggravating form if any. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS criminal intimidation provisions', 'BNS s. 308', 'IPC ss. 503/506 (historical)'],
  examTips: ['Distinguish from extortion (delivery of property).', 'Note the aggravated form for threats of death/GH.'],
  revisionPoints: ['Threat of injury + intent to alarm or compel = criminal intimidation.', 'Aggravated: threat of death, GH, fire, etc.', 'Extortion requires induced delivery of property.'],
  relatedTopics: ['s-308', 's-130', 's-64'],
}

export default content
