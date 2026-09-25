import { ALL_JUDGMENTS, JUDGMENTS_BY_ID } from '../../data/judgments'
import { SUBJECTS } from '../../data/subjects'

export interface JudgmentValidationResult {
  valid: boolean
  totalJudgments: number
  errors: string[]
  warnings: string[]
}

export function validateJudgments(): JudgmentValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  const seenIds = new Set<string>()

  // Map of all valid subject slugs and their topic IDs
  const subjectTopicMap = new Map<string, Set<string>>()
  for (const subject of SUBJECTS) {
    subjectTopicMap.set(
      subject.slug,
      new Set(subject.topics.map((t) => t.id))
    )
  }

  for (const judgment of ALL_JUDGMENTS) {
    // 1. Unique ID
    if (seenIds.has(judgment.id)) {
      errors.push(`Duplicate judgment ID found: "${judgment.id}"`)
    }
    seenIds.add(judgment.id)

    // 2. Mandatory content fields
    if (!judgment.caseName || !judgment.caseName.trim()) {
      errors.push(`Judgment "${judgment.id}" is missing caseName.`)
    }
    if (!judgment.year || judgment.year < 1900 || judgment.year > 2030) {
      errors.push(`Judgment "${judgment.id}" has invalid year: ${judgment.year}.`)
    }
    if (!judgment.citation || !judgment.citation.trim()) {
      errors.push(`Judgment "${judgment.id}" is missing citation.`)
    }
    if (!judgment.summary || !judgment.summary.trim()) {
      errors.push(`Judgment "${judgment.id}" is missing summary.`)
    }
    if (!judgment.facts || judgment.facts.length === 0) {
      errors.push(`Judgment "${judgment.id}" has no facts listed.`)
    }
    if (!judgment.issues || judgment.issues.length === 0) {
      errors.push(`Judgment "${judgment.id}" has no legal issues listed.`)
    }
    if (!judgment.decision || !judgment.decision.trim()) {
      errors.push(`Judgment "${judgment.id}" is missing decision.`)
    }
    if (!judgment.ratioDecidendi || !judgment.ratioDecidendi.trim()) {
      errors.push(`Judgment "${judgment.id}" is missing ratioDecidendi.`)
    }

    // 3. Related Cases check (6.9: Broken related-case IDs fail validation)
    if (judgment.relatedCases && judgment.relatedCases.length > 0) {
      for (const ref of judgment.relatedCases) {
        if (ref.judgmentId) {
          if (!JUDGMENTS_BY_ID.has(ref.judgmentId)) {
            errors.push(
              `Judgment "${judgment.id}" references non-existent related case ID: "${ref.judgmentId}".`
            )
          }
        }
      }
    }

    // 4. Provision topic reference validation
    if (judgment.provisions && judgment.provisions.length > 0) {
      for (const prov of judgment.provisions) {
        if (prov.subjectSlug && prov.topicId) {
          const topicSet = subjectTopicMap.get(prov.subjectSlug)
          if (!topicSet) {
            errors.push(
              `Judgment "${judgment.id}" references invalid subject slug: "${prov.subjectSlug}".`
            )
          } else if (!topicSet.has(prov.topicId)) {
            errors.push(
              `Judgment "${judgment.id}" references invalid topic ID: "${prov.topicId}" under subject "${prov.subjectSlug}".`
            )
          }
        }
      }
    }
  }

  return {
    valid: errors.length === 0,
    totalJudgments: ALL_JUDGMENTS.length,
    errors,
    warnings,
  }
}
