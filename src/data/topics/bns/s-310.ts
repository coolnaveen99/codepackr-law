import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 310: dacoity — robbery committed by five or more persons conjointly. Every member is punished for dacoity. Preparation to commit dacoity and assembly for dacoity are also offences. Successor to IPC ss. 391/395. Higher punishment than simple robbery.',
  study: `Dacoity under the BNS:\n\nWhen five or more persons conjointly commit or attempt to commit a robbery, or where the whole number of persons conjointly committing or attempting to commit a robbery, and persons present and aiding such commission or attempt, amount to five or more, every person so committing, attempting or aiding is said to commit dacoity.\n\nKey points\n• Minimum five persons (conjointly).\n• The underlying act is robbery (theft/extortion + violence or fear of instant death/hurt/wrongful restraint).\n• Every member is liable for dacoity.\n• Preparation and assembly for dacoity are separate offences.\n\nCite BNS s. 310 for post-1 July 2024 dacoity cases. Distinguish from robbery (s. 309) and unlawful assembly (s. 189).`,
  sections: [
    { id: 's-310-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 391/395. Robbery by five or more conjointly.'] },
    { id: 's-310-m2', title: 'Definition', order: 2, content: ['Five or more conjointly committing or attempting robbery (including aiders present).'] },
    { id: 's-310-m3', title: 'Ingredients', order: 3, content: ['(1) Robbery (or attempt). (2) Five or more persons conjointly (including present aiders). (3) Participation of the accused as member/aider.'] },
    { id: 's-310-m4', title: 'Evidence', order: 4, content: ['Number of participants; robbery elements; conjoint action; role of the accused.'] },
    { id: 's-310-m5', title: 'Procedure', order: 5, content: ['Serious Sessions offence; preparation and assembly for dacoity are also chargeable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-310', section: 's. 310', title: 'Dacoity' }],
  examples: [
    { id: 's-310-ex1', title: 'Five committing robbery', illustrationType: 'practical', description: 'Five persons together commit a robbery. Each is guilty of dacoity under s. 310.' },
    { id: 's-310-ex2', title: 'Four only', illustrationType: 'fail-scenario', description: 'Four persons commit a robbery. It is robbery (s. 309), not dacoity (minimum five).' },
  ],
  hypotheticals: [{ id: 's-310-hypo', title: 'Dacoity threshold', facts: 'Six persons act together in a robbery; one only stands guard.', question: 'Is the guard liable for dacoity?', applicableLaw: 'BNS s. 310.', analysis: 'Present and aiding counts toward the five; the guard is a member for dacoity purposes.', conclusion: 'Liable for dacoity.' }],
  distinctions: [{ id: 's-310-dist', title: 'Dacoity vs Robbery vs Unlawful assembly', left: 'Dacoity (s. 310)', right: 'Robbery (s. 309) / UA (s. 189)', rows: [{ point: 'Number', left: 'Five or more conjointly', right: 'Any number for robbery; five or more with listed common object for UA' }, { point: 'Underlying act', left: 'Robbery', right: 'Theft/extortion + violence element / listed common object' }] }],
  misconceptions: [{ id: 's-310-trap', trap: 'Any group robbery is dacoity.', correction: 'Dacoity requires five or more persons conjointly. Fewer than five = robbery only.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-310-brief', draftingCategory: 'brief', question: 'Define dacoity under BNS s. 310.', answer: 'When five or more persons conjointly commit or attempt to commit a robbery (including persons present and aiding), every such person commits dacoity. Minimum five; underlying act is robbery.', explanation: 'Short note.' },
    { id: 's-310-sub', draftingCategory: 'submissions', question: 'Submissions on dacoity under s. 310.', answer: 'I. Robbery elements. II. Five or more conjointly. III. Role of the accused. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 310', 'BNS s. 309', 'BNS s. 189', 'IPC ss. 391/395 (historical)'],
  examTips: ['Always check the number — five is the threshold.', 'State that present aiders count.'],
  revisionPoints: ['Dacoity = robbery by 5+ conjointly.', 'Present aiders count toward five.', 'Fewer than five = robbery only.'],
  relatedTopics: ['s-309', 's-303', 's-189', 's-3'],
}

export default content
