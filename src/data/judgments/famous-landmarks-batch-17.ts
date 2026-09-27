import type { Judgment } from './types'

/**
 * Famous landmarks batch 17 — missing high-yield only (inventory-first).
 * DISPATCHER Phase 5 + ADD_FAMOUS_JUDGMENTS: no duplicates; verified citations.
 */

export const mohiniJain: Judgment = {
  id: 'mohini-jain-1992',
  caseName: 'Mohini Jain v. State of Karnataka',
  shortName: 'Mohini Jain',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1992,
  citation: '(1992) 3 SCC 666',
  bench: '2-Judge Bench',
  judges: ['Kuldip Singh, J.', 'R.M. Sahai, J.'],
  subject: 'Constitution',
  topics: ['Right to Education', 'Article 21', 'Capitation Fee', 'Private Colleges'],
  tags: ['AIBE', 'Judiciary', 'Education', 'Article 21', 'Capitation'],
  summary:
    'The Court held that the right to education is concomitant of the fundamental rights enshrined in Part III, and that charging capitation fee for admission to educational institutions is arbitrary and violative of Article 14. The judgment was an important precursor to Unni Krishnan and later Article 21A.',
  facts: [
    'A student challenged the demand of a large capitation fee as a condition for admission to a private medical college in Karnataka.',
    'The petition raised whether the State could permit commercialisation of education through capitation.',
  ],
  issues: [
    'Whether the right to education is part of the fundamental rights framework.',
    'Whether capitation-fee based admission is constitutional.',
  ],
  arguments: {
    appellant: [
      'Education is essential to life and dignity; capitation creates a wealth-based barrier and violates equality.',
    ],
    respondent: [
      'Private colleges need funds; regulation of fees is a policy matter for the State.',
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
      heading: 'Education and fundamental rights',
      explanation:
        'The Court treated the right to education as flowing from the dignity and opportunity structure of Part III, rejecting a purely commercial model of professional education.',
    },
    {
      heading: 'Capitation as arbitrariness',
      explanation:
        'Demanding capitation fee as a price of admission was held to be arbitrary and discriminatory, favouring the rich over the meritorious poor.',
    },
  ],
  decision:
    'Capitation fee based admissions were condemned. The decision is read with Unni Krishnan (1993) and later T.M.A. Pai on private institutional autonomy.',
  holding:
    'Capitation fee for admission to educational institutions is unconstitutional; the right to education is integral to the fundamental-rights framework.',
  ratioDecidendi:
    'Commercialisation of education through capitation fees violates equality and is inconsistent with the constitutional commitment to education as part of a life of dignity.',
  relatedCases: [
    {
      caseName: 'Unni Krishnan, J.P. v. State of Andhra Pradesh',
      citation: '(1993) 1 SCC 645',
      relationship: 'Developed',
      judgmentId: 'unni-krishnan-1993',
    },
    {
      caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
      citation: '(2002) 8 SCC 481',
      relationship: 'Later refined private education autonomy',
      judgmentId: 'tma-pai-2002',
    },
  ],
  examPoints: [
    'Capitation fee held unconstitutional.',
    'Education linked to Part III / dignity.',
    'Read with Unni Krishnan and Article 21A trajectory.',
  ],
  mcqs: [
    {
      id: 'mohini-jain-mcq-1',
      question: 'Mohini Jain primarily held that:',
      options: [
        'Capitation fees are mandatory for private colleges',
        'Capitation-fee admissions are unconstitutional',
        'Education is outside Article 21 entirely',
        'Only IITs may charge fees',
      ],
      correctIndex: 1,
      explanation: 'The Court condemned capitation-fee based admissions as arbitrary and unconstitutional.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1992) 3 SCC 666',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const spGupta: Judgment = {
  id: 'sp-gupta-1981',
  caseName: 'S.P. Gupta v. Union of India',
  shortName: 'S.P. Gupta / First Judges Case',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1981,
  citation: 'AIR 1982 SC 149',
  bench: '7-Judge Bench',
  judges: [
    'P.N. Bhagwati, J.',
    'A.C. Gupta, J.',
    'S.M. Fazal Ali, J.',
    'V.D. Tulzapurkar, J.',
    'D.A. Desai, J.',
    'R.S. Pathak, J.',
    'E.S. Venkataramiah, J.',
  ],
  subject: 'Constitution',
  topics: ['Judicial Appointments', 'PIL', 'Locus Standi', 'Article 124', 'Transfers'],
  tags: ['AIBE', 'Judiciary', 'PIL', 'First Judges', 'Locus Standi'],
  summary:
    'The First Judges Case broadened locus standi for public interest litigation and held that the opinion of the Chief Justice of India in judicial appointments and transfers did not have primacy over the executive — a holding later overruled on the primacy point by the Second Judges Case (1993).',
  facts: [
    'Petitions challenged transfer of High Court Judges and non-confirmation of additional judges, raising issues of judicial independence and access to court records.',
    'The Court also examined who may approach the Court for enforcement of constitutional values.',
  ],
  issues: [
    'Whether the CJI has primacy in judicial appointments and transfers.',
    'What is the scope of locus standi for public interest petitioners?',
  ],
  arguments: {
    appellant: [
      'Transfers and non-confirmations without effective judicial consultation undermine independence of the judiciary.',
      'Public-spirited citizens should have standing to vindicate the rule of law.',
    ],
    respondent: [
      'The executive has a legitimate role in appointments under the constitutional text of consultation.',
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
  ],
  reasoning: [
    {
      heading: 'Expanded locus standi',
      explanation:
        'The Court liberalised standing so that persons acting bona fide in the public interest could approach the Court for redress of public injury, foundational to modern PIL.',
    },
    {
      heading: 'No primacy of CJI (later overruled)',
      explanation:
        'On appointments and transfers, the majority did not confer primacy on the CJI’s opinion — a position reversed in the Second Judges Case.',
    },
  ],
  decision:
    'PIL locus was expanded; on primacy of the CJI the decision was later overruled by the Second Judges Case. Still cited for the history of PIL and the judges cases trilogy.',
  holding:
    'Public interest litigants may have standing to enforce constitutional obligations; the First Judges holding denying CJI primacy in appointments was later overruled.',
  ratioDecidendi:
    'Where public injury is alleged, bona fide petitioners may be accorded standing; the constitutional process of judicial appointment consultation was interpreted without CJI primacy (as then held).',
  relatedCases: [
    {
      caseName: 'Supreme Court Advocates-on-Record Association v. Union of India',
      citation: '(1993) 4 SCC 441',
      relationship: 'Overruled on primacy',
      judgmentId: 'second-judges-1993',
    },
  ],
  examPoints: [
    'First Judges Case — PIL locus expanded.',
    'CJI primacy denied (later overruled by Second Judges).',
    'Part of Judges Cases trilogy with Second and Third Judges.',
  ],
  mcqs: [
    {
      id: 'sp-gupta-mcq-1',
      question: 'S.P. Gupta is known as the First Judges Case primarily for:',
      options: [
        'Creating the NJAC',
        'Expanding PIL locus standi and (as then held) denying CJI primacy in appointments',
        'Striking down the basic structure doctrine',
        'Abolishing High Courts',
      ],
      correctIndex: 1,
      explanation: 'It liberalised PIL standing and held against CJI primacy — later overruled on primacy by the Second Judges Case.',
    },
  ],
  source: {
    type: 'document',
    title: 'AIR 1982 SC 149',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const sunilBatra: Judgment = {
  id: 'sunil-batra-1978',
  caseName: 'Sunil Batra v. Delhi Administration',
  shortName: 'Sunil Batra',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1978,
  citation: '(1978) 4 SCC 494',
  bench: '3-Judge Bench',
  judges: ['V.R. Krishna Iyer, J.', 'D.A. Desai, J.', 'O. Chinnappa Reddy, J.'],
  subject: 'Constitution',
  topics: ['Prisoners Rights', 'Article 21', 'Torture', 'Jail Reform'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Prisoners', 'Torture'],
  summary:
    'In petitions concerning undertrials and convicts in Tihar Jail, the Court held that fundamental rights do not end at the prison gate; bar fetters, solitary confinement, and brutal treatment are subject to constitutional limits under Article 21.',
  facts: [
    'Allegations of torture, use of bar fetters, and degrading treatment of prisoners in Delhi jails reached the Court through letters and petitions.',
    'The Court examined prison manuals and practices against constitutional standards.',
  ],
  issues: [
    'Whether prisoners retain fundamental rights under Article 21.',
    'Whether solitary confinement and bar fetters as practised were constitutional.',
  ],
  arguments: {
    appellant: [
      'Conviction does not reduce a person to a non-person; cruelty in custody violates Article 21.',
    ],
    respondent: [
      'Prison discipline and security require restraints authorised by jail manuals.',
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
      heading: 'Rights behind bars',
      explanation:
        'The Court held that imprisonment restricts liberty but does not extinguish the right to life with dignity; prison authorities are under constitutional duties.',
    },
    {
      heading: 'Limits on solitary confinement and fetters',
      explanation:
        'Arbitrary solitary confinement and humiliating bar fetters were scrutinised strictly and confined to legally justified, exceptional use.',
    },
  ],
  decision:
    'Directions were issued to humanise prison administration. Sunil Batra is a foundational prisoners’-rights authority under Article 21.',
  holding:
    'Prisoners retain Article 21 rights; cruel, arbitrary, or degrading prison practices are unconstitutional.',
  ratioDecidendi:
    'The right to life with dignity continues during incarceration; prison powers must be exercised under fair procedure and cannot license torture or arbitrary solitary confinement.',
  relatedCases: [
    {
      caseName: 'Maneka Gandhi v. Union of India',
      citation: '(1978) 1 SCC 248',
      relationship: 'Applied',
      judgmentId: 'maneka-gandhi-1978',
    },
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related (custody safeguards)',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Prisoners’ rights under Article 21.',
    'Bar fetters / solitary confinement limits.',
    'Jail reform constitutional litigation.',
  ],
  mcqs: [
    {
      id: 'sunil-batra-mcq-1',
      question: 'Sunil Batra is authority for the proposition that:',
      options: [
        'Prisoners have no fundamental rights',
        'Prisoners retain Article 21 rights against cruel and arbitrary prison practices',
        'All solitary confinement is mandatory',
        'Article 21 does not apply to undertrials',
      ],
      correctIndex: 1,
      explanation: 'The Court held that fundamental rights survive incarceration subject to lawful restrictions.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1978) 4 SCC 494',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const nilabatiBehera: Judgment = {
  id: 'nilabati-behera-1993',
  caseName: 'Nilabati Behera v. State of Orissa',
  shortName: 'Nilabati Behera',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1993,
  citation: '(1993) 2 SCC 746',
  bench: '3-Judge Bench',
  judges: ['J.S. Verma, J.', 'Dr A.S. Anand, J.', 'N. Venkatachala, J.'],
  subject: 'Constitution',
  topics: ['Constitutional Tort', 'Article 21', 'Compensation', 'Custodial Death'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Compensation', 'Custodial Death'],
  summary:
    'In a custodial death case, the Court awarded compensation under Article 32 and clarified that public law compensation for violation of fundamental rights is distinct from private tort damages, reinforcing the constitutional tort doctrine.',
  facts: [
    'A young man died in police custody; his mother petitioned the Supreme Court for justice and compensation.',
    'The State’s responsibility for custodial death and the nature of monetary relief under public law were in issue.',
  ],
  issues: [
    'Whether the Supreme Court can award compensation for violation of Article 21 in public law.',
    'How public-law compensation relates to private law tort claims.',
  ],
  arguments: {
    appellant: [
      'Custodial death is a clear violation of Article 21; the State must compensate in public law.',
    ],
    respondent: [
      'Compensation should be left to ordinary civil suits against individual officers.',
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
      heading: 'Public law compensation',
      explanation:
        'The Court held that monetary compensation can be awarded under Article 32/226 as a public-law remedy for established violation of fundamental rights, especially custodial violence.',
    },
    {
      heading: 'Distinct from private tort',
      explanation:
        'Such compensation does not displace the right to sue in tort; it is an additional constitutional response to State wrongdoing.',
    },
  ],
  decision:
    'Compensation was awarded to the petitioner. Nilabati Behera is a leading authority on constitutional tort and custodial death remedies.',
  holding:
    'Courts may award public-law compensation for violation of Article 21, including custodial death, independent of private tort claims.',
  ratioDecidendi:
    'Where the State violates fundamental rights, constitutional courts may grant compensatory relief in public law as an incident of enforcement under Articles 32 and 226.',
  relatedCases: [
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related (custodial safeguards)',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Constitutional tort / public-law compensation.',
    'Custodial death → Article 21 violation.',
    'Distinct from private law damages.',
  ],
  mcqs: [
    {
      id: 'nilabati-mcq-1',
      question: 'Nilabati Behera is primarily authority for:',
      options: [
        'Mandatory death penalty',
        'Public-law compensation for custodial death violating Article 21',
        'Abolition of police forces',
        'Private colleges’ fee autonomy',
      ],
      correctIndex: 1,
      explanation: 'The Court awarded constitutional compensation for custodial death as a public-law remedy.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1993) 2 SCC 746',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const arneshKumar: Judgment = {
  id: 'arnesh-kumar-2014',
  caseName: 'Arnesh Kumar v. State of Bihar',
  shortName: 'Arnesh Kumar',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Procedure',
  year: 2014,
  citation: '(2014) 8 SCC 273',
  bench: '2-Judge Bench',
  judges: ['C.K. Prasad, J.', 'Pinaki Chandra Ghose, J.'],
  subject: 'Criminal Procedure',
  topics: ['Arrest', 'Section 41 CrPC', 'Section 498A', 'Personal Liberty'],
  tags: ['AIBE', 'Judiciary', 'Arrest', '498A', 'BNSS', 'CrPC'],
  summary:
    'The Court issued binding directions to prevent mechanical arrests in offences punishable with imprisonment up to seven years, requiring police to record reasons under Section 41 CrPC and magistrates to scrutinise the need for detention — frequently applied to Section 498A cases.',
  facts: [
    'A husband sought anticipatory bail in a Section 498A IPC case, highlighting the practice of automatic arrest of the accused and family members.',
    'The Court examined Section 41 CrPC and the balance between investigation needs and personal liberty.',
  ],
  issues: [
    'When may police arrest without warrant in offences punishable with up to seven years’ imprisonment?',
    'What duties do magistrates have when authorising detention?',
  ],
  arguments: {
    appellant: [
      'Mechanical arrests in 498A cases abuse process and violate personal liberty.',
    ],
    respondent: [
      'Arrest may be needed to protect the complainant and ensure investigation.',
    ],
  },
  provisions: [
    {
      actId: 'bnss',
      actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC, 1973 (historical)',
      provisionId: 'arrest',
      section: 'Section 41 CrPC (corresponding BNSS arrest provisions)',
      title: 'When police may arrest without warrant',
      subjectSlug: 'bnss',
      topicId: 'arrest',
    },
  ],
  reasoning: [
    {
      heading: 'Section 41 checklist',
      explanation:
        'Police must be satisfied that arrest is necessary for one of the statutory reasons (e.g., prevention of further offence, proper investigation, absconding) and must record those reasons.',
    },
    {
      heading: 'Magisterial scrutiny',
      explanation:
        'Magistrates shall not authorise detention routinely; they must examine the police reasons and satisfy themselves of the need for custody.',
    },
  ],
  decision:
    'Directions were issued to police and magistrates nationwide. Arnesh Kumar is the leading modern authority against casual arrests in seven-year-or-less offences.',
  holding:
    'Arrest in offences punishable with up to seven years is not automatic; police must justify arrest under Section 41 and magistrates must scrutinise detention.',
  ratioDecidendi:
    'Personal liberty requires that arrest be justified by statutory necessity criteria, not by the mere registration of an FIR for an offence in the up-to-seven-years category.',
  relatedCases: [
    {
      caseName: 'Joginder Kumar v. State of Uttar Pradesh',
      citation: '(1994) 4 SCC 260',
      relationship: 'Applied / Related',
      judgmentId: 'joginder-kumar-1994',
    },
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'No mechanical arrest for ≤7 year offences.',
    'Police must record Section 41 reasons.',
    'Magistrate must scrutinise remand.',
    'Often tested with 498A fact patterns.',
  ],
  mcqs: [
    {
      id: 'arnesh-mcq-1',
      question: 'Arnesh Kumar requires that for offences punishable with up to seven years:',
      options: [
        'Arrest is mandatory on FIR registration',
        'Police must justify arrest under Section 41 criteria and record reasons',
        'Only High Courts may arrest',
        'Bail is prohibited',
      ],
      correctIndex: 1,
      explanation: 'The Court mandated reasoned application of Section 41 before arrest.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2014) 8 SCC 273',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const bhajanLal: Judgment = {
  id: 'bhajan-lal-1992',
  caseName: 'State of Haryana v. Bhajan Lal',
  shortName: 'Bhajan Lal',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Procedure',
  year: 1992,
  citation: '1992 Supp (1) SCC 335',
  bench: '2-Judge Bench',
  judges: ['S.R. Pandian, J.', 'K. Jayachandra Reddy, J.'],
  subject: 'Criminal Procedure',
  topics: ['Quashing FIR', 'Section 482 CrPC', 'Investigation', 'Abuse of Process'],
  tags: ['AIBE', 'Judiciary', 'Quashing', 'FIR', 'Section 482'],
  summary:
    'The Court enumerated illustrative categories in which High Courts may quash FIRs/criminal proceedings under inherent powers to prevent abuse of process, while cautioning that the power is exceptional and not a mini-trial at the threshold.',
  facts: [
    'An FIR alleging corruption and related offences against a political figure was challenged as motivated and without legal foundation.',
    'The scope of High Court interference at the FIR stage was examined.',
  ],
  issues: [
    'In what circumstances may a High Court quash an FIR or criminal proceedings?',
    'How should courts balance investigation with protection against abuse of process?',
  ],
  arguments: {
    appellant: [
      'Investigation should not be stifled by premature quashing.',
    ],
    respondent: [
      'Where allegations even if taken at face value do not disclose an offence, continuing process is abuse.',
    ],
  },
  provisions: [
    {
      actId: 'bnss',
      actName: 'BNSS / CrPC',
      provisionId: 'inherent-powers',
      section: 'Section 482 CrPC (inherent powers; BNSS counterpart)',
      title: 'Saving of inherent powers of High Court',
      subjectSlug: 'bnss',
    },
  ],
  reasoning: [
    {
      heading: 'Illustrative categories',
      explanation:
        'The Court listed categories such as allegations not disclosing an offence, express legal bar, and proceedings instituted with mala fides to wreak vengeance — emphasising they are illustrative, not exhaustive.',
    },
    {
      heading: 'Exceptional nature of power',
      explanation:
        'Quashing is to be used sparingly; courts should not weigh evidence as at trial when the FIR discloses a cognizable offence.',
    },
  ],
  decision:
    'The judgment remains the locus classicus on quashing of FIRs/criminal proceedings under inherent jurisdiction.',
  holding:
    'High Courts may quash criminal proceedings in exceptional categories to prevent abuse of process, without conducting a mini-trial.',
  ratioDecidendi:
    'Inherent power to quash is extraordinary: where the complaint fails to disclose an offence or is otherwise an abuse of process within recognised categories, the High Court may intervene; otherwise investigation must proceed.',
  relatedCases: [
    {
      caseName: 'Lalita Kumari v. Government of Uttar Pradesh',
      citation: '(2014) 2 SCC 1',
      relationship: 'Related (FIR registration)',
      judgmentId: 'lalita-kumari-2013',
    },
  ],
  examPoints: [
    'Bhajan Lal categories for quashing.',
    'Power under Section 482 is exceptional.',
    'No mini-trial at FIR stage if offence is disclosed.',
  ],
  mcqs: [
    {
      id: 'bhajan-lal-mcq-1',
      question: 'Bhajan Lal is the leading case on:',
      options: [
        'Death penalty sentencing',
        'Categories for quashing FIRs/criminal proceedings to prevent abuse of process',
        'Basic structure doctrine',
        'Collegium appointments',
      ],
      correctIndex: 1,
      explanation: 'It laid down illustrative categories for quashing under inherent powers.',
    },
  ],
  source: {
    type: 'document',
    title: '1992 Supp (1) SCC 335',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const joginderKumar: Judgment = {
  id: 'joginder-kumar-1994',
  caseName: 'Joginder Kumar v. State of Uttar Pradesh',
  shortName: 'Joginder Kumar',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Procedure',
  year: 1994,
  citation: '(1994) 4 SCC 260',
  bench: '2-Judge Bench',
  judges: ['M.N. Venkatachaliah, C.J.', 'S. Mohan, J.'],
  subject: 'Criminal Procedure',
  topics: ['Arrest', 'Personal Liberty', 'Article 21', 'Police Powers'],
  tags: ['AIBE', 'Judiciary', 'Arrest', 'Article 21', 'Police'],
  summary:
    'The Court held that the existence of power to arrest is not the same as justification to arrest; police must have reasonable justification and must notify friends/relatives of the arrested person, reinforcing liberty-centric arrest jurisprudence later developed in D.K. Basu and Arnesh Kumar.',
  facts: [
    'A young advocate was taken into custody in a manner that raised questions about the necessity and communication of arrest.',
    'The Court examined national and international norms on arrest and detention.',
  ],
  issues: [
    'Whether police may arrest merely because the power exists.',
    'What safeguards apply at the point of arrest?',
  ],
  arguments: {
    appellant: [
      'Arrest without justification violates personal liberty under Article 21.',
    ],
    respondent: [
      'Police need operational latitude to investigate crime.',
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
      heading: 'Power vs justification',
      explanation:
        'The Court stressed that arrest must be justified by the needs of investigation and prevention of crime, not used as a routine tool of harassment.',
    },
    {
      heading: 'Intimation to relatives',
      explanation:
        'Directions included informing relatives or friends of the arrest and the place of detention, enhancing transparency.',
    },
  ],
  decision:
    'Guidelines were laid down. The case is a core citation on arrest jurisprudence before and alongside D.K. Basu and Arnesh Kumar.',
  holding:
    'Arrest requires justification beyond mere existence of power; the arrested person’s relatives must be informed.',
  ratioDecidendi:
    'Article 21 demands that arrest be based on reasonable justification; mechanical or unexplained arrests are unconstitutional exercises of police power.',
  relatedCases: [
    {
      caseName: 'Arnesh Kumar v. State of Bihar',
      citation: '(2014) 8 SCC 273',
      relationship: 'Developed',
      judgmentId: 'arnesh-kumar-2014',
    },
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Power to arrest ≠ justification to arrest.',
    'Inform relatives/friends of arrest.',
    'Bridge to D.K. Basu and Arnesh Kumar.',
  ],
  mcqs: [
    {
      id: 'joginder-mcq-1',
      question: 'Joginder Kumar held that:',
      options: [
        'Police may arrest anyone without reasons',
        'Existence of power to arrest is not itself justification to arrest',
        'Arrest is abolished',
        'Only Sessions Courts may arrest',
      ],
      correctIndex: 1,
      explanation: 'The Court distinguished power from justification and required reasoned, liberty-sensitive arrests.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1994) 4 SCC 260',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const bennettColeman: Judgment = {
  id: 'bennett-coleman-1972',
  caseName: 'Bennett Coleman & Co. v. Union of India',
  shortName: 'Bennett Coleman',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1972,
  citation: '(1972) 2 SCC 788',
  bench: '5-Judge Constitution Bench',
  judges: [
    'S.M. Sikri, C.J.',
    'A.N. Ray, J.',
    'P. Jaganmohan Reddy, J.',
    'K.K. Mathew, J.',
    'M.H. Beg, J.',
  ],
  subject: 'Constitution',
  topics: ['Freedom of Press', 'Article 19(1)(a)', 'Newsprint Policy', 'Speech'],
  tags: ['AIBE', 'Judiciary', 'Press Freedom', 'Article 19'],
  summary:
    'The Court struck down restrictive newsprint control policies that limited newspapers’ page volume and circulation growth, holding that freedom of the press is included in Article 19(1)(a) and that indirect restrictions choking circulation violate free speech.',
  facts: [
    'Newspaper companies challenged the Newsprint Control Order and related import/allocation policies that capped page numbers and inhibited growth.',
    'The State defended the measures as resource allocation and regulation of industry.',
  ],
  issues: [
    'Whether newsprint restrictions violated Article 19(1)(a).',
    'Whether freedom of the press is part of freedom of speech and expression.',
  ],
  arguments: {
    appellant: [
      'Limiting pages and circulation is a direct hit on the content-carrying capacity of the press.',
    ],
    respondent: [
      'Newsprint is a scarce commodity; allocation is a reasonable restriction in the interests of the general public.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a)',
      title: 'Freedom of speech and expression',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Press within Article 19(1)(a)',
      explanation:
        'The Court affirmed that freedom of the press is an integral part of freedom of speech and expression.',
    },
    {
      heading: 'Indirect but real restriction',
      explanation:
        'Policies that reduce a newspaper’s ability to publish and circulate were treated as infringements of free speech, not merely economic regulation.',
    },
  ],
  decision:
    'Impugned restrictions were invalidated to the extent they violated Article 19(1)(a). Bennett Coleman is a classic free-press authority.',
  holding:
    'Freedom of the press is part of Article 19(1)(a); newsprint policies that choke circulation and page volume unconstitutionally restrict free speech.',
  ratioDecidendi:
    'State measures that, in effect, reduce the volume and reach of newspapers infringe freedom of speech and must satisfy Article 19(2) standards; scarcity alone does not justify stifling the press.',
  relatedCases: [
    {
      caseName: 'Sakal Papers (P) Ltd. v. Union of India',
      citation: '(1962) 3 SCR 842',
      relationship: 'Related / Applied',
      judgmentId: 'sakal-papers-1962',
    },
    {
      caseName: 'Shreya Singhal v. Union of India',
      citation: '(2015) 5 SCC 1',
      relationship: 'Related (free speech)',
      judgmentId: 'shreya-singhal-2015',
    },
  ],
  examPoints: [
    'Press freedom ⊂ Article 19(1)(a).',
    'Newsprint control cannot choke circulation.',
    'Pair with Sakal Papers.',
  ],
  mcqs: [
    {
      id: 'bennett-mcq-1',
      question: 'Bennett Coleman held that freedom of the press:',
      options: [
        'Is not part of the Constitution',
        'Is included in Article 19(1)(a) and protected against choking newsprint restrictions',
        'Applies only to radio',
        'Can be abolished by ordinary law without Article 19(2)',
      ],
      correctIndex: 1,
      explanation: 'The Court treated press freedom as integral to Article 19(1)(a) and invalidated stifling newsprint limits.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1972) 2 SCC 788',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const sakalPapers: Judgment = {
  id: 'sakal-papers-1962',
  caseName: 'Sakal Papers (P) Ltd. v. Union of India',
  shortName: 'Sakal Papers',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1962,
  citation: '(1962) 3 SCR 842',
  bench: '5-Judge Constitution Bench',
  judges: [
    'S.K. Das, J.',
    'A.K. Sarkar, J.',
    'N. Rajagopala Ayyangar, J.',
    'J.R. Mudholkar, J.',
    'K. Subba Rao, J.',
  ],
  subject: 'Constitution',
  topics: ['Freedom of Press', 'Article 19(1)(a)', 'Newspaper Price and Page Act'],
  tags: ['AIBE', 'Judiciary', 'Press Freedom', 'Article 19'],
  summary:
    'The Court struck down the Newspaper (Price and Page) Act, 1956 and related order that regulated the number of pages and price of newspapers, holding that the measures violated freedom of speech by restricting volume and circulation of newspapers.',
  facts: [
    'Publishers challenged legislation linking newspaper price to page limits, which effectively reduced content space and affected circulation strategies.',
  ],
  issues: [
    'Whether regulation of newspaper price and pages violates Article 19(1)(a).',
  ],
  arguments: {
    appellant: [
      'Forcing a reduction in pages curtails the quantum of speech and is not a mere business regulation.',
    ],
    respondent: [
      'The Act prevents unfair competition and monopolistic practices in the newspaper industry.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a)',
      title: 'Freedom of speech and expression',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Volume of circulation as speech',
      explanation:
        'The Court held that freedom of speech includes the right to propagate ideas through newspapers and that limiting pages directly affects that freedom.',
    },
  ],
  decision:
    'The impugned Act and order were declared unconstitutional. Sakal Papers remains a foundational free-press decision.',
  holding:
    'Statutory limits on newspaper pages and price that curtail volume of publication violate Article 19(1)(a).',
  ratioDecidendi:
    'Restrictions that reduce a newspaper’s page volume restrict freedom of speech and must meet Article 19(2); economic regulation cannot be a pretext to cut speech capacity.',
  relatedCases: [
    {
      caseName: 'Bennett Coleman & Co. v. Union of India',
      citation: '(1972) 2 SCC 788',
      relationship: 'Followed / Related',
      judgmentId: 'bennett-coleman-1972',
    },
  ],
  examPoints: [
    'Newspaper Price and Page Act struck down.',
    'Page limits = speech restriction.',
    'Pair with Bennett Coleman.',
  ],
  mcqs: [
    {
      id: 'sakal-mcq-1',
      question: 'Sakal Papers struck down laws regulating:',
      options: [
        'Only radio licences',
        'Newspaper price and page limits that curtailed free speech',
        'Cinema certification only',
        'Judicial appointments',
      ],
      correctIndex: 1,
      explanation: 'The Court invalidated price-and-page controls as violations of Article 19(1)(a).',
    },
  ],
  source: {
    type: 'document',
    title: '(1962) 3 SCR 842',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const rRajagopal: Judgment = {
  id: 'r-rajagopal-1994',
  caseName: 'R. Rajagopal v. State of Tamil Nadu',
  shortName: 'R. Rajagopal / Auto Shankar',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1994,
  citation: '(1994) 6 SCC 632',
  bench: '2-Judge Bench',
  judges: ['B.P. Jeevan Reddy, J.', 'Suhas C. Sen, J.'],
  subject: 'Constitution',
  topics: ['Privacy', 'Freedom of Press', 'Prior Restraint', 'Article 21', 'Article 19'],
  tags: ['AIBE', 'Judiciary', 'Privacy', 'Press', 'Prior Restraint'],
  summary:
    'In the Auto Shankar publication controversy, the Court recognised the right to privacy as implicit in Article 21 and held that the State cannot impose prior restraint on publication of a biography based on public records, while clarifying remedies in damages for falsehood after publication.',
  facts: [
    'A magazine proposed to publish the life story of a condemned prisoner “Auto Shankar”, including alleged links with public officials.',
    'State authorities sought to restrain publication; the conflict between privacy, reputation, and press freedom arose.',
  ],
  issues: [
    'Whether a right to privacy exists under Article 21.',
    'Whether the State can pre-censor publication of material drawn from public records.',
  ],
  arguments: {
    appellant: [
      'Press freedom protects publication of matters of public record; prior restraint is exceptional.',
    ],
    respondent: [
      'Publication would violate privacy and defame officials; restraint is necessary.',
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
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a)',
      title: 'Freedom of speech and expression',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Privacy under Article 21',
      explanation:
        'The Court held that the right to privacy is implicit in the right to life and liberty under Article 21.',
    },
    {
      heading: 'Prior restraint and public records',
      explanation:
        'Once matter is in public records, the press may publish it; the State cannot generally impose prior restraint, though remedies for false allegations may follow in appropriate proceedings.',
    },
  ],
  decision:
    'Prior restraint was rejected in the terms framed; privacy was recognised as a constitutional value later amplified in Puttaswamy (2017).',
  holding:
    'Privacy is implicit in Article 21; the State cannot impose prior restraint on publication of material based on public records in the manner sought.',
  ratioDecidendi:
    'Freedom of the press and the right to privacy must be balanced; prior restraint on publishing public-record facts is presumptively impermissible, while privacy remains a constitutional interest against unlawful intrusion.',
  relatedCases: [
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Developed (privacy as fundamental right)',
      judgmentId: 'puttaswamy-2017',
    },
    {
      caseName: 'Shreya Singhal v. Union of India',
      citation: '(2015) 5 SCC 1',
      relationship: 'Related (free speech)',
      judgmentId: 'shreya-singhal-2015',
    },
  ],
  examPoints: [
    'Privacy recognised under Article 21 (pre-Puttaswamy).',
    'Prior restraint on public-record publication rejected.',
    'Auto Shankar factual matrix.',
  ],
  mcqs: [
    {
      id: 'rajagopal-mcq-1',
      question: 'R. Rajagopal is important because it:',
      options: [
        'Abolished freedom of the press',
        'Recognised privacy under Article 21 and limited prior restraint on public-record publication',
        'Created the collegium',
        'Struck down Section 377 IPC',
      ],
      correctIndex: 1,
      explanation: 'The Court recognised privacy as implicit in Article 21 and constrained prior restraint regarding public records.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1994) 6 SCC 632',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_17: Judgment[] = [
  mohiniJain,
  spGupta,
  sunilBatra,
  nilabatiBehera,
  arneshKumar,
  bhajanLal,
  joginderKumar,
  bennettColeman,
  sakalPapers,
  rRajagopal,
]
