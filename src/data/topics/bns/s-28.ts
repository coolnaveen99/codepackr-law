import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 28: a consent is not such a consent as is intended by any section of the Sanhita if given under fear of injury or under a misconception of fact, and the person doing the act knows or has reason to believe that the consent was given in consequence of such fear or misconception. Successor to IPC s. 90.',
  study: `Section 28 defines when “consent” is not valid consent for the purposes of the Sanhita.\n\nRule: A consent is not such a consent as is intended by any section of this Sanhita if the consent is given by a person under fear of injury, or under a misconception of fact, and if the person doing the act knows, or has reason to believe, that the consent was given in consequence of such fear or misconception.\n\nAlso: consent of a person of unsound mind or intoxicated so as to be unable to understand the nature and consequence of that to which he consents, or consent of a child under 12, is not valid consent.\n\nThis section is critical in sexual offences, medical consent, and any defence that depends on consent. Cite BNS s. 28 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-28-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 90. Defines invalid consent (fear, misconception, unsound mind, intoxication, child under 12).'] },
    { id: 's-28-m2', title: 'Text', order: 2, content: ['Consent under fear of injury or misconception of fact is invalid if the doer knows or has reason to believe it was so given; also consent of unsound mind / severely intoxicated / child under 12.'] },
    { id: 's-28-m3', title: 'Ingredients of invalidity', order: 3, content: ['Fear of injury or misconception of fact + knowledge/reason to believe of the doer; or incapacity (unsound mind, intoxication, under 12).'] },
    { id: 's-28-m4', title: 'Evidence', order: 4, content: ['Circumstances of the consent; state of mind of the giver; knowledge of the doer.'] },
    { id: 's-28-m5', title: 'Procedure', order: 5, content: ['Central to whether a consent-based defence or the absence of consent as an ingredient of an offence is made out.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-28', section: 's. 28', title: 'Consent known to be given under fear or misconception' }],
  examples: [
    { id: 's-28-ex1', title: 'Consent under fear', illustrationType: 'practical', description: 'A consents to an act only because of a threat of injury. B knows this. The “consent” is not valid under s. 28.' },
    { id: 's-28-ex2', title: 'Child under 12', illustrationType: 'fail-scenario', description: 'Consent of a child under 12 is never valid consent under s. 28 for the purposes of the Sanhita.' },
  ],
  hypotheticals: [{ id: 's-28-hypo', title: 'Invalid consent', facts: 'Apparent consent given under a threat known to the accused.', question: 'Is the consent valid?', applicableLaw: 'BNS s. 28.', analysis: 'No — fear of injury + knowledge of the doer = invalid consent.', conclusion: 'Consent defence fails; offence may be made out.' }],
  distinctions: [],
  misconceptions: [{ id: 's-28-trap', trap: 'Any spoken “yes” is valid consent.', correction: 'Consent under fear or misconception of fact (known to the doer), or of a person under 12 / of unsound mind / severely intoxicated, is not valid consent under s. 28.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-28-brief', draftingCategory: 'brief', question: 'When is consent not valid under BNS s. 28?', answer: 'When given under fear of injury or misconception of fact and the doer knows or has reason to believe it was so given; or when given by a person of unsound mind, severely intoxicated, or a child under 12.', explanation: 'Short note.' },
    { id: 's-28-sub', draftingCategory: 'submissions', question: 'Submissions on invalid consent under s. 28.', answer: 'I. Fear or misconception. II. Knowledge of the doer. III. Or incapacity (under 12 / unsound mind / intoxication). IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 28', 'BNS ss. 25–27', 'IPC s. 90 (historical)'],
  examTips: ['Always check s. 28 when consent is in issue — especially in sexual and medical cases.'],
  revisionPoints: ['Fear or misconception + knowledge of doer = invalid consent.', 'Child under 12 / unsound mind / severe intoxication = no valid consent.'],
  relatedTopics: ['s-25', 's-26', 's-64', 'sexual-offences'],
}

export default content
