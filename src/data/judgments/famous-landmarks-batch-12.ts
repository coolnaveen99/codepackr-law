import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_12: Judgment[] = [
  {
    id: 'ak-kraipak-1969',
    caseName: 'A.K. Kraipak v. Union of India',
    shortName: 'A.K. Kraipak',
    citation: '(1969) 2 SCC 262',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional / Administrative Law',
    year: 1969,
    bench: '5-Judge Constitution Bench',
    judges: ['M. Hidayatullah, C.J.', 'J.C. Shah, J.', 'K.S. Hegde, J.', 'A.N. Grover, J.', 'V. Ramaswami, J.'],
    subject: 'Administrative Law',
    topics: ['Natural Justice', 'Rule Against Bias', 'Nemo Judex In Causa Sua', 'Administrative Actions', 'Selection Committee'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Natural Justice', 'Bias', 'Nemo Judex', 'Article 14'],
    summary:
      'Constitution Bench ruling establishing that principles of natural justice apply to administrative inquiries as well as quasi-judicial proceedings. The dividing line between administrative power and quasi-judicial power is thin and being obliterated. A selection board member who is himself an eligible competing candidate cannot participate in deliberations (nemo judex in causa sua).',
    facts: [
      'The Union of India constituted a Special Selection Board under the Indian Forest Service (Initial Recruitment) Regulations, 1966, for selecting officers from the Jammu & Kashmir State Forest Service into the newly constituted Indian Forest Service.',
      'The Selection Board included the Acting Chief Conservator of Forests of J&K, Naqushbund, who was himself an aspirant and eligible candidate competing for selection to the senior post in the IFS hierarchy.',
      'Although Naqushbund did not formally sit on the board when his own specific candidature was discussed, he participated in deliberations when candidates senior to him or rival contenders (including the petitioners, who were Conservators of Forests) were interviewed, assessed, and ranked.',
      'Naqushbund was selected at the top of the list, whereas several senior and meritorious officers were either dropped or superseded.',
      'The aggrieved officers filed writ petitions under Article 32 contending that the selection process was vitiated by personal bias and violated the fundamental principles of natural justice.',
    ],
    issues: [
      'Whether the rules of natural justice apply strictly to administrative proceedings or are confined exclusively to judicial and quasi-judicial determinations.',
      'Whether the presence of a candidate on the selection board, even if he recused himself during his own evaluation, vitiated the entire selection by reason of reasonable likelihood of bias.',
    ],
    arguments: {
      appellant: [
        'Naqushbund was a direct competitor whose inclusion on the selection board created a patent conflict of interest.',
        'Participation of an interested candidate during the evaluation of rivals renders the selection violative of Article 14 and natural justice.',
      ],
      respondent: [
        'The function of the selection board was purely administrative and not judicial or quasi-judicial.',
        'Naqushbund did not participate when his own personal candidature was discussed and marked by the other board members.',
      ],
    },
    provisions: [
      {
        actId: 'admin',
        actName: 'Administrative Law Principles',
        provisionId: 'natural-justice',
        title: 'Nemo Judex In Causa Sua & Rule Against Bias',
        subjectSlug: 'admin',
        topicId: 'admin-nemo-judex',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Equality before law and protection against arbitrariness',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Application of natural justice to administrative proceedings',
        explanation:
          'Hegde, J. observed that the aim of rules of natural justice is to secure justice and prevent miscarriage of justice. These rules operate in areas not covered by any valid law; they do not supplant the law but supplement it. The dividing line between an administrative power and a quasi-judicial power is quite thin and is being gradually obliterated. In a welfare State, administrative authorities possess vast powers affecting civil rights, and minimum procedural fairness must be observed.',
      },
      {
        heading: 'Real likelihood of bias invalidating selections',
        explanation:
          'The test of bias is not whether actual bias was proved, but whether a reasonable person would have a reasonable apprehension of bias. Naqushbund was interested in safeguarding his own position and superseding rivals. His presence on the board during interview and ranking of competitors inherently compromised the impartiality of the board.',
      },
    ],
    decision:
      'Selection list quashed. The Supreme Court held that the dividing line between administrative and quasi-judicial powers is thin and rapidly disappearing. Natural justice applies to administrative proceedings affecting rights. Naqushbund was a judge in his own cause because his presence on the board created a real likelihood of bias against competitor candidates.',
    holding:
      'Administrative bodies exercising discretionary powers affecting individual rights are bound by natural justice. A candidate cannot be a member of a selection committee evaluating competitor candidates, as reasonable likelihood of bias vitiates the process under nemo judex in causa sua.',
    ratioDecidendi:
      'The rules of natural justice apply to administrative inquiries as well as quasi-judicial proceedings. The dividing line between administrative power and quasi-judicial power is thin and is being gradually obliterated. If an administrative exercise of power affects civil rights or leads to civil consequences, minimum standards of fairness must be observed. The rule against bias (nemo judex in causa sua) vitiates any selection where a member of the selection committee is also an applicant or competitor.',
    obiterDicta:
      'The concept of natural justice has undergone profound changes. What was previously considered unfettered administrative discretion must now conform to minimum standards of fairness, equity, and impartiality.',
    relatedCases: [
      {
        judgmentId: 'maneka-gandhi-1978',
        caseName: 'Maneka Gandhi v. Union of India',
        citation: '(1978) 1 SCC 248',
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
      'Erased the rigid dichotomy between administrative and quasi-judicial functions in Indian administrative law.',
      'Established that natural justice applies to purely administrative proceedings.',
      'Key authority for the test of reasonable likelihood of bias under nemo judex in causa sua.',
    ],
    mcqs: [
      {
        id: 'ak-kraipak-mcq-1',
        question:
          'What did the Constitution Bench of the Supreme Court rule in A.K. Kraipak v. Union of India regarding administrative and quasi-judicial functions?',
        options: [
          'Natural justice applies only to courts and quasi-judicial tribunals, not administrative bodies',
          'The dividing line between administrative and quasi-judicial power is thin, and natural justice applies to administrative proceedings affecting rights',
          'Selection boards are entirely exempt from the rule against bias',
          'Administrative authorities have absolute discretion in selections without judicial review',
        ],
        correctIndex: 1,
        explanation:
          'In A.K. Kraipak (1969), the Supreme Court ruled that the dividing line between administrative and quasi-judicial power is thin and being obliterated, holding that principles of natural justice apply to administrative selections.',
      },
    ],
  },
  {
    id: 'nandini-satpathy-1978',
    caseName: 'Nandini Satpathy v. P.L. Dani',
    shortName: 'Nandini Satpathy',
    citation: '(1978) 2 SCC 424',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate / Constitutional Jurisdiction',
    year: 1978,
    bench: '3-Judge Bench',
    judges: ['V.R. Krishna Iyer, J.', 'Jaswant Singh, J.', 'V.D. Tulzapurkar, J.'],
    subject: 'Bharatiya Nagarik Suraksha Sanhita',
    topics: ['Self-Incrimination', 'Section 161 CrPC', 'Article 20(3)', 'Police Interrogation', 'Right to Silence'],
    tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'Constitution', 'Article 20', 'Self-Incrimination', 'Right to Silence'],
    summary:
      'Landmark 3-judge bench ruling holding that the constitutional protection against self-incrimination under Article 20(3) extends to police interrogations under Section 161 CrPC (s. 180 BNSS). The phrase "accused of any offence" covers suspects under investigative interrogation, shielding them from compulsory self-incriminating answers.',
    facts: [
      'Nandini Satpathy, former Chief Minister of Orissa, was directed to appear before the Deputy Superintendent of Police (Vigilance) in connection with an investigation into disproportionate assets registered under the Prevention of Corruption Act.',
      'During police interrogation, she was served with a lengthy written questionnaire comprising several detailed questions regarding her income, political financing, and property acquisitions.',
      'She refused to answer questions that she asserted were designed to incriminate her in criminal charges.',
      'The investigating officer lodged a complaint against her before the Magistrate under Section 179 IPC (refusing to answer public servant authorized to question).',
      'The Magistrate took cognizance and issued process, which she challenged before the High Court and subsequently the Supreme Court under Article 20(3) and Section 161(2) CrPC.',
    ],
    issues: [
      'Whether the constitutional guarantee against self-incrimination under Article 20(3) applies to police interrogation during investigation under Section 161 CrPC before a formal complaint or charge-sheet is filed.',
      'Whether an accused or suspect is entitled to remain silent to questions that have a tendency to expose them to a criminal charge or forfeiture.',
    ],
    arguments: {
      appellant: [
        'Compelling answers to questions designed to extract guilt violates Article 20(3) and Section 161(2) CrPC.',
        'Penalising silence under Section 179 IPC when exercising constitutional privilege is unlawful.',
      ],
      respondent: [
        'Section 161 CrPC imposes a statutory duty on every person examined by police to answer questions truthfully.',
        'Article 20(3) applies only after formal arraignment in a court of law and does not extend to the investigative stage.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 's-180',
        section: 'Section 180 (legacy s. 161 CrPC)',
        title: 'Examination of witnesses by police during investigation',
        subjectSlug: 'bnss',
        topicId: 's-180',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-20',
        article: 'Article 20(3)',
        title: 'Protection against self-incrimination',
        subjectSlug: 'constitution',
        topicId: 'art-20',
      },
    ],
    reasoning: [
      {
        heading: 'Scope of Article 20(3) during police interrogation',
        explanation:
          'Krishna Iyer, J. held that the phrase "accused of any offence" in Article 20(3) is not confined to a person already formally arraigned before a Magistrate; it extends to suspects examined by the police under Section 161 CrPC if the questions tend to elicit incriminating disclosures. To limit Article 20(3) to trials would render the protection illusory.',
      },
      {
        heading: 'Right to silence and tendency to expose to criminal charge',
        explanation:
          'Section 161(2) CrPC mirrors the constitutional privilege by expressly exempting answers having a tendency to expose the person to a criminal charge or penalty. A witness or suspect is entitled to remain silent in the face of incriminating questions without attracting penal sanction under Section 179 IPC.',
      },
    ],
    decision:
      'Prosecution under Section 179 IPC quashed. The Supreme Court held that Article 20(3) applies to suspects subjected to police questioning under Section 161(2) CrPC. The right to remain silent shields any question whose answer has a reasonable tendency to expose the person to criminal liability.',
    holding:
      'An individual questioned by police under Section 161 CrPC is entitled to invoke the constitutional right against self-incrimination under Article 20(3). A suspect or accused cannot be prosecuted under Section 179 IPC for refusing to answer questions that have an incriminating tendency.',
    ratioDecidendi:
      'The protection of Article 20(3) extends to police interrogation under Section 161 CrPC. Section 161(2) CrPC embodies the constitutional privilege by exempting answers that have a tendency to expose the person to a criminal charge. The phrase "accused of any offence" embraces a suspect against whom an investigation is directed. While an accused has no right to absolute silence to non-incriminating administrative details, compulsory extraction of self-incriminatory statements through psychological or physical pressure violates Article 20(3).',
    obiterDicta:
      'The Court recommended the presence of a legal practitioner during police interrogation within hearing distance (without interfering with questioning) to safeguard against third-degree custodial methods.',
    relatedCases: [
      {
        judgmentId: 'selvi-2010',
        caseName: 'Selvi v. State of Karnataka',
        citation: '(2010) 7 SCC 263',
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
      'Defines the interface between Section 161(2) CrPC (s. 180(2) BNSS) and Article 20(3).',
      'Clarifies that "accused" under Art. 20(3) extends to suspects under police interrogation.',
      'Advocates lawyer presence during interrogation to eliminate custodial coercion.',
    ],
    mcqs: [
      {
        id: 'nandini-satpathy-mcq-1',
        question:
          'In Nandini Satpathy v. P.L. Dani (1978), the Supreme Court ruled that the right against self-incrimination under Article 20(3):',
        options: [
          'Applies only during examination of the accused in a court of law under Section 313 CrPC',
          'Extends to police questioning under Section 161 CrPC / Section 180 BNSS during investigation',
          'Is available only to foreign citizens',
          'Does not apply to corruption offenses',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held in Nandini Satpathy that Article 20(3) and Section 161(2) CrPC protect an accused or suspect from self-incrimination during police interrogation at the investigation stage.',
      },
    ],
  },
  {
    id: 'dc-wadhwa-1987',
    caseName: 'Dr. D.C. Wadhwa v. State of Bihar',
    shortName: 'D.C. Wadhwa',
    citation: '(1987) 1 SCC 378',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1987,
    bench: '5-Judge Constitution Bench',
    judges: ['P.N. Bhagwati, C.J.', 'Ranganath Misra, J.', 'V. Khalid, J.', 'G.L. Oza, J.', 'M.M. Dutt, J.'],
    subject: 'Constitutional Law',
    topics: ['Ordinance Raj', 'Article 213', 'Fraud on Constitution', 'Separation of Powers', 'Governor Powers'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 213', 'Ordinance', 'Colorable Legislation', 'Separation of Powers'],
    summary:
      'Constitution Bench precedent holding that the mechanical, successive re-promulgation of ordinances by the Governor without placing them before the state legislature is a subversion of the democratic legislative process and a colorable fraud on the Constitution under Article 213.',
    facts: [
      'Dr. D.C. Wadhwa, a professor of economics at the Gokhale Institute of Politics and Economics, conducted extensive empirical research revealing that the State of Bihar had governed via "Ordinance Raj".',
      'Between 1967 and 1981, the Governor of Bihar promulgated 256 ordinances which were kept alive for years through successive mechanical re-promulgations without ever being placed before or enacted by the Bihar State Legislature.',
      'Some ordinances were kept alive indefinitely for up to 14 years without legislative scrutiny.',
      'Dr. Wadhwa filed a public interest writ petition under Article 32 challenging the constitutional validity of this practice.',
    ],
    issues: [
      'Whether the petitioner had locus standi to challenge the practice of mechanical re-promulgation of ordinances.',
      'Whether the Governor has the constitutional power under Article 213 to repeatedly re-promulgate ordinances without introducing bills before the legislature, thereby bypassing democratic scrutiny.',
    ],
    arguments: {
      appellant: [
        'The State of Bihar substituted parliamentary governance with executive decrees through unconstitutional re-promulgation spanning over a decade.',
        'Successive re-promulgation bypasses legislative scrutiny and constitutes an abuse of Article 213.',
      ],
      respondent: [
        'The petitioner lacked locus standi as an academic researcher who suffered no personal injury.',
        'Ordinances were necessitated by administrative exigencies and legislative congestion.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-213',
        article: 'Article 213',
        title: 'Power of Governor to promulgate Ordinances during recess of Legislature',
        subjectSlug: 'constitution',
        topicId: 'art-213',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'executive-ordinance-pardon',
        title: 'Executive Powers: Ordinances & Pardoning',
        subjectSlug: 'constitution',
        topicId: 'executive-ordinance-pardon',
      },
    ],
    reasoning: [
      {
        heading: 'Emergency nature of ordinance-making power',
        explanation:
          'Bhagwati, C.J. held that the executive power to promulgate ordinances under Article 213 (and Article 123 for the President) is an extraordinary power conceived to deal with urgent situations when the legislature is not in session. It cannot be converted into an ordinary power of legislation or used to bypass the elected legislature.',
      },
      {
        heading: 'Colorable legislation and fraud on the Constitution',
        explanation:
          'Article 213(2) mandates that an ordinance must be laid before the legislative assembly and shall cease to operate after six weeks from reassembly. Mechanical re-promulgation without placing the ordinance before the legislature constitutes a colorable exercise of power and a fraud on the Constitution, subverting parliamentary democracy.',
      },
    ],
    decision:
      'Writ petition allowed. The Supreme Court held that the petitioner as a citizen had locus standi to challenge widespread constitutional subversion. Successive re-promulgation of ordinances without legislative enactment is a fraud on the Constitution and renders the re-promulgated ordinances void.',
    holding:
      'The power to make ordinances is an extraordinary power meant for urgent situations when the legislature is in recess. Successive re-promulgation without placing ordinances before the legislative assembly is colorable legislation and a patent fraud on the Constitution.',
    ratioDecidendi:
      'The executive power to promulgate ordinances under Article 213 is an emergency power conceived to deal with urgent situations when the legislature is not in session. It cannot be converted into an ordinary power of legislation. Mechanical re-promulgation without placing the ordinance before the legislature violates the constitutional mandate and constitutes a colorable exercise of power and a fraud on the Constitution.',
    obiterDicta:
      'The Court noted with regret that an ordinance raj of this magnitude was permitted to continue in Bihar, creating a parallel system of executive rule outside constitutional democracy.',
    relatedCases: [
      {
        judgmentId: 'sr-bommai-1994',
        caseName: 'S.R. Bommai v. Union of India',
        citation: '(1994) 3 SCC 1',
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
      'Establishes the anti-ordinance raj doctrine under Article 213 and Article 123.',
      'Defines colorable exercise of power and fraud on the Constitution in administrative/legislative law.',
      'Affirmed locus standi of citizens and academics to vindicate the rule of law via PIL.',
    ],
    mcqs: [
      {
        id: 'dc-wadhwa-mcq-1',
        question:
          'In Dr. D.C. Wadhwa v. State of Bihar (1987), the Supreme Court struck down the practice of:',
        options: [
          'Dismissing state governments under Article 356',
          'Mechanical re-promulgation of ordinances without placing them before the legislature',
          'Imposing judicial appointments through the collegium',
          'Levying sales tax on inter-state trade',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in D.C. Wadhwa held that repeated and mechanical re-promulgation of ordinances by the Governor without legislative enactment is a fraud on the Constitution.',
      },
    ],
  },
  {
    id: 'vineeta-sharma-2020',
    caseName: 'Vineeta Sharma v. Rakesh Sharma',
    shortName: 'Vineeta Sharma',
    citation: '(2020) 9 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2020,
    bench: '3-Judge Bench',
    judges: ['Arun Mishra, J.', 'S. Abdul Nazeer, J.', 'M.R. Shah, J.'],
    subject: 'Family Law',
    topics: ['Hindu Succession', 'Section 6 HSA', 'Coparcenary', 'Daughter Coparcener', 'Gender Justice'],
    tags: ['AIBE', 'Judiciary', 'Family Law', 'HSA', 'Coparcenary', 'Gender Equality', 'Section 6'],
    summary:
      'Historic 3-judge bench decision resolving conflicting precedents on the Hindu Succession (Amendment) Act, 2005. Held that daughters possess coparcenary rights under amended Section 6 by birth in their own right in the same manner as sons. The coparcenary right is retroactive; the living status of the coparcener father on September 9, 2005 is immaterial.',
    facts: [
      'Following the enactment of the Hindu Succession (Amendment) Act, 2005, which amended Section 6 to confer coparcenary status on daughters by birth, conflicting rulings emerged across high courts and two-judge benches of the Supreme Court.',
      'In Prakash v. Phulavati (2016), the Supreme Court held that the amended Section 6 applied prospectively and required both the coparcener father and daughter to be alive on September 9, 2005.',
      'In Danamma v. Amar (2018), another two-judge bench took the contrary view that daughters were entitled to coparcenary property even where the father had passed away before 2005.',
      'A reference was made to a 3-judge bench in Vineeta Sharma to authoritatively interpret the temporal operation of Section 6.',
    ],
    issues: [
      'Whether the Hindu Succession (Amendment) Act, 2005 has retroactive effect conferring coparcenary rights on daughters born prior to September 9, 2005.',
      'Whether the living status of the father coparcener on September 9, 2005 is a condition precedent for a daughter to claim coparcenary rights.',
      'What is the legal effect of an unregistered family settlement or oral partition effected prior to December 20, 2004.',
    ],
    arguments: {
      appellant: [
        'Section 6 confers rights by birth, and Parliament intended complete eradication of gender discrimination irrespective of the father date of death.',
        'Coparcenary is an unobstructed heritage acquired by birth and not by succession.',
      ],
      respondent: [
        'The 2005 amendment was prospective and could not reopen settled partitions or disturb vested rights where the father died prior to the amendment.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Hindu Succession Act, 1956',
        provisionId: 'hsa-s-6',
        section: 'Section 6',
        title: 'Devolution of interest in coparcenary property',
        subjectSlug: 'family',
        topicId: 'hsa-s-6',
      },
      {
        actId: 'family',
        actName: 'Family Law Principles',
        provisionId: 'hindu-joint-family',
        title: 'Mitakshara Joint Family & Coparcenary',
        subjectSlug: 'family',
        topicId: 'hindu-joint-family',
      },
    ],
    reasoning: [
      {
        heading: 'Coparcenary rights acquired by birth (unobstructed heritage)',
        explanation:
          'Arun Mishra, J. explained that coparcenary rights under Section 6 are acquired by birth (Apratibandha Daya / unobstructed heritage) and not upon the death of the father (Sapratibandha Daya / obstructed heritage). Since the right is by birth, the requirement that the father must be alive on 09.09.2005 is alien to Section 6.',
      },
      {
        heading: 'Retroactive application of Section 6 amendment',
        explanation:
          'The amendment operates retroactively because it applies from the date of the amendment while looking back to the antecedent event of birth. The fiction of notional partition under the unamended Act did not sever the coparcenary so as to bar daughters where no registered partition deed or final decree occurred prior to 20.12.2004.',
      },
    ],
    decision:
      'Reference answered in favour of coparcenary rights of daughters. Overruled Prakash v. Phulavati. The Supreme Court held that Section 6 confers coparcenary rights on daughters by birth. It is an unobstructed heritage; the father coparcener need not have been alive on September 9, 2005.',
    holding:
      'Daughters possess equal coparcenary rights from birth under Section 6 of the Hindu Succession Act, 1956. The father coparcener does not need to be alive on September 9, 2005 for the daughter to claim partition of coparcenary property.',
    ratioDecidendi:
      'The provisions contained in substituted Section 6 of the Hindu Succession Act, 1956 confer the status of coparcener on the daughter born before or after the amendment in the same manner as a son with the same rights and liabilities. Coparcenary rights are acquired by birth (unobstructed heritage) and not by survivorship or succession upon the death of the father. Therefore, the requirement that the father must be alive on the date of amendment (09.09.2005) is alien to Section 6.',
    obiterDicta:
      'Courts must ensure that the statutory mandate is not defeated by frivolous pleas of oral partition; oral partitions will only be recognized if supported by contemporaneous public documents and strict standard of proof.',
    relatedCases: [
      {
        judgmentId: 'shayara-bano-2017',
        caseName: 'Shayara Bano v. Union of India',
        citation: '(2017) 9 SCC 1',
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
      'Overruled Prakash v. Phulavati (2016) regarding father survival on 09.09.2005.',
      'Held coparcenary is an unobstructed heritage acquired by birth under Section 6(1).',
      'Clarified the high evidentiary threshold for proving oral partitions prior to 20.12.2004.',
    ],
    mcqs: [
      {
        id: 'vineeta-sharma-mcq-1',
        question:
          'In Vineeta Sharma v. Rakesh Sharma (2020), what was the Supreme Court ruling regarding the father coparcener living status under amended Section 6 of the HSA?',
        options: [
          'The father coparcener must have been alive on September 9, 2005',
          'The father coparcener need not be alive on September 9, 2005 for the daughter to claim coparcenary rights',
          'Daughters born before 2005 cannot claim coparcenary rights',
          'Only unmarried daughters can claim coparcenary rights',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the daughter acquires coparcenary rights by birth; hence the father coparcener need not be alive on September 9, 2005.',
      },
    ],
  },
  {
    id: 'central-inland-water-1986',
    caseName: 'Central Inland Water Transport Corp. Ltd. v. Brojo Nath Ganguly',
    shortName: 'Central Inland Water Transport',
    citation: '(1986) 3 SCC 156',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1986,
    bench: '2-Judge Bench',
    judges: ['D.P. Madon, J.', 'Manharlal Pranlal Thakkar, J.'],
    subject: 'Law of Contracts',
    topics: ['Unconscionable Contracts', 'Public Policy', 'Section 23 Contract Act', 'Bargaining Power', 'Article 14'],
    tags: ['AIBE', 'Judiciary', 'Contracts', 'Public Policy', 'Section 23', 'Article 14', 'Unconscionable Bargain'],
    summary:
      'Classic Supreme Court contract law precedent invalidating unconscionable employment contract terms. Held that standard form contracts permitting termination without reasons upon 3 months notice are opposed to public policy under Section 23 of the Indian Contract Act, 1872 and arbitrary under Article 14.',
    facts: [
      'Brojo Nath Ganguly and another employee were permanent employees of the Central Inland Water Transport Corporation Ltd., a Government of India undertaking.',
      'Rule 9(i) of the Corporation Service, Discipline and Appeal Rules of 1979 empowered the management to terminate the employment of any permanent employee by giving three months notice or three months basic pay in lieu of notice, without assigning any reasons or holding an inquiry.',
      'The Corporation invoked Rule 9(i) and issued letters terminating the services of the contesting respondents with three months pay in lieu of notice.',
      'The employees challenged the termination and the validity of Rule 9(i) before the Calcutta High Court under Article 226, which struck down the rule.',
      'The Corporation appealed to the Supreme Court.',
    ],
    issues: [
      'Whether a government corporation instrumentality of the State under Article 12 can enforce unconscionable terms in standard form employment contracts.',
      'Whether a contractual clause permitting arbitrary termination without inquiry or reasons is void under Section 23 of the Indian Contract Act as opposed to public policy.',
    ],
    arguments: {
      appellant: [
        'The employees signed service contracts willingly and are bound by their express terms under the doctrine of pacta sunt servanda.',
        'Commercial efficiency requires managerial flexibility to dispense with services without protracted inquiries.',
      ],
      respondent: [
        'Employees had zero bargaining power and faced economic duress in signing standard adhesion contracts.',
        'A hire-and-fire clause violates public policy and constitutional protections against arbitrary dismissal.',
      ],
    },
    provisions: [
      {
        actId: 'contract',
        actName: 'Indian Contract Act, 1872',
        provisionId: 'ica-s-23-25',
        section: 'Section 23',
        title: 'Lawful consideration and agreements opposed to public policy',
        subjectSlug: 'contract',
        topicId: 'ica-s-23-25',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Equality before law and anti-arbitrariness in public employment contracts',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Inequality of bargaining power and contracts of adhesion',
        explanation:
          'Madon, J. held that courts will strike down an unfair and unconscionable clause in a contract entered into between parties who are not equal in bargaining power. Where a person has no choice but to give his assent to a contract or go without employment, the contract cannot be said to be freely negotiated.',
      },
      {
        heading: 'Unconscionable terms opposed to public policy',
        explanation:
          'The concept of public policy under Section 23 of the Contract Act must reflect constitutional principles. A clause empowering arbitrary termination of permanent staff on 3 months notice is a "Henry VIII clause" that offends public policy and violates the rule against arbitrariness in Article 14.',
      },
    ],
    decision:
      'Appeals dismissed. Rule 9(i) held unconstitutional and void. The Supreme Court ruled that contractual clauses permitting arbitrary termination of permanent employees without cause violate Section 23 of the Contract Act and Article 14 of the Constitution.',
    holding:
      'A clause in a contract of employment entered into by a State instrumentality permitting termination of employment of a permanent employee on three months notice without assigning any reasons is unconscionable, void under Section 23 of the Contract Act, and violative of Article 14.',
    ratioDecidendi:
      'Courts will not enforce and will strike down an unfair and unconscionable clause in a contract entered into between parties who are not equal in bargaining power. Where a person has no choice but to give his assent to a contract or go without employment, the contract cannot be said to be freely negotiated. Such contracts of adhesion, entered into under economic duress, are opposed to public policy under Section 23 of the Indian Contract Act and arbitrary under Article 14.',
    obiterDicta:
      'The principle applies not only to employment contracts with the State but generally to commercial transactions where standard form contracts are imposed upon weaker parties having no bargaining leverage.',
    relatedCases: [
      {
        judgmentId: 'maneka-gandhi-1978',
        caseName: 'Maneka Gandhi v. Union of India',
        citation: '(1978) 1 SCC 248',
        relationship: 'harmonized',
      },
      {
        judgmentId: 'ep-royappa-1974',
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        citation: '(1974) 4 SCC 3',
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
      'Establishes the doctrine of unconscionability and inequality of bargaining power under Section 23 ICA.',
      'Demonstrates the constitutionalisation of contract law under Article 14.',
      'Distinguishes freely negotiated commercial bargains from contracts of adhesion.',
    ],
    mcqs: [
      {
        id: 'central-inland-mcq-1',
        question:
          'In Central Inland Water Transport Corp. v. Brojo Nath Ganguly (1986), a clause permitting termination of permanent employees on 3 months notice without reasons was struck down under:',
        options: [
          'Section 10 of the Specific Relief Act',
          'Section 23 of the Indian Contract Act and Article 14 of the Constitution',
          'Section 138 of the Negotiable Instruments Act',
          'Section 9 of the Code of Civil Procedure',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court struck down the termination clause as opposed to public policy under Section 23 of the Indian Contract Act and arbitrary under Article 14.',
      },
    ],
  },
  {
    id: 'gian-kaur-1996',
    caseName: 'Gian Kaur v. State of Punjab',
    shortName: 'Gian Kaur',
    citation: '(1996) 2 SCC 648',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate / Constitutional Jurisdiction',
    year: 1996,
    bench: '5-Judge Constitution Bench',
    judges: ['J.S. Verma, J.', 'G.N. Ray, J.', 'N.P. Singh, J.', 'Faizan Uddin, J.', 'G.T. Nanavati, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Right to Life', 'Right to Die', 'Article 21', 'Section 306 IPC', 'Section 309 IPC', 'Suicide'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Constitution', 'Article 21', 'Right to Life', 'Suicide'],
    summary:
      'Constitution Bench precedent holding that the "right to life" under Article 21 does not include the "right to die". Overruled P. Rathinam and upheld the constitutional validity of Sections 306 and 309 of the Indian Penal Code (abetment of suicide and attempt to commit suicide).',
    facts: [
      'Gian Kaur and her husband Harbans Singh were convicted under Section 306 IPC for abetting the suicide of their daughter-in-law, Kulwant Kaur.',
      'They appealed their conviction to the Supreme Court.',
      'During the pendency of the appeal, a two-judge bench in P. Rathinam v. Union of India (1994) struck down Section 309 IPC (attempt to commit suicide) as unconstitutional, holding that the right to live under Article 21 includes the right not to live or right to die.',
      'The appellants contended that if attempt to commit suicide is constitutionally protected, abetment of suicide under Section 306 IPC cannot survive as a penal offense.',
      'The matter was referred to a 5-judge Constitution Bench to reconsider the correctness of P. Rathinam.',
    ],
    issues: [
      'Whether the fundamental right to life guaranteed under Article 21 includes within its ambit the right to die or terminate life.',
      'Whether Section 306 IPC (abetment of suicide) and Section 309 IPC (attempt to commit suicide) are unconstitutional and violative of Articles 14 and 21.',
    ],
    arguments: {
      appellant: [
        'Suicide is an expression of personal autonomy under Article 21; the right to live naturally includes the right not to live.',
        'If attempt to suicide is decriminalized, abetment under Section 306 IPC cannot be punished.',
      ],
      respondent: [
        'Life is an inviolable constitutional value; Article 21 protects life and cannot be extended to self-destruction.',
        'Abetting vulnerable individuals to commit suicide is a grave social evil that the State must penalize.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 's-108',
        section: 'Section 108 (legacy s. 306 IPC)',
        title: 'Abetment of suicide',
        subjectSlug: 'bns',
        topicId: 's-108',
      },
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
        heading: 'Article 21 does not include right to die',
        explanation:
          'Verma, J. held that the "right to life" is a natural right inherent in human beings; extinction of life is not included in the concept of life. Unlike other fundamental rights where negative aspects are encompassed (such as freedom of speech including silence), life is a biological reality whose destruction cannot be derived from a right to protect it.',
      },
      {
        heading: 'Constitutionality of penalising abetment of suicide',
        explanation:
          'Suicide is the unnatural termination of life, whereas dying with dignity at the end of natural span is an aspect of life with dignity. Sections 306 and 309 IPC are valid criminal provisions and do not violate Articles 14 or 21.',
      },
    ],
    decision:
      'Conviction upheld and P. Rathinam overruled. The Constitution Bench held that Article 21 guarantees the sanctity of life and does not include the right to die. Sections 306 and 309 IPC are constitutionally valid.',
    holding:
      'Article 21 guarantees protection of life and personal liberty, which does not embrace the right to commit suicide or die. Section 306 and Section 309 of the Indian Penal Code are constitutionally valid.',
    ratioDecidendi:
      'The "right to life" under Article 21 is a natural right inherent in every human being; extinction of life is not included within the meaning of life. Article 21 protects life with dignity, and dying with dignity at the end of a natural life span cannot be equated with unnatural premature termination of life by suicide. Section 309 and Section 306 IPC do not violate Article 14 or 21.',
    obiterDicta:
      'The Court acknowledged that the right to live with human dignity up to the end of natural life may encompass a dying person process of dying with dignity, distinguishing passive withdrawal of life support from suicide.',
    relatedCases: [
      {
        judgmentId: 'aruna-shanbaug-2011',
        caseName: 'Aruna Ramchandra Shanbaug v. Union of India',
        citation: '(2011) 4 SCC 454',
        relationship: 'harmonized',
      },
      {
        judgmentId: 'common-cause-euthanasia-2018',
        caseName: 'Common Cause v. Union of India',
        citation: '(2018) 5 SCC 1',
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
      'Overruled P. Rathinam (1994) which had decriminalized attempt to commit suicide.',
      'Settled that Article 21 does NOT include the right to commit suicide or the right to die.',
      'Foundational starting point for the distinction between active suicide and passive euthanasia in Indian law.',
    ],
    mcqs: [
      {
        id: 'gian-kaur-mcq-1',
        question:
          'What did the Constitution Bench hold in Gian Kaur v. State of Punjab (1996) regarding the right to life under Article 21?',
        options: [
          'Right to life includes the right to die under all circumstances',
          'Right to life does not include the right to die, and Sections 306 and 309 IPC are constitutional',
          'Attempt to commit suicide is a fundamental right',
          'Active euthanasia is permissible without court approval',
        ],
        correctIndex: 1,
        explanation:
          'In Gian Kaur, the 5-judge bench held that Article 21 does not include the right to die and upheld the constitutionality of Section 306 and 309 IPC.',
      },
    ],
  },
  {
    id: 'machhi-singh-1983',
    caseName: 'Machhi Singh v. State of Punjab',
    shortName: 'Machhi Singh',
    citation: '(1983) 3 SCC 470',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1983,
    bench: '3-Judge Bench',
    judges: ['M.P. Thakkar, J.', 'Syed Murtaza Fazal Ali, J.', 'A. Varadarajan, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Death Penalty', 'Rarest of Rare', 'Capital Punishment', 'Sentencing Guidelines', 'Aggravating Circumstances'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'BNSS', 'Murder', 'Death Penalty', 'Rarest of Rare', 'Machhi Singh Guidelines'],
    summary:
      'Landmark 3-judge bench decision elaborating and standardizing the "rarest of rare" doctrine laid down in Bachan Singh. Formulated five comprehensive factual categories (manner, motive, anti-social nature, magnitude, and personality of victim) and the balance sheet test of aggravating vs. mitigating circumstances for capital punishment.',
    facts: [
      'Machhi Singh and eleven accomplices, motivated by an intense inter-village family feud, embarked on a nocturnal murderous rampage across three villages in Punjab.',
      'They invaded several houses and systematically slaughtered seventeen sleeping men, women, and children with firearms.',
      'The trial court and the High Court convicted Machhi Singh and multiple co-accused under Section 302/34 IPC and awarded the death penalty to several of them.',
      'The convicts appealed to the Supreme Court challenging the imposition of capital punishment in light of the recently enunciated Bachan Singh framework.',
    ],
    issues: [
      'How should trial and appellate courts apply the "rarest of rare" doctrine articulated in Bachan Singh v. State of Punjab.',
      'What are the concrete aggravating and mitigating guidelines for determining whether the alternative option of life imprisonment is unquestionably foreclosed.',
    ],
    arguments: {
      appellant: [
        'Death penalty is disproportionate and mitigating circumstances regarding family feud and lack of prior convictions favored life imprisonment.',
        'The death penalty should be commuted under the Bachan Singh doctrine as reform is possible.',
      ],
      respondent: [
        'Seventeen cold-blooded killings of defenceless villagers during sleep constituted a gruesome massacre shocking the conscience of the community.',
        'No mitigating circumstance could outweigh the heinousness of slaughtering entire families.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 103 (legacy s. 302 IPC)',
        title: 'Punishment for murder and rarest of rare sentencing',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 'charge-trial',
        title: 'Charge & Trial: Sentencing procedure',
        subjectSlug: 'bnss',
        topicId: 'charge-trial',
      },
    ],
    reasoning: [
      {
        heading: 'Five categories of rarest of rare murders',
        explanation:
          'Thakkar, J. catalogued five specific triggering categories: (1) Manner of commission (extremely brutal, grotesque, diabolical); (2) Motive (cold-blooded, mercenary, or communal depravity); (3) Anti-social nature (burning bride, mass killing of scheduled castes); (4) Magnitude of crime (multiple murders); and (5) Personality of victim (helpless child, frail elder, public figure).',
      },
      {
        heading: 'Balance sheet of aggravating and mitigating circumstances',
        explanation:
          'Courts must draw a balance sheet of aggravating and mitigating circumstances, giving full weightage to mitigating factors. The extreme penalty of death is warranted only when the option of life imprisonment is unquestionably foreclosed after balancing both sides.',
      },
    ],
    decision:
      'Death sentences of Machhi Singh and key conspirators confirmed; others commuted to life imprisonment. The Supreme Court laid down five specific categories of rarest of rare murders and prescribed the balance-sheet method for death penalty sentencing.',
    holding:
      'The imposition of capital punishment requires a two-step inquiry: first, whether the crime falls within the exceptional categories of rarest of rare cases; second, whether after balancing aggravating and mitigating circumstances, the alternative of life imprisonment is completely foreclosed.',
    ratioDecidendi:
      'The death penalty may be imposed only in the "rarest of rare" cases when the collective conscience of the community is so shocked that it will expect the holders of judicial power to inflict death. Courts must draw a balance sheet of aggravating and mitigating circumstances, giving full weightage to mitigating factors. Extreme penalty is warranted only when the option of life imprisonment is unquestionably foreclosed.',
    obiterDicta:
      'Sentencing judges must not succumb to emotional retributive zeal; community satisfaction is judged through the eyes of an objective, fair-minded citizen.',
    relatedCases: [
      {
        judgmentId: 'bachan-singh-1980',
        caseName: 'Bachan Singh v. State of Punjab',
        citation: '(1980) 2 SCC 684',
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
      'Synthesised Bachan Singh into the 5 famous Machhi Singh categories of rarest of rare murders.',
      'Formulated the balance-sheet test of aggravating versus mitigating circumstances.',
      'Crucial reference in every criminal law paper on capital punishment and Section 302 IPC / s. 103 BNS.',
    ],
    mcqs: [
      {
        id: 'machhi-singh-mcq-1',
        question:
          'Which landmark judgment elaborated the Bachan Singh "rarest of rare" doctrine into five specific categories and a balance-sheet test?',
        options: [
          'Machhi Singh v. State of Punjab (1983)',
          'Kehar Singh v. State (1988)',
          'Shabnam v. State of U.P. (2015)',
          'Bishnu Prasad v. State of Assam (2007)',
        ],
        correctIndex: 0,
        explanation:
          'Machhi Singh v. State of Punjab (1983) laid down the five distinct categories and the balance-sheet method for applying the rarest of rare doctrine.',
      },
    ],
  },
  {
    id: 'saroj-rani-1984',
    caseName: 'Saroj Rani v. Sudarshan Kumar Chadha',
    shortName: 'Saroj Rani',
    citation: '(1984) 4 SCC 90',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1984,
    bench: '2-Judge Bench',
    judges: ['Sabyasachi Mukharji, J.', 'Syed Murtaza Fazal Ali, J.'],
    subject: 'Family Law',
    topics: ['Restitution of Conjugal Rights', 'Section 9 HMA', 'Article 21', 'Privacy', 'T. Sareetha'],
    tags: ['AIBE', 'Judiciary', 'Family Law', 'HMA', 'Restitution', 'Article 21', 'Section 9'],
    summary:
      'Supreme Court precedent upholding the constitutional validity of Section 9 of the Hindu Marriage Act, 1955 (Restitution of Conjugal Rights). Overruled the Andhra Pradesh High Court decision in T. Sareetha and approved the Delhi High Court view in Harvinder Kaur, holding that Section 9 aims to preserve the matrimonial home and does not violate Articles 14 or 21.',
    facts: [
      'Saroj Rani married Sudarshan Kumar Chadha in 1975 according to Hindu rites; two daughters were born from the wedlock.',
      'The husband ill-treated and turned the wife out of the matrimonial home in 1977 and refused to cohabit with her.',
      'The wife filed a petition for restitution of conjugal rights under Section 9 of the Hindu Marriage Act, 1955, and an ex-parte decree was passed in her favour.',
      'The husband failed to comply with the decree for over one year and then filed a petition for divorce under Section 13(1-A)(ii) of the Act on the ground of non-resumption of cohabitation.',
      'The wife challenged the maintainability of the petition and alleged collusion and taking advantage of his own wrong (Section 23(1)(a)).',
      'The appeal brought into direct issue the constitutional validity of Section 9 itself in light of conflicting rulings between T. Sareetha (AP HC) and Harvinder Kaur (Delhi HC).',
    ],
    issues: [
      'Whether Section 9 of the Hindu Marriage Act (Restitution of Conjugal Rights) violates the constitutional right to privacy and human dignity under Article 21 and equality under Article 14.',
      'Whether a spouse who suffers a decree of restitution of conjugal rights and willfully refuses to cohabit can obtain divorce under Section 13(1-A)(ii) without violating Section 23(1)(a).',
    ],
    arguments: {
      appellant: [
        'The husband engineered the Section 9 decree to obtain a quick divorce, taking advantage of his own wrong under Section 23(1)(a).',
        'Section 9 should not become a backdoor mechanism for easy divorce by defaulting husbands.',
      ],
      respondent: [
        'After one year of non-resumption of cohabitation, either spouse has a statutory right to seek divorce under Section 13(1-A)(ii).',
        'Section 9 is valid and promotes marital reconciliation without violating privacy.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Hindu Marriage Act, 1955',
        provisionId: 'hma-s-9',
        section: 'Section 9',
        title: 'Restitution of conjugal rights',
        subjectSlug: 'family',
        topicId: 'hma-s-9',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to privacy and personal dignity in marriage',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Social purpose of Section 9 and marital consortium',
        explanation:
          'Mukharji, J. observed that the primary purpose of Section 9 is cohabitation and reconciliation between spouses, aiming to prevent the breakup of marriage. A decree for restitution is not enforced by physical compulsion or bodily detention (Order XXI Rule 32 CPC provides only for attachment of property).',
      },
      {
        heading: 'Execution of decree without physical compulsion',
        explanation:
          'The Court held that over-introduction of constitutional law into matrimonial relations is inappropriate. Section 9 does not force sexual intercourse; it requires living together under the matrimonial roof. Overruled T. Sareetha and approved the Delhi High Court reasoning in Harvinder Kaur.',
      },
    ],
    decision:
      'Section 9 upheld as constitutional. Overruled T. Sareetha and approved Harvinder Kaur. The decree of divorce granted to the husband was affirmed subject to payment of maintenance and alimony to the wife and daughters.',
    holding:
      'Section 9 of the Hindu Marriage Act is constitutionally valid and does not violate Articles 14 or 21. It serves the legitimate social objective of preserving the institution of marriage through consensual reconciliation.',
    ratioDecidendi:
      'Section 9 of the Hindu Marriage Act, 1955 does not violate Article 14 or Article 21 of the Constitution. The primary object of the remedy of restitution of conjugal rights is cohabitation and reconciliation between spouses. A decree for restitution is not enforced by physical compulsion or detention. Marriage is a partnership with reciprocal consortium obligations, and Section 9 is gender-neutral.',
    obiterDicta:
      'While upholding Section 9, courts must remain vigilant that a recalcitrant spouse does not obtain a Section 9 decree as a mere stepping stone to secure a swift divorce under Section 13(1-A).',
    relatedCases: [
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
      'Overruled T. Sareetha v. T. Venkata Subbaiah (AIR 1983 AP 356).',
      'Affirmed Harvinder Kaur v. Harmander Singh (AIR 1984 Del 66).',
      'Defines the constitutional balance between spousal consortium rights and personal liberty.',
    ],
    mcqs: [
      {
        id: 'saroj-rani-mcq-1',
        question:
          'In Saroj Rani v. Sudarshan Kumar Chadha (1984), the Supreme Court upheld the constitutional validity of Section 9 of the Hindu Marriage Act by overruling which High Court decision?',
        options: [
          'T. Sareetha v. T. Venkata Subbaiah (Andhra Pradesh HC)',
          'Harvinder Kaur v. Harmander Singh (Delhi HC)',
          'Bhaurao Lokhande v. State of Maharashtra (Bombay HC)',
          'Dastane v. Dastane (Bombay HC)',
        ],
        correctIndex: 0,
        explanation:
          'The Supreme Court in Saroj Rani overruled the Andhra Pradesh High Court judgment in T. Sareetha, which had struck down Section 9 as violative of Article 21.',
      },
    ],
  },
  {
    id: 'bhaurao-lokhande-1965',
    caseName: 'Bhaurao Shankar Lokhande v. State of Maharashtra',
    shortName: 'Bhaurao Lokhande',
    citation: 'AIR 1965 SC 1564',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1965,
    bench: '3-Judge Bench',
    judges: ['K.N. Wanchoo, J.', 'J.R. Mudholkar, J.', 'R.S. Bachawat, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Bigamy', 'Section 494 IPC', 'Saptapadi', 'Essential Ceremonies', 'Hindu Marriage Act'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Family Law', 'Bigamy', 'Section 494', 'Marriage Ceremonies'],
    summary:
      'Foundational 3-judge bench ruling on the law of bigamy under Section 494 IPC (s. 82 BNS). Held that the word "marries" in Section 494 means solemnizing a marriage with valid essential customary or statutory rites and ceremonies (such as Saptapadi and Kanyadan). An incomplete ceremony does not constitute marriage in law and cannot sustain a conviction for bigamy.',
    facts: [
      'Bhaurao Shankar Lokhande married his first wife Indubai in 1956 according to Hindu rites and ceremonies.',
      'While Indubai was still living and the marriage subsisted, Bhaurao allegedly contracted a second marriage with Kamlabai in February 1962.',
      'Indubai filed a criminal complaint against Bhaurao and his relatives alleging bigamy under Section 494 IPC read with Section 114 IPC.',
      'The evidence produced at trial revealed that while some rituals (Gandharva form) were performed, essential customary ceremonies—specifically Saptapadi (seven steps before the sacred fire) and Kanyadan—were not performed.',
      'The trial court and the Sessions Court convicted the accused; the Bombay High Court dismissed their revision.',
      'The accused appealed to the Supreme Court.',
    ],
    issues: [
      'Whether a conviction under Section 494 IPC for bigamy can be sustained if the second marriage was not solemnized with the essential customary rites and ceremonies required by personal law.',
      'What is the meaning of the expression "marries" within the scheme of Section 494 of the Indian Penal Code.',
    ],
    arguments: {
      appellant: [
        'Without proving Saptapadi and essential Vedic or customary rites, no second marriage came into legal existence.',
        'Penal law requires strict proof of every ingredient, including valid solemnization of marriage.',
      ],
      respondent: [
        'The parties intended to marry and celebrated rituals in the presence of relatives, which is sufficient for Section 494.',
        'Technical defects in rites should not allow bigamists to escape criminal punishment.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 's-82',
        section: 'Section 82 (legacy s. 494 IPC)',
        title: 'Marrying again during lifetime of husband or wife (Bigamy)',
        subjectSlug: 'bns',
        topicId: 's-82',
      },
      {
        actId: 'family',
        actName: 'Hindu Marriage Act, 1955',
        provisionId: 'hma-s-5',
        section: 'Sections 5 & 7',
        title: 'Conditions and ceremonies for a Hindu marriage (Saptapadi)',
        subjectSlug: 'family',
        topicId: 'hma-s-5',
      },
    ],
    reasoning: [
      {
        heading: 'Strict proof of marriage solemnization under Section 494 IPC',
        explanation:
          'Mudholkar, J. held that the word "marries" in Section 494 IPC means marrying in accordance with law or solemnizing a marriage. A marriage is not solemnized unless it is celebrated with proper and essential ceremonies. Mere performance of some rites without complying with essential ceremonies does not create marriage.',
      },
      {
        heading: 'Essentiality of Saptapadi and statutory ceremonies',
        explanation:
          'Under Section 7(2) of the Hindu Marriage Act, 1955, where rites include Saptapadi, the marriage becomes complete and binding only when the seventh step is taken before the sacred fire. If the alleged second marriage is defective in essential rites, it is not a marriage in law, and no conviction for bigamy can lie.',
      },
    ],
    decision:
      'Appeals allowed and convictions set aside. The Supreme Court held that unless the second marriage is shown to have been validly solemnized in accordance with applicable customary rites or Section 7 of the Hindu Marriage Act, no offence under Section 494 IPC is committed.',
    holding:
      'A prosecution for bigamy under Section 494 IPC fails if the complainant does not establish that the second marriage was celebrated with essential rites (including Saptapadi where applicable). An incomplete marriage ritual cannot be deemed a marriage for penal liability.',
    ratioDecidendi:
      'The word "marries" in Section 494 IPC means marrying in accordance with law or solemnizing a marriage. A marriage is not solemnized unless it is celebrated with the proper and essential ceremonies and in due form. Mere performance of certain peripheral rites without complying with the essential requirements recognized by law or custom (such as Saptapadi under Section 7(2) of the Hindu Marriage Act) does not create the legal relationship of husband and wife.',
    obiterDicta:
      'The Court recognized that strict adherence to ceremonial proof might enable clever offenders to evade bigamy convictions, but penal statutes must be construed strictly without expanding definitions.',
    relatedCases: [
      {
        judgmentId: 'sarla-mudgal-1995',
        caseName: 'Sarla Mudgal v. Union of India',
        citation: '(1995) 3 SCC 635',
        relationship: 'harmonized',
      },
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
      'Establishes the strict requirement of proving essential ceremonies (Saptapadi) to secure a conviction under Section 494 IPC / s. 82 BNS.',
      'Distinguishes mere intention or cohabitation from legal solemnization of marriage.',
      'Standard question in LLB, AIBE, and Judicial Services examinations on criminal/family law interface.',
    ],
    mcqs: [
      {
        id: 'bhaurao-lokhande-mcq-1',
        question:
          'In Bhaurao Shankar Lokhande v. State of Maharashtra (1965), the Supreme Court ruled that for an offence of bigamy under Section 494 IPC:',
        options: [
          'Proof of mere intention and cohabitation is sufficient to convict',
          'The second marriage must be validly solemnized with essential ceremonies such as Saptapadi',
          'No ceremonies need to be proved if the parties exchange garlands',
          'Bigamy is an offence only if children are born from the second marriage',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the word "marries" in Section 494 IPC means celebrating a marriage with essential customary or statutory ceremonies; without them, no offence of bigamy is committed.',
      },
    ],
  },
  {
    id: 'ima-vp-shantha-1995',
    caseName: 'Indian Medical Association v. V.P. Shantha',
    shortName: 'IMA v. V.P. Shantha',
    citation: '(1995) 6 SCC 651',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1995,
    bench: '3-Judge Bench',
    judges: ['Kuldip Singh, J.', 'S.C. Agrawal, J.', 'B.L. Hansaria, J.'],
    subject: 'Law of Torts',
    topics: ['Medical Negligence', 'Consumer Protection', 'Service', 'Contract for Services', 'Tortious Liability'],
    tags: ['AIBE', 'Judiciary', 'Torts', 'Negligence', 'Consumer Protection', 'Medical Negligence', 'Service'],
    summary:
      'Seminal 3-judge bench ruling bringing the medical profession within the ambit of consumer law. Held that medical services rendered by doctors and private/public hospitals for consideration constitute a "service" under Section 2(1)(o) of the Consumer Protection Act, 1986 (Consumer Protection Act, 2019). Only free services rendered in government hospitals without any charge to anyone are excluded.',
    facts: [
      'Various consumer forums across the country entertained complaints alleging medical negligence and deficiency of service against medical practitioners, nursing homes, and hospitals.',
      'The Indian Medical Association (IMA) challenged the jurisdiction of consumer forums, contending that the medical profession involves a contract of personal service and is regulated exclusively by statutory councils (Medical Council of India) and civil courts.',
      'High courts delivered conflicting rulings: the Madras High Court held that medical services fall under the Consumer Protection Act, while others took narrower views.',
      'The IMA and other medical bodies appealed to the Supreme Court to authoritatively determine whether medical treatment is a "service" under consumer law.',
    ],
    issues: [
      'Whether medical services rendered by medical practitioners, nursing homes, and hospitals fall within the definition of "service" under Section 2(1)(o) of the Consumer Protection Act.',
      'Whether the relationship between a doctor and a patient constitutes a "contract of personal service" which is specifically excluded from Section 2(1)(o).',
      'What are the liability categories regarding free medical treatment vs paid medical treatment in private and public hospitals.',
    ],
    arguments: {
      appellant: [
        'Medicine is a noble profession governed by medical ethics and MCI disciplinary committees, not a commercial commodity for consumer litigation.',
        'A doctor-patient relationship is a contract of personal service based on mutual trust, excluded from the Act.',
      ],
      respondent: [
        'Patients paying fees are consumers of medical expertise and deserve expeditious redressal for surgical and diagnostic blunders.',
        'Civil suits are too expensive and protracted for ordinary victims of medical negligence.',
      ],
    },
    provisions: [
      {
        actId: 'tort',
        actName: 'Law of Torts Principles',
        provisionId: 'negligence',
        title: 'Negligence, Standard of Care & Medical Negligence',
        subjectSlug: 'tort',
        topicId: 'negligence',
      },
      {
        actId: 'tort',
        actName: 'Consumer Protection Act, 2019',
        provisionId: 'consumer',
        title: 'Deficiency in Service and Redressal of Grievances',
        subjectSlug: 'tort',
        topicId: 'consumer',
      },
    ],
    reasoning: [
      {
        heading: 'Contract for services versus contract of personal service',
        explanation:
          'Agrawal, J. clarified that a "contract of personal service" implies master-servant control, which does not exist when a patient consults an independent doctor. The doctor-patient contract is a "contract for services" (independent professional relationship) and is included within Section 2(1)(o).',
      },
      {
        heading: 'Three categories of medical establishments',
        explanation:
          'The Court categorized medical establishments: (1) Service rendered free of charge to everyone (pure charity/government hospital) is excluded; (2) Service rendered for consideration to all is included; and (3) Establishments where some pay and others are treated free: here, the service rendered even to non-paying patients is covered, as paying patients subsidize the institution.',
      },
    ],
    decision:
      'Appeals disposed of. The Supreme Court held that medical professionals and hospitals render "service" within the meaning of Section 2(1)(o) of the Consumer Protection Act. Deficient medical treatment and negligence are actionable before Consumer Redressal Forums.',
    holding:
      'Medical professionals, hospitals, and nursing homes providing medical consultation, diagnosis, and treatment for consideration are subject to the Consumer Protection Act. Patients can claim compensation for medical negligence before consumer commissions.',
    ratioDecidendi:
      'The definition of "service" in Section 2(1)(o) of the Consumer Protection Act is wide and covers service of any description made available to potential users. A contract between a medical practitioner and a patient is a "contract for services", not a "contract of personal service". Medical services rendered for consideration fall squarely within the Act.',
    obiterDicta:
      'The Court cautioned consumer commissions that frivolous complaints against doctors should not be entertained without prima facie expert evidence, respecting the complex nature of medical decisions.',
    relatedCases: [
      {
        judgmentId: 'jacob-mathew-2005',
        caseName: 'Jacob Mathew v. State of Punjab',
        citation: '(2005) 6 SCC 1',
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
      'Brought doctors, nursing homes, and hospitals within the Consumer Protection Act.',
      'Distinguished between "contract for services" (included) and "contract of personal service" (excluded).',
      'Classified medical services into three categories based on payment and subsidised care.',
    ],
    mcqs: [
      {
        id: 'ima-vp-shantha-mcq-1',
        question:
          'In Indian Medical Association v. V.P. Shantha (1995), the Supreme Court classified the doctor-patient relationship as a:',
        options: [
          'Contract of personal service (excluded from Consumer Protection Act)',
          'Contract for services (included within Consumer Protection Act)',
          'Non-justiciable spiritual compact',
          'Strict liability bailment',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the doctor-patient contract is a "contract for services" and not a "contract of personal service", thereby bringing paid medical treatment under the Consumer Protection Act.',
      },
    ],
  },
]
