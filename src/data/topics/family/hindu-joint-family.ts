import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Family Law – II, Unit I: Hindu joint family and Mitakshara coparcenary. Connects to Section 6 of the Hindu Succession Act, 1956 after the 2005 amendment.

Introduction
A Hindu joint family is wider than a coparcenary. The joint family includes persons lineally descended from a common ancestor, their wives and unmarried daughters. The Mitakshara coparcenary is the narrower body with a birthright interest in joint family property.

Mitakshara coparcenary
After the Hindu Succession (Amendment) Act, 2005, the daughter of a coparcener is a coparcener by birth in the same manner as a son (s. 6 HSA). Coparceners may claim partition.

Joint family property and karta
Ancestral property and property blended with ancestral property. The karta manages the family; may alienate for legal necessity or benefit of the estate within legal limits.

Partition
Severance of status and division of property. Daughters as coparceners share on partition subject to s. 6 and Vineeta Sharma on temporal operation.

Dayabhaga note
No Mitakshara-type birthright coparcenary — do not apply Mitakshara rules to Dayabhaga facts.

Current-law close
Cite Mitakshara concepts and Section 6 of the Hindu Succession Act, 1956 (2005 amendment).`

export default {
  glance:
    'FL-II Unit I — Mitakshara joint family vs coparcenary; karta; ancestral property; partition; daughter as coparcener (HSA s. 6, 2005).',
  study,
  examples: [
    {
      id: 'hjf-ex-1',
      title: 'Example — daughter as coparcener',
      description:
        'Mitakshara family of father, son and daughter after 2005. Daughter is a coparcener by birth under s. 6 HSA.',
    },
  ],
  hypotheticals: [
    {
      id: 'hjf-hypo',
      title: 'Classroom problem — legal necessity',
      facts: 'Karta sells joint family land to pay urgent family debts and marry a daughter. Adult coparcener challenges.',
      question: 'When is the sale binding?',
      applicableLaw: 'Mitakshara law of karta’s power; legal necessity.',
      analysis: 'Karta may alienate for legal necessity or benefit of the estate. Genuine family debts and daughter’s marriage can amount to necessity.',
      conclusion: 'If necessity is proved, the sale binds; else it is vulnerable.',
    },
  ],
  distinctions: [
    {
      id: 'hjf-dist',
      title: 'Joint family vs Coparcenary',
      left: 'Joint family',
      right: 'Coparcenary',
      rows: [
        { point: 'Width', left: 'Wider unit', right: 'Narrower birthright group' },
        { point: 'Interest', left: 'Common family relations', right: 'Fluctuating ownership by birth' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'hjf-m1',
      trap: 'Every Hindu family is automatically a coparcenary.',
      correction: 'Joint family is wider; coparcenary requires Mitakshara birthright (including daughters under s. 6).',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'hjf-q10',
      marks: 10,
      question: 'Explain the Mitakshara joint family and the effect of the 2005 amendment.',
      answer:
        'Introduction. Joint family vs coparcenary. Ancestral property and karta. s. 6 HSA 2005 — daughter as coparcener by birth. Conclusion.',
      explanation: 'Must say coparcener by birth in the same manner as a son.',
    },
    {
      id: 'hjf-q16',
      marks: 16,
      question: 'Discuss the powers of the karta and partition after the 2005 amendment.',
      answer:
        'Introduction. Karta’s powers and legal necessity. Partition and severance. Daughters’ shares post-2005. Vineeta Sharma if relevant. Conclusion with HSA citation.',
      explanation: 'Necessity + 2005 amendment.',
    },
  ],
  cases: [
    {
      name: 'Vineeta Sharma v. Rakesh Sharma',
      year: 2020,
      citation: '(2020) 9 SCC 1',
      holding: 'Authoritative on daughters’ coparcenary rights under s. 6 HSA after 2005.',
    },
  ],
  bareActPointers: ['Hindu Succession Act, 1956 — s. 6', 'Hindu Succession (Amendment) Act, 2005'],
  examTips: ['Separate joint family from coparcenary.', 'Always mention s. 6 HSA 2005 for daughters.'],
  revisionPoints: [
    'Joint family ≠ coparcenary.',
    'Karta — necessity / benefit of estate.',
    'Daughter = coparcener by birth (s. 6 HSA 2005).',
  ],
} satisfies TopicContent
