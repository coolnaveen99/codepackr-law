import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 23 of the Bharatiya Nyaya Sanhita, 2023 provides an absolute general exception for acts done by a person who, by reason of intoxication, is rendered incapable of knowing the nature of the act or that it is wrong or contrary to law, provided the intoxicating substance was administered without his knowledge or against his will (involuntary intoxication).',

  study: `Topic at a glance
Section 23 of the Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) codifies the defence of Involuntary Intoxication. While voluntary intoxication is generally no defence in criminal law ("Qui peccat ebrius, luat sobrius" — he who sins when drunk must be punished when sober), involuntary intoxication is treated by the law as a form of non compos mentis or temporary insanity induced by fraud, stratagem, or duress.

Statutory Text (Section 23 BNS)
"Nothing is an offence which is done by a person who, at the time of doing it, is, by reason of intoxication, incapable of knowing the nature of the act, or that he is doing what is either wrong, or contrary to law: Provided that the thing which intoxicated him was administered to him without his knowledge or against his will."

The Two Essential Prongs of Section 23
To succeed under Section 23 BNS, the defence must satisfy two cumulative requirements:
1. The Cognitive Impairment Test (Identical to Section 22 Insanity):
   The intoxication must be of such severe intensity that at the exact time of the act, the accused was rendered wholly incapable of knowing:
   • The nature of the act (physical character), OR
   • That what he was doing was either wrong, or contrary to law (moral/legal consciousness).
   Partial intoxication or mere disinhibition is strictly insufficient.
2. The Involuntariness Test (The Proviso):
   The intoxicating substance (alcohol, narcotic, psychotropic drug, or hypnotic substance) must have been administered to the accused:
   • "Without his knowledge" (e.g. drink-spiking, hidden drugs in food, mislabeled medication administered by a nurse), OR
   • "Against his will" (e.g. forced ingestion under physical coercion, duress, threats of death).

Voluntary Consumption Excluded
If the accused voluntarily drinks alcohol, takes narcotics, or participates in social drinking, Section 23 is completely closed to him. In such cases, his liability is governed exclusively by the harsher rules of Section 24 BNS.

Contrast with English Law (R v. Kingston)
At common law in England, R v. Kingston (1995) 2 AC 355 established that involuntary intoxication is no defence if the accused, despite being drugged, nevertheless formed the requisite mens rea. Under Section 23 BNS, however, the statutory text incorporates the McNaghten standard: if the involuntary drug produced total cognitive incapacity, the act is completely exempted from criminal character.`,

  sections: [
    {
      id: 's-23-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 23 BNS directly succeeds Section 85 of the Indian Penal Code, 1860 without substantive alteration.',
        'Jurisprudential foundation: Grounded in the common law distinction formulated in 1 Hale P.C. 32 between "dementia affectata" (voluntary intoxication, which aggravates guilt) and involuntary intoxication caused by medical error, fraud, or force, which operates as complete temporary insanity.',
        'Legislative objective: To protect victims of surreptitious drugging, spiked beverages, and physical coercion from being held criminally culpable for acts performed while their mental faculties were hijacked without fault on their part.',
        'The principle of moral blameworthiness: A person who has voluntarily chosen to intoxicate himself can be held responsible for resulting misconduct, but one who was involuntarily drugged has committed no moral or legal fault.',
      ],
    },
    {
      id: 's-23-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '"Nothing is an offence": Employs an absolute negative declaration extinguishing criminal liability.',
        '"at the time of doing it": The incapacity must coincide precisely with the commission of the actus reus.',
        '"by reason of intoxication, incapable of knowing": The causal link between the substance and the total breakdown of cognitive capacity must be affirmatively established.',
        '"nature of the act, or that he is doing what is either wrong, or contrary to law": Replicates the twin limbs of Section 22 BNS (insanity).',
        '"Provided that the thing which intoxicated him was administered... without his knowledge": Covers drink-spiking, fraudulent substitution of medication, or accidental poisoning.',
        '"or against his will": Covers physical force, extortion, or threats of violence compelling ingestion.',
      ],
    },
    {
      id: 's-23-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. The accused was in a state of severe intoxication at the time of committing the act.',
        '2. The intoxication was caused by an intoxicating thing (alcohol, pharmaceutical drug, narcotic, hallucinogen).',
        '3. The intoxicating thing was administered without the knowledge of the accused, OR against his will under force/coercion.',
        '4. The intoxication rendered the accused completely incapable of knowing the nature of the act, or that it was wrong or contrary to law.',
      ],
    },
    {
      id: 's-23-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 108)',
      order: 4,
      content: [
        'Defence Burden under Section 108 BSA: The accused must establish the two limbs of Section 23 BNS by a preponderance of probabilities.',
        'Proving Involuntariness: The defence must produce credible evidence demonstrating how the substance was administered (e.g. witness testimony of drink tampering, CCTV footage of drinks being spiked, toxicological confirmation of date-rape drugs such as Rohypnol, Ketamine, or GHB).',
        'Medical and Toxicological Evidence under Section 39 BSA: Blood, urine, and hair follicle forensic reports confirming presence of unprescribed hypnotic or narcotic substances.',
        'Standard of Proof: Once the defence creates a reasonable probability that his drink was spiked and that he was delirious at the time, the benefit of doubt must be accorded.',
      ],
    },
    {
      id: 's-23-module-5',
      title: 'Procedural Roadmap, Competent Forum & Trial Checkpoints',
      order: 5,
      content: [
        'Trial Forum: Determined by the substantive offence charged under Schedule I BNSS.',
        'Immediate Medical Examination: Under Section 53 BNSS, the accused must demand immediate medical and toxicological examination upon arrest to preserve biological samples proving involuntary drugging.',
        'Pleading at Trial: Can be raised during cross-examination of prosecution witnesses and through defence testimony under Section 351 BNSS.',
        'Verdict of Complete Acquittal: Unlike Section 22 BNS (which leads to safe custody under Section 375 BNSS), an acquittal under Section 23 BNS is an unconditional acquittal because the temporary delirium was entirely exogenous and has terminated.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-23',
      section: 's. 23',
      title: 'Act of a person incapable of judgment by reason of intoxication caused against his will',
    },
  ],

  examples: [
    {
      id: 's-23-ill-1',
      title: 'Illustration 1 — Spiked Beverage at Wedding Reception (Immunity Applies)',
      illustrationType: 'statutory',
      description:
        'A, a teetotaler, attends a wedding banquet and orders a virgin fruit punch. A mischievous acquaintance secretly pours 100 ml of high-potency odorless grain alcohol into A\'s glass without A\'s knowledge. A drinks the punch, becomes violently intoxicated and hallucinatory, and smashes the decorative glassware believing he is defending himself from attacking crystal scorpions. A is charged with mischief under Section 324(4) BNS. A is completely protected under Section 23 BNS: the intoxicating substance was administered entirely without his knowledge, and it rendered him incapable of knowing the nature of his act.',
    },
    {
      id: 's-23-ill-2',
      title: 'Illustration 2 — Social Drinking under Peer Pressure (Immunity Fails)',
      illustrationType: 'fail-scenario',
      description:
        'A goes to a pub with office colleagues. Although A initially hesitated, his colleagues teased him and urged him to celebrate a promotion. A voluntarily consumes five pints of beer, becomes heavily drunk, drives home, and crashes into a parked police vehicle. A pleads Section 23 BNS, arguing that he drank "against his will" due to severe peer pressure. The plea fails: peer pressure or social persuasion does not constitute coercion "against his will". A voluntarily ingested the alcohol, and Section 23 is completely inapplicable.',
    },
  ],

  hypotheticals: [
    {
      id: 's-23-hypo',
      title: 'Chamber Practice Problem: Corporate Executive Drugged by Business Rivals with Scopolamine',
      facts:
        'A senior financial executive, "V", attending a corporate dinner with prospective business partners, had his coffee laced with Scopolamine ("Devil\'s Breath" — a powerful hypnotic deliriant) by an operative hired by an industrial competitor. Within 30 minutes, V entered a twilight state of extreme passivity, delirium, and cognitive disassociation. Under the influence of the drug, the rival instructed V to sign electronic transfer authorizations transferring corporate funds worth Rs. 2 crores to an offshore shell account, which V mechanically executed on his laptop. The next morning, V woke up in his hotel room with total amnesia of the transfer. Forensic urine screening conducted at a hospital within 24 hours detected trace metabolites of Scopolamine. The company filed an FIR against V under Section 316(2) (Criminal breach of trust) and Section 318(4) (Cheating) BNS. V pleaded Section 23 BNS.',
      question:
        'Is executive V protected from criminal liability under Section 23 BNS?',
      applicableLaw:
        'Section 23 BNS (Involuntary intoxication); Section 39 BSA 2023 (Expert toxicological report); Section 63 BSA 2023 (Admissibility of electronic transfer logs); Section 108 BSA 2023.',
      analysis:
        '1. Involuntary Administration: The toxicological laboratory report conclusively established that Scopolamine (a substance with zero therapeutic justification) was present in V\'s system. Hotel banquet CCTV footage showed an operative tampering with V\'s coffee cup. The administration was without his knowledge.\n2. Cognitive Incapacity: Scopolamine induces complete loss of volitional control and cognitive reasoning. V was incapable of knowing the nature of his act or that transferring corporate funds to an unverified shell company was fraudulent or contrary to law.\n3. Complete Absence of Mens Rea: V derived zero personal benefit and had an unblemished 20-year corporate record.\n4. Discharge of Burden: V discharged the burden under Section 108 BSA by corroborating CCTV footage with expert toxicological evidence.',
      conclusion:
        'Executive V is fully entitled to absolute statutory immunity under Section 23 BNS. The criminal breach of trust charges cannot be sustained as the mental element is extinguished by involuntary drugging. The FIR against V must be quashed under Section 528 BNSS.',
    },
  ],

  distinctions: [
    {
      id: 's-23-dist-1',
      title: 'Section 23 BNS vs Section 24 BNS (Involuntary vs Voluntary Intoxication)',
      left: 'Section 23 BNS (Involuntary Intoxication / IPC s. 85)',
      right: 'Section 24 BNS (Voluntary Intoxication / IPC s. 86)',
      rows: [
        {
          point: 'Method of Administration',
          left: 'Administered without knowledge or against the will of the accused.',
          right: 'Administered with the knowledge and consent of the accused (voluntary consumption).',
        },
        {
          point: 'Legal Consequence',
          left: 'Complete general exception; treated as temporary insanity; absolute acquittal.',
          right: 'No general exception; law imputes knowledge to the accused as if sober.',
        },
        {
          point: 'Cognitive Test',
          left: 'Incapable of knowing the nature of the act, or that it is wrong or contrary to law.',
          right: 'Presumption of knowledge applies; specific intention inferred from degree of intoxication.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-23-trap-1',
      trap: 'An accused who was intoxicated against his will is protected even if he was only slightly tipsy and still knew what he was doing was wrong.',
      correction:
        'Untrue. Involuntary administration alone does not suffice. Section 23 mandates that the intoxication must have rendered the accused "incapable of knowing the nature of the act, or that he is doing what is either wrong, or contrary to law". If cognitive understanding remained intact, Section 23 fails.',
    },
    {
      id: 's-23-trap-2',
      trap: 'An acquittal under Section 23 BNS leads to detention in a psychiatric asylum under Section 375 BNSS.',
      correction:
        'Untrue. Safe custody under Section 375 BNSS applies only to acquittals on ground of unsoundness of mind under Section 22 BNS. An acquittal under Section 23 BNS is an unconditional release, as the temporary exogenous delirium has ceased.',
    },
  ],

  cases: [
    {
      name: 'Director of Public Prosecutions v. Beard',
      year: 1920,
      citation: '1920 AC 479',
      court: 'House of Lords (England)',
      bench: 'Lord Birkenhead, L.C., Earl of Reading, C.J., Viscount Haldane, Lord Dunedin, Lord Atkinson, Lord Sumner, Lord Buckmaster & Lord Phillimore',
      facts:
        'A man assaulted and killed a young girl while heavily intoxicated. The House of Lords delivered the classic restatement of the law of intoxication in criminal cases.',
      issue:
        'Under what circumstances does drunkenness excuse criminal liability or reduce the gravity of a charge?',
      ratioDecidendi:
        'Drunkenness is no excuse unless it is involuntary and produces a state of delirium equivalent to temporary insanity, rendering the accused incapable of forming the specific intent essential to constitute the crime.',
      holding:
        'Established the foundational three propositions governing the defence of intoxication.',
      relevance:
        'The historic common law bedrock upon which Sections 23 and 24 BNS are founded.',
    },
    {
      name: 'Bablu @ Mubarik v. State of Rajasthan',
      year: 2006,
      citation: '(2006) 13 SCC 116',
      court: 'Supreme Court of India',
      bench: 'Arijit Pasayat & L.S. Panta, JJ.',
      facts:
        'The appellant killed his wife and four minor children while in an intoxicated state. At trial, he claimed he was drunk and therefore entitled to the benefit of Section 85 IPC (Section 23 BNS).',
      issue:
        'Whether voluntary consumption of alcohol can be excused under Section 85 IPC.',
      ratioDecidendi:
        'Section 85 IPC applies exclusively to involuntary intoxication, where the intoxicating thing is administered without knowledge or against the will of the accused. Where the consumption is voluntary, Section 85 has zero application, and Section 86 IPC applies.',
      holding:
        'The defence was rejected and conviction for murder was upheld.',
      relevance:
        'Definitive Supreme Court ruling reiterating that voluntary drinking cannot be masqueraded as Section 23 BNS.',
    },
    {
      name: 'Basdev v. State of Pepsu',
      year: 1956,
      citation: 'AIR 1956 SC 488',
      court: 'Supreme Court of India',
      bench: 'N.H. Bhagwati & B.P. Sinha, JJ.',
      facts:
        'A retired military officer consumed heavy amounts of liquor at a wedding party and fatally shot a young boy who refused to give up his chair.',
      issue:
        'What distinguishes Section 85 (involuntary intoxication) from Section 86 (voluntary intoxication) regarding cognitive capacity?',
      ratioDecidendi:
        'Section 85 provides absolute immunity because the actor was not responsible for his intoxication. Section 86 deals with self-induced intoxication, where the law presumes the same knowledge as if the person were sober.',
      holding:
        'Convicted of murder under Section 302 IPC.',
      relevance:
        'The authoritative Supreme Court precedent demarcating the boundary between Sections 23 and 24 BNS.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-23-brief',
      draftingCategory: 'brief',
      question:
        'Provide a Case Brief and Legal Assessment on whether Section 23 BNS applies to an individual whose prescribed medication had an unforeseen psychotic interaction with dental anaesthesia.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether a dental patient who suffers an acute drug-induced delirium following local anaesthesia interacting with unrecorded prescription medicine, causing him to assault the dentist and damage clinical equipment, is liable under Section 115/324 BNS or shielded by Section 23 BNS.

II. GOVERNING STATUTORY PROVISION
Section 23 BNS provides that nothing is an offence which is done by a person who, by reason of intoxication, is incapable of knowing the nature of the act, or that it is wrong or contrary to law, provided the intoxicating thing was administered without his knowledge or against his will.

III. LEGAL ASSESSMENT & APPLICATION
1. Character of Intoxication: "Intoxication" under penal law is not restricted to alcohol; it encompasses pharmaceutical drugs, anaesthetics, and narcotic compounds.
2. Administration Without Knowledge: The patient did not knowingly take an intoxicating concoction. The unexpected pharmacological interaction between dental lignocaine and pre-existing psychiatric medication was administered in clinical ignorance. The delirious state was induced without the patient\'s knowledge of its mind-altering consequence.
3. Total Cognitive Incapacity: The patient suffered acute delirium, tearing dental wires and screaming at imaginary phantoms, demonstrating total inability to know the nature of his act.
4. Absence of Mens Rea: The patient had no criminal intent or conscious awareness of committing an assault.

IV. OPERATIVE CONCLUSION
The patient is entitled to the general exception under Section 23 BNS. The delirium was involuntarily induced by medical interaction, warranting total exoneration from criminal liability.`,
      explanation: 'IRAC assessment for involuntary pharmaceutical intoxication.',
    },
    {
      id: 's-23-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions under Section 251 BNSS seeking discharge of an accused who was involuntarily drugged at a social gathering under Section 23 BNS.',
      answer: `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE AT CHANDIGARH
CRIMINAL CASE NO. _____ OF 2024

IN THE MATTER OF:
STATE OF UT CHANDIGARH               ...PROSECUTION
VERSUS
KUNAL KAPOOR                         ...ACCUSED / APPLICANT

MEMORANDUM OF WRITTEN SUBMISSIONS ON BEHALF OF THE ACCUSED UNDER SECTION 251 BNSS PRAYING FOR DISCHARGE PURSUANT TO SECTION 23 BNS

MOST RESPECTFULLY SHOWETH:

I. STATEMENT OF FACTS
1. The Applicant is a software engineer with zero prior criminal record.
2. On the night of 15.08.2024, the Applicant attended an Independence Day gathering at a licensed club.
3. CCTV footage secured by the police (Annexure A-1) shows two unknown co-patrons surreptitiously emptying a packet of powdered chemical (later forensically identified as MDMA / Ecstasy) into the Applicant\'s glass of packaged orange juice while the Applicant was absent from his table.
4. Upon consuming the juice, the Applicant suffered an acute hallucinogenic seizure, stripped off his shirt, and broke two glass display cabinets in the hotel lobby.
5. The Applicant was charge-sheeted under Section 324(4) BNS (Mischief) and Section 355 BNS (Affray).

II. COMPLETE SATISFACTION OF SECTION 23 BNS
6. That Section 23 of the Bharatiya Nyaya Sanhita, 2023 expressly exempts an act done by a person who, by reason of intoxication, is incapable of knowing the nature of his act, provided the substance was administered without his knowledge.
7. The uncontroverted forensic laboratory report (Annexure A-2) and club CCTV footage establish conclusively that MDMA was administered surreptitiously into the Applicant\'s beverage without his knowledge or consent.
8. The Applicant was in a state of severe toxic delirium, rendering him completely incapable of knowing the nature of his act.

III. PRECEDENTS & LAW
9. In Bablu @ Mubarik v. State of Rajasthan ((2006) 13 SCC 116), the Hon\'ble Supreme Court affirmed that where the intoxicating agent is administered without knowledge, the general exception operates as an absolute bar to conviction.
10. The Applicant satisfies every requirement of Section 23 BNS on undisputed documentary and electronic evidence.

IV. PRAYER
Wherefore, it is respectfully prayed that this Hon\'ble Court may be pleased to discharge the Accused / Applicant under Section 251 BNSS.`,
      explanation: 'Courtroom submissions for discharge under Section 23 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 23: Act of a person incapable of judgment by reason of intoxication caused against his will',
    'BNS s. 24: Voluntary intoxication (distinguished)',
    'BNS s. 22: Unsoundness of mind (same cognitive test applied to intoxication)',
    'BSA 2023 s. 108: Burden of proving involuntary intoxication on accused',
    'BSA 2023 s. 39: Expert chemical and toxicological analysis',
    'IPC s. 85: Historical predecessor provision',
  ],

  examTips: [
    'Remember the two limbs of the proviso to Section 23: (1) without knowledge, OR (2) against will.',
    'The cognitive incapacity test in Section 23 is identical to Section 22 (nature of act, or wrong/contrary to law).',
    'Peer pressure or heavy social drinking does NOT count as "against will" (Bablu @ Mubarik v. State of Rajasthan).',
  ],

  revisionPoints: [
    'Section 23 BNS covers involuntary intoxication (without knowledge or against will).',
    'Provides complete general exception (acquittal) if total cognitive incapacity is proved.',
    'Burden lies on accused under Section 108 BSA on a preponderance of probabilities.',
    'Key authorities: DPP v. Beard (1920) and Bablu @ Mubarik v. State of Rajasthan (2006).',
  ],

  relatedTopics: ['s-14', 's-22', 's-24', 'general-exceptions'],
} satisfies TopicContent

export default content
