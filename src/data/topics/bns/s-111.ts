import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 111: organised crime — a new / strengthened provision under the BNS. Covers continuing unlawful activity by individuals acting singly or jointly as members of organised crime syndicates, including certain economic and violent offences as defined. Higher punishments and specific ingredients. Distinct from ordinary conspiracy (s. 61) and common intention (s. 3(5)).',
  study: `Section 111 addresses organised crime.\n\nCore idea: continuing unlawful activity by a person acting singly or jointly as a member of an organised crime syndicate, involving offences of the kinds listed (violence, economic offences, etc. as in the statutory text), and done with the object of gaining material or financial benefit or for other specified purposes.\n\nKey features\n• “Organised crime syndicate” and “continuing unlawful activity” are defined in the section.\n• The provision is designed for patterned, syndicate-linked offending, not one-off crimes.\n• Punishment is significantly higher than for the underlying ordinary offences.\n\nDistinguish from:\n• Criminal conspiracy (s. 61) — agreement;\n• Common intention (s. 3(5)) — joint liability for a single criminal act;\n• Ordinary abetment (s. 45).\n\nCite BNS s. 111 for post-1 July 2024 organised-crime charges. Always plead the syndicate / continuing-activity ingredients carefully.`,
  sections: [
    { id: 's-111-m1', title: 'Provenance & Objective', order: 1, content: ['New / strengthened organised-crime provision. Targets syndicate-linked continuing unlawful activity.'] },
    { id: 's-111-m2', title: 'Textual Elements', order: 2, content: ['Continuing unlawful activity; member of organised crime syndicate (singly or jointly); listed offence types; object of material/financial benefit or other specified objects.'] },
    { id: 's-111-m3', title: 'Ingredients', order: 3, content: ['(1) Continuing unlawful activity. (2) As member of organised crime syndicate. (3) Offence type within the section. (4) Object as defined.'] },
    { id: 's-111-m4', title: 'Evidence', order: 4, content: ['Pattern of activity; syndicate links; economic/violent nature; object of benefit. Digital and financial trails often central.'] },
    { id: 's-111-m5', title: 'Procedure', order: 5, content: ['Serious offence; Sessions trial; BNSS procedure; may interact with special statutes (UAPA, etc.) where applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-111', section: 's. 111', title: 'Organised crime' }],
  examples: [
    { id: 's-111-ex1', title: 'Syndicate pattern', illustrationType: 'practical', description: 'A group repeatedly commits economic offences as a continuing activity for financial gain under a syndicate structure. s. 111 may apply.' },
    { id: 's-111-ex2', title: 'One-off crime', illustrationType: 'fail-scenario', description: 'A single isolated offence without syndicate / continuing-activity elements is not organised crime under s. 111; charge the ordinary offence instead.' },
  ],
  hypotheticals: [{ id: 's-111-hypo', title: 'Organised crime vs ordinary offence', facts: 'Repeated similar offences by a structured group for profit.', question: 'Is s. 111 attracted?', applicableLaw: 'BNS s. 111.', analysis: 'If continuing unlawful activity + syndicate membership + listed offence type + object of benefit are proved — yes.', conclusion: 's. 111 may be charged.' }],
  distinctions: [{ id: 's-111-dist', title: 'Organised crime vs Conspiracy', left: 's. 111 (organised crime)', right: 's. 61 (conspiracy)', rows: [{ point: 'Focus', left: 'Continuing syndicate activity', right: 'Agreement to do illegal act' }] }],
  misconceptions: [{ id: 's-111-trap', trap: 'Any group crime is organised crime under s. 111.', correction: 's. 111 requires the statutory ingredients of continuing unlawful activity and organised crime syndicate (and related elements). Ordinary group offences may be conspiracy, common intention, or unlawful assembly instead.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-111-brief', draftingCategory: 'brief', question: 'Outline organised crime under BNS s. 111.', answer: 'Continuing unlawful activity by a person acting as a member of an organised crime syndicate, involving listed offence types for material/financial benefit or other specified objects. Distinct from ordinary conspiracy and common intention.', explanation: 'Short note.' },
    { id: 's-111-sub', draftingCategory: 'submissions', question: 'Submissions on s. 111.', answer: 'I. Continuing activity. II. Syndicate. III. Offence type and object. IV. Distinction from conspiracy. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 111', 'BNS s. 61', 'BNS s. 3(5)', 'BNS s. 45'],
  examTips: ['Plead continuing activity and syndicate membership expressly.', 'Do not conflate with ordinary conspiracy.'],
  revisionPoints: ['Continuing unlawful activity + organised crime syndicate + listed offences + object of benefit.', 'Not the same as conspiracy or common intention.'],
  relatedTopics: ['s-61', 's-3', 's-45', 's-103'],
}

export default content
