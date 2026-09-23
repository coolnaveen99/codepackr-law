import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 106: causing death by rash or negligent act not amounting to culpable homicide. Punishment as per the statutory scale. Sub-section (2) (hit-and-run causing death and fleeing without reporting) was NOT brought into force by S.O. 850(E) — only s. 106(1) is in force. IPC 304A → BNS 106(1).',
  study: `Section 106 deals with death by rashness or negligence.\n\n(1) Whoever causes death by doing any rash or negligent act not amounting to culpable homicide shall be punished with the imprisonment/fine scale stated in the section.\n\n(2) When the act is done by a person driving a vehicle and that person escapes without reporting to a police officer or Magistrate soon after the incident — enhanced punishment (as in the text). **This sub-section is NOT in force.** S.O. 850(E) dated 23 February 2024 brought the Sanhita into force on 1 July 2024 except s. 106(2).\n\nKey distinction from s. 100/105: there is no intention or knowledge of the degree required for culpable homicide — only rashness or negligence.\n\nCite BNS s. 106(1) for post-1 July 2024 rash/negligent deaths. Do not apply s. 106(2).`,
  sections: [
    { id: 's-106-m1', title: 'Provenance & Commencement', order: 1, content: ['Successor to IPC s. 304A. s. 106(1) in force from 1 July 2024; s. 106(2) expressly excepted by S.O. 850(E) and is not law.'] },
    { id: 's-106-m2', title: 'Text', order: 2, content: ['(1) Death by rash or negligent act not amounting to culpable homicide. (2) Hit-and-run enhancement — NOT IN FORCE.'] },
    { id: 's-106-m3', title: 'Ingredients (s. 106(1))', order: 3, content: ['(1) Death of a human being. (2) Caused by a rash or negligent act of the accused. (3) The act does not amount to culpable homicide (no s. 100 intention/knowledge).'] },
    { id: 's-106-m4', title: 'Evidence', order: 4, content: ['Standard of care; deviation amounting to rashness or negligence; causation of death.'] },
    { id: 's-106-m5', title: 'Procedure', order: 5, content: ['Forum and bailability as per BNSS Schedule for s. 106(1). Do not charge under s. 106(2).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-106', section: 's. 106', title: 'Causing death by negligence' }],
  examples: [
    { id: 's-106-ex1', title: 'Rash driving death', illustrationType: 'practical', description: 'A drives at high speed through a crowded market and causes death. If there is no intention or knowledge under s. 100, the offence is under s. 106(1).' },
    { id: 's-106-ex2', title: 's. 106(2) not in force', illustrationType: 'fail-scenario', description: 'Do not charge or convict under s. 106(2). It has not been brought into force. Hit-and-run death is dealt with under s. 106(1) (and any other applicable provisions).' },
  ],
  hypotheticals: [{ id: 's-106-hypo', title: 'Rash act vs culpable homicide', facts: 'Death caused by a reckless act; no proof of intention or knowledge under s. 100.', question: 'Which section?', applicableLaw: 'BNS ss. 100, 106(1).', analysis: 'Without s. 100 mental element, the correct section is s. 106(1).', conclusion: 'Charge under s. 106(1).' }],
  distinctions: [{ id: 's-106-dist', title: 's. 106 vs s. 100/105', left: 's. 106 (rash/negligent)', right: 's. 100/105 (culpable homicide)', rows: [{ point: 'Mental element', left: 'Rashness or negligence only', right: 'Intention or knowledge that death is likely' }] }],
  misconceptions: [
    { id: 's-106-trap-1', trap: 's. 106(2) hit-and-run is in force.', correction: 'S.O. 850(E) expressly left s. 106(2) out of force. Only s. 106(1) operates.' },
    { id: 's-106-trap-2', trap: 'Any driving death is automatically under s. 106.', correction: 'If intention or knowledge under s. 100 is proved, the correct path is s. 100/101/105, not s. 106.' },
  ],
  cases: [],
  questionsAndAnswers: [
    { id: 's-106-brief', draftingCategory: 'brief', question: 'Explain BNS s. 106 and the status of sub-section (2).', answer: 's. 106(1) punishes causing death by a rash or negligent act not amounting to culpable homicide. s. 106(2) (hit-and-run enhancement) is not in force (S.O. 850(E)).', explanation: 'Short note.' },
    { id: 's-106-sub', draftingCategory: 'submissions', question: 'Submissions on s. 106.', answer: 'I. Death by rash/negligent act. II. No s. 100 mental element. III. s. 106(1) only — (2) not in force. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 106(1)', 'S.O. 850(E) (s. 106(2) not in force)', 'BNS s. 100', 'IPC s. 304A (historical)'],
  examTips: ['Always state that s. 106(2) is not in force.', 'Distinguish rash/negligence from s. 100 intention/knowledge.'],
  revisionPoints: ['s. 106(1) in force; s. 106(2) NOT in force.', 'Rash/negligent death without s. 100 mens rea.', 'IPC 304A → BNS 106(1).'],
  relatedTopics: ['s-100', 's-105', 's-1', 's-18'],
}

export default content
