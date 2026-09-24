import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 95: hiring, employing or engaging a child to commit an offence. New provision. The adult who uses a child as an instrument is punished. Child = below 18 (s. 2(3)). Complements the absolute/qualified incapacity of children under ss. 20–21 and abetment of incapable persons under s. 46.',
  study: `Section 95 is a new offence targeting the use of children to commit crimes.\n\nCore idea: whoever hires, employs or engages a child to commit an offence is liable to the punishment stated in the section.\n\n“Child” means any person below eighteen years (s. 2(3)). The provision addresses the practice of using minors as instruments for theft, drug carrying, etc.\n\nRelationship with other sections:\n• ss. 20–21 — the child may be doli incapax; the adult remains liable under s. 95 and possibly s. 46 (abetment of incapable person).\n• s. 45/46 — abetment framework may also apply.\n\nCite BNS s. 95 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-95-m1', title: 'Provenance', order: 1, content: ['New provision. Criminalises hiring/employing/engaging a child to commit an offence.'] },
    { id: 's-95-m2', title: 'Textual Elements', order: 2, content: ['Hires, employs or engages; a child (below 18); to commit an offence.'] },
    { id: 's-95-m3', title: 'Ingredients', order: 3, content: ['(1) Hiring, employing or engaging. (2) A child (below 18). (3) To commit an offence.'] },
    { id: 's-95-m4', title: 'Evidence', order: 4, content: ['Age of the child; nature of the engagement; the offence intended or committed.'] },
    { id: 's-95-m5', title: 'Procedure', order: 5, content: ['May be charged together with the object offence and/or abetment.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-95', section: 's. 95', title: 'Hiring, employing or engaging a child to commit an offence' }],
  examples: [
    { id: 's-95-ex1', title: 'Child used for theft', illustrationType: 'practical', description: 'An adult employs a 12-year-old to pick pockets. s. 95 is attracted; the child may be protected by ss. 20–21.' },
    { id: 's-95-ex2', title: 'Adult co-offender only', illustrationType: 'fail-scenario', description: 'Two adults commit an offence together. s. 95 does not apply; ordinary joint-liability rules do.' },
  ],
  hypotheticals: [{ id: 's-95-hypo', title: 'Child as instrument', facts: 'Adult engages a 14-year-old to deliver contraband.', question: 'Is s. 95 attracted?', applicableLaw: 'BNS s. 95; s. 2(3).', analysis: 'Child below 18; engaged to commit an offence — yes.', conclusion: 's. 95 applies.' }],
  distinctions: [],
  misconceptions: [{ id: 's-95-trap', trap: 'If the child is doli incapax, the adult also escapes.', correction: 'The child’s incapacity under ss. 20–21 does not protect the adult who hired/employed/engaged the child under s. 95 (or who abetted under s. 46).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-95-brief', draftingCategory: 'brief', question: 'Explain BNS s. 95.', answer: 'Whoever hires, employs or engages a child (below 18) to commit an offence is liable under s. 95. The child’s possible doli incapax does not protect the adult.', explanation: 'Short note.' },
    { id: 's-95-sub', draftingCategory: 'submissions', question: 'Submissions on s. 95.', answer: 'I. Child below 18. II. Hired/employed/engaged to commit an offence. III. Adult liability. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 95', 'BNS s. 2(3)', 'BNS ss. 20–21', 'BNS s. 46'],
  examTips: ['Link to s. 2(3) child definition and to ss. 20–21 / 46.'],
  revisionPoints: ['Hiring/employing/engaging a child (below 18) to commit an offence.', 'Child’s incapacity does not protect the adult.'],
  relatedTopics: ['s-2', 's-20', 's-21', 's-46'],
}

export default content
