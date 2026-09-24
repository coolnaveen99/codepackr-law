import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 28 of the Bharatiya Nyaya Sanhita, 2023 defines the circumstances under which consent is legally vitiated and void ab initio across the Sanhita. Consent is invalid if given under fear of injury, under a misconception of fact known to the doer, by a person of unsound mind or intoxicated to the point of incomprehension, or by a child under twelve years of age.',

  study: `Topic at a glance
Section 28 of the Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) is the master provision governing the legal validity of consent in Indian penal law. Rather than providing a positive definition of consent, the statute defines consent negatively by enumerating the fatal vitiating factors that strip an apparent or outward agreement of its legal character, rendering it a legal nullity.

Statutory Text (Section 28 BNS)
"A consent is not such a consent as is intended by any section of this Sanhita, if the consent is given by a person under fear of injury, or under a misconception of fact, and if the person doing the act knows, or has reason to believe, that the consent was given in consequence of such fear or misconception; or
Consent of person of unsound mind.—if the consent is given by a person who, from unsoundness of mind, or intoxication, is unable to understand the nature and consequence of that to which he gives his consent; or
Consent of child.—unless the contrary appears from the context, if the consent is given by a person who is under twelve years of age."

The Three Disqualifying Limbs of Section 28
1. Fear of Injury or Misconception of Fact (With Scienter):
   This limb requires two distinct elements to coexist:
   (a) The victim gave consent under "fear of injury" (coercion, blackmail, physical threats) or under a "misconception of fact" (fraud, misrepresentation, false identity); AND
   (b) The accused "knows, or has reason to believe", that the consent was given in consequence of such fear or misconception.
   If the victim harbored an internal, subjective misconception of which the accused had zero knowledge or reason to believe, the consent is NOT vitiated under this limb.
2. Unsoundness of Mind or Intoxication:
   Consent is void if the consenting person, due to mental disease or intoxication, was in such an impaired state that he/she was incapable of understanding the nature and natural consequences of the act.
3. Infancy (Child Under Twelve Years of Age):
   Consent given by a child under twelve years is universally invalid across the Sanhita, "unless the contrary appears from the context". (Note: In sexual offences, the specific age of consent is raised to eighteen years under Section 63 BNS and the POCSO Act, which overrides the general 12-year rule by virtue of the phrase "unless the contrary appears from the context").

Misconception of Fact vs Breach of Promise (The Landmark Rule)
The Supreme Court of India in Pramod Suryabhan Pawar v. State of Maharashtra (2019) 9 SCC 608 and Deelip Singh v. State of Bihar (2005) 1 SCC 88 drew a vital distinction:
• Misconception of Fact: Where the accused from the very inception entertained no intention of fulfilling a promise (e.g. false promise of marriage used as a fraudulent tool to induce sexual intercourse). This constitutes a misconception of fact vitiating consent.
• Subsequent Breach of Promise: Where the accused entered the relationship with a genuine, honest intention to marry, but subsequent unforeseen developments (e.g. parental refusal, caste disputes, supervening incompatibility) prevented the marriage. This is a mere breach of promise, which does NOT vitiate consent under Section 28.
(Note: Section 69 BNS now enacts a dedicated, distinct offence for sexual intercourse by deceitful means, including false promises of marriage).`,

  sections: [
    {
      id: 's-28-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 28 BNS directly succeeds Section 90 of the Indian Penal Code, 1860 without substantive alteration.',
        'Jurisprudential foundation: Grounded in the principle that true consent requires voluntary exercise of reason based on full knowledge of the true state of affairs. A submission procured through fear, fraud, intoxication, or immature tender age is mere physical submission, not legal consent.',
        'Legislative objective: To provide a uniform standard across the entire Sanhita to determine whether consent is legally genuine in offences ranging from theft (taking without consent) and kidnapping to assault and sexual offences.',
        'Universal Applicability: Section 28 applies wherever the word "consent" is employed in the Sanhita, functioning as a global interpretation clause.',
      ],
    },
    {
      id: 's-28-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '"A consent is not such a consent as is intended by any section": Operates as a sweeping statutory invalidation across the substantive and exception chapters.',
        '"under fear of injury": Injury incorporates Section 2(14) BNS (any harm illegally caused to person, mind, reputation, or property). Extends beyond physical violence to threats of financial ruin or social defamation.',
        '"or under a misconception of fact": Must be an error regarding factual truth, not an erroneous understanding of legal doctrine.',
        '"and if the person doing the act knows, or has reason to believe": Mandatory requirement of mens rea / scienter. The accused must be aware that the victim\'s agreement was rooted in fear or misconception.',
        '"unable to understand the nature and consequence": Incorporates the cognitive incapacity standard for intoxicated or mentally unsound persons.',
        '"under twelve years of age, unless the contrary appears from the context": General age of legal consent, subject to higher statutory ages enacted in specific provisions (e.g. 18 years in rape under s. 63 BNS).',
      ],
    },
    {
      id: 's-28-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        'To establish vitiation of consent under Section 28, the prosecution must prove either of the three limbs:',
        'Limb A (Fear/Misconception): (1) Victim gave consent under fear of injury or misconception of fact; and (2) Accused knew or had reason to believe that the consent was so obtained.',
        'Limb B (Mental/Toxic Incapacity): (1) Victim was of unsound mind or intoxicated; and (2) Was rendered incapable of understanding the nature and consequences of the transaction.',
        'Limb C (Infancy): The consenting person was under twelve years of age (and no contrary context appears).',
      ],
    },
    {
      id: 's-28-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Burden on Prosecution under Section 104 BSA: In cases where lack of consent is an ingredient of the offence (e.g. theft, rape, kidnapping), the prosecution must prove beyond reasonable doubt that consent was absent or vitiated under Section 28 BNS.',
        'Proving Misconception of Fact via Electronic Records: In false promise or fraud cases, WhatsApp communications, text messages, emails, and call recordings admitted under Section 63 BSA are vital to prove whether the promise was fraudulent from inception or genuine.',
        'Proof of Mental/Physical Intoxication: Medical reports, blood toxicology tests under Section 39 BSA, and video footage establishing state of inebriation.',
      ],
    },
    {
      id: 's-28-module-5',
      title: 'Procedural Roadmap, Competent Forum & Quashing Checkpoints',
      order: 5,
      content: [
        'Trial Forum: Determined by the substantive offence charged in the police report or complaint.',
        'Quashing of Vexatious Rape Complaints under Section 528 BNSS: Where the FIR and undisputed communications demonstrate a consensual adult relationship that terminated due to subsequent disagreement, High Courts apply Pramod Suryabhan Pawar to quash proceedings at the threshold.',
        'Bail Considerations: Demonstration that the complainant was an educated adult who consented without misconception of fact is a compelling ground for anticipatory bail under Section 482 BNSS.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-28',
      section: 's. 28',
      title: 'Consent known to be given under fear or misconception',
    },
  ],

  examples: [
    {
      id: 's-28-ill-1',
      title: 'Illustration 1 — Medical Fraud and Misconception of Fact (Consent Vitiated)',
      illustrationType: 'statutory',
      description:
        'A, a charlatan posing as a licensed surgical oncologist, falsely tells patient Z that she has an aggressive, malignant abdominal cancer that will kill her within 48 hours unless Z immediately pays Rs. 2,00,000 and permits A to perform an incision. Z, in terrified panic, signs a surgical consent form. A makes an incision on Z\'s abdomen to simulate an operation. A is prosecuted for voluntarily causing hurt under Section 115 BNS and cheating under Section 318 BNS. A cannot plead consent under Section 26 BNS: Z\'s consent was procured under a complete misconception of fact and fear of death, which A knew was fraudulent. The consent is void under Section 28 BNS.',
    },
    {
      id: 's-28-ill-2',
      title: 'Illustration 2 — Consensual Adult Relationship and Subsequent Marriage Breakdown (Consent Valid)',
      illustrationType: 'fail-scenario',
      description:
        'A and B, two educated adults aged 25, engaged in a consensual sexual relationship over three years while planning to marry. A introduced B to his parents, but his orthodox family vehemently rejected the alliance and threatened self-immolation. A subsequently expressed his inability to marry B. B lodged an FIR against A alleging rape on the pretext of false promise of marriage under Section 28 BNS. The prosecution fails under Section 28: A did not harbor a fraudulent intent from inception; the promise was genuine when made. A subsequent breach of promise due to family opposition is not a "misconception of fact" under Section 28 BNS (Pramod Suryabhan Pawar v. State of Maharashtra, 2019).',
    },
  ],

  hypotheticals: [
    {
      id: 's-28-hypo',
      title: 'Chamber Practice Problem: Corporate Signing of Property Transfer under Extortion Threat',
      facts:
        'Managing Director "M" of a real estate firm was abducted by an armed mafia syndicate and held in a secluded farmhouse for 48 hours. The gang leader pointed a firearm at M\'s head and demanded that M execute a registered gift deed transferring commercial land worth Rs. 10 crores to the gang leader\'s brother. M signed the deed before a sub-registrar who was brought to the farmhouse under armed escort. The gang leader argued that because M signed the transfer documents before a public officer, M had consented to the transfer. M filed an FIR for extortion under Section 308 BNS, kidnapping under Section 140 BNS, and criminal intimidation under Section 351 BNS.',
      question:
        'Does M\'s physical signature before the sub-registrar constitute legal consent, or is it vitiated under Section 28 BNS?',
      applicableLaw:
        'Section 28 BNS (Consent under fear of injury); Section 308 BNS (Extortion); Section 108 BSA 2023; Section 63 BSA 2023.',
      analysis:
        '1. Application of Limb 1 of Section 28 BNS: Section 28 declares that consent is void if given under "fear of injury", and the person doing the act knows that consent was given in consequence of such fear.\n2. Existence of Fear of Injury: M was held at gunpoint in an unlawful confinement. The threat of instant death or severe bodily injury directly caused the execution of the signature.\n3. Knowledge of the Gang: The gang members orchestrated the coercion and knew with absolute certainty that the signature was extracted solely due to mortal fear.\n4. Legal Status: The signature is a nullity in penal and civil law; it is mere involuntary physical submission, not consent.',
      conclusion:
        'The consent is completely void ab initio under Section 28 BNS. The offence of extortion under Section 308 BNS is fully established. The gift deed is void.',
    },
  ],

  distinctions: [
    {
      id: 's-28-dist-1',
      title: 'Misconception of Fact vs Breach of Promise to Marry',
      left: 'Misconception of Fact (Section 28 BNS)',
      right: 'Breach of Promise to Marry',
      rows: [
        {
          point: 'Intent at Inception',
          left: 'Accused never had any intention to marry from the very beginning; promise was a fraudulent tool.',
          right: 'Accused genuinely intended to marry when the promise was made; acted in good faith.',
        },
        {
          point: 'Cause of Default',
          left: 'Calculated deceit, impersonation, or pre-planned abandonment.',
          right: 'Subsequent unforeseen obstacles, parental opposition, or breakdown of compatibility.',
        },
        {
          point: 'Legal Result',
          left: 'Consent is void under Section 28 BNS; attracts rape (s. 64 BNS) or deceitful sex (s. 69 BNS).',
          right: 'Consent remains legally valid; no criminal offence (mere civil breach of promise).',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-28-trap-1',
      trap: 'If an adult gives consent under a mistaken belief that was entirely in his own head, the other party is guilty under Section 28 BNS.',
      correction:
        'Untrue. Section 28 requires that the person doing the act must "know, or have reason to believe, that the consent was given in consequence of such fear or misconception". If the accused had no knowledge of the victim\'s internal misunderstanding, Section 28 does not apply.',
    },
    {
      id: 's-28-trap-2',
      trap: 'A 14-year-old child can give legally valid consent under Section 28 BNS for all offences since she is above twelve.',
      correction:
        'Untrue. Section 28 states "unless the contrary appears from the context". In sexual offences under Section 63 BNS and the POCSO Act, the age of consent is strictly 18 years, overriding the 12-year general baseline.',
    },
  ],

  cases: [
    {
      name: 'Pramod Suryabhan Pawar v. State of Maharashtra',
      year: 2019,
      citation: '(2019) 9 SCC 608',
      court: 'Supreme Court of India',
      bench: 'D.Y. Chandrachud & Indira Banerjee, JJ.',
      facts:
        'The complainant and the appellant were in a consensual sexual relationship for several years. The appellant promised marriage but subsequently broke off the relationship due to caste differences. The complainant lodged an FIR under Section 376 IPC alleging that her consent was obtained under a misconception of fact.',
      issue:
        'Under what circumstances does a false promise of marriage constitute a "misconception of fact" vitiating consent under Section 90 IPC (Section 28 BNS)?',
      ratioDecidendi:
        'To establish a misconception of fact under Section 90 IPC, the prosecution must prove that from the inception, the accused had no intention of fulfilling the promise to marry, and that the promise was the sole inducing cause of the sexual relationship. A subsequent breach of promise arising from family circumstances does not vitiate consent.',
      holding:
        'The FIR under Section 376 IPC was quashed under Section 482 CrPC.',
      relevance:
        'The benchmark Supreme Court precedent defining misconception of fact under Section 28 BNS.',
    },
    {
      name: 'Deelip Singh v. State of Bihar',
      year: 2005,
      citation: '(2005) 1 SCC 88',
      court: 'Supreme Court of India',
      bench: 'P. Venkatarama Reddi & B.P. Singh, JJ.',
      facts:
        'The appellant engaged in sexual intercourse with an unmarried girl under an express promise of marriage, which he later refused after she became pregnant.',
      issue:
        'What are the essential elements required to establish that consent was given under a misconception of fact known to the accused?',
      ratioDecidendi:
        'Section 90 IPC requires two conditions: (1) The consent must be given under a misconception of fact; and (2) The person doing the act must know or have reason to believe that the consent was given in consequence of such misconception. If the court finds that the promise was false to the knowledge of the maker at the time it was made, consent is completely vitiated.',
      holding:
        'Conviction affirmed where evidence established pre-planned deceit.',
      relevance:
        'Locus classicus on the requirement of knowledge (scienter) under Section 28 BNS.',
    },
    {
      name: 'Uday v. State of Karnataka',
      year: 2003,
      citation: '(2003) 4 SCC 46',
      court: 'Supreme Court of India',
      bench: 'N. Santosh Hegde & B.P. Singh, JJ.',
      facts:
        'An educated college student had sexual relations with a college mate who promised marriage, knowing that both belonged to different communities and parental consent was unlikely.',
      issue:
        'Whether consent given by an educated adult aware of social obstacles can be termed a misconception of fact under Section 90 IPC.',
      ratioDecidendi:
        'A girl who is conscious of the social, family, and religious hurdles cannot be said to have surrendered her person under an absolute misconception of fact. Consensual adult relationships cannot be converted into criminal offences upon relationship breakdown.',
      holding:
        'The conviction of the accused was set aside and he was acquitted.',
      relevance:
        'Demonstrates the application of Section 28 BNS to realistic social circumstances.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-28-brief',
      draftingCategory: 'brief',
      question:
        'Provide a Case Brief and Legal Assessment on whether Section 28 BNS applies to an employer who threatens to fire an employee unless she signs a property release deed.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether a property release deed signed by an employee under the threat of wrongful termination, forfeiture of earned salary, and blacklisting in the industry is obtained with valid legal consent, or whether consent is vitiated under Section 28 BNS.

II. GOVERNING STATUTORY PROVISION
Section 28 BNS provides that consent is not valid if given under fear of injury, and the person doing the act knows that the consent was given in consequence of such fear. Section 2(14) BNS defines injury as any harm illegally caused to mind, property, or reputation.

III. LEGAL ASSESSMENT & APPLICATION
1. Scope of "Fear of Injury": The threat to illegally withhold earned wages, terminate livelihood, and ruin professional reputation constitutes a direct threat of "injury" under Section 2(14) BNS.
2. Causation: The employee executed the document solely in consequence of the economic and reputational duress.
3. Scienter: The employer deliberately wielded the termination threat to extract the release and knew that the employee was capitulating under duress.
4. Vitiation of Consent: The transaction fulfills all conditions of Limb 1 of Section 28 BNS.

IV. OPERATIVE CONCLUSION
The consent is a legal nullity under Section 28 BNS. The employer is liable for extortion under Section 308 BNS and criminal intimidation under Section 351 BNS. The release deed is void.`,
      explanation: 'IRAC assessment for economic duress and fear of injury under Section 28 BNS.',
    },
    {
      id: 's-28-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions under Section 528 BNSS before the High Court seeking quashing of an FIR on the grounds that consent was not vitiated under Section 28 BNS.',
      answer: `IN THE HIGH COURT OF JUDICATURE AT DELHI
CRIMINAL MISCELLANEOUS PETITION UNDER SECTION 528 BNSS NO. _____ OF 2024

IN THE MATTER OF:
AMITABH VERMA                         ...PETITIONER
VERSUS
1. STATE (NCT OF DELHI)
2. POOJA SHARMA (COMPLAINANT)          ...RESPONDENTS

MEMORANDUM OF WRITTEN SUBMISSIONS ON BEHALF OF THE PETITIONER UNDER SECTION 528 BNSS PRAYING FOR QUASHING OF FIR NO. 504/2024 REGISTERED UNDER SECTION 64(1) BNS

MOST RESPECTFULLY SHOWETH:

I. STATEMENT OF FACTS
1. The Petitioner and Respondent No. 2 are mature, educated corporate professionals aged 29 and 27 years respectively, working in the IT sector.
2. Between January 2022 and March 2024, they were in a voluntary, live-in relationship in Gurugram, during which both families were introduced and engagement discussions occurred.
3. In April 2024, severe irreconcilable temperamental differences arose, leading to a mutual parting of ways.
4. Two months later, Respondent No. 2 filed FIR No. 504/2024 alleging rape under Section 64(1) BNS, claiming her consent was obtained under a "misconception of fact" regarding marriage.

II. INAPPLICABILITY OF SECTION 28 BNS
5. That Section 28 of the Bharatiya Nyaya Sanhita, 2023 requires the prosecution to establish that the promise was false from the very inception to the knowledge of the Petitioner.
6. The voluminous electronic records, including WhatsApp chats, flight bookings, and hotel receipts placed on record under Section 63 BSA (Annexures P-1 to P-15), conclusively prove that the Petitioner genuinely intended to marry Respondent No. 2.

III. PRECEDENTS OF THE HON'BLE SUPREME COURT
7. In Pramod Suryabhan Pawar v. State of Maharashtra ((2019) 9 SCC 608), the Hon\'ble Supreme Court held: "To establish that the ‘consent’ was vitiated by a misconception of fact arising out of a promise to marry, two things must be established: (1) the promise of marriage was false and made in bad faith with no intention of being adhered to at the time it was given; and (2) the false promise had a direct nexus to the woman’s decision to engage in the sexual act."
8. In Uday v. State of Karnataka ((2003) 4 SCC 46), the Apex Court ruled that a subsequent breach of promise due to circumstances cannot be elevated to a criminal offence.

IV. PRAYER
Wherefore, it is respectfully prayed that this Hon\'ble Court may be pleased to quash FIR No. 504/2024 and all consequential proceedings pending before the trial court.`,
      explanation: 'High Court quashing submissions applying Pramod Suryabhan Pawar under Section 28 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 28: Consent known to be given under fear or misconception',
    'BNS s. 2(14): Definition of "injury"',
    'BNS s. 63: Definition of rape and age of consent (18 years)',
    'BNS s. 69: Sexual intercourse by employing deceitful means, etc. (new dedicated offence)',
    'BSA 2023 s. 104: Prosecution burden to prove absence/vitiation of consent',
    'IPC s. 90: Historical predecessor provision',
  ],

  examTips: [
    'Remember the 3 limbs of Section 28: (1) Fear of injury or misconception of fact with scienter; (2) Unsoundness of mind or intoxication; (3) Child under 12.',
    'Always cite Pramod Suryabhan Pawar v. State of Maharashtra (2019) for the distinction between a misconception of fact and a breach of promise to marry.',
    'Note that Section 69 BNS has now codified deceitful sexual promises as a distinct specific offence.',
  ],

  revisionPoints: [
    'Section 28 BNS is the universal consent vitiation clause across the Sanhita.',
    'Misconception of fact requires that the accused knew the consent was given under that mistake.',
    'A genuine promise that subsequently fails is not a misconception of fact.',
    'Leading authorities: Pramod Suryabhan Pawar (2019) and Deelip Singh v. State of Bihar (2005).',
  ],

  relatedTopics: ['s-25', 's-26', 's-27', 's-29', 'general-exceptions'],
} satisfies TopicContent

export default content
