import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 12 regulates the execution of any order of solitary confinement made under s. 11. It prohibits continuous solitary confinement of more than fourteen days at a time (with intervals of equal duration) and, where the total imprisonment exceeds three months, further limits solitary confinement to seven days in any one month.',

  study: `Section 12 is the execution counterpart of s. 11. Once the Court has ordered solitary confinement within the ceilings of s. 11, the prison authorities must implement that order in accordance with the following mandatory limits:

1. Continuous period: solitary confinement shall in no case exceed fourteen days at a time.
2. Interval: between successive periods of solitary confinement there must be an interval of not less duration than the period of solitary confinement just undergone.
3. Monthly ceiling (when total imprisonment > three months): solitary confinement shall not exceed seven days in any one month of the whole imprisonment awarded, again with intervals of not less duration than such periods.

These rules are mandatory. An order or prison practice that produces continuous solitary beyond fourteen days, or that omits the required intervals, or that exceeds seven days in any month when the total term exceeds three months, is illegal.

Date-of-offence rule: for offences on or after 1 July 2024 cite BNS s. 12; substance is continuous with IPC s. 74.`,

  sections: [
    {
      id: 's-12-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 12 succeeds IPC section 74. The BNS retains the classic fourteen-day continuous limit, the equal-interval rule, and the additional seven-day-per-month ceiling when the total term exceeds three months.',
        'Legislative objective: prevent the physical and psychological harm of prolonged uninterrupted solitary confinement while still permitting the limited periods authorised by s. 11.',
        'Doctrinal foundation: solitary confinement remains an exceptional incident of rigorous imprisonment. Section 12 ensures that even a lawful order under s. 11 is executed in a broken, intermittent manner that respects minimum standards of humanity.',
      ],
    },
    {
      id: 's-12-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'First limb: “such confinement shall in no case exceed fourteen days at a time, with intervals between the periods of solitary confinement of not less duration than such periods.”',
        'Second limb (triggered when total imprisonment awarded exceeds three months): “the solitary confinement shall not exceed seven days in any one month of the whole imprisonment awarded, with intervals between the periods of solitary confinement of not less duration than such periods.”',
        'Both limbs are cumulative with the overall and sliding-scale ceilings already fixed by s. 11. Section 12 does not expand the total quantum; it only regulates distribution and continuity.',
      ],
    },
    {
      id: 's-12-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A valid order of solitary confinement has been made under s. 11.',
        '2. In execution, no single continuous period exceeds fourteen days.',
        '3. Between successive periods there is an interval at least equal in length to the preceding solitary period.',
        '4. If the total imprisonment awarded exceeds three months, solitary confinement does not exceed seven days in any one month of that imprisonment, again with equal intervals.',
      ],
    },
    {
      id: 's-12-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Section 12 is a rule of execution. No additional formal burden under BSA ss. 104–106 arises for its application.',
        'If a prisoner challenges the manner of execution (for example by producing prison records showing continuous solitary beyond fourteen days), the ordinary rules of evidence apply to those records, including BSA s. 63 for electronic logs.',
      ],
    },
    {
      id: 's-12-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The limits in s. 12 are binding on the prison authorities who execute the sentence. Non-compliance can be challenged by writ petition under Article 226 or by appropriate application before the sentencing or appellate court.',
        'No independent limitation period attaches; the duty is continuous throughout the currency of the sentence.',
        'Competent forum for challenge: High Court under Art. 226, or the court that passed or is seized of the sentence under the BNSS.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-12',
      section: 's. 12',
      title: 'Limit of solitary confinement',
    },
  ],

  examples: [
    {
      id: 's-12-ill-1',
      title: 'Illustration 1 — Lawful broken periods',
      illustrationType: 'statutory',
      description:
        'The Court has ordered two months of solitary confinement under s. 11 as part of a one-year rigorous sentence. The prison authorities implement it as successive periods of fourteen days of solitary followed by at least fourteen days of ordinary confinement. The execution complies with s. 12.',
    },
    {
      id: 's-12-ill-2',
      title: 'Illustration 2 — Continuous solitary beyond fourteen days',
      illustrationType: 'fail-scenario',
      description:
        'Despite a lawful s. 11 order for one month of solitary, the prison keeps the prisoner in continuous solitary confinement for thirty days without any interval. The execution violates the fourteen-day continuous limit and the equal-interval rule of s. 12 and is illegal.',
    },
  ],

  hypotheticals: [
    {
      id: 's-12-hypo',
      title: 'Chamber Practice Hypothetical — Challenge to continuous solitary',
      facts:
        'K is serving a five-year rigorous sentence that includes a lawful order of three months’ solitary confinement under s. 11. Prison records show that he has been kept in uninterrupted solitary for twenty-one consecutive days.',
      question:
        'Is the manner of execution lawful under s. 12, and what remedy is available?',
      applicableLaw: 'BNS ss. 11 and 12; Constitution Art. 21; Art. 226.',
      analysis:
        '1. Threshold: A valid s. 11 order exists, but execution is governed by s. 12.\n2. Violation: Continuous solitary of twenty-one days exceeds the fourteen-day continuous limit and omits the required equal interval.\n3. Further limit: Because the total imprisonment exceeds three months, the seven-day-per-month ceiling also applies.\n4. Remedy: The prisoner may seek immediate release from the illegal continuous solitary by writ petition under Art. 226 or by appropriate application to the competent court.',
      conclusion:
        'The continuous twenty-one-day solitary is illegal. The prisoner is entitled to be released from solitary confinement forthwith and to have the remainder of any solitary periods executed only in compliance with s. 12.',
    },
  ],

  distinctions: [
    {
      id: 's-12-dist-1',
      title: 's. 11 (power & quantum) vs s. 12 (execution limits)',
      left: 's. 11',
      right: 's. 12',
      rows: [
        { point: 'What it governs', left: 'Whether and how much solitary confinement may be ordered', right: 'How any ordered solitary confinement must be executed' },
        { point: 'Ceilings', left: 'Overall 3 months + sliding scale keyed to length of RI term', right: '14-day continuous max + equal intervals + 7-day-per-month when total term > 3 months' },
        { point: 'Who applies it', left: 'Sentencing court', right: 'Prison authorities (subject to judicial supervision)' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-12-trap-1',
      trap: 'Once the Court has ordered solitary confinement under s. 11, the prison may keep the prisoner in continuous solitary for the whole ordered period.',
      correction:
        'Section 12 forbids continuous solitary of more than fourteen days at a time and requires equal intervals. Continuous execution beyond fourteen days is illegal.',
    },
    {
      id: 's-12-trap-2',
      trap: 'The seven-day-per-month rule applies to every solitary order.',
      correction:
        'The seven-day-per-month ceiling applies only when the total imprisonment awarded exceeds three months.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-12-brief',
      draftingCategory: 'brief',
      question:
        'Explain the execution limits on solitary confinement under Section 12 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
How must an order of solitary confinement under s. 11 be executed?

II. GOVERNING RULE
Section 12 requires: (a) no continuous period longer than fourteen days; (b) intervals at least equal to the preceding solitary period; (c) when total imprisonment exceeds three months, not more than seven days of solitary in any one month, again with equal intervals.

III. APPLICATION
Any prison practice that produces continuous solitary beyond fourteen days, or that omits the required intervals, or that exceeds the monthly ceiling, is illegal.

IV. CONCLUSION
Section 12 is mandatory and protects against prolonged uninterrupted solitary confinement.`,
      explanation: 'IRAC note on s. 12.',
    },
    {
      id: 's-12-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions challenging continuous solitary confinement in excess of the limits in BNS s. 12.',
      answer: `I. STATEMENT OF FACTS
[Insert the s. 11 order and the prison records showing continuous solitary beyond fourteen days or breach of the monthly/interval rules.]

II. STATUTORY SCHEME
Section 12 imposes mandatory execution limits: 14-day continuous maximum, equal intervals, and (where total term > 3 months) 7 days per month.

III. VIOLATION
The continuous period of [X] days / the omission of equal intervals / the excess over 7 days in a month constitutes a clear breach of s. 12.

IV. CONSTITUTIONAL DIMENSION
Prolonged uninterrupted solitary confinement also engages residual Art. 21 protections.

V. PRAYER
[Immediate release from the illegal continuous solitary; direction that any remaining solitary periods be executed strictly in accordance with s. 12.]`,
      explanation: 'Senior Counsel submissions against illegal continuous solitary.',
    },
  ],

  bareActPointers: [
    'BNS s. 12 (entire)',
    'BNS s. 11 (power and quantum)',
    'IPC s. 74 (historical)',
  ],

  examTips: [
    'Always state the three execution rules: 14-day continuous max, equal intervals, and 7-day-per-month when total term > 3 months.',
    'Distinguish the quantum ceilings of s. 11 from the execution limits of s. 12.',
  ],

  revisionPoints: [
    'Max 14 days continuous solitary at a time.',
    'Interval must be at least equal to the preceding solitary period.',
    'When total imprisonment > 3 months: max 7 days solitary in any one month.',
    'Both limbs are mandatory and cumulative with s. 11.',
  ],

  relatedTopics: ['s-11', 's-4'],
}

export default content
