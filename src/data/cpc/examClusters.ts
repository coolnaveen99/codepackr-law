import type { CpcCase, CpcExamNote } from './examBank'

export type ClusterPack = {
  match: string[]
  cases: CpcCase[]
  neighbour: string
  trap: string
  correction: string
  extraEssentials: string[]
}

export const CLUSTER_PACKS: ClusterPack[] = [
  {
    match: ['preliminary'],
    cases: [{ name: 'State of W.B. v. Debabrata Dutta', holding: 'Definition and extent questions are read with s. 2 and the First Schedule together.' }],
    neighbour: 's. 2 definitions feed every later heading.',
    trap: 'Ignoring s. 2 when a later section uses a defined word such as decree, order, or mesne profits.',
    correction: 'Open s. 2, then apply the later section.',
    extraEssentials: ['Check whether the word is defined in s. 2', 'The Code extends subject to s. 1'],
  },
  {
    match: ['jurisdiction', 'res judicata'],
    cases: [
      { name: 'Dhulabhai v. State of M.P.', year: 1968, citation: 'AIR 1969 SC 78', holding: 'Exclusion of civil jurisdiction is construed strictly.' },
      { name: 'Hope Plantations Ltd. v. Taluk Land Board', year: 1999, citation: '(1999) 5 SCC 590', holding: 'Finality is the policy behind res judicata.' },
    ],
    neighbour: 's. 9 cognisance; s. 10 stay; s. 11 bar; ss. 13–14 foreign judgments.',
    trap: 'Mixing cognisance (s. 9) with venue (ss. 15–20).',
    correction: 'First ask: can any civil court hear this? Then ask: which court.',
    extraEssentials: ['Civil nature', 'Competence of the court', 'Same parties / same matter where stay or bar is in issue'],
  },
  {
    match: ['place of suing'],
    cases: [
      { name: 'ABC Laminart Pvt. Ltd. v. A.P. Agencies', year: 1989, citation: 'AIR 1989 SC 1239', holding: 'Cause of action may arise in part; ouster clauses are strict.' },
      { name: 'Pathumma v. Kuntalan Kutty', year: 1981, citation: 'AIR 1981 SC 1683', holding: 'Objection to place of suing must be taken in time under s. 21.' },
    ],
    neighbour: 's. 16 property suits; s. 20 residual; s. 21 objection.',
    trap: 'Filing a title suit in the defendant’s city under s. 20.',
    correction: 'Immovable property → ss. 16–17. Residual suits → s. 20.',
    extraEssentials: ['Identify the class of suit', 'Name the section that actually confers venue', 'Ask whether objection was taken at the first opportunity (s. 21)'],
  },
  {
    match: ['transfer'],
    cases: [{ name: 'Indian Overseas Bank v. Chemical Construction Co.', holding: 'Transfer under ss. 22–25 is for convenience and ends of justice, not forum-shopping.' }],
    neighbour: 's. 24 High Court / District Court; s. 25 Supreme Court.',
    trap: 'Treating transfer as an appeal.',
    correction: 'Transfer moves the pending case. It does not decide merits.',
    extraEssentials: ['Which court is asked to transfer', 'Balance of convenience and risk of conflicting decrees'],
  },
  {
    match: ['institution', 'summons'],
    cases: [{ name: 'Salem Advocate Bar Association v. Union of India', year: 2005, citation: '(2005) 6 SCC 344', holding: 'Institution, service and case-management reforms after the 1999/2002 amendments must be worked in letter.' }],
    neighbour: 's. 26 + Order IV; service is Order V.',
    trap: 'Assuming a suit starts when the draft plaint is typed.',
    correction: 'Institution is presentation as required by s. 26 / Order IV, with verification.',
    extraEssentials: ['Plaint presented', 'Service of summons', 'Consequence of non-service is not an automatic decree'],
  },
  {
    match: ['judgment', 'interest', 'costs'],
    cases: [
      { name: 'Central Bank of India v. Ravindra', year: 2002, citation: '(2002) 1 SCC 367', holding: 'Interest under s. 34 is discretionary and must be reasoned.' },
    ],
    neighbour: 's. 33 judgment/decree; s. 34 interest; s. 35 costs; Order XX.',
    trap: 'Writing that interest and costs are automatic at 18%.',
    correction: 's. 34 and s. 35 are discretion with reasons.',
    extraEssentials: ['Decree must follow the judgment', 'Interest period: pre-suit / pendente lite / post-decree', 'Costs follow the event unless otherwise ordered'],
  },
  {
    match: ['execution'],
    cases: [
      { name: 'Harnandrai Badridas v. Debidutt Bhagwati Prasad', year: 1973, citation: 'AIR 1973 SC 2423', holding: 'Execution questions stay inside s. 47 / Order XXI.' },
      { name: 'Jolly George Varghese v. Bank of Cochin', year: 1980, citation: 'AIR 1980 SC 470', holding: 'Arrest in execution of a money decree is not a tool to punish honest poverty.' },
    ],
    neighbour: 's. 47 questions; s. 51 modes; s. 60 attachable property; Order XXI.',
    trap: 'Filing a new suit to enforce the same decree.',
    correction: 'Execute. Do not re-litigate.',
    extraEssentials: ['Who may execute', 'Which court', 'Which mode (s. 51)', 'What property can be touched (s. 60)'],
  },
  {
    match: ['commission'],
    cases: [{ name: 'Salem Advocate Bar Association v. Union of India', year: 2005, holding: 'Commissions and case management are tools to shorten trial, not to outsource the judgment.' }],
    neighbour: 'ss. 75–78; Order XXVI.',
    trap: 'Treating a commissioner’s report as a decree.',
    correction: 'The report is evidence. The court still decides.',
    extraEssentials: ['Purpose of the commission', 'Which court issues it', 'How the report is used'],
  },
  {
    match: ['government'],
    cases: [{ name: 'Bihari Chowdhary v. State of Bihar', year: 1984, citation: 'AIR 1984 SC 1043', holding: 's. 80 notice is mandatory where it applies.' }],
    neighbour: 's. 79 parties; s. 80 notice; Order XXVII.',
    trap: 'Suing “Government” without naming the Union or the State as s. 79 requires.',
    correction: 'Correct party + notice + two months, unless the proviso for urgent relief is used correctly.',
    extraEssentials: ['Correct description of the State', 'Notice contents', 'Urgent-relief proviso'],
  },
  {
    match: ['foreign', 'interpleader', 'special proceedings', 'public nuisances', 'special case'],
    cases: [{ name: 'Afcons Infrastructure Ltd. v. Cherian Varkey Construction', year: 2010, citation: '(2010) 8 SCC 24', holding: 's. 89 is a referral provision; the chosen ADR statute then applies.' }],
    neighbour: 's. 88 interpleader / Order XXXV; s. 89 ADR; s. 92 public charities.',
    trap: 'Using s. 92 as a private title suit.',
    correction: 's. 92 is a representative proceeding for a public charity, with leave.',
    extraEssentials: ['Who has standing', 'What leave is required', 'What relief is public in character'],
  },
  {
    match: ['supplemental'],
    cases: [{ name: 'Dalpat Kumar v. Prahlad Singh', year: 1992, citation: '(1992) 1 SCC 719', holding: 'Interlocutory protection follows the three-fold test.' }],
    neighbour: 's. 94 read with Orders XXXVIII–XL.',
    trap: 'Treating s. 94 as a stand-alone injunction section without the Order.',
    correction: 's. 94 lists the powers. The Order supplies the conditions.',
    extraEssentials: ['Which supplemental proceeding is asked', 'The matching Order', 'Undertaking as to damages where injunction is granted'],
  },
  {
    match: ['appeals'],
    cases: [
      { name: 'Santosh Hazari v. Purushottam Tiwari', year: 2001, citation: '(2001) 3 SCC 179', holding: 'Second appeal needs a substantial question of law.' },
      { name: 'Banarsi v. Ram Phal', year: 2003, citation: '(2003) 1 SCC 727', holding: 'First appeal is the last court of fact.' },
    ],
    neighbour: 's. 96 first appeal; s. 100 second appeal; s. 104 orders; Order XLI / XLIII.',
    trap: 'Re-trying facts in a second appeal.',
    correction: 'Name the kind of appeal first.',
    extraEssentials: ['What is under challenge — decree or order', 'Which section opens the appeal', 'What questions that court may decide'],
  },
  {
    match: ['reference', 'review', 'revision', 'high courts', 'rules', 'miscellaneous', 'repeals'],
    cases: [
      { name: 'Board of Control for Cricket in India v. Netaji Cricket Club', year: 2005, citation: '(2005) 4 SCC 741', holding: 'Review is not an appeal in disguise.' },
      { name: 'K.K. Velusamy v. N. Palanisamy', year: 2011, citation: '(2011) 11 SCC 275', holding: 's. 151 cannot override an express rule.' },
    ],
    neighbour: 's. 113 reference; s. 114 / Order XLVII review; s. 115 revision; s. 151 inherent power.',
    trap: 'Using review, revision and appeal as interchangeable words.',
    correction: 'Appeal corrects error where it lies. Review is a narrow re-look by the same court. Revision watches jurisdiction.',
    extraEssentials: ['Does an appeal lie', 'Which court is moved', 'What is the exact error — jurisdiction, apparent error, or something else'],
  },
]

export function packForCluster(cluster: string): ClusterPack {
  const c = cluster.toLowerCase()
  return (
    CLUSTER_PACKS.find((p) => p.match.some((m) => c.includes(m))) ??
    CLUSTER_PACKS[CLUSTER_PACKS.length - 1]
  )
}

export function noteFromCluster(cite: string, title: string, cluster: string, kind: 'section' | 'order'): CpcExamNote {
  const pack = packForCluster(cluster)
  return {
    meaning: `${cite} is titled “${title}”. It belongs to ${cluster}. The student must write the working rule, the person who moves the court, the conditions, and the consequence if the conditions fail.`,
    essentials: [
      `Cite ${cite} and state the title in one line.`,
      kind === 'order' ? 'Name the particular Rule the facts use.' : 'Name the connected Order if the facts are procedural.',
      ...pack.extraEssentials,
      'Apply the facts. If one condition is missing, say the heading fails.',
    ],
    illustration: `A party relies on ${cite} (${title}) at the proper stage of a civil suit. Every condition of the heading is present. The court applies ${cite} and grants the procedural consequence the section or Order provides.`,
    failIllustration: `The same party uses ${cite} at the wrong stage, or against a stranger, or where a more specific CPC heading already occupies the field. ${cite} is then not attracted. State that failure clearly — it is the crucial distinction in chamber practice.`,
    cases: pack.cases,
    trap: pack.trap,
    correction: pack.correction,
    neighbour: pack.neighbour,
  }
}
