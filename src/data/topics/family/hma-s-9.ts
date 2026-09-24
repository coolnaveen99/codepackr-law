import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 9 of the Hindu Marriage Act, 1955 — restitution of conjugal rights. When either spouse has, without reasonable excuse, withdrawn from the society of the other, the aggrieved party may petition for a decree directing the other to resume cohabitation.

Introduction
Restitution seeks to restore consortium. Modern courts scrutinise petitions so the remedy is not used as harassment. Non-compliance with a restitution decree for one year or more can support divorce under s. 13(1A).

Ingredients
(1) Valid marriage; (2) withdrawal by the respondent from the petitioner’s society; (3) withdrawal without reasonable excuse. Once withdrawal is shown, the burden of proving reasonable excuse lies on the respondent (Explanation to s. 9). Reasonable excuse includes cruelty and conduct making cohabitation unsafe or improper.

How the rule operates
Petition in the district court under HMA procedure. The court has discretion and will not force cohabitation where unjust. The decree does not authorise physical detention; practical consequence often flows through s. 13(1A).

Constitutional context
Challenges on privacy and autonomy have been raised. Saroj Rani upheld constitutional validity; courts still apply the section with a rights-sensitive approach.

Current-law close
Cite Section 9 of the Hindu Marriage Act, 1955. State the three ingredients, the Explanation on burden, and the link to s. 13(1A).`

export default {
  glance:
    'Section 9 HMA — restitution of conjugal rights; withdrawal without reasonable excuse; burden of excuse on respondent; non-compliance can feed s. 13(1A) divorce.',
  study,
  examples: [
    {
      id: 's9-ex-1',
      title: 'Example — restitution succeeds',
      description: 'Wife leaves without alleging cruelty or other excuse. Husband petitions under s. 9. Court finds no reasonable excuse and decrees restitution.',
    },
    {
      id: 's9-ex-2',
      title: 'Example — reasonable excuse',
      description: 'Husband petitions under s. 9. Wife proves continuous physical cruelty. Withdrawal is with reasonable excuse; petition dismissed.',
    },
  ],
  hypotheticals: [
    {
      id: 's9-hypo',
      title: 'Classroom problem',
      facts: 'After a restitution decree in favour of H, W does not resume cohabitation for more than one year. H seeks divorce under s. 13(1A).',
      question: 'Can the restitution decree support divorce?',
      applicableLaw: 'Sections 9 and 13(1A) of the Hindu Marriage Act, 1955.',
      analysis: 'Section 13(1A) allows divorce if cohabitation is not resumed for one year or more after a decree of restitution.',
      conclusion: 'Yes — non-compliance with s. 9 for the prescribed period is a ground under s. 13(1A).',
    },
  ],
  distinctions: [
    {
      id: 's9-dist',
      title: 'Restitution (s. 9) vs Judicial separation (s. 10)',
      left: 'Restitution (s. 9)',
      right: 'Judicial separation (s. 10)',
      rows: [
        { point: 'Object', left: 'Restore cohabitation', right: 'Relieve duty to cohabit; marriage continues' },
        { point: 'Ground', left: 'Withdrawal without reasonable excuse', right: 'Any ground available for divorce' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's9-m1',
      trap: 'A restitution decree forces physical cohabitation at once.',
      correction: 'Enforcement is limited; the main practical route is often s. 13(1A) after non-compliance.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's9-q10',
      marks: 10,
      question: 'Explain restitution of conjugal rights under Section 9 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction — s. 9 HMA. Ingredients: valid marriage, withdrawal from society, absence of reasonable excuse. Burden of proving excuse on respondent (Explanation). Discretion of court. Link to s. 13(1A). Conclusion with full citation.',
      explanation: 'State the Explanation on burden expressly.',
    },
    {
      id: 's9-q16',
      marks: 16,
      question: 'Critically examine restitution of conjugal rights under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction and policy. Ingredients and procedure. Reasonable excuse and case-law approach. Constitutional concerns (privacy/autonomy) and Saroj Rani. Relationship with judicial separation and s. 13(1A) divorce. Conclusion — remedy survives but is applied cautiously; cite s. 9 HMA.',
      explanation: 'Mention Saroj Rani and s. 13(1A).',
    },
  ],
  cases: [
    {
      name: 'Saroj Rani v. Sudarshan Kumar Chadha',
      year: 1984,
      citation: 'AIR 1984 SC 1562',
      holding: 'Upheld the constitutional validity of s. 9 HMA.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 9', 'Hindu Marriage Act, 1955 — s. 13(1A)'],
  examTips: [
    'Always write “Section 9 of the Hindu Marriage Act, 1955”.',
    'State the three ingredients and the Explanation on burden.',
    'Mention the s. 13(1A) consequence of non-compliance.',
  ],
  revisionPoints: [
    's. 9 = restitution; withdrawal without reasonable excuse.',
    'Burden of reasonable excuse on respondent.',
    'Non-compliance ≥ 1 year → s. 13(1A).',
  ],
} satisfies TopicContent
