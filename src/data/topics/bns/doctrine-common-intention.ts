import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'When a criminal act is done by several persons in furtherance of a common intention, each is liable as if they did it alone. BNS s. 3(5), historically IPC 34. It needs prior concert, not five persons.',

  study: `Topic at a glance
[[REF:DOCTRINE:CRIMINAL-LAW:COMMON-INTENTION]] is a rule of joint liability, not a separate offence. You charge the substantive offence read with s. 3(5).

What the law says
s. 3(5): when a criminal act is done by several persons in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.

Why it exists
A lookout who never pulled the trigger still made the killing possible. The law refuses to grade liability by who landed the last blow, once a shared plan is proved.

Essential elements
1. Two or more persons (not five).
2. A common intention — a pre-arranged plan, which may form on the spot but must be prior to the act (Mahbub Shah).
3. Participation: presence can be enough if it is in furtherance (Barendra Kumar Ghosh).
4. The act done is in furtherance of that common intention.

How it operates
Prove the plan from conduct, weapons, roles, and what happened after. Mere presence at a fight is not 3(5). A shared lathi in a sudden flare-up may still be 3(5) if the Court finds a meeting of minds before the fatal blow.

Do not confuse with common object
[[REF:DOCTRINE:CRIMINAL-LAW:COMMON-OBJECT]] (BNS s. 190, old IPC 149) needs five persons and an unlawful-assembly object. No pre-arranged plan is required. Constructive liability is wider. Five-person murder under s. 103(2) is a distinct charging option, not because 3(5) secretly needs five.

Current-law position
Cite s. 3(5) for offences on or after 1 July 2024. “Section 34 IPC” is concordance only.

Educational note
Do not copy the canonical doctrine essay here — apply it.`,

  provisions: [
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-section-3', section: 's. 3(5)', title: 'Common intention' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-190', section: 's. 190', title: 'Every member of unlawful assembly guilty of offence committed in prosecution of common object' },
  ],

  examples: [
    { id: 'ci-ex-1', title: 'Example 1 — simple', description: 'A holds the victim; B stabs. If they came together to teach the victim a lesson, both are liable for the stabbing via s. 3(5).' },
    { id: 'ci-ex-2', title: 'Example 2 — legal', description: 'A crowd of twenty stones a house. Unless a pre-arranged plan to kill is proved, 3(5) is the weaker charge. Unlawful assembly and common object (ss. 189–190) are the first tools.' },
  ],

  hypotheticals: [
    {
      id: 'ci-hypo',
      title: 'Examination hypothetical',
      facts: 'A and B go to C’s shop to demand money. C refuses. A, without a prior word about killing, snatches a knife from the counter and stabs C to death. B stands at the door and does not intervene.',
      question: 'Is B liable for murder with A via s. 3(5)?',
      applicableLaw: 's. 3(5); Mahbub Shah (prior concert); Barendra Kumar Ghosh (presence in furtherance).',
      analysis: 'The original common intention, on these facts, is extortion or intimidation, not killing. A sudden knife-grab can be A’s own act unless the prosecution proves that killing was within the plan or that B shared the new intention. Mere presence at the door, without a finding of a meeting of minds to kill, is not enough. B may still face other charges (extortion, unlawful assembly if numbers fit) but 3(5) murder is the weak count.',
      conclusion: 'B is unlikely to be guilty of murder via s. 3(5) on these facts. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'ci-v-co',
      title: 'Common intention and common object',
      left: 's. 3(5) common intention',
      right: 's. 190 common object',
      rows: [
        { point: 'Persons', left: 'Two or more', right: 'Five or more (unlawful assembly)' },
        { point: 'Plan', left: 'Prior concert required', right: 'Object of the assembly; plan not essential' },
        { point: 'IPC', left: '34', right: '149' },
      ],
    },
  ],

  misconceptions: [
    { id: 'ci-trap-1', trap: 's. 3(5) requires five persons.', correction: 'Five persons is the unlawful-assembly / s. 190 family. 3(5) needs two.' },
    { id: 'ci-trap-2', trap: 'Common intention is a stand-alone offence.', correction: 'It is a rule of liability. Charge murder / hurt read with s. 3(5).' },
  ],

  questionsAndAnswers: [
    { id: 'ci-qa-1', question: 'State the current section for common intention.', answer: 'BNS s. 3(5) (historically IPC 34).', relatedProvisionIds: ['bns-section-3'] },
    { id: 'ci-qa-2', question: 'Name the leading case on prior concert.', answer: 'Mahbub Shah v. Emperor (1945).', relatedProvisionIds: ['bns-section-3'] },
  ],

  relatedTopics: ['general-explanations', 'doctrine-mens-rea', 'culpable-homicide-murder', 's-3', 's-190'],

  cases: [
    { name: 'Barendra Kumar Ghosh v. King Emperor', year: 1925, citation: 'AIR 1925 PC 1', holding: '“They also serve who only stand and wait” — presence in furtherance of the common intention is participation.', relevance: 'Lookout / door-man facts.' },
    { name: 'Mahbub Shah v. Emperor', year: 1945, citation: 'AIR 1945 PC 118', holding: 'Common intention requires a pre-arranged plan. Same or similar intention is not enough.', relevance: 'The distinction that wins marks.' },
  ],

  bareActPointers: ['BNS s. 3(5)', 'BNS s. 190', 'IPC 34 / 149 (historical)'],

  examFrameworks: [
    {
      draftingCategory: 'brief',
      question: 'Explain common intention under the BNS.',
      steps: [
        's. 3(5) in substance; not a separate offence.',
        'Ingredients: two or more, prior concert, act in furtherance.',
        'Mahbub Shah and Barendra Kumar Ghosh.',
        'One illustration.',
        'Distinguish s. 190.',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: 'Distinguish common intention and common object. Can liability arise without a pre-arranged plan?',
      steps: [
        's. 3(5) in detail.',
        'Why the rule exists.',
        's. 190 / unlawful assembly.',
        'Table of differences.',
        's. 103(2) lynching as a third route.',
        'Hypothetical.',
        'Current numbering.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — joint liability, not a separate crime.',
    'Ingredients of s. 3(5).',
    'Mahbub Shah.',
    'Distinguish s. 190.',
    'Apply to facts.',
    'Conclusion.',
  ],

  revisionPoints: [
    '3(5) = old 34. Two persons + prior concert.',
    '190 = old 149. Five persons + common object.',
    'Presence can be participation if in furtherance.',
  ],

  examTips: [
    'Write “prior concert”, not only “common intention”.',
    'Do not charge “s. 3(5)” alone.',
  ],
}

export default content
