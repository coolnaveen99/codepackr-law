/**
 * Path-based routes (History API):
 *   /                      home
 *   /tool/<slug>           tool
 *   /subjects              all subjects
 *   /subjects/<slug>       one subject
 *   /knowledge             reusable legal knowledge index
 *   /knowledge/<id>        canonical knowledge entity (TYPE~CATEGORY~SLUG)

 *
 * Old hash URLs (#/tool/..., #/subjects/...) are redirected once on load.
 */

export type AppRoute =
  | { type: 'home' }
  | { type: 'tool'; slug: string }
  | { type: 'case-law'; judgmentId?: string }
  | { type: 'subjects' }
  | { type: 'subject'; slug: string }
  | { type: 'topic'; subjectSlug: string; topicId: string }
  | { type: 'knowledge'; entityId?: string }
  | { type: 'contact' }

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  const p = pathname.replace(/\/+$/, '') || '/'
  return p.startsWith('/') ? p : `/${p}`
}

export function parsePathname(pathname: string): AppRoute {
  const path = normalizePath(pathname)

  const toolMatch = path.match(/^\/tool\/([a-z0-9-]+)$/i)
  if (toolMatch) return { type: 'tool', slug: toolMatch[1] }

  const judgmentMatch = path.match(/^\/case-law\/judgment\/([a-z0-9-]+)$/i)
  if (judgmentMatch) return { type: 'case-law', judgmentId: judgmentMatch[1] }

  if (path === '/case-law') return { type: 'case-law' }

  const knowledgeMatch = path.match(/^\/knowledge\/([^/]+)$/i)
  if (knowledgeMatch) return { type: 'knowledge', entityId: knowledgeMatch[1] }
  if (path === '/knowledge') return { type: 'knowledge' }

  const topicMatch = path.match(/^\/subjects\/([a-z0-9-]+)\/([a-z0-9-]+)$/i)
  if (topicMatch) return { type: 'topic', subjectSlug: topicMatch[1], topicId: topicMatch[2] }

  const subjectMatch = path.match(/^\/subjects\/([a-z0-9-]+)$/i)
  if (subjectMatch) return { type: 'subject', slug: subjectMatch[1] }

  if (path === '/subjects') return { type: 'subjects' }

  if (path === '/contact' || path === '/feedback') return { type: 'contact' }

  return { type: 'home' }
}

export function parseRoute(): AppRoute {
  if (typeof window === 'undefined') return { type: 'home' }
  return parsePathname(window.location.pathname)
}

/** Push a new history entry and notify App via popstate */
function navigate(path: string, replace = false) {
  if (typeof window === 'undefined') return
  const url = path.startsWith('/') ? path : `/${path}`
  if (replace) {
    window.history.replaceState({}, '', url)
  } else {
    window.history.pushState({}, '', url)
  }
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function getToolUrl(slug: string): string {
  return `/tool/${slug}`
}

export function getCurrentToolSlug(): string | null {
  if (typeof window === 'undefined') return null
  const route = parseRoute()
  return route.type === 'tool' ? route.slug : null
}

export function setToolUrl(slug: string | null) {
  if (slug) navigate(`/tool/${slug}`)
  else navigate('/')
}

export function setCaseLawUrl(judgmentId?: string) {
  navigate(judgmentId ? `/case-law/judgment/${judgmentId}` : '/case-law')
}

export function setSubjectsUrl() {
  navigate('/subjects')
}

export function setSubjectUrl(slug: string) {
  navigate(`/subjects/${slug}`)
}

export function setTopicUrl(subjectSlug: string, topicId: string) {
  navigate(`/subjects/${subjectSlug}/${topicId}`)
}

export function setKnowledgeUrl(entityId?: string) {
  navigate(entityId ? `/knowledge/${entityId}` : '/knowledge')
}

export function setContactUrl() {
  navigate('/contact')
}

export function setHomeUrl() {
  navigate('/')
}

/**
 * One-time migration: #/tool/x → /tool/x etc.
 * Call once on app boot.
 */
export function migrateHashToPath(): boolean {
  if (typeof window === 'undefined') return false
  const hash = window.location.hash.replace(/^#/, '') || ''
  if (!hash || hash === '/') return false

  const route = parsePathname(hash.startsWith('/') ? hash : `/${hash}`)
  let path = '/'
  if (route.type === 'tool') path = `/tool/${route.slug}`
  else if (route.type === 'case-law') path = route.judgmentId ? `/case-law/judgment/${route.judgmentId}` : '/case-law'
  else if (route.type === 'knowledge') path = route.entityId ? `/knowledge/${route.entityId}` : '/knowledge'
  else if (route.type === 'subjects') path = '/subjects'
  else if (route.type === 'subject') path = `/subjects/${route.slug}`
  else if (route.type === 'topic') path = `/subjects/${route.subjectSlug}/${route.topicId}`
  else if (route.type === 'contact') path = '/contact'
  else return false

  window.history.replaceState({}, '', path)
  return true
}
