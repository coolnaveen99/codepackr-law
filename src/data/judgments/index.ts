import type { Judgment } from './types'

const kesavananda: Judgment = {
  id: 'kesavananda-bharati-1973',
  caseName: 'Kesavananda Bharati v. State of Kerala',
  shortName: 'Kesavananda Bharati',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1973,
  citation: '(1973) 4 SCC 225',
  bench: '13-Judge Constitution Bench',
  judges: [
    'S.M. Sikri, C.J.',
    'J.M. Shelat, J.',
    'K.S. Hegde, J.',
    'A.N. Grover, J.',
    'A.N. Ray, J.',
    'P.J. Reddy, J.',
    'D.G. Palekar, J.',
    'H.R. Khanna, J.',
    'K.K. Mathew, J.',
    'M.H. Beg, J.',
    'S.N. Dwivedi, J.',
    'A.K. Mukherjea, J.',
    'Y.V. Chandrachud, J.',
  ],
  subject: 'Constitution',
  topics: ['Basic Structure Doctrine', 'Constitutional Amendments', 'Article 368'],
  tags: ['AIBE', 'Judiciary', 'Fundamental Rights', 'Article 368', 'Judicial Review'],
  summary:
    'A 13-Judge Bench held by a 7:6 majority that Parliament has the power to amend any part of the Constitution under Article 368, but cannot alter, damage, or destroy its basic structure or essential framework.',
  facts: [
    'His Holiness Kesavananda Bharati Sripadagalvaru, head of Edneer Mutt in Kerala, challenged the Kerala Land Reforms Act, 1963 as amended in 1969 and 1971.',
    'During the pendency of the writ petition under Article 32, Parliament enacted the 24th, 25th, 26th, and 29th Constitutional Amendments.',
    'The 24th Amendment amended Article 13 and Article 368 to neutralize the Golaknath ruling and assert unlimited constituent power.',
    'The petitioner challenged the validity of these constitutional amendments.',
  ],
  issues: [
    'Whether the power of Parliament to amend the Constitution under Article 368 is unlimited and unreviewable.',
    'Whether the term "amendment" includes the power to abrogate, destroy, or rewrite essential constitutional features.',
    'Whether the Golaknath decision holding that Article 13(2) applies to constitutional amendments was correctly decided.',
  ],
  arguments: {
    appellant: [
      'Nani Palkhivala argued that "amendment" connotes retaining the identity and basic structure of the Constitution.',
      'Constituent power derived from the Constitution cannot be utilized to alter or subvert the creator itself.',
      'Fundamental human rights are inalienable and beyond the reach of transitory parliamentary majorities.',
    ],
    respondent: [
      'H.M. Seervai and Niren De argued that Article 368 contains sovereign constituent power with no express or implied limitations.',
      'Socio-economic transformation through Directive Principles cannot be stymied by judicial review.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-368',
      article: 'Article 368',
      title: 'Power and procedure of Parliament to amend the Constitution',
      subjectSlug: 'constitution',
      topicId: 'art-368',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-13',
      article: 'Article 13',
      title: 'Laws inconsistent with or in derogation of Fundamental Rights',
      subjectSlug: 'constitution',
      topicId: 'art-13',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'basic-structure',
      article: 'Basic Structure',
      title: 'Basic Structure Doctrine',
      subjectSlug: 'constitution',
      topicId: 'basic-structure',
    },
  ],
  reasoning: [
    {
      heading: 'Overruling Golaknath',
      explanation:
        'The Court unanimously overruled Golaknath and held that Article 368 contains both the power and procedure for amendment, and that "law" in Article 13(2) does not include a constitutional amendment.',
    },
    {
      heading: 'The Basic Structure Limitation',
      explanation:
        'By a 7:6 majority (with H.R. Khanna, J. writing the pivotal opinion), the Court held that the word "amendment" implies that the original Constitution survives in identity. Parliament cannot alter the basic structure or essential framework.',
    },
    {
      heading: 'Judicial Review of Amendments',
      explanation:
        'Judicial review of constitutional amendments is an indispensable feature of constitutionalism to ensure that parliamentary majorities do not extinguish democratic foundations.',
    },
  ],
  decision:
    'The 24th Amendment was upheld in full. Section 2 and the first part of Section 3 of the 25th Amendment were upheld, while the second part of Article 31C barring judicial review was declared unconstitutional.',
  holding:
    'Parliament has constituent power under Article 368 to amend any provision of the Constitution, but cannot alter, damage, or destroy the basic structure.',
  ratioDecidendi:
    'The power to amend under Article 368 does not include the power to alter the basic structure or framework of the Constitution.',
  obiterDicta:
    'Illustrative basic features include supremacy of the Constitution, republican and democratic form of government, secular character, separation of powers, federalism, dignity of the individual, and judicial review.',
  relatedCases: [
    {
      caseName: 'Minerva Mills Ltd. v. Union of India',
      citation: '(1980) 3 SCC 625',
      relationship: 'Applied',
      judgmentId: 'minerva-mills-1980',
    },
    {
      caseName: 'Indira Nehru Gandhi v. Raj Narain',
      citation: '(1975) Supp SCC 1',
      relationship: 'Applied',
    },
  ],
  examPoints: [
    'Decided by the largest Bench in Indian history: 13 Judges.',
    'Majority was 7:6; H.R. Khanna, J. provided the controlling judgment on basic structure.',
    'Overruled I.C. Golaknath (1967) regarding Article 13 applying to amendments.',
    'Second part of Article 31C was invalidated because it ousted judicial review.',
  ],
  mcqs: [
    {
      id: 'kesavananda-mcq-1',
      question:
        'What was the judicial composition and majority in Kesavananda Bharati v. State of Kerala (1973)?',
      options: [
        '11 Judges; 6:5 majority',
        '13 Judges; 7:6 majority',
        '9 Judges; 5:4 majority',
        '15 Judges; 8:7 majority',
      ],
      correctIndex: 1,
      explanation:
        'Kesavananda Bharati was heard by a 13-Judge Constitution Bench and decided by a 7:6 majority on April 24, 1973.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Reports (1973) Supp SCR 1 / (1973) 4 SCC 225',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const manekaGandhi: Judgment = {
  id: 'maneka-gandhi-1978',
  caseName: 'Maneka Gandhi v. Union of India',
  shortName: 'Maneka Gandhi',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1978,
  citation: '(1978) 1 SCC 248',
  bench: '7-Judge Constitution Bench',
  judges: [
    'M.H. Beg, C.J.',
    'Y.V. Chandrachud, J.',
    'P.N. Bhagwati, J.',
    'V.R. Krishna Iyer, J.',
    'N.L. Untwalia, J.',
    'S. Murtaza Fazal Ali, J.',
    'P.S. Kailasam, J.',
  ],
  subject: 'Constitution',
  topics: ['Article 21', 'Natural Justice', 'Golden Triangle', 'Personal Liberty'],
  tags: ['AIBE', 'Judiciary', 'Personal Liberty', 'Audi Alteram Partem'],
  summary:
    'A 7-Judge Bench overruled A.K. Gopalan and held that any procedure depriving a person of life or personal liberty under Article 21 must be fair, just, and reasonable, and established the interrelation between Articles 14, 19, and 21 (the Golden Triangle).',
  facts: [
    'On July 4, 1977, the Regional Passport Office, New Delhi impounded the passport of journalist Maneka Gandhi under Section 10(3)(c) of the Passports Act, 1967.',
    'When the petitioner requested reasons for the impoundment, the Ministry of External Affairs declined, citing "the interests of the general public".',
    'Maneka Gandhi moved the Supreme Court under Article 32 challenging the impoundment order as an arbitrary violation of Articles 14, 19(1)(a), 19(1)(g), and 21.',
  ],
  issues: [
    'Whether the right to travel abroad is an aspect of personal liberty under Article 21.',
    'Whether the "procedure established by law" under Article 21 must conform to principles of natural justice and reasonableness.',
    'Whether Articles 14, 19, and 21 operate as watertight compartments or reinforce each other.',
  ],
  arguments: {
    appellant: [
      'Right to travel abroad was established as part of Article 21 in Satwant Singh Sawhney v. D. Ramarathnam (1967).',
      'An unreasoned impoundment without prior hearing violates audi alteram partem and is manifestly arbitrary under Article 14.',
    ],
    respondent: [
      'The Passports Act validly enacted by Parliament prescribes procedure, satisfying Article 21 per Gopalan.',
      'Reasons were withheld under statutory exemption in public interest.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'art-21',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'art-14',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19',
      title: 'Protection of certain rights regarding freedom of speech, etc.',
      subjectSlug: 'constitution',
      topicId: 'art-19',
    },
  ],
  reasoning: [
    {
      heading: 'Substantive Due Process Integration',
      explanation:
        'P.N. Bhagwati, J. rejected the narrow literal interpretation in A.K. Gopalan. "Procedure established by law" cannot be arbitrary, fanciful, or oppressive; it must be right, just, and fair.',
    },
    {
      heading: 'The Golden Triangle',
      explanation:
        'Fundamental Rights are not mutually exclusive. A law depriving personal liberty under Article 21 must also satisfy the non-arbitrariness mandate of Article 14 and the reasonable restriction tests under Article 19.',
    },
    {
      heading: 'Natural Justice as Constitutional Mandate',
      explanation:
        'Audi alteram partem is an essential facet of fairness. Even where pre-decisional hearing is excluded by urgency, post-decisional hearing must be provided.',
    },
  ],
  decision:
    'The impounding order was held flawed for want of natural justice, but the Attorney General gave an undertaking that the Government would afford the petitioner an immediate opportunity of being heard.',
  holding:
    'Procedure depriving personal liberty under Article 21 must satisfy the tests of fairness, justice, reasonableness, and natural justice under Articles 14 and 19.',
  ratioDecidendi:
    'Articles 14, 19, and 21 form an interconnected Golden Triangle. A procedure established by law under Article 21 must be just, fair, and reasonable, not arbitrary.',
  obiterDicta:
    'Personal liberty in Article 21 is of the widest amplitude and covers a variety of rights which go to constitute the personal liberty of man.',
  relatedCases: [
    {
      caseName: 'A.K. Gopalan v. State of Madras',
      citation: 'AIR 1950 SC 27',
      relationship: 'Overruled on Article 21 interpretation',
    },
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Applied',
      judgmentId: 'puttaswamy-2017',
    },
  ],
  examPoints: [
    'Overruled A.K. Gopalan v. State of Madras (1950).',
    'Coinage and doctrine of the Golden Triangle (Arts. 14, 19, 21).',
    'Introduced substantive due process standards through the requirement of "fair, just and reasonable" procedure.',
    'Post-decisional hearing principle recognized in administrative action.',
  ],
  mcqs: [
    {
      id: 'maneka-mcq-1',
      question:
        'The requirement that procedure under Article 21 must be "fair, just and reasonable" was established in:',
      options: [
        'A.K. Gopalan v. State of Madras',
        'Maneka Gandhi v. Union of India',
        'Kharak Singh v. State of U.P.',
        'Golaknath v. State of Punjab',
      ],
      correctIndex: 1,
      explanation:
        'In Maneka Gandhi (1978), the Supreme Court ruled that procedure established by law must be fair, just, and reasonable, transforming Article 21 jurisprudence.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Reports (1978) 2 SCR 621 / (1978) 1 SCC 248',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const minervaMills: Judgment = {
  id: 'minerva-mills-1980',
  caseName: 'Minerva Mills Ltd. v. Union of India',
  shortName: 'Minerva Mills',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1980,
  citation: '(1980) 3 SCC 625',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Y.V. Chandrachud, C.J.',
    'P.N. Bhagwati, J.',
    'A.C. Gupta, J.',
    'N.L. Untwalia, J.',
    'P.S. Kailasam, J.',
  ],
  subject: 'Constitution',
  topics: ['Basic Structure Doctrine', 'Directive Principles vs Fundamental Rights', 'Article 368'],
  tags: ['AIBE', 'Judiciary', 'Article 368', 'Article 31C', 'Basic Structure'],
  summary:
    'The Supreme Court struck down Clauses (4) and (5) of Article 368 (inserted by the 42nd Amendment) as destroying the basic structure, and held that the balance and harmony between Fundamental Rights and Directive Principles is an essential constitutional feature.',
  facts: [
    'Minerva Mills was a textile company nationalized by the Central Government under the Sick Textile Undertakings (Nationalisation) Act, 1974.',
    'The petitioner challenged the take-over and challenged the 42nd Constitutional Amendment Act, 1976.',
    'Specifically, the 42nd Amendment inserted clauses (4) and (5) into Article 368 (declaring no limitation on amendment power and barring judicial review) and amended Article 31C to subordinate all Fundamental Rights to all Directive Principles.',
  ],
  issues: [
    'Whether Clauses (4) and (5) of Article 368 are unconstitutional as destroying the basic structure.',
    'Whether the amendment to Article 31C giving blanket precedence to all Directive Principles over Articles 14 and 19 destroys the basic structure.',
  ],
  arguments: {
    appellant: [
      'Clauses (4) and (5) of Article 368 destroy the limited amending power of Parliament, which is itself a basic feature.',
      'The amended Article 31C emasculates Fundamental Rights in Articles 14 and 19, destroying the constitutional balance.',
    ],
    respondent: [
      'Directive Principles reflect social revolution and must have primacy over individual property and procedural guarantees.',
      'Parliament in constituent capacity has complete sovereignty to bar judicial review.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-368',
      article: 'Article 368(4) & (5)',
      title: 'Power of Parliament to amend the Constitution',
      subjectSlug: 'constitution',
      topicId: 'art-368',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'art-14',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-31c',
      article: 'Article 31C',
      title: 'Saving of laws giving effect to certain directive principles',
      subjectSlug: 'constitution',
      topicId: 'art-31c',
    },
  ],
  reasoning: [
    {
      heading: 'Limited Amending Power is a Basic Feature',
      explanation:
        'Y.V. Chandrachud, C.J. held that since the Constitution conferred only a limited amending power on Parliament, Parliament cannot enlarge that very power into an absolute one. A limited power cannot be used to confer unlimited power on oneself.',
    },
    {
      heading: 'Harmony between Part III and Part IV',
      explanation:
        'The Indian Constitution is founded on the bedrock of the balance between Parts III and IV. To give absolute primacy to one over the other is to disturb the harmony of the Constitution.',
    },
  ],
  decision:
    'Sections 4 and 55 of the 42nd Amendment Act were struck down. Clauses (4) and (5) of Article 368 and the extended scope of Article 31C were held unconstitutional.',
  holding:
    'Parliament cannot convert a limited amending power into an unlimited one. The balance between Fundamental Rights and Directive Principles is a basic feature.',
  ratioDecidendi:
    'A limited amending power is one of the basic features of the Indian Constitution, and therefore limitations on that power cannot be destroyed.',
  obiterDicta:
    'Parts III and IV are like two wheels of a chariot; neither is superior to the other.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied and Affirmed',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    'Clauses (4) and (5) of Article 368 were struck down as destroying basic structure.',
    'Famous dictum: "The Constitution is founded on the bedrock of the balance between Parts III and IV."',
    'Established that a limited amending power is itself a basic feature.',
  ],
  mcqs: [
    {
      id: 'minerva-mcq-1',
      question:
        'Which clauses of Article 368 were declared unconstitutional in Minerva Mills v. Union of India (1980)?',
      options: ['Clauses (1) and (2)', 'Clauses (2) and (3)', 'Clauses (4) and (5)', 'Clause (3) only'],
      correctIndex: 2,
      explanation:
        'Clauses (4) and (5) of Article 368, inserted by the 42nd Amendment to exclude judicial review, were struck down as destroying the basic structure.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Reports (1981) 1 SCR 206 / (1980) 3 SCC 625',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const puttaswamy: Judgment = {
  id: 'puttaswamy-2017',
  caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
  shortName: 'Puttaswamy (Privacy)',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2017,
  citation: '(2017) 10 SCC 1',
  bench: '9-Judge Constitution Bench',
  judges: [
    'J.S. Khehar, C.J.',
    'J. Chelameswar, J.',
    'S.A. Bobde, J.',
    'R.K. Agrawal, J.',
    'R.F. Nariman, J.',
    'A.M. Sapre, J.',
    'D.Y. Chandrachud, J.',
    'S.K. Kaul, J.',
    'S. Abdul Nazeer, J.',
  ],
  subject: 'Constitution',
  topics: ['Right to Privacy', 'Article 21', 'Proportionality Test', 'Informational Privacy'],
  tags: ['AIBE', 'Judiciary', 'Privacy', 'Article 21', 'Fundamental Rights'],
  summary:
    'A unanimous 9-Judge Constitution Bench declared that the Right to Privacy is a Fundamental Right guaranteed under Article 21 and Part III of the Constitution, overruling M.P. Sharma and Kharak Singh.',
  facts: [
    'Justice K.S. Puttaswamy, a retired High Court Judge, challenged the constitutional validity of the Aadhaar biometric identification project.',
    'The Union of India contended that the Constitution does not recognize privacy as an independent Fundamental Right, relying on an 8-Judge Bench in M.P. Sharma (1954) and a 6-Judge Bench in Kharak Singh (1963).',
    'A 3-Judge Bench referred the question to a 9-Judge Constitution Bench to determine the constitutional existence of the right to privacy.',
  ],
  issues: [
    'Whether there is a fundamental right to privacy under the Indian Constitution.',
    'Whether the decisions in M.P. Sharma (1954) and Kharak Singh (1963) correctly held that privacy is not a fundamental right.',
    'What standard of review governs State incursions into privacy.',
  ],
  arguments: {
    appellant: [
      'Privacy is an essential facet of human dignity, personal autonomy, and liberty guaranteed by Article 21.',
      'Gopalan was overruled by Maneka Gandhi; earlier judgments taking a rigid view of Part III can no longer stand.',
    ],
    respondent: [
      'The Constitution framers intentionally omitted privacy from the text of Part III.',
      'Larger benches in M.P. Sharma and Kharak Singh are binding precedents.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'art-21',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'art-14',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19',
      title: 'Protection of certain rights regarding freedom of speech, etc.',
      subjectSlug: 'constitution',
      topicId: 'art-19',
    },
  ],
  reasoning: [
    {
      heading: 'Privacy as Inalienable Natural Right',
      explanation:
        'Privacy is not a gift from the State. It is an intrinsic element of human dignity, liberty, and autonomy, protected under Article 21 and the architectural matrix of Part III.',
    },
    {
      heading: 'Overruling M.P. Sharma and Kharak Singh',
      explanation:
        'M.P. Sharma held only that Section 96 CrPC search warrants did not violate Article 20(3); to the extent it held no privacy exists, it was overruled. Kharak Singh was overruled to the extent it held privacy is not a fundamental right.',
    },
    {
      heading: 'The Three-Pronged Proportionality Standard',
      explanation:
        'Any law infringing privacy must meet: (1) Legality (valid enacted law); (2) Legitimate state goal; and (3) Proportionality (rational nexus, least intrusive means, and balance of rights).',
    },
  ],
  decision:
    'Unanimously declared that privacy is a fundamental right under Article 21 and Part III. M.P. Sharma and Kharak Singh were expressly overruled to the extent of inconsistency.',
  holding:
    'The Right to Privacy is protected as an intrinsic part of the right to life and personal liberty under Article 21 and as part of the freedoms guaranteed by Part III of the Constitution.',
  ratioDecidendi:
    'The right to privacy is a fundamental right protected under Article 21 and Part III of the Indian Constitution, subject to the test of legality, legitimate state aim, and proportionality.',
  obiterDicta:
    'Privacy encompasses bodily autonomy, spatial privacy, and informational privacy (data protection).',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'Shreya Singhal v. Union of India',
      citation: '(2015) 5 SCC 1',
      relationship: 'Applied',
      judgmentId: 'shreya-singhal-2015',
    },
  ],
  examPoints: [
    'Decided by a unanimous 9-Judge Constitution Bench on August 24, 2017.',
    'Overruled M.P. Sharma (1954, 8 Judges) and Kharak Singh (1963, 6 Judges).',
    'Established the three-part test: Legality, Legitimate State Aim, and Proportionality.',
    'Recognized informational privacy, bodily integrity, and decisional autonomy.',
  ],
  mcqs: [
    {
      id: 'puttaswamy-mcq-1',
      question:
        'In Justice K.S. Puttaswamy (2017), the 9-Judge Bench overruled which earlier decisions regarding privacy?',
      options: [
        'Golaknath and Shankari Prasad',
        'M.P. Sharma (1954) and Kharak Singh (1963)',
        'A.K. Gopalan and Romesh Thappar',
        'ADM Jabalpur and Shivkant Shukla',
      ],
      correctIndex: 1,
      explanation:
        'The 9-Judge Bench in Puttaswamy expressly overruled M.P. Sharma (1954) and Kharak Singh (1963) to the extent they held privacy was not a fundamental right.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Reports (2017) 10 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const lalitaKumari: Judgment = {
  id: 'lalita-kumari-2013',
  caseName: 'Lalita Kumari v. Government of Uttar Pradesh',
  shortName: 'Lalita Kumari',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Procedure',
  year: 2013,
  citation: '(2014) 2 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'P. Sathasivam, C.J.',
    'B.S. Chauhan, J.',
    'Ranjana P. Desai, J.',
    'Ranjan Gogoi, J.',
    'S.A. Bobde, J.',
  ],
  subject: 'Criminal Procedure',
  topics: ['Mandatory FIR', 'Cognizable Offences', 'Preliminary Inquiry', 'Section 173 BNSS'],
  tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'Police Procedure'],
  summary:
    'A 5-Judge Constitution Bench held that registration of an FIR is mandatory under Section 154 of the CrPC (now Section 173 BNSS 2023) if the information discloses commission of a cognizable offence, and no preliminary inquiry is permissible in such cases.',
  facts: [
    'A writ petition under Article 32 was filed by Lalita Kumari (a minor) through her father, alleging that her kidnapping was reported to the police station in Loni, Ghaziabad.',
    'The police failed to register an FIR despite repeated requests, and only registered it after intervention by higher authorities without initiating timely investigation.',
    'Conflicting division bench judgments existed on whether police have discretion to conduct a preliminary inquiry before registering an FIR under Section 154 CrPC.',
  ],
  issues: [
    'Whether a police officer is bound to register an FIR upon receiving information disclosing a cognizable offence.',
    'Whether a police officer can conduct a preliminary inquiry before registering an FIR.',
    'In what narrow categories of cases is a preliminary inquiry permissible and within what timeframe.',
  ],
  arguments: {
    appellant: [
      'The word "shall" in Section 154(1) is mandatory and leaves no discretion with the police officer.',
      'Condition precedent is only that the information must disclose a cognizable offence; reasonableness or credibility is not a ground to refuse registration.',
    ],
    respondent: [
      'Registration of FIR entails arrest and impacts liberty under Article 21.',
      'A preliminary inquiry prevents frivolous, malicious, or motivated complaints.',
    ],
  },
  provisions: [
    {
      actId: 'bnss',
      actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
      provisionId: 's-173',
      section: 'Section 173 BNSS (replacing Section 154 CrPC)',
      title: 'Information in cognizable cases (Zero FIR & Electronic Registration)',
      subjectSlug: 'bnss',
      topicId: 's-173',
    },
  ],
  reasoning: [
    {
      heading: 'Mandatory Nature of Section 154',
      explanation:
        'The statutory intent is manifest from the word "shall". If the information discloses a cognizable offence, registration of FIR is mandatory. The police officer cannot embark on an inquiry into credibility before registering the FIR.',
    },
    {
      heading: 'Exceptions for Preliminary Inquiry',
      explanation:
        'Preliminary inquiry is permissible only to ascertain whether a cognizable offence is disclosed (not to check veracity) in 5 categories: (a) Matrimonial/family disputes; (b) Commercial offences; (c) Medical negligence cases; (d) Corruption cases; (e) Cases where there is abnormal delay in reporting.',
    },
    {
      heading: 'Timeframe for Preliminary Inquiry',
      explanation:
        'A preliminary inquiry must ordinarily be completed within 7 days (extended to 14 days in later clarification) and entry must be made in the General Diary.',
    },
  ],
  decision:
    'Directions were issued making FIR registration mandatory on receipt of information disclosing a cognizable offence. Deliberate non-registration attracts disciplinary action and penal liability under Section 166A IPC (Section 199 BNS).',
  holding:
    'Registration of FIR is mandatory if information discloses commission of a cognizable offence. No preliminary inquiry is permissible in such cases.',
  ratioDecidendi:
    'The police officer has no discretion to refuse registration of an FIR if the information discloses the commission of a cognizable offence under Section 154 CrPC / Section 173 BNSS.',
  obiterDicta:
    'Burglary of personal liberty cannot be prevented by denying registration; safeguards against improper arrest exist independently in Section 41 CrPC (Section 35 BNSS).',
  relatedCases: [
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Section 154 CrPC / Section 173 BNSS uses mandatory "shall".',
    '5 permissible preliminary inquiry categories: matrimonial, commercial, medical negligence, corruption, unexplained delay.',
    'Section 173 BNSS 2023 now explicitly incorporates Zero FIR and electronic information (e-FIR).',
    'Failure to register attracts penal action against the police officer.',
  ],
  mcqs: [
    {
      id: 'lalita-mcq-1',
      question:
        'In Lalita Kumari (2013), the Supreme Court permitted a preliminary inquiry before FIR registration in which category?',
      options: [
        'Murder and Dacoity',
        'Matrimonial disputes and Medical negligence',
        'Terrorism and Sedition',
        'Robbery and Extortion',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench identified matrimonial disputes, commercial disputes, medical negligence, corruption, and cases with abnormal delay as exceptional categories where a preliminary inquiry is permitted.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2014) 2 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const dkBasu: Judgment = {
  id: 'dk-basu-1997',
  caseName: 'D.K. Basu v. State of West Bengal',
  shortName: 'D.K. Basu',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law & Procedure',
  year: 1997,
  citation: '(1997) 1 SCC 416',
  bench: '2-Judge Division Bench',
  judges: ['Kuldip Singh, J.', 'A.S. Anand, J.'],
  subject: 'Criminal Procedure',
  topics: ['Custodial Violence', 'Arrest Guidelines', 'Section 35 BNSS', 'Article 21 & 22'],
  tags: ['AIBE', 'Judiciary', 'Arrest', 'Custodial Torture', 'BNSS', 'Human Rights'],
  summary:
    'The Supreme Court laid down 11 mandatory guidelines to be observed by police and arresting agencies during arrest and detention to prevent custodial torture and uphold Articles 21 and 22(1).',
  facts: [
    'The Executive Chairman of Legal Aid Services, West Bengal, addressed a letter to the Chief Justice drawing attention to increasing deaths in police custody and lock-ups.',
    'The letter was treated as a Public Interest Litigation under Article 32.',
    'State Governments and the Law Commission were noticed to examine institutional remedies for custodial violence.',
  ],
  issues: [
    'Whether custodial violence and custodial deaths violate Articles 21 and 22(1) of the Constitution.',
    'What preventive and compensatory guidelines are required to safeguard arrestee rights in police custody.',
  ],
  arguments: {
    appellant: [
      'Custodial torture is a calculated assault on human dignity and a naked violation of Article 21.',
      'Police officers abuse secrecy of lock-ups; transparent guidelines, arrest memos, and medical examination are imperative.',
    ],
    respondent: [
      'Law enforcement agencies need adequate latitude to interrogate suspects and unearth organized crime.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'art-21',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-22',
      article: 'Article 22',
      title: 'Protection against arrest and detention in certain cases',
      subjectSlug: 'constitution',
      topicId: 'art-22',
    },
    {
      actId: 'bnss',
      actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
      provisionId: 's-35',
      section: 'Sections 35–37 BNSS (replacing Section 41A–41D CrPC)',
      title: 'Arrest of persons and procedure of arrest',
      subjectSlug: 'bnss',
      topicId: 's-35',
    },
  ],
  reasoning: [
    {
      heading: 'Custodial Torture and Article 21',
      explanation:
        'Dr. A.S. Anand, J. observed: "Custodial violence, including torture and death in the lock-ups, strikes a blow at the rule of law." The right to live with human dignity cannot be taken away even from an arrested person or convict.',
    },
    {
      heading: 'The 11 Mandatory Safeguards',
      explanation:
        'The Court prescribed 11 specific requirements: clear identification tags of arresting officers; preparation of arrest memo attested by at least one witness; informing a relative/friend within 8 to 12 hours; medical examination at the time of arrest and every 48 hours; right to meet advocate during interrogation; and intimation to the District Police Control Room.',
    },
    {
      heading: 'Enforceability and Contempt',
      explanation:
        'Failure to comply with the guidelines renders the errant officer liable to departmental action as well as contempt of court.',
    },
  ],
  decision:
    'The 11 guidelines were made binding on all police and investigating authorities across India. These guidelines were later codified by Parliament into Sections 41A, 41B, 41C, and 41D of the CrPC, and are now enacted in Sections 35 to 37 of BNSS 2023.',
  holding:
    'Custodial torture and violence violate Article 21. Compliance with mandatory arrest guidelines is non-negotiable for all arresting agencies.',
  ratioDecidendi:
    'An arrestee has constitutional and statutory rights to dignity and bodily integrity under Articles 21 and 22, enforceable through mandatory procedural safeguards including arrest memo, notification of family, and periodic medical inspection.',
  obiterDicta:
    'State cannot claim sovereign immunity against payment of monetary compensation for violation of fundamental rights by its agents.',
  relatedCases: [
    {
      caseName: 'Lalita Kumari v. Government of Uttar Pradesh',
      citation: '(2014) 2 SCC 1',
      relationship: 'Related',
      judgmentId: 'lalita-kumari-2013',
    },
    {
      caseName: 'Nilabati Behera v. State of Orissa',
      citation: '(1993) 2 SCC 746',
      relationship: 'Applied',
    },
  ],
  examPoints: [
    'Laid down 11 mandatory guidelines for arrest and detention.',
    'Statutorily codified in CrPC Sections 41A–41D and BNSS Sections 35–37.',
    'Medical examination of arrestee mandatory every 48 hours in custody.',
    'Breach of guidelines constitutes civil and criminal contempt of court.',
  ],
  mcqs: [
    {
      id: 'dk-basu-mcq-1',
      question:
        'Under the D.K. Basu guidelines, within what time period must the arrestee’s relative or friend be informed of the arrest and place of detention?',
      options: ['Within 24 hours', 'Within 8 to 12 hours', 'Within 2 hours', 'Within 48 hours'],
      correctIndex: 1,
      explanation:
        'Under guideline 4 of D.K. Basu, the next of kin or friend must be informed by the police within 8 to 12 hours of arrest where they reside outside the district.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1997) 1 SCC 416',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const shreyaSinghal: Judgment = {
  id: 'shreya-singhal-2015',
  caseName: 'Shreya Singhal v. Union of India',
  shortName: 'Shreya Singhal',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional & Cyber Law',
  year: 2015,
  citation: '(2015) 5 SCC 1',
  bench: '2-Judge Division Bench',
  judges: ['J. Chelameswar, J.', 'R.F. Nariman, J.'],
  subject: 'Cyber Law',
  topics: ['Freedom of Speech', 'Section 66A IT Act', 'Vagueness & Overbreadth', 'Article 19(1)(a)'],
  tags: ['AIBE', 'Judiciary', 'Freedom of Speech', 'Cyber Law', 'Section 66A'],
  summary:
    'The Supreme Court struck down Section 66A of the Information Technology Act, 2000 in its entirety as unconstitutional, holding that it arbitrarily infringed the freedom of speech and expression under Article 19(1)(a) and did not fall under any reasonable restrictions under Article 19(2).',
  facts: [
    'Two young women were arrested in Thane under Section 66A of the Information Technology Act for posting and liking a Facebook post questioning the total shutdown of Mumbai following the death of a political leader.',
    'Shreya Singhal, a law student, filed a public interest writ petition under Article 32 challenging Section 66A as vague, overbroad, and violative of free speech.',
    'Section 66A penalized sending information through computer resources that was "grossly offensive", of a "menacing character", or caused "annoyance", "inconvenience", or "insult".',
  ],
  issues: [
    'Whether Section 66A of the IT Act infringes the fundamental right to freedom of speech and expression under Article 19(1)(a).',
    'Whether Section 66A is saved by the reasonable restrictions in Article 19(2).',
    'Whether Section 66A is void for vagueness and overbreadth, creating a chilling effect on speech.',
  ],
  arguments: {
    appellant: [
      'Terms like "offensive", "annoyance", and "inconvenience" are not defined and leave arbitrary discretion to police.',
      'None of these concepts correspond to the eight permitted heads of restriction under Article 19(2).',
      'The law creates a severe chilling effect on legitimate online public discourse.',
    ],
    respondent: [
      'The internet is an unprecedented medium with instantaneous global reach requiring specialized deterrence.',
      'The Court can read down the provision or accept administrative guidelines issued to avoid misuse.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a) & (2)',
      title: 'Protection of freedom of speech and expression and reasonable restrictions',
      subjectSlug: 'constitution',
      topicId: 'art-19',
    },
    {
      actId: 'cyber',
      actName: 'Information Technology Act, 2000',
      provisionId: 'it-s-66a',
      section: 'Section 66A (struck down)',
      title: 'Punishment for sending offensive messages through communication service, etc.',
      subjectSlug: 'cyber',
      topicId: 'it-s-66a',
    },
  ],
  reasoning: [
    {
      heading: 'Discussion, Advocacy, and Incitement',
      explanation:
        'R.F. Nariman, J. drew the foundational constitutional distinction: mere discussion or even advocacy of an unpopular cause is the heart of free speech. Article 19(2) kicks in only when discussion or advocacy reaches the level of "incitement". Section 66A penalized speech at the discussion stage.',
    },
    {
      heading: 'The Doctrine of Vagueness and Overbreadth',
      explanation:
        'A penal statute must give clear notice to citizens of what conduct is criminalized. "Annoyance" and "grossly offensive" are subjective and incapable of precise legal definition. A law that casts its net so wide that innocent speech is trapped is overbroad.',
    },
    {
      heading: 'Rejection of Administrative Assurances',
      explanation:
        'Judges cannot uphold an unconstitutional statute based on promises by the executive that it will not be abused. "Governments come and go, but the Section remains on the statute book."',
    },
  ],
  decision:
    'Section 66A of the IT Act was declared unconstitutional and void ab initio in its entirety. Section 79(3)(b) (intermediary liability) and Section 69A (website blocking) were read down to require a court order or authorized governmental direction.',
  holding:
    'Section 66A of the Information Technology Act is unconstitutional in its entirety for violating Article 19(1)(a) without the protection of Article 19(2).',
  ratioDecidendi:
    'A penal statute criminalizing speech on the ground of causing annoyance or offence without requiring clear incitement to public disorder or other Article 19(2) grounds is void for vagueness and overbreadth.',
  obiterDicta:
    'The internet cannot be treated as an unregulated forum where citizens lose their constitutional guarantees.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'Romesh Thappar v. State of Madras',
      citation: '1950 SCR 594',
      relationship: 'Applied',
    },
  ],
  examPoints: [
    'Struck down Section 66A of the Information Technology Act, 2000.',
    'Distinction between Discussion, Advocacy, and Incitement formulated by R.F. Nariman, J.',
    'Void for Vagueness and Overbreadth doctrines formally incorporated into Indian free speech law.',
    'Intermediary safe harbor under Section 79 read down to require court or government order.',
  ],
  mcqs: [
    {
      id: 'shreya-mcq-1',
      question:
        'In Shreya Singhal v. Union of India (2015), Section 66A of the IT Act was struck down primarily for violating:',
      options: [
        'Article 21 and right to shelter',
        'Article 19(1)(a) freedom of speech and expression',
        'Article 25 freedom of religion',
        'Article 300A right to property',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court struck down Section 66A for violating Article 19(1)(a) as it did not fall within the reasonable restrictions specified in Article 19(2).',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2015) 5 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

const shayaraBano: Judgment = {
  id: 'shayara-bano-2017',
  caseName: 'Shayara Bano v. Union of India',
  shortName: 'Shayara Bano (Triple Talaq)',
  court: 'Supreme Court of India',
  jurisdiction: 'Family & Constitutional Law',
  year: 2017,
  citation: '(2017) 9 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'J.S. Khehar, C.J.',
    'Kurian Joseph, J.',
    'R.F. Nariman, J.',
    'U.U. Lalit, J.',
    'S. Abdul Nazeer, J.',
  ],
  subject: 'Family Law',
  topics: ['Triple Talaq', 'Article 14', 'Manifest Arbitrariness', 'Muslim Personal Law'],
  tags: ['AIBE', 'Judiciary', 'Triple Talaq', 'Article 14', 'Family Law', 'Constitutional Law'],
  summary:
    'A 5-Judge Constitution Bench by a 3:2 majority declared the practice of Talaq-e-Biddat (instant irrevocable triple talaq) unconstitutional and void, introducing the doctrine of Manifest Arbitrariness under Article 14.',
  facts: [
    'Shayara Bano was divorced by her husband through Talaq-e-Biddat (instant triple talaq by pronouncing "talaq" three times in one sitting).',
    'She approached the Supreme Court under Article 32 challenging Talaq-e-Biddat, nikah halala, and polygamy as violative of Articles 14, 15, 21, and 25.',
    'Multiple tagged petitions and an suo motu PIL ("In Re: Muslim Women\'s Quest for Equality") were consolidated before the Constitution Bench.',
  ],
  issues: [
    'Whether the practice of Talaq-e-Biddat is an essential religious practice protected under Article 25(1).',
    'Whether personal laws recognized by Section 2 of the Muslim Personal Law (Shariat) Application Act, 1937 are "laws in force" subject to fundamental rights under Article 13.',
    'Whether instant triple talaq is manifestly arbitrary and violative of Article 14 equality.',
  ],
  arguments: {
    appellant: [
      'Instant triple talaq leaves Muslim women destitute with zero scope for reconciliation, violating Articles 14 and 21.',
      'Talaq-e-Biddat is considered sinful and heretical even within Islamic theology and is banned in most Islamic nations.',
    ],
    respondent: [
      'All India Muslim Personal Law Board argued that personal laws are grounded in scripture and immune from judicial review per State of Bombay v. Narasu Appa Mali.',
      'Article 25 protects practices recognized for over a millennium.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'art-14',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-25',
      article: 'Article 25',
      title: 'Freedom of conscience and free profession, practice and propagation of religion',
      subjectSlug: 'constitution',
      topicId: 'art-25',
    },
    {
      actId: 'family',
      actName: 'Muslim Personal Law (Shariat) Application Act, 1937',
      provisionId: 'muslim-law',
      section: 'Section 2',
      title: 'Application of Personal Law to Muslims',
      subjectSlug: 'family',
      topicId: 'muslim-law',
    },
  ],
  reasoning: [
    {
      heading: 'The 3:2 Majority Structure',
      explanation:
        'The majority comprising Kurian Joseph, R.F. Nariman, and U.U. Lalit JJ. invalidated Talaq-e-Biddat. Nariman and Lalit JJ. struck it down on the constitutional ground of manifest arbitrariness under Article 14. Kurian Joseph, J. invalidated it on the religious ground that what is bad in theology cannot be good in law.',
    },
    {
      heading: 'Doctrine of Manifest Arbitrariness under Article 14',
      explanation:
        'R.F. Nariman, J. expounded that legislation or state action that is arbitrary, capricious, or done without an adequate determining principle violates Article 14. Instant triple talaq enables the marital tie to be severed capriciously without any attempt at reconciliation.',
    },
    {
      heading: 'Essential Religious Practice Test',
      explanation:
        'Talaq-e-Biddat is not an essential religious practice under Article 25 because it is condemned by the Quran and Prophet Muhammad, and forms no fundamental pillar of Islam.',
    },
  ],
  decision:
    'By a 3:2 majority, Talaq-e-Biddat was set aside and declared void and unconstitutional. Subsequently, Parliament enacted the Muslim Women (Protection of Rights on Marriage) Act, 2019 criminalizing the practice.',
  holding:
    'The practice of Talaq-e-Biddat (instant triple talaq) is unconstitutional and void. It is manifestly arbitrary under Article 14 and not protected under Article 25.',
  ratioDecidendi:
    'Talaq-e-Biddat is arbitrary and violative of Article 14 as it allows the marital bond to be broken whimsically without reconciliation, and does not constitute an essential religious practice under Article 25.',
  obiterDicta:
    'The minority (Khehar C.J. and Nazeer J.) held that personal law is protected under Article 25 and recommended parliamentary legislation.',
  relatedCases: [
    {
      caseName: 'Shamim Ara v. State of U.P.',
      citation: '(2002) 7 SCC 518',
      relationship: 'Applied',
    },
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
  ],
  examPoints: [
    'Decided by a 3:2 majority on August 22, 2017.',
    'Majority: Kurian Joseph, R.F. Nariman, U.U. Lalit, JJ. Minority: J.S. Khehar, C.J. and S. Abdul Nazeer, J.',
    'Formulated the doctrine of "Manifest Arbitrariness" as a test under Article 14.',
    'Led to the enactment of the Muslim Women (Protection of Rights on Marriage) Act, 2019.',
  ],
  mcqs: [
    {
      id: 'shayara-mcq-1',
      question:
        'In Shayara Bano v. Union of India (2017), which constitutional doctrine was formulated by R.F. Nariman, J. under Article 14?',
      options: [
        'Doctrine of Severability',
        'Doctrine of Manifest Arbitrariness',
        'Doctrine of Eclipse',
        'Doctrine of Territorial Nexus',
      ],
      correctIndex: 1,
      explanation:
        'Justice R.F. Nariman expounded the Doctrine of Manifest Arbitrariness, holding that actions done capriciously or without determining principle violate Article 14.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2017) 9 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const ALL_JUDGMENTS: Judgment[] = [
  kesavananda,
  manekaGandhi,
  minervaMills,
  puttaswamy,
  lalitaKumari,
  dkBasu,
  shreyaSinghal,
  shayaraBano,
]

export const JUDGMENTS_BY_ID = new Map(ALL_JUDGMENTS.map((judgment) => [judgment.id, judgment]))
