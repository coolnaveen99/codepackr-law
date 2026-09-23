import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 117: voluntarily causing grievous hurt. Whoever voluntarily causes grievous hurt shall be punished with imprisonment up to the statutory term and/or fine (higher for dangerous weapons / public servant cases). Grievous hurt is defined by a closed list (emasculation, permanent loss of sight/hearing, privation of member/joint, permanent disfiguration, fracture/dislocation, and hurt endangering life or causing severe bodily pain for the statutory period). Successor to IPC s. 325.',
  study: `Section 117 is the principal punishment section for voluntarily causing grievous hurt.\n\nGrievous hurt (definitional section) is a closed list, including:\n• Emasculation\n• Permanent privation of the sight of either eye\n• Permanent privation of the hearing of either ear\n• Privation of any member or joint\n• Destruction or permanent impairing of the powers of any member or joint\n• Permanent disfiguration of the head or face\n• Fracture or dislocation of a bone or tooth\n• Any hurt which endangers life or which causes the sufferer to be during the space of twenty days in severe bodily pain or unable to follow his ordinary pursuits\n\nVoluntarily = intention to cause grievous hurt, or knowledge that grievous hurt is likely.\n\nCite BNS s. 117 for post-1 July 2024 grievous-hurt cases. Aggravated forms (dangerous weapon, etc.) have higher sections.`,
  sections: [
    { id: 's-117-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 325. Voluntarily causing grievous hurt.'] },
    { id: 's-117-m2', title: 'Grievous Hurt List', order: 2, content: ['Closed statutory list: emasculation; permanent loss of sight/hearing; privation/impairing of member/joint; permanent disfiguration; fracture/dislocation; hurt endangering life or 20-day severe pain/inability.'] },
    { id: 's-117-m3', title: 'Ingredients', order: 3, content: ['(1) Grievous hurt as defined. (2) Caused by the accused. (3) Voluntarily (intention or knowledge of likelihood of grievous hurt).'] },
    { id: 's-117-m4', title: 'Evidence', order: 4, content: ['Medical evidence is usually essential to establish the grievous category; intention/knowledge inferred from weapons, force, and target.'] },
    { id: 's-117-m5', title: 'Procedure', order: 5, content: ['Forum and bailability as per BNSS Schedule; often more serious than simple hurt.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-117', section: 's. 117', title: 'Voluntarily causing grievous hurt' }],
  examples: [
    { id: 's-117-ex1', title: 'Fracture', illustrationType: 'practical', description: 'A intentionally breaks B’s arm. Fracture is within the grievous-hurt list; s. 117 applies.' },
    { id: 's-117-ex2', title: 'Simple bruise only', illustrationType: 'fail-scenario', description: 'A bruise without fracture, permanent injury, or 20-day severe pain is simple hurt (s. 115), not grievous hurt.' },
  ],
  hypotheticals: [{ id: 's-117-hypo', title: 'Grievous category', facts: 'Injury causes permanent disfiguration of the face.', question: 'Is it grievous hurt?', applicableLaw: 'BNS grievous-hurt definition; s. 117.', analysis: 'Permanent disfiguration of the head or face is within the list.', conclusion: 'Grievous hurt; s. 117 (or aggravated section if applicable).' }],
  distinctions: [],
  misconceptions: [{ id: 's-117-trap', trap: 'Any serious-looking injury is grievous hurt.', correction: 'Only the closed statutory list. Pain and bruising alone, without meeting a listed category, remain simple hurt.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-117-brief', draftingCategory: 'brief', question: 'What is grievous hurt and how is it punished under BNS s. 117?', answer: 'Grievous hurt is defined by a closed list (emasculation, permanent loss of sight/hearing, privation of member/joint, permanent disfiguration, fracture/dislocation, and hurt endangering life or causing 20-day severe pain/inability). Voluntarily causing it is punished under s. 117 (and higher sections for aggravated forms).', explanation: 'Short note.' },
    { id: 's-117-sub', draftingCategory: 'submissions', question: 'Submissions on s. 117.', answer: 'I. Injury within grievous list. II. Caused voluntarily. III. Punishment scale. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 117', 'BNS grievous-hurt definition', 'BNS s. 115', 'IPC ss. 320, 325 (historical)'],
  examTips: ['Memorise the closed list of grievous hurt.', 'Do not expand it by analogy.'],
  revisionPoints: ['Closed list for grievous hurt.', 'Voluntarily = intention or knowledge of likelihood of GH.', 's. 117 base; higher sections for weapons/public servant etc.'],
  relatedTopics: ['s-115', 's-100', 's-101'],
}

export default content
