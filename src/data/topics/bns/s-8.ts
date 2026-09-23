import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 8 governs the amount of fine, liability in default of payment of fine, and related rules (successor to IPC ss. 63–70). It fixes how fine is assessed, the consequences of non-payment, and the limits on imprisonment in default.',
  study: `Section 8 consolidates the fine-related rules that lived in IPC sections 63–70.\n\nCore rules\n• Where no sum is expressed, the fine is unlimited but must not be excessive.\n• In default of payment the offender may be imprisoned for a term that is in addition to any other imprisonment to which he may have been sentenced.\n• The term of imprisonment in default is scaled to the amount of the fine (subject to statutory ceilings).\n• Termination of imprisonment on payment of the proportional part of the fine is provided.\n• Fine may be levied at any time within a prescribed period after the sentence.\n\nPractical use\nWhenever a section authorises fine (alone or in addition to imprisonment), s. 8 supplies the machinery for assessment, default imprisonment, and recovery. Cite BNS s. 8 for post-1 July 2024 offences.`,
  sections: [
    { id: 's-8-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 63–70. Objective: regulate quantum of fine and consequences of non-payment.'] },
    { id: 's-8-m2', title: 'Textual Scope', order: 2, content: ['Unlimited but not excessive fine where no sum is fixed; default imprisonment; proportional release on part payment; recovery window.'] },
    { id: 's-8-m3', title: 'Ingredients', order: 3, content: ['Valid sentence of fine; non-payment; court orders default imprisonment within the statutory scale.'] },
    { id: 's-8-m4', title: 'Evidence', order: 4, content: ['Ability to pay may be considered in fixing the amount; default is a matter of record.'] },
    { id: 's-8-m5', title: 'Procedure', order: 5, content: ['Default imprisonment is ordered in the judgment; recovery follows BNSS / fine-recovery procedure.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-8', section: 's. 8', title: 'Amount of fine, liability in default of payment of fine, etc' }],
  examples: [
    { id: 's-8-ex1', title: 'Fine with default', illustrationType: 'practical', description: 'A is sentenced to a fine of ₹10,000. In default he is to suffer simple imprisonment for a term fixed under the scale in s. 8. On paying a portion, the remaining default term is proportionally reduced.' },
    { id: 's-8-ex2', title: 'Excessive fine', illustrationType: 'fail-scenario', description: 'A fine that is grossly disproportionate to the offence and the offender’s means may be challenged as excessive even though the section states “unlimited”.' },
  ],
  hypotheticals: [{ id: 's-8-hypo', title: 'Default imprisonment', facts: 'Convict fails to pay the fine.', question: 'What follows under s. 8?', applicableLaw: 'BNS s. 8.', analysis: 'The court may order imprisonment in default within the statutory scale; part payment reduces the remaining term proportionally.', conclusion: 'Default imprisonment is lawful and is scaled to the unpaid fine.' }],
  distinctions: [],
  misconceptions: [{ id: 's-8-trap', trap: 'Imprisonment in default is a substitute that wipes out the fine.', correction: 'Default imprisonment is in addition to the fine liability; the fine remains recoverable according to the recovery rules.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-8-brief', draftingCategory: 'brief', question: 'Explain the scheme of fine and default under BNS s. 8.', answer: 'Fine must not be excessive. In default, additional imprisonment may be ordered on a statutory scale. Part payment proportionally reduces the default term. Fine remains recoverable.', explanation: 'Short note.' },
    { id: 's-8-sub', draftingCategory: 'submissions', question: 'Submissions on quantum of fine and default.', answer: 'I. Statutory power. II. Not excessive. III. Default scale. IV. Prayer for reasonable fine / suspension of default.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 8', 'IPC ss. 63–70 (historical)'],
  examTips: ['Always mention that fine must not be excessive and that default imprisonment is additional.'],
  revisionPoints: ['Fine unlimited but not excessive.', 'Default imprisonment on a scale.', 'Part payment reduces remaining default term.'],
  relatedTopics: ['s-4', 's-7', 's-9'],
}

export default content
