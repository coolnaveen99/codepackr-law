import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 93 (and related child-protection provisions): exposure and abandonment of a child under twelve years by a parent or person having care — leaving the child with intent wholly to abandon it. Successor to IPC s. 317. Distinct from using a child to commit an offence (s. 95) and from the general incapacity rules (ss. 20–21).',
  study: `Exposure and abandonment of a child under the BNS:\n\nWhoever, being the father or mother of a child under the age of twelve years, or having the care of such child, exposes or leaves such child in any place with the intention of wholly abandoning such child, is punished as provided (and if the act causes the death of the child, additional homicide liability may arise).\n\nKey points\n• Child under twelve.\n• Accused is parent or person having care.\n• Exposure or leaving with intent wholly to abandon.\n\nIf death results, ss. 100–106 may also apply depending on mens rea.\n\nCite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-93-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 317. Exposure/abandonment of child under twelve by parent or carer.'] },
    { id: 's-93-m2', title: 'Elements', order: 2, content: ['Child under 12; parent or person having care; exposes or leaves with intent wholly to abandon.'] },
    { id: 's-93-m3', title: 'Ingredients', order: 3, content: ['(1) Child under twelve. (2) Accused is parent or carer. (3) Exposure or leaving. (4) Intent wholly to abandon.'] },
    { id: 's-93-m4', title: 'Evidence', order: 4, content: ['Age; relationship/care; circumstances of leaving; intention to abandon.'] },
    { id: 's-93-m5', title: 'Procedure', order: 5, content: ['May be joined with homicide charges if death results; juvenile/child-protection processes may also engage.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-93', section: 's. 93', title: 'Exposure and abandonment of child under twelve years by parent or person having care of it' }],
  examples: [
    { id: 's-93-ex1', title: 'Abandonment', illustrationType: 'practical', description: 'A parent leaves a two-year-old in a remote place intending never to return. The offence is made out.' },
    { id: 's-93-ex2', title: 'Temporary leaving without abandon intent', illustrationType: 'fail-scenario', description: 'A parent briefly leaves a child with a neighbour. No intent wholly to abandon — the offence is not made out.' },
  ],
  hypotheticals: [{ id: 's-93-hypo', title: 'Abandonment intent', facts: 'Parent leaves an infant at a temple with no arrangement for care and does not return.', question: 'Is the offence made out?', applicableLaw: 'BNS exposure/abandonment provisions.', analysis: 'Child under 12; parent; leaving with intent wholly to abandon — yes.', conclusion: 'Offence established.' }],
  distinctions: [],
  misconceptions: [{ id: 's-93-trap', trap: 'Any leaving of a child is this offence.', correction: 'The intent wholly to abandon is essential. Temporary or arranged care does not constitute the offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-93-brief', draftingCategory: 'brief', question: 'Explain exposure and abandonment of a child under the BNS.', answer: 'A parent or person having care of a child under twelve who exposes or leaves the child with the intention of wholly abandoning the child commits the offence. If death results, homicide provisions may also apply.', explanation: 'Short note.' },
    { id: 's-93-sub', draftingCategory: 'submissions', question: 'Submissions on abandonment of child.', answer: 'I. Child under 12. II. Parent/carer. III. Intent wholly to abandon. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS exposure/abandonment provisions', 'BNS s. 95', 'BNS ss. 20–21', 'IPC s. 317 (historical)'],
  examTips: ['Stress intent wholly to abandon and the under-twelve age.', 'Link to homicide if death results.'],
  revisionPoints: ['Parent/carer + child under 12 + intent wholly to abandon.', 'Death may attract homicide sections.', 'Temporary leaving ≠ abandonment.'],
  relatedTopics: ['s-95', 's-20', 's-100', 's-2'],
}

export default content
