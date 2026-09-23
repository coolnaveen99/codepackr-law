import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Whoever wants the Court to give judgment on facts he asserts must prove those facts (BSA s. 104). The legal burden and the evidential burden are different. An accused who pleads an exception bears s. 108, but the prosecution still proves the offence beyond reasonable doubt.',

  study: `Topic at a glance
[[REF:CONCEPT:EVIDENCE-LAW:BURDEN-OF-PROOF|Burden of proof]] is not “whoever filed the case”. It is a set of statutory rules in BSA Chapter VII (ss. 104–120).

The main rule
s. 104: whoever desires the Court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts, must prove that those facts exist. This is historically IEA 101.

On whom it lies
s. 105: the burden lies on the person who would fail if no evidence at all were given on either side (old IEA 102). That is why the plaintiff ordinarily begins, and why the prosecution must prove the charge.

Particular facts and special knowledge
s. 106 — burden as to a particular fact.
s. 107 — foundational facts for admissibility (if you want a dying declaration, you must prove death).
s. 108 — accused who claims an exception must prove the exception.
s. 109 — fact especially within knowledge.

Why it exists
A trial is not a conversation. Someone must lose if the record is empty. The statute allocates that risk. Criminal law still overlays Woolmington / Indian “beyond reasonable doubt” on the prosecution’s legal burden of the offence.

Essential elements of an answer
1. Name s. 104 as the general rule.
2. Apply s. 105 to the pleadings.
3. Shift only as the statute shifts (exception, special knowledge, presumptions later in the chapter).
4. Never write that the accused must prove innocence.

Current-law position
BSA ss. 104–120 from 1 July 2024. IEA 101–114A is historical. Presumptions as to legitimacy, suicide of a married woman, and similar special rules must be cited from the current BSA text, not from memory of IEA 113A/113B numbers.

Educational note
Confirm any presumption section number in the Bare Act before drafting submissions on 113-family topics.`,

  provisions: [
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-104', section: 's. 104', title: 'Burden of proof' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-105', section: 's. 105', title: 'On whom burden of proof lies' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-108', section: 's. 108', title: 'Burden of proving that case of accused comes within exceptions' },
    { actId: 'bsa', actName: 'Bharatiya Sakshya Adhiniyam, 2023', provisionId: 'bsa-109', section: 's. 109', title: 'Burden of proving fact especially within knowledge' },
  ],

  examples: [
    { id: 'bp-ex-1', title: 'Example 1 — simple', description: 'A sues B on a promissory note. If neither side leads evidence, A fails (s. 105). A must prove the note and the debt (s. 104).' },
    { id: 'bp-ex-2', title: 'Example 2 — legal', description: 'The prosecution proves a killing by the accused. The accused pleads private defence. The offence-burden stays on the prosecution. The exception-burden is on the accused (s. 108), to the standard the criminal law requires for defences — not a reversal of the presumption of innocence.' },
  ],

  hypotheticals: [
    {
      id: 'bp-hypo',
      title: 'Examination hypothetical',
      facts: 'In a dowry-death trial the prosecution proves death of a woman in her matrimonial home within seven years of marriage and cruelty related to dowry. The husband says she committed suicide and that he was in another city. He leads no evidence of the alibi except his own statement.',
      question: 'How do the burdens sit?',
      applicableLaw: 's. 104–105 on the charge; s. 108 if an exception is claimed; s. 109 special knowledge; special presumptions — confirm current BSA section (historically IEA 113B) in the Bare Act before naming a number in the answer.',
      analysis: 'The prosecution must still prove the ingredients the statute requires for the offence and for any presumption to start. If a dowry-death presumption is triggered by proved facts, the husband must explain. A bare alibi in the dock statement rarely discharges a statutory presumption. s. 109 can also put facts especially within household knowledge on him. Needs-review: quote the exact BSA presumption section in the exam from the Bare Act.',
      conclusion: 'Prosecution proves the triggering facts; husband must rebut. Do not write that he must prove innocence of murder as a free-standing s. 104 burden of the whole case.',
    },
  ],

  distinctions: [
    {
      id: 'bp-legal-ev',
      title: 'Legal burden and evidential burden',
      left: 'Legal / persuasive burden (ss. 104–105)',
      right: 'Evidential burden',
      rows: [
        { point: 'Meaning', left: 'Who loses if the record is empty on that issue', right: 'Who must lead some evidence to make an issue live' },
        { point: 'Criminal charge', left: 'Always on the prosecution for the offence', right: 'May shift as facts emerge' },
        { point: 'Exception', left: 's. 108 places the exception on the accused', right: 'Accused must adduce material; prosecution still proves the offence' },
      ],
    },
  ],

  misconceptions: [
    { id: 'bp-trap-1', trap: 'The accused must prove he is innocent.', correction: 'The prosecution proves the offence. s. 108 is only about exceptions the accused claims.' },
    { id: 'bp-trap-2', trap: 'IEA 101 is the current section.', correction: 'Current law is BSA s. 104.' },
  ],

  questionsAndAnswers: [
    { id: 'bp-qa-1', question: 'State BSA s. 104 in substance.', answer: 'Whoever desires the Court to give judgment as to a legal right or liability dependent on facts he asserts must prove those facts.', relatedProvisionIds: ['bsa-104'] },
    { id: 'bp-qa-2', question: 'Who bears the burden if no evidence is given on either side?', answer: 'The person who would fail — s. 105.', relatedProvisionIds: ['bsa-105'] },
  ],

  relatedTopics: ['Admissions & Confessions', 'Doctrine of Estoppel', 'Witnesses & Examination'],

  cases: [
    { name: 'Woolmington v. DPP', year: 1935, citation: '[1935] AC 462', holding: 'The prosecution must prove the prisoner’s guilt. Teaching authority for the criminal legal burden; Indian courts apply the same principle unless a statute clearly shifts it.', relevance: 'Use in any criminal burden answer, then come home to BSA ss. 104 and 108.' },
    { name: 'Shambhu Nath Mehra v. State of Ajmer', year: 1956, citation: 'AIR 1956 SC 404', holding: 'The “especially within knowledge” rule (then IEA 106) does not lift the prosecution’s burden of the offence; it applies to facts which the accused, and not the prosecution, can be expected to know.', relevance: 'Apply to BSA s. 109. Do not use special knowledge to reverse the whole case.' },
  ],

  bareActPointers: ['BSA ss. 104–120', 's. 104', 's. 105', 's. 108', 's. 109', 'IEA 101–106 (historical)'],

  examFrameworks: [
    {
      draftingCategory: 'brief',
      question: 'Explain the burden of proof under the BSA.',
      steps: [
        's. 104 general rule.',
        's. 105 who would fail.',
        's. 108 exception claimed by accused.',
        'One civil and one criminal illustration.',
        'State that innocence is not on the accused.',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: 'Distinguish burden of proof and onus of proof. How do ss. 104–109 allocate risk in civil and criminal trials?',
      steps: [
        'Vocabulary: legal vs evidential burden.',
        'ss. 104–105 in detail.',
        'ss. 106–109 particular facts, admissibility foundations, exceptions, special knowledge.',
        'Criminal overlay: Woolmington; Shambhu Nath Mehra.',
        'Hypothetical.',
        'Presumptions — cite only verified BSA numbers.',
        'Conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — s. 104.',
    's. 105 test.',
    'Special rules 108 and 109.',
    'Criminal standard.',
    'Illustration.',
    'Conclusion.',
  ],

  revisionPoints: [
    's. 104 general; s. 105 who would fail.',
    's. 108 accused proves exceptions, not innocence.',
    's. 109 special knowledge does not flip the whole charge.',
  ],

  examTips: [
    'Write BSA 104, not IEA 101, in a 2026 answer.',
    'If the question names 113A/113B, map them only after checking the current BSA section.',
  ],
}

export default content
