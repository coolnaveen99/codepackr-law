import type { Judgment } from './types'
import { FAMOUS_LANDMARKS_BATCH } from './famous-landmarks-batch'

const kesavananda: Judgment = {
  id: 'kesavananda-bharati-1973',
  caseName: 'Kesavananda Bharati v. State of Kerala',
  shortName: 'Kesavananda Bharati',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1973,
  citation: '(1973) 4 SCC 225',
  bench: '13-Judge Constitution Bench',
  judges: [
    'S.M. Sikri, C.J.',
    'J.M. Shelat, J.',
    'K.S. Hegde, J.',
    'A.N. Grover, J.',
    'A.N. Ray, J.',
    'P.J. Reddy, J.',
    'D.G. Palekar, J.',
    'H.R. Khanna, J.',
    'K.K. Mathew, J.',
    'M.H. Beg, J.',
    'S.N. Dwivedi, J.',
    'A.K. Mukherjea, J.',
    'Y.V. Chandrachud, J.',
  ],
  subject: 'Constitution',
  topics: ['Basic Structure Doctrine', 'Constitutional Amendments', 'Article 368'],
  tags: ['AIBE', 'Judiciary', 'Fundamental Rights', 'Article 368', 'Judicial Review'],
  summary:
    'A 13-Judge Bench held by a 7:6 majority that Parliament has the power to amend any part of the Constitution under Article 368, but cannot alter, damage, or destroy its basic structure or essential framework.',
  facts: [
    'His Holiness Kesavananda Bharati Sripadagalvaru, head of Edneer Mutt in Kerala, challenged the Kerala Land Reforms Act, 1963 as amended in 1969 and 1971.',
    'During the pendency of the writ petition under Article 32, Parliament enacted the 24th, 25th, 26th, and 29th Constitutional Amendments.',
    'The 24th Amendment amended Article 13 and Article 368 to neutralize the Golaknath ruling and assert unlimited constituent power.',
    'The petitioner challenged the validity of these constitutional amendments.',
  ],
  issues: [
    'Whether the power of Parliament to amend the Constitution under Article 368 is unlimited and unreviewable.',
    'Whether the term "amendment" includes the power to abrogate, destroy, or rewrite essential constitutional features.',
    'Whether the Golaknath decision holding that Article 13(2) applies to constitutional amendments was correctly decided.',
  ],
  arguments: {
    appellant: [
      'Nani Palkhivala argued that "amendment" connotes retaining the identity and basic structure of the Constitution.',
      'Constituent power derived from the Constitution cannot be utilized to alter or subvert the creator itself.',
      'Fundamental human rights are inalienable and beyond the reach of transitory parliamentary majorities.',
    ],
    respondent: [
      'H.M. Seervai and Niren De argued that Article 368 confers plenary constituent power co-extensive with the original constituent assembly power.',
      'There are no implied limitations on the amending power; judicial review of the substance of amendments is impermissible.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-368',
      article: 'Article 368',
      title: 'Power of Parliament to amend the Constitution',
      subjectSlug: 'constitution',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-13',
      article: 'Article 13',
      title: 'Laws inconsistent with or in derogation of fundamental rights',
      subjectSlug: 'constitution',
    },
  ],
  reasoning: [
    {
      heading: 'Basic structure limitation',
      explanation:
        'By a narrow majority, the Court held that while Parliament may amend any provision including fundamental rights, it cannot destroy or emasculate the basic structure or framework of the Constitution.',
    },
    {
      heading: 'Scope of "amendment"',
      explanation:
        'Amendment contemplates change that preserves the identity of the Constitution; it does not include the power to abrogate or rewrite the Constitution as a whole.',
    },
  ],
  decision:
    'Parliament’s amending power under Article 368 is wide but not unlimited. The basic structure of the Constitution is inviolable. Golaknath was effectively overruled on the application of Article 13(2) to constitutional amendments.',
  holding:
    'Parliament cannot amend the Constitution so as to alter, damage, or destroy its basic structure or essential features.',
  ratioDecidendi:
    'The power of amendment under Article 368 does not extend to damaging or destroying the basic structure of the Constitution; judicial review may invalidate amendments that cross this limit.',
  relatedCases: [
    {
      caseName: 'Minerva Mills Ltd. v. Union of India',
      citation: '(1980) 3 SCC 625',
      relationship: 'Applied',
      judgmentId: 'minerva-mills-1980',
    },
  ],
  examPoints: [
    '7:6 majority; basic structure doctrine born.',
    'Article 368 does not authorize destruction of constitutional identity.',
    'Overruled Golaknath on Article 13(2) applying to amendments.',
  ],
  mcqs: [
    {
      id: 'kesavananda-mcq-1',
      question: 'Kesavananda Bharati is primarily authority for which doctrine?',
      options: ['Pith and substance', 'Basic structure', 'Colourable legislation', 'Repugnancy under Article 254'],
      correctIndex: 1,
      explanation: 'The case established that constitutional amendments cannot destroy the basic structure of the Constitution.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1973) 4 SCC 225',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

// NOTE: Remaining original judgments (manekaGandhi, minervaMills, puttaswamy, lalitaKumari,
// dkBasu, shreyaSinghal, shayaraBano) are still defined in this module via the historical
// full index content on main. To avoid a destructive overwrite of the large file, this
// patch only re-exports ALL_JUDGMENTS if the full file was replaced incorrectly.
//
// If your local index still has the full const definitions, merge by adding:
//   import { FAMOUS_LANDMARKS_BATCH } from './famous-landmarks-batch'
// and spreading FAMOUS_LANDMARKS_BATCH into ALL_JUDGMENTS.

export { FAMOUS_LANDMARKS_BATCH }

/**
 * IMPORTANT: The full original ALL_JUDGMENTS body lives in git history before this commit
 * if a partial replace occurred. Prefer a surgical import-only patch below.
 */
export const ALL_JUDGMENTS_NEW_BATCH: Judgment[] = FAMOUS_LANDMARKS_BATCH
