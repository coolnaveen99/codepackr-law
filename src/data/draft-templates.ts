/**
 * Educational draft skeletons for Indian chamber practice.
 * BNSS/CPC-aligned structure only — not court-approved forms.
 * Reviewed: 2026-09-29.
 */

export type DraftField = {
  key: string
  label: string
  placeholder?: string
  multiline?: boolean
  required?: boolean
}

export type DraftTier = 'verified' | 'scaffold'

export type DraftTemplate = {
  id: string
  slug: string
  name: string
  category: 'criminal' | 'civil' | 'notice' | 'affidavit' | 'checklist'
  statute: string
  description: string
  disclaimer: string
  fields: DraftField[]
  build: (v: Record<string, string>) => string
  annexures?: string[]
  lastReviewed?: string
  tier?: DraftTier
  courtForum?: string
  stateDependency?: string
  limitationConsiderations?: string
  relevantSections?: string[]
}

const DISCLAIMER =
  'Educational scaffold only. Not legal advice. Verify applicable statute, amendments, procedural rules, and local court practice before filing.'

function v(vals: Record<string, string>, key: string, fallback = '_______________') {
  const t = (vals[key] || '').trim()
  return t || fallback
}

export const DRAFT_TEMPLATES: DraftTemplate[] = [
  {
    id: 'bail-regular-sessions',
    slug: 'regular-bail-sessions',
    name: 'Regular Bail — Sessions Court (S. 483 BNSS)',
    category: 'criminal',
    statute: 'BNSS s. 483 (cf. CrPC s. 439 for transitional matters)',
    description: 'Skeleton for regular bail after arrest before Court of Session / High Court. Uses S. 483 BNSS — not S. 480.',
    disclaimer: DISCLAIMER,
    lastReviewed: '2026-09-29',
    tier: 'verified',
    fields: [
      { key: 'court', label: 'Court name', placeholder: 'District & Sessions Judge at ___', required: true },
      { key: 'place', label: 'Place', required: true },
      { key: 'applicant', label: 'Applicant full name', required: true },
      { key: 'address', label: 'Residential address', multiline: true, required: true },
      { key: 'state', label: 'State (respondent)', required: true },
      { key: 'fir', label: 'FIR / Crime No. & year', required: true },
      { key: 'ps', label: 'Police Station', required: true },
      { key: 'sections', label: 'Offence sections (BNS / special law)', required: true },
      { key: 'arrestDate', label: 'Date of arrest', required: true },
      { key: 'custodySince', label: 'In judicial custody since', required: true },
      { key: 'prosecutionCase', label: 'Brief prosecution case', multiline: true },
      { key: 'investigationStage', label: 'Investigation / chargesheet stage' },
      { key: 'antecedents', label: 'Criminal antecedents', placeholder: 'Nil' },
      { key: 'priorBail', label: 'Prior bail applications', placeholder: 'None' },
      { key: 'grounds', label: 'Additional grounds', multiline: true },
    ],
    annexures: ['Copy of FIR', 'Arrest memo', 'Remand order(s)', 'Charge-sheet extracts (if filed)', 'Supporting affidavit', 'Vakalatnama', 'Parity orders (if claimed)', 'Index of documents'],
    build: (x) => `IN THE COURT OF ${v(x, 'court')}\nAT ${v(x, 'place')}\n\nBail Application No. ______ of 20__\n\n${v(x, 'applicant')}\nR/o ${v(x, 'address')}\n…Applicant / Accused\n\nVersus\n\n${v(x, 'state')}\n…Respondent\n\nFIR / Crime No.: ${v(x, 'fir')}\nPolice Station: ${v(x, 'ps')}\nOffences alleged: ${v(x, 'sections')}\nIn custody since: ${v(x, 'custodySince')}\n\nAPPLICATION FOR GRANT OF REGULAR BAIL UNDER SECTION 483 OF THE\nBHARATIYA NAGARIK SURAKSHA SANHITA, 2023\n\nMost respectfully submitted:\n\n1. That the Applicant is an accused in FIR/Crime No. ${v(x, 'fir')} registered at Police Station ${v(x, 'ps')}.\n2. That the Applicant was arrested on ${v(x, 'arrestDate')} and has remained in judicial custody since ${v(x, 'custodySince')}.\n3. That the prosecution case, briefly stated, is that ${v(x, 'prosecutionCase', '[set out briefly]')}.\n4. That the investigation is presently at the stage of ${v(x, 'investigationStage', '[state stage]')}.\n5. That the Applicant has roots in society and undertakes to appear as directed and not to tamper with evidence.\n6. That the Applicant's criminal antecedents are: ${v(x, 'antecedents', 'Nil')}.\n7. That prior applications for the same relief: ${v(x, 'priorBail', 'None')}.\n8. ${v(x, 'grounds', 'That the Applicant is entitled to consideration for bail on the facts and circumstances of the case.')}\n\nPRAYER\n\nRelease the Applicant on regular bail in FIR/Crime No. ${v(x, 'fir')} on such terms as this Hon'ble Court may deem fit.\n\nPlace: ${v(x, 'place')}\nDate: ________\n\nApplicant through Counsel\n\n— Educational scaffold only. Not legal advice. —\n`,
  },
  {
    id: 'bail-regular-magistrate',
    slug: 'regular-bail-magistrate',
    name: 'Regular Bail — Magistrate (S. 480 BNSS)',
    category: 'criminal',
    statute: 'BNSS s. 480 (cf. CrPC s. 437)',
    description: 'Skeleton for regular bail in non-bailable offences before the Magistrate under S. 480 BNSS.',
    disclaimer: DISCLAIMER,
    lastReviewed: '2026-09-29',
    tier: 'verified',
    fields: [
      { key: 'court', label: 'Court name', required: true },
      { key: 'place', label: 'Place', required: true },
      { key: 'applicant', label: 'Applicant full name', required: true },
      { key: 'address', label: 'Address', multiline: true, required: true },
      { key: 'state', label: 'State', required: true },
      { key: 'fir', label: 'FIR No. & year', required: true },
      { key: 'ps', label: 'Police Station', required: true },
      { key: 'sections', label: 'Sections', required: true },
      { key: 'arrestDate', label: 'Arrest date', required: true },
      { key: 'custodySince', label: 'Custody since', required: true },
      { key: 'grounds', label: 'Grounds', multiline: true },
      { key: 'antecedents', label: 'Antecedents', placeholder: 'Nil' },
    ],
    annexures: ['FIR copy', 'Arrest memo', 'Remand order(s)', 'Affidavit', 'Vakalatnama', 'Index'],
    build: (x) => `IN THE COURT OF ${v(x, 'court')}\nAT ${v(x, 'place')}\n\nBail Application No. ______ of 20__\n\n${v(x, 'applicant')}\nR/o ${v(x, 'address')}\n…Applicant\n\nVersus\n\n${v(x, 'state')}\n…Respondent\n\nFIR No.: ${v(x, 'fir')} | P.S.: ${v(x, 'ps')}\nSections: ${v(x, 'sections')}\n\nAPPLICATION UNDER SECTION 480 BNSS, 2023 FOR GRANT OF REGULAR BAIL\n\n1. Arrested on ${v(x, 'arrestDate')}; in custody since ${v(x, 'custodySince')}.\n2. Roots in society; undertakes to cooperate.\n3. Antecedents: ${v(x, 'antecedents', 'Nil')}.\n4. ${v(x, 'grounds', 'Entitled to bail on suitable conditions.')}\n\nPRAYER: Grant regular bail.\n\nDate: ________\nApplicant through Counsel\n`,
  },
  {
    id: 'legal-notice-general',
    slug: 'legal-notice-general',
    name: 'Legal Notice (General Civil / Contract)',
    category: 'notice',
    statute: 'Pre-litigation practice',
    description: 'General formal legal notice structure.',
    disclaimer: DISCLAIMER,
    lastReviewed: '2026-09-29',
    tier: 'verified',
    fields: [
      { key: 'advocate', label: 'Advocate name', required: true },
      { key: 'client', label: 'Client / sender', required: true },
      { key: 'addressee', label: 'Addressee', required: true },
      { key: 'addresseeAddress', label: 'Addressee address', multiline: true, required: true },
      { key: 'subject', label: 'Subject', required: true },
      { key: 'facts', label: 'Material facts', multiline: true, required: true },
      { key: 'demand', label: 'Demand', multiline: true, required: true },
      { key: 'days', label: 'Days to comply', placeholder: '15' },
    ],
    build: (x) => `LEGAL NOTICE\n\nFrom: ${v(x, 'advocate')}, Advocate\nUnder instructions from: ${v(x, 'client')}\n\nTo: ${v(x, 'addressee')}\n${v(x, 'addresseeAddress')}\n\nSubject: ${v(x, 'subject')}\n\n1. ${v(x, 'facts')}\n2. You are called upon to ${v(x, 'demand')} within ${v(x, 'days', '15')} days of receipt of this notice.\n3. Failing which my client shall initiate appropriate proceedings at your risk as to costs.\n\n${v(x, 'advocate')}\nAdvocate\n`,
  },
  {
    id: 'ni-138-notice',
    slug: 'ni-act-138-notice',
    name: 'Cheque Bounce Notice (S. 138 NI Act)',
    category: 'notice',
    statute: 'Negotiable Instruments Act, 1881 — s. 138',
    description: 'Demand notice structure before a s. 138 complaint.',
    disclaimer: DISCLAIMER,
    lastReviewed: '2026-09-29',
    tier: 'verified',
    fields: [
      { key: 'advocate', label: 'Advocate name', required: true },
      { key: 'client', label: 'Payee / complainant', required: true },
      { key: 'drawer', label: 'Drawer', required: true },
      { key: 'drawerAddress', label: 'Drawer address', multiline: true, required: true },
      { key: 'chequeNo', label: 'Cheque number', required: true },
      { key: 'amount', label: 'Amount (₹)', required: true },
      { key: 'chequeDate', label: 'Cheque date', required: true },
      { key: 'returnDate', label: 'Return date', required: true },
      { key: 'returnReason', label: 'Return reason', placeholder: 'Insufficient funds' },
    ],
    build: (x) => `LEGAL NOTICE UNDER SECTION 138 NI ACT, 1881\n\nFrom: ${v(x, 'advocate')}, Advocate (for ${v(x, 'client')})\nTo: ${v(x, 'drawer')}\n${v(x, 'drawerAddress')}\n\n1. Cheque No. ${v(x, 'chequeNo')} dated ${v(x, 'chequeDate')} for ₹ ${v(x, 'amount')} was returned unpaid on ${v(x, 'returnDate')} for ${v(x, 'returnReason', 'Insufficient funds')}.\n2. Pay ₹ ${v(x, 'amount')} within 15 days of receipt of this notice, failing which proceedings under s. 138 NI Act shall be initiated.\n\n${v(x, 'advocate')}\nAdvocate\n`,
  },
  {
    id: 'affidavit-general',
    slug: 'affidavit-general',
    name: 'Supporting Affidavit (General)',
    category: 'affidavit',
    statute: 'O.6 R.15 CPC practice',
    description: 'Generic supporting affidavit skeleton.',
    disclaimer: DISCLAIMER,
    lastReviewed: '2026-09-29',
    tier: 'verified',
    fields: [
      { key: 'court', label: 'Court', required: true },
      { key: 'causeTitle', label: 'Cause title', multiline: true, required: true },
      { key: 'deponent', label: 'Deponent name', required: true },
      { key: 'address', label: 'Address', multiline: true, required: true },
      { key: 'paragraphs', label: 'Averments', multiline: true, required: true },
    ],
    build: (x) => `IN THE COURT OF ${v(x, 'court')}\n\n${v(x, 'causeTitle')}\n\nAFFIDAVIT\n\nI, ${v(x, 'deponent')}, resident of ${v(x, 'address')}, do hereby solemnly affirm:\n\n${v(x, 'paragraphs')}\n\nDeponent\n\nVerification: Contents true to my knowledge.\nDeponent\n`,
  },
  {
    id: 'plaint-skeleton',
    slug: 'plaint-skeleton',
    name: 'Plaint Skeleton (O.7 CPC)',
    category: 'civil',
    statute: 'Order VII Rule 1 CPC',
    description: 'Structural plaint heads under O.7 R.1.',
    disclaimer: DISCLAIMER,
    lastReviewed: '2026-09-29',
    tier: 'verified',
    fields: [
      { key: 'court', label: 'Court', required: true },
      { key: 'plaintiff', label: 'Plaintiff', multiline: true, required: true },
      { key: 'defendant', label: 'Defendant', multiline: true, required: true },
      { key: 'causeOfAction', label: 'Cause of action', multiline: true, required: true },
      { key: 'jurisdiction', label: 'Jurisdiction facts', multiline: true, required: true },
      { key: 'valuation', label: 'Valuation', required: true },
      { key: 'reliefs', label: 'Reliefs', multiline: true, required: true },
    ],
    annexures: ['Index', 'List of documents (O.7 R.14)', 'Annexures', 'Vakalatnama', 'Memo of address', 'Verification', 'Court-fee proof'],
    build: (x) => `IN THE COURT OF ${v(x, 'court')}\n\nCivil Suit No. ______ of 20__\n\n${v(x, 'plaintiff')}\n…Plaintiff\n\nVersus\n\n${v(x, 'defendant')}\n…Defendant\n\nPLAINT UNDER ORDER VII RULE 1 CPC\n\n1. Parties as in cause title.\n2. Cause of action: ${v(x, 'causeOfAction')}\n3. Jurisdiction: ${v(x, 'jurisdiction')}\n4. Valuation: ₹ ${v(x, 'valuation')}\n5. Reliefs: ${v(x, 'reliefs')}\n\nPlaintiff through Counsel\n`,
  },
]

export const CASE_FILE_CHECKLISTS = [
  {
    id: 'civil-suit-filing',
    name: 'Civil Suit Filing Bundle',
    items: [
      'Index with page numbers',
      'Plaint (signed & verified) — O.7 R.1',
      'Supporting / verification affidavit — O.6 R.15',
      'Memorandum of registered address — O.6 R.14-A',
      'Vakalatnama',
      'List of documents — O.7 R.14',
      'Annexures / exhibits',
      'Court-fee proof',
      'Process forms & extra copies',
      'Interim application (if any)',
      'Statement of Truth (commercial suits)',
    ],
  },
  {
    id: 'bail-filing',
    name: 'Bail Application Filing Bundle',
    items: [
      'Bail application with correct BNSS section (480 Magistrate / 483 Sessions-HC)',
      'FIR copy',
      'Arrest memo',
      'Remand order(s)',
      'Charge-sheet extracts (if material)',
      'Supporting affidavit',
      'Vakalatnama',
      'Index',
      'Copies for Public Prosecutor',
      'Parity orders (if claimed)',
      'Antecedents & prior bail disclosure',
    ],
  },
]

export function getTemplateBySlug(slug: string): DraftTemplate | undefined {
  return DRAFT_TEMPLATES.find((t) => t.slug === slug || t.id === slug)
}
