import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SUBJECTS } from '../src/data/subjects'
import { canonicalTopicId } from '../src/content/ContentRepository'

const localLegalContent = path.resolve(fileURLToPath(new URL('..', import.meta.url)), '../legal-content')
const hasLocal = fs.existsSync(path.join(localLegalContent, 'manifests', 'content-manifest.json'))

const BASE = (
  process.env.LEGAL_CONTENT_BASE_URL ||
  process.env.VITE_LEGAL_CONTENT_BASE_URL ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'
).replace(/\/$/, '')

type ManifestEntry = {
  id: string
  entityType: string
  path: string
  version: number
  status: string
  sha256?: string | null
}

type Manifest = {
  manifestVersion: string
  generatedAt: string
  repository: string
  entities: ManifestEntry[]
}

type TopicRecord = {
  id?: string
  entityType?: string
  status?: string
  title?: string
  sources?: unknown[]
  content?: Record<string, unknown>
}

const VALID_TOPIC_STATUSES = new Set([
  'draft',
  'research',
  'review',
  'verified',
  'approved',
  'published',
  'review-due',
  'update',
  'archived',
])

async function fetchJson<T>(relPath: string): Promise<T> {
  if (hasLocal && !process.env.LEGAL_CONTENT_BASE_URL) {
    const localFile = path.join(localLegalContent, relPath)
    if (fs.existsSync(localFile)) {
      return JSON.parse(fs.readFileSync(localFile, 'utf8')) as T
    }
  }
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(`${BASE}/${relPath}`, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(15_000),
      })
      if (!response.ok) throw new Error(`${relPath} → HTTP ${response.status}`)
      return (await response.json()) as T
    } catch (err) {
      if (attempt === 2) throw err
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
    }
  }
  throw new Error(`Failed to fetch ${relPath}`)
}

function expectedCatalogTopics() {
  return SUBJECTS.flatMap((subject) =>
    subject.topics
      .filter((topic) => topic.hasNotes !== false)
      .map((topic) => ({
        subject: subject.slug,
        topic: topic.id,
        id: canonicalTopicId(subject.slug, topic.id),
      })),
  )
}

const manifest = await fetchJson<Manifest>('manifests/content-manifest.json')
if (manifest.repository !== 'coolnaveen99/legal-content') {
  throw new Error(`Unexpected canonical repository: ${manifest.repository}`)
}
if (!Array.isArray(manifest.entities) || manifest.entities.length === 0) {
  throw new Error('Canonical manifest is empty or malformed')
}

const ids = new Set<string>()
const paths = new Set<string>()
for (const entry of manifest.entities) {
  if (ids.has(entry.id)) throw new Error(`Duplicate manifest id: ${entry.id}`)
  if (paths.has(entry.path)) throw new Error(`Duplicate manifest path: ${entry.path}`)
  ids.add(entry.id)
  paths.add(entry.path)
}

const canonicalTopics = manifest.entities.filter((entry) => entry.entityType === 'topic')
const catalogTopics = expectedCatalogTopics()
const byCanonicalId = new Map(canonicalTopics.map((entry) => [entry.id, entry]))

const subjectStats = new Map<string, { catalog: number; published: number; missing: number }>()
const missing: string[] = []

for (const item of catalogTopics) {
  const stat = subjectStats.get(item.subject) || { catalog: 0, published: 0, missing: 0 }
  stat.catalog += 1
  const entry = byCanonicalId.get(item.id)
  if (entry && (entry.status === 'published' || entry.status === 'review-due')) {
    stat.published += 1
  } else {
    stat.missing += 1
    missing.push(item.id)
  }
  subjectStats.set(item.subject, stat)
}

let malformedPublishedTopics = 0
const deliveryFailures: string[] = []

for (let offset = 0; offset < canonicalTopics.length; offset += 12) {
  const batch = canonicalTopics.slice(offset, offset + 12)
  const results = await Promise.allSettled(
    batch.map(async (entry) => {
      const record = await fetchJson<TopicRecord>(entry.path)
      if (record.id !== entry.id) throw new Error(`id mismatch: ${record.id}`)
      if (record.entityType !== 'topic') throw new Error(`entityType=${record.entityType}`)
      if (!VALID_TOPIC_STATUSES.has(record.status || '')) {
        throw new Error(`status=${record.status}`)
      }
      if (entry.status === 'published' && (!Array.isArray(record.sources) || record.sources.length === 0)) {
        throw new Error('published topic has no sources')
      }
      return record
    }),
  )
  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      malformedPublishedTopics += 1
      deliveryFailures.push(`${batch[index].id}: ${result.reason?.message || result.reason}`)
    }
  })
}

const orphanCanonicalTopics = canonicalTopics
  .map((entry) => entry.id)
  .filter((id) => !catalogTopics.some((topic) => topic.id === id))

console.log('=== PR-006 Legal-content integrity audit ===')
console.log(`Base: ${BASE}`)
console.log(`Manifest: ${manifest.entities.length} entities; topics=${canonicalTopics.length}`)
console.log(`Application catalog topics (hasNotes=true): ${catalogTopics.length}`)
console.log('')
console.log('| Subject | Catalog | Canonical published/review-due | Missing | Coverage |')
console.log('|---|---:|---:|---:|---:|')
for (const [subject, stat] of [...subjectStats.entries()].sort()) {
  const coverage = stat.catalog ? ((stat.published / stat.catalog) * 100).toFixed(1) : '100.0'
  console.log(`| ${subject} | ${stat.catalog} | ${stat.published} | ${stat.missing} | ${coverage}% |`)
}
console.log('')
console.log(`Canonical topic delivery checked: ${canonicalTopics.length}`)
console.log(`Canonical topic delivery failures: ${malformedPublishedTopics}`)
console.log(`Catalog topics without published canonical twin: ${missing.length}`)
console.log(`Canonical topics not represented by the current catalog: ${orphanCanonicalTopics.length}`)

if (missing.length) {
  console.log('\nMigration gaps (first 50):')
  for (const id of missing.slice(0, 50)) console.log(`- ${id}`)
}

if (deliveryFailures.length) {
  console.error('\nCanonical integrity failures:')
  for (const failure of deliveryFailures.slice(0, 50)) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(
  missing.length === 0
    ? '\nPR-006 result: PASS — catalog and canonical topic coverage are complete.'
    : '\nPR-006 result: PASS WITH MIGRATION GAPS — canonical repository is internally deliverable; remaining gaps are explicitly reported for migration waves.',
)
