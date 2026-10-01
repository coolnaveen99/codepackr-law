export type ComparisonCategory = 'issues' | 'statutes' | 'authorities' | 'facts' | 'legalRules' | 'evidence' | 'reasoning' | 'outcomes'
export type AuthorityTreatment = 'followed' | 'relied-upon' | 'distinguished' | 'considered' | 'not-addressed' | 'unverified'
export interface ComparisonEvidence { text: string; source: 'judgment-a' | 'judgment-b'; line: number }
export interface JudgmentComparisonReport {
  common: { issues: string[]; statutes: string[]; authorities: string[] }
  differences: { facts: ComparisonEvidence[]; legalRules: ComparisonEvidence[]; evidence: ComparisonEvidence[]; reasoning: ComparisonEvidence[]; outcomes: ComparisonEvidence[] }
  authorityTreatment: Array<{ authority: string; treatmentA: AuthorityTreatment; treatmentB: AuthorityTreatment; evidence: ComparisonEvidence[] }>
  warnings: string[]
  privacy: 'browser-local'
}
const SECTION_ALIASES: Record<ComparisonCategory, RegExp[]> = {
  issues: [/^issues?\b/i, /^questions? presented\b/i, /^questions? of law\b/i],
  statutes: [/^statutory provisions?\b/i, /^provisions?\b/i, /^statutes?\b/i, /^laws? involved\b/i],
  authorities: [/^authorities? cited\b/i, /^cases? cited\b/i, /^precedents?\b/i, /^authorities relied upon\b/i],
  facts: [/^facts?\b/i, /^material facts?\b/i, /^factual background\b/i],
  legalRules: [/^ratio(?: decidendi)?\b/i, /^holding\b/i, /^legal rules?\b/i, /^governing law\b/i],
  evidence: [/^evidence\b/i, /^evidence discussed\b/i],
  reasoning: [/^reasoning\b/i, /^analysis\b/i, /^discussion\b/i],
  outcomes: [/^final order\b/i, /^order\b/i, /^disposition\b/i, /^relief\b/i, /^conclusion\b/i],
}
function cleanHeading(line: string): string { return line.replace(/^#{1,6}\s*/, '').replace(/^\d+[.)]\s*/, '').replace(/[：:]\s*$/, '').trim() }
function categoryForHeading(line: string): ComparisonCategory | null {
  const heading = cleanHeading(line)
  for (const [category, patterns] of Object.entries(SECTION_ALIASES) as Array<[ComparisonCategory, RegExp[]]>) if (patterns.some((pattern) => pattern.test(heading))) return category
  return null
}
function normalizeTerm(value: string): string { return value.toLowerCase().replace(/[“”"'.,;:()[\]{}]/g, ' ').replace(/\s+/g, ' ').trim() }
function meaningfulTerms(text: string): string[] {
  const stop = new Set(['the','and','that','this','with','from','were','was','are','for','shall','under','where','which','into','their','there','such','have','has','not','but','court','case'])
  return Array.from(new Set((text.toLowerCase().match(/[a-z][a-z0-9.-]{2,}/g) || []).filter((word) => !stop.has(word))))
}
function extractCitationLikeAuthorities(text: string): string[] {
  const matches = text.match(/(?:AIR\s+\d{4}\s+[A-Z]{1,8}\s+\d+|\(\d{4}\)\s+\d+\s+[A-Z][A-Za-z. ]*\s+\d+|\b\d{4}\s+INSC\s+\d+\b)/g) || []
  return Array.from(new Set(matches.map(normalizeTerm)))
}
function extractStatutes(text: string): string[] {
  const matches = text.match(/(?:section|s\.)\s+[0-9A-Za-z()./-]+(?:\s+of\s+the\s+[A-Za-z][A-Za-z .&'-]{2,80})?/gi) || []
  return Array.from(new Set(matches.map(normalizeTerm)))
}
function sectionBlocks(text: string): Map<ComparisonCategory, ComparisonEvidence[]> {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  const blocks = new Map<ComparisonCategory, ComparisonEvidence[]>()
  let current: ComparisonCategory | null = null
  lines.forEach((line, index) => {
    const next = categoryForHeading(line)
    if (next) { current = next; return }
    if (current && line.trim()) { const list = blocks.get(current) || []; list.push({ text: line.trim(), source: 'judgment-a', line: index + 1 }); blocks.set(current, list) }
  })
  return blocks
}
function termsForCategory(text: string, category: ComparisonCategory): string[] {
  if (category === 'authorities') return extractCitationLikeAuthorities(text)
  if (category === 'statutes') return extractStatutes(text)
  return meaningfulTerms(text)
}
function classifyTreatment(text: string, authority: string): AuthorityTreatment {
  const normalized = normalizeTerm(text)
  if (!normalized.includes(authority)) return 'not-addressed'
  if (/\b(distinguish|distinguished|distinguishable)\b/.test(normalized)) return 'distinguished'
  if (/\b(follow|followed|following)\b/.test(normalized)) return 'followed'
  if (/\b(rely|relied|relying)\b/.test(normalized)) return 'relied-upon'
  if (/\b(consider|considered|considering)\b/.test(normalized)) return 'considered'
  return 'unverified'
}
function treatmentEvidence(text: string, authority: string, source: ComparisonEvidence['source']): ComparisonEvidence[] {
  return text.replace(/\r\n/g, '\n').split('\n').map((line, index) => ({ line: index + 1, text: line.trim(), source })).filter((item) => normalizeTerm(item.text).includes(authority)).slice(0, 3)
}
export function compareJudgments(left: string, right: string): JudgmentComparisonReport {
  const warnings: string[] = []
  const common = { issues: [] as string[], statutes: [] as string[], authorities: [] as string[] }
  const differences = { facts: [] as ComparisonEvidence[], legalRules: [] as ComparisonEvidence[], evidence: [] as ComparisonEvidence[], reasoning: [] as ComparisonEvidence[], outcomes: [] as ComparisonEvidence[] }
  if (!left.trim() || !right.trim()) {
    warnings.push('Both judgment texts are required for a legal comparison.')
    return { common, differences, authorityTreatment: [], warnings, privacy: 'browser-local' }
  }
  for (const category of ['issues','statutes','authorities'] as const) {
    const A = termsForCategory(left, category), B = new Set(termsForCategory(right, category))
    common[category] = A.filter((item) => B.has(item)).slice(0, 30)
  }
  for (const category of ['facts','legalRules','evidence','reasoning','outcomes'] as const) {
    const leftBlock = sectionBlocks(left).get(category) || [], rightBlock = sectionBlocks(right).get(category) || []
    const rightTerms = new Set(meaningfulTerms(rightBlock.map((item) => item.text).join(' ')))
    const leftTerms = new Set(meaningfulTerms(leftBlock.map((item) => item.text).join(' ')))
    differences[category] = [
      ...leftBlock.filter((item) => meaningfulTerms(item.text).some((term) => !rightTerms.has(term))).slice(0, 12).map((item) => ({ ...item, source: 'judgment-a' as const })),
      ...rightBlock.filter((item) => meaningfulTerms(item.text).some((term) => !leftTerms.has(term))).slice(0, 12).map((item) => ({ ...item, source: 'judgment-b' as const })),
    ]
  }
  const authorities = Array.from(new Set([...extractCitationLikeAuthorities(left), ...extractCitationLikeAuthorities(right)]))
  const authorityTreatment = authorities.map((authority) => ({
    authority,
    treatmentA: classifyTreatment(left, authority),
    treatmentB: classifyTreatment(right, authority),
    evidence: [...treatmentEvidence(left, authority, 'judgment-a'), ...treatmentEvidence(right, authority, 'judgment-b')],
  }))
  if (!common.issues.length) warnings.push('No common issue terms were detected from labelled issue sections; absence of a match is not proof that the legal issues differ.')
  if (!authorities.length) warnings.push('No citation-like authorities were detected. Authority treatment remains unverified unless the source text contains recognizable citations.')
  warnings.push('Differences are text-structural signals, not findings that one judgment overruled, invalidated, or rejected another.')
  return { common, differences, authorityTreatment, warnings, privacy: 'browser-local' }
}
export function categoryLabel(category: ComparisonCategory): string {
  return ({ issues:'Issues', statutes:'Statutes', authorities:'Authorities', facts:'Factual differences', legalRules:'Legal-rule differences', evidence:'Evidentiary differences', reasoning:'Reasoning differences', outcomes:'Relief / outcome differences' })[category]
}
