/**
 * Codepackr Law — Subject & Topic registry
 *
 * Hierarchy: Subjects → Topics (themes / articles / doctrines / formats) → Practice
 * Full notes live in src/data/topics/<slug>/<id>.ts (lazy-loaded).
 */

export type SubjectPriority = 'high' | 'medium' | 'low'

export type TopicType = 'theme' | 'article' | 'section' | 'chapter' | 'doctrine' | 'act' | 'format'

export interface CaseCitation {
  name: string
  year?: number
  citation?: string
  holding: string
  relevance?: string
}

export interface LawTopic {
  id: string
  name: string
  /** theme | article | section | chapter | doctrine | act | format */
  type: TopicType
  range?: string
  note?: string
  keywords?: string[]
  highYield?: boolean
  short?: string
  detailed?: string
  cases?: CaseCitation[]
  bareActPointers?: string[]
  examTips?: string[]
}

export interface LawSubjectMeta {
  id: string
  slug: string
  name: string
  shortName: string
  priority: SubjectPriority
  aibeQuestions: number
  bareActs: string[]
  description: string
  keywords: string[]
  icon: string
  topics: LawTopic[]
  mcqSubjectKey?: string
}

export const SUBJECTS: LawSubjectMeta[] = [
  {
    id: 'constitution',
    slug: 'constitution',
    name: 'Constitutional Law',
    shortName: 'Constitution',
    priority: 'high',
    aibeQuestions: 10,
    bareActs: ['Constitution of India'],
    description:
      'Fundamental Rights, DPSPs, writs, basic structure, Centre–State relations, and amendment. Highest-weight AIBE subject.',
    keywords: ['constitution', 'fundamental rights', 'article 21', 'writs', 'dpsp', 'basic structure', 'emergency', 'amendment'],
    icon: 'Landmark',
    mcqSubjectKey: 'constitution',
    topics: [
      { id: 'preamble', name: 'Preamble', type: 'theme', note: 'Nature of Constitution; key words tested in MCQs', keywords: ['preamble', 'sovereign', 'socialist', 'secular'], highYield: true },
      { id: 'fundamental-rights', name: 'Fundamental Rights', type: 'theme', range: 'Arts 12–35', note: 'Part III — core of AIBE constitutional questions', keywords: ['fundamental rights', 'part iii', 'article 12', 'article 13'], highYield: true },
      { id: 'art-14', name: 'Article 14 — Equality', type: 'article', range: 'Art 14', keywords: ['equality', 'article 14', 'reasonable classification'], highYield: true },
      { id: 'art-19', name: 'Article 19 — Freedoms', type: 'article', range: 'Art 19', keywords: ['freedom of speech', 'article 19', 'reasonable restrictions'], highYield: true },
      { id: 'art-21', name: 'Article 21 — Life & Personal Liberty', type: 'article', range: 'Art 21', note: 'Expanded by Maneka Gandhi and later cases', keywords: ['article 21', 'life', 'liberty', 'due process'], highYield: true },
      { id: 'art-32-226', name: 'Writs (Arts 32 & 226)', type: 'theme', range: 'Arts 32, 226', note: 'Habeas corpus, mandamus, prohibition, certiorari, quo warranto', keywords: ['writs', 'article 32', 'article 226', 'habeas corpus'], highYield: true },
      { id: 'dpsp', name: 'Directive Principles (DPSP)', type: 'theme', range: 'Part IV', keywords: ['dpsp', 'directive principles', 'part iv'] },
      { id: 'fundamental-duties', name: 'Fundamental Duties', type: 'theme', range: 'Part IVA, Art 51A', keywords: ['fundamental duties', 'article 51a'] },
      { id: 'centre-state', name: 'Centre–State Relations', type: 'theme', note: 'Legislative, administrative, financial', keywords: ['federalism', 'centre state', 'union list', 'concurrent list'] },
      { id: 'emergency', name: 'Emergency Provisions', type: 'theme', range: 'Arts 352–360', keywords: ['emergency', 'article 352', 'article 356'] },
      { id: 'amendment', name: 'Amendment of the Constitution', type: 'theme', range: 'Art 368', keywords: ['amendment', 'article 368'] },
      { id: 'basic-structure', name: 'Basic Structure Doctrine', type: 'doctrine', note: 'Kesavananda Bharati and later cases', keywords: ['basic structure', 'kesavananda'], highYield: true },
      { id: 'doctrine-pith-substance', name: 'Doctrine of Pith and Substance', type: 'doctrine', note: 'Centre–State legislative competence; incidental encroachment', keywords: ['pith and substance', 'legislative competence'], highYield: true },
      { id: 'doctrine-eclipse', name: 'Doctrine of Eclipse', type: 'doctrine', note: 'Pre-Constitution laws vs Fundamental Rights; Art 13', keywords: ['doctrine of eclipse', 'article 13'], highYield: true },
      { id: 'doctrine-severability', name: 'Doctrine of Severability', type: 'doctrine', note: 'Invalid part of a law can be severed if rest survives', keywords: ['severability', 'article 13'], highYield: true },
      { id: 'doctrine-colourable-legislation', name: 'Doctrine of Colourable Legislation', type: 'doctrine', note: 'What cannot be done directly cannot be done indirectly', keywords: ['colourable legislation'], highYield: true },
      { id: 'format-writ-petition', name: 'Format — Writ Petition (Arts 32 & 226)', type: 'format', note: 'Skeleton structure of a writ petition for exam / drafting awareness', keywords: ['writ petition', 'format', 'drafting', 'article 32', 'article 226'], highYield: true },
      { id: 'judiciary', name: 'Union & State Judiciary', type: 'theme', note: 'SC & HC jurisdiction, appointment, independence', keywords: ['supreme court', 'high court', 'jurisdiction'] },
    ],
  },
  {
    id: 'bnss',
    slug: 'bnss',
    name: 'Criminal Procedure (BNSS / CrPC)',
    shortName: 'BNSS / CrPC',
    priority: 'high',
    aibeQuestions: 10,
    bareActs: ['Bharatiya Nagarik Suraksha Sanhita, 2023', 'Code of Criminal Procedure, 1973 (legacy)'],
    description: 'Arrest, bail, FIR, investigation, trial, and appeals under the new BNSS (and legacy CrPC mapping).',
    keywords: ['bnss', 'crpc', 'bail', 'fir', 'arrest', 'investigation', 'trial'],
    icon: 'Gavel',
    mcqSubjectKey: 'bnss',
    topics: [
      { id: 'fir-investigation', name: 'FIR & Investigation', type: 'theme', highYield: true, keywords: ['fir', 'investigation'] },
      { id: 'arrest', name: 'Arrest & Rights of Arrested', type: 'theme', highYield: true, keywords: ['arrest'] },
      { id: 'bail', name: 'Bail', type: 'theme', highYield: true, keywords: ['bail', 'anticipatory bail'] },
      { id: 'charge-trial', name: 'Charge & Trial', type: 'theme', keywords: ['charge', 'trial'] },
      { id: 'appeals-revision', name: 'Appeals & Revision', type: 'theme', keywords: ['appeal', 'revision'] },
      { id: 'bnss-crpc-map', name: 'BNSS ↔ CrPC Key Changes', type: 'theme', note: 'Use mapper tool for section-wise changes', keywords: ['mapper', 'new criminal laws'] },
      { id: 'doctrine-speedy-trial', name: 'Doctrine of Speedy Trial', type: 'doctrine', note: 'Art 21; Hussainara Khatoon and later cases', keywords: ['speedy trial', 'article 21', 'hussainara'], highYield: true },
      { id: 'format-fir', name: 'Format — FIR', type: 'format', note: 'Essential contents of an FIR for exam awareness', keywords: ['fir format', 'first information report', 'drafting'], highYield: true },
      { id: 'format-bail-application', name: 'Format — Bail / Anticipatory Bail Application', type: 'format', note: 'Structure of regular and anticipatory bail applications', keywords: ['bail application', 'anticipatory bail', 'format', 'drafting'], highYield: true },
    ],
  },
  {
    id: 'cpc',
    slug: 'cpc',
    name: 'Code of Civil Procedure (CPC)',
    shortName: 'CPC',
    priority: 'high',
    aibeQuestions: 10,
    bareActs: ['Code of Civil Procedure, 1908'],
    description: 'Jurisdiction, suits, pleadings, decrees, execution, appeals, and important Orders.',
    keywords: ['cpc', 'civil procedure', 'jurisdiction', 'decree', 'execution', 'order'],
    icon: 'FileText',
    mcqSubjectKey: 'cpc',
    topics: [
      { id: 'jurisdiction', name: 'Jurisdiction', type: 'theme', highYield: true, keywords: ['jurisdiction', 'section 9'] },
      { id: 'res-judicata', name: 'Res Judicata & Res Sub Judice', type: 'doctrine', note: 'S. 11 CPC — finality of litigation; high-yield doctrine', highYield: true, keywords: ['res judicata', 'section 11', 'res sub judice'] },
      { id: 'pleadings', name: 'Pleadings (Orders VI–VIII)', type: 'chapter', range: 'Orders VI–VIII', keywords: ['pleadings', 'plaint', 'written statement'] },
      { id: 'interim', name: 'Interim Orders & Injunctions', type: 'theme', keywords: ['injunction', 'order 39'] },
      { id: 'decree-execution', name: 'Decree & Execution', type: 'theme', highYield: true, keywords: ['decree', 'execution', 'order 21'] },
      { id: 'appeals', name: 'Appeals, Review, Revision', type: 'theme', keywords: ['appeal', 'review', 'revision'] },
      { id: 'format-plaint', name: 'Format — Plaint', type: 'format', note: 'Order VII essentials; skeleton of a plaint', keywords: ['plaint', 'format', 'order 7', 'drafting'], highYield: true },
      { id: 'format-written-statement', name: 'Format — Written Statement', type: 'format', note: 'Order VIII; denial, set-off, counter-claim awareness', keywords: ['written statement', 'format', 'order 8', 'drafting'], highYield: true },
    ],
  },
  {
    id: 'bns',
    slug: 'bns',
    name: 'Bharatiya Nyaya Sanhita (BNS / IPC)',
    shortName: 'BNS / IPC',
    priority: 'high',
    aibeQuestions: 8,
    bareActs: ['Bharatiya Nyaya Sanhita, 2023', 'Indian Penal Code, 1860 (legacy)'],
    description: 'General principles, offences against body and property, and key BNS sections with IPC mapping.',
    keywords: ['bns', 'ipc', 'offences', 'murder', 'theft', 'criminal law'],
    icon: 'Shield',
    mcqSubjectKey: 'bns',
    topics: [
      { id: 'general-explanations', name: 'General Explanations & Definitions', type: 'chapter', note: 'Definitions, common intention, abetment, attempt', keywords: ['definitions', 'common intention', 'abetment'], highYield: true },
      { id: 'general-exceptions', name: 'General Exceptions', type: 'chapter', note: 'Private defence, necessity, insanity, intoxication', keywords: ['general exceptions', 'private defence'], highYield: true },
      { id: 'offences-body', name: 'Offences against the Human Body', type: 'theme', range: 'e.g. homicide, hurt, kidnapping', keywords: ['murder', 'culpable homicide', 'hurt', 'kidnapping'], highYield: true },
      { id: 'culpable-homicide-murder', name: 'Culpable Homicide & Murder', type: 'section', note: 'Classic distinction; high-frequency MCQs', keywords: ['murder', 'culpable homicide', 'section 103 bns', 'section 302 ipc'], highYield: true },
      { id: 'offences-property', name: 'Offences against Property', type: 'theme', keywords: ['theft', 'extortion', 'robbery', 'dacoity', 'cheating'], highYield: true },
      { id: 'sexual-offences', name: 'Sexual Offences', type: 'theme', keywords: ['rape', 'sexual offences'] },
      { id: 'defamation-misc', name: 'Defamation & Miscellaneous', type: 'theme', keywords: ['defamation'] },
      { id: 'bns-ipc-map', name: 'BNS ↔ IPC Key Mapping', type: 'theme', note: 'Use BNS–IPC mapper tool for full table', keywords: ['mapper', 'ipc', 'bns'], highYield: true },
      { id: 'doctrine-mens-rea', name: 'Doctrine of Mens Rea', type: 'doctrine', note: 'Guilty mind; presumption and statutory offences', keywords: ['mens rea', 'guilty mind', 'intention'], highYield: true },
      { id: 'doctrine-common-intention', name: 'Doctrine of Common Intention', type: 'doctrine', note: 'S. 3(5) BNS / S. 34 IPC — joint liability', keywords: ['common intention', 'section 34', 'joint liability'], highYield: true },
    ],
  },
  {
    id: 'bsa',
    slug: 'bsa',
    name: 'Evidence (BSA / Evidence Act)',
    shortName: 'BSA / Evidence',
    priority: 'high',
    aibeQuestions: 8,
    bareActs: ['Bharatiya Sakshya Adhiniyam, 2023', 'Indian Evidence Act, 1872 (legacy)'],
    description: 'Relevancy, admissions, confessions, burden of proof, and documentary/digital evidence.',
    keywords: ['bsa', 'evidence', 'confession', 'admission', 'burden of proof', 'witness'],
    icon: 'Search',
    mcqSubjectKey: 'bsa',
    topics: [
      { id: 'relevancy', name: 'Relevancy of Facts', type: 'theme', highYield: true, keywords: ['relevancy'] },
      { id: 'admissions-confessions', name: 'Admissions & Confessions', type: 'theme', highYield: true, keywords: ['admission', 'confession'] },
      { id: 'burden-proof', name: 'Burden of Proof', type: 'theme', highYield: true, keywords: ['burden of proof'] },
      { id: 'witnesses', name: 'Witnesses & Examination', type: 'theme', keywords: ['witness', 'examination'] },
      { id: 'documentary-digital', name: 'Documentary & Digital Evidence', type: 'theme', keywords: ['documentary evidence', 'electronic evidence'] },
      { id: 'doctrine-estoppel', name: 'Doctrine of Estoppel', type: 'doctrine', note: 'Estoppel under BSA / Evidence Act', keywords: ['estoppel', 'evidence'], highYield: true },
      { id: 'doctrine-res-gestae', name: 'Doctrine of Res Gestae', type: 'doctrine', note: 'Facts forming part of the same transaction — relevancy', keywords: ['res gestae', 'same transaction'], highYield: true },
    ],
  },
  {
    id: 'family',
    slug: 'family',
    name: 'Family Law',
    shortName: 'Family Law',
    priority: 'high',
    aibeQuestions: 8,
    bareActs: ['Hindu Marriage Act, 1955', 'Hindu Succession Act, 1956', 'Hindu Adoption and Maintenance Act, 1956', 'Muslim Personal Law (relevant areas)', 'Special Marriage Act, 1954'],
    description: 'Hindu, Muslim, and Special Marriage Act — marriage, divorce, maintenance, succession, adoption.',
    keywords: ['family law', 'hindu marriage', 'divorce', 'maintenance', 'succession', 'muslim law'],
    icon: 'Users',
    mcqSubjectKey: 'family',
    topics: [
      { id: 'hindu-marriage', name: 'Hindu Marriage Act', type: 'act', highYield: true, keywords: ['hindu marriage', 'divorce'] },
      { id: 'hindu-succession', name: 'Hindu Succession', type: 'act', keywords: ['succession', 'coparcenary'] },
      { id: 'adoption-maintenance', name: 'Adoption & Maintenance', type: 'theme', keywords: ['adoption', 'maintenance'] },
      { id: 'muslim-law', name: 'Muslim Personal Law (essentials)', type: 'theme', keywords: ['muslim law', 'talaq', 'mehr'] },
      { id: 'special-marriage', name: 'Special Marriage Act', type: 'act', keywords: ['special marriage'] },
    ],
  },
  {
    id: 'contract',
    slug: 'contract',
    name: 'Contract, Specific Relief, Property & NI Act',
    shortName: 'Contract & Property',
    priority: 'high',
    aibeQuestions: 8,
    bareActs: ['Indian Contract Act, 1872', 'Specific Relief Act, 1963', 'Transfer of Property Act, 1882', 'Negotiable Instruments Act, 1881'],
    description: 'Formation of contract, void/voidable agreements, specific performance, TPA essentials, and NI Act (cheques).',
    keywords: ['contract', 'specific relief', 'property', 'tpa', 'negotiable instruments', 'cheque'],
    icon: 'FileSignature',
    mcqSubjectKey: 'contract',
    topics: [
      { id: 'offer-acceptance', name: 'Offer, Acceptance & Consideration', type: 'theme', highYield: true, keywords: ['offer', 'acceptance', 'consideration'] },
      { id: 'void-voidable', name: 'Void & Voidable Agreements', type: 'theme', highYield: true, keywords: ['void', 'voidable'] },
      { id: 'breach-remedies', name: 'Breach & Remedies', type: 'theme', keywords: ['breach', 'damages'] },
      { id: 'specific-relief', name: 'Specific Relief Act', type: 'act', keywords: ['specific performance', 'injunction'] },
      { id: 'tpa', name: 'Transfer of Property Act (essentials)', type: 'act', keywords: ['tpa', 'sale', 'mortgage', 'lease'] },
      { id: 'ni-act', name: 'Negotiable Instruments Act', type: 'act', highYield: true, keywords: ['cheque', 'section 138', 'ni act'] },
      { id: 'doctrine-privity', name: 'Doctrine of Privity of Contract', type: 'doctrine', note: 'Only parties to a contract can sue; exceptions', keywords: ['privity', 'stranger to contract'], highYield: true },
    ],
  },
  {
    id: 'tort',
    slug: 'tort',
    name: 'Law of Torts, MV Act & Consumer Protection',
    shortName: 'Torts & Consumer',
    priority: 'medium',
    aibeQuestions: 5,
    bareActs: ['Motor Vehicles Act, 1988', 'Consumer Protection Act, 2019'],
    description: 'General principles of tort, negligence, strict liability, MV claims, and consumer remedies.',
    keywords: ['tort', 'negligence', 'consumer', 'motor vehicles'],
    icon: 'AlertTriangle',
    topics: [
      { id: 'negligence', name: 'Negligence', type: 'theme', highYield: true, keywords: ['negligence'] },
      { id: 'strict-absolute', name: 'Strict & Absolute Liability', type: 'doctrine', note: 'Rylands v. Fletcher; M.C. Mehta absolute liability', keywords: ['strict liability', 'absolute liability', 'rylands', 'mc mehta'], highYield: true },
      { id: 'consumer', name: 'Consumer Protection', type: 'act', keywords: ['consumer', 'deficiency'] },
      { id: 'mv-act', name: 'Motor Vehicles Act (claims)', type: 'act', keywords: ['motor vehicles', 'compensation'] },
    ],
  },
  {
    id: 'adr',
    slug: 'adr',
    name: 'ADR & Arbitration',
    shortName: 'ADR',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Arbitration and Conciliation Act, 1996', 'Mediation Act, 2023'],
    description: 'Arbitration, conciliation, mediation, and Lok Adalat basics.',
    keywords: ['arbitration', 'mediation', 'adr', 'lok adalat'],
    icon: 'Handshake',
    topics: [
      { id: 'arbitration', name: 'Arbitration Act essentials', type: 'act', highYield: true, keywords: ['arbitration', 'arbitral award'] },
      { id: 'mediation', name: 'Mediation', type: 'theme', keywords: ['mediation'] },
      { id: 'lok-adalat', name: 'Lok Adalat', type: 'theme', keywords: ['lok adalat'] },
    ],
  },
  {
    id: 'pil',
    slug: 'pil',
    name: 'Public Interest Litigation',
    shortName: 'PIL',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Constitution of India (Arts 32, 226)'],
    description: 'Locus standi, PIL procedure, and landmark directions.',
    keywords: ['pil', 'public interest', 'locus standi'],
    icon: 'Megaphone',
    topics: [
      { id: 'locus', name: 'Locus Standi & PIL principles', type: 'theme', highYield: true, keywords: ['locus standi'] },
      { id: 'pil-procedure', name: 'PIL procedure & remedies', type: 'theme', keywords: ['pil procedure'] },
      { id: 'format-pil', name: 'Format — Public Interest Litigation', type: 'format', note: 'Skeleton of a PIL petition (Art 32 / 226)', keywords: ['pil format', 'drafting', 'locus standi'], highYield: true },
    ],
  },
  {
    id: 'ethics',
    slug: 'ethics',
    name: 'Professional Ethics & BCI Rules',
    shortName: 'Ethics',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Advocates Act, 1961', 'Bar Council of India Rules'],
    description: 'Duties of advocate, misconduct, and BCI disciplinary rules.',
    keywords: ['professional ethics', 'bci', 'advocates act', 'misconduct'],
    icon: 'Scale',
    topics: [
      { id: 'duties', name: 'Duties of an Advocate', type: 'theme', highYield: true, keywords: ['duties of advocate'] },
      { id: 'misconduct', name: 'Professional Misconduct', type: 'theme', highYield: true, keywords: ['misconduct'] },
      { id: 'bci-rules', name: 'BCI Rules (essentials)', type: 'theme', keywords: ['bci rules'] },
    ],
  },
  {
    id: 'labour',
    slug: 'labour',
    name: 'Labour & Industrial Law',
    shortName: 'Labour',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Industrial Disputes Act, 1947', 'Factories Act, 1948'],
    description: 'Industrial disputes, strikes, lockouts, and basic labour welfare provisions.',
    keywords: ['labour', 'industrial disputes', 'strike', 'factories'],
    icon: 'Factory',
    topics: [
      { id: 'id-act', name: 'Industrial Disputes Act', type: 'act', highYield: true, keywords: ['industrial disputes'] },
      { id: 'factories', name: 'Factories Act (essentials)', type: 'act', keywords: ['factories act'] },
    ],
  },
  {
    id: 'taxation',
    slug: 'taxation',
    name: 'Law related to Taxation',
    shortName: 'Taxation',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Income Tax Act, 1961 (essentials)', 'GST basics (awareness)'],
    description: 'Basic concepts of direct and indirect tax relevant to AIBE-level questions.',
    keywords: ['taxation', 'income tax', 'gst'],
    icon: 'Calculator',
    topics: [
      { id: 'income-tax-basics', name: 'Income Tax basics', type: 'theme', keywords: ['income tax'] },
      { id: 'gst-awareness', name: 'GST awareness', type: 'theme', keywords: ['gst'] },
    ],
  },
  {
    id: 'admin',
    slug: 'admin',
    name: 'Administrative Law',
    shortName: 'Admin Law',
    priority: 'low',
    aibeQuestions: 3,
    bareActs: [],
    description: 'Natural justice, delegated legislation, and judicial review of administrative action.',
    keywords: ['administrative law', 'natural justice', 'delegated legislation'],
    icon: 'Building2',
    topics: [
      { id: 'natural-justice', name: 'Principles of Natural Justice', type: 'theme', highYield: true, keywords: ['natural justice', 'audi alteram'] },
      { id: 'delegated', name: 'Delegated Legislation', type: 'theme', keywords: ['delegated legislation'] },
      { id: 'judicial-review-admin', name: 'Judicial Review of Admin Action', type: 'theme', keywords: ['judicial review'] },
    ],
  },
  {
    id: 'company',
    slug: 'company',
    name: 'Company Law',
    shortName: 'Company',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Companies Act, 2013 (essentials)'],
    description: 'Incorporation, directors, and basic corporate concepts tested at AIBE level.',
    keywords: ['company law', 'companies act', 'director'],
    icon: 'Briefcase',
    topics: [
      { id: 'incorporation', name: 'Incorporation & Types of Companies', type: 'theme', keywords: ['incorporation'] },
      { id: 'directors', name: 'Directors & Meetings (basics)', type: 'theme', keywords: ['directors'] },
    ],
  },
  {
    id: 'environment',
    slug: 'environment',
    name: 'Environmental Law',
    shortName: 'Environment',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Environment (Protection) Act, 1986'],
    description: 'Constitutional basis, EPA, and key environmental principles.',
    keywords: ['environment', 'pollution', 'epa'],
    icon: 'Leaf',
    topics: [
      { id: 'constitutional-env', name: 'Constitutional provisions', type: 'theme', keywords: ['article 48a', 'article 51a'] },
      { id: 'epa', name: 'Environment Protection Act', type: 'act', keywords: ['epa'] },
    ],
  },
  {
    id: 'cyber',
    slug: 'cyber',
    name: 'Cyber Laws',
    shortName: 'Cyber',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Information Technology Act, 2000'],
    description: 'IT Act essentials — offences, intermediaries, and electronic records.',
    keywords: ['cyber', 'it act', 'electronic evidence'],
    icon: 'Monitor',
    topics: [
      { id: 'it-act', name: 'IT Act essentials', type: 'act', keywords: ['it act', 'section 66'] },
    ],
  },
  {
    id: 'land',
    slug: 'land',
    name: 'Land Acquisition',
    shortName: 'Land',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013'],
    description: 'Acquisition process, compensation, and rehabilitation under the 2013 Act.',
    keywords: ['land acquisition', 'compensation', 'rehabilitation'],
    icon: 'Map',
    topics: [
      { id: 'acquisition-process', name: 'Acquisition process & compensation', type: 'theme', keywords: ['land acquisition'] },
    ],
  },
  {
    id: 'ipr',
    slug: 'ipr',
    name: 'Intellectual Property Laws',
    shortName: 'IPR',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Copyright Act, 1957', 'Trade Marks Act, 1999', 'Patents Act, 1970'],
    description: 'Basics of copyright, trademarks, and patents for AIBE-level awareness.',
    keywords: ['ipr', 'copyright', 'trademark', 'patent'],
    icon: 'Copyright',
    topics: [
      { id: 'copyright', name: 'Copyright basics', type: 'theme', keywords: ['copyright'] },
      { id: 'trademark', name: 'Trade Marks basics', type: 'theme', keywords: ['trademark'] },
      { id: 'patent', name: 'Patents basics', type: 'theme', keywords: ['patent'] },
    ],
  },
]

export function getSubjectsByPriority(priority: SubjectPriority): LawSubjectMeta[] {
  return SUBJECTS.filter((s) => s.priority === priority)
}

export function getSubjectBySlug(slug: string): LawSubjectMeta | undefined {
  return SUBJECTS.find((s) => s.slug === slug)
}

export function getSubjectById(id: string): LawSubjectMeta | undefined {
  return SUBJECTS.find((s) => s.id === id)
}

export function searchSubjectsAndTopics(query: string): {
  subjects: LawSubjectMeta[]
  topics: { subject: LawSubjectMeta; topic: LawTopic }[]
} {
  const q = query.trim().toLowerCase()
  if (!q) return { subjects: [], topics: [] }

  const subjects = SUBJECTS.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.shortName.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.includes(q)) ||
      s.bareActs.some((b) => b.toLowerCase().includes(q)),
  )

  const topics: { subject: LawSubjectMeta; topic: LawTopic }[] = []
  for (const s of SUBJECTS) {
    for (const t of s.topics) {
      const hay = [t.name, t.range ?? '', t.note ?? '', ...(t.keywords ?? [])].join(' ').toLowerCase()
      if (hay.includes(q)) topics.push({ subject: s, topic: t })
    }
  }

  return { subjects, topics }
}

export function getTopic(
  subjectSlug: string,
  topicId: string,
): { subject: LawSubjectMeta; topic: LawTopic } | undefined {
  const subject = getSubjectBySlug(subjectSlug)
  if (!subject) return undefined
  const topic = subject.topics.find((t) => t.id === topicId)
  if (!topic) return undefined
  return { subject, topic }
}

export const PRIORITY_ORDER: SubjectPriority[] = ['high', 'medium', 'low']

export const PRIORITY_LABELS: Record<SubjectPriority, string> = {
  high: 'High Priority (AIBE weightage)',
  medium: 'Medium Priority',
  low: 'Lower Weightage',
}
