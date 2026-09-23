import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 53 of the Bharatiya Nyaya Sanhita, 2023 governs the divergence of physical effects: where an act is abetted to cause a particular effect, but causes a different, more severe effect, the abettor is liable for the effect caused if he knew the act abetted was likely to cause that effect.',

  study: `Topic at a glance
Section 53 of the Bharatiya Nyaya Sanhita, 2023 (succeeding Section 113 of the Indian Penal Code, 1860) addresses the critical divergence of physical outcomes in accessorial liability. While Section 50 governs divergence of *intention* (mens rea) and Section 51 governs divergence of *acts* (actus reus), Section 53 governs divergence of *effects* (resulting physical consequence). It answers the vital courtroom question: when an abettor instigates an assault intending to inflict a lesser injury (such as grievous hurt), but the victim tragically dies in consequence, under what precise statutory condition can the abettor be convicted and punished for Murder or Culpable Homicide? Section 53 conditions this elevated liability strictly upon the abettor\'s subjective knowledge of likelihood ("provided he knew that the act abetted was likely to cause that effect").

Statutory Text (Section 53 BNS)
"When an act is abetted with the intention on the part of the abettor of causing a particular effect, and an act for which the abettor is liable in consequence of the abetment, causes a different effect from that intended by the abettor, the abettor is liable for the effect caused, in the same manner and to the same extent as if he had abetted the act with the intention of causing that effect, provided he knew that the act abetted was likely to cause that effect.
Illustration.—A instigates B to cause grievous hurt to Z. B, in consequence of the instigation, causes grievous hurt to Z. Z dies in consequence. Here, if A knew that the grievous hurt abetted was likely to cause death, A is liable to be punished for murder."

The Tripartite Taxonomy of Accessorial Divergence
To master Chapter IV of the Sanhita, practitioners and scholars must distinguish the three divergence sections:
1. Section 50 BNS: Same Act + Different Intention -> Judged by abettor\'s own intent;
2. Section 51 BNS: Different Act Done -> Governed by the Doctrine of Probable Consequence;
3. Section 53 BNS: Same Act + Different Physical Effect Produced -> Governed by Knowledge of Likelihood.

The Statutory Proviso: The Knowledge of Likelihood Test
Under Section 53, the abettor is NOT automatically liable for every fatal or catastrophic outcome that unexpectedly ensues. The statute enacts a mandatory subjective test:
- The prosecution must prove that the abettor *knew* that the act abetted was *likely* to cause that elevated effect;
- "Likely" means a real, substantial probability, not a remote theoretical possibility;
- If A instigates B to break Z\'s skull with an iron crowbar, A knows that a skull fracture is likely to cause death; therefore, when Z dies, A is liable for Murder under Section 103 read with Section 53 BNS;
- Conversely, if A instigates B to fracture Z\'s pinky finger, and Z unexpectedly dies of a rare hospital antibiotic reaction or tetanus, A had no knowledge that fracturing a finger was likely to cause death; A is liable strictly for abetment of Grievous Hurt under Section 117 BNS, and cannot be convicted of homicide.`,

  sections: [
    {
      id: 's-53-module-1',
      title: 'Provenance, Jurisprudential Philosophy & The Resulting Harm Doctrine',
      order: 1,
      content: [
        'Directly succeeds Section 113 of the Indian Penal Code, 1860 without substantive alteration.',
        'Jurisprudential Philosophy: Balances the doctrine of constructive liability with the requirement of subjective foresight (mens rea). The law refuses to hold an instigator liable for death unless the fatal outcome was within the horizon of their knowledge.',
        'The Resulting Harm Rule: Where a physical act produces an unintended fatal or grievous crescendo, accessorial liability is calibrated by the cognitive awareness of likelihood.',
        'Distinguished from Tortious Causation: Unlike civil tort law where a tortfeasor "takes the victim as he finds them" (eggshell skull rule), penal law under Section 53 requires subjective knowledge of likelihood before imposing homicide convictions.',
      ],
    },
    {
      id: 's-53-module-2',
      title: 'Textual Anatomy & Analysis of the Statutory Illustration',
      order: 2,
      content: [
        '"with the intention on the part of the abettor of causing a particular effect": E.g., intending broken bones, unconsciousness, or temporary disability.',
        '"causes a different effect from that intended": The physiological consequence escalates to death, permanent vegetative state, or catastrophic organ failure.',
        '"provided he knew that the act abetted was likely to cause that effect": Mandatory statutory proviso; knowledge of likelihood must be proved by the prosecution as a matter of fact.',
        'Statutory Illustration: A instigates B to cause grievous hurt to Z; Z dies. A is liable for murder IF A knew the grievous hurt was likely to cause death; otherwise, A is liable only for grievous hurt.',
      ],
    },
    {
      id: 's-53-module-3',
      title: 'Mandatory Proving Ingredients & The Foreseeability Threshold',
      order: 3,
      content: [
        '1. Proof of the original abetment with intent to cause Effect A (e.g. grievous hurt).',
        '2. The principal executed the actus reus in consequence of the abetment.',
        '3. The physical act produced Effect B (e.g. death) instead of Effect A.',
        '4. The abettor had subjective knowledge that the act abetted was *likely* to cause Effect B.',
        '5. Absence of knowledge of likelihood confines the abettor\'s liability to Effect A.',
      ],
    },
    {
      id: 's-53-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 6)',
      order: 4,
      content: [
        'Burden on Prosecution under Section 104 BSA: The prosecution must prove the abettor\'s subjective knowledge of likelihood beyond reasonable doubt.',
        'Weaponry and Anatomical Targeting Evidence: Proof that the abettor directed blows to be aimed at the head, chest, or throat establishes knowledge that death was likely.',
        'Victim\'s Physical Frailty: If the victim was an elderly, frail, or pregnant person, and the abettor knew of this condition when instigating violence, knowledge of fatal likelihood is established under Section 6 BSA.',
        'Autopsy Surgeon\'s Evidence: Cross-examination of the medical examiner to prove that death was caused by an idiosyncratic medical complication (e.g., sudden pulmonary embolism) that could not have been known or contemplated by the abettor.',
      ],
    },
    {
      id: 's-53-module-5',
      title: 'Procedural Roadmap, Sessions Trials & Dowry/Custodial Assault Scenarios',
      order: 5,
      content: [
        'Trial Reality in Homicide Prosecutions: In cases where an instigator directed an enforcer to "break the victim\'s legs" and the victim died of femoral shock, the prosecution automatically charges Section 103 BNS (Murder).',
        'Primary Chamber Defence Strategy: Invoke the Proviso to Section 53 BNS to demonstrate that the abettor instructed only leg fractures and had zero knowledge that death was likely, reducing the conviction to Section 117 BNS (Grievous Hurt, max 7 years).',
        'Framing of Charge under Section 234 BNSS: The charge must specifically state whether the abettor is alleged to have known that death was likely.',
        'Bail Advocacy: Arguing under Section 480 BNSS that the absence of knowledge of lethal likelihood removes the bar of life imprisonment.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-53',
      section: 's. 53',
      title:
        'Liability of abettor for an effect caused by act abetted different from that intended by abettor',
    },
  ],

  examples: [
    {
      id: 's-53-ill-1',
      title: 'Illustration 1 — Directing Iron Rod Strike to Skull Leading to Death (Statutory Application)',
      illustrationType: 'statutory',
      description:
        'A instigates B to strike Z on the skull with an iron crowbar to inflict a severe head fracture (grievous hurt). B strikes Z on the head with the crowbar in consequence of the instigation; Z sustains a compound depressed skull fracture and dies forty-eight hours later. A claims he only intended grievous hurt and not death. Under Section 53 BNS and its statutory illustration, A knew that striking an adult on the skull with a heavy iron crowbar was likely to cause death. A is fully liable for murder under Section 103 read with Section 53 BNS.',
    },
    {
      id: 's-53-ill-2',
      title: 'Illustration 2 — Directing Broken Arm Leading to Fatal Hospital Infection (Knowledge of Death Absent)',
      illustrationType: 'fail-scenario',
      description:
        'P instigates Q to use a wooden stick to strike R on the forearm and break his ulna bone (grievous hurt). Q strikes R on the forearm, fracturing the bone. R is hospitalized; during surgery, R contracts an unforeseen, virulent multi-drug resistant superbug infection and dies three weeks later of sepsis. P is charged with abetment of murder under Section 103 read with Section 53 BNS. P is NOT liable for murder: P had zero knowledge that fracturing an arm bone was likely to cause death; the death was an idiosyncratic medical complication. Under Section 53 BNS, P is liable strictly for abetment of Grievous Hurt under Section 117 BNS.',
    },
  ],

  hypotheticals: [
    {
      id: 's-53-hypo-1',
      title: 'Chamber Practical Problem — Land Dispute Enforcers and the Ruptured Spleen',
      facts:
        'Farmer F hires wrestler W to go to rival farmer G\'s house and "beat him up so badly on his ribs and back that he cannot plow his field for a month" (grievous hurt under s. 114 BNS). F provides W with a bamboo lathi. W beats G across the abdomen and back. Unknown to F or W, G suffered from severe undiagnosed splenomegaly (an enlarged, diseased spleen). A moderate lathi blow ruptured the diseased spleen, causing massive internal hemorrhaging, and G died within two hours. The police file a chargesheet against F for Abetment of Murder under Section 103 read with Section 53 BNS.',
      question:
        'Can F be convicted of abetting murder under Section 53 of the Bharatiya Nyaya Sanhita, 2023?',
      applicableLaw:
        'Section 53 and Section 103 of the Bharatiya Nyaya Sanhita, 2023.',
      analysis:
        'Under Section 53 BNS, where an act causes a different effect (death) from that intended (grievous hurt), the abettor is liable for the effect caused ONLY "provided he knew that the act abetted was likely to cause that effect." As held in landmark medical jurisprudence authorities, striking moderate lathi blows on a normal, healthy adult does not ordinarily cause death; death resulted solely from the extraordinary, hidden vulnerability of an enlarged spleen. F had zero knowledge of G\'s diseased spleen, and had no subjective knowledge that the beating was likely to cause death. Under Section 53 BNS, F\'s liability cannot be elevated to murder.',
      conclusion:
        'F cannot be convicted of abetment of murder under Section 103 read with Section 53 BNS. Under Section 53 BNS, F is liable strictly for the offence he intended — abetment of Grievous Hurt under Section 117 BNS.',
    },
  ],

  distinctions: [
    {
      id: 's-53-dist-1',
      title: 'Section 53 BNS (Different Effect) vs Section 51 BNS (Different Act)',
      left: 'Section 53 BNS (Different Effect)',
      right: 'Section 51 BNS (Different Act)',
      rows: [
        {
          point: 'Nature of Divergence',
          left: 'The physical ACT done is the exact act abetted, but the PHYSICAL EFFECT escalates (e.g. hurt -> death).',
          right: 'The physical ACT done is a completely DIFFERENT ACT (e.g. arson abetted, theft done).',
        },
        {
          point: 'Statutory Criterion',
          left: 'Knowledge of likelihood of that specific effect.',
          right: 'Doctrine of Probable Consequence of the venture.',
        },
      ],
    },
    {
      id: 's-53-dist-2',
      title: 'Section 53 BNS vs Section 50 BNS (Different Intention)',
      left: 'Section 53 BNS (Different Effect)',
      right: 'Section 50 BNS (Different Intention)',
      rows: [
        {
          point: 'Focus of Inquiry',
          left: 'Physical bodily consequence resulting from the trauma.',
          right: 'Subjective mental state harbored by the physical perpetrator.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-53-trap-1',
      trap: 'An abettor of hurt is automatically guilty of murder whenever the victim dies.',
      correction:
        'Section 53 expressly refutes this. The abettor is liable for the death ONLY if the prosecution proves that the abettor knew that the act abetted was *likely* to cause death. Otherwise, the abettor is liable strictly for hurt.',
    },
    {
      id: 's-53-trap-2',
      trap: 'The "eggshell skull" rule from tort law applies to make the abettor guilty of murder if the victim had a secret disease.',
      correction:
        'Untrue. Criminal liability under Section 53 requires subjective knowledge of likelihood. If death occurred due to an unknown diseased organ, the abettor cannot be convicted of murder.',
    },
  ],

  cases: [
    {
      name: 'Queen-Empress v. Mathura Das',
      citation: '(1884) ILR 6 All 491',
      court: 'High Court of Allahabad',
      holding:
        'Discussed the scope of Section 113 IPC (Section 53 BNS), establishing that knowledge of the probability of death is an essential prerequisite for elevating an abetment of hurt charge to murder.',
      ratioDecidendi:
        'An abettor cannot be subjected to capital punishment or life imprisonment for an unexpected fatal outcome unless subjective knowledge of likelihood is proved beyond doubt.',
    },
    {
      name: 'Empress v. Har Prasad',
      citation: '1885 AWN 34',
      court: 'High Court of Allahabad',
      holding:
        'Where an accused instigates a beating without weapons, and the victim dies of a ruptured diseased spleen, the abettor is not liable for culpable homicide under Section 113 IPC (Section 53 BNS).',
      ratioDecidendi:
        'In the absence of knowledge of the victim\'s diseased condition, the abettor did not know that the beating was likely to cause death.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-53-qa-1',
      draftingCategory: 'brief',
      question:
        'Prepare an IRAC Case Brief on Empress v. Har Prasad, (1885) AWN 34, analyzing the application of Section 53 BNS to hidden medical conditions.',
      answer: `IRAC CASE BRIEF: EMPRESS v. HAR PRASAD (1885 AWN 34)

1. FACTS:
The accused Har Prasad had a dispute with the deceased over an unpaid loan. Har Prasad sent his servant to administer "two kicks and blows" to the deceased to intimidate him. The servant struck the deceased two punches in the abdomen. The deceased collapsed and died shortly thereafter. The post-mortem examination revealed that the deceased suffered from an acutely enlarged malarial spleen that ruptured upon receiving a punch of ordinary force, causing internal exsanguination. The trial court convicted Har Prasad of abetment of culpable homicide under Section 304 read with Section 113 IPC (Section 105 read with Section 53 BNS).

2. ISSUE:
Is an abettor who instigates simple physical blows liable for culpable homicide under Section 113 IPC (now Section 53 BNS) when death results solely from an undisclosed, diseased spleen?

3. RULE:
Under Section 53 BNS (Section 113 IPC), when an act is abetted to cause a particular effect, and causes a different effect, the abettor is liable for the effect caused ONLY "provided he knew that the act abetted was likely to cause that effect."

4. APPLICATION:
The High Court set aside the homicide conviction, holding:
(a) The act abetted was simple physical punching, which in ordinary human experience is not likely to cause death to a healthy adult;
(b) Har Prasad had no knowledge that the deceased suffered from an enlarged or diseased spleen;
(c) The fatal effect (death) was an unexpected physical consequence that was not within the contemplation or knowledge of the abettor;
(d) Under the mandatory Proviso to Section 113 IPC (Section 53 BNS), the absence of knowledge of fatal likelihood shields the abettor from homicide liability.

5. CONCLUSION:
The conviction was altered to abetment of simple hurt. Section 53 BNS protects an abettor from homicide liability where death is caused by an unknown idiosyncratic physical frailty.`,
      explanation:
        'The foundational ruling establishing that hidden medical conditions do not create constructive homicide liability for an abettor under Section 53 BNS.',
    },
    {
      id: 's-53-qa-2',
      draftingCategory: 'submissions',
      question:
        'Draft a 6-part Written Submission for an accused charged with abetment of murder, invoking Section 53 BNS to reduce the charge to abetment of grievous hurt.',
      answer: `IN THE COURT OF THE LEARNED SESSIONS JUDGE AT KANPUR, U.P.
SESSIONS CASE NO. 410 OF 2025
IN THE MATTER OF:
STATE OF U.P. ... PROSECUTION
VERSUS
DINESH CHANDRA ... ACCUSED NO. 2

WRITTEN SUBMISSIONS ON BEHALF OF ACCUSED NO. 2 UNDER SECTION 53 BNS

MOST RESPECTFULLY SHOWETH:

I. SUBSTANTIVE SCOPE OF SECTION 53 BNS
Accused No. 2 stands charged under Section 103(1) read with Section 53 of the Bharatiya Nyaya Sanhita, 2023 for allegedly abetting the murder of one Sunil. It is submitted that the charge of murder is legally unsustainable against Accused No. 2 by virtue of the express statutory Proviso to Section 53 BNS.

II. THE ADMITTED INTENTION OF ACCUSED NO. 2
The prosecution\'s primary witness PW-1 admits that:
1. Accused No. 2 had a commercial dispute with Sunil regarding a shop tenancy;
2. Accused No. 2 hired Accused No. 1 to "break Sunil\'s leg so he stays away from the market" (grievous hurt under s. 114 BNS);
3. Accused No. 2 specifically instructed Accused No. 1: "Do not hit his head or chest, only break his leg below the knee."
Accused No. 2\'s intention was strictly to cause grievous hurt to a non-vital lower limb.

III. CAUSE OF DEATH AND THE AUTOPSY SURGEON\'S FINDINGS
PW-5 (Autopsy Surgeon) testified that:
(a) The physical trauma was a closed fracture of the tibia and fibula;
(b) There was zero head injury, chest injury, or internal organ rupture;
(c) The deceased died four days later of deep vein thrombosis (DVT) resulting in a massive pulmonary embolism, an uncommon secondary medical complication occurring in less than 2% of closed limb fractures.

IV. FAILURE OF THE MANDATORY STATUTORY PROVISO UNDER SECTION 53
Section 53 BNS explicitly conditions elevated liability on:
"...provided he knew that the act abetted was likely to cause that effect."
The prosecution has failed to lead a single shred of evidence showing that Accused No. 2, an ordinary shopkeeper, possessed medical knowledge that a closed leg fracture was likely to cause a fatal pulmonary embolism.

V. DIRECT APPLICATION OF STATUTORY PRECEDENT
As established in Empress v. Har Prasad, an idiosyncratic or secondary medical complication that was not foreseeably probable within the knowledge of the abettor cannot elevate accessorial liability to Murder.

VI. PRAYER
In the complete absence of proof of knowledge of fatal likelihood under Section 53 BNS, it is respectfully prayed that this Hon\'ble Court be pleased to:
(a) ALTER the charge against Accused No. 2 from Section 103/53 BNS to Section 117(2) read with Section 49 BNS; and
(b) ACQUIT Accused No. 2 of the charge of Murder.

DATED: 30.01.2026
PLACE: KANPUR
COUNSEL FOR ACCUSED NO. 2`,
      explanation:
        'A comprehensive courtroom submission applying Section 53 BNS to defeat murder charges where death ensued from secondary clinical complications.',
    },
  ],

  bareActPointers: [
    'BNS s. 53 — Liability of abettor for effect caused different from that intended',
    'BNS s. 53 Proviso — "provided he knew that the act abetted was likely to cause that effect"',
    'BNS s. 53 Statutory Illustration — Grievous hurt abetted, death results; liable for murder IF knew death was likely',
    'IPC s. 113 — Predecessor section',
    'BNS s. 50 — Contrast with different intention',
    'BNS s. 51 — Contrast with different act done',
  ],

  examTips: [
    'Section 53 deals with different EFFECT (consequence), not different act (s. 51) or different intent (s. 50).',
    'Memorize the statutory illustration: Grievous hurt leading to death — murder liability depends entirely on knowledge of likelihood of death.',
    'Cite Empress v. Har Prasad for the enlarged spleen doctrine in Section 53.',
  ],

  revisionPoints: [
    'Regulates divergence of physical effects produced by the abetted act.',
    'Abettor liable for the escalated effect ONLY if he knew the act was likely to cause it.',
    'Absence of knowledge limits liability to the originally intended effect.',
  ],

  relatedTopics: ['s-45', 's-46', 's-49', 's-50', 's-51', 's-52', 'general-explanations'],
}

export default content
