/**
 * Educational citation parser for Indian law citations.
 * Does not claim a citation "does not exist" when unmatched.
 */

export type CitationStatus =
  | 'parsed'
  | 'partial'
  | 'not-verified'
  | 'user-provided'
  | 'conflict'

export interface ParsedCitation {
  raw: string
  style: 'scc' | 'air' | 'neutral' | 'name-only' | 'unknown'
  caseName?: string
  volume?: string
  reporter?: string
  page?: string
  year?: string
  courtHint?: string
  status: CitationStatus
  notes: string[]
}

const SCC_RE =
  /^(?:(.+?)\s+)?(?:v(?:ersus|\.?)\s+.+?\s+)?\[?(\d{4})\]?\s+(\d+)\s+SCC\s+(\d+)/i
const AIR_RE =
  /^(?:(.+?)\s+)?(?:v(?:ersus|\.?)\s+.+?\s+)?AIR\s+(\d{4})\s+(SC|All|Bom|Cal|Del|Ker|Mad|Pat|Raj|Guj|Kar|Ori|P&H|HP|UK|Jhar|Chh|Tri|Meg|Man|Nag|Sik|Goa)\s+(\d+)/i
const YEAR_SCC_RE = /\[(\d{4})\]\s+(\d+)\s+SCC\s+(\d+)/i
const NAME_V_RE = /^([A-Za-z0-9][A-Za-z0-9 .,&'()-]{2,80}?)\s+v(?:ersus|\.?)\s+([A-Za-z0-9][A-Za-z0-9 .,&'()-]{2,80})/i

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

  const notes: string[] = []

  const scc = raw.match(YEAR_SCC_RE) || raw.match(SCC_RE)
  if (scc) {
    const year = scc[1] || scc[2]
    const volume = scc[2] || scc[3]
    const page = scc[3] || scc[4]
    const nameMatch = raw.match(NAME_V_RE)
    return {
      raw,
      style: 'scc',
      caseName: nameMatch ? `${nameMatch[1].trim()} v. ${nameMatch[2].trim()}` : undefined,
      year: year?.replace(/\D/g, ''),
      volume,
      reporter: 'SCC',
      page,
      courtHint: 'Supreme Court (typical for SCC)',
      status: 'parsed',
      notes: [
        'Parsed as SCC-style citation. Status is structural parse only — not database verification.',
        'Open SCC Online / court site / IndiaKanoon to verify the report.',
      ],
    }
  }

  const air = raw.match(AIR_RE)
  if (air) {
    return {
      raw,
      style: 'air',
      caseName: air[1]?.trim(),
      year: air[2],
      reporter: 'AIR',
      courtHint: air[3],
      page: air[4],
      status: 'parsed',
      notes: [
        'Parsed as AIR-style citation. Structural parse only — not independent verification of the report.',
      ],
    }
  }

  const name = raw.match(NAME_V_RE)
  if (name) {
    notes.push('Case-name form detected without a full reporter citation.')
    notes.push('Treat as user-provided until a reliable source is matched.')
    return {
      raw,
      style: 'name-only',
      caseName: `${name[1].trim()} v. ${name[2].trim()}`,
      status: 'user-provided',
      notes,
    }
  }

  return {
    raw,
    style: 'unknown',
    status: 'not-verified',
    notes: [
      'Could not parse a known citation pattern.',
      'Never interpret this as “the case does not exist”.',
      'Try SCC form: (2020) 1 SCC 1 or AIR 2020 SC 1, or paste the full case name.',
    ],
  }
}

export function parseCitationList(text: string): ParsedCitation[] {
  return text
    .split(/[\n;]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map(parseCitation)
}
