import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_22: Judgment[] = [
  {
    id: 'kailash-nath-associates-2015',
    caseName: 'Kailash Nath Associates v. Delhi Development Authority',
    shortName: 'Kailash Nath Associates',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2015,
    judgmentDate: '2015-01-09',
    citation: '(2015) 4 SCC 136',
    neutralCitation: 'AIR 2015 SC (SUPP) 780',
    bench: 'Two-Judge Bench',
    judges: ['Ranjan Gogoi', 'Rohinton Fali Nariman'],
    subject: 'Contract Law',
    topics: ['Section 74', 'earnest money', 'forfeiture', 'reasonable compensation'],
    tags: ['contract', 'section-74', 'earnest-money', 'forfeiture', 'damages'],
    summary: 'The Supreme Court explained when forfeiture of earnest money is controlled by Section 74 of the Indian Contract Act, 1872. Section 74 applies to stipulations by way of penalty, but compensation remains subject to the statutory requirement of reasonable compensation and the existence of legal injury. Where loss is capable of proof, the court must consider proof of loss; a contractual clause does not create an automatic right to retain money merely because it says so.',
    facts: [
      'Delhi Development Authority conducted a public auction for a commercial plot and Kailash Nath Associates emerged as the highest bidder.',
      'The appellant deposited earnest money and disputes arose concerning acceptance of the bid and completion of the transaction.',
      'DDA cancelled the allotment and sought to forfeit the earnest money under the auction terms.',
      'The plot was subsequently dealt with at a higher value, raising the question whether DDA had suffered compensable loss.'
    ],
    issues: [
      'Whether Section 74 applies to forfeiture of earnest money under auction conditions.',
      'Whether forfeiture can be made where there is no established breach causing legal injury.',
      'Whether a stipulated amount can be retained automatically without considering reasonable compensation and loss.'
    ],
    arguments: {
      appellant: [
        'The forfeiture clause could not operate independently of the requirements of Section 74.',
        'DDA had not established the legal injury or loss necessary to justify retention of the earnest money.'
      ],
      respondent: [
        'The auction terms expressly authorized forfeiture upon the relevant default.',
        'The earnest money was said to be liable to forfeiture under the contractual conditions.'
      ]
    },
    provisions: [
      {
        actId: 'indian-contract-act-1872',
        actName: 'Indian Contract Act, 1872',
        provisionId: 's-73',
        section: '73',
        title: 'Compensation for loss or damage caused by breach of contract'
      },
      {
        actId: 'indian-contract-act-1872',
        actName: 'Indian Contract Act, 1872',
        provisionId: 's-74',
        section: '74',
        title: 'Compensation for breach where penalty stipulated'
      }
    ],
    reasoning: [
      {
        heading: 'Section 74 and forfeiture',
        explanation: 'Section 74 governs stipulations by way of penalty, including contractual provisions for forfeiture where the statutory conditions are met. The stipulated amount operates as a ceiling for reasonable compensation rather than an automatic entitlement.'
      },
      {
        heading: 'Legal injury and breach',
        explanation: 'Compensation under Section 74 presupposes a breach attracting compensation. A clause cannot by itself create a right to retain money where the necessary legal injury is absent.'
      },
      {
        heading: 'Proof of loss',
        explanation: 'Where loss is capable of proof, evidence of actual loss is relevant and cannot simply be replaced by the contractual label attached to the deposit. The assessment remains one of reasonable compensation.'
      },
      {
        heading: 'Earnest money',
        explanation: 'The Court distinguished genuine earnest money from a penal amount and emphasized that forfeiture must still satisfy the governing contractual and statutory principles.'
      }
    ],
    decision: 'The Supreme Court held that the forfeiture had to be examined under the principles governing Section 74 and reasonable compensation, and the contractual clause did not make the forfeiture automatically enforceable.',
    holding: 'A forfeiture clause cannot operate as an automatic entitlement to the stipulated sum. Section 74 requires reasonable compensation for legally compensable breach, subject to the stipulated ceiling.',
    ratioDecidendi: 'Section 74 controls penal stipulations including relevant forfeiture clauses; a party cannot retain a stipulated amount merely because the contract authorizes forfeiture where the statutory requirements for compensable breach and reasonable compensation are not satisfied.',
    relatedCases: [
      {
        judgmentId: 'maula-bux-1969',
        caseName: 'Maula Bux v. Union of India',
        citation: '(1969) 2 SCC 554',
        relationship: 'Earlier Section 74 authority concerning penal forfeiture and reasonable compensation.'
      }
    ],
    examPoints: [
      'Section 74 does not make every stipulated sum automatically recoverable.',
      'Distinguish a genuine earnest-money deposit from a penal forfeiture clause.',
      'Reasonable compensation and legal injury remain central to Section 74 analysis.'
    ],
    mcqs: [
      {
        id: 'kailash-nath-associates-mcq-1',
        question: 'What principle best describes Kailash Nath Associates v. DDA?',
        options: [
          'Every forfeiture clause is automatically enforceable',
          'Section 74 permits automatic recovery of the entire stipulated sum',
          'Forfeiture remains subject to breach, legal injury and reasonable compensation under Section 74',
          'Section 74 applies only to criminal penalties'
        ],
        correctIndex: 2,
        explanation: 'The Court treated contractual forfeiture through the statutory discipline of Section 74 and reasonable compensation.'
      }
    ],
    source: {
      type: 'url',
      title: 'Kailash Nath Associates v. Delhi Development Authority — Supreme Court authority',
      sourceUrl: 'https://www.lawstories.in/cases/kailash-nath-associates-v-dda-2015',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'energy-watchdog-2017',
    caseName: 'Energy Watchdog v. Central Electricity Regulatory Commission',
    shortName: 'Energy Watchdog',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2017,
    judgmentDate: '2017-04-11',
    citation: '(2017) 14 SCC 80',
    neutralCitation: 'AIR 2017 SC 2131',
    bench: 'Two-Judge Bench',
    judges: ['R.F. Nariman', 'Pinaki Chandra Ghose'],
    subject: 'Contract Law',
    topics: ['Section 32', 'Section 56', 'force majeure', 'frustration', 'change in law'],
    tags: ['contract', 'force-majeure', 'frustration', 'section-32', 'section-56', 'electricity'],
    summary: 'The Supreme Court considered force majeure, frustration and change in law in long-term power purchase agreements. It distinguished contractual force majeure governed by Section 32 of the Indian Contract Act from statutory frustration under Section 56. Mere commercial hardship, increased cost or an unforeseen rise in fuel prices does not by itself frustrate a contract. Where the contract allocates the relevant risk, the contractual allocation governs.',
    facts: [
      'Power generating companies entered into long-term power purchase agreements for supply of electricity.',
      'Changes affecting the availability and price of imported coal increased the cost of generation.',
      'The generators sought relief on force majeure and change-in-law grounds, while regulatory authorities examined the contractual and statutory consequences.',
      'The Supreme Court considered whether the changed economic circumstances frustrated the contracts or triggered contractual relief.'
    ],
    issues: [
      'Whether the contractual force majeure provisions were attracted by the changed coal-price circumstances.',
      'Whether Section 56 frustration applies where the contract itself provides for force majeure consequences.',
      'Whether increased expense or commercial hardship is sufficient to discharge a contract.',
      'How change-in-law provisions in power purchase agreements should be applied.'
    ],
    arguments: {
      appellant: [
        'The unforeseen regulatory and fuel-market changes were said to constitute force majeure or otherwise frustrate contractual performance.',
        'The generators sought contractual and statutory relief from the resulting increased cost burden.'
      ],
      respondent: [
        'The contractual risk-allocation provisions did not cover the asserted circumstances in the manner claimed.',
        'Mere increase in cost or commercial difficulty did not make performance impossible or fundamentally different.'
      ]
    },
    provisions: [
      {
        actId: 'indian-contract-act-1872',
        actName: 'Indian Contract Act, 1872',
        provisionId: 's-32',
        section: '32',
        title: 'Enforcement of contracts contingent on an event happening'
      },
      {
        actId: 'indian-contract-act-1872',
        actName: 'Indian Contract Act, 1872',
        provisionId: 's-56',
        section: '56',
        title: 'Agreement to do impossible act'
      }
    ],
    reasoning: [
      {
        heading: 'Contractual force majeure',
        explanation: 'Where parties have expressly provided for force majeure, the event and its consequences are principally governed by the contractual allocation under Section 32. The court must first examine the language of the bargain.'
      },
      {
        heading: 'Frustration under Section 56',
        explanation: 'Section 56 operates where the supervening event falls outside the contractual allocation and makes performance impossible or radically different in the legal sense. It is not a general relief against a bad bargain.'
      },
      {
        heading: 'Commercial hardship',
        explanation: 'A rise in price or increased financial burden does not ordinarily amount to frustration. A contract is not discharged merely because performance has become more expensive or less profitable.'
      },
      {
        heading: 'Change in law',
        explanation: 'A contractual change-in-law clause must be applied according to its terms. Regulatory changes covered by the clause may have contractual consequences even though they do not independently frustrate the contract.'
      }
    ],
    decision: 'The Supreme Court rejected the contention that the relevant increase in coal cost, by itself, frustrated the power purchase agreements and applied the contractual framework governing force majeure and change in law.',
    holding: 'Contractual force majeure is governed by the parties’ agreed terms and Section 32, while Section 56 addresses supervening impossibility outside the contractual allocation. Mere commercial hardship or increased expense is insufficient to establish frustration.',
    ratioDecidendi: 'Where a contract contains a force majeure or change-in-law mechanism, the contractual allocation governs; Section 56 is not a doctrine for relieving parties from increased costs or commercial hardship alone.',
    relatedCases: [
      {
        judgmentId: 'kp-varghese-1981',
        caseName: 'K.P. Varghese v. Income Tax Officer',
        citation: '(1981) 4 SCC 173',
        relationship: 'Existing CodePackr landmark from a different statutory field; no substantive dependency.'
      }
    ],
    examPoints: [
      'Distinguish Section 32 contractual force majeure from Section 56 frustration.',
      'Commercial hardship and increased expense ordinarily do not constitute frustration.',
      'Always read the contractual risk-allocation clause before invoking Section 56.'
    ],
    mcqs: [
      {
        id: 'energy-watchdog-mcq-1',
        question: 'What is the key distinction drawn in Energy Watchdog?',
        options: [
          'Section 32 applies only to criminal contracts',
          'Section 32 concerns contractual force majeure while Section 56 concerns supervening impossibility outside the contract',
          'Section 56 automatically applies whenever prices increase',
          'Commercial hardship always discharges a contract'
        ],
        correctIndex: 1,
        explanation: 'The judgment distinguishes contractual force majeure under Section 32 from statutory frustration under Section 56.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Energy Watchdog v. Central Electricity Regulatory Commission',
      sourceUrl: 'https://indiankanoon.org/doc/29719380/',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'vidya-drolia-2020',
    caseName: 'Vidya Drolia v. Durga Trading Corporation',
    shortName: 'Vidya Drolia',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2020,
    judgmentDate: '2020-12-14',
    citation: '(2021) 2 SCC 1',
    neutralCitation: '2020 INSC 697',
    bench: 'Three-Judge Bench',
    judges: ['N.V. Ramana', 'Sanjiv Khanna', 'Krishna Murari'],
    subject: 'Arbitration Law',
    topics: ['arbitrability', 'Section 8', 'Section 11', 'non-arbitrability', 'landlord-tenant disputes'],
    tags: ['arbitration', 'arbitrability', 'section-8', 'section-11', 'non-arbitrability'],
    summary: 'Vidya Drolia clarified the doctrine of arbitrability and the limited judicial review at the referral stage under Sections 8 and 11 of the Arbitration and Conciliation Act, 1996. The Supreme Court articulated a fourfold test for non-arbitrability and held that the court should ordinarily undertake only a prima facie examination at the referral stage, leaving doubtful issues for the arbitral tribunal where appropriate.',
    facts: [
      'The dispute concerned a landlord-tenant relationship and the applicability of arbitration to disputes arising under the Transfer of Property Act.',
      'Earlier Supreme Court authority had treated certain landlord-tenant disputes as non-arbitrable, leading to a reference to a larger bench.',
      'The Court examined the relationship between Sections 8 and 11, party autonomy, public fora and the concept of rights in rem.'
    ],
    issues: [
      'When is a dispute legally non-arbitrable despite the existence of an arbitration agreement.',
      'What is the scope of judicial examination under Sections 8 and 11 at the referral stage.',
      'Whether landlord-tenant disputes governed by the Transfer of Property Act are necessarily non-arbitrable.',
      'How the rights-in-rem and rights-in-personam distinction operates in modern arbitration law.'
    ],
    arguments: {
      appellant: [
        'The landlord-tenant dispute was said to be capable of arbitration because the relevant tenancy law did not create an exclusive forum in the circumstances.',
        'The court was urged to apply the limited referral-stage review required by the Arbitration Act.'
      ],
      respondent: [
        'The dispute was argued to fall within a category traditionally reserved for public fora.',
        'Earlier jurisprudence was relied upon to contend that the statutory tenancy relationship was non-arbitrable.'
      ]
    },
    provisions: [
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-8',
        section: '8',
        title: 'Power to refer parties to arbitration where there is an arbitration agreement'
      },
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-11',
        section: '11',
        title: 'Appointment of arbitrators'
      }
    ],
    reasoning: [
      {
        heading: 'Fourfold test',
        explanation: 'The Court described non-arbitrability through four broad considerations: actions in rem, disputes affecting third-party or collective rights, matters entrusted to exclusive public fora by statute, and subject matters that are inherently unsuitable for private adjudication.'
      },
      {
        heading: 'Prima facie referral review',
        explanation: 'At the referral stage the court should ordinarily conduct a prima facie review of the arbitration agreement and arbitrability rather than conduct a full merits inquiry. Clearly non-arbitrable disputes may be withheld from arbitration.'
      },
      {
        heading: 'Rights in rem and rights in personam',
        explanation: 'The traditional distinction remains useful but is not mechanically determinative. The court must examine the statutory scheme and the nature of the relief and rights involved.'
      },
      {
        heading: 'Landlord-tenant disputes',
        explanation: 'Landlord-tenant disputes under the Transfer of Property Act are not categorically non-arbitrable merely because they arise from tenancy law; the nature of the dispute and applicable statutory framework must be considered.'
      }
    ],
    decision: 'The larger bench answered the reference by clarifying the principles governing arbitrability and referral-stage judicial review and remitted the particular proceedings in accordance with those principles.',
    holding: 'The referral court under Sections 8 and 11 generally performs a limited prima facie review, and non-arbitrability depends on the nature of the subject matter and statutory allocation of adjudicatory authority rather than a rigid formula.',
    ratioDecidendi: 'A dispute is non-arbitrable where it falls within recognized categories unsuitable for private adjudication; at the referral stage, courts should ordinarily undertake a prima facie examination and avoid an extensive merits inquiry.',
    relatedCases: [
      {
        judgmentId: 'booz-allen-2011',
        caseName: 'Booz-Allen & Hamilton Inc. v. SBI Home Finance Ltd.',
        citation: '(2011) 5 SCC 532',
        relationship: 'Foundational rights-in-rem and arbitrability framework developed further in Vidya Drolia.'
      },
      {
        judgmentId: 'ssangyong-engineering-2019',
        caseName: 'Ssangyong Engineering & Construction Co. Ltd. v. NHAI',
        citation: '(2019) 15 SCC 131',
        relationship: 'Existing arbitration landmark concerning the limited judicial role under the Arbitration Act.'
      }
    ],
    examPoints: [
      'Remember the fourfold framework for non-arbitrability.',
      'Referral-stage review under Sections 8 and 11 is ordinarily prima facie.',
      'Do not treat every landlord-tenant dispute as automatically non-arbitrable.'
    ],
    mcqs: [
      {
        id: 'vidya-drolia-mcq-1',
        question: 'What is the general standard of judicial review at the arbitration referral stage under Vidya Drolia?',
        options: [
          'A full trial on every factual issue',
          'A prima facie examination of validity and arbitrability',
          'Automatic refusal whenever a statute is involved',
          'A complete appellate review of the proposed arbitration'
        ],
        correctIndex: 1,
        explanation: 'Vidya Drolia emphasizes limited prima facie judicial review at the referral stage.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Vidya Drolia v. Durga Trading Corporation',
      sourceUrl: 'https://indiankanoon.org/doc/121987320/?type=print',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'booz-allen-2011',
    caseName: 'Booz-Allen & Hamilton Inc. v. SBI Home Finance Ltd.',
    shortName: 'Booz-Allen',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2011,
    judgmentDate: '2011-04-15',
    citation: '(2011) 5 SCC 532',
    neutralCitation: 'AIR 2011 SC 2507',
    bench: 'Two-Judge Bench',
    judges: ['R.V. Raveendran', 'J.M. Panchal'],
    subject: 'Arbitration Law',
    topics: ['arbitrability', 'rights in rem', 'Section 8', 'mortgage suits'],
    tags: ['arbitration', 'arbitrability', 'rights-in-rem', 'section-8', 'mortgage'],
    summary: 'Booz-Allen is a leading Supreme Court authority on the distinction between arbitrable disputes and matters reserved for adjudication by public fora. The Court explained that ordinary civil or commercial disputes are in principle arbitrable unless excluded expressly or by necessary implication, while proceedings involving rights in rem and certain statutory or public-law categories may fall outside private arbitration.',
    facts: [
      'SBI Home Finance instituted a mortgage suit concerning flats that secured loans.',
      'Booz-Allen relied on an arbitration clause in a related agreement and sought reference of the dispute to arbitration under Section 8.',
      'The dispute required the Court to determine whether enforcement of a mortgage by sale could be adjudicated by an arbitral tribunal.'
    ],
    issues: [
      'Whether a mortgage enforcement suit is arbitrable under the Arbitration and Conciliation Act.',
      'How rights in rem differ from rights in personam for arbitrability purposes.',
      'What categories of disputes are excluded from arbitration expressly or by necessary implication.',
      'What distinction exists between referral under Section 8 and appointment proceedings under Section 11.'
    ],
    arguments: {
      appellant: [
        'The arbitration agreement was relied upon as requiring reference of the contractual dispute to arbitration.',
        'The dispute was argued to arise from contractual obligations capable of private adjudication.'
      ],
      respondent: [
        'Enforcement of a mortgage by sale was said to involve rights in rem and therefore to belong to a public judicial forum.',
        'The mortgage suit could not be divided into arbitrable and non-arbitrable components where the principal relief was reserved to the court.'
      ]
    },
    provisions: [
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-8',
        section: '8',
        title: 'Power to refer parties to arbitration where there is an arbitration agreement'
      },
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-11',
        section: '11',
        title: 'Appointment of arbitrators'
      }
    ],
    reasoning: [
      {
        heading: 'General rule of arbitrability',
        explanation: 'Civil and commercial disputes capable of determination by a civil court are generally capable of arbitration unless arbitration is excluded expressly or by necessary implication.'
      },
      {
        heading: 'Rights in rem',
        explanation: 'Arbitral tribunals are private forums and ordinarily cannot determine rights in rem that bind persons beyond the arbitration agreement. Such matters may be reserved for public courts or tribunals.'
      },
      {
        heading: 'Mortgage enforcement',
        explanation: 'A mortgage suit seeking sale or foreclosure concerns a right in rem and was treated as a matter for the public judicial forum rather than an arbitral tribunal.'
      },
      {
        heading: 'Sections 8 and 11',
        explanation: 'The Court distinguished the scope of inquiry under Section 8 from the narrower appointment-stage inquiry under Section 11, particularly concerning arbitrability.'
      }
    ],
    decision: 'The Supreme Court held that the mortgage enforcement proceedings before the civil court were not referable to arbitration merely because an arbitration clause existed in a related agreement.',
    holding: 'Mortgage enforcement by sale or foreclosure is a rights-in-rem dispute reserved to the public judicial forum, while ordinary contractual disputes are generally arbitrable unless excluded.',
    ratioDecidendi: 'Arbitrability depends on whether the subject matter is suitable for private adjudication; proceedings concerning rights in rem and categories reserved to public fora may not be referred to arbitration.',
    relatedCases: [
      {
        judgmentId: 'vidya-drolia-2020',
        caseName: 'Vidya Drolia v. Durga Trading Corporation',
        citation: '(2021) 2 SCC 1',
        relationship: 'Later three-Judge authority developing and refining the arbitrability framework.'
      }
    ],
    examPoints: [
      'Use Booz-Allen for the classic rights-in-rem versus rights-in-personam framework.',
      'Mortgage enforcement by sale or foreclosure was treated as non-arbitrable.',
      'Distinguish the scope of Section 8 referral from Section 11 appointment proceedings.'
    ],
    mcqs: [
      {
        id: 'booz-allen-mcq-1',
        question: 'Why was the mortgage enforcement dispute treated as non-arbitrable in Booz-Allen?',
        options: [
          'Because all contract disputes are non-arbitrable',
          'Because mortgage enforcement concerns a right in rem reserved to the public forum',
          'Because arbitration clauses are never enforceable in India',
          'Because Section 8 applies only to criminal disputes'
        ],
        correctIndex: 1,
        explanation: 'The Court treated mortgage enforcement as a rights-in-rem proceeding unsuitable for private arbitration.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Booz-Allen & Hamilton Inc. v. SBI Home Finance Ltd.',
      sourceUrl: 'https://indiankanoon.org/doc/188958994/',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'spring-meadows-hospital-1998',
    caseName: 'Spring Meadows Hospital v. Harjol Ahluwalia',
    shortName: 'Spring Meadows Hospital',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1998,
    judgmentDate: '1998-03-25',
    citation: '(1998) 4 SCC 39',
    neutralCitation: 'AIR 1998 SC 1801',
    bench: 'Two-Judge Bench',
    judges: ['S. Saghir Ahmad', 'G.B. Pattanaik'],
    subject: 'Consumer Protection Law',
    topics: ['medical negligence', 'consumer', 'beneficiary', 'hospital liability'],
    tags: ['consumer', 'medical-negligence', 'hospital', 'beneficiary', 'compensation'],
    summary: 'The Supreme Court held that both a minor patient and the parents who hired hospital services could fall within the consumer definition under the Consumer Protection Act, 1986. The decision recognized the beneficiary’s consumer standing and upheld compensation arising from medical negligence, including compensation awarded to the parents for the consequences of the child’s injury.',
    facts: [
      'A minor child was admitted to a hospital for treatment and was treated for a serious illness.',
      'The complaint alleged medical negligence in the treatment and resulting injury to the child.',
      'The parents had hired and paid for the medical services and pursued the consumer complaint on behalf of the child.',
      'The consumer forum awarded compensation, including an amount for the parents.'
    ],
    issues: [
      'Whether a beneficiary of medical services can be a consumer even where the parent or another person hired the service.',
      'Whether both the child patient and parents can claim consumer remedies in the circumstances.',
      'Whether compensation for the parents’ mental agony and consequences of the child’s injury can be awarded.'
    ],
    arguments: {
      appellant: [
        'The hospital disputed deficiency and negligence in service.',
        'It was argued that the services were not availed by the complainants in the manner required for consumer status.'
      ],
      respondent: [
        'The child and parents were within the statutory consumer definition because the parents had hired the medical service for the child’s benefit.',
        'Medical negligence and resulting injury justified compensation under the Consumer Protection Act.'
      ]
    },
    provisions: [
      {
        actId: 'consumer-protection-act-1986',
        actName: 'Consumer Protection Act, 1986',
        provisionId: 's-2-1-d',
        section: '2(1)(d)',
        title: 'Definition of consumer'
      },
      {
        actId: 'consumer-protection-act-1986',
        actName: 'Consumer Protection Act, 1986',
        provisionId: 's-14',
        section: '14',
        title: 'Finding of the District Forum'
      }
    ],
    reasoning: [
      {
        heading: 'Beneficiary consumer',
        explanation: 'The statutory definition of consumer was interpreted to include the beneficiary of services hired by another person, where the beneficiary receives the service for which consideration has been paid.'
      },
      {
        heading: 'Child and parents',
        explanation: 'The minor patient was the beneficiary of the medical service and the parents were the persons who hired it. The consumer remedy could therefore operate in relation to both within the statutory framework.'
      },
      {
        heading: 'Medical negligence',
        explanation: 'Deficiency in medical service may give rise to compensation under consumer law where the required elements are established. The Court upheld compensation in the circumstances of the case.'
      }
    ],
    decision: 'The Supreme Court upheld the consumer-law approach recognizing the child and parents within the statutory framework and sustained the compensation awarded in the circumstances.',
    holding: 'A beneficiary of a service can qualify as a consumer even when another person hires the service. In medical-negligence cases, eligible patients and beneficiaries may obtain statutory consumer remedies when deficiency is established.',
    ratioDecidendi: 'The consumer definition extends to beneficiaries of services hired for their benefit; a minor patient and the parent who hired the medical service may both fall within the statutory consumer framework in the circumstances of the case.',
    relatedCases: [
      {
        judgmentId: 'ima-vp-shantha-1995',
        caseName: 'Indian Medical Association v. V.P. Shantha',
        citation: '(1995) 6 SCC 651',
        relationship: 'Earlier consumer-law authority on medical services and the consumer remedy.'
      },
      {
        judgmentId: 'national-seeds-corporation-2012',
        caseName: 'National Seeds Corporation Ltd. v. M. Madhusudhan Reddy',
        citation: '(2012) 2 SCC 506',
        relationship: 'Later existing CodePackr landmark on the Consumer Protection Act as an additional remedy.'
      }
    ],
    examPoints: [
      'A beneficiary can fall within the consumer definition where services are hired for the beneficiary.',
      'Spring Meadows is a leading consumer-law medical-negligence authority.',
      'Distinguish consumer standing from the separate proof required to establish medical negligence and deficiency.'
    ],
    mcqs: [
      {
        id: 'spring-meadows-hospital-mcq-1',
        question: 'Who may qualify as a consumer under the principle in Spring Meadows Hospital?',
        options: [
          'Only the person who physically pays every bill',
          'Only the hospital employee',
          'A beneficiary of services hired by another person can also qualify',
          'No minor can ever qualify as a consumer'
        ],
        correctIndex: 2,
        explanation: 'The Court recognized the beneficiary of hired services within the consumer definition.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Spring Meadows Hospital v. Harjol Ahluwalia',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=spring%20meadows%20hospital%20doctypes%3A%20judgments%20year%3A1998',
      verified: true
    },
    status: 'reviewed'
  }
]
