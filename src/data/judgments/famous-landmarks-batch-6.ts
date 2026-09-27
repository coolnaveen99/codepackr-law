import type { Judgment } from './types'

/**
 * Famous landmarks batch 6 (AIBE / Judiciary).
 * DISPATCHER Phase 5: verified citations; ratio mandatory; no mark-band phrasing;
 * relatedCases.judgmentId only when target exists; catalog-safe topicIds only.
 */

export const fourthJudgesNjac: Judgment = {
  id: 'fourth-judges-njac-2015',
  caseName: 'Supreme Court Advocates-on-Record Association v. Union of India',
  shortName: 'Fourth Judges Case / NJAC',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2015,
  citation: '(2016) 5 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'J.S. Khehar, J.',
    'J. Chelameswar, J. (dissenting)',
    'Madan B. Lokur, J.',
    'Kurian Joseph, J.',
    'Adarsh Kumar Goel, J.',
  ],
  subject: 'Constitution',
  topics: ['NJAC', 'Collegium', 'Judicial Appointments', 'Basic Structure', '99th Amendment'],
  tags: ['AIBE', 'Judiciary', 'NJAC', 'Collegium', 'Judicial Independence', 'Basic Structure'],
  summary:
    'By a 4:1 majority, the Court struck down the Constitution (Ninety-ninth Amendment) Act, 2014 and the National Judicial Appointments Commission Act, 2014, holding that the NJAC mechanism damaged the independence of the judiciary, a basic feature. The collegium system was revived. Justice Chelameswar dissented.',
  facts: [
    'Parliament enacted the 99th Constitutional Amendment and the NJAC Act to replace the collegium with a six-member National Judicial Appointments Commission including executive and civil-society nominees.',
    'Writ petitions challenged the amendment and the Act as violative of the basic structure, particularly judicial independence and separation of powers.',
  ],
  issues: [
    'Whether the 99th Amendment and the NJAC Act violate the basic structure by compromising judicial independence in appointments.',
    'Whether the collegium system revived upon invalidation of the NJAC.',
  ],
  arguments: {
    appellant: [
      'Primacy of the judiciary in appointments is part of the basic structure; executive veto or equal voice in the NJAC destroys that primacy.',
      'The Second and Third Judges Cases constitutionalised collegial judicial primacy which cannot be undone by amendment.',
    ],
    respondent: [
      'NJAC enhances transparency and accountability and still gives judges a substantial role; Parliament may reform the appointment process.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-124',
      article: 'Article 124 (as sought to be amended)',
      title: 'Establishment and constitution of Supreme Court',
      subjectSlug: 'constitution',
      topicId: 'judiciary',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'basic-structure',
      title: 'Basic structure — independence of judiciary',
      subjectSlug: 'constitution',
      topicId: 'basic-structure',
    },
  ],
  reasoning: [
    {
      heading: 'Independence of judiciary as basic feature',
      explanation:
        'The majority held that judicial primacy in appointments is integral to independence of the judiciary and therefore to the basic structure; the NJAC’s composition allowed non-judicial members to block or dilute that primacy.',
    },
    {
      heading: 'Revival of collegium',
      explanation:
        'Upon striking down the 99th Amendment and the NJAC Act, the collegium system under the Second and Third Judges Cases stood revived, subject to later administrative efforts to improve transparency.',
    },
  ],
  decision:
    '99th Amendment and NJAC Act declared unconstitutional. Collegium restored. Chelameswar J. dissented, favouring a reformed, more transparent mechanism.',
  holding:
    'The NJAC constitutional amendment and statute violate the basic structure by compromising judicial independence in appointments; the collegium system stands restored.',
  ratioDecidendi:
    'A constitutional amendment that replaces judicial primacy in appointments with a commission in which the executive and nominated members can override or stalemate the judges damages the independence of the judiciary and is void.',
  relatedCases: [
    {
      caseName: 'Supreme Court Advocates-on-Record Association v. Union of India',
      citation: '(1993) 4 SCC 441',
      relationship: 'Applied / Collegium revived',
      judgmentId: 'second-judges-1993',
    },
    {
      caseName: 'In re Special Reference No. 1 of 1998',
      citation: '(1998) 7 SCC 739',
      relationship: 'Applied',
      judgmentId: 'third-judges-1998',
    },
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied (basic structure)',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    '4:1 majority; NJAC and 99th Amendment struck down.',
    'Judicial independence / primacy in appointments = basic feature.',
    'Collegium revived (Second + Third Judges Cases).',
    'Chelameswar J. dissent is frequently contrasted in answers.',
  ],
  mcqs: [
    {
      id: 'njac-mcq-1',
      question: 'The Fourth Judges Case (NJAC) held that:',
      options: [
        'NJAC is valid and replaces the collegium permanently',
        'The 99th Amendment and NJAC Act are unconstitutional; collegium stands restored',
        'Only High Court appointments need a collegium',
        'Article 124 was deleted from the Constitution',
      ],
      correctIndex: 1,
      explanation:
        'By a 4:1 majority the Court struck down the 99th Amendment and the NJAC Act as damaging judicial independence and restored the collegium.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2016) 5 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const indraSawhney: Judgment = {
  id: 'indra-sawhney-1992',
  caseName: 'Indra Sawhney v. Union of India',
  shortName: 'Indra Sawhney / Mandal',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1992,
  citation: '(1992) Supp (3) SCC 217',
  bench: '9-Judge Constitution Bench',
  judges: [
    'M.H. Kania, C.J.',
    'M.N. Venkatachaliah, J.',
    'S.R. Pandian, J.',
    'T.K. Thommen, J.',
    'A.M. Ahmadi, J.',
    'Kuldip Singh, J.',
    'P.B. Sawant, J.',
    'R.M. Sahai, J.',
    'B.P. Jeevan Reddy, J.',
  ],
  subject: 'Constitution',
  topics: ['Reservation', 'Article 16(4)', 'OBC', 'Creamy Layer', '50% Ceiling'],
  tags: ['AIBE', 'Judiciary', 'Reservation', 'Article 16', 'Mandal', 'Equality'],
  summary:
    'A 9-Judge Bench upheld reservations for Other Backward Classes under Article 16(4), subject to the exclusion of the creamy layer, and held that total reservations should ordinarily not exceed 50%. It also held that reservations in promotions were not contemplated by Article 16(4) as then interpreted (later addressed by constitutional amendments and M. Nagaraj).',
  facts: [
    'The Mandal Commission recommended reservations for socially and educationally backward classes in central services.',
    'Office Memoranda implementing OBC reservations were challenged as violative of equality under Articles 14 and 16.',
  ],
  issues: [
    'Whether reservations for OBCs under Article 16(4) are constitutionally valid and on what conditions.',
    'Whether a 50% ceiling applies and whether the creamy layer must be excluded.',
  ],
  arguments: {
    appellant: [
      'Caste-based identification of backwardness and large-scale reservations destroy equality of opportunity and efficiency of administration.',
    ],
    respondent: [
      'Article 16(4) is an enabling provision for adequate representation of backward classes; OBC reservations further substantive equality.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-16',
      article: 'Article 16(4)',
      title: 'Equality of opportunity in matters of public employment',
      subjectSlug: 'constitution',
      topicId: 'equality-reservation',
    },
  ],
  reasoning: [
    {
      heading: 'Article 16(4) and backward classes',
      explanation:
        'The Court upheld the power to reserve posts for backward classes of citizens not adequately represented in services, and accepted that caste can be a relevant starting point for identifying social backwardness in India, subject to exclusion of the advanced creamy layer.',
    },
    {
      heading: '50% ceiling and promotions',
      explanation:
        'Reservations should ordinarily not exceed 50%. The Court also held that Article 16(4) did not permit reservations in promotions — a holding later modified by constitutional amendment and examined in M. Nagaraj.',
    },
  ],
  decision:
    'OBC reservations upheld with creamy-layer exclusion and the 50% rule as the ordinary ceiling. The judgment remains the foundational authority on Article 16(4) and reservation doctrine.',
  holding:
    'Reservations for OBCs under Article 16(4) are valid subject to exclusion of the creamy layer; total reservations should ordinarily not exceed 50%.',
  ratioDecidendi:
    'Article 16(4) enables reservations for backward classes not adequately represented in services, but equality requires exclusion of the creamy layer and, ordinarily, adherence to a 50% ceiling on total reservations.',
  relatedCases: [
    {
      caseName: 'M. Nagaraj v. Union of India',
      citation: '(2006) 8 SCC 212',
      relationship: 'Later development on promotions / Article 16(4A)',
      judgmentId: 'm-nagaraj-2006',
    },
  ],
  examPoints: [
    'Creamy layer exclusion mandatory for OBCs.',
    '50% ceiling as ordinary rule.',
    'Mandal / OBC reservations upheld under Article 16(4).',
    'Promotions: original holding later altered by amendment + Nagaraj line.',
  ],
  mcqs: [
    {
      id: 'indra-sawhney-mcq-1',
      question: 'Indra Sawhney is authority for which proposition?',
      options: [
        'There is no limit on the percentage of reservations',
        'Creamy layer must be excluded from OBC reservations; 50% is the ordinary ceiling',
        'Reservations are unconstitutional in all forms',
        'Only SC/ST reservations are permitted',
      ],
      correctIndex: 1,
      explanation:
        'The 9-Judge Bench required exclusion of the creamy layer and treated 50% as the ordinary upper limit on total reservations.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1992) Supp (3) SCC 217',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const mNagaraj: Judgment = {
  id: 'm-nagaraj-2006',
  caseName: 'M. Nagaraj v. Union of India',
  shortName: 'M. Nagaraj',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2006,
  citation: '(2006) 8 SCC 212',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Y.K. Sabharwal, C.J.',
    'K.G. Balakrishnan, J.',
    'S.H. Kapadia, J.',
    'C.K. Thakker, J.',
    'P.K. Balasubramanyan, J.',
  ],
  subject: 'Constitution',
  topics: ['Reservation in Promotion', 'Article 16(4A)', 'Article 16(4B)', 'Backwardness', 'Efficiency'],
  tags: ['AIBE', 'Judiciary', 'Reservation', 'Promotion', 'Article 16', 'SC/ST'],
  summary:
    'The Court upheld the constitutional validity of Articles 16(4A) and 16(4B) enabling reservation in promotion for SCs/STs, but held that every exercise of that power must satisfy the triple tests of quantifiable data on backwardness, inadequate representation, and efficiency of administration under Article 335, and must respect the 50% ceiling and creamy-layer concerns as applicable.',
  facts: [
    'Constitutional amendments inserted Articles 16(4A) and 16(4B) to enable reservation in promotion and consequential seniority for SCs/STs, responding to Indra Sawhney’s bar on promotion reservations under Article 16(4).',
    'Petitions challenged these provisions as violative of the basic structure and equality.',
  ],
  issues: [
    'Whether Articles 16(4A) and 16(4B) are constitutionally valid.',
    'What conditions must the State satisfy before providing reservation in promotion for SCs/STs?',
  ],
  arguments: {
    appellant: [
      'Promotion reservations and consequential seniority destroy equality and efficiency and damage the basic structure.',
    ],
    respondent: [
      'Articles 16(4A) and 16(4B) restore substantive equality for SCs/STs in the promotional cadre and are enabling provisions consistent with the equality code.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-16-4a',
      article: 'Article 16(4A)',
      title: 'Reservation in matters of promotion for SCs/STs',
      subjectSlug: 'constitution',
      topicId: 'equality-reservation',
    },
  ],
  reasoning: [
    {
      heading: 'Enabling provisions upheld',
      explanation:
        'The Court held that Articles 16(4A) and 16(4B) are enabling provisions and do not on their face violate the basic structure.',
    },
    {
      heading: 'Triple test for exercise of power',
      explanation:
        'Before providing reservation in promotion, the State must demonstrate quantifiable data showing backwardness of the class, its inadequate representation in the grade/service, and compliance with efficiency of administration under Article 335, while generally respecting the 50% ceiling.',
    },
  ],
  decision:
    'Articles 16(4A) and 16(4B) upheld subject to the controlling tests. Later cases (including Jarnail Singh) revisited aspects of the creamy-layer and backwardness tests for SCs/STs, but Nagaraj remains foundational for promotion reservations.',
  holding:
    'Reservation in promotion for SCs/STs under Articles 16(4A)/(4B) is constitutionally permissible only if the State satisfies quantifiable data tests on backwardness, inadequate representation, and administrative efficiency.',
  ratioDecidendi:
    'Enabling constitutional amendments for promotion reservation do not destroy the equality code if controlled by quantifiable data requirements, the 50% ceiling principle, and Article 335 efficiency considerations.',
  relatedCases: [
    {
      caseName: 'Indra Sawhney v. Union of India',
      citation: '(1992) Supp (3) SCC 217',
      relationship: 'Applied / Context for promotion amendment',
      judgmentId: 'indra-sawhney-1992',
    },
  ],
  examPoints: [
    'Articles 16(4A) and 16(4B) upheld.',
    'Triple test: backwardness, inadequate representation, efficiency (Art. 335).',
    '50% ceiling remains relevant.',
    'Bridge between Indra Sawhney and later Jarnail Singh adjustments.',
  ],
  mcqs: [
    {
      id: 'nagaraj-mcq-1',
      question: 'M. Nagaraj requires which of the following before reservation in promotion for SCs/STs?',
      options: [
        'Only a political resolution',
        'Quantifiable data on backwardness, inadequate representation, and regard to efficiency under Article 335',
        'Approval of the United Nations',
        'A constitutional amendment for every promotion order',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that the State must support promotion reservations with quantifiable data on backwardness and inadequate representation, consistent with Article 335 efficiency.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2006) 8 SCC 212',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const tmaPai: Judgment = {
  id: 'tma-pai-2002',
  caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
  shortName: 'T.M.A. Pai',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2002,
  citation: '(2002) 8 SCC 481',
  bench: '11-Judge Constitution Bench',
  judges: [
    'B.N. Kirpal, C.J.',
    'G.B. Pattanaik, J.',
    'S. Rajendra Babu, J.',
    'S.S.M. Quadri, J.',
    'Ruma Pal, J.',
    'S.N. Variava, J.',
    'Y.K. Sabharwal, J.',
    'R.C. Lahoti, J.',
    'Doraiswamy Raju, J.',
    'S.B. Sinha, J.',
    'A.R. Lakshmanan, J.',
  ],
  subject: 'Constitution',
  topics: ['Minority Educational Institutions', 'Article 30', 'Article 19(1)(g)', 'Private Education'],
  tags: ['AIBE', 'Judiciary', 'Education', 'Minority Rights', 'Article 30'],
  summary:
    'An 11-Judge Bench comprehensively restated the rights of private and minority educational institutions to establish and administer institutions under Articles 19(1)(g) and 30, subject to reasonable regulation for standards, and clarified the limits of State control over admissions and fees in unaided institutions.',
  facts: [
    'Multiple petitions raised conflicts among earlier rulings on minority rights in education, State regulation of private colleges, admissions, and fees.',
    'The Court consolidated the law on autonomy of private educational institutions and the scope of Article 30.',
  ],
  issues: [
    'What is the extent of the right to establish and administer educational institutions under Articles 19(1)(g) and 30?',
    'How far may the State regulate admissions and fees in private unaided institutions?',
  ],
  arguments: {
    appellant: [
      'Private and minority institutions have constitutional autonomy to admit students and administer without excessive State control.',
    ],
    respondent: [
      'Regulation is necessary to maintain standards, prevent commercialisation, and protect the right to education of non-minority students.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-30',
      article: 'Article 30',
      title: 'Right of minorities to establish and administer educational institutions',
      subjectSlug: 'constitution',
      topicId: 'minority-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(g)',
      title: 'Freedom to practise any profession or to carry on any occupation',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Autonomy of private unaided institutions',
      explanation:
        'The Court recognised a high degree of autonomy for private unaided institutions in admission and administration, subject to reasonableness, transparency, and prevention of maladministration.',
    },
    {
      heading: 'Minority rights under Article 30',
      explanation:
        'Religious and linguistic minorities have the right to establish and administer educational institutions of their choice; regulation is permissible for standards but cannot annihilate the minority character.',
    },
  ],
  decision:
    'A comprehensive framework for private and minority educational rights was laid down. Later cases (Islamic Academy, P.A. Inamdar) refined the admissions and fee aspects.',
  holding:
    'Private and minority educational institutions have constitutional rights to establish and administer institutions; State regulation is limited to ensuring standards and preventing maladministration without destroying institutional autonomy.',
  ratioDecidendi:
    'Articles 19(1)(g) and 30 protect the establishment and administration of educational institutions, including substantial autonomy for unaided private institutions, subject only to reasonable regulatory measures that do not destroy the right.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Related (constitutional rights framework)',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    '11-Judge Bench on education and minority rights.',
    'Unaided private institutions: substantial autonomy in admissions/administration.',
    'Article 30 protects minority character subject to reasonable regulation.',
    'Followed by Islamic Academy and P.A. Inamdar on implementation.',
  ],
  mcqs: [
    {
      id: 'tma-pai-mcq-1',
      question: 'T.M.A. Pai is primarily authority on:',
      options: [
        'Death penalty sentencing',
        'Rights of private and minority educational institutions under Articles 19(1)(g) and 30',
        'Anti-defection law',
        'CBI independence',
      ],
      correctIndex: 1,
      explanation:
        'The 11-Judge Bench restated the constitutional rights of private and minority educational institutions and the limits of State regulation.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2002) 8 SCC 481',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const selvi: Judgment = {
  id: 'selvi-2010',
  caseName: 'Selvi v. State of Karnataka',
  shortName: 'Selvi',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law & Criminal Procedure',
  year: 2010,
  citation: '(2010) 7 SCC 263',
  bench: '3-Judge Bench',
  judges: ['K.G. Balakrishnan, C.J.', 'R.V. Raveendran, J.', 'J.M. Panchal, J.'],
  subject: 'Criminal Procedure',
  topics: ['Narco-analysis', 'Polygraph', 'Brain Mapping', 'Article 20(3)', 'Article 21'],
  tags: ['AIBE', 'Judiciary', 'Self-Incrimination', 'Article 20(3)', 'Investigation', 'Privacy'],
  summary:
    'The Court held that involuntary administration of narco-analysis, polygraph examination, and Brain Electrical Activation Profile (BEAP) violates the right against self-incrimination under Article 20(3) and personal liberty under Article 21. Results of such tests conducted under compulsion are inadmissible as evidence.',
  facts: [
    'Investigating agencies increasingly used narco-analysis, polygraph, and brain-mapping tests on suspects, sometimes under court orders, without free consent.',
    'Petitioners challenged the constitutional validity of involuntary administration of these techniques.',
  ],
  issues: [
    'Whether involuntary narco-analysis, polygraph, and BEAP tests violate Articles 20(3) and 21.',
    'Whether results or derivative evidence from such tests are admissible.',
  ],
  arguments: {
    appellant: [
      'Forcing a person into a drug-induced or physiological test extracts testimonial responses and invades mental privacy, violating Articles 20(3) and 21.',
    ],
    respondent: [
      'These techniques are scientific investigative aids comparable to medical examination and do not amount to testimony by the accused.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-20',
      article: 'Article 20(3)',
      title: 'Protection against self-incrimination',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Testimonial character of the techniques',
      explanation:
        'The Court held that results of narco-analysis, polygraph, and BEAP are testimonial in nature because they convey personal knowledge from the subject’s mind, bringing them within Article 20(3) when compulsorily obtained.',
    },
    {
      heading: 'Consent and Article 21',
      explanation:
        'Even independent of Article 20(3), involuntary administration invades mental privacy and personal liberty under Article 21. Voluntary tests with informed consent and procedural safeguards stand on a different footing, subject to strict limits on evidentiary use.',
    },
  ],
  decision:
    'Involuntary administration of the three techniques was held unconstitutional. Compulsory test results are inadmissible. The judgment is the leading Indian authority on scientific tests and self-incrimination.',
  holding:
    'Involuntary narco-analysis, polygraph, and brain-mapping tests violate Articles 20(3) and 21; results obtained under compulsion are inadmissible in evidence.',
  ratioDecidendi:
    'Forcing a person to undergo narco-analysis, polygraph, or BEAP extracts testimonial responses and invades mental privacy; such compulsion is barred by Article 20(3) and Article 21.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied (expanded Article 21)',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Related (privacy)',
      judgmentId: 'puttaswamy-2017',
    },
  ],
  examPoints: [
    'Involuntary narco / polygraph / BEAP = unconstitutional.',
    'Article 20(3) self-incrimination + Article 21 mental privacy.',
    'Compulsory results inadmissible.',
    'High-yield criminal procedure / constitutional rights crossover.',
  ],
  mcqs: [
    {
      id: 'selvi-mcq-1',
      question: 'Selvi v. State of Karnataka held that involuntary narco-analysis and similar tests:',
      options: [
        'Are mandatory in all serious offences',
        'Violate Articles 20(3) and 21 when administered without consent',
        'Are the same as ordinary medical examination under CrPC',
        'Can never be conducted even with consent',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that involuntary administration of narco-analysis, polygraph, and BEAP violates the privilege against self-incrimination and personal liberty.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2010) 7 SCC 263',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_6: Judgment[] = [
  fourthJudgesNjac,
  indraSawhney,
  mNagaraj,
  tmaPai,
  selvi,
]
