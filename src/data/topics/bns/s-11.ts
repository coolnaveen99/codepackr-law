import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 11 authorises a court that sentences an offender to rigorous imprisonment to order solitary confinement for a portion of that term, subject to an overall maximum of three months and a sliding scale keyed to the length of the rigorous sentence. It is the successor to IPC s. 73 and is not a free-standing punishment under s. 4.',

  study: `Section 11 is a sentencing power, not an independent punishment in the s. 4 menu. It applies only when the Court has power under the BNS to sentence the offender to rigorous imprisonment.

The Court may, by its sentence, order that the offender shall be kept in solitary confinement for any portion or portions of the imprisonment to which he is sentenced, not exceeding three months in the whole, according to the following scale:

(a) not exceeding one month if the term of imprisonment does not exceed six months;
(b) not exceeding two months if the term exceeds six months and does not exceed one year;
(c) not exceeding three months if the term exceeds one year.

Further limits on the manner in which the solitary periods may be distributed appear in s. 12. Solitary confinement is an exceptional measure; it is ordered only after consideration of the nature of the offence and the offender and must be expressly recorded in the sentence.

Date-of-offence rule: for offences on or after 1 July 2024 cite BNS s. 11; substance is continuous with IPC s. 73.`,

  sections: [
    {
      id: 's-11-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 11 succeeds IPC section 73. The BNS retains the overall three-month ceiling and the sliding scale keyed to the length of the rigorous term.',
        'Legislative objective: permit a carefully limited period of solitary confinement as an incident of rigorous imprisonment while preventing its use as an ordinary or unlimited punishment.',
        'Doctrinal foundation: solitary confinement is not listed as a distinct punishment in s. 4. It is an additional incident that the Court may attach to a rigorous-imprisonment sentence within the statutory ceilings. Its use is exceptional and must be justified by the facts of the case.',
      ],
    },
    {
      id: 's-11-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Trigger: conviction of an offence for which the Court has power under the BNS to sentence the offender to rigorous imprisonment.',
        'Power: the Court may, by its sentence, order solitary confinement for any portion or portions of that imprisonment.',
        'Overall ceiling: not exceeding three months in the whole.',
        'Sliding scale: (a) ≤ 1 month when term ≤ 6 months; (b) ≤ 2 months when term > 6 months and ≤ 1 year; (c) ≤ 3 months when term > 1 year.',
        'Further distribution limits are contained in s. 12 and must be read together with s. 11.',
      ],
    },
    {
      id: 's-11-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. The offender has been convicted of an offence for which rigorous imprisonment is an authorised sentence under the BNS.',
        '2. The Court is the court that is passing the sentence of rigorous imprisonment.',
        '3. The Court expressly orders solitary confinement for a portion or portions of that imprisonment.',
        '4. The total period of solitary confinement does not exceed three months in the whole and respects the sliding scale in clauses (a)–(c).',
        '5. The distribution of the solitary periods also respects the limits in s. 12.',
      ],
    },
    {
      id: 's-11-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Section 11 is a sentencing power. The prosecution has already proved the offence beyond reasonable doubt. No additional formal burden under BSA ss. 104–106 arises for the decision to order solitary confinement.',
        'The Court considers the nature of the offence, the circumstances of the offender, and any material relevant to the appropriateness of solitary confinement (which may be proved on a preponderance at the sentencing stage).',
        'Electronic or documentary material relied upon at sentencing must satisfy ordinary admissibility rules, including BSA s. 63 where applicable.',
      ],
    },
    {
      id: 's-11-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The order under s. 11 must be expressly recorded in the judgment of sentence. It is executed by the prison authorities in accordance with the order and with prison rules consistent with ss. 11–12.',
        'Appeal against the order of solitary confinement lies to the ordinary appellate forum under the BNSS together with any challenge to the principal sentence.',
        'No independent limitation period attaches; the order is part of the sentence.',
        'Competent court: the court that is authorised to pass a sentence of rigorous imprisonment for the offence.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-11',
      section: 's. 11',
      title: 'Solitary confinement',
    },
  ],

  examples: [
    {
      id: 's-11-ill-1',
      title: 'Illustration 1 — Lawful order within the scale',
      illustrationType: 'statutory',
      description:
        'The Court sentences the offender to rigorous imprisonment for nine months. Under clause (b) of s. 11 it may order solitary confinement for a period not exceeding two months, and must also respect the distribution limits in s. 12. An order of one month of solitary confinement is lawful.',
    },
    {
      id: 's-11-ill-2',
      title: 'Illustration 2 — Exceeding the overall ceiling',
      illustrationType: 'fail-scenario',
      description:
        'The Court sentences the offender to rigorous imprisonment for three years and orders four months of solitary confinement. The order is ultra vires: the overall maximum under s. 11 is three months in the whole.',
    },
  ],

  hypotheticals: [
    {
      id: 's-11-hypo',
      title: 'Chamber Practice Hypothetical — Whether to order solitary confinement',
      facts:
        'J is convicted of a serious offence for which rigorous imprisonment is authorised. The Court is considering a term of two years’ rigorous imprisonment and is asked to add the maximum permissible solitary confinement.',
      question:
        'What is the maximum solitary confinement the Court may lawfully order, and what further limits apply?',
      applicableLaw: 'BNS ss. 11 and 12; sentencing principles.',
      analysis:
        '1. Threshold: Rigorous imprisonment is authorised → s. 11 is available.\n2. Scale: Term exceeds one year → clause (c) permits up to three months in the whole.\n3. Distribution: The periods must also comply with the consecutive-period limits in s. 12.\n4. Discretion: Solitary confinement remains exceptional; the Court must consider whether the facts justify it.',
      conclusion:
        'The Court may order up to three months of solitary confinement, subject to the distribution rules in s. 12, but only if the facts warrant the exceptional measure.',
    },
  ],

  distinctions: [
    {
      id: 's-11-dist-1',
      title: 'Solitary confinement (ss. 11–12) vs Free-standing punishments (s. 4)',
      left: 'ss. 11–12 solitary confinement',
      right: 's. 4 punishments',
      rows: [
        { point: 'Status', left: 'Incident of rigorous imprisonment', right: 'Independent punishments in the sentencing menu' },
        { point: 'When available', left: 'Only when rigorous imprisonment is authorised and the Court so orders', right: 'Whenever the offence section authorises the particular punishment' },
        { point: 'Ceiling', left: 'Three months overall + sliding scale + s. 12 distribution limits', right: 'Fixed by the offence section and s. 4' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-11-trap-1',
      trap: 'Solitary confinement is a separate punishment listed in s. 4.',
      correction:
        'It is not. It is an additional incident that may be attached to a rigorous-imprisonment sentence under ss. 11–12.',
    },
    {
      id: 's-11-trap-2',
      trap: 'The three-month ceiling is the only limit; the Court may distribute it as it likes.',
      correction:
        'Section 12 imposes further limits on the length of consecutive periods of solitary confinement. Both sections must be read together.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-11-brief',
      draftingCategory: 'brief',
      question:
        'Explain the power to order solitary confinement under Section 11 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
When and to what extent may a court order solitary confinement?

II. GOVERNING RULE
Section 11 permits the Court, when sentencing to rigorous imprisonment, to order solitary confinement for a portion of that term, not exceeding three months in the whole, according to the sliding scale in clauses (a)–(c). Further limits appear in s. 12.

III. APPLICATION
Confirm power to impose rigorous imprisonment → apply the scale → respect s. 12 distribution limits → record the order expressly in the sentence.

IV. CONCLUSION
Solitary confinement is exceptional, limited, and not a free-standing s. 4 punishment.`,
      explanation: 'IRAC note on s. 11.',
    },
    {
      id: 's-11-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on the lawful limits of solitary confinement under BNS ss. 11 and 12.',
      answer: `I. STATEMENT OF FACTS
[Insert the rigorous term proposed and any request for solitary confinement.]

II. STATUTORY SCHEME
Section 11 confers the power and the overall/sliding-scale ceilings. Section 12 regulates the distribution of consecutive periods.

III. APPLICATION
The proposed order must respect both the three-month overall ceiling (and the scale keyed to the length of the term) and the consecutive-period limits in s. 12.

IV. REBUTTAL
Any order exceeding those ceilings is ultra vires. Solitary confinement remains an exceptional measure, not a routine addition.

V. PRAYER
[Prayer for an order within the statutory ceilings, or for refusal of solitary confinement if the facts do not justify it.]`,
      explanation: 'Senior Counsel submissions on the limits of solitary confinement.',
    },
  ],

  bareActPointers: [
    'BNS s. 11 (entire, including the scale)',
    'BNS s. 12 (limit on consecutive periods)',
    'BNS s. 4(c) (rigorous imprisonment)',
    'IPC s. 73 (historical)',
  ],

  examTips: [
    'Always state the overall three-month ceiling and the sliding scale.',
    'Pair s. 11 with s. 12; never treat solitary confinement as a free-standing s. 4 punishment.',
  ],

  revisionPoints: [
    'Available only with rigorous imprisonment.',
    'Overall max 3 months; scale: 1 / 2 / 3 months according to length of term.',
    'Further distribution limits in s. 12.',
    'Not a separate punishment under s. 4.',
  ],

  relatedTopics: ['s-4', 's-12'],
}

export default content
