import type { TopicContent } from '../loadTopicContent'

/**
 * Article 15 — Prohibition of Discrimination
 * Subject: constitution | Topic id: art-15
 * Formal equality, protective discrimination, Arts 15(3)–15(6), EWS (103rd Amendment),
 * Indra Sawhney, Nagaraj, Davinder Singh, and substantive equality under Article 14–15–16 code.
 */
const content: TopicContent = {
  glance:
    'Article 15 prohibits the State from discriminating against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. Clauses (3)–(6) permit protective discrimination for women, children, socially and educationally backward classes, SCs/STs, and economically weaker sections. It is the principal constitutional basis for reservation and affirmative action outside public employment.',

  study: `Topic at a Glance
Article 15 of the Constitution of India is the cornerstone of anti-discrimination law in the sphere of civic life. It forbids the State from discriminating against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them, while simultaneously authorising protective discrimination in favour of women, children, socially and educationally backward classes, Scheduled Castes, Scheduled Tribes, and (after the 103rd Amendment) economically weaker sections.

Statutory Anatomy
1. Article 15(1) — Negative mandate: The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.
2. Article 15(2) — Horizontal reach: No citizen shall, on the same grounds, be subject to any disability, liability, restriction or condition with regard to access to shops, public restaurants, hotels, places of public entertainment, or the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.
3. Article 15(3) — Special provision for women and children (original text).
4. Article 15(4) — Special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes (1st Amendment, 1951).
5. Article 15(5) — Special provision by law for the advancement of any socially and educationally backward classes or for the SCs/STs relating to their admission to educational institutions including private educational institutions, whether aided or unaided, other than minority educational institutions under Article 30(1) (93rd Amendment, 2005).
6. Article 15(6) — Special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5), including reservation in educational institutions (103rd Amendment, 2019).

Who is Protected?
Article 15 protects “citizens” only (unlike Article 14 which protects “any person”). Non-citizens cannot claim Article 15.

The “Only” Doctrine
The use of the word “only” is critical. Discrimination on the enumerated grounds is prohibited when that ground is the sole or exclusive basis. Classification that uses one of these grounds along with other relevant factors may still survive if it satisfies the twin test of Article 14 (intelligible differentia + rational nexus). See State of Madras v. Champakam Dorairajan (1951) and later cases refining the “only” test.

Protective Discrimination & Substantive Equality
Article 15(3)–(6) convert formal equality into substantive equality. The State is empowered — not merely permitted — to take positive measures so that historically disadvantaged groups can compete on a level playing field. This architecture was judicially consolidated in Indra Sawhney v. Union of India (1992), Ashoka Kumar Thakur v. Union of India (2008), and Janhit Abhiyan v. Union of India (2022) (EWS upheld).

Key Amendments
- 1st Amendment (1951): Inserted Article 15(4) after Champakam Dorairajan struck down communal reservations in education.
- 93rd Amendment (2005): Inserted Article 15(5) enabling OBC reservation in private educational institutions (except minority institutions under Art 30).
- 103rd Amendment (2019): Inserted Article 15(6) and 16(6) for 10% EWS reservation; upheld in Janhit Abhiyan (2022) 5-judge majority.

Procedural & Courtroom Anchors (Senior Counsel Checklist)
1. Forum: Supreme Court under Article 32; High Court under Article 226.
2. Standing: Any citizen aggrieved by discriminatory state action or denial of protective benefits; public interest litigation available for systemic discrimination.
3. Burden: Petitioner must show that the classification is based “only” on a prohibited ground or is manifestly arbitrary. Once a prima facie case of discrimination is made, the State must justify the measure under clauses (3)–(6) or the twin test of Article 14.
4. Remedies: Writ of certiorari to quash discriminatory rules/notifications; mandamus to compel equal access or implementation of valid reservation policy; declaration of unconstitutionality of statutes or rules.

Current-Law Position & Milestone
Article 15 stands as amended by the 1st, 93rd and 103rd Amendments. The 50% ceiling on reservations (Indra Sawhney) continues to guide ordinary reservation, subject to extraordinary situations and the separate EWS quota upheld in Janhit Abhiyan. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a15-negative',
      title: 'Article 15(1) & 15(2) — Negative Mandate and Horizontal Reach',
      order: 1,
      content: [
        'Article 15(1) forbids State discrimination against citizens on grounds only of religion, race, caste, sex, place of birth or any of them.',
        'Article 15(2) extends the prohibition horizontally to private places of public resort funded or dedicated to public use (shops, restaurants, wells, roads, etc.).',
        'The word “only” is decisive: the prohibited ground must be the exclusive basis of the discrimination.',
      ],
    },
    {
      id: 'a15-protective',
      title: 'Clauses (3)–(6) — Protective Discrimination',
      order: 2,
      content: [
        'Article 15(3): Special provisions for women and children (original).',
        'Article 15(4): Advancement of SEBCs, SCs and STs (1st Amendment).',
        'Article 15(5): Admission to educational institutions including private unaided (except minority under Art 30) (93rd Amendment).',
        'Article 15(6): Economically weaker sections — 10% EWS (103rd Amendment; Janhit Abhiyan).',
      ],
    },
    {
      id: 'a15-jurisprudence',
      title: 'Leading Jurisprudence',
      order: 3,
      content: [
        'Champakam Dorairajan (1951): Communal reservation in education struck down → led to 1st Amendment.',
        'Indra Sawhney (1992): 50% ceiling; creamy layer for OBCs; no reservation in promotions under Art 16(4) at that time.',
        'Ashoka Kumar Thakur (2008): 93rd Amendment and OBC reservation in central educational institutions upheld.',
        'Janhit Abhiyan (2022): 103rd Amendment (EWS) upheld; economic criterion alone is a valid basis for classification.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-15', article: 'Article 15', title: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-16', article: 'Article 16', title: 'Equality of opportunity in matters of public employment' },
  ],

  examples: [
    {
      id: 'a15-ex-1',
      title: 'Illustration 1 — Valid Protective Discrimination (Applies)',
      description: 'A State law reserves 27% of seats in government medical colleges for socially and educationally backward classes identified by a contemporaneous survey, excludes the creamy layer, and respects the 50% overall ceiling. The classification is authorised by Article 15(4) and satisfies Indra Sawhney principles. The reservation is valid.',
    },
    {
      id: 'a15-ex-2',
      title: 'Illustration 2 — Pure Communal Quota (Fails)',
      description: 'A university circular allots seats solely on the basis of religion (fixed percentages for each religious community) without any finding of social and educational backwardness. This is discrimination on the ground only of religion and is void under Article 15(1), following Champakam Dorairajan.',
    },
  ],

  hypotheticals: [
    {
      id: 'a15-hypo',
      title: 'Chamber Practice Hypothetical (EWS & Institutional Autonomy)',
      facts: 'A private unaided professional college challenges a State notification that mandates 10% EWS reservation in its admissions under Article 15(6). The college argues that (a) economic criterion alone is not a constitutionally recognised basis of classification, and (b) the mandate violates its institutional autonomy under Article 19(1)(g).',
      question: 'Examine the constitutional validity of the EWS mandate in light of Janhit Abhiyan and the scope of Article 15(6).',
      applicableLaw: 'Article 15(6); Article 14; Article 19(1)(g); Janhit Abhiyan v. Union of India (2022).',
      analysis: '1. Article 15(6) expressly authorises special provisions for economically weaker sections other than those covered by clauses (4) and (5), including reservation in educational institutions.\n2. Janhit Abhiyan (5-judge majority) upheld the 103rd Amendment: economic criterion is a valid intelligible differentia; the 50% ceiling of Indra Sawhney does not apply to the separate EWS quota.\n3. Private unaided institutions (non-minority) are within the reach of Article 15(5) and, by parity, Article 15(6). Institutional autonomy under Article 19(1)(g) is subject to reasonable restrictions in the interests of the general public.\n4. The notification is constitutionally sustainable if it is framed within the statutory scheme implementing Article 15(6).',
      conclusion: 'The EWS reservation mandate is valid under Article 15(6) as interpreted in Janhit Abhiyan. The college’s challenge on pure economic-classification and autonomy grounds is likely to fail.',
    },
  ],

  distinctions: [
    {
      id: 'a15-dist-14',
      title: 'Article 15 vs Article 14',
      left: 'Article 15',
      right: 'Article 14',
      rows: [
        { point: 'Protected persons', left: 'Citizens only', right: 'Any person (including foreigners and corporations)' },
        { point: 'Grounds', left: 'Enumerated: religion, race, caste, sex, place of birth', right: 'Any arbitrary classification; twin test / manifest arbitrariness' },
        { point: 'Protective clauses', left: 'Explicit enabling clauses (3)–(6)', right: 'No express enabling clause; reasonable classification only' },
      ],
    },
    {
      id: 'a15-dist-16',
      title: 'Article 15 vs Article 16',
      left: 'Article 15',
      right: 'Article 16',
      rows: [
        { point: 'Domain', left: 'Civic life, education, access to public places', right: 'Public employment only' },
        { point: 'Reservation clauses', left: '15(4), 15(5), 15(6)', right: '16(4), 16(4A), 16(4B), 16(6)' },
        { point: 'Horizontal application', left: 'Article 15(2) reaches certain private public resorts', right: 'Primarily vertical (State as employer)' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a15-trap-1',
      trap: 'Article 15 forbids all classification based on caste or sex.',
      correction: 'Article 15 forbids discrimination on those grounds only. Protective discrimination under clauses (3)–(6) is expressly permitted and is an essential part of substantive equality.',
    },
    {
      id: 'a15-trap-2',
      trap: 'EWS reservation violates the basic structure because it uses only economic criteria.',
      correction: 'Janhit Abhiyan (2022) held that economic criterion is a valid basis of classification and that the 103rd Amendment does not destroy the basic structure.',
    },
    {
      id: 'a15-trap-3',
      trap: 'Article 15 applies to non-citizens and private employers generally.',
      correction: 'Article 15 protects citizens. Horizontal reach under 15(2) is limited to specified places of public resort. Private employment discrimination is governed primarily by statute and Article 16 only in the public sector.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a15-qa-10',
      draftingCategory: 'brief',
      question: 'Explain the scheme of Article 15 of the Constitution. How do clauses (3) to (6) reconcile formal equality with substantive equality?',
      answer: `I. ISSUE & CONSTITUTIONAL MANDATE
Article 15 prohibits discrimination against citizens on enumerated grounds while empowering the State to make special provisions for historically disadvantaged groups.

II. NEGATIVE MANDATE — ARTICLES 15(1) AND 15(2)
Article 15(1) forbids the State from discriminating against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. Article 15(2) extends the prohibition to access to shops, public restaurants, hotels, places of public entertainment, and publicly funded or dedicated places of public resort. The word “only” is critical: the prohibited ground must be the exclusive basis of the adverse treatment.

III. PROTECTIVE DISCRIMINATION — CLAUSES (3)–(6)
1. Article 15(3): Special provision for women and children (original text).
2. Article 15(4) (1st Amendment, 1951): Advancement of socially and educationally backward classes, SCs and STs — inserted after Champakam Dorairajan.
3. Article 15(5) (93rd Amendment, 2005): Admission to educational institutions, including private unaided institutions (except minority institutions under Article 30).
4. Article 15(6) (103rd Amendment, 2019): Economically weaker sections; 10% EWS quota upheld in Janhit Abhiyan (2022).

IV. FORMAL TO SUBSTANTIVE EQUALITY
Formal equality (treating everyone identically) would perpetuate historical disadvantage. Clauses (3)–(6) authorise differential treatment so that equals are treated equally and unequals are treated unequally in proportion to their inequality. This is the constitutional foundation of reservation and affirmative action outside public employment.

V. CONCLUSION
Article 15 is both a shield against invidious discrimination and a sword of substantive equality. Current through the 106th Amendment (2023).`,
      explanation: 'Complete IRAC covering negative and positive limbs of Article 15 with amendment history and leading cases.',
      relatedProvisionIds: ['constitution-article-15', 'constitution-article-14'],
    },
    {
      id: 'a15-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the evolution of Article 15 from Champakam Dorairajan to Janhit Abhiyan. Discuss the constitutional validity of EWS reservation and the relationship between Articles 15 and 16.',
      answer: `I. INTRODUCTION
Article 15 is the principal anti-discrimination and affirmative-action provision for civic life and education. Its judicial and legislative evolution tracks India’s journey from formal equality to substantive equality and, more recently, to economic-criterion-based reservation.

II. THE CHAMPAKAM DORAIRAJAN MOMENT (1951)
In State of Madras v. Champakam Dorairajan the Supreme Court struck down a communal Government Order that allocated seats in medical colleges by religion and caste. The Court held that Article 15(1) barred such classification and that Directive Principles could not override Fundamental Rights. Parliament responded with the 1st Amendment, inserting Article 15(4).

III. CONSOLIDATION OF PROTECTIVE DISCRIMINATION
1. Indra Sawhney v. Union of India (1992): Although primarily an Article 16 case, the principles of 50% ceiling, creamy layer for OBCs, and the requirement of quantifiable data shaped Article 15(4) practice.
2. 93rd Amendment (2005) and Ashoka Kumar Thakur (2008): Article 15(5) extended reservation to private educational institutions (except minority institutions). The Court upheld the amendment and the central OBC reservation statute.
3. The “only” doctrine continued to filter pure communal quotas while permitting multi-factor backwardness identification.

IV. THE 103rd AMENDMENT AND JANHIT ABHIYAN (2022)
The 103rd Amendment inserted Articles 15(6) and 16(6), enabling 10% reservation for economically weaker sections other than those covered by the existing backward-class clauses. A 5-judge Constitution Bench in Janhit Abhiyan upheld the amendment:
- Economic criterion is a valid intelligible differentia under Article 14.
- The 50% ceiling of Indra Sawhney does not freeze the Constitution; EWS is a separate compartment.
- Exclusion of SCs/STs/OBCs from the EWS pool does not violate equality because those groups already have their own reservation pathways.
- The amendment does not destroy the basic structure.

V. ARTICLE 15 AND ARTICLE 16 — COMPLEMENTARY CODE
Article 15 governs civic life and education; Article 16 governs public employment. Both share the equality code of Article 14 and the logic of protective discrimination. Reservation in promotions, carry-forward, and consequential seniority are primarily Article 16 questions (77th, 81st, 85th Amendments; Nagaraj; Jarnail Singh; Davinder Singh). Education and access remain the domain of Article 15(4), (5) and (6).

VI. LITIGATION STRATEGY
1. Forum: Article 32 or 226.
2. Plead the “only” ground or manifest arbitrariness; force the State to produce quantifiable data and creamy-layer exclusion where required.
3. For EWS challenges, address Janhit Abhiyan directly; pure economic-criterion objections are no longer tenable.

VII. CONCLUSION
From Champakam Dorairajan to Janhit Abhiyan, Article 15 has matured into a sophisticated instrument of both non-discrimination and affirmative action. The 103rd Amendment’s EWS experiment has been judicially sustained. Current through the 106th Amendment (2023).`,
      explanation: 'Full CREAC tracing legislative and judicial evolution with EWS analysis and Art 15–16 relationship.',
      relatedProvisionIds: ['constitution-article-15', 'constitution-article-16', 'constitution-article-14'],
    },
  ],

  bareActPointers: ['Article 15', '1st Amendment', '93rd Amendment', '103rd Amendment'],
  examTips: [
    'Always mention the “only” doctrine when discussing Article 15(1).',
    'Link Champakam Dorairajan → 1st Amendment → Indra Sawhney → 93rd → Ashoka Kumar Thakur → 103rd → Janhit Abhiyan.',
    'Distinguish Article 15 (education/civic life) from Article 16 (public employment).',
  ],
  relatedTopics: ['art-14', 'art-16', 'equality-reservation', 'fundamental-rights'],
}

export default content
