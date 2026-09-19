import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 11 of the Hindu Marriage Act, 1955 declares certain marriages null and void. A void marriage is void ab initio — it is treated as never having taken place in the eyes of the law, though a formal decree of nullity is still commonly sought for clarity of status and for consequential reliefs.

Introduction
Void and voidable marriages are tested constantly. Section 11 is the void category; section 12 is the voidable category. Do not mix the grounds.

Meaning and concept
Any marriage solemnised after the commencement of the Act is null and void if it contravenes any of the following conditions in s. 5:
(i) either party had a spouse living at the time of the marriage (bigamy);
(ii) the parties are within the degrees of prohibited relationship (unless custom permits);
(iii) the parties are sapindas of each other (unless custom permits).

Why the rule exists
Monogamy and the prohibition of close-blood unions are mandatory. The law refuses to recognise such unions as marriages.

How the rule operates
- Either party may petition for a decree of nullity.
- Children of void marriages are conferred legitimacy under s. 16 (with limits on property rights vis-à-vis other persons).
- Bigamy also attracts criminal consequences under s. 17 HMA read with the relevant penal law.

Exceptions / custom
Custom may save a marriage within prohibited degrees or sapinda relationship if it governs both parties and is valid in law.

Current-law close
Cite Section 11 of the Hindu Marriage Act, 1955. List the three grounds. Contrast with s. 12 (voidable). Mention s. 16 on legitimacy.`

export default {
  glance:
    'Section 11 HMA — void marriages: bigamy, prohibited degrees, sapinda relationship (unless custom permits). Void ab initio; decree of nullity; children protected under s. 16.',
  study,
  examples: [
    {
      id: 's11-ex-1',
      title: 'Example — bigamy',
      description:
        'H marries W1. Without divorce he marries W2. The second marriage is void under s. 11(i).',
    },
    {
      id: 's11-ex-2',
      title: 'Example — prohibited degrees',
      description:
        'Parties marry within prohibited degrees without a governing custom. Marriage is void under s. 11(ii).',
    },
  ],
  hypotheticals: [
    {
      id: 's11-hypo',
      title: 'Classroom problem',
      facts:
        'A’s first wife is alive. A marries B in 2022. B seeks a decree of nullity and maintenance.',
      question: 'What is the status of the marriage and what reliefs can B seek?',
      applicableLaw: 'Sections 5, 11, 16, 24 and 25 of the Hindu Marriage Act, 1955.',
      analysis:
        'The marriage is void under s. 11(i). B can seek a decree of nullity. Interim and permanent maintenance may be available under ss. 24–25 in appropriate proceedings. Children, if any, get legitimacy under s. 16.',
      conclusion:
        'Void under s. 11(i); decree of nullity plus consequential reliefs; cite the Act by name.',
    },
  ],
  distinctions: [
    {
      id: 's11-dist',
      title: 'Void (s. 11) vs Voidable (s. 12)',
      left: 'Void — s. 11',
      right: 'Voidable — s. 12',
      rows: [
        { point: 'Status', left: 'Void ab initio', right: 'Valid until annulled' },
        { point: 'Grounds', left: 'Bigamy, prohibited degrees, sapinda', right: 'Impotence, force, fraud, pregnancy by another, certain mental conditions' },
        { point: 'Who can petition', left: 'Either party', right: 'Aggrieved party within limitation where prescribed' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's11-m1',
      trap: 'A void marriage needs no court order because it never existed.',
      correction:
        'Legally it is void ab initio, but parties usually still obtain a decree of nullity for status, records, maintenance and related claims.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's11-q10',
      marks: 10,
      question: 'What marriages are void under Section 11 of the Hindu Marriage Act, 1955?',
      answer:
        'Introduction. Three grounds linked to s. 5: living spouse; prohibited degrees; sapinda (custom exception). Effect of voidness. s. 16 legitimacy. Contrast with s. 12. Conclusion with full citation.',
    },
    {
      id: 's11-q16',
      marks: 16,
      question: 'Distinguish void and voidable marriages under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Table of differences (status, grounds, procedure). Detailed treatment of s. 11 and s. 12. Role of custom. Legitimacy under s. 16. Conclusion.',
    },
  ],
  bareActPointers: [
    'Hindu Marriage Act, 1955 — s. 11',
    'Hindu Marriage Act, 1955 — s. 5',
    'Hindu Marriage Act, 1955 — s. 16',
  ],
  examTips: [
    'Never write “void” without naming s. 11 HMA and the exact ground.',
    'Always contrast s. 11 with s. 12 in longer answers.',
  ],
  revisionPoints: [
    's. 11: bigamy / prohibited degrees / sapinda.',
    'Void ab initio; custom may save the last two.',
    's. 16 protects children of void marriages.',
  ],
} satisfies TopicContent
