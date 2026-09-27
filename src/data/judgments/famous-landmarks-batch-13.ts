import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_13: Judgment[] = [
  {
    id: 'bangalore-water-supply-1978',
    caseName: 'Bangalore Water Supply & Sewerage Board v. A. Rajappa',
    shortName: 'Bangalore Water Supply',
    citation: '(1978) 2 SCC 213',
    court: 'Supreme Court of India',
    jurisdiction: 'Labour & Industrial / Constitutional Jurisdiction',
    year: 1978,
    bench: '7-Judge Constitution Bench',
    judges: [
      'M. Hidayatullah, C.J.',
      'P.N. Bhagwati, J.',
      'V.R. Krishna Iyer, J.',
      'Jaswant Singh, J.',
      'V.D. Tulzapurkar, J.',
      'D.A. Desai, J.',
      'Y.V. Chandrachud, J.',
    ],
    subject: 'Labour & Industrial Law',
    topics: ['Definition of Industry', 'Section 2(j) IDA', 'Triple Test', 'Sovereign Functions', 'Workman Welfare'],
    tags: ['AIBE', 'Judiciary', 'Labour', 'IDA', 'Section 2(j)', 'Industry', 'Triple Test'],
    summary:
      'Foundational 7-judge Constitution Bench ruling laying down the definitive "Triple Test" for determining what constitutes an "industry" under Section 2(j) of the Industrial Disputes Act, 1947. Held that any systematic activity organized by cooperation between employer and employees for the production and distribution of goods and services to satisfy human wants constitutes an industry, bringing educational institutions, hospitals, clubs, and statutory boards within labour law protection.',
    facts: [
      'A. Rajappa and other employees were fined by the Bangalore Water Supply and Sewerage Board for alleged misconduct, and the fines were deducted from their salaries.',
      'The employees approached the Labour Court under Section 33-C(2) of the Industrial Disputes Act, 1947 for recovery of deducted wages.',
      'The Board filed a writ petition before the Karnataka High Court, claiming that as a statutory board performing civic welfare amenities (water supply and sewerage), it was not an "industry" within the meaning of Section 2(j).',
      'The High Court dismissed the petition, holding that the Board was an industry.',
      'The Board appealed to the Supreme Court. In view of conflicting earlier rulings concerning clubs (Cricket Club of India), universities (Delhi University), hospitals (Safdarjung Hospital), and statutory authorities, the matter was referred to a 7-judge Constitution Bench.',
    ],
    issues: [
      'What is the true scope and ambit of the definition of "industry" under Section 2(j) of the Industrial Disputes Act, 1947.',
      'Whether municipal statutory bodies, educational institutions, research organizations, hospitals, and social clubs fall within the definition of industry.',
      'What is the scope of the sovereign function exception to the definition of industry.',
    ],
    arguments: {
      appellant: [
        'The Board argued that supplying water and sewage disposal are essential municipal welfare services lacking profit motive or trade character.',
        'Sovereign and public utility activities performed by statutory bodies cannot be subjected to the strike and dispute mechanism of the Industrial Disputes Act.',
      ],
      respondent: [
        'The employees contended that Section 2(j) is drafted in wide terms covering any business, trade, undertaking, manufacture, or calling of employers.',
        'Absence of profit motive is irrelevant; organized cooperation between capital and labour providing civic services constitutes an industry.',
      ],
    },
    provisions: [
      {
        actId: 'labour',
        actName: 'Industrial Disputes Act, 1947',
        provisionId: 'ida-s-2j',
        section: 'Section 2(j)',
        title: 'Definition of "Industry"',
        subjectSlug: 'labour',
        topicId: 'ida-s-2j',
      },
    ],
    reasoning: [
      {
        heading: 'The Triple Test of Industry',
        explanation:
          'Krishna Iyer, J. articulated the Triple Test: Where there is (i) systematic activity, (ii) organized by co-operation between employer and employee (the direct and substantial nexus), and (iii) for the production and/or distribution of goods and services calculated to satisfy human wants and wishes (not spiritual or religious), prima facie there is an "industry".',
      },
      {
        heading: 'Absence of profit motive and sovereign functions exception',
        explanation:
          'Profit motive or philanthropic intent is entirely irrelevant. The true focus is the nature of the activity and the employer-employee relationship. The sovereign function exception is strictly confined to inalienable sovereign functions such as primary defense, foreign affairs, coinage, and legislative administration. Statutory boards providing water, transport, or sanitation perform welfare and not inalienable sovereign functions.',
      },
    ],
    decision:
      'Appeals dismissed. Bangalore Water Supply and Sewerage Board held to be an industry under Section 2(j). The 7-judge bench overruled Safdarjung Hospital, Gymkhana Club, and Delhi University cases to the extent they excluded hospitals, clubs, and universities from the definition of industry.',
    holding:
      'An enterprise constitutes an "industry" under Section 2(j) if it satisfies the Triple Test of systematic activity, employer-employee cooperation, and production/distribution of goods and services. Educational institutions, hospitals, chartered accountant firms, and municipal bodies are industries.',
    ratioDecidendi:
      'Section 2(j) of the Industrial Disputes Act must be given an expansive and functional interpretation. The presence of the Triple Test—systematic activity, organized employer-employee cooperation, and fulfillment of human material wants—creates an industry. Absence of profit motive or investment of private capital does not take an undertaking out of the definition. Sovereign functions strictly construed are excluded, but welfare and commercial activities of the State fall squarely within the Act.',
    obiterDicta:
      'Parliament was urged to step in with specific legislation tailored for universities and hospitals to balance employee rights with intellectual and healing discipline.',
    relatedCases: [
      {
        judgmentId: 'tk-rangarajan-2003',
        caseName: 'T.K. Rangarajan v. Government of Tamil Nadu',
        citation: '(2003) 2 SCC 581',
        relationship: 'harmonized',
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
      'Formulated the definitive "Triple Test" for Section 2(j) Industrial Disputes Act.',
      'Brought hospitals, universities, clubs, and municipal boards within the definition of industry.',
      'Narrowed the "sovereign functions" defense strictly to inalienable core functions (defense, foreign affairs).',
    ],
    mcqs: [
      {
        id: 'bangalore-water-mcq-1',
        question:
          'Which formulation was established by the 7-judge bench in Bangalore Water Supply & Sewerage Board v. A. Rajappa (1978)?',
        options: [
          'The doctrine of basic structure for labour codes',
          'The Triple Test for determining what constitutes an "industry" under Section 2(j) IDA',
          'The absolute exclusion of municipal corporations from labour tribunals',
          'The mandatory requirement of profit-motive for an industry',
        ],
        correctIndex: 1,
        explanation:
          'In Bangalore Water Supply (1978), the 7-judge Constitution Bench formulated the famous Triple Test (systematic activity, employer-employee cooperation, and production/distribution of goods/services) under Section 2(j) IDA.',
      },
    ],
  },
  {
    id: 'cpdr-west-bengal-2010',
    caseName: 'State of West Bengal v. Committee for Protection of Democratic Rights',
    shortName: 'State of W.B. v. CPDR',
    citation: '(2010) 3 SCC 571',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction',
    year: 2010,
    bench: '5-Judge Constitution Bench',
    judges: ['K.G. Balakrishnan, C.J.', 'R.V. Raveendran, J.', 'D.K. Jain, J.', 'P. Sathasivam, J.', 'J.M. Panchal, J.'],
    subject: 'Constitutional Law',
    topics: ['CBI Investigation', 'Article 226', 'Federalism', 'Consent of State', 'Fundamental Rights Enforcement'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 226', 'Article 32', 'CBI', 'Federalism', 'Police Powers'],
    summary:
      'Constitution Bench precedent holding that the High Courts under Article 226 and the Supreme Court under Article 32 possess plenary constitutional powers to direct the Central Bureau of Investigation (CBI) to investigate a cognizable offence committed within a State without the consent of the State Government, overriding the statutory bar under Section 6 of the DSPE Act.',
    facts: [
      'In January 2001, an armed mob of political cadres attacked the camp of an opposition political party in Garbeta, Midnapore district, West Bengal, killing 11 persons and burning down several homes.',
      'The local police registered an FIR but failed to take effective investigative steps or arrest key influential suspects.',
      'The Committee for Protection of Democratic Rights (CPDR) filed a writ petition under Article 226 before the Calcutta High Court seeking transfer of the investigation to the Central Bureau of Investigation (CBI).',
      'The High Court ordered the CBI to take over the investigation.',
      'The State of West Bengal appealed to the Supreme Court, contending that under the federal structure and Section 6 of the Delhi Special Police Establishment Act, 1946 (DSPE Act), the CBI cannot investigate an offence in a State without the consent of that State Government.',
    ],
    issues: [
      'Whether the High Court under Article 226 or the Supreme Court under Article 32 can direct the CBI to investigate a crime within a State without the prior consent of the State Government.',
      'Whether such a judicial direction violates the federal distribution of powers under the Constitution where "Police" and "Public Order" fall under List II of the Seventh Schedule.',
    ],
    arguments: {
      appellant: [
        'Police is Entry 2 of List II (State List); Section 6 of the DSPE Act specifically bars CBI jurisdiction without State consent.',
        'Judicial orders directing CBI inquiry without State consent infringe on federalism and state executive competence.',
      ],
      respondent: [
        'Fundamental rights guaranteed under Part III cannot be curtailed by statutory provisions such as Section 6 of the DSPE Act.',
        'When local police administration colludes with ruling party perpetrators, an independent agency like CBI is essential to ensure Article 21 fair investigation.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-32-226',
        article: 'Articles 32 & 226',
        title: 'Power of Constitutional Courts to issue directions, orders and writs',
        subjectSlug: 'constitution',
        topicId: 'art-32-226',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'centre-state',
        title: 'Centre-State Relations and Legislative Competence',
        subjectSlug: 'constitution',
        topicId: 'centre-state',
      },
    ],
    reasoning: [
      {
        heading: 'Supremacy of Constitutional remedies over statutory restrictions',
        explanation:
          'Balakrishnan, C.J. held that the powers of the Supreme Court and High Courts under Articles 32 and 226 are part of the basic structure of the Constitution. A statutory restriction contained in Section 6 of the DSPE Act cannot constrain or whittle down the constitutional power of judicial review to protect Part III fundamental rights.',
      },
      {
        heading: 'Federalism and self-imposed judicial caution',
        explanation:
          'Federalism is an essential feature, but it cannot be invoked to shield perpetrators of heinous crimes or perpetuate state inaction. An impartial and fair investigation is an integral component of Article 21. However, the Court cautioned that this extraordinary power must be exercised sparingly, cautiously, and only in exceptional situations where national or international ramifications exist or local police credibility is gravely compromised.',
      },
    ],
    decision:
      'Appeals dismissed. The 5-judge Constitution Bench held that Constitutional Courts can order a CBI investigation within a State without state government consent to enforce fundamental rights.',
    holding:
      'High Courts under Article 226 and the Supreme Court under Article 32 have constitutional jurisdiction to entrust an investigation to the CBI within a State without obtaining consent under Section 6 of the DSPE Act, 1946.',
    ratioDecidendi:
      'The constitutional power of the High Court under Article 226 and the Supreme Court under Article 32 to direct an investigation by the CBI within the territorial jurisdiction of a State without the consent of the State Government is not barred by Section 6 of the DSPE Act. Statutory limitations cannot override constitutional powers meant for the enforcement of fundamental rights. This power must be exercised sparingly and only in exceptional circumstances to maintain public confidence.',
    obiterDicta:
      'The Court emphasized that routine transfer of investigation to the CBI would overwhelm the central agency and undermine normal state investigative mechanisms.',
    relatedCases: [
      {
        judgmentId: 'maneka-gandhi-1978',
        caseName: 'Maneka Gandhi v. Union of India',
        citation: '(1978) 1 SCC 248',
        relationship: 'harmonized',
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
      'Settled the constitutional power of SC/HC to order CBI investigation without State consent.',
      'Reconciled federal police autonomy under Entry 2 List II with Article 21 right to fair investigation.',
      'Laid down the "sparing and exceptional" caveat to prevent routine CBI transfers.',
    ],
    mcqs: [
      {
        id: 'cpdr-west-bengal-mcq-1',
        question:
          'In State of West Bengal v. Committee for Protection of Democratic Rights (2010), what did the Constitution Bench decide regarding CBI investigations?',
        options: [
          'High Courts cannot order CBI probe without explicit consent of the State Government under Section 6 DSPE Act',
          'Constitutional Courts can order a CBI investigation within a State without State consent to protect Article 21 rights',
          'Only the Prime Minister has the power to direct CBI investigation in States',
          'CBI has no jurisdiction over any state matters under any circumstances',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that High Courts and the Supreme Court can direct the CBI to investigate in a State without the State Government consent to protect fundamental rights.',
      },
    ],
  },
  {
    id: 'shanti-star-builders-1990',
    caseName: 'Shanti Star Builders v. Narayan Khimalal Totame',
    shortName: 'Shanti Star Builders',
    citation: '(1990) 1 SCC 520',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate / Constitutional Jurisdiction',
    year: 1990,
    bench: '3-Judge Bench',
    judges: ['Ranganath Misra, J.', 'M.N. Venkatachaliah, J.', 'K.N. Singh, J.'],
    subject: 'Constitutional Law',
    topics: ['Right to Shelter', 'Article 21', 'Urban Land Ceiling', 'Weaker Sections', 'Right to Life'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 21', 'Right to Shelter', 'Housing Rights', 'Social Justice'],
    summary:
      'Landmark 3-judge bench precedent holding that the right to life under Article 21 encompasses the right to shelter and reasonable housing accommodation with basic civic amenities. Upheld monitoring mechanisms to ensure urban land ceiling exemption lands are genuinely utilized for weaker-section housing.',
    facts: [
      'The State of Maharashtra granted exemption under Section 20 of the Urban Land (Ceiling and Regulation) Act, 1976 to Shanti Star Builders over surplus vacant urban land in Thane.',
      'The exemption was granted subject to the statutory condition that the builder would construct residential tenements exclusively for the "weaker sections of society" according to prescribed sizes and subsidized costs.',
      'The builder flouted the conditions by enrolling fictitious applicants, altering tenement sizes, and selling flats to affluent commercial buyers at market rates.',
      'Aggrieved low-income citizens filed a writ petition before the Bombay High Court challenging the diversion, and the High Court appointed a committee to oversee proper allotment.',
      'The builder appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the fundamental right to life under Article 21 includes the right to reasonable shelter and housing for citizens.',
      'Whether the State and courts have a constitutional obligation to enforce weaker-section housing conditions attached to statutory exemptions under urban ceiling laws.',
    ],
    arguments: {
      appellant: [
        'The builder contended that private developers had contractual discretion in commercial implementation once statutory permissions were granted.',
        'High Court interfered excessively with commercial building operations.',
      ],
      respondent: [
        'Surplus land was released under public law exemption strictly to benefit homeless weaker sections under Article 21.',
        'Diverting affordable housing to elite commercial buyers was an abuse of statutory exemption.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Protection of life and personal liberty — Right to shelter',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Right to life includes right to shelter',
        explanation:
          'Ranganath Misra, J. observed that life under Article 21 means something more than mere animal existence. Basic necessities for a human being include food, clothing, and shelter. Shelter for a human being is not mere protection of life and limb; it is a home where he has opportunities to grow physically, mentally, intellectually, and spiritually.',
      },
      {
        heading: 'Obligation to protect housing for the weaker sections',
        explanation:
          'Since human life requires decent shelter, the State has a constitutional obligation under Directive Principles (Arts. 38, 39, 46) and Article 21 to facilitate reasonable housing accommodation. When land is exempted specifically for housing the poor, developers cannot siphon off tenements for commercial profit.',
      },
    ],
    decision:
      'Appeal disposed of with strict directions. The Supreme Court laid down detailed monitoring guidelines and constituted judicial committees to ensure that allotted tenements were strictly delivered to genuine low-income citizens.',
    holding:
      'The right to life guaranteed by Article 21 includes the right to reasonable housing accommodation and shelter with basic amenities. Exemptions granted for weaker-section housing must be strictly enforced.',
    ratioDecidendi:
      'The right to life is guaranteed to every citizen. For a human being, life does not mean mere animal existence. Food, clothing, and shelter are the three basic necessities of life. Shelter does not mean a mere roof over the head; it means an environment where a citizen has opportunities to develop physically, intellectually, and spiritually. The right to shelter is an integral facet of Article 21.',
    obiterDicta:
      'The Court observed that rapid urbanization requires proactive planning by public authorities to prevent millions from being forced into inhuman urban slums.',
    relatedCases: [
      {
        judgmentId: 'olga-tellis-1985',
        caseName: 'Olga Tellis v. Bombay Municipal Corporation',
        citation: '(1985) 3 SCC 545',
        relationship: 'expanded',
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
      'Recognized "right to shelter" as an integral component of Article 21 right to life.',
      'Expanded on Olga Tellis (pavement dwellers case) by defining housing beyond mere physical roof.',
      'Standard precedent for social housing, slum rehabilitation, and public interest property law.',
    ],
    mcqs: [
      {
        id: 'shanti-star-mcq-1',
        question:
          'In Shanti Star Builders v. Narayan Khimalal Totame (1990), the Supreme Court ruled that Article 21 encompasses which fundamental facet?',
        options: [
          'Right to absolute commercial profit in housing projects',
          'Right to shelter and reasonable accommodation as part of human life',
          'Right to acquire municipal property without compensation',
          'Exemption of builders from all town planning laws',
        ],
        correctIndex: 1,
        explanation:
          'In Shanti Star Builders (1990), the Supreme Court held that the right to shelter and reasonable housing accommodation is an integral facet of the right to life under Article 21.',
      },
    ],
  },
  {
    id: 'subramanian-swamy-defamation-2016',
    caseName: 'Subramanian Swamy v. Union of India',
    shortName: 'Subramanian Swamy (Defamation)',
    citation: '(2016) 7 SCC 221',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional / Criminal Jurisdiction',
    year: 2016,
    bench: '2-Judge Bench',
    judges: ['Dipak Misra, J.', 'P.C. Pant, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Criminal Defamation', 'Section 499 IPC', 'Article 19(1)(a)', 'Article 19(2)', 'Right to Reputation'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Constitution', 'Article 19', 'Article 21', 'Defamation', 'Free Speech'],
    summary:
      'Landmark Supreme Court precedent upholding the constitutional validity of criminal defamation under Sections 499 and 500 IPC (now Section 356 BNS). Held that the right to free speech under Article 19(1)(a) is not absolute and is reasonably restricted under Article 19(2) by "defamation"; reputation is an integral facet of the right to life with dignity under Article 21.',
    facts: [
      'Numerous politicians, journalists, and public personalities across India faced multiple criminal complaints under Section 499 and 500 IPC for critical public statements, political speeches, and investigative reporting.',
      'Dr. Subramanian Swamy, Rahul Gandhi, Arvind Kejriwal, and several media editors filed writ petitions under Article 32 challenging the constitutionality of Sections 499 and 500 IPC.',
      'Petitioners argued that criminalising speech exerts a chilling effect on democratic discourse, investigative journalism, and political debate, and that civil remedies for damages under tort law are sufficient.',
    ],
    issues: [
      'Whether criminal defamation under Sections 499 and 500 IPC violates the fundamental right to freedom of speech and expression under Article 19(1)(a).',
      'Whether criminal defamation is a reasonable restriction under Article 19(2).',
      'Whether the right to reputation is an integral facet of the right to life and dignity under Article 21, justifying penal remedies against defamatory speech.',
    ],
    arguments: {
      appellant: [
        'Sections 499 and 500 IPC create an unconstitutional chilling effect on free speech and political debate.',
        'Defamation should be restricted to a civil tort remedy; penal incarceration is disproportionate and archaic.',
      ],
      respondent: [
        'Article 19(2) explicitly includes "defamation" as a permissible ground of reasonable restriction.',
        'Reputation is an essential element of personal dignity protected under Article 21 that the State must safeguard.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'defamation-misc',
        section: 'Section 356 (legacy s. 499/500 IPC)',
        title: 'Defamation and punishment for defamation',
        subjectSlug: 'bns',
        topicId: 'defamation-misc',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a) & 19(2)',
        title: 'Freedom of speech and expression and reasonable restrictions (defamation)',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
    ],
    reasoning: [
      {
        heading: 'Defamation as an explicit constitutional exception',
        explanation:
          'Dipak Misra, J. observed that the framers of the Constitution specifically enumerated "defamation" in Article 19(2) as a head of restriction on free speech. The concept of defamation in Article 19(2) includes both civil and criminal defamation, and Parliament has legislative competence to maintain criminal sanctions.',
      },
      {
        heading: 'Balancing free speech with right to reputation under Article 21',
        explanation:
          'Reputation is an integral part of Article 21 and human dignity. One cannot use freedom of speech under Article 19(1)(a) to murder another reputation without justification. Sections 499 and 500 IPC contain ten detailed statutory exceptions (including truth for public good and fair comment) that safeguard legitimate debate and journalism.',
      },
    ],
    decision:
      'Writ petitions dismissed. Sections 499 and 500 IPC and Section 199 CrPC held constitutionally valid. The Supreme Court held that the right to free speech does not include a license to defame another person.',
    holding:
      'Sections 499 and 500 of the Indian Penal Code are constitutionally valid. Criminal defamation is a reasonable restriction on free speech under Article 19(2), protecting the constitutional right to reputation under Article 21.',
    ratioDecidendi:
      'Right to freedom of speech and expression is not an absolute or unbridled right. It is subject to reasonable restrictions under Article 19(2), which explicitly incorporates "defamation". The right to reputation is an inseparable constituent of personal liberty under Article 21. A balance must be struck between Article 19(1)(a) and Article 21. The statutory safeguards and ten exceptions provided in Section 499 ensure that honest criticism, truth in public interest, and bona fide opinions are protected.',
    obiterDicta:
      'Trial Magistrates were cautioned to exercise great care and scrutiny before issuing summons in criminal defamation complaints to prevent malicious harassment.',
    relatedCases: [
      {
        judgmentId: 'shreya-singhal-2015',
        caseName: 'Shreya Singhal v. Union of India',
        citation: '(2015) 5 SCC 1',
        relationship: 'distinguished',
      },
      {
        judgmentId: 'puttaswamy-2017',
        caseName: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        relationship: 'harmonized',
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
      'Upheld the constitutional validity of criminal defamation under Sections 499/500 IPC / s. 356 BNS.',
      'Affirmed that "defamation" in Article 19(2) includes criminal defamation.',
      'Recognized reputation as an integral component of Article 21 personal liberty and dignity.',
    ],
    mcqs: [
      {
        id: 'subramanian-swamy-mcq-1',
        question:
          'In Subramanian Swamy v. Union of India (2016), the Supreme Court upheld the constitutional validity of Sections 499 and 500 IPC on the ground that:',
        options: [
          'Reputation is an integral facet of Article 21 and defamation is an explicit restriction under Article 19(2)',
          'All speech against public figures is strictly prohibited',
          'Civil remedies for defamation are barred in India',
          'Defamation applies only to written statements and not spoken words',
        ],
        correctIndex: 0,
        explanation:
          'The Supreme Court held that reputation is protected under Article 21 and criminal defamation is a permissible reasonable restriction under Article 19(2).',
      },
    ],
  },
  {
    id: 'raj-narain-1975',
    caseName: 'State of U.P. v. Raj Narain',
    shortName: 'State of U.P. v. Raj Narain',
    citation: '(1975) 4 SCC 428',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate / Constitutional Jurisdiction',
    year: 1975,
    bench: '5-Judge Constitution Bench',
    judges: ['A.N. Ray, C.J.', 'K.K. Mathew, J.', 'P.N. Bhagwati, J.', 'V.R. Krishna Iyer, J.', 'S. Murtaza Fazal Ali, J.'],
    subject: 'Bharatiya Sakshya Adhiniyam',
    topics: ['Right to Know', 'Section 123 Evidence Act', 'State Privilege', 'Article 19(1)(a)', 'Open Governance'],
    tags: ['AIBE', 'Judiciary', 'BSA', 'Evidence', 'Constitution', 'Article 19', 'Right to Know', 'State Privilege'],
    summary:
      'Foundational 5-judge Constitution Bench precedent establishing the "Right to Know" under Article 19(1)(a) and restricting the State’s claim of privilege under Section 123 of the Indian Evidence Act (s. 165 BSA). Held that in a government of responsibility like ours, where all agents of the public must be responsible for their conduct, the citizens have a right to know every public act.',
    facts: [
      'In the election petition filed by Raj Narain challenging the election of Prime Minister Indira Gandhi from the Rae Bareli constituency, the election petitioner called for the production of the "Blue Book".',
      'The Blue Book contained secret security and tour instructions issued by the Central Government for the protection of the Prime Minister when traveling.',
      'The State of Uttar Pradesh claimed absolute privilege from producing the document under Section 123 of the Evidence Act, contending that it was an unpublished state record relating to affairs of State whose disclosure would injure public interest.',
      'The Allahabad High Court rejected the claim of privilege, and the State appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the State can claim absolute privilege against disclosure of government documents under Section 123 of the Indian Evidence Act.',
      'Whether the people of India have a constitutional right to know public acts under Article 19(1)(a) of the Constitution.',
    ],
    arguments: {
      appellant: [
        'The Blue Book relates to the personal security of the Prime Minister, an affair of State under Section 123 Evidence Act.',
        'Heads of departments have sole discretion to withhold disclosure when public interest requires secrecy.',
      ],
      respondent: [
        'Routine security guidelines for VIP travel do not constitute high secrets of state affecting national defense.',
        'In a democracy, transparency is the rule and secrecy the exception; privilege cannot be claimed to conceal election law violations.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023',
        provisionId: 'witnesses',
        section: 'Section 165 (legacy s. 123 Evidence Act)',
        title: 'Evidence as to affairs of State and privilege against disclosure',
        subjectSlug: 'bsa',
        topicId: 'witnesses',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a)',
        title: 'Freedom of speech and expression — Right to Know',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
    ],
    reasoning: [
      {
        heading: 'Foundational birth of the Right to Know',
        explanation:
          'Mathew, J. delivered the immortal dictum: "In a government of responsibility like ours, where all the agents of the public must be responsible for their conduct, there can be but few secrets. The people of this country have a right to know every public act, everything that is done in a public way, by their public functionaries. The right to know, which is derived from the concept of freedom of speech, though not absolute, is a factor which should make one wary, when secrecy is claimed for transactions which can at any rate have no repercussion on public security."',
      },
      {
        heading: 'Scope of Section 123 Evidence Act',
        explanation:
          'Courts have the ultimate authority to inspect the document and balance the public interest in non-disclosure (state security) against the public interest in the administration of justice and disclosure. Privilege cannot be asserted routinely for administrative manuals or tour instructions.',
      },
    ],
    decision:
      'Appeal allowed in part and remanded to High Court. The Supreme Court held that the claim of privilege must be examined by the Court by balancing the competing public interests, firmly establishing that citizens have a constitutional right to know public acts.',
    holding:
      'The right to know is derived from the freedom of speech and expression under Article 19(1)(a). The State does not have an absolute privilege under Section 123 of the Evidence Act; the judiciary possesses the power to inspect documents and determine whether disclosure would genuinely injure public interest.',
    ratioDecidendi:
      'The people of this country have a constitutional right under Article 19(1)(a) to know every public act done by their public functionaries. Privilege under Section 123 Evidence Act is not an executive prerogative; the court is the final arbiter to balance public interest in confidentiality against public interest in justice.',
    obiterDicta:
      'To cover with the veil of secrecy the common routines of administrative governance is contrary to the spirit of a democratic society.',
    relatedCases: [
      {
        judgmentId: 'indira-gandhi-election-1975',
        caseName: 'Indira Nehru Gandhi v. Raj Narain',
        citation: '1975 Supp SCC 1',
        relationship: 'harmonized',
      },
      {
        judgmentId: 'sp-gupta-1981',
        caseName: 'S.P. Gupta v. Union of India',
        citation: '1981 Supp SCC 87',
        relationship: 'elaborated',
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
      'Origin of the "Right to Know" doctrine under Article 19(1)(a), paving the way for the RTI Act.',
      'Authoritative ruling on state privilege under Section 123 of the Evidence Act / s. 165 BSA.',
      'Established that courts have the power to inspect documents claimed as privileged.',
    ],
    mcqs: [
      {
        id: 'raj-narain-mcq-1',
        question:
          'In State of U.P. v. Raj Narain (1975), which fundamental principle did Mathew, J. enunciate regarding governance and Article 19(1)(a)?',
        options: [
          'The executive has absolute discretion to withhold any document without court inspection',
          'Citizens have a right to know every public act done by their public functionaries',
          'Election petitions against Prime Ministers are barred under Article 329',
          'The Right to Information is unconstitutional',
        ],
        correctIndex: 1,
        explanation:
          'In State of U.P. v. Raj Narain (1975), the Supreme Court enunciated that in a responsible government, the people have a constitutional right to know every public act under Article 19(1)(a).',
      },
    ],
  },
  {
    id: 'mc-mehta-ganga-1987',
    caseName: 'M.C. Mehta v. Union of India (Ganga Pollution Case)',
    shortName: 'M.C. Mehta (Ganga Pollution)',
    citation: '(1987) 4 SCC 463',
    court: 'Supreme Court of India',
    jurisdiction: 'Writ Jurisdiction (Article 32)',
    year: 1987,
    bench: '2-Judge Bench',
    judges: ['E.S. Venkataramiah, J.', 'K.N. Singh, J.'],
    subject: 'Law of Torts',
    topics: ['Ganga Pollution', 'Environmental Protection', 'Article 21', 'Public Nuisance', 'Kanpur Tanneries'],
    tags: ['AIBE', 'Judiciary', 'Environment', 'Torts', 'PIL', 'Article 21', 'Public Nuisance', 'Water Pollution'],
    summary:
      'Seminal environmental law precedent ordering the closure of industrial tanneries at Jajmau, Kanpur discharging untreated toxic chemical effluents into River Ganga. Held that closure of non-compliant polluting industries takes precedence over the financial loss of owners and unemployment of workers, enforcing Article 21 and the Water (Prevention and Control of Pollution) Act, 1974.',
    facts: [
      'M.C. Mehta, an environmental advocate, filed a writ petition under Article 32 seeking judicial intervention to prevent the severe pollution of the River Ganga by industrial establishments and municipalities along its banks.',
      'Focusing first on Kanpur, the Court discovered that numerous leather tanneries located at Jajmau were discharging massive quantities of untreated toxic effluents, trade waste, and sludge directly into the holy river.',
      'The tanneries had neglected repeated statutory directions issued by the State Pollution Control Board under the Water (Prevention and Control of Pollution) Act, 1974 to set up primary treatment plants.',
      'The tannery owners pleaded financial hardship, lack of technical knowledge, and the impending unemployment of thousands of workers if shut down.',
    ],
    issues: [
      'Whether polluting industrial units that fail to install effluent treatment plants can be ordered to shut down notwithstanding economic loss and worker unemployment.',
      'What are the affirmative duties of the State and industries under Article 21, Article 48A, and statutory pollution control enactments.',
    ],
    arguments: {
      appellant: [
        'Discharge of untreated toxic effluent into the Ganga is a grave public nuisance endangering the lives of millions who depend on the river for drinking and bathing.',
        'Financial incapacity cannot justify continuing an environmental crime under the Water Act and Article 21.',
      ],
      respondent: [
        'Tannery owners argued that setting up individual treatment plants was financially unviable and that shutdown would cause mass unemployment.',
        'The State Government had failed to construct the promised common effluent treatment infrastructure.',
      ],
    },
    provisions: [
      {
        actId: 'pil',
        actName: 'Constitution of India',
        provisionId: 'pil-environmental',
        article: 'Articles 21 & 48A',
        title: 'Environmental Protection and Public Interest Litigation',
        subjectSlug: 'pil',
        topicId: 'pil-environmental',
      },
      {
        actId: 'tort',
        actName: 'Law of Torts Principles',
        provisionId: 'strict-liability',
        title: 'Public Nuisance and Environmental Liability',
        subjectSlug: 'tort',
        topicId: 'strict-liability',
      },
    ],
    reasoning: [
      {
        heading: 'Priority of health and life over industrial profit',
        explanation:
          'Venkataramiah, J. held that life, public health, and ecological preservation take precedence over commercial wealth. Just as an industry which cannot pay minimum wages to its workers has no right to exist, an industry which cannot set up a primary treatment plant cannot be permitted to continue operations and poison the community.',
      },
      {
        heading: 'Direct orders of closure for non-compliance',
        explanation:
          'The Court issued absolute orders directing the immediate stoppage of operations of all tanneries that failed to establish primary effluent treatment plants within the specified deadline, setting an authoritative benchmark for Indian environmental enforcement.',
      },
    ],
    decision:
      'Writ petition allowed in part with immediate closure orders. Tanneries failing to install primary treatment plants were ordered to cease operations forthwith.',
    holding:
      'Industrial units discharging toxic effluent without treatment have no right to operate. Public health under Article 21 overrides the economic hardship of factory owners or potential unemployment of workers.',
    ratioDecidendi:
      'An industrial enterprise which cannot set up a primary effluent treatment plant has no right to operate. The financial incapacity of tanneries to install treatment plants is wholly irrelevant. Under Article 21, the right to clean water and public health takes primacy over commercial profitability and employment concerns.',
    obiterDicta:
      'The Court directed municipal authorities and the State Government to ensure that urban sewage and municipal refuse are not discharged into the Ganga without treatment.',
    relatedCases: [
      {
        judgmentId: 'mc-mehta-oleum-1987',
        caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak)',
        citation: '(1987) 1 SCC 395',
        relationship: 'harmonized',
      },
      {
        judgmentId: 'vellore-citizens-1996',
        caseName: 'Vellore Citizens Welfare Forum v. Union of India',
        citation: '(1996) 5 SCC 647',
        relationship: 'elaborated',
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
      'Established the doctrine that polluting industries unable to treat waste have no right to exist.',
      'Enforced closure of Kanpur tanneries for violating the Water Act and Article 21.',
      'Paved the way for subsequent river pollution jurisprudence across India.',
    ],
    mcqs: [
      {
        id: 'mc-mehta-ganga-mcq-1',
        question:
          'In M.C. Mehta v. Union of India (Ganga Pollution Case, 1987), what did the Supreme Court hold regarding tanneries that cannot afford effluent treatment plants?',
        options: [
          'They are exempt from pollution laws if they employ over 100 workers',
          'They have no right to exist and operate if they cannot set up primary treatment plants',
          'They can continue discharging waste upon paying a nominal fine',
          'The Supreme Court has no jurisdiction over industrial rivers',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that an industry which cannot set up a primary treatment plant has no right to exist, comparing it to an industry unable to pay minimum wages.',
      },
    ],
  },
  {
    id: 'dk-yadav-1993',
    caseName: 'D.K. Yadav v. J.M.A. Industries Ltd.',
    shortName: 'D.K. Yadav',
    citation: '(1993) 3 SCC 259',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1993,
    bench: '3-Judge Bench',
    judges: ['K. Ramaswamy, J.', 'R.M. Sahai, J.', 'S.C. Agrawal, J.'],
    subject: 'Administrative Law',
    topics: ['Natural Justice', 'Audi Alteram Partem', 'Certified Standing Orders', 'Right to Livelihood', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Labour', 'Natural Justice', 'Article 21', 'Standing Orders'],
    summary:
      'Landmark 3-judge bench decision holding that principles of natural justice (audi alteram partem) must be read into certified standing orders. Struck down the automatic termination/deemed abandonment of service of a workman for 8 days unauthorized absence without a prior fair hearing, holding that deprivation of livelihood violates Article 21 and Article 14.',
    facts: [
      'D.K. Yadav was a permanent workman employed with J.M.A. Industries Ltd.',
      'Clause 13(2)(iv) of the company Certified Standing Orders provided that if a workman remains absent without sanctioned leave for more than eight consecutive days, he shall be deemed to have abandoned his employment and lost his lien on appointment.',
      'The workman remained absent from December 3, 1980 to December 12, 1980.',
      'The management invoked Clause 13(2)(iv) and struck his name off the rolls without issuing a charge-sheet, notice, or departmental inquiry.',
      'The Labour Court upheld the termination as contractual cessation under the standing orders.',
      'The workman appealed to the Supreme Court.',
    ],
    issues: [
      'Whether a clause in certified standing orders providing for automatic termination of employment on unauthorized absence can override principles of natural justice.',
      'Whether the right to livelihood under Article 21 and protection against arbitrariness under Article 14 require an opportunity of hearing prior to termination of employment.',
    ],
    arguments: {
      appellant: [
        'Termination of employment without inquiry or notice violates natural justice and Article 21 right to livelihood.',
        'Absence was due to sickness, and the workman was prevented from reporting due to gate stoppage by security.',
      ],
      respondent: [
        'Certified standing orders have statutory force under the Industrial Employment (Standing Orders) Act, 1946.',
        'Automatic loss of lien is a contractual condition of service mutually agreed upon, requiring no disciplinary inquiry.',
      ],
    },
    provisions: [
      {
        actId: 'admin',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-audi-alteram',
        title: 'Audi Alteram Partem — Right to fair hearing',
        subjectSlug: 'admin',
        topicId: 'admin-audi-alteram',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Protection of life and personal liberty — Right to livelihood',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Natural justice read into statutory standing orders',
        explanation:
          'K. Ramaswamy, J. held that certified standing orders must conform to the requirements of Articles 14 and 21. Natural justice is not an unruly horse; it permeates all statutory and administrative actions affecting civil rights. Even where a standing order provides for automatic cessation, the management must give the workman an opportunity to explain his absence.',
      },
      {
        heading: 'Deprivation of livelihood requires just, fair, and reasonable procedure',
        explanation:
          'Livelihood is an integral facet of the right to life under Article 21 (Olga Tellis). No person can be deprived of his livelihood except according to procedure established by law, which must be just, fair, and reasonable (Maneka Gandhi). Striking off a workman name without giving him an opportunity to demonstrate unavoidable causes violates Article 14 and 21.',
      },
    ],
    decision:
      'Appeal allowed. Termination set aside and workman reinstated with 50% back wages. Certified standing orders cannot dispense with natural justice.',
    holding:
      'Principles of natural justice must be read into certified standing orders. An employer cannot automatically terminate a workman services for unauthorized absence without affording a reasonable opportunity of hearing.',
    ratioDecidendi:
      'Certified standing orders are subject to constitutional limitations under Articles 14 and 21. The right to life includes the right to livelihood. Depriving a person of employment without affording him an opportunity of showing cause or proving that absence was due to circumstances beyond his control is arbitrary, unjust, and void for violation of natural justice.',
    obiterDicta:
      'Security of tenure in industrial employment is essential for industrial peace and human dignity; arbitrary loss-of-lien clauses are relics of unbridled hire-and-fire.',
    relatedCases: [
      {
        judgmentId: 'ak-kraipak-1969',
        caseName: 'A.K. Kraipak v. Union of India',
        citation: '(1969) 2 SCC 262',
        relationship: 'followed',
      },
      {
        judgmentId: 'maneka-gandhi-1978',
        caseName: 'Maneka Gandhi v. Union of India',
        citation: '(1978) 1 SCC 248',
        relationship: 'followed',
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
      'Read natural justice (audi alteram partem) into certified standing orders.',
      'Reaffirmed that the right to livelihood is protected under Article 21 in employment relationships.',
      'Invalidated the doctrine of automatic abandonment of employment without inquiry.',
    ],
    mcqs: [
      {
        id: 'dk-yadav-mcq-1',
        question:
          'In D.K. Yadav v. J.M.A. Industries Ltd. (1993), the Supreme Court ruled that a clause in certified standing orders for automatic termination upon 8 days absence:',
        options: [
          'Is completely valid and requires no notice or hearing',
          'Must comply with principles of natural justice and fair hearing under Articles 14 and 21',
          'Applies only to government civil servants and not industrial workmen',
          'Is subject only to the discretion of the Labour Court',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that natural justice must be read into certified standing orders, and automatic termination without giving a hearing violates Article 14 and 21.',
      },
    ],
  },
  {
    id: 'independent-thought-2017',
    caseName: 'Independent Thought v. Union of India',
    shortName: 'Independent Thought',
    citation: '(2017) 10 SCC 800',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional / Criminal Jurisdiction',
    year: 2017,
    bench: '2-Judge Bench',
    judges: ['Madan B. Lokur, J.', 'Deepak Gupta, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Marital Rape of Minor', 'Section 375 Exception 2', 'Child Sexual Abuse', 'POCSO Act', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'POCSO', 'Constitution', 'Child Rights', 'Article 21', 'Rape Law'],
    summary:
      'Historic 2-judge bench decision reading down Exception 2 to Section 375 IPC. Struck down the statutory exception that permitted sexual intercourse by a man with his married girl child wife aged between 15 and 18 years, holding that sexual intercourse with any girl below 18 years of age is rape, harmonizing IPC with POCSO and constitutional human rights under Articles 14, 15, and 21.',
    facts: [
      'Exception 2 to Section 375 of the Indian Penal Code provided: "Sexual intercourse or sexual acts by a man with his own wife, the wife not being under fifteen years of age, is not rape."',
      'Following the Criminal Law (Amendment) Act, 2013 and the Protection of Children from Sexual Offences (POCSO) Act, 2012, the general statutory age of consent for sexual intercourse was fixed at 18 years across all laws.',
      'Independent Thought, an NGO working for child rights, filed a writ petition under Article 32 pointing out the glaring inconsistency: while a girl under 18 was defined as a child protected against all sexual penetrative acts under POCSO, Exception 2 to Section 375 IPC created an artificial exemption immunizing the husband of a married child aged 15 to 18 years from prosecution for rape.',
    ],
    issues: [
      'Whether Exception 2 to Section 375 IPC, in so far as it permits marital sexual intercourse with a girl child between 15 and 18 years, violates Articles 14, 15, and 21 of the Constitution.',
      'Whether the exception creates an arbitrary classification between married and unmarried girl children below 18 years, undermining the bodily integrity of the child.',
    ],
    arguments: {
      appellant: [
        'The exception violates a girl child right to bodily autonomy, dignity, and reproductive health under Article 21.',
        'Differentiating between a married and unmarried girl child between 15 and 18 years lacks rational nexus and violates POCSO Act.',
      ],
      respondent: [
        'The Union of India defended the exception on grounds of preserving social reality and protecting the institution of marriage under Hindu and personal laws.',
        'Parliament had consciously retained 15 years in Exception 2 while amending Section 375 in 2013.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'sexual-offences',
        section: 'Section 63 (legacy s. 375 Exception 2 IPC)',
        title: 'Rape and age of consent for married girl child',
        subjectSlug: 'bns',
        topicId: 'sexual-offences',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Bodily integrity, dignity and reproductive health of girl child',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Artificial discrimination between married and unmarried girl children',
        explanation:
          'Lokur and Deepak Gupta, JJ. held that marriage does not alter the biological and developmental reality of a girl child. An unmarried girl between 15 and 18 is protected under POCSO, but a married girl was stripped of protection and subjected to marital rape. This classification is irrational, arbitrary, and violative of Article 14.',
      },
      {
        heading: 'Bodily autonomy and protection against sexual violence under Article 21',
        explanation:
          'A girl child cannot be subjected to forced sexual intercourse under the shield of marriage. The institution of marriage cannot sanctify the rape of a minor girl. Exception 2 to Section 375 IPC was read down by raising the exception age from 15 to 18 years to harmonize it with POCSO.',
      },
    ],
    decision:
      'Writ petition allowed. Exception 2 to Section 375 IPC read down. The Supreme Court declared that sexual intercourse with a girl child below 18 years of age, whether married or unmarried, is rape.',
    holding:
      'Sexual intercourse by a man with his wife who is below 18 years of age is rape. Exception 2 to Section 375 IPC stands read down to exclude girls below 18 years of age.',
    ratioDecidendi:
      'Exception 2 to Section 375 IPC, to the extent it creates an exception for sexual intercourse with a married girl child between 15 and 18 years, is arbitrary, discriminatory, and violative of Articles 14, 15, and 21. A girl child below 18 years of age is a child in law. Child marriage cannot confer a license on the husband to violate the bodily integrity, dignity, and sexual autonomy of a minor child.',
    obiterDicta:
      'The Court called upon society and the legislature to eradicate child marriage, calling it an archaic and harmful social practice that ruins the health and future of young girls.',
    relatedCases: [
      {
        judgmentId: 'navtej-johar-2018',
        caseName: 'Navtej Singh Johar v. Union of India',
        citation: '(2018) 1 SCC 791',
        relationship: 'harmonized',
      },
      {
        judgmentId: 'joseph-shine-2018',
        caseName: 'Joseph Shine v. Union of India',
        citation: '(2019) 3 SCC 39',
        relationship: 'harmonized',
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
      'Read down Exception 2 to Section 375 IPC to raise the threshold age from 15 to 18 years.',
      'Declared that marital intercourse with a girl child below 18 years constitutes rape.',
      'Harmonized the penal code with POCSO and CEDAW under Article 21 child rights.',
    ],
    mcqs: [
      {
        id: 'independent-thought-mcq-1',
        question:
          'What was the landmark holding in Independent Thought v. Union of India (2017) regarding Exception 2 to Section 375 IPC?',
        options: [
          'Exception 2 was upheld as valid for all married females',
          'Sexual intercourse with a married girl child below 18 years of age constitutes rape',
          'Marital rape of adult women was declared criminalized',
          'The age of consent was reduced from 18 to 15 years',
        ],
        correctIndex: 1,
        explanation:
          'In Independent Thought (2017), the Supreme Court read down Exception 2 to Section 375 IPC, holding that sexual intercourse with a married girl child below 18 years of age is rape.',
      },
    ],
  },
  {
    id: 'baldev-singh-ndps-1999',
    caseName: 'State of Punjab v. Baldev Singh',
    shortName: 'State of Punjab v. Baldev Singh',
    citation: '(1999) 6 SCC 172',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1999,
    bench: '5-Judge Constitution Bench',
    judges: ['A.S. Anand, C.J.', 'S.B. Majmudar, J.', 'Sujata V. Manohar, J.', 'K. Venkataswami, J.', 'V.N. Khare, J.'],
    subject: 'Bharatiya Nagarik Suraksha Sanhita',
    topics: ['Section 50 NDPS Act', 'Personal Search', 'Statutory Safeguards', 'Fair Trial', 'Admissibility of Evidence'],
    tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'NDPS', 'Section 50', 'Search and Seizure', 'Fair Trial'],
    summary:
      'Authoritative 5-judge Constitution Bench precedent holding that compliance with Section 50 of the NDPS Act (informing the suspect of his legal right to be searched in the presence of a Gazetted Officer or Magistrate) is mandatory in personal searches. Failure to inform the suspect of this right vitiates the search and renders recovery suspect, entitling the accused to acquittal.',
    facts: [
      'In multiple narcotics prosecutions across different States, police and excise officers conducted personal searches of suspects and seized illicit contraband without apprising them of their right under Section 50 of the NDPS Act to be searched before a Gazetted Officer or Magistrate.',
      'Trial courts and High Courts delivered conflicting verdicts regarding whether Section 50 was mandatory or merely directory, and whether non-compliance rendered the recovery of contraband inadmissible in evidence.',
      'A reference was made to a 5-judge Constitution Bench in Baldev Singh to authoritatively lay down the legal consequences of non-compliance with Section 50.',
    ],
    issues: [
      'Whether Section 50 of the NDPS Act makes it obligatory on the authorized officer to inform the person to be searched of his right to be taken before a Gazetted Officer or Magistrate.',
      'What is the legal effect of failure to comply with Section 50 on the admissibility of the seized contraband and the trial of the accused.',
    ],
    arguments: {
      appellant: [
        'The State argued that under the Indian Evidence Act, illegality in search or seizure does not affect the admissibility of relevant physical evidence recovered.',
        'Severe punishment under the NDPS Act was enacted to curb drug trafficking and technical defects should not impede convictions.',
      ],
      respondent: [
        'Stringent minimum sentences (10 to 20 years rigorous imprisonment) require strict adherence to statutory safeguards.',
        'Informing the suspect of his right to be searched before a superior officer ensures fairness and prevents false planting of narcotics.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 'arrest',
        section: 'Search of Arrested Persons',
        title: 'Arrest, Search and Statutory Safeguards',
        subjectSlug: 'bnss',
        topicId: 'arrest',
      },
    ],
    reasoning: [
      {
        heading: 'Mandatory obligation to inform the suspect',
        explanation:
          'Anand, C.J. held that Section 50(1) imposes an imperative obligation on the searching officer to inform the suspect that he has a right to be taken before a Gazetted Officer or a Magistrate for personal search. It is not sufficient to merely ask the suspect if he wants to be searched; he must be informed that he has a statutory right to demand it.',
      },
      {
        heading: 'Stringent penal consequences require rigorous procedural safeguards',
        explanation:
          'The more severe the punishment, the greater the need for procedural safeguards. Failure to inform the suspect of his right under Section 50 causes prejudice to the accused, renders the recovery suspect, and affects the credibility of the prosecution case, entitling the accused to acquittal. However, Section 50 is confined exclusively to personal search of the body and does not apply to search of bags, vehicles, or premises.',
      },
    ],
    decision:
      'Reference answered. The Constitution Bench held that Section 50 NDPS Act is mandatory. An accused must be informed of his right to be searched before a Gazetted Officer or Magistrate; failure to inform vitiates the search and recovery.',
    holding:
      'In personal searches under the NDPS Act, informing the suspect of his right under Section 50 is an absolute mandatory requirement. Non-compliance renders the recovery of contraband suspect and vitiates the conviction.',
    ratioDecidendi:
      'Compliance with the procedural safeguards contained in Section 50 of the NDPS Act is mandatory. The empowered officer must inform the person to be searched of his statutory right to be searched in the presence of a Gazetted Officer or a Magistrate. Failure to apprise him of this right renders the search illegal and vitiates the conviction based solely on such recovery. Section 50 applies exclusively to personal searches of the person and not to bags, vehicles, or premises.',
    obiterDicta:
      'The Court noted that illicit drug trafficking is an insidious social menace, but societal outrage cannot justify bypassing procedural fairness guaranteed by Parliament.',
    relatedCases: [
      {
        judgmentId: 'dk-basu-1997',
        caseName: 'D.K. Basu v. State of West Bengal',
        citation: '(1997) 1 SCC 416',
        relationship: 'harmonized',
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
      'Settled that Section 50 NDPS Act is mandatory for personal searches.',
      'Officer must affirmatively apprise the suspect of his legal right to be searched before a Gazetted Officer/Magistrate.',
      'Clarified that Section 50 applies only to body search and not to search of luggage, vehicles, or containers.',
    ],
    mcqs: [
      {
        id: 'baldev-singh-mcq-1',
        question:
          'What did the Constitution Bench rule in State of Punjab v. Baldev Singh (1999) regarding Section 50 of the NDPS Act?',
        options: [
          'Section 50 is merely directory and non-compliance has no effect on conviction',
          'Informing the suspect of his right to be searched before a Gazetted Officer or Magistrate is mandatory in personal searches',
          'Section 50 applies to searching houses and cargo containers',
          'Only a High Court judge can conduct searches under Section 50',
        ],
        correctIndex: 1,
        explanation:
          'In Baldev Singh (1999), the 5-judge Constitution Bench held that informing the suspect of his right to be searched before a Gazetted Officer or Magistrate is mandatory in personal searches under Section 50 NDPS Act.',
      },
    ],
  },
  {
    id: 'tulsiram-patel-1985',
    caseName: 'Union of India v. Tulsiram Patel',
    shortName: 'Tulsiram Patel',
    citation: '(1985) 3 SCC 398',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1985,
    bench: '5-Judge Constitution Bench',
    judges: [
      'Y.V. Chandrachud, C.J.',
      'D.P. Madon, J.',
      'M.P. Thakkar, J.',
      'V.D. Tulzapurkar, J.',
      'B.C. Ray, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 311', 'Civil Services', 'Doctrine of Pleasure', 'Second Proviso Exceptions', 'Natural Justice Exclusion'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 311', 'Article 310', 'Civil Services', 'Doctrine of Pleasure'],
    summary:
      'Monumental 5-judge Constitution Bench ruling on civil service safeguards under Article 311. Held that the inquiry requirement under Article 311(2) can be completely excluded under clauses (a), (b), and (c) of the second proviso (conviction on a criminal charge, practical impossibility of inquiry, or interest of the security of the State). Natural justice is not violated when the Constitution itself expressly excludes it under extraordinary necessity.',
    facts: [
      'Hundreds of civil servants across various departments (including railway employees, Central Industrial Security Force personnel, and audit staff) were summarily dismissed or removed from service without holding a disciplinary inquiry.',
      'The dismissals were effected under the second proviso to Article 311(2): Clause (a) for criminal convictions, Clause (b) where the disciplinary authority recorded in writing that holding an inquiry was not reasonably practicable (e.g. violent agitations or terrorizing witnesses), and Clause (c) where the President or Governor was satisfied that in the interest of state security, it was not expedient to hold an inquiry.',
      'Aggrieved employees challenged their summary dismissals, arguing that principles of natural justice and Article 14 override the second proviso and mandate at least a post-decisional or summary hearing.',
    ],
    issues: [
      'Whether principles of natural justice can be invoked to demand an inquiry when the second proviso to Article 311(2) expressly dispenses with it.',
      'What are the legal standards and scope of judicial review when an inquiry is dispensed with under clauses (a), (b), and (c) of the second proviso to Article 311(2).',
    ],
    arguments: {
      appellant: [
        'The Union and States contended that the second proviso is an express constitutional exception to the inquiry requirement under Article 311(2).',
        'In situations of mutiny, violence, witness intimidation, or state security risks, holding an inquiry is impossible or disastrous.',
      ],
      respondent: [
        'The employees contended that after Maneka Gandhi and Royappa, natural justice and Article 14 are paramount and cannot be completely excluded.',
        'Executive authorities could misuse the clause to arbitrarily dismiss inconvenient civil servants without proving misconduct.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'civil-services-art-311',
        article: 'Article 311(2) Second Proviso',
        title: 'Dismissal, removal or reduction in rank — Second Proviso Exceptions',
        subjectSlug: 'constitution',
        topicId: 'civil-services-art-311',
      },
      {
        actId: 'admin',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-audi-alteram',
        title: 'Exclusion of Natural Justice by Constitutional Mandate',
        subjectSlug: 'admin',
        topicId: 'admin-audi-alteram',
      },
    ],
    reasoning: [
      {
        heading: 'Constitutional exclusion of natural justice',
        explanation:
          'Madon, J. held that natural justice is not a rigid dogma and can be excluded either expressly or by necessary implication. Where the Constitution itself, by enacting the second proviso to Article 311(2), expressly excludes the inquiry and hearing, there is no scope for re-introducing natural justice through Article 14. The doctrine of pleasure under Article 310 is the rule, Article 311(2) is the exception, and the second proviso is an exception to the exception.',
      },
      {
        heading: 'Judicial review of recorded reasons under Clause (b)',
        explanation:
          'Under Clause (b), the disciplinary authority must record reasons in writing showing why it is not reasonably practicable to hold an inquiry. If the recorded reasons are extraneous or mala fide, the order can be struck down on judicial review. However, if genuine intimidation or violence exists, the subjective satisfaction of the disciplinary authority is upheld.',
      },
    ],
    decision:
      'Appeals disposed of. Overruled Challappan to the extent it held that an inquiry must be held even under the second proviso. Upheld the constitutional validity of summary dismissals under clauses (a), (b), and (c) of the second proviso to Article 311(2).',
    holding:
      'The requirement of holding a disciplinary inquiry under Article 311(2) can be dispensed with under clauses (a), (b), and (c) of the second proviso. When the second proviso is attracted, principles of natural justice are completely excluded by constitutional mandate.',
    ratioDecidendi:
      'The second proviso to Article 311(2) is an express constitutional exclusion of the rule of audi alteram partem. When an inquiry is dispensed with under clause (a) (criminal conviction), clause (b) (impracticability of holding inquiry), or clause (c) (security of the State), civil servants have no constitutional right to a prior or post-decisional hearing on the charges. Judicial review is limited to examining whether the conditions precedent existed and whether the reasons recorded are relevant and bona fide.',
    obiterDicta:
      'The Court cautioned disciplinary authorities that recorded reasons under clause (b) must be genuine; the power must not be exercised lightly or as an easy escape from the inconvenience of conducting an inquiry.',
    relatedCases: [
      {
        judgmentId: 'ak-kraipak-1969',
        caseName: 'A.K. Kraipak v. Union of India',
        citation: '(1969) 2 SCC 262',
        relationship: 'harmonized',
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
      'Settled that the second proviso to Article 311(2) completely excludes natural justice.',
      'Explained the three clauses of the second proviso: criminal conviction (a), impracticability (b), and state security (c).',
      'Defines the relationship between the doctrine of pleasure (Art. 310) and procedural safeguards (Art. 311).',
    ],
    mcqs: [
      {
        id: 'tulsiram-patel-mcq-1',
        question:
          'In Union of India v. Tulsiram Patel (1985), the Constitution Bench held that when the second proviso to Article 311(2) applies:',
        options: [
          'An oral inquiry must still be held under Article 14',
          'Principles of natural justice are completely excluded by express constitutional mandate',
          'Only the President can dismiss a civil servant without judicial review',
          'Civil servants are automatically entitled to full back wages',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in Tulsiram Patel held that the second proviso to Article 311(2) is an express constitutional exclusion of natural justice, and no inquiry is required when clauses (a), (b), or (c) are attracted.',
      },
    ],
  },
]
