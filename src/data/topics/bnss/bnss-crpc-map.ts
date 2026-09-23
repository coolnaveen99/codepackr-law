import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'BNSS is a new procedure Code (Act 46 of 2023), in force 1 July 2024. CrPC is historical concordance only. Never assume CrPC X = BNSS Y. Headline maps: 154→173, 41→35, 167→187, 190→210, 438→482, 439→483, 482→528.',

  study: `Topic at a glance
This is a concordance page, not a claim that nothing changed. Zero FIR, e-FIR, s. 173(3) enquiry, forensics, handcuffs, police-custody in parts, and trial clocks are real changes.

Headline conversions (teaching list)
154 FIR → 173
156 investigation → 175
161 statements → 180
167 remand → 187
173 police report → 193
190 cognizance → 210
227/228 Sessions discharge/charge → 250/251
239/240 warrant discharge/charge → 262/263
309 adjournment → 346
372/374 appeals → 413/415
397 revision → 438
436/437/438/439 bail → 478/480/482/483
436A undertrial → 479
482 inherent → 528
125 maintenance → 144

What actually changed (do not skip)
s. 173 Zero FIR and electronic FIR are statutory.
s. 173(3) limited preliminary enquiry (3-to-7-year band).
s. 176(3) forensics for 7+ year offences.
s. 35 notice folded into arrest; Arnesh Kumar written in.
s. 43(3) handcuffs for listed grave offences.
s. 187 police custody may be taken in parts.
Charge-framing and judgment clocks.
s. 479 first-time undertrial at half.

What did not vanish
Anticipatory bail (s. 482). Victim’s appeal (s. 413 proviso). Inherent power (s. 528). Maintenance (s. 144).

Transition
Procedure on or after 1 July 2024 follows BNSS, subject to savings. Substance of the offence still follows the date of the offence (BNS vs IPC). Do not mix the two tests.

Educational note
Use this list in the hall. Confirm any number not on this page in the Bare Act rather than inventing an offset.`,

  provisions: [
    { actId: 'bnss', actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023', provisionId: 'bnss-1', section: 's. 1', title: 'Short title, application and commencement' },
  ],

  examples: [
    { id: 'map-ex-1', title: 'Example 1 — simple', description: 'An answer that cites “s. 154 CrPC” for a 2026 FIR is a current-law fail. Write s. 173 BNSS, and add “old 154” in brackets if you need the examiner to see the conversion.' },
  ],

  hypotheticals: [
    {
      id: 'map-hypo',
      title: 'Examination hypothetical',
      facts: 'A 2026 bail application is titled “under s. 439 CrPC read with s. 438 CrPC”.',
      question: 'Correct the citation.',
      applicableLaw: 's. 483 (old 439) and s. 482 (old 438) — and they are different powers (custody bail vs anticipatory).',
      analysis: 'If the person is in custody, s. 483. If the person apprehends arrest, s. 482. Pasting both CrPC numbers is the old habit. The BNSS numbers are 483 and 482 respectively — note that 482 is anticipatory, not inherent power (inherent is 528).',
      conclusion: 'Use 482 or 483 as the facts require; 528 is quashing/inherent. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'map-482',
      title: 'The two “482”s students mix',
      left: 'CrPC 482 (historical)',
      right: 'BNSS 482 (current)',
      rows: [
        { point: 'Subject', left: 'Inherent powers of the High Court', right: 'Anticipatory bail' },
        { point: 'BNSS home of inherent power', left: '—', right: 's. 528' },
      ],
    },
  ],

  misconceptions: [
    { id: 'map-trap-1', trap: 'BNSS 482 is the new inherent-power section.', correction: 'BNSS 482 is anticipatory bail. Inherent power is s. 528.' },
    { id: 'map-trap-2', trap: 'Add 20 to every CrPC number to get the BNSS number.', correction: 'There is no arithmetic rule. Map each section.' },
  ],

  questionsAndAnswers: [
    { id: 'map-qa-1', question: 'CrPC 154 is which BNSS section?', answer: 's. 173.', relatedProvisionIds: ['bnss-1'] },
    { id: 'map-qa-2', question: 'CrPC 482 is which BNSS section?', answer: 's. 528 (inherent power). Anticipatory bail, old 438, is BNSS 482.', relatedProvisionIds: ['bnss-1'] },
  ],

  relatedTopics: ['fir-investigation', 'arrest', 'bail', 'charge-trial', 'appeals-revision'],

  cases: [],

  bareActPointers: ['BNSS 2023', 'CrPC 1973 (historical)'],

  examFrameworks: [
    {
      draftingCategory: 'brief',
      question: 'State the principal CrPC to BNSS conversions a student must know.',
      steps: [
        'FIR 154→173, arrest 41→35, remand 167→187.',
        'Cognizance 190→210.',
        'Bail 436–439 → 478–483; 438→482; inherent 482→528.',
        'One real change (Zero FIR or forensics).',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: 'The BNSS is not a renumbering. Discuss key changes and concordance traps.',
      steps: [
        'Transition date.',
        'Headline map.',
        'What changed (173, 35, 43(3), 187, clocks, 479).',
        'What survived (anticipatory bail, victim appeal, 528).',
        'The 482 trap.',
        'Substance vs procedure on 1 July 2024.',
        'Hypothetical of a mis-cited bail application.',
        'Conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — new Code.',
    'Headline conversions.',
    'Real changes.',
    '482/528 trap.',
    'Conclusion.',
  ],

  revisionPoints: [
    '154→173, 41→35, 167→187, 190→210.',
    '438→482 anticipatory; 482 CrPC → 528 inherent.',
    'Zero FIR, forensics, PC in parts, trial clocks.',
  ],

  examTips: [
    'If you remember only one trap, remember: BNSS 482 is anticipatory bail, not inherent power.',
  ],
}

export default content
