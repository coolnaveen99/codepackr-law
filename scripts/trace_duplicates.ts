import { ALL_JUDGMENTS } from '../src/data/judgments'

const seen = new Map<string, number>()
for (let i = 0; i < ALL_JUDGMENTS.length; i++) {
  const j = ALL_JUDGMENTS[i]
  if (seen.has(j.id)) {
    console.log(`Duplicate: "${j.id}" at index ${i} (first seen at index ${seen.get(j.id)})`)
    console.log(`  First: "${ALL_JUDGMENTS[seen.get(j.id)!].caseName}"`)
    console.log(`  Second: "${j.caseName}"`)
  } else {
    seen.set(j.id, i)
  }
}
