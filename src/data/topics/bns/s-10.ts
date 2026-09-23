import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 10 provides that where the Court finds the accused guilty of one of several offences specified in the judgment but is doubtful which, the offender shall be punished for the offence carrying the lowest punishment (if the punishments differ). It is the successor to IPC s. 72.',

  study: `Section 10 is a residual fairness rule for situations of genuine residual doubt among alternative offences.

Text: “In all cases in which judgment is given that a person is guilty of one of several offences specified in the judgment, but that it is doubtful of which of these offences he is guilty, the offender shall be punished for the offence for which the lowest punishment is provided if the same punishment is not provided for all.”

The section presupposes that the Court has already reached a finding of guilt of one of the listed offences. It does not authorise an acquittal merely because the precise label is uncertain. It only selects the lowest of the available punishments when the Court cannot say which of the proved alternatives is the correct one.

If the evidence clearly establishes the graver offence, s. 10 has no application; the Court must convict and sentence for that offence. The section is not a device for reducing a clear case to the lesser maximum.

Date-of-offence rule: for offences on or after 1 July 2024 cite BNS s. 10; substance is continuous with IPC s. 72.`,

  sections: [
    {
      id: 's-10-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 10 succeeds IPC section 72 without material change. The BNS retains the classic “lowest-punishment” residual rule.',
        'Legislative objective: protect the accused from the risk of receiving the higher punishment attached to one of several possible offences when the Court itself remains uncertain which offence was actually committed.',
        'Doctrinal foundation: the section is an expression of the principle that the benefit of residual doubt on the precise legal characterisation should go to the accused at the stage of sentence, once guilt of one of the alternatives has been established.',
      ],
    },
    {
      id: 's-10-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Trigger: judgment that the person is guilty of one of several offences specified in the judgment, coupled with a recorded doubt as to which of those offences he is guilty of.',
        'Consequence: the offender shall be punished for the offence for which the lowest punishment is provided, provided the punishments are not the same for all.',
        'No other conditions, explanations or illustrations appear in the section. The rule is self-contained and residual.',
      ],
    },
    {
      id: 's-10-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. The Court has given judgment that the accused is guilty of one of several offences specified in the judgment.',
        '2. The Court remains doubtful which of those specified offences the accused is guilty of.',
        '3. The punishments provided for those offences are not identical.',
        '4. Consequently the Court must impose the punishment prescribed for the offence that carries the lowest punishment among those specified.',
      ],
    },
    {
      id: 's-10-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The prosecution must still prove beyond reasonable doubt that the accused committed one of the alternative offences (BSA s. 104). Section 10 does not lower that standard.',
        'The residual doubt that triggers s. 10 is a doubt as to the precise legal characterisation among the proved alternatives, not a doubt as to whether any offence was committed at all.',
        'If electronic or documentary evidence is used to establish the factual matrix, ordinary BSA rules (including s. 63 for electronic records) apply.',
      ],
    },
    {
      id: 's-10-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The finding of guilt of one of several offences, together with the expression of doubt, is recorded in the judgment. The sentence then follows the lowest-punishment rule.',
        'Appeal lies to the ordinary appellate forum under the BNSS against both the finding and the resulting sentence.',
        'No independent limitation period attaches to the application of s. 10; it is part of the judgment and sentence.',
        'Competent court: the court that is authorised to try and sentence for the offences in question.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-10',
      section: 's. 10',
      title: 'Punishment of person guilty of one of several offences, judgment stating that it is doubtful of which',
    },
  ],

  examples: [
    {
      id: 's-10-ill-1',
      title: 'Illustration 1 — Genuine residual doubt',
      illustrationType: 'statutory',
      description:
        'The evidence establishes that the accused committed either offence A (maximum three years) or offence B (maximum seven years), but the Court cannot determine which. Under s. 10 the Court must punish the accused as for offence A (the lower maximum).',
    },
    {
      id: 's-10-ill-2',
      title: 'Illustration 2 — No genuine doubt (boundary)',
      illustrationType: 'fail-scenario',
      description:
        'The evidence clearly establishes every ingredient of the graver offence B. The Court cannot invoke s. 10 to reduce the sentence to the maximum for the lesser offence A. Section 10 applies only when a genuine residual doubt as to which offence remains after the finding of guilt of one of the alternatives.',
    },
  ],

  hypotheticals: [
    {
      id: 's-10-hypo',
      title: 'Chamber Practice Hypothetical — Alternative findings on the same facts',
      facts:
        'H is charged with two offences arising from the same incident. The evidence proves that H committed one of them but is genuinely equivocal as to which. The two offences carry different maxima.',
      question:
        'How must the Court sentence H under s. 10?',
      applicableLaw: 'BNS s. 10; the two offence sections; BNSS judgment and sentencing provisions.',
      analysis:
        '1. Threshold: Judgment of guilt of one of several specified offences + recorded doubt as to which.\n2. Ingredient verification: The punishments differ → lowest-punishment rule applies.\n3. Consequence: The Court must impose the punishment provided for the offence that carries the lower maximum.',
      conclusion:
        'H must be sentenced according to the offence carrying the lowest punishment among those specified in the judgment.',
    },
  ],

  distinctions: [
    {
      id: 's-10-dist-1',
      title: 's. 10 (residual doubt among offences) vs Benefit of doubt on guilt itself',
      left: 'BNS s. 10',
      right: 'Ordinary benefit of doubt',
      rows: [
        { point: 'What is doubtful', left: 'Which of several specified offences the accused is guilty of', right: 'Whether the accused is guilty of any offence at all' },
        { point: 'Consequence', left: 'Conviction stands; lowest punishment is awarded', right: 'Acquittal' },
        { point: 'Prerequisite', left: 'Finding of guilt of one of the alternatives already recorded', right: 'No finding of guilt' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-10-trap-1',
      trap: 'Section 10 allows the Court to acquit when it is doubtful which offence was committed.',
      correction:
        'Section 10 assumes a finding of guilt of one of several offences. It only selects the lowest punishment; it does not authorise an acquittal.',
    },
    {
      id: 's-10-trap-2',
      trap: 'Section 10 can be used to reduce a clear case of the graver offence to the lesser maximum.',
      correction:
        'If the evidence clearly establishes the graver offence, there is no residual doubt and s. 10 does not apply.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-10-brief',
      draftingCategory: 'brief',
      question:
        'Explain the residual sentencing rule in Section 10 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
When the Court finds the accused guilty of one of several offences but is doubtful which, what sentence may be imposed?

II. GOVERNING RULE
Section 10 requires that the offender be punished for the offence for which the lowest punishment is provided (if the punishments differ).

III. APPLICATION
Record the finding of guilt of one of the alternatives + the residual doubt → identify the lowest maximum → impose that punishment.

IV. CONCLUSION
The section protects against the higher punishment when residual doubt as to the precise offence remains; it does not authorise acquittal.`,
      explanation: 'IRAC note on s. 10.',
    },
    {
      id: 's-10-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions invoking BNS s. 10 where the evidence leaves residual doubt among alternative offences of different gravity.',
      answer: `I. STATEMENT OF FACTS
[Insert the alternative offences and the nature of the residual doubt.]

II. STATUTORY RULE
Section 10 mandates the lowest-punishment rule once a finding of guilt of one of several specified offences is recorded and a doubt as to which remains.

III. APPLICATION
The evidence establishes one of the alternatives but does not resolve which. The punishments differ. Therefore the Court must sentence for the offence carrying the lowest punishment.

IV. REBUTTAL
Any attempt to impose the higher maximum in the face of recorded residual doubt is contrary to the plain text of s. 10.

V. PRAYER
[Prayer for sentence under the offence carrying the lowest punishment.]`,
      explanation: 'Senior Counsel submissions on the residual rule.',
    },
  ],

  bareActPointers: [
    'BNS s. 10',
    'IPC s. 72 (historical)',
  ],

  examTips: [
    'Emphasise that guilt of one of the offences is already found; only the identity is doubtful.',
    'Distinguish residual characterisation doubt (s. 10) from ordinary benefit of doubt on guilt itself.',
  ],

  revisionPoints: [
    'Finding of guilt of one of several offences + residual doubt as to which → lowest punishment.',
    'Does not authorise acquittal.',
    'Does not apply when the evidence clearly establishes the graver offence.',
  ],

  relatedTopics: ['s-9', 's-4'],
}

export default content
