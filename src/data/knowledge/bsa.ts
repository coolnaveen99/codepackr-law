import { SRC, entity } from './schema'
import type { CanonicalEntity } from './types'

export const BSA_KNOWLEDGE: CanonicalEntity[] = [
  entity('STATUTE', 'EVIDENCE-LAW', 'BHARATIYA-SAKSHYA-ADHINIYAM', {
    title: 'Bharatiya Sakshya Adhiniyam, 2023',
    summary:
      'India’s law of evidence. Act 47 of 2023, in force 1 July 2024. 170 sections; replaces the Indian Evidence Act, 1872.',
    explanation:
      'The Adhiniyam answers *what facts may be proved and how*. Substantive crime is the Bharatiya Nyaya Sanhita; procedure is the Bharatiya Nagarik Suraksha Sanhita. The IEA 1872 remains historical concordance only.\n\nHeadline moves: “document” includes electronic and digital records; ss. 61–63 deal with electronic records (the 65B-certificate family, with an expert on the certificate); relevancy structure is preserved but renumbered.',
    exam: 'In force 1 July 2024. Do not write IEA section numbers in a current-law answer except as concordance. Confirm the Bare Act before citing a mapped number.',
    tags: ['evidence', 'bsa', 'iea', 'electronic-evidence'],
    aliases: ['BSA', 'BSA 2023', 'Bharatiya Sakshya Adhiniyam', 'new Evidence Act'],
    href: '/subjects/bsa',
    sources: [SRC.educational('Bharatiya Sakshya Adhiniyam, 2023 (Act 47 of 2023)')],
  }),
  entity('DOCTRINE', 'EVIDENCE-LAW', 'RES-GESTAE', {
    title: 'Res gestae — facts forming part of the same transaction',
    summary:
      'Facts which form part of the same transaction are relevant, whether they occurred at the same time and place or not. BSA s. 4 (historically IEA s. 6).',
    explanation:
      'The Latin tag is teaching shorthand. The statutory test is whether the fact is part of the *same transaction* as a fact in issue or a relevant fact. Spontaneous statements closely connected with an event may come in; a later narrative usually will not.\n\nDo not treat res gestae as a licence to admit hearsay. It is a relevancy rule. Admissibility still has to be worked through.',
    exam: 'Current cite is BSA s. 4, not IEA 6. Transaction, not “anything said nearby”.',
    tags: ['evidence', 'bsa', 'relevancy', 'res-gestae'],
    aliases: ['res gestae', 'same transaction', 'IEA 6', 'BSA 4'],
    href: '/subjects/bsa/doctrine-res-gestae',
    parent: 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
  }),
  entity('DOCTRINE', 'EVIDENCE-LAW', 'ESTOPPEL', {
    title: 'Estoppel',
    summary:
      'A person who by declaration, act or omission intentionally caused another to believe a thing to be true and to act upon that belief cannot deny the truth of that thing in a suit or proceeding between them. BSA s. 121 (historically IEA s. 115).',
    explanation:
      'Estoppel is a rule of evidence, not a cause of action. It shuts the mouth of the representor. Ingredients typically taught: a representation of fact; made to another; that other believed it and acted; detriment or change of position; the representor is now trying to deny it.\n\nSpecial estoppels: tenant/licensee (s. 122) and acceptor of a bill / bailee / licensee (s. 123). Estoppel does not create title against the true owner, and it does not generally bind the State in the same way as a private party on pure questions of law.',
    exam: 'Current cite is BSA s. 121, not IEA 115. Representation + belief + action. Not a substitute for proving title.',
    tags: ['evidence', 'bsa', 'estoppel'],
    aliases: ['estoppel', 'IEA 115', 'BSA 121', 'promissory estoppel'],
    href: '/subjects/bsa/doctrine-estoppel',
    parent: 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
  }),
  entity('CONCEPT', 'EVIDENCE-LAW', 'BURDEN-OF-PROOF', {
    title: 'Burden of proof',
    summary:
      'Whoever desires the Court to give judgment as to any legal right or liability dependent on facts he asserts must prove those facts. BSA s. 104 (historically IEA s. 101).',
    explanation:
      'Two ideas students mix up: the legal burden (who loses if nothing is proved) and the evidential burden (who must lead evidence at a given stage). s. 104 is the legal burden. s. 105 says it lies on the person who would fail if no evidence were given. Particular-fact and especially-within-knowledge rules sit in ss. 106–109. Exceptions claimed by an accused are on the accused (s. 108), but the prosecution still bears the burden of the offence beyond reasonable doubt.',
    exam: 'Current cite is BSA s. 104, not IEA 101. Never write that the accused must prove innocence.',
    tags: ['evidence', 'bsa', 'burden-of-proof'],
    aliases: ['burden of proof', 'onus of proof', 'IEA 101', 'BSA 104'],
    href: '/subjects/bsa/burden-proof',
    parent: 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
  }),
  entity('CONCEPT', 'EVIDENCE-LAW', 'ELECTRONIC-RECORD', {
    title: 'Electronic and digital records',
    summary:
      'An electronic or digital record is not to be denied admissibility merely because it is electronic. Subject to s. 63, it has the same legal effect as other documents. BSA ss. 61–63.',
    explanation:
      's. 61 is the non-discrimination rule. s. 62 is special provisions relating to electronic records. s. 63 is the admissibility / computer-output / certificate family that students still remember as IEA 65B. The certificate is not a formality. Anvar P.V. and Arjun Panditrao remain the teaching authorities until a later Constitution Bench says otherwise — cite them as interpretation of the certificate scheme, and then apply BSA 63.',
    exam: 'Do not say “65B” as the current section. Say BSA 63, historically IEA 65B. Certificate + conditions.',
    tags: ['evidence', 'bsa', 'electronic-evidence', 'section-63'],
    aliases: ['electronic evidence', '65B', 'BSA 63', 'digital record'],
    href: '/subjects/bsa/documentary-digital',
    parent: 'STATUTE:EVIDENCE-LAW:BHARATIYA-SAKSHYA-ADHINIYAM',
  }),
]
