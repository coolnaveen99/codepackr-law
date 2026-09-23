import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'BNS Section 152 addresses acts endangering the sovereignty, unity and integrity of India, subject to its statutory ingredients and express safeguards. It must be analyzed from the enacted BNS text, including the mental element and statutory exclusions, with BNSS procedure and BSA proof rules kept distinct.',
  study: `Section 152 — Act endangering sovereignty, unity and integrity of India.\\n\\nThe provision creates a specific offence concerning conduct directed at, or likely to affect, the sovereignty, unity and integrity of India, while its statutory wording must be read as a whole, including the express explanation/safeguards. Historical IPC provisions are not a substitute for the enacted BNS text.\\n\\nFor conduct on or after 1 July 2024, cite and apply BNS s. 152. For earlier conduct, separately examine the repeal-and-savings framework and Article 20(1).`,
  sections:[
    {id:'s-152-m1',title:'Provenance, Legislative Objective & Doctrinal Foundations',order:1,content:[
      'Chapter VII — Offences against the State.',
      'Section 152 is a post-commencement BNS provision concerning acts endangering the sovereignty, unity and integrity of India.',
      'The offence must be distinguished from political criticism, advocacy or lawful expression by applying the exact statutory ingredients and the provision’s express protection for lawful means and lawful disapprobation where applicable.',
      'The constitutional background includes Article 19(1)(a) and its permissible restrictions under Article 19(2); the criminal charge still has to satisfy the BNS wording independently.',
      'Historical IPC concordance may assist comparative research, but the enacted BNS provision governs conduct falling within its temporal operation.'
    ]},
    {id:'s-152-m2',title:'Textual Anatomy, Conditions & Statutory Limits',order:2,content:[
      'Operative provision: BNS s. 152 — Act endangering sovereignty, unity and integrity of India.',
      'Identify the prohibited act or communication, the object protected by the provision, and the required intention/knowledge or likelihood standard stated by the enacted text.',
      'Read the statutory explanation and exclusions carefully. Lawful criticism or disapprobation pursued through lawful means must not be collapsed into the offence merely because it is unpopular or strongly worded.',
      'Separate the substantive offence from any other offence that may arise from the same facts, such as offences involving violence, conspiracy, public order or unlawful association.',
      'Do not use a historical IPC section number as the legal test. The charge and evidence must be mapped to the current BNS language.'
    ]},
    {id:'s-152-m3',title:'Mandatory Proving Ingredients & Essential Elements',order:3,content:[
      '1. Identify the precise act, words, publication, conduct or other factual event relied upon by the prosecution.',
      '2. Establish the statutory connection between that conduct and sovereignty, unity and integrity of India as required by the provision.',
      '3. Prove the mental element or statutory likelihood standard expressly required by s. 152.',
      '4. Establish the factual context rather than isolating words, images or communications from their full setting.',
      '5. Test the conduct against the provision’s express lawful-criticism/disapprobation safeguard before concluding that the offence is made out.',
      '6. Where multiple accused are charged, separately analyze individual acts, common intention/abetment/conspiracy and the evidence connecting each accused.'
    ]},
    {id:'s-152-m4',title:'Evidentiary Burdens & BSA 2023 Interface',order:4,content:[
      'The prosecution ordinarily bears the burden of proving the charged ingredients beyond reasonable doubt, subject to any applicable statutory presumption.',
      'Context is especially important: preserve the complete communication, surrounding statements, publication metadata, sequence of events and relevant audience/context rather than relying on an isolated extract.',
      'Electronic material must satisfy the applicable BSA 2023 rules concerning electronic records, authenticity and proof. Identify the original/source, integrity and chain of custody where disputed.',
      'Expert evidence may assist with attribution, technical provenance or interpretation, but it does not replace proof of the statutory mental element.',
      'Distinguish admissibility from weight. A technically admissible communication still must prove the particular statutory ingredient for which it is relied upon.'
    ]},
    {id:'s-152-m5',title:'Procedural Roadmap, Forum & Limitation Checkpoints',order:5,content:[
      'Check the BNSS First Schedule for the current classification of s. 152, including cognizability, bailability and the competent trial court.',
      'Check territorial jurisdiction, joinder/charge framing and any statutory precondition or sanction that may apply on the facts.',
      'Where the allegation concerns speech, publication or digital communication, identify the relevant date, place, platform and accused attribution at the investigation stage.',
      'Check the applicable BNSS limitation rule, if any, and the commencement date of the BNS.',
      'For pre-1 July 2024 conduct, separately analyze repeal, savings and Article 20(1) rather than applying s. 152 retrospectively.'
    ]}
  ],
  provisions:[{actId:'bns',actName:'Bharatiya Nyaya Sanhita, 2023',provisionId:'bns-152',section:'s. 152',title:'Act endangering sovereignty, unity and integrity of India'}],
  examples:[
    {id:'s-152-ex1',title:'Statutory ingredients satisfied',illustrationType:'practical',description:'The prosecution proves the specified conduct, the required connection with sovereignty, unity or integrity, the applicable mental element/likelihood standard and the absence of the statutory safeguard.'},
    {id:'s-152-ex2',title:'Lawful criticism is not automatically criminal',illustrationType:'fail-scenario',description:'A speaker sharply criticises government policy through lawful means but the prosecution cannot establish the additional statutory ingredients of s. 152. The criticism alone does not establish the offence.'}
  ],
  hypotheticals:[{id:'s-152-hypo',title:'Chamber problem — BNS s. 152',facts:'A public post strongly criticises a governmental policy and uses language concerning national unity. The prosecution invokes s. 152; the defence relies on the statutory safeguard for lawful criticism and disputes the required mental element and context.',question:'Does the proved communication satisfy BNS s. 152?',applicableLaw:'BNS s. 152; Article 19(1)(a) and Article 19(2); applicable BNSS procedure; BSA 2023 evidence rules.',analysis:'1. Preserve and identify the complete communication. 2. Identify each statutory ingredient. 3. Establish the required mental element or likelihood standard. 4. Analyze the context and intended meaning. 5. Apply the statutory safeguard for lawful criticism/disapprobation. 6. Check BNSS classification and procedural preconditions.',conclusion:'Liability depends on the enacted ingredients and admissible proof; strong criticism by itself is not a substitute for proving the statutory offence.'}],
  distinctions:[{id:'s-152-dist',title:'BNS s. 152 vs lawful political criticism',left:'BNS s. 152',right:'Lawful criticism/disapprobation',rows:[
    {point:'Legal test',left:'Every statutory ingredient and mental element must be proved',right:'Expression remains protected unless the applicable statutory and constitutional limits are crossed'},
    {point:'Context',left:'Context can establish or negate the required statutory connection and intent',right:'Context may demonstrate policy criticism rather than prohibited conduct'},
    {point:'Evidence',left:'Complete communication, attribution and surrounding facts matter',right:'Do not infer criminality from an isolated phrase or political disagreement'}
  ]}],
  misconceptions:[
    {id:'s-152-trap',trap:'Any criticism of the Government that mentions national unity is automatically an offence.',correction:'The prosecution must prove every ingredient of s. 152 and must account for its express safeguard for lawful criticism/disapprobation.'},
    {id:'s-152-trap-2',trap:'A social-media screenshot by itself proves authorship, context and intention.',correction:'Attribution, integrity, context and the applicable BSA requirements for electronic records must be separately established.'},
    {id:'s-152-trap-3',trap:'The constitutional speech analysis replaces the statutory analysis.',correction:'Article 19 informs the constitutional framework, but the criminal charge must still satisfy the enacted BNS ingredients.'}
  ],
  cases:[],
  questionsAndAnswers:[
    {id:'s-152-brief',draftingCategory:'brief',question:'Prepare a structured legal assessment of BNS s. 152.',answer:`I. ISSUE — identify the precise conduct and statutory question.\\nII. RULE — set out the enacted ingredients, mental element and statutory safeguard.\\nIII. EVIDENCE — identify proof of attribution, context, conduct and intention/likelihood.\\nIV. CONSTITUTIONAL INTERFACE — consider Article 19 only within the applicable statutory framework.\\nV. PROCEDURE — verify BNSS classification and preconditions.\\nVI. CONCLUSION — apply the proved facts without relying on labels alone.`,explanation:'Structured analysis without unverified authorities.'},
    {id:'s-152-submissions',draftingCategory:'submissions',question:'Draft written submissions on BNS s. 152.',answer:`I. STATUTORY SCHEME.\\nII. INGREDIENTS AND MENTAL ELEMENT.\\nIII. CONTEXT AND ELECTRONIC EVIDENCE.\\nIV. STATUTORY SAFEGUARD FOR LAWFUL CRITICISM.\\nV. BNSS PROCEDURAL POSITION.\\nVI. OPERATIVE CONCLUSION.`,explanation:'Courtroom structure without unverified case citations.'}
  ],
  bareActPointers:['BNS s. 152 — Act endangering sovereignty, unity and integrity of India','BNS Chapter VII — Offences against the State','Article 19(1)(a) and Article 19(2) of the Constitution','BNSS First Schedule and applicable procedure','BSA 2023 provisions governing burden and electronic evidence','BNS repeal-and-savings framework for pre-1 July 2024 conduct'],
  examTips:['Begin with the exact enacted words of s. 152.','Do not equate criticism of government policy with the offence without proving the statutory ingredients.','Preserve complete digital context and prove attribution under the BSA framework.','Cross-check BNSS classification and any procedural preconditions.'],
  revisionPoints:['BNS s. 152 concerns acts endangering sovereignty, unity and integrity of India.','Lawful criticism/disapprobation must be analyzed against the provision’s express safeguard.','Article 19 provides the constitutional speech framework; it does not replace the BNS ingredient analysis.','Use IPC concordance only historically; the enacted BNS text governs post-commencement offences.'],
  relatedTopics:['s-147','s-148','s-150','s-151']
}
export default content
