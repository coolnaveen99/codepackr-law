import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SUBJECTS } from '../src/data/subjects'
import { ALL_JUDGMENTS } from '../src/data/judgments'
import { TOOLS } from '../src/data/tools'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const BASE_URL = 'https://law.codepackr.com'
const TODAY = new Date().toISOString().split('T')[0]

interface SitemapEntry {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
}

const entries: SitemapEntry[] = []
const seenUrls = new Set<string>()

function addUrl(loc: string, changefreq: SitemapEntry['changefreq'], priority: string, lastmod = TODAY) {
  if (seenUrls.has(loc)) return
  seenUrls.add(loc)
  entries.push({ loc, lastmod, changefreq, priority })
}

// 1. Core pages
addUrl(`${BASE_URL}/`, 'daily', '1.0')
addUrl(`${BASE_URL}/subjects`, 'daily', '0.95')
addUrl(`${BASE_URL}/case-law`, 'daily', '0.95')
addUrl(`${BASE_URL}/knowledge`, 'weekly', '0.90')
addUrl(`${BASE_URL}/contact`, 'monthly', '0.60')

// 2. Interactive tools
for (const tool of TOOLS) {
  // case-law and knowledge are handled as primary hubs above
  if (tool.slug === 'case-law' || tool.slug === 'knowledge') continue
  addUrl(`${BASE_URL}/tool/${tool.slug}`, 'weekly', '0.85')
}

// 3. All 20 Curriculum Subjects
for (const subject of SUBJECTS) {
  addUrl(`${BASE_URL}/subjects/${subject.slug}`, 'weekly', '0.85')
}

// 4. All Landmark Judgments (290+)
for (const judgment of ALL_JUDGMENTS) {
  addUrl(`${BASE_URL}/case-law/judgment/${judgment.id}`, 'monthly', '0.85')
}

// 5. Canonical-only representative topic routes not represented in the legacy SUBJECTS catalog.
// These stable routes are part of the canonical delivery/SEO contract.
for (const href of [
  '/subjects/tort/nature-definition',
]) {
  addUrl(`${BASE_URL}${href}`, 'monthly', '0.75')
}

// 6. All Topics / Bare Act Sections (3,552+)
for (const subject of SUBJECTS) {
  for (const topic of subject.topics) {
    addUrl(`${BASE_URL}/subjects/${subject.slug}/${topic.id}`, 'monthly', '0.75')
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml')
fs.writeFileSync(sitemapPath, xml, 'utf8')

console.log(`Generated sitemap.xml with ${entries.length} URLs at ${sitemapPath}`)
console.log(`- Core & hubs: 5`)
console.log(`- Tools: ${TOOLS.filter((t) => t.slug !== 'case-law' && t.slug !== 'knowledge').length}`)
console.log(`- Subjects: ${SUBJECTS.length}`)
console.log(`- Landmark Judgments: ${ALL_JUDGMENTS.length}`)
console.log(`- Topics / Sections: ${SUBJECTS.reduce((acc, s) => acc + s.topics.length, 0)}`)
