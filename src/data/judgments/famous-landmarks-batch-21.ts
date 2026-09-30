import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_21: Judgment[] = [
  {
    id: 'maula-bux-1969',
    caseName: 'Maula Bux v. Union of India',
    shortName: 'Maula Bux',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1969,
    judgmentDate: '1969-08-19',
    citation: '(1969) 2 SCC 554',
    neutralCitation: 'AIR 1970 SC 1955',
    bench: 'Three-Judge Bench',
    judges: ['J.C. Shah', 'V. Ramaswami', 'A.N. Grover'],
    subject: 'Contract Law',
    topics: ['Section 74', 'penalty', 'forfeiture', 'reasonable compensation'],
    tags: ['contract', 'damages', 'penalty', 'forfeiture', 'section-74'],
    summary: 'The Supreme Court explained the application of Section 74 of the Indian Contract Act, 1872 to stipulated sums and forfeiture clauses. A forfeiture clause securing contractual performance may attract Section 74 when it is penal in character; the court awards reasonable compensation subject to the contractual ceiling. The Court distinguished reasonable earnest money in a sale transaction from a security deposit liable to forfeiture for breach.',
    facts: [
      'The appellant entered into Government supply contracts and deposited sums as security for due performance.',
      'The contracts permitted forfeiture when the supplier failed to perform contractual obligations.',
      'The Government forfeited the deposits, while the appellant challenged the forfeiture and sought recovery.'
    ],
    issues: [
      'Whether forfeiture of a security deposit for breach is governed by Section 74 of the Indian Contract Act.',
      'Whether proof of actual loss is always necessary before reasonable compensation can be awarded under Section 74.',
      'How a reasonable earnest-money deposit differs from a penal forfeiture clause.'
    ],
    arguments: {
      appellant: [
        'The deposits were security for performance rather than ordinary earnest money.',
        'The forfeiture was subject to the statutory control of Section 74 and could not automatically be retained as a penalty.'
      ],
      respondent: [
        'The contractual terms authorized forfeiture upon non-performance.',
        'The forfeited amount was said to be contractually recoverable without a separate damages calculation.'
      ]
    },
    provisions: [
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
        heading: 'Penalty and forfeiture',
        explanation: 'Where a contract stipulates payment or forfeiture as a consequence of breach and the stipulation is penal in nature, Section 74 applies. The statutory remedy is reasonable compensation, not automatic enforcement of the stipulated sum.'
      },
      {
        heading: 'Proof and assessment of loss',
        explanation: 'Section 74 covers contracts where actual loss may be difficult to quantify as well as cases where loss can be assessed. Where loss is capable of proof, evidence of the loss remains relevant to the court’s assessment of reasonable compensation.'
      },
      {
        heading: 'Earnest money distinction',
        explanation: 'A reasonable earnest-money deposit in a sale transaction may be forfeited on the established principles governing earnest money; a security deposit made to guarantee performance is not thereby converted into earnest money and may fall within Section 74 when forfeited for breach.'
      }
    ],
    decision: 'The Supreme Court held that the forfeiture of the security deposits in the circumstances was governed by Section 74 and that the Government could not simply retain a penal amount without the statutory discipline of reasonable compensation.',
    holding: 'Section 74 governs contractual stipulations in the nature of penalty, including penal forfeiture of amounts deposited as security for performance. The court may award reasonable compensation not exceeding the stipulated amount; where loss is capable of proof, evidence of loss is relevant.',
    ratioDecidendi: 'A contractual forfeiture that is penal in character falls within Section 74, and the court must award only reasonable compensation within the statutory ceiling. A security deposit for due performance is distinct from reasonable earnest money in a sale transaction.',
    relatedCases: [
      {
        judgmentId: 'fateh-chand-1963',
        caseName: 'Fateh Chand v. Balkishan Das',
        citation: '(1964) 1 SCR 515',
        relationship: 'Foundational Section 74 authority applied in Maula Bux.'
      },
    ],
    examPoints: [
      'Distinguish earnest money from a performance security deposit.',
      'Section 74 controls penal stipulations; the stipulated sum is a ceiling, not an automatic entitlement.',
      'Actual loss may be difficult to prove in some contracts, but where it can be assessed, evidence of loss matters.'
    ],
    mcqs: [
      {
        id: 'maula-bux-mcq-1',
        question: 'What is the central rule from Maula Bux concerning penal forfeiture?',
        options: [
          'Every contractual forfeiture is automatically enforceable',
          'Penal forfeiture is subject to Section 74 and reasonable compensation',
          'Section 74 applies only to liquidated damages payable in cash',
          'A security deposit is always legally identical to earnest money'
        ],
        correctIndex: 1,
        explanation: 'Maula Bux treats penal forfeiture of a performance security as falling within Section 74 and subject to reasonable compensation.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Maula Bux v. Union of India',
      sourceUrl: 'https://indiankanoon.org/doc/158693/',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'eastern-book-company-2008',
    caseName: 'Eastern Book Company v. D.B. Modak',
    shortName: 'Eastern Book Company',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2007,
    judgmentDate: '2007-12-12',
    citation: '(2008) 1 SCC 1',
    neutralCitation: 'AIR 2008 SC 809',
    bench: 'Two-Judge Bench',
    judges: ['B.N. Agrawal', 'P.P. Naolekar'],
    subject: 'Intellectual Property Law',
    topics: ['copyright', 'originality', 'compilation', 'law reports'],
    tags: ['copyright', 'originality', 'compilation', 'skill-and-judgment', 'law-reports'],
    summary: 'The Supreme Court addressed copyright in edited law reports and the originality required for protection of a derivative compilation. It rejected both an unduly low “sweat of the brow” threshold and a novelty-based copyright test, holding that a work must originate from the author and involve at least a minimal degree of creativity through skill and judgment. Judicial decisions themselves are subject to the statutory treatment of judgments, while independently created editorial additions may receive protection if they satisfy the originality standard.',
    facts: [
      'Eastern Book Company published Supreme Court judgments in its law reports with editorial inputs including copy-editing, paragraph numbering, headnotes and other presentation features.',
      'The respondents reproduced portions of the reported material and disputed the claimed copyright in the editorial additions.',
      'The dispute required the Court to determine the originality threshold for derivative works and compilations under the Copyright Act, 1957.'
    ],
    issues: [
      'What degree of originality is required for copyright protection of a derivative compilation.',
      'Whether editorial additions to judgments can constitute copyrightable original work.',
      'How the statutory treatment of judicial judgments interacts with copyright claimed in independently created editorial material.'
    ],
    arguments: {
      appellant: [
        'The editorial work involved substantial skill, judgment, labour and investment and therefore constituted original literary work.',
        'Unauthorized reproduction of the editorial material infringed the claimed copyright.'
      ],
      respondent: [
        'Judgments are public material and the claimed additions lacked sufficient originality.',
        'Merely arranging or mechanically editing judicial material should not create an exclusive copyright.'
      ]
    },
    provisions: [
      {
        actId: 'copyright-act-1957',
        actName: 'Copyright Act, 1957',
        provisionId: 's-13',
        section: '13',
        title: 'Works in which copyright subsists'
      },
      {
        actId: 'copyright-act-1957',
        actName: 'Copyright Act, 1957',
        provisionId: 's-52',
        section: '52',
        title: 'Certain acts not to be infringement of copyright'
      }
    ],
    reasoning: [
      {
        heading: 'Originating from the author',
        explanation: 'Originality does not require novelty of ideas. The protected work must originate from the author rather than being copied, and the author must contribute sufficient skill and judgment.'
      },
      {
        heading: 'Minimal creativity',
        explanation: 'The Court adopted a standard requiring at least a minimal degree of creativity. Mere mechanical labour or trivial alterations are insufficient, while independent selection, arrangement and presentation may qualify when they cross the required threshold.'
      },
      {
        heading: 'Judgments and editorial work',
        explanation: 'The publication of a judicial judgment is treated separately under the statutory exception relating to judgments. Copyright protection for an editor therefore depends on the originality of the editor’s own contributions rather than ownership of the underlying judicial decision.'
      }
    ],
    decision: 'The Supreme Court held that the copy-edited judgments and editorial inputs in question did not, as a whole, satisfy the required originality threshold merely because substantial labour and investment had been expended; the claimed copyright could not be founded on trivial or standard editorial changes.',
    holding: 'Copyright in a derivative compilation requires independent creation and at least a minimal degree of creativity through skill and judgment. Mere labour, capital or mechanical presentation is insufficient.',
    ratioDecidendi: 'For copyright originality, the work must originate from the author and involve more than trivial or purely mechanical effort; a minimal degree of creativity is required, while novelty is not.',
    relatedCases: [
      {
        judgmentId: 'rg-anand-1978',
        caseName: 'R.G. Anand v. Deluxe Films',
        citation: '(1978) 4 SCC 118',
        relationship: 'Earlier Supreme Court authority on copyright infringement and idea-expression distinction.'
      },
      {
        judgmentId: 'novartis-2013',
        caseName: 'Novartis AG v. Union of India',
        citation: '(2013) 6 SCC 1',
        relationship: 'Existing CodePackr landmark in intellectual property law.'
      }
    ],
    examPoints: [
      'Originality is not novelty; it requires independent creation and the required level of skill, judgment and creativity.',
      'The Court rejected an unrestricted “sweat of the brow” standard.',
      'Copyright in editorial additions is distinct from copyright in the underlying judicial decision.'
    ],
    mcqs: [
      {
        id: 'eastern-book-company-mcq-1',
        question: 'What originality threshold did Eastern Book Company apply to derivative compilations?',
        options: [
          'Absolute novelty of every fact',
          'Only investment of capital',
          'Independent creation with at least minimal creativity through skill and judgment',
          'Registration of the compilation as a patent'
        ],
        correctIndex: 2,
        explanation: 'The Court required independent creation plus a minimal degree of creativity and rejected mere labour or mechanical effort as sufficient.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Eastern Book Company v. D.B. Modak',
      sourceUrl: 'https://indiankanoon.org/doc/1062099/',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'associate-builders-2014',
    caseName: 'Associate Builders v. Delhi Development Authority',
    shortName: 'Associate Builders',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2014,
    judgmentDate: '2014-11-25',
    citation: '(2015) 3 SCC 49',
    neutralCitation: 'AIR 2015 SC 620',
    bench: 'Two-Judge Bench',
    judges: ['R.F. Nariman', 'Ranjan Gogoi'],
    subject: 'Arbitration Law',
    topics: ['Section 34', 'public policy', 'patent illegality', 'arbitral awards'],
    tags: ['arbitration', 'section-34', 'public-policy', 'judicial-review', 'award'],
    summary: 'Associate Builders explained the judicial grounds for interference with an arbitral award under Section 34 of the Arbitration and Conciliation Act, 1996, including the public-policy framework applicable before the 2015 amendment. The Court emphasized the limited supervisory role of a court and identified distinct categories such as fundamental policy of Indian law, interest of India, justice or morality, and patent illegality in the then-applicable statutory framework.',
    facts: [
      'A construction contract between Associate Builders and the Delhi Development Authority generated multiple monetary and contractual claims.',
      'An arbitral tribunal made an award on several claims, followed by challenges before the civil court and appellate court.',
      'The Supreme Court considered the proper scope of review under Section 34 and the meaning of public policy of India.'
    ],
    issues: [
      'What limits govern a court exercising jurisdiction under Section 34 over an arbitral award.',
      'How public policy of India was to be understood under the pre-2015 Section 34 framework.',
      'When patent illegality or serious legal error could justify interference without converting Section 34 proceedings into an appeal on merits.'
    ],
    arguments: {
      appellant: [
        'The award involved errors warranting judicial interference under Section 34.',
        'The challenged findings were alleged to conflict with contractual and statutory requirements.'
      ],
      respondent: [
        'The court’s role under Section 34 was supervisory and did not permit reassessment of evidence as an appellate court.',
        'The award should not be disturbed merely because another view of the contractual dispute was possible.'
      ]
    },
    provisions: [
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-34',
        section: '34',
        title: 'Application for setting aside arbitral award'
      }
    ],
    reasoning: [
      {
        heading: 'Limited judicial review',
        explanation: 'Section 34 is not an appeal on the merits. Courts must respect the arbitral tribunal’s role and intervene only on the statutory grounds for setting aside.'
      },
      {
        heading: 'Public policy framework',
        explanation: 'Under the then-applicable Section 34 framework, the Court organized public-policy review around established categories including fundamental policy of Indian law, the interests of India, justice or morality, and the prohibition against awards that are patently illegal on the face of the award.'
      },
      {
        heading: 'Patent illegality and merits',
        explanation: 'A court cannot substitute its own view merely because it considers another interpretation preferable. Intervention requires a legal defect falling within the statutory limits rather than ordinary disagreement with factual or contractual evaluation.'
      }
    ],
    decision: 'The Supreme Court articulated the pre-2015 Section 34 framework and reiterated the restricted scope of judicial interference with arbitral awards.',
    holding: 'A Section 34 court does not sit as an appellate court over an arbitral tribunal. Interference must remain within the statutory grounds, including the public-policy categories recognized under the law applicable at the time.',
    ratioDecidendi: 'Judicial review of arbitral awards is supervisory and statutorily confined; a court cannot reassess the merits merely because another interpretation is possible.',
    relatedCases: [
      {
        judgmentId: 'renusagar-1994',
        caseName: 'Renusagar Power Co. Ltd. v. General Electric Co.',
        citation: '1994 Supp (1) SCC 644',
        relationship: 'Foundational public-policy authority discussed in the Section 34 jurisprudence.'
      },
      {
        judgmentId: 'ssangyong-engineering-2019',
        caseName: 'Ssangyong Engineering & Construction Co. Ltd. v. NHAI',
        citation: '(2019) 15 SCC 131',
        relationship: 'Later post-2015 treatment of Section 34 and the amended public-policy and patent-illegality framework.'
      }
    ],
    examPoints: [
      'Associate Builders is principally important for the pre-2015 Section 34 public-policy framework.',
      'Section 34 is not an ordinary first appeal on facts or merits.',
      'Always distinguish the pre-2015 framework from the amended Section 34 regime.'
    ],
    mcqs: [
      {
        id: 'associate-builders-mcq-1',
        question: 'What is the basic character of Section 34 review described in Associate Builders?',
        options: [
          'A full first appeal on facts',
          'A supervisory statutory review, not a merits appeal',
          'A constitutional writ jurisdiction in every case',
          'A retrial before the civil court'
        ],
        correctIndex: 1,
        explanation: 'The judgment emphasizes that Section 34 does not permit ordinary appellate reappreciation of the arbitral merits.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — Associate Builders v. Delhi Development Authority',
      sourceUrl: 'https://indiankanoon.org/doc/31621011/',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'ssangyong-engineering-2019',
    caseName: 'Ssangyong Engineering & Construction Co. Ltd. v. National Highways Authority of India',
    shortName: 'Ssangyong Engineering',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2019,
    judgmentDate: '2019-05-08',
    citation: '(2019) 15 SCC 131',
    neutralCitation: 'AIR 2019 SC 5041',
    bench: 'Two-Judge Bench',
    judges: ['R.F. Nariman', 'Vineet Saran'],
    subject: 'Arbitration Law',
    topics: ['Section 34', '2015 amendment', 'patent illegality', 'natural justice'],
    tags: ['arbitration', 'section-34', '2015-amendment', 'patent-illegality', 'natural-justice'],
    summary: 'Ssangyong Engineering clarified the post-2015 Section 34 framework for setting aside arbitral awards. The Supreme Court treated the amended public-policy grounds as distinct from the earlier broader approach and explained the limited role of patent illegality under Section 34(2A). It also set aside the award because material relied upon by the tribunal had not been properly disclosed to the parties and because the award effectively altered the contractual basis of the dispute.',
    facts: [
      'Ssangyong entered into a highway construction contract with NHAI containing a contractual price-adjustment formula.',
      'After changes in the Wholesale Price Index series, NHAI issued a circular using a linking factor that affected the price-adjustment calculation.',
      'The arbitral majority applied the changed methodology, while the dissenting arbitrator followed the contractual formula.',
      'The Supreme Court examined the award under the amended Section 34 regime.'
    ],
    issues: [
      'Whether the 2015 amendments to Section 34 govern the grounds applicable to a post-amendment challenge.',
      'What remains of public-policy review after the amendment and how patent illegality operates under Section 34(2A).',
      'Whether reliance on material not properly disclosed to a party violates natural justice and justifies setting aside the award.'
    ],
    arguments: {
      appellant: [
        'The tribunal had departed from the contractual formula and relied on material that had not been supplied to the appellant.',
        'The award therefore violated the statutory grounds for setting aside under the amended Section 34.'
      ],
      respondent: [
        'The price-adjustment methodology was defended as a valid implementation of the changed index series.',
        'The award was said to fall within the tribunal’s contractual and evidentiary discretion.'
      ]
    },
    provisions: [
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-34',
        section: '34',
        title: 'Application for setting aside arbitral award'
      },
      {
        actId: 'arbitration-and-conciliation-act-1996',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 's-34-2a',
        section: '34(2A)',
        title: 'Patent illegality in domestic arbitration'
      }
    ],
    reasoning: [
      {
        heading: 'Post-2015 statutory framework',
        explanation: 'The Court distinguished the amended Section 34 regime from the earlier public-policy jurisprudence and treated the statutory amendments as materially narrowing the permissible grounds of interference.'
      },
      {
        heading: 'Patent illegality',
        explanation: 'For a domestic award, patent illegality under Section 34(2A) is a specific statutory ground. It does not authorize a court to reappreciate evidence or enter the merits merely because another view is possible.'
      },
      {
        heading: 'Natural justice',
        explanation: 'A tribunal cannot rely on material that is not properly disclosed to the parties without giving them a meaningful opportunity to address it. Such procedural unfairness can undermine the award under the statutory challenge framework.'
      },
      {
        heading: 'No rewriting of the contract',
        explanation: 'An arbitral tribunal cannot effectively create a new contractual bargain by substituting a different formula for the one agreed by the parties.'
      }
    ],
    decision: 'The Supreme Court set aside the majority award and restored the contractual approach reflected in the dissenting award, applying the amended Section 34 framework.',
    holding: 'After the 2015 amendment, Section 34 review is narrower and must follow the amended statutory grounds. Patent illegality does not permit merits review, but a fundamental departure from the contract or denial of natural justice can justify setting aside where the statutory conditions are met.',
    ratioDecidendi: 'The post-2015 Section 34 framework confines judicial interference to the amended statutory grounds; patent illegality is not a gateway to appellate merits review, while reliance on undisclosed material and rewriting the contract can vitiate a domestic award.',
    relatedCases: [
      {
        judgmentId: 'associate-builders-2014',
        caseName: 'Associate Builders v. Delhi Development Authority',
        citation: '(2015) 3 SCC 49',
        relationship: 'Pre-2015 Section 34 public-policy framework clarified and narrowed by the later statutory regime.'
      },
      {
        judgmentId: 'renusagar-1994',
        caseName: 'Renusagar Power Co. Ltd. v. General Electric Co.',
        citation: '1994 Supp (1) SCC 644',
        relationship: 'Earlier foundational authority on public policy in award enforcement.'
      }
    ],
    examPoints: [
      'Separate the pre-2015 Associate Builders framework from the post-2015 Ssangyong framework.',
      'Patent illegality under Section 34(2A) is not a general appellate power.',
      'Natural justice and fidelity to the contract remain important statutory-review concerns.'
    ],
    mcqs: [
      {
        id: 'ssangyong-engineering-mcq-1',
        question: 'What does Section 34(2A) not permit a court to do?',
        options: [
          'Examine patent illegality within the statutory limits',
          'Set aside an award on a legally recognized statutory ground',
          'Reappreciate evidence as if hearing a regular appeal on merits',
          'Examine whether the award departs from the contract in a legally material way'
        ],
        correctIndex: 2,
        explanation: 'Ssangyong emphasizes that patent illegality does not convert Section 34 into an ordinary appellate merits jurisdiction.'
      }
    ],
    source: {
      type: 'url',
      title: 'Supreme Court of India — Ssangyong Engineering & Construction Co. Ltd. v. NHAI',
      sourceUrl: 'https://www.api.sci.gov.in/supremecourt/2017/19190/19190_2017_Judgement_08-May-2019.pdf',
      verified: true
    },
    status: 'reviewed'
  },

  {
    id: 'national-seeds-corporation-2012',
    caseName: 'National Seeds Corporation Ltd. v. M. Madhusudhan Reddy',
    shortName: 'National Seeds Corporation',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2012,
    judgmentDate: '2012-01-16',
    citation: '(2012) 2 SCC 506',
    neutralCitation: 'AIR 2012 SC 1160',
    bench: 'Two-Judge Bench',
    judges: ['G.S. Singhvi', 'Asok Kumar Ganguly'],
    subject: 'Consumer Protection Law',
    topics: ['consumer', 'defective seeds', 'alternative remedies', 'arbitration clause'],
    tags: ['consumer', 'agriculture', 'seeds', 'jurisdiction', 'arbitration'],
    summary: 'The Supreme Court held that farmers who purchased seeds for cultivation could fall within the statutory definition of consumer and that the Consumer Protection Act, 1986 provided an additional remedy despite the existence of the Seeds Act, 1966 and an arbitration clause. The Court also addressed evidentiary difficulties arising where seeds had already been sown and could not be preserved for laboratory testing.',
    facts: [
      'Farmers and growers purchased seeds supplied by National Seeds Corporation and alleged crop failure or reduced yield because the seeds were defective.',
      'Consumer forums awarded compensation, and the Corporation challenged their jurisdiction.',
      'The Corporation argued that the Seeds Act was the governing special legislation, that the growers were not consumers because of commercial-purpose objections, and that arbitration clauses displaced consumer proceedings.',
      'In some cases the seeds had already been sown, creating difficulty in producing samples for laboratory testing.'
    ],
    issues: [
      'Whether farmers purchasing seeds for cultivation are consumers under the Consumer Protection Act, 1986.',
      'Whether the Seeds Act excludes the consumer remedy.',
      'Whether an arbitration clause prevents a consumer forum from exercising jurisdiction.',
      'How defective-seed claims should be assessed where the original seed sample is no longer available for laboratory analysis.'
    ],
    arguments: {
      appellant: [
        'The Seeds Act was said to be the special statutory regime governing seed quality and disputes.',
        'The growers were said to have purchased seeds for a commercial purpose and therefore to fall outside the consumer definition.',
        'The arbitration clause was relied upon as a reason to exclude consumer-forum jurisdiction.'
      ],
      respondent: [
        'The Consumer Protection Act was relied upon as an additional remedial statute.',
        'The growers used the seeds in agriculture and could qualify as consumers within the statutory definition.',
        'Field evidence and agricultural inspection could be relevant where the seeds had already been exhausted through sowing.'
      ]
    },
    provisions: [
      {
        actId: 'consumer-protection-act-1986',
        actName: 'Consumer Protection Act, 1986',
        provisionId: 's-2-d',
        section: '2(1)(d)',
        title: 'Definition of consumer'
      },
      {
        actId: 'consumer-protection-act-1986',
        actName: 'Consumer Protection Act, 1986',
        provisionId: 's-3',
        section: '3',
        title: 'Act not in derogation of other laws'
      },
      {
        actId: 'seeds-act-1966',
        actName: 'Seeds Act, 1966',
        provisionId: 'general',
        title: 'Seed quality regulatory framework'
      }
    ],
    reasoning: [
      {
        heading: 'Consumer status of growers',
        explanation: 'The Court applied the statutory consumer definition to farmers and growers purchasing seeds for cultivation, distinguishing the statutory consumer inquiry from a blanket assumption that agricultural activity is always commercial purpose.'
      },
      {
        heading: 'Additional remedy',
        explanation: 'The Consumer Protection Act provides a remedy in addition to other legal remedies unless a clear statutory exclusion applies. The Seeds Act did not create such an exclusion for farmers otherwise covered by the consumer definition.'
      },
      {
        heading: 'Arbitration clause',
        explanation: 'The presence of an arbitration clause did not by itself extinguish the consumer forum remedy under the statutory framework considered by the Court.'
      },
      {
        heading: 'Evidence where seed is exhausted',
        explanation: 'The Court recognized the practical difficulty of requiring laboratory testing of seed that has already been sown. The evidentiary record can include appropriate field and agricultural evidence in the circumstances.'
      }
    ],
    decision: 'The Supreme Court dismissed the challenges and upheld the maintainability of the consumer complaints in the circumstances considered.',
    holding: 'The Consumer Protection Act provides an additional remedy for eligible farmers and growers; the Seeds Act does not impliedly exclude that remedy, and an arbitration clause does not automatically oust consumer-forum jurisdiction.',
    ratioDecidendi: 'Where farmers purchasing seeds satisfy the statutory consumer definition, the Consumer Protection Act remedy can coexist with the Seeds Act and is not displaced merely by an arbitration clause.',
    relatedCases: [
      {
        judgmentId: 'ima-vp-shantha-1995',
        caseName: 'Indian Medical Association v. V.P. Shantha',
        citation: '(1995) 6 SCC 651',
        relationship: 'Existing CodePackr consumer-law landmark on the scope of consumer remedies.'
      },
      {
        judgmentId: 'lucknow-development-authority-mk-gupta-1994',
        caseName: 'Lucknow Development Authority v. M.K. Gupta',
        citation: '(1994) 1 SCC 243',
        relationship: 'Existing CodePackr consumer-law landmark on deficiency in service and public authorities.'
      }
    ],
    examPoints: [
      'The Consumer Protection Act was treated as an additional remedial statute in the circumstances of the case.',
      'Agricultural seed purchasers can qualify as consumers depending on the statutory definition and facts.',
      'An arbitration clause does not automatically eliminate the consumer remedy under the law considered in the case.'
    ],
    mcqs: [
      {
        id: 'national-seeds-corporation-mcq-1',
        question: 'What was a key holding in National Seeds Corporation v. Madhusudhan Reddy?',
        options: [
          'The Seeds Act always excludes consumer proceedings',
          'An arbitration clause always bars consumer complaints',
          'Eligible farmers can invoke the Consumer Protection Act in addition to other remedies',
          'Farmers can never be consumers when buying seeds'
        ],
        correctIndex: 2,
        explanation: 'The Court recognized the consumer remedy as an additional remedy where the statutory consumer definition was satisfied.'
      }
    ],
    source: {
      type: 'url',
      title: 'Indian Kanoon — National Seeds Corporation Ltd. v. M. Madhusudhan Reddy',
      sourceUrl: 'https://indiankanoon.org/docfragment/162444548/',
      verified: true
    },
    status: 'reviewed'
  }
]
