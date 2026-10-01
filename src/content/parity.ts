/**
 * Dual-read / parity helpers for the legal-content migration.
 *
 * Compares a canonical TopicContentRecord (from coolnaveen99/legal-content)
 * with a legacy TopicContent body so we can prove the gateway mapping
 * preserves the learning surface before switching production reads.
 */

import type { TopicContent } from '../data/topics/topicTypes'
import type { TopicContentRecord } from './contentTypes'
import { canonicalTopicId } from './ContentRepository'
import { mapCanonicalTopicToLegacy } from './mapCanonicalTopic'

export interface ParityFieldResult {
  field: string
  ok: boolean
  detail?: string
}

export interface DualReadParityReport {
  subjectSlug: string
  topicId: string
  canonicalId: string
  canonicalStatus: string
  /** True when every required field check passed. */
  ok: boolean
  fields: ParityFieldResult[]
  /** Study-body length from the mapped canonical record. */
  mappedStudyLength: number
  /** Study-body length from the legacy record (0 if absent). */
  legacyStudyLength: number
}

const REQUIRED_LEGAL_MARKERS = [
  'Section 32',
  'Section 30',
  'may',
] as const

function normalize(text: string | undefined | null): string {
  if (!text) return ''
  return text.replace(/\s+/g, ' ').trim().toLowerCase()
}

function containsMarker(haystack: string, marker: string): boolean {
  return normalize(haystack).includes(normalize(marker))
}

/**
 * Build a dual-read parity report for one topic.
 *
 * - `canonical` is the published legal-content entity.
 * - `legacy` is the in-app TopicContent (file or synthesizer). May be null
 *   when the topic is canonical-only.
 */
export function buildDualReadParityReport(
  subjectSlug: string,
  topicId: string,
  canonical: TopicContentRecord,
  legacy: TopicContent | null,
): DualReadParityReport {
  const mapped = mapCanonicalTopicToLegacy(canonical)
  const mappedStudy = mapped.study || ''
  const legacyStudy =
    legacy?.study || legacy?.detailed || legacy?.short || legacy?.glance || ''

  const fields: ParityFieldResult[] = []

  // 1. Canonical identity (respects no-double-prefix rule)
  const expectedId = canonicalTopicId(subjectSlug, topicId)
  fields.push({
    field: 'canonical.id',
    ok: canonical.id === expectedId,
    detail: canonical.id === expectedId ? undefined : `expected ${expectedId}, got ${canonical.id}`,
  })

  fields.push({
    field: 'canonical.status',
    ok: canonical.status === 'published' || canonical.status === 'review-due',
    detail: `status=${canonical.status}`,
  })

  fields.push({
    field: 'canonical.entityType',
    ok: canonical.entityType === 'topic',
  })

  // 2. Mapped study body is non-empty and carries core legal markers
  fields.push({
    field: 'mapped.study.nonEmpty',
    ok: mappedStudy.trim().length > 40,
    detail: `length=${mappedStudy.length}`,
  })

  for (const marker of REQUIRED_LEGAL_MARKERS) {
    // Only enforce CPC s.32-style markers when the topic is that provision;
    // for other pilots, require at least a non-empty study body (above).
    if (subjectSlug === 'cpc' && (topicId === 's-32' || topicId === 'cpc-s-32')) {
      fields.push({
        field: `mapped.study.marker:${marker}`,
        ok: containsMarker(mappedStudy, marker),
      })
    }
  }

  // 3. Examples / hypotheticals survive mapping when present on canonical
  const canonicalExamples = Array.isArray(canonical.content?.examples)
    ? canonical.content.examples
    : []
  if (canonicalExamples.length > 0) {
    fields.push({
      field: 'mapped.examples.count',
      ok: (mapped.examples?.length ?? 0) >= canonicalExamples.length,
      detail: `canonical=${canonicalExamples.length} mapped=${mapped.examples?.length ?? 0}`,
    })
  }

  const canonicalHypos = Array.isArray(canonical.content?.hypotheticals)
    ? canonical.content.hypotheticals
    : []
  if (canonicalHypos.length > 0) {
    fields.push({
      field: 'mapped.hypotheticals.count',
      ok: (mapped.hypotheticals?.length ?? 0) >= canonicalHypos.length,
      detail: `canonical=${canonicalHypos.length} mapped=${mapped.hypotheticals?.length ?? 0}`,
    })
  }

  // 4. Dual-read overlap: when both sides exist, share at least one distinctive phrase
  if (legacyStudy.trim().length > 40) {
    const legacySnippet = legacyStudy
      .split(/[.\n]/)
      .map((s) => s.trim())
      .find((s) => s.length > 30 && /section|summons|penalty|default|witness/i.test(s))

    if (legacySnippet) {
      const overlap = containsMarker(mappedStudy, legacySnippet.slice(0, 48))
      fields.push({
        field: 'dualRead.sharedPhrase',
        ok: overlap,
        detail: overlap
          ? undefined
          : `legacy phrase not found in mapped study: "${legacySnippet.slice(0, 48)}…"`,
      })
    } else {
      fields.push({
        field: 'dualRead.sharedPhrase',
        ok: true,
        detail: 'no distinctive legacy phrase to compare; skipped',
      })
    }
  }

  // 5. Related topics (canonical IDs only)
  const related = canonical.content?.relatedTopics
  if (Array.isArray(related) && related.length > 0) {
    const allCanonical = related.every(
      (id) => typeof id === 'string' && id.startsWith('topic:'),
    )
    fields.push({
      field: 'canonical.relatedTopics.shape',
      ok: allCanonical,
      detail: allCanonical ? undefined : 'relatedTopics must be canonical topic: IDs',
    })
  }

  return {
    subjectSlug,
    topicId,
    canonicalId: canonical.id,
    canonicalStatus: canonical.status,
    ok: fields.every((f) => f.ok),
    fields,
    mappedStudyLength: mappedStudy.length,
    legacyStudyLength: legacyStudy.length,
  }
}

/**
 * Assert-style helper for tests: throws with a readable list of failures.
 */
export function assertDualReadParity(report: DualReadParityReport): void {
  if (report.ok) return
  const failed = report.fields
    .filter((f) => !f.ok)
    .map((f) => `  - ${f.field}${f.detail ? ` (${f.detail})` : ''}`)
    .join('\n')
  throw new Error(
    `Dual-read parity failed for ${report.canonicalId}:\n${failed}`,
  )
}
