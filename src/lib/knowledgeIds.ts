/**
 * Phase 2 — stable identifier helpers for the legal knowledge graph.
 * Prefer these over display-name joins.
 */

export type KnowledgeEntityType =
  | 'ACT'
  | 'SECTION'
  | 'CASE'
  | 'DOCTRINE'
  | 'TOPIC'
  | 'MAXIM'
  | 'REMEDY'
  | 'LIMITATION'
  | 'SOURCE'

export function buildKnowledgeId(
  type: KnowledgeEntityType,
  category: string,
  slug: string,
): string {
  const cat = category.trim().toUpperCase().replace(/[^A-Z0-9]+/g, '_')
  const s = slug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return `${type}:${cat}:${s}`
}

export function parseKnowledgeId(id: string): {
  type: string
  category: string
  slug: string
} | null {
  const parts = id.split(':')
  if (parts.length < 3) return null
  const [type, category, ...rest] = parts
  return { type, category, slug: rest.join(':') }
}

/** Examples used across UI docs */
export const KNOWLEDGE_ID_EXAMPLES = {
  bnssAct: 'ACT:BNSS:2023',
  bnssBail: 'SECTION:BNSS:480',
  basicStructure: 'DOCTRINE:CONSTITUTION:basic-structure',
} as const
