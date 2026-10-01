/**
 * TopicDetail.tsx materialize for CI/Vercel (TD-001).
 * 1) Use full on-disk source if present
 * 2) Assemble scripts/td-source/part*.txt when complete
 * 3) Fall back to bbc15cc raw blob + PA-002 hardens
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const target = path.join(root, 'src/components/subjects/TopicDetail.tsx')
const partsDir = path.join(root, 'scripts/td-source')

const GOOD_REF =
  'https://raw.githubusercontent.com/coolnaveen99/codepackr-law/bbc15ccfe68dc7b8f331abb6c31f80496806b951/src/components/subjects/TopicDetail.tsx'

function isFullSource(source) {
  return (
    !!source &&
    source.includes('TopicDetailProps') &&
    source.includes('export function TopicDetail') &&
    source.length > 20000 &&
    source.includes('always surface canonical graph')
  )
}

function applyPa002Hardens(text) {
  text = text.replace(
    '{sec.content.map((paragraph, pIdx) => (',
    '{(sec.content ?? []).map((paragraph, pIdx) => (',
  )
  if (!text.includes("from './RelatedCanonicalTopics'") && !text.includes('from \"./RelatedCanonicalTopics\"')) {
    text = text.replace(
      "import { RelatedKnowledge } from '../knowledge/RelatedKnowledge'",
      "import { RelatedKnowledge } from '../knowledge/RelatedKnowledge'\nimport { RelatedCanonicalTopics } from './RelatedCanonicalTopics'",
    )
  }
  const oldRelated = `      {/* Related Knowledge Graph (Task 3.4) */}
      {!loading && knowledgeId && (
        <section id="related-knowledge" className="space-y-3">
          <RelatedKnowledge entityId={knowledgeId} />
        </section>
      )}`
  const newRelated = `      {/* Related Knowledge Graph (Task 3.4) — always surface canonical graph when possible */}
      {!loading && (
        <section id="related-knowledge" className="space-y-3">
          {knowledgeId ? (
            <RelatedKnowledge
              entityId={knowledgeId}
              subjectSlug={subject.slug}
              topicId={topic.id}
            />
          ) : (
            <RelatedCanonicalTopics
              subjectSlug={subject.slug}
              topicId={topic.id}
              fallbackRelatedTopicIds={content?.relatedTopics}
            />
          )}
        </section>
      )}`
  if (text.includes(oldRelated)) text = text.replace(oldRelated, newRelated)
  return text
}

const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : ''
if (isFullSource(current)) {
  console.log('TopicDetail.tsx already full source; skip materialize')
  process.exit(0)
}

if (fs.existsSync(partsDir)) {
  const files = fs.readdirSync(partsDir).filter((f) => /^part\d+\.txt$/.test(f)).sort()
  if (files.length >= 14) {
    let text = files.map((f) => fs.readFileSync(path.join(partsDir, f), 'utf8')).join('')
    text = applyPa002Hardens(text)
    if (text.includes('export function TopicDetail') && text.length > 20000) {
      fs.mkdirSync(path.dirname(target), { recursive: true })
      fs.writeFileSync(target, text)
      console.log('Assembled TopicDetail.tsx from td-source (' + text.length + ' bytes)')
      process.exit(0)
    }
  }
}

console.log('Using network fallback for TopicDetail (bbc15cc)…')
const res = await fetch(GOOD_REF)
if (!res.ok) {
  console.error('Failed to fetch good TopicDetail:', res.status, res.statusText)
  process.exit(1)
}
let text = applyPa002Hardens(await res.text())
if (!text.includes('export function TopicDetail') || text.length < 5000) {
  console.error('Fetched TopicDetail still looks invalid')
  process.exit(1)
}
fs.mkdirSync(path.dirname(target), { recursive: true })
fs.writeFileSync(target, text)
console.log('Restored TopicDetail.tsx from network (' + text.length + ' bytes)')
