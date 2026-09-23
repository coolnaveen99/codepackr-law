import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 118: voluntarily causing hurt or grievous hurt by dangerous weapons or means. Higher punishment than simple hurt/grievous hurt when the injury is caused by an instrument for shooting, stabbing or cutting, or by fire, heated substance, poison, corrosive substance, explosive, or other dangerous means. Successor structure to IPC ss. 324/326.',
  study: `Section 118 (and related sub-provisions) enhance punishment when hurt or grievous hurt is caused by dangerous weapons or means.\n\nTypical dangerous means: instruments for shooting, stabbing or cutting; fire; heated substance; poison; corrosive substance; explosive; substance deleterious to the human body; or any other means that is dangerous.\n\nThe section sits above simple hurt (s. 115) and simple grievous hurt (s. 117). Intention or knowledge remains required (voluntarily).\n\nCite BNS s. 118 for post-1 July 2024 cases involving dangerous weapons/means.`,
  sections: [
    { id: 's-118-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC ss. 324/326. Aggravated hurt/GH by dangerous weapons or means.'] },
    { id: 's-118-m2', title: 'Dangerous Means', order: 2, content: ['Shooting/stabbing/cutting instruments; fire; heated substance; poison; corrosive; explosive; other dangerous means.'] },
    { id: 's-118-m3', title: 'Ingredients', order: 3, content: ['(1) Hurt or grievous hurt. (2) Caused voluntarily. (3) By a dangerous weapon or means as defined.'] },
    { id: 's-118-m4', title: 'Evidence', order: 4, content: ['Weapon/means used; nature of injury; intention/knowledge.'] },
    { id: 's-118-m5', title: 'Procedure', order: 5, content: ['More serious than simple hurt; forum and bailability per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-118', section: 's. 118', title: 'Voluntarily causing hurt or grievous hurt by dangerous weapons or means' }],
  examples: [
    { id: 's-118-ex1', title: 'Knife injury', illustrationType: 'practical', description: 'A stabs B with a knife causing hurt. Dangerous weapon (stabbing instrument) attracts the enhanced section.' },
    { id: 's-118-ex2', title: 'Bare hands only', illustrationType: 'fail-scenario', description: 'A punches B with bare hands. No dangerous weapon/means; simple hurt (s. 115) applies, not s. 118.' },
  ],
  hypotheticals: [{ id: 's-118-hypo', title: 'Dangerous means', facts: 'Injury caused by acid.', question: 'Is the enhanced section attracted?', applicableLaw: 'BNS s. 118.', analysis: 'Corrosive substance is a classic dangerous means — yes.', conclusion: 's. 118 (or specific acid-attack provisions if any) applies.' }],
  distinctions: [],
  misconceptions: [{ id: 's-118-trap', trap: 'Any weapon makes it s. 118.', correction: 'Only weapons/means of the kinds listed (shooting, stabbing, cutting, fire, poison, corrosive, explosive, etc.). Ordinary objects used without those characteristics may not qualify.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-118-brief', draftingCategory: 'brief', question: 'Explain hurt/grievous hurt by dangerous weapons under BNS s. 118.', answer: 'When hurt or grievous hurt is caused voluntarily by a dangerous weapon or means (shooting/stabbing/cutting instruments, fire, poison, corrosive, explosive, etc.), the enhanced punishment under s. 118 applies.', explanation: 'Short note.' },
    { id: 's-118-sub', draftingCategory: 'submissions', question: 'Submissions on s. 118.', answer: 'I. Hurt/GH caused. II. Dangerous weapon/means. III. Voluntarily. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 118', 'BNS s. 115', 'BNS s. 117', 'IPC ss. 324/326 (historical)'],
  examTips: ['List the categories of dangerous means.', 'Distinguish from simple hurt/GH.'],
  revisionPoints: ['Dangerous weapons/means → enhanced hurt/GH section.', 'Bare hands / ordinary means → simple sections.'],
  relatedTopics: ['s-115', 's-117', 's-100'],
}

export default content
