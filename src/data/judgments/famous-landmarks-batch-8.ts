import type { Judgment } from './types'

/**
 * Famous landmarks batch 8 — 10 judgments (double batch).
 * DISPATCHER Phase 5: verified citations; ratio mandatory; no mark-band phrasing;
 * relatedCases.judgmentId only when target exists; catalog-safe topicIds only.
 */

export const anuradhaBhasin: Judgment = {
  id: 'anuradha-bhasin-2020',
  caseName: 'Anuradha Bhasin v. Union of India',
  shortName: 'Anuradha Bhasin',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2020,
  citation: '(2020) 3 SCC 637',
  bench: '3-Judge Bench',
  judges: ['N.V. Ramana, J.', 'R. Subhash Reddy, J.', 'B.R. Gavai, J.'],
  subject: 'Constitution',
  topics: ['Internet Shutdown', 'Article 19', 'Proportionality', 'Freedom of Speech'],
  tags: ['AIBE', 'Judiciary', 'Internet', 'Article 19', 'Proportionality', 'J&K'],
  summary:
    'The Court held that freedom of speech and expression under Article 19(1)(a) and freedom to practise any profession under Article 19(1)(g) include the right to access the Internet, and that indefinite Internet suspensions are impermissible. Restrictions must satisfy legality, necessity, and proportionality, with reasoned orders subject to review.',
  facts: [
    'Following the constitutional changes relating to Jammu and Kashmir in August 2019, mobile and Internet services were severely restricted for prolonged periods.',
    'Petitioners including a journalist challenged the legality and proportionality of the communication shutdowns.',
  ],
  issues: [
    'Whether access to the Internet is protected under Article 19.',
    'What standards govern suspension of Internet services by the State.',
  ],
  arguments: {
    appellant: [
      'Internet access is essential to speech, press, and occupation; indefinite shutdowns without reasoned orders violate Articles 19 and 21.',
    ],
    respondent: [
      'Shutdowns were necessary for public order and national security in a sensitive region.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a) and 19(1)(g)',
      title: 'Freedom of speech and profession',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Internet as a medium of Article 19 freedoms',
      explanation:
        'The Court recognised that expression and trade/profession in the modern age depend on Internet access; restrictions on the medium restrict the freedom itself.',
    },
    {
      heading: 'Proportionality and reasoned orders',
      explanation:
        'Suspensions must be backed by law, pursue a legitimate aim, and be proportionate. Orders must state reasons and are open to judicial review; indefinite suspensions are not permissible.',
    },
  ],
  decision:
    'The Court laid down principles for Internet suspensions, directed review of existing orders, and affirmed constitutional limits on communication blackouts.',
  holding:
    'Freedom of speech and profession includes access to the Internet; indefinite Internet suspensions are unconstitutional; restrictions must meet proportionality and be supported by reasoned orders.',
  ratioDecidendi:
    'State-imposed Internet suspensions that curtail Article 19 freedoms must satisfy the tests of legality, necessity, and proportionality, and cannot be indefinite.',
  relatedCases: [
    {
      caseName: 'Shreya Singhal v. Union of India',
      citation: '(2015) 5 SCC 1',
      relationship: 'Related (free speech online)',
      judgmentId: 'shreya-singhal-2015',
    },
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Related (proportionality / privacy)',
      judgmentId: 'puttaswamy-2017',
    },
  ],
  examPoints: [
    'Internet access linked to Articles 19(1)(a) and 19(1)(g).',
    'Indefinite shutdowns impermissible.',
    'Proportionality + reasoned orders + judicial review.',
    'J&K 2019 factual matrix.',
  ],
  mcqs: [
    {
      id: 'anuradha-bhasin-mcq-1',
      question: 'Anuradha Bhasin held that indefinite Internet suspensions are:',
      options: [
        'Always valid in border States',
        'Impermissible; restrictions must be proportionate and reasoned',
        'Required under Article 356',
        'Outside judicial review',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that indefinite Internet suspensions are not permissible and that restrictions must satisfy proportionality with reasoned orders.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2020) 3 SCC 637',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const puttaswamyAadhaar: Judgment = {
  id: 'puttaswamy-aadhaar-2018',
  caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India (Aadhaar)',
  shortName: 'Puttaswamy (Aadhaar)',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2018,
  citation: '(2019) 1 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Dipak Misra, C.J.',
    'A.K. Sikri, J.',
    'A.M. Khanwilkar, J.',
    'D.Y. Chandrachud, J. (dissenting in part)',
    'Ashok Bhushan, J.',
  ],
  subject: 'Constitution',
  topics: ['Aadhaar', 'Privacy', 'Article 21', 'Proportionality', 'Money Bill'],
  tags: ['AIBE', 'Judiciary', 'Aadhaar', 'Privacy', 'Article 21', 'Data'],
  summary:
    'A Constitution Bench largely upheld the Aadhaar framework for targeted delivery of welfare benefits as a proportionate measure, while striking down or reading down certain provisions (including unrestricted private use and some power to store metadata). The privacy judgment of 2017 supplied the doctrinal foundation.',
  facts: [
    'After privacy was declared a fundamental right in 2017, challenges to the Aadhaar Act and related notifications were heard on proportionality, surveillance, exclusion, and Money Bill procedure.',
  ],
  issues: [
    'Whether the Aadhaar scheme violates the fundamental right to privacy.',
    'Whether mandatory Aadhaar linkage for all services is proportionate.',
  ],
  arguments: {
    appellant: [
      'Centralised biometric identity enables surveillance, exclusion from welfare, and disproportionate data collection violative of Article 21.',
    ],
    respondent: [
      'Aadhaar is a targeted, minimal means to ensure welfare reaches the correct beneficiary and reduce leakage.',
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
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Proportionality applied to Aadhaar',
      explanation:
        'The majority applied the proportionality framework from the privacy ruling: legitimate aim (welfare targeting), rational nexus, necessity, and balancing of rights against State interests.',
    },
    {
      heading: 'Partial invalidation',
      explanation:
        'Provisions enabling broad private corporate use of Aadhaar and certain storage/use practices were struck down or confined; core welfare use was sustained with safeguards.',
    },
  ],
  decision:
    'Aadhaar for State welfare delivery largely upheld; several provisions curtailed. Distinct from the 2017 privacy holding, which remains the rights foundation.',
  holding:
    'Aadhaar-based authentication for targeted State welfare is largely constitutional if proportionate and safeguarded; unrestricted private use and certain invasive provisions are invalid.',
  ratioDecidendi:
    'A biometric identity programme for welfare delivery can survive privacy scrutiny if it meets proportionality and is confined by law; measures that enable unrestricted commercial or surveillance use fail constitutional limits.',
  relatedCases: [
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Applied (privacy as fundamental right)',
      judgmentId: 'puttaswamy-2017',
    },
  ],
  examPoints: [
    'Distinct from Puttaswamy (Privacy) 2017 — this is the Aadhaar merits ruling.',
    'Proportionality test applied.',
    'Welfare use largely upheld; private/unrestricted use curtailed.',
    'Money Bill issue discussed (majority vs dissent).',
  ],
  mcqs: [
    {
      id: 'aadhaar-mcq-1',
      question: 'Puttaswamy (Aadhaar) 2018 primarily held that:',
      options: [
        'Aadhaar is entirely unconstitutional in all uses',
        'Aadhaar for targeted welfare is largely valid subject to proportionality and safeguards',
        'Privacy is not a fundamental right',
        'Only private companies may use Aadhaar',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench largely upheld Aadhaar for State welfare delivery while striking down or limiting certain provisions.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2019) 1 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const rcCooper: Judgment = {
  id: 'rc-cooper-1970',
  caseName: 'R.C. Cooper v. Union of India',
  shortName: 'R.C. Cooper / Bank Nationalisation',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1970,
  citation: '(1970) 1 SCC 248',
  bench: '11-Judge Constitution Bench',
  judges: [
    'J.C. Shah, J.',
    'S.M. Sikri, J.',
    'J.M. Shelat, J.',
    'V. Bhargava, J.',
    'G.K. Mitter, J.',
    'C.A. Vaidialingam, J.',
    'K.S. Hegde, J.',
    'A.N. Grover, J.',
    'A.N. Ray, J.',
    'I.D. Dua, J.',
    'J.C. Shah, C.J. (leading)',
  ],
  subject: 'Constitution',
  topics: ['Bank Nationalisation', 'Article 19', 'Article 31', 'Property', 'Compensation'],
  tags: ['AIBE', 'Judiciary', 'Property', 'Article 19', 'Nationalisation'],
  summary:
    'The Court struck down the Banking Companies (Acquisition and Transfer of Undertakings) Ordinance/Act of 1969 insofar as the compensation scheme was illusory, and held that a law can be tested under multiple fundamental rights; the Gopalan theory of isolated silos was rejected in approach, paving the way for Maneka Gandhi.',
  facts: [
    'The Union nationalised fourteen major commercial banks through an ordinance and later an Act.',
    'Shareholders and banks challenged the acquisition and the adequacy of compensation.',
  ],
  issues: [
    'Whether the nationalisation law violated Articles 14, 19 and 31.',
    'Whether fundamental rights operate in separate compartments.',
  ],
  arguments: {
    appellant: [
      'Compensation was illusory; the restriction on business and acquisition of property failed constitutional standards under Articles 19 and 31.',
    ],
    respondent: [
      'Nationalisation served public interest and compensation principles under Article 31 were satisfied.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(f) and (g) (as then in force)',
      title: 'Right to property and to practise profession',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Interrelationship of fundamental rights',
      explanation:
        'The Court rejected the rigid Gopalan approach that each fundamental right occupies a separate compartment; a law can be tested under more than one Article.',
    },
    {
      heading: 'Illusory compensation',
      explanation:
        'The compensation scheme was held not to meet constitutional requirements, rendering the acquisition scheme vulnerable.',
    },
  ],
  decision:
    'The impugned nationalisation measure was struck down on compensation and rights grounds. Parliament later re-enacted nationalisation with adjustments. Doctrinally, R.C. Cooper is a bridge to Maneka Gandhi’s integrated reading of rights.',
  holding:
    'Bank nationalisation as structured failed constitutional standards on compensation and rights; fundamental rights are not isolated silos.',
  ratioDecidendi:
    'A law abridging freedoms may be examined under multiple fundamental-rights provisions; acquisition accompanied by illusory compensation does not satisfy constitutional requirements.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Developed (integrated rights approach)',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'A.K. Gopalan v. State of Madras',
      citation: 'AIR 1950 SC 27',
      relationship: 'Approach narrowed / rejected',
      judgmentId: 'ak-gopalan-1950',
    },
  ],
  examPoints: [
    'Bank Nationalisation Case.',
    'Rejected Gopalan silos; rights read together.',
    'Illusory compensation fatal.',
    'Doctrinal prelude to Maneka Gandhi.',
  ],
  mcqs: [
    {
      id: 'rc-cooper-mcq-1',
      question: 'R.C. Cooper is important doctrinally because it:',
      options: [
        'Upheld ADM Jabalpur',
        'Rejected the theory that fundamental rights operate in isolated silos',
        'Created the collegium',
        'Struck down Section 377 IPC',
      ],
      correctIndex: 1,
      explanation:
        'R.C. Cooper rejected the Gopalan compartmental approach and allowed testing a law under multiple fundamental rights.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1970) 1 SCC 248',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const epRoyappa: Judgment = {
  id: 'ep-royappa-1974',
  caseName: 'E.P. Royappa v. State of Tamil Nadu',
  shortName: 'E.P. Royappa',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1974,
  citation: '(1974) 4 SCC 3',
  bench: '5-Judge Constitution Bench',
  judges: [
    'A.N. Ray, C.J.',
    'Palekar, J.',
    'Bhagwati, J.',
    'Chandrachud, J.',
    'Sarkaria, J.',
  ],
  subject: 'Constitution',
  topics: ['Article 14', 'Arbitrariness', 'Equality', 'Service Law'],
  tags: ['AIBE', 'Judiciary', 'Article 14', 'Arbitrariness', 'Equality'],
  summary:
    'Justice Bhagwati’s opinion famously restated Article 14: equality is antithetic to arbitrariness; any arbitrary State action violates Article 14. The case modernised equality doctrine beyond traditional reasonable-classification analysis.',
  facts: [
    'A senior IAS officer challenged his transfer/posting as arbitrary and violative of Articles 14 and 16.',
    'The Court examined the scope of equality in the context of administrative action.',
  ],
  issues: [
    'Whether arbitrary State action, even without a comparative classification failure, violates Article 14.',
  ],
  arguments: {
    appellant: [
      'The impugned action was hostile and arbitrary, denying equality before the law.',
    ],
    respondent: [
      'Transfer and cadre management fall within administrative discretion.',
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
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Arbitrariness and Article 14',
      explanation:
        'Bhagwati J. held that from a positivistic point of view, equality is antithetic to arbitrariness; Article 14 strikes at arbitrariness in State action and ensures fairness and equality of treatment.',
    },
  ],
  decision:
    'The arbitrariness doctrine under Article 14 became a central tool of Indian constitutional review, later reinforced in Maneka Gandhi and subsequent cases.',
  holding:
    'Arbitrary State action violates Article 14; equality and arbitrariness are sworn enemies.',
  ratioDecidendi:
    'Article 14 is violated not only by discriminatory classification but by arbitrary State action that is unfair or unequal in its operation.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied / Expanded',
      judgmentId: 'maneka-gandhi-1978',
    },
  ],
  examPoints: [
    'Article 14 = anti-arbitrariness (Bhagwati J.).',
    'Goes beyond traditional reasonable classification.',
    'Foundation for modern administrative-law equality review.',
    'Often quoted: equality and arbitrariness are sworn enemies.',
  ],
  mcqs: [
    {
      id: 'royappa-mcq-1',
      question: 'E.P. Royappa is famous for holding that Article 14:',
      options: [
        'Only applies to criminal trials',
        'Strikes at arbitrariness in State action',
        'Does not apply to service matters',
        'Was deleted by amendment',
      ],
      correctIndex: 1,
      explanation:
        'Bhagwati J. held that equality is antithetic to arbitrariness and that Article 14 strikes at arbitrary State action.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1974) 4 SCC 3',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const ajayHasia: Judgment = {
  id: 'ajay-hasia-1981',
  caseName: 'Ajay Hasia v. Khalid Mujib Sehravardi',
  shortName: 'Ajay Hasia',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1981,
  citation: '(1981) 1 SCC 722',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Y.V. Chandrachud, C.J.',
    'P.N. Bhagwati, J.',
    'Krishna Iyer, J.',
    'Syed Murtaza Fazal Ali, J.',
    'A.D. Koshal, J.',
  ],
  subject: 'Constitution',
  topics: ['Article 12', 'State', 'Instrumentality', 'Fundamental Rights'],
  tags: ['AIBE', 'Judiciary', 'Article 12', 'State', 'Public Corporation'],
  summary:
    'The Court held that a society running an engineering college, deeply controlled and funded by government, was “State” under Article 12, and laid down tests to identify instrumentalities or agencies of the State for the purpose of enforcing fundamental rights.',
  facts: [
    'Admission practices of a regional engineering college run by a society were challenged as violative of equality.',
    'The threshold question was whether the society was “State” under Article 12.',
  ],
  issues: [
    'What tests determine whether a corporation or society is an instrumentality of the State under Article 12?',
  ],
  arguments: {
    appellant: [
      'Government control, funding, and public function made the society an agency of the State subject to Part III.',
    ],
    respondent: [
      'A registered society is a private body and not “State”.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-12',
      article: 'Article 12',
      title: 'Definition of State',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Instrumentality tests',
      explanation:
        'The Court enumerated factors such as government funding, control of composition of the body, governmental control over policies, and monopoly status conferred by the State to decide if an entity is an instrumentality of the State.',
    },
  ],
  decision:
    'The society was held to be State under Article 12. Ajay Hasia remains a leading authority on the scope of “State” for fundamental-rights enforcement.',
  holding:
    'Bodies that are instrumentalities or agencies of government are “State” under Article 12 and bound by fundamental rights.',
  ratioDecidendi:
    'Article 12 reaches not only government departments but also instrumentalities and agencies of the State identified by functional and control-based tests.',
  relatedCases: [
    {
      caseName: 'R.D. Shetty v. International Airport Authority of India',
      citation: '(1979) 3 SCC 489',
      relationship: 'Applied / Developed',
    },
  ],
  examPoints: [
    'Article 12 instrumentality / agency tests.',
    'Government funding and control are key indicators.',
    'Extends Part III obligations to public corporations/societies.',
    'Often paired with R.D. Shetty.',
  ],
  mcqs: [
    {
      id: 'ajay-hasia-mcq-1',
      question: 'Ajay Hasia is authority for determining:',
      options: [
        'Death penalty sentencing',
        'When a body is “State” under Article 12',
        'Anti-defection disqualification',
        'Collegium composition',
      ],
      correctIndex: 1,
      explanation:
        'The Court laid down tests to identify instrumentalities of the State under Article 12.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1981) 1 SCC 722',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const akGopalan: Judgment = {
  id: 'ak-gopalan-1950',
  caseName: 'A.K. Gopalan v. State of Madras',
  shortName: 'A.K. Gopalan',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1950,
  citation: 'AIR 1950 SC 27',
  bench: '6-Judge Bench',
  judges: [
    'H.J. Kania, C.J.',
    'Saiyid Fazl Ali, J.',
    'M. Patanjali Sastri, J.',
    'M.C. Mahajan, J.',
    'B.K. Mukherjea, J.',
    'S.R. Das, J.',
  ],
  subject: 'Constitution',
  topics: ['Article 21', 'Preventive Detention', 'Procedure Established by Law', 'Article 19'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Preventive Detention', 'Early Constitution'],
  summary:
    'An early Constitution Bench upheld the Preventive Detention Act and adopted a narrow reading of Article 21: “procedure established by law” meant procedure laid down by enacted law, not American due process. Fundamental rights were treated in separate compartments. This approach was later transformed by R.C. Cooper and Maneka Gandhi.',
  facts: [
    'A.K. Gopalan, a communist leader, was detained under the Preventive Detention Act, 1950.',
    'He challenged the Act as violative of Articles 13, 19, 21 and 22.',
  ],
  issues: [
    'Whether “procedure established by law” under Article 21 imports due process.',
    'Whether a preventive detention law must also satisfy Article 19.',
  ],
  arguments: {
    appellant: [
      'Detention without fair procedure violates personal liberty; Articles 19 and 21 must be read together.',
    ],
    respondent: [
      'Article 21 is satisfied if there is a valid enacted procedure; preventive detention is specifically regulated by Article 22.',
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
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Narrow reading of Article 21',
      explanation:
        'The majority held that Article 21 does not incorporate substantive due process; any procedure established by a validly enacted law is sufficient.',
    },
    {
      heading: 'Compartmentalisation of rights',
      explanation:
        'The Court treated Articles 19 and 21 as occupying distinct fields — an approach later rejected.',
    },
  ],
  decision:
    'Preventive Detention Act largely upheld (with limited invalidation of some provisions). Historically foundational; doctrinally superseded in approach by later case law.',
  holding:
    'Procedure established by law under Article 21 means procedure prescribed by enacted law; Article 21 was read narrowly and separately from Article 19.',
  ratioDecidendi:
    'As held in Gopalan, Article 21 is satisfied by a valid statutory procedure for deprivation of liberty — a proposition later expanded so that procedure must also be fair, just and reasonable.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Overruled in approach',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'R.C. Cooper v. Union of India',
      citation: '(1970) 1 SCC 248',
      relationship: 'Began departure from silos',
      judgmentId: 'rc-cooper-1970',
    },
  ],
  examPoints: [
    'Early narrow view of Article 21.',
    'Procedure established by law ≠ due process (as then held).',
    'Compartmentalisation later rejected by Cooper and Maneka.',
    'Must be contrasted with Maneka Gandhi in answers.',
  ],
  mcqs: [
    {
      id: 'gopalan-mcq-1',
      question: 'A.K. Gopalan is associated with which reading of Article 21?',
      options: [
        'Procedure must be fair, just and reasonable (Maneka view)',
        'Procedure established by enacted law is sufficient (narrow view)',
        'Article 21 does not exist',
        'Only applies to property',
      ],
      correctIndex: 1,
      explanation:
        'Gopalan adopted a narrow reading that procedure established by law meant procedure laid down by statute, later expanded in Maneka Gandhi.',
    },
  ],
  source: {
    type: 'document',
    title: 'AIR 1950 SC 27',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const unniKrishnan: Judgment = {
  id: 'unni-krishnan-1993',
  caseName: 'Unni Krishnan, J.P. v. State of Andhra Pradesh',
  shortName: 'Unni Krishnan',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1993,
  citation: '(1993) 1 SCC 645',
  bench: '5-Judge Constitution Bench',
  judges: [
    'L.M. Sharma, C.J.',
    'S. Ratnavel Pandian, J.',
    'S. Mohan, J.',
    'B.P. Jeevan Reddy, J.',
    'S.P. Bharucha, J.',
  ],
  subject: 'Constitution',
  topics: ['Right to Education', 'Article 21', 'Capitation Fee', 'Private Colleges'],
  tags: ['AIBE', 'Judiciary', 'Education', 'Article 21', 'Capitation'],
  summary:
    'The Court held that the right to education flows from Article 21 to the extent of free education until the age of 14 years (as then linked to Directive Principles), and struck down commercialisation through capitation fees in professional education, while recognising regulated private participation.',
  facts: [
    'Petitions challenged capitation-fee based admissions in private professional colleges and sought recognition of a right to education.',
  ],
  issues: [
    'Whether the right to education is part of Article 21.',
    'Whether capitation-fee based admissions are constitutional.',
  ],
  arguments: {
    appellant: [
      'Education is integral to life and dignity under Article 21; capitation fees commercialise a public good.',
    ],
    respondent: [
      'Private colleges need financial autonomy; education as a fundamental right cannot mean State obligation for all higher education.',
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
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Education and Article 21',
      explanation:
        'The Court held that the right to education is implicit in Article 21, and that the State is obligated to provide free education to children until they complete the age of 14 years (as then understood with Article 45).',
    },
    {
      heading: 'Anti-capitation',
      explanation:
        'Charging capitation fees for admission to professional courses was held illegal; a scheme for fee regulation was indicated (later revisited in the T.M.A. Pai line).',
    },
  ],
  decision:
    'Right to education recognised as flowing from Article 21 up to age 14; capitation condemned. Later modified in part by T.M.A. Pai on private institutional autonomy, but remains foundational for the education-rights discourse leading to Article 21A.',
  holding:
    'The right to education is part of Article 21 to the extent of free education until 14 years; capitation-fee admissions are unconstitutional.',
  ratioDecidendi:
    'Life with dignity under Article 21 includes a right to education at the elementary level as then linked to constitutional policy; commercialisation through capitation fees is impermissible.',
  relatedCases: [
    {
      caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
      citation: '(2002) 8 SCC 481',
      relationship: 'Later refined private education autonomy',
      judgmentId: 'tma-pai-2002',
    },
    {
      caseName: 'Mohini Jain v. State of Karnataka',
      citation: '(1992) 3 SCC 666',
      relationship: 'Related',
    },
  ],
  examPoints: [
    'Right to education under Article 21 (pre-21A).',
    'Free education until 14 (as then held).',
    'Capitation fees illegal.',
    'Contrast with T.M.A. Pai on private colleges.',
  ],
  mcqs: [
    {
      id: 'unni-mcq-1',
      question: 'Unni Krishnan held that the right to education:',
      options: [
        'Is not connected to Article 21',
        'Flows from Article 21 (elementary level as then framed) and condemns capitation fees',
        'Applies only to postgraduate medical seats',
        'Abolishes all private colleges',
      ],
      correctIndex: 1,
      explanation:
        'The Court recognised a right to education under Article 21 up to age 14 and held capitation-fee admissions illegal.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1993) 1 SCC 645',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const bandhuaMukti: Judgment = {
  id: 'bandhua-mukti-morcha-1984',
  caseName: 'Bandhua Mukti Morcha v. Union of India',
  shortName: 'Bandhua Mukti Morcha',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1984,
  citation: '(1984) 3 SCC 161',
  bench: '3-Judge Bench',
  judges: ['P.N. Bhagwati, J.', 'R.S. Pathak, J.', 'Amarendra Nath Sen, J.'],
  subject: 'Constitution',
  topics: ['Bonded Labour', 'Article 21', 'Article 23', 'PIL', 'Dignity'],
  tags: ['AIBE', 'Judiciary', 'Bonded Labour', 'Article 21', 'Article 23', 'PIL'],
  summary:
    'In a public interest petition on bonded labourers in stone quarries, the Court held that the right to live with human dignity under Article 21 includes protection of health and strength, and issued extensive directions for identification, release, and rehabilitation of bonded labour under the Bonded Labour System (Abolition) Act, 1976.',
  facts: [
    'An organisation wrote to the Court describing bonded labour conditions in Faridabad stone quarries.',
    'The letter was treated as a writ petition under Article 32.',
  ],
  issues: [
    'Whether bonded labour violates Articles 21 and 23.',
    'What positive obligations rest on the State to abolish and rehabilitate bonded labour.',
  ],
  arguments: {
    appellant: [
      'Forced labour and bondage strip dignity and violate Articles 21 and 23; the State must enforce the 1976 Act.',
    ],
    respondent: [
      'Implementation difficulties and disputes about who is a bonded labourer were raised by authorities.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-23',
      article: 'Article 23',
      title: 'Prohibition of traffic in human beings and forced labour',
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
      heading: 'Dignity under Article 21',
      explanation:
        'The Court held that the right to life includes the right to live with human dignity and the bare necessities of life such as adequate nutrition, clothing, and shelter.',
    },
    {
      heading: 'State duty to abolish bondage',
      explanation:
        'Authorities were directed to identify, release, and rehabilitate bonded labourers; non-implementation of the 1976 Act was treated as a constitutional failure.',
    },
  ],
  decision:
    'Detailed directions were issued. The case is a landmark on bonded labour, socio-economic rights, and epistolary PIL jurisdiction.',
  holding:
    'Bonded labour violates Articles 21 and 23; the State must identify, release, and rehabilitate bonded labourers.',
  ratioDecidendi:
    'Forced labour and bondage are incompatible with the right to live with dignity under Article 21 and the prohibition in Article 23; the State has affirmative duties of enforcement and rehabilitation.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied (expanded Article 21)',
      judgmentId: 'maneka-gandhi-1978',
    },
  ],
  examPoints: [
    'Bonded labour + Articles 21 and 23.',
    'Right to live with human dignity.',
    'PIL / epistolary jurisdiction example.',
    'Directions for identification and rehabilitation.',
  ],
  mcqs: [
    {
      id: 'bandhua-mcq-1',
      question: 'Bandhua Mukti Morcha is primarily associated with:',
      options: [
        'Collegium appointments',
        'Abolition and rehabilitation of bonded labour under Articles 21 and 23',
        'Internet shutdowns',
        'Anti-defection',
      ],
      correctIndex: 1,
      explanation:
        'The Court issued directions to abolish bonded labour and protect the right to live with dignity.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1984) 3 SCC 161',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const francisCoralie: Judgment = {
  id: 'francis-coralie-mullin-1981',
  caseName: 'Francis Coralie Mullin v. Administrator, Union Territory of Delhi',
  shortName: 'Francis Coralie Mullin',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1981,
  citation: '(1981) 1 SCC 608',
  bench: '2-Judge Bench',
  judges: ['P.N. Bhagwati, J.', 'S. Murtaza Fazal Ali, J.'],
  subject: 'Constitution',
  topics: ['Article 21', 'Dignity', 'Undertrial', 'Interview Rights'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Dignity', 'Prisoners'],
  summary:
    'The Court held that the right to life under Article 21 includes the right to live with human dignity and not mere animal existence, and protected a detenu’s right to meet family and lawyers subject to reasonable security regulations.',
  facts: [
    'A British national detained under COFEPOSA challenged restrictions on interviews with her lawyer and family.',
  ],
  issues: [
    'What is the content of the right to life under Article 21 for a detenu?',
    'Whether interview rights with counsel and family are protected.',
  ],
  arguments: {
    appellant: [
      'Denial of interviews with counsel and family violates personal liberty and dignity under Article 21.',
    ],
    respondent: [
      'Security and preventive-detention discipline justify restrictions on interviews.',
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
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Life with dignity',
      explanation:
        'Bhagwati J. held that the right to life includes the right to live with human dignity and all that goes with it — the bare necessities of life and expression beyond animal existence.',
    },
    {
      heading: 'Interviews as part of liberty',
      explanation:
        'Reasonable opportunity to meet family and legal advisors was held to be part of personal liberty, subject to security-based regulation.',
    },
  ],
  decision:
    'The Court vindicated interview rights within reasonable limits and delivered a classic statement of dignity under Article 21.',
  holding:
    'Article 21 protects life with human dignity; detenus have a right to reasonable interviews with family and counsel.',
  ratioDecidendi:
    'The right to life is not confined to physical existence; it includes dignity and basic conditions of a humane life, enforceable even by persons under detention.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'Bandhua Mukti Morcha v. Union of India',
      citation: '(1984) 3 SCC 161',
      relationship: 'Related (dignity)',
      judgmentId: 'bandhua-mukti-morcha-1984',
    },
  ],
  examPoints: [
    'Classic dignity formulation under Article 21.',
    'Life ≠ animal existence.',
    'Detenu interview rights with family/counsel.',
    'Often quoted with Maneka and Bandhua Mukti Morcha.',
  ],
  mcqs: [
    {
      id: 'francis-mcq-1',
      question: 'Francis Coralie Mullin is best known for holding that Article 21 includes:',
      options: [
        'Only freedom from executive detention without any other content',
        'The right to live with human dignity, not mere animal existence',
        'A right to free foreign travel without passport',
        'Abolition of all preventive detention',
      ],
      correctIndex: 1,
      explanation:
        'Bhagwati J. held that the right to life includes the right to live with human dignity and not mere animal existence.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1981) 1 SCC 608',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const prakashSingh: Judgment = {
  id: 'prakash-singh-2006',
  caseName: 'Prakash Singh v. Union of India',
  shortName: 'Prakash Singh',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2006,
  citation: '(2006) 8 SCC 1',
  bench: '3-Judge Bench',
  judges: ['Y.K. Sabharwal, C.J.', 'C.K. Thakker, J.', 'P.K. Balasubramanyan, J.'],
  subject: 'Constitution',
  topics: ['Police Reforms', 'Rule of Law', 'Article 32', 'Federalism'],
  tags: ['AIBE', 'Judiciary', 'Police Reforms', 'Rule of Law', 'PIL'],
  summary:
    'The Court issued binding directions for police reforms in India, including fixed tenure for key police officers, separation of investigation from law-and-order duties where practicable, establishment of State Security Commissions, Police Establishment Boards, and Police Complaints Authorities, to insulate the police from arbitrary political interference.',
  facts: [
    'Petitions by retired police chiefs highlighted chronic political interference, lack of tenure stability, and weak accountability in State police forces.',
    'Despite Law Commission and National Police Commission reports, reforms had largely remained unimplemented.',
  ],
  issues: [
    'Whether the Court can issue structural directions for police reforms under Article 32.',
    'What minimum institutional safeguards are required for a professional, accountable police service.',
  ],
  arguments: {
    appellant: [
      'A politicised police force undermines the rule of law and citizens’ rights under Articles 14 and 21.',
    ],
    respondent: [
      'Police is a State subject; reforms should come through State legislation rather than judicial directions.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-32',
      article: 'Article 32',
      title: 'Remedies for enforcement of fundamental rights',
      subjectSlug: 'constitution',
      topicId: 'art-32-226',
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
      heading: 'Rule of law and police autonomy',
      explanation:
        'The Court held that functional autonomy with accountability is essential for the police to protect life and liberty; arbitrary transfers and political control undermine constitutional governance.',
    },
    {
      heading: 'Structural directions',
      explanation:
        'Pending comprehensive legislation, the Court issued mandatory guidelines creating institutional buffers such as State Security Commissions and fixed tenures for Directors General of Police.',
    },
  ],
  decision:
    'Seven major reform directions were issued binding on Union and States. Implementation remains uneven, but Prakash Singh is the central judicial authority on police reforms.',
  holding:
    'Constitutional courts may issue binding structural directions for police reforms to secure the rule of law and protect life and liberty under Article 21.',
  ratioDecidendi:
    'A police force subject to arbitrary political interference cannot adequately protect fundamental rights; institutional reforms with tenure security and accountability mechanisms are constitutionally warranted.',
  relatedCases: [
    {
      caseName: 'Vineet Narain v. Union of India',
      citation: '(1998) 1 SCC 226',
      relationship: 'Related (institutional independence)',
      judgmentId: 'vineet-narain-1998',
    },
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related (police accountability)',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Seven police-reform directions (SSC, PEB, Complaints Authority, tenure, etc.).',
    'Insulation from arbitrary political interference.',
    'Article 21 / rule of law foundation.',
    'High-yield polity + constitutional law crossover.',
  ],
  mcqs: [
    {
      id: 'prakash-singh-mcq-1',
      question: 'Prakash Singh is primarily associated with:',
      options: [
        'Bank nationalisation',
        'Judicial directions for structural police reforms in India',
        'Abolition of Article 356',
        'Mandatory death penalty',
      ],
      correctIndex: 1,
      explanation:
        'The Court issued binding directions for police reforms including fixed tenure and institutional accountability bodies.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2006) 8 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_8: Judgment[] = [
  anuradhaBhasin,
  puttaswamyAadhaar,
  rcCooper,
  epRoyappa,
  ajayHasia,
  akGopalan,
  unniKrishnan,
  bandhuaMukti,
  francisCoralie,
  prakashSingh,
]
