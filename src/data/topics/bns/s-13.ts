import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 13 provides for enhanced punishment when a person previously convicted of an offence punishable with three years or more is again convicted of a similar offence. Successor to IPC s. 75.',
  study: `Section 13 is the general enhanced-punishment provision for repeat offenders.\n\nRule: Whoever, having been convicted of an offence punishable under the Sanhita with imprisonment of three years or upwards, again commits an offence punishable under the Sanhita with like imprisonment, is liable to enhanced punishment (typically up to twice the amount of punishment, or as the section specifies, subject to the maximum for the offence).\n\nKey conditions\n• Prior conviction of an offence punishable with ≥ 3 years.\n• Subsequent conviction of an offence also punishable with ≥ 3 years.\n• The enhancement is applied by the court at the sentencing stage after the subsequent conviction is recorded.\n\nThe section does not create a new offence; it only enhances the sentence for the new offence. Cite BNS s. 13 for post-1 July 2024 offences. Prior convictions under the IPC may still be relevant depending on the transitional and savings provisions.`,
  sections: [
    { id: 's-13-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 75. Objective: deter recidivism by enhanced sentences for serious repeat offending.'] },
    { id: 's-13-m2', title: 'Textual Scope', order: 2, content: ['Prior conviction (punishable ≥ 3 years) + subsequent similar conviction → enhanced punishment.'],
    },
    { id: 's-13-m3', title: 'Ingredients', order: 3, content: ['Valid prior conviction of an offence punishable with ≥ 3 years; subsequent conviction of an offence punishable with ≥ 3 years; court applies enhancement.'] },
    { id: 's-13-m4', title: 'Evidence', order: 4, content: ['Prior conviction is proved by the judgment / certified copy; the subsequent offence is proved in the ordinary way.'] },
    { id: 's-13-m5', title: 'Procedure', order: 5, content: ['Enhancement is a sentencing issue after conviction for the new offence; the accused must have notice of the reliance on the prior conviction.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-13', section: 's. 13', title: 'Enhanced punishment for certain offences after previous conviction' }],
  examples: [
    { id: 's-13-ex1', title: 'Enhancement applied', illustrationType: 'practical', description: 'A was previously convicted of an offence punishable with 5 years. He is again convicted of an offence punishable with 4 years. The court may enhance the sentence under s. 13 within the statutory limits.' },
    { id: 's-13-ex2', title: 'Prior offence below threshold', illustrationType: 'fail-scenario', description: 'If the prior conviction was for an offence punishable with less than 3 years, s. 13 does not apply.' },
  ],
  hypotheticals: [{ id: 's-13-hypo', title: 'Repeat offender', facts: 'Prior conviction for an offence punishable with 7 years; new conviction for an offence punishable with 5 years.', question: 'May the court enhance?', applicableLaw: 'BNS s. 13.', analysis: 'Both offences meet the ≥ 3 years threshold; enhancement is available.', conclusion: 'Yes, subject to the maximum limits applicable to the new offence.' }],
  distinctions: [],
  misconceptions: [{ id: 's-13-trap', trap: 'Section 13 creates a separate “habitual offender” offence.', correction: 'It only enhances the punishment for the new offence; it does not create a distinct offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-13-brief', draftingCategory: 'brief', question: 'Explain enhanced punishment under BNS s. 13.', answer: 'A person previously convicted of an offence punishable with ≥ 3 years who is again convicted of a similar offence is liable to enhanced punishment under s. 13.', explanation: 'Short note.' },
    { id: 's-13-sub', draftingCategory: 'submissions', question: 'Submissions on enhancement under s. 13.', answer: 'I. Prior conviction proved. II. Threshold met. III. Enhancement within limits. IV. Prayer for / against enhancement.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 13', 'IPC s. 75 (historical)'],
  examTips: ['State the ≥ 3 years threshold for both prior and subsequent offences.', 'Emphasise that it is a sentencing enhancement, not a new offence.'],
  revisionPoints: ['Prior + subsequent offence each punishable ≥ 3 years → enhanced punishment.', 'Not a separate offence.'],
  relatedTopics: ['s-4', 's-9'],
}

export default content
