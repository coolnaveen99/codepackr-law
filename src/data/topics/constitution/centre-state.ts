import type { TopicContent } from '../loadTopicContent'

/**
 * Centre–State Relations
 * Subject: constitution | Topic id: centre-state
 * Legislative / administrative / financial — black-letter map.
 */
const content: TopicContent = {

  study: `Bare Act (as modified up to 1 Dec 2007)
Article 246 (legislative allocation)
“Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I (Union List) of the Seventh Schedule; States with respect to List II (State List); and both with respect to List III (Concurrent List), subject to Art 246.”

Bare Act source note: wording below follows the Ministry of Law and Justice text of the Constitution of India as modified up to 1 December 2007 (through the 94th Amendment). Later amendments are omitted unless separately verified.

Three strands
Centre–State relations are commonly studied under legislative, administrative and financial heads.

Legislative relations
Articles 245–255 and the Seventh Schedule distribute legislative power among Union, State and Concurrent Lists. Article 246 is the key allocation provision. Doctrines such as pith and substance, colourable legislation, and repugnancy (Art 254) are tested here.

Administrative relations
Articles 256–263 deal with obligation of States and the Union, control of the Union over States in certain cases, and related administrative arrangements (including Art 263 Council of States / Inter-State Council themes in syllabus shorthand).

Financial relations
Articles 268–293 cover distribution of revenues, grants, and related fiscal arrangements. Finance Commission (Art 280) is a standard exam point.

Emergency overlay
During national emergency, the federal balance can temporarily shift (Arts 352–360), but that is studied mainly under Emergency Provisions.

Exam focus
Map the three strands; cite Art 246 + Seventh Schedule for legislation; Art 254 for repugnancy; name Finance Commission.`,

  short: `Centre–State relations cover legislative (Arts 245–255, Seventh Schedule), administrative (Arts 256–263), and financial (Arts 268–293, Finance Commission) distribution of power. Key tools include pith and substance, colourable legislation, and Art 254 repugnancy.`,

  detailed: `Three strands: legislative (Arts 245–255; Seventh Schedule; Art 246), administrative (Arts 256–263), and financial (Arts 268–293; Art 280 Finance Commission). Related doctrines: pith and substance, colourable legislation, repugnancy under Article 254.`,

  sections: [
    { id: 'csr-legislative', title: 'Legislative relations', order: 1, content: [
      'Articles 245–255 and the Seventh Schedule distribute Union, State and Concurrent legislative power.',
      'Article 246 is the principal allocation clause; Article 254 addresses repugnancy in the Concurrent field.',
    ]},
    { id: 'csr-admin-finance', title: 'Administrative and financial relations', order: 2, content: [
      'Administrative relations are mainly in Articles 256–263.',
      'Financial relations and the Finance Commission are chiefly in Articles 268–293 and Article 280.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-246', article: 'Article 246', title: 'Subject-matter of laws made by Parliament and by the Legislatures of States' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-254', article: 'Article 254', title: 'Inconsistency between laws made by Parliament and laws made by the Legislatures of States' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-280', article: 'Article 280', title: 'Finance Commission' },
  ],

  examples: [
    { id: 'csr-list-example', title: 'List entry dispute', description: 'If a State law is challenged as trespassing on a Union List entry, courts apply pith and substance: if the true nature of the law falls within State competence, incidental encroachment may be tolerated.' },
  ],

  questionsAndAnswers: [
    { id: 'csr-qa-1', question: 'Which provision primarily distributes legislative subjects between Union and States?', answer: 'Article 246, read with the Seventh Schedule.', relatedProvisionIds: ['constitution-article-246'] },
    { id: 'csr-qa-2', question: 'What does Article 254 mainly deal with?', answer: 'Repugnancy / inconsistency between Union and State laws in the Concurrent field.', relatedProvisionIds: ['constitution-article-254'] },
    { id: 'csr-qa-3', question: 'Which Article provides for the Finance Commission?', answer: 'Article 280.', relatedProvisionIds: ['constitution-article-280'] },
  ],

  relatedTopics: ['Doctrine of Pith and Substance', 'Doctrine of Colourable Legislation', 'Emergency Provisions', 'Amendment of the Constitution'],

  cases: [
    { name: 'Prafulla Kumar Mukherjee v. Bank of Commerce', year: 1947, citation: 'AIR 1947 PC 60', holding: 'Pith and substance determines legislative competence; incidental encroachment does not invalidate the law.', relevance: 'Classic authority still used for Centre–State list conflicts.' },
    { name: 'State of Bombay v. F.N. Balsara', year: 1951, citation: 'AIR 1951 SC 318', holding: 'Applied pith and substance to legislative competence over prohibition-related measures.', relevance: 'Early Supreme Court application in federal list disputes.' },
  ],

  bareActPointers: ['Art 246', 'Art 254', 'Seventh Schedule', 'Art 280'],

  examTips: [
    'Structure answers as legislative / administrative / financial.',
    'Cite Art 246 + Seventh Schedule and Art 254 for concurrent repugnancy.',
    'Name Finance Commission (Art 280).',
    'Cross-link pith and substance / colourable legislation doctrines.',
  ],

}

export default content
