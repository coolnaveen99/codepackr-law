/**
 * PH3-070 — Cross-tool deep-link hand-off to Judgment Analyzer.
 *
 * Facilitates handing off an authority from Legal Research Workbench to
 * Judgment Analyzer with an initial case slot / text template.
 *
 * Privacy (§5.5):
 * - URL parameters contain only public case names / citation strings (?case=...).
 * - Privileged client facts, research questions, or user notes are NEVER placed in URLs.
 * - SessionStorage provides transient client-side transfer between workbench and analyzer.
 */

import { type AuthorityRow } from './researchSession'

export const JUDGMENT_HANDOFF_SESSION_KEY = 'cp-law:judgment-handoff:v1'

export interface JudgmentHandoffPayload {
  caseName?: string
  citation?: string
  court?: string
  canonicalEntityId?: string
  text?: string
}

/** Formats an optional starter slot with metadata headers for pasted judgment text. */
export function buildStarterJudgmentText(payload: JudgmentHandoffPayload): string {
  if (payload.text && payload.text.trim()) {
    return payload.text.trim()
  }

  const parts: string[] = []
  const title = [payload.caseName?.trim(), payload.citation?.trim()].filter(Boolean).join(' — ')
  if (title) {
    parts.push(`[${title}]`)
  }
  if (payload.court?.trim()) {
    parts.push(`Court: ${payload.court.trim()}`)
  }
  if (payload.canonicalEntityId?.trim()) {
    parts.push(`Canonical ID: ${payload.canonicalEntityId.trim()}`)
  }

  if (parts.length === 0) {
    return ''
  }

  return `${parts.join('\n')}\n---\n\n`
}

/** Builds the deep-link URL for Judgment Analyzer with public case identifier. */
export function buildJudgmentAnalyzerUrl(
  input?: (AuthorityRow | JudgmentHandoffPayload) | string
): string {
  if (!input) return '/tool/judgment-analyzer'

  if (typeof input === 'string') {
    const trimmed = input.trim()
    return trimmed ? `/tool/judgment-analyzer?case=${encodeURIComponent(trimmed)}` : '/tool/judgment-analyzer'
  }

  const caseIdent = (input.caseName || input.citation || '').trim()
  if (!caseIdent) return '/tool/judgment-analyzer'

  return `/tool/judgment-analyzer?case=${encodeURIComponent(caseIdent)}`
}

/** Saves handoff payload to sessionStorage. */
export function saveJudgmentHandoff(
  input: (AuthorityRow | JudgmentHandoffPayload) | string
): void {
  if (typeof window === 'undefined' || !input) return
  try {
    const payload: JudgmentHandoffPayload =
      typeof input === 'string'
        ? { text: input }
        : {
            caseName: input.caseName,
            citation: input.citation,
            court: input.court,
            canonicalEntityId: input.canonicalEntityId,
          }
    window.sessionStorage?.setItem(JUDGMENT_HANDOFF_SESSION_KEY, JSON.stringify(payload))
  } catch {
    // sessionStorage quota or disabled
  }
}

/** Loads and clears handoff from URL query or sessionStorage. */
export function loadAndClearJudgmentHandoff(): {
  payload: JudgmentHandoffPayload | null
  initialText: string
  source: 'query' | 'session' | null
} {
  if (typeof window === 'undefined') {
    return { payload: null, initialText: '', source: null }
  }

  // 1. Check URL query parameters (public case name / citation or direct text)
  try {
    const search = window.location?.search || ''
    const params = new URLSearchParams(search)
    const rawText = params.get('text') || params.get('q')
    if (rawText && rawText.trim()) {
      const payload: JudgmentHandoffPayload = { text: rawText.trim() }
      return {
        payload,
        initialText: rawText.trim(),
        source: 'query',
      }
    }

    const caseParam = params.get('case') || params.get('title')
    if (caseParam && caseParam.trim()) {
      const payload: JudgmentHandoffPayload = { caseName: caseParam.trim() }
      return {
        payload,
        initialText: buildStarterJudgmentText(payload),
        source: 'query',
      }
    }
  } catch {
    // ignore
  }

  // 2. Check sessionStorage
  try {
    const stored = window.sessionStorage?.getItem(JUDGMENT_HANDOFF_SESSION_KEY)
    if (stored && stored.trim()) {
      window.sessionStorage?.removeItem(JUDGMENT_HANDOFF_SESSION_KEY)
      const parsed = JSON.parse(stored) as JudgmentHandoffPayload
      return {
        payload: parsed,
        initialText: buildStarterJudgmentText(parsed),
        source: 'session',
      }
    }
  } catch {
    // ignore
  }

  return { payload: null, initialText: '', source: null }
}
