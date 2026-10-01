/**
 * Flagship relationship labels for BNS / BNSS / BSA transition centre (Phase 11).
 * Complements existing SECTION_MAPPINGS; never labels every mapping "equivalent".
 *
 * Legal-source baseline verified against India Code statute texts and commencement
 * notifications. Case links are included only where a primary-source judgment
 * has been identified; absence of a case link is not a finding that no cases exist.
 */

export type RelationLabel =
  | 'direct correspondence'
  | 'modified'
  | 'split'
  | 'merged'
  | 'new provision'
  | 'removed'
  | 'no direct equivalent'
  | 'requires legal review'

export interface RelatedCase {
  title: string
  neutralCitation?: string
  url: string
  note: string
}

export interface TransitionHighlight {
  id: string
  actPair: 'bns-ipc' | 'bnss-crpc' | 'bsa-iea'
  oldRef: string
  newRef: string
  relation: RelationLabel
  changedWording: string
  changedIngredients: string
  proceduralEffect: string
  commencement: string
  transitional: string
  verificationSource: string
  sourceUrl: string
  relatedCases: RelatedCase[]
}

export const TRANSITION_HIGHLIGHTS: TransitionHighlight[] = [
  {
    id: 'sedition',
    actPair: 'bns-ipc',
    oldRef: 'IPC 124A (Sedition)',
    newRef: 'BNS 152 (Acts endangering sovereignty, unity and integrity)',
    relation: 'modified',
    changedWording: 'Sedition wording replaced; focus on sovereignty / unity / integrity rather than colonial sedition formula.',
    changedIngredients: 'Ingredients and protected interest re-framed; not a pure renumbering of 124A.',
    proceduralEffect: 'Charging and framing must use BNS 152 language and elements post commencement.',
    commencement: '1 July 2024 (central commencement notification)',
    transitional: 'IPC repeal does not erase prior operation, accrued rights/liabilities, penalties, or proceedings preserved by BNS s. 358; verify the facts and procedural stage of any pending matter.',
    verificationSource: 'BNS 2023 s. 152 and s. 358; India Code',
    sourceUrl: 'https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf',
    relatedCases: [],
  },
  {
    id: 'mob-lynching',
    actPair: 'bns-ipc',
    oldRef: 'No dedicated IPC section (general murder / rioting)',
    newRef: 'BNS 103(2) (murder by group on race/caste/community grounds)',
    relation: 'new provision',
    changedWording: 'Explicit group-based murder provision.',
    changedIngredients: 'Group of five or more; murder on grounds of race, caste, community, sex, place of birth, language, personal belief.',
    proceduralEffect: 'New charging option; still requires proof of the statutory murder and group/ground elements.',
    commencement: '1 July 2024',
    transitional: 'Applies to offences governed by BNS after commencement; verify any savings issue for an earlier offence.',
    verificationSource: 'BNS 2023 s. 103; India Code',
    sourceUrl: 'https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf',
    relatedCases: [],
  },
  {
    id: 'zero-fir',
    actPair: 'bnss-crpc',
    oldRef: 'CrPC practice / limited statutory clarity',
    newRef: 'BNSS 173 (information in cognizable cases) — electronic information and jurisdiction-neutral registration framework',
    relation: 'modified',
    changedWording: 'The BNSS expressly addresses giving information by electronic communication and permits registration of information relating to a cognizable offence irrespective of the area where the offence is committed, subject to the statutory process.',
    changedIngredients: 'The statutory text changes the information-registration framework; this is not a simple CrPC section-number conversion.',
    proceduralEffect: 'Police-station intake, electronic information and subsequent transfer must be handled under the BNSS text and applicable rules/orders.',
    commencement: '1 July 2024',
    transitional: 'BNSS commencement and savings must be checked against the date and procedural stage of the matter.',
    verificationSource: 'BNSS 2023 s. 173; India Code',
    sourceUrl: 'https://www.indiacode.nic.in/bitstream/123456789/20099/1/eng.pdf',
    relatedCases: [],
  },
  {
    id: 'police-custody',
    actPair: 'bnss-crpc',
    oldRef: 'CrPC 167 (police custody / remand framework)',
    newRef: 'BNSS 187 (custody limits and remand)',
    relation: 'modified',
    changedWording: 'The BNSS changes the statutory remand framework, including the permitted timing structure for police custody within the applicable detention period.',
    changedIngredients: 'The statutory conditions and timing must be read from BNSS s. 187; do not treat the change as a bare renumbering of CrPC s. 167.',
    proceduralEffect: 'Remand applications and custody calculations should identify the applicable BNSS period and the exact order authorising custody.',
    commencement: '1 July 2024',
    transitional: 'For a pending matter, identify the arrest date, applicable savings provision and procedural stage before selecting the governing remand provision.',
    verificationSource: 'BNSS 2023 s. 187; India Code',
    sourceUrl: 'https://www.indiacode.nic.in/bitstream/123456789/20099/1/eng.pdf',
    relatedCases: [
      {
        title: 'Central Bureau of Investigation v. Mir Usman @ Ara @ Mir Usman Ali',
        neutralCitation: '2025 INSC 1155',
        url: 'https://api.sci.gov.in/supremecourt/2024/60850/60850_2024_8_2_64472_FinalOrder_22-Sep-2025.pdf',
        note: 'The judgment discusses CrPC provisions alongside their BNSS counterparts, including s. 187; it is not a standalone ruling on every remand feature of s. 187.',
      },
    ],
  },
  {
    id: 'electronic-evidence',
    actPair: 'bsa-iea',
    oldRef: 'IEA 65A / 65B (electronic records and certificate framework)',
    newRef: 'BSA 61–63 (electronic / digital records and admissibility framework)',
    relation: 'modified',
    changedWording: 'The BSA reorganises electronic-record provisions and places the admissibility conditions in its own statutory scheme.',
    changedIngredients: 'The current certificate and electronic-record requirements must be read from BSA ss. 61–63; do not assume the old section numbers carry over unchanged.',
    proceduralEffect: 'Production and admissibility of electronic records should be assessed under the BSA provisions applicable to the proceeding.',
    commencement: '1 July 2024',
    transitional: 'BSA s. 170 preserves the Indian Evidence Act regime for applications, trials, inquiries, investigations, proceedings and appeals pending immediately before commencement.',
    verificationSource: 'BSA 2023 ss. 61–63 and 170; India Code',
    sourceUrl: 'https://www.indiacode.nic.in/bitstream/123456789/20063/1/aa202347.pdf',
    relatedCases: [
      {
        title: 'Pooranmal v. The State of Rajasthan',
        neutralCitation: '2026 INSC 217',
        url: 'https://api.sci.gov.in/supremecourt/2025/74821/74821_2025_2_1503_69143_Judgement_10-Mar-2026.pdf',
        note: 'The Supreme Court expressly discusses IEA s. 65-B and BSA s. 63 in relation to call-detail records and electronic evidence.',
      },
    ],
  },
  {
    id: 'community-service',
    actPair: 'bns-ipc',
    oldRef: 'No general IPC community-service punishment',
    newRef: 'BNS 4(f) community service as punishment',
    relation: 'new provision',
    changedWording: 'Community service is expressly included in the BNS punishment framework.',
    changedIngredients: 'Its availability depends on the offence-specific statutory provision and sentencing framework; it is not a universal punishment for every offence.',
    proceduralEffect: 'Sentencing analysis must check the offence-specific BNS provision and the court’s statutory power.',
    commencement: '1 July 2024',
    transitional: 'Apply the governing offence and savings rules to the date of the offence and proceeding.',
    verificationSource: 'BNS 2023 s. 4; India Code',
    sourceUrl: 'https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf',
    relatedCases: [],
  },
]

export const RELATION_HELP: Record<RelationLabel, string> = {
  'direct correspondence': 'Same core offence/procedure with stable mapping; still verify wording.',
  modified: 'Mapped provision exists but ingredients, wording or effect changed.',
  split: 'One old provision became multiple new provisions.',
  merged: 'Multiple old provisions combined into one new provision.',
  'new provision': 'No clean old counterpart; new statutory creation.',
  removed: 'Old provision not carried forward in the same form.',
  'no direct equivalent': 'No reliable one-to-one map; requires doctrinal analysis.',
  'requires legal review': 'Mapping uncertain; do not treat as settled equivalence.',
}
