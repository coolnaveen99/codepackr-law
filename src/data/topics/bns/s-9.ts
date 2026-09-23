import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 9 limits the punishment when an offence is made up of several offences (successor to IPC s. 71). The offender is not to be punished with the punishment of more than one of such offences, unless expressly provided.',
  study: `Section 9 prevents double punishment when a single transaction constitutes more than one offence.\n\nRule: Where anything is an offence falling within two or more separate definitions, or where several acts of which one or more than one would by itself constitute an offence combine to form a different offence, the offender shall not be punished with a more severe punishment than the court could award for any one of such offences, unless expressly provided.\n\nThis is the statutory foundation of the “one transaction – one punishment” principle, subject to express contrary provision. It works together with the BNSS rules on joinder of charges and the constitutional protection against double jeopardy (Art. 20(2)).\n\nCite BNS s. 9 for post-1 July 2024 offences.`,
  sections: [
    { id: 's-9-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 71. Objective: avoid cumulative punishment for the same transaction unless statute otherwise provides.'] },
    { id: 's-9-m2', title: 'Textual Scope', order: 2, content: ['Offence falling under two definitions, or acts combining into a different offence → punishment limited to the maximum for any one, unless express provision.'] },
    { id: 's-9-m3', title: 'Ingredients', order: 3, content: ['Same transaction; multiple offence definitions satisfied; no express statutory authorisation for cumulative punishment.'] },
    { id: 's-9-m4', title: 'Evidence', order: 4, content: ['Facts establishing the single transaction and the overlapping offences.'] },
    { id: 's-9-m5', title: 'Procedure', order: 5, content: ['Raised at the stage of charge or sentence; court must not impose a total punishment exceeding the limit in s. 9.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-9', section: 's. 9', title: 'Limit of punishment of offence made up of several offences' }],
  examples: [
    { id: 's-9-ex1', title: 'Overlapping definitions', illustrationType: 'practical', description: 'A single act of violence satisfies both a hurt section and a more specific assault section. Absent an express cumulative provision, the court awards punishment only for one.' },
    { id: 's-9-ex2', title: 'Express cumulative provision', illustrationType: 'fail-scenario', description: 'Where a statute expressly provides that the offender shall be punished for both offences, s. 9 yields to that express provision.' },
  ],
  hypotheticals: [{ id: 's-9-hypo', title: 'Combined offences', facts: 'One transaction constitutes two distinct BNS offences.', question: 'May the court impose the maximum of both?', applicableLaw: 'BNS s. 9; Art. 20(2).', analysis: 'Unless an express provision authorises cumulative punishment, the limit in s. 9 applies.', conclusion: 'Punishment cannot exceed the maximum for any one of the offences.' }],
  distinctions: [],
  misconceptions: [{ id: 's-9-trap', trap: 'Section 9 bars conviction for more than one offence.', correction: 'It limits the quantum of punishment, not the power to convict for multiple offences arising from the same facts where the law so allows.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-9-brief', draftingCategory: 'brief', question: 'Explain the limit on punishment under BNS s. 9.', answer: 'When an offence is made up of several offences, the offender shall not receive a more severe punishment than the court could award for any one of them, unless the statute expressly provides otherwise.', explanation: 'Short note.' },
    { id: 's-9-sub', draftingCategory: 'submissions', question: 'Submissions on s. 9.', answer: 'I. Single transaction. II. Overlapping definitions. III. No express cumulative clause. IV. Prayer for limited punishment.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 9', 'IPC s. 71 (historical)', 'Constitution Art. 20(2)'],
  examTips: ['Distinguish limit on punishment from bar on conviction.'],
  revisionPoints: ['One transaction → punishment limited to maximum of any one offence unless express provision.'],
  relatedTopics: ['s-4', 's-10'],
}

export default content
