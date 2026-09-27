import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SUBJECTS } from '../src/data/subjects'
import { ALL_JUDGMENTS } from '../src/data/judgments'
import { TOOLS } from '../src/data/tools'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const HOST = 'law.codepackr.com'
const BASE_URL = `https://${HOST}`
const KEY = 'BC8B27F46BBCD43F50A45F870843689D'
const KEY_LOCATION = `${BASE_URL}/BC8B27F46BBCD43F50A45F870843689D.txt`

// Ensure key file exists in public/
const keyFile = path.join(rootDir, 'public', `${KEY}.txt`)
if (!fs.existsSync(keyFile)) {
  fs.writeFileSync(keyFile, KEY, 'utf8')
  console.log(`Created key verification file: ${keyFile}`)
}

// Gather all site URLs
const urlList: string[] = [
  `${BASE_URL}/`,
  `${BASE_URL}/subjects`,
  `${BASE_URL}/case-law`,
  `${BASE_URL}/knowledge`,
  `${BASE_URL}/contact`,
]

for (const tool of TOOLS) {
  if (tool.slug === 'case-law' || tool.slug === 'knowledge') continue
  urlList.push(`${BASE_URL}/tool/${tool.slug}`)
}

for (const subject of SUBJECTS) {
  urlList.push(`${BASE_URL}/subjects/${subject.slug}`)
}

for (const judgment of ALL_JUDGMENTS) {
  urlList.push(`${BASE_URL}/case-law/judgment/${judgment.id}`)
}

for (const subject of SUBJECTS) {
  for (const topic of subject.topics) {
    urlList.push(`${BASE_URL}/subjects/${subject.slug}/${topic.id}`)
  }
}

console.log(`Total URLs to submit to IndexNow: ${urlList.length}`)

// Chunk URLs into batches of 1,000 (IndexNow standard max batch)
const BATCH_SIZE = 1000

async function submitBatch(batch: string[], batchIndex: number) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: batch,
  }

  console.log(`Submitting batch ${batchIndex + 1} (${batch.length} URLs) to api.indexnow.org...`)
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    if (res.status === 200 || res.status === 202) {
      console.log(`Batch ${batchIndex + 1} accepted by IndexNow (HTTP ${res.status})`)
    } else {
      const text = await res.text()
      console.warn(`Batch ${batchIndex + 1} returned status ${res.status}: ${text}`)
    }
  } catch (err) {
    console.error(`Failed to submit batch ${batchIndex + 1}:`, err)
  }
}

async function main() {
  for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
    const batch = urlList.slice(i, i + BATCH_SIZE)
    await submitBatch(batch, Math.floor(i / BATCH_SIZE))
  }
  console.log('IndexNow submission finished.')
}

main()
