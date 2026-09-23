import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 40: the right of private defence of the body commences as soon as a reasonable apprehension of danger to the body arises from an attempt or threat to commit an offence, even if the offence has not been committed, and continues as long as the apprehension of danger to the body continues. Successor to IPC s. 102.',
  study: `Section 40 fixes the temporal limits of private defence of the body.\n\nCommencement: as soon as a reasonable apprehension of danger to the body arises from an attempt or threat, even though the offence may not have been committed.\n\nContinuance: as long as such apprehension of danger to the body continues.\n\nOnce the apprehension has clearly ceased, the right ends; continued force becomes excessive and may attract Exception 2 to s. 101 or other liability. Cite BNS s. 40 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-40-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 102. Temporal limits of body defence.'] },
    { id: 's-40-m2', title: 'Text', order: 2, content: ['Commences with reasonable apprehension from attempt/threat; continues while apprehension continues.'] },
    { id: 's-40-m3', title: 'Ingredients', order: 3, content: ['Reasonable apprehension of danger to body; from attempt or threat; right lasts only while apprehension lasts.'] },
    { id: 's-40-m4', title: 'Evidence', order: 4, content: ['Sequence of events; when the threat arose and when it ceased.'] },
    { id: 's-40-m5', title: 'Procedure', order: 5, content: ['Critical when the accused continues force after the threat has ended.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-40', section: 's. 40', title: 'Commencement and continuance of right of private defence of body' }],
  examples: [
    { id: 's-40-ex1', title: 'Right continues while threat continues', illustrationType: 'practical', description: 'A is under ongoing attack. The right of private defence continues throughout the attack.' },
    { id: 's-40-ex2', title: 'Right ends when threat ends', illustrationType: 'fail-scenario', description: 'A disarms B and B flees. A then pursues and kills B. The right had ceased; the later killing is not protected by private defence.' },
  ],
  hypotheticals: [{ id: 's-40-hypo', title: 'Continuance', facts: 'Threat ends; accused continues to use force.', question: 'Is the continued force protected?', applicableLaw: 'BNS s. 40.', analysis: 'No — the right continues only as long as the apprehension continues.', conclusion: 'Continued force is excessive / unprotected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-40-trap', trap: 'Once private defence starts, any subsequent force is protected.', correction: 'The right lasts only as long as the reasonable apprehension of danger continues. Force after the threat has ceased is not protected.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-40-brief', draftingCategory: 'brief', question: 'When does the right of private defence of the body commence and end under BNS s. 40?', answer: 'It commences as soon as a reasonable apprehension of danger to the body arises from an attempt or threat, and continues only as long as that apprehension continues.', explanation: 'Short note.' },
    { id: 's-40-sub', draftingCategory: 'submissions', question: 'Submissions on commencement/continuance under s. 40.', answer: 'I. When apprehension arose. II. When it ceased. III. Force within that window only. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 40', 'BNS s. 34', 'BNS s. 38', 'IPC s. 102 (historical)'],
  examTips: ['Always ask: had the apprehension ceased when the fatal/excessive force was used?'],
  revisionPoints: ['Commences with reasonable apprehension; continues only while apprehension continues.'],
  relatedTopics: ['s-34', 's-38', 's-43', 's-101'],
}

export default content
