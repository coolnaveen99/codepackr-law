import fs from 'fs'
import path from 'path'
import { SUBJECTS } from '../src/data/subjects'
import { validateTopics, SUBJECT_FLOORS } from '../src/utils/topics/topicValidation'

const topicsDir = path.resolve('src/data/topics')

function fileExists(slug: string, id: string): boolean {
  return fs.existsSync(path.join(topicsDir, slug, `${id}.ts`))
}

const result = validateTopics(SUBJECTS, fileExists)

console.log('=== Topic validation ===')
for (const row of result.perSubject) {
  const floorOk = row.count >= row.floor ? 'OK' : 'BELOW FLOOR'
  const dup = row.duplicateIds.length ? ` dups=${row.duplicateIds.length}` : ''
  const miss = row.missingNoteFiles.length ? ` missingNotes=${row.missingNoteFiles.length}` : ''
  console.log(
    `  ${row.slug.padEnd(18)} count=${String(row.count).padStart(4)} floor=${String(row.floor).padStart(4)} [${floorOk}]${dup}${miss}`,
  )
}

const total = result.perSubject.reduce((a, r) => a + r.count, 0)
const floorSum = Object.values(SUBJECT_FLOORS).reduce((a, b) => a + b, 0)
console.log(`\nTotal topics: ${total} (grand floor ${floorSum})`)

if (result.errors.length) {
  console.error('\nERRORS:')
  for (const e of result.errors) console.error('  -', e)
  process.exit(1)
}

if (result.warnings.length) {
  console.warn('\nWARNINGS:')
  for (const w of result.warnings) console.warn('  -', w)
}

console.log('\nvalidate:topics PASS')
