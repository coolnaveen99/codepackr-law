import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 7 empowers the sentencing court, wherever an offender is punishable with imprisonment of either description, to direct that the imprisonment shall be wholly rigorous, wholly simple, or partly rigorous and partly simple. It is the successor to IPC s. 60 and controls only the character, not the length, of the term.',

  study: `Section 7 is a sentencing-flexibility provision. When the offence-creating section permits imprisonment of either description (or uses language that leaves the description open), the court that passes sentence may order:

• wholly rigorous imprisonment, or
• wholly simple imprisonment, or
• any part rigorous and the remainder simple.

The power is unavailable when the offence section itself mandates only rigorous imprisonment (or only simple imprisonment). In that case the court is bound by the statutory prescription and cannot alter the character under s. 7.

Rigorous imprisonment means imprisonment with hard labour; simple imprisonment means imprisonment without hard labour. The choice is a matter of judicial discretion guided by the nature of the offence, the circumstances of the offender, and the purposes of sentencing (retribution, deterrence, rehabilitation).

Section 7 does not authorise any reduction of the maximum or minimum term fixed by the offence section; it operates only on the qualitative character of the imprisonment already authorised.

Date-of-offence rule: for offences committed on or after 1 July 2024 cite BNS s. 7; the substance is identical to the former IPC s. 60.`,

  sections: [
    {
      id: 's-7-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 7 succeeds IPC section 60 without material change. The BNS retains the classic three-way discretion (wholly rigorous / wholly simple / mixed).',
        'Legislative objective: give the sentencing court calibrated control over the punitive severity of imprisonment when the offence section leaves the description open, while preventing the court from overriding a mandatory statutory choice of rigorous or simple imprisonment.',
        'Doctrinal foundation: the character of imprisonment is part of the sentence. Once the offence section authorises “imprisonment of either description”, the court becomes competent under s. 7 to fix that character. The length of the term remains governed exclusively by the offence section and the general sentencing principles.',
      ],
    },
    {
      id: 's-7-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Operative clause: “In every case in which an offender is punishable with imprisonment which may be of either description, it shall be competent to the Court which sentences such offender to direct in the sentence that such imprisonment shall be wholly rigorous, or that such imprisonment shall be wholly simple, or that any part of such imprisonment shall be rigorous and the rest simple.”',
        'Trigger condition: the offence must be punishable with imprisonment “which may be of either description”. If the offence section says “rigorous imprisonment only” or “simple imprisonment only”, s. 7 is inapplicable.',
        'Three permissible orders: (a) wholly rigorous; (b) wholly simple; (c) mixed (any part rigorous, the rest simple).',
        'No other conditions, explanations or illustrations appear in the section.',
      ],
    },
    {
      id: 's-7-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. The offender has been convicted of an offence that is punishable with imprisonment of either description (or equivalent open language).',
        '2. The court is the court that is passing the sentence.',
        '3. The court elects one of the three options: wholly rigorous, wholly simple, or mixed.',
        '4. The direction is recorded in the sentence itself.',
        'Negative ingredient: the offence section must not have locked the court into a single description (only rigorous or only simple).',
      ],
    },
    {
      id: 's-7-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Section 7 is a sentencing power, not an element of the offence. No additional burden under BSA ss. 104–106 arises for the application of s. 7 itself.',
        'The prosecution has already proved the offence beyond reasonable doubt. At the sentencing stage the court considers the nature of the offence, the circumstances of the offender, and any mitigating or aggravating material (which may be proved on a preponderance).',
        'If electronic records (medical reports, previous-conviction certificates, etc.) are relied upon at sentencing, BSA s. 63 compliance is required where the Court treats them as primary electronic evidence.',
      ],
    },
    {
      id: 's-7-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The direction under s. 7 is part of the judgment of sentence and is recorded at the same time as the term of imprisonment is fixed.',
        'Appeal against the character of imprisonment lies to the ordinary appellate forum under the BNSS (together with any challenge to the length of the term or the conviction itself).',
        'No independent limitation period attaches to the exercise of s. 7; it is exercised at the moment of sentencing.',
        'Competent court: the court that is authorised to pass the sentence for the offence in question (Magistrate, Sessions Court, etc.).',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-7',
      section: 's. 7',
      title: 'Sentence may be (in certain cases of imprisonment) wholly or partly rigorous or simple',
    },
  ],

  examples: [
    {
      id: 's-7-ill-1',
      title: 'Illustration 1 — Mixed sentence lawfully ordered',
      illustrationType: 'statutory',
      description:
        'An offence is punishable with imprisonment of either description for a term which may extend to two years. The court, after considering the facts, sentences the offender to imprisonment for eighteen months, of which the first twelve months shall be rigorous and the remaining six months simple. The order is authorised by s. 7.',
    },
    {
      id: 's-7-ill-2',
      title: 'Illustration 2 — Boundary defect (mandatory rigorous prescription)',
      illustrationType: 'fail-scenario',
      description:
        'The offence section provides that the offender “shall be punished with rigorous imprisonment for a term which may extend to three years”. The court cannot, under s. 7, convert any part of the sentence into simple imprisonment. Section 7 is inapplicable because the offence is not punishable with imprisonment “which may be of either description”.',
    },
  ],

  hypotheticals: [
    {
      id: 's-7-hypo',
      title: 'Chamber Practice Hypothetical — Character of imprisonment on first conviction',
      facts:
        'E, a first-time offender of modest means, is convicted of an offence punishable with imprisonment of either description up to one year, or with fine, or with both. The court is minded to impose a short custodial sentence but wishes to avoid hard labour.',
      question:
        'May the court order the entire term to be simple imprisonment under s. 7?',
      applicableLaw: 'BNS s. 7; the specific offence section; general sentencing principles.',
      analysis:
        '1. Threshold: The offence permits imprisonment of either description → s. 7 is attracted.\n2. Ingredient verification: The court is the sentencing court and may choose wholly simple imprisonment.\n3. Sentencing discretion: The first-offender status and modest means are relevant mitigating factors supporting a simple rather than rigorous sentence.\n4. Limits: The court cannot exceed the maximum term fixed by the offence section.',
      conclusion:
        'Yes. The court may lawfully direct that the imprisonment shall be wholly simple under s. 7.',
    },
  ],

  distinctions: [
    {
      id: 's-7-dist-1',
      title: 'Character of imprisonment (s. 7) vs Length of term (offence section)',
      left: 's. 7 — character',
      right: 'Offence section — length',
      rows: [
        { point: 'What it controls', left: 'Rigorous / simple / mixed', right: 'Maximum (and any minimum) term of imprisonment' },
        { point: 'When available', left: 'Only when the offence permits either description', right: 'Always governed by the offence-creating section' },
        { point: 'Effect of s. 7', left: 'Qualitative choice only', right: 'Unaffected by s. 7' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-7-trap-1',
      trap: 'Section 7 allows the court to reduce the maximum term of imprisonment.',
      correction:
        'Section 7 controls only the character (rigorous or simple). The length of the term remains governed exclusively by the offence section.',
    },
    {
      id: 's-7-trap-2',
      trap: 'Even when the offence section mandates rigorous imprisonment only, the court can still order simple imprisonment under s. 7.',
      correction:
        'Section 7 is available only when the offender is punishable with imprisonment “which may be of either description”. A mandatory rigorous prescription excludes s. 7.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-7-brief',
      draftingCategory: 'brief',
      question:
        'Explain the power of the Court under Section 7 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
When may a court direct that imprisonment shall be rigorous, simple, or mixed?

II. GOVERNING RULE
Section 7 applies only where the offence is punishable with imprisonment of either description. The sentencing court may then order the imprisonment to be wholly rigorous, wholly simple, or partly each.

III. APPLICATION
Confirm that the offence section leaves the description open → exercise the three-way discretion → record the direction in the sentence. Length of term remains untouched.

IV. CONCLUSION
Character is flexible under s. 7; length is not.`,
      explanation: 'IRAC note on s. 7.',
    },
    {
      id: 's-7-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on the proper exercise of the discretion under BNS s. 7, distinguishing character from length of imprisonment.',
      answer: `I. STATEMENT OF FACTS
[Insert conviction, offence section language, and proposed term.]

II. STATUTORY SCHEME
Section 7 confers a three-way discretion solely over the character of imprisonment when the offence permits either description.

III. MANDATORY INGREDIENTS
(a) Offence punishable with imprisonment of either description;
(b) Court is the sentencing court;
(c) Direction recorded in the sentence.

IV. LIMITS
Cannot override a mandatory rigorous (or simple) prescription; cannot alter the maximum or minimum term.

V. PRAYER
[Appropriate prayer for wholly simple / mixed / wholly rigorous imprisonment consistent with the facts and the offence section.]`,
      explanation: 'Senior Counsel submissions on character of imprisonment.',
    },
  ],

  bareActPointers: [
    'BNS s. 7',
    'BNS s. 4(c) (imprisonment of two descriptions)',
    'IPC s. 60 (historical)',
  ],

  examTips: [
    'Always state the trigger: “imprisonment which may be of either description”.',
    'Emphasise that s. 7 never changes the length of the term.',
  ],

  revisionPoints: [
    'Three options: wholly rigorous / wholly simple / mixed.',
    'Available only when the offence permits either description.',
    'Controls character, not length.',
  ],

  relatedTopics: ['s-4', 's-8'],
}

export default content
