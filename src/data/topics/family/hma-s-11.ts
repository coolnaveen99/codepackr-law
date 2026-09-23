import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 11 of the Hindu Marriage Act, 1955 declares a marriage null and void if it contravenes s. 5(i) (living spouse), s. 5(iv) (prohibited degrees) or s. 5(v) (sapinda relationship), unless custom governing both parties permits the latter two. The marriage is void ab initio; a decree of nullity is commonly sought for status and consequential reliefs. Children receive limited legitimacy under s. 16.',

  study: `Section 11 provides that any marriage solemnised after the commencement of the Act shall be null and void and may, on a petition presented by either party thereto against the other party, be so declared by a decree of nullity if it contravenes any one of the conditions specified in clauses (i), (iv) and (v) of section 5.

The three grounds are:
• s. 5(i) — neither party has a spouse living at the time of the marriage (bigamy);
• s. 5(iv) — the parties are not within the degrees of prohibited relationship, unless the custom or usage governing each of them permits of a marriage between the two;
• s. 5(v) — the parties are not sapindas of each other, unless the custom or usage governing each of them permits of a marriage between the two.

A void marriage is void ab initio. It produces no legal status as husband and wife. Nevertheless, parties ordinarily obtain a formal decree of nullity for clarity of status, for records, and to claim consequential reliefs such as maintenance under ss. 24–25 where available. Children of a void marriage are conferred limited legitimacy by s. 16.

Bigamy also attracts criminal liability under s. 17 HMA read with the corresponding penal provisions.

Custom may save a marriage that would otherwise fall within prohibited degrees or the sapinda bar, provided the custom governs both parties and satisfies the tests of a valid custom.`,

  sections: [
    {
      id: 'hma-s-11-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 11 is the statutory declaration of absolute nullity for the three most fundamental breaches of the conditions of a valid Hindu marriage under s. 5.',
        'Legislative objective: protect the monogamous character of Hindu marriage after the Act, and enforce the prohibited-relationship and sapinda rules while preserving genuine customary exceptions.',
        'Doctrinal foundation: a void marriage is a nullity from the beginning. No marital status arises. The decree of nullity under s. 11 is declaratory of an existing legal position rather than constitutive of a new one. Section 16 mitigates the consequences for children.',
      ],
    },
    {
      id: 'hma-s-11-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Trigger: marriage solemnised after the commencement of the Act that contravenes s. 5(i), (iv) or (v).',
        'Remedy: petition by either party against the other for a decree of nullity.',
        'Custom exception: applies only to the prohibited-degrees and sapinda grounds (s. 5(iv) and (v)); it does not save a bigamous marriage under s. 5(i).',
        'Effect: the marriage is null and void; the decree confirms that status.',
      ],
    },
    {
      id: 'hma-s-11-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. A marriage solemnised after the commencement of the HMA.',
        '2. The marriage contravenes at least one of: s. 5(i) (living spouse), s. 5(iv) (prohibited degrees without saving custom), or s. 5(v) (sapinda without saving custom).',
        '3. Petition presented by either party against the other party.',
        '4. For the custom exception (if invoked): the custom must govern both parties and be a valid custom in law.',
      ],
    },
    {
      id: 'hma-s-11-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The petitioner must prove the existence of the prior living spouse, or the relationship within prohibited degrees / sapinda relationship, on a preponderance of probabilities.',
        'A prior marriage is ordinarily proved by the marriage certificate, registration record, or other admissible evidence. Electronic records must satisfy BSA s. 63 where relied upon as primary electronic evidence.',
        'Where custom is pleaded as a saving factor, the party relying on custom bears the burden of proving its existence, continuous observance, and that it governs both parties.',
      ],
    },
    {
      id: 'hma-s-11-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Competent court: District Court / Family Court having jurisdiction under the HMA and the Family Courts Act.',
        'Petition for decree of nullity under s. 11. No statutory limitation period is prescribed for a s. 11 petition, but delay may affect discretionary reliefs.',
        'Consequential reliefs: maintenance under ss. 24–25 may be claimed in appropriate cases; legitimacy of children is governed by s. 16.',
        'Appeal lies under the ordinary appellate provisions applicable to Family Court / District Court decrees.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'hma',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 'hma-11',
      section: 's. 11',
      title: 'Void marriages',
    },
  ],

  examples: [
    {
      id: 'hma-s-11-ill-1',
      title: 'Illustration 1 — Bigamy (void ab initio)',
      illustrationType: 'statutory',
      description:
        'H is lawfully married to W1. Without obtaining a divorce he goes through a second ceremony of marriage with W2. The second marriage is null and void under s. 11 read with s. 5(i). W2 may petition for a decree of nullity. Criminal consequences under s. 17 HMA may also follow.',
    },
    {
      id: 'hma-s-11-ill-2',
      title: 'Illustration 2 — Prohibited degrees without custom',
      illustrationType: 'fail-scenario',
      description:
        'Two parties marry while within the degrees of prohibited relationship. Neither is governed by a custom that permits such a marriage. The marriage is void under s. 11 read with s. 5(iv). A decree of nullity may be sought by either party.',
    },
  ],

  hypotheticals: [
    {
      id: 'hma-s-11-hypo',
      title: 'Chamber Practice Hypothetical — Second marriage while first spouse living',
      facts:
        'A’s first wife is alive and the marriage has not been dissolved. In 2023 A goes through a second ceremony of marriage with B. B later discovers the subsistence of the first marriage and petitions for a decree of nullity and interim maintenance.',
      question:
        'What is the status of the second marriage, and what reliefs are available to B?',
      applicableLaw:
        'HMA ss. 5(i), 11, 16, 24 and 25; s. 17 HMA read with penal law.',
      analysis:
        '1. Threshold: The second marriage contravenes s. 5(i) because A had a spouse living.\n2. Consequence under s. 11: The marriage is null and void. B is entitled to a decree of nullity.\n3. Children (if any): Limited legitimacy under s. 16.\n4. Maintenance: B may claim interim and permanent maintenance under ss. 24–25 in appropriate circumstances.\n5. Criminal: A may also face prosecution under s. 17 HMA.',
      conclusion:
        'The second marriage is void ab initio under s. 11. B is entitled to a decree of nullity and may pursue consequential civil reliefs; criminal liability of A remains a separate question.',
    },
  ],

  distinctions: [
    {
      id: 'hma-s-11-dist-1',
      title: 'Void (s. 11) vs Voidable (s. 12)',
      left: 's. 11 Void',
      right: 's. 12 Voidable',
      rows: [
        { point: 'Status before decree', left: 'Void ab initio — no marital status arises', right: 'Valid until annulled by decree of nullity' },
        { point: 'Grounds', left: 's. 5(i) living spouse; s. 5(iv) prohibited degrees; s. 5(v) sapinda (custom exception for last two)', right: 'Impotence, contravention of s. 5(ii), force/fraud, pregnancy by another (with statutory bars)' },
        { point: 'Who may petition', left: 'Either party against the other', right: 'The aggrieved party, subject to the bars in s. 12(2)' },
        { point: 'Effect of decree', left: 'Declaratory of existing nullity', right: 'Annuls a marriage that was valid until the decree' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'hma-s-11-trap-1',
      trap: 'A void marriage under s. 11 needs no court order because it is already void.',
      correction:
        'While the marriage is void ab initio, parties almost invariably obtain a formal decree of nullity for clarity of status, official records, and to support claims for maintenance or other consequential reliefs.',
    },
    {
      id: 'hma-s-11-trap-2',
      trap: 'Custom can save a bigamous marriage under s. 11.',
      correction:
        'The custom exception applies only to the prohibited-degrees and sapinda grounds (s. 5(iv) and (v)). It does not apply to s. 5(i) (living spouse).',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 'hma-s-11-brief',
      draftingCategory: 'brief',
      question:
        'Explain void marriages under Section 11 of the Hindu Marriage Act, 1955.',
      answer: `I. ISSUE
Which marriages are null and void under s. 11, and what is the legal consequence?

II. GOVERNING RULE
A marriage solemnised after the Act is null and void if it contravenes s. 5(i), (iv) or (v). Either party may obtain a decree of nullity. Custom may save the last two grounds if it governs both parties.

III. APPLICATION
Identify the contravened condition → confirm absence of saving custom (where relevant) → decree of nullity is available; children protected under s. 16 within limits.

IV. CONCLUSION
Section 11 declares absolute nullity for the three fundamental breaches of s. 5; the decree is declaratory.`,
      explanation: 'IRAC note on void marriages.',
    },
    {
      id: 'hma-s-11-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions seeking a decree of nullity under HMA s. 11 on the ground of a living spouse, and claiming consequential reliefs.',
      answer: `I. STATEMENT OF FACTS
[Insert the prior subsisting marriage, the second ceremony, and the discovery by the petitioner.]

II. STATUTORY SCHEME
Section 5(i) requires that neither party has a spouse living. Section 11 declares a marriage that contravenes this condition null and void and provides for a decree of nullity.

III. APPLICATION
The respondent had a living spouse at the time of the second ceremony. The second marriage is therefore void ab initio. The petitioner is entitled to a decree of nullity.

IV. CONSEQUENTIAL RELIEFS
Children (if any) are protected under s. 16. The petitioner seeks interim and permanent maintenance under ss. 24–25.

V. PRAYER
[Decree of nullity under s. 11; consequential reliefs as above.]`,
      explanation: 'Senior Counsel submissions for nullity under s. 11.',
    },
  ],

  bareActPointers: [
    'HMA s. 11',
    'HMA s. 5(i), (iv), (v)',
    'HMA s. 16 (legitimacy of children)',
    'HMA s. 17 (punishment for bigamy)',
  ],

  examTips: [
    'Always name the three grounds linked to s. 5(i), (iv) and (v).',
    'State that the marriage is void ab initio and that custom cannot save bigamy.',
    'Contrast clearly with s. 12 (voidable — valid until annulled).',
  ],

  revisionPoints: [
    's. 11: bigamy / prohibited degrees / sapinda (custom may save last two only).',
    'Void ab initio; decree of nullity is declaratory.',
    's. 16 protects children within limits.',
  ],

  relatedTopics: ['hma-s-12', 'hma-s-5', 'hma-s-13', 'hma-s-13b'],
}

export default content
