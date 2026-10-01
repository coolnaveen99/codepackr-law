/**
 * Client-side SEO & Structured Data helpers for Codepackr Law (path-based SPA).
 * Updates document title, description, keywords, canonical, Open Graph,
 * Twitter cards, and Schema.org JSON-LD (Articles, Legislation, Breadcrumbs).
 */

export const SITE_URL = 'https://law.codepackr.com'
export const SITE_NAME = 'Codepackr Law'
export const SITE_TAGLINE =
  'A free digital Indian law library and practice reference with statutes, case law, legal concepts, drafting formats, study notes and exam preparation tools.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface PageMeta {
  title: string
  description: string
  /** Pathname e.g. "/subjects/constitution" or "/" */
  path?: string
  image?: string
  noIndex?: boolean
  keywords?: string | string[]
  breadcrumbs?: BreadcrumbItem[]
  structuredData?: object | object[]
}

export function buildCanonicalUrl(path = '/') {
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`
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

function ensureJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data, null, 2)
}

function removeJsonLd(id: string) {
  const el = document.getElementById(id)
  if (el) el.remove()
}

/** Apply comprehensive page SEO for the current view. Safe to call on every route change. */
export function setPageMeta(meta: PageMeta) {
  if (typeof document === 'undefined') return

  const title = meta.title.includes(SITE_NAME) ? meta.title : `${meta.title} | ${SITE_NAME}`
  document.title = title

  ensureMeta('name', 'description', meta.description)
  ensureMeta('name', 'robots', meta.noIndex ? 'noindex, nofollow' : 'index, follow')

  // Search Engine Keywords tag (Bing / Yahoo / DuckDuckGo indexing boost)
  if (meta.keywords) {
    const kw = Array.isArray(meta.keywords) ? meta.keywords.filter(Boolean).join(', ') : meta.keywords
    if (kw) ensureMeta('name', 'keywords', kw)
  }

  const url = buildCanonicalUrl(meta.path ?? '/')
  ensureLink('canonical', url)

  const image = meta.image ?? DEFAULT_OG_IMAGE

  ensureMeta('property', 'og:type', 'website')
  ensureMeta('property', 'og:image:url', image)
  ensureMeta('property', 'og:image:secure_url', image)
  ensureMeta('property', 'og:site_name', SITE_NAME)
  ensureMeta('property', 'og:title', title)
  ensureMeta('property', 'og:description', meta.description)
  ensureMeta('property', 'og:url', url)
  ensureMeta('property', 'og:image', image)
  ensureMeta('property', 'og:image:type', 'image/png')
  ensureMeta('property', 'og:image:width', '1200')
  ensureMeta('property', 'og:image:height', '630')
  ensureMeta('property', 'og:image:alt', title)
  ensureMeta('property', 'og:locale', 'en_IN')

  ensureMeta('name', 'twitter:card', 'summary_large_image')
  ensureMeta('name', 'twitter:title', title)
  ensureMeta('name', 'twitter:description', meta.description)
  ensureMeta('name', 'twitter:image', image)
  ensureMeta('name', 'twitter:image:alt', title)

  // Structured Data — Breadcrumbs
  if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: meta.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.path.startsWith('http')
          ? crumb.path
          : `${SITE_URL}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}`,
      })),
    }
    ensureJsonLd('cp-schema-breadcrumbs', breadcrumbSchema)
  } else {
    removeJsonLd('cp-schema-breadcrumbs')
  }

  // Structured Data — Specific Entity (JudicialDecision / Article / Legislation)
  if (meta.structuredData) {
    ensureJsonLd('cp-schema-page', meta.structuredData)
  } else {
    removeJsonLd('cp-schema-page')
  }
}


/** Structured data for a subject landing page. */
export function buildSubjectStructuredData(subject: { name: string; slug: string; description?: string }) {
  const url = `${SITE_URL}/subjects/${subject.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#page`,
    name: subject.name,
    description: subject.description || `Indian law study and reference material for ${subject.name}.`,
    url,
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  }
}

/** Structured data for a client-side legal practice/study tool. */
export function buildToolStructuredData(tool: { name: string; slug: string; description?: string }) {
  const url = `${SITE_URL}/tool/${tool.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${url}#application`,
    name: tool.name,
    description: tool.description || `Free Indian law practice tool: ${tool.name}.`,
    url,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  }
}
/** Structured Data generator for Supreme Court Landmark Judgments */
export function buildJudgmentStructuredData(judgment: {
  id: string
  caseName: string
  shortName?: string
  court?: string
  citation?: string
  year?: number
  judgmentDate?: string
  ratioDecidendi?: string
  holding?: string
  decision?: string
  summary?: string
  bench?: string
  topics?: string[]
}) {
  const url = `${SITE_URL}/case-law/judgment/${judgment.id}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: `${judgment.caseName} ${judgment.citation ? `(${judgment.citation})` : ''}`,
    name: judgment.caseName,
    alternativeHeadline: judgment.shortName,
    description:
      judgment.summary ||
      judgment.ratioDecidendi ||
      judgment.holding ||
      judgment.decision ||
      `Landmark ruling by ${judgment.court || 'Supreme Court of India'}.`,
    datePublished: judgment.judgmentDate || (judgment.year ? `${judgment.year}-01-01` : '2024-01-01'),
    inLanguage: 'en-IN',
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'Codepackr Law Senior Research Chamber',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    about: [
      {
        '@type': 'GovernmentOrganization',
        name: judgment.court || 'Supreme Court of India',
      },
      ...(judgment.topics || []).map((t) => ({
        '@type': 'DefinedTerm',
        name: t,
      })),
    ],
  }
}

/** Structured Data generator for Bare Act Topics and Statutory Treatises */
export function buildTopicStructuredData(
  subject: { name: string; slug: string },
  topic: { id: string; name: string; note?: string; range?: string },
) {
  const url = `${SITE_URL}/subjects/${subject.slug}/${topic.id}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#treatise`,
    headline: `${topic.name} — ${subject.name}`,
    name: topic.name,
    description: topic.note || `Bare Act provisions, ingredients, and study notes for ${topic.name} under ${subject.name}.`,
    mainEntityOfPage: url,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'Legislation',
      name: subject.name,
      url: `${SITE_URL}/subjects/${subject.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'Codepackr Law Editorial & Academic Chamber',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
  }
}
