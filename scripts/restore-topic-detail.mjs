/**
 * Emergency restore for TopicDetail.tsx when main has a stub/corrupt file.
 * Fetches the last known-good version from git history, applies a small harden,
 * and writes it before `tsc` so Vercel builds can succeed.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const target = path.join(__dirname, '../src/components/subjects/TopicDetail.tsx')

const GOOD_REF =
  'https://raw.githubusercontent.com/coolnaveen99/codepackr-law/bbc15ccfe68dc7b8f331abb6c31f80496806b951/src/components/subjects/TopicDetail.tsx'

function looksBroken(source) {
  if (!source || source.length < 5000) return true
  if (source.includes('FILE CONTINUES - SEE RESTORE')) return true
  if (source.includes('RELOAD_FROM_ARTIFACT')) return true
  if (!source.includes('TopicDetailProps')) return true
  if (!source.includes('export function TopicDetail')) return true
  return false
}

const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : ''
if (!looksBroken(current)) {
  console.log('TopicDetail.tsx looks intact; skip restore')
  process.exit(0)
}

console.log('TopicDetail.tsx is broken/stub; restoring from bbc15cc…')
const res = await fetch(GOOD_REF)
if (!res.ok) {
  console.error('Failed to fetch good TopicDetail:', res.status, res.statusText)
  process.exit(1)
}

let text = await res.text()
if (looksBroken(text)) {
  console.error('Fetched TopicDetail still looks invalid')
  process.exit(1)
}

// Harden: canonical sections may omit content[]
text = text.replace(
  '{sec.content.map((paragraph, pIdx) => (',
  '{(sec.content ?? []).map((paragraph, pIdx) => (',
)

fs.writeFileSync(target, text)
console.log(`Restored TopicDetail.tsx (${text.length} bytes)`)
