#!/usr/bin/env node
/**
 * Full-catalog canonical parity gate.
 * Every real legacy topic must have a published canonical topic.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const LAW_TOPICS = path.join(ROOT, 'src', 'data', 'topics')
const CANONICAL_ROOT = path.resolve(process.env.LEGAL_CONTENT_ROOT || path.join(ROOT, 'legal-content'))
const MIGRATION = path.join(CANONICAL_ROOT, 'manifests', 'legacy-topic-migration.json')

const EXCLUDED = new Set([
  'bnss/generatedSection',
  'bsa/generatedSection',
  'cpc/generatedTopic',
  'generatedSubjectTopic',
  'loadTopicContent',
  'synthesizeArticle',
  'synthesizeCpc',
  'synthesizePlaceholderTopic',
  'synthesizeProvision',
  'topicTypes',
])

function walk(dir) {
  const out = []
  if (!fs.existsSync(dir)) return out
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name)
    const stat = fs.statSync(file)
    if (stat.isDirectory()) out.push(...walk(file))
    else if (name.endsWith('.ts')) out.push(file)
  }
  return out
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (error) {
    throw new Error(`Invalid JSON: ${file}: ${error.message}`)
  }
}

const legacyFiles = walk(LAW_TOPICS)
  .map(file => path.relative(LAW_TOPICS, file).replaceAll(path.sep, '/').replace(/\.ts$/, ''))
  .filter(key => !EXCLUDED.has(key))

if (!fs.existsSync(MIGRATION)) throw new Error(`Missing migration manifest: ${MIGRATION}`)

const migration = readJson(MIGRATION)
const records = Array.isArray(migration.records) ? migration.records : []
const byLegacy = new Map(records.map(record => [record.legacyPath, record]))
const failures = []
const seenCanonical = new Set()

for (const legacyPath of legacyFiles) {
  const record = byLegacy.get(legacyPath)
  if (!record) {
    failures.push({ legacyPath, reason: 'missing-migration-record' })
    continue
  }
  if (!['MIGRATED', 'RENAMED'].includes(record.disposition)) {
    failures.push({ legacyPath, reason: `migration-disposition=${record.disposition}` })
    continue
  }
  if (!record.canonicalPath) {
    failures.push({ legacyPath, reason: 'missing-canonical-path' })
    continue
  }

  const canonicalFile = path.join(CANONICAL_ROOT, record.canonicalPath)
  if (!fs.existsSync(canonicalFile)) {
    failures.push({ legacyPath, canonicalPath: record.canonicalPath, reason: 'canonical-file-missing' })
    continue
  }

  let entity
  try {
    entity = readJson(canonicalFile)
  } catch (error) {
    failures.push({ legacyPath, canonicalPath: record.canonicalPath, reason: 'canonical-json-invalid', detail: error.message })
    continue
  }

  if (entity.entityType !== 'topic') failures.push({ legacyPath, canonicalPath: record.canonicalPath, reason: `entityType=${entity.entityType}` })
  if (entity.status !== 'published') failures.push({ legacyPath, canonicalPath: record.canonicalPath, reason: `status=${entity.status}` })
  if (typeof entity.id !== 'string' || !entity.id.startsWith('topic:india:')) {
    failures.push({ legacyPath, canonicalPath: record.canonicalPath, reason: 'invalid-canonical-topic-id' })
  }
  if (seenCanonical.has(record.canonicalPath)) {
    failures.push({ legacyPath, canonicalPath: record.canonicalPath, reason: 'duplicate-canonical-target' })
  }
  seenCanonical.add(record.canonicalPath)
}

const unexpected = records.filter(r => ['MIGRATED_REVIEW', 'MIGRATION_ERROR'].includes(r.disposition))
const summary = {
  legacyTopicFiles: legacyFiles.length,
  migrationRecords: records.length,
  migrated: records.filter(r => r.disposition === 'MIGRATED').length,
  renamed: records.filter(r => r.disposition === 'RENAMED').length,
  excludedHelpers: records.filter(r => r.disposition === 'EXCLUDED_NON_TOPIC_HELPER').length,
  failures: failures.length,
  unexpectedMigrationRecords: unexpected.length,
}
console.log(JSON.stringify(summary, null, 2))

if (failures.length || unexpected.length) {
  console.error('\nCanonical full-catalog parity: FAIL')
  for (const failure of failures.slice(0, 50)) console.error(JSON.stringify(failure))
  for (const record of unexpected.slice(0, 20)) console.error(JSON.stringify({
    legacyPath: record.legacyPath, canonicalPath: record.canonicalPath, reason: record.disposition,
  }))
  process.exit(1)
}
if (legacyFiles.length !== 3551) throw new Error(`Expected 3551 legacy topics; found ${legacyFiles.length}`)
if (records.length !== 3561) throw new Error(`Expected 3561 migration records; found ${records.length}`)

console.log('\nCanonical full-catalog parity: PASS')
console.log(`All ${legacyFiles.length} legacy topics resolve to published canonical entities.`)

// CI validation evidence run: no runtime behavior change.
