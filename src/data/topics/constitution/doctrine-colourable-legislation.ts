import type { TopicContent } from '../loadTopicContent'

/**
 * Doctrine of Colourable Legislation
 * Subject: constitution | Topic id: doctrine-colourable-legislation
 * Cannot do indirectly what cannot be done directly.
 */
const content: TopicContent = {

  study: `Bare Act (as modified up to 1 Dec 2007)
Article 246 (competence setting)
“Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I (Union List) of the Seventh Schedule; States with respect to List II (State List); and both with respect to List III (Concurrent List), subject to Art 246.”

Bare Act source note: wording below follows the Ministry of Law and Justice text of the Constitution of India as modified up to 1 December 2007 (through the 94th Amendment). Later amendments are omitted unless separately verified.

Core idea
Colourable legislation means that if a legislature lacks competence to enact a law directly, it cannot achieve the same result indirectly by clever drafting. The court looks at the substance of the law, not merely its form or label.

Competence setting
The doctrine operates in the field of legislative competence (Seventh Schedule / Articles 245–246). It is related to, but distinct from, pith and substance: pith and substance asks what the law truly is; colourability asks whether form is being used as a disguise for lack of power.

Exam focus
One-line maxim: you cannot do indirectly what you cannot do directly. Apply to list-entry competence. Distinguish from pith and substance and from repugnancy (Art 254).`,

  short: `Colourable legislation: a legislature cannot achieve an incompetent end by indirect means. Courts examine substance over form. Distinct from pith and substance and from Art 254 repugnancy.`,

  detailed: `The doctrine of colourable legislation prevents a legislature from achieving by indirect means what it cannot do directly for want of competence. Substance prevails over form. It is commonly tested with Seventh Schedule disputes and should be distinguished from pith and substance and from repugnancy under Article 254.`,

  sections: [
    { id: 'colourable-meaning', title: 'Meaning', order: 1, content: [
      'If legislative competence is lacking, the same result cannot be achieved by a disguised or indirect device.',
      'Courts look at the substance of the enactment, not only its label.',
    ]},
    { id: 'colourable-distinguish', title: 'Distinguish related doctrines', order: 2, content: [
      'Pith and substance — identifies the true nature of the law for competence.',
      'Repugnancy (Art 254) — inconsistency in the Concurrent field, not a disguise-of-competence doctrine.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-246', article: 'Article 246', title: 'Subject-matter of laws made by Parliament and by the Legislatures of States' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-seventh-schedule', title: 'Seventh Schedule — Union, State and Concurrent Lists' },
  ],

  examples: [
    { id: 'colourable-example', title: 'Disguised competence', description: 'If a State labels a law as a tax within its list, but the substance is a forbidden regulation of a Union subject, the law may be condemned as colourable.' },
  ],

  questionsAndAnswers: [
    { id: 'colourable-qa-1', question: 'State the maxim of colourable legislation.', answer: 'You cannot do indirectly what you cannot do directly.', relatedProvisionIds: ['constitution-article-246'] },
    { id: 'colourable-qa-2', question: 'What do courts examine under this doctrine?', answer: 'The substance of the law rather than its mere form or label.', relatedProvisionIds: ['constitution-article-246'] },
    { id: 'colourable-qa-3', question: 'How does colourable legislation differ from pith and substance?', answer: 'Pith and substance identifies the true nature of a law for competence; colourability asks whether form is a disguise for lack of power.', relatedProvisionIds: ['constitution-article-246'] },
  ],

  relatedTopics: ['Doctrine of Pith and Substance', 'Centre–State Relations', 'Amendment of the Constitution'],

  cases: [
    { name: 'K.C. Gajapati Narayan Deo v. State of Orissa', year: 1953, citation: 'AIR 1953 SC 375', holding: 'Colourable legislation means that what cannot be done directly cannot be done indirectly; substance of the law prevails over form.', relevance: 'Standard Supreme Court exposition of the doctrine.' },
  ],

  bareActPointers: ['Art 246', 'Seventh Schedule'],

  examTips: [
    'Write the maxim first.',
    'Tie the answer to legislative competence / lists.',
    'Distinguish pith and substance and Art 254 repugnancy.',
    'Cite Gajapati Narayan Deo if a case is demanded.',
  ],

}

export default content
