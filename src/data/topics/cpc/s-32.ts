import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 32 CPC is the court’s coercive toolbox after a person summoned under Section 30 stays away. It is not about filing a plaint, serving the defendant, or passing a decree. It is about making a summoned person attend or produce what the summons required.

Introduction
Civil trials collapse if witnesses and document-holders treat a summons as optional. Section 30 lets the court issue summonses to give evidence or produce documents. Section 32 answers the next question: if that person defaults, what may the court do?

The heading is “Penalty for default”. The body is not a single automatic penalty. It lists four powers. The word used is “may”. The court chooses the measure that is necessary and proportionate.

Meaning and concept
Condition: a summons has already been issued under Section 30 to that person.
Purpose: compel attendance or production.
Powers: (a) warrant for arrest; (b) attach and sell property; (c) fine not exceeding five thousand rupees; (d) security for appearance, and in default civil prison.
The 1999 amendment (in force 1 July 2002) raised the fine cap from five hundred rupees to five thousand rupees.

Why the rule exists
Without a follow-up power, a reluctant witness can stall a civil list. Section 32 protects the trial. It sits with Section 31 and Order XVI. Order XVI Rule 10 is the usual working machinery. Section 32 is the Code-level authority.

Definitions
Summons under Section 30 — process to give evidence or produce a document.
Default — non-attendance or non-production without sufficient cause.
Warrant — custody to secure attendance, not a criminal sentence.
Fine — ceiling five thousand rupees.
Security — bond for the next date; civil prison follows default of that security.

Legal foundation
Section 30 summons. Section 31 service of witness summonses. Section 32 coercive powers. Order XVI attendance of witnesses. Sections 27–29 and Order V are defendant-service — do not mix them with Section 32.

Essential ingredients
1. Live civil proceeding needing evidence or a document.
2. Section 30 summons to an identified person.
3. Service of that summons.
4. Default without sufficient cause.
5. Discretionary choice among clauses (a)–(d).
6. Object is attendance or production, not a decree on merits.

How the rule operates
Issue the Section 30 summons. If the person attends, stop. If not, prove service and consider excuse. Then pick a clause. First default often meets a fine or a fresh date. Repeated wilful absence may justify a warrant. Attachment and civil prison need a clearer record. When the person attends, scale the process down.

Exceptions
No Section 30 summons, no Section 32. Defective service is not default. “May” means discretion. Fine cannot exceed ₹5,000. Civil prison follows default of security. Section 32 is not Order IX and not execution under Section 51. BNSS does not repeal the CPC.

Distinctions
Order V / s. 27 summons the defendant. s. 30–32 / Order XVI summons a witness or document-holder. s. 51 / Order XXI executes a decree.

Current-law close
Cite Section 32 CPC, 1908 with the four clauses and the ₹5,000 cap. Work it with Order XVI.`

export default {
  glance:
    'Section 32 CPC compels a person already summoned under Section 30 — warrant, attachment and sale, fine up to ₹5,000, or security with civil prison on default. Witness-process, not plaint-service and not execution.',
  study,
  examples: [
    {
      id: 's32-ex-apply',
      title: 'Example — summons ignored',
      description:
        'In a partition suit the court issues a Section 30 summons to the village accountant for the record of rights. Service is proved. He stays away. The court may fine him under Section 32(c) and fix a last date. Repeated refusal can justify a warrant. The object is the record.',
    },
    {
      id: 's32-ex-fail',
      title: 'Example — section not attracted',
      description:
        'The defendant was never served under Order V. Counsel asks the court to attach the defendant\u2019s house under Section 32 because he is avoiding the case. Wrong heading. That is Order IX. Section 32 starts only after a Section 30 evidence or production summons.',
    },
    {
      id: 's32-ex-fine-cap',
      title: 'Example — outdated fine',
      description:
        'Writing that the maximum fine is five hundred rupees is the old text. From 1 July 2002 the cap is five thousand rupees.',
    },
  ],
  hypotheticals: [
    {
      id: 's32-hypo',
      title: 'Classroom problem',
      facts:
        'Meera sues a bank. She needs the branch manager only to produce the locker register. A Section 30 summons is served. The manager neither comes nor sends the register. Counsel asks for arrest and sale of the manager\u2019s car the same afternoon.',
      question: 'What may the court lawfully do under Section 32?',
      applicableLaw:
        'Sections 30 and 32 CPC and Order XVI. Discretion. Aim is production of the register.',
      analysis:
        'Section 32 is open because a Section 30 summons was served. Immediate arrest and sale, with no finding of repeated wilful default, is a heavy first step. A fine within ₹5,000, a peremptory production order, or security for the next date usually meets the purpose.',
      conclusion:
        'Section 32 applies. Choose the least measure that gets the register into court.',
    },
  ],
  distinctions: [
    {
      id: 's32-dist',
      title: 'Section 32 compared with neighbouring process',
      left: 'Section 32 CPC',
      right: 'Neighbouring heading',
      rows: [
        { point: 'Who is targeted', left: 'Person summoned under s. 30', right: 'Order V / s. 27: the defendant' },
        { point: 'Purpose', left: 'Compel attendance or production', right: 's. 51 / Order XXI: satisfy a decree' },
        { point: 'Fine ceiling', left: '\u20b95,000 after 1-7-2002', right: 'Not costs or court-fees' },
      ],
    },
  ],
  misconceptions: [
    { id: 's32-m1', trap: 'Using s. 32 when the defendant is not served with the plaint.', correction: 'That is Order IX.' },
    { id: 's32-m2', trap: 'Writing that the court must arrest the witness.', correction: 'The section says may.' },
    { id: 's32-m3', trap: 'Using the old \u20b9500 fine cap.', correction: 'Write five thousand rupees from 1 July 2002.' },
    { id: 's32-m4', trap: 'Saying BNSS repealed this section.', correction: 'CPC 1908 remains the civil code.' },
  ],
  questionsAndAnswers: [
    {
      id: 's32-q-10',
      
      draftingCategory: 'brief',
      question: 'Provide a structured Case Brief and legal assessment on Section 32 CPC (Penalty for default).',
      answer:
        'Introduction. Section 32 lets the court compel a person already summoned under Section 30. It is not a penalty for ignoring a plaint-summons.\n\nMeaning. After a Section 30 summons, the court may use warrant, attachment and sale, fine up to \u20b95,000, or security with civil prison on default.\n\nEssentials. Section 30 summons; service; default without cause; discretionary clause; object is attendance.\n\nExample. A summoned record-keeper stays away after proved service. Fine and a last date first; warrant if defiance continues.\n\nDistinction. Order V summons the defendant. Section 51 executes a decree.\n\nConclusion. Cite Section 32 CPC, 1908 and the \u20b95,000 cap.',
    },
    {
      id: 's32-q-16',
      
      draftingCategory: 'submissions',
      question: 'A summoned witness ignores a Section 30 summons. Counsel asks for immediate arrest and sale under Section 32. Draft comprehensive Written Submissions.',
      answer:
        'Issue. May the court arrest and sell at once under Section 32?\n\nRule. Section 32 applies only after a Section 30 summons. The court may use clauses (a)–(d). The verb is may. Order XVI is the working procedure.\n\nApplication. Confirm it was a Section 30 summons and that service is proved. Then Section 32 is open. Immediate arrest and sale treats the heaviest clauses as automatic. A first default is usually a fine, a peremptory order, or security. Warrant and attachment need a record of wilful repeated default.\n\nChange one fact. No Section 30 summons means Section 32 fails. Avoided plaint-service is Order IX.\n\nConclusion. The section applies, but the court should choose the measure that gets the witness or document into court. Close with Section 32 CPC, the \u20b95,000 cap from 1 July 2002, and Order XVI.',
    },
  ],
  cases: [],
  bareActPointers: ['Section 32 CPC', 'Section 30 CPC', 'Section 31 CPC', 'Order XVI CPC', 'Code of Civil Procedure, 1908'],
  examTips: [
    'Open with the condition: summons already issued under s. 30.',
    'List all four clauses.',
    'Write the fine cap as \u20b95,000 (from 1-7-2002).',
    'Separate s. 32 from Order V and from execution under s. 51.',
  ],
  revisionPoints: [
    's. 32 = compel person summoned under s. 30.',
    'Four powers: warrant, attach and sell, fine \u2264 \u20b95,000, security / civil prison.',
    'Discretionary. Object is attendance, not a decree.',
    'Pair with Order XVI. Do not confuse with Order IX.',
  ],
} satisfies TopicContent
