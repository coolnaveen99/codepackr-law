import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  study: `Culpable homicide and murder

Canonical record: [[REF:CONCEPT:CRIMINAL-LAW:CULPABLE-HOMICIDE]].

Culpable homicide (s. 100) is the genus. Murder (s. 101) is the species. Punishments live in s. 103 (murder) and s. 105 (culpable homicide not amounting to murder).

Number traps
• IPC 302 is BNS 103, not 101. 101 is the definition of murder.
• IPC 304 is BNS 105. BNS 304 is snatching.
• IPC 304A is BNS 106 (rash or negligent death). 106(2) hit-and-run is not in force.

Clauses and exceptions
Govinda and Virsa Singh still teach the clauses. Exceptions to s. 101 drop the killing to s. 105 — they do not acquit. Private defence exceeded in good faith is Exception 2 ([[REF:DOCTRINE:CRIMINAL-LAW:PRIVATE-DEFENCE]]).

s. 103(2) is the new five-person murder (lynching) clause. Do not treat it as common intention.

Exam focus
100/101 definitions, 103/105 punishments. Date of offence decides IPC vs BNS ([[REF:PROCEDURE:CRIMINAL-LAW:IPC-TO-BNS]]).`,
  examTips: [
    'IPC 302 → BNS 103. Never write 101 as the murder punishment.',
    '106(2) is not in force. 106(1) is.',
  ],
  relatedTopics: ['offences-body', 's-100', 's-101', 's-103', 's-105', 's-106'],
  provisions: [
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-100', section: 's. 100', title: 'Culpable homicide' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-101', section: 's. 101', title: 'Murder' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-103', section: 's. 103', title: 'Punishment for murder' },
  ],
}

export default content
