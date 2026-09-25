import type { LawSubjectMeta } from '../../data/subjects'

export const SUBJECT_FLOORS: Record<string, number> = {
  constitution: 523,
  bnss: 539,
  cpc: 235,
  bns: 368,
  bsa: 177,
  family: 38,
  contract: 42,
  tort: 29,
  adr: 125,
  ethics: 80,
  'petition-formats': 8,
  pil: 18,
  labour: 523,
  company: 561,
  taxation: 51,
  admin: 44,
  environment: 31,
  cyber: 53,
  land: 44,
  ipr: 63,
}

export interface TopicValidationResult {
  ok: boolean
  errors: string[]
  warnings: string[]
  perSubject: {
    slug: string
    count: number
    floor: number
    duplicateIds: string[]
    missingNoteFiles: string[]
  }[]
}

export function validateTopics(
  subjects: LawSubjectMeta[],
  fileExists?: (slug: string, id: string) => boolean,
): TopicValidationResult {
  const errors: string[] = []
  const warnings: string[] = []
  const perSubject: TopicValidationResult['perSubject'] = []

  for (const s of subjects) {
    const floor = SUBJECT_FLOORS[s.slug] ?? 0
    const ids = s.topics.map((t) => t.id)
    const seen = new Set<string>()
    const duplicateIds: string[] = []
    for (const id of ids) {
      if (seen.has(id)) duplicateIds.push(id)
      seen.add(id)
    }
    if (duplicateIds.length > 0) {
      warnings.push(
        `${s.slug}: overlapping topic ids (allowed if theme + provision): ${[...new Set(duplicateIds)].join(', ')}`,
      )
    }
    if (s.topics.length < floor) {
      errors.push(`${s.slug}: topic count ${s.topics.length} below floor ${floor}`)
    }

    const missingNoteFiles: string[] = []
    if (fileExists) {
      for (const t of s.topics) {
        if (t.hasNotes && !fileExists(s.slug, t.id)) {
          missingNoteFiles.push(t.id)
        }
      }
      if (missingNoteFiles.length > 0) {
        errors.push(
          `${s.slug}: hasNotes:true but missing files (${missingNoteFiles.length}): ${missingNoteFiles.slice(0, 5).join(', ')}${missingNoteFiles.length > 5 ? '…' : ''}`,
        )
      }
    }

    perSubject.push({
      slug: s.slug,
      count: s.topics.length,
      floor,
      duplicateIds: [...new Set(duplicateIds)],
      missingNoteFiles,
    })
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    perSubject,
  }
}
