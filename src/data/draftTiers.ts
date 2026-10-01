/**
 * Phase 25 — Draft catalogue governance.
 * Every draft/document entry must declare what the user is actually receiving.
 */
export type DraftTier = 'verified' | 'scaffold' | 'catalogue' | 'checklist'

export interface DraftTierMeta {
  id: DraftTier
  label: string
  description: string
  mayBeUsedAs: string
  permitsDraftBody: boolean
  permitsExport: boolean
}

export const DRAFT_TIERS: DraftTierMeta[] = [
  {
    id: 'verified',
    label: 'Tier 1 — Verified full template',
    description: 'Human-reviewed substantive educational template against the recorded applicable-law scope.',
    mayBeUsedAs: 'Starting point for professional completion — never court-approved or filing-certified.',
    permitsDraftBody: true,
    permitsExport: true,
  },
  {
    id: 'scaffold',
    label: 'Tier 2 — Structured educational scaffold',
    description: 'Detailed structure with legal metadata; substantive completion remains with the user/professional.',
    mayBeUsedAs: 'Learning and chamber drafting scaffold only.',
    permitsDraftBody: true,
    permitsExport: true,
  },
  {
    id: 'catalogue',
    label: 'Tier 3 — Catalogue entry',
    description: 'Document-type discovery record only; it contains no filing-ready pleading body.',
    mayBeUsedAs: 'Find the right document type, legal area and forum before drafting.',
    permitsDraftBody: false,
    permitsExport: false,
  },
  {
    id: 'checklist',
    label: 'Tier 4 — Checklist',
    description: 'Readiness or filing checklist rather than a pleading or substantive legal template.',
    mayBeUsedAs: 'Registry, chamber and filing-readiness checks.',
    permitsDraftBody: false,
    permitsExport: false,
  },
]

export function getDraftTierMeta(id: DraftTier): DraftTierMeta {
  return DRAFT_TIERS.find((tier) => tier.id === id) ?? DRAFT_TIERS[1]
}

export function tierLabel(id: DraftTier): string {
  return getDraftTierMeta(id).label
}

export function canEditDraftBody(id: DraftTier): boolean {
  return getDraftTierMeta(id).permitsDraftBody
}

export function canExportDraft(id: DraftTier): boolean {
  return getDraftTierMeta(id).permitsExport
}
