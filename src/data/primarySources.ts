/**
 * Primary source directory — Phase 15.
 * Links users to authoritative sources; does not mirror copyrighted full text.
 */

export type SourceTier = 1 | 2 | 3 | 4 | 5

export interface PrimarySource {
  id: string
  title: string
  org: string
  tier: SourceTier
  tierLabel: string
  category: 'statute' | 'court' | 'ecourts' | 'reported' | 'commentary' | 'gazette'
  description: string
  url: string
  notes?: string
}

export const PRIMARY_SOURCES: PrimarySource[] = [
  {
    id: 'india-code',
    title: 'India Code',
    org: 'Legislative Department',
    tier: 1,
    tierLabel: 'Official statute database',
    category: 'statute',
    description: 'Search Acts, sections, rules, regulations, notifications, orders and ordinances.',
    url: 'https://www.indiacode.nic.in/',
  },
  {
    id: 'sci',
    title: 'Supreme Court of India',
    org: 'Supreme Court of India',
    tier: 1,
    tierLabel: 'Official court source',
    category: 'court',
    description: 'Judgments, cause lists, notices and official court information.',
    url: 'https://www.sci.gov.in/',
  },
  {
    id: 'ecourts',
    title: 'eCourts Services',
    org: 'eCommittee, Supreme Court of India',
    tier: 1,
    tierLabel: 'Official case-status / orders',
    category: 'ecourts',
    description: 'Case status, history, orders/judgments, cause lists (party, case number, advocate, FIR).',
    url: 'https://services.ecourts.gov.in/',
  },
  {
    id: 'hcservices',
    title: 'eCourts High Court Services',
    org: 'eCommittee',
    tier: 1,
    tierLabel: 'Official High Court services',
    category: 'ecourts',
    description: 'High Court case status, orders and related services.',
    url: 'https://hcservices.ecourts.gov.in/',
  },
  {
    id: 'egazette',
    title: 'eGazette of India',
    org: 'Government of India',
    tier: 1,
    tierLabel: 'Official gazette',
    category: 'gazette',
    description: 'Central government notifications, commencements and statutory instruments.',
    url: 'https://egazette.gov.in/',
  },
  {
    id: 'legislative',
    title: 'Legislative Department',
    org: 'Ministry of Law and Justice',
    tier: 1,
    tierLabel: 'Official government source',
    category: 'statute',
    description: 'Bills, Acts and legislative information from the Union Ministry of Law and Justice.',
    url: 'https://legislative.gov.in/',
  },
  {
    id: 'indiankanoon',
    title: 'Indian Kanoon',
    org: 'Indian Kanoon',
    tier: 4,
    tierLabel: 'Free full-text case search',
    category: 'reported',
    description: 'Free full-text search across many Indian judgments. Cross-check critical holdings against official court sites.',
    url: 'https://indiankanoon.org/',
  },
  {
    id: 'scc',
    title: 'SCC Online',
    org: 'Eastern Book Company',
    tier: 4,
    tierLabel: 'Reliable reported database',
    category: 'reported',
    description: 'Curated case law research platform (subscription). Prefer for verified citations where available.',
    url: 'https://www.scconline.com/',
  },
  {
    id: 'manupatra',
    title: 'Manupatra',
    org: 'Manupatra',
    tier: 4,
    tierLabel: 'Reliable reported database',
    category: 'reported',
    description: 'Commercial legal research database (subscription).',
    url: 'https://www.manupatra.com/',
  },
]

export const SOURCE_TIER_EXPLAIN: Record<SourceTier, string> = {
  1: 'Official government / court source — prefer first',
  2: 'Official statute database',
  3: 'Official judgment / order host',
  4: 'Reliable reported database',
  5: 'Secondary commentary — not primary authority',
}
