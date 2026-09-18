import { BNS_CHAPTERS, bnsChapterById } from "./chapters";
import { BNS_SECTIONS, bnsSectionById, type BnsSection } from "./sections";

export type BnsDrill = {
  prompt: string;
  choices: string[];
  answer: number;
  explain: string;
};

export type BnsLesson = {
  plain: string;
  points: string[];
  exam: string;
  quiz: BnsDrill;
};

function L(plain: string, points: string[], exam: string, quiz: BnsDrill): BnsLesson {
  return { plain, points, exam, quiz };
}

export const BNS_LESSONS: Record<string, BnsLesson> = {
  "1": L(
    "Section 1 names the Sanhita, lets the Centre notify different commencement dates, and sets extra-territorial reach — every person for acts in India, Indian citizens abroad, and anyone targeting a computer resource in India.",
    [
      "Act 45 of 2023. Assent 25 December 2023. General commencement 1 July 2024 (S.O. 850(E)).",
      "Different dates may be appointed for different provisions — that is why 106(2) could be left out.",
      "Extra-territorial: citizens abroad, and offences targeting an Indian computer resource.",
    ],
    "Do not write “in force in full on 1 July 2024”. Section 106(2) was excluded from that notification.",
    {
      prompt: "The BNS generally came into force on 1 July 2024 except —",
      choices: ["section 152", "section 111", "section 106(2)", "section 358"],
      answer: 2,
      explain: "S.O. 850(E) appointed 1 July 2024 for the Sanhita except sub-section (2) of section 106.",
    },
  ),
  "2": L(
    "Section 2 is the dictionary. IPC definitions that were scattered across ss. 6–52 now sit here. The headline addition: “child” means any person below eighteen years.",
    [
      "“Child” = below 18. This is used throughout Chapter V and in s. 95.",
      "“Dishonestly”, “fraudulently”, “good faith”, “document”, “electronic record”, “public servant”, “movable property” live here.",
      "A transgender identity is read with the 2019 Act — do not treat “man/woman” as closing the dictionary.",
    ],
    "If a question asks where “child” is defined for BNS, the answer is s. 2 — not POCSO, though POCSO still applies on its own terms.",
    {
      prompt: "Under the BNS, “child” means a person below —",
      choices: ["7 years", "12 years", "16 years", "18 years"],
      answer: 3,
      explain: "Section 2: “child” means any person below the age of eighteen years.",
    },
  ),
  "3": L(
    "Section 3 tells you how to read the Act. Clause (5) is old IPC 34: when a criminal act is done by several persons in furtherance of a common intention, each is liable as if they did it alone.",
    [
      "Common intention (3(5)) needs a pre-arranged plan — Mahbub Shah.",
      "Common object (s. 190, old 149) needs five persons and an unlawful-assembly object. Different doctrines.",
      "Other clauses restock old ss. 35–38 (like intention / knowledge when several participate).",
    ],
    "A five-person lynching is charged under s. 103(2) and may also attract s. 190. Do not write “s. 3(5) requires five persons”.",
    {
      prompt: "Common intention of several persons is now found in —",
      choices: ["BNS s. 190", "BNS s. 3(5)", "BNS s. 61", "BNS s. 111"],
      answer: 1,
      explain: "Section 3(5) is the successor of IPC 34. Section 190 is common object (old 149).",
    },
  ),
  "4": L(
    "Six punishments: death, imprisonment for life, imprisonment (rigorous or simple), forfeiture of property, fine, and community service. Community service is the new sixth.",
    [
      "Community service is a punishment, not a diversion scheme — but its hours and administration are not spelled out in the Sanhita.",
      "Death remains; Bachan Singh’s rarest-of-rare still governs the choice between death and life.",
      "Life imprisonment means remainder of natural life unless a remission statute says otherwise (Swamy Shraddananda line).",
    ],
    "Name all six. Forgetting community service is the cheap mark-loss.",
    {
      prompt: "Which of the following is a new punishment under BNS s. 4?",
      choices: ["whipping", "transportation", "community service", "externment"],
      answer: 2,
      explain: "Section 4(f) adds community service to the classical IPC 53 list.",
    },
  ),
  "20": L(
    "A child under seven years is doli incapax — conclusively deemed incapable of committing an offence. No evidence of maturity can take this away.",
    [
      "Absolute immunity. Compare s. 21 (7–12, qualified).",
      "Age is chronological, proved as a fact. Benefit of doubt on age goes to the child.",
      "This is a general exception — it wipes the offence, it is not a mere sentencing discount.",
    ],
    "Under seven = conclusive. 7–12 = rebuttable. 12–18 = a “child” for many Chapter V offences, but capable of committing a crime.",
    {
      prompt: "A child under seven who causes death is —",
      choices: ["guilty of murder if mens rea is proved", "guilty of culpable homicide", "doli incapax under s. 20", "tried under POCSO only"],
      answer: 2,
      explain: "Section 20: nothing is an offence which is done by a child under seven years of age.",
    },
  ),
  "22": L(
    "Unsoundness of mind: the person was incapable of knowing the nature of the act, or that it was either wrong or contrary to law. The Standing Committee put “unsound mind” back in place of “mental illness”.",
    [
      "McNaghten core, now s. 22 (old 84).",
      "Legal insanity, not medical diagnosis. Psychosis at the moment of the act is the question.",
      "Intoxication is s. 23/24, not this section — unless the drink was administered against the person’s will and produced incapacity.",
    ],
    "Do not write “mental illness” as the BNS phrase. The enacted text is “unsound mind”.",
    {
      prompt: "The BNS defence of incapacity by reason of mind uses the phrase —",
      choices: ["mental illness", "unsound mind", "psychotic disorder", "diminished responsibility"],
      answer: 1,
      explain: "Section 22 retained “unsound mind” after the Standing Committee rejected “mental illness”.",
    },
  ),
  "34": L(
    "Nothing is an offence which is done in the exercise of the right of private defence. The right is a shield against an offence, not against a lawful act of a public servant (subject to s. 37).",
    [
      "Gateway section. The body of the right is ss. 35–44.",
      "No right against an act which is not an offence (or which is done in good faith under colour of office, unless the defender reasonably apprehends death or grievous hurt).",
      "There is no right of private defence against an act which does not reasonably cause the apprehension of death or of grievous hurt, if you have time to have recourse to public authorities (s. 37).",
    ],
    "Private defence is not revenge. Once the threat ends, the right ends (ss. 40, 43).",
    {
      prompt: "The right of private defence is a defence against —",
      choices: ["any inconvenience", "a lawful arrest", "an offence (or reasonably apprehended offence)", "a civil trespass only"],
      answer: 2,
      explain: "Section 34 read with 35: the right is against an offence affecting body or property.",
    },
  ),
  "38": L(
    "Private defence of body extends to causing death in listed situations: a reasonably apprehended assault that may cause death, grievous hurt, rape, gratifying unnatural lust, kidnapping/abducting, or throwing/attempting acid.",
    [
      "The list is closed. House-trespass by itself is a property-death situation under s. 41, not here.",
      "Exceeding the right, in good faith, is Exception 2 to murder (s. 101) — it drops the killing to s. 105, it does not acquit.",
      "Risk to an innocent person is s. 44 — the right is not lost, but you must take care.",
    ],
    "Acid is expressly in the death-band of body-defence. That is a BNS-era emphasis, matching s. 124.",
    {
      prompt: "Private defence of body extends to causing death in the case of —",
      choices: ["simple hurt", "theft of a bicycle", "a reasonably apprehended acid attack", "verbal insult"],
      answer: 2,
      explain: "Section 38 lists acid (throwing or attempting to throw) among the death-band assaults.",
    },
  ),
  "45": L(
    "Abetment of a thing: instigating, engaging in a conspiracy, or intentionally aiding. The abetment is a distinct offence. It can be complete even if the offence abetted is not committed.",
    [
      "Three modes: instigation, conspiracy, aid. Mere presence is not aid unless there is a duty or a facilitating act.",
      "Section 48 is new: abetment outside India of an offence in India.",
      "If the offence is committed in consequence and no special punishment is provided, s. 49 punishes as for the offence.",
    ],
    "Abetment ≠ conspiracy. Conspiracy is the agreement (s. 61). Abetment by conspiracy is one mode of s. 45, and still needs the abetment structure.",
    {
      prompt: "Which is not a mode of abetment under s. 45?",
      choices: ["instigating", "engaging in conspiracy", "intentionally aiding", "harbouring after the fact"],
      answer: 3,
      explain: "Harbouring is a distinct offence (ss. 249, 253). Abetment is instigation, conspiracy or aid.",
    },
  ),
  "61": L(
    "Criminal conspiracy: an agreement between two or more to do, or cause to be done, an illegal act, or a legal act by illegal means. Old 120A and 120B sit in one section.",
    [
      "The agreement is the offence. An overt act is required only when the object is not itself an offence.",
      "Two persons minimum. A husband and wife can conspire — the old marital-unity fiction is gone in practice.",
      "Punishment: if the object is punishable with death, life or ≥2 years, then as for abetment; otherwise up to 6 months and/or fine.",
    ],
    "Do not cite 120B in a 2025 charge-sheet. Write BNS s. 61.",
    {
      prompt: "Under BNS, criminal conspiracy is —",
      choices: ["s. 45", "s. 61", "s. 3(5)", "s. 190"],
      answer: 1,
      explain: "Section 61 consolidates IPC 120A (definition) and 120B (punishment).",
    },
  ),
  "62": L(
    "The general attempt section (old 511). It covers attempts to commit offences punishable with life or other imprisonment, where no express provision exists. Attempt to murder is not this section — that is s. 109.",
    [
      "Residual. Special attempt sections win: 109 (murder), 110 (culpable homicide), 312 (armed robbery).",
      "Punishment: up to one-half of the longest term for the offence, or fine, or both.",
      "Preparation is generally not attempt. The line is the proximity test (Abhayanand Mishra, State of Maharashtra v. Mohd. Yakub).",
    ],
    "A question that says “attempt to murder” and offers s. 62 is a trap.",
    {
      prompt: "Attempt to murder is punished under —",
      choices: ["s. 62", "s. 109", "s. 101", "s. 45"],
      answer: 1,
      explain: "Section 109 is the special provision (old 307). Section 62 is the residual attempt clause (old 511).",
    },
  ),
  "63": L(
    "Rape is defined here (old 375). Penetration of any of the listed kinds, against her will, without her consent, or with consent obtained by fear, unsoundness, deception as to identity of the husband, or when she is under 18. The marital-rape exception survives for wives who are 18+, read down by Independent Thought for wives under 18.",
    [
      "Consent must be unequivocal, voluntary and communicated. Absence of physical resistance is not consent.",
      "Age of consent is 18. A wife under 18 is not covered by the exception (Independent Thought + POCSO).",
      "BNS still frames rape as an offence against a woman. Non-consensual acts against adult men are not re-codified after 377’s omission.",
    ],
    "Definition is 63, punishment is 64. Do not merge them the way students merged 375/376.",
    {
      prompt: "The BNS definition of rape is in —",
      choices: ["s. 64", "s. 63", "s. 70", "s. 74"],
      answer: 1,
      explain: "Section 63 defines rape (old 375). Section 64 punishes it (old 376).",
    },
  ),
  "64": L(
    "Punishment for rape. Baseline: rigorous imprisonment of not less than 10 years, which may extend to life, and fine. Aggravated forms (public servant, relative, during communal violence, pregnant woman, etc.) carry heavier floors.",
    [
      "10-to-life is the new baseline (IPC 376(1) had 7-to-life).",
      "Fine is to meet medical expenses and rehabilitation of the victim, and is paid to her.",
      "Repeat rape is s. 71 (remainder of natural life, or death).",
    ],
    "Under-16 and under-12 rapes are s. 65, not a clause of 64. Gang rape is s. 70.",
    {
      prompt: "The ordinary floor for rape under s. 64 is —",
      choices: ["7 years", "10 years", "20 years", "death"],
      answer: 1,
      explain: "Section 64: rigorous imprisonment not less than 10 years, may extend to life, and fine.",
    },
  ),
  "69": L(
    "Genuinely new. Sexual intercourse (not amounting to rape) by deceitful means — a false promise of marriage, employment or promotion, or by concealing identity. Up to 10 years and fine.",
    [
      "This is not rape. The prosecution does not have to fit the facts into s. 63.",
      "“Deceitful means” includes false promise of marriage. Courts had already been straining 375’s consent clause for this; Parliament has now given a dedicated offence.",
      "If the facts are rape, charge 63/64. Section 69 is for the deceit band that is not rape.",
    ],
    "Do not write “s. 69 is the new rape section”. Rape is 63/64. 69 is a separate, lesser, deceit offence.",
    {
      prompt: "Sexual intercourse by a false promise of marriage is now specifically —",
      choices: ["s. 63", "s. 69", "s. 81", "still only a civil wrong"],
      answer: 1,
      explain: "Section 69 is a new offence: sexual intercourse by deceitful means, including a false promise of marriage.",
    },
  ),
  "70": L(
    "Gang rape. Where a woman is raped by one or more persons in a group acting in furtherance of a common intention, each is deemed to have committed gang rape. For a victim under 18, punishment is remainder-of-life or death.",
    [
      "The under-16 / under-12 split of IPC 376DA/DB is gone. The harsh band is now “below 18”.",
      "Common intention of the group is enough; not every participant need penetrate.",
      "Fine must be just and reasonable to meet medical expenses and rehabilitation, and is paid to the victim.",
    ],
    "Age trap: IPC used 16 and 12. BNS uses 18 for the remainder-of-life / death band.",
    {
      prompt: "Under BNS, gang rape of a woman below which age attracts remainder-of-life or death?",
      choices: ["12", "16", "18", "21"],
      answer: 2,
      explain: "Section 70(2) applies the harshest sentence to a woman below 18. The old 12/16 split is gone.",
    },
  ),
  "74": L(
    "Assault or criminal force to a woman with intent to outrage her modesty (old 354). The old 354 cluster is now a family: 74 modesty, 75 sexual harassment, 76 disrobe, 77 voyeurism, 78 stalking, 79 word/gesture.",
    [
      "Modesty is a woman-specific offence. Intention or knowledge that the act will outrage modesty is enough (Ramkripal, Rupan Deol Bajaj).",
      "Pick the most specific section. A demand for sexual favour is 75, not 74.",
      "Punishment: up to 5 years (was 2) and fine — a raised ceiling.",
    ],
    "Do not cite IPC 354 in a 2025 paper unless the facts are pre-1 July 2024.",
    {
      prompt: "IPC 354 (outraging modesty) is now primarily —",
      choices: ["s. 63", "s. 74", "s. 79", "s. 354 BNS"],
      answer: 1,
      explain: "Section 74 is the successor of IPC 354. Sections 75–78 split out the 2013 additions.",
    },
  ),
  "75": L(
    "Sexual harassment (old 354A): unwelcome physical contact and advances; a demand or request for sexual favours; showing pornography against her will; sexually coloured remarks. Remarks are the lighter band.",
    [
      "Physical contact / demand / pornography: up to 3 years, or fine, or both.",
      "Sexually coloured remarks: up to 1 year, or fine, or both.",
      "Maharashtra’s 2026 State amendment adds digital and social-media harassment for that State. It is not a Union amendment of the BNS.",
    ],
    "A Union paper wants the BNS text, not the Maharashtra overlay. Mention the overlay only if asked about State amendments.",
    {
      prompt: "Sexually coloured remarks are punished under —",
      choices: ["s. 74", "s. 75", "s. 79", "s. 354A IPC still"],
      answer: 1,
      explain: "Section 75 (old 354A) includes sexually coloured remarks as a lighter band of sexual harassment.",
    },
  ),
  "80": L(
    "Dowry death, moved from the homicide chapter into Chapter V. Death of a woman by burns or bodily injury, or otherwise than under normal circumstances, within 7 years of marriage, where she was subjected to dowry-related cruelty soon before her death.",
    [
      "Minimum 7 years, may extend to life. Same as old 304B.",
      "“Soon before” is a relative expression (Hira Lal, Satbir Singh).",
      "Charge with s. 85 cruelty where the facts support both. They are not the same offence.",
    ],
    "It is s. 80, not s. 304B and not s. 103. The 7-year window is still the hinge.",
    {
      prompt: "Dowry death is now —",
      choices: ["s. 103", "s. 106", "s. 80", "s. 85"],
      answer: 2,
      explain: "Section 80 is the successor of IPC 304B, placed in Chapter V with other offences against women.",
    },
  ),
  "85": L(
    "Husband or relative of husband subjecting a woman to cruelty (old 498A). The offence is here; the definition of cruelty is s. 86. Still cognizable and non-bailable in the usual classification.",
    [
      "Who: husband or his relative. A girlfriend of the husband is not “relative” unless the facts bring her in some other way.",
      "What: s. 86 — wilful conduct likely to drive her to suicide or cause grave injury / harassment to coerce dowry.",
      "The constitutional challenge to 498A failed; the section survives as 85/86.",
    ],
    "Charge 85, define with 86. Writing “s. 86 is the offence” is a free mark thrown away.",
    {
      prompt: "IPC 498A (cruelty) maps to —",
      choices: ["s. 80 only", "s. 85 read with s. 86", "s. 351", "s. 498 BNS"],
      answer: 1,
      explain: "Section 85 is the offence; section 86 defines cruelty. Together they replace 498A.",
    },
  ),
  "95": L(
    "New. Hiring, employing or engaging a child to commit an offence. The adult who uses a child as an instrument is punished; the child is the victim of this section.",
    [
      "Child = below 18 (s. 2).",
      "If the child’s offence causes death, the adult’s floor rises.",
      "This sits with ss. 96–99 (procuration, selling/buying a child for prostitution).",
    ],
    "Do not treat the child as a co-accused of the adult under this section. The point of s. 95 is that the child was used.",
    {
      prompt: "Using a child to commit a crime is —",
      choices: ["only abetment under s. 45", "a new offence under s. 95", "not an offence if the child consented", "s. 111 organised crime only"],
      answer: 1,
      explain: "Section 95 is a dedicated new offence: hiring, employing or engaging a child to commit an offence.",
    },
  ),
  "100": L(
    "Culpable homicide is the genus (old 299). Causing death by doing an act with the intention of causing death, or of causing such bodily injury as is likely to cause death, or with the knowledge that the act is likely to cause death.",
    [
      "Every murder is culpable homicide. Not every culpable homicide is murder.",
      "The three mental states: intention to cause death; intention to cause likely-to-cause-death injury; knowledge of likelihood.",
      "Punishment is not in s. 100. If it is murder, s. 103; if not, s. 105.",
    ],
    "Definition 100 / 101, punishment 103 / 105. Mixing these four numbers is the most common homicide error.",
    {
      prompt: "Culpable homicide is defined in BNS —",
      choices: ["s. 101", "s. 100", "s. 103", "s. 105"],
      answer: 1,
      explain: "Section 100 = old 299 (definition). Section 101 = old 300 (murder). Punishments are 103 and 105.",
    },
  ),
  "101": L(
    "Murder is culpable homicide with one of the four aggravating clauses (old 300), unless an exception applies. Thirdly is Virsa Singh: the intended bodily injury is sufficient in the ordinary course of nature to cause death.",
    [
      "Four clauses in; five exceptions out (provocation, private defence exceeded, public servant, sudden fight, consent).",
      "The exceptions do not acquit. They drop the killing from murder to s. 105.",
      "Knowledge that the act is imminently dangerous (clause 4) is the rare “dangerous-act” murder — typically fire, poison, derailing.",
    ],
    "Provocation is Exception 1, not a separate offence. Nanavati still teaches the cooling-off interval.",
    {
      prompt: "Virsa Singh’s “injury sufficient in the ordinary course of nature” is which clause of s. 101?",
      choices: ["firstly", "secondly", "thirdly", "fourthly"],
      answer: 2,
      explain: "Section 101 thirdly is the Virsa Singh clause — old 300 thirdly.",
    },
  ),
  "103": L(
    "Punishment for murder: death or life imprisonment, and fine. Clause (2) is new — murder by five or more persons acting in concert on identity grounds (race, caste, community, sex, place of birth, language, personal belief): death or life, with life as the floor.",
    [
      "Clause (1) = old 302. Bachan Singh governs death vs life.",
      "Clause (2) is the mob-lynching clause. Five persons + identity ground. The floor is life (you cannot give a term of years).",
      "A group murder without an identity ground is still clause (1), perhaps with s. 190.",
    ],
    "Do not write “IPC 302” as the BNS murder-punishment section. It is 103. Definition remains 101.",
    {
      prompt: "IPC 302 (punishment for murder) is now —",
      choices: ["s. 100", "s. 101", "s. 103", "s. 105"],
      answer: 2,
      explain: "Section 103 is the successor of IPC 302. Section 101 is the definition (old 300).",
    },
  ),
  "105": L(
    "Punishment for culpable homicide not amounting to murder (old 304). Part I — if the act is done with the intention of causing death or likely-to-cause-death injury: life, or up to 10 years, and fine. Part II — if only knowledge: up to 10 years and fine.",
    [
      "The five exceptions to s. 101 land here.",
      "Part I is the intention band; Part II is knowledge-only. Do not swap them.",
      "This is not death-by-negligence (s. 106) and not murder (s. 103).",
    ],
    "A rash driver who kills is usually s. 106, not 105, unless knowledge of likely death is made out at the 100/101 level.",
    {
      prompt: "IPC 304 maps to BNS —",
      choices: ["s. 103", "s. 105", "s. 106", "s. 101"],
      answer: 1,
      explain: "Section 105 is culpable homicide not amounting to murder — old 304 Parts I and II.",
    },
  ),
  "106": L(
    "Causing death by a rash or negligent act not amounting to culpable homicide (old 304A). Clause (1) is in force: up to 5 years (8 if a registered medical practitioner in the course of a medical procedure). Clause (2) — causing death by rash driving and fleeing — was not commenced.",
    [
      "S.O. 850(E): 106(2) stayed out. Hit-and-run death is not yet this clause.",
      "Medical-procedure death by a registered practitioner has a higher ceiling (8 years) than the ordinary 5.",
      "Rash vs negligent: rash is over-hasty indifference; negligent is a duty-breach. Either will do.",
    ],
    "Writing “hit-and-run is 10 years under 106(2)” without flagging non-commencement is a factual error in 2026.",
    {
      prompt: "Which statement about s. 106 is correct as of 2026?",
      choices: [
        "The whole section is in force",
        "Only 106(2) is in force",
        "106(1) is in force; 106(2) was not brought into force",
        "s. 106 repealed 304A but is itself repealed",
      ],
      answer: 2,
      explain: "Commencement notification S.O. 850(E) excluded section 106(2). MHA has continued to record it as uncommenced.",
    },
  ),
  "108": L(
    "Abetment of suicide (old 306). The person who dies is not the accused. Instigation, conspiracy or aid (s. 45) plus a suicide is the structure. Leave-note cases still turn on whether there was instigation, not mere harassment.",
    [
      "General attempt-to-suicide (old 309) is gone. Do not charge the survivor of a suicide attempt under 108.",
      "The only remaining suicide-attempt offence is s. 226 (coercing a public servant).",
      "For married women, 108 often travels with ss. 80 and 85.",
    ],
    "309 is not 108. 108 is abetment of a completed suicide. 226 is a suicide attempt used as a weapon against a public servant.",
    {
      prompt: "Attempt to commit suicide as a general offence —",
      choices: ["is s. 108", "is s. 226", "is omitted; only s. 226 remains for a specific situation", "is s. 309 BNS"],
      answer: 2,
      explain: "IPC 309 is not re-enacted as a general crime. Section 226 is a narrow recast. Section 108 is abetment of suicide.",
    },
  ),
  "109": L(
    "Attempt to murder (old 307). Doing an act with such intention or knowledge, and under such circumstances, that had death been caused the offender would be guilty of murder.",
    [
      "If hurt is caused, the ceiling rises to life.",
      "Do not use s. 62 (general attempt) when 109 applies.",
      "Life-convict’s attempt is a death-eligible band in the latter part of the section.",
    ],
    "Attempt to murder = 109. Attempt to commit culpable homicide = 110. Mixing them is the IPC 307/308 trap, relabelled.",
    {
      prompt: "IPC 307 maps to —",
      choices: ["s. 62", "s. 101", "s. 109", "s. 110"],
      answer: 2,
      explain: "Section 109 is attempt to murder (old 307). Section 110 is attempt to commit culpable homicide (old 308).",
    },
  ),
  "111": L(
    "Organised crime, new. A continuing unlawful activity — kidnapping, robbery, land-grabbing, contract killing, economic offences, cyber-crimes, trafficking — by a group or gang (syndicate) acting in concert. Death caused: death or life, and a fine of at least ₹10 lakh.",
    [
      "“Continuing” and “syndicate” are the hinges. A one-off dacoity is still s. 310, not 111.",
      "Petty organised crime is the little sibling in s. 112 (vehicle theft, pick-pocketing, exam-paper gangs).",
      "UAPA and State MCOCA-type laws still exist. Flag the overlap; do not pretend BNS occupies the whole field.",
    ],
    "111 is not “the new dacoity”. Dacoity is 310. 111 needs a continuing syndicate activity.",
    {
      prompt: "Organised crime is —",
      choices: ["s. 310", "s. 111", "s. 189", "only in UAPA, not BNS"],
      answer: 1,
      explain: "Section 111 is a new BNS offence. UAPA/MCOCA overlap remains.",
    },
  ),
  "112": L(
    "Petty organised crime, new. A group or gang that, by theft, snatching, cheating, unauthorised selling of tickets, selling of public-exam question papers, or similar, causes a feeling of insecurity. 1 to 7 years and fine.",
    [
      "The list is illustrative: vehicle theft, pick-pocketing, snatching, cheating.",
      "“Feeling of insecurity” is a novel phrase. Expect litigation.",
      "A lone pickpocket is s. 303 or 304, not 112. The gang/group is essential.",
    ],
    "112 is not a lesser 111. Different ingredients: 111 is continuing syndicate activity of a grave kind; 112 is the street-gang insecurity band.",
    {
      prompt: "Selling exam papers as a gang offence is an illustration of —",
      choices: ["s. 111", "s. 112", "s. 318 only", "s. 61 only"],
      answer: 1,
      explain: "Section 112 lists selling of public-examination question papers among petty organised crimes.",
    },
  ),
  "113": L(
    "Terrorist act, now inside the general penal code. An act done with intent to threaten the unity, integrity, sovereignty, security or economic security of India, or to strike terror, using explosives, firearms, hazardous substances, or by destroying public facilities. UAPA remains.",
    [
      "If death is caused: death or life, and ≥ ₹10 lakh fine. Otherwise 5-to-life and ≥ ₹5 lakh.",
      "Tried in a Sessions Court under BNSS, not a special UAPA court — unless UAPA is also charged.",
      "Overlap with s. 152 (sovereignty by words/finance) and with UAPA is the exam point. Charge-sheet hygiene matters.",
    ],
    "113 is not sedition, and it is not 152. 113 is a violent/terror act. 152 is secessionist expression and related conduct.",
    {
      prompt: "A terrorist act is now an offence under the BNS at —",
      choices: ["s. 152", "s. 147", "s. 113", "s. 111 only"],
      answer: 2,
      explain: "Section 113 inserts a terrorist-act offence into the general code. UAPA is not repealed.",
    },
  ),
  "116": L(
    "Grievous hurt (old 320). Eight kinds: emasculation; permanent privation of eye or ear; privation of any member or joint; destruction or permanent impairing of a joint; permanent disfiguration of head or face; fracture or dislocation of a bone or tooth; any hurt which endangers life or causes the sufferer to be in severe bodily pain / unable to follow ordinary pursuits for 15 days.",
    [
      "Fracture of a bone is enough. It need not be compound.",
      "15 days’ severe pain is a distinct eighth kind. Count the days.",
      "Punishment is s. 117 (voluntarily causing) or s. 118 (dangerous weapons).",
    ],
    "Simple hurt is s. 114/115. Grievous is 116/117. Weapon/acid moves you to 118/124.",
    {
      prompt: "Fracture of a bone is —",
      choices: ["simple hurt", "grievous hurt under s. 116", "only grievous if it endangers life", "mischief"],
      answer: 1,
      explain: "Section 116 includes fracture or dislocation of a bone or tooth as grievous hurt.",
    },
  ),
  "124": L(
    "Voluntarily causing grievous hurt by use of acid, and the attempt. Fine is just and reasonable to meet medical expenses of treatment of the victim, and is paid to the victim. Laxmi’s directions sit behind the text.",
    [
      "Permanent or partial damage, deformity, burns, or grievous hurt by throwing or administering acid.",
      "Attempt has its own band — you do not need completed grievous hurt for the attempt clause.",
      "Identity of acid-attack victims: Maharashtra 2026 extends s. 72-type protection at State level. Union BNS s. 72 is still the sexual-offence identity section.",
    ],
    "Acid is 124, not 118. 118 is dangerous weapons generally. 124 is the dedicated acid section (old 326A/326B).",
    {
      prompt: "Acid attack is punished under BNS —",
      choices: ["s. 118", "s. 124", "s. 103", "s. 75"],
      answer: 1,
      explain: "Section 124 is the successor of IPC 326A/326B.",
    },
  ),
  "137": L(
    "Kidnapping: from India, or from lawful guardianship. Taking or enticing a child (male under 18, female under 18) out of the keeping of the lawful guardian without consent. The minor’s consent is irrelevant.",
    [
      "Two kinds: from India; from lawful guardianship. Most paper facts are the second.",
      "Age is 18 for both sexes (IPC had 16 for males). Aligns with “child” in s. 2.",
      "Abduction (s. 138) is force or deceit to go from any place. Abduction is not punishable by itself.",
    ],
    "Kidnapping is complete when the minor is taken out of guardianship. Abduction needs an “in order to” companion section to be an offence.",
    {
      prompt: "Kidnapping from lawful guardianship now uses which age for a male child?",
      choices: ["14", "16", "18", "21"],
      answer: 2,
      explain: "Section 137 read with the BNS child definition: 18 for both sexes. IPC 361 had 16 for males.",
    },
  ),
  "152": L(
    "Act endangering sovereignty, unity and integrity of India. Whoever, purposely or knowingly, by words, signs, visible representation, electronic communication, financial means or otherwise, excites secession, armed rebellion, subversive activities, or separatist feelings, or endangers sovereignty or unity. Life, or imprisonment up to 7 years, and fine.",
    [
      "This is not IPC 124A with a new number. Sedition is repealed. The mens rea and the object (secession/rebellion/unity) are different.",
      "Electronic communication and financial means are expressly in — a 21st-century drafting choice.",
      "Kedarnath’s violence/public-order gloss does not automatically apply. Treat 152 on its own words.",
    ],
    "A 2026 paper that says “sedition is now s. 152” wants you to refuse the equation and then explain the overlap.",
    {
      prompt: "Sedition (IPC 124A) —",
      choices: [
        "is BNS s. 152 under a new name",
        "is BNS s. 147",
        "is repealed; s. 152 is a different offence on sovereignty and unity",
        "is BNS s. 196",
      ],
      answer: 2,
      explain: "124A is dropped. Section 152 is a new, differently worded offence. Do not equate them.",
    },
  ),
  "189": L(
    "Unlawful assembly (old 141/143): five or more persons with a common object of the listed kinds — overawing government, resisting law, committing mischief or criminal trespass, taking possession, compelling a person by force.",
    [
      "Five is the magic number. Four plus a common intention is s. 3(5), not an unlawful assembly.",
      "Membership is enough for the assembly offence; the further offence in prosecution of the object is s. 190.",
      "Rioting (s. 191) is an unlawful assembly that uses force or violence.",
    ],
    "5 persons = assembly. Common intention can be 2. Do not swap 189 and 3(5).",
    {
      prompt: "An unlawful assembly requires at least —",
      choices: ["two persons", "three persons", "five persons", "ten persons"],
      answer: 2,
      explain: "Section 189 (old 141): five or more with a common object of the listed kinds.",
    },
  ),
  "190": L(
    "Common object (old 149). Every member of an unlawful assembly is guilty of the offence committed in prosecution of the common object, or which the members knew to be likely.",
    [
      "Needs an unlawful assembly (five + s. 189 object).",
      "No pre-arranged plan is required — that is the Mahbub Shah contrast with s. 3(5).",
      "Knowledge of likelihood is enough for the “likely” limb. Constructive liability is wide; papers love it.",
    ],
    "3(5) = common intention, 2+ persons, prior concert. 190 = common object, 5+ persons, assembly. Memorise that table.",
    {
      prompt: "IPC 149 (common object) is now —",
      choices: ["s. 3(5)", "s. 61", "s. 190", "s. 191"],
      answer: 2,
      explain: "Section 190 is the successor of IPC 149. Section 191 is rioting.",
    },
  ),
  "196": L(
    "Promoting enmity between groups on grounds of religion, race, place of birth, residence, language, caste or community, and doing acts prejudicial to maintenance of harmony (old 153A). The harmony clause and the place-of-worship limb survive.",
    [
      "Intention to promote enmity, or knowledge of likelihood, is the mental element.",
      "A religious-feelings outrage without group-enmity is s. 299 (old 295A), not 196.",
      "National-integration imputations are s. 197 (old 153B).",
    ],
    "196 = group enmity. 299 = outrage of religious feelings. 152 = sovereignty. Three different offences.",
    {
      prompt: "IPC 153A maps to —",
      choices: ["s. 152", "s. 196", "s. 299", "s. 353"],
      answer: 1,
      explain: "Section 196 is promoting enmity between groups — old 153A.",
    },
  ),
  "226": L(
    "Attempt to commit suicide to compel or restrain the exercise of lawful power by a public servant. The general 309 offence is gone. What remains is a suicide attempt used as leverage against the State. Community service is on the menu.",
    [
      "Mental Healthcare Act, 2017 s. 115 already pushed against punishing suicide attempt. BNS follows through, with this narrow exception.",
      "Punishment: simple imprisonment up to 1 year, or fine, or community service, or both.",
      "A private suicide attempt, with no public-servant coercion, is not this section.",
    ],
    "“Suicide is still an offence” is false. Only this coercive form is.",
    {
      prompt: "IPC 309 (attempt to suicide) —",
      choices: [
        "is BNS s. 108",
        "is fully re-enacted as s. 226",
        "is omitted as a general crime; s. 226 covers only coercion of a public servant",
        "is now community service for all suicide attempts",
      ],
      answer: 2,
      explain: "The general offence is gone. Section 226 is a recast confined to compelling or restraining a public servant.",
    },
  ),
  "303": L(
    "Theft (old 378/379). Dishonest taking of movable property out of a person’s possession without consent. First conviction for property under ₹5,000 may be community service, or fine, or both. A second theft carries a mandatory minimum of 1 year, up to 5 years.",
    [
      "Taking + movable + possession + dishonest + without consent. All five.",
      "Snatching is s. 304 — a grab from the person. Do not undercharge a snatching as 303.",
      "The ₹5,000 community-service band is only for a first conviction. Repeaters get the 1–5 year floor.",
    ],
    "IPC 379 is not 303’s only ancestor — 378 is the definition, 379 the punishment, now fused.",
    {
      prompt: "IPC 379 (theft) is now —",
      choices: ["s. 304", "s. 303", "s. 309", "s. 314"],
      answer: 1,
      explain: "Section 303 fuses the definition and punishment of theft (old 378/379). Snatching is the new s. 304.",
    },
  ),
  "304": L(
    "Snatching, new. Theft by suddenly, quickly or forcibly seizing or taking away movable property from any person. Up to 3 years and fine. The phone-and-chain offence, given its own name.",
    [
      "It is a species of theft, not robbery. Robbery needs more violence or fear (s. 309).",
      "From the person is the image, but the text is “from any person”.",
      "A gang of snatchers causing insecurity may also be s. 112.",
    ],
    "304 is snatching, not culpable homicide. (IPC 304 was culpable homicide — that is now s. 105. This number-collision is a favourite trap.)",
    {
      prompt: "BNS s. 304 is —",
      choices: ["culpable homicide not amounting to murder", "snatching", "theft in a dwelling", "dacoity"],
      answer: 1,
      explain: "Number collision: IPC 304 is now BNS 105. BNS 304 is the new snatching offence.",
    },
  ),
  "309": L(
    "Robbery (old 390/392). Theft plus, at the time of committing it or of carrying away, voluntary causing or attempting to cause death, hurt or wrongful restraint, or fear of those. Or extortion plus immediate fear, in the presence of the person.",
    [
      "Theft + violence/fear = robbery. Extortion + immediate presence-fear = robbery.",
      "Five persons committing robbery = dacoity (s. 310).",
      "Punishment: rigorous up to 10 years and fine; on the highway between sunset and sunrise the ceiling is 14 years in the classical scheme — check the enacted ceiling when quoting.",
    ],
    "Another number collision: IPC 309 was attempt to suicide. BNS 309 is robbery. Never carry IPC numbers across without converting.",
    {
      prompt: "BNS s. 309 is —",
      choices: ["attempt to suicide", "robbery", "dacoity", "extortion"],
      answer: 1,
      explain: "IPC 309 is gone as a general suicide-attempt offence. BNS 309 is robbery (old 392).",
    },
  ),
  "310": L(
    "Dacoity (old 391/395): robbery by five or more persons conjointly. Attempt, assembly for dacoity, and belonging to a gang have neighbouring sections.",
    [
      "Five is essential. Four robbers are s. 309, not 310.",
      "Each of the five is guilty of dacoity, even if only one used the knife.",
      "If death is caused in a dacoity, look also at 311 and at homicide sections.",
    ],
    "Dacoity is not organised crime. Organised crime (111) needs a continuing syndicate. A one-night dacoity is 310.",
    {
      prompt: "Dacoity requires a minimum of —",
      choices: ["two robbers", "three robbers", "five persons committing robbery", "ten persons"],
      answer: 2,
      explain: "Section 310: robbery by five or more persons. Same as old 391.",
    },
  ),
  "316": L(
    "Criminal breach of trust (old 405/406). Entrustment of property, then dishonest misappropriation, conversion, or use/disposal in violation of law or of a contract. Public servants, bankers, merchants, agents sit in the aggravated clauses.",
    [
      "Entrustment is the hinge (Pyare Lal). Without it, think theft or misappropriation (s. 314).",
      "Dominion over property can amount to entrustment.",
      "Cheating (318) is deception at the threshold; CBT is betrayal after a lawful entrustment.",
    ],
    "406/420 double-charging is an old habit. Convert: 316 and 318. They can travel together only if both ingredients exist.",
    {
      prompt: "IPC 406 maps to —",
      choices: ["s. 314", "s. 316", "s. 318", "s. 303"],
      answer: 1,
      explain: "Section 316 is criminal breach of trust (old 405/406). Section 314 is dishonest misappropriation (old 403).",
    },
  ),
  "318": L(
    "Cheating (old 415/417/420). Deceiving a person and fraudulently or dishonestly inducing them to deliver property, or to consent that any person retain it, or to do or omit anything they would not otherwise do. The dishonest-delivery-of-property band is the old 420, now a clause of 318.",
    [
      "Deception + inducement + (property or an act/omission). All must be there.",
      "Personation cheating is s. 319 (old 416/419).",
      "A broken promise is not cheating unless the intention not to perform existed at the start.",
    ],
    "There is no “s. 420 BNS”. Old 420 is inside s. 318. Writing 420 in a 2025 charge is the classic conversion error.",
    {
      prompt: "IPC 420 is now found in —",
      choices: ["s. 420 BNS", "s. 318", "s. 316", "s. 69"],
      answer: 1,
      explain: "Section 318 consolidates cheating and the old 420 delivery-of-property band. There is no s. 420 in the BNS.",
    },
  ),
  "336": L(
    "Forgery (old 463/465): making a false document or false electronic record, with intent to cause damage or injury, to support a claim or title, to cause a person to part with property, or to commit fraud. Electronic records are in the definition.",
    [
      "Making the false document is s. 335; forgery as an offence is 336.",
      "Using as genuine is s. 340 (old 471).",
      "Wills and valuable securities are the aggravated s. 338 band (old 467).",
    ],
    "A fake PDF is a false electronic record. Do not argue that forgery is paper-only.",
    {
      prompt: "Forgery of an electronic record is —",
      choices: ["outside BNS", "covered under s. 336", "only an IT Act offence", "s. 318 only"],
      answer: 1,
      explain: "Section 336 expressly covers a false electronic record. The IT Act may still apply alongside.",
    },
  ),
  "351": L(
    "Criminal intimidation (old 503/506): threatening another with injury to person, reputation or property — or to the person/reputation of anyone the other is interested in — with intent to cause alarm, or to make the person do something they are not legally bound to do, or omit something they are legally entitled to do.",
    [
      "The threat is the actus. Alarm, or coerced doing/omitting, is the intent.",
      "If the threat is to cause death or grievous hurt, or to impute unchastity, the higher band applies (up to 7 years).",
      "A threat in writing or electronically is still 351. There is no separate “WhatsApp intimidation” section.",
    ],
    "IPC 506 is not 351’s only ancestor — 503 is the definition. Both live in 351 now.",
    {
      prompt: "IPC 506 maps to —",
      choices: ["s. 352", "s. 351", "s. 353", "s. 356"],
      answer: 1,
      explain: "Section 351 is criminal intimidation (old 503/506). Section 352 is intentional insult.",
    },
  ),
  "353": L(
    "Statements conducing to public mischief (old 505). Making, publishing or circulating a statement, rumour or report with intent to cause (or which is likely to cause) public alarm, mutiny, or an offence against the State or against public tranquillity — including by electronic means.",
    [
      "Rumour + public alarm is the core. Social-media forwards fit the electronic limb.",
      "Number collision: IPC 353 was assault on a public servant (now s. 132). BNS 353 is the old 505.",
      "Group enmity is 196; religious outrage is 299; this is public mischief by statement.",
    ],
    "If the facts are a rumour about a riot in the next town, think 353, not 191 (rioting needs the assembly).",
    {
      prompt: "BNS s. 353 is —",
      choices: ["assault on a public servant", "statements conducing to public mischief", "unlawful assembly", "sedition"],
      answer: 1,
      explain: "Number collision: IPC 353 is now BNS 132. BNS 353 is old 505 (public mischief by statement).",
    },
  ),
  "356": L(
    "Defamation (old 499/500). Imputation concerning a person, by words, signs or visible representations, intending to harm (or knowing it likely to harm) reputation. The ten exceptions — truth for public good, fair comment on public conduct, accurate reports of courts, etc. — survive. Punishment up to 2 years, or fine, or both.",
    [
      "Definition and punishment are merged. There is no separate “500”.",
      "Exceptions are the whole game in a paper problem. Exception 1 (truth for public good) is not “truth alone”.",
      "Company and deceased persons can be defamed in the classical way the explanations allow.",
    ],
    "Defamation remains a crime. The constitutional challenge to criminal defamation failed in Subramanian Swamy (2016); BNS keeps it.",
    {
      prompt: "IPC 499/500 (defamation) map to —",
      choices: ["s. 351", "s. 353", "s. 356", "s. 196"],
      answer: 2,
      explain: "Section 356 merges the definition (499) and punishment (500) of defamation.",
    },
  ),
  "358": L(
    "Repeal and savings. The Indian Penal Code, 1860 is repealed. Anything done, any right, privilege, obligation, liability, penalty or punishment under the IPC, and any investigation or proceeding in respect of an IPC offence, continues. Offences committed before 1 July 2024 are IPC offences.",
    [
      "Article 20(1) already bars ex post facto criminal law. 358 is the statutory savings.",
      "Procedure may be BNSS even for an IPC offence, depending on the BNSS savings — keep substantive and procedural tracks separate.",
      "You cannot charge BNS for a 30 June 2024 homicide. You cannot charge IPC 302 for a 2 July 2024 homicide.",
    ],
    "Date of the offence, not date of the FIR, decides IPC vs BNS on substance.",
    {
      prompt: "A murder committed on 30 June 2024 is charged under —",
      choices: ["BNS s. 103", "IPC 302, because of s. 358 savings", "both, in the alternative", "s. 113"],
      answer: 1,
      explain: "Section 358 saves IPC liabilities for offences committed before commencement. The date of the offence controls.",
    },
  ),
};

function nearbyChoices(section: BnsSection): string[] {
  const pool = BNS_SECTIONS.filter((s) => s.chapter === section.chapter && s.id !== section.id);
  const picks: BnsSection[] = [];
  for (const s of pool) {
    if (picks.length >= 3) break;
    if (Math.abs(s.n - section.n) <= 8 || s.flags.includes("exam")) picks.push(s);
  }
  for (const s of pool) {
    if (picks.length >= 3) break;
    if (!picks.includes(s)) picks.push(s);
  }
  while (picks.length < 3) {
    const extra = BNS_SECTIONS[section.n % BNS_SECTIONS.length];
    if (extra && extra.id !== section.id && !picks.includes(extra)) picks.push(extra);
    else break;
  }
  return picks.slice(0, 3).map((s) => `s. ${s.id} ${s.title}`);
}

function fallbackLesson(section: BnsSection): BnsLesson {
  const chapter = bnsChapterById(section.chapter);
  const ipcBit = section.ipc ? ` BNS restatement of IPC ${section.ipc}.` : " A BNS provision with no single IPC predecessor.";
  const flagBit = section.flags.includes("new")
    ? " Treat it as a fresh offence."
    : " Cite the BNS number for facts on or after 1 July 2024.";
  const points = [
    `Chapter ${chapter?.roman ?? section.chapter} — ${chapter?.title ?? section.cluster}.`,
    section.ipc ? `IPC concordance: ${section.ipc}.` : "No single IPC predecessor — do not invent one.",
    section.punishment ? `Punishment: ${section.punishment}` : "Read the section for the exact term, fine and any mandatory minimum.",
  ];
  if (section.flags.includes("community-service")) {
    points.push("Community service is an available sentence here.");
  }
  const others = nearbyChoices(section);
  let quiz: BnsDrill;
  if (section.ipc && /[0-9]/.test(section.ipc) && !section.flags.includes("new")) {
    const ipcNum = section.ipc.match(/\d+/)?.[0] ?? section.ipc;
    quiz = {
      prompt: `IPC ${ipcNum} is now principally —`,
      choices: [`BNS s. ${section.id} (${section.title})`, ...others],
      answer: 0,
      explain: `The standard concordance puts IPC ${section.ipc} at BNS s. ${section.id}. Convert before you charge.`,
    };
  } else if (section.flags.includes("new")) {
    quiz = {
      prompt: `Which of these is a new BNS offence with no IPC predecessor?`,
      choices: [`s. ${section.id} ${section.title}`, ...others],
      answer: 0,
      explain: `Section ${section.id} is new. Do not map it backwards onto a dropped IPC section.`,
    };
  } else {
    quiz = {
      prompt: `Section ${section.id} BNS sits in which chapter?`,
      choices: [
        `Chapter ${chapter?.roman} — ${chapter?.title}`,
        ...BNS_CHAPTERS.filter((c) => c.id !== section.chapter)
          .slice(0, 3)
          .map((c) => `Chapter ${c.roman} — ${c.title}`),
      ].slice(0, 4),
      answer: 0,
      explain: `Section ${section.id} is in Chapter ${chapter?.roman}: ${chapter?.title}.`,
    };
  }
  return L(section.gist + ipcBit + flagBit, points, "Do not cite the IPC number in a post-1 July 2024 charge-sheet unless s. 358 savings apply.", quiz);
}

export function bnsLessonFor(id: string): BnsLesson | undefined {
  const rich = BNS_LESSONS[id];
  if (rich) return rich;
  const section = bnsSectionById(id);
  if (!section) return undefined;
  return fallbackLesson(section);
}

export function bnsDrillsForIds(ids: string[]): Array<BnsDrill & { sectionId: string }> {
  return ids
    .map((sectionId) => {
      const lesson = bnsLessonFor(sectionId);
      if (!lesson) return null;
      return { ...lesson.quiz, sectionId };
    })
    .filter((d): d is BnsDrill & { sectionId: string } => Boolean(d));
}
