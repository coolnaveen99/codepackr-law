/**
 * Codepackr Law — Subject & Topic registry
 *
 * Hierarchy: Subjects → Topics (themes / articles / doctrines) → Practice
 * Petition formats are a SEPARATE subject: petition-formats
 * Full notes: src/data/topics/<slug>/<id>.ts (lazy-loaded)
 */

import { BNS_SECTIONS } from './bns/sections'

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
  type: TopicType
  range?: string
  note?: string
  keywords?: string[]
  highYield?: boolean
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

function bnsSectionTopics(): LawTopic[] {
  return BNS_SECTIONS.map((s) => ({
    id: `s-${s.id.toLowerCase()}`,
    name: `Section ${s.id} — ${s.title}`,
    type: 'section' as const,
    range: `s. ${s.id}`,
    cluster: s.cluster,
    note: s.flags.includes('new')
      ? 'New — no IPC predecessor'
      : s.ipc
        ? `IPC ${s.ipc}`
        : undefined,
    keywords: [
      `section ${s.id}`,
      `bns ${s.id}`,
      s.title.toLowerCase().slice(0, 48),
      ...(s.ipc ? [`ipc ${s.ipc}`] : []),
    ],
    highYield: s.flags.includes('exam'),
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
      { id: 'art-14', name: 'Article 14 — Equality', type: 'article', range: 'Art 14', cluster: 'Right to Equality', keywords: ['equality', 'article 14'], highYield: true },
      { id: 'art-19', name: 'Article 19 — Freedoms', type: 'article', range: 'Art 19', cluster: 'Right to Freedom', keywords: ['freedom of speech', 'article 19'], highYield: true },
      { id: 'art-21', name: 'Article 21 — Life & Personal Liberty', type: 'article', range: 'Art 21', cluster: 'Right to Freedom', note: 'Expanded by Maneka Gandhi and later cases', keywords: ['article 21', 'life', 'liberty'], highYield: true },
      { id: 'art-32-226', name: 'Writs (Arts 32 & 226)', type: 'theme', range: 'Arts 32, 226', note: 'Habeas corpus, mandamus, prohibition, certiorari, quo warranto', keywords: ['writs', 'article 32', 'article 226'], highYield: true },
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
      { id: 'judiciary', name: 'Union & State Judiciary', type: 'theme', note: 'SC & HC jurisdiction, appointment, independence', keywords: ['supreme court', 'high court'] },
      { id: 'art-1', name: 'Article 1 — Name and territory of the Union', type: 'article', range: 'Art 1', cluster: 'Union', keywords: ['article 1', 'name and territory of the union'] },
      { id: 'art-2', name: 'Article 2 — Admission or establishment of new States', type: 'article', range: 'Art 2', cluster: 'Union', keywords: ['article 2', 'admission or establishment of new states'] },
      { id: 'art-3', name: 'Article 3 — Formation of new States and alteration of areas, boundaries or names', type: 'article', range: 'Art 3', cluster: 'Union', keywords: ['article 3', 'formation of new states and alteration o'] },
      { id: 'art-12', name: 'Article 12 — Definition of “the State”', type: 'article', range: 'Art 12', cluster: 'Foundation', keywords: ['article 12', 'definition of “the state”'], highYield: true },
      { id: 'art-13', name: 'Article 13 — Laws inconsistent with or in derogation of Fundamental Rights', type: 'article', range: 'Art 13', cluster: 'Foundation', keywords: ['article 13', 'laws inconsistent with or in derogation '], highYield: true },
      { id: 'art-15', name: 'Article 15 — Prohibition of discrimination', type: 'article', range: 'Art 15', cluster: 'Right to Equality', keywords: ['article 15', 'prohibition of discrimination'], highYield: true },
      { id: 'art-16', name: 'Article 16 — Equality of opportunity in public employment', type: 'article', range: 'Art 16', cluster: 'Right to Equality', keywords: ['article 16', 'equality of opportunity in public employ'], highYield: true },
      { id: 'art-17', name: 'Article 17 — Abolition of Untouchability', type: 'article', range: 'Art 17', cluster: 'Right to Equality', keywords: ['article 17', 'abolition of untouchability'] },
      { id: 'art-18', name: 'Article 18 — Abolition of titles', type: 'article', range: 'Art 18', cluster: 'Right to Equality', keywords: ['article 18', 'abolition of titles'] },
      { id: 'art-20', name: 'Article 20 — Protection in respect of conviction for offences', type: 'article', range: 'Art 20', cluster: 'Right to Freedom', keywords: ['article 20', 'protection in respect of conviction for '] },
      { id: 'art-21a', name: 'Article 21A — Right to education', type: 'article', range: 'Art 21A', cluster: 'Right to Freedom', keywords: ['article 21a', 'right to education'], highYield: true },
      { id: 'art-22', name: 'Article 22 — Protection against arrest and detention', type: 'article', range: 'Art 22', cluster: 'Right to Freedom', keywords: ['article 22', 'protection against arrest and detention'] },
      { id: 'art-23', name: 'Article 23 — Prohibition of traffic in human beings and forced labour', type: 'article', range: 'Art 23', cluster: 'Right against Exploitation', keywords: ['article 23', 'prohibition of traffic in human beings a'] },
      { id: 'art-24', name: 'Article 24 — Prohibition of employment of children in factories, etc.', type: 'article', range: 'Art 24', cluster: 'Right against Exploitation', keywords: ['article 24', 'prohibition of employment of children in'] },
      { id: 'art-25', name: 'Article 25 — Freedom of conscience and free profession, practice and propagation of religion', type: 'article', range: 'Art 25', cluster: 'Right to Freedom of Religion', keywords: ['article 25', 'freedom of conscience and free professio'] },
      { id: 'art-26', name: 'Article 26 — Freedom to manage religious affairs', type: 'article', range: 'Art 26', cluster: 'Right to Freedom of Religion', keywords: ['article 26', 'freedom to manage religious affairs'] },
      { id: 'art-27', name: 'Article 27 — Freedom as to payment of taxes for promotion of any particular religion', type: 'article', range: 'Art 27', cluster: 'Right to Freedom of Religion', keywords: ['article 27', 'freedom as to payment of taxes for promo'] },
      { id: 'art-28', name: 'Article 28 — Freedom as to attendance at religious instruction', type: 'article', range: 'Art 28', cluster: 'Right to Freedom of Religion', keywords: ['article 28', 'freedom as to attendance at religious in'] },
      { id: 'art-29', name: 'Article 29 — Protection of interests of minorities', type: 'article', range: 'Art 29', cluster: 'Cultural and Educational Rights', keywords: ['article 29', 'protection of interests of minorities'] },
      { id: 'art-30', name: 'Article 30 — Right of minorities to establish and administer educational institutions', type: 'article', range: 'Art 30', cluster: 'Cultural and Educational Rights', keywords: ['article 30', 'right of minorities to establish and adm'] },
      { id: 'art-32', name: 'Article 32 — Remedies for enforcement of rights conferred by this Part', type: 'article', range: 'Art 32', cluster: 'Right to Constitutional Remedies', keywords: ['article 32', 'remedies for enforcement of rights confe'], highYield: true },
      { id: 'art-33', name: 'Article 33 — Power of Parliament to modify rights in their application to armed forces, etc.', type: 'article', range: 'Art 33', cluster: 'Exceptions', keywords: ['article 33', 'power of parliament to modify rights in '] },
      { id: 'art-36', name: 'Article 36 — Definition of “the State” for Part IV', type: 'article', range: 'Art 36', cluster: 'Directive Principles', keywords: ['article 36', 'definition of “the state” for part iv'] },
      { id: 'art-37', name: 'Article 37 — Application of the Directive Principles', type: 'article', range: 'Art 37', cluster: 'Directive Principles', keywords: ['article 37', 'application of the directive principles'] },
      { id: 'art-38', name: 'Article 38 — State to secure a social order for the promotion of welfare of the people', type: 'article', range: 'Art 38', cluster: 'Socialistic', keywords: ['article 38', 'state to secure a social order for the p'] },
      { id: 'art-39', name: 'Article 39 — Certain principles of policy to be followed by the State', type: 'article', range: 'Art 39', cluster: 'Socialistic', keywords: ['article 39', 'certain principles of policy to be follo'] },
      { id: 'art-39a', name: 'Article 39A — Equal justice and free legal aid', type: 'article', range: 'Art 39A', cluster: 'Socialistic', keywords: ['article 39a', 'equal justice and free legal aid'] },
      { id: 'art-40', name: 'Article 40 — Organisation of village panchayats', type: 'article', range: 'Art 40', cluster: 'Gandhian', keywords: ['article 40', 'organisation of village panchayats'] },
      { id: 'art-41', name: 'Article 41 — Right to work, to education and to public assistance', type: 'article', range: 'Art 41', cluster: 'Socialistic', keywords: ['article 41', 'right to work, to education and to publi'] },
      { id: 'art-44', name: 'Article 44 — Uniform civil code for the citizens', type: 'article', range: 'Art 44', cluster: 'Liberal', keywords: ['article 44', 'uniform civil code for the citizens'] },
      { id: 'art-45', name: 'Article 45 — Provision for early childhood care and education', type: 'article', range: 'Art 45', cluster: 'Liberal', keywords: ['article 45', 'provision for early childhood care and e'] },
      { id: 'art-48a', name: 'Article 48A — Protection and improvement of environment and safeguarding of forests and wild life', type: 'article', range: 'Art 48A', cluster: 'Liberal', keywords: ['article 48a', 'protection and improvement of environmen'] },
      { id: 'art-50', name: 'Article 50 — Separation of judiciary from executive', type: 'article', range: 'Art 50', cluster: 'Liberal', keywords: ['article 50', 'separation of judiciary from executive'] },
      { id: 'art-51', name: 'Article 51 — Promotion of international peace and security', type: 'article', range: 'Art 51', cluster: 'Liberal', keywords: ['article 51', 'promotion of international peace and sec'] },
      { id: 'art-51a', name: 'Article 51A — Fundamental duties', type: 'article', range: 'Art 51A', cluster: 'Duties', keywords: ['article 51a', 'fundamental duties'] },
      { id: 'art-52', name: 'Article 52 — The President of India', type: 'article', range: 'Art 52', cluster: 'Union Executive', keywords: ['article 52', 'the president of india'] },
      { id: 'art-53', name: 'Article 53 — Executive power of the Union', type: 'article', range: 'Art 53', cluster: 'Union Executive', keywords: ['article 53', 'executive power of the union'] },
      { id: 'art-54', name: 'Article 54 — Election of President', type: 'article', range: 'Art 54', cluster: 'Union Executive', keywords: ['article 54', 'election of president'] },
      { id: 'art-61', name: 'Article 61 — Impeachment of the President', type: 'article', range: 'Art 61', cluster: 'Union Executive', keywords: ['article 61', 'impeachment of the president'] },
      { id: 'art-72', name: 'Article 72 — Power of the President to grant pardons, etc.', type: 'article', range: 'Art 72', cluster: 'Union Executive', keywords: ['article 72', 'power of the president to grant pardons,'] },
      { id: 'art-74', name: 'Article 74 — Council of Ministers to aid and advise the President', type: 'article', range: 'Art 74', cluster: 'Union Executive', keywords: ['article 74', 'council of ministers to aid and advise t'] },
      { id: 'art-75', name: 'Article 75 — Other provisions as to Ministers', type: 'article', range: 'Art 75', cluster: 'Union Executive', keywords: ['article 75', 'other provisions as to ministers'] },
      { id: 'art-76', name: 'Article 76 — Attorney-General for India', type: 'article', range: 'Art 76', cluster: 'Union Executive', keywords: ['article 76', 'attorney-general for india'] },
      { id: 'art-79', name: 'Article 79 — Constitution of Parliament', type: 'article', range: 'Art 79', cluster: 'Parliament', keywords: ['article 79', 'constitution of parliament'] },
      { id: 'art-80', name: 'Article 80 — Composition of the Council of States', type: 'article', range: 'Art 80', cluster: 'Parliament', keywords: ['article 80', 'composition of the council of states'] },
      { id: 'art-81', name: 'Article 81 — Composition of the House of the People', type: 'article', range: 'Art 81', cluster: 'Parliament', keywords: ['article 81', 'composition of the house of the people'] },
      { id: 'art-83', name: 'Article 83 — Duration of Houses of Parliament', type: 'article', range: 'Art 83', cluster: 'Parliament', keywords: ['article 83', 'duration of houses of parliament'] },
      { id: 'art-108', name: 'Article 108 — Joint sitting of both Houses', type: 'article', range: 'Art 108', cluster: 'Parliament', keywords: ['article 108', 'joint sitting of both houses'] },
      { id: 'art-110', name: 'Article 110 — Definition of “Money Bills”', type: 'article', range: 'Art 110', cluster: 'Parliament', keywords: ['article 110', 'definition of “money bills”'], highYield: true },
      { id: 'art-123', name: 'Article 123 — Power of President to promulgate Ordinances', type: 'article', range: 'Art 123', cluster: 'Parliament', keywords: ['article 123', 'power of president to promulgate ordinan'], highYield: true },
      { id: 'art-124', name: 'Article 124 — Establishment and constitution of the Supreme Court', type: 'article', range: 'Art 124', cluster: 'Union Judiciary', keywords: ['article 124', 'establishment and constitution of the su'], highYield: true },
      { id: 'art-131', name: 'Article 131 — Original jurisdiction of the Supreme Court', type: 'article', range: 'Art 131', cluster: 'Union Judiciary', keywords: ['article 131', 'original jurisdiction of the supreme cou'] },
      { id: 'art-132', name: 'Article 132 — Appellate jurisdiction in constitutional matters', type: 'article', range: 'Art 132', cluster: 'Union Judiciary', keywords: ['article 132', 'appellate jurisdiction in constitutional'] },
      { id: 'art-136', name: 'Article 136 — Special leave to appeal', type: 'article', range: 'Art 136', cluster: 'Union Judiciary', keywords: ['article 136', 'special leave to appeal'] },
      { id: 'art-141', name: 'Article 141 — Law declared by the Supreme Court to be binding', type: 'article', range: 'Art 141', cluster: 'Union Judiciary', keywords: ['article 141', 'law declared by the supreme court to be '] },
      { id: 'art-143', name: 'Article 143 — Power of President to consult the Supreme Court', type: 'article', range: 'Art 143', cluster: 'Union Judiciary', keywords: ['article 143', 'power of president to consult the suprem'] },
      { id: 'art-148', name: 'Article 148 — Comptroller and Auditor-General of India', type: 'article', range: 'Art 148', cluster: 'CAG', keywords: ['article 148', 'comptroller and auditor-general of india'] },
      { id: 'art-153', name: 'Article 153 — Governors of States', type: 'article', range: 'Art 153', cluster: 'State Executive', keywords: ['article 153', 'governors of states'] },
      { id: 'art-155', name: 'Article 155 — Appointment of Governor', type: 'article', range: 'Art 155', cluster: 'State Executive', keywords: ['article 155', 'appointment of governor'] },
      { id: 'art-163', name: 'Article 163 — Council of Ministers to aid and advise the Governor', type: 'article', range: 'Art 163', cluster: 'State Executive', keywords: ['article 163', 'council of ministers to aid and advise t'] },
      { id: 'art-168', name: 'Article 168 — Constitution of Legislatures in States', type: 'article', range: 'Art 168', cluster: 'State Legislature', keywords: ['article 168', 'constitution of legislatures in states'] },
      { id: 'art-200', name: 'Article 200 — Assent to Bills (Governor)', type: 'article', range: 'Art 200', cluster: 'State Legislature', keywords: ['article 200', 'assent to bills (governor)'] },
      { id: 'art-214', name: 'Article 214 — High Courts for States', type: 'article', range: 'Art 214', cluster: 'High Courts', keywords: ['article 214', 'high courts for states'] },
      { id: 'art-226', name: 'Article 226 — Power of High Courts to issue certain writs', type: 'article', range: 'Art 226', cluster: 'High Courts', keywords: ['article 226', 'power of high courts to issue certain wr'], highYield: true },
      { id: 'art-239', name: 'Article 239 — Administration of Union Territories', type: 'article', range: 'Art 239', cluster: 'Union Territories', keywords: ['article 239', 'administration of union territories'] },
      { id: 'art-239aa', name: 'Article 239AA — Special provisions with respect to Delhi', type: 'article', range: 'Art 239AA', cluster: 'Union Territories', keywords: ['article 239aa', 'special provisions with respect to delhi'] },
      { id: 'art-243', name: 'Article 243 — Definitions — Panchayats', type: 'article', range: 'Art 243', cluster: 'Panchayats', keywords: ['article 243', 'definitions — panchayats'] },
      { id: 'art-243a', name: 'Article 243A — Gram Sabha', type: 'article', range: 'Art 243A', cluster: 'Panchayats', keywords: ['article 243a', 'gram sabha'] },
      { id: 'art-243d', name: 'Article 243D — Reservation of seats in Panchayats', type: 'article', range: 'Art 243D', cluster: 'Panchayats', keywords: ['article 243d', 'reservation of seats in panchayats'] },
      { id: 'art-243g', name: 'Article 243G — Powers, authority and responsibilities of Panchayats', type: 'article', range: 'Art 243G', cluster: 'Panchayats', keywords: ['article 243g', 'powers, authority and responsibilities o'] },
      { id: 'art-243w', name: 'Article 243W — Powers, authority and responsibilities of Municipalities', type: 'article', range: 'Art 243W', cluster: 'Municipalities', keywords: ['article 243w', 'powers, authority and responsibilities o'] },
      { id: 'art-244', name: 'Article 244 — Administration of Scheduled Areas and Tribal Areas', type: 'article', range: 'Art 244', cluster: 'Scheduled Areas', keywords: ['article 244', 'administration of scheduled areas and tr'] },
      { id: 'art-245', name: 'Article 245 — Extent of laws made by Parliament and by the Legislatures of States', type: 'article', range: 'Art 245', cluster: 'Centre–State', keywords: ['article 245', 'extent of laws made by parliament and by'] },
      { id: 'art-246', name: 'Article 246 — Subject-matter of laws made by Parliament and by the Legislatures of States', type: 'article', range: 'Art 246', cluster: 'Centre–State', keywords: ['article 246', 'subject-matter of laws made by parliamen'] },
      { id: 'art-246a', name: 'Article 246A — Special provision with respect to goods and services tax', type: 'article', range: 'Art 246A', cluster: 'GST', keywords: ['article 246a', 'special provision with respect to goods '] },
      { id: 'art-254', name: 'Article 254 — Inconsistency between Union and State laws', type: 'article', range: 'Art 254', cluster: 'Centre–State', keywords: ['article 254', 'inconsistency between union and state la'] },
      { id: 'art-256', name: 'Article 256 — Obligation of States and the Union', type: 'article', range: 'Art 256', cluster: 'Centre–State', keywords: ['article 256', 'obligation of states and the union'] },
      { id: 'art-263', name: 'Article 263 — Inter-State Council', type: 'article', range: 'Art 263', cluster: 'Centre–State', keywords: ['article 263', 'inter-state council'] },
      { id: 'art-265', name: 'Article 265 — Taxes not to be imposed save by authority of law', type: 'article', range: 'Art 265', cluster: 'Finance', keywords: ['article 265', 'taxes not to be imposed save by authorit'] },
      { id: 'art-266', name: 'Article 266 — Consolidated Funds and public accounts of India and of the States', type: 'article', range: 'Art 266', cluster: 'Finance', keywords: ['article 266', 'consolidated funds and public accounts o'] },
      { id: 'art-269a', name: 'Article 269A — Levy and collection of goods and services tax in the course of inter-State trade', type: 'article', range: 'Art 269A', cluster: 'GST', keywords: ['article 269a', 'levy and collection of goods and service'] },
      { id: 'art-280', name: 'Article 280 — Finance Commission', type: 'article', range: 'Art 280', cluster: 'Finance', keywords: ['article 280', 'finance commission'] },
      { id: 'art-279a', name: 'Article 279A — Goods and Services Tax Council', type: 'article', range: 'Art 279A', cluster: 'GST', keywords: ['article 279a', 'goods and services tax council'] },
      { id: 'art-300a', name: 'Article 300A — Persons not to be deprived of property save by authority of law', type: 'article', range: 'Art 300A', cluster: 'Property', keywords: ['article 300a', 'persons not to be deprived of property s'] },
      { id: 'art-301', name: 'Article 301 — Freedom of trade, commerce and intercourse', type: 'article', range: 'Art 301', cluster: 'Trade', keywords: ['article 301', 'freedom of trade, commerce and intercour'] },
      { id: 'art-312', name: 'Article 312 — All-India Services', type: 'article', range: 'Art 312', cluster: 'Services', keywords: ['article 312', 'all-india services'] },
      { id: 'art-315', name: 'Article 315 — Public Service Commissions', type: 'article', range: 'Art 315', cluster: 'Services', keywords: ['article 315', 'public service commissions'] },
      { id: 'art-323a', name: 'Article 323A — Administrative tribunals', type: 'article', range: 'Art 323A', cluster: 'Tribunals', keywords: ['article 323a', 'administrative tribunals'] },
      { id: 'art-323b', name: 'Article 323B — Tribunals for other matters', type: 'article', range: 'Art 323B', cluster: 'Tribunals', keywords: ['article 323b', 'tribunals for other matters'] },
      { id: 'art-324', name: 'Article 324 — Superintendence, direction and control of elections', type: 'article', range: 'Art 324', cluster: 'Elections', keywords: ['article 324', 'superintendence, direction and control o'] },
      { id: 'art-326', name: 'Article 326 — Elections to the House of the People and to the Legislative Assemblies of States to be on the basis of adult suffrage', type: 'article', range: 'Art 326', cluster: 'Elections', keywords: ['article 326', 'elections to the house of the people and'] },
      { id: 'art-329', name: 'Article 329 — Bar to interference by courts in electoral matters', type: 'article', range: 'Art 329', cluster: 'Elections', keywords: ['article 329', 'bar to interference by courts in elector'] },
      { id: 'art-330', name: 'Article 330 — Reservation of seats for SCs and STs in the House of the People', type: 'article', range: 'Art 330', cluster: 'Special classes', keywords: ['article 330', 'reservation of seats for scs and sts in '] },
      { id: 'art-330a', name: 'Article 330A — Reservation of seats for women in the House of the People', type: 'article', range: 'Art 330A', cluster: 'Women’s reservation', keywords: ['article 330a', 'reservation of seats for women in the ho'], highYield: true },
      { id: 'art-332', name: 'Article 332 — Reservation of seats for SCs and STs in the Legislative Assemblies of the States', type: 'article', range: 'Art 332', cluster: 'Special classes', keywords: ['article 332', 'reservation of seats for scs and sts in '] },
      { id: 'art-332a', name: 'Article 332A — Reservation of seats for women in the Legislative Assemblies of the States', type: 'article', range: 'Art 332A', cluster: 'Women’s reservation', keywords: ['article 332a', 'reservation of seats for women in the le'] },
      { id: 'art-334', name: 'Article 334 — Reservation of seats and special representation to cease after certain period', type: 'article', range: 'Art 334', cluster: 'Special classes', keywords: ['article 334', 'reservation of seats and special represe'] },
      { id: 'art-334a', name: 'Article 334A — Reservation of seats for women to cease after certain period', type: 'article', range: 'Art 334A', cluster: 'Women’s reservation', keywords: ['article 334a', 'reservation of seats for women to cease '] },
      { id: 'art-335', name: 'Article 335 — Claims of SCs and STs to services and posts', type: 'article', range: 'Art 335', cluster: 'Special classes', keywords: ['article 335', 'claims of scs and sts to services and po'] },
      { id: 'art-338', name: 'Article 338 — National Commission for Scheduled Castes', type: 'article', range: 'Art 338', cluster: 'Commissions', keywords: ['article 338', 'national commission for scheduled castes'] },
      { id: 'art-338a', name: 'Article 338A — National Commission for Scheduled Tribes', type: 'article', range: 'Art 338A', cluster: 'Commissions', keywords: ['article 338a', 'national commission for scheduled tribes'] },
      { id: 'art-338b', name: 'Article 338B — National Commission for Backward Classes', type: 'article', range: 'Art 338B', cluster: 'Commissions', keywords: ['article 338b', 'national commission for backward classes'] },
      { id: 'art-342', name: 'Article 342 — Scheduled Tribes', type: 'article', range: 'Art 342', cluster: 'Special classes', keywords: ['article 342', 'scheduled tribes'] },
      { id: 'art-342a', name: 'Article 342A — Socially and educationally backward classes', type: 'article', range: 'Art 342A', cluster: 'Special classes', keywords: ['article 342a', 'socially and educationally backward clas'] },
      { id: 'art-343', name: 'Article 343 — Official language of the Union', type: 'article', range: 'Art 343', cluster: 'Language', keywords: ['article 343', 'official language of the union'] },
      { id: 'art-352', name: 'Article 352 — Proclamation of Emergency (national)', type: 'article', range: 'Art 352', cluster: 'Emergency', keywords: ['article 352', 'proclamation of emergency (national)'], highYield: true },
      { id: 'art-356', name: 'Article 356 — Provisions in case of failure of constitutional machinery in States', type: 'article', range: 'Art 356', cluster: 'Emergency', keywords: ['article 356', 'provisions in case of failure of constit'], highYield: true },
      { id: 'art-359', name: 'Article 359 — Suspension of the enforcement of rights conferred by Part III during emergencies', type: 'article', range: 'Art 359', cluster: 'Emergency', keywords: ['article 359', 'suspension of the enforcement of rights '] },
      { id: 'art-360', name: 'Article 360 — Provisions as to financial emergency', type: 'article', range: 'Art 360', cluster: 'Emergency', keywords: ['article 360', 'provisions as to financial emergency'] },
      { id: 'art-361', name: 'Article 361 — Protection of President and Governors', type: 'article', range: 'Art 361', cluster: 'Miscellaneous', keywords: ['article 361', 'protection of president and governors'] },
      { id: 'art-368', name: 'Article 368 — Power of Parliament to amend the Constitution and procedure therefor', type: 'article', range: 'Art 368', cluster: 'Amendment', keywords: ['article 368', 'power of parliament to amend the constit'], highYield: true },
      { id: 'art-370', name: 'Article 370 — Temporary provisions with respect to the State of Jammu and Kashmir', type: 'article', range: 'Art 370', cluster: 'Special provisions', keywords: ['article 370', 'temporary provisions with respect to the'], highYield: true },
      { id: 'art-371a', name: 'Article 371A — Special provision with respect to the State of Nagaland', type: 'article', range: 'Art 371A', cluster: 'Special provisions', keywords: ['article 371a', 'special provision with respect to the st'] },
      { id: 'art-371g', name: 'Article 371G — Special provision with respect to the State of Mizoram', type: 'article', range: 'Art 371G', cluster: 'Special provisions', keywords: ['article 371g', 'special provision with respect to the st'] },
      { id: 'art-371j', name: 'Article 371J — Special provision with respect to the State of Karnataka', type: 'article', range: 'Art 371J', cluster: 'Special provisions', keywords: ['article 371j', 'special provision with respect to the st'] },
      { id: 'art-394a', name: 'Article 394A — Authoritative text in the Hindi language', type: 'article', range: 'Art 394A', cluster: 'Closing', keywords: ['article 394a', 'authoritative text in the hindi language'] },
      { id: 'art-395', name: 'Article 395 — Repeals', type: 'article', range: 'Art 395', cluster: 'Closing', keywords: ['article 395', 'repeals'] },
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
      { id: 'doctrine-speedy-trial', name: 'Doctrine of Speedy Trial', type: 'doctrine', note: 'Art 21; Hussainara Khatoon and later cases', keywords: ['speedy trial', 'hussainara'], highYield: true },
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
    description: 'Section-wise BNS 2023 study (358 sections, 20 chapters) with IPC mapping, through current law as of 1 July 2024 (s. 106(2) excepted).',
    keywords: ['bns', 'ipc', 'offences', 'murder', 'theft', 'criminal law', 'section 103', 'section 64'],
    icon: 'Shield',
    mcqSubjectKey: 'bns',
    topics: [
      { id: 'general-explanations', name: 'General Explanations & Definitions', type: 'chapter', note: 'Definitions, common intention, abetment, attempt', keywords: ['definitions', 'common intention'], highYield: true },
      { id: 'general-exceptions', name: 'General Exceptions', type: 'chapter', note: 'Private defence, necessity, insanity, intoxication', keywords: ['general exceptions', 'private defence'], highYield: true },
      { id: 'offences-body', name: 'Offences against the Human Body', type: 'theme', keywords: ['murder', 'culpable homicide', 'hurt'], highYield: true },
      { id: 'culpable-homicide-murder', name: 'Culpable Homicide & Murder', type: 'section', note: 'Classic distinction; high-frequency MCQs', keywords: ['murder', 'culpable homicide'], highYield: true },
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
    description: 'Relevancy, admissions, confessions, burden of proof, and documentary/digital evidence.',
    keywords: ['bsa', 'evidence', 'confession', 'admission', 'burden of proof'],
    icon: 'Search',
    mcqSubjectKey: 'bsa',
    topics: [
      { id: 'relevancy', name: 'Relevancy of Facts', type: 'theme', highYield: true, keywords: ['relevancy'] },
      { id: 'admissions-confessions', name: 'Admissions & Confessions', type: 'theme', highYield: true, keywords: ['admission', 'confession'] },
      { id: 'burden-proof', name: 'Burden of Proof', type: 'theme', highYield: true, keywords: ['burden of proof'] },
      { id: 'witnesses', name: 'Witnesses & Examination', type: 'theme', keywords: ['witness', 'examination'] },
      { id: 'documentary-digital', name: 'Documentary & Digital Evidence', type: 'theme', keywords: ['documentary evidence', 'electronic evidence'] },
      { id: 'doctrine-estoppel', name: 'Doctrine of Estoppel', type: 'doctrine', note: 'Estoppel under BSA / Evidence Act', keywords: ['estoppel'], highYield: true },
      { id: 'doctrine-res-gestae', name: 'Doctrine of Res Gestae', type: 'doctrine', note: 'Facts forming part of the same transaction', keywords: ['res gestae'], highYield: true },
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
    keywords: ['family law', 'hindu marriage', 'divorce', 'maintenance', 'succession'],
    icon: 'Users',
    mcqSubjectKey: 'family',
    topics: [
      { id: 'hindu-marriage', name: 'Hindu Marriage Act', type: 'act', highYield: true, keywords: ['hindu marriage', 'divorce'] },
      { id: 'hindu-succession', name: 'Hindu Succession', type: 'act', keywords: ['succession', 'coparcenary'] },
      { id: 'adoption-maintenance', name: 'Adoption & Maintenance', type: 'theme', keywords: ['adoption', 'maintenance'] },
      { id: 'muslim-law', name: 'Muslim Personal Law (essentials)', type: 'theme', keywords: ['muslim law', 'talaq'] },
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
      { id: 'tpa', name: 'Transfer of Property Act (essentials)', type: 'act', keywords: ['tpa', 'sale', 'mortgage'] },
      { id: 'ni-act', name: 'Negotiable Instruments Act', type: 'act', highYield: true, keywords: ['cheque', 'section 138'] },
      { id: 'doctrine-privity', name: 'Doctrine of Privity of Contract', type: 'doctrine', note: 'Only parties to a contract can sue; exceptions', keywords: ['privity'], highYield: true },
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
    description: 'Exam-oriented skeletons of common petitions and applications — writ petition, plaint, written statement, FIR, bail, PIL. Separate from subject-wise law topics.',
    keywords: ['petition format', 'drafting', 'plaint', 'writ petition', 'fir', 'bail application', 'pil', 'written statement'],
    icon: 'FilePen',
    topics: [
      { id: 'format-writ-petition', name: 'Writ Petition (Arts 32 & 226)', type: 'format', note: 'Skeleton + five writs; Art 32 vs 226', keywords: ['writ petition', 'habeas corpus', 'mandamus'], highYield: true },
      { id: 'format-pil', name: 'Public Interest Litigation (PIL)', type: 'format', note: 'PIL petition skeleton under Art 32 / 226', keywords: ['pil', 'locus standi'], highYield: true },
      { id: 'format-plaint', name: 'Plaint', type: 'format', note: 'Order VII CPC essentials; Order VII Rule 11', keywords: ['plaint', 'order 7'], highYield: true },
      { id: 'format-written-statement', name: 'Written Statement', type: 'format', note: 'Order VIII CPC; denial, set-off, counter-claim', keywords: ['written statement', 'order 8'], highYield: true },
      { id: 'format-fir', name: 'FIR', type: 'format', note: 'Essential contents of a First Information Report', keywords: ['fir', 'first information report'], highYield: true },
      { id: 'format-bail-application', name: 'Bail / Anticipatory Bail Application', type: 'format', note: 'Structure of regular and anticipatory bail applications', keywords: ['bail', 'anticipatory bail'], highYield: true },
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
      { id: 'strict-absolute', name: 'Strict & Absolute Liability', type: 'doctrine', note: 'Rylands v. Fletcher; M.C. Mehta absolute liability', keywords: ['strict liability', 'absolute liability'], highYield: true },
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
      { id: 'arbitration', name: 'Arbitration Act essentials', type: 'act', highYield: true, keywords: ['arbitration'] },
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
    description: 'Locus standi, PIL procedure, and landmark directions. (Petition skeleton is under Petition Formats.)',
    keywords: ['pil', 'public interest', 'locus standi'],
    icon: 'Megaphone',
    topics: [
      { id: 'locus', name: 'Locus Standi & PIL principles', type: 'theme', highYield: true, keywords: ['locus standi'] },
      { id: 'pil-procedure', name: 'PIL procedure & remedies', type: 'theme', keywords: ['pil procedure'] },
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
    keywords: ['labour', 'industrial disputes', 'strike'],
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
    keywords: ['administrative law', 'natural justice'],
    icon: 'Building2',
    topics: [
      { id: 'natural-justice', name: 'Principles of Natural Justice', type: 'theme', highYield: true, keywords: ['natural justice'] },
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
    keywords: ['company law', 'companies act'],
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
      { id: 'constitutional-env', name: 'Constitutional provisions', type: 'theme', keywords: ['article 48a'] },
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
    keywords: ['cyber', 'it act'],
    icon: 'Monitor',
    topics: [{ id: 'it-act', name: 'IT Act essentials', type: 'act', keywords: ['it act'] }],
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
    keywords: ['land acquisition', 'compensation'],
    icon: 'Map',
    topics: [{ id: 'acquisition-process', name: 'Acquisition process & compensation', type: 'theme', keywords: ['land acquisition'] }],
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
