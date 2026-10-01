/**
 * PH3-010 — Research session model + browser-local persistence.
 * Privacy: session stays on-device; never place case facts in URLs or analytics.
 */
import { CP_LAW_NS, loadJson, saveJson, removeKey } from './localStore'
import { Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx'

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

/** Filename-safe stem for research note / session export (PH3-040, PH3-080). */
export function researchNoteFilename(
  session: ResearchSession,
  ext: 'md' | 'docx' | 'json' = 'md'
): string {
  const day = new Date().toISOString().slice(0, 10)
  const act = (session.question.act || session.question.section || 'research')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40)
  return `research-note-${act || 'session'}-${day}.${ext}`
}

/** Filename for research session JSON backup (PH3-080). */
export function researchSessionFilename(session: ResearchSession): string {
  return researchNoteFilename(session, 'json').replace('research-note-', 'research-session-')
}

/** Trigger browser download of the markdown research note (client-side only). */
export function downloadResearchNoteMarkdown(session: ResearchSession): void {
  if (typeof document === 'undefined') return
  const text = researchNoteFromSession(session)
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = researchNoteFilename(session, 'md')
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/** Validates and normalizes raw JSON data into a valid ResearchSession (PH3-080). */
export function validateAndNormalizeSession(input: unknown): ResearchSession {
  if (!input || typeof input !== 'object') {
    throw new Error('Invalid session JSON: root must be a valid JSON object')
  }
  const data = input as Partial<ResearchSession>
  const q = data.question || ({} as Partial<ResearchQuestion>)
  const iss = data.issues || ({} as Partial<IssueSet>)
  const auths = Array.isArray(data.authorities) ? data.authorities : []

  const normalizedAuthorities: AuthorityRow[] = auths.map((a) => {
    const row = (a && typeof a === 'object' ? a : {}) as Partial<AuthorityRow>
    return {
      id: row.id || newAuthorityId(),
      caseName: typeof row.caseName === 'string' ? row.caseName : '',
      court: typeof row.court === 'string' ? row.court : '',
      citation: typeof row.citation === 'string' ? row.citation : '',
      statute: typeof row.statute === 'string' ? row.statute : '',
      issue: typeof row.issue === 'string' ? row.issue : '',
      holding: typeof row.holding === 'string' ? row.holding : '',
      date: typeof row.date === 'string' ? row.date : undefined,
      paragraph: typeof row.paragraph === 'string' ? row.paragraph : undefined,
      treatment: typeof row.treatment === 'string' ? row.treatment : undefined,
      source: typeof row.source === 'string' ? row.source : undefined,
      canonicalEntityId: typeof row.canonicalEntityId === 'string' ? row.canonicalEntityId : undefined,
      verification: (row.verification || 'user-provided') as VerificationStatus,
    }
  })

  return {
    version: 1,
    updatedAt:
      typeof data.updatedAt === 'string' && !isNaN(Date.parse(data.updatedAt))
        ? data.updatedAt
        : new Date().toISOString(),
    question: {
      question: typeof q.question === 'string' ? q.question : '',
      jurisdiction: typeof q.jurisdiction === 'string' ? q.jurisdiction : 'India — All courts',
      courtLevel: typeof q.courtLevel === 'string' ? q.courtLevel : undefined,
      dateFrom: typeof q.dateFrom === 'string' ? q.dateFrom : undefined,
      dateTo: typeof q.dateTo === 'string' ? q.dateTo : undefined,
      subjectSlug: typeof q.subjectSlug === 'string' ? q.subjectSlug : undefined,
      act: typeof q.act === 'string' ? q.act : undefined,
      section: typeof q.section === 'string' ? q.section : undefined,
    },
    issues: {
      primary: typeof iss.primary === 'string' ? iss.primary : '',
      secondary: Array.isArray(iss.secondary)
        ? iss.secondary.filter((x): x is string => typeof x === 'string')
        : [],
      statutory: Array.isArray(iss.statutory)
        ? iss.statutory.filter((x): x is string => typeof x === 'string')
        : [],
      procedural: Array.isArray(iss.procedural)
        ? iss.procedural.filter((x): x is string => typeof x === 'string')
        : [],
      evidence: Array.isArray(iss.evidence)
        ? iss.evidence.filter((x): x is string => typeof x === 'string')
        : [],
      limitation: Array.isArray(iss.limitation)
        ? iss.limitation.filter((x): x is string => typeof x === 'string')
        : [],
    },
    authorities: normalizedAuthorities,
    analysis: typeof data.analysis === 'string' ? data.analysis : '',
    counterAuthorities: typeof data.counterAuthorities === 'string' ? data.counterAuthorities : '',
    unresolved: typeof data.unresolved === 'string' ? data.unresolved : '',
    shortAnswer: typeof data.shortAnswer === 'string' ? data.shortAnswer : undefined,
  }
}

/** Formats a ResearchSession as a formatted JSON string (PH3-080). */
export function exportResearchSessionJson(session: ResearchSession): string {
  return JSON.stringify(session, null, 2)
}

/** Trigger browser download of the full session as JSON backup (PH3-080). */
export function downloadResearchSessionJson(session: ResearchSession): void {
  if (typeof document === 'undefined') return
  const text = exportResearchSessionJson(session)
  const blob = new Blob([text], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = researchSessionFilename(session)
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function buildDocxElementsFromSession(session: ResearchSession): Paragraph[] {
  const q = session.question
  const issues = session.issues
  const paras: Paragraph[] = [
    new Paragraph({
      heading: HeadingLevel.TITLE,
      children: [
        new TextRun({ text: 'LEGAL RESEARCH NOTE', bold: true, size: 36, font: 'Times New Roman' }),
      ],
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Browser-local only · Educational research aid — not legal advice. Verify every citation on official sources before reliance.',
          italics: true,
          size: 20,
          color: '555555',
          font: 'Times New Roman',
        }),
      ],
      spacing: { after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Session updated: ${session.updatedAt}`,
          size: 18,
          color: '777777',
          font: 'Times New Roman',
        }),
      ],
      spacing: { after: 300 },
    }),
    // 1. Question presented
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({ text: '1. Question Presented', bold: true, size: 28, font: 'Times New Roman' }),
      ],
      spacing: { before: 240, after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: q.question || '—', size: 24, font: 'Times New Roman' })],
      spacing: { after: 160 },
    }),
    // Matter filters
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text: 'Matter Filters', bold: true, size: 24, font: 'Times New Roman' })],
      spacing: { before: 120, after: 80 },
    }),
    new Paragraph({
      bullet: { level: 0 },
      children: [
        new TextRun({ text: 'Jurisdiction: ', bold: true, font: 'Times New Roman' }),
        new TextRun({ text: q.jurisdiction || '—', font: 'Times New Roman' }),
      ],
    }),
  ]

  if (q.courtLevel) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Court level: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: q.courtLevel, font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (q.subjectSlug) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Subject: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: q.subjectSlug, font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (q.act) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Act: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: q.act, font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (q.section) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Section: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: q.section, font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (q.dateFrom || q.dateTo) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Date range: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: `${q.dateFrom || '…'} – ${q.dateTo || '…'}`, font: 'Times New Roman' }),
        ],
      })
    )
  }

  // 2. Short answer
  paras.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: '2. Short Answer', bold: true, size: 28, font: 'Times New Roman' })],
      spacing: { before: 240, after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: session.shortAnswer || '—', size: 24, font: 'Times New Roman' })],
      spacing: { after: 160 },
    }),
    // 3. Issues
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: '3. Issues', bold: true, size: 28, font: 'Times New Roman' })],
      spacing: { before: 240, after: 120 },
    }),
    new Paragraph({
      bullet: { level: 0 },
      children: [
        new TextRun({ text: 'Primary: ', bold: true, font: 'Times New Roman' }),
        new TextRun({ text: issues.primary || '—', font: 'Times New Roman' }),
      ],
    })
  )
  if (issues.secondary.length) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Secondary: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: issues.secondary.join('; '), font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (issues.statutory.length) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Statutory: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: issues.statutory.join('; '), font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (issues.procedural.length) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Procedural: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: issues.procedural.join('; '), font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (issues.evidence.length) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Evidence: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: issues.evidence.join('; '), font: 'Times New Roman' }),
        ],
      })
    )
  }
  if (issues.limitation.length) {
    paras.push(
      new Paragraph({
        bullet: { level: 0 },
        children: [
          new TextRun({ text: 'Limitation: ', bold: true, font: 'Times New Roman' }),
          new TextRun({ text: issues.limitation.join('; '), font: 'Times New Roman' }),
        ],
      })
    )
  }

  // 4. Authority matrix
  paras.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: '4. Authority Matrix', bold: true, size: 28, font: 'Times New Roman' })],
      spacing: { before: 240, after: 120 },
    })
  )
  if (session.authorities.length === 0) {
    paras.push(
      new Paragraph({
        children: [new TextRun({ text: '—', size: 24, font: 'Times New Roman' })],
        spacing: { after: 160 },
      })
    )
  } else {
    for (const r of session.authorities) {
      const headingText = [r.caseName || 'Authority', r.citation ? `(${r.citation})` : '']
        .filter(Boolean)
        .join(' ')
      paras.push(
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: headingText, bold: true, size: 24, font: 'Times New Roman' })],
          spacing: { before: 160, after: 80 },
        })
      )
      if (r.court) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Court: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.court, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.date) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Decision date: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.date, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.statute) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Statute / section: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.statute, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.paragraph) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Paragraph / pin cite: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.paragraph, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.treatment) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Treatment: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.treatment, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.issue) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Issue addressed: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.issue, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.holding) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Holding / ratio: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.holding, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.source) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Source: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.source, font: 'Times New Roman' }),
            ],
          })
        )
      }
      if (r.canonicalEntityId) {
        paras.push(
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Canonical ID: ', bold: true, font: 'Times New Roman' }),
              new TextRun({ text: r.canonicalEntityId, font: 'Times New Roman' }),
            ],
          })
        )
      }
      paras.push(
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Verification status: ', bold: true, font: 'Times New Roman' }),
            new TextRun({ text: r.verification, font: 'Times New Roman' }),
          ],
        })
      )
    }
  }

  // 5. Analysis
  paras.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: '5. Analysis', bold: true, size: 28, font: 'Times New Roman' })],
      spacing: { before: 240, after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: session.analysis || '—', size: 24, font: 'Times New Roman' })],
      spacing: { after: 160 },
    }),
    // 6. Counter-authorities
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({
          text: '6. Counter-Authorities and Contrary Views',
          bold: true,
          size: 28,
          font: 'Times New Roman',
        }),
      ],
      spacing: { before: 240, after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: session.counterAuthorities || '—', size: 24, font: 'Times New Roman' })],
      spacing: { after: 160 },
    }),
    // 7. Unresolved questions
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({ text: '7. Unresolved Questions', bold: true, size: 28, font: 'Times New Roman' }),
      ],
      spacing: { before: 240, after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: session.unresolved || '—', size: 24, font: 'Times New Roman' })],
      spacing: { after: 160 },
    }),
    // 8. Verification checklist
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({ text: '8. Verification Checklist', bold: true, size: 28, font: 'Times New Roman' }),
      ],
      spacing: { before: 240, after: 120 },
    }),
    ...[
      'Primary statute text checked on India Code / official source',
      'Citations opened on court site or reliable reporter',
      'Ratio distinguished from obiter',
      'Current-law / amendment status confirmed',
      'Paragraph / pin cites verified against the full text',
    ].map(
      (item) =>
        new Paragraph({
          bullet: { level: 0 },
          children: [new TextRun({ text: `[  ] ${item}`, font: 'Times New Roman' })],
        })
    ),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Structured note generated in Research Workbench. Data stays on this device unless you export it.',
          italics: true,
          size: 18,
          color: '888888',
          font: 'Times New Roman',
        }),
      ],
      spacing: { before: 360 },
    })
  )

  return paras
}

/** Generates DOCX blob representing the full legal research note (PH3-080). */
export async function generateResearchNoteDocx(session: ResearchSession): Promise<Blob> {
  const doc = new Document({
    creator: 'CodePackr Law — Legal Research Workbench',
    title: 'Legal Research Note',
    description: 'Generated client-side by CodePackr Law',
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
          },
        },
        children: buildDocxElementsFromSession(session),
      },
    ],
  })
  return await Packer.toBlob(doc)
}

/** Trigger browser download of formatted DOCX research note (client-side only, PH3-080). */
export async function downloadResearchNoteDocx(session: ResearchSession): Promise<void> {
  if (typeof document === 'undefined') return
  const blob = await generateResearchNoteDocx(session)
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = researchNoteFilename(session, 'docx')
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
