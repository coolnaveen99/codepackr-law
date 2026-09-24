import fs from 'node:fs'
import path from 'node:path'
import { BSA_SECTIONS } from '../src/data/bsa/sections'
import { createBsaSectionTopic } from '../src/data/topics/bsa/generatedSection'

const outputDir = path.resolve('src/data/topics/bsa')
fs.mkdirSync(outputDir, { recursive: true })

for (const section of BSA_SECTIONS) {
  const topicFile = path.join(outputDir, `s-${section.id.toLowerCase()}.ts`)
  const topicContent = createBsaSectionTopic(section.id)
  const content = `import type { TopicContent } from '../loadTopicContent'\n\nconst content: TopicContent = ${JSON.stringify(topicContent, null, 2)}\n\nexport default content\n`
  fs.writeFileSync(topicFile, content, 'utf8')
}

console.log(`Generated ${BSA_SECTIONS.length} BSA section topic files.`)