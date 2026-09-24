import type { TopicContent } from '../topicTypes'

const content: TopicContent = {
  glance: `Section 14(1) enlarges a qualifying limited estate into full ownership; s. 14(2) is the narrower exception for a fresh restricted grant. The source of the woman's right is decisive.`,
  study: `Section 14(1) enlarges a qualifying limited estate into full ownership; s. 14(2) is the narrower exception for a fresh restricted grant. The source of the woman's right is decisive.\\n\\nThe provision should be read with its provisos, connected sections and the applicable procedural framework. A complete analysis identifies the legal trigger, proving ingredients, evidence, exceptions, forum and precise relief.`,

  sections: [
    { id: 'hsa-s-14-module-1', title: 'Provenance, Legislative Objective & Doctrinal Foundations', order: 1, content: [`The provision is part of the statutory architecture governing family status, property, adoption, guardianship, succession or maintenance. Its object is implemented through the precise legal conditions stated in the Act. The cited Supreme Court authority provides the controlling doctrinal context: A right in property referable to a pre-existing legal entitlement, including maintenance, falls within the enlargement principle of s. 14(1); s. 14(2) concerns a fresh restricted grant.`] },
    { id: 'hsa-s-14-module-2', title: 'Textual Anatomy, Provisos & Statutory Deconstruction', order: 2, content: [`Read s. 14 with every proviso, exception and cross-reference. Do not replace the enacted conditions with a general statement of family-law fairness. Connected provisions can change the result, including provisions on jurisdiction, proof, maintenance, succession, adoption effects or court permission.`] },
    { id: 'hsa-s-14-module-3', title: 'Mandatory Proving Ingredients & Essential Elements', order: 3, content: [
      `Identify the governing statute and confirm that s. 14 applies to the parties and transaction.`,
      `Identify every statutory ingredient, proviso and exception before drafting the relief.`,
      `Prove the legally relevant status, dates, relationships, documents and conduct with admissible evidence.`,
      `Check connected provisions that alter, qualify or supply the procedural route for the substantive right.`,
      `State the precise statutory consequence and distinguish it from neighboring family-law remedies.`,
    ] },
    { id: 'hsa-s-14-module-4', title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)', order: 4, content: [`The party asserting the statutory consequence ordinarily bears the burden of proving the facts that activate the provision, subject to statutory presumptions and burden-shifting rules. Status records, marriage/adoption certificates, family registers, property records, income evidence, medical material and correspondence should be produced in admissible form. Electronic material must satisfy BSA 2023 s. 63 where applicable. Civil family disputes ordinarily proceed on a preponderance-of-probabilities standard; any connected criminal allegation must be analyzed separately.`] },
    { id: 'hsa-s-14-module-5', title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints', order: 5, content: [`Identify the competent Family Court/District Court or other statutory forum. Plead material dates, jurisdictional facts, prior proceedings, statutory prerequisites and the exact relief. Limitation is provision-specific: many matrimonial-status and maintenance claims have no single universal period, while adoption/property/instrument challenges can attract particular Limitation Act Schedule articles. Never insert a generic limitation period without checking the precise cause of action.`] },
  ],

  provisions: [
    { actId: 'hindu-succession-act-1956', actName: `Hindu Succession Act, 1956`, provisionId: 'hsa-s-14', section: `s. 14`, title: `Property of a female Hindu to be her absolute property` },
  ],

  examples: [
    { id: 'hsa-s-14-ill-1', title: 'Illustration 1 — Provision applies', illustrationType: 'statutory', description: `The claimant satisfies every material condition of s. 14. The pleadings identify the statutory trigger, the evidence proves the required status and dates, and no applicable exception defeats the claim.` },
    { id: 'hsa-s-14-ill-2', title: 'Illustration 2 — Missing ingredient or exception', illustrationType: 'fail-scenario', description: `A material statutory condition for s. 14 is absent or an exception applies. The court should reject the assumed consequence unless the missing ingredient is proved or the exception is displaced by the statute.` },
  ],

  hypotheticals: [
    { id: 'hsa-s-14-hypo', title: `Chamber Practice Hypothetical — HSA s. 14 — Property of a female Hindu to be her absolute property`, facts: `A family-law dispute arises in which one party invokes s. 14. The opposing party accepts the relationship but disputes one statutory ingredient, the relevant date, or the legal consequence.`, question: `What is the correct application of s. 14 on the pleaded facts?`, applicableLaw: `Hindu Succession Act, 1956 s. 14; connected provisions of the same Act; Family Courts Act, 1984 where applicable; Bharatiya Sakshya Adhiniyam, 2023 for evidence.`, analysis: `1. Threshold: identify the legal relationship and forum.\\n2. Statutory ingredients: test each requirement of s. 14.\\n3. Evidence: match each material fact to admissible documentary or oral proof.\\n4. Exceptions: test provisos, disqualifications and competing statutory routes.\\n5. Relief: grant only the consequence authorized by the statute.`, conclusion: `The result turns on the statutory ingredients of s. 14; the court should decide the disputed factual issue first and then apply the precise statutory consequence.` },
  ],

  distinctions: [
    { id: 'hsa-s-14-dist-1', title: `s. 14 statutory analysis vs generalized family-law assumption`, left: `Statutory analysis`, right: `Generalized assumption`, rows: [
      { point: 'Trigger', left: `Every statutory ingredient is identified and proved.`, right: `A broad family grievance is treated as sufficient.` },
      { point: 'Evidence', left: `Status, dates, documents and conduct are proved.`, right: `Assertions are treated as proof.` },
      { point: 'Exceptions', left: `Provisos and disqualifications are tested.`, right: `Exceptions are ignored.` },
      { point: 'Relief', left: `Only the statutory consequence is granted.`, right: `A neighboring remedy is assumed to apply.` },
    ] },
  ],

  misconceptions: [
    { id: 'hsa-s-14-trap-1', trap: `Treating s. 14 as automatic once a family relationship is shown.`, correction: `The relationship is only the starting point; the statutory ingredients, exceptions and evidence must still be established.` },
    { id: 'hsa-s-14-trap-2', trap: `Assuming a parallel maintenance, custody, succession or matrimonial remedy automatically replaces s. 14.`, correction: `Substantive entitlement and procedural remedy must be analyzed separately. A parallel route may coexist, but it does not rewrite the governing provision.` },
  ],

  cases: [
    { name: `V. Tulasamma v. Sesha Reddy`, year: 1977, citation: `(1977) 3 SCC 99`, court: 'Supreme Court of India', facts: `The Supreme Court considered a dispute requiring interpretation of the governing family-law provision or closely connected statutory rule.`, issue: `What is the correct legal interpretation and application of the governing statutory rule?`, ratioDecidendi: `A right in property referable to a pre-existing legal entitlement, including maintenance, falls within the enlargement principle of s. 14(1); s. 14(2) concerns a fresh restricted grant.`, holding: `A right in property referable to a pre-existing legal entitlement, including maintenance, falls within the enlargement principle of s. 14(1); s. 14(2) concerns a fresh restricted grant.`, relevance: `Use this authority for the stated statutory proposition, while matching the case facts and the current statutory text before relying on it.` },
  ],

  questionsAndAnswers: [
    { id: 'hsa-s-14-brief', draftingCategory: 'brief', question: `Prepare a structured case brief and legal problem assessment on HSA s. 14 — Property of a female Hindu to be her absolute property.`, answer: `I. ISSUE & JURISDICTIONAL THRESHOLD\\nIdentify the exact statutory question and competent forum.\\n\\nII. GOVERNING RULE\\nApply Hindu Succession Act, 1956 s. 14 and its provisos.\\n\\nIII. APPLICATION\\nTest every ingredient against the evidence and chronology.\\n\\nIV. CONCLUSION\\nState only the statutory consequence supported by the record.`, explanation: 'IRAC-style chamber assessment.' },
    { id: 'hsa-s-14-submissions', draftingCategory: 'submissions', question: `Draft written submissions on HSA s. 14 — Property of a female Hindu to be her absolute property covering statute, evidence, precedent and procedure.`, answer: `I. MATERIAL FACTS\\nSet out the legally relevant chronology.\\n\\nII. STATUTORY SCHEME\\nDeconstruct s. 14 and connected provisions.\\n\\nIII. PROVING INGREDIENTS\\nMatch each ingredient to admissible evidence.\\n\\nIV. PRECEDENT\\nApply the cited ratio to the precise issue.\\n\\nV. RELIEF\\nAddress forum, maintainability, limitation where applicable and the precise statutory relief.`, explanation: 'Courtroom written-submissions framework.' },
  ],

  bareActPointers: [`Hindu Succession Act, 1956 s. 14`, 'Family Courts Act, 1984 where applicable', 'Bharatiya Sakshya Adhiniyam, 2023 — electronic evidence where applicable'],
  examTips: ['Name the governing Act and provision before stating the rule.', 'Separate statutory ingredients, evidence, exceptions and relief; do not rely on a broad family-law label.'],
  revisionPoints: [`s. 14 — identify the trigger and every statutory condition.`, 'Check connected provisos and exceptions.', 'Match each material fact to admissible evidence.', 'Confirm forum and any provision-specific limitation issue.', `Lead authority: V. Tulasamma v. Sesha Reddy — A right in property referable to a pre-existing legal entitlement, including maintenance, falls within the enlargement principle of s. 14(1); s. 14(2) concerns a fresh restricted grant.`],
  relatedTopics: [],
}

export default content
