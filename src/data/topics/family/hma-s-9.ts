import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 9 of the Hindu Marriage Act, 1955 — restitution of conjugal rights. When either spouse has, without reasonable excuse, withdrawn from the society of the other, the aggrieved party may petition for a decree directing the other to resume cohabitation.

Introduction
Restitution is a unique matrimonial remedy. It does not dissolve the marriage; it seeks to restore the consortium that marriage creates. Modern courts scrutinise the petition carefully so that the remedy is not used as a weapon of harassment.

Meaning and concept
The petitioner must prove: (1) a valid marriage; (2) withdrawal by the respondent from the society of the petitioner; (3) the withdrawal is without reasonable excuse. The burden of proving reasonable excuse is on the respondent once withdrawal is shown (Explanation to s. 9).

Why the rule exists
Historically, restitution protected the marital home. Today it is often a stepping stone: non-compliance with a restitution decree for one year or more can become a ground of divorce under s. 13(1A).

How the rule operates
- Petition lies in the district court under the HMA procedure.
- Reasonable excuse includes cruelty, desertion by the petitioner, or other conduct that makes cohabitation unsafe or improper.
- The court has discretion; it will not force cohabitation where it would be unjust.
- Decree for restitution does not compel physical detention; enforcement is primarily through consequences under other provisions (including s. 13(1A)).

Exceptions / limits
Constitutional challenges to s. 9 have been raised (privacy, autonomy). The provision remains on the statute book; courts apply it with a rights-sensitive approach. Always distinguish restitution (s. 9) from judicial separation (s. 10) and divorce (s. 13).

Current-law close
Cite Section 9 of the Hindu Marriage Act, 1955. State the three ingredients, the burden on reasonable excuse, and the link to s. 13(1A) divorce.`

export default {
  glance:
    'Section 9 HMA — restitution of conjugal rights. Withdrawal from society without reasonable excuse; burden of excuse on respondent; non-compliance can feed s. 13(1A) divorce.',
  study,
  examples: [
    {
      id: 's9-ex-1',
      title: 'Example — restitution succeeds',
      description:
        'Wife leaves the matrimonial home without alleging cruelty or other excuse. Husband petitions under s. 9. Court finds no reasonable excuse and decrees restitution.',
    },
    {
      id: 's9-ex-2',
      title: 'Example — reasonable excuse',
      description:
        'Husband petitions under s. 9. Wife proves continuous physical cruelty. Withdrawal is with reasonable excuse; petition is dismissed.',
    },
  ],
  hypotheticals: [
    {
      id: 's9-hypo',
      title: 'Classroom problem',
      facts:
        'After a restitution decree in favour of H, W does not resume cohabitation for more than one year. H later seeks divorce under s. 13(1A).',
      question: 'Can the restitution decree support a divorce petition?',
      applicableLaw: 'Sections 9 and 13(1A) of the Hindu Marriage Act, 1955.',
      analysis:
        'Section 13(1A) allows either party to seek divorce if there has been no resumption of cohabitation for one year or more after a decree of restitution. The earlier s. 9 decree is the statutory foundation.',
      conclusion:
        'Yes — non-compliance with a s. 9 decree for the prescribed period is an independent ground under s. 13(1A). Always name both sections.',
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
        { point: 'Follow-on', left: 'Can lead to s. 13(1A) divorce', right: 'Can also lead to s. 13(1A) divorce' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's9-m1',
      trap: 'A restitution decree forces the spouse to live together physically at once.',
      correction:
        'The decree is a judicial direction. Enforcement is limited; the main practical consequence is often the s. 13(1A) divorce route after non-compliance.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's9-q10',
      marks: 10,
      question: 'Explain restitution of conjugal rights under Section 9 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction — s. 9 HMA. Ingredients: valid marriage, withdrawal from society, absence of reasonable excuse. Burden of proving excuse on respondent (Explanation). Discretion of court. Link to s. 13(1A). Conclusion with correct citation.',
    },
    {
      id: 's9-q16',
      marks: 16,
      question: 'Critically examine the remedy of restitution of conjugal rights under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction and policy. Ingredients and procedure. Reasonable excuse and case-law approach. Constitutional concerns (privacy/autonomy). Relationship with judicial separation and divorce. Conclusion — remedy survives but is applied cautiously; always cite s. 9 HMA.',
    },
  ],
  cases: [
    {
      name: 'Saroj Rani v. Sudarshan Kumar Chadha',
      year: 1984,
      citation: 'AIR 1984 SC 1562',
      holding: 'Supreme Court upheld the constitutional validity of s. 9 HMA.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 9', 'Hindu Marriage Act, 1955 — s. 13(1A)'],
  examTips: [
    'Always write “Section 9 of the Hindu Marriage Act, 1955”.',
    'State the three ingredients and the Explanation on burden of proof.',
    'Mention the s. 13(1A) consequence of non-compliance.',
  ],
  revisionPoints: [
    's. 9 = restitution; withdrawal without reasonable excuse.',
    'Burden of reasonable excuse on respondent.',
    'Non-compliance ≥ 1 year → s. 13(1A) divorce route.',
  ],
} satisfies TopicContent
