import type { TopicContent } from '../loadTopicContent'

/**
 * Preamble
 * Subject: constitution | Topic id: preamble
 * Black-letter study notes from settled constitutional text and landmarks only.
 */
const content: TopicContent = {
  study: `Text (keywords)
“We, the People of India, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:
JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation…”

Nature
The Preamble states the source of authority (the People), the nature of the Indian State, and the objectives of the Constitution. It is a key to interpretation but is not an independent source of enforceable rights.

Amendability
The 42nd Amendment (1976) inserted the words “Socialist”, “Secular” and “integrity”. In Kesavananda Bharati, the Court held that the Preamble is part of the Constitution and that its basic features cannot be destroyed by amendment.

Exam focus
Know the key words (Sovereign, Socialist, Secular, Democratic, Republic) and the triad Justice–Liberty–Equality–Fraternity. The Preamble aids construction; it does not itself create Fundamental Rights.`,

  sections: [
    {
      id: 'preamble-keywords',
      title: 'Key declarations',
      order: 1,
      content: [
        'India is described as a Sovereign, Socialist, Secular, Democratic Republic.',
        'The objectives include Justice (social, economic, political), Liberty, Equality and Fraternity, including dignity of the individual and unity and integrity of the Nation.'
      ],
    },
    {
      id: 'preamble-role',
      title: 'Role in interpretation',
      order: 2,
      content: [
        'The Preamble is a key to the minds of the Constitution’s framers and aids interpretation of ambiguous provisions.',
        'It is not an independent source of enforceable Fundamental Rights.'
      ],
    }
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-preamble', article: 'Preamble', title: 'Preamble' }
  ],

  examples: [
    {
      id: 'preamble-interp-example',
      title: 'Interpretive use',
      description: 'Where a provision is ambiguous, courts may look to Preamble values such as equality, liberty or secularism to choose an interpretation consistent with those goals.',
    }
  ],

  questionsAndAnswers: [
    {
      id: 'preamble-qa-1',
      question: 'Does the Preamble itself create enforceable Fundamental Rights?',
      answer: 'No. It states ideals and aids interpretation, but rights are enforced through Part III and other operative provisions.',
      explanation: 'Exam answers should not treat the Preamble as a stand-alone rights clause.',
      relatedProvisionIds: ['constitution-preamble'],
    },
    {
      id: 'preamble-qa-2',
      question: 'Which words were added to the Preamble by the 42nd Amendment?',
      answer: '“Socialist”, “Secular” and “integrity”.',
      explanation: 'Often tested as a black-letter amendment fact.',
      relatedProvisionIds: ['constitution-preamble'],
    },
    {
      id: 'preamble-qa-3',
      question: 'Is the Preamble part of the Constitution?',
      answer: 'Yes. After Kesavananda Bharati, the Preamble is treated as part of the Constitution and its basic features cannot be destroyed by amendment.',
      explanation: '',
      relatedProvisionIds: ['constitution-preamble'],
    }
  ],

  relatedTopics: ['Fundamental Rights', 'Directive Principles (DPSP)', 'Basic Structure Doctrine', 'Amendment of the Constitution'],

  cases: [
    {
      name: 'Kesavananda Bharati v. State of Kerala',
      year: 1973,
      citation: '(1973) 4 SCC 225',
      holding: 'The Preamble is part of the Constitution; Parliament cannot amend the Constitution so as to destroy its basic structure, including essential features reflected in the Preamble.',
      relevance: 'Leading authority on status of the Preamble and limits on Art 368.',
    },
    {
      name: 'S.R. Bommai v. Union of India',
      year: 1994,
      citation: '(1994) 3 SCC 1',
      holding: 'Secularism is part of the basic structure; State action inconsistent with secularism can attract constitutional consequences.',
      relevance: 'Links Preamble secularism to basic structure and Centre–State emergency doctrine.',
    }
  ],

  bareActPointers: ['Preamble', 'Art 368'],

  examTips: ['List the key words: Sovereign, Socialist, Secular, Democratic, Republic.', 'State that the Preamble aids interpretation but does not itself create FR.', 'Connect Preamble values to basic structure answers (Kesavananda / Bommai).', 'Remember 42nd Amendment insertions: Socialist, Secular, integrity.'],
}

export default content
