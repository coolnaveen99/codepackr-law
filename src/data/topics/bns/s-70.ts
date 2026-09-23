import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 70: gang rape — where a woman is raped by one or more persons constituting a group or acting in furtherance of a common intention, each is deemed to have committed the offence of rape and is punished with the higher scale provided (minimum term up to life / death as per the text for specified cases). Successor structure to IPC s. 376D. Common intention and group participation are central.',
  study: `Section 70 is the gang-rape provision.\n\nCore idea: where a woman is raped by one or more persons constituting a group or acting in furtherance of a common intention, each of those persons is deemed to have committed the offence of rape and is liable to the enhanced punishment stated in the section.\n\nKey points\n• Group or common intention.\n• Each participant is deemed to have committed rape (even if not every participant performed the sexual act).\n• Punishment is higher than base s. 64 (minimum terms; life or death in the circumstances specified in the text).\n\nRead with the definition of rape, s. 28 (consent), and s. 3(5) (common intention). Cite BNS s. 70 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-70-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 376D. Enhanced liability for group/common-intention rape.'] },
    { id: 's-70-m2', title: 'Elements', order: 2, content: ['Rape of a woman; by one or more persons constituting a group or acting in furtherance of common intention; each deemed to have committed rape.'] },
    { id: 's-70-m3', title: 'Ingredients', order: 3, content: ['(1) Rape as defined. (2) Group or common intention. (3) Participation of the accused in the group/common design.'] },
    { id: 's-70-m4', title: 'Evidence', order: 4, content: ['Sexual act; number and roles of participants; common intention; identity.'] },
    { id: 's-70-m5', title: 'Procedure', order: 5, content: ['Sessions trial; BNSS victim protections; enhanced minimum sentences.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-70', section: 's. 70', title: 'Gang rape' }],
  examples: [
    { id: 's-70-ex1', title: 'Group rape', illustrationType: 'practical', description: 'Three persons acting in furtherance of common intention rape a woman. Each is liable under s. 70 even if only one performed the sexual act.' },
    { id: 's-70-ex2', title: 'Single offender', illustrationType: 'fail-scenario', description: 'A single person commits rape without group or common intention with others. Base s. 64 (or aggravated individual sections) applies, not s. 70.' },
  ],
  hypotheticals: [{ id: 's-70-hypo', title: 'Common intention gang rape', facts: 'Four persons plan and one performs the act while others assist.', question: 'Are the assistants liable under s. 70?', applicableLaw: 'BNS s. 70; s. 3(5).', analysis: 'If they constitute a group or act in furtherance of common intention — yes; each is deemed to have committed rape.', conclusion: 's. 70 attracted for all participants.' }],
  distinctions: [],
  misconceptions: [{ id: 's-70-trap', trap: 'Only the person who performed the sexual act is liable for gang rape.', correction: 'Each person constituting the group or acting in furtherance of common intention is deemed to have committed rape and is liable under s. 70.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-70-brief', draftingCategory: 'brief', question: 'Explain gang rape under BNS s. 70.', answer: 'Where a woman is raped by one or more persons constituting a group or acting in furtherance of a common intention, each is deemed to have committed rape and is punished under the enhanced scale of s. 70. Participation in the group/common design is enough; every participant need not have performed the sexual act.', explanation: 'Short note.' },
    { id: 's-70-sub', draftingCategory: 'submissions', question: 'Submissions on s. 70.', answer: 'I. Rape as defined. II. Group or common intention. III. Participation of the accused. IV. Enhanced punishment. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 70', 'BNS s. 64', 'BNS s. 3(5)', 'BNS s. 28', 'IPC s. 376D (historical)'],
  examTips: ['Stress that each participant is deemed to have committed rape.', 'Link to common intention (s. 3(5)).'],
  revisionPoints: ['Group or common intention + rape → each deemed to have committed rape.', 'Enhanced minimum punishment.', 'Not limited to the person who performed the act.'],
  relatedTopics: ['s-64', 's-63', 's-3', 's-28'],
}

export default content
