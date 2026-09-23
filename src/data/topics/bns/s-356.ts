import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 356 (and related): defamation — making or publishing an imputation concerning a person, intending to harm or knowing/having reason to believe it will harm that person’s reputation. Exceptions (truth for public good, fair comment, etc.) are part of the definitional scheme. Successor to IPC s. 499/500. Criminal defamation remains an offence under the BNS.',
  study: `Defamation under the BNS:\n\nWhoever, by words either spoken or intended to be read, or by signs or visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm, the reputation of such person, is said to defame that person (subject to the exceptions).\n\nKey points\n• Imputation concerning a person.\n• Made or published.\n• Intention to harm reputation, or knowledge/reason to believe that harm will result.\n• Exceptions (truth for public good; fair comment on public conduct; merited censure; etc.) as in the statutory text.\n\nPublication to a third person is generally required. Consent and privilege may also be relevant.\n\nCite the applicable BNS defamation sections for post-1 July 2024 acts. Constitutional challenges to criminal defamation have not removed the offence from the statute book.`,
  sections: [
    { id: 's-356-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 499/500. Criminal defamation retained under the BNS.'] },
    { id: 's-356-m2', title: 'Definition', order: 2, content: ['Making or publishing an imputation intending to harm or knowing it will harm reputation; subject to exceptions.'] },
    { id: 's-356-m3', title: 'Ingredients', order: 3, content: ['(1) Imputation concerning a person. (2) Made or published. (3) Intention to harm reputation or knowledge/reason to believe harm will result. (4) No exception applies.'] },
    { id: 's-356-m4', title: 'Exceptions', order: 4, content: ['Truth for public good; fair comment; conduct of public servants; merited censure; etc. as listed in the section.'] },
    { id: 's-356-m5', title: 'Procedure', order: 5, content: ['Typically complaint-based; forum per BNSS Schedule; often compoundable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-356', section: 's. 356', title: 'Defamation' }],
  examples: [
    { id: 's-356-ex1', title: 'False imputation published', illustrationType: 'practical', description: 'A publishes a false statement that B is a thief, intending to harm B’s reputation. Defamation is made out unless an exception applies.' },
    { id: 's-356-ex2', title: 'Truth for public good', illustrationType: 'practical', description: 'A publishes a true statement about a public official’s corruption for the public good. The exception may protect A.' },
  ],
  hypotheticals: [{ id: 's-356-hypo', title: 'Exception', facts: 'Accused publishes a critical but true report on a public project for public good.', question: 'Is defamation made out?', applicableLaw: 'BNS defamation provisions and exceptions.', analysis: 'If truth for public good is established, the exception applies and the offence is not made out.', conclusion: 'Exception may defeat the charge.' }],
  distinctions: [],
  misconceptions: [{ id: 's-356-trap', trap: 'Criminal defamation was abolished by the BNS.', correction: 'Criminal defamation is retained under the BNS. The definition and exceptions continue in substance.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-356-brief', draftingCategory: 'brief', question: 'Outline defamation under the BNS.', answer: 'Making or publishing an imputation concerning a person, intending to harm or knowing/having reason to believe it will harm that person’s reputation, subject to statutory exceptions (truth for public good, fair comment, etc.). Criminal defamation remains an offence.', explanation: 'Short note.' },
    { id: 's-356-sub', draftingCategory: 'submissions', question: 'Submissions on defamation.', answer: 'I. Imputation and publication. II. Intention/knowledge of harm to reputation. III. Exception if any. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS defamation provisions', 'IPC ss. 499–500 (historical)'],
  examTips: ['Always check the exceptions.', 'State that criminal defamation continues under the BNS.'],
  revisionPoints: ['Imputation + publication + intent/knowledge of harm to reputation.', 'Exceptions (truth for public good, fair comment, etc.).', 'Still a criminal offence under BNS.'],
  relatedTopics: ['s-31', 's-2'],
}

export default content
