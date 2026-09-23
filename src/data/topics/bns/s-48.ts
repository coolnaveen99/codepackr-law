import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 48 of the Bharatiya Nyaya Sanhita, 2023 is a groundbreaking legislative innovation closing a historical territorial loophole: it criminalizes the abetment committed outside India of an offence executed within India, codifying the objective territorial principle for cross-border cyber, terror, and financial syndicates.',

  study: `Topic at a glance
Section 48 of the Bharatiya Nyaya Sanhita, 2023 represents one of the most vital modernizing innovations enacted by Parliament in replacing the colonial Indian Penal Code, 1860. Under the old Code, Section 108A covered abetment *in India* of offences *outside India*, but the IPC contained no explicit statutory section addressing the reverse and far more dangerous scenario: a foreign national or person physically *outside India* instigating, conspiring, or aiding the commission of a crime *inside India*. This omission generated immense judicial friction, forcing courts to rely on strained interpretations of constructive presence. Section 48 delivers an unassailable statutory mandate codifying the "Effects Doctrine" (objective territorial jurisdiction).

Statutory Text (Section 48 BNS)
"A person abets an offence within the meaning of this Sanhita who, without and beyond India, abets the commission of any act in India which would constitute an offence if committed by that person in India."

The Historic Loophole and The Mobarik Ali Ahmed Doctrine
In the celebrated constitutional authority of Mobarik Ali Ahmed v. State of Bombay, AIR 1957 SC 857, a Pakistani national stationed in Karachi made fraudulent representations via telegrams, letters, and telephone calls to an Indian merchant in Bombay, inducing him to part with Rs. 5,00,000 for rice that was never delivered. When the accused was subsequently arrested in England and extradited to India, he argued that since he was a foreign national physically located in Karachi throughout the transaction, he owed no allegiance to Indian law and could not be tried under the IPC.

The Supreme Court rejected his plea, holding that the offence of cheating was completed in Bombay where the money was parted with. However, the IPC lacked a clear provision for accessorial abetment where the physical crime was executed in India by local accomplices while the mastermind remained abroad. Section 48 BNS now provides the explicit, unambiguous statutory basis for prosecuting offshore conspirators.

Modern Practical Application: Transnational Syndicates
In modern criminal administration, Section 48 is the primary statutory weapon against:
1. Cross-Border Cyber Attacks: Foreign hackers in Eastern Europe or Southeast Asia deploying ransomware or unauthorized access against Indian critical infrastructure;
2. Offshore Terrorist Financing & Gang Kingpins: Crime syndicate bosses operating from Canada, Dubai, or Pakistan orchestrating extortions, targeted killings, or weapons drops inside India;
3. Narcotics & Contraband Trafficking: International drug lords dispatching maritime vessels carrying contraband into Indian territorial waters.`,

  sections: [
    {
      id: 's-48-module-1',
      title: 'Provenance, Legislative Necessity & The 2023 Statutory Innovation',
      order: 1,
      content: [
        'Entirely new statutory provision introduced in the Bharatiya Nyaya Sanhita, 2023. Has no direct section equivalent in the Indian Penal Code, 1860.',
        'Legislative Necessity: To close the glaring asymmetry of the colonial code, which penalized abetment in India for foreign crimes (IPC s. 108A), but failed to explicitly codify foreign abetment targeting India.',
        'Objective Territorial Principle: Grounded in customary international law (The Lotus Case, PCIJ 1927), establishing that a sovereign state may punish acts initiated abroad that produce constituent elements or harmful effects within its national borders.',
        'Symmetrical Harmony: Section 47 and Section 48 together complete India\'s 360-degree jurisdictional perimeter over transnational accessorial liability.',
      ],
    },
    {
      id: 's-48-module-2',
      title: 'Textual Anatomy & Jurisprudential Deconstruction',
      order: 2,
      content: [
        '"without and beyond India": Covers foreign citizens and non-resident Indians physically present in any foreign state, international airspace, or high seas.',
        '"abets the commission of any act in India": The accessorial act (instigation, conspiratorial direction, electronic aid, financial transfer) is launched abroad, but aims at an actus reus in India.',
        '"which would constitute an offence if committed by that person in India": Hypothetical territorial test ensuring that the target act violates the substantive provisions of the BNS.',
        'Extinguishment of the "Alien Sanctuary" Defence: Foreign nationals can no longer plead absence of territorial allegiance to escape Indian penal law when targeting Indian citizens.',
      ],
    },
    {
      id: 's-48-module-3',
      title: 'Mandatory Proving Ingredients & Doctrinal Prerequisites',
      order: 3,
      content: [
        '1. The abettor was physically located outside the territorial borders of India when performing the accessorial act.',
        '2. The abettor engaged in instigation, conspiracy, or intentional aiding under Section 45 BNS.',
        '3. The target crime was committed, attempted, or designed to take place within Indian territory.',
        '4. The target act constitutes an offence punishable under the Bharatiya Nyaya Sanhita or Indian special penal statutes.',
      ],
    },
    {
      id: 's-48-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Digital Forensics & Electronic IP Tracing (s. 63 BSA): Production of server logs, virtual private network (VPN) decryption reports, and ISP header data establishing that commands originated from foreign IP addresses.',
        'International Intercepts & Intelligence under MLAT: Transcripts of wiretapped satellite calls or encrypted messaging apps obtained via formal Mutual Legal Assistance Treaties under Section 115 BNSS.',
        'Financial Tracing & Cryptographic Ledgers: Tracing cryptocurrency wallet transactions, blockchain transfers, or foreign bank SWIFT payments made from abroad to local foot-soldiers in India.',
        'Identification of Foreign Accused: Establishing the physical identity and foreign location of the mastermind through passport data, Interpol Red Corner Notices, and facial recognition.',
      ],
    },
    {
      id: 's-48-module-5',
      title: 'Procedural Roadmap, Interpol Red Notices & Trial in Absentia',
      order: 5,
      content: [
        'Jurisdiction of Indian Court (Section 198 BNSS): The court in India within whose territorial limits the target offence was executed or was to be executed has full subject-matter and territorial jurisdiction.',
        'Trial in Absentia under Section 356 BNSS: Landmark procedural provision of the BNSS authorizing the trial and conviction of proclaimed offenders who have absconded abroad and refuse to return.',
        'Interpol Red Notice & Extradition: The investigating agency (NIA, CBI, State Police) secures an arrest warrant from the Indian Magistrate and approaches Interpol via the National Central Bureau (NCB New Delhi) for extradition.',
        'Prosecution Sanction: Governed by Section 208 BNSS; where the accused is extradited or brought to India, executive sanction facilitates seamless trial.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-48',
      section: 's. 48',
      title: 'Abetment outside India for offence in India',
    },
  ],

  examples: [
    {
      id: 's-48-ill-1',
      title: 'Illustration 1 — Foreign Cyber-Syndicate Directing Bank Fraud in Mumbai (Statutory Application)',
      illustrationType: 'statutory',
      description:
        'F, a foreign national residing in country E, develops a malicious banking Trojan, remotely infiltrates the automated clearing house server of a scheduled commercial bank in Mumbai, and instructs local operatives in Mumbai via encrypted channels to withdraw Rs. 15,00,000 from compromised accounts. F has never set foot in India. Under Section 48 BNS, F is guilty of abetting theft, cheating, and criminal breach of trust in India: F, being without and beyond India, abetted the commission of an act in India which constitutes an offence under the Sanhita. F is triable by the Sessions Court in Mumbai upon arrest or extradition.',
    },
    {
      id: 's-48-ill-2',
      title: 'Illustration 2 — Foreign Advice on Wholly Foreign Transaction (Immunity Applies / No Indian Act)',
      illustrationType: 'fail-scenario',
      description:
        'G, a financial consultant in London, advises an American corporation to terminate a supply contract with an Indian supplier in accordance with English commercial law. The termination causes financial loss to the Indian supplier, who files an FIR in Delhi charging G with abetment of cheating under Section 48 BNS. G is not liable under Section 48: Section 48 requires abetting the commission of an act in India which constitutes a criminal offence; lawful termination of a commercial contract governed by foreign law is not a penal offence, and Section 48 cannot be converted into an instrument of civil retaliation.',
    },
  ],

  hypotheticals: [
    {
      id: 's-48-hypo-1',
      title: 'Chamber Practical Problem — Offshore Gangland Hit Orchestrated via Encrypted Satellite Phone',
      facts:
        'D, a notorious underworld fugitive residing in a foreign nation, harbors personal rivalry against businessman T in Ahmedabad. D contacts local hitman H in Ahmedabad via an encrypted satellite phone application, promises H Rs. 50,00,000, and arranges for weapons to be dropped at a designated drop-box in Gujarat. H collects the pistol and shoots T in Ahmedabad, causing grievous bullet injuries. H is arrested at the scene and confesses that D orchestrated, financed, and directed the entire assassination attempt from abroad. The Crime Branch files a chargesheet against D in Ahmedabad under Section 109 (Attempt to Murder) read with Section 48 BNS.',
      question:
        'Can the Sessions Court in Ahmedabad frame charges and conduct proceedings against D under Section 48 BNS notwithstanding D\'s foreign residence?',
      applicableLaw:
        'Section 48 and Section 109 of the Bharatiya Nyaya Sanhita, 2023 read with Section 198 and Section 356 BNSS.',
      analysis:
        'Section 48 BNS explicitly applies to any person who, "without and beyond India, abets the commission of any act in India which would constitute an offence if committed by that person in India." D, while physically located abroad, intentionally instigated, planned, and financed an attempt to murder executed in Ahmedabad. Under Section 198 BNSS, the court in Ahmedabad within whose local jurisdiction the shooting occurred has full territorial jurisdiction. Furthermore, if D refuses to surrender pursuant to non-bailable warrants and an Interpol Red Corner Notice, the Sessions Court in Ahmedabad is legally empowered to declare D a proclaimed offender and conduct a trial in absentia under Section 356 BNSS.',
      conclusion:
        'The Sessions Court in Ahmedabad has complete statutory jurisdiction under Section 48 BNS to try and convict D. Section 48 was specifically designed to defeat offshore immunity.',
    },
  ],

  distinctions: [
    {
      id: 's-48-dist-1',
      title: 'Section 48 BNS vs Section 47 BNS',
      left: 'Section 48 BNS (Offshore Abettor)',
      right: 'Section 47 BNS (Domestic Abettor)',
      rows: [
        {
          point: 'Location of Abettor',
          left: 'Physically OUTSIDE India (without and beyond).',
          right: 'Physically IN India.',
        },
        {
          point: 'Location of Target Offence',
          left: 'Target offence is executed IN India.',
          right: 'Target offence is executed OUTSIDE India.',
        },
        {
          point: 'Historical Origin',
          left: 'Newly enacted in 2023 to close the territorial gap.',
          right: 'Successor to colonial Section 108A IPC.',
        },
      ],
    },
    {
      id: 's-48-dist-2',
      title: 'Jurisdiction over Citizens vs Foreign Nationals under Section 48',
      left: 'Indian Citizens Abroad',
      right: 'Foreign Nationals Abroad',
      rows: [
        {
          point: 'Sovereign Allegiance',
          left: 'Bound by personal extraterritorial jurisdiction under Section 1(4) BNS anywhere in the world.',
          right: 'Bound under Section 48 BNS by virtue of the objective territorial effects doctrine impacting India.',
        },
        {
          point: 'Extradition Legal Ground',
          left: 'Nationality and sovereign jurisdiction.',
          right: 'Territorial effect of the crime under bilateral treaties.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-48-trap-1',
      trap: 'A foreign national who has never visited India cannot be prosecuted by Indian courts for abetment.',
      correction:
        'Section 48 BNS explicitly eliminates this defence. If a foreigner outside India abets a crime committed inside India, Indian courts have full statutory jurisdiction over them under the objective territorial principle.',
    },
    {
      id: 's-48-trap-2',
      trap: 'Section 48 requires the abettor to be physically extradited before any judicial proceedings can take place.',
      correction:
        'Under Section 356 BNSS, where a proclaimed offender abetting crimes from abroad absconds and fails to appear, the court can conduct an inquiry and trial in absentia, recording evidence and delivering a binding verdict.',
    },
  ],

  cases: [
    {
      name: 'Mobarik Ali Ahmed v. State of Bombay',
      citation: 'AIR 1957 SC 857 / 1958 SCR 328',
      court: 'Supreme Court of India (Constitution Bench)',
      holding:
        'A Pakistani national in Karachi who cheated a complainant in Bombay through cross-border communications was triable by Indian courts under the territorial principle.',
      ratioDecidendi:
        'The physical presence of the accused in India at the time of the offence is not essential if the constituent acts of the offence take effect within Indian territory. Section 48 BNS now codifies this principle as statutory law.',
    },
    {
      name: 'State of Maharashtra v. Bikas',
      citation: '(2000) 2 SCC 553',
      court: 'Supreme Court of India',
      holding:
        'Affirmed that cross-border conspirators directing criminal acts within India are amenable to Indian criminal jurisdiction.',
      ratioDecidendi:
        'The sovereign authority of Indian courts extends to all persons whose criminal acts culminate within the territory of India.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-48-qa-1',
      draftingCategory: 'brief',
      question:
        'Prepare an IRAC Case Brief on Mobarik Ali Ahmed v. State of Bombay, AIR 1957 SC 857, demonstrating how it laid the doctrinal foundation for Section 48 BNS.',
      answer: `IRAC CASE BRIEF: MOBARIK ALI AHMED v. STATE OF BOMBAY (AIR 1957 SC 857)

1. FACTS:
The appellant Mobarik Ali Ahmed was a Pakistani national carrying on business in Karachi. By letters, telegrams, and phone calls from Karachi, he fraudulently represented to a merchant in Bombay that he had large stocks of rice available for export to India. He induced the Bombay merchant to transfer Rs. 5,00,000 to his agent. No rice was ever supplied. The appellant subsequently fled to England, where he was arrested and extradited to Bombay. He challenged his conviction for Cheating under Section 420 IPC, contending that as a foreign citizen physically located in Pakistan throughout the transaction, he owed no allegiance to Indian law and could not be tried by an Indian court.

2. ISSUE:
Does an Indian court have penal jurisdiction over a foreign national who, while remaining physically outside India, initiates and directs a criminal offence that produces its criminal effect and completion within India?

3. RULE:
Under the objective territorial principle, a state has jurisdiction over crimes that take effect within its territory, even if initiated abroad. Section 48 BNS has now given express statutory form to this rule for accessorial abetment.

4. APPLICATION:
The Constitution Bench of the Supreme Court held:
(a) The physical presence of the accused within the country at the time of the offence is not a condition precedent to territorial jurisdiction;
(b) The fraudulent representations were received and acted upon in Bombay, and the money was parted with in Bombay;
(c) The offence was completed within the territory of India;
(d) The claim that a foreigner outside India owes no obedience to Indian law is fallacious when that foreigner chooses to project criminal acts into Indian territory.

5. CONCLUSION:
The conviction was upheld. Mobarik Ali Ahmed established the foundational doctrine of objective territoriality that Parliament codified into statutory text in Section 48 of the Bharatiya Nyaya Sanhita, 2023.`,
      explanation:
        'The foundational Constitution Bench decision establishing objective territorial jurisdiction over cross-border crimes targeting India.',
    },
    {
      id: 's-48-qa-2',
      draftingCategory: 'submissions',
      question:
        'Draft a 6-part Written Submission for the prosecution opposing a quashing petition filed by an offshore conspirator under Section 48 BNS.',
      answer: `IN THE HIGH COURT OF JUDICATURE AT BOMBAY
CRIMINAL APPLICATION (APL) NO. 882 OF 2025
IN THE MATTER OF:
VIKTOR CHEKHOV ... APPLICANT
VERSUS
STATE OF MAHARASHTRA & ANR. ... RESPONDENTS

WRITTEN SUBMISSIONS ON BEHALF OF THE STATE OF MAHARASHTRA UNDER SECTION 48 BNS

MOST RESPECTFULLY SHOWETH:

I. STATUTORY JURISDICTION UNDER SECTION 48 BNS
The Applicant, a foreign citizen residing in Cyprus, seeks quashing of Crime No. 412 of 2025 registered at Cyber Police Station, Bandra, Mumbai under Sections 316, 318, 48, and 61(2) BNS. It is submitted that Section 48 of the Bharatiya Nyaya Sanhita, 2023 explicitly confers jurisdiction over foreign actors abetting crimes inside India.

II. THE STATUTORY MANDATE OF SECTION 48
Section 48 BNS provides:
"A person abets an offence within the meaning of this Sanhita who, without and beyond India, abets the commission of any act in India which would constitute an offence if committed by that person in India."
Parliament specifically enacted Section 48 in 2023 to demolish the archaic defense of physical absence abroad.

III. CONCRETE ACTS OF ACCESSORIAL DIRECTION IN MUMBAI
The investigation by the Cyber Cell (Forensic Seizure Memo Ex. R-1 to R-8) conclusively proves:
1. The Applicant created and maintained the phishing command-and-control server (IP address located in Limassol, Cyprus);
2. The Applicant provided spoofed banking interfaces used by local accomplices in Mumbai to drain Rs. 8.4 Crores from Indian account holders;
3. 40% of the stolen funds were converted into Monero cryptocurrency and sent directly to the Applicant\'s digital wallet.

IV. RATIO OF MOBARIK ALI AHMED (AIR 1957 SC 857)
The Constitution Bench of the Hon\'ble Supreme Court has settled that an offshore actor who projects criminal activities into India cannot claim sovereign immunity. The harm occurred in Mumbai, the banks defrauded are in Mumbai, and the victims are in Mumbai.

V. NO PREJUDICE: REMEDY VIA TRIAL UNDER BNSS
The Applicant\'s argument that he cannot be prosecuted without his physical presence is defeated by Section 356 BNSS, which expressly provides for inquiries and trials against absconding offenders.

VI. PRAYER
In view of the clear statutory authority of Section 48 BNS, it is respectfully prayed that this Hon\'ble Court be pleased to:
(a) DISMISS the Quashing Petition with exemplary costs; and
(b) DIRECT the investigating agency to proceed with Interpol Red Corner Notice formalities.

DATED: 10.01.2026
PLACE: MUMBAI
SPECIAL PUBLIC PROSECUTOR FOR THE STATE`,
      explanation:
        'A high-level prosecution submission demonstrating the unassailable application of newly enacted Section 48 BNS against offshore cybercriminals.',
    },
  ],

  bareActPointers: [
    'BNS s. 48 — Abetment outside India for offence in India (NEW in 2023)',
    'BNS s. 48 Text — "who, without and beyond India, abets the commission of any act in India"',
    'BNS s. 47 — Symmetrical counterpart (abetment in India of offences outside)',
    'BNSS s. 356 — Trial in absentia for proclaimed offenders',
    'BNSS s. 198 — Territorial jurisdiction where offence or effect occurs',
  ],

  examTips: [
    'Always highlight that Section 48 is NEW in the BNS (IPC had no direct counterpart).',
    'Explain the "Effects Doctrine" / Objective Territorial Principle.',
    'Cite Mobarik Ali Ahmed v. State of Bombay (AIR 1957 SC 857) as the jurisprudential genesis of Section 48.',
  ],

  revisionPoints: [
    'Abettor outside India; target offence inside India.',
    'Closes historical territorial gap in colonial IPC.',
    'Applies to cybercrime, offshore terror financing, and transnational fraud.',
    'Read with Section 356 BNSS for trial in absentia.',
  ],

  relatedTopics: ['s-1', 's-45', 's-46', 's-47', 's-49', 's-61', 'general-explanations'],
}

export default content
