import { SUBJECTS } from '../src/data/subjects'
import fs from 'fs'
import path from 'path'
import { SUBJECT_FLOORS } from '../src/utils/topics/topicValidation'

const topicsDir = path.resolve('src/data/topics')

console.log('| Subject | Slug | Priority | AIBE Qs | Total | Floor | Notes files | High-yield | Progress |')
console.log('|---|---|---|---|---|---|---|---|---|')
let sumTotal = 0
let sumDedicated = 0
let sumHighYield = 0
let missingFiles = 0

for (const s of SUBJECTS) {
  let dedicated = 0
  let highYield = 0
  let missing = 0
  for (const t of s.topics) {
    if (t.highYield) highYield++
    const filePath = path.join(topicsDir, s.slug, `${t.id}.ts`)
    if (fs.existsSync(filePath)) {
      dedicated++
    } else if (t.hasNotes) {
      missing++
    }
  }
  sumTotal += s.topics.length
  sumDedicated += dedicated
  sumHighYield += highYield
  missingFiles += missing
  const floor = SUBJECT_FLOORS[s.slug] ?? 0
  const pct = s.topics.length ? ((dedicated / s.topics.length) * 100).toFixed(0) : '0'
  const floorMark = s.topics.length >= floor ? '' : ' ⚠ BELOW'
  console.log(
    `| ${s.name} | \`${s.slug}\` | ${s.priority} | ${s.aibeQuestions} | ${s.topics.length} | ${floor}${floorMark} | ${dedicated} | ${highYield} | ${pct}% |`,
  )
}
console.log(
  `| **TOTAL** | - | - | - | **${sumTotal}** | **${Object.values(SUBJECT_FLOORS).reduce((a, b) => a + b, 0)}** | **${sumDedicated}** | **${sumHighYield}** | **${((sumDedicated / Math.max(sumTotal,1)) * 100).toFixed(1)}%** |`,
)
console.log(`\nCatalog vs floor: ${sumTotal} registered (floor sum ${Object.values(SUBJECT_FLOORS).reduce((a, b) => a + b, 0)})`)
console.log(`hasNotes / files present: ${sumDedicated}`)
console.log(`High-yield topics: ${sumHighYield}`)
console.log(`Missing files for hasNotes:true: ${missingFiles}`)
