import type { ContentEntityType, ContentEnvelope, ContentManifest, ContentRepository as ContentRepositoryContract, TopicContentRecord } from './contentTypes'

export type { ContentRepositoryContract as ContentRepository }

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

    const entry = manifest.entities.find(
      (item) => item.entityType === entityType && item.id === id && item.status === 'published',
    )
    if (!entry) return null

    return this.fetchJson<T>(`${this.baseUrl}/${entry.path.replace(/^\//, '')}`)
  }

  async getTopic(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
    const id = `topic:india:${subjectSlug}-${topicId}`
    return this.get<TopicContentRecord>('topic', id)
  }

  private async fetchJson<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url, {
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) return null
      return (await response.json()) as T
    } catch {
      return null
    }
  }
}
