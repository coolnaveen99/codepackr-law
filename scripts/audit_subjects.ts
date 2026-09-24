import { SUBJECTS } from '../src/data/subjects'
import fs from 'fs'
import path from 'path'

const topicsDir = path.resolve('src/data/topics')

console.log('| Subject | Slug | Priority | AIBE Qs | Total Topics | Dedicated Notes | Progress |')
console.log('|---|---|---|---|---|---|---|')
let sumTotal = 0
let sumDedicated = 0

for (const s of SUBJECTS) {
  let dedicated = 0
  for (const t of s.topics) {
    if (fs.existsSync(path.join(topicsDir, s.slug, `${t.id}.ts`))) {
      dedicated++
    }
  }
  sumTotal += s.topics.length
  sumDedicated += dedicated
  const pct = ((dedicated / s.topics.length) * 100).toFixed(0)
  console.log(
    `| ${s.name} | \`${s.slug}\` | ${s.priority} | ${s.aibeQuestions} | ${s.topics.length} | ${dedicated} | ${pct}% |`,
  )
}
console.log(
  `| **TOTAL** | - | - | - | **${sumTotal}** | **${sumDedicated}** | **${((sumDedicated / sumTotal) * 100).toFixed(1)}%** |`,
)
