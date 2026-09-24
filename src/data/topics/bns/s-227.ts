import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 227 (and related): giving false evidence — whoever, being legally bound by an oath or by an express provision of law to state the truth, or being bound by law to make a declaration upon any subject, makes any statement which is false and which he either knows or believes to be false or does not believe to be true, is said to give false evidence. Successor to IPC s. 191. Fabricating false evidence is a related distinct offence.',
  study: `Giving false evidence under the BNS:\n\nWhoever, being legally bound by an oath or by an express provision of law to state the truth, or being bound by law to make a declaration upon any subject, makes any statement which is false, and which he either knows or believes to be false or does not believe to be true, is said to give false evidence.\n\nKey points\n• Legal obligation to state the truth (oath or law).\n• False statement.\n• Knowledge or belief that it is false, or absence of belief that it is true.\n\nFabricating false evidence (related section): causing a false circumstance to exist, or making a false entry, with intent that it appear in evidence and cause an erroneous opinion.\n\nPunishment depends on the proceeding in which the false evidence is given (judicial proceeding vs other). Cite the applicable BNS sections for post-1 July 2024 acts.`,
  sections: [
    { id: 's-227-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 191–193. False evidence and fabricating false evidence.'] },
    { id: 's-227-m2', title: 'Giving False Evidence', order: 2, content: ['Legally bound to state truth; false statement; knowledge/belief of falsity or no belief in truth.'] },
    { id: 's-227-m3', title: 'Fabricating False Evidence', order: 3, content: ['Causing false circumstance / false entry with intent that it appear in evidence and mislead.'] },
    { id: 's-227-m4', title: 'Ingredients', order: 4, content: ['(1) Legal obligation to truth. (2) False statement or fabricated circumstance. (3) Mens rea as to falsity.'] },
    { id: 's-227-m5', title: 'Procedure', order: 5, content: ['Often requires complaint by the court; punishment higher when given in a judicial proceeding.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-227', section: 's. 227', title: 'Giving false evidence' }],
  examples: [
    { id: 's-227-ex1', title: 'Perjury', illustrationType: 'practical', description: 'A witness under oath knowingly gives a false account of events. Giving false evidence is made out.' },
    { id: 's-227-ex2', title: 'Honest mistake', illustrationType: 'fail-scenario', description: 'A witness makes an incorrect statement believing it to be true. Without knowledge/belief of falsity, the offence is not made out.' },
  ],
  hypotheticals: [{ id: 's-227-hypo', title: 'False evidence', facts: 'Witness under oath states a fact he knows is false.', question: 'Is the offence made out?', applicableLaw: 'BNS false-evidence provisions.', analysis: 'Legal obligation + false statement + knowledge of falsity — yes.', conclusion: 'Giving false evidence established.' }],
  distinctions: [{ id: 's-227-dist', title: 'Giving vs Fabricating false evidence', left: 'Giving false evidence', right: 'Fabricating false evidence', rows: [{ point: 'Method', left: 'False statement under legal obligation to truth', right: 'Creating false circumstance or entry to mislead as evidence' }] }],
  misconceptions: [{ id: 's-227-trap', trap: 'Any incorrect statement in court is false evidence.', correction: 'The statement must be false to the knowledge or belief of the maker (or not believed to be true), and made under a legal obligation to state the truth.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-227-brief', draftingCategory: 'brief', question: 'Define giving false evidence under the BNS.', answer: 'Whoever, being legally bound by oath or law to state the truth, makes a statement which is false and which he knows or believes to be false or does not believe to be true, gives false evidence. Fabricating false evidence is a related but distinct offence.', explanation: 'Short note.' },
    { id: 's-227-sub', draftingCategory: 'submissions', question: 'Submissions on false evidence.', answer: 'I. Legal obligation to truth. II. False statement. III. Mens rea as to falsity. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS false-evidence and fabricating provisions', 'IPC ss. 191–193 (historical)'],
  examTips: ['State the legal-obligation requirement and the mens rea as to falsity.', 'Distinguish giving from fabricating.'],
  revisionPoints: ['Bound to state truth + false statement + knowledge/belief of falsity.', 'Fabricating = creating false evidence to mislead.', 'Higher punishment in judicial proceedings.'],
  relatedTopics: ['s-230', 's-248', 's-336'],
}

export default content
