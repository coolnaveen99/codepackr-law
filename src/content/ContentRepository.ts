import type {
  ContentEntityType,
  ContentEnvelope,
  ContentManifest,
  ContentRepository as ContentRepositoryContract,
  TopicContentRecord,
} from './contentTypes'

export type { ContentRepositoryContract as ContentRepository }

export function canonicalTopicId(subjectSlug: string, topicId: string): string {
  return `topic:india:${subjectSlug}-${topicId}`
}

export class CanonicalContentRepository implements ContentRepositoryContract {
  private readonly baseUrl: string
  private manifestPromise: Promise<ContentManifest | null> | null = null

  constructor(baseUrl = '/legal-content') {
    this.baseUrl = baseUrl.replace(/\/$/, '')
  }

  async getManifest(): Promise<ContentManifest | null> {
    if (!this.manifestPromise) {
      this.manifestPromise = this.fetchJson<ContentManifest>(`${this.baseUrl}/manifests/content-manifest.json`)
    }
    return this.manifestPromise
  }

  async get<T extends ContentEnvelope = ContentEnvelope>(
    entityType: ContentEntityType,
    id: string,
  ): Promise<T | null> {
    const manifest = await this.getManifest()
    if (!manifest) return null
    const entry = manifest.entities.find((item) => item.entityType === entityType && item.id === id)
    if (!entry || entry.status !== 'published') return null
    const record = await this.fetchJson<T>(`${this.baseUrl}/${entry.path.replace(/^\//, '')}`)
    if (!record || record.status !== 'published') return null
    return record
  }

  async getTopic(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
    return this.get<TopicContentRecord>('topic', canonicalTopicId(subjectSlug, topicId))
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
