import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Speedy trial is a facet of Article 21 (Hussainara Khatoon). The BNSS adds clocks: charge-framing, day-to-day trial (s. 346), judgment in 45 days (s. 392 teaching), and s. 479 undertrial release. The doctrine is constitutional; the clocks are statutory.',

  study: `Topic at a glance
Delay is not a technicality. A trial that never ends is a punishment without a conviction.

Why the doctrine exists
Hussainara Khatoon (1979) read speedy trial into Article 21 when undertrials filled Bihar jails. Abdul Rehman Antulay later laid guidelines. The right is of the accused, and in a different way of the victim. It does not mean a rushed, unfair trial.

BNSS clocks (statutory overlay)
Charge to be framed within the taught 60-day period of first hearing on charge (confirm Bare Act).
s. 346 — day-to-day trial; adjournments are not a habit.
Specified sexual-offence trials: tighter clock after evidence (taught as two months — confirm).
s. 392 teaching — judgment within 45 days of the close of arguments.
s. 415(4) — specified sexual-offence appeals within six months of filing.
s. 479 — first-time undertrial at half the maximum sentence (old 436A, tightened).
s. 176(3) forensics and s. 193 timelines try to move investigation.

How it operates
1. Is the delay unexplained?
2. Who caused it?
3. Prejudice to the accused?
4. Remedy: expedition is first; bail is common; quashing / termination is last (Antulay / P. Ramachandra Rao teaching — no rigid outer limit that automatically acquits).

Current-law position
Article 21 is still the home of the doctrine. The BNSS does not repeal Hussainara; it gives the Court more numbers to enforce.

Educational note
Do not write that “every missed BNSS clock acquits”. Most clocks are directory in effect unless the statute attaches a consequence.`,

  provisions: [
    { actId: 'bnss', actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023', provisionId: 'bnss-346', section: 's. 346', title: 'Power to postpone or adjourn proceedings' },
    { actId: 'bnss', actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023', provisionId: 'bnss-479', section: 's. 479', title: 'Maximum period for which an undertrial prisoner can be detained' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Life and personal liberty — speedy trial' },
  ],

  examples: [
    { id: 'st-ex-1', title: 'Example 1 — simple', description: 'An undertrial for a seven-year offence has spent four years in jail, first offence, trial not begun. s. 479 plus Article 21 are the two levers.' },
    { id: 'st-ex-2', title: 'Example 2 — legal', description: 'Arguments finished in January; judgment in September. The s. 392 45-day teaching is breached. The remedy is a direction to pronounce, possibly a complaint to the High Court on the administrative side — not an automatic acquittal.' },
  ],

  hypotheticals: [
    {
      id: 'st-hypo',
      title: 'Examination hypothetical',
      facts: 'A has been in custody four years on a case punishable with ten years. The prosecution has taken twelve adjournments. A moves for quashing on delay.',
      question: 'What should the Court do?',
      applicableLaw: 'Article 21 / Hussainara; Antulay guidelines; s. 346; s. 479 (half of ten is five — so 479 may not yet be ripe if first-time half is the test); bail under s. 483.',
      analysis: 'Four years on a ten-year offence is serious delay but s. 479 (half) is not yet crossed if the maximum is ten. The first remedies are bail and a peremptory trial calendar under s. 346. Quashing is reserved for delay that makes a fair trial impossible or is oppressive on Antulay / Kartar Singh type facts. The Court should not treat every adjournment as an acquittal.',
      conclusion: 'Bail + expedition first; quashing last. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'st-const-stat',
      title: 'Constitutional doctrine and BNSS clocks',
      left: 'Article 21 speedy trial',
      right: 'BNSS timelines',
      rows: [
        { point: 'Source', left: 'Judicial reading of personal liberty', right: 'Statute' },
        { point: 'Missed clock', left: 'Prejudice-based remedy', right: 'Direction to comply; consequence only if the section so provides' },
      ],
    },
  ],

  misconceptions: [
    { id: 'st-trap-1', trap: 'A trial that misses a BNSS deadline is void.', correction: 'Most clocks are for expedition. Acquittal for delay is a constitutional, prejudice-based remedy, not a bonus for every missed date.' },
    { id: 'st-trap-2', trap: 'Speedy trial is only for the accused.', correction: 'The victim also has an interest in a trial that ends. The clocks on sexual-offence trials and appeals exist for that reason too.' },
  ],

  questionsAndAnswers: [
    { id: 'st-qa-1', question: 'Which case read speedy trial into Article 21?', answer: 'Hussainara Khatoon v. State of Bihar (1979).', relatedProvisionIds: ['constitution-article-21'] },
    { id: 'st-qa-2', question: 'Name one BNSS provision that operationalises undertrial delay.', answer: 's. 479 (old CrPC 436A).', relatedProvisionIds: ['bnss-479'] },
  ],

  relatedTopics: ['bail', 'charge-trial', 'arrest'],

  cases: [
    { name: 'Hussainara Khatoon v. State of Bihar', year: 1979, citation: '(1980) 1 SCC 81', holding: 'Speedy trial is a part of personal liberty under Article 21. Undertrials cannot be forgotten in jail.', relevance: 'Foundation. Always open with this.' },
    { name: 'A.R. Antulay v. R.S. Nayak', year: 1992, citation: '(1992) 1 SCC 225', holding: 'Guidelines for delay; no rigid outer limit that automatically terminates every delayed prosecution.', relevance: 'The 16-mark case on remedy.' },
  ],

  bareActPointers: ['Art 21', 'BNSS s. 346', 's. 392', 's. 479', 's. 415(4)'],

  examFrameworks: [
    {
      marks: 10,
      question: 'Explain the doctrine of speedy trial.',
      steps: [
        'Article 21 / Hussainara.',
        'Why it exists (undertrials).',
        'BNSS overlay: 346, 479.',
        'Remedy: expedition and bail first.',
        'Not an automatic acquittal.',
      ],
    },
    {
      marks: 16,
      question: 'Has the BNSS given teeth to the speedy-trial doctrine? Discuss with cases.',
      steps: [
        'Hussainara and Antulay.',
        'Investigation clocks (176/193).',
        'Charge-framing clock.',
        's. 346 and s. 392.',
        's. 479 undertrial.',
        'Sexual-offence appeal clock s. 415(4).',
        'Hypothetical.',
        'Directory vs mandatory, and a reasoned conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — Art 21.',
    'Hussainara.',
    'BNSS clocks.',
    'Remedies.',
    'Conclusion.',
  ],

  revisionPoints: [
    'Hussainara: speedy trial is Art 21.',
    'Antulay: no automatic outer limit.',
    'BNSS: 346, 392, 479, charge-framing clock.',
  ],

  examTips: [
    'Name Hussainara in the first five lines. Then come home to a BNSS section. Doctrine without a section looks unfinished; a section without Hussainara looks like a Bare Act dump.',
  ],
}

export default content
