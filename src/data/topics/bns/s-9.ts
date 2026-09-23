import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 9 prevents cumulative or more severe punishment when a single transaction constitutes more than one offence, unless the statute expressly provides otherwise. It is the successor to IPC s. 71 and works with the BNSS joinder rules and Article 20(2).',

  study: `Section 9 is the statutory embodiment of the principle that a person should not be punished more than once (or more severely) for what is essentially one criminal transaction, unless Parliament has expressly authorised cumulative punishment.

Sub-section (1): Where an offence is made up of parts, any of which is itself an offence, the offender shall not be punished with the punishment of more than one of such offences, unless it is expressly provided.

Sub-section (2): Where (a) anything is an offence falling within two or more separate definitions of any law, or (b) several acts, of which one or more would by itself constitute an offence, combine to form a different offence, the offender shall not be punished with a more severe punishment than the Court could award for any one of such offences.

The two Illustrations make the distinction clear: successive blows forming one beating attract only one punishment; a separate intentional blow to an intervening third person is a distinct offence and may be punished separately.

Section 9 limits the quantum of punishment. It does not bar the Court from recording convictions for multiple overlapping offences where the law so permits; it only caps the sentence that may be imposed. Express statutory language authorising cumulative punishment overrides the section.

Date-of-offence rule: for offences on or after 1 July 2024 cite BNS s. 9; substance is continuous with IPC s. 71.`,

  sections: [
    {
      id: 's-9-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 9 succeeds IPC section 71 without material change. The BNS retains both the “parts” rule and the “overlapping definitions / combined acts” rule together with the classic Illustrations.',
        'Legislative objective: enforce proportionality and prevent the mechanical accumulation of sentences for what is in substance a single criminal enterprise, while preserving the possibility of cumulative punishment where the Legislature has expressly so provided.',
        'Doctrinal foundation: the section is the statutory counterpart of the common-law rule against double punishment for the same transaction. It co-exists with, but is distinct from, the constitutional protection against double jeopardy in Article 20(2) (which bars a second prosecution and punishment for the same offence after a prior conviction or acquittal). Section 9 operates at the sentencing stage of a single trial.',
      ],
    },
    {
      id: 's-9-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Sub-section (1) — “parts” rule: an offence made up of parts, any of which is itself an offence → punishment limited to one of those offences unless express provision to the contrary.',
        'Sub-section (2)(a) — overlapping definitions: the same act or transaction falls within two or more separate statutory definitions → punishment cannot exceed the maximum for any one of them.',
        'Sub-section (2)(b) — combined acts forming a different offence: several acts, each (or some) of which would be an offence, combine to constitute a different offence → same ceiling applies.',
        'Illustrations: (a) fifty strokes = one beating = one punishment; (b) intentional blow to an intervening third person = distinct offence = separate punishment permissible.',
        'The sole exception is an express statutory provision authorising cumulative or more severe punishment.',
      ],
    },
    {
      id: 's-9-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A single transaction or set of facts that satisfies more than one offence definition (or is made up of parts each of which is an offence).',
        '2. The Court is considering the quantum of punishment for those overlapping or composite offences.',
        '3. No express statutory provision authorises cumulative or more severe punishment for the combination.',
        '4. Consequently the total punishment that may be awarded cannot exceed the maximum the Court could award for any one of the offences.',
      ],
    },
    {
      id: 's-9-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Section 9 is a sentencing rule, not an element of any offence. The prosecution has already proved the facts beyond reasonable doubt under BSA s. 104.',
        'At the sentencing stage the Court examines whether the proved facts constitute one transaction or multiple distinct offences. That characterisation is a question of law and fact for the Court; no additional formal burden arises under the BSA.',
        'Where electronic records (CCTV, messages, etc.) are relied upon to show the unity or separateness of the acts, BSA s. 63 compliance is required if they are treated as primary electronic evidence.',
      ],
    },
    {
      id: 's-9-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The limit in s. 9 is applied by the trial court at the stage of sentencing (and may be raised earlier at the stage of framing of charge if cumulative charges would produce an illegal total).',
        'Appeal against an excessive cumulative sentence lies to the ordinary appellate forum under the BNSS.',
        'No independent limitation period attaches to the application of s. 9; it is part of the sentencing exercise.',
        'Competent court: the court that is authorised to try and sentence for the offences in question.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-9',
      section: 's. 9',
      title: 'Limit of punishment of offence made up of several offences',
    },
  ],

  examples: [
    {
      id: 's-9-ill-1',
      title: 'Illustration 1 — Single beating (statutory illustration)',
      illustrationType: 'statutory',
      description:
        'A gives Z fifty strokes with a stick. Each blow and the whole beating may constitute the offence of voluntarily causing hurt. Under s. 9(1) A is liable only to one punishment for the whole beating, not to fifty separate punishments.',
    },
    {
      id: 's-9-ill-2',
      title: 'Illustration 2 — Distinct intervening act (statutory illustration)',
      illustrationType: 'fail-scenario',
      description:
        'While A is beating Z, Y interferes and A intentionally strikes Y. The blow to Y is no part of the act whereby A causes hurt to Z. A is liable to one punishment for the hurt to Z and to another for the blow to Y. Section 9 does not merge the two.',
    },
  ],

  hypotheticals: [
    {
      id: 's-9-hypo',
      title: 'Chamber Practice Hypothetical — Overlapping hurt and assault charges',
      facts:
        'G is tried for a single continuous assault. The charge sheet invokes both the general hurt provision and a more specific aggravated assault provision arising from the same blows. The trial court proposes to impose the maximum under each section consecutively.',
      question:
        'Is the proposed consecutive maximum sentence lawful under s. 9?',
      applicableLaw: 'BNS s. 9; the specific offence sections; BNSS joinder and sentencing provisions; Art. 20(2).',
      analysis:
        '1. Threshold: The facts constitute one transaction that falls within two separate definitions.\n2. Ingredient verification: No express statutory provision authorises cumulative punishment for this combination.\n3. Application of s. 9(2): The Court cannot award a more severe punishment than it could award for any one of the offences.\n4. Consequence: Consecutive maxima would violate s. 9. The Court must limit the total sentence to the highest single maximum available.',
      conclusion:
        'The proposed consecutive maxima are illegal. The sentence must be capped at the maximum for any one of the offences.',
    },
  ],

  distinctions: [
    {
      id: 's-9-dist-1',
      title: 's. 9 (limit on quantum) vs Art. 20(2) (double jeopardy)',
      left: 'BNS s. 9',
      right: 'Constitution Art. 20(2)',
      rows: [
        { point: 'Stage', left: 'Sentencing in a single trial', right: 'Bar on second prosecution and punishment after prior conviction or acquittal' },
        { point: 'What it protects against', left: 'Cumulative or more severe punishment for overlapping offences in one transaction', right: 'Being put in jeopardy twice for the same offence' },
        { point: 'Effect on conviction', left: 'Does not bar multiple convictions where the law permits', right: 'Bars a second trial for the same offence' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-9-trap-1',
      trap: 'Section 9 bars the Court from recording convictions for more than one offence arising from the same facts.',
      correction:
        'Section 9 limits only the quantum of punishment. Convictions for multiple overlapping offences remain possible where the law so allows; the total sentence is capped.',
    },
    {
      id: 's-9-trap-2',
      trap: 'Section 9 always prevents consecutive sentences.',
      correction:
        'Where an express statutory provision authorises cumulative punishment, or where the acts are truly distinct (as in Illustration (b)), consecutive sentences remain lawful.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-9-brief',
      draftingCategory: 'brief',
      question:
        'Explain the limit on punishment under Section 9 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
When a single transaction satisfies more than one offence definition, what is the ceiling on punishment?

II. GOVERNING RULE
Sub-s. (1) and (2) provide that the offender shall not be punished with a more severe punishment than the Court could award for any one of the offences, unless the statute expressly provides otherwise.

III. APPLICATION
Identify the overlapping or composite offences → check for any express cumulative clause → if none, cap the total sentence at the highest single maximum.

IV. CONCLUSION
Section 9 enforces proportionality at the sentencing stage; it does not bar multiple convictions.`,
      explanation: 'IRAC note on s. 9.',
    },
    {
      id: 's-9-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions invoking BNS s. 9 to limit the total sentence where multiple overlapping charges arise from one transaction.',
      answer: `I. STATEMENT OF FACTS
[Insert the single transaction and the multiple offence definitions invoked.]

II. STATUTORY SCHEME
Section 9(1) and (2) cap the punishment at the maximum for any one of the offences unless an express provision authorises cumulative punishment.

III. APPLICATION TO THE PRESENT CASE
The proved acts constitute one continuous transaction falling within two (or more) definitions. No express cumulative clause applies. Therefore the total sentence cannot exceed the highest single maximum.

IV. DISTINCTION FROM ART. 20(2)
Article 20(2) is not engaged; the present objection is confined to quantum under s. 9.

V. PRAYER
[Prayer for a sentence limited to the maximum available for any one of the offences.]`,
      explanation: 'Senior Counsel submissions on the sentencing ceiling.',
    },
  ],

  bareActPointers: [
    'BNS s. 9 (entire, including Illustrations)',
    'IPC s. 71 (historical)',
    'Constitution Art. 20(2) (distinct double-jeopardy protection)',
  ],

  examTips: [
    'Always distinguish the limit on quantum (s. 9) from the bar on second prosecution (Art. 20(2)).',
    'Cite the two Illustrations to show when separate punishment is still permissible.',
  ],

  revisionPoints: [
    'One transaction / overlapping definitions → punishment limited to maximum of any one offence.',
    'Express statutory authorisation for cumulative punishment overrides s. 9.',
    'Does not bar multiple convictions; only caps the sentence.',
  ],

  relatedTopics: ['s-4', 's-10'],
}

export default content
