import type { Judgment } from './types'

/**
 * Famous landmarks batch 10 — 10 judgments.
 * High-yield Supreme Court landmark cases for AIBE and Judiciary exams.
 * DISPATCHER Phase 5 quality: authentic citations, verified ratios,
 * zero mark-band phrasing, catalog-safe topicIds, valid relatedCases.
 */

// 1. Taj Trapezium Case (1997)
export const tajTrapezium: Judgment = {
  id: 'taj-trapezium-1997',
  caseName: 'M.C. Mehta v. Union of India (Taj Trapezium Case)',
  shortName: 'Taj Trapezium Case',
  court: 'Supreme Court of India',
  jurisdiction: 'Environmental Law',
  year: 1997,
  citation: '(1997) 2 SCC 353',
  bench: '2-Judge Bench',
  judges: ['Kuldip Singh, J.', 'Faizan Uddin, J.'],
  subject: 'Environment',
  topics: ['Air Pollution', 'Taj Trapezium Zone', 'Precautionary Principle', 'Sustainable Development', 'Article 21'],
  tags: ['AIBE', 'Judiciary', 'Environment', 'Taj Mahal', 'Air Pollution', 'TTZ', 'Precautionary Principle'],
  summary:
    'The Supreme Court issued sweeping environmental directions to protect the 17th-century world heritage monument Taj Mahal from severe yellowing and chemical degradation caused by sulphur dioxide and industrial acid rain. Applying the Precautionary Principle and Sustainable Development under Article 21, the Court ordered 292 polluting coal- and coke-based industrial units inside the 10,400 sq km Taj Trapezium Zone (TTZ) to either switch over to clean natural gas (CNG/LPG) or relocate outside the zone.',
  facts: [
    'The Taj Mahal, a UNESCO World Heritage monument constructed of pristine white marble, suffered significant discolouration, yellowing, and brown spots caused by toxic emissions from the Mathura Refinery, iron foundries, brick kilns, glass works, and chemical factories in the Agra region.',
    'Sulphur dioxide emitted by industries combined with atmospheric moisture to form acid rain ("marble cancer"), corroding the marble structure.',
    'Environmentalist advocate M.C. Mehta filed a PIL under Article 32 seeking urgent judicial intervention to save the monument and the ecology of the Taj Trapezium Zone.',
    'Expert reports from NEERI (National Environmental Engineering Research Institute) and the Varadarajan Committee confirmed severe air pollution exceeding ambient standards.',
  ],
  issues: [
    'Whether commercial industrial activities causing air pollution and acid rain around the Taj Mahal should be shut down or relocated.',
    'How the Precautionary Principle and the concept of Sustainable Development apply to the preservation of national monuments under Articles 21, 48A, and 49.',
  ],
  arguments: {
    appellant: [
      'The Taj Mahal is a cultural monument of global significance; Article 49 imposes a constitutional obligation on the State to protect monuments of national importance.',
      'The right to a healthy environment and cultural heritage is an integral part of the right to life under Article 21.',
    ],
    respondent: [
      'Relocating or forcing closure of 292 industries would lead to massive economic disruption and unemployment of thousands of workers.',
      'Industries were operating under statutory licenses and were not the sole source of ambient air pollution in Agra.',
    ],
  },
  provisions: [
    {
      actId: 'epa',
      actName: 'Environment (Protection) Act, 1986',
      provisionId: 'epa-s-3',
      section: 'Section 3 & 5',
      title: 'Measures to protect and improve environment',
      subjectSlug: 'environment',
      topicId: 'env-epa-sections',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21, 48A, and 49',
      title: 'Protection of life, environment, and monuments of national importance',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Precautionary Principle and Onus of Proof',
      explanation:
        'Kuldip Singh, J. held that the Precautionary Principle and the Polluter Pays Principle are essential features of Sustainable Development and form part of Indian environmental law under Article 21. When environmental harm threatens irreplaceable heritage, the burden of proof is on the industrialist to demonstrate that their operations are environmentally benign.',
    },
    {
      heading: 'Mandatory Gas Switch or Relocation',
      explanation:
        'The Court balanced environmental protection with workers’ rights, directing the 292 industries to apply for gas supply from the Gas Authority of India (GAIL). Industries not switching to natural gas were given a fixed deadline to stop operating with coal/coke and relocate outside the TTZ, with mandatory compensation and continuity of service for affected employees.',
    },
  ],
  decision:
    '292 industries ordered to switch over to natural gas or relocate outside the TTZ; workers’ employment and terminal benefits protected.',
  holding:
    'Protection of cultural heritage from air pollution is mandated by Articles 21, 48A, and 49; polluting units must switch to clean fuel or relocate under the Precautionary Principle.',
  ratioDecidendi:
    'Under the Precautionary Principle and Article 21, commercial industrial units causing atmospheric pollution that threatens national monuments and public health cannot continue using polluting fuels and must either adopt non-polluting fuel or relocate.',
  relatedCases: [
    {
      caseName: 'Vellore Citizens\' Welfare Forum v. Union of India',
      citation: '(1996) 5 SCC 647',
      relationship: 'Applied Precautionary Principle and Polluter Pays',
      judgmentId: 'vellore-citizens-1996',
    },
    {
      caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak)',
      citation: '(1987) 1 SCC 395',
      relationship: 'Origin of absolute environmental liability',
      judgmentId: 'mc-mehta-oleum-1987',
    },
  ],
  examPoints: [
    'The Taj Trapezium Zone (TTZ) encompasses approximately 10,400 sq km around the Taj Mahal.',
    'Recognized "marble cancer" caused by sulphur dioxide emissions and acid rain.',
    'Enforced the Precautionary Principle to protect national monuments under Articles 21, 48A, and 49.',
    'Directed GAIL to supply natural gas to industries in Agra.',
  ],
  mcqs: [
    {
      id: 'taj-trapezium-mcq-1',
      question: 'In M.C. Mehta v. Union of India (Taj Trapezium Case, 1997), what direction was issued to the 292 coal-using industries located within the TTZ?',
      options: [
        'Pay a nominal annual green tax',
        'Switch over to natural gas (CNG/LPG) or relocate outside the Taj Trapezium Zone',
        'Operate only during night hours',
        'Export all manufactured products abroad',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court directed the 292 industries within the TTZ to either switch to clean fuel (natural gas) or relocate outside the zone to protect the Taj Mahal.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1997) 2 SCC 353',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 2. Chairman, Railway Board v. Chandrima Das (2000)
export const chandrimaDas: Judgment = {
  id: 'chandrima-das-2000',
  caseName: 'Chairman, Railway Board v. Chandrima Das',
  shortName: 'Chandrima Das',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law / Law of Torts',
  year: 2000,
  citation: '(2000) 2 SCC 465',
  bench: '2-Judge Bench',
  judges: ['S. Saghir Ahmad, J.', 'D.P. Wadhwa, J.'],
  subject: 'Tort',
  topics: ['Article 21', 'Foreign Nationals', 'Constitutional Tort', 'Custodial Rape', 'Public Law Damages'],
  tags: ['AIBE', 'Judiciary', 'Tort', 'Article 21', 'Foreign Nationals', 'Public Law Damages', 'Railways'],
  summary:
    'The Supreme Court delivered an epochal human-rights ruling establishing that the fundamental right to life and personal liberty guaranteed under Article 21 is available to foreign nationals and non-citizens within Indian territory. The Court upheld an award of Rs. 10 lakhs as compensation against the Central Government for the gang rape of a Bangladeshi national by railway employees in the Rail Yatri Niwas at Howrah Railway Station.',
  facts: [
    'Smt. Hanuffa Khatun, a national of Bangladesh who entered India, was gang-raped by several employees of the Central Railway in a room at the Rail Yatri Niwas at Howrah Station, Kolkata.',
    'Chandrima Das, a practicing advocate of the Calcutta High Court, filed a PIL under Article 226 seeking public law compensation for the victim and safety guidelines for passengers.',
    'The High Court awarded Rs. 10 lakhs compensation to the victim, payable by the Central Railway.',
    'The Railway Board appealed to the Supreme Court, contending that a foreign national cannot invoke fundamental rights under the Constitution, that a third-party advocate had no locus standi, and that the State was not vicariously liable for the criminal acts of its employees.',
  ],
  issues: [
    'Whether fundamental rights under Article 21 extend to foreign nationals and non-citizens within the territory of India.',
    'Whether the Central Government is vicariously liable to pay public law compensation under writ jurisdiction for rape committed by its employees in a government premises.',
    'Whether a third-party advocate has locus standi to file a writ petition on behalf of a victim of sexual violence.',
  ],
  arguments: {
    appellant: [
      'Article 19 rights are confined to citizens, and foreign nationals who enter India illegally cannot claim fundamental rights under Article 21.',
      'Rape is an individual felony outside the course of railway employment, exempting the State from vicarious liability.',
      'The victim had already returned to Bangladesh and third-party PIL by an advocate was not maintainable.',
    ],
    respondent: [
      'Article 21 uses the universal word "person", not "citizen", guaranteeing basic human dignity to every human being on Indian soil.',
      'Railways had a public duty of safety and care towards persons using its lodging premises.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty (available to all persons)',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'tort-act',
      actName: 'Law of Torts',
      provisionId: 'tort-state-liability',
      title: 'Vicarious Liability of the State for Constitutional Torts',
      subjectSlug: 'tort',
      topicId: 'tort-capacity-state-liability',
    },
  ],
  reasoning: [
    {
      heading: 'Article 21 applies to every "person", including foreign nationals',
      explanation:
        'Saghir Ahmad, J. held that the Universal Declaration of Human Rights (1948) and the Indian Constitution protect the right to life of all human beings. While certain rights like Article 19 are reserved only for "citizens", Article 21 uses the broad word "person". Foreign nationals are entitled to full protection of life, bodily integrity, and personal liberty under Article 21 while on Indian soil.',
    },
    {
      heading: 'Vicarious liability for constitutional tort in public law',
      explanation:
        'The Court held that the Railways breached their public law duty of care. Rape is a violent violation of human dignity. The State cannot escape liability for gross violations of Article 21 committed by its servants in a facility operated by the Railways; Rs. 10 lakhs compensation was just and proper.',
    },
  ],
  decision:
    'High Court judgment affirmed; Railway Board directed to pay Rs. 10 lakhs compensation to the Bangladeshi victim.',
  holding:
    'Article 21 guarantees life and liberty to every person, including foreign nationals; the State is vicariously liable in public law to compensate victims of sexual assault committed on its premises by employees.',
  ratioDecidendi:
    'The constitutional protection of life and personal liberty under Article 21 extends to non-citizens and foreign nationals, and the State is liable in public law to pay compensation for violations of bodily integrity caused by its servants.',
  relatedCases: [
    {
      caseName: 'Rudul Sah v. State of Bihar',
      citation: '(1983) 4 SCC 141',
      relationship: 'Precedent for public law compensation',
      judgmentId: 'rudul-sah-1983',
    },
    {
      caseName: 'Bhim Singh, MLA v. State of J&K',
      citation: '(1985) 4 SCC 677',
      relationship: 'Applied constitutional tort principles',
      judgmentId: 'bhim-singh-1985',
    },
    {
      caseName: 'Kasturi Lal Ralia Ram Jain v. State of U.P.',
      citation: 'AIR 1965 SC 1039',
      relationship: 'Distinguished on public law constitutional remedy',
      judgmentId: 'kasturi-lal-1965',
    },
  ],
  examPoints: [
    'Held Article 21 applies to foreign nationals as it uses the word "person".',
    'Awarded Rs. 10 lakhs compensation against the Central Government for rape of a Bangladeshi national.',
    'Affirmed maintainability of PIL filed by an advocate on behalf of an indigent foreign victim.',
    'Rejection of sovereign immunity defense in constitutional tort.',
  ],
  mcqs: [
    {
      id: 'chandrima-das-mcq-1',
      question: 'In Chairman, Railway Board v. Chandrima Das (2000), the Supreme Court ruled that Article 21:',
      options: [
        'Applies only to Indian citizens possessing Aadhaar or voter cards',
        'Applies to all persons within the territory of India, including foreign nationals',
        'Does not apply to victims of sexual assault',
        'Cannot be enforced against the Railways',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court established that Article 21 protects every "person" within the territory of India, extending full constitutional protection to foreign nationals.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2000) 2 SCC 465',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 3. Bhagwandas Goverdhandas Kedia (1966)
export const kediaContract: Judgment = {
  id: 'kedia-1966',
  caseName: 'Bhagwandas Goverdhandas Kedia v. M/s Girdharilal Parshottamdas & Co.',
  shortName: 'Bhagwandas Kedia',
  court: 'Supreme Court of India',
  jurisdiction: 'Contract Law / Civil Jurisdiction',
  year: 1966,
  citation: 'AIR 1966 SC 543',
  bench: '3-Judge Bench',
  judges: ['K.N. Wanchoo, J.', 'J.C. Shah, J.', 'M. Hidayatullah, J.'],
  subject: 'Contract',
  topics: ['Formation of Contract', 'Communication by Telephone', 'Section 4 Contract Act', 'Place of Cause of Action', 'Instantaneous Communication'],
  tags: ['AIBE', 'Judiciary', 'Contract', 'Section 4 ICA', 'Telephone Contract', 'Jurisdiction', 'Entores'],
  summary:
    'The 3-Judge Bench settled the place of formation of contracts concluded via instantaneous modes of communication (telephone, telex) in Indian law. Following the English rule in Entores Ltd v. Miles Far East Corp, the majority held that Section 4 of the Indian Contract Act does not apply to instantaneous telephone conversations; the contract is completed only when the acceptance is received and heard by the offeror, and the cause of action arises at the place where the acceptance is heard.',
  facts: [
    'The plaintiff firm, based in Ahmedabad, made an oral offer over long-distance telephone to the defendant firm in Khamgaon (Maharashtra) for the purchase of cotton seed cake.',
    'The defendant at Khamgaon accepted the offer over the telephone, which was heard and received by the plaintiff at Ahmedabad.',
    'When the defendant failed to deliver the goods, the plaintiff instituted a suit for breach of contract in the City Civil Court at Ahmedabad.',
    'The defendant filed an objection under Section 20 CPC, contending that the contract was made at Khamgaon where the acceptance was spoken, and hence Ahmedabad courts had no territorial jurisdiction.',
  ],
  issues: [
    'Where is a contract concluded when the offer and acceptance are exchanged over telephone (instantaneous communication).',
    'Whether Section 4 of the Indian Contract Act, 1872 applies to instantaneous telephone communications as it does to postal contracts.',
  ],
  arguments: {
    appellant: [
      'Under Section 4 Contract Act, communication of acceptance is complete against the offeror as soon as it is put in a course of transmission (spoken into the telephone mouthpiece at Khamgaon).',
      'The contract was made where the acceptance was uttered.',
    ],
    respondent: [
      'In instantaneous telephone communication, the parties are in direct auditory presence; the contract is complete only when the words of acceptance are actually heard by the offeror in Ahmedabad.',
    ],
  },
  provisions: [
    {
      actId: 'ica',
      actName: 'Indian Contract Act, 1872',
      provisionId: 'ica-s-4',
      section: 'Section 4',
      title: 'Communication when complete (Proposal and Acceptance)',
      subjectSlug: 'contract',
      topicId: 'ica-s-3-9',
    },
  ],
  reasoning: [
    {
      heading: 'Instantaneous communication versus postal rule',
      explanation:
        'Shah, J. for the majority held that Section 4 of the Contract Act was drafted to deal with communication through non-instantaneous post and messengers where an unavoidable time-gap exists. When parties negotiate by telephone, they are in instantaneous contact, and the postal rule does not apply.',
    },
    {
      heading: 'Adoption of the Entores doctrine',
      explanation:
        'The majority approved the English Court of Appeal decision in Entores: an oral acceptance spoken into a telephone does not make a binding contract until it is heard and understood by the offeror. Since the acceptance was heard at Ahmedabad, the contract was made at Ahmedabad, and the City Civil Court had territorial jurisdiction.',
    },
  ],
  decision:
    'Objection dismissed; held that Ahmedabad City Civil Court had jurisdiction to try the suit.',
  holding:
    'Contracts made by telephone or telex are completed at the place where the acceptance is heard and received by the offeror, giving jurisdiction to courts at that place.',
  ratioDecidendi:
    'In contracts concluded by telephone or instantaneous communication, the contract is complete only when acceptance is received and heard by the proposer, and the cause of action arises at the place where acceptance is heard.',
  relatedCases: [
    {
      caseName: 'Satyabrata Ghose v. Mugneeram Bangur & Co.',
      citation: 'AIR 1954 SC 44',
      relationship: 'Contract Act statutory interpretation',
      judgmentId: 'satyabrata-ghose-1954',
    },
  ],
  examPoints: [
    'Locus classicus on contracts concluded by telephone in Indian law.',
    'Distinction between postal rule (Adams v. Lindsell) and instantaneous communication rule (Entores).',
    'Contract is complete at the place where the offeror hears the acceptance.',
    'Territorial jurisdiction under Section 20 CPC lies at the offeror’s location.',
  ],
  mcqs: [
    {
      id: 'kedia-mcq-1',
      question: 'In Bhagwandas Goverdhandas Kedia v. Girdharilal Parshottamdas (1966), where is a contract made by telephone deemed to be completed?',
      options: [
        'At the place where the acceptance is spoken into the telephone',
        'At the place where the acceptance is heard and received by the offeror',
        'At the registered office of the telephone company',
        'At the place where the goods are to be delivered',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court held that in telephone contracts, the agreement is concluded at the place where the offeror hears and receives the words of acceptance.',
    },
  ],
  source: {
    type: 'document',
    title: 'AIR 1966 SC 543 / (1966) 1 SCR 656',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 4. Subhash Kumar v. State of Bihar (1991)
export const subhashKumar: Judgment = {
  id: 'subhash-kumar-1991',
  caseName: 'Subhash Kumar v. State of Bihar',
  shortName: 'Subhash Kumar',
  court: 'Supreme Court of India',
  jurisdiction: 'Environmental / Constitutional Law',
  year: 1991,
  citation: '(1991) 1 SCC 598',
  bench: '2-Judge Bench',
  judges: ['K.N. Singh, J.', 'N.D. Ojha, J.'],
  subject: 'Environment',
  topics: ['Right to Pollution-Free Water', 'Article 21', 'Public Interest Litigation Abuse', 'Water Pollution'],
  tags: ['AIBE', 'Judiciary', 'Environment', 'Article 21', 'Water Pollution', 'PIL Abuse', 'Bokaro Steel'],
  summary:
    'The Supreme Court formally held that the right to life guaranteed under Article 21 includes the right to enjoy pollution-free water and air for the full enjoyment of life. While articulating this foundational environmental right, the Court dismissed the petition on the ground that the petitioner was using Public Interest Litigation (PIL) as a blackmailing weapon to settle private business vendettas against Bokaro Steel Plant, establishing that courts will dismiss PILs motivated by personal malice.',
  facts: [
    'Subhash Kumar filed a writ petition in the nature of Public Interest Litigation under Article 32 alleging that the West Bokaro Collieries and Tata Iron & Steel Co. (TISCO) were discharging industrial slurry (coal dust mixed with water) into the Bokaro River, polluting drinking water and rendering agricultural lands barren.',
    'He requested directions to prevent discharge and enforce the Water (Prevention and Control of Pollution) Act, 1974.',
    'The respondents proved that the petitioner had been purchasing coal slurry from the factory for years, and when the company refused to sell him further slurry quotas on credit, he initiated criminal complaints and this PIL to coerce the company.',
  ],
  issues: [
    'Whether the right to live under Article 21 of the Constitution includes the right to the enjoyment of pollution-free water and air.',
    'Whether a Public Interest Litigation under Article 32 can be maintained by a person motivated by private business grudge or self-interest.',
  ],
  arguments: {
    appellant: [
      'Discharging coal slurry into the river violates the Water Act, 1974 and endangers the life and health of local residents under Article 21.',
    ],
    respondent: [
      'The petitioner is a disgruntled slurry merchant who initiated PIL to coerce the company into resuming business contracts.',
      'The State Pollution Control Board had approved the modern treatment plant and settled slurry ponds.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty (Pollution-free water and air)',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-32',
      article: 'Article 32',
      title: 'Remedies for enforcement of fundamental rights (Limits of PIL)',
      subjectSlug: 'constitution',
      topicId: 'art-32-226',
    },
  ],
  reasoning: [
    {
      heading: 'Pollution-free water and air as an Article 21 Right',
      explanation:
        'K.N. Singh, J. held: "The right to life is a fundamental right under Article 21 of the Constitution and it includes the right of enjoyment of pollution-free water and air for full enjoyment of life. If anything endangers or impairs that quality of life in derogation of laws, a citizen has the right to have recourse to Article 32."',
    },
    {
      heading: 'Check against abuse of Public Interest Litigation',
      explanation:
        'The Court held that PIL is intended to redress genuine public injury suffered by disadvantaged groups. It cannot be converted into an instrument of personal vendetta, extortion, or business rivalry. Where a litigant invokes Article 32 to satisfy a private grudge, the petition must be rejected with costs.',
    },
  ],
  decision:
    'Petition dismissed with costs of Rs. 5,000 for abuse of court process; principle of right to pollution-free water affirmed.',
  holding:
    'The right to life under Article 21 includes the right to pollution-free water and air; however, PIL cannot be maintained by litigants motivated by private business enmity or personal gain.',
  ratioDecidendi:
    'The right to enjoy pollution-free water and air is an integral part of the right to life under Article 21; Public Interest Litigation must be bona fide and cannot be invoked for personal or oblique motives.',
  relatedCases: [
    {
      caseName: 'Vellore Citizens\' Welfare Forum v. Union of India',
      citation: '(1996) 5 SCC 647',
      relationship: 'Reaffirmed water pollution as Article 21 violation',
      judgmentId: 'vellore-citizens-1996',
    },
    {
      caseName: 'M.C. Mehta v. Kamal Nath',
      citation: '(1997) 1 SCC 388',
      relationship: 'Protected river water quality under Public Trust Doctrine',
      judgmentId: 'kamal-nath-1997',
    },
  ],
  examPoints: [
    'Explicitly held right to pollution-free water and air is part of Article 21.',
    'Seminal warning against the abuse and commercialization of PIL.',
    'Litigants with personal vendetta or business motive have no locus standi in PIL.',
  ],
  mcqs: [
    {
      id: 'subhash-kumar-mcq-1',
      question: 'In Subhash Kumar v. State of Bihar (1991), what fundamental principle regarding Article 21 was enunciated by the Supreme Court?',
      options: [
        'Right to livelihood does not exist',
        'Right to life under Article 21 includes the right to enjoyment of pollution-free water and air',
        'Pollution complaints can only be filed before the National Green Tribunal',
        'Industries have an absolute right to discharge effluents into rivers',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court famously declared that the right to life under Article 21 includes the right to the enjoyment of pollution-free water and air for the full enjoyment of life.',
      },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1991) 1 SCC 598',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 5. Rangappa v. Sri Mohan (2010)
export const rangappa: Judgment = {
  id: 'rangappa-2010',
  caseName: 'Rangappa v. Sri Mohan',
  shortName: 'Rangappa',
  court: 'Supreme Court of India',
  jurisdiction: 'Negotiable Instruments / Criminal Law',
  year: 2010,
  citation: '(2010) 11 SCC 441',
  bench: '3-Judge Bench',
  judges: ['K.G. Balakrishnan, C.J.', 'P. Sathasivam, J.', 'J.M. Panchal, J.'],
  subject: 'Contract',
  topics: ['Section 138 NI Act', 'Section 139 Presumption', 'Legally Enforceable Debt', 'Standard of Proof', 'Reverse Burden'],
  tags: ['AIBE', 'Judiciary', 'NI Act', 'Section 138', 'Section 139', 'Cheque Bounce', 'Presumption'],
  summary:
    'The 3-Judge Bench settled the scope of the statutory presumption under Section 139 of the Negotiable Instruments Act, 1881, overruling the restrictive view in Krishna Janardhan Bhat. The Court held that the presumption mandated by Section 139 includes the existence of a legally enforceable debt or liability, not merely that the cheque was issued. The accused can rebut this presumption on a standard of preponderance of probabilities without stepping into the witness box.',
  facts: [
    'The complainant filed a complaint under Section 138 NI Act alleging that the accused borrowed Rs. 45,000 for house construction and issued a cheque which bounced with the endorsement "payment stopped by drawer".',
    'The trial court acquitted the accused on the basis of Krishna Janardhan Bhat (2008), holding that the Section 139 presumption did not extend to the existence of a legally enforceable debt.',
    'The High Court reversed the acquittal, holding that the statutory presumption under Section 139 had not been rebutted.',
    'The accused appealed to the Supreme Court, prompting a reference to a 3-Judge Bench to reconcile Section 139 interpretation.',
  ],
  issues: [
    'Whether the statutory presumption under Section 139 NI Act includes a presumption that there exists a legally enforceable debt or liability.',
    'What is the standard of proof required by the accused to rebut the statutory presumption under Section 139.',
  ],
  arguments: {
    appellant: [
      'Under criminal jurisprudence, the burden of proving every element of the crime, including existence of debt, rests on the complainant.',
      'Following Krishna Janardhan Bhat, Section 139 only presumes that the cheque was received for discharge of liability, but does not presume the existence of the debt itself.',
    ],
    respondent: [
      'The plain language of Section 139 expressly presumes that the cheque was received "for the discharge, in whole or in part, of any debt or other liability". Limiting it undermines the legislative purpose of ensuring commercial credibility of cheques.',
    ],
  },
  provisions: [
    {
      actId: 'ni-act',
      actName: 'Negotiable Instruments Act, 1881',
      provisionId: 'ni-s-138',
      section: 'Section 138',
      title: 'Dishonour of cheque for insufficiency, etc., of funds in the account',
      subjectSlug: 'contract',
      topicId: 'ica-s-73-75',
    },
    {
      actId: 'ni-act',
      actName: 'Negotiable Instruments Act, 1881',
      provisionId: 'ni-s-139',
      section: 'Section 139',
      title: 'Presumption in favour of holder',
      subjectSlug: 'contract',
      topicId: 'ica-s-73-75',
    },
  ],
  reasoning: [
    {
      heading: 'Presumption includes existence of legally enforceable debt',
      explanation:
        'Sathasivam, J. held that the view taken in Krishna Janardhan Bhat was incorrect. Section 139 is an example of a reverse onus clause designed to improve the credibility of negotiable instruments. The presumption mandated by Section 139 indeed includes the presumption of the existence of a legally enforceable debt or liability.',
    },
    {
      heading: 'Standard of rebuttal is preponderance of probabilities',
      explanation:
        'The reverse burden on the accused is not as high as the prosecution’s burden of proof beyond reasonable doubt. The accused can rebut the presumption by raising a probable defense on a preponderance of probabilities, which can be done through cross-examination of complainant witnesses without entering the witness box.',
    },
  ],
  decision:
    'Krishna Janardhan Bhat overruled on Section 139 scope; conviction of the accused under Section 138 upheld.',
  holding:
    'Section 139 NI Act presumes the existence of a legally enforceable debt; the accused can rebut this presumption on a standard of preponderance of probabilities.',
  ratioDecidendi:
    'The statutory presumption under Section 139 of the Negotiable Instruments Act includes the existence of a legally enforceable debt or liability, and the accused can discharge this reverse burden on a preponderance of probabilities.',
  relatedCases: [
    {
      caseName: 'Dasrath Rupsingh Rathod v. State of Maharashtra',
      citation: '(2014) 9 SCC 129',
      relationship: 'Subsequent benchmark on Section 138 jurisdiction',
      judgmentId: 'dasrath-rathod-2014',
    },
  ],
  examPoints: [
    'Overruled Krishna Janardhan Bhat (2008) regarding Section 139 NI Act.',
    'Held Section 139 presumption includes the existence of a legally enforceable debt.',
    'Accused can rebut presumption on "preponderance of probabilities".',
    'Accused need not step into the witness box to raise a probable defense.',
  ],
  mcqs: [
    {
      id: 'rangappa-mcq-1',
      question: 'In Rangappa v. Sri Mohan (2010), what did the 3-Judge Bench hold regarding the presumption under Section 139 of the Negotiable Instruments Act?',
      options: [
        'It does not presume the existence of any debt',
        'It includes a statutory presumption that the cheque was issued for a legally enforceable debt or liability',
        'The presumption can only be rebutted by producing a handwriting expert',
        'The section violates Article 20(3) of the Constitution',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court clarified that Section 139 includes the presumption that there exists a legally enforceable debt or liability, overruling earlier contradictory rulings.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2010) 11 SCC 441',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 6. Dasrath Rupsingh Rathod (2014)
export const dasrathRathod: Judgment = {
  id: 'dasrath-rathod-2014',
  caseName: 'Dasrath Rupsingh Rathod v. State of Maharashtra',
  shortName: 'Dasrath Rupsingh Rathod',
  court: 'Supreme Court of India',
  jurisdiction: 'Criminal Law / Negotiable Instruments',
  year: 2014,
  citation: '(2014) 9 SCC 129',
  bench: '3-Judge Bench',
  judges: ['T.S. Thakur, J.', 'Vikramajit Sen, J.', 'C. Nagappan, J.'],
  subject: 'Contract',
  topics: ['Territorial Jurisdiction', 'Section 138 NI Act', 'Cheque Bounce Venue', 'Drawee Bank', '2015 Amendment'],
  tags: ['AIBE', 'Judiciary', 'NI Act', 'Section 138', 'Territorial Jurisdiction', 'Drawee Bank', 'Cheque Bounce'],
  summary:
    'The 3-Judge Bench delivered a landmark ruling on the territorial jurisdiction of courts to entertain complaints under Section 138 of the Negotiable Instruments Act. Overruling K. Bhaskaran (1999), the Court held that territorial jurisdiction is restricted solely to the court within whose local jurisdiction the drawee bank (where the drawer maintains the account) is situated. This decision prompted Parliament to enact the Negotiable Instruments (Amendment) Act, 2015, which statutorily established jurisdiction at the payee’s collecting bank branch.',
  facts: [
    'A cheque drawn on the Bank of Baroda branch at Nandurbar (Maharashtra) was dishonoured.',
    'The payee deposited the cheque in his bank at Panvel and filed a complaint under Section 138 NI Act before the Judicial Magistrate First Class at Panvel.',
    'Under the earlier 2-Judge Bench ruling in K. Bhaskaran (1999), a complaint could be filed at any of five places (issuance, presentation, dishonour, notice, or non-payment). Payees routinely selected courts far from the drawer to cause harassment.',
    'The Magistrate at Panvel returned the complaint for lack of territorial jurisdiction, leading to an appeal to the Supreme Court.',
  ],
  issues: [
    'What is the precise territorial jurisdiction of criminal courts for trying offences under Section 138 of the Negotiable Instruments Act.',
    'Whether the five-jurisdiction formula in K. Bhaskaran was correctly decided in criminal law.',
  ],
  arguments: {
    appellant: [
      'Under K. Bhaskaran, the offence of Section 138 is committed only after statutory notice is served and payment is not made; hence, the court where notice was sent or cheque presented has jurisdiction.',
    ],
    respondent: [
      'The actual act of dishonour occurs only at the drawee bank when the cheque is presented and dishonoured for lack of funds. Allowing complaints everywhere invites forum-shopping and harassment.',
    ],
  },
  provisions: [
    {
      actId: 'ni-act',
      actName: 'Negotiable Instruments Act, 1881',
      provisionId: 'ni-s-138',
      section: 'Section 138 (and s. 142)',
      title: 'Dishonour of cheque and cognizance of offences',
      subjectSlug: 'contract',
      topicId: 'ica-s-73-75',
    },
    {
      actId: 'crpc',
      actName: 'Code of Criminal Procedure, 1973',
      provisionId: 'crpc-s-177',
      section: 'Section 177 & 178',
      title: 'Ordinary place of inquiry and trial',
      subjectSlug: 'bnss',
      topicId: 'charge-trial',
    },
  ],
  reasoning: [
    {
      heading: 'The Drawee Bank as the Sole Venue of Offence',
      explanation:
        'Vikramajit Sen, J. held that the commission of the offence under Section 138 is tied to the dishonour of the cheque. The dishonour occurs at the drawee bank where the account is maintained. The statutory notice under clause (b) of the proviso is merely a condition precedent for taking cognizance, not a part of the offence itself.',
    },
    {
      heading: 'Rejection of Forum Shopping under K. Bhaskaran',
      explanation:
        'The Court held that the five-place formula in K. Bhaskaran led to gross abuse where complainants deposited cheques in distant branches purely to harass drawers. Territorial jurisdiction lies strictly where the drawee bank is located.',
    },
  ],
  decision:
    'Complaint returned for presentation before the court having territorial jurisdiction over the drawee bank at Nandurbar; K. Bhaskaran overruled.',
  holding:
    'Territorial jurisdiction for a complaint under Section 138 NI Act lies exclusively at the place where the drawee bank is situated.',
  ratioDecidendi:
    'An offence under Section 138 of the Negotiable Instruments Act takes place at the drawee bank where the cheque is dishonoured; courts at that place alone possess territorial jurisdiction to try the complaint.',
  relatedCases: [
    {
      caseName: 'Rangappa v. Sri Mohan',
      citation: '(2010) 11 SCC 441',
      relationship: 'Companion benchmark on Section 138 presumption',
      judgmentId: 'rangappa-2010',
    },
  ],
  examPoints: [
    'Overruled the five-jurisdiction rule of K. Bhaskaran (1999).',
    'Fixed jurisdiction solely at the drawee bank (where the drawer maintains the account).',
    'Prompted the Negotiable Instruments (Amendment) Act, 2015, which inserted Section 142(2) fixing jurisdiction at the payee’s collecting bank branch for account payee cheques.',
    'Classic illustration of legislative amendment overriding judicial precedent.',
  ],
  mcqs: [
    {
      id: 'dasrath-rathod-mcq-1',
      question: 'Which constitutional / statutory consequence directly followed the Supreme Court judgment in Dasrath Rupsingh Rathod v. State of Maharashtra (2014)?',
      options: [
        'Abolition of Section 138 NI Act',
        'Enactment of the Negotiable Instruments (Amendment) Act, 2015 inserting Section 142(2) to fix jurisdiction at the payee’s collecting bank branch',
        'Transfer of all cheque bounce cases to High Courts',
        'Mandatory imprisonment of 5 years for bounced cheques',
      ],
      correctIndex: 1,
      explanation:
        'To overcome the inconvenience caused by Dasrath Rathod, Parliament passed the 2015 Amendment inserting Section 142(2), placing jurisdiction at the payee’s collecting branch for account payee cheques.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (2014) 9 SCC 129',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 7. K. Veeraswami v. Union of India (1991)
export const veeraswami: Judgment = {
  id: 'veeraswami-1991',
  caseName: 'K. Veeraswami v. Union of India',
  shortName: 'K. Veeraswami',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law / Anti-Corruption Law',
  year: 1991,
  citation: '(1991) 3 SCC 655',
  bench: '5-Judge Constitution Bench',
  judges: [
    'B.C. Ray, J.',
    'L.M. Sharma, J.',
    'M.N. Venkatachaliah, J.',
    'J.S. Verma, J.',
    'K. Jagannatha Shetty, J.',
  ],
  subject: 'Constitution',
  topics: ['Judicial Accountability', 'Prevention of Corruption Act', 'Public Servants', 'Prior CJI Consultation', 'Judicial Independence'],
  tags: ['AIBE', 'Judiciary', 'Constitution', 'Judiciary', 'Anti-Corruption', 'CJI Consultation', 'Veeraswami'],
  summary:
    'The 5-Judge Constitution Bench held that Judges of High Courts and the Supreme Court are "public servants" within the meaning of the Prevention of Corruption Act, 1947/1988 and can be prosecuted for corruption and disproportionate assets. However, to safeguard judicial independence from executive harassment, the Court mandated that no FIR shall be registered against a High Court or Supreme Court Judge without prior mandatory consultation with the Chief Justice of India.',
  facts: [
    'The Central Bureau of Investigation (CBI) registered an FIR under Section 5(1)(e) of the Prevention of Corruption Act, 1947 against Justice K. Veeraswami, the former Chief Justice of the Madras High Court, alleging possession of assets disproportionate to his known sources of income.',
    'Justice Veeraswami challenged the proceedings in the High Court and Supreme Court, contending that superior court judges are constitutional functionaries and not "public servants" subject to police investigation.',
    'He argued that the only constitutional method to discipline or remove a superior court judge is impeachment by Parliament under Article 124(4) and 124(5).',
  ],
  issues: [
    'Whether a High Court Judge or Chief Justice is a "public servant" under Section 2 of the Prevention of Corruption Act, 1947.',
    'Who is the "competent authority" to grant sanction for the prosecution of a superior court judge under Section 6 of the Act.',
    'What constitutional procedural safeguards must be observed before investigating and prosecuting a superior court judge for corruption.',
  ],
  arguments: {
    appellant: [
      'Superior court judges hold constitutional office, not civil posts under the executive; subjecting them to police investigation destroys judicial independence.',
      'Impeachment under Article 124 is the sole constitutional remedy for judicial misbehaviour.',
    ],
    respondent: [
      'No one is above the law in a republic; judges perform public duties and receive government salaries, making them public servants subject to anti-corruption laws.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-124',
      article: 'Article 124 & 217',
      title: 'Appointment, tenure, and removal of Judges of Supreme Court and High Courts',
      subjectSlug: 'constitution',
      topicId: 'judiciary',
    },
    {
      actId: 'pca',
      actName: 'Prevention of Corruption Act, 1947 / 1988',
      provisionId: 'pca-s-2',
      section: 'Section 2 & 19 (s. 5(1)(e))',
      title: 'Definition of public servant and previous sanction for prosecution',
    },
  ],
  reasoning: [
    {
      heading: 'Superior Court Judges are Public Servants',
      explanation:
        'Shetty, J. for the majority held that superior court judges perform public judicial functions and are paid from the Consolidated Fund. The phrase "public servant" includes anyone holding an office in virtue of which he is authorized to perform any public duty; judges are not exempt from the criminal law of corruption.',
    },
    {
      heading: 'Mandatory Prior Consultation with Chief Justice of India',
      explanation:
        'To prevent malicious police investigations or executive intimidation of honest judges, the Court laid down a binding constitutional condition: no criminal case or FIR shall be registered against a superior court judge, and no investigation shall proceed, without prior consultation with the Chief Justice of India. If the CJI advises against prosecution, no case can be filed.',
    },
  ],
  decision:
    'High Court and Supreme Court Judges held amenable to Prevention of Corruption Act; mandatory CJI prior consultation safeguard established.',
  holding:
    'Judges of High Courts and the Supreme Court are public servants liable to corruption prosecution; however, no FIR or investigation is permissible without prior consultation with the Chief Justice of India.',
  ratioDecidendi:
    'Superior court judges are public servants under anti-corruption statutes, but prior consultation with the Chief Justice of India is a mandatory constitutional prerequisite before registering an FIR or initiating criminal investigation against a judge.',
  relatedCases: [
    {
      caseName: 'Supreme Court Advocates-on-Record Association v. Union of India',
      citation: '(1993) 4 SCC 441',
      relationship: 'Reaffirmed primacy of CJI in judicial matters',
      judgmentId: 'second-judges-1993',
    },
    {
      caseName: 'S.P. Gupta v. Union of India',
      citation: '1981 Supp SCC 87',
      relationship: 'Earlier ruling on judicial independence',
      judgmentId: 'sp-gupta-1981',
    },
  ],
  examPoints: [
    'Held Supreme Court and High Court judges are "public servants" under the Prevention of Corruption Act.',
    'Impeachment under Article 124(4) and criminal prosecution for corruption can co-exist.',
    'Prior mandatory consultation with the Chief Justice of India before registering FIR against a judge.',
    'Sanctioning authority is the President acting in consultation with the CJI.',
  ],
  mcqs: [
    {
      id: 'veeraswami-mcq-1',
      question: 'In K. Veeraswami v. Union of India (1991), what mandatory prerequisite was laid down before registering an FIR against a High Court or Supreme Court Judge for corruption?',
      options: [
        'A resolution passed by both Houses of Parliament with 2/3rd majority',
        'Prior mandatory consultation with the Chief Justice of India',
        'Permission from the Prime Minister’s Office',
        'A sanction order signed by the Governor of the State',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench held that no FIR can be registered or investigation initiated against a superior court judge without prior consultation with the Chief Justice of India.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1991) 3 SCC 655',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 8. Kanu Sanyal v. District Magistrate, Darjeeling (1974)
export const kanuSanyal: Judgment = {
  id: 'kanu-sanyal-1974',
  caseName: 'Kanu Sanyal v. District Magistrate, Darjeeling',
  shortName: 'Kanu Sanyal',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law / Criminal Procedure',
  year: 1974,
  citation: '(1974) 4 SCC 141',
  bench: '5-Judge Constitution Bench',
  judges: [
    'A.N. Ray, C.J.',
    'D.G. Palekar, J.',
    'P.N. Bhagwati, J.',
    'V.R. Krishna Iyer, J.',
    'P.K. Goswami, J.',
  ],
  subject: 'Constitution',
  topics: ['Habeas Corpus', 'Article 32', 'Production of the Body', 'Preventive Detention', 'Nature of the Writ'],
  tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 32', 'Habeas Corpus', 'Kanu Sanyal', 'Personal Liberty'],
  summary:
    'The 5-Judge Constitution Bench traced the historical evolution and nature of the writ of habeas corpus in England and India. The Court held that physical production of the body of the person detained is not an indispensable or essential condition for hearing and issuing a writ of habeas corpus under Article 32, and the legality of detention can be determined by the Court upon examining the detention order and return filed by the State.',
  facts: [
    'Kanu Sanyal, a prominent leader of the Naxalite movement, was detained in District Jail, Darjeeling and subsequently transferred to Central Jail, Visakhapatnam under preventive detention orders.',
    'He filed a petition for a writ of habeas corpus under Article 32 directly in the Supreme Court, challenging the legality of his detention.',
    'The petitioner demanded that the Court must first command the physical production of his person before the Supreme Court at New Delhi before examining the legality of his detention, arguing that the words "habeas corpus" literally mean "produce the body".',
  ],
  issues: [
    'Whether the physical production of the body of the detenu before the Court is an indispensable prerequisite for hearing a writ petition of habeas corpus under Article 32.',
    'What is the true scope and essential function of the writ of habeas corpus in modern constitutional jurisprudence.',
  ],
  arguments: {
    appellant: [
      'The Latin term "habeas corpus ad subjiciendum" commands the production of the body of the person detained; the Court has no jurisdiction to adjudicate the writ without physical production of the detenu.',
    ],
    respondent: [
      'Physical transport of dangerous prisoners across thousands of miles is hazardous and costly; the essence of the writ is inquiring into the legality of detention, which can be determined from the records and affidavits.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-32',
      article: 'Article 32',
      title: 'Remedies for enforcement of rights (Writ of Habeas Corpus)',
      subjectSlug: 'constitution',
      topicId: 'art-32-226',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21 & 22',
      title: 'Protection of life and personal liberty and safeguards against detention',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Historical evolution of the Writ of Habeas Corpus',
      explanation:
        'Bhagwati, J. traced the history of the writ from 12th-century England through the Habeas Corpus Act, 1679. Originally, production of the body was an ancillary procedural device to secure physical custody while the Court examined the justification for detention.',
    },
    {
      heading: 'Substance over procedural form in modern constitutional law',
      explanation:
        'The Court held that the core and essence of the writ of habeas corpus is the determination of the legality of the detention. Production of the body is not a condition precedent to the exercise of jurisdiction. The court can examine the validity of detention on affidavits and records; if detention is found illegal, the court orders immediate release without requiring physical attendance in the courtroom.',
    },
  ],
  decision:
    'Contention that physical production of detenu is mandatory rejected; petition directed to be heard on the merits of the detention order.',
  holding:
    'Physical production of the body of the person detained is not an essential requirement for adjudicating a writ of habeas corpus under Article 32.',
  ratioDecidendi:
    'The essence of a writ of habeas corpus is the judicial inquiry into the legality of detention; physical production of the detenu before the court is a procedural aid that can be dispensed with without affecting the court’s jurisdiction to order release.',
  relatedCases: [
    {
      caseName: 'Sunil Batra (II) v. Delhi Administration',
      citation: '(1980) 3 SCC 488',
      relationship: 'Applied dynamic scope of habeas corpus',
      judgmentId: 'sunil-batra-1980',
    },
    {
      caseName: 'Additional District Magistrate, Jabalpur v. Shivakant Shukla',
      citation: '(1976) 2 SCC 521',
      relationship: 'Subsequent emergency controversy on habeas corpus',
      judgmentId: 'adm-jabalpur-1976',
    },
  ],
  examPoints: [
    'Definitive ruling on the nature and procedural history of the Writ of Habeas Corpus in India.',
    'Held that literal production of the body is NOT mandatory for hearing habeas corpus.',
    'The core function is examining the legal authority for detention.',
  ],
  mcqs: [
    {
      id: 'kanu-sanyal-mcq-1',
      question: 'In Kanu Sanyal v. District Magistrate, Darjeeling (1974), the Supreme Court ruled that for hearing a petition of habeas corpus:',
      options: [
        'The detenu must always be physically produced inside the courtroom',
        'Physical production of the body is not an indispensable condition for hearing or granting the writ',
        'Only the President can authorize the writ during emergency',
        'The petition can only be filed by the detenu in person',
      ],
      correctIndex: 1,
      explanation:
        'The Constitution Bench held that physical production of the body is an ancillary procedural device and not an indispensable requirement for deciding a habeas corpus writ.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1974) 4 SCC 141',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 9. Union Carbide Corporation v. Union of India (Bhopal Gas Settlement) (1991)
export const bhopalGas: Judgment = {
  id: 'bhopal-gas-1991',
  caseName: 'Union Carbide Corporation v. Union of India',
  shortName: 'Bhopal Gas Settlement Case',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law / Law of Torts',
  year: 1991,
  citation: '(1991) 4 SCC 584',
  bench: '5-Judge Constitution Bench',
  judges: [
    'M.N. Venkatachaliah, J.',
    'K.N. Singh, J.',
    'N.D. Ojha, J.',
    'A.M. Ahmadi, J.',
    'J.S. Verma, J.',
  ],
  subject: 'Tort',
  topics: ['Bhopal Gas Disaster', 'Article 142 Powers', 'Mass Disaster Tort', 'Absolute Liability', 'Quashing Criminal Proceedings'],
  tags: ['AIBE', 'Judiciary', 'Tort', 'Article 142', 'Bhopal Gas', 'Absolute Liability', 'Settlement'],
  summary:
    'The 5-Judge Constitution Bench reviewed the historic court-assisted settlement of $470 million (Rs. 750 crores) between the Union of India and Union Carbide Corporation (UCC) for the catastrophic 1984 Bhopal Gas Leak disaster. The Court upheld the overall civil compensation settlement under Article 142 plenary powers, holding that the State had a duty to make good any shortfall, but struck down the withdrawal and quashing of criminal prosecutions against UCC and its officials as impermissible in law.',
  facts: [
    'On the night of 2-3 December 1984, lethal Methyl Isocyanate (MIC) gas leaked from the pesticide plant of Union Carbide India Limited (UCIL) in Bhopal, killing over 3,000 citizens immediately, injuring over 500,000 people, and permanently disabling thousands.',
    'Parliament enacted the Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985, giving the Central Government exclusive power to represent all victims.',
    'On 14-15 February 1989, the Supreme Court recorded a full and final settlement of all civil claims and criminal liabilities for $470 million.',
    'Victims\' organizations and activists challenged the settlement under review petitions, contending that the compensation was grossly inadequate, victims were not heard, and criminal prosecutions could not be quashed for money.',
  ],
  issues: [
    'Whether the court-assisted settlement of $470 million was just, fair, and equitable under Article 142.',
    'Whether the Supreme Court had the power under Article 142 to quash and drop criminal prosecutions against Union Carbide executives as part of a civil settlement.',
    'What liability falls upon the Union Government if the settlement fund proves insufficient to satisfy all victim claims.',
  ],
  arguments: {
    appellant: [
      'The settlement was negotiated behind the backs of the victims without notice under Order 23 Rule 3B CPC.',
      'Extinguishing criminal charges against multinational executives responsible for industrial mass homicide is contrary to public policy and illegal.',
    ],
    respondent: [
      'Prolonged litigation across American and Indian courts would take decades, leaving destitute victims without immediate medical and financial relief.',
      'Article 142 confers plenary powers on the Supreme Court to do complete justice, including settling all disputes.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-142',
      article: 'Article 142',
      title: 'Enforcement of decrees and orders of Supreme Court and orders as to doing complete justice',
      subjectSlug: 'constitution',
      topicId: 'judiciary',
    },
    {
      actId: 'bhopal-act',
      actName: 'Bhopal Gas Leak Disaster (Processing of Claims) Act, 1985',
      provisionId: 'bhopal-s-3',
      section: 'Section 3 & 4',
      title: 'Power of Central Government to represent claimants',
    },
  ],
  reasoning: [
    {
      heading: 'Validity of civil compensation and State responsibility for shortfall',
      explanation:
        'Venkatachaliah, J. held that the settlement figure of $470 million was reasonable and justified on the basis of medical categories and actuarial estimates. However, the Court ruled that if the settlement fund proved insufficient to satisfy all legitimate claims, the Union of India, having assumed parens patriae responsibility under the Act, is bound to make good any deficiency.',
    },
    {
      heading: 'Re-opening of criminal prosecutions',
      explanation:
        'The Court held that the drop of criminal proceedings was unlawful. Criminal liability cannot be compounded or quashed as part of a civil financial compromise. Article 142 powers cannot be used to subvert fundamental principles of criminal justice. The Court directed the revival of criminal cases against UCC and its officials.',
    },
  ],
  decision:
    'Civil settlement of $470 million upheld; criminal proceedings against UCC and officials ordered revived; Union Government held liable for any shortfall.',
  holding:
    'Civil tort settlement of mass disaster claims under Article 142 is valid; criminal proceedings cannot be dropped as consideration for financial compensation.',
  ratioDecidendi:
    'The plenary power of the Supreme Court under Article 142 cannot be used to extinguish criminal liability in consideration of a financial compromise in tort; the State as parens patriae must bridge any shortfall in victim compensation.',
  relatedCases: [
    {
      caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak)',
      citation: '(1987) 1 SCC 395',
      relationship: 'Formulated absolute liability doctrine applied to Bhopal',
      judgmentId: 'mc-mehta-oleum-1987',
    },
    {
      caseName: 'Rupa Ashok Hurra v. Ashok Hurra',
      citation: '(2002) 4 SCC 388',
      relationship: 'Examined limits of Article 142 powers',
      judgmentId: 'rupa-ashok-hurra-2002',
    },
  ],
  examPoints: [
    'Upheld $470 million settlement under Article 142.',
    'Quashed the drop of criminal proceedings and ordered criminal trial revived.',
    'Held the Union of India liable to make good any shortfall in compensation.',
    'Benchmark on the scope and limitations of Article 142 plenary powers.',
  ],
  mcqs: [
    {
      id: 'bhopal-gas-mcq-1',
      question: 'In the Bhopal Gas Review judgment (Union Carbide Corporation v. Union of India, 1991), what did the Constitution Bench decide regarding the criminal proceedings against the accused?',
      options: [
        'Confirmed the permanent quashing of all criminal cases',
        'Ordered the revival of criminal proceedings, holding that criminal charges cannot be quashed in exchange for financial settlement',
        'Referred the criminal trial to the International Court of Justice',
        'Pardoned all corporate executives under Article 72',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court struck down the quashing of criminal charges and ordered their revival, holding that criminal liability cannot be bought off or compounded via civil financial settlement.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1991) 4 SCC 584',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// 10. Bipin Chander Jaisinghbhai Shah v. Prabhawati (1957)
export const bipinChander: Judgment = {
  id: 'bipin-chander-1957',
  caseName: 'Bipin Chander Jaisinghbhai Shah v. Prabhawati',
  shortName: 'Bipin Chander',
  court: 'Supreme Court of India',
  jurisdiction: 'Family Law',
  year: 1957,
  citation: 'AIR 1957 SC 176',
  bench: '3-Judge Bench',
  judges: ['B. Jagannadhadas, J.', 'B.P. Sinha, J.', 'Syed Jafer Imam, J.'],
  subject: 'Family',
  topics: ['Desertion', 'Matrimonial Law', 'Factum of Separation', 'Animus Deserendi', 'Burden of Proof'],
  tags: ['AIBE', 'Judiciary', 'Family Law', 'Desertion', 'Animus Deserendi', 'Hindu Marriage', 'Divorce'],
  summary:
    'The Supreme Court laid down the classic textbook authority on the matrimonial offence of "desertion" in Indian family law. The Court held that to establish desertion, two essential conditions must co-exist on the part of the deserting spouse: (1) the factum of separation (physical separation), and (2) the animus deserendi (intention to bring cohabitation permanently to an end). The burden of proving both elements throughout the statutory period rests strictly on the petitioner spouse.',
  facts: [
    'The parties were married in 1942. In 1947, the husband travelled to England on business.',
    'Upon his return, he alleged that he found letters indicating an adulterous intrigue between his wife and a friend.',
    'The wife left the matrimonial house for her parents’ home for a short visit. The husband sent a telegram and letters stating he wanted nothing more to do with her, closed the matrimonial home, and refused her attempts to return.',
    'The husband filed a petition for divorce on the ground of desertion under the Bombay Hindu Divorce Act, 1947 (equivalent to Section 13(1)(ib) Hindu Marriage Act, 1955).',
  ],
  issues: [
    'What are the essential legal ingredients required to establish the matrimonial offence of desertion.',
    'Upon whom does the burden of proof lie in proving desertion and animus deserendi throughout the statutory period.',
    'Whether the wife deserted the husband or whether the husband’s conduct prevented the wife from returning.',
  ],
  arguments: {
    appellant: [
      'The wife left the matrimonial home in May 1947 and lived separately for more than four years, establishing complete desertion.',
    ],
    respondent: [
      'The wife went to her parents’ home with the husband’s consent and repeatedly expressed her desire to return, which the husband rejected; she had no animus deserendi.',
    ],
  },
  provisions: [
    {
      actId: 'hma',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 'hma-s-13',
      section: 'Section 13(1)(ib)',
      title: 'Divorce on ground of desertion for a continuous period of not less than two years',
      subjectSlug: 'family',
      topicId: 'hma-s-13',
    },
  ],
  reasoning: [
    {
      heading: 'The Two Essential Elements of Desertion',
      explanation:
        'Sinha, J. formulated the canonical two-pronged test: for desertion to exist, there must be (1) the factum of separation, and (2) the intention to bring cohabitation permanently to an end (animus deserendi). Similarly, on the part of the deserted spouse, there must be the absence of consent and absence of conduct giving reasonable cause to leave.',
    },
    {
      heading: 'Burden of Proof and Continuance throughout Statutory Period',
      explanation:
        'The burden of proving desertion rests completely on the petitioner spouse throughout the entire statutory period. Desertion is not a single act, but a continuing state of affairs. If the departing spouse genuinely offers to return and the other spouse refuses without just cause, desertion comes to an end, and the refusing spouse becomes guilty of constructive desertion.',
    },
  ],
  decision:
    'Husband’s petition for divorce dismissed; held that the wife had no animus deserendi and the husband was the party preventing cohabitation.',
  holding:
    'Desertion requires both physical separation and the continuous intention to end marital cohabitation (animus deserendi); the burden of proving both lies on the petitioner.',
  ratioDecidendi:
    'To establish desertion as a matrimonial offence, the petitioner must prove both the factum of separation and animus deserendi; if the leaving spouse expresses a sincere desire to return, animus deserendi is rebutted.',
  relatedCases: [
    {
      caseName: 'Dr. N.G. Dastane v. Mrs. S. Dastane',
      citation: '(1975) 2 SCC 326',
      relationship: 'Companion benchmark on matrimonial offences and standard of proof',
      judgmentId: 'dastane-1975',
    },
  ],
  examPoints: [
    'The foundational Indian authority defining "desertion" in family law.',
    'The two essential conditions: factum of separation + animus deserendi.',
    'Burden of proof remains on the petitioner throughout the statutory period.',
    'Concept of "constructive desertion" where one spouse drives the other out.',
  ],
  mcqs: [
    {
      id: 'bipin-chander-mcq-1',
      question: 'Under Bipin Chander Jaisinghbhai Shah v. Prabhawati (1957), what are the two essential ingredients of desertion in Hindu matrimonial law?',
      options: [
        'Cruelty and adultery',
        'Factum of separation and animus deserendi (intention to permanently end cohabitation)',
        'Failure to pay maintenance and physical abuse',
        'Refusal to convert and lack of dowry',
      ],
      correctIndex: 1,
      explanation:
        'The Supreme Court established that desertion requires the co-existence of both the factum of separation (physical separation) and animus deserendi (intention to desert).',
    },
  ],
  source: {
    type: 'document',
    title: 'AIR 1957 SC 176 / 1956 SCR 838',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_10: Judgment[] = [
  tajTrapezium,
  chandrimaDas,
  kediaContract,
  subhashKumar,
  rangappa,
  dasrathRathod,
  veeraswami,
  kanuSanyal,
  bhopalGas,
  bipinChander,
]
