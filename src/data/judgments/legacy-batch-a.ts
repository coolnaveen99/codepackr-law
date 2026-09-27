import type { Judgment } from './types'

export const manekaGandhi: Judgment = {
  id: 'maneka-gandhi-1978',
  caseName: 'Maneka Gandhi v. Union of India',
  shortName: 'Maneka Gandhi',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1978,
  citation: '(1978) 1 SCC 248',
  bench: '7-Judge Constitution Bench',
  judges: ['M.H. Beg, C.J.', 'Y.V. Chandrachud, J.', 'V.R. Krishna Iyer, J.', 'P.N. Bhagwati, J.', 'N.L. Untwalia, J.', 'S. Murtaza Fazal Ali, J.', 'P.S. Kailasam, J.'],
  subject: 'Constitution',
  topics: ['Article 21', 'Due Process', 'Passport', 'Procedure Established by Law'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Fundamental Rights'],
  summary:
    'The Court held that the procedure under Article 21 must be right, just and fair, not arbitrary; the "golden triangle" of Articles 14, 19 and 21 is interlinked, expanding A.K. Gopalan’s narrow reading of personal liberty.',
  facts: [
    'Maneka Gandhi’s passport was impounded by the Government under the Passport Act, 1967 without furnishing reasons in the interest of the general public.',
    'She challenged the order under Article 32 as violative of Articles 14, 19 and 21.',
  ],
  issues: [
    'Whether the right to travel abroad is part of personal liberty under Article 21.',
    'Whether "procedure established by law" under Article 21 must be fair, just and reasonable.',
  ],
  arguments: {
    appellant: [
      'Personal liberty under Article 21 is of widest amplitude and includes the right to travel abroad.',
      'Any procedure that is arbitrary or oppressive fails Article 21 read with Articles 14 and 19.',
    ],
    respondent: [
      'Passport impounding is authorised by statute in the public interest and satisfies procedure established by law.',
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
      topicId: 'art-21',
    },
  ],
  reasoning: [
    {
      heading: 'Expanded personal liberty',
      explanation:
        'Personal liberty is not limited to freedom from physical restraint; it includes a variety of rights that go to the dignity of the individual, including travel abroad.',
    },
    {
      heading: 'Fair, just and reasonable procedure',
      explanation:
        'Procedure established by law under Article 21 must be fair, just and reasonable, not fanciful, oppressive or arbitrary; Articles 14, 19 and 21 form a golden triangle.',
    },
  ],
  decision:
    'The Court expanded Article 21 and required fairness in procedure. The passport order was subjected to the discipline of natural justice and constitutional reasonableness.',
  holding:
    'Article 21 requires a fair, just and reasonable procedure; personal liberty includes the right to travel abroad.',
  ratioDecidendi:
    'Any law or executive action depriving personal liberty must prescribe a procedure that is fair, just and reasonable and must withstand scrutiny under Articles 14 and 19 as well as Article 21.',
  relatedCases: [
    {
      caseName: 'A.K. Gopalan v. State of Madras',
      citation: 'AIR 1950 SC 27',
      relationship: 'Overruled in approach',
    },
  ],
  examPoints: [
    'Golden triangle: Articles 14, 19 and 21.',
    'Overruled narrow A.K. Gopalan view of isolated fundamental rights.',
    'Procedure under Article 21 must be fair, just and reasonable.',
  ],
  mcqs: [
    {
      id: 'maneka-mcq-1',
      question: 'Maneka Gandhi is famous for holding that procedure under Article 21 must be:',
      options: ['Only enacted by Parliament', 'Fair, just and reasonable', 'Approved by the President', 'Identical to American due process clause in text'],
      correctIndex: 1,
      explanation: 'The Court held that procedure established by law must be fair, just and reasonable, not arbitrary.',
    },
  ],
  source: { type: 'document', title: 'Supreme Court Cases (1978) 1 SCC 248', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const minervaMills: Judgment = {
  id: 'minerva-mills-1980',
  caseName: 'Minerva Mills Ltd. v. Union of India',
  shortName: 'Minerva Mills',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1980,
  citation: '(1980) 3 SCC 625',
  bench: '5-Judge Constitution Bench',
  judges: ['Y.V. Chandrachud, C.J.', 'P.N. Bhagwati, J.', 'A.C. Gupta, J.', 'N.L. Untwalia, J.', 'P.S. Kailasam, J.'],
  subject: 'Constitution',
  topics: ['Basic Structure', 'Article 31C', 'Article 368', 'Judicial Review'],
  tags: ['AIBE', 'Judiciary', 'Basic Structure', 'Directive Principles'],
  summary:
    'The Court struck down clauses of the 42nd Amendment that sought to give unlimited amending power and to exclude judicial review of laws implementing Directive Principles under an expanded Article 31C, reaffirming the basic structure doctrine.',
  facts: [
    'Minerva Mills challenged nationalisation-related laws and the constitutional amendments expanding Parliament’s power after Kesavananda.',
    'Sections 4 and 55 of the 42nd Amendment were attacked as destructive of the basic structure.',
  ],
  issues: [
    'Whether Parliament can expand Article 368 to exclude limitations on the amending power.',
    'Whether Article 31C as amended to protect laws giving effect to all Directive Principles destroys the basic structure.',
  ],
  arguments: {
    appellant: [
      'Unlimited amending power and exclusion of judicial review destroy the basic structure recognized in Kesavananda.',
    ],
    respondent: [
      'Directive Principles are fundamental in governance; laws implementing them should be immune from challenge on fundamental rights grounds.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-368',
      article: 'Article 368',
      title: 'Power of Parliament to amend the Constitution',
      subjectSlug: 'constitution',
    },
  ],
  reasoning: [
    {
      heading: 'Limited amending power',
      explanation:
        'Parliament cannot, under the exercise of constituent power, expand that power so as to convert a controlled constitution into an uncontrolled one.',
    },
    {
      heading: 'Harmony of Parts III and IV',
      explanation:
        'Fundamental rights and Directive Principles must be balanced; destroying judicial review of laws implementing all Directive Principles damages the basic structure.',
    },
  ],
  decision:
    'Sections 4 and 55 of the 42nd Amendment were struck down to the extent they violated the basic structure. Kesavananda was reaffirmed.',
  holding:
    'Limited amending power and judicial review are part of the basic structure; Parliament cannot take away these limitations by amendment.',
  ratioDecidendi:
    'Clauses that confer unlimited amending power or destroy judicial review of constitutional amendments/laws in a manner that damages the basic structure are void.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied',
      judgmentId: 'kesavananda-bharati-1973',
    },
  ],
  examPoints: [
    'Reaffirmed basic structure after the 42nd Amendment.',
    'Limited amending power is itself a basic feature.',
    'Struck down expanded Article 31C / unlimited Article 368 clauses of the 42nd Amendment.',
  ],
  mcqs: [
    {
      id: 'minerva-mcq-1',
      question: 'Minerva Mills primarily reaffirmed which doctrine?',
      options: ['Colourable legislation', 'Basic structure', 'Eclipse', 'Severability only'],
      correctIndex: 1,
      explanation: 'Minerva Mills reaffirmed that limited amending power and judicial review form part of the basic structure.',
    },
  ],
  source: { type: 'document', title: 'Supreme Court Cases (1980) 3 SCC 625', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const puttaswamy: Judgment = {
  id: 'puttaswamy-2017',
  caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
  shortName: 'Puttaswamy',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2017,
  citation: '(2017) 10 SCC 1',
  bench: '9-Judge Constitution Bench',
  judges: ['J.S. Khehar, C.J.', 'J. Chelameswar, J.', 'S.A. Bobde, J.', 'R.K. Agrawal, J.', 'R.F. Nariman, J.', 'A.M. Sapre, J.', 'D.Y. Chandrachud, J.', 'S.K. Kaul, J.', 'S.A. Nazeer, J.'],
  subject: 'Constitution',
  topics: ['Right to Privacy', 'Article 21', 'Article 14', 'Article 19'],
  tags: ['AIBE', 'Judiciary', 'Privacy', 'Article 21', 'Fundamental Rights'],
  summary:
    'A 9-Judge Bench unanimously held that the right to privacy is a fundamental right protected under Articles 14, 19 and 21, overruling the contrary observations in M.P. Sharma and Kharak Singh to that extent.',
  facts: [
    'Challenges to the Aadhaar scheme raised the question whether privacy is a fundamental right.',
    'A larger Bench was constituted to settle conflicting views on the status of privacy under the Constitution.',
  ],
  issues: [
    'Whether the right to privacy is a fundamental right under the Constitution of India.',
  ],
  arguments: {
    appellant: [
      'Privacy is intrinsic to life, liberty and dignity under Article 21 and is essential to the exercise of other freedoms.',
    ],
    respondent: [
      'Privacy is not enumerated as a fundamental right; legitimate state interests in welfare and security may regulate personal data.',
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
      topicId: 'art-21',
    },
  ],
  reasoning: [
    {
      heading: 'Privacy as a fundamental right',
      explanation:
        'Privacy is not a mere common-law right; it is protected under the Constitution as an intrinsic part of life and liberty and as a facet of dignity.',
    },
    {
      heading: 'Overruling contrary precedent',
      explanation:
        'Observations in M.P. Sharma and Kharak Singh denying a fundamental right to privacy were overruled to that extent.',
    },
  ],
  decision:
    'Privacy is a fundamental right. Any invasion must satisfy legality, legitimate aim, and proportionality. The Aadhaar challenges proceeded on this constitutional foundation.',
  holding:
    'The right to privacy is a fundamental right under Articles 14, 19 and 21 of the Constitution.',
  ratioDecidendi:
    'Privacy is intrinsic to life, liberty and dignity; state intrusion into privacy must be backed by law, pursue a legitimate aim, and be proportionate.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
  ],
  examPoints: [
    '9-Judge Bench; privacy is a fundamental right.',
    'Overruled M.P. Sharma / Kharak Singh on privacy denial.',
    'Proportionality standard for state intrusion.',
  ],
  mcqs: [
    {
      id: 'puttaswamy-mcq-1',
      question: 'Puttaswamy (2017) held that the right to privacy is:',
      options: ['Only a statutory right', 'A fundamental right under the Constitution', 'Not recognized in India', 'Limited to telephone tapping cases'],
      correctIndex: 1,
      explanation: 'The 9-Judge Bench held that privacy is a fundamental right protected under Articles 14, 19 and 21.',
    },
  ],
  source: { type: 'document', title: 'Supreme Court Cases (2017) 10 SCC 1', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const LEGACY_BATCH_A: Judgment[] = [manekaGandhi, minervaMills, puttaswamy]
