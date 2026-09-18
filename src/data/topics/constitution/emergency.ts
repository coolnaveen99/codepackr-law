import type { TopicContent } from '../loadTopicContent'

/**
 * Emergency Provisions
 * Subject: constitution | Topic id: emergency
 * Arts 352, 356, 360 — settled framework only.
 */
const content: TopicContent = {

  study: `Article 352(1)
“If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion, he may, by Proclamation, make a declaration to that effect.”

Three emergencies
• National Emergency — Article 352 (war, external aggression, or armed rebellion; “internal disturbance” language was narrowed after the 44th Amendment).
• State Emergency / President’s Rule — Article 356 (failure of constitutional machinery in a State).
• Financial Emergency — Article 360.

Effects (high level)
National emergency can affect Centre–State distribution and, subject to constitutional limits (especially after the 44th Amendment), the operation of certain Fundamental Rights (Arts 358–359 scheme). Article 356 allows assumption of State functions by the Union on the prescribed satisfaction and parliamentary controls. Article 360 addresses financial stability directions.

Judicial check on Art 356
S.R. Bommai held that Art 356 power is not absolute; the material for proclamation is open to limited judicial review, and floor tests may be relevant; secularism is part of basic structure.

Exam focus
Name three emergencies with Articles. Note 44th Amendment safeguards for Art 352. Cite Bommai for Art 356 review.`,

  sections: [
    { id: 'emergency-types', title: 'Three types', order: 1, content: [
      'Article 352 — Proclamation of Emergency (national).',
      'Article 356 — failure of constitutional machinery in a State (President’s Rule).',
      'Article 360 — Financial Emergency.',
    ]},
    { id: 'emergency-bommai', title: 'Article 356 and judicial review', order: 2, content: [
      'S.R. Bommai holds that Article 356 is not immune from judicial review.',
      'Secularism is part of the basic structure and relevant to constitutional machinery analysis.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-352', article: 'Article 352', title: 'Proclamation of Emergency' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-356', article: 'Article 356', title: 'Provisions in case of failure of constitutional machinery in States' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-360', article: 'Article 360', title: 'Provisions as to financial emergency' },
  ],

  examples: [
    { id: 'emergency-356-example', title: 'President’s Rule challenge', description: 'If a State Ministry is dismissed and Art 356 is proclaimed without materials showing constitutional breakdown, Bommai supports limited judicial scrutiny of that proclamation.' },
  ],

  questionsAndAnswers: [
    { id: 'emergency-qa-1', question: 'Name the three emergency provisions and their Articles.', answer: 'National emergency — Article 352; President’s Rule — Article 356; Financial emergency — Article 360.', relatedProvisionIds: ['constitution-article-352','constitution-article-356','constitution-article-360'] },
    { id: 'emergency-qa-2', question: 'What is the leading case on judicial review of Article 356?', answer: 'S.R. Bommai v. Union of India (1994).', relatedProvisionIds: ['constitution-article-356'] },
    { id: 'emergency-qa-3', question: 'Did the 44th Amendment affect Article 352?', answer: 'Yes. It strengthened safeguards, including refining the grounds and parliamentary/approval controls associated with national emergency.', relatedProvisionIds: ['constitution-article-352'] },
  ],

  relatedTopics: ['Centre–State Relations', 'Basic Structure Doctrine', 'Fundamental Rights'],

  cases: [
    { name: 'S.R. Bommai v. Union of India', year: 1994, citation: '(1994) 3 SCC 1', holding: 'Article 356 proclamations are subject to limited judicial review; secularism is part of the basic structure.', relevance: 'Leading authority on President’s Rule and federalism.' },
  ],

  bareActPointers: ['Art 352', 'Art 356', 'Art 360', 'Arts 358–359'],

  examTips: [
    'Always list Arts 352, 356, 360.',
    'Mention 44th Amendment safeguards for national emergency.',
    'Cite Bommai for Art 356 judicial review.',
    'Keep FR suspension discussion tied to Arts 358–359 at a high level unless the question demands detail.',
  ],

}

export default content
