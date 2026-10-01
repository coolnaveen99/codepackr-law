/**
 * PH3-010 — Research session model + browser-local persistence.
 * Privacy: session stays on-device; never place case facts in URLs or analytics.
 */
import { CP_LAW_NS, loadJson, saveJson, removeKey } from './localStore'

export const RESEARCH_SESSION_KEY = CP_LAW_NS.research

/** Roadmap / Phase 4-aligned verification labels. */
export type VerificationStatus =
  | 'verified'
  | 'partial'
  | 'not-verified'
  | 'conflict'
  | 'user-provided'
  | 'needs-review'

export interface ResearchQuestion {
  question: string
  jurisdiction: string
  courtLevel?: string
  dateFrom?: string
  dateTo?: string
  subjectSlug?: string
  act?: string
  section?: string
}

export interface IssueSet {
  primary: string
  secondary: string[]
  statutory: string[]
  procedural: string[]
  evidence: string[]
  limitation: string[]
}

export interface AuthorityRow {
  id: string
  caseName: string
  court: string
  date?: string
  citation: string
  statute: string
  issue: string
  holding: string
  paragraph?: string
  treatment?: string
  source?: string
  canonicalEntityId?: string
  verification: VerificationStatus
}

export interface ResearchSession {
  version: 1
  updatedAt: string
  question: ResearchQuestion
  issues: IssueSet
  authorities: AuthorityRow[]
  analysis: string
  counterAuthorities: string
  unresolved: string
  shortAnswer?: string
}

export function newAuthorityId(): string {
  return Math.random().toString(36).slice(2, 10)
}

export function emptyAuthorityRow(): AuthorityRow {
  return {
    id: newAuthorityId(),
    caseName: '',
    court: '',
    citation: '',
    statute: '',
    issue: '',
    holding: '',
    verification: 'user-provided',
  }
}

export function emptyResearchSession(): ResearchSession {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    question: {
      question: '',
      jurisdiction: 'India — All courts',
    },
    issues: {
      primary: '',
      secondary: [],
      statutory: [],
      procedural: [],
      evidence: [],
      limitation: [],
    },
    authorities: [emptyAuthorityRow()],
    analysis: '',
    counterAuthorities: '',
    unresolved: '',
  }
}

function isSessionShape(value: unknown): value is ResearchSession {
  if (!value || typeof value !== 'object') return false
  const v = value as ResearchSession
  return v.version === 1 && !!v.question && !!v.issues && Array.isArray(v.authorities)
}

/** Load session from localStorage; returns empty session if missing/invalid. */
export function loadResearchSession(): ResearchSession {
  const raw = loadJson<ResearchSession>(RESEARCH_SESSION_KEY)
  if (raw && isSessionShape(raw)) {
    return {
      ...emptyResearchSession(),
      ...raw,
      question: { ...emptyResearchSession().question, ...raw.question },
      issues: { ...emptyResearchSession().issues, ...raw.issues },
      authorities:
        raw.authorities.length > 0 ? raw.authorities : [emptyAuthorityRow()],
    }
  }
  return emptyResearchSession()
}

/** Persist session (updates updatedAt). */
export function saveResearchSession(session: ResearchSession): ResearchSession {
  const next: ResearchSession = {
    ...session,
    version: 1,
    updatedAt: new Date().toISOString(),
  }
  saveJson(RESEARCH_SESSION_KEY, next)
  return next
}

export function clearResearchSession(): void {
  removeKey(RESEARCH_SESSION_KEY)
}

/** Build markdown research note from session (browser-local; not legal advice). */
export function researchNoteFromSession(session: ResearchSession): string {
  const q = session.question
  const issues = session.issues
  const lines = [
    '# Research Note (browser-local)',
    '',
    '## 1. Question Presented',
    q.question || '—',
    '',
    `Jurisdiction: ${q.jurisdiction || '—'}`,
    q.courtLevel ? `Court level: ${q.courtLevel}` : '',
    q.subjectSlug ? `Subject: ${q.subjectSlug}` : '',
    q.act ? `Act: ${q.act}` : '',
    q.section ? `Section: ${q.section}` : '',
    q.dateFrom || q.dateTo ? `Date range: ${q.dateFrom || '…'} – ${q.dateTo || '…'}` : '',
    '',
    '## 2. Short Answer',
    session.shortAnswer || '—',
    '',
    '## 3. Issues',
    `Primary: ${issues.primary || '—'}`,
    issues.secondary.length ? `Secondary: ${issues.secondary.join('; ')}` : '',
    issues.statutory.length ? `Statutory: ${issues.statutory.join('; ')}` : '',
    issues.procedural.length ? `Procedural: ${issues.procedural.join('; ')}` : '',
    issues.evidence.length ? `Evidence: ${issues.evidence.join('; ')}` : '',
    issues.limitation.length ? `Limitation: ${issues.limitation.join('; ')}` : '',
    '',
    '## 4. Authorities',
    ...session.authorities
      .filter((r) => r.caseName || r.citation)
      .map((r, i) => {
        const parts = [
          `${i + 1}. ${r.caseName || 'Unnamed'}`,
          r.court || '',
          r.date ? `Date: ${r.date}` : '',
          r.citation || '',
          r.statute || '',
          r.issue ? `Issue: ${r.issue}` : '',
          r.holding ? `Holding: ${r.holding}` : '',
          r.paragraph ? `Para: ${r.paragraph}` : '',
          r.treatment ? `Treatment: ${r.treatment}` : '',
          r.source ? `Source: ${r.source}` : '',
          `Status: ${r.verification}`,
        ].filter(Boolean)
        return parts.join(' | ')
      }),
    '',
    '## 5. Analysis',
    session.analysis || '—',
    '',
    '## 6. Counter-authorities',
    session.counterAuthorities || '—',
    '',
    '## 7. Unresolved questions',
    session.unresolved || '—',
    '',
    '## 8. Verification checklist',
    '- [ ] Primary statute text checked on India Code / official source',
    '- [ ] Citations opened on court site or reliable reporter',
    '- [ ] Ratio distinguished from obiter',
    '- [ ] Current-law / amendment status confirmed',
    '',
    `_AI-free structured note. Saved locally ${session.updatedAt}. Not legal advice._`,
  ]
  return lines.filter((l) => l !== '').join('\n')
}
