import { CanonicalContentRepository } from './ContentRepository'
import { getCanonicalContentBaseUrl } from './canonicalDelivery'
import { mapCanonicalTopicToLegacy } from './mapCanonicalTopic'
import type { ContentRepository, TopicContentRecord } from './ContentRepository'
import type { ContentEnvelope } from './contentTypes'
import type { TopicContent } from '../data/topics/topicTypes'

/** Retained in production bundles for PA-001 deploy verification. */
export const CONTENT_GATEWAY_DEPLOY_MARKER = 'cp-law-content-gateway-v1'

const canonicalRepository = new CanonicalContentRepository(getCanonicalContentBaseUrl())

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

function appendStudentEnhancement(mapped: TopicContent, canonical: ContentEnvelope): TopicContent {
  const enhancement = (canonical.content as { enhancement?: Record<string, unknown> } | undefined)?.enhancement
  if (!enhancement) return mapped
  const lines: string[] = []
  const objectives = enhancement.learningObjectives
  if (Array.isArray(objectives) && objectives.length) {
    lines.push('Learning objectives\n' + objectives.map((item) => `- ${String(item)}`).join('\n'))
  }
  if (typeof enhancement.definition === 'string' && enhancement.definition.trim()) {
    lines.push('Definition\n' + enhancement.definition.trim())
  }
  if (typeof enhancement.legalPrinciple === 'string' && enhancement.legalPrinciple.trim()) {
    lines.push('Legal principle\n' + enhancement.legalPrinciple.trim())
  }
  const ten = enhancement.tenMarkAnswer || enhancement.answer10 || enhancement.tenMarkStructure
  const sixteen = enhancement.sixteenMarkAnswer || enhancement.answer16 || enhancement.sixteenMarkStructure
  if (typeof ten === 'string' && ten.trim()) lines.push('10-mark answer structure\n' + ten.trim())
  if (typeof sixteen === 'string' && sixteen.trim()) lines.push('16-mark answer structure\n' + sixteen.trim())
  if (!lines.length) return mapped
  const banner = 'Student enhancement (in progress, not verified). Check the bare Act and judgments before relying on this note.'
  return {
    ...mapped,
    study: [mapped.study, banner, ...lines].filter(Boolean).join('\n\n'),
  }
}

function stampDeployMarker(): void {
  if (typeof document === 'undefined') return
  try {
    document.documentElement.dataset.cpGateway = CONTENT_GATEWAY_DEPLOY_MARKER
  } catch {
    // ignore non-DOM environments
  }
}

const STUDENT_REVIEW_SUBJECTS = new Set(['constitution', 'bns', 'bnss', 'bsa'])

function isDeliverable(subjectSlug: string, status: string | undefined): boolean {
  if (status === 'published') return true
  return status === 'review' && STUDENT_REVIEW_SUBJECTS.has(subjectSlug)
}

export async function getTopicContent(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null> {
  stampDeployMarker()
  const canonical = await repository.getTopic(subjectSlug, topicId)
  if (canonical && isDeliverable(subjectSlug, canonical.status)) {
    // Use normalized legacy-shaped content only so TopicDetail never sees
    // canonical-only shapes (heading/body sections, example.body, etc.).
    const mapped = mapCanonicalTopicToLegacy(canonical)
    const withEnhancement = appendStudentEnhancement(mapped, canonical)
    return {
      ...canonical,
      content: withEnhancement as TopicContentRecord['content'],
    }
  }
  return null
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
