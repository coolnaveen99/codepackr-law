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
