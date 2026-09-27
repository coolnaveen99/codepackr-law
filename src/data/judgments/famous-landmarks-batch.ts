import type { Judgment } from './types'

/**
 * High-yield landmark judgments batch (AIBE / Judiciary).
 * Authored to Judgment schema; DISPATCHER integrity: verified citations only.
 */

export const vishaka: Judgment = {
  id: 'vishaka-1997',
  caseName: 'Vishaka v. State of Rajasthan',
  shortName: 'Vishaka',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law & Gender Justice',
  year: 1997,
  citation: '(1997) 6 SCC 241',
  bench: '3-Judge Bench',
  judges: ['J.S. Verma, C.J.', 'Sujata V. Manohar, J.', 'B.N. Kirpal, J.'],
  subject: 'Constitution',
  topics: ['Sexual Harassment at Workplace', 'Article 14', 'Article 15', 'Article 21', 'CEDAW'],
  tags: ['AIBE', 'Judiciary', 'Gender', 'Fundamental Rights', 'Guidelines', 'Workplace'],
  summary:
    'In the absence of domestic legislation on workplace sexual harassment, the Supreme Court laid down binding Vishaka Guidelines under Articles 14, 15, 19(1)(g) and 21, drawing on CEDAW, until Parliament enacted the POSH Act, 2013.',
  facts: [
    'Bhanwari Devi, a social worker in Rajasthan, was gang-raped for opposing a child marriage in the course of her official duties.',
    'Women’s rights activists filed a petition under Article 32 highlighting the absence of an effective legal framework against sexual harassment of women at workplaces.',
    'The Court was called upon to fill the legislative vacuum consistently with constitutional guarantees and international obligations.',
  ],
  issues: [
    'Whether sexual harassment of women at the workplace violates fundamental rights under Articles 14, 15, 19(1)(g) and 21.',
    'Whether the Supreme Court can formulate enforceable guidelines in the absence of domestic legislation, relying on international conventions such as CEDAW.',
  ],
  arguments: {
    appellant: [
      'Workplace sexual harassment denies equality, dignity, and the right to practise any profession under Articles 14, 15, 19(1)(g) and 21.',
      'International conventions ratified by India, including CEDAW, may be read to fill gaps where domestic law is silent, so long as they are not inconsistent with municipal law.',
    ],
    respondent: [
      'The State acknowledged the seriousness of the issue and the need for preventive and remedial measures.',
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
      provisionId: 'art-15',
      article: 'Article 15',
      title: 'Prohibition of discrimination',
      subjectSlug: 'constitution',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'art-21',
    },
  ],
  reasoning: [
    {
      heading: 'Sexual harassment as a constitutional wrong',
      explanation:
        'Sexual harassment at the workplace violates the right to gender equality and the right to life and liberty; it is not merely a private wrong but a public law violation enforceable under Article 32.',
    },
    {
      heading: 'Filling the legislative vacuum',
      explanation:
        'Until suitable legislation is enacted, the Court may issue binding guidelines under Article 32 read with international conventions that India has ratified, provided they do not conflict with municipal law.',
    },
    {
      heading: 'Employer duty and complaint mechanism',
      explanation:
        'Employers and responsible persons in workplaces must provide a safe working environment, publish a prohibition on sexual harassment, and constitute a Complaints Committee headed by a woman with an independent member.',
    },
  ],
  decision:
    'The Court issued the Vishaka Guidelines as law under Article 141 until Parliament legislated. These guidelines formed the foundation of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act).',
  holding:
    'Workplace sexual harassment violates Articles 14, 15, 19(1)(g) and 21. Binding preventive and redressal guidelines apply to all workplaces in the absence of statute.',
  ratioDecidendi:
    'Where domestic law is silent, the Supreme Court may enforce gender equality and dignity at the workplace through binding guidelines under Articles 14, 15, 19(1)(g) and 21, informed by CEDAW, until legislative intervention.',
  obiterDicta:
    'International conventions and norms are significant for interpreting fundamental rights where municipal law is not inconsistent with those norms.',
  relatedCases: [
    {
      caseName: 'Apparel Export Promotion Council v. A.K. Chopra',
      citation: '(1999) 1 SCC 759',
      relationship: 'Applied',
    },
    {
      caseName: 'Medha Kotwal Lele v. Union of India',
      citation: '(2013) 1 SCC 297',
      relationship: 'Followed',
    },
  ],
  examPoints: [
    'Vishaka Guidelines are binding under Article 141 until displaced by statute.',
    'POSH Act, 2013 later codified the complaints-committee model.',
    'Links Articles 14, 15, 19(1)(g) and 21 to workplace safety and dignity.',
    'CEDAW used as an interpretive aid, not as a substitute for the Constitution.',
  ],
  mcqs: [
    {
      id: 'vishaka-mcq-1',
      question: 'The Vishaka Guidelines primarily addressed which gap in Indian law?',
      options: [
        'Domestic violence within marriage',
        'Sexual harassment of women at the workplace',
        'Dowry prohibition enforcement',
        'Equal pay for equal work',
      ],
      correctIndex: 1,
      explanation:
        'Vishaka responded to the absence of domestic legislation on workplace sexual harassment and issued binding guidelines until the POSH Act, 2013.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1997) 6 SCC 241',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const srBommai: Judgment = {
  id: 'sr-bommai-1994',
  caseName: 'S.R. Bommai v. Union of India',
  shortName: 'S.R. Bommai',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1994,
  citation: '(1994) 3 SCC 1',
  bench: '9-Judge Constitution Bench',
  judges: [
    'S.R. Pandian, J.',
    'A.M. Ahmadi, J.',
    'Kuldip Singh, J.',
    'J.S. Verma, J.',
    'P.B. Sawant, J.',
    'K. Ramaswamy, J.',
    'S.C. Agrawal, J.',
    'Yogeshwar Dayal, J.',
    'B.P. Jeevan Reddy, J.',
  ],
  subject: 'Constitution',
  topics: ['Article 356', 'Federalism', 'Floor Test', 'Secularism', 'Judicial Review'],
  tags: ['AIBE', 'Judiciary', 'Article 356', 'Federalism', 'Basic Structure', 'Secularism'],
  summary:
    'A 9-Judge Bench held that a Presidential Proclamation under Article 356 is justiciable, that secularism is part of the basic structure, and that the proper test of majority support of a State government is normally a floor test on the floor of the Legislative Assembly.',
  facts: [
    'Several State governments were dismissed under Article 356 in the late 1980s and early 1990s, including the Bommai government in Karnataka.',
    'Petitioners challenged the validity of the Proclamations and the scope of judicial review over the President’s satisfaction.',
    'The Court examined the federal balance, the role of the Governor’s report, and the relevance of secularism after the demolition of the Babri Masjid in related contexts.',
  ],
  issues: [
    'Whether a Proclamation under Article 356 is amenable to judicial review.',
    'What is the proper mode of determining whether a State government has lost majority support.',
    'Whether secularism forms part of the basic structure so as to justify action under Article 356.',
  ],
  arguments: {
    appellant: [
      'Article 356 is an exceptional power and cannot be used for political convenience or to topple elected governments without objective material.',
      'Majority support must be tested on the floor of the House, not by the subjective opinion of the Governor alone.',
    ],
    respondent: [
      'The President’s satisfaction under Article 356 is based on the Governor’s report and other material and is entitled to deference.',
      'Breakdown of constitutional machinery includes situations where a government acts against secular constitutional values.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-356',
      article: 'Article 356',
      title: 'Provisions in case of failure of constitutional machinery in States',
      subjectSlug: 'constitution',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-74',
      article: 'Article 74',
      title: 'Council of Ministers to aid and advise President',
      subjectSlug: 'constitution',
    },
  ],
  reasoning: [
    {
      heading: 'Justiciability of Article 356',
      explanation:
        'The President’s satisfaction is not beyond judicial review. Courts may examine whether the Proclamation is based on any relevant material, is issued mala fide, or is based on wholly extraneous or irrelevant grounds.',
    },
    {
      heading: 'Floor test as the proper rule',
      explanation:
        'Where the issue is loss of majority, the Court preferred a floor test in the Legislative Assembly over private assessment by the Governor, subject to exceptional circumstances.',
    },
    {
      heading: 'Secularism and basic structure',
      explanation:
        'Secularism is a basic feature of the Constitution. A State government acting contrary to the secular constitutional creed may invite action under Article 356 on the basis of relevant material.',
    },
  ],
  decision:
    'The Court clarified the limited but real scope of judicial review over Article 356 Proclamations, emphasised the floor test, and recognised secularism as part of the basic structure relevant to federal emergency powers.',
  holding:
    'Article 356 Proclamations are justiciable; majority support is ordinarily tested on the floor of the House; secularism is a basic feature of the Constitution.',
  ratioDecidendi:
    'Presidential power under Article 356 is subject to judicial review on grounds of relevant material, mala fides and extraneous considerations; democratic legitimacy of a State ministry is primarily determined by a floor test.',
  obiterDicta:
    'Federalism and democracy require that Article 356 remain an exceptional remedy and not a tool of political domination by the Union.',
  relatedCases: [
    {
      caseName: 'State of Rajasthan v. Union of India',
      citation: '(1977) 3 SCC 592',
      relationship: 'Distinguished',
    },
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    'Article 356 Proclamation is justiciable (not a political thicket in absolute terms).',
    'Floor test is the primary method to test majority.',
    'Secularism is part of the basic structure.',
    'Mala fides and absence of relevant material can invalidate a Proclamation.',
  ],
  mcqs: [
    {
      id: 'sr-bommai-mcq-1',
      question: 'In S.R. Bommai, the Supreme Court held that the proper way to test majority support of a State government is ordinarily:',
      options: [
        'Governor’s private assessment alone',
        'Floor test in the Legislative Assembly',
        'Opinion of the Union Cabinet only',
        'Referendum in the State',
      ],
      correctIndex: 1,
      explanation:
        'Bommai preferred a floor test on the floor of the House as the democratic method to determine majority support, subject to rare exceptions.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1994) 3 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const bachanSingh: Judgment = {
  id: 'bachan-singh-1980',
  caseName: 'Bachan Singh v. State of Punjab',
  shortName: 'Bachan Singh',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law & Constitutional Law',
  year: 1980,
  citation: '(1980) 2 SCC 684',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Y.V. Chandrachud, C.J.',
    'R.S. Sarkaria, J.',
    'A.C. Gupta, J.',
    'N.L. Untwalia, J.',
    'P.N. Bhagwati, J. (dissenting)',
  ],
  subject: 'Criminal Law',
  topics: ['Death Penalty', 'Rarest of Rare', 'Section 354(3) CrPC', 'Article 21', 'Article 14'],
  tags: ['AIBE', 'Judiciary', 'Capital Punishment', 'Sentencing', 'Article 21', 'IPC/BNS'],
  summary:
    'By majority, the Supreme Court upheld the constitutional validity of the death penalty under Section 302 IPC read with Section 354(3) CrPC, and laid down that capital punishment should be imposed only in the “rarest of rare” cases when the alternative of life imprisonment is unquestionably foreclosed.',
  facts: [
    'Bachan Singh was convicted of murder and sentenced to death under Section 302 IPC.',
    'The constitutional validity of the death penalty and the sentencing procedure under Section 354(3) CrPC were challenged.',
    'The Court revisited earlier rulings including Jagmohan Singh and the emerging human-rights critique of capital punishment.',
  ],
  issues: [
    'Whether the death penalty under Section 302 IPC violates Articles 14, 19 and 21.',
    'How courts should exercise the discretion between death and life imprisonment under Section 354(3) CrPC.',
  ],
  arguments: {
    appellant: [
      'Death penalty is cruel, irreversible, and arbitrary, and therefore violates Article 21’s guarantee of procedure established by law read with fairness.',
      'Section 354(3) confers unstructured discretion leading to unequal application of capital punishment.',
    ],
    respondent: [
      'Parliament has retained death penalty for the gravest offences; judicial discretion under Section 354(3) with recorded special reasons is a sufficient safeguard.',
      'Deterrence and societal denunciation of the most heinous murders justify retention of capital punishment.',
    ],
  },
  provisions: [
    {
      actId: 'ipc',
      actName: 'Indian Penal Code, 1860 (historical; see BNS for post-2024 offences)',
      provisionId: 's-302',
      section: 'Section 302 IPC',
      title: 'Punishment for murder',
      subjectSlug: 'bns',
    },
    {
      actId: 'crpc',
      actName: 'Code of Criminal Procedure, 1973 (historical; see BNSS)',
      provisionId: 's-354-3',
      section: 'Section 354(3) CrPC',
      title: 'Special reasons for death sentence',
      subjectSlug: 'bnss',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'art-21',
    },
  ],
  reasoning: [
    {
      heading: 'Constitutional validity of death penalty',
      explanation:
        'The majority held that capital punishment for murder does not per se violate Articles 14, 19 or 21 when authorised by law and imposed through a fair sentencing procedure requiring special reasons.',
    },
    {
      heading: 'Rarest of rare doctrine',
      explanation:
        'Death sentence should be imposed only when the alternative option of life imprisonment is unquestionably foreclosed — the “rarest of rare” cases — having regard to aggravating and mitigating circumstances relating to the crime and the criminal.',
    },
    {
      heading: 'Dissent of Justice Bhagwati',
      explanation:
        'Justice Bhagwati dissented, holding the death penalty unconstitutional as arbitrary and irreversible; the majority view nevertheless remains the governing law on validity.',
    },
  ],
  decision:
    'Section 302 IPC and Section 354(3) CrPC were upheld. Courts must record special reasons and confine death sentences to the rarest of rare cases. Later cases such as Machhi Singh refined the aggravating/mitigating framework.',
  holding:
    'Death penalty is constitutionally valid but must be imposed only in the rarest of rare cases with special reasons recorded under Section 354(3) CrPC.',
  ratioDecidendi:
    'Capital punishment under a valid law does not violate Article 21 when the sentencing court, after considering aggravating and mitigating factors, concludes that life imprisonment is unquestionably foreclosed.',
  obiterDicta:
    'A standardisation of all murder cases into rigid categories for automatic death sentences would be inconsistent with individualised sentencing.',
  relatedCases: [
    {
      caseName: 'Machhi Singh v. State of Punjab',
      citation: '(1983) 3 SCC 470',
      relationship: 'Followed / Expanded',
    },
    {
      caseName: 'Jagmohan Singh v. State of U.P.',
      citation: '(1973) 1 SCC 20',
      relationship: 'Affirmed in substance',
    },
  ],
  examPoints: [
    '“Rarest of rare” is the governing sentencing standard for death penalty.',
    'Special reasons under Section 354(3) CrPC (now corresponding BNSS provision) are mandatory.',
    'Majority upheld constitutional validity; Bhagwati J. dissented.',
    'Machhi Singh later catalogued illustrative aggravating factors.',
  ],
  mcqs: [
    {
      id: 'bachan-singh-mcq-1',
      question: 'Bachan Singh is authority for which sentencing principle regarding the death penalty?',
      options: [
        'Death is mandatory for all murders',
        'Death only in the rarest of rare cases when life imprisonment is unquestionably foreclosed',
        'Death is unconstitutional in all cases',
        'Death may be imposed without recording reasons',
      ],
      correctIndex: 1,
      explanation:
        'The majority in Bachan Singh confined capital punishment to the rarest of rare cases and required special reasons under Section 354(3) CrPC.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1980) 2 SCC 684',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH: Judgment[] = [vishaka, srBommai, bachanSingh]
