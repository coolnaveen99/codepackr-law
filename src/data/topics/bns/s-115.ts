import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 115: voluntarily causing hurt. Whoever voluntarily causes hurt shall be punished with imprisonment up to the statutory term and/or fine. “Hurt” means bodily pain, disease or infirmity (s. 114 definition pathway). Successor to IPC s. 323. Grievous hurt is a higher species (s. 116/117).',
  study: `Section 115 is the basic offence of voluntarily causing hurt.\n\nHurt (definitional section): bodily pain, disease or infirmity.\n\nVoluntarily: the act is done with the intention of causing hurt, or with knowledge that it is likely to cause hurt.\n\nPunishment: imprisonment of either description for a term which may extend to the period stated in the section, or with fine, or both.\n\nAggravated forms (hurt by dangerous weapons, hurt to deter public servant, etc.) have higher punishments in subsequent sections. Grievous hurt is defined separately and punished under higher sections.\n\nCite BNS s. 115 for post-1 July 2024 simple hurt cases.`,
  sections: [
    { id: 's-115-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 323. Basic voluntarily causing hurt.'] },
    { id: 's-115-m2', title: 'Textual Elements', order: 2, content: ['Voluntarily causes hurt; punishment on the statutory scale.'] },
    { id: 's-115-m3', title: 'Ingredients', order: 3, content: ['(1) Hurt (bodily pain, disease or infirmity). (2) Caused by the accused. (3) Voluntarily (intention or knowledge of likelihood).'] },
    { id: 's-115-m4', title: 'Evidence', order: 4, content: ['Injury; causation; intention or knowledge. Medical evidence is usual but not always essential for simple hurt.'] },
    { id: 's-115-m5', title: 'Procedure', order: 5, content: ['Often compoundable and bailable as per BNSS Schedule for simple hurt; check current schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-115', section: 's. 115', title: 'Voluntarily causing hurt' }],
  examples: [
    { id: 's-115-ex1', title: 'Simple hurt', illustrationType: 'practical', description: 'A punches B, causing pain and a bruise. Voluntarily causing hurt under s. 115.' },
    { id: 's-115-ex2', title: 'Grievous hurt instead', illustrationType: 'fail-scenario', description: 'If the injury is a permanent loss of sight or other grievous category, charge under the grievous-hurt sections, not s. 115 alone.' },
  ],
  hypotheticals: [{ id: 's-115-hypo', title: 'Hurt vs grievous hurt', facts: 'A causes a simple fracture that does not meet the statutory grievous-hurt list.', question: 'Which section?', applicableLaw: 'BNS s. 115; grievous-hurt definition.', analysis: 'If not within the grievous-hurt definition, s. 115 applies.', conclusion: 's. 115.' }],
  distinctions: [{ id: 's-115-dist', title: 'Hurt vs Grievous hurt', left: 'Hurt (s. 115)', right: 'Grievous hurt (higher sections)', rows: [{ point: 'Definition', left: 'Bodily pain, disease or infirmity', right: 'Statutory list (emasculation, permanent loss of sight/hearing, etc.)' }] }],
  misconceptions: [{ id: 's-115-trap', trap: 'Any injury is grievous hurt.', correction: 'Only the categories listed in the grievous-hurt definition. Ordinary pain/bruising is simple hurt under s. 115.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-115-brief', draftingCategory: 'brief', question: 'Explain voluntarily causing hurt under BNS s. 115.', answer: 'Whoever voluntarily causes hurt (bodily pain, disease or infirmity) is punished under s. 115. “Voluntarily” means intention to cause hurt or knowledge that hurt is likely. Grievous hurt is a higher, separately defined offence.', explanation: 'Short note.' },
    { id: 's-115-sub', draftingCategory: 'submissions', question: 'Submissions on s. 115.', answer: 'I. Hurt caused. II. Voluntarily. III. Not grievous. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 115', 'BNS hurt / grievous-hurt definitional sections', 'IPC s. 323 (historical)'],
  examTips: ['Always check whether the injury is “hurt” or “grievous hurt” before selecting the section.'],
  revisionPoints: ['Hurt = bodily pain, disease or infirmity.', 'Voluntarily = intention or knowledge of likelihood.', 'Grievous hurt is a higher category.'],
  relatedTopics: ['s-116', 's-117', 's-100'],
}

export default content
