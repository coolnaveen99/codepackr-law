import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 120 (and related): voluntarily causing hurt or grievous hurt to extort property or to constrain to an illegal act — enhanced punishment when hurt/GH is caused in order to commit extortion or to constrain the victim to do something illegal. Successor structure to IPC ss. 327/329. Links the hurt scheme with extortion.',
  study: `Hurt/GH for the purpose of extortion or illegal constraint under the BNS:\n\nWhoever voluntarily causes hurt (or grievous hurt) for the purpose of extorting from the sufferer, or from any person interested in the sufferer, any property or valuable security, or of constraining the sufferer or any person interested to do anything illegal or to give any information useful for the commission of an offence, is punished more severely than for simple hurt/GH.\n\nKey points\n• Hurt or grievous hurt caused voluntarily.\n• Purpose: extortion of property/valuable security, or constraint to illegal act / information for an offence.\n• Enhanced scale above base s. 115 / s. 117.\n\nCite the applicable BNS section for post-1 July 2024 acts. Often charged with extortion (s. 308) and robbery (s. 309) where the facts fit.`,
  sections: [
    { id: 's-120-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC ss. 327/329. Hurt/GH to extort or constrain.'] },
    { id: 's-120-m2', title: 'Elements', order: 2, content: ['Voluntarily causes hurt or GH; purpose of extorting property/valuable security or constraining to illegal act/information for offence.'] },
    { id: 's-120-m3', title: 'Ingredients', order: 3, content: ['(1) Hurt or GH. (2) Caused voluntarily. (3) Specified extortionary or constraining purpose.'] },
    { id: 's-120-m4', title: 'Evidence', order: 4, content: ['Injury; intention/knowledge; purpose (demand for property, constraint).'] },
    { id: 's-120-m5', title: 'Procedure', order: 5, content: ['May be joined with extortion/robbery; forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-120', section: 's. 120', title: 'Voluntarily causing hurt/GH to extort property or constrain to illegal act' }],
  examples: [
    { id: 's-120-ex1', title: 'Hurt to extort', illustrationType: 'practical', description: 'A causes hurt to B in order to force B to hand over a phone. The enhanced hurt-to-extort section is attracted (and extortion/robbery may also apply).' },
    { id: 's-120-ex2', title: 'Simple hurt only', illustrationType: 'fail-scenario', description: 'A causes hurt in a quarrel with no extortionary purpose. Base hurt section (s. 115) applies, not the extort/constrain enhancement.' },
  ],
  hypotheticals: [{ id: 's-120-hypo', title: 'Hurt for extortion', facts: 'Accused beats the victim to compel payment of a claimed debt.', question: 'Enhanced section?', applicableLaw: 'BNS hurt-to-extort provisions; s. 308.', analysis: 'Hurt + purpose of extorting property — yes; also consider extortion.', conclusion: 'Enhanced section and possibly extortion attracted.' }],
  distinctions: [],
  misconceptions: [{ id: 's-120-trap', trap: 'Every hurt during a robbery is only robbery.', correction: 'Hurt caused to extort or constrain can attract this enhanced section in addition to (or in appropriate cases instead of framing only) robbery/extortion — plead the specific ingredients.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-120-brief', draftingCategory: 'brief', question: 'Explain hurt caused to extort or constrain under the BNS.', answer: 'Voluntarily causing hurt or grievous hurt for the purpose of extorting property or valuable security, or of constraining a person to do something illegal or to give information useful for an offence, is punished more severely than simple hurt/GH. Often overlaps with extortion and robbery on the facts.', explanation: 'Short note.' },
    { id: 's-120-sub', draftingCategory: 'submissions', question: 'Submissions on hurt to extort.', answer: 'I. Hurt/GH caused. II. Extortionary or constraining purpose. III. Related extortion/robbery. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS hurt-to-extort provisions', 'BNS s. 115', 'BNS s. 117', 'BNS s. 308', 'BNS s. 309', 'IPC ss. 327/329 (historical)'],
  examTips: ['Link to extortion and robbery when property is demanded under force.', 'State the purpose element clearly.'],
  revisionPoints: ['Hurt/GH + purpose to extort or constrain = enhanced section.', 'Overlaps with extortion/robbery.', 'Purpose is the key extra ingredient.'],
  relatedTopics: ['s-115', 's-117', 's-308', 's-309'],
}

export default content
