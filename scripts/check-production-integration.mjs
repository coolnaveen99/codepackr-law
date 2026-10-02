const BASE = process.env.CODEPACKR_LAW_PRODUCTION_URL || 'https://law.codepackr.com'
const routes = [
  '/',
  '/subjects/cpc/s-32',
  '/subjects/pil/pil-locus-standi',
  '/subjects/tort/nature-definition',
  '/sitemap.xml',
]

const controllerTimeoutMs = 15000

async function fetchText(path) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), controllerTimeoutMs)
  try {
    const response = await fetch(new URL(path, BASE), {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'codepackr-law-production-check/1.0' },
    })
    const text = await response.text()
    return { response, text }
  } finally {
    clearTimeout(timer)
  }
}

for (const route of routes) {
  const { response, text } = await fetchText(route)
  if (!response.ok) {
    throw new Error(`Production route failed: ${route} -> HTTP ${response.status}`)
  }
  if (!text.trim()) throw new Error(`Production route returned empty body: ${route}`)

  if (route === '/sitemap.xml') {
    if (!text.includes('<urlset')) throw new Error('Production sitemap is not a valid urlset')
    for (const expected of [
      'https://law.codepackr.com/subjects/cpc/s-32',
      'https://law.codepackr.com/subjects/pil/pil-locus-standi',
      'https://law.codepackr.com/subjects/tort/nature-definition',
    ]) {
      if (!text.includes(`<loc>${expected}</loc>`)) {
        throw new Error(`Production sitemap missing representative URL: ${expected}`)
      }
    }
    continue
  }

  const canonical = new URL(route, BASE).href
  const canonicalMatch = text.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
  if (!canonicalMatch) throw new Error(`Production page missing canonical link: ${route}`)
  if (canonicalMatch[1] !== canonical) {
    throw new Error(`Production canonical mismatch for ${route}: ${canonicalMatch[1]} != ${canonical}`)
  }
  if (!/<title>[^<]+<\/title>/i.test(text)) throw new Error(`Production page missing title: ${route}`)
}

console.log(`Production integration checks passed for ${routes.length} routes at ${BASE}`)
