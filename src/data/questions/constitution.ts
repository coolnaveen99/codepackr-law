import { McqQuestion } from '../../types'

export const CONSTITUTION_QUESTIONS: McqQuestion[] = [
  {
    id: 'const-1',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'Which Article of the Constitution of India provides for the remedy of enforcement of Fundamental Rights by moving the Supreme Court directly?',
    options: [
      'Article 32',
      'Article 226',
      'Article 136',
      'Article 142'
    ],
    correctIndex: 0,
    bareActSection: 'Article 32, Constitution of India',
    explanation: 'Article 32 guarantees the right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by Part III. Dr. B.R. Ambedkar famously referred to Article 32 as the "heart and soul" of the Constitution.',
    examSource: 'AIBE XVII & Delhi Judiciary',
    difficulty: 'easy'
  },
  {
    id: 'const-2',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'The doctrine of "Basic Structure" was expounded by the Supreme Court of India in which landmark case?',
    options: [
      'Golaknath v. State of Punjab (1967)',
      'Kesavananda Bharati v. State of Kerala (1973)',
      'Minerva Mills v. Union of India (1980)',
      'S.R. Bommai v. Union of India (1994)'
    ],
    correctIndex: 1,
    bareActSection: 'Article 368 & Part III, Constitution of India',
    explanation: 'In Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225, a 13-judge Constitutional bench held by a 7:6 majority that while Parliament has wide power to amend the Constitution under Article 368, it cannot alter or destroy its "Basic Structure".',
    examSource: 'AIBE XVI / UP PCS(J)',
    difficulty: 'easy'
  },
  {
    id: 'const-3',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'Under Article 21, the Supreme Court declared the "Right to Privacy" as an intrinsic part of the right to life and personal liberty in:',
    options: [
      'K.S. Puttaswamy v. Union of India (2017)',
      'A.K. Gopalan v. State of Madras (1950)',
      'M.P. Sharma v. Satish Chandra (1954)',
      'Kharak Singh v. State of U.P. (1963)'
    ],
    correctIndex: 0,
    bareActSection: 'Article 21, Constitution of India',
    explanation: 'A unanimous 9-judge Constitution Bench in Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) overruled M.P. Sharma and Kharak Singh to hold that the Right to Privacy is protected as an intrinsic element of Article 21 and Part III freedoms.',
    examSource: 'AIBE XVIII',
    difficulty: 'medium'
  },
  {
    id: 'const-4',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'The power of the High Court to issue prerogative writs under Article 226 is wider than the Supreme Court under Article 32 because:',
    options: [
      'High Courts can hear appeals from Supreme Court',
      'Article 226 permits writs for fundamental rights AND for "any other purpose"',
      'High Court orders cannot be reviewed',
      'Article 32 does not allow Habeas Corpus'
    ],
    correctIndex: 1,
    bareActSection: 'Article 226 vs Article 32',
    explanation: 'Under Article 32, writs can be issued exclusively for the enforcement of Part III Fundamental Rights. Under Article 226, the High Court may issue directions or writs for enforcement of Fundamental Rights as well as for "any other purpose" (non-fundamental legal rights).',
    examSource: 'AIBE XV & MP Judiciary',
    difficulty: 'medium'
  },
  {
    id: 'const-5',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'Which constitutional amendment inserted Article 21A (Right to Education) into the Constitution of India?',
    options: [
      '42nd Amendment Act, 1976',
      '44th Amendment Act, 1978',
      '86th Amendment Act, 2002',
      '91st Amendment Act, 2003'
    ],
    correctIndex: 2,
    bareActSection: 'Article 21A & 86th Constitutional Amendment',
    explanation: 'The 86th Constitutional Amendment Act, 2002 inserted Article 21A, providing that the State shall provide free and compulsory education to all children aged 6 to 14 years in such manner as the State may, by law, determine.',
    examSource: 'AIBE XIV',
    difficulty: 'easy'
  },
  {
    id: 'const-6',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'Under Article 14, the "Doctrine of Arbitrariness" as an antithesis to equality was formulated primarily by Justice P.N. Bhagwati in:',
    options: [
      'E.P. Royappa v. State of Tamil Nadu (1974)',
      'State of W.B. v. Anwar Ali Sarkar (1952)',
      'Indra Sawhney v. Union of India (1992)',
      'R.K. Garg v. Union of India (1981)'
    ],
    correctIndex: 0,
    bareActSection: 'Article 14, Constitution of India',
    explanation: 'In E.P. Royappa v. State of Tamil Nadu (1974), Bhagwati J. laid down the new dynamic concept of equality: "Equality is a dynamic concept with many aspects and dimensions... Equality and arbitrariness are sworn enemies; one belongs to the rule of law in a republic while the other to the whim and caprice of an absolute monarch."',
    examSource: 'Judiciary Prelims',
    difficulty: 'hard'
  },
  {
    id: 'const-7',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'Which Article of the Constitution confers Advisory Jurisdiction on the Supreme Court of India?',
    options: [
      'Article 131',
      'Article 136',
      'Article 141',
      'Article 143'
    ],
    correctIndex: 3,
    bareActSection: 'Article 143, Constitution of India',
    explanation: 'Article 143 empowers the President of India to refer any question of law or fact of public importance to the Supreme Court for its advisory opinion. The opinion rendered under Article 143 is advisory and not binding on the President.',
    examSource: 'AIBE XVII',
    difficulty: 'easy'
  },
  {
    id: 'const-8',
    subject: 'constitution',
    subjectLabel: 'Constitutional Law',
    question: 'Protection against Double Jeopardy is enshrined under which clause of the Constitution of India?',
    options: [
      'Article 20(1)',
      'Article 20(2)',
      'Article 20(3)',
      'Article 22(1)'
    ],
    correctIndex: 1,
    bareActSection: 'Article 20(2), Constitution of India',
    explanation: 'Article 20(2) states: "No person shall be prosecuted and punished for the same offence more than once." Article 20(1) deals with ex-post facto laws, and Article 20(3) deals with protection against self-incrimination.',
    examSource: 'AIBE XVI / Rajasthan Judiciary',
    difficulty: 'medium'
  }
]
