import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 25 of the Hindu Marriage Act, 1955 provides for permanent alimony and maintenance. The court exercising jurisdiction under the Act may, at the time of passing any decree or at any time subsequent thereto, order one party to pay the other a gross sum or monthly/periodical sums for maintenance and support.

Introduction
Section 25 is the permanent-maintenance provision. Section 24 is only interim. Quantum and conditions under s. 25 are exam favourites.

Meaning and concept
- Timing: at the time of the decree or later.
- Form: gross sum, or monthly/periodical payments, with or without security.
- Factors: income and property of the parties, conduct of the parties, and other circumstances of the case.
- Variation: court may modify or rescind the order if circumstances change.
- Conduct bar: if the party in whose favour the order is made remarries or does not remain chaste (as the section provides for the respective spouses), the order may be varied or rescinded in the manner laid down.

Why the rule exists
A decree of divorce or nullity should not leave a dependent spouse without support. Permanent alimony is the statutory tool inside the HMA proceeding itself.

How the rule operates
- Application in the matrimonial proceeding or subsequent application under s. 25.
- Court balances needs and capacity, and may consider misconduct.
- Order can be secured (e.g., charge on property) where appropriate.

Relationship with other laws
s. 125 BNSS/CrPC remains available in many situations. HAMA 1956 also provides maintenance rights. Choose the forum consciously and avoid double recovery.

Current-law close
Cite Section 25 of the Hindu Marriage Act, 1955. Distinguish clearly from s. 24. Mention variation and conduct conditions.`

export default {
  glance:
    'Section 25 HMA — permanent alimony and maintenance at or after decree; gross or periodical; variation possible; conduct and remarriage conditions apply.',
  study,
  examples: [
    {
      id: 's25-ex-1',
      title: 'Example — permanent alimony on divorce',
      description:
        'Court grants divorce and orders the husband to pay the wife a monthly sum under s. 25, after considering both parties’ incomes and the standard of living during the marriage.',
    },
  ],
  hypotheticals: [
    {
      id: 's25-hypo',
      title: 'Classroom problem',
      facts:
        'After a divorce decree with s. 25 monthly maintenance in favour of W, W remarries. H applies to rescind the order.',
      question: 'What is the effect of remarriage?',
      applicableLaw: 'Section 25 of the Hindu Marriage Act, 1955.',
      analysis:
        'Section 25 permits the court to vary, modify or rescind the order if the party in whose favour it was made has remarried (as provided in the section). Remarriage is a classic ground for termination or variation of permanent alimony.',
      conclusion:
        'Court may rescind or modify the s. 25 order after remarriage; cite the section precisely.',
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
        { point: 'Variation', left: 'Ends with proceeding (as such)', right: 'Can be varied / rescinded later' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's25-m1',
      trap: 'Permanent alimony under s. 25 can only be a one-time lump sum.',
      correction:
        'Section 25 allows a gross sum or monthly/periodical payments, with or without security.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's25-q10',
      marks: 10,
      question: 'Explain permanent alimony under Section 25 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Timing and forms of order. Factors for quantum. Variation and conduct/remarriage. Contrast s. 24. Conclusion with citation.',
    },
    {
      id: 's25-q16',
      marks: 16,
      question: 'Discuss the scheme of maintenance under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. s. 24 interim. s. 25 permanent. Factors and variation. Interface with s. 125 BNSS and HAMA. Conclusion.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 25', 'Hindu Marriage Act, 1955 — s. 24'],
  examTips: [
    'Always separate s. 24 (interim) from s. 25 (permanent).',
    'Mention variation and remarriage/conduct conditions for s. 25.',
  ],
  revisionPoints: [
    's. 25 = permanent alimony at or after decree.',
    'Gross or periodical; court may secure the order.',
    'Can be varied; remarriage/conduct matter.',
  ],
} satisfies TopicContent
