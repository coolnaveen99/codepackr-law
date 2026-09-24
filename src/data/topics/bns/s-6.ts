import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 6 is a pure calculation rule: when any provision requires a fraction of a term of punishment and the term is imprisonment for life, life is reckoned as equivalent to twenty years unless otherwise provided. It does not convert life imprisonment into a fixed twenty-year sentence.',

  study: `Section 6 succeeds IPC section 57. It supplies a numerical equivalent solely for the purpose of calculating fractions of terms of punishment.

Text: “In calculating fractions of terms of punishment, imprisonment for life shall be reckoned as equivalent to imprisonment for twenty years unless otherwise provided.”

The rule is strictly limited. It does not mean that every life sentence expires at twenty years. Life imprisonment remains imprisonment for the remainder of the natural life of the convict unless lawfully commuted or remitted. Section 6 operates only when a statute, rule or order requires a fraction (one-half, one-third, one-fourth, etc.) to be computed and the starting term is life.

Typical contexts: certain remission calculations, eligibility thresholds expressed as a fraction of the sentence, or consecutive-sentence mathematics where a fraction of a life term must be ascertained.

Where another statute or the BNSS itself provides a different numerical equivalent, that specific provision prevails (“unless otherwise provided”).

Date-of-offence note: for offences on or after 1 July 2024 cite BNS s. 6; the substance is identical to the former IPC s. 57.`,

  sections: [
    {
      id: 's-6-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 6 is the direct successor of IPC section 57. The BNS retains the twenty-year equivalence without alteration.',
        'Legislative objective: provide a uniform, predictable numerical base whenever a fraction of a life sentence must be calculated, avoiding uncertainty in remission, parole-eligibility and consecutive-sentence arithmetic.',
        'Doctrinal foundation: life imprisonment is a distinct species of punishment (remainder of natural life). Section 6 is an interpretive fiction that operates only for fractional calculations; it does not redefine the nature of the sentence itself. This distinction has been repeatedly affirmed by the Supreme Court in the Gopal Vinayak Godse – Maru Ram – Union of India v. V. Sriharan line.',
      ],
    },
    {
      id: 's-6-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Operative clause: life imprisonment is reckoned as equivalent to imprisonment for twenty years when (and only when) a fraction of a term of punishment must be calculated.',
        'Saving phrase: “unless otherwise provided” — any specific statute, rule or BNSS provision that supplies a different figure overrides s. 6 for that purpose.',
        'No other conditions, explanations or illustrations appear in the section. The provision is self-contained and purely arithmetic.',
      ],
    },
    {
      id: 's-6-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A legal provision (statute, rule, order or BNSS provision) requires calculation of a fraction of a term of punishment.',
        '2. The term in question is imprisonment for life.',
        '3. No contrary numerical equivalent is “otherwise provided” by another applicable law.',
        '4. The twenty-year figure is then applied solely for the fractional computation.',
      ],
    },
    {
      id: 's-6-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Section 6 raises no evidentiary issue. It is a pure rule of calculation applied by courts and executive authorities.',
        'If the underlying sentence or the fact that it is a life sentence is disputed, the ordinary burden under BSA s. 104 rests on the party asserting the sentence. Once the life character is established, s. 6 supplies the arithmetic equivalent automatically.',
      ],
    },
    {
      id: 's-6-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The rule is applied by the sentencing court (when consecutive sentences or fractional adjustments arise), by the prison authorities (remission / parole eligibility calculations), and by the High Court or Supreme Court on appeal or revision.',
        'No independent limitation period attaches to the rule itself. Challenges to an erroneous application of the twenty-year equivalence are brought in the ordinary appellate or writ jurisdiction.',
        'Competent forum: the court or authority that is performing the fractional calculation; supervisory jurisdiction of the High Court under Art. 226 / BNSS revision powers where the calculation is alleged to be illegal.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-6',
      section: 's. 6',
      title: 'Fractions of terms of punishment',
    },
  ],

  examples: [
    {
      id: 's-6-ill-1',
      title: 'Illustration 1 — Fraction correctly applied',
      illustrationType: 'statutory',
      description:
        'A statute or prison rule requires that a life convict become eligible for consideration after serving one-third of the sentence. Under s. 6, life is treated as twenty years; one-third is therefore six years and eight months. The authority correctly uses that figure for eligibility calculation. The underlying life sentence itself remains imprisonment for the remainder of natural life.',
    },
    {
      id: 's-6-ill-2',
      title: 'Illustration 2 — Boundary defect (misreading s. 6 as a fixed term)',
      illustrationType: 'fail-scenario',
      description:
        'A life convict claims automatic release on completion of twenty years, citing s. 6. The claim is untenable. Section 6 supplies a figure only for fractional calculations; it does not convert life imprisonment into a determinate twenty-year term. Release still depends on commutation, remission or other lawful executive action.',
    },
  ],

  hypotheticals: [
    {
      id: 's-6-hypo',
      title: 'Chamber Practice Hypothetical — Fraction of life in consecutive sentencing',
      facts:
        'D is convicted of two offences. For the first he receives life imprisonment; for the second he receives a term of ten years. The court is required by the relevant consecutive-sentence provision to order that a stated fraction of the life term shall run consecutively with the fixed term.',
      question:
        'What numerical figure does the court use for the life component when computing the consecutive portion?',
      applicableLaw: 'BNS s. 6; the consecutive-sentence provision in the BNSS or special statute; sentencing principles.',
      analysis:
        '1. Threshold: A fraction of a life sentence must be calculated.\n2. Ingredient verification: The term is life; no contrary figure is “otherwise provided”.\n3. Application: s. 6 supplies twenty years as the base; the required fraction is applied to that base.\n4. Consequence: The resulting figure is used only for the consecutive-sentence arithmetic; the life sentence itself is not shortened to twenty years.',
      conclusion:
        'The court uses the twenty-year equivalence solely for the fractional calculation required by the consecutive-sentence rule. Life remains life.',
    },
  ],

  distinctions: [
    {
      id: 's-6-dist-1',
      title: 'Life imprisonment vs Twenty-year equivalence under s. 6',
      left: 'Imprisonment for life (s. 4(b))',
      right: 's. 6 twenty-year figure',
      rows: [
        { point: 'Nature', left: 'Remainder of natural life (subject to commutation/remission)', right: 'Purely arithmetic equivalent for fractional calculations' },
        { point: 'When it applies', left: 'Whenever the offence section authorises life', right: 'Only when a fraction of a term must be calculated' },
        { point: 'Effect on release', left: 'No automatic release date', right: 'None — does not create a release date' },
        { point: 'Overridable', left: 'By commutation or remission', right: 'By any provision that “otherwise provides” a different figure' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-6-trap-1',
      trap: 'Life imprisonment always means twenty years because of s. 6.',
      correction:
        'Section 6 operates only when a fraction of the term must be calculated. Life imprisonment remains imprisonment for the remainder of natural life unless lawfully commuted or remitted.',
    },
    {
      id: 's-6-trap-2',
      trap: 'Section 6 converts every life sentence into a fixed twenty-year term for all purposes.',
      correction:
        'The section is expressly limited to “calculating fractions of terms of punishment”. It is an interpretive fiction, not a redefinition of the sentence.',
    },
  ],

  cases: [
    {
      name: 'Gopal Vinayak Godse v. State of Maharashtra',
      year: 1961,
      citation: 'AIR 1961 SC 600',
      court: 'Supreme Court of India',
      bench: 'Constitution Bench',
      facts: 'Life convict claimed automatic release after twenty years on the strength of the then-existing IPC s. 57 equivalence.',
      issue: 'Whether the twenty-year figure in s. 57 (now BNS s. 6) converts life imprisonment into a determinate sentence.',
      ratioDecidendi:
        'Imprisonment for life means imprisonment for the whole of the remaining period of the convicted person’s natural life. The twenty-year equivalence is only for the purpose of calculating fractions; it does not fix the duration of the sentence.',
      holding: 'Claim of automatic release rejected.',
      relevance:
        'Foundational authority still cited for the limited scope of the twenty-year rule now contained in BNS s. 6.',
    },
    {
      name: 'Union of India v. V. Sriharan @ Murugan',
      year: 2016,
      citation: '(2016) 7 SCC 1',
      court: 'Supreme Court of India',
      bench: 'Constitution Bench',
      facts: 'Questions concerning the power to impose sentences of life imprisonment without remission and the nature of life imprisonment.',
      issue: 'Nature of life imprisonment and the power of the Court to restrict remission.',
      ratioDecidendi:
        'Life imprisonment means the whole of the remaining natural life. Courts may, in appropriate cases, impose a sentence of life without the possibility of remission for a stated period, but the basic character of life as remainder of natural life remains.',
      holding: 'Clarified the constitutional and statutory contours of life imprisonment and remission.',
      relevance:
        'Reinforces that s. 6 (or its IPC predecessor) does not alter the fundamental character of life imprisonment.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-6-brief',
      draftingCategory: 'brief',
      question:
        'Explain the rule contained in Section 6 of the Bharatiya Nyaya Sanhita, 2023 and its precise limits.',
      answer: `I. ISSUE
What figure is used when a fraction of a life sentence must be calculated?

II. GOVERNING RULE
Section 6 provides that imprisonment for life shall be reckoned as equivalent to imprisonment for twenty years when calculating fractions of terms of punishment, unless otherwise provided.

III. APPLICATION
The twenty-year figure is used only for the arithmetic of the fraction. It does not convert life into a determinate twenty-year term.

IV. CONCLUSION
Cite s. 6 for the calculation; simultaneously emphasise that life remains life unless lawfully commuted or remitted.`,
      explanation: 'IRAC note on the limited arithmetic rule.',
    },
    {
      id: 's-6-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on the true scope of BNS s. 6, distinguishing the twenty-year equivalence from the nature of life imprisonment.',
      answer: `I. STATEMENT OF FACTS
[Insert the context in which a fraction of a life sentence is being calculated.]

II. STATUTORY TEXT & INTENT
Section 6 is a pure calculation rule. The phrase “unless otherwise provided” preserves the primacy of any specific contrary figure.

III. MANDATORY INGREDIENTS
(a) A fraction must be calculated;
(b) the term is life imprisonment;
(c) no contrary figure is otherwise provided.

IV. BINDING AUTHORITIES
Gopal Vinayak Godse — twenty-year figure is only for fractions.
V. Sriharan — life means remainder of natural life.

V. REBUTTAL
Any claim that s. 6 creates an automatic release date at twenty years is contrary to the text and to the Constitution Bench authorities.

VI. PRAYER
[Apply the twenty-year figure solely for the required fractional calculation; affirm that the life sentence itself continues.]`,
      explanation: 'Senior Counsel submissions protecting the true character of life imprisonment.',
    },
  ],

  bareActPointers: [
    'BNS s. 6',
    'BNS s. 4(b) (imprisonment for life)',
    'IPC s. 57 (historical)',
  ],

  examTips: [
    'State the rule and immediately add the limitation: “only for calculating fractions”.',
    'Never write “life = 20 years” without the qualifying context.',
    'Cite Gopal Vinayak Godse if the examiner presses the point.',
  ],

  revisionPoints: [
    'Life = 20 years only for fractional calculations (s. 6).',
    'Life itself remains remainder of natural life.',
    '“Unless otherwise provided” allows a different figure in other laws.',
    'Key authority: Gopal Vinayak Godse (1961).',
  ],

  relatedTopics: ['s-4', 's-5', 's-8'],
}

export default content
