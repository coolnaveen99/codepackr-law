/**
 * PH3-060 — Cross-tool deep-link hand-off to Citation Verifier.
 *
 * Provides clean, privacy-conscious hand-off of citation payloads from
 * Research Workbench to Citation Verifier.
 *
 * Privacy:
 * - Only published citation strings and case names are handed off.
 * - No confidential client facts, research questions, or user notes in URLs.
 */

import { type AuthorityRow } from './researchSession'

export const CITATION_HANDOFF_SESSION_KEY = 'cp-law:citation-handoff:v1'

/** Build a normalized newline-delimited citation string from rows or strings. */
export function buildCitationPayload(items: (string | AuthorityRow)[]): string {
  const lines: string[] = []
  for (const item of items) {
    if (typeof item === 'string') {
      const trimmed = item.trim()
      if (trimmed && !lines.includes(trimmed)) lines.push(trimmed)
    } else if (item && typeof item === 'object') {
      const cite = (item.citation || '').trim()
      const name = (item.caseName || '').trim()
      let line = ''
      if (cite && name && !cite.toLowerCase().includes(name.toLowerCase())) {
        line = `${name}, ${cite}`
      } else {
        line = cite || name
      }
      if (line && !lines.includes(line)) lines.push(line)
    }
  }
  return lines.join('\n')
}

/** Build the deep-link URL for Citation Verifier with citation payload. */
export function buildCitationVerifierUrl(citations: (string | AuthorityRow)[] | string): string {
  const payload = typeof citations === 'string' ? citations.trim() : buildCitationPayload(citations)
  if (!payload) return '/tool/citation-verifier'
  return `/tool/citation-verifier?q=${encodeURIComponent(payload)}`
}

/** Store hand-off in sessionStorage for the active browser session. */
export function saveCitationHandoff(payload: string): void {
  if (typeof window === 'undefined' || !payload) return
  try {
    window.sessionStorage?.setItem(CITATION_HANDOFF_SESSION_KEY, payload)
  } catch {
    // sessionStorage disabled or quota
  }
}

/** Read hand-off from URL query or sessionStorage, then clear sessionStorage. */
export function loadAndClearCitationHandoff(): { text: string; source: 'query' | 'session' | null } {
  if (typeof window === 'undefined') return { text: '', source: null }

  // 1. Check URL query params
  try {
    const search = window.location?.search || ''
    const params = new URLSearchParams(search)
    const fromQuery = params.get('q') || params.get('citations') || params.get('c')
    if (fromQuery && fromQuery.trim()) {
      return { text: fromQuery.trim(), source: 'query' }
    }
  } catch {
    // ignore
  }

  // 2. Check sessionStorage
  try {
    const stored = window.sessionStorage?.getItem(CITATION_HANDOFF_SESSION_KEY)
    if (stored && stored.trim()) {
      window.sessionStorage?.removeItem(CITATION_HANDOFF_SESSION_KEY)
      return { text: stored.trim(), source: 'session' }
    }
  } catch {
    // ignore
  }

  return { text: '', source: null }
}


export interface CitationVerificationHandoff {
  caseName: string
  citation: string
  status: 'verified' | 'partial' | 'not-verified' | 'conflict' | 'user-provided'
}

export const CITATION_VERIFICATION_RETURN_KEY = 'cp-law:citation-verification-return:v1'

export function saveCitationVerificationResults(results: CitationVerificationHandoff[]): void {
  if (typeof window === 'undefined' || !results.length) return
  try {
    window.sessionStorage?.setItem(CITATION_VERIFICATION_RETURN_KEY, JSON.stringify(results))
  } catch {
    // sessionStorage disabled or quota
  }
}

export function loadAndClearCitationVerificationResults(): CitationVerificationHandoff[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.sessionStorage?.getItem(CITATION_VERIFICATION_RETURN_KEY)
    if (!raw) return []
    window.sessionStorage?.removeItem(CITATION_VERIFICATION_RETURN_KEY)
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is CitationVerificationHandoff =>
        item &&
        typeof item === 'object' &&
        typeof item.caseName === 'string' &&
        typeof item.citation === 'string' &&
        ['verified', 'partial', 'not-verified', 'conflict', 'user-provided'].includes(item.status),
    )
  } catch {
    return []
  }
}
