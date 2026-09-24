/**
 * Codepackr Law — Subject & Topic registry
 *
 * Hierarchy: Subjects → Topics (themes / articles / doctrines) → Practice
 * Petition formats are a SEPARATE subject: petition-formats
 * Full notes: src/data/topics/<slug>/<id>.ts (lazy-loaded)
 */

import { BNS_SECTIONS } from './bns/sections'
import { BNSS_SECTIONS } from './bnss/sections'
import { BSA_SECTIONS } from './bsa/sections'
import { ARTICLES } from './constitution/articles'
import { CPC_SECTIONS } from './cpc/sections'
import { CPC_ORDERS } from './cpc/orders'

export type SubjectPriority = 'high' | 'medium' | 'low'

export type TopicType = 'theme' | 'article' | 'section' | 'chapter' | 'doctrine' | 'act' | 'format'

export interface CaseCitation {
  name: string
  year?: number
  citation?: string
  holding: string
  relevance?: string
  bench?: string
  court?: string
  facts?: string
  issue?: string
  ratioDecidendi?: string
}

export interface LawTopic {
  id: string
  name: string
  type: TopicType
  range?: string
  note?: string
  keywords?: string[]
  highYield?: boolean
  hasNotes?: boolean
  cluster?: string
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

function catalogSectionTopics(
  sections: { id: string; title: string; cluster: string; flags: string[]; ipc?: string; legacy?: string }[],
  code: string,
): LawTopic[] {
  return sections.map((s) => ({
    id: `s-${s.id.toLowerCase()}`,
    name: `Section ${s.id} — ${s.title}`,
    type: 'section' as const,
    range: `s. ${s.id}`,
    cluster: s.cluster,
    note: s.flags.includes('new')
      ? 'New provision'
      : s.ipc
        ? `IPC ${s.ipc}`
        : s.legacy
          ? `old ${s.legacy}`
          : undefined,
    keywords: [
      `section ${s.id}`,
      `${code} ${s.id}`,
      s.title.toLowerCase().slice(0, 48),
    ],
    highYield: s.flags.includes('exam'),
  }))
}

function bnsSectionTopics(): LawTopic[] {
  return catalogSectionTopics(BNS_SECTIONS, 'bns')
}

function bnssSectionTopics(): LawTopic[] {
  return catalogSectionTopics(BNSS_SECTIONS, 'bnss')
}

function bsaSectionTopics(): LawTopic[] {
  return catalogSectionTopics(BSA_SECTIONS, 'bsa')
}

const CONSTITUTION_HIGH_YIELD = new Set([
  '12', '13', '14', '15', '16', '19', '20', '21', '21A', '22', '25', '26', '29', '30', '32', '72', '123', '124', '131', '136', '141', '142', '143', '161', '213', '226', '227', '246', '254', '300A', '311', '324', '329', '352', '356', '360', '368', '370',
])

function constitutionArticleTopics(): LawTopic[] {
  return ARTICLES.map((a) => ({
    id: `art-${a.id.toLowerCase()}`,
    name: a.omitted ? `Article ${a.id} — Omitted` : `Article ${a.id} — ${a.title}`,
    type: 'article' as const,
    range: `Art ${a.id}`,
    cluster: a.cluster,
    note: a.omitted ? 'Omitted' : undefined,
    keywords: [`article ${a.id}`, a.title.toLowerCase().slice(0, 48)],
    highYield: CONSTITUTION_HIGH_YIELD.has(a.id),
  }))
}

function cpcSectionTopics(): LawTopic[] {
  return CPC_SECTIONS.map((s) => ({
    id: `s-${s.id.toLowerCase()}`,
    name: `Section ${s.id} — ${s.title}`,
    type: 'section' as const,
    range: `s. ${s.id}`,
    cluster: s.cluster,
    note: s.flags.includes('exam') ? 'High yield' : undefined,
    keywords: [`section ${s.id}`, `cpc ${s.id}`, s.title.toLowerCase().slice(0, 48)],
    highYield: s.flags.includes('exam'),
  }))
}

function cpcOrderTopics(): LawTopic[] {
  return CPC_ORDERS.map((o) => ({
    id: `order-${o.id.toLowerCase()}`,
    name: `Order ${o.roman} — ${o.title}`,
    type: 'chapter' as const,
    range: `Order ${o.roman}`,
    cluster: o.cluster,
    note: o.flags.includes('exam') ? 'High yield' : undefined,
    keywords: [`order ${o.roman}`, `order ${o.id}`, `cpc order ${o.roman}`, o.title.toLowerCase().slice(0, 48)],
    highYield: o.flags.includes('exam'),
  }))
}

function labourCodeSectionTopics(): LawTopic[] {
  const codes = [
    { prefix: 'cow', name: 'Code on Wages, 2019', count: 69, cluster: 'Code on Wages, 2019', highYield: [6, 9] },
    { prefix: 'irc', name: 'Industrial Relations Code, 2020', count: 104, cluster: 'Industrial Relations Code, 2020', highYield: [25, 62, 70] },
    { prefix: 'css', name: 'Code on Social Security, 2020', count: 164, cluster: 'Code on Social Security, 2020', highYield: [15, 16, 45, 53, 109, 113, 114, 141] },
    { prefix: 'osh', name: 'Occupational Safety, Health and Working Conditions Code, 2020', count: 143, cluster: 'OSHWC Code, 2020', highYield: [6, 16, 23, 43, 60, 83] },
  ]

  return codes.flatMap((code) =>
    Array.from({ length: code.count }, (_, index) => index + 1)
      .filter((number) => !(code.prefix === 'cow' && [6, 9].includes(number)))
      .map((number) => ({
        id: `${code.prefix}-s-${number}`,
        name: `Section ${number} — ${code.name} provision`,
        type: 'section' as const,
        range: `${code.prefix.toUpperCase()} s. ${number}`,
        cluster: code.cluster,
        note: 'Section number included from the official Code range supplied by the Ministry of Labour; verify the enacted heading before formal filing.',
        keywords: [`section ${number}`, code.name.toLowerCase(), code.prefix],
        highYield: code.highYield.includes(number),
      })),
  )
}

function companyActSectionTopics(): LawTopic[] {
  const chapters = [
    [1, 2, 'Preliminary'],
    [3, 22, 'Incorporation of Company and Matters Incidental Thereto'],
    [23, 42, 'Prospectus and Allotment of Securities'],
    [43, 72, 'Share Capital and Debentures'],
    [73, 76, 'Acceptance of Deposits by Companies'],
    [77, 87, 'Registration of Charges'],
    [88, 122, 'Management and Administration'],
    [123, 127, 'Declaration and Payment of Dividend'],
    [128, 139, 'Accounts of Companies'],
    [140, 148, 'Audit and Auditors'],
    [149, 172, 'Appointment and Qualifications of Directors'],
    [173, 195, 'Meetings of Board and Its Powers'],
    [196, 205, 'Appointment and Remuneration of Managerial Personnel'],
    [206, 229, 'Inspection, Inquiry and Investigation'],
    [230, 240, 'Compromises, Arrangements and Amalgamations'],
    [241, 246, 'Prevention of Oppression and Mismanagement'],
    [247, 247, 'Registered Valuers'],
    [248, 252, 'Removal of Names of Companies from Register'],
    [253, 269, 'Revival and Rehabilitation of Sick Companies'],
    [270, 365, 'Winding Up'],
    [366, 378, 'Companies Authorised to Register / Unregistered Companies'],
    [379, 393, 'Companies Incorporated Outside India'],
    [394, 395, 'Government Companies'],
    [396, 404, 'Registration Offices and Fees'],
    [405, 405, 'Companies to Furnish Information or Statistics'],
    [406, 406, 'Nidhis'],
    [407, 434, 'National Company Law Tribunal and Appellate Tribunal'],
    [435, 446, 'Special Courts'],
    [447, 470, 'Miscellaneous'],
  ] as const
  const omitted = new Set([
    '11', '93', '194', '195',
    ...Array.from({ length: 17 }, (_, index) => String(253 + index)),
    ...Array.from({ length: 21 }, (_, index) => String(289 + index)),
    ...Array.from({ length: 18 }, (_, index) => String(304 + index)),
    ...Array.from({ length: 19 }, (_, index) => String(325 + index)),
  ])
  const inserted = new Set(['3A', '10A', '76A', '129A', '417A', '446A', '446B'])
  const sectionIds = new Set<string>()
  const add = (id: string) => sectionIds.add(id)
  for (const [from, to] of chapters) {
    for (let number = from; number <= to; number++) add(String(number))
  }
  for (const id of inserted) add(id)
  for (const letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') add(`378${letter}`)
  for (const letter of 'ABCDEFGHIJKLMNOPQRSTU') add(`378Z${letter}`)

  const chapterFor = (id: string) => {
    const number = Number.parseInt(id, 10)
    return chapters.find(([from, to]) => number >= from && number <= to)?.[2] || 'Companies Act, 2013'
  }

  const alreadyRegistered = new Set(['2', '7', '8', '9', '135', '149', '166', '241', '242', '245', '271'])
  return [...sectionIds].filter((id) => !alreadyRegistered.has(id)).map((id) => ({
    id: `ca-s-${id.toLowerCase()}`,
    name: `Companies Act s. ${id} — ${chapterFor(id)} provision`,
    type: 'section' as const,
    range: `Companies Act s. ${id}`,
    cluster: chapterFor(id),
    note: omitted.has(id) ? 'Omitted according to the supplied section-status table.' : 'Current according to the supplied section-status table; verify the enacted heading before formal filing.',
    keywords: [`companies act section ${id}`, `ca s ${id}`, chapterFor(id).toLowerCase()],
    highYield: ['7', '9', '42', '59', '62', '68', '73', '76A', '77', '88', '92', '123', '135', '149', '166', '173', '177', '184', '188', '188', '196', '210', '230', '232', '241', '242', '245', '271', '408', '410', '421', '424', '435', '447'].includes(id),
  }))
}

function advocatesActSectionTopics(): LawTopic[] {
  const alreadyRegistered = new Set(['7', '24', '29', '30', '35', '36', '37', '38'])
  return Array.from({ length: 60 }, (_, index) => String(index + 1))
    .filter((id) => !alreadyRegistered.has(id))
    .map((id) => ({
      id: `adv-s-${id}`,
      name: `Advocates Act s. ${id} — Statutory provision`,
      type: 'section' as const,
      range: `Advocates Act s. ${id}`,
      cluster: 'Advocates Act',
      note: 'Section-number coverage; verify the enacted heading and any omission or insertion before formal filing.',
      keywords: [`advocates act section ${id}`, `advocates act s ${id}`, 'professional ethics'],
      highYield: ['1', '4', '6', '7', '16', '17', '24', '29', '30', '35', '36', '37', '38', '49'].includes(id),
    }))
}

function adrSectionTopics(): LawTopic[] {
  const existing = new Set(['7', '8', '9', '11', '12', '16', '17', '29a', '31', '34', '37', '48'])
  const sections = Array.from({ length: 81 }, (_, index) => String(index + 1))
  sections.push('29A', '29B', '42A')
  return [...new Set(sections)]
    .filter((id) => !existing.has(id.toLowerCase()))
    .map((id) => ({
      id: `aca-s-${id.toLowerCase()}`,
      name: `Arbitration and Conciliation Act s. ${id} — Statutory provision`,
      type: 'section' as const,
      range: `ACA s. ${id}`,
      cluster: Number.parseInt(id, 10) >= 44 ? 'Foreign Awards and Conciliation' : 'Arbitration and Conciliation Act',
      note: 'Section-number coverage from the supplied ADR syllabus; verify the enacted heading and amendment status before formal filing.',
      keywords: [`aca section ${id}`, 'arbitration', 'conciliation', 'adr'],
      highYield: ['2', '5', '7', '8', '9', '11', '12', '16', '17', '29A', '29B', '31', '34', '36', '37', '42', '42A', '43', '44', '45', '47', '48', '49', '50', '61', '73', '81'].includes(id),
    }))
}

function explicitSectionTopics(prefix: string, actName: string, sections: string[], cluster: string): LawTopic[] {
  return sections.map((section) => ({
    id: `${prefix}-s-${section.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: `${actName} s. ${section} — Statutory provision`,
    type: 'section' as const,
    range: `${actName} s. ${section}`,
    cluster,
    note: 'Section-specific topic; verify the current enacted heading and amendment status before formal filing.',
    keywords: [`${actName.toLowerCase()} section ${section}`, prefix, cluster.toLowerCase()],
    highYield: true,
  }))
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
    description: 'Fundamental Rights, DPSPs, writs, basic structure, Centre–State relations, and amendment — current through the 106th Amendment (2023). Highest-weight AIBE subject.',
    keywords: ['constitution', 'fundamental rights', 'article 21', 'writs', 'dpsp', 'basic structure', 'emergency', 'amendment'],
    icon: 'Landmark',
    mcqSubjectKey: 'constitution',
    topics: [
      { id: 'preamble', name: 'Preamble', type: 'theme', note: 'Nature of Constitution; key words tested in MCQs', keywords: ['preamble', 'sovereign', 'socialist', 'secular'], highYield: true },
      { id: 'fundamental-rights', name: 'Fundamental Rights', type: 'theme', range: 'Arts 12–35', note: 'Part III — core of AIBE constitutional questions', keywords: ['fundamental rights', 'part iii'], highYield: true },
      { id: 'art-32-226', name: 'Writs (Arts 32 & 226)', type: 'theme', range: 'Arts 32, 226', note: 'Habeas corpus, mandamus, prohibition, certiorari, quo warranto', keywords: ['writs', 'article 32', 'article 226'], highYield: true },
      { id: 'equality-reservation', name: 'Equality & Affirmative Action (Arts 15 & 16)', type: 'theme', range: 'Arts 15–16', note: 'Substantive equality, Creamy layer, 50% ceiling, EWS & Sub-classification (Indra Sawhney, Nagaraj, Davinder Singh)', keywords: ['reservation', 'article 15', 'article 16', 'creamy layer', 'ews'], highYield: true },
      { id: 'freedom-religion', name: 'Freedom of Religion & Secularism (Arts 25–28)', type: 'theme', range: 'Arts 25–28', note: 'Conscience, ERP test, denominational autonomy & secularism (Shirur Mutt, Sabarimala)', keywords: ['freedom of religion', 'article 25', 'article 26', 'secularism', 'sabarimala'], highYield: true },
      { id: 'minority-rights', name: 'Cultural & Educational Rights of Minorities (Arts 29 & 30)', type: 'theme', range: 'Arts 29–30', note: 'Conservation of culture, institutional autonomy, State as unit (T.M.A. Pai, P.A. Inamdar, Pramati)', keywords: ['minority rights', 'article 29', 'article 30', 'tma pai'], highYield: true },
      { id: 'dpsp', name: 'Directive Principles (DPSP)', type: 'theme', range: 'Part IV', keywords: ['dpsp'] },
      { id: 'fundamental-duties', name: 'Fundamental Duties', type: 'theme', range: 'Part IVA, Art 51A', keywords: ['fundamental duties'] },
      { id: 'centre-state', name: 'Centre–State Relations', type: 'theme', note: 'Legislative, administrative, financial', keywords: ['federalism', 'centre state'] },
      { id: 'emergency', name: 'Emergency Provisions', type: 'theme', range: 'Arts 352–360', keywords: ['emergency'] },
      { id: 'amendment', name: 'Amendment of the Constitution', type: 'theme', range: 'Art 368', keywords: ['amendment', 'article 368'] },
      { id: 'basic-structure', name: 'Basic Structure Doctrine', type: 'doctrine', note: 'Kesavananda Bharati and later cases', keywords: ['basic structure', 'kesavananda'], highYield: true },
      { id: 'doctrine-pith-substance', name: 'Doctrine of Pith and Substance', type: 'doctrine', note: 'Centre–State legislative competence', keywords: ['pith and substance'], highYield: true },
      { id: 'doctrine-eclipse', name: 'Doctrine of Eclipse', type: 'doctrine', note: 'Pre-Constitution laws vs FR; Art 13', keywords: ['doctrine of eclipse'], highYield: true },
      { id: 'doctrine-severability', name: 'Doctrine of Severability', type: 'doctrine', note: 'Invalid part can be severed if rest survives', keywords: ['severability'], highYield: true },
      { id: 'doctrine-colourable-legislation', name: 'Doctrine of Colourable Legislation', type: 'doctrine', note: 'Cannot do indirectly what cannot be done directly', keywords: ['colourable legislation'], highYield: true },
      { id: 'doctrine-waiver', name: 'Doctrine of Waiver of Fundamental Rights', type: 'doctrine', note: 'Non-waiver of Part III rights (Basheshar Nath, Olga Tellis)', keywords: ['doctrine of waiver', 'basheshar nath', 'fundamental rights'], highYield: true },
      { id: 'doctrine-repugnancy', name: 'Doctrine of Repugnancy (Article 254)', type: 'doctrine', note: 'Concurrent list conflicts, 3 tests of repugnancy & presidential assent (M. Karunanidhi, Kaiser-I-Hind)', keywords: ['repugnancy', 'article 254', 'concurrent list'], highYield: true },
      { id: 'art-300a', name: 'Right to Property (Article 300A)', type: 'theme', range: 'Art 300A', note: 'Constitutional & human right status, eminent domain & anti-land grabbing (K.T. Plantation, Vidya Devi)', keywords: ['right to property', 'article 300a', 'eminent domain'], highYield: true },
      { id: 'executive-ordinance-pardon', name: 'Executive Powers: Ordinances & Pardoning (Arts 72, 123, 161, 213)', type: 'theme', range: 'Arts 72, 123, 161, 213', note: 'Anti-ordinance raj (D.C. Wadhwa, Krishna Kumar Singh) & clemency review (Maru Ram, Epuru Sudhakar)', keywords: ['ordinance', 'pardon', 'article 123', 'article 72', 'article 213', 'article 161'], highYield: true },
      { id: 'civil-services-art-311', name: 'Civil Services & Safeguards (Arts 309–311)', type: 'theme', range: 'Arts 309–311', note: 'Doctrine of pleasure, inquiry procedural rights & second proviso exceptions (Tulsiram Patel, B. Karunakar)', keywords: ['civil services', 'article 311', 'doctrine of pleasure', 'tulsiram patel'], highYield: true },
      { id: 'elections-art-324', name: 'Elections & Election Commission (Arts 324–329)', type: 'theme', range: 'Arts 324–329', note: 'Plenary powers (Gill), multi-member parity (Seshan), appointment benchmark (Anoop Baranwal) & Art 329 bar', keywords: ['elections', 'election commission', 'article 324', 'article 329'], highYield: true },
      { id: 'judiciary', name: 'Union & State Judiciary', type: 'theme', note: 'SC & HC jurisdiction, appointment, independence', keywords: ['supreme court', 'high court'] },
      ...constitutionArticleTopics(),
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
    description: 'Criminal procedure under the Bharatiya Nagarik Suraksha Sanhita, 2023 — 531 sections, 39 chapters. Open the introduction, then click any section (FIR s. 173, arrest s. 35, bail s. 480) for the full study page. In force 1 July 2024.',
    keywords: ['bnss', 'crpc', 'bail', 'fir', 'arrest', 'investigation', 'trial'],
    icon: 'Gavel',
    mcqSubjectKey: 'bnss',
    topics: [
      { id: 'bnss-overview', name: 'BNSS 2023 - Complete Procedural Framework', type: 'act', range: 'ss. 1-531', note: 'Act 46 of 2023; in force from 1 July 2024; subject to s. 531 savings', keywords: ['complete bnss', 'criminal procedure', 'section 531', 'act 46 of 2023'], highYield: true },
      { id: 'fir-investigation', name: 'FIR & Investigation', type: 'theme', highYield: true, keywords: ['fir', 'investigation'] },
      { id: 'arrest', name: 'Arrest & Rights of Arrested', type: 'theme', highYield: true, keywords: ['arrest'] },
      { id: 'bail', name: 'Bail', type: 'theme', highYield: true, keywords: ['bail', 'anticipatory bail'] },
      { id: 'charge-trial', name: 'Charge & Trial', type: 'theme', keywords: ['charge', 'trial'] },
      { id: 'appeals-revision', name: 'Appeals & Revision', type: 'theme', keywords: ['appeal', 'revision'] },
      { id: 'bnss-crpc-map', name: 'BNSS ↔ CrPC Key Changes', type: 'theme', note: 'Use mapper tool for section-wise changes', keywords: ['mapper', 'new criminal laws'] },
      { id: 'doctrine-speedy-trial', name: 'Doctrine of Speedy Trial', type: 'doctrine', note: 'Art 21; Hussainara Khatoon and later cases', keywords: ['speedy trial', 'hussainara'], highYield: true },
      ...bnssSectionTopics(),
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
      { id: 'res-judicata', name: 'Res Judicata & Res Sub Judice', type: 'doctrine', note: 'S. 11 CPC — finality of litigation', highYield: true, keywords: ['res judicata', 'section 11'] },
      { id: 'pleadings', name: 'Pleadings (Orders VI–VIII)', type: 'chapter', range: 'Orders VI–VIII', keywords: ['pleadings', 'plaint', 'written statement'] },
      { id: 'interim', name: 'Interim Orders & Injunctions', type: 'theme', keywords: ['injunction', 'order 39'] },
      { id: 'decree-execution', name: 'Decree & Execution', type: 'theme', highYield: true, keywords: ['decree', 'execution', 'order 21'] },
      { id: 'appeals', name: 'Appeals, Review, Revision', type: 'theme', keywords: ['appeal', 'review', 'revision'] },
      ...cpcSectionTopics(),
      ...cpcOrderTopics(),
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
    description: 'Section-wise Bharatiya Nyaya Sanhita, 2023 — 358 sections, 20 chapters. Open the introduction, then click any section (s. 1, s. 107, s. 103…) for the full study page. In force 1 July 2024 (s. 106(2) excepted).',
    keywords: ['bns', 'ipc', 'offences', 'murder', 'theft', 'criminal law', 'section 103', 'section 64'],
    icon: 'Shield',
    mcqSubjectKey: 'bns',
    topics: [
      { id: 'general-explanations', name: 'General Explanations & Definitions', type: 'chapter', note: 'Definitions, common intention, abetment, attempt', keywords: ['definitions', 'common intention'], highYield: true },
      { id: 'general-exceptions', name: 'General Exceptions', type: 'chapter', note: 'Private defence, necessity, insanity, intoxication', keywords: ['general exceptions', 'private defence'], highYield: true },
      { id: 'offences-body', name: 'Offences against the Human Body', type: 'theme', keywords: ['murder', 'culpable homicide', 'hurt'], highYield: true },
      { id: 'culpable-homicide-murder', name: 'Culpable Homicide & Murder', type: 'theme', note: 'ss. 100–106 — classic distinction; open s. 100, 101, 103, 105', keywords: ['murder', 'culpable homicide'], highYield: true },
      { id: 'offences-property', name: 'Offences against Property', type: 'theme', keywords: ['theft', 'extortion', 'robbery', 'dacoity'], highYield: true },
      { id: 'sexual-offences', name: 'Sexual Offences', type: 'theme', keywords: ['rape', 'sexual offences'] },
      { id: 'defamation-misc', name: 'Defamation & Miscellaneous', type: 'theme', keywords: ['defamation'] },
      { id: 'bns-ipc-map', name: 'BNS ↔ IPC Key Mapping', type: 'theme', note: 'Use BNS–IPC mapper tool', keywords: ['mapper', 'ipc', 'bns'], highYield: true },
      { id: 'doctrine-mens-rea', name: 'Doctrine of Mens Rea', type: 'doctrine', note: 'Guilty mind; presumption and statutory offences', keywords: ['mens rea'], highYield: true },
      { id: 'doctrine-common-intention', name: 'Doctrine of Common Intention', type: 'doctrine', note: 'S. 3(5) BNS / S. 34 IPC — joint liability', keywords: ['common intention', 'section 34'], highYield: true },
      ...bnsSectionTopics(),
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
    description: 'Evidence law under the Bharatiya Sakshya Adhiniyam, 2023 — 170 sections, 12 chapters. Click a section for the full study page. In force 1 July 2024.',
    keywords: ['bsa', 'evidence', 'confession', 'admission', 'burden of proof'],
    icon: 'Search',
    mcqSubjectKey: 'bsa',
    topics: [
      { id: 'relevancy', name: 'Relevancy of Facts', type: 'theme', highYield: true, keywords: ['relevancy'] },
      { id: 'admissions-confessions', name: 'Admissions & Confessions', type: 'theme', highYield: true, keywords: ['admission', 'confession'] },
      { id: 'burden-proof', name: 'Burden of Proof', type: 'theme', keywords: ['burden of proof'], highYield: true },
      { id: 'witnesses', name: 'Witnesses & Examination', type: 'theme', keywords: ['witness', 'examination'] },
      { id: 'documentary-digital', name: 'Documentary & Digital Evidence', type: 'theme', keywords: ['documentary evidence', 'electronic evidence'] },
      { id: 'doctrine-estoppel', name: 'Doctrine of Estoppel', type: 'doctrine', note: 'Estoppel under BSA / Evidence Act', keywords: ['estoppel'], highYield: true },
      { id: 'doctrine-res-gestae', name: 'Doctrine of Res Gestae', type: 'doctrine', note: 's. 4 — facts forming part of the same transaction', keywords: ['res gestae'], highYield: true },
      ...bsaSectionTopics(),
    ],
  },
  {
    id: 'family',
    slug: 'family',
    name: 'Family Law',
    shortName: 'Family Law',
    priority: 'high',
    aibeQuestions: 8,
    bareActs: ['Hindu Marriage Act, 1955', 'Hindu Succession Act, 1956', 'Hindu Adoption and Maintenance Act, 1956', 'Hindu Minority and Guardianship Act, 1956', 'Special Marriage Act, 1954', 'Muslim Personal Law (Shariat) Application Act, 1937', 'Guardians and Wards Act, 1890'],
    description: 'Family Law I & II — sources, marriage, divorce, maintenance, adoption, guardianship, joint family, succession, hiba, wakf.',
    keywords: ['family law', 'hindu marriage', 'divorce', 'maintenance', 'succession', 'guardianship', 'wakf', 'hiba', 'joint family'],
    icon: 'Users',
    mcqSubjectKey: 'family',
    topics: [
      { id: 'sources-schools', name: 'FL-I Unit I — Sources & Schools of Personal Law', type: 'theme', highYield: true, keywords: ['sources', 'mitakshara', 'dayabhaga', 'shariat', 'personal law'] },
      { id: 'hindu-marriage', name: 'FL-I Unit II — Hindu Marriage Act', type: 'act', highYield: true, keywords: ['hindu marriage', 'divorce'] },
      { id: 'special-marriage', name: 'FL-I Unit II — Special Marriage Act', type: 'act', keywords: ['special marriage'] },
      { id: 'muslim-law', name: 'FL-I Unit II–III — Muslim Personal Law (Marriage & Divorce)', type: 'theme', keywords: ['muslim law', 'talaq', 'nikah', 'mahr'] },
      { id: 'hma-s-5', name: 'HMA s. 5 — Conditions for a Hindu marriage', type: 'section', range: 'HMA s. 5', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 5', 'hma 5', 'conditions for marriage'] },
      { id: 'hma-s-9', name: 'HMA s. 9 — Restitution of conjugal rights', type: 'section', range: 'HMA s. 9', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 9', 'hma 9', 'restitution'] },
      { id: 'hma-s-11', name: 'HMA s. 11 — Void marriages', type: 'section', range: 'HMA s. 11', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 11', 'hma 11', 'void marriage'] },
      { id: 'hma-s-12', name: 'HMA s. 12 — Voidable marriages', type: 'section', range: 'HMA s. 12', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 12', 'hma 12', 'voidable marriage'] },
      { id: 'hma-s-13', name: 'HMA s. 13 — Divorce', type: 'section', range: 'HMA s. 13', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 13', 'hma 13', 'divorce grounds'] },
      { id: 'hma-s-13b', name: 'HMA s. 13B — Divorce by mutual consent', type: 'section', range: 'HMA s. 13B', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 13b', 'hma 13b', 'mutual consent'] },
      { id: 'hma-s-24', name: 'HMA s. 24 — Interim maintenance', type: 'section', range: 'HMA s. 24', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 24', 'hma 24', 'interim maintenance'] },
      { id: 'hma-s-25', name: 'HMA s. 25 — Permanent alimony and maintenance', type: 'section', range: 'HMA s. 25', cluster: 'Hindu Marriage Act', highYield: true, keywords: ['section 25', 'hma 25', 'permanent alimony'] },
      { id: 'hsa-s-6', name: 'HSA s. 6 — Devolution of interest in coparcenary property', type: 'section', range: 'HSA s. 6', cluster: 'Hindu Succession Act', highYield: true, keywords: ['section 6', 'hsa 6', 'coparcenary', 'daughter coparcener'] },
      { id: 'hsa-s-8', name: 'HSA s. 8 — General rules of succession in the case of males', type: 'section', range: 'HSA s. 8', cluster: 'Hindu Succession Act', highYield: true, keywords: ['section 8', 'hsa 8', 'class i heirs', 'male succession'] },
      { id: 'hsa-s-14', name: 'HSA s. 14 — Property of a female Hindu to be her absolute property', type: 'section', range: 'HSA s. 14', cluster: 'Hindu Succession Act', highYield: true, keywords: ['section 14', 'hsa 14', 'absolute property', 'stridhan'] },
      { id: 'hsa-s-15', name: 'HSA s. 15 — General rules of succession in the case of female Hindus', type: 'section', range: 'HSA s. 15', cluster: 'Hindu Succession Act', keywords: ['section 15', 'hsa 15', 'female succession'] },
      { id: 'hsa-s-30', name: 'HSA s. 30 — Testamentary disposition', type: 'section', range: 'HSA s. 30', cluster: 'Hindu Succession Act', keywords: ['section 30', 'hsa 30', 'will'] },
      { id: 'adoption-maintenance', name: 'FL-I Unit IV — Adoption & Maintenance (HAMA)', type: 'theme', keywords: ['adoption', 'maintenance', 'hama'] },
      { id: 'hama-s-6', name: 'HAMA s. 6 — Requisites of a valid adoption', type: 'section', range: 'HAMA s. 6', cluster: 'Adoption & Maintenance', highYield: true, keywords: ['section 6', 'hama 6', 'valid adoption'] },
      { id: 'hama-s-12', name: 'HAMA s. 12 — Effects of adoption', type: 'section', range: 'HAMA s. 12', cluster: 'Adoption & Maintenance', keywords: ['section 12', 'hama 12', 'effect of adoption'] },
      { id: 'hama-s-18', name: 'HAMA s. 18 — Maintenance of wife', type: 'section', range: 'HAMA s. 18', cluster: 'Adoption & Maintenance', highYield: true, keywords: ['section 18', 'hama 18', 'maintenance wife'] },
      { id: 'hama-s-19', name: 'HAMA s. 19 — Maintenance of widowed daughter-in-law', type: 'section', range: 'HAMA s. 19', cluster: 'Adoption & Maintenance', keywords: ['section 19', 'hama 19'] },
      { id: 'hama-s-20', name: 'HAMA s. 20 — Maintenance of children and aged parents', type: 'section', range: 'HAMA s. 20', cluster: 'Adoption & Maintenance', keywords: ['section 20', 'hama 20', 'aged parents'] },
      { id: 'guardianship-minority', name: 'FL-I Unit V — Minority & Guardianship', type: 'theme', keywords: ['guardianship', 'minority', 'hmga', 'guardians and wards'] },
      { id: 'hmga-s-6', name: 'HMGA s. 6 — Natural guardians of a Hindu minor', type: 'section', range: 'HMGA s. 6', cluster: 'Minority & Guardianship', highYield: true, keywords: ['section 6', 'hmga 6', 'natural guardian'] },
      { id: 'hmga-s-8', name: 'HMGA s. 8 — Powers of natural guardian', type: 'section', range: 'HMGA s. 8', cluster: 'Minority & Guardianship', highYield: true, keywords: ['section 8', 'hmga 8', 'powers of guardian'] },
      { id: 'hmga-s-13', name: 'HMGA s. 13 — Welfare of minor to be paramount consideration', type: 'section', range: 'HMGA s. 13', cluster: 'Minority & Guardianship', highYield: true, keywords: ['section 13', 'hmga 13', 'welfare of child'] },
      { id: 'sma-s-4', name: 'SMA s. 4 — Conditions relating to solemnization of special marriages', type: 'section', range: 'SMA s. 4', cluster: 'Special Marriage Act', keywords: ['section 4', 'sma 4', 'special marriage'] },
      { id: 'sma-s-27', name: 'SMA s. 27 — Divorce under Special Marriage Act', type: 'section', range: 'SMA s. 27', cluster: 'Special Marriage Act', keywords: ['section 27', 'sma 27', 'divorce'] },
      { id: 'sma-s-28', name: 'SMA s. 28 — Divorce by mutual consent (SMA)', type: 'section', range: 'SMA s. 28', cluster: 'Special Marriage Act', highYield: true, keywords: ['section 28', 'sma 28', 'mutual consent'] },
      { id: 'mpl-shariat-s-2', name: 'Shariat Act s. 2 — Application of personal law to Muslims', type: 'section', range: 'Shariat Act s. 2', cluster: 'Muslim Personal Law', keywords: ['shariat', 'section 2'] },
      { id: 'dmma-s-2', name: 'DMMA s. 2 — Grounds for dissolution of marriage by Muslim woman', type: 'section', range: 'DMMA s. 2', cluster: 'Muslim Personal Law', highYield: true, keywords: ['dmma 2', 'dissolution of muslim marriage'] },
      { id: 'mwa-s-3', name: 'Muslim Women Act s. 3 — Fair and reasonable provision on divorce', type: 'section', range: 'MWA s. 3', cluster: 'Muslim Personal Law', highYield: true, keywords: ['danial latifi', 'section 3', 'muslim women'] },
      { id: 'hindu-joint-family', name: 'FL-II Unit I — Hindu Joint Family', type: 'theme', highYield: true, keywords: ['joint family', 'coparcenary', 'karta', 'mitakshara'] },
      { id: 'hindu-succession', name: 'FL-II Unit II — Intestate Succession (HSA)', type: 'act', highYield: true, keywords: ['succession', 'coparcenary', 'intestate'] },
      { id: 'testamentary-succession', name: 'FL-II Unit III — Testamentary Succession', type: 'theme', keywords: ['will', 'testamentary', 'wasiyat'] },
      { id: 'islamic-gift-hiba', name: 'FL-II Unit IV — Gift under Islamic Law (Hiba)', type: 'theme', keywords: ['hiba', 'gift', 'muslim gift', 'musha'] },
      { id: 'wakf-endowments', name: 'FL-II Unit V — Religious Endowments & Wakf', type: 'theme', keywords: ['wakf', 'waqf', 'mutawalli', 'endowment'] },
    ],
  },
  {
    id: 'contract',
    slug: 'contract',
    name: 'Contract, Specific Relief, Property & NI Act',
    shortName: 'Law of Contracts',
    priority: 'high',
    aibeQuestions: 8,
    bareActs: ['Indian Contract Act, 1872', 'Sale of Goods Act, 1930', 'Indian Partnership Act, 1932'],
    description: 'Complete contract-law coverage from formation through agency, with Sale of Goods and Partnership as allied Contract II components.',
    keywords: ['contract', 'contract i', 'contract ii', 'sale of goods', 'partnership', 'indemnity', 'guarantee', 'bailment', 'pledge', 'agency'],
    icon: 'FileSignature',
    mcqSubjectKey: 'contract',
    topics: [
      { id: 'ica-s-1-2', name: 'ICA ss. 1–2 — Preliminary and Interpretation', type: 'section', range: 's. 1–2', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-3-9', name: 'ICA ss. 3–9 — Communication, Acceptance and Revocation', type: 'section', range: 's. 3–9', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-10-12', name: 'ICA ss. 10–12 — Essentials, Capacity and Sound Mind', type: 'section', range: 's. 10–12', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-13-19a', name: 'ICA ss. 13–19A — Consent and Vitiating Factors', type: 'section', range: 's. 13–19A', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-20-22', name: 'ICA ss. 20–22 — Mistake of Fact and Law', type: 'section', range: 's. 20–22', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-23-25', name: 'ICA ss. 23–25 — Lawful Consideration and Consideration Exceptions', type: 'section', range: 's. 23–25', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-26-30', name: 'ICA ss. 26–30 — Void Agreements', type: 'section', range: 's. 26–30', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-31-36', name: 'ICA ss. 31–36 — Contingent Contracts', type: 'section', range: 's. 31–36', cluster: 'Contract Act', hasNotes: true },
      { id: 'ica-s-37-45', name: 'ICA ss. 37–45 — Performance and Joint Promises', type: 'section', range: 's. 37–45', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-46-50', name: 'ICA ss. 46–50 — Time, Place and Manner of Performance', type: 'section', range: 's. 46–50', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-51-58', name: 'ICA ss. 51–58 — Reciprocal Promises and Illegal Alternatives', type: 'section', range: 's. 51–58', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-59-61', name: 'ICA ss. 59–61 — Appropriation of Payments', type: 'section', range: 's. 59–61', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-62-67', name: 'ICA ss. 62–67 — Discharge, Rescission, Remission and Restitution', type: 'section', range: 's. 62–67', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-68-72', name: 'ICA ss. 68–72 — Quasi-Contracts', type: 'section', range: 's. 68–72', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-73-75', name: 'ICA ss. 73–75 — Damages and Compensation for Breach', type: 'section', range: 's. 73–75', cluster: 'Contract I', hasNotes: true },
      { id: 'ica-s-124-125', name: 'ICA ss. 124–125 — Indemnity', type: 'section', range: 's. 124–125', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-126-131', name: 'ICA ss. 126–131 — Guarantee and Continuing Guarantee', type: 'section', range: 's. 126–131', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-132-138', name: 'ICA ss. 132–138 — Discharge of Surety', type: 'section', range: 's. 132–138', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-139-147', name: 'ICA ss. 139–147 — Surety Rights and Co-Sureties', type: 'section', range: 's. 139–147', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-148-151', name: 'ICA ss. 148–151 — Bailment and Standard of Care', type: 'section', range: 's. 148–151', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-152-157', name: 'ICA ss. 152–157 — Unauthorized Use and Mixing', type: 'section', range: 's. 152–157', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-158-167', name: 'ICA ss. 158–167 — Expenses, Return and Third-Party Claims', type: 'section', range: 's. 158–167', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-168-171', name: 'ICA ss. 168–171 — Finder and Lien', type: 'section', range: 's. 168–171', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-172-179', name: 'ICA ss. 172–179 — Pledge and Pawnee', type: 'section', range: 's. 172–179', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-180-181', name: 'ICA ss. 180–181 — Bailor/Bailee Suits Against Wrongdoers', type: 'section', range: 's. 180–181', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-182-189', name: 'ICA ss. 182–189 — Agency and Authority', type: 'section', range: 's. 182–189', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-190-195', name: 'ICA ss. 190–195 — Sub-Agents and Delegation', type: 'section', range: 's. 190–195', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-196-200', name: 'ICA ss. 196–200 — Ratification', type: 'section', range: 's. 196–200', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-201-210', name: 'ICA ss. 201–210 — Termination of Agency', type: 'section', range: 's. 201–210', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-211-221', name: 'ICA ss. 211–221 — Agent Duties and Lien', type: 'section', range: 's. 211–221', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-222-225', name: 'ICA ss. 222–225 — Principal Duties and Indemnity to Agent', type: 'section', range: 's. 222–225', cluster: 'Contract II', hasNotes: true },
      { id: 'ica-s-226-238', name: 'ICA ss. 226–238 — Agency and Third Persons', type: 'section', range: 's. 226–238', cluster: 'Contract II', hasNotes: true },
      { id: 'soga-s-1-17', name: 'Sale of Goods Act ss. 1–17 — Formation, Conditions and Warranties', type: 'section', range: 'SOGA ss. 1–17', cluster: 'Sale of Goods', hasNotes: true },
      { id: 'soga-s-18-30', name: 'Sale of Goods Act ss. 18–30 — Transfer of Property and Title', type: 'section', range: 'SOGA ss. 18–30', cluster: 'Sale of Goods', hasNotes: true },
      { id: 'soga-s-31-61', name: 'Sale of Goods Act ss. 31–61 — Performance and Unpaid Seller', type: 'section', range: 'SOGA ss. 31–61', cluster: 'Sale of Goods', hasNotes: true },
      { id: 'soga-s-62-66', name: 'Sale of Goods Act ss. 62–66 — Auction, Savings and Repeal', type: 'section', range: 'SOGA ss. 62–66', cluster: 'Sale of Goods', hasNotes: true },
      { id: 'partnership-s-1-17', name: 'Partnership Act ss. 1–17 — Nature and Mutual Rights', type: 'section', range: 's. 1–17', cluster: 'Partnership', hasNotes: true },
      { id: 'partnership-s-18-30', name: 'Partnership Act ss. 18–30 — Agency, Liabilities and Minor', type: 'section', range: 's. 18–30', cluster: 'Partnership', hasNotes: true },
      { id: 'partnership-s-31-38', name: 'Partnership Act ss. 31–38 — Incoming and Outgoing Partners', type: 'section', range: 's. 31–38', cluster: 'Partnership', hasNotes: true },
      { id: 'partnership-s-39-55', name: 'Partnership Act ss. 39–55 — Dissolution and Settlement', type: 'section', range: 's. 39–55', cluster: 'Partnership', hasNotes: true },
      { id: 'partnership-s-56-69', name: 'Partnership Act ss. 56–69 — Registration and Non-Registration', type: 'section', range: 's. 56–69', cluster: 'Partnership', hasNotes: true },
      { id: 'partnership-s-70-74', name: 'Partnership Act ss. 70–74 — Supplemental Provisions and Savings', type: 'section', range: 's. 70–74', cluster: 'Partnership', hasNotes: true },
    ],
  },
  {
    id: 'petition-formats',
    slug: 'petition-formats',
    name: 'Petition Formats & Drafting',
    shortName: 'Formats',
    priority: 'medium',
    aibeQuestions: 0,
    bareActs: ['CPC (Orders VI–VIII)', 'BNSS / CrPC', 'Constitution (Arts 32, 226)'],
    description: 'Exam-oriented skeletons of common petitions and applications — writ petition, plaint, written statement, FIR, bail, PIL.',
    keywords: ['petition format', 'drafting', 'plaint', 'writ petition', 'fir', 'bail application', 'pil', 'written statement'],
    icon: 'FilePen',
    topics: [
      { id: 'format-writ-petition', name: 'Format 1: Writ Petition under Article 226 / 32', type: 'format', note: 'Skeleton + five writs; Art 32 vs 226', keywords: ['writ petition', 'habeas corpus', 'mandamus'], highYield: true },
      { id: 'format-pil', name: 'Format 2: Public Interest Litigation (PIL) Petition', type: 'format', note: 'PIL petition skeleton under Art 32 / 226', keywords: ['pil', 'locus standi'], highYield: true },
      { id: 'format-plaint', name: 'Format 3: Civil Plaint under Order VII CPC', type: 'format', note: 'Order VII CPC essentials; Order VII Rule 11', keywords: ['plaint', 'order 7'], highYield: true },
      { id: 'format-written-statement', name: 'Format 4: Written Statement under Order VIII CPC', type: 'format', note: 'Order VIII CPC; denial, set-off, counter-claim', keywords: ['written statement', 'order 8'], highYield: true },
      { id: 'format-fir', name: 'Format 5: First Information Report (FIR) under Section 173 BNSS', type: 'format', note: 'Essential contents of a First Information Report', keywords: ['fir', 'first information report'], highYield: true },
      { id: 'format-bail-application', name: 'Format 6: Regular & Anticipatory Bail Application under Section 480 / 482 BNSS', type: 'format', note: 'Regular and anticipatory bail application skeleton', keywords: ['bail application', 'anticipatory bail'], highYield: true },
      { id: 'format-legal-notice-138', name: 'Format 7: Statutory Legal Demand Notice under Section 138 NI Act', type: 'format', note: 'Mandatory 15-day notice for dishonour of cheque', keywords: ['legal notice', 'section 138 ni'], highYield: true },
      { id: 'format-execution-petition', name: 'Format 8: Execution Petition under Order XXI Rule 11 CPC', type: 'format', note: 'Execution of money decree and possession decree', keywords: ['execution petition', 'order 21'], highYield: true },
    ],
  },
  {
    id: 'tort',
    slug: 'tort',
    name: 'Law of Torts',
    shortName: 'Torts',
    priority: 'medium',
    aibeQuestions: 5,
    bareActs: [
      'Law of Torts (Common Law & Judicial Precedents)',
      'Consumer Protection Act, 2019',
      'Motor Vehicles Act, 1988 (Chapters XI & XII)',
    ],
    description: 'General principles of tortious liability, defences, vicarious and state liability, negligence, nuisance, trespass, defamation, remedies, consumer protection, and motor accident claims (MACT).',
    keywords: ['tort', 'negligence', 'nuisance', 'defamation', 'strict liability', 'mact', 'consumer protection', 'vicarious liability'],
    icon: 'AlertTriangle',
    mcqSubjectKey: 'tort',
    topics: [
      // Cluster: General Principles
      { id: 'tort-definition', name: 'Nature, Definition & Essentials of Tort', type: 'theme', cluster: 'General Principles', note: 'Distinction from contract, crime & quasi-contract; Winfield vs. Salmond; "Reasonable Man" standard on the Clapham omnibus', keywords: ['definition of tort', 'salmond', 'winfield', 'ubi jus ibi remedium', 'reasonable man', 'clapham omnibus'], highYield: true },
      { id: 'tort-motive-malice', name: 'Motive and Malice in Torts', type: 'doctrine', cluster: 'General Principles', note: 'Motive generally irrelevant; Mayor of Bradford v. Pickles, Allen v. Flood; Malice in fact vs. Malice in law; Ubi jus ibi remedium; Misfeasance, Nonfeasance, Malfeasance', keywords: ['motive', 'malice', 'bradford v pickles', 'allen v flood', 'malfeasance', 'nonfeasance'], highYield: true },
      { id: 'tort-injuria-damnum', name: 'Injuria Sine Damno & Damnum Sine Injuria', type: 'doctrine', cluster: 'General Principles', note: 'Ashby v. White, Gloucester Grammar School, Bhim Singh v. State of J&K, Chasemore v. Richards, Mogul Steamship', keywords: ['injuria sine damno', 'damnum sine injuria', 'ashby v white', 'gloucester grammar', 'bhim singh'], highYield: true },
      { id: 'tort-general-defences', name: 'General Defences in Tort (Volenti Non Fit Injuria, Act of God, Necessity)', type: 'doctrine', cluster: 'General Principles', note: 'Volenti non fit injuria (Smith v. Baker, Haynes v. Harwood rescue), Inevitable accident (Nitroglycerin, Brown v. Kendall), Act of God / Vis Major (Nichols v. Marsland), Private Defence, Statutory Authority', keywords: ['general defences', 'volenti non fit injuria', 'act of god', 'vis major', 'inevitable accident', 'necessity', 'statutory authority', 'smith v baker'], highYield: true },

      // Cluster: Liability Principles & Capacity
      { id: 'tort-capacity-state-liability', name: 'Capacity to Sue & State Liability (Sovereign Immunity & Act of State)', type: 'doctrine', cluster: 'Liability Principles & Capacity', note: 'Minors (en ventre sa mere, Newton v. Edgerley), Married Women (Curtis v. Wilcox), Corporations (Poulton), State Liability (Article 300, P&O, Vidyawati, Kasturi Lal, Basavva), Act of State (Kamachee Boye, Buron v. Denman)', keywords: ['capacity to sue', 'sovereign immunity', 'state liability', 'act of state', 'kasturi lal', 'vidyawati', 'article 300'], highYield: true },
      { id: 'vicarious', name: 'Vicarious Liability (Master-Servant, Course of Employment & Independent Contractor)', type: 'theme', cluster: 'Liability Principles & Capacity', note: 'Qui facit per alium facit per se, Respondeat superior; Carelessness (Century Insurance), Mistake (Bayley), Wilful wrong (Limpus, Lloyd v. Grace Smith, Morris v. Martin); Frolic (Beard); Independent Contractor non-delegable duties (Tarry v. Ashton, Gray v. Pullen); Joint Tortfeasors (Brooke v. Bool, Merryweather)', keywords: ['vicarious liability', 'master and servant', 'course of employment', 'independent contractor', 'joint tortfeasors', 'century insurance', 'limpus'], highYield: true },
      { id: 'strict-liability', name: 'Strict & Absolute Liability (Rylands v. Fletcher & Oleum Gas)', type: 'doctrine', cluster: 'Liability Principles & Capacity', note: 'Rule in Rylands v. Fletcher (non-natural user, escape) & 6 exceptions; Absolute Liability in India (M.C. Mehta Oleum Gas leak enterprise liability, Public Liability Insurance Act 1991)', keywords: ['strict liability', 'absolute liability', 'rylands v fletcher', 'mc mehta', 'oleum gas', 'hazardous enterprise'], highYield: true },
      { id: 'tort-scienter-action', name: 'Scienter Action & Liability for Animals', type: 'doctrine', cluster: 'Liability Principles & Capacity', note: 'Animals ferae naturae (ferocious) vs. mansuetae naturae (domestic); Knowledge of vicious propensity; Hudson v. Roberts (bull and red handkerchief), Jackson v. Smithson (attacking ram)', keywords: ['scienter action', 'animals', 'ferae naturae', 'mansuetae naturae', 'hudson v roberts'], highYield: true },

      // Cluster: Specific Torts to Person & Reputation
      { id: 'trespass-person', name: 'Trespass to Person — Assault and Battery', type: 'theme', cluster: 'Specific Torts to Person & Reputation', note: 'Assault (reasonable apprehension of force, R. v. St. George, Stephens v. Myers), Battery (intentional application of force, Cole v. Turner); Defences: self defence, expulsion of trespasser, retaking property', keywords: ['trespass to person', 'assault', 'battery', 'r v st george', 'stephens v myers', 'self defence'], highYield: true },
      { id: 'tort-false-imprisonment', name: 'False Imprisonment & Complete Restraint', type: 'theme', cluster: 'Specific Torts to Person & Reputation', note: 'Total deprivation of liberty without lawful authority; Knowledge not essential (Meering); Restraint must be complete (Bird v. Jones, Herd v. Weardale Steel, Robinson v. Balmain Ferry)', keywords: ['false imprisonment', 'bird v jones', 'meering', 'total restraint', 'herd v weardale'], highYield: true },
      { id: 'malicious-prosecution', name: 'Malicious Prosecution & Abuse of Process', type: 'theme', cluster: 'Specific Torts to Person & Reputation', note: 'Prosecution by defendant, termination in plaintiff favour (acquittal), lack of reasonable and probable cause, malice in fact, damage (Dr. Abarth v. NE Railway, Wyatt v. White, Balbhaddar Singh)', keywords: ['malicious prosecution', 'reasonable and probable cause', 'malice in fact', 'dr abarth', 'abuse of process'], highYield: true },
      { id: 'tort-maintenance-champerty', name: 'Maintenance and Champerty', type: 'doctrine', cluster: 'Specific Torts to Person & Reputation', note: 'Common law intermeddling in litigation vs. champerty (sharing proceeds); Bradlaugh v. Newdegate; Position in India (not per se illegal; test of public policy and bona fides)', keywords: ['maintenance', 'champerty', 'bradlaugh v newdegate', 'litigation funding', 'public policy'], highYield: false },
      { id: 'tort-nervous-shock', name: 'Nervous Shock & Psychiatric Injury', type: 'doctrine', cluster: 'Specific Torts to Person & Reputation', note: 'Recognized psychiatric damage vs. mere grief; Duty and zone of potential danger; Bourhill v. Young (fisherwoman), Wilkinson v. Downton, King v. Phillips, Hambrook v. Stokes, Owens v. Liverpool Corp, Chadwick', keywords: ['nervous shock', 'psychiatric injury', 'bourhill v young', 'wilkinson v downton', 'hambrook v stokes'], highYield: true },
      { id: 'defamation-tort', name: 'Defamation (Libel, Slander, Innuendo & Defences)', type: 'theme', cluster: 'Specific Torts to Person & Reputation', note: 'Libel vs. Slander; Slander not actionable per se & 4 exceptions; Innuendo (Cassidy v. Daily Mirror, Tolley v. Fry); Defences: Justification by truth, Fair comment, Absolute & Qualified Privilege', keywords: ['defamation', 'libel', 'slander', 'innuendo', 'justification', 'fair comment', 'qualified privilege', 'cassidy v daily mirror'], highYield: true },

      // Cluster: Specific Torts to Property & Negligence
      { id: 'negligence', name: 'Negligence, Standard of Care & Medical Negligence', type: 'theme', cluster: 'Specific Torts to Property & Negligence', note: 'Duty of care (Donoghue v. Stevenson neighbour principle), Breach (Bolton v. Stone, Roe v. Minister of Health), Medical negligence (Bolam test, Jacob Mathew), Res ipsa loquitur (Byrne v. Boadle, Modern Cultivators)', keywords: ['negligence', 'duty of care', 'bolam test', 'jacob mathew', 'res ipsa loquitur', 'donoghue v stevenson'], highYield: true },
      { id: 'tort-contributory-negligence', name: 'Contributory Negligence & Alternate Danger', type: 'doctrine', cluster: 'Specific Torts to Property & Negligence', note: 'In pari delicto potior est conditio defendentis; Rule of last opportunity (Davies v. Mann donkey case, Butterfield v. Forrester, British Columbia Electric v. Loach); Alternate danger / dilemma principle (Jones v. Boyce coach accident)', keywords: ['contributory negligence', 'last opportunity rule', 'davies v mann', 'alternate danger', 'jones v boyce'], highYield: true },
      { id: 'tort-occupiers-liability', name: 'Occupier\'s Liability (Invitee, Licensee & Trespasser)', type: 'theme', cluster: 'Specific Torts to Property & Negligence', note: 'Duty of occupier depending on visitor status: Invitee common interest (Indermaur v. Dames, Stowell\'s case); Licensee concealed trap (Fairman); Trespasser no duty of care except willful harm (Bates case)', keywords: ['occupiers liability', 'invitee', 'licensee', 'trespasser', 'indermaur v dames', 'concealed trap'], highYield: true },
      { id: 'nuisance', name: 'Nuisance (Public vs. Private Nuisance, Highway Nuisance & 45-Degree Rule)', type: 'theme', cluster: 'Specific Torts to Property & Negligence', note: 'Sic utere tuo ut alienum non laedas; Public nuisance (crime & civil s. 91 CPC, s. 133 BNSS) vs. Private nuisance; Abnormal sensitiveness (Robinson v. Kilvert); Malice (Christie v. Davey, Hollywood Silver Fox); Projections over highway (Tarry v. Ashton); 45-degree rule for light and air (Colls v. Home & Colonial Stores)', keywords: ['nuisance', 'public nuisance', 'private nuisance', 'robinson v kilvert', 'christie v davey', '45 degree rule', 'tarry v ashton'], highYield: true },
      { id: 'trespass-property', name: 'Trespass to Land, Trespass Ab Initio & Jus Tertii', type: 'theme', cluster: 'Specific Torts to Property & Negligence', note: 'Trespass quare clausum fregit (Entick v. Carrington); Doctrine of Trespass ab initio requiring positive misfeasance, not omission (Six Carpenters\' Case, Chic Fashions v. Jones); Remedies (re-entry, mesne profits); Plea of Jus Tertii (Asher v. Whitlock)', keywords: ['trespass to land', 'trespass ab initio', 'six carpenters', 'jus tertii', 'entick v carrington'], highYield: true },
      { id: 'tort-conversion-detinue', name: 'Conversion, Detinue & Rights of Finders', type: 'theme', cluster: 'Specific Torts to Property & Negligence', note: 'Unjustifiable denial of plaintiff title to goods (Fouldes v. Willoughby, Richardson v. Atkinson); Rights of finders: "Finder is keeping is a dangerous half-truth" (Armory v. Delamirie chimney sweep jewel, Bridges v. Hawkesworth shop floor, South Staffordshire Water Co. v. Sharman pool rings)', keywords: ['conversion', 'detinue', 'finder of goods', 'armory v delamirie', 'bridges v hawkesworth'], highYield: true },

      // Cluster: Economic Torts & Business Interference
      { id: 'tort-deceit-misstatement', name: 'Deceit & Negligent Misstatement', type: 'doctrine', cluster: 'Economic Torts & Business Interference', note: 'Tort of Deceit (Pasley v. Freeman, Edgington v. Fitzmaurice, Derry v. Peek fraud test); Liability for negligent misstatement & exceptions to Derry v. Peek (Nocton v. Lord Ashburton, Candler v. Crane, Hedley Byrne & Co. v. Heller & Partners)', keywords: ['deceit', 'fraudulent misrepresentation', 'derry v peek', 'hedley byrne', 'negligent misstatement'], highYield: true },
      { id: 'tort-interference-business', name: 'Interference with Business & Trade Torts', type: 'theme', cluster: 'Economic Torts & Business Interference', note: 'Passing Off (White Hudson v. Asian Organisation, Singer Loog), Slander of Title (Malachy v. Soper), Slander of Goods / Trade Libel (Ratcliffe v. Evans), Breach of Statutory Duty (Harley v. Mayoh, Ginty\'s case), Mayhem (permanent maiming), Foreign Torts (Phillips v. Eyre, Mostyn v. Fabrigas)', keywords: ['passing off', 'slander of title', 'slander of goods', 'breach of statutory duty', 'mayhem', 'foreign torts'], highYield: false },
      { id: 'tort-conspiracy', name: 'Tort of Civil Conspiracy', type: 'doctrine', cluster: 'Economic Torts & Business Interference', note: 'Unlawful combination of two or more persons with predominant purpose to injure plaintiff resulting in overt damage; Crofter v. Veitch, Mogul Steamship Co. v. McGregor, Quinn v. Leathem, Sorrell v. Smith, Allen v. Flood', keywords: ['civil conspiracy', 'crofter v veitch', 'mogul steamship', 'quinn v leathem', 'sorrell v smith'], highYield: true },

      // Cluster: Remedies, Extinguishment & Modern Statutes
      { id: 'tort-remoteness-damage', name: 'Remoteness of Damage & Novus Actus Interveniens', type: 'doctrine', cluster: 'Remedies, Extinguishment & Modern Statutes', note: 'In jure non remota causa sed proxima spectatur; Novus actus interveniens (Scott v. Shepherd squib case, Haynes v. Harwood); Directness test (Re Polemis) overruled by Reasonable Foresight test (The Wagon Mound No. 1, Hughes v. Lord Advocate)', keywords: ['remoteness of damage', 'novus actus interveniens', 'scott v shepherd', 're polemis', 'wagon mound'], highYield: true },
      { id: 'tort-remedies-damages', name: 'Remedies in Tort (Judicial & Extra-Judicial)', type: 'theme', cluster: 'Remedies, Extinguishment & Modern Statutes', note: 'Judicial remedies: Damages (Nominal, Substantial, Exemplary/Aggravated — Huckle v. Money nameless search warrant, Contemptuous — de minimis non curat lex), Injunctions, Restitution; Extra-judicial remedies: Distress Damage Feasant (detention of trespassing animal/chattel without hot pursuit), Abatement of nuisance, Expulsion, Recaption, Re-entry', keywords: ['remedies in tort', 'damages', 'exemplary damages', 'distress damage feasant', 'abatement of nuisance'], highYield: true },
      { id: 'tort-death-in-relation', name: 'Death in Relation to Tort (Actio Personalis)', type: 'doctrine', cluster: 'Remedies, Extinguishment & Modern Statutes', note: 'Maxim "Actio personalis moritur cum persona"; Common law position & statutory abolition (Rose v. Ford, Baker v. Bolton); Indian statutory modifications: Legal Representatives\' Suits Act 1855, Fatal Accidents Act 1855, Limitation Act 1963 1-year rule', keywords: ['actio personalis moritur cum persona', 'death in relation to tort', 'rose v ford', 'baker v bolton', 'fatal accidents act'], highYield: true },
      { id: 'tort-discharge', name: 'Discharge of Torts', type: 'theme', cluster: 'Remedies, Extinguishment & Modern Statutes', note: 'Extinguishment of right of action: 1. Death of parties, 2. Waiver of tort (election of remedies), 3. Accord and satisfaction, 4. Release, 5. Acquiescence, 6. Law of Limitation (1-year bar for libel, false imprisonment, malicious prosecution)', keywords: ['discharge of torts', 'waiver of tort', 'accord and satisfaction', 'release', 'limitation'], highYield: true },
      { id: 'consumer', name: 'Consumer Protection Act, 2019 (Deficiency, Product Liability & Redressal)', type: 'theme', cluster: 'Remedies, Extinguishment & Modern Statutes', note: 'Consumer rights, Definition of Consumer, Deficiency in service, Product liability, CCPA, District/State/National Consumer Redressal Commissions', keywords: ['consumer protection', 'cpa 2019', 'deficiency in service', 'product liability', 'consumer forum'], highYield: true },
      { id: 'mact-claims', name: 'Motor Accident Claims (MACT) & Compensation Principles', type: 'theme', cluster: 'Remedies, Extinguishment & Modern Statutes', note: 'Motor Vehicles Act 1988 Chapters XI & XII, No-fault liability Section 164, MACT Tribunal Section 165, Assessment of compensation using Multiplier method (Sarla Verma v. DTC, National Insurance Co. v. Pranay Sethi)', keywords: ['mact', 'motor accident claims', 'motor vehicles act', 'sarla verma', 'pranay sethi', 'multiplier', 'no fault liability'], highYield: true },
    ],
  },
  {
    id: 'adr',
    slug: 'adr',
    name: 'ADR & Arbitration',
    shortName: 'ADR',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Arbitration and Conciliation Act, 1996', 'Mediation Act, 2023', 'Legal Services Authorities Act, 1987'],
    description: 'Arbitration, conciliation, mediation, and lok adalat — process and key statutory provisions.',
    keywords: ['arbitration', 'mediation', 'conciliation', 'lok adalat', 'adr'],
    icon: 'Handshake',
    mcqSubjectKey: 'adr',
    topics: [
      { id: 'arbitration', name: 'Arbitration — Fundamentals & Scheme', type: 'theme', highYield: true, keywords: ['arbitration', 'arbitral award'] },
      { id: 'aca-s-7', name: 'ACA s. 7 — Arbitration agreement defined', type: 'section', range: 'ACA s. 7', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['arbitration agreement', 'section 7 aca'] },
      { id: 'aca-s-8', name: 'ACA s. 8 — Power to refer parties to arbitration where agreement exists', type: 'section', range: 'ACA s. 8', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['section 8 aca', 'reference to arbitration'] },
      { id: 'aca-s-9', name: 'ACA s. 9 — Interim measures by Court', type: 'section', range: 'ACA s. 9', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['interim measures court', 'section 9 aca'] },
      { id: 'aca-s-11', name: 'ACA s. 11 — Appointment of arbitrators', type: 'section', range: 'ACA s. 11', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['appointment of arbitrators', 'section 11 aca'] },
      { id: 'aca-s-12', name: 'ACA s. 12 — Grounds for challenge (Fifth & Seventh Schedules)', type: 'section', range: 'ACA s. 12', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['arbitrator bias', 'section 12 aca', 'fifth schedule'] },
      { id: 'aca-s-16', name: 'ACA s. 16 — Competence of arbitral tribunal (Kompetenz-Kompetenz)', type: 'section', range: 'ACA s. 16', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['kompetenz kompetenz', 'section 16 aca'] },
      { id: 'aca-s-17', name: 'ACA s. 17 — Interim measures ordered by arbitral tribunal', type: 'section', range: 'ACA s. 17', cluster: 'Arbitration & Conciliation Act', keywords: ['interim measures tribunal', 'section 17 aca'] },
      { id: 'aca-s-29a', name: 'ACA s. 29A — Time limit for arbitral award', type: 'section', range: 'ACA s. 29A', cluster: 'Arbitration & Conciliation Act', keywords: ['time limit award', 'section 29a aca'] },
      { id: 'aca-s-31', name: 'ACA s. 31 — Form and contents of arbitral award', type: 'section', range: 'ACA s. 31', cluster: 'Arbitration & Conciliation Act', keywords: ['arbitral award', 'section 31 aca'] },
      { id: 'aca-s-34', name: 'ACA s. 34 — Application for setting aside arbitral award (Patent Illegality & Public Policy)', type: 'section', range: 'ACA s. 34', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['setting aside award', 'section 34 aca', 'patent illegality'] },
      { id: 'aca-s-37', name: 'ACA s. 37 — Appealable orders', type: 'section', range: 'ACA s. 37', cluster: 'Arbitration & Conciliation Act', keywords: ['appealable orders', 'section 37 aca'] },
      { id: 'aca-s-48', name: 'ACA s. 48 — Conditions for enforcement of foreign awards (New York Convention)', type: 'section', range: 'ACA s. 48', cluster: 'Arbitration & Conciliation Act', highYield: true, keywords: ['foreign awards', 'section 48 aca', 'new york convention'] },
      { id: 'med-s-4-6', name: 'Mediation Act ss. 4–6 — Pre-litigation mediation & Non-mediatable disputes', type: 'section', range: 'Mediation ss. 4-6', cluster: 'Mediation Act, 2023', highYield: true, keywords: ['mediation act', 'pre litigation mediation'] },
      { id: 'med-s-20', name: 'Mediation Act s. 20 — Mediated settlement agreement (Registration & Finality)', type: 'section', range: 'Mediation s. 20', cluster: 'Mediation Act, 2023', keywords: ['mediated settlement', 'section 20 mediation'] },
      { id: 'med-s-28', name: 'Mediation Act s. 28 — Grounds for challenge to mediated settlement agreement', type: 'section', range: 'Mediation s. 28', cluster: 'Mediation Act, 2023', keywords: ['challenge to mediation', 'section 28 mediation'] },
      { id: 'lsaa-s-19', name: 'LSA Act s. 19 — Organization of Lok Adalats', type: 'section', range: 'LSA Act s. 19', cluster: 'Legal Services Authorities Act', keywords: ['lok adalat', 'section 19 lsa'] },
      { id: 'lsaa-s-20-21', name: 'LSA Act ss. 20 & 21 — Award of Lok Adalat (Deemed Civil Court decree, non-appealable)', type: 'section', range: 'LSA Act ss. 20-21', cluster: 'Legal Services Authorities Act', highYield: true, keywords: ['award of lok adalat', 'section 21 lsa'] },
      { id: 'lsaa-s-22b', name: 'LSA Act s. 22B — Permanent Lok Adalat for public utility services', type: 'section', range: 'LSA Act s. 22B', cluster: 'Legal Services Authorities Act', keywords: ['permanent lok adalat', 'section 22b lsa'] },
      { id: 'adr-evolution', name: 'Evolution of Arbitral Law in India', type: 'theme', highYield: true, keywords: ['evolution arbitration law', 'arbitral law india'] },
      { id: 'adr-introduction', name: 'Arbitration — Introduction, Key Components and Process', type: 'theme', highYield: true, keywords: ['arbitration introduction', 'arbitration process'] },
      { id: 'adr-amendments-2019', name: 'Arbitration and Conciliation Amendment Act, 2019 — Key Changes', type: 'act', keywords: ['arbitration amendment 2019'] },
      { id: 'adr-council', name: 'Arbitration Council of India — Institutional Framework', type: 'act', keywords: ['arbitration council of india'] },
      { id: 'adr-governing-law', name: 'Governing Law of an Arbitration Agreement', type: 'doctrine', highYield: true, keywords: ['governing law arbitration agreement', 'proper law'] },
      { id: 'adr-types', name: 'Types of ADR — Arbitration, Mediation, Conciliation, Negotiation and Adjudication', type: 'theme', highYield: true, keywords: ['types of adr', 'adr comparison'] },
      { id: 'adr-international-relevance', name: 'ADR in International Law and Transnational Disputes', type: 'theme', keywords: ['international adr', 'transnational disputes'] },
      { id: 'adr-litigation-comparison', name: 'Litigation and ADR — Comparative Advantages and Limits', type: 'theme', keywords: ['litigation versus adr', 'adr advantages'] },
      { id: 'adr-sports', name: 'Sports ADR — Arbitration and Dispute Resolution in Sport', type: 'theme', keywords: ['sports arbitration', 'sports adr'] },
      { id: 'adr-ai', name: 'Artificial Intelligence in ADR — Legal and Ethical Boundaries', type: 'doctrine', keywords: ['ai in adr', 'technology adr'] },
      { id: 'mediation-meaning', name: 'Mediation — Meaning, Scope and Process', type: 'theme', highYield: true, keywords: ['mediation meaning', 'mediation process'] },
      { id: 'mediation-advantages', name: 'Mediation — Advantages, Disadvantages and Suitability', type: 'theme', keywords: ['mediation advantages', 'mediation limitations'] },
      { id: 'mediation-ethics', name: 'Ethical Standards and Confidentiality in Mediation', type: 'doctrine', highYield: true, keywords: ['mediation ethics', 'mediation confidentiality'] },
      { id: 'mediation-roleplay', name: 'Mediation Role-Play — Strategy, Caucus and Settlement Design', type: 'theme', keywords: ['mediation role play', 'caucus'] },
      { id: 'mediation-workplace', name: 'Workplace Mediation', type: 'theme', keywords: ['workplace mediation'] },
      { id: 'mediation-cross-cultural', name: 'Cross-Cultural Mediation', type: 'theme', keywords: ['cross cultural mediation'] },
      { id: 'mediation-marital', name: 'Marital Mediation and Family Disputes', type: 'theme', keywords: ['marital mediation', 'family mediation'] },
      { id: 'mediation-international', name: 'International Mediation — Comparative Practice and Settlement', type: 'theme', keywords: ['international mediation'] },
      { id: 'mediation-act-2023', name: 'Mediation Act, 2023 — Statutory Scheme', type: 'act', highYield: true, keywords: ['mediation act 2023'] },
      { id: 'negotiation-meaning', name: 'Negotiation — Meaning, Scope, Advantages and Disadvantages', type: 'theme', highYield: true, keywords: ['negotiation meaning', 'negotiation scope'] },
      { id: 'negotiation-strategies', name: 'Negotiation Strategies — Prerequisites and Major Approaches', type: 'theme', highYield: true, keywords: ['negotiation strategies', 'negotiation tactics'] },
      { id: 'conciliation-meaning', name: 'Conciliation — Meaning, Scope and Statutory Process', type: 'theme', highYield: true, keywords: ['conciliation meaning', 'conciliation process'] },
      { id: 'arbitration-advantages', name: 'Arbitration — Advantages, Disadvantages and Suitability', type: 'theme', keywords: ['arbitration advantages', 'arbitration limitations'] },
      { id: 'arbitration-public-policy', name: 'Public Policy and Patent Illegality in Award Challenges', type: 'doctrine', highYield: true, keywords: ['public policy arbitration', 'patent illegality'] },
      { id: 'adr-professionals', name: 'Efficient Arbitrators, Mediators and Conciliators — Skills and Duties', type: 'theme', keywords: ['arbitrator skills', 'mediator duties'] },
      { id: 'uncitral-model-law', name: 'UNCITRAL Model Law on International Commercial Arbitration', type: 'theme', highYield: true, keywords: ['uncitral model law'] },
      { id: 'arbitration-jurisdiction', name: 'Jurisdiction of the Arbitral Tribunal and Kompetenz-Kompetenz', type: 'doctrine', highYield: true, keywords: ['arbitral jurisdiction', 'kompetenz kompetenz'] },
      { id: 'arbitration-technology', name: 'Technology in International Arbitration', type: 'theme', keywords: ['technology arbitration', 'virtual arbitration'] },
      { id: 'arbitration-transparency', name: 'Transparency and Confidentiality in Arbitration', type: 'doctrine', keywords: ['transparency arbitration', 'confidentiality arbitration'] },
      { id: 'arbitrator-selection', name: 'Arbitrator Selection, Independence and Impartiality', type: 'theme', highYield: true, keywords: ['arbitrator selection', 'arbitrator independence'] },
      { id: 'third-party-funding', name: 'Third-Party Funding in Arbitration', type: 'theme', keywords: ['third party funding arbitration'] },
      { id: 'arbitration-centres-india', name: 'Arbitration Centres in India and Institutional Arbitration', type: 'theme', keywords: ['arbitration centres india', 'institutional arbitration'] },
      { id: 'international-arbitration-centres', name: 'International Arbitration Centres and Institutional Rules', type: 'theme', keywords: ['international arbitration centres'] },
      { id: 'cpc-s-89', name: 'CPC s. 89 — Court Referral to Arbitration, Conciliation, Mediation, Judicial Settlement and Lok Adalat', type: 'section', range: 'CPC s. 89', cluster: 'Civil Procedure and ADR', highYield: true, keywords: ['section 89 cpc', 'court referred adr'] },
      ...adrSectionTopics(),
    ],
  },
  {
    id: 'pil',
    slug: 'pil',
    name: 'Public Interest Litigation',
    shortName: 'PIL',
    priority: 'medium',
    aibeQuestions: 2,
    bareActs: ['Constitution of India (Arts 32, 226)'],
    description: 'Locus standi, epistolary jurisdiction, and landmark PIL jurisprudence.',
    keywords: ['pil', 'locus standi', 'public interest'],
    icon: 'Users',
    mcqSubjectKey: 'pil',
    topics: [
      { id: 'pil-evolution', name: 'PIL — Concept, Philosophy & Evolution (S.P. Gupta, Bandhua Mukti Morcha)', type: 'doctrine', highYield: true, keywords: ['pil concept', 'sp gupta', 'bandhua mukti morcha'] },
      { id: 'pil-locus-standi', name: 'Relaxation of Locus Standi — Pro Bono Publico Standing', type: 'doctrine', highYield: true, keywords: ['locus standi', 'pro bono publico'] },
      { id: 'pil-epistolary', name: 'Epistolary Jurisdiction — Converting Letters & Postcards into Writs', type: 'doctrine', highYield: true, keywords: ['epistolary jurisdiction', 'letters as writs'] },
      { id: 'pil-continuing-mandamus', name: 'Doctrine of Continuing Mandamus (Monitoring of executive inaction)', type: 'doctrine', highYield: true, keywords: ['continuing mandamus', 'vineet narain'] },
      { id: 'pil-abuse-guidelines', name: 'Guidelines to Prevent Abuse of PIL (State of Uttaranchal v. Balwant Singh Chaufal)', type: 'doctrine', highYield: true, keywords: ['abuse of pil', 'balwant singh chaufal'] },
      { id: 'pil-articles-32-226', name: 'PIL Constitutional Remedies — Articles 32 and 226 Compared', type: 'theme', highYield: true, keywords: ['pil articles 32 226', 'constitutional remedies'] },
      { id: 'pil-article-32', name: 'Article 32 PIL — Supreme Court Enforcement of Fundamental Rights', type: 'article', range: 'Art. 32', highYield: true, keywords: ['article 32 pil', 'supreme court pil'] },
      { id: 'pil-article-226', name: 'Article 226 PIL — High Court Writ Jurisdiction and Other Public Purposes', type: 'article', range: 'Art. 226', highYield: true, keywords: ['article 226 pil', 'high court pil'] },
      { id: 'pil-article-14', name: 'Equality-Based PIL — Article 14, Arbitrariness and Discrimination', type: 'article', range: 'Art. 14', keywords: ['article 14 pil', 'arbitrariness pil'] },
      { id: 'pil-article-19', name: 'Fundamental Freedoms and Public-Interest Litigation — Article 19', type: 'article', range: 'Art. 19', keywords: ['article 19 pil', 'freedom pil'] },
      { id: 'pil-article-21', name: 'Life, Liberty and Dignity PIL — Article 21', type: 'article', range: 'Art. 21', highYield: true, keywords: ['article 21 pil', 'life liberty pil'] },
      { id: 'pil-writs', name: 'Five Constitutional Writs in PIL — Habeas Corpus, Mandamus, Certiorari, Prohibition and Quo Warranto', type: 'theme', highYield: true, keywords: ['five writs', 'habeas corpus', 'mandamus', 'certiorari'] },
      { id: 'pil-environmental', name: 'Environmental PIL — Articles 21, 48A and 51A(g)', type: 'theme', highYield: true, keywords: ['environmental pil', 'article 48a', 'public health'] },
      { id: 'pil-social-justice', name: 'Social-Justice PIL — Articles 14, 21, 23 and 24', type: 'theme', highYield: true, keywords: ['social justice pil', 'bonded labour pil', 'child labour pil'] },
      { id: 'pil-directive-principles', name: 'Directive Principles in PIL — Articles 38, 39, 39A, 47 and 48A', type: 'theme', keywords: ['directive principles pil', 'article 39a legal aid'] },
      { id: 'pil-article-51a-g', name: 'Article 51A(g) and Public-Interest Environmental Duties', type: 'article', range: 'Art. 51A(g)', keywords: ['article 51a g', 'environment duty'] },
      { id: 'pil-procedure', name: 'PIL Procedure — Filing, Affidavits, Bona Fides and Maintainability', type: 'theme', highYield: true, keywords: ['pil procedure', 'pil filing guidelines', 'maintainability pil'] },
      { id: 'pil-landmark-cases', name: 'Landmark PIL Cases — Evolution, Constitutional Principles and Remedies', type: 'theme', highYield: true, keywords: ['landmark pil cases', 'pil jurisprudence'] },
    ],
  },
  {
    id: 'ethics',
    slug: 'ethics',
    name: 'Professional Ethics',
    shortName: 'Ethics',
    priority: 'medium',
    aibeQuestions: 4,
    bareActs: ['Advocates Act, 1961', 'Bar Council of India Rules'],
    description: 'Duties of advocates, misconduct, and Bar Council discipline.',
    keywords: ['professional ethics', 'advocate', 'bar council', 'misconduct'],
    icon: 'Scale',
    mcqSubjectKey: 'ethics',
    topics: [
      { id: 'adv-s-7', name: 'Advocates Act s. 7 — Functions of the Bar Council of India', type: 'section', range: 'Advocates Act s. 7', cluster: 'Advocates Act', keywords: ['bar council of india', 'section 7 advocates'] },
      { id: 'adv-s-24', name: 'Advocates Act s. 24 — Persons who may be admitted as advocates on a State roll', type: 'section', range: 'Advocates Act s. 24', cluster: 'Advocates Act', highYield: true, keywords: ['enrolment of advocate', 'section 24 advocates'] },
      { id: 'adv-s-29-30', name: 'Advocates Act ss. 29 & 30 — Right of advocates to practise throughout India', type: 'section', range: 'Advocates Act ss. 29-30', cluster: 'Advocates Act', highYield: true, keywords: ['right to practise', 'section 30 advocates'] },
      { id: 'adv-s-35', name: 'Advocates Act s. 35 — Punishment of advocates for misconduct (Disciplinary Committee)', type: 'section', range: 'Advocates Act s. 35', cluster: 'Advocates Act', highYield: true, keywords: ['professional misconduct', 'section 35 advocates'] },
      { id: 'adv-s-36', name: 'Advocates Act s. 36 — Disciplinary powers of Bar Council of India', type: 'section', range: 'Advocates Act s. 36', cluster: 'Advocates Act', keywords: ['disciplinary powers bci', 'section 36 advocates'] },
      { id: 'adv-s-37-38', name: 'Advocates Act ss. 37 & 38 — Appeal to BCI and Appeal to Supreme Court of India', type: 'section', range: 'Advocates Act ss. 37-38', cluster: 'Advocates Act', highYield: true, keywords: ['appeal to supreme court', 'section 38 advocates'] },
      { id: 'bci-rules-duties', name: 'BCI Rules Part VI — Duties to Court, Client, Opponent & Colleagues', type: 'chapter', range: 'BCI Rules Part VI', cluster: 'BCI Rules', highYield: true, keywords: ['duties to court', 'duties to client', 'bci rules'] },
      { id: 'contempt-advocates', name: 'Advocate Misconduct & Contempt of Court (In re Vinay Chandra Mishra, Ex-Capt. Harish Uppal)', type: 'doctrine', highYield: true, keywords: ['contempt of court', 'harish uppal', 'strike by advocates'] },
      { id: 'ethics-duty-court', name: 'Duty to the Court — Candour, Dignity, Independence and No Misleading Submissions', type: 'doctrine', highYield: true, keywords: ['advocate duty court', 'candour court'] },
      { id: 'ethics-duty-client', name: 'Duty to the Client — Loyalty, Competence, Communication and Diligence', type: 'doctrine', highYield: true, keywords: ['advocate duty client', 'client loyalty'] },
      { id: 'ethics-duty-opponent', name: 'Duty to Opponent and Colleagues — Fairness, Courtesy and No Improper Contact', type: 'doctrine', keywords: ['advocate duty opponent', 'professional courtesy'] },
      { id: 'ethics-confidentiality', name: 'Advocate-Client Confidentiality, Legal Privilege and Work Product', type: 'doctrine', highYield: true, keywords: ['advocate client privilege', 'confidentiality lawyer'] },
      { id: 'ethics-conflict', name: 'Conflict of Interest, Former Clients and Informed Consent', type: 'doctrine', highYield: true, keywords: ['advocate conflict interest', 'former client conflict'] },
      { id: 'ethics-fees', name: 'Fees, Contingency Arrangements, Client Money and Accounts', type: 'doctrine', highYield: true, keywords: ['advocate fees', 'contingency fee', 'client money'] },
      { id: 'ethics-advertising', name: 'Advertising, Solicitation, Websites and Professional Publicity', type: 'doctrine', highYield: true, keywords: ['advocate advertising', 'solicitation advocates'] },
      { id: 'ethics-no-solicitation', name: 'No Solicitation and Restrictions on Touting for Legal Work', type: 'doctrine', keywords: ['touting advocates', 'solicitation legal work'] },
      { id: 'ethics-withdrawal', name: 'Withdrawal from Engagement, Lien and Return of Client Papers', type: 'doctrine', keywords: ['withdraw advocate', 'return client papers'] },
      { id: 'ethics-witnesses', name: 'Advocate and Witnesses — No Coaching, Improper Contact or Suppression of Evidence', type: 'doctrine', highYield: true, keywords: ['advocate witness ethics', 'coaching witness'] },
      { id: 'ethics-evidence', name: 'Ethical Duties in Pleadings, Evidence and Disclosure', type: 'doctrine', keywords: ['ethical pleadings', 'advocate evidence duty'] },
      { id: 'ethics-pro-bono', name: 'Legal Aid, Pro Bono Practice and Duty to the Indigent', type: 'theme', keywords: ['legal aid advocate', 'pro bono'] },
      { id: 'ethics-strike-boycott', name: 'Strikes, Boycotts, Court Abstention and Administration of Justice', type: 'doctrine', highYield: true, keywords: ['advocate strike', 'court boycott'] },
      { id: 'ethics-contempt', name: 'Contempt of Court and Professional Misconduct — Separate Jurisdictions', type: 'doctrine', highYield: true, keywords: ['advocate contempt', 'professional misconduct contempt'] },
      { id: 'ethics-misconduct', name: 'Professional Misconduct — Categories, Proof and Sanctions', type: 'doctrine', highYield: true, keywords: ['professional misconduct advocate', 'disciplinary sanctions'] },
      { id: 'ethics-disciplinary-process', name: 'Disciplinary Proceedings — Notice, Evidence, Hearing and Reasoned Order', type: 'theme', highYield: true, keywords: ['disciplinary proceedings advocates', 'bar council hearing'] },
      { id: 'ethics-disciplinary-appeal', name: 'Appeals and Review in Advocate Discipline — State Bar Council, BCI and Supreme Court', type: 'theme', keywords: ['advocate disciplinary appeal', 'bar council appeal'] },
      { id: 'ethics-enrolment', name: 'Enrolment, State Roll, Certificate of Practice and Continuing Compliance', type: 'theme', keywords: ['advocate enrolment', 'certificate practice'] },
      { id: 'ethics-law-firm', name: 'Law Firms, Partnerships, Chambers and Institutional Ethics', type: 'theme', keywords: ['law firm ethics', 'chamber practice'] },
      { id: 'ethics-technology', name: 'Technology, Social Media, AI and Confidentiality in Legal Practice', type: 'doctrine', keywords: ['ai legal ethics', 'social media advocate'] },
      ...advocatesActSectionTopics(),
    ],
  },
  {
    id: 'labour',
    slug: 'labour',
    name: 'Labour & Industrial Law',
    shortName: 'Labour',
    priority: 'low',
    aibeQuestions: 3,
    bareActs: ['Code on Wages, 2019', 'Industrial Relations Code, 2020', 'Code on Social Security, 2020', 'Occupational Safety, Health and Working Conditions Code, 2020', 'Industrial Disputes Act, 1947 (legacy)', 'Trade Unions Act, 1926 (legacy)'],
    description: 'Complete section-wise coverage of the four labour codes, with legacy industrial-law concordance, wages, social security, occupational safety and industrial relations.',
    keywords: ['labour', 'industrial disputes', 'wages', 'trade union', 'social security', 'occupational safety', 'labour codes'],
    icon: 'Briefcase',
    mcqSubjectKey: 'labour',
    topics: [
      { id: 'ida-s-2j', name: 'IDA s. 2(j) — Definition of "Industry" (Bangalore Water Supply case)', type: 'section', range: 'IDA s. 2(j)', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['industry defined', 'bangalore water supply', 'section 2j'] },
      { id: 'ida-s-2k', name: 'IDA s. 2(k) — Definition of "Industrial Dispute"', type: 'section', range: 'IDA s. 2(k)', cluster: 'Industrial Disputes Act', keywords: ['industrial dispute', 'section 2k'] },
      { id: 'ida-s-2s', name: 'IDA s. 2(s) — Definition of "Workman"', type: 'section', range: 'IDA s. 2(s)', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['workman defined', 'section 2s'] },
      { id: 'ida-s-2oo', name: 'IDA s. 2(oo) — Definition of "Retrenchment" (Exceptions)', type: 'section', range: 'IDA s. 2(oo)', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['retrenchment', 'section 2oo'] },
      { id: 'ida-s-10', name: 'IDA s. 10 — Reference of disputes to Boards, Courts or Tribunals', type: 'section', range: 'IDA s. 10', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['reference of dispute', 'section 10 ida'] },
      { id: 'ida-s-22-24', name: 'IDA ss. 22–24 — Prohibition of strikes and lock-outs', type: 'section', range: 'IDA ss. 22-24', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['illegal strikes', 'lockouts', 'section 22 ida'] },
      { id: 'ida-s-25f', name: 'IDA s. 25F — Conditions precedent to retrenchment of workmen', type: 'section', range: 'IDA s. 25F', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['retrenchment compensation', 'section 25f ida'] },
      { id: 'ida-s-33', name: 'IDA s. 33 — Conditions of service to remain unchanged during pendency of proceedings', type: 'section', range: 'IDA s. 33', cluster: 'Industrial Disputes Act', keywords: ['section 33 ida', 'pendency of dispute'] },
      { id: 'cow-s-6', name: 'Code on Wages s. 6 — Fixation of minimum rates of wages', type: 'section', range: 'Wages Code s. 6', cluster: 'Code on Wages, 2019', keywords: ['minimum wages', 'code on wages'] },
      { id: 'cow-s-9', name: 'Code on Wages s. 9 — Power of Central Government to fix floor wage', type: 'section', range: 'Wages Code s. 9', cluster: 'Code on Wages, 2019', keywords: ['floor wage', 'section 9 wages code'] },
      { id: 'tua-s-17-18', name: 'Trade Unions Act ss. 17 & 18 — Criminal conspiracy & Civil immunity in trade disputes', type: 'section', range: 'Trade Unions ss. 17-18', cluster: 'Trade Unions Act', highYield: true, keywords: ['trade union immunity', 'section 18 trade unions'] },
      { id: 'labour-constitutional', name: 'Constitutional Foundations of Labour Law — Articles 14, 16, 19, 21, 23, 24 and 43A', type: 'theme', highYield: true, keywords: ['constitutional labour law', 'article 43a', 'labour fundamental rights'] },
      { id: 'labour-ilo', name: 'International Labour Organization and International Labour Standards', type: 'theme', keywords: ['ilo', 'international labour standards'] },
      { id: 'labour-industrial-relations', name: 'Industrial Relations — Employer, Workman, Industry and Dispute Framework', type: 'theme', highYield: true, keywords: ['industrial relations', 'industrial dispute framework'] },
      { id: 'labour-collective-bargaining', name: 'Collective Bargaining and Industrial Democracy', type: 'doctrine', highYield: true, keywords: ['collective bargaining', 'industrial democracy'] },
      { id: 'labour-trade-union-registration', name: 'Trade Union Registration, Recognition and Legal Status', type: 'theme', highYield: true, keywords: ['trade union registration', 'union recognition'] },
      { id: 'labour-standing-orders', name: 'Industrial Employment Standing Orders and Certified Service Rules', type: 'theme', keywords: ['standing orders', 'industrial employment'] },
      { id: 'labour-layoff', name: 'Lay-off — Meaning, Compensation and Conditions', type: 'section', range: 'IDA ss. 2(kk), 25C', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['lay off', 'layoff compensation'] },
      { id: 'labour-closure', name: 'Closure — Notice, Compensation and Legality', type: 'section', range: 'IDA ss. 2(cc), 25FFA, 25O', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['closure industrial establishment', 'section 25o'] },
      { id: 'labour-25g-25h', name: 'Retrenchment Procedure — Last Come First Go and Re-employment', type: 'section', range: 'IDA ss. 25G–25H', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['last come first go', 're employment retrenched workmen'] },
      { id: 'labour-25n-25o', name: 'Prior Permission for Retrenchment and Closure in Large Establishments', type: 'section', range: 'IDA ss. 25N–25O', cluster: 'Industrial Disputes Act', keywords: ['prior permission retrenchment', 'prior permission closure'] },
      { id: 'labour-25t-25u', name: 'Unfair Labour Practices and Penalties', type: 'section', range: 'IDA ss. 25T–25U and Fifth Schedule', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['unfair labour practice', 'fifth schedule ida'] },
      { id: 'labour-33a', name: 'Complaint against Change of Service Conditions during Pending Proceedings', type: 'section', range: 'IDA s. 33A', cluster: 'Industrial Disputes Act', keywords: ['section 33a', 'industrial dispute pending'] },
      { id: 'labour-36', name: 'Representation of Parties in Industrial Proceedings', type: 'section', range: 'IDA s. 36', cluster: 'Industrial Disputes Act', keywords: ['representation industrial dispute'] },
      { id: 'labour-11a', name: 'Relief in Cases of Discharge or Dismissal — Reinstatement and Back Wages', type: 'section', range: 'IDA s. 11A', cluster: 'Industrial Disputes Act', highYield: true, keywords: ['section 11a', 'reinstatement', 'back wages'] },
      { id: 'labour-award-enforcement', name: 'Industrial Awards, Publication, Binding Effect and Enforcement', type: 'theme', highYield: true, keywords: ['industrial award', 'award enforcement'] },
      { id: 'labour-works-committee', name: 'Works Committee and Grievance Redressal Committee', type: 'theme', keywords: ['works committee', 'grievance redressal committee'] },
      { id: 'labour-disciplinary-enquiry', name: 'Domestic Disciplinary Enquiry, Misconduct and Natural Justice', type: 'theme', highYield: true, keywords: ['disciplinary enquiry', 'domestic enquiry', 'natural justice labour'] },
      { id: 'labour-wages-payment', name: 'Payment of Wages, Deductions and Timely Remuneration', type: 'theme', keywords: ['payment of wages', 'wage deductions'] },
      { id: 'labour-equal-remuneration', name: 'Equal Remuneration and Non-Discrimination at Work', type: 'doctrine', highYield: true, keywords: ['equal remuneration', 'workplace discrimination'] },
      { id: 'labour-bonus', name: 'Payment of Bonus — Eligibility, Computation and Disqualification', type: 'act', keywords: ['payment of bonus act', 'bonus eligibility'] },
      { id: 'labour-gratuity', name: 'Payment of Gratuity — Eligibility, Forfeiture and Controlling Authority', type: 'act', highYield: true, keywords: ['payment of gratuity', 'gratuity eligibility'] },
      { id: 'labour-epf', name: 'Employees Provident Funds and Miscellaneous Provisions', type: 'act', highYield: true, keywords: ['epf', 'provident fund labour'] },
      { id: 'labour-esi', name: 'Employees State Insurance — Coverage, Benefits and Claims', type: 'act', keywords: ['esi', 'employees state insurance'] },
      { id: 'labour-maternity', name: 'Maternity Benefit and Protection against Workplace Discrimination', type: 'act', highYield: true, keywords: ['maternity benefit', 'maternity leave'] },
      { id: 'labour-child', name: 'Child and Adolescent Labour — Constitutional and Statutory Prohibition', type: 'act', highYield: true, keywords: ['child labour', 'adolescent labour'] },
      { id: 'labour-contract', name: 'Contract Labour — Licensing, Abolition and Principal Employer Duties', type: 'act', highYield: true, keywords: ['contract labour', 'principal employer'] },
      { id: 'labour-occupational-safety', name: 'Occupational Safety, Health and Working Conditions', type: 'act', highYield: true, keywords: ['occupational safety', 'working conditions'] },
      { id: 'labour-social-security', name: 'Social Security for Workers and Unorganised Workers', type: 'act', keywords: ['social security labour', 'unorganised workers'] },
      { id: 'labour-industrial-relations-code', name: 'Industrial Relations Code, 2020 — Transition and Key Scheme', type: 'act', highYield: true, keywords: ['industrial relations code 2020', 'labour codes'] },
      { id: 'labour-wages-code', name: 'Code on Wages, 2019 — Equal Wages, Minimum Wages and Floor Wage', type: 'act', highYield: true, keywords: ['code on wages 2019', 'floor wage'] },
      { id: 'labour-social-security-code', name: 'Code on Social Security, 2020 — Coverage and Benefits', type: 'act', keywords: ['code on social security 2020'] },
      { id: 'labour-code-transition', name: 'Labour Codes — Commencement, Repeal and Transitional Questions', type: 'doctrine', highYield: true, keywords: ['labour code transition', 'labour law commencement'] },
      { id: 'labour-gig-platform', name: 'Gig and Platform Workers — Classification and Social Security', type: 'theme', highYield: true, keywords: ['gig workers', 'platform workers'] },
      { id: 'labour-domestic', name: 'Domestic Workers and Informal Employment', type: 'theme', keywords: ['domestic workers', 'informal employment'] },
      ...labourCodeSectionTopics(),
    ],
  },
  {
    id: 'taxation',
    slug: 'taxation',
    name: 'Taxation Laws',
    shortName: 'Tax',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Income-tax Act, 2025', 'Income-tax Rules, 2026', 'CGST Act, 2017', 'IGST Act, 2017', 'State GST Acts', 'Customs Act, 1962'],
    description: 'Direct tax, GST and customs coverage with the Income-tax Act, 2025 and Rules, 2026 as current-law anchors, and earlier statutes as transition/concordance where applicable.',
    keywords: ['tax', 'income tax', 'income-tax act 2025', 'gst', 'customs', 'direct tax', 'indirect tax'],
    icon: 'Calculator',
    mcqSubjectKey: 'taxation',
    topics: [
      { id: 'it-s-2-24', name: 'IT Act s. 2(24) — Definition of "Income"', type: 'section', range: 'IT Act s. 2(24)', cluster: 'Income Tax Act', keywords: ['income defined', 'section 2 24 it'] },
      { id: 'it-s-4-5', name: 'IT Act ss. 4 & 5 — Charge of income-tax & Scope of total income', type: 'section', range: 'IT Act ss. 4-5', cluster: 'Income Tax Act', highYield: true, keywords: ['charge of tax', 'scope of income'] },
      { id: 'it-s-6', name: 'IT Act s. 6 — Residence in India (Residential status tests)', type: 'section', range: 'IT Act s. 6', cluster: 'Income Tax Act', highYield: true, keywords: ['residential status', 'section 6 it'] },
      { id: 'it-s-10', name: 'IT Act s. 10 — Incomes not included in total income (Exemptions)', type: 'section', range: 'IT Act s. 10', cluster: 'Income Tax Act', keywords: ['exemptions', 'section 10 it'] },
      { id: 'it-s-14', name: 'IT Act s. 14 — Heads of Income (Salaries, House Property, PGBP, Capital Gains, Other Sources)', type: 'section', range: 'IT Act s. 14', cluster: 'Income Tax Act', highYield: true, keywords: ['heads of income', 'section 14 it'] },
      { id: 'it-s-15-17', name: 'IT Act ss. 15–17 — Salaries & Perquisites', type: 'section', range: 'IT Act ss. 15-17', cluster: 'Income Tax Act', keywords: ['salary', 'perquisites'] },
      { id: 'it-s-22-27', name: 'IT Act ss. 22–27 — Income from House Property (Annual value determination)', type: 'section', range: 'IT Act ss. 22-27', cluster: 'Income Tax Act', keywords: ['house property', 'annual value'] },
      { id: 'it-s-28', name: 'IT Act s. 28 — Profits and gains of business or profession (PGBP)', type: 'section', range: 'IT Act s. 28', cluster: 'Income Tax Act', keywords: ['pgbp', 'section 28 it'] },
      { id: 'it-s-45', name: 'IT Act s. 45 — Capital Gains (Short-term & Long-term)', type: 'section', range: 'IT Act s. 45', cluster: 'Income Tax Act', highYield: true, keywords: ['capital gains', 'section 45 it'] },
      { id: 'it-s-56', name: 'IT Act s. 56 — Income from other sources (Residuary head)', type: 'section', range: 'IT Act s. 56', cluster: 'Income Tax Act', keywords: ['other sources', 'section 56 it'] },
      { id: 'it-s-80c', name: 'IT Act Chapter VI-A (ss. 80C to 80U) — Deductions from gross total income', type: 'chapter', range: 'IT Act Chapter VI-A', cluster: 'Income Tax Act', highYield: true, keywords: ['deductions', '80c', 'chapter 6a'] },
      { id: 'it-s-139', name: 'IT Act s. 139 — Return of income', type: 'section', range: 'IT Act s. 139', cluster: 'Income Tax Act', keywords: ['return of income', 'section 139 it'] },
      { id: 'it-s-143', name: 'IT Act s. 143 — Assessment of income', type: 'section', range: 'IT Act s. 143', cluster: 'Income Tax Act', keywords: ['assessment', 'section 143 it'] },
      { id: 'cgst-s-7', name: 'CGST Act s. 7 — Scope of supply (Taxable event under GST)', type: 'section', range: 'CGST Act s. 7', cluster: 'CGST Act, 2017', highYield: true, keywords: ['gst supply', 'section 7 cgst'] },
      { id: 'cgst-s-9', name: 'CGST Act s. 9 — Levy and collection of CGST', type: 'section', range: 'CGST Act s. 9', cluster: 'CGST Act, 2017', keywords: ['levy of gst', 'section 9 cgst'] },
      { id: 'cgst-s-16', name: 'CGST Act s. 16 — Eligibility and conditions for taking Input Tax Credit (ITC)', type: 'section', range: 'CGST Act s. 16', cluster: 'CGST Act, 2017', highYield: true, keywords: ['input tax credit', 'itc', 'section 16 cgst'] },
      { id: 'it-act-2025', name: 'Income-tax Act, 2025 — Structure, Commencement and Transition from the 1961 Act', type: 'act', highYield: true, keywords: ['income tax act 2025', 'direct tax transition'] },
      { id: 'it-rules-2026', name: 'Income-tax Rules, 2026 — Delegated Rules, Forms, Compliance and Procedure', type: 'act', keywords: ['income tax rules 2026', 'tax forms'] },
      { id: 'tax-residential-status', name: 'Residential Status and Scope of Total Income', type: 'theme', highYield: true, keywords: ['residential status', 'resident non resident'] },
      { id: 'tax-salary', name: 'Income from Salary — Charge, Perquisites, Allowances and Deductions', type: 'theme', highYield: true, keywords: ['salary income tax', 'perquisites'] },
      { id: 'tax-house-property', name: 'Income from House Property — Annual Value, Deductions and Co-ownership', type: 'theme', keywords: ['house property tax', 'annual value'] },
      { id: 'tax-business-profession', name: 'Profits and Gains of Business or Profession', type: 'theme', highYield: true, keywords: ['business income tax', 'professional income'] },
      { id: 'tax-capital-gains', name: 'Capital Gains — Transfer, Computation, Exemptions and Loss Set-off', type: 'theme', highYield: true, keywords: ['capital gains tax', 'short term capital gains'] },
      { id: 'tax-other-sources', name: 'Income from Other Sources — Residuary Head and Deemed Income', type: 'theme', keywords: ['other sources income tax'] },
      { id: 'tax-deductions', name: 'Deductions from Gross Total Income — Chapter VI-A', type: 'chapter', highYield: true, keywords: ['income tax deductions', 'chapter vi a'] },
      { id: 'tax-tds-tcs', name: 'TDS and TCS — Withholding, Collection, Certificates and Consequences', type: 'theme', highYield: true, keywords: ['tds', 'tcs', 'tax deducted source'] },
      { id: 'tax-returns', name: 'Returns, PAN, Self-Assessment and Compliance', type: 'theme', keywords: ['income tax return', 'pan', 'self assessment'] },
      { id: 'tax-assessment', name: 'Income-tax Assessment — Processing, Scrutiny, Reassessment and Best Judgment', type: 'theme', highYield: true, keywords: ['tax assessment', 'reassessment'] },
      { id: 'tax-appeals', name: 'Tax Appeals, Revision, Rectification and Writ Remedies', type: 'theme', highYield: true, keywords: ['tax appeal', 'tax revision', 'tax writ'] },
      { id: 'tax-penalties-prosecution', name: 'Tax Penalties, Offences and Prosecution', type: 'theme', keywords: ['tax penalties', 'tax prosecution'] },
      { id: 'gst-framework', name: 'GST Framework — CGST, SGST, IGST and Constitutional Structure', type: 'theme', highYield: true, keywords: ['gst framework', 'cgst sgst igst'] },
      { id: 'gst-supply', name: 'GST Supply — Taxable Event, Composite Supply and Mixed Supply', type: 'theme', highYield: true, keywords: ['gst supply', 'composite supply'] },
      { id: 'gst-registration', name: 'GST Registration, Persons Liable and Cancellation', type: 'theme', keywords: ['gst registration', 'gst cancellation'] },
      { id: 'gst-time-value-place', name: 'GST Time, Value and Place of Supply', type: 'theme', highYield: true, keywords: ['time of supply', 'value of supply', 'place of supply'] },
      { id: 'gst-itc', name: 'Input Tax Credit — Eligibility, Apportionment, Reversal and Blocked Credit', type: 'theme', highYield: true, keywords: ['gst itc', 'input tax credit'] },
      { id: 'gst-invoice', name: 'GST Tax Invoice, Credit Notes, Debit Notes and E-Way Compliance', type: 'theme', keywords: ['gst invoice', 'credit note', 'e way bill'] },
      { id: 'gst-returns', name: 'GST Returns, Payment and Electronic Ledgers', type: 'theme', keywords: ['gst returns', 'gst payment'] },
      { id: 'gst-assessment-audit', name: 'GST Assessment, Audit, Inspection, Search and Seizure', type: 'theme', highYield: true, keywords: ['gst assessment', 'gst audit', 'gst search'] },
      { id: 'gst-demand-recovery', name: 'GST Demand, Recovery, Interest and Provisional Attachment', type: 'theme', highYield: true, keywords: ['gst demand', 'gst recovery'] },
      { id: 'gst-appeals', name: 'GST Appeals, Revision, Advance Ruling and Writ Jurisdiction', type: 'theme', keywords: ['gst appeal', 'advance ruling gst'] },
      { id: 'gst-offences-penalties', name: 'GST Offences, Penalties, Compounding and Prosecution', type: 'theme', keywords: ['gst offences', 'gst penalties'] },
      { id: 'customs-import-export', name: 'Customs Import and Export Procedures', type: 'theme', highYield: true, keywords: ['customs import export'] },
      { id: 'customs-classification', name: 'Customs Classification, Tariff and Rules of Interpretation', type: 'theme', highYield: true, keywords: ['customs classification', 'customs tariff'] },
      { id: 'customs-valuation', name: 'Customs Valuation and Determination of Assessable Value', type: 'theme', highYield: true, keywords: ['customs valuation'] },
      { id: 'customs-duty', name: 'Customs Duty, Exemptions and Drawback', type: 'theme', keywords: ['customs duty', 'customs exemption', 'drawback'] },
      { id: 'customs-warehousing', name: 'Customs Warehousing, Transit and Clearance', type: 'theme', keywords: ['customs warehousing'] },
      { id: 'customs-baggage', name: 'Baggage, Postal Articles and Passenger Regulations', type: 'theme', keywords: ['customs baggage'] },
      { id: 'customs-assessment', name: 'Customs Assessment, Provisional Assessment and Adjudication', type: 'theme', keywords: ['customs assessment'] },
      { id: 'customs-confiscation', name: 'Customs Confiscation, Penalties and Release of Goods', type: 'theme', highYield: true, keywords: ['customs confiscation'] },
      { id: 'customs-appeals', name: 'Customs Appeals, Revision and Tribunal Remedies', type: 'theme', keywords: ['customs appeal', 'ces tat'] },
      { id: 'customs-offences', name: 'Customs Offences, Search, Seizure and Prosecution', type: 'theme', keywords: ['customs offences', 'customs prosecution'] },
    ],
  },
  {
    id: 'admin',
    slug: 'admin',
    name: 'Administrative Law',
    shortName: 'Admin Law',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Administrative law principles', 'Lokpal and Lokayuktas Act, 2013'],
    description: 'Natural justice, delegated legislation, judicial review of administrative action.',
    keywords: ['administrative law', 'natural justice', 'delegated legislation'],
    icon: 'Building2',
    mcqSubjectKey: 'admin',
    topics: [
      { id: 'admin-separation-powers', name: 'Doctrine of Separation of Powers & Rule of Law (Dicey’s formulation)', type: 'doctrine', highYield: true, keywords: ['separation of powers', 'rule of law', 'dicey'] },
      { id: 'admin-audi-alteram', name: 'Principles of Natural Justice — Audi Alteram Partem (Right to fair hearing)', type: 'doctrine', highYield: true, keywords: ['audi alteram partem', 'fair hearing', 'maneka gandhi'] },
      { id: 'admin-nemo-judex', name: 'Principles of Natural Justice — Nemo Judex In Causa Sua (Rule against Bias: Pecuniary, Personal, Subject-Matter)', type: 'doctrine', highYield: true, keywords: ['rule against bias', 'nemo judex in causa sua', 'ak kraipak'] },
      { id: 'admin-speaking-orders', name: 'Speaking Orders / Reasoned Decisions as Third Pillar of Natural Justice', type: 'doctrine', highYield: true, keywords: ['speaking orders', 'reasoned decision'] },
      { id: 'admin-delegated-legislation', name: 'Delegated Legislation — Excessive Delegation Test & Permissible Limits', type: 'doctrine', highYield: true, keywords: ['delegated legislation', 'excessive delegation', 'in re delhi laws act'] },
      { id: 'admin-judicial-review', name: 'Grounds of Judicial Review — Illegality, Irrationality (Wednesbury Unreasonableness), Procedural Impropriety', type: 'doctrine', highYield: true, keywords: ['judicial review', 'wednesbury unreasonableness', 'proportionality'] },
      { id: 'admin-writ-remedies', name: 'Writ Remedies against Administrative Action — Habeas Corpus, Mandamus, Certiorari, Prohibition and Quo Warranto', type: 'theme', highYield: true, keywords: ['writ remedies administrative law', 'mandamus', 'certiorari'] },
      { id: 'admin-ultra-vires', name: 'Doctrine of Ultra Vires — Substantive and Procedural Review', type: 'doctrine', highYield: true, keywords: ['ultra vires administrative law', 'substantive ultra vires'] },
      { id: 'admin-promissory-estoppel', name: 'Doctrine of Promissory Estoppel against the State (Motilal Padampat Sugar Mills)', type: 'doctrine', highYield: true, keywords: ['promissory estoppel', 'mp sugar mills'] },
      { id: 'admin-legitimate-expectation', name: 'Doctrine of Legitimate Expectation in Administrative Action', type: 'doctrine', keywords: ['legitimate expectation', 'administrative action'] },
      { id: 'admin-ombudsman', name: 'Ombudsman Concept — Lokpal and Lokayuktas Act, 2013', type: 'act', keywords: ['ombudsman', 'lokpal', 'lokayukta'] },
      { id: 'admin-introduction', name: 'Introduction to Administrative Law — Origin, Nature, Scope and Functions', type: 'theme', highYield: true, keywords: ['introduction administrative law', 'scope', 'functions'] },
      { id: 'admin-sources', name: 'Sources of Administrative Law — Constitution, Statutes, Delegated Legislation, Precedent and Policy', type: 'theme', highYield: true, keywords: ['sources administrative law', 'administrative law sources'] },
      { id: 'admin-constitutional-interface', name: 'Constitutional and Administrative Law — Relationship and Distinction', type: 'theme', highYield: true, keywords: ['constitutional administrative law', 'relationship'] },
      { id: 'admin-constitutional-foundations', name: 'Constitutional Foundations of Administrative Law — Articles 14, 19, 21, 32, 226, 300 and 311', type: 'theme', highYield: true, keywords: ['constitutional foundations administrative law', 'article 226 administrative law'] },
      { id: 'admin-good-governance', name: 'Administration and Good Governance — Transparency, Accountability and Participation', type: 'doctrine', highYield: true, keywords: ['good governance', 'accountability', 'transparency'] },
      { id: 'admin-international', name: 'International Administrative Law — Origin, Elements and Features', type: 'theme', keywords: ['international administrative law', 'global administration'] },
      { id: 'admin-rule-of-law-dicey', name: "Dicey's Formulation of the Rule of Law", type: 'doctrine', highYield: true, keywords: ['dicey', 'rule of law'] },
      { id: 'admin-rule-of-law-welfare', name: 'Rule of Law and the Welfare State — Limits of Dicey', type: 'doctrine', keywords: ['welfare state', 'rule of law'] },
      { id: 'admin-rule-of-law-mixed-economy', name: 'Rule of Law in a Mixed Economy', type: 'doctrine', keywords: ['mixed economy', 'rule of law'] },
      { id: 'admin-rule-of-law-formal-ideological', name: 'Formal and Ideological Concepts of the Rule of Law', type: 'doctrine', keywords: ['formal rule of law', 'ideological rule of law'] },
      { id: 'admin-rule-of-law-constitutional', name: 'Constitutional Provisions Embodying the Rule of Law', type: 'doctrine', highYield: true, keywords: ['constitutional rule of law', 'articles 14 21'] },
      { id: 'admin-separation-montesquieu', name: 'Separation of Powers — Montesquieu and Classical Formulation', type: 'doctrine', keywords: ['montesquieu', 'separation of powers'] },
      { id: 'admin-separation-comparative', name: 'Separation of Powers under Different Constitutions', type: 'doctrine', keywords: ['comparative constitutional law', 'separation of powers'] },
      { id: 'admin-separation-cases', name: 'Judicial Pronouncements on Separation of Powers', type: 'doctrine', highYield: true, keywords: ['separation of powers cases'] },
      { id: 'admin-functions', name: 'Classification of Administrative Functions — Legislative, Executive, Judicial and Quasi-Judicial', type: 'theme', highYield: true, keywords: ['administrative functions', 'quasi judicial functions'] },
      { id: 'admin-rulemaking-source', name: 'Administrative Rule-Making — Nature and Sources of Power', type: 'doctrine', highYield: true, keywords: ['delegated legislation', 'rule making power'] },
      { id: 'admin-rulemaking-limits', name: 'Administrative Rule-Making — Need, Limits and Classification', type: 'doctrine', highYield: true, keywords: ['delegated legislation limits', 'classification'] },
      { id: 'admin-rulemaking-control', name: 'Control of Administrative Rule-Making — Legislative, Judicial and Procedural', type: 'doctrine', highYield: true, keywords: ['control delegated legislation', 'judicial control'] },
      { id: 'admin-tribunals-growth', name: 'Administrative Tribunals — Reasons for Growth', type: 'theme', keywords: ['administrative tribunals', 'tribunal growth'] },
      { id: 'admin-tribunals-features', name: 'Administrative Tribunals — Salient Features', type: 'theme', keywords: ['tribunal features'] },
      { id: 'admin-tribunals-advantages', name: 'Administrative Tribunals — Advantages and Limitations', type: 'theme', keywords: ['tribunal advantages'] },
      { id: 'admin-tribunals-structure', name: 'Administrative Tribunals — Structure, Powers and Procedure', type: 'theme', highYield: true, keywords: ['tribunal structure', 'tribunal procedure'] },
      { id: 'admin-commission-inquiry', name: 'Commission of Inquiry Act, 1952 — Object, Scope and Procedure', type: 'act', keywords: ['commission of inquiry act'] },
      { id: 'admin-discretion', name: 'Administrative Discretion and the Jurisprudence of Departures from Rules', type: 'doctrine', keywords: ['administrative discretion', 'departure from rules'] },
      { id: 'admin-cvc', name: 'Central Vigilance Commission — Administration, Powers and Accountability', type: 'act', keywords: ['central vigilance commission', 'cvc'] },
      { id: 'admin-liability', name: 'Liability of the Administration — Public Law Compensation and State Liability', type: 'doctrine', highYield: true, keywords: ['administrative liability', 'state liability', 'public law compensation'] },
      { id: 'admin-public-corporations', name: 'Public Corporations and Government Undertakings — Control, Autonomy and Accountability', type: 'theme', keywords: ['public corporations', 'government undertakings'] },
      { id: 'admin-adjudication', name: 'Administrative Adjudication — Procedure and Natural Justice', type: 'theme', highYield: true, keywords: ['administrative adjudication', 'natural justice'] },
      { id: 'admin-civil-services', name: 'Constitutional Protection to Civil Servants — Article 311', type: 'theme', keywords: ['civil servants', 'article 311'] },
      { id: 'admin-citizen-faults', name: 'Citizen and Administrative Faults — Remedies against Maladministration', type: 'theme', keywords: ['maladministration', 'administrative faults'] },
      { id: 'admin-rti-transparency', name: 'Right to Information and Administrative Transparency', type: 'act', highYield: true, keywords: ['right to information', 'administrative transparency', 'rti'] },
      { id: 'admin-proportionality', name: 'Proportionality and Legitimate Expectation in Administrative Law', type: 'doctrine', highYield: true, keywords: ['proportionality', 'legitimate expectation'] },
      { id: 'admin-judicial-accountability', name: 'Judicial and Administrative Accountability', type: 'doctrine', keywords: ['judicial accountability', 'administrative accountability'] },
    ],
  },
  {
    id: 'company',
    slug: 'company',
    name: 'Company Law',
    shortName: 'Company',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Companies Act, 2013'],
    description: 'Incorporation, directors, meetings, and oppression & mismanagement essentials.',
    keywords: ['company', 'directors', 'incorporation', 'companies act'],
    icon: 'Building2',
    mcqSubjectKey: 'company',
    topics: [
      { id: 'ca-s-2', name: 'Companies Act s. 2 — Key definitions (Private company, Public company, OPC, Holding & Subsidiary)', type: 'section', range: 'Companies Act s. 2', cluster: 'Companies Act, 2013', keywords: ['company definitions', 'private company', 'one person company'] },
      { id: 'ca-s-7', name: 'Companies Act s. 7 — Incorporation of company', type: 'section', range: 'Companies Act s. 7', cluster: 'Companies Act, 2013', keywords: ['incorporation', 'section 7 companies'] },
      { id: 'ca-s-8', name: 'Companies Act s. 8 — Formation of companies with charitable objects', type: 'section', range: 'Companies Act s. 8', cluster: 'Companies Act, 2013', keywords: ['section 8 company', 'charitable objects'] },
      { id: 'ca-s-9', name: 'Companies Act s. 9 — Effect of registration (Separate Legal Personality & Corporate Veil)', type: 'section', range: 'Companies Act s. 9', cluster: 'Companies Act, 2013', highYield: true, keywords: ['corporate veil', 'salomon v salomon', 'separate legal personality'] },
      { id: 'ca-s-12-14', name: 'Companies Act ss. 12–14 — Registered office, Alteration of MOA & AOA (Doctrine of Ultra Vires)', type: 'section', range: 'Companies Act ss. 12-14', cluster: 'Companies Act, 2013', highYield: true, keywords: ['ultra vires', 'moa alteration', 'aoa alteration'] },
      { id: 'ca-s-39-42', name: 'Companies Act ss. 39 & 42 — Allotment of securities & Private placement', type: 'section', range: 'Companies Act ss. 39-42', cluster: 'Companies Act, 2013', keywords: ['allotment of shares', 'private placement'] },
      { id: 'ca-s-135', name: 'Companies Act s. 135 — Corporate Social Responsibility (CSR)', type: 'section', range: 'Companies Act s. 135', cluster: 'Companies Act, 2013', highYield: true, keywords: ['csr', 'section 135 companies'] },
      { id: 'ca-s-149', name: 'Companies Act s. 149 — Company to have Board of Directors & Independent Directors', type: 'section', range: 'Companies Act s. 149', cluster: 'Companies Act, 2013', highYield: true, keywords: ['board of directors', 'independent directors'] },
      { id: 'ca-s-166', name: 'Companies Act s. 166 — Duties of Directors (Fiduciary standards)', type: 'section', range: 'Companies Act s. 166', cluster: 'Companies Act, 2013', highYield: true, keywords: ['duties of directors', 'section 166 companies'] },
      { id: 'ca-s-241-242', name: 'Companies Act ss. 241 & 242 — Prevention of Oppression and Mismanagement (Foss v. Harbottle exceptions)', type: 'section', range: 'Companies Act ss. 241-242', cluster: 'Companies Act, 2013', highYield: true, keywords: ['oppression and mismanagement', 'foss v harbottle', 'section 241'] },
      { id: 'ca-s-245', name: 'Companies Act s. 245 — Class action suits', type: 'section', range: 'Companies Act s. 245', cluster: 'Companies Act, 2013', keywords: ['class action', 'section 245 companies'] },
      { id: 'ca-s-271', name: 'Companies Act s. 271 — Circumstances in which company may be wound up by Tribunal', type: 'section', range: 'Companies Act s. 271', cluster: 'Companies Act, 2013', highYield: true, keywords: ['winding up', 'section 271 companies'] },
      { id: 'company-nature-types', name: 'Nature and Types of Companies — Private, Public, OPC, Section 8, Holding and Subsidiary', type: 'theme', highYield: true, keywords: ['types of companies', 'one person company', 'section 8'] },
      { id: 'company-incorporation', name: 'Incorporation and Registration — Promoters, Documents and Certificate', type: 'theme', highYield: true, keywords: ['incorporation company', 'promoter', 'certificate incorporation'] },
      { id: 'company-promoters', name: 'Promoters — Fiduciary Duties, Pre-incorporation Contracts and Liability', type: 'doctrine', keywords: ['promoters', 'pre incorporation contract'] },
      { id: 'company-moa', name: 'Memorandum of Association — Clauses, Alteration and Doctrine of Ultra Vires', type: 'theme', highYield: true, keywords: ['memorandum association', 'ultra vires'] },
      { id: 'company-aoa', name: 'Articles of Association — Internal Regulations and Constructive Notice', type: 'theme', keywords: ['articles association', 'constructive notice'] },
      { id: 'company-indoor-management', name: 'Doctrine of Indoor Management and Its Exceptions', type: 'doctrine', highYield: true, keywords: ['indoor management', 'turquand rule'] },
      { id: 'company-prospectus', name: 'Prospectus — Contents, Misstatements and Civil/Criminal Liability', type: 'theme', highYield: true, keywords: ['prospectus', 'misstatement prospectus'] },
      { id: 'company-share-capital', name: 'Share Capital — Types, Variation, Reduction and Further Issue', type: 'theme', highYield: true, keywords: ['share capital', 'reduction share capital'] },
      { id: 'company-shares-transfer', name: 'Shares, Transfer, Transmission, Forfeiture and Lien', type: 'theme', keywords: ['transfer shares', 'transmission shares', 'forfeiture'] },
      { id: 'company-preference-shares', name: 'Preference Shares, Bonus Shares and Rights Issue', type: 'theme', keywords: ['preference shares', 'bonus shares', 'rights issue'] },
      { id: 'company-debentures', name: 'Debentures, Charges and Registration of Charges', type: 'theme', highYield: true, keywords: ['debentures', 'charges companies act'] },
      { id: 'company-membership', name: 'Membership, Register of Members and Member Rights', type: 'theme', keywords: ['membership company', 'member rights'] },
      { id: 'company-meetings', name: 'Company Meetings — Kinds, Notice, Quorum and Resolutions', type: 'theme', highYield: true, keywords: ['company meetings', 'quorum', 'resolutions'] },
      { id: 'company-general-meeting', name: 'Annual General Meeting, Extraordinary General Meeting and Requisition', type: 'theme', keywords: ['agm', 'egm', 'general meeting'] },
      { id: 'company-minutes', name: 'Minutes, Voting, Proxies and Postal Ballot', type: 'theme', keywords: ['company minutes', 'proxy voting', 'postal ballot'] },
      { id: 'company-director-appointment', name: 'Directors — Appointment, Qualification, Disqualification and Vacation', type: 'theme', highYield: true, keywords: ['appointment directors', 'director disqualification'] },
      { id: 'company-board-powers', name: 'Board of Directors — Powers, Duties, Meetings and Delegation', type: 'theme', highYield: true, keywords: ['board powers', 'board meeting'] },
      { id: 'company-kmp', name: 'Key Managerial Personnel, Managing Director and Manager', type: 'theme', keywords: ['key managerial personnel', 'managing director'] },
      { id: 'company-independent-directors', name: 'Independent Directors, Nominee Directors and Women Directors', type: 'theme', highYield: true, keywords: ['independent director', 'women director'] },
      { id: 'company-director-remuneration', name: 'Managerial Remuneration and Loans to Directors', type: 'theme', keywords: ['managerial remuneration', 'loans directors'] },
      { id: 'company-related-party', name: 'Related Party Transactions and Disclosure of Interest', type: 'theme', highYield: true, keywords: ['related party transaction', 'disclosure interest'] },
      { id: 'company-accounts', name: 'Company Accounts, Financial Statements and Board Report', type: 'theme', keywords: ['company accounts', 'financial statements'] },
      { id: 'company-audit', name: 'Audit and Auditors — Appointment, Powers, Duties and Rotation', type: 'theme', highYield: true, keywords: ['company audit', 'auditor duties'] },
      { id: 'company-csr', name: 'Corporate Social Responsibility — Committee, Policy and Compliance', type: 'theme', keywords: ['csr compliance', 'csr committee'] },
      { id: 'company-corporate-governance', name: 'Corporate Governance, Disclosure and Stakeholder Protection', type: 'doctrine', highYield: true, keywords: ['corporate governance', 'stakeholder protection'] },
      { id: 'company-insider-trading', name: 'Insider Trading, Securities Regulation and Investor Protection', type: 'theme', keywords: ['insider trading', 'investor protection'] },
      { id: 'company-oppression', name: 'Oppression and Mismanagement — Threshold, Relief and Tribunal Powers', type: 'theme', highYield: true, keywords: ['oppression mismanagement', 'nclt relief'] },
      { id: 'company-class-action', name: 'Class Action and Derivative Remedies', type: 'theme', keywords: ['class action company', 'derivative action'] },
      { id: 'company-compromise-arrangement', name: 'Compromise, Arrangement and Reconstruction of Companies', type: 'theme', highYield: true, keywords: ['company arrangement', 'reconstruction'] },
      { id: 'company-merger-amalgamation', name: 'Mergers, Amalgamation, Demerger and Fast-Track Merger', type: 'theme', highYield: true, keywords: ['merger company', 'amalgamation', 'demerger'] },
      { id: 'company-registered-charges', name: 'Charges, Secured Creditors and Priority', type: 'theme', keywords: ['registered charges', 'secured creditors'] },
      { id: 'company-nclt-nclat', name: 'NCLT and NCLAT — Jurisdiction, Procedure and Appeals', type: 'theme', highYield: true, keywords: ['nclt', 'nclat', 'company tribunal'] },
      { id: 'company-insolvency-interface', name: 'Companies Act and Insolvency and Bankruptcy Code Interface', type: 'theme', keywords: ['companies act ibc', 'corporate insolvency'] },
      { id: 'company-winding-up', name: 'Winding Up — Grounds, Petition, Liquidator and Distribution', type: 'theme', highYield: true, keywords: ['winding up company', 'liquidator'] },
      { id: 'company-striking-off', name: 'Strike-Off, Revival and Restoration of Company Name', type: 'theme', keywords: ['strike off company', 'restoration company'] },
      { id: 'company-offences', name: 'Corporate Offences, Fraud, Compounding and Adjudication of Penalties', type: 'theme', keywords: ['company offences', 'corporate fraud', 'compounding'] },
      ...companyActSectionTopics(),
    ],
  },
  {
    id: 'environment',
    slug: 'environment',
    name: 'Environmental Law',
    shortName: 'Environment',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Environment (Protection) Act, 1986', 'National Green Tribunal Act, 2010', 'Water Act, 1974', 'Air Act, 1981'],
    description: 'Environmental protection principles, polluter pays, and key statutes.',
    keywords: ['environment', 'polluter pays', 'epa'],
    icon: 'Leaf',
    mcqSubjectKey: 'environment',
    topics: [
      { id: 'env-protection-act', name: 'Environment (Protection) Act, 1986 — Sections 3, 7, 8 & 15 (Powers of Central Government & Penalties)', type: 'act', cluster: 'EPA 1986', highYield: true, keywords: ['environment protection act', 'section 3 epa'] },
      { id: 'env-ngt-act', name: 'National Green Tribunal Act, 2010 — Jurisdiction (s. 14), Relief & Compensation (s. 15), Principles (s. 20)', type: 'act', cluster: 'NGT Act 2010', highYield: true, keywords: ['ngt', 'national green tribunal', 'section 14 ngt'] },
      { id: 'env-water-air-acts', name: 'Water Act, 1974 & Air Act, 1981 — Pollution Control Boards and Regulatory Mechanisms', type: 'act', cluster: 'Water & Air Acts', keywords: ['water act', 'air act', 'pollution control board'] },
      { id: 'env-public-trust', name: 'Doctrine of Public Trust (M.C. Mehta v. Kamal Nath)', type: 'doctrine', highYield: true, keywords: ['public trust doctrine', 'kamal nath'] },
      { id: 'env-polluter-pays', name: 'Polluter Pays Principle & Absolute Liability (Vellore Citizens Welfare Forum)', type: 'doctrine', highYield: true, keywords: ['polluter pays', 'vellore citizens'] },
      { id: 'env-precautionary', name: 'Precautionary Principle & Sustainable Development (Taj Trapezium case)', type: 'doctrine', highYield: true, keywords: ['precautionary principle', 'sustainable development', 'taj trapezium'] },
      { id: 'env-introduction', name: 'Introduction to Environmental Law — Meaning, Scope, Pollution and Environmental Justice', type: 'theme', highYield: true, keywords: ['environmental law introduction', 'pollution', 'environmental justice'] },
      { id: 'env-constitutional', name: 'Constitutional Protection of Environment — Articles 21, 32, 226, 48A and 51A(g)', type: 'theme', highYield: true, keywords: ['constitutional environmental law', 'article 48a', 'article 51ag'] },
      { id: 'env-epa-sections', name: 'Environment Protection Act — ss. 2–11, 15, 19, 23–25', type: 'section', range: 'EPA ss. 2–11, 15, 19, 23–25', cluster: 'EPA 1986', highYield: true, keywords: ['environment protection act sections', 'epa powers'] },
      { id: 'env-water-pollution', name: 'Water Pollution — Water Act, 1974, Boards, Consent, Sampling and Penalties', type: 'act', cluster: 'Water Act 1974', highYield: true, keywords: ['water pollution', 'water act', 'pollution control board'] },
      { id: 'env-air-pollution', name: 'Air Pollution — Air Act, 1981, Control Areas, Consent and Emission Standards', type: 'act', cluster: 'Air Act 1981', highYield: true, keywords: ['air pollution', 'air act', 'emission standards'] },
      { id: 'env-forest-conservation', name: 'Forest Conservation — Diversion, Clearance and Restrictions on Forest Land', type: 'act', keywords: ['forest conservation', 'forest clearance'] },
      { id: 'env-wildlife', name: 'Wildlife Protection — Hunting, Sanctuaries, National Parks and Offences', type: 'act', highYield: true, keywords: ['wildlife protection', 'national parks', 'wildlife offences'] },
      { id: 'env-biodiversity', name: 'Biological Diversity — Access, Benefit Sharing and Biodiversity Authorities', type: 'act', keywords: ['biological diversity', 'benefit sharing', 'biodiversity authority'] },
      { id: 'env-eia', name: 'Environmental Impact Assessment — Screening, Scoping, Consultation, Clearance and Monitoring', type: 'theme', highYield: true, keywords: ['environment impact assessment', 'environmental clearance'] },
      { id: 'env-judiciary', name: 'Environmental Judiciary — NGT, PIL, Compensation and Constitutional Remedies', type: 'theme', highYield: true, keywords: ['ngt environmental law', 'environmental pil'] },
      ...explicitSectionTopics('epa', 'Environment Protection Act', ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '15', '19', '23', '24', '25'], 'EPA 1986'),
    ],
  },
  {
    id: 'cyber',
    slug: 'cyber',
    name: 'Cyber Law',
    shortName: 'Cyber',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Information Technology Act, 2000'],
    description: 'IT Act offences, electronic contracts, and intermediary liability essentials.',
    keywords: ['cyber', 'it act', 'electronic evidence'],
    icon: 'Monitor',
    mcqSubjectKey: 'cyber',
    topics: [
      { id: 'it-s-4', name: 'IT Act s. 4 — Legal recognition of electronic records', type: 'section', range: 'IT Act s. 4', cluster: 'Information Technology Act', keywords: ['electronic records', 'section 4 it'] },
      { id: 'it-s-10a', name: 'IT Act s. 10A — Validity of contracts formed through electronic means', type: 'section', range: 'IT Act s. 10A', cluster: 'Information Technology Act', highYield: true, keywords: ['e-contracts', 'section 10a it'] },
      { id: 'it-s-43', name: 'IT Act s. 43 — Penalty and compensation for damage to computer system', type: 'section', range: 'IT Act s. 43', cluster: 'Information Technology Act', highYield: true, keywords: ['damage to computer', 'section 43 it'] },
      { id: 'it-s-43a', name: 'IT Act s. 43A — Compensation for failure to protect sensitive personal data', type: 'section', range: 'IT Act s. 43A', cluster: 'Information Technology Act', keywords: ['data protection', 'section 43a it'] },
      { id: 'it-s-65', name: 'IT Act s. 65 — Tampering with computer source documents', type: 'section', range: 'IT Act s. 65', cluster: 'Information Technology Act', keywords: ['source code tampering', 'section 65 it'] },
      { id: 'it-s-66', name: 'IT Act s. 66 — Computer related offences (Hacking)', type: 'section', range: 'IT Act s. 66', cluster: 'Information Technology Act', highYield: true, keywords: ['hacking', 'section 66 it'] },
      { id: 'it-s-66a', name: 'IT Act s. 66A — Historical perspective and striking down in Shreya Singhal v. Union of India', type: 'section', range: 'IT Act s. 66A', cluster: 'Information Technology Act', highYield: true, keywords: ['shreya singhal', 'section 66a it'] },
      { id: 'it-s-66e', name: 'IT Act s. 66E — Punishment for violation of privacy (Capturing/transmitting bodily images)', type: 'section', range: 'IT Act s. 66E', cluster: 'Information Technology Act', keywords: ['violation of privacy', 'section 66e it'] },
      { id: 'it-s-67', name: 'IT Act s. 67 — Punishment for publishing or transmitting obscene material in electronic form', type: 'section', range: 'IT Act s. 67', cluster: 'Information Technology Act', highYield: true, keywords: ['obscenity', 'section 67 it'] },
      { id: 'it-s-69', name: 'IT Act s. 69 — Powers to issue directions for interception or monitoring of information', type: 'section', range: 'IT Act s. 69', cluster: 'Information Technology Act', keywords: ['interception', 'section 69 it'] },
      { id: 'it-s-79', name: 'IT Act s. 79 — Exemption from liability of intermediary in certain cases (Safe Harbour principle)', type: 'section', range: 'IT Act s. 79', cluster: 'Information Technology Act', highYield: true, keywords: ['intermediary liability', 'safe harbour', 'section 79 it'] },
      { id: 'cyber-introduction', name: 'Introduction to Cyber Law — Cyberspace, Jurisdiction and Cybercrime', type: 'theme', highYield: true, keywords: ['cyber law introduction', 'cyberspace', 'cybercrime'] },
      { id: 'it-s-2', name: 'IT Act s. 2 — Definitions and Core Digital Concepts', type: 'section', range: 'IT Act s. 2', cluster: 'Information Technology Act', highYield: true, keywords: ['it act definitions'] },
      { id: 'it-s-3-3a', name: 'IT Act ss. 3 & 3A — Digital and Electronic Signature Authentication', type: 'section', range: 'IT Act ss. 3–3A', cluster: 'Information Technology Act', keywords: ['digital signature', 'electronic signature'] },
      { id: 'it-s-5-6', name: 'IT Act ss. 5 & 6 — Electronic Signatures and Government Electronic Records', type: 'section', range: 'IT Act ss. 5–6', cluster: 'Information Technology Act', keywords: ['electronic signatures government'] },
      { id: 'cyber-certifying-authorities', name: 'Certifying Authorities, Controller and Subscriber Duties', type: 'theme', keywords: ['certifying authority', 'controller certifying authorities'] },
      { id: 'cyber-security', name: 'Cyber Security and Critical Information Infrastructure — ss. 69, 69A, 70, 70A and 70B', type: 'theme', highYield: true, keywords: ['cyber security', 'critical information infrastructure', 'cert in'] },
      { id: 'cyber-crimes', name: 'Cyber Crimes — ss. 66B, 66C, 66D, 66E, 66F, 67, 67A and 67B', type: 'theme', highYield: true, keywords: ['identity theft', 'cyber terrorism', 'online obscenity'] },
      { id: 'cyber-privacy', name: 'Privacy, Confidentiality and Data Protection — ss. 72 and 72A', type: 'theme', highYield: true, keywords: ['cyber privacy', 'data protection', 'confidentiality'] },
      { id: 'cyber-jurisdiction-investigation', name: 'Cyber Jurisdiction and Investigation — ss. 75, 78 and 80', type: 'theme', highYield: true, keywords: ['cyber jurisdiction', 'cyber investigation'] },
      { id: 'cyber-electronic-evidence', name: 'Electronic Evidence and Digital Signatures under BSA 2023', type: 'theme', highYield: true, keywords: ['electronic evidence', 'digital evidence', 'bsa 63'] },
      { id: 'cyber-data-protection', name: 'Digital Personal Data Protection Framework and Cyber Compliance', type: 'act', keywords: ['digital personal data protection', 'data compliance'] },
      ...explicitSectionTopics('cyber-it', 'Information Technology Act', ['2', '3', '3A', '4', '5', '6', '10A', '43', '43A', '65', '66', '66A', '66B', '66C', '66D', '66E', '66F', '67', '67A', '67B', '69', '69A', '70', '70A', '70B', '72', '72A', '75', '78', '79', '80'], 'Information Technology Act'),
    ],
  },
  {
    id: 'land',
    slug: 'land',
    name: 'Land Laws',
    shortName: 'Land',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013'],
    description: 'Land acquisition basics, social impact assessment, compensation, and property transfer essentials.',
    keywords: ['land', 'acquisition', 'property'],
    icon: 'Map',
    mcqSubjectKey: 'land',
    topics: [
      { id: 'land-rfctlarr-act', name: 'RFCTLARR Act, 2013 — Social Impact Assessment (ss. 4–9), Preliminary Notification (s. 11), Declaration (s. 19)', type: 'act', cluster: 'Land Acquisition', highYield: true, keywords: ['rfctlarr act', 'social impact assessment', 'section 11'] },
      { id: 'land-compensation', name: 'RFCTLARR Act, 2013 — Determination of Market Value (s. 26) & Solatium (s. 30)', type: 'section', range: 'RFCTLARR ss. 26-30', cluster: 'Land Acquisition', highYield: true, keywords: ['market value', 'solatium', 'section 26 rfctlarr'] },
      { id: 'land-rehabilitation', name: 'Rehabilitation and Resettlement Award under Chapter V (ss. 31–42)', type: 'chapter', range: 'RFCTLARR Chapter V', cluster: 'Land Acquisition', keywords: ['rehabilitation and resettlement', 'chapter 5 rfctlarr'] },
      { id: 'land-tpa-principles', name: 'Transfer of Property Principles Governing Agricultural & Urban Land Transfers', type: 'theme', cluster: 'Land Principles', keywords: ['land transfer', 'agricultural land'] },
      { id: 'land-introduction', name: 'Introduction to Land Law — Immovable Property, Ownership, Possession, Title and Tenure', type: 'theme', highYield: true, keywords: ['land law introduction', 'immovable property', 'land tenure'] },
      { id: 'land-tpa-general', name: 'Transfer of Property Act — ss. 5–14, Competency, Conditions and Rule against Perpetuity', type: 'section', range: 'TPA ss. 5–14', cluster: 'Transfer of Property', highYield: true, keywords: ['transfer of property act', 'rule against perpetuity'] },
      { id: 'land-tpa-doctrines', name: 'Transfer of Property Doctrines — Ostensible Owner, Feeding the Grant, Co-owner, Lis Pendens and Fraudulent Transfer', type: 'doctrine', range: 'TPA ss. 41, 43, 44, 52, 53, 53A', cluster: 'Transfer of Property', highYield: true, keywords: ['lis pendens', 'part performance', 'ostensible owner'] },
      { id: 'land-sale', name: 'Sale of Immovable Property — TPA ss. 54–55, Agreement to Sell, Duties and Registration', type: 'section', range: 'TPA ss. 54–55', cluster: 'Transfer of Property', highYield: true, keywords: ['sale immovable property', 'agreement to sell'] },
      { id: 'land-mortgage', name: 'Mortgage — TPA ss. 58–67, Types, Redemption, Foreclosure and Sale', type: 'section', range: 'TPA ss. 58–67', cluster: 'Transfer of Property', highYield: true, keywords: ['mortgage', 'right of redemption', 'foreclosure'] },
      { id: 'land-lease', name: 'Lease — TPA ss. 105–111, Duration, Registration, Rights and Determination', type: 'section', range: 'TPA ss. 105–111', cluster: 'Transfer of Property', highYield: true, keywords: ['lease', 'lessor lessee', 'determination lease'] },
      { id: 'land-gift', name: 'Gift — TPA ss. 122–127, Acceptance, Revocation and Onerous Gifts', type: 'section', range: 'TPA ss. 122–127', cluster: 'Transfer of Property', keywords: ['gift transfer property', 'revocation gift'] },
      { id: 'land-easements', name: 'Easements Act — Easement by Necessity, Prescription, Extinction and Licence', type: 'act', cluster: 'Easements', keywords: ['easement', 'easement by necessity', 'licence'] },
      { id: 'land-registration', name: 'Registration Act — Compulsory Registration, Non-Registration and Effect', type: 'act', cluster: 'Registration', highYield: true, keywords: ['registration of property', 'unregistered document'] },
      { id: 'land-acquisition', name: 'Land Acquisition — Public Purpose, SIA, Notification, Award and Compensation', type: 'act', cluster: 'Land Acquisition', highYield: true, keywords: ['land acquisition', 'public purpose', 'award'] },
      { id: 'land-state-laws', name: 'State Land Laws — Revenue Records, Patta, Tenancy, Ceiling and Government Land', type: 'theme', cluster: 'State Land Laws', keywords: ['patta', 'land ceiling', 'revenue records'] },
      ...explicitSectionTopics('tpa', 'Transfer of Property Act', ['5', '6', '7', '8', '10', '11', '13', '14', '41', '43', '44', '52', '53', '53A', '54', '55', '58', '59', '60', '67', '105', '106', '107', '108', '111', '122', '123', '126', '127'], 'Transfer of Property'),
    ],
  },
  {
    id: 'ipr',
    slug: 'ipr',
    name: 'Intellectual Property Rights',
    shortName: 'IPR',
    priority: 'low',
    aibeQuestions: 2,
    bareActs: ['Copyright Act, 1957', 'Trade Marks Act, 1999', 'Patents Act, 1970'],
    description: 'Copyright, trademarks, and patents — core concepts for AIBE-level questions.',
    keywords: ['ipr', 'copyright', 'trademark', 'patent'],
    icon: 'Lightbulb',
    mcqSubjectKey: 'ipr',
    topics: [
      { id: 'cr-s-13-14', name: 'Copyright Act ss. 13 & 14 — Works in which copyright subsists & Meaning of copyright', type: 'section', range: 'Copyright ss. 13-14', cluster: 'Copyright Act', highYield: true, keywords: ['copyright subsists', 'section 14 copyright'] },
      { id: 'cr-s-17', name: 'Copyright Act s. 17 — First owner of copyright', type: 'section', range: 'Copyright s. 17', cluster: 'Copyright Act', keywords: ['first owner', 'section 17 copyright'] },
      { id: 'cr-s-51', name: 'Copyright Act s. 51 — When copyright infringed', type: 'section', range: 'Copyright s. 51', cluster: 'Copyright Act', highYield: true, keywords: ['copyright infringement', 'section 51 copyright'] },
      { id: 'cr-s-52', name: 'Copyright Act s. 52 — Acts not constituting infringement of copyright (Fair Dealing doctrine)', type: 'section', range: 'Copyright s. 52', cluster: 'Copyright Act', highYield: true, keywords: ['fair dealing', 'section 52 copyright'] },
      { id: 'cr-s-55', name: 'Copyright Act s. 55 — Civil remedies for infringement of copyright', type: 'section', range: 'Copyright s. 55', cluster: 'Copyright Act', keywords: ['copyright remedies', 'section 55 copyright'] },
      { id: 'tm-s-2', name: 'Trade Marks Act s. 2(1)(zb) — Definition of Trade Mark', type: 'section', range: 'Trade Marks s. 2', cluster: 'Trade Marks Act', keywords: ['trade mark defined', 'graphical representation'] },
      { id: 'tm-s-9', name: 'Trade Marks Act s. 9 — Absolute grounds for refusal of registration (Distinctiveness)', type: 'section', range: 'Trade Marks s. 9', cluster: 'Trade Marks Act', highYield: true, keywords: ['absolute grounds', 'section 9 trade marks'] },
      { id: 'tm-s-11', name: 'Trade Marks Act s. 11 — Relative grounds for refusal of registration (Similarity & Confusion)', type: 'section', range: 'Trade Marks s. 11', cluster: 'Trade Marks Act', highYield: true, keywords: ['relative grounds', 'section 11 trade marks'] },
      { id: 'tm-s-28-29', name: 'Trade Marks Act ss. 28 & 29 — Rights conferred by registration & Infringement of trade marks', type: 'section', range: 'Trade Marks ss. 28-29', cluster: 'Trade Marks Act', highYield: true, keywords: ['trademark infringement', 'section 29 trade marks'] },
      { id: 'tm-s-134-135', name: 'Trade Marks Act ss. 134 & 135 — Suit for infringement, Passing off & Injunction remedies', type: 'section', range: 'Trade Marks ss. 134-135', cluster: 'Trade Marks Act', highYield: true, keywords: ['passing off', 'trademark suit', 'section 134'] },
      { id: 'pat-s-2', name: 'Patents Act s. 2(1)(j) & (ja) — Definition of Invention and Inventive Step', type: 'section', range: 'Patents s. 2', cluster: 'Patents Act', highYield: true, keywords: ['invention defined', 'inventive step'] },
      { id: 'pat-s-3', name: 'Patents Act s. 3 — What are not inventions (Patentability exclusions - s. 3(d) Novartis case)', type: 'section', range: 'Patents s. 3', cluster: 'Patents Act', highYield: true, keywords: ['patentability exclusions', 'section 3d patents', 'novartis'] },
      { id: 'pat-s-48', name: 'Patents Act s. 48 — Rights of patentees', type: 'section', range: 'Patents s. 48', cluster: 'Patents Act', keywords: ['rights of patentee', 'section 48 patents'] },
      { id: 'pat-s-84', name: 'Patents Act s. 84 — Compulsory licences', type: 'section', range: 'Patents s. 84', cluster: 'Patents Act', highYield: true, keywords: ['compulsory licence', 'section 84 patents', 'bayer v natco'] },
      { id: 'ipr-introduction', name: 'Introduction to IPR — Nature, Types, WIPO, WTO and TRIPS', type: 'theme', highYield: true, keywords: ['ipr introduction', 'wipo', 'trips'] },
      { id: 'ipr-copyright-ownership', name: 'Copyright — Ownership, Assignment, Licensing, Duration and Authors Rights', type: 'theme', highYield: true, keywords: ['copyright ownership', 'copyright assignment'] },
      { id: 'ipr-copyright-remedies', name: 'Copyright — Infringement, Fair Dealing, Civil and Criminal Remedies', type: 'theme', highYield: true, keywords: ['copyright remedies', 'fair dealing', 'copyright infringement'] },
      { id: 'ipr-patent-procedure', name: 'Patents — Application, Specification, Publication, Examination and Opposition', type: 'theme', highYield: true, keywords: ['patent application', 'patent examination', 'patent opposition'] },
      { id: 'ipr-patent-rights', name: 'Patents — Rights, Term, Infringement, Compulsory Licence and Remedies', type: 'theme', highYield: true, keywords: ['patent rights', 'patent infringement'] },
      { id: 'ipr-trademark-registration', name: 'Trade Marks — Definitions, Registration, Absolute and Relative Refusal Grounds', type: 'theme', highYield: true, keywords: ['trademark registration', 'absolute grounds', 'relative grounds'] },
      { id: 'ipr-trademark-infringement', name: 'Trade Marks — Infringement, Passing Off, Prior User and Remedies', type: 'theme', highYield: true, keywords: ['trademark infringement', 'passing off', 'prior user'] },
      { id: 'ipr-designs', name: 'Industrial Designs — Registration, Copyright, Piracy and Cancellation', type: 'act', keywords: ['designs act', 'industrial design'] },
      { id: 'ipr-gi', name: 'Geographical Indications — Registration, Authorized Users and Infringement', type: 'act', keywords: ['geographical indications', 'gi registration'] },
      { id: 'ipr-other', name: 'Other IPR — Plant Varieties, Semiconductor Layouts, Trade Secrets and Traditional Knowledge', type: 'theme', keywords: ['plant varieties', 'trade secrets', 'traditional knowledge'] },
      { id: 'ipr-international', name: 'International IPR — Paris, Berne, PCT, Madrid System and TRIPS Enforcement', type: 'theme', highYield: true, keywords: ['international ipr', 'paris convention', 'berne convention', 'madrid system'] },
      ...explicitSectionTopics('copyright', 'Copyright Act', ['13', '14', '17', '18', '19', '22', '30', '31', '51', '52', '55', '63'], 'Copyright Act'),
      ...explicitSectionTopics('trademarks', 'Trade Marks Act', ['2', '9', '11', '18', '21', '25', '27', '28', '29', '30', '34', '57', '134', '135'], 'Trade Marks Act'),
      ...explicitSectionTopics('patents', 'Patents Act', ['2', '3', '4', '6', '7', '10', '11A', '11B', '25', '48', '53', '84'], 'Patents Act'),
    ],
  },
]

export const PRIORITY_ORDER: SubjectPriority[] = ['high', 'medium', 'low']

export const PRIORITY_LABELS: Record<SubjectPriority, string> = {
  high: 'High Priority (AIBE weightage)',
  medium: 'Medium Priority',
  low: 'Lower Weightage',
}

export function getSubjectById(id: string): LawSubjectMeta | undefined {
  return SUBJECTS.find((s) => s.id === id || s.slug === id)
}

export function getSubjectBySlug(slug: string): LawSubjectMeta | undefined {
  return SUBJECTS.find((s) => s.slug === slug || s.id === slug)
}

export function getTopicById(subjectId: string, topicId: string): LawTopic | undefined {
  const subject = getSubjectById(subjectId)
  return subject?.topics.find((t) => t.id === topicId)
}
