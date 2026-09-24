import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 191 (and related): assault or criminal force to deter a public servant from discharge of duty — whoever assaults or uses criminal force to a public servant in the execution of his duty as such, or with intent to prevent or deter him from discharging his duty, is punished as provided. Successor to IPC s. 353. Distinct from ordinary assault and from unlawful assembly/rioting.',
  study: `Assault/criminal force against a public servant under the BNS:\n\nWhoever assaults or uses criminal force to any person being a public servant in the execution of his duty as such public servant, or with intent to prevent or deter that person from discharging his duty as such public servant, or in consequence of anything done or attempted to be done by such person in the lawful discharge of his duty, is punished as provided.\n\nKey points\n• Victim is a public servant.\n• Assault or criminal force.\n• In execution of duty, or with intent to prevent/deter, or in consequence of lawful discharge of duty.\n\nPrivate defence against public servants is restricted by s. 37. Cite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-191-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 353. Assault/criminal force to public servant in duty.'] },
    { id: 's-191-m2', title: 'Elements', order: 2, content: ['Assault or criminal force; public servant; in execution of duty, or intent to prevent/deter, or in consequence of lawful discharge.'] },
    { id: 's-191-m3', title: 'Ingredients', order: 3, content: ['(1) Assault or criminal force. (2) Victim is public servant. (3) Duty-related nexus as defined.'] },
    { id: 's-191-m4', title: 'Evidence', order: 4, content: ['Status of victim; nature of force; connection to duty; intent.'] },
    { id: 's-191-m5', title: 'Procedure', order: 5, content: ['Often charged with hurt and unlawful assembly/rioting when group force is used; forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-191', section: 's. 191', title: 'Assault or criminal force to deter public servant from discharge of duty' }],
  examples: [
    { id: 's-191-ex1', title: 'Force against officer on duty', illustrationType: 'practical', description: 'A pushes a police officer who is lawfully making an arrest, intending to stop the arrest. The offence is made out.' },
    { id: 's-191-ex2', title: 'Force against private person', illustrationType: 'fail-scenario', description: 'A assaults a private person. Ordinary assault/criminal force applies; this section requires a public-servant victim and duty nexus.' },
  ],
  hypotheticals: [{ id: 's-191-hypo', title: 'Deter public servant', facts: 'Accused uses force against a revenue officer to prevent inspection.', question: 'Is the offence made out?', applicableLaw: 'BNS assault-on-public-servant provisions; s. 37.', analysis: 'Public servant + criminal force + intent to prevent discharge of duty — yes.', conclusion: 'Offence established.' }],
  distinctions: [{ id: 's-191-dist', title: 'Assault on public servant vs Ordinary assault', left: 'Assault on public servant', right: 'Ordinary assault/criminal force', rows: [{ point: 'Extra element', left: 'Public servant + duty nexus', right: 'No public-servant requirement' }] }],
  misconceptions: [{ id: 's-191-trap', trap: 'Any force against a government employee is this offence.', correction: 'The person must be a public servant as defined, and the force must be in execution of duty, or with intent to prevent/deter, or in consequence of lawful discharge of duty.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-191-brief', draftingCategory: 'brief', question: 'Explain assault or criminal force to deter a public servant under the BNS.', answer: 'Whoever assaults or uses criminal force to a public servant in the execution of his duty, or with intent to prevent or deter him from discharging his duty, or in consequence of anything done in the lawful discharge of duty, commits the offence. Distinct from ordinary assault; private defence against public servants is restricted by s. 37.', explanation: 'Short note.' },
    { id: 's-191-sub', draftingCategory: 'submissions', question: 'Submissions on assault on public servant.', answer: 'I. Public servant. II. Assault/criminal force. III. Duty nexus. IV. s. 37 if private defence claimed. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS assault-on-public-servant provisions', 'BNS s. 130', 'BNS s. 37', 'BNS s. 2 (public servant)', 'IPC s. 353 (historical)'],
  examTips: ['Require public-servant status and duty nexus.', 'Link to s. 37 when private defence is claimed against the officer.'],
  revisionPoints: ['Public servant + assault/force + duty nexus.', 's. 37 restricts private defence against public servants.', 'Not ordinary assault.'],
  relatedTopics: ['s-130', 's-37', 's-189', 's-2'],
}

export default content
