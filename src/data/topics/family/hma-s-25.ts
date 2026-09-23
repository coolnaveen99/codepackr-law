import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 25 of the Hindu Marriage Act, 1955 provides for permanent alimony and maintenance. The court may, at the time of passing any decree or at any time subsequent thereto, order one party to pay the other a gross sum or monthly/periodical sums for maintenance and support.

Meaning
Timing: at or after the decree. Form: gross sum or periodical payments, with or without security. Factors: income and property of the parties, conduct, and other circumstances. The court may vary or rescind the order if circumstances change, including remarriage or conduct as the section provides.

Related law
Section 24 is only interim. s. 125 BNSS/CrPC and HAMA may also apply; avoid double recovery.

Current-law close
Cite Section 25 of the Hindu Marriage Act, 1955. Distinguish clearly from s. 24. Mention variation and remarriage/conduct conditions.`

export default {
  glance:
    'Section 25 HMA — permanent alimony and maintenance at or after decree; gross or periodical; variation possible; conduct and remarriage conditions apply.',
  study,
  examples: [
    {
      id: 's25-ex-1',
      title: 'Example — permanent alimony on divorce',
      description: 'Court grants divorce and orders monthly payment under s. 25 after considering both parties’ incomes and standard of living.',
    },
  ],
  hypotheticals: [
    {
      id: 's25-hypo',
      title: 'Classroom problem',
      facts: 'After divorce with s. 25 monthly maintenance in favour of W, W remarries. H applies to rescind.',
      question: 'Effect of remarriage?',
      applicableLaw: 'Section 25 of the Hindu Marriage Act, 1955.',
      analysis: 'Section 25 permits variation or rescission where the party in whose favour the order was made has remarried, as the section provides.',
      conclusion: 'Court may rescind or modify the s. 25 order after remarriage.',
    },
  ],
  distinctions: [
    {
      id: 's25-dist',
      title: 's. 24 vs s. 25 HMA',
      left: 's. 24 Interim',
      right: 's. 25 Permanent',
      rows: [
        { point: 'When', left: 'During proceedings', right: 'At or after decree' },
        { point: 'Form', left: 'Monthly + expenses', right: 'Gross or periodical; may be secured' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's25-m1',
      trap: 'Permanent alimony under s. 25 can only be a one-time lump sum.',
      correction: 'Section 25 allows a gross sum or monthly/periodical payments, with or without security.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's25-q10',
      draftingCategory: 'brief',
      question: 'Explain permanent alimony under Section 25 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Timing and forms of order. Factors for quantum. Variation and conduct/remarriage. Contrast s. 24. Conclusion with citation.',
      explanation: 'Mention variation and remarriage.',
    },
    {
      id: 's25-q16',
      draftingCategory: 'submissions',
      question: 'Discuss the scheme of maintenance under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. s. 24 interim. s. 25 permanent. Factors and variation. Interface with s. 125 BNSS and HAMA. Conclusion with HMA citations.',
      explanation: 'Full scheme s. 24 + s. 25 scores highest.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 25', 'Hindu Marriage Act, 1955 — s. 24'],
  examTips: ['Separate s. 24 (interim) from s. 25 (permanent).', 'Mention variation and remarriage/conduct for s. 25.'],
  revisionPoints: ['s. 25 = permanent alimony at or after decree.', 'Gross or periodical; may be secured.', 'Can be varied; remarriage/conduct matter.'],
} satisfies TopicContent
