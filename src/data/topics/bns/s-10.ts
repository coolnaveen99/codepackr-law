import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 10 deals with the case where the court is doubtful of which of several offences the accused is guilty. The accused may be punished for the offence carrying the lowest punishment. Successor to IPC s. 72.',
  study: `Section 10 is a residual sentencing rule for doubt among alternative offences.\n\nRule: In all cases in which judgment is given that a person is guilty of one of several offences specified in the judgment, but that it is doubtful of which of those offences he is guilty, the offender shall be punished for the offence for which the lowest punishment is provided (if the same punishment is not provided for all).\n\nPractical use: when the evidence establishes that the accused committed one of two or more offences but does not clearly establish which, the court convicts in the alternative and awards the lowest of the available punishments.\n\nCite BNS s. 10 for post-1 July 2024 offences.`,
  sections: [
    { id: 's-10-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 72. Objective: fair residual rule when the precise offence is doubtful.'] },
    { id: 's-10-m2', title: 'Textual Scope', order: 2, content: ['Judgment of guilt of one of several offences; doubt as to which; punish for the lowest-punishment offence.'] },
    { id: 's-10-m3', title: 'Ingredients', order: 3, content: ['Evidence establishes one of several offences; identity of the precise offence remains doubtful; court applies the lowest-punishment rule.'] },
    { id: 's-10-m4', title: 'Evidence', order: 4, content: ['The doubt must be genuine; if the evidence clearly points to the graver offence, s. 10 does not apply.'] },
    { id: 's-10-m5', title: 'Procedure', order: 5, content: ['Alternative findings may be recorded; sentence follows the lowest maximum.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-10', section: 's. 10', title: 'Punishment when doubtful of which of several offences' }],
  examples: [
    { id: 's-10-ex1', title: 'Doubt between two offences', illustrationType: 'practical', description: 'Evidence shows the accused committed either offence A (max 3 years) or offence B (max 7 years), but not which. Under s. 10 the court punishes as for offence A.' },
    { id: 's-10-ex2', title: 'No genuine doubt', illustrationType: 'fail-scenario', description: 'If the evidence clearly establishes the graver offence, the court must convict for that offence; s. 10 is not a device to reduce a clear case.' },
  ],
  hypotheticals: [{ id: 's-10-hypo', title: 'Doubtful offence', facts: 'Two possible offences with different maxima; evidence is equivocal.', question: 'Which punishment applies?', applicableLaw: 'BNS s. 10.', analysis: 'The lowest of the available punishments is awarded.', conclusion: 'Sentence for the lesser offence.' }],
  distinctions: [],
  misconceptions: [{ id: 's-10-trap', trap: 'Section 10 allows the court to acquit when in doubt.', correction: 'It assumes a finding of guilt of one of several offences; it only selects the lowest punishment among those offences.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-10-brief', draftingCategory: 'brief', question: 'Explain BNS s. 10.', answer: 'When the court finds the accused guilty of one of several offences but is doubtful which, the accused is punished for the offence with the lowest punishment.', explanation: 'Short note.' },
    { id: 's-10-sub', draftingCategory: 'submissions', question: 'Submissions on s. 10.', answer: 'I. Genuine doubt among offences. II. Lowest-punishment rule. III. Prayer for sentence under the lesser offence.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 10', 'IPC s. 72 (historical)'],
  examTips: ['Emphasise that guilt of one of the offences is already found; only the identity is doubtful.'],
  revisionPoints: ['Doubt as to which of several offences → lowest punishment.'],
  relatedTopics: ['s-9', 's-4'],
}

export default content
