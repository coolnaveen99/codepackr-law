import { SRC, entity } from './schema'
import type { CanonicalEntity } from './types'

export const BNSS_KNOWLEDGE: CanonicalEntity[] = [
  entity('STATUTE', 'CRIMINAL-PROCEDURE', 'BHARATIYA-NAGARIK-SURAKSHA-SANHITA', {
    title: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
    summary:
      'India’s criminal procedure Code. Act 46 of 2023, in force 1 July 2024. Replaces the Code of Criminal Procedure, 1973.',
    explanation:
      'The Sanhita is the *how* of a criminal case: FIR, arrest, bail, charge, trial, appeal. Substantive offences are the Bharatiya Nyaya Sanhita; evidence is the Bharatiya Sakshya Adhiniyam. CrPC numbers are historical concordance only.\n\nHeadline moves: Zero FIR and e-FIR in s. 173; limited preliminary enquiry in s. 173(3); forensics in s. 176(3); arrest-necessity and notice in s. 35; handcuffs in s. 43(3); police custody in parts in s. 187; trial and judgment clocks; undertrial release in s. 479. Anticipatory bail survives as s. 482. Inherent power is s. 528, not s. 482.',
    exam: '1 July 2024. Do not write CrPC 154/41/438/482 as current. BNSS 482 is anticipatory bail; inherent power is 528.',
    tags: ['criminal-procedure', 'bnss', 'crpc'],
    aliases: ['BNSS', 'BNSS 2023', 'Bharatiya Nagarik Suraksha Sanhita', 'new CrPC'],
    href: '/subjects/bnss',
    sources: [SRC.educational('Bharatiya Nagarik Suraksha Sanhita, 2023 (Act 46 of 2023)')],
  }),
  entity('DOCTRINE', 'CRIMINAL-PROCEDURE', 'SPEEDY-TRIAL', {
    title: 'Speedy trial',
    summary:
      'A facet of Article 21. Hussainara Khatoon. The BNSS adds statutory clocks (charge, day-to-day trial, judgment, undertrial release) but a missed clock does not automatically acquit.',
    explanation:
      'Delay in a criminal trial is a deprivation of personal liberty. Hussainara read the right into Article 21. Antulay held there is no rigid outer limit that terminates every delayed prosecution. The BNSS overlay is ss. 346, 392, 479 and the charge-framing clock.',
    exam: 'Open with Hussainara, then name a BNSS clock. Do not write that every missed deadline acquits.',
    tags: ['criminal-procedure', 'bnss', 'article-21', 'speedy-trial'],
    aliases: ['speedy trial', 'right to speedy trial', 'Hussainara'],
    href: '/subjects/bnss/doctrine-speedy-trial',
    parent: 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
  }),
  entity('CONCEPT', 'CRIMINAL-PROCEDURE', 'ZERO-FIR', {
    title: 'Zero FIR',
    summary:
      'Information relating to a cognizable offence may be given irrespective of the area where the offence is committed. BNSS s. 173(1). It is now statutory, not merely a Court-directed practice.',
    exam: 'Current cite is s. 173, not CrPC 154. Transfer for investigation follows registration.',
    tags: ['criminal-procedure', 'bnss', 'fir', 'zero-fir'],
    aliases: ['zero FIR', 'zero fir', 'territorial FIR'],
    href: '/subjects/bnss/fir-investigation',
    parent: 'STATUTE:CRIMINAL-PROCEDURE:BHARATIYA-NAGARIK-SURAKSHA-SANHITA',
  }),
]
