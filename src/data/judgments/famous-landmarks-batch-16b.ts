import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_16B: Judgment[] = [
  {
    id: 'khoday-distilleries-1995',
    caseName: 'Khoday Distilleries Ltd. v. State of Karnataka',
    shortName: 'Khoday Distilleries (Liquor Res Extra Commercium)',
    citation: '(1995) 1 SCC 574',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Civil Appellate Jurisdiction',
    year: 1995,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'P.B. Sawant, J.',
      'M.N. Venkatachaliah, C.J.',
      'S. Mohan, J.',
      'B.P. Jeevan Reddy, J.',
      'S.B. Majmudar, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 19(1)(g)', 'Res Extra Commercium', 'Potable Liquor Trade', 'State Monopoly'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19(1)(g)', 'Article 47', 'Liquor Monopoly'],
    summary:
      'Landmark 5-Judge Constitution Bench summarizing the constitutional principles governing trade in potable liquor. Held that citizens have no fundamental right under Article 19(1)(g) to trade or do business in potable liquor, as it is a noxious and dangerous substance falling under res extra commercium. The State has the exclusive right and privilege to manufacture, distribute, and sell liquor.',
    facts: [
      'The State of Karnataka and other State Governments amended their respective excise rules establishing a state monopoly over the wholesale and retail distribution of potable liquor.',
      'Private distillers, brewers, and wholesale distributors were prohibited from selling potable liquor directly to retailers or consumers, mandating routing solely through state beverage corporations.',
      'Manufacturers and distributors challenged the constitutional validity of these regulations, claiming violation of their fundamental right to trade and business under Article 19(1)(g).',
      'The High Court dismissed the petitions, and the matter was referred to a 5-Judge Constitution Bench to reconcile prior divergent rulings.',
    ],
    issues: [
      'Whether a citizen has a fundamental right under Article 19(1)(g) to carry on trade or business in potable liquor.',
      'Whether the State has the exclusive privilege and power to monopolize or prohibit the manufacture and sale of potable liquor under Entry 8 of List II and Article 47 of the Constitution.',
    ],
    arguments: {
      appellant: [
        'Trade in potable liquor is a lawful economic activity recognized by state licensing; once the state permits manufacture, citizens enjoy Article 19(1)(g) protections subject only to reasonable restrictions under Article 19(6).',
        'Creating an absolute state monopoly over distribution without compensation infringes the core economic freedoms guaranteed to distillers.',
      ],
      respondent: [
        'Potable liquor is inherently injurious to public health, welfare, and morals; it is res extra commercium (outside the realm of ordinary commerce).',
        'Under Article 47 of the Directive Principles, the State is under a constitutional duty to endeavor to bring about prohibition; the State possesses exclusive privilege over liquor and may monopolize or ban it at will.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(g) & 19(6)',
        title: 'Freedom of trade, business, and reasonable restrictions',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-47',
        article: 'Article 47',
        title: 'Duty of the State to raise the level of nutrition and to improve public health',
        subjectSlug: 'constitution',
      },
    ],
    reasoning: [
      {
        heading: 'Potable liquor is res extra commercium',
        explanation:
          'Sawant, J. laid down comprehensive propositions: Potable liquor, being injurious to health, is res extra commercium. A citizen has no fundamental right to trade or do business in activities which are inherently vicious and pernicious to societal health and peace.',
      },
      {
        heading: 'Exclusive privilege and monopoly of the State',
        explanation:
          'Because there is no fundamental right to trade in liquor, the State has the exclusive right and privilege to manufacture, distribute, and sell it. The State may part with this privilege for a fee or retain an absolute monopoly over its wholesale distribution. Article 19(1)(g) cannot be invoked against state regulation or takeover of liquor distribution.',
      },
      {
        heading: 'Distinction between industrial alcohol and potable liquor',
        explanation:
          'The Court clarified that while potable alcohol falls outside Article 19(1)(g), industrial alcohol and medicinal preparations containing alcohol are ordinary commercial goods entitled to constitutional protection under Article 19(1)(g), subject to reasonable regulatory restrictions under Article 19(6).',
      },
    ],
    decision:
      'Appeals dismissed. Held that state excise regulations monopolizing the wholesale distribution of potable liquor are constitutionally valid.',
    holding:
      'No citizen has a fundamental right under Article 19(1)(g) to trade in potable liquor; the State has the sovereign privilege to regulate, monopolize, or ban it entirely.',
    ratioDecidendi:
      'Trade in potable liquor is res extra commercium. Citizens do not possess a fundamental right under Article 19(1)(g) of the Constitution of India to carry on trade or commerce in potable liquor. The State has the exclusive right, privilege, and authority under Entry 8 of List II read with Article 47 to monopolize, control, or prohibit its production, possession, and commercial distribution.',
    obiterDicta:
      'Industrial alcohol used for manufacturing chemicals is not res extra commercium, and legitimate trade in industrial alcohol remains protected by Article 19(1)(g).',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Doctrine of Res Extra Commercium applied to potable liquor under Article 19(1)(g).',
      'Summary of 16 constitutional propositions regarding liquor trade laid down by Sawant, J.',
      'Distinction between potable alcohol and industrial alcohol in constitutional law.',
    ],
    mcqs: [
      {
        id: 'khoday-mcq-1',
        question:
          'What did the 5-Judge Constitution Bench hold in Khoday Distilleries Ltd. v. State of Karnataka (1995) regarding trade in potable liquor?',
        options: [
          'It is an absolute fundamental right protected under Article 19(1)(g)',
          'It is res extra commercium, and citizens have no fundamental right under Article 19(1)(g) to trade in potable liquor',
          'It is protected under Article 21 as part of right to livelihood',
          'It cannot be regulated by State Legislatures under List II',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that trade in potable liquor is res extra commercium, meaning citizens possess no fundamental right under Article 19(1)(g) to carry on business in it.',
      },
    ],
  },
  {
    id: 'cooverjee-bharucha-1954',
    caseName: 'Cooverjee B. Bharucha v. Excise Commr. and the Chief Commr., Ajmer',
    shortName: 'Cooverjee Bharucha (Excise Auction & State Privilege)',
    citation: '1954 AIR 220',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 1954,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'Mehr Chand Mahajan, C.J.',
      'B.K. Mukherjea, J.',
      'Sudhi Ranjan Das, J.',
      'Vivian Bose, J.',
      'Ghulam Hasan, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 19(1)(g)', 'Article 19(6)', 'Excise Auction', 'Liquor Licensing'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19(6)', 'State Monopoly', 'Excise Auctions'],
    summary:
      'Early Constitution Bench decision establishing that the State may regulate trade in inherently dangerous or noxious commodities like liquor by public auction of exclusive licenses. Held that such restriction, even if it amounts to eliminating competition or creating a temporary monopoly in favor of the highest bidder, is a reasonable restriction under Article 19(6).',
    facts: [
      'The Excise Commissioner of Ajmer conducted a public auction for the license to vend country liquor in certain shops.',
      'The petitioner Cooverjee was outbid by another bidder whose bid was accepted by the Collector and confirmed by the Chief Commissioner.',
      'The petitioner challenged the auction and the provisions of the Excise Regulation, contending that granting exclusive retail rights to a single highest bidder violated his fundamental right to carry on trade under Article 19(1)(g).',
    ],
    issues: [
      'Whether the auctioning of an exclusive right to sell country liquor violates the fundamental right to carry on trade under Article 19(1)(g).',
      'Whether the complete prohibition or monopolistic auctioning of liquor licenses falls within permissible reasonable restrictions under Article 19(6).',
    ],
    arguments: {
      appellant: [
        'Every citizen has an equal right to carry on retail liquor trade; confining vending rights to the highest bidder at an auction destroys fair competition and excludes other citizens arbitrarily.',
      ],
      respondent: [
        'Because liquor is noxious, the State has the power to restrict the number of shops, eliminate unrestricted competition, and auction the privilege to ensure effective control and raise public revenue.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(g) & 19(6)',
        title: 'Freedom of trade and reasonable restrictions',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
    ],
    reasoning: [
      {
        heading: 'Reasonableness of restrictions on dangerous commodities',
        explanation:
          'Mahajan, C.J. held that what constitutes a reasonable restriction under Article 19(6) depends upon the nature of the trade. For commodities like intoxicating liquor which affect public health and safety, restrictions may extend even to total prohibition or creation of exclusive vending monopolies through public auctions.',
      },
      {
        heading: 'Control of vice through auctioning of licenses',
        explanation:
          'The purpose of auctioning liquor licenses is to reduce consumption, restrict the number of retail outlets, and raise state revenue. Creating a regulated monopoly by public auction is a time-tested administrative device that does not breach Article 19(1)(g).',
      },
    ],
    decision:
      'Petition dismissed. Auction and licensing scheme under the Excise Regulation upheld as valid under Article 19(6).',
    holding:
      'The State may regulate or monopolize liquor vending by auctioning licenses to the highest bidder without violating Article 19(1)(g).',
    ratioDecidendi:
      'Under Article 19(6) of the Constitution, the reasonableness of a restriction on the freedom of trade must be judged with reference to the nature of the business. In the case of dangerous and noxious goods such as intoxicating liquor, the State may completely prohibit trade or control it by granting exclusive privileges to the highest bidder at a public auction.',
    obiterDicta:
      'The right of every citizen to pursue a trade is subject to the condition that the trade is not inherently subversive of public safety or morals.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Scope of reasonable restrictions under Article 19(6) regarding noxious goods.',
      'Validity of public auctions for liquor vending licenses.',
      'Foundational precedent cited in subsequent liquor jurisprudence culminating in Khoday Distilleries.',
    ],
    mcqs: [
      {
        id: 'cooverjee-mcq-1',
        question:
          'In Cooverjee B. Bharucha (1954), on what ground did the Supreme Court uphold public auctions of liquor licenses?',
        options: [
          'Because the trade in noxious goods can be strictly restricted or monopolized under Article 19(6)',
          'Because Article 19 does not apply to taxation and excise laws',
          'Because only foreign corporations are excluded from liquor auctions',
          'Because the High Court had already confirmed the bid',
        ],
        correctIndex: 0,
        explanation:
          'The Court held that because intoxicating liquor is inherently dangerous to public health, strict restrictions including auctions creating exclusive vending privileges are valid under Article 19(6).',
      },
    ],
  },
  {
    id: 'rmdc-chamarbaugwala-1957',
    caseName: 'State of Bombay v. R.M.D. Chamarbaugwala',
    shortName: 'R.M.D. Chamarbaugwala (Gambling & Res Extra Commercium)',
    citation: '1957 AIR 699',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 1957,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'Sudhi Ranjan Das, C.J.',
      'N.H. Bhagwati, J.',
      'B.P. Sinha, J.',
      'Sudhanshu Kumar Das, J.',
      'P.B. Gajendragadkar, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 19(1)(g)', 'Article 301', 'Res Extra Commercium', 'Gambling Competitions', 'Severability'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 301', 'Doctrine of Severability', 'Gambling'],
    summary:
      'Seminal 5-Judge Constitution Bench decision ruling that gambling competitions and prize contests of a gambling nature do not constitute "trade, commerce, or intercourse" within the meaning of Article 19(1)(g) or Article 301. Established that criminal, immoral, and pernicious activities are res extra commercium, and laid down the definitive rules governing the doctrine of severability.',
    facts: [
      'The respondents ran prize competitions known as "crossword puzzles" through a weekly newspaper printed in Bangalore and circulated widely in the State of Bombay.',
      'The State of Bombay amended the Bombay Lotteries and Prize Competitions Control and Tax Act, 1948 to tax and regulate prize competitions, including those conducted from outside the State.',
      'The organizers challenged the Act, contending that the tax was an unconstitutional restriction on their freedom of trade and business under Article 19(1)(g) and on inter-state commerce under Article 301.',
      'The Bombay High Court held that the tax breached Article 301. The State of Bombay appealed to the Supreme Court.',
    ],
    issues: [
      'Whether gambling and prize competitions of a gambling nature are protected under Article 19(1)(g) or Article 301 as trade, commerce, or intercourse.',
      'Whether the provisions regulating gambling competitions could be severed from those regulating competitions requiring substantial skill under the doctrine of severability.',
    ],
    arguments: {
      appellant: [
        'Gambling has never been treated as legitimate trade in India from ancient times; it is inherently immoral and corrupting, and cannot claim the status of constitutional trade or commerce.',
        'The Act is severable and applies validly to gambling-based prize competitions.',
      ],
      respondent: [
        'Article 19(1)(g) and Article 301 use broad expressions covering all commercial transactions, and even gambling or lottery businesses are entitled to constitutional protection until lawfully restricted.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(g)',
        title: 'Freedom of trade, business, and profession',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-301',
        article: 'Article 301',
        title: 'Freedom of trade, commerce and intercourse',
        subjectSlug: 'constitution',
        topicId: 'art-301',
      },
    ],
    reasoning: [
      {
        heading: 'Gambling is not trade or commerce',
        explanation:
          'Das, C.J. observed that ancient Hindu scriptures, Roman law, and common law have universally condemned gambling as an unmitigated social evil. The Constitution-makers, having framed Directive Principles to promote a welfare state, could never have intended to elevate gambling, trafficking, or crime to the status of fundamental trade under Article 19(1)(g) or commercial intercourse under Article 301.',
      },
      {
        heading: 'Doctrine of severability',
        explanation:
          'The Court formulated the classical test of severability: If the valid and invalid parts of a statute are so distinct that after rejecting the invalid portion, what remains is an independent, complete, and workable code carrying out the legislative intent, the valid portion will be upheld.',
      },
    ],
    decision:
      'Appeal allowed. Held that gambling activities are res extra commercium and not protected by Article 19(1)(g) or Article 301.',
    holding:
      'Gambling competitions are not trade or commerce; activities of a gambling nature are res extra commercium and enjoy no protection under Article 19(1)(g) or Article 301.',
    ratioDecidendi:
      'Activities which are inherently vicious, pernicious, and immoral, such as gambling and lotteries, cannot be regarded as trade, commerce, or intercourse within the contemplation of Article 19(1)(g) or Article 301 of the Constitution of India. They are res extra commercium, and the Legislature is fully competent to tax, regulate, or suppress them without satisfying the tests of reasonable restrictions.',
    obiterDicta:
      'Competitions in which success depends substantially on the exercise of skill are legitimate commercial businesses protected under Article 19(1)(g).',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Doctrine of Res Extra Commercium applied to gambling and lotteries.',
      'Exclusion of gambling from Article 19(1)(g) and Article 301 freedom of trade.',
      'Classical rules governing the Doctrine of Severability formulated by Das, C.J.',
    ],
    mcqs: [
      {
        id: 'rmdc-mcq-1',
        question:
          'In State of Bombay v. R.M.D. Chamarbaugwala (1957), what did the Supreme Court hold regarding gambling competitions under Article 301?',
        options: [
          'Gambling is protected inter-state commerce under Article 301',
          'Gambling competitions are not trade, commerce, or intercourse and are res extra commercium',
          'Gambling can only be taxed by the Union Government under Entry 97 List I',
          'Gambling is protected under Article 21',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that gambling activities are not trade, commerce, or intercourse, but are res extra commercium and outside the scope of Article 19(1)(g) and Article 301.',
      },
    ],
  },
  {
    id: 'ganesh-trading-1978',
    caseName: 'Ganesh Trading Co. v. Moji Ram',
    shortName: 'Ganesh Trading Co. (Amendment of Plaint)',
    citation: '(1978) 2 SCC 91',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1978,
    bench: '2-Judge Bench',
    judges: ['P.K. Goswami, J.', 'M.H. Beg, C.J.'],
    subject: 'Civil Procedure',
    topics: ['Order VI Rule 17 CPC', 'Amendment of Pleadings', 'Curing Defective Pleadings', 'Cause of Action'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order VI Rule 17', 'Amendment of Plaint', 'Procedural Law'],
    summary:
      'Authoritative decision on Order VI Rule 17 CPC holding that procedural rules are handmaids of justice intended to facilitate, not obstruct, the administration of substantive justice. An amendment of a plaint which merely rectifies a defective description or cures an inadvertent omission without introducing a new cause of action or setting up a completely new case should be liberally granted.',
    facts: [
      'The appellant Ganesh Trading Co. filed a suit for recovery of money against the respondent Moji Ram on the basis of a promissory note.',
      'The suit was filed in the name of the partnership firm through a partner, but the plaint omitted to state explicitly that the partnership firm was dissolved and that the partner was suing as the erstwhile partner.',
      'The plaintiff applied under Order VI Rule 17 CPC to amend the plaint to incorporate the fact of dissolution and his status as winding-up partner.',
      'The trial court and High Court rejected the amendment application holding that introducing the fact of dissolution after the limitation period expired set up a new cause of action.',
    ],
    issues: [
      'Whether amending a plaint to rectify an incomplete or defective description of a party amounts to setting up a new cause of action.',
      'What are the governing principles for granting or refusing an amendment of pleadings under Order VI Rule 17 CPC?',
    ],
    arguments: {
      appellant: [
        'The suit was fundamentally for the recovery of the very same debt based on the same promissory note; the amendment merely corrected the descriptive status of the plaintiff without altering the cause of action.',
        'Rules of procedure exist to advance justice and technical defects in pleading should not defeat substantive rights.',
      ],
      respondent: [
        'The claim by an unregistered dissolved firm was defective ab initio, and allowing amendment after the limitation period barred the debt deprived the defendant of a valuable statutory defense.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'pleadings',
        section: 'Order VI Rule 17 CPC',
        title: 'Amendment of Pleadings',
        subjectSlug: 'cpc',
        topicId: 'pleadings',
      },
    ],
    reasoning: [
      {
        heading: 'Procedure is the handmaid of justice',
        explanation:
          'Beg, C.J. observed that procedural laws are intended to serve and facilitate justice, not to trap litigants in technical snares. Courts exist for deciding the merits of controversies between parties, and inadvertent omissions or clumsy drafting should not cause injustice.',
      },
      {
        heading: 'Test of introducing a new cause of action',
        explanation:
          'The Court held that an amendment which merely elucidates or clarifies existing facts or rectifies a misdescription of a party does not introduce a new cause of action. Even if a fresh suit on the amended footing would be barred by limitation, the court retains discretion to allow amendment if no new cause of action is substituted.',
      },
    ],
    decision:
      'Appeal allowed. Orders of trial court and High Court set aside; amendment of the plaint permitted.',
    holding:
      'Amendment of a plaint that rectifies an omission or misdescription without altering the cause of action must be liberally permitted under Order VI Rule 17 CPC.',
    ratioDecidendi:
      'Under Order VI Rule 17 of the Code of Civil Procedure, 1908, procedural law is designed to facilitate justice. An amendment of a plaint which merely rectifies a defective description, cures an omission, or provides fuller particulars of a cause of action already set up does not amount to creating a new cause of action, and should be liberally allowed even if the period of limitation has elapsed, provided it causes no incurable prejudice to the other side.',
    obiterDicta:
      'Courts must be circumspect when an amendment completely displaces the basis of the suit or introduces a totally inconsistent new case.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Core principles governing Order VI Rule 17 CPC amendment of plaints.',
      'Doctrine that procedure is the handmaid of justice.',
      'Distinction between introducing a new cause of action vs rectifying a misdescription.',
    ],
    mcqs: [
      {
        id: 'ganesh-trading-mcq-1',
        question:
          'In Ganesh Trading Co. v. Moji Ram (1978), how did the Supreme Court characterize rules of civil procedure under Order VI Rule 17 CPC?',
        options: [
          'Procedural rules are mandatory criminal sanctions',
          'Procedural law is the handmaid of justice, intended to facilitate, not obstruct, substantive justice',
          'Procedural rules supersede constitutional remedies under Article 226',
          'Pleadings can never be amended once issues are framed',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court famously ruled that procedural rules are handmaids of justice, and amendments that cure defects without altering the cause of action should be liberally permitted.',
      },
    ],
  },
  {
    id: 'bk-narayana-pillai-2000',
    caseName: 'B.K. Narayana Pillai v. Parameswaran Pillai',
    shortName: 'B.K. Narayana Pillai (Amendment of Written Statement)',
    citation: '(2000) 1 SCC 712',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2000,
    bench: '2-Judge Bench',
    judges: ['K.T. Thomas, J.', 'R.P. Sethi, J.'],
    subject: 'Civil Procedure',
    topics: ['Order VI Rule 17 CPC', 'Amendment of Written Statement', 'Inconsistent Pleas', 'Multiplicity of Proceedings'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order VI Rule 17', 'Written Statement', 'Pleadings'],
    summary:
      'Leading judgment on Order VI Rule 17 CPC establishing that courts must adopt a more liberal and generous approach when considering applications for amendment of a written statement as compared to a plaint. Held that a defendant is entitled to take alternative or inconsistent pleas, provided such amendment does not completely withdraw or erase an admission made in favor of the plaintiff.',
    facts: [
      'The respondent-plaintiff filed a suit for recovery of possession of immovable property, alleging that the appellant-defendant was a licensee whose license was terminated.',
      'The defendant filed a written statement denying the license and claiming to be a lessee, but omitted to plead in the alternative that even as a licensee, the license was irrevocable under Section 60(b) of the Easements Act.',
      'Later, the defendant filed an application under Order VI Rule 17 CPC to amend the written statement to take an alternative plea of protection under Section 60(b) of the Easements Act.',
      'The trial court and High Court rejected the amendment on the ground that it introduced an inconsistent defense destroying the initial plea of tenancy.',
    ],
    issues: [
      'Whether a defendant can be permitted under Order VI Rule 17 CPC to amend the written statement to introduce an alternative or inconsistent plea.',
      'Whether the principles governing amendment of written statements are identical to those governing amendment of plaints.',
    ],
    arguments: {
      appellant: [
        'A defendant is legally permitted to raise mutually inconsistent pleas in defense; introducing an alternative plea under Section 60(b) of the Easements Act does not prejudice the plaintiff.',
        'Principles of amendment for written statements are far more liberal than for plaints because no question of limitation bars a defense.',
      ],
      respondent: [
        'The defendant cannot blow hot and cold by claiming to be a lessee in the original pleading and a protected licensee in the amendment.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'pleadings',
        section: 'Order VI Rule 17 CPC',
        title: 'Amendment of Pleadings',
        subjectSlug: 'cpc',
        topicId: 'pleadings',
      },
    ],
    reasoning: [
      {
        heading: 'Liberal approach to amendment of written statements',
        explanation:
          'Sethi, J. held that the principles applicable to amendment of a plaint do not apply with equal strictness to the amendment of a written statement. A more liberal approach should be adopted in allowing amendments to a written statement because adding an alternative or inconsistent defense does not prejudice the plaintiff in the manner altering a cause of action would.',
      },
      {
        heading: 'Limits on amendment of written statement',
        explanation:
          'The Court noted the only limitation: a defendant cannot be permitted to amend the written statement if the amendment seeks to resile from or withdraw a clear admission made in favor of the plaintiff, or if it displaces the plaintiff completely from an admitted state of facts.',
      },
    ],
    decision:
      'Appeal allowed. Orders of trial court and High Court set aside; amendment of written statement allowed on payment of costs.',
    holding:
      'Courts must be more liberal in allowing amendments to written statements; alternative and inconsistent pleas may be raised so long as an admission is not withdrawn.',
    ratioDecidendi:
      'Under Order VI Rule 17 CPC, courts must adopt a more liberal and expansive approach in allowing amendments to written statements than to plaints. A defendant is fully entitled to raise alternative, additional, or inconsistent pleas in defense, provided that such amendment does not completely displace the plaintiff or withdraw a categorical admission made in the plaintiff favor.',
    obiterDicta:
      'Delay in filing an amendment application can always be compensated by awarding adequate costs to the opposite party.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Comparative strictness between amending plaints vs written statements under Order VI Rule 17 CPC.',
      'Permissibility of taking inconsistent pleas in a written statement.',
      'Prohibition against withdrawing unequivocal admissions through amendment.',
    ],
    mcqs: [
      {
        id: 'narayana-pillai-mcq-1',
        question:
          'In B.K. Narayana Pillai v. Parameswaran Pillai (2000), what principle did the Supreme Court establish regarding amendment of written statements?',
        options: [
          'Amendments to written statements are subject to stricter standards than plaints',
          'Courts should adopt a more liberal approach to amending written statements than plaints, allowing alternative or inconsistent pleas',
          'Written statements can never be amended once the trial begins',
          'Only plaintiffs can take inconsistent pleas, not defendants',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court ruled that courts must be more liberal in allowing amendments to written statements than plaints, permitting defendants to raise alternative or inconsistent pleas provided admissions are not withdrawn.',
      },
    ],
  },
  {
    id: 'kiran-singh-1954',
    caseName: 'Kiran Singh v. Chaman Paswan',
    shortName: 'Kiran Singh (Decree Without Jurisdiction Is a Nullity)',
    citation: '1954 AIR 340',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1954,
    bench: '4-Judge Bench',
    judges: [
      'B.K. Mukherjea, J.',
      'Vivian Bose, J.',
      'Ghulam Hasan, J.',
      'T.L. Venkatarama Ayyar, J.',
    ],
    subject: 'Civil Procedure',
    topics: ['Section 9 CPC', 'Jurisdiction', 'Inherent Lack of Jurisdiction', 'Nullity of Decree', 'Suits Valuation Act'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Section 9', 'Section 11 Suits Valuation Act', 'Nullity', 'Pecuniary Jurisdiction'],
    summary:
      'Classic 4-Judge Bench decision establishing the foundational principle that a decree passed by a court without jurisdiction is a coram non judice and an absolute nullity. Its invalidity can be set up at any time and in any court, including during execution and in collateral proceedings. However, held that an objection regarding pecuniary undervaluation under Section 11 of the Suits Valuation Act cannot invalidate a decree unless prejudice on the merits is demonstrated.',
    facts: [
      'The appellants filed a suit for recovery of possession in the Subordinate Judge Court, valuing the suit at Rs. 2,950 for court-fees and jurisdiction.',
      'The Subordinate Judge dismissed the suit on merits. The plaintiffs appealed to the District Court, which also dismissed the appeal.',
      'In second appeal before the High Court, the Stamp Reporter discovered that the true value of the suit was Rs. 9,980. The plaintiffs paid the deficit court fees.',
      'The plaintiffs then contended that because the real valuation was Rs. 9,980, the appeal from the Subordinate Judge lay directly to the High Court, not the District Court, and therefore the District Court decree was a complete nullity for lack of jurisdiction.',
    ],
    issues: [
      'Whether a decree passed by a court lacking inherent jurisdiction is an incurable nullity.',
      'Whether an objection to pecuniary jurisdiction based on erroneous valuation can be raised in subsequent proceedings under Section 11 of the Suits Valuation Act, 1887 without showing prejudice on the merits.',
    ],
    arguments: {
      appellant: [
        'A decree passed by a court lacking pecuniary jurisdiction is null and void; the District Court had no jurisdiction to hear the appeal, and its judgment must be set aside.',
      ],
      respondent: [
        'The plaintiffs themselves undervalued the suit and invoked the District Court jurisdiction; under Section 11 of the Suits Valuation Act, an appellate decree cannot be reversed for undervaluation unless it prejudicially affected the disposal on merits.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 's-9',
        section: 'Section 9 CPC',
        title: 'Courts to try all civil suits unless barred',
        subjectSlug: 'cpc',
        topicId: 's-9',
      },
    ],
    reasoning: [
      {
        heading: 'Fundamental defect of lack of jurisdiction',
        explanation:
          'Venkatarama Ayyar, J. delivered the classical formulation: It is a fundamental principle well established that a decree passed by a court without jurisdiction is a nullity, and that its invalidity could be set up whenever and wherever it is sought to be enforced or relied upon, even at the stage of execution and even in collateral proceedings. A defect of jurisdiction, whether pecuniary or territorial, or in respect of subject-matter, strikes at the very authority of the court.',
      },
      {
        heading: 'Special statutory rule under Section 11 Suits Valuation Act',
        explanation:
          'However, the Court explained that Section 11 of the Suits Valuation Act engrafts an exception for pecuniary and territorial undervaluation: an appellate court cannot set aside a decree merely because the hearing court lacked pecuniary jurisdiction, unless the objection was taken at the earliest stage and the undervaluation has prejudicially affected the disposal of the suit on the merits.',
      },
    ],
    decision:
      'Appeal dismissed. Decree of District Court upheld as no prejudice on the merits was established.',
    holding:
      'A decree passed without inherent jurisdiction is a nullity; but an objection to pecuniary jurisdiction under the Suits Valuation Act requires proof of prejudice on the merits.',
    ratioDecidendi:
      'A decree passed by a court lacking inherent jurisdiction is coram non judice and a complete nullity whose invalidity can be challenged at any stage, including in execution or collateral proceedings. However, by virtue of Section 11 of the Suits Valuation Act, 1887 and Section 21 of the CPC, an objection based purely on pecuniary or territorial overvaluation or undervaluation will not invalidate a decree unless it was raised at the earliest opportunity and resulted in demonstrable prejudice on the merits.',
    obiterDicta:
      'Inherent lack of jurisdiction over the subject-matter can never be cured by consent or acquiescence of parties.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Universal rule: A decree passed without jurisdiction is a nullity (coram non judice).',
      'Distinction between inherent lack of jurisdiction vs pecuniary/territorial irregularity.',
      'Application of Section 11 Suits Valuation Act and Section 21 CPC regarding prejudice on merits.',
    ],
    mcqs: [
      {
        id: 'kiran-singh-mcq-1',
        question:
          'What did the Supreme Court hold in Kiran Singh v. Chaman Paswan (1954) regarding a decree passed by a court without jurisdiction?',
        options: [
          'It is merely voidable at the option of the plaintiff',
          'It is a complete nullity and its invalidity can be raised even in execution or collateral proceedings',
          'It can only be challenged by filing a writ petition under Article 32',
          'It becomes valid after 30 days under the Limitation Act',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that a decree passed by a court without jurisdiction is a nullity whose invalidity can be set up at any time, even in execution or collateral proceedings.',
      },
    ],
  },
  {
    id: 'bl-sreedhar-estoppel-2003',
    caseName: 'B.L. Sreedhar v. K.M. Munireddy',
    shortName: 'B.L. Sreedhar (Doctrine of Estoppel)',
    citation: '(2003) 2 SCC 355',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2003,
    bench: '2-Judge Bench',
    judges: ['Doraishwamy Raju, J.', 'Shivaraj V. Patil, J.'],
    subject: 'Law of Evidence',
    topics: ['Section 115 Evidence Act', 'Section 121 BSA', 'Doctrine of Estoppel', 'Representation and Detriment'],
    tags: ['AIBE', 'Judiciary', 'BSA', 'IEA', 'Section 115', 'Section 121 BSA', 'Estoppel', 'Rule of Evidence'],
    summary:
      'Exhaustive treatise on the doctrine of estoppel under Section 115 of the Indian Evidence Act (Section 121 BSA). Clarified that estoppel is a rule of civil evidence which shuts the mouth of a party who has by intentional declaration, act, or omission caused another person to believe a thing to be true and to act upon such belief to their detriment.',
    facts: [
      'In a property dispute concerning agricultural lands in Bangalore, the respondents claimed title through ancestral partition and long possession.',
      'The appellants asserted title based on subsequent sale deeds executed by persons whose predecessors-in-interest had previously recognized and acquiesced in the respondent title in prior revenue proceedings.',
      'The respondents raised the plea of estoppel, arguing that the appellants predecessors had made unequivocal representations before revenue authorities disclaiming ownership.',
      'The trial court and High Court held that the appellants were estopped from challenging the respondents title.',
    ],
    issues: [
      'What are the essential elements required to establish the defense of estoppel under Section 115 Indian Evidence Act (Section 121 BSA)?',
      'Whether estoppel operates as a cause of action or strictly as a rule of evidence.',
    ],
    arguments: {
      appellant: [
        'Estoppel cannot confer title to immovable property; revenue entries do not create ownership, and representations made in administrative proceedings cannot extinguish substantive proprietary rights.',
      ],
      respondent: [
        'The appellants predecessors consciously led the respondents to believe they were absolute owners and encouraged them to invest in the land; Section 115 bars them from repudiating that representation.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'estoppel',
        section: 'Section 115 IEA / Section 121 BSA',
        title: 'Estoppel',
        subjectSlug: 'bsa',
        topicId: 's-121',
      },
    ],
    reasoning: [
      {
        heading: 'Estoppel is a rule of evidence, not a cause of action',
        explanation:
          'Doraishwamy Raju, J. explained the jurisprudential foundation of estoppel: Estoppel is based on the maxim allegans contraria non est audiendus (a person alleging contradictory facts shall not be heard). It is a rule of civil evidence which precludes a person from denying the truth of that which he has once asserted, but it does not of itself create a fresh cause of action.',
      },
      {
        heading: 'Essential ingredients under Section 115',
        explanation:
          'The Court enumerated three essential ingredients: (1) representation by a person to another through declaration, act, or omission; (2) intentional induction of the other person to believe that representation; and (3) alteration of position by the other person acting upon such belief to their detriment. Once these are fulfilled, the representor cannot resile.',
      },
    ],
    decision:
      'Appeals dismissed. Held that the appellants were bound by the representations of their predecessors and legally estopped from disputing title.',
    holding:
      'Estoppel under Section 115 IEA (Section 121 BSA) is a rule of evidence that prevents a party from repudiating an earlier representation upon which another altered their position.',
    ratioDecidendi:
      'Under Section 115 of the Indian Evidence Act, 1872 (Section 121 of the Bharatiya Sakshya Adhiniyam, 2023), estoppel is a rule of evidence based on equitable principles. Where one person has by representation or conduct intentionally caused another to believe a fact and to act upon that belief to alter their position, neither that person nor their representative in interest can be allowed in subsequent litigation to deny the truth of that representation.',
    obiterDicta:
      'There can be no estoppel against a statute or against constitutional provisions.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Maxim: Allegans contraria non est audiendus.',
      'Three essential conditions to prove estoppel under Section 115 IEA / Section 121 BSA.',
      'Estoppel as a shield (defense/rule of evidence), not a sword (cause of action).',
    ],
    mcqs: [
      {
        id: 'sreedhar-mcq-1',
        question:
          'In B.L. Sreedhar v. K.M. Munireddy (2003), how did the Supreme Court define the nature of the doctrine of estoppel?',
        options: [
          'It is a substantive cause of action in tort',
          'It is a rule of civil evidence that shuts the mouth of a party who made a representation inducing detrimental reliance',
          'It is an absolute rule of criminal procedure',
          'It applies only against the State under Article 12',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that estoppel is a rule of evidence based on equity that precludes a party from denying an earlier representation after the other party has altered their position to their detriment.',
      },
    ],
  },
  {
    id: 'santosh-bariyar-2009',
    caseName: 'Santosh Kumar Satishbhushan Bariyar v. State of Maharashtra',
    shortName: 'Santosh Bariyar (Bachan Singh Sentencing Framework)',
    citation: '(2009) 6 SCC 498',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2009,
    bench: '2-Judge Bench',
    judges: ['S.B. Sinha, J.', 'Cyriac Joseph, J.'],
    subject: 'Criminal Law',
    topics: ['Death Penalty', 'Sentencing Discretion', 'Mitigating Circumstances', 'Bachan Singh Compliance', 'Rehabilitation'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 302', 'Bachan Singh', 'Death Penalty', 'Sentencing Framework'],
    summary:
      'Watershed death penalty ruling by S.B. Sinha, J. conducting an in-depth review of capital sentencing jurisprudence in India. Acknowledged that previous benches had rendered several death sentences per incuriam by ignoring the Bachan Singh framework, and held that before awarding capital punishment, the State must prove beyond doubt that the option of reformation and rehabilitation is completely closed.',
    facts: [
      'The appellant Santosh Bariyar and four other young engineering students kidnapped their friend and classmate for a ransom of Rs. 10 lakhs.',
      'Fearing detection, they murdered the boy by strangulation, severed the body into pieces, and dumped the parts at various locations.',
      'The trial court and Bombay High Court sentenced Bariyar to death, categorizing the cold-blooded kidnap and murder of a close friend as a rarest of rare case.',
      'In appeal before the Supreme Court, the appellant challenged the death sentence on grounds of age, lack of criminal antecedents, and potential for reformation.',
    ],
    issues: [
      'Whether the trial court and High Court adhered to the mandatory balancing of aggravating and mitigating circumstances laid down in Bachan Singh.',
      'Whether the possibility of reformation and rehabilitation of the accused was eliminated by the prosecution before recommending capital punishment.',
    ],
    arguments: {
      appellant: [
        'The appellant was a young student aged 24 with no prior criminal record; the crime was committed under acute financial stress; there is a clear probability of reformation.',
      ],
      respondent: [
        'Kidnapping and butchering a trusted friend for money is extremely diabolical and shocks the collective conscience; death is the only proportionate penalty.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 302 IPC / Section 103 BNS',
        title: 'Punishment for murder',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
    ],
    reasoning: [
      {
        heading: 'Failure of judicial consistency and per incuriam precedents',
        explanation:
          'S.B. Sinha, J. frankly noted that several decisions of the Supreme Court awarding death penalties had departed from the Constitution Bench ruling in Bachan Singh by focusing exclusively on the brutality of the crime while ignoring the criminal and their mitigating circumstances.',
      },
      {
        heading: 'Mandatory two-step sentencing inquiry',
        explanation:
          'The Court held that the sentencing judge must undertake a two-step inquiry: (1) verify whether the case falls in the rarest of rare category; and (2) verify whether the alternative option of life imprisonment is unquestionably foreclosed. The State bears the evidentiary burden to prove that the convict cannot be reformed or rehabilitated.',
      },
    ],
    decision:
      'Appeal partly allowed. Conviction under Section 302 affirmed, but death sentence commuted to life imprisonment.',
    holding:
      'The death penalty cannot be awarded unless the prosecution proves beyond reasonable doubt that the convict is incapable of reformation and rehabilitation.',
    ratioDecidendi:
      'Under the Bachan Singh framework read with Section 354(3) CrPC, capital punishment is strictly an exception. Before imposing the death penalty, the court must conduct a rigorous two-step inquiry balancing aggravating and mitigating circumstances. The state must establish through cogent evidence that the alternative option of life imprisonment is unquestionably foreclosed and that the convict is beyond any possibility of reformation or rehabilitation.',
    obiterDicta:
      'Public outcry or collective social indignation cannot be a substitute for the objective sentencing principles mandated by law.',
    relatedCases: [
      {
        judgmentId: 'bachan-singh-1980',
        caseName: 'Bachan Singh v. State of Punjab',
        relationship: 'affirmed and systematically applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Two-step sentencing inquiry formulated in Santosh Bariyar.',
      'State burden to prove that reformation is impossible before imposing death.',
      'Critique of post-Bachan Singh sentencing inconsistencies by Sinha, J.',
    ],
    mcqs: [
      {
        id: 'bariyar-mcq-1',
        question:
          'In Santosh Kumar Satishbhushan Bariyar v. State of Maharashtra (2009), what was the critical requirement reinforced before awarding capital punishment?',
        options: [
          'The victim must be a government servant',
          'The State must establish that the possibility of reformation and rehabilitation is unquestionably foreclosed',
          'The conviction must be supported by at least three eyewitnesses',
          'The President must approve the chargesheet',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that under the Bachan Singh framework, the State must prove beyond doubt that the possibility of reformation and rehabilitation is completely foreclosed before death can be imposed.',
      },
    ],
  },
  {
    id: 'swamy-shraddananda-2008',
    caseName: 'Swamy Shraddananda (2) v. State of Karnataka',
    shortName: 'Swamy Shraddananda (Special Category Life Imprisonment)',
    citation: '(2008) 13 SCC 767',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2008,
    bench: '3-Judge Bench',
    judges: ['B.N. Agrawal, J.', 'G.S. Singhvi, J.', 'Aftab Alam, J.'],
    subject: 'Criminal Law',
    topics: ['Life Imprisonment Without Remission', 'Sentencing Powers', 'Death Penalty Substitute', 'Section 433A CrPC'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'BNSS', 'Section 302', 'Fixed Term Sentence', 'Remission'],
    summary:
      'Pioneering 3-Judge Bench ruling creating an intermediate sentencing category between capital punishment and an ordinary 14-year life sentence. Held that constitutional courts can substitute a death sentence with life imprisonment for the rest of natural life or for a specified term of 20, 25, or 30 years without the benefit of premature release or executive remission.',
    facts: [
      'The appellant Swamy Shraddananda murdered his wealthy wife Shakereh Khaleeli by drugging her with tea and burying her alive in a wooden box inside their palatial bungalow in Bangalore.',
      'He concealed the body beneath a newly cemented courtyard for over three years while systematically selling off her vast estates and properties.',
      'The trial court and Karnataka High Court sentenced him to death.',
      'In the Supreme Court, a 2-Judge Bench had a split verdict on sentence: one judge favored death, while the other favored commuting to life imprisonment. The matter was referred to a 3-Judge Bench.',
    ],
    issues: [
      'Whether the murder of a wife by burying her alive for property greed falls within the rarest of rare category warranting death.',
      'Whether the court has the judicial power to carve out a special category of life imprisonment for a fixed term or natural life without remission as a substitute for death.',
    ],
    arguments: {
      appellant: [
        'The case rested entirely on circumstantial evidence; the appellant has spent years on death row; death penalty is not warranted when life imprisonment is an adequate alternative.',
      ],
      respondent: [
        'The cold-blooded premeditation of drugging and burying a woman alive in her own home is utterly heinous and falls squarely in the rarest of rare bracket.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 302 IPC / Section 103 BNS',
        title: 'Punishment for murder',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'remission',
        section: 'Section 432 & 433A CrPC / Section 473 & 475 BNSS',
        title: 'Power to suspend or remit sentences',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'The dilemma between death and 14-year life sentence',
        explanation:
          'Aftab Alam, J. observed that courts often face a grave dilemma: awarding death seems too extreme, but sentencing to ordinary life imprisonment means the convict might be released by executive remission after barely 14 years under Section 433A CrPC, which is grossly disproportionate for atrocious murders.',
      },
      {
        heading: 'Creation of fixed-term life imprisonment without remission',
        explanation:
          'To bridge this gap, the Court held that the High Court and Supreme Court possess the judicial power to award life imprisonment for the rest of natural life or direct that the convict shall not be released on remission until completing a fixed period of 20, 25, or 30 years in prison.',
      },
    ],
    decision:
      'Death sentence commuted. Appellant sentenced to imprisonment for life with a direction that he shall not be released from prison for the rest of his natural life.',
    holding:
      'Courts can award life imprisonment for the rest of natural life or a fixed period of 20 to 30 years without premature release or executive remission.',
    ratioDecidendi:
      'The Supreme Court and High Courts have the judicial authority to carve out a special category of sentence between capital punishment and an ordinary 14-year life term. Where a case stands on the borderline of the death penalty, the court may commute the death sentence to life imprisonment for the remainder of the convict natural life, or direct that the convict shall serve a specified minimum term (such as 25 or 30 years) without eligibility for statutory remission under Section 432 or Section 433A CrPC.',
    obiterDicta:
      'Executive remission under Section 433A CrPC has often been exercised in a routine, unprincipled manner, rendering life sentences ineffective.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Creation of the intermediate sentencing category of life imprisonment without remission.',
      'Interplay between judicial sentencing power and executive remission under Section 433A CrPC.',
      'Doctrine later affirmed by the 5-Judge Constitution Bench in Union of India v. V. Sriharan (2016).',
    ],
    mcqs: [
      {
        id: 'shraddananda-mcq-1',
        question:
          'In Swamy Shraddananda (2) v. State of Karnataka (2008), what innovative sentencing doctrine did the Supreme Court create?',
        options: [
          'Automatic death penalty for murder of spouses',
          'A special category of life imprisonment for natural life or a fixed term without the possibility of executive remission',
          'Community service as punishment for murder',
          'Mandatory parole every two years for life convicts',
        ],
        correctIndex: 1,
        explanation:
          'The Court created a special category of life imprisonment for the rest of natural life or a fixed term (e.g. 25-30 years) without eligibility for premature release or executive remission.',
      },
    ],
  },
  {
    id: 'sriharan-remission-2016',
    caseName: 'Union of India v. V. Sriharan @ Murugan',
    shortName: 'Sriharan (Constitution Bench on Fixed-Term Life Sentences)',
    citation: '(2016) 7 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Criminal Reference',
    year: 2016,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'H.L. Dattu, C.J.',
      'F.M. Ibrahim Kalifulla, J.',
      'Pinaki Chandra Ghose, J.',
      'Abhay Manohar Sapre, J.',
      'U.U. Lalit, J.',
    ],
    subject: 'Criminal Law',
    topics: ['Remission of Sentence', 'Section 432-435 CrPC', 'Natural Life Sentence', 'Executive Powers vs Judicial Power'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 72', 'Article 161', 'CrPC Section 433A', 'Remission'],
    summary:
      'Authoritative 5-Judge Constitution Bench decision upholding Swamy Shraddananda. Affirmed that constitutional courts (High Courts and the Supreme Court) possess the inherent judicial power to impose a life sentence for a specified fixed term (e.g., 20, 25, 30 years) or natural life, thereby divesting the executive of the power to grant statutory remission under Sections 432 and 433 CrPC during that term.',
    facts: [
      'Following the commutation of death sentences of the convicts in the Rajiv Gandhi assassination case, the State of Tamil Nadu proposed to grant premature release and remit the remaining sentences of V. Sriharan and others under Section 432 CrPC.',
      'The Union of India filed a writ petition challenging the state unilateral decision, contending that the CBI investigated the case and Central Government concurrence under Section 435 CrPC was mandatory.',
      'A 3-Judge Bench referred several substantial constitutional questions to a 5-Judge Constitution Bench regarding the validity of fixed-term life sentences and the scope of executive remission powers.',
    ],
    issues: [
      'Whether the judicial creation of a special category of life imprisonment for a fixed term without remission in Swamy Shraddananda is constitutionally valid.',
      'Whether the State Government can grant remission under Section 432 CrPC in cases investigated by central agencies without the concurrence of the Central Government under Section 435 CrPC.',
    ],
    arguments: {
      appellant: [
        'Judicial courts can only award sentences explicitly prescribed by the Penal Code (death or life imprisonment); creating fixed periods without remission encroaches upon executive clemency under Sections 432-433 CrPC.',
        'In cases investigated by the CBI under Central Acts, the Central Government is the appropriate government whose concurrence is mandatory.',
      ],
      respondent: [
        'The power of remission is purely an executive power that cannot be curtailed or fettered in advance by judicial orders.',
        'The State Government has primacy in matters of law and order within its territory.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'remission',
        section: 'Sections 432, 433A, 435 CrPC / Sections 473, 475, 477 BNSS',
        title: 'Power to remit sentences and Central Government concurrence',
        subjectSlug: 'bnss',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-72',
        article: 'Articles 72 & 161',
        title: 'Pardoning powers of the President and Governors',
        subjectSlug: 'constitution',
      },
    ],
    reasoning: [
      {
        heading: 'Constitution Bench affirmation of special sentencing category',
        explanation:
          'Kalifulla, J. (for the majority) held that imprisonment for life means imprisonment for the rest of the natural life of the convict. The High Courts and Supreme Court, as superior courts of record, have the power to substitute death penalty with life imprisonment for a fixed term of 20, 25, or 30 years without remission. Such a direction acts as a valid judicial restriction on statutory remission under Sections 432 and 433 CrPC.',
      },
      {
        heading: 'Constitutional clemency remains untouched',
        explanation:
          'The Court clarified that while statutory remission under the CrPC is restricted by such judicial sentences, the sovereign constitutional powers of the President under Article 72 and the Governor under Article 161 remain completely unfettered and untouched.',
      },
      {
        heading: 'Mandatory concurrence under Section 435 CrPC',
        explanation:
          'The word "consultation" in Section 435(1) CrPC means full and effective "concurrence". In all cases investigated by central agencies like the CBI, the State Government cannot grant remission without the prior agreement and concurrence of the Central Government.',
      },
    ],
    decision:
      'Reference answered. Swamy Shraddananda affirmed; held that the State cannot grant remission in central agency cases without Central Government concurrence.',
    holding:
      'Constitutional courts have the power to award life sentences for fixed terms without statutory remission; consultation under Section 435 CrPC means concurrence.',
    ratioDecidendi:
      'The superior constitutional courts (High Courts and the Supreme Court) possess the legitimate judicial power to sentence a convict to life imprisonment for a specified minimum term (such as 20, 25, or 30 years) or for the rest of natural life, precluding the exercise of statutory executive remission under Sections 432 and 433 of the CrPC during that term. Furthermore, the term "consultation" in Section 435(1) CrPC means mandatory "concurrence", requiring Central Government agreement in cases investigated by central agencies.',
    obiterDicta:
      'The power to award fixed-term life sentences without remission cannot be exercised by Sessions Courts or Magistrate Courts; it is reserved exclusively for the High Courts and Supreme Court.',
    relatedCases: [
      {
        judgmentId: 'swamy-shraddananda-2008',
        caseName: 'Swamy Shraddananda (2) v. State of Karnataka',
        relationship: 'formally approved and affirmed by Constitution Bench',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Constitution Bench affirmation of fixed-term life imprisonment without statutory remission.',
      'Interpretation of consultation as concurrence under Section 435 CrPC.',
      'Preservation of sovereign clemency under Articles 72 and 161 vis-a-vis statutory remission.',
    ],
    mcqs: [
      {
        id: 'sriharan-mcq-1',
        question:
          'In Union of India v. V. Sriharan (2016), what did the 5-Judge Constitution Bench rule regarding the word "consultation" in Section 435(1) CrPC?',
        options: [
          'It means informal notification to the Central Government',
          'It means mandatory "concurrence", requiring prior Central Government approval in central agency cases',
          'It is purely optional and discretionary for the State Government',
          'It applies only to military courts',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that "consultation" under Section 435(1) CrPC means full and effective "concurrence", making Central Government approval mandatory in CBI cases.',
      },
    ],
  },
  {
    id: 'krishna-master-2010',
    caseName: 'State of U.P. v. Krishna Master',
    shortName: 'Krishna Master (Six Murders Rarest of Rare)',
    citation: '(2010) 12 SCC 324',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2010,
    bench: '2-Judge Bench',
    judges: ['H.S. Bedi, J.', 'J.M. Panchal, J.'],
    subject: 'Criminal Law',
    topics: ['Section 302 IPC', 'Section 103 BNS', 'Mass Murder', 'Death Penalty Reversal of Acquittal', 'Rarest of Rare'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 302', 'BNS', 'Death Penalty', 'Reversal of Acquittal'],
    summary:
      'Supreme Court judgment reversing an erroneous acquittal by the Allahabad High Court and imposing the death penalty. Held that the premeditated and brutal slaughter of six members of an entire family, including defenseless women and innocent sleeping children, over property animosity falls squarely within the rarest of rare doctrine, warranting the extreme penalty of death.',
    facts: [
      'The accused Krishna Master and his associates entered the house of the victims in village Jhajharpura, Mathura armed with firearms and sharp weapons.',
      'Over a boundary and property dispute, they systematically executed six members of the family, including three children aged between 10 and 15 years, while they were asleep.',
      'The trial court convicted the accused and sentenced Krishna Master and Ram Sewak to death.',
      'The Allahabad High Court reversed the convictions and acquitted all accused on flimsy grounds of minor discrepancies in eyewitness statements.',
      'The State of U.P. appealed to the Supreme Court against the acquittals.',
    ],
    issues: [
      'Whether the High Court was justified in discarding the credible testimony of injured eyewitnesses on minor technical grounds.',
      'Whether the murder of six members of an entire family, including young children, justifies the imposition of capital punishment upon reversing an acquittal.',
    ],
    arguments: {
      appellant: [
        'The eyewitnesses were natural inmates of the house who sustained injuries; minor variations after several years do not discredit their core testimony.',
        'Extinguishing an entire family tree including innocent children in a merciless planned massacre shocks the conscience of society and demands the death penalty.',
      ],
      respondent: [
        'The High Court view was a possible view based on doubts regarding lighting at night and delays in lodging the FIR; appellate court should not interfere with an order of acquittal.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 302 IPC / Section 103 BNS',
        title: 'Punishment for murder',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
    ],
    reasoning: [
      {
        heading: 'Perversity in High Court appreciation of evidence',
        explanation:
          'Bedi, J. held that the High Court committed grave error in disbelieving the testimony of rustic village eyewitnesses who had seen their parents and siblings butchered before their eyes. Hyper-technical approach and searching for mathematical precision in eyewitness testimony in brutal midnight attacks leads to miscarriage of justice.',
      },
      {
        heading: 'Rarest of rare application in mass family slaughter',
        explanation:
          'The Court held that the massacre of six unarmed and sleeping victims, including three young children, exhibited extreme depravity, brutality, and cold-blooded premeditation. In such horrifying circumstances, leniency would mock the criminal justice system. Death penalty was restored for the principal perpetrators.',
      },
    ],
    decision:
      'Appeal allowed. High Court judgment of acquittal set aside; conviction under Section 302 IPC restored and accused sentenced to death.',
    holding:
      'Mass slaughter of defenseless family members including children over property dispute falls squarely within the rarest of rare doctrine, justifying death penalty on reversal of acquittal.',
    ratioDecidendi:
      'Where the accused plan and execute the cold-blooded massacre of multiple defenseless members of a family, including innocent children asleep in their home, the crime displays extreme cruelty and depravity. Such heinous conduct leaves no room for mitigating leniency and falls squarely within the rarest of rare doctrine under Section 302 IPC (Section 103 BNS) read with Section 354(3) CrPC, justifying the imposition of the death penalty even upon reversing an erroneous acquittal.',
    obiterDicta:
      'An appellate court has full power to review evidence and reverse an acquittal if the High Court findings are manifestly perverse and contrary to record.',
    relatedCases: [
      {
        judgmentId: 'bachan-singh-1980',
        caseName: 'Bachan Singh v. State of Punjab',
        relationship: 'applied rarest of rare doctrine',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Appellate powers of the Supreme Court to reverse acquittals and award capital punishment.',
      'Evaluation of rustic and injured eyewitness testimony in brutal midnight crimes.',
      'Application of rarest of rare test to mass slaughter of family members including children.',
    ],
    mcqs: [
      {
        id: 'krishna-master-mcq-1',
        question:
          'In State of U.P. v. Krishna Master (2010), why did the Supreme Court reverse the High Court acquittal and award the death penalty?',
        options: [
          'Because the accused confessed on television',
          'Because the cold-blooded slaughter of six defenseless family members including children was a rarest of rare crime and the acquittal was perverse',
          'Because the victims belonged to a foreign embassy',
          'Because no advocate appeared for the accused',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court reversed the acquittal as perverse and imposed capital punishment because the brutal murder of six family members including children satisfied the rarest of rare test.',
      },
    ],
  },
  {
    id: 'rameshwar-evidence-1952',
    caseName: 'Rameshwar v. State of Rajasthan',
    shortName: 'Rameshwar (Child Witness & Rape Corroboration)',
    citation: '1952 AIR 54',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1952,
    bench: '3-Judge Bench',
    judges: ['M. Patanjali Sastri, C.J.', 'Sudhi Ranjan Das, J.', 'Vivian Bose, J.'],
    subject: 'Law of Evidence',
    topics: ['Child Witness Competency', 'Corroboration in Sexual Assault', 'Section 114(b) Evidence Act', 'Section 133 Evidence Act'],
    tags: ['AIBE', 'Judiciary', 'BSA', 'IEA', 'Section 118', 'Section 133', 'Child Witness', 'Corroboration'],
    summary:
      'Classical judgment by Vivian Bose, J. defining the legal principles governing child witnesses and corroboration of prosecutrix testimony. Held that corroboration is not an inflexible rule of law but a rule of prudence; an omission by a Magistrate to administer an oath to a child does not render the testimony inadmissible under Section 118 Evidence Act (Section 124 BSA) if the child possesses sufficient intellectual capacity.',
    facts: [
      'The appellant Rameshwar was convicted under Section 376 IPC for raping a young girl aged about 7 to 8 years.',
      'The trial court examined the child witness without administering an oath because of her tender age, but recorded that she understood the duty of speaking the truth.',
      'The conviction was based on her testimony corroborated by her immediate complaint to her mother and medical evidence.',
      'The High Court affirmed the conviction. In appeal to the Supreme Court, the appellant argued that child testimony without oath was illegal and that uncorroborated prosecutrix evidence could not sustain a conviction.',
    ],
    issues: [
      'Whether the testimony of a child witness recorded without an oath is admissible under Section 118 of the Indian Evidence Act.',
      'What is the true nature and scope of the rule requiring corroboration of the testimony of a prosecutrix in sexual assault trials.',
    ],
    arguments: {
      appellant: [
        'Under the Oaths Act, administering an oath is mandatory; omission to administer oath renders the child statement null and void.',
        'A child prosecutrix is akin to an accomplice under Section 133 and Section 114(b) Evidence Act, requiring independent material corroboration on all points.',
      ],
      respondent: [
        'Section 13 of the Oaths Act cures any omission to administer oath; Section 118 Evidence Act recognizes any person as competent who understands questions and can give rational answers.',
        'A prosecutrix is a victim, not an accomplice; corroboration is a rule of prudence, not an absolute statutory mandate.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'competency-witness',
        section: 'Section 118 IEA / Section 124 BSA',
        title: 'Who may testify / Competency of witnesses',
        subjectSlug: 'bsa',
      },
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'accomplice-corroboration',
        section: 'Section 133 & 114(b) IEA / Section 138 & 119 BSA',
        title: 'Accomplice testimony and presumption of corroboration',
        subjectSlug: 'bsa',
      },
    ],
    reasoning: [
      {
        heading: 'Competency of child witnesses under Section 118',
        explanation:
          'Vivian Bose, J. held that competency under Section 118 Evidence Act depends upon intellectual capacity, not physical age. If a child understands questions and gives rational answers, their evidence is admissible. Omission to administer an oath does not affect admissibility, though it may go to credibility.',
      },
      {
        heading: 'Corroboration is a rule of prudence, not law',
        explanation:
          'The Court laid down the classic English rule from Rex v. Baskerville: Corroboration is not an inflexible rule of law but a prudent rule of practice. A prosecutrix is not an accomplice. The rule requires independent evidence confirming in some material particular not only that the crime was committed, but also connecting the accused with the crime.',
      },
      {
        heading: 'Previous statement as corroboration under Section 157',
        explanation:
          'The Court held that an immediate complaint made by the child to her mother shortly after the incident is admissible as conduct under Section 8 and constitutes valid corroboration of her testimony under Section 157 Evidence Act.',
      },
    ],
    decision:
      'Appeal dismissed. Conviction and sentence under Section 376 IPC affirmed.',
    holding:
      'Child testimony without oath is admissible if the child has understanding; corroboration in sexual offences is a rule of prudence, not of law.',
    ratioDecidendi:
      'Under Section 118 of the Indian Evidence Act (Section 124 BSA), intellectual capacity to understand questions and give rational answers is the sole test of competency of a witness; omission to administer an oath does not render a child testimony inadmissible. In sexual offences, the prosecutrix is a victim and not an accomplice; corroboration of her testimony is a rule of prudence, not an inflexible requirement of law, and independent evidence confirming the crime and connecting the accused in any material particular is sufficient.',
    obiterDicta:
      'The judge must always advise himself of the danger of convicting on uncorroborated evidence, but if satisfied beyond doubt, may convict without corroboration.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Vivian Bose, J. classical formulation of corroboration rule from Rex v. Baskerville.',
      'Competency test for child witnesses under Section 118 IEA / Section 124 BSA.',
      'Distinction between a prosecutrix and an accomplice under Section 133 / Section 114(b).',
    ],
    mcqs: [
      {
        id: 'rameshwar-mcq-1',
        question:
          'In Rameshwar v. State of Rajasthan (1952), what did Vivian Bose, J. hold regarding the corroboration of a prosecutrix testimony?',
        options: [
          'It is an absolute, inflexible statutory requirement of law without which conviction is illegal',
          'It is a rule of prudence and practice, not an inflexible rule of law',
          'Corroboration can only be provided by DNA evidence',
          'The prosecutrix must be treated as an accomplice in law',
        ],
        correctIndex: 1,
        explanation:
          'Vivian Bose, J. established that corroboration of the prosecutrix is a wise rule of prudence and practice, not an inflexible rule of law.',
      },
    ],
  },
  {
    id: 'hanumant-1952',
    caseName: 'Hanumant v. State of M.P.',
    shortName: 'Hanumant (Panchsheel of Circumstantial Evidence)',
    citation: '1952 AIR 343',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1952,
    bench: '3-Judge Bench',
    judges: ['Mehr Chand Mahajan, J.', 'Sudhi Ranjan Das, J.', 'N.H. Bhagwati, J.'],
    subject: 'Law of Evidence',
    topics: ['Circumstantial Evidence', 'Panchsheel Principles', 'Chain of Circumstances', 'Standard of Proof'],
    tags: ['AIBE', 'Judiciary', 'BSA', 'IEA', 'Circumstantial Evidence', 'Five Golden Principles', 'Standard of Proof'],
    summary:
      'Monumental ruling laying down the five golden principles ("Panchsheel") of circumstantial evidence in Indian criminal jurisprudence. Held that in cases depending entirely on circumstantial evidence, the circumstances from which the conclusion of guilt is drawn must be fully established, cogent, consistent only with guilt, and completely incompatible with the innocence of the accused.',
    facts: [
      'The appellant Hanumant Govind Nargundkar was an officer in the excise department charged with criminal conspiracy, forgery, and corruption regarding the procurement of typewriters for the government.',
      'There were no direct eyewitnesses to the alleged forgery or manipulation of tender documents; the prosecution case rested entirely on circumstantial evidence, expert typewriter comparisons, and alleged confessions.',
      'The trial court and Nagpur High Court convicted the appellant.',
      'In appeal before the Supreme Court, the appellant argued that the circumstances relied upon did not exclude alternative possibilities of innocent handling.',
    ],
    issues: [
      'What are the mandatory legal tests required to sustain a criminal conviction based entirely on circumstantial evidence?',
      'Whether suspicion, however strong, can take the place of legal proof in circumstantial cases.',
    ],
    arguments: {
      appellant: [
        'The chain of circumstances was incomplete; the typewriter comparison was inconclusive, and mere departmental association cannot establish criminal conspiracy beyond reasonable doubt.',
      ],
      respondent: [
        'The cumulative probability arising from the sequence of file movements and tender receipts pointed conclusively to the guilt of the accused.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'burden-proof',
        section: 'Section 3 & Section 101-104 IEA / Section 104-107 BSA',
        title: 'Proof and burden of proof in criminal trials',
        subjectSlug: 'bsa',
        topicId: 'burden-proof',
      },
    ],
    reasoning: [
      {
        heading: 'The Panchsheel of circumstantial evidence',
        explanation:
          'Mahajan, J. formulated the timeless charter: In dealing with circumstantial evidence, the rules are well settled: (1) the circumstances from which the conclusion of guilt is to be drawn should be fully established; (2) all the facts so established should be consistent only with the hypothesis of the guilt of the accused; (3) the circumstances should be of a conclusive nature and tendency; (4) they should exclude every possible hypothesis except the one to be proved; and (5) there must be a chain of evidence so complete as not to leave any reasonable ground for the conclusion consistent with innocence.',
      },
      {
        heading: 'Suspicion cannot take the place of proof',
        explanation:
          'The Court emphasized that there is a long distance between "may be true" and "must be true". Conjecture, suspicion, or strong moral suspicion cannot bridge the gap between circumstantial probabilities and legal proof.',
      },
    ],
    decision:
      'Appeal allowed. Conviction and sentence set aside; appellant acquitted of all charges.',
    holding:
      'Circumstantial evidence must form an unbroken chain pointing exclusively to the guilt of the accused and excluding every hypothesis of innocence.',
    ratioDecidendi:
      'In criminal trials resting entirely upon circumstantial evidence, the circumstances from which the conclusion of guilt is to be drawn must be fully established beyond all reasonable doubt. All established facts must be consistent only with the hypothesis of guilt, of a conclusive nature, and must completely exclude every single hypothesis compatible with innocence. Suspicion, however grave, can never substitute for legal proof.',
    obiterDicta:
      'The mind is apt to take a pleasure in adapting circumstances to one another, which makes it doubly necessary for courts to guard against subjective speculation in circumstantial trials.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The 5 golden principles (Panchsheel) of circumstantial evidence formulated by Mahajan, J.',
      'The distance between "may be true" and "must be true" in criminal proof.',
      'Reiterated and expanded in Sharad Birdhichand Sarda v. State of Maharashtra (1984).',
    ],
    mcqs: [
      {
        id: 'hanumant-mcq-1',
        question:
          'What did the Supreme Court lay down in Hanumant v. State of M.P. (1952) regarding circumstantial evidence?',
        options: [
          'Circumstantial evidence requires only a preponderance of probabilities',
          'Circumstances must be fully established and form a complete chain excluding every hypothesis of innocence',
          'Circumstantial evidence is inadmissible in corruption cases',
          'The accused must prove his innocence if the chain is incomplete',
        ],
        correctIndex: 1,
        explanation:
          'The Court formulated the Panchsheel principles: circumstances must be fully established and form an unbroken chain pointing exclusively to guilt and excluding innocence.',
      },
    ],
  },
  {
    id: 'chacko-burns-2003',
    caseName: 'Chacko v. State of Kerala',
    shortName: 'Chacko (Dying Declaration 70% Burn Injuries)',
    citation: '(2003) 1 SCC 112',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2003,
    bench: '2-Judge Bench',
    judges: ['U.C. Banerjee, J.', 'B.N. Agrawal, J.'],
    subject: 'Law of Evidence',
    topics: ['Section 32(1) Evidence Act', 'Section 26 BSA', 'Dying Declaration', 'Severe Burns and Fitness to Depose'],
    tags: ['AIBE', 'Judiciary', 'BSA', 'IEA', 'Section 32', 'Section 26 BSA', 'Dying Declaration', 'Burn Injuries'],
    summary:
      'Important criminal evidence decision cautioning against mechanically acting upon dying declarations in cases of extensive burn injuries (70% or more). Held that when a burn victim is in a state of severe clinical shock, the court must thoroughly examine whether the deceased was in a physically and mentally conscious state to give a coherent, detailed statement without delusion, prompting, or tutoring.',
    facts: [
      'The appellant was charged with pouring kerosene on his mother and setting her on fire over a family dispute.',
      'The victim sustained over 70% burn injuries and was rushed to the hospital, where a dying declaration was recorded by the Magistrate.',
      'The doctor endorsed that the patient was conscious, but did not specifically certify that she was in a mentally fit condition to depose.',
      'The trial court and Kerala High Court convicted the accused under Section 302 IPC primarily based on the dying declaration.',
      'In appeal to the Supreme Court, the appellant contended that a woman suffering 70% third-degree burns with toxic shock could not have given an elaborate narrative.',
    ],
    issues: [
      'Whether a dying declaration recorded from a victim suffering extensive 70% burn injuries can form the sole basis of conviction without corroboration.',
      'Whether mental fitness to depose requires independent scrutiny by the court beyond a routine medical endorsement of consciousness.',
    ],
    arguments: {
      appellant: [
        'A person with 70% burns undergoes immense agony, sedation, and severe delirium; the detailed narrative implicating the accused was unnatural and the product of tutoring by relatives.',
      ],
      respondent: [
        'A dying declaration made to a Judicial Magistrate carries the highest presumption of truth and does not require corroboration.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'dying-declaration',
        section: 'Section 32(1) IEA / Section 26 BSA',
        title: 'Statements by persons who cannot be called as witnesses (Dying Declarations)',
        subjectSlug: 'bsa',
        topicId: 's-26',
      },
    ],
    reasoning: [
      {
        heading: 'Distinction between consciousness and mental fitness',
        explanation:
          'Banerjee, J. emphasized that merely being "conscious" is not equivalent to having a "sound and fit state of mind". Severe 70% burn trauma causes systemic shock, severe toxemia, and mental disorientation. Courts must satisfy themselves that the declarant was not hallucinating or influenced by family members surrounding the bed.',
      },
      {
        heading: 'Requirement of corroboration in doubtful burn declarations',
        explanation:
          'Where the physical condition of the declarant raises genuine doubts about mental clarity and capacity to narrate minute facts, it is unsafe to convict on the sole uncorroborated dying declaration.',
      },
    ],
    decision:
      'Appeal allowed. Conviction under Section 302 IPC set aside; appellant acquitted due to reasonable doubt regarding the genuineness of the dying declaration.',
    holding:
      'Dying declarations in severe burn cases (70% or more) require rigorous scrutiny; consciousness alone does not establish mental fitness to depose.',
    ratioDecidendi:
      'Under Section 32(1) of the Indian Evidence Act (Section 26 BSA), while a credible dying declaration can sustain a conviction without corroboration, in cases where the victim suffers extensive burn injuries exceeding 70%, the court must exercise great caution. The prosecution must prove that the deceased was not merely conscious, but possessed the requisite mental fitness and alertness to understand questions and make a truthful statement free from delirium, tutoring, or sedation.',
    obiterDicta:
      'A dying declaration that appears unusually detailed and ornate from a dying person in excruciating physical agony must be viewed with judicial suspicion.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Scrutiny of dying declarations in severe burn cases (70%+ burns).',
      'Distinction between consciousness vs mental fitness to depose under Section 32(1) IEA / Section 26 BSA.',
      'Judicial requirement of independent corroboration where dying declaration inspires doubt.',
    ],
    mcqs: [
      {
        id: 'chacko-mcq-1',
        question:
          'In Chacko v. State of Kerala (2003), what caution did the Supreme Court express regarding dying declarations in severe burn cases?',
        options: [
          'Dying declarations are completely inadmissible in burn cases',
          'Consciousness is not synonymous with mental fitness, and dying declarations in severe burn cases (70%+) require strict scrutiny against delirium and tutoring',
          'Only female Magistrates can record burn victim statements',
          'Severe burns automatically prove murder beyond reasonable doubt',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that consciousness is not the same as mental fitness, and dying declarations of burn victims suffering 70%+ injuries require strict judicial scrutiny.',
      },
    ],
  },
  {
    id: 'laxman-dying-declaration-2002',
    caseName: 'Laxman v. State of Maharashtra',
    shortName: 'Laxman (Constitution Bench on Dying Declaration Fitness)',
    citation: '(2002) 6 SCC 710',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Criminal Reference',
    year: 2002,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'B.N. Kirpal, C.J.',
      'K.G. Balakrishnan, J.',
      'Arijit Pasayat, J.',
      'B.P. Singh, J.',
      'H.K. Sema, J.',
    ],
    subject: 'Law of Evidence',
    topics: ['Section 32(1) Evidence Act', 'Section 26 BSA', 'Dying Declaration', 'Doctor Fitness Certificate Not Inflexible'],
    tags: ['AIBE', 'Judiciary', 'BSA', 'IEA', 'Section 32', 'Section 26 BSA', 'Dying Declaration', 'Magistrate Satisfaction'],
    summary:
      'Authoritative 5-Judge Constitution Bench ruling resolving conflicts on dying declarations. Held that a medical certificate by a doctor certifying that the declarant was in a fit state of mind is a rule of prudence and not an inflexible requirement of law; if the Magistrate recording the statement is personally satisfied that the declarant was conscious and mentally alert, the dying declaration cannot be discarded solely for want of a medical certificate.',
    facts: [
      'The appellant was tried and convicted under Section 302 IPC for pouring kerosene on his wife and setting her on fire.',
      'The dying declaration was recorded by a Judicial Magistrate who questioned the declarant, noted her clear answers, and recorded his personal satisfaction regarding her mental alertness.',
      'However, the medical officer who was present did not append a formal written certificate on the declaration paper stating that the patient was in a fit state of mind to make a statement.',
      'A 2-Judge Bench referred the issue to a Constitution Bench because prior Supreme Court judgments (such as Paparambaka Rosamma) had held that the absence of a doctor certification of fitness is fatal to the dying declaration.',
    ],
    issues: [
      'Whether a dying declaration can be rejected solely on the ground that the medical officer did not certify that the declarant was in a fit state of mind to make a statement.',
      'Whether the recording Magistrate personal satisfaction regarding the mental fitness of the declarant is legally sufficient.',
    ],
    arguments: {
      appellant: [
        'Without an expert medical certificate attesting to the mental fitness of a severely burned declarant, a magistrate cannot determine clinical fitness; uncertified dying declarations must be rejected.',
      ],
      respondent: [
        'The primary requirement is the truthfulness and voluntary nature of the declaration; if the Magistrate applies his judicial mind and satisfies himself of mental fitness, the absence of a doctor endorsement is a mere technicality.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'dying-declaration',
        section: 'Section 32(1) IEA / Section 26 BSA',
        title: 'Statements by persons who cannot be called as witnesses',
        subjectSlug: 'bsa',
        topicId: 's-26',
      },
    ],
    reasoning: [
      {
        heading: 'Medical certificate is a rule of prudence, not law',
        explanation:
          'Kirpal, C.J. held that what is essential is that the person making the declaration must be in a fit state of mind. A medical certificate is merely a rule of prudence. Where the Magistrate recording the statement was satisfied that the declarant was lucid and conscious, the dying declaration is reliable and admissible even without a doctor written endorsement.',
      },
      {
        heading: 'Overruling of Paparambaka Rosamma',
        explanation:
          'The Constitution Bench explicitly overruled Paparambaka Rosamma v. State of A.P. (1999), holding that it laid down an overly rigid and hyper-technical rule that was contrary to the spirit of Section 32(1) of the Evidence Act.',
      },
    ],
    decision:
      'Reference answered. Conviction affirmed; held that absence of medical certificate does not invalidate a dying declaration where Magistrate is satisfied of fitness.',
    holding:
      'A dying declaration cannot be discarded merely because a doctor did not certify mental fitness, if the recording Magistrate was satisfied that the declarant was lucid.',
    ratioDecidendi:
      'Under Section 32(1) of the Indian Evidence Act, 1872 (Section 26 of the Bharatiya Sakshya Adhiniyam, 2023), the requirement of a medical certificate certifying that the declarant is in a fit state of mind is a rule of prudence and not an absolute mandate of law. If the Magistrate or person recording the dying declaration testifies that the deceased was conscious, lucid, and in a fit state of mind, and the court finds the statement voluntary and truthful, the dying declaration can be safely acted upon without an explicit doctor certification.',
    obiterDicta:
      'Where a medical certificate exists, it is valuable evidence, but the court must evaluate the declaration as a whole rather than relying blindly on medical endorsements.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Constitution Bench ruling overruling Paparambaka Rosamma on dying declarations.',
      'Medical certification is a rule of prudence, not an inflexible condition of law under Section 32(1) IEA / Section 26 BSA.',
      'Sufficiency of Magistrate personal satisfaction regarding declarant mental fitness.',
    ],
    mcqs: [
      {
        id: 'laxman-mcq-1',
        question:
          'In Laxman v. State of Maharashtra (2002), what did the 5-Judge Constitution Bench rule regarding medical certification of a dying declaration?',
        options: [
          'A doctor written certificate of fitness is mandatory and without it the declaration is completely void',
          'Medical certification is a rule of prudence, not an inflexible rule of law; Magistrate satisfaction is sufficient',
          'Dying declarations must always be video recorded',
          'Only High Court judges can record dying declarations',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that a medical certification is a rule of prudence, and if the recording Magistrate is personally satisfied of the declarant fitness, the declaration is valid.',
      },
    ],
  },
  {
    id: 'all-india-bank-employees-1962',
    caseName: 'All India Bank Employees Assn. v. National Industrial Tribunal',
    shortName: 'All India Bank Employees (No Fundamental Right to Strike)',
    citation: '1962 AIR 171',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 1962,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'P.B. Gajendragadkar, J.',
      'A.K. Sarkar, J.',
      'K.N. Wanchoo, J.',
      'K.C. Das Gupta, J.',
      'N. Rajagopala Ayyangar, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 19(1)(c)', 'Right to Form Associations', 'Right to Strike', 'Collective Bargaining'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19(1)(c)', 'Article 19(4)', 'Right to Strike', 'Trade Unions'],
    summary:
      'Seminal 5-Judge Constitution Bench ruling on the scope of freedom of association under Article 19(1)(c). Held that the right to form associations or unions does not carry with it a concomitant fundamental right to strike, to declare a lockout, or to achieve every objective of the union through collective bargaining; restrictions on industrial strikes are governed by labor statutes and not by Article 19(4).',
    facts: [
      'Section 34A of the Banking Companies Act, 1949 provided that banking companies were not required to disclose confidential information regarding secret reserves and bad debts in industrial disputes before Tribunals, unless the Tribunal directed otherwise.',
      'The All India Bank Employees Association challenged the validity of Section 34A under Article 19(1)(c), contending that the right to form trade unions carried an inherent right to effective collective bargaining and access to all financial accounts.',
      'The Association further argued that the right to strike and enforce demands was a fundamental right flowing naturally from the right to form unions.',
    ],
    issues: [
      'Whether the fundamental right to form associations or unions under Article 19(1)(c) encompasses a concomitant fundamental right to strike and carry on collective bargaining.',
      'Whether Section 34A of the Banking Companies Act unconstitutionally abridged the freedom guaranteed under Article 19(1)(c).',
    ],
    arguments: {
      appellant: [
        'The freedom to form associations is meaningless unless the association has the constitutional right to effectively fulfill the objects for which it was formed, including the right to collective bargaining and strike.',
      ],
      respondent: [
        'Article 19(1)(c) guarantees only the right to form the union; once the association is formed, its activities, including strikes and collective bargaining, are subject to ordinary statutory regulation and do not enjoy fundamental rights status.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(c) & 19(4)',
        title: 'Right to form associations or unions and reasonable restrictions',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
    ],
    reasoning: [
      {
        heading: 'No concomitant fundamental right to strike',
        explanation:
          'Ayyangar, J. held that Article 19(1)(c) extends only to the formation of associations or unions. It does not carry with it a concomitant or guaranteed fundamental right to strike or to achieve every object for which the union was formed. If every activity of an association were treated as a fundamental right, the state would be powerless to regulate strikes in essential services under Article 19(4).',
      },
      {
        heading: 'Strikes are statutory rights subject to regulation',
        explanation:
          'The right to strike is a creation of the Industrial Disputes Act, subject to statutory conditions and prohibitions. It is not an organic fundamental right under Part III of the Constitution.',
      },
    ],
    decision:
      'Appeal dismissed. Section 34A of the Banking Companies Act upheld; held that there is no fundamental right to strike under Article 19(1)(c).',
    holding:
      'The right to form associations under Article 19(1)(c) does not include a fundamental right to strike or an unfettered right to collective bargaining.',
    ratioDecidendi:
      'The fundamental right to form associations or unions guaranteed under Article 19(1)(c) of the Constitution does not carry with it a concomitant fundamental right to strike, to declare a lockout, or to achieve the objects of the association through coercive methods. The right to strike is merely a statutory right governed by industrial legislation, and restrictions on strikes do not violate Article 19(1)(c).',
    obiterDicta:
      'Concomitant rights theory, if accepted, would render the specific heads of reasonable restrictions in Article 19(4) absurd and unworkable.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Rejection of the concomitant rights theory under Article 19(1)(c).',
      'Legal status of the right to strike in India: statutory right, not a fundamental right.',
      'Scope of permissible restrictions on unions under Article 19(4).',
    ],
    mcqs: [
      {
        id: 'bank-employees-mcq-1',
        question:
          'In All India Bank Employees Assn. v. National Industrial Tribunal (1962), what did the Constitution Bench hold regarding the right to strike?',
        options: [
          'The right to strike is an absolute fundamental right under Article 19(1)(a)',
          'The right to form associations under Article 19(1)(c) does not include a fundamental right to strike',
          'Only public sector bank employees have a fundamental right to strike',
          'Striking is a fundamental duty under Article 51A',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench rejected the concomitant rights theory and held that Article 19(1)(c) does not guarantee a fundamental right to strike.',
      },
    ],
  },
  {
    id: 'radhey-shyam-2015',
    caseName: 'Radhey Shyam v. Chhabi Nath',
    shortName: 'Radhey Shyam (Article 226 Writs Inapplicable to Civil Courts)',
    citation: '(2015) 5 SCC 423',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Reference',
    year: 2015,
    bench: '3-Judge Bench',
    judges: ['H.L. Dattu, C.J.', 'A.K. Sikri, J.', 'Arun Mishra, J.'],
    subject: 'Constitutional Law',
    topics: ['Article 226', 'Article 227', 'Civil Court Orders', 'Writ of Certiorari Against Subordinate Courts'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 226', 'Article 227', 'CPC', 'Supervisory Jurisdiction'],
    summary:
      'Authoritative 3-Judge Bench ruling settling the boundary between Article 226 and Article 227. Overruled Surya Dev Rai on the applicability of Article 226 to civil courts; held that judicial orders of civil courts are not amenable to writ jurisdiction under Article 226 of the Constitution, and challenges against interlocutory civil court orders lie exclusively under the supervisory jurisdiction of Article 227.',
    facts: [
      'In a civil suit for perpetual injunction, the trial court granted an interim injunction against the defendants, which was affirmed in appeal by the District Court.',
      'The defendants filed a writ petition under Article 226 of the Constitution before the Allahabad High Court challenging the civil court interim order.',
      'The High Court entertained the writ petition relying upon the Supreme Court decision in Surya Dev Rai v. Ram Chander Rai (2003).',
      'The appellants appealed to the Supreme Court, contending that a 9-Judge Constitution Bench in Naresh Shridhar Mirajkar had settled that judicial orders of civil courts cannot violate fundamental rights and cannot be challenged by writs under Article 226.',
    ],
    issues: [
      'Whether judicial orders passed by civil courts can be challenged by way of a writ petition under Article 226 of the Constitution.',
      'Whether the decision in Surya Dev Rai holding that Article 226 applies against civil court orders was correct in light of the 9-Judge bench ruling in Naresh Mirajkar.',
    ],
    arguments: {
      appellant: [
        'A civil court order is a judicial act, not an administrative or quasi-judicial action; under Naresh Mirajkar, a court of competent jurisdiction does not infringe Part III, and no writ of certiorari under Article 226 lies against it.',
      ],
      respondent: [
        'Following the 1999 CPC amendment restricting revisions under Section 115 CPC, litigants need a remedy under Article 226 to correct jurisdictional errors of civil courts.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-226',
        article: 'Article 226 & Article 227',
        title: 'Power of High Courts to issue writs and superintendence over courts',
        subjectSlug: 'constitution',
        topicId: 'art-226',
      },
    ],
    reasoning: [
      {
        heading: 'Reaffirming Naresh Mirajkar and overruling Surya Dev Rai',
        explanation:
          'Sikri, J. held that the 2-Judge Bench in Surya Dev Rai erroneously held that writ petitions under Article 226 lie against judicial orders of civil courts. The 9-Judge Constitution Bench in Naresh Shridhar Mirajkar v. State of Maharashtra (1966) categorically laid down that judicial orders of courts of competent jurisdiction do not violate fundamental rights and are not amenable to writ jurisdiction under Article 226.',
      },
      {
        heading: 'Clear distinction between Article 226 and Article 227',
        explanation:
          'The Court clarified that while Article 226 is intended for enforcement of fundamental and legal rights against the State and authorities, Article 227 confers supervisory superintendence over subordinate courts and tribunals. An order of a civil court can only be challenged under Article 227, where superintendence is exercised sparingly to keep courts within the bounds of their authority.',
      },
    ],
    decision:
      'Appeal allowed. Surya Dev Rai overruled to the extent it held Article 226 applies to civil court orders; held that civil court orders can only be challenged under Article 227.',
    holding:
      'Judicial orders of civil courts are not amenable to writ jurisdiction under Article 226; challenge lies solely under Article 227 supervisory jurisdiction.',
    ratioDecidendi:
      'Judicial orders passed by civil courts of competent jurisdiction are not amenable to writ jurisdiction under Article 226 of the Constitution of India, whether by way of certiorari or otherwise. A party aggrieved by an interlocutory or final order of a civil court must pursue statutory remedies under the Code of Civil Procedure, or invoke the supervisory superintendence of the High Court under Article 227 of the Constitution.',
    obiterDicta:
      'Supervisory jurisdiction under Article 227 is not an appellate power and cannot be used to correct mere errors of fact or law unless there is grave injustice or failure of jurisdiction.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Overruling of Surya Dev Rai regarding Article 226 writs against civil court orders.',
      'Reaffirmation of 9-Judge Bench ruling in Naresh Shridhar Mirajkar.',
      'Jurisdictional demarcation between Article 226 (writs) and Article 227 (supervisory superintendence).',
    ],
    mcqs: [
      {
        id: 'radhey-shyam-mcq-1',
        question:
          'In Radhey Shyam v. Chhabi Nath (2015), what did the Supreme Court decide regarding writ petitions under Article 226 against civil court orders?',
        options: [
          'Article 226 writ petitions are freely maintainable against all civil court orders',
          'Judicial orders of civil courts are not amenable to writ jurisdiction under Article 226; challenge lies only under Article 227',
          'Civil courts can issue Article 226 writs to High Courts',
          'Article 226 can only be invoked by government corporations in civil suits',
        ],
        correctIndex: 1,
        explanation:
          'The Court overruled Surya Dev Rai on this point and held that civil court judicial orders cannot be challenged under Article 226, but only under Article 227.',
      },
    ],
  },
  {
    id: 'surya-dev-rai-2003',
    caseName: 'Surya Dev Rai v. Ram Chander Rai',
    shortName: 'Surya Dev Rai (Interplay of CPC Section 115 and Article 227)',
    citation: '(2003) 6 SCC 675',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2003,
    bench: '2-Judge Bench',
    judges: ['R.C. Lahoti, J.', 'Ashok Bhan, J.'],
    subject: 'Civil Procedure',
    topics: ['Section 115 CPC Revision', 'Article 227', 'Supervisory Jurisdiction', 'Interlocutory Injunctions'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Section 115', 'Article 227', 'Supervisory Powers', 'Certiorari'],
    summary:
      'Landmark judgment interpreting the effect of the 1999 CPC amendment restricting revisions under Section 115. Held that the constitutional supervisory jurisdiction of High Courts under Article 227 remains completely untrammeled and cannot be curtailed or fettered by statutory amendments to the Code of Civil Procedure.',
    facts: [
      'The respondent filed a suit for permanent injunction and sought a temporary injunction under Order XXXIX Rules 1 & 2 CPC, which was rejected by the trial court and appellate court.',
      'Following the Code of Civil Procedure (Amendment) Act, 1999 which curtailed Section 115 revisions against interlocutory orders, the aggrieved party filed a petition under Article 226/227 before the High Court.',
      'The High Court dismissed the petition as not maintainable, holding that what could not be challenged in revision under Section 115 could not be bypassed through writ or supervisory petitions.',
      'The matter came before the Supreme Court to examine whether the constitutional powers under Articles 226 and 227 were curtailed by the amendment to Section 115 CPC.',
    ],
    issues: [
      'Whether the curtailment of revisional jurisdiction under Section 115 CPC by the 1999 amendment curtails or limits the High Court supervisory jurisdiction under Article 227 of the Constitution.',
      'What are the guidelines for exercising supervisory powers under Article 227 against interlocutory orders of subordinate civil courts?',
    ],
    arguments: {
      appellant: [
        'A constitutional power conferred on the High Court under Article 227 is part of the basic structure and cannot be abridged or taken away by ordinary parliamentary legislation amending the CPC.',
      ],
      respondent: [
        'Permitting Article 227 petitions against every interlocutory order will defeat the very legislative objective of the 1999 CPC amendment aimed at reducing docket explosion and trial delays.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 's-115',
        section: 'Section 115 CPC',
        title: 'Revision',
        subjectSlug: 'cpc',
        topicId: 's-115',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-227',
        article: 'Article 227',
        title: 'Power of superintendence over all courts by the High Court',
        subjectSlug: 'constitution',
        topicId: 'art-227',
      },
    ],
    reasoning: [
      {
        heading: 'Constitutional powers cannot be curtailed by statute',
        explanation:
          'Lahoti, J. held that the power of superintendence under Article 227 is a constitutional power forming part of the basic structure of the Constitution. An amendment to Section 115 CPC cannot take away or curtail the constitutional supervisory jurisdiction of High Courts.',
      },
      {
        heading: 'Self-imposed restraint in exercising Article 227',
        explanation:
          'However, the Court cautioned that supervisory jurisdiction under Article 227 is not an appellate jurisdiction or revision in disguise. It must be exercised with extreme care and circumspection only to prevent gross miscarriage of justice, jurisdictional usurpation, or perverse disregard of law.',
      },
    ],
    decision:
      'Appeal allowed. Held that Article 227 supervisory jurisdiction is not barred by Section 115 CPC amendments, but must be exercised sparingly.',
    holding:
      'The 1999 amendment to Section 115 CPC does not take away or restrict the supervisory jurisdiction of High Courts under Article 227 of the Constitution.',
    ratioDecidendi:
      'The curtailment of revisional jurisdiction under Section 115 of the Code of Civil Procedure, 1908 by ordinary statutory amendment does not and cannot restrict, abridge, or impair the constitutional supervisory jurisdiction of the High Courts under Article 227 of the Constitution of India. However, powers under Article 227 are discretionary and extraordinary, to be exercised only in cases of manifest injustice or patent lack of jurisdiction.',
    obiterDicta:
      'While the finding regarding Article 227 remains solid law, the observation in this case that Article 226 also lies against civil courts was later overruled by Radhey Shyam v. Chhabi Nath (2015).',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Immunity of Article 227 constitutional supervisory jurisdiction from statutory amendments to Section 115 CPC.',
      'Distinction between appellate power, revisional jurisdiction, and supervisory superintendence.',
      'Partial overruling of this judgment by Radhey Shyam (2015) concerning Article 226.',
    ],
    mcqs: [
      {
        id: 'surya-dev-mcq-1',
        question:
          'In Surya Dev Rai v. Ram Chander Rai (2003), what was the ruling regarding the effect of the 1999 CPC amendment to Section 115 on Article 227?',
        options: [
          'Article 227 was completely abolished for civil proceedings',
          'Statutory amendments to Section 115 CPC cannot abridge or restrict the constitutional supervisory jurisdiction of High Courts under Article 227',
          'Section 115 CPC overrides Article 227',
          'Article 227 can only be exercised after Supreme Court permission',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that ordinary statutory amendments to Section 115 CPC cannot take away or curtail the constitutional supervisory jurisdiction under Article 227.',
      },
    ],
  },
  {
    id: 'pepsu-transport-2011',
    caseName: 'Pepsu Road Transport Corp. v. Mangal Singh',
    shortName: 'Pepsu Road Transport Corp. (Pension Scheme and Regulations)',
    citation: '(2011) 11 SCC 702',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2011,
    bench: '2-Judge Bench',
    judges: ['P. Sathasivam, J.', 'J.S. Khehar, J.'],
    subject: 'Labour & Service Law',
    topics: ['Pension Regulations', 'Retirement Benefits', 'Option to Opt-in', 'Service Jurisprudence'],
    tags: ['AIBE', 'Judiciary', 'Labour', 'Pension', 'Service Law', 'Voluntary Retirement'],
    summary:
      'Authoritative decision on service jurisprudence governing statutory pension regulations. Held that where an employer introduces a new pension scheme requiring employees to exercise an option within a stipulated cut-off period, employees who consciously failed to opt in or opted to retain contributory provident fund (CPF) benefits cannot claim pension as a matter of right after retirement.',
    facts: [
      'The Pepsu Road Transport Corporation framed the PRTC Employees Pension, Gratuity and General Provident Fund Regulations, 1992 introducing a pension scheme for its employees.',
      'The regulations gave existing employees an option to switch from the Contributory Provident Fund (CPF) scheme to the pension scheme within a prescribed time limit.',
      'The respondent-employees did not exercise the option within the specified time, or explicitly opted to continue under the CPF scheme, and received their full CPF terminal benefits upon retirement.',
      'Years after retirement, they filed writ petitions claiming that pension is a deferred wage and fundamental right under Article 21, demanding pensionary benefits.',
      'The High Court allowed their claims; the Corporation appealed to the Supreme Court.',
    ],
    issues: [
      'Whether retired employees who failed to exercise their option to join a pension scheme within the stipulated statutory period can subsequently claim pension.',
      'Whether the constitutional doctrine that pension is not a bounty overrides contractual and statutory opt-in conditions.',
    ],
    arguments: {
      appellant: [
        'Pension regulations are statutory contracts with defined actuarial funds; employees who did not opt in and drew CPF benefits cannot alter their position retrospectively and destabilize the pension fund.',
      ],
      respondent: [
        'Pension is not a bounty or charity, but a deferred wage earned through long service; hyper-technical cut-off dates cannot deprive workers of pensionary security under Article 21.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 300A',
        title: 'Right to livelihood and pensionary security',
        subjectSlug: 'constitution',
      },
    ],
    reasoning: [
      {
        heading: 'Binding nature of opt-in conditions in pension regulations',
        explanation:
          'Sathasivam, J. held that while pension is a valuable social security right, the right to receive pension under a specific regulation depends on satisfying the conditions laid down in the scheme. When a scheme provides a specific time window for exercising an option, that window is of the essence. Those who chose CPF terminal benefits cannot later claim pensionary benefits.',
      },
      {
        heading: 'Financial viability and actuarial balance of pension funds',
        explanation:
          'The Court noted that pension funds are established on actuarial calculations based on the number of participating employees. Allowing ex-employees to opt in decades after retirement after enjoying CPF money would cripple public transport corporations financially.',
      },
    ],
    decision:
      'Appeals allowed. High Court judgments set aside; held that employees who failed to opt for the pension scheme are not entitled to pension.',
    holding:
      'Employees who failed to exercise their option to join a pension scheme within the prescribed time limit cannot claim pension as a matter of right after retirement.',
    ratioDecidendi:
      'In service jurisprudence, where a statutory pension scheme requires employees to exercise an option within a stipulated period to switch from a Contributory Provident Fund scheme, exercising the option within time is a mandatory condition precedent. An employee who fails to opt in or elects to receive CPF terminal benefits cannot, after retirement, invoke equitable principles or Article 21 to claim pension as a matter of right.',
    obiterDicta:
      'The principle in D.S. Nakara that pension is not a bounty applies to pensioners belonging to the same class, not to those who opted out of a pension scheme altogether.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Strict adherence to statutory opt-in periods for pension schemes.',
      'Distinction between pension as a constitutional right vs compliance with scheme regulations.',
      'Clarification of the scope and limits of the D.S. Nakara principle.',
    ],
    mcqs: [
      {
        id: 'pepsu-mcq-1',
        question:
          'In Pepsu Road Transport Corp. v. Mangal Singh (2011), what did the Supreme Court hold regarding employees who did not opt for the pension scheme within the prescribed time?',
        options: [
          'They are automatically entitled to double pension',
          'They cannot claim pension as a matter of right after retirement having received CPF benefits',
          'The Corporation must pay pension along with interest',
          'The High Court can waive all statutory regulations under Article 142',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court ruled that employees who failed to exercise their option within the prescribed window and accepted CPF benefits cannot claim pension after retirement.',
      },
    ],
  },
  {
    id: 'workmen-american-express-1985',
    caseName: 'Workmen of American Express International Banking Corp. v. Management',
    shortName: 'Workmen of American Express (Continuous Service Section 25B)',
    citation: '(1985) 4 SCC 71',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1985,
    bench: '2-Judge Bench',
    judges: ['O. Chinnappa Reddy, J.', 'R.B. Misra, J.'],
    subject: 'Labour & Service Law',
    topics: ['Section 25B Industrial Disputes Act', 'Continuous Service', 'Sundays and Paid Holidays', 'Social Justice Construction'],
    tags: ['AIBE', 'Judiciary', 'Labour Law', 'Section 25B', 'Section 25F', 'Industrial Disputes Act', 'Retrenchment'],
    summary:
      'Landmark labor jurisprudence decision authored by O. Chinnappa Reddy, J. interpreting Section 25B(2) of the Industrial Disputes Act, 1947. Held that in calculating whether a workman has completed 240 days of continuous service in a calendar year for retrenchment protection under Section 25F, paid Sundays, public holidays, and authorized leave days must be counted as days on which the workman "actually worked under the employer".',
    facts: [
      'The workmen were employed on a temporary basis as typists and clerks by the American Express International Banking Corporation.',
      'Their services were terminated without paying retrenchment compensation under Section 25F of the Industrial Disputes Act.',
      'The management contended that the workmen had only worked for 220 physical days, and that excluding paid Sundays and national holidays, they had not completed 240 days of actual work under Section 25B.',
      'The Industrial Tribunal and High Court upheld the management interpretation, holding that "actually worked" meant physical work on duty.',
      'The workmen appealed to the Supreme Court.',
    ],
    issues: [
      'Whether Sundays, paid holidays, and authorized leave days should be included in computing the 240 days of "actual work" under Section 25B(2) of the Industrial Disputes Act.',
      'How social welfare labor legislation should be interpreted by constitutional courts.',
    ],
    arguments: {
      appellant: [
        'A worker is paid for Sundays and national holidays; the employment relationship continues uninterrupted on those days; excluding rest days frustrates the protective mandate of Section 25F.',
      ],
      respondent: [
        'Section 25B uses the words "actually worked under the employer"; this requires physical labor and excludes days on which no physical work was performed.',
      ],
    },
    provisions: [
      {
        actId: 'labour',
        actName: 'Industrial Disputes Act, 1947',
        provisionId: 'retrenchment-continuous-service',
        section: 'Sections 25B & 25F Industrial Disputes Act',
        title: 'Definition of continuous service and conditions precedent to retrenchment',
        subjectSlug: 'labour',
      },
    ],
    reasoning: [
      {
        heading: 'Purposive and social welfare statutory interpretation',
        explanation:
          'Chinnappa Reddy, J. held that the Industrial Disputes Act is social justice legislation enacted to protect vulnerable workmen from arbitrary hire-and-fire. Words in a welfare statute must be interpreted to advance the statutory remedy and suppress the mischief, rather than adopting a mechanical literalism.',
      },
      {
        heading: 'Paid holidays are days on which the worker actually works',
        explanation:
          'The Court held that the expression "actually worked under the employer" cannot mean that the workman must have his hands on the machine all 24 hours. A workman is paid for Sundays and holidays because they are part of his employment contract. Therefore, paid holidays and authorized leave must be counted towards the 240-day requirement.',
      },
    ],
    decision:
      'Appeal allowed. Retrenchment held illegal for non-compliance with Section 25F; workmen ordered to be reinstated with full back wages.',
    holding:
      'Paid Sundays, holidays, and authorized leave days must be counted in calculating the 240 days of continuous service under Section 25B IDA.',
    ratioDecidendi:
      'Under Section 25B(2) of the Industrial Disputes Act, 1947, in calculating whether a workman has been in continuous service for 240 days during a period of twelve calendar months for the purpose of Section 25F, paid Sundays, public holidays, and authorized leave days must be included. A welfare statute must receive a purposive interpretation that advances social justice and protects workmen from arbitrary termination.',
    obiterDicta:
      'Mechanical and pedantic construction of labor statutes by courts destroys the constitutional goal of a socialist welfare state.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Chinnappa Reddy, J. principle of social welfare statutory interpretation in labor law.',
      'Inclusion of paid Sundays and holidays in the 240-day computation under Section 25B.',
      'Mandatory nature of Section 25F retrenchment compensation.',
    ],
    mcqs: [
      {
        id: 'american-express-mcq-1',
        question:
          'In Workmen of American Express International Banking Corp. v. Management (1985), what did the Supreme Court hold regarding the calculation of 240 days under Section 25B IDA?',
        options: [
          'Only physical hours spent on factory premises can be counted',
          'Paid Sundays, public holidays, and authorized leave days must be included in calculating the 240 days of continuous service',
          'Sundays must be deducted twice from the calculation',
          'Section 25B applies only to government servants',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that paid Sundays, holidays, and authorized leave days must be included in computing the 240 days of continuous service under Section 25B.',
      },
    ],
  },
  {
    id: 'sail-contract-labour-2001',
    caseName: 'Steel Authority of India Ltd. v. National Union Waterfront Workers',
    shortName: 'SAIL (Constitution Bench on Contract Labour Absorption)',
    citation: '(2001) 7 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 2001,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'B.N. Kirpal, J.',
      'Syed Shah Mohammed Quadri, J.',
      'M.B. Shah, J.',
      'N. Santosh Hegde, J.',
      'S.N. Variava, J.',
    ],
    subject: 'Labour & Service Law',
    topics: ['Contract Labour Act 1970', 'Section 10 Prohibition', 'Automatic Absorption', 'Industrial Adjudication'],
    tags: ['AIBE', 'Judiciary', 'Labour Law', 'Contract Labour Act', 'Section 10', 'Absorption of Labour'],
    summary:
      'Historic 5-Judge Constitution Bench decision overruling Air India Statutory Corporation. Held that the issuance of a notification prohibiting contract labour under Section 10(1) of the Contract Labour (Regulation and Abolition) Act, 1970 does not automatically result in the absorption of contract workers as regular employees of the principal employer; contract workers must establish a sham contract before an Industrial Tribunal.',
    facts: [
      'The Central Government issued notifications under Section 10(1) of the Contract Labour (Regulation and Abolition) Act, 1970 prohibiting the employment of contract labour in stockyards of SAIL and other public sector undertakings.',
      'Trade unions representing contract workers filed writ petitions claiming that upon the issuance of the prohibition notification, contract workers stood automatically absorbed as permanent regular employees of the principal employer, relying on the Supreme Court ruling in Air India Statutory Corporation (1997).',
      'The management of SAIL and other public sector companies contended that the Act nowhere provided for automatic absorption and that Air India was incorrectly decided.',
      'A 5-Judge Constitution Bench was constituted to reconsider the entire controversy.',
    ],
    issues: [
      'Whether Section 10 of the Contract Labour Act contains any express or implied mandate for automatic absorption of contract workers upon issuance of a prohibition notification.',
      'Whether the decision in Air India Statutory Corporation laid down correct law regarding automatic absorption.',
      'What is the remedy available to contract workers who claim that the contract labour system was a mere camouflage or sham?',
    ],
    arguments: {
      appellant: [
        'Neither Section 10 nor any other provision of the CLRA Act provides for automatic absorption; courts cannot legislate and impose millions of contract workers onto public corporations without sanctioned posts and selection procedures.',
      ],
      respondent: [
        'Abolishing contract labour without absorbing the workers would result in instant unemployment, defeating the beneficial purpose of the welfare legislation.',
      ],
    },
    provisions: [
      {
        actId: 'labour',
        actName: 'Contract Labour (Regulation and Abolition) Act, 1970',
        provisionId: 'contract-labour-prohibition',
        section: 'Section 10 Contract Labour Act',
        title: 'Prohibition of employment of contract labour',
        subjectSlug: 'labour',
      },
    ],
    reasoning: [
      {
        heading: 'No automatic absorption under Section 10',
        explanation:
          'Kirpal, J. held that the Contract Labour Act does not contemplate automatic absorption of contract labour upon the issuance of a notification under Section 10(1). Neither Section 10 nor the scheme of the Act provides that contract workers become direct employees of the principal employer. The Court in Air India had read words into the statute that Parliament deliberately did not include.',
      },
      {
        heading: 'Remedy for sham and camouflage contracts',
        explanation:
          'The Court held that where a contract between the principal employer and contractor is a mere camouflage or sham designed to evade labor laws, the workers can raise an industrial dispute before the Industrial Tribunal. If the Tribunal finds that the contract is a sham, it can declare the contract workers to be direct employees. However, High Courts cannot grant direct absorption under Article 226.',
      },
    ],
    decision:
      'Appeals allowed. Air India Statutory Corporation overruled; held that Section 10 does not provide for automatic absorption of contract labour.',
    holding:
      'Prohibition of contract labour under Section 10(1) CLRA Act does not result in automatic absorption of contract workers into the principal employer workforce.',
    ratioDecidendi:
      'Under the Contract Labour (Regulation and Abolition) Act, 1970, a notification issued by the appropriate Government under Section 10(1) prohibiting the employment of contract labour in any process or operation does not automatically result in the absorption of contract workers as regular employees of the principal employer. If the contract between the principal employer and the contractor is a genuine contract, no absorption can be ordered; if it is alleged to be a sham or camouflage, the remedy lies by raising an industrial dispute before an Industrial Adjudicator, not through a writ petition under Article 226.',
    obiterDicta:
      'In subsequent recruitment to sanctioned posts, principal employers should give preference to erstwhile contract workers by relaxing age bars.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Constitution Bench overruling of Air India Statutory Corporation (1997).',
      'Absence of automatic absorption under Section 10 of the CLRA Act.',
      'Forum for testing sham contracts: Industrial Tribunal vs High Court under Article 226.',
    ],
    mcqs: [
      {
        id: 'sail-mcq-1',
        question:
          'In Steel Authority of India Ltd. v. National Union Waterfront Workers (2001), what did the 5-Judge Constitution Bench hold regarding automatic absorption of contract workers?',
        options: [
          'Contract workers are automatically absorbed as permanent employees upon a Section 10 notification',
          'Section 10 does not provide for automatic absorption; workers must prove the contract was a sham before an Industrial Tribunal',
          'All contract workers must be immediately dismissed',
          'Contract labour is prohibited across all industries without notification',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench overruled Air India and held that Section 10 does not provide for automatic absorption; remedy for a sham contract lies before an Industrial Tribunal.',
      },
    ],
  },
  {
    id: 'standard-chartered-2005',
    caseName: 'Standard Chartered Bank v. Directorate of Enforcement',
    shortName: 'Standard Chartered Bank (Corporate Criminal Liability)',
    citation: '(2005) 4 SCC 530',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Reference',
    year: 2005,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'N. Santosh Hegde, J.',
      'B.N. Srikrishna, J.',
      'Arun Kumar, J.',
      'B.P. Singh, J.',
      'H.K. Sema, J.',
    ],
    subject: 'Company Law',
    topics: ['Corporate Criminal Liability', 'Mandatory Imprisonment and Fine', 'Mens Rea of Corporations', 'FERA Offences'],
    tags: ['AIBE', 'Judiciary', 'Company Law', 'Corporate Criminal Liability', 'FERA', 'IPC', 'Section 11 IPC'],
    summary:
      'Authoritative 5-Judge Constitution Bench decision settling the law of corporate criminal liability in India. Held that a company or corporate body can be prosecuted and held criminally liable for statutory offences even where the statute prescribes a mandatory minimum punishment of imprisonment and fine; in such cases, the court will impose the sentence of fine on the corporation.',
    facts: [
      'Standard Chartered Bank and other corporate banking entities were prosecuted for criminal violations under Section 56 of the Foreign Exchange Regulation Act, 1973 (FERA).',
      'Section 56 FERA prescribed that upon conviction, the offender "shall be punishable with imprisonment for a term which shall not be less than six months and also with fine".',
      'The bank contended that because a company is a juristic entity that cannot be physically imprisoned, and the statute mandates both imprisonment and fine, a company cannot be prosecuted at all for such offences.',
      'A 5-Judge Constitution Bench was constituted to resolve whether corporations enjoy blanket immunity from prosecution for offences prescribing mandatory custodial sentences.',
    ],
    issues: [
      'Whether a company or corporation can be prosecuted for an offence where the statute prescribes a mandatory minimum sentence of imprisonment and fine.',
      'Whether the inability of a court to impose physical imprisonment on a corporate entity grants it immunity from criminal prosecution.',
    ],
    arguments: {
      appellant: [
        'Penal statutes must be strictly construed; when the legislature uses the words "shall be punished with imprisonment and fine", the court cannot alter the punishment to fine only; corporations cannot be sent to prison and therefore cannot be prosecuted.',
      ],
      respondent: [
        'Under Section 11 of the IPC, the word "person" includes any company or association of persons; exempting corporations from prosecution for serious financial crimes would confer absurd immunity on white-collar corporate offenders.',
      ],
    },
    provisions: [
      {
        actId: 'company',
        actName: 'Companies Act / IPC',
        provisionId: 'corporate-liability',
        section: 'Section 11 IPC / Section 2(20) Companies Act',
        title: 'Definition of person and corporate personality',
        subjectSlug: 'company',
      },
    ],
    reasoning: [
      {
        heading: 'No corporate immunity from criminal prosecution',
        explanation:
          'Srikrishna, J. (for the majority) held that there is no immunity to companies from being prosecuted for serious statutory or penal offences. Section 11 of the IPC defines "person" to include a company. If a company could not be prosecuted for an offence requiring imprisonment and fine, corporations could commit economic crimes with complete impunity.',
      },
      {
        heading: 'Doctrine of severability in sentencing juristic persons',
        explanation:
          'The Court held that the maxim lex non cogit ad impossibilia (the law does not compel the impossible) applies. Where the statute mandates imprisonment and fine, the court can impose the custodial sentence on natural persons and the sentence of fine on the juristic company.',
      },
    ],
    decision:
      'Appeals dismissed. Held that Standard Chartered Bank and other corporations can be prosecuted under Section 56 FERA and penalized with fine.',
    holding:
      'A corporation can be prosecuted for offences prescribing mandatory imprisonment and fine; the sentence of fine alone will be imposed on the company.',
    ratioDecidendi:
      'A corporation or corporate entity can be lawfully prosecuted and convicted for statutory criminal offences even where the prescribed statutory penalty includes a mandatory term of imprisonment and fine. Applying the maxim lex non cogit ad impossibilia, the court cannot impose physical imprisonment on a juristic entity, but the court is fully competent to impose the sentence of fine. Corporate entities enjoy no immunity from criminal prosecution.',
    obiterDicta:
      'A corporation acts through its alter ego (directors and managers), whose mens rea is attributed to the corporate body under the doctrine of attribution.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Establishment of corporate criminal liability in India by 5-Judge Constitution Bench.',
      'Application of maxim: Lex non cogit ad impossibilia to criminal sentencing of corporations.',
      'Rejection of corporate immunity for offences with mandatory imprisonment.',
    ],
    mcqs: [
      {
        id: 'standard-chartered-mcq-1',
        question:
          'In Standard Chartered Bank v. Directorate of Enforcement (2005), what did the Constitution Bench hold regarding the prosecution of corporations for offences prescribing mandatory imprisonment and fine?',
        options: [
          'Corporations are completely immune from prosecution because they cannot be physically jailed',
          'Corporations can be prosecuted, and the court can impose the sentence of fine alone',
          'Corporations can only be prosecuted after all directors are jailed',
          'Corporations can only be tried by military tribunals',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that corporations can be prosecuted for offences with mandatory imprisonment, and the court can impose the sentence of fine.',
      },
    ],
  },
  {
    id: 'aneeta-hada-2012',
    caseName: 'Aneeta Hada v. Godfather Travels & Tours Pvt. Ltd.',
    shortName: 'Aneeta Hada (Section 141 NI Act Arraigning Company Mandatory)',
    citation: '(2012) 5 SCC 661',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Reference',
    year: 2012,
    bench: '3-Judge Bench',
    judges: ['K.S. Radhakrishnan, J.', 'Dipak Misra, J.', 'J. Chelameswar, J.'],
    subject: 'Company Law',
    topics: ['Section 138 NI Act', 'Section 141 NI Act', 'Vicarious Liability of Directors', 'Arraigning Company as Accused'],
    tags: ['AIBE', 'Judiciary', 'Negotiable Instruments Act', 'Section 138', 'Section 141', 'Company Law', 'Cheque Bounce'],
    summary:
      'Landmark 3-Judge Bench decision settling the law on vicarious corporate liability under Section 141 of the Negotiable Instruments Act, 1881. Held that for maintaining a prosecution under Section 141 against directors, managing directors, or officers of a company for a dishonored cheque issued by the company, arraigning the company as an accused is an indispensable condition precedent.',
    facts: [
      'A cheque issued on behalf of a company in discharge of a debt was dishonored upon presentation.',
      'The complainant filed a criminal complaint under Section 138 of the Negotiable Instruments Act solely against the authorized signatory and director (Aneeta Hada) without arraying the company itself as an accused.',
      'The director challenged the complaint, contending that under Section 141 of the NI Act, vicarious liability of individuals arises only when the company commits the primary offence, meaning the company must be prosecuted as an accused.',
      'Due to conflicting 2-Judge Bench decisions, the question was referred to a 3-Judge Bench.',
    ],
    issues: [
      'Whether a prosecution under Section 141 of the Negotiable Instruments Act against a director or authorized signatory can be maintained without arraigning the company as an accused.',
      'What is the nature of vicarious criminal liability created under Section 141 of the NI Act.',
    ],
    arguments: {
      appellant: [
        'Section 141 creates vicarious liability; the principal offender is the company on whose account the cheque was drawn; without prosecuting the principal offender, vicarious liability cannot be attached to officers.',
      ],
      respondent: [
        'The signatory signed the cheque and is personally responsible for the dishonor; technical non-joinder of the company should not defeat a prosecution under Section 138.',
      ],
    },
    provisions: [
      {
        actId: 'company',
        actName: 'Negotiable Instruments Act, 1881',
        provisionId: 'cheque-bounce-company',
        section: 'Sections 138 & 141 NI Act',
        title: 'Dishonour of cheque and offences by companies',
        subjectSlug: 'company',
      },
    ],
    reasoning: [
      {
        heading: 'Strict construction of vicarious criminal liability',
        explanation:
          'Dipak Misra, J. held that penal statutes creating vicarious liability must be strictly construed. Section 141(1) begins with the words "if the person committing an offence under Section 138 is a company". The commission of the offence by the company is an absolute condition precedent before vicarious liability can be fastened on directors or officers.',
      },
      {
        heading: 'Arraigning the company is a condition precedent',
        explanation:
          'The Court applied the doctrine of criminal jurisprudence: an individual cannot be held vicariously liable for an offence committed by a juristic entity unless the juristic entity is prosecuted alongside the individual, except where there is legal impossibility (e.g., statutory bar against prosecuting the company).',
      },
    ],
    decision:
      'Appeals allowed. Criminal proceedings against the directors quashed for failure to arraign the company as an accused.',
    holding:
      'Arraigning the company as an accused is an indispensable condition precedent for prosecuting its directors under Section 141 NI Act.',
    ratioDecidendi:
      'For maintaining a criminal prosecution under Section 141 of the Negotiable Instruments Act, 1881 against the directors, managing directors, or officers of a company for the offence of cheque bounce under Section 138, arraigning the company as an accused in the complaint is an absolute, indispensable condition precedent. Vicarious criminal liability cannot be fastened on corporate officers in the absence of the company being arrayed as an accused.',
    obiterDicta:
      'The same principle applies to other statutory enactments creating vicarious liability for offences by companies, such as the Food Safety and Essential Commodities Acts.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Mandatory requirement of arraigning the company as an accused under Section 141 NI Act.',
      'Strict construction of statutory vicarious liability in criminal law.',
      'Distinction between primary liability of the company and derivative liability of directors.',
    ],
    mcqs: [
      {
        id: 'aneeta-hada-mcq-1',
        question:
          'In Aneeta Hada v. Godfather Travels & Tours Pvt. Ltd. (2012), what did the 3-Judge Bench rule regarding Section 141 of the Negotiable Instruments Act?',
        options: [
          'Directors can be prosecuted even if the company is not arrayed as an accused',
          'Arraigning the company as an accused is an indispensable condition precedent to prosecute directors under Section 141',
          'Only the Managing Director can be sued under Section 138',
          'Cheque bounce cases against companies must be heard by the High Court',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that arraigning the company as an accused is an absolute condition precedent for maintaining a prosecution against directors under Section 141 NI Act.',
      },
    ],
  },
  {
    id: 'sarojini-ramaswami-1992',
    caseName: 'Sarojini Ramaswami v. Union of India',
    shortName: 'Sarojini Ramaswami (Judicial Inquiry and Impeachment)',
    citation: '(1992) 4 SCC 506',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Writ Jurisdiction',
    year: 1992,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'L.M. Sharma, J.',
      'M.N. Venkatachaliah, J.',
      'J.S. Verma, J.',
      'K. Ramaswamy, J.',
      'S.C. Agrawal, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 124(4)', 'Article 124(5)', 'Judges (Inquiry) Act 1968', 'Impeachment Process', 'Judicial Review'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 124', 'Removal of Judges', 'Judicial Independence'],
    summary:
      'Constitution Bench ruling examining the constitutional machinery for the removal of a Supreme Court judge under Article 124(4)/(5) and the Judges (Inquiry) Act, 1968. Held that the statutory investigation by the Inquiry Committee is a preliminary statutory process culminating in a report to Parliament; the concerned Judge has no right to challenge the Inquiry Committee report under Article 32 before Parliament completes the impeachment process.',
    facts: [
      'An Inquiry Committee constituted under the Judges (Inquiry) Act, 1968 found Justice V. Ramaswami, a sitting Judge of the Supreme Court, guilty of several charges of misbehavior involving financial irregularities during his tenure as Chief Justice of Punjab & Haryana High Court.',
      'The petitioner Sarojini Ramaswami (wife of the Judge) filed a writ petition under Article 32 seeking a copy of the Inquiry Committee report and challenging its findings prior to parliamentary consideration.',
      'The petitioner contended that principles of natural justice entitled the Judge to challenge adverse findings in the Supreme Court before Parliament debated the motion for removal.',
    ],
    issues: [
      'Whether a sitting judge found guilty of misbehavior by an Inquiry Committee under the Judges (Inquiry) Act, 1968 can seek judicial review of the report under Article 32 before Parliament debates removal.',
      'At what stage does judicial review become available in the constitutional process of removing a judge under Article 124(4)?',
    ],
    arguments: {
      appellant: [
        'An adverse finding by an Inquiry Committee seriously impinges upon the reputation and judicial status of the judge; natural justice demands judicial review before Parliament votes on removal.',
      ],
      respondent: [
        'The constitutional process of removal under Article 124(4) is entrusted exclusively to Parliament; judicial review cannot intervene midway to stall parliamentary proceedings.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-124',
        article: 'Article 124(4) & 124(5)',
        title: 'Establishment and constitution of Supreme Court / Removal of Judges',
        subjectSlug: 'constitution',
        topicId: 'art-124',
      },
    ],
    reasoning: [
      {
        heading: 'Two-stage constitutional process of removal',
        explanation:
          'Verma, J. (for the majority) held that the process of removal of a judge consists of two distinct stages: (1) the statutory stage of investigation by an Inquiry Committee under the 1968 Act; and (2) the parliamentary stage where both Houses of Parliament debate and vote by special majority under Article 124(4).',
      },
      {
        heading: 'Timing of judicial review',
        explanation:
          'The Court held that judicial review is barred at the interlocutory stage of the Inquiry Committee report. If Parliament rejects the motion, the matter ends. If Parliament adopts the motion and the President passes an order of removal, judicial review becomes available to the removed judge after the order of removal is made.',
      },
    ],
    decision:
      'Writ petition dismissed. Held that judicial review cannot be invoked against an Inquiry Committee report prior to parliamentary debate and presidential order.',
    holding:
      'Judicial review is not available against an Inquiry Committee finding of judicial misbehavior until Parliament passes the address and the President orders removal.',
    ratioDecidendi:
      'In the scheme of removal of a Supreme Court or High Court judge under Article 124(4) and Article 124(5) of the Constitution read with the Judges (Inquiry) Act, 1968, judicial review cannot be invoked midway to challenge the findings of the Inquiry Committee before Parliament considers the report. Judicial review is available only after an order of removal is passed by the President following an address by Parliament.',
    obiterDicta:
      'The requirement of supply of the report to the judge is satisfied once the report is laid before Parliament.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Two-stage process of judicial removal: statutory inquiry followed by parliamentary address.',
      'Non-maintainability of judicial review midway before parliamentary consideration.',
      'Availability of judicial review only after the President passes the order of removal.',
    ],
    mcqs: [
      {
        id: 'sarojini-mcq-1',
        question:
          'In Sarojini Ramaswami v. Union of India (1992), when did the Constitution Bench hold that judicial review of judicial removal proceedings becomes available?',
        options: [
          'Immediately upon receipt of allegations by the Speaker',
          'Only after Parliament passes the address and the President makes an order of removal',
          'Judicial review is completely barred at all times',
          'Only after the judge retires',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that judicial review cannot be invoked midway, and becomes available only after an order of removal is made by the President.',
      },
    ],
  },
  {
    id: 'sub-committee-judicial-accountability-1991',
    caseName: 'Sub-Committee on Judicial Accountability v. Union of India',
    shortName: 'Sub-Committee on Judicial Accountability (Justice V. Ramaswami Impeachment)',
    citation: '(1991) 4 SCC 699',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Writ Jurisdiction',
    year: 1991,
    bench: 'Constitution Bench (5 Judges)',
    judges: [
      'B.C. Ray, J.',
      'M.H. Kania, J.',
      'L.M. Sharma, J.',
      'M.N. Venkatachaliah, J.',
      'J.S. Verma, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 124(5)', 'Judges (Inquiry) Act 1968', 'Dissolution of Lok Sabha', 'Judicial Independence'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 124', 'Impeachment', 'Doctrine of Lapse'],
    summary:
      'Historic 5-Judge Constitution Bench decision holding that a notice of motion for presenting an address to the President for the removal of a Supreme Court or High Court judge does not lapse upon the dissolution of the House of the People (Lok Sabha). Clarified that the statutory investigation by an Inquiry Committee under the Judges (Inquiry) Act, 1968 is an independent statutory proceeding that survives dissolution.',
    facts: [
      'A notice of motion signed by 108 members of the 9th Lok Sabha for the removal of Justice V. Ramaswami was admitted by the Speaker of the Lok Sabha, who constituted a 3-member Inquiry Committee under Section 3 of the Judges (Inquiry) Act, 1968.',
      'Before the Inquiry Committee could submit its report, the 9th Lok Sabha was dissolved and the 10th Lok Sabha was elected.',
      'The Union Government took the stand that upon dissolution of the Lok Sabha, the motion for removal lapsed under Article 107 of the Constitution and the Inquiry Committee became functus officio.',
      'The Sub-Committee on Judicial Accountability filed a writ petition under Article 32 seeking a declaration that the motion and inquiry did not lapse.',
    ],
    issues: [
      'Whether a motion for the removal of a judge admitted by the Speaker under the Judges (Inquiry) Act, 1968 lapses upon the dissolution of the Lok Sabha.',
      'Whether the provisions of the Judges (Inquiry) Act, 1968 are constitutionally valid and compatible with Article 124(4) and (5).',
    ],
    arguments: {
      appellant: [
        'Removal of a judge is a sui generis constitutional proceeding governed by the Judges (Inquiry) Act enacted pursuant to Article 124(5); it is not an ordinary legislative bill subject to the doctrine of lapse under Article 107.',
      ],
      respondent: [
        'Under parliamentary law, all business pending before the Lok Sabha lapses upon its dissolution; a new Lok Sabha cannot inherit a pending motion from a dissolved House.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-124',
        article: 'Article 124(4) & 124(5)',
        title: 'Establishment and constitution of Supreme Court / Removal of Judges',
        subjectSlug: 'constitution',
        topicId: 'art-124',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-107',
        article: 'Article 107',
        title: 'Provisions as to introduction and passing of Bills and lapse on dissolution',
        subjectSlug: 'constitution',
      },
    ],
    reasoning: [
      {
        heading: 'Sui generis nature of judicial removal proceedings',
        explanation:
          'Ray, J. (for the majority) held that proceedings for removal of a judge are not ordinary legislative business governed by Article 107. The Constitution purposely enacted Article 124(5) enabling Parliament to regulate the procedure by law. Once the Speaker admits the motion and appoints an Inquiry Committee under the 1968 Act, the matter passes into the statutory domain.',
      },
      {
        heading: 'Doctrine of lapse does not apply to statutory judicial inquiries',
        explanation:
          'The Court held that the motion does not lapse upon dissolution of the Lok Sabha. The Inquiry Committee must complete its investigation and submit its report to the Speaker of the newly constituted Lok Sabha, whereupon the constitutional process continues.',
      },
    ],
    decision:
      'Writ petition allowed. Held that the motion and Inquiry Committee under the Judges (Inquiry) Act, 1968 did not lapse upon the dissolution of the 9th Lok Sabha.',
    holding:
      'A motion for removal of a judge and the statutory Inquiry Committee do not lapse upon the dissolution of the Lok Sabha.',
    ratioDecidendi:
      'A notice of motion for presenting an address to the President for the removal of a Supreme Court or High Court judge admitted by the Speaker under Section 3 of the Judges (Inquiry) Act, 1968 does not lapse upon the dissolution of the Lok Sabha. The doctrine of lapse governing ordinary legislative bills under Article 107 of the Constitution has no application to the sui generis constitutional proceedings for the removal of a judge under Article 124(4) and (5).',
    obiterDicta:
      'Judicial independence requires that removal proceedings must be insulated from the shifting tides of party politics and parliamentary dissolutions.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Inapplicability of the doctrine of lapse under Article 107 to judicial removal motions.',
      'Sui generis constitutional nature of removal proceedings under Article 124(4) and (5).',
      'Survival of the Judges (Inquiry) Act 1968 statutory committee upon Lok Sabha dissolution.',
    ],
    mcqs: [
      {
        id: 'sub-committee-mcq-1',
        question:
          'In Sub-Committee on Judicial Accountability v. Union of India (1991), what did the Constitution Bench hold regarding a motion for removal of a judge upon the dissolution of the Lok Sabha?',
        options: [
          'The motion automatically lapses under Article 107',
          'The motion and the statutory Inquiry Committee do not lapse upon the dissolution of the Lok Sabha',
          'The judge is deemed to be automatically removed',
          'Fresh signatures from 200 MPs are required',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that the motion for removal of a judge is sui generis and does not lapse upon the dissolution of the Lok Sabha.',
      },
    ],
  },
]
