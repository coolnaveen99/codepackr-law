import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 3 supplies the general explanations that control how the rest of the Sanhita is read. Clause (5) is the modern restatement of common intention (old IPC s. 34): when a criminal act is done by several persons in furtherance of the common intention of all, each is liable as if he alone did the act. Do not confuse s. 3(5) with common object (s. 190).',

  study: `Topic at a glance
Section 3 is the “how to read this Act” provision. It contains a series of interpretive rules and, most importantly, the doctrine of common intention in sub-section (5).

Common intention — s. 3(5)
“When a criminal act is done by several persons in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.”

This is the direct successor of IPC s. 34. The classic requirements remain:
1. A criminal act done by several persons.
2. A common intention shared by all.
3. The act must be in furtherance of that common intention.

Common intention may be formed on the spur of the moment; prior concert is not indispensable, but the existence of a shared intention must be proved by conduct and circumstances. Each participant is constructively liable for the act done in furtherance of the common intention even if he did not himself strike the fatal blow.

Other general explanations in s. 3
The section also contains rules on:
• gender and number (words importing the masculine gender include females; singular includes plural and vice versa);
• “man” / “woman” / “person”;
• acts done by several persons in furtherance of common intention (the core clause above);
• cooperation by doing different acts that together constitute the offence;
• liability when several persons are concerned in a criminal act but may be guilty of different offences;
• and related interpretive canons that prevent technical evasions.

Common intention (s. 3(5)) vs common object (s. 190)
• s. 3(5) — common intention; no requirement of an unlawful assembly; liability is as if the act were done by each alone.
• s. 190 — common object of an unlawful assembly (five or more persons); the specific objects listed in s. 189; liability under the assembly provisions.
Do not interchange the two doctrines or their section numbers.

Relationship with abetment and conspiracy
Common intention is a rule of joint liability for a completed criminal act. It is distinct from abetment (Chapter IV) and from criminal conspiracy. The same facts may sometimes support more than one of these heads; the charge must still track the correct legal category.

Educational note
Every answer on joint liability for a single fatal blow or a coordinated assault must open with s. 3(5) (not “s. 34 BNS” — that number does not exist).`,

  sections: [
    {
      id: 's-3-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 3 restates and slightly reorganises the general explanations that appeared in the early sections of the IPC. Its most litigated clause is sub-section (5), the successor to IPC s. 34.',
        'Legislative objective: supply uniform rules of construction so that gender, number, joint action and cooperation are read consistently throughout the Sanhita, and to preserve the well-settled doctrine of common intention without requiring a separate stand-alone section number.',
        'Doctrinal foundation of common intention: Barendra Kumar Ghosh, Mahbub Shah, and the long line of Supreme Court authority that treats s. 34 / s. 3(5) as a rule of joint liability based on shared intention and participation, not as a distinct offence.',
      ],
    },
    {
      id: 's-3-module-2',
      title: 'Textual Anatomy — Common Intention and Other Explanations',
      order: 2,
      content: [
        's. 3(5) — When a criminal act is done by several persons in furtherance of the common intention of all, each is liable as if he alone did the act.',
        'Supporting clauses deal with cooperation by successive or simultaneous acts, and with the possibility that participants in the same act may be guilty of different offences according to their individual intention or knowledge.',
        'Gender and number clauses ensure that masculine includes feminine and singular includes plural (and vice versa) unless context otherwise requires.',
        'Other clauses prevent artificial distinctions between act and omission when both together cause the prohibited result.',
      ],
    },
    {
      id: 's-3-module-3',
      title: 'Mandatory Proving Ingredients of Common Intention (s. 3(5))',
      order: 3,
      content: [
        '1. A criminal act was done.',
        '2. The act was done by several persons (more than one).',
        '3. Those persons shared a common intention.',
        '4. The criminal act was done in furtherance of that common intention.',
        'Once these are proved, each participant is liable as if he alone committed the act. Physical presence and some participation (active or passive that furthers the intention) are required; mere presence without shared intention is insufficient.',
      ],
    },
    {
      id: 's-3-module-4',
      title: 'Evidentiary Burdens under BSA 2023',
      order: 4,
      content: [
        'Common intention is almost always a matter of inference from conduct, weapons, sequence of events, prior relationships and the nature of the attack. Direct evidence of a pre-arranged plan is rare.',
        'Prosecution must prove the shared intention beyond reasonable doubt. The accused may raise the absence of common intention or the existence of a sudden, independent act by one participant.',
        'Once common intention is established, the prosecution does not have to prove which accused struck the fatal blow; each is constructively liable.',
      ],
    },
    {
      id: 's-3-module-5',
      title: 'Procedural Roadmap, Competent Forum & Practical Charging',
      order: 5,
      content: [
        'Common intention is not a separate offence; it is a rule of liability attached to the substantive offence (murder, hurt, etc.). The charge should recite the substantive section read with s. 3(5).',
        'Forum, cognizability and bailability follow the substantive offence under the BNSS First Schedule.',
        'Where the facts also disclose an unlawful assembly, the prosecution may charge both s. 3(5) and the common-object provisions (ss. 189–190); the two doctrines are distinct and can co-exist.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-3',
      section: 's. 3',
      title: 'General explanations',
    },
  ],

  examples: [
    {
      id: 's-3-ill-1',
      title: 'Illustration 1 — Common intention made out',
      illustrationType: 'practical',
      description:
        'A and B, pursuant to a shared plan to teach C a lesson, attack C with sticks. A strikes the fatal blow on the head; B holds C. Both are liable for the resulting murder under the substantive section read with s. 3(5), even though only A delivered the fatal injury.',
    },
    {
      id: 's-3-ill-2',
      title: 'Illustration 2 — No common intention',
      illustrationType: 'fail-scenario',
      description:
        'A and B are present at a sudden quarrel. A, acting independently and without any shared plan, pulls out a knife and stabs C. B neither encourages nor participates. B is not liable under s. 3(5); only A is liable for the stabbing.',
    },
  ],

  hypotheticals: [
    {
      id: 's-3-hypo',
      title: 'Chamber Hypothetical — Spur-of-the-moment common intention',
      facts:
        'During a heated argument at a tea stall, A and B suddenly join in beating C. No prior plan is proved. A strikes C on the head with a heavy stick; B kicks C while he is down. C dies of the head injury.',
      question:
        'Can B be held liable for murder with the aid of s. 3(5)?',
      applicableLaw: 'BNS s. 3(5); substantive murder provisions (ss. 101/103); case-law on formation of common intention on the spot.',
      analysis:
        '1. Common intention can form on the spur of the moment; prior concert is not essential. 2. The question is whether the proved conduct shows that B shared the intention to cause the injury that resulted in death (or knowledge sufficient for the applicable murder clause). 3. Participation by kicking while A delivers the fatal blow is strong evidence of shared intention. 4. If the fact-finder finds only a sudden, independent act by A, B may escape constructive liability.',
      conclusion:
        'On the given facts a court may properly infer common intention and convict B under the murder section read with s. 3(5). The inference remains a question of fact.',
    },
  ],

  distinctions: [
    {
      id: 's-3-dist-1',
      title: 'Common intention (s. 3(5)) vs Common object (s. 190)',
      left: 's. 3(5) — Common intention',
      right: 's. 190 — Common object',
      rows: [
        {
          point: 'Minimum number',
          left: 'Two or more',
          right: 'Five or more (unlawful assembly)',
        },
        {
          point: 'Mental element',
          left: 'Shared intention',
          right: 'Common object of the assembly (listed objects)',
        },
        {
          point: 'Prior concert',
          left: 'Not essential; may form on the spot',
          right: 'Object of the assembly must be proved',
        },
        {
          point: 'Liability rule',
          left: 'Each liable as if he alone did the act',
          right: 'Liability under the unlawful-assembly / rioting scheme',
        },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-3-trap-1',
      trap: 'Common intention is found in BNS s. 34 or s. 190.',
      correction:
        'Common intention is s. 3(5). There is no s. 34 in the BNS. s. 190 is common object of an unlawful assembly.',
    },
    {
      id: 's-3-trap-2',
      trap: 'Prior meeting of minds is indispensable for s. 3(5).',
      correction:
        'Common intention may be formed on the spur of the moment. What must be proved is the existence of a shared intention at the time the act is done, not a long-premeditated plan.',
    },
  ],

  cases: [
    {
      name: 'Barendra Kumar Ghosh v. King Emperor',
      year: 1925,
      citation: 'AIR 1925 PC 1',
      court: 'Privy Council',
      holding:
        'Section 34 is a rule of joint liability; “a criminal act done by several persons” includes the act of one participant attributed to all who share the common intention.',
      relevance:
        'Foundational authority still cited for the constructive-liability principle now contained in BNS s. 3(5).',
    },
    {
      name: 'Mahbub Shah v. Emperor',
      year: 1945,
      citation: 'AIR 1945 PC 118',
      court: 'Privy Council',
      holding:
        'Common intention implies a pre-arranged plan, but the plan may be inferred from conduct; mere presence or similar intention formed independently is not enough.',
      relevance:
        'Classic caution against equating similar intention with common intention; still guides the inference under s. 3(5).',
    },
  ],

  questionsAndAnswers: [
    {
      id: 's-3-brief',
      draftingCategory: 'brief',
      question: 'Explain the doctrine of common intention under Section 3(5) of the BNS and distinguish it from common object.',
      answer: `I. ISSUE\nWhen and how does joint liability arise under s. 3(5), and how does it differ from s. 190?\n\nII. RULE\ns. 3(5): criminal act by several persons in furtherance of common intention of all → each liable as if he alone did the act. Common intention may form on the spot. Distinct from common object of an unlawful assembly (s. 190).\n\nIII. APPLICATION\nProve shared intention from conduct; physical participation that furthers the intention; no need to prove who struck the fatal blow once common intention is established.\n\nIV. CONCLUSION\nCharge the substantive offence read with s. 3(5). Never cite “s. 34 BNS”. Keep common intention and common object analytically separate.`,
      explanation: 'IRAC note on the central joint-liability rule.',
    },
    {
      id: 's-3-submissions',
      draftingCategory: 'submissions',
      question: 'Draft written submissions on common intention under BNS s. 3(5) with reference to leading authority and the distinction from common object.',
      answer: `I. STATEMENT OF FACTS\n[Insert the joint-assault facts.]\n\nII. STATUTORY SCHEME\ns. 3(5) is the successor to IPC s. 34. It is a rule of liability, not a distinct offence.\n\nIII. INGREDIENTS\nCriminal act + several persons + common intention + act in furtherance of that intention.\n\nIV. AUTHORITY\nBarendra Kumar Ghosh (constructive liability); Mahbub Shah (inference of common intention; caution against equating similar intention).\n\nV. DISTINCTION FROM s. 190\nNumber, mental element, and liability scheme differ. Both may be charged if facts support both.\n\nVI. PRAYER\nConvict each participant under the substantive section read with s. 3(5) / or acquit the secondary participant if common intention is not proved.`,
      explanation: 'Full written-submissions format for common-intention cases.',
    },
  ],

  bareActPointers: [
    'BNS s. 3 (especially s. 3(5))',
    'BNS s. 190 (common object — for distinction)',
    'IPC s. 34 (historical concordance only)',
  ],

  examTips: [
    'Never write “s. 34 BNS”. The correct cite is s. 3(5).',
    'State expressly that common intention can form on the spur of the moment.',
    'Keep a clean distinction table between s. 3(5) and s. 190.',
  ],

  revisionPoints: [
    'Common intention = s. 3(5) (old IPC 34).',
    'Each liable as if he alone did the act.',
    'May form on the spur of the moment.',
    'Distinct from common object (s. 190).',
  ],

  relatedTopics: [
    's-1',
    's-2',
    'doctrine-common-intention',
    'general-explanations',
    's-190',
    'culpable-homicide-murder',
  ],
}

export default content
