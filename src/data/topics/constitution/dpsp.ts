import type { TopicContent } from '../loadTopicContent'

/**
 * Directive Principles (DPSP)
 * Subject: constitution | Topic id: dpsp
 * Part IV — settled black-letter overview.
 */
const content: TopicContent = {

  study: `Bare Act (as modified up to 1 Dec 2007)
Article 37
“The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws.”

Bare Act source note: wording below follows the Ministry of Law and Justice text of the Constitution of India as modified up to 1 December 2007 (through the 94th Amendment). Later amendments are omitted unless separately verified.

Part IV (Arts 36–51)
Directive Principles of State Policy guide the State in making laws. Article 37 says they are not enforceable by any court, but are fundamental in the governance of the country and it shall be the duty of the State to apply them in making laws.

Illustrative principles (non-exhaustive)
• Art 38 — social order for welfare of the people
• Art 39 — adequate means of livelihood, equal pay, etc.
• Art 39A — equal justice and free legal aid
• Art 40 — village panchayats
• Art 41 — right to work, education and public assistance in certain cases
• Art 44 — Uniform Civil Code (directive)
• Art 45 — early childhood care and education
• Art 47 — nutrition, standard of living, public health
• Art 48A — environment
• Art 51 — international peace and treaties

FR and DPSP
Fundamental Rights are justiciable; DPSPs are not. Courts seek harmonious construction (Minerva Mills). Some DPSPs have influenced expansion of Art 21 and legislation (e.g. legal aid, education).

Exam focus
State Art 37 clearly. Give 4–5 examples. Explain non-justiciability and harmony with Part III.`,

  short: `Directive Principles (Part IV, Arts 36–51) are non-justiciable guidelines fundamental to governance (Art 37). They aim at socio-economic justice. Courts seek harmony with Fundamental Rights; they do not enforce DPSPs as if they were Fundamental Rights.`,

  detailed: `Part IV (Arts 36–51) sets Directive Principles. Article 37 makes them non-enforceable by courts but fundamental in governance. Courts seek harmonious construction with Fundamental Rights (Minerva Mills).`,

  sections: [
    { id: 'dpsp-art37', title: 'Article 37 — nature', order: 1, content: [
      'DPSPs are not enforceable by any court.',
      'They are nevertheless fundamental in the governance of the country and the State must apply them in making laws.',
    ]},
    { id: 'dpsp-examples', title: 'Illustrative principles', order: 2, content: [
      'Arts 38, 39, 39A, 40, 41, 44, 45, 47, 48A and 51 are commonly tested examples.',
      'FR are justiciable; DPSPs are not; courts prefer harmonious construction.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-37', article: 'Article 37', title: 'Application of the principles contained in this Part' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-38', article: 'Article 38', title: 'State to secure a social order for the promotion of welfare of the people' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-39', article: 'Article 39', title: 'Certain principles of policy to be followed by the State' },
  ],

  examples: [
    { id: 'dpsp-legal-aid', title: 'Legal aid', description: 'Article 39A (equal justice and free legal aid) has influenced legislation and Art 21 jurisprudence, even though DPSPs are not directly enforceable.' },
  ],

  questionsAndAnswers: [
    { id: 'dpsp-qa-1', question: 'Are Directive Principles enforceable by courts?', answer: 'No. Article 37 says they shall not be enforceable by any court, but they are fundamental in governance.', relatedProvisionIds: ['constitution-article-37'] },
    { id: 'dpsp-qa-2', question: 'What is the duty of the State regarding DPSPs?', answer: 'It shall be the duty of the State to apply these principles in making laws (Art 37).', relatedProvisionIds: ['constitution-article-37'] },
    { id: 'dpsp-qa-3', question: 'How do courts treat conflict between FR and DPSP?', answer: 'They seek harmonious construction; Minerva Mills is the leading authority for balance between Part III and Part IV.', relatedProvisionIds: ['constitution-article-37'] },
  ],

  relatedTopics: ['Fundamental Rights', 'Fundamental Duties', 'Basic Structure Doctrine', 'Preamble'],

  cases: [
    { name: 'Minerva Mills Ltd. v. Union of India', year: 1980, citation: '(1980) 3 SCC 625', holding: 'Harmony between Fundamental Rights and Directive Principles is a basic feature; giving absolute primacy to either destroys the Constitution’s balance.', relevance: 'Leading authority on FR–DPSP relationship.' },
  ],

  bareActPointers: ['Art 37', 'Arts 36–51', 'Art 38', 'Art 39', 'Art 39A'],

  examTips: [
    'Quote Article 37 on non-enforceability + duty to apply in making laws.',
    'List 4–5 illustrative DPSPs.',
    'Cite Minerva Mills for harmonious construction.',
    'Distinguish clearly from Fundamental Rights and Fundamental Duties.',
  ],

}

export default content
