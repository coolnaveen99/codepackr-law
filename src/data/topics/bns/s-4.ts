import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 4 lists the six punishments under the BNS: death, imprisonment for life, imprisonment (rigorous or simple), forfeiture of property, fine, and — new — community service. Community service is the principal sentencing reform and is available for specified petty offences.',

  study: `Topic at a glance
Section 4 is the sentencing menu of the Bharatiya Nyaya Sanhita. It restates the classic punishments of the IPC and adds community service as a sixth punishment (s. 4(f)).

The six punishments
(a) Death
(b) Imprisonment for life
(c) Imprisonment, which is of two descriptions — rigorous (with hard labour) and simple
(d) Forfeiture of property
(e) Fine
(f) Community service (new)

Community service
This is the headline change. It is a recognised punishment for certain minor offences (e.g., first theft of property under a low value threshold in some formulations, public intoxication, certain official-duty defaults, and defamation in its milder form under s. 356(2) where the court so orders). The exact offences for which community service may be imposed are those that expressly permit it or that fall within the court’s residual sentencing discretion where the section allows a fine or lesser punishment.

Imprisonment for life
Means imprisonment for the remainder of the natural life of the convict, subject to the power of commutation and the executive remission policy. It is not a fixed term of 14 or 20 years unless a specific statute or commutation order so provides.

Death penalty
Retained. The constitutional “rarest of rare” doctrine (Bachan Singh) continues to govern its imposition. Section 103 (murder) and certain other sections still carry death as a possible sentence.

Relationship with later sections
Every offence-creating section that prescribes punishment must be read with s. 4. Where a section says “shall be punished with imprisonment of either description for a term which may extend to X years, or with fine, or with both”, the court may also consider community service if the offence is one for which that punishment is available.

Educational note
In any sentencing answer, list the six punishments from s. 4 and then identify which of them the charged section authorises.`,

  sections: [
    {
      id: 's-4-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 4 succeeds IPC s. 53. The only structural addition is community service (clause (f)), reflecting a policy shift toward non-custodial, reformative options for minor offending.',
        'Legislative objective: provide a closed list of authorised punishments and introduce community service as a formal sentencing option.',
        'Doctrinal foundation: punishments must be authorised by the statute; a court cannot invent a punishment outside s. 4. The death penalty remains subject to the Bachan Singh rarest-of-rare test.',
      ],
    },
    {
      id: 's-4-module-2',
      title: 'Textual Anatomy of the Six Punishments',
      order: 2,
      content: [
        '(a) Death — retained; constitutional limits apply.',
        '(b) Imprisonment for life — remainder of natural life, subject to commutation/remission.',
        '(c) Imprisonment — rigorous or simple; term fixed by the offence section.',
        '(d) Forfeiture of property — available where the offence section so provides.',
        '(e) Fine — amount fixed by the offence section or left to the court within statutory limits (see s. 8).',
        '(f) Community service — new; available for specified minor offences.',
      ],
    },
    {
      id: 's-4-module-3',
      title: 'Mandatory Elements when Imposing Punishment',
      order: 3,
      content: [
        'The court may impose only a punishment authorised by s. 4 and by the specific offence section.',
        'Where the section permits “imprisonment or fine or both”, the court has a discretion; community service may be considered if the offence is eligible.',
        'Death may be imposed only after the rarest-of-rare analysis and only where the section itself authorises death.',
      ],
    },
    {
      id: 's-4-module-4',
      title: 'Evidentiary & Sentencing Considerations',
      order: 4,
      content: [
        'Sentencing facts (aggravating and mitigating) are proved on a preponderance after conviction. The prosecution does not re-prove the offence at the sentencing stage.',
        'For community service, the court will consider the nature of the offence, the offender’s circumstances, and the feasibility of supervision.',
      ],
    },
    {
      id: 's-4-module-5',
      title: 'Procedural Roadmap',
      order: 5,
      content: [
        'Sentence is passed after conviction under the BNSS trial procedure. Appeal against sentence lies to the forum prescribed by the BNSS.',
        'Commutation and remission are executive powers exercised under ss. 5 and the relevant constitutional/statutory provisions.',
      ],
    },
  ],

  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-4', section: 's. 4', title: 'Punishments' }],

  examples: [
    {
      id: 's-4-ill-1',
      title: 'Illustration 1 — Community service available',
      illustrationType: 'practical',
      description: 'A first-time offender is convicted of a minor offence for which the section permits fine or a short term of imprisonment. The court, having regard to the offender’s circumstances and the nature of the act, may impose community service under s. 4(f) instead of or in addition to a fine, where the offence is one for which that option is open.',
    },
    {
      id: 's-4-ill-2',
      title: 'Illustration 2 — Death only if authorised and rarest of rare',
      illustrationType: 'fail-scenario',
      description: 'A murder conviction under s. 103 carries the possibility of death. The court cannot impose death unless the case satisfies the Bachan Singh rarest-of-rare test. Ordinary murders receive life imprisonment.',
    },
  ],

  hypotheticals: [
    {
      id: 's-4-hypo',
      title: 'Sentencing hypothetical — choice of punishment',
      facts: 'X is convicted of an offence punishable with imprisonment up to one year, or fine, or both. X is a first offender, employed, and the harm caused was minor.',
      question: 'What sentencing options does the court have under s. 4?',
      applicableLaw: 'BNS s. 4; the specific offence section; sentencing principles.',
      analysis: 'The court may impose rigorous or simple imprisonment up to the statutory maximum, or fine, or both. If the offence is one for which community service is available, that option should also be considered. Death and life imprisonment are not open because the offence section does not authorise them.',
      conclusion: 'Imprisonment (within the ceiling), fine, both, or community service (if eligible) are the lawful options.',
    },
  ],

  distinctions: [
    {
      id: 's-4-dist-1',
      title: 'Imprisonment for life vs Fixed-term imprisonment',
      left: 'Imprisonment for life (s. 4(b))',
      right: 'Term imprisonment (s. 4(c))',
      rows: [
        { point: 'Duration', left: 'Remainder of natural life (subject to commutation)', right: 'Fixed maximum stated in the offence section' },
        { point: 'When available', left: 'Only where the offence section so provides', right: 'Where the offence section prescribes a term' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-4-trap-1',
      trap: 'Community service is available for every offence.',
      correction: 'It is available only for those offences for which the statute permits it or for which the sentencing court may lawfully choose a non-custodial option of that character. It is not a universal substitute for imprisonment.',
    },
    {
      id: 's-4-trap-2',
      trap: 'Life imprisonment means 14 or 20 years.',
      correction: 'Imprisonment for life means the remainder of natural life unless lawfully commuted or remitted.',
    },
  ],

  cases: [
    {
      name: 'Bachan Singh v. State of Punjab',
      year: 1980,
      citation: '(1980) 2 SCC 684',
      court: 'Supreme Court of India',
      holding: 'Death penalty may be imposed only in the rarest of rare cases when the alternative of life imprisonment is unquestionably foreclosed.',
      relevance: 'Continues to govern the imposition of death under any BNS section that authorises it.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-4-brief',
      draftingCategory: 'brief',
      question: 'State the punishments provided under Section 4 of the BNS and explain the significance of community service.',
      answer: `I. The six punishments are death, imprisonment for life, imprisonment (rigorous or simple), forfeiture of property, fine, and community service.\nII. Community service is the new non-custodial option intended for minor offences.\nIII. A court may impose only a punishment authorised by s. 4 and by the specific offence section.\nIV. Death remains subject to the rarest-of-rare doctrine.`,
      explanation: 'Concise note on the sentencing menu.',
    },
    {
      id: 's-4-submissions',
      draftingCategory: 'submissions',
      question: 'Draft submissions on the scheme of punishments under BNS s. 4 with emphasis on the new community-service option and the limits on the death penalty.',
      answer: `I. FACTS — [sentencing facts].\nII. STATUTORY MENU — s. 4(a)–(f).\nIII. COMMUNITY SERVICE — nature, availability, and policy.\nIV. DEATH — Bachan Singh limits.\nV. LIFE vs TERM — distinction.\nVI. PRAYER — appropriate sentence within the authorised menu.`,
      explanation: 'Written-submissions format for sentencing arguments.',
    },
  ],

  bareActPointers: ['BNS s. 4', 'BNS s. 5 (commutation)', 'Bachan Singh (death penalty doctrine)'],
  examTips: ['List all six punishments; highlight community service as the new entry.', 'Never treat life imprisonment as a fixed term of 14/20 years unless a commutation order so provides.'],
  revisionPoints: ['Six punishments: death, life, imprisonment, forfeiture, fine, community service.', 'Community service is new (s. 4(f)).', 'Death only in rarest of rare cases.'],
  relatedTopics: ['s-5', 's-8', 's-103', 'general-exceptions'],
}

export default content
