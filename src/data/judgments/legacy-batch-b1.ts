import type { Judgment } from './types'

export const lalitaKumari: Judgment = {
  id: 'lalita-kumari-2013',
  caseName: 'Lalita Kumari v. Government of Uttar Pradesh',
  shortName: 'Lalita Kumari',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law & Procedure',
  year: 2014,
  citation: '(2014) 2 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: ['P. Sathasivam, C.J.', 'B.S. Chauhan, J.', 'Ranjana Prakash Desai, J.', 'Ranjan Gogoi, J.', 'S.A. Bobde, J.'],
  subject: 'Criminal Procedure',
  topics: ['Mandatory FIR', 'Section 154 CrPC', 'Section 173 BNSS', 'Cognizable Offence'],
  tags: ['AIBE', 'Judiciary', 'FIR', 'Police', 'BNSS', 'Investigation'],
  summary:
    'A Constitution Bench held that registration of an FIR is mandatory under Section 154 CrPC if the information discloses a cognizable offence; no preliminary inquiry is permissible except in a narrowly defined set of cases.',
  facts: [
    'A minor girl went missing; the father alleged that the local police refused to register an FIR promptly.',
    'The petition under Article 32 sought directions on mandatory registration of FIRs in cognizable cases.',
    'Conflicting precedents on whether a preliminary inquiry could precede FIR registration were referred to a Constitution Bench.',
  ],
  issues: [
    'Whether a police officer is bound to register an FIR upon receiving information of a cognizable offence under Section 154 CrPC.',
    'Whether a preliminary inquiry is permissible before registration of an FIR, and if so in which categories of cases.',
  ],
  arguments: {
    appellant: [
      'Section 154 uses the word "shall"; registration of FIR is mandatory when cognizable offence is disclosed.',
      'Refusal or delay in registration facilitates destruction of evidence and denies access to justice.',
    ],
    respondent: [
      'Preliminary inquiry is sometimes necessary to filter false, civil, or frivolous complaints and protect the reputation of the accused.',
    ],
  },
  provisions: [
    {
      actId: 'crpc',
      actName: 'Code of Criminal Procedure, 1973',
      provisionId: 's-154',
      section: 'Section 154 CrPC',
      title: 'Information in cognizable cases',
      subjectSlug: 'bnss',
    },
  ],
  reasoning: [
    {
      heading: 'Mandatory registration',
      explanation:
        'The Court held that the language of Section 154 is mandatory. If the information discloses a cognizable offence, the police must register an FIR without conducting a preliminary inquiry.',
    },
    {
      heading: 'Limited exceptions',
      explanation:
        'Preliminary inquiry may be conducted only in limited categories such as matrimonial/family disputes, commercial offences, medical negligence, corruption cases, and abnormal delay in reporting, and must be completed within a short time.',
    },
  ],
  decision:
    'FIR registration is mandatory for cognizable offences. Preliminary inquiry is the exception, not the rule. The holding continues to guide practice under the corresponding BNSS provisions.',
  holding:
    'Police must register an FIR if information discloses a cognizable offence; preliminary inquiry is confined to specified exceptional categories.',
  ratioDecidendi:
    'Section 154 CrPC mandates FIR registration upon disclosure of a cognizable offence; withholding registration is illegal except in the limited inquiry categories recognized by the Court.',
  relatedCases: [
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Mandatory FIR for cognizable offences under Section 154 CrPC / corresponding BNSS section.',
    'Preliminary inquiry only in listed exceptional categories.',
    'Constitution Bench decision; high-yield for Judiciary and AIBE.',
  ],
  mcqs: [
    {
      id: 'lalita-mcq-1',
      question: 'Lalita Kumari held that when information discloses a cognizable offence, the police must:',
      options: [
        'Always conduct a preliminary inquiry first',
        'Register an FIR mandatorily',
        'Obtain Magistrate permission before FIR',
        'Refer the matter to a civil court',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench held that FIR registration is mandatory if a cognizable offence is disclosed; preliminary inquiry is only for limited exceptions.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2014) 2 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const dkBasu: Judgment = {
  id: 'dk-basu-1997',
  caseName: 'D.K. Basu v. State of West Bengal',
  shortName: 'D.K. Basu',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law & Procedure',
  year: 1997,
  citation: '(1997) 1 SCC 416',
  bench: '2-Judge Division Bench',
  judges: ['Kuldip Singh, J.', 'A.S. Anand, J.'],
  subject: 'Criminal Procedure',
  topics: ['Custodial Violence', 'Arrest Guidelines', 'Section 35 BNSS', 'Article 21 & 22'],
  tags: ['AIBE', 'Judiciary', 'Arrest', 'Custodial Torture', 'BNSS', 'Human Rights'],
  summary:
    'The Supreme Court laid down 11 mandatory guidelines to be observed by police and arresting agencies during arrest and detention to prevent custodial torture and uphold Articles 21 and 22(1).',
  facts: [
    'The Executive Chairman of Legal Aid Services, West Bengal, addressed a letter to the Chief Justice drawing attention to increasing deaths in police custody and lock-ups.',
    'The letter was treated as a Public Interest Litigation under Article 32.',
  ],
  issues: [
    'Whether custodial violence and custodial deaths violate Articles 21 and 22(1) of the Constitution.',
    'What preventive guidelines are required to safeguard arrestee rights in police custody.',
  ],
  arguments: {
    appellant: [
      'Custodial torture is a calculated assault on human dignity and a naked violation of Article 21.',
    ],
    respondent: [
      'Law enforcement agencies need adequate latitude to interrogate suspects and unearth organized crime.',
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
      heading: 'Arrest memo and transparency',
      explanation:
        'The Court required preparation of an arrest memo attested by a witness and countersigned by the arrestee, among other safeguards.',
    },
    {
      heading: 'Enforceability',
      explanation:
        'Failure to comply with the guidelines attracts departmental action and contempt of court.',
    },
  ],
  decision:
    'The 11 guidelines were made binding on all police and investigating authorities. They were later reflected in CrPC amendments and BNSS Sections 35–37.',
  holding:
    'Custodial torture violates Article 21. Mandatory arrest guidelines bind all arresting agencies.',
  ratioDecidendi:
    'An arrestee’s rights to dignity and bodily integrity under Articles 21 and 22 are enforced through mandatory procedural safeguards including arrest memo and medical examination.',
  relatedCases: [
    {
      caseName: 'Lalita Kumari v. Government of Uttar Pradesh',
      citation: '(2014) 2 SCC 1',
      relationship: 'Related',
      judgmentId: 'lalita-kumari-2013',
    },
  ],
  examPoints: [
    '11 mandatory arrest/detention guidelines.',
    'Codified in substance in CrPC 41A–41D / BNSS 35–37.',
    'Breach may amount to contempt.',
  ],
  mcqs: [
    {
      id: 'dk-basu-mcq-1',
      question: 'D.K. Basu is primarily associated with guidelines on:',
      options: ['Bail only', 'Arrest and custodial safeguards', 'Sentencing policy', 'Speedy trial timelines'],
      correctIndex: 1,
      explanation: 'D.K. Basu laid down mandatory guidelines to prevent custodial violence during arrest and detention.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1997) 1 SCC 416',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const LEGACY_BATCH_B1: Judgment[] = [lalitaKumari, dkBasu]
