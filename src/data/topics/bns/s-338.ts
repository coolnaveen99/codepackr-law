import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 338 (and related): using as genuine a forged document or electronic record — whoever fraudulently or dishonestly uses as genuine any document or electronic record which he knows or has reason to believe to be forged is punished as provided (higher when the forged instrument is of the aggravated class). Successor to IPC s. 471.',
  study: `Using a forged document as genuine under the BNS:\n\nWhoever fraudulently or dishonestly uses as genuine any document or electronic record which he knows or has reason to believe to be a forged document or electronic record is punished in the same manner as if he had forged such document or electronic record (with higher scale when the instrument is of the aggravated class).\n\nKey points\n• Use as genuine.\n• Knowledge or reason to believe that it is forged.\n• Fraudulently or dishonestly.\n\nThis catches the user who did not necessarily forge the document. Often charged together with forgery and cheating. Cite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-338-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 471. Fraudulent/dishonest use of a document known or believed to be forged.'] },
    { id: 's-338-m2', title: 'Elements', order: 2, content: ['Use as genuine; document/electronic record; knowledge or reason to believe it is forged; fraudulently or dishonestly.'] },
    { id: 's-338-m3', title: 'Ingredients', order: 3, content: ['(1) Document or electronic record is forged. (2) Accused uses it as genuine. (3) Knowledge or reason to believe of forgery. (4) Fraudulent or dishonest use.'] },
    { id: 's-338-m4', title: 'Evidence', order: 4, content: ['Forgery of the document; use by the accused; knowledge/reason to believe; dishonest purpose.'] },
    { id: 's-338-m5', title: 'Procedure', order: 5, content: ['Commonly joined with forgery and cheating; forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-338', section: 's. 338', title: 'Using as genuine a forged document or electronic record' }],
  examples: [
    { id: 's-338-ex1', title: 'Tendering forged deed', illustrationType: 'practical', description: 'A knows a sale deed is forged and still tenders it as genuine to obtain property. Using as genuine is made out.' },
    { id: 's-338-ex2', title: 'No knowledge of forgery', illustrationType: 'fail-scenario', description: 'A uses a document believing it to be genuine. Without knowledge or reason to believe of forgery, the offence is not made out.' },
  ],
  hypotheticals: [{ id: 's-338-hypo', title: 'Use of forged document', facts: 'Accused presents a forged certificate to obtain a job, knowing it is forged.', question: 'Is the offence made out?', applicableLaw: 'BNS using-as-genuine provisions.', analysis: 'Use as genuine + knowledge of forgery + dishonest purpose — yes.', conclusion: 'Offence established.' }],
  distinctions: [],
  misconceptions: [{ id: 's-338-trap', trap: 'Only the forger can be liable for using a forged document.', correction: 'The user who fraudulently or dishonestly uses a document knowing or having reason to believe it is forged is liable even if someone else forged it.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-338-brief', draftingCategory: 'brief', question: 'Explain using as genuine a forged document under the BNS.', answer: 'Whoever fraudulently or dishonestly uses as genuine any document or electronic record which he knows or has reason to believe to be forged is punished as if he had forged it (with higher scale for aggravated instruments). Knowledge or reason to believe of forgery is essential.', explanation: 'Short note.' },
    { id: 's-338-sub', draftingCategory: 'submissions', question: 'Submissions on using forged document as genuine.', answer: 'I. Document forged. II. Use as genuine. III. Knowledge/reason to believe. IV. Fraudulent/dishonest. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS using-as-genuine provisions', 'BNS s. 336', 'BNS s. 337', 'BNS s. 318', 'IPC s. 471 (historical)'],
  examTips: ['Stress knowledge or reason to believe of forgery.', 'Often charged with forgery and cheating together.'],
  revisionPoints: ['Use as genuine + knowledge/reason to believe forged + fraudulent/dishonest.', 'User need not be the forger.', 'Higher scale for valuable security/will class.'],
  relatedTopics: ['s-336', 's-337', 's-318', 's-230'],
}

export default content
