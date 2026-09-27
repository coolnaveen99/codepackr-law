import type { Judgment } from './types'

/**
 * Famous landmarks batch 2 (AIBE / Judiciary).
 * DISPATCHER integrity: verified citations, ratio/obiter, no mark-band phrasing.
 */

export const golaknath: Judgment = {
  id: 'golaknath-1967',
  caseName: 'I.C. Golaknath v. State of Punjab',
  shortName: 'Golaknath',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1967,
  citation: '(1967) 2 SCR 762',
  bench: '11-Judge Constitution Bench',
  judges: [
    'K. Subba Rao, C.J.',
    'K.N. Wanchoo, J.',
    'M. Hidayatullah, J.',
    'J.C. Shah, J.',
    'S.M. Sikri, J.',
    'R.S. Bachawat, J.',
    'V. Ramaswami, J.',
    'J.M. Shelat, J.',
    'Vishishtha Bhargava, J.',
    'G.K. Mitter, J.',
    'C.A. Vaidialingam, J.',
  ],
  subject: 'Constitution',
  topics: ['Fundamental Rights', 'Article 13', 'Article 368', 'Constitutional Amendments'],
  tags: ['AIBE', 'Judiciary', 'Article 13', 'Article 368', 'Basic Structure precursor'],
  summary:
    'By a narrow majority, the Court held that Parliament could not amend Part III so as to abridge or take away fundamental rights, treating constitutional amendments as "law" under Article 13(2). The ruling was later overruled on this point by Kesavananda Bharati.',
  facts: [
    'Petitioners challenged Punjab land reform legislation and related constitutional amendments that affected property and other fundamental rights.',
    'The central issue was whether Article 368 authorised Parliament to amend fundamental rights in Part III.',
  ],
  issues: [
    'Whether a constitutional amendment under Article 368 is "law" within the meaning of Article 13(2).',
    'Whether Parliament can amend Part III so as to abridge or take away fundamental rights.',
  ],
  arguments: {
    appellant: [
      'Article 13(2) prohibits the State from making any law that takes away or abridges fundamental rights; a constitutional amendment is such a law.',
      'Fundamental rights occupy a transcendental position and cannot be diluted by ordinary amending majorities.',
    ],
    respondent: [
      'Article 368 confers constituent power distinct from ordinary legislative power; amendments are not "law" under Article 13.',
      'Parliament must retain power to amend the Constitution including Part III to meet social and economic needs.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-13',
      article: 'Article 13',
      title: 'Laws inconsistent with or in derogation of the fundamental rights',
      subjectSlug: 'constitution',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-368',
      article: 'Article 368',
      title: 'Power of Parliament to amend the Constitution',
      subjectSlug: 'constitution',
    },
  ],
  reasoning: [
    {
      heading: 'Amendment as law under Article 13(2)',
      explanation:
        'The majority treated a constitutional amendment as "law" for the purposes of Article 13(2), so that amendments abridging fundamental rights were void.',
    },
    {
      heading: 'Prospective overruling',
      explanation:
        'To avoid chaos, the Court applied prospective overruling so that past amendments were not unsettled, while future abridgement of fundamental rights was barred.',
    },
  ],
  decision:
    'Parliament was held incompetent to abridge fundamental rights by amendment under Article 368. Kesavananda Bharati (1973) later held that amendments are not "law" under Article 13(2) but introduced the basic structure limit instead.',
  holding:
    'Parliament cannot amend the Constitution so as to abridge or take away fundamental rights; constitutional amendments are "law" under Article 13(2) (position later overruled on this specific point).',
  ratioDecidendi:
    'As held in Golaknath, Article 13(2) constrained the amending power so that Part III could not be abridged by constitutional amendment—a proposition superseded in part by Kesavananda’s basic structure framework.',
  obiterDicta:
    'Fundamental rights were described as occupying a place of permanence in the constitutional scheme, influencing later basic-structure reasoning.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Overruled in part',
      judgmentId: 'kesavananda-bharati-1973',
    },
    {
      caseName: 'Sajjan Singh v. State of Rajasthan',
      citation: 'AIR 1965 SC 845',
      relationship: 'Considered',
    },
  ],
  examPoints: [
    '11-Judge Bench; majority barred abridgement of fundamental rights by amendment.',
    'Treated amendment as "law" under Article 13(2)—later overruled on this point by Kesavananda.',
    'Introduced prospective overruling in Indian constitutional law.',
    'Historically essential link between early amendment cases and basic structure.',
  ],
  mcqs: [
    {
      id: 'golaknath-mcq-1',
      question: 'Golaknath held that Parliament could not:',
      options: [
        'Amend the Directive Principles',
        'Abridge fundamental rights by constitutional amendment',
        'Create new States under Article 3',
        'Impose reasonable restrictions under Article 19(2)',
      ],
      correctIndex: 1,
      explanation:
        'Golaknath held that constitutional amendments abridging fundamental rights were void under Article 13(2); Kesavananda later changed the doctrinal basis while retaining limits on amending power.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Reports (1967) 2 SCR 762',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const olgaTellis: Judgment = {
  id: 'olga-tellis-1985',
  caseName: 'Olga Tellis v. Bombay Municipal Corporation',
  shortName: 'Olga Tellis',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1985,
  citation: '(1985) 3 SCC 545',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Y.V. Chandrachud, C.J.',
    'S. Murtaza Fazal Ali, J.',
    'V.D. Tulzapurkar, J.',
    'O. Chinnappa Reddy, J.',
    'A. Varadarajan, J.',
  ],
  subject: 'Constitution',
  topics: ['Article 21', 'Right to Livelihood', 'Pavement Dwellers', 'Natural Justice'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Livelihood', 'Housing', 'PIL'],
  summary:
    'The Court held that the right to life under Article 21 includes the right to livelihood. Eviction of pavement and slum dwellers without fair procedure violates Article 21, though the Court did not create an absolute right to encroach on public pavements.',
  facts: [
    'Pavement and slum dwellers in Bombay faced eviction and demolition of hutments by the Municipal Corporation.',
    'Petitioners argued that eviction without alternative accommodation would deprive them of livelihood and life under Article 21.',
  ],
  issues: [
    'Whether the right to life under Article 21 includes the right to livelihood.',
    'Whether pavement dwellers can be evicted without observing principles of natural justice.',
  ],
  arguments: {
    appellant: [
      'Forced eviction without alternative shelter destroys livelihood and therefore life itself under Article 21.',
      'Even trespassers on pavements are entitled to notice and a hearing before eviction.',
    ],
    respondent: [
      'Public pavements cannot be permanently occupied; municipal authorities must keep streets clear for public use.',
      'Article 21 does not confer a right to encroach on public property.',
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
  ],
  reasoning: [
    {
      heading: 'Livelihood as part of life',
      explanation:
        'The Court held that the right to life includes the right to livelihood; an equally important facet of the right to life is the right to livelihood because no person can live without the means of living.',
    },
    {
      heading: 'Procedure before eviction',
      explanation:
        'Even where occupation of pavements is unauthorised, eviction must ordinarily be preceded by notice and an opportunity of being heard, consistent with fairness under Article 21.',
    },
    {
      heading: 'No absolute right to encroach',
      explanation:
        'The Court did not hold that pavement dwellers have a fundamental right to occupy public pavements permanently; public streets must remain available for public use.',
    },
  ],
  decision:
    'Article 21 includes livelihood. Evictions must respect fair procedure. The judgment is a leading authority on socio-economic dimensions of the right to life.',
  holding:
    'The right to life under Article 21 includes the right to livelihood; eviction of pavement dwellers requires fair procedure, though there is no absolute right to encroach on public streets.',
  ratioDecidendi:
    'Deprive a person of their livelihood and you deprive them of life itself under Article 21; any such deprivation must follow a fair, just and reasonable procedure.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'Francis Coralie Mullin v. Administrator, Union Territory of Delhi',
      citation: '(1981) 1 SCC 608',
      relationship: 'Applied',
    },
  ],
  examPoints: [
    'Article 21 includes right to livelihood.',
    'Eviction of pavement/slum dwellers requires fairness and natural justice.',
    'No fundamental right to permanently occupy public pavements.',
    'High-yield socio-economic rights case under Article 21.',
  ],
  mcqs: [
    {
      id: 'olga-tellis-mcq-1',
      question: 'Olga Tellis is authority for the proposition that Article 21 includes:',
      options: [
        'Only freedom from executive detention',
        'The right to livelihood',
        'An absolute right to occupy public pavements',
        'A right to free housing from the State in all cases',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that the right to life includes the right to livelihood, while not recognising an absolute right to encroach on public streets.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1985) 3 SCC 545',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const nalsa: Judgment = {
  id: 'nalsa-2014',
  caseName: 'National Legal Services Authority v. Union of India',
  shortName: 'NALSA',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2014,
  citation: '(2014) 5 SCC 438',
  bench: '2-Judge Bench',
  judges: ['K.S. Radhakrishnan, J.', 'A.K. Sikri, J.'],
  subject: 'Constitution',
  topics: ['Transgender Rights', 'Article 14', 'Article 15', 'Article 21', 'Self-Identification'],
  tags: ['AIBE', 'Judiciary', 'Gender', 'Equality', 'Article 21', 'LGBTQ+'],
  summary:
    'The Court recognised transgender persons as a "third gender" for legal purposes, affirmed the right to self-identify gender, and held that discrimination against transgender persons violates Articles 14, 15, 16 and 21.',
  facts: [
    'NALSA and transgender activists sought legal recognition and protection of the rights of transgender persons, including Hijras and other gender-nonconforming identities.',
    'The petition highlighted social exclusion, denial of education, employment, and healthcare, and the absence of legal recognition of gender identity.',
  ],
  issues: [
    'Whether transgender persons have a fundamental right to recognition of their gender identity.',
    'Whether the State is obliged to treat transgender persons as a third gender and extend affirmative measures.',
  ],
  arguments: {
    appellant: [
      'Gender identity is integral to dignity, autonomy, and equality under Articles 14, 15, 16 and 21.',
      'Non-recognition of transgender persons denies legal personhood and access to basic civil rights.',
    ],
    respondent: [
      'The Union acknowledged the need for welfare measures while the Court framed the constitutional guarantees.',
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
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'art-21',
    },
  ],
  reasoning: [
    {
      heading: 'Self-identification of gender',
      explanation:
        'The Court held that gender identity is based on self-determination; requiring medical or surgical procedures as a precondition for legal recognition would violate dignity and personal autonomy.',
    },
    {
      heading: 'Third gender and non-discrimination',
      explanation:
        'Transgender persons were recognised as a third gender for the purposes of safeguarding rights. Discrimination in education, employment, and public services violates equality and equal protection.',
    },
    {
      heading: 'Positive obligations',
      explanation:
        'The Court directed the State to take steps for public health, social welfare, and legal recognition, treating transgender persons as a socially and educationally backward class for the purpose of affirmative action subject to law.',
    },
  ],
  decision:
    'Transgender persons were declared entitled to legal recognition of their gender identity, including as third gender, with constitutional protection under Articles 14, 15, 16 and 21. The judgment influenced later legislation including the Transgender Persons (Protection of Rights) Act, 2019.',
  holding:
    'Transgender persons have a fundamental right to self-identify their gender; they are entitled to recognition as a third gender and to protection against discrimination under Articles 14, 15, 16 and 21.',
  ratioDecidendi:
    'Gender identity and sexual orientation are integral to a person’s dignity and autonomy; non-recognition and discrimination against transgender persons violate equality and the right to life with dignity.',
  relatedCases: [
    {
      caseName: 'Navtej Singh Johar v. Union of India',
      citation: '(2018) 10 SCC 1',
      relationship: 'Related',
      judgmentId: 'navtej-johar-2018',
    },
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Related',
      judgmentId: 'puttaswamy-2017',
    },
  ],
  examPoints: [
    'Recognised transgender persons as third gender.',
    'Right to self-identify gender without mandatory surgery.',
    'Articles 14, 15, 16 and 21 protect transgender persons from discrimination.',
    'Directed welfare and affirmative measures by the State.',
  ],
  mcqs: [
    {
      id: 'nalsa-mcq-1',
      question: 'NALSA v. Union of India is primarily authority for:',
      options: [
        'Abolition of triple talaq',
        'Legal recognition of transgender persons and gender self-identification',
        'Mandatory death penalty guidelines',
        'Striking down Section 66A IT Act',
      ],
      correctIndex: 1,
      explanation:
        'NALSA recognised transgender persons as a third gender and affirmed the right to self-identify gender under the Constitution.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2014) 5 SCC 438',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const navtejJohar: Judgment = {
  id: 'navtej-johar-2018',
  caseName: 'Navtej Singh Johar v. Union of India',
  shortName: 'Navtej Johar',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2018,
  citation: '(2018) 10 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Dipak Misra, C.J.',
    'R.F. Nariman, J.',
    'A.M. Khanwilkar, J.',
    'D.Y. Chandrachud, J.',
    'Indu Malhotra, J.',
  ],
  subject: 'Constitution',
  topics: ['Section 377 IPC', 'LGBTQ+ Rights', 'Article 14', 'Article 15', 'Article 21'],
  tags: ['AIBE', 'Judiciary', 'Section 377', 'Equality', 'Privacy', 'Article 21'],
  summary:
    'A Constitution Bench read down Section 377 IPC to exclude consensual sexual conduct between adults of the same sex in private, holding that criminalisation of such conduct violates Articles 14, 15, 19 and 21. Suresh Kumar Koushal was overruled.',
  facts: [
    'Writ petitions challenged the constitutional validity of Section 377 IPC insofar as it criminalised consensual sexual acts between adults of the same sex in private.',
    'The challenge followed the re-criminalisation after Suresh Kumar Koushal reversed the Delhi High Court’s decision in Naz Foundation.',
  ],
  issues: [
    'Whether Section 377 IPC, to the extent it criminalises consensual same-sex relations between adults in private, violates Articles 14, 15, 19 and 21.',
    'Whether Suresh Kumar Koushal correctly restored the criminalisation of such conduct.',
  ],
  arguments: {
    appellant: [
      'Section 377 as applied to consensual adult same-sex intimacy violates equality, dignity, privacy, and freedom of expression.',
      'Sexual orientation is an innate attribute of identity and cannot be a ground for criminal stigma.',
    ],
    respondent: [
      'Section 377 is a gender-neutral provision aimed at unnatural offences; social morality and legislative domain were emphasised in earlier precedent.',
    ],
  },
  provisions: [
    {
      actId: 'ipc',
      actName: 'Indian Penal Code, 1860',
      provisionId: 's-377',
      section: 'Section 377 IPC',
      title: 'Unnatural offences',
      subjectSlug: 'bns',
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
      heading: 'Constitutional morality over social morality',
      explanation:
        'The Court held that constitutional morality, equality, and dignity prevail over majoritarian social morality when fundamental rights of a sexual minority are at stake.',
    },
    {
      heading: 'Privacy, dignity and identity',
      explanation:
        'Building on Puttaswamy, the Court held that sexual orientation and consensual intimacy in private are protected facets of privacy, dignity, and individual autonomy under Article 21.',
    },
    {
      heading: 'Reading down Section 377',
      explanation:
        'Section 377 was read down so that it does not apply to consensual sexual acts between adults in private; non-consensual acts and acts involving minors remain punishable.',
    },
  ],
  decision:
    'Suresh Kumar Koushal was overruled. Consensual same-sex relations between adults in private were decriminalised. Section 377 continues to apply to non-consensual acts and to acts with minors or animals as per the statute’s remaining field.',
  holding:
    'Criminalisation of consensual sexual conduct between adults of the same sex in private under Section 377 IPC is unconstitutional.',
  ratioDecidendi:
    'Section 377 IPC, insofar as it criminalises consensual sexual acts between adults in private, violates Articles 14, 15, 19 and 21; sexual orientation is intrinsic to identity and dignity.',
  relatedCases: [
    {
      caseName: 'Suresh Kumar Koushal v. Naz Foundation',
      citation: '(2014) 1 SCC 1',
      relationship: 'Overruled',
    },
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Applied',
      judgmentId: 'puttaswamy-2017',
    },
    {
      caseName: 'National Legal Services Authority v. Union of India',
      citation: '(2014) 5 SCC 438',
      relationship: 'Related',
      judgmentId: 'nalsa-2014',
    },
  ],
  examPoints: [
    'Section 377 read down; consensual adult same-sex acts in private decriminalised.',
    'Suresh Kumar Koushal overruled.',
    'Constitutional morality and dignity central to the reasoning.',
    'Non-consensual acts and offences involving minors remain punishable.',
  ],
  mcqs: [
    {
      id: 'navtej-mcq-1',
      question: 'Navtej Singh Johar held that Section 377 IPC is unconstitutional to the extent it criminalises:',
      options: [
        'All sexual offences without exception',
        'Consensual sexual acts between adults of the same sex in private',
        'Only heterosexual adultery',
        'Only pornography',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench read down Section 377 so that it does not apply to consensual same-sex relations between adults in private.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2018) 10 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_2: Judgment[] = [
  golaknath,
  olgaTellis,
  nalsa,
  navtejJohar,
]
