/**
 * URL-safe slug generation and validation utilities (Phase 23 Testing Strategy & Architecture).
 * Adheres to 100% deterministic client-side URL contracts.
 */

/**
 * Converts any arbitrary text into a clean, kebab-cased, URL-safe slug.
 * Strips special characters, trims hyphens, and collapses multiple separators.
 */
export function slugify(text: string): string {
  if (!text) return ''
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // decompose diacritics
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9\s-_]/g, '') // strip punctuation
    .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
    .replace(/-+/g, '-') // collapse consecutive hyphens
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
}

/**
 * Checks whether a given string is a valid RFC/URL-safe kebab-case slug.
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || typeof slug !== 'string') return false
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)
}

/**
 * Generates a standard judgment slug from party names and optional judgment year.
 * e.g. ("Kesavananda Bharati v. State of Kerala", 1973) => "kesavananda-bharati-v-state-of-kerala-1973"
 */
export function generateCaseSlug(caseName: string, year?: number | string): string {
  const base = slugify(caseName)
  if (!year) return base
  const yearStr = String(year).trim()
  if (base.endsWith(yearStr)) return base
  return `${base}-${yearStr}`
}

/**
 * Generates a hierarchical or prefixed topic slug.
 */
export function generateTopicSlug(prefix: string, name: string): string {
  const p = slugify(prefix)
  const n = slugify(name)
  if (!p) return n
  if (!n) return p
  return `${p}-${n}`
}
