/** Tool routes: #/tool/<slug> */
export function getToolUrl(slug: string): string {
  return `#/tool/${slug}`
}

export function getCurrentToolSlug(): string | null {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash
  const match = hash.match(/^#\/tool\/([a-z0-9-]+)/i)
  return match ? match[1] : null
}

export function setToolUrl(slug: string | null) {
  if (typeof window === 'undefined') return
  if (slug) {
    window.location.hash = `/tool/${slug}`
  } else {
    window.location.hash = ''
  }
}

/** Subjects routes: #/subjects | #/subjects/<slug> */
export type AppRoute =
  | { type: 'home' }
  | { type: 'tool'; slug: string }
  | { type: 'subjects' }
  | { type: 'subject'; slug: string }

export function parseRoute(): AppRoute {
  if (typeof window === 'undefined') return { type: 'home' }
  const hash = window.location.hash.replace(/^#/, '') || ''

  const toolMatch = hash.match(/^\/tool\/([a-z0-9-]+)/i)
  if (toolMatch) return { type: 'tool', slug: toolMatch[1] }

  const subjectMatch = hash.match(/^\/subjects\/([a-z0-9-]+)/i)
  if (subjectMatch) return { type: 'subject', slug: subjectMatch[1] }

  if (hash === '/subjects' || hash.startsWith('/subjects?')) {
    return { type: 'subjects' }
  }

  return { type: 'home' }
}

export function setSubjectsUrl() {
  if (typeof window === 'undefined') return
  window.location.hash = '/subjects'
}

export function setSubjectUrl(slug: string) {
  if (typeof window === 'undefined') return
  window.location.hash = `/subjects/${slug}`
}

export function setHomeUrl() {
  if (typeof window === 'undefined') return
  window.location.hash = ''
}
