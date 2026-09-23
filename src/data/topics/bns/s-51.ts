import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 51 of the Bharatiya Nyaya Sanhita, 2023 codifies the Doctrine of Probable Consequence: where one act is abetted and a different act is done, the abettor is liable for the act done if it was a probable consequence of the abetment and committed under the influence of the instigation, conspiracy, or aid.',

  study: `Topic at a glance
Section 51 of the Bharatiya Nyaya Sanhita, 2023 (succeeding Section 111 of the Indian Penal Code, 1860) embodies the celebrated "Doctrine of Probable Consequence" in accessorial criminal liability. It addresses the dangerous scenario where an abettor sets a criminal venture in motion, but the physical perpetrator departs from the original script and executes a different act. Section 51 balances two competing principles of justice: an abettor cannot be held liable for every wild, unrelated frolic of an associate; yet, an abettor cannot evade liability for collateral crimes that naturally, foreseeably, and probably flow from the hazardous enterprise they unleashed.

Statutory Text (Section 51 BNS)
"When an act is abetted and a different act is done, the abettor is liable for the act done, in the same manner and to the same extent as if he had directly abetted it:
Provided that the act done was a probable consequence of the abetment, and was committed under the influence of the instigation, or with the aid or in pursuance of the conspiracy which constituted the abetment."

Official Statutory Illustrations
Illustration (a): A instigates a child to put poison into the food of Z, and gives him poison for that purpose. The child, by mistake, puts the poison into the food of Y, which is by the side of that of Z. If the child was acting under the influence of A's instigation, and the act done was a probable consequence, A is liable as if he had instigated the poisoning of Y.
Illustration (b): A instigates B to burn Z's house. B sets fire to the house and at the same time commits theft of property there. A, though guilty of abetting the arson, is NOT guilty of abetting the theft; for the theft was a distinct act, and not a probable consequence of the burning.
Illustration (c): A instigates B and C to break into an inhabited house at midnight for the purpose of robbery, and provides them with firearms. B and C break in, and being resisted by Z, an inmate, B murders Z. Because the murder was a probable consequence of an armed nocturnal robbery, A is liable to the punishment for murder.

The Dual Proviso Checkpoints: Probable Consequence & Subsisting Influence
Under the Proviso to Section 51, the abettor is made constructively liable for the different act ONLY if two cumulative conditions are established:
1. Probable Consequence (Objective Foreseeability): The act done must not be a mere remote possibility; it must be a "probable consequence" — an outcome that a reasonable person in the abettor\'s shoes would foresee as naturally flowing from the hazardous situation created. Providing firearms for a midnight house-breaking (Illustration c) makes homicide a highly probable consequence when occupants resist; whereas instigating arson (Illustration b) does not make opportunistic theft a probable consequence;
2. Subsisting Influence (Causal Continuity): The different act must be committed "under the influence of the instigation, or with the aid or in pursuance of the conspiracy." If the perpetrator had abandoned the common design and committed an independent offence for private malice, the abettor is completely exonerated from the collateral crime.`,

  sections: [
    {
      id: 's-51-module-1',
      title: 'Provenance, Common Law Roots & The Probable Consequence Test',
      order: 1,
      content: [
        'Directly succeeds Section 111 of the Indian Penal Code, 1860 without substantive alteration.',
        'Common Law Lineage: Traced to Foster\'s Crown Law and the landmark case of R. v. Saunders & Archer (1573). Sir Michael Foster formulated the rule: if the principal does a different thing that grows out of, or is a natural consequence of, the counsel, the accessory is liable; but if it is an independent, distinct felony, the accessory is discharged.',
        'Objective Foreseeability Standard: The test is objective, not subjective. An abettor cannot plead: "I secretly hoped no one would get hurt" if they supplied loaded revolvers for an armed robbery.',
        'Statutory Shield: The Proviso functions as a vital shield preventing the limitless extension of accessorial liability.',
      ],
    },
    {
      id: 's-51-module-2',
      title: 'Textual Anatomy & Detailed Analysis of Illustrations (a), (b), and (c)',
      order: 2,
      content: [
        '"When an act is abetted and a different act is done": Applies where the actus reus physically diverges from the instruction.',
        '"in the same manner and to the same extent as if he had directly abetted it": Creates full statutory parity of punishment.',
        'Illustration (a) (Mistake by Agent): The abettor is liable for the unintended victim if the mistake was a probable consequence of using an immature agent in close proximity.',
        'Illustration (b) (Distinct Felony — Arson vs Theft): Crucial boundary line. Stealing chattels is not an offshoot of burning a house; it is a totally separate, distinct crime.',
        'Illustration (c) (Armed Robbery Escaping into Murder): Dispatching armed men into an inhabited house makes violent resistance and murder a classic probable consequence.',
      ],
    },
    {
      id: 's-51-module-3',
      title: 'Mandatory Proving Ingredients & The Two-Fold Proviso Burden',
      order: 3,
      content: [
        '1. Proof of the original abetment under Section 45 BNS.',
        '2. Proof that the principal offender committed a different act.',
        '3. Proviso Limb 1: Proof that the different act was a "probable consequence" of the original abetment.',
        '4. Proviso Limb 2: Proof that the act was committed under the continuing influence of the instigation, aid, or conspiracy.',
      ],
    },
    {
      id: 's-51-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 6)',
      order: 4,
      content: [
        'Burden on Prosecution under Section 104 BSA: The prosecution must prove the probable consequence link beyond reasonable doubt. It cannot merely show that the crime was "possible".',
        'Weapons and Logistics Evidence: Proving that the abettor provided deadly weapons (firearms, daggers, explosives) establishes constructive anticipation of lethal violence.',
        'Instructions and Limitations: Defence adduces contemporaneous recordings or witness testimony proving explicit prohibitions given by the abettor ("Do not use weapons, only threaten").',
        'Res Gestae under Section 6 BSA: Contemporaneous statements of the perpetrators during the crime showing whether they were acting under the abettor\'s influence or on an independent detour.',
      ],
    },
    {
      id: 's-51-module-5',
      title: 'Procedural Roadmap, Drafting Traps & Cumulative Penalty (s. 52)',
      order: 5,
      content: [
        'Bridge to Section 52 BNS: When the principal commits BOTH the act abetted AND the different act, Section 52 BNS regulates whether the abettor is liable to cumulative punishments.',
        'Framing of Charge under Section 234 BNSS: The charge must specifically invoke Section 51 BNS and state the facts demonstrating why the different act was a probable consequence.',
        'Trial Advocacy for the Abettor: Demonstrating that the physical perpetrator engaged in an independent criminal frolic (the Illustration b defence), securing acquittal on the escalated charge.',
        'Appellate Review: High Courts regularly intervene under Section 420 BNSS (appeals) to set aside murder convictions of abettors where the primary enterprise was non-violent property theft.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-51',
      section: 's. 51',
      title: 'Liability of abettor when one act abetted and different act done',
    },
  ],

  examples: [
    {
      id: 's-51-ill-1',
      title: 'Illustration 1 — Armed Midnight Robbery Leading to Inmate\'s Murder (Statutory Illustration c)',
      illustrationType: 'statutory',
      description:
        'A instigates B and C to break into a residential villa at midnight to rob a safe, and provides them with loaded country-made pistols. While B and C are breaking into the safe, the homeowner wakes up and attempts to tackle B. B shoots the homeowner through the chest, killing him. Both B and C escape. A argues he only abetted robbery and never authorized murder. Under Section 51 BNS and Illustration (c), armed nocturnal robbery carries the natural and probable consequence of lethal violence when resisted. A is fully liable for murder under Section 103 read with Section 51 BNS.',
    },
    {
      id: 's-51-ill-2',
      title: 'Illustration 2 — Abetting Boundary Trespass Where Perpetrator Rapes Occupant (Distinct Offence / No Liability)',
      illustrationType: 'fail-scenario',
      description:
        'K instigates L to enter a neighbor\'s orchard at night and cut down bamboo poles (criminal trespass and mischief). While in the orchard, L sees the neighbor\'s adult daughter sleeping on a veranda, enters the veranda, and commits rape. K is charged with abetment of rape under Section 64 read with Section 51 BNS. K is not guilty of abetting rape: rape is an independent, distinct personal atrocity, and by no stretch of human reasoning is it a "probable consequence" of instigating bamboo theft. K is liable solely for abetting trespass and mischief.',
    },
  ],

  hypotheticals: [
    {
      id: 's-51-hypo-1',
      title: 'Chamber Practical Problem — The Debt Recovery Thugs and the Accidental Arson',
      facts:
        'Creditor C hires two recovery agents, X and Y, to go to debtor D\'s textile shop and "rough him up and smash his display counters" to coerce payment of an overdue bill. C provides X and Y with iron rods. When X and Y arrive, D is absent. Frustrated, X smashes the glass counters with the iron rod. Y, noticing a can of kerosene in the corner, unilaterally pours it over the silk fabrics and sets the shop on fire, incinerating the entire commercial building (causing Rs. 80,00,000 loss). The police chargesheet C under Section 326 BNS (Mischief by fire to building) read with Section 51 BNS.',
      question:
        'Is Creditor C liable for abetting the arson under the Proviso to Section 51 BNS?',
      applicableLaw:
        'Section 51 of the Bharatiya Nyaya Sanhita, 2023.',
      analysis:
        'Under Section 51 BNS, when one act is abetted (smashing counters and beating D) and a different act is done (arson of the building), the abettor is liable for the different act ONLY IF: (1) the act done was a "probable consequence" of the abetment, and (2) it was committed under the influence of the instigation or aid. Smashing counters with iron rods does not make arson a probable consequence. Arson is a completely distinct felony requiring incendiary materials and a radically different destructive intent (governed by the principle in Illustration b). C provided iron rods for physical vandalism, not matches or accelerants. Y\'s act of setting fire was an unexpected, independent frolic.',
      conclusion:
        'C is NOT liable for abetment of arson under Section 51 BNS. C is liable only for abetting criminal mischief by smashing display counters and criminal intimidation.',
    },
  ],

  distinctions: [
    {
      id: 's-51-dist-1',
      title: 'Probable Consequence (s. 51 BNS) vs Mere Possibility',
      left: 'Probable Consequence (Section 51)',
      right: 'Mere Possibility / Remote Chance',
      rows: [
        {
          point: 'Probability Threshold',
          left: 'Natural, foreseeable outcome that ordinarily flows from the dangerous situation created.',
          right: 'Theoretical or freak occurrence that could happen but is not reasonably expected.',
        },
        {
          point: 'Legal Result',
          left: 'Abettor is fully convicted and punished for the different act.',
          right: 'Abettor is completely discharged from liability for the different act.',
        },
      ],
    },
    {
      id: 's-51-dist-2',
      title: 'Section 51 BNS vs Section 52 BNS (Cumulative Liability)',
      left: 'Section 51 BNS (Different Act Alone)',
      right: 'Section 52 BNS (Cumulative Liability)',
      rows: [
        {
          point: 'Acts Committed',
          left: 'The principal commits a DIFFERENT act instead of or during the attempt.',
          right: 'The principal commits BOTH the original act abetted AND the different act.',
        },
        {
          point: 'Sentencing',
          left: 'Liable for the different act as if directly abetted.',
          right: 'Liable to CUMULATIVE punishments for both distinct offences.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-51-trap-1',
      trap: 'An abettor is liable for ANY crime his co-conspirator commits while executing the plan.',
      correction:
        'The Proviso to Section 51 strictly limits liability to "probable consequences". If the associate commits an independent, distinct felony (like rape during a burglary, or theft during an arson), the abettor is NOT liable.',
    },
    {
      id: 's-51-trap-2',
      trap: 'An abettor who provides guns for a burglary can escape murder by proving he told the gang "do not shoot anyone".',
      correction:
        'As established in Illustration (c), providing firearms for an armed house-breaking at night makes lethal violence a probable consequence. A private verbal caution cannot negate objective probability.',
    },
  ],

  cases: [
    {
      name: 'Girja Prasad v. State',
      citation: 'AIR 1935 All 346',
      court: 'High Court of Allahabad',
      holding:
        'Where an accused instigates an assault with lathis, and one of the assailants unexpectedly pulls a concealed dagger and stabs the victim to death, the abettor is not liable for murder under Section 111 IPC (Section 51 BNS).',
      ratioDecidendi:
        'The sudden use of a lethal weapon not contemplated or provided by the abettor is not a probable consequence of instigating a simple lathi assault.',
    },
    {
      name: 'State of Maharashtra v. Som Nath Thapa',
      citation: '(1996) 4 SCC 659',
      court: 'Supreme Court of India',
      holding:
        'In large-scale criminal conspiracies involving explosives and terror attacks, collateral deaths and property destruction are inherently probable consequences under Section 111 IPC (Section 51 BNS).',
      ratioDecidendi:
        'Conspirators supplying military-grade explosives cannot plead that individual bomb blasts or casualty figures were outside their contemplation.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-51-qa-1',
      draftingCategory: 'brief',
      question:
        'Prepare an IRAC Case Brief on Girja Prasad v. State, AIR 1935 All 346, analyzing the limits of the "probable consequence" doctrine under Section 51 BNS.',
      answer: `IRAC CASE BRIEF: GIRJA PRASAD v. STATE (AIR 1935 ALL 346)

1. FACTS:
The appellant Girja Prasad had a land dispute with the complainant. He instigated three young men to go to the complainant\'s field and give him "a sound beating" with wooden sticks. The appellant did not accompany them. While the three men were beating the complainant, the complainant\'s brother intervened. One of the three men, who was secretly carrying a sharp dagger inside his shirt, pulled out the dagger and plunged it into the brother\'s chest, causing instant death. Girja Prasad was convicted of abetment of murder under Section 302 read with Section 111 IPC (Section 103 read with Section 51 BNS).

2. ISSUE:
Is an abettor who instigates a beating with wooden sticks liable for murder under Section 111 IPC (now Section 51 BNS) when one of the perpetrators unexpectedly uses a concealed lethal dagger?

3. RULE:
Under the Proviso to Section 51 BNS (Section 111 IPC), the abettor is liable for a different act ONLY if that act was a "probable consequence of the abetment, and was committed under the influence of the instigation."

4. APPLICATION:
The High Court set aside the murder conviction of the appellant, holding:
(a) The instruction given was to administer a beating with sticks;
(b) The appellant neither provided nor knew of the existence of the concealed dagger;
(c) The sudden drawing and use of a lethal knife was the independent, personal act of the individual perpetrator;
(d) Stabbing a third party to death with a dagger cannot be regarded as a natural or probable consequence of an instigation to deliver a beating with sticks;
(e) The appellant was liable only for abetting grievous hurt or simple hurt, but not murder.

5. CONCLUSION:
The conviction was altered to abetment of hurt. Section 51 BNS requires objective foreseeability; unexpected escalation with concealed lethal weapons is not a probable consequence.`,
      explanation:
        'A classic ruling defining the boundary where unexpected lethal escalation by an agent exonerates the instigator under Section 51 BNS.',
    },
    {
      id: 's-51-qa-2',
      draftingCategory: 'submissions',
      question:
        'Draft a 6-part Written Submission for an accused charged with abetment of murder under Section 51 BNS, establishing that the fatal act was an independent frolic outside the probable consequence rule.',
      answer: `IN THE COURT OF THE LEARNED SESSIONS JUDGE AT CHANDIGARH
SESSIONS CASE NO. 155 OF 2025
IN THE MATTER OF:
STATE (UT CHANDIGARH) ... PROSECUTION
VERSUS
BALBIR SINGH ... ACCUSED NO. 3

WRITTEN SUBMISSIONS ON BEHALF OF ACCUSED NO. 3 UNDER SECTION 51 BNS

MOST RESPECTFULLY SHOWETH:

I. JURISDICTIONAL INVOKING OF THE PROVISO TO SECTION 51 BNS
Accused No. 3 stands charged under Section 103(1) read with Section 51 of the Bharatiya Nyaya Sanhita, 2023 for alleged abetment of the murder of one Harpreet Singh. It is submitted that the act of murder committed by Accused No. 1 was completely outside the scope of any abetment and failed the mandatory "probable consequence" test of the Proviso to Section 51 BNS.

II. THE ADMITTED SCOPE OF ORIGINAL ABETMENT
The prosecution\'s star witness PW-1 admits in cross-examination that:
1. Accused No. 3 had a grievance regarding unpaid tractor repair charges;
2. Accused No. 3 told Accused No. 1: "Go puncture the tires of his tractor so he cannot plow tomorrow";
3. Accused No. 3 handed Accused No. 1 an awl / iron puncture nail.
The sole act abetted was minor mischief under Section 324 BNS (damage to property under Rs. 5,000).

III. INDEPENDENT FROLIC AND CONCEALED FIREARM
Accused No. 1 went to the victim\'s barn at midnight. Instead of puncturing the tires, Accused No. 1 encountered Harpreet sleeping in the barn, engaged in a sudden verbal duel, drew an unlicensed country-made pistol from his own waistband, and shot Harpreet dead.

IV. FAILURE OF THE STATUTORY TEST UNDER PROVISO TO SECTION 51
Under the Proviso to Section 51 BNS, the abettor is liable for a different act ONLY if:
"...the act done was a probable consequence of the abetment."
As established by the Hon\'ble Supreme Court and statutory Illustration (b) to Section 51:
(a) Murder with a firearm is NOT the natural or probable consequence of puncturing a tractor tire with an awl;
(b) Accused No. 3 never supplied, possessed, or knew of any firearm;
(c) The fatal shooting was an independent, radical deviation by Accused No. 1.

V. DIRECT PRECEDENTIAL APPLICATION OF GIRJA PRASAD
Under the binding principle of Girja Prasad v. State, an instigator of property damage or simple assault cannot be held vicariously liable for murder committed by an associate with an unprovided lethal weapon.

VI. PRAYER
In the complete absence of any probable consequence under the Proviso to Section 51 BNS, it is respectfully prayed that this Hon\'ble Court be pleased to ACQUIT Accused No. 3 of the charge of Murder.

DATED: 25.01.2026
PLACE: CHANDIGARH
COUNSEL FOR ACCUSED NO. 3`,
      explanation:
        'A comprehensive written submission demonstrating how to dismantle an abetment of murder charge using the Proviso to Section 51 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 51 — Liability of abettor when one act abetted and different act done',
    'BNS s. 51 Proviso — The two cumulative conditions (probable consequence & subsisting influence)',
    'BNS s. 51 Illustration (a) — Poison given to child, wrong person poisoned',
    'BNS s. 51 Illustration (b) — Arson abetted, theft committed (NO liability for theft)',
    'BNS s. 51 Illustration (c) — Armed midnight robbery, inmate murdered (LIABLE for murder)',
    'IPC s. 111 — Predecessor section',
    'BNS s. 52 — Bridge to cumulative punishment',
  ],

  examTips: [
    'Memorize Illustrations (b) and (c) — they are the universal benchmark for probable consequence: Arson + Theft = No liability; Armed Robbery + Murder = Full liability.',
    'Underline both limbs of the Proviso: (1) probable consequence, AND (2) committed under influence of abetment.',
    'Cite Girja Prasad for the rule on unexpected lethal weapon escalation.',
  ],

  revisionPoints: [
    'Codifies the Doctrine of Probable Consequence.',
    'Abettor liable for different act ONLY if naturally foreseeable.',
    'Independent frolics or distinct felonies break accessorial liability.',
  ],

  relatedTopics: ['s-45', 's-46', 's-49', 's-50', 's-52', 's-53', 's-61', 'general-explanations'],
}

export default content
