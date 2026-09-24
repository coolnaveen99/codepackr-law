import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 112: petty organised crime — a lighter organised-crime provision covering certain continuing unlawful activities (e.g. theft, snatching, cheating, unauthorised betting, selling of public examination papers, etc. as listed) by a group or gang. Distinct from the heavier organised crime under s. 111. New BNS provision.',
  study: `Section 112 addresses petty organised crime.\n\nCore idea: whoever, being a member of a group or gang, indulges in activities such as theft, snatching, cheating, unauthorised betting or gambling, selling of public examination question papers, or any other similar form of organised crime, is punished as provided.\n\nKey points\n• Group or gang involvement.\n• Listed or similar petty organised activities.\n• Lighter than s. 111 (organised crime) in scale and punishment.\n\nDistinguish from ordinary theft/cheating (individual) and from s. 111 (heavier syndicate / continuing unlawful activity of a more serious kind).\n\nCite BNS s. 112 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-112-m1', title: 'Provenance', order: 1, content: ['New BNS provision. Petty organised crime by group/gang.'] },
    { id: 's-112-m2', title: 'Elements', order: 2, content: ['Member of group or gang; activities of the listed/similar kind (theft, snatching, cheating, unauthorised betting, exam papers, etc.).'] },
    { id: 's-112-m3', title: 'Ingredients', order: 3, content: ['(1) Group or gang. (2) Indulgence in listed or similar organised activities. (3) Membership of the accused.'] },
    { id: 's-112-m4', title: 'Evidence', order: 4, content: ['Existence of group/gang; pattern of activity; role of the accused.'] },
    { id: 's-112-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; may be charged with the underlying individual offences as well.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-112', section: 's. 112', title: 'Petty organised crime' }],
  examples: [
    { id: 's-112-ex1', title: 'Gang of snatchers', illustrationType: 'practical', description: 'A gang repeatedly commits snatching as an organised activity. Members may be charged under s. 112 in addition to s. 304.' },
    { id: 's-112-ex2', title: 'Lone thief', illustrationType: 'fail-scenario', description: 'A single person commits theft without group/gang involvement. Ordinary theft (s. 303), not s. 112.' },
  ],
  hypotheticals: [{ id: 's-112-hypo', title: 'Petty organised crime', facts: 'A group runs an organised exam-paper selling racket.', question: 'Is s. 112 attracted?', applicableLaw: 'BNS s. 112.', analysis: 'Group + listed/similar activity (selling public examination papers) — yes.', conclusion: 's. 112 may apply.' }],
  distinctions: [{ id: 's-112-dist', title: 's. 112 vs s. 111', left: 's. 112 (petty organised crime)', right: 's. 111 (organised crime)', rows: [{ point: 'Scale', left: 'Petty / listed lighter activities by group/gang', right: 'Heavier continuing unlawful activity by organised crime syndicate' }] }],
  misconceptions: [{ id: 's-112-trap', trap: 'Any group theft is automatically s. 111 organised crime.', correction: 'Petty group activities of the listed kind fall under s. 112. s. 111 requires the heavier syndicate / continuing unlawful activity ingredients.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-112-brief', draftingCategory: 'brief', question: 'Outline petty organised crime under BNS s. 112.', answer: 'A member of a group or gang who indulges in activities such as theft, snatching, cheating, unauthorised betting, selling of public examination papers, or similar organised crime is liable under s. 112. It is lighter than organised crime under s. 111.', explanation: 'Short note.' },
    { id: 's-112-sub', draftingCategory: 'submissions', question: 'Submissions on s. 112.', answer: 'I. Group/gang. II. Listed or similar activity. III. Membership. IV. Distinction from s. 111. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 112', 'BNS s. 111', 'BNS s. 303', 'BNS s. 304'],
  examTips: ['Distinguish s. 112 (petty) from s. 111 (serious organised crime).', 'Require group/gang element.'],
  revisionPoints: ['Group/gang + listed petty organised activities = s. 112.', 'Lighter than s. 111.', 'Lone offender ≠ s. 112.'],
  relatedTopics: ['s-111', 's-303', 's-304', 's-318'],
}

export default content
