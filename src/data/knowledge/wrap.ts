import { AMENDMENTS } from '../constitution/amendments'
import { ARTICLES, articleTopicId } from '../constitution/articles'
import { CASES } from '../constitution/cases'
import { SUBJECTS } from '../subjects'
import {
  IDS,
  amendmentEntityId,
  articleEntityId,
  caseEntityId,
  partEntityId,
  topicEntityId,
} from './ids'
import type { CanonicalEntity } from './types'

const CASE_ALIASES: Record<string, string[]> = {
  kesavananda: [
    'Kesavananda Bharati',
    'Kesavananda Bharati case',
    'Kesavananda Bharati v State of Kerala',
    'Kesavananda Bharati judgment',
    'Kesavananda',
  ],
  maneka: ['Maneka Gandhi', 'Maneka Gandhi v Union of India', 'Maneka Gandhi case'],
  golaknath: ['Golaknath', 'I.C. Golaknath', 'Golak Nath'],
  'minerva-mills': ['Minerva Mills', 'Minerva Mills v Union of India'],
  bommai: ['S.R. Bommai', 'Bommai', 'SR Bommai'],
  puttaswamy: ['Puttaswamy', 'right to privacy case', 'K.S. Puttaswamy'],
  coelho: ['I.R. Coelho', 'IR Coelho', 'Ninth Schedule case'],
  njac: ['NJAC', 'NJAC case', 'Fourth Judges Case'],
  'indra-sawhney': ['Indra Sawhney', 'Mandal case', 'Mandal Commission case'],
  navtej: ['Navtej Singh Johar', 'Section 377 case'],
  'article-370': ['Article 370 case', 'In Re Article 370'],
  'electoral-bonds': ['Electoral bonds case', 'ADR electoral bonds'],
  'raj-narain': ['Indira Gandhi v Raj Narain', 'Raj Narain case'],
  'shankari-prasad': ['Shankari Prasad'],
  'sajjan-singh': ['Sajjan Singh'],
  'waman-rao': ['Waman Rao'],
  kihoto: ['Kihoto Hollohan', 'anti-defection case'],
  vishaka: ['Vishaka', 'Vishaka guidelines'],
  nagaraaj: ['M. Nagaraj', 'Nagaraj'],
  janhit: ['Janhit Abhiyan', 'EWS case', '103rd Amendment case'],
}

function kebab(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

/** Existing study pages that should be the primary href for canonical entities. */
export const PRIMARY_HREF: Record<string, string> = {
  [IDS.basicStructure]: '/subjects/constitution/basic-structure',
  [IDS.eclipse]: '/subjects/constitution/doctrine-eclipse',
  [IDS.severability]: '/subjects/constitution/doctrine-severability',
  [IDS.pith]: '/subjects/constitution/doctrine-pith-substance',
  [IDS.colourable]: '/subjects/constitution/doctrine-colourable-legislation',
  [IDS.topicFR]: '/subjects/constitution/fundamental-rights',
  [IDS.topicDPSP]: '/subjects/constitution/dpsp',
  [IDS.topicAmendment]: '/subjects/constitution/amendment',
  [IDS.procAmendment]: '/subjects/constitution/amendment',
}

const SKIP_TOPIC_IDS = new Set([
  'fundamental-rights',
  'dpsp',
  'amendment',
  'basic-structure',
  'doctrine-eclipse',
  'doctrine-severability',
  'doctrine-pith-substance',
  'doctrine-colourable-legislation',
])

export function wrapArticles(): CanonicalEntity[] {
  return ARTICLES.map((a) => ({
    id: articleEntityId(a.id),
    type: 'ARTICLE' as const,
    category: 'CONSTITUTION',
    slug: `ARTICLE-${a.id.toUpperCase()}`,
    title: `Article ${a.id} — ${a.title}`,
    summary: a.note ?? a.text,
    tags: [
      'constitution',
      `article-${a.id.toLowerCase()}`,
      `part-${a.part}`,
      ...(a.cluster ? [kebab(a.cluster)] : []),
    ],
    aliases: [`article ${a.id}`, `art. ${a.id}`, `art ${a.id}`, a.title],
    href: `/subjects/constitution/${articleTopicId(a.id)}`,
    origin: 'wrapped' as const,
    parent: a.part === 'iii' ? IDS.topicFR : a.part === 'iv' ? IDS.topicDPSP : undefined,
  }))
}

export function wrapCases(): CanonicalEntity[] {
  return CASES.map((c) => {
    const id = caseEntityId(c.id)
    return {
      id,
      type: 'CASE' as const,
      category: 'CONSTITUTIONAL-LAW',
      slug: id.split(':')[2] ?? c.id.toUpperCase(),
      title: c.name,
      summary: c.holding,
      tags: ['constitutional-law', ...c.tags.map(kebab), ...c.articles.map((art) => `article-${art.toLowerCase()}`)],
      aliases: CASE_ALIASES[c.id] ?? [c.name],
      origin: 'wrapped' as const,
      sources: [{ title: c.name, citation: c.citation, kind: 'primary' as const }],
    }
  })
}

export function wrapAmendments(): CanonicalEntity[] {
  return AMENDMENTS.map((a) => ({
    id: amendmentEntityId(a.n),
    type: 'STATUTE' as const,
    category: 'CONSTITUTION',
    slug: `AMENDMENT-${a.n}`,
    title: `${a.n}th Constitutional Amendment — ${a.title}`,
    summary: a.summary,
    tags: ['constitutional-amendment', `amendment-${a.n}`, ...a.tags.map(kebab)],
    aliases: [`${a.n}th amendment`, `${a.n}th constitutional amendment`, a.title],
    origin: 'wrapped' as const,
  }))
}

export function wrapConstitutionTopics(): CanonicalEntity[] {
  const constitution = SUBJECTS.find((s) => s.slug === 'constitution')
  if (!constitution) return []
  return constitution.topics
    .filter((t) => t.type !== 'article' && !SKIP_TOPIC_IDS.has(t.id))
    .map((t) => ({
      id: topicEntityId(t.id),
      type: 'TOPIC' as const,
      category: 'CONSTITUTIONAL-LAW',
      slug: t.id.toUpperCase().replace(/[^A-Z0-9]+/g, '-'),
      title: t.name,
      summary: t.note ?? t.name,
      tags: ['constitutional-law', kebab(t.name), ...(t.keywords ?? []).map(kebab)],
      aliases: [t.name, ...(t.keywords ?? [])],
      href: `/subjects/constitution/${t.id}`,
      origin: 'wrapped' as const,
    }))
}

export function wrapParts(): CanonicalEntity[] {
  const parts: Array<{ roman: string; title: string; summary: string }> = [
    { roman: 'III', title: 'Fundamental Rights', summary: 'Justiciable rights against the State in Part III (Articles 12–35).' },
    { roman: 'IV', title: 'Directive Principles of State Policy', summary: 'Part IV — fundamental in governance, not enforceable in court.' },
  ]
  return parts.map((p) => ({
    id: partEntityId(p.roman),
    type: 'TOPIC' as const,
    category: 'CONSTITUTION',
    slug: `PART-${p.roman}`,
    title: `Part ${p.roman} — ${p.title}`,
    summary: p.summary,
    tags: ['constitution', `part-${p.roman.toLowerCase()}`, kebab(p.title)],
    aliases: [`part ${p.roman}`, p.title],
    href: p.roman === 'III' ? '/subjects/constitution/fundamental-rights' : '/subjects/constitution/dpsp',
    origin: 'wrapped' as const,
  }))
}

export function applyPrimaryHrefs(entities: CanonicalEntity[]): CanonicalEntity[] {
  return entities.map((e) => {
    const href = e.href ?? PRIMARY_HREF[e.id]
    return href && href !== e.href ? { ...e, href } : e
  })
}

export function wrapAll(): CanonicalEntity[] {
  return applyPrimaryHrefs([
    ...wrapArticles(),
    ...wrapCases(),
    ...wrapAmendments(),
    ...wrapConstitutionTopics(),
    ...wrapParts(),
  ])
}
