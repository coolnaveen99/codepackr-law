import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 152: acts endangering sovereignty, unity and integrity of India — the BNS replacement for the repealed sedition provision (IPC s. 124A). Covers exciting or attempting to excite secession, armed rebellion, subversive activities, or encouraging feelings of separatist activities, or endangering sovereignty/unity/integrity. Distinct from legitimate criticism of government. Higher threshold than old sedition in the statutory design.',
  study: `Section 152 replaces IPC sedition (s. 124A), which is not continued in the BNS.\n\nCore idea: whoever purposely or knowingly, by words (spoken or written), signs, visible representation, electronic communication, or otherwise, excites or attempts to excite secession or armed rebellion or subversive activities, or encourages feelings of separatist activities, or endangers sovereignty or unity and integrity of India, is punished as provided.\n\nKey points\n• The focus is secession, armed rebellion, subversive activities, separatist feelings, and endangering sovereignty/unity/integrity — not mere disaffection or criticism of government policies.\n• Legitimate dissent and criticism remain outside the section’s intended scope.\n• Mens rea: purposely or knowingly.\n\nCite BNS s. 152 for post-1 July 2024 acts. Do not cite IPC 124A for new offences. Always distinguish political criticism from the statutory elements.`,
  sections: [
    { id: 's-152-m1', title: 'Provenance', order: 1, content: ['Replaces IPC s. 124A (sedition), which is omitted from the BNS. New formulation centred on sovereignty, unity and integrity.'] },
    { id: 's-152-m2', title: 'Elements', order: 2, content: ['Purposely or knowingly; by words/signs/representation/electronic means; excite or attempt to excite secession, armed rebellion, subversive activities, or encourage separatist feelings, or endanger sovereignty/unity/integrity.'] },
    { id: 's-152-m3', title: 'Ingredients', order: 3, content: ['(1) Conduct of the specified kind. (2) Mens rea (purposely or knowingly). (3) Object/effect within the statutory list (secession, rebellion, subversion, separatist feelings, endangering sovereignty/unity/integrity).'] },
    { id: 's-152-m4', title: 'Evidence', order: 4, content: ['Content of the speech/writing/communication; intent; context; actual or attempted effect.'] },
    { id: 's-152-m5', title: 'Procedure', order: 5, content: ['Serious offence; Sessions trial; constitutional limits on free speech remain relevant in interpretation.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-152', section: 's. 152', title: 'Acts endangering sovereignty, unity and integrity of India' }],
  examples: [
    { id: 's-152-ex1', title: 'Call for secession', illustrationType: 'practical', description: 'A knowingly publishes material calling for armed secession of a part of India. s. 152 is attracted.' },
    { id: 's-152-ex2', title: 'Criticism of policy', illustrationType: 'fail-scenario', description: 'A criticises a government policy strongly but without exciting secession, rebellion, or endangering sovereignty/unity/integrity. s. 152 is not made out.' },
  ],
  hypotheticals: [{ id: 's-152-hypo', title: 'Sedition replacement', facts: 'Speech strongly critical of the government; no call for secession or violence.', question: 'Is s. 152 attracted?', applicableLaw: 'BNS s. 152.', analysis: 'Without the statutory objects (secession, rebellion, subversion, separatist feelings, endangering sovereignty/unity/integrity), criticism alone does not attract s. 152.', conclusion: 'Not made out on these facts.' }],
  distinctions: [{ id: 's-152-dist', title: 's. 152 vs Old sedition (IPC 124A)', left: 'BNS s. 152', right: 'IPC s. 124A (repealed for new offences)', rows: [{ point: 'Focus', left: 'Secession, rebellion, subversion, separatist feelings, sovereignty/unity/integrity', right: 'Disaffection toward the government' }] }],
  misconceptions: [
    { id: 's-152-trap-1', trap: 'Sedition (IPC 124A) continues under the BNS.', correction: 'IPC 124A is not continued. The new provision is s. 152, with a different formulation centred on sovereignty, unity and integrity.' },
    { id: 's-152-trap-2', trap: 'Any strong criticism of government is an offence under s. 152.', correction: 's. 152 requires purposely or knowingly exciting secession, armed rebellion, subversive activities, separatist feelings, or endangering sovereignty/unity/integrity — not mere criticism.' },
  ],
  cases: [],
  questionsAndAnswers: [
    { id: 's-152-brief', draftingCategory: 'brief', question: 'Explain BNS s. 152 and its relationship to old sedition.', answer: 's. 152 punishes purposely or knowingly exciting or attempting to excite secession, armed rebellion, subversive activities, or encouraging separatist feelings, or endangering sovereignty, unity and integrity of India. It replaces IPC s. 124A (sedition), which is not continued. Legitimate criticism of government is not the target of the section.', explanation: 'Short note.' },
    { id: 's-152-sub', draftingCategory: 'submissions', question: 'Submissions on s. 152.', answer: 'I. Conduct and medium. II. Mens rea (purposely/knowingly). III. Statutory object (secession/rebellion/etc.). IV. Distinction from mere criticism. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 152', 'IPC s. 124A (historical — not for new offences)', 'Constitution Art. 19'],
  examTips: ['State clearly that sedition (124A) is replaced by s. 152.', 'Distinguish criticism from the statutory elements.'],
  revisionPoints: ['s. 152 replaces sedition.', 'Focus: secession, rebellion, subversion, separatist feelings, sovereignty/unity/integrity.', 'Mere criticism ≠ s. 152.'],
  relatedTopics: ['s-61', 's-111', 's-189'],
}

export default content
