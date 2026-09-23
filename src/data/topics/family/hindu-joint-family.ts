import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'A Hindu joint family is a wider unit comprising persons lineally descended from a common ancestor, their wives and unmarried daughters. The Mitakshara coparcenary is the narrower body of persons who acquire by birth an interest in joint family property. After the Hindu Succession (Amendment) Act, 2005, the daughter of a coparcener is a coparcener by birth in the same manner as a son (HSA s. 6). The karta manages the joint family and may alienate joint family property for legal necessity or benefit of the estate. Partition severs status and divides property. Vineeta Sharma v. Rakesh Sharma (2020) is the authoritative decision on the temporal operation of the 2005 amendment.',

  study: `Hindu joint family and Mitakshara coparcenary are foundational concepts of Hindu property law and are inseparably linked to Section 6 of the Hindu Succession Act, 1956 (as amended in 2005).

Joint family: a wider unit of persons lineally descended from a common ancestor, together with their wives and unmarried daughters. It is a creature of law and continues so long as the common tie remains.

Mitakshara coparcenary: the narrower body within the joint family consisting of persons who, by birth, acquire an interest in the joint family (ancestral) property. Before 2005 only male issue up to four degrees were coparceners. The Hindu Succession (Amendment) Act, 2005 substituted s. 6 so that the daughter of a coparcener becomes a coparcener by birth in the same manner as a son, with the same rights and liabilities.

Ancestral property: property inherited from a paternal ancestor; also property blended with ancestral property so as to lose its separate character. Separate (self-acquired) property of a member is not automatically joint family property.

Karta: the manager of the joint family, ordinarily the senior-most male member (subject to modern recognition of female kartas in appropriate cases). The karta may alienate joint family property for legal necessity or for the benefit of the estate. Alienations without necessity or benefit do not bind the other coparceners’ interests.

Partition: severance of joint status and division of property. After the 2005 amendment a daughter as coparcener is entitled to claim partition and to receive a share equal to that of a son, subject to the conditions and savings in s. 6 (including dispositions and partitions effected before the prescribed cut-off dates as interpreted in Vineeta Sharma).

Dayabhaga: does not recognise a Mitakshara-type birthright coparcenary. Mitakshara rules must not be applied to Dayabhaga facts.

Vineeta Sharma v. Rakesh Sharma (2020) 9 SCC 1 held that the 2005 amendment confers coparcenary rights on daughters by birth, that the right does not depend on the father being alive on the date of the amendment, and that the amendment is retrospective in the sense explained in the judgment, subject to the statutory savings for partitions and testamentary dispositions effected before the cut-off date.`,

  sections: [
    {
      id: 'hjf-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Mitakshara and Dayabhaga are the two principal schools of Hindu law on joint family and succession. The Mitakshara birthright coparcenary is the classical model in most of India outside Bengal and Assam.',
        'Legislative objective of the 2005 amendment: remove gender discrimination in coparcenary rights by making the daughter of a coparcener a coparcener by birth in the same manner as a son.',
        'Doctrinal foundation: joint family is a status; coparcenary is a birthright interest in property. The karta’s powers are fiduciary and limited by necessity and benefit of the estate. Partition ends the joint status and crystallises shares.',
      ],
    },
    {
      id: 'hjf-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Joint family: wider unit — lineal descendants, wives, unmarried daughters.',
        'Coparcenary: narrower birthright group. Post-2005: daughter of a coparcener is a coparcener by birth in the same manner as a son (HSA s. 6).',
        'Ancestral property: inherited from paternal ancestor; may be augmented by blending.',
        'Karta: manager; power to alienate for legal necessity or benefit of the estate.',
        'Partition: severance of status + division of property; daughters as coparceners share equally subject to s. 6 savings.',
        'Vineeta Sharma: authoritative on the temporal reach of the 2005 amendment.',
      ],
    },
    {
      id: 'hjf-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. Existence of a Mitakshara joint family / coparcenary (or a claim to membership as a daughter of a coparcener under s. 6 HSA).',
        '2. For ancestral property: the property must be ancestral in character or blended so as to become joint family property.',
        '3. For a challenge to the karta’s alienation: absence of legal necessity or benefit of the estate.',
        '4. For partition: a clear intention to sever status (and, where property is to be divided, the process of division).',
        '5. For a daughter’s claim under s. 6: she is the daughter of a coparcener; the statutory savings for pre-cut-off partitions and dispositions must be considered.',
      ],
    },
    {
      id: 'hjf-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Existence of joint family and ancestral character of property are questions of fact proved by oral and documentary evidence (title deeds, revenue records, prior partitions, admissions).',
        'Legal necessity is ordinarily proved by the alienee; the burden may shift once a prima facie case of joint family character and the nature of the transaction is shown.',
        'A daughter claiming under s. 6 must establish her status as daughter of a coparcener and address any pleaded pre-cut-off partition or disposition.',
        'Electronic records must satisfy BSA s. 63 where treated as primary electronic evidence.',
      ],
    },
    {
      id: 'hjf-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Suits for partition, for declaration of coparcenary rights, and for setting aside alienations by the karta are filed in the ordinary civil courts (or Family Court where jurisdiction is conferred).',
        'Limitation for challenging an alienation by the karta, and for partition claims, is governed by the Limitation Act; the specific article depends on the nature of the relief.',
        'Appeals follow the ordinary civil appellate hierarchy.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'hsa',
      actName: 'Hindu Succession Act, 1956',
      provisionId: 'hsa-6',
      section: 's. 6',
      title: 'Devolution of interest in coparcenary property (as amended 2005)',
    },
  ],

  examples: [
    {
      id: 'hjf-ill-1',
      title: 'Illustration 1 — Daughter as coparcener after 2005',
      illustrationType: 'statutory',
      description:
        'A Mitakshara joint family consists of the father, one son and one daughter. After the 2005 amendment the daughter is a coparcener by birth in the same manner as the son. She is entitled to claim partition and to receive an equal share, subject to the savings in s. 6 as interpreted in Vineeta Sharma.',
    },
    {
      id: 'hjf-ill-2',
      title: 'Illustration 2 — Alienation without legal necessity',
      illustrationType: 'fail-scenario',
      description:
        'The karta sells joint family land to a third party without any legal necessity or benefit of the estate, and without the consent of the other adult coparceners. An adult coparcener challenges the sale. The sale does not bind the challenging coparcener’s interest to the extent it is unsupported by necessity or benefit.',
    },
  ],

  hypotheticals: [
    {
      id: 'hjf-hypo',
      title: 'Chamber Practice Hypothetical — Daughter’s claim under s. 6 and a pleaded pre-2005 partition',
      facts:
        'F died in 2010 leaving a son S and a daughter D. The family was Mitakshara. S claims that a complete partition of the joint family property was effected by a registered deed in 2003 and that D therefore has no coparcenary claim. D sues for partition claiming rights under the 2005 amendment as interpreted in Vineeta Sharma.',
      question:
        'Does the 2003 partition bar D’s claim?',
      applicableLaw: 'HSA s. 6 (as amended 2005); Vineeta Sharma v. Rakesh Sharma (2020) 9 SCC 1.',
      analysis:
        '1. Vineeta Sharma holds that the daughter becomes a coparcener by birth and that the right does not depend on the father being alive on the date of the amendment.\n2. Section 6 contains savings for partitions and testamentary dispositions effected before the prescribed cut-off date.\n3. If the 2003 deed is a genuine, completed partition that falls within the statutory savings, D’s claim to reopen that partition may be barred.\n4. If the deed is sham, incomplete, or not a partition in the statutory sense, D may still claim as a coparcener.',
      conclusion:
        'The outcome turns on whether the 2003 transaction is a genuine partition within the savings of s. 6. If it is, D’s claim to reopen it is barred; if it is not, she may claim as a coparcener under the 2005 amendment as interpreted in Vineeta Sharma.',
    },
  ],

  distinctions: [
    {
      id: 'hjf-dist-1',
      title: 'Hindu Joint Family vs Mitakshara Coparcenary',
      left: 'Joint Family',
      right: 'Coparcenary',
      rows: [
        { point: 'Width', left: 'Wider unit (lineal descendants, wives, unmarried daughters)', right: 'Narrower birthright group' },
        { point: 'Interest', left: 'Common family relationship and residence', right: 'Fluctuating ownership interest by birth in joint family property' },
        { point: 'Post-2005', left: 'Unchanged as a social unit', right: 'Daughter of a coparcener is a coparcener by birth in the same manner as a son' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'hjf-trap-1',
      trap: 'Every Hindu family is automatically a Mitakshara coparcenary.',
      correction:
        'A joint family is a wider social and legal unit. A coparcenary is the narrower body of persons who have a birthright interest in joint family property. Not every joint family member is a coparcener.',
    },
    {
      id: 'hjf-trap-2',
      trap: 'A daughter’s coparcenary right under the 2005 amendment depends on the father being alive on 9 September 2005.',
      correction:
        'Vineeta Sharma held that the daughter becomes a coparcener by birth and that the right does not depend on the father being alive on the date of the amendment, subject to the statutory savings for earlier partitions and dispositions.',
    },
  ],

  cases: [
    {
      name: 'Vineeta Sharma v. Rakesh Sharma',
      year: 2020,
      citation: '(2020) 9 SCC 1',
      court: 'Supreme Court of India',
      bench: 'Arun Mishra, S. Abdul Nazeer & M.R. Shah, JJ.',
      facts:
        'Dispute over a daughter’s claim to coparcenary rights under the Hindu Succession (Amendment) Act, 2005, and the effect of the father’s death and of alleged earlier partitions.',
      issue:
        'Whether the daughter of a coparcener acquires coparcenary rights by birth under the 2005 amendment only if the father was alive on the date of the amendment, and how the statutory savings for partitions operate.',
      ratioDecidendi:
        'The daughter of a coparcener becomes a coparcener by birth in the same manner as a son. The right does not depend on the father being alive on the date of the amendment. The amendment is to be given effect as explained in the judgment, subject to the statutory savings for partitions and testamentary dispositions effected before the prescribed cut-off date. Shallow or sham partitions do not defeat the daughter’s rights.',
      holding: 'Daughter held entitled to claim as a coparcener; earlier conflicting decisions overruled or clarified.',
      relevance:
        'Binding authority on the temporal operation and substantive effect of the 2005 amendment to HSA s. 6. Must be cited in every daughter’s coparcenary claim.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'hjf-brief',
      draftingCategory: 'brief',
      question:
        'Explain the Mitakshara joint family and the effect of the Hindu Succession (Amendment) Act, 2005 on daughters’ coparcenary rights.',
      answer: `I. ISSUE
What is the Mitakshara joint family / coparcenary, and what rights does a daughter have after the 2005 amendment?

II. GOVERNING RULE
The joint family is a wider unit; the Mitakshara coparcenary is the narrower birthright group. Section 6 HSA (as amended 2005) makes the daughter of a coparcener a coparcener by birth in the same manner as a son. Vineeta Sharma confirms that the right does not depend on the father being alive on the date of the amendment, subject to statutory savings for earlier partitions and dispositions.

III. APPLICATION
Identify the joint family and the coparcenary → apply s. 6 → check any pleaded pre-cut-off partition → determine the daughter’s share on partition.

IV. CONCLUSION
Daughters are coparceners by birth post-2005. Vineeta Sharma is the controlling authority on temporal operation.`,
      explanation: 'IRAC note on joint family, coparcenary and the 2005 amendment.',
    },
    {
      id: 'hjf-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on a daughter’s claim to partition as a coparcener under HSA s. 6, addressing a pleaded pre-2005 partition and relying on Vineeta Sharma.',
      answer: `I. STATEMENT OF FACTS
[Insert the family tree, the daughter’s claim, and the pleaded  pre-2005 partition.]

II. STATUTORY SCHEME
Section 6 HSA (as amended 2005) confers on the daughter of a coparcener the status of a coparcener by birth in the same manner as a son. Vineeta Sharma holds that the right does not depend on the father being alive on the date of the amendment and that only genuine partitions within the statutory savings are protected.

III. APPLICATION
The plaintiff is the daughter of a coparcener. The alleged 2003 partition is [sham / incomplete / not a partition in the statutory sense]. It therefore does not bar her claim. She is entitled to a share equal to that of a son on partition.

IV. PRAYER
[Preliminary decree for partition declaring the plaintiff’s coparcenary share; accounts and final decree.]`,
      explanation: 'Senior Counsel submissions on a daughter’s coparcenary claim.',
    },
  ],

  bareActPointers: [
    'Hindu Succession Act, 1956 s. 6 (as amended by the Hindu Succession (Amendment) Act, 2005)',
    'Vineeta Sharma v. Rakesh Sharma (2020) 9 SCC 1',
  ],

  examTips: [
    'Always separate joint family (wider) from coparcenary (narrower birthright group).',
    'State that the daughter is a coparcener by birth in the same manner as a son after 2005.',
    'Cite Vineeta Sharma for temporal operation and for the treatment of sham partitions.',
  ],

  revisionPoints: [
    'Joint family ≠ coparcenary.',
    'Karta may alienate for legal necessity or benefit of the estate.',
    'Daughter = coparcener by birth (HSA s. 6, 2005 amendment).',
    'Vineeta Sharma (2020) is the controlling authority.',
  ],

  relatedTopics: ['hindu-succession', 'guardianship-minority', 'testamentary-succession'],
}

export default content
