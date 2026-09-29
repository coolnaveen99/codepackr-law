/** Scalable Indian legal-draft catalogue. Document types are separated from reviewed draft bodies. Third-party wording is not copied. */
import type { DraftField, DraftTemplate } from './draft-templates'

export type CatalogCategory = 'criminal' | 'civil' | 'notice' | 'affidavit' | 'family' | 'property' | 'commercial' | 'consumer' | 'employment' | 'company' | 'arbitration' | 'ip' | 'tax' | 'banking' | 'motor' | 'constitutional' | 'procedure' | 'rtI' | 'misc'

type Group = { category: CatalogCategory; area: string; statute: string; names: string[] }

const groups: Group[] = [
  { category: 'criminal', area: 'Bail & custody', statute: 'BNSS 2023', names: ['Anticipatory Bail Application','Regular Bail Application','Default Bail Application','Interim Bail Application','Transit Anticipatory Bail','Bail Bond','Surety Bond','Cancellation of Bail Application','Modification of Bail Conditions','Extension of Interim Bail','Personal Bond Application','Release of Seized Property Application'] },
  { category: 'criminal', area: 'Criminal procedure', statute: 'BNSS 2023', names: ['Complaint before Magistrate','Private Complaint','Protest Petition','Discharge Application','Compounding Application','Withdrawal of Complaint Application','Further Investigation Application','Certified Copy Application','Exemption from Personal Appearance','Recall of Witness Application','Summoning Witness Application','Production of Documents Application','Return of Documents Application','Defreezing Bank Account Application','Release of Vehicle Application'] },
  { category: 'criminal', area: 'Trial & post-trial', statute: 'BNS 2023 / BNSS 2023', names: ['Written Submissions — Prosecution','Written Submissions — Defence','Final Arguments Note','Cross-Examination Plan','Defence Witness Application','Acquittal Application','Suspension of Sentence Application','Probation Application','Set-off Custody Application','Appeal against Conviction','Criminal Revision Petition','Criminal Review Application','Parole Application','Furlough Application'] },
  { category: 'civil', area: 'Pleadings', statute: 'CPC 1908', names: ['Plaint for Recovery of Money','Plaint for Specific Performance','Plaint for Permanent Injunction','Plaint for Mandatory Injunction','Plaint for Declaration','Plaint for Partition','Plaint for Possession','Plaint for Cancellation of Instrument','Plaint for Accounts','Plaint for Damages','Written Statement','Counterclaim','Set-off Pleading','Replication','Rejoinder','Amendment Application','Impleadment Application','Transposition Application','Intervention Application','Third-Party Notice'] },
  { category: 'civil', area: 'Interlocutory applications', statute: 'CPC 1908', names: ['Temporary Injunction Application','Interim Relief Application','Condonation of Delay Application','Restoration Application','Stay Application','Commission Application','Local Inspection Application','Appointment of Commissioner Application','Attachment Before Judgment Application','Security for Costs Application','Discovery Application','Interrogatories Application','Production of Documents Application','Substituted Service Application','Extension of Time Application'] },
  { category: 'civil', area: 'Execution', statute: 'CPC 1908 — Order XXI', names: ['Execution Petition','Execution Stay Application','Objection to Execution','Garnishee Application','Attachment Application','Sale Proclamation Application','Objection to Auction Sale','Delivery of Possession Application','Arrest in Execution Application','Payment into Court Application','Adjustment of Decree Application','Satisfaction of Decree Memo'] },
  { category: 'notice', area: 'General notices', statute: 'General civil/commercial practice', names: ['General Legal Notice','Breach of Contract Notice','Payment Demand Notice','Cease and Desist Notice','Notice of Termination','Notice of Default','Notice of Rescission','Notice of Demand for Performance','Notice of Cancellation','Notice of Dispute','Pre-Litigation Notice','Notice for Return of Documents'] },
  { category: 'notice', area: 'Property notices', statute: 'Transfer of Property Act 1882 / local law', names: ['Rent Arrears Notice','Lease Termination Notice','Eviction Demand Notice','Licence Termination Notice','Notice to Vacate','Property Encroachment Notice','Co-owner Notice','Partition Demand Notice','Sale Agreement Breach Notice','Builder Delay Notice','Defective Construction Notice','Maintenance Demand Notice'] },
  { category: 'notice', area: 'Cheque & recovery', statute: 'Negotiable Instruments Act 1881 / contract law', names: ['Section 138 Cheque Notice','Loan Repayment Demand Notice','Outstanding Invoice Notice','Promissory Note Demand Notice','Guarantee Enforcement Notice','Security Enforcement Notice','Dishonoured Payment Notice','Statutory Demand Notice'] },
  { category: 'affidavit', area: 'Affidavits & declarations', statute: 'Applicable procedural law', names: ['General Affidavit','Supporting Affidavit','Verification Affidavit','Affidavit of Evidence','Affidavit of Service','Affidavit of Compliance','Affidavit of Undertaking','Affidavit of Disclosure','Affidavit of No Objection','Affidavit of Identity','Affidavit of Address','Affidavit of Lost Document','Affidavit of Name Change','Affidavit of Relationship','Affidavit of Financial Disclosure'] },
  { category: 'family', area: 'Matrimonial', statute: 'Hindu Marriage Act 1955 / applicable personal law', names: ['Divorce Petition — Mutual Consent','Divorce Petition — Contested','Restitution of Conjugal Rights Petition','Judicial Separation Petition','Nullity of Marriage Petition','Interim Maintenance Application','Permanent Alimony Application','Child Custody Application','Visitation Application','Domestic Violence Application','Maintenance Petition','Execution of Maintenance Order','Transfer Petition — Matrimonial','Consent Terms — Matrimonial','Settlement Memorandum — Matrimonial'] },
  { category: 'family', area: 'Family proceedings', statute: 'Applicable family law', names: ['Guardianship Petition','Adoption Consent Affidavit','Child Support Application','Modification of Custody Order','Enforcement of Visitation Order','Family Settlement Agreement','Marriage Settlement Agreement','Separation Agreement','Stridhan Recovery Notice','Return of Personal Articles Application'] },
  { category: 'property', area: 'Property transactions', statute: 'Transfer of Property Act 1882 / registration law', names: ['Agreement to Sell','Sale Deed','Gift Deed','Exchange Deed','Lease Deed','Leave and Licence Agreement','Mortgage Deed','Release Deed','Relinquishment Deed','Partition Deed','Settlement Deed','Power of Attorney — Property','Special Power of Attorney — Property','Joint Development Agreement','Construction Agreement','Property Management Agreement','Possession Letter','Sale Confirmation Letter','Rectification Deed','Cancellation Deed'] },
  { category: 'property', area: 'Land & tenancy', statute: 'Applicable State property/tenancy law', names: ['Tenancy Agreement','Rent Agreement','Commercial Lease','Residential Lease','Landlord Consent Letter','Tenant Undertaking','Rent Revision Notice','Security Deposit Receipt','Property Handover Memo','Property Due-Diligence Checklist','Title Search Request','Encumbrance Declaration','Boundary Declaration','Mutation Application','Patta/Revenue Representation'] },
  { category: 'commercial', area: 'Contracts', statute: 'Indian Contract Act 1872', names: ['NDA — Mutual','NDA — One Way','Service Agreement','Consulting Agreement','Master Services Agreement','Statement of Work','Vendor Agreement','Supply Agreement','Distribution Agreement','Agency Agreement','Commission Agreement','Franchise Agreement','Licensing Agreement','Sponsorship Agreement','Marketing Agreement','Maintenance Agreement','Professional Services Agreement','Settlement Agreement','Termination Agreement','Amendment Agreement'] },
  { category: 'commercial', area: 'Business documents', statute: 'Indian Contract Act 1872 / applicable law', names: ['Memorandum of Understanding','Letter of Intent','Term Sheet','Commercial Settlement','Indemnity Agreement','Guarantee Agreement','Escrow Agreement','Confidentiality Undertaking','Business Transfer Agreement','Asset Purchase Agreement','Share Purchase Agreement','Subscription Agreement','Founders Agreement','Co-founder Agreement','Consultant Retainer','Brokerage Agreement'] },
  { category: 'company', area: 'Corporate', statute: 'Companies Act 2013', names: ['Board Resolution — General','Board Resolution — Bank','Board Resolution — Borrowing','Board Resolution — Appointment','Board Resolution — Contract','Shareholder Resolution','Special Resolution','Director Consent','Director Resignation Letter','Shareholder Consent','Share Transfer Form','Share Certificate Request','Registered Office Change Notice','Object Clause Amendment Resolution','Authorised Signatory Resolution'] },
  { category: 'company', area: 'Corporate compliance', statute: 'Companies Act 2013 / MCA practice', names: ['Director Disclosure','MBP-1 Supporting Declaration','DIR-2 Consent Letter','NOC for Registered Office','Beneficial Ownership Declaration','Related Party Approval Note','Annual General Meeting Notice','Extraordinary General Meeting Notice','Minutes — Board Meeting','Minutes — General Meeting','Proxy Form','Attendance Sheet — Meeting','Statutory Register Checklist'] },
  { category: 'consumer', area: 'Consumer disputes', statute: 'Consumer Protection Act 2019', names: ['Consumer Complaint','Consumer Legal Notice','Consumer Appeal','Consumer Revision','Execution of Consumer Order','Interim Relief Application','Expert Evidence Application','Delay Condonation Application','Reply to Consumer Complaint','Consumer Settlement Terms'] },
  { category: 'employment', area: 'Employment', statute: 'Applicable employment law', names: ['Employment Agreement','Appointment Letter','Offer Letter','Consultancy Agreement','Probation Extension Letter','Salary Revision Letter','Promotion Letter','Warning Letter','Show Cause Notice — Employee','Domestic Enquiry Notice','Charge Sheet — Employee','Suspension Order','Termination Letter','Resignation Acceptance','Relieving Letter','Experience Certificate','Full and Final Settlement','Confidentiality Undertaking — Employee','IP Assignment — Employee','Non-Solicitation Agreement'] },
  { category: 'employment', area: 'Workplace disputes', statute: 'Applicable labour law', names: ['Labour Legal Notice','Wage Demand Notice','Unpaid Salary Claim','Gratuity Claim','Leave Encashment Claim','Employment Dispute Representation','Conciliation Application','Industrial Dispute Statement','Domestic Enquiry Reply','Employee Grievance Representation','Workplace Policy Acknowledgement'] },
  { category: 'banking', area: 'Debt recovery', statute: 'SARFAESI Act 2002 / RDB Act / contract law', names: ['Loan Recall Notice','Outstanding Loan Demand','SARFAESI Representation','Objection to SARFAESI Notice','DRT Original Application','DRT Securitisation Application','DRT Appeal','Debt Settlement Proposal','One-Time Settlement Letter','Bank Account Freeze Representation','Banking Ombudsman Complaint','Loan Restructuring Request','NPA Representation'] },
  { category: 'motor', area: 'Motor accident claims', statute: 'Motor Vehicles Act 1988', names: ['Motor Accident Claim Petition','Compensation Calculation Statement','Medical Expense Claim','Permanent Disability Claim','Death Compensation Claim','Loss of Dependency Statement','Vehicle Damage Claim','Interim Compensation Application','MACT Evidence Affidavit','MACT Written Submissions','MACT Appeal','MACT Settlement Terms'] },
  { category: 'arbitration', area: 'Arbitration', statute: 'Arbitration and Conciliation Act 1996', names: ['Notice Invoking Arbitration','Arbitration Statement of Claim','Statement of Defence','Counterclaim in Arbitration','Interim Relief under s.9','Arbitrator Appointment Application','Challenge to Arbitrator','Arbitration Evidence Affidavit','Arbitration Written Submissions','Award Challenge under s.34','Award Enforcement Application','Settlement Terms in Arbitration'] },
  { category: 'constitutional', area: 'Writ & constitutional', statute: 'Constitution of India', names: ['Writ Petition — Mandamus','Writ Petition — Certiorari','Writ Petition — Habeas Corpus','Writ Petition — Prohibition','Writ Petition — Quo Warranto','Public Interest Litigation — Skeleton','Article 226 Interim Application','Article 32 Petition','Contempt Petition','Review Petition — Constitutional','Special Leave Petition Skeleton','Transfer Petition — Supreme Court'] },
  { category: 'ip', area: 'Intellectual property', statute: 'Applicable IP statute', names: ['Trademark Opposition','Trademark Rectification','Trademark Infringement Notice','Copyright Infringement Notice','Copyright Assignment','Copyright Licence','Trademark Licence','Trademark Assignment','Patent Assignment','IP Due-Diligence Checklist','IP Cease and Desist','Domain Name Dispute Notice'] },
  { category: 'tax', area: 'Tax & GST', statute: 'GST Acts / Income-tax Act', names: ['GST Reply to Notice','GST Appeal','GST Rectification Application','GST Refund Application','GST Registration Representation','Income-tax Rectification Application','Income-tax Appeal Grounds','Tax Demand Stay Application','Tax Recovery Objection','TDS Correction Representation','Tax Settlement Representation','Professional Tax Representation'] },
  { category: 'rtI', area: 'RTI', statute: 'Right to Information Act 2005', names: ['RTI Application','RTI First Appeal','RTI Second Appeal','RTI Complaint','RTI Transfer Request','RTI Fee Refund Request','RTI Compliance Representation','Public Authority Reminder'] },
  { category: 'procedure', area: 'Appeals & revisions', statute: 'Applicable procedural law', names: ['Civil Appeal','First Appeal','Second Appeal','Criminal Appeal','Criminal Revision','Civil Revision','Review Petition','Restoration Application','Delay Condonation Application','Leave to Appeal Application','Stay Pending Appeal','Certified Copy Application','Recall Application','Modification Application','Clarification Application'] },
  { category: 'misc', area: 'Court & practice', statute: 'Applicable court rules', names: ['Vakalatnama Checklist','Index of Documents','List of Documents','Memo of Appearance','Memo of Address','Application for Certified Copy','Application for Urgent Listing','Application for Early Hearing','Application for Adjournment','Application for Exemption','Application for Recall of Order','Application for Substitution of Legal Representatives','Death Certificate Filing Memo','Compliance Memo','Undertaking to Court','Statement of Truth','Chronology of Events','List of Dates and Events','Synopsis','Written Submissions'] },
]

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const TEMPLATE_CATALOG = groups.flatMap((group) => group.names.map((name) => {
  const slug = slugify(name)
  return {
    id: 'catalog-' + group.category + '-' + slug,
    slug: 'catalog-' + slug,
    name,
    category: group.category,
    area: group.area,
    statute: group.statute,
    description: 'Structured educational scaffold for ' + name.toLowerCase() + ' practice.',
    status: 'catalog' as const,
    tags: [group.area, group.statute],
  }
}))

const GENERIC_FIELDS: DraftField[] = [
  { key: 'court', label: 'Court / authority', placeholder: 'Name of court / authority' },
  { key: 'parties', label: 'Parties / applicant details', multiline: true, required: true },
  { key: 'facts', label: 'Material facts', multiline: true, required: true },
  { key: 'grounds', label: 'Grounds / legal basis', multiline: true },
  { key: 'relief', label: 'Relief / request', multiline: true, required: true },
]

export function catalogToDraftTemplate(entry: (typeof TEMPLATE_CATALOG)[number]): DraftTemplate {
  return {
    id: entry.id,
    slug: entry.slug,
    name: entry.name,
    category: entry.category as DraftTemplate['category'],
    statute: entry.statute,
    description: entry.description,
    disclaimer: 'Educational catalogue scaffold only. Not a court-approved form. Verify the applicable statute, rules, jurisdiction and current practice before filing.',
    fields: GENERIC_FIELDS,
    lastReviewed: '2026-09-29',
    build: (values) => [
      'IN THE ' + (values.court || '________________ COURT / AUTHORITY'),
      '',
      entry.name.toUpperCase(),
      '',
      'PARTIES / APPLICANT\n' + (values.parties || '________________'),
      '',
      'MATERIAL FACTS\n' + (values.facts || '________________'),
      '',
      'GROUNDS / LEGAL BASIS\n' + (values.grounds || '________________'),
      '',
      'RELIEF / REQUEST\n' + (values.relief || '________________'),
      '',
      'Statutory reference: ' + entry.statute,
      'Educational scaffold only — verify current law and local court rules before use.',
    ].join('\n'),
  }
}

export const TEMPLATE_CATALOG_COUNT = TEMPLATE_CATALOG.length
