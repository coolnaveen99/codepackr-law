import type { Judgment } from './types'

/**
 * Famous landmarks batch 9 — 50 judgments.
 * High-yield Supreme Court landmark cases for AIBE and Judiciary exams.
 * DISPATCHER Phase 5 quality: authentic citations, verified ratios,
 * zero mark-band phrasing, catalog-safe topicIds, valid relatedCases.
 */

export const sankariPrasad1951: Judgment = {
  "id": "sankari-prasad-1951",
  "caseName": "Sri Sankari Prasad Singh Deo v. Union of India",
  "shortName": "Sankari Prasad",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1951,
  "citation": "AIR 1951 SC 458",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "Patanjali Sastri, J.",
    "H.J. Kania, C.J.",
    "M.C. Mahajan, J.",
    "B.K. Mukherjea, J.",
    "S.R. Das, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Article 368",
    "Constitutional Amendment",
    "Article 13(2)",
    "Fundamental Rights",
    "First Amendment"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Amendment",
    "Article 368",
    "Landmark"
  ],
  "summary": "The Supreme Court unanimously upheld the First Constitutional Amendment Act, 1951, holding that the power to amend the Constitution under Article 368 includes the power to abridge or take away Fundamental Rights, and that \"law\" in Article 13(2) refers only to legislative law made in exercise of ordinary legislative power, not constituent power.",
  "facts": [
    "Following the enactment of various State land reform and zamindari abolition laws, several High Courts struck down certain provisions as violative of the right to property under Article 31.",
    "To secure these agrarian reforms, Parliament enacted the Constitution (First Amendment) Act, 1951, inserting Articles 31A and 31B along with the Ninth Schedule.",
    "The zamindars challenged the constitutional validity of the First Amendment, arguing that an amendment is a \"law\" within the meaning of Article 13(2) and cannot take away fundamental rights."
  ],
  "issues": [
    "Whether the Constitution (First Amendment) Act, 1951 is ultra vires Article 13(2) of the Constitution.",
    "Whether the word \"law\" in Article 13(2) includes a constitutional amendment enacted under Article 368."
  ],
  "arguments": {
    "appellant": [
      "Article 13(2) prohibits the State from making any law taking away fundamental rights, and an amendment is a law made by Parliament.",
      "Constituent power cannot override the fundamental guarantees enshrined in Part III."
    ],
    "respondent": [
      "There is a clear demarcation between constituent power under Article 368 and ordinary legislative power under Articles 245-248.",
      "Article 13(2) governs only ordinary legislative enactments, not constituent constitutional amendments."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-368",
      "article": "Article 368",
      "title": "Power of Parliament to amend the Constitution and procedure therefor",
      "subjectSlug": "constitution",
      "topicId": "amendment"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-13",
      "article": "Article 13(2)",
      "title": "Laws inconsistent with or in derogation of fundamental rights",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Distinction between constituent and legislative power",
      "explanation": "The Court held that the terms of Article 368 are perfectly general and empower Parliament to amend the Constitution without any exception. Constituent power is distinct from ordinary legislative power."
    },
    {
      "heading": "Scope of \"law\" under Article 13(2)",
      "explanation": "Although \"law\" must ordinarily include constitutional amendments, harmonious construction demands that Article 13(2) be confined to rules or regulations made in exercise of ordinary legislative power, not constitutional amendments."
    }
  ],
  "decision": "The First Constitutional Amendment Act, 1951 was held to be validly enacted and constitutional.",
  "holding": "Constitutional amendments under Article 368 do not fall within the prohibition of \"law\" in Article 13(2); Parliament has full constituent power to amend Part III.",
  "ratioDecidendi": "The word \"law\" in Article 13(2) includes only ordinary legislative enactments and does not encompass constitutional amendments enacted under Article 368.",
  "relatedCases": [
    {
      "caseName": "Kesavananda Bharati v. State of Kerala",
      "citation": "(1973) 4 SCC 225",
      "relationship": "Subsequent landmark (basic structure limitation)",
      "judgmentId": "kesavananda-bharati-1973"
    },
    {
      "caseName": "I.C. Golaknath v. State of Punjab",
      "citation": "(1967) 2 SCR 762",
      "relationship": "Later overruled Sankari Prasad",
      "judgmentId": "golaknath-1967"
    },
    {
      "caseName": "Sajjan Singh v. State of Rajasthan",
      "citation": "AIR 1965 SC 845",
      "relationship": "Reaffirmed Sankari Prasad",
      "judgmentId": "sajjan-singh-1965"
    }
  ],
  "examPoints": [
    "First Amendment Act, 1951 upheld unanimously.",
    "Dichotomy between constituent power (Art. 368) and ordinary legislative power (Art. 245).",
    "\"Law\" in Article 13(2) held not to include constitutional amendments.",
    "Starting point of the parliamentary sovereignty vs fundamental rights debate."
  ],
  "mcqs": [
    {
      "id": "sankari-prasad-mcq-1",
      "question": "In Sankari Prasad v. Union of India (1951), the Supreme Court held that:",
      "options": [
        "Fundamental Rights can never be amended under Article 368",
        "The word \"law\" in Article 13(2) does not include a constitutional amendment under Article 368",
        "Basic structure doctrine prevents amending property rights",
        "Parliament has no power to enact Article 31A"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench held that \"law\" in Article 13(2) refers only to ordinary legislative laws and not to constituent constitutional amendments under Article 368."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1951 SC 458 / 1952 SCR 89",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const sajjanSingh1965: Judgment = {
  "id": "sajjan-singh-1965",
  "caseName": "Sajjan Singh v. State of Rajasthan",
  "shortName": "Sajjan Singh",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1965,
  "citation": "AIR 1965 SC 845",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "P.B. Gajendragadkar, C.J.",
    "K.N. Wanchoo, J.",
    "M. Hidayatullah, J.",
    "J.C. Shah, J.",
    "J.R. Mudholkar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "17th Amendment",
    "Article 368",
    "Basic Features Genesis",
    "Fundamental Rights"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Amendment",
    "Basic Structure Genesis"
  ],
  "summary": "The Constitution Bench by 3:2 majority reaffirmed the Sankari Prasad doctrine upholding the Constitution (17th Amendment) Act, 1964. However, the separate opinions of Hidayatullah, J. and Mudholkar, J. expressed profound doubts, questioning whether fundamental features of the Constitution could be changed, thus sowing the intellectual seeds of the Basic Structure doctrine.",
  "facts": [
    "Parliament passed the Constitution (17th Amendment) Act, 1964 adding 44 State agrarian enactments to the Ninth Schedule to insulate them from judicial scrutiny.",
    "Petitioners challenged the 17th Amendment, contending that it affected the jurisdiction of High Courts under Article 226 and therefore required ratification by State Legislatures under the proviso to Article 368."
  ],
  "issues": [
    "Whether the 17th Amendment Act, 1964 directly affected Article 226 requiring ratification by State Legislatures under Article 368 proviso.",
    "Whether Sankari Prasad was correctly decided in holding that Part III could be amended under Article 368."
  ],
  "arguments": {
    "appellant": [
      "The 17th Amendment circumscribes the powers of High Courts under Article 226 by placing laws beyond judicial review.",
      "Fundamental Rights are fundamental and unalterable by Parliament under Article 368."
    ],
    "respondent": [
      "The amendment only affected the substantive rights of litigants in property matters, not the constitutional jurisdiction of High Courts.",
      "Sankari Prasad settled that Article 368 confers plenary constituent power without limitations."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-368",
      "article": "Article 368",
      "title": "Power of Parliament to amend the Constitution and procedure therefor",
      "subjectSlug": "constitution",
      "topicId": "amendment"
    }
  ],
  "reasoning": [
    {
      "heading": "Majority reasoning upholding 17th Amendment",
      "explanation": "Gajendragadkar, C.J. held that the pith and substance of the 17th Amendment was agrarian reform, not curtailment of High Court jurisdiction under Article 226, and reaffirmed Sankari Prasad."
    },
    {
      "heading": "Sowing the seeds of the Basic Structure",
      "explanation": "Mudholkar, J. and Hidayatullah, J. raised momentous doubts whether Parliament could alter the \"basic features\" or \"essential framework\" of the Constitution under Article 368."
    }
  ],
  "decision": "The 17th Constitutional Amendment was upheld as constitutionally valid.",
  "holding": "The 17th Amendment is valid; however, judicial reservations were placed on record regarding Parliament’s unchecked power to dismantle core constitutional features.",
  "ratioDecidendi": "An amendment directly affecting property laws does not require ratification under Article 368 proviso if its incidental effect on Article 226 does not alter the High Courts’ constitutional framework.",
  "relatedCases": [
    {
      "caseName": "Sri Sankari Prasad Singh Deo v. Union of India",
      "citation": "AIR 1951 SC 458",
      "relationship": "Affirmed by majority",
      "judgmentId": "sankari-prasad-1951"
    },
    {
      "caseName": "I.C. Golaknath v. State of Punjab",
      "citation": "(1967) 2 SCR 762",
      "relationship": "Accepted the doubts of Hidayatullah and Mudholkar JJ.",
      "judgmentId": "golaknath-1967"
    },
    {
      "caseName": "Kesavananda Bharati v. State of Kerala",
      "citation": "(1973) 4 SCC 225",
      "relationship": "Formulated the basic structure doctrine hinted by Mudholkar J.",
      "judgmentId": "kesavananda-bharati-1973"
    }
  ],
  "examPoints": [
    "17th Amendment upheld by 3:2 majority.",
    "Mudholkar, J. coined the phrase \"basic features\" of the Constitution.",
    "Hidayatullah, J. doubted whether Fundamental Rights could be the plaything of a special majority.",
    "Direct conceptual precursor to Kesavananda Bharati."
  ],
  "mcqs": [
    {
      "id": "sajjan-singh-mcq-1",
      "question": "Which judge in Sajjan Singh v. State of Rajasthan (1965) questioned whether the \"basic features\" of the Constitution could be amended?",
      "options": [
        "P.B. Gajendragadkar, C.J.",
        "J.R. Mudholkar, J.",
        "K.N. Wanchoo, J.",
        "J.C. Shah, J."
      ],
      "correctIndex": 1,
      "explanation": "In his concurring opinion, Mudholkar, J. sowed the seeds of the basic structure doctrine by asking whether the basic features of the Constitution could be abrogated under Article 368."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1965 SC 845 / (1965) 1 SCR 933",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const wamanRao1981: Judgment = {
  "id": "waman-rao-1981",
  "caseName": "Waman Rao v. Union of India",
  "shortName": "Waman Rao",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1981,
  "citation": "(1981) 2 SCC 362",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "Y.V. Chandrachud, C.J.",
    "P.N. Bhagwati, J.",
    "V.R. Krishna Iyer, J.",
    "V.D. Tulzapurkar, J.",
    "A.P. Sen, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Ninth Schedule",
    "Basic Structure Doctrine",
    "Article 31B",
    "Prospective Application"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Ninth Schedule",
    "Basic Structure",
    "Cut-off Date"
  ],
  "summary": "The Constitution Bench drew a clear demarcation line for Ninth Schedule immunity: all amendments and additions to the Ninth Schedule made prior to 24 April 1973 (the date of Kesavananda Bharati) are valid and immune from challenge, whereas all additions made on or after 24 April 1973 are open to challenge on the ground of violating the basic structure.",
  "facts": [
    "The Maharashtra Agricultural Lands (Ceiling on Holdings) Act, 1961 was amended in 1975 to lower land ceiling limits and placed into the Ninth Schedule by the 40th Constitutional Amendment.",
    "Landowners challenged the validity of Articles 31A, 31B, and 31C as well as the 40th Amendment, arguing that immunizing laws from Part III violates the basic structure."
  ],
  "issues": [
    "Whether Article 31A, 31B, and the unamended Article 31C violate the basic structure of the Constitution.",
    "Whether laws inserted into the Ninth Schedule after 24 April 1973 are open to challenge on basic structure grounds."
  ],
  "arguments": {
    "appellant": [
      "Articles 31A and 31B completely abrogate judicial review and fundamental freedoms, damaging the basic structure.",
      "Any law inserted in the Ninth Schedule after Kesavananda Bharati must pass the basic structure test."
    ],
    "respondent": [
      "Articles 31A and 31B were upheld in earlier Constitution Bench decisions and form a cornerstone of agrarian welfare.",
      "The Ninth Schedule was designed specifically to grant complete constitutional protection to socioeconomic legislation."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-31b",
      "article": "Article 31B",
      "title": "Validation of certain Acts and Regulations (Ninth Schedule)",
      "subjectSlug": "constitution",
      "topicId": "basic-structure"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-368",
      "article": "Article 368",
      "title": "Power of Parliament to amend the Constitution",
      "subjectSlug": "constitution",
      "topicId": "amendment"
    }
  ],
  "reasoning": [
    {
      "heading": "Validity of Articles 31A and 31B",
      "explanation": "The Court held that Articles 31A and 31B were enacted to eliminate feudal zamindari systems and advance agrarian justice, and do not damage the basic structure."
    },
    {
      "heading": "The 24 April 1973 demarcation line",
      "explanation": "Since Kesavananda Bharati propounded the basic structure doctrine on 24 April 1973, certainty and stability of laws demand prospective application: pre-1973 additions are protected, but post-1973 additions can be tested against the basic structure."
    }
  ],
  "decision": "Articles 31A and 31B were upheld; Ninth Schedule additions post-24 April 1973 were declared subject to basic structure review.",
  "holding": "Constitutional amendments adding statutes to the Ninth Schedule on or before 24 April 1973 are completely valid; those added after that date are vulnerable to basic structure challenge.",
  "ratioDecidendi": "The basic structure doctrine applies prospectively from 24 April 1973 to test all subsequent constitutional amendments adding enactments to the Ninth Schedule.",
  "relatedCases": [
    {
      "caseName": "Kesavananda Bharati v. State of Kerala",
      "citation": "(1973) 4 SCC 225",
      "relationship": "Defined the 24 April 1973 cut-off date",
      "judgmentId": "kesavananda-bharati-1973"
    },
    {
      "caseName": "Minerva Mills Ltd. v. Union of India",
      "citation": "(1980) 3 SCC 625",
      "relationship": "Reaffirmed basic structure limits",
      "judgmentId": "minerva-mills-1980"
    },
    {
      "caseName": "I.R. Coelho v. State of Tamil Nadu",
      "citation": "(2007) 2 SCC 1",
      "relationship": "Affirmed and expanded Waman Rao on Ninth Schedule review",
      "judgmentId": "ir-coelho-2007"
    }
  ],
  "examPoints": [
    "Established 24 April 1973 as the watershed date for Ninth Schedule immunity.",
    "Laws added to Ninth Schedule prior to 24 April 1973 are completely immune.",
    "Laws added on or after 24 April 1973 are subject to basic structure review.",
    "Approved in unanimous 9-Judge bench ruling in I.R. Coelho (2007)."
  ],
  "mcqs": [
    {
      "id": "waman-rao-mcq-1",
      "question": "Under Waman Rao v. Union of India (1981), what is the cut-off date for testing Ninth Schedule laws against the basic structure doctrine?",
      "options": [
        "26 January 1950",
        "24 April 1973",
        "42nd Amendment (1976)",
        "1 November 1956"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court fixed 24 April 1973 (the date of the Kesavananda Bharati judgment) as the cut-off date for basic structure scrutiny of Ninth Schedule laws."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1981) 2 SCC 362",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const champakamDorairajan1951: Judgment = {
  "id": "champakam-dorairajan-1951",
  "caseName": "State of Madras v. Champakam Dorairajan",
  "shortName": "Champakam Dorairajan",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1951,
  "citation": "AIR 1951 SC 226",
  "bench": "7-Judge Constitution Bench",
  "judges": [
    "H.J. Kania, C.J.",
    "Fazl Ali, J.",
    "Patanjali Sastri, J.",
    "M.C. Mahajan, J.",
    "S.R. Das, J.",
    "B.K. Mukherjea, J.",
    "Chandrasekhara Aiyar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Communal G.O.",
    "Article 15",
    "Article 29(2)",
    "Fundamental Rights vs DPSP",
    "First Amendment"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Reservation",
    "Article 15(4)",
    "DPSP"
  ],
  "summary": "The 7-Judge Constitution Bench struck down the Madras Government Communal G.O. reserving seats in medical and engineering colleges on communal and caste lines, ruling that Fundamental Rights under Part III are sacrosanct and prevail over Directive Principles under Part IV. This landmark decision led directly to the First Constitutional Amendment enacting Article 15(4).",
  "facts": [
    "The Madras Government maintained a \"Communal G.O.\" allocating fixed seat quotas in State medical and engineering colleges to Non-Brahmins, Brahmins, Backward Hindus, Muslims, Anglo-Indians, and Scheduled Castes.",
    "Champakam Dorairajan and another applicant were denied admission solely on grounds of caste/religion despite securing higher marks than admitted reserved candidates.",
    "They filed writ petitions under Article 226 challenging the Communal G.O. as violative of Articles 15(1) and 29(2)."
  ],
  "issues": [
    "Whether the Communal G.O. violated Article 29(2) by denying admission to educational institutions maintained by the State solely on grounds of religion or caste.",
    "Whether the Directive Principle under Article 46 could override the Fundamental Rights in Part III."
  ],
  "arguments": {
    "appellant": [
      "The State was duty-bound under Article 46 to promote the educational and economic interests of the weaker sections.",
      "Article 46 must guide the interpretation and application of Part III rights."
    ],
    "respondent": [
      "Article 29(2) explicitly guarantees that no citizen shall be denied admission into any educational institution maintained by the State on grounds only of religion, race, caste, or language.",
      "Fundamental Rights are enforceable and cannot be subordinated to non-justiciable Directive Principles."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-29",
      "article": "Article 29(2)",
      "title": "Protection of interests of minorities (Admission to educational institutions)",
      "subjectSlug": "constitution",
      "topicId": "equality-reservation"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-46",
      "article": "Article 46",
      "title": "Promotion of educational and economic interests of SCs, STs and other weaker sections",
      "subjectSlug": "constitution",
      "topicId": "dpsp"
    }
  ],
  "reasoning": [
    {
      "heading": "Supremacy of Fundamental Rights over Directive Principles",
      "explanation": "The Court held that the Chapter of Fundamental Rights is sacrosanct and not liable to be abridged by any legislative or executive act. Directive Principles have to conform to and run as subsidiary to Fundamental Rights."
    },
    {
      "heading": "Violation of Article 29(2)",
      "explanation": "Denial of admission solely because an applicant belonged to a particular caste or religion directly infringed the clear negative command of Article 29(2)."
    }
  ],
  "decision": "The Communal G.O. was declared unconstitutional and void.",
  "holding": "Directive Principles cannot override Fundamental Rights; classification for college admissions based solely on religion or caste violates Article 29(2).",
  "ratioDecidendi": "In any conflict between Fundamental Rights and Directive Principles of State Policy, Fundamental Rights prevail; admission to State-aided colleges cannot be denied solely on caste or religion.",
  "relatedCases": [
    {
      "caseName": "Indra Sawhney v. Union of India",
      "citation": "(1992) Supp (3) SCC 217",
      "relationship": "Later traced origin of Article 15(4) to Champakam",
      "judgmentId": "indra-sawhney-1992"
    }
  ],
  "examPoints": [
    "Struck down the Madras Communal G.O.",
    "Held that DPSP must run subsidiary to Fundamental Rights.",
    "Direct cause for the enactment of Article 15(4) via the First Amendment (1951).",
    "Benchmark on Article 29(2) non-discrimination in educational institutions."
  ],
  "mcqs": [
    {
      "id": "champakam-mcq-1",
      "question": "Which constitutional amendment was enacted by Parliament to overturn the judgment in State of Madras v. Champakam Dorairajan?",
      "options": [
        "First Amendment Act, 1951 (inserting Article 15(4))",
        "Seventh Amendment Act, 1956",
        "Twenty-Fourth Amendment Act, 1971",
        "Forty-Second Amendment Act, 1976"
      ],
      "correctIndex": 0,
      "explanation": "Parliament enacted the First Amendment Act, 1951 to insert Article 15(4), enabling special provisions for socially and educationally backward classes."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1951 SC 226 / 1951 SCR 525",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const balaji1963: Judgment = {
  "id": "balaji-1963",
  "caseName": "M.R. Balaji v. State of Mysore",
  "shortName": "M.R. Balaji",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1963,
  "citation": "AIR 1963 SC 649",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "P.B. Gajendragadkar, J.",
    "K.N. Wanchoo, J.",
    "K.C. Das Gupta, J.",
    "J.C. Shah, J.",
    "J.R. Mudholkar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Article 15(4)",
    "50% Ceiling",
    "Backward Classes",
    "Social and Educational Backwardness"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Reservation",
    "50% Limit",
    "Article 15(4)"
  ],
  "summary": "The Constitution Bench laid down foundational principles governing reservations under Article 15(4): backwardness must be both social and educational; caste cannot be the sole or dominant criterion for backwardness; and affirmative action reservations cannot exceed 50%, as special provisions cannot destroy the general guarantee of equality.",
  "facts": [
    "The State of Mysore issued an executive order reserving 68% of seats in medical and engineering colleges for Backward Classes, More Backward Classes, Scheduled Castes, and Scheduled Tribes.",
    "Only 32% of seats were left open for general merit.",
    "Meritorious students who were denied admission challenged the order as a fraud on constitutional power under Article 15(4)."
  ],
  "issues": [
    "Whether caste can be the sole basis for determining backwardness under Article 15(4).",
    "Whether the classification into \"Backward\" and \"More Backward\" was permissible.",
    "What is the constitutional ceiling on reservations under Article 15(4)."
  ],
  "arguments": {
    "appellant": [
      "Reserving 68% of seats destroys equality of opportunity and sacrifices national efficiency in technical education.",
      "Caste alone cannot determine backwardness under Article 15(4)."
    ],
    "respondent": [
      "The State has full discretion to fix the percentage of reservation needed to uplift depressed communities under Article 15(4).",
      "Caste is an undeniable indicator of social degradation in Indian society."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-15",
      "article": "Article 15(4)",
      "title": "Special provision for advancement of backward classes",
      "subjectSlug": "constitution",
      "topicId": "equality-reservation"
    }
  ],
  "reasoning": [
    {
      "heading": "Caste cannot be the sole test",
      "explanation": "The Court held that Article 15(4) uses \"classes\" and not \"castes\". While caste may be a relevant factor in Hindu society, it cannot be the sole or dominant test of backwardness; poverty, occupation, and place of habitation are equally relevant."
    },
    {
      "heading": "The 50% reservation ceiling",
      "explanation": "Article 15(4) is a special provision; it cannot be interpreted to swallow or destroy the general rule of equality under Article 15(1). Speaking generally and in broad terms, reservation must be less than 50%."
    }
  ],
  "decision": "The Mysore Government order reserving 68% seats was struck down as unconstitutional.",
  "holding": "Reservations under Article 15(4) cannot exceed 50%; backwardness must be both social and educational, and caste cannot be the sole criterion.",
  "ratioDecidendi": "Affirmative action under Article 15(4) cannot exceed 50% in the aggregate, and classification of backwardness based solely on caste is invalid.",
  "relatedCases": [
    {
      "caseName": "Indra Sawhney v. Union of India",
      "citation": "(1992) Supp (3) SCC 217",
      "relationship": "Affirmed the 50% ceiling rule",
      "judgmentId": "indra-sawhney-1992"
    },
    {
      "caseName": "T. Devadasan v. Union of India",
      "citation": "AIR 1964 SC 179",
      "relationship": "Applied the 50% rule to Article 16(4)",
      "judgmentId": "devadasan-1964"
    }
  ],
  "examPoints": [
    "Origin of the 50% ceiling rule on reservations in India.",
    "Backwardness under Art. 15(4) must be both social AND educational.",
    "Caste cannot be the sole or dominant determinant of backwardness.",
    "Sub-classification into \"Backward\" and \"More Backward\" without objective criteria struck down."
  ],
  "mcqs": [
    {
      "id": "balaji-mcq-1",
      "question": "In M.R. Balaji v. State of Mysore (1963), the Supreme Court ruled that total reservations should broadly not exceed:",
      "options": [
        "27%",
        "33%",
        "50%",
        "68%"
      ],
      "correctIndex": 2,
      "explanation": "The Constitution Bench held that speaking broadly, reservation under Article 15(4) must be less than 50% to prevent destroying equality of opportunity."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1963 SC 649 / 1963 Supp (1) SCR 439",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const devadasan1964: Judgment = {
  "id": "devadasan-1964",
  "caseName": "T. Devadasan v. Union of India",
  "shortName": "T. Devadasan",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1964,
  "citation": "AIR 1964 SC 179",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "B.P. Sinha, C.J.",
    "K.N. Wanchoo, J.",
    "K.C. Das Gupta, J.",
    "J.C. Shah, J.",
    "N. Rajagopala Ayyangar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Carry Forward Rule",
    "Article 16(4)",
    "50% Rule in Employment",
    "Equality of Opportunity"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 16(4)",
    "Carry Forward Rule",
    "Reservation"
  ],
  "summary": "The Constitution Bench by majority struck down the Union Government’s \"carry-forward rule\" which allowed unfilled reserved vacancies of SCs and STs to be accumulated for subsequent years, resulting in 64.4% of vacancies in the dispute year being reserved, holding that reservation in any single year cannot exceed 50%.",
  "facts": [
    "The Central Government framed a \"carry-forward rule\" for recruitment to the Central Secretariat Service, providing that unfilled reserved vacancies would be carried over to the next year and then to the third year.",
    "In the 1960 examination, by operation of the carry-forward rule, 29 out of 45 appointments (64.4%) were reserved for SCs and STs.",
    "An unreserved candidate who scored higher than the qualified reserved candidates challenged the carry-forward rule under Article 16(1)."
  ],
  "issues": [
    "Whether the carry-forward rule which resulted in reserving more than 50% vacancies in a recruitment year violates Article 16(1).",
    "Whether Article 16(4) can be applied in a manner that obliterates equality of opportunity under Article 16(1)."
  ],
  "arguments": {
    "appellant": [
      "Reserving 64.4% of posts in a single year completely denies equality of opportunity to open category candidates.",
      "Article 16(4) cannot destroy the primary guarantee of Article 16(1)."
    ],
    "respondent": [
      "The carry-forward rule merely protects the unfilled quota of backward classes across years and does not exceed overall constitutional intent."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-16",
      "article": "Article 16(1) and 16(4)",
      "title": "Equality of opportunity in matters of public employment",
      "subjectSlug": "constitution",
      "topicId": "equality-reservation"
    }
  ],
  "reasoning": [
    {
      "heading": "Year as the unit of recruitment",
      "explanation": "The Court held that each year of recruitment must be considered independently; each year’s applicants form a distinct generation whose fundamental right to equal opportunity cannot be sacrificed to satisfy past unfilled quotas."
    },
    {
      "heading": "Application of the Balaji 50% limit to Article 16(4)",
      "explanation": "Applying the rule in Balaji, the Court held that reservation under Article 16(4) cannot exceed 50% of the vacancies available in any single year."
    }
  ],
  "decision": "The carry-forward rule was struck down as unconstitutional.",
  "holding": "The carry-forward rule is unconstitutional to the extent it causes total reservations in a single recruitment year to exceed 50%.",
  "ratioDecidendi": "Reservation under Article 16(4) cannot exceed 50% of the vacancies filled in any single recruitment year, and the carry-forward mechanism cannot breach this ceiling.",
  "relatedCases": [
    {
      "caseName": "M.R. Balaji v. State of Mysore",
      "citation": "AIR 1963 SC 649",
      "relationship": "Applied Balaji ceiling to public employment",
      "judgmentId": "balaji-1963"
    },
    {
      "caseName": "Indra Sawhney v. Union of India",
      "citation": "(1992) Supp (3) SCC 217",
      "relationship": "Overruled Devadasan on carry-forward rule",
      "judgmentId": "indra-sawhney-1992"
    }
  ],
  "examPoints": [
    "Struck down carry-forward rule producing >50% reservation in a year.",
    "Later overruled in Indra Sawhney, which led to the 81st Constitutional Amendment inserting Art. 16(4B).",
    "Historic milestone in the evolution of Article 16 equality jurisprudence."
  ],
  "mcqs": [
    {
      "id": "devadasan-mcq-1",
      "question": "In T. Devadasan v. Union of India (1964), what percentage of vacancies was struck down as unconstitutional in that recruitment year?",
      "options": [
        "33%",
        "50%",
        "64.4%",
        "75%"
      ],
      "correctIndex": 2,
      "explanation": "The Court struck down the carry-forward rule because it resulted in 64.4% of total vacancies being reserved in that single year, breaching the 50% ceiling."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1964 SC 179 / (1964) 4 SCR 680",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const nmThomas1976: Judgment = {
  "id": "nm-thomas-1976",
  "caseName": "State of Kerala v. N.M. Thomas",
  "shortName": "N.M. Thomas",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1976,
  "citation": "(1976) 2 SCC 310",
  "bench": "7-Judge Constitution Bench",
  "judges": [
    "A.N. Ray, C.J.",
    "H.R. Khanna, J.",
    "K.K. Mathew, J.",
    "M.H. Beg, J.",
    "V.R. Krishna Iyer, J.",
    "P.K. Goswami, J.",
    "P.N. Shinghal, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Substantive Equality",
    "Article 16(1)",
    "Affirmative Action",
    "Test Exemption for SC/ST"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Substantive Equality",
    "Article 16(1)",
    "SC/ST Promotion"
  ],
  "summary": "The 7-Judge Constitution Bench transformed Indian equality jurisprudence by holding that Article 16(4) is not an exception to Article 16(1), but an emphatic restatement and facet of substantive equality under Article 16(1). The Court upheld a Kerala rule granting temporary exemption to SC/ST lower division clerks from passing departmental tests for promotion.",
  "facts": [
    "Rule 13AA of the Kerala State and Subordinate Services Rules, 1958 gave SC and ST employees a temporary exemption of two years to pass departmental qualification tests for promotion from Lower Division Clerks to Upper Division Clerks.",
    "Out of 51 vacancies, 34 SC/ST employees were promoted on the basis of this temporary exemption.",
    "N.M. Thomas, a general category employee who had passed the test, challenged the rule as violative of Article 16(1) and 16(2)."
  ],
  "issues": [
    "Whether Rule 13AA granting test exemptions for promotion violated Article 16(1) and 16(2).",
    "Whether Article 16(4) is an exception to Article 16(1) or an instance of classification permitted by Article 16(1) itself."
  ],
  "arguments": {
    "appellant": [
      "Article 16(1) permits reasonable classification to achieve substantive equality among unequals.",
      "SC/ST communities suffer historic structural disabilities and giving temporary time to clear tests does not dispense with competence."
    ],
    "respondent": [
      "Article 16(1) requires strict formal equality for all candidates; test exemption violates merit and efficiency under Article 335.",
      "Article 16(4) allows reservation of appointments, not piecemeal test exemptions in promotions."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-16",
      "article": "Article 16(1) and 16(4)",
      "title": "Equality of opportunity in public employment",
      "subjectSlug": "constitution",
      "topicId": "equality-reservation"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-335",
      "article": "Article 335",
      "title": "Claims of Scheduled Castes and Scheduled Tribes to services and posts",
      "subjectSlug": "constitution",
      "topicId": "equality-reservation"
    }
  ],
  "reasoning": [
    {
      "heading": "Transition from formal to substantive equality",
      "explanation": "Ray, C.J., Mathew, J., and Krishna Iyer, J. ruled that true equality is substantive, not formal. Treating unequals as equals violates equality; Article 16(1) permits affirmative measures to elevate unequal classes to equal footing."
    },
    {
      "heading": "Article 16(4) as an aspect of Article 16(1)",
      "explanation": "Article 16(4) is not an exception carving away equality, but an emphatic illustration of the principle of equality of opportunity guaranteed by Article 16(1)."
    }
  ],
  "decision": "Rule 13AA and the promotions of SC/ST employees were upheld as valid.",
  "holding": "Article 16(1) encompasses substantive equality and permits reasonable classification to aid backward classes; Article 16(4) is an aspect of Article 16(1) rather than an exception.",
  "ratioDecidendi": "Equality under Article 16(1) includes substantive equality permitting affirmative action and reasonable classifications to uplift disadvantaged classes without relying exclusively on Article 16(4).",
  "relatedCases": [
    {
      "caseName": "Indra Sawhney v. Union of India",
      "citation": "(1992) Supp (3) SCC 217",
      "relationship": "Affirmed the substantive equality doctrine of N.M. Thomas",
      "judgmentId": "indra-sawhney-1992"
    }
  ],
  "examPoints": [
    "Shifted Indian jurisprudence from formal equality to substantive equality.",
    "Held Article 16(4) is NOT an exception to Article 16(1).",
    "Upheld temporary test exemptions for SC/ST employees under Article 16(1).",
    "Foundational bedrock for all modern affirmative action judgments in India."
  ],
  "mcqs": [
    {
      "id": "nm-thomas-mcq-1",
      "question": "What did the 7-Judge Bench in State of Kerala v. N.M. Thomas (1976) hold regarding Article 16(4)?",
      "options": [
        "It is an unconstitutional exception to Article 16(1)",
        "It is not an exception, but an emphatic facet and restatement of substantive equality under Article 16(1)",
        "It prohibits any affirmative action in promotions",
        "It requires 75% reservation for Scheduled Castes"
      ],
      "correctIndex": 1,
      "explanation": "The Court established that Article 16(4) is not an exception to Article 16(1), but an emphatic restatement of substantive equality guaranteed under Article 16(1)."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1976) 2 SCC 310",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const pradeepJain1984: Judgment = {
  "id": "pradeep-jain-1984",
  "caseName": "Dr. Pradeep Jain v. Union of India",
  "shortName": "Dr. Pradeep Jain",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1984,
  "citation": "(1984) 3 SCC 654",
  "bench": "3-Judge Bench",
  "judges": [
    "P.N. Bhagwati, J.",
    "A.N. Sen, J.",
    "V. Khalid, J."
  ],
  "subject": "Constitution",
  "topics": [
    "All India Quota",
    "Article 14",
    "Domicile Reservation",
    "Medical College Admissions"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 14",
    "Domicile",
    "Medical Admissions",
    "AIQ"
  ],
  "summary": "The Supreme Court struck down 100% domicile or institutional reservations in medical admissions, holding that wholesale reservation based on residence violates Article 14. To reconcile state affirmative action with national integration, the Court created the \"All India Quota\" (AIQ) in MBBS and postgraduate medical courses.",
  "facts": [
    "Several State Governments and Universities maintained admission policies reserving 100% or near-total seats in medical colleges (MBBS and MD/MS) exclusively for local residents or their own institutional graduates.",
    "Meritorious non-resident students challenged these wholesale domicile-based reservations as destructive of single Indian citizenship and violative of Articles 14 and 15."
  ],
  "issues": [
    "Whether wholesale reservation based on domicile/residence in medical colleges is constitutionally valid under Article 14.",
    "To what extent can State residence or institutional preference be validly recognized in medical college admissions."
  ],
  "arguments": {
    "appellant": [
      "India has one single citizenship under Article 5; erecting domicile walls across States fragments the nation and violates equality of opportunity.",
      "100% reservation destroys merit in highly specialized medical education."
    ],
    "respondent": [
      "States invest public funds in medical colleges to produce doctors who will serve local rural and impoverished populations.",
      "Institutional continuity and backwardness of local regions justify preference."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-14",
      "article": "Article 14",
      "title": "Equality before law",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-15",
      "article": "Article 15(1)",
      "title": "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Single Indian Citizenship and National Unity",
      "explanation": "Bhagwati, J. emphasized that the Constitution recognizes only one citizenship: citizenship of India. There is no State citizenship, and wholesale exclusion of Indian citizens based on domicile destroys national integration."
    },
    {
      "heading": "Creation of All India Quota",
      "explanation": "While residence preference within limits is permissible to assist backward regions, it cannot exceed reasonable limits. The Court directed that at least 15% of MBBS seats and 25% (later 50%) of PG seats must be open on pure all-India merit."
    }
  ],
  "decision": "Wholesale domicile reservation was struck down; All India Quota (AIQ) was judicially established.",
  "holding": "Total reservation based on residence in medical courses violates Article 14; a substantial percentage must be allocated on All India merit without residence preference.",
  "ratioDecidendi": "Wholesale reservation on the basis of domicile or institutional preference in higher professional medical education violates Article 14 of the Constitution.",
  "relatedCases": [
    {
      "caseName": "T.M.A. Pai Foundation v. State of Karnataka",
      "citation": "(2002) 8 SCC 481",
      "relationship": "Revisited admissions framework",
      "judgmentId": "tma-pai-2002"
    }
  ],
  "examPoints": [
    "Origin of the \"All India Quota\" (AIQ) in NEET/Medical admissions.",
    "Rejection of 100% domicile reservation in medical education.",
    "Held that residence reservation must yield to merit in higher and super-specialty education.",
    "Reaffirmed the constitutional principle of single Indian citizenship."
  ],
  "mcqs": [
    {
      "id": "pradeep-jain-mcq-1",
      "question": "Which nationwide admission system was originated by the Supreme Court in Dr. Pradeep Jain v. Union of India (1984)?",
      "options": [
        "EWS 10% Quota",
        "All India Quota (AIQ) in medical admissions",
        "Collegium system",
        "Uniform Civil Code"
      ],
      "correctIndex": 1,
      "explanation": "Dr. Pradeep Jain created the All India Quota (AIQ) in MBBS and PG medical admissions to ensure that wholesale domicile reservation does not destroy all-India merit."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1984) 3 SCC 654",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const stStephens1992: Judgment = {
  "id": "st-stephens-1992",
  "caseName": "St. Stephen's College v. University of Delhi",
  "shortName": "St. Stephen's College",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1992,
  "citation": "(1992) 1 SCC 558",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "M.H. Kania, C.J.",
    "S. Ranganathan, J.",
    "M.N. Venkatachaliah, J.",
    "A.M. Ahmadi, J.",
    "K.N. Saikia, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Minority Rights",
    "Article 30(1)",
    "Article 29(2)",
    "Minority Aided Institutions",
    "50% Admission Ceiling"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Minority Rights",
    "Article 30(1)",
    "Article 29(2)"
  ],
  "summary": "The Constitution Bench harmonized the fundamental right of minorities to establish and administer educational institutions under Article 30(1) with the non-discrimination command of Article 29(2). The Court held that receiving State aid does not strip a minority college of its minority character, but such institution can reserve only up to 50% of seats for students of its own community, admitting remaining students on merit.",
  "facts": [
    "St. Stephen's College, Delhi, an aided religious minority institution, formulated its own admission procedure involving separate interviews and prioritized Christian students.",
    "Delhi University circulars mandated uniform admission solely based on qualifying examination marks without interviews, asserting that State-aided institutions cannot discriminate under Article 29(2).",
    "The College challenged the University circulars as infringing its administrative autonomy under Article 30(1)."
  ],
  "issues": [
    "Whether a minority educational institution receiving financial aid from the State loses its right of administration under Article 30(1) by virtue of Article 29(2).",
    "What percentage of seats may an aided minority institution reserve for candidates of its own minority community."
  ],
  "arguments": {
    "appellant": [
      "The right to admit students of their choice is an essential facet of the right to administer under Article 30(1).",
      "State aid cannot be conditioned upon surrender of minority rights."
    ],
    "respondent": [
      "Article 29(2) creates an absolute individual right not to be discriminated against in State-aided institutions on grounds of religion or caste."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-30",
      "article": "Article 30(1)",
      "title": "Right of minorities to establish and administer educational institutions",
      "subjectSlug": "constitution",
      "topicId": "minority-rights"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-29",
      "article": "Article 29(2)",
      "title": "Protection of interests of minorities (Non-discrimination in admissions)",
      "subjectSlug": "constitution",
      "topicId": "minority-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Harmonious construction between Article 30(1) and Article 29(2)",
      "explanation": "The Court held that Article 30(1) and Article 29(2) must be balanced. An aided minority institution retains its minority character, but because it receives public funds, it cannot cater exclusively to its own community."
    },
    {
      "heading": "The 50% minority quota ceiling",
      "explanation": "To prevent ghettoization while protecting minority identity, the Court fixed a ceiling permitting aided minority institutions to reserve up to 50% of annual intake for their own community, with the remaining 50% open to other communities strictly on merit."
    }
  ],
  "decision": "The separate interview procedure was upheld, subject to the 50% ceiling for minority students.",
  "holding": "Aided minority institutions may reserve up to 50% of seats for candidates of their own community; the remaining 50% must be admitted from the general public on merit.",
  "ratioDecidendi": "Receipt of State aid does not extinguish Article 30(1) minority rights, but under Article 29(2), aided minority institutions cannot reserve more than 50% seats for their own community.",
  "relatedCases": [
    {
      "caseName": "T.M.A. Pai Foundation v. State of Karnataka",
      "citation": "(2002) 8 SCC 481",
      "relationship": "Modified St. Stephen’s to make the percentage flexible based on local demographic need",
      "judgmentId": "tma-pai-2002"
    },
    {
      "caseName": "P.A. Inamdar v. State of Maharashtra",
      "citation": "(2005) 6 SCC 537",
      "relationship": "Reiterated unaided vs aided distinction",
      "judgmentId": "pa-inamdar-2005"
    }
  ],
  "examPoints": [
    "Aided minority institutions retain Article 30(1) character.",
    "Maximum 50% quota fixed for minority candidates in aided colleges.",
    "Interviews up to 15% weightage permitted in addition to qualifying marks.",
    "Harmonized Article 30(1) with Article 29(2)."
  ],
  "mcqs": [
    {
      "id": "st-stephens-mcq-1",
      "question": "In St. Stephen's College v. University of Delhi (1992), what maximum percentage of seats was permitted to be reserved for the minority community in an aided minority institution?",
      "options": [
        "25%",
        "33%",
        "50%",
        "100%"
      ],
      "correctIndex": 2,
      "explanation": "The Constitution Bench held that an aided minority institution can reserve up to 50% of its seats for candidates of its own community, keeping the rest open on merit."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1992) 1 SCC 558",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const spGupta1981: Judgment = {
  "id": "sp-gupta-1981",
  "caseName": "S.P. Gupta v. Union of India",
  "shortName": "S.P. Gupta (First Judges Case)",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1981,
  "citation": "1981 Supp SCC 87",
  "bench": "7-Judge Constitution Bench",
  "judges": [
    "P.N. Bhagwati, J.",
    "A.C. Gupta, J.",
    "Syed Murtaza Fazal Ali, J.",
    "V.D. Tulzapurkar, J.",
    "D.A. Desai, J.",
    "R.S. Pathak, J.",
    "E.S. Venkataramiah, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Public Interest Litigation",
    "Locus Standi",
    "Judicial Appointments",
    "First Judges Case",
    "Consultation"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "PIL",
    "Locus Standi",
    "First Judges Case"
  ],
  "summary": "The 7-Judge Constitution Bench revolutionized Indian procedural jurisprudence by liberalizing the traditional rule of locus standi, laying the conceptual foundation for Public Interest Litigation (PIL). On judicial appointments, the majority held that \"consultation\" under Articles 124(2) and 217(1) does not mean \"concurrence\", granting executive primacy over judicial appointments (later overruled in Second Judges).",
  "facts": [
    "During 1980-81, the Union Law Minister issued a circular seeking consent of Additional Judges of High Courts for transfer to other High Courts, and non-extension of tenure of several Additional Judges was challenged.",
    "Practicing advocates filed writ petitions challenging the circular and non-appointment.",
    "The Government raised preliminary objections that practicing lawyers had no personal injury or locus standi to maintain the petitions, and claimed privilege under Section 123 Evidence Act regarding appointment correspondence."
  ],
  "issues": [
    "Whether practicing advocates have locus standi to challenge executive actions affecting the independence of the judiciary.",
    "Whether \"consultation\" with the Chief Justice of India under Article 124(2) and 217(1) means concurrence.",
    "Whether the State can claim privilege over correspondence concerning judicial appointments."
  ],
  "arguments": {
    "appellant": [
      "Lawyers have a vital interest in preserving the independence of the judiciary as officers of the court.",
      "Consultation with constitutional functionaries must be effective, full, and meaningful, and the opinion of the CJI must have primacy."
    ],
    "respondent": [
      "Only an aggrieved judge has legal standing; third-party lawyers are meddlesome interlopers.",
      "The ultimate appointing authority is the President of India (Union Executive), and consultation does not fetter executive discretion."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-32",
      "article": "Article 32",
      "title": "Remedies for enforcement of rights conferred by Part III",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-124",
      "article": "Article 124(2)",
      "title": "Establishment and constitution of Supreme Court (Appointment of Judges)",
      "subjectSlug": "constitution",
      "topicId": "judiciary"
    }
  ],
  "reasoning": [
    {
      "heading": "Liberalisation of Locus Standi and Birth of PIL",
      "explanation": "Bhagwati, J. held that where a legal wrong or legal injury is caused to a person or to a determinate class of persons who by reason of poverty, disability, or socially/economically disadvantaged position cannot approach the court, any member of the public acting bona fide can maintain an action under Article 32 or 226."
    },
    {
      "heading": "Interpretation of \"consultation\" under Article 124/217",
      "explanation": "The majority held that consultation does not mean concurrence; the Central Government is not bound to accept the advice of the CJI, giving executive primacy in judicial appointments."
    }
  ],
  "decision": "Locus standi of lawyers was upheld; PIL doctrine formalized; executive primacy in judicial appointments was recognized.",
  "holding": "Any member of the public acting bona fide has standing to seek redress for public wrongs; however, executive holds ultimate authority in judicial appointments under Article 124.",
  "ratioDecidendi": "Traditional locus standi is relaxed for public interest litigation where disadvantaged persons suffer legal injury; \"consultation\" in judicial appointments does not imply executive subservience to judicial advice.",
  "relatedCases": [
    {
      "caseName": "Supreme Court Advocates-on-Record Association v. Union of India",
      "citation": "(1993) 4 SCC 441",
      "relationship": "Overruled S.P. Gupta on executive primacy (Second Judges Case)",
      "judgmentId": "second-judges-1993"
    },
    {
      "caseName": "Bandhua Mukti Morcha v. Union of India",
      "citation": "(1984) 3 SCC 161",
      "relationship": "Applied the PIL locus standi doctrine of S.P. Gupta",
      "judgmentId": "bandhua-mukti-morcha-1984"
    }
  ],
  "examPoints": [
    "Inaugurated modern PIL doctrine and relaxed locus standi in India.",
    "Known as the \"First Judges Case\".",
    "Affirmed executive primacy in judicial appointments (later overruled in 1993).",
    "Rejected State claim of secrecy over appointment files, promoting transparency."
  ],
  "mcqs": [
    {
      "id": "sp-gupta-mcq-1",
      "question": "Which monumental procedural doctrine in Indian constitutional law was established by the Supreme Court in S.P. Gupta v. Union of India (1981)?",
      "options": [
        "Doctrine of Pleasure",
        "Public Interest Litigation (PIL) and liberalized locus standi",
        "Curative Petition",
        "Absolute Liability"
      ],
      "correctIndex": 1,
      "explanation": "S.P. Gupta established the foundational doctrine of Public Interest Litigation (PIL) by relaxing the traditional Anglo-Saxon rule of locus standi."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases 1981 Supp SCC 87",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const romeshThappar1950: Judgment = {
  "id": "romesh-thappar-1950",
  "caseName": "Romesh Thappar v. State of Madras",
  "shortName": "Romesh Thappar",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1950,
  "citation": "AIR 1950 SC 124",
  "bench": "6-Judge Constitution Bench",
  "judges": [
    "H.J. Kania, C.J.",
    "Fazl Ali, J.",
    "Patanjali Sastri, J.",
    "M.C. Mahajan, J.",
    "B.K. Mukherjea, J.",
    "S.R. Das, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Freedom of Speech",
    "Article 19(1)(a)",
    "Freedom of Circulation",
    "Public Safety vs Public Order"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 19(1)(a)",
    "Press Freedom",
    "Circulation"
  ],
  "summary": "The Supreme Court struck down a State Government ban on the entry and circulation of the English weekly journal \"Cross Roads\" in Madras, holding that freedom of speech and expression includes freedom of circulation, and that \"public safety\" cannot justify speech suppression under Article 19(2) unless it undermines the security of the State itself. This decision prompted the First Constitutional Amendment adding \"public order\" to Article 19(2).",
  "facts": [
    "Romesh Thappar was the printer, publisher, and editor of a weekly journal called \"Cross Roads\" printed in Bombay.",
    "Under Section 9(1-A) of the Madras Maintenance of Public Order Act, 1949, the Government of Madras issued an order prohibiting the entry into or circulation, sale, or distribution in the State of Madras of the said weekly journal in the interests of public safety.",
    "Thappar filed a writ petition directly in the Supreme Court under Article 32 challenging the order as a violation of Article 19(1)(a)."
  ],
  "issues": [
    "Whether freedom of speech and expression under Article 19(1)(a) includes freedom of circulation of ideas and literature.",
    "Whether the restriction imposed for \"public safety\" was permissible under the original Article 19(2) (which only mentioned security of the State)."
  ],
  "arguments": {
    "appellant": [
      "Freedom of speech is meaningless without the freedom to circulate and distribute newspapers across States.",
      "The Act authorized suppression of speech on vague grounds of \"public safety\", which was broader than \"security of the State\"."
    ],
    "respondent": [
      "The petitioner must first exhaust remedies before the High Court under Article 226 before approaching the Supreme Court under Article 32.",
      "Maintenance of public safety is synonymous with preservation of state security."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-19",
      "article": "Article 19(1)(a) and 19(2)",
      "title": "Protection of certain rights regarding freedom of speech, etc.",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Freedom of circulation is part of speech",
      "explanation": "Patanjali Sastri, J. held that freedom of speech and expression includes the freedom of propagation of ideas, and that freedom is ensured by the freedom of circulation. Liberty of circulation is as essential to that freedom as liberty of publishing."
    },
    {
      "heading": "Distinction between public order and security of State",
      "explanation": "The Court held that the Constitution drew a distinct line between serious offences endangering the foundation of the State and ordinary public disorder. \"Public safety\" was not an enumerated head under original Article 19(2)."
    }
  ],
  "decision": "Section 9(1-A) of the Madras Act and the ban order were struck down as unconstitutional.",
  "holding": "Freedom of speech and expression includes the right to propagate ideas through circulation; laws curtailing speech cannot travel beyond the specific grounds in Article 19(2).",
  "ratioDecidendi": "Freedom of speech and expression under Article 19(1)(a) includes the right to circulate literature, and restrictions on circulation outside the specific grounds of Article 19(2) are void.",
  "relatedCases": [
    {
      "caseName": "Brij Bhushan v. State of Delhi",
      "citation": "AIR 1950 SC 129",
      "relationship": "Companion judgment on press freedom",
      "judgmentId": "brij-bhushan-1950"
    },
    {
      "caseName": "Shreya Singhal v. Union of India",
      "citation": "(2015) 5 SCC 1",
      "relationship": "Reaffirmed speech standards",
      "judgmentId": "shreya-singhal-2015"
    }
  ],
  "examPoints": [
    "Pioneering ruling on freedom of press and circulation under Article 19(1)(a).",
    "Direct reason for First Amendment Act, 1951 inserting \"public order\" in Article 19(2).",
    "Affirmed that Article 32 is a fundamental right itself and prior recourse to Article 226 is not mandatory."
  ],
  "mcqs": [
    {
      "id": "romesh-thappar-mcq-1",
      "question": "In Romesh Thappar v. State of Madras (1950), the Supreme Court ruled that freedom of speech and expression includes:",
      "options": [
        "Right to strike",
        "Freedom of circulation of publications",
        "Right to absolute immunity from defamation laws",
        "Right to bear arms"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court established that freedom of speech and expression under Article 19(1)(a) includes freedom of propagation of ideas ensured by freedom of circulation."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1950 SC 124 / 1950 SCR 594",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const brijBhushan1950: Judgment = {
  "id": "brij-bhushan-1950",
  "caseName": "Brij Bhushan v. State of Delhi",
  "shortName": "Brij Bhushan",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1950,
  "citation": "AIR 1950 SC 129",
  "bench": "6-Judge Constitution Bench",
  "judges": [
    "H.J. Kania, C.J.",
    "Fazl Ali, J.",
    "Patanjali Sastri, J.",
    "M.C. Mahajan, J.",
    "B.K. Mukherjea, J.",
    "S.R. Das, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Pre-censorship",
    "Freedom of the Press",
    "Article 19(1)(a)",
    "East Punjab Public Safety Act"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 19(1)(a)",
    "Pre-censorship",
    "Press Freedom"
  ],
  "summary": "The Constitution Bench struck down a pre-censorship order issued by the Chief Commissioner of Delhi directing the printer and publisher of the English weekly \"Organiser\" to submit all communal matters and news regarding Pakistan to the government for prior scrutiny, holding that pre-censorship of a journal constitutes a direct restriction on the freedom of the press under Article 19(1)(a).",
  "facts": [
    "Under Section 7(1)(c) of the East Punjab Public Safety Act, 1949, the Chief Commissioner of Delhi issued an order directing the printer and publisher of English weekly \"Organiser\" to submit for scrutiny before publication all communal matter and all matters and news relating to Pakistan.",
    "The publishers challenged the order under Article 32 as an unconstitutional prior restraint on the press."
  ],
  "issues": [
    "Whether the imposition of pre-censorship on a newspaper is a restriction on the liberty of the press guaranteed by Article 19(1)(a).",
    "Whether pre-censorship could be justified under Article 19(2) in the interest of public safety."
  ],
  "arguments": {
    "appellant": [
      "Pre-censorship is the most insidious form of suppression of free press and is completely alien to democratic constitutional guarantees.",
      "The Constitution does not permit prior censorship under Article 19(2)."
    ],
    "respondent": [
      "Communal tension following partition required preventive censorship to maintain public safety."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-19",
      "article": "Article 19(1)(a) and 19(2)",
      "title": "Freedom of speech and expression",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Pre-censorship as an invidious restriction on the press",
      "explanation": "Patanjali Sastri, J. held that the imposition of pre-censorship on a journal is a restriction on the liberty of the press, which is an essential part of the freedom of speech and expression."
    },
    {
      "heading": "Inapplicability of Article 19(2)",
      "explanation": "Following Romesh Thappar, the Court held that public safety was not a recognized ground under original Article 19(2) to sustain prior restraint."
    }
  ],
  "decision": "The pre-censorship order was quashed as unconstitutional and void.",
  "holding": "Pre-censorship of a newspaper or journal constitutes an unconstitutional restriction on the freedom of speech and expression under Article 19(1)(a).",
  "ratioDecidendi": "Prior restraint or pre-censorship of the press cannot be imposed unless strictly justified under the narrow exceptions of Article 19(2).",
  "relatedCases": [
    {
      "caseName": "Romesh Thappar v. State of Madras",
      "citation": "AIR 1950 SC 124",
      "relationship": "Decided on the same day on press freedom",
      "judgmentId": "romesh-thappar-1950"
    }
  ],
  "examPoints": [
    "Landmark authority prohibiting pre-censorship of newspapers.",
    "Reiterated Blackstone’s doctrine against prior restraint in Indian constitutional law.",
    "Companion case to Romesh Thappar."
  ],
  "mcqs": [
    {
      "id": "brij-bhushan-mcq-1",
      "question": "In Brij Bhushan v. State of Delhi (1950), the Supreme Court struck down:",
      "options": [
        "Compulsory licensing of journalists",
        "A pre-censorship order requiring prior scrutiny of newspaper material before publication",
        "A criminal defamation conviction",
        "The Official Secrets Act"
      ],
      "correctIndex": 1,
      "explanation": "The Court struck down a pre-censorship order requiring the weekly \"Organiser\" to submit all communal news to the government for prior scrutiny before publication."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1950 SC 129 / 1950 SCR 605",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const sakalPapers1962: Judgment = {
  "id": "sakal-papers-1962",
  "caseName": "Sakal Papers (P) Ltd. v. Union of India",
  "shortName": "Sakal Papers",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1962,
  "citation": "AIR 1962 SC 305",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "B.P. Sinha, C.J.",
    "A.K. Sarkar, J.",
    "K.C. Das Gupta, J.",
    "N. Rajagopala Ayyangar, J.",
    "J.R. Mudholkar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Price and Page Schedule",
    "Freedom of the Press",
    "Article 19(1)(a)",
    "Circulation"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 19(1)(a)",
    "Press Freedom",
    "Sakal Papers"
  ],
  "summary": "The Constitution Bench struck down the Newspaper (Price and Page) Act, 1956 and the Daily Newspaper (Price and Page) Order, 1960 which regulated the number of pages a newspaper could print according to the price charged. The Court held that the State cannot regulate the commercial volume or price of a newspaper in a manner that curtails circulation, as that directly abridges Article 19(1)(a).",
  "facts": [
    "Parliament passed the Newspaper (Price and Page) Act, 1956 empowering the Central Government to regulate the prices of newspapers in relation to their pages and to allocate space for advertisements.",
    "The Daily Newspaper (Price and Page) Order, 1960 fixed a schedule requiring newspapers to either raise their prices or reduce the number of pages.",
    "Sakal Papers challenged the Act and Order under Article 32, contending that raising prices would drastically reduce circulation while reducing pages would restrict the dissemination of news."
  ],
  "issues": [
    "Whether the State can regulate the price and page ratio of newspapers without violating Article 19(1)(a).",
    "Whether a law abridging speech under Article 19(1)(a) can be justified as a reasonable restriction on trade under Article 19(6)."
  ],
  "arguments": {
    "appellant": [
      "Compelling a newspaper to raise its price or reduce its page count directly curtails its circulation and restricts the volume of speech.",
      "Freedom of speech cannot be restricted on commercial grounds not enumerated in Article 19(2)."
    ],
    "respondent": [
      "The law was intended to prevent unfair competition and monopolistic growth by large newspapers to protect smaller regional newspapers under Article 19(6)."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-19",
      "article": "Article 19(1)(a), 19(1)(g), 19(2)",
      "title": "Freedom of speech and business",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Direct effect on circulation is an abridgment of speech",
      "explanation": "Mudholkar, J. held that fixing the volume of pages according to price directly targets circulation: either the newspaper cuts pages (restricting content) or raises price (dropping circulation). Both abridge Article 19(1)(a)."
    },
    {
      "heading": "Article 19(6) cannot override Article 19(1)(a)",
      "explanation": "The Court held that the State cannot justify a direct invasion of speech rights under Article 19(1)(a) by claiming it is regulating a commercial activity under Article 19(6). Speech can be restricted only under Article 19(2)."
    }
  ],
  "decision": "The Newspaper (Price and Page) Act, 1956 and the 1960 Order were held unconstitutional and void.",
  "holding": "Freedom of the press cannot be restricted indirectly by regulating newspaper prices or page numbers; commercial regulations cannot be used to circumvent Article 19(2).",
  "ratioDecidendi": "A legislative measure whose direct effect is to reduce the circulation or volume of a newspaper infringes Article 19(1)(a) and cannot be saved by Article 19(6).",
  "relatedCases": [
    {
      "caseName": "Bennett Coleman & Co. v. Union of India",
      "citation": "(1972) 2 SCC 788",
      "relationship": "Applied Sakal Papers test to newsprint import policy",
      "judgmentId": "bennett-coleman-1972"
    }
  ],
  "examPoints": [
    "Struck down Price and Page Schedule for newspapers.",
    "Established that trade restrictions under Article 19(6) cannot justify curtailing speech under Article 19(1)(a).",
    "Direct vs indirect effect on circulation."
  ],
  "mcqs": [
    {
      "id": "sakal-papers-mcq-1",
      "question": "In Sakal Papers v. Union of India (1962), the Supreme Court held that regulating the number of pages of a newspaper in relation to its price:",
      "options": [
        "Is valid as a fair trade practice under Article 19(6)",
        "Violates Article 19(1)(a) because it directly restricts circulation and dissemination of news",
        "Is permissible during emergency only",
        "Is an exclusively municipal matter"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that regulating the price-page ratio directly curtails circulation and infringes Article 19(1)(a), which cannot be saved under Article 19(6)."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1962 SC 305 / (1962) 3 SCR 842",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const bennettColeman1972: Judgment = {
  "id": "bennett-coleman-1972",
  "caseName": "Bennett Coleman & Co. v. Union of India",
  "shortName": "Bennett Coleman",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1972,
  "citation": "(1972) 2 SCC 788",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "S.M. Sikri, C.J.",
    "A.N. Ray, J.",
    "P. Jaganmohan Reddy, J.",
    "I.D. Dua, J.",
    "M.H. Beg, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Newsprint Policy",
    "Direct and Inevitable Effect",
    "Freedom of Speech",
    "Article 19(1)(a)"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 19(1)(a)",
    "Press Freedom",
    "Newsprint"
  ],
  "summary": "The Constitution Bench struck down quantitative restrictions and page-limit caps on newspaper editions imposed under the Import Control Policy for Newsprint. Formulating the \"direct and inevitable effect\" test, the Court held that while the State may ration imported newsprint due to foreign exchange shortages, it cannot control the growth, page capacity, or circulation of newspapers.",
  "facts": [
    "Under the Newsprint Control Order, 1962 and the Import Policy for Newsprint (1972-73), the Central Government imposed a maximum ceiling of 10 pages on daily newspapers, barred starting new editions or periodicals from common newsprint quotas, and restricted page adjustments.",
    "Leading publishing houses challenged the policy under Article 32, alleging government control of the press."
  ],
  "issues": [
    "Whether newsprint import restrictions violated freedom of speech and press under Article 19(1)(a).",
    "What is the true constitutional test to determine whether a government measure abridges Article 19(1)(a) (subject matter vs direct effect)."
  ],
  "arguments": {
    "appellant": [
      "The 10-page ceiling and restriction on circulation directly prevented newspapers from printing adequate news and commentary.",
      "Freedom of the press is both qualitative and quantitative: restricting pages curtails the volume of speech."
    ],
    "respondent": [
      "The policy was a commercial regulation of scarce foreign exchange and imported commodities under Articles 19(1)(g) and 19(6), not a law on speech."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-19",
      "article": "Article 19(1)(a)",
      "title": "Freedom of speech and expression",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "The \"Direct and Inevitable Effect\" test",
      "explanation": "Ray, J. formulated the seminal test: the true test is not the object or form of the law, but its direct and inevitable effect on fundamental rights. If the direct effect of newsprint rationing is to curtail the circulation and pages of newspapers, it directly violates Article 19(1)(a)."
    },
    {
      "heading": "Freedom of the press is the heart of democracy",
      "explanation": "The Court observed that newspapers are the vehicles through which citizens receive information and express viewpoints; fixing a 10-page ceiling limits expression and cripples press independence."
    }
  ],
  "decision": "The 10-page ceiling and related restrictive clauses of the Newsprint Policy were struck down as unconstitutional.",
  "holding": "The State cannot dictate the page count, circulation, or internal allocation of newspapers under the guise of rationing imported newsprint.",
  "ratioDecidendi": "The constitutional validity of State action must be judged by its direct and inevitable effect on fundamental rights; restricting newspaper pages and circulation directly infringes Article 19(1)(a).",
  "relatedCases": [
    {
      "caseName": "Sakal Papers (P) Ltd. v. Union of India",
      "citation": "AIR 1962 SC 305",
      "relationship": "Affirmed and expanded",
      "judgmentId": "sakal-papers-1962"
    },
    {
      "caseName": "R.C. Cooper v. Union of India",
      "citation": "(1970) 1 SCC 248",
      "relationship": "Applied the effect test established in R.C. Cooper",
      "judgmentId": "rc-cooper-1970"
    }
  ],
  "examPoints": [
    "Coined the \"Direct and Inevitable Effect\" test in Indian constitutional law.",
    "Affirmed that corporate shareholders/journalists can invoke Article 19(1)(a) through writ petitions.",
    "Struck down the 10-page ceiling on newspapers."
  ],
  "mcqs": [
    {
      "id": "bennett-coleman-mcq-1",
      "question": "Which constitutional test to assess violations of fundamental rights was prominently applied in Bennett Coleman & Co. v. Union of India (1972)?",
      "options": [
        "Pith and substance test",
        "Direct and inevitable effect test",
        "Clear and present danger test",
        "Severability test"
      ],
      "correctIndex": 1,
      "explanation": "Bennett Coleman firmly adopted the \"direct and inevitable effect\" test: the validity of a measure is judged by its direct effect on fundamental rights, not merely its legislative object."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1972) 2 SCC 788",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const satwantSingh1967: Judgment = {
  "id": "satwant-singh-1967",
  "caseName": "Satwant Singh Sawhney v. D. Ramarathnam, Assistant Passport Officer, New Delhi",
  "shortName": "Satwant Singh Sawhney",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1967,
  "citation": "AIR 1967 SC 1836",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "K. Subba Rao, C.J.",
    "M. Hidayatullah, J.",
    "R.S. Bachawat, J.",
    "J.M. Shelat, J.",
    "C.A. Vaidialingam, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Right to Travel Abroad",
    "Article 21",
    "Personal Liberty",
    "Passports Act"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 21",
    "Passport",
    "Travel Abroad"
  ],
  "summary": "The Constitution Bench held that the right to travel abroad is an integral component of \"personal liberty\" guaranteed under Article 21 of the Constitution. In the absence of an enacted statutory procedure by Parliament, the executive has no arbitrary discretion to deny or impound a passport, which prompted Parliament to enact the Passports Act, 1967.",
  "facts": [
    "Satwant Singh Sawhney carried on business of import and export and held valid Indian passports.",
    "The regional passport officer ordered him to surrender his passports and refused to renew them, citing unguided executive instructions without giving reasons.",
    "He filed a writ petition in the Supreme Court contending that refusal of passport facilities deprived him of his right to travel abroad under Articles 21 and 14."
  ],
  "issues": [
    "Whether the expression \"personal liberty\" in Article 21 includes the right to travel abroad.",
    "Whether the executive could refuse or impound a passport without a statutory law establishing procedure."
  ],
  "arguments": {
    "appellant": [
      "Personal liberty encompasses all varieties of freedoms not covered by Article 19, including freedom to go abroad.",
      "Deprivation of liberty without authority of enacted law violates Article 21."
    ],
    "respondent": [
      "A passport is merely a political document issued under executive prerogative requesting foreign states to afford protection.",
      "Article 19(1)(d) only guarantees movement within the territory of India, indicating external travel is not a fundamental right."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-14",
      "article": "Article 14",
      "title": "Equality before law",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Expansive meaning of \"personal liberty\"",
      "explanation": "Subba Rao, C.J. held that \"personal liberty\" in Article 21 is a wide concept encompassing all rights relating to personhood. An Indian citizen has the fundamental right to travel abroad as an aspect of personal liberty."
    },
    {
      "heading": "No deprivation without procedure established by law",
      "explanation": "Under Article 21, no person can be deprived of personal liberty except according to procedure established by law. Since no statute existed authorizing passport denial, unguided executive discretion was unconstitutional and violated Article 14."
    }
  ],
  "decision": "Writ of mandamus issued directing authorities to return the passports and process travel documents.",
  "holding": "The right to travel abroad is guaranteed by Article 21; executive discretion without legislative sanction cannot restrict this right.",
  "ratioDecidendi": "The right to travel abroad is a fundamental right included in personal liberty under Article 21, which can only be curtailed by a valid procedure established by law.",
  "relatedCases": [
    {
      "caseName": "Maneka Gandhi v. Union of India",
      "citation": "(1978) 1 SCC 248",
      "relationship": "Affirmed and expanded Satwant Singh on fair procedure",
      "judgmentId": "maneka-gandhi-1978"
    },
    {
      "caseName": "A.K. Gopalan v. State of Madras",
      "citation": "AIR 1950 SC 27",
      "relationship": "Departed from Gopalan’s narrow view of liberty",
      "judgmentId": "ak-gopalan-1950"
    }
  ],
  "examPoints": [
    "Recognized right to travel abroad under Article 21.",
    "Prompted the enactment of the Passports Act, 1967.",
    "Key stepping stone to the historic Maneka Gandhi (1978) decision."
  ],
  "mcqs": [
    {
      "id": "satwant-singh-mcq-1",
      "question": "Which statute was enacted by Parliament as a direct consequence of the Supreme Court judgment in Satwant Singh Sawhney (1967)?",
      "options": [
        "Foreigners Act, 1946",
        "Passports Act, 1967",
        "Immigration Act, 1983",
        "Citizenship Amendment Act"
      ],
      "correctIndex": 1,
      "explanation": "Following Satwant Singh Sawhney holding that travel abroad is an Art. 21 right requiring statutory procedure, Parliament enacted the Passports Act, 1967."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1967 SC 1836 / (1967) 3 SCR 525",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const kharakSingh1963: Judgment = {
  "id": "kharak-singh-1963",
  "caseName": "Kharak Singh v. State of U.P.",
  "shortName": "Kharak Singh",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1963,
  "citation": "AIR 1963 SC 1295",
  "bench": "6-Judge Constitution Bench",
  "judges": [
    "B.P. Sinha, C.J.",
    "Syed Jaffer Imam, J.",
    "K. Subba Rao, J.",
    "K.N. Wanchoo, J.",
    "N. Rajagopala Ayyangar, J.",
    "J.R. Mudholkar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Right to Privacy",
    "Article 21",
    "Domiciliary Visits",
    "Police Surveillance"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 21",
    "Privacy",
    "Surveillance"
  ],
  "summary": "The 6-Judge Constitution Bench struck down Regulation 236(b) of the U.P. Police Regulations authorising secret nocturnal domiciliary visits to suspected history-sheeters, holding that knocking on doors at night violates personal liberty under Article 21. While the majority declined to recognize a standalone privacy right, the visionary dissent of Subba Rao, J. declared privacy to be an essential ingredient of personal liberty under Article 21, which was ultimately vindicated in Puttaswamy (2017).",
  "facts": [
    "Kharak Singh was released for lack of evidence in a dacoity case, but police opened a history-sheet against him under Chapter XX of the U.P. Police Regulations.",
    "Police subjected him to secret surveillance, shadowing, and night-time domiciliary visits where constables entered his home and woke him up.",
    "He challenged the regulations under Article 32 as violating Articles 19(1)(d) and 21."
  ],
  "issues": [
    "Whether police surveillance and domiciliary visits under Regulation 236 violated personal liberty under Article 21.",
    "Whether the Constitution of India guarantees an inherent fundamental right to privacy."
  ],
  "arguments": {
    "appellant": [
      "An unauthorized intrusion into a person’s home at night destroys personal liberty and human dignity.",
      "Shadowing and visits restrict free movement and invade personal privacy."
    ],
    "respondent": [
      "Surveillance is a routine administrative measure for crime prevention and does not physically impede movement."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-19",
      "article": "Article 19(1)(d)",
      "title": "Freedom of movement throughout the territory of India",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Unconstitutionality of nocturnal domiciliary visits",
      "explanation": "Ayyangar, J. for the majority held that knocking on a citizen’s door at night is an unauthorized intrusion into his home and violates Article 21. An English maxim applies: an Indian’s home is his castle."
    },
    {
      "heading": "Subba Rao, J.’s landmark dissent on Privacy",
      "explanation": "Subba Rao, J. (joined by Shah, J.) held that all surveillance provisions were unconstitutional. He famously observed that the right to personal liberty in Article 21 includes the right to privacy: \"if physical restraints on a person’s movements affect his liberty, physical watch over his movements degrades him into a state of psychological restraint.\""
    }
  ],
  "decision": "Regulation 236(b) (domiciliary visits) struck down; other surveillance regulations upheld by majority.",
  "holding": "Nocturnal police visits to a person’s home violate Article 21; Subba Rao, J. recognized privacy as an essential facet of personal liberty.",
  "ratioDecidendi": "Unauthorized intrusion into a person’s home without statutory authority violates personal liberty guaranteed by Article 21 of the Constitution.",
  "relatedCases": [
    {
      "caseName": "Justice K.S. Puttaswamy (Retd.) v. Union of India",
      "citation": "(2017) 10 SCC 1",
      "relationship": "Overruled the majority in Kharak Singh and affirmed Subba Rao, J.’s dissent",
      "judgmentId": "puttaswamy-2017"
    },
    {
      "caseName": "A.K. Gopalan v. State of Madras",
      "citation": "AIR 1950 SC 27",
      "relationship": "Majority adhered to Gopalan’s compartmentalized view",
      "judgmentId": "ak-gopalan-1950"
    }
  ],
  "examPoints": [
    "Struck down Regulation 236(b) U.P. Police Regulations (domiciliary visits).",
    "Subba Rao, J. articulated the genesis of the Right to Privacy in Indian law.",
    "Explicitly overruled by 9-Judge Bench in Puttaswamy (2017) on the privacy question."
  ],
  "mcqs": [
    {
      "id": "kharak-singh-mcq-1",
      "question": "Which police surveillance measure was declared unconstitutional in Kharak Singh v. State of U.P. (1963)?",
      "options": [
        "Nocturnal domiciliary visits by police",
        "Recording fingerprints",
        "Maintaining a crime register",
        "Interrogation at police stations"
      ],
      "correctIndex": 0,
      "explanation": "The Supreme Court unanimously held that nocturnal domiciliary visits authorized by Regulation 236(b) violated personal liberty under Article 21."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1963 SC 1295 / (1964) 1 SCR 332",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const sunilBatra1978: Judgment = {
  "id": "sunil-batra-1978",
  "caseName": "Sunil Batra (I) v. Delhi Administration",
  "shortName": "Sunil Batra (I)",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1978,
  "citation": "(1978) 4 SCC 494",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "Y.V. Chandrachud, C.J.",
    "V.R. Krishna Iyer, J.",
    "D.A. Desai, J.",
    "R.S. Pathak, J.",
    "P.S. Kailasam, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Prisoners Rights",
    "Solitary Confinement",
    "Bar Fetters",
    "Article 21",
    "Prisons Act"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 21",
    "Prisoners Rights",
    "Solitary Confinement"
  ],
  "summary": "The 5-Judge Constitution Bench established that prisoners do not shed their fundamental rights upon incarceration. Reading down Section 30(2) of the Prisons Act, 1894, the Court held that solitary confinement and the continuous imposition of bar fetters on death-row prisoners is unconstitutional and violates Articles 14, 19, and 21 unless ordered by a court as a substantive penal sentence.",
  "facts": [
    "Sunil Batra, a prisoner sentenced to death by the trial court, was kept in solitary confinement in Tihar Jail awaiting confirmation of his sentence by the High Court.",
    "Another prisoner, Charles Sobhraj, was put in continuous iron bar fetters for 24 hours a day inside the prison.",
    "Both challenged their harsh custodial treatment under Article 32, alleging violation of Articles 14, 19, and 21."
  ],
  "issues": [
    "Whether a prisoner sentenced to death can be kept in solitary confinement under Section 30(2) Prisons Act before his death sentence has become final.",
    "Whether putting prisoners in bar fetters continuously without judicial sanction violates Article 21."
  ],
  "arguments": {
    "appellant": [
      "Solitary confinement damages mental and physical health and amounts to torture.",
      "Convicts retain fundamental rights under Part III, subject only to valid statutory imprisonment."
    ],
    "respondent": [
      "Section 30(2) Prisons Act requires prison authorities to place a prisoner \"under sentence of death\" in a separate cell for security."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "prisons-act",
      "actName": "Prisons Act, 1894",
      "provisionId": "prisons-s-30",
      "section": "Section 30(2)",
      "title": "Prisoners under sentence of death"
    }
  ],
  "reasoning": [
    {
      "heading": "Prisoners retain Fundamental Rights",
      "explanation": "Krishna Iyer, J. and Desai, J. held that conviction for a crime does not reduce the human being into a non-person. Prisoners retain all fundamental rights that are not incompatible with incarceration."
    },
    {
      "heading": "Interpretation of \"under sentence of death\"",
      "explanation": "Section 30(2) applies only when the sentence of death has become completely final, conclusive, and indefeasible after dismissal of all appeals and mercy petitions; pre-confirmation solitary confinement is illegal."
    }
  ],
  "decision": "Solitary confinement of death-row prisoners awaiting appeals was declared illegal; bar fetters ordered removed.",
  "holding": "Section 30(2) Prisons Act cannot be invoked to put a prisoner in solitary confinement until his death sentence is finally confirmed by the highest court and mercy petitions are exhausted.",
  "ratioDecidendi": "Incarceration does not strip a prisoner of Article 21 guarantees; imposing solitary confinement or bar fetters without judicial sanction is an unconstitutional deprivation of personal liberty.",
  "relatedCases": [
    {
      "caseName": "Sunil Batra (II) v. Delhi Administration",
      "citation": "(1980) 3 SCC 488",
      "relationship": "Subsequent landmark on prisoner protection",
      "judgmentId": "sunil-batra-1980"
    },
    {
      "caseName": "Maneka Gandhi v. Union of India",
      "citation": "(1978) 1 SCC 248",
      "relationship": "Applied the just, fair and reasonable procedure standard",
      "judgmentId": "maneka-gandhi-1978"
    }
  ],
  "examPoints": [
    "Held that prisoners retain fundamental rights inside prison walls.",
    "Read down Section 30(2) Prisons Act, 1894 regarding solitary confinement.",
    "Bar fetters declared inhumane and violative of Article 21."
  ],
  "mcqs": [
    {
      "id": "sunil-batra-1-mcq-1",
      "question": "In Sunil Batra (I) v. Delhi Administration (1978), when can solitary confinement under Section 30(2) Prisons Act be legally imposed on a death-row prisoner?",
      "options": [
        "Immediately upon sentencing by the trial court",
        "Only after the death sentence has become final, conclusive, and all appeals/mercy petitions are exhausted",
        "At the sole discretion of the Jail Superintendent",
        "Whenever the prisoner attempts to file an appeal"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that a prisoner is \"under sentence of death\" under Section 30(2) only after the death sentence has attained finality and all legal and executive remedies are exhausted."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1978) 4 SCC 494",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const sunilBatra1980: Judgment = {
  "id": "sunil-batra-1980",
  "caseName": "Sunil Batra (II) v. Delhi Administration",
  "shortName": "Sunil Batra (II)",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1980,
  "citation": "(1980) 3 SCC 488",
  "bench": "3-Judge Bench",
  "judges": [
    "V.R. Krishna Iyer, J.",
    "R.S. Pathak, J.",
    "O. Chinnappa Reddy, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Epistolary Jurisdiction",
    "Custodial Violence",
    "Habeas Corpus",
    "Article 32",
    "Prison Reform"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 32",
    "Epistolary Jurisdiction",
    "Prison Reform"
  ],
  "summary": "The Supreme Court crystallized epistolary jurisdiction by converting an informal handwritten letter written by a prisoner into a writ petition of habeas corpus. The Court intervened to stop the brutal physical and sexual torture of another inmate by a prison warden, laying down binding directions for prison monitoring, grievance redressal, and dynamic judicial oversight inside correctional facilities.",
  "facts": [
    "Sunil Batra, an inmate in Tihar Jail, scribbled a letter on a piece of paper to a Supreme Court judge complaining that a prison warder had brutally beaten and sexually assaulted a fellow inmate, Prem Chand, to extort money.",
    "The Court treated the handwritten letter as a petition for a writ of habeas corpus and appointed amicus curiae and medical examiners."
  ],
  "issues": [
    "Whether the Supreme Court can exercise writ jurisdiction under Article 32 on the basis of a letter sent by a prisoner.",
    "What dynamic remedies and supervisory powers does the writ of habeas corpus possess to protect prisoners against custodial torture."
  ],
  "arguments": {
    "appellant": [
      "The writ of habeas corpus is not limited to releasing a person from unlawful custody, but extends to protecting him from unlawful treatment inside lawful custody."
    ],
    "respondent": [
      "Jail administration is governed by internal prison manuals and judicial intervention impairs custodial discipline."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-32",
      "article": "Article 32",
      "title": "Remedies for enforcement of rights (Habeas Corpus)",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Epistolary jurisdiction in defense of human rights",
      "explanation": "Krishna Iyer, J. declared that technicalities of procedure cannot stand between a crying human soul in torture and the constitutional court. A simple letter can activate the potent remedy of habeas corpus."
    },
    {
      "heading": "Expanded scope of Habeas Corpus",
      "explanation": "Habeas corpus is a dynamic writ: it runs not merely to break illegal confinement, but also to humanise custodial conditions, prevent torture, and ensure prisoners are treated with dignity under Article 21."
    }
  ],
  "decision": "Torture of Prem Chand was condemned; criminal action ordered against the warder; comprehensive jail reform guidelines issued.",
  "holding": "Habeas corpus lies to enforce constitutional rights of prisoners against custodial brutality; epistolary jurisdiction permits courts to treat prisoner letters as formal writ petitions.",
  "ratioDecidendi": "The writ of habeas corpus is available not only for release from unlawful detention but also to protect prisoners from cruel, inhuman, or degrading treatment during lawful incarceration.",
  "relatedCases": [
    {
      "caseName": "Sunil Batra (I) v. Delhi Administration",
      "citation": "(1978) 4 SCC 494",
      "relationship": "First installment on prisoners rights",
      "judgmentId": "sunil-batra-1978"
    },
    {
      "caseName": "Hussainara Khatoon v. State of Bihar",
      "citation": "(1980) 1 SCC 81",
      "relationship": "Companion PIL on undertrial prisoners",
      "judgmentId": "hussainara-khatoon-1979"
    }
  ],
  "examPoints": [
    "Foundational case for epistolary jurisdiction in India.",
    "Expanded habeas corpus beyond release from detention to protection from prison torture.",
    "Directed installation of complaint boxes and regular District Judge visits to prisons."
  ],
  "mcqs": [
    {
      "id": "sunil-batra-2-mcq-1",
      "question": "In Sunil Batra (II) v. Delhi Administration (1980), the Supreme Court held that the writ of habeas corpus can be used:",
      "options": [
        "Only to challenge initial arrest legality",
        "Not only for release from unlawful detention, but also to protect prisoners from illegal torture inside lawful custody",
        "Only by family members of the prisoner",
        "Exclusively during wartime"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that the writ of habeas corpus is dynamic and protects prisoners against inhuman conditions, torture, and degradation during lawful imprisonment."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1980) 3 SCC 488",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const rudulSah1983: Judgment = {
  "id": "rudul-sah-1983",
  "caseName": "Rudul Sah v. State of Bihar",
  "shortName": "Rudul Sah",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1983,
  "citation": "(1983) 4 SCC 141",
  "bench": "3-Judge Bench",
  "judges": [
    "Y.V. Chandrachud, C.J.",
    "A.N. Sen, J.",
    "R.B. Misra, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Public Law Compensation",
    "Illegal Detention",
    "Article 21",
    "Article 32",
    "State Liability"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 32",
    "Article 21",
    "Compensation",
    "Illegal Detention"
  ],
  "summary": "The Supreme Court inaugurated public law damages for constitutional tort in India, ordering the State of Bihar to pay Rs. 35,000 as compensation to Rudul Sah, who had been illegally kept in prison for more than 14 years after being acquitted by the Sessions Court. The Court held that monetary compensation is a necessary and effective palliative remedy to enforce Article 21 against State lawlessness.",
  "facts": [
    "Rudul Sah was tried for murder and acquitted by the Sessions Court of Muzaffarpur on 3 June 1968, which directed his immediate release.",
    "Despite the acquittal, he was languishing in jail for more than 14 years until released in October 1982 after a habeas corpus petition was filed.",
    "He approached the Supreme Court under Article 32 demanding immediate release, rehabilitation, medical treatment, and exemplary compensation from the State."
  ],
  "issues": [
    "Whether the Supreme Court can award monetary compensation under Article 32 for violation of the fundamental right to life and liberty under Article 21.",
    "Whether the petitioner must be relegated solely to an ordinary civil suit for damages for false imprisonment."
  ],
  "arguments": {
    "appellant": [
      "Deprivation of liberty for 14 years post-acquittal is shocking State lawlessness; mere release is no remedy for stolen years of life.",
      "Article 32 gives the Court plenary power to grant appropriate relief, including financial compensation."
    ],
    "respondent": [
      "The State cannot be subjected to damages under writ jurisdiction; the remedy lies only in a civil suit against the jail officials."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-32",
      "article": "Article 32",
      "title": "Remedies for enforcement of rights conferred by Part III",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Monetary compensation as a constitutional remedy under Article 32",
      "explanation": "Chandrachud, C.J. held that Article 21 would be denuded of its significant content if the power of the Court were limited merely to passing orders of release. The Court can grant monetary compensation in exercise of its jurisdiction under Article 32 to repair gross violations of fundamental rights."
    },
    {
      "heading": "Palliative and non-exclusionary remedy",
      "explanation": "The grant of compensation under Article 32 does not bar the petitioner from pursuing an ordinary civil suit for damages, but provides immediate palliative relief against administrative callousness."
    }
  ],
  "decision": "State of Bihar directed to pay Rs. 35,000 compensation in addition to Rs. 5,000 already paid.",
  "holding": "The Supreme Court has power under Article 32 to award monetary compensation for violation of Article 21; victims of illegal detention need not be relegated to prolonged civil suits.",
  "ratioDecidendi": "Monetary compensation can be granted under Article 32 for deprivation of personal liberty under Article 21 caused by unlawful and unconstitutional detention by State authorities.",
  "relatedCases": [
    {
      "caseName": "Bhim Singh, MLA v. State of J&K",
      "citation": "(1985) 4 SCC 677",
      "relationship": "Applied Rudul Sah to illegal arrest of MLA",
      "judgmentId": "bhim-singh-1985"
    },
    {
      "caseName": "D.K. Basu v. State of West Bengal",
      "citation": "(1997) 1 SCC 416",
      "relationship": "Affirmed public law compensation for custodial deaths",
      "judgmentId": "dk-basu-1997"
    }
  ],
  "examPoints": [
    "Inaugurated public law compensation for constitutional tort in India.",
    "Petitioner detained for 14 years after acquittal.",
    "Affirmed that Article 32 powers extend to awarding financial reparation."
  ],
  "mcqs": [
    {
      "id": "rudul-sah-mcq-1",
      "question": "The Supreme Court introduced public law monetary compensation for violation of Article 21 in which historic case?",
      "options": [
        "A.K. Gopalan v. State of Madras",
        "Rudul Sah v. State of Bihar",
        "Maneka Gandhi v. Union of India",
        "Kharak Singh v. State of U.P."
      ],
      "correctIndex": 1,
      "explanation": "Rudul Sah v. State of Bihar (1983) is the pioneer judgment establishing monetary compensation under Article 32 for illegal detention and violation of Article 21."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1983) 4 SCC 141",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const bhimSingh1985: Judgment = {
  "id": "bhim-singh-1985",
  "caseName": "Bhim Singh, MLA v. State of J&K",
  "shortName": "Bhim Singh",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1985,
  "citation": "(1985) 4 SCC 677",
  "bench": "2-Judge Bench",
  "judges": [
    "O. Chinnappa Reddy, J.",
    "V. Khalid, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Illegal Arrest",
    "Legislator Rights",
    "Article 21",
    "Article 22(2)",
    "Monetary Compensation"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 21",
    "Article 22",
    "Illegal Arrest",
    "Compensation"
  ],
  "summary": "The Supreme Court awarded Rs. 50,000 as compensation against the State for the unlawful, malicious arrest and detention of an opposition MLA by police officers to deliberately prevent him from attending the Legislative Assembly session and casting his vote on a critical bill, holding that high-handed police violations of Articles 21 and 22(2) must be met with constitutional damages.",
  "facts": [
    "Bhim Singh, a member of the Jammu & Kashmir Legislative Assembly, was intercepted and arrested by police while on his way to Srinagar to attend the Assembly session.",
    "He was kept in police custody in undisclosed police stations and not produced before a magistrate within 24 hours as mandated by Article 22(2).",
    "The voting on a key confidence motion in the Assembly concluded in his absence before his wife obtained a habeas corpus order."
  ],
  "issues": [
    "Whether the malicious arrest and deprivation of liberty of an MLA to prevent attendance in the Assembly violated Articles 21 and 22(2).",
    "Whether monetary compensation can be awarded by the Supreme Court when the detenu has already been released."
  ],
  "arguments": {
    "appellant": [
      "Police acted maliciously at the behest of political superiors to disenfranchise an elected representative in the Assembly.",
      "Failure to produce before a magistrate within 24 hours violated Article 22(2)."
    ],
    "respondent": [
      "The MLA had already been released, rendering the habeas corpus petition infructuous."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-22",
      "article": "Article 22(2)",
      "title": "Protection against arrest and detention (Production before magistrate within 24 hours)",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-32",
      "article": "Article 32",
      "title": "Remedies for enforcement of fundamental rights",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    }
  ],
  "reasoning": [
    {
      "heading": "Malicious arrest to disable legislator attendance",
      "explanation": "Chinnappa Reddy, J. observed that police officers acted with authoritarian arrogance to deprive an MLA of his constitutional duty to attend the Assembly, which was a calculated subversion of democracy."
    },
    {
      "heading": "Compensation when release has already occurred",
      "explanation": "The Court held that the petition does not become moot upon release. When an elected representative is maliciously deprived of liberty, the Court must condemn the abuse of power and compensate the victim with monetary damages."
    }
  ],
  "decision": "State of Jammu & Kashmir directed to pay Rs. 50,000 compensation to Bhim Singh.",
  "holding": "Malicious deprivation of personal liberty and breach of Article 22(2) warrants monetary compensation under Article 32, even after release.",
  "ratioDecidendi": "Where a person’s constitutional rights under Articles 21 and 22(2) are invaded maliciously and unlawfully by the police, the Supreme Court has jurisdiction to award monetary compensation under Article 32.",
  "relatedCases": [
    {
      "caseName": "Rudul Sah v. State of Bihar",
      "citation": "(1983) 4 SCC 141",
      "relationship": "Precedent for constitutional damages",
      "judgmentId": "rudul-sah-1983"
    },
    {
      "caseName": "D.K. Basu v. State of West Bengal",
      "citation": "(1997) 1 SCC 416",
      "relationship": "Cited Bhim Singh in laying down arrest guidelines",
      "judgmentId": "dk-basu-1997"
    }
  ],
  "examPoints": [
    "Rs. 50,000 compensation awarded for unlawful detention of an MLA.",
    "Reaffirmed strict compliance with 24-hour magistrate production rule under Article 22(2).",
    "Established that habeas corpus petitions do not become infructuous upon release if compensation is claimed."
  ],
  "mcqs": [
    {
      "id": "bhim-singh-mcq-1",
      "question": "In Bhim Singh, MLA v. State of J&K (1985), the Supreme Court awarded monetary compensation because:",
      "options": [
        "An MLA was defamed in a newspaper",
        "An MLA was unlawfully and maliciously arrested to prevent him from attending the Legislative Assembly",
        "An election was countermanded",
        "A minister refused to answer a question in the House"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court awarded Rs. 50,000 damages because the police unlawfully and maliciously arrested an MLA to prevent him from casting his vote in the Legislative Assembly."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1985) 4 SCC 677",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const lChandraKumar1997: Judgment = {
  "id": "l-chandra-kumar-1997",
  "caseName": "L. Chandra Kumar v. Union of India",
  "shortName": "L. Chandra Kumar",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1997,
  "citation": "(1997) 3 SCC 261",
  "bench": "7-Judge Constitution Bench",
  "judges": [
    "A.M. Ahmadi, C.J.",
    "M.M. Punchhi, J.",
    "K. Ramaswamy, J.",
    "S.P. Bharucha, J.",
    "S. Saghir Ahmad, J.",
    "K. Venkataswami, J.",
    "K.T. Thomas, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Judicial Review",
    "Basic Structure",
    "Tribunals",
    "Articles 323A and 323B",
    "Article 226/227"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Basic Structure",
    "Tribunals",
    "Judicial Review",
    "Article 226"
  ],
  "summary": "The 7-Judge Constitution Bench unanimously held that the power of judicial review vested in the High Courts under Articles 226/227 and in the Supreme Court under Article 32 is an integral and untruncatable part of the basic structure of the Constitution. The Court struck down provisions of Articles 323A and 323B and Section 28 of the Administrative Tribunals Act, 1985 that excluded the jurisdiction of High Courts, ruling that all decisions of tribunals are subject to scrutiny by a Division Bench of the High Court.",
  "facts": [
    "Articles 323A and 323B (inserted by the 42nd Amendment) empowered Parliament and State Legislatures to establish tribunals for service and other disputes and exclude the jurisdiction of all courts except the Supreme Court under Article 136.",
    "Section 28 of the Administrative Tribunals Act, 1985 (the \"exclusion of jurisdiction\" clause) ousted High Court jurisdiction under Articles 226 and 227.",
    "Litigants challenged the validity of these exclusion clauses, contending that judicial review by High Courts is part of the basic structure."
  ],
  "issues": [
    "Whether the exclusion of the jurisdiction of High Courts under Articles 226 and 227 by Articles 323A/323B and Section 28 of the Administrative Tribunals Act violates the basic structure.",
    "Whether administrative tribunals can act as supplemental or substitute forums for High Courts."
  ],
  "arguments": {
    "appellant": [
      "The constitutional power of High Courts under Articles 226 and 227 cannot be abrogated or supplanted by legislative tribunals.",
      "Judicial review of administrative action is a non-negotiable basic feature."
    ],
    "respondent": [
      "Specialised tribunals expedite justice and relieve High Courts of crushing backlogs under the express constitutional mandate of Article 323A.",
      "Access to the Supreme Court under Article 136 is preserved."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-226",
      "article": "Article 226 and 227",
      "title": "Power of High Courts to issue certain writs and superintendence",
      "subjectSlug": "constitution",
      "topicId": "basic-structure"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-323a",
      "article": "Article 323A and 323B",
      "title": "Administrative tribunals and tribunals for other matters",
      "subjectSlug": "constitution",
      "topicId": "basic-structure"
    }
  ],
  "reasoning": [
    {
      "heading": "Judicial review under Articles 226/227 and 32 is Basic Structure",
      "explanation": "Ahmadi, C.J. held that the power of judicial review over legislative action and administrative action vested in High Courts under Article 226/227 and the Supreme Court under Article 32 is an inviolable basic feature of the Constitution that cannot be ousted by constitutional amendment or statute."
    },
    {
      "heading": "Tribunals as supplemental courts of first instance",
      "explanation": "Tribunals can perform a supplemental role as courts of first instance, but they can never substitute the High Courts. All decisions of tribunals are appealable before a Division Bench of the respective High Court before approaching the Supreme Court."
    }
  ],
  "decision": "Exclusion clauses in Articles 323A(2)(d), 323B(3)(d), and Section 28 Administrative Tribunals Act struck down; tribunal orders made appealable to High Court Division Benches.",
  "holding": "The power of judicial review under Articles 226/227 and 32 cannot be ousted; tribunals act as courts of first instance whose decisions are subject to Division Bench scrutiny of High Courts.",
  "ratioDecidendi": "Judicial review under Articles 226, 227, and 32 is part of the basic structure of the Constitution; statutory exclusion of High Court jurisdiction is ultra vires.",
  "relatedCases": [
    {
      "caseName": "Kesavananda Bharati v. State of Kerala",
      "citation": "(1973) 4 SCC 225",
      "relationship": "Basic structure authority applied to judicial review",
      "judgmentId": "kesavananda-bharati-1973"
    },
    {
      "caseName": "Minerva Mills Ltd. v. Union of India",
      "citation": "(1980) 3 SCC 625",
      "relationship": "Affirmed judicial review as basic structure",
      "judgmentId": "minerva-mills-1980"
    }
  ],
  "examPoints": [
    "Held judicial review under Arts. 226, 227, and 32 is basic structure.",
    "Struck down Section 28 Administrative Tribunals Act, 1985.",
    "Established that all tribunal decisions must be challenged before a High Court Division Bench first.",
    "Tribunals cannot test the constitutional validity of their own parent statutes."
  ],
  "mcqs": [
    {
      "id": "l-chandra-kumar-mcq-1",
      "question": "Under L. Chandra Kumar v. Union of India (1997), decisions of the Central Administrative Tribunal (CAT) must first be challenged before:",
      "options": [
        "Directly before the Supreme Court under Article 136",
        "A Division Bench of the High Court under Articles 226/227",
        "The Union Ministry of Personnel",
        "A single judge of the High Court under Section 115 CPC"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench held that orders of tribunals are subject to the supervisory jurisdiction of a Division Bench of the respective High Court under Articles 226/227."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1997) 3 SCC 261",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const rupaAshokHurra2002: Judgment = {
  "id": "rupa-ashok-hurra-2002",
  "caseName": "Rupa Ashok Hurra v. Ashok Hurra",
  "shortName": "Rupa Ashok Hurra",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 2002,
  "citation": "(2002) 4 SCC 388",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "S.P. Bharucha, C.J.",
    "Syed Shah Mohammed Quadri, J.",
    "U.C. Banerjee, J.",
    "S.N. Variava, J.",
    "Shivaraj V. Patil, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Curative Petition",
    "Article 142",
    "Article 137",
    "Natural Justice",
    "Bias"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Article 142",
    "Curative Petition",
    "Natural Justice"
  ],
  "summary": "The 5-Judge Constitution Bench created the novel procedural remedy of \"Curative Petition\" to prevent abuse of the Supreme Court’s process and to cure a gross miscarriage of justice after a review petition under Article 137 has been dismissed. The Court held that under Article 142 inherent powers, a final judgment can be re-examined on narrow, rigorous grounds: violation of natural justice or apprehension of bias.",
  "facts": [
    "A matrimonial dispute between husband and wife reached the Supreme Court, where a decree of divorce by mutual consent was granted under Article 142 despite the wife having withdrawn her consent before the decree.",
    "Her review petition was dismissed.",
    "She moved a writ petition challenging the validity of the Supreme Court’s own final judgment, raising the fundamental question whether a judgment of the apex court can ever be challenged or cured after dismissal of review."
  ],
  "issues": [
    "Whether an aggrieved person is entitled to any relief against a final judgment/order of the Supreme Court after dismissal of a review petition.",
    "Under what conditions and procedural safeguards can the Supreme Court reconsider its final orders."
  ],
  "arguments": {
    "appellant": [
      "No judicial system is infallible; when a judgment causes manifest injustice in breach of natural justice, the Court must retain inherent power to correct its error under Article 142."
    ],
    "respondent": [
      "The principle of finality of litigation is paramount; reopening final apex court judgments would create endless uncertainty."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-142",
      "article": "Article 142",
      "title": "Enforcement of decrees and orders of Supreme Court and orders as to discovery, etc.",
      "subjectSlug": "constitution",
      "topicId": "judiciary"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-137",
      "article": "Article 137",
      "title": "Review of judgments or orders by the Supreme Court",
      "subjectSlug": "constitution",
      "topicId": "judiciary"
    }
  ],
  "reasoning": [
    {
      "heading": "Reconciling finality with correction of grave injustice",
      "explanation": "Quadri, J. held that while finality of judgment is essential, the duty to do complete justice under Article 142 is superior where there has been a manifest miscarriage of justice."
    },
    {
      "heading": "Grounds and procedural filters for Curative Petitions",
      "explanation": "Curative relief is restricted to: (1) violation of principles of natural justice where a party was not heard, or (2) where a judge failed to disclose bias. The petition must be certified by a Senior Advocate and circulated to the three senior-most judges and the judges who passed the original order."
    }
  ],
  "decision": "Curative petition mechanism formally instituted with strict procedural safeguards.",
  "holding": "The Supreme Court can entertain a curative petition after dismissal of review to prevent abuse of process or gross miscarriage of justice on grounds of natural justice violation or bias.",
  "ratioDecidendi": "Under its inherent powers and Article 142, the Supreme Court may reconsider a final judgment through a curative petition if there was a violation of natural justice or real apprehension of bias.",
  "relatedCases": [
    {
      "caseName": "Kesavananda Bharati v. State of Kerala",
      "citation": "(1973) 4 SCC 225",
      "relationship": "Apex authority on constitutional scope",
      "judgmentId": "kesavananda-bharati-1973"
    }
  ],
  "examPoints": [
    "Originated the \"Curative Petition\" in Indian jurisprudence.",
    "Grounds strictly limited to: breach of natural justice or judicial bias.",
    "Mandatory Senior Advocate certification and circulation to three senior-most judges.",
    "Exemplary costs if the petition is found frivolous."
  ],
  "mcqs": [
    {
      "id": "rupa-hurra-mcq-1",
      "question": "Which extraordinary remedy was invented by the Supreme Court in Rupa Ashok Hurra v. Ashok Hurra (2002)?",
      "options": [
        "Public Interest Litigation",
        "Curative Petition",
        "Writ of Quo Warranto",
        "Letters Patent Appeal"
      ],
      "correctIndex": 1,
      "explanation": "Rupa Ashok Hurra created the remedy of Curative Petition under Article 142 to cure gross miscarriages of justice after review dismissal."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2002) 4 SCC 388",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const daryao1961: Judgment = {
  "id": "daryao-1961",
  "caseName": "Daryao v. State of U.P.",
  "shortName": "Daryao",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional Law",
  "year": 1961,
  "citation": "AIR 1961 SC 1457",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "P.B. Gajendragadkar, J.",
    "A.K. Sarkar, J.",
    "K.N. Wanchoo, J.",
    "K.C. Das Gupta, J.",
    "N. Rajagopala Ayyangar, J."
  ],
  "subject": "Constitution",
  "topics": [
    "Res Judicata",
    "Writ Petitions",
    "Article 32 vs Article 226",
    "Section 11 CPC"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Constitution",
    "Res Judicata",
    "Article 32",
    "Article 226",
    "Section 11 CPC"
  ],
  "summary": "The Constitution Bench held that the general rule of res judicata applies to writ petitions: if a writ petition filed under Article 226 is considered and dismissed on the merits by the High Court with a speaking order, the petitioner cannot thereafter approach the Supreme Court under Article 32 on the identical cause of action; the sole remedy is by way of appeal.",
  "facts": [
    "Petitioners were tenants of certain agricultural lands in U.P. who were evicted by respondents.",
    "They filed a writ petition under Article 226 before the Allahabad High Court challenging the eviction orders as violative of their fundamental rights. The High Court heard arguments and dismissed the writ petition on merits.",
    "Instead of appealing against the High Court order, the petitioners filed a fresh petition under Article 32 in the Supreme Court on the identical facts and grounds."
  ],
  "issues": [
    "Whether the dismissal of a writ petition under Article 226 on merits by a High Court operates as res judicata barring a subsequent petition under Article 32 in the Supreme Court.",
    "Whether the rule of res judicata is a mere technical rule or a rule of public policy applicable to fundamental rights enforcement."
  ],
  "arguments": {
    "appellant": [
      "The right to move the Supreme Court under Article 32 is itself a guaranteed fundamental right and cannot be barred by statutory or common law res judicata."
    ],
    "respondent": [
      "The principle of res judicata is founded on public policy that there must be an end to litigation; a party cannot re-litigate the same matter between the same parties."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-32",
      "article": "Article 32",
      "title": "Remedies for enforcement of rights conferred by Part III",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-226",
      "article": "Article 226",
      "title": "Power of High Courts to issue certain writs",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    }
  ],
  "reasoning": [
    {
      "heading": "Res judicata as a principle of public policy",
      "explanation": "Gajendragadkar, J. held that the basis of res judicata is not a technical rule of procedure under Section 11 CPC, but an essential principle of public policy and finality: no one should be vexed twice for the same cause."
    },
    {
      "heading": "Application to Article 32 petitions",
      "explanation": "If a High Court examines a writ petition on merits and dismisses it after a contest, that decision binds the parties. The fundamental right to move the Supreme Court cannot be used as an indirect appellate mechanism ignoring the High Court’s binding decision."
    }
  ],
  "decision": "Writ petitions dismissed as barred by res judicata.",
  "holding": "Dismissal of a writ petition under Article 226 on merits after a contest bars a fresh writ petition under Article 32 on the same facts and grounds; proper remedy is appeal.",
  "ratioDecidendi": "The rule of res judicata applies to writ proceedings; a speaking dismissal on merits under Article 226 operates as a bar to a subsequent petition under Article 32 on the same grounds.",
  "relatedCases": [
    {
      "caseName": "State of U.P. v. Nawab Hussain",
      "citation": "(1977) 2 SCC 806",
      "relationship": "Extended Daryao to constructive res judicata",
      "judgmentId": "nawab-hussain-1977"
    }
  ],
  "examPoints": [
    "Res judicata applies to writ petitions under Art. 32.",
    "Does not apply if High Court dismissed petition in limine without speaking order or on grounds of laches/alternative remedy.",
    "Does not apply to petitions for writ of habeas corpus."
  ],
  "mcqs": [
    {
      "id": "daryao-mcq-1",
      "question": "Under Daryao v. State of U.P. (1961), does the dismissal of a writ petition on merits by the High Court under Article 226 bar an Article 32 petition?",
      "options": [
        "No, Article 32 is a fundamental right and never barred",
        "Yes, it operates as res judicata if decided on merits by a speaking order",
        "Only in tax matters",
        "Only if the Supreme Court grants permission"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench held that a dismissal on merits by a High Court under Article 226 operates as res judicata barring a subsequent Article 32 petition on the same cause."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1961 SC 1457 / (1962) 1 SCR 574",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const nawabHussain1977: Judgment = {
  "id": "nawab-hussain-1977",
  "caseName": "State of U.P. v. Nawab Hussain",
  "shortName": "Nawab Hussain",
  "court": "Supreme Court of India",
  "jurisdiction": "Civil Procedure / Constitutional Law",
  "year": 1977,
  "citation": "(1977) 2 SCC 806",
  "bench": "3-Judge Bench",
  "judges": [
    "P.N. Bhagwati, J.",
    "V.R. Krishna Iyer, J.",
    "S. Murtaza Fazal Ali, J."
  ],
  "subject": "CPC",
  "topics": [
    "Constructive Res Judicata",
    "Section 11 Explanation IV CPC",
    "Writ Petitions",
    "Civil Suit Bar"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "CPC",
    "Section 11",
    "Constructive Res Judicata",
    "Writ Petition"
  ],
  "summary": "The Supreme Court held that the doctrine of constructive res judicata embodied in Explanation IV to Section 11 CPC applies with full force to writ proceedings and subsequent civil suits. Where a dismissed police sub-inspector challenged his dismissal in a writ petition on the ground of denial of hearing and lost, he was barred from filing a subsequent civil suit claiming the dismissal was void because it was passed by an officer lower than the appointing authority, as that plea ought to have been raised in the writ petition.",
  "facts": [
    "Nawab Hussain, a sub-inspector of police, was dismissed from service by the Deputy Inspector-General of Police.",
    "He filed a writ petition under Article 226 before the Allahabad High Court challenging the dismissal solely on the ground that he was not afforded a reasonable opportunity of being heard. The High Court dismissed the writ petition.",
    "Thereafter, he instituted a regular civil suit challenging the dismissal on an entirely new ground: that he had been appointed by the Inspector-General of Police and the DIG was incompetent to dismiss him under Article 311(1)."
  ],
  "issues": [
    "Whether the doctrine of constructive res judicata under Section 11 Explanation IV CPC applies to a subsequent civil suit when the plea was not raised in an earlier writ petition.",
    "Whether the suit was barred because the plea of incompetency of the dismissing authority might and ought to have been made a ground of attack in the writ petition."
  ],
  "arguments": {
    "appellant": [
      "The plea of incompetence under Article 311(1) was available when the writ petition was filed; not raising it attracts constructive res judicata under Section 11 Explanation IV."
    ],
    "respondent": [
      "A writ petition is a summary proceeding, and omission to take a constitutional plea cannot forfeit the right to bring a substantive civil suit."
    ]
  },
  "provisions": [
    {
      "actId": "cpc",
      "actName": "Code of Civil Procedure, 1908",
      "provisionId": "cpc-s-11",
      "section": "Section 11 Explanation IV",
      "title": "Res Judicata (Constructive Res Judicata)",
      "subjectSlug": "cpc",
      "topicId": "s-11"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-311",
      "article": "Article 311(1)",
      "title": "Dismissal, removal or reduction in rank of persons employed in civil capacities",
      "subjectSlug": "constitution",
      "topicId": "civil-services-art-311"
    }
  ],
  "reasoning": [
    {
      "heading": "Principle of Constructive Res Judicata",
      "explanation": "Fazal Ali, J. held that the rule of constructive res judicata is based on the maxim interest reipublicae ut sit finis litium. Any matter which might and ought to have been made a ground of attack in the former proceeding is deemed to have been a matter directly and substantially in issue."
    },
    {
      "heading": "Bar on subsequent suit",
      "explanation": "Since the respondent knew who appointed him and the plea of lack of authority was readily available, he was bound to raise it in the writ petition. Having failed to do so, he was precluded from raising it in a subsequent suit."
    }
  ],
  "decision": "Civil suit held barred by constructive res judicata; dismissal order upheld.",
  "holding": "Constructive res judicata under Section 11 Explanation IV CPC applies to writ petitions; a plea that might and ought to have been raised in a writ petition cannot be raised in a later civil suit.",
  "ratioDecidendi": "A litigant who fails to raise a ground of attack available to him in a writ petition is barred by constructive res judicata from raising that ground in a subsequent civil suit on the same cause of action.",
  "relatedCases": [
    {
      "caseName": "Daryao v. State of U.P.",
      "citation": "AIR 1961 SC 1457",
      "relationship": "Precedent applying res judicata to writs",
      "judgmentId": "daryao-1961"
    }
  ],
  "examPoints": [
    "Benchmark decision on Section 11 Explanation IV CPC (Constructive Res Judicata).",
    "Confirmed constructive res judicata applies between writ petitions and civil suits.",
    "\"Might and ought\" test strictly enforced."
  ],
  "mcqs": [
    {
      "id": "nawab-hussain-mcq-1",
      "question": "In State of U.P. v. Nawab Hussain (1977), which provision of the CPC was applied to bar a civil suit after a writ petition was dismissed?",
      "options": [
        "Section 10 (Res Sub Judice)",
        "Section 11, Explanation IV (Constructive Res Judicata)",
        "Order 2, Rule 2",
        "Section 151 (Inherent Powers)"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court applied Section 11 Explanation IV CPC (Constructive Res Judicata), holding that a plea that might and ought to have been raised in a writ petition cannot be raised in a later suit."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1977) 2 SCC 806",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const manoharLalChopra1962: Judgment = {
  "id": "manohar-lal-chopra-1962",
  "caseName": "Manohar Lal Chopra v. Rai Bahadur Rao Raja Seth Hiralal",
  "shortName": "Manohar Lal Chopra",
  "court": "Supreme Court of India",
  "jurisdiction": "Civil Procedure Code",
  "year": 1962,
  "citation": "AIR 1962 SC 527",
  "bench": "4-Judge Bench",
  "judges": [
    "K.N. Wanchoo, J.",
    "K.C. Das Gupta, J.",
    "J.C. Shah, J.",
    "Raghubar Dayal, J."
  ],
  "subject": "CPC",
  "topics": [
    "Inherent Powers",
    "Section 151 CPC",
    "Temporary Injunctions",
    "Order 39 Rules 1 and 2"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "CPC",
    "Section 151",
    "Order 39",
    "Inherent Powers",
    "Injunction"
  ],
  "summary": "The 4-Judge Bench of the Supreme Court held that civil courts have inherent power under Section 151 CPC to issue temporary injunctions in cases and circumstances not specifically covered by Order 39 Rules 1 and 2, provided such exercise of power is necessary in the interest of justice and does not conflict with any express prohibition in the Code.",
  "facts": [
    "Two business partners entered into an agreement regarding mineral factories in Asansol and Indore.",
    "One partner filed a suit in Asansol for dissolution of partnership and rendition of accounts, while the other filed a suit in Indore for recovering a sum of money.",
    "The Asansol plaintiff applied for an injunction under Section 151 CPC to restrain the defendant from proceeding with his prior Indore suit.",
    "The High Court held that courts have no inherent power under Section 151 to grant injunctions outside the specific terms of Order 39 Rules 1 and 2."
  ],
  "issues": [
    "Whether the civil court has inherent power under Section 151 CPC to grant a temporary injunction in situations not falling within Order 39 Rules 1 and 2.",
    "Whether Section 151 creates new powers or merely recognizes the pre-existing inherent powers of courts."
  ],
  "arguments": {
    "appellant": [
      "Order 39 is not exhaustive of the court’s power to grant injunctions; Section 151 preserves the inherent jurisdiction to prevent abuse of process and do complete justice."
    ],
    "respondent": [
      "Where the Code makes express provision for injunctions under Order 39, inherent powers under Section 151 cannot be invoked to enlarge statutory grounds."
    ]
  },
  "provisions": [
    {
      "actId": "cpc",
      "actName": "Code of Civil Procedure, 1908",
      "provisionId": "cpc-s-151",
      "section": "Section 151",
      "title": "Saving of inherent powers of Court",
      "subjectSlug": "cpc",
      "topicId": "s-151"
    },
    {
      "actId": "cpc",
      "actName": "Code of Civil Procedure, 1908",
      "provisionId": "cpc-o-39",
      "section": "Order 39 Rules 1 & 2",
      "title": "Temporary injunctions and interlocutory orders",
      "subjectSlug": "cpc",
      "topicId": "s-151"
    }
  ],
  "reasoning": [
    {
      "heading": "Nature of Section 151 CPC",
      "explanation": "Raghubar Dayal, J. for the majority held that Section 151 does not confer any new power on courts, but merely saves and recognizes the inherent power which every court inherently possesses ex debito justitiae to do that real and substantial justice for the administration of which alone it exists."
    },
    {
      "heading": "Order 39 is not exhaustive",
      "explanation": "The provisions of the Code are not exhaustive of the power of the court. A court can issue an interim injunction in circumstances outside Order 39 Rules 1 and 2 if the court is satisfied that the ends of justice require it."
    }
  ],
  "decision": "High Court judgment set aside; confirmed that civil courts possess inherent power under Section 151 to issue injunctions outside Order 39.",
  "holding": "Civil courts have inherent jurisdiction under Section 151 CPC to grant temporary injunctions in circumstances not covered by Order 39 Rules 1 and 2 to meet the ends of justice.",
  "ratioDecidendi": "The provisions of Order 39 CPC are not exhaustive, and the civil court can grant a temporary injunction in exercise of its inherent powers under Section 151 CPC where the ends of justice so warrant.",
  "relatedCases": [],
  "examPoints": [
    "Leading judgment establishing that Order 39 CPC is not exhaustive.",
    "Inherent powers under Section 151 CPC can be used to grant interim injunctions.",
    "Restriction: Section 151 cannot be used if in direct conflict with an express statutory prohibition."
  ],
  "mcqs": [
    {
      "id": "manohar-lal-mcq-1",
      "question": "According to Manohar Lal Chopra v. Seth Hiralal (1962), can a civil court grant a temporary injunction in cases not covered by Order 39 CPC?",
      "options": [
        "No, Order 39 is completely exhaustive",
        "Yes, by exercising its inherent powers under Section 151 CPC",
        "Only if the suit is transferred to the High Court",
        "Only with the written consent of both parties"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court held that Order 39 is not exhaustive and civil courts can issue temporary injunctions under Section 151 CPC to meet the ends of justice."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1962 SC 527 / 1962 Supp (1) SCR 450",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const shahBano1985: Judgment = {
  "id": "shah-bano-1985",
  "caseName": "Mohd. Ahmed Khan v. Shah Bano Begum",
  "shortName": "Shah Bano",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal / Family Law",
  "year": 1985,
  "citation": "(1985) 2 SCC 556",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "Y.V. Chandrachud, C.J.",
    "D.A. Desai, J.",
    "O. Chinnappa Reddy, J.",
    "E.S. Venkataramiah, J.",
    "R.B. Misra, J."
  ],
  "subject": "Family",
  "topics": [
    "Maintenance",
    "Section 125 CrPC",
    "Muslim Women Rights",
    "Uniform Civil Code",
    "Article 44"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Family Law",
    "CrPC 125",
    "BNSS 144",
    "Maintenance",
    "Muslim Law"
  ],
  "summary": "The 5-Judge Constitution Bench held that Section 125 CrPC (now Section 144 BNSS) is a secular, public order measure that applies to all Indian citizens regardless of religion. The Court ruled that a divorced Muslim woman who is unable to maintain herself is entitled to maintenance from her former husband beyond the iddat period until she remarries, harmonizing Section 125 with the Holy Quran (Surah Baqarah, Ayats 241-242).",
  "facts": [
    "Shah Bano, a 62-year-old Muslim woman with five children, was driven out of her matrimonial home by her husband, an advocate.",
    "She filed an application for maintenance under Section 125 CrPC. In defense, the husband pronounced triple talaq, paid her dower (mahr) of Rs. 3,000, and deposited maintenance for the three months of the iddat period.",
    "The husband contended that under Muslim personal law, a husband’s liability to maintain a divorced wife ceases completely upon the expiration of the iddat period."
  ],
  "issues": [
    "Whether Section 125 CrPC applies to Muslims and overrides Muslim personal law.",
    "Whether payment of mahr and maintenance for the iddat period absolves a Muslim husband from liability under Section 125(3)(b) CrPC."
  ],
  "arguments": {
    "appellant": [
      "Under Muslim personal law, a husband is not obliged to maintain a divorced wife beyond iddat; applying Section 125 violates Muslim personal law.",
      "Mahr is a sum payable on divorce within the meaning of Section 127(3)(b) CrPC."
    ],
    "respondent": [
      "Section 125 CrPC is a secular social welfare enactment intended to prevent vagrancy and destitution of discarded wives, applicable to all religions."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-125",
      "section": "Section 125 (BNSS s. 144)",
      "title": "Order for maintenance of wives, children and parents",
      "subjectSlug": "family",
      "topicId": "hma-s-13"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-44",
      "article": "Article 44",
      "title": "Uniform civil code for the citizens",
      "subjectSlug": "constitution",
      "topicId": "dpsp"
    }
  ],
  "reasoning": [
    {
      "heading": "Secular and overarching nature of Section 125 CrPC",
      "explanation": "Chandrachud, C.J. held that Section 125 is truly secular and egalitarian. It cuts across religion, caste, and creed. A divorced wife who is unable to maintain herself has a statutory right to maintenance which cannot be defeated by personal law."
    },
    {
      "heading": "Mahr is not maintenance",
      "explanation": "The Court held that Mahr is an obligation imposed on the husband as a mark of respect for the wife and is not a sum payable on divorce under Section 127(3)(b). Ayats 241 and 242 of the Quran impose an obligation on righteous men to provide reasonable maintenance for divorced women."
    }
  ],
  "decision": "Husband directed to pay maintenance under Section 125; appeal dismissed.",
  "holding": "Section 125 CrPC applies to all citizens irrespective of religion; a divorced Muslim wife unable to maintain herself is entitled to maintenance beyond iddat.",
  "ratioDecidendi": "The statutory right to maintenance under Section 125 CrPC is independent of personal laws and extends to a divorced Muslim woman who has no independent means of livelihood.",
  "relatedCases": [
    {
      "caseName": "Danial Latifi v. Union of India",
      "citation": "(2001) 7 SCC 740",
      "relationship": "Interpreted 1986 Act enacted to overcome Shah Bano",
      "judgmentId": "danial-latifi-2001"
    },
    {
      "caseName": "Shayara Bano v. Union of India",
      "citation": "(2017) 9 SCC 1",
      "relationship": "Struck down instant triple talaq",
      "judgmentId": "shayara-bano-2017"
    }
  ],
  "examPoints": [
    "Secular character of Section 125 CrPC / Section 144 BNSS.",
    "Maintenance extends beyond the iddat period for divorced Muslim wives.",
    "Mahr is not a sum paid \"on divorce\" within Section 127(3)(b).",
    "Prompted the enactment of the Muslim Women (Protection of Rights on Divorce) Act, 1986."
  ],
  "mcqs": [
    {
      "id": "shah-bano-mcq-1",
      "question": "In Mohd. Ahmed Khan v. Shah Bano Begum (1985), the Supreme Court ruled that Section 125 CrPC:",
      "options": [
        "Applies only to Hindus and Christians",
        "Is a secular provision applying to all citizens regardless of religion, entitling divorced Muslim wives to maintenance",
        "Ceases to apply the moment mahr is paid",
        "Violates Article 25 of the Constitution"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench held that Section 125 CrPC is a secular provision that applies to all citizens regardless of religion."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1985) 2 SCC 556",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const danialLatifi2001: Judgment = {
  "id": "danial-latifi-2001",
  "caseName": "Danial Latifi v. Union of India",
  "shortName": "Danial Latifi",
  "court": "Supreme Court of India",
  "jurisdiction": "Constitutional / Family Law",
  "year": 2001,
  "citation": "(2001) 7 SCC 740",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "G.B. Pattanaik, J.",
    "S. Rajendra Babu, J.",
    "D.P. Mohapatra, J.",
    "Doraiswamy Raju, J.",
    "Shivaraj V. Patil, J."
  ],
  "subject": "Family",
  "topics": [
    "Muslim Women Act 1986",
    "Section 3(1)(a)",
    "Reasonable and Fair Provision",
    "Iddat Period"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Family Law",
    "Muslim Law",
    "Maintenance",
    "Article 21",
    "Danial Latifi"
  ],
  "summary": "The 5-Judge Constitution Bench upheld the constitutional validity of the Muslim Women (Protection of Rights on Divorce) Act, 1986. Interpreting Section 3(1)(a) harmoniously with Articles 14 and 21, the Court held that the former husband’s obligation to make a \"reasonable and fair provision and maintenance\" is not confined only to the iddat period, but must be made and paid within the iddat period to secure the wife’s entire future life until she remarries.",
  "facts": [
    "To circumvent the Shah Bano judgment, Parliament enacted the Muslim Women (Protection of Rights on Divorce) Act, 1986, which limited maintenance under Section 3(1)(a) to the iddat period.",
    "Senior advocate Danial Latifi and women’s rights organizations challenged the Act as discriminatory and violative of Articles 14, 15, and 21, contending that it deprived divorced Muslim women of the basic protections of Section 125 CrPC available to women of all other religions."
  ],
  "issues": [
    "Whether the Muslim Women Act, 1986 is constitutionally valid under Articles 14 and 21.",
    "Whether the liability of a Muslim husband to maintain a divorced wife under Section 3(1)(a) is limited only to the duration of the iddat period."
  ],
  "arguments": {
    "appellant": [
      "Denying Muslim divorced women the secular remedy of Section 125 CrPC creates an unconstitutional classification based solely on religion under Articles 14 and 15.",
      "Leaving destitute women to rely on Wakf Boards deprives them of their right to live with dignity under Article 21."
    ],
    "respondent": [
      "Parliament has legislative competence to codify personal laws, and the Act was a valid exercise to protect minority religious sensitivities."
    ]
  },
  "provisions": [
    {
      "actId": "muslim-women-act-1986",
      "actName": "Muslim Women (Protection of Rights on Divorce) Act, 1986",
      "provisionId": "mw-s-3",
      "section": "Section 3(1)(a)",
      "title": "Mahr or other properties of Muslim woman to be given to her at the time of divorce",
      "subjectSlug": "family",
      "topicId": "hma-s-13"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Creative harmonious construction of Section 3(1)(a)",
      "explanation": "Rajendra Babu, J. held that the phrase \"reasonable and fair provision and maintenance to be made and paid within the iddat period\" does not mean provision only FOR the iddat period. The husband must contemplate the entire future needs of the wife and arrange a lump sum or periodic provision made within the iddat period for her entire lifetime."
    },
    {
      "heading": "Preserving constitutional validity under Article 14 and 21",
      "explanation": "By interpreting the statute to mean that provision for the future life of the divorced wife must be finalized within the iddat period, the Court eliminated discrimination, aligning the statute with Articles 14 and 21."
    }
  ],
  "decision": "Constitutional validity of the 1986 Act upheld through judicial interpretation.",
  "holding": "Under Section 3(1)(a) of the 1986 Act, a Muslim husband must make a reasonable and fair provision for the entire future livelihood of his divorced wife, which must be executed within the iddat period.",
  "ratioDecidendi": "The liability of a Muslim husband under Section 3(1)(a) of the 1986 Act is not limited to providing maintenance for the iddat period, but requires him to make a fair provision within the iddat period for her livelihood for the rest of her life.",
  "relatedCases": [
    {
      "caseName": "Mohd. Ahmed Khan v. Shah Bano Begum",
      "citation": "(1985) 2 SCC 556",
      "relationship": "Original catalyst for the 1986 Act",
      "judgmentId": "shah-bano-1985"
    },
    {
      "caseName": "Shayara Bano v. Union of India",
      "citation": "(2017) 9 SCC 1",
      "relationship": "Subsequent landmark on Muslim women rights",
      "judgmentId": "shayara-bano-2017"
    }
  ],
  "examPoints": [
    "Upheld the validity of the Muslim Women Act, 1986.",
    "Distinction between \"provision\" and \"maintenance\".",
    "Held provision must be MADE within iddat period, but extends for the wife’s LIFETIME.",
    "Masterpiece of harmonious constitutional interpretation."
  ],
  "mcqs": [
    {
      "id": "danial-latifi-mcq-1",
      "question": "In Danial Latifi v. Union of India (2001), the Supreme Court interpreted Section 3(1)(a) of the 1986 Act to mean that the husband’s liability:",
      "options": [
        "Ends completely on the last day of the iddat period",
        "Requires making a reasonable and fair provision within iddat that covers the divorced wife’s entire future livelihood",
        "Is shifted entirely to the State Wakf Board from day one",
        "Is non-existent if the marriage lasted less than 5 years"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that the husband must make a reasonable and fair provision within the iddat period that extends to the entire future life of the divorced wife."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2001) 7 SCC 740",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const sarlaMudgal1995: Judgment = {
  "id": "sarla-mudgal-1995",
  "caseName": "Sarla Mudgal v. Union of India",
  "shortName": "Sarla Mudgal",
  "court": "Supreme Court of India",
  "jurisdiction": "Family / Criminal Law",
  "year": 1995,
  "citation": "(1995) 3 SCC 635",
  "bench": "2-Judge Bench",
  "judges": [
    "Kuldip Singh, J.",
    "R.M. Sahai, J."
  ],
  "subject": "Family",
  "topics": [
    "Bigamy",
    "Conversion to Islam",
    "Section 494 IPC",
    "Uniform Civil Code",
    "Article 44"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Family Law",
    "Bigamy",
    "Section 494 IPC",
    "BNS 82",
    "Conversion"
  ],
  "summary": "The Supreme Court held that a Hindu marriage solemnized under the Hindu Marriage Act, 1955 can be dissolved only on the grounds specified under that Act. A Hindu husband cannot circumvent the monogamy rule by converting to Islam and contracting a second marriage; such second marriage is void under Section 11 of HMA and Section 494 IPC (now Section 82 BNS), and the converting husband is guilty of bigamy.",
  "facts": [
    "Jitender Mathur, married to Meena Mathur under Hindu rites, converted to Islam, took the name Jamil Ahmed, and married another woman, Sunita (Fatima), without divorcing his first wife.",
    "Several similar petitions were filed by Hindu wives whose husbands converted to Islam solely for the purpose of contracting a second marriage to evade the statutory ban on bigamy."
  ],
  "issues": [
    "Whether a Hindu husband, married under Hindu law, can solemnize a second marriage by converting to Islam without dissolving his first marriage.",
    "Whether the converting husband is liable for bigamy under Section 494 IPC."
  ],
  "arguments": {
    "appellant": [
      "Conversion to Islam does not automatically dissolve an existing Hindu marriage.",
      "Feigned conversion to defeat personal law obligations is a fraud on the law and bigamous under Section 494 IPC."
    ],
    "respondent": [
      "Muslim personal law permits a man to have up to four wives; upon converting to Islam, the husband is governed exclusively by Muslim law."
    ]
  },
  "provisions": [
    {
      "actId": "ipc",
      "actName": "Indian Penal Code, 1860",
      "provisionId": "ipc-s-494",
      "section": "Section 494 (BNS s. 82)",
      "title": "Marrying again during lifetime of husband or wife",
      "subjectSlug": "bns",
      "topicId": "s-103"
    },
    {
      "actId": "hma",
      "actName": "Hindu Marriage Act, 1955",
      "provisionId": "hma-s-11",
      "section": "Section 11 & Section 13(1)(ii)",
      "title": "Void marriages and grounds for divorce (Conversion)",
      "subjectSlug": "family",
      "topicId": "hma-s-11"
    }
  ],
  "reasoning": [
    {
      "heading": "Survival of Hindu marriage post-conversion",
      "explanation": "Kuldip Singh, J. held that a marriage celebrated under Hindu law continues to subsist notwithstanding conversion. Hindu law does not recognize apostasy as an automatic dissolution of marriage; it is merely a ground for the other spouse to seek divorce under Section 13(1)(ii)."
    },
    {
      "heading": "Bigamy under Section 494 IPC",
      "explanation": "Since the first marriage continues to subsist in the eyes of law, contracting a second marriage during the lifetime of the first spouse is void under Section 494 IPC, and the converting husband is punishable for bigamy."
    }
  ],
  "decision": "Second marriage declared void; husband held liable for bigamy under Section 494 IPC; urged Union Government to examine Uniform Civil Code under Article 44.",
  "holding": "A Hindu marriage can be dissolved only under the Hindu Marriage Act; converting to Islam does not dissolve the first marriage, and a second marriage is void and punishable as bigamy under Section 494 IPC.",
  "ratioDecidendi": "Conversion of a Hindu husband to Islam does not automatically dissolve his prior Hindu marriage; any second marriage contracted during the subsistence of the first is bigamous and void under Section 494 IPC.",
  "relatedCases": [
    {
      "caseName": "Lily Thomas v. Union of India",
      "citation": "(2013) 7 SCC 653",
      "relationship": "Reaffirmed Sarla Mudgal on bigamy and conversion",
      "judgmentId": "lily-thomas-2013"
    }
  ],
  "examPoints": [
    "Conversion to Islam does not dissolve an existing Hindu marriage.",
    "Second marriage during subsistence of first marriage is void under Section 494 IPC / Section 82 BNS.",
    "Reiterated the need for a Uniform Civil Code under Article 44.",
    "Affirmed by a larger bench in Lily Thomas (2000)."
  ],
  "mcqs": [
    {
      "id": "sarla-mudgal-mcq-1",
      "question": "Under Sarla Mudgal v. Union of India (1995), what is the legal status of a second marriage contracted by a Hindu husband after converting to Islam without divorcing his first wife?",
      "options": [
        "Completely valid under Muslim personal law",
        "Void and punishable as bigamy under Section 494 IPC",
        "Voidable at the option of the second wife",
        "Valid if permitted by the Kazi"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court held that the first marriage continues to subsist, rendering the second marriage void and punishable as bigamy under Section 494 IPC."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1995) 3 SCC 635",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const githaHariharan1999: Judgment = {
  "id": "githa-hariharan-1999",
  "caseName": "Githa Hariharan v. Reserve Bank of India",
  "shortName": "Githa Hariharan",
  "court": "Supreme Court of India",
  "jurisdiction": "Family / Constitutional Law",
  "year": 1999,
  "citation": "(1999) 2 SCC 228",
  "bench": "3-Judge Bench",
  "judges": [
    "A.S. Anand, C.J.",
    "M. Srinivasan, J.",
    "U.C. Banerjee, J."
  ],
  "subject": "Family",
  "topics": [
    "Natural Guardian",
    "Section 6(a) HMGA",
    "Gender Equality",
    "Welfare of Minor",
    "Article 14"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Family Law",
    "Guardianship",
    "Gender Equality",
    "Section 6(a) HMGA"
  ],
  "summary": "The 3-Judge Bench interpreted Section 6(a) of the Hindu Minority and Guardianship Act, 1956—which provided that the natural guardian of a Hindu minor is the father and \"after him\" the mother—holding that the phrase \"after him\" does not mean after the death of the father, but means \"in the absence of the father\" (temporarily or permanently). This ensured equal natural guardianship rights for mothers in conformity with Articles 14 and 15.",
  "facts": [
    "Githa Hariharan applied to the Reserve Bank of India for investing in Relief Bonds in the name of her minor son, signing the application as his natural guardian.",
    "The RBI returned the application, stating that under Section 6(a) HMGA, the father is the natural guardian, and the mother can act only \"after him\" (i.e. after his death) or with his authorization.",
    "She challenged Section 6(a) under Article 32 as unconstitutional gender discrimination."
  ],
  "issues": [
    "Whether Section 6(a) HMGA violates Articles 14 and 15 by relegating the mother to a secondary position behind the father.",
    "How the expression \"after him\" in Section 6(a) must be interpreted in light of the welfare of the minor principle."
  ],
  "arguments": {
    "appellant": [
      "Treating the mother as an inferior guardian violates gender equality guaranteed by Articles 14 and 15.",
      "Welfare of the child is paramount, and a caring mother cannot be disabled from acting as natural guardian."
    ],
    "respondent": [
      "Section 6(a) codified traditional patriarchal Hindu law to maintain certainty in property transactions."
    ]
  },
  "provisions": [
    {
      "actId": "hmga",
      "actName": "Hindu Minority and Guardianship Act, 1956",
      "provisionId": "hmga-s-6",
      "section": "Section 6(a)",
      "title": "Natural guardians of a Hindu minor",
      "subjectSlug": "family",
      "topicId": "hma-s-13"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-14",
      "article": "Article 14 and 15",
      "title": "Equality before law and prohibition of discrimination",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Harmonious interpretation of \"after him\"",
      "explanation": "Anand, C.J. and Banerjee, J. held that \"after him\" cannot be interpreted rigidly to mean after the death of the father. To do so would render the statute unconstitutional under Articles 14 and 15 and defeat the welfare of the child."
    },
    {
      "heading": "\"In the absence of\" includes physical, mental, or practical absence",
      "explanation": "The Court interpreted \"after him\" to mean \"in the absence of\"—whether by reason of indifference, physical separation, illness, or agreement. Where the father is absent from the care of the child, the mother is the full natural guardian."
    }
  ],
  "decision": "Section 6(a) read down; RBI directed to accept the mother’s application as natural guardian.",
  "holding": "The phrase \"after him\" in Section 6(a) HMGA means \"in the absence of\"; the mother has equal status as a natural guardian when the father is absent or indifferent.",
  "ratioDecidendi": "Under Section 6(a) of the Hindu Minority and Guardianship Act, 1956, \"after him\" must be read as \"in the absence of\" the father, entitling the mother to act as natural guardian of the minor.",
  "relatedCases": [],
  "examPoints": [
    "Read down Section 6(a) Hindu Minority and Guardianship Act, 1956.",
    "Interpreted \"after him\" to mean \"in the absence of\" father, not after his death.",
    "Paramountcy of the \"welfare of the minor\" over mechanical patriarchal statutory text."
  ],
  "mcqs": [
    {
      "id": "githa-hariharan-mcq-1",
      "question": "In Githa Hariharan v. Reserve Bank of India (1999), the Supreme Court interpreted the words \"after him\" in Section 6(a) of HMGA to mean:",
      "options": [
        "Only after the father dies",
        "Only after the father remarries",
        "In the absence of the father (temporarily, permanently, or by indifference)",
        "Only after obtaining permission from the District Judge"
      ],
      "correctIndex": 2,
      "explanation": "The Supreme Court read down \"after him\" to mean \"in the absence of\" the father, enabling mothers to act as full natural guardians."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1999) 2 SCC 228",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const dastane1975: Judgment = {
  "id": "dastane-1975",
  "caseName": "Dr. N.G. Dastane v. Mrs. S. Dastane",
  "shortName": "Dastane v. Dastane",
  "court": "Supreme Court of India",
  "jurisdiction": "Family Law",
  "year": 1975,
  "citation": "(1975) 2 SCC 326",
  "bench": "3-Judge Bench",
  "judges": [
    "Y.V. Chandrachud, J.",
    "P.K. Goswami, J.",
    "R.S. Sarkaria, J."
  ],
  "subject": "Family",
  "topics": [
    "Cruelty",
    "Section 13(1)(ia) HMA",
    "Standard of Proof",
    "Condonation",
    "Section 23(1)(b)"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Family Law",
    "HMA",
    "Cruelty",
    "Condonation",
    "Standard of Proof"
  ],
  "summary": "The Supreme Court delivered the authoritative textbook authority on cruelty and condonation in matrimonial law: holding that the standard of proof in matrimonial disputes is preponderance of probabilities (not proof beyond reasonable doubt); cruelty must be assessed from the subjective impact on the complainant; and voluntary resumption of sexual cohabitation with full knowledge of prior cruelty constitutes condonation under Section 23(1)(b) HMA.",
  "facts": [
    "Dr. Dastane petitioned for judicial separation (later divorce) against his wife on grounds of cruelty under the Hindu Marriage Act, 1955.",
    "He alleged a series of violent temper tantrums, insults, abusing his parents, tearing clothes, and locking him out.",
    "The evidence showed that after these alleged cruel acts, the parties resumed normal marital life, shared the same bed, and a second child was conceived."
  ],
  "issues": [
    "What is the standard of proof required to establish cruelty under the Hindu Marriage Act, 1955.",
    "What constitutes cruelty in matrimonial law (objective vs subjective standard).",
    "Whether the husband’s resumption of marital cohabitation amounted to condonation under Section 23(1)(b) of the Act."
  ],
  "arguments": {
    "appellant": [
      "Cruelty was proved beyond reasonable doubt by written letters and testimony of mistreatment.",
      "Resumption of marital cohabitation was merely an attempt at reconciliation and does not condone persistent cruelty."
    ],
    "respondent": [
      "The matrimonial standard of proof is civil preponderance of probabilities.",
      "Sharing bed and cohabitation leading to conception of a child is complete condonation in law under Section 23(1)(b)."
    ]
  },
  "provisions": [
    {
      "actId": "hma",
      "actName": "Hindu Marriage Act, 1955",
      "provisionId": "hma-s-13",
      "section": "Section 13(1)(ia) & Section 10(1)(b)",
      "title": "Cruelty as a ground for divorce / judicial separation",
      "subjectSlug": "family",
      "topicId": "hma-s-13"
    },
    {
      "actId": "hma",
      "actName": "Hindu Marriage Act, 1955",
      "provisionId": "hma-s-23",
      "section": "Section 23(1)(b)",
      "title": "Decree in proceedings (Condonation of cruelty)",
      "subjectSlug": "family",
      "topicId": "hma-s-13"
    }
  ],
  "reasoning": [
    {
      "heading": "Standard of proof in matrimonial proceedings",
      "explanation": "Chandrachud, J. settled that matrimonial proceedings are civil in nature; the standard of proof is preponderance of probabilities, not proof beyond reasonable doubt. The court looks for a reasonable degree of probability that cruelty occurred."
    },
    {
      "heading": "Evaluation of Cruelty and Condonation",
      "explanation": "Cruelty must be evaluated in light of the social status, upbringing, and sensitivity of the parties. However, condonation means forgiveness of the matrimonial offence followed by restoration of marital life. Resuming sexual relations with knowledge of past cruelty condones the offence under Section 23(1)(b)."
    }
  ],
  "decision": "Acts of cruelty held to have been condoned by the husband; petition for judicial separation dismissed.",
  "holding": "Standard of proof in matrimonial offences is preponderance of probabilities; acts of cruelty are wiped out if voluntarily condoned by resumption of cohabitation.",
  "ratioDecidendi": "In Hindu matrimonial law, cruelty is established on a preponderance of probabilities, but voluntary resumption of sexual intercourse with knowledge of prior cruelty operates as condonation under Section 23(1)(b) HMA.",
  "relatedCases": [],
  "examPoints": [
    "Locus classicus on matrimonial cruelty in Indian law.",
    "Standard of proof is preponderance of probabilities (not criminal standard).",
    "Subjective test of cruelty: impact on the petitioner’s mind.",
    "Condonation under Section 23(1)(b) completely bars relief for past condoned cruelty."
  ],
  "mcqs": [
    {
      "id": "dastane-mcq-1",
      "question": "Under Dr. N.G. Dastane v. Mrs. S. Dastane (1975), what is the standard of proof required to establish cruelty in matrimonial proceedings?",
      "options": [
        "Proof beyond reasonable doubt",
        "Preponderance of probabilities",
        "Absolute mathematical certainty",
        "Prima facie evidence only"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court clarified that matrimonial proceedings are civil matters where cruelty must be established by a preponderance of probabilities."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1975) 2 SCC 326",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const babuSingh1978: Judgment = {
  "id": "babu-singh-1978",
  "caseName": "Babu Singh v. State of U.P.",
  "shortName": "Babu Singh",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law",
  "year": 1978,
  "citation": "(1978) 1 SCC 579",
  "bench": "3-Judge Bench",
  "judges": [
    "V.R. Krishna Iyer, J.",
    "D.A. Desai, J.",
    "P.S. Kailasam, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Bail Jurisprudence",
    "Section 439 CrPC",
    "Article 21",
    "Successive Bail",
    "Personal Liberty"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "CrPC 439",
    "BNSS 483",
    "Bail",
    "Personal Liberty"
  ],
  "summary": "The Supreme Court crystallized the humanistic ethos of Indian bail jurisprudence, declaring that \"bail is the rule, jail is the exception.\" Linking personal liberty under Article 21 to pre-trial detention, the Court held that prolonged pre-trial incarceration without speedy trial is punitive and unjust, and an earlier dismissal of a bail application does not bar a successive bail petition when circumstances change or trial is protracted.",
  "facts": [
    "Appellants were tried for murder and acquitted by the Sessions Court, but convicted by the High Court in appeal and sentenced to life imprisonment.",
    "Their initial bail application was dismissed by the Supreme Court.",
    "They filed a second bail application on grounds of prolonged incarceration, non-availability of paper books, and inordinate delay in hearing the final appeal."
  ],
  "issues": [
    "Whether a second bail application is maintainable after rejection of the first bail petition.",
    "What principles should govern the grant of bail pending appeal or trial under Article 21 and Section 439 CrPC."
  ],
  "arguments": {
    "appellant": [
      "Prolonged detention during appeal when paper books are not even prepared violates the right to speedy justice under Article 21.",
      "Refusal of bail earlier does not operate as res judicata in criminal bail matters."
    ],
    "respondent": [
      "The appellants were convicted of murder by the High Court and a prior rejection of bail should not be reopened."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-439",
      "section": "Section 439 (BNSS s. 483)",
      "title": "Special powers of High Court or Court of Session regarding bail",
      "subjectSlug": "bnss",
      "topicId": "s-483"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21",
      "title": "Protection of life and personal liberty",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Bail is the rule, jail is the exception",
      "explanation": "Krishna Iyer, J. held that personal liberty is deprived when bail is refused; hence, judicial discretion must lean towards granting bail unless there is a grave likelihood of the accused fleeing justice or tampering with witnesses."
    },
    {
      "heading": "No res judicata in bail applications",
      "explanation": "An order refusing bail does not foreclose a second application. The passage of time, change of circumstances, and protracted trial or appeal delay justify reconsideration."
    }
  ],
  "decision": "Bail granted to the appellants on appropriate terms.",
  "holding": "Bail is the rule and jail is the exception under Article 21; an earlier refusal of bail does not bar a successive bail application when trial or appeal is delayed.",
  "ratioDecidendi": "The principle of res judicata does not apply to successive bail applications; prolonged pre-trial or appellate detention violates personal liberty under Article 21.",
  "relatedCases": [
    {
      "caseName": "Moti Ram v. State of M.P.",
      "citation": "(1978) 4 SCC 47",
      "relationship": "Companion ruling on indigent bail",
      "judgmentId": "moti-ram-1978"
    },
    {
      "caseName": "Satender Kumar Antil v. CBI",
      "citation": "(2022) 10 SCC 51",
      "relationship": "Modern restatement of Babu Singh bail principles",
      "judgmentId": "satender-kumar-antil-2022"
    }
  ],
  "examPoints": [
    "Formulated the maxim \"bail is the rule, jail is the exception\".",
    "Established maintainability of successive bail applications.",
    "Linked bail jurisprudence directly to Article 21 speedy justice."
  ],
  "mcqs": [
    {
      "id": "babu-singh-mcq-1",
      "question": "In Babu Singh v. State of U.P. (1978), the Supreme Court laid down that:",
      "options": [
        "A second bail application is strictly barred by res judicata",
        "Bail is the rule and jail is the exception, and successive bail applications are maintainable on changed circumstances",
        "Murder convicts can never be granted bail pending appeal",
        "Only the High Court can grant bail in murder cases"
      ],
      "correctIndex": 1,
      "explanation": "Babu Singh established that bail is the rule and jail is the exception, holding that an earlier rejection does not bar a successive bail petition."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1978) 1 SCC 579",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const motiRam1978: Judgment = {
  "id": "moti-ram-1978",
  "caseName": "Moti Ram v. State of M.P.",
  "shortName": "Moti Ram",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Procedure",
  "year": 1978,
  "citation": "(1978) 4 SCC 47",
  "bench": "2-Judge Bench",
  "judges": [
    "V.R. Krishna Iyer, J.",
    "D.A. Desai, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Bail Reform",
    "Personal Bond",
    "Indigent Accused",
    "Surety Geography",
    "Article 21"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "CrPC 436",
    "BNSS 478",
    "Bail",
    "Personal Bond",
    "Indigent"
  ],
  "summary": "The Supreme Court reformed bail administration for poor and indigent undertrials, holding that magistrates and judges cannot demand exorbitant monetary sureties or insist on property-owning sureties from the same district. The Court held that \"bail\" includes release on an accused’s own personal recognizance bond without monetary sureties where the accused is poor, preventing the criminal justice system from penalizing poverty.",
  "facts": [
    "Moti Ram, a poor mason, was arrested for offences under Sections 406 and 420 IPC.",
    "The Magistrate granted him bail in the sum of Rs. 10,000 with a surety of like amount, and rejected a surety offered by his brother because the brother held property in a different district of the State.",
    "Unable to arrange a local property-owning surety, Moti Ram remained incarcerated and approached the Supreme Court through legal aid."
  ],
  "issues": [
    "Whether the term \"bail\" under the Code of Criminal Procedure includes release on the accused’s own personal bond without sureties.",
    "Whether courts can insist that sureties must own property within the geographic territorial limits of the magistrate’s jurisdiction."
  ],
  "arguments": {
    "appellant": [
      "Demanding excessive bail amounts and refusing out-of-district sureties discriminates against indigent persons and turns bail into an instrument of class discrimination under Article 14."
    ],
    "respondent": [
      "Sureties within the local jurisdiction ensure that the court can effectively enforce forfeit bonds if the accused absconds."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-436",
      "section": "Section 436 & 441 (BNSS s. 478, 486)",
      "title": "In what cases bail to be taken and bond of accused and sureties",
      "subjectSlug": "bnss",
      "topicId": "s-478"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21 and 14",
      "title": "Protection of life and personal liberty and equality before law",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Bail covers release on personal bond without sureties",
      "explanation": "Krishna Iyer, J. held that the Code must be interpreted liberally: \"bail\" covers both release on one’s own bond (recognizance) and release with sureties. Insisting on cash sureties for an impoverished laborer violates equal justice."
    },
    {
      "heading": "Rejection of geographical surety restrictions",
      "explanation": "The Court held that demanding sureties only from the same district or state is completely unconstitutional and arbitrary. What matters is the credibility and reliability of the surety, not the location of his property."
    }
  ],
  "decision": "Magistrate’s surety condition set aside; Moti Ram directed to be released on his own bond of Rs. 1,000 without sureties.",
  "holding": "Magistrates cannot impose onerous monetary or geographic conditions on sureties; indigent accused should be released on their personal bond.",
  "ratioDecidendi": "The concept of bail under criminal procedure encompasses release on personal recognizance without sureties, and geographic restrictions on sureties are unlawful.",
  "relatedCases": [
    {
      "caseName": "Babu Singh v. State of U.P.",
      "citation": "(1978) 1 SCC 579",
      "relationship": "Companion ruling on personal liberty and bail",
      "judgmentId": "babu-singh-1978"
    },
    {
      "caseName": "Hussainara Khatoon v. State of Bihar",
      "citation": "(1980) 1 SCC 81",
      "relationship": "Applied Moti Ram to release thousands of undertrials",
      "judgmentId": "hussainara-khatoon-1979"
    }
  ],
  "examPoints": [
    "Held that bail includes release on personal bond without sureties.",
    "Condemned discrimination based on poverty in bail administration.",
    "Prohibited rejecting sureties merely because they reside in another district/state."
  ],
  "mcqs": [
    {
      "id": "moti-ram-mcq-1",
      "question": "In Moti Ram v. State of M.P. (1978), the Supreme Court ruled on bail that:",
      "options": [
        "Cash deposit is mandatory in all bailable offences",
        "Courts cannot insist on geographical surety restrictions, and poor accused should be released on personal bond",
        "Sureties must always be gazetted officers",
        "Bail can only be granted after charges are framed"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that requiring local property sureties is oppressive to the poor and that bail includes release on personal bond without sureties."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1978) 4 SCC 47",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const arneshKumar2014: Judgment = {
  "id": "arnesh-kumar-2014",
  "caseName": "Arnesh Kumar v. State of Bihar",
  "shortName": "Arnesh Kumar",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Procedure",
  "year": 2014,
  "citation": "(2014) 8 SCC 273",
  "bench": "2-Judge Bench",
  "judges": [
    "Chandramauli Kr. Prasad, J.",
    "Pinaki Chandra Ghose, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Arrest Guidelines",
    "Section 41 CrPC",
    "Section 41A Notice",
    "Section 498A IPC",
    "Mechanical Remand"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "CrPC 41",
    "BNSS 35",
    "Section 498A IPC",
    "Arrest Guidelines"
  ],
  "summary": "The Supreme Court laid down mandatory guidelines to curb routine and mechanical arrests in cases punishable with imprisonment up to 7 years (especially Section 498A IPC). The Court held that police officers must not arrest automatically on registration of a case; they must satisfy Section 41 CrPC parameters (now Section 35 BNSS), issue a Section 41A notice of appearance, and magistrates must not authorize detention without recording satisfaction.",
  "facts": [
    "Arnesh Kumar was married to Sweta Kiran, who lodged an FIR under Section 498A IPC and Section 4 of the Dowry Prohibition Act alleging cruelty and dowry demands.",
    "Apprehending arrest, he applied for anticipatory bail, which was rejected by the Sessions Court and High Court.",
    "He appealed to the Supreme Court highlighting the widespread harassment caused by mechanical arrests under Section 498A."
  ],
  "issues": [
    "Whether police officers can automatically arrest an accused upon registration of an FIR for offences punishable with up to 7 years imprisonment.",
    "What are the mandatory duties of police officers and magistrates under Sections 41, 41A, and 167 CrPC."
  ],
  "arguments": {
    "appellant": [
      "Section 498A IPC has become a weapon of harassment where entire families, including bedridden grandparents, are routinely arrested without investigation.",
      "Section 41 CrPC clearly mandates that arrest should only be made if specific statutory necessity exists."
    ],
    "respondent": [
      "Offences under Section 498A are cognizable and non-bailable; police have statutory power of arrest to protect vulnerable women."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-41",
      "section": "Section 41 & 41A (BNSS s. 35)",
      "title": "When police may arrest without warrant and notice of appearance",
      "subjectSlug": "bnss",
      "topicId": "s-35"
    },
    {
      "actId": "ipc",
      "actName": "Indian Penal Code, 1860",
      "provisionId": "ipc-s-498a",
      "section": "Section 498A (BNS s. 85)",
      "title": "Husband or relative of husband of a woman subjecting her to cruelty",
      "subjectSlug": "bns",
      "topicId": "s-103"
    }
  ],
  "reasoning": [
    {
      "heading": "Primacy of Section 41 and mandatory checklist",
      "explanation": "Prasad, J. held that arrest brings humiliation and curtails liberty. Police cannot arrest merely because an offence is cognizable. For offences carrying up to 7 years imprisonment, police must satisfy the conditions under Section 41(1)(b) and record written reasons."
    },
    {
      "heading": "Sanctions for non-compliance",
      "explanation": "Failure to comply with Section 41/41A makes the police officer liable for departmental action and contempt of court. Magistrates authorizing detention mechanically without recording reasons are equally liable for administrative disciplinary proceedings."
    }
  ],
  "decision": "Anticipatory bail granted; comprehensive 8-point nationwide directions issued on arrests.",
  "holding": "Police officers cannot arrest automatically for offences punishable up to 7 years without complying with Section 41/41A CrPC; magistrates must scrutinize arrest reasons before remanding.",
  "ratioDecidendi": "For offences punishable with imprisonment up to seven years, arrest must not be made routinely; police must serve a notice under Section 41A CrPC unless arrest is necessary under Section 41(1)(b).",
  "relatedCases": [
    {
      "caseName": "Joginder Kumar v. State of U.P.",
      "citation": "(1994) 4 SCC 260",
      "relationship": "Foundational arrest guidelines precedent",
      "judgmentId": "joginder-kumar-1994"
    },
    {
      "caseName": "D.K. Basu v. State of West Bengal",
      "citation": "(1997) 1 SCC 416",
      "relationship": "Benchmark on custodial arrest safeguards",
      "judgmentId": "dk-basu-1997"
    },
    {
      "caseName": "Satender Kumar Antil v. CBI",
      "citation": "(2022) 10 SCC 51",
      "relationship": "Affirmed and expanded Arnesh Kumar guidelines",
      "judgmentId": "satender-kumar-antil-2022"
    }
  ],
  "examPoints": [
    "Mandatory Section 41A notice for offences punishable up to 7 years.",
    "Checklist under Section 41(1)(b) must be submitted to Magistrate.",
    "Departmental action and contempt against police officers violating guidelines.",
    "Disciplinary action against magistrates authorizing mechanical remands."
  ],
  "mcqs": [
    {
      "id": "arnesh-kumar-mcq-1",
      "question": "Under Arnesh Kumar v. State of Bihar (2014), for offences punishable with imprisonment up to 7 years, what is mandatory before arresting an accused?",
      "options": [
        "Prior permission from the Chief Minister",
        "Notice of appearance under Section 41A CrPC and recording written reasons under Section 41(1)(b)",
        "Lie detector test of the complainant",
        "Magisterial inquiry under Section 164"
      ],
      "correctIndex": 1,
      "explanation": "Arnesh Kumar mandates issuance of a Section 41A CrPC notice and recording specific written reasons under Section 41(1)(b) before making an arrest."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2014) 8 SCC 273",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const satenderKumarAntil2022: Judgment = {
  "id": "satender-kumar-antil-2022",
  "caseName": "Satender Kumar Antil v. Central Bureau of Investigation",
  "shortName": "Satender Kumar Antil",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Procedure",
  "year": 2022,
  "citation": "(2022) 10 SCC 51",
  "bench": "2-Judge Bench",
  "judges": [
    "Sanjay Kishan Kaul, J.",
    "M.M. Sundresh, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Bail Guidelines",
    "Categories of Offences",
    "Section 41/41A CrPC",
    "Bail Act Suggestion",
    "Section 170 CrPC"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "Bail Guidelines",
    "Category A B C D",
    "Section 41A",
    "CrPC 170"
  ],
  "summary": "The Supreme Court issued comprehensive nationwide guidelines streamlining bail adjudication across Indian courts, classifying offences into four distinct categories (A, B, C, D). The Court reaffirmed that accused who were not arrested during investigation and cooperated under Section 41A should not be taken into custody upon filing of the chargesheet, and urged the Government of India to consider enacting a separate \"Bail Act\".",
  "facts": [
    "During appeals involving CBI prosecutions, the Supreme Court observed that trial courts were routinely remanding accused persons to judicial custody upon filing of the chargesheet under Section 170 CrPC, even when the accused had not been arrested during the investigation and had fully cooperated.",
    "The Court noted overcrowded prisons where over two-thirds of inmates were undertrials, reflecting a culture of mechanical remand."
  ],
  "issues": [
    "Whether an accused who was not arrested during investigation must be arrested or remanded upon filing of the chargesheet/complaint.",
    "How bail applications should be categorized and disposed of uniformly across trial courts."
  ],
  "arguments": {
    "appellant": [
      "Taking a cooperating accused into custody upon filing of the chargesheet subverts the purpose of Sections 41 and 41A CrPC and punishes cooperation."
    ],
    "respondent": [
      "Trial courts must have discretion to secure the presence of accused persons once cognizance is taken."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-41",
      "section": "Section 41, 41A & 170 (BNSS s. 35, 190)",
      "title": "Arrest safeguards and cases to be sent to magistrate on completion of investigation",
      "subjectSlug": "bnss",
      "topicId": "s-35"
    },
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-437",
      "section": "Section 437 & 439 (BNSS s. 480, 483)",
      "title": "Bail in non-bailable offences",
      "subjectSlug": "bnss",
      "topicId": "s-480"
    }
  ],
  "reasoning": [
    {
      "heading": "Categorization of offences for bail adjudication",
      "explanation": "Kaul, J. categorized offences: Category A (punishable up to 7 years): ordinary summons without physical arrest if cooperated; Category B (punishable with death/life/over 7 years): bail on merits; Category C (Special Acts like NDPS, PMLA, UAPA): bail subject to statutory negative conditions; Category D (economic offences not covered by Special Acts)."
    },
    {
      "heading": "Interpretation of Section 170 CrPC and Call for Bail Act",
      "explanation": "Section 170 CrPC does not mandate arrest upon filing of the chargesheet. Custody means custody of the court, not police custody. The Court recommended Parliament enact a dedicated Bail Act on the lines of the UK Bail Act, 1976."
    }
  ],
  "decision": "Binding nationwide guidelines issued to all High Courts and State Governments regarding bail adjudication.",
  "holding": "An accused who was not arrested during investigation and complied with Section 41A notices should not be taken into custody merely because a chargesheet is filed.",
  "ratioDecidendi": "Section 170 CrPC does not impose an obligation on the investigating officer to arrest an accused before filing a chargesheet; cooperating accused under Section 41A are entitled to be summoned without arrest.",
  "relatedCases": [
    {
      "caseName": "Arnesh Kumar v. State of Bihar",
      "citation": "(2014) 8 SCC 273",
      "relationship": "Enforced strict adherence to Arnesh Kumar checklist",
      "judgmentId": "arnesh-kumar-2014"
    },
    {
      "caseName": "Babu Singh v. State of U.P.",
      "citation": "(1978) 1 SCC 579",
      "relationship": "Reaffirmed bail is rule, jail is exception",
      "judgmentId": "babu-singh-1978"
    }
  ],
  "examPoints": [
    "Categorization of offences into Categories A, B, C, D for bail.",
    "Chargesheet filing under Section 170 CrPC does NOT require accused’s arrest.",
    "Bail applications in ordinary offences must be decided within 2 weeks.",
    "Anticipatory bail applications must be decided within 6 weeks."
  ],
  "mcqs": [
    {
      "id": "antil-mcq-1",
      "question": "Under Satender Kumar Antil v. CBI (2022), does Section 170 CrPC require the investigating officer to arrest the accused before filing the chargesheet?",
      "options": [
        "Yes, arrest is mandatory in all non-bailable cases",
        "No, arrest is not mandatory if the accused cooperated during the investigation",
        "Only if sanctioned by the High Court",
        "Only in white-collar crimes"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court clarified that Section 170 CrPC does not require an accused to be arrested before the chargesheet is submitted if they cooperated with the investigation."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2022) 10 SCC 51",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const joginderKumar1994: Judgment = {
  "id": "joginder-kumar-1994",
  "caseName": "Joginder Kumar v. State of U.P.",
  "shortName": "Joginder Kumar",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Constitutional Law",
  "year": 1994,
  "citation": "(1994) 4 SCC 260",
  "bench": "3-Judge Bench",
  "judges": [
    "M.N. Venkatachaliah, C.J.",
    "S. Mohan, J.",
    "B.L. Hansaria, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Power to Arrest vs Justification",
    "Right to Inform Relative",
    "Article 21",
    "Arrest Safeguards"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "CrPC 50A",
    "BNSS 37",
    "Arrest Safeguards",
    "Article 21"
  ],
  "summary": "The Supreme Court delivered a seminal ruling on police arrest powers, famously declaring that \"the existence of the power to arrest is one thing, the justification for the exercise of it is quite another.\" Police officers cannot arrest merely because it is lawful to do so. The Court laid down that an arrested person has the fundamental right to have a friend or relative informed of his arrest and place of detention.",
  "facts": [
    "Joginder Kumar, a young practicing advocate, was called to the police station for interrogation regarding an abduction case and illegally detained for five days without being produced before a magistrate.",
    "His whereabouts were concealed from his family, who were misled that he would be released soon.",
    "His father filed a habeas corpus petition under Article 32 in the Supreme Court."
  ],
  "issues": [
    "Whether the police have unfettered power to arrest a citizen merely because a cognizable offence is alleged.",
    "What constitutional and procedural safeguards must accompany the exercise of the power of arrest."
  ],
  "arguments": {
    "appellant": [
      "Concealing the detention of a citizen and refusing to inform his family violates Articles 21 and 22(1).",
      "Police make routine arrests to exhibit power or satisfy private vendettas without reasonable grounds."
    ],
    "respondent": [
      "The advocate was called for questioning in a sensitive kidnapping case and was not formally arrested."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-50a",
      "section": "Section 50A (BNSS s. 37)",
      "title": "Obligation of person making arrest to inform about the arrest, etc., to a nominated person",
      "subjectSlug": "bnss",
      "topicId": "s-35"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21 and 22(1)",
      "title": "Protection of life and personal liberty and right to be informed of grounds of arrest",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Power to arrest versus justification to arrest",
      "explanation": "Venkatachaliah, C.J. laid down that no arrest can be made without a reasonable satisfaction reached after some investigation as to the genuineness and bona fides of a complaint. Arrest should be made only in cases of grave crime, preventing flight, or preventing destruction of evidence."
    },
    {
      "heading": "Mandatory right to inform family/friend",
      "explanation": "The Court held that an arrested person being held in custody is entitled, if he so requests, to have one friend, relative, or other person informed of his arrest and where he is being held. The police officer must record in the diary who was informed."
    }
  ],
  "decision": "Inquiry ordered into the conduct of police officers; binding procedural guidelines on arrest issued.",
  "holding": "Police officers cannot arrest merely because power exists; an arrested person has the right to have a nominated friend or relative informed immediately of the arrest and place of custody.",
  "ratioDecidendi": "The power to arrest must be exercised only when justified by reasonable grounds and necessity; the arrested person possesses the right to have their detention disclosed to a nominated person.",
  "relatedCases": [
    {
      "caseName": "D.K. Basu v. State of West Bengal",
      "citation": "(1997) 1 SCC 416",
      "relationship": "Incorporated and expanded Joginder Kumar directions",
      "judgmentId": "dk-basu-1997"
    },
    {
      "caseName": "Arnesh Kumar v. State of Bihar",
      "citation": "(2014) 8 SCC 273",
      "relationship": "Reinforced restraint in arrest powers",
      "judgmentId": "arnesh-kumar-2014"
    }
  ],
  "examPoints": [
    "Formulated distinction between existence of arrest power and justification for its exercise.",
    "Led to Parliament inserting Section 50A into the CrPC (now Section 37 BNSS).",
    "Mandatory entry in police diary regarding who was informed of the arrest."
  ],
  "mcqs": [
    {
      "id": "joginder-kumar-mcq-1",
      "question": "Which legal principle regarding police arrests was established in Joginder Kumar v. State of U.P. (1994)?",
      "options": [
        "Arrest is mandatory whenever an FIR is registered",
        "Existence of the power to arrest is one thing, the justification for the exercise of it is quite another",
        "Police can detain anyone for 7 days without informing anyone",
        "Advocates are completely immune from arrest"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court famously ruled that the existence of the power to arrest is one thing, and the justification for the exercise of it is quite another."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1994) 4 SCC 260",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const bhajanLal1992: Judgment = {
  "id": "bhajan-lal-1992",
  "caseName": "State of Haryana v. Bhajan Lal",
  "shortName": "Bhajan Lal",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Procedure",
  "year": 1992,
  "citation": "1992 Supp (1) SCC 335",
  "bench": "2-Judge Bench",
  "judges": [
    "S. Ratnavel Pandian, J.",
    "K. Jayachandra Reddy, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Quashing FIR",
    "Section 482 CrPC",
    "Article 226",
    "7 Categories of Quashing",
    "Abuse of Process"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "CrPC 482",
    "BNSS 528",
    "Quashing FIR",
    "Bhajan Lal"
  ],
  "summary": "The Supreme Court laid down the locus classicus on quashing criminal proceedings, establishing the famous 7 illustrative categories under which High Courts may exercise inherent powers under Section 482 CrPC (now Section 528 BNSS) or Article 226 to quash an FIR, complaint, or criminal prosecution to prevent abuse of the process of any court or to secure the ends of justice.",
  "facts": [
    "Following a political change of government in Haryana, an FIR was lodged against former Chief Minister Bhajan Lal alleging accumulation of huge assets disproportionate to his known sources of income under the Prevention of Corruption Act.",
    "Bhajan Lal filed a writ petition in the Punjab & Haryana High Court under Article 226 / Section 482 CrPC seeking quashing of the FIR, alleging political vendetta and mala fides.",
    "The High Court quashed the FIR on grounds of political malice. The State appealed to the Supreme Court."
  ],
  "issues": [
    "What are the parameters and limitations of the High Court’s inherent powers under Section 482 CrPC and writ jurisdiction under Article 226 to quash an FIR.",
    "Whether allegations of personal or political mala fides alone are sufficient to quash an FIR when the allegations disclose a cognizable offence."
  ],
  "arguments": {
    "appellant": [
      "Investigation is the exclusive domain of the police under Section 156 CrPC; courts cannot stifle investigation at the threshold if allegations disclose a cognizable offence.",
      "Mala fides of the informant cannot invalidate an otherwise genuine criminal case."
    ],
    "respondent": [
      "The FIR was engineered by political opponents without any credible materials, amounting to harassment and abuse of legal process."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-482",
      "section": "Section 482 (BNSS s. 528)",
      "title": "Saving of inherent powers of High Court",
      "subjectSlug": "bnss",
      "topicId": "s-528"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-226",
      "article": "Article 226",
      "title": "Power of High Courts to issue certain writs",
      "subjectSlug": "constitution",
      "topicId": "art-32-226"
    }
  ],
  "reasoning": [
    {
      "heading": "The 7 Illustrative Categories for Quashing",
      "explanation": "Ratnavel Pandian, J. formulated 7 categories: (1) allegations taken at face value do not prima facie constitute any offence; (2) uncontroverted allegations do not disclose cognizable offence; (3) uncontroverted allegations do not disclose any offence whatsoever; (4) non-cognizable offence investigated without magistrate order; (5) absurd and inherently improbable allegations; (6) express legal bar in any Act; (7) proceeding manifestly attended with mala fide instituted with an ulterior grudge."
    },
    {
      "heading": "Caution against premature interference",
      "explanation": "The power of quashing is extraordinary and must be exercised sparingly and with circumspection. If allegations in the FIR prima facie disclose a cognizable offence, the High Court cannot embark on an inquiry into truthfulness at the inception."
    }
  ],
  "decision": "High Court judgment quashing the FIR was set aside; police permitted to proceed with lawful investigation.",
  "holding": "Quashing of FIR is governed by the 7 Bhajan Lal categories; allegations disclosing a prima facie cognizable offence cannot be quashed merely on grounds of alleged political mala fides.",
  "ratioDecidendi": "The inherent powers under Section 482 CrPC to quash an FIR can be exercised only within the circumscribed limits of the 7 illustrative categories where allegations disclose no offence or proceeding is manifestly malicious.",
  "relatedCases": [
    {
      "caseName": "Gian Singh v. State of Punjab",
      "citation": "(2012) 10 SCC 303",
      "relationship": "Expanded quashing on compromise",
      "judgmentId": "gian-singh-2012"
    },
    {
      "caseName": "Preeti Gupta v. State of Jharkhand",
      "citation": "(2010) 7 SCC 667",
      "relationship": "Applied Bhajan Lal to quash matrimonial harassment"
    }
  ],
  "examPoints": [
    "The 7 golden categories for quashing FIR / criminal proceedings under Section 482 CrPC / Section 528 BNSS.",
    "High Court cannot appreciate or weigh evidence at the FIR quashing stage.",
    "Mala fide alone not sufficient if prima facie offence is disclosed on the face of the FIR."
  ],
  "mcqs": [
    {
      "id": "bhajan-lal-mcq-1",
      "question": "State of Haryana v. Bhajan Lal (1992) is the leading authority on:",
      "options": [
        "Sentencing guidelines in murder cases",
        "Seven illustrative categories for quashing an FIR under Section 482 CrPC / Article 226",
        "Grant of default bail under Section 167(2)",
        "Validity of confessions made to police officers"
      ],
      "correctIndex": 1,
      "explanation": "Bhajan Lal is the landmark ruling laying down the seven categories under which High Courts may exercise inherent powers under Section 482 CrPC to quash an FIR."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases 1992 Supp (1) SCC 335",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const gianSingh2012: Judgment = {
  "id": "gian-singh-2012",
  "caseName": "Gian Singh v. State of Punjab",
  "shortName": "Gian Singh",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Procedure",
  "year": 2012,
  "citation": "(2012) 10 SCC 303",
  "bench": "3-Judge Bench",
  "judges": [
    "R.M. Lodha, J.",
    "Anil R. Dave, J.",
    "Sudhansu Jyoti Mukhopadhaya, J."
  ],
  "subject": "BNSS",
  "topics": [
    "Quashing on Compromise",
    "Section 482 CrPC",
    "Compounding vs Quashing",
    "Section 320 CrPC",
    "Commercial Disputes"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNSS",
    "CrPC 482",
    "BNSS 528",
    "CrPC 320",
    "Quashing Compromise"
  ],
  "summary": "The 3-Judge Bench resolved a longstanding conflict of authority regarding the power of High Courts under Section 482 CrPC to quash non-compoundable criminal proceedings on the ground of settlement between parties. The Court held that Section 482 is independent of the compounding table under Section 320 CrPC; High Courts may quash non-compoundable proceedings arising out of commercial, mercantile, civil, or matrimonial disputes where parties have compromised, but NOT heinous crimes like rape, murder, dacoity, or corruption.",
  "facts": [
    "Gian Singh was convicted under Sections 420 and 120B IPC by the magistrate.",
    "During the pendency of his revision petition before the High Court, he arrived at a mutual compromise with the complainant and applied for quashing under Section 482 CrPC.",
    "Conflicting earlier rulings existed: B.S. Joshi and Nikhil Merchant allowed quashing, whereas earlier decisions in Surendra Nath Mohanty held that non-compoundable offences cannot be compounded.",
    "The matter was referred to a 3-Judge Bench to reconcile Section 320 with Section 482 CrPC."
  ],
  "issues": [
    "Whether the High Court has inherent power under Section 482 CrPC to quash criminal proceedings in non-compoundable offences based on a settlement between parties.",
    "What is the distinction between compounding under Section 320 CrPC and quashing under Section 482 CrPC."
  ],
  "arguments": {
    "appellant": [
      "Where disputes are essentially private, matrimonial, or commercial and parties have amicably settled, continuing prosecution is futile and an abuse of court process."
    ],
    "respondent": [
      "Section 320 CrPC exhaustively lists compoundable offences; allowing Section 482 to bypass Section 320 renders the legislative mandate nugatory."
    ]
  },
  "provisions": [
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-482",
      "section": "Section 482 (BNSS s. 528)",
      "title": "Saving of inherent powers of High Court",
      "subjectSlug": "bnss",
      "topicId": "s-528"
    },
    {
      "actId": "crpc",
      "actName": "Code of Criminal Procedure, 1973",
      "provisionId": "crpc-s-320",
      "section": "Section 320 (BNSS s. 359)",
      "title": "Compounding of offences",
      "subjectSlug": "bnss",
      "topicId": "s-528"
    }
  ],
  "reasoning": [
    {
      "heading": "Distinction between Compounding and Inherent Quashing",
      "explanation": "Lodha, J. held that compounding of offences under Section 320 is an acquittal, whereas quashing under Section 482 is the exercise of inherent power to prevent abuse of process. Section 320 does not limit the inherent jurisdiction of the High Court."
    },
    {
      "heading": "Private disputes vs Crimes against society",
      "explanation": "Heinous crimes (murder, rape, dacoity, POCSO, corruption) have a grave impact on society and cannot be quashed on settlement. However, offences having overwhelmingly civil, commercial, partnership, or matrimonial character where the victim is fully compensated can be quashed to secure peace."
    }
  ],
  "decision": "Conflict resolved; High Court powers to quash private non-compoundable disputes on compromise affirmed.",
  "holding": "High Courts under Section 482 CrPC have power to quash non-compoundable criminal proceedings arising from civil/commercial/matrimonial disputes upon settlement, but cannot quash heinous crimes.",
  "ratioDecidendi": "The inherent power under Section 482 CrPC is not fettered by Section 320 CrPC; High Courts may quash non-compoundable proceedings having predominantly civil or private flavor on genuine compromise.",
  "relatedCases": [
    {
      "caseName": "State of Haryana v. Bhajan Lal",
      "citation": "1992 Supp (1) SCC 335",
      "relationship": "Harmonized with Bhajan Lal categories",
      "judgmentId": "bhajan-lal-1992"
    }
  ],
  "examPoints": [
    "Clear distinction between Section 320 compounding and Section 482 quashing.",
    "Heinous and serious offences against society (rape, murder, corruption) CANNOT be quashed on compromise.",
    "Commercial, partnership, property, and matrimonial disputes CAN be quashed on compromise."
  ],
  "mcqs": [
    {
      "id": "gian-singh-mcq-1",
      "question": "Under Gian Singh v. State of Punjab (2012), which category of offences CANNOT be quashed under Section 482 CrPC even if the parties have reached a compromise?",
      "options": [
        "Commercial disputes and cheque bounce matters",
        "Matrimonial and dowry harassment disputes",
        "Heinous and serious offences against society such as murder, rape, and dacoity",
        "Partnership accounting disputes"
      ],
      "correctIndex": 2,
      "explanation": "The Supreme Court explicitly held that heinous offences such as murder, rape, and dacoity cannot be quashed on the ground of compromise because they are crimes against society."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2012) 10 SCC 303",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const kmNanavati1962: Judgment = {
  "id": "km-nanavati-1962",
  "caseName": "K.M. Nanavati v. State of Maharashtra",
  "shortName": "K.M. Nanavati",
  "court": "Supreme Court of India",
  "jurisdiction": "Penal Law / Criminal Procedure",
  "year": 1962,
  "citation": "AIR 1962 SC 605",
  "bench": "3-Judge Bench",
  "judges": [
    "K. Subba Rao, J.",
    "S.K. Das, J.",
    "Raghubar Dayal, J."
  ],
  "subject": "BNS",
  "topics": [
    "Grave and Sudden Provocation",
    "Section 300 Exception 1",
    "Murder vs Culpable Homicide",
    "Cooling Time"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BNS",
    "IPC 300",
    "BNS 101",
    "Murder",
    "Grave and Sudden Provocation"
  ],
  "summary": "The Supreme Court established the definitive principles governing \"grave and sudden provocation\" under Exception 1 to Section 300 IPC (now Section 101 BNS). The Court held that the fatal act must be committed while the accused was deprived of self-control by provocation that was both grave and sudden; if sufficient time elapsed between the provocation and the killing for the blood to cool and premeditation to take over, Exception 1 cannot apply.",
  "facts": [
    "Commander K.M. Nanavati, a Naval officer, discovered that his wife Sylvia was having an illicit affair with his friend Prem Ahuja after she confessed to him.",
    "Nanavati drove to his naval ship, obtained a semi-automatic revolver and six rounds of ammunition under false pretenses, drove to Ahuja’s residence, entered his bedroom, and shot him dead.",
    "The Sessions Court jury returned a verdict of 8:1 of \"not guilty\" under Section 302 IPC. The Sessions Judge referred the case to the Bombay High Court under Section 307 CrPC, which convicted Nanavati of murder."
  ],
  "issues": [
    "What are the legal tests for determining \"grave and sudden provocation\" under Exception 1 to Section 300 IPC.",
    "Whether the confession of adultery by the wife hours before the shooting constituted grave and sudden provocation at the time of the fatal shooting.",
    "What are the powers of the High Court when dealing with a reference under Section 307 CrPC from a jury verdict."
  ],
  "arguments": {
    "appellant": [
      "The confession of adultery shattered Nanavati’s psychological equilibrium, keeping him under constant grave provocation until he confronted Ahuja.",
      "The shooting was an accidental discharge during a physical struggle."
    ],
    "respondent": [
      "Nanavati had three hours of cooling time between the confession and the shooting during which he drove to his ship, secured bullets, and drove to Ahuja’s flat, proving cold, calculated premeditation."
    ]
  },
  "provisions": [
    {
      "actId": "ipc",
      "actName": "Indian Penal Code, 1860",
      "provisionId": "ipc-s-300",
      "section": "Section 300 Exception 1 & Section 302 (BNS s. 101, 103)",
      "title": "Murder and Exception 1 (Grave and sudden provocation)",
      "subjectSlug": "bns",
      "topicId": "s-103"
    }
  ],
  "reasoning": [
    {
      "heading": "Four Tests of Grave and Sudden Provocation",
      "explanation": "Subba Rao, J. formulated four foundational tests: (1) the test of grave and sudden provocation is whether a reasonable man placed in the same circumstances would be so provoked as to lose his self-control; (2) words and gestures may cause grave and sudden provocation; (3) the mental background created by previous acts may be taken into account; (4) the fatal blow must be clearly traced to the influence of passion arising from that provocation and not after passion had cooled down by lapse of time."
    },
    {
      "heading": "Lapse of cooling time destroys Exception 1",
      "explanation": "The Court found that between the wife’s confession and the shooting, more than three hours had elapsed. Nanavati dropped his family at a cinema, went to his ship, requisitioned ammunition under a false excuse, and drove to Ahuja’s flat. This proved deliberate premeditation; the blood had ample time to cool."
    }
  ],
  "decision": "High Court conviction of Nanavati under Section 302 IPC for murder upheld; sentenced to life imprisonment.",
  "holding": "To claim Exception 1 to Section 300 IPC, the act must be committed immediately under the deprivation of self-control without intervening cooling time; Nanavati’s actions proved deliberate revenge.",
  "ratioDecidendi": "Provocation under Exception 1 to Section 300 IPC must be both grave and sudden; where sufficient time elapses for a reasonable person’s blood to cool, the killing is premeditated murder, not culpable homicide.",
  "relatedCases": [],
  "examPoints": [
    "Four cardinal tests of \"grave and sudden provocation\".",
    "The \"cooling time\" doctrine in Indian criminal law.",
    "Historic case that led to the abolition of the jury trial system in India.",
    "High Court’s power under Section 307 CrPC to override perverse jury verdicts."
  ],
  "mcqs": [
    {
      "id": "nanavati-mcq-1",
      "question": "In K.M. Nanavati v. State of Maharashtra (1962), why was the plea of \"grave and sudden provocation\" rejected by the Supreme Court?",
      "options": [
        "Because adultery is not recognized in law",
        "Because there was sufficient \"cooling time\" between the provocation and the shooting, proving premeditation",
        "Because the weapon was not recovered",
        "Because the victim was an armed soldier"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that sufficient time had elapsed between the wife’s confession and the shooting for passion to cool and premeditation to take over."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1962 SC 605 / 1962 Supp (1) SCR 567",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const sharadBirdhichand1984: Judgment = {
  "id": "sharad-birdhichand-1984",
  "caseName": "Sharad Birdhichand Sarda v. State of Maharashtra",
  "shortName": "Sharad Birdhichand Sarda",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Law of Evidence",
  "year": 1984,
  "citation": "(1984) 4 SCC 116",
  "bench": "3-Judge Bench",
  "judges": [
    "S. Murtaza Fazal Ali, J.",
    "A. Varadarajan, J.",
    "Sabyasachi Mukharji, J."
  ],
  "subject": "BSA",
  "topics": [
    "Circumstantial Evidence",
    "Panchsheel",
    "Chain of Circumstances",
    "Burden of Proof",
    "BSA Section 104"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BSA",
    "Evidence Act 3",
    "BSA 104",
    "Circumstantial Evidence",
    "Panchsheel"
  ],
  "summary": "The Supreme Court formulated the celebrated five golden principles (\"Panchsheel\") of circumstantial evidence governing criminal trials in India. Reversing the conviction and death sentence of a husband accused of poisoning his wife, the Court held that circumstantial evidence must form an unbroken chain pointing unerringly and exclusively to the guilt of the accused, consistent with no other reasonable hypothesis.",
  "facts": [
    "Manjushree was married to Sharad Sarda in June 1982. Within four months of marriage, she died of potassium cyanide poisoning in her matrimonial bedroom.",
    "The prosecution alleged that the husband had an extramarital affair, disliked his wife, and administered potassium cyanide.",
    "The defense suggested suicide, producing letters written by the deceased revealing severe depression and emotional distress.",
    "The trial court and High Court convicted the husband of murder and sentenced him to death based on circumstantial evidence."
  ],
  "issues": [
    "What are the mandatory legal tests (\"Panchsheel\") to sustain a conviction based purely on circumstantial evidence.",
    "Whether the prosecution had established an unbroken chain of circumstances excluding the reasonable possibility of suicide."
  ],
  "arguments": {
    "appellant": [
      "There was no direct evidence that the husband purchased, possessed, or administered potassium cyanide.",
      "Her personal letters revealed melancholia and suicidal ideation, providing a plausible alternative hypothesis of suicide."
    ],
    "respondent": [
      "The death occurred in the bedroom where only husband and wife were present; the burden shifted to the husband under Section 106 Evidence Act."
    ]
  },
  "provisions": [
    {
      "actId": "bsa",
      "actName": "Bharatiya Sakshya Adhiniyam, 2023",
      "provisionId": "bsa-s-104",
      "section": "Section 104 & 106 (Evidence Act s. 101, 106)",
      "title": "Burden of proof and burden of proving fact especially within knowledge",
      "subjectSlug": "bsa",
      "topicId": "s-104"
    }
  ],
  "reasoning": [
    {
      "heading": "The Panchsheel of Circumstantial Evidence",
      "explanation": "Fazal Ali, J. formulated the five golden principles: (1) The circumstances from which conclusion of guilt is drawn must be fully established; (2) The facts established must be consistent only with the hypothesis of guilt; (3) The circumstances must be conclusive in nature; (4) They must exclude every possible hypothesis except guilt; (5) There must be a chain of evidence so complete as to leave no reasonable ground for a conclusion consistent with innocence."
    },
    {
      "heading": "Failure of prosecution to exclude suicide",
      "explanation": "The Court held that between \"may be true\" and \"must be true\", there is an ocean of distance that prosecution must travel. Since potassium cyanide could have been ingested voluntarily, suicide was not excluded; conviction based on suspicion cannot stand."
    }
  ],
  "decision": "Conviction and death sentence set aside; appellant acquitted of all charges.",
  "holding": "Circumstantial evidence must satisfy all five principles of Panchsheel; if a reasonable hypothesis of innocence or suicide is possible, the accused is entitled to acquittal.",
  "ratioDecidendi": "A conviction based on circumstantial evidence can be sustained only if the proved circumstances form a complete, unbroken chain pointing conclusively and solely to the guilt of the accused, excluding every other reasonable hypothesis.",
  "relatedCases": [
    {
      "caseName": "Bachan Singh v. State of Punjab",
      "citation": "(1980) 2 SCC 684",
      "relationship": "Cited on standard of proof in capital sentencing",
      "judgmentId": "bachan-singh-1980"
    }
  ],
  "examPoints": [
    "The \"Panchsheel\" (5 golden principles) of circumstantial evidence.",
    "Cardinal rule: \"between may be true and must be true, there is an inevasible distance\".",
    "Section 106 Evidence Act / BSA s. 106 cannot relieve prosecution of primary burden."
  ],
  "mcqs": [
    {
      "id": "sharad-sarda-mcq-1",
      "question": "The famous \"Panchsheel\" (five golden principles) of circumstantial evidence was formulated by the Supreme Court in:",
      "options": [
        "K.M. Nanavati v. State of Maharashtra",
        "Sharad Birdhichand Sarda v. State of Maharashtra",
        "Bachan Singh v. State of Punjab",
        "State of U.P. v. Deoman Upadhyaya"
      ],
      "correctIndex": 1,
      "explanation": "Sharad Birdhichand Sarda (1984) formulated the celebrated five golden principles (Panchsheel) governing circumstantial evidence in criminal trials."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1984) 4 SCC 116",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const deomanUpadhyaya1960: Judgment = {
  "id": "deoman-upadhyaya-1960",
  "caseName": "State of U.P. v. Deoman Upadhyaya",
  "shortName": "Deoman Upadhyaya",
  "court": "Supreme Court of India",
  "jurisdiction": "Law of Evidence / Constitutional Law",
  "year": 1960,
  "citation": "AIR 1960 SC 1125",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "S.J. Imam, J.",
    "J.L. Kapur, J.",
    "K. Subba Rao, J.",
    "K.N. Wanchoo, J.",
    "J.C. Shah, J."
  ],
  "subject": "BSA",
  "topics": [
    "Section 27 Evidence Act",
    "Discovery Rule",
    "Article 14",
    "Custodial Confession",
    "BSA Section 23"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BSA",
    "Evidence Act 27",
    "BSA 23",
    "Discovery",
    "Article 14"
  ],
  "summary": "The 5-Judge Constitution Bench upheld the constitutional validity of Section 27 of the Indian Evidence Act, 1872 (now Section 23 BSA) under Article 14 of the Constitution. The Court held that the classification between persons in police custody and persons not in police custody regarding information leading to discovery is reasonable and founded on an intelligible differentia aimed at preventing fabricated confessions.",
  "facts": [
    "Deoman Upadhyaya murdered his stepmother with a gandasa (chopper) following a dispute over property.",
    "While in police custody, he made a statement: \"I have buried the gandasa in the tank; I will dig it out and hand it over.\" He then led the police and panch witnesses to the tank and recovered the blood-stained weapon.",
    "The Allahabad High Court held that Section 27 Evidence Act was discriminatory and void under Article 14 because it applied only to persons in police custody and not to accused persons at liberty."
  ],
  "issues": [
    "Whether Section 27 of the Indian Evidence Act violates the equal protection guarantee of Article 14 of the Constitution.",
    "Whether the discovery of a weapon pursuant to information given in police custody is admissible in evidence."
  ],
  "arguments": {
    "appellant": [
      "Section 27 creates a sensible exception to Section 26: the discovery of a physical fact provides external objective confirmation of the truth of the statement, removing the taint of police coercion.",
      "The classification between persons in police custody and persons at liberty is rational and historic."
    ],
    "respondent": [
      "Treating statements of persons in custody differently from those not in custody creates unconstitutional discrimination under Article 14."
    ]
  },
  "provisions": [
    {
      "actId": "bsa",
      "actName": "Bharatiya Sakshya Adhiniyam, 2023",
      "provisionId": "bsa-s-23",
      "section": "Section 23 (Evidence Act s. 27)",
      "title": "Information leading to discovery of fact",
      "subjectSlug": "bsa",
      "topicId": "s-23"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-14",
      "article": "Article 14",
      "title": "Equality before law and equal protection of laws",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Reasonable classification under Article 14",
      "explanation": "Shah, J. for the majority held that persons in police custody form a distinct, vulnerable class requiring protection against third-degree methods. While Section 25 and 26 broadly ban custodial confessions, Section 27 carves out a rational exception: where a distinct physical fact is discovered, the discovery guarantees truthfulness."
    },
    {
      "heading": "Doctrine of confirmation by subsequent facts",
      "explanation": "The rationale of Section 27 is the doctrine of confirmation by subsequent facts: if physical evidence (weapon, stolen property) is actually found where the accused stated it was hidden, that part of his statement is proved true and admissible."
    }
  ],
  "decision": "High Court judgment reversed; Section 27 Evidence Act declared constitutionally valid under Article 14; conviction restored.",
  "holding": "Section 27 of the Evidence Act does not violate Article 14; statements by accused in custody leading to discovery of distinct facts are admissible.",
  "ratioDecidendi": "The classification in Section 27 between accused persons in police custody and those not in custody is based on an intelligible differentia having a rational relation to the object of ensuring the truth of admissions.",
  "relatedCases": [
    {
      "caseName": "Selvi v. State of Karnataka",
      "citation": "(2010) 7 SCC 263",
      "relationship": "Examined Section 27 in light of narco-analysis and Article 20(3)",
      "judgmentId": "selvi-2010"
    },
    {
      "caseName": "Aghnoo Nagesia v. State of Bihar",
      "citation": "AIR 1966 SC 119",
      "relationship": "Applied Section 27 severability to confessional FIRs",
      "judgmentId": "aghnoo-nagesia-1966"
    }
  ],
  "examPoints": [
    "Upheld the constitutional validity of Section 27 Evidence Act (BSA Section 23) under Article 14.",
    "Articulated the \"doctrine of confirmation by subsequent facts\".",
    "Established that only the exact portion of information distinctly relating to the discovery is admissible."
  ],
  "mcqs": [
    {
      "id": "deoman-mcq-1",
      "question": "In State of U.P. v. Deoman Upadhyaya (1960), the Constitution Bench upheld the validity of which statutory provision under Article 14?",
      "options": [
        "Section 164 CrPC",
        "Section 27 of the Indian Evidence Act, 1872",
        "Section 302 IPC",
        "Section 123 of the Indian Evidence Act, 1872"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench upheld the constitutional validity of Section 27 of the Evidence Act (discovery of facts) against an Article 14 challenge."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1960 SC 1125 / (1961) 1 SCR 14",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const aghnooNagesia1966: Judgment = {
  "id": "aghnoo-nagesia-1966",
  "caseName": "Aghnoo Nagesia v. State of Bihar",
  "shortName": "Aghnoo Nagesia",
  "court": "Supreme Court of India",
  "jurisdiction": "Law of Evidence / Criminal Law",
  "year": 1966,
  "citation": "AIR 1966 SC 119",
  "bench": "3-Judge Bench",
  "judges": [
    "K. Subba Rao, J.",
    "Raghubar Dayal, J.",
    "R.S. Bachawat, J."
  ],
  "subject": "BSA",
  "topics": [
    "Confessional FIR",
    "Section 25 Evidence Act",
    "Severability of Confession",
    "Section 27 Evidence Act",
    "BSA Section 23"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BSA",
    "Evidence Act 25",
    "BSA 23",
    "Confession",
    "FIR"
  ],
  "summary": "The Supreme Court established the definitive rule on confessional First Information Reports (FIRs) lodged by an accused. The Court held that an FIR lodged by an accused person admitting his guilt is a confession made to a police officer and is wholly inadmissible in evidence under Section 25 Evidence Act (now Section 23 BSA), except for separable, non-confessional parts leading to the discovery of a fact under Section 27.",
  "facts": [
    "Aghnoo Nagesia murdered four members of his family (aunt, daughter, son-in-law, and grandson) with a tangi (axe) over property disputes.",
    "Immediately after the murders, he walked to the police station and lodged a comprehensive First Information Report detailing the motive, the manner in which he killed each victim, where he hid the bodies, and where he concealed the bloody axe.",
    "The trial court and High Court relied upon the confessional FIR as substantive evidence of guilt."
  ],
  "issues": [
    "Whether a First Information Report lodged by an accused person admitting his guilt is admissible in evidence against him.",
    "Whether a confessional FIR can be dissected to admit parts indicating motive, preparation, or opportunity while excluding the confession of killing."
  ],
  "arguments": {
    "appellant": [
      "The FIR was a statement made by the accused to a police officer confessing a crime and is completely barred by Section 25 Evidence Act.",
      "A confession cannot be split into admissions and relied upon."
    ],
    "respondent": [
      "Non-confessional statements giving background history, motive, and conduct under Section 8 are separable and admissible."
    ]
  },
  "provisions": [
    {
      "actId": "bsa",
      "actName": "Bharatiya Sakshya Adhiniyam, 2023",
      "provisionId": "bsa-s-23",
      "section": "Section 23 (Evidence Act s. 25, 27)",
      "title": "Admissions and confessions to police officer not to be proved",
      "subjectSlug": "bsa",
      "topicId": "s-23"
    }
  ],
  "reasoning": [
    {
      "heading": "Complete bar under Section 25 Evidence Act",
      "explanation": "Bachawat, J. held that Section 25 provides that no confession made to a police officer shall be proved as against a person accused of any offence. A confession is an admission of guilt or of substantially all facts constituting the crime."
    },
    {
      "heading": "Inadmissibility of dissected confessional parts",
      "explanation": "The Court held that the confession must be taken as a whole or not at all. If the first information report given by the accused is confessional, no part of it can be admitted to prove motive, preparation, or opportunity, save and except the narrow portions which lead distinctly to the discovery of facts under Section 27."
    }
  ],
  "decision": "Confessional FIR excluded from evidence; however, conviction affirmed based on independent witness testimony and Section 27 recoveries.",
  "holding": "An FIR lodged by an accused admitting his guilt is wholly inadmissible under Section 25 Evidence Act, except for separable parts leading to discovery under Section 27.",
  "ratioDecidendi": "A confessional FIR given by an accused to a police officer cannot be used as an admission against him under Section 25 Evidence Act, save for the distinct parts admissible under Section 27.",
  "relatedCases": [
    {
      "caseName": "State of U.P. v. Deoman Upadhyaya",
      "citation": "AIR 1960 SC 1125",
      "relationship": "Precedent on Section 27 scope",
      "judgmentId": "deoman-upadhyaya-1960"
    }
  ],
  "examPoints": [
    "Leading authority on confessional FIRs in Indian law.",
    "Cannot split a confessional statement to admit \"motive\" or \"conduct\" under Section 8.",
    "Only the portion leading directly to discovery is saved by Section 27 (BSA Section 23)."
  ],
  "mcqs": [
    {
      "id": "aghnoo-nagesia-mcq-1",
      "question": "In Aghnoo Nagesia v. State of Bihar (1966), what did the Supreme Court hold regarding a confessional FIR lodged by an accused person?",
      "options": [
        "It is fully admissible as substantive evidence",
        "It is completely barred by Section 25 Evidence Act, except for parts leading to discovery under Section 27",
        "It is admissible only if signed in front of a Magistrate",
        "It is treated as a dying declaration"
      ],
      "correctIndex": 1,
      "explanation": "The Court held that a confessional FIR lodged by an accused is inadmissible under Section 25, save for separable parts leading to discovery of facts under Section 27."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1966 SC 119 / (1966) 1 SCR 134",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const khushalRao1958: Judgment = {
  "id": "khushal-rao-1958",
  "caseName": "Khushal Rao v. State of Bombay",
  "shortName": "Khushal Rao",
  "court": "Supreme Court of India",
  "jurisdiction": "Law of Evidence",
  "year": 1958,
  "citation": "AIR 1958 SC 22",
  "bench": "3-Judge Bench",
  "judges": [
    "B.P. Sinha, J.",
    "Syed Jafer Imam, J.",
    "J.L. Kapur, J."
  ],
  "subject": "BSA",
  "topics": [
    "Dying Declaration",
    "Section 32(1) Evidence Act",
    "Sole Basis for Conviction",
    "BSA Section 26(a)"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BSA",
    "Evidence Act 32",
    "BSA 26",
    "Dying Declaration"
  ],
  "summary": "The Supreme Court laid down the authoritative principles governing dying declarations under Section 32(1) of the Indian Evidence Act, 1872 (now Section 26(a) BSA). The Court held that a dying declaration can form the sole basis of conviction without any independent corroboration, provided the court is satisfied that the statement is true, voluntary, reliable, and made when the deceased was in a fit mental condition to make it.",
  "facts": [
    "In a factional feud in Nagpur, Baboolal was attacked in a lane at night with swords and spears by four assailants.",
    "He made three successive dying declarations: first to a doctor, second to a police sub-inspector, and third to a Magistrate who recorded it in question-and-answer form after obtaining medical fitness certification.",
    "In all three statements, he consistently named Khushal Rao and Tukaram as his assailants.",
    "The High Court convicted Khushal Rao of murder solely relying on the dying declarations, which was challenged before the Supreme Court."
  ],
  "issues": [
    "Whether a dying declaration under Section 32(1) Evidence Act can be the sole basis of a conviction for murder without independent corroboration.",
    "What tests and safeguards must the court apply before accepting a dying declaration as truthful and reliable."
  ],
  "arguments": {
    "appellant": [
      "A dying declaration is untested by cross-examination and not made on oath; as a rule of prudence, it cannot sustain a conviction without independent corroboration.",
      "The attack occurred in darkness, creating doubt about identification."
    ],
    "respondent": [
      "Under Indian law, a dying declaration stands on the same footing as any other piece of evidence and requires no artificial corroboration if it is truthful and voluntary."
    ]
  },
  "provisions": [
    {
      "actId": "bsa",
      "actName": "Bharatiya Sakshya Adhiniyam, 2023",
      "provisionId": "bsa-s-26",
      "section": "Section 26(a) (Evidence Act s. 32(1))",
      "title": "Cases in which statement of relevant fact by person who is dead is relevant (Dying declaration)",
      "subjectSlug": "bsa",
      "topicId": "s-26"
    }
  ],
  "reasoning": [
    {
      "heading": "Dying declaration as sole basis of conviction",
      "explanation": "Sinha, J. formulated six key principles, establishing that it cannot be laid down as an absolute rule of law that a dying declaration cannot form the sole basis of conviction unless corroborated. Each case must be determined on its own facts."
    },
    {
      "heading": "Tests of reliability and recording by Magistrate",
      "explanation": "A dying declaration recorded by a competent Magistrate in the proper manner (question and answer form) after satisfying himself about the mental fitness of the declarant stands on a much higher footing than oral declarations to private witnesses."
    }
  ],
  "decision": "Conviction based solely on the dying declarations upheld; appeal dismissed.",
  "holding": "A dying declaration under Section 32(1) Evidence Act can form the sole basis of conviction without corroboration if the court finds it reliable, voluntary, and untutored.",
  "ratioDecidendi": "There is no rule of law or of prudence that a dying declaration must be corroborated before acting upon it; a truthful and voluntary dying declaration can sustain a conviction independently.",
  "relatedCases": [],
  "examPoints": [
    "Six cardinal principles on dying declarations laid down by Sinha, J.",
    "No absolute rule requiring independent corroboration for dying declarations.",
    "Preference for declarations recorded by a Magistrate in question-and-answer format.",
    "Mental fitness of the declarant is a crucial prerequisite."
  ],
  "mcqs": [
    {
      "id": "khushal-rao-mcq-1",
      "question": "According to Khushal Rao v. State of Bombay (1958), can a conviction for murder be based solely on a dying declaration without independent corroboration?",
      "options": [
        "No, corroboration is mandatory under all circumstances",
        "Yes, if the court is satisfied that the dying declaration is true, voluntary, and reliable",
        "Only if the accused admits the killing",
        "Only if supported by forensic DNA evidence"
      ],
      "correctIndex": 1,
      "explanation": "Khushal Rao established that a dying declaration can form the sole basis of conviction without corroboration if it is found to be true, voluntary, and reliable."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1958 SC 22 / 1958 SCR 552",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const anvarPv2014: Judgment = {
  "id": "anvar-pv-2014",
  "caseName": "Anvar P.V. v. P.K. Basheer",
  "shortName": "Anvar P.V.",
  "court": "Supreme Court of India",
  "jurisdiction": "Law of Evidence / Cyber Law",
  "year": 2014,
  "citation": "(2014) 10 SCC 473",
  "bench": "3-Judge Bench",
  "judges": [
    "R.M. Lodha, C.J.",
    "Kurian Joseph, J.",
    "R.F. Nariman, J."
  ],
  "subject": "BSA",
  "topics": [
    "Electronic Evidence",
    "Section 65B Certificate",
    "Special Law Prevails",
    "BSA Section 63"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BSA",
    "Evidence Act 65B",
    "BSA 63",
    "Electronic Evidence",
    "CD/DVD"
  ],
  "summary": "The 3-Judge Bench overruled Navjot Sandhu (2005) and held that secondary electronic evidence (CDs, DVDs, pendrives, computer printouts) is wholly inadmissible in a court of law without the mandatory certificate under Section 65B(4) of the Evidence Act (now Section 63 BSA). The Court held that Sections 65A and 65B form a complete special code governing electronic records, overriding the general secondary evidence provisions under Sections 63 and 65.",
  "facts": [
    "In an election petition challenging the election to the Kerala Legislative Assembly, the petitioner produced CDs and audio/video cassettes allegedly containing corrupt campaign speeches recorded by election observers.",
    "The CDs were copies made from the original recording devices, but were produced without any accompanying certificate under Section 65B(4) of the Evidence Act.",
    "The High Court dismissed the election petition, holding that electronic records without a Section 65B certificate could not be admitted."
  ],
  "issues": [
    "Whether electronic secondary evidence (CDs, printouts) can be admitted without the certificate specified in Section 65B(4) of the Evidence Act.",
    "Whether the general secondary evidence provisions under Sections 63 and 65 can be invoked to bypass Section 65B (as held in State (NCT of Delhi) v. Navjot Sandhu)."
  ],
  "arguments": {
    "appellant": [
      "Under Navjot Sandhu, any electronic record could be proved under ordinary secondary evidence rules (Sections 63 and 65) by calling a witness to testify to its contents, irrespective of a 65B certificate."
    ],
    "respondent": [
      "Section 65A contains a non-obstante clause making Section 65B a complete special code; secondary electronic records are completely inadmissible without a 65B certificate."
    ]
  },
  "provisions": [
    {
      "actId": "bsa",
      "actName": "Bharatiya Sakshya Adhiniyam, 2023",
      "provisionId": "bsa-s-63",
      "section": "Section 63 (Evidence Act s. 65B)",
      "title": "Admissibility of electronic records and certificate requirement",
      "subjectSlug": "bsa",
      "topicId": "s-63"
    }
  ],
  "reasoning": [
    {
      "heading": "Special law overrides general law (Generalia specialibus non derogant)",
      "explanation": "Kurian Joseph, J. held that Section 65B begins with a non-obstante clause (\"Notwithstanding anything contained in this Act\"). An electronic record by way of secondary evidence cannot be admitted in evidence unless the requirements of Section 65B(4) are strictly satisfied."
    },
    {
      "heading": "Overruling of Navjot Sandhu",
      "explanation": "The Court explicitly overruled Navjot Sandhu, declaring that allowing electronic evidence under Sections 63 and 65 would render Section 65B completely redundant. Production of Section 65B certificate is a mandatory condition precedent for admissibility."
    }
  ],
  "decision": "Uncertified CDs held inadmissible; election petition dismissal upheld; Navjot Sandhu overruled.",
  "holding": "Secondary electronic evidence is inadmissible without a Section 65B certificate; Sections 65A and 65B constitute a special and exclusive code for electronic records.",
  "ratioDecidendi": "Any secondary electronic record produced before a court is legally inadmissible unless accompanied by a certificate under Section 65B(4) of the Evidence Act.",
  "relatedCases": [
    {
      "caseName": "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
      "citation": "(2020) 7 SCC 1",
      "relationship": "Affirmed and clarified Anvar P.V.",
      "judgmentId": "arjun-panditrao-2020"
    }
  ],
  "examPoints": [
    "Overruled State (NCT of Delhi) v. Navjot Sandhu on Section 65B.",
    "Section 65B(4) certificate is a mandatory condition precedent for electronic secondary evidence.",
    "Original electronic device does NOT require a 65B certificate.",
    "Governs electronic evidence under BSA Section 63."
  ],
  "mcqs": [
    {
      "id": "anvar-pv-mcq-1",
      "question": "In Anvar P.V. v. P.K. Basheer (2014), the Supreme Court held that secondary electronic records are:",
      "options": [
        "Admissible under ordinary rules of Section 65 without any certificate",
        "Wholly inadmissible in evidence without a mandatory certificate under Section 65B(4)",
        "Admissible only in election disputes",
        "Treated as public documents under Section 74"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court held that secondary electronic records are strictly inadmissible without the mandatory certificate under Section 65B(4) of the Evidence Act."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2014) 10 SCC 473",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const arjunPanditrao2020: Judgment = {
  "id": "arjun-panditrao-2020",
  "caseName": "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
  "shortName": "Arjun Panditrao Khotkar",
  "court": "Supreme Court of India",
  "jurisdiction": "Law of Evidence / Cyber Law",
  "year": 2020,
  "citation": "(2020) 7 SCC 1",
  "bench": "3-Judge Bench",
  "judges": [
    "R.F. Nariman, J.",
    "S. Ravindra Bhat, J.",
    "V. Ramasubramanian, J."
  ],
  "subject": "BSA",
  "topics": [
    "Section 65B Evidence Act",
    "Electronic Records",
    "BSA Section 63",
    "Stage of Certificate",
    "Court Power to Summon"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "BSA",
    "Evidence Act 65B",
    "BSA 63",
    "Electronic Evidence",
    "Certificate"
  ],
  "summary": "The 3-Judge Bench authoritative ruling resolved the conflicts created by Shafhi Mohammad and reaffirmed Anvar P.V., holding that a Section 65B(4) certificate (now BSA Section 63) is an indispensable condition precedent for the admissibility of secondary electronic evidence. The Court clarified that the certificate is not required if the original device is produced, and trial courts have inherent powers under Section 91 CrPC and Section 165 Evidence Act to summon certificates before trial concludes.",
  "facts": [
    "In an election petition challenging an election to the Maharashtra Legislative Assembly, the High Court directed the Election Commission to produce CCTV footage and video recordings of the nomination filing.",
    "The Election Commission produced CDs/VCDs containing the video files but failed to provide the requisite Section 65B certificate despite repeated court orders.",
    "A division bench of the Supreme Court in Shafhi Mohammad (2018) had diluted Section 65B by holding that a party not in possession of the electronic device cannot be compelled to produce a certificate. The issue was referred to a larger bench."
  ],
  "issues": [
    "Whether the certificate under Section 65B(4) is mandatory even when the party producing the electronic record is not in possession of the original device.",
    "At what stage must the Section 65B certificate be produced in civil and criminal proceedings."
  ],
  "arguments": {
    "appellant": [
      "Following Shafhi Mohammad, producing a certificate should be relaxed when a party has no control over the computer system (such as government or telephone company servers)."
    ],
    "respondent": [
      "Section 65B is mandatory and contains no exceptions; relaxing it invites rampant tampering and fabrication of digital evidence."
    ]
  },
  "provisions": [
    {
      "actId": "bsa",
      "actName": "Bharatiya Sakshya Adhiniyam, 2023",
      "provisionId": "bsa-s-63",
      "section": "Section 63 (Evidence Act s. 65B)",
      "title": "Admissibility of electronic records and stage of certificate",
      "subjectSlug": "bsa",
      "topicId": "s-63"
    }
  ],
  "reasoning": [
    {
      "heading": "Reaffirmation of Anvar P.V. and Overruling of Shafhi Mohammad",
      "explanation": "Nariman, J. affirmed Anvar P.V. and overruled Shafhi Mohammad. The certificate under Section 65B(4) is an absolute mandatory condition precedent for the admissibility of electronic records by way of secondary evidence."
    },
    {
      "heading": "Distinction between primary and secondary electronic records",
      "explanation": "The Court clarified that if the original device itself (the computer, phone, or digital recorder on which the evidence was first created) is brought to court and played, no Section 65B certificate is required because it is primary evidence under Section 62."
    },
    {
      "heading": "Power of the court to summon certificates",
      "explanation": "Where a party cannot obtain a certificate because the device is held by an uncooperative third party, the trial court has power under Section 91 CrPC / Section 165 Evidence Act / Order 16 CPC to summon the certificate before trial concludes."
    }
  ],
  "decision": "Shafhi Mohammad overruled; Anvar P.V. affirmed; procedural framework for summoning Section 65B certificates established.",
  "holding": "Section 65B(4) certificate is an indispensable requirement for secondary electronic evidence; courts can summon the certificate from the person in lawful control of the device at any stage before trial concludes.",
  "ratioDecidendi": "The requirement of a certificate under Section 65B(4) of the Evidence Act is mandatory for secondary electronic evidence, but the court may direct production of the certificate through its coercive summons powers at any time prior to the completion of trial.",
  "relatedCases": [
    {
      "caseName": "Anvar P.V. v. P.K. Basheer",
      "citation": "(2014) 10 SCC 473",
      "relationship": "Affirmed and clarified",
      "judgmentId": "anvar-pv-2014"
    }
  ],
  "examPoints": [
    "Explicitly overruled Shafhi Mohammad (2018).",
    "Original electronic device does not need a Section 65B certificate.",
    "Defective certificate can be cured before the conclusion of trial under Section 91 CrPC / Section 165 Evidence Act.",
    "High-yield precedent for BSA Section 63 electronic evidence."
  ],
  "mcqs": [
    {
      "id": "arjun-khotkar-mcq-1",
      "question": "Under Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020), is a Section 65B certificate required when the original electronic device itself is produced in court?",
      "options": [
        "Yes, a certificate is always mandatory for all electronic records",
        "No, because the original device is primary evidence under Section 62 and no certificate is required",
        "Only if the original device is a smartphone",
        "Only if the defense raises an objection"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court clarified that where the original physical electronic device itself is produced in court, it constitutes primary evidence and does not require a Section 65B certificate."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2020) 7 SCC 1",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const velloreCitizens1996: Judgment = {
  "id": "vellore-citizens-1996",
  "caseName": "Vellore Citizens' Welfare Forum v. Union of India",
  "shortName": "Vellore Citizens",
  "court": "Supreme Court of India",
  "jurisdiction": "Environmental Law",
  "year": 1996,
  "citation": "(1996) 5 SCC 647",
  "bench": "3-Judge Bench",
  "judges": [
    "Kuldip Singh, J.",
    "Faizan Uddin, J.",
    "K. Venkataswami, J."
  ],
  "subject": "Environment",
  "topics": [
    "Precautionary Principle",
    "Polluter Pays Principle",
    "Sustainable Development",
    "Article 21",
    "Tanneries"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Environment",
    "Article 21",
    "Precautionary Principle",
    "Polluter Pays",
    "Vellore"
  ],
  "summary": "The Supreme Court formally incorporated the \"Precautionary Principle\" and the \"Polluter Pays Principle\" as essential components of Sustainable Development into the environmental law of India under Article 21 of the Constitution. Intervening against massive untreated toxic effluents discharged by tanneries in Tamil Nadu, the Court ordered closure of non-compliant units and instituted pollution fines.",
  "facts": [
    "Over 900 tanneries in the State of Tamil Nadu discharged enormous quantities of untreated toxic industrial effluent containing chromium and other chemicals into agricultural fields, roadside drains, and the Palar River.",
    "The effluent contaminated groundwater, rendering drinking water unpotable and ruining over 35,000 hectares of fertile agricultural land.",
    "A citizens’ forum filed a PIL under Article 32 seeking judicial intervention to protect drinking water and public health."
  ],
  "issues": [
    "Whether tanneries can be permitted to continue operations causing irreversible environmental degradation to groundwater.",
    "Whether the \"Precautionary Principle\" and the \"Polluter Pays Principle\" are part of the environmental law of India under Articles 21, 47, 48A, and 51A(g)."
  ],
  "arguments": {
    "appellant": [
      "The right to pollution-free water and environment is an integral aspect of the right to life under Article 21.",
      "Economic profits and export earnings from leather goods cannot outweigh human life and ecological destruction."
    ],
    "respondent": [
      "Tanneries are major foreign exchange earners employing thousands of workers; setting up common effluent treatment plants (CETPs) requires substantial capital and time."
    ]
  },
  "provisions": [
    {
      "actId": "epa",
      "actName": "Environment (Protection) Act, 1986",
      "provisionId": "epa-s-3",
      "section": "Section 3 & 5",
      "title": "Power of Central Government to take measures to protect and improve environment",
      "subjectSlug": "environment",
      "topicId": "env-polluter-pays"
    },
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21 and 48A",
      "title": "Protection of life and protection and improvement of environment",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    }
  ],
  "reasoning": [
    {
      "heading": "Sustainable Development and the two fundamental principles",
      "explanation": "Kuldip Singh, J. held that Sustainable Development reconciles ecology with development. The Precautionary Principle mandates that the State must anticipate, prevent, and attack the causes of environmental degradation; where there are threats of serious damage, lack of full scientific certainty shall not be used as a reason for postponing cost-effective measures. The burden of proof is on the industrial actor to show its actions are benign."
    },
    {
      "heading": "The Polluter Pays Principle",
      "explanation": "Under the Polluter Pays Principle, the absolute liability for harm to the environment extends not only to compensate the victims of pollution but also the cost of restoring the damaged environmental ecology."
    }
  ],
  "decision": "Tanneries failing to set up effluent treatment plants ordered closed; pollution fine of Rs. 10,000 imposed on each tannery; Madras High Court directed to constitute a \"Green Bench\".",
  "holding": "Precautionary Principle and Polluter Pays Principle are essential features of Sustainable Development and form part of customary international law accepted into Indian law under Article 21.",
  "ratioDecidendi": "The Precautionary Principle and the Polluter Pays Principle are part of the environmental law of India under Article 21; industrial polluters are liable to pay for environmental restitution and victim compensation.",
  "relatedCases": [
    {
      "caseName": "M.C. Mehta v. Union of India (Oleum Gas Leak)",
      "citation": "(1987) 1 SCC 395",
      "relationship": "Precedent on absolute liability",
      "judgmentId": "mc-mehta-oleum-1987"
    },
    {
      "caseName": "M.C. Mehta v. Kamal Nath",
      "citation": "(1997) 1 SCC 388",
      "relationship": "Companion landmark on public trust and pollution fine",
      "judgmentId": "kamal-nath-1997"
    }
  ],
  "examPoints": [
    "Incorporated \"Precautionary Principle\" and \"Polluter Pays Principle\" into Indian environmental jurisprudence.",
    "Shifting of the burden of proof onto the industrial developer to show safety.",
    "Directed High Courts to establish specialized \"Green Benches\"."
  ],
  "mcqs": [
    {
      "id": "vellore-citizens-mcq-1",
      "question": "In Vellore Citizens' Welfare Forum v. Union of India (1996), which two principles were declared to be part of the environmental law of India under Article 21?",
      "options": [
        "Doctrine of Pleasure and Sovereign Immunity",
        "Precautionary Principle and Polluter Pays Principle",
        "Res Judicata and Estoppel",
        "Pith and Substance and Colourable Legislation"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court formally incorporated the Precautionary Principle and the Polluter Pays Principle as essential facets of Article 21 and Sustainable Development."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1996) 5 SCC 647",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const kamalNath1997: Judgment = {
  "id": "kamal-nath-1997",
  "caseName": "M.C. Mehta v. Kamal Nath",
  "shortName": "M.C. Mehta (Kamal Nath)",
  "court": "Supreme Court of India",
  "jurisdiction": "Environmental Law",
  "year": 1997,
  "citation": "(1997) 1 SCC 388",
  "bench": "2-Judge Bench",
  "judges": [
    "Kuldip Singh, J.",
    "S. Saghir Ahmad, J."
  ],
  "subject": "Environment",
  "topics": [
    "Public Trust Doctrine",
    "Beas River",
    "Ecological Restitution",
    "Pollution Fine",
    "Article 21"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Environment",
    "Public Trust Doctrine",
    "Article 21",
    "Kamal Nath",
    "Rivers"
  ],
  "summary": "The Supreme Court applied the ancient Roman law \"Public Trust Doctrine\" to Indian environmental jurisprudence. The Court held that natural resources like rivers, forests, seashores, and air are held by the State as a trustee for the public, and the State cannot convert ecological assets into private commercial ownership. The Court cancelled leases granted to Span Motels and ordered demolition of earthmoving structures built to divert the Beas River.",
  "facts": [
    "Span Motels, a luxury resort in Kullu-Manali in which former Union Environment Minister Kamal Nath and his family held major interests, was granted commercial forest land leases on the banks of the Beas River.",
    "The management used heavy earthmoving bulldozers and built stone embankments to alter the natural course of the Beas River to protect the motel from seasonal flooding, causing massive soil erosion and threatening the riparian ecosystem.",
    "M.C. Mehta brought a PIL under Article 32 based on national newspaper reports of river diversion."
  ],
  "issues": [
    "Whether the State has the power to lease out environmentally fragile riverbanks and forest lands to private commercial enterprises.",
    "Whether the Public Trust Doctrine applies in India to protect natural resources from commercial exploitation."
  ],
  "arguments": {
    "appellant": [
      "Rivers and riverbeds are common heritage held in trust for the public; diverting a river’s natural flow for private motel luxury violates Article 21 and the Public Trust Doctrine."
    ],
    "respondent": [
      "The motel management constructed embankments to protect private property from seasonal flash floods under valid government permissions."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-21",
      "article": "Article 21 and 48A",
      "title": "Right to life and duty of State to protect and improve environment",
      "subjectSlug": "constitution",
      "topicId": "fundamental-rights"
    },
    {
      "actId": "epa",
      "actName": "Environment (Protection) Act, 1986",
      "provisionId": "epa-s-3",
      "section": "Section 3",
      "title": "Power of Central Government to take measures to protect environment",
      "subjectSlug": "environment",
      "topicId": "env-public-trust"
    }
  ],
  "reasoning": [
    {
      "heading": "Application of the Public Trust Doctrine in India",
      "explanation": "Kuldip Singh, J. held that the Public Trust Doctrine is part of the law of the land in India. Natural resources such as air, water, rivers, and forests are of such great importance to the people as a whole that it would be wholly unjustified to make them a subject of private ownership. The State is the trustee and the general public is the beneficiary."
    },
    {
      "heading": "Restitution and exemplary pollution fine",
      "explanation": "The Court held that motel management had interfered with the natural flow of the river. The Court cancelled the commercial leases, directed demolition of unauthorized embankments, and ordered Span Motels to pay for complete ecological restoration."
    }
  ],
  "decision": "Leases cancelled; illegal river structures ordered removed; Span Motels ordered to pay ecological restoration costs and show-cause notice issued for exemplary pollution fine.",
  "holding": "The State holds natural resources in public trust for the citizenry; transferring or altering rivers for private commercial enrichment violates the Public Trust Doctrine and Article 21.",
  "ratioDecidendi": "The Public Trust Doctrine forms part of Indian jurisprudence; the State as trustee is under a legal duty to protect natural resources and cannot alienate them for private commercial purposes.",
  "relatedCases": [
    {
      "caseName": "Vellore Citizens' Welfare Forum v. Union of India",
      "citation": "(1996) 5 SCC 647",
      "relationship": "Precedent on Polluter Pays and ecological restoration",
      "judgmentId": "vellore-citizens-1996"
    },
    {
      "caseName": "M.C. Mehta v. Union of India (Oleum Gas Leak)",
      "citation": "(1987) 1 SCC 395",
      "relationship": "Foundation of absolute environmental liability",
      "judgmentId": "mc-mehta-oleum-1987"
    }
  ],
  "examPoints": [
    "Formally incorporated the \"Public Trust Doctrine\" into Indian law.",
    "Applied to rivers, lakes, forests, and sensitive ecosystems.",
    "Lease granted to Span Motels by the Ministry of Environment quashed as breach of public trust.",
    "Restoration of river ecology funded entirely by the polluter."
  ],
  "mcqs": [
    {
      "id": "kamal-nath-mcq-1",
      "question": "Which legal doctrine was applied by the Supreme Court in M.C. Mehta v. Kamal Nath (1997) to protect the Beas River from commercial encroachment?",
      "options": [
        "Doctrine of Pith and Substance",
        "Public Trust Doctrine",
        "Doctrine of Eclipse",
        "Doctrine of Indoor Management"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court applied the Public Trust Doctrine, holding that natural resources like rivers and forests are held in trust by the State for the public."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (1997) 1 SCC 388",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const satyabrataGhose1954: Judgment = {
  "id": "satyabrata-ghose-1954",
  "caseName": "Satyabrata Ghose v. Mugneeram Bangur & Co.",
  "shortName": "Satyabrata Ghose",
  "court": "Supreme Court of India",
  "jurisdiction": "Contract Law",
  "year": 1954,
  "citation": "AIR 1954 SC 44",
  "bench": "3-Judge Bench",
  "judges": [
    "B.K. Mukherjea, J.",
    "Vivian Bose, J.",
    "Ghulam Hasan, J."
  ],
  "subject": "Contract",
  "topics": [
    "Doctrine of Frustration",
    "Section 56 Contract Act",
    "Supervening Impossibility",
    "Force Majeure"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Contract",
    "Section 56 ICA",
    "Frustration",
    "Impossibility",
    "Satyabrata Ghose"
  ],
  "summary": "The Supreme Court delivered the leading Indian authority on the doctrine of frustration under Section 56 of the Indian Contract Act, 1872. The Court held that \"impossible\" in Section 56 is not confined to literal or physical impossibility, but includes commercial impracticability where an unexpected supervening event destroys the very foundation upon which the parties contracted. However, the temporary wartime requisition of land by the military did not frustrate a long-term development contract.",
  "facts": [
    "Mugneeram Bangur & Co. launched an extensive land development scheme in Greater Calcutta, dividing a large tract of land into residential plots, collecting earnest money deposits, and promising to construct roads and drains before executing final conveyances.",
    "Before roads could be constructed, the military authorities requisitioned the land in November 1941 under Defence of India Rules for wartime military purposes.",
    "The company cancelled the contract, claiming the agreement was frustrated and void under Section 56. The purchaser sued for specific performance."
  ],
  "issues": [
    "What is the scope and meaning of \"impossibility\" under Section 56 of the Indian Contract Act, 1872.",
    "Whether English common law doctrines of frustration apply in India or whether Section 56 is an exhaustive statutory code.",
    "Whether the temporary wartime requisition of land frustrated the long-term contract for sale and development."
  ],
  "arguments": {
    "appellant": [
      "Section 56 is exhaustive and English common law theories of implied terms do not apply.",
      "A temporary wartime requisition does not extinguish title or permanently destroy the subject matter of a long-term land development contract."
    ],
    "respondent": [
      "The military requisition was for an indefinite period, completely preventing the company from constructing roads and drains, frustrating the commercial object."
    ]
  },
  "provisions": [
    {
      "actId": "ica",
      "actName": "Indian Contract Act, 1872",
      "provisionId": "ica-s-56",
      "section": "Section 56",
      "title": "Agreement to do impossible act and contract to do act afterwards becoming impossible or unlawful",
      "subjectSlug": "contract",
      "topicId": "ica-s-51-58"
    }
  ],
  "reasoning": [
    {
      "heading": "Section 56 as an exhaustive statutory code",
      "explanation": "Mukherjea, J. held that Section 56 of the Indian Contract Act is exhaustive. Indian courts need not search for English common law fictions like \"implied terms\" or \"disappearance of foundation\". The statutory test is whether the performance of the act has become impossible or unlawful."
    },
    {
      "heading": "Practical and commercial impossibility",
      "explanation": "The performance of an act may not be physically impossible, but it may be impracticable and useless from the point of view of the object and purpose which the parties had in view. If an untoward event upsets the very foundation upon which the parties rested their bargain, frustration occurs."
    },
    {
      "heading": "Temporary requisition did not frustrate the contract",
      "explanation": "The contract had no fixed time-limit and contemplation was of an extensive scheme that would take years. The military requisition was purely temporary; upon its termination, the road work could resume. Therefore, the contract was not frustrated."
    }
  ],
  "decision": "Contract held NOT frustrated; decree for specific performance affirmed in favor of purchaser.",
  "holding": "Impossibility under Section 56 encompasses commercial impracticability; however, temporary wartime requisition of land does not frustrate a long-term development contract.",
  "ratioDecidendi": "Section 56 of the Indian Contract Act is an exhaustive code on frustration; an unexpected event frustrates a contract only if it completely destroys the underlying basis of the bargain, not if it merely delays performance.",
  "relatedCases": [],
  "examPoints": [
    "Locus classicus on Section 56 Indian Contract Act (Doctrine of Frustration).",
    "Held Section 56 is exhaustive, discarding English \"implied term\" theory.",
    "Defines impossibility beyond physical impossibility to include destruction of commercial foundation.",
    "Temporary government requisition does not necessarily frustrate a land sale contract."
  ],
  "mcqs": [
    {
      "id": "satyabrata-ghose-mcq-1",
      "question": "Under Satyabrata Ghose v. Mugneeram Bangur & Co. (1954), the doctrine of frustration in Indian contract law is governed by:",
      "options": [
        "English common law implied terms theory",
        "Section 56 of the Indian Contract Act, 1872 as an exhaustive code",
        "Article 299 of the Constitution",
        "Section 16 of the Specific Relief Act"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court established that Section 56 of the Indian Contract Act is exhaustive on the doctrine of frustration, superseding English common law rules."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1954 SC 44 / 1954 SCR 310",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const fatehChand1963: Judgment = {
  "id": "fateh-chand-1963",
  "caseName": "Fateh Chand v. Balkishan Dass",
  "shortName": "Fateh Chand",
  "court": "Supreme Court of India",
  "jurisdiction": "Contract Law",
  "year": 1963,
  "citation": "AIR 1963 SC 1405",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "B.P. Sinha, C.J.",
    "J.C. Shah, J.",
    "K.N. Wanchoo, J.",
    "K.C. Das Gupta, J.",
    "N. Rajagopala Ayyangar, J."
  ],
  "subject": "Contract",
  "topics": [
    "Section 74 Contract Act",
    "Liquidated Damages",
    "Earnest Money Forfeiture",
    "Reasonable Compensation",
    "Penalty"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Contract",
    "Section 74 ICA",
    "Earnest Money",
    "Liquidated Damages",
    "Penalty"
  ],
  "summary": "The 5-Judge Constitution Bench delivered the foundational ruling on Section 74 of the Indian Contract Act, 1872. The Court held that Section 74 boldly cuts across the English common law distinction between \"liquidated damages\" and \"penalty.\" In all cases where a sum is named or a penalty is stipulated, the aggrieved party is entitled only to \"reasonable compensation\" not exceeding the amount named, and must prove actual loss unless proof is impossible.",
  "facts": [
    "Balkishan Dass agreed to sell a piece of land and building in Delhi to Fateh Chand for Rs. 1,12,500.",
    "Fateh Chand paid Rs. 1,000 as earnest money and Rs. 24,000 as part payment on taking possession, with the balance to be paid upon execution of the registered sale deed.",
    "The agreement stipulated that if the buyer failed to pay the balance, the earnest money and the Rs. 24,000 part payment would stand forfeited.",
    "The buyer defaulted; the seller rescinded the contract and forfeited the entire Rs. 25,000."
  ],
  "issues": [
    "Whether a contractual covenant authorizing forfeiture of earnest money and advance part payment is governed by Section 74 of the Indian Contract Act.",
    "Whether the seller can forfeit the entire stipulated sum without proving actual loss or damage suffered."
  ],
  "arguments": {
    "appellant": [
      "Section 74 limits relief to reasonable compensation; forfeiting Rs. 25,000 when the seller suffered no loss is an unlawful penalty."
    ],
    "respondent": [
      "Earnest money represents a guarantee for performance and can be forfeited automatically without invoking Section 74."
    ]
  },
  "provisions": [
    {
      "actId": "ica",
      "actName": "Indian Contract Act, 1872",
      "provisionId": "ica-s-74",
      "section": "Section 74",
      "title": "Compensation for breach of contract where penalty stipulated for",
      "subjectSlug": "contract",
      "topicId": "ica-s-73-75"
    }
  ],
  "reasoning": [
    {
      "heading": "Section 74 abolishes English distinction between liquidated damages and penalty",
      "explanation": "Shah, J. held that Section 74 applies to all contracts stipulating an amount to be paid on breach. The aggrieved party receives reasonable compensation not exceeding the amount named, whether it is a penalty or liquidated damages."
    },
    {
      "heading": "Earnest money vs advance part payment",
      "explanation": "While a reasonable amount of earnest money paid as a guarantee of performance may be forfeited, substantial advance payments of price cannot be automatically forfeited without proving loss under Section 74. Since the seller proved no loss, he was allowed to forfeit only the earnest money of Rs. 1,000 plus reasonable compensation for use of the premises."
    }
  ],
  "decision": "Forfeiture of Rs. 24,000 advance struck down; seller entitled only to Rs. 1,000 earnest money plus reasonable mesne profits.",
  "holding": "Section 74 entitles the innocent party only to reasonable compensation not exceeding the penalty named; forfeiture of substantial advance payments without proving loss is unlawful.",
  "ratioDecidendi": "Under Section 74 of the Indian Contract Act, forfeiture of money paid under a contract upon breach must satisfy the test of reasonable compensation, and the distinction between liquidated damages and penalty does not apply in India.",
  "relatedCases": [],
  "examPoints": [
    "Constitution Bench benchmark on Section 74 Indian Contract Act.",
    "Abolition of English common law dichotomy between liquidated damages and penalty in India.",
    "Earnest money is forfeitable only if it is a reasonable guarantee of performance, not an oppressive penalty.",
    "Party claiming damages must prove actual loss unless loss is incapable of assessment."
  ],
  "mcqs": [
    {
      "id": "fateh-chand-mcq-1",
      "question": "Under Fateh Chand v. Balkishan Dass (1963), Section 74 of the Indian Contract Act entitles an aggrieved party to:",
      "options": [
        "The entire stipulated penalty amount automatically without proving loss",
        "Reasonable compensation not exceeding the amount named, whether it is termed a penalty or liquidated damages",
        "Exemplary punitive damages",
        "Specific performance only"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench held that Section 74 entitles the aggrieved party only to reasonable compensation not exceeding the stipulated sum, discarding the English penalty distinction."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1963 SC 1405 / (1964) 1 SCR 515",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const kasturiLal1965: Judgment = {
  "id": "kasturi-lal-1965",
  "caseName": "Kasturi Lal Ralia Ram Jain v. State of U.P.",
  "shortName": "Kasturi Lal",
  "court": "Supreme Court of India",
  "jurisdiction": "Law of Torts / Constitutional Law",
  "year": 1965,
  "citation": "AIR 1965 SC 1039",
  "bench": "5-Judge Constitution Bench",
  "judges": [
    "P.B. Gajendragadkar, C.J.",
    "K.N. Wanchoo, J.",
    "M. Hidayatullah, J.",
    "Raghubar Dayal, J.",
    "J.R. Mudholkar, J."
  ],
  "subject": "Tort",
  "topics": [
    "Sovereign Immunity",
    "State Liability in Tort",
    "Article 300",
    "Police Negligence",
    "Custodial Theft"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Tort",
    "Article 300",
    "Sovereign Immunity",
    "Vicarious Liability",
    "Kasturi Lal"
  ],
  "summary": "The 5-Judge Constitution Bench held that the State is not vicariously liable for tortious acts committed by its public servants in the exercise of delegated sovereign powers. The Court denied compensation to a bullion merchant whose gold was seized by police on suspicion and subsequently stolen by a head constable who absconded to Pakistan. Although followed on Article 300, the harshness of this ruling led the Supreme Court to develop the doctrine of constitutional tort under Article 32.",
  "facts": [
    "Kasturi Lal, a partner in a bullion firm, arrived in Meerut to sell gold and silver. Three police constables seized the gold (over 100 tolas) on suspicion of being stolen property.",
    "The gold was kept in the police malkhana under the custody of Head Constable Mohammad Amir, who misappropriated the gold and fled to Pakistan.",
    "Kasturi Lal sued the State of U.P. for the return of the gold or its value (Rs. 11,075), contending that the State was vicariously liable for the negligence and theft of its police officers."
  ],
  "issues": [
    "Whether the State of U.P. was vicariously liable under Article 300 for the tortious misappropriation of seized property by its police servants.",
    "What constitutes the exercise of a \"sovereign function\" shielding the State from civil liability in tort."
  ],
  "arguments": {
    "appellant": [
      "The relationship between police and citizen regarding seized goods is that of a bailee; failure to return goods due to theft by servants makes the State liable.",
      "Sovereign immunity is an antiquated monarchical doctrine incompatible with a democratic republic."
    ],
    "respondent": [
      "Arresting suspects and seizing property under the Code of Criminal Procedure are delegated sovereign acts for which the State cannot be sued under Article 300."
    ]
  },
  "provisions": [
    {
      "actId": "constitution",
      "actName": "Constitution of India",
      "provisionId": "art-300",
      "article": "Article 300",
      "title": "Suits and proceedings (Liability of the State)",
      "subjectSlug": "tort",
      "topicId": "tort-capacity-state-liability"
    }
  ],
  "reasoning": [
    {
      "heading": "Distinction between sovereign and non-sovereign functions",
      "explanation": "Gajendragadkar, C.J. traced the historical liability of the East India Company from the P&O Steam Navigation Co. case (1861). The Court held that if a tortious act is committed by a public servant in the discharge of statutory duties which are referable to the exercise of sovereign power (such as maintaining law and order or seizing property), the State is immune from liability."
    },
    {
      "heading": "Sovereign nature of arrest and seizure",
      "explanation": "The power to arrest, search, and seize property under the CrPC can only be exercised by police officers acting as sovereign agents. Since the seizure was in exercise of sovereign power, the State cannot be held vicariously liable for the head constable’s crime."
    }
  ],
  "decision": "Suit against the State dismissed on the ground of sovereign immunity; Court urged Parliament to enact legislation defining State liability.",
  "holding": "The State is immune from tort liability for acts committed by its servants in the course of sovereign functions like arrest and police seizure.",
  "ratioDecidendi": "Under Article 300 of the Constitution, the State is not vicariously liable in tort for the negligence or criminal acts of its public servants if the act was committed in the discharge of sovereign functions.",
  "relatedCases": [
    {
      "caseName": "Rudul Sah v. State of Bihar",
      "citation": "(1983) 4 SCC 141",
      "relationship": "Bypassed Kasturi Lal sovereign immunity via public law compensation under Article 32",
      "judgmentId": "rudul-sah-1983"
    },
    {
      "caseName": "Bhim Singh, MLA v. State of J&K",
      "citation": "(1985) 4 SCC 677",
      "relationship": "Awarded damages for police tort under writ jurisdiction",
      "judgmentId": "bhim-singh-1985"
    }
  ],
  "examPoints": [
    "Benchmark decision on Sovereign Immunity under Article 300.",
    "Held police power of arrest and seizure is a sovereign function shielding the State from civil tort liability.",
    "Led to subsequent bypass through public law constitutional tort under Article 32/226 (Rudul Sah, Nilabati Behera)."
  ],
  "mcqs": [
    {
      "id": "kasturi-lal-mcq-1",
      "question": "In Kasturi Lal Ralia Ram Jain v. State of U.P. (1965), why was the State held NOT liable for the theft of seized gold by a police constable?",
      "options": [
        "Because the plaintiff could not prove ownership of the gold",
        "Because the seizure of property by police is a sovereign function conferring immunity under Article 300",
        "Because the suit was barred by limitation",
        "Because the gold was recovered from Pakistan"
      ],
      "correctIndex": 1,
      "explanation": "The Constitution Bench held that police search and seizure powers are sovereign functions, immunizing the State from vicarious liability in tort under Article 300."
    }
  ],
  "source": {
    "type": "document",
    "title": "AIR 1965 SC 1039 / (1965) 1 SCR 375",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const jacobMathew2005: Judgment = {
  "id": "jacob-mathew-2005",
  "caseName": "Jacob Mathew v. State of Punjab",
  "shortName": "Jacob Mathew",
  "court": "Supreme Court of India",
  "jurisdiction": "Criminal Law / Law of Torts",
  "year": 2005,
  "citation": "(2005) 6 SCC 1",
  "bench": "3-Judge Bench",
  "judges": [
    "R.C. Lahoti, C.J.",
    "G.P. Mathur, J.",
    "P.K. Balasubramanyan, J."
  ],
  "subject": "Tort",
  "topics": [
    "Medical Negligence",
    "Section 304A IPC",
    "Bolam Test",
    "Gross Negligence",
    "Safeguards Against Arrest"
  ],
  "tags": [
    "AIBE",
    "Judiciary",
    "Tort",
    "Negligence",
    "Medical Negligence",
    "Section 304A IPC",
    "BNS 106"
  ],
  "summary": "The 3-Judge Bench established authoritative guidelines governing medical negligence in criminal and tort law in India. Adopting the Bolam test, the Court held that a medical professional can be held criminally liable under Section 304A IPC (now Section 106 BNS) only if the negligence is \"gross\" and reckless, of a degree far higher than mere civil negligence. The Court laid down mandatory procedural safeguards prohibiting routine arrest of doctors.",
  "facts": [
    "A cancer patient admitted in a private hospital suffered acute breathing distress. The resident doctors attempted to connect an oxygen cylinder, but the cylinder was empty and no alternative cylinder was available.",
    "The patient died, and the son lodged an FIR under Section 304A/34 IPC against Dr. Jacob Mathew and other doctors for causing death by negligence.",
    "Dr. Mathew moved the High Court and Supreme Court to quash the criminal proceedings, contending that simple error or equipment failure cannot sustain a criminal charge of medical negligence."
  ],
  "issues": [
    "What is the standard of negligence required to establish criminal liability of a medical professional under Section 304A IPC.",
    "What procedural safeguards must be observed by the police before arresting or prosecuting medical professionals for criminal negligence."
  ],
  "arguments": {
    "appellant": [
      "A doctor cannot guarantee success; criminal liability requires gross negligence or recklessness, not mere error of judgment or administrative lapses.",
      "Doctors face indiscriminate criminal prosecution by disgruntled relatives, hampering their ability to make critical clinical decisions."
    ],
    "respondent": [
      "Failing to maintain a functional oxygen cylinder in an emergency is culpable gross negligence causing the patient’s death."
    ]
  },
  "provisions": [
    {
      "actId": "ipc",
      "actName": "Indian Penal Code, 1860",
      "provisionId": "ipc-s-304a",
      "section": "Section 304A (BNS s. 106)",
      "title": "Causing death by negligence",
      "subjectSlug": "bns",
      "topicId": "s-103"
    },
    {
      "actId": "tort-act",
      "actName": "Law of Torts",
      "provisionId": "tort-negligence",
      "title": "Tortious Negligence and Medical Malpractice",
      "subjectSlug": "tort",
      "topicId": "negligence"
    }
  ],
  "reasoning": [
    {
      "heading": "Adoption of the Bolam Test in Indian Law",
      "explanation": "Lahoti, C.J. affirmed that a medical practitioner is not expected to possess extraordinary skill. It is sufficient if he exercises an ordinary degree of competent professional skill (the Bolam test). A simple lack of care or accident is not negligence."
    },
    {
      "heading": "Distinction between civil and criminal negligence",
      "explanation": "To sustain a charge under Section 304A IPC, the degree of negligence must be gross, reckless, and flagrant—showing such disregard for life and safety as to amount to a crime against the State. Negligence in tort law is actionable on a preponderance of probabilities, but criminal negligence requires proof beyond reasonable doubt of gross recklessness."
    },
    {
      "heading": "Mandatory arrest safeguards for doctors",
      "explanation": "The Court directed that private complaints against doctors should not be entertained unless supported by a credible opinion from another competent independent doctor. Investigating officers should not arrest doctors in a routine manner unless necessary for investigation."
    }
  ],
  "decision": "Proceedings against Dr. Jacob Mathew quashed; binding guidelines issued regulating medical negligence prosecution.",
  "holding": "Criminal prosecution of doctors under Section 304A IPC requires proof of gross negligence; police cannot arrest a doctor without an independent expert medical opinion confirming gross negligence.",
  "ratioDecidendi": "A doctor cannot be held criminally liable under Section 304A IPC unless the negligence is gross and reckless; an independent medical expert opinion is a mandatory prerequisite before initiating criminal process or arrest.",
  "relatedCases": [],
  "examPoints": [
    "Incorporated the \"Bolam Test\" into Indian medical negligence law.",
    "Strict distinction between civil negligence and gross criminal negligence under Section 304A IPC / Section 106 BNS.",
    "Mandatory independent medical opinion from a government doctor before registering FIR or arresting a physician."
  ],
  "mcqs": [
    {
      "id": "jacob-mathew-mcq-1",
      "question": "Under Jacob Mathew v. State of Punjab (2005), what degree of negligence is required to convict a doctor under Section 304A IPC?",
      "options": [
        "Ordinary civil negligence",
        "Gross, reckless, and flagrant negligence",
        "Slight error of clinical judgment",
        "Administrative non-compliance"
      ],
      "correctIndex": 1,
      "explanation": "The Supreme Court ruled that criminal liability under Section 304A IPC requires gross, reckless, and flagrant negligence, of a degree far higher than ordinary civil negligence."
    }
  ],
  "source": {
    "type": "document",
    "title": "Supreme Court Cases (2005) 6 SCC 1",
    "extractionMethod": "manual",
    "verified": true
  },
  "status": "reviewed"
}

export const FAMOUS_LANDMARKS_BATCH_9: Judgment[] = [
  sankariPrasad1951,
  sajjanSingh1965,
  wamanRao1981,
  champakamDorairajan1951,
  balaji1963,
  devadasan1964,
  nmThomas1976,
  pradeepJain1984,
  stStephens1992,
  spGupta1981,
  romeshThappar1950,
  brijBhushan1950,
  sakalPapers1962,
  bennettColeman1972,
  satwantSingh1967,
  kharakSingh1963,
  sunilBatra1978,
  sunilBatra1980,
  rudulSah1983,
  bhimSingh1985,
  lChandraKumar1997,
  rupaAshokHurra2002,
  daryao1961,
  nawabHussain1977,
  manoharLalChopra1962,
  shahBano1985,
  danialLatifi2001,
  sarlaMudgal1995,
  githaHariharan1999,
  dastane1975,
  babuSingh1978,
  motiRam1978,
  arneshKumar2014,
  satenderKumarAntil2022,
  joginderKumar1994,
  bhajanLal1992,
  gianSingh2012,
  kmNanavati1962,
  sharadBirdhichand1984,
  deomanUpadhyaya1960,
  aghnooNagesia1966,
  khushalRao1958,
  anvarPv2014,
  arjunPanditrao2020,
  velloreCitizens1996,
  kamalNath1997,
  satyabrataGhose1954,
  fatehChand1963,
  kasturiLal1965,
  jacobMathew2005,
]
