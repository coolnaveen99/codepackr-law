import fs from 'node:fs'
import path from 'node:path'
import { BNS_SECTIONS } from '../src/data/bns/sections'
import { synthesizeCatalogSection } from '../src/data/topics/synthesizeProvision'

const root = path.resolve('src/data/topics')

for (const section of BNS_SECTIONS) {
  const content = await synthesizeCatalogSection('bns', section.id)
  if (!content) throw new Error(`Unable to synthesize BNS s. ${section.id}`)
  const file = path.join(root, 'bns', `s-${section.id.toLowerCase()}.ts`)
  fs.writeFileSync(file, `import type { TopicContent } from '../loadTopicContent'\n\nconst content: TopicContent = ${JSON.stringify(content, null, 2)}\n\nexport default content\n`, 'utf8')
}

for (const subject of ['contract', 'tort']) {
  const directory = path.join(root, subject)
  for (const file of fs.readdirSync(directory).filter((name) => name.endsWith('.ts'))) {
    const filePath = path.join(directory, file)
    const text = fs.readFileSync(filePath, 'utf8')
    const normalized = text.replace(/\} satisfies TopicContent\\n\s*$/u, '} satisfies TopicContent\n')
    if (normalized !== text) fs.writeFileSync(filePath, normalized, 'utf8')
  }
}

console.log(`Repaired ${BNS_SECTIONS.length} BNS section files and normalized Contract/Tort topic endings.`)