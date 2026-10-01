/**
 * PH4-020 — Verification Engine for Legal Citations.
 *
 * Evaluates parsed citations against:
 * 1. Static landmark judgments repository (ALL_JUDGMENTS / 25 batches)
 * 2. Canonical content manifest & entities via ContentGateway
 *
 * Status model (Roadmap § 9):
 * - VERIFIED: Reliable source located and metadata agrees.
 * - PARTIAL: Some metadata matches (e.g. party name matches but citation differs).
 * - NOT_VERIFIED: No reliable record located. Rule: never convert "not found" into "does not exist".
 * - CONFLICT: Multiple distinct records disagree or conflict.
 * - USER_PROVIDED: Citation or case name from user text without independent verification.
 */

import {
  parseCitation,
  parseCitationList,
  normalizeCitationKey,
  type ParsedCitation,
  type CitationStatus,
  type CitationStyle,
} from './citationParser'
import { ALL_JUDGMENTS } from '../data/judgments'
import type { Judgment } from '../data/judgments/types'
import { getContentRepository, getCanonicalEntity } from '../content/ContentGateway'

export interface OfficialSourceLink {
  name: string
  url: string
  type: 'official-court' | 'india-code' | 'escr' | 'open-portal'
}

export interface MatchedRecord {
  id: string
  caseName: string
  court: string
  year: number | string
  citation: string
  neutralCitation?: string
  source: 'canonical' | 'landmark' | 'manual'
  canonicalEntityId?: string
  confidence: number // 0.0 - 1.0
  officialUrl?: string
  summary?: string
  ratioDecidendi?: string
  subject?: string
}

export interface VerifiedCitation {
  raw: string
  normalizedCitation?: string
  style: CitationStyle
  caseName?: string
  court?: string
  courtHint?: string
  year?: string
  volume?: string
  reporter?: string
  page?: string
  neutralCourt?: string
  neutralIndex?: string
  status: CitationStatus
  confidence: number // 0.0 - 1.0
  matchedRecord?: MatchedRecord
  notes: string[]
  officialSources: OfficialSourceLink[]
}

const HIGH_COURT_URL_MAP: Record<string, string> = {
  DEL: 'https://delhihighcourt.nic.in/',
  DHC: 'https://delhihighcourt.nic.in/',
  BOM: 'https://bombayhighcourt.nic.in/',
  CAL: 'https://www.calcuttahighcourt.gov.in/',
  MAD: 'https://hcmadras.tn.gov.in/',
  ALL: 'https://www.allahabadhighcourt.in/',
  AHC: 'https://www.allahabadhighcourt.in/',
  KER: 'https://highcourtofkerala.nic.in/',
  GUJ: 'https://gujarathighcourt.nic.in/',
  KAR: 'https://karnatakahihecourt.kar.nic.in/',
  PAT: 'https://patnahighcourt.gov.in/',
  RAJ: 'https://hcraj.nic.in/',
  PNH: 'https://highcourtchd.gov.in/',
  'P&H': 'https://highcourtchd.gov.in/',
  PHHC: 'https://highcourtchd.gov.in/',
}

/**
 * Resolves authoritative official links based on court or neutral identifier.
 */
export function resolveOfficialSources(
  courtHint?: string,
  neutralCourt?: string
): OfficialSourceLink[] {
  const sources: OfficialSourceLink[] = []

  const isSupremeCourt =
    !courtHint ||
    courtHint.toLowerCase().includes('supreme') ||
    neutralCourt?.toUpperCase() === 'INSC' ||
    courtHint.toLowerCase().includes('sc')

  if (isSupremeCourt) {
    sources.push({
      name: 'Supreme Court e-SCR (Digital SCR)',
      url: 'https://escr.sci.gov.in/',
      type: 'escr',
    })
    sources.push({
      name: 'Supreme Court of India (Official Portal)',
      url: 'https://www.sci.gov.in/',
      type: 'official-court',
    })
  }

  const benchKey = (neutralCourt || '').toUpperCase()
  if (benchKey && HIGH_COURT_URL_MAP[benchKey]) {
    sources.push({
      name: `${benchKey} High Court Official Registry`,
      url: HIGH_COURT_URL_MAP[benchKey],
      type: 'official-court',
    })
  } else if (courtHint && !isSupremeCourt) {
    sources.push({
      name: 'eCourts Services India',
      url: 'https://services.ecourts.gov.in/',
      type: 'official-court',
    })
  }

  // Always link India Code for statutory references
  sources.push({
    name: 'India Code (Digital Repository of Acts)',
    url: 'https://www.indiacode.nic.in/',
    type: 'india-code',
  })

  return sources
}

function cleanTokens(str: string): string[] {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2 && t !== 'and' && t !== 'the' && t !== 'ors' && t !== 'anr' && t !== 'state' && t !== 'union' && t !== 'india')
}

interface MatchCandidate {
  judgment: Judgment
  score: number
  reasons: string[]
}

/**
 * Score a judgment against parsed citation criteria.
 */
function scoreJudgmentMatch(judgment: Judgment, parsed: ParsedCitation): MatchCandidate | null {
  let score = 0
  const reasons: string[] = []

  const normRaw = normalizeCitationKey(parsed.raw)
  const jCitationNorm = judgment.citation ? normalizeCitationKey(judgment.citation) : ''
  const jNeutralNorm = judgment.neutralCitation ? normalizeCitationKey(judgment.neutralCitation) : ''

  // 1. Exact Citation or Neutral Citation Match (Highest Weight)
  if (jCitationNorm && (normRaw.includes(jCitationNorm) || jCitationNorm.includes(normRaw))) {
    score += 0.80
    reasons.push(`Exact citation match: ${judgment.citation}`)
  } else if (jNeutralNorm && normRaw.includes(jNeutralNorm)) {
    score += 0.85
    reasons.push(`Neutral citation match: ${judgment.neutralCitation}`)
  } else if (
    parsed.volume &&
    parsed.page &&
    judgment.citation &&
    judgment.citation.includes(parsed.volume) &&
    judgment.citation.includes(parsed.page)
  ) {
    score += 0.70
    reasons.push(`Volume (${parsed.volume}) and page (${parsed.page}) match in ${judgment.citation}`)
  }

  // 2. Case Name Matching
  const targetName = parsed.caseName || (parsed.style === 'name-only' ? parsed.raw : undefined)
  if (targetName) {
    const normTargetName = normalizeCitationKey(targetName)
    const normJName = normalizeCitationKey(judgment.caseName)
    const normJShort = judgment.shortName ? normalizeCitationKey(judgment.shortName) : ''

    if (normTargetName === normJName || (normJShort && normTargetName === normJShort)) {
      score += 0.85
      reasons.push(`Exact case title match: ${judgment.caseName}`)
    } else if (normJName.includes(normTargetName) || (normJShort && normJShort.includes(normTargetName))) {
      score += 0.70
      reasons.push(`Full case title contains search query`)
    } else {
      // Token overlap (e.g. "Kesavananda" + "Kerala", "Maneka" + "Gandhi")
      const inputTokens = cleanTokens(targetName)
      const jTokens = new Set(cleanTokens(judgment.caseName))
      const common = inputTokens.filter((t) => jTokens.has(t))
      if (common.length >= 2) {
        score += 0.55
        reasons.push(`Key parties match: ${common.join(', ')}`)
      } else if (common.length === 1 && inputTokens.length === 1) {
        score += 0.35
        reasons.push(`Party match: ${common[0]}`)
      }
    }
  }

  // 3. Year Agreement
  if (parsed.year && judgment.year) {
    const inputYear = parseInt(parsed.year, 10)
    if (inputYear === judgment.year) {
      score += 0.10
      reasons.push(`Decision year agrees: ${judgment.year}`)
    } else if (Math.abs(inputYear - judgment.year) <= 1) {
      score += 0.05
      reasons.push(`Decision year within 1-year reporting variance (${judgment.year})`)
    } else if (score >= 0.55) {
      // Keep at 0.50 so it triggers PARTIAL review instead of being discarded
      score = Math.max(0.50, score - 0.15)
      reasons.push(`Year discrepancy: query cited ${parsed.year}, record reports ${judgment.year}`)
    }
  }

  if (score >= 0.35) {
    return {
      judgment,
      score: Math.min(1.0, score),
      reasons,
    }
  }

  return null
}

/**
 * Evaluates a parsed citation synchronously against ALL_JUDGMENTS repository.
 */
export function verifyCitationSync(input: string | ParsedCitation): VerifiedCitation {
  const parsed = typeof input === 'string' ? parseCitation(input) : input

  // Empty input safeguard
  if (!parsed.raw.trim()) {
    return {
      raw: '',
      style: 'unknown',
      status: 'not-verified',
      confidence: 0,
      notes: ['Empty input'],
      officialSources: resolveOfficialSources(),
    }
  }

  const candidates: MatchCandidate[] = []

  for (const j of ALL_JUDGMENTS) {
    const candidate = scoreJudgmentMatch(j, parsed)
    if (candidate) {
      candidates.push(candidate)
    }
  }

  candidates.sort((a, b) => b.score - a.score)

  const officialSources = resolveOfficialSources(parsed.courtHint, parsed.neutralCourt)
  const notes = [...parsed.notes]

  // Scenario 1: Multiple conflicting candidates with distinct courts or years
  if (candidates.length >= 2 && candidates[0].score >= 0.65 && candidates[1].score >= 0.65) {
    const c0 = candidates[0].judgment
    const c1 = candidates[1].judgment
    if (c0.year !== c1.year || c0.court !== c1.court) {
      notes.push(
        `Potential conflict: matches both "${c0.caseName}" (${c0.year}) and "${c1.caseName}" (${c1.year}). Verify court registry.`
      )
      return {
        ...parsed,
        normalizedCitation: normalizeCitationKey(parsed.raw),
        status: 'conflict',
        confidence: candidates[0].score,
        matchedRecord: candidateToMatchedRecord(candidates[0]),
        notes,
        officialSources,
      }
    }
  }

  // Scenario 2: Strong match >= 0.85 -> VERIFIED
  if (candidates.length > 0 && candidates[0].score >= 0.85) {
    const best = candidates[0]
    notes.push(
      `Verified against landmark database: ${best.judgment.caseName} (${best.judgment.year}).`
    )
    for (const r of best.reasons) {
      notes.push(`✓ ${r}`)
    }
    return {
      ...parsed,
      caseName: parsed.caseName || best.judgment.caseName,
      court: parsed.courtHint || best.judgment.court,
      year: parsed.year || (best.judgment.year ? String(best.judgment.year) : undefined),
      normalizedCitation: normalizeCitationKey(parsed.raw),
      status: 'verified',
      confidence: best.score,
      matchedRecord: candidateToMatchedRecord(best),
      notes,
      officialSources,
    }
  }

  // Scenario 3: Moderate match 0.50 - 0.84 -> PARTIAL
  if (candidates.length > 0 && candidates[0].score >= 0.50) {
    const best = candidates[0]
    notes.push(
      `Partial match found (${Math.round(best.score * 100)}% confidence). Cross-check citation volume and case name before reliance.`
    )
    for (const r of best.reasons) {
      notes.push(`~ ${r}`)
    }
    return {
      ...parsed,
      caseName: parsed.caseName || best.judgment.caseName,
      court: parsed.courtHint || best.judgment.court,
      year: parsed.year || (best.judgment.year ? String(best.judgment.year) : undefined),
      normalizedCitation: normalizeCitationKey(parsed.raw),
      status: 'partial',
      confidence: best.score,
      matchedRecord: candidateToMatchedRecord(best),
      notes,
      officialSources,
    }
  }

  // Scenario 4: User-provided name-only form without match
  if (parsed.style === 'name-only') {
    notes.push(
      'User-provided case title detected. No identical match in local landmark database. Cross-reference in court records.'
    )
    return {
      ...parsed,
      normalizedCitation: normalizeCitationKey(parsed.raw),
      status: 'user-provided',
      confidence: 0.3,
      notes,
      officialSources,
    }
  }

  // Scenario 5: Unverified (No reliable source located)
  notes.push(
    'Unverified in local landmark index. Never interpret this as "the case does not exist". Verify citation via official court portals.'
  )
  return {
    ...parsed,
    normalizedCitation: normalizeCitationKey(parsed.raw),
    status: 'not-verified',
    confidence: 0.0,
    notes,
    officialSources,
  }
}

function candidateToMatchedRecord(candidate: MatchCandidate): MatchedRecord {
  const j = candidate.judgment
  return {
    id: j.id,
    caseName: j.caseName,
    court: j.court || 'Supreme Court of India',
    year: j.year || '',
    citation: j.citation || '',
    neutralCitation: j.neutralCitation,
    source: 'landmark',
    confidence: candidate.score,
    officialUrl: j.source?.sourceUrl || undefined,
    summary: j.summary,
    ratioDecidendi: j.ratioDecidendi,
    subject: j.subject,
  }
}

/**
 * Asynchronously verifies a citation, querying local landmark records and
 * checking the canonical ContentGateway manifest.
 */
export async function verifyCitation(input: string | ParsedCitation): Promise<VerifiedCitation> {
  // First run synchronous local index match
  const verified = verifyCitationSync(input)

  // If already verified with high confidence, return
  if (verified.status === 'verified') {
    return verified
  }

  // Check canonical ContentGateway manifest for any published canonical judgments
  try {
    const repo = getContentRepository()
    if (typeof repo.getManifest === 'function') {
      const manifest = await repo.getManifest()
      if (manifest?.entities) {
        const queryTerm = (verified.caseName || verified.raw).toLowerCase()
        const match = manifest.entities.find(
          (e) =>
            e.entityType === 'judgment' &&
            (e.status === 'published' || e.status === 'review-due') &&
            (e.id.toLowerCase().includes(queryTerm) || queryTerm.includes(e.id.toLowerCase().replace('judgment:india:', '')))
        )
        if (match) {
          const entity = await getCanonicalEntity(match.id)
          if (entity) {
            const notes = [...verified.notes, `Matched canonical entity: ${match.id}`]
            return {
              ...verified,
              status: 'verified',
              confidence: 0.92,
              matchedRecord: {
                id: match.id,
                caseName: entity.title || verified.caseName || match.id,
                court: (entity.content as any)?.court || 'Supreme Court of India',
                year: (entity.content as any)?.year || verified.year || '',
                citation: (entity.content as any)?.citation || verified.raw,
                source: 'canonical',
                canonicalEntityId: match.id,
                confidence: 0.92,
              },
              notes,
            }
          }
        }
      }
    }
  } catch {
    // Graceful fallback to verified
  }

  return verified
}

/**
 * Synchronously verifies a list of citations separated by newlines or semicolons.
 */
export function verifyCitationListSync(text: string): VerifiedCitation[] {
  const parsedList = parseCitationList(text)
  return parsedList.map(verifyCitationSync)
}

/**
 * Asynchronously verifies a list of citations.
 */
export async function verifyCitationList(text: string): Promise<VerifiedCitation[]> {
  const parsedList = parseCitationList(text)
  return Promise.all(parsedList.map(verifyCitation))
}
