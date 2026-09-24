import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 13 provides enhanced punishment (imprisonment for life or up to ten years) for a person who, having been convicted by a Court in India of an offence punishable under Chapter X or Chapter XVII with imprisonment of three years or upwards, is again found guilty of any offence punishable under either of those Chapters with like imprisonment. It is the successor to IPC s. 75 and is confined to those two Chapters.',

  study: `Section 13 is a targeted repeat-offender enhancement, not a general habitual-offender provision.

Text: Whoever, having been convicted by a Court in India of an offence punishable under Chapter X or Chapter XVII of this Sanhita with imprisonment of either description for a term of three years or upwards, shall be guilty of any offence punishable under either of those Chapters with like imprisonment for the like term, shall be subject for every such subsequent offence to imprisonment for life, or to imprisonment of either description for a term which may extend to ten years.

Key limits:
• Prior conviction must be by a Court in India.
• Prior offence must be punishable under Chapter X (Offences against Public Justice? — actually check mapping; in BNS Chapter X is Contempts of the Lawful Authority of Public Servants, Chapter XVII is Offences against Property) with ≥ 3 years.
• Subsequent offence must also be punishable under Chapter X or XVII with like imprisonment (≥ 3 years).
• Enhancement is to life or up to 10 years for every such subsequent offence.

The section does not create a new offence; it only enhances the sentence for the new offence once the statutory conditions are met. Notice of reliance on the prior conviction must be given so that the accused can meet it.

Date-of-offence rule and transitional issues: for the subsequent offence committed on or after 1 July 2024 cite BNS s. 13. Prior convictions under the corresponding IPC Chapters may remain relevant subject to the savings clause and the requirement of a conviction by a Court in India.`,

  sections: [
    {
      id: 's-13-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 13 succeeds IPC section 75. The BNS retains the enhancement but confines it expressly to offences under Chapter X and Chapter XVII that carry a maximum of three years or more.',
        'Legislative objective: deter recidivism in the specific fields of offences against the lawful authority of public servants and offences against property by exposing the repeat offender to a substantially higher maximum (life or ten years).',
        'Doctrinal foundation: the section is a sentencing enhancement, not a substantive offence. The prior conviction is a fact that must be proved (or admitted) at the sentencing stage after the subsequent conviction is recorded. The accused is entitled to notice and an opportunity to contest the prior conviction or its applicability.',
      ],
    },
    {
      id: 's-13-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Prior conviction: by a Court in India, of an offence punishable under Chapter X or Chapter XVII with imprisonment of either description for a term of three years or upwards.',
        'Subsequent offence: any offence punishable under either of those Chapters with like imprisonment for the like term.',
        'Consequence: for every such subsequent offence the offender is subject to imprisonment for life, or to imprisonment of either description for a term which may extend to ten years.',
        'The enhancement is available for every subsequent qualifying offence; it is not limited to a single enhancement.',
      ],
    },
    {
      id: 's-13-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A prior conviction by a Court in India.',
        '2. The prior offence was punishable under Chapter X or Chapter XVII with imprisonment of either description for three years or upwards.',
        '3. The subsequent offence (of which the accused has now been convicted) is also punishable under Chapter X or Chapter XVII with like imprisonment for the like term.',
        '4. The Court, after notice to the accused and proof (or admission) of the prior conviction, applies the enhanced maximum of life or up to ten years.',
      ],
    },
    {
      id: 's-13-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The subsequent offence must be proved beyond reasonable doubt in the ordinary way (BSA s. 104).',
        'The prior conviction is a sentencing fact. It is ordinarily proved by a certified copy of the judgment or other admissible record. The burden of proving the prior conviction lies on the prosecution; once a certified copy is produced, the burden may shift to the accused to show that it is not genuine or does not satisfy the statutory conditions.',
        'Electronic court records relied upon must satisfy BSA s. 63 where they are treated as primary electronic evidence.',
      ],
    },
    {
      id: 's-13-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Enhancement is a sentencing issue. After conviction for the subsequent offence, the prosecution must give notice of its intention to rely on the prior conviction. The accused must be given an opportunity to admit or contest it.',
        'The Court then decides whether the statutory conditions are met and, if so, may impose a sentence up to life or ten years.',
        'Appeal against the enhanced sentence lies to the ordinary appellate forum under the BNSS.',
        'No independent limitation period attaches to the enhancement itself; it is part of the sentence for the subsequent offence.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-13',
      section: 's. 13',
      title: 'Enhanced punishment for certain offences after previous conviction',
    },
  ],

  examples: [
    {
      id: 's-13-ill-1',
      title: 'Illustration 1 — Qualifying prior and subsequent offences',
      illustrationType: 'statutory',
      description:
        'L was previously convicted by an Indian court of an offence under Chapter XVII punishable with five years’ imprisonment. He is now convicted of another offence under Chapter XVII punishable with four years. Both legs of s. 13 are satisfied. The Court may sentence him to imprisonment for life or to a term up to ten years for the subsequent offence.',
    },
    {
      id: 's-13-ill-2',
      title: 'Illustration 2 — Prior offence outside the Chapters or below threshold',
      illustrationType: 'fail-scenario',
      description:
        'M was previously convicted of an offence punishable with only two years, or of an offence under a Chapter other than X or XVII. Section 13 does not apply; the Court must sentence for the new offence within its ordinary maximum.',
    },
  ],

  hypotheticals: [
    {
      id: 's-13-hypo',
      title: 'Chamber Practice Hypothetical — Notice and proof of prior conviction',
      facts:
        'N is convicted of a Chapter XVII offence punishable with seven years. The prosecution produces a certified copy of an earlier conviction under the same Chapter for an offence punishable with five years and asks the Court to enhance under s. 13. N has not been given prior notice of the intended reliance on the previous conviction.',
      question:
        'May the Court proceed to enhance without notice?',
      applicableLaw: 'BNS s. 13; principles of natural justice and fair sentencing procedure under the BNSS and Art. 21.',
      analysis:
        '1. Threshold: The statutory conditions of s. 13 appear to be met on the face of the record.\n2. Procedural fairness: Enhancement is a significant sentencing consequence. The accused is entitled to notice of the prior conviction and an opportunity to admit or contest it before the enhanced maximum is applied.\n3. Consequence: Proceeding to enhance without notice violates fair-procedure requirements. The Court must give notice and hear the accused on the prior conviction before deciding whether to apply s. 13.',
      conclusion:
        'Enhancement without prior notice is impermissible. The Court must afford N an opportunity to meet the allegation of the prior conviction before any enhanced sentence is passed.',
    },
  ],

  distinctions: [
    {
      id: 's-13-dist-1',
      title: 's. 13 enhancement vs Ordinary maximum for the subsequent offence',
      left: 's. 13 enhanced maximum',
      right: 'Ordinary maximum of the subsequent offence',
      rows: [
        { point: 'When available', left: 'Only when both prior and subsequent offences fall under Ch. X or XVII and each carries ≥ 3 years', right: 'Always available according to the offence section' },
        { point: 'Ceiling', left: 'Life or up to 10 years', right: 'The maximum fixed by the particular offence section' },
        { point: 'Nature', left: 'Sentencing enhancement, not a new offence', right: 'The ordinary punishment for the offence of which the accused has been convicted' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-13-trap-1',
      trap: 'Section 13 creates a separate “habitual offender” or “repeat offender” offence.',
      correction:
        'It does not. It only enhances the punishment for the subsequent qualifying offence. The accused is still convicted only of that subsequent offence.',
    },
    {
      id: 's-13-trap-2',
      trap: 'Any prior conviction for a serious offence triggers s. 13.',
      correction:
        'Only a prior conviction under Chapter X or Chapter XVII for an offence punishable with three years or upwards, followed by a subsequent offence under either of those Chapters with like imprisonment, attracts the enhancement.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-13-brief',
      draftingCategory: 'brief',
      question:
        'Explain the enhanced-punishment rule in Section 13 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
When may a Court impose an enhanced sentence of life or up to ten years for a subsequent offence?

II. GOVERNING RULE
Section 13 applies when the accused has a prior conviction by a Court in India of an offence under Chapter X or XVII punishable with ≥ 3 years, and is again convicted of an offence under either of those Chapters with like imprisonment. The enhanced maximum is life or up to 10 years.

III. APPLICATION
Prove (or obtain admission of) the prior conviction after notice → confirm both offences meet the Chapter and term thresholds → apply the enhanced maximum if the conditions are satisfied.

IV. CONCLUSION
It is a sentencing enhancement confined to Chapters X and XVII; it does not create a new offence.`,
      explanation: 'IRAC note on s. 13.',
    },
    {
      id: 's-13-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on the applicability of the enhanced maximum under BNS s. 13, including the requirements of notice and proof of the prior conviction.',
      answer: `I. STATEMENT OF FACTS
[Insert the subsequent conviction, the alleged prior conviction, and whether notice was given.]

II. STATUTORY CONDITIONS
Prior conviction by a Court in India under Ch. X or XVII (≥ 3 years) + subsequent offence under either Chapter with like imprisonment → enhanced maximum of life or 10 years.

III. PROCEDURAL FAIRNESS
The accused is entitled to notice of the intended reliance on the prior conviction and an opportunity to admit or contest it before enhancement is applied.

IV. APPLICATION / REBUTTAL
[Apply the facts to the conditions; if notice was omitted or the prior conviction does not satisfy the Chapter/term thresholds, enhancement is unavailable.]

V. PRAYER
[Prayer for ordinary maximum, or for enhancement only after proper notice and proof, as the case may be.]`,
      explanation: 'Senior Counsel submissions on the repeat-offender enhancement.',
    },
  ],

  bareActPointers: [
    'BNS s. 13 (entire)',
    'BNS Chapters X and XVII (the only Chapters that attract the enhancement)',
    'IPC s. 75 (historical)',
  ],

  examTips: [
    'State the precise Chapter limitation (X and XVII only) and the ≥ 3-year threshold for both prior and subsequent offences.',
    'Emphasise that it is a sentencing enhancement, not a new offence, and that notice is required.',
  ],

  revisionPoints: [
    'Prior + subsequent offences under Ch. X or XVII, each ≥ 3 years → life or up to 10 years.',
    'Not a separate offence; only enhances the sentence for the subsequent offence.',
    'Notice and opportunity to contest the prior conviction are required.',
  ],

  relatedTopics: ['s-4', 's-9'],
}

export default content
