import { CanonicalContentRepository } from './ContentRepository'
import { LegacyTopicRepository } from './LegacyTopicRepository'
import { loadTopicContent } from '../data/topics/loadTopicContent'
import { mapCanonicalTopicToLegacy } from './mapCanonicalTopic'
import type { ContentRepository, TopicContentRecord } from './ContentRepository'
import type { ContentEnvelope } from './contentTypes'
import type { TopicContent } from '../data/topics/topicTypes'

/** Retained in production bundles for PA-001 deploy verification. */
export const CONTENT_GATEWAY_DEPLOY_MARKER = 'cp-law-content-gateway-v1'

const DEFAULT_LEGAL_CONTENT_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_LEGAL_CONTENT_BASE_URL) ||
  (typeof process !== 'undefined' &&
    (process.env?.VITE_LEGAL_CONTENT_BASE_URL || process.env?.LEGAL_CONTENT_BASE_URL)) ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'

const canonicalRepository = new CanonicalContentRepository(DEFAULT_LEGAL_CONTENT_BASE)

const legacyRepository = new LegacyTopicRepository(loadTopicContent)

let repository: ContentRepository = canonicalRepository

export function configureContentRepository(next: ContentRepository): void {
  repository = next
}

export function getContentRepository(): ContentRepository {
  return repository
}

export function getContentGatewayDeployMarker(): string {
  return CONTENT_GATEWAY_DEPLOY_MARKER
}

function stampDeployMarker(): void {
  if (typeof document === 'undefined') return
  try {
    document.documentElement.dataset.cpGateway = CONTENT_GATEWAY_DEPLOY_MARKER
  } catch {
    // ignore non-DOM environments
  }
}

export async function getTopicContent(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
  stampDeployMarker()
  const canonical = await repository.getTopic(subjectSlug, topicId)
  if (canonical && canonical.status === 'published') {
    // Use normalized legacy-shaped content only so TopicDetail never sees
    // canonical-only shapes (heading/body sections, example.body, etc.).
    const mapped = mapCanonicalTopicToLegacy(canonical)
    return {
      ...canonical,
      content: mapped as TopicContentRecord['content'],
    }
  }
  return legacyRepository.getTopic(subjectSlug, topicId)
}

export async function getLegacyCompatibleTopic(subjectSlug: string, topicId: string): Promise<TopicContent | null> {
  const record = await getTopicContent(subjectSlug, topicId)
  if (!record) return null
  return mapCanonicalTopicToLegacy(record)
}

/** Resolve a published canonical entity by immutable ID (manifest path). */
export async function getCanonicalEntity(id: string): Promise<ContentEnvelope | null> {
  if (typeof repository.getById === 'function') {
    return repository.getById(id)
  }
  return null
}

/**
 * Knowledge-graph edges for an entity.
 * Prefer relationship-index when deployed; otherwise read relation fields from the entity body.
 */
export async function getRelatedEntityIds(
  id: string,
  field?: string,
): Promise<Array<{ to: string; field: string }>> {
  if (typeof repository.getOutboundRelations !== 'function') return []
  const edges = await repository.getOutboundRelations(id)
  if (!field) return edges
  return edges.filter((e) => e.field === field)
}

/** Convenience: relatedTopics IDs only. */
export async function getRelatedTopicIds(id: string): Promise<string[]> {
  const edges = await getRelatedEntityIds(id, 'relatedTopics')
  return edges.map((e) => e.to)
}

export {
  suggestAuthorities,
  authorityRowFromSuggestion,
  inferSubjectSlug,
  normalizeSectionCandidates,
  type AuthoritySuggestion,
  type SuggestAuthoritiesQuery,
} from './suggestions'
