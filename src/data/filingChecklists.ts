/**
 * Educational filing checklists — central baseline only.
 * Court/state practice may require additional steps. Always verify locally.
 */

export type ChecklistStatus = 'todo' | 'done' | 'na'

export interface ChecklistItem {
  id: string
  requirement: string
  why: string
  source: string
  mandatory: 'mandatory' | 'conditional'
}

export interface FilingChecklist {
  id: string
  title: string
  forum: string
  items: ChecklistItem[]
  disclaimer: string
}

export const FILING_CHECKLISTS: FilingChecklist[] = [
  {
    id: 'civil-suit',
    title: 'Civil suit (plaint) — baseline',
    forum: 'Civil Court (CPC)',
    disclaimer: 'Central educational baseline. Registry practice, court fees, and local rules vary.',
    items: [
      { id: 'c1', requirement: 'Plaint with cause title, parties, jurisdiction facts', why: 'Order VII CPC', source: 'CPC Order VII', mandatory: 'mandatory' },
      { id: 'c2', requirement: 'Facts constituting cause of action and when it arose', why: 'Limitation & maintainability', source: 'Order VII r. 1', mandatory: 'mandatory' },
      { id: 'c3', requirement: 'Valuation and court-fee calculation', why: 'Court Fees Act / state schedule', source: 'Court Fees (state)', mandatory: 'mandatory' },
      { id: 'c4', requirement: 'List of documents / relied documents', why: 'Disclosure', source: 'Order VII / local practice', mandatory: 'mandatory' },
      { id: 'c5', requirement: 'Vakalatnama / memo of appearance', why: 'Authority to act', source: 'Practice', mandatory: 'mandatory' },
      { id: 'c6', requirement: 'Verification and affidavit where required', why: 'Order VI / local rules', source: 'CPC + local', mandatory: 'conditional' },
      { id: 'c7', requirement: 'Limitation check recorded', why: 'Avoid time-barred claim', source: 'Limitation Act', mandatory: 'mandatory' },
    ],
  },
  {
    id: 'bail',
    title: 'Regular bail application — baseline (BNSS)',
    forum: 'Criminal Court (BNSS)',
    disclaimer: 'Use correct BNSS provision (e.g. 480/483 patterns). Verify custody status and FIR details.',
    items: [
      { id: 'b1', requirement: 'Correct court and provision cited', why: 'Forum competence', source: 'BNSS', mandatory: 'mandatory' },
      { id: 'b2', requirement: 'FIR / case number, sections, police station', why: 'Identity of case', source: 'Practice', mandatory: 'mandatory' },
      { id: 'b3', requirement: 'Custody particulars and date of arrest', why: 'Liberty timeline', source: 'Practice', mandatory: 'mandatory' },
      { id: 'b4', requirement: 'Grounds: role, antecedents, flight risk, tampering', why: 'Bail considerations', source: 'Case law practice', mandatory: 'mandatory' },
      { id: 'b5', requirement: 'Undertakings (appear, cooperate, bonds)', why: 'Conditions', source: 'Practice', mandatory: 'mandatory' },
      { id: 'b6', requirement: 'Annexures: FIR copy, medical, identity proofs as needed', why: 'Support', source: 'Practice', mandatory: 'conditional' },
    ],
  },
  {
    id: 'appeal',
    title: 'Civil appeal — baseline',
    forum: 'Appellate Court',
    disclaimer: 'Limitation and certified copies are frequent failure points.',
    items: [
      { id: 'a1', requirement: 'Memorandum of appeal with grounds', why: 'Order XLI', source: 'CPC', mandatory: 'mandatory' },
      { id: 'a2', requirement: 'Certified copy of decree/order appealed', why: 'Maintainability', source: 'Practice + Limitation s. 12', mandatory: 'mandatory' },
      { id: 'a3', requirement: 'Limitation computation (exclude copy time if applicable)', why: 'Time bar', source: 'Limitation Act', mandatory: 'mandatory' },
      { id: 'a4', requirement: 'Court fee on appeal', why: 'Registry', source: 'Court Fees', mandatory: 'mandatory' },
      { id: 'a5', requirement: 'Stay application if interim protection sought', why: 'Execution risk', source: 'Order XLI', mandatory: 'conditional' },
    ],
  },
  {
    id: 'writ',
    title: 'Writ petition — baseline',
    forum: 'High Court / Supreme Court',
    disclaimer: 'Each High Court has detailed rules. This is only a structural checklist.',
    items: [
      { id: 'w1', requirement: 'Correct writ (Art. 226 / 32) and relief', why: 'Constitutional forum', source: 'Constitution', mandatory: 'mandatory' },
      { id: 'w2', requirement: 'Parties: State / authority respondents properly arrayed', why: 'Effective relief', source: 'Practice', mandatory: 'mandatory' },
      { id: 'w3', requirement: 'Facts, grounds, and alternative remedy explanation', why: 'Maintainability', source: 'Practice', mandatory: 'mandatory' },
      { id: 'w4', requirement: 'Delay / laches explanation if any', why: 'Discretionary bar', source: 'Practice', mandatory: 'conditional' },
      { id: 'w5', requirement: 'Affidavit and annexures paginated', why: 'Rules of court', source: 'HC rules', mandatory: 'mandatory' },
    ],
  },
  {
    id: 'ni-138',
    title: 'Cheque dishonour complaint (NI Act s. 138) — baseline',
    forum: 'Magistrate',
    disclaimer: 'Statutory notice timelines are strict. Verify presentation, return memo, and notice dates.',
    items: [
      { id: 'n1', requirement: 'Cheque, return memo, and account particulars', why: 'Statutory ingredients', source: 'NI Act s. 138', mandatory: 'mandatory' },
      { id: 'n2', requirement: 'Demand notice within statutory time', why: 'Condition precedent', source: 'NI Act', mandatory: 'mandatory' },
      { id: 'n3', requirement: 'Proof of service of notice', why: 'Cause of action', source: 'NI Act', mandatory: 'mandatory' },
      { id: 'n4', requirement: 'Complaint within limitation from cause of action', why: 'Cognizance', source: 'NI Act', mandatory: 'mandatory' },
      { id: 'n5', requirement: 'List of witnesses and documents', why: 'Trial readiness', source: 'Practice', mandatory: 'mandatory' },
    ],
  },
  {
    id: 'consumer',
    title: 'Consumer complaint — baseline',
    forum: 'Consumer Commission',
    disclaimer: 'Pecuniary and territorial jurisdiction under the Consumer Protection Act must be checked.',
    items: [
      { id: 'co1', requirement: 'Correct commission (pecuniary / territorial)', why: 'Jurisdiction', source: 'CPA 2019', mandatory: 'mandatory' },
      { id: 'co2', requirement: 'Consumer relationship and deficiency facts', why: 'Maintainability', source: 'CPA', mandatory: 'mandatory' },
      { id: 'co3', requirement: 'Relief claimed with valuation', why: 'Fee / forum', source: 'CPA rules', mandatory: 'mandatory' },
      { id: 'co4', requirement: 'Limitation from cause of action', why: 'Time bar', source: 'CPA', mandatory: 'mandatory' },
    ],
  },
]
