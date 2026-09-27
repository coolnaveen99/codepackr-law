import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_15A: Judgment[] = [
  {
    id: 'mithu-1983',
    caseName: 'Mithu v. State of Punjab',
    shortName: 'Mithu (Mandatory Death Penalty)',
    citation: '(1983) 2 SCC 277',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 1983,
    bench: '5-Judge Constitution Bench',
    judges: [
      'Y.V. Chandrachud, C.J.',
      'S. Murtaza Fazal Ali, J.',
      'V.D. Tulzapurkar, J.',
      'O. Chinnappa Reddy, J.',
      'A. Varadarajan, J.',
    ],
    subject: 'Criminal Law',
    topics: ['Mandatory Death Penalty', 'Section 303 IPC', 'Article 14', 'Article 21', 'Sentencing Discretion'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 303', 'Death Penalty', 'Article 14', 'Article 21'],
    summary:
      'Historic 5-judge Constitution Bench judgment striking down Section 303 of the Indian Penal Code as unconstitutional, null and void. Section 303 mandated death penalty for any person committing murder while undergoing a life sentence. Held that stripping the judiciary of sentencing discretion and creating an irrational classification violates Articles 14 and 21.',
    facts: [
      'Mithu and several other life-convicts challenged the constitutional validity of Section 303 IPC.',
      'Section 303 provided: "Whoever, being under sentence of imprisonment for life, commits murder, shall be punished with death."',
      'Unlike Section 302 IPC (now Section 103(1) BNS), which provided life imprisonment or death, Section 303 left judges zero discretion, compelling the mandatory imposition of the death sentence upon conviction.',
    ],
    issues: [
      'Whether Section 303 IPC violates Article 14 by creating an arbitrary and unreasonable classification between persons committing murder while undergoing life imprisonment and others.',
      'Whether the deprivation of judicial sentencing discretion violates the guarantee of fair, just, and reasonable procedure under Article 21.',
    ],
    arguments: {
      appellant: [
        'Mandatory death penalty prevents the court from considering mitigating circumstances, the convict age, mental condition, or provocation.',
        'Section 303 treats all life convicts as an irredeemable class without any rational nexus to penal objectives.',
      ],
      respondent: [
        'Life convicts who commit murder have already demonstrated incorrigibility and contempt for law.',
        'A mandatory death sentence serves as a necessary deterrent inside prisons.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'culpable-homicide-murder',
        section: 'Section 303 IPC (Omitted in BNS)',
        title: 'Punishment for murder by life-convict — Struck down as unconstitutional',
        subjectSlug: 'bns',
        topicId: 'culpable-homicide-murder',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21 & Article 14',
        title: 'Fundamental requirement of judicial sentencing discretion and fair procedure',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Arbitrary classification under Article 14',
        explanation:
          'Chandrachud, C.J. held that Section 303 IPC creates an irrational distinction between murders committed by life convicts and murders committed by persons not under life sentence. A person on parole, or whose conviction is suspended, was mechanically subjected to the gallows without any rational basis.',
      },
      {
        heading: 'Denial of judicial discretion violates Article 21',
        explanation:
          'A law which deprives the court of the use of its wise and beneficent discretion to choose between life imprisonment and death penalty is harsh, unreasonable, and oppressive. Following Maneka Gandhi and Bachan Singh, procedure established by law must be just, fair, and reasonable.',
      },
    ],
    decision:
      'Section 303 of the Indian Penal Code struck down as unconstitutional, null and void. All murders committed by life-convicts to be governed by Section 302 IPC (now Section 103 BNS).',
    holding:
      'Mandatory death penalty is unconstitutional. Depriving judges of sentencing discretion violates Articles 14 and 21.',
    ratioDecidendi:
      'Section 303 IPC violates Articles 14 and 21 because it deprives the court of its judicial discretion to determine the appropriate sentence based on the circumstances of the offender and the crime. A mandatory death penalty denies the fundamental right to be heard on sentence under Section 235(2) CrPC.',
    obiterDicta:
      'Judicial sentencing discretion is an indispensable safeguard in capital cases, ensuring justice is tailored to individual human culpability.',
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
      'Section 303 IPC struck down as violative of Articles 14 and 21.',
      'Mandatory capital punishment is wholly unconstitutional in India.',
      'Judges must retain discretion to consider mitigating circumstances under Bachan Singh doctrine.',
    ],
    mcqs: [
      {
        id: 'mithu-mcq-1',
        question:
          'In Mithu v. State of Punjab (1983), the Supreme Court struck down which section of the Indian Penal Code?',
        options: ['Section 302', 'Section 303', 'Section 304B', 'Section 309'],
        correctIndex: 1,
        explanation:
          'In Mithu v. State of Punjab (1983), the Supreme Court struck down Section 303 IPC (mandatory death penalty for life convicts) as violative of Articles 14 and 21.',
      },
    ],
  },
  {
    id: 'satvir-singh-2001',
    caseName: 'Satvir Singh v. State of Punjab',
    shortName: 'Satvir Singh (Dowry Death)',
    citation: '(2001) 8 SCC 633',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2001,
    bench: '2-Judge Bench',
    judges: ['K.T. Thomas, J.', 'S.N. Variava, J.'],
    subject: 'Criminal Law',
    topics: ['Dowry Death', 'Section 304B IPC', 'Soon Before Her Death', 'Section 113B Evidence Act'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 304B', 'BNS 80', 'BSA 118', 'Dowry Death'],
    summary:
      'Authoritative Supreme Court ruling on the interpretation of "soon before her death" in Section 304B IPC (now Section 80 BNS) and Section 113B Evidence Act (now Section 118 BSA). Established that the expression cannot be reduced to a mechanical mathematical formula but requires an unbroken proximate and live nexus between cruelty for dowry and the unnatural death.',
    facts: [
      'The deceased married the appellant in May 1994. Demands for scooter and cash were persistently made by the in-laws.',
      'The deceased committed suicide by consuming organophosphorus poison within three years of marriage.',
      'The trial court and High Court convicted the husband and mother-in-law under Sections 304B and 498A IPC.',
      'The appellant contended before the Supreme Court that cruelty had not occurred immediately prior to death and that the marriage had seen intervening periods of normalcy.',
    ],
    issues: [
      'What is the precise legal meaning of "soon before her death" in Section 304B IPC and Section 113B Indian Evidence Act.',
      'Whether the statutory presumption of dowry death arises automatically or requires proof of proximate cruelty.',
    ],
    arguments: {
      appellant: [
        'There was no specific act of cruelty on the exact day or week of the suicide; therefore, the statutory presumption could not be triggered.',
      ],
      respondent: [
        'Cruelty was continuous since the inception of the marriage, creating a persistent, hostile domestic environment that drove the deceased to take her life.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 's-152',
        section: 'Section 304B IPC / Section 80 BNS',
        title: 'Dowry death and proximate cruelty',
        subjectSlug: 'bns',
      },
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'burden-proof',
        section: 'Section 113B IEA / Section 118 BSA',
        title: 'Presumption as to dowry death',
        subjectSlug: 'bsa',
        topicId: 'burden-proof',
      },
    ],
    reasoning: [
      {
        heading: 'Proximate and live link test',
        explanation:
          'K.T. Thomas, J. held that "soon before" is a relative term that cannot be measured by days, months, or years. There must be an unbroken proximate and live link between the effect of cruelty based on dowry demand and the death of the victim. If the interval is so long that the earlier harassment had faded, the presumption under Section 113B does not operate.',
      },
      {
        heading: 'Mandatory ingredients of Section 304B',
        explanation:
          'The prosecution must prove: (1) death of woman caused by burns, bodily injury, or unnatural circumstances; (2) death occurred within 7 years of marriage; (3) woman was subjected to cruelty or harassment by husband or relatives; (4) such cruelty was in connection with dowry demand; (5) cruelty occurred soon before her death.',
      },
    ],
    decision:
      'Appeal dismissed in part. Conviction of husband under Section 304B and 498A upheld due to proved unbroken live nexus between dowry harassment and suicide.',
    holding:
      '"Soon before her death" requires an unbroken proximate and live link between dowry harassment and unnatural death.',
    ratioDecidendi:
      'Under Section 304B IPC and Section 113B Evidence Act, "soon before her death" does not mean immediately prior to death, but requires the prosecution to prove an active, proximate, and subsisting nexus showing that the deceased was enduring ongoing dowry cruelty at the time of her unnatural death.',
    obiterDicta:
      'Where the dowry demand has been amicably resolved or long dormant, a sudden subsequent quarrel unrelated to dowry cannot attract Section 304B.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Formulated the "proximate and live link" doctrine for dowry death under Section 304B IPC (Section 80 BNS).',
      'The presumption under Section 113B Evidence Act (Section 118 BSA) is mandatory once initial ingredients are proved.',
      'Unnatural death must take place within 7 years of marriage.',
    ],
    mcqs: [
      {
        id: 'satvir-singh-mcq-1',
        question:
          'What test did the Supreme Court establish in Satvir Singh v. State of Punjab regarding "soon before her death"?',
        options: [
          'Strict 24-hour rule',
          'Proximate and live link test',
          'Mechanical 30-day window',
          'Beyond reasonable doubt standard only',
        ],
        correctIndex: 1,
        explanation:
          'Satvir Singh v. State of Punjab established the "proximate and live link" test showing ongoing, subsisting dowry harassment leading up to death.',
      },
    ],
  },
  {
    id: 'shafi-mohammad-2018',
    caseName: 'Shafi Mohammad v. State of H.P.',
    shortName: 'Shafi Mohammad (Section 65B)',
    citation: '(2018) 2 SCC 801',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2018,
    bench: '2-Judge Bench',
    judges: ['A.K. Goel, J.', 'U.U. Lalit, J.'],
    subject: 'Law of Evidence',
    topics: ['Electronic Evidence', 'Section 65B Certificate', 'Secondary Evidence', 'Admissibility'],
    tags: ['AIBE', 'Judiciary', 'Evidence', 'Section 65B', 'BSA 63', 'Electronic Records'],
    summary:
      'Significant Supreme Court decision holding that the requirement of producing a certificate under Section 65B(4) Evidence Act is not mandatory where the party seeking to produce electronic evidence is not in possession or control of the device. (Note: Substantially clarified and overruled by the 3-judge bench in Arjun Panditrao Khotkar in 2020).',
    facts: [
      'In a criminal prosecution in Himachal Pradesh, the State relied on CCTV footage and digital call records.',
      'The trial court and appellate authorities encountered conflicting interpretations of the 3-judge bench ruling in Anvar P.V. regarding whether third parties without device custody could produce electronic evidence without a Section 65B certificate.',
    ],
    issues: [
      'Whether a Section 65B(4) certificate is an absolute mandatory condition precedent even when the electronic device is not in possession or control of the party producing it.',
      'Whether procedural technicalities can shut out relevant electronic evidence in the interest of justice.',
    ],
    arguments: {
      appellant: [
        'A party who does not own or operate the computer server cannot compel the owner to issue a Section 65B certificate; insisting on it leads to grave miscarriage of justice.',
      ],
      respondent: [
        'Anvar P.V. clearly held Section 65B is a special self-contained code excluding Section 63 and 65 general secondary evidence.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 's-63',
        section: 'Section 65B IEA / Section 63 BSA',
        title: 'Admissibility of electronic records and certification requirements',
        subjectSlug: 'bsa',
        topicId: 's-63',
      },
    ],
    reasoning: [
      {
        heading: 'Dispensation of certificate for third parties without device custody',
        explanation:
          'The 2-judge bench held that where a party producing electronic evidence is not in possession of the electronic device, Section 65B(4) certificate is not mandatory, and secondary evidence can be admitted under Sections 63 and 65 of the Evidence Act.',
      },
    ],
    decision:
      'Directions issued permitting secondary electronic evidence without Section 65B(4) certificate when the party lacks device possession. (Overruled on this point by Arjun Panditrao Khotkar in 2020).',
    holding:
      'Section 65B(4) certificate relaxed for third parties without physical custody of device. (Subject to subsequent overruling in Arjun Panditrao).',
    ratioDecidendi:
      'A party who is not in custody of the electronic device cannot be compelled to produce a Section 65B(4) certificate, and may prove electronic secondary evidence under ordinary rules of evidence.',
    obiterDicta:
      'Courts must harmonize procedural rules with the technological reality of modern criminal trials.',
    relatedCases: [
      {
        judgmentId: 'arjun-panditrao-2020',
        caseName: 'Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal',
        citation: '(2020) 7 SCC 1',
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
      'Important milestone in electronic evidence jurisprudence.',
      'Held Section 65B(4) directory for non-device holders, but later overruled by Arjun Panditrao Khotkar (2020).',
      'Under BSA 2023 Section 63, electronic records are directly recognized with streamlined certification.',
    ],
    mcqs: [
      {
        id: 'shafi-mohammad-mcq-1',
        question:
          'Which 3-judge bench decision in 2020 overruled the relaxed certificate rule of Shafi Mohammad v. State of H.P.?',
        options: [
          'Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal',
          'State of Karnataka v. Selvi',
          'Lalita Kumari v. Govt. of U.P.',
          'Puttaswamy v. Union of India',
        ],
        correctIndex: 0,
        explanation:
          'Arjun Panditrao Khotkar (2020) overruled Shafi Mohammad, holding Section 65B(4) certification strictly mandatory.',
      },
    ],
  },
  {
    id: 'tukaram-mathura-1979',
    caseName: 'Tukaram v. State of Maharashtra (Mathura Rape Case)',
    shortName: 'Mathura Rape Case',
    citation: '(1979) 2 SCC 143',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1979,
    bench: '2-Judge Bench',
    judges: ['Jaswant Singh, J.', 'P.S. Kailasam, J.'],
    subject: 'Criminal Law',
    topics: ['Custodial Rape', 'Consent in Rape', 'Section 375 IPC', 'Section 114A Evidence Act'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 375', 'Custodial Rape', 'Evidence Act', 'Criminal Law Reforms'],
    summary:
      'Infamous decision reversing the conviction of police constables for the custodial rape of a young tribal girl, Mathura, on the erroneous reasoning that absence of physical injuries inferred passive consent. The widespread outrage sparked an open letter by law professors (Upendra Baxi, Lotika Sarkar et al.) and led to landmark reforms via the Criminal Law (Amendment) Act, 1983.',
    facts: [
      'Mathura, a young orphaned tribal girl aged between 14 and 16, was summoned to the Desai Ganj police station in Maharashtra.',
      'Inside the latrine/compound of the police station in the dead of night, police constables Tukaram and Ganpat subjected her to sexual intercourse.',
      'The Sessions Judge acquitted the accused holding Mathura was a "habituated to sexual intercourse" girl who consented.',
      'The Bombay High Court reversed and convicted the accused of custodial rape.',
      'The Supreme Court reversed the High Court, holding that because there were no marks of physical injury or struggle, Mathura must have passively submitted or consented.',
    ],
    issues: [
      'Whether the absence of physical injury on the victim implies voluntary consent under Section 375 IPC.',
      'Whether submission under fear and intimidation in police custody constitutes consent.',
    ],
    arguments: {
      appellant: [
        'The girl showed no physical resistance, raised no alarm, and medical examination revealed no abrasions.',
      ],
      respondent: [
        'A young girl detained inside a locked police station at midnight was terrorized by armed policemen; fear of death or hurt vitiates consent.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'sexual-offences',
        section: 'Section 375/376 IPC / Section 63/64 BNS',
        title: 'Rape and non-consent under custodial intimidation',
        subjectSlug: 'bns',
        topicId: 'sexual-offences',
      },
    ],
    reasoning: [
      {
        heading: 'Flawed conflation of submission with consent',
        explanation:
          'The Supreme Court held that the prosecution failed to prove lack of consent because Mathura showed no marks of physical injury and did not scream. This reasoning ignored the psychological terror and coercive atmosphere of custodial detention.',
      },
    ],
    decision:
      'Appeal allowed. Accused police constables acquitted on grounds of reasonable doubt regarding consent. (Triggered nationwide legal reform).',
    holding:
      'Acquittal based on flawed deduction of consent from absence of physical struggle; catalyzed the enactment of custodial rape laws and Section 114A Evidence Act presumption.',
    ratioDecidendi:
      'The original ruling erroneously equated submission under custodial fear with free consent, establishing a benchmark of physical resistance that was subsequently repealed and reversed by Parliament in the 1983 and 2013 criminal amendments.',
    obiterDicta:
      'The verdict spurred the landmark Criminal Law (Amendment) Act, 1983, which introduced Section 376(2) custodial rape and Section 114A presumption of absence of consent.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Catalyst for the Criminal Law (Amendment) Act, 1983.',
      'Led to the introduction of Section 114A Indian Evidence Act (presumption of absence of consent in custodial rape).',
      'Shifted the focus of rape law from proof of physical resistance to absence of consent.',
    ],
    mcqs: [
      {
        id: 'tukaram-mathura-mcq-1',
        question:
          'Which statutory presumption in the Indian Evidence Act was introduced primarily as a legislative response to the Mathura Rape Case (Tukaram v. State of Maharashtra)?',
        options: ['Section 112', 'Section 113A', 'Section 113B', 'Section 114A'],
        correctIndex: 3,
        explanation:
          'Section 114A of the Evidence Act (presumption of absence of consent in certain rape prosecutions) was inserted by the 1983 Amendment following the Mathura case.',
      },
    ],
  },
  {
    id: 'bodhisattwa-gautam-1996',
    caseName: 'Bodhisattwa Gautam v. Subhra Chakraborty',
    shortName: 'Bodhisattwa Gautam (Interim Rape Relief)',
    citation: '(1996) 1 SCC 490',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 1996,
    bench: '2-Judge Bench',
    judges: ['Kuldip Singh, J.', 'Faizan Uddin, J.'],
    subject: 'Criminal Law / Constitution',
    topics: ['Rape as Crime against Article 21', 'Interim Compensation', 'Victim Compensation', 'Inherent Powers'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Rape', 'Interim Relief', 'Victim Justice', 'Tort Law'],
    summary:
      'Pioneering judgment declaring rape not merely an offence under the Penal Code, but a brutal violation of the fundamental right to life, dignity, and bodily integrity under Article 21. Empowered trial and appellate courts to award interim financial compensation and maintenance to rape victims during the pendency of criminal proceedings.',
    facts: [
      'The petitioner, a university lecturer, fraudulently deceived his student Subhra Chakraborty into a secret mock marriage ceremony.',
      'He subjected her to sexual intercourse, coerced her to undergo two abortions, and later abandoned her, denying the existence of the marriage.',
      'The victim lodged a criminal complaint for rape, cheating, and causing miscarriage.',
      'The petitioner sought quashing under Section 482 CrPC.',
    ],
    issues: [
      'Whether courts have the jurisdiction to award interim financial maintenance and compensation to a rape victim pending trial.',
      'Whether rape is a violation of fundamental rights under Article 21.',
    ],
    arguments: {
      appellant: [
        'No interim compensation can be awarded prior to final conviction; the criminal court lacks civil power to grant maintenance in a rape prosecution.',
      ],
      respondent: [
        'The victim was rendered destitute, pregnant, and abandoned by fraud; interim relief is essential to uphold her right to live with dignity.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to live with dignity and protection against bodily violation',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 357/357A CrPC / Section 395/396 BNSS',
        title: 'Order to pay victim compensation',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Rape is a violation of the fundamental right to life under Article 21',
        explanation:
          'Kuldip Singh, J. held that rape is not merely a crime against an individual woman or morality, but an ultimate violation of the most cherished fundamental right guaranteed under Article 21—the right to life, which includes the right to live with human dignity.',
      },
      {
        heading: 'Jurisdiction to award interim compensation',
        explanation:
          'Courts are not powerless to help a destitute rape victim during trial. Relying on Delhi Domestic Working Women Forum, the Supreme Court ordered the accused to pay interim compensation of Rs. 1,000 per month to the victim until the disposal of the trial.',
      },
    ],
    decision:
      'Special Leave Petition dismissed. The accused directed to pay interim maintenance of Rs. 1,000 per month to the victim throughout the trial.',
    holding:
      'Rape is a direct violation of Article 21. Criminal courts possess inherent jurisdiction to award interim compensation to victims during trial.',
    ratioDecidendi:
      'Rape violates the fundamental right to personal dignity under Article 21. Courts have jurisdiction to award interim compensation and maintenance to the rape survivor during the pendency of criminal trial proceedings.',
    obiterDicta:
      'Victim compensation must be integrated as an indispensable pillar of the Indian criminal justice system.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Recognized rape as a fundamental right violation under Article 21.',
      'Pioneered interim victim compensation during pendency of criminal trial.',
      'Precursor to statutory Victim Compensation Schemes under Section 357A CrPC (Section 396 BNSS).',
    ],
    mcqs: [
      {
        id: 'bodhisattwa-mcq-1',
        question:
          'In Bodhisattwa Gautam v. Subhra Chakraborty (1996), the Supreme Court ruled that rape violates which fundamental right?',
        options: ['Article 14', 'Article 19(1)(g)', 'Article 21', 'Article 25'],
        correctIndex: 2,
        explanation:
          'The Supreme Court declared rape to be a direct violation of the fundamental right to life and human dignity guaranteed under Article 21.',
      },
    ],
  },
  {
    id: 'state-of-mp-madanlal-2015',
    caseName: 'State of M.P. v. Madanlal',
    shortName: 'State of M.P. v. Madanlal',
    citation: '(2015) 7 SCC 681',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate Jurisdiction',
    year: 2015,
    bench: '2-Judge Bench',
    judges: ['Dipak Misra, J.', 'Prafulla C. Pant, J.'],
    subject: 'Criminal Law',
    topics: ['Compounding Rape', 'Compromise in Sexual Offences', 'Article 21', 'Non-Compoundable Offences'],
    tags: ['AIBE', 'Judiciary', 'IPC', 'Section 376', 'Compounding', 'Section 320 CrPC', 'Women Rights'],
    summary:
      'Authoritative Supreme Court decision imposing an absolute ban on compromising, settling, or compounding rape and attempted rape cases, whether by marriage proposal or monetary compensation. Declared that any compromise in sexual assault cases is completely illegal and an affront to the dignity of womanhood.',
    facts: [
      'The respondent Madanlal was convicted by the trial court under Section 376(2)(f) read with Section 511 IPC for attempting to rape a seven-year-old girl.',
      'In appeal, the High Court of Madhya Pradesh reduced the substantive sentence to the period already undergone (approx. 1 year) on the ground that the parties had entered into a compromise.',
      'The State of Madhya Pradesh appealed to the Supreme Court against the reduction of sentence based on compromise.',
    ],
    issues: [
      'Whether a court can permit or act upon a compromise or settlement in offences involving rape or attempt to rape.',
      'Whether marriage between the accused and the victim can be accepted as a ground for compounding or leniency in rape sentencing.',
    ],
    arguments: {
      appellant: [
        'Rape is a non-compoundable heinous crime against society. Compromising sexual offences subverts criminal jurisprudence and degrades the dignity of women.',
      ],
      respondent: [
        'The parties belong to the same village, and peace and reconciliation in the community warranted reduction of sentence.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 'sexual-offences',
        section: 'Section 376 IPC / Section 64 BNS',
        title: 'Non-compoundable nature of rape and attempted rape',
        subjectSlug: 'bns',
        topicId: 'sexual-offences',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Section 320 CrPC / Section 359 BNSS',
        title: 'Compounding of offences — Rape excluded from compounding',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Absolute bar on compromise in rape cases',
        explanation:
          'Dipak Misra, J. held that dignity of a woman is not a negotiable commodity. There can be no compromise or mediation in a case of rape or attempt to rape. The idea of settling rape cases through marriage, financial compensation, or mediation is contrary to law and human rights.',
      },
      {
        heading: 'Rejection of mediation in sexual assault',
        explanation:
          'The Court held that any court that facilitates or approves a compromise in rape proceedings acts in complete contravention of statutory mandates and constitutional values.',
      },
    ],
    decision:
      'State appeal allowed. The judgment of the High Court reducing sentence on the basis of compromise set aside; original substantive sentence restored.',
    holding:
      'Compromise, mediation, or settlement in rape and attempted rape cases is strictly impermissible and illegal.',
    ratioDecidendi:
      'Rape is a non-compoundable crime against society and a grave violation of Article 21. No court has the power or discretion to reduce sentence or compound a rape charge based on a compromise, settlement, or proposed marriage between the accused and victim.',
    obiterDicta:
      'To suggest that a rapist should marry the survivor is a medieval notion that perpetuates trauma and legal absurdity.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Strict ban on mediation, compounding, or compromise in rape/attempted rape prosecutions.',
      'Compromise cannot be treated as a mitigating factor in sentencing for sexual offences.',
      'Dignity of women under Article 21 cannot be bartered by families or village elders.',
    ],
    mcqs: [
      {
        id: 'madanlal-mcq-1',
        question:
          'What did the Supreme Court hold in State of M.P. v. Madanlal (2015) regarding compromises in rape cases?',
        options: [
          'Permissible with the consent of parents',
          'Permissible if the accused agrees to marry the victim',
          'Strictly impermissible and totally illegal',
          'Allowed under Section 320 CrPC',
        ],
        correctIndex: 2,
        explanation:
          'The Supreme Court ruled that compromise, mediation, or settlement in rape cases is strictly impermissible, illegal, and contrary to Article 21.',
      },
    ],
  },
  {
    id: 'hira-lal-cpc-1998',
    caseName: 'Hira Lal v. Kalyan Mal',
    shortName: 'Hira Lal (Amendment of Pleadings)',
    citation: '(1998) 1 SCC 278',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1998,
    bench: '2-Judge Bench',
    judges: ['S.B. Majmudar, J.', 'M. Jagannadha Rao, J.'],
    subject: 'Code of Civil Procedure',
    topics: ['Order VI Rule 17', 'Amendment of Written Statement', 'Judicial Admission', 'Withdrawal of Admission'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order VI Rule 17', 'Pleadings', 'Written Statement', 'Admission'],
    summary:
      'Landmark decision on amendment of pleadings under Order VI Rule 17 CPC. Settled that an amendment to a written statement cannot be permitted if its effect is to withdraw a clear, unequivocal judicial admission made in favor of the plaintiff, thereby displacing the plaintiff accrued rights.',
    facts: [
      'The respondent filed a partition suit claiming that certain properties were joint family properties.',
      'In their original written statement, the defendants expressly admitted that 7 out of 10 suit properties were joint family assets.',
      'Subsequently, the defendants filed an application under Order VI Rule 17 CPC seeking to amend the written statement to withdraw the admission and claim that all properties were self-acquired.',
      'The High Court allowed the amendment, against which the plaintiff appealed to the Supreme Court.',
    ],
    issues: [
      'Whether a defendant can be allowed under Order VI Rule 17 CPC to amend a written statement so as to withdraw a clear admission of fact made in favor of the plaintiff.',
      'What are the limitations on the liberal doctrine of amending written statements.',
    ],
    arguments: {
      appellant: [
        'A party cannot withdraw a clear admission by amendment when such withdrawal causes irreparable prejudice and displaces the case of the opposite party.',
      ],
      respondent: [
        'Courts are more liberal in permitting amendments to written statements than to plaints; inconsistent pleas can be taken.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'pleadings',
        section: 'Order VI Rule 17',
        title: 'Amendment of Pleadings — Bar on withdrawing clear judicial admissions',
        subjectSlug: 'cpc',
        topicId: 'pleadings',
      },
    ],
    reasoning: [
      {
        heading: 'Withdrawal of admission vs taking inconsistent pleas',
        explanation:
          'Majmudar, J. explained that while a defendant in a written statement may take alternative or inconsistent pleas, he cannot be permitted to withdraw a clear and categorical admission of fact that has vested a valuable legal right in the plaintiff.',
      },
      {
        heading: 'Displacement of plaintiff case causes irreparable injury',
        explanation:
          'Permitting the withdrawal of admission would completely sabotage the partition claim and force the plaintiff to prove facts that were previously admitted. Such an amendment cannot be allowed in law.',
      },
    ],
    decision:
      'Appeal allowed. High Court order set aside; defendants application under Order VI Rule 17 to withdraw admissions rejected.',
    holding:
      'An amendment of a written statement under Order VI Rule 17 cannot be allowed if it seeks to withdraw a clear admission made in favor of the plaintiff.',
    ratioDecidendi:
      'Under Order VI Rule 17 CPC, a party cannot be permitted by way of amendment to withdraw a clear, categorical admission made in a written statement which confers a valuable right upon the plaintiff, if such withdrawal displaces the plaintiff case and causes irreversible prejudice.',
    obiterDicta:
      'An admission made in pleadings stands on a higher footing than an evidentiary admission, operating as a judicial estoppel between the parties.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Order VI Rule 17 CPC amendment principles regarding written statements.',
      'Clear judicial admissions cannot be retracted or withdrawn through amendment.',
      'Inconsistent pleas are permissible in defence, but not the withdrawal of an admission that prejudices the plaintiff.',
    ],
    mcqs: [
      {
        id: 'hira-lal-mcq-1',
        question:
          'In Hira Lal v. Kalyan Mal (1998), what limitation did the Supreme Court place on amending a written statement under Order VI Rule 17 CPC?',
        options: [
          'No amendment can be filed after framing of issues',
          'An amendment cannot withdraw a clear admission made in favor of the plaintiff',
          'Only typographical errors can be amended',
          'Court fees must be deposited before amendment',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that an amendment cannot be permitted if it withdraws a categorical admission made in favor of the plaintiff.',
      },
    ],
  },
  {
    id: 'vidhyadhar-1999',
    caseName: 'Vidhyadhar v. Manikrao',
    shortName: 'Vidhyadhar (Adverse Inference)',
    citation: '(1999) 3 SCC 573',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1999,
    bench: '2-Judge Bench',
    judges: ['S. Saghir Ahmad, J.', 'M. Jagannadha Rao, J.'],
    subject: 'Law of Evidence / CPC',
    topics: ['Adverse Inference', 'Section 114 Evidence Act', 'Witness Box', 'Failure to Testify'],
    tags: ['AIBE', 'Judiciary', 'Evidence', 'Section 114', 'BSA 119', 'CPC', 'Adverse Inference'],
    summary:
      'Classic Supreme Court precedent on adverse inference under Section 114 Illustration (g) of the Evidence Act (now Section 119 BSA). Held that where a party to a civil suit refrains from entering the witness box and stating their case on oath or facing cross-examination, a strong adverse inference arises that their pleaded case is untrue.',
    facts: [
      'Vidhyadhar filed a suit for redemption of mortgage and recovery of possession of agricultural land transferred to him by a registered sale deed.',
      'The defendant Manikrao contended that the sale deed was fictitious and without consideration.',
      'At the trial, Manikrao did not enter the witness box to state his case on oath or offer himself for cross-examination, but merely examined his brother.',
      'The trial court decreed the suit, but the High Court dismissed it on the ground of non-payment of consideration.',
    ],
    issues: [
      'What legal consequence follows when a party to a civil suit fails to enter the witness box to substantiate their factual plea.',
      'Whether adverse inference under Section 114 Illustration (g) arises against a non-testifying party.',
    ],
    arguments: {
      appellant: [
        'The defendant failed to step into the witness box to substantiate the plea that the deed was bogus; adverse inference must be drawn against him.',
      ],
      respondent: [
        'The plaintiff must succeed on the strength of his own case; examining a close relative suffices.',
      ],
    },
    provisions: [
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023 / IEA',
        provisionId: 'burden-proof',
        section: 'Section 114 Illus. (g) IEA / Section 119 BSA',
        title: 'Presumption of adverse inference on withholding evidence',
        subjectSlug: 'bsa',
        topicId: 'burden-proof',
      },
    ],
    reasoning: [
      {
        heading: 'Mandatory adverse inference on failure to testify',
        explanation:
          'Saghir Ahmad, J. held: Where a party to the suit does not appear in the witness box and states his own case on oath and does not offer himself to be cross-examined by the other side, a presumption would arise that the case set up by him is not correct.',
      },
      {
        heading: 'Application of Section 114 Illustration (g)',
        explanation:
          'The best evidence of personal knowledge lies with the party themselves. Evading the witness box deprives the opposite party of the statutory right to cross-examine on contentious facts, triggering an adverse presumption under Section 114 Illustration (g).',
      },
    ],
    decision:
      'Appeal allowed. High Court judgment set aside; trial court decree in favor of plaintiff restored.',
    holding:
      'Failure of a party to enter the witness box justifies a presumption that their factual case is false.',
    ratioDecidendi:
      'Where a party to a civil dispute does not enter the witness box to substantiate facts within their personal knowledge on oath and submit to cross-examination, the court is entitled to draw an adverse inference under Section 114 Illustration (g) of the Evidence Act that their pleaded version is false.',
    obiterDicta:
      'Cross-examination is the greatest legal engine ever invented for the discovery of truth; shielding a party from it destroys their evidentiary credibility.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Core precedent for Section 114 Illustration (g) Evidence Act (Section 119 BSA).',
      'Failure to enter witness box leads to adverse inference.',
      'Examined in AIBE and Judiciary civil trial practice papers.',
    ],
    mcqs: [
      {
        id: 'vidhyadhar-mcq-1',
        question:
          'According to Vidhyadhar v. Manikrao (1999), what presumption arises when a party to a suit fails to enter the witness box?',
        options: [
          'Suit is automatically dismissed for default',
          'Adverse inference arises that the party pleaded case is false',
          'Contempt of court proceedings are initiated',
          'Pleadings are struck off under Order VI Rule 16',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that an adverse inference under Section 114 Illustration (g) arises that the party pleaded version is false.',
      },
    ],
  },
  {
    id: 'kk-velusamy-2011',
    caseName: 'K.K. Velusamy v. N. Palanisamy',
    shortName: 'K.K. Velusamy (Section 151 CPC)',
    citation: '(2011) 11 SCC 275',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2011,
    bench: '2-Judge Bench',
    judges: ['R.V. Raveendran, J.', 'A.K. Patnaik, J.'],
    subject: 'Code of Civil Procedure',
    topics: ['Inherent Powers', 'Section 151 CPC', 'Order XVIII Rule 17', 'Recall of Witnesses'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Section 151', 'Order XVIII Rule 17', 'Evidence in Trial', 'Inherent Powers'],
    summary:
      'Authoritative decision on the scope of inherent powers under Section 151 CPC and recall of witnesses under Order XVIII Rule 17 CPC. Held that while Order XVIII Rule 17 is intended for court clarification, courts retain inherent power under Section 151 to reopen evidence or recall witnesses to prevent miscarriage of justice.',
    facts: [
      'In a suit for specific performance of a sale agreement, the evidence of both parties was concluded and final arguments were heard.',
      'Before judgment was pronounced, the appellant filed applications under Section 151 CPC and Order XVIII Rule 17 CPC to reopen evidence and recall witnesses to place on record audio recordings of conversations showing receipt of money.',
      'The trial court and Madras High Court dismissed the applications, holding that Order XVIII Rule 17 cannot be used by a party to fill up lacunae.',
    ],
    issues: [
      'Whether a civil court has inherent power under Section 151 CPC to reopen evidence and recall a witness after evidence is closed.',
      'What is the distinct scope of Order XVIII Rule 17 CPC compared to Section 151 inherent powers.',
    ],
    arguments: {
      appellant: [
        'The recorded audio conversations were discovered after evidence was closed and went to the root of the transaction; Section 151 inherent powers must be exercised ex debito justitiae.',
      ],
      respondent: [
        'Order XVIII Rule 17 is meant for the court benefit to clear ambiguities, not for litigants to introduce fresh evidence or fill gaps.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 's-151',
        section: 'Section 151 & Order XVIII Rule 17',
        title: 'Inherent powers of the court and recall of witnesses',
        subjectSlug: 'cpc',
        topicId: 's-151',
      },
    ],
    reasoning: [
      {
        heading: 'Distinction between Order XVIII Rule 17 and Section 151',
        explanation:
          'Raveendran, J. clarified that Order XVIII Rule 17 empowers the court to recall a witness for clarifying doubts on questions put by the court. However, Section 151 CPC provides inherent powers to meet ends of justice, which can be invoked to permit a party to lead additional material evidence if discovered bona fide.',
      },
      {
        heading: 'Safeguards against dilatory tactics',
        explanation:
          'The Court cautioned that Section 151 should be exercised sparingly. It must not be permitted where the applicant was negligent or intends to protract the litigation, but should not be shut out if the evidence is decisive.',
      },
    ],
    decision:
      'Appeal allowed. Orders of trial court and High Court set aside; trial court directed to consider the electronic evidence subject to authenticity and relevancy.',
    holding:
      'Civil courts possess inherent power under Section 151 CPC to reopen evidence and recall witnesses to prevent failure of justice.',
    ratioDecidendi:
      'While Order XVIII Rule 17 CPC is limited to court-initiated clarifications, civil courts retain the inherent power under Section 151 CPC to reopen evidence and permit recall of witnesses on the application of a party where bona fide newly discovered evidence is crucial for a complete and fair adjudication.',
    obiterDicta:
      'Inherent powers under Section 151 are not substantive grants of new powers, but legislative recognition of the court duty to render justice.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Scope of Section 151 CPC inherent powers in civil trials.',
      'Comparison of Section 151 with Order XVIII Rule 17 CPC recall of witnesses.',
      'Conditions under which trial court can reopen evidence before judgment.',
    ],
    mcqs: [
      {
        id: 'velusamy-mcq-1',
        question:
          'In K.K. Velusamy v. N. Palanisamy (2011), under what provision did the Supreme Court affirm the court power to reopen evidence on a party application?',
        options: ['Order VI Rule 17', 'Section 151 CPC', 'Order VII Rule 11', 'Section 89 CPC'],
        correctIndex: 1,
        explanation:
          'The Supreme Court affirmed that civil courts retain inherent power under Section 151 CPC to reopen evidence to prevent miscarriage of justice.',
      },
    ],
  },
  {
    id: 'morgan-stanley-1994',
    caseName: 'Morgan Stanley Mutual Fund v. Kartick Das',
    shortName: 'Morgan Stanley (Ex-Parte Injunctions)',
    citation: '(1994) 4 SCC 225',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1994,
    bench: '3-Judge Bench',
    judges: ['M.N. Venkatachaliah, C.J.', 'S. Mohan, J.', 'Dr. A.S. Anand, J.'],
    subject: 'Code of Civil Procedure / Consumer Law',
    topics: ['Ex-Parte Injunctions', 'Order 39 CPC', 'Consumer Protection', 'Interim Relief'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order 39', 'Injunction', 'Consumer Protection', 'Interim Relief'],
    summary:
      'Landmark 3-judge bench ruling formulating the definitive guidelines for granting ex-parte interim injunctions under Order 39 Rules 1 and 2 CPC. Also ruled that a prospective investor in an initial public offer (IPO) is not a "consumer" under the Consumer Protection Act before share allotment.',
    facts: [
      'Morgan Stanley Mutual Fund launched an initial public offer for a domestic mutual fund scheme.',
      'Kartick Das filed a consumer complaint before a District Consumer Forum in West Bengal alleging improper marketing.',
      'The Consumer Forum granted an ex-parte ad-interim injunction restraining Morgan Stanley from collecting application money.',
      'Morgan Stanley appealed directly to the Supreme Court under Article 136 challenging the rampant grant of ex-parte injunctions halting mega public issues.',
    ],
    issues: [
      'What are the mandatory principles governing the grant of ex-parte ad-interim injunctions under Order 39 CPC.',
      'Whether a prospective applicant for shares or units is a "consumer" entitled to invoke consumer forum remedies before allotment.',
    ],
    arguments: {
      appellant: [
        'An ex-parte injunction restraining a nationwide public issue causes catastrophic financial disruption without giving the issuer a hearing.',
        'An applicant has no property in shares until allotment and is not a consumer of goods or services.',
      ],
      respondent: [
        'Consumer protection legislation must be interpreted broadly to protect the public from deceptive marketing.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'interim',
        section: 'Order XXXIX Rules 1, 2 & 3',
        title: 'Temporary Injunctions and guidelines for ex-parte ad-interim relief',
        subjectSlug: 'cpc',
        topicId: 'interim',
      },
    ],
    reasoning: [
      {
        heading: 'Rigorous guidelines for granting ex-parte injunctions',
        explanation:
          'Mohan, J. laid down principles: (1) Whether irreparable damage will be caused before the opposite party can be heard; (2) Comparative mischief or inconvenience; (3) Whether the applicant acted with bona fides; (4) The court must record reasons under Order 39 Rule 3 proviso; (5) Ex-parte orders must be for a strictly limited duration.',
      },
      {
        heading: 'Status of prospective applicant under Consumer Protection Act',
        explanation:
          'Till allotment of shares, no consumer-service provider relationship exists. A prospective investor who applies for shares/units is not a consumer under the Consumer Protection Act because shares do not exist as goods until allotment.',
      },
    ],
    decision:
      'Appeal allowed. Injunction granted by Consumer Forum quashed; guidelines on ex-parte injunctions formulated.',
    holding:
      'Ex-parte interim injunctions must be granted only in rare and exceptional circumstances with recorded reasons under Order 39 Rule 3.',
    ratioDecidendi:
      'An ex-parte interim injunction is an extraordinary measure. Courts must record specific reasons under the proviso to Order XXXIX Rule 3 CPC showing that delay would defeat justice, and must rigorously evaluate prima facie case, balance of convenience, and irreparable injury before restraining lawful commercial activity.',
    obiterDicta:
      'Ex-parte injunctions granted mechanically without notice or reasons erode public confidence in commercial dispute resolution.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Foundational case for Order XXXIX Rule 3 CPC ex-parte injunction principles.',
      'Mandatory recording of reasons before issuing injunction without notice.',
      'Prospective share applicant is not a consumer prior to allotment.',
    ],
    mcqs: [
      {
        id: 'morgan-stanley-mcq-1',
        question:
          'In Morgan Stanley Mutual Fund v. Kartick Das (1994), what did the Supreme Court rule regarding a prospective share applicant before allotment?',
        options: [
          'They are full consumers under the Consumer Protection Act',
          'They are not consumers until shares are actually allotted',
          'They have a right to immediate civil injunction',
          'They are partners in the company',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that an applicant for shares is not a consumer under the Consumer Protection Act until the shares are actually allotted.',
      },
    ],
  },
  {
    id: 'shiv-kumar-chadha-1993',
    caseName: 'Shiv Kumar Chadha v. Municipal Corp. of Delhi',
    shortName: 'Shiv Kumar Chadha (Order 39 Rule 3)',
    citation: '(1993) 3 SCC 161',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1993,
    bench: '3-Judge Bench',
    judges: ['P.B. Sawant, J.', 'N.P. Singh, J.'],
    subject: 'Code of Civil Procedure',
    topics: ['Order 39 Rule 3 Proviso', 'Recording of Reasons', 'Ex-Parte Injunction', 'Mandatory Procedure'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order 39 Rule 3', 'Injunction', 'Pleadings', 'Mandatory Reasons'],
    summary:
      'Authoritative 3-judge bench ruling establishing that the requirement of recording reasons under the proviso to Order XXXIX Rule 3 CPC before granting an ex-parte injunction is mandatory, not directory. An ex-parte injunction granted without recording reasons why notice was dispensed with is legally unsustainable.',
    facts: [
      'The Municipal Corporation of Delhi issued demolition notices against unauthorized constructions.',
      'Aggrieved owners filed civil suits and obtained ex-parte temporary injunctions restraining demolition without the court recording reasons for dispensing with notice to the Corporation under Order 39 Rule 3.',
      'The MCD appealed to the High Court and subsequently to the Supreme Court, contending that ex-parte orders were being granted mechanically in municipal matters.',
    ],
    issues: [
      'Whether the proviso to Order XXXIX Rule 3 CPC requiring recording of reasons before dispensing with notice is mandatory.',
      'What is the legal effect of an ex-parte injunction granted in violation of Order XXXIX Rule 3.',
    ],
    arguments: {
      appellant: [
        'Order 39 Rule 3 makes notice the rule and dispensing with notice the rare exception; failure to record reasons renders the injunction order voidable.',
      ],
      respondent: [
        'The provision is procedural and directory; urgent relief should not be defeated by technical omissions.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'interim',
        section: 'Order XXXIX Rule 3 Proviso',
        title: 'Mandatory recording of reasons where notice of injunction is dispensed with',
        subjectSlug: 'cpc',
        topicId: 'interim',
      },
    ],
    reasoning: [
      {
        heading: 'Proviso to Order 39 Rule 3 is mandatory',
        explanation:
          'N.P. Singh, J. held that the Parliament deliberately inserted the proviso by the 1976 Amendment Act to check the misuse of ex-parte injunctions. The court must record reasons explaining why the delay in giving notice would defeat the object of the injunction. Compliance with this requirement is mandatory.',
      },
      {
        heading: 'Judicial discipline and transparency',
        explanation:
          'Recording reasons ensures that the judge applied their mind to the urgency of the matter and enables the appellate court to review the propriety of dispensing with notice.',
      },
    ],
    decision:
      'Appeals disposed of. Held that the requirement of recording reasons in the proviso to Order 39 Rule 3 CPC is mandatory.',
    holding:
      'Recording reasons under the proviso to Order XXXIX Rule 3 CPC is mandatory before dispensing with notice.',
    ratioDecidendi:
      'The proviso to Order XXXIX Rule 3 CPC is mandatory. A court granting an ex-parte ad-interim injunction must explicitly record its reasons forming the opinion that the object of granting the injunction would be defeated by delay if notice were issued to the opposite party.',
    obiterDicta:
      'Ex-parte interim orders against public authorities discharging statutory duties should not be granted routinely without stringent scrutiny.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Proviso to Order XXXIX Rule 3 CPC is strictly mandatory.',
      'Failure to record reasons for dispensing with notice vitiates the ex-parte injunction.',
      'Inserted by the Code of Civil Procedure (Amendment) Act, 1976.',
    ],
    mcqs: [
      {
        id: 'shiv-kumar-mcq-1',
        question:
          'In Shiv Kumar Chadha v. MCD (1993), what did the Supreme Court hold regarding the proviso to Order XXXIX Rule 3 CPC?',
        options: [
          'It is purely directory',
          'It is strictly mandatory',
          'It applies only to the High Court',
          'It applies only to money recovery suits',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the proviso to Order XXXIX Rule 3 CPC (recording reasons when dispensing with notice) is strictly mandatory.',
      },
    ],
  },
  {
    id: 'dharani-sugars-2019',
    caseName: 'Dharani Sugars and Chemicals Ltd. v. Union of India',
    shortName: 'Dharani Sugars (RBI Circular)',
    citation: '(2019) 5 SCC 480',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2019,
    bench: '2-Judge Bench',
    judges: ['R.F. Nariman, J.', 'Vineet Saran, J.'],
    subject: 'Commercial & Banking Law',
    topics: ['Insolvency & Bankruptcy Code', 'RBI Circular', 'Section 35AA Banking Regulation Act', 'Ultra Vires'],
    tags: ['AIBE', 'Commercial Law', 'IBC', 'Banking', 'RBI Act', 'Section 35AA', 'Ultra Vires'],
    summary:
      'Landmark commercial law judgment striking down the Reserve Bank of India controversial February 12, 2018 circular on resolution of stressed assets as ultra vires Section 35AA of the Banking Regulation Act, 1949. Held that the Central Bank cannot issue blanket general directions to banks to initiate insolvency proceedings under the IBC without Central Government authorization.',
    facts: [
      'The RBI issued a circular on February 12, 2018 mandating banks to implement a resolution plan within 180 days for any account defaulting by even one day on loans of Rs. 2,000 crore or more.',
      'Failing resolution within 180 days, banks were compulsorily required to file an insolvency application under Section 7 of the IBC.',
      'Aggrieved corporate debtors in power, steel, sugar, and infrastructure sectors challenged the circular as arbitrary, one-size-fits-all, and beyond RBI statutory powers under Sections 35A, 35AA, and 35AB of the Banking Regulation Act.',
    ],
    issues: [
      'Whether the RBI had the statutory power under Sections 35A, 35AA, and 35AB of the Banking Regulation Act to issue blanket directions to banks to trigger IBC proceedings.',
      'Whether Central Government authorization is a condition precedent under Section 35AA for directing insolvency proceedings against specific corporate debtors.',
    ],
    arguments: {
      appellant: [
        'Section 35AA requires the Central Government to authorize the RBI, and such directions can only be issued in respect of specific defaulting corporate debtors, not via an omnibus general circular.',
      ],
      respondent: [
        'The RBI possesses sweeping supervisory powers over the banking system under Section 35A and Section 45JA of the RBI Act to tackle systemic non-performing assets.',
      ],
    },
    provisions: [
      {
        actId: 'commercial',
        actName: 'Banking Regulation Act, 1949',
        provisionId: 's-35aa',
        section: 'Section 35AA & 35AB',
        title: 'Power of Central Government to authorize RBI to issue insolvency directions',
        subjectSlug: 'commercial',
      },
    ],
    reasoning: [
      {
        heading: 'Section 35AA is a specific, self-contained code',
        explanation:
          'R.F. Nariman, J. held that when Section 35AA was introduced by Parliament in 2017, it specifically regulated the initiation of insolvency proceedings under the IBC. General powers under Section 35A could not be used to bypass the specific conditions of Section 35AA.',
      },
      {
        heading: 'Mandatory preconditions of Section 35AA',
        explanation:
          'Under Section 35AA: (1) there must be Central Government authorization; (2) directions can be issued only in respect of specific defaulting corporate debtors. The blanket 180-day deadline circular ignored sector-specific stress and lacked legal authority.',
      },
    ],
    decision:
      'Petitions allowed. The RBI Circular dated February 12, 2018 declared ultra vires and invalid. All insolvency actions commenced solely pursuant to the circular declared non est.',
    holding:
      'RBI cannot issue blanket directions compelling banks to trigger IBC insolvency without Central Government authorization under Section 35AA.',
    ratioDecidendi:
      'Under Section 35AA of the Banking Regulation Act, 1949, the RBI has no authority to issue omnibus directions to banks to initiate insolvency proceedings under the IBC without prior Central Government authorization, and such directions can only be issued on a case-by-case basis regarding specific corporate debtors.',
    obiterDicta:
      'Statutory regulators, however expert, must act strictly within the four corners of their enabling legislation.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Struck down RBI February 12, 2018 circular on stressed assets.',
      'Interpreted Section 35AA of Banking Regulation Act, 1949.',
      'Established limits of delegated regulatory authority over banking insolvency.',
    ],
    mcqs: [
      {
        id: 'dharani-sugars-mcq-1',
        question:
          'In Dharani Sugars and Chemicals Ltd. v. Union of India (2019), why was the RBI February 12, 2018 circular struck down?',
        options: [
          'It violated Article 370',
          'It was ultra vires Section 35AA of the Banking Regulation Act',
          'It abolished the NCLT',
          'It eliminated the role of the Committee of Creditors',
        ],
        correctIndex: 1,
        explanation:
          'The circular was held ultra vires Section 35AA because the RBI issued blanket insolvency directions without Central Government authorization.',
      },
    ],
  },
  {
    id: 'innoventive-industries-2018',
    caseName: 'Innoventive Industries Ltd. v. ICICI Bank',
    shortName: 'Innoventive Industries (IBC Landmark)',
    citation: '(2018) 1 SCC 407',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2018,
    bench: '2-Judge Bench',
    judges: ['R.F. Nariman, J.', 'Sanjay Kishan Kaul, J.'],
    subject: 'Commercial & Insolvency Law',
    topics: ['Insolvency & Bankruptcy Code', 'Section 7 Admission', 'Overriding Effect Section 238', 'Default Test'],
    tags: ['AIBE', 'Commercial Law', 'IBC', 'Section 7', 'Section 238', 'NCLT', 'Insolvency Resolution'],
    summary:
      'The foundational Magna Carta of the Insolvency and Bankruptcy Code, 2016. Settled the scheme of corporate insolvency resolution under Section 7 and 9 IBC, held that Section 238 IBC overrides state relief acts (Maharashtra Relief Undertaking Act), and ruled that once default is established, the NCLT has no discretion but to admit the insolvency application.',
    facts: [
      'Innoventive Industries defaulted on bank credit facilities extended by ICICI Bank.',
      'ICICI Bank filed an insolvency application under Section 7 IBC before the NCLT, Mumbai.',
      'The corporate debtor opposed admission relying on notifications issued by the Government of Maharashtra under the Maharashtra Relief Undertaking (Special Provisions) Act, 1958, which suspended all remedies against the debtor for two years.',
      'The NCLT and NCLAT held that the IBC overrides state relief legislations. The company appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the non-obstante clause in Section 238 IBC overrides state enactments like the Maharashtra Relief Undertaking Act under Article 254.',
      'What is the threshold test for admitting a financial creditor petition under Section 7 IBC.',
    ],
    arguments: {
      appellant: [
        'The state moratorium under the Maharashtra Act was validly operating and immunized the debtor from legal proceedings.',
      ],
      respondent: [
        'IBC is a Parliamentary code under Entry 9 of List III and Section 238 expressly prevails over inconsistent state laws; once default is proved, admission is automatic.',
      ],
    },
    provisions: [
      {
        actId: 'commercial',
        actName: 'Insolvency and Bankruptcy Code, 2016',
        provisionId: 'ibc-s-7-238',
        section: 'Section 7 & Section 238',
        title: 'Initiation of CIRP by financial creditor and overriding effect of the Code',
        subjectSlug: 'commercial',
      },
    ],
    reasoning: [
      {
        heading: 'Section 238 IBC prevails over conflicting laws',
        explanation:
          'Nariman, J. held that under Article 254 of the Constitution read with Section 238 IBC, the provisions of the IBC prevail over any contrary or inconsistent provisions contained in any other state or central law.',
      },
      {
        heading: 'The simple test of default under Section 7',
        explanation:
          'For a financial creditor under Section 7, the adjudicating authority (NCLT) must merely ascertain whether a "default" has occurred. If the financial debt is owed and default has occurred and the application is complete, the NCLT must admit the petition. The debtor cannot set up disputed claims or set-offs against a financial creditor.',
      },
    ],
    decision:
      'Appeal dismissed. NCLAT order admitting ICICI Bank Section 7 application upheld. Corporate debtor moratorium plea rejected.',
    holding:
      'Section 238 IBC overrides inconsistent state laws. Under Section 7 IBC, admission is mandatory once default is established.',
    ratioDecidendi:
      'Under the Insolvency and Bankruptcy Code, 2016, once a financial creditor establishes that a debt is due and default has occurred, the NCLT has no jurisdiction to look into extraneous disputes or state moratoriums. By virtue of Section 238 IBC, the Code overrides any inconsistent state or central enactments.',
    obiterDicta:
      'The prompt triggering of CIRP upon default is the vital economic heartbeat of the IBC mechanism.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The first major Supreme Court ruling expounding the IBC framework.',
      'Section 238 non-obstante clause overrides state relief undertaking laws.',
      'Under Section 7 IBC, only the existence of debt and default matters.',
    ],
    mcqs: [
      {
        id: 'innoventive-mcq-1',
        question:
          'In Innoventive Industries Ltd. v. ICICI Bank (2018), what did the Supreme Court hold regarding Section 238 IBC?',
        options: [
          'It is subordinate to State Relief Acts',
          'It overrides any inconsistent state or central law',
          'It applies only to individual bankruptcy',
          'It was declared unconstitutional',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that Section 238 IBC has overriding effect over any inconsistent law in force, including state relief undertaking statutes.',
      },
    ],
  },
  {
    id: 'swiss-ribbons-2019',
    caseName: 'Swiss Ribbons Pvt. Ltd. v. Union of India',
    shortName: 'Swiss Ribbons (IBC Validity)',
    citation: '(2019) 4 SCC 17',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2019,
    bench: '2-Judge Bench',
    judges: ['R.F. Nariman, J.', 'Navin Sinha, J.'],
    subject: 'Commercial & Constitutional Law',
    topics: ['Constitutional Validity of IBC', 'Section 29A Disqualification', 'Financial vs Operational Creditors', 'Article 14'],
    tags: ['AIBE', 'Commercial Law', 'IBC', 'Section 29A', 'Article 14', 'Economic Legislation', 'Constitutional Law'],
    summary:
      'Historic decision upholding the complete constitutional validity of the Insolvency and Bankruptcy Code, 2016. Affirmed the intelligible differentia between financial creditors and operational creditors, upheld Section 29A disqualification of defaulting promoters, and held that economic legislation enjoys a high presumption of constitutionality under Article 14.',
    facts: [
      'Various corporate debtors, promoters, and operational creditors filed writ petitions under Article 32 challenging the constitutional validity of several provisions of the IBC, 2016.',
      'Key challenges targeted: (1) classification between financial and operational creditors; (2) operational creditors having no voting share in the Committee of Creditors (CoC); (3) bar on defaulting promoters under Section 29A; (4) lack of judicial member parity in NCLAT.',
    ],
    issues: [
      'Whether the differential treatment of financial and operational creditors under the IBC violates Article 14.',
      'Whether Section 29A IBC barring defaulting promoters from bidding for their own stressed assets is arbitrary or retrospective.',
      'Whether Section 12A withdrawal of CIRP with 90% voting share is constitutional.',
    ],
    arguments: {
      appellant: [
        'Operational creditors supply goods and services but are excluded from the CoC, violating equality under Article 14.',
        'Section 29A punishes promoters who suffered bona fide market failures without willful default.',
      ],
      respondent: [
        'Financial creditors assess long-term viability and restructure debt, unlike operational creditors who seek immediate recovery.',
        'Section 29A prevents delinquent promoters from regaining control of assets at distressed discounts.',
      ],
    },
    provisions: [
      {
        actId: 'commercial',
        actName: 'Insolvency and Bankruptcy Code, 2016',
        provisionId: 'ibc-validity',
        section: 'Sections 12A, 21, 29A, 53',
        title: 'Constitutional framework and resolution architecture of the IBC',
        subjectSlug: 'commercial',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Presumption of constitutionality in economic statutes',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Intelligible differentia between financial and operational creditors',
        explanation:
          'Nariman, J. held that financial contracts generally involve large sums, are well-documented, and financial creditors possess the expertise to evaluate corporate viability. Operational contracts relate to day-to-day goods/services and are often disputed. The classification under Articles 14 and 19 is fully justified.',
      },
      {
        heading: 'Constitutionality of Section 29A',
        explanation:
          'Section 29A was enacted to prevent unscrupulous promoters who ran their companies into insolvency from bidding at heavily discounted haircuts. It serves an overarching public purpose and is not arbitrarily retrospective.',
      },
    ],
    decision:
      'Writ petitions dismissed. The Insolvency and Bankruptcy Code, 2016, along with Sections 12A, 21, 29A, and 53, upheld as fully constitutional.',
    holding:
      'IBC 2016 and Section 29A upheld. Economic legislation must be granted legislative latitude and presumption of constitutionality.',
    ratioDecidendi:
      'The distinction between financial and operational creditors under the IBC is founded on an intelligible differentia with a rational nexus to the objective of timely corporate resolution. Section 29A does not violate Article 14 as it prevents defaulting promoters from regaining corporate control through resolution at public expense.',
    obiterDicta:
      'The IBC is a beneficial legislation that seeks to put the corporate debtor back on its feet, shifting the regime from debtor-in-possession to creditor-in-control.',
    relatedCases: [
      {
        judgmentId: 'innoventive-industries-2018',
        caseName: 'Innoventive Industries Ltd. v. ICICI Bank',
        citation: '(2018) 1 SCC 407',
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
      'Comprehensive constitutional validation of the IBC, 2016.',
      'Upheld Section 29A promoter disqualification test.',
      'Approved Section 12A CIRP withdrawal threshold of 90% CoC voting share.',
    ],
    mcqs: [
      {
        id: 'swiss-ribbons-mcq-1',
        question:
          'In Swiss Ribbons Pvt. Ltd. v. Union of India (2019), what percentage of Committee of Creditors voting share is required to withdraw a CIRP under Section 12A IBC?',
        options: ['51%', '66%', '75%', '90%'],
        correctIndex: 3,
        explanation:
          'Section 12A IBC allows withdrawal of CIRP with the approval of 90% voting share of the Committee of Creditors, which was upheld in Swiss Ribbons.',
      },
    ],
  },
  {
    id: 'coc-essar-steel-2020',
    caseName: 'Committee of Creditors of Essar Steel India Ltd. v. Satish Kumar Gupta',
    shortName: 'Essar Steel (Commercial Wisdom of CoC)',
    citation: '(2020) 8 SCC 531',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2020,
    bench: '3-Judge Bench',
    judges: ['R.F. Nariman, J.', 'Surya Kant, J.', 'V. Ramasubramanian, J.'],
    subject: 'Commercial & Insolvency Law',
    topics: ['Commercial Wisdom of CoC', 'Role of NCLT / NCLAT', 'Distribution of Proceeds', 'Section 30(2) IBC'],
    tags: ['AIBE', 'Commercial Law', 'IBC', 'Essar Steel', 'CoC', 'NCLT', 'Resolution Plan'],
    summary:
      'Monumental 3-judge bench ruling establishing the supreme supremacy of the "commercial wisdom" of the Committee of Creditors (CoC) in approving insolvency resolution plans under the IBC. Striking down the NCLAT order enforcing equal treatment between secured and operational creditors, held that neither NCLT nor NCLAT can sit in appeal over the business judgment of the CoC.',
    facts: [
      'Essar Steel India Ltd. underwent CIRP with claims exceeding Rs. 54,000 crore. ArcelorMittal submitted a resolution plan offering Rs. 42,000 crore.',
      'The CoC approved the plan with over 92% majority, allocating substantially higher recoveries to secured financial creditors than to operational creditors.',
      'The NCLAT modified the plan, ordering pro-rata parity between financial creditors and operational creditors.',
      'The Committee of Creditors appealed to the Supreme Court against the NCLAT interference.',
    ],
    issues: [
      'What is the scope of judicial review of NCLT and NCLAT over the commercial wisdom of the Committee of Creditors.',
      'Can operational creditors demand absolute parity of payment with secured financial creditors in an IBC resolution plan.',
    ],
    arguments: {
      appellant: [
        'The NCLAT exceeded its limited jurisdiction under Section 31 and 32 IBC by substituting its own commercial judgment for that of financial lenders.',
        'Secured lenders hold valuable securities and cannot be equated with unsecured trade creditors.',
      ],
      respondent: [
        'Operational creditors must receive a fair and equitable share to preserve commercial enterprise.',
      ],
    },
    provisions: [
      {
        actId: 'commercial',
        actName: 'Insolvency and Bankruptcy Code, 2016',
        provisionId: 'ibc-s-30-31',
        section: 'Section 30(2) & Section 31',
        title: 'Approval of resolution plan and primacy of Committee of Creditors',
        subjectSlug: 'commercial',
      },
    ],
    reasoning: [
      {
        heading: 'Sanctity of the commercial wisdom of the CoC',
        explanation:
          'Nariman, J. held that the commercial wisdom of the CoC is non-justiciable. The adjudicating authority (NCLT) and appellate tribunal (NCLAT) have limited jurisdiction under Section 30(2) to ensure compliance with legal requirements, but cannot second-guess the commercial viability, feasibility, or distribution metrics decided by financial creditors.',
      },
      {
        heading: 'Secured vs operational creditors equality rejected',
        explanation:
          'Equality between unequals is unconstitutional. Secured financial creditors who took commercial credit risks cannot be treated on par with operational creditors.',
      },
    ],
    decision:
      'Appeals allowed. NCLAT order setting aside CoC distribution reversed; ArcelorMittal resolution plan approved as passed by the CoC.',
    holding:
      'The commercial wisdom of the CoC is supreme and non-justiciable. NCLT/NCLAT cannot alter the commercial terms of an approved resolution plan.',
    ratioDecidendi:
      'Under the Insolvency and Bankruptcy Code, 2016, the commercial wisdom of the Committee of Creditors in evaluating the feasibility, viability, and distribution of funds in a resolution plan is paramount. The NCLT and NCLAT have no jurisdiction to modify the commercial distribution or enforce equality between secured financial creditors and operational creditors.',
    obiterDicta:
      'Judicial intervention in commercial bargains approved by qualified lenders undermines the economic revival objectives of the IBC.',
    relatedCases: [
      {
        judgmentId: 'swiss-ribbons-2019',
        caseName: 'Swiss Ribbons Pvt. Ltd. v. Union of India',
        citation: '(2019) 4 SCC 17',
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
      'Establishes the supreme non-justiciable authority of the "commercial wisdom of CoC".',
      'Limits judicial review by NCLT/NCLAT strictly to Section 30(2) parameters.',
      'Secured financial creditors are not required to be treated on parity with operational creditors.',
    ],
    mcqs: [
      {
        id: 'essar-steel-mcq-1',
        question:
          'In Committee of Creditors of Essar Steel v. Satish Kumar Gupta (2020), what did the Supreme Court rule regarding the NCLAT modification of resolution plans?',
        options: [
          'NCLAT has plenary appellate power to rewrite commercial terms',
          'NCLAT cannot substitute its commercial judgment for the commercial wisdom of the CoC',
          'CoC decisions must be approved by the High Court',
          'Operational creditors must receive 100% payout',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the commercial wisdom of the CoC is non-justiciable and the NCLAT cannot substitute its view on commercial feasibility or distribution.',
      },
    ],
  },
  {
    id: 'tata-cellular-1994',
    caseName: 'Tata Cellular v. Union of India',
    shortName: 'Tata Cellular (Judicial Review in Tenders)',
    citation: '(1994) 6 SCC 651',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 1994,
    bench: '3-Judge Bench',
    judges: ['A.M. Ahmadi, J.', 'S. Mohan, J.', 'K.S. Paripoornan, J.'],
    subject: 'Administrative Law',
    topics: ['Judicial Review in Tenders', 'Article 226 / 32', 'Wednesbury Unreasonableness', 'Government Contracts'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Tenders', 'Judicial Review', 'Article 14', 'Government Contracts'],
    summary:
      'Locus classicus on the scope of judicial review in government contracts and commercial tenders under Articles 32 and 226. Laid down the 6 fundamental principles governing judicial restraint, establishing that judicial review is directed not against the decision itself, but against the decision-making process.',
    facts: [
      'The Department of Telecommunications invited tenders for licensing cellular mobile telephone services in four metropolitan cities (Delhi, Bombay, Calcutta, Madras).',
      'Rigorous financial and technical evaluation criteria were prescribed.',
      'Unsuccessful bidders challenged the selection process in the Delhi High Court, alleging bias, arbitrariness, and favoritism.',
      'The appeals reached the Supreme Court, requiring comprehensive formulation of principles on judicial review in commercial transactions.',
    ],
    issues: [
      'What is the permissible scope of judicial review under Articles 226 and 32 in matters of state contracts and commercial tenders.',
      'Whether the court can evaluate the comparative technical merits of competing commercial bids.',
    ],
    arguments: {
      appellant: [
        'The tender evaluation committee relaxed technical specifications arbitrarily for favored bidders, violating Article 14.',
      ],
      respondent: [
        'Government must have free play in the joints in commercial decisions; courts cannot act as appellate commercial auditors.',
      ],
    },
    provisions: [
      {
        actId: 'admin-law',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-judicial-review',
        title: 'Scope of judicial review and Wednesbury unreasonableness in public tenders',
        subjectSlug: 'admin',
        topicId: 'admin-judicial-review',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14 & Article 226',
        title: 'Equality and protection against arbitrariness in State contractual decisions',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Six classic principles of judicial review in tenders',
        explanation:
          'Mohan, J. formulated: (1) Modern judicial review is directed against the decision-making process, not against the decision itself; (2) Government must have freedom of contract ("free play in the joints"); (3) The grounds for interference are illegality, irrationality (Wednesbury unreasonableness), and procedural impropriety; (4) The court does not sit as a court of appeal; (5) Quashing tenders must not cause disproportionate harm to public interest; (6) Arbitrariness or mala fides must be affirmatively established.',
      },
    ],
    decision:
      'Appeals disposed of. Selection of certain licensees upheld while directing reconsideration for others in conformity with the formulated 6 principles.',
    holding:
      'Judicial review in government contracts is confined to the decision-making process, not the merits of commercial decisions.',
    ratioDecidendi:
      'In government contracts and commercial tenders, judicial review under Article 226 is confined to examining whether the decision-making process was fair, transparent, and free from bias or Wednesbury unreasonableness. The court cannot substitute its own opinion for the commercial expertise of the executive.',
    obiterDicta:
      'The State can choose its own commercial terms provided they are not tailored to favor an individual bidder or tainted by corruption.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The 6 classic Tata Cellular principles governing judicial review of tenders.',
      'Judicial review reviews the decision-making process, not the decision.',
      'Incorporated Wednesbury unreasonableness into Indian public procurement.',
    ],
    mcqs: [
      {
        id: 'tata-cellular-mcq-1',
        question:
          'In Tata Cellular v. Union of India (1994), what did the Supreme Court hold regarding the primary focus of judicial review in public tenders?',
        options: [
          'The commercial profit margin of the contractor',
          'The decision-making process rather than the decision itself',
          'The lowest price submitted by the bidder',
          'The technical qualifications of the ministers',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that judicial review is concerned with the decision-making process, not with the decision itself.',
      },
    ],
  },
  {
    id: 'fertilizer-corporation-1981',
    caseName: 'Fertilizer Corpn. Kamgar Union v. Union of India',
    shortName: 'Fertilizer Corporation (Locus Standi)',
    citation: '(1981) 1 SCC 568',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1981,
    bench: '5-Judge Constitution Bench',
    judges: [
      'Y.V. Chandrachud, C.J.',
      'P.N. Bhagwati, J.',
      'V.R. Krishna Iyer, J.',
      'S. Murtaza Fazal Ali, J.',
      'A.D. Koshal, J.',
    ],
    subject: 'Administrative & Constitutional Law',
    topics: ['Locus Standi', 'Public Interest Litigation', 'Article 32', 'Workers Rights', 'Disinvestment'],
    tags: ['AIBE', 'Judiciary', 'Article 32', 'Locus Standi', 'PIL', 'Krishna Iyer', 'Public Law'],
    summary:
      'Historic 5-judge Constitution Bench ruling expanding the doctrine of locus standi in public law. Held that industrial workers have legal standing under Article 32 to challenge the sale or closure of public sector factory plant assets. Justice Krishna Iyer delivered his celebrated exposition on public interest litigation as a tool for democratic accountability.',
    facts: [
      'The Fertilizer Corporation of India (a public sector enterprise) decided to sell redundant equipment and an obsolete fertilizer production plant through public tender.',
      'The registered trade union of workers filed a writ petition under Article 32 alleging that the sale was corrupt, undervalue, and deprived workers of their livelihood under Article 21.',
      'The Union of India raised a preliminary objection that the workers union had no locus standi under Article 32 to challenge a purely management and commercial sale.',
    ],
    issues: [
      'Whether industrial workers have locus standi under Article 32 to challenge the commercial sale of public enterprise assets.',
      'What are the boundaries of standing in public interest actions challenging state disposal of public property.',
    ],
    arguments: {
      appellant: [
        'Workers have a vital stake in the continued viability of the enterprise; selling plant assets affects their right to work and livelihood under Articles 14, 19, and 21.',
      ],
      respondent: [
        'The workers suffered no breach of legal or fundamental rights; management has commercial autonomy to discard obsolete machinery.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-32-226',
        article: 'Article 32',
        title: 'Remedies for enforcement of fundamental rights and expanded locus standi',
        subjectSlug: 'constitution',
        topicId: 'art-32-226',
      },
    ],
    reasoning: [
      {
        heading: 'Expansion of locus standi in public law',
        explanation:
          'Chandrachud, C.J. and Krishna Iyer, J. firmly rejected the narrow Anglo-Saxon doctrine of standing. Krishna Iyer, J. held: "If a citizen is no more than a wayfarer or officious intervener without any interest or concern, we may shut him out. But if he has a real grievance, the doors of the court cannot be slammed in his face."',
      },
      {
        heading: 'Workers have a tangible interest in public enterprises',
        explanation:
          'Workers in a socialist republic are partners in production, not mere wage slaves. They possess sufficient standing under Article 32 to demand transparency in the disposal of public property.',
      },
    ],
    decision:
      'Preliminary objection on locus standi rejected. On merits, the tender process was found transparent and fair; petition dismissed.',
    holding:
      'Workers have locus standi under Article 32 to challenge disposal of public plant assets. PIL recognized as an instrument of constitutional accountability.',
    ratioDecidendi:
      'The traditional doctrine of locus standi is relaxed in Indian public law. Trade unions and workers have legal standing under Article 32 to challenge actions of public instrumentalities that threaten the enterprise or involve allegations of corrupt disposal of public assets.',
    obiterDicta:
      'Public interest litigation is an arm of social justice, enabling marginalized and affected groups to challenge administrative arbitrariness.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Pioneering ruling on locus standi under Article 32.',
      'Affirmed workers standing to question management disposal of public assets.',
      'Famous concurrent opinion by Justice V.R. Krishna Iyer on PIL and public accountability.',
    ],
    mcqs: [
      {
        id: 'fertilizer-corp-mcq-1',
        question:
          'In Fertilizer Corporation Kamgar Union v. Union of India (1981), what preliminary issue did the Supreme Court settle in favor of the workers?',
        options: [
          'Exemption from payment of income tax',
          'Locus standi under Article 32 to challenge management asset sales',
          'Absolute immunity from retrenchment',
          'Right to strike under Article 19(1)(c)',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court upheld the locus standi of workers under Article 32 to question the disposal of public enterprise assets.',
      },
    ],
  },
  {
    id: 'ms-grewal-2001',
    caseName: 'M.S. Grewal v. Deep Chand Sood',
    shortName: 'M.S. Grewal (School Picnic Negligence)',
    citation: '(2001) 8 SCC 151',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2001,
    bench: '2-Judge Bench',
    judges: ['U.C. Banerjee, J.', 'K.G. Balakrishnan, J.'],
    subject: 'Law of Torts',
    topics: ['Negligence', 'Duty of Care', 'School Picnics', 'Vicarious Liability', 'Exemplary Compensation'],
    tags: ['AIBE', 'Judiciary', 'Torts', 'Negligence', 'Duty of Care', 'Vicarious Liability', 'Damages'],
    summary:
      'Classic Supreme Court tort law precedent on the duty of care owed by school authorities and teachers during school excursions. Held that school management is vicariously liable for the drowning of 14 schoolchildren on a picnic due to gross negligence and lack of supervision by escorting teachers.',
    facts: [
      'A prestigious public school in Dalhousie organized a day picnic for 60 young primary school students to the banks of the Beas River.',
      'Two escorting teachers permitted the students to venture into the river water without checking currents or depth.',
      'Suddenly, water was released from an upstream reservoir, causing a surge in water levels.',
      '14 children were swept away and drowned.',
      'The parents filed writ petitions before the Himachal Pradesh High Court claiming damages. The High Court awarded Rs. 5 Lakh compensation per deceased child against the school.',
      'The school management appealed to the Supreme Court disputing negligence and quantum.',
    ],
    issues: [
      'What is the standard of duty of care expected of school authorities and teachers when taking young children on excursions.',
      'Whether the school is vicariously liable in tort for the gross negligence of escorting teachers.',
    ],
    arguments: {
      appellant: [
        'The drowning was an unforeseen act of God (vis major) caused by the sudden release of dam waters without siren warnings.',
        'The teachers took all reasonable care; no compensation in tort can be awarded under writ jurisdiction.',
      ],
      respondent: [
        'Teachers stand in loco parentis. Taking young children to an open, turbulent mountain river without life jackets or supervision constitutes gross negligence.',
      ],
    },
    provisions: [
      {
        actId: 'torts',
        actName: 'Law of Torts Principles',
        provisionId: 'negligence',
        title: 'Duty of care, breach of duty, and vicarious liability in tort',
        subjectSlug: 'tort',
        topicId: 'negligence',
      },
    ],
    reasoning: [
      {
        heading: 'High standard of care in loco parentis',
        explanation:
          'Banerjee, J. held that when children are entrusted to school authorities, teachers stand in loco parentis (in the place of a parent). The standard of care required is higher than ordinary care; it must be the care of a prudent and caring parent. Allowing young children to play near a turbulent river without life guards or barriers constitutes gross negligence.',
      },
      {
        heading: 'Vicarious liability and compensation under public law',
        explanation:
          'The school management is vicariously liable for torts committed by its employees in the course of employment. In cases of stark negligence resulting in death, courts exercising constitutional jurisdiction can award tortious damages.',
      },
    ],
    decision:
      'Appeal dismissed. High Court judgment affirmed. School management directed to pay Rs. 5 Lakh compensation per child along with interest.',
    holding:
      'School authorities are in loco parentis and owe a high duty of care during picnics. Management is vicariously liable for teachers negligence.',
    ratioDecidendi:
      'School authorities taking young students on an excursion stand in loco parentis and owe a strict duty of care to ensure child safety. Allowing children into hazardous river waters without life-saving apparatus constitutes actionable negligence for which the school management is vicariously liable in tort.',
    obiterDicta:
      'A school picnic must never be turned into a death trap through casual supervision and indifferent oversight.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Standard of care expected of school teachers: doctrine of in loco parentis.',
      'Vicarious liability of educational institutions for tortious negligence.',
      'Award of tortious damages under constitutional writ jurisdiction.',
    ],
    mcqs: [
      {
        id: 'ms-grewal-mcq-1',
        question:
          'In M.S. Grewal v. Deep Chand Sood (2001), what legal doctrine defined the standard of care owed by school teachers to children on a picnic?',
        options: ['Volenti non fit injuria', 'In loco parentis', 'Res ipsa loquitur only', 'Caveat emptor'],
        correctIndex: 1,
        explanation:
          'The Supreme Court applied the doctrine of in loco parentis, holding that teachers must exercise the care of a prudent parent.',
      },
    ],
  },
  {
    id: 'klaus-mittelbachert-1997',
    caseName: 'Klaus Mittelbachert v. East India Hotels Ltd.',
    shortName: 'Klaus Mittelbachert (5-Star Hotel Liability)',
    citation: 'AIR 1997 Del 201',
    court: 'Delhi High Court',
    jurisdiction: 'Original Civil Jurisdiction',
    year: 1997,
    bench: 'Single Judge',
    judges: ['R.C. Lahoti, J.'],
    subject: 'Law of Torts',
    topics: ['Res Ipsa Loquitur', 'Strict Tortious Liability', '5-Star Hotel Duty', 'Exemplary Damages'],
    tags: ['AIBE', 'Judiciary', 'Torts', 'Res Ipsa Loquitur', 'Negligence', 'Exemplary Damages', 'Hotel Liability'],
    summary:
      'Celebrated tort law judgment by Justice R.C. Lahoti on the strict duty of care owed by 5-star luxury hotels to their guests. A German co-pilot suffered quadriplegia after diving into a defectively designed hotel swimming pool. Applied the doctrine of res ipsa loquitur and awarded unprecedented exemplary tort damages of Rs. 50 Lakh against the hotel management.',
    facts: [
      'Klaus Mittelbachert, a German national and co-pilot with Lufthansa Airlines, stayed at the 5-star Hotel Oberoi Intercontinental in New Delhi.',
      'He went for a swim in the hotel swimming pool. As he dived into the pool, his head struck the bottom due to insufficient depth and defective structural design.',
      'He suffered severe cervical vertebrae fractures resulting in complete quadriplegia, paralysis, and severe agony for years before dying.',
      'The co-pilot filed a suit on the original side of the Delhi High Court claiming heavy tortious damages from the hotel.',
    ],
    issues: [
      'What is the nature and extent of the duty of care owed by a 5-star hotel charging exorbitant luxury tariffs to its guests.',
      'Whether the doctrine of res ipsa loquitur applies to an accident in a hotel swimming pool.',
      'What principles govern the computation of damages for catastrophic personal injuries.',
    ],
    arguments: {
      appellant: [
        'The pool was hazardous, poorly lit, lacked depth markers, and was defectively constructed, creating a concealed trap.',
      ],
      respondent: [
        'The pilot was guilty of contributory negligence by diving recklessly; hotels are not absolute insurers of guest safety.',
      ],
    },
    provisions: [
      {
        actId: 'torts',
        actName: 'Law of Torts Principles',
        provisionId: 'negligence',
        title: 'Res ipsa loquitur, hazardous premises liability, and exemplary damages',
        subjectSlug: 'tort',
        topicId: 'negligence',
      },
    ],
    reasoning: [
      {
        heading: 'Enhanced duty of care proportionate to luxury tariffs',
        explanation:
          'Lahoti, J. held that the price a guest pays for a 5-star luxury hotel is an index of the high standard of safety, care, and comfort they are entitled to expect. The higher the tariff, the greater the degree of care expected in tort law.',
      },
      {
        heading: 'Application of Res Ipsa Loquitur',
        explanation:
          'Swimming pools in 5-star hotels are not meant to be death traps. The mere fact that a healthy pilot dived into the pool and ended up a quadriplegic raises a strong presumption of negligence under res ipsa loquitur. The hotel failed to rebut this presumption.',
      },
    ],
    decision:
      'Suit decreed in favor of plaintiff. Exemplary damages of Rs. 50 Lakh with 12% interest awarded against the hotel.',
    holding:
      'Five-star hotels owe a high duty of care to guests. Res ipsa loquitur applies to swimming pool accidents caused by design defects.',
    ratioDecidendi:
      'A 5-star luxury hotel charging premium tariffs owes an enhanced duty of care to ensure its premises and recreational facilities are safe for guest use. Under the doctrine of res ipsa loquitur, the occurrence of a catastrophic diving injury in a hotel pool creates a presumption of defective design and negligent maintenance for which the hotel is liable in exemplary damages.',
    obiterDicta:
      'The law of torts must grow to penalize commercial enterprises that compromise on consumer safety while extracting luxury profits.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://delhihighcourt.nic.in',
      verified: true,
      title: 'Delhi High Court Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading Indian precedent on the doctrine of res ipsa loquitur.',
      'Enhanced duty of care owed by luxury hotels and commercial establishments.',
      'Computation of exemplary damages for catastrophic personal injuries.',
    ],
    mcqs: [
      {
        id: 'mittelbachert-mcq-1',
        question:
          'In Klaus Mittelbachert v. East India Hotels Ltd. (1997), which tort doctrine was applied to hold the 5-star hotel liable for the swimming pool accident?',
        options: ['Volenti non fit injuria', 'Res ipsa loquitur', 'Act of God', 'Contributory negligence'],
        correctIndex: 1,
        explanation:
          'The Delhi High Court applied res ipsa loquitur (the thing speaks for itself) to presume negligence on the part of the hotel.',
      },
    ],
  },
  {
    id: 'mirzapur-moti-kureshi-2005',
    caseName: 'State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat',
    shortName: 'Mirzapur Moti Kureshi (Cattle Slaughter)',
    citation: '(2005) 8 SCC 534',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Appellate Jurisdiction',
    year: 2005,
    bench: '7-Judge Constitution Bench',
    judges: [
      'R.C. Lahoti, C.J.',
      'B.N. Agrawal, J.',
      'Arun Kumar, J.',
      'G.P. Mathur, J.',
      'A.K. Mathur, J.',
      'C.K. Thakker, J.',
      'P.K. Balasubramanyan, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 48 DPSP', 'Cattle Slaughter Ban', 'Article 19(1)(g)', 'Article 19(6)', 'Harmonious Construction'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19(1)(g)', 'Article 48', 'DPSP', 'Fundamental Duties'],
    summary:
      'Landmark 7-judge Constitution Bench judgment upholding a total ban on the slaughter of cows, bulls, and bullocks of all ages in Gujarat. Partially overruled the 5-judge bench in Quareshi-I (1958), holding that even aged and dry cattle produce valuable biogas, bio-fertilizer, and draught power, rendering total ban a reasonable restriction under Article 19(6) read with Article 48 and Article 51A(g).',
    facts: [
      'The Bombay Animal Preservation (Gujarat Amendment) Act, 1994 imposed a total ban on the slaughter of bulls and bullocks of any age in Gujarat.',
      'Butchers and meat traders challenged the amendment on the ground that in Mohd. Hanif Quareshi (1958), the Supreme Court had held that a total ban on the slaughter of bulls and bullocks above 16 years of age was unreasonable and violative of Article 19(1)(g).',
      'The Gujarat High Court struck down the legislation following Quareshi-I. The State of Gujarat appealed to the Supreme Court.',
    ],
    issues: [
      'Whether a total ban on the slaughter of bulls and bullocks of all ages violates the fundamental right to practice a trade under Article 19(1)(g).',
      'Can dynamic economic conditions and Directive Principles (Articles 48 and 51A) justify overruling earlier precedents on cattle preservation.',
    ],
    arguments: {
      appellant: [
        'Scientific evidence shows that aged bulls and bullocks continue to generate dung and urine essential for organic farming and non-conventional biogas energy.',
        'Articles 48, 48A, and 51A(g) mandate preservation of milch and draught cattle.',
      ],
      respondent: [
        'Quareshi-I settled that cattle beyond the age of utility cannot be preserved at public expense; a total prohibition destroys the butchers livelihood.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'dpsp',
        article: 'Article 48, 48A & 51A(g)',
        title: 'Preservation of cattle, environment, and fundamental duties',
        subjectSlug: 'constitution',
        topicId: 'dpsp',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(g) & 19(6)',
        title: 'Freedom of profession and reasonable restrictions in public interest',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
    ],
    reasoning: [
      {
        heading: 'Dynamic interpretation of reasonable restrictions',
        explanation:
          'Lahoti, C.J. held that reasonableness under Article 19(6) is not static. What was unreasonable in 1958 when Quareshi-I was decided may be entirely reasonable in 2005 due to environmental degradation, rising crude oil prices, and the necessity of organic bio-manure.',
      },
      {
        heading: 'Ecological utility of aging cattle',
        explanation:
          'The Court accepted scientific material showing that even post-milch and dry cattle continue to produce organic manure and biogas throughout their lifespan. A total ban on cattle slaughter is therefore in the genuine interest of the agrarian economy.',
      },
    ],
    decision:
      'Appeals allowed. Judgment of the Gujarat High Court set aside. The Bombay Animal Preservation (Gujarat Amendment) Act, 1994 held constitutionally valid.',
    holding:
      'Total ban on slaughter of cows, bulls, and bullocks of all ages is constitutionally valid under Article 19(6) read with Article 48.',
    ratioDecidendi:
      'A statutory prohibition on the slaughter of cattle, including bulls and bullocks of all ages, constitutes a reasonable restriction under Article 19(6) in the interest of the general public, harmonizing Fundamental Rights with Directive Principles (Article 48) and Fundamental Duties (Article 51A(g)) to support the agrarian and ecological economy.',
    obiterDicta:
      'Directive Principles and Fundamental Duties are constitutional guides for measuring the reasonableness of statutory restrictions on fundamental freedoms.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      '7-judge Constitution Bench decision on cattle slaughter and Article 19(1)(g).',
      'Overruled Quareshi-I on the invalidity of total ban on slaughter of aged bulls/bullocks.',
      'Harmonious integration of Fundamental Rights with Articles 48 and 51A(g).',
    ],
    mcqs: [
      {
        id: 'moti-kureshi-mcq-1',
        question:
          'In State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat (2005), the 7-judge Constitution Bench upheld what state measure?',
        options: [
          'Total ban on slaughter of cows, bulls, and bullocks of all ages',
          'Permitting slaughter of cattle above 14 years',
          'Export of beef to foreign nations',
          'Abolition of all butcher licenses',
        ],
        correctIndex: 0,
        explanation:
          'The 7-judge bench upheld a total ban on the slaughter of cows, bulls, and bullocks of all ages as a reasonable restriction under Article 19(6).',
      },
    ],
  },
  {
    id: 'ashok-hurra-1997',
    caseName: 'Ashok Hurra v. Bipin Zaveri',
    shortName: 'Ashok Hurra (Mutual Consent Divorce)',
    citation: '(1997) 4 SCC 226',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1997,
    bench: '2-Judge Bench',
    judges: ['K. Ramaswamy, J.', 'S.B. Majmudar, J.'],
    subject: 'Family Law',
    topics: ['Mutual Consent Divorce', 'Section 13B HMA', 'Withdrawal of Consent', 'Article 142 Dissolution'],
    tags: ['AIBE', 'Judiciary', 'Family Law', 'HMA Section 13B', 'Article 142', 'Mutual Consent', 'Divorce'],
    summary:
      'Pivotal Supreme Court judgment addressing unilateral withdrawal of consent under Section 13B(2) of the Hindu Marriage Act, 1955. Held that where a marriage has irretrievably broken down, the Supreme Court can invoke its plenary power under Article 142 of the Constitution to dissolve the dead marriage despite the unilateral withdrawal of consent by one spouse.',
    facts: [
      'The parties married in 1970 and separated shortly thereafter in 1983.',
      'In 1984, they jointly filed a petition for divorce by mutual consent under Section 13B of the Hindu Marriage Act.',
      'Before the second motion under Section 13B(2) could be heard, the wife unilaterally filed an application withdrawing her consent.',
      'The husband contended that the marriage had been completely dead for 14 years and that the withdrawal of consent was actuated by malice and harassment.',
    ],
    issues: [
      'Can a spouse unilaterally withdraw consent after jointly filing a petition under Section 13B(1) HMA.',
      'Can the Supreme Court grant a decree of divorce under Article 142 where the marriage has irretrievably broken down notwithstanding withdrawal of consent.',
    ],
    arguments: {
      appellant: [
        'The marriage had irretrievably broken down, both parties lived apart for over a decade, and continuing the legal tie was emotional cruelty.',
      ],
      respondent: [
        'Under Section 13B(2), mutual consent must subsist continuously on the date of the decree; unilateral withdrawal deprives the court of jurisdiction.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Hindu Marriage Act, 1955',
        provisionId: 'hma-s-13',
        section: 'Section 13B(1) & 13B(2)',
        title: 'Divorce by mutual consent and second motion waiting period',
        subjectSlug: 'family-law',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-32-226',
        article: 'Article 142',
        title: 'Plenary power of the Supreme Court to do complete justice',
        subjectSlug: 'constitution',
        topicId: 'art-32-226',
      },
    ],
    reasoning: [
      {
        heading: 'Limitation of regular family court vs Article 142 powers',
        explanation:
          'Majmudar, J. observed that while a family court cannot grant a decree under Section 13B if one party revokes consent before the second motion, the Supreme Court is not fettered by ordinary procedural technicalities. Under Article 142, the Supreme Court can dissolve an irretrievably broken marriage to do complete justice.',
      },
      {
        heading: 'Dissolution of an empty legal shell',
        explanation:
          'Where the marriage is dead emotionally and practically and living apart has continued for over a decade without any possibility of reconciliation, keeping the formal knot alive amounts to cruelty to both parties.',
      },
    ],
    decision:
      'Appeal allowed. Marriage dissolved by a decree of divorce under Article 142 of the Constitution, subject to payment of permanent alimony to the wife.',
    holding:
      'Supreme Court can dissolve an irretrievably broken marriage under Article 142 despite unilateral withdrawal of consent under Section 13B(2) HMA.',
    ratioDecidendi:
      'Under Article 142 of the Constitution, the Supreme Court has the power to do complete justice by granting a decree of divorce to dissolve a marriage that has irretrievably broken down, even if one spouse has unilaterally withdrawn consent prior to the second motion under Section 13B(2) of the Hindu Marriage Act.',
    obiterDicta:
      'Parliament ought to consider introducing irretrievable breakdown of marriage as a statutory ground for divorce in the Hindu Marriage Act.',
    relatedCases: [
      {
        judgmentId: 'shilpa-sailesh-2023',
        caseName: 'Shilpa Sailesh v. Varun Sreenivasan',
        citation: '(2023) 8 SCC 726',
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
      'Precursor to the 2023 Shilpa Sailesh Constitution Bench decision.',
      'Exercise of Article 142 powers in irretrievably broken Hindu marriages.',
      'Interplay between Section 13B(2) mutual consent and unilateral revocation.',
    ],
    mcqs: [
      {
        id: 'ashok-hurra-mcq-1',
        question:
          'In Ashok Hurra v. Bipin Zaveri (1997), under what constitutional provision did the Supreme Court grant a divorce despite withdrawal of consent?',
        options: ['Article 32', 'Article 136', 'Article 142', 'Article 226'],
        correctIndex: 2,
        explanation:
          'The Supreme Court exercised its plenary power under Article 142 of the Constitution to dissolve the dead marriage and do complete justice.',
      },
    ],
  },
  {
    id: 'bp-singhal-2010',
    caseName: 'B.P. Singhal v. Union of India',
    shortName: 'B.P. Singhal (Removal of Governors)',
    citation: '(2010) 6 SCC 331',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2010,
    bench: '5-Judge Constitution Bench',
    judges: [
      'K.G. Balakrishnan, C.J.',
      'S.H. Kapadia, J.',
      'R.V. Raveendran, J.',
      'B. Sudershan Reddy, J.',
      'P. Sathasivam, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Doctrine of Pleasure', 'Article 156(1)', 'Removal of Governors', 'Judicial Review', 'Federalism'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 156', 'Doctrine of Pleasure', 'Federalism', 'Governor'],
    summary:
      'Historic 5-judge Constitution Bench judgment expounding the doctrine of pleasure under Article 156(1) of the Constitution regarding the removal of State Governors. Held that while the President can remove a Governor without showing cause or prior hearing, the power cannot be exercised arbitrarily, capriciously, or merely due to a change of Government at the Centre.',
    facts: [
      'Following the change of central government in 2004, the newly elected UPA Government advised the President to remove the Governors of Uttar Pradesh, Gujarat, Haryana, and Goa.',
      'B.P. Singhal, a former Member of Parliament, filed a PIL under Article 32 challenging the wholesale removal of Governors based solely on their political ideologies.',
      'The Union of India contended that Article 156(1) embodies an unfettered and absolute "doctrine of pleasure" not subject to judicial review.',
    ],
    issues: [
      'What is the scope and limitation of the doctrine of pleasure under Article 156(1) of the Constitution.',
      'Can the President remove a Governor merely because the political party in power at the Centre has changed.',
      'Is the Presidential decision to remove a Governor subject to judicial review under Article 32 or 226.',
    ],
    arguments: {
      appellant: [
        'The Governor is not an employee of the Central Government; arbitrary removals destroy state autonomy and constitutional federalism.',
      ],
      respondent: [
        'Article 156(1) contains no conditions or restrictions; pleasure is absolute and the court cannot inquire into reasons.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'executive-ordinance-pardon',
        article: 'Article 155 & 156',
        title: 'Appointment and term of office of Governor — Doctrine of Pleasure',
        subjectSlug: 'constitution',
        topicId: 'executive-ordinance-pardon',
      },
    ],
    reasoning: [
      {
        heading: 'Doctrine of pleasure is not a license for arbitrariness',
        explanation:
          'Raveendran, J. held that in a constitutional republic governed by the rule of law, there is no place for absolute, arbitrary, or uncanalized power. The doctrine of pleasure under Article 156(1) does not mean the President can act at will, whim, or fancy.',
      },
      {
        heading: 'Grounds of removal and judicial review',
        explanation:
          'A Governor cannot be removed merely because he is not acceptable to the new ruling party at the Centre or holds a different political ideology. However, the President need not issue a show-cause notice or record reasons in the order. If an aggrieved Governor establishes prima facie that the removal was arbitrary, mala fide, or based on extraneous grounds, the court can grant judicial review.',
      },
    ],
    decision:
      'Writ petition disposed of. The constitutional principles governing Article 156(1) settled: pleasure is not absolute; removal for political ideology alone is unconstitutional.',
    holding:
      'Governors cannot be removed arbitrarily or merely because of a change of Government at the Centre. Pleasure power is subject to judicial review.',
    ratioDecidendi:
      'Under Article 156(1) of the Constitution, the doctrine of pleasure is subject to constitutional limitations. Although the President need not give reasons or hold an enquiry before removing a Governor, the power cannot be exercised arbitrarily, mala fide, or on extraneous grounds such as a change of regime at the Centre. Such removal is subject to limited judicial review.',
    obiterDicta:
      'The office of the Governor is a high constitutional post vital for cooperative federalism, not an appendage of central political party offices.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading Constitution Bench decision on Article 156(1) doctrine of pleasure.',
      'Dismissal of Governors cannot be based on mere change of ruling party at Centre.',
      'Limited judicial review available against arbitrary or mala fide removal.',
    ],
    mcqs: [
      {
        id: 'bp-singhal-mcq-1',
        question:
          'In B.P. Singhal v. Union of India (2010), what did the Constitution Bench hold regarding the removal of Governors under Article 156(1)?',
        options: [
          'Governors enjoy fixed 5-year tenure and cannot be removed under any circumstance',
          'Governors can be removed arbitrarily without any judicial scrutiny',
          'Governors cannot be removed merely because a different political party came to power at the Centre',
          'Governors can only be removed by parliamentary impeachment',
        ],
        correctIndex: 2,
        explanation:
          'The Constitution Bench held that Governors cannot be removed arbitrarily or merely because of a change of ruling party at the Centre.',
      },
    ],
  },
  {
    id: 'satish-chandra-ahuja-2021',
    caseName: 'Satish Chander Ahuja v. Sneha Ahuja',
    shortName: 'Satish Chander Ahuja (Shared Household)',
    citation: '(2021) 1 SCC 414',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2021,
    bench: '3-Judge Bench',
    judges: ['Ashok Bhushan, J.', 'R. Subhash Reddy, J.', 'M.R. Shah, J.'],
    subject: 'Family Law / Domestic Violence',
    topics: ['Domestic Violence Act', 'Shared Household', 'Section 17 DV Act', 'Overruling S.R. Batra'],
    tags: ['AIBE', 'Judiciary', 'DV Act', 'Section 17', 'Shared Household', 'Women Rights', 'Family Law'],
    summary:
      'Landmark 3-judge bench decision overturning the restrictive interpretation of "shared household" laid down in S.R. Batra v. Taruna Batra (2007). Held that under Section 2(s) and Section 17 of the Domestic Violence Act, 2005, a woman has a right of residence in a property belonging to her in-laws if she lived there in a domestic relationship, even if the husband has no legal share or ownership in the property.',
    facts: [
      'The father-in-law, Satish Chander Ahuja, filed a suit for mandatory injunction seeking the eviction of his daughter-in-law Sneha Ahuja from his self-acquired property.',
      'The daughter-in-law resisted eviction, contending that the premises constituted her "shared household" under Section 2(s) of the Protection of Women from Domestic Violence Act, 2005, giving her a statutory right of residence under Section 17.',
      'The trial court passed a decree of eviction relying on S.R. Batra (2007), which held that a house owned exclusively by parents-in-law cannot be a shared household.',
      'The High Court set aside the decree and remanded the matter, leading to the Supreme Court appeal.',
    ],
    issues: [
      'What is the true statutory scope of "shared household" under Section 2(s) of the DV Act.',
      'Whether the restrictive rule in S.R. Batra v. Taruna Batra, which excluded in-laws self-acquired property from shared household, was correctly decided.',
    ],
    arguments: {
      appellant: [
        'An elderly father-in-law should not be deprived of his self-acquired property; the wife can only claim residence against the husband.',
      ],
      respondent: [
        'The DV Act was enacted to prevent immediate homelessness of women facing marital discord. If in-laws properties are excluded, most married women in India will have no residence protection.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Protection of Women from Domestic Violence Act, 2005',
        provisionId: 'shared-household',
        section: 'Sections 2(s), 17 & 19',
        title: 'Definition of shared household and right to reside in shared household',
        subjectSlug: 'family-law',
      },
    ],
    reasoning: [
      {
        heading: 'Overruling S.R. Batra v. Taruna Batra',
        explanation:
          'Ashok Bhushan, J. held that the interpretation given in S.R. Batra was too narrow and frustrated the remedial purpose of the DV Act. Section 2(s) does not require that the shared household must belong to the husband or be joint family property. It suffices if the aggrieved woman lived in the property in a domestic relationship.',
      },
      {
        heading: 'Balancing rights of senior citizens and daughters-in-law',
        explanation:
          'The Court held that in eviction suits filed by senior citizens against daughters-in-law, civil courts must balance the rights of elderly parents with the statutory residence rights of the daughter-in-law under Section 17 DV Act, without passing mechanical eviction decrees.',
      },
    ],
    decision:
      'Appeal dismissed. S.R. Batra overruled. Held that a woman can claim right of residence under Section 17 DV Act in property exclusively owned by in-laws if she lived there in a domestic relationship.',
    holding:
      'Shared household under Section 2(s) DV Act includes premises owned by in-laws where the woman lived in a domestic relationship. S.R. Batra overruled.',
    ratioDecidendi:
      'Under Sections 2(s) and 17 of the Protection of Women from Domestic Violence Act, 2005, a "shared household" includes any property where the aggrieved woman has lived at any stage in a domestic relationship, irrespective of whether the husband holds any proprietary right or title in the premises. S.R. Batra v. Taruna Batra is overruled.',
    obiterDicta:
      'The DV Act is a transformative welfare legislation designed to protect women from sudden destitution and homelessness.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Overruled S.R. Batra v. Taruna Batra (2007).',
      'Expounded definition of "shared household" under Section 2(s) DV Act.',
      'Harmonized Maintenance of Parents Act with the Domestic Violence Act.',
    ],
    mcqs: [
      {
        id: 'satish-ahuja-mcq-1',
        question:
          'Which earlier 2007 judgment regarding the definition of "shared household" was overruled by the 3-judge bench in Satish Chander Ahuja v. Sneha Ahuja (2021)?',
        options: [
          'D. Velusamy v. D. Patchaiammal',
          'S.R. Batra v. Taruna Batra',
          'Sarla Mudgal v. Union of India',
          'Danial Latifi v. Union of India',
        ],
        correctIndex: 1,
        explanation:
          'Satish Chander Ahuja v. Sneha Ahuja (2021) expressly overruled S.R. Batra v. Taruna Batra (2007).',
      },
    ],
  },
  {
    id: 'kamlesh-verma-2013',
    caseName: 'Kamlesh Verma v. Mayawati',
    shortName: 'Kamlesh Verma (Review Jurisdiction)',
    citation: '(2013) 8 SCC 320',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Review Jurisdiction',
    year: 2013,
    bench: '2-Judge Bench',
    judges: ['P. Sathasivam, C.J.', 'J. Chelameswar, J.'],
    subject: 'Code of Civil Procedure / Constitution',
    topics: ['Review Jurisdiction', 'Order 47 Rule 1 CPC', 'Article 137', 'Error Apparent on the Face of the Record'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order 47 Rule 1', 'Article 137', 'Review', 'Error Apparent'],
    summary:
      'The leading modern authority summarizing the comprehensive principles governing review jurisdiction under Order XLVII Rule 1 CPC and Article 137 of the Constitution. Codified two exhaustive lists: grounds when review is maintainable (error apparent, new discovery) and grounds when review is strictly not maintainable (rehearing of arguments, minor omission).',
    facts: [
      'A review petition was filed seeking review of the Supreme Court judgment quashing the CBI disproportionate assets investigation against former UP Chief Minister Mayawati.',
      'The petitioner contended that vital facts regarding statutory sanctions were overlooked by the original bench.',
      'The Supreme Court utilized the occasion to author an exhaustive treatise codifying the boundaries of civil and constitutional review.',
    ],
    issues: [
      'What constitutes an "error apparent on the face of the record" justifying review under Order XLVII Rule 1 CPC and Article 137.',
      'What are the strict limitations on review petitions disguised as appeals in disguise.',
    ],
    arguments: {
      appellant: [
        'The court overlooked material evidence in the original proceedings, which constitutes an error apparent on the record.',
      ],
      respondent: [
        'A review is not an appeal in disguise; a judgment cannot be reviewed merely because an alternative legal view is plausible.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'appeals',
        section: 'Order XLVII Rule 1 CPC & Section 114',
        title: 'Application for review of judgment and grounds of maintainability',
        subjectSlug: 'cpc',
        topicId: 'appeals',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'judiciary',
        article: 'Article 137',
        title: 'Review of judgments or orders by the Supreme Court',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'When review is maintainable',
        explanation:
          'Sathasivam, C.J. laid down that review is maintainable only upon: (1) Discovery of new and important matter or evidence which could not be produced after exercise of due diligence; (2) Some mistake or error apparent on the face of the record; (3) Any other sufficient reason analogous to the above.',
      },
      {
        heading: 'When review is strictly NOT maintainable',
        explanation:
          'Review is not maintainable: (1) A repetition of old and overruled arguments; (2) Merely because the conclusion is wrong or an alternative view was possible; (3) As an appeal in disguise; (4) On minor omissions that do not affect the core holding.',
      },
    ],
    decision:
      'Review petition dismissed. Held that no error apparent on the face of the record was established.',
    holding:
      'Review is maintainable only for errors apparent on the record or new discovery, and cannot be an appeal in disguise.',
    ratioDecidendi:
      'Under Order XLVII Rule 1 CPC and Article 137 of the Constitution, review jurisdiction cannot be used as an appeal in disguise or a second opportunity to re-argue concluded points. An error apparent on the face of the record is one which is self-evident and does not require an elaborate process of reasoning or prolonged debate to establish.',
    obiterDicta:
      'Finality of litigation is a core principle of jurisprudence; review must be confined strictly to extraordinary procedural defects.',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'The definitive guide to Order XLVII Rule 1 CPC and Article 137 review jurisdiction.',
      'Comprehensive two-part checklist: when review lies vs when review is barred.',
      'Definition of "error apparent on the face of the record".',
    ],
    mcqs: [
      {
        id: 'kamlesh-verma-mcq-1',
        question:
          'According to Kamlesh Verma v. Mayawati (2013), an "error apparent on the face of the record" under Order XLVII Rule 1 CPC must be:',
        options: [
          'An error that requires extensive research to detect',
          'Self-evident without requiring an elaborate process of reasoning',
          'Any difference of judicial opinion',
          'A change of lawyer after the judgment',
        ],
        correctIndex: 1,
        explanation:
          'The Court held that an error apparent must be self-evident on the face of the record and not one requiring an elaborate process of reasoning.',
      },
    ],
  },
  {
    id: 'laxmi-acid-attack-2014',
    caseName: 'Laxmi v. Union of India',
    shortName: 'Laxmi (Acid Attack Regulations)',
    citation: '(2014) 4 SCC 427',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2014,
    bench: '2-Judge Bench',
    judges: ['R.M. Lodha, C.J.', 'Surinder Singh Nijjar, J.'],
    subject: 'Criminal Law / Constitution',
    topics: ['Acid Attacks', 'Victim Compensation', 'Regulation of Acid Sales', 'Section 357B/357C CrPC', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'Article 21', 'Acid Attacks', 'Victim Compensation', 'IPC 326A', 'CrPC 357B'],
    summary:
      'Historic public interest litigation judgment revolutionizing legal protections for acid attack survivors. Formulated nationwide binding directions restricting over-the-counter sales of corrosive acid, mandated photo ID and logbooks for buyers, and ordered minimum victim compensation of Rs. 3 Lakh and 100% free medical treatment in all public and private hospitals under Section 357C CrPC (now Section 397 BNSS).',
    facts: [
      'Laxmi, an acid attack survivor who suffered horrific facial disfigurement at age 15 for rejecting a marriage proposal, filed a PIL under Article 32.',
      'She highlighted the unrestricted over-the-counter sale of hazardous acids (hydrochloric, sulfuric) for nominal sums of Rs. 20–30, and the total lack of medical rehabilitation for survivors.',
      'During proceedings, Parliament enacted the Criminal Law (Amendment) Act, 2013, inserting Sections 326A and 326B IPC and Sections 357B and 357C CrPC.',
      'The Supreme Court issued nationwide operational guidelines to implement these provisions effectively.',
    ],
    issues: [
      'How to regulate the retail sale of acid to prevent hazardous misuse.',
      'What minimum statutory compensation and medical treatment must be guaranteed to acid attack survivors under Article 21.',
    ],
    arguments: {
      appellant: [
        'Acid attacks are worse than murder, subjecting victims to living death, social exclusion, and repeated reconstructive surgeries; unregulated sales must be banned.',
      ],
      respondent: [
        'Acid is used for industrial, commercial, and domestic cleaning purposes; total prohibition is commercially unfeasible.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023 / IPC',
        provisionId: 's-152',
        section: 'Sections 326A & 326B IPC / Sections 124(1) & 124(2) BNS',
        title: 'Voluntarily causing grievous hurt by use of acid',
        subjectSlug: 'bns',
      },
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC',
        provisionId: 'trial-procedure',
        section: 'Sections 357B & 357C CrPC / Sections 396 & 397 BNSS',
        title: 'Compensation to acid attack victims and mandatory free treatment by all hospitals',
        subjectSlug: 'bnss',
      },
    ],
    reasoning: [
      {
        heading: 'Strict regulation on retail sale of acid',
        explanation:
          'Lodha, C.J. framed binding rules: (1) Over-the-counter sale of acid prohibited unless seller maintains a register of buyers; (2) Buyer must produce photo ID showing address and specify the purpose of purchase; (3) Ban on sale of acid to any person below 18 years; (4) Unaccounted acid to be confiscated with heavy fines.',
      },
      {
        heading: 'Mandatory victim compensation and free medical treatment',
        explanation:
          'All State Governments directed to pay minimum compensation of Rs. 3 Lakh per acid attack victim (Rs. 1 Lakh within 15 days for emergency care). All hospitals (public and private) mandated under Section 357C CrPC to provide immediate, complete, and free medical treatment including reconstructive surgeries.',
      },
    ],
    decision:
      'Binding directions issued nationwide regulating acid sales, mandating minimum compensation of Rs. 3 Lakh, and imposing penal liability on hospitals denying free treatment.',
    holding:
      'Over-the-counter acid sales restricted; minimum Rs. 3 Lakh compensation and 100% free medical treatment mandated across India.',
    ratioDecidendi:
      'Under Article 21 of the Constitution read with Sections 357B and 357C CrPC, the State is under a constitutional obligation to provide minimum compensation of Rs. 3 Lakh to acid attack survivors. All hospitals, whether public or private, are bound to provide immediate, 100% free medical treatment and reconstructive surgery without delay.',
    obiterDicta:
      'Any hospital refusing emergency medical aid to an acid attack victim shall face criminal prosecution under Section 166B IPC (now Section 198 BNS).',
    relatedCases: [],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Mandated minimum Rs. 3 Lakh victim compensation for acid attack survivors.',
      'Mandatory free medical treatment by all hospitals under Section 357C CrPC (Section 397 BNSS).',
      'Model rules regulating retail sale of acid across India.',
    ],
    mcqs: [
      {
        id: 'laxmi-mcq-1',
        question:
          'In Laxmi v. Union of India (2014), what minimum compensation did the Supreme Court order States to pay to acid attack victims?',
        options: ['Rs. 50,000', 'Rs. 1,000,000', 'Rs. 300,000', 'Rs. 500,000'],
        correctIndex: 2,
        explanation:
          'The Supreme Court ordered a minimum compensation of Rs. 3 Lakh (Rs. 300,000) for every acid attack victim, with Rs. 1 Lakh to be paid within 15 days.',
      },
    ],
  },
]
