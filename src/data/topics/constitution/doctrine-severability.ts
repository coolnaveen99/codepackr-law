import type { TopicContent } from '../loadTopicContent'

/**
 * Doctrine of Severability
 * Subject: constitution | Topic id: doctrine-severability
 * Saving the valid part of a partly unconstitutional law.
 */
const content: TopicContent = {

  study: `Related: Article 13 (laws inconsistent with or in derogation of Fundamental Rights).

Core idea
If a statute is partly unconstitutional, the court may sever the invalid portion and allow the remainder to operate if the valid and invalid parts are separable and the remainder can stand alone as a workable law consistent with legislative intent.

Article 13 context
Article 13 speaks of voidness “to the extent of the inconsistency”, which supports severance rather than automatic total destruction of every partly inconsistent law.

Limits
Severability fails where the valid and invalid parts are inextricably mixed, or where what remains would be a law the legislature never intended.

Exam focus
Define severance; link to “extent of inconsistency”; state the inseparability limit; cite a standard authority such as R.M.D. Chamarbaugwala.`,

  sections: [
    { id: 'sev-meaning', title: 'Meaning', order: 1, content: [
      'Invalid portions of a law may be severed so that the valid remainder continues.',
      'Severance depends on separability and whether the remainder can operate independently.',
    ]},
    { id: 'sev-limits', title: 'Limits', order: 2, content: [
      'If valid and invalid parts are entangled, or the remainder would distort legislative intent, severance is refused.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with or in derogation of the Fundamental Rights' },
  ],

  examples: [
    { id: 'sev-example', title: 'Partly bad clause', description: 'If one clause of a statute violates a Fundamental Right but other clauses are independent and workable, the court may strike only the offending clause.' },
  ],

  questionsAndAnswers: [
    { id: 'sev-qa-1', question: 'What does the doctrine of severability allow?', answer: 'It allows the court to invalidate only the unconstitutional part of a law and uphold the rest if the parts are separable.', relatedProvisionIds: ['constitution-article-13'] },
    { id: 'sev-qa-2', question: 'When is severability refused?', answer: 'When the valid and invalid parts are inseparable, or the remainder cannot stand as an independent workable law consistent with legislative intent.', relatedProvisionIds: ['constitution-article-13'] },
    { id: 'sev-qa-3', question: 'Which phrase in Article 13 supports severability teaching?', answer: 'Voidness “to the extent of the inconsistency”.', relatedProvisionIds: ['constitution-article-13'] },
  ],

  relatedTopics: ['Doctrine of Eclipse', 'Fundamental Rights', 'Article 14 — Equality'],

  cases: [
    { name: 'R.M.D. Chamarbaugwala v. Union of India', year: 1957, citation: 'AIR 1957 SC 628', holding: 'Courts may sever unconstitutional provisions and give effect to the valid remainder where severance is possible.', relevance: 'Leading authority on severability in constitutional adjudication.' },
  ],

  bareActPointers: ['Art 13'],

  examTips: [
    'Define severance in one sentence.',
    'Quote the idea of “extent of inconsistency” under Article 13.',
    'State the inseparability limit.',
    'Cite R.M.D. Chamarbaugwala.',
  ],

}

export default content
