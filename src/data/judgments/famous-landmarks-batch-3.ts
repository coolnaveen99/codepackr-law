import type { Judgment } from './types'

/**
 * Famous landmarks batch 3 (AIBE / Judiciary).
 * DISPATCHER integrity: verified citations, ratio/obiter, no mark-band phrasing.
 */

export const indiraGandhiElection: Judgment = {
  id: 'indira-gandhi-election-1975',
  caseName: 'Indira Nehru Gandhi v. Raj Narain',
  shortName: 'Indira Gandhi Election Case',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1975,
  citation: '(1975) Supp SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'A.N. Ray, C.J.',
    'H.R. Khanna, J.',
    'K.K. Mathew, J.',
    'M.H. Beg, J.',
    'Y.V. Chandrachud, J.',
  ],
  subject: 'Constitution',
  topics: ['Basic Structure', 'Free and Fair Elections', 'Article 329', '39th Amendment'],
  tags: ['AIBE', 'Judiciary', 'Basic Structure', 'Elections', 'Emergency Era'],
  summary:
    'The Court applied the basic structure doctrine to invalidate clause (4) of Article 329A (inserted by the 39th Amendment), which sought to place the election of the Prime Minister and Speaker beyond judicial review. Free and fair elections were treated as part of the basic structure.',
  facts: [
    'Raj Narain challenged Indira Gandhi’s 1971 Lok Sabha election from Rae Bareli on grounds of electoral malpractice.',
    'The Allahabad High Court set aside the election; an appeal reached the Supreme Court.',
    'During the litigation, the 39th Constitutional Amendment inserted Article 329A to immunise the election of the Prime Minister (and certain other offices) from judicial scrutiny.',
  ],
  issues: [
    'Whether Article 329A(4) destroying judicial review of the Prime Minister’s election violates the basic structure.',
    'Whether free and fair elections form part of the basic structure of the Constitution.',
  ],
  arguments: {
    appellant: [
      'Parliament under Article 368 could validate the election and exclude judicial review of disputes relating to the Prime Minister’s election.',
      'Constituent power includes the power to create a separate forum and to cure electoral defects retrospectively.',
    ],
    respondent: [
      'Exclusion of judicial review and validation of a void election destroy free and fair elections and equality, which are basic features.',
      'Democracy cannot survive if the election of the highest political executive is placed beyond the Constitution.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-329a',
      article: 'Article 329A (as inserted by 39th Amendment)',
      title: 'Special provision as to elections to Parliament in the case of Prime Minister and Speaker',
      subjectSlug: 'constitution',
    },
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
      heading: 'Basic structure applied to electoral immunity',
      explanation:
        'The Court held that a constitutional amendment that destroys judicial review of the election of the Prime Minister and validates an election without applying the election law violates the basic structure.',
    },
    {
      heading: 'Free and fair elections',
      explanation:
        'Democracy and free and fair elections were treated as essential features; placing the election of the political executive beyond all legal norms was held unconstitutional.',
    },
  ],
  decision:
    'Article 329A(4) (and related validating provisions of the 39th Amendment to that extent) were struck down. The election dispute was resolved on the merits under the Representation of the People Act; the case remains a leading application of basic structure to electoral democracy.',
  holding:
    'A constitutional amendment that abolishes judicial review of the Prime Minister’s election and validates a void election destroys free and fair elections and is void as violative of the basic structure.',
  ratioDecidendi:
    'Free and fair elections and judicial review in electoral matters form part of the basic structure; Parliament cannot use Article 368 to place the election of the Prime Minister beyond the Constitution.',
  relatedCases: [
    {
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      relationship: 'Applied',
      judgmentId: 'kesavananda-bharati-1973',
    },
    {
      caseName: 'Minerva Mills Ltd. v. Union of India',
      citation: '(1980) 3 SCC 625',
      relationship: 'Related',
      judgmentId: 'minerva-mills-1980',
    },
  ],
  examPoints: [
    'First major application of basic structure after Kesavananda to strike down a constitutional amendment.',
    'Free and fair elections = basic feature.',
    'Article 329A(4) via 39th Amendment struck down.',
    'High-yield Emergency-era constitutional law case.',
  ],
  mcqs: [
    {
      id: 'indira-election-mcq-1',
      question: 'Indira Nehru Gandhi v. Raj Narain is important because the Court held that:',
      options: [
        'Emergency proclamations are never justiciable',
        'Free and fair elections are part of the basic structure',
        'Article 356 is immune from judicial review',
        'Directive Principles override all fundamental rights',
      ],
      correctIndex: 1,
      explanation:
        'The Court struck down the 39th Amendment’s attempt to immunise the Prime Minister’s election from judicial review, treating free and fair elections as part of the basic structure.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1975) Supp SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const hussainaraKhatoon: Judgment = {
  id: 'hussainara-khatoon-1979',
  caseName: 'Hussainara Khatoon v. State of Bihar',
  shortName: 'Hussainara Khatoon',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law & Criminal Procedure',
  year: 1979,
  citation: '(1980) 1 SCC 81',
  bench: '2-Judge Bench',
  judges: ['P.N. Bhagwati, J.', 'D.A. Desai, J.'],
  subject: 'Criminal Procedure',
  topics: ['Speedy Trial', 'Article 21', 'Undertrials', 'Legal Aid'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Speedy Trial', 'Bail', 'Legal Aid'],
  summary:
    'In a series of orders arising from undertrial prisoners in Bihar, the Court held that speedy trial is an essential part of the right to life and personal liberty under Article 21, and directed release and systemic reforms for undertrials detained beyond reasonable periods.',
  facts: [
    'A newspaper exposé revealed that a large number of undertrial prisoners in Bihar jails had been detained for periods longer than the maximum sentence imposable for the offences charged.',
    'A writ petition was filed drawing the Court’s attention to prolonged pre-trial detention and denial of legal aid.',
  ],
  issues: [
    'Whether prolonged pre-trial detention of undertrials violates Article 21.',
    'Whether the right to speedy trial and free legal aid are components of personal liberty.',
  ],
  arguments: {
    appellant: [
      'Detention of undertrials for years without trial is a denial of liberty and equality and violates Article 21.',
      'The State must provide free legal services to ensure meaningful access to justice.',
    ],
    respondent: [
      'Systemic delays were attributed to resource constraints and case backlog in the criminal justice system.',
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
      heading: 'Speedy trial as part of Article 21',
      explanation:
        'The Court held that a procedure which keeps an undertrial in jail for long periods without trial cannot be regarded as reasonable, fair or just, and therefore violates Article 21.',
    },
    {
      heading: 'Legal aid and undertrial release',
      explanation:
        'Free legal services were treated as an essential ingredient of reasonable, fair and just procedure. Undertrials detained beyond the maximum possible sentence were directed to be released.',
    },
  ],
  decision:
    'The Court issued continuing directions for release of undertrials, investigation into prolonged detention, and strengthening of legal aid. The case is a foundational authority on speedy trial and undertrial rights under Article 21.',
  holding:
    'Speedy trial is an integral part of the fundamental right to life and personal liberty under Article 21; prolonged pre-trial detention without trial is unconstitutional.',
  ratioDecidendi:
    'A criminal procedure that results in indefinite pre-trial incarceration is not fair, just or reasonable under Article 21; the State must ensure speedy trial and legal aid.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'A.R. Antulay v. R.S. Nayak',
      citation: '(1992) 1 SCC 225',
      relationship: 'Followed / Developed',
    },
  ],
  examPoints: [
    'Speedy trial = part of Article 21.',
    'Undertrials detained longer than maximum sentence must be released.',
    'Free legal aid linked to fair procedure.',
    'Classic PIL expanding socio-legal dimensions of Article 21.',
  ],
  mcqs: [
    {
      id: 'hussainara-mcq-1',
      question: 'Hussainara Khatoon is primarily authority for which proposition?',
      options: [
        'Death penalty is mandatory for all murders',
        'Speedy trial is part of Article 21',
        'Article 356 is non-justiciable',
        'Triple talaq is valid',
      ],
      correctIndex: 1,
      explanation:
        'The Court held that speedy trial is an essential part of the right to life and personal liberty under Article 21.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1980) 1 SCC 81',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const mcMehtaOleum: Judgment = {
  id: 'mc-mehta-oleum-1987',
  caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak)',
  shortName: 'M.C. Mehta (Oleum Gas)',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law & Environmental Law',
  year: 1987,
  citation: '(1987) 1 SCC 395',
  bench: '3-Judge Bench',
  judges: ['P.N. Bhagwati, C.J.', 'Ranganath Misra, J.', 'G.L. Oza, J.'],
  subject: 'Constitution',
  topics: ['Absolute Liability', 'Article 21', 'Hazardous Industry', 'Environment'],
  tags: ['AIBE', 'Judiciary', 'Environment', 'Absolute Liability', 'Article 21', 'Torts'],
  summary:
    'After the oleum gas leak from Shriram Foods and Fertilisers in Delhi, the Court evolved the principle of absolute liability for enterprises engaged in hazardous or inherently dangerous activities, going beyond the exceptions recognised in Rylands v. Fletcher.',
  facts: [
    'Oleum gas leaked from a unit of Shriram in Delhi, causing harm to the public and raising questions of industrial safety and compensation.',
    'The episode occurred in the shadow of the Bhopal gas tragedy and prompted constitutional litigation on hazardous industry and the right to life.',
  ],
  issues: [
    'What is the measure of liability of an enterprise engaged in hazardous or inherently dangerous activity for harm resulting from an accident?',
    'Whether English rule of strict liability with exceptions adequately protects constitutional values under Article 21.',
  ],
  arguments: {
    appellant: [
      'Hazardous industries that profit from dangerous activities must bear the cost of harm without sheltering behind common-law exceptions.',
      'Article 21 requires a higher standard of industrial safety and victim compensation in India.',
    ],
    respondent: [
      'Liability should be governed by established tort principles including defences available under strict liability.',
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
      heading: 'Absolute liability principle',
      explanation:
        'The Court held that an enterprise engaged in a hazardous or inherently dangerous activity owes an absolute and non-delegable duty to the community; if harm results, the enterprise is absolutely liable to compensate, without the exceptions of Rylands v. Fletcher.',
    },
    {
      heading: 'Deep pockets and enterprise cost',
      explanation:
        'The measure of compensation must be correlated to the magnitude and capacity of the enterprise to ensure that the cost of accidents is internalised by the hazardous industry.',
    },
  ],
  decision:
    'Absolute liability was declared as the governing rule for hazardous industries in India. The judgment is a cornerstone of Indian environmental and industrial-safety jurisprudence under Article 21.',
  holding:
    'Enterprises engaged in hazardous or inherently dangerous activities are absolutely liable for harm caused by accidents; common-law exceptions to strict liability do not apply.',
  ratioDecidendi:
    'Where an enterprise is engaged in a hazardous or inherently dangerous activity and harm results, it is strictly and absolutely liable to compensate all those affected; such liability is non-delegable and not subject to the exceptions in Rylands v. Fletcher.',
  relatedCases: [
    {
      caseName: 'Rylands v. Fletcher',
      citation: '(1868) LR 3 HL 330',
      relationship: 'Distinguished / Expanded beyond',
    },
    {
      caseName: 'Indian Council for Enviro-Legal Action v. Union of India',
      citation: '(1996) 3 SCC 212',
      relationship: 'Followed',
    },
  ],
  examPoints: [
    'Absolute liability (no Rylands exceptions) for hazardous industry.',
    'Non-delegable duty; compensation linked to enterprise capacity.',
    'Article 21 underpins environmental and industrial safety.',
    'Distinguish strict liability (English) vs absolute liability (Indian).',
  ],
  mcqs: [
    {
      id: 'mc-mehta-oleum-mcq-1',
      question: 'M.C. Mehta (Oleum Gas) is authority for which liability rule?',
      options: [
        'Only fault-based negligence',
        'Absolute liability for hazardous enterprises',
        'Sovereign immunity in all industrial accidents',
        'Liability only after criminal conviction',
      ],
      correctIndex: 1,
      explanation:
        'The Court evolved absolute liability for enterprises engaged in hazardous or inherently dangerous activities, without the exceptions of Rylands v. Fletcher.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1987) 1 SCC 395',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const josephShine: Judgment = {
  id: 'joseph-shine-2018',
  caseName: 'Joseph Shine v. Union of India',
  shortName: 'Joseph Shine',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2018,
  citation: '(2019) 3 SCC 39',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Dipak Misra, C.J.',
    'R.F. Nariman, J.',
    'A.M. Khanwilkar, J.',
    'D.Y. Chandrachud, J.',
    'Indu Malhotra, J.',
  ],
  subject: 'Constitution',
  topics: ['Adultery', 'Section 497 IPC', 'Article 14', 'Article 15', 'Article 21'],
  tags: ['AIBE', 'Judiciary', 'Gender', 'Equality', 'IPC', 'Privacy'],
  summary:
    'A Constitution Bench struck down Section 497 IPC (adultery) and the related procedural provision in Section 198(2) CrPC as unconstitutional, holding that the colonial offence treated women as property of husbands and violated Articles 14, 15 and 21.',
  facts: [
    'A writ petition under Article 32 challenged the constitutional validity of Section 497 IPC, which criminalised adultery in a manner that only the man could be an offender and only the husband was an aggrieved person.',
    'The petition argued that the provision was archaic, gendered, and inconsistent with equality and dignity.',
  ],
  issues: [
    'Whether Section 497 IPC violates Articles 14, 15 and 21.',
    'Whether criminalisation of adultery as framed under Section 497 is a valid restriction on personal liberty and equality.',
  ],
  arguments: {
    appellant: [
      'Section 497 is premised on gender stereotypes: it exempts the woman from liability and denies her sexual agency, treating her as the property of the husband.',
      'Adultery may be a civil wrong relevant to marriage, but criminalisation in this form is arbitrary and violates dignity and equality.',
    ],
    respondent: [
      'Adultery undermines the institution of marriage; the legislature is entitled to criminalise it in the interest of social morality.',
    ],
  },
  provisions: [
    {
      actId: 'ipc',
      actName: 'Indian Penal Code, 1860',
      provisionId: 's-497',
      section: 'Section 497 IPC',
      title: 'Adultery',
      subjectSlug: 'bns',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'art-14',
    },
  ],
  reasoning: [
    {
      heading: 'Gendered subordination',
      explanation:
        'The Court held that Section 497 was based on a paternalistic notion that women are chattel of their husbands and lacked agency; such a classification violates equality and non-discrimination.',
    },
    {
      heading: 'Privacy, dignity and the criminal law',
      explanation:
        'Building on privacy and dignity jurisprudence, the Court held that the criminal law cannot enforce a patriarchal conception of marriage by selectively punishing one party to a consensual relationship.',
    },
  ],
  decision:
    'Section 497 IPC and Section 198(2) CrPC to the extent of the adultery framework were struck down. Adultery remains relevant as a civil ground in matrimonial law but is not a criminal offence under the struck provision.',
  holding:
    'Section 497 IPC is unconstitutional for violating Articles 14, 15 and 21; adultery is not a criminal offence under that provision.',
  ratioDecidendi:
    'A penal provision that institutionalises gender stereotypes and denies women equal agency in intimate relations violates equality, non-discrimination, and the right to live with dignity.',
  relatedCases: [
    {
      caseName: 'Navtej Singh Johar v. Union of India',
      citation: '(2018) 10 SCC 1',
      relationship: 'Related',
      judgmentId: 'navtej-johar-2018',
    },
    {
      caseName: 'Sowmithri Vishnu v. Union of India',
      citation: '(1985) Supp SCC 137',
      relationship: 'Overruled in approach',
    },
  ],
  examPoints: [
    'Section 497 IPC struck down as unconstitutional.',
    'Adultery not a crime under the invalidated provision; may remain a civil matrimonial ground.',
    'Equality, dignity, and rejection of patriarchal stereotypes central to the holding.',
    'Decided by a 5-Judge Constitution Bench (2018).',
  ],
  mcqs: [
    {
      id: 'joseph-shine-mcq-1',
      question: 'Joseph Shine v. Union of India struck down which offence?',
      options: [
        'Section 377 IPC entirely',
        'Section 497 IPC (adultery)',
        'Section 498A IPC',
        'Section 304B IPC',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench struck down Section 497 IPC as unconstitutional for violating Articles 14, 15 and 21.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2019) 3 SCC 39',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const commonCauseEuthanasia: Judgment = {
  id: 'common-cause-euthanasia-2018',
  caseName: 'Common Cause v. Union of India',
  shortName: 'Common Cause (Passive Euthanasia)',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2018,
  citation: '(2018) 5 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: [
    'Dipak Misra, C.J.',
    'A.K. Sikri, J.',
    'A.M. Khanwilkar, J.',
    'D.Y. Chandrachud, J.',
    'Ashok Bhushan, J.',
  ],
  subject: 'Constitution',
  topics: ['Passive Euthanasia', 'Living Will', 'Article 21', 'Right to Die with Dignity'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Euthanasia', 'Medical Ethics'],
  summary:
    'A Constitution Bench recognised the right to die with dignity as part of Article 21, upheld passive euthanasia in defined circumstances, and issued guidelines for advance medical directives (living wills), building on Aruna Shanbaug while clarifying the legal framework.',
  facts: [
    'Common Cause sought recognition of the right to die with dignity and a framework for living wills / advance directives so that individuals could refuse life-sustaining treatment in terminal conditions.',
    'The matter required reconciliation of earlier rulings on suicide, attempt to suicide, and withdrawal of life support.',
  ],
  issues: [
    'Whether the right to life under Article 21 includes the right to die with dignity.',
    'Whether passive euthanasia and advance medical directives are permissible under the Constitution.',
  ],
  arguments: {
    appellant: [
      'Forcing life-sustaining treatment against the informed will of a patient in a persistent vegetative or terminal state violates dignity and personal autonomy under Article 21.',
      'Advance directives give effect to informed choice when the patient later lacks capacity.',
    ],
    respondent: [
      'Sanctity of life requires caution; any framework for withdrawal of support must prevent abuse and protect vulnerable patients.',
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
      heading: 'Dignity and autonomy',
      explanation:
        'The Court held that the right to life includes the right to die with dignity; passive euthanasia—withdrawal or withholding of life-sustaining treatment—is permissible in accordance with law and safeguards.',
    },
    {
      heading: 'Advance medical directives',
      explanation:
        'Detailed guidelines were issued for the execution, recording, and implementation of living wills / advance directives, subject to medical board confirmation and judicial/administrative safeguards as laid down in the judgment (later refined by the Court).',
    },
  ],
  decision:
    'Passive euthanasia was affirmed as lawful within a regulated framework. Advance directives were recognised. The judgment is the leading modern authority on end-of-life autonomy under Article 21.',
  holding:
    'The right to die with dignity is part of Article 21; passive euthanasia and advance medical directives are permissible subject to the safeguards laid down by the Court.',
  ratioDecidendi:
    'Personal autonomy and dignity under Article 21 include the right of a person to refuse life-prolonging treatment in appropriate cases; passive euthanasia is not unlawful when carried out under a due process framework.',
  relatedCases: [
    {
      caseName: 'Aruna Ramachandra Shanbaug v. Union of India',
      citation: '(2011) 4 SCC 454',
      relationship: 'Applied / Clarified',
    },
    {
      caseName: 'Gian Kaur v. State of Punjab',
      citation: '(1996) 2 SCC 648',
      relationship: 'Distinguished / Contextualised',
    },
  ],
  examPoints: [
    'Right to die with dignity recognised under Article 21.',
    'Passive euthanasia permitted with safeguards; active euthanasia not authorised by this holding.',
    'Living will / advance directive framework laid down.',
    'Builds on Aruna Shanbaug; high-yield medical ethics + constitutional law crossover.',
  ],
  mcqs: [
    {
      id: 'common-cause-mcq-1',
      question: 'Common Cause v. Union of India (2018) primarily recognised:',
      options: [
        'A right to active euthanasia on demand without safeguards',
        'Passive euthanasia and advance directives as part of the right to die with dignity under Article 21',
        'Mandatory death penalty for attempted suicide',
        'Abolition of all medical consent requirements',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench held that the right to die with dignity is part of Article 21 and permitted passive euthanasia with advance medical directives under safeguards.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2018) 5 SCC 1',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_3: Judgment[] = [
  indiraGandhiElection,
  hussainaraKhatoon,
  mcMehtaOleum,
  josephShine,
  commonCauseEuthanasia,
]
