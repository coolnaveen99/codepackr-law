import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 329 (and related): criminal trespass — entering or remaining upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy. Successor to IPC s. 441/447. House-trespass and house-breaking are aggravated forms.',
  study: `Criminal trespass under the BNS:\n\nWhoever enters into or upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy any person in possession of such property, or having lawfully entered remains there with such intent, commits criminal trespass.\n\nKey points\n• Entry (or unlawful remaining) upon property in another’s possession.\n• Intent to commit an offence, or to intimidate, insult or annoy.\n\nHouse-trespass: criminal trespass into a building, tent or vessel used as a human dwelling or for custody of property.\nHouse-breaking: house-trespass by specified means (e.g. through passage not intended for human entrance, by unlocking, scaling, etc.).\n\nPrivate defence of property (ss. 35, 41–43) often interacts with these offences.\n\nCite the applicable BNS sections for post-1 July 2024 acts.`,
  sections: [
    { id: 's-329-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 441/447. Entry/remaining with intent to offend, intimidate, insult or annoy.'] },
    { id: 's-329-m2', title: 'Definition', order: 2, content: ['Enter or remain upon property in another’s possession; intent to commit offence or intimidate/insult/annoy.'] },
    { id: 's-329-m3', title: 'Ingredients', order: 3, content: ['(1) Property in possession of another. (2) Entry or unlawful remaining. (3) Specified intent.'] },
    { id: 's-329-m4', title: 'Aggravated forms', order: 4, content: ['House-trespass; house-breaking; lurking house-trespass; by night — higher sections and punishments.'] },
    { id: 's-329-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; interaction with private defence of property.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-329', section: 's. 329', title: 'Criminal trespass' }],
  examples: [
    { id: 's-329-ex1', title: 'Entry with intent to annoy', illustrationType: 'practical', description: 'A enters B’s field intending to annoy B. Criminal trespass is made out.' },
    { id: 's-329-ex2', title: 'Lawful entry without bad intent', illustrationType: 'fail-scenario', description: 'A enters with permission and no intent to offend, intimidate, insult or annoy. Not criminal trespass.' },
  ],
  hypotheticals: [{ id: 's-329-hypo', title: 'Trespass intent', facts: 'Accused enters a dwelling at night by scaling a wall.', question: 'Criminal trespass / house-breaking?', applicableLaw: 'BNS criminal trespass / house-breaking provisions.', analysis: 'Entry into dwelling + specified means of house-breaking + likely intent — house-breaking (aggravated form) is open.', conclusion: 'Aggravated house-trespass/house-breaking may be charged.' }],
  distinctions: [],
  misconceptions: [{ id: 's-329-trap', trap: 'Any unauthorised entry is criminal trespass.', correction: 'The entry (or remaining) must be with intent to commit an offence or to intimidate, insult or annoy. Mere civil trespass without that intent is not the criminal offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-329-brief', draftingCategory: 'brief', question: 'Define criminal trespass under the BNS.', answer: 'Entering or remaining upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy any person in possession. House-trespass and house-breaking are aggravated forms.', explanation: 'Short note.' },
    { id: 's-329-sub', draftingCategory: 'submissions', question: 'Submissions on criminal trespass.', answer: 'I. Property in another’s possession. II. Entry or remaining. III. Specified intent. IV. Aggravating form if any. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS criminal trespass / house-trespass / house-breaking provisions', 'BNS ss. 35, 41–43', 'IPC ss. 441–447 (historical)'],
  examTips: ['Stress the intent element.', 'Link to private defence of property when the facts involve resistance to trespass.'],
  revisionPoints: ['Entry/remaining + intent to offend/intimidate/insult/annoy = criminal trespass.', 'House-trespass and house-breaking are aggravated.', 'Civil trespass ≠ criminal trespass without the intent.'],
  relatedTopics: ['s-35', 's-41', 's-303', 's-324'],
}

export default content
