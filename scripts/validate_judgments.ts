import { validateJudgments } from '../src/utils/judgments/judgmentValidation'

console.log('=== Judgment Library Validation ===')
const res = validateJudgments()

console.log(`Validated ${res.totalJudgments} judgments.`)

if (res.warnings.length > 0) {
  console.log('\nWARNINGS:')
  for (const w of res.warnings) {
    console.log(`  - ${w}`)
  }
}

if (!res.valid) {
  console.error('\nERRORS:')
  for (const err of res.errors) {
    console.error(`  - ${err}`)
  }
  console.error('\nvalidate:judgments FAILED')
  process.exit(1)
}

console.log('\nvalidate:judgments PASS')
