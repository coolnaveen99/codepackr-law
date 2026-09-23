import type { TopicContent } from '../loadTopicContent'

/**
 * Article 16 — Equality of Opportunity in Public Employment
 * Subject: constitution | Topic id: art-16
 * Equality in public employment, reservation under 16(4)/16(4A)/16(4B)/16(6),
 * Indra Sawhney, Nagaraj, Jarnail Singh, Davinder Singh, creamy layer, 50% ceiling.
 */
const content: TopicContent = {
  glance:
    'Article 16 guarantees equality of opportunity in matters of public employment and forbids discrimination on the same grounds as Article 15. Clauses (4), (4A), (4B) and (6) authorise reservation, including in promotions and for economically weaker sections. It is the constitutional foundation of reservation in government service.',

  study: `Topic at a Glance
Article 16 of the Constitution of India guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. It is the public-employment counterpart of Article 15 and the primary constitutional source of reservation in government service.

Statutory Anatomy
1. Article 16(1) — Equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.
2. Article 16(2) — No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.
3. Article 16(3) — Parliament may make law prescribing residence requirements for certain classes of employment under a State or Union Territory.
4. Article 16(4) — Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the State, is not adequately represented in the services under the State.
5. Article 16(4A) — Reservation in matters of promotion, with consequential seniority, to any class or classes of posts in the services under the State in favour of SCs and STs which, in the opinion of the State, are not adequately represented (77th Amendment, 1995; consequential seniority by 85th Amendment, 2001).
6. Article 16(4B) — Carry-forward of unfilled reserved vacancies; such vacancies are not to be counted toward the 50% ceiling for the year of carry-forward (81st Amendment, 2000).
7. Article 16(5) — Religious institutions may require that the incumbent of an office connected with the affairs of the institution profess a particular religion or belong to a particular denomination.
8. Article 16(6) — Reservation for economically weaker sections other than the classes covered by clause (4), up to 10% (103rd Amendment, 2019).

Who is Protected?
Citizens only. “Office under the State” includes posts under the Union, States, local authorities and other authorities under Article 12.

Key Jurisprudence
1. Indra Sawhney v. Union of India (1992) — 9-judge Bench:
   - Article 16(4) is exhaustive of reservation in appointments.
   - 50% ceiling on total reservation (except extraordinary situations).
   - Creamy layer must be excluded from OBCs.
   - No reservation in promotions under Article 16(4) as then framed (later overcome by 77th Amendment for SCs/STs).
   - Backward class under 16(4) is primarily social backwardness; caste can be a starting point.
2. M. Nagaraj v. Union of India (2006) — Conditions for Article 16(4A):
   - Quantifiable data showing backwardness.
   - Quantifiable data showing inadequate representation.
   - Maintenance of administrative efficiency (Article 335).
3. Jarnail Singh v. Lachhmi Narain Gupta (2018) — Creamy layer principle applies to SCs/STs in the context of promotions; quantifiable data on backwardness not required for SCs/STs as a class (modifying Nagaraj on that point).
4. State of Punjab v. Davinder Singh (2024) — Sub-classification within SCs is permissible; State may provide preferential treatment to the more backward among SCs on quantifiable data.
5. Janhit Abhiyan (2022) — Article 16(6) EWS reservation upheld.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226.
2. Challenge vectors: Absence of quantifiable data; breach of 50% ceiling without extraordinary justification; failure to exclude creamy layer (OBCs); violation of efficiency under Article 335; ultra vires the enabling clauses.
3. Standing: Aggrieved candidate or public-spirited litigant in systemic challenges.
4. Evidence: State must produce contemporaneous data, roster, and policy documents; petitioner bears initial burden to show arbitrariness or excess of power.

Current-Law Position & Milestone
Article 16 as amended by the 77th, 81st, 85th and 103rd Amendments. The Indra Sawhney 50% ceiling remains the general rule; EWS is a separate 10% compartment. Sub-classification within SCs is now judicially approved (Davinder Singh). Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a16-core',
      title: 'Articles 16(1) and 16(2) — Equality and Non-Discrimination',
      order: 1,
      content: [
        'Article 16(1) guarantees equality of opportunity in public employment for citizens.',
        'Article 16(2) prohibits discrimination on grounds only of religion, race, caste, sex, descent, place of birth or residence.',
        '“Office under the State” tracks the Article 12 definition of State.',
      ],
    },
    {
      id: 'a16-reservation',
      title: 'Reservation Clauses — 16(4), 16(4A), 16(4B), 16(6)',
      order: 2,
      content: [
        '16(4): Reservation in appointments for backward classes not adequately represented.',
        '16(4A): Reservation in promotion with consequential seniority for SCs/STs (77th + 85th Amendments).',
        '16(4B): Carry-forward of unfilled reserved vacancies without counting against the year’s 50% ceiling (81st Amendment).',
        '16(6): EWS reservation up to 10% (103rd Amendment; Janhit Abhiyan).',
      ],
    },
    {
      id: 'a16-cases',
      title: 'Leading Cases',
      order: 3,
      content: [
        'Indra Sawhney (1992): 50% ceiling; creamy layer; no promotion reservation under then-existing 16(4).',
        'Nagaraj (2006): Quantifiable data + efficiency for 16(4A).',
        'Jarnail Singh (2018): Creamy layer for SC/ST promotions; data on backwardness not required for SC/ST as class.',
        'Davinder Singh (2024): Sub-classification within SCs permitted.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-16', article: 'Article 16', title: 'Equality of opportunity in matters of public employment' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-15', article: 'Article 15', title: 'Prohibition of discrimination' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-335', article: 'Article 335', title: 'Claims of SCs and STs to services and posts' },
  ],

  examples: [
    {
      id: 'a16-ex-1',
      title: 'Illustration 1 — Valid 16(4) Reservation (Applies)',
      description: 'A State, on the basis of a contemporaneous survey identifying socially and educationally backward classes and showing inadequate representation in services, provides 27% OBC reservation in direct recruitment, excludes the creamy layer, and keeps total reservation within 50%. The provision is valid under Article 16(4) and Indra Sawhney.',
    },
    {
      id: 'a16-ex-2',
      title: 'Illustration 2 — Promotion Reservation Without Data (Fails)',
      description: 'A department introduces SC/ST reservation in promotions with consequential seniority without collecting quantifiable data on inadequate representation or considering administrative efficiency. Under Nagaraj (as refined by Jarnail Singh), the measure is liable to be struck down for want of the required constitutional conditions.',
    },
  ],

  hypotheticals: [
    {
      id: 'a16-hypo',
      title: 'Chamber Practice Hypothetical (Sub-classification & Promotions)',
      facts: 'State X provides 15% reservation for SCs in promotions. Within that 15%, it earmarks 8% for a particularly disadvantaged sub-group of SCs identified by a State commission on quantifiable data, and 7% for the remaining SCs. General-category officers challenge the sub-classification as violative of Article 16 and the equality code.',
      question: 'Advise on the constitutional validity of the sub-classification in light of Davinder Singh and related precedents.',
      applicableLaw: 'Article 16(4A); Article 14; State of Punjab v. Davinder Singh (2024); Indra Sawhney; Jarnail Singh.',
      analysis: '1. Article 16(4A) enables reservation in promotion for SCs/STs not adequately represented.\n2. Davinder Singh holds that sub-classification within SCs is permissible to benefit the more backward among them, provided it is supported by quantifiable data and does not exclude any SC class entirely without justification.\n3. The State must still satisfy Nagaraj/Jarnail conditions (inadequate representation, efficiency under Art 335).\n4. If data and efficiency are in order, the sub-classification is constitutionally sustainable.',
      conclusion: 'The sub-classification is valid if backed by quantifiable data and efficiency considerations. A blanket challenge on the ground that SCs are a homogeneous class is no longer tenable after Davinder Singh.',
    },
  ],

  distinctions: [
    {
      id: 'a16-dist-15',
      title: 'Article 16 vs Article 15',
      left: 'Article 16',
      right: 'Article 15',
      rows: [
        { point: 'Domain', left: 'Public employment and office under the State', right: 'Civic life, education, public places' },
        { point: 'Reservation clauses', left: '16(4), 16(4A), 16(4B), 16(6)', right: '15(4), 15(5), 15(6)' },
        { point: 'Promotions', left: 'Expressly covered by 16(4A) for SCs/STs', right: 'Not applicable' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a16-trap-1',
      trap: 'Reservation in promotions is unconstitutional after Indra Sawhney.',
      correction: 'Indra Sawhney barred promotion reservation under the then-existing Article 16(4). Parliament inserted Article 16(4A) (77th Amendment) and consequential seniority (85th Amendment). Nagaraj and Jarnail Singh regulate the conditions, not the existence, of promotion reservation for SCs/STs.',
    },
    {
      id: 'a16-trap-2',
      trap: 'The 50% ceiling is an absolute constitutional bar that can never be exceeded.',
      correction: 'Indra Sawhney treated 50% as a general ceiling subject to extraordinary situations. EWS under Article 16(6) is a separate compartment upheld in Janhit Abhiyan and is not counted within the 50% for backward classes.',
    },
    {
      id: 'a16-trap-3',
      trap: 'SCs and STs cannot be sub-classified for reservation purposes.',
      correction: 'Davinder Singh (2024) expressly permits sub-classification within SCs on quantifiable data so that the benefits reach the more backward among them.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a16-qa-10',
      draftingCategory: 'brief',
      question: 'Explain the scheme of reservation under Article 16 of the Constitution with reference to Indra Sawhney and subsequent amendments.',
      answer: `I. ISSUE
Article 16 guarantees equality of opportunity in public employment and authorises reservation for backward classes and EWS.

II. CORE GUARANTEES — 16(1) AND 16(2)
Equality of opportunity for citizens; no discrimination on enumerated grounds only.

III. RESERVATION ARCHITECTURE
1. Article 16(4): Reservation in appointments for backward classes not adequately represented.
2. Article 16(4A) (77th Amendment): Reservation in promotion with consequential seniority for SCs/STs (85th Amendment added consequential seniority).
3. Article 16(4B) (81st Amendment): Carry-forward of unfilled reserved vacancies without counting against the year’s ceiling.
4. Article 16(6) (103rd Amendment): Up to 10% for economically weaker sections.

IV. INDRA SAWHNEY PRINCIPLES
50% ceiling; creamy layer for OBCs; social backwardness as primary criterion; no promotion reservation under the then text of 16(4).

V. POST-SAWHNEY DEVELOPMENT
Nagaraj conditions for 16(4A); Jarnail Singh on creamy layer and data; Davinder Singh on sub-classification; Janhit Abhiyan on EWS.

VI. CONCLUSION
Article 16 balances formal equality with substantive representation in public services. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-16'],
    },
    {
      id: 'a16-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the constitutional validity of reservation in promotions for Scheduled Castes and Scheduled Tribes. Discuss the evolution from Indra Sawhney to Nagaraj, Jarnail Singh and Davinder Singh.',
      answer: `I. INTRODUCTION
Reservation in promotions has been one of the most contested questions in Indian constitutional law. The trajectory from Indra Sawhney through constitutional amendments to Nagaraj, Jarnail Singh and Davinder Singh defines the present law.

II. INDRA SAWHNEY (1992)
The 9-judge Bench held that Article 16(4) did not permit reservation in promotions. Parliament responded with the 77th Amendment inserting Article 16(4A), later strengthened by the 85th Amendment on consequential seniority.

III. NAGARAJ (2006)
The Court upheld Article 16(4A) but imposed three conditions: (i) quantifiable data of backwardness; (ii) quantifiable data of inadequate representation; (iii) maintenance of administrative efficiency under Article 335. Without these, promotion reservation would be unconstitutional.

IV. JARNAIL SINGH (2018)
A Constitution Bench refined Nagaraj: (a) the requirement of quantifiable data on backwardness does not apply to SCs/STs as a class (they are presumed backward); (b) the creamy-layer principle applies to SCs/STs in the context of promotions so that the benefits reach the truly disadvantaged; (c) data on inadequate representation and efficiency remain mandatory.

V. DAVINDER SINGH (2024)
The Court held that sub-classification within SCs is permissible. The State may, on quantifiable data, provide preferential treatment to the more backward among SCs. Homogeneity of SCs is not a constitutional bar to internal classification aimed at equitable distribution of benefits.

VI. LITIGATION CHECKLIST
1. Does the State have contemporaneous data on inadequate representation?
2. Has efficiency under Article 335 been considered?
3. For OBCs: is creamy layer excluded?
4. For SC/ST promotions: is creamy layer applied as required by Jarnail Singh?
5. Is total reservation within the Indra Sawhney ceiling (or justified as extraordinary / EWS separate)?

VII. CONCLUSION
Reservation in promotions for SCs/STs is constitutionally valid when the Nagaraj/Jarnail conditions are met. Sub-classification is now an available tool for finer targeting. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-16', 'constitution-article-335'],
    },
  ],

  bareActPointers: ['Article 16', '77th Amendment', '81st Amendment', '85th Amendment', '103rd Amendment'],
  examTips: [
    'Always state Indra Sawhney 50% ceiling and creamy layer.',
    'For promotions: Nagaraj conditions → Jarnail Singh refinements → Davinder Singh sub-classification.',
    'Distinguish 16(4) (appointments) from 16(4A) (promotions).',
  ],
  relatedTopics: ['art-14', 'art-15', 'equality-reservation', 'fundamental-rights'],
}

export default content
