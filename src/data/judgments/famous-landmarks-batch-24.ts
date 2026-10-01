import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_24: Judgment[] = [
  {
    id: 'ghaziabad-development-authority-balbir-singh-2004',
    caseName: 'Ghaziabad Development Authority v. Balbir Singh',
    shortName: 'GDA v. Balbir Singh',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2004,
    judgmentDate: '2004-03-17',
    citation: '(2004) 5 SCC 65',
    neutralCitation: '2004 INSC 182',
    bench: 'Three-Judge Bench',
    judges: ['S.N. Variava', 'H.K. Sema', 'Ashok Bhan'],
    subject: 'Consumer Law',
    topics: ['deficiency in service', 'statutory authorities', 'compensation', 'housing'],
    tags: ['consumer', 'development-authority', 'compensation', 'deficiency'],
    summary: 'The Supreme Court held that statutory development authorities can fall within consumer jurisdiction when they render housing or allied services for consideration. Compensation for deficiency must be connected to the loss, injury, harassment and circumstances of the individual case rather than being imposed mechanically by a uniform interest formula.',
    facts: [
      'Home and plot allottees brought consumer proceedings concerning delay and deficiency by a statutory development authority.',
      'The National Consumer Disputes Redressal Commission awarded compensation and interest in the proceedings.',
      'The authority challenged the consumer jurisdiction and the method of awarding compensation.',
      'The Supreme Court examined the relationship between statutory public authorities and the Consumer Protection Act, 1986.'
    ],
    issues: [
      'Whether a statutory development authority rendering housing services can be liable under consumer law.',
      'How compensation should be determined for deficiency in service by a public development authority.',
      'Whether a uniform rate of interest can be imposed irrespective of the facts of individual cases.'
    ],
    arguments: {
      appellant: [
        'The authority challenged the consumer forum approach to compensation and interest.',
        'It contended that the award should reflect the individual facts and legal basis of the claim.'
      ],
      respondent: [
        'The consumers relied on the statutory consumer remedy for deficient housing services.',
        'They sought effective compensation for delay and the resulting loss and harassment.'
      ]
    },
    provisions: [
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-2-1-o', section: '2(1)(o)', title: 'Service' },
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-14', section: '14', title: 'Relief and compensation' }
    ],
    reasoning: [
      { heading: 'Public authorities as service providers', explanation: 'A statutory character does not by itself remove a development authority from consumer jurisdiction when it supplies housing-related services for consideration.' },
      { heading: 'Compensation is fact-sensitive', explanation: 'The amount of compensation must be connected to the circumstances of the individual consumer, including the nature and period of deficiency and the loss or injury proved.' },
      { heading: 'No mechanical formula', explanation: 'A flat rate of interest cannot replace the statutory exercise of determining appropriate compensation on the facts of each case.' }
    ],
    decision: 'The Supreme Court treated housing services supplied by statutory development authorities as falling within the consumer-protection framework and explained that compensation must be assessed according to the circumstances of each case.',
    holding: 'Statutory development authorities may be liable under consumer law for deficient housing services, and compensation must be determined on the facts rather than by mechanically applying a uniform interest rate.',
    ratioDecidendi: 'Where a public development authority renders a service for consideration, consumer jurisdiction can apply; compensation for deficiency is a remedial assessment tied to the individual facts and cannot be reduced to an automatic uniform formula.',
    examPoints: [
      'Statutory status does not automatically exclude a development authority from consumer jurisdiction.',
      'Housing and development services can constitute service under consumer law.',
      'Compensation should be fact-sensitive rather than mechanically fixed.'
    ],
    mcqs: [{
      id: 'ghaziabad-development-authority-balbir-singh-2004-mcq-1',
      question: 'What principle is associated with Ghaziabad Development Authority v. Balbir Singh?',
      options: ['Statutory authorities can never be consumers-service providers', 'Compensation must always be a fixed 18% interest', 'Housing services by statutory authorities can attract consumer jurisdiction and compensation is fact-sensitive', 'Consumer forums cannot award compensation against development authorities'],
      correctIndex: 2,
      explanation: 'The Court recognised consumer jurisdiction over qualifying services by statutory authorities and emphasised case-specific compensation.'
    }],
    source: {
      type: 'url',
      title: 'Ghaziabad Development Authority v. Balbir Singh — Indian Kanoon',
      sourceUrl: 'https://indiankanoon.org/doc/24088270/',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'azadi-bachao-andolan-2003',
    caseName: 'Union of India v. Azadi Bachao Andolan',
    shortName: 'Azadi Bachao Andolan',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2003,
    judgmentDate: '2003-10-07',
    citation: '(2004) 10 SCC 1',
    neutralCitation: '2003 INSC 585',
    bench: 'Two-Judge Bench',
    judges: ['S.B. Sinha', 'Ruma Pal'],
    subject: 'Tax Law',
    topics: ['double taxation avoidance agreement', 'treaty interpretation', 'tax avoidance', 'Mauritius'],
    tags: ['tax', 'DTAA', 'treaty', 'tax-planning'],
    summary: 'The Supreme Court upheld the validity of Circular No. 789 of 2000 concerning tax residency certificates under the India-Mauritius Double Taxation Avoidance Convention and rejected a general judicial rule that legitimate tax planning is impermissible merely because it reduces tax. The judgment distinguished lawful tax planning from sham or colourable transactions.',
    facts: [
      'The dispute concerned the use of the India-Mauritius Double Taxation Avoidance Convention by foreign investors using Mauritius structures.',
      'The Central Board of Direct Taxes issued Circular No. 789 concerning production and acceptance of tax residency certificates.',
      'The validity of the circular and the treaty-based tax treatment were challenged.',
      'The Supreme Court examined treaty obligations, executive circulars, and the distinction between legitimate tax planning and abusive or sham arrangements.'
    ],
    issues: [
      'Whether Circular No. 789 was consistent with the India-Mauritius tax treaty.',
      'Whether a tax residency certificate could be treated as sufficient evidence of treaty residence for the purposes covered by the circular.',
      'Whether tax planning becomes impermissible merely because it results in lower tax liability.',
      'How courts should distinguish legitimate arrangements from sham transactions.'
    ],
    arguments: {
      appellant: [
        'The Union relied on the binding character of the treaty and the administrative circular issued to implement it.',
        'It contended that the treaty framework could not be rewritten by domestic judicial policy.'
      ],
      respondent: [
        'The challengers questioned the validity of the circular and the treaty-based consequences for investment structures.',
        'They raised concerns about arrangements used primarily to obtain treaty benefits.'
      ]
    },
    provisions: [
      { actId: 'income-tax-act-1961', actName: 'Income-tax Act, 1961', provisionId: 's-90', section: '90', title: 'Agreements with foreign countries or specified territories' },
      { actId: 'india-mauritius-dtaa', actName: 'India-Mauritius Double Taxation Avoidance Convention', provisionId: 'art-13', article: '13', title: 'Capital gains' }
    ],
    reasoning: [
      { heading: 'Treaty implementation', explanation: 'The Court considered the treaty framework and the executive authority to implement its provisions through an administrative circular consistent with the Convention.' },
      { heading: 'Tax planning', explanation: 'A transaction is not unlawful merely because the taxpayer arranges affairs in a manner that results in a lower tax burden; the analysis must distinguish legitimate planning from sham or colourable conduct.' },
      { heading: 'Residency certificate', explanation: 'For the treaty framework addressed by the circular, a valid tax residency certificate was treated as relevant evidence of residence and treaty entitlement subject to the law governing the arrangement.' }
    ],
    decision: 'The Supreme Court upheld Circular No. 789 and rejected the challenge to the treaty-based framework, while recognising that sham or colourable transactions remain open to scrutiny.',
    holding: 'Legitimate tax planning is not by itself unlawful, and the India-Mauritius treaty and the challenged circular were given effect according to their legal framework.',
    ratioDecidendi: 'Courts must apply the treaty and statutory framework as enacted; tax reduction through a genuine legal arrangement is not by itself illegitimate, while sham or colourable transactions remain distinguishable and reviewable.',
    examPoints: [
      'Distinguish tax planning from sham or colourable transactions.',
      'Section 90 of the Income-tax Act operates with applicable tax treaties.',
      'The case is a leading authority on the India-Mauritius DTAA and treaty-based investment taxation.'
    ],
    mcqs: [{
      id: 'azadi-bachao-andolan-2003-mcq-1',
      question: 'What distinction is central to Azadi Bachao Andolan?',
      options: ['All tax planning is illegal', 'Tax planning and sham or colourable transactions are distinct', 'Treaties have no relevance to domestic tax', 'A tax residency certificate can never have evidentiary value'],
      correctIndex: 1,
      explanation: 'The Court distinguished legitimate tax planning from sham or colourable arrangements while applying the treaty framework.'
    }],
    source: {
      type: 'url',
      title: 'Union of India v. Azadi Bachao Andolan — Indian Kanoon',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=263%20itr%20706',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'skandia-insurance-kokilaben-1987',
    caseName: 'Skandia Insurance Co. Ltd. v. Kokilaben Chandravadan',
    shortName: 'Skandia Insurance v. Kokilaben',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1987,
    judgmentDate: '1987-04-01',
    citation: '1987 AIR 1184; (1987) 2 SCR 752',
    neutralCitation: '1987 INSC 92',
    bench: 'Two-Judge Bench',
    judges: ['M.P. Thakkar', 'B.C. Ray'],
    subject: 'Motor Vehicle Insurance Law',
    topics: ['third-party insurance', 'breach of policy condition', 'driver', 'vicarious liability'],
    tags: ['motor-vehicles', 'insurance', 'third-party-risk', 'statutory-interpretation'],
    summary: 'The Supreme Court adopted a protective construction of third-party motor insurance provisions and held that an insurer cannot avoid statutory third-party liability merely by relying on a policy-condition breach in circumstances where the insured did what was reasonably possible to prevent the breach. The Court emphasised the social-protection purpose of compulsory motor insurance.',
    facts: [
      'A truck driver left the vehicle with the ignition key in place while he went to obtain refreshments.',
      'The cleaner interfered with the vehicle and an accident occurred, causing injury.',
      'The insurer relied on a policy condition concerning the use of the vehicle by an unauthorised person.',
      'The Court examined the insurer’s statutory liability to third parties and the effect of the policy condition.'
    ],
    issues: [
      'Whether the insurer could avoid third-party liability because the vehicle was driven by the cleaner.',
      'How the statutory protection of accident victims affects the interpretation of an insurance exclusion.',
      'Whether the insured had done what was reasonably possible to comply with the policy condition.'
    ],
    arguments: {
      appellant: [
        'The insurer relied on the policy condition restricting who could drive the insured vehicle.',
        'It contended that breach of the condition defeated the claim against the insurer.'
      ],
      respondent: [
        'The claimant relied on the statutory third-party protection under the Motor Vehicles Act.',
        'It was contended that the insurer could not defeat the protective purpose of the legislation through an exclusion clause in the circumstances.'
      ]
    },
    provisions: [
      { actId: 'motor-vehicles-act-1939', actName: 'Motor Vehicles Act, 1939', provisionId: 's-96', section: '96', title: 'Duty of insurers to satisfy judgments against persons insured in respect of third party risks' },
      { actId: 'motor-vehicles-act-1939', actName: 'Motor Vehicles Act, 1939', provisionId: 's-95', section: '95', title: 'Requirements of policies and limits of liability' }
    ],
    reasoning: [
      { heading: 'Protective purpose', explanation: 'Compulsory third-party insurance is designed to protect victims of motor accidents, so exclusions are not read in a manner that defeats the statutory purpose without clear legal basis.' },
      { heading: 'Reasonable compliance', explanation: 'The Court considered whether the insured had taken reasonable steps to prevent the prohibited use rather than treating every technical breach as sufficient to defeat statutory protection.' },
      { heading: 'Read down the exclusion', explanation: 'The exclusion clause was construed consistently with the main purpose of the statutory third-party insurance provisions.' }
    ],
    decision: 'The Supreme Court held that the insurer could not escape third-party liability on the facts merely because the cleaner drove the vehicle, where the insured had taken reasonable precautions and the statutory protection of victims was engaged.',
    holding: 'Third-party motor insurance exclusions must be construed consistently with the protective statutory purpose, and a technical policy breach does not automatically absolve the insurer from statutory liability.',
    ratioDecidendi: 'Where compulsory third-party insurance is concerned, policy conditions must be read in light of the statute’s protective purpose; the insurer cannot rely on a breach that the insured took reasonable steps to prevent to defeat the statutory claim of a third party.',
    examPoints: [
      'Skandia is a leading case on third-party motor insurance and policy-condition breaches.',
      'Distinguish contractual rights between insurer and insured from statutory protection of third parties.',
      'The protective purpose of compulsory insurance informs interpretation of exclusion clauses.'
    ],
    mcqs: [{
      id: 'skandia-insurance-kokilaben-1987-mcq-1',
      question: 'What approach did Skandia Insurance adopt toward an insurer’s reliance on a policy-condition breach?',
      options: ['Every breach automatically defeats third-party liability', 'The exclusion must be read consistently with the protective statutory purpose', 'Third-party insurance has no statutory element', 'Only the insurer’s contract with the driver matters'],
      correctIndex: 1,
      explanation: 'The Court interpreted the policy condition in light of the statutory protection afforded to third-party accident victims.'
    }],
    source: {
      type: 'url',
      title: 'Skandia Insurance Co. Ltd. v. Kokilaben Chandravadan — Indian Kanoon',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=skandia%20insurance',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'laxmi-engineering-works-psg-1995',
    caseName: 'Laxmi Engineering Works v. P.S.G. Industrial Institute',
    shortName: 'Laxmi Engineering Works',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1995,
    judgmentDate: '1995-04-04',
    citation: '(1995) 3 SCC 583',
    neutralCitation: '1995 INSC 248',
    bench: 'Two-Judge Bench',
    judges: ['B.P. Jeevan Reddy', 'Sujata V. Manohar'],
    subject: 'Consumer Law',
    topics: ['consumer definition', 'commercial purpose', 'self-employment', 'consumer complaint'],
    tags: ['consumer', 'commercial-purpose', 'self-employment', 'CPA-1986'],
    summary: 'The Supreme Court interpreted the expression “commercial purpose” in the Consumer Protection Act, 1986 and explained the self-employment exception. The Court distinguished a large-scale profit-making commercial activity from a purchase of goods used exclusively by a person to earn a livelihood through self-employment.',
    facts: [
      'Laxmi Engineering Works purchased a CNC machine and alleged that the machine was supplied late and was defective.',
      'The National Commission treated the machinery purchase as being for a commercial purpose and rejected the consumer complaint.',
      'The Supreme Court examined the meaning of consumer and commercial purpose under Section 2(d) of the Consumer Protection Act, 1986.',
      'The Court also considered the significance of the statutory explanation concerning livelihood through self-employment.'
    ],
    issues: [
      'What is the meaning of commercial purpose in the consumer definition?',
      'How does the self-employment exception operate?',
      'When does use of machinery remain a commercial purpose rather than qualifying as livelihood through self-employment?'
    ],
    arguments: {
      appellant: [
        'The appellant contended that the machinery was used for earning livelihood and that the consumer remedy should remain available.',
        'It relied on the statutory explanation concerning self-employment.'
      ],
      respondent: [
        'The respondent argued that the machinery was purchased for a commercial manufacturing activity and therefore fell outside the consumer definition.',
        'The respondent relied on the nature and scale of the appellant’s business.'
      ]
    },
    provisions: [
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-2-d', section: '2(d)', title: 'Consumer' }
    ],
    reasoning: [
      { heading: 'Commercial purpose', explanation: 'The expression must be assessed in the factual context of the purchase and use of the goods rather than through a mechanical assumption that every business-related purchase is excluded.' },
      { heading: 'Self-employment', explanation: 'The statutory explanation protects goods bought and used exclusively for earning the purchaser’s livelihood by means of self-employment, subject to its terms.' },
      { heading: 'Scale and use', explanation: 'The Court distinguished personal livelihood through self-employment from a broader commercial enterprise carried on for profit through a substantial business operation.' }
    ],
    decision: 'The Supreme Court explained the governing test for commercial purpose and applied the statutory definition to the facts of the machinery purchase, treating the nature and scale of the business as relevant to consumer status.',
    holding: 'Whether a purchase is for commercial purpose depends on the statutory definition and the factual use of the goods; the self-employment livelihood exception must be applied according to its terms.',
    ratioDecidendi: 'Commercial purpose is assessed contextually, and the consumer definition excludes commercial purchases while preserving the statutory exception for goods used exclusively to earn livelihood through self-employment.',
    examPoints: [
      'Section 2(d) of the 1986 Act is the starting point for consumer status.',
      'The self-employment explanation is an important exception to the commercial-purpose exclusion.',
      'Business-related use is not automatically identical to commercial purpose; the statutory test and facts control.'
    ],
    mcqs: [{
      id: 'laxmi-engineering-works-psg-1995-mcq-1',
      question: 'What issue is Laxmi Engineering Works chiefly associated with?',
      options: ['Arbitrability of consumer disputes', 'Meaning of commercial purpose and the self-employment exception', 'Medical negligence only', 'Motor insurance liability'],
      correctIndex: 1,
      explanation: 'The case is a leading authority on the consumer definition, commercial purpose and the self-employment livelihood exception.'
    }],
    source: {
      type: 'url',
      title: 'Laxmi Engineering Works v. P.S.G. Industrial Institute — Indian Kanoon',
      sourceUrl: 'https://indiankanoon.org/search/?formInput=laxmi%20engineering%20works%20doctypes%3Asupremecourt',
      verified: true
    },
    status: 'reviewed'
  },
  {
    id: 'pioneer-urban-land-govindan-raghavan-2019',
    caseName: 'Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan',
    shortName: 'Pioneer Urban Land v. Govindan Raghavan',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2019,
    judgmentDate: '2019-04-02',
    citation: '(2019) 5 SCC 725',
    neutralCitation: '2019 INSC 458',
    bench: 'Two-Judge Bench',
    judges: ['Indu Malhotra', 'Uday Umesh Lalit'],
    subject: 'Consumer Law',
    topics: ['builder-buyer agreement', 'delay in possession', 'unfair terms', 'refund'],
    tags: ['consumer', 'real-estate', 'builder-buyer', 'unfair-contract-terms'],
    summary: 'The Supreme Court held that inordinate delay in handing over a flat can amount to deficiency in service and that a purchaser cannot be compelled to accept possession after such delay. The Court also considered wholly one-sided builder-buyer clauses unfair and declined to enforce them to defeat the purchaser’s statutory consumer remedy.',
    facts: [
      'A flat purchaser entered into an apartment buyer agreement with a real-estate developer.',
      'The developer failed to obtain the required occupancy approval and deliver possession within the contractual period and grace period.',
      'The purchaser approached the National Consumer Disputes Redressal Commission seeking refund and compensation.',
      'The Commission granted relief, and the developer challenged the order before the Supreme Court.'
    ],
    issues: [
      'Whether substantial delay in possession constitutes deficiency in service.',
      'Whether the purchaser can seek refund instead of being compelled to accept delayed possession.',
      'Whether one-sided builder-buyer contractual clauses can be enforced against a consumer.',
      'Whether the consumer complaint itself can amount to a valid exercise of the purchaser’s right to terminate in the circumstances.'
    ],
    arguments: {
      appellant: [
        'The developer relied on the contractual terms governing possession and termination.',
        'It challenged the purchaser’s entitlement to refund and the consumer forum’s treatment of the contractual clauses.'
      ],
      respondent: [
        'The purchaser relied on the substantial delay and failure to obtain the occupancy certificate within the stipulated period.',
        'The purchaser contended that the agreement contained one-sided terms and that belated possession should not be forced upon the consumer.'
      ]
    },
    provisions: [
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-2-1-g', section: '2(1)(g)', title: 'Deficiency' },
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-2-1-o', section: '2(1)(o)', title: 'Service' },
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-2-1-r', section: '2(1)(r)', title: 'Unfair trade practice' }
    ],
    reasoning: [
      { heading: 'Inordinate delay', explanation: 'A purchaser cannot be required to wait indefinitely where the developer has failed to fulfil the contractual obligation to obtain the occupancy certificate and hand over possession within the agreed period or a reasonable time thereafter.' },
      { heading: 'Consumer remedy', explanation: 'Where delay amounts to deficiency in service, the purchaser may seek refund and appropriate compensation rather than being compelled to accept belated possession.' },
      { heading: 'One-sided terms', explanation: 'A contractual term is not automatically binding merely because it appears in a standard-form builder-buyer agreement; wholly one-sided and unfair terms may be refused enforcement in consumer proceedings.' }
    ],
    decision: 'The Supreme Court dismissed the developer’s appeals and affirmed the purchaser’s entitlement to refund with appropriate interest in view of the substantial delay and the unfair contractual terms.',
    holding: 'Inordinate delay in handing over possession is deficiency in service, and a consumer may seek refund rather than accept belated possession; wholly one-sided builder-buyer clauses may be treated as unfair and unenforceable in the consumer dispute.',
    ratioDecidendi: 'A homebuyer cannot be compelled to accept possession after inordinate contractual delay, and standard-form terms that are wholly one-sided and unfair cannot be used to defeat the consumer’s statutory remedy.',
    examPoints: [
      'Pioneer Urban Land is important for delayed possession in consumer housing disputes.',
      'Inordinate delay can amount to deficiency in service.',
      'Consumer courts may scrutinise one-sided standard-form builder-buyer clauses.'
    ],
    mcqs: [{
      id: 'pioneer-urban-land-govindan-raghavan-2019-mcq-1',
      question: 'What did the Supreme Court recognise in Pioneer Urban Land v. Govindan Raghavan?',
      options: ['A buyer must always accept delayed possession', 'Inordinate delay can amount to deficiency and justify refund', 'Builder-buyer contracts are never reviewable', 'Consumer forums cannot consider unfair terms'],
      correctIndex: 1,
      explanation: 'The Court held that substantial delay can amount to deficiency and that the purchaser could seek refund rather than accept belated possession.'
    }],
    source: {
      type: 'url',
      title: 'Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan — Supreme Court of India',
      sourceUrl: 'https://api.sci.gov.in/supremecourt/2019/23235/23235_2019_38_1501_25365_Judgement_11-Jan-2021.pdf',
      verified: true
    },
    status: 'reviewed'
  }
]
