import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 19 of the Bharatiya Nyaya Sanhita, 2023 codifies the doctrine of Necessity (jus necessitatis). It provides an absolute general exception for acts done with the knowledge that harm is likely, provided they are done without criminal intention, in good faith, and for the purpose of preventing or avoiding a greater and imminent harm to person or property.',

  study: `Topic at a glance
Section 19 of the Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) enshrines the common law principle of Necessity — encapsulated in the Latin maxims "Quod est necessarium est licitum" (that which is necessary is lawful) and "Necessitas vincit legem" (necessity knows no law). It provides a complete defence where an actor, faced with an acute emergency and a choice of evils, deliberately causes a lesser harm in order to avert a greater, imminent catastrophe.

Statutory Text (Section 19 BNS)
"Nothing is an offence merely by reason of its being done with the knowledge that it is likely to cause harm, if it be done without any criminal intention to cause harm, and in good faith for the purpose of preventing or avoiding other harm to person or property.
Explanation.—It is a question of fact in such a case whether the harm to be prevented or avoided was of such a nature and so imminent as to justify or excuse the risk of doing the act with the knowledge that it was likely to cause harm."

Statutory Illustrations
(a) The Steam Vessel Collision: A, the captain of a steam vessel, suddenly and without any fault or negligence on his part, finds himself in such a position that, before he can stop his vessel, he must inevitably run down a boat B, with twenty or thirty passengers on board, unless he changes the course of his vessel, and that, by changing his course, he must incur risk of running down a boat C with only two passengers on board, which he may possibly clear. Here if A alters his course without any intention to run down the boat C and in good faith for the purpose of avoiding the danger to the passengers in the boat B, he is not guilty of an offence...
(b) The Conflagration / Great Fire: A, in a great fire, pulls down houses in order to prevent the conflagration from spreading. He does this with the intention in good faith of saving human life or property. Here, if the harm was imminent, A is not guilty of an offence.

The Crucial Distinction: Knowledge vs Criminal Intention
Section 19 explicitly acknowledges that the actor possesses "knowledge that it is likely to cause harm". The law recognizes that in emergencies, harm may be foreseen as an inevitable or probable consequence. What the law forgives is the causing of foreseen harm, provided there is zero "criminal intention" to cause that harm, and the overriding purpose is the bona fide prevention of other greater harm.

Limits of the Doctrine: R v. Dudley and Stephens
The doctrine of necessity has one absolute, unyielding frontier: necessity can NEVER justify the deliberate sacrifice of an innocent human life to preserve one's own life. In the landmark authority of R v. Dudley and Stephens (1884), shipwrecked seamen who killed and consumed an ailing cabin boy to avoid starvation were convicted of murder. Lord Coleridge, C.J. held that self-preservation is not an absolute necessity, and no person can constitute himself the arbiter of whose life is more valuable.`,

  sections: [
    {
      id: 's-19-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 19 BNS directly succeeds Section 81 of the Indian Penal Code, 1860 without substantive alteration.',
        'Jurisprudential foundation: The "choice of evils" doctrine (lesser evil principle). Society recognizes that when confronted with an unavoidable conflict of harms, choosing the lesser harm to avert a catastrophic greater harm is socially beneficial and devoid of penal blameworthiness.',
        'Legislative objective: To provide legal protection to public authorities, emergency responders, captains, drivers, and citizens who make split-second decisions during natural disasters, fires, floods, or mechanical emergencies.',
        'Separation from Private Defence: Private defence (ss. 34–44 BNS) is a right exercised against an unlawful aggressor or wrongdoer. Necessity (s. 19 BNS) operates against an imminent peril or emergency, often impacting innocent third parties or their property.',
      ],
    },
    {
      id: 's-19-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '"Nothing is an offence merely by reason of its being done with the knowledge that it is likely to cause harm": The section carves out an exception where cognitive knowledge of harm is present, but moral culpability is absent.',
        '"without any criminal intention to cause harm": The harm caused must be an incidental, unavoidable byproduct of the defensive measure, never the direct end or malicious objective of the actor.',
        '"in good faith": Governed by Section 2(11) BNS (due care and attention). The emergency must be real, not imaginary, and the actor must act with genuine public or protective intent.',
        '"for the purpose of preventing or avoiding other harm to person or property": The harm averted may be to the actor\'s person/property, or to third parties, or to the public at large.',
        '"Explanation — question of fact": The proportionality and imminence of the danger are objective questions of fact to be determined by the court upon the evidence.',
      ],
    },
    {
      id: 's-19-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. The act was performed under the pressure of an imminent, grave peril.',
        '2. The actor acted without any criminal intention to cause the resultant harm.',
        '3. The actor acted in good faith with due care and attention under Section 2(11) BNS.',
        '4. The act was done for the genuine purpose of preventing or avoiding other harm to person or property.',
        '5. The harm caused was substantially lesser than, or proportionate to, the greater harm sought to be averted.',
      ],
    },
    {
      id: 's-19-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 108)',
      order: 4,
      content: [
        'Burden of Proof under Section 108 BSA: The accused must establish the defence of necessity on a preponderance of probabilities.',
        'Proving Imminence: The defence must produce contemporaneous evidence (meteorological alerts, fire brigade logs, emergency distress calls) to demonstrate that the threat was immediate and real.',
        'Demonstrating Proportionality: The court will assess whether a reasonable person in the agony of the moment would have considered the chosen course necessary to avoid the greater calamity.',
      ],
    },
    {
      id: 's-19-module-5',
      title: 'Procedural Roadmap, Competent Forum & Sanction Checkpoints',
      order: 5,
      content: [
        'Trial Forum: Follows the forum of the substantive offence (e.g. Sessions Court for culpable homicide, Magistrate for mischief or property damage).',
        'Preliminary Hearing: Pled during hearing on charge under Section 251/262 BNSS. Where official emergency records demonstrate classic necessity, discharge can be granted.',
        'Public Officials & Sanction: Emergency responders, municipal engineers, and fire services are protected by Section 218 BNSS (mandatory government sanction).',
        'Appellate Scrutiny: Appellate courts review whether the trial judge correctly evaluated the balance of evils under the Explanation to Section 19.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-19',
      section: 's. 19',
      title: 'Act likely to cause harm, but done without criminal intent, and to prevent other harm',
    },
  ],

  examples: [
    {
      id: 's-19-ill-1',
      title: 'Illustration 1 — Dam Gates Opened to Prevent Catastrophic Wall Collapse (Immunity Applies)',
      illustrationType: 'statutory',
      description:
        'A flash flood threatens to overtop an earthen reservoir dam holding 100 million cubic meters of water. Chief Engineer D knows that if the main dam breaches, an entire downstream city of 80,000 residents will be submerged with massive loss of life. D orders the emergency auxiliary flood spillway opened, knowing with mathematical certainty that opening the spillway will flood 15 agricultural fields and destroy two storage sheds belonging to farmer F. F files a complaint against D for mischief under Section 324(4) BNS. D is completely protected under Section 19 BNS: the act was done without criminal intention, in good faith, to avert a catastrophic loss of human life.',
    },
    {
      id: 's-19-ill-2',
      title: 'Illustration 2 — Killing an Innocent to Save One\'s Own Life (Immunity Fails)',
      illustrationType: 'fail-scenario',
      description:
        'A and B are adrift in a small lifeboat with no food or water for 20 days. Facing imminent starvation, A overpowers and cuts the throat of B, an unconscious companion, to consume B\'s flesh and survive until rescue. A is charged with murder under Section 103(1) BNS. A pleads the defence of necessity under Section 19 BNS. The defence fails completely: under the settled rule of R v. Dudley and Stephens, necessity can never excuse the deliberate killing of an innocent person to save one\'s own life.',
    },
  ],

  hypotheticals: [
    {
      id: 's-19-hypo',
      title: 'Chamber Practice Problem: Bus Driver Swerving to Avoid Crashing into School Bus',
      facts:
        'Bus driver "D", operating a municipal transit bus carrying 40 passengers at 45 km/h, experienced sudden brake fade descending a bridge. Directly ahead at an intersection, a school bus carrying 35 kindergarten children had stalled across the roadway. D realized that if he continued straight, a catastrophic high-speed collision with the school bus was inevitable. D observed an empty parked car and a roadside fruit vendor\'s wooden kiosk on the left pavement. Having no other escape avenue, D swerved sharply onto the pavement, crushing the parked car and demolishing the kiosk. The kiosk owner sustained a fractured collarbone, and the car owner suffered total property loss. The police charge-sheeted D under Sections 115(2), 118(1), and 324(4) BNS.',
      question:
        'Can driver D successfully claim immunity under Section 19 BNS on grounds of necessity?',
      applicableLaw:
        'Section 19 BNS (Necessity / Act done to prevent greater harm); Section 2(11) BNS (Good faith); Section 108 BSA 2023 (Burden of proof); Motor Vehicles Act, 1988.',
      analysis:
        '1. Presence of Imminent Catastrophe: The stalled school bus presented an immediate, life-threatening disaster for 35 children and 40 bus passengers.\n2. Absence of Criminal Intent: D possessed no intent to injure the fruit vendor or destroy the parked vehicle. The property damage was an unintended consequence of an emergency avoidance maneuver.\n3. Proportionality & Choice of Evils: Choosing to risk property damage and non-fatal injury to avoid the almost certain deaths of dozens of school children is the exact factual matrix contemplated by statutory Illustration (a) to Section 19.\n4. Good Faith: D exercised due care and attention in navigating to the least populated escape route.',
      conclusion:
        'Driver D is entitled to complete protection under Section 19 BNS. The prosecution is liable to be quashed under Section 528 BNSS or dismissed under Section 251 BNSS.',
    },
  ],

  distinctions: [
    {
      id: 's-19-dist-1',
      title: 'Section 19 BNS vs Sections 34–44 BNS (Necessity vs Private Defence)',
      left: 'Section 19 BNS (Necessity / IPC s. 81)',
      right: 'Sections 34–44 BNS (Private Defence / IPC ss. 96–106)',
      rows: [
        {
          point: 'Source of Danger',
          left: 'Natural disasters, emergencies, structural failures, or objective perils (evil situation).',
          right: 'Unlawful aggression or criminal attack launched by a human wrongdoer.',
        },
        {
          point: 'Impact on Innocents',
          left: 'Harm is often inflicted upon innocent third parties or their property to avert greater peril.',
          right: 'Harm is directed strictly against the unlawful aggressor; no right against innocent persons.',
        },
        {
          point: 'Extent to Causing Death',
          left: 'Generally cannot justify deliberate killing of an innocent person (Dudley & Stephens).',
          right: 'Can extend to causing death of the aggressor in specified grave assaults (s. 38 & 41 BNS).',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-19-trap-1',
      trap: 'An individual facing extreme poverty and starvation can invoke Section 19 BNS as a defence to theft of bread or grain.',
      correction:
        'Untrue. Economic necessity, poverty, or hunger does not constitute legal necessity under Section 19 BNS. English and Indian courts have firmly rejected the plea of economic necessity to justify property offences.',
    },
    {
      id: 's-19-trap-2',
      trap: 'Section 19 permits an actor to sacrifice any life so long as a greater number of lives are saved.',
      correction:
        'Untrue. Indian criminal law adheres to the rule in R v. Dudley and Stephens: human life cannot be mathematically weighed against another innocent human life by a private individual to justify intentional killing.',
    },
  ],

  cases: [
    {
      name: 'R v. Dudley and Stephens',
      year: 1884,
      citation: '(1884) 14 QBD 273',
      court: 'Queen\'s Bench Division (England)',
      bench: 'Lord Coleridge, C.J., Grove & Denman, JJ., Pollock & Huddleston, BB.',
      facts:
        'Four crew members of an English yacht were shipwrecked and cast adrift in an open boat 1,000 miles from land. On the twentieth day, having had no water for seven days and no food for nine days, Dudley and Stephens killed the young cabin boy, Richard Parker, who was in a weakened condition. The three surviving crew members fed upon his body for four days until rescued.',
      issue:
        'Whether the deliberate killing of an innocent person under the extreme necessity of preserving one\'s own life from starvation constitutes murder or is excusable under necessity.',
      ratioDecidendi:
        'Necessity cannot justify murder. Self-preservation is not an absolute legal duty. To allow a person to measure the comparative value of human lives and kill an innocent person to save himself would make the law an engine of cruelty.',
      holding:
        'The prisoners were convicted of murder and sentenced to death (later commuted to six months\' imprisonment).',
      relevance:
        'Foundational common law landmark establishing the absolute boundary of Section 19 BNS: necessity does not excuse deliberate killing.',
    },
    {
      name: 'Bishambhar v. Roomal',
      year: 1951,
      citation: 'AIR 1951 All 500',
      court: 'High Court of Allahabad',
      bench: 'Single Judge Bench',
      facts:
        'The accused caught a trespasser who had molested a young girl in the village. To protect the trespasser from being lynched by an infuriated mob of villagers, the accused took him into protective custody, blackened his face, and paraded him through the streets to pacify the mob.',
      issue:
        'Whether inflicting dishonour or minor harm to save a person from imminent death by mob violence is protected under Section 81 IPC (Section 19 BNS).',
      ratioDecidendi:
        'An act done without criminal intention, in good faith, for the purpose of saving a person from a far greater and imminent harm (death by mob lynching) falls squarely within the general exception of necessity under Section 81 IPC.',
      holding:
        'The conviction of the accused for assault and defamation was set aside and they were acquitted.',
      relevance:
        'Application of the lesser evil doctrine under Section 19 BNS to avert mob violence.',
    },
    {
      name: 'Gopal Naidu v. Emperor',
      year: 1923,
      citation: 'AIR 1923 Mad 523',
      court: 'High Court of Madras',
      bench: 'Full Bench (3 Judges)',
      facts:
        'A police officer arrested an intoxicated man brandishing a sword in a public street, without a warrant for an offence that was non-cognizable under local police regulations, in order to prevent him from injuring the public.',
      issue:
        'Whether the officer was guilty of wrongful confinement or protected by Section 81 IPC.',
      ratioDecidendi:
        'Where an officer acts in good faith without malice to prevent imminent danger to public safety, the exception of Section 81 IPC applies even if statutory arrest provisions were technically non-cognizable.',
      holding:
        'The officer was acquitted under the exception of necessity.',
      relevance:
        'Reaffirms that preventive action taken to safeguard public life is protected under Section 19 BNS.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-19-brief',
      draftingCategory: 'brief',
      question:
        'Provide a Case Brief and Legal Assessment on whether Section 19 BNS protects an airline captain who makes an emergency landing on a closed highway.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether an airline pilot who experiences dual engine failure and executes an emergency dead-stick landing on an 8-lane expressway, causing property damage to highway infrastructure and minor injuries to motorists, is criminally liable under Section 115/324 BNS or shielded by Section 19 BNS.

II. GOVERNING STATUTORY PROVISION
Section 19 BNS provides that nothing is an offence merely by reason of its being done with knowledge that it is likely to cause harm, if done without criminal intention and in good faith to prevent other greater harm to person or property.

III. LEGAL ASSESSMENT & APPLICATION
1. Agony of the Moment: The failure of both engines at 3,000 feet created an absolute emergency where the aircraft had to touch down within 90 seconds.
2. Balance of Evils: Attempting a glide toward a distant airport would have resulted in an uncontrolled crash into a high-density urban residential area with catastrophic loss of 180 passenger lives and hundreds of civilian casualties.
3. Choice of Lesser Harm: Landing on the wide expressway, while creating an inevitable risk of property damage and localized traffic injury, was the only viable maneuver to preserve 180 lives.
4. Absence of Criminal Intent: The pilot possessed no intent to damage highway vehicles; the damage was an unavoidable incidental risk.

IV. OPERATIVE CONCLUSION
The pilot is fully protected under Section 19 BNS. The emergency landing represents a textbook application of jus necessitatis, warranting immediate closure of any penal proceedings.`,
      explanation: 'IRAC assessment for emergency actions under Section 19 BNS.',
    },
    {
      id: 's-19-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions under Section 251 BNSS seeking discharge of a Municipal Fire Officer under Section 19 BNS.',
      answer: `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE AT BENGALURU
CRIMINAL CASE NO. _____ OF 2024

IN THE MATTER OF:
STATE OF KARNATAKA                   ...PROSECUTION
VERSUS
SURESH REDDY (CHIEF FIRE OFFICER)    ...ACCUSED / APPLICANT

MEMORANDUM OF WRITTEN SUBMISSIONS ON BEHALF OF THE ACCUSED UNDER SECTION 251 BNSS PRAYING FOR DISCHARGE PURSUANT TO SECTION 19 BNS

MOST RESPECTFULLY SHOWETH:

I. STATEMENT OF FACTS
1. The Applicant is the Divisional Fire Officer who commanded the firefighting response during the massive chemical warehouse blaze on 14.07.2024.
2. The fire reached temperatures exceeding 1,000 degrees Celsius and was rapidly spreading toward an adjacent liquefied petroleum gas (LPG) bottling plant containing 500 metric tonnes of propane.
3. In the exercise of professional judgment to create a firebreak and save the city from a catastrophic boiling liquid expanding vapour explosion (BLEVE), the Applicant ordered the demolition of two adjoining vacant commercial warehouses owned by the Complainant.
4. The Complainant has maliciously filed a private complaint against the Applicant under Section 324(4) BNS (Mischief causing damage).

II. STATUTORY SCHEME OF SECTION 19 BNS
5. That Section 19 of the Bharatiya Nyaya Sanhita, 2023 expressly enacts that an act done with knowledge that it is likely to cause harm is not an offence if done without criminal intention and in good faith to prevent other greater harm to person or property.
6. Statutory Illustration (b) to Section 19 directly covers the Applicant\'s exact conduct: pulling down houses in a great fire to prevent conflagration from spreading is excusable and not an offence.

III. PRECEDENTS & LAW OF NECESSITY
7. In Bishambhar v. Roomal (AIR 1951 All 500), it was held that actions taken in good faith to prevent grave public tragedy are fully protected under the general exception of necessity.
8. The Applicant acted in the bona fide discharge of public duties with due care, saving thousands of lives in surrounding residential colonies.

IV. PRAYER
Wherefore, it is respectfully prayed that this Hon\'ble Court may be pleased to discharge the Accused / Applicant under Section 251 BNSS.`,
      explanation: 'Courtroom submissions for discharge under Section 19 BNS.',
    },
  ],

  bareActPointers: [
    'BNS s. 19: Act likely to cause harm, but done without criminal intent, and to prevent other harm (Necessity)',
    'BNS s. 2(11): Definition of "good faith"',
    'BNS ss. 34–44: Contrast with private defence (IPC ss. 96–106)',
    'BSA 2023 s. 108: Burden of proving general exceptions on accused',
    'IPC s. 81: Historical predecessor provision',
  ],

  examTips: [
    'Remember the core formula of Section 19: Knowledge of harm is present, but Criminal Intention is absent, and the act is done in good faith to avoid greater harm.',
    'Highlight the two statutory illustrations: (a) steam vessel captain choosing lesser collision; (b) pulling down houses to stop a fire.',
    'Always cite R v. Dudley and Stephens to emphasize the limitation: necessity can never justify deliberate murder.',
  ],

  revisionPoints: [
    'Section 19 BNS codifies the doctrine of Necessity (jus necessitatis).',
    'Permits causing lesser harm to avoid greater imminent harm.',
    'Knowledge of harm is excused; criminal intention is strictly prohibited.',
    'Cannot excuse intentional killing to preserve one\'s own life (R v. Dudley and Stephens).',
  ],

  relatedTopics: ['s-14', 's-18', 's-20', 'general-exceptions'],
} satisfies TopicContent

export default content
