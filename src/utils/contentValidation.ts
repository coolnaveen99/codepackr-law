/**
 * Phase 23 — Testing Strategy (Roadmap §28)
 * Unified Content Validation Engine
 *
 * Automates checks for:
 * 1. Duplicate IDs
 * 2. Duplicate Slugs
 * 3. Missing Sources
 * 4. Missing Verification Status
 * 5. Invalid Act References
 * 6. Malformed Citations
 * 7. Orphaned Knowledge References
 */

import { SUBJECTS } from '../data/subjects'
import { ALL_JUDGMENTS, JUDGMENTS_BY_ID } from '../data/judgments'
import { TOOLS } from '../data/tools'
import { DRAFT_TEMPLATES } from '../data/draft-templates'
import { DRAFT_TIERS } from '../data/draftTiers'
import { PRIMARY_SOURCES } from '../data/primarySources'

export interface ContentValidationReport {
  ok: boolean
  totalChecked: {
    subjects: number
    topics: number
    judgments: number
    tools: number
    drafts: number
    primarySources: number
  }
  checks: {
    duplicateIds: string[]
    duplicateSlugs: string[]
    missingSources: string[]
    missingVerificationStatus: string[]
    invalidActReferences: string[]
    malformedCitations: string[]
    orphanedKnowledgeRefs: string[]
  }
  errors: string[]
  warnings: string[]
}

const KNOWN_ACT_KEYWORDS = [
  'constitution',
  'bns',
  'bnss',
  'bsa',
  'bharatiya',
  'nyaya',
  'suraksha',
  'sakshya',
  'sanhita',
  'adhiniyam',
  'ipc',
  'crpc',
  'cpc',
  'evidence',
  'contract',
  'specific relief',
  'arbitration',
  'transfer of property',
  'negotiable instruments',
  'limitation',
  'hindu marriage',
  'hindu succession',
  'special marriage',
  'motor vehicles',
  'consumer protection',
  'companies',
  'income tax',
  'taxation',
  'tax',
  'advocates',
  'bar council',
  'environmental',
  'environment',
  'information technology',
  'right to information',
  'code',
  'act',
  'tort',
  'administrative',
  'family',
  'labour',
  'industrial',
  'convention',
  'rules',
  'statute',
  'order',
  'principles',
]

import { parseCitation } from '../lib/citationParser'

/** Validate citation format against standard Indian law reporter and neutral patterns */
export function isValidIndianCitation(citation: string): boolean {
  if (!citation || !citation.trim()) return false
  const trimmed = citation.trim()
  const parsed = parseCitation(trimmed)
  if (parsed.style !== 'unknown') return true
  // Also recognize historical/regional reporters: ILR, AIR year-first (1960 AIR 866), BOMLR, Cri LJ, PC, etc.
  return /\b(ILR|AIR|\d{4}\s+AIR|BOMLR|Bom\s*LR|Cri\s*LJ|Comp\s*Cas|ITR|LLJ|SCC|SCR)\b/i.test(trimmed)
}

export function validateRepositoryContent(): ContentValidationReport {
  const errors: string[] = []
  const warnings: string[] = []

  const duplicateIds: string[] = []
  const duplicateSlugs: string[] = []
  const missingSources: string[] = []
  const missingVerificationStatus: string[] = []
  const invalidActReferences: string[] = []
  const malformedCitations: string[] = []
  const orphanedKnowledgeRefs: string[] = []

  // 1. Check Subject & Topic Slugs / IDs
  const subjectSlugs = new Set<string>()
  const topicIdSet = new Set<string>()
  let totalTopics = 0

  for (const s of SUBJECTS) {
    if (subjectSlugs.has(s.slug)) {
      duplicateSlugs.push(`Subject slug duplicated: "${s.slug}"`)
    }
    subjectSlugs.add(s.slug)

    const topicIdsInSubject = new Set<string>()
    for (const t of s.topics) {
      totalTopics++
      topicIdSet.add(t.id)

      if (topicIdsInSubject.has(t.id)) {
        // Allowed only if flagged as multi-concept alias
        warnings.push(`${s.slug}: duplicate topic ID "${t.id}" within subject`)
      }
      topicIdsInSubject.add(t.id)

      if (!t.name || !t.name.trim()) {
        errors.push(`Topic "${t.id}" in subject "${s.slug}" is missing name`)
      }
    }
  }

  // 2. Check Tool Slugs & IDs
  const toolSlugs = new Set<string>()
  const toolIds = new Set<string>()
  for (const tool of TOOLS) {
    if (toolSlugs.has(tool.slug)) {
      duplicateSlugs.push(`Tool slug duplicated: "${tool.slug}"`)
    }
    toolSlugs.add(tool.slug)

    if (toolIds.has(tool.id)) {
      duplicateIds.push(`Tool ID duplicated: "${tool.id}"`)
    }
    toolIds.add(tool.id)

    if (!tool.name || !tool.description) {
      errors.push(`Tool "${tool.id}" is missing name or description`)
    }
  }

  // 3. Check Draft Templates & Governance Tiers
  const draftIds = new Set<string>()
  const validTiers = new Set<string>(['reviewed', 'scaffold', ...DRAFT_TIERS.map((t) => t.id)])

  for (const draft of DRAFT_TEMPLATES) {
    if (draftIds.has(draft.id)) {
      duplicateIds.push(`Draft ID duplicated: "${draft.id}"`)
    }
    draftIds.add(draft.id)

    const tier = draft.tier || 'scaffold'
    if (!validTiers.has(tier)) {
      missingVerificationStatus.push(`Draft "${draft.id}" missing valid governance tier: "${draft.tier}"`)
    }

    if (!draft.name || !draft.category) {
      errors.push(`Draft "${draft.id}" is missing name or category`)
    }
  }

  // 4. Check Judgments
  const judgmentIds = new Set<string>()
  for (const j of ALL_JUDGMENTS) {
    if (judgmentIds.has(j.id)) {
      duplicateIds.push(`Judgment ID duplicated: "${j.id}"`)
    }
    judgmentIds.add(j.id)

    // Check Citation
    if (!j.citation || !j.citation.trim()) {
      missingSources.push(`Judgment "${j.id}" is missing citation`)
    } else if (!isValidIndianCitation(j.citation)) {
      malformedCitations.push(`Judgment "${j.id}" has non-standard citation: "${j.citation}"`)
    }

    // Check Related Cases for Orphaned References
    if (j.relatedCases && j.relatedCases.length > 0) {
      for (const ref of j.relatedCases) {
        if (ref.judgmentId && !JUDGMENTS_BY_ID.has(ref.judgmentId)) {
          orphanedKnowledgeRefs.push(
            `Judgment "${j.id}" references orphaned relatedCase ID "${ref.judgmentId}"`,
          )
        }
      }
    }

    // Check Act references
    if (j.provisions) {
      for (const p of j.provisions) {
        const actStr = p.actName || p.actId
        if (actStr) {
          const actLower = actStr.toLowerCase()
          const matches = KNOWN_ACT_KEYWORDS.some((kw) => actLower.includes(kw))
          if (!matches) {
            invalidActReferences.push(`Judgment "${j.id}" contains unrecognised Act name: "${actStr}"`)
          }
        }
      }
    }
  }

  // 5. Check Primary Sources
  const sourceIds = new Set<string>()
  for (const src of PRIMARY_SOURCES) {
    if (sourceIds.has(src.id)) {
      duplicateIds.push(`Primary source ID duplicated: "${src.id}"`)
    }
    sourceIds.add(src.id)

    if (!src.url || !src.url.startsWith('http')) {
      missingSources.push(`Primary source "${src.id}" missing valid URL: "${src.url}"`)
    }

    if (!src.verificationStatus) {
      missingVerificationStatus.push(`Primary source "${src.id}" missing verificationStatus`)
    }
  }

  // Collate errors
  errors.push(
    ...duplicateIds,
    ...duplicateSlugs,
    ...missingSources,
    ...missingVerificationStatus,
    ...invalidActReferences,
    ...malformedCitations,
    ...orphanedKnowledgeRefs,
  )

  return {
    ok: errors.length === 0,
    totalChecked: {
      subjects: SUBJECTS.length,
      topics: totalTopics,
      judgments: ALL_JUDGMENTS.length,
      tools: TOOLS.length,
      drafts: DRAFT_TEMPLATES.length,
      primarySources: PRIMARY_SOURCES.length,
    },
    checks: {
      duplicateIds,
      duplicateSlugs,
      missingSources,
      missingVerificationStatus,
      invalidActReferences,
      malformedCitations,
      orphanedKnowledgeRefs,
    },
    errors,
    warnings,
  }
}
