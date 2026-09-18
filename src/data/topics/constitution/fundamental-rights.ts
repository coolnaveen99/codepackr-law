import type { TopicContent } from '../loadTopicContent'

/**
 * Fundamental Rights
 * Subject: constitution | Topic id: fundamental-rights
 * Part III overview — current through the 106th Amendment (2023).
 */
const content: TopicContent = {

  study: `Article 14 (illustrative Part III text)
“The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.”

Part III (Arts 12–35)
Fundamental Rights are justiciable rights enforceable against the State (Art 12). Key clusters: equality (Arts 14–18), freedoms (Art 19), protection in respect of conviction (Art 20), life and personal liberty (Art 21), education (Art 21A — inserted by 86th Amendment, 2002), protection against arrest (Art 22), religion (Arts 25–28), cultural/educational rights (Arts 29–30), and constitutional remedies (Art 32).

State and enforcement
Article 12 defines “the State”. Article 13 voids inconsistent laws to the extent of inconsistency. Article 32 is itself a Fundamental Right (constitutional remedies).

Later Part III amendments students must not skip
• 86th (2002) — Article 21A (right to education).
• 97th (2011) — “co-operative societies” added to Article 19(1)(c).
• 103rd (2019) — Articles 15(6) and 16(6), 10% EWS reservation; upheld in Janhit Abhiyan (2022).

Exam focus
Map the Part III scheme; distinguish FR (justiciable) from DPSP (Art 37) and Duties (Art 51A); know Art 12/13/32 gateways; do not freeze Part III at the 94th Amendment.`,

  sections: [
    { id: 'fr-scheme', title: 'Part III scheme', order: 1, content: [
      'Fundamental Rights are enforceable against the State as defined in Article 12.',
      'Article 13 voids inconsistent laws to the extent of inconsistency; Article 32 is the guaranteed remedy.',
    ]},
    { id: 'fr-clusters', title: 'Main clusters', order: 2, content: [
      'Equality (Arts 14–18); freedoms (Art 19); Arts 20–22; religion (Arts 25–28); culture/education (Arts 29–30); remedies (Art 32).',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-12', article: 'Article 12', title: 'Definition of the State' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with or in derogation of the Fundamental Rights' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-19', article: 'Article 19', title: 'Protection of certain rights regarding freedom of speech, etc.' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-32', article: 'Article 32', title: 'Remedies for enforcement of rights conferred by this Part' },
  ],

  examples: [
    { id: 'fr-state-example', title: 'State under Art 12', description: 'A government department or local authority acting under statute is typically “the State” for Part III; private parties are not, unless they fall within Art 12’s expanded reading in settled cases.' },
  ],

  questionsAndAnswers: [
    { id: 'fr-qa-1', question: 'What does Article 12 define?', answer: '“The State” for the purposes of Part III.', relatedProvisionIds: ['constitution-article-12'] },
    { id: 'fr-qa-2', question: 'Is Article 32 itself a Fundamental Right?', answer: 'Yes. The right to constitutional remedies under Article 32 is a Fundamental Right.', relatedProvisionIds: ['constitution-article-32'] },
    { id: 'fr-qa-3', question: 'How do Fundamental Rights differ from DPSPs?', answer: 'Fundamental Rights are justiciable; DPSPs are not enforceable by courts (Art 37), though they guide governance.', relatedProvisionIds: ['constitution-article-13'] },
  ],

  relatedTopics: ['Article 14 — Equality', 'Article 19 — Freedoms', 'Article 21 — Life & Personal Liberty', 'Writs (Arts 32 & 226)', 'Directive Principles (DPSP)'],

  cases: [
    { name: 'Maneka Gandhi v. Union of India', year: 1978, citation: '(1978) 1 SCC 248', holding: 'Procedure under Article 21 must be fair, just and reasonable; Arts 14, 19 and 21 are read together.', relevance: 'Cornerstone of modern Part III interpretation.' },
    { name: 'Kesavananda Bharati v. State of Kerala', year: 1973, citation: '(1973) 4 SCC 225', holding: 'Parliament cannot destroy the basic structure; Fundamental Rights form part of the broader constitutional identity protected by that doctrine.', relevance: 'Limits on amendment affecting rights structure.' },
  ],

  bareActPointers: ['Arts 12–35', 'Art 12', 'Art 13', 'Art 32'],

  examTips: [
    'Open with Part III + Art 12 State + Art 32 remedy.',
    'Map equality / freedoms / life-liberty clusters.',
    'Contrast FR (justiciable) with DPSP (Art 37) and Duties (Art 51A).',
    'Cite Maneka for Arts 14–19–21 golden triangle.',
  ],

}

export default content
