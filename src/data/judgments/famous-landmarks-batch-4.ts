import type { Judgment } from './types'

/**
 * Famous landmarks batch 4 (AIBE / Judiciary).
 * DISPATCHER Phase 5: verified citations; ratio mandatory; no 10/16-mark phrasing;
 * relatedCases.judgmentId only when target exists in ALL_JUDGMENTS;
 * provision topicId only for catalog-safe anchors (e.g. basic-structure, judiciary).
 */

export const admJabalpur: Judgment = {
  id: 'adm-jabalpur-1976',
  caseName: 'Additional District Magistrate, Jabalpur v. Shivakant Shukla',
  shortName: 'ADM Jabalpur',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1976,
  citation: '(1976) 2 SCC 521',
  bench: '5-Judge Constitution Bench',
  judges: [
    'A.N. Ray, C.J.',
    'H.R. Khanna, J. (dissenting)',
    'M.H. Beg, J.',
    'Y.V. Chandrachud, J.',
    'P.N. Bhagwati, J.',
  ],
  subject: 'Constitution',
  topics: ['Emergency', 'Article 21', 'Habeas Corpus', 'Presidential Order under Article 359'],
  tags: ['AIBE', 'Judiciary', 'Emergency', 'Article 21', 'Habeas Corpus', 'Dissent'],
  summary:
    'By a 4:1 majority, the Court held that during the Emergency, when the enforcement of Article 21 was suspended by a Presidential Order under Article 359, a detainee had no locus to file a habeas corpus petition to challenge the legality of detention. Justice H.R. Khanna dissented. The majority view was later treated as a constitutional error and effectively repudiated in later jurisprudence, including Puttaswamy.',
  facts: [
    'During the Proclamation of Emergency, a Presidential Order under Article 359 suspended the right to move any court for enforcement of Article 21 (and certain other rights).',
    'Detenus challenged preventive detention orders through habeas corpus petitions in various High Courts; the State contended that such petitions were barred.',
    'Appeals reached the Supreme Court on whether any residual judicial review of the legality of detention survived the Presidential Order.',
  ],
  issues: [
    'Whether a Presidential Order under Article 359 suspending enforcement of Article 21 bars habeas corpus petitions challenging detention during Emergency.',
    'Whether the executive’s satisfaction for preventive detention remains open to any judicial scrutiny when Article 21 is suspended.',
  ],
  arguments: {
    appellant: [
      'Once Article 21 is suspended, no person has locus to challenge detention on the ground of personal liberty; the rule of law yields to the constitutional text of Article 359.',
    ],
    respondent: [
      'Even during Emergency, detention must have the authority of law; courts retain power to examine whether the detention order is ultra vires or mala fide.',
      'Justice Khanna’s dissent emphasised that the right to life and liberty is not the gift of the Constitution alone and that habeas corpus cannot be extinguished in this manner.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-359',
      article: 'Article 359',
      title: 'Suspension of the enforcement of the rights conferred by Part III during emergencies',
      subjectSlug: 'constitution',
      topicId: 'emergency',
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
      heading: 'Majority: suspension bars habeas locus',
      explanation:
        'The majority held that while the Presidential Order under Article 359 remained in force, the detenu could not move the court for enforcement of the right to personal liberty under Article 21, and habeas corpus petitions on that foundation were not maintainable.',
    },
    {
      heading: 'Khanna J. dissent',
      explanation:
        'Justice Khanna held that Article 21 is not the sole repository of the right to life and liberty and that even in Emergency the State cannot claim a total immunity from judicial scrutiny of the legal authority for detention.',
    },
  ],
  decision:
    'The majority dismissed the habeas challenges. The decision is widely studied as a high-watermark of judicial deference during Emergency and is taught alongside Justice Khanna’s dissent. Later constitutional jurisprudence has rejected the majority’s approach to the inviolability of liberty.',
  holding:
    'Per majority: during suspension of Article 21 under Article 359, detenus could not maintain habeas corpus petitions to enforce personal liberty. Per Khanna J. (dissent): liberty retains judicially enforceable content even in Emergency.',
  ratioDecidendi:
    'As held by the majority, a Presidential Order under Article 359 suspending enforcement of Article 21 barred habeas corpus petitions founded on personal liberty during the Emergency—a proposition later repudiated in constitutional culture and jurisprudence.',
  obiterDicta:
    'The dissent of Justice Khanna remains the enduring normative lesson of the case for the supremacy of liberty and the rule of law.',
  relatedCases: [
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Majority approach repudiated in later constitutional discourse',
      judgmentId: 'puttaswamy-2017',
    },
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Related expansion of Article 21 after Emergency',
      judgmentId: 'maneka-gandhi-1978',
    },
  ],
  examPoints: [
    '4:1 majority; Khanna J. dissent is exam-critical.',
    'Article 359 Presidential Order and suspension of enforcement of Article 21.',
    'Majority barred habeas locus during Emergency—later treated as erroneous.',
    'Often paired with the 44th Amendment’s Emergency reforms in answers.',
  ],
  mcqs: [
    {
      id: 'adm-jabalpur-mcq-1',
      question: 'In ADM Jabalpur, the majority held that during the Emergency suspension of Article 21:',
      options: [
        'Habeas corpus remained fully available without restriction',
        'Detenus could not maintain habeas petitions to enforce Article 21 personal liberty',
        'All preventive detention laws became void',
        'Article 359 itself was struck down',
      ],
      correctIndex: 1,
      explanation:
        'The majority held that while the Article 359 order suspended enforcement of Article 21, habeas petitions founded on personal liberty were not maintainable; Justice Khanna dissented.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1976) 2 SCC 521',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const vineetNarain: Judgment = {
  id: 'vineet-narain-1998',
  caseName: 'Vineet Narain v. Union of India',
  shortName: 'Vineet Narain',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1998,
  citation: '(1998) 1 SCC 226',
  bench: '3-Judge Bench',
  judges: ['J.S. Verma, C.J.', 'S.P. Bharucha, J.', 'S.C. Sen, J.'],
  subject: 'Constitution',
  topics: ['CBI Independence', 'Rule of Law', 'Investigation', 'Continuing Mandamus'],
  tags: ['AIBE', 'Judiciary', 'CBI', 'Corruption', 'Rule of Law', 'PIL'],
  summary:
    'In the Jain Hawala matter, the Court issued directions to insulate the CBI and related investigating agencies from executive interference, affirming that the rule of law requires independent investigation of high-level corruption and deploying continuing mandamus to monitor compliance.',
  facts: [
    'Allegations of a nexus between politicians, bureaucrats, and criminals emerged from the Jain Hawala diaries and related materials.',
    'Petitioners alleged inertia and executive interference in investigation by the CBI and other agencies.',
    'The Court monitored investigation through continuing mandamus and considered structural reforms for agency independence.',
  ],
  issues: [
    'Whether the Court can issue directions to secure independent investigation free from executive interference.',
    'What institutional safeguards are required for the CBI and related agencies under the rule of law.',
  ],
  arguments: {
    appellant: [
      'High-level corruption cannot be investigated fairly if the investigating agency remains under the day-to-day control of the political executive.',
      'Article 14 and the rule of law require equal application of criminal process to the powerful.',
    ],
    respondent: [
      'Investigation is an executive function; judicial directions must respect separation of powers and statutory control frameworks.',
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
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-32',
      article: 'Article 32',
      title: 'Remedies for enforcement of fundamental rights',
      subjectSlug: 'constitution',
      topicId: 'art-32-226',
    },
  ],
  reasoning: [
    {
      heading: 'Independent investigation and rule of law',
      explanation:
        'The Court held that investigation of corruption at high places must be conducted by agencies insulated from extraneous influence; otherwise equality before law becomes illusory.',
    },
    {
      heading: 'Continuing mandamus',
      explanation:
        'The Court used continuing mandamus to monitor the progress of investigation and to issue structural directions, including on the Central Vigilance Commission and superintendence over the CBI, within the then statutory framework.',
    },
  ],
  decision:
    'Directions were issued to secure greater autonomy and integrity of investigation. The judgment is a leading authority on judicially enforced institutional independence of anti-corruption investigation.',
  holding:
    'The rule of law requires that investigation of serious corruption be free from executive interference; the Court may issue directions and monitor investigation to secure that end.',
  ratioDecidendi:
    'Where executive control threatens equal enforcement of criminal law against the powerful, constitutional courts may issue binding directions and continuing mandamus to secure independent investigation.',
  relatedCases: [
    {
      caseName: 'S.P. Gupta v. Union of India',
      citation: 'AIR 1982 SC 149',
      relationship: 'Related (judicial independence / PIL context)',
    },
  ],
  examPoints: [
    'CBI / investigating agency insulation from executive interference.',
    'Continuing mandamus as a supervisory technique.',
    'Rule of law and equality in high-level corruption cases.',
    'Jain Hawala factual matrix.',
  ],
  mcqs: [
    {
      id: 'vineet-narain-mcq-1',
      question: 'Vineet Narain is primarily associated with:',
      options: [
        'Basic structure limits on Article 368',
        'Directions for independent investigation by the CBI and related agencies',
        'Mandatory death penalty',
        'Abolition of Article 356',
      ],
      correctIndex: 1,
      explanation:
        'The Court issued directions to insulate the CBI and related agencies from executive interference in the investigation of high-level corruption.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1998) 1 SCC 226',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const secondJudges: Judgment = {
  id: 'second-judges-1993',
  caseName: 'Supreme Court Advocates-on-Record Association v. Union of India',
  shortName: 'Second Judges Case',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1993,
  citation: '(1993) 4 SCC 441',
  bench: '9-Judge Constitution Bench',
  judges: [
    'S. Ratnavel Pandian, J.',
    'A.M. Ahmadi, J.',
    'Kuldip Singh, J.',
    'J.S. Verma, J.',
    'M.N. Venkatachaliah, J.',
    'G.N. Ray, J.',
    'A.S. Anand, J.',
    'S.P. Bharucha, J.',
    'Faizan Uddin, J.',
  ],
  subject: 'Constitution',
  topics: ['Judicial Appointments', 'Collegium', 'Article 124', 'Independence of Judiciary'],
  tags: ['AIBE', 'Judiciary', 'Collegium', 'Judicial Independence', 'Basic Structure'],
  summary:
    'A 9-Judge Bench held that the Chief Justice of India has primacy in the appointment of judges of the Supreme Court and High Courts, and that the opinion of the CJI means the opinion formed in consultation with a collegium of senior judges—establishing the collegium system in substance.',
  facts: [
    'After S.P. Gupta (First Judges Case) had reduced the primacy of the CJI in appointments, fresh petitions raised the meaning of "consultation" under Articles 124 and 217.',
    'The Court reconsidered the balance between the executive and the judiciary in judicial appointments and transfers.',
  ],
  issues: [
    'Whether the Chief Justice of India has primacy in the appointment of Supreme Court and High Court judges.',
    'What "consultation" under Articles 124 and 217 requires.',
  ],
  arguments: {
    appellant: [
      'Independence of the judiciary, a basic feature, requires that judicial appointments not be dominated by the executive.',
      'Primacy of the CJI, understood as an institutional opinion of senior judges, is essential to that independence.',
    ],
    respondent: [
      'The constitutional text places the appointing power in the President acting on aid and advice, with consultation of constitutional functionaries, not a judicial veto.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-124',
      article: 'Article 124',
      title: 'Establishment and constitution of Supreme Court',
      subjectSlug: 'constitution',
      topicId: 'judiciary',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'basic-structure',
      title: 'Basic structure — independence of judiciary',
      subjectSlug: 'constitution',
      topicId: 'basic-structure',
    },
  ],
  reasoning: [
    {
      heading: 'Primacy of the CJI',
      explanation:
        'The Court held that in the event of a conflict, the opinion of the CJI has primacy in the appointment process, overruling the contrary approach of the First Judges Case on this aspect.',
    },
    {
      heading: 'Collegium as institutional opinion',
      explanation:
        'The opinion of the CJI is not the individual opinion of the office-holder alone but an institutional opinion formed in consultation with the collegium of senior-most judges.',
    },
  ],
  decision:
    'Primacy of the CJI in judicial appointments was restored and the collegium method was constitutionalised through interpretation. The Third Judges Case (1998) later clarified the collegium’s composition and consultation process.',
  holding:
    'The Chief Justice of India has primacy in appointments to the Supreme Court and High Courts; the CJI’s opinion is an institutional collegium opinion.',
  ratioDecidendi:
    'Independence of the judiciary requires primacy of the CJI in appointments; "consultation" under Articles 124 and 217 is meaningful only when the CJI’s institutional opinion has primacy over the executive in case of conflict.',
  relatedCases: [
    {
      caseName: 'S.P. Gupta v. Union of India',
      citation: 'AIR 1982 SC 149',
      relationship: 'Overruled in part on primacy',
    },
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied (basic structure / judicial independence)',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    'Second Judges Case = collegium primacy of CJI.',
    'Overruled First Judges Case on primacy of executive.',
    'CJI’s opinion = collegium’s institutional opinion.',
    'Third Judges Case (1998) later clarified numbers/process.',
  ],
  mcqs: [
    {
      id: 'second-judges-mcq-1',
      question: 'The Second Judges Case is authority for:',
      options: [
        'Executive primacy in judicial appointments',
        'Primacy of the CJI and the collegium in judicial appointments',
        'Abolition of High Courts',
        'Mandatory retirement of judges at 70',
      ],
      correctIndex: 1,
      explanation:
        'The 9-Judge Bench held that the CJI has primacy in appointments and that the CJI’s opinion is an institutional collegium opinion.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1993) 4 SCC 441',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const lilyThomas: Judgment = {
  id: 'lily-thomas-2013',
  caseName: 'Lily Thomas v. Union of India',
  shortName: 'Lily Thomas',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2013,
  citation: '(2013) 7 SCC 653',
  bench: '2-Judge Bench',
  judges: ['A.K. Patnaik, J.', 'S.J. Mukhopadhaya, J.'],
  subject: 'Constitution',
  topics: ['Disqualification of Legislators', 'Section 8 RP Act', 'Article 102', 'Article 191'],
  tags: ['AIBE', 'Judiciary', 'Elections', 'Disqualification', 'Criminalisation of Politics'],
  summary:
    'The Court struck down Section 8(4) of the Representation of the People Act, 1951, which deferred the disqualification of sitting MPs/MLAs upon conviction until appeal. Sitting members stand disqualified under Section 8(1)–(3) immediately on conviction, like any other candidate.',
  facts: [
    'Petitions challenged the constitutionality of Section 8(4) RP Act, which protected sitting legislators from immediate disqualification upon conviction if they filed an appeal within three months.',
    'The challenge was rooted in equality and the purity of the legislative process in the face of criminalisation of politics.',
  ],
  issues: [
    'Whether Section 8(4) RP Act, saving sitting members from immediate disqualification on conviction, is constitutionally valid.',
    'Whether Parliament could classify sitting members differently from other convicted persons for disqualification purposes.',
  ],
  arguments: {
    appellant: [
      'Articles 102 and 191 exhaust the constitutional field of disqualification; Section 8(4) undermines equal application of conviction-based disqualification.',
      'Deferring disqualification for sitting members alone is arbitrary and subverts electoral integrity.',
    ],
    respondent: [
      'Parliament may protect the stability of legislatures by allowing sitting members to continue pending appeal against conviction.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-102',
      article: 'Article 102',
      title: 'Disqualifications for membership (Parliament)',
      subjectSlug: 'constitution',
      topicId: 'elections-art-324',
    },
    {
      actId: 'rp-act',
      actName: 'Representation of the People Act, 1951',
      provisionId: 's-8',
      section: 'Section 8 RP Act',
      title: 'Disqualification on conviction for certain offences',
    },
  ],
  reasoning: [
    {
      heading: 'Invalid classification under Section 8(4)',
      explanation:
        'The Court held that Section 8(4) created an artificial distinction between sitting members and other candidates/convicts and was beyond the constitutional scheme of disqualification under Articles 102 and 191.',
    },
    {
      heading: 'Immediate disqualification on conviction',
      explanation:
        'Once a sitting MP or MLA is convicted and sentenced in terms of Section 8(1)–(3), disqualification operates at once; continuation in office pending appeal is not saved by Section 8(4).',
    },
  ],
  decision:
    'Section 8(4) RP Act was struck down. Sitting legislators are disqualified immediately upon conviction attracting Section 8(1)–(3). The judgment is central to criminalisation-of-politics jurisprudence.',
  holding:
    'Section 8(4) of the Representation of the People Act, 1951 is unconstitutional; conviction attracting Section 8(1)–(3) immediately disqualifies a sitting MP or MLA.',
  ratioDecidendi:
    'Parliament cannot defer the disqualification of sitting legislators upon conviction in a manner that undermines the constitutional disqualification scheme and equality before the law; Section 8(4) RP Act is void.',
  relatedCases: [
    {
      caseName: 'Chief Election Commissioner v. Jan Chaukidar (Maharaj Singh)',
      citation: '(2013) 7 SCC 507',
      relationship: 'Related (same day / disqualification context)',
    },
  ],
  examPoints: [
    'Section 8(4) RP Act struck down.',
    'Sitting MP/MLA disqualified immediately on conviction under Section 8(1)–(3).',
    'Articles 102 and 191 frame constitutional disqualification.',
    'Key case on criminalisation of politics.',
  ],
  mcqs: [
    {
      id: 'lily-thomas-mcq-1',
      question: 'Lily Thomas held that Section 8(4) RP Act is:',
      options: [
        'Valid and mandatory',
        'Unconstitutional; sitting members are disqualified immediately on attracting conviction under Section 8(1)–(3)',
        'Applicable only to Rajya Sabha',
        'A permanent constitutional amendment',
      ],
      correctIndex: 1,
      explanation:
        'The Court struck down Section 8(4), so sitting legislators stand disqualified immediately upon conviction under Section 8(1)–(3).',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2013) 7 SCC 653',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const arunaShanbaug: Judgment = {
  id: 'aruna-shanbaug-2011',
  caseName: 'Aruna Ramachandra Shanbaug v. Union of India',
  shortName: 'Aruna Shanbaug',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2011,
  citation: '(2011) 4 SCC 454',
  bench: '2-Judge Bench',
  judges: ['Markandey Katju, J.', 'Gyan Sudha Misra, J.'],
  subject: 'Constitution',
  topics: ['Passive Euthanasia', 'Article 21', 'Persistent Vegetative State', 'Parens Patriae'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Euthanasia', 'Medical Ethics'],
  summary:
    'While declining the plea to withdraw life support in the facts of Aruna Shanbaug’s case as presented by a next friend, the Court recognised passive euthanasia in principle under a High Court–supervised procedure and extensively discussed the right to die with dignity, laying the groundwork later developed in Common Cause (2018).',
  facts: [
    'Aruna Shanbaug had remained in a persistent vegetative state for decades following a violent assault while working as a nurse in Mumbai.',
    'A next friend sought permission to withdraw life-sustaining treatment; hospital staff opposed withdrawal and continued to care for her.',
  ],
  issues: [
    'Whether passive euthanasia is permissible under Indian law.',
    'Who may decide on withdrawal of life support for a patient in a permanent vegetative state.',
  ],
  arguments: {
    appellant: [
      'Continued treatment in a permanent vegetative state without prospect of recovery can violate dignity; courts should permit withdrawal of life support in appropriate cases.',
    ],
    respondent: [
      'The hospital and nursing staff, as caregivers, opposed withdrawal; sanctity of life and the absence of a clear statutory framework required caution.',
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
      heading: 'Passive euthanasia recognised in principle',
      explanation:
        'The Court distinguished active euthanasia from passive euthanasia and held that withdrawal of life support may be permissible in appropriate cases under judicial supervision, invoking the parens patriae jurisdiction of the High Court.',
    },
    {
      heading: 'On the facts of Aruna Shanbaug',
      explanation:
        'On the medical and caregiving facts before it, the Court declined the next friend’s request to withdraw support, while still laying down a procedure for future cases.',
    },
  ],
  decision:
    'Passive euthanasia was recognised under a guarded High Court–supervised process. The individual prayer for withdrawal in Aruna Shanbaug’s case was rejected. Common Cause (2018) later affirmed passive euthanasia and advance directives on a Constitution Bench footing.',
  holding:
    'Passive euthanasia may be permitted under judicial supervision in appropriate cases; active euthanasia remains impermissible in the absence of legislation. On the facts, withdrawal of support for Aruna Shanbaug was not ordered.',
  ratioDecidendi:
    'In the absence of legislation, High Courts may, in exercise of parens patriae jurisdiction and under strict procedural safeguards, permit withdrawal of life-sustaining treatment in appropriate cases of permanent vegetative state; active euthanasia is not authorised.',
  relatedCases: [
    {
      caseName: 'Common Cause v. Union of India',
      citation: '(2018) 5 SCC 1',
      relationship: 'Developed / Affirmed on Constitution Bench',
      judgmentId: 'common-cause-euthanasia-2018',
    },
    {
      caseName: 'Gian Kaur v. State of Punjab',
      citation: '(1996) 2 SCC 648',
      relationship: 'Distinguished / Contextualised',
    },
  ],
  examPoints: [
    'Passive euthanasia recognised; active euthanasia not authorised.',
    'High Court parens patriae procedure for withdrawal of life support.',
    'On facts, withdrawal not ordered for Aruna Shanbaug.',
    'Foundation for Common Cause (2018) living-will framework.',
  ],
  mcqs: [
    {
      id: 'aruna-shanbaug-mcq-1',
      question: 'Aruna Shanbaug is primarily authority for:',
      options: [
        'Mandatory active euthanasia',
        'Recognition of passive euthanasia under judicial safeguards',
        'Abolition of Article 21',
        'Criminalisation of all medical withdrawal of support',
      ],
      correctIndex: 1,
      explanation:
        'The Court recognised passive euthanasia under a High Court–supervised procedure while declining withdrawal on the specific facts of the case.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2011) 4 SCC 454',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_4: Judgment[] = [
  admJabalpur,
  vineetNarain,
  secondJudges,
  lilyThomas,
  arunaShanbaug,
]
