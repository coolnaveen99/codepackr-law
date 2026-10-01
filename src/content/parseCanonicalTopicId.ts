/**
 * Parse canonical topic IDs produced by legal-content / ContentRepository.canonicalTopicId:
 *   topic:india:${subjectSlug}-${topicId}
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
].sort((a, b) => b.length - a.length)

export function parseCanonicalTopicId(
  id: string,
): { subjectSlug: string; topicId: string } | null {
  if (!id.startsWith('topic:india:')) return null
  const local = id.slice('topic:india:'.length)
  for (const slug of SUBJECT_SLUGS) {
    if (local.startsWith(`${slug}-`) && local.length > slug.length + 1) {
      return { subjectSlug: slug, topicId: local.slice(slug.length + 1) }
    }
  }
  const i = local.indexOf('-')
  if (i <= 0) return null
  return { subjectSlug: local.slice(0, i), topicId: local.slice(i + 1) }
}

export function hrefForCanonicalTopicId(id: string): string | null {
  const parsed = parseCanonicalTopicId(id)
  if (!parsed) return null
  return `/subjects/${parsed.subjectSlug}/${parsed.topicId}`
}
