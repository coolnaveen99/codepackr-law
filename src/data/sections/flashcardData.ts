import { LawFlashcard } from '../../types'

export const SECTION_FLASHCARDS: LawFlashcard[] = [
  {
    id: 'fc-const-14',
    act: 'Constitution of India',
    sectionOrArticle: 'Article 14',
    title: 'Equality before Law & Equal Protection of the Laws',
    summary: 'Prohibits State from denying equality before the law or equal protection of laws to any person within the territory of India.',
    keyElements: [
      'Applies to citizens and non-citizens alike',
      'Permits reasonable classification (intelligible differentia + rational nexus)',
      'Arbitrariness is anathema to equality (Royappa & Maneka Gandhi doctrine)',
    ],
    landmarkCase: 'State of W.B. v. Anwar Ali Sarkar; E.P. Royappa v. State of T.N.',
    tag: 'Fundamental Rights'
  },
  {
    id: 'fc-const-21',
    act: 'Constitution of India',
    sectionOrArticle: 'Article 21',
    title: 'Protection of Life and Personal Liberty',
    summary: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    keyElements: [
      'Procedure must be "just, fair and reasonable" (Maneka Gandhi, 1978)',
      'Expansive umbrella: Right to clean environment, speedy trial, livelihood, medical care',
      'Includes Right to Privacy as an intrinsic right (Puttaswamy, 2017)',
    ],
    landmarkCase: 'Maneka Gandhi v. UOI; K.S. Puttaswamy v. UOI',
    tag: 'Fundamental Rights'
  },
  {
    id: 'fc-const-32',
    act: 'Constitution of India',
    sectionOrArticle: 'Article 32',
    title: 'Remedies for enforcement of Fundamental Rights',
    summary: 'Constitutional guarantee to move the Supreme Court directly for enforcement of Part III rights. Described by Dr. Ambedkar as the very "heart and soul" of the Constitution.',
    keyElements: [
      'Empowers SC to issue 5 prerogative writs: Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari',
      'Article 32 itself is a Fundamental Right and cannot be suspended except under Art 359',
      'Locus standi relaxed via Public Interest Litigation (PIL)',
    ],
    landmarkCase: 'Fertilizer Corporation Kamgar Union; Bandhua Mukti Morcha',
    tag: 'Constitutional Remedies'
  },
  {
    id: 'fc-const-226',
    act: 'Constitution of India',
    sectionOrArticle: 'Article 226',
    title: 'Power of High Courts to issue certain writs',
    summary: 'High Courts have constitutional power to issue directions, orders or writs for enforcement of Fundamental Rights AND for "any other purpose" (ordinary legal rights).',
    keyElements: [
      'Wider jurisdiction in scope than Article 32',
      'Discretionary extraordinary remedy; alternate efficacious remedy considered',
      'Territorial jurisdiction governed by Art 226(2) (cause of action doctrine)',
    ],
    landmarkCase: 'Whirlpool Corporation v. Registrar of Trade Marks',
    tag: 'Constitutional Remedies'
  },
  {
    id: 'fc-bns-103',
    act: 'Bharatiya Nyaya Sanhita, 2023',
    sectionOrArticle: 'Section 103',
    title: 'Punishment for Murder & Mob Lynching',
    summary: 'Prescribes punishment for murder (death or life imprisonment + fine) and creates distinct severe punishment for murder committed by mob of 5 or more on specific discriminatory grounds.',
    keyElements: [
      'Sec 103(1): General punishment for murder',
      'Sec 103(2): Mob lynching (race, caste, sex, place of birth, language, religion)',
      'Replaces Section 302 IPC 1860',
    ],
    tag: 'Criminal Law (BNS)'
  },
  {
    id: 'fc-bns-152',
    act: 'Bharatiya Nyaya Sanhita, 2023',
    sectionOrArticle: 'Section 152',
    title: 'Acts endangering sovereignty, unity and integrity of India',
    summary: 'Penalizes purposely or knowingly by words, signs, electronic communication, or financial means, inciting secession, armed rebellion, subversive activities, or separatism.',
    keyElements: [
      'Replaces the old Section 124A (Sedition) IPC',
      'Removes the colonial phrase "disaffection towards Government established by law"',
      'Punishment: Life imprisonment or up to 7 years + fine',
    ],
    tag: 'Criminal Law (BNS)'
  },
  {
    id: 'fc-bnss-173',
    act: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
    sectionOrArticle: 'Section 173',
    title: 'Information in cognizable cases (Zero FIR & E-FIR)',
    summary: 'Codifies the obligation of police officers to record FIR for cognizable offences irrespective of jurisdiction (Zero FIR) and permits e-FIR.',
    keyElements: [
      'Statutory recognition of Zero FIR',
      'E-FIR must be taken on record and signed by informant within 3 days',
      'Preliminary inquiry allowed up to 14 days in offences punishable with 3 to 7 years',
    ],
    landmarkCase: 'Codified rule from Lalita Kumari v. Govt of U.P.',
    tag: 'Criminal Procedure (BNSS)'
  },
  {
    id: 'fc-cpc-11',
    act: 'Code of Civil Procedure, 1908',
    sectionOrArticle: 'Section 11',
    title: 'Res Judicata',
    summary: 'No Court shall try any suit or issue in which the matter has been directly and substantially in issue in a former suit between the same parties and has been heard and finally decided.',
    keyElements: [
      'Based on public policy: interest reipublicae ut sit finis litium & nemo debet bis vexari',
      '8 Explanations in Section 11 (Explanation IV: Constructive Res Judicata)',
      'Applies to execution proceedings and writ petitions too',
    ],
    landmarkCase: 'Daryao v. State of U.P.; Forward Construction Co.',
    tag: 'Civil Procedure (CPC)'
  },
  {
    id: 'fc-cpc-o39',
    act: 'Code of Civil Procedure, 1908',
    sectionOrArticle: 'Order XXXIX Rules 1 & 2',
    title: 'Temporary Injunctions and Interlocutory Orders',
    summary: 'Equitable interim remedy to preserve status quo and protect property in dispute from being wasted, damaged, or alienated pending civil trial.',
    keyElements: [
      'Three golden pillars: Prima facie case, Balance of convenience, Irreparable injury',
      'Rule 2A: Consequences of disobedience or breach of injunction (detention up to 3 months)',
      'Ex-parte injunction under Rule 3 requires recorded reasons and compliance with proviso',
    ],
    landmarkCase: 'Dalpat Kumar v. Prahlad Singh (1992)',
    tag: 'Civil Procedure (CPC)'
  },
  {
    id: 'fc-contract-56',
    act: 'Indian Contract Act, 1872',
    sectionOrArticle: 'Section 56',
    title: 'Agreement to do impossible act & Frustration of Contract',
    summary: 'An agreement to do an act impossible in itself is void. If an act becomes impossible or unlawful after contract formation without fault of parties, it becomes void (Doctrine of Frustration).',
    keyElements: [
      'Supervening impossibility changes the fundamental nature of performance',
      'Commercial hardship or temporary price rise is NOT frustration',
      'Section 65 applies: restitution of benefits received under void contract',
    ],
    landmarkCase: 'Satyabrata Ghose v. Mugneeram Bangur & Co. (1954)',
    tag: 'Law of Contract'
  },
]
