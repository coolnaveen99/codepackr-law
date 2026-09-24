import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 304: snatching — a distinct offence under the BNS. Theft by suddenly or quickly seizing or taking away movable property from any person or from his possession. Critical number trap: BNS 304 is NOT culpable homicide (that is s. 105). IPC 304 mapped to BNS 105; BNS 304 is new/relocated as snatching.',
  study: `Section 304 creates / relocates the offence of snatching.\n\nCore idea: whoever, in order to commit theft, suddenly or quickly seizes or takes away movable property from any person or from his possession is said to commit snatching.\n\nPunishment is as stated in the section (imprisonment and/or fine on the statutory scale).\n\n**Number trap (highest yield):**\n• BNS s. 304 = snatching\n• Culpable homicide not amounting to murder = BNS s. 105 (old IPC 304)\n• Never write “punishable under s. 304 BNS” for a homicide case.\n\nCite BNS s. 304 only for snatching offences on or after 1 July 2024.`,
  sections: [
    { id: 's-304-m1', title: 'Provenance & Number Trap', order: 1, content: ['Snatching as a distinct offence. IPC 304 (CHNAM) → BNS 105. BNS 304 is snatching — do not confuse.'] },
    { id: 's-304-m2', title: 'Textual Elements', order: 2, content: ['In order to commit theft; suddenly or quickly seizes or takes away movable property from any person or from his possession.'] },
    { id: 's-304-m3', title: 'Ingredients', order: 3, content: ['(1) Movable property. (2) From any person or from his possession. (3) Suddenly or quickly seizes or takes away. (4) In order to commit theft.'] },
    { id: 's-304-m4', title: 'Evidence', order: 4, content: ['Manner of taking (sudden/quick); possession of the victim; intention to commit theft.'] },
    { id: 's-304-m5', title: 'Procedure', order: 5, content: ['Forum and bailability as per BNSS Schedule for snatching.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-304', section: 's. 304', title: 'Snatching' }],
  examples: [
    { id: 's-304-ex1', title: 'Street snatching', illustrationType: 'practical', description: 'A suddenly snatches a chain from B’s neck and runs. Snatching under s. 304 is made out.' },
    { id: 's-304-ex2', title: 'Wrong section for homicide', illustrationType: 'fail-scenario', description: 'Death caused with s. 100 mental element. Correct path is s. 100/101/103/105 — never s. 304.' },
  ],
  hypotheticals: [{ id: 's-304-hypo', title: 'Snatching vs theft', facts: 'Sudden seizure of a phone from the victim’s hand.', question: 'Is s. 304 attracted?', applicableLaw: 'BNS s. 304; theft provisions.', analysis: 'Sudden/quick taking from the person in order to commit theft fits snatching.', conclusion: 's. 304 applies.' }],
  distinctions: [{ id: 's-304-dist', title: 'BNS 304 vs BNS 105 (number trap)', left: 's. 304 (snatching)', right: 's. 105 (CHNAM)', rows: [{ point: 'Subject', left: 'Sudden seizure of movable property', right: 'Culpable homicide not amounting to murder' }, { point: 'IPC concordance', left: 'New / relocated', right: 'Old IPC 304' }] }],
  misconceptions: [
    { id: 's-304-trap-1', trap: 'BNS 304 is culpable homicide not amounting to murder.', correction: 'No. BNS 304 is snatching. CHNAM is s. 105.' },
    { id: 's-304-trap-2', trap: 'Snatching is just ordinary theft.', correction: 'Snatching has the specific element of sudden or quick seizure from the person or his possession in order to commit theft.' },
  ],
  cases: [],
  questionsAndAnswers: [
    { id: 's-304-brief', draftingCategory: 'brief', question: 'What is snatching under BNS s. 304, and why is the number a trap?', answer: 'Snatching is suddenly or quickly seizing or taking away movable property from any person or from his possession in order to commit theft. The number is a trap because old IPC 304 (CHNAM) is now BNS 105; BNS 304 is snatching.', explanation: 'Short note.' },
    { id: 's-304-sub', draftingCategory: 'submissions', question: 'Submissions on s. 304.', answer: 'I. Sudden/quick taking from person. II. In order to commit theft. III. Distinction from CHNAM (s. 105). IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 304', 'BNS s. 105 (CHNAM — do not confuse)', 'BNS theft provisions', 'IPC s. 304 (historical CHNAM only)'],
  examTips: ['Highest-yield number trap in the entire BNS: 304 = snatching, not CHNAM.'],
  revisionPoints: ['304 = snatching (sudden seizure).', 'CHNAM = 105.', 'Never use 304 for homicide.'],
  relatedTopics: ['s-105', 's-100', 'offences-property', 'bns-ipc-map'],
}

export default content
