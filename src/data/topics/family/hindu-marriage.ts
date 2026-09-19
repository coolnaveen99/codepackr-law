import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
The Hindu Marriage Act, 1955 is the primary codified statute governing marriage, restitution, judicial separation, nullity and divorce among Hindus (including Buddhists, Jains and Sikhs). It does not apply to Muslims, Christians, Parsis or Jews. Always name the Act when citing a section.

Introduction
Before 1955, Hindu marriage was largely governed by uncodified personal law and custom. The HMA introduced statutory conditions for a valid marriage, registered the concept of monogamy, and created clear judicial remedies for matrimonial breakdown. The Act is not a complete code of all Hindu personal law; succession and adoption are handled by separate statutes.

Meaning and concept
A Hindu marriage under the Act is a sacramental-cum-contractual union. Section 5 lays down the conditions for a valid marriage. Sections 9–10 deal with restitution and judicial separation. Sections 11–13B cover void and voidable marriages and divorce (including mutual consent). Maintenance and custody appear in ss. 24–26.

Why the rule exists
Codification was needed to (a) enforce monogamy, (b) give women clearer grounds of divorce and maintenance, (c) protect legitimacy of children of void/voidable marriages (s. 16), and (d) provide a uniform procedure under the CPC for matrimonial petitions.

Definitions / Key terms
- Hindu (s. 2): includes Buddhists, Jains, Sikhs and converts; excludes Muslims, Christians, Parsis, Jews.
- Void marriage (s. 11): bigamy, prohibited degrees, sapinda relationship — void ab initio.
- Voidable marriage (s. 12): impotence, force, fraud, pregnancy by another, certain mental disorders — valid until annulled.
- Desertion, cruelty, adultery: statutory grounds under s. 13; judicial interpretation fills the content.

Legal foundation
Hindu Marriage Act, 1955 (as amended). Key amendments: Marriage Laws (Amendment) Act 1976 (mutual consent, cruelty, etc.), 2001 and later changes to maintenance. Special Marriage Act 1954 remains available for inter-religious or secular civil marriage.

Essential elements of a valid Hindu marriage (s. 5)
1. Neither party has a living spouse (monogamy).
2. Neither party is incapable of giving valid consent by reason of unsoundness of mind, or suffers from mental disorder making them unfit for marriage and procreation, or is subject to recurrent attacks of insanity.
3. Bridegroom has completed 21 years; bride has completed 18 years.
4. Parties are not within degrees of prohibited relationship (unless custom permits).
5. Parties are not sapindas of each other (unless custom permits).

How the remedies operate
- Restitution of conjugal rights (s. 9): petition when one spouse withdraws from the society of the other without reasonable excuse.
- Judicial separation (s. 10): decree on any ground available for divorce; cohabitation ceases to be obligatory but marriage continues.
- Divorce (s. 13): fault grounds (adultery, cruelty, desertion for 2 years, conversion, unsound mind, venereal disease, renunciation, presumption of death) plus special grounds for the wife.
- Mutual consent divorce (s. 13B): joint petition after one year of separate living; two-motion procedure (cooling-off period may be waived by court).

Exceptions / Limits
Custom can still validate a marriage within prohibited degrees or sapinda relationship if the custom is ancient, certain and reasonable. Section 29 saves certain customary divorces. The one-year bar under s. 14 can be relaxed in cases of exceptional hardship.

Distinctions
HMA vs Special Marriage Act: HMA is religion-specific; SMA is secular and open to any two persons. HMA vs Muslim personal law: no concept of triple talaq or polygamy under HMA. Void (s. 11) vs voidable (s. 12): void needs no decree to be treated as non-existent; voidable remains valid until annulled.

Current-law close
Cite the Hindu Marriage Act, 1955 by section number and always name the Act. For inter-religious marriage use the Special Marriage Act, 1954. Maintenance can also be claimed under s. 125 BNSS / CrPC and under the Hindu Adoptions and Maintenance Act, 1956.`

export default {
  glance:
    'Hindu Marriage Act, 1955 — conditions for valid marriage (s. 5), restitution (s. 9), judicial separation (s. 10), void/voidable marriages (ss. 11–12), divorce including mutual consent (ss. 13–13B), and interim/permanent maintenance (ss. 24–25). Applies to Hindus, Buddhists, Jains and Sikhs.',
  study,
  examples: [
    {
      id: 'hma-ex-valid',
      title: 'Example — conditions under s. 5 satisfied',
      description:
        'A and B are both Hindus, unmarried, of sound mind, aged 25 and 22. They are not within prohibited degrees or sapinda relationship. They perform saptapadi. The marriage is valid under s. 5 read with s. 7.',
    },
    {
      id: 'hma-ex-bigamy',
      title: 'Example — living spouse (void)',
      description:
        'H marries W1. Without obtaining divorce he marries W2. The second marriage is void under s. 11(i) and H is also liable under s. 17 HMA read with the relevant penal provision for bigamy.',
    },
    {
      id: 'hma-ex-mutual',
      title: 'Example — mutual consent divorce',
      description:
        'Spouses have lived separately for more than one year and jointly file under s. 13B. After the first motion the court may, if satisfied that the requirements are met and waiver of cooling-off is justified, grant the decree on the second motion.',
    },
  ],
  hypotheticals: [
    {
      id: 'hma-hypo',
      title: 'Classroom problem',
      facts:
        'Ravi (Hindu, 28) marries Sita (Hindu, 24) in 2020. In 2023 Sita leaves the matrimonial home alleging continuous physical and mental cruelty. Ravi files for restitution under s. 9. Sita files a counter-petition for divorce under s. 13(1)(ia) on the ground of cruelty.',
      question: 'How should the court approach the two petitions?',
      applicableLaw:
        'Sections 9, 10, 13 and 13A of the Hindu Marriage Act, 1955. Cruelty is a ground for both judicial separation and divorce.',
      analysis:
        'Restitution under s. 9 requires that the withdrawal is without reasonable excuse. Continuous cruelty is a reasonable excuse and also an independent ground of divorce under s. 13(1)(ia). The court may grant divorce (or alternate relief of judicial separation under s. 13A) rather than force cohabitation.',
      conclusion:
        'If cruelty is proved, restitution fails and divorce (or judicial separation) can be decreed. Always name the Act and the exact clause.',
    },
  ],
  distinctions: [
    {
      id: 'hma-dist',
      title: 'Void vs Voidable marriage under HMA',
      left: 'Void (s. 11)',
      right: 'Voidable (s. 12)',
      rows: [
        { point: 'Effect', left: 'Void ab initio — no legal existence', right: 'Valid until annulled by decree' },
        { point: 'Grounds', left: 'Bigamy, prohibited degrees, sapinda', right: 'Impotence, force, fraud, pregnancy by another, certain mental disorders' },
        { point: 'Decree needed?', left: 'Declaratory decree helpful but not constitutive', right: 'Decree of nullity is required' },
        { point: 'Children (s. 16)', left: 'Legitimate', right: 'Legitimate' },
      ],
    },
  ],
  misconceptions: [
    { id: 'hma-m1', trap: 'Citing “Section 13” without naming the Hindu Marriage Act.', correction: 'Always write “Section 13 of the Hindu Marriage Act, 1955”.' },
    { id: 'hma-m2', trap: 'Treating every Hindu marriage as requiring registration for validity.', correction: 'Registration under s. 8 is directory; non-registration does not invalidate the marriage (though States may make rules).' },
    { id: 'hma-m3', trap: 'Assuming mutual consent divorce has no cooling-off period.', correction: 'Section 13B has a statutory cooling-off; the Supreme Court has held it can be waived in appropriate cases.' },
    { id: 'hma-m4', trap: 'Applying HMA to a Muslim couple.', correction: 'HMA does not apply to Muslims; their personal law or the Special Marriage Act (if chosen) governs.' },
  ],
  questionsAndAnswers: [
    {
      id: 'hma-q-10',
      marks: 10,
      question: 'Write a 10-mark note on the conditions for a valid Hindu marriage under the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Section 5 of the Hindu Marriage Act, 1955 lays down the conditions that must be fulfilled for a marriage between two Hindus to be valid.\n\nConditions. (i) Neither party has a spouse living at the time of the marriage — this enforces monogamy. (ii) Neither party is incapable of giving valid consent by reason of unsoundness of mind, or is suffering from a mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children, or is subject to recurrent attacks of insanity. (iii) The bridegroom has completed the age of twenty-one years and the bride the age of eighteen years. (iv) The parties are not within the degrees of prohibited relationship, unless the custom or usage governing each of them permits of a marriage between the two. (v) The parties are not sapindas of each other, unless custom permits.\n\nCeremony. Section 7 provides that a Hindu marriage may be solemnised in accordance with the customary rites and ceremonies of either party; where saptapadi is included, the marriage becomes complete and binding when the seventh step is taken.\n\nConsequence of breach. Violation of monogamy, prohibited degrees or sapinda relationship renders the marriage void under s. 11. Other breaches may attract punishment under s. 18 or make the marriage voidable under s. 12.\n\nConclusion. A student answer must list all five conditions of s. 5, mention s. 7 on ceremonies, and distinguish void from voidable consequences.',
    },
    {
      id: 'hma-q-16',
      marks: 16,
      question: 'Discuss the grounds of divorce available under Section 13 of the Hindu Marriage Act, 1955. How does mutual consent divorce under Section 13B differ?',
      answer:
        'Introduction. Section 13 of the Hindu Marriage Act, 1955 provides the statutory grounds on which a petition for divorce may be presented. Section 13B, introduced later, creates a separate no-fault route by mutual consent.\n\nFault grounds under s. 13(1) (available to either spouse). The petitioner may seek divorce if the respondent has (i) after the solemnisation of the marriage, had voluntary sexual intercourse with any person other than his or her spouse (adultery); (ii) treated the petitioner with cruelty; (iii) deserted the petitioner for a continuous period of not less than two years immediately preceding the presentation of the petition; (iv) ceased to be a Hindu by conversion to another religion; (v) been incurably of unsound mind or has been suffering continuously or intermittently from mental disorder of such a kind and to such an extent that the petitioner cannot reasonably be expected to live with the respondent; (vi) been suffering from a virulent and incurable form of leprosy (now largely academic after amendments and medical advances); (vii) been suffering from venereal disease in a communicable form; (viii) renounced the world by entering any religious order; or (ix) not been heard of as being alive for a period of seven years or more by those persons who would naturally have heard of it (presumption of death).\n\nSpecial grounds for the wife (s. 13(2)). Additional grounds include the husband having more than one wife living (pre-Act bigamy situations), rape, sodomy or bestiality, and non-resumption of cohabitation after a decree of maintenance under certain provisions.\n\nMutual consent (s. 13B). Both parties must have been living separately for a period of one year or more, must have not been able to live together, and must have mutually agreed that the marriage should be dissolved. The petition is presented jointly. There is a statutory cooling-off period between the first and second motions; the Supreme Court has held that the period can be waived where the court is satisfied that the requirements are met and further waiting would only prolong the agony.\n\nAlternate relief (s. 13A). In any proceeding for divorce the court may, if it considers it just, grant a decree of judicial separation instead.\n\nDistinction. Section 13 is fault-based (or status-based in the case of conversion, renunciation and presumption of death). Section 13B is consent-based and does not require proof of any matrimonial offence.\n\nConclusion. A complete answer lists the major clauses of s. 13(1), notes the wife’s special grounds, explains the two-motion mutual consent procedure under s. 13B, and records the power of alternate relief under s. 13A. Always cite the Hindu Marriage Act, 1955 by name.',
    },
  ],
  cases: [
    {
      name: 'Sarla Mudgal v. Union of India',
      year: 1995,
      citation: '(1995) 3 SCC 635',
      holding: 'A Hindu husband who converts to Islam and marries again without dissolving the first marriage commits bigamy; the second marriage is void under s. 11 HMA and attracts the penal consequences of bigamy.',
      relevance: 'Monogamy under s. 5(i) and voidness under s. 11.',
    },
    {
      name: 'Naveen Kohli v. Neelu Kohli',
      year: 2006,
      citation: '(2006) 4 SCC 558',
      holding: 'Irretrievable breakdown of marriage may be a relevant factor; prolonged mutual hostility and separation can justify a decree of divorce on the ground of cruelty.',
      relevance: 'Interpretation of cruelty under s. 13(1)(ia).',
    },
    {
      name: 'Amardeep Singh v. Harveen Kaur',
      year: 2017,
      citation: '(2017) 8 SCC 746',
      holding: 'The six-month cooling-off period under s. 13B(2) is directory and can be waived by the court in appropriate cases.',
      relevance: 'Mutual consent divorce procedure.',
    },
  ],
  bareActPointers: [
    'Section 5 Hindu Marriage Act, 1955',
    'Section 7 Hindu Marriage Act, 1955',
    'Section 9 Hindu Marriage Act, 1955',
    'Section 11 Hindu Marriage Act, 1955',
    'Section 12 Hindu Marriage Act, 1955',
    'Section 13 Hindu Marriage Act, 1955',
    'Section 13B Hindu Marriage Act, 1955',
    'Section 24 Hindu Marriage Act, 1955',
    'Section 25 Hindu Marriage Act, 1955',
  ],
  examTips: [
    'Always write the full name: Section 13 of the Hindu Marriage Act, 1955.',
    'List all five conditions of s. 5 when asked about validity.',
    'Distinguish void (s. 11) from voidable (s. 12) with consequences for decree and legitimacy.',
    'For mutual consent, mention the one-year separation and the possibility of waiver of cooling-off.',
    'Do not mix HMA grounds with Muslim personal law or SMA grounds.',
  ],
  revisionPoints: [
    's. 5 = five conditions for valid Hindu marriage.',
    's. 11 = void (bigamy, prohibited degrees, sapinda).',
    's. 12 = voidable (impotence, force, fraud, etc.).',
    's. 13 = fault grounds of divorce; s. 13B = mutual consent.',
    's. 24 = interim maintenance; s. 25 = permanent alimony.',
    'Always name the Act.',
  ],
} satisfies TopicContent
