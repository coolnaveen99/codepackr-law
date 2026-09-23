import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 24 of the Hindu Marriage Act, 1955 provides for maintenance pendente lite and expenses of proceedings. Where either spouse has no independent income sufficient for support and the necessary expenses of the proceeding, the court may order the other spouse to pay monthly maintenance and a sum for expenses during the proceeding.

Meaning
Applies in any proceeding under the Act. Either husband or wife may apply. Quantum is discretionary, guided by incomes, needs and circumstances. The order lasts during the proceeding (pendente lite).

Related law
Section 25 is permanent alimony. Parallel claims may exist under s. 125 BNSS/CrPC and HAMA; courts avoid double recovery for the same period.

Current-law close
Cite Section 24 of the Hindu Marriage Act, 1955. Stress “pendente lite” and contrast with s. 25.`

export default {
  glance:
    'Section 24 HMA — interim maintenance and litigation expenses during any HMA proceeding when the applicant lacks sufficient independent income.',
  study,
  examples: [
    {
      id: 's24-ex-1',
      title: 'Example — wife with no income',
      description: 'Wife unemployed; husband earns a salary. In a pending divorce she obtains monthly interim maintenance and litigation expenses under s. 24.',
    },
  ],
  hypotheticals: [
    {
      id: 's24-hypo',
      title: 'Classroom problem',
      facts: 'Husband files for divorce. Wife is unemployed and seeks s. 24 HMA and also s. 125 BNSS.',
      question: 'Can both proceed?',
      applicableLaw: 'Section 24 HMA; s. 125 BNSS / CrPC.',
      analysis: 'Both routes can be invoked, but courts avoid double recovery for the same period.',
      conclusion: 'Parallel remedies exist; cite s. 24 HMA as interim.',
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
      draftingCategory: 'brief',
      question: 'Explain maintenance pendente lite under Section 24 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Scope — any HMA proceeding. Test of insufficient independent income. Monthly maintenance and expenses. Discretion of court. Contrast s. 25. Conclusion with citation.',
      explanation: 'Label it interim / pendente lite.',
    },
    {
      id: 's24-q16',
      draftingCategory: 'submissions',
      question: 'Discuss interim and permanent maintenance under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. s. 24 in detail. s. 25 in detail. Factors for quantum. Overlap with s. 125 BNSS and HAMA. Conclusion with HMA citations.',
      explanation: 'Must contrast s. 24 and s. 25 clearly.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 24', 'Hindu Marriage Act, 1955 — s. 25'],
  examTips: ['Label s. 24 as interim / pendente lite.', 'Either spouse can apply.'],
  revisionPoints: ['s. 24 = interim maintenance + expenses during proceeding.', 'Test: no sufficient independent income.', 's. 25 = permanent alimony.'],
} satisfies TopicContent
