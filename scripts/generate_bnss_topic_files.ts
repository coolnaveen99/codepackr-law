import fs from 'node:fs'
import path from 'node:path'
import { BNSS_SECTIONS } from '../src/data/bnss/sections'
import { createBnssSectionTopic } from '../src/data/topics/bnss/generatedSection'

const outputDir = path.resolve('src/data/topics/bnss')
fs.mkdirSync(outputDir, { recursive: true })

for (const section of BNSS_SECTIONS) {
  const topicFile = path.join(outputDir, `s-${section.id.toLowerCase()}.ts`)
  const topicContent = createBnssSectionTopic(section.id)
  const content = `import type { TopicContent } from '../loadTopicContent'\n\nconst content: TopicContent = ${JSON.stringify(topicContent, null, 2)}\n\nexport default content\n`
  fs.writeFileSync(topicFile, content, 'utf8')
}

console.log(`Generated ${BNSS_SECTIONS.length} BNSS section topic files.`)