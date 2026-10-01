import type {
  ContentEntityType,
  ContentEnvelope,
  ContentManifest,
  ContentRepository as ContentRepositoryContract,
  RelationshipIndex,
  TopicContentRecord,
} from './contentTypes'

export type { ContentRepositoryContract as ContentRepository, TopicContentRecord }

/** App catalog slug → legal-content topics/ directory when they differ. */
const SUBJECT_DIR_ALIASES: Record<string, string[]> = {
  tort: ['torts', 'tort'],
  family: ['family', 'hma'],
}

/**
 * Build a stable legal-content topic id.
 *
 * Catalog topic ids are inconsistent across subjects:
 * - CPC / BNS style: topicId = `s-32` → `topic:india:cpc-s-32`
 * - PIL / doctrine style: topicId = `pil-locus-standi` → `topic:india:pil-locus-standi`
 *   (must NOT become `topic:india:pil-pil-locus-standi`)
 */
export function canonicalTopicId(subjectSlug: string, topicId: string): string {
  const local =
    topicId === subjectSlug || topicId.startsWith(`${subjectSlug}-`)
      ? topicId
      : `${subjectSlug}-${topicId}`
  return `topic:india:${local}`
}

/** Path segment candidates under topics/<dir>/ for a catalog topicId. */
export function topicFileIdCandidates(subjectSlug: string, topicId: string): string[] {
  const out: string[] = []
  const push = (v: string) => {
    if (v && !out.includes(v)) out.push(v)
  }
  push(topicId)
  if (topicId.startsWith(`${subjectSlug}-`)) {
    push(topicId.slice(subjectSlug.length + 1))
  } else {
    push(`${subjectSlug}-${topicId}`)
  }
  // Catalog ↔ canonical filename aliases (legal-content paths)
  if (subjectSlug === 'tort' || subjectSlug === 'torts') {
    if (topicId === 'tort-definition' || topicId === 'definition' || topicId === 'tort-nature-definition') {
      push('nature-definition')
    }
    if (topicId === 'nature-definition') {
      push('tort-definition')
    }
  }
  return out
}

function entityTypeFromId(id: string): ContentEntityType | null {
  const prefix = id.split(':')[0]
  const map: Record<string, ContentEntityType> = {
    topic: 'topic',
    provision: 'provision',
    judgment: 'judgment',
    doctrine: 'doctrine',
    comparison: 'comparison',
    illustration: 'illustration',
    source: 'source',
    collection: 'collection',
    'sanhita-mapping': 'sanhitaMapping',
    seo: 'seoRecord',
  }
  return map[prefix] ?? null
}

export class CanonicalContentRepository implements ContentRepositoryContract {
  private readonly baseUrl: string
  private manifestPromise: Promise<ContentManifest | null> | null = null
  private relationshipIndexPromise: Promise<RelationshipIndex | null> | null = null

  constructor(baseUrl = '/legal-content') {
    this.baseUrl = baseUrl.replace(/\/$/, '')
  }

  async getManifest(): Promise<ContentManifest | null> {
    if (!this.manifestPromise) {
      this.manifestPromise = this.fetchJson<ContentManifest>(`${this.baseUrl}/manifests/content-manifest.json`)
    }
    return this.manifestPromise
  }

  async getRelationshipIndex(): Promise<RelationshipIndex | null> {
    if (!this.relationshipIndexPromise) {
      this.relationshipIndexPromise = this.fetchJson<RelationshipIndex>(
        `${this.baseUrl}/manifests/relationship-index.json`,
      )
    }
    return this.relationshipIndexPromise
  }

  async get<T extends ContentEnvelope = ContentEnvelope>(
    entityType: ContentEntityType,
    id: string,
  ): Promise<T | null> {
    const manifest = await this.getManifest()
    if (manifest) {
      const entry = manifest.entities.find((item) => item.entityType === entityType && item.id === id)
      if (entry && (entry.status === 'published' || entry.status === 'review-due' || entry.status === 'archived')) {
        const record = await this.fetchJson<T>(`${this.baseUrl}/${entry.path.replace(/^\//, '')}`)
        if (record && record.status === 'published') return record
        if (record && entry.status === 'archived' && record.status === 'archived') return record
      }
    }
    return null
  }

  async getById<T extends ContentEnvelope = ContentEnvelope>(id: string): Promise<T | null> {
    const entityType = entityTypeFromId(id)
    if (!entityType) return null
    return this.get<T>(entityType, id)
  }

  async getOutboundRelations(id: string): Promise<Array<{ to: string; field: string }>> {
    const index = await this.getRelationshipIndex()
    if (index?.outbound?.[id]) {
      return index.outbound[id]
    }
    const entity = await this.getById(id)
    if (!entity) return []
    const edges: Array<{ to: string; field: string }> = []
    const push = (field: string, arr: unknown) => {
      if (!Array.isArray(arr)) return
      for (const item of arr) {
        if (typeof item === 'string' && item.includes(':')) edges.push({ to: item, field })
      }
    }
    push('sources', entity.sources)
    const c = entity.content || {}
    push('relatedTopics', c.relatedTopics)
    push('relatedJudgments', c.relatedJudgments)
    push('relatedProvisions', c.relatedProvisions)
    push('relatedDoctrines', c.relatedDoctrines)
    push('illustrations', c.illustrations)
    push('members', c.members)
    return edges
  }

  async getTopic(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
    const id = canonicalTopicId(subjectSlug, topicId)
    const fromManifest = await this.get<TopicContentRecord>('topic', id)
    if (fromManifest) return fromManifest

    const dirs = SUBJECT_DIR_ALIASES[subjectSlug] || [subjectSlug]
    const fileIds = topicFileIdCandidates(subjectSlug, topicId)
    for (const dir of dirs) {
      for (const fileId of fileIds) {
        const record = await this.fetchJson<TopicContentRecord>(
          `${this.baseUrl}/topics/${dir}/${fileId}.json`,
        )
        if (record && record.status === 'published' && record.id === id) return record
        // Accept published records whose id matches any legal candidate (alias tolerance)
        if (record && record.status === 'published' && typeof record.id === 'string' && record.id.startsWith('topic:india:')) {
          return record
        }
      }
    }
    return null
  }

  private async fetchJson<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url, { headers: { Accept: 'application/json' } })
      if (!response.ok) return null
      return (await response.json()) as T
    } catch {
      return null
    }
  }
}
