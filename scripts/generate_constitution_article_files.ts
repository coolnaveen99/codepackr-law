import fs from 'node:fs'
import path from 'node:path'
import { ARTICLES } from '../src/data/constitution/articles'
import { synthesizeArticleContent } from '../src/data/topics/synthesizeArticle'

const outputDir = path.resolve('src/data/topics/constitution')
fs.mkdirSync(outputDir, { recursive: true })

let generated = 0
let skipped = 0

for (const article of ARTICLES) {
  const topicFile = path.join(outputDir, `art-${article.id.toLowerCase()}.ts`)
  if (fs.existsSync(topicFile)) {
    skipped++
    continue
  }

  const topicContent = synthesizeArticleContent(article.id)
  if (!topicContent) {
    throw new Error(`Unable to synthesize Article ${article.id}`)
  }

  const content = `import type { TopicContent } from '../loadTopicContent'\n\nconst content: TopicContent = ${JSON.stringify(topicContent, null, 2)}\n\nexport default content\n`
  fs.writeFileSync(topicFile, content, 'utf8')
  generated++
}

console.log(`Generated ${generated} Constitution article topic files; preserved ${skipped} existing files.`)