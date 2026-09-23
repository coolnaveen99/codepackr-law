import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 6 provides that in calculating fractions of terms of punishment, imprisonment for life is to be reckoned as equivalent to imprisonment for twenty years. It is the successor to IPC s. 57 and is used when a statute refers to a fraction of a life sentence.',
  study: `Section 6 is a pure calculation rule. When any provision of the Sanhita or of any other law requires a fraction of a term of punishment to be calculated, and the term is imprisonment for life, that life term is treated as twenty years for the purpose of the fraction.\n\nIt does not convert life imprisonment into a fixed twenty-year sentence for all purposes; it only supplies a numerical equivalent when a fraction is required (for example, in certain remission or consecutive-sentence calculations).\n\nCite BNS s. 6 for offences on or after 1 July 2024; the substance is identical to the old IPC s. 57.`,
  sections: [
    { id: 's-6-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 57. Pure interpretive/calculation rule.'] },
    { id: 's-6-m2', title: 'Text', order: 2, content: ['Life imprisonment = 20 years for the purpose of calculating fractions of terms of punishment.'] },
    { id: 's-6-m3', title: 'Ingredients', order: 3, content: ['A legal provision requires a fraction of a term; the term in question is life imprisonment; apply the 20-year equivalent.'] },
    { id: 's-6-m4', title: 'Evidence', order: 4, content: ['No evidentiary issue; it is a rule of calculation.'] },
    { id: 's-6-m5', title: 'Procedure', order: 5, content: ['Applied by courts and executive authorities when fractions arise in sentencing or remission mathematics.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-6', section: 's. 6', title: 'Fractions of terms of punishment' }],
  examples: [
    { id: 's-6-ex1', title: 'Fraction of life', illustrationType: 'practical', description: 'A statute requires one-half of the term. If the term is life, s. 6 treats life as 20 years, so the half is 10 years for calculation purposes.' },
    { id: 's-6-ex2', title: 'Not a conversion of life', illustrationType: 'fail-scenario', description: 'Section 6 does not mean that every life sentence ends at 20 years. It only supplies a figure when a fraction is needed.' },
  ],
  hypotheticals: [{ id: 's-6-hypo', title: 'Fraction hypothetical', facts: 'A provision requires calculation of one-fourth of a life sentence.', question: 'What figure is used?', applicableLaw: 'BNS s. 6.', analysis: 'Life is reckoned as 20 years; one-fourth is 5 years for the calculation.', conclusion: 'Use 5 years as the fractional figure.' }],
  distinctions: [],
  misconceptions: [{ id: 's-6-trap', trap: 'Life imprisonment always means 20 years because of s. 6.', correction: 'Section 6 only supplies a 20-year equivalent when a fraction of the term must be calculated. Life remains imprisonment for the remainder of natural life unless commuted or remitted.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-6-brief', draftingCategory: 'brief', question: 'What is the rule in BNS s. 6?', answer: 'For calculating fractions of terms of punishment, imprisonment for life is reckoned as equivalent to imprisonment for twenty years.', explanation: 'One-line rule.' },
    { id: 's-6-sub', draftingCategory: 'submissions', question: 'Submissions on s. 6.', answer: 'I. Text. II. Limited purpose (fractions only). III. Does not convert life into a fixed term. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 6', 'IPC s. 57 (historical)'],
  examTips: ['State clearly that s. 6 is only for fraction calculations.', 'Do not tell the examiner that life = 20 years for all purposes.'],
  revisionPoints: ['Life = 20 years only for calculating fractions.', 'Does not fix the duration of life imprisonment.'],
  relatedTopics: ['s-4', 's-5'],
}

export default content
