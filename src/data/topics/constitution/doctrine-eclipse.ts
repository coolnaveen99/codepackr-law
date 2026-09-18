import type { TopicContent } from '../loadTopicContent'

/**
 * Doctrine of Eclipse
 * Subject: constitution | Topic id: doctrine-eclipse
 * Art 13 — pre-Constitution laws and Fundamental Rights.
 */
const content: TopicContent = {

  study: `Related: Article 13 (laws inconsistent with or in derogation of Fundamental Rights).

Core idea
The doctrine of eclipse says that a pre-Constitution law inconsistent with a Fundamental Right is not wiped out entirely; it remains in a shadowed / dormant state to the extent of inconsistency and can revive if the inconsistency is removed (for example by constitutional amendment), especially in contexts historically associated with Article 13 and pre-Constitution laws.

Article 13 setting
Article 13 declares laws inconsistent with Fundamental Rights void to the extent of inconsistency. The eclipse doctrine is a judicial tool explaining the status of pre-Constitution laws vis-à-vis Part III.

Classic association
Bhikaji Narain Dhakras is the standard citation for the eclipse idea in Indian constitutional law teaching: inconsistent pre-Constitution law is eclipsed by the Fundamental Right.

Exam focus
State the doctrine in one sentence. Link to Article 13. Distinguish from severability (which saves the valid part of a law). Give Bhikaji as the landmark.`,

  sections: [
    { id: 'eclipse-core', title: 'Meaning', order: 1, content: [
      'An inconsistent pre-Constitution law is eclipsed by the Fundamental Right to the extent of inconsistency.',
      'It is not necessarily obliterated for all purposes and may revive if the inconsistency is removed.',
    ]},
    { id: 'eclipse-art13', title: 'Article 13 link', order: 2, content: [
      'Article 13 is the textual setting for inconsistency with Fundamental Rights.',
      'Eclipse is usually contrasted with severability, which separates valid and invalid parts of a law.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with or in derogation of the Fundamental Rights' },
  ],

  examples: [
    { id: 'eclipse-example', title: 'Pre-Constitution statute', description: 'A pre-1950 statute that conflicts with a Fundamental Right is treated as eclipsed to that extent; if the conflicting constitutional barrier is later removed, revival may be discussed under the eclipse doctrine.' },
  ],

  questionsAndAnswers: [
    { id: 'eclipse-qa-1', question: 'What is the doctrine of eclipse?', answer: 'It treats a pre-Constitution law inconsistent with a Fundamental Right as overshadowed to the extent of inconsistency, rather than totally obliterated, so revival may be possible if the inconsistency ends.', relatedProvisionIds: ['constitution-article-13'] },
    { id: 'eclipse-qa-2', question: 'Which Article is most closely linked with the eclipse doctrine in teaching?', answer: 'Article 13.', relatedProvisionIds: ['constitution-article-13'] },
    { id: 'eclipse-qa-3', question: 'Name the classic case associated with the doctrine of eclipse.', answer: 'Bhikaji Narain Dhakras v. State of Madhya Pradesh.', relatedProvisionIds: ['constitution-article-13'] },
  ],

  relatedTopics: ['Doctrine of Severability', 'Fundamental Rights', 'Amendment of the Constitution'],

  cases: [
    { name: 'Bhikaji Narain Dhakras v. State of Madhya Pradesh', year: 1955, citation: 'AIR 1955 SC 781', holding: 'A pre-Constitution law inconsistent with a Fundamental Right remains eclipsed to the extent of inconsistency and is not obliterated for all purposes.', relevance: 'Standard authority for the doctrine of eclipse.' },
  ],

  bareActPointers: ['Art 13'],

  examTips: [
    'One-line definition + Article 13.',
    'Cite Bhikaji Narain Dhakras.',
    'Distinguish eclipse (shadow/revive) from severability (cut invalid part).',
    'Keep the discussion to pre-Constitution law vs FR unless the question expands.',
  ],

}

export default content
