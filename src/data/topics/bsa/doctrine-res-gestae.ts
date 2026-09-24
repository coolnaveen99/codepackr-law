import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Facts forming part of the same transaction are relevant (BSA s. 4; historically IEA s. 6). The Latin tag “res gestae” is teaching shorthand for that statutory idea — not a licence to admit later narratives.',

  study: `Topic at a glance
[[REF:DOCTRINE:EVIDENCE-LAW:RES-GESTAE|Res gestae]] is the classroom name. The statute’s name is “relevancy of facts forming part of the same transaction.”

What the law says
BSA s. 4 makes relevant facts which, though not in issue, are so connected with a fact in issue as to form part of the same transaction, whether they occurred at the same time and place or at different times and places.

Why it exists
An event is not a still photograph. Words and acts that are the event, or so welded to it that they cannot be separated, help the Court understand what happened. A later story is not the event.

Essential elements
1. There is a fact in issue or a relevant fact (the transaction).
2. The tendered fact is part of that same transaction, not a subsequent explanation.
3. Spontaneity and contemporaneity are the usual tests in the case law on old IEA 6; apply them to s. 4.
4. Relevancy here does not automatically overcome every hearsay or certificate problem.

How it operates
Ask: could this fact have been invented after reflection? If yes, it is probably not s. 4. A cry at the moment of the blow is in. A FIR drafted that evening is out of s. 4 (it may be relevant on other grounds).

Current-law position
BSA s. 4 from 1 July 2024. Gentela Vijayavardhan Rao and similar IEA 6 cases still teach contemporaneity; cite them as principles, then apply s. 4.

Educational note
Do not present an English case as if it were a BSA section.`,

  provisions: [
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-4', section: 's. 4', title: 'Relevancy of facts forming part of same transaction' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-3', section: 's. 3', title: 'Evidence may be given of facts in issue and relevant facts' },
  ],

  examples: [
    { id: 'rg-ex-1', title: 'Example 1 — simple', description: 'During a street fight A shouts “B has a knife” as B lunges. That shout is part of the transaction.' },
    { id: 'rg-ex-2', title: 'Example 2 — legal', description: 'A victim, two hours later in hospital, dictates a long history of the feud. That is not s. 4. It may be a s. 26 statement if the statutory conditions for a person who cannot be called are met — a different head.' },
  ],

  hypotheticals: [
    {
      id: 'rg-hypo',
      title: 'Examination hypothetical',
      facts: 'A bomb explodes in a market. Ten seconds later a vendor, uninjured, tells a constable “the man in the blue shirt threw the bag.” An hour later the vendor records a detailed statement at the police station adding motive and names.',
      question: 'What, if anything, is relevant as part of the same transaction?',
      applicableLaw: 'BSA s. 4; contemporaneity / transaction test from IEA 6 case law as principle.',
      analysis: 'The ten-second identification is close enough to the event to be argued as s. 4. The hour-later station narrative is reflection, not transaction. The prosecution may still call the vendor as a witness and prove the later statement only as contradiction/corroboration under the examination chapter, not as res gestae.',
      conclusion: 'Only the spontaneous remark is a serious s. 4 candidate. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'rg-v-dd',
      title: 'Res gestae and dying declaration',
      left: 's. 4 same transaction',
      right: 's. 26-family statement of a person who cannot be called',
      rows: [
        { point: 'Need death?', left: 'No', right: 'Death or other statutory inability is the usual foundation' },
        { point: 'Timing', left: 'Part of the event', right: 'May be later, if the section’s conditions are met' },
        { point: 'Trap', left: 'Using s. 4 for a later FIR', right: 'Calling every dying statement res gestae' },
      ],
    },
  ],

  misconceptions: [
    { id: 'rg-trap-1', trap: 'Res gestae admits any hearsay said near the scene.', correction: 'Only facts that are part of the same transaction. Nearness of place is not enough.' },
    { id: 'rg-trap-2', trap: 'The current section is IEA 6.', correction: 'Current section is BSA s. 4.' },
  ],

  questionsAndAnswers: [
    { id: 'rg-qa-1', question: 'State the current statutory home of res gestae.', answer: 'BSA s. 4 — facts forming part of the same transaction (historically IEA s. 6).', relatedProvisionIds: ['bsa-4'] },
  ],

  relatedTopics: ['Relevancy of Facts', 'Admissions & Confessions'],

  cases: [
    { name: 'Gentela Vijayavardhan Rao v. State of A.P.', year: 1996, citation: '(1996) 6 SCC 241', holding: 'IEA s. 6 statements must be reasonably contemporaneous with the transaction.', relevance: 'Apply the principle to BSA s. 4.' },
    { name: 'Sukhar v. State of U.P.', year: 1999, citation: '(1999) 9 SCC 507', holding: 'The statement must be a spontaneous reaction to the incident, not a later version.', relevance: 'Spontaneity test for the transaction doctrine.' },
  ],

  bareActPointers: ['BSA s. 4', 'BSA s. 3', 'IEA s. 6 (historical)'],

  examFrameworks: [
    {
      draftingCategory: 'brief',
      question: 'Explain res gestae under the BSA.',
      steps: [
        'Define using s. 4 language, then the Latin tag.',
        'Transaction / contemporaneity / spontaneity.',
        'One illustration and one case principle.',
        'Distinguish a later FIR / dying declaration.',
        'Current numbering.',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: '“Res gestae is not a rule of hearsay but a rule of relevancy.” Discuss with Indian authorities and a hypothetical.',
      steps: [
        's. 3 and s. 4 scheme.',
        'Why the doctrine exists.',
        'Ingredients and limits.',
        'Case principles (Gentela, Sukhar).',
        'Hypothetical application.',
        'Overlap with s. 26-family statements.',
        'IEA 6 concordance.',
        'Conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — s. 4, not the Latin as a statute.',
    'Ingredients.',
    'Illustration + case.',
    'What is not res gestae.',
    'Conclusion.',
  ],

  revisionPoints: [
    'BSA s. 4 = same transaction (old IEA 6).',
    'Spontaneous, contemporaneous, part of the event.',
    'Later narratives are not s. 4.',
  ],

  examTips: [
    'Write “same transaction” in the first paragraph. “Res gestae” alone looks like a maxim dump.',
  ],
}

export default content
