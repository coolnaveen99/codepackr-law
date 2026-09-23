import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 36: when an act which would otherwise be an offence is not an offence by reason of the youth, want of maturity of understanding, unsoundness of mind, or intoxication of the person doing it, every person has the same right of private defence against that act which he would have if the act were an offence. Successor to IPC s. 98.',
  study: `Section 36 extends private defence against acts of children, persons of unsound mind, and the intoxicated.\n\nRule: When an act which would otherwise be a certain offence is not that offence by reason of the youth, want of maturity, unsoundness of mind, or intoxication of the doer, every person has the same right of private defence against that act which he would have if the act were that offence.\n\nEffect: you may defend yourself against a violent child or a person of unsound mind as if the act were a full offence. Cite BNS s. 36 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-36-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 98. Private defence against acts of children / unsound mind / intoxicated.'] },
    { id: 's-36-m2', title: 'Text', order: 2, content: ['Act that would be an offence but for youth / immaturity / unsound mind / intoxication → same right of private defence as if it were the offence.'] },
    { id: 's-36-m3', title: 'Ingredients', order: 3, content: ['Act that would be an offence but for the incapacity of the doer; defensive response as if it were that offence.'] },
    { id: 's-36-m4', title: 'Evidence', order: 4, content: ['Nature of the act; incapacity of the doer; defensive character of the response.'] },
    { id: 's-36-m5', title: 'Procedure', order: 5, content: ['Read with ss. 34–44 for the full private-defence analysis.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-36', section: 's. 36', title: 'Right of private defence against act of a person of unsound mind, etc' }],
  examples: [
    { id: 's-36-ex1', title: 'Defence against violent child', illustrationType: 'practical', description: 'A child under seven attacks A with a knife. Though the child’s act is not an offence (s. 20), A has the same right of private defence under s. 36 as if it were an offence.' },
    { id: 's-36-ex2', title: 'Unsound mind attacker', illustrationType: 'practical', description: 'A person of unsound mind assaults B. B may exercise private defence under s. 36 as if the assault were a full offence.' },
  ],
  hypotheticals: [{ id: 's-36-hypo', title: 'Defence against incapable attacker', facts: 'Person of unsound mind attacks with a weapon.', question: 'May the victim use private defence?', applicableLaw: 'BNS s. 36 read with ss. 34–38.', analysis: 'Yes — same right as if the act were an offence.', conclusion: 'Private defence available within the usual limits.' }],
  distinctions: [],
  misconceptions: [{ id: 's-36-trap', trap: 'You cannot defend against a child or a person of unsound mind because their act is not an offence.', correction: 's. 36 expressly gives the same right of private defence as if the act were an offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-36-brief', draftingCategory: 'brief', question: 'Explain BNS s. 36.', answer: 'When an act would be an offence but for the youth, immaturity, unsoundness of mind or intoxication of the doer, every person has the same right of private defence against that act as if it were the offence.', explanation: 'Short note.' },
    { id: 's-36-sub', draftingCategory: 'submissions', question: 'Submissions on s. 36.', answer: 'I. Act would be an offence but for incapacity. II. Same PD right. III. Extent under ss. 38–44. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 36', 'BNS s. 34', 'BNS ss. 20–24', 'IPC s. 98 (historical)'],
  examTips: ['Important when the attacker is a child or of unsound mind.'],
  revisionPoints: ['Same private-defence right against acts of children / unsound mind / intoxicated as if the act were an offence.'],
  relatedTopics: ['s-34', 's-20', 's-22', 's-23'],
}

export default content
