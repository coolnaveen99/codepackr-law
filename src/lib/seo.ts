/**
 * Client-side SEO helpers for Codepackr Law (path-based SPA).
 * Updates document title, description, canonical, and Open Graph tags.
 */

export const SITE_URL = 'https://law.codepackr.com'
export const SITE_NAME = 'Codepackr Law'
export const SITE_TAGLINE =
  'Free client-side AIBE & Judiciary MCQ practice, Bare Act tools, flashcards and more. 100% private.'

export interface PageMeta {
  title: string
  description: string
  /** Pathname e.g. "/subjects/constitution" or "/" */
  path?: string
  image?: string
  noIndex?: boolean
}

function ensureMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector =
    attr === 'name'
      ? `meta[name="${key}"]`
      : `meta[property="${key}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function ensureLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Apply page SEO for the current view. Safe to call on every route change. */
export function setPageMeta(meta: PageMeta) {
  if (typeof document === 'undefined') return

  const title = meta.title.includes(SITE_NAME) ? meta.title : `${meta.title} | ${SITE_NAME}`
  document.title = title

  ensureMeta('name', 'description', meta.description)
  ensureMeta('name', 'robots', meta.noIndex ? 'noindex, nofollow' : 'index, follow')

  const path = meta.path ?? '/'
  const url = path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  ensureLink('canonical', url)

  const image = meta.image ?? `${SITE_URL}/favicon.svg`

  ensureMeta('property', 'og:type', 'website')
  ensureMeta('property', 'og:site_name', SITE_NAME)
  ensureMeta('property', 'og:title', title)
  ensureMeta('property', 'og:description', meta.description)
  ensureMeta('property', 'og:url', url)
  ensureMeta('property', 'og:image', image)
  ensureMeta('property', 'og:locale', 'en_IN')

  ensureMeta('name', 'twitter:card', 'summary_large_image')
  ensureMeta('name', 'twitter:title', title)
  ensureMeta('name', 'twitter:description', meta.description)
  ensureMeta('name', 'twitter:image', image)
}
