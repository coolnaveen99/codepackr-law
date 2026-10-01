/**
 * PH3-050 — ContentGateway authority & topic suggestions.
 *
 * Resolves candidate statutory provisions, study topics, related knowledge graph
 * entities (related topics, judgments, doctrines), and manifest matches for the
 * Research Workbench.
 *
 * Principles:
 * - Read-only assists; zero write path to canonical repository.
 * - Client-side only; zero practice data transmitted off-device.
 * - Suggestions are labelled "Suggestion — verify before reliance".
 * - Verification status is never auto-filled to 'verified'; defaults to 'needs-review'.
 */

import {
  getContentRepository,
  getCanonicalEntity,
  getRelatedEntityIds,
} from './ContentGateway'
import { canonicalTopicId } from './ContentRepository'
import { hrefForCanonicalTopicId, parseCanonicalTopicId } from './parseCanonicalTopicId'
import type { ContentEnvelope } from './contentTypes'
import {
  type AuthorityRow,
  newAuthorityId,
} from '../lib/researchSession'

export interface AuthoritySuggestion {
  id: string // e.g. "provision:india:cpc-s-32", "topic:india:cpc-s-32", "judgment:india:maneka-gandhi-1978"
  entityType: 'topic' | 'provision' | 'judgment' | 'doctrine' | 'other'
  title: string
  subtitle?: string
  court?: string
  date?: string
  citation?: string
  statute?: string
  holding?: string
  href?: string | null
  source?: string
  field?: string
}

export interface SuggestAuthoritiesQuery {
  subjectSlug?: string
  act?: string
  section?: string
  keywords?: string
}

const COMMON_ACT_TO_SLUG: Record<string, string> = {
  cpc: 'cpc',
  'civil procedure': 'cpc',
  'code of civil procedure': 'cpc',
  bns: 'bns',
  'bharatiya nyaya': 'bns',
  'nyaya sanhita': 'bns',
  bnss: 'bnss',
  'bharatiya nagarik': 'bnss',
  'nagarik suraksha': 'bnss',
  bsa: 'bsa',
  'bharatiya sakshya': 'bsa',
  'sakshya adhiniyam': 'bsa',
  constitution: 'constitution',
  'constitution of india': 'constitution',
  contract: 'contract',
  'indian contract act': 'contract',
  tort: 'tort',
  torts: 'tort',
  'law of torts': 'tort',
  pil: 'pil',
  'public interest litigation': 'pil',
  hma: 'family',
  family: 'family',
  'hindu marriage act': 'family',
  tpa: 'tpa',
  'transfer of property': 'tpa',
  limitation: 'limitation',
  'limitation act': 'limitation',
  arbitration: 'arbitration',
  'arbitration and conciliation': 'arbitration',
  sra: 'sra',
  'specific relief': 'sra',
  ni: 'ni',
  'negotiable instruments': 'ni',
}

export function inferSubjectSlug(subjectSlug?: string, act?: string): string | undefined {
  if (subjectSlug && subjectSlug.trim()) {
    const s = subjectSlug.trim().toLowerCase()
    return COMMON_ACT_TO_SLUG[s] || s
  }
  if (act && act.trim()) {
    const a = act.trim().toLowerCase()
    for (const [key, slug] of Object.entries(COMMON_ACT_TO_SLUG)) {
      if (a.includes(key)) return slug
    }
  }
  return undefined
}

export function normalizeSectionCandidates(sectionRaw?: string, subjectSlug?: string): string[] {
  if (!sectionRaw) return []
  const raw = sectionRaw.trim().toLowerCase()
  if (!raw) return []

  const candidates: string[] = []
  const push = (v: string) => {
    if (v && !candidates.includes(v)) candidates.push(v)
  }

  // Already prefixed or canonical form
  if (raw.startsWith('s-') || raw.startsWith('art-') || raw.startsWith('o')) {
    push(raw)
  }

  // s. 32 / sec 32 / section 32
  const secMatch = raw.match(/^(?:s|sec|section)[\s.]*([0-9]+[a-z]?)$/i)
  if (secMatch) {
    push(`s-${secMatch[1]}`)
    push(secMatch[1])
  }

  // art. 21 / art 21 / article 21
  const artMatch = raw.match(/^(?:art|article)[\s.]*([0-9]+[a-z]?)$/i)
  if (artMatch) {
    push(`art-${artMatch[1]}`)
    push(artMatch[1])
  }

  // order 1 rule 10 / o1 r10
  const orderMatch = raw.match(
    /^(?:o|order)[\s.]*([0-9]+|x|v|i|l|c|d|m)+[\s,.-]*(?:r|rule)[\s.]*([0-9]+[a-z]?)$/i,
  )
  if (orderMatch) {
    push(`o${orderMatch[1]}-r-${orderMatch[2]}`)
    push(`o${orderMatch[1]}-r${orderMatch[2]}`)
  }

  // Pure number e.g. "32" or "21"
  if (/^[0-9]+[a-z]?$/i.test(raw)) {
    push(raw)
    if (subjectSlug === 'constitution' || subjectSlug === 'fundamental-rights') {
      push(`art-${raw}`)
    } else {
      push(`s-${raw}`)
    }
  }

  push(raw)

  // Replace spaces/dots with dashes e.g. "locus standi" -> "locus-standi"
  if (raw.includes(' ') || raw.includes('.')) {
    push(raw.replace(/[\s.]+/g, '-'))
  }

  return candidates
}

function envelopeToSuggestion(
  entity: ContentEnvelope,
  field?: string,
  subjectSlug?: string,
): AuthoritySuggestion {
  const content = entity.content || {}
  const kind = entity.entityType

  if (kind === 'judgment') {
    return {
      id: entity.id,
      entityType: 'judgment',
      title: entity.title,
      subtitle: 'Landmark judgment from canonical graph',
      court: (content.court as string) || 'Supreme Court of India',
      date: (content.date as string) || undefined,
      citation: (content.caseIdentity as string) || entity.title,
      holding:
        (content.holding as string) ||
        (content.ratioDecidendi as string) ||
        (content.facts as string) ||
        '',
      statute: Array.isArray(content.questionsBeforeCourt)
        ? (content.questionsBeforeCourt as string[]).join('; ')
        : undefined,
      source: entity.sources?.[0],
      field: field || 'judgment',
    }
  }

  if (kind === 'provision') {
    const actName = (content.actName as string) || (content.actId as string) || subjectSlug?.toUpperCase() || 'Act'
    const sectionNum = (content.section as string) || ''
    return {
      id: entity.id,
      entityType: 'provision',
      title: entity.title,
      subtitle: 'Canonical statutory provision',
      statute: actName,
      citation: sectionNum ? `${actName}, Section ${sectionNum}` : entity.title,
      holding: (content.text as string) || (content.heading as string) || '',
      source: entity.sources?.[0],
      href: subjectSlug ? `/subjects/${subjectSlug}/${sectionNum ? `s-${sectionNum}` : ''}` : null,
      field: field || 'provision',
    }
  }

  if (kind === 'doctrine') {
    return {
      id: entity.id,
      entityType: 'doctrine',
      title: entity.title,
      subtitle: 'Canonical doctrine from knowledge graph',
      citation: entity.title,
      holding: (content.statement as string) || (content.definition as string) || '',
      source: entity.sources?.[0],
      field: field || 'doctrine',
    }
  }

  // Topic
  const topicRoute = hrefForCanonicalTopicId(entity.id)
  const parsed = parseCanonicalTopicId(entity.id)
  return {
    id: entity.id,
    entityType: 'topic',
    title: entity.title,
    subtitle: 'Canonical study treatise / ratio',
    statute: parsed?.subjectSlug?.toUpperCase(),
    citation: parsed?.topicId || entity.id,
    holding: (content.overview as string) || (content.glance as string) || '',
    href: topicRoute,
    source: entity.sources?.[0],
    field: field || 'topic',
  }
}

export async function suggestAuthorities(
  query: SuggestAuthoritiesQuery,
): Promise<AuthoritySuggestion[]> {
  const suggestions: AuthoritySuggestion[] = []
  const seenIds = new Set<string>()

  const add = (s: AuthoritySuggestion | null | undefined) => {
    if (!s || seenIds.has(s.id)) return
    seenIds.add(s.id)
    suggestions.push(s)
  }

  const subject = inferSubjectSlug(query.subjectSlug, query.act)
  const tokens = normalizeSectionCandidates(query.section, subject)

  // 1. Direct candidate provision & topic lookups
  if (subject && tokens.length > 0) {
    for (const token of tokens) {
      // Provision candidate
      const provId = `provision:india:${subject}-${token}`
      const prov = await getCanonicalEntity(provId)
      if (prov && (prov.status === 'published' || prov.status === 'review-due')) {
        add(envelopeToSuggestion(prov, 'direct-provision', subject))
      }

      // Topic candidate
      const topId = canonicalTopicId(subject, token)
      const top = await getCanonicalEntity(topId)
      if (top && (top.status === 'published' || top.status === 'review-due')) {
        add(envelopeToSuggestion(top, 'direct-topic', subject))

        // Query graph relationships for this canonical topic
        const edges = await getRelatedEntityIds(topId)
        for (const edge of edges) {
          if (edge.field === 'sources' || edge.field === 'members') continue
          const related = await getCanonicalEntity(edge.to)
          if (related && (related.status === 'published' || related.status === 'review-due')) {
            add(envelopeToSuggestion(related, edge.field, subject))
          }
        }
      }
    }
  }

  // 2. Query keywords & manifest lookups
  const keywords = [
    query.keywords?.trim().toLowerCase(),
    query.section?.trim().toLowerCase(),
    subject,
  ].filter(Boolean) as string[]

  if (keywords.length > 0) {
    const repo = getContentRepository()
    if (typeof repo.getManifest === 'function') {
      const manifest = await repo.getManifest()
      if (manifest?.entities) {
        for (const entry of manifest.entities) {
          if (entry.status !== 'published' && entry.status !== 'review-due') continue
          if (seenIds.has(entry.id)) continue
          if (suggestions.length >= 10) break

          // Matches entity type or query
          const idLower = entry.id.toLowerCase()
          const pathLower = entry.path.toLowerCase()

          const matchesKeyword = keywords.some(
            (kw) => kw.length > 2 && (idLower.includes(kw) || pathLower.includes(kw)),
          )

          // If subject provided, also prioritize judgments matching the subject
          const matchesSubjectJudgment =
            subject &&
            entry.entityType === 'judgment' &&
            (idLower.includes(subject) || pathLower.includes(subject))

          if (matchesKeyword || matchesSubjectJudgment) {
            const entity = await getCanonicalEntity(entry.id)
            if (entity && (entity.status === 'published' || entity.status === 'review-due')) {
              add(envelopeToSuggestion(entity, 'manifest-match', subject))
            }
          }
        }
      }
    }
  }

  return suggestions
}

/** Convert a suggestion into an AuthorityRow to append to the Research Workbench matrix. */
export function authorityRowFromSuggestion(suggestion: AuthoritySuggestion): AuthorityRow {
  return {
    id: newAuthorityId(),
    caseName: suggestion.entityType === 'judgment' ? suggestion.title : '',
    court: suggestion.court || '',
    date: suggestion.date || '',
    citation:
      suggestion.citation || (suggestion.entityType === 'judgment' ? suggestion.title : ''),
    statute: suggestion.statute || (suggestion.entityType === 'provision' ? suggestion.title : ''),
    issue: suggestion.subtitle || '',
    holding: suggestion.holding || '',
    canonicalEntityId: suggestion.id,
    source: suggestion.source || '',
    verification: 'needs-review', // Never auto-fill to VERIFIED; label as suggestion to verify before reliance
  }
}
