import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 24 of the Bharatiya Nyaya Sanhita, 2023 governs voluntary intoxication where an offence requires a particular intent or knowledge. The law imputes to the intoxicated actor the exact same knowledge as if he were sober, but specific intent is not automatically presumed and must be established as a matter of factual inference from the degree of drunkenness and surrounding circumstances.',

  study: `Topic at a glance
Section 24 of the Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) addresses the complex interface between voluntary intoxication and criminal mens rea. While Section 23 covers involuntary intoxication (treating it as temporary insanity), Section 24 deals with self-induced drunkenness. Society and criminal jurisprudence refuse to permit voluntary intoxication to serve as an easy escape from penal liability, establishing the statutory rule that knowledge will be imputed to the drunkard as if he were sober.

Statutory Text (Section 24 BNS)
"In cases where an act done is not an offence unless done with a particular knowledge or intent, a person who does the act in a state of intoxication shall be liable to be dealt with as if he had the same knowledge as he would have had if he had not been intoxicated, unless the thing which intoxicated him was administered to him without his knowledge or against his will."

The Pivotal Dichotomy: Knowledge vs Particular Intent
The statutory wording of Section 24 contains a deliberate and profound distinction between "knowledge" and "particular intent":
1. Knowledge is Statutorily Imputed: The Sanhita uses mandatory statutory language: the accused "shall be liable to be dealt with as if he had the same knowledge as he would have had if he had not been intoxicated". Thus, an accused who shoots a gun or strikes an axe in a state of voluntary drunkenness is conclusively deemed to possess the knowledge that his act is dangerous and likely to cause death.
2. Particular Intent is NOT Statutorily Imputed: The statute noticeably omits the word "intent" in the operative clause! It does NOT say "as if he had the same intent". Intention requires a deliberate purposive exercise of the will, which cannot be created by legal fiction. Whether the accused entertained the specific intention required for the crime (e.g. intention to cause death under Section 101/103 BNS, or dishonest intention under Section 303 BNS) remains a question of fact to be inferred by the court from all the surrounding circumstances.

The Locus Classicus: Basdev v. State of Pepsu (AIR 1956 SC 488)
In the landmark judgment of Basdev v. State of Pepsu, the Supreme Court of India synthesized the English common law rules from DPP v. Beard (1920) into three governing propositions for Indian criminal law:
• Sober Knowledge Imputed: The law attributes to the intoxicated offender the knowledge of a sober man.
• Proof of Specific Intent: Intention must be gathered from the totality of facts. Evidence of drunkenness which shows that the accused\'s mind was so obscured by drink that he was incapable of forming the specific intent must be weighed with other facts to determine whether he actually formed that intent.
• Degree of Drunkenness: Mere drunken excitement, loss of temper, or disinhibition is not enough. There must be such a degree of intoxication as to render him completely incapacitated from forming the specific intent.
• Resultant Culpability: Where specific intent is negatived by heavy drunkenness, but presumed knowledge remains intact, liability drops from Murder (Section 103 BNS) to Culpable Homicide Not Amounting to Murder (Section 105 Part II BNS).

The Rule of "Dutch Courage" (Gallagher Rule)
A person who deliberately drinks alcohol to "steel his nerves" or fortify his courage to commit a pre-planned crime (known in criminal jurisprudence as "Dutch courage") cannot plead subsequent intoxication under Section 24. As settled in Attorney General for Northern Ireland v. Gallagher (1963) AC 349, criminal intent formed prior to intoxication continues to operate through the drunken execution.`,

  sections: [
    {
      id: 's-24-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 24 BNS directly succeeds Section 86 of the Indian Penal Code, 1860 without substantive alteration.',
        'Jurisprudential foundation: The historic Latin maxim "Qui peccat ebrius, luat sobrius" (he who sins when drunk must be punished when sober) balanced against the fundamental requirement of mens rea for specific-intent crimes.',
        'Legislative objective: To prevent voluntary drunkenness from becoming a universal licence for lawlessness, by imputing sober cognitive knowledge to voluntary drinkers, while allowing courts to calibrate homicide offences between murder and culpable homicide based on true capacity to form intent.',
        'Distinction between basic and specific intent: For general offences requiring only knowledge (e.g. rash acts, dangerous weapons), voluntary intoxication provides zero defence; for specific intent offences (murder, theft, burglary), gross drunkenness may negative specific intent.',
      ],
    },
    {
      id: 's-24-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '"In cases where an act done is not an offence unless done with a particular knowledge or intent": Confines the application to specific-knowledge and specific-intent crimes under the Sanhita.',
        '"a person who does the act in a state of intoxication": Applies to self-induced, voluntary intoxication.',
        '"shall be liable to be dealt with as if he had the same knowledge": The operative statutory fiction. The law imputes the cognitive state of a sober, reasonable person.',
        'Omission of "Intent" in Operative Clause: The legislature deliberately refrained from imputing intent. Intention must be proved as a fact and cannot be substituted by the statutory fiction of knowledge.',
        '"unless the thing which intoxicated him was administered without knowledge or against will": Proviso preserves the boundary: if the intoxication was involuntary, the case exits Section 24 and enters the absolute immunity of Section 23 BNS.',
      ],
    },
    {
      id: 's-24-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. The accused committed an actus reus in a state of voluntary intoxication.',
        '2. The offence charged requires a particular knowledge or specific intent.',
        '3. By statutory mandate of Section 24, the court imputes to the accused the same knowledge as a sober person.',
        '4. The court examines whether the degree of drunkenness was so profound as to render the accused incapable of forming the specific intent.',
        '5. If specific intent is negatived by gross incapacity, the accused is convicted of the lesser offence grounded upon imputed knowledge (e.g. Section 105 Part II BNS).',
      ],
    },
    {
      id: 's-24-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 108)',
      order: 4,
      content: [
        'Prosecution Burden on Specific Intent: The prosecution retains the burden under Section 104 BSA of proving that the accused actually formed the specific intent required for the principal charge (e.g. intention to cause death under Section 101/103 BNS).',
        'Defence Evidentiary Burden: Under Section 108 BSA, the accused must adduce evidence to establish the degree of intoxication (breathalyzer reports, blood alcohol concentration / BAC, testimony of bartenders, slurred speech, unsteady gait, vomiting).',
        'Inference of Intent from Physical Acts: Where an intoxicated person uses a deadly weapon, aims at a vital organ, or delivers repeated blows, the court will infer that despite intoxication, he retained the capacity to formulate intent (Paul v. State of Kerala, (2020) 3 SCC 115).',
      ],
    },
    {
      id: 's-24-module-5',
      title: 'Procedural Roadmap, Competent Forum & Sentencing Alterations',
      order: 5,
      content: [
        'Trial Forum: Sessions Court for homicide trials under Chapter VI BNS.',
        'Plea in Defence: Typically argued at the final argument stage to seek reduction of charge from Section 103 (Murder) to Section 105 Part II BNS (Culpable homicide with knowledge but without intention).',
        'Medical Evidence on Record: The medico-legal certificate (MLC) prepared under Section 53 BNSS immediately after arrest detailing alcohol odor, pupil dilation, and neurological coordination is vital.',
        'Sentencing Impact: Voluntary intoxication is not a statutory mitigating factor for basic sentences, but operates structurally to alter the substantive classification of the conviction.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-24',
      section: 's. 24',
      title: 'Offence requiring a particular intent or knowledge committed by one who is intoxicated',
    },
  ],

  examples: [
    {
      id: 's-24-ill-1',
      title: 'Illustration 1 — Intoxicated Wedding Guest Shooting over a Seat (Knowledge Imputed; Basdev Rule)',
      illustrationType: 'statutory',
      description:
        'A, a retired military man, consumes a large quantity of whiskey at a wedding banquet. A asks a young boy B to vacate a chair for him; when B refuses, A draws his pistol, threatens to shoot, and fires directly into B\'s abdomen, causing death. A pleads that he was heavily intoxicated and had no intention to kill. Under Section 24 BNS, A is presumed to have the same knowledge as a sober man — namely, that firing a bullet into the abdomen of a human being at point-blank range is so imminently dangerous that it must in all probability cause death. Although drunk, A was capable of speaking, aiming, and pulling the trigger. A is convicted of murder under Section 103 BNS (the exact facts of Basdev v. State of Pepsu).',
    },
    {
      id: 's-24-ill-2',
      title: 'Illustration 2 — Paralytic Drunkenness Negativing Specific Intent (Murder Reduced to Culpable Homicide)',
      illustrationType: 'practical',
      description:
        'A drinks country liquor to the point of near stupor, staggering uncontrollably and babbling incoherently. During a sudden brawl outside the liquor shop, A blindly swings a heavy bamboo pole in all directions, which strikes bystander B on the temple, causing fatal head trauma. Under Section 24 BNS, knowledge is imputed to A that swinging a heavy lathi in a crowd is likely to cause death. However, A\'s extreme state of stupor negatived the specific intention to cause death or bodily injury sufficient in the ordinary course of nature to cause death. A is convicted under Section 105 Part II BNS (culpable homicide with knowledge) rather than Section 103 BNS (murder).',
    },
  ],

  hypotheticals: [
    {
      id: 's-24-hypo',
      title: 'Chamber Practice Problem: Bar Brawl Involving Stabbing with Broken Beer Bottle',
      facts:
        'During a late-night argument at an upscale pub, "R", who had consumed six tequila shots and three cocktails over three hours, became belligerent over a billiard game dispute. When victim "T" pushed R back, R smashed a glass beer bottle against the bar counter, shouted "I will finish you today!", lunged forward, and stabbed T in the neck, severing the jugular vein. T bled to death before reaching the hospital. The police charge-sheeted R for murder under Section 103(1) BNS. At trial, the defence produced bar billing receipts showing extensive alcohol consumption, an MLC recorded at 2:00 AM noting "strong smell of alcohol, slurred speech, blood alcohol level 180 mg/dL", and argued that under Section 24 BNS, R was incapable of forming specific intent, praying for reduction to Section 105 Part II BNS.',
      question:
        'Does R\'s level of voluntary intoxication entitle him to reduce the conviction from murder (Section 103 BNS) to culpable homicide not amounting to murder (Section 105 BNS)?',
      applicableLaw:
        'Section 24 BNS (Voluntary intoxication); Section 101/103 BNS (Murder); Section 105 Part II BNS (Culpable homicide); Section 108 BSA 2023 (Burden of proof); Basdev v. State of Pepsu (AIR 1956 SC 488); Paul v. State of Kerala ((2020) 3 SCC 115).',
      analysis:
        '1. Statutory Presumption of Knowledge: Under Section 24 BNS, R is presumed by law to possess the exact same knowledge as if he were sober — that stabbing a broken glass bottle into the neck of a human being is imminently dangerous and likely to cause death.\n2. Evaluation of Specific Intent: The court must examine whether R was so drunk that he was incapable of forming intent:\n  a. R had the physical coordination to deliberately smash the bottle to create a jagged weapon;\n  b. R uttered a purposeful antecedent threat: "I will finish you today!";\n  c. R selected a highly vulnerable vital organ (the neck) and delivered a direct, targeted blow.\n3. Application of Basdev and Paul Standards: As the Supreme Court held in Paul v. State of Kerala (2020), where an intoxicated person selects a weapon, aims at a vital organ, and delivers a lethal blow, the physical acts demonstrate that his cognitive faculties were not so impaired as to negative specific intention.',
      conclusion:
        'R is not entitled to reduction of charge. Despite voluntary intoxication, R possessed both the statutorily imputed knowledge under Section 24 BNS and the factual specific intention to cause bodily injury sufficient to cause death. R is guilty of murder under Section 103(1) BNS.',
    },
  ],

  distinctions: [
    {
      id: 's-24-dist-1',
      title: 'Imputed Knowledge vs Specific Intention under Section 24 BNS',
      left: 'Knowledge under Section 24 BNS',
      right: 'Specific Intention under Section 24 BNS',
      rows: [
        {
          point: 'Method of Attribution',
          left: 'Conclusively imputed by statute: actor dealt with "as if he had the same knowledge".',
          right: 'NOT imputed by statute; must be established by factual evidence and inference.',
        },
        {
          point: 'Effect of Drunkenness',
          left: 'Voluntary drunkenness cannot negative statutory knowledge.',
          right: 'Profound drunkenness can negative specific intent, reducing the offence grade.',
        },
        {
          point: 'Homicide Outcome',
          left: 'Supports conviction under Section 105 Part II BNS (Culpable homicide with knowledge).',
          right: 'Required to sustain conviction for Murder under Section 103(1) BNS.',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-24-trap-1',
      trap: 'Section 24 BNS presumes that an intoxicated person had both the same knowledge AND the same intent as a sober person.',
      correction:
        'Untrue. The statute mentions intent in the opening clause ("where an act done is not an offence unless done with a particular knowledge or intent"), but in the operative clause it imputes ONLY knowledge ("shall be liable to be dealt with as if he had the same knowledge"). Specific intention is never presumed by statute (Basdev v. State of Pepsu).',
    },
    {
      id: 's-24-trap-2',
      trap: 'An accused who drinks heavily before committing a murder can escape the death penalty or murder conviction by claiming temporary intoxication.',
      correction:
        'Untrue. Under the "Dutch courage" doctrine (AG for Northern Ireland v. Gallagher), if the intention was formed before drinking, voluntary intoxication cannot reduce murder to culpable homicide.',
    },
  ],

  cases: [
    {
      name: 'Basdev v. State of Pepsu',
      year: 1956,
      citation: 'AIR 1956 SC 488',
      court: 'Supreme Court of India',
      bench: 'N.H. Bhagwati & B.P. Sinha, JJ.',
      facts:
        'A retired military officer attended a marriage banquet, consumed substantial alcohol, and asked a boy to move from his seat. Upon refusal, the accused pulled out a pistol and shot the boy in the abdomen, killing him. At trial, he pleaded drunkenness under Section 86 IPC.',
      issue:
        'What are the legal rules governing voluntary intoxication and the attribution of intent and knowledge under Section 86 IPC (Section 24 BNS)?',
      ratioDecidendi:
        'Under Section 86 IPC, the law attributes to the intoxicated person the same knowledge as a sober man. However, intention must be gathered from all facts, and drunkenness falling short of total incapacity does not rebut the presumption that a man intends the natural consequences of his acts. When a man takes a pistol and fires at the abdomen, he has the intention to cause death or grievous hurt.',
      holding:
        'Conviction for murder under Section 302 IPC was affirmed.',
      relevance:
        'The primary landmark decision of the Supreme Court of India on voluntary intoxication under Section 24 BNS.',
    },
    {
      name: 'Paul v. State of Kerala',
      year: 2020,
      citation: '(2020) 3 SCC 115',
      court: 'Supreme Court of India',
      bench: 'R. Banumathi, A.S. Bopanna & Hrishikesh Roy, JJ.',
      facts:
        'The appellant, in an intoxicated state, had a verbal altercation with the deceased at an arrack shop, picked up a wooden rafter, and struck the deceased repeatedly on the head. He pleaded intoxication under Section 86 IPC.',
      issue:
        'Whether voluntary intoxication can reduce the offence of murder to culpable homicide when repeated blows are inflicted on a vital organ.',
      ratioDecidendi:
        'Section 86 IPC does not create an automatic reduction of murder to culpable homicide. Where an accused in a drunken state uses a heavy weapon and aims repeated blows at the head (a vital organ), his conduct establishes that he had not lost his faculties to such an extent as to be incapable of forming the intention to cause death.',
      holding:
        'Conviction under Section 302 IPC confirmed.',
      relevance:
        'Modern Supreme Court benchmark reiterating that repeated strikes on vital organs defeat the plea of lack of intent under Section 24 BNS.',
    },
    {
      name: 'Shankar Jaiswal v. State of West Bengal',
      year: 1974,
      citation: 'AIR 1974 SC 2362',
      court: 'Supreme Court of India',
      bench: 'H.R. Khanna & Y.V. Chandrachud, JJ.',
      facts:
        'During Holi celebrations, the accused, in a drunken state, engaged in a sudden scuffle and stabbed the victim with a knife.',
      issue:
        'Under what circumstances does voluntary intoxication reduce an offence from Section 302 to Section 304 Part II IPC?',
      ratioDecidendi:
        'Where there was sudden drunken quarrel without premeditation, and the evidence established heavy consumption of liquor that blurred the faculties of the accused, the court may hold that while the accused had the imputed knowledge under Section 86 IPC, he did not possess the premeditated intention to murder.',
      holding:
        'Conviction altered from murder to culpable homicide not amounting to murder under Section 304 Part II IPC.',
      relevance:
        'Classic authority for altering conviction from Section 103 to Section 105 Part II BNS in drunken street altercations.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-24-brief',
      draftingCategory: 'brief',
      question:
        'Provide a Case Brief and Legal Assessment on how Section 24 BNS applies to a drunk driver who hits a pedestrian on a sidewalk.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether a motorist with a blood alcohol concentration (BAC) of 220 mg/dL who drives onto a pedestrian sidewalk and causes a fatality is liable for murder under Section 103 BNS, culpable homicide under Section 105 BNS, or causing death by rash act under Section 106(1) BNS.

II. GOVERNING STATUTORY PROVISION
Section 24 BNS provides that a person who does an act in a state of intoxication shall be dealt with as if he had the same knowledge as he would have had if he had not been intoxicated.

III. LEGAL ASSESSMENT & APPLICATION
1. Imputation of Sober Knowledge: Under Section 24 BNS, the driver cannot plead that alcohol dulled his understanding of the danger. The law conclusively imputes to him the knowledge of a sober person: that driving a high-speed motor vehicle onto a pedestrian sidewalk is so imminently dangerous that it is likely to cause death.
2. Evaluating Specific Intention: The driver did not know the pedestrian, had no prior grudge, and was not targeting a specific victim. Specific intent to kill is absent.
3. Substantive Charge Determination:
   • Where gross intoxication combined with extreme speed demonstrates knowledge that the act is likely to cause death, Section 105 Part II BNS (Culpable homicide not amounting to murder) applies (State of Maharashtra v. Sanjeev Nanda).
   • If mere rashness is established, Section 106(1) BNS applies.
4. Statutory Fiction: Voluntary drunkenness cannot be pleaded to convert a conscious risk into an "accident" under Section 18 BNS.

IV. OPERATIVE CONCLUSION
The driver is liable under Section 105 Part II BNS (imprisonment up to 10 years) by virtue of imputed knowledge under Section 24 BNS, read with Section 185 of the Motor Vehicles Act, 1988.`,
      explanation: 'IRAC assessment for drunken driving fatalities under Section 24 BNS.',
    },
    {
      id: 's-24-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions before the High Court in a criminal appeal seeking alteration of conviction from Section 103 BNS (Murder) to Section 105 Part II BNS under Section 24 BNS.',
      answer: `IN THE HIGH COURT OF JUDICATURE AT ALLAHABAD
CRIMINAL APPEAL NO. _____ OF 2024

IN THE MATTER OF:
VIKRAMADITYA SINGH                    ...APPELLANT
VERSUS
STATE OF U.P.                        ...RESPONDENT

MEMORANDUM OF WRITTEN SUBMISSIONS ON BEHALF OF THE APPELLANT PRAYING FOR ALTERATION OF CONVICTION FROM SECTION 103(1) BNS TO SECTION 105 PART II BNS PURSUANT TO SECTION 24 BNS

MOST RESPECTFULLY SHOWETH:

I. STATEMENT OF FACTS & PROCEDURAL PROVENANCE
1. The Appellant was convicted by the learned Sessions Judge, Varanasi under Section 103(1) BNS and sentenced to imprisonment for life for causing the death of one Ramesh during a Holi festival celebration.
2. The uncontroverted evidence of PW-1, PW-2, and PW-3 (eye-witnesses) confirms that all participants, including the Appellant, had been consuming concentrated country liquor continuously for five hours prior to the altercation.
3. During a sudden, unplanned dispute over music, the Appellant picked up a nearby wooden pestle and delivered a single blow to the deceased\'s head before collapsing unconscious onto the ground.

II. STATUTORY SCHEME OF SECTION 24 BNS
4. That Section 24 of the Bharatiya Nyaya Sanhita, 2023 deliberately distinguishes between "knowledge" and "intent".
5. While knowledge is statutorily imputed to the Appellant as if he were sober, specific intention cannot be presumed by law and must be proven as an independent fact.

III. PRECEDENTS OF THE HON'BLE SUPREME COURT
6. In Basdev v. State of Pepsu (AIR 1956 SC 488), the Hon\'ble Supreme Court held that where the faculties of an accused are so clouded by drunkenness that he was incapable of forming a specific intent, murder is excluded.
7. In Shankar Jaiswal v. State of West Bengal (AIR 1974 SC 2362), the Apex Court ruled that a single blow delivered during a sudden drunken scuffle negatives premeditated intention, attracting Section 304 Part II IPC (now Section 105 Part II BNS).
8. The single blow, the lack of pre-existing enmity, and the Appellant\'s contemporaneous collapse in a drunken stupor prove that the Appellant was incapable of forming the specific intent to kill.

IV. PRAYER
Wherefore, it is respectfully prayed that this Hon\'ble Court may be pleased to:
a. Allow the Appeal in part;
b. Alter the conviction of the Appellant from Section 103(1) BNS to Section 105 Part II BNS;
c. Reduce the sentence to the period already undergone (5 years).`,
      explanation: 'Appellate submissions for reduction of conviction under Section 24 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 24: Offence requiring a particular intent or knowledge committed by one who is intoxicated',
    'BNS s. 23: Involuntary intoxication (distinguished)',
    'BNS s. 101/103: Murder (distinguished by specific intention)',
    'BNS s. 105 Part II: Culpable homicide based on imputed knowledge',
    'BSA 2023 s. 108: Burden of proving intoxication on accused',
    'IPC s. 86: Historical predecessor provision',
  ],

  examTips: [
    'Crucial statutory distinction: Section 24 imputes KNOWLEDGE, but does NOT impute INTENT (Basdev v. State of Pepsu).',
    'Remember the practical courtroom result: profound drunkenness often reduces Murder (s. 103) to Culpable Homicide Not Amounting to Murder (s. 105 Part II BNS).',
    'Be ready to explain the "Dutch courage" exception (AG for Northern Ireland v. Gallagher): pre-formed intent cannot be erased by subsequent drinking.',
  ],

  revisionPoints: [
    'Section 24 BNS covers voluntary intoxication.',
    'Knowledge is statutorily presumed as if sober.',
    'Specific intention must be proven as a fact; can be negatived by gross drunkenness.',
    'Locus classicus: Basdev v. State of Pepsu (AIR 1956 SC 488) and Paul v. State of Kerala (2020).',
  ],

  relatedTopics: ['s-14', 's-22', 's-23', 'general-exceptions'],
} satisfies TopicContent

export default content
