#!/usr/bin/env node
const BASE = (
  process.env.LEGAL_CONTENT_BASE_URL ||
  process.env.VITE_LEGAL_CONTENT_BASE_URL ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'
).replace(/\/$/, '')

async function fetchJson(path) {
  const response = await fetch(`${BASE}/${path}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(15_000),
  })
  if (!response.ok) throw new Error(`${path} → HTTP ${response.status}`)
  return response.json()
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const manifest = await fetchJson('manifests/content-manifest.json')
assert(manifest.repository === 'coolnaveen99/legal-content', 'manifest repository mismatch')
assert(Array.isArray(manifest.entities) && manifest.entities.length > 0, 'manifest is empty')
assert(/^v\d+$/.test(manifest.manifestVersion || ''), 'invalid manifestVersion')

const index = await fetchJson('manifests/relationship-index.json')
assert(index.repository === 'coolnaveen99/legal-content', 'relationship index repository mismatch')
assert(Number.isInteger(index.edgeCount) && index.edgeCount > 0, 'relationship index has no edges')

const ids = new Set()
const paths = new Set()
for (const entry of manifest.entities) {
  assert(entry.id && entry.path && entry.entityType, `malformed manifest entry: ${JSON.stringify(entry)}`)
  assert(!ids.has(entry.id), `duplicate manifest id: ${entry.id}`)
  assert(!paths.has(entry.path), `duplicate manifest path: ${entry.path}`)
  ids.add(entry.id)
  paths.add(entry.path)
}

const byType = new Map()
for (const entry of manifest.entities) {
  if (!byType.has(entry.entityType)) byType.set(entry.entityType, [])
  byType.get(entry.entityType).push(entry)
}

const probes = []
for (const [entityType, entries] of byType) {
  probes.push(...entries.filter((entry) => entry.status === 'published').slice(0, 2))
}

const fixedProbes = [
  'topics/pil/locus-standi.json',
  'topics/cpc/s-32.json',
  'topics/tort/nature-definition.json',
  'topics/contract/s-10.json',
  'topics/constitution/art-32.json',
]

const pathsToCheck = [...new Set([
  ...probes.map((entry) => entry.path),
  ...fixedProbes,
])]

let failures = 0
for (const path of pathsToCheck) {
  try {
    const entity = await fetchJson(path)
    assert(entity && typeof entity === 'object', `${path}: not an object`)
    assert(typeof entity.id === 'string', `${path}: missing id`)
    assert(typeof entity.entityType === 'string', `${path}: missing entityType`)
    assert(typeof entity.status === 'string', `${path}: missing status`)
    console.log(`OK: ${path}`)
  } catch (error) {
    failures += 1
    console.error(`FAIL: ${path} — ${error.message}`)
  }
}

console.log('')
console.log(`Manifest entities: ${manifest.entities.length}`)
console.log(`Relationship edges: ${index.edgeCount}`)
console.log(`Delivery probes: ${pathsToCheck.length}`)
console.log(`Delivery failures: ${failures}`)

if (failures) {
  process.exit(1)
}

console.log('\nPR-007 result: PASS — canonical manifest, relationship index and representative entity delivery are healthy.')
