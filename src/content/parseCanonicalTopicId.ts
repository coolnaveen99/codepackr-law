/**
 * Parse canonical topic IDs produced by legal-content / ContentRepository.canonicalTopicId:
 *   topic:india:${subjectSlug}-${topicId}
 *
 * Catalog topic ids are inconsistent:
 * - Section style (cpc, bns…): id = `s-32` → local `cpc-s-32`
 * - Prefixed doctrine style (pil…): id = `pil-locus-standi` → local `pil-locus-standi`
 *
 * For app routing we return a topicId that `getTopic(subject, topicId)` can resolve:
 * section-style → remainder; when the remainder is not a typical section token and the
 * local key already embeds the subject slug as a full catalog id, return the full local.
 */

const SUBJECT_SLUGS = [
  'fundamental-rights',
  'constitution',
  'contract',
  'limitation',
  'arbitration',
  'registration',
  'family',
  'torts',
  'tort',
  'dpsp',
  'pil',
  'hma',
  'bnss',
  'bns',
  'bsa',
  'cpc',
  'tpa',
  'sra',
  'ni',
  'ethics',
  'adr',
  'admin',
  'company',
  'cyber',
  'environment',
  'ipr',
  'labour',
  'land',
  'taxation',
  'petition-formats',
].sort((a, b) => b.length - a.length)

/** Section / order / article style remainders stay un-prefixed in the catalog. */
const SECTION_STYLE = /^(s|sec|section|art|article|o|ord|order|rule|sch|schedule)[-_.]?\w/i

export function parseCanonicalTopicId(
  id: string,
): { subjectSlug: string; topicId: string } | null {
  if (!id.startsWith('topic:india:')) return null
  const local = id.slice('topic:india:'.length)
  for (const slug of SUBJECT_SLUGS) {
    if (local.startsWith(`${slug}-`) && local.length > slug.length + 1) {
      const remainder = local.slice(slug.length + 1)
      // Prefixed doctrine catalog ids (e.g. pil-locus-standi): keep full local as topicId
      if (!SECTION_STYLE.test(remainder) && local.startsWith(`${slug}-`)) {
        // Heuristic: if remainder does not look like a bare section token, prefer full local
        // so App getTopic('pil', 'pil-locus-standi') succeeds.
        // Exception: short unprefixed doctrines like nature-definition under tort.
        const looksPrefixedCatalogId =
          remainder.includes('-') &&
          !SECTION_STYLE.test(remainder) &&
          // common pattern: subject word repeated in topic id (pil-…, ethics-…)
          (remainder.startsWith(slug) || local === `${slug}-${remainder}`)
        if (looksPrefixedCatalogId && remainder.startsWith(slug)) {
          return { subjectSlug: slug, topicId: local }
        }
        // pil-locus-standi: remainder = locus-standi (does not start with pil)
        // but catalog id is pil-locus-standi — detect via known subject set of prefixed ids
        if (PREFIXED_TOPIC_SUBJECTS.has(slug)) {
          return { subjectSlug: slug, topicId: local }
        }
      }
      return { subjectSlug: slug, topicId: remainder }
    }
  }
  const i = local.indexOf('-')
  if (i <= 0) return null
  return { subjectSlug: local.slice(0, i), topicId: local.slice(i + 1) }
}

/** Subjects whose catalog topic ids include the subject slug prefix. */
const PREFIXED_TOPIC_SUBJECTS = new Set([
  'pil',
  'ethics',
  'adr',
  'admin',
  'petition-formats',
])

export function hrefForCanonicalTopicId(id: string): string | null {
  const parsed = parseCanonicalTopicId(id)
  if (!parsed) return null
  return `/subjects/${parsed.subjectSlug}/${parsed.topicId}`
}

/** Read subject/topic from the app route `/subjects/:slug/:topicId`. */
export function parseSubjectTopicFromPath(pathname: string): { subjectSlug: string; topicId: string } | null {
  const m = pathname.match(/\/subjects\/([^/]+)\/([^/\?#]+)/)
  if (!m) return null
  return { subjectSlug: decodeURIComponent(m[1]), topicId: decodeURIComponent(m[2]) }
}
