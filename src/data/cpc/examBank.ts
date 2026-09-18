export type CpcCase = { name: string; year?: number; citation?: string; holding: string }

export type CpcExamNote = {
  meaning: string
  essentials: string[]
  illustration: string
  failIllustration: string
  cases: CpcCase[]
  trap: string
  correction: string
  neighbour: string
}

export const CPC_EXAM_BANK: Record<string, CpcExamNote> = {
  '9': {
    meaning: 'A civil court must try every suit of a civil nature unless cognisance is expressly or impliedly barred.',
    essentials: ['Civil nature: right to property or office, not a pure caste or ritual claim', 'Bar must be express (special statute) or clearly implied', 'Exclusion of jurisdiction is construed strictly', 'If the special tribunal exists, the civil court yields only to that extent'],
    illustration: 'A sues B to recover land. The dispute is civil. Section 9 lets the court try it unless a land-reform statute channels the claim to a revenue forum.',
    failIllustration: 'A wants the court to decide who is the priest of a temple as a mere religious honour with no attached property. That is not a suit of a civil nature.',
    cases: [
      { name: 'P.M.A. Metropolitan v. Moran Mar Marthoma', year: 1995, citation: '(1995) 4 SCC 286', holding: 'A dispute about a religious office is civil if a legal right or property is attached.' },
      { name: 'Dhulabhai v. State of M.P.', year: 1968, citation: 'AIR 1969 SC 78', holding: 'Civil-court exclusion is read strictly; the special remedy must be adequate.' },
    ],
    trap: 'Writing that every dispute can be filed in a civil court.',
    correction: 'Only suits of a civil nature. Name the bar if a special Act exists.',
    neighbour: 'Distinguish s. 9 (cognisance) from ss. 15–20 (which court).',
  },
  '10': {
    meaning: 'Res sub judice: a later court shall not proceed with a trial of the same matter between the same parties if an earlier suit is pending.',
    essentials: ['Two suits', 'Same parties or parties under whom they claim', 'Same matter in issue', 'Earlier suit pending in a competent court', 'Effect is stay of the later trial, not dismissal'],
    illustration: 'A sues B for the same land in Court X. While that suit is pending A files the same claim in Court Y. Y stays the later suit under s. 10.',
    failIllustration: 'The first suit is for injunction and the second is for possession on a different cause. The matter in issue is not the same — s. 10 does not stay it.',
    cases: [
      { name: 'National Institute of Mental Health v. C. Parameshwara', year: 2005, citation: '(2005) 2 SCC 256', holding: 'The whole of the subject-matter in the two suits must be the same.' },
    ],
    trap: 'Treating s. 10 as res judicata.',
    correction: 's. 10 is pending-suit stay. s. 11 is a decided-suit bar.',
    neighbour: 's. 11 res judicata; s. 151 inherent stay is not a substitute when s. 10 fits.',
  },
  '11': {
    meaning: 'Res judicata: a competent court’s former decision on a matter directly and substantially in issue bars a later suit between the same parties.',
    essentials: ['Former suit decided', 'Competent court', 'Same parties or privies', 'Matter directly and substantially in issue', 'Heard and finally decided', 'Explanations I–VIII must be checked'],
    illustration: 'A sues B for title to Blackacre and loses after trial. A cannot file a second title suit on the same facts. Section 11 bars it.',
    failIllustration: 'The first suit was dismissed for default, not on merits. There is no final decision — res judicata does not apply (though Order IX may).',
    cases: [
      { name: 'Hope Plantations Ltd. v. Taluk Land Board', year: 1999, citation: '(1999) 5 SCC 590', holding: 'Res judicata rests on finality; public policy against two trials of one cause.' },
      { name: 'Workmen v. Board of Trustees, Cochin Port Trust', year: 1978, citation: 'AIR 1978 SC 1283', holding: 'Constructive res judicata (Expl. IV) bars what might and ought to have been made a ground of attack or defence.' },
      { name: 'State of U.P. v. Nawab Hussain', year: 1977, citation: 'AIR 1977 SC 1680', holding: 'A point that ought to have been raised in the earlier proceeding is barred later.' },
    ],
    trap: 'Confusing res judicata with res sub judice or with issue estoppel in a criminal case.',
    correction: 'Write the six conditions. Then apply Expl. IV if the facts are constructive res judicata.',
    neighbour: 's. 10 (pending) v s. 11 (decided). Order II r. 2 is a different bar (relinquished claim).',
  },
  '20': {
    meaning: 'A suit that is not covered by ss. 16–19 may be filed where the defendant resides or carries on business, or where the cause of action arises in whole or in part.',
    essentials: ['Residence / business / work of the defendant', 'Cause of action — whole or part', 'Explanation: a corporation resides where it has its sole or principal office, or where the cause also arises at a subordinate office'],
    illustration: 'Contract made in Chennai, breached in Bengaluru, defendant lives in Hyderabad. Plaintiff may sue in any of those three courts.',
    failIllustration: 'Immovable-property title suit cannot be parked in the defendant’s city under s. 20. ss. 16–17 govern.',
    cases: [
      { name: 'ABC Laminart Pvt. Ltd. v. A.P. Agencies', year: 1989, citation: 'AIR 1989 SC 1239', holding: 'Part of the cause of action and ouster clauses — jurisdiction clauses are read strictly.' },
    ],
    trap: 'Using s. 20 for a land-title suit.',
    correction: 'Start with s. 16. Use s. 20 only for the residual class.',
    neighbour: 'ss. 15–19; s. 21 (objection to jurisdiction).',
  },
  '47': {
    meaning: 'All questions arising between parties to the suit in which the decree was passed, and relating to execution, discharge or satisfaction of the decree, shall be determined by the executing court — not by a separate suit.',
    essentials: ['Question between parties to the suit', 'Relates to execution, discharge or satisfaction', 'Executing court decides it', 'No separate suit'],
    illustration: 'Decree-holder says the judgment-debtor has already paid. That is an s. 47 question in execution, not a new suit.',
    failIllustration: 'A stranger claims the attached property as his own. That is not between parties to the suit — Order XXI rr. 58–59, not s. 47.',
    cases: [
      { name: 'Harnandrai Badridas v. Debidutt Bhagwati Prasad', year: 1973, citation: 'AIR 1973 SC 2423', holding: 's. 47 is meant to avoid a second round of litigation over the same decree.' },
    ],
    trap: 'Filing a fresh suit to interpret the decree.',
    correction: 'Go back to the executing court under s. 47 / Order XXI.',
    neighbour: 'Order XXI; s. 144 restitution.',
  },
  '80': {
    meaning: 'A suit against the Government or a public officer for an act purporting to be in official duty requires two months’ prior written notice, stating cause of action, name, description and place of residence, and the relief.',
    essentials: ['Notice in writing', 'Two months', 'Cause of action + particulars + relief', 'Urgent relief exception — court may allow the suit to be filed, but no interim relief until notice period or opportunity to government'],
    illustration: 'A wants damages from a municipality for illegal demolition. He must serve s. 80 notice and wait two months unless he seeks urgent relief under the proviso.',
    failIllustration: 'A sues a government officer for a purely private assault unconnected with duty. s. 80 is not attracted.',
    cases: [
      { name: 'State of A.P. v. Pioneer Builders', year: 2006, citation: '(2006) 12 SCC 119', holding: 'The object is to give Government time to consider the claim; notice is not an empty ritual.' },
      { name: 'Bihari Chowdhary v. State of Bihar', year: 1984, citation: 'AIR 1984 SC 1043', holding: 'Notice is mandatory where the section applies; want of notice is fatal unless waived or covered by the proviso.' },
    ],
    trap: 'Skipping notice and then asking for an injunction against the State on day one.',
    correction: 'Use the proviso correctly: suit may be instituted, but no interim relief until the period expires or the State is heard.',
    neighbour: 'Order XXVII; s. 79 parties.',
  },
  '89': {
    meaning: 'Where it appears that there exist elements of a settlement, the court shall formulate terms and refer the parties to arbitration, conciliation, judicial settlement including Lok Adalat, or mediation.',
    essentials: ['Elements of a settlement', 'Court formulates / refers', 'Four ADR streams', 'Read with Mediation Act, 2023 and Commercial Courts mediation', 'Reference is not a substitute for a decree unless the settlement is recorded'],
    illustration: 'In a partnership accounts suit the judge sees a possible split of assets. He refers the parties to mediation under s. 89. A signed settlement can be made a decree.',
    failIllustration: 'The court cannot force a binding award under s. 89 without the Arbitration Act process if the parties never agreed to arbitrate.',
    cases: [
      { name: 'Afcons Infrastructure Ltd. v. Cherian Varkey Construction', year: 2010, citation: '(2010) 8 SCC 24', holding: 'Explained how s. 89 is to be worked; mediation / Lok Adalat are the practical routes.' },
    ],
    trap: 'Writing that s. 89 repealed the Arbitration Act.',
    correction: 's. 89 is a referral gateway. The named ADR statute then governs.',
    neighbour: 'Order X r. 1A; Mediation Act 2023; Commercial Courts Act.',
  },
  '96': {
    meaning: 'An appeal lies from every original decree except a consent decree, and except where the law otherwise provides.',
    essentials: ['Original decree', 'No appeal from consent decree (s. 96(3))', 'First appeal is on facts and law', 'Order XLI is the procedure'],
    illustration: 'Trial court decrees A’s money claim after evidence. B files a first appeal under s. 96 and may challenge findings of fact.',
    failIllustration: 'Parties compromised and a consent decree was passed. B cannot appeal that decree under s. 96(3).',
    cases: [
      { name: 'Banarsi v. Ram Phal', year: 2003, citation: '(2003) 1 SCC 727', holding: 'A first appellate court must consider the evidence; it is the last court of fact.' },
    ],
    trap: 'Treating first appeal as if it were a second appeal under s. 100.',
    correction: 's. 96 = facts + law. s. 100 = substantial question of law only.',
    neighbour: 's. 100; Order XLI; s. 104 appeals from orders.',
  },
  '100': {
    meaning: 'A second appeal to the High Court lies only if the case involves a substantial question of law, which the High Court must formulate.',
    essentials: ['Decree of an appellate court', 'Substantial question of law', 'Formulate the question', 'Hear on that question (with limited power to hear other questions)', 's. 100A bars a further letters-patent appeal in specified cases'],
    illustration: 'First appellate court misreads a registered sale deed as a mortgage. That construction of a document is a substantial question of law for s. 100.',
    failIllustration: 'The loser only says “the trial court believed the wrong witness.” That is a fact question. Second appeal is not the place.',
    cases: [
      { name: 'Santosh Hazari v. Purushottam Tiwari', year: 2001, citation: '(2001) 3 SCC 179', holding: 'Defined “substantial question of law” — not every question of law qualifies.' },
      { name: 'Kondiba Dagadu Kadam v. Savitribai Sopan Gujar', year: 1999, citation: '(1999) 3 SCC 722', holding: 'High Court cannot convert a second appeal into a third trial of facts.' },
    ],
    trap: 'Re-appreciating evidence in a second appeal as if it were s. 96.',
    correction: 'Open with the formulated substantial question. If there is none, say so and dismiss.',
    neighbour: 's. 96; s. 100A; s. 103 (High Court may decide an issue of fact in limited situations).',
  },
  '115': {
    meaning: 'Revision: the High Court may call for the record of a case decided by a subordinate court if that court exercised a jurisdiction not vested, failed to exercise a vested jurisdiction, or acted illegally or with material irregularity — and only where no appeal lies.',
    essentials: ['No appeal lies', 'Jurisdictional error, not a mere wrong decision on facts', '2002 amendment: generally against a case already decided; interlocutory revision is tightly limited', 'Discretionary'],
    illustration: 'A trial court entertains a suit clearly barred by a special statute. No appeal is provided against that order. High Court may revise under s. 115.',
    failIllustration: 'A wants the High Court to re-weigh evidence on an injunction application as if it were a first appeal. That is not s. 115.',
    cases: [
      { name: 'Major S.S. Khanna v. Brig. F.J. Dillon', year: 1964, citation: 'AIR 1964 SC 497', holding: 'Revision is about jurisdiction, not a substitute appeal.' },
    ],
    trap: 'Using revision wherever an appeal is missed by limitation.',
    correction: 'First ask: does an appeal lie? If yes, s. 115 is closed.',
    neighbour: 's. 96 / s. 104 appeal; s. 114 review; Art. 227 Superintendence.',
  },
  '151': {
    meaning: 'Nothing in the Code limits the inherent power of the court to make orders necessary for the ends of justice or to prevent abuse of process.',
    essentials: ['Residual power', 'Cannot contradict an express provision', 'Ends of justice / abuse of process', 'Used sparingly'],
    illustration: 'A forged process-server report is used to obtain an ex parte decree. The court may recall the step in inherent power if no specific rule covers the exact fraud.',
    failIllustration: 'Limitation has expired for a restoration application under Order IX. The party cannot use s. 151 to invent a new limitation period.',
    cases: [
      { name: 'K.K. Velusamy v. N. Palanisamy', year: 2011, citation: '(2011) 11 SCC 275', holding: 'Inherent power exists but cannot be used to override a specific CPC provision.' },
      { name: 'Manohar Lal Chopra v. Seth Hiralal', year: 1962, citation: 'AIR 1962 SC 527', holding: 'Court can grant a temporary injunction in inherent power in a proper case even outside Order XXXIX, but not in conflict with the Code.' },
    ],
    trap: 'Starting every application with “s. 151” when Order IX / XXXIX / XXI already governs.',
    correction: 'Name the specific provision first. Use s. 151 only for the gap.',
    neighbour: 's. 148 enlargement of time; s. 152 clerical correction.',
  },
  'o-7': {
    meaning: 'Order VII is the law of the plaint: what it must contain, when it is rejected, and return of the plaint.',
    essentials: ['r. 1 particulars', 'r. 11 rejection — no cause of action, undervalued, under-stamped, barred by law, plaint not in duplicate, failure to comply with r. 9', 'Rejection is not res judicata on the merits', 'r. 10 return for presentation to the proper court'],
    illustration: 'A plaint on a time-barred debt with no acknowledgement pleaded is rejected under Order VII r. 11(d) as barred by law.',
    failIllustration: 'Disputed facts that need evidence are not a r. 11 rejection. Those go to trial.',
    cases: [
      { name: 'Saleem Bhai v. State of Maharashtra', year: 2003, citation: '(2003) 1 SCC 557', holding: 'r. 11 is decided on a reading of the plaint; written statement is not the test.' },
      { name: 'T. Arivandandam v. T.V. Satyapal', year: 1977, citation: 'AIR 1977 SC 2421', holding: 'A clever drafting of a meaningless claim must be nipped at the r. 11 stage.' },
    ],
    trap: 'Treating r. 11 as a mini-trial of the defendant’s defence.',
    correction: 'Read the plaint. If on its face it discloses no cause or is barred, reject. Otherwise, proceed.',
    neighbour: 'Order VI pleadings; Order VIII written statement; s. 26 institution.',
  },
  'o-39': {
    meaning: 'Temporary injunctions and interlocutory orders. The working test is prima facie case, balance of convenience, and irreparable injury.',
    essentials: ['rr. 1–2 injunction', 'Three-fold test', 'r. 2A consequence of disobedience', 'r. 3 notice — ex parte only with recorded reasons and immediate follow-up', 'r. 4 variation / discharge'],
    illustration: 'Builder starts raising a floor on a disputed wall. Neighbour shows title papers and ongoing damage. Court grants a status-quo injunction.',
    failIllustration: 'Money claim with no unique property at risk. Damages are adequate. Injunction is usually refused.',
    cases: [
      { name: 'Dalpat Kumar v. Prahlad Singh', year: 1992, citation: '(1992) 1 SCC 719', holding: 'The three-pronged test for temporary injunction.' },
      { name: 'Morgan Stanley v. Kartick Das', year: 1994, citation: '(1994) 4 SCC 225', holding: 'Ex parte injunction is exceptional; reasons and prompt hearing are required.' },
    ],
    trap: 'Writing a final finding of title at the injunction stage.',
    correction: 'Say “prima facie”. Do not decide the suit in the interlocutory order.',
    neighbour: 's. 94; Order XXXVIII attachment before judgment; s. 151.',
  },
  'o-21': {
    meaning: 'Order XXI is the code of execution: application, notice, attachment, sale, resistance, payment, and rateable distribution.',
    essentials: ['How to apply', 'Modes in s. 51 read with the Order', 'Attachment and sale of property', 'Claims and objections', 'Delivery of possession', 'Questions under s. 47 stay inside execution'],
    illustration: 'Money decree is not paid. Decree-holder files an execution petition under Order XXI, attaches a bank account, and seeks sale of a plot if needed.',
    failIllustration: 'Starting a new title suit to enforce the same money decree. That is barred in spirit by s. 47 / Order XXI.',
    cases: [
      { name: 'Rajah of Vizianagaram v. Official Receiver', holding: 'Execution procedure is meant to give the decree fruit, not a second suit.' },
    ],
    trap: 'Treating execution as optional after the decree.',
    correction: 'A decree without execution is paper. Name the mode under s. 51 + Order XXI.',
    neighbour: 'ss. 36–74; s. 47; s. 51; s. 60 attachable property.',
  },
}
