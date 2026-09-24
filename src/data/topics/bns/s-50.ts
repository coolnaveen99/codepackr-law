import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 50 of the Bharatiya Nyaya Sanhita, 2023 regulates the divergence of mental states between the abettor and the perpetrator: the abettor is punished strictly according to his own intention or knowledge, and with no other, decoupling accessorial culpability from the perpetrator’s differing mens rea.',

  study: `Topic at a glance
Section 50 of the Bharatiya Nyaya Sanhita, 2023 (succeeding Section 110 of the Indian Penal Code, 1860) addresses one of the most sophisticated problems in criminal jurisprudence: what is the legal liability of an abettor when the physical perpetrator executes the actus reus with a different intention, motive, or knowledge from that harbored by the abettor? Section 50 enacts the principle of subjective accessorial culpability: the abettor is measured and punished strictly by the yardstick of his own mental state ("with the intention or knowledge of the abettor and with no other").

Statutory Text (Section 50 BNS)
"Whoever abets the commission of an offence shall, if the person abetted does the act with a different intention or knowledge from that of the abettor, be punished with the punishment provided for the offence which would have been committed if the act had been done with the intention or knowledge of the abettor and with no other."

The Principle of Subjective Accessorial Culpability
In criminal law, liability is the product of Actus Reus and Mens Rea. When two human actors interact in an accessorial relationship, their mental states may radically diverge:
1. Scenario A (Abettor possesses Higher Culpability): A instigates B to murder Z by poisoning. B administers the poison, but does so under grave and sudden provocation or with a lesser intent, reducing B\'s crime to Culpable Homicide Not Amounting to Murder (Section 105 BNS). Under Section 50, A is punished for Abetment of Murder (Section 103 read with Section 50 BNS), because had the act been done with A\'s intention, it would have been murder;
2. Scenario B (Perpetrator possesses Higher Culpability): A instigates B to deliver a slap and cause simple hurt (Section 115 BNS) to Z. B, having an undisclosed private grudge against Z, pulls out a concealed dagger and kills Z. Under Section 50, A is liable ONLY for abetting simple hurt, because A never possessed the intention or knowledge of homicide (subject to the doctrine of probable consequence under Section 51 BNS).

Doctrinal Significance
Section 50 prevents two distinct injustices:
- It prevents a dangerous mastermind who intended murder from benefiting from the personal mitigating defenses or lesser intent of their hired agent; and
- It protects a minor instigator who intended a petty infraction from being unfairly saddled with capital punishment or life imprisonment simply because the physical actor unexpectedly harbored a murderous design.`,

  sections: [
    {
      id: 's-50-module-1',
      title: 'Provenance, Jurisprudential Philosophy & Mens Rea Isolation',
      order: 1,
      content: [
        'Directly succeeds Section 110 of the Indian Penal Code, 1860 without substantive alteration.',
        'Jurisprudential Philosophy: Individualization of penal guilt. Culpability cannot be transferred mechanically between conspirators; each actor is judged by the contents of their own mind.',
        'Mens Rea Isolation: Isolates the abettor\'s intention from the independent, rogue, or mitigated mental state of the physical perpetrator.',
        'Interplay with Section 46 Explanation 3: Complements the rule that the person abetted need not have the same guilty intention or knowledge as the abettor.',
      ],
    },
    {
      id: 's-50-module-2',
      title: 'Textual Anatomy & The Hypothetical Intent Benchmark',
      order: 2,
      content: [
        '"if the person abetted does the act with a different intention or knowledge": Explicit statutory trigger where the physical act matches the request, but the underlying mental state diverges.',
        '"be punished with the punishment provided for the offence which would have been committed...": The statutory benchmark is hypothetical — the court constructs what offence would have materialized if the physical actor had possessed the abettor\'s exact mens rea.',
        '"and with no other": Absolute exclusionary statutory phrase. The court is strictly barred from imputing the perpetrator\'s higher or lower intent to the abettor.',
      ],
    },
    {
      id: 's-50-module-3',
      title: 'Mandatory Proving Ingredients & Doctrinal Boundaries',
      order: 3,
      content: [
        '1. The accused abetted the commission of an act under Section 45 BNS.',
        '2. The physical perpetrator executed that act.',
        '3. The physical perpetrator acted with an intention or knowledge different from that of the accused.',
        '4. Ascertaining the specific intention or knowledge of the accused at the time of abetment.',
        '5. Measuring the punishment based exclusively on the hypothetical offence matching the accused\'s intention.',
      ],
    },
    {
      id: 's-50-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 6)',
      order: 4,
      content: [
        'Proof of Abettor\'s Specific Intent: The prosecution must prove the precise scope of the abettor\'s mens rea through contemporaneous communications (messages, letters, recorded conversations under Section 63 BSA).',
        'Distinguishing Abettor\'s Instructions from Perpetrator\'s Excess: Eliciting witness testimony showing that the abettor strictly instructed non-lethal intimidation rather than homicide.',
        'Reconstructing the Mental State under Section 6 BSA (Res Gestae): Evaluating words uttered at the moment of instigation to determine the exact boundary of the abettor\'s contemplation.',
        'Medico-Legal Evidence on Weapon Selection: Establishing that the abettor provided a wooden stick, proving intent for hurt rather than murder.',
      ],
    },
    {
      id: 's-50-module-5',
      title: 'Procedural Roadmap, Sentencing Advocacy & Chamber Strategy',
      order: 5,
      content: [
        'Sessions Trial Advocacy: In cases where the principal is convicted of Murder under Section 103 BNS, counsel for the abettor must invoke Section 50 to isolate the abettor\'s intent, arguing that the abettor intended only grievous hurt (Section 117 BNS) or simple hurt (Section 115 BNS).',
        'Drafting Arguments on Mitigation: Demonstrating that the lethal escalation was the unilateral frolic of the principal, saving the abettor from life imprisonment or the death penalty.',
        'Framing of Charge under Section 234 BNSS: The charge must reflect the specific intention imputed to the abettor rather than mechanically copying the principal\'s charge.',
        'Bail Strategy: Securing regular bail under Section 480 BNSS by highlighting the lesser statutory ceiling applicable to the abettor under Section 50.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-50',
      section: 's. 50',
      title:
        'Punishment of abetment if person abetted does act with different intention from that of the abettor',
    },
  ],

  examples: [
    {
      id: 's-50-ill-1',
      title: 'Illustration 1 — Abettor Intending Murder Where Principal Acts under Provocation (Higher Culpability Preserved)',
      illustrationType: 'statutory',
      description:
        'A, bearing long-standing premeditated malice against Z, instigates B to assault and kill Z. When B confronts Z, Z delivers an unprovoked grave insult and slaps B\'s sister, causing B to lose self-control under grave and sudden provocation. B kills Z. B is convicted of Culpable Homicide Not Amounting to Murder under Section 105 Part I BNS pursuant to Exception 1 to Section 101 BNS. A, however, had cold-blooded premeditated murder in mind. Under Section 50 BNS, A is punished for Abetment of Murder under Section 103 read with Section 50 BNS, receiving life imprisonment: A is judged by A\'s own murderous intent and not by B\'s mitigated provocation.',
    },
    {
      id: 's-50-ill-2',
      title: 'Illustration 2 — Abettor Intending Simple Hurt Where Principal Unilaterally Commits Murder (Shielding the Abettor)',
      illustrationType: 'fail-scenario',
      description:
        'P instigates Q to punch and give two black eyes to R (simple hurt under s. 115 BNS) to teach R a lesson. Q, having a secret adulterous affair with R\'s wife, secretly brings a loaded pistol, shoots R through the heart, and murders him. Q is convicted of Murder under Section 103 BNS. The prosecution seeks to convict P for abetment of murder. Under Section 50 BNS, P is protected: P is punished strictly with the penalty for the offence that would have been committed if done with P\'s intention (simple hurt under s. 115 BNS, max 1 year imprisonment). P cannot be punished for murder.',
    },
  ],

  hypotheticals: [
    {
      id: 's-50-hypo-1',
      title: 'Chamber Practical Problem — Landlord\'s Eviction Thugs and the Unintended Arson',
      facts:
        'Landlord L hires two local enforcers, M and N, to break into tenant T\'s commercial godown at night and throw T\'s furniture onto the street to effect an illegal eviction (criminal trespass and simple mischief). L specifically instructs M and N: "Throw the goods out, do not burn anything and do not hurt anyone." M and N break in; while inside, M decides on his own whim to burn the godown down to hide their fingerprints, sets fire to the premises, destroying Rs. 50,00,000 worth of goods. M and N are convicted of Arson of Property under Section 326 BNS (imprisonment for life). The prosecution charges Landlord L under Section 326 read with Section 49 BNS.',
      question:
        'Can Landlord L be convicted of abetting arson under Section 50 of the Bharatiya Nyaya Sanhita, 2023?',
      applicableLaw:
        'Section 50 and Section 51 of the Bharatiya Nyaya Sanhita, 2023.',
      analysis:
        'Under Section 50 BNS, an abettor is punished according to his own intention or knowledge, and with no other. Landlord L\'s intention was strictly confined to criminal trespass and simple mischief by throwing goods out. L never intended or had knowledge of arson; in fact, L gave express contrary instructions. Furthermore, under Section 51 BNS (different act done), an abettor is liable for a different act ONLY if that act was a "probable consequence" of the abetment. Arson is not the natural or probable consequence of an instruction to throw furniture onto the pavement. The unilateral act of arson by M was an independent frolic.',
      conclusion:
        'Landlord L cannot be convicted of abetment of arson under Section 326 BNS. Under Section 50 BNS, L is liable only for the offences he intended — criminal trespass and simple mischief.',
    },
  ],

  distinctions: [
    {
      id: 's-50-dist-1',
      title: 'Section 50 BNS (Different Intention) vs Section 51 BNS (Different Act Done)',
      left: 'Section 50 BNS',
      right: 'Section 51 BNS',
      rows: [
        {
          point: 'Nature of Divergence',
          left: 'The physical act done is the SAME act abetted, but the MENS REA differs.',
          right: 'The physical act done is a COMPLETELY DIFFERENT ACT from what was abetted.',
        },
        {
          point: 'Governing Principle',
          left: 'Judged strictly by abettor\'s own intent ("with no other").',
          right: 'Doctrine of Probable Consequence (objective foreseeability).',
        },
      ],
    },
    {
      id: 's-50-dist-2',
      title: 'Section 50 vs Section 3(5) (Common Intention)',
      left: 'Section 50 (Divergent Intention)',
      right: 'Section 3(5) (Shared Intention)',
      rows: [
        {
          point: 'Mental Alignment',
          left: 'Parties harbor different intentions; abettor\'s liability is segregated.',
          right: 'Requires a pre-arranged plan and shared common intention; all are liable equally.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-50-trap-1',
      trap: 'An abettor is always punished with whatever sentence the principal offender receives.',
      correction:
        'Section 50 proves this assumption false. If the principal acted with a different intention, the abettor is punished solely according to the abettor\'s own intention, which may result in a much higher or much lower sentence than the principal.',
    },
    {
      id: 's-50-trap-2',
      trap: 'If the physical perpetrator escapes murder under Exception 1 (provocation), the instigator also automatically gets the benefit of Exception 1.',
      correction:
        'Untrue. Provocation is personal to the person provoked. An instigator who premeditated murder cannot claim the perpetrator\'s provocation, and is convicted of abetment of murder under Section 50 BNS.',
    },
  ],

  cases: [
    {
      name: 'R. v. Saunders & Archer',
      citation: '(1573) 2 Plowd 473',
      court: 'Court of King\'s Bench',
      holding:
        'Classic foundational common law precedent establishing that an accessory is not liable if the principal acts with a completely different intent outside the scope of the counsel.',
      ratioDecidendi:
        'An instigator cannot be held liable for an independent, distinct crime executed with an unshared, foreign mens rea.',
    },
    {
      name: 'Jaswant Singh v. State of Punjab',
      citation: '1979 Cri LJ 1238 (P&H HC)',
      court: 'High Court of Punjab and Haryana',
      holding:
        'Where the abettor intended simple hurt but the principal unexpectedly inflicted fatal injuries with a concealed knife, Section 110 IPC (Section 50 BNS) restricted the abettor\'s liability to simple hurt.',
      ratioDecidendi:
        'The abettor\'s culpability must be measured strictly by his own intention and knowledge under Section 110 IPC.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-50-qa-1',
      draftingCategory: 'brief',
      question:
        'Explain the doctrinal operation of Section 50 BNS when an abettor instigates murder but the principal commits culpable homicide under provocation.',
      answer: `DOCTRINAL ANALYSIS: OPERATION OF SECTION 50 BNS IN PROVOCATION CASES

1. THE STATUTORY MECHANISM:
Section 50 BNS (Section 110 IPC) provides:
"Whoever abets the commission of an offence shall, if the person abetted does the act with a different intention or knowledge from that of the abettor, be punished with the punishment provided for the offence which would have been committed if the act had been done with the intention or knowledge of the abettor and with no other."

2. APPLICATION TO PERSONAL MITIGATING DEFENCES:
- Assume A harbors premeditated malice against Z. A hires B to kill Z.
- When B encounters Z, Z gives B sudden and grave provocation. B, in the heat of passion without premeditation, kills Z.
- B is entitled to the benefit of Exception 1 to Section 101 BNS (Exception 1 to s. 300 IPC), which mitigates Murder to Culpable Homicide Not Amounting to Murder, punishable under Section 105 BNS.
- Can A claim the benefit of B\'s provocation?
The answer under Section 50 BNS is an emphatic NO.

3. THE HYPOTHETICAL INQUIRY:
Section 50 commands the court to ask: "What offence would have been committed if the act had been done with the intention or knowledge of A?"
Had the act been done with A\'s intention, it would have been cold-blooded, premeditated murder under Section 103 BNS. A was not provoked; A had no loss of self-control.
Therefore, A is punished for Abetment of Murder under Section 103 read with Section 50 BNS, carrying Death or Life Imprisonment, even though the actual killer B receives only a term of imprisonment under Section 105 BNS.

4. CONCLUSION:
Section 50 ensures that personal excuses and mitigating circumstances are not parasitically exploited by scheming masterminds.`,
      explanation:
        'In-depth academic brief on how Section 50 isolates personal mitigating defenses between abettor and principal.',
    },
    {
      id: 's-50-qa-2',
      draftingCategory: 'submissions',
      question:
        'Draft a 6-part Written Submission for an accused charged with abetment of murder, invoking Section 50 BNS to limit liability to abetment of simple hurt.',
      answer: `IN THE COURT OF THE LEARNED SESSIONS JUDGE AT LUCKNOW, U.P.
SESSIONS CASE NO. 370 OF 2025
IN THE MATTER OF:
STATE OF U.P. ... PROSECUTION
VERSUS
SURAJ BHAN ... ACCUSED NO. 2

WRITTEN SUBMISSIONS ON BEHALF OF ACCUSED NO. 2 UNDER SECTION 50 BNS

MOST RESPECTFULLY SHOWETH:

I. SUBSTANTIVE INVOCATION OF SECTION 50 BNS
Accused No. 2 stands charged under Section 103(1) read with Section 49 BNS for allegedly abetting the murder of one Rajesh committed by Accused No. 1. It is submitted that under the express statutory mandate of Section 50 of the Bharatiya Nyaya Sanhita, 2023, Accused No. 2 cannot be punished for murder, but strictly for abetment of simple hurt under Section 115(2) BNS.

II. THE ADMITTED SCOPE OF ACCUSED NO. 2\'S INTENTION
The prosecution\'s primary witness PW-2 (an independent neighbor) testified that:
1. Accused No. 2 had a verbal dispute with Rajesh regarding parking;
2. Accused No. 2 gave a wooden cane to Accused No. 1 and said: "Give him two blows on the legs so he stops parking here";
3. Accused No. 2 immediately walked inside his residence and was not present during the occurrence.
Accused No. 2\'s intention was strictly and exclusively to cause simple hurt to the legs.

III. UNILATERAL ESCALATION BY ACCUSED NO. 1
Accused No. 1, without the knowledge of Accused No. 2, carried a concealed switchblade knife in his jacket pocket. Instead of using the wooden cane, Accused No. 1 drew the knife and stabbed Rajesh in the jugular vein, killing him.

IV. DIRECT APPLICATION OF SECTION 50 ("AND WITH NO OTHER")
Section 50 BNS explicitly mandates that where the person abetted acts with a different intention:
"...he shall be punished with the punishment provided for the offence which would have been committed if the act had been done with the intention or knowledge of the abettor and with no other."
Had the act been done with the intention of Accused No. 2 (using a wooden cane to strike legs), the offence would have been Simple Hurt under Section 115(2) BNS. The law strictly prohibits punishing Accused No. 2 for Accused No. 1\'s homicidal intention.

V. SECTION 51 BNS (PROBABLE CONSEQUENCE) INAPPLICABLE
Stabbing someone in the throat with a concealed knife is NOT the natural or probable consequence of an instruction to strike someone\'s legs with a wooden stick. It was an independent, radical departure.

VI. PRAYER
In light of the statutory command of Section 50 BNS, it is respectfully prayed that this Hon\'ble Court be pleased to:
(a) ALTER the charge against Accused No. 2 from Section 103/49 BNS to Section 115(2) read with Section 50 BNS; and
(b) ACQUIT Accused No. 2 of the charge of murder.

DATED: 20.01.2026
PLACE: LUCKNOW
COUNSEL FOR ACCUSED NO. 2`,
      explanation:
        'A powerful courtroom submission applying Section 50 BNS to prevent a minor instigator from being convicted of murder when the physical actor uses a concealed weapon.',
    },
  ],

  bareActPointers: [
    'BNS s. 50 — Abetment where person abetted does act with different intention',
    'BNS s. 50 Key Phrase — "with the intention or knowledge of the abettor and with no other"',
    'IPC s. 110 — Predecessor section',
    'BNS s. 51 — Contrast with different act done (doctrine of probable consequence)',
    'BNS s. 101 Exception 1 — Personal provocation does not shield the abettor under s. 50',
  ],

  examTips: [
    'Memorize the phrase "with the intention or knowledge of the abettor and with no other" — it is the golden rule of Section 50.',
    'Always explain both scenarios: (1) abettor intends murder but principal acts under provocation; (2) abettor intends hurt but principal acts with murder intent.',
    'Distinguish Section 50 (different intent for same act) from Section 51 (different act done).',
  ],

  revisionPoints: [
    'Governs divergence of mens rea between abettor and perpetrator.',
    'Abettor is punished strictly according to his own intention or knowledge.',
    'Prevents imputed higher culpability and prevents parasitic reliance on personal defenses.',
  ],

  relatedTopics: ['s-45', 's-46', 's-49', 's-51', 's-52', 's-53', 'general-explanations'],
}

export default content
