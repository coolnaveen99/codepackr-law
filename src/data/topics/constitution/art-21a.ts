import type { TopicContent } from '../loadTopicContent'

/**
 * Article 21A — Right to Education
 * Subject: constitution | Topic id: art-21a
 * Free and compulsory education for children 6–14; 86th Amendment; RTE Act 2009;
 * Unni Krishnan, Mohini Jain, Pramati Educational & Cultural Trust.
 */
const content: TopicContent = {
  glance:
    'Article 21A guarantees free and compulsory education to all children aged six to fourteen years in such manner as the State may, by law, determine. Inserted by the 86th Amendment (2002) and implemented by the Right of Children to Free and Compulsory Education Act, 2009. It elevates the earlier Directive Principle (Article 45) into a justiciable Fundamental Right.',

  study: `Topic at a Glance
Article 21A of the Constitution of India provides that the State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine. It was inserted by the Constitution (Eighty-Sixth Amendment) Act, 2002, and is the constitutional foundation of the Right of Children to Free and Compulsory Education Act, 2009 (RTE Act).

Constitutional Journey
1. Original Article 45 (DPSP): The State shall endeavour to provide free and compulsory education for all children until they complete the age of fourteen years.
2. Mohini Jain v. State of Karnataka (1992) and Unni Krishnan v. State of A.P. (1993): The Supreme Court read a right to education into Article 21, holding that education up to the age of 14 is a Fundamental Right flowing from the right to life.
3. 86th Amendment (2002):
   - Inserted Article 21A (justiciable right for ages 6–14).
   - Amended Article 45 to focus on early childhood care and education for children below six years.
   - Added Article 51A(k) — duty of parents/guardians to provide educational opportunities to children aged 6–14.
4. RTE Act, 2009: Statutory implementation — free and compulsory education, 25% reservation in private unaided schools for children from disadvantaged groups and weaker sections, norms for schools, teachers, and curriculum.

Scope of Article 21A
1. Age band: 6 to 14 years (not 0–6 or post-14 as a constitutional right under 21A itself).
2. “Free”: No fee, charge or expense that prevents the child from pursuing elementary education.
3. “Compulsory”: Obligation on the State to ensure admission, attendance and completion; corresponding duty on parents under Article 51A(k).
4. “In such manner as the State may, by law, determine”: Parliament and State Legislatures have leeway on the design of the scheme, subject to the core guarantee.

Private Institutions and Article 21A / RTE
1. Society for Unaided Private Schools of Rajasthan v. Union of India (2012): The 25% reservation under Section 12(1)(c) of the RTE Act was upheld for private unaided non-minority schools; minority institutions under Article 30 were held exempt.
2. Pramati Educational & Cultural Trust v. Union of India (2014): Confirmed that the RTE Act (including the 25% quota) does not apply to minority educational institutions, whether aided or unaided, protected under Article 30(1).

Relationship with Article 21
Article 21A is a specific embodiment of the broader right to education recognised under Article 21 in Unni Krishnan. Post-86th Amendment, the 6–14 right is textually anchored in 21A; education beyond that age continues to draw support from Article 21 and Directive Principles, but is not a free-standing justiciable right of the same intensity.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226 for enforcement of the right and challenge to non-implementation; statutory remedies under the RTE Act (local authorities, State commissions, National Commission for Protection of Child Rights).
2. Standing: Child, parent/guardian, NGO, or public-spirited citizen.
3. Typical directions: Ensure admission, free textbooks and uniforms, appointment of teachers, compliance with pupil–teacher ratio, enforcement of 25% quota in non-minority private schools.
4. Evidence: Enrolment and attendance data, school recognition records, notifications under the RTE Act, affidavits of denial of admission.

Current-Law Position & Milestone
Article 21A is in force. The RTE Act, 2009 (as amended) is the primary implementing statute. Minority institutions remain outside the 25% quota mandate (Pramati). Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a21a-text',
      title: 'Constitutional Text and 86th Amendment',
      order: 1,
      content: [
        'State shall provide free and compulsory education to all children aged 6–14 in such manner as the State may by law determine.',
        '86th Amendment (2002) inserted 21A, recast Article 45 (early childhood), and added Article 51A(k) (parental duty).',
      ],
    },
    {
      id: 'a21a-rte',
      title: 'RTE Act, 2009 — Implementation',
      order: 2,
      content: [
        'Free and compulsory elementary education; norms for schools and teachers.',
        'Section 12(1)(c): 25% reservation in private unaided schools for disadvantaged groups and weaker sections.',
        'Minority institutions under Article 30 exempt (Pramati).',
      ],
    },
    {
      id: 'a21a-cases',
      title: 'Leading Cases',
      order: 3,
      content: [
        'Mohini Jain (1992) and Unni Krishnan (1993): Right to education read into Article 21.',
        'Society for Unaided Private Schools (2012): 25% quota upheld for non-minority private schools.',
        'Pramati (2014): RTE Act does not apply to minority educational institutions under Article 30.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21a', article: 'Article 21A', title: 'Right to education' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-45', article: 'Article 45', title: 'Provision for early childhood care and education to children below the age of six years' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-51a', article: 'Article 51A(k)', title: 'Fundamental duties — parent/guardian educational duty' },
  ],

  examples: [
    {
      id: 'a21a-ex-1',
      title: 'Illustration 1 — Denial of Free Admission (Applies)',
      description: 'A government school demands a “development fee” from a child in Class IV as a condition of continued enrolment. This violates the “free” component of Article 21A and the RTE Act. The fee demand is unconstitutional and illegal.',
    },
    {
      id: 'a21a-ex-2',
      title: 'Illustration 2 — Minority Institution Exemption (Does Not Attract 25% Quota)',
      description: 'A minority educational institution protected under Article 30(1) refuses to implement the 25% RTE quota. Under Pramati, the institution is exempt. Article 21A does not override the minority right in this respect.',
    },
  ],

  hypotheticals: [
    {
      id: 'a21a-hypo',
      title: 'Chamber Practice Hypothetical (Private School Quota)',
      facts: 'A private unaided non-minority school refuses admission to children from the weaker section under the 25% quota, citing financial hardship and institutional autonomy under Article 19(1)(g). Parents approach the High Court.',
      question: 'Examine the constitutional validity of the school’s refusal in light of Article 21A and the RTE Act.',
      applicableLaw: 'Article 21A; RTE Act s. 12(1)(c); Society for Unaided Private Schools of Rajasthan (2012); Article 19(1)(g).',
      analysis: '1. Article 21A obliges the State to provide free and compulsory education; the RTE Act is the chosen manner of implementation.\n2. Section 12(1)(c) mandates 25% reservation in private unaided schools; the Supreme Court upheld this for non-minority institutions.\n3. Article 19(1)(g) is subject to reasonable restrictions in the interests of the general public; the quota is a reasonable restriction serving the constitutional right to education.\n4. Financial hardship may entitle the school to reimbursement as provided under the RTE Act, but does not justify outright refusal.',
      conclusion: 'The refusal is unconstitutional. The High Court should direct admission and ensure reimbursement machinery under the Act is worked.',
    },
  ],

  distinctions: [
    {
      id: 'a21a-dist-21',
      title: 'Article 21A vs Article 21 (Education)',
      left: 'Article 21A',
      right: 'Article 21 (education dimension)',
      rows: [
        { point: 'Age', left: 'Specifically 6–14 years', right: 'Broader; no fixed age band in the text' },
        { point: 'Source', left: 'Express constitutional text (86th Amendment)', right: 'Judicial reading in Unni Krishnan / Mohini Jain' },
        { point: 'Implementing law', left: 'RTE Act, 2009', right: 'General Article 21 jurisprudence and statutes' },
      ],
    },
    {
      id: 'a21a-dist-45',
      title: 'Article 21A vs Article 45',
      left: 'Article 21A',
      right: 'Article 45 (post-86th Amendment)',
      rows: [
        { point: 'Nature', left: 'Justiciable Fundamental Right', right: 'Directive Principle (non-justiciable)' },
        { point: 'Age', left: '6–14 years', right: 'Below six years (early childhood care and education)' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a21a-trap-1',
      trap: 'Article 21A guarantees free education at all levels including higher education.',
      correction: 'Article 21A is limited to children aged 6–14. Higher education may draw support from Article 21 and Directive Principles but is not a free-standing justiciable right under 21A.',
    },
    {
      id: 'a21a-trap-2',
      trap: 'The 25% RTE quota applies to all private schools including minority institutions.',
      correction: 'Pramati held that minority educational institutions under Article 30 are exempt from the RTE Act’s 25% quota mandate.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a21a-qa-10',
      draftingCategory: 'brief',
      question: 'Explain Article 21A of the Constitution. How is the right to free and compulsory education implemented?',
      answer: `I. ISSUE
Article 21A guarantees free and compulsory education for children aged 6–14.

II. CONSTITUTIONAL TEXT AND HISTORY
Inserted by the 86th Amendment (2002) after Mohini Jain and Unni Krishnan read education into Article 21. Article 45 was recast for early childhood; Article 51A(k) added a parental duty.

III. IMPLEMENTATION — RTE ACT, 2009
The Act provides free and compulsory elementary education, school norms, and a 25% reservation in private unaided non-minority schools for disadvantaged groups and weaker sections. Minority institutions are exempt (Pramati).

IV. ENFORCEMENT
Writ jurisdiction under Articles 32/226; statutory authorities under the RTE Act.

V. CONCLUSION
Article 21A converts a Directive Principle into a justiciable Fundamental Right for the 6–14 age group. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-21a', 'constitution-article-21'],
    },
    {
      id: 'a21a-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the right to education under Article 21A. Discuss its relationship with Article 21, the RTE Act, and the rights of minority educational institutions.',
      answer: `I. INTRODUCTION
Article 21A is the express constitutional guarantee of free and compulsory education for children aged six to fourteen. It sits at the intersection of the right to life, social justice Directive Principles, and institutional autonomy claims of private and minority schools.

II. FROM DIRECTIVE PRINCIPLE TO FUNDAMENTAL RIGHT
Original Article 45 directed the State to provide free and compulsory education up to age 14. Mohini Jain and Unni Krishnan elevated education to a Fundamental Right under Article 21. The 86th Amendment crystallised the 6–14 segment in Article 21A, shifted early childhood to Article 45, and added a parental duty under Article 51A(k).

III. SCOPE OF ARTICLE 21A
The right is age-specific (6–14), free of cost barriers, and compulsory on the State. The phrase “in such manner as the State may, by law, determine” gives legislative flexibility but does not dilute the core entitlement.

IV. RTE ACT AND PRIVATE SCHOOLS
Section 12(1)(c) of the RTE Act mandates 25% reservation in private unaided schools. The Supreme Court in Society for Unaided Private Schools upheld this for non-minority institutions as a reasonable restriction on Article 19(1)(g). Pramati Educational & Cultural Trust held that minority institutions under Article 30(1) are exempt from the RTE Act’s quota and related obligations that would abrogate their minority character.

V. ARTICLE 21A AND ARTICLE 21
Article 21A is a specific, textually anchored right. Article 21 continues to support a broader educational dimension (dignity, development, higher education access) but without the same free-and-compulsory mandate for ages outside 6–14.

VI. LITIGATION STRATEGY
1. For denial of free elementary education: plead Article 21A + RTE Act; seek mandamus for admission and facilities.
2. For quota disputes: identify whether the institution is minority-protected; if not, the 25% mandate applies.
3. Evidence: age proof, residence, income/disadvantage certificates, school recognition status.

VII. CONCLUSION
Article 21A is a landmark social right. Its effectiveness depends on statutory implementation, judicial enforcement, and careful balancing with minority rights under Article 30. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-21a', 'constitution-article-21', 'constitution-article-30'],
    },
  ],

  bareActPointers: ['Article 21A', '86th Amendment', 'RTE Act, 2009'],
  examTips: [
    'Trace Mohini Jain / Unni Krishnan → 86th Amendment → RTE Act.',
    'State the 6–14 age limit clearly.',
    'Mention Pramati exemption for minority institutions.',
  ],
  relatedTopics: ['art-21', 'art-45', 'fundamental-rights', 'dpsp', 'minority-rights'],
}

export default content
