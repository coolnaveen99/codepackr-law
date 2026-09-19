import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 24 of the Hindu Marriage Act, 1955 provides for maintenance pendente lite and expenses of proceedings. Where either spouse has no independent income sufficient for support and the necessary expenses of the proceeding, the court may order the other spouse to pay monthly maintenance and a sum for expenses during the pendency of the proceeding.

Introduction
Section 24 is the interim-maintenance provision of the HMA. Section 25 is permanent alimony. Do not interchange them.

Meaning and concept
Applicability: any proceeding under the Act (petition for restitution, judicial separation, nullity, divorce, etc.).
Test: whether the applicant has no independent income sufficient for her or his support and for the necessary expenses of the proceeding.
Order: monthly sum during the proceeding plus costs/expenses; amount is discretionary, guided by the incomes and conduct of the parties and other circumstances of the case.

Why the rule exists
Matrimonial litigation should not become impossible for the economically weaker spouse. Interim support levels the field until final relief.

How the rule operates
- Application in the pending HMA proceeding.
- Either husband or wife may apply.
- Court looks at income affidavits, needs, and paying capacity.
- Order lasts during the proceeding (pendente lite).

Relationship with other laws
Maintenance can also be claimed under s. 125 BNSS/CrPC and under the Hindu Adoptions and Maintenance Act, 1956. Courts avoid double recovery for the same period but the statutory routes are distinct.

Current-law close
Cite Section 24 of the Hindu Marriage Act, 1955. Stress “pendente lite” and contrast with s. 25 permanent alimony.`

export default {
  glance:
    'Section 24 HMA — interim maintenance and litigation expenses during any HMA proceeding when the applicant lacks sufficient independent income.',
  study,
  examples: [
    {
      id: 's24-ex-1',
      title: 'Example — wife with no income',
      description:
        'Wife has no job. Husband earns a steady salary. In a pending divorce petition she applies under s. 24 and obtains monthly interim maintenance plus a sum towards litigation expenses.',
    },
  ],
  hypotheticals: [
    {
      id: 's24-hypo',
      title: 'Classroom problem',
      facts:
        'Husband files for divorce. Wife is unemployed. She seeks interim maintenance under s. 24 and also files an application under s. 125 BNSS.',
      question: 'Can both proceed?',
      applicableLaw: 'Section 24 HMA; s. 125 BNSS / CrPC.',
      analysis:
        'Both routes can be invoked, but courts ensure that the spouse is not enriched twice for the same period. Quantum under each proceeding takes the other into account.',
      conclusion:
        'Parallel remedies exist; avoid double recovery; cite s. 24 HMA clearly as interim.',
    },
  ],
  distinctions: [
    {
      id: 's24-dist',
      title: 'Interim (s. 24) vs Permanent (s. 25)',
      left: 's. 24',
      right: 's. 25',
      rows: [
        { point: 'Stage', left: 'During the proceeding', right: 'At or after decree' },
        { point: 'Purpose', left: 'Support + litigation expenses', right: 'Permanent alimony / maintenance' },
        { point: 'Duration', left: 'Pendente lite', right: 'As directed (often continuing)' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's24-m1',
      trap: 'Only the wife can claim under s. 24.',
      correction: 'Either spouse may apply if they lack sufficient independent income.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's24-q10',
      marks: 10,
      question: 'Explain maintenance pendente lite under Section 24 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Scope — any HMA proceeding. Test of insufficient independent income. Monthly maintenance and expenses. Discretion of court. Contrast s. 25. Conclusion with citation.',
    },
    {
      id: 's24-q16',
      marks: 16,
      question: 'Discuss interim and permanent maintenance under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. s. 24 in detail. s. 25 in detail. Factors for quantum. Overlap with s. 125 BNSS and HAMA. Conclusion.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 24', 'Hindu Marriage Act, 1955 — s. 25'],
  examTips: [
    'Label s. 24 as interim / pendente lite.',
    'Either spouse can apply.',
  ],
  revisionPoints: [
    's. 24 = interim maintenance + expenses during proceeding.',
    'Test: no sufficient independent income.',
    's. 25 = permanent alimony after/at decree.',
  ],
} satisfies TopicContent
