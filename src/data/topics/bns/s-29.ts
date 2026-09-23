import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 29: the exceptions in ss. 25–28 relating to consent do not extend to acts which are offences independently of any harm they may cause (e.g. offences against the State, public tranquility, etc.). Successor to IPC s. 91.',
  study: `Section 29 limits the consent exceptions.\n\nRule: The exceptions in sections 25, 26, 27 and 28 do not extend to acts which are offences independently of any harm which they may cause, or be intended to cause, or be known to be likely to cause, to the person giving the consent or on whose behalf the consent is given.\n\nEffect: consent cannot legalise offences that are crimes regardless of harm to the consenting person (e.g. certain public-order or State offences). Cite BNS s. 29 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-29-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 91. Consent exceptions do not cover independent offences.'] },
    { id: 's-29-m2', title: 'Text', order: 2, content: ['ss. 25–28 exceptions do not extend to acts that are offences independently of harm to the consenting person.'] },
    { id: 's-29-m3', title: 'Ingredients', order: 3, content: ['The act is an offence independently of any harm to the person who consented.'] },
    { id: 's-29-m4', title: 'Evidence', order: 4, content: ['Nature of the offence — whether it is harm-dependent or independent.'] },
    { id: 's-29-m5', title: 'Procedure', order: 5, content: ['Used to defeat a consent defence when the charged offence does not depend on harm to the consenting party.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-29', section: 's. 29', title: 'Exclusion of acts which are offences independently of harm caused' }],
  examples: [
    { id: 's-29-ex1', title: 'Independent offence', illustrationType: 'practical', description: 'An act that is an offence against public tranquility or the State is not protected by consent of a private person under ss. 25–28, because of s. 29.' },
    { id: 's-29-ex2', title: 'Harm-dependent offence', illustrationType: 'fail-scenario', description: 'Where the offence exists only because of harm to the consenting person, s. 29 does not exclude the consent exceptions.' },
  ],
  hypotheticals: [{ id: 's-29-hypo', title: 'Consent vs independent offence', facts: 'Accused relies on consent; charge is an offence that does not depend on harm to the consenter.', question: 'Does s. 29 block the defence?', applicableLaw: 'BNS s. 29.', analysis: 'Yes — consent exceptions do not extend to such independent offences.', conclusion: 'Consent defence fails.' }],
  distinctions: [],
  misconceptions: [{ id: 's-29-trap', trap: 'Consent always protects under ss. 25–28.', correction: 'Not when the act is an offence independently of harm to the consenting person (s. 29).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-29-brief', draftingCategory: 'brief', question: 'Explain BNS s. 29.', answer: 'The consent exceptions in ss. 25–28 do not extend to acts that are offences independently of any harm to the person giving consent.', explanation: 'Short note.' },
    { id: 's-29-sub', draftingCategory: 'submissions', question: 'Submissions on s. 29.', answer: 'I. Offence independent of harm to consenter. II. Consent exceptions excluded. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 29', 'BNS ss. 25–28', 'IPC s. 91 (historical)'],
  examTips: ['Always check whether the offence is harm-dependent or independent when consent is pleaded.'],
  revisionPoints: ['Consent exceptions (25–28) do not cover offences independent of harm to the consenter.'],
  relatedTopics: ['s-25', 's-26', 's-28', 'general-exceptions'],
}

export default content
