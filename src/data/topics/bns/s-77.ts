import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 77: stalking — a man who follows a woman and contacts, or attempts to contact, her repeatedly despite a clear indication of disinterest, or monitors her use of the internet/email/communication, commits stalking (subject to exceptions such as prevention/detection of crime, compliance with law, or reasonable conduct). Successor structure to IPC s. 354D.',
  study: `Stalking under the BNS:\n\nA man commits stalking if he:\n• follows a woman and contacts, or attempts to contact, such woman to foster personal interaction repeatedly despite a clear indication of disinterest by such woman; or\n• monitors the use by a woman of the internet, email, or any other form of electronic communication.\n\nExceptions typically include conduct for prevention or detection of crime authorised by law, compliance with a legal condition, or other reasonable conduct as specified.\n\nFirst conviction and subsequent convictions may carry different maxima.\n\nCite the applicable BNS section for post-1 July 2024 acts. Distinguish from sexual harassment (s. 75) and from criminal intimidation (s. 351).`,
  sections: [
    { id: 's-77-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 354D. Repeated contact despite disinterest, or monitoring of electronic communication.'] },
    { id: 's-77-m2', title: 'Two Limbs', order: 2, content: ['(1) Following and repeated contact/attempt to contact despite clear disinterest. (2) Monitoring internet/email/electronic communication.'] },
    { id: 's-77-m3', title: 'Ingredients', order: 3, content: ['(1) Conduct within a limb. (2) Clear indication of disinterest (for the follow/contact limb). (3) No exception applies.'] },
    { id: 's-77-m4', title: 'Evidence', order: 4, content: ['Pattern of following/contact; indication of disinterest; electronic monitoring evidence; identity.'] },
    { id: 's-77-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; subsequent conviction may attract higher punishment.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-77', section: 's. 77', title: 'Stalking' }],
  examples: [
    { id: 's-77-ex1', title: 'Repeated contact despite disinterest', illustrationType: 'practical', description: 'A repeatedly messages and follows B after B has clearly indicated she does not want contact. Stalking is made out.' },
    { id: 's-77-ex2', title: 'Authorised monitoring', illustrationType: 'fail-scenario', description: 'Lawful monitoring by an authorised officer for prevention of crime falls within an exception and is not stalking.' },
  ],
  hypotheticals: [{ id: 's-77-hypo', title: 'Electronic monitoring', facts: 'Accused secretly monitors a woman’s email and social media without authority.', question: 'Is stalking made out?', applicableLaw: 'BNS stalking provisions.', analysis: 'Monitoring electronic communication is a listed limb; absent an exception — yes.', conclusion: 'Stalking established.' }],
  distinctions: [{ id: 's-77-dist', title: 'Stalking vs Sexual harassment vs Criminal intimidation', left: 'Stalking', right: 'Sexual harassment / Criminal intimidation', rows: [{ point: 'Focus', left: 'Repeated contact despite disinterest, or electronic monitoring', right: 'Listed sexual-harassment limbs / threat of injury to alarm or compel' }] }],
  misconceptions: [{ id: 's-77-trap', trap: 'One unwanted message is stalking.', correction: 'The follow/contact limb requires repeated contact or attempts despite a clear indication of disinterest. A single contact is generally not enough.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-77-brief', draftingCategory: 'brief', question: 'Define stalking under the BNS.', answer: 'A man commits stalking if he follows a woman and contacts or attempts to contact her repeatedly despite a clear indication of disinterest, or monitors her use of the internet, email, or other electronic communication, subject to statutory exceptions (e.g. authorised prevention of crime).', explanation: 'Short note.' },
    { id: 's-77-sub', draftingCategory: 'submissions', question: 'Submissions on stalking.', answer: 'I. Limb (follow/contact or monitoring). II. Clear disinterest where relevant. III. No exception. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS stalking provisions', 'BNS s. 75', 'BNS s. 351', 'IPC s. 354D (historical)'],
  examTips: ['State both limbs and the need for clear indication of disinterest for the contact limb.', 'Mention exceptions for authorised conduct.'],
  revisionPoints: ['Repeated contact despite disinterest, or electronic monitoring.', 'Clear indication of disinterest required for contact limb.', 'Exceptions for lawful/authorised conduct.'],
  relatedTopics: ['s-75', 's-351', 's-64', 's-28'],
}

export default content
