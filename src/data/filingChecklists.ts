/** Educational filing baselines. Court/state additions and current local rules must be verified before filing. */

export type ChecklistStatus = 'todo' | 'done' | 'na'
export type ChecklistLayer = 'central' | 'court' | 'state'
export type FilingType = 'civil-suit'|'criminal-complaint'|'bail'|'appeal'|'revision'|'writ'|'arbitration'|'consumer-complaint'|'mact-claim'|'family-petition'|'execution-petition'|'cheque-dishonour'|'rti-appeal'

export interface ChecklistItem {
  id: string
  requirement: string
  why: string
  source: string
  mandatory: 'mandatory' | 'conditional'
  layer?: ChecklistLayer
  notes?: string
}

export interface FilingChecklist {
  id: FilingType
  title: string
  forum: string
  documentType: string
  sourceUrl?: string
  lastReviewed: string
  items: ChecklistItem[]
  disclaimer: string
}

const source = 'Central baseline; verify current court/state rules'
const common = (id:string, requirement:string, why:string, src=source, mandatory:'mandatory'|'conditional'='mandatory'):ChecklistItem => ({id,requirement,why,source:src,mandatory,layer:'central'})

export const FILING_CHECKLISTS: FilingChecklist[] = [
 {id:'civil-suit',title:'Civil suit / plaint',forum:'Civil Court',documentType:'Plaint',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Central educational baseline. Court fees, registry practice, e-filing requirements and local rules vary; verify them before filing.',items:[
  common('cause-title','Cause title, parties and jurisdiction facts','Identify parties and competent forum','CPC Order VII r.1'),
  common('cause-action','Material facts and cause of action','Pleading must disclose the cause of action','CPC Order VII'),
  common('valuation','Relief valuation and court-fee basis','Registry/fee compliance','Applicable Court Fees law','conditional'),
  common('documents','List and relied documents','Support pleaded facts and disclosure','CPC + local rules'),
  common('authority','Vakalatnama / authority to act','Record representation','Local court practice','conditional'),
  common('verification','Verification / affidavit where required','Authentication','CPC Order VI + local rules','conditional'),
  common('limitation','Limitation review recorded','Avoid time-barred filing','Limitation Act 1963'),
  common('efiling','PDF, naming, pagination and e-sign checks if e-filed','Portal acceptance requirements','Official e-Filing workflow','conditional')
 ]},
 {id:'criminal-complaint',title:'Criminal complaint',forum:'Competent criminal court',documentType:'Complaint',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Verify cognizance, territorial jurisdiction, limitation and current BNSS procedure for the specific offence.',items:[
  common('identity','Complainant and accused particulars','Identify parties','BNSS / local practice'),
  common('facts','Facts constituting alleged offence','Establish pleaded ingredients','Applicable penal law'),
  common('jurisdiction','Territorial and subject-matter jurisdiction','Forum competence','BNSS / local rules'),
  common('documents','Supporting documents and witness list','Support allegations','Local practice','conditional'),
  common('verification','Verification / affidavit if required','Procedural compliance','Local rules','conditional'),
  common('limitation','Limitation/cognizance check where applicable','Timeliness','Applicable statute','conditional')
 ]},
 {id:'bail',title:'Bail application',forum:'Competent criminal court',documentType:'Bail application',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Verify the correct BNSS provision, custody stage, court competence and any local filing requirements.',items:[
  common('forum','Correct court and applicable bail provision','Forum competence','BNSS'),
  common('case','FIR/case number, police station and sections','Identify proceeding','Case record'),
  common('custody','Arrest/custody dates and present custody status','Liberty timeline','Case record'),
  common('grounds','Bail grounds and proposed conditions','Substantiate request','Applicable law/case record'),
  common('annexures','FIR, orders and supporting annexures as required','Support application','Local practice','conditional'),
  common('undertakings','Appearance/cooperation/bond details where required','Address conditions','Local practice','conditional')
 ]},
 {id:'appeal',title:'Appeal',forum:'Competent appellate court',documentType:'Memorandum of appeal',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Appeal routes, limitation, certified-copy requirements, court fees and local rules depend on the order and forum.',items:[
  common('memorandum','Memorandum with precise grounds','Define challenge','Applicable procedural law'),
  common('impugned','Impugned judgment/order/decree','Identify challenged decision','Applicable procedural law'),
  common('limitation','Limitation computation and exclusion review','Timely filing','Limitation Act s.12 where applicable'),
  common('fee','Applicable court fee','Registry compliance','Applicable Court Fees law','conditional'),
  common('stay','Stay/interim application if required','Protect against interim consequences','Applicable procedural law','conditional'),
  common('annexures','Required paper-book/annexures','Complete record','Local appellate rules','conditional')
 ]},
 {id:'revision',title:'Revision',forum:'Competent revisional court',documentType:'Revision petition',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Revision jurisdiction is statute- and forum-specific. Verify maintainability before filing.',items:[
  common('jurisdiction','Identify statutory revisional power','Establish jurisdiction','Applicable procedural/statutory law'),
  common('impugned','Impugned order and material record','Identify challenge','Case record'),
  common('grounds','Revision-specific grounds','Limit challenge to available jurisdiction','Applicable statute/case law'),
  common('limitation','Limitation check','Timeliness','Applicable limitation regime','conditional'),
  common('certified','Certified/true copies where required','Record compliance','Local rules','conditional')
 ]},
 {id:'writ',title:'Writ petition',forum:'High Court / Supreme Court as applicable',documentType:'Writ petition',lastReviewed:'2026-10-01',sourceUrl:'https://www.sci.gov.in/',disclaimer:'High Court and Supreme Court rules differ. Verify roster, court rules, alternative-remedy issues and filing requirements.',items:[
  common('article','Correct constitutional jurisdiction and relief','Forum competence','Constitution Arts.32/226'),
  common('respondents','Necessary respondents correctly arrayed','Effective relief','Local practice'),
  common('facts','Material facts and chronology','Enable adjudication','Pleading rules'),
  common('grounds','Constitutional/statutory grounds and alternative-remedy position','Maintainability','Applicable law','conditional'),
  common('annexures','Affidavit, annexures and pagination','Registry compliance','Court rules','conditional'),
  common('urgency','Interim relief/urgency application if sought','Protect position pending hearing','Court rules','conditional')
 ]},
 {id:'arbitration',title:'Arbitration filing / petition',forum:'Competent court / arbitral forum',documentType:'Arbitration application/petition',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Arbitration applications are provision-specific. Verify seat, agreement, limitation and court jurisdiction.',items:[
  common('agreement','Arbitration agreement','Establish arbitration basis','Arbitration and Conciliation Act 1996'),
  common('dispute','Dispute and relief identified','Define controversy','Agreement + applicable law'),
  common('seat','Seat/place and competent forum checked','Jurisdiction','Agreement + case law','conditional'),
  common('limitation','Limitation review','Timeliness','Limitation Act + arbitration law','conditional'),
  common('documents','Agreement, correspondence and relied records','Support application','Practice','conditional')
 ]},
 {id:'consumer-complaint',title:'Consumer complaint',forum:'Competent Consumer Commission',documentType:'Consumer complaint',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Check current pecuniary, territorial and limitation rules and applicable Commission practice.',items:[
  common('jurisdiction','Pecuniary and territorial jurisdiction','Forum competence','Consumer Protection Act 2019 + rules'),
  common('consumer','Consumer relationship and transaction facts','Establish maintainability','CPA 2019'),
  common('deficiency','Deficiency/unfair practice facts and evidence','Substantiate complaint','CPA 2019'),
  common('relief','Relief and compensation basis','Define remedy','CPA 2019'),
  common('limitation','Limitation check','Timeliness','CPA 2019 s.69','conditional')
 ]},
 {id:'mact-claim',title:'MACT claim',forum:'Motor Accident Claims Tribunal',documentType:'Claim petition',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Verify the applicable Motor Vehicles Act provision, tribunal jurisdiction, insurer details and local forms.',items:[
  common('accident','Accident, date, place and vehicle details','Identify occurrence','Motor Vehicles Act + record'),
  common('parties','Claimant, owner, driver and insurer particulars','Necessary parties','Applicable MV law'),
  common('injury','Injury/death and medical/death records','Substantiate loss','Medical records','conditional'),
  common('income','Income/occupation and dependency evidence','Compensation assessment','Evidence','conditional'),
  common('vehicle','Insurance/registration/permit details where relevant','Liability assessment','Vehicle records','conditional'),
  common('relief','Compensation heads and calculation basis','Define claim','Applicable MV law','conditional')
 ]},
 {id:'family-petition',title:'Family petition',forum:'Competent Family Court / civil court',documentType:'Family petition',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Personal-law, jurisdiction, court-fee and local Family Court requirements vary. Verify the applicable regime.',items:[
  common('relationship','Marriage/family relationship particulars','Establish jurisdiction and relief','Applicable personal/procedural law'),
  common('jurisdiction','Residence/marriage/cause-of-action jurisdiction','Forum competence','Applicable statute/local rules'),
  common('relief','Specific relief sought','Define remedy','Applicable personal law'),
  common('documents','Marriage, identity and supporting documents','Substantiate facts','Local practice','conditional'),
  common('affidavit','Affidavit/verification requirements','Procedural compliance','Court rules','conditional')
 ]},
 {id:'execution-petition',title:'Execution petition',forum:'Executing court',documentType:'Execution petition',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Identify the decree/order and execution route precisely; verify limitation and local execution rules.',items:[
  common('decree','Certified/appropriate decree or order details','Identify executable decision','CPC'),
  common('relief','Mode and relief of execution specified','Enable execution','CPC Order XXI'),
  common('limitation','Execution limitation review','Timeliness','Limitation Act Art.136','conditional'),
  common('property','Property/asset details if relevant','Identify execution subject','Case record','conditional'),
  common('notice','Notice/service requirements checked','Procedural fairness','CPC Order XXI + local rules','conditional')
 ]},
 {id:'cheque-dishonour',title:'Cheque dishonour complaint — NI Act s.138',forum:'Competent Magistrate',documentType:'Complaint',lastReviewed:'2026-10-01',sourceUrl:'https://filing.ecourts.gov.in/',disclaimer:'Statutory notice and complaint timelines are strict. Verify presentation, return memo, notice and cause-of-action dates.',items:[
  common('cheque','Cheque and bank return memo','Statutory ingredients','NI Act s.138'),
  common('notice','Demand notice within statutory period','Condition precedent','NI Act s.138'),
  common('service','Proof/record of notice service','Cause of action','NI Act s.138','conditional'),
  common('limitation','Complaint limitation from cause of action','Cognizance','NI Act s.142'),
  common('jurisdiction','Territorial jurisdiction checked','Forum competence','NI Act s.142(2)','conditional'),
  common('documents','Account, cheque, return memo and correspondence','Support complaint','Record','conditional')
 ]},
 {id:'rti-appeal',title:'RTI appeal',forum:'First/Second Appellate Authority as applicable',documentType:'RTI appeal',lastReviewed:'2026-10-01',sourceUrl:'https://rtionline.gov.in/',disclaimer:'Identify whether the matter is a first appeal or second appeal and verify the applicable public authority procedure.',items:[
  common('original','Original RTI request and acknowledgement','Establish request','RTI Act 2005'),
  common('response','PIO response or deemed refusal facts','Identify grievance','RTI Act 2005'),
  common('grounds','Specific grounds for appeal','Enable review','RTI Act 2005'),
  common('limitation','Appeal timeline check','Timeliness','RTI Act 2005 ss.19','conditional'),
  common('annexures','Request, reply and supporting correspondence','Complete record','Practice','conditional')
 ]}
]

export const CHECKLIST_LAYERS: ChecklistLayer[] = ['central','court','state']
