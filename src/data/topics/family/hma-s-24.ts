import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 24 of the Hindu Marriage Act, 1955 provides for maintenance pendente lite and expenses of the proceeding. Where either the wife or the husband has no independent income sufficient for support and the necessary expenses of the proceeding, the Court may order the other spouse to pay the expenses of the proceeding and a monthly sum during the proceeding, having regard to the incomes of both parties. The application is to be disposed of, as far as possible, within sixty days of service of notice.',

  study: `Section 24 is the interim-maintenance provision of the Hindu Marriage Act, 1955.

Text: Where in any proceeding under this Act it appears to the court that either the wife or the husband, as the case may be, has no independent income sufficient for her or his support and the necessary expenses of the proceeding, it may, on the application of the wife or the husband, order the respondent to pay to the petitioner the expenses of the proceeding, and monthly during the proceeding such sum as, having regard to the petitioner’s own income and the income of the respondent, it may seem to the court to be reasonable.

Proviso (inserted by Act 49 of 2001): the application for payment of the expenses of the proceeding and such monthly sum during the proceeding shall, as far as possible, be disposed of within sixty days from the date of service of notice on the wife or the husband, as the case may be.

Key features:
• Available in any proceeding under the HMA (divorce, nullity, restitution, judicial separation, etc.).
• Either spouse may apply; the provision is gender-neutral.
• The test is the absence of independent income sufficient for support and the necessary expenses of the proceeding.
• Quantum is discretionary, guided by the incomes of both parties and the needs of the applicant.
• The order operates only during the proceeding (pendente lite).

Section 24 is distinct from permanent alimony under s. 25 and from maintenance under s. 125 of the CrPC / s. 144 of the BNSS and under the Hindu Adoptions and Maintenance Act. Parallel claims may be pursued, but courts avoid double recovery for the same period.`,

  sections: [
    {
      id: 'hma-s-24-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 24 ensures that a spouse who lacks independent means is not disabled from prosecuting or defending a matrimonial proceeding under the HMA for want of funds for support and litigation expenses.',
        'Legislative objective: level the playing field during the pendency of the proceeding so that economic disparity does not dictate the outcome. The sixty-day disposal proviso (2001 amendment) aims at expedition.',
        'Doctrinal foundation: the provision is interim and ancillary. It does not finally determine maintenance rights. Permanent provision is made under s. 25 at or after the decree. The Court’s discretion is guided by the relative incomes and the needs of the applicant.',
      ],
    },
    {
      id: 'hma-s-24-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Trigger: any proceeding under the HMA in which it appears that either spouse has no independent income sufficient for support and the necessary expenses of the proceeding.',
        'Application: by the wife or the husband (gender-neutral).',
        'Relief: (a) expenses of the proceeding; (b) monthly sum during the proceeding.',
        'Quantum: such sum as, having regard to the petitioner’s own income and the income of the respondent, appears reasonable to the Court.',
        'Proviso: application to be disposed of, as far as possible, within sixty days of service of notice.',
      ],
    },
    {
      id: 'hma-s-24-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A proceeding under the HMA is pending.',
        '2. The applicant (wife or husband) has no independent income sufficient for support and the necessary expenses of the proceeding.',
        '3. The respondent has the capacity to pay.',
        '4. The Court, having regard to the incomes of both parties, fixes a reasonable monthly sum and a sum for expenses.',
      ],
    },
    {
      id: 'hma-s-24-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The applicant must place material showing the absence of sufficient independent income and the needs for support and litigation expenses. Income affidavits are standard practice.',
        'The respondent may place material showing his or her own income, liabilities, and the applicant’s resources.',
        'Electronic records (bank statements, salary slips, tax returns) must satisfy BSA s. 63 where treated as primary electronic evidence.',
        'The standard is a preponderance of probabilities; the inquiry is summary and does not require a full trial on the merits of the main petition.',
      ],
    },
    {
      id: 'hma-s-24-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Competent court: the Court seized of the main HMA proceeding (District Court / Family Court).',
        'Procedure: application under s. 24, supported by income affidavit and material; notice to the other spouse; disposal, as far as possible, within sixty days of service.',
        'The order continues during the proceeding and ordinarily ceases on disposal of the main petition (subject to any permanent order under s. 25).',
        'Appeal / revision against interim orders follows the ordinary rules applicable to interlocutory orders of the Family Court / District Court.',
        'No independent limitation period beyond the life of the main proceeding.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'hma',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 'hma-24',
      section: 's. 24',
      title: 'Maintenance pendente lite and expenses of proceedings',
    },
  ],

  examples: [
    {
      id: 'hma-s-24-ill-1',
      title: 'Illustration 1 — Wife with no independent income',
      illustrationType: 'statutory',
      description:
        'W is unemployed and has no independent income. H earns a substantial salary. In a pending divorce petition W applies under s. 24. The Court, having regard to the incomes of both, orders H to pay monthly interim maintenance and a sum towards litigation expenses during the proceeding.',
    },
    {
      id: 'hma-s-24-ill-2',
      title: 'Illustration 2 — Applicant with sufficient independent income',
      illustrationType: 'fail-scenario',
      description:
        'H applies under s. 24 claiming interim maintenance. The material shows that H has independent income more than sufficient for his support and the expenses of the proceeding. The application fails; the statutory condition of “no independent income sufficient for support and the necessary expenses” is not met.',
    },
  ],

  hypotheticals: [
    {
      id: 'hma-s-24-hypo',
      title: 'Chamber Practice Hypothetical — Parallel claims under s. 24 HMA and s. 125 CrPC / s. 144 BNSS',
      facts:
        'H files a petition for divorce under s. 13. W is unemployed. She files an application under s. 24 HMA for interim maintenance and expenses, and simultaneously files a petition under s. 125 CrPC (now s. 144 BNSS) for maintenance.',
      question:
        'Can both proceedings continue, and how should the Court avoid double recovery?',
      applicableLaw: 'HMA s. 24; CrPC s. 125 / BNSS s. 144; principles against double recovery.',
      analysis:
        '1. Section 24 is available in any HMA proceeding and is confined to the pendency of that proceeding.\n2. Section 125 CrPC / s. 144 BNSS is a separate, secular maintenance remedy available independently of any matrimonial proceeding.\n3. Both remedies may be invoked. However, the Court will adjust the quantum so that the applicant does not recover twice for the same period.\n4. Amounts paid under one order are ordinarily directed to be set off against the other for the overlapping period.',
      conclusion:
        'Both routes can proceed, but the Court must ensure that there is no double recovery for the same period. Section 24 remains the specific interim remedy within the HMA proceeding.',
    },
  ],

  distinctions: [
    {
      id: 'hma-s-24-dist-1',
      title: 's. 24 (interim) vs s. 25 (permanent alimony)',
      left: 's. 24',
      right: 's. 25',
      rows: [
        { point: 'Stage', left: 'During the proceeding (pendente lite)', right: 'At the time of the decree or at any time subsequent thereto' },
        { point: 'Purpose', left: 'Support and litigation expenses during the case', right: 'Permanent maintenance and support' },
        { point: 'Form', left: 'Monthly sum + expenses of the proceeding', right: 'Gross sum or monthly/periodical sum; may be secured by charge' },
        { point: 'Duration', left: 'During the proceeding', right: 'For a term not exceeding the life of the applicant (subject to variation)' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'hma-s-24-trap-1',
      trap: 'Only the wife can claim under s. 24.',
      correction:
        'Either the wife or the husband may apply if he or she has no independent income sufficient for support and the necessary expenses of the proceeding. The provision is gender-neutral.',
    },
    {
      id: 'hma-s-24-trap-2',
      trap: 'Section 24 is the same as permanent alimony under s. 25.',
      correction:
        'Section 24 is strictly interim and lasts only during the proceeding. Permanent provision is made under s. 25 at or after the decree.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 'hma-s-24-brief',
      draftingCategory: 'brief',
      question:
        'Explain maintenance pendente lite and expenses of proceedings under Section 24 of the Hindu Marriage Act, 1955.',
      answer: `I. ISSUE
When and on what basis may a spouse obtain interim maintenance and litigation expenses under the HMA?

II. GOVERNING RULE
Section 24 permits either spouse who has no independent income sufficient for support and the necessary expenses of the proceeding to apply for the expenses of the proceeding and a monthly sum during the proceeding. Quantum is fixed having regard to the incomes of both parties. The application is to be disposed of, as far as possible, within sixty days of service of notice.

III. APPLICATION
Verify pending HMA proceeding → absence of sufficient independent income → capacity of the other spouse → fix reasonable quantum.

IV. CONCLUSION
Section 24 is interim, gender-neutral, and distinct from permanent alimony under s. 25.`,
      explanation: 'IRAC note on interim maintenance under s. 24.',
    },
    {
      id: 'hma-s-24-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on an application under HMA s. 24 for interim maintenance and litigation expenses.',
      answer: `I. STATEMENT OF FACTS
[Insert the pending HMA proceeding, the applicant’s lack of independent income, and the respondent’s income.]

II. STATUTORY SCHEME
Section 24 empowers the Court to order the respondent to pay the expenses of the proceeding and a monthly sum during the proceeding where the applicant has no independent income sufficient for support and the necessary expenses.

III. APPLICATION
The applicant has no independent income. The respondent has substantial income. A reasonable monthly sum and a sum for expenses are therefore warranted, having regard to both incomes.

IV. EXPEDITION
The proviso requires disposal, as far as possible, within sixty days of service of notice.

V. PRAYER
[Order for monthly interim maintenance and litigation expenses under s. 24.]`,
      explanation: 'Senior Counsel submissions for interim maintenance under s. 24.',
    },
  ],

  bareActPointers: [
    'HMA s. 24 (entire, including the sixty-day proviso)',
    'HMA s. 25 (permanent alimony — contrast)',
    'CrPC s. 125 / BNSS s. 144 (parallel secular maintenance)',
  ],

  examTips: [
    'Always label s. 24 as interim / pendente lite and contrast it with s. 25.',
    'State that either spouse may apply (gender-neutral).',
    'Mention the sixty-day disposal proviso.',
  ],

  revisionPoints: [
    's. 24 = interim maintenance + litigation expenses during any HMA proceeding.',
    'Test: no independent income sufficient for support and necessary expenses.',
    'Either spouse may apply; quantum guided by both incomes.',
    'Distinct from s. 25 (permanent) and from s. 125 CrPC / s. 144 BNSS.',
  ],

  relatedTopics: ['hma-s-25', 'hma-s-13', 'hma-s-9'],
}

export default content
