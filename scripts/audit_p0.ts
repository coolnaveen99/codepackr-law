import fs from 'fs'
import path from 'path'
import { SUBJECTS } from '../src/data/subjects'

const P0_SLUGS = ['constitution', 'bns', 'bnss', 'bsa', 'cpc', 'family', 'contract']

console.log('=== P0 Subject High-Yield & Treatise Audit ===\n')

for (const s of SUBJECTS) {
  if (!P0_SLUGS.includes(s.slug)) continue

  let highYieldTotal = 0
  let highYieldHasFile = 0
  let modularCount = 0
  let basicCount = 0

  for (const t of s.topics) {
    if (t.highYield) {
      highYieldTotal++
      const filePath = path.resolve(`src/data/topics/${s.slug}/${t.id}.ts`)
      if (fs.existsSync(filePath)) {
        highYieldHasFile++
        const content = fs.readFileSync(filePath, 'utf-8')
        if (
          content.includes('Mandatory Proving Ingredients') ||
          content.includes('Evidentiary Burdens') ||
          content.includes('Procedural Roadmap') ||
          content.includes('writtenSubmissions') ||
          content.includes('Senior Counsel')
        ) {
          modularCount++
        } else {
          basicCount++
        }
      }
    }
  }

  console.log(
    `[${s.slug.padEnd(14)}] Topics: ${String(s.topics.length).padStart(4)} | High-Yield: ${String(highYieldTotal).padStart(3)} | Files: ${String(highYieldHasFile).padStart(3)} | Modular Deep: ${String(modularCount).padStart(3)} | Basic: ${String(basicCount).padStart(3)}`
  )
}
