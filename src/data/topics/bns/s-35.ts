import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 35: every person has a right to defend his own body and the body of any other person against any offence affecting the human body, and to defend property (movable or immovable) against theft, robbery, mischief, criminal trespass, or attempts. Successor to IPC s. 97.',
  study: `Section 35 states the subject-matter of the right of private defence.\n\nBody: right to defend one’s own body and the body of any other person against any offence affecting the human body.\n\nProperty: right to defend the property (whether movable or immovable) of oneself or of any other person against any act which is an offence falling under the definitions of theft, robbery, mischief or criminal trespass, or which is an attempt to commit any of those offences.\n\nThis section defines the occasions; the extent (when death may be caused, etc.) is in ss. 38–44. Cite BNS s. 35 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-35-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 97. Defines what may be defended (body and specified property offences).'] },
    { id: 's-35-m2', title: 'Text', order: 2, content: ['Body of self or other against offences affecting the human body; property of self or other against theft, robbery, mischief, criminal trespass or attempts.'] },
    { id: 's-35-m3', title: 'Ingredients', order: 3, content: ['An offence (or attempt) of the listed kind directed at body or property; act done in defence of that body or property.'] },
    { id: 's-35-m4', title: 'Evidence', order: 4, content: ['Existence of the occasioning offence/attempt; defensive character of the response.'] },
    { id: 's-35-m5', title: 'Procedure', order: 5, content: ['Read with ss. 34 and 36–44 for complete private-defence analysis.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-35', section: 's. 35', title: 'Right of private defence of body and of property' }],
  examples: [
    { id: 's-35-ex1', title: 'Defence of another’s body', illustrationType: 'practical', description: 'A defends B against an assault. The right extends to defence of another’s body under s. 35.' },
    { id: 's-35-ex2', title: 'Property not in the list', illustrationType: 'fail-scenario', description: 'An act that is not theft, robbery, mischief, criminal trespass or an attempt thereof does not trigger the property limb of s. 35.' },
  ],
  hypotheticals: [{ id: 's-35-hypo', title: 'Scope of defence', facts: 'A intervenes to stop a robbery of C’s property.', question: 'Does s. 35 give a right of private defence?', applicableLaw: 'BNS s. 35.', analysis: 'Yes — robbery is a listed property offence; the right extends to property of any other person.', conclusion: 'Right exists; extent governed by later sections.' }],
  distinctions: [],
  misconceptions: [{ id: 's-35-trap', trap: 'Private defence of property is unlimited.', correction: 'Only against the listed offences (theft, robbery, mischief, criminal trespass or attempts); extent is further limited by ss. 41–44.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-35-brief', draftingCategory: 'brief', question: 'State the scope of private defence under BNS s. 35.', answer: 'Every person may defend his own or another’s body against any offence affecting the human body, and his own or another’s property against theft, robbery, mischief, criminal trespass or attempts thereof.', explanation: 'Short note.' },
    { id: 's-35-sub', draftingCategory: 'submissions', question: 'Submissions on s. 35.', answer: 'I. Body or listed property offence. II. Defensive act. III. Extent under later sections. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 35', 'BNS s. 34', 'BNS ss. 38–44', 'IPC s. 97 (historical)'],
  examTips: ['State both body and property limbs clearly.'],
  revisionPoints: ['Body of self/other; property of self/other against theft/robbery/mischief/trespass or attempts.'],
  relatedTopics: ['s-34', 's-38', 's-41', 'general-exceptions'],
}

export default content
