import type { ContentRepository, TopicContentRecord } from './ContentRepository'

export class LegacyTopicRepository implements ContentRepository {
  constructor(
    private readonly loader: (subjectSlug: string, topicId: string) => Promise<import('../data/topics/topicTypes').TopicContent | null>,
  ) {}

  async getTopic(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
    const content = await this.loader(subjectSlug, topicId)
    if (!content) return null

    return {
      schemaVersion: 'legacy',
      entityType: 'topic',
      id: `legacy-topic:${subjectSlug}:${topicId}`,
      version: 1,
      status: 'published',
      title: topicId,
      jurisdiction: 'India',
      content: content as unknown as TopicContentRecord['content'],
      sources: [],
      updatedAt: new Date(0).toISOString(),
    }
  }

  async getManifest() {
    return null
  }

  async get(entityType: import('./contentTypes').ContentEntityType, id: string) {
    if (entityType !== 'topic') return null
    const [, subjectSlug, topicId] = id.split(':')
    return this.getTopic(subjectSlug ?? '', topicId ?? '')
  }
}
