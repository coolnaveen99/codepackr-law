import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_25: Judgment[] = [
  {
    id: 'national-insurance-swaran-singh-2004',
    caseName: 'National Insurance Co. Ltd. v. Swaran Singh',
    shortName: 'Swaran Singh',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2004,
    judgmentDate: '2004-01-05',
    citation: '(2004) 3 SCC 297',
    neutralCitation: '2004 INSC 4',
    bench: 'Three-Judge Bench',
    judges: ['V.N. Khare, C.J.', 'D.M. Dharmadhikari, J.', 'S.B. Sinha, J.'],
    subject: 'Motor Vehicle Insurance Law',
    topics: ['Third-party insurance', 'Driving licence breach', 'Insurer defences', 'Motor Vehicles Act'],
    tags: ['AIBE', 'Judiciary', 'Motor Vehicles Act', 'Insurance', 'Third Party Claims'],
    summary:
      'The Supreme Court clarified the insurer’s statutory defence under the Motor Vehicles Act where the driver lacked a valid licence. The insurer must establish the relevant policy breach by the insured; a breach does not automatically eliminate the insurer’s statutory obligation toward third-party victims.',
    facts: [
      'The appeals concerned third-party motor accident claims in which insurers relied on policy conditions concerning the driver’s licence.',
      'The Court considered the interaction between the insurer’s contractual defences and the statutory protection afforded to third-party claimants.'
    ],
    issues: [
      'What must an insurer prove to invoke the statutory defence concerning an invalid or absent driving licence?',
      'Does every breach of a policy condition automatically absolve the insurer from liability to third parties?',
      'What is the relationship between insurer liability to third parties and the insurer’s right to recover from the insured?'
    ],
    arguments: {
      appellant: [
        'The insurers argued that breach of the driving-licence condition entitled them to avoid liability under Section 149(2) of the Motor Vehicles Act, 1988.'
      ],
      respondent: [
        'The claimants relied on the social-welfare character of compulsory third-party insurance and sought protection notwithstanding disputes between insurer and insured.'
      ]
    },
    provisions: [
      {
        actId: 'motor-vehicles-act-1988',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 's-149',
        section: '149',
        title: 'Settlement by insurance company of claims against persons insured in respect of third-party risks'
      },
      {
        actId: 'motor-vehicles-act-1988',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 's-165',
        section: '165',
        title: 'Claims Tribunals'
      },
      {
        actId: 'motor-vehicles-act-1988',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 's-168',
        section: '168',
        title: 'Award of the Claims Tribunal'
      }
    ],
    reasoning: [
      {
        heading: 'Insurer bears the burden on the statutory defence',
        explanation:
          'A plea based on a policy-condition breach requires proof of the breach contemplated by Section 149(2); the insurer cannot succeed merely by pointing to a licence defect without establishing the legally relevant breach by the insured.'
      },
      {
        heading: 'Social-welfare character of third-party insurance',
        explanation:
          'The statutory scheme is designed to protect third-party victims. Contractual disputes between insurer and insured therefore cannot be treated as automatically extinguishing the victim’s statutory protection.'
      },
      {
        heading: 'Recovery after payment',
        explanation:
          'Where the statutory conditions for avoiding indemnification are established, the Court recognised the distinction between satisfying the third-party award and the insurer’s right, in an appropriate case, to recover the amount from the insured.'
      }
    ],
    decision:
      'The Court clarified the principles governing insurer defences under Section 149 and the consequences of proved policy breaches, preserving the distinction between third-party liability and inter se recovery rights.',
    holding:
      'The insurer must establish the legally relevant breach of the policy condition; mere proof of a licence defect is not, by itself, sufficient to defeat the statutory protection afforded to third-party claimants.',
    ratioDecidendi:
      'Under Section 149 of the Motor Vehicles Act, the insurer’s statutory defence must be proved in accordance with the provision. A third-party claimant’s entitlement is not defeated merely because the insurer establishes a policy-condition issue without proving the required breach by the insured.',
    examPoints: [
      'Distinguish contractual liability between insurer and insured from statutory liability toward third parties.',
      'Section 149(2) is a statutory defence provision and the insurer must prove its applicability.',
      'The decision is a leading authority on driving-licence breaches and third-party motor insurance.'
    ],
    mcqs: [
      {
        id: 'national-insurance-swaran-singh-2004-mcq-1',
        question: 'What central principle did Swaran Singh clarify regarding an insurer relying on a driving-licence condition?',
        options: [
          'Any licence defect automatically absolves the insurer',
          'The insurer must establish the legally relevant breach required by Section 149',
          'Third-party insurance is purely contractual',
          'Only the driver can be sued for compensation'
        ],
        correctIndex: 1,
        explanation:
          'The Court required the insurer to establish the breach contemplated by the statutory defence rather than treating every licence defect as automatic exoneration.'
      }
    ],
    source: {
      type: 'url',
      title: 'Supreme Court of India decision — Swaran Singh',
      sourceUrl: 'https://www.legalstreet.in/ratio/case/2004-insc-4/',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'united-india-insurance-lehru-2003',
    caseName: 'United India Insurance Co. Ltd. v. Lehru',
    shortName: 'Lehru',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2003,
    judgmentDate: '2003-02-28',
    citation: '(2003) 3 SCC 338',
    neutralCitation: '2003 INSC 133',
    bench: 'Two-Judge Bench',
    judges: ['S.N. Variava, J.', 'B.N. Agrawal, J.'],
    subject: 'Motor Vehicle Insurance Law',
    topics: ['Driving licence', 'Third-party insurance', 'Insurer liability', 'Motor Vehicles Act'],
    tags: ['AIBE', 'Judiciary', 'Insurance', 'Driving Licence', 'Third Party Claims'],
    summary:
      'The Supreme Court held that an insurer cannot avoid third-party liability merely by showing that the driver’s licence was fake or invalid. The insurer must establish a breach attributable to the insured, including the required element of knowledge or failure to exercise reasonable care in the circumstances.',
    facts: [
      'The insurer sought to avoid liability after an accident on the ground that the vehicle driver held a fake licence.',
      'The Court examined whether the owner had taken reasonable steps to satisfy himself that the driver was duly licensed and whether the insurer had established a policy breach by the insured.'
    ],
    issues: [
      'Can an insurer avoid third-party liability merely because the driver’s licence was fake?',
      'What must be proved against the insured before the insurer can rely on the licence condition?'
    ],
    arguments: {
      appellant: [
        'The insurer argued that the fake licence constituted a breach of the policy condition concerning the driver’s licence.'
      ],
      respondent: [
        'The claimants and insured relied on the absence of proof that the owner knowingly or wilfully permitted an unlicensed driver to drive.'
      ]
    },
    provisions: [
      {
        actId: 'motor-vehicles-act-1988',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 's-149-2-a-ii',
        section: '149(2)(a)(ii)',
        title: 'Statutory defence relating to persons duly licensed'
      },
      {
        actId: 'motor-vehicles-act-1988',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 's-149-7',
        section: '149(7)',
        title: 'Effect of the insurer’s statutory position'
      }
    ],
    reasoning: [
      {
        heading: 'Licence defect is not automatically a wilful breach',
        explanation:
          'The Court distinguished the existence of a fake or invalid licence from a breach by the insured. The insurer must show that the insured failed in the legally relevant duty concerning the driver’s licence.'
      },
      {
        heading: 'Reasonable care by the owner',
        explanation:
          'Where an owner has checked a licence that appears genuine and the driver appears competent, the mere later discovery that the licence was fake does not by itself establish the required breach by the insured.'
      }
    ],
    decision:
      'The insurer could not avoid the third-party liability merely because the driver’s licence was ultimately found to be fake; the appeal was dismissed.',
    holding:
      'The insurer must establish a breach by the insured; a fake licence, without proof of the insured’s relevant breach, does not by itself absolve the insurer from third-party liability.',
    ratioDecidendi:
      'For the statutory defence under Section 149(2)(a)(ii), the insurer must establish the required breach by the insured. An owner who has taken reasonable care to verify a licence that appears genuine is not automatically treated as having breached the policy merely because the licence later proves fake.',
    examPoints: [
      'Lehru is frequently read with Skandia Insurance and Swaran Singh.',
      'Focus on breach by the insured, not merely the driver’s licence status.',
      'The third-party character of compulsory motor insurance is central to the analysis.'
    ],
    mcqs: [
      {
        id: 'united-india-insurance-lehru-2003-mcq-1',
        question: 'According to Lehru, what is insufficient by itself to absolve an insurer from third-party liability?',
        options: [
          'Proof that the vehicle was insured',
          'Proof that the driver’s licence was fake',
          'Proof of an accident',
          'Proof of third-party injury'
        ],
        correctIndex: 1,
        explanation:
          'The Court held that the fake licence alone does not establish the legally relevant breach by the insured.'
      }
    ],
    source: {
      type: 'url',
      title: 'United India Insurance Co. Ltd. v. Lehru — Indian Kanoon search',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=lehru%20doctypes%3Asupremecourt',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'sohan-lal-passi-1996',
    caseName: 'Sohan Lal Passi v. P. Sesh Reddy',
    shortName: 'Sohan Lal Passi',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1996,
    judgmentDate: '1996-07-17',
    citation: '(1996) 5 SCC 21',
    neutralCitation: '1996 INSC 750',
    bench: 'Three-Judge Bench',
    judges: ['N.P. Singh, J.', 'Faizan Uddin, J.', 'S. Saghir Ahmad, J.'],
    subject: 'Motor Vehicle Insurance Law',
    topics: ['Vicarious liability', 'Driving licence breach', 'Third-party insurance', 'Motor Vehicles Act'],
    tags: ['AIBE', 'Judiciary', 'Insurance', 'Vicarious Liability', 'Third Party Claims'],
    summary:
      'The Supreme Court applied the protective approach to third-party motor insurance and held that the insurer could not escape liability merely because an unlicensed person drove the vehicle where the insured had not wilfully breached the licence condition. The case reinforces the distinction between the insured’s breach and the driver’s act.',
    facts: [
      'A fatal accident occurred when a vehicle was driven by a person without a valid licence in circumstances connected with the vehicle’s employment.',
      'The insurer relied on the statutory policy-condition defence to resist the compensation claim.'
    ],
    issues: [
      'Whether the insurer could avoid liability merely because the vehicle was driven by an unlicensed person.',
      'Whether the insured had committed the relevant breach necessary to invoke the insurer’s statutory defence.'
    ],
    arguments: {
      appellant: [
        'The insurer relied on the licence exclusion and argued that the policy condition had been breached.'
      ],
      respondent: [
        'The claimants contended that the accident arose in the course of authorised employment and that the insurer could not defeat the third-party claim without proof of the insured’s relevant breach.'
      ]
    },
    provisions: [
      {
        actId: 'motor-vehicles-act-1939',
        actName: 'Motor Vehicles Act, 1939',
        provisionId: 's-96-2-b-ii',
        section: '96(2)(b)(ii)',
        title: 'Statutory insurer defence concerning persons not duly licensed'
      }
    ],
    reasoning: [
      {
        heading: 'Protective construction of the insurer defence',
        explanation:
          'The Court declined to interpret the statutory defence in a purely technical manner. The focus was on whether the insured had committed the breach contemplated by the provision.'
      },
      {
        heading: 'Authorised use and vicarious liability',
        explanation:
          'The Court treated the relevant driving as sufficiently connected with the authorised use and employment of the vehicle to preserve the statutory protection available to the third-party claimants.'
      }
    ],
    decision:
      'The appeals were allowed and the insurer was held jointly and severally liable with the owner for the compensation payable to the claimants.',
    holding:
      'An insurer cannot rely mechanically on a licence exclusion; the relevant breach by the insured must be established before the statutory defence can defeat third-party liability.',
    ratioDecidendi:
      'The insurer’s statutory defence must be construed in light of the third-party compensation scheme, and the insurer cannot escape liability merely from the fact that an unlicensed person was driving unless the legally relevant breach by the insured is established.',
    examPoints: [
      'Read Sohan Lal Passi with Skandia Insurance, Lehru and Swaran Singh.',
      'Distinguish the driver’s misconduct from a breach by the insured.',
      'Useful for questions on vicarious liability and third-party insurance.'
    ],
    mcqs: [
      {
        id: 'sohan-lal-passi-1996-mcq-1',
        question: 'What did Sohan Lal Passi emphasise in applying the insurer’s licence defence?',
        options: [
          'A purely technical reading of the exclusion',
          'The need to establish the relevant breach by the insured',
          'Automatic exoneration whenever a driver lacks a licence',
          'That third-party claims are outside the insurance policy'
        ],
        correctIndex: 1,
        explanation:
          'The Court emphasised that the statutory defence operates against the insured and cannot be applied mechanically without establishing the relevant breach.'
      }
    ],
    source: {
      type: 'url',
      title: 'Sohan Lal Passi v. P. Sesh Reddy — Supreme Court case record',
      sourceUrl: 'https://www.legaldeskai.in/case-law/in/sc/judgment/sohan-lal-passi-versus-p-sesh-reddy-and-others-1996-s-1996-3-647-662',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'imperia-structures-anil-patni-2020',
    caseName: 'M/s. Imperia Structures Ltd. v. Anil Patni',
    shortName: 'Imperia Structures',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2020,
    judgmentDate: '2020-11-02',
    citation: '(2020) 10 SCC 783',
    neutralCitation: '2020 INSC 625',
    bench: 'Two-Judge Bench',
    judges: ['Uday Umesh Lalit, J.', 'Vineet Saran, J.'],
    subject: 'Consumer Law',
    topics: ['Consumer remedies', 'RERA', 'Real estate', 'Concurrent remedies'],
    tags: ['AIBE', 'Judiciary', 'Consumer Protection', 'RERA', 'Real Estate'],
    summary:
      'The Supreme Court held that the remedies under the Consumer Protection Act are additional remedies and that the RERA Act does not bar a consumer who falls within the statutory definition from approaching consumer fora. The decision addressed the coexistence of consumer remedies with the real-estate regulatory framework.',
    facts: [
      'Homebuyers approached consumer fora seeking relief concerning delay and other deficiencies in real-estate projects.',
      'The developer argued that the enactment of the Real Estate (Regulation and Development) Act, 2016 displaced or barred the consumer remedy.'
    ],
    issues: [
      'Whether the RERA Act bars a homebuyer who qualifies as a consumer from invoking the Consumer Protection Act.',
      'Whether the remedies under the two enactments can operate concurrently.'
    ],
    arguments: {
      appellant: [
        'The developer argued that RERA provided a specialised statutory mechanism and therefore consumer proceedings should not be entertained.'
      ],
      respondent: [
        'The homebuyers relied on the additional-remedy character of consumer law and sought to preserve the jurisdiction of consumer fora.'
      ]
    },
    provisions: [
      {
        actId: 'consumer-protection-act-1986',
        actName: 'Consumer Protection Act, 1986',
        provisionId: 's-2-1-d',
        section: '2(1)(d)',
        title: 'Consumer'
      },
      {
        actId: 'rera-2016',
        actName: 'Real Estate (Regulation and Development) Act, 2016',
        provisionId: 's-18',
        section: '18',
        title: 'Return of amount and compensation'
      }
    ],
    reasoning: [
      {
        heading: 'Consumer remedy as an additional remedy',
        explanation:
          'The Court reaffirmed the established principle that consumer remedies can operate in addition to remedies under other statutes unless the later legislation clearly excludes the consumer jurisdiction.'
      },
      {
        heading: 'RERA does not create an exclusive consumer-remedy bar',
        explanation:
          'The Court compared the statutory schemes and concluded that RERA did not contain a provision making the remedies under the Consumer Protection Act unavailable to a qualifying consumer.'
      }
    ],
    decision:
      'The appeals were dismissed and the Court upheld the maintainability of consumer proceedings in the circumstances considered.',
    holding:
      'A homebuyer who qualifies as a consumer may invoke the Consumer Protection Act notwithstanding the availability of remedies under RERA; the statutory remedies can coexist.',
    ratioDecidendi:
      'The RERA Act does not impliedly bar the consumer jurisdiction where the complainant satisfies the Consumer Protection Act requirements. Consumer remedies are additional unless the governing statute clearly excludes them.',
    examPoints: [
      'Imperia Structures is a leading authority on the interaction between RERA and consumer jurisdiction.',
      'Distinguish statutory remedies from a rule of exclusive jurisdiction.',
      'Section 18 RERA expressly contemplates relief without prejudice to other remedies.'
    ],
    mcqs: [
      {
        id: 'imperia-structures-anil-patni-2020-mcq-1',
        question: 'What did Imperia Structures hold about RERA and consumer remedies?',
        options: [
          'RERA completely abolished consumer jurisdiction',
          'Consumer remedies can operate additionally where the complainant qualifies as a consumer',
          'Only civil courts can hear homebuyer disputes',
          'RERA applies only to criminal proceedings'
        ],
        correctIndex: 1,
        explanation:
          'The Court held that RERA does not bar a qualifying consumer from invoking the Consumer Protection Act.'
      }
    ],
    source: {
      type: 'url',
      title: 'Imperia Structures Ltd. v. Anil Patni — Indian Kanoon',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=Imperia%20Structures%20Ltd%20v%20Anil%20Patni%20doctypes%3Asupremecourt',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'fortune-infrastructure-trevor-dlima-2018',
    caseName: 'Fortune Infrastructure (Now Known as Hicon Infrastructure) v. Trevor D’Lima',
    shortName: 'Fortune Infrastructure',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2018,
    judgmentDate: '2018-03-12',
    citation: '(2018) 5 SCC 442',
    neutralCitation: '2018 INSC 233',
    bench: 'Two-Judge Bench',
    judges: ['N.V. Ramana, J.', 'S. Abdul Nazeer, J.'],
    subject: 'Consumer Law',
    topics: ['Real estate', 'Delay in possession', 'Refund', 'Deficiency in service'],
    tags: ['AIBE', 'Judiciary', 'Consumer Protection', 'Real Estate', 'Housing'],
    summary:
      'The Supreme Court held that a residential purchaser cannot be compelled to wait indefinitely for possession. Where the developer fails to deliver possession within the promised period and the circumstances justify termination, the consumer may seek refund with appropriate compensation.',
    facts: [
      'Homebuyers had paid substantial amounts toward residential flats in a redevelopment project.',
      'Possession was not delivered within the promised period, leading the purchasers to seek refund and compensation through consumer proceedings.'
    ],
    issues: [
      'Whether a flat purchaser can be required to wait indefinitely for possession after substantial delay by the developer.',
      'Whether the purchaser can terminate the transaction and seek refund with compensation.'
    ],
    arguments: {
      appellant: [
        'The developer challenged the consumer relief and disputed the basis for refund and compensation.'
      ],
      respondent: [
        'The purchasers argued that prolonged failure to provide possession constituted deficiency in service and justified refund.'
      ]
    },
    provisions: [
      {
        actId: 'consumer-protection-act-1986',
        actName: 'Consumer Protection Act, 1986',
        provisionId: 's-14',
        section: '14',
        title: 'Reliefs available to consumer'
      },
      {
        actId: 'indian-contract-act-1872',
        actName: 'Indian Contract Act, 1872',
        provisionId: 's-73',
        section: '73',
        title: 'Compensation for loss or damage caused by breach of contract'
      }
    ],
    reasoning: [
      {
        heading: 'Indefinite delay is not acceptable to a homebuyer',
        explanation:
          'The Court recognised that a purchaser who has paid for a home cannot ordinarily be required to wait indefinitely for the developer to perform the promised obligation.'
      },
      {
        heading: 'Refund as an appropriate consumer remedy',
        explanation:
          'Where the delay and surrounding circumstances establish deficiency in service, refund of the amounts paid with appropriate compensation may be ordered rather than compelling the purchaser to accept delayed possession.'
      }
    ],
    decision:
      'The appeals were allowed in part to the extent indicated by the Court, while the consumer purchasers were recognised as entitled to appropriate relief arising from the prolonged failure to provide possession.',
    holding:
      'A consumer purchaser is not required to wait indefinitely for possession; prolonged failure to deliver can justify termination, refund and appropriate compensation.',
    ratioDecidendi:
      'Where a developer fails to deliver possession within the promised period and the delay becomes inordinate, consumer law permits the purchaser to seek refund and appropriate compensation rather than being compelled to accept possession after an indefinite wait.',
    examPoints: [
      'Fortune Infrastructure is a leading delay-in-possession consumer case.',
      'The principle was expressly relied on in Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan.',
      'Distinguish refund for deficiency in service from damages governed solely by ordinary contract principles.'
    ],
    mcqs: [
      {
        id: 'fortune-infrastructure-trevor-dlima-2018-mcq-1',
        question: 'What consumer-law principle is associated with Fortune Infrastructure?',
        options: [
          'A purchaser must always accept delayed possession',
          'A purchaser may seek appropriate refund where possession is delayed indefinitely',
          'Consumer fora cannot award monetary relief',
          'Real-estate developers are outside consumer law'
        ],
        correctIndex: 1,
        explanation:
          'The Court held that a purchaser cannot be made to wait indefinitely and may seek refund with appropriate compensation in a proper case.'
      }
    ],
    source: {
      type: 'url',
      title: 'Fortune Infrastructure v. Trevor D’Lima — Indian Kanoon search',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=Fortune%20Infrastructure%20Trevor%20DLima%20doctypes%3Asupremecourt',
      verified: true
    },
    status: 'reviewed'
  }
]
