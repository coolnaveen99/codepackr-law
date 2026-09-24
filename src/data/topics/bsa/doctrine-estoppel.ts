import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'A person who caused another to believe a thing to be true and to act upon that belief cannot deny it in a proceeding between them (BSA s. 121; historically IEA s. 115). Estoppel is a rule of evidence, not a cause of action.',

  study: `Topic at a glance
[[REF:DOCTRINE:EVIDENCE-LAW:ESTOPPEL|Estoppel]] shuts a mouth. It does not, by itself, create title.

What the law says
BSA s. 121 (general estoppel). s. 122 — tenant and licensee of a person in possession cannot deny the landlord’s / licensor’s title at the beginning of the tenancy (the BSA language should be quoted from the Bare Act; one commentary notes a timing phrase not in old IEA 116). s. 123 — acceptor of a bill, bailee, licensee.

Why it exists
People arrange their affairs on the faith of representations. Litigation should not reward a bait-and-switch. That is a rule of proof, not a substitute for a conveyance.

Essential elements (general estoppel)
1. A representation of existing fact (declaration, act or omission).
2. Made to another, intentionally causing belief.
3. That other believed it and acted upon it.
4. The representor now seeks to deny the thing in a suit or proceeding between them.

How it operates
Plead the representation, the acting, and the inconsistency. Estoppel does not bind on pure questions of law in the same way, and it does not usually found a title against the true owner who never represented anything. Promissory estoppel in public-law (Motilal Padampat / later cases) is a related but distinct public-law doctrine — do not dump it uncritically into a BSA s. 121 answer.

Current-law position
BSA ss. 121–123 from 1 July 2024. IEA 115–117 is historical. Confirm s. 122’s exact words in the Bare Act before a tenant-estoppel answer.

Educational note
“Promissory estoppel” is not a synonym for s. 121.`,

  provisions: [
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-121', section: 's. 121', title: 'Estoppel' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-122', section: 's. 122', title: 'Estoppel of tenant and of licensee of person in possession' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-123', section: 's. 123', title: 'Estoppel of acceptor of bill of exchange, bailee or licensee' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-25', section: 's. 25', title: 'Admissions not conclusive proof, but may estop' },
  ],

  examples: [
    { id: 'est-ex-1', title: 'Example 1 — simple', description: 'A tells B “this plot is mine” and takes rent. A later sues B as a trespasser on the plea that A never had title. Between A and B, A is estopped from denying the representation B acted upon by paying rent — subject to the true owner’s rights if the true owner is not A.' },
    { id: 'est-ex-2', title: 'Example 2 — legal', description: 'A tenant who entered under a landlord cannot, during the tenancy, deny that landlord’s title at the beginning of the tenancy (s. 122). He may still show that the title later determined.' },
  ],

  hypotheticals: [
    {
      id: 'est-hypo',
      title: 'Examination hypothetical',
      facts: 'A company prospectus states that a plot is freehold. An investor buys shares on that faith. The company later pleads, in a suit by the investor, that the plot was always leasehold.',
      question: 'Can the company deny the freehold statement?',
      applicableLaw: 's. 121 general estoppel; representation + belief + action; s. 25 admissions may estop.',
      analysis: 'If the prospectus representation was of fact, intended to be acted upon, and was acted upon by taking shares, s. 121 shuts the company from denying it in a proceeding between them. If the statement was a mere opinion or a future promise, the student must not force it into s. 121; public-law promissory estoppel is a different tool and this is a company-investor fact pattern, not a government promise.',
      conclusion: 'Likely estopped if the statement is one of existing fact. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'est-v-title',
      title: 'Estoppel and title',
      left: 'Estoppel (s. 121)',
      right: 'Title',
      rows: [
        { point: 'What it does', left: 'Prevents a denial as between the parties', right: 'Creates or proves ownership' },
        { point: 'True owner', left: 'Not bound if he made no representation', right: 'Can still recover against a person with no title' },
      ],
    },
  ],

  misconceptions: [
    { id: 'est-trap-1', trap: 'Estoppel gives ownership.', correction: 'It is a rule of evidence. It may prevent a denial; it does not by itself convey title.' },
    { id: 'est-trap-2', trap: 'IEA 115 is the current section.', correction: 'Current law is BSA s. 121.' },
    { id: 'est-trap-3', trap: 'Promissory estoppel against the Government is BSA s. 121.', correction: 'That is a public-law doctrine developed in Motilal Padampat and later cases. Use it only when the facts are a government promise. Do not equate it with s. 121.' },
  ],

  questionsAndAnswers: [
    { id: 'est-qa-1', question: 'State the general rule of estoppel under the BSA.', answer: 'A person who by declaration, act or omission intentionally caused another to believe a thing to be true and to act upon that belief cannot deny the truth of that thing in a suit or proceeding between them (s. 121).', relatedProvisionIds: ['bsa-121'] },
  ],

  relatedTopics: ['Admissions & Confessions', 'Burden of Proof', 'Documentary & Digital Evidence'],

  cases: [
    { name: 'Pickard v. Sears', year: 1837, citation: '(1837) 6 Ad & E 469', holding: 'Classic English formulation of estoppel by representation. Teaching origin; apply BSA s. 121 as the Indian statute.', relevance: 'History of the idea, not a current Indian section.' },
    { name: 'Motilal Padampat Sugar Mills v. State of U.P.', year: 1979, citation: '(1979) 2 SCC 409', holding: 'Promissory estoppel can bind the Government where a clear promise was intended to be acted upon and was acted upon, subject to equity and statute.', relevance: 'Use only in government-promise facts. Distinguish from BSA s. 121.' },
  ],

  bareActPointers: ['BSA ss. 121–123', 'BSA s. 25', 'IEA 115–117 (historical)'],

  examFrameworks: [
    {
      marks: 10,
      question: 'Explain estoppel under the BSA.',
      steps: [
        's. 121 rule in substance.',
        'Ingredients: representation, belief, action, denial.',
        's. 122 tenant; s. 123 bailee / acceptor.',
        'One illustration.',
        'It is not title.',
      ],
    },
    {
      marks: 16,
      question: 'Estoppel is a rule of evidence, not a cause of action. Discuss with special estoppels and the difference from promissory estoppel.',
      steps: [
        's. 121 in detail.',
        'Why the rule exists.',
        'ss. 122–123.',
        'Link to admissions (s. 25).',
        'Estoppel vs title.',
        'Promissory estoppel (Motilal) as a distinct public-law doctrine.',
        'Hypothetical.',
        'Current numbering.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — s. 121.',
    'Ingredients.',
    'Special estoppels.',
    'Not a cause of action / not title.',
    'Illustration.',
    'Conclusion.',
  ],

  revisionPoints: [
    's. 121 general; s. 122 tenant; s. 123 bailee/acceptor.',
    'Representation + belief + action.',
    'Not title; not automatically promissory estoppel against the State.',
  ],

  examTips: [
    'Write BSA 121, not IEA 115.',
    'If the problem is a government tax exemption promise, say so and move to Motilal — do not pretend s. 121 solves it.',
  ],
}

export default content
