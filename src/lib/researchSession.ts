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

export function loadResearchSession(): ResearchSession {
  const raw = loadJson<unknown>(RESEARCH_SESSION_KEY, null)
  if (isSessionShape(raw)) return raw
  return emptyResearchSession()
}

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
  const authorityBlocks = session.authorities
    .filter((r) => r.caseName || r.citation || r.canonicalEntityId || r.statute)
    .map((r, i) => {
      const lines = [
        `### ${i + 1}. ${r.caseName || r.statute || r.citation || 'Unnamed authority'}`,
        r.court ? `- **Court:** ${r.court}` : '',
        r.date ? `- **Date:** ${r.date}` : '',
        r.citation ? `- **Citation:** ${r.citation}` : '',
        r.statute ? `- **Statute / provision:** ${r.statute}` : '',
        r.issue ? `- **Issue:** ${r.issue}` : '',
        r.holding ? `- **Holding / note:** ${r.holding}` : '',
        r.paragraph ? `- **Para / pin cite:** ${r.paragraph}` : '',
        r.treatment ? `- **Treatment:** ${r.treatment}` : '',
        r.source ? `- **Source:** ${r.source}` : '',
        r.canonicalEntityId ? `- **Canonical ID:** ${r.canonicalEntityId}` : '',
        `- **Verification status:** ${r.verification}`,
      ].filter(Boolean)
      return lines.join('\n')
    })

  const lines = [
    '# Research Note',
    '',
    '> **Browser-local only.** Educational research aid — not legal advice. Verify every citation on official sources before reliance.',
    '',
    `*Session updated:* ${session.updatedAt}`,
    '',
    '## 1. Question presented',
    '',
    q.question || '—',
    '',
    '### Matter filters',
    '',
    `- **Jurisdiction:** ${q.jurisdiction || '—'}`,
    q.courtLevel ? `- **Court level:** ${q.courtLevel}` : '',
    q.subjectSlug ? `- **Subject:** ${q.subjectSlug}` : '',
    q.act ? `- **Act:** ${q.act}` : '',
    q.section ? `- **Section:** ${q.section}` : '',
    q.dateFrom || q.dateTo
      ? `- **Date range:** ${q.dateFrom || '…'} – ${q.dateTo || '…'}`
      : '',
    '',
    '## 2. Short answer',
    '',
    session.shortAnswer || '—',
    '',
    '## 3. Issues',
    '',
    `- **Primary:** ${issues.primary || '—'}`,
    issues.secondary.length ? `- **Secondary:** ${issues.secondary.join('; ')}` : '',
    issues.statutory.length ? `- **Statutory:** ${issues.statutory.join('; ')}` : '',
    issues.procedural.length ? `- **Procedural:** ${issues.procedural.join('; ')}` : '',
    issues.evidence.length ? `- **Evidence:** ${issues.evidence.join('; ')}` : '',
    issues.limitation.length ? `- **Limitation:** ${issues.limitation.join('; ')}` : '',
    '',
    '## 4. Authority matrix',
    '',
    ...(authorityBlocks.length ? authorityBlocks : ['—']),
    '',
    '## 5. Analysis',
    '',
    session.analysis || '—',
    '',
    '## 6. Counter-authorities and contrary views',
    '',
    session.counterAuthorities || '—',
    '',
    '## 7. Unresolved questions',
    '',
    session.unresolved || '—',
    '',
    '## 8. Verification checklist',
    '',
    '- [ ] Primary statute text checked on India Code / official source',
    '- [ ] Citations opened on court site or reliable reporter',
    '- [ ] Ratio distinguished from obiter',
    '- [ ] Current-law / amendment status confirmed',
    '- [ ] Paragraph / pin cites verified against the full text',
    '',
    '---',
    '',
    '_Structured note generated in Research Workbench. Data stays on this device unless you export it._',
  ]
  return lines.filter((l) => l !== '').join('\n')
}

/** Filename-safe stem for research note download (PH3-040). */
export function researchNoteFilename(session: ResearchSession): string {
  const day = new Date().toISOString().slice(0, 10)
  const act = (session.question.act || session.question.section || 'research')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40)
  return `research-note-${act || 'session'}-${day}.md`
}

/** Trigger browser download of the markdown research note (client-side only). */
export function downloadResearchNoteMarkdown(session: ResearchSession): void {
  if (typeof document === 'undefined') return
  const text = researchNoteFromSession(session)
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = researchNoteFilename(session)
  a.click()
  URL.revokeObjectURL(url)
}
