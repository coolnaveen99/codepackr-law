import type { TopicContent } from '../loadTopicContent'

/**
 * Fundamental Duties
 * Subject: constitution | Topic id: fundamental-duties
 * Part IVA, Art 51A — settled overview.
 */
const content: TopicContent = {

  study: `Article 51A
“It shall be the duty of every citizen of India—(a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem; … (and other duties listed in Art 51A(b)–(k)).”

Part IVA — Article 51A
Fundamental Duties were added by the 42nd Amendment (1976). They apply to every citizen of India.

Illustrative duties (Art 51A)
Citizens should, among other things: abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem; cherish noble ideals of the freedom struggle; uphold sovereignty, unity and integrity of India; defend the country; promote harmony and renounce practices derogatory to women; value and preserve composite culture; protect the environment; develop scientific temper; safeguard public property; strive towards excellence; provide opportunities for education to children (added later); and related duties listed in Art 51A.

Nature
Fundamental Duties are not directly enforceable like Fundamental Rights. They are civic obligations. Courts may consider them while interpreting laws and rights, but Art 51A is not a substitute for Part III remedies.

Exam focus
Know that duties are in Art 51A / Part IVA, added by the 42nd Amendment, apply to citizens, and are non-justiciable in the Fundamental Rights sense.`,

  sections: [
    {
      id: 'fd-origin',
      title: 'Origin and text',
      order: 1,
      content: [
        'Part IVA / Article 51A was inserted by the 42nd Constitutional Amendment, 1976.',
        'Duties are addressed to every citizen of India.',
      ],
    },
    {
      id: 'fd-nature',
      title: 'Legal nature',
      order: 2,
      content: [
        'Fundamental Duties are not enforceable in the same way as Fundamental Rights.',
        'They may still guide interpretation and legislation.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-51a', article: 'Article 51A', title: 'Fundamental duties' },
  ],

  examples: [
    {
      id: 'fd-env-example',
      title: 'Environment duty',
      description: 'Article 51A includes the duty to protect and improve the natural environment. It supports environmental legislation and interpretation, but does not itself create a Part III writ as a stand-alone right.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'fd-qa-1',
      question: 'By which amendment were Fundamental Duties inserted?',
      answer: 'The 42nd Constitutional Amendment, 1976.',
      relatedProvisionIds: ['constitution-article-51a'],
    },
    {
      id: 'fd-qa-2',
      question: 'Are Fundamental Duties directly enforceable like Fundamental Rights?',
      answer: 'No. They are civic duties under Article 51A and are not enforceable in the same manner as Part III rights.',
      relatedProvisionIds: ['constitution-article-51a'],
    },
    {
      id: 'fd-qa-3',
      question: 'To whom do Fundamental Duties apply?',
      answer: 'To every citizen of India.',
      relatedProvisionIds: ['constitution-article-51a'],
    },
  ],

  relatedTopics: ['Directive Principles (DPSP)', 'Preamble', 'Fundamental Rights'],

  cases: [
    {
      name: 'AIIMS Students Union v. AIIMS',
      year: 2001,
      citation: '(2002) 1 SCC 428',
      holding: 'Fundamental Duties are as important as rights; courts may consider them while examining the validity and interpretation of laws and policies.',
      relevance: 'Often cited to show duties inform constitutional interpretation.',
    },
  ],

  bareActPointers: ['Art 51A', 'Part IVA'],

  examTips: [
    'Write: Part IVA, Article 51A, 42nd Amendment.',
    'Duties apply to citizens; not enforceable like FR.',
    'Give 3–4 illustrative duties (Constitution, unity, environment, excellence).',
    'Distinguish clearly from DPSPs (State) and FR (rights).',
  ],


  examFrameworks: [
    {
      marks: 10,
      question: 'Write a 10-mark answer on this topic.',
      steps: [
        'Introduce the concept and name the governing provision.',
        'Explain the legal idea in student language — not only the Bare Act words.',
        'State essential elements or the main rule.',
        'Cite one leading authority and its principle.',
        'Give a short illustration or apply the rule to facts.',
        'Note a material exception or distinction.',
        'Conclude with the current legal position.',
      ],
    },
    {
      marks: 16,
      question: 'Expand the same topic into a 16-mark answer.',
      steps: [
        'Introduction and meaning.',
        'Why the rule exists / brief history if relevant.',
        'Legal foundation and elements in detail.',
        'Exceptions, limitations and an important distinction.',
        'Two or more authorities with ratio, not only names.',
        'A hypothetical with analysis.',
        'Current-law position and a short critical comment.',
        'Conclusion.',
      ],
    },
  ],

  revisionPoints: [
    'Start with the provision and the legal idea, not a section dump.',
    'Name the leading case and state what it actually held.',
    'Current through the 106th Amendment (2023) for constitutional topics.',
  ],


}

export default content
