import fs from 'node:fs'
import path from 'node:path'
import { getSubjectBySlug } from '../src/data/subjects'
import { createGeneratedSubjectTopic } from '../src/data/topics/generatedSubjectTopic'

const slugs = ['adr', 'pil', 'ethics', 'labour', 'taxation', 'admin', 'company', 'environment', 'cyber', 'land', 'ipr']
let generated = 0
let skipped = 0

for (const slug of slugs) {
  const subject = getSubjectBySlug(slug)
  if (!subject) throw new Error(`Missing subject: ${slug}`)

  const outputDir = path.resolve('src/data/topics', slug)
  fs.mkdirSync(outputDir, { recursive: true })

  for (const topic of subject.topics) {
    const topicFile = path.join(outputDir, `${topic.id}.ts`)
    if (fs.existsSync(topicFile)) {
      skipped++
      continue
    }

    const topicContent = createGeneratedSubjectTopic(slug, topic.id)
    if (!topicContent) throw new Error(`Unable to create ${slug}/${topic.id}`)
    const content = `import type { TopicContent } from '../topicTypes'\n\nconst content: TopicContent = ${JSON.stringify(topicContent, null, 2)}\n\nexport default content\n`
    fs.writeFileSync(topicFile, content, 'utf8')
    generated++
  }
}

console.log(`Generated ${generated} new-subject topic files; preserved ${skipped} existing files.`)