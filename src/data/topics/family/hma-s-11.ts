import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 11 of the Hindu Marriage Act, 1955 declares certain marriages null and void. A void marriage is void ab initio. A formal decree of nullity is still commonly sought for status and consequential reliefs.

Meaning
Any marriage solemnised after the commencement of the Act is null and void if it contravenes s. 5(i), (iv) or (v): living spouse (bigamy); parties within degrees of prohibited relationship (unless custom permits); parties are sapindas (unless custom permits).

How it operates
Either party may petition for a decree of nullity. Children of void marriages receive legitimacy under s. 16 within limits. Bigamy also attracts criminal consequences under s. 17 HMA read with penal law.

Custom
Custom may save a marriage within prohibited degrees or sapinda relationship if it governs both parties and is valid in law.

Current-law close
Cite Section 11 of the Hindu Marriage Act, 1955. List the three grounds. Contrast with s. 12 (voidable). Mention s. 16 on legitimacy.`

export default {
  glance:
    'Section 11 HMA — void marriages: bigamy, prohibited degrees, sapinda (unless custom). Void ab initio; decree of nullity; children protected under s. 16.',
  study,
  examples: [
    {
      id: 's11-ex-1',
      title: 'Example — bigamy',
      description: 'H marries W1. Without divorce he marries W2. Second marriage void under s. 11(i).',
    },
    {
      id: 's11-ex-2',
      title: 'Example — prohibited degrees',
      description: 'Parties marry within prohibited degrees without governing custom. Marriage void under s. 11(ii).',
    },
  ],
  hypotheticals: [
    {
      id: 's11-hypo',
      title: 'Classroom problem',
      facts: 'A’s first wife is alive. A marries B in 2022. B seeks nullity and maintenance.',
      question: 'Status of the marriage and reliefs for B?',
      applicableLaw: 'Sections 5, 11, 16, 24 and 25 of the Hindu Marriage Act, 1955.',
      analysis: 'Void under s. 11(i). Decree of nullity; possible ss. 24–25 relief; children get s. 16 legitimacy within limits.',
      conclusion: 'Void under s. 11(i); cite the Act by name.',
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
      ],
    },
  ],
  misconceptions: [
    {
      id: 's11-m1',
      trap: 'A void marriage needs no court order.',
      correction: 'Parties usually still obtain a decree of nullity for status, records and maintenance claims.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's11-q10',
      draftingCategory: 'brief',
      question: 'What marriages are void under Section 11 of the Hindu Marriage Act, 1955?',
      answer:
        'Introduction. Three grounds linked to s. 5: living spouse; prohibited degrees; sapinda (custom exception). Effect of voidness. s. 16 legitimacy. Contrast with s. 12. Conclusion with full citation.',
      explanation: 'List all three grounds and custom exception.',
    },
    {
      id: 's11-q16',
      draftingCategory: 'submissions',
      question: 'Distinguish void and voidable marriages under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Comparative table s. 11 vs s. 12 (status, grounds, procedure). Detailed treatment of each. Role of custom. Legitimacy under s. 16. Conclusion with HMA citation.',
      explanation: 'Detailed comparative analysis and procedural distinction.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 11', 'Hindu Marriage Act, 1955 — s. 5', 'Hindu Marriage Act, 1955 — s. 16'],
  examTips: ['Never write “void” without naming s. 11 HMA and the ground.', 'Always contrast s. 11 with s. 12.'],
  revisionPoints: ['s. 11: bigamy / prohibited degrees / sapinda.', 'Void ab initio; custom may save the last two.', 's. 16 protects children.'],
} satisfies TopicContent
