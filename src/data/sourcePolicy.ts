/**
 * Phase 31 — Copyright / data governance constants.
 * Prefer official and original material; never encode paid headnotes as product content.
 */

export type SourceTier =
  | 'official_government'
  | 'india_code'
  | 'court_portal'
  | 'tribunal_ministry'
  | 'public_licensed'
  | 'codepackr_original'
  | 'user_provided'
  | 'licensed_dataset'

/** Preferred origin order for educational and research features. */
export const PREFERRED_SOURCE_TIERS: SourceTier[] = [
  'official_government',
  'india_code',
  'court_portal',
  'tribunal_ministry',
  'public_licensed',
  'codepackr_original',
  'user_provided',
  'licensed_dataset',
]

export const SOURCE_TIER_LABEL: Record<SourceTier, string> = {
  official_government: 'Official government / court publication',
  india_code: 'India Code / official statute repository',
  court_portal: 'Supreme Court / High Court / eCourts published material',
  tribunal_ministry: 'Official tribunal or ministry publication',
  public_licensed: 'Public-domain or clearly licensed reusable material',
  codepackr_original: 'Original Codepackr educational explanation',
  user_provided: 'User-provided document (stays on device)',
  licensed_dataset: 'Properly licensed dataset (documented terms)',
}

/** Categories that must never be scraped or shipped as product content. */
export const PROHIBITED_CONTENT_CATEGORIES = [
  'proprietary_headnotes',
  'paid_database_annotations',
  'proprietary_case_summaries',
  'copyrighted_commercial_templates',
  'subscription_only_commentary',
] as const

export type ProhibitedContentCategory = (typeof PROHIBITED_CONTENT_CATEGORIES)[number]

export const PROHIBITED_LABEL: Record<ProhibitedContentCategory, string> = {
  proprietary_headnotes: 'Proprietary headnotes',
  paid_database_annotations: 'Paid database annotations',
  proprietary_case_summaries: 'Proprietary case summaries from subscription products',
  copyrighted_commercial_templates: 'Copyrighted commercial template wording',
  subscription_only_commentary: 'Subscription-only commentary',
}

/** Phase 32 — free-layer commitments (documentation constants for UI). */
export const FREE_LAYER_COMMITMENTS = [
  'Curriculum subjects and topic study surfaces remain free',
  'Educational bare-act tools and Sanhita mappers remain free',
  'Browser-local research, case-prep and draft tools remain free',
  'Privacy controls and on-device storage model remain free',
  'Basic legal safety / educational disclaimers are never paywalled',
] as const

export const MONETIZATION_RULES = {
  basicLayerFree: true,
  noPaywallOnSafetyInfo: true,
  noAggressiveAdsInSensitiveWorkflows: true,
  noOutcomePredictionSales: true,
} as const

export function isPreferredTierOrdered(): boolean {
  return PREFERRED_SOURCE_TIERS[0] === 'official_government' && PREFERRED_SOURCE_TIERS.includes('user_provided')
}
