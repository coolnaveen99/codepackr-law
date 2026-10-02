#!/usr/bin/env node
/** CM-001 local catalog inventory. Does not fetch or invent canonical topics. */
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const data = join(root, 'src/data')
const subjects = readdirSync(data).filter((name) => statSync(join(data, name)).isDirectory())
const rows = subjects.map((subject) => {
  const dir = join(data, subject)
  const files = readdirSync(dir).filter((name) => name.endsWith('.ts') || name.endsWith('.json'))
  return `| ${subject} | ${files.length} | local catalog present; canonical migration still required |`
})
const report = `# CM-001 Canonical-vs-catalog gap inventory\n\nLocal catalog folders only. This does not mark a subject migrated.\n\n| Subject folder | Local files | Gap |\n|---|---:|---|\n${rows.join('\n')}\n\nRule: CM-002 onward stays open until each topic has source, provenance, verification status, schema, route, SEO, and canonical-delivery evidence.\n`
writeFileSync(join(root, 'docs/CM-001-GAP-INVENTORY.md'), report)
console.log(`CM-001 subjects=${subjects.length}`)
