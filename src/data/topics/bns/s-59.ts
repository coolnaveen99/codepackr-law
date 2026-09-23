import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'BNS Section 59: Public servant concealing design to commit offence which it is his duty to prevent. This note explains its statutory scope within the Abetment cluster and identifies the connected provisions that must be checked before application.',
  study: `Section 59 — Public servant concealing design to commit offence which it is his duty to prevent.\n\nPublic servant concealing design to commit offence which it is his duty to prevent. BNS restatement of IPC 119. Elements are substantially the same; cite the BNS number for offences on or after 1 July 2024. Historical IPC concordance: 119.\n\nRead the enacted BNS text with its definitions, explanations, provisos and exceptions. For pre-1 July 2024 conduct, separately apply the repeal-and-savings framework and Article 20(1). The registry synopsis is a navigation aid, not a substitute for the bare Act.`,
  sections: [
    { id:'s-59-m1', title:'Provenance, Legislative Objective & Doctrinal Foundations', order:1, content:[
      'Chapter iv; thematic cluster: Abetment.',
      'Public servant concealing design to commit offence which it is his duty to prevent. BNS restatement of IPC 119. Elements are substantially the same; cite the BNS number for offences on or after 1 July 2024.',
      'Historical concordance: 119.',
    ]},
    { id:'s-59-m2', title:'Textual Anatomy, Conditions & Statutory Limits', order:2, content:[
      'Operative title: “Public servant concealing design to commit offence which it is his duty to prevent”.',
      'Read every sub-section, proviso, explanation and exception in the enacted text.',
      'Identify the connected punishment provision before advising on sentence.',
    ]},
    { id:'s-59-m3', title:'Application Ingredients & Issue-Spotting', order:3, content:[
      'Identify the protected legal interest or statutory situation addressed by the provision.',
      'Map each material fact to the enacted words of s. 59; do not import an ingredient from an IPC provision merely because of historical similarity.',
      'Check connected definitions, exceptions and adjacent provisions before concluding that the section is attracted.',
    ]},
    { id:'s-59-m4', title:'Evidentiary Burdens & BSA 2023 Interface', order:4, content:[
      'The prosecution ordinarily bears the burden of proving a criminal charge beyond reasonable doubt, subject to any applicable statutory presumption.',
      'Identify the fact each side must establish and distinguish admissibility from evidentiary weight under the Bharatiya Sakshya Adhiniyam, 2023.',
      'Electronic material must satisfy the applicable BSA requirements; digital availability does not itself establish authenticity or weight.',
    ]},
    { id:'s-59-m5', title:'Procedural Roadmap, Forum & Limitation Checkpoints', order:5, content:[
      'Check the BNSS First Schedule and connected offence/punishment provision for cognizability, bailability and trial court.',
      'Check territorial jurisdiction, charge/joinder issues and any sanction or statutory permission requirement.',
      'Verify the BNSS limitation provisions, if applicable, rather than assuming either limitation or no limitation.',
      'For pre-1 July 2024 conduct, separately analyze the BNS savings provision and Article 20(1).',
    ]},
  ],
  provisions:[{actId:'bns',actName:'Bharatiya Nyaya Sanhita, 2023',provisionId:'bns-59',section:'s. 59',title:'Public servant concealing design to commit offence which it is his duty to prevent'}],
  examples:[
    {id:'s-59-ex1',title:'Provision applies — statutory conditions satisfied',illustrationType:'practical',description:'The alleged conduct or circumstance falls within the statutory subject of s. 59 and the connected conditions are proved. The court then applies the consequence provided by the BNS scheme.'},
    {id:'s-59-ex2',title:'Boundary defect — an ingredient is missing',illustrationType:'fail-scenario',description:'The facts resemble the section, but a required condition, exception, qualification or causal link is not established. The provision should not be applied by analogy alone.'},
  ],
  hypotheticals:[{id:'s-59-hypo',title:'Chamber problem — BNS s. 59',facts:'The prosecution invokes s. 59 on facts within the Abetment cluster. The defence disputes the statutory fit.',question:'Do the proved facts satisfy s. 59?',applicableLaw:'BNS s. 59; connected BNS provisions; applicable BNSS procedure; BSA 2023 evidence rules.',analysis:'1. Identify the exact statutory words. 2. Break them into conditions. 3. Test each condition against the evidence. 4. Apply exceptions or provisos. 5. Identify the correct procedural and punishment consequence.',conclusion:'Application turns on the enacted ingredients of s. 59, not on the historical IPC number alone.'}],
  distinctions:[{id:'s-59-dist',title:'BNS provision vs historical IPC concordance',left:'BNS s. 59',right:'Historical IPC: 119',rows:[
    {point:'Governing law',left:'BNS for post-commencement offences',right:'IPC is historical where saved or relevant to concordance'},
    {point:'Method',left:'Start with enacted BNS wording',right:'Use historical IPC only to understand continuity/change'},
    {point:'Transition',left:'Check commencement and savings',right:'Pre-commencement offences may remain governed by saved IPC law'},
  ]}],
  misconceptions:[
    {id:'s-59-trap',trap:'The IPC number can automatically be substituted for BNS s. 59.',correction:'The enacted BNS text controls post-commencement offences; historical concordance is not a substitute for reading the BNS provision.'},
    {id:'s-59-trap-2',trap:'The section heading alone proves liability.',correction:'All statutory ingredients and relevant exceptions must be established on the evidence.'},
  ],
  cases:[],
  questionsAndAnswers:[
    {id:'s-59-brief',draftingCategory:'brief',question:'Prepare a structured legal assessment of BNS s. 59.',answer:`I. ISSUE — precise statutory question.\nII. RULE — enacted ingredients, connected provisions and exceptions.\nIII. APPLICATION — map evidence to each condition.\nIV. CONCLUSION — whether s. 59 is attracted and the connected consequence.`,explanation:'Chamber-style structured analysis.'},
    {id:'s-59-submissions',draftingCategory:'submissions',question:'Draft written submissions on BNS s. 59.',answer:`I. STATUTORY SCHEME.\nII. INGREDIENTS.\nIII. EVIDENCE AND BURDEN.\nIV. RESPONSE TO EXCEPTIONS AND DEFENCES.\nV. PROCEDURE AND OPERATIVE RELIEF.`,explanation:'Courtroom submission structure without unverified authorities.'},
  ],
  bareActPointers:['BNS s. 59 — Public servant concealing design to commit offence which it is his duty to prevent','Connected BNS definitions/exceptions','BNSS First Schedule and applicable procedure','BSA 2023 burden and evidence provisions','BNS repeal-and-savings framework for pre-1 July 2024 conduct'],
  examTips:['Start with the enacted BNS wording.','Check connected definitions, exceptions, procedure and punishment.','Use IPC numbering only as historical concordance.'],
  revisionPoints:['s. 59: Public servant concealing design to commit offence which it is his duty to prevent.','Cluster: Abetment.','IPC concordance: 119.','Verify BNSS procedure and BSA evidence requirements.'],
  relatedTopics:[],
}
export default content
