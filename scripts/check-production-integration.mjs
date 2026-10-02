import { execFileSync } from 'node:child_process'

const BASE = process.env.CODEPACKR_LAW_PRODUCTION_URL || 'https://law.codepackr.com'
const routes = ['/', '/subjects/cpc/s-32', '/subjects/pil/pil-locus-standi', '/subjects/tort/nature-definition', '/subjects/constitution/art-1', '/sitemap.xml']

function fetchText(path) {
  const url = new URL(path, BASE).toString()
  const args = ['--silent','--show-error','--location','--fail-with-body','--retry','5','--retry-delay','3','--retry-all-errors','--connect-timeout','15','--max-time','30','--user-agent','Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/142 Safari/537.36','--header',path.endsWith('.xml') ? 'Accept: application/xml,text/xml,*/*' : 'Accept: text/html,application/xhtml+xml,*/*','--write-out','\\n__HTTP_STATUS__%{http_code}\\n',url]
  try {
    const output = execFileSync('curl', args, { encoding: 'utf8' })
    const marker = '\\n__HTTP_STATUS__'
    const markerIndex = output.lastIndexOf(marker)
    if (markerIndex < 0) throw new Error('curl did not return an HTTP status marker')
    const body = output.slice(0, markerIndex)
    const status = Number(output.slice(markerIndex + marker.length).trim())
    if (!Number.isInteger(status) || status < 200 || status >= 400) throw new Error(`HTTP ${status}`)
    if (!body.trim()) throw new Error('empty response body')
    return { status, body }
  } catch (error) {
    throw new Error(`Production route unavailable: ${path} -> ${error instanceof Error ? error.message : String(error)}`)
  }
}

for (const route of routes) {
  const { status, body } = fetchText(route)
  console.log(`Production route OK: ${route} -> HTTP ${status}`)
  if (route === '/sitemap.xml') {
    if (!body.includes('<urlset')) throw new Error('Production sitemap is not a valid urlset')
    for (const expected of ['https://law.codepackr.com/subjects/cpc/s-32','https://law.codepackr.com/subjects/pil/pil-locus-standi','https://law.codepackr.com/subjects/tort/nature-definition','https://law.codepackr.com/subjects/constitution/art-1']) {
      if (!body.includes(`<loc>${expected}</loc>`)) throw new Error(`Production sitemap missing representative URL: ${expected}`)
    }
    console.log('Production sitemap contains all representative canonical URLs')
  }
}

console.log(`Production integration checks passed for ${routes.length} routes at ${BASE}`)
