/**
 * Primary source directory — Phase 15.
 * Links users to authoritative sources; does not mirror copyrighted full text.
 */

export type SourceTier = 1 | 2 | 3 | 4 | 5
export type VerificationStatus = 'link-checked' | 'review-needed'

export interface PrimarySource {
  id: string
  title: string
  org: string
  tier: SourceTier
  tierLabel: string
  authorityType: string
  category: 'statute' | 'court' | 'ecourts' | 'reported' | 'commentary' | 'gazette'
  date: string
  relevantActSection: string
  description: string
  url: string
  verificationStatus: VerificationStatus
  notes?: string
}

export const PRIMARY_SOURCES: PrimarySource[] = [
  {
    id: 'india-code',
    title: 'India Code',
    org: 'Legislative Department',
    tier: 2,
    tierLabel: 'Official statute database',
    authorityType: 'Official statute database',
    category: 'statute',
    date: '2026-10-01',
    relevantActSection: 'Acts, sections, rules, regulations, notifications, orders and ordinances',
    description: 'Search and verify Union legislation and subordinate instruments on the official India Code service.',
    url: 'https://www.indiacode.nic.in/',
    verificationStatus: 'link-checked',
  },
  {
    id: 'sci',
    title: 'Supreme Court of India',
    org: 'Supreme Court of India',
    tier: 1,
    tierLabel: 'Official court source',
    authorityType: 'Official court source',
    category: 'court',
    date: '2026-10-01',
    relevantActSection: 'Judgments, orders, cause lists, notices and court information',
    description: 'Official Supreme Court portal for judgments, orders, cause lists and court information.',
    url: 'https://www.sci.gov.in/',
    verificationStatus: 'link-checked',
  },
  {
    id: 'ecourts',
    title: 'eCourts Services',
    org: 'eCommittee, Supreme Court of India',
    tier: 1,
    tierLabel: 'Official case-status / orders',
    authorityType: 'Official court-services source',
    category: 'ecourts',
    date: '2026-10-01',
    relevantActSection: 'Case status, case history, orders/judgments and cause lists',
    description: 'Official eCourts service for High Court and District Court case information and related services.',
    url: 'https://services.ecourts.gov.in/',
    verificationStatus: 'link-checked',
  },
  {
    id: 'hcservices',
    title: 'eCourts High Court Services',
    org: 'eCommittee',
    tier: 1,
    tierLabel: 'Official High Court services',
    authorityType: 'Official court-services source',
    category: 'ecourts',
    date: '2026-10-01',
    relevantActSection: 'High Court case status, orders/judgments and cause lists',
    description: 'Official High Court eCourts service with court- and bench-specific case and cause-list access.',
    url: 'https://hcservices.ecourts.gov.in/',
    verificationStatus: 'link-checked',
  },
  {
    id: 'egazette',
    title: 'eGazette of India',
    org: 'Government of India',
    tier: 1,
    tierLabel: 'Official gazette',
    authorityType: 'Official government source',
    category: 'gazette',
    date: '2026-10-01',
    relevantActSection: 'Gazette notifications and statutory instruments',
    description: 'Official Gazette of India portal for published central government notifications and instruments.',
    url: 'https://egazette.gov.in/',
    verificationStatus: 'link-checked',
  },
  {
    id: 'legislative',
    title: 'Legislative Department',
    org: 'Ministry of Law and Justice',
    tier: 1,
    tierLabel: 'Official government source',
    authorityType: 'Official government source',
    category: 'statute',
    date: '2026-10-01',
    relevantActSection: 'Bills, Acts and legislative information',
    description: 'Official Union Legislative Department portal for legislative information.',
    url: 'https://legislative.gov.in/',
    verificationStatus: 'link-checked',
  },
  {
    id: 'indiankanoon',
    title: 'Indian Kanoon',
    org: 'Indian Kanoon',
    tier: 4,
    tierLabel: 'Free full-text case search',
    authorityType: 'Free reported / secondary research database',
    category: 'reported',
    date: '2026-10-01',
    relevantActSection: 'Case-law search and reported judgments',
    description: 'Free full-text case-law research service. Cross-check critical holdings and source provenance against official court sources.',
    url: 'https://indiankanoon.org/',
    verificationStatus: 'link-checked',
    notes: 'Not an official court or government source.',
  },
  {
    id: 'scc',
    title: 'SCC Online',
    org: 'Eastern Book Company',
    tier: 4,
    tierLabel: 'Reliable reported database',
    authorityType: 'Reliable reported database',
    category: 'reported',
    date: '2026-10-01',
    relevantActSection: 'Reported case law and legal research',
    description: 'Commercial reported legal research database. Use alongside primary-source verification where available.',
    url: 'https://www.scconline.com/',
    verificationStatus: 'link-checked',
    notes: 'Subscription service; not an official court source.',
  },
  {
    id: 'manupatra',
    title: 'Manupatra',
    org: 'Manupatra',
    tier: 4,
    tierLabel: 'Reliable reported database',
    authorityType: 'Reliable reported database',
    category: 'reported',
    date: '2026-10-01',
    relevantActSection: 'Reported case law and legal research',
    description: 'Commercial legal research database. Use alongside primary-source verification where available.',
    url: 'https://www.manupatra.com/',
    verificationStatus: 'link-checked',
    notes: 'Subscription service; not an official court source.',
  },
]

export const SOURCE_TIER_EXPLAIN: Record<SourceTier, string> = {
  1: 'Official government / court source — prefer first',
  2: 'Official statute database',
  3: 'Official judgment / order host',
  4: 'Reliable reported database',
  5: 'Secondary commentary — not primary authority',
}
