/**
 * Educational citation parser for Indian legal citations.
 * Supports:
 * - SCC citations: (2020) 5 SCC 1, [1973] 4 SCC 225, 1993 Supp (1) SCC 123
 * - SCC OnLine citations: 2021 SCC OnLine SC 345, 2022 SCC OnLine Del 108
 * - Indian Neutral Citations: 2023 INSC 123, 2024 INSC 45, 2023:DHC:1234, 2024:BOM:567
 * - AIR citations: AIR 1978 SC 597, AIR 1973 SC 1461, AIR 2020 Bom 45
 * - SCR citations: [1950] SCR 88, (1978) 2 SCR 621, [2023] 1 S.C.R. 200
 * - Case names: Kesavananda Bharati v. State of Kerala
 * - Document multi-citation extraction (PH4-030)
 *
 * Roadmap § 9 rule: Never claims a citation "does not exist" when unmatched.
 */

export type CitationStatus =
  | 'parsed'
  | 'verified'
  | 'partial'
  | 'not-verified'
  | 'user-provided'
  | 'conflict'

export type CitationStyle =
  | 'scc'
  | 'scc-online'
  | 'neutral'
  | 'air'
  | 'scr'
  | 'name-only'
  | 'unknown'

export interface ParsedCitation {
  raw: string
  style: CitationStyle
  caseName?: string
  volume?: string
  reporter?: string
  page?: string
  year?: string
  courtHint?: string
  neutralCourt?: string
  neutralIndex?: string
  isSupplement?: boolean
  status: CitationStatus
  notes: string[]
}

export const NEUTRAL_BENCH_MAP: Record<string, string> = {
  INSC: 'Supreme Court of India',
  DHC: 'Delhi High Court',
  BOM: 'Bombay High Court',
  KER: 'Kerala High Court',
  AHC: 'Allahabad High Court',
  ALL: 'Allahabad High Court',
  CAL: 'Calcutta High Court',
  MAD: 'Madras High Court',
  PNH: 'Punjab & Haryana High Court',
  PHHC: 'Punjab & Haryana High Court',
  GUJ: 'Gujarat High Court',
  KAR: 'Karnataka High Court',
  MPHC: 'Madhya Pradesh High Court',
  RAJ: 'Rajasthan High Court',
  PAT: 'Patna High Court',
  ORI: 'Orissa High Court',
  JHR: 'Jharkhand High Court',
  TEL: 'Telangana High Court',
  APHC: 'Andhra Pradesh High Court',
  GAU: 'Gauhati High Court',
  CHH: 'Chhattisgarh High Court',
  HP: 'Himachal Pradesh High Court',
  JKHC: 'Jammu & Kashmir and Ladakh High Court',
  UTT: 'Uttarakhand High Court',
  SIK: 'Sikkim High Court',
  MAN: 'Manipur High Court',
  MEG: 'Meghalaya High Court',
  TRI: 'Tripura High Court',
}

export const SCC_ONLINE_BENCH_MAP: Record<string, string> = {
  SC: 'Supreme Court of India',
  DEL: 'Delhi High Court',
  BOM: 'Bombay High Court',
  CAL: 'Calcutta High Court',
  MAD: 'Madras High Court',
  ALL: 'Allahabad High Court',
  KER: 'Kerala High Court',
  GUJ: 'Gujarat High Court',
  KAR: 'Karnataka High Court',
  'P&H': 'Punjab & Haryana High Court',
  PHHC: 'Punjab & Haryana High Court',
  RAJ: 'Rajasthan High Court',
  PAT: 'Patna High Court',
  MP: 'Madhya Pradesh High Court',
  ORI: 'Orissa High Court',
  TEL: 'Telangana High Court',
  AP: 'Andhra Pradesh High Court',
  JHAR: 'Jharkhand High Court',
  CHH: 'Chhattisgarh High Court',
  GAU: 'Gauhati High Court',
  HP: 'Himachal Pradesh High Court',
  'J&K': 'Jammu & Kashmir High Court',
  UK: 'Uttarakhand High Court',
}

export const AIR_COURT_MAP: Record<string, string> = {
  SC: 'Supreme Court of India',
  ALL: 'Allahabad High Court',
  BOM: 'Bombay High Court',
  CAL: 'Calcutta High Court',
  DEL: 'Delhi High Court',
  KER: 'Kerala High Court',
  MAD: 'Madras High Court',
  PAT: 'Patna High Court',
  RAJ: 'Rajasthan High Court',
  GUJ: 'Gujarat High Court',
  KAR: 'Karnataka High Court',
  ORI: 'Orissa High Court',
  'P&H': 'Punjab & Haryana High Court',
  HP: 'Himachal Pradesh High Court',
  UK: 'Uttarakhand High Court',
  JHAR: 'Jharkhand High Court',
  CHH: 'Chhattisgarh High Court',
  TRI: 'Tripura High Court',
  MEG: 'Meghalaya High Court',
  MAN: 'Manipur High Court',
  NAG: 'Nagpur High Court (Historical)',
  SIK: 'Sikkim High Court',
  GOA: 'Bombay High Court (Goa Bench)',
}

// Regex patterns matching the citation portion
const NEUTRAL_INSC_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?\s+INSC\s+(\d+)/i
const NEUTRAL_HC_COLON_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?:([A-Za-z&]{2,6}):(\d+)/i
const AIR_PATTERN = /(?:^|\s)AIR\s+(\d{4})\s+([A-Za-z&]{2,6})\s+(\d+)/i
const SCC_ONLINE_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?\s+SCC\s+OnLine\s+([A-Za-z&]{2,6})\s+(\d+)/i
const SCC_SUPP_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?\s+Supp\s*(?:\((\d+)\)|(\d+))?\s+SCC\s+(\d+)/i
const SCC_STANDARD_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?\s+(\d+)\s+SCC\s+(\d+)/i
const SCR_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?\s+(?:(\d+)\s+)?S\.?C\.?R\.?\s+(\d+)/i
const NEUTRAL_HC_SPACE_PATTERN = /(?:^|\s)\[?\(?(\d{4})\)?\]?\s+([A-Za-z&]{2,6})\s+(\d+)/i
const NAME_V_RE =
  /^([A-Za-z0-9][A-Za-z0-9 .,&'()-]{1,80}?)\s+v(?:ersus|\.?|\/)\s+([A-Za-z0-9][A-Za-z0-9 .,&'()-]{1,80})$/i

function extractPrefix(raw: string, matchIndex: number): string | undefined {
  if (matchIndex <= 0) return undefined
  const prefix = raw.slice(0, matchIndex).trim().replace(/^[,;\-\s]+|[,;\-\s]+$/g, '')
  return prefix.length >= 3 ? prefix : undefined
}

/**
 * Parses a single Indian legal citation string into a structured ParsedCitation object.
 */
export function parseCitation(rawInput: string): ParsedCitation {
  const raw = rawInput.trim().replace(/\s+/g, ' ')
  if (!raw) {
    return {
      raw: '',
      style: 'unknown',
      status: 'not-verified',
      notes: ['Empty input'],
    }
  }

  const neutralInsc = raw.match(NEUTRAL_INSC_PATTERN)
  if (neutralInsc && neutralInsc.index !== undefined) {
    const caseName = extractPrefix(raw, neutralInsc.index)
    const year = neutralInsc[1]
    const index = neutralInsc[2]
    return {
      raw,
      style: 'neutral',
      caseName,
      year,
      reporter: 'INSC',
      neutralCourt: 'INSC',
      neutralIndex: index,
      courtHint: 'Supreme Court of India',
      status: 'parsed',
      notes: [
        'Parsed as official Indian Neutral Citation (Supreme Court).',
        `Unique identifier: ${year} INSC ${index}. Verification reference available via official e-SCR / SCI portal.`,
      ],
    }
  }

  const neutralHcColon = raw.match(NEUTRAL_HC_COLON_PATTERN)
  if (neutralHcColon && neutralHcColon.index !== undefined) {
    const caseName = extractPrefix(raw, neutralHcColon.index)
    const year = neutralHcColon[1]
    const bench = neutralHcColon[2].toUpperCase()
    const index = neutralHcColon[3]
    const courtHint = NEUTRAL_BENCH_MAP[bench] || `${bench} High Court`
    return {
      raw,
      style: 'neutral',
      caseName,
      year,
      reporter: bench,
      neutralCourt: bench,
      neutralIndex: index,
      courtHint,
      status: 'parsed',
      notes: [
        `Parsed as High Court Neutral Citation (${bench}).`,
        `Unique register citation: ${year}:${bench}:${index}. Verification reference available in High Court digital registry.`,
      ],
    }
  }

  const air = raw.match(AIR_PATTERN)
  if (air && air.index !== undefined) {
    const caseName = extractPrefix(raw, air.index)
    const year = air[1]
    const bench = air[2].toUpperCase()
    const page = air[3]
    const courtHint = AIR_COURT_MAP[bench] || `${bench} High Court`
    return {
      raw,
      style: 'air',
      caseName,
      year,
      reporter: 'AIR',
      courtHint,
      page,
      status: 'parsed',
      notes: [
        'Parsed as AIR-style citation (All India Reporter).',
        'Structural parse only — verify reporter volume and decision date before reliance.',
      ],
    }
  }

  const sccOnline = raw.match(SCC_ONLINE_PATTERN)
  if (sccOnline && sccOnline.index !== undefined) {
    const caseName = extractPrefix(raw, sccOnline.index)
    const year = sccOnline[1]
    const bench = sccOnline[2].toUpperCase()
    const page = sccOnline[3]
    const courtHint = SCC_ONLINE_BENCH_MAP[bench] || `${bench} Court`
    return {
      raw,
      style: 'scc-online',
      caseName,
      year,
      reporter: `SCC OnLine ${bench}`,
      page,
      courtHint,
      status: 'parsed',
      notes: [
        'Parsed as SCC OnLine electronic database citation.',
        'Web reporter citation. Cross-reference against print volume or neutral citation if citing in court pleadings.',
      ],
    }
  }

  const sccSupp = raw.match(SCC_SUPP_PATTERN)
  if (sccSupp && sccSupp.index !== undefined) {
    const caseName = extractPrefix(raw, sccSupp.index)
    const year = sccSupp[1]
    const volume = sccSupp[2] || sccSupp[3] || '1'
    const page = sccSupp[4]
    return {
      raw,
      style: 'scc',
      caseName,
      year,
      volume,
      reporter: 'SCC (Supp)',
      page,
      isSupplement: true,
      courtHint: 'Supreme Court of India',
      status: 'parsed',
      notes: [
        'Parsed as SCC Supplement citation.',
        `Structural parse: [${year}] Supp (${volume}) SCC ${page}. Not database verification.`,
      ],
    }
  }

  const sccStd = raw.match(SCC_STANDARD_PATTERN)
  if (sccStd && sccStd.index !== undefined) {
    const caseName = extractPrefix(raw, sccStd.index)
    const year = sccStd[1]
    const volume = sccStd[2]
    const page = sccStd[3]
    return {
      raw,
      style: 'scc',
      caseName,
      year,
      volume,
      reporter: 'SCC',
      page,
      courtHint: 'Supreme Court of India',
      status: 'parsed',
      notes: [
        'Parsed as SCC-style citation.',
        'Structural parse only. Cross-reference against canonical judgment index or official reporters.',
      ],
    }
  }

  const scr = raw.match(SCR_PATTERN)
  if (scr && scr.index !== undefined) {
    const caseName = extractPrefix(raw, scr.index)
    const year = scr[1]
    const volume = scr[2]
    const page = scr[3]
    return {
      raw,
      style: 'scr',
      caseName,
      year,
      volume,
      reporter: 'SCR',
      page,
      courtHint: 'Supreme Court of India (official reporter)',
      status: 'parsed',
      notes: [
        'Parsed as Supreme Court Reports (SCR) official citation.',
        'Official government reporter of the Supreme Court of India.',
      ],
    }
  }

  const neutralHcSpace = raw.match(NEUTRAL_HC_SPACE_PATTERN)
  if (neutralHcSpace && neutralHcSpace.index !== undefined) {
    const candidateBench = neutralHcSpace[2].toUpperCase()
    if (NEUTRAL_BENCH_MAP[candidateBench]) {
      const caseName = extractPrefix(raw, neutralHcSpace.index)
      const year = neutralHcSpace[1]
      const index = neutralHcSpace[3]
      const courtHint = NEUTRAL_BENCH_MAP[candidateBench]
      return {
        raw,
        style: 'neutral',
        caseName,
        year,
        reporter: candidateBench,
        neutralCourt: candidateBench,
        neutralIndex: index,
        courtHint,
        status: 'parsed',
        notes: [
          `Parsed as High Court Neutral Citation (${candidateBench}).`,
          `Normalized identifier: ${year}:${candidateBench}:${index}.`,
        ],
      }
    }
  }

  const nameMatch = raw.match(NAME_V_RE)
  if (nameMatch) {
    const party1 = nameMatch[1].trim()
    const party2 = nameMatch[2].trim()
    return {
      raw,
      style: 'name-only',
      caseName: `${party1} v. ${party2}`,
      status: 'user-provided',
      notes: [
        'Case-name form detected without a full reporter or neutral citation.',
        'Treat as user-provided until matched against a verified landmark judgment or catalog record.',
      ],
    }
  }

  return {
    raw,
    style: 'unknown',
    status: 'not-verified',
    notes: [
      'Could not parse a recognized citation pattern.',
      'Never interpret this as "the case does not exist".',
      'Supported formats: SCC, SCC OnLine, Neutral (INSC / HC), AIR, Case Name (X v. Y).',
    ],
  }
}

/**
 * Parses a newline- or semicolon-separated list of citations.
 * Prefer {@link extractCitationsFromDocument} for continuous prose / judgment extracts.
 */
export function parseCitationList(text: string): ParsedCitation[] {
  return text
    .split(/[\n;]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map(parseCitation)
}

/** Span found while scanning continuous document text (PH4-030). */
export interface DocumentCitationHit {
  start: number
  end: number
  span: string
  caseNamePrefix?: string
}

/** Global scan patterns ordered from more specific to less specific. */
const DOCUMENT_SCAN_PATTERNS: RegExp[] = [
  /\b(?:\(?\d{4}\)?\s+)?SCC\s+OnLine\s+[A-Za-z&]{2,6}\s+\d+/gi,
  /\b(?:\(?\d{4}\)?|\d{4})\s+Supp\s*(?:\(\d+\)|\d+)?\s+SCC\s+\d+/gi,
  /\[?\(?\d{4}\)?\]?\s+\d+\s+SCC\s+\d+/gi,
  /\bAIR\s+\d{4}\s+[A-Za-z&]{2,6}\s+\d+/gi,
  /\[?\(?\d{4}\)?\]?\s+(?:\d+\s+)?S\.?C\.?R\.?\s+\d+/gi,
  /\b\d{4}\s+INSC\s+\d+/gi,
  /\b\d{4}:[A-Za-z&]{2,6}:\d+/gi,
]

const CASE_NAME_LOOKBEHIND =
  /([A-Za-z0-9][A-Za-z0-9 .,&'()\-]{1,90}?)\s+v(?:ersus|\.|s\.?|\/)\s+([A-Za-z0-9][A-Za-z0-9 .,&'()\-]{1,90}?)\s*[,:;\-–—]?\s*$/i

function findCaseNamePrefix(text: string, matchStart: number): string | undefined {
  const from = Math.max(0, matchStart - 140)
  const window = text.slice(from, matchStart)
  const m = window.match(CASE_NAME_LOOKBEHIND)
  if (!m) return undefined
  const name = `${m[1].trim()} v. ${m[2].trim()}`.replace(/\s+/g, ' ')
  return name.length >= 5 ? name : undefined
}

function rangesOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return aStart < bEnd && bStart < aEnd
}

/**
 * Locate reporter / neutral citation spans inside continuous legal text.
 */
export function scanDocumentCitationSpans(text: string): DocumentCitationHit[] {
  if (!text || !text.trim()) return []

  const hits: DocumentCitationHit[] = []

  for (const pattern of DOCUMENT_SCAN_PATTERNS) {
    const re = new RegExp(pattern.source, pattern.flags)
    let m: RegExpExecArray | null
    while ((m = re.exec(text)) !== null) {
      const span = m[0].trim()
      if (!span) continue
      const start = m.index + (m[0].length - m[0].trimStart().length)
      const end = start + span.length
      hits.push({
        start,
        end,
        span,
        caseNamePrefix: findCaseNamePrefix(text, start),
      })
    }
  }

  hits.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start))
  const accepted: DocumentCitationHit[] = []
  for (const hit of hits) {
    const overlaps = accepted.some((a) => rangesOverlap(a.start, a.end, hit.start, hit.end))
    if (!overlaps) accepted.push(hit)
  }
  accepted.sort((a, b) => a.start - b.start)
  return accepted
}

/**
 * PH4-030 — Extract multiple citations from continuous document / judgment text.
 */
export function extractCitationsFromDocument(text: string): ParsedCitation[] {
  const trimmed = text?.trim() ?? ''
  if (!trimmed) return []

  const spans = scanDocumentCitationSpans(trimmed)
  const extracted: ParsedCitation[] = []
  const seen = new Set<string>()

  for (const hit of spans) {
    const combined = hit.caseNamePrefix ? `${hit.caseNamePrefix}, ${hit.span}` : hit.span
    const parsed = parseCitation(combined)
    if (parsed.style === 'unknown' && !parsed.caseName) continue
    const key = normalizeCitationKey(
      [parsed.year, parsed.reporter, parsed.volume, parsed.page, parsed.neutralCourt, parsed.neutralIndex, parsed.caseName]
        .filter(Boolean)
        .join(' ') || parsed.raw,
    )
    if (seen.has(key)) continue
    seen.add(key)
    parsed.notes = [
      ...parsed.notes,
      'Extracted from continuous document text (PH4-030 scanner). Verify against official reporter.',
    ]
    extracted.push(parsed)
  }

  if (extracted.length > 0) return extracted

  return parseCitationList(trimmed)
}

/**
 * Normalizes a citation string into a standard lookup key for deduplication and indexing.
 */
export function normalizeCitationKey(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[\[\](),.\-\/:\s]+/g, ' ')
    .trim()
}
