import type { TopicContent } from '../loadTopicContent'

/**
 * Amendment of the Constitution
 * Subject: constitution | Topic id: amendment
 * Article 368 and basic structure limit.
 */
const content: TopicContent = {

  study: `Article 368
Article 368 confers power and procedure to amend the Constitution. Amendments may require special majorities and, for certain provisions, ratification by States.

Basic structure limit
Kesavananda Bharati held that amending power is wide but cannot destroy the basic structure of the Constitution. Minerva Mills affirmed that limited amending power itself is part of the basic structure. Later cases (including Coelho on Ninth Schedule laws after 24 April 1973) apply basic structure review in specific contexts.

Procedure vs substance
Students must separate (i) procedural compliance with Article 368 from (ii) substantive basic structure limits.

Exam focus
Start with Art 368. State Kesavananda. Add Minerva Mills / Coelho as follow-ups. Do not treat Article 368 as unlimited.`,

  short: `Article 368 provides the power and procedure to amend the Constitution. Kesavananda Bharati limits amendments that destroy the basic structure. Minerva Mills and later cases refine that limit.`,

  detailed: `Article 368 is the amending provision. Kesavananda Bharati (1973) imposed the basic structure limitation. Minerva Mills (1980) treated limited amending power as basic. I.R. Coelho (2007) opened Ninth Schedule insertions after 24 April 1973 to basic structure review.`,

  sections: [
    { id: 'amend-368', title: 'Article 368', order: 1, content: [
      'Article 368 provides the power of Parliament to amend the Constitution and the procedure for amendment.',
      'Some amendments require State ratification in addition to special majorities.',
    ]},
    { id: 'amend-basic-structure', title: 'Basic structure limitation', order: 2, content: [
      'Kesavananda Bharati held that Parliament cannot amend the Constitution so as to damage or destroy its basic structure.',
      'Minerva Mills strengthened the idea that limited amending power is itself basic.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-368', article: 'Article 368', title: 'Power of Parliament to amend the Constitution and procedure therefor' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with or in derogation of the Fundamental Rights' },
  ],

  examples: [
    { id: 'amend-example', title: 'Amendment vs basic feature', description: 'Even if Article 368 procedure is followed, an amendment that destroys judicial review or democracy can be struck down for violating basic structure.' },
  ],

  questionsAndAnswers: [
    { id: 'amend-qa-1', question: 'Which Article provides for constitutional amendment?', answer: 'Article 368.', relatedProvisionIds: ['constitution-article-368'] },
    { id: 'amend-qa-2', question: 'What is the basic structure limitation?', answer: 'Parliament cannot use Article 368 to damage or destroy the Constitution’s basic structure (Kesavananda Bharati).', relatedProvisionIds: ['constitution-article-368'] },
    { id: 'amend-qa-3', question: 'Which case held that limited amending power is itself part of the basic structure?', answer: 'Minerva Mills Ltd. v. Union of India (1980).', relatedProvisionIds: ['constitution-article-368'] },
  ],

  relatedTopics: ['Basic Structure Doctrine', 'Fundamental Rights', 'Preamble'],

  cases: [
    { name: 'Kesavananda Bharati v. State of Kerala', year: 1973, citation: '(1973) 4 SCC 225', holding: 'Parliament cannot amend the Constitution so as to damage or destroy its basic structure.', relevance: 'Foundation of the amending-power limit.' },
    { name: 'Minerva Mills Ltd. v. Union of India', year: 1980, citation: '(1980) 3 SCC 625', holding: 'Limited amending power is part of the basic structure; struck down parts of the 42nd Amendment that upset FR–DPSP balance.', relevance: 'High-frequency follow-up to Kesavananda.' },
    { name: 'I.R. Coelho v. State of Tamil Nadu', year: 2007, citation: '(2007) 2 SCC 1', holding: 'Laws placed in the Ninth Schedule after 24 April 1973 are open to basic structure review.', relevance: 'Ninth Schedule is not absolute immunity.' },
  ],

  bareActPointers: ['Art 368', 'Art 13'],

  examTips: [
    'Open with Article 368 power + procedure.',
    'State Kesavananda basic structure limit immediately.',
    'Add Minerva Mills and Coelho as standard follow-ups.',
    'Separate procedure compliance from substantive basic structure review.',
  ],

}

export default content
