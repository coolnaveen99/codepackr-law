import { CanonicalContentRepository } from './ContentRepository'
import { LegacyTopicRepository } from './LegacyTopicRepository'
import { loadTopicContent } from '../data/topics/loadTopicContent'
import type { ContentRepository, TopicContentRecord } from './ContentRepository'

const canonicalRepository = new CanonicalContentRepository(
  import.meta.env.VITE_LEGAL_CONTENT_BASE_URL || '/legal-content',
)

const legacyRepository = new LegacyTopicRepository(loadTopicContent)

let repository: ContentRepository = canonicalRepository

export function configureContentRepository(next: ContentRepository): void {
  repository = next
}

export async function getTopicContent(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
  const canonical = await repository.getTopic(subjectSlug, topicId)
  if (canonical) return canonical

  return legacyRepository.getTopic(subjectSlug, topicId)
}

export function getContentRepository(): ContentRepository {
  return repository
}
