import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 34 is the gateway to private defence: nothing is an offence which is done in the exercise of the right of private defence. The right is against an offence, not against a lawful act. Successor to IPC s. 96. Detailed rules follow in ss. 35–44.',
  study: `Section 34 is the general declaration of the right of private defence.\n\nRule: Nothing is an offence which is done in the exercise of the right of private defence.\n\nCore principles\n• The right is defensive, not retributive or aggressive.\n• It arises against an offence (or an act that would be an offence if done by a person of sound mind, etc. — see s. 36).\n• It does not extend to acts against which there is no right of private defence (s. 37 — e.g., acts of a public servant acting in good faith under colour of office, subject to limits).\n• The extent of the right (when it extends to causing death, when only to lesser harm, commencement and continuance) is worked out in ss. 38–44.\n\nBurden: the accused who relies on private defence must establish the necessary facts on a preponderance of probabilities (BSA s. 108). Once a reasonable private-defence case is raised, the prosecution must still prove the offence beyond reasonable doubt, which includes negativing the defence if the evidence leaves it in doubt.\n\nCite BNS s. 34 (and the specific extent sections) for post-1 July 2024 acts.`,
  sections: [
    { id: 's-34-m1', title: 'Provenance & Objective', order: 1, content: ['Successor to IPC s. 96. Gateway provision declaring that acts done in private defence are not offences. Detailed limits in ss. 35–44.'] },
    { id: 's-34-m2', title: 'Textual Anatomy', order: 2, content: ['Nothing is an offence which is done in the exercise of the right of private defence. The right is against offences (and certain analogous acts).'] },
    { id: 's-34-m3', title: 'Essential Elements', order: 3, content: ['(1) An occasion for private defence (threat to body or property as defined in later sections). (2) The act done is in exercise of that right. (3) The act does not exceed the limits set by ss. 37–44.'] },
    { id: 's-34-m4', title: 'Evidentiary Burden', order: 4, content: ['Accused raises and supports the defence on preponderance. Prosecution must prove the offence; if private defence is reasonably possible on the evidence, the accused is entitled to the benefit.'] },
    { id: 's-34-m5', title: 'Procedure & Related Sections', order: 5, content: ['Always read with ss. 35–44 (body/property, when death may be caused, commencement/continuance, risk to innocent persons). Exceeding the right may still attract a lesser offence (e.g., exception to murder).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-34', section: 's. 34', title: 'Things done in private defence' }],
  examples: [
    { id: 's-34-ex1', title: 'Lawful private defence', illustrationType: 'practical', description: 'A is attacked with a knife. He strikes the attacker with a stick to disarm him. The blow is protected by s. 34 read with the extent sections, provided it does not exceed the right.' },
    { id: 's-34-ex2', title: 'No right against lawful act', illustrationType: 'fail-scenario', description: 'A resists a lawful arrest by a public servant acting in good faith. s. 37 generally excludes the right of private defence against such acts (subject to the statutory exceptions).' },
  ],
  hypotheticals: [{ id: 's-34-hypo', title: 'Private defence gateway', facts: 'A is assaulted. He causes harm to the assailant while defending himself.', question: 'Is the harm an offence?', applicableLaw: 'BNS s. 34 read with ss. 35–44.', analysis: 'If the occasion for private defence existed and the harm caused was within the statutory limits, s. 34 protects the act. If the right was exceeded, a lesser offence or an exception to murder may still apply.', conclusion: 'Depends on occasion + limits; s. 34 is the gateway, not the complete code.' }],
  distinctions: [{ id: 's-34-dist', title: 'Private defence vs Retaliation', left: 'Private defence (protected)', right: 'Retaliation / aggression (not protected)', rows: [{ point: 'Purpose', left: 'Prevent or repel the offence', right: 'Punish or take revenge after the threat has ceased' }] }],
  misconceptions: [{ id: 's-34-trap', trap: 'Section 34 alone justifies any force used in a fight.', correction: 's. 34 is only the gateway. The right is limited by ss. 37–44 (when death may be caused, commencement/continuance, no right against certain acts). Exceeding the right is itself culpable.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-34-brief', draftingCategory: 'brief', question: 'Explain the gateway provision of private defence under BNS s. 34.', answer: 'Nothing is an offence which is done in the exercise of the right of private defence. The right is against an offence and is limited by ss. 35–44. Burden on the accused on preponderance; prosecution must still prove the offence beyond reasonable doubt.', explanation: 'Short note.' },
    { id: 's-34-sub', draftingCategory: 'submissions', question: 'Submissions on private defence under s. 34 and allied sections.', answer: 'I. Occasion for defence. II. Act within limits of ss. 37–44. III. Burden and benefit of doubt. IV. Prayer for acquittal / application of exception to murder.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 34', 'BNS ss. 35–44', 'BSA s. 108', 'IPC s. 96 (historical)'],
  examTips: ['Never stop at s. 34; always test the extent sections (especially when death is caused — s. 38 / s. 41).', 'State the BSA s. 108 burden.'],
  revisionPoints: ['Gateway: nothing done in private defence is an offence.', 'Limits in ss. 35–44.', 'Burden on accused (preponderance).'],
  relatedTopics: ['s-38', 's-41', 's-101', 'general-exceptions'],
}

export default content
