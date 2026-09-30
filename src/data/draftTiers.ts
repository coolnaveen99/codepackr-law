/**
 * Phase 25 — Draft catalogue governance tiers.
 * Never label generic generated paragraphs as complete legal drafts.
 */

export type DraftTier = 'verified' | 'scaffold' | 'catalogue' | 'checklist'

export interface DraftTierMeta {
  id: DraftTier
  label: string
  description: string
  mayBeUsedAs: string
}

export const DRAFT_TIERS: DraftTierMeta[] = [
  {
    id: 'verified',
    label: 'Tier 1 — Verified full template',
    description: 'Human-reviewed substantive educational template against applicable law.',
    mayBeUsedAs: 'Starting point for professional completion — still not court-approved.',
  },
  {
    id: 'scaffold',
    label: 'Tier 2 — Structured educational scaffold',
    description: 'Detailed structure with legal metadata; requires professional completion.',
    mayBeUsedAs: 'Learning and chamber drafting scaffold only.',
  },
  {
    id: 'catalogue',
    label: 'Tier 3 — Catalogue entry',
    description: 'Document-type discovery only; no full pleading body.',
    mayBeUsedAs: 'Find the right document type and forum.',
  },
  {
    id: 'checklist',
    label: 'Tier 4 — Checklist',
    description: 'Filing / practice checklist rather than a pleading.',
    mayBeUsedAs: 'Registry and readiness checks.',
  },
]

export function tierLabel(id: DraftTier): string {
  return DRAFT_TIERS.find((t) => t.id === id)?.label ?? id
}
