export type CpcOrder = {
  id: string
  roman: string
  title: string
  cluster: string
  gist: string
  flags: string[]
}

export const CPC_ORDERS: CpcOrder[] = [
  { id: '1', roman: 'I', title: 'Parties to Suits', cluster: 'Parties', gist: 'Order I CPC — Parties to Suits.', flags: ['exam'] },
  { id: '2', roman: 'II', title: 'Frame of Suit', cluster: 'Frame of suit', gist: 'Order II CPC — Frame of Suit.', flags: ['exam'] },
  { id: '3', roman: 'III', title: 'Recognized Agents and Pleaders', cluster: 'Appearance', gist: 'Order III CPC — Recognized Agents and Pleaders.', flags: [] },
  { id: '4', roman: 'IV', title: 'Institution of suits', cluster: 'Institution', gist: 'Order IV CPC — Institution of suits.', flags: [] },
  { id: '5', roman: 'V', title: 'Issue and Service of Summons', cluster: 'Summons', gist: 'Order V CPC — Issue and Service of Summons.', flags: ['exam'] },
  { id: '6', roman: 'VI', title: 'Pleadings Generally', cluster: 'Pleadings', gist: 'Order VI CPC — Pleadings Generally.', flags: ['exam'] },
  { id: '7', roman: 'VII', title: 'Plaint', cluster: 'Pleadings', gist: 'Order VII CPC — Plaint.', flags: ['exam'] },
  { id: '8', roman: 'VIII', title: 'Written statement, set-off and counter-claim', cluster: 'Pleadings', gist: 'Order VIII CPC — Written statement, set-off and counter-claim.', flags: ['exam'] },
  { id: '9', roman: 'IX', title: 'Appearance of Parties and Consequence of non-Appearance', cluster: 'Appearance', gist: 'Order IX CPC — Appearance of Parties and Consequence of non-Appearance.', flags: ['exam'] },
  { id: '10', roman: 'X', title: 'Examination of Parties by the Court', cluster: 'Hearing', gist: 'Order X CPC — Examination of Parties by the Court.', flags: [] },
  { id: '11', roman: 'XI', title: 'Discovery and Inspection', cluster: 'Discovery', gist: 'Order XI CPC — Discovery and Inspection.', flags: [] },
  { id: '12', roman: 'XII', title: 'Admissions', cluster: 'Admissions', gist: 'Order XII CPC — Admissions.', flags: [] },
  { id: '13', roman: 'XIII', title: 'Production, Impounding and Return of Documents', cluster: 'Documents', gist: 'Order XIII CPC — Production, Impounding and Return of Documents.', flags: [] },
  { id: '13A', roman: 'XIII-A', title: 'Summary Judgment', cluster: 'Commercial overlay', gist: 'Order XIII-A CPC — Summary Judgment.', flags: [] },
  { id: '14', roman: 'XIV', title: 'Settlement of issues and determination of suit on issues of law or on issues agreed upon', cluster: 'Issues', gist: 'Order XIV CPC — Settlement of issues and determination of suit on issues of law or on issues agreed upon.', flags: [] },
  { id: '15', roman: 'XV', title: 'Disposal of the Suit at the First Hearing', cluster: 'First hearing', gist: 'Order XV CPC — Disposal of the Suit at the First Hearing.', flags: [] },
  { id: '15A', roman: 'XV-A', title: 'Case Management Hearing', cluster: 'Commercial overlay', gist: 'Order XV-A CPC — Case Management Hearing.', flags: [] },
  { id: '16', roman: 'XVI', title: 'Summoning and Attendance of Witnesses', cluster: 'Witnesses', gist: 'Order XVI CPC — Summoning and Attendance of Witnesses.', flags: [] },
  { id: '16A', roman: 'XVI-A', title: 'Attendance of Witnesses Confined or Detained in Prisons', cluster: 'Witnesses', gist: 'Order XVI-A CPC — Attendance of Witnesses Confined or Detained in Prisons.', flags: [] },
  { id: '17', roman: 'XVII', title: 'Adjournment', cluster: 'Hearing', gist: 'Order XVII CPC — Adjournment.', flags: [] },
  { id: '18', roman: 'XVIII', title: 'Hearing of the Suit and Examination of Witnesses', cluster: 'Hearing', gist: 'Order XVIII CPC — Hearing of the Suit and Examination of Witnesses.', flags: [] },
  { id: '19', roman: 'XIX', title: 'Affidavits', cluster: 'Evidence', gist: 'Order XIX CPC — Affidavits.', flags: [] },
  { id: '20', roman: 'XX', title: 'Judgment and Decree', cluster: 'Judgment', gist: 'Order XX CPC — Judgment and Decree.', flags: [] },
  { id: '20A', roman: 'XXA', title: 'Costs', cluster: 'Costs', gist: 'Order XXA CPC — Costs.', flags: [] },
  { id: '21', roman: 'XXI', title: 'Execution of Decrees and Orders', cluster: 'Execution', gist: 'Order XXI CPC — Execution of Decrees and Orders.', flags: ['exam'] },
  { id: '22', roman: 'XXII', title: 'Death, Marriage and Insolvency of Parties', cluster: 'Abatement', gist: 'Order XXII CPC — Death, Marriage and Insolvency of Parties.', flags: ['exam'] },
  { id: '23', roman: 'XXIII', title: 'Withdrawal and Adjustment of Suits', cluster: 'Compromise', gist: 'Order XXIII CPC — Withdrawal and Adjustment of Suits.', flags: ['exam'] },
  { id: '24', roman: 'XXIV', title: 'Payment into Court', cluster: 'Payment', gist: 'Order XXIV CPC — Payment into Court.', flags: [] },
  { id: '25', roman: 'XXV', title: 'Security for Costs', cluster: 'Security', gist: 'Order XXV CPC — Security for Costs.', flags: [] },
  { id: '26', roman: 'XXVI', title: 'Commissions', cluster: 'Commissions', gist: 'Order XXVI CPC — Commissions.', flags: [] },
  { id: '27', roman: 'XXVII', title: 'Suits by or against the Government or Public Officers in their Official Capacity', cluster: 'Government', gist: 'Order XXVII CPC — Suits by or against the Government or Public Officers in their Official Capacity.', flags: [] },
  { id: '27A', roman: 'XXVII-A', title: 'Suits Involving a Substantial Question of Law as to the Interpretation of the Constitution or as to the Validity of any Statutory Instrument', cluster: 'Constitutional questions', gist: 'Order XXVII-A CPC — Suits Involving a Substantial Question of Law as to the Interpretation of the Constitution or as to the Validity of any Statutory Instrument.', flags: [] },
  { id: '28', roman: 'XXVIII', title: 'Suits by or Against Military or Naval men or Airmen', cluster: 'Special defendants', gist: 'Order XXVIII CPC — Suits by or Against Military or Naval men or Airmen.', flags: [] },
  { id: '29', roman: 'XXIX', title: 'Suits by or against Corporations', cluster: 'Special defendants', gist: 'Order XXIX CPC — Suits by or against Corporations.', flags: [] },
  { id: '30', roman: 'XXX', title: 'Suits by or against Firms and Persons carrying on business in names other than their own', cluster: 'Special defendants', gist: 'Order XXX CPC — Suits by or against Firms and Persons carrying on business in names other than their own.', flags: [] },
  { id: '31', roman: 'XXXI', title: 'Suits by or against Trustees, Executors and Administrators', cluster: 'Special defendants', gist: 'Order XXXI CPC — Suits by or against Trustees, Executors and Administrators.', flags: [] },
  { id: '32', roman: 'XXXII', title: 'Suits by or against Minors and Persons of Unsound Mind', cluster: 'Special defendants', gist: 'Order XXXII CPC — Suits by or against Minors and Persons of Unsound Mind.', flags: [] },
  { id: '32A', roman: 'XXXII-A', title: 'Suits Relating to Matters Concerning the Family', cluster: 'Family', gist: 'Order XXXII-A CPC — Suits Relating to Matters Concerning the Family.', flags: [] },
  { id: '33', roman: 'XXXIII', title: 'Suits by Indigent Persons', cluster: 'Indigent persons', gist: 'Order XXXIII CPC — Suits by Indigent Persons.', flags: [] },
  { id: '34', roman: 'XXXIV', title: 'Suits Relating to Mortgages of Immovable Property', cluster: 'Mortgages', gist: 'Order XXXIV CPC — Suits Relating to Mortgages of Immovable Property.', flags: [] },
  { id: '35', roman: 'XXXV', title: 'Interpleader', cluster: 'Interpleader', gist: 'Order XXXV CPC — Interpleader.', flags: [] },
  { id: '36', roman: 'XXXVI', title: 'Special Case', cluster: 'Special case', gist: 'Order XXXVI CPC — Special Case.', flags: [] },
  { id: '37', roman: 'XXXVII', title: 'Summary Procedure', cluster: 'Summary procedure', gist: 'Order XXXVII CPC — Summary Procedure.', flags: ['exam'] },
  { id: '38', roman: 'XXXVIII', title: 'Arrest and Attachment before Judgment', cluster: 'Interim', gist: 'Order XXXVIII CPC — Arrest and Attachment before Judgment.', flags: ['exam'] },
  { id: '39', roman: 'XXXIX', title: 'Temporary Injunctions and Interlocutory Orders', cluster: 'Interim', gist: 'Order XXXIX CPC — Temporary Injunctions and Interlocutory Orders.', flags: ['exam'] },
  { id: '40', roman: 'XL', title: 'Appointment of Receivers', cluster: 'Interim', gist: 'Order XL CPC — Appointment of Receivers.', flags: [] },
  { id: '41', roman: 'XLI', title: 'Appeals from Original Decrees', cluster: 'Appeals', gist: 'Order XLI CPC — Appeals from Original Decrees.', flags: ['exam'] },
  { id: '42', roman: 'XLII', title: 'Appeals from Appellate Decrees', cluster: 'Appeals', gist: 'Order XLII CPC — Appeals from Appellate Decrees.', flags: [] },
  { id: '43', roman: 'XLIII', title: 'Appeals from Orders', cluster: 'Appeals', gist: 'Order XLIII CPC — Appeals from Orders.', flags: ['exam'] },
  { id: '44', roman: 'XLIV', title: 'Appeals by Indigent Persons', cluster: 'Appeals', gist: 'Order XLIV CPC — Appeals by Indigent Persons.', flags: [] },
  { id: '45', roman: 'XLV', title: 'Appeals to the Supreme Court', cluster: 'Appeals', gist: 'Order XLV CPC — Appeals to the Supreme Court.', flags: [] },
  { id: '46', roman: 'XLVI', title: 'Reference', cluster: 'Reference review revision', gist: 'Order XLVI CPC — Reference.', flags: [] },
  { id: '47', roman: 'XLVII', title: 'Review', cluster: 'Reference review revision', gist: 'Order XLVII CPC — Review.', flags: ['exam'] },
  { id: '48', roman: 'XLVIII', title: 'Miscellaneous', cluster: 'Miscellaneous', gist: 'Order XLVIII CPC — Miscellaneous.', flags: [] },
  { id: '48A', roman: 'XLVIIIA', title: 'High Court original civil jurisdiction extra', cluster: 'High Courts', gist: 'Order XLVIIIA CPC — High Court original civil jurisdiction extra.', flags: [] },
  { id: '49', roman: 'XLIX', title: 'Chartered High Courts', cluster: 'High Courts', gist: 'Order XLIX CPC — Chartered High Courts.', flags: [] },
  { id: '50', roman: 'L', title: 'Provincial Small Cause Courts', cluster: 'Small causes', gist: 'Order L CPC — Provincial Small Cause Courts.', flags: [] },
  { id: '51', roman: 'LI', title: 'Presidency Small Cause Courts', cluster: 'Small causes', gist: 'Order LI CPC — Presidency Small Cause Courts.', flags: [] },
]

const BY_ID = new Map(CPC_ORDERS.map((o) => [o.id.toLowerCase(), o]))

export function cpcOrderById(id: string) {
  return BY_ID.get(id.toLowerCase())
}

export function cpcOrderIdFromTopicId(topicId: string): string | null {
  const match = topicId.match(/^(?:o|order)-([0-9]+[a-z]*)$/i)
  return match?.[1] ?? null
}
