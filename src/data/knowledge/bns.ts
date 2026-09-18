import { SRC, entity } from './schema'
import type { CanonicalEntity } from './types'

export const BNS_KNOWLEDGE: CanonicalEntity[] = [
  entity('STATUTE', 'CRIMINAL-LAW', 'BHARATIYA-NYAYA-SANHITA', {
    title: 'Bharatiya Nyaya Sanhita, 2023',
    summary:
      'India’s principal substantive criminal law. Act 45 of 2023, in force 1 July 2024 (except s. 106(2)). 358 sections in 20 chapters; replaces the Indian Penal Code, 1860.',
    explanation:
      'The Sanhita is the *what* of crime. Procedure is the Bharatiya Nagarik Suraksha Sanhita, 2023; evidence is the Bharatiya Sakshya Adhiniyam, 2023. Offences committed before 1 July 2024 remain IPC offences because of s. 358 and Article 20(1).\n\nHeadline moves: offences against woman and child promoted to Chapter V; community service added as a punishment; organised crime, terrorist act, snatching, deceitful sexual intercourse, and acts endangering sovereignty sit as new offences; sedition, general attempt to suicide, adultery and s. 377 are not re-enacted.',
    exam: '358 sections, 20 chapters, 1 July 2024, except 106(2). Do not say “the new IPC”.',
    tags: ['criminal-law', 'bns', 'ipc', 'substantive-law'],
    aliases: ['BNS', 'BNS 2023', 'Bharatiya Nyaya Sanhita', 'new penal code', 'Indian Justice Code'],
    href: '/subjects/bns',
    sources: [
      SRC.educational('Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023)'),
      SRC.educational('MHA S.O. 850(E), 23 February 2024'),
    ],
  }),
  entity('TOPIC', 'CRIMINAL-LAW', 'BNS', {
    title: 'Bharatiya Nyaya Sanhita — study map',
    summary: 'Section-wise topics for the 2023 Sanhita: chapter order, exam clusters, and the IPC converter.',
    tags: ['criminal-law', 'bns', 'section-wise'],
    aliases: ['BNS topics', 'BNS chapters'],
    href: '/subjects/bns',
    parent: 'STATUTE:CRIMINAL-LAW:BHARATIYA-NYAYA-SANHITA',
  }),
  entity('DOCTRINE', 'CRIMINAL-LAW', 'COMMON-INTENTION', {
    title: 'Common intention',
    summary:
      'When a criminal act is done by several persons in furtherance of a common intention, each is liable as if they did it alone. BNS s. 3(5), old IPC 34.',
    explanation:
      'Two or more persons, a pre-arranged plan (Mahbub Shah), and an act in furtherance. Presence can be enough if it is in furtherance (Barendra Kumar Ghosh). Distinct from common object in [[REF:DOCTRINE:CRIMINAL-LAW:COMMON-OBJECT]].',
    exam: '3(5) needs prior concert, not five persons. Five persons is the unlawful-assembly / common-object family.',
    tags: ['criminal-law', 'bns', 'section-3', 'joint-liability'],
    aliases: ['IPC 34', 'section 34', 's. 3(5)', 'common intention'],
    href: '/subjects/bns/doctrine-common-intention',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('DOCTRINE', 'CRIMINAL-LAW', 'COMMON-OBJECT', {
    title: 'Common object',
    summary:
      'Every member of an unlawful assembly is guilty of the offence committed in prosecution of the common object. BNS s. 190, old IPC 149.',
    explanation:
      'Needs five persons and a s. 189 object. No pre-arranged plan is required. Constructive liability is wider than common intention. Rioting (s. 191) is the assembly that turns violent.',
    exam: '149 is now 190. Do not write 149 in a BNS answer except as concordance.',
    tags: ['criminal-law', 'bns', 'section-190', 'unlawful-assembly'],
    aliases: ['IPC 149', 'section 149', 's. 190', 'common object'],
    href: '/subjects/bns/s-190',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('DOCTRINE', 'CRIMINAL-LAW', 'PRIVATE-DEFENCE', {
    title: 'Right of private defence',
    summary: 'Nothing is an offence which is done in the exercise of the right of private defence of body or property. BNS ss. 34–44.',
    explanation:
      'Gateway s. 34. Body-death band s. 38 (including acid). Property-death band s. 41. The right begins with a reasonable apprehension and ends when the threat ends. Exceeding it in good faith is Exception 2 to murder.',
    exam: 'Private defence is a complete defence when within limits; exceeding it is culpable homicide, not murder.',
    tags: ['criminal-law', 'bns', 'general-exceptions', 'private-defence'],
    aliases: ['private defence', 'right of private defence', 'IPC 96-106'],
    href: '/subjects/bns/general-exceptions',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('DOCTRINE', 'CRIMINAL-LAW', 'MENS-REA', {
    title: 'Mens rea',
    summary:
      'The guilty mind. Most BNS offences need a specified intention, knowledge, rashness or negligence. Statutory offences may dispense with it only when the text is clear.',
    explanation:
      'Read the verb: “intentionally”, “knowingly”, “dishonestly”, “fraudulently”, “rashly”, “negligently”. Common intention ([[REF:DOCTRINE:CRIMINAL-LAW:COMMON-INTENTION]]) is a sharing of that mind, not a substitute for it. Strict-liability offences are the exception, not the default.',
    exam: 'Name the mental element in the section. “Mens rea” alone is not an answer — the statute’s word is.',
    tags: ['criminal-law', 'bns', 'mens-rea', 'fault-element'],
    aliases: ['mens rea', 'guilty mind', 'intention and knowledge'],
    href: '/subjects/bns/doctrine-mens-rea',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('CONCEPT', 'CRIMINAL-LAW', 'CULPABLE-HOMICIDE', {
    title: 'Culpable homicide and murder',
    summary:
      'Culpable homicide (s. 100) is the genus; murder (s. 101) is the species. Punishments are s. 103 and s. 105.',
    explanation:
      'Govinda and Virsa Singh still teach the clauses. Exceptions to s. 101 drop the killing to s. 105, they do not acquit. Rash or negligent death is s. 106, not 105, unless knowledge of likely death is made out.',
    exam: '100/101 definitions, 103/105 punishments. IPC 302 is BNS 103, not 101.',
    tags: ['criminal-law', 'bns', 'homicide', 'murder'],
    aliases: ['culpable homicide', 'murder', 'IPC 299', 'IPC 300', 'IPC 302'],
    href: '/subjects/bns/culpable-homicide-murder',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('CONCEPT', 'CRIMINAL-LAW', 'DOLI-INCAPAX', {
    title: 'Doli incapax',
    summary: 'A child under seven is conclusively incapable of an offence (s. 20). Between 7 and 12 the immunity is qualified (s. 21).',
    exam: 'Under 7 absolute; 7–12 maturity of understanding; 12–18 is a “child” for Chapter V but capable of crime.',
    tags: ['criminal-law', 'bns', 'general-exceptions', 'child'],
    aliases: ['doli incapax', 'child under seven', 'IPC 82'],
    href: '/subjects/bns/s-20',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('DEFINITION', 'CRIMINAL-LAW', 'CHILD', {
    title: '“Child” in the BNS',
    summary: 'Any person below the age of eighteen years. Section 2.',
    exam: 'BNS child = 18. This changes kidnapping from lawful guardianship for boys (IPC had 16).',
    tags: ['criminal-law', 'bns', 'definitions', 'child'],
    aliases: ['child', 'minor', 'below 18'],
    href: '/subjects/bns/s-2',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
  entity('PROCEDURE', 'CRIMINAL-LAW', 'IPC-TO-BNS', {
    title: 'IPC to BNS conversion',
    summary:
      'Offences on or after 1 July 2024 are charged under the BNS. Convert the number; do not paste 302, 376, 420, 498A into a new charge-sheet.',
    explanation:
      'Headline conversions: 302→103, 304→105, 304A→106, 304B→80, 307→109, 375/376→63/64, 498A→85/86, 420→318, 379→303, 34→3(5), 149→190, 124A→(repealed; see 152). Number collisions to memorise: BNS 304 is snatching, BNS 309 is robbery, BNS 353 is public mischief.',
    exam: 'Date of offence, not date of FIR, decides IPC vs BNS on substance (s. 358 + Article 20(1)).',
    tags: ['criminal-law', 'bns', 'ipc', 'transition'],
    aliases: ['IPC to BNS', 'section converter', 'concordance'],
    href: '/tool/bns-ipc-mapper',
    parent: 'TOPIC:CRIMINAL-LAW:BNS',
  }),
]
