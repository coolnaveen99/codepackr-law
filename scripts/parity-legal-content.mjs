#!/usr/bin/env node
/**
 * Smoke parity check: codepackr-law ContentRepository against live legal-content.
 * Run: node scripts/parity-legal-content.mjs
 * Optional: LEGAL_CONTENT_BASE_URL=https://...
 */
const BASE =
  process.env.LEGAL_CONTENT_BASE_URL ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`${url} → ${res.status}`)
  return res.json()
}

function canonicalTopicId(subject, topic) {
  return `topic:india:${subject}-${topic}`
}

const probes = [
  { subject: 'pil', topic: 'locus-standi' },
  { subject: 'cpc', topic: 's-32' },
  { subject: 'tort', topic: 'nature-definition' },
  { subject: 'contract', topic: 's-10' },
  { subject: 'constitution', topic: 'art-32' },
]

let failed = 0

const manifest = await fetchJson(`${BASE}/manifests/content-manifest.json`)
console.log(`manifest entities=${manifest.entities?.length} generatedAt=${manifest.generatedAt}`)
if (!manifest.entities || manifest.entities.length < 100) {
  console.error('FAIL: expected full manifest (≥100 entities)')
  failed++
}

const index = await fetchJson(`${BASE}/manifests/relationship-index.json`)
console.log(`relationship-index edges=${index.edgeCount}`)
if (!index.edgeCount || index.edgeCount < 40) {
  console.error('FAIL: expected graph edges')
  failed++
}

for (const p of probes) {
  const id = canonicalTopicId(p.subject, p.topic)
  const entry = manifest.entities.find((e) => e.id === id)
  if (!entry) {
    console.error(`FAIL: ${id} missing from manifest`)
    failed++
    continue
  }
  const entity = await fetchJson(`${BASE}/${entry.path}`)
  if (entity.status !== 'published' || entity.id !== id) {
    console.error(`FAIL: ${id} not published or id mismatch`)
    failed++
    continue
  }
  console.log(`OK: ${id} ← ${entry.path}`)
}

const pilEdges = index.outbound?.['topic:india:pil-locus-standi'] || []
const related = pilEdges.filter((e) => e.field === 'relatedTopics')
if (related.length < 3) {
  console.error(`FAIL: PIL relatedTopics edges=${related.length}`)
  failed++
} else {
  console.log(`OK: PIL relatedTopics=${related.length}`)
}

console.log(failed === 0 ? '\nParity smoke: PASS' : `\nParity smoke: FAIL (${failed})`)
process.exit(failed === 0 ? 0 : 1)
