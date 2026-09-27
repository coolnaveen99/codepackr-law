import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_16A: Judgment[] = [
  {
    id: 'dhananjoy-chatterjee-1994',
    caseName: 'Dhananjoy Chatterjee v. State of W.B.',
    shortName: 'Dhananjoy Chatterjee (Capital Punishment)',
    citation: '(1994) 2 SCC 220',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1994,
    bench: '2-Judge Bench',
    judges: ['A.S. Anand, J.', 'N.P. Singh, J.'],
    subject: 'Criminal Law',
    topics: ['Rarest of Rare Doctrine', 'Rape and Murder of Minor', 'Circumstantial Evidence', 'Death Penalty'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 302', 'Section 376', 'Death Penalty', 'Bachan Singh'],
    summary:
      'Landmark Supreme Court decision affirming the death penalty for a security guard who raped and murdered an 18-year-old schoolgirl inside her apartment. Held that when a person in a position of trust acts as a predator, the crime shocks the collective conscience of society, squarely satisfying the "rarest of rare" doctrine.',
    facts: [
      'The appellant Dhananjoy Chatterjee was an apartment security guard in Bhawanipore, Calcutta.',
      'He had previously teased the victim Hetal Parekh, prompting her mother to complain to the housing society, which transferred him.',
      'Harboring revenge, he waited until the victim was alone in her flat, gained entry by virtue of his uniform, brutally raped her, and suffocated her to death.',
      'He absconded with her wristwatch and other articles. The trial court and Calcutta High Court sentenced him to death.',
    ],
    issues: [
      'Whether the circumstantial evidence proved the guilt of the accused beyond reasonable doubt.',
      'Whether the case fell within the "rarest of rare" category warranting the imposition of the death penalty under Section 354(3) CrPC.',
    ],
    arguments: {
      appellant: [
        'There were no eyewitnesses; the case rested solely on circumstantial recovery of the wristwatch, which was planted by police.',
      ],
      respondent: [
        'The security guard abused his fiduciary custody of the apartment complex to violate and kill a helpless young girl in her own home; mitigating circumstances are non-existent.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 302 & 376 IPC / Section 103 & 64 BNS',
        title: 'Punishment for murder and rape',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
    ],
    reasoning: [
      {
        heading: 'Complete chain of circumstantial evidence',
        explanation:
          'Anand, J. held that the presence of the accused in the building, button torn from his shirt found near the dead body, recovery of the victim watch from his possession, and medical evidence of semen stains formed an unbroken chain of circumstantial evidence.',
      },
      {
        heading: 'Collective conscience of society and rarest of rare',
        explanation:
          'A security guard appointed to protect residents turned into a rapist and murderer. The breach of trust, cold-blooded premeditation, and brutality towards a young girl shocked the conscience of the community. In such cases, imposing a lesser sentence than death would undermine public confidence in the efficacy of the law.',
      },
    ],
    decision:
      'Appeal dismissed. Conviction under Section 302 and 376 IPC and confirmation of death penalty upheld.',
    holding:
      'Rape and murder by a security guard appointed to protect the victim satisfies the rarest of rare doctrine, justifying capital punishment.',
    ratioDecidendi:
      'Under the Bachan Singh sentencing doctrine, the measure of punishment must reflect the gravity of the crime and the breach of fiduciary trust. Where a security guard commits the premeditated rape and murder of a defenseless resident, the aggravating circumstances overwhelmingly outweigh any mitigating factors, warranting the extreme penalty of death.',
    obiterDicta:
      'The court must respond to the cry of society for justice in heinous crimes against women and children.',
    relatedCases: [
      {
        judgmentId: 'bachan-singh-1980',
        caseName: 'Bachan Singh v. State of Punjab',
        citation: '(1980) 2 SCC 684',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Application of Bachan Singh "rarest of rare" doctrine.',
      'Breach of security guard fiduciary trust as an aggravating circumstance.',
      'Forensic and circumstantial chain in capital sentencing.',
    ],
    mcqs: [
      {
        id: 'dhananjoy-mcq-1',
        question:
          'In Dhananjoy Chatterjee v. State of W.B. (1994), what aggravating factor heavily influenced the confirmation of the death penalty?',
        options: [
          'The accused had multiple political affiliations',
          'The accused abused his fiduciary position as an apartment security guard to commit rape and murder',
          'The offence occurred on a national holiday',
          'The accused refused to speak at the trial',
        ],
        correctIndex: 1,
        explanation:
          'The Court emphasized that the accused was a security guard whose duty was to protect the victim, making the breach of trust an overwhelming aggravating factor.',
      },
    ],
  },
  {
    id: 'balchand-bail-1977',
    caseName: 'State of Rajasthan v. Balchand',
    shortName: 'Balchand (Bail is the Rule)',
    citation: '(1977) 4 SCC 308',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1977,
    bench: '2-Judge Bench',
    judges: ['V.R. Krishna Iyer, J.', 'D.A. Desai, J.'],
    subject: 'Criminal Procedure',
    topics: ['Bail is the Rule', 'Jail is the Exception', 'Section 437/439 CrPC', 'Personal Liberty Article 21'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 439', 'BNSS 483', 'Bail is the Rule', 'Krishna Iyer', 'Article 21'],
    summary:
      'Historic criminal jurisprudence precedent authored by Justice V.R. Krishna Iyer coining the immortal principle of Indian criminal law: "The basic rule may perhaps be tersely put as bail, not jail, except where there are circumstances suggestive of fleeing from justice or thwarting the course of justice."',
    facts: [
      'The respondent Balchand was convicted by the trial court under Section 302/34 IPC.',
      'The High Court acquitted him on appeal.',
      'The State of Rajasthan filed a petition for Special Leave to Appeal before the Supreme Court under Article 136 and sought his arrest and detention pending appeal.',
      'Balchand applied for bail pending the disposal of the State appeal.',
    ],
    issues: [
      'What is the guiding judicial policy governing the grant of bail pending trial and appellate proceedings under the Code of Criminal Procedure.',
      'Under what circumstances should the court depart from the primary rule of granting bail.',
    ],
    arguments: {
      appellant: [
        'The respondent was convicted of murder by the Sessions Court; an acquittal appeal by the State should entail detention of the accused to ensure presence.',
      ],
      respondent: [
        'The respondent was acquitted by the High Court and enjoys a strengthened presumption of innocence; pretrial detention is an unjustified deprivation of liberty under Article 21.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'bail',
        section: 'Section 437 & 439 CrPC / Section 480 & 483 BNSS',
        title: 'Special powers of High Court or Court of Session regarding bail',
        subjectSlug: 'bnss',
        topicId: 'bail',
      },
    ],
    reasoning: [
      {
        heading: 'Bail is the rule, jail is the exception',
        explanation:
          'Krishna Iyer, J. articulated his foundational aphorism: "The basic rule may perhaps be tersely put as bail, not jail, except where there are circumstances suggestive of fleeing from justice or thwarting the course of justice or creating other troubles in the shape of repeating offences or intimidating witnesses and the like by the petitioner who seeks enlargement on bail from the court."',
      },
      {
        heading: 'Pre-trial and appellate liberty',
        explanation:
          'Deprivation of freedom by incarceration must be the rare exception, not the routine default. Since Balchand had an acquittal in his favor and there was no apprehension of abscondence, bail was granted on a personal bond.',
      },
    ],
    decision:
      'Bail application allowed. Balchand released on his own bond in the sum of Rs. 10,000 with one surety.',
    holding:
      'Bail is the rule and jail is the exception under the Code of Criminal Procedure, anchored in Article 21 personal liberty.',
    ratioDecidendi:
      'Under the Code of Criminal Procedure and Article 21 of the Constitution, the fundamental principle governing criminal custody is "bail, not jail". Incarceration before conviction or pending appeal is warranted only when there is reasonable apprehension of absconding, tampering with evidence, or intimidating witnesses.',
    obiterDicta:
      'The law of bail touches the core of individual freedom; keeping citizens detained when attendance can be secured by bonds violates democratic liberty.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The origin of the classic aphorism "Bail is the rule, jail is the exception".',
      'Justice V.R. Krishna Iyer celebrated formulation on Section 439 CrPC.',
      'Constitutional anchorage of bail jurisprudence in Article 21.',
    ],
    mcqs: [
      {
        id: 'balchand-mcq-1',
        question:
          'In which landmark decision did Justice V.R. Krishna Iyer coin the classic rule "Bail, not jail"?',
        options: [
          'State of Rajasthan v. Balchand (1977)',
          'Maneka Gandhi v. Union of India (1978)',
          'Sunil Batra v. Delhi Administration (1978)',
          'DK Basu v. State of W.B. (1997)',
        ],
        correctIndex: 0,
        explanation:
          'Justice Krishna Iyer coined "bail, not jail" in State of Rajasthan v. Balchand (1977).',
      },
    ],
  },
  {
    id: 'sanjay-chandra-bail-2012',
    caseName: 'Sanjay Chandra v. CBI (2G Bail Case)',
    shortName: 'Sanjay Chandra (2G Bail)',
    citation: '(2012) 1 SCC 40',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2012,
    bench: '2-Judge Bench',
    judges: ['G.S. Singhvi, J.', 'H.L. Dattu, J.'],
    subject: 'Criminal Procedure',
    topics: ['Bail in Economic Offences', 'Pre-Trial Detention', 'Presumption of Innocence', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 439', 'BNSS 483', 'Bail', '2G Scam', 'Economic Offences'],
    summary:
      'Landmark Supreme Court ruling on bail in multi-crore economic offences. Granted bail to corporate executives in the 2G Spectrum Scam, holding that pre-trial detention cannot be punitive or used as a measure to satisfy public outrage. Reaffirmed that the primary purpose of bail is to secure the presence of the accused at trial.',
    facts: [
      'Managing directors and corporate executives of major telecom companies were arrested by the CBI in the 2G Spectrum allocation case.',
      'They were charged with criminal conspiracy, cheating, and corruption involving alleged public revenue losses of thousands of crores.',
      'The Special CBI Court and Delhi High Court rejected their bail applications on the ground that the offences were grave economic crimes against the nation.',
      'The corporate executives appealed to the Supreme Court seeking bail under Section 439 CrPC.',
    ],
    issues: [
      'Whether the magnitude and severity of an economic scam alone justifies prolonged pre-trial incarceration without bail.',
      'What is the true constitutional object of pre-trial detention in criminal jurisprudence.',
    ],
    arguments: {
      appellant: [
        'The investigation was complete, chargesheet filed, evidence was documentary and seized by the CBI, and trial would take years; detention was purely punitive.',
      ],
      respondent: [
        'Economic offences destroy the economic health of the nation; influential corporate executives could tamper with witnesses or flee.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'bail',
        section: 'Section 439 CrPC / Section 483 BNSS',
        title: 'Special powers of High Court or Court of Session regarding bail',
        subjectSlug: 'bnss',
        topicId: 'bail',
      },
    ],
    reasoning: [
      {
        heading: 'Detention before conviction is not punitive',
        explanation:
          'Dattu, J. held that detention in custody pending completion of trial is not intended to be punitive. In our jurisprudence, an accused is presumed innocent until proved guilty. The court must not withhold bail merely as an anticipation of post-conviction punishment or to satisfy public outrage.',
      },
      {
        heading: 'Prolonged incarceration and trial delay',
        explanation:
          'The chargesheet cited hundreds of witnesses and thousands of pages of documents. The trial was unlikely to conclude for years. When the evidence is entirely documentary and in court custody, prolonged incarceration violates the fundamental right to speedy trial and personal liberty under Article 21.',
      },
    ],
    decision:
      'Appeals allowed. Bail granted to all appellants on furnishing personal bonds of Rs. 5 Lakh each with two solvent sureties.',
    holding:
      'Pre-trial detention cannot be punitive. Bail cannot be denied merely on the magnitude of an economic offence when evidence is documentary and trial is delayed.',
    ratioDecidendi:
      'In bail jurisprudence under Section 439 CrPC, pre-trial detention cannot be transformed into pre-trial punishment. Even in high-profile economic offences involving large financial stakes, if the investigation is complete, evidence is documentary, and there is no risk of absconding or tampering, bail must be granted to uphold the constitutional guarantee of liberty under Article 21.',
    obiterDicta:
      'Bail is not to be withheld as a punishment; the only legitimate purpose of pre-trial custody is to ensure that the accused submits to the jurisdiction of the court.',
    relatedCases: [
      {
        judgmentId: 'balchand-bail-1977',
        caseName: 'State of Rajasthan v. Balchand',
        citation: '(1977) 4 SCC 308',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading judgment on bail in high-profile economic offences.',
      'Reaffirmation that pre-trial custody cannot be punitive.',
      'Presumption of innocence must guide bail decisions under Section 439 CrPC.',
    ],
    mcqs: [
      {
        id: 'sanjay-chandra-mcq-1',
        question:
          'In Sanjay Chandra v. CBI (2012), what did the Supreme Court emphasize regarding pre-trial detention in economic crimes?',
        options: [
          'It must be maintained until all witnesses are examined',
          'It is not intended to be punitive and bail cannot be withheld as punishment',
          'Bail is strictly barred for claims over Rs. 100 crore',
          'Accused must surrender all corporate assets to get bail',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that pre-trial detention is not punitive, and bail cannot be withheld merely to punish the accused before trial.',
      },
    ],
  },
  {
    id: 'p-chidambaram-bail-2020',
    caseName: 'P. Chidambaram v. Directorate of Enforcement',
    shortName: 'P. Chidambaram (Bail & Sealed Cover)',
    citation: '(2020) 13 SCC 791',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2020,
    bench: '3-Judge Bench',
    judges: ['R. Banumathi, J.', 'A.S. Bopanna, J.', 'H. Rishikesh Roy, J.'],
    subject: 'Criminal Procedure / Special Acts',
    topics: ['Bail Triple Test', 'Sealed Cover Jurisprudence', 'Economic Offences', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 439', 'PMLA', 'Bail', 'Triple Test', 'Sealed Cover'],
    summary:
      'Authoritative 3-judge bench ruling reiterating the classical "triple test" for bail (flight risk, tampering with evidence, influencing witnesses) in economic offences. Strongly disapproved the practice of courts perusing secret materials produced by prosecution in "sealed covers" to deny bail without disclosing them to the accused.',
    facts: [
      'Former Union Finance Minister P. Chidambaram was arrested by the Enforcement Directorate in the INX Media money laundering case.',
      'He had already spent over 100 days in custody, and the investigation was substantially complete.',
      'The Delhi High Court rejected his regular bail application, observing that the economic offence was of grave magnitude, after perusing secret case diary materials produced by the ED in a sealed cover.',
      'Chidambaram appealed to the Supreme Court.',
    ],
    issues: [
      'What are the mandatory parameters governing the "triple test" for granting bail in economic offences.',
      'Is it permissible for a court to rely on secret unproven prosecution allegations in a sealed cover to deny bail to an accused.',
    ],
    arguments: {
      appellant: [
        'The appellant satisfied all 3 prongs of the triple test: he was a Senior Advocate and MP (no flight risk), documents were seized (no tampering), and denying bail based on secret sealed covers destroyed natural justice.',
      ],
      respondent: [
        'Economic offences are grave crimes; the accused was influential enough to influence witnesses even from custody.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'bail',
        section: 'Section 439 CrPC / Section 483 BNSS',
        title: 'Special powers of High Court or Court of Session regarding bail',
        subjectSlug: 'bnss',
        topicId: 'bail',
      },
    ],
    reasoning: [
      {
        heading: 'Satisfaction of the "Triple Test"',
        explanation:
          'Banumathi, J. held that the basic criteria for bail are: (1) whether the accused is a flight risk; (2) whether there is a reasonable apprehension of tampering with evidence; (3) whether there is likelihood of influencing witnesses. The appellant satisfied all 3 tests. Gravity of offence alone cannot be an insurmountable bar.',
      },
      {
        heading: 'Disapproval of sealed cover jurisprudence in bail',
        explanation:
          'The Court observed that while a judge can inspect case diaries to satisfy judicial conscience, perusing secret sealed cover materials submitted by the prosecution and recording findings based on them to deny bail without disclosing them to the accused violates fair procedure under Article 21.',
      },
    ],
    decision:
      'Appeal allowed. Bail granted to the appellant on furnishing personal bond of Rs. 2 Lakh with two sureties.',
    holding:
      'Bail granted on satisfaction of triple test. Reliance on secret sealed cover allegations to deny bail violates Article 21.',
    ratioDecidendi:
      'In adjudicating bail applications under Section 439 CrPC, courts must evaluate the "triple test" (flight risk, tampering with evidence, influencing witnesses). While the gravity of the offence is relevant, it cannot be used to indefinitely detain an accused. Courts cannot deny bail by placing reliance on untested materials produced by investigating agencies in sealed covers without disclosure to the accused.',
    obiterDicta:
      'Judicial process must remain transparent; sealed covers should not become an administrative weapon to bypass statutory disclosure.',
    relatedCases: [
      {
        judgmentId: 'sanjay-chandra-bail-2012',
        caseName: 'Sanjay Chandra v. CBI',
        citation: '(2012) 1 SCC 40',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The classic "Triple Test" formulation for bail under Section 439 CrPC.',
      'Supreme Court criticism of "sealed cover" adjudication in bail matters.',
      'Bail in economic offences cannot be rejected solely on gravity.',
    ],
    mcqs: [
      {
        id: 'chidambaram-mcq-1',
        question:
          'In P. Chidambaram v. Directorate of Enforcement (2020), which practice in bail hearings was strongly disapproved by the Supreme Court?',
        options: [
          'Granting bail on personal bond',
          'Denying bail based on secret materials submitted by prosecution in a sealed cover',
          'Allowing advocates to argue for more than 30 minutes',
          'Fixing bail conditions requiring passport deposit',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court strongly disapproved the practice of relying on secret sealed cover materials to deny bail without disclosing them to the accused.',
      },
    ],
  },
  {
    id: 'gurcharan-singh-bail-1978',
    caseName: 'Gurcharan Singh v. State (Delhi Admn.)',
    shortName: 'Gurcharan Singh (Section 439 Bail Guidelines)',
    citation: '(1978) 1 SCC 118',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1978,
    bench: '2-Judge Bench',
    judges: ['P.K. Goswami, J.', 'P.N. Shinghal, J.'],
    subject: 'Criminal Procedure',
    topics: ['Section 439 CrPC', 'Cancellation of Bail', 'Non-Bailable Offences', 'Section 437 vs 439'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 439', 'Section 437', 'BNSS 483', 'Bail Guidelines', 'Cancellation'],
    summary:
      'The foundational locus classicus on the distinction between Section 437 and Section 439 CrPC and the principles governing cancellation of bail. Held that the High Court and Sessions Court have unfettered discretion under Section 439 not restricted by Section 437 conditions, but such discretion must be exercised judicially, and bail once granted should not be cancelled lightly.',
    facts: [
      'Gurcharan Singh and other police officers were prosecuted for the custodial murder of a suspect under Section 302/34 IPC.',
      'The Sessions Judge granted bail under Section 439 CrPC.',
      'The Delhi High Court, on an application by the prosecution, cancelled the bail on the ground that in offences punishable with death or life imprisonment, Section 437(1) creates a bar against granting bail.',
      'The accused appealed to the Supreme Court against the cancellation of their bail.',
    ],
    issues: [
      'Does the restriction in Section 437(1) CrPC (barring bail where reasonable grounds exist to believe accused is guilty of death/life imprisonment offences) bind the High Court or Sessions Court under Section 439.',
      'What are the legal grounds on which bail once granted can be cancelled.',
    ],
    arguments: {
      appellant: [
        'Section 439 confers overriding special powers on the High Court and Sessions Court; bail cannot be cancelled unless the accused has misused liberty or tampered with witnesses.',
      ],
      respondent: [
        'In heinous police brutality murders, Section 437 limitations must guide the exercise of discretion under Section 439.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'bail',
        section: 'Section 437 & 439 CrPC / Section 480 & 483 BNSS',
        title: 'Bail in non-bailable offences and special powers of High Court and Sessions Court',
        subjectSlug: 'bnss',
        topicId: 'bail',
      },
    ],
    reasoning: [
      {
        heading: 'Distinction between Section 437 and Section 439 CrPC',
        explanation:
          'Goswami, J. held that Section 439 confers wide and unfettered powers on the High Court and Sessions Court. The statutory restrictions placed on Magistrates under Section 437(1) do not govern Section 439. However, the High Court must have regard to the nature of the offence and the circumstances of the case.',
      },
      {
        heading: 'Grounds for cancellation of bail',
        explanation:
          'Cancellation of bail is a harsh measure. Bail once granted can be cancelled only on supervening circumstances, such as: the accused abusing freedom by tampering with evidence, intimidating witnesses, fleeing justice, or committing further offences. Bail cannot be cancelled merely on a reassessment of the original facts.',
      },
    ],
    decision:
      'Appeals allowed in part. Principles governing Section 439 bail and cancellation formulated.',
    holding:
      'High Court power under Section 439 is not fettered by Section 437 restrictions. Bail once granted can be cancelled only for supervening misconduct or perversity.',
    ratioDecidendi:
      'Under the Code of Criminal Procedure, the jurisdiction of the High Court and Sessions Court under Section 439 is wide and independent of the restrictions contained in Section 437. Once bail has been granted by a competent court, it should not be cancelled lightly unless the court finds supervening circumstances establishing that the accused has interfered with the administration of justice or abused his liberty.',
    obiterDicta:
      'Courts must exercise great circumspection before cancelling an order granting personal freedom.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The foundational authority on Section 439 CrPC special bail powers.',
      'Comparison of Section 437 Magistrate powers vs Section 439 Sessions/High Court powers.',
      'Strict legal grounds for cancellation of bail.',
    ],
    mcqs: [
      {
        id: 'gurcharan-mcq-1',
        question:
          'In Gurcharan Singh v. State (Delhi Admn.) (1978), what did the Supreme Court hold regarding the relation between Section 437 and Section 439 CrPC?',
        options: [
          'Section 439 is completely subordinate to Section 437',
          'The restrictions on Magistrates under Section 437(1) do not fetter the special powers of High Court under Section 439',
          'Only Magistrates can grant bail in murder cases',
          'High Courts cannot cancel bail granted by Sessions Court',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the statutory restrictions on Magistrates under Section 437(1) do not fetter the special powers of the High Court or Sessions Court under Section 439.',
      },
    ],
  },
  {
    id: 'kalyan-chandra-sarkar-2004',
    caseName: 'Kalyan Chandra Sarkar v. Rajesh Ranjan @ Pappu Yadav',
    shortName: 'Kalyan Chandra Sarkar (Successive Bail)',
    citation: '(2004) 7 SCC 528',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2004,
    bench: '2-Judge Bench',
    judges: ['N. Santosh Hegde, J.', 'S.B. Sinha, J.'],
    subject: 'Criminal Procedure',
    topics: ['Successive Bail Applications', 'Change in Circumstances', 'Prima Facie Case', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 439', 'BNSS 483', 'Pappu Yadav', 'Successive Bail', 'Bail Reasoned Order'],
    summary:
      'Authoritative Supreme Court ruling on successive bail applications under Section 439 CrPC. Held that while res judicata does not strictly apply to bail, a successive bail application cannot be entertained without demonstrating a substantial change in circumstances or fresh legal grounds, and courts granting bail in heinous crimes must pass reasoned orders demonstrating application of mind to prima facie evidence.',
    facts: [
      'Member of Parliament Rajesh Ranjan @ Pappu Yadav was prosecuted for the political murder of trade union leader and MLA Ajit Sarkar.',
      'His bail applications had been rejected repeatedly by the High Court and Supreme Court on merits.',
      'Without any change in circumstances, the Patna High Court subsequently granted him bail on his eighth successive bail application without recording any reasons answering the earlier rejections.',
      'The victims brother, Kalyan Chandra Sarkar, appealed to the Supreme Court challenging the repeated entertainability of bail.',
    ],
    issues: [
      'Can an accused file successive bail applications on the same grounds without any material change in circumstances.',
      'Is the court bound to record reasons dealing with prima facie material when granting bail in serious non-bailable offences.',
    ],
    arguments: {
      appellant: [
        'The High Court acted as an appellate court over earlier dismissal orders without any new fact; successive bail petitions cannot be allowed to degenerate into forum shopping.',
      ],
      respondent: [
        'Personal liberty under Article 21 permits an accused to apply for bail repeatedly; earlier dismissals do not operate as res judicata.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'bail',
        section: 'Section 439 CrPC / Section 483 BNSS',
        title: 'Special powers of High Court or Court of Session regarding bail — Requirement of reasons',
        subjectSlug: 'bnss',
        topicId: 'bail',
      },
    ],
    reasoning: [
      {
        heading: 'Requirement of change in circumstances for successive bail',
        explanation:
          'Santosh Hegde, J. held that although the principle of res judicata does not apply to bail applications, a court entertaining a successive bail application must examine whether there has been a material change in the fact situation or law since the rejection of the earlier application. In the absence of a change in circumstances, entertaining repetitive applications leads to judicial indiscipline.',
      },
      {
        heading: 'Mandatory recording of reasons',
        explanation:
          'While a court hearing a bail petition should not conduct a mini-trial, it is under a legal obligation to pass a reasoned order indicating prima facie application of mind to the nature of the crime, evidence on record, and criminal antecedents.',
      },
    ],
    decision:
      'Appeal allowed. High Court order granting bail set aside; accused directed to be taken into custody immediately.',
    holding:
      'Successive bail applications require demonstrable change in circumstances. Courts must pass reasoned orders considering prima facie material.',
    ratioDecidendi:
      'Under Section 439 CrPC, while res judicata does not bar successive bail petitions, an accused cannot repeatedly approach the court on the same grounds without demonstrating a fresh change in circumstances or subsequent legal developments. A court granting bail in serious offences must record reasons indicating prima facie consideration of the evidence.',
    obiterDicta:
      'Judicial discipline requires that coordinate benches respect earlier rejections unless concrete new developments have emerged.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Law governing successive bail applications under Section 439 CrPC.',
      'Requirement of "material change in circumstances".',
      'Mandatory recording of reasons showing prima facie application of mind.',
    ],
    mcqs: [
      {
        id: 'kalyan-sarkar-mcq-1',
        question:
          'In Kalyan Chandra Sarkar v. Rajesh Ranjan @ Pappu Yadav (2004), what is required for a successive bail application to be maintainable?',
        options: [
          'Payment of additional court fees',
          'Demonstrable material change in circumstances or fresh legal grounds',
          'Change of defense advocate',
          'Lapse of minimum 3 months',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that successive bail applications cannot be entertained without demonstrating a material change in circumstances or fresh legal grounds.',
      },
    ],
  },
  {
    id: 'som-nath-thapa-1996',
    caseName: 'State of Maharashtra v. Som Nath Thapa',
    shortName: 'Som Nath Thapa (Framing of Charge)',
    citation: '(1996) 4 SCC 659',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1996,
    bench: '3-Judge Bench',
    judges: ['M.M. Punchhi, J.', 'K. Ramaswamy, J.', 'K. Venkataswami, J.'],
    subject: 'Criminal Procedure',
    topics: ['Framing of Charge', 'Section 227/228 CrPC', 'Prima Facie Standard', 'Grave Suspicion Test'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 227', 'Section 228', 'BNSS 250', 'Framing of Charge', 'Prima Facie'],
    summary:
      'Authoritative 3-judge bench decision on the threshold test for framing charges under Sections 227 and 228 CrPC (now Sections 250 and 251 BNSS). Held that at the stage of framing charges, the court is not required to determine whether the evidence is sufficient for conviction, but only whether there exists a "grave suspicion" that the accused committed the offence.',
    facts: [
      'Arising out of the 1993 Bombay Serial Bomb Blasts conspiracy prosecutions under TADA and the Penal Code.',
      'Customs officials and peripheral facilitators were prosecuted for allowing landing of RDX explosives and automatic rifles on coastal beaches.',
      'The Designated TADA Court discharged certain customs officials on the ground that the evidence did not prove their knowledge of the bomb blast conspiracy beyond doubt.',
      'The State of Maharashtra appealed to the Supreme Court against the discharge orders.',
    ],
    issues: [
      'What is the precise evidentiary standard applicable at the stage of framing charges under Sections 227 and 228 CrPC.',
      'Does "grave suspicion" suffice to frame a charge, or must the prosecution establish a prima facie certainty of conviction.',
    ],
    arguments: {
      appellant: [
        'At the stage of framing charges, the court does not weigh evidence as at trial; customs officers knowingly permitted contraband landings for bribes, which raises grave suspicion of complicity.',
      ],
      respondent: [
        'The officers had no knowledge that the smuggled cargo contained RDX for terror attacks; charge of terror conspiracy cannot stand on mere suspicion.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 227 & 228 CrPC / Section 250 & 251 BNSS',
        title: 'Discharge and framing of charge in Sessions Trial',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'The test of "Grave Suspicion"',
        explanation:
          'Punchhi, J. held: "If on the basis of materials on record, a court could come to the conclusion that commission of the offence is a probable consequence, a case for framing of charge exists. To put it differently, if the court were to think that there is a ground for presuming that the accused has committed an offence, it can frame the charge. Even strong suspicion leading to presume the commission of an offence would warrant framing of charge."',
      },
      {
        heading: 'No mini-trial at the charge stage',
        explanation:
          'The court is not expected to weigh the evidence as if it were conducting a trial. If there is prima facie material raising grave suspicion that the accused was involved, the matter must proceed to trial. Discharging the customs officials who enabled the landing of explosive consignments was premature and erroneous.',
      },
    ],
    decision:
      'Appeals allowed. Discharge orders set aside; Designated Court directed to frame charges under conspiracy and TADA provisions against the accused officials.',
    holding:
      'Grave suspicion leading to a ground for presuming that the accused committed an offence is sufficient to frame a charge under Section 228 CrPC.',
    ratioDecidendi:
      'Under Sections 227 and 228 CrPC (Sections 250 and 251 BNSS), at the stage of framing charges, the prosecution is not required to establish guilt beyond reasonable doubt. If the evidentiary material on record gives rise to a grave and strong suspicion that the accused has committed the offence, the court is fully justified in framing charges and cannot discharge the accused.',
    obiterDicta:
      'A discharge at the inception of trial must be confined to cases where the allegations, even if accepted at face value, disclose no legal offence whatsoever.',
    relatedCases: [
      {
        judgmentId: 'prafulla-samal-1979',
        caseName: 'Union of India v. Prafulla Kumar Samal',
        citation: '(1979) 3 SCC 4',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The classic "Grave Suspicion" test for framing charges under Section 228 CrPC.',
      'Prohibition against conducting a mini-trial at the Section 227 stage.',
      'Distinction between mere suspicion (discharge) and grave suspicion (charge).',
    ],
    mcqs: [
      {
        id: 'som-nath-mcq-1',
        question:
          'In State of Maharashtra v. Som Nath Thapa (1996), what standard of proof is required for framing charges under Section 228 CrPC?',
        options: [
          'Proof beyond reasonable doubt',
          'Preponderance of probabilities',
          'Grave suspicion leading to presume commission of offence',
          'Absolute certainty of guilt',
        ],
        correctIndex: 2,
        explanation:
          'The Supreme Court held that grave suspicion leading to presume the commission of an offence is sufficient for framing charges.',
      },
    ],
  },
  {
    id: 'prafulla-samal-1979',
    caseName: 'Union of India v. Prafulla Kumar Samal',
    shortName: 'Prafulla Kumar Samal (Discharge Principles)',
    citation: '(1979) 3 SCC 4',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1979,
    bench: '2-Judge Bench',
    judges: ['S. Murtaza Fazal Ali, J.', 'A.D. Koshal, J.'],
    subject: 'Criminal Procedure',
    topics: ['Section 227 CrPC Discharge', 'Special Judge Trial', 'Test of Grave Suspicion', 'Four Cardinal Principles'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 227', 'BNSS 250', 'Discharge', 'Fazal Ali', 'Grave Suspicion'],
    summary:
      'Locus classicus authored by Justice S. Murtaza Fazal Ali codifying the four cardinal principles governing the discharge of an accused under Section 227 CrPC (now Section 250 BNSS). Held that the judge has the power to sift and weigh evidence for the limited purpose of finding whether a prima facie case exists, but cannot conduct a full roving enquiry as at trial.',
    facts: [
      'Prafulla Kumar Samal, a senior public servant, and a private landholder were charge-sheeted under the Prevention of Corruption Act and Section 120B IPC for allegedly leasing government lands at exorbitant rates.',
      'The Special Judge discharged both accused under Section 227 CrPC holding that the materials showed no conspiracy or illegal benefit.',
      'The High Court dismissed the revisions filed by the Union of India, which appealed to the Supreme Court.',
    ],
    issues: [
      'What are the precise parameters and scope of judicial power exercised by a Sessions Judge or Special Judge when considering discharge under Section 227 CrPC.',
      'How should a court distinguish between a mere suspicion and a grave suspicion at the threshold of trial.',
    ],
    arguments: {
      appellant: [
        'The judge at the stage of Section 227 must mechanically frame charges if any suspicion exists, and leave the evaluation of evidence to the trial.',
      ],
      respondent: [
        'The Section 227 discharge provision is intended to protect innocent citizens from prolonged harassment of baseless trials; the judge is not a mere post office.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 227 CrPC / Section 250 BNSS',
        title: 'Discharge of accused in Sessions Trial when no sufficient ground exists',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'The Four Cardinal Principles of Section 227 CrPC',
        explanation:
          'Fazal Ali, J. formulated the celebrated 4 principles: (1) The Judge has the undoubted power to sift and weigh the evidence for the limited purpose of finding out whether or not a prima facie case against the accused has been made out; (2) Where the materials disclose grave suspicion which has not been properly explained, the court is fully justified in framing a charge; (3) The test to determine a prima facie case depends upon the facts of each case; (4) While exercising jurisdiction under Section 227, the Judge cannot act merely as a post office or a mouthpiece of the prosecution, but must consider broad probabilities.',
      },
      {
        heading: 'Mere suspicion vs grave suspicion',
        explanation:
          'If two views are equally possible and the evidence gives rise to some suspicion but not grave suspicion, the Judge will be fully empowered to discharge the accused. Since the land transaction involved no criminal conspiracy, the discharge was affirmed.',
      },
    ],
    decision:
      'Appeal dismissed. Order of the Special Judge and High Court discharging the accused under Section 227 CrPC affirmed.',
    holding:
      'Judge is not a mere post office under Section 227 CrPC. Court can sift evidence for limited purpose of deciding if grave suspicion exists.',
    ratioDecidendi:
      'Under Section 227 CrPC (Section 250 BNSS), a judge considering a plea of discharge does not act as a mere mouthpiece of the prosecution. The court possesses the power to sift and evaluate the broad probabilities of the case for the limited purpose of determining whether a prima facie case exists. Where the evidence discloses only mere suspicion, the accused is entitled to be discharged.',
    obiterDicta:
      'Section 227 was deliberately incorporated to prevent frivolous and malicious prosecutions from burdening the judiciary and harassing innocent citizens.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The 4 cardinal principles of Section 227 CrPC discharge.',
      'Justice Murtaza Fazal Ali classic formulation: "Judge is not a post office".',
      'Distinction between mere suspicion (discharge) and grave suspicion (charge).',
    ],
    mcqs: [
      {
        id: 'prafulla-samal-mcq-1',
        question:
          'In Union of India v. Prafulla Kumar Samal (1979), how did the Supreme Court describe the role of the judge under Section 227 CrPC?',
        options: [
          'A rubber stamp for the police report',
          'A mere post office or mouthpiece of the prosecution',
          'Not a mere post office; has the power to sift evidence for the limited purpose of finding a prima facie case',
          'An appellate court deciding final guilt',
        ],
        correctIndex: 2,
        explanation:
          'The Court held that the judge is not a mere post office or mouthpiece of the prosecution and can sift evidence to see if a prima facie case exists.',
      },
    ],
  },
  {
    id: 'sajjan-kumar-cbi-2010',
    caseName: 'Sajjan Kumar v. CBI',
    shortName: 'Sajjan Kumar (Framing of Charge Principles)',
    citation: '(2010) 9 SCC 368',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2010,
    bench: '2-Judge Bench',
    judges: ['P. Sathasivam, J.', 'B.S. Chauhan, J.'],
    subject: 'Criminal Procedure',
    topics: ['Framing of Charge', 'Section 227/228 CrPC', '1984 Anti-Sikh Riots', 'Scope of Discharge'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 227', 'Section 228', 'BNSS 250', 'Charge Guidelines', 'Sathasivam J'],
    summary:
      'Comprehensive Supreme Court decision synthesizing thirty years of jurisprudence on framing of charges and discharge under Sections 227 and 228 CrPC. Arising out of the 1984 Anti-Sikh Riots prosecutions against politician Sajjan Kumar, the Court summarized eight comprehensive rules governing judicial discretion at the threshold of trial.',
    facts: [
      'Following the assassination of Prime Minister Indira Gandhi, violent anti-Sikh riots erupted in Delhi in November 1984.',
      'Decades later, based on the Justice Nanavati Commission report, the CBI registered cases and filed chargesheets against former Member of Parliament Sajjan Kumar for murder, rioting, and promoting communal enmity.',
      'The Special CBI Judge framed charges under Sections 302, 147, 148, 149, 153A, and 120B IPC.',
      'Sajjan Kumar challenged the framing of charges, arguing that earlier police inquiries had closed the case and delayed witness statements were unreliable.',
    ],
    issues: [
      'What are the comprehensive legal principles governing discharge and framing of charges under Sections 227 and 228 CrPC.',
      'Can delayed statements or prior closure reports justify discharging an accused when eyewitness affidavits raise grave suspicion.',
    ],
    arguments: {
      appellant: [
        'The delay of over two decades in naming the accused and inconsistencies between earlier affidavits and CBI statements destroyed the prosecution case at inception.',
      ],
      respondent: [
        'At the stage of framing charges, credibility and reliability of eyewitnesses cannot be tested through cross-examination; prime facie grave suspicion warrants trial.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 227 & 228 CrPC / Section 250 & 251 BNSS',
        title: 'Discharge and framing of charge in Sessions Trial',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Synthesis of Eight Principles on Charge Framing',
        explanation:
          'Sathasivam, J. codified 8 principles: (1) Judge has power to sift materials to determine prima facie case; (2) Grave suspicion warrants charge; (3) Cannot conduct a mini-trial; (4) Court cannot act as a post office; (5) If two views are equally possible and materials give rise to only mere suspicion, discharge is proper; (6) Detailed evaluation of witness veracity is impermissible at charge stage; (7) Defence materials cannot be looked into unless of unimpeachable character; (8) Delay in lodging FIR or recording statements cannot be a ground for discharge if prima facie allegations exist.',
      },
    ],
    decision:
      'Appeal dismissed. Order framing charges under Sections 302/149/120B IPC affirmed; trial directed to proceed expeditiously.',
    holding:
      'Eight comprehensive principles codified for Section 227/228 CrPC. Delay in witness statements cannot justify discharge if grave suspicion exists.',
    ratioDecidendi:
      'At the stage of framing charges under Sections 227 and 228 CrPC, the court must consider whether there is ground for presuming that the accused has committed the offence. The court cannot appreciate witness veracity, reconcile contradictions, or accept delay as a ground for discharge when the materials disclose a grave suspicion of complicity in serious offences.',
    obiterDicta:
      'Delay in prosecuting mass communal violence cases cannot be converted into an automatic shield of immunity for influential conspirators.',
    relatedCases: [
      {
        judgmentId: 'prafulla-samal-1979',
        caseName: 'Union of India v. Prafulla Kumar Samal',
        citation: '(1979) 3 SCC 4',
        relationship: 'affirmed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The modern eight-point synthesis on framing of charges under Sections 227/228 CrPC.',
      'Eyewitness veracity cannot be adjudicated at the stage of discharge.',
      'Delay in recording statements is a matter for trial, not a threshold bar.',
    ],
    mcqs: [
      {
        id: 'sajjan-kumar-mcq-1',
        question:
          'In Sajjan Kumar v. CBI (2010), what did the Supreme Court rule regarding delay in witness statements at the stage of framing charges?',
        options: [
          'Delay automatically requires immediate discharge of the accused',
          'Delay is a matter for trial evidence and cannot justify discharge if prima facie grave suspicion exists',
          'Delay bars the jurisdiction of the Sessions Court',
          'Delay requires the case to be referred to arbitration',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that delay in recording witness statements is a matter for trial and cannot be used to discharge an accused if grave suspicion exists.',
      },
    ],
  },
  {
    id: 'neeharika-infrastructure-2021',
    caseName: 'Neeharika Infrastructure Pvt. Ltd. v. State of Maharashtra',
    shortName: 'Neeharika Infrastructure (Section 482 Guidelines)',
    citation: '(2021) 19 SCC 401',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2021,
    bench: '3-Judge Bench',
    judges: ['D.Y. Chandrachud, J.', 'M.R. Shah, J.', 'Sanjiv Khanna, J.'],
    subject: 'Criminal Procedure',
    topics: ['Section 482 CrPC', 'Quashing of FIR', 'No Coercive Steps Orders', 'Interim Relief Guidelines'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 482', 'BNSS 528', 'Quashing FIR', 'Interim Relief', 'Stay of Investigation'],
    summary:
      'Landmark 3-judge bench decision laying down comprehensive nationwide guidelines on the exercise of inherent powers under Section 482 CrPC (now Section 528 BNSS) and Article 226 regarding quashing of FIRs. Strictly prohibited High Courts from passing routine, unreasoned interim orders of "no coercive steps" or staying investigations while keeping quashing petitions pending for years.',
    facts: [
      'The appellant filed an FIR alleging cheating, forgery, and criminal breach of trust involving crores of rupees against the respondents.',
      'The accused filed a writ petition under Article 226 and Section 482 CrPC before the Bombay High Court seeking quashing of the FIR.',
      'Without expressing any prima facie opinion on whether cognizable offences were disclosed, the High Court issued notice and directed that "no coercive measures shall be adopted against the petitioners".',
      'The informant appealed to the Supreme Court challenging the rampant judicial practice of passing blanket "no coercive steps" orders that cripple police investigations.',
    ],
    issues: [
      'Whether the High Court under Section 482 CrPC or Article 226 can pass interim orders directing "no coercive steps" without assigning reasons or staying the FIR.',
      'What are the parameters governing interim relief during the pendency of a petition to quash an FIR.',
    ],
    arguments: {
      appellant: [
        'Passing blanket "no coercive steps" orders without deciding quashing paralyzes statutory police investigation and amounts to granting anticipatory bail through the back door.',
      ],
      respondent: [
        'Inherent powers under Section 482 are wide enough to protect citizens from harassment and custodial arrest in commercial disputes pending adjudication.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 482 CrPC / Section 528 BNSS',
        title: 'Saving of inherent powers of High Court',
        subjectSlug: 'bnss',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'fir-investigation',
        section: 'Section 156 & 157 CrPC / Section 175 & 176 BNSS',
        title: 'Police officer power to investigate cognizable cases',
        subjectSlug: 'bnss',
        topicId: 'fir-investigation',
      },
    ],
    reasoning: [
      {
        heading: 'Police statutory right to investigate',
        explanation:
          'M.R. Shah, J. held that the statutory power of the police to investigate cognizable offences under Chapter XII CrPC is a statutory right that should not be ordinarily interfered with. An investigation should not be stayed except in rare and exceptional cases where non-interference would result in gross miscarriage of justice.',
      },
      {
        heading: 'Blanket "no coercive steps" orders condemned',
        explanation:
          'The Court held that the practice of passing routine, unreasoned orders directing "no coercive steps" is contrary to law. If the High Court does not find a prima facie case to stay the investigation, it cannot pass a blanket order shielding the accused from arrest, which subverts statutory provisions governing anticipatory bail under Section 438 CrPC.',
      },
    ],
    decision:
      'Appeal allowed. High Court interim order of "no coercive measures" quashed. 15 comprehensive guidelines laid down for Section 482/Article 226 quashing proceedings.',
    holding:
      'High Courts cannot pass routine blanket "no coercive steps" orders in Section 482 quashing petitions without recording reasons. Police investigation should not be stayed lightly.',
    ratioDecidendi:
      'Under Section 482 CrPC and Article 226, the police have a statutory right to investigate cognizable offences. High Courts should exercise extreme caution before staying an investigation. Passing blanket, mechanical interim orders directing "no coercive steps" without assigning reasons or deciding the prima facie merits of the quashing petition is impermissible and circumvents anticipatory bail jurisprudence.',
    obiterDicta:
      'Interim protection cannot be granted as a matter of routine course while keeping quashing petitions on life support for years.',
    relatedCases: [
      {
        judgmentId: 'bhajan-lal-1992',
        caseName: 'State of Haryana v. Bhajan Lal',
        citation: '1992 Supp (1) SCC 335',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Comprehensive modern guidelines on Section 482 CrPC quashing of FIRs.',
      'Strict ban on mechanical, unreasoned "no coercive steps" orders.',
      'Sanctity of the statutory police power of investigation under Section 156 CrPC.',
    ],
    mcqs: [
      {
        id: 'neeharika-mcq-1',
        question:
          'In Neeharika Infrastructure Pvt. Ltd. v. State of Maharashtra (2021), what did the 3-judge bench rule regarding "no coercive steps" orders under Section 482 CrPC?',
        options: [
          'They must be granted automatically in all white-collar cases',
          'They cannot be passed mechanically or without recording reasons while staying investigation',
          'They can only be passed by the Supreme Court',
          'They are mandatory if the accused deposits money',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court strictly held that blanket "no coercive steps" orders cannot be passed routinely or mechanically without recording reasons.',
      },
    ],
  },
  {
    id: 'rp-kapur-1960',
    caseName: 'R.P. Kapur v. State of Punjab',
    shortName: 'R.P. Kapur (Section 482 Categories)',
    citation: '1960 AIR 866',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1960,
    bench: '3-Judge Bench',
    judges: ['P.B. Gajendragadkar, J.', 'K.N. Wanchoo, J.', 'M. Hidayatullah, J.'],
    subject: 'Criminal Procedure',
    topics: ['Inherent Powers', 'Section 561A / 482 CrPC', 'Quashing Criminal Proceedings', 'Three Categories'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 482', 'BNSS 528', 'Gajendragadkar', 'Quashing', 'Abuse of Process'],
    summary:
      'The foundational 3-judge bench ruling authored by Justice P.B. Gajendragadkar establishing the three classic categories of cases where the High Court can exercise its inherent jurisdiction under Section 561A (now Section 482 CrPC / Section 528 BNSS) to quash criminal proceedings. Precursor to the Bhajan Lal categories.',
    facts: [
      'R.P. Kapur, a senior Indian Administrative Service officer, was prosecuted for cheating and abetment under Section 420/109 IPC on a complaint alleging that he fraudulently represented an immovable property was free from mortgage.',
      'Kapur filed an application under Section 561A of the old CrPC (now Section 482) before the Punjab High Court seeking quashing of the criminal proceedings, contending that the dispute was purely civil and the FIR was motivated by personal vendetta.',
      'The High Court dismissed the application, holding that disputed questions of fact could not be examined before trial.',
      'Kapur appealed to the Supreme Court.',
    ],
    issues: [
      'What are the permissible legal categories and boundaries of the inherent powers of the High Court to quash a criminal proceeding under Section 561A (Section 482 CrPC).',
      'Can a criminal complaint be quashed at the inception if the allegations constitute a civil cause of action but also prima facie disclose ingredients of cheating.',
    ],
    arguments: {
      appellant: [
        'The criminal process was launched maliciously to humiliate an IAS officer; inherent powers exist to prevent abuse of the process of the court.',
      ],
      respondent: [
        'An FIR disclosing the ingredients of an offence must proceed to investigation; the court cannot substitute its factual evaluation for a trial.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 482 CrPC / Section 528 BNSS',
        title: 'Saving of inherent powers of High Court to prevent abuse of the process of any court',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Three classic categories where inherent powers can be invoked',
        explanation:
          'Gajendragadkar, J. laid down the classic threefold classification: (1) Where there is a legal bar against the institution or continuance of the proceedings (e.g., absence of requisite statutory sanction under Section 197 CrPC); (2) Where the allegations in the FIR or complaint, even if taken at their face value and accepted in their entirety, do not constitute the offence alleged; (3) Where the allegations constitute an offence, but there is either no legal evidence adduced in support of the case or the evidence clearly fails to prove the charge.',
      },
      {
        heading: 'Caution against stifling legitimate prosecutions',
        explanation:
          'The Court held that inherent powers should not be used to stifle legitimate criminal investigations. Where the allegations in the complaint prima facie disclose the ingredients of cheating and dishonest inducement, the criminal proceedings cannot be quashed on the ground that a civil remedy is also available.',
      },
    ],
    decision:
      'Appeal dismissed. High Court order refusing to quash the criminal proceedings affirmed; trial directed to proceed.',
    holding:
      'High Court inherent power to quash proceedings is confined to 3 categories: statutory bar, failure to disclose offence on face value, or complete absence of legal evidence.',
    ratioDecidendi:
      'Inherent powers under Section 482 CrPC (Section 528 BNSS) are extraordinary and must be exercised sparingly. Quashing is permissible only where: (i) there is a legal bar against the prosecution; (ii) the allegations taken at face value do not disclose an offence; or (iii) there is complete absence of legal evidence. A complaint cannot be quashed merely because it arises out of a commercial transaction if the ingredients of cheating are prima facie present.',
    obiterDicta:
      'The court cannot conduct a roving enquiry into defense documents at the threshold of quashing.',
    relatedCases: [
      {
        judgmentId: 'bhajan-lal-1992',
        caseName: 'State of Haryana v. Bhajan Lal',
        citation: '1992 Supp (1) SCC 335',
        relationship: 'affirmed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The foundational 3-point classification for quashing under Section 482 CrPC.',
      'Justice Gajendragadkar classic formulation of inherent powers.',
      'Distinction between civil disputes and concurrent criminal liability.',
    ],
    mcqs: [
      {
        id: 'rp-kapur-mcq-1',
        question:
          'How many classic categories for quashing criminal proceedings under inherent powers were formulated in R.P. Kapur v. State of Punjab (1960)?',
        options: ['Two', 'Three', 'Five', 'Seven'],
        correctIndex: 1,
        explanation:
          'Justice Gajendragadkar formulated the classic threefold classification of cases where inherent powers can be invoked to quash proceedings.',
      },
    ],
  },
  {
    id: 'best-bakery-2004',
    caseName: 'Zahira Habibulla H. Sheikh v. State of Gujarat (Best Bakery Case)',
    shortName: 'Best Bakery (Witness Protection & Retrial)',
    citation: '(2004) 4 SCC 158',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2004,
    bench: '2-Judge Bench',
    judges: ['Doraiswamy Raju, J.', 'Arijit Pasayat, J.'],
    subject: 'Criminal Procedure / Constitution',
    topics: ['Hostile Witnesses', 'Fair Trial Article 21', 'Transfer of Trial', 'Retrial Outside State'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Fair Trial', 'Hostile Witnesses', 'Transfer of Trial', 'Best Bakery'],
    summary:
      'Monumental Supreme Court decision on witness intimidation, hostile witnesses, and the constitutional guarantee of a fair trial under Article 21. Following the wholesale collapse of the Best Bakery massacre trial in Gujarat where key witnesses turned hostile under terror, the Court quashed the acquittals, ordered a complete retrial outside the State of Gujarat (in Maharashtra), and delivered a scathing indictment of modern "Neros" who look away while justice burns.',
    facts: [
      'During the 2002 post-Godhra communal riots in Vadodara, Gujarat, a mob attacked the Best Bakery, burning alive 14 people.',
      'During trial, prime eyewitness Zahira Sheikh and other key surviving witnesses turned hostile, alleging that they were threatened and coerced by influential local politicians.',
      'The Sessions Court acquitted all 21 accused for lack of evidence, and the Gujarat High Court affirmed the acquittal.',
      'Zahira Sheikh approached the Supreme Court with the National Human Rights Commission (NHRC) revealing she was coerced into perjury.',
    ],
    issues: [
      'Does a criminal trial conducted in an atmosphere of terror and coerced witness hostility satisfy the constitutional guarantee of a fair trial under Article 21.',
      'Can the Supreme Court order a retrial outside the territory of the State to ensure judicial impartiality.',
    ],
    arguments: {
      appellant: [
        'The trial was a sham and a mockery of justice; witness intimidation and biased prosecution destroyed the truth.',
      ],
      respondent: [
        'Retrial subjects the acquitted accused to double jeopardy; appellate courts cannot order retrial merely because witnesses changed versions.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to a fair, just, and impartial trial',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 406 CrPC / Section 446 BNSS',
        title: 'Power of Supreme Court to transfer criminal cases and appeals outside the State',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Fair trial is a two-way street',
        explanation:
          'Pasayat, J. held that a fair trial means fair not only to the accused, but also to the victim and the society. The criminal justice system cannot allow witnesses to be bought, threatened, or terrorized into silence. When the prosecution acts as an accomplice and the court acts as a silent spectator, justice becomes a casualty.',
      },
      {
        heading: 'Transfer of retrial outside the State',
        explanation:
          'To ensure complete fairness and free the witnesses from local administrative coercion, the Court quashed the acquittals, directed reinvestigation, and transferred the entire retrial to a Special Sessions Court in Mumbai, Maharashtra under Section 406 CrPC.',
      },
    ],
    decision:
      'Appeals allowed. Acquittal of all 21 accused quashed. Retrial ordered and transferred to a Special Court in Mumbai, Maharashtra.',
    holding:
      'Coerced trials where witnesses turn hostile under threat violate Article 21. Supreme Court can order retrial outside the State to secure justice.',
    ratioDecidendi:
      'Under Article 21 of the Constitution and Section 406 CrPC, the right to a fair trial is an indispensable constitutional guarantee. When a criminal trial is vitiated by rampant witness intimidation, suborned perjury, and state apathy, the resulting acquittals are a nullity. The Supreme Court has the constitutional duty to set aside such acquittals and transfer the retrial outside the State to ensure an unbiased adjudication.',
    obiterDicta:
      'Modern Neros should remember that history does not forgive those who fiddle while innocent lives and justice burn.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Landmark authority on witness protection and the concept of "Fair Trial" under Article 21.',
      'Exercise of Section 406 CrPC powers to transfer a retrial across state borders.',
      'Treatment of hostile witnesses coerced through intimidation.',
    ],
    mcqs: [
      {
        id: 'best-bakery-mcq-1',
        question:
          'In Zahira Habibulla H. Sheikh v. State of Gujarat (Best Bakery Case) (2004), to which State was the retrial transferred by the Supreme Court?',
        options: ['Rajasthan', 'Maharashtra', 'Delhi', 'Madhya Pradesh'],
        correctIndex: 1,
        explanation:
          'The Supreme Court transferred the retrial from Gujarat to a Special Sessions Court in Mumbai, Maharashtra to ensure a fair and uninfluenced trial.',
      },
    ],
  },
  {
    id: 'gurmit-singh-rape-1996',
    caseName: 'State of Punjab v. Gurmit Singh',
    shortName: 'Gurmit Singh (Rape Victim Testimony)',
    citation: '(1996) 2 SCC 384',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1996,
    bench: '2-Judge Bench',
    judges: ['A.S. Anand, J.', 'S. Saghir Ahmad, J.'],
    subject: 'Criminal Law / Evidence',
    topics: ['Sole Testimony of Rape Victim', 'Absence of Corroboration', 'In-Camera Trial Section 327 CrPC', 'Judicial Sensitivity'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 376', 'Evidence', 'Section 327 CrPC', 'Sole Witness', 'Rape Trials'],
    summary:
      'Classic Supreme Court ruling on the evidentiary value of the testimony of a rape survivor. Held that the testimony of a victim of sexual assault stands on a higher footing than an ordinary injured witness and does not require corroboration; courts must accept her natural testimony unless there are compelling reasons to doubt it. Mandated in-camera trials under Section 327 CrPC and strict concealment of victim identity.',
    facts: [
      'A 16-year-old schoolgirl was abducted in a car by three young men in Punjab, taken to a tubewell house, and subjected to gang rape.',
      'The trial court acquitted all the accused on the reasoning that the girl did not raise an alarm, had no external physical injuries on her private parts, and her testimony was not corroborated by independent witnesses.',
      'The State of Punjab appealed to the Supreme Court against the acquittal.',
    ],
    issues: [
      'Is the testimony of a prosecutrix in a rape case required to be corroborated by independent witnesses or medical injuries.',
      'What procedural safeguards must trial courts implement to protect the dignity of rape survivors during court proceedings.',
    ],
    arguments: {
      appellant: [
        'An Indian woman will not falsely put her honor and reputation at stake by concocting a baseless rape charge; her unimpeached testimony is self-sufficient.',
      ],
      respondent: [
        'Rape is easy to allege and hard to disprove; in the absence of independent corroboration, the benefit of doubt belongs to the accused.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'sexual-offences',
        section: 'Section 376 IPC / Section 64 BNS',
        title: 'Punishment for rape and conviction based on sole testimony',
        subjectSlug: 'bns',
        topicId: 'sexual-offences',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 327 CrPC / Section 366 BNSS',
        title: 'Trial of rape cases in-camera and concealment of victim identity',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'No requirement of corroboration for rape victim testimony',
        explanation:
          'Anand, J. held that the testimony of a victim of sexual assault stands on par with an injured witness. Corroboration is not a rule of law, but only of prudence. Demanding corroboration in rape trials is adding insult to injury. A girl in an Indian conservative society will not put her future and family honor on the line by falsely accusing someone of rape.',
      },
      {
        heading: 'Mandatory in-camera trial and sensitivity',
        explanation:
          'The Court mandated that all rape trials must strictly be held in-camera under Section 327(2) CrPC to shield the survivor from salacious public scrutiny and intimidating cross-examination. Trial judges must not allow humiliating or insulting questions regarding the past sexual history of the victim.',
      },
    ],
    decision:
      'State appeal allowed. Acquittal set aside. All accused convicted under Section 376(2)(g) IPC and sentenced to 10 years rigorous imprisonment.',
    holding:
      'A conviction for rape can be based on the sole uncorroborated testimony of the prosecutrix. In-camera trial is mandatory under Section 327 CrPC.',
    ratioDecidendi:
      'Under the Indian Evidence Act and criminal jurisprudence, the sole testimony of a rape survivor is inspiring and sufficient to sustain a conviction without independent corroboration, provided it is natural, reliable, and truthful. Trial courts are mandated under Section 327 CrPC to conduct proceedings in-camera and protect the survivor identity.',
    obiterDicta:
      'A rapist not only violates the victim privacy and personal integrity, but causes psychological destruction that haunts the survivor for life.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Sole uncorroborated testimony of rape victim is sufficient for conviction.',
      'Mandatory in-camera trial under Section 327 CrPC (now Section 366 BNSS).',
      'Judicial sensitivity towards sexual violence survivors.',
    ],
    mcqs: [
      {
        id: 'gurmit-singh-mcq-1',
        question:
          'In State of Punjab v. Gurmit Singh (1996), what rule was laid down regarding the need for corroboration of a rape victim testimony?',
        options: [
          'Corroboration by at least two eyewitnesses is mandatory',
          'Corroboration is not required if the sole testimony is natural and reliable',
          'Medical corroboration of hymenal tear is indispensable',
          'Conviction can only be based on DNA evidence',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the testimony of a rape victim does not require corroboration if it is natural, truthful, and reliable.',
      },
    ],
  },
  {
    id: 'dwarika-prasad-satpathy-1999',
    caseName: 'Dwarika Prasad Satpathy v. Bidyut Prava Dixit',
    shortName: 'Dwarika Prasad Satpathy (Section 125 Marriage Proof)',
    citation: '(1999) 7 SCC 675',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1999,
    bench: '2-Judge Bench',
    judges: ['M.B. Shah, J.', 'S.N. Phukan, J.'],
    subject: 'Family Law / Criminal Procedure',
    topics: ['Section 125 CrPC', 'Proof of Marriage', 'Summary Proceedings', 'Section 144 BNSS'],
    tags: ['AIBE', 'Judiciary', 'CrPC', 'Section 125', 'BNSS 144', 'Maintenance', 'Proof of Marriage', 'Summary Procedure'],
    summary:
      'Authoritative decision on the standard of proof of marriage in maintenance proceedings under Section 125 CrPC (now Section 144 BNSS). Held that Section 125 proceedings are summary in nature designed to prevent vagrancy and destitution, and the strict, rigorous proof of marriage required for a conviction under Section 494 IPC (bigamy) is not necessary to grant maintenance.',
    facts: [
      'The respondent Bidyut Prava Dixit filed an application for maintenance under Section 125 CrPC claiming to be the wedded wife of the appellant, living with their female child.',
      'The appellant denied the marriage, contending that the ceremonies of Saptapadi and Datta Homa were not performed according to Hindu rites, and therefore she was not his legally wedded wife.',
      'The Magistrate and Orissa High Court awarded maintenance holding that the parties lived together as husband and wife.',
      'The husband appealed to the Supreme Court, arguing that in the absence of proof of customary ceremonies, no maintenance could be awarded under Section 125.',
    ],
    issues: [
      'What standard of proof of marriage is required in a summary maintenance application under Section 125 CrPC.',
      'Can a husband escape the obligation of maintenance by taking advantage of procedural defects in the performance of marriage rituals.',
    ],
    arguments: {
      appellant: [
        'A woman is entitled to maintenance under Section 125 only if she is a legally wedded wife; if essential rites of Hindu marriage are omitted, no legal marriage exists.',
      ],
      respondent: [
        'Section 125 is a social welfare measure to prevent destitution; prima facie proof of cohabitation as husband and wife is sufficient.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 's-144',
        section: 'Section 125 CrPC / Section 144 BNSS',
        title: 'Order for maintenance of wives, children, and parents',
        subjectSlug: 'bnss',
        topicId: 's-144',
      },
    ],
    reasoning: [
      {
        heading: 'Summary nature of Section 125 CrPC',
        explanation:
          'M.B. Shah, J. held that Section 125 CrPC was enacted to achieve a social purpose: to provide speedy assistance to destitute wives and children. The standard of proof of marriage in such summary proceedings is not as strict as is required in a trial for bigamy under Section 494 IPC or in a suit for divorce.',
      },
      {
        heading: 'Husband cannot plead technical defects in rituals',
        explanation:
          'If the evidence shows that the parties lived together as husband and wife and were treated as such by society, the Magistrate is fully justified in awarding maintenance. A husband who cohabited with a woman cannot be allowed to defeat her maintenance claim by pleading technical omissions in marriage ceremonies.',
      },
    ],
    decision:
      'Appeal dismissed. Maintenance order in favor of the wife and minor daughter affirmed.',
    holding:
      'Strict proof of marriage ceremonies is not required in Section 125 CrPC maintenance proceedings. Prima facie proof of spousal cohabitation suffices.',
    ratioDecidendi:
      'Under Section 125 CrPC (Section 144 BNSS), which is a summary measure to prevent destitution, strict proof of customary marriage ceremonies (such as Saptapadi) is not a condition precedent for granting maintenance. Evidence establishing that the parties cohabited together as husband and wife raises a strong presumption of marriage sufficient to sustain an award of maintenance.',
    obiterDicta:
      'The summary maintenance jurisdiction cannot be held hostage to prolonged civil inquiries into ceremonial minutiae.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Standard of proof of marriage under Section 125 CrPC (Section 144 BNSS).',
      'Distinction between Section 125 maintenance standard and Section 494 IPC bigamy standard.',
      'Summary social welfare nature of Section 125.',
    ],
    mcqs: [
      {
        id: 'dwarika-prasad-mcq-1',
        question:
          'In Dwarika Prasad Satpathy v. Bidyut Prava Dixit (1999), what standard of proof of marriage was held applicable under Section 125 CrPC?',
        options: [
          'Proof beyond reasonable doubt of all customary rituals',
          'Strict proof as in bigamy prosecutions',
          'Summary prima facie proof of cohabitation as husband and wife',
          'Registration under the Special Marriage Act only',
        ],
        correctIndex: 2,
        explanation:
          'The Court held that strict proof of marriage rituals is not required in Section 125 summary proceedings; prima facie proof of spousal cohabitation suffices.',
      },
    ],
  },
  {
    id: 'rajnesh-v-neha-2021',
    caseName: 'Rajnesh v. Neha',
    shortName: 'Rajnesh v. Neha (Comprehensive Maintenance Guidelines)',
    citation: '(2021) 2 SCC 324',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2021,
    bench: '2-Judge Bench',
    judges: ['Indu Malhotra, J.', 'R. Subhash Reddy, J.'],
    subject: 'Family Law / Criminal Procedure',
    topics: ['Maintenance Guidelines', 'Affidavit of Assets and Liabilities', 'Overlapping Maintenance', 'Date of Application'],
    tags: ['AIBE', 'Judiciary', 'Section 125 CrPC', 'HMA Section 24', 'DV Act Section 20', 'Maintenance Guidelines', 'Indu Malhotra'],
    summary:
      'Monumental Supreme Court judgment authored by Justice Indu Malhotra laying down exhaustive nationwide guidelines to streamline maintenance proceedings across all statutes (Section 125 CrPC, HMA Section 24, DV Act). Mandated the compulsory filing of an "Affidavit of Assets and Liabilities" by both spouses, settled that maintenance must be awarded from the date of the application, and resolved the issue of overlapping maintenance awards.',
    facts: [
      'The appellant husband was directed by the Family Court to pay interim maintenance to his estranged wife and minor son under Section 125 CrPC.',
      'The husband challenged the quantum, contending that the wife was earning and concealing income, while the wife complained of rampant default and concealments of business assets by the husband.',
      'Recognizing the systemic delays, conflicting maintenance awards across multiple forums, and suppression of income in matrimonial disputes across India, the Supreme Court framed comprehensive national guidelines.',
    ],
    issues: [
      'How to eliminate rampant concealment of income and assets in matrimonial maintenance litigation.',
      'From what date should maintenance be awarded: date of application or date of order.',
      'How should courts adjust overlapping maintenance awards granted under different statutes (Section 125 CrPC, DV Act, HMA).',
    ],
    arguments: {
      appellant: [
        'Husbands are often subjected to multiple conflicting maintenance orders across different courts without credit for payments made.',
      ],
      respondent: [
        'Wives and children are driven to penury because husbands conceal assets and default on payments for years during prolonged trials.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 's-144',
        section: 'Section 125 CrPC / Section 144 BNSS',
        title: 'Order for maintenance of wives, children, and parents',
        subjectSlug: 'bnss',
        topicId: 's-144',
      },
      {
        actId: 'family',
        actName: 'Hindu Marriage Act, 1955',
        provisionId: 'maintenance',
        section: 'Section 24 & Section 25',
        title: 'Maintenance pendente lite and permanent alimony',
        subjectSlug: 'family',
        topicId: 'adoption-maintenance',
      },
    ],
    reasoning: [
      {
        heading: 'Mandatory Affidavit of Assets and Liabilities',
        explanation:
          'Indu Malhotra, J. formulated comprehensive standardized disclosure formats (Enclosures I, II, III). Both spouses in every maintenance petition across India are compulsorily required to file detailed Affidavits disclosing income, bank accounts, properties, lifestyle, and debts under penalty of perjury.',
      },
      {
        heading: 'Date of application and overlapping maintenance',
        explanation:
          'The Court settled three vital questions: (1) Maintenance must be awarded from the date of the application, to prevent the husband from profiting from trial delays; (2) In cases of overlapping proceedings, the applicant must disclose previous maintenance orders, and the subsequent court must set off or adjust previous payments; (3) Strict enforcement mechanisms including civil detention and property attachment.',
      },
    ],
    decision:
      'Appeal disposed of. Nationwide binding guidelines framed with mandatory model affidavits for all courts dealing with matrimonial maintenance.',
    holding:
      'Mandatory Affidavit of Assets and Liabilities introduced nationwide. Maintenance must be awarded from the date of application; overlapping awards must be adjusted.',
    ratioDecidendi:
      'In all maintenance applications across all statutes, both parties must compulsorily file an Affidavit of Disclosure of Assets and Liabilities. Maintenance orders must be made effective from the date of the application. Where multiple maintenance proceedings are initiated under different laws, the subsequent court is bound to consider and adjust any previous maintenance awarded to prevent unjust enrichment.',
    obiterDicta:
      'The purpose of interim maintenance is to ensure that the dependent spouse is not reduced to destitution while battling protracted litigation.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The definitive Magna Carta of maintenance jurisprudence in India.',
      'Compulsory Affidavit of Assets and Liabilities (Indu Malhotra guidelines).',
      'Rule that maintenance is payable from the date of application.',
      'Adjustment of overlapping maintenance awards across Section 125 CrPC, DV Act, and HMA.',
    ],
    mcqs: [
      {
        id: 'rajnesh-neha-mcq-1',
        question:
          'In Rajnesh v. Neha (2021), from what date did the Supreme Court hold that maintenance should ordinarily be awarded?',
        options: [
          'From the date of the final judgment',
          'From the date of filing of the application',
          'From the date of marriage separation',
          'From the date of the first court hearing',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court ruled that maintenance in all cases must be awarded from the date of the application to prevent delays from prejudicing the dependent spouse.',
      },
    ],
  },
  {
    id: 'narayana-deekshitulu-1996',
    caseName: 'A.S. Narayana Deekshitulu v. State of A.P.',
    shortName: 'Narayana Deekshitulu (Abolition of Hereditary Archakas)',
    citation: '(1996) 9 SCC 548',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 1996,
    bench: '3-Judge Bench',
    judges: ['K. Ramaswamy, J.', 'B.L. Hansaria, J.', 'S.B. Majmudar, J.'],
    subject: 'Constitutional Law',
    topics: ['Freedom of Religion', 'Article 25 & 26', 'Hereditary Archakas', 'Dharma vs Religion', 'Secular Regulation'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 25', 'Article 26', 'Tirupati Temple', 'Hereditary Priests', 'Dharma'],
    summary:
      'Landmark 3-judge bench ruling upholding the abolition of hereditary rights of Archakas (priests) and Mirasidars in Hindu temples, including the Tirumala Tirupati Devasthanams, under the A.P. Charitable and Hindu Religious Institutions and Endowments Act, 1987. Held that appointment of a priest is a secular activity distinct from religious rituals, and delivered a celebrated jurisprudential treatise on the concept of "Dharma".',
    facts: [
      'The Andhra Pradesh Legislature enacted the A.P. Charitable and Hindu Religious Institutions and Endowments Act, 1987, which abolished all hereditary rights of Archakas, Mirasidars, and temple servants, replacing them with regular salaried appointments.',
      'Hereditary priests of Tirumala Tirupati Devasthanams and other historic temples challenged the statute, arguing that hereditary priesthood was an integral part of their religious denomination protected under Articles 25 and 26.',
      'The High Court upheld the Act, and the Archakas appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the abolition of hereditary rights of Archakas violates the freedom of religion under Article 25(1) and Article 26(b).',
      'Is the appointment of a temple priest an essential religious practice or a secular administrative activity.',
    ],
    arguments: {
      appellant: [
        'Agama Shastras mandate that only hereditary priests initiated through family lineage can touch the deity and perform sacred pujas.',
      ],
      respondent: [
        'Performing puja is religious, but the appointment, salary, and tenure of an archaka is a secular function that can be regulated by the State under Article 25(2)(a).',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'freedom-religion',
        article: 'Article 25 & 26',
        title: 'Freedom of conscience and right to manage religious affairs',
        subjectSlug: 'constitution',
        topicId: 'freedom-religion',
      },
    ],
    reasoning: [
      {
        heading: 'Distinction between religious ritual and secular appointment',
        explanation:
          'Ramaswamy, J. held that there is a vital distinction between the performance of religious rites and the appointment of an Archaka. The performance of puja in accordance with Agama Shastras is a religious practice; however, who is appointed as a priest, his qualifications, emoluments, and hereditary claims are secular matters subject to state regulation under Article 25(2)(a).',
      },
      {
        heading: 'Philosophical exposition of "Dharma"',
        explanation:
          'Justice Hansaria expounded on the profound difference between "Religion" and "Dharma". While religion is a specific set of dogmas, Dharma signifies righteousness, duty, cosmic order, and public welfare. Abolishing feudal, hereditary monopolies in public temples aligns with constitutional Dharma.',
      },
    ],
    decision:
      'Appeals dismissed. Section 34 of the A.P. Act abolishing hereditary rights of Archakas and temple servants upheld as constitutionally valid.',
    holding:
      'Appointment of Archakas is a secular activity that can be regulated by law. Abolition of hereditary priesthood does not violate Articles 25 and 26.',
    ratioDecidendi:
      'Under Articles 25 and 26 of the Constitution, the abolition of the hereditary right to be appointed as an Archaka or priest in a temple does not infringe religious freedom. The appointment of an Archaka is a secular activity under Article 25(2)(a), even though the Archaka performs religious rituals in accordance with Agama Shastras once appointed.',
    obiterDicta:
      'No individual or family can claim a perpetual proprietary birthright in the service of the Almighty in public temples.',
    relatedCases: [
      {
        judgmentId: 'shirur-mutt-1954',
        caseName: 'Commr., HRE v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt',
        citation: '1954 AIR 282',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Distinction between secular appointment of priests and religious rituals.',
      'Abolition of hereditary priesthood upheld under Article 25(2)(a).',
      'Celebrated judicial analysis of the jurisprudential concept of "Dharma".',
    ],
    mcqs: [
      {
        id: 'narayana-deekshitulu-mcq-1',
        question:
          'In A.S. Narayana Deekshitulu v. State of A.P. (1996), what did the Supreme Court hold regarding the appointment of temple priests?',
        options: [
          'It is an untouchable religious practice under Article 26',
          'It is a secular activity subject to state regulation under Article 25(2)(a)',
          'Only hereditary lineages can be priests in Hindu temples',
          'Archakas cannot receive salaries from temple funds',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that the appointment of an Archaka is a secular activity that the State can regulate under Article 25(2)(a).',
      },
    ],
  },
  {
    id: 'sheela-barse-children-1986',
    caseName: 'Sheela Barse v. Union of India (Children in Jails)',
    shortName: 'Sheela Barse (Juveniles in Jails)',
    citation: '(1986) 3 SCC 596',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1986,
    bench: '2-Judge Bench',
    judges: ['P.N. Bhagwati, C.J.', 'Ranganath Misra, J.'],
    subject: 'Constitutional Law / Criminal Procedure',
    topics: ['Child Rights', 'Juvenile Justice', 'Ban on Children in Jails', 'Speedy Trial Article 21'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Article 39(f)', 'Juvenile Justice', 'Child Rights', 'Sheela Barse'],
    summary:
      'Historic public interest litigation judgment directing that no child below the age of 16 years shall under any circumstances be detained in adult jails. Formulated strict procedural timelines for juvenile investigations and trials, ruling that failure to complete trial within reasonable time entitles the child to discharge under Article 21.',
    facts: [
      'Journalist and activist Sheela Barse filed a letter petition under Article 32 highlighting that hundreds of abandoned, indigent, or accused children below 16 were incarcerated in adult prisons across the country.',
      'Inside adult jails, children were subjected to horrific physical abuse, sexual exploitation, and hardened into criminals.',
      'The Supreme Court issued notices to all State Governments to inspect jails and furnish data on lodged juveniles.',
    ],
    issues: [
      'Whether detaining children in adult jails violates their fundamental rights under Articles 21, 24, and Directive Principle 39(f).',
      'What are the mandatory procedural safeguards for investigating and trying juvenile offences.',
    ],
    arguments: {
      appellant: [
        'A jail is no place for a child; detaining children with hardened criminals destroys their psychological development and violates Article 21.',
      ],
      respondent: [
        'Many States lacked separate juvenile remand homes or observation centers; children were lodged in separate wards of adult prisons.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 39(f)',
        title: 'Protection of childhood and youth against exploitation in detention',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Absolute prohibition on lodging children in adult prisons',
        explanation:
          'Bhagwati, C.J. held that children are the supreme national asset. Lodging a child in a prison is completely uncivilized and counter-productive. Even where an offence is committed by a child, he must be sent to an observation home or juvenile home, never to an adult prison.',
      },
      {
        heading: 'Speedy trial and mandatory discharge',
        explanation:
          'The Court directed that investigation against a juvenile must be completed within 3 months, and trial must be completed within 6 months. If trial is not completed within that period, the child is entitled to be discharged.',
      },
    ],
    decision:
      'Writ petition disposed of. Absolute ban on lodging children below 16 in prisons. State Governments directed to set up juvenile courts and observation homes.',
    holding:
      'Children below 16 cannot be kept in adult jails under any circumstances. Juvenile trials must be completed expeditiously.',
    ratioDecidendi:
      'Under Articles 21 and 39(f) of the Constitution, detaining a juvenile in an adult prison is inherently unconstitutional. Children accused of offences must be kept strictly in juvenile observation homes or released on bail to parents. The State is under a constitutional duty to establish dedicated juvenile justice infrastructure.',
    obiterDicta:
      'If we treat children as criminals, the republic will reap a harvest of hardened outlaws.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Abolition of child incarceration in adult prisons.',
      'Precursor to the Juvenile Justice Act, 1986 and 2000.',
      'Speedy trial mandate for children under Article 21.',
    ],
    mcqs: [
      {
        id: 'sheela-barse-child-mcq-1',
        question:
          'In Sheela Barse v. Union of India (1986), what did the Supreme Court order regarding children below 16 in adult jails?',
        options: [
          'They can stay in jails if accompanied by parents',
          'They cannot be kept in adult jails under any circumstances',
          'They can be detained in high-security wards',
          'They must be transferred to military custody',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court imposed an absolute ban on lodging children below the age of 16 in adult prisons.',
      },
    ],
  },
  {
    id: 'mc-mehta-child-labour-1996',
    caseName: 'M.C. Mehta v. State of T.N. (Child Labour Case)',
    shortName: 'M.C. Mehta (Child Labour Abolition)',
    citation: '(1996) 6 SCC 756',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1996,
    bench: '3-Judge Bench',
    judges: ['Kuldip Singh, J.', 'B.L. Hansaria, J.', 'S.B. Majmudar, J.'],
    subject: 'Constitutional & Labour Law',
    topics: ['Child Labour Abolition', 'Article 24', 'Hazardous Industries', 'Child Labour Rehabilitation Fund'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 24', 'Child Labour', 'Sivakasi', 'Rehabilitation Fund'],
    summary:
      'Historic 3-judge bench judgment on the abolition of child labour in hazardous industries under Article 24 of the Constitution. Arising out of the exploitation of children in match and firecracker factories in Sivakasi, Tamil Nadu, the Court ordered immediate withdrawal of children from hazardous occupations and established the "Child Labour Rehabilitation-cum-Welfare Fund" funded by a penal levy of Rs. 20,000 on employers per child employed.',
    facts: [
      'Senior Advocate M.C. Mehta filed a PIL under Article 32 drawing attention to the employment of tens of thousands of young children in match and fireworks factories in Sivakasi, Tamil Nadu.',
      'Children worked 14-hour days mixing toxic explosive chemicals, suffering burns, respiratory diseases, and being denied primary education.',
      'Article 24 explicitly provides: "No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment."',
    ],
    issues: [
      'How to eliminate the rampant constitutional violation of Article 24 in hazardous manufacturing industries.',
      'What economic and educational rehabilitation must be provided to withdrawn child labourers to prevent relapse into destitution.',
    ],
    arguments: {
      appellant: [
        'Poverty cannot be an excuse for constitutional evasion; children handling phosphorus and gun powder in Sivakasi is a national disgrace.',
      ],
      respondent: [
        'Impoverished families depend on child earnings for survival; total ban without financial compensation causes starvation.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 24, 21A & 39(e)',
        title: 'Prohibition of employment of children in factories and hazardous employments',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Article 24 is an absolute constitutional prohibition',
        explanation:
          'Hansaria, J. held that Article 24 is framed as an absolute command. The employment of children below 14 in factories, mines, or hazardous industries like match and fireworks is non-negotiable and illegal. The State cannot tolerate child exploitation on the plea of poverty.',
      },
      {
        heading: 'Penal levy and Rehabilitation Fund',
        explanation:
          'The Court ordered employers violating Article 24 to pay a compensation fine of Rs. 20,000 per child into a dedicated "Child Labour Rehabilitation-cum-Welfare Fund". The State was directed to provide adult employment to an earning member of the family or contribute Rs. 5,000 per child, and ensure free compulsory schooling.',
      },
    ],
    decision:
      'Writ petition allowed. Exhaustive guidelines issued. Hazardous child labour banned, Rs. 20,000 fine per child on employers, and compulsory schooling ordered.',
    holding:
      'Child labour in hazardous industries violates Article 24. Employers must pay Rs. 20,000 fine per child into Child Labour Rehabilitation Fund.',
    ratioDecidendi:
      'Under Article 24 of the Constitution, the prohibition against employing children below 14 years in factories, mines, or hazardous occupations is absolute and self-executing. Any employer engaging child labour in breach of Article 24 is liable to pay a penal compensation of Rs. 20,000 per child into the Child Labour Rehabilitation Fund, and the State must provide free education.',
    obiterDicta:
      'A child belongs in school with books in hand, not in a chemical pit mixing gunpowder for profit.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Pioneering enforcement of fundamental right under Article 24.',
      'Creation of the Child Labour Rehabilitation-cum-Welfare Fund.',
      'Penal levy of Rs. 20,000 per child on offending employers.',
    ],
    mcqs: [
      {
        id: 'child-labour-mcq-1',
        question:
          'In M.C. Mehta v. State of T.N. (Child Labour Case) (1996), what penal compensation was imposed on employers per child employed in hazardous work?',
        options: ['Rs. 5,000', 'Rs. 10,000', 'Rs. 20,000', 'Rs. 50,000'],
        correctIndex: 2,
        explanation:
          'The Supreme Court imposed a penal compensation of Rs. 20,000 per child on employers to be deposited into the Child Labour Rehabilitation Fund.',
      },
    ],
  },
  {
    id: 'godavarman-forest-1997',
    caseName: 'T.N. Godavarman Thirumulpad v. Union of India',
    shortName: 'Godavarman (Forest Conservation)',
    citation: '(1997) 2 SCC 267',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1997,
    bench: '3-Judge Bench',
    judges: ['J.S. Verma, C.J.', 'B.N. Kirpal, J.'],
    subject: 'Environmental Law',
    topics: ['Forest Conservation Act 1980', 'Dictionary Meaning of Forest', 'Ban on Tree Felling', 'Continuing Mandamus'],
    tags: ['AIBE', 'Judiciary', 'Environmental Law', 'Forest Conservation', 'Godavarman', 'Continuing Mandamus', 'Public Trust'],
    summary:
      'The foundational environmental jurisprudence ruling revolutionizing forest protection in India. Reinterpreted the word "forest" in the Forest Conservation Act, 1980 beyond narrow revenue records to include all areas satisfying the dictionary definition of a forest regardless of ownership. Imposed a nationwide ban on non-forest activity and tree felling without Central approval, operating through an ongoing "continuing mandamus".',
    facts: [
      'T.N. Godavarman Thirumulpad filed a PIL under Article 32 highlighting rampant illicit timber logging and deforestation in the Gudalur forests of the Nilgiris in Tamil Nadu.',
      'The State Governments interpreted the Forest Conservation Act, 1980 narrowly as applying only to lands formally notified as "reserved forests" in government revenue records, leaving private and unclassed forests open to clear-felling.',
      'The Supreme Court expanded the scope of the petition into a nationwide continuing inquiry into Indian forest administration.',
    ],
    issues: [
      'What is the true legal meaning and statutory scope of "forest" under Section 2 of the Forest Conservation Act, 1980.',
      'Can non-forest commercial activities, sawmills, and tree felling continue without prior Central Government approval.',
    ],
    arguments: {
      appellant: [
        'Deforestation threatens biodiversity and the ecology of the nation; the 1980 Act was meant to halt deforestation across all forest ecosystems.',
      ],
      respondent: [
        'Private forest owners have property rights; the Act cannot apply to unnotified private plantations without compensation.',
      ],
    },
    provisions: [
      {
        actId: 'environment',
        actName: 'Forest (Conservation) Act, 1980',
        provisionId: 'forest-conservation',
        section: 'Section 2',
        title: 'Restriction on the dereservation of forests or use of forest land for non-forest purpose',
        subjectSlug: 'environment',
      },
    ],
    reasoning: [
      {
        heading: 'Dictionary meaning of "Forest"',
        explanation:
          'Verma, C.J. held that the word "forest" must be understood according to its natural dictionary meaning. It applies to all tracts of land bearing forest characteristics regardless of ownership or classification in revenue records. Section 2 of the 1980 Act applies to all forests, whether private, reserve, or protected.',
      },
      {
        heading: 'Nationwide ban on unregulated felling and sawmills',
        explanation:
          'The Court ordered an immediate nationwide freeze on non-forest activities, shut down unlicensed wood-based sawmills within forest vicinities, and directed all States to constitute expert committees to identify forest areas.',
      },
    ],
    decision:
      'Historic interim orders passed. Dictionary definition of forest adopted. Ongoing monitoring through the Central Empowered Committee (CEC).',
    holding:
      '"Forest" in the Forest Conservation Act, 1980 applies to all areas satisfying the dictionary meaning, irrespective of ownership. Non-forest activity requires Central approval.',
    ratioDecidendi:
      'Under the Forest (Conservation) Act, 1980, the term "forest" must be construed according to its dictionary meaning and encompasses all forest lands irrespective of their ownership, status, or classification. No forest land can be diverted for any non-forest purpose without the prior approval of the Central Government.',
    obiterDicta:
      'Forests are a planetary heritage; their destruction for short-term commercial gains invites ecological catastrophe.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Adoption of the "dictionary meaning" of forest under Forest Conservation Act, 1980.',
      'Applicability to private forests and unnotified forest tracts.',
      'Celebrated example of "continuing mandamus" in Indian environmental law.',
    ],
    mcqs: [
      {
        id: 'godavarman-mcq-1',
        question:
          'In T.N. Godavarman Thirumulpad v. Union of India (1997), how did the Supreme Court define the word "forest"?',
        options: [
          'Only lands registered as reserve forests in British revenue records',
          'According to its natural dictionary meaning, covering all forest lands regardless of ownership',
          'Only lands owned by the Central Government',
          'Only national parks and tiger reserves',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the word "forest" must be understood according to its natural dictionary meaning regardless of ownership.',
      },
    ],
  },
  {
    id: 'bichhri-sludge-1996',
    caseName: 'Indian Council for Enviro-Legal Action v. Union of India (Bichhri Sludge Case)',
    shortName: 'Bichhri Village (Polluter Pays Principle)',
    citation: '(1996) 3 SCC 212',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1996,
    bench: '2-Judge Bench',
    judges: ['B.P. Jeevan Reddy, J.', 'B.N. Kirpal, J.'],
    subject: 'Environmental Law',
    topics: ['Polluter Pays Principle', 'Absolute Liability', 'Chemical Pollution', 'Environmental Restoration'],
    tags: ['AIBE', 'Judiciary', 'Environmental Law', 'Polluter Pays', 'Absolute Liability', 'Article 21', 'Bichhri Village'],
    summary:
      'Landmark environmental law judgment formally incorporating the "Polluter Pays Principle" and the rule of Absolute Liability into Indian environmental jurisprudence. Chemical factories operating in Bichhri village, Rajasthan, dumped toxic "H-acid" sludge, poisoning groundwater and destroying agricultural lands. Ordered the closure of factories, confiscation of assets, and full remediation costs to be recovered from the polluters.',
    facts: [
      'Chemical industrial units owned by Hindustan Agro Chemicals manufactured "H-acid" (an export chemical) in Bichhri village, Udaipur, Rajasthan.',
      'The manufacturing process produced toxic iron and gypsum sludge that was dumped openly on soil without treatment.',
      'Toxic effluents percolated into aquifers, turning drinking water wells into dark, carcinogenic poison, destroying crops, and causing severe skin diseases.',
      'The Indian Council for Enviro-Legal Action filed a PIL under Article 32 seeking emergency remediation and closure.',
    ],
    issues: [
      'What is the scope of liability of an enterprise carrying on hazardous and inherently dangerous industrial activity.',
      'Is the polluter legally bound to pay for the complete environmental remediation and ecological restoration of damaged areas under the Polluter Pays Principle.',
    ],
    arguments: {
      appellant: [
        'The industries operated without requisite consent; groundwater was poisoned permanently, violating the villagers right to water under Article 21.',
      ],
      respondent: [
        'The factories provided local employment and export revenue; liability in tort must be proven in a civil suit, not under Article 32.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 48A',
        title: 'Right to wholesome environment and state protection of ecology',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Reaffirmation of Absolute Liability',
        explanation:
          'Jeevan Reddy, J. applied the Absolute Liability rule laid down in M.C. Mehta (Oleum Gas): An enterprise engaged in a hazardous or inherently dangerous industry owes an absolute and non-delegable duty to the community to ensure no harm results. The liability is strict and absolute, with none of the exceptions of Rylands v. Fletcher.',
      },
      {
        heading: 'Formal adoption of the Polluter Pays Principle',
        explanation:
          'The Court held that the "Polluter Pays Principle" is an essential feature of sustainable development. The financial cost of preventing, controlling, and repairing the environmental damage caused by industrial activity must be borne completely by the enterprise that produced the pollution, not by the government or the public.',
      },
    ],
    decision:
      'Writ petition allowed. All offending chemical plants closed down. The Central Government directed to compute total cost of remediation to be recovered from the polluters as arrears of land revenue.',
    holding:
      'Polluter Pays Principle and Absolute Liability applied. Industrial polluters are liable for the full cost of ecological restoration.',
    ratioDecidendi:
      'Under the Polluter Pays Principle and the doctrine of Absolute Liability, any industrial enterprise carrying on hazardous activity that causes ecological degradation or contamination of groundwater is under an absolute legal obligation to pay the full cost of reversing the environmental damage, restoring the ecosystem, and compensating the affected victims.',
    obiterDicta:
      'No industry can buy a license to poison the earth and water under the cover of commercial profit.',
    relatedCases: [
      {
        judgmentId: 'mc-mehta-oleum-1987',
        caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak)',
        citation: '(1987) 1 SCC 395',
        relationship: 'applied',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The foundational case incorporating the "Polluter Pays Principle" in India.',
      'Application of the Oleum Gas Absolute Liability doctrine to chemical sludge.',
      'Cost of ecological restoration recovered as arrears of land revenue.',
    ],
    mcqs: [
      {
        id: 'bichhri-mcq-1',
        question:
          'In Indian Council for Enviro-Legal Action v. Union of India (Bichhri Case) (1996), which environmental law principle was formally integrated into Indian law?',
        options: [
          'Precautionary Principle only',
          'Polluter Pays Principle',
          'Doctrine of Sovereign Immunity',
          'Public Trust Doctrine only',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court formally integrated the Polluter Pays Principle, holding the polluter liable for the full cost of environmental restoration.',
      },
    ],
  },
  {
    id: 'narmada-bachao-andolan-2000',
    caseName: 'Narmada Bachao Andolan v. Union of India',
    shortName: 'Narmada Bachao Andolan (Sardar Sarovar Dam)',
    citation: '(2000) 10 SCC 664',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2000,
    bench: '3-Judge Bench',
    judges: ['A.S. Anand, C.J.', 'B.N. Kirpal, J.', 'S.P. Bharucha, J.'],
    subject: 'Environmental & Administrative Law',
    topics: ['Sardar Sarovar Dam', 'Sustainable Development', 'Rehabilitation & Resettlement', 'Judicial Restraint in Mega Projects'],
    tags: ['AIBE', 'Judiciary', 'Environment', 'Article 21', 'Sustainable Development', 'Narmada Dam', 'Rehabilitation'],
    summary:
      'Landmark 3-judge bench ruling permitting the continuation of construction of the Sardar Sarovar Dam on the Narmada River up to height clearances cleared by the Narmada Water Disputes Tribunal. Held that large dams are essential for supplying drinking water, irrigation, and green hydroelectric power to drought-prone regions, and balanced environmental concerns through comprehensive, court-monitored Relief and Rehabilitation (R&R) packages.',
    facts: [
      'The Sardar Sarovar Project, a multi-purpose mega-dam on the Narmada River, was planned to supply drinking water to parched areas of Gujarat and Rajasthan and generate power for Madhya Pradesh.',
      'Social activist Medha Patkar and the Narmada Bachao Andolan (NBA) filed a PIL under Article 32 contending that raising the dam height would submerge hundreds of villages, displace tribal communities without rehabilitation, and destroy pristine forest ecosystems.',
      'In 1995, the Supreme Court halted construction pending comprehensive appraisal of relief and environmental clearance.',
    ],
    issues: [
      'Can the judiciary sit in appeal over executive policy decisions to construct mega development dams.',
      'How to balance the right to life under Article 21 of displaced tribals against the right to life and water of millions living in arid, drought-stricken regions.',
    ],
    arguments: {
      appellant: [
        'Involuntary displacement of indigenous tribals without land-for-land rehabilitation violates Article 21; environmental impact was never scientifically studied.',
      ],
      respondent: [
        'The dam will eradicate chronic water scarcity in Saurashtra and Kutch, prevent desertification, and generous R&R packages were framed by the Narmada Tribunal.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to water, sustainable development, and rehabilitation of displaced citizens',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Judicial restraint in mega developmental projects',
        explanation:
          'Kirpal, J. held that when a policy decision to construct a multi-purpose dam is taken after extensive technical studies, the court cannot sit as an appellate environmental authority. Public interest litigation cannot be used to halt mega infrastructure projects unless gross illegality is established.',
      },
      {
        heading: 'Sustainable development and the right to water',
        explanation:
          'The Court held that the right to water is part of the right to life under Article 21. Confining millions in drought zones to misery cannot be justified. Construction was permitted to proceed up to 90 meters, and subsequently stage-by-stage up to 138.68 meters, subject to strict compliance with rehabilitation conditions for displaced persons.',
      },
    ],
    decision:
      'Writ petition dismissed by 2:1 majority (Bharucha, J. dissenting on initial environmental clearance). Construction of the Sardar Sarovar Dam permitted under ongoing Grievance Redressal Authority supervision.',
    holding:
      'Construction of Sardar Sarovar Dam permitted. Courts must exercise restraint in technical mega projects while enforcing robust rehabilitation.',
    ratioDecidendi:
      'In environmental and developmental jurisprudence under Article 21, courts must apply the principle of sustainable development to harmonize ecological concerns with the legitimate necessity for infrastructure. When a mega-project provides drinking water and irrigation to millions, construction cannot be halted if adequate rehabilitation and resettlement packages are enforced for displaced persons.',
    obiterDicta:
      'Dams are modern instruments of national development that eradicate water famine and foster human progress.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading judgment on balancing economic development and environmental protection.',
      'Scope of judicial review over policy decisions in infrastructure projects.',
      'Enforceability of Relief and Rehabilitation (R&R) packages under Article 21.',
    ],
    mcqs: [
      {
        id: 'narmada-mcq-1',
        question:
          'In Narmada Bachao Andolan v. Union of India (2000), on what condition was the construction of the Sardar Sarovar Dam permitted to proceed?',
        options: [
          'Immediate demolition of all canals',
          'Strict compliance with stage-by-stage relief and rehabilitation packages for displaced persons',
          'Privatization of all water distribution',
          'Permanent freeze at 60 meters height',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court permitted construction to proceed subject to strict compliance with stage-by-stage relief and rehabilitation (R&R) packages.',
      },
    ],
  },
  {
    id: 'subramanian-swamy-sanction-2012',
    caseName: 'Subramanian Swamy v. Manmohan Singh',
    shortName: 'Subramanian Swamy (Prosecution Sanction Deadline)',
    citation: '(2012) 3 SCC 64',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2012,
    bench: '2-Judge Bench',
    judges: ['G.S. Singhvi, J.', 'Asok Kumar Ganguly, J.'],
    subject: 'Criminal Law / Prevention of Corruption',
    topics: ['Prosecution Sanction', 'Section 19 PC Act', 'Private Citizen Right', 'Three-Month Time Limit'],
    tags: ['AIBE', 'Judiciary', 'PC Act', 'Section 19', 'Corruption', 'Prosecution Sanction', 'Subramanian Swamy', 'Time Limit'],
    summary:
      'Landmark Supreme Court ruling establishing that any private citizen has the constitutional right to file a complaint against a corrupt public servant and seek sanction for prosecution under Section 19 of the Prevention of Corruption Act, 1988. Imposed a strict outer deadline of 3 months (extendable by 1 month for legal consultation) for the competent authority to grant or refuse prosecution sanction.',
    facts: [
      'Dr. Subramanian Swamy applied to the Prime Minister of India (as the competent sanctioning authority) for sanction to prosecute Telecom Minister A. Raja for criminal misconduct in the 2G Spectrum Scam.',
      'The Prime Ministers Office sat on the application for over 16 months without granting or rejecting the sanction.',
      'Swamy approached the Supreme Court under Article 32 challenging the indefinite inaction of the sanctioning authority as a denial of the rule of law.',
    ],
    issues: [
      'Does a private citizen have locus standi to seek sanction for prosecution of a public servant under Section 19 of the Prevention of Corruption Act.',
      'Can a competent authority keep a prosecution sanction application pending indefinitely.',
    ],
    arguments: {
      appellant: [
        'Holding a sanction request indefinitely creates an unconstitutional shield of immunity for corrupt ministers; a citizen has a fundamental right to combat corruption.',
      ],
      respondent: [
        'Sanction is an administrative shield to protect honest officers; private citizens cannot demand prosecution when CBI investigation is already underway.',
      ],
    },
    provisions: [
      {
        actId: 'pc-act',
        actName: 'Prevention of Corruption Act, 1988',
        provisionId: 'pc-s-19',
        section: 'Section 19',
        title: 'Previous sanction necessary for prosecution of public servants',
        subjectSlug: 'criminal-law',
      },
    ],
    reasoning: [
      {
        heading: 'Right of a private citizen to seek sanction',
        explanation:
          'Singhvi, J. held that there is no provision in the PC Act restricting the right to seek sanction only to investigating police agencies. Any citizen can trigger criminal law against corruption by applying for statutory sanction under Section 19.',
      },
      {
        heading: 'Strict 3-month deadline for sanction',
        explanation:
          'Indefinite delay in deciding sanction defeats the purpose of anti-corruption legislation. The Court laid down a strict outer limit of 3 months for the competent authority to grant or refuse sanction. An additional 1 month is permitted only where consultation with the Attorney General or legal experts is required.',
      },
    ],
    decision:
      'Writ petition allowed. Private citizen right to seek sanction affirmed. Binding 3-month time limit imposed on all sanctioning authorities.',
    holding:
      'Private citizens can seek prosecution sanction under Section 19 PC Act. Competent authority must decide within a strict 3-month deadline.',
    ratioDecidendi:
      'Under Section 19 of the Prevention of Corruption Act, 1988, a private citizen has the statutory right to seek sanction to prosecute a public servant. The competent authority is under a mandatory duty to decide the application within a maximum timeframe of three months (extendable by one month for legal advice); keeping sanction requests pending indefinitely is illegal and subverts the rule of law.',
    obiterDicta:
      'Justice Ganguly suggested that if the authority fails to decide within the deadline, sanction should be deemed to have been granted.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Private citizen locus standi to apply for Section 19 PC Act sanction.',
      'Mandatory 3-month deadline for deciding prosecution sanction.',
      'Deemed sanction jurisprudence and anti-corruption accountability.',
    ],
    mcqs: [
      {
        id: 'swamy-sanction-mcq-1',
        question:
          'In Subramanian Swamy v. Manmohan Singh (2012), what maximum timeframe was fixed for the competent authority to decide a prosecution sanction request?',
        options: ['1 month', '3 months (extendable by 1 month for legal advice)', '6 months', '1 year'],
        correctIndex: 1,
        explanation:
          'The Supreme Court fixed a strict deadline of 3 months, extendable by 1 month for consultation with legal officers.',
      },
    ],
  },
  {
    id: 'pv-narasimha-rao-1998',
    caseName: 'P.V. Narasimha Rao v. State (JMM Bribery Case)',
    shortName: 'P.V. Narasimha Rao (Parliamentary Immunity)',
    citation: '(1998) 4 SCC 626',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1998,
    bench: '5-Judge Constitution Bench',
    judges: [
      'S.P. Bharucha, J.',
      'G.N. Ray, J.',
      'S.C. Agrawal, J.',
      'A.S. Anand, J.',
      'S. Rajendra Babu, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Parliamentary Privilege', 'Article 105(2)', 'Bribery for Votes', 'Legislative Immunity'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 105', 'Parliamentary Privilege', 'Bribery', 'JMM Case'],
    summary:
      'Controversial 5-judge Constitution Bench decision interpreting parliamentary privileges under Article 105(2) and Article 194(2) of the Constitution. By a 3:2 majority, held that Members of Parliament who took bribes and voted in accordance with the corrupt agreement were immune from criminal prosecution because their vote was cast in Parliament, whereas members who took bribes but did not vote enjoyed no immunity. (Overruled in 2024 by 7-judge bench in Sita Soren).',
    facts: [
      'In July 1993, the minority Congress Government led by Prime Minister P.V. Narasimha Rao faced a no-confidence motion in the Lok Sabha.',
      'Bribes of several lakhs of rupees were allegedly paid to MPs of the Jharkhand Mukti Morcha (JMM) and Janata Dal to vote against the motion.',
      'The MPs voted against the motion, defeating it. One MP, Ajit Singh, allegedly accepted the bribe money but did not attend Parliament to vote.',
      'The CBI registered corruption cases under the PC Act. The accused MPs claimed absolute constitutional immunity under Article 105(2).',
    ],
    issues: [
      'Does the parliamentary immunity under Article 105(2) ("in respect of anything said or any vote given by him in Parliament") protect an MP from criminal prosecution for taking a bribe to vote.',
      'Is there an irrational distinction between an MP who takes a bribe and votes, versus an MP who takes a bribe and does not vote.',
    ],
    arguments: {
      appellant: [
        'The phrase "in respect of" in Article 105(2) is wide and encompasses any bribe connected with voting; courts cannot inquire into parliamentary proceedings.',
      ],
      respondent: [
        'Parliamentary privilege is meant to protect fearless speech, not to immunize bribery and treason against the electorate.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Article 105(2) & 194(2)',
        title: 'Powers, privileges, and immunities of Parliament and Members',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Majority ruling on broad literal interpretation of Article 105(2)',
        explanation:
          'Bharucha, J. (for the 3-judge majority) held that the words "in respect of anything said or any vote given" must receive a broad literal construction. The vote cast was the proximate fruit of the bribe; therefore, prosecuting the MP who voted impinged upon the vote given in Parliament. Those MPs were granted constitutional immunity.',
      },
      {
        heading: 'The anomaly regarding non-voters',
        explanation:
          'The majority held that an MP who took a bribe but did not vote (like Ajit Singh) did not cast a vote in Parliament and was therefore not protected by Article 105(2), creating the bizarre anomaly that a corrupt MP who faithfully executed his corrupt bargain was immune, while one who repented was prosecutable.',
      },
    ],
    decision:
      'Appeals allowed in part by 3:2 majority. Corrupt MPs who voted against the no-confidence motion held immune from prosecution under Article 105(2). (Overruled by Sita Soren in 2024).',
    holding:
      'MPs who accepted bribes and cast their vote in Parliament held immune from criminal prosecution under Article 105(2). (Overruled in 2024).',
    ratioDecidendi:
      'Under the original majority interpretation of Article 105(2) of the Constitution, an MP who accepted a bribe to vote in a particular manner and subsequently cast that vote in Parliament enjoyed absolute immunity from criminal prosecution in courts of law. (This ruling has been expressly overruled by the 7-judge Constitution Bench in Sita Soren v. Union of India).',
    obiterDicta:
      'Agrawal, J. and Anand, J. dissented, warning that granting immunity to bribery would subvert the moral foundation of democratic governance.',
    relatedCases: [
      {
        judgmentId: 'sita-soren-2024',
        caseName: 'Sita Soren v. Union of India',
        citation: '(2024) 5 SCC 629',
        relationship: 'overruled',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The controversial 1998 majority interpretation of Article 105(2).',
      'The paradox of immunizing bribe-takers who voted while prosecuting non-voters.',
      'Expressly overruled in 2024 by 7-judge bench in Sita Soren v. Union of India.',
    ],
    mcqs: [
      {
        id: 'pv-narasimha-rao-mcq-1',
        question:
          'Which recent 7-judge Constitution Bench decision in 2024 overruled the parliamentary immunity ruling of P.V. Narasimha Rao v. State (1998)?',
        options: [
          'Sita Soren v. Union of India',
          'Anoop Baranwal v. Union of India',
          'Kaushal Kishor v. State of U.P.',
          'Supriyo v. Union of India',
        ],
        correctIndex: 0,
        explanation:
          'Sita Soren v. Union of India (2024) expressly overruled P.V. Narasimha Rao, holding that legislators taking bribes have zero immunity under Article 105(2).',
      },
    ],
  },
  {
    id: 'sita-soren-2024',
    caseName: 'Sita Soren v. Union of India',
    shortName: 'Sita Soren (Bribery Immunity Overruled)',
    citation: '(2024) 5 SCC 629',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2024,
    bench: '7-Judge Constitution Bench',
    judges: [
      'D.Y. Chandrachud, C.J.',
      'A.S. Bopanna, J.',
      'M.M. Sundresh, J.',
      'P.S. Narasimha, J.',
      'J.B. Pardiwala, J.',
      'Sanjay Kumar, J.',
      'Manoj Misra, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 105(2) & 194(2)', 'Bribery of Legislators', 'Overruling P.V. Narasimha Rao', 'Parliamentary Privileges'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 105', 'Article 194', 'Bribery', 'Sita Soren', 'Privilege'],
    summary:
      'Unanimous 7-judge Constitution Bench judgment unanimously overruling the 1998 majority ruling in P.V. Narasimha Rao. Held that parliamentary privilege and legislative immunity under Articles 105(2) and 194(2) do not protect Members of Parliament or State Legislators from criminal prosecution for accepting bribes to cast a vote or deliver a speech. Ruled that corruption and bribery subvert democratic governance and can never be claimed as a privilege.',
    facts: [
      'Sita Soren, a Member of the Jharkhand Legislative Assembly, allegedly accepted a bribe to cast her vote in favor of an independent candidate in the 2012 Rajya Sabha elections.',
      'However, she ended up voting for her own party candidate instead.',
      'When the CBI filed a chargesheet under the Prevention of Corruption Act, she claimed immunity under Article 194(2) relying on the P.V. Narasimha Rao precedent.',
      'The Jharkhand High Court dismissed her plea, and on appeal, the Supreme Court referred the matter to a 7-judge Constitution Bench to reconsider the correctness of P.V. Narasimha Rao.',
    ],
    issues: [
      'Does the parliamentary immunity under Article 105(2) and Article 194(2) protect a legislator from criminal prosecution on a charge of bribery for voting or speaking in the House.',
      'Was the majority decision in P.V. Narasimha Rao v. State (1998) correctly decided.',
    ],
    arguments: {
      appellant: [
        'The text of Article 194(2) contains the phrase "in respect of anything said or any vote given", which shields the legislator from any judicial proceedings regarding voting.',
      ],
      respondent: [
        'The offence of bribery is complete the moment the bribe is demanded or accepted; it has no nexus with the legitimate functioning of Parliament.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Article 105(2) & 194(2)',
        title: 'Powers, privileges, and immunities of Parliament and State Legislatures',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Parliamentary privileges are functional, not personal shields',
        explanation:
          'Chandrachud, C.J. held that parliamentary privileges are not individual exemptions or badges of feudal nobility. They are functional immunities granted to ensure that the House functions fearlessly. Bribery does not enhance the deliberative capacity of Parliament; on the contrary, it pollutes the legislative process and subverts democratic integrity.',
      },
      {
        heading: 'Offence of bribery is independent of the vote cast',
        explanation:
          'The Court held that the offence of bribery under the Prevention of Corruption Act is complete the moment the illegal gratification is accepted or agreed to be accepted. It is entirely immaterial whether the legislator ultimately voted in accordance with the bribe, voted against it, or did not vote at all. P.V. Narasimha Rao was unanimously overruled.',
      },
    ],
    decision:
      'Appeal dismissed. P.V. Narasimha Rao v. State overruled. Held that legislators accepting bribes for speeches or votes enjoy zero immunity under Articles 105(2) and 194(2).',
    holding:
      'Unanimous 7-judge bench overruled P.V. Narasimha Rao. Legislators taking bribes to vote or speak have no immunity from criminal prosecution under Articles 105(2) and 194(2).',
    ratioDecidendi:
      'Under Articles 105(2) and 194(2) of the Constitution, parliamentary privileges and immunities do not extend to shield a Member of Parliament or State Legislature from criminal prosecution for bribery in connection with their speech or vote. The offence of bribery is complete upon acceptance of gratification, independent of the vote cast. P.V. Narasimha Rao v. State is overruled.',
    obiterDicta:
      'Corruption and bribery by legislators destroy the constitutional foundation of democratic representation and public trust.',
    relatedCases: [
      {
        judgmentId: 'pv-narasimha-rao-1998',
        caseName: 'P.V. Narasimha Rao v. State (JMM Bribery Case)',
        citation: '(1998) 4 SCC 626',
        relationship: 'overruled',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Historic 7-judge Constitution Bench overruling P.V. Narasimha Rao (1998).',
      'Absolute bar on claiming parliamentary privilege for bribery under Articles 105/194.',
      'Bribery offence is complete upon receipt of gratification, regardless of the vote.',
    ],
    mcqs: [
      {
        id: 'sita-soren-mcq-1',
        question:
          'In Sita Soren v. Union of India (2024), what did the 7-judge Constitution Bench rule regarding bribery of legislators under Article 105(2) and 194(2)?',
        options: [
          'Legislators enjoy absolute immunity if they vote in accordance with the bribe',
          'Legislators taking bribes to vote or speak have zero immunity from criminal prosecution',
          'Only the Speaker can punish corrupt legislators',
          'Immunity applies if the bribe is below Rs. 10 Lakh',
        ],
        correctIndex: 1,
        explanation:
          'The 7-judge bench unanimously held that legislators accepting bribes enjoy zero immunity from criminal prosecution under Articles 105(2) and 194(2).',
      },
    ],
  },
  {
    id: 'anil-kumar-aiyappa-2013',
    caseName: 'Anil Kumar v. M.K. Aiyappa',
    shortName: 'Anil Kumar (Section 156(3) Sanction)',
    citation: '(2013) 10 SCC 705',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2013,
    bench: '2-Judge Bench',
    judges: ['K.S. Radhakrishnan, J.', 'A.K. Sikri, J.'],
    subject: 'Criminal Law / Prevention of Corruption',
    topics: ['Section 156(3) CrPC', 'Section 19 PC Act', 'Prior Sanction for Investigation', 'Public Servants'],
    tags: ['AIBE', 'Judiciary', 'PC Act', 'Section 19', 'CrPC 156(3)', 'BNSS 175(3)', 'Sanction', 'Public Servant'],
    summary:
      'Authoritative Supreme Court ruling on the requirement of prior government sanction before directing a police investigation against a public servant. Held that a Special Judge or Magistrate cannot refer a private complaint against a public servant for investigation under Section 156(3) CrPC (now Section 175(3) BNSS) under the Prevention of Corruption Act without prior valid statutory sanction under Section 19(1) PC Act.',
    facts: [
      'A private complaint was filed before the Special Judge, Lokayukta, Bangalore, alleging corruption, illegal denotification of land, and abuse of official position against an IAS officer (M.K. Aiyappa).',
      'The complainant filed no sanction order under Section 19 of the Prevention of Corruption Act.',
      'The Special Judge directed the police to investigate the complaint under Section 156(3) CrPC.',
      'The Karnataka High Court quashed the order, holding that without valid sanction, a Magistrate has no jurisdiction to order an investigation under Section 156(3).',
      'The complainant appealed to the Supreme Court.',
    ],
    issues: [
      'Can a Magistrate direct an investigation under Section 156(3) CrPC against a public servant accused of corruption in the absence of valid sanction under Section 19(1) of the PC Act.',
      'Does the requirement of sanction attach only at the stage of taking cognizance under Section 190 CrPC, or also when ordering Section 156(3) investigation.',
    ],
    arguments: {
      appellant: [
        'Ordering investigation under Section 156(3) is a pre-cognizance stage; Section 19 PC Act bars taking cognizance, not investigation.',
      ],
      respondent: [
        'If private complainants can trigger police investigations against public servants without sanction, frivolous complaints will paralyze honest public administration.',
      ],
    },
    provisions: [
      {
        actId: 'pc-act',
        actName: 'Prevention of Corruption Act, 1988',
        provisionId: 'pc-s-19',
        section: 'Section 19(1)',
        title: 'Previous sanction necessary for prosecution of public servants',
        subjectSlug: 'criminal-law',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'fir-investigation',
        section: 'Section 156(3) CrPC / Section 175(3) BNSS',
        title: 'Power of Magistrate to order police investigation',
        subjectSlug: 'bnss',
        topicId: 'fir-investigation',
      },
    ],
    reasoning: [
      {
        heading: 'Sanction is mandatory even for Section 156(3) orders',
        explanation:
          'Radhakrishnan, J. held that when a Special Judge directs an investigation under Section 156(3) on a private complaint, he applies his judicial mind to the allegations. The word "cognizance" has a wider connotation. If a Magistrate cannot take cognizance without sanction, he cannot direct an investigation under Section 156(3) against a public servant without prior valid sanction.',
      },
      {
        heading: 'Protection of public servants from malicious harassment',
        explanation:
          'Section 19 PC Act was designed to protect honest public servants from vexatious and malicious complaints. Allowing private complainants to circumvent the requirement of sanction by invoking Section 156(3) would render the statutory protection completely nugatory.',
      },
    ],
    decision:
      'Appeal dismissed. High Court judgment quashing the Section 156(3) direction in the absence of prior sanction affirmed.',
    holding:
      'A Magistrate cannot order an investigation under Section 156(3) CrPC against a public servant under the PC Act without prior statutory sanction.',
    ratioDecidendi:
      'Under the Prevention of Corruption Act, 1988 read with Section 156(3) CrPC (Section 175(3) BNSS), a Special Judge or Magistrate has no jurisdiction to refer a private complaint against a public servant to the police for investigation without prior valid sanction from the competent government authority under Section 19(1) of the PC Act.',
    obiterDicta:
      'A direction under Section 156(3) is a judicial order requiring application of mind, not a ministerial clerical referral.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Prior sanction requirement under Section 19 PC Act for Section 156(3) CrPC orders.',
      'Protection of public servants against frivolous private complaints.',
      'Comparison between pre-cognizance investigation and judicial application of mind.',
    ],
    mcqs: [
      {
        id: 'aiyappa-mcq-1',
        question:
          'In Anil Kumar v. M.K. Aiyappa (2013), what did the Supreme Court hold regarding Section 156(3) CrPC against public servants under the PC Act?',
        options: [
          'Investigation can be ordered without any sanction',
          'Prior government sanction under Section 19 PC Act is mandatory before ordering Section 156(3) investigation',
          'Only the High Court can order Section 156(3) investigation',
          'Sanction is needed only for arrest, not for investigation',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that prior government sanction under Section 19 PC Act is mandatory before a Magistrate can order a Section 156(3) investigation against a public servant.',
      },
    ],
  },
]
