import { validateRepositoryContent } from '../src/utils/contentValidation'

console.log('=== Running Repository Content Validation (Phase 23) ===\n')

const report = validateRepositoryContent()

console.log('Total entities checked:')
console.log(`  - Subjects:        ${report.totalChecked.subjects}`)
console.log(`  - Topics:          ${report.totalChecked.topics}`)
console.log(`  - Judgments:       ${report.totalChecked.judgments}`)
console.log(`  - Tools:           ${report.totalChecked.tools}`)
console.log(`  - Draft Templates: ${report.totalChecked.drafts}`)
console.log(`  - Primary Sources: ${report.totalChecked.primarySources}\n`)

console.log('Content Validation Checks (Roadmap §28):')
console.log(`  [1] Duplicate IDs:               ${report.checks.duplicateIds.length === 0 ? 'PASS' : `FAIL (${report.checks.duplicateIds.length})`}`)
console.log(`  [2] Duplicate Slugs:             ${report.checks.duplicateSlugs.length === 0 ? 'PASS' : `FAIL (${report.checks.duplicateSlugs.length})`}`)
console.log(`  [3] Missing Sources:             ${report.checks.missingSources.length === 0 ? 'PASS' : `FAIL (${report.checks.missingSources.length})`}`)
console.log(`  [4] Missing Verification Status: ${report.checks.missingVerificationStatus.length === 0 ? 'PASS' : `FAIL (${report.checks.missingVerificationStatus.length})`}`)
console.log(`  [5] Invalid Act References:      ${report.checks.invalidActReferences.length === 0 ? 'PASS' : `FAIL (${report.checks.invalidActReferences.length})`}`)
console.log(`  [6] Malformed Citations:         ${report.checks.malformedCitations.length === 0 ? 'PASS' : `FAIL (${report.checks.malformedCitations.length})`}`)
console.log(`  [7] Orphaned Knowledge Refs:     ${report.checks.orphanedKnowledgeRefs.length === 0 ? 'PASS' : `FAIL (${report.checks.orphanedKnowledgeRefs.length})`}\n`)

if (report.warnings.length > 0) {
  console.warn(`WARNINGS (${report.warnings.length}):`)
  for (const w of report.warnings.slice(0, 10)) {
    console.warn(`  - ${w}`)
  }
  if (report.warnings.length > 10) console.warn(`  ... and ${report.warnings.length - 10} more warnings.`)
  console.log('')
}

if (!report.ok) {
  console.error(`ERRORS (${report.errors.length}):`)
  for (const err of report.errors) {
    console.error(`  - ${err}`)
  }
  console.error('\nvalidate:content FAILED')
  process.exit(1)
}

console.log('validate:content PASS (All 7 Roadmap §28 content validation checks succeeded)\n')
