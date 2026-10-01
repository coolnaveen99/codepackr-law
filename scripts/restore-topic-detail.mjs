/**
 * Emergency restore for TopicDetail.tsx when main has a stub/corrupt file.
 * Fetches the last known-good version from git history, applies PA-002 hardens,
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

/** Apply PA-002 UX fixes on top of the good baseline blob. */
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

  if (text.includes(oldRelated)) {
    text = text.replace(oldRelated, newRelated)
  } else if (!text.includes('always surface canonical graph')) {
    console.warn('TopicDetail related block pattern not found; graph panel may stay knowledgeId-gated')
  }

  return text
}

const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : ''
const needsRestore = looksBroken(current)
const needsPa002 =
  !current.includes('always surface canonical graph') ||
  !current.includes('(sec.content ?? [])')

if (!needsRestore && !needsPa002) {
  console.log('TopicDetail.tsx looks intact with PA-002 hardens; skip restore')
  process.exit(0)
}

let text = current
if (needsRestore) {
  console.log('TopicDetail.tsx is broken/stub; restoring from bbc15cc…')
  const res = await fetch(GOOD_REF)
  if (!res.ok) {
    console.error('Failed to fetch good TopicDetail:', res.status, res.statusText)
    process.exit(1)
  }
  text = await res.text()
  if (looksBroken(text)) {
    console.error('Fetched TopicDetail still looks invalid')
    process.exit(1)
  }
}

text = applyPa002Hardens(text)
fs.writeFileSync(target, text)
console.log(`Wrote TopicDetail.tsx (${text.length} bytes; restore=${needsRestore})`)
