import type { TopicContent } from '../loadTopicContent'

/**
 * Union & State Judiciary
 * Subject: constitution | Topic id: judiciary
 * SC/HC jurisdiction and independence — black-letter map.
 */
const content: TopicContent = {

  study: `Article 124(1)
“There shall be a Supreme Court of India consisting of a Chief Justice of India and, until Parliament by law prescribes a larger number, of not more than [the number then fixed] other Judges.”

Supreme Court
Part V, Chapter IV (Arts 124–147): establishment, appointment themes, jurisdiction including original (Art 131), appellate (Arts 132–134), Article 136 special leave, advisory jurisdiction (Art 143), and Article 141 (law declared by SC binding).

High Courts
Part VI, Chapter V (Arts 214–231): High Courts for States, jurisdiction including Article 226 writs and Article 227 superintendence.

Independence and basic structure
Independence of the judiciary and judicial review are treated as basic structure values (Kesavananda line; L. Chandra Kumar on judicial review).

Exam focus
Map SC jurisdictions (131, 136, 141, 143). Map HC Arts 226–227. State independence/judicial review as basic structure without inventing unsettled appointment controversies.`,

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


  examFrameworks: [
    {
      marks: 10,
      question: 'Write a 10-mark answer on this topic.',
      steps: [
        'Introduce the concept and name the governing provision.',
        'Explain the legal idea in student language — not only the Bare Act words.',
        'State essential elements or the main rule.',
        'Cite one leading authority and its principle.',
        'Give a short illustration or apply the rule to facts.',
        'Note a material exception or distinction.',
        'Conclude with the current legal position.',
      ],
    },
    {
      marks: 16,
      question: 'Expand the same topic into a 16-mark answer.',
      steps: [
        'Introduction and meaning.',
        'Why the rule exists / brief history if relevant.',
        'Legal foundation and elements in detail.',
        'Exceptions, limitations and an important distinction.',
        'Two or more authorities with ratio, not only names.',
        'A hypothetical with analysis.',
        'Current-law position and a short critical comment.',
        'Conclusion.',
      ],
    },
  ],

  revisionPoints: [
    'Start with the provision and the legal idea, not a section dump.',
    'Name the leading case and state what it actually held.',
    'Current through the 106th Amendment (2023) for constitutional topics.',
  ],


}

export default content
