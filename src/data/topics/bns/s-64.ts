import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 64: punishment for rape. Whoever commits rape shall be punished with rigorous imprisonment of not less than ten years, which may extend to imprisonment for life, and shall also be liable to fine. Aggravated forms and gang rape carry higher minima / death. Successor structure to IPC s. 376 with reformed minima and Chapter V placement. Consent and s. 28 are central.',
  study: `Section 64 is the principal punishment section for rape under the BNS.\n\nCore punishment: rigorous imprisonment not less than 10 years, which may extend to imprisonment for life, and fine.\n\nAggravated and special forms (as detailed in the section and related provisions) carry higher minimum terms or death (e.g. gang rape, rape of minor, rape causing death or persistent vegetative state — check the exact sub-sections).\n\nDefinition of rape and consent are in the preceding definitional section(s) of Chapter V; s. 28 (invalid consent) is critical. Marital-rape exception (if any) and age-based rules must be read from the current statutory text.\n\nDate-of-offence rule: offences on or after 1 July 2024 → BNS; before → IPC 375/376.\n\nCite BNS s. 64 for post-1 July 2024 acts. Always plead consent / s. 28 issues carefully.`,
  sections: [
    { id: 's-64-m1', title: 'Provenance & Legislative Objective', order: 1, content: ['Successor structure to IPC s. 376. Chapter V places offences against woman and child before body offences. Minima raised; aggravated forms strengthened.'] },
    { id: 's-64-m2', title: 'Textual Anatomy', order: 2, content: ['Base: RI not less than 10 years, up to life, and fine. Aggravated forms: higher minima / death as per sub-sections.'] },
    { id: 's-64-m3', title: 'Essential Ingredients (with definition section)', order: 3, content: ['(1) Act constituting rape under the definitional section. (2) Absence of valid consent (s. 28). (3) Identity of the accused. Aggravating facts for enhanced punishment.'] },
    { id: 's-64-m4', title: 'Evidentiary Burdens (BSA)', order: 4, content: ['Prosecution proves the act and absence of consent beyond reasonable doubt. Consent under fear/misconception is invalid (s. 28). Medical and digital evidence subject to BSA rules.'] },
    { id: 's-64-m5', title: 'Procedure & Forum', order: 5, content: ['Cognizable, non-bailable; trial by Court of Session as per BNSS Schedule. Victim protections and in-camera trial apply under BNSS / special statutes.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-64', section: 's. 64', title: 'Punishment for rape' }],
  examples: [
    { id: 's-64-ex1', title: 'Base offence', illustrationType: 'practical', description: 'Non-consensual sexual intercourse by an adult male with an adult woman. Base punishment under s. 64 applies (RI ≥ 10 years up to life + fine).' },
    { id: 's-64-ex2', title: 'Invalid consent under s. 28', illustrationType: 'practical', description: 'Apparent consent given under fear of injury known to the accused. Consent is invalid under s. 28; the act is rape punishable under s. 64.' },
  ],
  hypotheticals: [{ id: 's-64-hypo', title: 'Consent and punishment', facts: 'Accused claims consent; evidence shows consent under misconception of fact known to him.', question: 'Is s. 64 attracted?', applicableLaw: 'BNS definition of rape; s. 28; s. 64.', analysis: 'Consent under misconception known to the doer is not valid consent (s. 28). The offence is made out; punishment under s. 64.', conclusion: 'Conviction under s. 64 open.' }],
  distinctions: [],
  misconceptions: [{ id: 's-64-trap', trap: 'Any claim of consent automatically defeats a rape charge.', correction: 'Consent under fear or misconception of fact (known to the accused), or of a person under the statutory age / incapacity, is not valid (s. 28).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-64-brief', draftingCategory: 'brief', question: 'State the punishment for rape under BNS s. 64 and the role of consent.', answer: 'RI not less than 10 years, which may extend to life, and fine (higher for aggravated forms). Consent must be free; consent under fear or misconception known to the accused is invalid under s. 28.', explanation: 'Short note.' },
    { id: 's-64-sub', draftingCategory: 'submissions', question: 'Submissions on s. 64.', answer: 'I. Definitional ingredients. II. Absence of valid consent (s. 28). III. Punishment scale. IV. Aggravating factors if any. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 64', 'BNS s. 28', 'BNSS victim-protection provisions', 'IPC s. 376 (historical)'],
  examTips: ['Always address s. 28 when consent is in issue.', 'State the minimum 10 years RI for the base offence.'],
  revisionPoints: ['Base: RI ≥ 10 years up to life + fine.', 'Consent under fear/misconception (known to accused) is invalid (s. 28).'],
  relatedTopics: ['s-28', 's-2', 'sexual-offences', 's-25'],
}

export default content
