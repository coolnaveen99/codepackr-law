import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 336 (and related): forgery — making a false document or false electronic record with intent to cause damage or injury, to support a claim or title, to cause a person to part with property, to enter into a contract, or to commit fraud. Successor to IPC s. 463/465. Aggravated forms (forgery of valuable security, will, etc.) carry higher punishment.',
  study: `Forgery under the BNS:\n\nWhoever makes any false document or false electronic record, with intent to cause damage or injury to the public or to any person, or to support any claim or title, or to cause any person to part with property, or to enter into any express or implied contract, or with intent to commit fraud or that fraud may be committed, commits forgery.\n\n“Making a false document” is defined in detail (including dishonest alteration, signing in another’s name, etc.).\n\nKey points\n• False document or electronic record.\n• Specified dishonest intent (damage, claim, parting with property, contract, fraud).\n• Aggravated when the forged instrument is a valuable security, will, or other specified type.\n\nCite the applicable BNS sections for post-1 July 2024 acts. Often charged with cheating (s. 318) and using as genuine a forged document.`,
  sections: [
    { id: 's-336-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 463–465. False document/electronic record with dishonest intent.'] },
    { id: 's-336-m2', title: 'Definition', order: 2, content: ['Making false document or false electronic record; intent to cause damage, support claim, cause parting with property, induce contract, or commit fraud.'] },
    { id: 's-336-m3', title: 'Ingredients', order: 3, content: ['(1) False document or electronic record. (2) Making by the accused. (3) Specified dishonest intent.'] },
    { id: 's-336-m4', title: 'Evidence', order: 4, content: ['Document/record; falsity; authorship; intent inferred from use and circumstances.'] },
    { id: 's-336-m5', title: 'Procedure', order: 5, content: ['Often joined with cheating and using forged document as genuine; forum per BNSS Schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-336', section: 's. 336', title: 'Forgery' }],
  examples: [
    { id: 's-336-ex1', title: 'False document to obtain property', illustrationType: 'practical', description: 'A creates a false sale deed intending to cause B to part with property. Forgery is made out.' },
    { id: 's-336-ex2', title: 'No dishonest intent', illustrationType: 'fail-scenario', description: 'A makes an incorrect copy by mistake without any dishonest intent. Forgery is not made out.' },
  ],
  hypotheticals: [{ id: 's-336-hypo', title: 'Forgery', facts: 'Accused alters a cheque amount and signs in another’s name to obtain money.', question: 'Is forgery made out?', applicableLaw: 'BNS forgery provisions.', analysis: 'False document + intent to cause parting with property / fraud — yes.', conclusion: 'Forgery established.' }],
  distinctions: [{ id: 's-336-dist', title: 'Forgery vs Cheating vs False evidence', left: 'Forgery', right: 'Cheating / False evidence', rows: [{ point: 'Focus', left: 'Making false document/electronic record with dishonest intent', right: 'Deception inducing delivery / false statement under legal obligation' }] }],
  misconceptions: [{ id: 's-336-trap', trap: 'Any false paper is forgery.', correction: 'There must be a false document or electronic record made with one of the specified dishonest intents. Falsity alone without that intent is not forgery.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-336-brief', draftingCategory: 'brief', question: 'Define forgery under the BNS.', answer: 'Making a false document or false electronic record with intent to cause damage or injury, to support a claim or title, to cause a person to part with property, to enter into a contract, or to commit fraud. Aggravated forms (valuable security, will, etc.) carry higher punishment.', explanation: 'Short note.' },
    { id: 's-336-sub', draftingCategory: 'submissions', question: 'Submissions on forgery.', answer: 'I. False document/electronic record. II. Making by accused. III. Dishonest intent. IV. Aggravating form if any. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS forgery provisions', 'BNS s. 318', 'BNS using forged document as genuine', 'IPC ss. 463–465 (historical)'],
  examTips: ['State the definition of making a false document and the specified intents.', 'Often pair with cheating and using as genuine.'],
  revisionPoints: ['False document/electronic record + specified dishonest intent = forgery.', 'Includes electronic records.', 'Aggravated for valuable security, will, etc.'],
  relatedTopics: ['s-318', 's-227', 's-230', 's-303'],
}

export default content
