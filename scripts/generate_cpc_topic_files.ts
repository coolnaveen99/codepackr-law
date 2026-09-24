import fs from 'node:fs'
import path from 'node:path'
import { CPC_ORDERS } from '../src/data/cpc/orders'
import { CPC_SECTIONS } from '../src/data/cpc/sections'
import { createCpcTopic } from '../src/data/topics/cpc/generatedTopic'

const outputDir = path.resolve('src/data/topics/cpc')
fs.mkdirSync(outputDir, { recursive: true })

for (const file of fs.readdirSync(outputDir)) {
  if (/^o-[0-9]+[a-z]*\.ts$/i.test(file)) fs.unlinkSync(path.join(outputDir, file))
}

let generated = 0
let skipped = 0

for (const topicId of [
  ...CPC_SECTIONS.map((section) => `s-${section.id.toLowerCase()}`),
  ...CPC_ORDERS.map((order) => `order-${order.id.toLowerCase()}`),
]) {
  const topicFile = path.join(outputDir, `${topicId}.ts`)
  if (fs.existsSync(topicFile)) {
    skipped++
    continue
  }

  const topicContent = createCpcTopic(topicId)
  const content = `import type { TopicContent } from '../loadTopicContent'\n\nconst content: TopicContent = ${JSON.stringify(topicContent, null, 2)}\n\nexport default content\n`
  fs.writeFileSync(topicFile, content, 'utf8')
  generated++
}

console.log(`Generated ${generated} CPC section/order topic files; preserved ${skipped} existing files.`)