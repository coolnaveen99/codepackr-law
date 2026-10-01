export type JudgmentSectionKey =
  | 'caseMetadata'
  | 'facts'
  | 'proceduralHistory'
  | 'issues'
  | 'submissions'
  | 'statutoryProvisions'
  | 'authorities'
  | 'evidence'
  | 'reasoning'
  | 'findings'
  | 'ratio'
  | 'obiter'
  | 'finalOrder'
  | 'unresolvedQuestions'
  | 'followUpAuthorities'

export type JudgmentExtractionConfidence = 'high' | 'medium' | 'low' | 'not-detected'

export interface JudgmentSourceSpan {
  section: JudgmentSectionKey
  text: string
  startLine: number
  endLine: number
  startParagraph: number
  endParagraph: number
  confidence: JudgmentExtractionConfidence
  source: 'user-provided'
  interpretation: 'generated-structure'
}

export interface JudgmentAnalysis {
  wordCount: number
  paragraphCount: number
  lineCount: number
  sections: Record<JudgmentSectionKey, string>
  spans: JudgmentSourceSpan[]
  warnings: string[]
  inputKind: 'text' | 'txt' | 'docx'
}

const SECTION_DEFS: Array<{ key: JudgmentSectionKey; labels: RegExp[] }> = [
  { key: 'facts', labels: [/^brief facts?\b/i, /^facts?\b/i, /^factual background\b/i] },
  { key: 'proceduralHistory', labels: [/^procedural history\b/i, /^history of proceedings\b/i] },
  { key: 'issues', labels: [/^issues?\b/i, /^questions? presented\b/i, /^questions? of law\b/i] },
  { key: 'submissions', labels: [/^submissions?\b/i, /^arguments?\b/i, /^contentions?\b/i, /^parties['’] submissions\b/i] },
  { key: 'statutoryProvisions', labels: [/^statutory provisions?\b/i, /^provisions? involved\b/i, /^statutes?\b/i, /^laws? involved\b/i] },
  { key: 'authorities', labels: [/^authorities? cited\b/i, /^precedents?\b/i, /^cases? cited\b/i, /^authorities relied upon\b/i] },
  { key: 'evidence', labels: [/^evidence\b/i, /^evidence discussed\b/i, /^material evidence\b/i] },
  { key: 'reasoning', labels: [/^reasoning\b/i, /^court reasoning\b/i, /^discussion\b/i, /^analysis\b/i] },
  { key: 'findings', labels: [/^findings?\b/i, /^issue[- ]wise findings?\b/i] },
  { key: 'ratio', labels: [/^ratio(?: decidendi)?\b/i, /^holding\b/i, /^held\b/i] },
  { key: 'obiter', labels: [/^obiter\b/i, /^observations?\b/i] },
  { key: 'finalOrder', labels: [/^final order\b/i, /^order\b/i, /^operative portion\b/i, /^disposition\b/i, /^conclusion\b/i] },
  { key: 'unresolvedQuestions', labels: [/^unresolved questions?\b/i, /^open questions?\b/i] },
  { key: 'followUpAuthorities', labels: [/^follow[- ]up authorities?\b/i, /^later authorities?\b/i, /^related authorities?\b/i] },
]

const ALL_KEYS: JudgmentSectionKey[] = ['caseMetadata', ...SECTION_DEFS.map((d) => d.key)]

function blankSections(): Record<JudgmentSectionKey, string> {
  return Object.fromEntries(ALL_KEYS.map((key) => [key, ''])) as Record<JudgmentSectionKey, string>
}

function stripHeading(line: string): string {
  return line
    .replace(/^#{1,6}\s*/, '')
    .replace(/^\d+[.)]\s*/, '')
    .replace(/[：:]\s*$/, '')
    .trim()
}

function sectionForHeading(line: string): JudgmentSectionKey | null {
  const clean = stripHeading(line)
  return SECTION_DEFS.find((def) => def.labels.some((label) => label.test(clean)))?.key || null
}

function paragraphNumberAtLine(paragraphs: Array<{ startLine: number; endLine: number }>, line: number): number {
  const index = paragraphs.findIndex((p) => line >= p.startLine && line <= p.endLine)
  return index >= 0 ? index + 1 : 0
}

function normalizeLines(text: string): string[] {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
}

export function analyzeJudgmentText(text: string, inputKind: JudgmentAnalysis['inputKind'] = 'text'): JudgmentAnalysis {
  const lines = normalizeLines(text)
  const sections = blankSections()
  const warnings: string[] = []
  const spans: JudgmentSourceSpan[] = []
  const paragraphs: Array<{ startLine: number; endLine: number; text: string }> = []

  let paragraphStart = -1
  let paragraphParts: string[] = []
  const flushParagraph = (endLine: number) => {
    if (paragraphStart < 0) return
    const value = paragraphParts.join(' ').replace(/\s+/g, ' ').trim()
    if (value) paragraphs.push({ startLine: paragraphStart, endLine, text: value })
    paragraphStart = -1
    paragraphParts = []
  }

  lines.forEach((line, index) => {
    if (line.trim()) {
      if (paragraphStart < 0) paragraphStart = index + 1
      paragraphParts.push(line.trim())
    } else {
      flushParagraph(index)
    }
  })
  flushParagraph(lines.length)

  const headings: Array<{ key: JudgmentSectionKey; line: number; label: string }> = []
  lines.forEach((line, index) => {
    const key = sectionForHeading(line)
    if (key) headings.push({ key, line: index + 1, label: stripHeading(line) })
  })

  if (!headings.length) {
    warnings.push('No recognised section headings were detected. The analyzer will not infer legal facts, holdings, authorities, or procedural history.')
    sections.caseMetadata = lines.slice(0, 8).filter(Boolean).join('\n')
  }

  headings.forEach((heading, index) => {
    const next = headings[index + 1]
    const bodyStart = heading.line + 1
    const bodyEnd = (next?.line || lines.length + 1) - 1
    const bodyLines = lines.slice(bodyStart - 1, bodyEnd)
    const value = bodyLines.join('\n').trim()
    sections[heading.key] = value

    if (value) {
      spans.push({
        section: heading.key,
        text: value,
        startLine: bodyStart,
        endLine: bodyEnd,
        startParagraph: paragraphNumberAtLine(paragraphs, bodyStart),
        endParagraph: paragraphNumberAtLine(paragraphs, bodyEnd),
        confidence: 'high',
        source: 'user-provided',
        interpretation: 'generated-structure',
      })
    }
  })

  const firstHeadingLine = headings[0]?.line || lines.length + 1
  sections.caseMetadata = lines.slice(0, Math.max(0, firstHeadingLine - 1)).join('\n').trim()

  if (!sections.caseMetadata) {
    warnings.push('No metadata header was detected before the first recognised section.')
  }
  const missing = ALL_KEYS.filter((key) => key !== 'caseMetadata' && !sections[key])
  if (missing.length) warnings.push(`No labelled source block detected for: ${missing.join(', ')}.`)

  return {
    wordCount: text.trim() ? text.trim().split(/\s+/).length : 0,
    paragraphCount: paragraphs.length,
    lineCount: lines.length,
    sections,
    spans,
    warnings,
    inputKind,
  }
}

export function sectionLabel(key: JudgmentSectionKey): string {
  const labels: Record<JudgmentSectionKey, string> = {
    caseMetadata: 'Case metadata',
    facts: 'Facts',
    proceduralHistory: 'Procedural history',
    issues: 'Issues',
    submissions: "Parties' submissions",
    statutoryProvisions: 'Statutory provisions',
    authorities: 'Authorities cited',
    evidence: 'Evidence discussed',
    reasoning: 'Court reasoning',
    findings: 'Findings',
    ratio: 'Ratio decidendi / holding',
    obiter: 'Obiter / observations',
    finalOrder: 'Final order',
    unresolvedQuestions: 'Unresolved questions',
    followUpAuthorities: 'Follow-up authorities',
  }
  return labels[key]
}

export function extractCitationCandidates(text: string): string[] {
  const matches = text.match(/(?:AIR\s+\d{4}\s+[A-Z]{1,8}\s+\d+|\(\d{4}\)\s+\d+\s+[A-Z][A-Za-z. ]*\s+\d+|\b\d{4}\s+INSC\s+\d+\b)/g) || []
  return Array.from(new Set(matches.map((m) => m.trim())))
}

export function validateNoInventedSourceMetadata(analysis: JudgmentAnalysis): boolean {
  return analysis.spans.every((span) => span.source === 'user-provided' && span.interpretation === 'generated-structure')
}
