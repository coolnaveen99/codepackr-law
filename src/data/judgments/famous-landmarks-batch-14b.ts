import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_14B: Judgment[] = [
  {
    id: 'vidya-devi-2020',
    caseName: 'Vidya Devi v. State of Himachal Pradesh',
    shortName: 'Vidya Devi',
    citation: '(2020) 2 SCC 569',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2020,
    bench: '2-Judge Bench',
    judges: ['Indu Malhotra, J.', 'Ajay Rastogi, J.'],
    subject: 'Constitutional Law',
    topics: ['Article 300A', 'Right to Property', 'Human Rights', 'Delay and Laches', 'Eminent Domain'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 300A', 'Property Rights', 'Human Rights', 'Land Expropriation'],
    summary:
      'Landmark Supreme Court precedent on state land grabbing and Article 300A. Held that the State cannot dispossess a citizen of private property without following the procedure established by law and paying compensation. The State cannot plead delay and laches to defeat the property rights of an illiterate citizen, as the right to property is both a constitutional and a fundamental human right.',
    facts: [
      'Vidya Devi, an illiterate rural widow, owned agricultural land in District Shimla, Himachal Pradesh.',
      'In 1967-68, the State of Himachal Pradesh forcibly took over her land for the construction of a major public road without initiating land acquisition proceedings or paying a single rupee as compensation.',
      'For over four decades, the widow petitioned authorities without success. In 2010, she approached the Himachal Pradesh High Court under Article 226 seeking compensation.',
      'The High Court dismissed her writ petition on the sole ground of delay and laches (approaching court after 42 years).',
      'The widow appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the State can forcibly expropriate private land for public infrastructure without following land acquisition procedure established by law.',
      'Whether the State can plead delay and laches against a citizen whose property was taken away in violation of Article 300A and basic human rights.',
    ],
    arguments: {
      appellant: [
        'Forcible dispossession of an illiterate widow without paying compensation violates Article 300A and Article 21 human dignity.',
        'The State cannot act as a land grabber and then take refuge behind technical pleas of delay and laches.',
      ],
      respondent: [
        'The road was constructed in 1967 and the land vested in the public interest over 40 years ago.',
        'Stale claims for compensation cannot be entertained under writ jurisdiction.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-300a',
        article: 'Article 300A',
        title: 'Persons not to be deprived of property save by authority of law',
        subjectSlug: 'constitution',
        topicId: 'art-300a',
      },
    ],
    reasoning: [
      {
        heading: 'State cannot act as a land grabber',
        explanation:
          'Indu Malhotra, J. observed that in a democratic country governed by the rule of law, the State cannot dispossess a citizen of his property without following due process of law. To forcibly acquire land without authority of law is an exercise of arbitrary power. The State cannot be permitted to perfect its title over private land through adverse possession or land grabbing.',
      },
      {
        heading: 'Property as a human right and rejection of delay defense',
        explanation:
          'The right to property under Article 300A is a constitutional right and an internationally recognized human right. When the State commits a continuing wrong by retaining private land without compensation, it cannot raise the technical plea of delay and laches against an illiterate rural citizen.',
      },
    ],
    decision:
      'Appeal allowed. The State of Himachal Pradesh was directed to pay full compensation with statutory interest and solatium along with Rs 10 lakh in costs to the appellant.',
    holding:
      'The State cannot take private land without statutory acquisition and compensation. The right to property under Article 300A is a human right, and the State cannot plead delay and laches to justify illegal expropriation.',
    ratioDecidendi:
      'The right to property is a human right as well as a constitutional right under Article 300A of the Constitution. The State cannot forcibly take over private land without following due procedure established by law. In a welfare State governed by the rule of law, the State cannot plead delay and laches or adverse possession to deny compensation to a dispossessed citizen.',
    obiterDicta:
      'A welfare state should act with fairness, compassion, and justice towards its vulnerable and illiterate citizens rather than relying on technical procedural bars.',
    relatedCases: [
      {
        judgmentId: 'k-t-plantation-2011',
        caseName: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka',
        citation: '(2011) 9 SCC 1',
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
      'Affirmed that the right to property under Article 300A is a fundamental human right.',
      'Barred the State from pleading "delay and laches" when it forcibly takes private land without compensation.',
      'Leading modern precedent on eminent domain and state accountability.',
    ],
    mcqs: [
      {
        id: 'vidya-devi-mcq-1',
        question:
          'In Vidya Devi v. State of Himachal Pradesh (2020), what did the Supreme Court hold regarding the State taking private land without compensation?',
        options: [
          'The State can take any private land for roads without paying compensation',
          'The State cannot plead delay and laches to deny compensation, as property is a constitutional and human right under Article 300A',
          'Claims for compensation are barred after 3 years under the Limitation Act',
          'Only foreign investors are entitled to land acquisition compensation',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held in Vidya Devi that the right to property is a human right under Article 300A and the State cannot plead delay and laches to justify taking land without compensation.',
      },
    ],
  },
  {
    id: 'radheshyam-khare-1959',
    caseName: 'Radheshyam Khare v. State of Madhya Pradesh',
    shortName: 'Radheshyam Khare',
    citation: 'AIR 1959 SC 107',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1958,
    bench: '5-Judge Constitution Bench',
    judges: ['S.R. Das, C.J.', 'N.H. Bhagwati, J.', 'S.K. Das, J.', 'P.B. Gajendragadkar, J.', 'K. Subba Rao, J.'],
    subject: 'Administrative Law',
    topics: ['Administrative vs Quasi-Judicial', 'Natural Justice', 'Writ of Certiorari', 'Article 226', 'Supersession of Municipalities'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Natural Justice', 'Certiorari', 'Quasi-Judicial'],
    summary:
      'Classic 5-judge Constitution Bench precedent analyzing the distinction between administrative acts and quasi-judicial acts. Held that an administrative determination requiring an opinion or subjective satisfaction can still be subject to natural justice if civil consequences ensue, laying the foundation for modern judicial review and the expansion of the writ of certiorari.',
    facts: [
      'The State Government of Madhya Pradesh superseded the Municipal Committee of Dhamtari and appointed an executive officer under Section 53-A of the C.P. and Berar Municipalities Act, 1922.',
      'The State Government took action on the ground that the Municipal Committee was incompetent to perform its duties and had committed financial defaults.',
      'Radheshyam Khare, the President of the Municipal Committee, filed a writ petition under Article 32 challenging the supersession order on the ground that the State Government acted in violation of natural justice by not granting a hearing before appointing an administrator.',
    ],
    issues: [
      'Whether the order of the State Government under Section 53-A superseding the municipal committee is a quasi-judicial act or an administrative act.',
      'Whether the writ of certiorari lies only against judicial or quasi-judicial orders, or can extend to administrative orders affecting rights.',
    ],
    arguments: {
      appellant: [
        'Superseding an elected local municipality affects statutory offices and reputations, requiring a judicial approach and hearing.',
        'Failure to furnish charges and receive explanations violates natural justice.',
      ],
      respondent: [
        'Section 53-A is an emergency administrative measure based on the subjective satisfaction of the State Government.',
        'Certiorari does not lie against purely administrative policy determinations.',
      ],
    },
    provisions: [
      {
        actId: 'admin',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-judicial-review',
        title: 'Grounds of Judicial Review — Administrative vs Quasi-Judicial determinations',
        subjectSlug: 'admin',
        topicId: 'admin-judicial-review',
      },
    ],
    reasoning: [
      {
        heading: 'Distinction between quasi-judicial and administrative acts',
        explanation:
          'Das, C.J. examined the classical test from Province of Bombay v. Khushaldas Advani: To constitute a quasi-judicial act, there must be a statutory duty to act judicially (super-added duty). Where an administrative authority is merely required to form a subjective opinion on expediency, it acts administratively.',
      },
      {
        heading: 'Evolution towards procedural fairness',
        explanation:
          'Subba Rao, J. delivered a powerful concurring/dissenting opinion holding that whenever an administrative body makes an order that adversely affects the rights of subjects or visits them with civil consequences, there is an implied duty to act judicially and comply with natural justice.',
      },
    ],
    decision:
      'Writ petition dismissed on facts as adequate opportunity to explain had been granted, but the legal framework governing certiorari and quasi-judicial action was authoritatively articulated.',
    holding:
      'A writ of certiorari lies to quash judicial or quasi-judicial determinations made in excess of jurisdiction or in violation of natural justice. Administrative bodies affecting rights must adhere to basic fairness.',
    ratioDecidendi:
      'The test to determine whether an act is administrative or quasi-judicial depends upon whether the statute mandates a duty to act judicially. While a purely administrative authority forms subjective opinions, any determination visiting an elected body with civil consequences must follow fair inquiry procedures.',
    obiterDicta:
      'The historical line between administrative and quasi-judicial acts must not be used by the executive to shield arbitrary actions from judicial scrutiny.',
    relatedCases: [
      {
        judgmentId: 'ak-kraipak-1969',
        caseName: 'A.K. Kraipak v. Union of India',
        citation: '(1969) 2 SCC 262',
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
      'Analyzed the classical test of "duty to act judicially" in administrative law.',
      'Subba Rao, J. opinion paved the way for A.K. Kraipak and Maneka Gandhi.',
      'Foundational case for the study of the writ of certiorari under Article 226/32.',
    ],
    mcqs: [
      {
        id: 'radheshyam-khare-mcq-1',
        question:
          'In Radheshyam Khare v. State of M.P. (1959), what was the central legal controversy regarding the writ of certiorari?',
        options: [
          'Whether certiorari can be issued against private arbitration tribunals',
          'The distinction between administrative acts and quasi-judicial acts having a duty to act judicially',
          'Whether election petitions can be heard by High Courts',
          'Whether the Governor can be sued under Article 361',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in Radheshyam Khare analyzed whether a supersession order was administrative or quasi-judicial and whether a duty to act judicially existed.',
      },
    ],
  },
  {
    id: 'syed-yakoob-1964',
    caseName: 'Syed Yakoob v. K.S. Radhakrishnan',
    shortName: 'Syed Yakoob',
    citation: 'AIR 1964 SC 477',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1963,
    bench: '5-Judge Constitution Bench',
    judges: ['P.B. Gajendragadkar, J.', 'K.N. Wanchoo, J.', 'M. Hidayatullah, J.', 'K.C. Das Gupta, J.', 'J.C. Shah, J.'],
    subject: 'Constitutional Law',
    topics: ['Writ of Certiorari', 'Article 226', 'Error of Law Apparent', 'Judicial Review', 'Jurisdictional Error'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 226', 'Certiorari', 'Judicial Review', 'Error of Law'],
    summary:
      'Locus classicus 5-judge Constitution Bench precedent on the scope of the writ of certiorari under Article 226. Held that certiorari can be issued for correcting errors of jurisdiction, violation of natural justice, or an error of law apparent on the face of the record. Certiorari does not lie to correct mere errors of fact or to act as an appellate court reappreciating evidence.',
    facts: [
      'The Regional Transport Authority invited applications for the grant of a stage carriage bus permit on the Madras-Chidambaram route.',
      'The State Transport Appellate Tribunal awarded the permit to Syed Yakoob on the ground that he possessed an operational workshop on the route, giving him preference over K.S. Radhakrishnan.',
      'Radhakrishnan filed a writ petition under Article 226 before the Madras High Court.',
      'A Single Judge of the High Court reappreciated the evidence, concluded that Yakoob did not have an effective workshop, and quashed the permit via a writ of certiorari.',
      'The Division Bench dismissed the appeal, and Yakoob appealed to the Supreme Court.',
    ],
    issues: [
      'What are the permissible limits and scope of the High Court writ jurisdiction under Article 226 when issuing a writ of certiorari.',
      'What constitutes an "error of law apparent on the face of the record" as distinguished from a mere error of fact or misappreciation of evidence.',
    ],
    arguments: {
      appellant: [
        'The High Court acted as an appellate court by re-examining findings of fact arrived at by the specialist statutory transport tribunal.',
        'Certiorari is supervisory and cannot be used to substitute judicial findings for tribunal findings.',
      ],
      respondent: [
        'The tribunal committed an error of law in accepting dubious documents regarding workshop facilities.',
        'High Courts have wide jurisdiction under Article 226 to correct any manifest injustice.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-32-226',
        article: 'Article 226',
        title: 'Power of High Courts to issue certain writs — Scope of Certiorari',
        subjectSlug: 'constitution',
        topicId: 'art-32-226',
      },
      {
        actId: 'admin',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-writ-remedies',
        title: 'Writ Remedies against Administrative and Tribunal Determinations',
        subjectSlug: 'admin',
        topicId: 'admin-writ-remedies',
      },
    ],
    reasoning: [
      {
        heading: 'Supervisory and non-appellate nature of Certiorari',
        explanation:
          'Gajendragadkar, J. laid down the foundational principles: A writ of certiorari can be issued for correcting errors of jurisdiction committed by inferior courts or tribunals (acting without jurisdiction, in excess of jurisdiction, or failing to exercise jurisdiction). It also lies where the tribunal has acted in violation of natural justice.',
      },
      {
        heading: 'Error of law apparent on the face of the record',
        explanation:
          'Certiorari can also be issued to correct an error of law, but the error must be an "error of law apparent on the face of the record". An error of law apparent means an error that is manifest and self-evident without elaborate arguments or examination of facts. A finding of fact recorded by a tribunal cannot be challenged on the ground that relevant evidence was misappreciated. The High Court does not sit as a court of appeal.',
      },
    ],
    decision:
      'Appeal allowed. The High Court judgment was set aside and the order of the State Transport Appellate Tribunal restored. The High Court had exceeded its certiorari jurisdiction.',
    holding:
      'The writ of certiorari is a supervisory jurisdiction and not an appellate review. Certiorari lies only for jurisdictional errors, natural justice breaches, or errors of law apparent on the face of the record, not for correcting errors of fact.',
    ratioDecidendi:
      'A writ of certiorari under Article 226 is issued for correcting errors of jurisdiction, violations of principles of natural justice, or errors of law apparent on the face of the record. The High Court exercising certiorari jurisdiction does not sit as a court of appeal and cannot reappreciate or reassess evidence to substitute its own factual conclusions for those of the statutory tribunal.',
    obiterDicta:
      'Whether an error is an error of law apparent on the face of the record must always be decided on the facts of each case, but it cannot require an elaborate re-trial of evidence.',
    relatedCases: [
      {
        judgmentId: 'l-chandra-kumar-1997',
        caseName: 'L. Chandra Kumar v. Union of India',
        citation: '(1997) 3 SCC 261',
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
      'Locus classicus on the scope and limits of the writ of certiorari under Article 226.',
      'Defines "error of law apparent on the face of the record".',
      'Strictly prohibits High Courts from acting as appellate courts reappreciating tribunal facts.',
    ],
    mcqs: [
      {
        id: 'syed-yakoob-mcq-1',
        question:
          'In Syed Yakoob v. K.S. Radhakrishnan (1964), the Supreme Court ruled that a writ of certiorari under Article 226 cannot be issued to:',
        options: [
          'Correct errors of jurisdiction by tribunals',
          'Remedy violations of principles of natural justice',
          'Reappreciate evidence and correct mere errors of fact recorded by a tribunal',
          'Correct errors of law apparent on the face of the record',
        ],
        correctIndex: 2,
        explanation:
          'The Constitution Bench in Syed Yakoob held that certiorari is supervisory and cannot be used to reappreciate evidence or correct mere errors of fact.',
      },
    ],
  },
  {
    id: 'satya-narayan-sharma-2001',
    caseName: 'Satya Narayan Sharma v. State of Rajasthan',
    shortName: 'Satya Narayan Sharma',
    citation: '(2001) 8 SCC 607',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2001,
    bench: '3-Judge Bench',
    judges: ['K.T. Thomas, J.', 'S.N. Variava, J.', 'K.G. Balakrishnan, J.'],
    subject: 'Bharatiya Nagarik Suraksha Sanhita',
    topics: ['Prevention of Corruption Act', 'Section 19(3)(c)', 'Stay of Trial Bar', 'Inherent Powers Section 482', 'Speedy Trial'],
    tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'Corruption', 'Stay of Proceedings', 'Section 482', 'PC Act'],
    summary:
      'Supreme Court precedent enforcing the statutory bar against staying corruption trials under Section 19(3)(c) of the Prevention of Corruption Act, 1988. Held that High Courts cannot invoke inherent powers under Section 482 CrPC (s. 528 BNSS) to grant stay of proceedings in corruption cases, as Parliament intended expeditious trials of public corruption without dilatory stay orders.',
    facts: [
      'Satya Narayan Sharma, a public servant in Rajasthan, was charge-sheeted before the Special Judge for offences under Section 13(1)(d) read with Section 13(2) of the Prevention of Corruption Act, 1988.',
      'The Special Judge framed charges, which the accused challenged by filing a revision petition before the Rajasthan High Court.',
      'The High Court admitted the revision and granted an interim stay of the criminal trial before the Special Court.',
      'The State challenged the stay order before the Supreme Court, invoking Section 19(3)(c) of the PC Act.',
    ],
    issues: [
      'Whether the High Court has the power under Section 482 CrPC or writ jurisdiction to grant a stay of proceedings in a corruption trial in the teeth of Section 19(3)(c) of the Prevention of Corruption Act.',
      'Whether the statutory bar against granting stay of trial in corruption cases applies to proceedings under the Code of Criminal Procedure.',
    ],
    arguments: {
      appellant: [
        'Section 19(3)(c) of the PC Act contains an absolute prohibition: "no court shall stay the proceedings under this Act on any ground whatsoever".',
        'Inherent powers under Section 482 CrPC cannot be exercised contrary to an express statutory prohibition enacted by Parliament.',
      ],
      respondent: [
        'Inherent powers of the High Court to prevent abuse of process and miscarriage of justice cannot be fettered by statutory rules.',
        'Where charges are groundless, forcing a trial causes irreparable injury.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 'bnss-overview',
        section: 'Section 528 (legacy s. 482 CrPC) & PC Act s. 19(3)(c)',
        title: 'Inherent powers of High Court and statutory restrictions on stay of trials',
        subjectSlug: 'bnss',
        topicId: 'bnss-overview',
      },
    ],
    reasoning: [
      {
        heading: 'Absolute statutory bar under Section 19(3)(c) PC Act',
        explanation:
          'Thomas, J. observed that corruption among public servants is a social disease that threatens democracy. Parliament enacted Section 19(3)(c) of the Prevention of Corruption Act with non-obstante words: "no court shall stay the proceedings under this Act on any other ground". The words "no court" include the High Court.',
      },
      {
        heading: 'Inherent powers cannot override express statutory prohibitions',
        explanation:
          'Inherent power under Section 482 CrPC is available only in areas not covered by express statutory prohibitions. Where Parliament has explicitly commanded that no court shall stay proceedings under the PC Act, the High Court cannot grant stay of trial under Section 482 CrPC.',
      },
    ],
    decision:
      'Appeal allowed. The interim stay granted by the High Court was vacated, and the Special Court was directed to proceed with the trial expeditiously.',
    holding:
      'High Courts cannot grant stay of proceedings in corruption trials under the Prevention of Corruption Act. Section 19(3)(c) of the PC Act is an absolute statutory bar that overrides Section 482 CrPC.',
    ratioDecidendi:
      'Section 19(3)(c) of the Prevention of Corruption Act, 1988 imposes an absolute bar on the grant of stay of proceedings in corruption cases. The inherent powers of the High Court under Section 482 CrPC cannot be exercised in contravention of an express statutory prohibition enacted by Parliament.',
    obiterDicta:
      'Corruption cases must be decided swiftly; protracted stays of trials destroy public faith in the criminal justice system.',
    relatedCases: [
      {
        judgmentId: 'asian-resurfacing-2018',
        caseName: 'Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI',
        citation: '(2018) 16 SCC 299',
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
      'Enforced the absolute statutory bar against stay of corruption trials under Section 19(3)(c) PC Act.',
      'Reaffirmed that Section 482 CrPC inherent powers cannot override express statutory prohibitions.',
      'Crucial authority for anti-corruption and criminal procedure exams.',
    ],
    mcqs: [
      {
        id: 'satya-narayan-mcq-1',
        question:
          'In Satya Narayan Sharma v. State of Rajasthan (2001), what was the holding regarding Section 19(3)(c) of the Prevention of Corruption Act?',
        options: [
          'High Courts can routinely grant stays in all corruption cases under Section 482 CrPC',
          'Section 19(3)(c) imposes an absolute bar against the grant of stay of corruption proceedings on any ground',
          'Only the Governor can grant a stay of a corruption trial',
          'Section 19(3)(c) applies only to private individuals',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that Section 19(3)(c) of the Prevention of Corruption Act contains an absolute prohibition against staying trials, which cannot be bypassed using Section 482 CrPC.',
      },
    ],
  },
  {
    id: 'asian-resurfacing-2018',
    caseName: 'Asian Resurfacing of Road Agency Pvt. Ltd. v. Central Bureau of Investigation',
    shortName: 'Asian Resurfacing',
    citation: '(2018) 16 SCC 299',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2018,
    bench: '3-Judge Bench',
    judges: ['Adarsh Kumar Goel, J.', 'R.F. Nariman, J.', 'Navin Sinha, J.'],
    subject: 'Bharatiya Nagarik Suraksha Sanhita',
    topics: ['Interim Stay', 'Automatic Vacation of Stay', '6-Month Rule', 'Trial Delays', 'Section 482 CrPC'],
    tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'CPC', 'Stay of Proceedings', '6-Month Rule', 'Asian Resurfacing'],
    summary:
      'Influential 3-judge bench decision directing that in all pending civil and criminal matters where a stay of trial had been granted by a High Court or subordinate court, the stay would automatically lapse upon the expiration of six months unless extended by a reasoned speaking order. (This 6-month automatic vacation rule was subsequently overruled by a 5-judge Constitution Bench in High Court Bar Association, Allahabad v. State of U.P. in 2024).',
    facts: [
      'In a CBI corruption prosecution under the Prevention of Corruption Act against Asian Resurfacing of Road Agency Pvt. Ltd., the trial court framed charges against the accused.',
      'The accused challenged the order framing charges by filing a petition under Section 482 CrPC before the Delhi High Court, and obtained an interim stay of the trial.',
      'The stay continued for years without final disposal, completely stalling the criminal trial.',
      'The matter came before a 3-judge bench of the Supreme Court to address the widespread crisis of trials stalled indefinitely by interim stay orders.',
    ],
    issues: [
      'Whether orders framing charges under the Prevention of Corruption Act can be challenged under Section 482 CrPC.',
      'Whether the Supreme Court can direct that interim stay orders granted by High Courts in civil and criminal trials shall automatically expire after six months.',
    ],
    arguments: {
      appellant: [
        'An order framing charges is an interlocutory order, and revision is barred under Section 397(2) CrPC and Section 19(3)(c) PC Act.',
        'Routine stays of trials bring the criminal justice system into disrepute.',
      ],
      respondent: [
        'Where the charge is completely groundless or prosecution suffers from patent lack of sanction, inherent power under Section 482 must be available.',
        'Courts must have power to grant stays to prevent irreparable trial hardship.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 'appeals-revision',
        section: 'Interlocutory Orders and Revision',
        title: 'Interim stay of criminal and civil trials',
        subjectSlug: 'bnss',
        topicId: 'appeals-revision',
      },
    ],
    reasoning: [
      {
        heading: 'The six-month automatic vacation directive',
        explanation:
          'Goel, J. held that remedies against framing of charges must be exercised with extreme caution. To eliminate the menace of indefinite stays, the Court directed that in all pending cases, civil or criminal, where stay of proceedings in a trial is granted, the stay shall automatically lapse after six months unless extended by a speaking order showing exceptional circumstances.',
      },
      {
        heading: 'Duty of trial courts after six months',
        explanation:
          'Trial courts were directed to automatically resume trials upon expiry of six months from the date of the stay order without waiting for formal communication from the High Court.',
      },
    ],
    decision:
      'Appeals disposed of. The Supreme Court laid down the 6-month automatic expiration rule for interim stay orders. (Overruled by 5-judge bench in High Court Bar Association, Allahabad in 2024).',
    holding:
      'Interim orders staying civil and criminal trials will automatically expire after six months unless extended by a speaking order. (Overruled in 2024).',
    ratioDecidendi:
      'In all cases where a stay of proceedings in a civil or criminal trial has been granted, the stay order shall automatically lapse after six months unless extended by a reasoned speaking order. (Note: Overruled by Constitution Bench in 2024).',
    obiterDicta:
      'Delay in trials due to stays granted by superior courts is the single greatest cause of docket congestion in India.',
    relatedCases: [
      {
        judgmentId: 'satya-narayan-sharma-2001',
        caseName: 'Satya Narayan Sharma v. State of Rajasthan',
        citation: '(2001) 8 SCC 607',
        relationship: 'followed',
      },
      {
        judgmentId: 'high-court-bar-assn-2024',
        caseName: 'High Court Bar Association, Allahabad v. State of U.P.',
        citation: '(2024) 6 SCC 267',
        relationship: 'overruled',
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
      'Origin of the controversial "6-month automatic vacation of stay" rule in Indian procedural law.',
      'Explicitly overruled by the 5-judge Constitution Bench in High Court Bar Association, Allahabad (2024).',
      'Important milestone in the procedural debate between speedy trials and judicial discretion.',
    ],
    mcqs: [
      {
        id: 'asian-resurfacing-mcq-1',
        question:
          'Which procedural rule was introduced by the 3-judge bench in Asian Resurfacing of Road Agency v. CBI (2018)?',
        options: [
          'Automatic acquittal of accused if trial is not finished in 1 year',
          'Automatic vacation of interim stay orders in civil and criminal trials after six months',
          'Abolition of anticipatory bail in corruption cases',
          'Mandatory live-streaming of all trial court proceedings',
        ],
        correctIndex: 1,
        explanation:
          'In Asian Resurfacing (2018), the Supreme Court directed that interim stay orders staying trials would automatically expire after six months unless specifically extended.',
      },
    ],
  },
  {
    id: 'high-court-bar-assn-2024',
    caseName: 'High Court Bar Association, Allahabad v. State of Uttar Pradesh',
    shortName: 'High Court Bar Assn. (Asian Resurfacing Overruled)',
    citation: '(2024) 6 SCC 267',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction',
    year: 2024,
    bench: '5-Judge Constitution Bench',
    judges: [
      'D.Y. Chandrachud, C.J.',
      'Abhay S. Oka, J.',
      'J.B. Pardiwala, J.',
      'Manoj Misra, J.',
      'Ujjal Bhuyan, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 142', 'Article 226', 'Interim Stay', 'Automatic Vacation Overruled', 'Judicial Discretion'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 142', 'Article 226', 'CPC', 'CrPC', 'Overruling Asian Resurfacing'],
    summary:
      'Unanimous 5-judge Constitution Bench ruling formally overruling Asian Resurfacing (2018). Held that Constitutional Courts cannot issue blanket judicial directives ordering automatic vacation of interim stay orders upon expiry of a fixed time period. An interim order granted after application of mind can be vacated or modified only after providing an opportunity of hearing and by judicial application of mind.',
    facts: [
      'Following the 2018 ruling in Asian Resurfacing, thousands of interim stay orders granted by High Courts across the country automatically lapsed after six months without any judicial hearing, causing chaotic resumption of trials even where serious jurisdictional issues were pending adjudication.',
      'The High Court Bar Association of Allahabad challenged this practice, arguing that automatic extinction of stay orders violates natural justice and subordinates High Courts to mechanical time ceilings.',
      'A 5-judge Constitution Bench was constituted by Chief Justice Chandrachud to reconsider the constitutional validity of the 6-month automatic vacation rule.',
    ],
    issues: [
      'Whether the Supreme Court in exercise of powers under Article 142 can issue blanket directions that all interim stay orders granted by High Courts shall automatically stand vacated after six months.',
      'Whether an interim order can be vacated automatically without judicial application of mind and without affording a hearing to the affected party.',
      'What are the constitutional limits on the exercise of extraordinary powers under Article 142 of the Constitution.',
    ],
    arguments: {
      appellant: [
        'Automatic vacation of stay without hearing violates the fundamental principles of natural justice and Article 14.',
        'High Courts are independent constitutional courts of record under Article 215 and not subordinate courts subject to administrative timetables.',
      ],
      respondent: [
        'The directive in Asian Resurfacing was necessary to combat chronic trial delays where trials remained frozen for decades.',
        'Article 142 empowers the Supreme Court to pass directions to do complete justice.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-32-226',
        article: 'Article 142 & Article 226',
        title: 'Enforcement of decrees and orders of Supreme Court and High Court writ powers',
        subjectSlug: 'constitution',
        topicId: 'art-32-226',
      },
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'interim',
        section: 'Inherent Powers and Stay Orders',
        title: 'Judicial discretion in granting and vacating interim injunctions and stays',
        subjectSlug: 'cpc',
        topicId: 'interim',
      },
    ],
    reasoning: [
      {
        heading: 'No automatic vacation of stay without judicial application of mind',
        explanation:
          'Oka, J. and Chandrachud, C.J. held that an interim order is passed by a court after applying its mind to the prima facie case, balance of convenience, and irreparable injury. A judicial order cannot be extinguished automatically by the passage of time without any judicial order passed after hearing the parties. Automatic vacation visits litigants with adverse consequences without notice, violating natural justice.',
      },
      {
        heading: 'Article 142 cannot be used to extinguish substantive rights or fetter High Courts',
        explanation:
          'The power under Article 142 is an extraordinary power meant to do complete justice between the parties to a cause; it cannot be used to rewrite statutes or issue blanket procedural legislation binding all courts. High Courts are constitutional courts with independent jurisdiction under Article 226 and 227; their constitutional powers cannot be fettered by automatic timetables.',
      },
    ],
    decision:
      'Reference answered unanimously. Asian Resurfacing overruled. The Supreme Court held that interim orders granted by High Courts and subordinate courts will not automatically lapse after six months.',
    holding:
      'Asian Resurfacing (2018) is overruled. Constitutional courts cannot issue blanket directives that interim stay orders will automatically expire after six months. A stay order can be vacated only after hearing the parties and by judicial application of mind.',
    ratioDecidendi:
      'The direction in Asian Resurfacing that interim stay orders shall automatically vacate upon expiry of six months is unconstitutional and contrary to the principles of natural justice. Article 142 cannot be invoked to issue blanket procedural fiats extinguishing judicial orders without a hearing. High Courts are constitutional courts under Article 215, and their judicial discretion in granting or continuing interim relief cannot be curtailed by automatic temporal expirations.',
    obiterDicta:
      'High Courts should give priority to hearing applications for vacation of stay, and decide them within a reasonable timeframe (normally within two months).',
    relatedCases: [
      {
        judgmentId: 'asian-resurfacing-2018',
        caseName: 'Asian Resurfacing of Road Agency Pvt. Ltd. v. CBI',
        citation: '(2018) 16 SCC 299',
        relationship: 'overruled',
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
      'Unanimously overruled the 6-month automatic vacation of stay rule from Asian Resurfacing (2018).',
      'Reaffirmed that High Courts under Article 226/227 are constitutional courts and not subordinate to procedural directives.',
      'Defines the outer limits of Supreme Court power under Article 142.',
    ],
    mcqs: [
      {
        id: 'high-court-bar-mcq-1',
        question:
          'In High Court Bar Association, Allahabad v. State of U.P. (2024), what did the 5-judge Constitution Bench hold regarding the 6-month automatic vacation of stay rule?',
        options: [
          'It extended the automatic vacation period from 6 months to 1 year',
          'It overruled Asian Resurfacing and held that stay orders cannot automatically vacate without judicial hearing and application of mind',
          'It abolished the power of High Courts to grant stays in all criminal cases',
          'It held that only the President can vacate a stay order',
        ],
        correctIndex: 1,
        explanation:
          'The 5-judge Constitution Bench in 2024 overruled Asian Resurfacing, ruling that automatic vacation of stay violates natural justice and stay orders can be vacated only by a judicial order after hearing.',
      },
    ],
  },
  {
    id: 'adr-voters-2002',
    caseName: 'Union of India v. Association for Democratic Reforms',
    shortName: 'ADR (Voter Right to Information)',
    citation: '(2002) 5 SCC 294',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate / Constitutional Jurisdiction',
    year: 2002,
    bench: '3-Judge Bench',
    judges: ['M.B. Shah, J.', 'B.P. Singh, J.', 'H.K. Sema, J.'],
    subject: 'Constitutional Law',
    topics: ['Right to Know', 'Article 19(1)(a)', 'Voter Rights', 'Candidate Disclosure', 'Election Transparency'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19', 'Elections', 'ADR', 'Voter Rights', 'Transparency'],
    summary:
      'Landmark 3-judge bench decision holding that voters have a fundamental right under Article 19(1)(a) to know the criminal antecedents, assets, liabilities, and educational qualifications of candidates contesting elections. Directed the Election Commission of India to mandate the filing of sworn affidavits by all candidates disclosure Form 26.',
    facts: [
      'The Association for Democratic Reforms (ADR) filed a public interest writ petition before the Delhi High Court seeking directions to compel candidates contesting parliamentary and assembly elections to disclose their criminal records, financial assets, and educational backgrounds.',
      'The High Court directed the Election Commission to make such disclosures mandatory.',
      'The Union of India appealed to the Supreme Court, contending that Parliament alone had legislative competence to prescribe candidate qualifications and disqualifications under the Representation of the People Act, 1951, and that courts could not impose additional conditions on candidates.',
    ],
    issues: [
      'Whether a citizen has a fundamental right under Article 19(1)(a) to know the background and qualifications of candidates seeking their vote.',
      'Whether the Election Commission under Article 324 can issue executive directions requiring candidates to file disclosure affidavits in the absence of parliamentary legislation.',
    ],
    arguments: {
      appellant: [
        'Right to vote and contest elections are statutory rights governed exclusively by the Representation of the People Act, 1951.',
        'Courts cannot legislate new disclosure requirements not provided by Parliament.',
      ],
      respondent: [
        'Freedom of speech and expression under Article 19(1)(a) includes the right to receive information and cast an informed vote.',
        'Growing criminalisation of politics requires transparency to protect democratic institutions.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a)',
        title: 'Freedom of speech and expression — Voter right to know candidate credentials',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'elections-art-324',
        article: 'Article 324',
        title: 'Plenary powers of Election Commission to conduct free and fair elections',
        subjectSlug: 'constitution',
        topicId: 'elections-art-324',
      },
    ],
    reasoning: [
      {
        heading: 'Voter right to know is a fundamental right under Article 19(1)(a)',
        explanation:
          'Shah, J. held that a citizen cannot participate meaningfully in democracy or exercise freedom of speech through voting without basic information about candidates. Casting a vote is an act of expression. Therefore, the voter has a fundamental right to know whether a candidate has criminal antecedents, what assets he possesses, and what education he has received.',
      },
      {
        heading: 'Plenary powers of the Election Commission under Article 324',
        explanation:
          'Where Parliament has not enacted a law, the Election Commission possesses reservoir and plenary powers under Article 324 to issue executive instructions to ensure free, fair, and informed elections.',
      },
    ],
    decision:
      'Appeal dismissed with directions. The Supreme Court directed the Election Commission to call for sworn affidavits from all election candidates regarding their criminal convictions, pending charges, assets/liabilities, and education.',
    holding:
      'Voters have a fundamental right under Article 19(1)(a) to know the criminal antecedents, assets, liabilities, and educational qualifications of election candidates. The Election Commission must mandate disclosure affidavits.',
    ratioDecidendi:
      'The right to vote is an expression of opinion protected under Article 19(1)(a). For an elector to exercise his franchise intelligently, information regarding candidates contesting elections is indispensable. The voter has a fundamental right under Article 19(1)(a) to know the antecedents of candidates. In the absence of statutory rules, the Election Commission has the power under Article 324 to mandate disclosure affidavits.',
    obiterDicta:
      'Criminalisation of politics is a grave threat to democracy; informed voters are the strongest defense against corrupted public offices.',
    relatedCases: [
      {
        judgmentId: 'raj-narain-1975',
        caseName: 'State of U.P. v. Raj Narain',
        citation: '(1975) 4 SCC 428',
        relationship: 'followed',
      },
      {
        judgmentId: 'pucl-nota-2013',
        caseName: 'PUCL v. Union of India (NOTA Case)',
        citation: '(2013) 10 SCC 1',
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
      'Origin of mandatory candidate disclosure affidavits (Form 26) in Indian elections.',
      'Derived voter right to know from Article 19(1)(a) freedom of speech and expression.',
      'Affirmed the plenary powers of the Election Commission of India under Article 324.',
    ],
    mcqs: [
      {
        id: 'adr-voters-mcq-1',
        question:
          'In Union of India v. Association for Democratic Reforms (2002), the Supreme Court derived the voter right to know candidate credentials from which constitutional provision?',
        options: [
          'Article 14 equality before law',
          'Article 19(1)(a) freedom of speech and expression',
          'Article 21 right to life',
          'Article 326 universal adult suffrage',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that casting a vote is a form of expression and the voter right to know candidate backgrounds is an integral part of Article 19(1)(a).',
      },
    ],
  },
  {
    id: 'pucl-nota-2013',
    caseName: 'People’s Union for Civil Liberties v. Union of India (NOTA Case)',
    shortName: 'PUCL (NOTA Case)',
    citation: '(2013) 10 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2013,
    bench: '3-Judge Bench',
    judges: ['P. Sathasivam, C.J.', 'Ranjana P. Desai, J.', 'Ranjan Gogoi, J.'],
    subject: 'Constitutional Law',
    topics: ['NOTA', 'Right to Reject', 'Article 19(1)(a)', 'Secret Ballot', 'Electoral Reforms'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19', 'Elections', 'NOTA', 'Secret Ballot', 'PUCL'],
    summary:
      'Landmark 3-judge bench precedent introducing the "None of the Above" (NOTA) option on Electronic Voting Machines (EVMs) and ballot papers. Held that the right to vote under Article 19(1)(a) includes the right to reject all candidates in absolute secrecy, and struck down Rules 41(2), 41(3), and 49-O of the Conduct of Elections Rules, 1961 in so far as they violated voter secrecy.',
    facts: [
      'Under Rule 49-O of the Conduct of Elections Rules, 1961, if an elector decided not to vote for any candidate, he had to inform the Presiding Officer and sign Form 17A, which was visible to polling agents, destroying secret ballot.',
      'The People’s Union for Civil Liberties (PUCL) filed a writ petition under Article 32 contending that forced disclosure of non-voting violates the secrecy of the ballot and Article 19(1)(a).',
      'The petitioner sought directions to provide a "None of the Above" (NOTA) button on EVMs so that electors could express dissent in complete secrecy.',
    ],
    issues: [
      'Whether the right to vote includes the negative right not to vote or reject all candidates in secret.',
      'Whether Rule 49-O violates Article 19(1)(a) and the principle of secret ballot by forcing a voter to disclose non-voting to polling agents.',
    ],
    arguments: {
      appellant: [
        'Freedom of speech includes freedom of negative expression; a voter must have the option to reject corrupt or unsuitable candidates without fear.',
        'Rule 49-O exposes dissenting voters to intimidation and physical violence by exposing their identity.',
      ],
      respondent: [
        'The right to vote is a statutory right under the RPA, not a fundamental right; Parliament did not intend a right of negative voting.',
        'NOTA buttons would cause administrative confusion without altering election outcomes.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a)',
        title: 'Freedom of speech and expression — Secret voting and right to express dissent',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'elections-art-324',
        article: 'Article 324',
        title: 'Superintendence of elections and secrecy of ballot',
        subjectSlug: 'constitution',
        topicId: 'elections-art-324',
      },
    ],
    reasoning: [
      {
        heading: 'Secrecy of ballot is absolute cornerstone of democracy',
        explanation:
          'Sathasivam, C.J. held that secrecy of the ballot is essential to ensure that an elector exercises franchise without fear of reprisal. A voter who decides not to vote for any candidate has the same right to secrecy as a voter who selects a candidate. Rule 49-O violated secrecy by requiring signature on an open register.',
      },
      {
        heading: 'Expression of dissent through NOTA',
        explanation:
          'Democracy is all about choices. Giving voters the option of "None of the Above" (NOTA) fosters purity in elections, encourages greater voter turnout, and sends a clear systemic signal to political parties to field clean and qualified candidates.',
      },
    ],
    decision:
      'Writ petition allowed. Rules 41(2), 41(3), and 49-O held ultra vires Section 128 RPA and Article 19(1)(a). The Supreme Court directed the Election Commission to provide a NOTA button on all EVMs and ballot papers.',
    holding:
      'Voters have a constitutional right under Article 19(1)(a) to cast a negative vote in complete secrecy. The Election Commission must provide a "None of the Above" (NOTA) option on EVMs.',
    ratioDecidendi:
      'The right of an elector to vote includes the right to express his disapproval or rejection of all candidates in complete secrecy under Article 19(1)(a). Secrecy of the ballot is an integral part of free and fair elections. Forcing a voter to disclose non-voting under Rule 49-O violates the secrecy of the ballot. The NOTA mechanism gives constitutional effect to secret voter dissent.',
    obiterDicta:
      'The Court expressed hope that NOTA would accelerate systemic cleansing of the electoral process by compelling political parties to reject candidates with criminal backgrounds.',
    relatedCases: [
      {
        judgmentId: 'adr-voters-2002',
        caseName: 'Union of India v. Association for Democratic Reforms',
        citation: '(2002) 5 SCC 294',
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
      'Introduced the "None of the Above" (NOTA) option on Indian EVMs and ballot papers.',
      'Struck down Rule 49-O of the Conduct of Elections Rules, 1961 for violating ballot secrecy.',
      'Recognized the right to express negative dissent as part of Article 19(1)(a).',
    ],
    mcqs: [
      {
        id: 'pucl-nota-mcq-1',
        question:
          'In People’s Union for Civil Liberties v. Union of India (2013), the Supreme Court introduced the NOTA option on EVMs by striking down which rule?',
        options: [
          'Rule 12 of the Bar Council Rules',
          'Rule 49-O of the Conduct of Elections Rules, 1961',
          'Rule 9(i) of the Central Inland Water Transport Rules',
          'Rule 3(b) of the Kerala Places of Worship Rules',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court struck down Rule 49-O because it forced voters who did not wish to vote to disclose their decision, violating secret ballot and Article 19(1)(a).',
      },
    ],
  },
  {
    id: 'electoral-bonds-2024',
    caseName: 'Association for Democratic Reforms v. Union of India (Electoral Bonds Case)',
    shortName: 'Electoral Bonds Case',
    citation: '(2024) 5 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2024,
    bench: '5-Judge Constitution Bench',
    judges: [
      'D.Y. Chandrachud, C.J.',
      'Sanjiv Khanna, J.',
      'B.R. Gavai, J.',
      'J.B. Pardiwala, J.',
      'Manoj Misra, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Electoral Bonds', 'Article 19(1)(a)', 'Voter Right to Information', 'Corporate Political Funding', 'Proportionality Test'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19', 'Electoral Bonds', 'Political Funding', 'Proportionality'],
    summary:
      'Unanimous 5-judge Constitution Bench decision striking down the Electoral Bond Scheme, 2018 and allied amendments to the Finance Act, 2017, Income-tax Act, 1961, Representation of the People Act, 1951, and Companies Act, 2013. Held that anonymous political contributions through electoral bonds violate the voter’s fundamental right to information under Article 19(1)(a) and fail the proportionality test.',
    facts: [
      'The Union of India introduced the Electoral Bond Scheme, 2018, which allowed Indian citizens and corporations to purchase anonymous promissory notes from the State Bank of India and donate them to registered political parties.',
      'Allied amendments in the Finance Act, 2017 removed the requirement of reporting donor names under Section 29C RPA, removed tax disclosure requirements under the Income-tax Act, and deleted the statutory cap on corporate political donations (previously 7.5% of net profits) under Section 182 of the Companies Act, allowing loss-making and shell companies to make unlimited political contributions.',
      'The Association for Democratic Reforms (ADR), Communist Party of India (Marxist), and civil rights activists challenged the scheme under Article 32 as unconstitutional, promoting opaque corporate lobbying and violating the voter right to information.',
    ],
    issues: [
      'Whether the Electoral Bond Scheme and anonymous corporate funding violate the voter fundamental right to information under Article 19(1)(a).',
      'Whether the scheme satisfies the four-pronged constitutional test of proportionality.',
      'Whether unlimited corporate contributions permitted under amended Section 182 of the Companies Act violate free and fair elections under Article 14.',
    ],
    arguments: {
      appellant: [
        'Anonymity deprives voters of knowledge regarding financial quid pro quo between corporate donors and ruling political parties.',
        'Permitting unlimited contributions by loss-making shell companies facilitates corruption and money laundering.',
      ],
      respondent: [
        'The scheme was designed to curb cash black money transactions in elections and incentivize banking-channel donations.',
        'Donor confidentiality protects donors from political victimization by rival political parties.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a)',
        title: 'Freedom of speech and expression — Voter right to know sources of political funding',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
      {
        actId: 'company',
        actName: 'Companies Act, 2013',
        provisionId: 'ca-s-166',
        section: 'Section 182',
        title: 'Prohibitions and restrictions regarding political contributions by companies',
        subjectSlug: 'company',
        topicId: 'ca-s-166',
      },
    ],
    reasoning: [
      {
        heading: 'Failure of the Proportionality Test under Article 19(1)(a)',
        explanation:
          'Chandrachud, C.J. applied the four-pronged proportionality test: (1) Legitimate goal; (2) Rational nexus; (3) Least restrictive measure; and (4) Balancing of rights. While curbing black money is a legitimate goal, complete anonymity of political donations is not the least restrictive measure. Other banking-channel methods (like Electoral Trusts) protect transparency while preventing cash. The voter right to information under Article 19(1)(a) outweighs donor privacy.',
      },
      {
        heading: 'Corporate influence and unconstitutional amendment of Companies Act',
        explanation:
          'Sanjiv Khanna, J. and Chandrachud, C.J. held that corporate political donations are distinct from individual donations; corporate funding is often an investment in policy influence (quid pro quo). Deleting the 7.5% profit cap under Section 182 Companies Act allowed shell companies to be created solely for funnelling unlimited funds, violating free and fair elections under Article 14.',
      },
    ],
    decision:
      'Writ petitions allowed unanimously. The Electoral Bond Scheme, 2018 was declared unconstitutional and struck down. The State Bank of India was directed to immediately stop issuing bonds and furnish full purchase and redemption details to the Election Commission for public publication.',
    holding:
      'The Electoral Bond Scheme is unconstitutional as it violates the voter fundamental right to information under Article 19(1)(a). Amendments to the RPA, Income-tax Act, and Companies Act permitting anonymous political funding are void.',
    ratioDecidendi:
      'The fundamental right to information under Article 19(1)(a) encompasses the voter right to know the sources of political party funding. Political contributions have a direct bearing on governance and policymaking. Complete anonymity of electoral contributions fails the proportionality test because it prioritizes donor privacy over democratic transparency. Corporate funding without profit ceilings permits corporate state capture and violates Article 14.',
    obiterDicta:
      'The Court noted that money is an instrument of political influence; unequal access to political funding distorts the level playing field in elections.',
    relatedCases: [
      {
        judgmentId: 'adr-voters-2002',
        caseName: 'Union of India v. Association for Democratic Reforms',
        citation: '(2002) 5 SCC 294',
        relationship: 'elaborated',
      },
      {
        judgmentId: 'pucl-nota-2013',
        caseName: 'PUCL v. Union of India (NOTA Case)',
        citation: '(2013) 10 SCC 1',
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
      'Unanimously struck down the Electoral Bond Scheme, 2018 under Article 19(1)(a).',
      'Applied the four-stage proportionality test to political campaign finance laws.',
      'Invalidated the deletion of the 7.5% corporate profit ceiling under Section 182 Companies Act.',
    ],
    mcqs: [
      {
        id: 'electoral-bonds-mcq-1',
        question:
          'In the Electoral Bonds case (ADR v. Union of India, 2024), on what primary constitutional ground was the anonymous bond scheme struck down?',
        options: [
          'It violated Article 300A property rights of the State Bank of India',
          'It violated the voter fundamental right to information under Article 19(1)(a)',
          'It exceeded the legislative competence of Parliament under List I',
          'It was passed as a Money Bill in violation of Article 110',
        ],
        correctIndex: 1,
        explanation:
          'The 5-judge Constitution Bench held that anonymous electoral bonds violate the voter fundamental right to information under Article 19(1)(a) and fail the proportionality test.',
      },
    ],
  },
  {
    id: 'mayer-hans-george-1965',
    caseName: 'State of Maharashtra v. Mayer Hans George',
    shortName: 'Mayer Hans George',
    citation: 'AIR 1965 SC 722',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1964,
    bench: '3-Judge Bench',
    judges: ['K. Subba Rao, J.', 'R.S. Bachawat, J.', 'J.R. Mudholkar, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Doctrine of Mens Rea', 'Strict Liability', 'FERA Gold Smuggling', 'Statutory Offences', 'Ignorance of Law'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Mens Rea', 'Strict Liability', 'FERA', 'Criminal Jurisprudence'],
    summary:
      'Leading 3-judge bench precedent on the exclusion of mens rea in statutory economic offences. Held that Section 8(1) of the Foreign Exchange Regulation Act, 1947 creates an absolute statutory prohibition against bringing gold into India without RBI permission. Ignorance of an RBI notification is no defense (ignorantia juris non excusat), and mens rea is not an essential ingredient for offences designed to protect national currency and economic security.',
    facts: [
      'Mayer Hans George, a German national, boarded a Swissair flight from Zurich to Manila on November 27, 1962.',
      'The aircraft touched down at Santa Cruz Airport, Bombay for a scheduled transit halt. The passenger never intended to disembark or sell gold in India.',
      'Indian Customs authorities, acting on intelligence, searched the transit passenger and found 34 kg of gold bars concealed in a specially fabricated jacket.',
      'Under an RBI notification published in the Gazette of India on November 24, 1962 (just 3 days earlier), the general permission for transit passengers to carry gold was rescinded.',
      'The passenger was prosecuted under Section 8(1) read with Section 23(1-A) of FERA.',
      'The Bombay High Court acquitted him on the ground that he lacked mens rea and had no knowledge of the newly published notification.',
      'The State appealed to the Supreme Court.',
    ],
    issues: [
      'Whether mens rea is an essential ingredient of the offense of unauthorized importation of gold under Section 8(1) of FERA, 1947.',
      'Whether ignorance of an RBI notification published in the official Gazette can be pleaded as a defense by a foreign transit passenger (ignorantia juris non excusat).',
    ],
    arguments: {
      appellant: [
        'FERA is an economic security statute enacted to safeguard foreign exchange reserves; its prohibitions are absolute strict liability.',
        'Ignorance of published delegated legislation is no defense; publication in the Gazette is deemed public notice.',
      ],
      respondent: [
        'The accused was an innocent transit passenger flying from Zurich to Manila with no intention to smuggle gold into India.',
        'The notification was published only three days prior to the flight while the accused was outside India.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'doctrine-mens-rea',
        title: 'Doctrine of Mens Rea and Statutory Exceptions',
        subjectSlug: 'bns',
        topicId: 'doctrine-mens-rea',
      },
    ],
    reasoning: [
      {
        heading: 'Exclusion of mens rea in social and economic statutes',
        explanation:
          'Rajagopala Ayyangar, J. and Mudholkar, J. for the majority held that while mens rea is normally presumed in traditional common law crimes, it can be excluded by express statutory words or by necessary implication. FERA was enacted to protect the economic life of the nation from gold smuggling. If proof of guilty intention was required, the purpose of the statute would be defeated. Section 8(1) creates an absolute prohibition.',
      },
      {
        heading: 'Ignorantia juris non excusat',
        explanation:
          'Once a notification is published in the Official Gazette, it acquires legal effect. The legal maxim ignorantia juris non excusat applies to foreigners as well as citizens. The lack of knowledge of the publication does not exonerate the passenger.',
      },
    ],
    decision:
      'Appeal allowed (Subba Rao, J. dissenting). The acquittal was reversed and the accused was convicted under Section 23(1-A) FERA.',
    holding:
      'Mens rea is not an essential ingredient of Section 8(1) FERA. Bringing gold into Indian territory without RBI permission is a strict liability offense. Ignorance of a published statutory notification is no defense.',
    ratioDecidendi:
      'Unless a statute either clearly or by necessary implication rules out mens rea, an accused should not be convicted without a guilty mind. However, in statutory offenses relating to economic welfare and revenue (like FERA), the presumption of mens rea is displaced by absolute prohibition. Once a delegated regulation is published in the Gazette, ignorance of law cannot be pleaded as an excuse.',
    obiterDicta:
      'Subba Rao, J. in his famous dissent argued that criminal law should not penalize individuals who have neither a guilty mind nor a reasonable opportunity of knowing the law.',
    relatedCases: [
      {
        judgmentId: 'kartar-singh-1994',
        caseName: 'Kartar Singh v. State of Punjab',
        citation: '(1994) 3 SCC 569',
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
      'Leading authority on the exclusion of mens rea in statutory economic crimes.',
      'Classic application of the maxim "ignorantia juris non excusat" to transit passengers.',
      'Key reference for criminal law papers on general principles of liability.',
    ],
    mcqs: [
      {
        id: 'mayer-hans-george-mcq-1',
        question:
          'In State of Maharashtra v. Mayer Hans George (1965), the Supreme Court ruled that under Section 8(1) of FERA:',
        options: [
          'Mens rea is an absolute requirement that must be proved by the prosecution',
          'Mens rea is excluded by necessary implication, and bringing gold into India without permission is a strict liability offence',
          'Foreign transit passengers are exempt from Indian customs laws',
          'Only intentional sale of gold within Indian markets is punishable',
        ],
        correctIndex: 1,
        explanation:
          'The majority held that FERA excludes mens rea by necessary implication to protect national economy, creating strict liability where ignorance of published notifications is no defense.',
      },
    ],
  },
  {
    id: 'kartar-singh-1994',
    caseName: 'Kartar Singh v. State of Punjab',
    shortName: 'Kartar Singh (TADA)',
    citation: '(1994) 3 SCC 569',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction',
    year: 1994,
    bench: '5-Judge Constitution Bench',
    judges: ['S. Ratnavel Pandian, J.', 'M.M. Punchhi, J.', 'K. Ramaswamy, J.', 'S.C. Agrawal, J.', 'R.M. Sahai, J.'],
    subject: 'Constitutional Law',
    topics: ['TADA', 'Anti-Terror Laws', 'Confessions to Police', 'Bail Restrictions', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Criminal Law', 'TADA', 'Anti-Terror', 'Article 21', 'Confessions'],
    summary:
      'Monumental 5-judge Constitution Bench precedent upholding the legislative competence and constitutional validity of the Terrorist and Disruptive Activities (Prevention) Act, 1987 (TADA). Upheld the admissibility of confessions recorded by senior police officers (SP rank) under Section 15 of TADA with strict procedural safeguards, and upheld stringent twin bail conditions.',
    facts: [
      'During the height of militancy in Punjab, Jammu & Kashmir, and the North-East, Parliament enacted TADA, 1987 to tackle terrorist violence and disruptive activities.',
      'TADA contained extraordinary departures from general criminal law: Section 15 made confessions made to a police officer not below the rank of SP admissible in evidence (overriding Sections 25 and 26 Evidence Act); Section 20(8) imposed reverse-burden twin conditions for bail; and Special Designated Courts tried offenses in-camera.',
      'Hundreds of writ petitions were filed before the Supreme Court challenging the constitutional validity of TADA under Articles 14, 20(3), and 21.',
    ],
    issues: [
      'Whether Parliament had legislative competence to enact TADA under Entry 1 of List I (Defense of India) or Residuary Entry 97.',
      'Whether Section 15 of TADA, which makes confessions made to police officers admissible, violates Article 14 and Article 20(3).',
      'Whether stringent twin bail conditions under Section 20(8) violate Article 21.',
    ],
    arguments: {
      appellant: [
        'Public Order is Entry 1 of List II (State List); Parliament lacked competence to enact an anti-crime law.',
        'Making confessions to police admissible destroys the bedrock of fair trial and encourages custodial torture.',
      ],
      respondent: [
        'Terrorism is an armed assault on the sovereignty and integrity of India, falling under Entry 1 List I and Entry 97.',
        'Ordinary criminal law is inadequate to convict terrorists who terrorize witnesses and judges.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'fundamental-rights',
        article: 'Article 21 & Article 20(3)',
        title: 'Fair trial guarantees and protection against self-incrimination in anti-terror statutes',
        subjectSlug: 'constitution',
        topicId: 'fundamental-rights',
      },
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023',
        provisionId: 'admissions-confessions',
        section: 'Section 23 (legacy s. 25/26 Evidence Act)',
        title: 'Inadmissibility of confessions to police officers and statutory exceptions',
        subjectSlug: 'bsa',
        topicId: 'admissions-confessions',
      },
    ],
    reasoning: [
      {
        heading: 'Parliamentary competence to combat terrorism',
        explanation:
          'Pandian, J. for the majority held that terrorism is not ordinary law-and-order or public order under List II. It is an insidious warfare aimed at destroying the sovereignty and security of India. Parliament had full competence under Entry 1 of List I and Entry 97 to enact TADA.',
      },
      {
        heading: 'Validity of police confessions with mandatory safeguards',
        explanation:
          'Section 15 of TADA was upheld as an exceptional measure given the reality of terrorism. However, to prevent custodial third-degree torture, the Court laid down six mandatory guidelines: (1) Confession must be recorded by an SP rank officer; (2) The officer must warn the accused that he is not bound to confess; (3) Reflection time of at least 24 hours must be given; (4) Recording must be done in a free atmosphere without investigating officers present; (5) The accused must be produced before a Magistrate with the record; and (6) Medical examination must be conducted.',
      },
    ],
    decision:
      'Writ petitions dismissed in part. TADA, 1987 upheld as constitutionally valid, subject to strict procedural safeguards for recording police confessions.',
    holding:
      'Parliament has legislative competence to enact anti-terror statutes. Section 15 of TADA permitting confessions to SP-rank police officers is valid, subject to strict procedural guidelines.',
    ratioDecidendi:
      'Terrorism is an extraordinary threat to national sovereignty falling outside the domain of ordinary public order under the State List. Parliament possesses legislative competence under the Union List to enact special anti-terror laws. Special provisions making confessions recorded by senior police officers admissible and imposing stringent bail restrictions are constitutionally valid when read with mandatory procedural safeguards to prevent custodial abuse.',
    obiterDicta:
      'The Court directed the constitution of State Review Committees headed by retired High Court judges to review TADA cases and prevent misuse against political opponents.',
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
      'Upheld the constitutional validity of TADA and special anti-terror procedural departures.',
      'Prescribed the 6 mandatory guidelines for recording police confessions under special statutes.',
      'Foundational precedent for subsequent anti-terror laws (POTA and UAPA).',
    ],
    mcqs: [
      {
        id: 'kartar-singh-mcq-1',
        question:
          'In Kartar Singh v. State of Punjab (1994), what condition did the Supreme Court mandate to uphold confessions recorded by police officers under Section 15 of TADA?',
        options: [
          'Confessions can only be recorded by a Sub-Inspector',
          'Confessions must be recorded by an officer not below the rank of SP with mandatory safeguards including reflection time and warning',
          'Confessions are totally inadmissible under all circumstances',
          'Confessions must be broadcast live on television',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench upheld Section 15 TADA by mandating that confessions must be recorded by an officer of the rank of SP or above, subject to strict procedural safeguards.',
      },
    ],
  },
  {
    id: 'pucl-encounter-2014',
    caseName: 'People’s Union for Civil Liberties v. State of Maharashtra (Encounter Guidelines)',
    shortName: 'PUCL (Encounter Guidelines)',
    citation: '(2014) 10 SCC 635',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2014,
    bench: '2-Judge Bench',
    judges: ['R.M. Lodha, C.J.', 'Rohinton F. Nariman, J.'],
    subject: 'Bharatiya Nagarik Suraksha Sanhita',
    topics: ['Police Encounters', 'Extra-Judicial Killings', '16 Mandatory Guidelines', 'Article 21', 'Magisterial Inquiry'],
    tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'Constitution', 'Article 21', 'Police Encounters', 'Fake Encounters'],
    summary:
      'Historic Supreme Court ruling formulating 16 mandatory guidelines to be strictly observed in all cases of police encounter deaths. Held that extra-judicial killings by police strike at the root of the rule of law and Article 21; mandated independent investigation by CID or another police station, compulsory FIR registration, Magisterial inquiry under Section 176 CrPC, and reporting to the NHRC.',
    facts: [
      'The People’s Union for Civil Liberties (PUCL) and the Committee for Protection of Democratic Rights (CPDR) filed writ petitions before the Bombay High Court and subsequently the Supreme Court highlighting widespread fake encounters in Mumbai.',
      'Between 1995 and 1997 alone, 99 encounter killings occurred in Mumbai where underworld criminals were shot dead by "encounter specialist" police officers, who invariably pleaded private defence.',
      'No independent FIRs were registered against the police officers involved, and no independent criminal inquiries were conducted.',
    ],
    issues: [
      'What procedure must be followed by law enforcement agencies when an encounter takes place resulting in death.',
      'Whether an independent investigation into police encounter killings is mandatory under Article 21.',
    ],
    arguments: {
      appellant: [
        'Fake encounters are state-sponsored custodial murders that violate the sanctity of life under Article 21.',
        'Police officers cannot be judges, juries, and executioners in the name of curbing organized crime.',
      ],
      respondent: [
        'Police officers face heavily armed gangsters and act in the exercise of their legitimate right of private defence under Section 96-106 IPC.',
        'Demoralizing the police force will give criminals free rein.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 'fir-investigation',
        section: 'Section 173 & Section 196 (legacy s. 154/176 CrPC)',
        title: 'Mandatory registration of FIR and Magisterial inquiry into custodial deaths',
        subjectSlug: 'bnss',
        topicId: 'fir-investigation',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Protection of life and personal liberty against extra-judicial executions',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Rule of law and prohibition of trigger-happy policing',
        explanation:
          'Lodha, C.J. held that it is not the duty of the police to kill an accused merely because he is a dreaded criminal. The right to life under Article 21 is available to every person, including convicts and undertrials. A police officer who kills in an encounter cannot claim immunity without proving self-defence in a regular, independent investigation.',
      },
      {
        heading: 'The 16 Mandatory Guidelines',
        explanation:
          'The Court formulated 16 comprehensive guidelines declared as law under Article 141: (1) Immediate recording of tip-off in writing; (2) Mandatory FIR registration; (3) Independent investigation by CID or team from another police station headed by a senior officer; (4) Magisterial inquiry under Section 176 CrPC in all cases; (5) Information to NHRC/State HRC; (6) Medical aid to injured; (7) Seizure and ballistic testing of police weapons; (8) Six-monthly review by High Courts.',
      },
    ],
    decision:
      'Writ petitions disposed of with 16 binding nationwide guidelines declared as law under Article 141 and Article 142 of the Constitution.',
    holding:
      'Police encounter deaths must be subjected to independent criminal investigation and Magisterial inquiry. The 16 PUCL guidelines must be strictly followed in all encounter killings across India.',
    ratioDecidendi:
      'Extra-judicial encounter killings violate the fundamental right to life under Article 21. Any death occurring during police action must be treated as a potential culpable homicide and subjected to an independent investigation by CID or another police team, followed by a mandatory Magisterial inquiry under Section 176 CrPC.',
    obiterDicta:
      'Police encounters cannot become a shortcut to bypass the judicial trial process in a constitutional democracy.',
    relatedCases: [
      {
        judgmentId: 'dk-basu-1997',
        caseName: 'D.K. Basu v. State of West Bengal',
        citation: '(1997) 1 SCC 416',
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
      'Laid down the 16 mandatory guidelines governing police encounter killings in India.',
      'Mandated independent CID/police investigation and Section 176 CrPC Magisterial inquiry.',
      'Direct counterpart to D.K. Basu guidelines in the context of extra-judicial shootings.',
    ],
    mcqs: [
      {
        id: 'pucl-encounter-mcq-1',
        question:
          'In PUCL v. State of Maharashtra (2014), what did the Supreme Court prescribe regarding police encounter killings?',
        options: [
          'Immediate promotion and cash rewards for encounter specialist officers',
          '16 mandatory guidelines including independent investigation by CID and mandatory Magisterial inquiry',
          'Immunity from prosecution under Section 197 CrPC for all encounter deaths',
          'Transfer of all encounter cases to military courts',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court laid down 16 mandatory guidelines, including independent investigation by CID or another police station and mandatory Magisterial inquiry under Section 176 CrPC.',
      },
    ],
  },
  {
    id: 'tehseen-poonawalla-2018',
    caseName: 'Tehseen S. Poonawalla v. Union of India (Mob Lynching Case)',
    shortName: 'Tehseen Poonawalla (Mob Lynching)',
    citation: '(2018) 9 SCC 501',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2018,
    bench: '3-Judge Bench',
    judges: ['Dipak Misra, C.J.', 'A.M. Khanwilkar, J.', 'D.Y. Chandrachud, J.'],
    subject: 'Constitutional Law',
    topics: ['Mob Lynching', 'Cow Vigilantism', 'Article 21', 'Preventive Guidelines', 'Fast Track Courts'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 21', 'Mob Lynching', 'Rule of Law', 'Vigilantism'],
    summary:
      'Landmark 3-judge bench precedent condemning mob lynching and vigilantism as "horrendous acts of mobocracy". Formulated a comprehensive three-tiered set of preventive, remedial, and punitive guidelines to eradicate mob violence and cow vigilantism, directing States to designate senior police officers as Nodal Officers, set up Fast Track Courts, and provide compensation to victims under Article 21.',
    facts: [
      'Between 2015 and 2018, a surge of brutal mob lynching incidents occurred across several States (including Haryana, Rajasthan, and Jharkhand) where self-styled cow vigilante groups attacked and killed dairy farmers, cattle transporters, and minority citizens based on rumors of cow slaughter or child lifting.',
      'Tehseen Poonawalla and Tushar Gandhi filed writ petitions under Article 32 seeking urgent directions to State Governments to curb vigilantism and punish police inaction.',
    ],
    issues: [
      'Whether the State has an affirmative constitutional duty under Article 21 to prevent mob lynching and vigilantism.',
      'What preventive, remedial, and punitive measures must be instituted to eradicate mobocracy and restore public order.',
    ],
    arguments: {
      appellant: [
        'Vigilante groups are functioning as extra-judicial executioners with active or passive connivance of local police.',
        'Mobocracy is destroying secularism, pluralism, and the rule of law.',
      ],
      respondent: [
        'Law and order is a State subject; State Governments are taking action under general penal provisions.',
        'Existing provisions under IPC and CrPC are sufficient to prosecute offenders.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Duty of State to protect citizens against mob violence and vigilantism',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 103(2) BNS',
        title: 'Mob lynching by group of five or more persons on grounds of race, caste, or religion',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
    ],
    reasoning: [
      {
        heading: 'Mobocracy is the antithesis of the rule of law',
        explanation:
          'Dipak Misra, C.J. held that no citizen has the right to take the law into his own hands or become a law unto himself. Mob vigilantism and lynching are horrendous acts of mobocracy that strike at the root of constitutional governance. Pluralism and tolerance are the hallmarks of Indian democracy, and the State has a primary duty to protect citizens against mob fury.',
      },
      {
        heading: 'Three-tiered guidelines: Preventive, Remedial, and Punitive',
        explanation:
          'The Court laid down comprehensive guidelines: (1) Preventive: Appointment of Superintendent of Police rank Nodal Officers in each district, identification of sensitive areas, and patrolling; (2) Remedial: Immediate FIR registration, fast-track trial within 6 months, and victim compensation scheme; (3) Punitive: Departmental action against police officers who fail to prevent or investigate lynching.',
      },
    ],
    decision:
      'Writ petitions disposed of with binding nationwide guidelines. Parliament was urged to enact a dedicated separate penal statute specifically criminalizing mob lynching.',
    holding:
      'The State has a constitutional obligation under Article 21 to protect citizens from mob violence. Comprehensive preventive, remedial, and punitive guidelines issued to eliminate vigilantism.',
    ratioDecidendi:
      'Mob lynching is an egregious assault on the rule of law and human dignity under Article 21. The State has an affirmative duty to prevent mob violence and vigilantism through designated Nodal Officers, speedy investigation, and fast-track trials. Police officers who fail to act against lynch mobs are guilty of dereliction of duty and subject to disciplinary action.',
    obiterDicta:
      'Parliament was recommended to create a separate offense for lynching and provide adequate punishment to instill deterrence.',
    relatedCases: [
      {
        judgmentId: 'shakti-vahini-2018',
        caseName: 'Shakti Vahini v. Union of India',
        citation: '(2018) 7 SCC 192',
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
      'Formulated the three-tiered (Preventive, Remedial, Punitive) guidelines against mob lynching.',
      'Prompted the specific incorporation of mob lynching into criminal law (Section 103(2) BNS).',
      'Condemned "mobocracy" and reaffirmed the affirmative duty of the State under Article 21.',
    ],
    mcqs: [
      {
        id: 'tehseen-mob-mcq-1',
        question:
          'In Tehseen S. Poonawalla v. Union of India (2018), what did the Supreme Court recommend to Parliament regarding mob lynching?',
        options: [
          'Abolition of all cattle protection laws',
          'Enactment of a dedicated separate penal statute specifically criminalizing mob lynching',
          'Immunity for local village panchayats',
          'Transfer of mob trials to the military',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court recommended that Parliament enact a separate penal statute to punish mob lynching, which was later recognized in Section 103(2) of the BNS, 2023.',
      },
    ],
  },
  {
    id: 'shakti-vahini-2018',
    caseName: 'Shakti Vahini v. Union of India (Honor Killing Case)',
    shortName: 'Shakti Vahini (Honor Killings)',
    citation: '(2018) 7 SCC 192',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2018,
    bench: '3-Judge Bench',
    judges: ['Dipak Misra, C.J.', 'A.M. Khanwilkar, J.', 'D.Y. Chandrachud, J.'],
    subject: 'Constitutional Law',
    topics: ['Honor Killing', 'Khap Panchayats', 'Right to Marry', 'Article 21', 'Article 19'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 21', 'Article 19', 'Honor Killing', 'Khap Panchayat', 'Right to Marry'],
    summary:
      'Landmark 3-judge bench decision declaring that two consenting adults have a fundamental right under Articles 19 and 21 to choose a life partner and enter into marriage without interference from family, caste, or community. Held that Khap Panchayats and caste assemblies have zero legal authority to summon, harass, punish, or execute young couples for inter-caste or inter-religious marriages.',
    facts: [
      'Shakti Vahini, a non-governmental organization, filed a writ petition under Article 32 seeking preventive and punitive measures against the rampant practice of honor killings orchestrated by informal caste bodies known as "Khap Panchayats" in Haryana, Punjab, and western Uttar Pradesh.',
      'Khap Panchayats issued decrees condemning young men and women who married outside their caste or within the same gotra (clan), resulting in brutal physical assaults, social boycotts, and honor killings.',
      'State authorities routinely failed to provide protection to inter-caste couples or prosecute powerful community elders.',
    ],
    issues: [
      'Whether consenting adult individuals have a fundamental right under Articles 19 and 21 to marry a person of their choice.',
      'Whether Khap Panchayats or community elders have any legal sanction to interfere with or dictate matrimonial unions.',
    ],
    arguments: {
      appellant: [
        'Honor killings and extra-judicial Khap decrees are barbarous attacks on the constitutional right to life, liberty, and personal dignity.',
        'The State must provide safe houses, police escorts, and swift prosecution to protect inter-caste couples.',
      ],
      respondent: [
        'Khap Panchayats argued they preserve ancient social customs and sagotra marriage prohibitions.',
        'State Governments claimed existing police machinery was adequate.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 19',
        title: 'Right to choose a life partner and freedom of matrimonial choice',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Freedom of choice in marriage is part of Article 21 dignity',
        explanation:
          'Dipak Misra, C.J. held that when two adults consensually choose each other as life partners, it is a manifestation of their choice which is recognized under Articles 19 and 21 of the Constitution. The consent of the family or community is not necessary once two adults agree to enter into wedlock.',
      },
      {
        heading: 'Complete illegality of Khap Panchayats',
        explanation:
          'The Court held that any assembly of elders or Khap Panchayat that convenes to adjudicate on the matrimonial choice of two adults is completely illegal and without jurisdiction. The Court laid down preventive, remedial, and punitive guidelines, including the establishment of safe houses and round-the-clock helplines for threatened couples.',
      },
    ],
    decision:
      'Writ petition allowed. Binding preventive, remedial, and punitive guidelines issued to all State Governments to eradicate honor killings and prohibit Khap Panchayat diktats.',
    holding:
      'Consenting adults have a fundamental right under Articles 19 and 21 to marry of their own choice. Khap Panchayats have no authority to interfere, and any harassment or honor killing is a grave constitutional crime.',
    ratioDecidendi:
      'The choice of a life partner is an inseparable constituent of the fundamental right to life, liberty, and dignity under Article 21. Neither the family, the community, nor a self-styled caste panchayat has the legal right to question, dictate, or interfere with the consensual marriage of two adults. Extra-judicial bodies like Khap Panchayats are unlawful, and the State is bound to provide safe shelter and police protection to threatened couples.',
    obiterDicta:
      'Customs that subvert human dignity and sanction violence must be extinguished without remorse in a constitutional republic.',
    relatedCases: [
      {
        caseName: 'Shafeen Jahan v. Asokan K.M. (Hadiya Case)',
        citation: '(2018) 16 SCC 368',
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
      'Recognized the right to choose a life partner as an integral component of Article 21.',
      'Declared Khap Panchayat interference in marriages totally illegal and unauthorized.',
      'Mandated safe houses and special police protection cells for inter-caste/inter-faith couples.',
    ],
    mcqs: [
      {
        id: 'shakti-vahini-mcq-1',
        question:
          'In Shakti Vahini v. Union of India (2018), what did the Supreme Court rule regarding the right of two adults to marry?',
        options: [
          'Marriage requires prior written consent from village caste panchayats',
          'Consenting adults have a fundamental right under Articles 19 and 21 to marry of their own choice without interference',
          'Inter-caste marriages are permitted only with District Magistrate permission',
          'Khap Panchayats have statutory authority to annul sagotra marriages',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held in Shakti Vahini that consenting adults have a fundamental right under Articles 19 and 21 to choose a life partner, and Khap Panchayats have zero legal authority to interfere.',
      },
    ],
  },
  {
    id: 'br-kapoor-2001',
    caseName: 'B.R. Kapoor v. State of Tamil Nadu (Jayalalitha Case)',
    shortName: 'B.R. Kapoor (Jayalalitha)',
    citation: '(2001) 7 SCC 231',
    court: 'Supreme Court of India',
    jurisdiction: 'Original Jurisdiction (Article 32)',
    year: 2001,
    bench: '5-Judge Constitution Bench',
    judges: ['S.P. Bharucha, J.', 'Syed Murtaza Fazal Ali, J.', 'B.N. Kirpal, J.', 'G.B. Pattanaik, J.', 'Ruma Pal, J.'],
    subject: 'Constitutional Law',
    topics: ['Article 164', 'Chief Minister Appointment', 'Disqualification Section 8(3) RPA', 'Writ of Quo Warranto', 'Governor Discretion'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 164', 'Chief Minister', 'Quo Warranto', 'RPA', 'Disqualification'],
    summary:
      'Historic 5-judge Constitution Bench decision quashing the appointment of J. Jayalalitha as Chief Minister of Tamil Nadu. Held that a person who is convicted of a criminal offence and disqualified from being a member of the Legislative Assembly under Section 8(3) of the Representation of the People Act, 1951 cannot be appointed Chief Minister by the Governor under Article 164(1). Article 164(4) cannot be used as a backdoor entry for disqualified felons.',
    facts: [
      'J. Jayalalitha, leader of the AIADMK, was convicted by a Special Judge in October 2000 for offenses under the Prevention of Corruption Act (TANSI land scam) and sentenced to three years rigorous imprisonment.',
      'Her nomination papers for the May 2001 Tamil Nadu Assembly elections were rejected by returning officers under Section 8(3) of the Representation of the People Act, 1951.',
      'The AIADMK won a commanding majority in the Assembly, and its elected MLAs elected Jayalalitha as their leader.',
      'The Governor of Tamil Nadu, M. Fathima Beevi, administered the oath of office and appointed Jayalalitha as Chief Minister under Article 164(1).',
      'B.R. Kapoor and others filed writ petitions in the Supreme Court seeking a writ of quo warranto, contending that a person disqualified by criminal conviction from entering the assembly could not be appointed Chief Minister.',
    ],
    issues: [
      'Whether a person who has been convicted of a criminal offence and disqualified under Section 8(3) of the RPA can be appointed Chief Minister under Article 164(1).',
      'Whether Article 164(4), which permits a non-member to be appointed Minister for a period of six consecutive months, enables a disqualified person to hold the office of Chief Minister.',
      'Whether the Governor appointment under Article 164(1) is subject to judicial review via a writ of quo warranto.',
    ],
    arguments: {
      appellant: [
        'The mandate of the people cannot override statutory disqualifications enacted by Parliament under Article 191(1)(e).',
        'Article 164(4) is intended for persons who are eligible to enter the assembly within six months, not for persons disqualified by law.',
      ],
      respondent: [
        'Under Article 164(1), the Governor has sole discretion to appoint the Chief Minister who commands majority confidence.',
        'The will of the people expressed through a landslide election victory overrides statutory technicalities.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Article 164(1) & 164(4)',
        title: 'Other provisions as to Ministers — Disqualification from appointment',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Constitution overrides the popular mandate',
        explanation:
          'Bharucha, J. for the majority held that the Constitution is supreme. The popular mandate of the electorate cannot override express constitutional commands. Under Article 191, a person disqualified under the Representation of the People Act cannot be chosen as a member of the assembly. A person disqualified from being a member cannot enter through the backdoor of Article 164(4) as Chief Minister.',
      },
      {
        heading: 'Limits of Governor discretion under Article 164(1)',
        explanation:
          'The Governor is bound to uphold the Constitution. When appointing a Chief Minister, the Governor cannot appoint a person who is constitutionally and statutorily disqualified from sitting in the legislature. A writ of quo warranto lies to unseat a disqualified usurper of public office.',
      },
    ],
    decision:
      'Writ petitions allowed. The appointment of J. Jayalalitha as Chief Minister was quashed and declared unconstitutional and void via a writ of quo warranto.',
    holding:
      'A person convicted of an offense and disqualified under Section 8(3) of the Representation of the People Act cannot be appointed Chief Minister under Article 164. The appointment is subject to a writ of quo warranto.',
    ratioDecidendi:
      'Article 164(4) is a temporary relaxation meant for persons who are otherwise qualified to be elected to the legislature within six months. It cannot be availed of by a person who is disqualified from contesting or entering the Legislative Assembly by reason of a criminal conviction under Section 8(3) of the Representation of the People Act. The Governor has no constitutional discretion to appoint a disqualified person as Chief Minister.',
    obiterDicta:
      'The Constitution does not permit convicted persons to govern the State while ordinary civil servants are summarily dismissed for minor moral turpitude.',
    relatedCases: [
      {
        judgmentId: 'lily-thomas-2013',
        caseName: 'Lily Thomas v. Union of India',
        citation: '(2013) 7 SCC 653',
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
      'Established that a disqualified person cannot be appointed Chief Minister under Article 164(1)/(4).',
      'Quashed the appointment of J. Jayalalitha via a writ of quo warranto.',
      'Reconciled the tension between democratic majoritarian mandate and constitutional supremacy.',
    ],
    mcqs: [
      {
        id: 'br-kapoor-mcq-1',
        question:
          'In B.R. Kapoor v. State of Tamil Nadu (2001), the Supreme Court quashed the appointment of J. Jayalalitha as Chief Minister by issuing which writ?',
        options: [
          'Writ of Habeas Corpus',
          'Writ of Mandamus',
          'Writ of Quo Warranto',
          'Writ of Prohibition',
        ],
        correctIndex: 2,
        explanation:
          'The 5-judge Constitution Bench issued a writ of quo warranto declaring her appointment as Chief Minister unconstitutional because she was disqualified under Section 8(3) of the RPA.',
      },
    ],
  },
  {
    id: 'mukesh-nirbhaya-2017',
    caseName: 'Mukesh v. State (NCT of Delhi) (Nirbhaya Case)',
    shortName: 'Mukesh (Nirbhaya Case)',
    citation: '(2017) 6 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2017,
    bench: '3-Judge Bench',
    judges: ['Dipak Misra, J.', 'R. Banumathi, J.', 'Ashok Bhushan, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Capital Punishment', 'Death Penalty', 'Rarest of Rare', 'Gang-Rape and Murder', 'Aggravating Factors'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Death Penalty', 'Nirbhaya Case', 'Gang-Rape', 'Rarest of Rare'],
    summary:
      'Landmark 3-judge bench decision confirming the death penalty awarded to four convicts in the sensational December 16, 2012 Delhi gang-rape and murder case. Held that the grotesque, demonic, and savage assault on the defenseless victim, accompanied by extreme sadism and insertion of an iron rod, completely foreclosed the alternative option of life imprisonment under the Bachan Singh and Machhi Singh rarest of rare doctrine.',
    facts: [
      'On the night of December 16, 2012, a 23-year-old paramedical student and her male friend were lured into a chartered bus in Delhi.',
      'Six persons (including a juvenile and the bus driver Ram Singh) brutally assaulted the male friend, gang-raped the woman with extreme savagery, inserted an iron rod into her body destroying her internal organs, bit her repeatedly, and threw both victims naked onto the highway in freezing winter weather, attempting to run over them with the bus.',
      'The victim succumbed to multiple organ failure thirteen days later at Mount Elizabeth Hospital, Singapore.',
      'The trial court convicted the four adult accused (Mukesh, Pawan, Vinay, Akshay) under Sections 302, 376(2)(g), 377, 396, and 120B IPC and sentenced them to death.',
      'The Delhi High Court confirmed the capital sentence, and the convicts appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the death penalty confirmed by the High Court satisfies the "rarest of rare" doctrine laid down in Bachan Singh and Machhi Singh.',
      'Whether mitigating circumstances (youth, poverty, families, lack of prior criminal records) outweigh the extreme aggravating circumstances of the crime.',
    ],
    arguments: {
      appellant: [
        'The appellants are young men from impoverished backgrounds with no prior convictions; the possibility of reformation cannot be ruled out.',
        'Extensive media frenzy and public outrage created prejudice, preventing a calm assessment of mitigating factors.',
      ],
      respondent: [
        'The calculated, cold-blooded, and demonic nature of the assault shocked the collective conscience of humanity.',
        'Any penalty lesser than death would mock the rule of law and the sanctity of human life.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 103 (legacy s. 302 IPC)',
        title: 'Punishment for murder — Application of rarest of rare test in heinous gang-rapes',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'sexual-offences',
        section: 'Section 70 (legacy s. 376-D IPC)',
        title: 'Gang rape and associated extreme physical violence causing death',
        subjectSlug: 'bns',
        topicId: 'sexual-offences',
      },
    ],
    reasoning: [
      {
        heading: 'Extreme depravity and sadism in the manner of commission',
        explanation:
          'Dipak Misra, J. observed that the manner in which the crime was committed was of extreme brutality, depravity, and animal lust. The insertion of the iron rod and pulling out of internal organs demonstrated a hunger for sadistic pleasure. The act shook the collective conscience of society to its core.',
      },
      {
        heading: 'Complete foreclosure of the alternative option of life imprisonment',
        explanation:
          'Applying the Bachan Singh and Machhi Singh balance sheet, the Court weighed mitigating factors (poverty, youthful age of 20-25 years) against the diabolical nature of the crime. The Court held that the mitigating factors pale into total insignificance. The crime belongs to the rarest of rare category, and the alternative of life imprisonment is unquestionably foreclosed.',
      },
    ],
    decision:
      'Appeals dismissed. Convictions under Section 302 and capital sentences confirmed unanimously for all four convicts.',
    holding:
      'The death sentences of the four Nirbhaya case convicts are confirmed. Where a crime exhibits extreme animalistic depravity, diabolical cruelty, and grotesque sadism, the death penalty is the only appropriate sentence.',
    ratioDecidendi:
      'In applying the rarest of rare doctrine, courts must draw a balance sheet of aggravating and mitigating circumstances. When a gang-rape and murder is executed with such grotesque sadism, demonic cruelty, and total contempt for human life that it shocks the collective conscience of humanity, the alternative option of life imprisonment is unquestionably foreclosed, and the death penalty must be imposed.',
    obiterDicta:
      'The Court commended the courage of the victim, referring to her as a beacon of dignity in the face of brutal savagery.',
    relatedCases: [
      {
        judgmentId: 'bachan-singh-1980',
        caseName: 'Bachan Singh v. State of Punjab',
        citation: '(1980) 2 SCC 684',
        relationship: 'followed',
      },
      {
        judgmentId: 'machhi-singh-1983',
        caseName: 'Machhi Singh v. State of Punjab',
        citation: '(1983) 3 SCC 470',
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
      'Comprehensive modern application of the Bachan Singh / Machhi Singh rarest of rare doctrine.',
      'Confirmed capital punishment for the December 16, 2012 Nirbhaya gang-rape and murder.',
      'Key reference for criminal sentencing and offenses against women.',
    ],
    mcqs: [
      {
        id: 'nirbhaya-mcq-1',
        question:
          'In Mukesh v. State (NCT of Delhi) (2017), the Supreme Court confirmed the death penalty by applying which landmark sentencing test?',
        options: [
          'The Wednesbury Unreasonableness Test',
          'The Rarest of Rare doctrine from Bachan Singh and Machhi Singh',
          'The Triple Test from Bangalore Water Supply',
          'The Pith and Substance Doctrine',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court confirmed the capital sentence in the Nirbhaya case by applying the "rarest of rare" doctrine and balance-sheet method from Bachan Singh and Machhi Singh.',
      },
    ],
  },
  {
    id: 'sarla-verma-2009',
    caseName: 'Sarla Verma v. Delhi Transport Corporation',
    shortName: 'Sarla Verma',
    citation: '(2009) 6 SCC 121',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2009,
    bench: '2-Judge Bench',
    judges: ['R.V. Raveendran, J.', 'Markandey Katju, J.'],
    subject: 'Law of Torts',
    topics: ['MACT Compensation', 'Multiplier Method', 'Motor Vehicles Act', 'Deduction for Personal Expenses', 'Fatal Accidents'],
    tags: ['AIBE', 'Judiciary', 'Torts', 'MACT', 'Motor Vehicles Act', 'Multiplier', 'Sarla Verma'],
    summary:
      'Locus classicus Supreme Court precedent standardizing the assessment of compensation in motor accident fatal claims under the Motor Vehicles Act, 1988. Formulated the definitive age-based Multiplier Table (18 to 5), standardized percentage deductions for personal and living expenses of the deceased based on the number of dependent family members, and established uniform rules for future prospects.',
    facts: [
      'Rajinder Pal Verrma, a 38-year-old scientist working with the Indian Council of Agricultural Research (ICAR) earning Rs 3,402 per month, was killed in an accident caused by a rashly driven DTC bus in Delhi.',
      'His widow, children, parents, and grandparents filed a claim petition before the Motor Accident Claims Tribunal (MACT).',
      'The Tribunal awarded Rs 5.75 lakh, which the High Court enhanced to Rs 7.19 lakh.',
      'The claimants appealed to the Supreme Court, contending that compensation had been assessed arbitrarily due to widely fluctuating formulas adopted by different courts across India.',
    ],
    issues: [
      'How to establish uniform and standardized principles for calculating just compensation in motor accident fatal claims under Section 166 of the Motor Vehicles Act, 1988.',
      'What is the appropriate multiplier to be adopted for different age groups.',
      'What are the standard deductions for the personal and living expenses of the deceased.',
    ],
    arguments: {
      appellant: [
        'Arbitrary, non-standardized multipliers across States cause acute distress to grieving families.',
        'Future career promotions and increments must be factored into income assessment.',
      ],
      respondent: [
        'Compensation under tort law must be fair and reasonable, not a bonanza or windfall for legal heirs.',
        'Substantial deductions must be made for the personal living expenses the deceased would have spent on himself.',
      ],
    },
    provisions: [
      {
        actId: 'tort',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 'mact-claims',
        section: 'Section 166 & Section 168',
        title: 'Application for compensation and award of Claims Tribunal (Multiplier Method)',
        subjectSlug: 'tort',
        topicId: 'mact-claims',
      },
    ],
    reasoning: [
      {
        heading: 'Standardized Multiplier Table based on age',
        explanation:
          'Raveendran, J. harmonized the Second Schedule of the MV Act and earlier precedents, establishing a definitive multiplier table based on the age of the deceased: Age 21-25: Multiplier 18; Age 26-30: 17; Age 31-35: 16; Age 36-40: 15; Age 41-45: 14; Age 46-50: 13; Age 51-55: 11; Age 56-60: 9; Age 61-65: 7; Age above 65: 5.',
      },
      {
        heading: 'Deductions for personal living expenses',
        explanation:
          'The Court standardized personal expense deductions: (a) If the deceased was a bachelor: 50% deduction; (b) Where family dependents are 2 to 3: 1/3rd deduction; (c) Where dependents are 4 to 6: 1/4th deduction; (d) Where dependents exceed 6: 1/5th deduction.',
      },
    ],
    decision:
      'Appeal allowed. Compensation enhanced to Rs 8.87 lakh with 6% interest. The standardized multiplier and deduction tables were made binding nationwide.',
    holding:
      'The calculation of MACT compensation must follow standardized mathematical rules: ascertain actual income, add future prospects, deduct personal expenses based on dependent family count, and apply the age-based multiplier.',
    ratioDecidendi:
      'Just compensation under Section 168 of the Motor Vehicles Act must be assessed through uniform, standardized rules. The age of the deceased determines the multiplier from the authoritative table (18 to 5). Deductions for personal living expenses are fixed at 1/3rd for 2-3 dependents, 1/4th for 4-6 dependents, and 50% for bachelors.',
    obiterDicta:
      'Uniformity and certainty in awarding compensation save poor accident victims from protracted, speculative litigation.',
    relatedCases: [
      {
        judgmentId: 'pranay-sethi-2017',
        caseName: 'National Insurance Co. Ltd. v. Pranay Sethi',
        citation: '(2017) 16 SCC 680',
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
      'The foundational authority for the "Multiplier Method" in MACT motor accident claims.',
      'Prescribed the definitive multiplier chart (18 down to 5) based on age brackets.',
      'Standardized deductions for personal living expenses (1/2, 1/3, 1/4, 1/5).',
    ],
    mcqs: [
      {
        id: 'sarla-verma-mcq-1',
        question:
          'Under the landmark ruling in Sarla Verma v. DTC (2009), what is the standardized deduction for personal living expenses if the deceased was a bachelor?',
        options: [
          'One-fourth (25%)',
          'One-third (33.33%)',
          'Half (50%)',
          'Zero deduction',
        ],
        correctIndex: 2,
        explanation:
          'In Sarla Verma (2009), the Supreme Court held that where the deceased was a bachelor, the standard deduction for personal and living expenses is 50% (half).',
      },
    ],
  },
  {
    id: 'pranay-sethi-2017',
    caseName: 'National Insurance Co. Ltd. v. Pranay Sethi',
    shortName: 'Pranay Sethi',
    citation: '(2017) 16 SCC 680',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2017,
    bench: '5-Judge Constitution Bench',
    judges: ['Dipak Misra, C.J.', 'A.K. Sikri, J.', 'A.M. Khanwilkar, J.', 'D.Y. Chandrachud, J.', 'Ashok Bhushan, J.'],
    subject: 'Law of Torts',
    topics: ['MACT Compensation', 'Future Prospects', 'Conventional Heads', 'Multiplier Method', 'Motor Vehicles Act'],
    tags: ['AIBE', 'Judiciary', 'Torts', 'MACT', 'Motor Vehicles Act', 'Pranay Sethi', 'Future Prospects', 'Compensation'],
    summary:
      'Authoritative 5-judge Constitution Bench precedent standardizing the award of "future prospects" and "conventional heads" in motor accident compensation claims. Affirmed the Sarla Verma multiplier chart, established standardized future prospect additions (50%, 30%, 15% for salaried; 40%, 25%, 10% for self-employed), and fixed uniform sums for conventional heads (loss of estate, loss of consortium, and funeral expenses) with 10% enhancement every three years.',
    facts: [
      'Conflicting verdicts emerged across various benches of the Supreme Court regarding whether future prospects can be awarded to self-employed individuals and fixed-salary workers, and what amounts should be granted under conventional heads.',
      'In Sarla Verma (2009), future prospects were restricted to permanent salaried employees, while Reshma Kumari and Rajesh v. Rajbir Singh expanded them to self-employed persons with differing percentages.',
      'A 5-judge Constitution Bench was constituted in Pranay Sethi to authoritatively settle the calculation of just compensation under Section 168 of the Motor Vehicles Act, 1988.',
    ],
    issues: [
      'Whether the addition for future prospects can be granted to self-employed individuals or persons on a fixed wage, and at what percentage.',
      'What are the reasonable figures to be awarded under the conventional heads: loss of estate, loss of consortium, and funeral expenses.',
      'Whether the multiplier table approved in Sarla Verma is binding.',
    ],
    arguments: {
      appellant: [
        'Insurance companies argued that future prospects cannot be presumed for self-employed individuals without strict documentary evidence.',
        'Conventional heads must be uniform across the country to prevent arbitrary variations.',
      ],
      respondent: [
        'The reality of inflation and economic growth increases the earning capacity of self-employed professionals as well.',
        'Spousal consortium and loss of estate are real intangible injuries deserving fair compensation.',
      ],
    },
    provisions: [
      {
        actId: 'tort',
        actName: 'Motor Vehicles Act, 1988',
        provisionId: 'mact-claims',
        section: 'Section 168',
        title: 'Award of Claims Tribunal — Standardization of future prospects and conventional heads',
        subjectSlug: 'tort',
        topicId: 'mact-claims',
      },
    ],
    reasoning: [
      {
        heading: 'Standardization of future prospects additions',
        explanation:
          'Dipak Misra, C.J. held that future prospects must be awarded to all categories: (a) For permanent salaried jobs: Add 50% if below 40 years, 30% for 40-50 years, 15% for 50-60 years; (b) For self-employed or fixed wages: Add 40% if below 40 years, 25% for 40-50 years, and 10% for 50-60 years.',
      },
      {
        heading: 'Standardized conventional heads',
        explanation:
          'The Court fixed uniform compensation under the three conventional heads: Loss of Estate: Rs 15,000; Loss of Consortium: Rs 40,000; Funeral Expenses: Rs 15,000 (totaling Rs 70,000), with a mandate that these amounts shall be enhanced by 10% every three years to offset inflation.',
      },
    ],
    decision:
      'Reference answered. The Constitution Bench affirmed the Sarla Verma multiplier chart, standardized future prospects additions for self-employed persons, and fixed the conventional heads nationwide.',
    holding:
      'Future prospects are admissible for both salaried and self-employed victims based on standardized age percentages. Conventional heads are fixed at Rs 15,000 (estate), Rs 40,000 (consortium), and Rs 15,000 (funeral expenses) with 10% three-yearly escalation.',
    ratioDecidendi:
      'The concept of "just compensation" under Section 168 of the Motor Vehicles Act must be rooted in fairness, reasonableness, and uniformity. Future prospects must be added to the income of all victims, whether permanently employed, self-employed, or on fixed wages, according to standardized percentage slabs. The Sarla Verma multiplier table is fully binding. Compensation under conventional heads is standardized with triennial percentage increases.',
    obiterDicta:
      'Claims Tribunals must apply these standardized parameters strictly and avoid ad-hoc subjective estimates.',
    relatedCases: [
      {
        judgmentId: 'sarla-verma-2009',
        caseName: 'Sarla Verma v. Delhi Transport Corporation',
        citation: '(2009) 6 SCC 121',
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
      '5-judge Constitution Bench ruling standardizing future prospects for self-employed persons.',
      'Fixed the three conventional heads (estate, consortium, funeral) at Rs 70,000 with 10% triennial inflation increase.',
      'Reaffirmed the Sarla Verma multiplier table as binding law under Article 141.',
    ],
    mcqs: [
      {
        id: 'pranay-sethi-mcq-1',
        question:
          'In National Insurance Co. Ltd. v. Pranay Sethi (2017), what percentage is added for future prospects if the deceased was self-employed and below 40 years of age?',
        options: [
          '50%',
          '40%',
          '25%',
          'Zero percent',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in Pranay Sethi fixed a 40% addition for future prospects where the deceased was self-employed or on a fixed salary and below 40 years of age.',
      },
    ],
  },
  {
    id: 'ongc-saw-pipes-2003',
    caseName: 'Oil & Natural Gas Corporation Ltd. v. Saw Pipes Ltd.',
    shortName: 'ONGC v. Saw Pipes',
    citation: '(2003) 5 SCC 705',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2003,
    bench: '2-Judge Bench',
    judges: ['M.B. Shah, J.', 'Arun Kumar, J.'],
    subject: 'ADR & Arbitration',
    topics: ['Section 34 Arbitration Act', 'Public Policy of India', 'Patent Illegality', 'Setting Aside Award', 'Liquidated Damages'],
    tags: ['AIBE', 'Judiciary', 'Arbitration', 'ADR', 'Section 34', 'Public Policy', 'Patent Illegality', 'Saw Pipes'],
    summary:
      'Seminal Supreme Court precedent expanding the grounds for challenging an arbitral award under Section 34 of the Arbitration and Conciliation Act, 1996. Held that the expression "public policy of India" in Section 34 must be given a wider meaning beyond fundamental policy of Indian law to include "patent illegality". An award that is contrary to substantive statutory law or the contract terms is patently illegal and void.',
    facts: [
      'ONGC placed an order with Saw Pipes Ltd. for the supply of casing pipes for offshore oil drilling operations.',
      'Due to general labor strikes across Europe, the supplier failed to deliver the pipes within the contractual delivery schedule and sought extensions.',
      'ONGC granted extensions but deducted liquidated damages from payments under the contract.',
      'The arbitral tribunal awarded the refund of liquidated damages to Saw Pipes, holding that ONGC had not proved actual financial loss caused by the delay.',
      'ONGC challenged the award under Section 34 before the High Court, which dismissed the challenge.',
      'ONGC appealed to the Supreme Court.',
    ],
    issues: [
      'What is the true scope and meaning of the expression "in conflict with the public policy of India" under Section 34(2)(b)(ii) of the Arbitration and Conciliation Act, 1996.',
      'Whether an arbitral award can be set aside on the ground that it is contrary to substantive provisions of Indian law (Section 73/74 Contract Act) or terms of the contract.',
    ],
    arguments: {
      appellant: [
        'The tribunal ignored Section 74 of the Contract Act and the express contract terms permitting liquidated damages.',
        'An award that violates substantive statutory law is patently illegal and violates public policy.',
      ],
      respondent: [
        'Under the 1996 Act, judicial intervention is strictly curtailed under Section 5; public policy must be interpreted narrowly as laid down in Renusagar (fundamental policy, justice, morality).',
        'Patent illegality or misinterpretation of contract terms is not a ground under Section 34.',
      ],
    },
    provisions: [
      {
        actId: 'adr',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 'aca-s-34',
        section: 'Section 34(2)(b)(ii)',
        title: 'Application for setting aside arbitral award — Public policy and patent illegality',
        subjectSlug: 'adr',
        topicId: 'aca-s-34',
      },
      {
        actId: 'contract',
        actName: 'Indian Contract Act, 1872',
        provisionId: 'ica-s-73-75',
        section: 'Section 74',
        title: 'Compensation for breach of contract where penalty or liquidated damages stipulated',
        subjectSlug: 'contract',
        topicId: 'ica-s-73-75',
      },
    ],
    reasoning: [
      {
        heading: 'Expansion of Public Policy to include Patent Illegality',
        explanation:
          'Shah, J. held that the phrase "public policy of India" in Section 34 cannot be given a narrow meaning in domestic arbitrations. If an award is patently illegal, it cannot be sustained. An award is contrary to public policy if it is: (a) contrary to fundamental policy of Indian law; (b) contrary to the interest of India; (c) contrary to justice or morality; or (d) patently illegal. Illegality must go to the root of the matter.',
      },
      {
        heading: 'Liquidated damages under Section 74 Contract Act',
        explanation:
          'Where the contract provides for a genuine pre-estimate of damages and goods are delayed, the party claiming liquidated damages is not required to prove actual loss in every case. The tribunal committed a patent illegality by requiring proof of actual loss in offshore drilling operations.',
      },
    ],
    decision:
      'Appeal allowed. The arbitral award directing refund of liquidated damages was set aside as patently illegal and opposed to the public policy of India.',
    holding:
      'An arbitral award can be set aside under Section 34 if it is patently illegal or in violation of the substantive law of India or contractual terms. Public policy includes patent illegality.',
    ratioDecidendi:
      'Under Section 34 of the Arbitration and Conciliation Act, 1996, the phrase "public policy of India" includes awards that suffer from patent illegality. If an arbitral tribunal ignores substantive statutory law or arrives at a finding that shocks the conscience of the court, the award is patently illegal and opposed to public policy. (Note: Codified as Section 34(2A) by 2015 Arbitration Amendment).',
    obiterDicta:
      'Tribunals are creatures of the contract; if a tribunal decides contrary to the explicit terms of the contract, it exceeds its jurisdiction.',
    relatedCases: [
      {
        judgmentId: 'central-inland-water-1986',
        caseName: 'Central Inland Water Transport Corp. v. Brojo Nath Ganguly',
        citation: '(1986) 3 SCC 156',
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
      'Introduced "patent illegality" as a ground to set aside domestic arbitral awards under Section 34.',
      'Later formally incorporated by Parliament into Section 34(2A) by the 2015 Arbitration Amendment.',
      'Essential authority for arbitration, contract damages, and Section 74 ICA.',
    ],
    mcqs: [
      {
        id: 'saw-pipes-mcq-1',
        question:
          'In ONGC v. Saw Pipes Ltd. (2003), which ground did the Supreme Court add to the scope of "public policy of India" under Section 34 of the Arbitration Act?',
        options: [
          'Failure to employ foreign counsel',
          'Patent illegality going to the root of the matter',
          'Failure to deliver an oral judgment in court',
          'Lack of registration with the Bar Council',
        ],
        correctIndex: 1,
        explanation:
          'In Saw Pipes (2003), the Supreme Court expanded "public policy" under Section 34 to include "patent illegality" for setting aside arbitral awards.',
      },
    ],
  },
  {
    id: 'balco-2012',
    caseName: 'Bharat Aluminium Co. v. Kaiser Aluminium Technical Services Inc. (BALCO)',
    shortName: 'BALCO',
    citation: '(2012) 9 SCC 552',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional / Commercial Appellate Jurisdiction',
    year: 2012,
    bench: '5-Judge Constitution Bench',
    judges: ['S.H. Kapadia, C.J.', 'D.K. Jain, J.', 'Surinder Singh Nijjar, J.', 'J. Chelameswar, J.', 'J.S. Khehar, J.'],
    subject: 'ADR & Arbitration',
    topics: ['Seat of Arbitration', 'Section 9 Interim Relief', 'Part I Applicability', 'Foreign Seated Arbitration', 'Bhatia International Overruled'],
    tags: ['AIBE', 'Judiciary', 'Arbitration', 'ADR', 'Seat of Arbitration', 'BALCO', 'Section 9', 'Part I'],
    summary:
      'Historic 5-judge Constitution Bench precedent overruling Bhatia International. Held that Part I of the Arbitration and Conciliation Act, 1996 applies exclusively to arbitrations seated in India. Indian courts have no jurisdiction under Part I (including Section 9 for interim relief) to intervene in arbitrations where the seat of arbitration is outside India, establishing the territoriality principle in Indian arbitration law.',
    facts: [
      'Bharat Aluminium Co. (BALCO) entered into an agreement with Kaiser Aluminium for supply of technology and equipment for its plant in India.',
      'The dispute resolution clause provided that any dispute shall be settled by arbitration in London under the Rules of the International Chamber of Commerce (ICC), governed by English law.',
      'When disputes arose, BALCO filed a suit before the District Court at Bilaspur and an application under Section 9 of the Arbitration Act seeking interim injunction against Kaiser.',
      'In Bhatia International (2002), a 3-judge bench had held that Part I of the Act applies even to foreign-seated arbitrations unless the parties expressly or impliedly excluded it.',
      'A 5-judge Constitution Bench was constituted in BALCO to reconsider the correctness of Bhatia International.',
    ],
    issues: [
      'Whether Part I of the Arbitration and Conciliation Act, 1996 applies to arbitrations seated outside India.',
      'Whether Indian courts can grant interim relief under Section 9 of the Act in aid of an arbitration taking place outside India.',
      'What is the legal significance of the "seat of arbitration" under the 1996 Act.',
    ],
    arguments: {
      appellant: [
        'Bhatia International erroneously blurred territorial jurisdiction, leading to excessive judicial intervention in international contracts.',
        'Section 2(2) of the Act clearly states: "This Part shall apply where the place of arbitration is in India".',
      ],
      respondent: [
        'If Part I does not apply, Indian parties have no remedy under Section 9 to preserve assets located within India during foreign arbitrations.',
      ],
    },
    provisions: [
      {
        actId: 'adr',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 'arbitration',
        section: 'Section 2(2) & Section 9',
        title: 'Territoriality principle and interim measures by Court',
        subjectSlug: 'adr',
        topicId: 'arbitration',
      },
    ],
    reasoning: [
      {
        heading: 'Territoriality principle and Seat of Arbitration',
        explanation:
          'Surinder Singh Nijjar, J. for the unanimous Constitution Bench held that the 1996 Act accepted the territoriality principle of the UNCITRAL Model Law. Section 2(2) is clear: Part I applies only when the seat of arbitration is in India. Once the seat is outside India, Part I is wholly excluded. Indian courts have no jurisdiction to entertain applications under Section 9 (interim relief) or Section 34 (setting aside) in foreign-seated arbitrations.',
      },
      {
        heading: 'Overruling Bhatia International prospectively',
        explanation:
          'Bhatia International (2002) and Venture Global (2008) were expressly overruled. To protect transactions executed in reliance on earlier law, the Court applied prospective overruling: BALCO applies only to arbitration agreements entered into after September 6, 2012.',
      },
    ],
    decision:
      'Reference answered. Bhatia International overruled. Part I held inapplicable to foreign-seated arbitrations. BALCO application under Section 9 held not maintainable before Indian courts.',
    holding:
      'Part I of the Arbitration and Conciliation Act applies exclusively to arbitrations seated in India. Indian courts have no jurisdiction under Part I in foreign-seated arbitrations. (Overruled Bhatia International prospectively).',
    ratioDecidendi:
      'The Arbitration and Conciliation Act, 1996 has accepted the territorial criterion. A plain reading of Section 2(2) establishes that Part I applies only where the place of arbitration is in India. No suit for interim injunction or Section 9 application is maintainable in India in relation to an international commercial arbitration seated outside India. The supervisory jurisdiction belongs exclusively to the courts of the country where the arbitration is seated.',
    obiterDicta:
      'Parliament was invited to amend the Act if it wished to provide interim relief in foreign arbitrations (later addressed in the 2015 amendment proviso to Section 2(2)).',
    relatedCases: [
      {
        judgmentId: 'bhatia-international-2002',
        caseName: 'Bhatia International v. Bulk Trading S.A.',
        citation: '(2002) 4 SCC 105',
        relationship: 'overruled',
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
      '5-judge Constitution Bench ruling establishing the "Seat" and territoriality principle in Indian arbitration.',
      'Expressly overruled Bhatia International (2002) and Venture Global (2008).',
      'Applied prospective overruling to agreements executed on or after September 6, 2012.',
    ],
    mcqs: [
      {
        id: 'balco-mcq-1',
        question:
          'In Bharat Aluminium Co. v. Kaiser Aluminium (BALCO, 2012), the 5-judge Constitution Bench overruled which previous decision?',
        options: [
          'ONGC v. Saw Pipes Ltd.',
          'Bhatia International v. Bulk Trading S.A.',
          'Salem Advocate Bar Association v. Union of India',
          'Sundaram Finance Ltd. v. NEPC India Ltd.',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in BALCO expressly overruled Bhatia International (2002), establishing that Part I of the Arbitration Act does not apply to foreign-seated arbitrations.',
      },
    ],
  },
  {
    id: 'vodafone-2012',
    caseName: 'Vodafone International Holdings B.V. v. Union of India',
    shortName: 'Vodafone International',
    citation: '(2012) 6 SCC 613',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2012,
    bench: '3-Judge Bench',
    judges: ['S.H. Kapadia, C.J.', 'K.S. Radhakrishnan, J.', 'Swatanter Kumar, J.'],
    subject: 'Constitutional Law',
    topics: ['Corporate Veil', 'Tax Avoidance vs Tax Evasion', 'Look-at Principle', 'Source of Income', 'Offshore Transfers'],
    tags: ['AIBE', 'Judiciary', 'Taxation', 'Company Law', 'Corporate Veil', 'Vodafone', 'Look-at Principle'],
    summary:
      'Monumental 3-judge bench precedent on the corporate veil, tax planning, and international business transactions. Held that the revenue must "look at" the transaction as a whole and not "look through" it by dissecting corporate structures unless the entity is a sham or conduit for tax evasion. Struck down the capital gains tax demand of over Rs 11,000 crore on Vodafone’s offshore acquisition of Hutchison’s Indian telecom assets.',
    facts: [
      'Vodafone International Holdings B.V. (a Dutch company) acquired 100% share capital of CGP Investments (Holdings) Ltd. (a Cayman Islands company) from Hutchison Telecommunications for $11.1 billion.',
      'Through this single share transfer outside India, Vodafone acquired indirect controlling interest (67%) in Hutchison Essar Ltd. (HEL), a major Indian telecom operator.',
      'The Indian Income Tax Department served a show-cause notice on Vodafone under Sections 201 and 195 of the Income-tax Act, 1961, demanding over Rs 11,000 crore in tax for failure to deduct tax at source (TDS) on capital gains earned by Hutchison from the transfer of an asset situated in India.',
      'The Bombay High Court held that the transaction had substantial nexus with India and was taxable.',
      'Vodafone appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the Indian revenue authorities have territorial jurisdiction to tax the transfer of shares of a foreign company between two non-residents outside India.',
      'When can courts and revenue authorities lift the corporate veil to tax an offshore transaction (the "look-at" vs "look-through" doctrine).',
    ],
    arguments: {
      appellant: [
        'The subject matter of the sale was a single share of a Cayman Islands company; Section 9(1)(i) of the Income-tax Act does not cover indirect transfers of shares abroad.',
        'Multinational groups validly use holding company structures; legitimate tax planning is recognized under the Duke of Westminster principle.',
      ],
      respondent: [
        'The transaction was in substance a transfer of telecom licenses, spectrum, and assets situated in India.',
        'The offshore corporate entity was a mere conduit used to evade Indian capital gains tax under McDowell.',
      ],
    },
    provisions: [
      {
        actId: 'company',
        actName: 'Companies Act, 2013',
        provisionId: 'ca-s-9',
        section: 'Section 9',
        title: 'Separate legal personality and lifting the corporate veil',
        subjectSlug: 'company',
        topicId: 'ca-s-9',
      },
    ],
    reasoning: [
      {
        heading: 'The "Look-At" versus "Look-Through" principle',
        explanation:
          'Kapadia, C.J. held that the task of the court is to "look at" the transaction as a whole, rather than dissecting it and "looking through" it. Corporate holding structures set up for genuine commercial investments in emerging markets cannot be branded as tax avoidance devices. Lifting the corporate veil is permissible only where the transaction is a fraudulent sham, fictitious conduit, or tax evasion device. CGP was an established holding company with investment assets since 1998, not a fly-by-night conduit.',
      },
      {
        heading: 'Strict construction of Section 9(1)(i) Income-tax Act',
        explanation:
          'Section 9(1)(i) taxes income accruing through the transfer of a capital asset situated in India. It does not contain an "indirect transfer" look-through clause. The source of gain was the share in the Cayman Islands, not an asset in India. The Court cannot rewrite the statute to introduce indirect transfer taxes.',
      },
    ],
    decision:
      'Appeal allowed. The tax demand of Rs 11,000 crore on Vodafone was quashed. The Supreme Court held that the offshore transaction was not taxable under Indian income tax law.',
    holding:
      'The transfer of shares of a foreign company between two non-residents outside India does not attract Indian capital gains tax under Section 9(1)(i). The corporate veil cannot be lifted for legitimate corporate holding structures unless they are proven shams.',
    ratioDecidendi:
      'In analyzing cross-border corporate acquisitions, the revenue must adopt the "look-at" approach, viewing the investment as a whole. A foreign holding company structure established for genuine commercial reasons cannot be ignored to pierce the corporate veil. Under Section 9(1)(i) of the Income-tax Act, 1961, indirect transfers of shares of foreign companies holding underlying Indian assets were not taxable without an express statutory look-through provision.',
    obiterDicta:
      'Legal certainty and predictability in tax laws are crucial for foreign direct investment and national economic development.',
    relatedCases: [
      {
        judgmentId: 'rc-cooper-1970',
        caseName: 'R.C. Cooper v. Union of India',
        citation: '(1970) 1 SCC 248',
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
      'Leading authority on the "Look-At" doctrine in corporate and taxation jurisprudence.',
      'Established the boundaries for lifting the corporate veil in multinational corporate structures.',
      'Prompted the controversial retrospective taxation amendment in the Finance Act, 2012.',
    ],
    mcqs: [
      {
        id: 'vodafone-mcq-1',
        question:
          'In Vodafone International Holdings B.V. v. Union of India (2012), which doctrine was formulated by Kapadia, C.J. regarding the review of corporate investments?',
        options: [
          'The doctrine of absolute commercial liability',
          'The "Look-At" principle (viewing the transaction as a whole rather than dissecting it)',
          'The doctrine of sovereign exemption for telecoms',
          'The presumption of corporate insolvency',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court formulated the "Look-At" principle, holding that courts must look at the transaction as a whole and not pierce the corporate veil of genuine holding structures.',
      },
    ],
  },
  {
    id: 'needle-industries-1981',
    caseName: 'Needle Industries (India) Ltd. v. Needle Industries Newey (India) Holding Ltd.',
    shortName: 'Needle Industries',
    citation: '(1981) 3 SCC 333',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1981,
    bench: '3-Judge Bench',
    judges: ['Y.V. Chandrachud, C.J.', 'P.N. Bhagwati, J.', 'V.D. Tulzapurkar, J.'],
    subject: 'Company Law',
    topics: ['Oppression and Mismanagement', 'Section 397/398 Companies Act', 'Section 241/242', 'Foss v. Harbottle Exceptions', 'Fiduciary Duties'],
    tags: ['AIBE', 'Judiciary', 'Company Law', 'Oppression', 'Mismanagement', 'Section 241', 'Directors Duties'],
    summary:
      'Locus classicus 3-judge bench decision on Oppression and Mismanagement under Sections 397 and 398 of the Companies Act, 1956 (now Sections 241 and 242 of the Companies Act, 2013). Held that an isolated technical illegality or procedural defect does not per se amount to "oppression" unless it is accompanied by an oppressive, burdensome, harsh, and wrongful course of conduct designed to stifle minority shareholders.',
    facts: [
      'Needle Industries (India) Ltd. was incorporated in India as a subsidiary of a British holding company, Newey Brothers Ltd., which held 60% of the share capital.',
      'Under the Foreign Exchange Regulation Act, 1973 (FERA), the company was directed by the Reserve Bank of India to dilute its foreign equity holding down to 40%.',
      'The Indian Managing Director, Devagnanam, convened a Board meeting in May 1977 and issued rights shares at par exclusively to existing Indian shareholders, while the notice served on the UK holding company failed to reach them in time due to postal delays.',
      'As a result, the foreign holding company was unable to subscribe, and its shareholding was diluted from 60% down to a minority, while the Indian group gained controlling interest.',
      'The foreign shareholders filed a petition under Section 397 and 398 alleging oppression and mismanagement.',
    ],
    issues: [
      'What constitutes "oppression" under Section 397 (now s. 241) of the Companies Act.',
      'Whether an isolated illegal act or violation of statutory notice requirements automatically constitutes oppression.',
      'What are the standards governing directors’ fiduciary duties when issuing shares during mandatory FERA dilution.',
    ],
    arguments: {
      appellant: [
        'The rights issue was made in bona fide compliance with RBI mandatory directives to avert closure of the company.',
        'Directors acted in the best commercial interest of the company as an ongoing concern.',
      ],
      respondent: [
        'Issuing shares at par instead of market value and holding an urgent meeting without proper notice was an engineered conspiracy to convert the majority into a minority.',
        'Breach of statutory notice under Section 286 Companies Act is per se oppressive.',
      ],
    },
    provisions: [
      {
        actId: 'company',
        actName: 'Companies Act, 2013',
        provisionId: 'ca-s-241-242',
        section: 'Section 241 & Section 242 (legacy s. 397/398)',
        title: 'Application to Tribunal for relief in cases of oppression and mismanagement',
        subjectSlug: 'company',
        topicId: 'ca-s-241-242',
      },
    ],
    reasoning: [
      {
        heading: 'Definition and standards of oppression',
        explanation:
          'Chandrachud, C.J. held that an isolated illegal act is not per se oppressive. Oppression under Section 397 involves conduct that is burdensome, harsh, and wrongful—a lack of probity and fair dealing in the affairs of a company to the prejudice of some of its members. The conduct must show that the minority shareholders are constrained to submit to something which is unfairly prejudicial to their proprietary rights.',
      },
      {
        heading: 'Technical illegality versus oppressive conduct',
        explanation:
          'While the failure to give adequate notice of the Board meeting was an illegality, it did not amount to oppression because the directors were under intense pressure from the RBI to dilute equity to avoid company closure. The primary motive of the directors was to save the company rather than to unjustly enrich themselves.',
      },
    ],
    decision:
      'Appeal allowed in part. The finding of oppression was set aside. However, to do complete justice, the Court directed the Indian group to pay a fair premium on the shares to the UK holding company.',
    holding:
      'A mere technical illegality or procedural omission does not amount to oppression under company law. Oppression requires a course of conduct that is harsh, burdensome, and lacking in probity.',
    ratioDecidendi:
      'An isolated act of technical illegality does not constitute oppression within the meaning of Section 397 of the Companies Act, 1956 (s. 241 Companies Act, 2013). Oppression implies a lack of probity and fair dealing, characterized by burdensome, harsh, and wrongful conduct. Where directors act in good faith to protect the existence of the company, an unintended procedural irregularity cannot be branded as oppression.',
    obiterDicta:
      'Directors are fiduciaries of the company as a whole; their powers to issue shares cannot be exercised solely to perpetuate their own control.',
    relatedCases: [
      {
        judgmentId: 'rc-cooper-1970',
        caseName: 'R.C. Cooper v. Union of India',
        citation: '(1970) 1 SCC 248',
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
      'Locus classicus on Oppression and Mismanagement under Section 241/242 Companies Act, 2013.',
      'Established that an isolated technical illegality does not automatically constitute oppression.',
      'Defines "oppression" as conduct that is burdensome, harsh, wrongful, and lacking in probity.',
    ],
    mcqs: [
      {
        id: 'needle-industries-mcq-1',
        question:
          'In Needle Industries (India) Ltd. v. Needle Industries Newey (1981), what did the Supreme Court hold regarding an isolated illegal act by directors?',
        options: [
          'Every illegal act automatically constitutes oppression under company law',
          'An isolated technical illegality does not per se amount to oppression unless it is burdensome, harsh, and lacking in probity',
          'Directors who commit an illegality are automatically disqualified for life',
          'Company law tribunals cannot grant relief if an act is illegal',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that an isolated technical illegality does not constitute oppression unless it exhibits a continuous course of conduct that is burdensome, harsh, and lacking in probity.',
      },
    ],
  },
  {
    id: 'harish-uppal-2003',
    caseName: 'Ex-Capt. Harish Uppal v. Union of India',
    shortName: 'Harish Uppal',
    citation: '(2003) 2 SCC 45',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2002,
    bench: '5-Judge Constitution Bench',
    judges: ['M.B. Shah, J.', 'B.P. Singh, J.', 'H.K. Sema, J.', 'S.B. Sinha, J.', 'A.R. Lakshmanan, J.'],
    subject: 'Professional Ethics',
    topics: ['Advocate Strike', 'Contempt of Court', 'Professional Misconduct', 'Right to Speedy Trial', 'Advocates Act'],
    tags: ['AIBE', 'Judiciary', 'Professional Ethics', 'Advocates Act', 'Contempt of Court', 'Strikes', 'Court Boycott'],
    summary:
      'Unanimous 5-judge Constitution Bench ruling holding that lawyers have no right to go on strike or give a call for boycott of courts, even for a day. Strikes by advocates obstruct the administration of justice and violate the fundamental rights of litigants under Articles 14 and 21. Only in the rarest of rare cases involving the dignity and independence of the Bar or Bench may a peaceful protest token of one day be permitted after prior consultation with the Chief Justice.',
    facts: [
      'Ex-Captain Harish Uppal filed a writ petition under Article 32 pointing out how frequent, prolonged strikes and boycotts called by Bar Associations across India paralyzed the judicial machinery, leaving thousands of undertrial prisoners languishing in jails and civil litigants stranded.',
      'The Bar Council of India and various State Bar Councils defended the right of lawyers to strike as an essential weapon to protest executive abuses, police harassment, and threats to the rule of law.',
      'The matter was referred to a 5-judge Constitution Bench to authoritatively determine whether advocates have a legal or constitutional right to strike.',
    ],
    issues: [
      'Whether advocates have a right to strike or call for a boycott of courts under the Constitution of India or the Advocates Act, 1961.',
      'Whether a lawyer who boycotts court proceedings pursuant to an association resolution is guilty of professional misconduct and contempt of court.',
    ],
    arguments: {
      appellant: [
        'Lawyers are officers of the court entrusted with public duties; strikes held court administration to ransom and violate Article 21 rights of undertrials.',
        'Litigants who pay fees are left unrepresented, suffering ex-parte orders.',
      ],
      respondent: [
        'The Bar Council argued that freedom of speech and association under Article 19(1)(a) and 19(1)(c) includes the collective right to protest.',
        'Lawyers strike only under grave provocation like police atrocities against advocates.',
      ],
    },
    provisions: [
      {
        actId: 'ethics',
        actName: 'Advocates Act, 1961',
        provisionId: 'bci-rules-duties',
        section: 'Section 35 & Section 38',
        title: 'Professional misconduct and duties of advocates to the court and clients',
        subjectSlug: 'ethics',
        topicId: 'bci-rules-duties',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 145',
        title: 'Right to speedy trial and administration of justice without strikes',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'No right to strike for legal professionals',
        explanation:
          'Shah, J. held that the legal profession is a noble calling dedicated to the administration of justice, not a commercial trade union. Lawyers hold a unique statutory monopoly to represent citizens in courts. An advocate who accepts a brief is under an ethical and legal obligation to appear. A strike or boycott of court directly infringes the fundamental right of speedy trial of litigants under Article 21.',
      },
      {
        heading: 'Contempt of court and professional misconduct',
        explanation:
          'Lawyers boycotting courts commit contempt of court and are liable for disciplinary proceedings under the Advocates Act. Courts must not adjourn cases merely because a strike call has been given. An advocate who appears despite a strike call cannot be intimidated or penalized by the Bar Association.',
      },
    ],
    decision:
      'Writ petitions allowed. The 5-judge Constitution Bench declared that advocates have no right to strike or boycott courts, and directed courts to proceed with cases irrespective of strike resolutions.',
    holding:
      'Lawyers have no right to go on strike or boycott courts. Strikes by advocates constitute professional misconduct and contempt of court. Courts must proceed with hearings despite strike calls.',
    ratioDecidendi:
      'Lawyers have no right to go on strike or give a call for boycott of courts. The administration of justice cannot be held to ransom by the legal profession. Boycott of courts violates the fundamental right of litigants to access justice under Article 21 and constitutes professional misconduct under Section 35 of the Advocates Act as well as criminal contempt of court.',
    obiterDicta:
      'In the rarest of rare cases where the independence of the bar or judiciary is threatened, bar associations may hold peaceful demonstrations outside court hours or express token protest of one day with permission of the Chief Justice.',
    relatedCases: [
      {
        judgmentId: 'scba-v-uoi-1998',
        caseName: 'Supreme Court Bar Association v. Union of India',
        citation: '(1998) 4 SCC 409',
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
      'Settled that advocates have NO legal, statutory, or fundamental right to strike or boycott courts.',
      'Held that court boycotts constitute professional misconduct and contempt of court.',
      'Mandatory study topic in Professional Ethics and Bar Council Rules for AIBE and Judiciary.',
    ],
    mcqs: [
      {
        id: 'harish-uppal-mcq-1',
        question:
          'In Ex-Capt. Harish Uppal v. Union of India (2003), what did the 5-judge Constitution Bench hold regarding strikes by advocates?',
        options: [
          'Advocates have an unrestricted constitutional right to strike under Article 19(1)(c)',
          'Advocates have no right to strike or call for boycott of courts, and strikes constitute professional misconduct',
          'Strikes are permitted if approved by a majority vote of the Bar Council of India',
          'Only High Court advocates are allowed to strike',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that lawyers have no right to go on strike or boycott courts, and that doing so obstructs justice and constitutes professional misconduct.',
      },
    ],
  },
  {
    id: 'scba-v-uoi-1998',
    caseName: 'Supreme Court Bar Association v. Union of India',
    shortName: 'Supreme Court Bar Association',
    citation: '(1998) 4 SCC 409',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction',
    year: 1998,
    bench: '5-Judge Constitution Bench',
    judges: ['A.S. Anand, J.', 'S.C. Agrawal, J.', 'M.M. Punchhi, J.', 'K. Venkataswami, J.', 'V.N. Khare, J.'],
    subject: 'Professional Ethics',
    topics: ['Article 129', 'Contempt of Court', 'Suspension of Advocate License', 'Advocates Act', 'In re Vinay Chandra Mishra Overruled'],
    tags: ['AIBE', 'Judiciary', 'Professional Ethics', 'Advocates Act', 'Contempt of Court', 'Article 129', 'Article 142'],
    summary:
      'Authoritative 5-judge Constitution Bench precedent overruling In re: Vinay Chandra Mishra (1995). Held that the Supreme Court, while exercising its contempt jurisdiction under Article 129 read with Article 142, cannot suspend or cancel an advocate’s license to practice law. The statutory power of professional discipline and suspension of license belongs exclusively to the Bar Council of India and State Bar Councils under the Advocates Act, 1961.',
    facts: [
      'In In re: Vinay Chandra Mishra (1995), a 3-judge bench of the Supreme Court convicted a senior advocate and Chairman of the Bar Council of India for criminal contempt of court for abusing and threatening a sitting High Court judge, and suspended his license to practice as an advocate for three years under Article 129 and 142.',
      'The Supreme Court Bar Association (SCBA) filed a petition challenging the power of the Supreme Court to suspend an advocate license in contempt proceedings, contending that professional disciplinary jurisdiction is statutory and vested exclusively in the Bar Councils under the Advocates Act, 1961.',
      'A 5-judge Constitution Bench was constituted to settle the conflict between contempt power under Article 129/142 and the disciplinary powers of the Bar Council.',
    ],
    issues: [
      'Whether the Supreme Court under Article 129 read with Article 142 has the power to suspend or revoke an advocate license to practice law while punishing him for contempt of court.',
      'Whether the power of professional discipline over advocates is vested exclusively in the Bar Councils under the Advocates Act, 1961.',
    ],
    arguments: {
      appellant: [
        'Article 129 empowers punishment for contempt (fine or imprisonment); it does not confer power to strip an advocate of his statutory livelihood.',
        'The Advocates Act, 1961 is a complete code; disciplinary jurisdiction belongs exclusively to the Bar Councils under Section 35 and 36.',
      ],
      respondent: [
        'The Supreme Court as a court of record has inherent, plenary powers under Article 129 and 142 to pass any order necessary to uphold judicial majesty.',
      ],
    },
    provisions: [
      {
        actId: 'ethics',
        actName: 'Advocates Act, 1961',
        provisionId: 'adv-s-35',
        section: 'Section 35 & Section 36',
        title: 'Disciplinary powers of State Bar Councils and Bar Council of India',
        subjectSlug: 'ethics',
        topicId: 'adv-s-35',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Article 129 & Article 142',
        title: 'Power of Supreme Court to punish for contempt of itself',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Limits of Article 129 contempt power',
        explanation:
          'Anand, J. held that the power to punish for contempt under Article 129 is to protect the administration of justice. Punishment for contempt can be imprisonment or fine under the Contempt of Courts Act, 1971. Suspending a lawyer’s license to practice is not a punishment for contempt; it is a penalty for professional misconduct.',
      },
      {
        heading: 'Exclusive disciplinary domain of Bar Councils',
        explanation:
          'The power to suspend an advocate license is created by the Advocates Act, 1961 and entrusted exclusively to the Disciplinary Committees of the Bar Council. Article 142 cannot be used to bypass substantive statutory law or usurp statutory functions. The Supreme Court can punish a contemnor-advocate with jail or fine, and can debar him from appearing in that particular court until purged of contempt, but cannot suspend his statutory enrollment license. Vinay Chandra Mishra was expressly overruled.',
      },
    ],
    decision:
      'Petition allowed. In re: Vinay Chandra Mishra overruled. The Supreme Court held that it has no power under Article 129 or 142 to suspend an advocate license to practice.',
    holding:
      'The Supreme Court cannot suspend an advocate’s license to practice law in exercise of contempt jurisdiction. Disciplinary control and suspension of license belong exclusively to the Bar Councils under the Advocates Act, 1961.',
    ratioDecidendi:
      'The contempt jurisdiction of the Supreme Court under Article 129 and Article 142 cannot be exercised to suspend or revoke an advocate’s license to practice law. The power to discipline advocates for professional misconduct belongs exclusively to the State Bar Councils and the Bar Council of India under the Advocates Act, 1961. The court may debar a contemnor-advocate from appearing before it until he purges the contempt, but cannot revoke his enrollment.',
    obiterDicta:
      'If a Bar Council fails to take action against a contemnor-advocate referred to it by the court, the Supreme Court can invoke appellate or supervisory jurisdiction under the Advocates Act.',
    relatedCases: [
      {
        judgmentId: 'harish-uppal-2003',
        caseName: 'Ex-Capt. Harish Uppal v. Union of India',
        citation: '(2003) 2 SCC 45',
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
      '5-judge Constitution Bench ruling overruling In re: Vinay Chandra Mishra (1995).',
      'Established that Supreme Court contempt power under Art. 129 CANNOT suspend an advocate license.',
      'Confirmed that disciplinary jurisdiction over advocates belongs exclusively to the Bar Council under the Advocates Act.',
    ],
    mcqs: [
      {
        id: 'scba-uoi-mcq-1',
        question:
          'In Supreme Court Bar Association v. Union of India (1998), the Constitution Bench held that in contempt proceedings under Article 129:',
        options: [
          'The Supreme Court can permanently cancel an advocate license',
          'The Supreme Court cannot suspend an advocate license, as disciplinary power belongs exclusively to the Bar Council under the Advocates Act',
          'Only the President can punish an advocate for contempt',
          'Lawyers are totally immune from criminal contempt',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that the Supreme Court cannot suspend an advocate statutory license under Article 129/142, as disciplinary power is vested exclusively in the Bar Council of India.',
      },
    ],
  },
  {
    id: 'bhatia-international-2002',
    caseName: 'Bhatia International v. Bulk Trading S.A.',
    shortName: 'Bhatia International',
    citation: '(2002) 4 SCC 105',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2002,
    bench: '3-Judge Bench',
    judges: ['S.N. Variava, J.', 'B.N. Kirpal, J.', 'V.N. Khare, J.'],
    subject: 'ADR & Arbitration',
    topics: ['Part I Applicability', 'Section 9 Interim Relief', 'Foreign Seated Arbitration', 'UNCITRAL Model Law', 'BALCO Overruled'],
    tags: ['AIBE', 'Judiciary', 'Arbitration', 'ADR', 'Section 9', 'Part I', 'Bhatia International'],
    summary:
      'Historical 3-judge bench decision holding that Part I of the Arbitration and Conciliation Act, 1996 applies to all arbitrations, including international commercial arbitrations seated outside India, unless expressly or impliedly excluded by the parties. This expansive interpretation allowed Indian courts to grant interim relief under Section 9 in foreign arbitrations. (This decision was subsequently overruled by the 5-judge Constitution Bench in BALCO v. Kaiser in 2012).',
    facts: [
      'Bhatia International entered into a commercial contract with Bulk Trading S.A. containing an arbitration clause providing for arbitration in Paris under ICC Rules.',
      'Bulk Trading applied to the District Court at Indore under Section 9 of the Arbitration and Conciliation Act, 1996 for interim relief (injunction against disposal of assets located in India).',
      'Bhatia International objected, arguing that Section 2(2) states "This Part shall apply where the place of arbitration is in India"; hence Part I did not apply to arbitrations seated in Paris.',
      'The District Court and the Madhya Pradesh High Court held that Part I applied to foreign arbitrations.',
      'Bhatia International appealed to the Supreme Court.',
    ],
    issues: [
      'Whether Part I of the Arbitration and Conciliation Act, 1996 applies to international commercial arbitrations held outside India.',
      'Whether an application for interim measures under Section 9 is maintainable before an Indian court when the arbitration is seated abroad.',
    ],
    arguments: {
      appellant: [
        'Section 2(2) is clear and unambiguous: Part I applies only when the place of arbitration is in India.',
        'Extending Part I to foreign arbitrations violates the territoriality principle of the UNCITRAL Model Law.',
      ],
      respondent: [
        'If Part I does not apply, Indian parties have no legal remedy to secure assets located in India, leaving them remediless.',
        'Section 2(2) did not contain the word "only"; hence it was inclusive and not restrictive.',
      ],
    },
    provisions: [
      {
        actId: 'adr',
        actName: 'Arbitration and Conciliation Act, 1996',
        provisionId: 'aca-s-9',
        section: 'Section 2(2) & Section 9',
        title: 'Scope of Part I and interim relief in international arbitrations',
        subjectSlug: 'adr',
        topicId: 'aca-s-9',
      },
    ],
    reasoning: [
      {
        heading: 'Absence of the word "only" in Section 2(2)',
        explanation:
          'Variava, J. observed that Section 2(2) did not say that Part I shall apply "only" where the place of arbitration is in India. If Part I were not applied to foreign arbitrations, there would be a complete vacuum in Indian law, leaving parties without any interim relief under Section 9 to protect assets situated in India pending foreign arbitration.',
      },
      {
        heading: 'Opt-out rule for foreign-seated arbitrations',
        explanation:
          'The Court held that Part I applies to all arbitrations held outside India unless the parties by agreement, express or implied, exclude all or any of its provisions.',
      },
    ],
    decision:
      'Appeal dismissed. Part I held applicable to foreign arbitrations unless excluded. (Later overruled by 5-judge Constitution Bench in BALCO v. Kaiser Aluminium in 2012).',
    holding:
      'Part I of the Arbitration Act applies to arbitrations seated outside India unless expressly or impliedly excluded by the parties. Section 9 applications for interim relief are maintainable in India for foreign arbitrations. (Overruled in BALCO).',
    ratioDecidendi:
      'Part I of the Arbitration and Conciliation Act, 1996 applies to all arbitrations, both domestic and international. Where the place of arbitration is outside India, Part I applies unless the parties have by agreement, express or implied, excluded all or any of its provisions. (Note: Overruled in BALCO 2012).',
    obiterDicta:
      'Courts must interpret procedural arbitration laws purposively to prevent foreign awards from becoming empty paper decrees.',
    relatedCases: [
      {
        judgmentId: 'balco-2012',
        caseName: 'Bharat Aluminium Co. v. Kaiser Aluminium',
        citation: '(2012) 9 SCC 552',
        relationship: 'overruled',
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
      'Famous for the "opt-out" doctrine in international commercial arbitration.',
      'Explicitly overruled by the 5-judge Constitution Bench in BALCO (2012).',
      'Led to the 2015 Amendment inserting the proviso to Section 2(2) for Section 9/27 relief.',
    ],
    mcqs: [
      {
        id: 'bhatia-inter-mcq-1',
        question:
          'In Bhatia International v. Bulk Trading S.A. (2002), what did the Supreme Court hold regarding the applicability of Part I of the Arbitration Act?',
        options: [
          'Part I applies only to arbitrations held in India',
          'Part I applies to foreign-seated arbitrations unless expressly or impliedly excluded by parties',
          'Foreign arbitration awards can never be enforced in India',
          'Section 9 does not apply to commercial contracts',
        ],
        correctIndex: 1,
        explanation:
          'Bhatia International held that Part I applies to foreign-seated arbitrations unless excluded by parties. (Later overruled in BALCO 2012).',
      },
    ],
  },
]
