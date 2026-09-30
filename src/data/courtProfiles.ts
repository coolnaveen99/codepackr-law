/**
 * Phase 26 — Court / State / Forum configuration (small verified seed set).
 * Do not encode unsupported procedural claims.
 */

export type CourtLevel = 'supreme' | 'high' | 'district' | 'tribunal' | 'magistrate' | 'other'

export interface CourtProfile {
  id: string
  name: string
  state: string
  level: CourtLevel
  filingMethod: string
  officialUrl: string
  proceduralNotes: string
  source: string
  lastVerified: string
}

export interface StateProfile {
  id: string
  name: string
  code: string
  notes: string
  officialPortal?: string
  lastVerified: string
}

export const STATE_PROFILES: StateProfile[] = [
  {
    id: 'in-tn',
    name: 'Tamil Nadu',
    code: 'TN',
    notes: 'High Court at Madras; district and sessions courts across districts. Local rules and court fees vary.',
    officialPortal: 'https://www.hcmadras.tn.gov.in/',
    lastVerified: '2026-09-30',
  },
  {
    id: 'in-dl',
    name: 'Delhi',
    code: 'DL',
    notes: 'High Court of Delhi; district courts under Delhi District Courts.',
    officialPortal: 'https://delhihighcourt.nic.in/',
    lastVerified: '2026-09-30',
  },
  {
    id: 'in-mh',
    name: 'Maharashtra',
    code: 'MH',
    notes: 'Bombay High Court; multiple benches. State court-fee schedules apply.',
    officialPortal: 'https://bombayhighcourt.nic.in/',
    lastVerified: '2026-09-30',
  },
  {
    id: 'in-ka',
    name: 'Karnataka',
    code: 'KA',
    notes: 'High Court of Karnataka; district judiciary under state rules.',
    officialPortal: 'https://karnatakajudiciary.kar.nic.in/',
    lastVerified: '2026-09-30',
  },
]

export const COURT_PROFILES: CourtProfile[] = [
  {
    id: 'sci',
    name: 'Supreme Court of India',
    state: 'Union',
    level: 'supreme',
    filingMethod: 'e-filing / registry as per SC rules',
    officialUrl: 'https://www.sci.gov.in/',
    proceduralNotes: 'Constitutional and appellate jurisdiction. Verify current practice directions.',
    source: 'sci.gov.in',
    lastVerified: '2026-09-30',
  },
  {
    id: 'hc-madras',
    name: 'Madras High Court',
    state: 'Tamil Nadu',
    level: 'high',
    filingMethod: 'e-filing / physical as per HC rules',
    officialUrl: 'https://www.hcmadras.tn.gov.in/',
    proceduralNotes: 'Original, appellate and writ jurisdiction. Local rules govern filing.',
    source: 'hcmadras.tn.gov.in',
    lastVerified: '2026-09-30',
  },
  {
    id: 'hc-delhi',
    name: 'High Court of Delhi',
    state: 'Delhi',
    level: 'high',
    filingMethod: 'e-filing portal',
    officialUrl: 'https://delhihighcourt.nic.in/',
    proceduralNotes: 'Writ and appellate practice under Delhi High Court rules.',
    source: 'delhihighcourt.nic.in',
    lastVerified: '2026-09-30',
  },
  {
    id: 'ecourts-generic',
    name: 'eCourts district / subordinate (generic)',
    state: 'All states',
    level: 'district',
    filingMethod: 'eCourts services / local registry',
    officialUrl: 'https://services.ecourts.gov.in/',
    proceduralNotes: 'Case status and cause lists via eCourts. Filing still depends on local court rules.',
    source: 'services.ecourts.gov.in',
    lastVerified: '2026-09-30',
  },
]
