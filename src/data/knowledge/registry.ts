import { articleEntityId, bnsSectionEntityId, encodeKnowledgeId, ID_RE, topicEntityId } from './ids'
import { IDS } from './ids'
import { BNS_KNOWLEDGE } from './bns'
import { BNSS_KNOWLEDGE } from './bnss'
import { BSA_KNOWLEDGE } from './bsa'
import { CONCEPTS } from './concepts'
import { DEFINITIONS } from './definitions'
import { DOCTRINES } from './doctrines'
import { HUB_TOPICS } from './hub-topics'
import { MAXIMS } from './maxims'
import { PRINCIPLES } from './principles'
import { PROCEDURES } from './procedures'
import { allRelations } from './relationships'
import type {
  CanonicalEntity,
  KnowledgeRelation,
  KnowledgeType,
  RelatedLink,
} from './types'
import { HUB_TYPES, KNOWLEDGE_TYPES, RELATION_KINDS } from './types'
import { applyPrimaryHrefs, wrapAll } from './wrap'

export { HUB_TYPES }

const REF_RE = /\[\[REF:([^\]|]+)(?:\|[^\]]+)?\]\]/g
const GENERIC_TAGS = new Set(['law', 'legal', 'important', 'topic', 'study', 'case'])

const CANONICAL: CanonicalEntity[] = applyPrimaryHrefs([
  ...HUB_TOPICS,
  ...DOCTRINES,
  ...CONCEPTS,
  ...DEFINITIONS,
  ...MAXIMS,
  ...PRINCIPLES,
  ...PROCEDURES,
  ...BNS_KNOWLEDGE,
  ...BNSS_KNOWLEDGE,
  ...BSA_KNOWLEDGE,
])

const ENTITIES: CanonicalEntity[] = [...CANONICAL, ...wrapAll()]
const RELATIONS: KnowledgeRelation[] = allRelations()

const BY_ID = new Map<string, CanonicalEntity>()
for (const e of ENTITIES) BY_ID.set(e.id, e)

const REL_FROM = new Map<string, KnowledgeRelation[]>()
const REL_TO = new Map<string, KnowledgeRelation[]>()
for (const r of RELATIONS) {
  const from = REL_FROM.get(r.from)
  if (from) from.push(r)
  else REL_FROM.set(r.from, [r])
  const to = REL_TO.get(r.to)
  if (to) to.push(r)
  else REL_TO.set(r.to, [r])
}

export function validateKnowledge(): string[] {
  const errors: string[] = []
  const typeSet = new Set<string>(KNOWLEDGE_TYPES)
  const kindSet = new Set<string>(RELATION_KINDS)

  for (const e of ENTITIES) {
    if (!ID_RE.test(e.id)) errors.push(`Invalid ID: ${e.id}`)
    if (!typeSet.has(e.type)) errors.push(`Invalid type on ${e.id}: ${e.type}`)
    const expected = `${e.type}:${e.category}:${e.slug}`
    if (e.id !== expected) errors.push(`ID/slug mismatch: ${e.id} vs ${expected}`)
    if (!e.title.trim()) errors.push(`Missing title: ${e.id}`)
    if (!e.summary.trim()) errors.push(`Missing summary: ${e.id}`)
    if (e.tags.some((t) => GENERIC_TAGS.has(t))) errors.push(`Generic tag on ${e.id}`)
    if (e.parent && !BY_ID.has(e.parent)) errors.push(`Missing parent ${e.parent} on ${e.id}`)
    if (e.explanation) {
      REF_RE.lastIndex = 0
      for (const match of e.explanation.matchAll(REF_RE)) {
        const ref = match[1]
        if (ref && !BY_ID.has(ref)) errors.push(`Broken REF ${ref} in ${e.id}`)
      }
    }
  }

  const seen = new Set<string>()
  for (const e of ENTITIES) {
    if (seen.has(e.id)) errors.push(`Duplicate ID: ${e.id}`)
    seen.add(e.id)
  }

  for (const r of RELATIONS) {
    if (!kindSet.has(r.kind)) errors.push(`Invalid relation kind ${r.kind} on ${r.from} → ${r.to}`)
    if (!BY_ID.has(r.from)) errors.push(`Broken from: ${r.from}`)
    if (!BY_ID.has(r.to)) errors.push(`Broken to: ${r.to}`)
    if (r.from === r.to) errors.push(`Self-relation on ${r.from}`)
  }

  return errors
}

const VALIDATION = validateKnowledge()
if (VALIDATION.length > 0) {
  throw new Error(`Knowledge graph validation failed:\n${VALIDATION.slice(0, 20).join('\n')}`)
}

export function allEntities(): CanonicalEntity[] {
  return ENTITIES
}

export function canonicalEntities(): CanonicalEntity[] {
  return CANONICAL
}

export function getEntity(id: string): CanonicalEntity | undefined {
  return BY_ID.get(id)
}

export function hrefFor(entity: CanonicalEntity): string {
  if (entity.href) return entity.href
  return `/knowledge/${encodeKnowledgeId(entity.id)}`
}

export function getRelated(
  id: string,
  opts: { types?: KnowledgeType[]; limit?: number } = {},
): RelatedLink[] {
  const out: RelatedLink[] = []
  const seen = new Set<string>()
  for (const r of REL_FROM.get(id) ?? []) {
    const entity = BY_ID.get(r.to)
    if (!entity) continue
    if (opts.types && !opts.types.includes(entity.type)) continue
    if (seen.has(entity.id)) continue
    seen.add(entity.id)
    out.push({ entity, kind: r.kind, direction: 'out', context: r.context })
  }
  for (const r of REL_TO.get(id) ?? []) {
    const entity = BY_ID.get(r.from)
    if (!entity) continue
    if (opts.types && !opts.types.includes(entity.type)) continue
    if (seen.has(entity.id)) continue
    seen.add(entity.id)
    out.push({ entity, kind: r.kind, direction: 'in', context: r.context })
  }
  return opts.limit ? out.slice(0, opts.limit) : out
}

export function entitiesByType(type: KnowledgeType): CanonicalEntity[] {
  return ENTITIES.filter((e) => e.type === type)
}

export function hubEntities(): CanonicalEntity[] {
  return CANONICAL.filter((e) => HUB_TYPES.includes(e.type) || e.type === 'TOPIC')
}

export function allTags(): string[] {
  const tags = new Set<string>()
  for (const e of CANONICAL) {
    for (const t of e.tags) tags.add(t)
  }
  return [...tags].sort()
}

/** Search-before-create: title, aliases, IDs, citations, tags. */
export function findExisting(query: string, limit = 12): CanonicalEntity[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const scored: Array<{ e: CanonicalEntity; s: number }> = []
  for (const e of ENTITIES) {
    let s = 0
    if (e.id.toLowerCase() === q || e.id.toLowerCase().endsWith(`:${q}`)) s = 100
    else if (e.title.toLowerCase() === q) s = 90
    else if (e.aliases?.some((a) => a.toLowerCase() === q)) s = 85
    else if (e.title.toLowerCase().includes(q)) s = 50
    else if (e.aliases?.some((a) => a.toLowerCase().includes(q))) s = 40
    else if (e.summary.toLowerCase().includes(q)) s = 20
    else if (e.tags.some((t) => t.toLowerCase().includes(q))) s = 15
    if (s) scored.push({ e, s })
  }
  scored.sort((a, b) => b.s - a.s)
  return scored.slice(0, limit).map((x) => x.e)
}

export function parseRefs(text: string): Array<{ id: string; label?: string; start: number; end: number }> {
  const out: Array<{ id: string; label?: string; start: number; end: number }> = []
  const re = /\[\[REF:([^\]|]+)(?:\|([^\]]+))?\]\]/g
  let match: RegExpExecArray | null
  while ((match = re.exec(text))) {
    out.push({
      id: match[1] ?? '',
      label: match[2],
      start: match.index,
      end: match.index + match[0].length,
    })
  }
  return out
}

const TOPIC_KNOWLEDGE_ID: Record<string, string> = {
  'basic-structure': IDS.basicStructure,
  'doctrine-eclipse': IDS.eclipse,
  'doctrine-severability': IDS.severability,
  'doctrine-pith-substance': IDS.pith,
  'doctrine-colourable-legislation': IDS.colourable,
  'fundamental-rights': IDS.topicFR,
  dpsp: IDS.topicDPSP,
  amendment: IDS.topicAmendment,
}

const BNS_TOPIC_KNOWLEDGE_ID: Record<string, string> = {
  'doctrine-common-intention': IDS.commonIntention,
  'doctrine-mens-rea': IDS.mensRea,
  'culpable-homicide-murder': IDS.culpableHomicide,
  'general-exceptions': IDS.privateDefence,
  'bns-ipc-map': IDS.procIpcToBns,
}

const BSA_TOPIC_KNOWLEDGE_ID: Record<string, string> = {
  'doctrine-res-gestae': 'DOCTRINE:EVIDENCE-LAW:RES-GESTAE',
  'doctrine-estoppel': 'DOCTRINE:EVIDENCE-LAW:ESTOPPEL',
  'burden-proof': 'CONCEPT:EVIDENCE-LAW:BURDEN-OF-PROOF',
  'documentary-digital': 'CONCEPT:EVIDENCE-LAW:ELECTRONIC-RECORD',
  relevancy: 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
  'admissions-confessions': 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
  witnesses: 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
}

const BNSS_TOPIC_KNOWLEDGE_ID: Record<string, string> = {
  'doctrine-speedy-trial': 'DOCTRINE:CRIMINAL-PROCEDURE:SPEEDY-TRIAL',
  'fir-investigation': 'CONCEPT:CRIMINAL-PROCEDURE:ZERO-FIR',
  arrest: 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
  bail: 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
  'charge-trial': 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
  'appeals-revision': 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
  'bnss-crpc-map': 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
}

export function knowledgeIdForTopic(subjectSlug: string, topicId: string): string | undefined {
  if (subjectSlug === 'constitution') {
    const mapped = TOPIC_KNOWLEDGE_ID[topicId]
    if (mapped) return mapped
    const articleMatch = topicId.match(/^art-(\d+[a-z]*)$/i)
    if (articleMatch?.[1]) return articleEntityId(articleMatch[1].toUpperCase())
    const wrapped = topicEntityId(topicId)
    if (BY_ID.has(wrapped)) return wrapped
  }
  if (subjectSlug === 'bns') {
    const mapped = BNS_TOPIC_KNOWLEDGE_ID[topicId]
    if (mapped) return mapped
    const sectionMatch = topicId.match(/^s-(\d+[a-z]*)$/i)
    if (sectionMatch?.[1]) return bnsSectionEntityId(sectionMatch[1])
  }
  if (subjectSlug === 'bsa') {
    return BSA_TOPIC_KNOWLEDGE_ID[topicId]
  }
  if (subjectSlug === 'bnss') {
    return BNSS_TOPIC_KNOWLEDGE_ID[topicId]
  }
  return undefined
}
