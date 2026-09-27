import type { Judgment } from './types'

/**
 * Famous landmarks batch 5 (AIBE / Judiciary).
 * DISPATCHER Phase 5: verified citations; ratio mandatory; no mark-band phrasing;
 * relatedCases.judgmentId only when target exists; catalog-safe topicIds only.
 */

export const thirdJudges: Judgment = {
  id: 'third-judges-1998',
  caseName: 'In re Special Reference No. 1 of 1998',
  shortName: 'Third Judges Case',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1998,
  citation: '(1998) 7 SCC 739',
  bench: '9-Judge Constitution Bench',
  judges: [
    'S.P. Bharucha, J.',
    'M.K. Mukherjee, J.',
    'S.B. Majmudar, J.',
    'Sujata V. Manohar, J.',
    'G.T. Nanavati, J.',
    'S. Saghir Ahmad, J.',
    'K. Venkataswami, J.',
    'B.N. Kirpal, J.',
    'G.B. Pattanaik, J.',
  ],
  subject: 'Constitution',
  topics: ['Collegium', 'Judicial Appointments', 'Article 124', 'Consultation'],
  tags: ['AIBE', 'Judiciary', 'Collegium', 'Judicial Independence', 'Article 124'],
  summary:
    'Answering a Presidential Reference, the Court clarified the collegium process for judicial appointments: the Chief Justice of India’s opinion means the opinion of a collegium of the CJI and the four senior-most puisne Judges of the Supreme Court for Supreme Court appointments, and it laid down norms for High Court appointments and transfers.',
  facts: [
    'After the Second Judges Case established primacy of the CJI and the collegium idea, doubts remained on the size of the collegium and the modalities of consultation.',
    'The President made a Reference under Article 143 seeking clarification of the consultation process for appointments and transfers.',
  ],
  issues: [
    'What is the composition of the collegium whose opinion constitutes the opinion of the Chief Justice of India?',
    'How must consultation for appointments and transfers of High Court Judges be conducted?',
  ],
  arguments: {
    appellant: [
      'Institutional independence requires a clear, multi-judge collegium so that appointments are not the decision of a single judicial office-holder.',
    ],
    respondent: [
      'The constitutional text of consultation must be given workable content without transferring the executive’s formal appointing role.',
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
      provisionId: 'art-143',
      article: 'Article 143',
      title: 'Power of President to consult Supreme Court',
      subjectSlug: 'constitution',
      topicId: 'judiciary',
    },
  ],
  reasoning: [
    {
      heading: 'Collegium of five for Supreme Court appointments',
      explanation:
        'For appointments to the Supreme Court, the CJI’s opinion is formed in consultation with the four senior-most puisne Judges — a collegium of five.',
    },
    {
      heading: 'High Court appointments and transfers',
      explanation:
        'The Court elaborated the consultation chain involving the CJI, senior Supreme Court Judges familiar with the High Court, and the Chief Justice of the High Court, reinforcing institutional rather than personal consultation.',
    },
  ],
  decision:
    'The Reference clarified and operationalised the collegium system. Together with the Second Judges Case, it forms the doctrinal core of the pre-NJAC collegium framework (later NJAC being struck down in the Fourth Judges Case).',
  holding:
    'The opinion of the CJI for Supreme Court appointments is the opinion of a collegium comprising the CJI and the four senior-most puisne Judges; High Court appointments and transfers follow structured collegial consultation.',
  ratioDecidendi:
    'Meaningful consultation under Articles 124 and 217 requires that the CJI’s opinion be an institutional collegium opinion with a defined composition, not the solitary opinion of the Chief Justice.',
  relatedCases: [
    {
      caseName: 'Supreme Court Advocates-on-Record Association v. Union of India',
      citation: '(1993) 4 SCC 441',
      relationship: 'Clarified / Operationalised',
      judgmentId: 'second-judges-1993',
    },
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Related (judicial independence as basic feature)',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    'Third Judges Case = Presidential Reference clarifying collegium size/process.',
    'SC appointments: CJI + 4 senior-most puisne Judges.',
    'Builds on Second Judges Case primacy.',
    'Often asked together with NJAC / Fourth Judges Case in later papers.',
  ],
  mcqs: [
    {
      id: 'third-judges-mcq-1',
      question: 'Under the Third Judges Case, the collegium for Supreme Court appointments comprises:',
      options: [
        'Only the Chief Justice of India',
        'The CJI and the four senior-most puisne Judges',
        'The entire Supreme Court',
        'The Union Cabinet alone',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that for Supreme Court appointments the CJI’s opinion is formed with the four senior-most puisne Judges — a collegium of five.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1998) 7 SCC 739',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const kihotoHollohan: Judgment = {
  id: 'kihoto-hollohan-1992',
  caseName: 'Kihoto Hollohan v. Zachillhu',
  shortName: 'Kihoto Hollohan',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1992,
  citation: '(1992) Supp (2) SCC 651',
  bench: '5-Judge Constitution Bench',
  judges: [
    'L.M. Sharma, J.',
    'M.N. Venkatachaliah, J.',
    'J.S. Verma, J.',
    'K. Jayachandra Reddy, J.',
    'S.C. Agrawal, J.',
  ],
  subject: 'Constitution',
  topics: ['Tenth Schedule', 'Anti-Defection', 'Speaker', 'Judicial Review', 'Paragraph 7'],
  tags: ['AIBE', 'Judiciary', 'Anti-Defection', 'Tenth Schedule', 'Speaker'],
  summary:
    'The Court upheld the Tenth Schedule (anti-defection law) in substance, but struck down Paragraph 7 to the extent it barred judicial review of the Speaker’s orders. The Speaker’s decision under the Tenth Schedule remains subject to judicial review on limited grounds such as mala fides, perversity, and violation of natural justice.',
  facts: [
    'The Constitution (Fifty-second Amendment) Act, 1985 inserted the Tenth Schedule to curb political defections.',
    'Challenges were raised to the Speaker’s adjudicatory role and to Paragraph 7, which sought to exclude the jurisdiction of courts in respect of disqualification matters.',
  ],
  issues: [
    'Whether the Tenth Schedule is constitutionally valid.',
    'Whether Paragraph 7 validly ousts judicial review of the Speaker’s disqualification decisions.',
  ],
  arguments: {
    appellant: [
      'Paragraph 7 destroys judicial review, a basic feature, by placing the Speaker’s orders beyond all courts.',
      'The Speaker is a political figure; unreviewable adjudication of disqualification threatens free and fair legislative processes.',
    ],
    respondent: [
      'Anti-defection is essential for parliamentary stability; the Speaker is an appropriate authority for swift intra-House adjudication.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'tenth-schedule',
      title: 'Tenth Schedule — Disqualification on ground of defection',
      subjectSlug: 'constitution',
      topicId: 'elections-art-324',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'basic-structure',
      title: 'Basic structure — judicial review',
      subjectSlug: 'constitution',
      topicId: 'basic-structure',
    },
  ],
  reasoning: [
    {
      heading: 'Tenth Schedule largely upheld',
      explanation:
        'The Court sustained the anti-defection scheme as a legitimate constitutional experiment to curb unprincipled defections and protect the stability of governments.',
    },
    {
      heading: 'Paragraph 7 and judicial review',
      explanation:
        'Paragraph 7, insofar as it totally excluded judicial review, was held unconstitutional. The Speaker’s order is subject to judicial review on grounds such as mala fides, perversity, and breach of constitutional mandates including natural justice.',
    },
  ],
  decision:
    'Tenth Schedule upheld; Paragraph 7 struck down to the extent of ouster of judicial review. The judgment is the locus classicus on anti-defection and Speaker’s jurisdiction.',
  holding:
    'The Tenth Schedule is valid, but the Speaker’s disqualification orders are open to judicial review; total ouster under Paragraph 7 is unconstitutional.',
  ratioDecidendi:
    'Anti-defection disqualification may be entrusted to the Speaker, but judicial review cannot be wholly excluded; finality clauses that destroy judicial review of constitutional disqualifications violate the basic structure.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied (judicial review / basic structure)',
      judgmentId: 'kesavananda-bharati-1973',
    },
    {
      caseName: 'Indira Nehru Gandhi v. Raj Narain',
      citation: '(1975) Supp SCC 1',
      relationship: 'Related (judicial review of electoral/constitutional process)',
      judgmentId: 'indira-gandhi-election-1975',
    },
  ],
  examPoints: [
    'Tenth Schedule upheld; Paragraph 7 (ouster) struck down.',
    'Speaker’s order reviewable on limited grounds (mala fides, perversity, natural justice).',
    'Anti-defection vs legislative freedom balance.',
    'High-yield for both constitutional law and polity-style questions.',
  ],
  mcqs: [
    {
      id: 'kihoto-mcq-1',
      question: 'Kihoto Hollohan held that Paragraph 7 of the Tenth Schedule is:',
      options: [
        'Fully valid and bars all courts',
        'Unconstitutional to the extent it ousts judicial review of the Speaker’s orders',
        'Applicable only to Rajya Sabha',
        'A temporary ordinance',
      ],
      correctIndex: 1,
      explanation:
        'The Court struck down Paragraph 7 insofar as it excluded judicial review, while upholding the Tenth Schedule in substance.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1992) Supp (2) SCC 651',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const irCoelho: Judgment = {
  id: 'ir-coelho-2007',
  caseName: 'I.R. Coelho v. State of Tamil Nadu',
  shortName: 'I.R. Coelho',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2007,
  citation: '(2007) 2 SCC 1',
  bench: '9-Judge Constitution Bench',
  judges: [
    'Y.K. Sabharwal, C.J.',
    'Ashok Bhan, J.',
    'Arijit Pasayat, J.',
    'B.P. Singh, J.',
    'S.H. Kapadia, J.',
    'C.K. Thakker, J.',
    'P.K. Balasubramanyan, J.',
    'Altamas Kabir, J.',
    'D.K. Jain, J.',
  ],
  subject: 'Constitution',
  topics: ['Ninth Schedule', 'Basic Structure', 'Article 31B', 'Judicial Review'],
  tags: ['AIBE', 'Judiciary', 'Ninth Schedule', 'Basic Structure', 'Article 31B'],
  summary:
    'A 9-Judge Bench held that laws placed in the Ninth Schedule after 24 April 1973 (the date of Kesavananda) are open to judicial review on the touchstone of the basic structure. Article 31B does not confer a blanket immunity from basic-structure scrutiny.',
  facts: [
    'Successive amendments had inserted numerous laws into the Ninth Schedule under Article 31B to protect them from fundamental-rights challenges.',
    'The question referred was whether such insertion confers absolute immunity even when the law damages the basic structure.',
  ],
  issues: [
    'Whether laws inserted into the Ninth Schedule after 24 April 1973 are immune from basic-structure review.',
    'What is the standard of judicial review applicable to Ninth Schedule laws?',
  ],
  arguments: {
    appellant: [
      'Article 31B cannot be used to destroy basic features; insertion in the Ninth Schedule after Kesavananda remains subject to basic-structure limits.',
    ],
    respondent: [
      'The textual purpose of Article 31B is to give complete immunity to scheduled laws from Part III challenges.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-31b',
      article: 'Article 31B',
      title: 'Validation of certain Acts and Regulations (Ninth Schedule)',
      subjectSlug: 'constitution',
      topicId: 'basic-structure',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-368',
      article: 'Article 368',
      title: 'Power of Parliament to amend the Constitution',
      subjectSlug: 'constitution',
      topicId: 'amendment',
    },
  ],
  reasoning: [
    {
      heading: 'Kesavananda as the cut-off',
      explanation:
        'The Court treated 24 April 1973 as the watershed: laws inserted into the Ninth Schedule after that date must face basic-structure review.',
    },
    {
      heading: 'No absolute immunity',
      explanation:
        'Article 31B does not authorise Parliament to destroy or damage the basic structure by the device of Ninth Schedule insertion; judicial review on that ground remains available.',
    },
  ],
  decision:
    'Post-Kesavananda Ninth Schedule insertions are open to basic-structure challenge. The judgment is the leading modern authority on the limits of Article 31B.',
  holding:
    'Laws placed in the Ninth Schedule after 24 April 1973 are subject to judicial review on the ground that they damage or destroy the basic structure of the Constitution.',
  ratioDecidendi:
    'Article 31B cannot confer absolute immunity from basic-structure review; any post-24 April 1973 Ninth Schedule law that damages basic features is liable to be struck down.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied (cut-off date and basic structure)',
      judgmentId: 'kesavananda-bharati-1973',
    },
    {
      caseName: 'Minerva Mills Ltd. v. Union of India',
      citation: '(1980) 3 SCC 625',
      relationship: 'Applied',
      judgmentId: 'minerva-mills-1980',
    },
  ],
  examPoints: [
    'Ninth Schedule post-24 April 1973 = open to basic-structure review.',
    'Article 31B is not a blank cheque against basic features.',
    '9-Judge Bench; high-yield with Kesavananda and Minerva Mills.',
    'Distinguish pre- and post-Kesavananda insertions.',
  ],
  mcqs: [
    {
      id: 'ir-coelho-mcq-1',
      question: 'I.R. Coelho held that laws inserted in the Ninth Schedule after 24 April 1973 are:',
      options: [
        'Completely immune from all judicial review',
        'Open to challenge on the ground of violation of the basic structure',
        'Automatically void without hearing',
        'Applicable only to taxation statutes',
      ],
      correctIndex: 1,
      explanation:
        'The 9-Judge Bench held that post-Kesavananda Ninth Schedule insertions can be tested on the basic-structure doctrine.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2007) 2 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const rajaRamPal: Judgment = {
  id: 'raja-ram-pal-2007',
  caseName: 'Raja Ram Pal v. Hon\'ble Speaker, Lok Sabha',
  shortName: 'Raja Ram Pal',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2007,
  citation: '(2007) 3 SCC 184',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Y.K. Sabharwal, C.J.',
    'K.G. Balakrishnan, J.',
    'C.K. Thakker, J.',
    'R.V. Raveendran, J.',
    'D.K. Jain, J.',
  ],
  subject: 'Constitution',
  topics: ['Parliamentary Privileges', 'Article 105', 'Expulsion of Members', 'Judicial Review'],
  tags: ['AIBE', 'Judiciary', 'Parliament', 'Privileges', 'Judicial Review'],
  summary:
    'In the cash-for-query matter, the Court held that the expulsion of Members of Parliament by the House is open to judicial review on limited constitutional grounds, and that parliamentary privileges under Article 105 are not a source of unlimited, unreviewable power.',
  facts: [
    'Following a television exposé on acceptance of money for asking questions in Parliament, a committee recommended expulsion of certain MPs.',
    'The House expelled the members; writ petitions challenged the expulsion as violative of constitutional limits on privileges and of principles of natural justice.',
  ],
  issues: [
    'Whether expulsion of a Member of Parliament is subject to judicial review.',
    'What is the scope of parliamentary privilege under Article 105 vis-à-vis fundamental rights and basic constitutional norms?',
  ],
  arguments: {
    appellant: [
      'Expulsion without adequate fairness and beyond the true content of privileges violates constitutional limitations and is reviewable by courts.',
    ],
    respondent: [
      'Article 105 and the exclusive cognisance of the House bar judicial interference in matters of internal procedure and privilege.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-105',
      article: 'Article 105',
      title: 'Powers, privileges, etc., of the Houses of Parliament',
      subjectSlug: 'constitution',
      topicId: 'judiciary',
    },
  ],
  reasoning: [
    {
      heading: 'Privileges are not absolute',
      explanation:
        'The Court held that parliamentary privileges are subject to the Constitution; they cannot be exercised in a manner that destroys constitutional limitations or basic features.',
    },
    {
      heading: 'Limited judicial review of expulsion',
      explanation:
        'While courts will not sit as a court of appeal over every internal parliamentary decision, expulsion is open to judicial review on grounds such as illegality, unconstitutionality, and violation of fundamental constitutional norms.',
    },
  ],
  decision:
    'Judicial review of expulsion was affirmed within limits. The judgment is a leading authority on the boundary between parliamentary privilege and constitutionalism.',
  holding:
    'Expulsion of MPs is subject to limited judicial review; Article 105 privileges do not place parliamentary action beyond the Constitution.',
  ratioDecidendi:
    'Parliamentary privileges exist within the Constitution, not above it; drastic actions such as expulsion of members remain amenable to judicial review on constitutional grounds.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied (constitutional supremacy)',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    'Cash-for-query / expulsion of MPs context.',
    'Privileges under Article 105 are not unreviewable.',
    'Limited judicial review of expulsion.',
    'Often contrasted with exclusive cognisance doctrines.',
  ],
  mcqs: [
    {
      id: 'raja-ram-pal-mcq-1',
      question: 'Raja Ram Pal is authority for the proposition that:',
      options: [
        'Courts can never examine any action of Parliament',
        'Expulsion of MPs is open to limited judicial review despite Article 105 privileges',
        'Article 105 creates a parallel constitution',
        'Only the President can expel MPs',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that expulsion of members is subject to limited judicial review and that privileges are not above the Constitution.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2007) 3 SCC 184',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const nabamRebia: Judgment = {
  id: 'nabam-rebia-2016',
  caseName: 'Nabam Rebia & Bamang Felix v. Deputy Speaker, Arunachal Pradesh Legislative Assembly',
  shortName: 'Nabam Rebia',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2016,
  citation: '(2016) 8 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'J.S. Khehar, J.',
    'Dipak Misra, J.',
    'Madan B. Lokur, J.',
    'P.C. Ghose, J.',
    'N.V. Ramana, J.',
  ],
  subject: 'Constitution',
  topics: ['Governor', 'Article 163', 'Article 174', 'Speaker', 'Floor Test', 'State Legislature'],
  tags: ['AIBE', 'Judiciary', 'Governor', 'Federalism', 'Speaker', 'Article 174'],
  summary:
    'The Court held that the Governor cannot summon, prorogue, or dissolve the House contrary to the aid and advice of the Council of Ministers so long as the government enjoys confidence; and that a Speaker should not decide disqualification petitions under the Tenth Schedule while a motion for the Speaker’s own removal is pending.',
  facts: [
    'Political turmoil in Arunachal Pradesh involved the Governor’s messages and directions regarding Assembly sessions and the Speaker’s handling of disqualification proceedings.',
    'The status of the Chief Minister’s government, the role of the Governor under Articles 163 and 174, and the Speaker’s impartiality in defection cases were in issue.',
  ],
  issues: [
    'Whether the Governor can independently summon the Assembly or fix its agenda contrary to the Council of Ministers’ advice when the government has not lost confidence.',
    'Whether the Speaker can decide Tenth Schedule disqualifications while facing a pending removal motion.',
  ],
  arguments: {
    appellant: [
      'The Governor is ordinarily bound by aid and advice; discretionary interference in Assembly functioning undermines responsible government.',
      'A Speaker facing removal cannot be an impartial adjudicator of disqualification petitions against members supporting the removal motion.',
    ],
    respondent: [
      'Constitutional discretion of the Governor and the Speaker’s Tenth Schedule jurisdiction were invoked to justify the course adopted during the crisis.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-163',
      article: 'Article 163',
      title: 'Council of Ministers to aid and advise Governor',
      subjectSlug: 'constitution',
      topicId: 'centre-state',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-174',
      article: 'Article 174',
      title: 'Sessions of the State Legislature, prorogation and dissolution',
      subjectSlug: 'constitution',
      topicId: 'centre-state',
    },
  ],
  reasoning: [
    {
      heading: 'Governor and aid and advice',
      explanation:
        'The Court held that so long as the Council of Ministers enjoys the confidence of the House, the Governor must act on its aid and advice in matters of summoning and related Assembly business, save where the Constitution expressly confers discretion.',
    },
    {
      heading: 'Speaker and pending removal motion',
      explanation:
        'A Speaker should not proceed with Tenth Schedule disqualification proceedings when a notice of resolution for the Speaker’s removal is pending, to protect impartiality and constitutional morality.',
    },
  ],
  decision:
    'The Court set aside the unconstitutional course of action in the Arunachal crisis and restored constitutional principles governing the Governor–Council of Ministers relationship and the Speaker’s role. The judgment is frequently cited with Bommai on floor tests and federal norms.',
  holding:
    'The Governor cannot ordinarily summon or control the Assembly contrary to the aid and advice of a Council of Ministers that has not lost confidence; the Speaker should not decide defection petitions while a removal motion against the Speaker is pending.',
  ratioDecidendi:
    'Responsible government at the State level requires that the Governor act on the aid and advice of the Council of Ministers enjoying confidence; the Speaker’s adjudicatory role under the Tenth Schedule is incompatible with deciding disqualifications while the Speaker’s own removal motion is pending.',
  relatedCases: [
    {
      caseName: 'S.R. Bommai v. Union of India',
      citation: '(1994) 3 SCC 1',
      relationship: 'Related (floor test / federalism)',
      judgmentId: 'sr-bommai-1994',
    },
    {
      caseName: 'Kihoto Hollohan v. Zachillhu',
      citation: '(1992) Supp (2) SCC 651',
      relationship: 'Related (Tenth Schedule / Speaker)',
      judgmentId: 'kihoto-hollohan-1992',
    },
  ],
  examPoints: [
    'Governor bound by aid and advice when ministry has confidence.',
    'Speaker should not hear Tenth Schedule cases while removal motion pending.',
    'Arunachal Pradesh Assembly crisis factual matrix.',
    'Pair with Bommai and Kihoto Hollohan in answers.',
  ],
  mcqs: [
    {
      id: 'nabam-rebia-mcq-1',
      question: 'Nabam Rebia held that a Speaker should not decide Tenth Schedule disqualification petitions when:',
      options: [
        'The Governor is out of State',
        'A motion for the Speaker’s own removal is pending',
        'The House is in recess only',
        'The President has issued a reference under Article 143',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that the Speaker should not proceed with defection disqualification proceedings while a resolution for the Speaker’s removal is pending.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2016) 8 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_5: Judgment[] = [
  thirdJudges,
  kihotoHollohan,
  irCoelho,
  rajaRamPal,
  nabamRebia,
]
