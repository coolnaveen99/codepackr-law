import type { TopicContent } from '../loadTopicContent'

/**
 * Writs (Arts 32 & 226)
 * Subject: constitution | Topic id: art-32-226
 * Five writs; Art 32 vs Art 226 — settled comparison.
 */
const content: TopicContent = {
  study: `Article 32
Guarantees the right to move the Supreme Court by appropriate proceedings for enforcement of Fundamental Rights. The Supreme Court may issue directions, orders or writs including habeas corpus, mandamus, prohibition, quo warranto and certiorari. Article 32 is itself a Fundamental Right.

Article 226
Empowers every High Court to issue writs to any person or authority (including government) for enforcement of Fundamental Rights and for any other purpose. Jurisdiction is wider than Article 32 because it is not confined to Fundamental Rights.

The five writs (exam shorthand)
• Habeas corpus — produce the body; challenges unlawful detention.
• Mandamus — command a public authority to perform a public duty.
• Prohibition — directs an inferior court/tribunal to stop exceeding jurisdiction.
• Certiorari — quashes an order of an inferior court/tribunal for want/excess of jurisdiction or error of law apparent on the face of the record (classic grounds).
• Quo warranto — challenges a person’s claim to a public office.

Exam focus
Art 32 = SC + FR only (+ FR itself). Art 226 = HC + FR and other legal rights. Name all five writs with one-line purpose.`,

  sections: [
    {
      id: 'writs-32-vs-226',
      title: 'Article 32 vs Article 226',
      order: 1,
      content: [
        'Article 32 is confined to enforcement of Fundamental Rights and is itself a Fundamental Right.',
        'Article 226 covers Fundamental Rights and “any other purpose”, so High Court writ jurisdiction is wider.'
      ],
    },
    {
      id: 'writs-five',
      title: 'The five writs',
      order: 2,
      content: [
        'Habeas corpus — unlawful detention; mandamus — public duty; prohibition — stop excess of jurisdiction; certiorari — quash; quo warranto — title to public office.'
      ],
    }
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-32', article: 'Article 32', title: 'Remedies for enforcement of Fundamental Rights' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-226', article: 'Article 226', title: 'Power of High Courts to issue certain writs' }
  ],

  examples: [
    {
      id: 'writs-hc-example',
      title: 'Wider HC jurisdiction',
      description: 'A contractual or statutory legal right that is not a Fundamental Right may still be enforceable under Article 226, whereas Article 32 would not ordinarily lie for that purpose alone.',
    }
  ],

  questionsAndAnswers: [
    {
      id: 'writs-qa-1',
      question: 'Why is Article 226 said to be wider than Article 32?',
      answer: 'Because High Courts may issue writs for Fundamental Rights and also for any other purpose, whereas Article 32 is for enforcement of Fundamental Rights.',
      explanation: '',
      relatedProvisionIds: ['constitution-article-32', 'constitution-article-226'],
    },
    {
      id: 'writs-qa-2',
      question: 'Name the five prerogative writs commonly listed in Indian constitutional law.',
      answer: 'Habeas corpus, mandamus, prohibition, certiorari and quo warranto.',
      explanation: '',
      relatedProvisionIds: ['constitution-article-32'],
    },
    {
      id: 'writs-qa-3',
      question: 'Is Article 32 itself a Fundamental Right?',
      answer: 'Yes. The right to constitutional remedies under Article 32 is a Fundamental Right.',
      explanation: '',
      relatedProvisionIds: ['constitution-article-32'],
    }
  ],

  relatedTopics: ['Fundamental Rights', 'Article 21 — Life & Personal Liberty', 'Union & State Judiciary'],

  cases: [
    {
      name: 'Maneka Gandhi v. Union of India',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      holding: 'Expanded the content of personal liberty and fairness under Article 21, frequently invoked through writ petitions.',
      relevance: 'Illustrates writ-based enforcement of expanded Art 21 rights.',
    },
    {
      name: 'L. Chandra Kumar v. Union of India',
      year: 1997,
      citation: '(1997) 3 SCC 261',
      holding: 'Power of judicial review under Articles 32/226 is part of the basic structure; tribunals cannot exclude High Court/Supreme Court judicial review.',
      relevance: 'Basic structure and writ jurisdiction.',
    }
  ],

  bareActPointers: ['Art 32', 'Art 226'],

  examTips: ['Memorise the five writs with one-line meanings.', 'Write the Art 32 vs 226 comparison in every writs question.', 'Art 32 is a Fundamental Right; Art 226 is a constitutional power of High Courts.', 'Mention L. Chandra Kumar when judicial review/tribunals appear.'],

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
