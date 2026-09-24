import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 5 empowers the appropriate Government to commute any punishment under the BNS to any other punishment, without the consent of the offender, in accordance with section 474 of the BNSS. It is the statutory commutation power and co-exists with constitutional clemency under Articles 72 and 161.',

  study: `Section 5 is the modern restatement of the commutation power. Unlike the detailed tables that once appeared in IPC sections 54 and 55, the BNS text is deliberately lean: the appropriate Government may, without the consent of the offender, commute any punishment to any other punishment in accordance with BNSS section 474.

The detailed conversion scale (death → life, life → term of years, etc.) now lives in BNSS s. 474. Section 5 of the BNS merely confers the power and identifies the authority.

Explanation to s. 5 defines “appropriate Government”:
(a) Central Government — where the sentence is of death, or the offence relates to a matter within the executive power of the Union;
(b) State Government — where the sentence (whether of death or not) is for an offence relating to a matter within the executive power of the State, and the offender was sentenced within that State.

The power is executive. It is distinct from, and additional to, the constitutional clemency powers of the President (Art. 72) and the Governor (Art. 161). Both routes remain open.

Date-of-offence rule continues to apply: for offences committed on or after 1 July 2024 the BNS citation is used; the substance is continuous with the former IPC regime.`,

  sections: [
    {
      id: 's-5-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 5 succeeds IPC sections 54 and 55. The BNS deliberately removes the detailed conversion tables and relocates the operational scale to BNSS s. 474, keeping the BNS provision as a clean conferral of power.',
        'Legislative objective: preserve executive flexibility to reduce sentences without requiring the offender’s consent, while aligning the mechanics with the new procedural Code.',
        'Doctrinal foundation: commutation is an act of executive clemency of statutory origin. It co-exists with the independent constitutional powers under Articles 72 and 161. Judicial review of both streams is limited to the grounds of arbitrariness, non-application of mind, mala fides or violation of residual Art. 21 guarantees (Epuru Sudhakar, Shatrughan Chauhan line).',
      ],
    },
    {
      id: 's-5-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Operative clause: “The appropriate Government may, without the consent of the offender, commute any punishment under this Sanhita to any other punishment in accordance with section 474 of the Bharatiya Nagarik Suraksha Sanhita, 2023.”',
        'Explanation (a): Central Government is the appropriate Government when the sentence is of death or the offence concerns a Union subject.',
        'Explanation (b): State Government is the appropriate Government when the sentence (death or otherwise) concerns a State subject and the offender was sentenced within that State.',
        'Key statutory features: (i) no consent of the offender is required; (ii) the destination punishment must be authorised by BNSS s. 474; (iii) the power is discretionary, not obligatory.',
      ],
    },
    {
      id: 's-5-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A valid sentence of any of the punishments listed in BNS s. 4 has been passed.',
        '2. The authority exercising the power is the “appropriate Government” as defined in the Explanation.',
        '3. The commutation is to a punishment permitted by BNSS s. 474.',
        '4. The offender’s consent is not a pre-condition (express statutory language).',
        '5. The decision must be a bona-fide exercise of discretion (reviewable on limited grounds).',
      ],
    },
    {
      id: 's-5-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Commutation is an executive act, not a judicial proceeding. No formal burden of proof under BSA ss. 104–106 arises inside the commutation process itself.',
        'If the decision is challenged by writ, the petitioner must establish the limited grounds of review (arbitrariness, non-application of mind, mala fides, or residual Art. 21 violation). The State then produces the relevant record.',
        'Where electronic records of the recommendation or decision are relied upon, BSA s. 63 certificate compliance is required if the Court treats them as primary electronic evidence.',
      ],
    },
    {
      id: 's-5-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The power is exercised by the appropriate Government on the advice of the competent authority under the prison rules / BNSS framework.',
        'No limitation period applies to the executive power itself. A writ petition challenging an order (or prolonged non-consideration) is governed by the ordinary principles of delay and laches under Art. 226 / 32.',
        'Competent forum for challenge: High Court under Art. 226 (or Supreme Court under Art. 32 in appropriate cases). The trial court that passed the sentence has no power under s. 5.',
        'Relationship with BNSS s. 474: the detailed conversion table and any procedural safeguards are located there; s. 5 merely confers the power and identifies the Government.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-5',
      section: 's. 5',
      title: 'Commutation of sentence',
    },
  ],

  examples: [
    {
      id: 's-5-ill-1',
      title: 'Illustration 1 — Valid statutory commutation',
      illustrationType: 'statutory',
      description:
        'A is sentenced to death by a Sessions Court for an offence under BNS s. 103. The State Government, being the appropriate Government under Explanation (b), examines the petition and, acting under s. 5 read with BNSS s. 474, commutes the sentence to imprisonment for life. A’s consent is not required. The commutation is valid.',
    },
    {
      id: 's-5-ill-2',
      title: 'Illustration 2 — Boundary defect (court has no power)',
      illustrationType: 'fail-scenario',
      description:
        'B is sentenced to rigorous imprisonment for seven years. At the stage of judgment the trial court itself purports to “commute” the sentence to fine under s. 5. The order is without jurisdiction. Section 5 confers power only on the appropriate Government, not on the sentencing court.',
    },
  ],

  hypotheticals: [
    {
      id: 's-5-hypo',
      title: 'Chamber Practice Hypothetical — Dual routes of clemency',
      facts:
        'C was sentenced to death in 2025 for a Union-list offence. A mercy petition under Art. 72 is pending before the President. Simultaneously C’s counsel files a representation under BNS s. 5 seeking commutation by the Central Government.',
      question:
        'Can both routes be pursued concurrently? What is the relationship between s. 5 and Art. 72?',
      applicableLaw:
        'BNS s. 5; BNSS s. 474; Constitution Arts. 72 and 161; Epuru Sudhakar / Shatrughan Chauhan principles.',
      analysis:
        '1. Threshold: Both the statutory power (s. 5) and the constitutional power (Art. 72) are independent and concurrent.\n2. Ingredient verification: The Central Government is the appropriate Government under Explanation (a) because the sentence is of death and the offence is a Union subject.\n3. Evidentiary / procedural: Each authority acts on its own record. Rejection under one route does not automatically bar the other, although practical comity is observed.\n4. Defenses: The State cannot claim that the existence of an Art. 72 petition extinguishes the s. 5 power.',
      conclusion:
        'Both routes remain open. Counsel may pursue them in parallel. The statutory route under s. 5 is not subsumed by the constitutional power.',
    },
  ],

  distinctions: [
    {
      id: 's-5-dist-1',
      title: 'Statutory commutation (s. 5) vs Constitutional clemency (Arts. 72 / 161)',
      left: 'BNS s. 5',
      right: 'Arts. 72 & 161',
      rows: [
        { point: 'Source of power', left: 'Statute (BNS)', right: 'Constitution' },
        { point: 'Authority', left: 'Appropriate Government (Central or State)', right: 'President / Governor' },
        { point: 'Consent of offender', left: 'Not required', right: 'Not required' },
        { point: 'Operational detail', left: 'Must conform to BNSS s. 474', right: 'No statutory table; guided by constitutional principles and guidelines' },
        { point: 'Judicial review', left: 'Limited (arbitrariness, non-application of mind, mala fides)', right: 'Same limited grounds' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-5-trap-1',
      trap: 'Commutation under s. 5 requires the consent of the offender.',
      correction:
        'The section expressly provides that the power may be exercised “without the consent of the offender”.',
    },
    {
      id: 's-5-trap-2',
      trap: 'The detailed conversion table (death → life, life → 14 years, etc.) is still contained in BNS s. 5.',
      correction:
        'The BNS text is lean. The conversion scale now resides in BNSS section 474. Section 5 only confers the power and identifies the appropriate Government.',
    },
    {
      id: 's-5-trap-3',
      trap: 'Once a mercy petition under Art. 72 is filed, the statutory power under s. 5 disappears.',
      correction:
        'The two powers are independent and concurrent. One does not extinguish the other.',
    },
  ],

  cases: [
    {
      name: 'Epuru Sudhakar v. Government of A.P.',
      year: 2006,
      citation: '(2006) 8 SCC 161',
      court: 'Supreme Court of India',
      bench: '2-Judge Bench',
      facts: 'Challenge to a remission/commutation order on grounds of political favouritism and non-application of mind.',
      issue: 'Scope of judicial review over executive clemency / commutation orders.',
      ratioDecidendi:
        'Judicial review of clemency and commutation orders is available on limited grounds — arbitrariness, mala fides, non-application of mind, or violation of residual Art. 21 guarantees — but the Court does not sit as an appellate authority on the merits of the decision.',
      holding: 'Order set aside for non-application of mind and extraneous considerations.',
      relevance:
        'Binding authority on the limited reviewability of both statutory commutation under s. 5 and constitutional clemency under Arts. 72/161.',
    },
    {
      name: 'Shatrughan Chauhan v. Union of India',
      year: 2014,
      citation: '(2014) 3 SCC 1',
      court: 'Supreme Court of India',
      bench: '3-Judge Bench',
      facts: 'Series of death-row convicts challenged prolonged delay in disposal of mercy petitions and related executive inaction.',
      issue: 'Whether unexplained delay in executive consideration of clemency petitions violates Art. 21 and justifies commutation.',
      ratioDecidendi:
        'Unexplained, inordinate delay in disposal of mercy petitions can be a ground for commutation of the death sentence under Art. 21. The executive must decide petitions within a reasonable time.',
      holding: 'Death sentences of several petitioners commuted to life imprisonment on the ground of delay.',
      relevance:
        'Directly relevant when a s. 5 representation or Art. 72 petition remains pending for an unreasonable period; delay itself can found a claim for relief.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-5-brief',
      draftingCategory: 'brief',
      question:
        'Provide a structured legal assessment of the power of commutation under Section 5 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether the appropriate Government may reduce a sentence already passed, and on what terms.

II. GOVERNING RULE & STATUTORY ANATOMY
Section 5 confers power on the appropriate Government to commute any punishment to any other punishment in accordance with BNSS s. 474, without the consent of the offender. The Explanation identifies Central or State Government according to the nature of the offence and the place of sentence.

III. APPLICATION TO FACTUAL DISPUTE
Identify the appropriate Government → confirm that the destination punishment is authorised by BNSS s. 474 → record that consent is unnecessary → note that the power is concurrent with Arts. 72/161.

IV. CONCLUSION & OPERATIVE ADVICE
The statutory route under s. 5 is independent of constitutional clemency. Both may be pursued. Judicial review is limited to the Epuru Sudhakar / Shatrughan Chauhan grounds.`,
      explanation: 'IRAC chamber assessment of s. 5.',
    },
    {
      id: 's-5-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft comprehensive Written Submissions on the scheme of commutation under BNS s. 5, its relationship with BNSS s. 474 and with constitutional clemency under Articles 72 and 161.',
      answer: `I. STATEMENT OF FACTS & PROCEDURAL PROVENANCE
[Insert sentence, date of offence, pending petitions, and identity of the appropriate Government.]

II. STATUTORY SCHEME & JURISPRUDENTIAL INTENT
Section 5 is a clean conferral of power. The operational scale is located in BNSS s. 474. The BNS deliberately avoids repeating the old IPC conversion tables.

III. SATISFACTION OF MANDATORY PROVING INGREDIENTS
(a) Valid sentence under BNS s. 4;
(b) Exercise by the appropriate Government as defined in the Explanation;
(c) Destination punishment authorised by BNSS s. 474;
(d) No requirement of offender’s consent.

IV. JUDICIAL PRECEDENTS & RATIO DECIDENDI
Epuru Sudhakar — limited review grounds.
Shatrughan Chauhan — delay as an independent ground for relief under Art. 21.

V. REBUTTAL OF ADVERSARY’S CONTENTIONS
“Consent is required” — contrary to the plain text.
“Art. 72 extinguishes s. 5” — the powers are concurrent.
“Court itself can commute” — jurisdiction lies only with the appropriate Government.

VI. PRAYER / RELIEF SOUGHT
[Appropriate prayer — consideration of representation, or quashing of an arbitrary rejection, or commutation on the ground of delay.]`,
      explanation: 'Senior Counsel standard written submissions.',
    },
  ],

  bareActPointers: [
    'BNS s. 5 (entire)',
    'BNSS s. 474 (conversion scale and procedure)',
    'Constitution Arts. 72 and 161',
    'BNS s. 4 (punishments that may be commuted)',
  ],

  examTips: [
    'Always state that consent of the offender is not required.',
    'Locate the conversion table in BNSS s. 474, not in BNS s. 5.',
    'Distinguish statutory commutation from constitutional clemency; both remain open.',
  ],

  revisionPoints: [
    's. 5 = power to commute any punishment without consent of offender.',
    'Appropriate Government defined in the Explanation (Central or State).',
    'Operational scale now in BNSS s. 474.',
    'Co-exists with Arts. 72 and 161; judicial review limited (Epuru Sudhakar / Shatrughan Chauhan).',
  ],

  relatedTopics: ['s-4', 's-6', 's-8'],
}

export default content
