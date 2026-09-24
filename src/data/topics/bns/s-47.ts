import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 47 of the Bharatiya Nyaya Sanhita, 2023 establishes extra-territorial accessorial jurisdiction: a person physically in India who abets the commission of any act outside India which would constitute an offence if committed in India is guilty of abetment, triable by Indian courts.',

  study: `Topic at a glance
Section 47 of the Bharatiya Nyaya Sanhita, 2023 (succeeding Section 108A of the Indian Penal Code, 1860) confers extraterritorial jurisdiction over cross-border criminal planning. In an interconnected global economy characterized by transnational cybercrime, illicit financial flows, and international terrorism, sovereign states cannot allow their territory to serve as an offshore sanctuary for instigating crimes across borders. Section 47 establishes that if the accessorial act (instigation, conspiratorial agreement, or intentional aid) takes place on Indian soil, Indian courts have full penal jurisdiction, provided the foreign act would constitute an offence under the Sanhita if committed within India.

Statutory Text (Section 47 BNS)
"A person abets an offence within the meaning of this Sanhita who, in India, abets the commission of any act without and beyond India which would constitute an offence if committed in India.
Illustration.—A, in India, instigates B, a foreigner in a foreign country, to commit a murder in that foreign country. A is guilty of abetting murder."

The Dual Criminality Standard in Substantive Character
Section 47 applies a specialized statutory test: "which would constitute an offence if committed in India."
- The prosecution does NOT need to prove that the act is an offence under the local law of the foreign country where it is to be committed;
- The inquiry is purely hypothetical: assuming the physical act took place on Indian territory, would it violate the Bharatiya Nyaya Sanhita?
- If yes, the person who instigated, aided, or conspired in India is guilty of abetment under Section 47 BNS and subject to the full penal consequences of the Sanhita.

Interplay with Procedural Law: Sanction under Section 208 BNSS
Under Section 208 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (successor to Section 188 CrPC), where an offence is committed outside India, previous sanction of the Central Government is required before an inquiry or trial can commence. However, because the *abetment itself* physically occurred in India under Section 47 BNS, the offence of abetment was committed within the territory of India, and the police can register an FIR and investigate without prior executive sanction.`,

  sections: [
    {
      id: 's-47-module-1',
      title: 'Provenance, Transnational Jurisdiction & Legislative Objective',
      order: 1,
      content: [
        'Directly succeeds Section 108A of the Indian Penal Code, 1860 without substantive alteration.',
        'Legislative History: Inserted into the 1860 Code following the landmark ruling in Queen-Empress v. Ganpatrao Ramchandra (1894), where the Bombay High Court held that instigating an act in foreign territory was not punishable without express statutory authorization.',
        'Objective: To prevent India from being utilized as a safe haven or command center for transnational crime syndicates, hitmen, or cross-border fraud.',
        'Complements Section 48 BNS: While Section 47 covers abetment IN India for crimes OUTSIDE India, Section 48 covers abetment OUTSIDE India for crimes IN India.',
      ],
    },
    {
      id: 's-47-module-2',
      title: 'Textual Anatomy & The Hypothetical Indian Offence Test',
      order: 2,
      content: [
        '"who, in India": The abettor must perform the act of abetment (making the phone call, wiring the funds, sending the weapon, hatching the conspiracy) while physically located within Indian territory.',
        '"without and beyond India": The intended physical crime is to be executed in a foreign nation or international waters.',
        '"which would constitute an offence if committed in India": The hypothetical test. It is immaterial whether the foreign state criminalizes the conduct.',
        'Official Illustration: Clarifies that instigating a foreigner abroad to commit murder renders the instigator in India guilty of abetting murder.',
      ],
    },
    {
      id: 's-47-module-3',
      title: 'Mandatory Proving Ingredients & Doctrinal Boundaries',
      order: 3,
      content: [
        '1. The accused was physically present in India when the abetting act occurred.',
        '2. The accused performed an act of instigation, conspiratorial agreement, or intentional aid under Section 45 BNS.',
        '3. The target act was intended to be committed outside the territorial borders of India.',
        '4. The target act, if committed in India, would constitute a cognizable offence under the BNS.',
      ],
    },
    {
      id: 's-47-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Electronic & Digital Evidence (s. 63 BSA): Proving that international voice-over-IP calls, encrypted chats, or emails originated from an IP address or cell tower located within Indian territory.',
        'Banking and Wire Transfers (s. 63 BSA): Production of SWIFT messages, hawala ledgers, or foreign exchange remittances originating from Indian bank accounts to finance overseas criminal operations.',
        'Letters Rogatory & MLAT: Adducing evidence collected from foreign law enforcement through Mutual Legal Assistance Treaties under Section 115 BNSS.',
        'Proof of Indian Presence: Passport stamps, biometric immigration logs, or CDR tower locations establishing physical presence in India at the time of abetment.',
      ],
    },
    {
      id: 's-47-module-5',
      title: 'Procedural Roadmap, Forum & Extradition Implications',
      order: 5,
      content: [
        'Competent Court: Court of Session or Magistrate in India within whose local jurisdiction the communication originated or the conspiratorial meeting was held (Section 198 BNSS).',
        'Section 208 BNSS Sanction: Sanction of the Central Government is not a condition precedent to investigate or register an FIR for abetment physically committed in India.',
        'Dual Prosecution & Extradition: If the foreign country requests extradition of the abettor, India may either extradite under the Extradition Act, 1962 or prosecute domestically under Section 47 BNS (aut dedere aut judicare principle).',
        'Bail Considerations: Transnational reach and foreign connections elevate flight risk under Section 480 BNSS, requiring surrender of passport.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-47',
      section: 's. 47',
      title: 'Abetment in India of offences outside India',
    },
  ],

  examples: [
    {
      id: 's-47-ill-1',
      title: 'Illustration 1 — Hiring Foreign Hitman from New Delhi (Statutory Application)',
      illustrationType: 'statutory',
      description:
        'A, residing in New Delhi, wires Rs. 20,00,000 from his bank account in Delhi to B, a contract killer in Dubai, and sends an encrypted message instructing B to assassinate business rival C in Dubai. B executes the murder in Dubai. A is prosecuted in New Delhi for abetment of murder under Section 47 read with Section 49 and Section 103 BNS. A is fully liable: A was in India when he instigated and aided the crime; murder, if committed in India, is an offence under the Sanhita. A is tried and sentenced to life imprisonment by an Indian Sessions Court.',
    },
    {
      id: 's-47-ill-2',
      title: 'Illustration 2 — Abetting Act Legal in Foreign State but Illegal in India (Dual Criminality Paradox)',
      illustrationType: 'fail-scenario',
      description:
        'X, in Bengaluru, advises and assists Y in country F to incorporate an online commercial casino and sports-betting portal physically hosted and operating entirely within country F, where gambling is completely legal under local statutes. The Indian police arrest X for abetment under Section 47 BNS, arguing gambling is an offence in India. The court examines the scope: Section 47 requires that the act would constitute an "offence" under Indian penal law; purely regulatory municipal bans or state gambling acts that lack extraterritorial penal application do not convert legitimate overseas corporate advisory into abetment under the Sanhita.',
    },
  ],

  hypotheticals: [
    {
      id: 's-47-hypo-1',
      title: 'Chamber Practical Problem — Transnational Cyber-Extortion Orchestrated from Noida',
      facts:
        'H, operating from an apartment in Noida, Uttar Pradesh, hacks into the hospital computer server of a pediatric medical center in Frankfurt, Germany. H deploys ransomware, encrypts patient medical records, and sends an email demanding 50 Bitcoins, threatening to permanently delete infant intensive care data if the ransom is not paid. German police trace the ransomware server traffic back to H\'s IP address in Noida and notify the CBI. The CBI arrests H in Noida and files a chargesheet under Section 308(2) (Extortion) read with Section 47 BNS.',
      question:
        'Does the Special Court in Noida have jurisdiction to try H under Section 47 BNS for an extortion directed against a German hospital?',
      applicableLaw:
        'Section 47 and Section 308 of the Bharatiya Nyaya Sanhita, 2023 read with Section 198 BNSS.',
      analysis:
        'Section 47 BNS applies where a person, being in India, abets the commission of an act outside India which would constitute an offence if committed in India. Here, H physically operated in Noida, India. He created the extortionate ransomware and sent extortion demands to a victim located in Germany. Had H deployed ransomware to extort a hospital located in Mumbai or Delhi, it would undisputedly constitute Extortion under Section 308 BNS. Therefore, the hypothetical Indian offence test is satisfied. Because the criminal act of instigation, conspiracy, and technical deployment was executed from Indian soil, the Indian courts possess full territorial and extraterritorial subject-matter jurisdiction.',
      conclusion:
        'The Special Court in Noida possesses complete jurisdiction to try H under Section 47 read with Section 308 BNS. H is liable for penal conviction.',
    },
  ],

  distinctions: [
    {
      id: 's-47-dist-1',
      title: 'Section 47 BNS vs Section 48 BNS',
      left: 'Section 47 BNS',
      right: 'Section 48 BNS',
      rows: [
        {
          point: 'Location of Abettor',
          left: 'Physically located IN India.',
          right: 'Physically located OUTSIDE India.',
        },
        {
          point: 'Location of Target Offence',
          left: 'Target offence is executed OUTSIDE India.',
          right: 'Target offence is executed IN India.',
        },
        {
          point: 'Jurisdictional Nexus',
          left: 'Territorial origin of accessorial act within India.',
          right: 'Impact / objective territorial effect within India.',
        },
      ],
    },
    {
      id: 's-47-dist-2',
      title: 'Abetment under Section 47 vs Extradition',
      left: 'Domestic Trial under Section 47 BNS',
      right: 'Extradition to Foreign State',
      rows: [
        {
          point: 'Forum of Trial',
          left: 'Indian Sessions Court / Magistrate Court under Indian procedure (BNSS).',
          right: 'Foreign court under foreign procedural and evidentiary laws.',
        },
        {
          point: 'Sovereign Discretion',
          left: 'Exercised pursuant to domestic penal jurisdiction over persons on Indian soil.',
          right: 'Subject to bilateral extradition treaty and sovereign executive approval.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-47-trap-1',
      trap: 'An abettor in India cannot be prosecuted if the act is not an offence under the law of the foreign country where it occurred.',
      correction:
        'Section 47 does NOT require dual criminality under foreign law. The statutory test is strictly whether the act "would constitute an offence if committed in India".',
    },
    {
      id: 's-47-trap-2',
      trap: 'Prior sanction of the Central Government under Section 208 BNSS is mandatory before filing an FIR under Section 47.',
      correction:
        'False. The abetting act was committed within India; therefore, investigation, arrest, and FIR registration do not require prior Central Government sanction.',
    },
  ],

  cases: [
    {
      name: 'Queen-Empress v. Ganpatrao Ramchandra',
      citation: '(1894) ILR 19 Bom 105',
      court: 'High Court of Bombay',
      holding:
        'Historical precedent establishing the necessity of express statutory authority to punish acts done in India abetting offences outside British India, which led directly to the enactment of Section 108A IPC (now Section 47 BNS).',
      ratioDecidendi:
        'Extraterritorial penal reach over inchoate abetment requires explicit legislative enactment.',
    },
    {
      name: 'Emperor v. Chhotalal',
      citation: '(1912) 14 BOMLR 147 / ILR 36 Bom 524',
      court: 'High Court of Bombay (Full Bench)',
      holding:
        'A person who, in British India, posted a letter to a person outside British India instigating them to commit an offence was guilty of abetment within the meaning of Section 108A IPC.',
      ratioDecidendi:
        'The offence of abetment under Section 108A (Section 47 BNS) is complete within India the moment the instigation is dispatched from Indian territory.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-47-qa-1',
      draftingCategory: 'brief',
      question:
        'Prepare an IRAC Case Brief on Emperor v. Chhotalal, (1912) ILR 36 Bom 524, explaining the territorial completion of abetment under Section 47 BNS.',
      answer: `IRAC CASE BRIEF: EMPEROR v. CHHOTALAL (ILR 36 BOM 524)

1. FACTS:
The accused was a resident of Ahmedabad. He wrote and dispatched a letter from Ahmedabad addressed to a person in an independent princely state (outside British India), instigating that person to commit cheating and forgery with respect to certain commercial bonds. The letter was intercepted in transit. The accused was arrested in Ahmedabad and charged under Section 108A IPC (Section 47 BNS). The accused contended that since the instigation was intended to produce effect outside British India, and the target offence was to take place outside, the court in Ahmedabad had no territorial jurisdiction.

2. ISSUE:
Is the offence of abetment under Section 108A IPC (Section 47 BNS) committed and completed within India when the instigation is posted or transmitted from Indian territory?

3. RULE:
Under Section 47 BNS (Section 108A IPC), a person abets an offence who, in India, abets the commission of any act without and beyond India which would constitute an offence if committed in India.

4. APPLICATION:
The Full Bench of the Bombay High Court held:
(a) The act of the accused — writing, posting, and dispatching the instigating communication — physically took place in Ahmedabad, within Indian territory;
(b) The offence of abetment was initiated and completed within the jurisdiction of the Indian court;
(c) The fact that the recipient was outside India and the target offence was to be committed abroad is the exact scenario Section 108A was enacted to cover;
(d) Indian courts have full jurisdiction to try and punish the abettor.

5. CONCLUSION:
The plea of lack of jurisdiction was rejected and the conviction was upheld. Section 47 BNS anchors jurisdiction at the physical origin of the abetment in India.`,
      explanation:
        'The leading authority establishing that abetment under Section 47 BNS is legally complete within Indian borders the moment the instigation is communicated or dispatched.',
    },
    {
      id: 's-47-qa-2',
      draftingCategory: 'submissions',
      question:
        'Draft a 6-part Written Submission for an accused charged under Section 47 BNS for alleged cross-border copyright infringement, challenging substantive criminality.',
      answer: `IN THE COURT OF THE LEARNED CHIEF METROPOLITAN MAGISTRATE AT NEW DELHI
CRIMINAL CASE NO. 602 OF 2025
IN THE MATTER OF:
STATE (NCT OF DELHI) ... PROSECUTION
VERSUS
ROHAN KAPOOR ... ACCUSED

WRITTEN SUBMISSIONS ON BEHALF OF THE ACCUSED UNDER SECTION 47 BNS

MOST RESPECTFULLY SHOWETH:

I. STATUTORY JURISDICTIONAL THRESHOLD UNDER SECTION 47 BNS
The Accused stands charged under Section 47 BNS for allegedly abetting an overseas entity in Singapore in the commercial distribution of digital educational materials. It is submitted that the charge fails to satisfy the mandatory statutory prerequisite of Section 47 of the Bharatiya Nyaya Sanhita, 2023.

II. THE HYPOTHETICAL INDIAN OFFENCE TEST
Section 47 BNS explicitly requires that the act abetted must be an act:
"...which would constitute an offence if committed in India."
The expression "offence" is defined in Section 2(24) BNS as a thing made punishable by the Sanhita or any special or local law.

III. PURELY CIVIL CONTRACTUAL DISPUTE OVERSEAS
The evidence produced by the complainant (Ex. P-1 to P-5) conclusively reveals:
1. The dispute between the Singapore entity and the complainant is governed by an exclusive software licensing agreement subject to Singapore civil arbitration;
2. The Accused provided purely legal and compliance consultancy services from New Delhi;
3. No criminal copyright infringement or counterfeit reproduction took place.
Under Indian copyright jurisprudence, a bona fide civil dispute over the scope of an intellectual property license does not constitute the criminal offence of cheating or theft.

IV. FAILURE OF THE HYPOTHETICAL TEST
Had the identical dispute occurred in New Delhi between Indian corporate entities, it would have constituted a civil commercial breach of contract actionable under the Commercial Courts Act, 2015, and not a cognizable penal offence under the BNS. Therefore, the essential statutory criterion "which would constitute an offence if committed in India" is fundamentally absent.

V. NO PREJUDICE TO FOREIGN OR INDIAN SOVEREIGNTY
Section 47 was enacted to prevent heinous transnational crimes (murder, terrorism, kidnapping, financial fraud). It was never intended to criminalize legitimate international trade and contract advisory.

VI. PRAYER
In the absence of the foundational ingredient of Section 47 BNS, it is respectfully prayed that this Hon\'ble Court be pleased to DISCHARGE the Accused of all criminal charges.

DATED: 05.01.2026
PLACE: NEW DELHI
COUNSEL FOR THE ACCUSED`,
      explanation:
        'A sophisticated written submission demonstrating that a civil or regulatory breach overseas fails the "hypothetical Indian offence" test of Section 47 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 47 — Abetment in India of offences outside India',
    'BNS s. 47 Statutory Test — Act would constitute an offence if committed in India',
    'BNS s. 47 Statutory Illustration — Instigating murder abroad from India',
    'IPC s. 108A — Predecessor section',
    'BNS s. 48 — Symmetrical counterpart (abetment outside India of offences in India)',
    'BNSS s. 198 & s. 208 — Jurisdiction and Central Government sanction rules',
  ],

  examTips: [
    'Remember Section 47 applies to the person who is IN India abetting an act OUTSIDE India.',
    'Underline that dual criminality under foreign law is NOT required: test is solely whether it would be an offence in India.',
    'Always pair Section 47 with Section 48 (which is the newly enacted counterpart in BNS).',
  ],

  revisionPoints: [
    'Abettor physically in India; offence executed outside India.',
    'Hypothetical Indian offence test: must be an offence if done in India.',
    'Investigation in India does not require Section 208 BNSS sanction.',
  ],

  relatedTopics: ['s-1', 's-45', 's-46', 's-48', 's-49', 's-61', 'general-explanations'],
}

export default content
