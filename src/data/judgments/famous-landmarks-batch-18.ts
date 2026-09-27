import type { Judgment } from './types'

/** Batch 18 — missing high-yield only (inventory-first). */

export const velloreCitizens: Judgment = {
  id: 'vellore-citizens-1996',
  caseName: 'Vellore Citizens Welfare Forum v. Union of India',
  shortName: 'Vellore Citizens',
  court: 'Supreme Court of India',
  jurisdiction: 'Environmental Law',
  year: 1996,
  citation: '(1996) 5 SCC 647',
  bench: '3-Judge Bench',
  judges: ['Kuldip Singh, J.', 'Faizan Uddin, J.', 'K. Venkataswami, J.'],
  subject: 'Constitution',
  topics: ['Precautionary Principle', 'Polluter Pays', 'Article 21', 'Tanneries'],
  tags: ['AIBE', 'Judiciary', 'Environment', 'Article 21', 'PIL'],
  summary:
    'In a PIL against tanneries in Tamil Nadu polluting the Palar river, the Court applied the precautionary principle and the polluter-pays principle as part of Indian environmental law under Article 21, and directed remediation and industry compliance.',
  facts: [
    'Tanneries discharged untreated effluents into the Palar river basin, contaminating water and agricultural land.',
    'Vellore Citizens Welfare Forum filed a PIL seeking closure/regulation and environmental restoration.',
  ],
  issues: [
    'Whether precautionary and polluter-pays principles are part of Indian law.',
    'What directions should govern polluting industries and remediation.',
  ],
  arguments: {
    appellant: ['Industrial pollution violates the right to life and a healthy environment under Article 21.'],
    respondent: ['Industry needs time and support to install treatment plants.'],
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
      heading: 'Precautionary principle',
      explanation:
        'The Court held that the precautionary principle and the polluter-pays principle are essential features of sustainable development and are part of the law of the land.',
    },
    {
      heading: 'Remediation duty',
      explanation:
        'Polluters were directed to bear the cost of reversing environmental damage; authorities were ordered to enforce standards.',
    },
  ],
  decision:
    'Directions for pollution control, compensation, and monitoring were issued. Vellore is a leading authority on precautionary and polluter-pays principles in India.',
  holding:
    'Precautionary principle and polluter-pays principle are part of Indian environmental jurisprudence under Article 21.',
  ratioDecidendi:
    'Where industrial activity threatens irreversible environmental harm, precaution and polluter responsibility govern State and industry obligations as incidents of the right to life.',
  relatedCases: [
    {
      caseName: 'M.C. Mehta v. Union of India (Oleum Gas)',
      citation: '(1987) 1 SCC 395',
      relationship: 'Related (absolute liability / environment)',
      judgmentId: 'mc-mehta-oleum-1987',
    },
  ],
  examPoints: [
    'Precautionary principle + polluter pays.',
    'Tanneries / Palar river PIL.',
    'Article 21 environmental content.',
  ],
  mcqs: [
    {
      id: 'vellore-mcq-1',
      question: 'Vellore Citizens is authority for:',
      options: [
        'Abolishing all industry',
        'Precautionary and polluter-pays principles as part of Indian law',
        'Mandatory death penalty for polluters',
        'Only civil suits for pollution',
      ],
      correctIndex: 1,
      explanation: 'The Court treated both principles as part of the law of the land under the Article 21 environmental framework.',
    },
  ],
  source: { type: 'document', title: '(1996) 5 SCC 647', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const rudulSah: Judgment = {
  id: 'rudul-sah-1983',
  caseName: 'Rudul Sah v. State of Bihar',
  shortName: 'Rudul Sah',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1983,
  citation: '(1983) 4 SCC 141',
  bench: '2-Judge Bench',
  judges: ['Y.V. Chandrachud, C.J.', 'A. Varadarajan, J.'],
  subject: 'Constitution',
  topics: ['Illegal Detention', 'Article 21', 'Compensation', 'Habeas Corpus'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Compensation', 'Detention'],
  summary:
    'After a petitioner was kept in jail for years after acquittal, the Court ordered release and awarded compensation under Article 32, recognising monetary relief as a public-law remedy for violation of personal liberty.',
  facts: [
    'Rudul Sah remained incarcerated long after acquittal due to administrative failure.',
    'A habeas petition sought release and compensation.',
  ],
  issues: [
    'Whether compensation can be awarded under Article 32 for illegal detention.',
  ],
  arguments: {
    appellant: ['Continued detention after acquittal is a clear violation of Article 21; compensation must follow.'],
    respondent: ['Release is enough; damages belong to a civil suit.'],
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
      heading: 'Compensation as constitutional relief',
      explanation:
        'The Court held that in appropriate cases the Court may order compensation as an incident of enforcement of fundamental rights under Article 32.',
    },
  ],
  decision:
    'Release and compensation were ordered. Rudul Sah is an early landmark on constitutional compensation for illegal detention.',
  holding:
    'Illegal detention after acquittal violates Article 21; the Supreme Court may award compensation under Article 32.',
  ratioDecidendi:
    'Monetary compensation can be a public-law remedy for established violation of the right to personal liberty.',
  relatedCases: [
    {
      caseName: 'Nilabati Behera v. State of Orissa',
      citation: '(1993) 2 SCC 746',
      relationship: 'Developed',
      judgmentId: 'nilabati-behera-1993',
    },
  ],
  examPoints: [
    'Compensation under Article 32 for illegal detention.',
    'Precursor to Nilabati Behera constitutional tort line.',
  ],
  mcqs: [
    {
      id: 'rudul-mcq-1',
      question: 'Rudul Sah is known for:',
      options: [
        'Creating the collegium',
        'Awarding compensation for illegal post-acquittal detention under Article 32',
        'Striking down Article 21',
        'Abolishing habeas corpus',
      ],
      correctIndex: 1,
      explanation: 'The Court ordered compensation for prolonged illegal detention after acquittal.',
    },
  ],
  source: { type: 'document', title: '(1983) 4 SCC 141', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const sharadBirdhichand: Judgment = {
  id: 'sharad-birdhichand-1984',
  caseName: 'Sharad Birdhichand Sarda v. State of Maharashtra',
  shortName: 'Sharad Birdhichand Sarda',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law & Evidence',
  year: 1984,
  citation: '(1984) 4 SCC 116',
  bench: '3-Judge Bench',
  judges: ['S. Murtaza Fazal Ali, J.', 'A. Varadarajan, J.', 'Sabyasachi Mukharji, J.'],
  subject: 'Criminal Procedure',
  topics: ['Circumstantial Evidence', 'Last Seen', 'Section 3 Evidence Act', 'Murder'],
  tags: ['AIBE', 'Judiciary', 'Evidence', 'Circumstantial Evidence', 'BSA'],
  summary:
    'The Court restated the five golden principles for conviction on circumstantial evidence: the facts must be fully established, consistent only with guilt, conclusive, exclude every hypothesis of innocence, and form a complete chain leaving no reasonable doubt.',
  facts: [
    'The accused was convicted of murdering his wife largely on circumstantial evidence including last-seen and motive allegations.',
    'The Supreme Court re-examined whether the chain of circumstances met the legal standard for conviction.',
  ],
  issues: [
    'What is the standard for convicting solely on circumstantial evidence?',
  ],
  arguments: {
    appellant: ['Gaps in the chain of circumstances leave room for reasonable doubt.'],
    respondent: ['The cumulative circumstances conclusively point to guilt.'],
  },
  provisions: [
    {
      actId: 'bsa',
      actName: 'Bharatiya Sakshya Adhiniyam, 2023 / Evidence Act, 1872',
      provisionId: 'relevancy',
      title: 'Relevant facts / circumstantial evidence principles',
      subjectSlug: 'bsa',
    },
  ],
  reasoning: [
    {
      heading: 'Five golden principles',
      explanation:
        'The Court crystallised the classic tests for circumstantial-evidence convictions, requiring a complete chain inconsistent with innocence.',
    },
  ],
  decision:
    'The appeal was allowed on the facts; the doctrinal statement remains the standard citation for circumstantial evidence in India.',
  holding:
    'Conviction on circumstantial evidence requires a complete chain of facts consistent only with guilt and excluding reasonable hypotheses of innocence.',
  ratioDecidendi:
    'Where the prosecution case is circumstantial, each link must be proved and the combined force of the circumstances must be incompatible with the innocence of the accused.',
  relatedCases: [],
  examPoints: [
    'Five golden principles of circumstantial evidence.',
    'High-yield evidence / criminal law crossover.',
  ],
  mcqs: [
    {
      id: 'sharad-mcq-1',
      question: 'Sharad Birdhichand Sarda is the leading case on:',
      options: [
        'Anticipatory bail',
        'Standards for conviction on circumstantial evidence',
        'Basic structure',
        'Newsprint control',
      ],
      correctIndex: 1,
      explanation: 'It laid down the five golden principles for circumstantial-evidence convictions.',
    },
  ],
  source: { type: 'document', title: '(1984) 4 SCC 116', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const kmNanavati: Judgment = {
  id: 'k-m-nanavati-1962',
  caseName: 'K.M. Nanavati v. State of Maharashtra',
  shortName: 'K.M. Nanavati',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law',
  year: 1962,
  citation: 'AIR 1962 SC 605',
  bench: '3-Judge Bench',
  judges: ['K. Subba Rao, J.', 'S.K. Das, J.', 'Raghubar Dayal, J.'],
  subject: 'Criminal Law',
  topics: ['Grave and Sudden Provocation', 'Exception 1 to Section 300 IPC', 'Jury', 'Murder'],
  tags: ['AIBE', 'Judiciary', 'Murder', 'Provocation', 'IPC/BNS'],
  summary:
    'The Court examined the defence of grave and sudden provocation in a high-profile homicide, clarifying that provocation must be such as would deprive a reasonable person of self-control and that the response must be traced to the provocation without cooling time.',
  facts: [
    'Naval officer K.M. Nanavati shot Prem Ahuja after learning of an affair involving his wife.',
    'Issues of jury trial, gubernatorial suspension of sentence, and the provocation exception arose in the appellate history.',
  ],
  issues: [
    'Whether the killing fell within Exception 1 to Section 300 IPC (grave and sudden provocation).',
  ],
  arguments: {
    appellant: ['Discovery of adultery caused grave and sudden provocation reducing murder to culpable homicide.'],
    respondent: ['There was cooling time and deliberate shooting; the exception does not apply.'],
  },
  provisions: [
    {
      actId: 'bns',
      actName: 'BNS / IPC (historical)',
      provisionId: 'murder-exceptions',
      section: 'Exception 1 to Section 300 IPC (provocation)',
      title: 'Grave and sudden provocation',
      subjectSlug: 'bns',
    },
  ],
  reasoning: [
    {
      heading: 'Reasonable person test',
      explanation:
        'Provocation is judged by whether a reasonable person in the accused’s situation would lose self-control; mere anger after an interval is insufficient.',
    },
  ],
  decision:
    'The conviction trajectory and the doctrinal discussion of provocation make Nanavati a standard citation on Exception 1 to Section 300 IPC (and corresponding BNS homicide exceptions).',
  holding:
    'Grave and sudden provocation requires loss of self-control from the provocation itself without fatal cooling time; the test is objective in its reasonableness standard.',
  ratioDecidendi:
    'Exception 1 to Section 300 applies only when provocation is grave and sudden and the act is committed while deprived of self-control, not after time for passion to cool.',
  relatedCases: [],
  examPoints: [
    'Grave and sudden provocation elements.',
    'Cooling time defeats the exception.',
    'Classic criminal law exam case.',
  ],
  mcqs: [
    {
      id: 'nanavati-mcq-1',
      question: 'K.M. Nanavati is primarily studied for:',
      options: [
        'Collegium system',
        'Grave and sudden provocation under the murder exceptions',
        'Environmental absolute liability',
        'Anti-defection',
      ],
      correctIndex: 1,
      explanation: 'It is the classic authority on the scope of grave and sudden provocation.',
    },
  ],
  source: { type: 'document', title: 'AIR 1962 SC 605', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const puclTelephone: Judgment = {
  id: 'pucl-telephone-1997',
  caseName: 'People\'s Union for Civil Liberties v. Union of India',
  shortName: 'PUCL (Telephone Tapping)',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1997,
  citation: '(1997) 1 SCC 301',
  bench: '2-Judge Bench',
  judges: ['Kuldip Singh, J.', 'S. Saghir Ahmad, J.'],
  subject: 'Constitution',
  topics: ['Telephone Tapping', 'Privacy', 'Article 21', 'Article 19', 'Section 5(2) Telegraph Act'],
  tags: ['AIBE', 'Judiciary', 'Privacy', 'Surveillance', 'Article 21'],
  summary:
    'The Court held that telephone tapping infringes the right to privacy under Article 21 and freedom of speech under Article 19(1)(a) unless conducted under a fair, just and reasonable procedure; detailed procedural safeguards were read into Section 5(2) of the Telegraph Act.',
  facts: [
    'PUCL challenged unchecked telephone interception under the Indian Telegraph Act.',
    'The absence of adequate procedural safeguards was central to the challenge.',
  ],
  issues: [
    'Whether telephone tapping violates Articles 19 and 21.',
    'What safeguards must govern lawful interception.',
  ],
  arguments: {
    appellant: ['Unregulated tapping enables surveillance incompatible with privacy and free speech.'],
    respondent: ['National security and public order require interception powers.'],
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
      heading: 'Privacy and speech',
      explanation:
        'The Court held that conversations on the telephone are part of a person’s private life and that tapping without just procedure violates Articles 21 and 19(1)(a).',
    },
    {
      heading: 'Procedural safeguards',
      explanation:
        'Guidelines were issued on authorisation, duration, review, and record-keeping for lawful interception under Section 5(2).',
    },
  ],
  decision:
    'Safeguards were mandated. The case is a major pre-Puttaswamy privacy authority on surveillance.',
  holding:
    'Telephone tapping without fair, just and reasonable procedure violates Articles 21 and 19(1)(a); statutory interception power must operate under strict safeguards.',
  ratioDecidendi:
    'State interception of private communication is a serious invasion of privacy and speech and is constitutional only under a narrowly channelled, reviewable procedure.',
  relatedCases: [
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Developed',
      judgmentId: 'puttaswamy-2017',
    },
    {
      caseName: 'R. Rajagopal v. State of Tamil Nadu',
      citation: '(1994) 6 SCC 632',
      relationship: 'Related (privacy)',
      judgmentId: 'r-rajagopal-1994',
    },
  ],
  examPoints: [
    'Telephone tapping and privacy.',
    'Safeguards under Telegraph Act s. 5(2).',
    'Pre-Puttaswamy privacy jurisprudence.',
  ],
  mcqs: [
    {
      id: 'pucl-tel-mcq-1',
      question: 'PUCL (Telephone Tapping) held that unregulated tapping violates:',
      options: [
        'Only Directive Principles',
        'Articles 21 and 19(1)(a) unless fair procedure and safeguards exist',
        'Only State List entries',
        'Nothing — tapping is always free',
      ],
      correctIndex: 1,
      explanation: 'The Court required fair procedure and issued safeguards for lawful interception.',
    },
  ],
  source: { type: 'document', title: '(1997) 1 SCC 301', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const excelWear: Judgment = {
  id: 'excel-wear-1978',
  caseName: 'Excel Wear v. Union of India',
  shortName: 'Excel Wear',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional / Labour Law',
  year: 1978,
  citation: '(1978) 4 SCC 224',
  bench: '5-Judge Constitution Bench',
  judges: [
    'N.L. Untwalia, J.',
    'V.R. Krishna Iyer, J.',
    'P.S. Kailasam, J.',
    'D.A. Desai, J.',
    'A.D. Koshal, J.',
  ],
  subject: 'Labour',
  topics: ['Closure of Undertaking', 'Article 19(1)(g)', 'Industrial Disputes Act'],
  tags: ['AIBE', 'Judiciary', 'Labour', 'Closure', 'Article 19'],
  summary:
    'The Court struck down provisions of the Industrial Disputes Act that made prior government permission a rigid precondition for closure of an undertaking in a manner that destroyed the right to carry on business under Article 19(1)(g), while recognising that reasonable regulation of closure remains permissible.',
  facts: [
    'Employers challenged statutory restrictions requiring government permission for closure of industrial undertakings.',
    'The balance between workers’ protection and employers’ freedom of business was in issue.',
  ],
  issues: [
    'Whether mandatory prior permission for closure violates Article 19(1)(g).',
  ],
  arguments: {
    appellant: ['Forcing a loss-making business to continue is an unreasonable restriction on freedom of trade.'],
    respondent: ['Permission regime protects workers from sudden unemployment.'],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(g)',
      title: 'Freedom to practise any profession or to carry on any occupation',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Unreasonable restriction on closure',
      explanation:
        'The Court held that an absolute or unduly rigid permission requirement that effectively compels continuation of business can be an unreasonable restriction on Article 19(1)(g).',
    },
  ],
  decision:
    'Impugned closure-permission provisions were invalidated to the extent of unconstitutionality. Later amendments recalibrated the regime; Excel Wear remains a key citation on closure and Article 19(1)(g).',
  holding:
    'Statutory rules that unreasonably prevent closure of an undertaking can violate Article 19(1)(g).',
  ratioDecidendi:
    'The right to carry on business includes the right not to carry it on; restrictions on closure must be reasonable under Article 19(6).',
  relatedCases: [],
  examPoints: [
    'Closure vs Article 19(1)(g).',
    'Industrial Disputes Act permission regime.',
    'Labour + constitutional law crossover.',
  ],
  mcqs: [
    {
      id: 'excel-mcq-1',
      question: 'Excel Wear is authority on:',
      options: [
        'Death penalty',
        'Constitutional limits on restrictions on closure of industrial undertakings',
        'Telephone tapping',
        'Newsprint control',
      ],
      correctIndex: 1,
      explanation: 'The Court examined when closure-permission rules violate Article 19(1)(g).',
    },
  ],
  source: { type: 'document', title: '(1978) 4 SCC 224', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const airIndiaNergesh: Judgment = {
  id: 'air-india-nergesh-1981',
  caseName: 'Air India v. Nergesh Meerza',
  shortName: 'Nergesh Meerza',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional / Service Law',
  year: 1981,
  citation: '(1981) 4 SCC 335',
  bench: '3-Judge Bench',
  judges: ['S. Murtaza Fazal Ali, J.', 'A. Varadarajan, J.', 'A.N. Sen, J.'],
  subject: 'Constitution',
  topics: ['Gender Discrimination', 'Article 14', 'Article 15', 'Service Conditions', 'Air Hostesses'],
  tags: ['AIBE', 'Judiciary', 'Gender', 'Equality', 'Service Law'],
  summary:
    'The Court struck down discriminatory service conditions for air hostesses that terminated employment on first pregnancy and imposed other gender-biased bar rules, while upholding certain age/retirement differentials that were then held to rest on intelligible differentia — a decision often contrasted with later equality jurisprudence.',
  facts: [
    'Air hostesses challenged Regulations providing for termination on marriage/pregnancy and unequal retirement ages compared to male cabin crew.',
  ],
  issues: [
    'Whether pregnancy-based termination and related service rules violate Articles 14 and 15.',
  ],
  arguments: {
    appellant: ['Gendered termination rules are arbitrary and discriminatory.'],
    respondent: ['Operational and physiological considerations justify separate cadres and conditions.'],
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
  ],
  reasoning: [
    {
      heading: 'Pregnancy termination clause',
      explanation:
        'Termination on first pregnancy was held unreasonable and arbitrary, violating Article 14.',
    },
  ],
  decision:
    'Pregnancy-based termination was struck down. The case is a standard citation on gender discrimination in service conditions.',
  holding:
    'Service rules terminating employment on first pregnancy are unconstitutional as arbitrary and discriminatory under Article 14.',
  ratioDecidendi:
    'Gendered employment conditions that penalise pregnancy without a rational nexus to legitimate service needs violate equality.',
  relatedCases: [],
  examPoints: [
    'Pregnancy termination clause struck down.',
    'Article 14 in service conditions.',
    'Gender discrimination classic.',
  ],
  mcqs: [
    {
      id: 'nergesh-mcq-1',
      question: 'Air India v. Nergesh Meerza struck down rules that:',
      options: [
        'Allowed equal pay',
        'Terminated air hostesses’ service on first pregnancy',
        'Created the collegium',
        'Banned all aviation',
      ],
      correctIndex: 1,
      explanation: 'Pregnancy-based termination was held arbitrary under Article 14.',
    },
  ],
  source: { type: 'document', title: '(1981) 4 SCC 335', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const municipalRatlam: Judgment = {
  id: 'municipal-council-ratlam-1980',
  caseName: 'Municipal Council, Ratlam v. Vardichan',
  shortName: 'Ratlam Municipality',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional / Local Government',
  year: 1980,
  citation: '(1980) 4 SCC 162',
  bench: '2-Judge Bench',
  judges: ['V.R. Krishna Iyer, J.', 'O. Chinnappa Reddy, J.'],
  subject: 'Constitution',
  topics: ['Public Nuisance', 'Section 133 CrPC', 'Municipal Duties', 'Article 21'],
  tags: ['AIBE', 'Judiciary', 'Environment', 'Municipal Law', 'PIL'],
  summary:
    'The Court directed a municipality to construct drains and abate public nuisance, holding that statutory municipal duties and Section 133 CrPC powers must be used to protect public health; poverty of the local body is no excuse for neglecting basic sanitation.',
  facts: [
    'Residents of Ratlam suffered open drains, stench, and mosquito breeding; the municipality pleaded lack of funds.',
    'Magisterial orders under Section 133 CrPC and appellate issues reached the Supreme Court.',
  ],
  issues: [
    'Whether a municipality can avoid sanitation duties for want of funds.',
    'What is the role of Section 133 CrPC in abating public nuisance?',
  ],
  arguments: {
    appellant: ['Financial constraints prevent immediate civil works.'],
    respondent: ['Public health duties are mandatory; nuisance must be abated.'],
  },
  provisions: [
    {
      actId: 'bnss',
      actName: 'BNSS / CrPC',
      provisionId: 'public-nuisance',
      section: 'Section 133 CrPC (public nuisance)',
      title: 'Conditional order for removal of nuisance',
      subjectSlug: 'bnss',
    },
  ],
  reasoning: [
    {
      heading: 'Duty over plea of poverty',
      explanation:
        'The Court held that municipalities cannot plead poverty to justify open drains and public health hazards; affirmative action is required.',
    },
  ],
  decision:
    'Directions to construct sanitation works were affirmed. Ratlam is a landmark on municipal accountability and public nuisance.',
  holding:
    'Municipal bodies must abate public nuisance and provide basic sanitation; lack of funds is not a defence to statutory public-health duties.',
  ratioDecidendi:
    'Public nuisance powers and municipal obligations exist to protect community health; courts may compel performance of those duties.',
  relatedCases: [],
  examPoints: [
    'Section 133 CrPC public nuisance.',
    'Municipality cannot plead poverty.',
    'Sanitation as public law duty.',
  ],
  mcqs: [
    {
      id: 'ratlam-mcq-1',
      question: 'Municipal Council, Ratlam held that:',
      options: [
        'Municipalities may ignore drains if poor',
        'Lack of funds is no excuse for failing basic sanitation and abating public nuisance',
        'Only the Union can build drains',
        'Section 133 CrPC is unconstitutional',
      ],
      correctIndex: 1,
      explanation: 'The Court compelled municipal sanitation works despite a plea of poverty.',
    },
  ],
  source: { type: 'document', title: '(1980) 4 SCC 162', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const pudr: Judgment = {
  id: 'peoples-union-democratic-rights-1982',
  caseName: 'People\'s Union for Democratic Rights v. Union of India',
  shortName: 'PUDR / Asiad Workers',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional / Labour',
  year: 1982,
  citation: '(1982) 3 SCC 235',
  bench: '3-Judge Bench',
  judges: ['P.N. Bhagwati, J.', 'Baharul Islam, J.', 'O. Chinnappa Reddy, J.'],
  subject: 'Constitution',
  topics: ['Forced Labour', 'Article 23', 'Minimum Wages', 'PIL', 'Contract Labour'],
  tags: ['AIBE', 'Judiciary', 'Labour', 'Article 23', 'PIL'],
  summary:
    'In the Asiad workers case, the Court held that non-payment of minimum wages amounts to forced labour under Article 23, expanded PIL standing for organisations, and directed enforcement of labour welfare statutes for contract workers on public projects.',
  facts: [
    'Workers employed on Asiad construction projects were alleged to be denied minimum wages and statutory benefits through contractors.',
    'PUDR approached the Court by letter petition treated as a writ.',
  ],
  issues: [
    'Whether payment below minimum wage constitutes forced labour under Article 23.',
    'Whether an organisation has standing to enforce labour rights of workers.',
  ],
  arguments: {
    appellant: ['Underpayment and contractor devices violate Article 23 and labour laws.'],
    respondent: ['Principal employers are not liable for contractor defaults in the manner alleged.'],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-23',
      article: 'Article 23',
      title: 'Prohibition of traffic in human beings and forced labour',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Forced labour expanded',
      explanation:
        'The Court held that labour extracted for less than the minimum wage is forced labour within Article 23, because economic compulsion negates free consent.',
    },
    {
      heading: 'PIL standing',
      explanation:
        'Public-spirited organisations may move the Court on behalf of exploited workers who cannot approach the Court themselves.',
    },
  ],
  decision:
    'Directions for enforcement of labour laws were issued. PUDR is foundational for Article 23 and labour PIL.',
  holding:
    'Non-payment of minimum wages constitutes forced labour under Article 23; PIL may enforce labour rights of vulnerable workers.',
  ratioDecidendi:
    'Article 23 reaches not only physical compulsion but also economic compulsion that extracts labour below the statutory minimum wage.',
  relatedCases: [
    {
      caseName: 'Bandhua Mukti Morcha v. Union of India',
      citation: '(1984) 3 SCC 161',
      relationship: 'Related (bonded/forced labour)',
      judgmentId: 'bandhua-mukti-morcha-1984',
    },
  ],
  examPoints: [
    'Minimum wage denial = forced labour (Art. 23).',
    'Asiad workers PIL.',
    'Expanded standing for labour rights.',
  ],
  mcqs: [
    {
      id: 'pudr-mcq-1',
      question: 'PUDR (Asiad Workers) held that payment below minimum wage:',
      options: [
        'Is always lawful',
        'Amounts to forced labour under Article 23',
        'Is only a civil dispute with no constitutional angle',
        'Applies only to government servants',
      ],
      correctIndex: 1,
      explanation: 'The Court treated underpayment of minimum wages as forced labour under Article 23.',
    },
  ],
  source: { type: 'document', title: '(1982) 3 SCC 235', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const indianCouncilEnviro: Judgment = {
  id: 'indian-council-enviro-1996',
  caseName: 'Indian Council for Enviro-Legal Action v. Union of India',
  shortName: 'Indian Council for Enviro-Legal Action',
  court: 'Supreme Court of India',
  jurisdiction: 'Environmental Law',
  year: 1996,
  citation: '(1996) 3 SCC 212',
  bench: '3-Judge Bench',
  judges: ['J.S. Verma, J.', 'B.N. Kirpal, J.', 'S.P. Bharucha, J.'],
  subject: 'Constitution',
  topics: ['Polluter Pays', 'Absolute Liability', 'Hazardous Industry', 'Article 21'],
  tags: ['AIBE', 'Judiciary', 'Environment', 'Polluter Pays', 'Absolute Liability'],
  summary:
    'In a case concerning chemical industries in Rajasthan that polluted soil and groundwater, the Court applied absolute liability and the polluter-pays principle, directing remediation costs to be borne by the polluting industries.',
  facts: [
    'Chemical plants produced toxic wastes (including H-acid) that contaminated village lands and water sources in Rajasthan.',
    'Environmental groups sought cleanup and accountability of the industries and regulators.',
  ],
  issues: [
    'Who must bear the cost of remedying pollution from hazardous industries?',
    'What liability standard applies?',
  ],
  arguments: {
    appellant: ['Polluters must restore the environment and compensate affected communities.'],
    respondent: ['Liability and cleanup responsibility were contested among units and authorities.'],
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
      heading: 'Polluter pays and absolute liability',
      explanation:
        'Building on M.C. Mehta (Oleum Gas), the Court held that enterprises engaged in hazardous activities must bear the cost of preventing and remedying pollution without shifting the burden to the public.',
    },
  ],
  decision:
    'Polluting industries were held liable for remediation costs. The case is a core citation with Vellore on polluter-pays.',
  holding:
    'Hazardous industries are absolutely liable for environmental harm and must pay for remediation under the polluter-pays principle.',
  ratioDecidendi:
    'The cost of pollution caused by hazardous industrial activity must be internalised by the enterprise; the public and the State are not to subsidise cleanup of private industrial harm.',
  relatedCases: [
    {
      caseName: 'M.C. Mehta v. Union of India (Oleum Gas)',
      citation: '(1987) 1 SCC 395',
      relationship: 'Applied',
      judgmentId: 'mc-mehta-oleum-1987',
    },
    {
      caseName: 'Vellore Citizens Welfare Forum v. Union of India',
      citation: '(1996) 5 SCC 647',
      relationship: 'Related',
      judgmentId: 'vellore-citizens-1996',
    },
  ],
  examPoints: [
    'Polluter pays + absolute liability for hazardous units.',
    'Remediation cost on industry.',
    'Pair with Oleum Gas and Vellore.',
  ],
  mcqs: [
    {
      id: 'icel-mcq-1',
      question: 'Indian Council for Enviro-Legal Action primarily applied:',
      options: [
        'Only fault-based negligence with no cleanup duty',
        'Absolute liability and polluter-pays for hazardous industrial pollution',
        'Sovereign immunity for all factories',
        'Abolition of environmental regulation',
      ],
      correctIndex: 1,
      explanation: 'The Court required polluting hazardous industries to bear remediation costs under absolute liability / polluter-pays principles.',
    },
  ],
  source: { type: 'document', title: '(1996) 3 SCC 212', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_18: Judgment[] = [
  velloreCitizens,
  rudulSah,
  sharadBirdhichand,
  kmNanavati,
  puclTelephone,
  excelWear,
  airIndiaNergesh,
  municipalRatlam,
  pudr,
  indianCouncilEnviro,
]
