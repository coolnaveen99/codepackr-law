import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 122 (and related): voluntarily causing hurt or grievous hurt by dangerous weapons when done to extort or constrain — combination of the dangerous-weapon enhancement and the extort/constrain purpose. Successor structure to IPC ss. 326/329 overlap cases. Highest hurt-scale provisions short of homicide.',
  study: `The BNS provides enhanced punishment when hurt or grievous hurt is caused by dangerous weapons or means and/or for the purpose of extortion or illegal constraint.\n\nWhen both features are present (dangerous means + extort/constrain purpose), the highest non-homicide hurt scales typically apply.\n\nKey analytical steps\n1. Is there hurt or grievous hurt?\n2. Was it voluntary (intention or knowledge)?\n3. Dangerous weapon/means? (s. 118 pathway)\n4. Purpose to extort or constrain? (s. 120 pathway)\n5. If death results → move to homicide (ss. 100–106).\n\nCite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-122-m1', title: 'Provenance', order: 1, content: ['Combination of dangerous-weapon and extort/constrain enhancements in the hurt scheme.'] },
    { id: 's-122-m2', title: 'Analytical Path', order: 2, content: ['Hurt/GH → voluntary → dangerous means? → extort/constrain purpose? → if death, homicide.'] },
    { id: 's-122-m3', title: 'Ingredients', order: 3, content: ['(1) Hurt or GH. (2) Voluntarily. (3) Dangerous weapon/means and/or extort-constrain purpose as charged.'] },
    { id: 's-122-m4', title: 'Evidence', order: 4, content: ['Injury; weapon; purpose (demands, constraint); intention/knowledge.'] },
    { id: 's-122-m5', title: 'Procedure', order: 5, content: ['Serious hurt offence; may be joined with extortion/robbery/homicide attempts.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-122', section: 's. 122', title: 'Hurt/GH by dangerous means to extort or constrain (enhanced pathway)' }],
  examples: [
    { id: 's-122-ex1', title: 'Knife used to extort', illustrationType: 'practical', description: 'A uses a knife to cause hurt while demanding money. Dangerous means + extort purpose → highest hurt enhancement (short of homicide).' },
    { id: 's-122-ex2', title: 'Death results', illustrationType: 'fail-scenario', description: 'If the victim dies, the analysis moves to ss. 100–106; the hurt sections no longer govern the death.' },
  ],
  hypotheticals: [{ id: 's-122-hypo', title: 'Enhanced hurt pathway', facts: 'Accused uses acid to cause injury while demanding property.', question: 'Which pathway?', applicableLaw: 'BNS hurt enhancements; s. 308.', analysis: 'Corrosive = dangerous means; demand = extort purpose; if death, homicide. Otherwise highest hurt scale + extortion.', conclusion: 'Enhanced hurt + extortion pathway.' }],
  distinctions: [],
  misconceptions: [{ id: 's-122-trap', trap: 'Dangerous-weapon hurt is always attempted murder.', correction: 'Attempted murder requires s. 100/101 mens rea. Dangerous-weapon hurt without that mens rea remains under the hurt scheme, not attempt to murder.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-122-brief', draftingCategory: 'brief', question: 'How should hurt by dangerous means for extortion be analysed under the BNS?', answer: 'Check: (1) hurt or GH; (2) voluntary; (3) dangerous weapon/means; (4) extort or constrain purpose; (5) if death results, move to homicide. The combination of dangerous means and extort purpose attracts the highest non-homicide hurt scales.', explanation: 'Short note.' },
    { id: 's-122-sub', draftingCategory: 'submissions', question: 'Submissions on enhanced hurt pathway.', answer: 'I. Hurt/GH. II. Dangerous means. III. Extort/constrain purpose. IV. No death (or alternatively homicide). V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS hurt-enhancement provisions', 'BNS s. 118', 'BNS s. 120', 'BNS ss. 100–106', 'BNS s. 308'],
  examTips: ['Always run the analytical path: hurt → voluntary → dangerous means → purpose → death?', 'Do not jump to attempt to murder without s. 100/101 mens rea.'],
  revisionPoints: ['Dangerous means + extort purpose = highest hurt scale.', 'Death → homicide pathway.', 'Attempt to murder needs homicidal mens rea.'],
  relatedTopics: ['s-115', 's-117', 's-118', 's-120', 's-100', 's-308'],
}

export default content
