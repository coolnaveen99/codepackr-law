import type { Judgment } from './types'

/**
 * Famous landmarks batch 7 (AIBE / Judiciary).
 * DISPATCHER Phase 5: verified citations; ratio mandatory; no mark-band phrasing;
 * relatedCases.judgmentId only when target exists; catalog-safe topicIds only.
 */

export const jarnailSingh: Judgment = {
  id: 'jarnail-singh-2018',
  caseName: 'Jarnail Singh v. Lachhmi Narain Gupta',
  shortName: 'Jarnail Singh',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2018,
  citation: '(2018) 10 SCC 396',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Dipak Misra, C.J.',
    'Kurian Joseph, J.',
    'R.F. Nariman, J.',
    'Sanjay Kishan Kaul, J.',
    'Indu Malhotra, J.',
  ],
  subject: 'Constitution',
  topics: ['Reservation in Promotion', 'Creamy Layer', 'SC/ST', 'Article 16(4A)', 'M. Nagaraj'],
  tags: ['AIBE', 'Judiciary', 'Reservation', 'Promotion', 'Creamy Layer', 'SC/ST'],
  summary:
    'A Constitution Bench partially modified M. Nagaraj: States need not collect quantifiable data on the backwardness of SCs/STs as a precondition for reservation in promotion, but the creamy layer principle applies to SCs/STs in promotion, and the requirements of inadequate representation and administrative efficiency remain.',
  facts: [
    'After M. Nagaraj upheld Articles 16(4A)/(4B) subject to quantifiable data tests, multiple challenges and references arose on whether SC/ST backwardness data and creamy layer applied to promotion reservations.',
    'The matter was placed before a Constitution Bench to clarify Nagaraj.',
  ],
  issues: [
    'Whether quantifiable data on backwardness of SCs/STs is required for reservation in promotion after Nagaraj.',
    'Whether the creamy layer principle applies to SCs/STs in the context of promotion reservations.',
  ],
  arguments: {
    appellant: [
      'Requiring proof of backwardness of SCs/STs contradicts the constitutional recognition of these classes and the purpose of Articles 16(4A)/(4B).',
      'Creamy layer exclusion for SCs/STs in promotion is necessary for equality among the more and less advanced within the class.',
    ],
    respondent: [
      'Nagaraj’s triple test should be retained in full to protect efficiency and equality in promotional cadres.',
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
      heading: 'No quantifiable data on SC/ST backwardness',
      explanation:
        'The Court held that Nagaraj was incorrect to the extent it required the State to show quantifiable data on the backwardness of SCs/STs — these classes are already identified in the Constitution as backward for the purposes of reservation.',
    },
    {
      heading: 'Creamy layer applies',
      explanation:
        'The creamy layer principle was held applicable to SCs/STs in promotion reservations so that the benefit reaches the weaker sections within the class, while tests of inadequate representation and efficiency under Article 335 continue.',
    },
  ],
  decision:
    'Nagaraj was modified: no quantifiable backwardness data for SCs/STs; creamy layer applies; inadequate representation and efficiency tests remain. The judgment is essential reading with Indra Sawhney and Nagaraj.',
  holding:
    'For SC/ST promotion reservation, quantifiable data on backwardness is not required; the creamy layer principle applies; inadequate representation and administrative efficiency must still be shown.',
  ratioDecidendi:
    'Constitutional identification of SCs/STs dispenses with a further quantifiable-data test of backwardness for promotion reservation, but equality within the class requires creamy-layer exclusion, subject to representation and efficiency constraints.',
  relatedCases: [
    {
      caseName: 'M. Nagaraj v. Union of India',
      citation: '(2006) 8 SCC 212',
      relationship: 'Modified / Clarified',
      judgmentId: 'm-nagaraj-2006',
    },
    {
      caseName: 'Indra Sawhney v. Union of India',
      citation: '(1992) Supp (3) SCC 217',
      relationship: 'Applied (creamy layer principle)',
      judgmentId: 'indra-sawhney-1992',
    },
  ],
  examPoints: [
    'Modifies Nagaraj: no quantifiable backwardness data for SC/ST promotions.',
    'Creamy layer applies to SCs/STs in promotion.',
    'Inadequate representation + Art. 335 efficiency still required.',
    'Read with Indra Sawhney and Nagaraj as a trilogy.',
  ],
  mcqs: [
    {
      id: 'jarnail-mcq-1',
      question: 'Jarnail Singh held that for SC/ST reservation in promotion:',
      options: [
        'Quantifiable data on backwardness is mandatory in every case',
        'Quantifiable data on backwardness is not required; creamy layer applies',
        'Promotion reservation is unconstitutional',
        'Only OBCs can get promotion reservation',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench held that States need not prove quantifiable backwardness of SCs/STs for promotion reservation, but the creamy layer principle applies.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2018) 10 SCC 396',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const janhitAbhiyan: Judgment = {
  id: 'janhit-abhiyan-2022',
  caseName: 'Janhit Abhiyan v. Union of India',
  shortName: 'Janhit Abhiyan / EWS',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2022,
  citation: '(2023) 5 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'U.U. Lalit, C.J.',
    'Dinesh Maheshwari, J.',
    'S. Ravindra Bhat, J. (dissenting in part)',
    'Bela M. Trivedi, J.',
    'J.B. Pardiwala, J.',
  ],
  subject: 'Constitution',
  topics: ['EWS Reservation', '103rd Amendment', 'Article 15(6)', 'Article 16(6)', '50% Ceiling'],
  tags: ['AIBE', 'Judiciary', 'Reservation', 'EWS', 'Equality', 'Basic Structure'],
  summary:
    'By a 3:2 majority, the Court upheld the Constitution (One Hundred and Third Amendment) Act, 2019 enabling up to 10% reservation for Economically Weaker Sections (EWS) among the non-SC/ST/OBC population under Articles 15(6) and 16(6), holding that economic criteria and the breach of the ordinary 50% ceiling for this segment do not destroy the basic structure.',
  facts: [
    'The 103rd Amendment inserted Articles 15(6) and 16(6) to permit special provisions including reservation for EWS other than the classes covered by existing SC/ST/OBC reservations.',
    'Petitions challenged the amendment as violative of the equality code and the 50% ceiling associated with Indra Sawhney.',
  ],
  issues: [
    'Whether reservation based solely on economic criteria violates the basic structure.',
    'Whether EWS reservation for non-SC/ST/OBC classes, including beyond the ordinary 50% ceiling, is constitutionally valid.',
  ],
  arguments: {
    appellant: [
      'Exclusion of SC/ST/OBC from EWS seats and breach of the 50% rule damage the equality code and basic structure.',
      'Economic criteria alone cannot form a valid basis for reservation under the Constitution’s equality framework.',
    ],
    respondent: [
      'Parliament may create affirmative measures for the economically weak; the 50% rule is not an inviolable basic feature in all contexts.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-15-6',
      article: 'Article 15(6)',
      title: 'Special provisions for economically weaker sections',
      subjectSlug: 'constitution',
      topicId: 'equality-reservation',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-16-6',
      article: 'Article 16(6)',
      title: 'Reservation for economically weaker sections in public employment',
      subjectSlug: 'constitution',
      topicId: 'equality-reservation',
    },
  ],
  reasoning: [
    {
      heading: 'Economic criteria permissible',
      explanation:
        'The majority held that economic disadvantage can be a legitimate basis for affirmative action and that the 103rd Amendment does not destroy the basic structure of equality.',
    },
    {
      heading: '50% ceiling and exclusion of SC/ST/OBC',
      explanation:
        'The majority treated the 50% ceiling as a rule applicable to the earlier reservation framework and held that a separate EWS segment with its own ceiling did not per se violate the basic structure; the exclusion of SC/ST/OBC from EWS was sustained as those classes already have reservation benefits.',
    },
  ],
  decision:
    '103rd Amendment upheld by 3:2. Dissenting opinions raised concerns about equality and the exclusion of the poorest among SC/ST/OBC from EWS. The case is the leading authority on EWS reservation.',
  holding:
    'Articles 15(6) and 16(6) enabling EWS reservation are constitutionally valid; economic criteria and the EWS framework do not destroy the basic structure.',
  ratioDecidendi:
    'Parliament may provide reservation for economically weaker sections among classes not covered by SC/ST/OBC reservations; such a measure does not, by itself, violate the basic structure of equality.',
  relatedCases: [
    {
      caseName: 'Indra Sawhney v. Union of India',
      citation: '(1992) Supp (3) SCC 217',
      relationship: 'Distinguished / Contextualised (50% ceiling)',
      judgmentId: 'indra-sawhney-1992',
    },
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied (basic structure test)',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    '103rd Amendment / EWS upheld 3:2.',
    'Economic criteria can support reservation.',
    'Debate on 50% ceiling and exclusion of SC/ST/OBC — majority vs dissent.',
    'Pair with Indra Sawhney in answers.',
  ],
  mcqs: [
    {
      id: 'janhit-mcq-1',
      question: 'Janhit Abhiyan held that the 103rd Amendment providing EWS reservation is:',
      options: [
        'Void in its entirety',
        'Constitutionally valid (majority)',
        'Applicable only to private employment',
        'Limited to educational institutions run by minorities',
      ],
      correctIndex: 1,
      explanation:
        'By a 3:2 majority the Court upheld the 103rd Amendment enabling EWS reservation under Articles 15(6) and 16(6).',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2023) 5 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const islamicAcademy: Judgment = {
  id: 'islamic-academy-2003',
  caseName: 'Islamic Academy of Education v. State of Karnataka',
  shortName: 'Islamic Academy',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2003,
  citation: '(2003) 6 SCC 697',
  bench: '5-Judge Constitution Bench',
  judges: [
    'V.N. Khare, C.J.',
    'S.N. Variava, J.',
    'K.G. Balakrishnan, J.',
    'Arijit Pasayat, J.',
    'S.B. Sinha, J.',
  ],
  subject: 'Constitution',
  topics: ['Private Education', 'Fees', 'Admissions', 'T.M.A. Pai', 'Committees'],
  tags: ['AIBE', 'Judiciary', 'Education', 'Fees', 'Admissions'],
  summary:
    'Clarifying T.M.A. Pai, the Court directed the setting up of committees to regulate fee structures and to ensure that admission processes in private professional institutions remain fair and transparent, while preserving institutional autonomy recognised in Pai.',
  facts: [
    'After T.M.A. Pai, States and private institutions differed on how fees and admissions in professional colleges should be regulated.',
    'Petitions sought clarification of Pai on quota, fees, and the extent of State supervision.',
  ],
  issues: [
    'How should fees in private professional institutions be regulated after T.M.A. Pai?',
    'What mechanisms ensure fair admissions without destroying institutional autonomy?',
  ],
  arguments: {
    appellant: [
      'Unchecked fee fixation leads to commercialisation; State committees are needed to protect students.',
    ],
    respondent: [
      'Excessive committee control would nullify the autonomy recognised in T.M.A. Pai.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(g)',
      title: 'Freedom to practise any profession or occupation',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-30',
      article: 'Article 30',
      title: 'Right of minorities to establish and administer educational institutions',
      subjectSlug: 'constitution',
      topicId: 'minority-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Fee regulation committees',
      explanation:
        'The Court directed constitution of committees headed by a retired judge to fix/approve fee structures so that institutions charge a reasonable fee without profiteering.',
    },
    {
      heading: 'Admissions and merit',
      explanation:
        'Admission processes were to remain merit-based and transparent, with space for management quotas as understood in the Pai framework, subject to later refinement in P.A. Inamdar.',
    },
  ],
  decision:
    'Implementation machinery for Pai was laid down through committees on fees and related directions. P.A. Inamdar later reconsidered aspects of State quotas in unaided institutions.',
  holding:
    'Private professional institutions retain autonomy under Pai, but fee structures are subject to oversight by judicially supervised committees to prevent commercialisation.',
  ratioDecidendi:
    'Constitutional autonomy of private educational institutions does not extend to unrestricted commercialisation; reasonable fee regulation through independent committees is a permissible restriction.',
  relatedCases: [
    {
      caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
      citation: '(2002) 8 SCC 481',
      relationship: 'Clarified / Implemented',
      judgmentId: 'tma-pai-2002',
    },
    {
      caseName: 'P.A. Inamdar v. State of Maharashtra',
      citation: '(2005) 6 SCC 537',
      relationship: 'Further clarified',
      judgmentId: 'pa-inamdar-2005',
    },
  ],
  examPoints: [
    'Clarifies T.M.A. Pai on fees and admissions.',
    'Fee committees headed by retired judges.',
    'Bridge case between Pai and P.A. Inamdar.',
    'Anti-commercialisation of professional education.',
  ],
  mcqs: [
    {
      id: 'islamic-academy-mcq-1',
      question: 'Islamic Academy is primarily concerned with:',
      options: [
        'Death penalty guidelines',
        'Fee regulation and admission fairness in private professional institutions after T.M.A. Pai',
        'Anti-defection law',
        'CBI autonomy',
      ],
      correctIndex: 1,
      explanation:
        'The Court issued directions on fee committees and fair admissions to implement T.M.A. Pai in professional education.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2003) 6 SCC 697',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const paInamdar: Judgment = {
  id: 'pa-inamdar-2005',
  caseName: 'P.A. Inamdar v. State of Maharashtra',
  shortName: 'P.A. Inamdar',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2005,
  citation: '(2005) 6 SCC 537',
  bench: '7-Judge Constitution Bench',
  judges: [
    'R.C. Lahoti, C.J.',
    'Y.K. Sabharwal, J.',
    'D.M. Dharmadhikari, J.',
    'Arun Kumar, J.',
    'G.P. Mathur, J.',
    'P.K. Balasubramanyan, J.',
    'A.K. Mathur, J.',
  ],
  subject: 'Constitution',
  topics: ['Unaided Institutions', 'State Quota', 'Admissions', 'Article 19(1)(g)', 'Article 30'],
  tags: ['AIBE', 'Judiciary', 'Education', 'Private Colleges', 'Minority Rights'],
  summary:
    'A 7-Judge Bench held that the State cannot impose a seat-sharing (quota) reservation on unaided private professional educational institutions, whether minority or non-minority, as that would amount to nationalisation of seats and violate Articles 19(1)(g) and 30; regulation for standards and anti-commercialisation remains permissible.',
  facts: [
    'States continued to claim large quotas in unaided private professional colleges after T.M.A. Pai and Islamic Academy.',
    'Institutions challenged compulsory State quotas and excessive interference in admissions.',
  ],
  issues: [
    'Whether the State can fix quotas in unaided private professional institutions.',
    'What is the limit of State regulation over admissions in minority and non-minority unaided institutions?',
  ],
  arguments: {
    appellant: [
      'Compulsory State quotas in unaided institutions destroy the autonomy recognised in T.M.A. Pai and amount to appropriation of private capacity.',
    ],
    respondent: [
      'Quotas are necessary to protect merit, weaker sections, and public interest in professional education.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(g)',
      title: 'Freedom to practise any profession or occupation',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-30',
      article: 'Article 30',
      title: 'Right of minorities to establish and administer educational institutions',
      subjectSlug: 'constitution',
      topicId: 'minority-rights',
    },
  ],
  reasoning: [
    {
      heading: 'No compulsory State quota in unaided institutions',
      explanation:
        'The Court held that imposing a State quota on unaided private professional institutions is an unreasonable restriction and impermissible appropriation of private educational capacity.',
    },
    {
      heading: 'Regulation vs nationalisation',
      explanation:
        'Reasonable regulation to maintain standards and prevent capitation is valid, but the State cannot take over admissions through quotas in unaided institutions; later constitutional amendments (e.g. Article 15(5)) addressed some policy responses.',
    },
  ],
  decision:
    'Compulsory State seat-sharing in unaided private professional colleges was rejected. The Pai–Islamic Academy–Inamdar trilogy remains the core case law on private higher education autonomy.',
  holding:
    'The State cannot impose reservation quotas on unaided private professional educational institutions; such compulsion violates Articles 19(1)(g) and 30.',
  ratioDecidendi:
    'Autonomy of unaided private educational institutions under Articles 19(1)(g) and 30 excludes compulsory State appropriation of seats by quota, though reasonable regulation of standards and fees remains permissible.',
  relatedCases: [
    {
      caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
      citation: '(2002) 8 SCC 481',
      relationship: 'Applied / Clarified',
      judgmentId: 'tma-pai-2002',
    },
    {
      caseName: 'Islamic Academy of Education v. State of Karnataka',
      citation: '(2003) 6 SCC 697',
      relationship: 'Clarified / Limited',
      judgmentId: 'islamic-academy-2003',
    },
  ],
  examPoints: [
    'No compulsory State quota in unaided private professional colleges.',
    '7-Judge Bench; completes Pai–Islamic Academy–Inamdar trilogy.',
    'Regulation allowed; nationalisation of seats not allowed.',
    'Later Article 15(5) is often discussed as a legislative response.',
  ],
  mcqs: [
    {
      id: 'inamdar-mcq-1',
      question: 'P.A. Inamdar held that the State:',
      options: [
        'May impose any quota on unaided private professional colleges',
        'Cannot impose compulsory seat-sharing quotas on unaided private professional institutions',
        'Owns all private colleges',
        'Must abolish minority institutions',
      ],
      correctIndex: 1,
      explanation:
        'The 7-Judge Bench held that compulsory State quotas in unaided private professional institutions are unconstitutional.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2005) 6 SCC 537',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const bijoeEmmanuel: Judgment = {
  id: 'bijoe-emmanuel-1986',
  caseName: 'Bijoe Emmanuel v. State of Kerala',
  shortName: 'Bijoe Emmanuel',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1986,
  citation: '(1986) 3 SCC 615',
  bench: '2-Judge Bench',
  judges: ['O. Chinnappa Reddy, J.', 'M.M. Dutt, J.'],
  subject: 'Constitution',
  topics: ['Freedom of Religion', 'Article 25', 'Article 19(1)(a)', 'National Anthem'],
  tags: ['AIBE', 'Judiciary', 'Article 25', 'Free Speech', 'Religion', 'National Anthem'],
  summary:
    'The Court held that compelling schoolchildren, who genuinely held religious beliefs forbidding them to sing the National Anthem, to join in the singing violated Articles 19(1)(a) and 25; standing up respectfully was sufficient. Expulsion for silent non-participation was unconstitutional.',
  facts: [
    'Three Jehovah’s Witness schoolchildren stood respectfully during the National Anthem but did not sing, consistent with their religious belief.',
    'They were expelled under instructions requiring participation in singing; the expulsion was challenged.',
  ],
  issues: [
    'Whether expulsion for not singing the National Anthem, while standing respectfully, violates freedom of speech and freedom of religion.',
    'Whether a genuine religious belief can protect silent non-participation in the Anthem.',
  ],
  arguments: {
    appellant: [
      'Forced singing compels expression against conscience and violates Articles 19(1)(a) and 25; respectful silence is not disrespect.',
    ],
    respondent: [
      'Singing the National Anthem is a patriotic duty enforceable in schools in the interest of national unity.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-25',
      article: 'Article 25',
      title: 'Freedom of conscience and free profession, practice and propagation of religion',
      subjectSlug: 'constitution',
      topicId: 'freedom-religion',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a)',
      title: 'Freedom of speech and expression',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Compelled speech and conscience',
      explanation:
        'The Court held that Article 19(1)(a) includes the right to remain silent; compelling singing against genuine religious conscience is an unconstitutional compulsion of speech.',
    },
    {
      heading: 'Respect without singing',
      explanation:
        'Standing up when the National Anthem is sung shows respect; the law does not require that every person sing, and expulsion for silent respectful non-participation was illegal.',
    },
  ],
  decision:
    'Expulsion was quashed. The judgment is a leading authority on compelled speech, religious conscience, and the National Anthem.',
  holding:
    'Students who stand respectfully during the National Anthem cannot be compelled to sing against their genuine religious beliefs; expulsion for such silence violates Articles 19(1)(a) and 25.',
  ratioDecidendi:
    'Freedom of speech includes the freedom not to speak; genuine religious conscience protects respectful non-participation in singing the National Anthem from State compulsion.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Related (expanded personal liberty / fairness)',
      judgmentId: 'maneka-gandhi-1978',
    },
  ],
  examPoints: [
    'Right to remain silent under Article 19(1)(a).',
    'Article 25 protects genuine religious belief against compelled singing.',
    'Standing respectfully is enough; expulsion illegal.',
    'Classic short-case authority for fundamental rights viva/exams.',
  ],
  mcqs: [
    {
      id: 'bijoe-mcq-1',
      question: 'Bijoe Emmanuel held that children who stand respectfully but do not sing the National Anthem for religious reasons:',
      options: [
        'Must be expelled',
        'Cannot be compelled to sing; expulsion is unconstitutional',
        'Commit an offence under the Prevention of Insults to National Honour Act automatically',
        'Lose all fundamental rights',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that respectful silence based on genuine religious belief is protected and expulsion for not singing is unconstitutional.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1986) 3 SCC 615',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_7: Judgment[] = [
  jarnailSingh,
  janhitAbhiyan,
  islamicAcademy,
  paInamdar,
  bijoeEmmanuel,
]
