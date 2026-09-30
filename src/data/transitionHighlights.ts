/**
 * Flagship relationship labels for BNS / BNSS / BSA transition centre (Phase 11).
 * Complements existing SECTION_MAPPINGS; never labels every mapping "equivalent".
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
    transitional: 'Pending IPC cases continue under repealed law as saved; new FIRs use BNS.',
    verificationSource: 'BNS 2023 text; Gazette commencement; India Code',
  },
  {
    id: 'mob-lynching',
    actPair: 'bns-ipc',
    oldRef: 'No dedicated IPC section (general murder / rioting)',
    newRef: 'BNS 103(2) (murder by group on race/caste/community grounds)',
    relation: 'new provision',
    changedWording: 'Explicit group-based murder provision.',
    changedIngredients: 'Group of five or more; murder on grounds of race, caste, community, sex, place of birth, language, personal belief.',
    proceduralEffect: 'New charging option; still requires proof of murder elements plus group/grounds.',
    commencement: '1 July 2024',
    transitional: 'Applies to offences after commencement.',
    verificationSource: 'BNS s. 103(2); India Code',
  },
  {
    id: 'zero-fir',
    actPair: 'bnss-crpc',
    oldRef: 'CrPC practice / limited statutory clarity',
    newRef: 'BNSS 173 (information in cognizable cases) — Zero FIR / e-FIR emphasis',
    relation: 'modified',
    changedWording: 'Statutory emphasis on registration regardless of local jurisdiction and electronic modes.',
    changedIngredients: 'Registration duty clarified; electronic means contemplated.',
    proceduralEffect: 'Police cannot refuse FIR solely for lack of local jurisdiction; transfer follows registration.',
    commencement: '1 July 2024',
    transitional: 'BNSS procedure for investigations after commencement.',
    verificationSource: 'BNSS s. 173; India Code',
  },
  {
    id: 'police-custody',
    actPair: 'bnss-crpc',
    oldRef: 'CrPC 167 (police custody generally continuous 15 days)',
    newRef: 'BNSS 187 (custody limits; police custody can be staggered)',
    relation: 'modified',
    changedWording: 'Police custody may be authorised in parts within the overall remand window.',
    changedIngredients: 'Total police custody still capped; timing flexibility changed.',
    proceduralEffect: 'Remand applications and diary entries must track staggered custody carefully.',
    commencement: '1 July 2024',
    transitional: 'Remand under BNSS for post-commencement arrests as applicable.',
    verificationSource: 'BNSS s. 187; India Code',
  },
  {
    id: 'electronic-evidence',
    actPair: 'bsa-iea',
    oldRef: 'IEA 65A / 65B (secondary electronic evidence + certificate)',
    newRef: 'BSA 61–63 / related primary-evidence treatment of electronic records',
    relation: 'modified',
    changedWording: 'Electronic / digital records given clearer primary-evidence treatment in BSA scheme.',
    changedIngredients: 'Certificate and admissibility path updated; verify current BSA sections and schedule.',
    proceduralEffect: 'Exhibition of electronic records should follow BSA certificate / primary evidence rules.',
    commencement: '1 July 2024',
    transitional: 'Trials after commencement generally apply BSA; verify forum practice.',
    verificationSource: 'BSA 2023; India Code',
  },
  {
    id: 'community-service',
    actPair: 'bns-ipc',
    oldRef: 'No general IPC community-service punishment',
    newRef: 'BNS 4(f) community service as punishment',
    relation: 'new provision',
    changedWording: 'Community service recognised as a form of punishment.',
    changedIngredients: 'Available where statute/court permits under BNS punishment scheme.',
    proceduralEffect: 'Sentencing options expanded for eligible offences.',
    commencement: '1 July 2024',
    transitional: 'Applies to BNS convictions after commencement.',
    verificationSource: 'BNS s. 4; India Code',
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
