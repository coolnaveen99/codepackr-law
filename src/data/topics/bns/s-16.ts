import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 16 of the Bharatiya Nyaya Sanhita, 2023 protects ministerial officers, court bailiffs, police officers, and executioners from criminal liability for acts done in pursuance of, or warranted by, a judgment or order of a Court, while such order remains in force, even if the Court had no jurisdiction, provided they act in good faith.',

  study: `Topic at a glance
Section 16 of the Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) is the statutory shield for the executive arm of the judiciary. While Section 15 protects the Judge who pronounces the order, Section 16 protects the ministerial officers, court bailiffs, process servers, police personnel, and executioners who carry the judicial mandate into physical execution.

Statutory Text (Section 16 BNS)
"Nothing which is done in pursuance of, or which is warranted by the judgment or order of, a Court, if done whilst such judgment or order remains in force, is an offence, notwithstanding the Court may have had no jurisdiction to pass such judgment or order, provided the person doing the act in good faith believes that the Court had such jurisdiction."

The Canonical Hangman Illustration
The classic classroom and chamber illustration of Section 16 is the executioner (hangman). An executioner who hangs a condemned prisoner to death pursuant to a death warrant issued by a Court of Session commits an act that would otherwise constitute culpable homicide or murder. Under Section 16 BNS, the executioner is completely exempt from criminal liability because the act is warranted by a judicial judgment and warrant in force at the time of execution.

Four Essential Statutory Pillars
1. Pursuant to or Warranted by Judgment/Order: The act must strictly conform to what the judicial instrument mandates. The officer cannot exceed the mandate (e.g., executing a warrant of attachment by assaulting family members).
2. Order Must Be in Force: The act must be performed while the judgment, decree, or warrant remains legally operative. If the order has expired, been stayed by an appellate court, or was formally recalled, the shield falls away once notice of the stay is served.
3. Jurisdictional Defect Overlooked: The statute contains a powerful non-obstante phrase: "notwithstanding the Court may have had no jurisdiction to pass such judgment or order". Ministerial officers are not expected to sit as courts of appeal over the jurisdiction of the issuing court.
4. Bona Fide Belief in Jurisdiction: The proviso requires that the person executing the order must in "good faith" (under Section 2(11) BNS, with due care and attention) believe that the Court possessed jurisdiction.

Contrast with Section 14 BNS
Under Section 14, an officer is protected if bound by law or acting under a good-faith mistake of fact. Under Section 16, protection is tethered to a specific judicial judgment or order, and the officer is immunized even against defects of law (such as lack of judicial jurisdiction) provided he honestly believed the Court had jurisdiction.`,

  sections: [
    {
      id: 's-16-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 16 BNS succeeds Section 78 of the Indian Penal Code, 1860 without substantive textual modification.',
        'Jurisprudential foundation: The separation of adjudicative responsibility from ministerial execution. A ministerial officer is an instrument of the Court; public justice would collapse if bailiffs and police officers were required to independently assess the constitutional or territorial jurisdiction of every Magistrate before executing a summons, warrant, or attachment.',
        'The principle "Res judicata pro veritate accipitur" and the presumption of validity of court orders mandate that executive functionaries must carry out judicial orders without fear of subsequent criminal indictment.',
        'Legislative objective: To provide absolute immunity to all officers executing judicial warrants, attachment orders, evictions, seizures, and penal sentences, provided they act within the terms of the warrant and in good faith.',
      ],
    },
    {
      id: 's-16-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '"Nothing which is done in pursuance of, or which is warranted by": Requires strict adherence to the four corners of the judicial instrument. Acts done in excess or outside the terms of the warrant are not protected.',
        '"the judgment or order of, a Court": Covers judgments, final decrees, interim injunctions, search warrants, arrest warrants, and distress warrants issued by civil, criminal, revenue, or constitutional courts.',
        '"if done whilst such judgment or order remains in force": Crucial temporal condition. If the warrant was returnable on 10th October, an arrest made on 15th October without revalidation is unlawful and outside Section 16.',
        '"notwithstanding the Court may have had no jurisdiction": A complete legislative dispensation regarding jurisdictional errors. Ministerial agents are relieved from verifying subject-matter or territorial competence.',
        '"provided the person doing the act in good faith believes that the Court had such jurisdiction": Good faith under Section 2(11) BNS. If the officer has actual knowledge that the order was forged or issued by a person with zero judicial authority, protection is forfeited.',
      ],
    },
    {
      id: 's-16-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. Commission of an act that would otherwise constitute an offence under penal law.',
        '2. The act was performed strictly in pursuance of, or was warranted by, a judgment or order of a Court.',
        '3. The judgment or order was in force at the exact moment the act was executed.',
        '4. The person executing the act had a bona fide belief that the issuing Court had competent jurisdiction.',
        '5. The belief was entertained in good faith under Section 2(11) BNS with due care and attention.',
      ],
    },
    {
      id: 's-16-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106, 108 & s. 63)',
      order: 4,
      content: [
        'Under Section 108 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), the burden of proving that the act was justified under Section 16 BNS lies upon the executing officer by a preponderance of probabilities.',
        'Proof of the judicial order: Proved by producing the original warrant with the court seal or a certified copy under Sections 74 and 77 BSA.',
        'Electronic Warrants: Where electronic warrants, e-summons, or digital distress notices under the BNSS are executed, compliance with Section 63 BSA (certificate for admissibility of electronic records) is mandatory to establish the valid issuance and currency of the order.',
        'Proof of currency: Once the officer produces the warrant valid on its face, the burden shifts to the complainant/prosecution to show that a stay order was served on the officer prior to execution.',
      ],
    },
    {
      id: 's-16-module-5',
      title: 'Procedural Roadmap, Competent Forum & Sanction Checkpoints',
      order: 5,
      content: [
        'Trial Forum: Raised before the Magistrate or Sessions Court trying the substantive offence (e.g. wrongful confinement, theft, or assault).',
        'Preliminary Discharge: Section 16 can be invoked at the stage of framing of charges under Section 251 BNSS (Sessions) or Section 262 BNSS (Warrant cases) to obtain discharge upon production of the court order.',
        'Mandatory Sanction under Section 218 BNSS: Police and revenue officers executing court processes are public servants; taking cognizance without prior government sanction under Section 218 BNSS is a jurisdictional nullity.',
        'Inherent High Court Jurisdiction: Petitions under Section 528 BNSS are routinely allowed to quash vexatious prosecutions initiated by judgment-debtors against executing bailiffs.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-16',
      section: 's. 16',
      title: 'Act done pursuant to judgment or order of Court',
    },
  ],

  examples: [
    {
      id: 's-16-ill-1',
      title: 'Illustration 1 — Execution of Search Warrant Issued Without Territorial Jurisdiction (Immunity Applies)',
      illustrationType: 'statutory',
      description:
        'A Judicial Magistrate First Class in District X mistakenly issues a search warrant under Section 96 BNSS for a house located in District Y, outside his territorial jurisdiction. Sub-Inspector K, posted in District X, receives the warrant regular on its face, enters the house in District Y, and seizes suspected stolen property. The house owner files a complaint for criminal trespass (s. 329 BNS) and robbery (s. 309 BNS). Sub-Inspector K is completely protected under Section 16 BNS: the search was warranted by a court order in force, and K in good faith believed the Court had jurisdiction.',
    },
    {
      id: 's-16-ill-2',
      title: 'Illustration 2 — Execution of Warrant after Notice of Stay Order (Immunity Fails)',
      illustrationType: 'fail-scenario',
      description:
        'A bailiff arrives at judgment-debtor B\'s factory to attach machinery under a decree. B produces a certified copy of an operative stay order granted that morning by the High Court staying the execution, and serves it upon the bailiff. The bailiff insolently tears up the stay order, proceeds to break open the factory locks, and removes the machinery. The bailiff cannot claim protection under Section 16 BNS: the order of attachment had ceased to be "in force" the moment the stay order was communicated, and destroying the stay order negates good faith.',
    },
  ],

  hypotheticals: [
    {
      id: 's-16-hypo',
      title: 'Chamber Practice Problem: Arrest under Non-Bailable Warrant Issued in Quashed Proceedings',
      facts:
        'An FIR registered against corporate director "S" under Section 318(4) BNS (Cheating) was quashed in its entirety by the High Court under Section 528 BNSS on 15th January 2025. Due to administrative delay between the High Court registry and the trial court, the Metropolitan Magistrate had issued a Non-Bailable Warrant (NBW) against S on 10th January 2025 returnable on 25th January 2025. On 20th January 2025, Head Constable "M", who was not apprised of the High Court quashing order and had the physical NBW bearing the trial court seal in his possession, arrested S from an airport lounge and kept him in police custody overnight. S filed a criminal complaint against M for wrongful confinement under Section 127 BNS.',
      question:
        'Can Head Constable M successfully plead Section 16 BNS to defend against the charge of wrongful confinement?',
      applicableLaw:
        'Section 16 BNS (Act done pursuant to court order); Section 2(11) BNS (Good faith); Section 72 BNSS (Execution of warrants); Section 108 BSA 2023 (Burden of proof).',
      analysis:
        '1. Existence of Facial Warrant: On 20th January 2025, Constable M possessed an original, unexpired warrant bearing the seal of the Magistrate.\n2. Knowledge of Quashing: The High Court quashing order had not been served upon Constable M or his local police station. No communication of stay was produced before him at the airport.\n3. Currency of Order from Officer\'s Standpoint: From the perspective of the executing officer acting with due care, the order remained in apparent force.\n4. Jurisdictional Invalidation: Even though the quashing order rendered the Magistrate functus officio, Section 16 expressly protects the officer "notwithstanding the Court may have had no jurisdiction... provided the person doing the act in good faith believes that the Court had such jurisdiction."',
      conclusion:
        'Head Constable M is entitled to full immunity under Section 16 BNS. The arrest was warranted by an extant judicial process, and M acted in good faith with no notice of the superior quashing order.',
    },
  ],

  distinctions: [
    {
      id: 's-16-dist-1',
      title: 'Section 16 BNS vs Section 14 BNS',
      left: 'Section 16 BNS (Act under Court Order)',
      right: 'Section 14 BNS (Act under General Legal Duty)',
      rows: [
        {
          point: 'Operative Source',
          left: 'Specific judicial instrument: judgment, decree, or order of a Court.',
          right: 'General statutory obligation, executive regulation, or statutory mandate.',
        },
        {
          point: 'Jurisdictional Defects',
          left: 'Expressly condones lack of jurisdiction of the issuing Court if believed in good faith.',
          right: 'Protects mistake of fact, but an act without statutory authority is generally not protected.',
        },
        {
          point: 'Primary Focus',
          left: 'Execution of judicial commands by ministerial and police agents.',
          right: 'Subordinate compliance with statutory duties, superior commands, and legal mandates.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-16-trap-1',
      trap: 'An executioner (hangman) who hangs a death-row convict can be prosecuted if the Supreme Court later declares the conviction unconstitutional in review.',
      correction:
        'Untrue. Under Section 16 BNS, the executioner is completely immune because the act was warranted by a judgment and warrant in force at the time of execution. Section 16 was specifically drafted to protect executioners and jail superintendents.',
    },
    {
      id: 's-16-trap-2',
      trap: 'A police officer can execute a warrant of arrest after its returnable date has expired and still claim Section 16 immunity.',
      correction:
        'Untrue. Section 16 requires that the act be done "whilst such judgment or order remains in force". Once a warrant expires or is recalled, it ceases to be in force, and an arrest made thereunder constitutes illegal detention.',
    },
  ],

  cases: [
    {
      name: 'Kapur Chand v. State of Himachal Pradesh',
      year: 1958,
      citation: 'AIR 1958 SC 429',
      court: 'Supreme Court of India',
      bench: 'P. Govinda Menon & A.K. Sarkar, JJ.',
      facts:
        'In execution of a warrant for recovery of maintenance issued under Section 488 CrPC, the officer seized property belonging to the husband. The order was challenged as lacking territorial jurisdiction.',
      issue:
        'Whether the executing officer was protected from criminal charges under Section 78 IPC (now Section 16 BNS) despite defects in the Magistrate\'s jurisdiction.',
      ratioDecidendi:
        'An officer executing a warrant issued by a Court is protected by the general exception even if the Court had no jurisdiction to pass the order, provided the officer in good faith believed that the Court had such jurisdiction and the warrant was in force.',
      holding:
        'The Supreme Court affirmed the statutory immunity of the executing officer.',
      relevance:
        'Leading Supreme Court precedent establishing that executing officers need not investigate jurisdictional competence of issuing courts.',
    },
    {
      name: 'State of U.P. v. Surinder Kumar',
      year: 2000,
      citation: '(2000) 10 SCC 337',
      court: 'Supreme Court of India',
      bench: 'K.T. Thomas & R.P. Sethi, JJ.',
      facts:
        'Police officers executed an attachment warrant issued by a criminal court. The complainant alleged that the officers committed robbery and trespass.',
      issue:
        'Whether police officers carrying out court orders can be subjected to criminal trials for execution of judicial warrants.',
      ratioDecidendi:
        'Officers acting pursuant to court warrants enjoy statutory immunity under the general exceptions. Entertaining criminal complaints against officers executing judicial orders without sanction under Section 197 CrPC (now Section 218 BNSS) subverts the rule of law.',
      holding:
        'Criminal proceedings against the executing officers were quashed.',
      relevance:
        'Reaffirms the dual protection of Section 16 BNS and Section 218 BNSS for executing officers.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-16-brief',
      draftingCategory: 'brief',
      question:
        'Provide a structured Legal Brief on whether Section 16 BNS protects a bailiff who broke open an outer door during execution of an eviction decree.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether a Civil Court bailiff who breaks open an outer door to execute a warrant of possession under Order XXI Rule 35 CPC commits house-breaking under Section 331 BNS, or is shielded by Section 16 BNS.

II. GOVERNING STATUTORY PROVISION
Section 16 BNS provides immunity for any act done in pursuance of, or warranted by, the judgment or order of a Court, if done whilst such order remains in force, notwithstanding lack of jurisdiction, if done in good faith.

III. LEGAL ASSESSMENT & APPLICATION
1. Scope of Warrant: Order XXI Rule 35 and Rule 11 CPC authorize the bailiff to remove any person bound by the decree and deliver vacant possession. Breaking open outer doors requires prior leave of the court under Order XXI Rule 11(2) CPC.
2. If Specific Authorization Exists: Where the executing court specifically endorsed power to break open locks, the act is directly "warranted by the order of a Court" and Section 16 provides absolute immunity.
3. If No Specific Authorization: If the warrant did not authorize breaking open outer doors, the act exceeded the warrant. However, if the bailiff acted in good faith believing the general warrant included necessary force, Section 16 may still shield him from penal mens rea, though procedural irregularity persists.

IV. OPERATIVE CONCLUSION
The bailiff is immune from criminal prosecution under Section 16 BNS provided he acted within the terms of the warrant in good faith. Redress for procedural excess lies before the Executing Court under civil procedure, not by criminal prosecution.`,
      explanation: 'IRAC assessment for execution proceedings.',
    },
    {
      id: 's-16-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions under Section 262 BNSS praying for discharge of a Police Sub-Inspector under Section 16 BNS.',
      answer: `IN THE COURT OF THE METROPOLITAN MAGISTRATE, SAKET COURTS, NEW DELHI
CRIMINAL CASE NO. _____ OF 2024

IN THE MATTER OF:
STATE (ON COMPLAINT OF HARISH MEHRA) ...COMPLAINANT
VERSUS
SUB-INSPECTOR RAJESH KUMAR            ...ACCUSED / APPLICANT

WRITTEN SUBMISSIONS ON BEHALF OF THE ACCUSED UNDER SECTION 262 BNSS SEEKING DISCHARGE PURSUANT TO SECTION 16 BNS

MOST RESPECTFULLY SHOWETH:

I. STATEMENT OF MATERIAL FACTS
1. The Applicant is a Sub-Inspector of Police who was assigned to execute a non-bailable warrant of arrest issued against the Complainant by the learned Special Judge (NDPS), Patiala House Courts.
2. On 14.08.2024, the Applicant executed the said warrant by arresting the Complainant and presenting him before the jurisdictional court within 24 hours as mandated by law.
3. The Complainant has maliciously filed the present private complaint alleging kidnapping (Section 140 BNS) and wrongful confinement (Section 127 BNS) on the false pretext that the issuing Court lacked territorial jurisdiction.

II. STATUTORY MANDATE OF SECTION 16 BNS
4. That Section 16 of the Bharatiya Nyaya Sanhita, 2023 unequivocally declares that nothing done in pursuance of, or warranted by, the order of a Court, whilst in force, is an offence, notwithstanding that the Court had no jurisdiction, provided the officer acted in good faith.
5. The non-bailable warrant (Annexure A-1) was issued under the seal and signature of a competent Sessions Court and was fully in force on 14.08.2024.

III. PRECEDENTS & LAW OF JURISDICTIONAL IMMUNITY
6. In Kapur Chand v. State of Himachal Pradesh (AIR 1958 SC 429), the Hon'ble Supreme Court held that an executing officer cannot be prosecuted even if the order was passed without jurisdiction.
7. Furthermore, the complaint is barred for want of prior sanction under Section 218 BNSS (State of U.P. v. Surinder Kumar, (2000) 10 SCC 337).

IV. PRAYER
Wherefore, it is prayed that this Hon'ble Court may be pleased to discharge the Accused / Applicant under Section 262 BNSS.`,
      explanation: 'Courtroom discharge application for police officers executing court orders.',
    },
  ],

  bareActPointers: [
    'BNS s. 16: Act done pursuant to judgment or order of Court',
    'BNS s. 2(11): Definition of "good faith"',
    'BNSS 2023 s. 72: Execution of arrest warrants',
    'BNSS 2023 s. 218: Sanction for prosecution of public servants',
    'BSA 2023 s. 77: Presumption as to judicial orders and proceedings',
    'IPC s. 78: Historical predecessor provision',
  ],

  examTips: [
    'Remember the classic hangman illustration: an executioner is protected under Section 16 BNS, not Section 14.',
    'Note the non-obstante phrase: Section 16 protects the officer even if the Court had NO jurisdiction, so long as he acted in good faith.',
    'Always ensure the order was "in force" at the time of the act; executing an expired or stayed order forfeits immunity.',
  ],

  revisionPoints: [
    'Section 16 BNS shields ministerial officers and police executing court orders.',
    'Applies even if the issuing court lacked jurisdiction, provided good faith belief exists.',
    'Temporal condition: the order must be legally in force at the time of execution.',
    'Key authority: Kapur Chand v. State of Himachal Pradesh (AIR 1958 SC 429).',
  ],

  relatedTopics: ['s-14', 's-15', 's-17', 'general-exceptions'],
} satisfies TopicContent

export default content
