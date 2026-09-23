import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 22: nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law. McNaghten core. Successor to IPC s. 84. “Unsound mind” (not “mental illness”) is the statutory phrase.',
  study: `Section 22 is the insanity defence.\n\nRule: Nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing:\n(a) the nature of the act, or\n(b) that he is doing what is either wrong or contrary to law.\n\nKey points\n• The test is the McNaghten core: cognitive incapacity, not mere medical diagnosis of mental illness.\n• The relevant time is the time of the act.\n• “Unsoundness of mind” is the statutory language (the Bill’s earlier “mental illness” formula was restored to “unsound mind” after the Standing Committee).\n• Burden is on the accused on a preponderance of probabilities (BSA s. 108; old s. 105 Evidence Act line).\n\nLeading authority continues to be the McNaghten rules as applied in India (e.g., the line of cases following Dahyabhai and subsequent Supreme Court decisions). Medical evidence is relevant but not conclusive; the legal test is capacity to know nature or wrongfulness.\n\nCite BNS s. 22 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-22-m1', title: 'Provenance & McNaghten Foundation', order: 1, content: ['Successor to IPC s. 84. Incorporates the McNaghten cognitive test. Phrase is “unsoundness of mind”, not “mental illness”.'] },
    { id: 's-22-m2', title: 'Textual Anatomy', order: 2, content: ['Unsoundness of mind at the time of the act → incapable of knowing nature of the act, or that it is wrong or contrary to law.'] },
    { id: 's-22-m3', title: 'Essential Ingredients', order: 3, content: ['(1) Unsoundness of mind. (2) At the time of the act. (3) Incapacity to know the nature of the act, or that it is wrong/contrary to law.'] },
    { id: 's-22-m4', title: 'Evidentiary Burden', order: 4, content: ['Accused must prove the exception on preponderance of probabilities (BSA s. 108). Medical evidence, conduct before/during/after the act, and expert opinion are the usual materials.'] },
    { id: 's-22-m5', title: 'Procedure & Consequence', order: 5, content: ['If the exception succeeds, the accused is acquitted of the offence but may be dealt with under the mental-health / safe-custody provisions of the BNSS / Mental Healthcare Act.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-22', section: 's. 22', title: 'Act of a person of unsound mind' }],
  examples: [
    { id: 's-22-ex1', title: 'Incapacity made out', illustrationType: 'practical', description: 'A person in a documented psychotic episode kills another, with medical and behavioural evidence showing he did not know the nature of the act. s. 22 may succeed.' },
    { id: 's-22-ex2', title: 'Mere mental illness insufficient', illustrationType: 'fail-scenario', description: 'A person with a diagnosed mental illness who nonetheless understood the nature and wrongfulness of the act is not protected by s. 22. Medical label alone is not enough.' },
  ],
  hypotheticals: [{ id: 's-22-hypo', title: 'Insanity defence', facts: 'Accused has a history of schizophrenia. On the day of the killing he appears to have planned the act and fled. Medical evidence is mixed.', question: 'Does s. 22 apply?', applicableLaw: 'BNS s. 22; BSA s. 108; McNaghten test.', analysis: 'Planning and flight are evidence of knowledge of nature and wrongfulness. The defence must still prove incapacity at the time of the act on the balance of probabilities. Mixed medical evidence may not suffice.', conclusion: 'Likely to fail unless clear evidence of cognitive incapacity at the critical moment is produced.' }],
  distinctions: [{ id: 's-22-dist', title: 'Legal insanity vs Medical insanity', left: 'Legal (s. 22)', right: 'Medical', rows: [{ point: 'Test', left: 'Incapacity to know nature or wrongfulness', right: 'Clinical diagnosis of mental disorder' }, { point: 'Result', left: 'No offence if test met', right: 'Relevant evidence but not conclusive' }] }],
  misconceptions: [{ id: 's-22-trap', trap: 'Any mental illness automatically attracts s. 22.', correction: 'Only unsoundness of mind that produces the specific cognitive incapacity at the time of the act. Medical diagnosis alone is insufficient.' }],
  cases: [
    { name: 'Dahyabhai Chhaganbhai Thakkar v. State of Gujarat', year: 1964, citation: 'AIR 1964 SC 1563', court: 'Supreme Court of India', holding: 'The burden of proving insanity is on the accused on a preponderance of probabilities; the prosecution retains the overall burden of proving the offence beyond reasonable doubt.', relevance: 'Still the leading authority on the burden under the insanity exception (now BNS s. 22 / BSA s. 108).' },
  ],
  questionsAndAnswers: [
    { id: 's-22-brief', draftingCategory: 'brief', question: 'Explain the insanity defence under BNS s. 22.', answer: 'Nothing is an offence done by a person who, by reason of unsoundness of mind at the time of the act, is incapable of knowing the nature of the act or that it is wrong or contrary to law. Burden on the accused on preponderance. Medical illness alone is not enough.', explanation: 'Short note.' },
    { id: 's-22-sub', draftingCategory: 'submissions', question: 'Submissions on s. 22.', answer: 'I. Unsoundness at the time of the act. II. Cognitive incapacity (nature or wrongfulness). III. Evidence and BSA s. 108 burden. IV. Prayer for acquittal on the ground of insanity / appropriate safe-custody order.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 22', 'BSA s. 108', 'IPC s. 84 (historical)', 'Dahyabhai (burden)'],
  examTips: ['Use the phrase “unsoundness of mind”, not “mental illness”.', 'State the McNaghten cognitive test and the BSA s. 108 burden.'],
  revisionPoints: ['Unsound mind + incapacity to know nature or wrongfulness.', 'Burden on accused (preponderance).', 'Medical diagnosis ≠ automatic defence.'],
  relatedTopics: ['s-20', 's-21', 's-23', 'general-exceptions'],
}

export default content
