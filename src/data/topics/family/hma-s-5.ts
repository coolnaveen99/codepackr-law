import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 5 of the Hindu Marriage Act, 1955 lays down the five conditions that must be fulfilled for a marriage between any two Hindus to be valid: (i) neither party has a spouse living; (ii) mental capacity (unsoundness of mind / mental disorder / recurrent insanity); (iii) bridegroom 21 years and bride 18 years; (iv) not within degrees of prohibited relationship (unless custom permits); (v) not sapindas of each other (unless custom permits). Breach of (i), (iv) or (v) renders the marriage void under s. 11; other breaches may lead to voidability under s. 12 or punishment under s. 18.',

  study: `Section 5 is the gateway provision of the Hindu Marriage Act, 1955. A marriage may be solemnised between any two Hindus if the following conditions are fulfilled:

(i) neither party has a spouse living at the time of the marriage;

(ii) at the time of the marriage, neither party —
(a) is incapable of giving a valid consent to it in consequence of unsoundness of mind; or
(b) though capable of giving a valid consent, has been suffering from mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children; or
(c) has been subject to recurrent attacks of insanity;

(iii) the bridegroom has completed the age of twenty-one years and the bride the age of eighteen years at the time of the marriage;

(iv) the parties are not within the degrees of prohibited relationship, unless the custom or usage governing each of them permits of a marriage between the two;

(v) the parties are not sapindas of each other, unless the custom or usage governing each of them permits of a marriage between the two.

Ceremony is governed by s. 7 (customary rites; where saptapadi is included, the marriage is complete on the seventh step). Registration under s. 8 is facilitative.

Consequences of breach:
• s. 5(i), (iv) or (v) → marriage void under s. 11 (custom may save (iv) and (v) only);
• certain mental conditions, force, fraud, pregnancy by another → voidable under s. 12;
• bigamy also attracts criminal liability under s. 17 HMA;
• other contraventions may attract punishment under s. 18.

Age violation interacts with the Prohibition of Child Marriage Act, 2006; the HMA itself does not treat every under-age marriage as void in the same absolute manner as a bigamous marriage under s. 11.`,

  sections: [
    {
      id: 'hma-s-5-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 5 codifies the essential conditions of a valid Hindu marriage. It replaced the diverse customary rules with a uniform statutory scheme while preserving genuine customary exceptions for prohibited degrees and sapinda relationship.',
        'Legislative objective: enforce monogamy, protect capacity and age, and prevent marriages within close blood relationships, while allowing established custom to operate within defined limits.',
        'Doctrinal foundation: a marriage that fails to satisfy the conditions of s. 5 is either void (s. 11) or voidable (s. 12) or attracts penal consequences (ss. 17–18). Section 5 itself does not prescribe the consequence; the neighbouring sections do.',
      ],
    },
    {
      id: 'hma-s-5-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Clause (i) — monogamy: neither party has a spouse living. Absolute; no custom exception.',
        'Clause (ii) — mental capacity: three alternative sub-clauses covering incapacity to consent, mental disorder making the party unfit for marriage and procreation, and recurrent attacks of insanity. Epilepsy was removed by the 1999 amendment.',
        'Clause (iii) — age: bridegroom 21 years, bride 18 years (raised by the 1978 amendment).',
        'Clause (iv) — prohibited degrees: unless custom governing each party permits the marriage.',
        'Clause (v) — sapinda relationship: unless custom governing each party permits the marriage.',
        'The earlier clause (vi) relating to guardian’s consent was omitted when the age of the bride was raised to 18.',
      ],
    },
    {
      id: 'hma-s-5-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. Both parties are Hindus (or within the extended definition under s. 2).',
        '2. Neither has a spouse living at the time of the marriage.',
        '3. Neither suffers from the mental incapacity described in clause (ii).',
        '4. The bridegroom has completed 21 years and the bride 18 years.',
        '5. The parties are not within the degrees of prohibited relationship, unless a valid custom governing both permits the marriage.',
        '6. The parties are not sapindas of each other, unless a valid custom governing both permits the marriage.',
      ],
    },
    {
      id: 'hma-s-5-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'In a petition challenging validity, the party asserting a breach of s. 5 must prove the relevant fact (prior living spouse, mental incapacity, under-age, prohibited relationship or sapinda relationship) on a preponderance of probabilities.',
        'Where custom is relied upon to save a marriage under clauses (iv) or (v), the party asserting the custom must prove that it is ancient, certain, reasonable, and governs both parties.',
        'Electronic records (marriage certificates, medical reports, communications) must satisfy BSA s. 63 where treated as primary electronic evidence.',
      ],
    },
    {
      id: 'hma-s-5-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Validity questions under s. 5 arise in petitions for nullity (ss. 11–12), divorce, maintenance, succession, and sometimes in criminal proceedings for bigamy.',
        'Competent court: District Court / Family Court having jurisdiction under the HMA and the Family Courts Act.',
        'Ceremony is proved under s. 7; registration under s. 8 is not essential to validity but is strong evidence of the fact of marriage.',
        'No independent limitation period attaches to the conditions themselves; limitation for nullity petitions is governed by the specific bars in s. 12(2) and general principles.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'hma',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 'hma-5',
      section: 's. 5',
      title: 'Conditions for a Hindu marriage',
    },
  ],

  examples: [
    {
      id: 'hma-s-5-ill-1',
      title: 'Illustration 1 — All conditions satisfied',
      illustrationType: 'statutory',
      description:
        'Both parties are Hindus, unmarried, of sound mind, aged 25 and 22, and not within prohibited degrees or sapinda relationship. Customary rites including saptapadi are performed. The marriage satisfies all five conditions of s. 5 and is valid under the Act.',
    },
    {
      id: 'hma-s-5-ill-2',
      title: 'Illustration 2 — Living spouse (void under s. 11)',
      illustrationType: 'fail-scenario',
      description:
        'H is already married to W1 and the marriage has not been dissolved. He goes through a second ceremony with W2. Condition (i) is breached. The second marriage is null and void under s. 11 read with s. 5(i). Criminal liability under s. 17 may also arise.',
    },
  ],

  hypotheticals: [
    {
      id: 'hma-s-5-hypo',
      title: 'Chamber Practice Hypothetical — Under-age marriage and the interaction with child-marriage law',
      facts:
        'A boy of 20 marries a girl of 17. Both are Hindus, unmarried, of sound mind, and not within prohibited degrees or sapinda relationship. Custom does not permit under-age marriage. The girl later seeks to challenge the marriage.',
      question:
        'Does the marriage satisfy s. 5, and what consequences follow?',
      applicableLaw:
        'HMA s. 5(iii); Prohibition of Child Marriage Act, 2006; HMA ss. 11–12 (as applicable).',
      analysis:
        '1. Condition (iii) requires the bridegroom to have completed 21 years and the bride 18 years. Both ages are short.\n2. Section 5(iii) is therefore not satisfied.\n3. The HMA does not automatically treat every under-age marriage as void under s. 11 in the same absolute manner as a bigamous marriage. The consequences under the Prohibition of Child Marriage Act (including the possibility of a decree of nullity at the instance of the child party) must be analysed separately.\n4. The other four conditions of s. 5 appear to be met.',
      conclusion:
        'Condition (iii) fails. The marriage does not satisfy s. 5(iii). The precise civil and penal consequences depend on the Prohibition of Child Marriage Act and any petition for nullity that may be available under that statute or under the HMA.',
    },
  ],

  distinctions: [
    {
      id: 'hma-s-5-dist-1',
      title: 's. 5 conditions vs consequences under ss. 11 / 12 / 18',
      left: 's. 5',
      right: 'ss. 11 / 12 / 18',
      rows: [
        { point: 'Role', left: 'States the conditions for a valid Hindu marriage', right: 'Prescribe the legal consequence of breach' },
        { point: 'Bigamy / prohibited degrees / sapinda', left: 'Conditions (i), (iv), (v)', right: 'Void under s. 11; bigamy also punishable under s. 17' },
        { point: 'Mental capacity / force / fraud / pregnancy', left: 'Condition (ii) and related defects', right: 'Voidable under s. 12 (with statutory bars)' },
        { point: 'Age', left: 'Condition (iii)', right: 'Interacts with Prohibition of Child Marriage Act; s. 18 may also apply' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'hma-s-5-trap-1',
      trap: 'Only monogamy and age need to be stated when explaining s. 5.',
      correction:
        'All five conditions must be stated: monogamy, mental capacity, age, prohibited degrees, and sapinda relationship (with the custom exceptions for the last two).',
    },
    {
      id: 'hma-s-5-trap-2',
      trap: 'Custom can save a bigamous marriage under s. 5(i).',
      correction:
        'The custom exception applies only to clauses (iv) and (v). It does not apply to monogamy under clause (i).',
    },
  ],

  cases: [
    {
      name: 'Sarla Mudgal v. Union of India',
      year: 1995,
      citation: '(1995) 3 SCC 635',
      court: 'Supreme Court of India',
      bench: 'Kuldip Singh, J.',
      facts:
        'Hindu husbands converted to Islam and contracted second marriages without dissolving their first Hindu marriages.',
      issue:
        'Whether the second marriage after conversion, without dissolution of the first marriage, is valid and whether it constitutes bigamy.',
      ratioDecidendi:
        'A second marriage after conversion to Islam, without dissolving the first Hindu marriage, is void under s. 11 HMA read with s. 5(i) and constitutes bigamy. Conversion does not automatically dissolve the Hindu marriage.',
      holding: 'Second marriages held void; direction issued regarding the need for a uniform civil code.',
      relevance:
        'Leading authority on the absolute character of the monogamy condition in s. 5(i) and the voidness of a bigamous second marriage under s. 11.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'hma-s-5-brief',
      draftingCategory: 'brief',
      question:
        'State and explain the conditions for a valid Hindu marriage under Section 5 of the Hindu Marriage Act, 1955.',
      answer: `I. ISSUE
What conditions must be fulfilled for a marriage between two Hindus to be valid under the HMA?

II. GOVERNING RULE
Section 5 requires: (i) neither party has a spouse living; (ii) mental capacity (three sub-clauses); (iii) ages 21 and 18; (iv) not within prohibited degrees unless custom permits; (v) not sapindas unless custom permits.

III. APPLICATION
List each condition → note the custom exception for (iv) and (v) only → map breach to s. 11 (void), s. 12 (voidable) or s. 18 (punishment).

IV. CONCLUSION
All five conditions must be stated. Ceremony is governed by s. 7; consequences of breach are governed by ss. 11, 12, 17 and 18.`,
      explanation: 'IRAC note on the five conditions of s. 5.',
    },
    {
      id: 'hma-s-5-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on the validity of a marriage alleged to violate s. 5(i) (living spouse), seeking a decree of nullity under s. 11.',
      answer: `I. STATEMENT OF FACTS
[Insert the prior subsisting marriage and the second ceremony.]

II. STATUTORY SCHEME
Section 5(i) requires that neither party has a spouse living. Section 11 declares a marriage that contravenes this condition null and void.

III. APPLICATION
The respondent had a living spouse at the time of the second ceremony. Condition (i) is breached. The second marriage is void ab initio under s. 11.

IV. CONSEQUENTIAL RELIEFS
Children (if any) are protected under s. 16. The petitioner seeks a decree of nullity and consequential reliefs under ss. 24–25.

V. PRAYER
[Decree of nullity under s. 11; consequential reliefs.]`,
      explanation: 'Senior Counsel submissions on breach of s. 5(i).',
    },
  ],

  bareActPointers: [
    'HMA s. 5 (entire — five conditions)',
    'HMA s. 7 (ceremonies)',
    'HMA s. 11 (void marriages — consequences of breach of (i), (iv), (v))',
    'HMA s. 12 (voidable marriages)',
    'HMA s. 17–18 (punishment)',
  ],

  examTips: [
    'Always list all five conditions; do not stop at monogamy and age.',
    'State the custom exception for prohibited degrees and sapinda only.',
    'Map each major breach to s. 11, s. 12 or s. 18.',
  ],

  revisionPoints: [
    's. 5 = five conditions: monogamy, mental capacity, age 21/18, prohibited degrees, sapinda.',
    'Custom may save (iv) and (v) only.',
    'Breach of (i)/(iv)/(v) → void under s. 11; other breaches → s. 12 or s. 18.',
  ],

  relatedTopics: ['hma-s-7', 'hma-s-11', 'hma-s-12', 'hma-s-13'],
}

export default content
