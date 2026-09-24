import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 54 of the Bharatiya Nyaya Sanhita, 2023 establishes the "Deemed Principal" doctrine: an abettor who would be punishable as an abettor if absent, and who is physically present when the offence is committed, is deemed by legal fiction to have committed the substantive offence himself.',

  study: `Topic at a glance
Section 54 of the Bharatiya Nyaya Sanhita, 2023 (succeeding Section 114 of the Indian Penal Code, 1860) enacts the foundational "Deemed Principal" doctrine of accessorial liability. It bridges the gap between prior accessorial planning and physical execution. Where an accused person has previously abetted an offence (by instigation, conspiracy, or facilitation) so that they would have been punishable as an abettor even if absent, and that person chooses to be physically present at the scene when the crime is executed, Section 54 erects an irrebuttable statutory fiction: the law deems them to have committed the substantive act or offence themselves.

Statutory Text (Section 54 BNS)
"Whenever any person, who if absent would be liable to be punished as an abettor, is present when the act or offence for which he would be punishable in consequence of the abetment is committed, he shall be deemed to have committed such act or offence."

The Dual Prerequisite Framework of Section 54
To invoke the statutory fiction of Section 54 BNS, the prosecution must establish two distinct conditions:
1. Antecedent Abetment: The accused must have performed an act of abetment (under s. 45 BNS) *prior to* the commission of the offence, such that if they had been absent from the scene, they would still have been punishable as an abettor under Section 49 BNS;
2. Physical Presence at Execution: The accused was physically present at the scene when the act or offence was committed.

The "Deemed Principal" Legal Fiction
Once these two conditions concur, Section 54 operates automatically:
- The accused ceases to be treated merely as an accessory;
- The law deems them to be a co-principal who physically executed the actus reus;
- It is completely immaterial whether the accused struck a blow, shouted encouragement, or stood silently by;
- The accused is charged, tried, and sentenced for the substantive offence itself (e.g., Murder under s. 103 BNS), rather than as a secondary abettor.

Critical Distinction from Section 3(5) BNS (Common Intention)
While both Section 54 and Section 3(5) result in primary liability for persons present at the scene:
- Section 3(5) BNS requires proof of a shared common intention and physical participation in furtherance of that design;
- Section 54 BNS specifically requires proof of *prior abetment* (antecedent instigation, conspiracy, or aid). Mere presence without prior abetment cannot attract Section 54 (Barendra Kumar Ghosh v. King-Emperor, (1925) 52 IA 40).`,

  sections: [
    {
      id: 's-54-module-1',
      title: 'Provenance, Legislative Logic & The Deemed Principal Fiction',
      order: 1,
      content: [
        'Directly succeeds Section 114 of the Indian Penal Code, 1860 without substantive alteration.',
        'Legislative Logic: To prevent an instigator or mastermind from standing by at the scene of the crime to supervise or lend moral encouragement, while falsely claiming that they were merely passive onlookers.',
        'Statutory Fiction: "shall be deemed to have committed such act or offence" — converts accessorial liability into primary co-principal liability by operation of law.',
        'Temporal Requirement: Demands proof of antecedent abetment prior to the arrival at the scene; contemporaneous aiding at the scene falls under Section 3(5) or Section 45 Thirdly BNS.',
      ],
    },
    {
      id: 's-54-module-2',
      title: 'Textual Anatomy & The Dual Elements of Section 54',
      order: 2,
      content: [
        '"who if absent would be liable to be punished as an abettor": Crucial filtering clause. If the accused did not commit prior abetment, their presence alone does not trigger Section 54.',
        '"is present when the act or offence... is committed": Requires actual, physical, or effective presence within sensory and supportive distance of the crime.',
        '"he shall be deemed to have committed such act or offence": Conviction is recorded for the substantive offence (e.g. s. 103 BNS) and not as an accessory.',
        'Procedural Simplicity: Relieves the prosecution of having to prove which specific physical injury was inflicted by which co-accused.',
      ],
    },
    {
      id: 's-54-module-3',
      title: 'Mandatory Proving Ingredients & Doctrinal Boundaries',
      order: 3,
      content: [
        '1. Proof of prior abetment by the accused under Section 45 BNS (instigation, conspiracy, or aiding).',
        '2. The substantive offence was committed by the principal in consequence of that abetment.',
        '3. Proof of physical presence of the accused at the scene of the crime at the time of execution.',
        '4. Consequence: The accused is sentenced as a principal perpetrator of the substantive offence.',
      ],
    },
    {
      id: 's-54-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 6)',
      order: 4,
      content: [
        'Burden on Prosecution under Section 104 BSA: Must prove both antecedent abetment AND physical presence beyond reasonable doubt.',
        'Proving Antecedent Abetment: Documentary, electronic (s. 63 BSA), or witness evidence of prior meetings, weapon supply, or instigation prior to the crime.',
        'Proving Physical Presence (CCTV / CDR / Test Identification): Showing the accused was physically present at the scene when the attack occurred.',
        'Defence Strategy (Disproving Prior Abetment): Demonstrating that the accused was merely an innocent bystander who had no prior communication or agreement with the perpetrators.',
      ],
    },
    {
      id: 's-54-module-5',
      title: 'Procedural Roadmap, Framing of Charge & Chamber Tactics',
      order: 5,
      content: [
        'Framing of Charge under Section 234 BNSS: The charge is framed for the substantive offence read with Section 54 BNS: "[Accused], being an abettor who if absent would be liable, was present at the commission of [offence], and is deemed to have committed [offence]."',
        'Chamber Practice: If the prosecution fails to prove prior abetment, counsel must move for acquittal under Section 54 BNS; the court cannot convict under Section 54 on mere presence alone.',
        'Joint Trial Strategy under Section 246 BNSS: Trying all participants together while separating the roles of physical strikers and supervising abettors.',
        'Bail Advocacy: Arguing under Section 480 BNSS that the accused had no weapon and caused no physical trauma, seeking regular bail pending trial.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-54',
      section: 's. 54',
      title: 'Abettor present when offence is committed',
    },
  ],

  examples: [
    {
      id: 's-54-ill-1',
      title: 'Illustration 1 — Mastermind Supervising Assassination at Scene (Deemed Principal Applies)',
      illustrationType: 'statutory',
      description:
        'A instigates B and C to murder Z, procures two pistols for them, and maps Z\'s daily jogging route. On the morning of the murder, A arrives in his car, parks across the street, and watches while B and C shoot Z dead. A never steps out of the car and never touches a weapon during the shooting. Under Section 54 BNS, A is a person who if absent would be liable as an abettor, and was physically present when the murder was committed. A is deemed by law to have committed the murder himself, and is convicted of Murder under Section 103 read with Section 54 BNS.',
    },
    {
      id: 's-54-ill-2',
      title: 'Illustration 2 — Innocent Bystander Present Without Prior Abetment (Section 54 Fails)',
      illustrationType: 'fail-scenario',
      description:
        'K is walking down a marketplace street. Two men suddenly attack and stab merchant M in front of K. K freezes in shock and watches the murder. The police arrest K and charge him under Section 103 read with Section 54 BNS, alleging he was present during the murder. K is not guilty under Section 54: Section 54 strictly requires that the person, "if absent would be liable to be punished as an abettor." K never engaged in any prior abetment, instigation, or conspiracy. Mere presence at the scene without prior abetment does not trigger Section 54.',
    },
  ],

  hypotheticals: [
    {
      id: 's-54-hypo-1',
      title: 'Chamber Practical Problem — The Strike Organizer at the Warehouse Gate',
      facts:
        'Union leader L holds a secret meeting on Monday night, instigating six workers to break into the factory warehouse on Tuesday night, beat the security guards, and destroy the main server (abetment by conspiracy and instigation). On Tuesday night, the six workers arrive at the gate armed with iron pipes. L accompanies them to the warehouse entrance, stands under the lamp post with his arms crossed, and observes while the workers beat the guards and destroy the server. L does not touch any pipe or strike any blow. The Sessions Court convicts L under Section 117 (Grievous Hurt) and Section 324 (Mischief) read with Section 54 BNS as a deemed principal. L appeals, arguing he was a non-violent observer.',
      question:
        'Is L\'s conviction as a deemed principal under Section 54 BNS legally sound?',
      applicableLaw:
        'Section 54 read with Section 45 and Section 49 of the Bharatiya Nyaya Sanhita, 2023.',
      analysis:
        'Section 54 BNS requires two conditions: (1) that the accused, if absent, would have been liable to be punished as an abettor; and (2) that the accused was physically present when the offence was committed. Both are satisfied: L previously instigated and conspired to commit the assault and mischief on Monday night, and would have been fully liable under Section 49 BNS even if he had stayed home. By choosing to be physically present at the warehouse gate during the execution, L triggered the statutory fiction of Section 54 BNS. The law deems L to have committed the acts himself. His lack of physical violence at the scene is legally irrelevant.',
      conclusion:
        'L\'s conviction as a deemed principal under Section 54 BNS is entirely valid and confirmed on appeal.',
    },
  ],

  distinctions: [
    {
      id: 's-54-dist-1',
      title: 'Section 54 BNS (Deemed Principal) vs Section 3(5) BNS (Common Intention)',
      left: 'Section 54 BNS',
      right: 'Section 3(5) BNS',
      rows: [
        {
          point: 'Required Antecedent Element',
          left: 'Requires proof of prior completed abetment before arrival at the scene.',
          right: 'Requires proof of a pre-arranged plan and shared common intention.',
        },
        {
          point: 'Physical Participation',
          left: 'No physical act required at the scene; presence alone activates the legal fiction.',
          right: 'Active physical participation in furtherance of common intention is generally required.',
        },
      ],
    },
    {
      id: 's-54-dist-2',
      title: 'Section 54 BNS (Present Abettor) vs Section 49 BNS (Absent Abettor)',
      left: 'Section 54 BNS (Present Abettor)',
      right: 'Section 49 BNS (Absent Abettor)',
      rows: [
        {
          point: 'Physical Location',
          left: 'Physically present at the scene during execution.',
          right: 'Physically absent from the scene of the crime.',
        },
        {
          point: 'Statutory Status',
          left: 'Deemed to be a principal perpetrator by legal fiction.',
          right: 'Punished as an accessorial abettor.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-54-trap-1',
      trap: 'Any person who is present at the scene of a crime can be convicted under Section 54 BNS.',
      correction:
        'Untrue. Section 54 applies ONLY to a person "who if absent would be liable to be punished as an abettor". Prior abetment must be established before presence can trigger the section.',
    },
    {
      id: 's-54-trap-2',
      trap: 'An abettor present at the scene can only be convicted under Section 49 BNS.',
      correction:
        'Incorrect. Section 54 specifically overrides Section 49 when the abettor is present, deeming them to have committed the substantive offence as a co-principal.',
    },
  ],

  cases: [
    {
      name: 'Barendra Kumar Ghosh v. King-Emperor',
      citation: '(1925) 52 IA 40 / AIR 1925 PC 1',
      court: 'Privy Council',
      holding:
        'Lord Sumner expounded the distinction between Section 114 IPC (Section 54 BNS) and Section 34 IPC (Section 3(5) BNS). Section 114 applies only where there is prior abetment followed by presence at the scene.',
      ratioDecidendi:
        'Section 114 does not apply where the participation is contemporaneous under common intention; it requires distinct antecedent abetment.',
    },
    {
      name: 'Mathurala v. State of M.P.',
      citation: 'AIR 1966 SC 109 / 1966 Cri LJ 77',
      court: 'Supreme Court of India',
      holding:
        'To attract Section 114 IPC (Section 54 BNS), the prosecution must prove that the abettor had done an act prior to the commission of the offence which amounted to abetment.',
      ratioDecidendi:
        'Mere presence of a person at the scene of the crime cannot convert them into a deemed principal under Section 114 in the absence of prior abetment.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-54-qa-1',
      draftingCategory: 'brief',
      question:
        'Prepare an IRAC Case Brief on Mathurala v. State of M.P., AIR 1966 SC 109, examining the mandatory requirement of prior abetment under Section 54 BNS.',
      answer: `IRAC CASE BRIEF: MATHURALA v. STATE OF M.P. (AIR 1966 SC 109)

1. FACTS:
During an armed attack in a village, the appellant was seen standing near the scene of the clash where several persons were assaulted and one was killed. The trial court convicted the appellant as a deemed principal under Section 302 read with Section 114 IPC (Section 103 read with Section 54 BNS). There was, however, no evidence that the appellant had previously instigated, conspired, or aided the attackers prior to the incident, nor did he strike any blow.

2. ISSUE:
Can an accused be convicted as a deemed principal under Section 114 IPC (now Section 54 BNS) based solely on physical presence at the scene, without proof of prior abetment?

3. RULE:
Under Section 54 BNS (Section 114 IPC), the deemed principal fiction applies ONLY to a person "who if absent would be liable to be punished as an abettor." Proof of prior abetment is an indispensable condition precedent.

4. APPLICATION:
The Supreme Court reversed the conviction, holding:
(a) Section 114 IPC (Section 54 BNS) is not a rule creating liability out of thin air for mere spectators;
(b) The words "who if absent would be liable as an abettor" require the prosecution to prove that antecedent to the commission of the offence, the accused committed an act of abetment under Section 107 IPC (Section 45 BNS);
(c) In the absence of evidence of prior instigation, conspiracy, or aid, Section 114 cannot be invoked;
(d) Mere physical presence at the scene of a crime does not constitute abetment or primary guilt.

5. CONCLUSION:
The appellant was acquitted. Section 54 BNS requires strict proof of antecedent accessorial guilt before physical presence can convert an accused into a deemed principal.`,
      explanation:
        'The definitive Supreme Court authority holding that Section 54 BNS cannot be applied without establishing prior abetment.',
    },
    {
      id: 's-54-qa-2',
      draftingCategory: 'submissions',
      question:
        'Draft a 6-part Written Submission for an accused charged as a deemed principal under Section 54 BNS, refuting the existence of antecedent abetment.',
      answer: `IN THE COURT OF THE LEARNED SESSIONS JUDGE AT INDORE, M.P.
SESSIONS CASE NO. 204 OF 2025
IN THE MATTER OF:
STATE OF M.P. ... PROSECUTION
VERSUS
DEEPAK SHARMA ... ACCUSED NO. 4

WRITTEN SUBMISSIONS ON BEHALF OF ACCUSED NO. 4 UNDER SECTION 54 BNS

MOST RESPECTFULLY SHOWETH:

I. SUBSTANTIVE INVALIDITY OF CHARGE UNDER SECTION 54 BNS
Accused No. 4 stands charged under Section 103(1) read with Section 54 of the Bharatiya Nyaya Sanhita, 2023 as a deemed principal in the murder of one Vinod. It is submitted that the charge is legally untenable because the prosecution has failed to establish the foundational requirement of antecedent abetment.

II. THE STATUTORY PREREQUISITE OF SECTION 54 BNS
Section 54 BNS applies only to a person:
"...who if absent would be liable to be punished as an abettor..."
As settled by the Hon\'ble Supreme Court in Mathurala v. State of M.P., AIR 1966 SC 109, Section 54 cannot be invoked unless the prosecution proves that the accused committed a completed act of abetment prior to the crime.

III. COMPLETE ABSENCE OF PRIOR ABETMENT
A thorough review of the entire prosecution record reveals:
1. No witness speaks of any prior meeting, conspiracy, or conversation between Accused No. 4 and the assailants;
2. Seized mobile phones and Call Detail Records (Ex. P-14) show zero telephonic contact between Accused No. 4 and Accused Nos. 1 to 3;
3. Accused No. 4 provided no weapon, vehicle, or financial assistance.
Accused No. 4 could NEVER have been punished as an abettor if absent.

IV. ACCIDENTAL PHYSICAL PRESENCE AS A SPECTATOR
PW-3 (an independent tea vendor) admitted that Accused No. 4 was drinking tea at his stall when Accused Nos. 1 to 3 arrived on motorcycles and attacked the deceased. Accused No. 4 stood watching in shock. Mere presence at the scene without antecedent abetment cannot attract Section 54 BNS.

V. DISTINCTION FROM SECTION 3(5) BNS
The prosecution has not charged Accused No. 4 under Section 3(5) BNS, acknowledging that there was no common intention. Charging him under Section 54 BNS without proving prior abetment is an incurable error of law.

VI. PRAYER
In the complete absence of any prior abetment under Section 45 BNS, it is respectfully prayed that this Hon\'ble Court be pleased to ACQUIT Accused No. 4 of all charges.

DATED: 02.02.2026
PLACE: INDORE
COUNSEL FOR ACCUSED NO. 4`,
      explanation:
        'A flawless written submission applying the Mathurala ratio to secure an acquittal under Section 54 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 54 — Abettor present when offence is committed',
    'BNS s. 54 Core Phrase — "who if absent would be liable to be punished as an abettor"',
    'BNS s. 54 Legal Effect — "he shall be deemed to have committed such act or offence"',
    'IPC s. 114 — Predecessor section',
    'BNS s. 3(5) — Distinguish from common intention',
  ],

  examTips: [
    'Remember the phrase "who if absent would be liable as an abettor" — prior abetment is mandatory.',
    'Underline that Section 54 creates a legal fiction of deemed principal liability.',
    'Cite Barendra Kumar Ghosh and Mathurala v. State of M.P. in any answer on Section 54.',
  ],

  revisionPoints: [
    'Deemed principal doctrine.',
    'Requires prior abetment + physical presence at execution.',
    'Converts accessorial liability into primary substantive liability.',
  ],

  relatedTopics: ['s-3', 's-45', 's-46', 's-49', 's-50', 's-51', 'general-explanations'],
}

export default content
