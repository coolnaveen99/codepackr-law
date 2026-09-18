import type { TopicContent } from '../loadTopicContent'

/**
 * Union & State Judiciary
 * Subject: constitution | Topic id: judiciary
 * SC/HC jurisdiction and independence — black-letter map.
 */
const content: TopicContent = {

  study: `Bare Act (as modified up to 1 Dec 2007)
Article 124(1)
“There shall be a Supreme Court of India consisting of a Chief Justice of India and, until Parliament by law prescribes a larger number, of not more than [the number then fixed] other Judges.”

Bare Act source note: wording below follows the Ministry of Law and Justice text of the Constitution of India as modified up to 1 December 2007 (through the 94th Amendment). Later amendments are omitted unless separately verified.

Supreme Court
Part V, Chapter IV (Arts 124–147): establishment, appointment themes, jurisdiction including original (Art 131), appellate (Arts 132–134), Article 136 special leave, advisory jurisdiction (Art 143), and Article 141 (law declared by SC binding).

High Courts
Part VI, Chapter V (Arts 214–231): High Courts for States, jurisdiction including Article 226 writs and Article 227 superintendence.

Independence and basic structure
Independence of the judiciary and judicial review are treated as basic structure values (Kesavananda line; L. Chandra Kumar on judicial review).

Exam focus
Map SC jurisdictions (131, 136, 141, 143). Map HC Arts 226–227. State independence/judicial review as basic structure without inventing unsettled appointment controversies.`,

  short: `Union judiciary (Arts 124–147) and State High Courts (Arts 214–231). Key SC jurisdictions: Arts 131, 136, 141, 143. High Courts: Arts 226–227. Judicial independence and judicial review are basic structure values.`,

  detailed: `Supreme Court jurisdiction includes Arts 131, 132–134, 136, 141 and 143. High Courts exercise Arts 226 and 227 powers. Independence of the judiciary and judicial review form part of the basic structure jurisprudence.`,

  sections: [
    { id: 'judiciary-sc', title: 'Supreme Court — key jurisdictions', order: 1, content: [
      'Article 131 — original jurisdiction in certain Centre–State disputes.',
      'Article 136 — special leave to appeal; Article 141 — law declared by the Supreme Court binding; Article 143 — advisory jurisdiction.',
    ]},
    { id: 'judiciary-hc', title: 'High Courts', order: 2, content: [
      'Article 226 — writ jurisdiction (Fundamental Rights and any other purpose).',
      'Article 227 — power of superintendence over courts and tribunals.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-124', article: 'Article 124', title: 'Establishment and constitution of Supreme Court' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-136', article: 'Article 136', title: 'Special leave to appeal by the Supreme Court' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-141', article: 'Article 141', title: 'Law declared by Supreme Court to be binding on all courts' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-226', article: 'Article 226', title: 'Power of High Courts to issue certain writs' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-227', article: 'Article 227', title: 'Power of superintendence over all courts by the High Court' },
  ],

  examples: [
    { id: 'judiciary-226-example', title: 'Writ vs appeal', description: 'A person challenging State action for violation of a Fundamental Right may invoke Article 226 before the High Court; Article 136 is a discretionary Supreme Court appellate route, not a routine appeal.' },
  ],

  questionsAndAnswers: [
    { id: 'judiciary-qa-1', question: 'Which Article makes Supreme Court declarations of law binding on all courts?', answer: 'Article 141.', relatedProvisionIds: ['constitution-article-141'] },
    { id: 'judiciary-qa-2', question: 'What is Article 136?', answer: 'The Supreme Court’s power to grant special leave to appeal.', relatedProvisionIds: ['constitution-article-136'] },
    { id: 'judiciary-qa-3', question: 'Name two key High Court supervisory/writ provisions.', answer: 'Article 226 (writs) and Article 227 (superintendence).', relatedProvisionIds: ['constitution-article-226','constitution-article-227'] },
  ],

  relatedTopics: ['Writs (Arts 32 & 226)', 'Basic Structure Doctrine', 'Centre–State Relations'],

  cases: [
    { name: 'L. Chandra Kumar v. Union of India', year: 1997, citation: '(1997) 3 SCC 261', holding: 'Judicial review under Articles 32/226 is part of the basic structure; tribunal regimes cannot exclude that review.', relevance: 'Judicial review as basic structure.' },
  ],

  bareActPointers: ['Art 124', 'Art 136', 'Art 141', 'Art 143', 'Art 226', 'Art 227'],

  examTips: [
    'Memorise SC: 131, 136, 141, 143.',
    'Memorise HC: 226, 227.',
    'Link independence + judicial review to basic structure.',
    'Do not confuse Art 32 (SC FR remedy) with Art 226 (wider HC writs).',
  ],

}

export default content
