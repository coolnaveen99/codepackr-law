import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_15B: Judgment[] = [
  {
    id: 'all-india-judges-1992',
    caseName: 'All India Judges Assn. (I) v. Union of India',
    shortName: 'All India Judges Association (I)',
    citation: '(1992) 1 SCC 119',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1992,
    bench: '3-Judge Bench',
    judges: ['Ranganath Misra, C.J.', 'P.B. Sawant, J.', 'K. Ramaswamy, J.'],
    subject: 'Constitutional Law',
    topics: ['Subordinate Judiciary', 'Judicial Independence', 'Uniform Pay & Service', 'Article 235', 'Shetty Commission'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 235', 'Judicial Independence', 'Shetty Commission', 'Service Law'],
    summary:
      'Historic 3-judge bench decision recognizing the subordinate judiciary as an independent constitutional organ distinct from executive civil services. Mandated uniform working conditions, raised retirement age to 60 years, ordered residential accommodation, and directed the establishment of the National Judicial Pay Commission (Shetty Commission).',
    facts: [
      'The All India Judges Association filed a writ petition under Article 32 highlighting the deplorable working conditions, inadequate salaries, lack of official housing, and absence of uniform service rules for judicial officers across different States.',
      'The Union of India and various State Governments opposed the petition, arguing that service conditions of civil servants are within exclusive legislative and executive domain under Article 309.',
    ],
    issues: [
      'Whether the judiciary is an independent organ of the State or merely a branch of public administrative services under Article 309.',
      'Whether the Supreme Court under Article 32 can issue mandamus to State Governments to provide uniform pay, housing, and library facilities to judges.',
    ],
    arguments: {
      appellant: [
        'Judges are not mere government servants; their role is constitutional adjudication. Disparate, impoverished conditions compromise the independence of the subordinate judiciary.',
      ],
      respondent: [
        'Pay scales and service conditions are purely policy matters for executive pay commissions and state legislatures.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Articles 50, 233, 234 & 235',
        title: 'Separation of judiciary and control over subordinate courts',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Judges are not comparable to executive civil servants',
        explanation:
          'Misra, C.J. held that the judiciary is an independent pillar of democracy. Unlike executive officers who have wide bureaucratic discretion, judges function in open court, bound by statutory law, and can have no other source of livelihood or commercial interest. They cannot be equated with executive civil servants.',
      },
      {
        heading: 'Judicial independence requires financial security',
        explanation:
          'A judicial officer who is worried about housing, basic transport, or retirement security is vulnerable to external pressures. Uniform service conditions and realistic emoluments are integral to judicial independence under Article 50 and the Basic Structure doctrine.',
      },
    ],
    decision:
      'Writ petition allowed. Directions issued to all States to raise retirement age to 60, provide official housing, official transport, library allowances, and establish an All India Judicial Service.',
    holding:
      'Subordinate judiciary is an independent constitutional organ. Supreme Court directed nationwide uniform service conditions and raised retirement age.',
    ratioDecidendi:
      'The subordinate judiciary is not a mere civil service but an integral part of the independent judicial branch of the State. Independence of the judiciary under Article 50 encompasses financial security and dignified service conditions for subordinate judicial officers, which the Supreme Court can enforce under Article 32.',
    obiterDicta:
      'The real face of the judicial system for the common citizen is the trial court; if the trial bench is impoverished, justice itself decays.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Pioneering case establishing the constitutional distinctiveness of the subordinate judiciary.',
      'Led to the constitution of the First National Judicial Pay Commission (Shetty Commission).',
      'Raised judicial retirement age from 58 to 60 years.',
    ],
    mcqs: [
      {
        id: 'all-india-judges-mcq-1',
        question:
          'In All India Judges Assn. (I) v. Union of India (1992), what did the Supreme Court hold regarding the status of the subordinate judiciary?',
        options: [
          'They are ordinary civil servants governed strictly by Article 309',
          'They are an independent constitutional organ distinct from executive services',
          'They have no right to official housing or library allowances',
          'They are employees of the respective High Court Registrars',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court ruled that judges are not executive civil servants but members of an independent constitutional branch.',
      },
    ],
  },
  {
    id: 'common-cause-satish-sharma-1996',
    caseName: 'Common Cause v. Union of India (Capt. Satish Sharma Case)',
    shortName: 'Capt. Satish Sharma (Ministerial Quota Abuse)',
    citation: '(1996) 6 SCC 530',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1996,
    bench: '2-Judge Bench',
    judges: ['Kuldip Singh, J.', 'Faizan Uddin, J.'],
    subject: 'Administrative Law',
    topics: ['Public Trust Doctrine', 'Abuse of Discretion', 'Misfeasance in Public Office', 'Exemplary Damages'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Article 14', 'Public Trust', 'Exemplary Damages', 'Corruption'],
    summary:
      'Landmark public law ruling on misfeasance in public office and the abuse of ministerial discretion. Struck down the arbitrary allotment of 15 petrol pumps and gas agencies by the Union Minister of Petroleum out of his discretionary quota to his relatives, friends, and political associates as a fraud on power, imposing exemplary damages of Rs. 50 Lakh on the Minister personally.',
    facts: [
      'Capt. Satish Sharma, the Union Minister for Petroleum and Natural Gas, made discretionary allotments of 15 retail petrol pumps and LPG distributorships.',
      'The beneficiaries included the wife of his personal secretary, sons of ministers, and political cronies, without issuing public tenders or following any objective criteria.',
      'The consumer organization Common Cause filed a PIL under Article 32 challenging the allotments as corrupt nepotism.',
    ],
    issues: [
      'Whether a Minister holds public property as a trustee of the people, subject to fiduciary obligations.',
      'Can exemplary damages be imposed personally on a Minister for misfeasance in public office.',
    ],
    arguments: {
      appellant: [
        'Discretionary ministerial quotas cannot be treated as personal private gifts; public assets must be distributed transparently under Article 14.',
      ],
      respondent: [
        'The Minister exercised executive discretion under guidelines to assist deserving persons; no personal malice was proved.',
      ],
    },
    provisions: [
      {
        actId: 'admin-law',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-judicial-review',
        title: 'Fiduciary duty of public servants and tort of misfeasance in public office',
        subjectSlug: 'admin',
        topicId: 'admin-judicial-review',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Non-arbitrariness in distribution of state largesse',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Public office is a public trust',
        explanation:
          'Kuldip Singh, J. held that a Minister is a high constitutional functionary who holds state property as a trustee of the nation. Discretionary quotas cannot be distributed to friends and relatives. Arbitrary distribution of state largesse is a flagrant violation of Article 14.',
      },
      {
        heading: 'Tort of misfeasance in public office and exemplary damages',
        explanation:
          'Where a public official acts maliciously or in deliberate abuse of statutory powers to confer wrongful gains, the tort of misfeasance in public office is committed. The Court cancelled all 15 allotments and directed the Minister to pay exemplary damages of Rs. 50 Lakh to the public exchequer.',
      },
    ],
    decision:
      'Writ petition allowed. All 15 discretionary allotments cancelled. Exemplary damages of Rs. 50 Lakh imposed on Capt. Satish Sharma. (Note: Damages order reviewed later in 1999, but substantive law on public trust affirmed).',
    holding:
      'Ministers hold public assets as trustees. Discretionary allotment of state property to friends/relatives is ultra vires Article 14.',
    ratioDecidendi:
      'A Minister of State is a public trustee of government property. The allocation of valuable public largesse such as fuel dealerships cannot be made on personal whims or political favoritism. Any arbitrary exercise of ministerial discretion is void under Article 14 and constitutes misfeasance in public office.',
    obiterDicta:
      'In a democracy governed by the rule of law, no public official is above the law or immune from accountability for plundering public resources.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Pioneered the tort of misfeasance in public office in Indian administrative law.',
      'Affirmed the public trust doctrine regarding ministerial discretionary quotas.',
      'Allotment of state largesse must comply with Article 14 non-arbitrariness.',
    ],
    mcqs: [
      {
        id: 'satish-sharma-mcq-1',
        question:
          'In Common Cause v. Union of India (Capt. Satish Sharma Case) (1996), what principle governed the Minister control over state assets?',
        options: [
          'Absolute crown prerogative',
          'Public trust doctrine',
          'Sovereign immunity under Article 300',
          'Absolute executive privilege under Section 123 Evidence Act',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that a Minister holds public property as a trustee under the public trust doctrine, bound by Article 14.',
      },
    ],
  },
  {
    id: 'cbi-vc-shukla-1998',
    caseName: 'Central Bureau of Investigation v. V.C. Shukla (Hawala Diaries Case)',
    shortName: 'Jain Hawala Case (Section 34 Evidence Act)',
    citation: '(1998) 3 SCC 410',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1998,
    bench: '3-Judge Bench',
    judges: ['M.K. Mukherjee, J.', 'S.P. Kurdukar, J.', 'K.T. Thomas, J.'],
    subject: 'Law of Evidence',
    topics: ['Books of Account', 'Section 34 Evidence Act', 'Corroboration', 'Loose Sheets of Paper', 'Section 28 BSA'],
    tags: ['AIBE', 'Judiciary', 'Evidence', 'Section 34', 'BSA 28', 'Hawala Diaries', 'Corroboration', 'Criminal Law'],
    summary:
      'Classic Supreme Court precedent on the evidentiary value of entries in books of account under Section 34 of the Evidence Act (now Section 28 BSA). Held that loose sheets of paper or spiral notebooks containing informal diary entries are not "books of account regularly kept in the course of business", and even if admissible, entries alone cannot fix criminal liability without independent corroborative evidence.',
    facts: [
      'The CBI raided the premises of hawala broker S.K. Jain and seized spiral notebooks and loose files containing cryptic handwritten initials with cash amounts alongside names of prominent politicians (including L.K. Advani and V.C. Shukla).',
      'The CBI filed chargesheets under the Prevention of Corruption Act alleging receipt of kickbacks.',
      'The Delhi High Court discharged the accused on the ground that the diary entries were inadmissible and uncorroborated.',
      'The CBI appealed to the Supreme Court.',
    ],
    issues: [
      'Whether spiral notebooks and loose sheets of paper constitute "books of account regularly kept in the course of business" under Section 34 of the Indian Evidence Act.',
      'Can an accused be convicted solely on the basis of entries in account books without independent evidence of actual money transfer.',
    ],
    arguments: {
      appellant: [
        'The diaries recorded systematic, contemporaneous financial transactions in the course of hawala business and were admissible under Section 34.',
      ],
      respondent: [
        'A book must have permanence and binding; loose sheets or spiral pads can be easily inserted or manipulated. Section 34 expressly bars liability without independent corroboration.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 's-28',
        section: 'Section 34 IEA / Section 28 BSA',
        title: 'Entries in books of account, including electronic records, when relevant',
        subjectSlug: 'bsa',
        topicId: 's-28',
      },
    ],
    reasoning: [
      {
        heading: 'Definition of "book" and "regularly kept"',
        explanation:
          'Mukherjee, J. held that a "book" signifies a collection of sheets bound together with permanence. Spiral notebooks or loose sheets are not books of account. Furthermore, to be admissible, accounts must be maintained regularly in accordance with a recognized system of bookkeeping.',
      },
      {
        heading: 'Mandatory statutory requirement of corroboration',
        explanation:
          'Section 34 explicitly states: "such statements shall not alone be sufficient evidence to charge any person with liability." Even assuming the diaries were admissible, no criminal charge or conviction can stand without independent, extrinsic evidence proving that the money was actually paid and received.',
      },
    ],
    decision:
      'Appeals dismissed. Discharge of V.C. Shukla and L.K. Advani upheld due to lack of independent corroborative evidence.',
    holding:
      'Loose sheets and spiral diaries are not books of account under Section 34 Evidence Act. Entries alone cannot fasten liability without independent corroboration.',
    ratioDecidendi:
      'Under Section 34 of the Indian Evidence Act (Section 28 BSA), entries in books of account are relevant only if contained in a permanent, bound record regularly kept in the ordinary course of business. In any event, such entries alone are insufficient to charge any person with liability in the absence of independent evidence proving the underlying transaction.',
    obiterDicta:
      'Cryptic diary notations containing mere initials without corroborative money trail cannot sustain a criminal indictment.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Core precedent for Section 34 Evidence Act (now Section 28 BSA).',
      'Distinction between regular books of account and loose sheets/spiral diaries.',
      'Mandatory requirement of independent corroboration for financial liability.',
    ],
    mcqs: [
      {
        id: 'cbi-vc-shukla-mcq-1',
        question:
          'In CBI v. V.C. Shukla (1998), what was held regarding criminal liability based solely on entries in books of account under Section 34 Evidence Act?',
        options: [
          'Entries are conclusive proof of guilt',
          'Entries alone are not sufficient evidence to fasten liability without corroboration',
          'Entries in spiral pads are automatically presumed genuine',
          'Section 34 applies only to civil suits',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that under Section 34 Evidence Act, entries alone are not sufficient to fasten liability without independent corroborative evidence.',
      },
    ],
  },
  {
    id: 'damu-evidence-2000',
    caseName: 'State of Maharashtra v. Damu',
    shortName: 'State of Maharashtra v. Damu (Section 27 Recovery)',
    citation: '(2000) 6 SCC 269',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2000,
    bench: '2-Judge Bench',
    judges: ['K.T. Thomas, J.', 'D.P. Mohapatra, J.'],
    subject: 'Law of Evidence',
    topics: ['Section 27 Evidence Act', 'Discovery of Fact', 'Recovery of Dead Body', 'Section 23 BSA'],
    tags: ['AIBE', 'Judiciary', 'Evidence', 'Section 27', 'BSA 23', 'Discovery', 'Circumstantial Evidence'],
    summary:
      'Authoritative Supreme Court ruling on the interpretation of "discovery of fact" under Section 27 of the Evidence Act (now Section 23 BSA). Clarified that the "fact discovered" is not merely the physical object produced, but the place from which it is produced and the accused knowledge of that place.',
    facts: [
      'The accused were tried for the abduction, human sacrifice, and murder of young children in a village in Maharashtra.',
      'During investigation, accused Damu made a confessional disclosure statement to the police stating that the dead body of a victim child was thrown into a canal after being carried on a motorcycle.',
      'Pursuant to his information, the police recovered the mutilated dead body of the child from the canal bed.',
      'The High Court acquitted the accused on the ground that the disclosure statement was inadmissible confession to a police officer.',
      'The State appealed to the Supreme Court.',
    ],
    issues: [
      'What constitutes a "fact discovered" in consequence of information received from an accused under Section 27 Evidence Act.',
      'Whether discovery of a dead body at the instance of an accused can be linked with other circumstantial evidence to sustain conviction.',
    ],
    arguments: {
      appellant: [
        'The discovery of the dead body from an obscure canal was made solely pursuant to the accused disclosure; under Section 27, this information is admissible as direct confirmation of truth.',
      ],
      respondent: [
        'The confession to police is barred under Sections 25 and 26; the canal was accessible to the general public.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'admissions-confessions',
        section: 'Section 27 IEA / Section 23 BSA',
        title: 'How much of information received from accused may be proved (Discovery of Fact)',
        subjectSlug: 'bsa',
        topicId: 'admissions-confessions',
      },
    ],
    reasoning: [
      {
        heading: 'The true meaning of "fact discovered"',
        explanation:
          'K.T. Thomas, J. reaffirmed the Privy Council dictum in Pulukuri Kottaya: The "fact discovered" within the meaning of Section 27 is not the physical object alone. It embraces the place from which the object was produced and the accused knowledge of its concealment, which is confirmed by the physical recovery.',
      },
      {
        heading: 'Chain of circumstantial evidence complete',
        explanation:
          'The disclosure of the location where the dead body was submerged, coupled with bloodstains on the motorcycle matching the victim blood group, formed an unbreakable chain of circumstantial evidence leaving no doubt of guilt.',
      },
    ],
    decision:
      'State appeal allowed. High Court acquittal reversed; conviction and life sentence under Section 302/201 IPC restored against accused.',
    holding:
      'Fact discovered under Section 27 Evidence Act includes the place of concealment and the accused mental knowledge of that location.',
    ratioDecidendi:
      'Under Section 27 of the Indian Evidence Act (Section 23 BSA), the "fact discovered" in consequence of information received from an accused in custody is not just the physical article recovered, but the location where it was hidden and the accused personal knowledge of that place, which is conclusively authenticated by the discovery.',
    obiterDicta:
      'The rationale of Section 27 rests upon the doctrine of confirmation by subsequent facts, which guarantees the trustworthiness of that specific part of the confession.',
    relatedCases: [
      {
        caseName: 'Pulukuri Kottaya v. Emperor',
        citation: 'AIR 1947 PC 67',
        relationship: 'applied',
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
      'Modern reaffirmation of Pulukuri Kottaya principles on Section 27 Evidence Act.',
      'Definition of "fact discovered" under Section 27 (Section 23 BSA).',
      'Interplay of disclosure statements with forensic corroboration.',
    ],
    mcqs: [
      {
        id: 'damu-mcq-1',
        question:
          'In State of Maharashtra v. Damu (2000), what does the "fact discovered" under Section 27 Evidence Act signify?',
        options: [
          'The physical object recovered only',
          'The place of concealment and the accused knowledge of that place',
          'The entire confessional statement to police',
          'The motive of the crime',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that the fact discovered embraces the place from which the object is produced and the accused knowledge of that place.',
      },
    ],
  },
  {
    id: 'mehboob-shah-1945',
    caseName: 'Mehboob Shah v. Emperor (Indus River Case)',
    shortName: 'Mehboob Shah (Common Intention)',
    citation: '(1945) 47 BOMLR 941',
    court: 'Privy Council',
    jurisdiction: 'Privy Council Criminal Appeal',
    year: 1945,
    bench: 'Privy Council Judicial Committee',
    judges: ['Sir Madhavan Nair', 'Lord Thankerton', 'Sir John Beaumont'],
    subject: 'Criminal Law',
    topics: ['Common Intention', 'Section 34 IPC', 'Similar Intention Distinguished', 'Section 3(5) BNS'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 34', 'BNS 3(5)', 'Common Intention', 'Similar Intention', 'Joint Liability'],
    summary:
      'Locus classicus on the fundamental distinction between "common intention" and "same or similar intention" under Section 34 IPC (now Section 3(5) BNS). Established that common intention requires a pre-arranged plan or prior concert and meeting of minds, whereas similar intentions entertained independently by multiple persons cannot attract joint liability under Section 34.',
    facts: [
      'Allah Dad and others were bathing and collecting reeds on the banks of the Indus River.',
      'A dispute arose with Ghulam Quasim, who called out for help.',
      'Hearing the cries, Mehboob Shah (armed with a small shotgun) and Wali Shah (armed with a rifle) arrived simultaneously from behind the bushes.',
      'Both fired their weapons: Wali Shah shot and killed Allah Dad on the spot, while Mehboob Shah shot Hamidullah, injuring him in the leg.',
      'Wali Shah absconded. The Sessions Court and Lahore High Court convicted Mehboob Shah of the murder of Allah Dad with the aid of Section 34 IPC.',
      'Mehboob Shah appealed to the Privy Council.',
    ],
    issues: [
      'Whether Mehboob Shah shared a common intention with Wali Shah to murder Allah Dad under Section 34 IPC.',
      'What is the legal difference between "common intention" and "same or similar intention" in criminal law.',
    ],
    arguments: {
      appellant: [
        'Mehboob Shah and Wali Shah arrived on the spur of the moment without any prior meeting of minds; each shot at a different person independently.',
      ],
      respondent: [
        'Both arrived armed together to rescue their kinsman and fired simultaneously; common intention must be inferred from joint conduct.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 's-152',
        section: 'Section 34 IPC / Section 3(5) BNS',
        title: 'Acts done by several persons in furtherance of common intention',
        subjectSlug: 'bns',
      },
    ],
    reasoning: [
      {
        heading: 'Common intention requires pre-arranged plan',
        explanation:
          'Sir Madhavan Nair held: "Section 34 lays down a principle of joint liability in the doing of a criminal act. The essence of that liability is to be found in the existence of a common intention animating the accused leading to the doing of the criminal act in furtherance of such intention. To invoke Section 34 successfully, it must be shown that the criminal act was done in concert pursuant to a pre-arranged plan."',
      },
      {
        heading: 'Distinction between common and similar intention',
        explanation:
          'Care must be taken not to confuse the same or similar intention with the common intention. Several persons may simultaneously entertain the same intention to attack without sharing a prior concert or meeting of minds. Mehboob Shah shot at Hamidullah, but there was no evidence he shared a common intention with Wali Shah to kill Allah Dad.',
      },
    ],
    decision:
      'Appeal allowed. Murder conviction of Mehboob Shah under Section 302/34 IPC set aside; convicted only for his individual act of causing hurt to Hamidullah under Section 307 IPC.',
    holding:
      'Common intention requires a prior meeting of minds and pre-arranged plan. Same or similar intention does not attract Section 34 joint liability.',
    ratioDecidendi:
      'To attract joint liability under Section 34 IPC (Section 3(5) BNS), there must be a common intention involving a pre-arranged plan, prior concert, or instantaneous meeting of minds. A mere same or similar intention entertained independently by different accused at the same time does not satisfy the requirements of Section 34.',
    obiterDicta:
      'Common intention may develop on the spot during the incident, but there must still be an established meeting of minds before the act is done.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://privycouncil.org',
      verified: true,
      title: 'Privy Council Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The foundational authority distinguishing common intention from similar intention.',
      'Interpretation of Section 34 IPC (Section 3(5) BNS).',
      'Requirement of pre-arranged plan and meeting of minds.',
    ],
    mcqs: [
      {
        id: 'mehboob-shah-mcq-1',
        question:
          'In Mehboob Shah v. Emperor (1945), what key legal distinction was established by the Privy Council under Section 34 IPC?',
        options: [
          'Between intention and motive',
          'Between common intention and same or similar intention',
          'Between culpable homicide and murder',
          'Between abetment and conspiracy',
        ],
        correctIndex: 1,
        explanation:
          'The Privy Council established the classic distinction between "common intention" (prior concert) and "same or similar intention" (independent minds).',
      },
    ],
  },
  {
    id: 'barendra-kumar-ghosh-1925',
    caseName: 'Barendra Kumar Ghosh v. Emperor (Post Office Case)',
    shortName: 'Barendra Kumar Ghosh (Post Office Case)',
    citation: 'AIR 1925 PC 1',
    court: 'Privy Council',
    jurisdiction: 'Privy Council Criminal Appeal',
    year: 1925,
    bench: 'Privy Council Judicial Committee',
    judges: ['Lord Sumner', 'Lord Atkinson', 'Sir John Edge'],
    subject: 'Criminal Law',
    topics: ['Joint Liability', 'Section 34 IPC', 'Participation in Criminal Act', 'Lord Sumner Dictum'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 34', 'BNS 3(5)', 'Post Office Case', 'Joint Liability', 'Lord Sumner'],
    summary:
      'The supreme landmark judgment on constructive liability under Section 34 of the Indian Penal Code (now Section 3(5) BNS). Established Lord Sumner immortal principle: "They also serve who only stand and wait." Held that where several persons share a common intention to commit a robbery and one of them fires the fatal shot while another stands guard at the door, all are equally guilty of murder.',
    facts: [
      'Three men entered the Sankaritola Post Office in Calcutta and demanded money from the Sub-Postmaster Amrita Lal Dey as he was counting cash.',
      'When the Postmaster refused, all three men fired pistols, and the Postmaster died on the spot.',
      'The robbers fled without taking the cash.',
      'The appellant, Barendra Kumar Ghosh, was chased and captured with a loaded pistol in his hand.',
      'He contended that he was merely standing outside on the verandah as a guard, did not enter the room, and did not fire the fatal shot.',
      'The Calcutta High Court convicted him of murder under Section 302 read with Section 34 IPC.',
    ],
    issues: [
      'Whether a person who only stands guard outside while his companions commit murder inside is liable for murder under Section 34 IPC.',
      'What is the meaning of "a criminal act is done by several persons" in Section 34.',
    ],
    arguments: {
      appellant: [
        'Section 34 requires that each person must physically participate in the actual act of killing; mere presence outside without shooting is not doing the criminal act.',
      ],
      respondent: [
        'The criminal act is the entire joint transaction of robbery-murder; standing guard facilitates the crime and constitutes active participation in furtherance of common intention.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 's-152',
        section: 'Section 34 IPC / Section 3(5) BNS',
        title: 'Constructive liability and active participation in criminal act',
        subjectSlug: 'bns',
      },
    ],
    reasoning: [
      {
        heading: 'The entire criminal transaction is the "criminal act"',
        explanation:
          'Lord Sumner held that "criminal act" in Section 34 means the entire criminal transaction or enterprise undertaken jointly. The section does not require that each accused must deliver a blow or fire a weapon.',
      },
      {
        heading: '"They also serve who only stand and wait"',
        explanation:
          'Lord Sumner pronounced his legendary dictum: "Section 34 deals with the doing of separate acts, similar or diverse, by several persons; if all are done in furtherance of a common intention, each person is liable for the result of them all, as if he had done them himself... Even if the appellant did nothing as he stood outside the door, it is to be remembered that in crimes as in other things: They also serve who only stand and wait."',
      },
    ],
    decision:
      'Appeal dismissed. Conviction and death sentence of Barendra Kumar Ghosh under Section 302/34 IPC confirmed.',
    holding:
      'Standing guard outside while confederates commit murder inside makes the guard equally liable for murder under Section 34 IPC.',
    ratioDecidendi:
      'Under Section 34 IPC (Section 3(5) BNS), when a criminal act is done by several persons in furtherance of the common intention of all, each participant is liable for the entire resulting crime as if done by him alone. Active participation does not require committing the overt lethal act; standing guard outside to facilitate commission or prevent alarm satisfies Section 34.',
    obiterDicta:
      'The physical presence of the accused at the scene of the crime is the cornerstone of Section 34 joint liability.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://privycouncil.org',
      verified: true,
      title: 'Privy Council Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The foundational case for Section 34 IPC constructive liability.',
      'Famous Lord Sumner aphorism: "They also serve who only stand and wait."',
      'Establishes that physical presence and role of look-out/guard satisfies Section 34.',
    ],
    mcqs: [
      {
        id: 'barendra-ghosh-mcq-1',
        question:
          'Which famous judicial aphorism did Lord Sumner articulate in Barendra Kumar Ghosh v. Emperor (1925)?',
        options: [
          'Ignorance of law is no excuse',
          'They also serve who only stand and wait',
          'Let justice be done though the heavens fall',
          'The king can do no wrong',
        ],
        correctIndex: 1,
        explanation:
          'Lord Sumner famously observed: "They also serve who only stand and wait" to describe the constructive liability of a guard under Section 34 IPC.',
      },
    ],
  },
  {
    id: 'virsa-singh-1958',
    caseName: 'Virsa Singh v. State of Punjab',
    shortName: 'Virsa Singh (Section 300 3rdly)',
    citation: '1958 AIR 465',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1958,
    bench: '3-Judge Bench',
    judges: ['P.B. Gajendragadkar, J.', 'Vivian Bose, J.', 'A.K. Sarkar, J.'],
    subject: 'Criminal Law',
    topics: ['Murder', 'Section 300 Clause 3', 'Bodily Injury Sufficient to Cause Death', 'Section 101 BNS'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 300', 'BNS 101', 'Virsa Singh', 'Vivian Bose', 'Murder'],
    summary:
      'The foundational 3-judge bench decision authored by Justice Vivian Bose formulating the four-step test for Section 300 Clause 3 IPC (now Section 101 BNS). Held that the prosecution must prove the bodily injury was intentionally inflicted and not accidental, and that the injury inflicted was objectively sufficient in the ordinary course of nature to cause death; the accused subjective intent to cause death is completely unnecessary under Clause 3.',
    facts: [
      'During a scuffle between two factions in a Punjab village, Virsa Singh thrust a spear into the abdomen of the deceased Khem Singh.',
      'The spear pierced through the peritoneum, causing three coils of the intestine to protrude, resulting in peritonitis and death.',
      'The doctor testified that the abdominal wound was sufficient in the ordinary course of nature to cause death.',
      'Virsa Singh was convicted of murder under Section 302 IPC. In appeal, he contended that he had no intention to cause death, and that only a single blow was struck during a sudden quarrel.',
    ],
    issues: [
      'What are the mandatory ingredients that the prosecution must prove to establish murder under Section 300 Clause 3 IPC.',
      'Is it necessary for the prosecution to prove that the accused intended to cause death, or intended to cause an injury of the severity that resulted.',
    ],
    arguments: {
      appellant: [
        'The appellant struck only a single spear blow without premeditation; he had no intention to kill Khem Singh.',
      ],
      respondent: [
        'The thrust was intentionally directed at the vulnerable abdomen, and the resulting injury was medically sufficient in the ordinary course of nature to cause death.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 300 Clause 3 IPC / Section 101 BNS',
        title: 'Murder: Intended bodily injury sufficient in the ordinary course of nature to cause death',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
    ],
    reasoning: [
      {
        heading: 'Justice Vivian Bose four-step test for Section 300 Clause 3',
        explanation:
          'Vivian Bose, J. laid down the classic four ingredients: (1) First, it must establish, quite objectively, that a bodily injury is present; (2) Secondly, the nature of the injury must be proved; (3) Thirdly, it must be proved that there was an intention to inflict that particular bodily injury, that is to say, that it was not accidental or unintentional; (4) Fourthly, it must be proved that the injury of the type just described is sufficient in the ordinary course of nature to cause death.',
      },
      {
        heading: 'Subjective intent to cause death is irrelevant',
        explanation:
          'Once the physical injury is intentionally inflicted and is objectively sufficient in the ordinary course of nature to cause death, Section 300 Clause 3 is satisfied. It does not matter that the accused did not intend to cause death or did not realize that the injury would prove fatal.',
      },
    ],
    decision:
      'Appeal dismissed. Conviction and sentence of life imprisonment under Section 302 IPC confirmed.',
    holding:
      'Under Section 300 Clause 3, prosecution must prove intentional infliction of bodily injury that is objectively sufficient in ordinary course of nature to cause death.',
    ratioDecidendi:
      'Under Section 300 Clause 3 IPC (Section 101 BNS), to convict for murder, the prosecution need only prove that the accused intended to inflict that particular bodily injury (i.e., not accidental) and that the injury so inflicted was objectively sufficient in the ordinary course of nature to cause death. It is entirely unnecessary to prove an intention to cause death or knowledge that death was likely.',
    obiterDicta:
      'The law does not permit an assailant who deliberately thrusts a spear into a vital organ to plead that he did not intend the medical consequences of his act.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The four-part Vivian Bose test for Section 300 Clause 3 IPC (Section 101 BNS).',
      'Distinction between subjective intention to inflict injury and objective medical sufficiency.',
      'Single blow with a lethal weapon on a vital part suffices for Section 302.',
    ],
    mcqs: [
      {
        id: 'virsa-singh-mcq-1',
        question:
          'In Virsa Singh v. State of Punjab (1958), what did Justice Vivian Bose hold regarding Section 300 Clause 3 IPC?',
        options: [
          'Prosecution must prove the accused specifically intended to cause death',
          'Prosecution must prove the injury was intentional and objectively sufficient in the ordinary course of nature to cause death',
          'A single blow can never amount to murder',
          'Spears are excluded from deadly weapons',
        ],
        correctIndex: 1,
        explanation:
          'Justice Vivian Bose formulated the rule that the injury must be intentionally inflicted and objectively sufficient in the ordinary course of nature to cause death.',
      },
    ],
  },
  {
    id: 'deepak-mahajan-1994',
    caseName: 'Directorate of Enforcement v. Deepak Mahajan',
    shortName: 'Deepak Mahajan (Section 167 Remand)',
    citation: '(1994) 3 SCC 440',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1994,
    bench: '2-Judge Bench',
    judges: ['S. Ratnavel Pandian, J.', 'K. Ramaswamy, J.'],
    subject: 'Criminal Procedure / Special Acts',
    topics: ['Section 167 CrPC Remand', 'Arrest by Customs/FERA', 'Judicial Custody', 'Special Laws'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 167', 'BNSS 187', 'FERA', 'Customs', 'Remand', 'Arrest'],
    summary:
      'Landmark Supreme Court decision on the applicability of Section 167 CrPC (now Section 187 BNSS) to special statutes like FERA and the Customs Act. Held that a Magistrate has the statutory power to remand an arrested person to judicial custody under Section 167(2) CrPC when produced by an authorized officer of the Enforcement Directorate or Customs, even though such officers are not police officers.',
    facts: [
      'Deepak Mahajan was arrested by officers of the Enforcement Directorate under Section 35 of the Foreign Exchange Regulation Act (FERA), 1973.',
      'He was produced before the Chief Metropolitan Magistrate, Delhi, with a request for judicial remand under Section 167 CrPC.',
      'The Full Bench of the Delhi High Court held that Section 167 CrPC applies strictly to arrests made by "police officers" under Chapter XII CrPC, and that a Magistrate has no power to remand an arrestee produced by Customs or FERA officers under Section 167.',
      'The Enforcement Directorate appealed to the Supreme Court.',
    ],
    issues: [
      'Whether a Magistrate has jurisdiction under Section 167(2) CrPC to remand a person arrested by an authorized officer under FERA or the Customs Act.',
      'Whether the expression "arrested and detained in custody" in Section 167(1) applies only to police arrests or extends to arrests under special enactments.',
    ],
    arguments: {
      appellant: [
        'Section 4(2) CrPC provides that all offences under special laws shall be investigated and inquired into according to CrPC provisions subject to special statutes. If Section 167 does not apply, the Magistrate would be forced to release every economic offender on production.',
      ],
      respondent: [
        'FERA officers are not police officers, do not file police reports under Section 173, and cannot invoke police remand provisions.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'arrest',
        section: 'Section 167 CrPC / Section 187 BNSS',
        title: 'Procedure when investigation cannot be completed in 24 hours — Power of Remand',
        subjectSlug: 'bnss',
        topicId: 'arrest',
      },
    ],
    reasoning: [
      {
        heading: 'Purposive interpretation of Section 167 CrPC',
        explanation:
          'Ratnavel Pandian, J. held that procedural law must be construed harmoniously to advance justice. The power of remand under Section 167 is intended to enable the investigating agency to complete investigation while safeguarding the liberty of the individual under judicial scrutiny.',
      },
      {
        heading: 'Magistrate power to remand non-police arrestees',
        explanation:
          'The words "arrested and detained in custody" in Section 167(1) must be read with Section 4(2) CrPC. When a person arrested under FERA or Customs is produced before a Magistrate in compliance with Article 22(2), the Magistrate has full jurisdiction to remand him to judicial custody under Section 167(2).',
      },
    ],
    decision:
      'Appeal allowed. Delhi High Court Full Bench judgment set aside; held that Magistrates possess jurisdiction to remand FERA/Customs arrestees to custody under Section 167(2) CrPC.',
    holding:
      'Magistrate has power under Section 167(2) CrPC to remand persons arrested under FERA or Customs Act to judicial custody.',
    ratioDecidendi:
      'Under Section 167(2) CrPC read with Section 4(2) CrPC, a Judicial Magistrate has the statutory jurisdiction to remand a person arrested by an officer of the Enforcement Directorate or Customs under special enactments to custody (judicial custody), even though the arresting officer is not a police officer.',
    obiterDicta:
      'To hold otherwise would create an absurd statutory vacuum, rendering constitutional production under Article 22(2) an empty ritual.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Scope of Section 167 CrPC (now Section 187 BNSS) across special statutes.',
      'Application of remand powers to arrests by ED, Customs, and FERA/FEMA.',
      'Harmonization of Section 4(2) CrPC with special enactments.',
    ],
    mcqs: [
      {
        id: 'deepak-mahajan-mcq-1',
        question:
          'In Directorate of Enforcement v. Deepak Mahajan (1994), what did the Supreme Court hold regarding Section 167 CrPC?',
        options: [
          'It applies strictly only to police investigations under IPC',
          'A Magistrate has power to remand persons arrested by ED or Customs under Section 167(2)',
          'Customs officers have the power of police remand',
          'Arrests under special statutes do not require production before a Magistrate',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that Magistrates have the power under Section 167(2) CrPC to remand persons arrested by ED or Customs officers to judicial custody.',
      },
    ],
  },
  {
    id: 'singhara-singh-1964',
    caseName: 'State of U.P. v. Singhara Singh',
    shortName: 'Singhara Singh (Section 164 CrPC Rule)',
    citation: 'AIR 1964 SC 358',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1964,
    bench: '3-Judge Bench',
    judges: ['A.K. Sarkar, J.', 'M. Hidayatullah, J.', 'J.R. Mudholkar, J.'],
    subject: 'Criminal Procedure / Evidence',
    topics: ['Section 164 CrPC Confessions', 'Taylor v. Taylor Principle', 'Oral Evidence of Magistrate', 'Mandatory Procedure'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 164', 'BNSS 183', 'Evidence', 'Taylor v. Taylor', 'Confession'],
    summary:
      'Classic Supreme Court ruling incorporating the English principle of Taylor v. Taylor into Indian procedural jurisprudence. Held that where a power is given to do a certain thing in a certain way, the thing must be done in that way or not at all, and other methods of performance are necessarily forbidden. Consequently, oral evidence of a Magistrate is inadmissible to prove a confession not recorded in compliance with Section 164 CrPC.',
    facts: [
      'Singhara Singh was prosecuted for the murder of an Assistant Station Master at a railway station.',
      'During investigation, a Second Class Magistrate not specially empowered by the State Government under Section 164 CrPC recorded the confession of the accused.',
      'At trial, realizing the Magistrate lacked statutory empowerment under Section 164, the prosecution produced the Magistrate as a witness to give oral evidence of the confession under Sections 17, 21, and 29 of the Evidence Act.',
      'The trial court convicted the accused, but the High Court held the oral evidence inadmissible and acquitted him.',
      'The State appealed to the Supreme Court.',
    ],
    issues: [
      'Can a confession not recorded in conformity with Section 164 CrPC be proved by oral testimony of the recording Magistrate.',
      'What is the scope of the rule in Taylor v. Taylor in criminal procedure.',
    ],
    arguments: {
      appellant: [
        'An oral admission of guilt made to a Magistrate is relevant under the Indian Evidence Act; procedural irregularities are cured by Section 533 CrPC.',
      ],
      respondent: [
        'Section 164 is a mandatory procedural safeguard; permitting oral confessions to Magistrates bypasses the solemn statutory cautions and destroys the accused safeguards.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 164 CrPC / Section 183 BNSS',
        title: 'Recording of confessions and statements by Magistrate',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Application of the Taylor v. Taylor doctrine',
        explanation:
          'Sarkar, J. adopted the principle laid down in Taylor v. Taylor (1875) and Nazir Ahmad (1936): "Where a power is given to do a certain thing in a certain way, the thing must be done in that way or not at all and that other methods of performance are necessarily forbidden."',
      },
      {
        heading: 'Oral evidence of confession completely barred',
        explanation:
          'Section 164 CrPC prescribes a solemn statutory procedure for recording confessions with mandatory warnings that the accused is not bound to confess. If oral evidence of unrecorded or improperly recorded confessions were permitted, the entire protection granted by Section 164 would be rendered completely illusory.',
      },
    ],
    decision:
      'Appeal dismissed. Acquittal upheld. Oral evidence of Magistrate regarding the confession held inadmissible.',
    holding:
      'Where a power is given to do a thing in a certain way, it must be done in that way or not at all. Oral evidence cannot prove a confession recorded in breach of Section 164 CrPC.',
    ratioDecidendi:
      'Where a statute confers a power on a public authority to do a specific act in a prescribed manner (such as recording a confession under Section 164 CrPC), it must be done in that manner or not at all; all other modes of performance are impliedly excluded. Oral evidence of a Magistrate is wholly inadmissible to prove a confession recorded without statutory authority.',
    obiterDicta:
      'The rule in Taylor v. Taylor is a fundamental pillar of administrative law and criminal procedure preventing unauthorized shortcuts.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The definitive Indian judgment applying the Taylor v. Taylor rule.',
      'Mandatory nature of Section 164 CrPC (now Section 183 BNSS).',
      'Inadmissibility of oral evidence to cure jurisdictional defects in recording confessions.',
    ],
    mcqs: [
      {
        id: 'singhara-singh-mcq-1',
        question:
          'Which classic legal principle was applied in State of U.P. v. Singhara Singh (1964) regarding Section 164 CrPC?',
        options: [
          'Res judicata pro veritate accipitur',
          'Where a power is given to do a thing in a certain way, it must be done in that way or not at all',
          'Nemo debet bis vexari pro una et eadem causa',
          'Audi alteram partem',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court applied the Taylor v. Taylor rule that where a power is given to do a thing in a certain way, it must be done in that way or not at all.',
      },
    ],
  },
  {
    id: 'state-of-tn-nalini-1999',
    caseName: 'State of Tamil Nadu through Supdt. of Police v. Nalini',
    shortName: 'Nalini (Rajiv Gandhi Assassination)',
    citation: '(1999) 5 SCC 253',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1999,
    bench: '3-Judge Bench',
    judges: ['K.T. Thomas, J.', 'D.P. Wadhwa, J.', 'Syed Shah Mohammed Quadri, J.'],
    subject: 'Criminal Law',
    topics: ['Criminal Conspiracy', 'Section 120B IPC', 'TADA Confessions', 'Death Penalty Confirmation'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 120B', 'BNS 61', 'Conspiracy', 'Rajiv Gandhi', 'Death Penalty'],
    summary:
      'Monumental 3-judge bench decision on the law of criminal conspiracy under Section 120B IPC (now Section 61 BNS) and the evidentiary value of confessions under Section 15 of TADA. Arising out of the assassination of former Prime Minister Rajiv Gandhi by an LTTE suicide bomber, the Court laid down an exhaustive codification of the ingredients, agreement, and admissibility of conspiracy.',
    facts: [
      'Former Prime Minister Rajiv Gandhi was assassinated by an LTTE female human suicide bomber (Dhanu) at an election rally in Sriperumbudur, Tamil Nadu, killing 18 persons.',
      '26 accused persons, including Nalini, Santhan, Murugan, and Perarivalan, were tried by the TADA Designated Court, which convicted all 26 of murder, terrorism, and conspiracy and sentenced all 26 to death.',
      'Appeals and death sentence references were heard by a 3-judge bench of the Supreme Court.',
    ],
    issues: [
      'What are the mandatory proving ingredients of criminal conspiracy under Section 120B IPC.',
      'Can an accused be held guilty of murder conspiracy if they agreed to a lesser crime without knowing the target was the assassination of a former Prime Minister.',
      'Whether the confession of a co-accused under Section 15 TADA is substantive evidence against other co-conspirators.',
    ],
    arguments: {
      appellant: [
        'The accused merely provided shelter or printed literature without knowing that a human suicide bomb plot was planned against Rajiv Gandhi.',
      ],
      respondent: [
        'All accused were active parts of an integrated criminal conspiracy; knowledge and agreement can be inferred from surrounding circumstances.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 's-152',
        section: 'Section 120A & 120B IPC / Section 61 BNS',
        title: 'Definition and punishment of criminal conspiracy',
        subjectSlug: 'bns',
      },
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'admissions-confessions',
        section: 'Section 10 IEA / Section 8 BSA',
        title: 'Things said or done by conspirator in reference to common design',
        subjectSlug: 'bsa',
        topicId: 'admissions-confessions',
      },
    ],
    reasoning: [
      {
        heading: 'Codification of criminal conspiracy principles',
        explanation:
          'Thomas, J. and Wadhwa, J. laid down principles: (1) An agreement between two or more persons to commit an illegal act is the nexus of conspiracy; (2) The conspiracy agreement is hatched in secrecy and direct proof is rarely available; (3) It is not necessary that every conspirator should participate in every stage or know every detail; (4) However, there must be conscious agreement on the common objective. Those who merely harbored bombers without knowing the target could not be convicted of the murder conspiracy.',
      },
      {
        heading: 'Sentencing differentiation',
        explanation:
          'The Court acquitted all accused of TADA terrorism charges (as the motive was not to terrorize the public but revenge against the IPKF). Upheld murder conviction; confirmed death sentence for only 4 accused (Nalini, Santhan, Murugan, Arivu), commuting or releasing 19 others.',
      },
    ],
    decision:
      'TADA terrorism charges set aside. Death sentence confirmed for 4 convicts (Nalini sentence later commuted by Governor), 3 sentenced to life imprisonment, remaining accused acquitted of conspiracy.',
    holding:
      'Criminal conspiracy requires conscious agreement on the common criminal object. Knowledge of the conspiracy objective is indispensable for conviction under Section 120B.',
    ratioDecidendi:
      'Under Section 120B IPC (Section 61 BNS), the essence of criminal conspiracy is the unlawful agreement. While each co-conspirator need not know all details or participate in every act, there must be a common understanding and meeting of minds regarding the ultimate criminal purpose; mere association, assistance, or harboring without knowledge of the conspiracy object does not make one a co-conspirator.',
    obiterDicta:
      'The death penalty must be reserved strictly for the rarest of rare masterminds and direct operational perpetrators, not peripheral helpers.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Comprehensive textbook authority on Section 120B IPC (Section 61 BNS) criminal conspiracy.',
      'Interpretation of Section 10 Indian Evidence Act (Section 8 BSA).',
      'Distinction between peripheral abettors and core conspirators.',
    ],
    mcqs: [
      {
        id: 'nalini-mcq-1',
        question:
          'In State of Tamil Nadu v. Nalini (1999), what is the indispensable essence of criminal conspiracy under Section 120B IPC?',
        options: [
          'Commission of the overt criminal act',
          'The unlawful agreement and meeting of minds',
          'The receipt of money or reward',
          'Presence at the scene of the crime',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that the essence of criminal conspiracy under Section 120B IPC is the unlawful agreement and meeting of minds.',
      },
    ],
  },
  {
    id: 'sher-singh-1983',
    caseName: 'Sher Singh v. State of Punjab',
    shortName: 'Sher Singh (Death Row Delay)',
    citation: '(1983) 2 SCC 344',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1983,
    bench: '3-Judge Bench',
    judges: ['Y.V. Chandrachud, C.J.', 'V.D. Tulzapurkar, J.', 'A. Varadarajan, J.'],
    subject: 'Constitutional Law',
    topics: ['Death Penalty Delay', 'Article 21', 'Commutation of Sentence', 'Two-Year Rule Rejected'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Death Penalty', 'Inordinate Delay', 'Commutation', 'Mercy Petition'],
    summary:
      'Significant 3-judge bench decision on capital punishment and delayed execution under Article 21. Disagreed with the 2-year delay rule laid down by Justice Chinnappa Reddy in T.V. Vatheeswaran, holding that inordinate delay in executing a death sentence does not automatically entitle the condemned prisoner to commutation to life imprisonment, and that the cause of delay must be examined.',
    facts: [
      'Condemned prisoners on death row in Punjab filed writ petitions under Article 32 contending that their executions had been delayed for over two years after final conviction.',
      'They relied on the 2-judge bench judgment in T.V. Vatheeswaran v. State of Tamil Nadu (1983), which held that delay exceeding two years in executing a death sentence automatically violates Article 21, entitling the prisoner to life commutation.',
      'The 3-judge bench led by Chief Justice Chandrachud reconsidered the rigid two-year rule.',
    ],
    issues: [
      'Does inordinate delay in the execution of a death sentence automatically violate Article 21.',
      'Is there an absolute fixed mathematical time limit (such as 2 years) beyond which a death sentence cannot be executed.',
    ],
    arguments: {
      appellant: [
        'Prolonged solitary confinement on death row facing the agony of the gallows is cruel and unusual punishment violating Article 21.',
      ],
      respondent: [
        'Convicts frequently manufacture delays through repetitive, frivolous petitions; a fixed 2-year rule would enable convicts to buy their lives through dilatory tactics.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Protection of life and personal liberty against cruel and inhuman delay',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Rejection of the rigid two-year rule',
        explanation:
          'Chandrachud, C.J. held that no hard-and-fast rule of two years can be laid down. If a fixed time limit is established, every condemned convict would adopt dilatory legal maneuvers to cross the two-year mark and claim immunity from the gallows.',
      },
      {
        heading: 'Scrutiny of the cause of delay',
        explanation:
          'The court must examine what caused the delay: was it the dilatory tactics of the accused, or systemic, callous procrastination by the executive? While prolonged delay is a valid factor under Article 21, it cannot be reduced to a mechanical mathematical formula.',
      },
    ],
    decision:
      'Writ petitions disposed of. The 2-year automatic commutation rule of Vatheeswaran disapproved; referred to a 5-judge Constitution Bench (settled in Triveniben in 1989).',
    holding:
      'Delay in executing death sentence does not automatically entitle the convict to commutation; fixed 2-year rule rejected.',
    ratioDecidendi:
      'Under Article 21 of the Constitution, prolonged and inordinate delay in executing a death sentence is a relevant factor for judicial consideration, but there is no absolute mathematical time limit of two years which automatically converts a death sentence into life imprisonment.',
    obiterDicta:
      'The agony of awaiting execution on death row is terrifying, and the executive must dispose of clemency petitions with constitutional expedition.',
    relatedCases: [
      {
        judgmentId: 'triveniben-1989',
        caseName: 'Triveniben v. State of Gujarat',
        citation: '(1989) 1 SCC 678',
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
      'Rejected the rigid 2-year delay rule for capital sentence commutation.',
      'Key stepping stone in death penalty delay jurisprudence leading to the Triveniben Constitution Bench.',
      'Balancing convict rights under Article 21 against dilatory litigation tactics.',
    ],
    mcqs: [
      {
        id: 'sher-singh-mcq-1',
        question:
          'In Sher Singh v. State of Punjab (1983), what did the Supreme Court hold regarding the 2-year delay rule for death row commutation?',
        options: [
          'Affirmed that 2 years delay automatically cancels death penalty',
          'Rejected the rigid 2-year rule, holding delay must be evaluated on facts',
          'Held death penalty can never be commuted',
          'Transferred all death row prisoners to open prisons',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court rejected the rigid 2-year rule of Vatheeswaran, holding that delay must be evaluated on the facts of each case.',
      },
    ],
  },
  {
    id: 'triveniben-1989',
    caseName: 'Triveniben v. State of Gujarat',
    shortName: 'Triveniben (Constitution Bench on Delay)',
    citation: '(1989) 1 SCC 678',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1989,
    bench: '5-Judge Constitution Bench',
    judges: [
      'G.L. Oza, J.',
      'M.M. Dutt, J.',
      'K.N. Singh, J.',
      'L.M. Sharma, J.',
      'N.D. Ojha, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Death Penalty Delay', 'Article 21', 'Commutation of Capital Sentence', 'Constitution Bench'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 21', 'Death Penalty', 'Triveniben', 'Mercy Petition', 'Delay'],
    summary:
      'Authoritative 5-judge Constitution Bench decision resolving the conflict between Vatheeswaran and Sher Singh. Affirmed that inordinate, unexplained delay in executing a death sentence constitutes a denial of the fundamental right to life under Article 21, entitling the convict to invoke Article 32 for commutation to life imprisonment, but only delay occurring after judicial proceedings have concluded can be taken into account.',
    facts: [
      'Conflicting views between 2-judge and 3-judge benches regarding whether prolonged delay on death row automatically invalidates the death sentence led to a reference to a 5-judge Constitution Bench.',
      'Numerous condemned prisoners whose mercy petitions had languished before the President and Governors for years sought commutation under Article 32.',
    ],
    issues: [
      'Does inordinate delay in the execution of a death sentence violate Article 21 of the Constitution.',
      'From what stage can delay be taken into account for commuting a capital sentence.',
    ],
    arguments: {
      appellant: [
        'Prolonged, agonizing wait under shadow of the gallows inflicts severe mental torture; keeping a human on death row for years violates Article 21.',
      ],
      respondent: [
        'Judicial appeals and review petitions take time; time taken in court processes cannot be counted against the State.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 32',
        title: 'Right to life and remedies against inhuman execution delays',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Post-judicial delay alone is relevant',
        explanation:
          'Oza, J. held that the time taken in the trial, High Court confirmation, Supreme Court appeal, and review petitions cannot be counted as delay because that period was spent in pursuing lawful judicial remedies. The only period of delay that can be considered is the post-judicial phase, i.e., after the sentence has become final and during the pendency of mercy petitions before the President or Governor.',
      },
      {
        heading: 'Commutation under Article 32',
        explanation:
          'If there is inordinate, unexplained, and callous delay by the executive in executing the sentence or disposing of mercy petitions, the condemned prisoner is entitled to approach the Supreme Court under Article 32 to have his death sentence commuted to life imprisonment.',
      },
    ],
    decision:
      'Reference answered. Inordinate, unexplained post-judicial delay held to violate Article 21, justifying commutation of death sentence to imprisonment for life under Article 32.',
    holding:
      'Unexplained, inordinate post-judicial delay in executing death sentence violates Article 21, entitling the convict to commutation to life imprisonment.',
    ratioDecidendi:
      'Under Article 21 of the Constitution, prolonged, inordinate, and unexplained delay by the executive in executing a capital sentence after the conclusion of judicial proceedings entitles the condemned prisoner to approach the court under Article 32/226 to seek commutation of the death sentence to life imprisonment.',
    obiterDicta:
      'Clemency power under Articles 72 and 161 is a constitutional duty that must be discharged within a reasonable timeframe.',
    relatedCases: [
      {
        judgmentId: 'sher-singh-1983',
        caseName: 'Sher Singh v. State of Punjab',
        citation: '(1983) 2 SCC 344',
        relationship: 'affirmed',
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
      'Foundational 5-judge Constitution Bench precedent on death penalty delay.',
      'Only post-judicial delay (mercy petition stage) is counted, not judicial litigation time.',
      'Ground for commutation of capital sentence under Article 21.',
    ],
    mcqs: [
      {
        id: 'triveniben-mcq-1',
        question:
          'In Triveniben v. State of Gujarat (1989), which period of delay can be considered for commuting a death sentence under Article 21?',
        options: [
          'Delay during police investigation',
          'Delay during High Court trial',
          'Only post-judicial delay after finality of sentence during mercy petition disposal',
          'Total time from date of FIR',
        ],
        correctIndex: 2,
        explanation:
          'The Constitution Bench held that only post-judicial delay (after sentence finality during mercy proceedings) is relevant.',
      },
    ],
  },
  {
    id: 'shatrughan-chauhan-2014',
    caseName: 'Shatrughan Chauhan v. Union of India',
    shortName: 'Shatrughan Chauhan (Death Row Guidelines)',
    citation: '(2014) 3 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2014,
    bench: '3-Judge Bench',
    judges: ['P. Sathasivam, C.J.', 'Ranjan Gogoi, J.', 'N.V. Ramana, J.'],
    subject: 'Constitutional Law',
    topics: ['Death Penalty Commutation', 'Article 21', 'Article 72 / 161 Delay', 'Solitary Confinement', '14-Day Notice'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 21', 'Article 72', 'Death Penalty', 'Shatrughan Chauhan', 'Human Rights'],
    summary:
      'Historic 3-judge bench judgment commuted the death sentences of 15 death-row convicts to life imprisonment on grounds of inordinate, unexplained executive delay (ranging from 1.5 to 12 years) in disposing of their mercy petitions under Article 72/161. Formulated 12 binding guidelines governing the treatment of condemned prisoners, including a mandatory minimum 14-day gap between mercy rejection and execution.',
    facts: [
      'Shatrughan Chauhan and other condemned convicts (including forest brigand Veerappan associates) filed writ petitions under Article 32.',
      'Their mercy petitions had been kept pending by the Ministry of Home Affairs and the President of India for periods between 6 to 12 years without explanation.',
      'The petitioners contended that undergoing agonizing wait on death row for a decade under shadow of the gallows constituted torture violating Article 21.',
    ],
    issues: [
      'Whether inordinate and unexplained delay in deciding mercy petitions is a supervening ground for commuting death sentence to life under Article 21.',
      'Whether the nature of the crime (even terrorism or gruesome murder) deprives a convict of Article 21 protections against executive delay.',
      'What procedural safeguards must be followed before executing a death sentence.',
    ],
    arguments: {
      appellant: [
        'Prolonged solitary confinement and indefinite delay in deciding mercy petitions causes acute psychological destruction and constitutes cruel, inhuman punishment.',
      ],
      respondent: [
        'Terrorists and mass murderers do not deserve judicial sympathy or commutation for executive delay.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21, 72 & 161',
        title: 'Right to life and judicial review of supervening delay in mercy petitions',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Article 21 applies to condemned convicts till their last breath',
        explanation:
          'Sathasivam, C.J. held that Article 21 inheres in every human being till their last breath. An inordinate, unexplained delay in disposing of a mercy petition is a supervening circumstance that renders execution harsh, cruel, and arbitrary. The nature of the crime cannot be a ground to deny Article 21 protections.',
      },
      {
        heading: '12 mandatory nationwide guidelines',
        explanation:
          'The Court mandated: (1) Rejection of mercy petition must be communicated in writing to the convict and family; (2) Minimum 14-day gap between communication of rejection and execution date; (3) Solitary confinement before rejection of mercy petition is illegal; (4) Mandatory mental health evaluation; (5) Right to legal aid and copies of all documents.',
      },
    ],
    decision:
      'Writ petitions allowed. Death sentences of 15 condemned convicts commuted to imprisonment for life. 12 mandatory execution guidelines formulated.',
    holding:
      'Inordinate, unexplained delay in deciding mercy petitions is a supervening circumstance to commute death penalty to life. Minimum 14-day notice mandatory before hanging.',
    ratioDecidendi:
      'Under Article 21 of the Constitution, inordinate, unexplained, and unreasonable delay by the President or Governor in deciding mercy petitions under Articles 72/161 is a supervening factor that justifies commuting the death sentence to imprisonment for life, irrespective of the gravity of the crime. Execution without communicating rejection or without a minimum 14-day notice is unconstitutional.',
    obiterDicta:
      'Secret, midnight hangings without informing families destroy constitutional morality and human dignity.',
    relatedCases: [
      {
        judgmentId: 'triveniben-1989',
        caseName: 'Triveniben v. State of Gujarat',
        citation: '(1989) 1 SCC 678',
        relationship: 'applied',
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
      'The modern Magna Carta of death penalty administration in India.',
      'Mandatory minimum 14-day gap between mercy rejection and execution.',
      'Declared solitary confinement prior to mercy rejection unconstitutional.',
    ],
    mcqs: [
      {
        id: 'shatrughan-mcq-1',
        question:
          'In Shatrughan Chauhan v. Union of India (2014), what minimum notice period was mandated between communicating rejection of mercy petition and execution?',
        options: ['24 hours', '48 hours', '7 days', '14 days'],
        correctIndex: 3,
        explanation:
          'The Supreme Court mandated a minimum period of 14 days between the communication of rejection of mercy petition and the scheduled date of execution.',
      },
    ],
  },
  {
    id: 'vc-rangadurai-1979',
    caseName: 'V.C. Rangadurai v. D. Gopalan',
    shortName: 'V.C. Rangadurai (Legal Ethics & Reform)',
    citation: '(1979) 1 SCC 308',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1979,
    bench: '3-Judge Bench',
    judges: ['V.R. Krishna Iyer, J.', 'D.A. Desai, J.', 'A.P. Sen, J.'],
    subject: 'Professional Ethics',
    topics: ['Professional Misconduct', 'Section 35 Advocates Act', 'Fiduciary Duty', 'Reformative Jurisprudence'],
    tags: ['AIBE', 'Judiciary', 'Advocates Act', 'Section 35', 'BCI Rules', 'Legal Ethics', 'Krishna Iyer', 'Misconduct'],
    summary:
      'Classic Supreme Court judgment by Justice V.R. Krishna Iyer on the fiduciary relationship between an advocate and client, and the purpose of disciplinary punishment under Section 35 of the Advocates Act, 1961. Championed a reformative approach to professional misconduct, replacing a punitive suspension with free legal aid service to the poor.',
    facts: [
      'The appellant advocate was engaged by an elderly, illiterate couple to file a suit for recovery of possession and mesne profits.',
      'The advocate accepted fees and court fee money but failed to file the suit, allowing the claim to become barred by limitation.',
      'He repeatedly misled the clients with false progress reports and refused to return the case bundle.',
      'The Disciplinary Committee of the Bar Council of India suspended the advocate from practice for six years.',
      'The advocate appealed to the Supreme Court under Section 38 of the Advocates Act.',
    ],
    issues: [
      'What is the standard of fiduciary duty expected of an advocate towards an indigent client under the Advocates Act.',
      'What is the primary objective of disciplinary sanctions under Section 35: punitive retribution or professional correction and reform.',
    ],
    arguments: {
      appellant: [
        'A 6-year suspension is a commercial death penalty for a young advocate; professional punishment should be reformative.',
      ],
      respondent: [
        'Betraying an illiterate client and allowing a cause of action to perish is the gravest form of professional misconduct.',
      ],
    },
    provisions: [
      {
        actId: 'advocates-act',
        actName: 'Advocates Act, 1961',
        provisionId: 'adv-s-35',
        section: 'Section 35 & Section 38',
        title: 'Punishment of advocates for misconduct and appeal to Supreme Court',
        subjectSlug: 'ethics',
        topicId: 'adv-s-35',
      },
    ],
    reasoning: [
      {
        heading: 'Nobility and fiduciary trust of the legal profession',
        explanation:
          'Krishna Iyer, J. held that the legal profession is not a trade or business, but a noble calling based on solemn fiduciary trust. An advocate holds the keys to the temple of justice. For an advocate to take money and abandon an illiterate client is a betrayal of the profession.',
      },
      {
        heading: 'Reformative jurisprudence in professional discipline',
        explanation:
          'However, disciplinary punishment should not aim to destroy the professional livelihood of a young lawyer. Justice Krishna Iyer modified the 6-year suspension: the advocate was suspended for one year, but directed to work under a legal aid society providing free legal service to the poor to atone for his misconduct.',
      },
    ],
    decision:
      'Appeal allowed in part. Suspension reduced to one year with condition to serve in legal aid programs for the indigent.',
    holding:
      'Advocates hold fiduciary duty towards clients. Disciplinary punishment under Section 35 Advocates Act should be corrective and reformative.',
    ratioDecidendi:
      'An advocate owes a high fiduciary duty of fidelity and diligent service to their client. Disciplinary punishment under Section 35 of the Advocates Act, 1961 should not be merely retributive, but corrective and reformative, channeling the practitioner energy towards legal aid and restitution.',
    obiterDicta:
      'Law is a public profession with a social mission, not a business enterprise designed for mercenary profit.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading judgment on Section 35 Advocates Act, 1961 professional misconduct.',
      'Justice Krishna Iyer exposition on the noble fiduciary nature of the Bar.',
      'Introduction of reformative community legal service into Bar Council disciplinary jurisprudence.',
    ],
    mcqs: [
      {
        id: 'rangadurai-mcq-1',
        question:
          'In V.C. Rangadurai v. D. Gopalan (1979), what approach to professional punishment under Section 35 Advocates Act was championed by Justice Krishna Iyer?',
        options: [
          'Permanent disbarment only',
          'Reformative and corrective approach involving legal aid service',
          'Imposition of criminal imprisonment',
          'Private warning by Bar Council Chairman',
        ],
        correctIndex: 1,
        explanation:
          'Justice Krishna Iyer championed a reformative and corrective approach, directing the advocate to render free legal aid service to the poor.',
      },
    ],
  },
  {
    id: 'b-sunitha-2018',
    caseName: 'B. Sunitha v. State of Telangana',
    shortName: 'B. Sunitha (Contingency Fees Prohibition)',
    citation: '(2018) 1 SCC 638',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2018,
    bench: '2-Judge Bench',
    judges: ['A.K. Goel, J.', 'U.U. Lalit, J.'],
    subject: 'Professional Ethics',
    topics: ['Contingency Fees', 'Section 138 NI Act', 'Bar Council Rules Rule 20', 'Public Policy', 'Advocate Fees'],
    tags: ['AIBE', 'Judiciary', 'Advocates Act', 'Legal Ethics', 'BCI Rules', 'Contingency Fees', 'Section 138 NI Act'],
    summary:
      'Landmark Supreme Court ruling strictly prohibiting advocates from charging contingency fees based on a percentage of the claim, decretal amount, or compensation awarded. Held that an agreement whereby an advocate claims a share in the fruits of litigation is contrary to public policy under Section 23 Contract Act, violates Bar Council of India Rules, and a cheque issued for such fees cannot be enforced under Section 138 NI Act.',
    facts: [
      'The appellant woman lost her husband in a motor accident and filed a claim before the MACT.',
      'Her advocate demanded a fee of 16% of the compensation awarded by the tribunal, and obtained signed blank cheques from her.',
      'When the tribunal awarded Rs. 25.5 Lakh, the advocate filled up a cheque for Rs. 10 Lakh, presented it for clearing, and upon dishonor filed a criminal complaint under Section 138 of the Negotiable Instruments Act.',
      'The High Court refused to quash the complaint. The client appealed to the Supreme Court.',
    ],
    issues: [
      'Whether an advocate can charge contingency fees calculated as a percentage of the claim or compensation awarded.',
      'Whether a cheque issued towards contingency fees constitutes a "legally enforceable debt" under Section 138 NI Act.',
    ],
    arguments: {
      appellant: [
        'Charging percentage fees of the decretal amount violates Rule 20 of Bar Council of India Rules and is void as champertous and against public policy under Section 23 of Contract Act.',
      ],
      respondent: [
        'Advocates and clients have freedom of contract regarding professional remuneration; Section 138 presumption under Section 139 operates in favor of the payee.',
      ],
    },
    provisions: [
      {
        actId: 'bci-rules',
        actName: 'Bar Council of India Rules',
        provisionId: 'bci-rules-duties',
        section: 'Rule 20, Section II, Chapter II, Part VI',
        title: 'Bar on advocate stipulating a fee contingent on the results of litigation',
        subjectSlug: 'ethics',
        topicId: 'bci-rules-duties',
      },
      {
        actId: 'contract',
        actName: 'Indian Contract Act, 1872',
        provisionId: 'contract-validity',
        section: 'Section 23',
        title: 'Agreements contrary to public policy are void',
        subjectSlug: 'contract-law',
      },
    ],
    reasoning: [
      {
        heading: 'Strict prohibition on contingency fees',
        explanation:
          'Goel, J. held that Rule 20 of the Bar Council of India Rules explicitly provides: "An advocate shall not stipulate for a fee contingent on the results of litigation or agree to share the proceeds thereof." A lawyer cannot become an interested partner in the litigation. Such contracts corrupt the administration of justice and are void under Section 23 of the Contract Act.',
      },
      {
        heading: 'No legally enforceable debt under Section 138 NI Act',
        explanation:
          'Since an agreement for contingency fees is illegal and void ab initio, a cheque issued towards such fees cannot be said to be in discharge of a "legally enforceable debt or liability" under Section 138 of the Negotiable Instruments Act. The prosecution was quashed.',
      },
    ],
    decision:
      'Appeal allowed. Criminal complaint under Section 138 NI Act against the client quashed. Law Commission requested to consider statutory ceiling on legal fees.',
    holding:
      'Contingency fee agreements are illegal and void under Section 23 Contract Act. Cheques issued for contingency fees cannot be enforced under Section 138 NI Act.',
    ratioDecidendi:
      'Under Rule 20 of the Bar Council of India Rules and Section 23 of the Indian Contract Act, 1872, an agreement by an advocate to charge fees contingent upon the result of litigation or as a percentage of the decretal compensation is illegal, contrary to public policy, and void ab initio. A cheque drawn towards such fees cannot constitute a legally enforceable debt under Section 138 NI Act.',
    obiterDicta:
      'Commercialization of legal fees must be regulated by law to protect poor litigants from economic exploitation.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading modern judgment on Rule 20 Bar Council of India Rules.',
      'Absolute prohibition on charging contingency fees or percentage of compensation.',
      'Interplay between legal ethics, Section 23 Contract Act, and Section 138 NI Act.',
    ],
    mcqs: [
      {
        id: 'sunitha-mcq-1',
        question:
          'In B. Sunitha v. State of Telangana (2018), what did the Supreme Court hold regarding an advocate charging fees as a percentage of compensation awarded?',
        options: [
          'Permissible up to 20%',
          'Strictly prohibited, illegal, and void against public policy',
          'Permissible in motor accident claims only',
          'Allowed with permission of the Bar Council',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that contingency fees based on percentage of compensation are strictly prohibited by BCI Rule 20 and void under Section 23 Contract Act.',
      },
    ],
  },
  {
    id: 'bc-chaturvedi-1995',
    caseName: 'B.C. Chaturvedi v. Union of India',
    shortName: 'B.C. Chaturvedi (Judicial Review of Penalties)',
    citation: '(1995) 6 SCC 749',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1995,
    bench: '3-Judge Bench',
    judges: ['K. Ramaswamy, J.', 'B.L. Hansaria, J.', 'S.C. Sen, J.'],
    subject: 'Administrative & Service Law',
    topics: ['Disciplinary Proceedings', 'Judicial Review', 'Quantum of Punishment', 'Wednesbury Proportionality'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Article 226', 'Disciplinary Inquiry', 'Quantum of Penalty', 'Proportionality'],
    summary:
      'Landmark 3-judge bench ruling defining the scope of judicial review under Articles 226 and 227 over disciplinary enquiries and administrative punishment. Held that the High Court or Tribunal cannot sit as an appellate court to re-appreciate evidence, but can interfere with the quantum of punishment only if it shocks the judicial conscience of the court.',
    facts: [
      'The appellant, an Income Tax Officer, was subjected to departmental proceedings for possessing assets disproportionate to his known sources of income.',
      'The inquiry officer found the charges established, and the disciplinary authority dismissed him from service.',
      'The Central Administrative Tribunal upheld the finding of guilt but converted the dismissal into compulsory retirement.',
      'The Union of India appealed against the Tribunals reduction of penalty.',
    ],
    issues: [
      'What is the permissible scope of judicial review over factual findings in departmental disciplinary proceedings.',
      'Under what circumstances can a High Court or Tribunal interfere with the quantum of punishment imposed by the disciplinary authority.',
    ],
    arguments: {
      appellant: [
        'The evidence before the inquiry officer was circumstantial and inadequate; the penalty was excessively harsh.',
      ],
      respondent: [
        'Disciplinary punishment is within the exclusive discretion of the employer; courts cannot substitute their own sense of penalty.',
      ],
    },
    provisions: [
      {
        actId: 'admin-law',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-judicial-review',
        title: 'Scope of judicial review and doctrine of proportionality in administrative penalties',
        subjectSlug: 'admin',
        topicId: 'admin-judicial-review',
      },
    ],
    reasoning: [
      {
        heading: 'Limits of judicial review on findings of fact',
        explanation:
          'Ramaswamy, J. held that judicial review is not an appeal from a decision, but a review of the manner in which the decision is made. The court does not act as an appellate authority to re-weigh evidence. Where there is some relevant evidence reasonably supporting the conclusion, the finding must be sustained.',
      },
      {
        heading: 'Interference with penalty only when conscience is shocked',
        explanation:
          'Hansaria, J. and Ramaswamy, J. concurred that the High Court or Tribunal can interfere with the punishment imposed by the disciplinary authority only if the penalty is so shockingly disproportionate to the misconduct as to outrage all sense of justice (Wednesbury unreasonableness). Even then, the normal course is to remit the matter back to the authority.',
      },
    ],
    decision:
      'Appeal allowed. CAT modification set aside; order of dismissal passed by the disciplinary authority restored.',
    holding:
      'High Court cannot re-appreciate evidence in disciplinary inquiries. Penalty can be interfered with only if it shocks the conscience of the court.',
    ratioDecidendi:
      'In disciplinary proceedings, judicial review under Article 226/227 is confined to examining whether the inquiry was conducted in accordance with natural justice and procedural rules without perversity. The court or tribunal cannot alter the quantum of punishment unless the penalty is shockingly disproportionate to the proven charge.',
    obiterDicta:
      'Discipline in public service is the bedrock of honest administration; courts must exercise restraint before diluting penalties in corruption cases.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading judgment on judicial review of disciplinary enquiry penalties.',
      'The "shocking the conscience of the court" test for proportionality.',
      'High Courts cannot act as courts of appeal over departmental findings.',
    ],
    mcqs: [
      {
        id: 'bc-chaturvedi-mcq-1',
        question:
          'In B.C. Chaturvedi v. Union of India (1995), under what condition can a High Court or Tribunal interfere with the quantum of punishment in disciplinary proceedings?',
        options: [
          'Whenever the court feels a lesser punishment would suffice',
          'Only if the punishment is shockingly disproportionate to the misconduct',
          'In all cases of dismissal',
          'Whenever the employee is a senior citizen',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that interference with penalty is permissible only if the punishment is shockingly disproportionate to the proven charge.',
      },
    ],
  },
  {
    id: 'syndicate-bank-kurati-2006',
    caseName: 'Syndicate Bank v. Venkatesh Gururao Kurati',
    shortName: 'Syndicate Bank (Prejudice in Natural Justice)',
    citation: '(2006) 3 SCC 150',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2006,
    bench: '2-Judge Bench',
    judges: ['A.R. Lakshmanan, J.', 'Altamas Kabir, J.'],
    subject: 'Administrative Law',
    topics: ['Principles of Natural Justice', 'Non-Supply of Documents', 'Prejudice Doctrine', 'Disciplinary Inquiries'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Natural Justice', 'Prejudice Doctrine', 'Domestic Inquiries'],
    summary:
      'Authoritative decision on the doctrine of prejudice in the application of natural justice. Held that the mere non-supply of copies of documents in a departmental enquiry does not automatically vitiate the proceedings; the employee must plead and demonstrate actual substantial prejudice caused to his defense.',
    facts: [
      'The respondent, a bank manager, was charge-sheeted for sanctioning fraudulent loans without pre-sanction inspections or securities.',
      'The inquiry officer found him guilty, and he was dismissed from service.',
      'The manager challenged his dismissal in the High Court, contending that the bank failed to furnish copies of certain internal audit reports, violating natural justice.',
      'The High Court quashed the dismissal. The Bank appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the non-supply of documents in a domestic enquiry automatically invalidates the enquiry without proof of actual prejudice.',
      'What is the threshold requirement for establishing prejudice under natural justice principles.',
    ],
    arguments: {
      appellant: [
        'The employee had inspected all relevant documents and cross-examined witnesses; the withheld internal audit reports were irrelevant to the specific loan charges.',
      ],
      respondent: [
        'Natural justice requires supply of all requested documents; failure to supply is a per se violation of audi alteram partem.',
      ],
    },
    provisions: [
      {
        actId: 'admin-law',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-judicial-review',
        title: 'Audi alteram partem and the doctrine of prejudice in domestic inquiries',
        subjectSlug: 'admin',
        topicId: 'admin-judicial-review',
      },
    ],
    reasoning: [
      {
        heading: 'Natural justice is not an unruly horse or rigid straitjacket',
        explanation:
          'Lakshmanan, J. held that principles of natural justice cannot be put in a rigid straitjacket. Rules of natural justice are not statutory rules, but flexible principles designed to secure justice. The theory of "useless formality" and the "prejudice doctrine" apply.',
      },
      {
        heading: 'Proof of actual prejudice is mandatory',
        explanation:
          'Non-supply of a document does not ipso facto vitiate an enquiry unless the document was relied upon by the inquiry officer, or the delinquent employee proves how non-availability of that document actually prejudiced his defense. Since the manager suffered no prejudice, the enquiry was valid.',
      },
    ],
    decision:
      'Appeal allowed. High Court order set aside; dismissal of the bank manager restored.',
    holding:
      'Non-supply of documents does not invalidate a departmental enquiry unless the employee demonstrates actual prejudice.',
    ratioDecidendi:
      'In administrative and domestic disciplinary enquiries, a breach of natural justice based on the non-supply of documents does not per se invalidate the inquiry. The delinquent employee must specifically plead and affirmatively prove that the non-supply of such documents caused actual substantial prejudice to his defense.',
    obiterDicta:
      'Courts must not set aside disciplinary enquiries on hyper-technical invocations of natural justice where substantial fairness has been met.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading case on the "prejudice doctrine" in administrative law.',
      'Non-supply of documents requires proof of actual prejudice.',
      'Natural justice is not an abstract mechanical ritual.',
    ],
    mcqs: [
      {
        id: 'kurati-mcq-1',
        question:
          'In Syndicate Bank v. Venkatesh Gururao Kurati (2006), what must a delinquent employee prove to invalidate an enquiry due to non-supply of documents?',
        options: [
          'Mere non-supply of any requested document',
          'Actual substantial prejudice caused to his defense',
          'Bias of the managing director',
          'Violation of CrPC provisions',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that the employee must affirmatively prove that non-supply of documents caused actual substantial prejudice to his defense.',
      },
    ],
  },
  {
    id: 'coal-block-allocation-2014',
    caseName: 'Manohar Lal Sharma v. Principal Secretary (Coal Allocation)',
    shortName: 'Coal Block Allocation Case',
    citation: '(2014) 9 SCC 737',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2014,
    bench: '3-Judge Bench',
    judges: ['R.M. Lodha, C.J.', 'Madan B. Lokur, J.', 'Kurian Joseph, J.'],
    subject: 'Constitutional & Administrative Law',
    topics: ['Natural Resources Allocation', 'Screening Committee', 'Cancellation of 214 Coal Blocks', 'Article 14'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 14', 'Natural Resources', 'Coal Scam', 'Arbitrariness', 'Public Trust'],
    summary:
      'Historic 3-judge bench decision declaring the allocation of 214 coal blocks between 1993 and 2010 through the administrative Screening Committee and Government Dispensation Route completely illegal, arbitrary, and non-transparent. Struck down the allocations under Article 14 for total lack of guidelines, and cancelled 204 out of 214 coal blocks with an environmental levy of Rs. 295 per metric tonne of coal mined.',
    facts: [
      'Between 1993 and 2010, the Central Government allocated 218 coal blocks to commercial companies and public sector undertakings through an administrative Screening Committee mechanism.',
      'The Comptroller and Auditor General (CAG) submitted a report highlighting financial windfalls to private companies without competitive bidding.',
      'PILs were filed in the Supreme Court under Article 32 by Manohar Lal Sharma and Common Cause alleging crony capitalism, illegality under the Coal Mines (Nationalisation) Act, 1973, and violation of Article 14.',
    ],
    issues: [
      'Whether the allocation of coal blocks through the Screening Committee route was legal and compliant with the Coal Mines (Nationalisation) Act, 1973.',
      'Whether the allocation process was arbitrary, non-transparent, and violative of Article 14.',
      'What relief should be granted regarding commercial investments already made in commissioned coal plants.',
    ],
    arguments: {
      appellant: [
        'Valuable national coal deposits were handed out like gifts without competitive pricing, objective guidelines, or minutes of selection.',
      ],
      respondent: [
        'Allocations were made to boost core infrastructure (power, steel) under an established policy; cancelling allocations would cause energy blackouts and economic chaos.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Requirement of fairness and transparency in disposal of national natural resources',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Complete arbitrariness and lack of transparency',
        explanation:
          'Lodha, C.J. held that the Screening Committee functioned without any objective guidelines or comparative evaluation criteria. Minutes revealed no reasons why one applicant was preferred over dozens of competitors. The process was completely opaque, arbitrary, and violative of Article 14.',
      },
      {
        heading: 'Illegality under Coal Mines Nationalisation Act',
        explanation:
          'The allocations violated the substantive provisions of the Coal Mines (Nationalisation) Act, 1973, which prohibited private commercial mining. Even State Government joint ventures were unauthorized fronts for private profit.',
      },
    ],
    decision:
      'Petitions allowed. 214 coal block allocations declared illegal and arbitrary. 204 coal blocks cancelled; operational mines granted 6 months transition subject to paying Rs. 295/metric tonne levy.',
    holding:
      'Allocation of 214 coal blocks declared arbitrary, opaque, and illegal under Article 14. 204 blocks cancelled with compensatory environmental levy.',
    ratioDecidendi:
      'Natural resources belong to the people and the State holds them as a trustee. The allocation of scarce national natural resources by an administrative Screening Committee without transparent guidelines, competitive criteria, or recorded reasons is arbitrary, unfair, and void under Article 14 of the Constitution.',
    obiterDicta:
      'Immense private investments cannot sanitize an allocation process that was rotten and unconstitutional at its inception.',
    relatedCases: [
      {
        judgmentId: 'cpil-2g-spectrum-2012',
        caseName: 'Centre for Public Interest Litigation v. Union of India',
        citation: '(2012) 3 SCC 1',
        relationship: 'applied',
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
      'Landmark decision cancelling 204 coal blocks allocated over 17 years.',
      'Application of Article 14 non-arbitrariness to natural resource allocations.',
      'Reaffirmation of the Public Trust Doctrine in mining concessions.',
    ],
    mcqs: [
      {
        id: 'coal-block-mcq-1',
        question:
          'In Manohar Lal Sharma v. Principal Secretary (Coal Allocation Case) (2014), why did the Supreme Court cancel 204 coal blocks?',
        options: [
          'The coal had exhausted',
          'The allocations were arbitrary, non-transparent, and violative of Article 14',
          'The State Governments had seceded',
          'Coal mining was completely banned under the Wildlife Act',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court cancelled the coal block allocations because the Screening Committee process was arbitrary, opaque, and violative of Article 14.',
      },
    ],
  },
  {
    id: 'cpil-2g-spectrum-2012',
    caseName: 'Centre for Public Interest Litigation v. Union of India (2G Spectrum)',
    shortName: '2G Spectrum Case',
    citation: '(2012) 3 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2012,
    bench: '2-Judge Bench',
    judges: ['G.S. Singhvi, J.', 'Asok Kumar Ganguly, J.'],
    subject: 'Constitutional & Administrative Law',
    topics: ['2G Spectrum Scam', 'Cancellation of 122 Telecom Licenses', 'First-Come-First-Served', 'Article 14 Auction'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 14', '2G Spectrum', 'Public Trust', 'Auctions', 'Natural Resources'],
    summary:
      'Historic Supreme Court judgment cancelling 122 2G telecom licenses granted to private telecommunication operators by the Department of Telecommunications in 2008. Struck down the "First-Come-First-Served" (FCFS) policy for allocation of scarce natural resources as inherently arbitrary, flawed, and open to manipulation under Article 14, holding that public auction is the only transparent method for alienating finite public resources.',
    facts: [
      'In January 2008, the Department of Telecommunications under Minister A. Raja allocated 122 2G unified access service telecom licenses along with bundled 2G spectrum at 2001 entry fee prices.',
      'The Department advanced the cut-off date without prior notice, introduced a counter-window queue system, and awarded licenses on a "First-Come-First-Served" basis within hours to favored front companies.',
      'The CAG estimated massive presumptive revenue loss to the public exchequer.',
      'The Centre for Public Interest Litigation (CPIL) and Subramanian Swamy filed PILs under Article 32 seeking cancellation of the licenses and court-monitored CBI investigation.',
    ],
    issues: [
      'Whether the First-Come-First-Served policy applied for allocating 2G spectrum licenses was arbitrary and violative of Article 14.',
      'Whether the State is constitutionally bound to dispose of scarce economic natural resources only by public auction.',
    ],
    arguments: {
      appellant: [
        'Airwaves and spectrum are finite national assets owned by the sovereign public; distributing spectrum at 2001 prices via manipulated queue systems is a colossal fraud on the Constitution.',
      ],
      respondent: [
        'The policy was designed for tele-density expansion and affordable tariffs, not revenue maximization; cancelling licenses harms foreign direct investments.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14 & Article 39(b)',
        title: 'Distribution of material resources of the community to subserve the common good',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'First-Come-First-Served policy is inherently arbitrary',
        explanation:
          'Singhvi, J. held that the First-Come-First-Served policy is inherently flawed and dangerous when applied to scarce commercial natural resources. It enables unscrupulous entities with inside information to queue first and hijack public assets. Changing cut-off dates retroactively was a blatant fraud on power.',
      },
      {
        heading: 'Mandatory public auction for natural resources',
        explanation:
          'Natural resources belong to the people. The State as a trustee is bound to distribute material resources transparently. The Court held that a public auction is the only fair and transparent method for the alienation of natural resources to ensure equal opportunity and fair value.',
      },
    ],
    decision:
      'Writ petitions allowed. 122 telecom licenses cancelled. Central Government directed to allocate spectrum through open, transparent, and competitive public auction.',
    holding:
      '122 2G licenses cancelled. First-Come-First-Served policy held arbitrary and unconstitutional under Article 14.',
    ratioDecidendi:
      'Spectrum and electromagnetic airwaves are scarce, finite natural resources owned by the people in public trust. The allocation of such commercial natural resources on a "First-Come-First-Served" basis without transparent public bidding violates Article 14 of the Constitution. Alienation of scarce commercial resources must follow open and transparent competitive procedures.',
    obiterDicta:
      'Public office is a sacred trust, and executive policies that convert national wealth into private windfalls cannot survive judicial review.',
    relatedCases: [
      {
        judgmentId: 'natural-resources-ref-2012',
        caseName: 'Natural Resources Allocation, In re, Special Reference No. 1 of 2012',
        citation: '(2012) 10 SCC 1',
        relationship: 'distinguished',
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
      'Cancellation of 122 2G telecom licenses across India.',
      'Invalidation of the First-Come-First-Served method for natural resources.',
      'Triggered the landmark Presidential Reference in Special Reference No. 1 of 2012.',
    ],
    mcqs: [
      {
        id: '2g-spectrum-mcq-1',
        question:
          'In Centre for Public Interest Litigation v. Union of India (2012), why did the Supreme Court cancel 122 2G telecom licenses?',
        options: [
          'Telecom companies failed to build towers',
          'The First-Come-First-Served allocation policy was arbitrary, manipulated, and violative of Article 14',
          'The licenses had expired naturally',
          'Parliament passed an Act repealing 2G spectrum',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court cancelled the licenses because the FCFS policy was arbitrary, manipulated, and violative of Article 14.',
      },
    ],
  },
  {
    id: 'natural-resources-ref-2012',
    caseName: 'Natural Resources Allocation, In re, Special Reference No. 1 of 2012',
    shortName: 'Presidential Reference (Natural Resources)',
    citation: '(2012) 10 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Advisory Jurisdiction (Article 143)',
    year: 2012,
    bench: '5-Judge Constitution Bench',
    judges: [
      'S.H. Kapadia, C.J.',
      'D.K. Jain, J.',
      'S.S. Nijjar, J.',
      'Ranjana P. Desai, J.',
      'J.S. Khehar, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 143 Advisory Jurisdiction', 'Natural Resources Allocation', 'Is Auction Mandatory', 'Article 14 Arbitrariness'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 143', 'Article 14', 'Natural Resources', 'Auction', '2G Clarification'],
    summary:
      'Historic 5-judge Constitution Bench advisory opinion answering a Presidential Reference under Article 143(1) of the Constitution following the 2G Spectrum verdict. Clarified that public auction is NOT the only constitutionally permissible method for alienation of all natural resources. Ruled that Article 14 tests arbitrariness and fairness of procedure, but does not mandate revenue maximization or auction as a universal economic dogma.',
    facts: [
      'Following the 2-judge bench judgment in the 2G Spectrum Case (which suggested that auction is the only constitutional method for alienating natural resources), the Union Government faced paralysis in allocations across mining, water, oil, land, and gas.',
      'The President of India made a Special Reference to the Supreme Court under Article 143(1) posing questions: Whether auction is the sole permissible constitutional method for allocating all natural resources, and whether the 2G verdict applies universally.',
    ],
    issues: [
      'Whether the mandate of Article 14 requires that every natural resource must be alienated exclusively through competitive public auction.',
      'What is the scope of Article 14 scrutiny over economic policies regarding the disposal of state largesse.',
    ],
    arguments: {
      appellant: [
        'The Attorney General argued that auctions maximize revenue but may defeat public welfare objectives like rural electrification, water supply, and affordable housing. Policy choice belongs to the executive.',
      ],
      respondent: [
        'Interveners argued that auctions eliminate discretion, nepotism, and corruption, and are the only foolproof constitutional safeguard.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Article 143 & Article 14',
        title: 'Presidential Reference and constitutional limits on executive disposal of resources',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Auction is not a constitutional dogma under Article 14',
        explanation:
          'Kapadia, C.J. held that auction is not the sole method for alienating natural resources. While auction may be the best method for commercial profit-making resources like spectrum, other natural resources (land for schools, water for irrigation, minerals for infrastructure) may be allocated through administrative mechanisms to fulfill Directive Principles (Article 39(b)).',
      },
      {
        heading: 'Fairness and non-arbitrariness are the true constitutional tests',
        explanation:
          'Article 14 does not require revenue maximization as an absolute constitutional value. What Article 14 demands is that whatever method is chosen must be non-arbitrary, transparent, fair, and based on objective criteria designed to subserve the common good.',
      },
    ],
    decision:
      'Presidential Reference answered. Clarified that auction is not the only constitutional mode for disposing of natural resources; choice of method depends on the nature of the resource and public policy.',
    holding:
      'Auction is not the sole constitutional method for alienating all natural resources. Article 14 mandates fairness and transparency, not universal auctions.',
    ratioDecidendi:
      'Under Article 14 of the Constitution, public auction is not an indispensable constitutional mandate for the alienation of every natural resource. The State may adopt alternative methods of allocation to achieve socio-economic objectives under Article 39(b), provided the procedure adopted is fair, transparent, rational, and free from arbitrariness or favoritism.',
    obiterDicta:
      'Economic policies must balance fiscal revenue maximization against broader distributive welfare imperatives.',
    relatedCases: [
      {
        judgmentId: 'cpil-2g-spectrum-2012',
        caseName: 'Centre for Public Interest Litigation v. Union of India',
        citation: '(2012) 3 SCC 1',
        relationship: 'clarified',
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
      'Comprehensive 5-judge Constitution Bench opinion under Article 143(1).',
      'Clarified that auction is not mandatory for every natural resource.',
      'Synthesized Article 14 non-arbitrariness with Article 39(b) distributive justice.',
    ],
    mcqs: [
      {
        id: 'presidential-ref-2012-mcq-1',
        question:
          'In Natural Resources Allocation, In re, Special Reference No. 1 of 2012, what did the 5-judge Constitution Bench rule regarding public auctions?',
        options: [
          'Auction is the only constitutional method for all natural resources',
          'Auction is not the sole constitutional method for all natural resources',
          'Private negotiations are always unconstitutional',
          'Article 143 opinions are strictly binding precedents on High Courts',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench clarified that auction is not the sole constitutional method for alienating all natural resources, and fairness governs.',
      },
    ],
  },
  {
    id: 'suk-das-1986',
    caseName: 'Suk Das v. Union Territory of Arunachal Pradesh',
    shortName: 'Suk Das (Right to Free Legal Aid)',
    citation: '(1986) 2 SCC 401',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1986,
    bench: '2-Judge Bench',
    judges: ['P.N. Bhagwati, C.J.', 'D.P. Madon, J.'],
    subject: 'Criminal Procedure / Constitution',
    topics: ['Free Legal Aid', 'Article 21 & 39A', 'Vitiation of Trial', 'Section 304 CrPC'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Article 39A', 'Legal Aid', 'Section 304 CrPC', 'Fair Trial'],
    summary:
      'Authoritative Supreme Court ruling establishing that the right of an indigent accused to free legal aid is an absolute fundamental right under Article 21 read with Article 39A. Held that failure of the trial court to provide free legal assistance to an unrepresented indigent accused vitiates the entire trial and renders the resulting conviction null and void.',
    facts: [
      'Suk Das, a low-paid government employee in Arunachal Pradesh, was prosecuted for criminal intimidation and trespass.',
      'He was too poor to engage an advocate and was unrepresented throughout the trial.',
      'The Magistrate did not inform him of his right to free legal aid at State expense, conducted the trial, and convicted and sentenced him to two years imprisonment.',
      'His appeal to the High Court was dismissed on the reasoning that he had never applied for legal aid.',
      'He appealed to the Supreme Court.',
    ],
    issues: [
      'Does the failure of a trial court to provide free legal aid to an indigent accused vitiate the conviction under Article 21.',
      'Is the right to free legal aid contingent on the accused specifically applying for it.',
    ],
    arguments: {
      appellant: [
        'An indigent, illiterate accused does not know his legal rights; the court has a constitutional duty under Article 21 and Section 304 CrPC to offer free counsel.',
      ],
      respondent: [
        'The accused participated in the trial and cross-examined witnesses; since he never applied for legal aid, the trial cannot be invalidated.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 39A',
        title: 'Right to free legal aid and fair trial procedure',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 304 CrPC / Section 341 BNSS',
        title: 'Legal aid to accused at State expense in certain trials',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Right to legal aid does not depend on an application',
        explanation:
          'Bhagwati, C.J. held that in a country where majority of litigants are illiterate, poor, and unrepresented, to require an indigent accused to apply for legal aid would be to make the constitutional guarantee of Article 21 an illusion. The trial judge is under an affirmative obligation to inform the accused of his right to free legal representation at State expense.',
      },
      {
        heading: 'Denial of legal aid vitiates the trial',
        explanation:
          'Since legal representation is an essential ingredient of a just, fair, and reasonable procedure under Article 21, a trial conducted without providing legal counsel to an indigent accused is completely vitiated and the conviction must be quashed.',
      },
    ],
    decision:
      'Appeal allowed. Conviction and sentence quashed. Accused acquitted due to passage of time.',
    holding:
      'Failure to provide free legal aid to an indigent accused vitiates the entire trial under Article 21.',
    ratioDecidendi:
      'The right to free legal aid under Article 21 read with Article 39A and Section 304 CrPC is a fundamental right. It is the affirmative duty of the trial court to inform an indigent accused of this right and provide competent counsel at State expense; failure to do so invalidates the trial and renders any conviction illegal.',
    obiterDicta:
      'A trial without legal defense for a poor person is not a trial at all, but a mockery of justice.',
    relatedCases: [
      {
        judgmentId: 'hussainara-khatoon-1979',
        caseName: 'Hussainara Khatoon (I) v. Home Secretary, State of Bihar',
        citation: '(1980) 1 SCC 81',
        relationship: 'applied',
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
      'Leading authority holding that failure to provide legal aid vitiates trial.',
      'Trial magistrate has an affirmative duty to inform accused of free legal aid.',
      'Direct link between Article 21, Article 39A, and Section 304 CrPC (Section 341 BNSS).',
    ],
    mcqs: [
      {
        id: 'suk-das-mcq-1',
        question:
          'In Suk Das v. Union Territory of Arunachal Pradesh (1986), what consequence follows if the trial court fails to provide legal aid to an indigent accused?',
        options: [
          'A fine is imposed on the Magistrate',
          'The entire trial is vitiated and conviction is rendered illegal',
          'The accused must pay costs to the State',
          'The trial continues without objection',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that failure to provide legal aid to an indigent accused vitiates the trial and invalidates the conviction.',
      },
    ],
  },
  {
    id: 'khatri-ii-bhagalpur-1981',
    caseName: 'Khatri (II) v. State of Bihar (Bhagalpur Blinding Case)',
    shortName: 'Khatri (II) (Bhagalpur Blindings)',
    citation: '(1981) 1 SCC 627',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1981,
    bench: '2-Judge Bench',
    judges: ['P.N. Bhagwati, J.', 'A.P. Sen, J.'],
    subject: 'Constitutional & Criminal Procedure',
    topics: ['Free Legal Aid Duty', 'Article 21', 'Magistrate Obligation', 'Custodial Torture', 'Police Atrocities'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Bhagalpur Blindings', 'Legal Aid', 'Magistrate Duty', 'Custodial Violence'],
    summary:
      'Historic public interest litigation ruling arising from the horrific blinding of 31 undertrial prisoners by Bihar Police using needles and acid. Justice P.N. Bhagwati established that the constitutional obligation to provide free legal aid to an indigent accused arises not merely at the trial stage, but from the very moment the accused is first produced before the Magistrate and at all remand stages.',
    facts: [
      'Police officers in Bhagalpur, Bihar, systematically poured acid into the eyes of 31 undertrial suspects in police custody, permanently blinding them.',
      'When the blinded prisoners were produced before local judicial magistrates for routine remands, none of the magistrates recorded the blindings, asked about injuries, or offered legal assistance.',
      'A PIL writ petition under Article 32 was filed before the Supreme Court by advocate Kapila Hingorani.',
    ],
    issues: [
      'At what precise stage does the State constitutional obligation under Article 21 to provide free legal aid to an accused person commence.',
      'What is the mandatory duty of a Judicial Magistrate when an unrepresented accused is produced for remand under Section 167 CrPC.',
    ],
    arguments: {
      appellant: [
        'Under trial prisoners were blinded by police acid while magistrates mechanically signed remand orders without even looking at the accused.',
      ],
      respondent: [
        'The State has limited financial resources to provide legal aid to all undertrials across thousands of lower courts.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Duty to provide free legal aid from the stage of first remand',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Legal aid begins at the first production stage',
        explanation:
          'Bhagwati, J. held that the right to free legal aid does not begin only when the trial commences. It is at the stage of first production and remand under Section 167 that an accused is in the greatest peril of police torture and loss of liberty. Therefore, the constitutional obligation to provide free legal aid attaches from the moment of first production.',
      },
      {
        heading: 'Magistrate duty to inform and inspect',
        explanation:
          'The Magistrate cannot remain a passive spectator. The Magistrate is under a solemn constitutional obligation to inform every indigent accused produced before him that he is entitled to free legal representation at State expense. Financial constraints of the State are no defense to fundamental right violations.',
      },
    ],
    decision:
      'Directions issued for state medical care and rehabilitation of the blinded victims. Binding guidelines laid down for all Magistrates across India.',
    holding:
      'Right to free legal aid begins at the very moment of first production before the Magistrate, not merely at trial.',
    ratioDecidendi:
      'The constitutional mandate under Article 21 of the Constitution to provide free legal aid to an indigent accused attaches from the moment the accused is first produced before the Magistrate, and continues throughout all stages of remand and trial. Magistrates are under an affirmative duty to inform unrepresented accused persons of this entitlement.',
    obiterDicta:
      'No state can plead financial or administrative poverty to escape its constitutional duty to provide fair procedure and legal assistance under Article 21.',
    relatedCases: [
      {
        judgmentId: 'hussainara-khatoon-1979',
        caseName: 'Hussainara Khatoon (I) v. Home Secretary, State of Bihar',
        citation: '(1980) 1 SCC 81',
        relationship: 'applied',
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
      'Legal aid attaches at the stage of first production/remand under Section 167 CrPC (Section 187 BNSS).',
      'Affirmative duty of Magistrate to inform the accused of their right to counsel.',
      'State cannot plead financial disability to deny fundamental rights.',
    ],
    mcqs: [
      {
        id: 'khatri-ii-mcq-1',
        question:
          'In Khatri (II) v. State of Bihar (1981), when does the constitutional right to free legal aid under Article 21 commence?',
        options: [
          'Only after the chargesheet is filed',
          'From the moment the accused is first produced before the Magistrate',
          'Only when the trial commences in Sessions Court',
          'Only at the appellate stage',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the right to free legal aid commences from the very moment the accused is first produced before the Magistrate.',
      },
    ],
  },
  {
    id: 'charan-lal-sahu-1990',
    caseName: 'Charan Lal Sahu v. Union of India (Bhopal Gas Act Validity)',
    shortName: 'Charan Lal Sahu (Bhopal Act Validity)',
    citation: '(1990) 1 SCC 613',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1990,
    bench: '5-Judge Constitution Bench',
    judges: [
      'Sabyasachi Mukharji, C.J.',
      'Ranganath Misra, J.',
      'B.C. Ray, J.',
      'K.N. Singh, J.',
      'S. Saikat, J.',
    ],
    subject: 'Constitutional & Environmental Law',
    topics: ['Parens Patriae', 'Bhopal Gas Disaster Act', 'Article 14 & 21', 'Mass Tort Litigation'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Parens Patriae', 'Bhopal Gas', 'Mass Tort', 'Article 21'],
    summary:
      'Historic 5-judge Constitution Bench judgment upholding the constitutional validity of the Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985. Held that the Central Government was constitutionally empowered under the sovereign doctrine of parens patriae to represent all victims exclusively and litigate or settle claims on their behalf against Union Carbide Corporation.',
    facts: [
      'In December 1984, the catastrophic leak of toxic methyl isocyanate gas from the Union Carbide plant in Bhopal killed thousands and injured over 500,000 citizens.',
      'To prevent American personal injury ambulance chasers from exploiting destitute victims, Parliament enacted the Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985, conferring exclusive power on the Central Government to represent all claimants in India and abroad.',
      'Victims organizations challenged the Act as unconstitutional, arguing that divesting individual victims of their right to choose counsel and litigate violated Articles 14, 19, and 21.',
    ],
    issues: [
      'Whether the Bhopal Act divesting individual victims of the right to pursue their own mass tort claims violates Articles 14, 19(1)(g), and 21.',
      'What is the scope of the doctrine of parens patriae in modern constitutional democracies.',
    ],
    arguments: {
      appellant: [
        'The Central Government was partly responsible as a joint tortfeasor (having granted industrial licenses) and had a conflict of interest, making it unfit to represent the victims exclusively.',
      ],
      respondent: [
        'The victims were poor, illiterate, and devastated; only the sovereign power of the Indian State could battle a multi-billion dollar multinational corporation in US and Indian courts.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 14, 19 & 21',
        title: 'Doctrine of Parens Patriae and State representation of mass disaster victims',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Sovereign doctrine of parens patriae',
        explanation:
          'Mukharji, C.J. held that the State possesses sovereign constitutional authority under the doctrine of parens patriae to step in and protect citizens who, by reason of physical catastrophe, poverty, or helplessness, are unable to protect their own legal interests against a global corporate conglomerate.',
      },
      {
        heading: 'Fairness and consultation with victims',
        explanation:
          'While upholding the statute, the Court held that the government acts in a fiduciary capacity as a trustee for the victims. The Central Government was bound to consult and inform victims before entering into final settlements.',
      },
    ],
    decision:
      'Petitions dismissed. The Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985 upheld as fully constitutional under the doctrine of parens patriae.',
    holding:
      'Bhopal Gas Act upheld. Central Government empowered under doctrine of parens patriae to represent all victims exclusively.',
    ratioDecidendi:
      'Under the doctrine of parens patriae, the sovereign State is constitutionally entitled to assume exclusive custody and representation of mass disaster victims claims against a multinational enterprise to prevent exploitation and secure collective compensation, which does not violate Articles 14 or 21.',
    obiterDicta:
      'In unprecedented mass disasters, individual tort litigation collapses into procedural paralysis unless marshaled by sovereign action.',
    relatedCases: [
      {
        judgmentId: 'bhopal-gas-1991',
        caseName: 'Union Carbide Corp. v. Union of India',
        citation: '(1991) 4 SCC 584',
        relationship: 'affirmed',
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
      'Constitutional validation of the Bhopal Gas Leak Disaster Act, 1985.',
      'Exposition of the sovereign doctrine of "parens patriae".',
      'Legal architecture of mass tort claims and sovereign representation.',
    ],
    mcqs: [
      {
        id: 'charan-lal-mcq-1',
        question:
          'In Charan Lal Sahu v. Union of India (1990), under which sovereign doctrine did the Supreme Court uphold the government exclusive right to represent Bhopal gas victims?',
        options: ['Eminent domain', 'Parens patriae', 'Police power', 'Act of State'],
        correctIndex: 1,
        explanation:
          'The Constitution Bench upheld the Act under the sovereign doctrine of parens patriae (parent of the nation).',
      },
    ],
  },
  {
    id: 'vijay-madanlal-choudhary-2022',
    caseName: 'Vijay Madanlal Choudhary v. Union of India',
    shortName: 'Vijay Madanlal Choudhary (PMLA Validity)',
    citation: '(2022) 10 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2022,
    bench: '3-Judge Bench',
    judges: ['A.M. Khanwilkar, J.', 'Dinesh Maheshwari, J.', 'C.T. Ravikumar, J.'],
    subject: 'Special Criminal Legislation / PMLA',
    topics: ['PMLA Constitutional Validity', 'Section 45 Twin Bail Conditions', 'ECIR not FIR', 'ED Summon Statements Section 50'],
    tags: ['AIBE', 'Judiciary', 'PMLA', 'Section 45', 'Section 50', 'Money Laundering', 'ED Summons', 'Bail Conditions'],
    summary:
      'Watershed 3-judge bench decision upholding the sweeping constitutional validity of the Prevention of Money Laundering Act, 2002 (PMLA). Upheld the stringent "twin conditions" of bail under Section 45, ruled that an ECIR (Enforcement Case Information Report) is an internal administrative document not equivalent to an FIR, and held that statements recorded under Section 50 PMLA by ED officers do not violate Article 20(3).',
    facts: [
      'Over 200 petitions challenged the constitutional validity of numerous provisions of the PMLA, 2002, amended by Parliament in 2018 and 2019.',
      'Key provisions challenged included: (1) Re-introduction of twin bail conditions under Section 45 (after being struck down in Nikesh Tarachand in 2018); (2) Refusal to provide copy of ECIR to the accused; (3) Power to record self-incriminating statements on oath under Section 50; (4) Sweeping definition of "money laundering" under Section 3.',
    ],
    issues: [
      'Whether the twin conditions for bail under Section 45 PMLA are constitutionally valid.',
      'Whether an ECIR is equivalent to an FIR, mandating its supply to the accused at the time of arrest.',
      'Whether summons and statements recorded under Section 50 PMLA violate the fundamental right against self-incrimination under Article 20(3).',
    ],
    arguments: {
      appellant: [
        'PMLA provisions create a police state: arresting without supplying the ECIR, compelling self-incriminating statements under Section 50, and imposing near-impossible twin bail hurdles violates Articles 14, 20(3), and 21.',
      ],
      respondent: [
        'Money laundering is a global menace threatening national sovereignty and financial integrity. PMLA is a sui generis regulatory statute, not an ordinary penal code.',
      ],
    },
    provisions: [
      {
        actId: 'pmla',
        actName: 'Prevention of Money Laundering Act, 2002',
        provisionId: 'pmla-validity',
        section: 'Sections 3, 5, 19, 45, 50',
        title: 'Money laundering offences, arrest powers, twin bail conditions, and summon evidence',
        subjectSlug: 'special-laws',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-20',
        article: 'Article 20(3) & Article 21',
        title: 'Right against self-incrimination and personal liberty under special penal statutes',
        subjectSlug: 'constitution',
        topicId: 'art-20',
      },
    ],
    reasoning: [
      {
        heading: 'Constitutionality of Section 45 twin bail conditions',
        explanation:
          'Khanwilkar, J. held that money laundering is a heinous economic offence with international ramifications. Parliament cured the defect identified in Nikesh Tarachand by amending Section 45 to apply to all PMLA offences. Imposing stringent twin bail conditions is reasonable and constitutional.',
      },
      {
        heading: 'ECIR vs FIR and Section 50 statements',
        explanation:
          'The Court held that an ECIR is an internal document of the ED and cannot be equated with an FIR under Section 154 CrPC. ED officers are not "police officers". Consequently, statements recorded under Section 50 during an inquiry are not hit by Section 25 Evidence Act or Article 20(3), provided the person was not an accused at that time.',
      },
    ],
    decision:
      'Petitions dismissed. All challenged provisions of PMLA, 2002, including Sections 3, 5, 19, 45, and 50, upheld as fully constitutional.',
    holding:
      'PMLA provisions upheld: Section 45 twin bail conditions valid, ECIR need not be supplied like FIR, and Section 50 statements are admissible.',
    ratioDecidendi:
      'Under the Prevention of Money Laundering Act, 2002, money laundering is an independent, continuous offence against the economic fabric of the nation. The twin bail conditions under Section 45 PMLA are constitutionally valid. Enforcement Directorate officers are not police officers, and statements recorded during Section 50 inquiries are admissible in evidence and not barred by Article 20(3).',
    obiterDicta:
      'Economic offences require specialized statutory weapons to dismantle transnational financial illicit networks.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Comprehensive validation of the Prevention of Money Laundering Act, 2002.',
      'Upheld Section 45 twin bail conditions.',
      'Held ECIR is not an FIR; Section 50 statements to ED officers are admissible.',
    ],
    mcqs: [
      {
        id: 'pmla-validity-mcq-1',
        question:
          'In Vijay Madanlal Choudhary v. Union of India (2022), what did the Supreme Court hold regarding the status of an ECIR?',
        options: [
          'It is an FIR that must be published on the police portal',
          'It is an internal document of the ED and not equivalent to an FIR',
          'It is void without Magistrate sanction',
          'It must be filed within 24 hours of predicate offence',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that an ECIR is an internal document of the ED and cannot be equated with an FIR under Section 154 CrPC.',
      },
    ],
  },
  {
    id: 'd-velusamy-2010',
    caseName: 'D. Velusamy v. D. Patchaiammal',
    shortName: 'D. Velusamy (Relationship in Nature of Marriage)',
    citation: '(2010) 10 SCC 469',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2010,
    bench: '2-Judge Bench',
    judges: ['Markandey Katju, J.', 'T.S. Thakur, J.'],
    subject: 'Family Law / Domestic Violence',
    topics: ['Relationship in Nature of Marriage', 'Section 2(f) DV Act', 'Live-In Relationships', 'Maintenance Section 125 CrPC'],
    tags: ['AIBE', 'Judiciary', 'DV Act', 'Section 2(f)', 'Live-In', 'Maintenance', 'Section 125 CrPC', 'Common Law Marriage'],
    summary:
      'Pioneering Supreme Court judgment defining the precise legal requirements of a "relationship in the nature of marriage" under Section 2(f) of the Domestic Violence Act, 2005. Held that not all live-in relationships or casual sexual encounters qualify for maintenance; formulated 4 mandatory conditions analogous to common law marriages.',
    facts: [
      'Patchaiammal filed an application for maintenance under Section 125 CrPC alleging that she married Velusamy in 1986 and lived with him as husband and wife.',
      'Velusamy proved that he had already married a woman named Lakshmi in 1980, which marriage was still subsisting, and denied marrying Patchaiammal.',
      'The Family Court and High Court awarded maintenance to Patchaiammal.',
      'Velusamy appealed to the Supreme Court, contending that a second wife during subsistence of first marriage is not a legally wedded wife entitled to Section 125 CrPC.',
    ],
    issues: [
      'Can a woman in a live-in relationship claim maintenance under Section 125 CrPC or Section 2(f) of the Domestic Violence Act.',
      'What are the mandatory criteria to constitute a "relationship in the nature of marriage" under Section 2(f) DV Act.',
    ],
    arguments: {
      appellant: [
        'Section 125 CrPC applies strictly to legally wedded wives; an adulterous or bigamous relationship cannot confer maintenance rights.',
      ],
      respondent: [
        'The DV Act 2005 expanded protections to women in domestic relationships in the "nature of marriage" to protect vulnerable partners from destitution.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Protection of Women from Domestic Violence Act, 2005',
        provisionId: 'domestic-relationship',
        section: 'Section 2(f) & Section 12',
        title: 'Domestic relationship in the nature of marriage and maintenance relief',
        subjectSlug: 'family-law',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 's-144',
        section: 'Section 125 CrPC / Section 144 BNSS',
        title: 'Order for maintenance of wives, children, and parents',
        subjectSlug: 'bnss',
        topicId: 's-144',
      },
    ],
    reasoning: [
      {
        heading: 'Four criteria for "relationship in the nature of marriage"',
        explanation:
          'Katju, J. laid down 4 mandatory conditions: (1) The couple must hold themselves out to society as being akin to spouses; (2) They must be of legal age to marry; (3) They must be otherwise qualified to enter into a legal marriage (including being unmarried); (4) They must have voluntarily cohabited and held themselves out to the world as spouse-equivalents for a significant period. A mere "keep" or casual live-in weekend partner is not protected.',
      },
      {
        heading: 'Bigamous cohabitation excluded',
        explanation:
          'If a man has a "keep" whom he maintains financially and uses mainly for sexual purposes and/or as a servant, it would not be a relationship in the nature of marriage. If the woman was aware that the man was already married, she cannot claim the status of a domestic relationship under Section 2(f).',
      },
    ],
    decision:
      'Appeal allowed. Matter remanded to Family Court to determine whether the 4 criteria were satisfied on evidence.',
    holding:
      'To qualify for DV Act maintenance, live-in relationships must satisfy 4 conditions akin to common-law marriage. Casual relationships excluded.',
    ratioDecidendi:
      'Under Section 2(f) of the Protection of Women from Domestic Violence Act, 2005, a "relationship in the nature of marriage" requires that: (a) the couple must hold themselves out to society as akin to spouses; (b) they must be of legal age to marry; (c) they must be otherwise qualified to enter into a legal marriage; and (d) they must have voluntarily cohabited for a significant period of time. A casual live-in arrangement or bigamous concubinage does not qualify.',
    obiterDicta:
      'Parliament protected common law marriages, not short-term liaisons or arrangements of convenience.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The 4 mandatory tests for "relationship in the nature of marriage" under Section 2(f) DV Act.',
      'Distinction between common-law spousal relationships and casual live-in liaisons.',
      'Interplay of Section 125 CrPC (Section 144 BNSS) and the Domestic Violence Act.',
    ],
    mcqs: [
      {
        id: 'velusamy-mcq-1',
        question:
          'In D. Velusamy v. D. Patchaiammal (2010), what did the Supreme Court require for a live-in relationship to be in the "nature of marriage" under Section 2(f) DV Act?',
        options: [
          'Registration with a Sub-Registrar',
          'Satisfaction of 4 conditions including holding themselves out to society as akin to spouses',
          'Cohabitation for at least 15 years',
          'Birth of at least one child',
        ],
        correctIndex: 1,
        explanation:
          'The Court required satisfaction of 4 mandatory conditions akin to common-law marriage, including holding themselves out as spouses.',
      },
    ],
  },
]
