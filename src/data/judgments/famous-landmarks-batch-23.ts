import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_23: Judgment[] = [
  {
    id: 'emaar-mgf-land-aftab-singh-2018',
    caseName: 'M/S Emaar MGF Land Limited v. Aftab Singh',
    shortName: 'Emaar MGF Land v. Aftab Singh',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2018,
    judgmentDate: '2018-12-10',
    citation: '(2019) 12 SCC 751',
    neutralCitation: 'AIRONLINE 2018 SC 828',
    bench: 'Two-Judge Bench',
    judges: ['Ashok Bhushan', 'Uday Umesh Lalit'],
    subject: 'Consumer Law',
    topics: ['consumer disputes', 'arbitration', 'Section 8', 'Section 3'],
    tags: ['consumer', 'arbitration', 'consumer-forum', 'section-8'],
    summary: 'The Supreme Court held that an arbitration agreement does not by itself oust consumer-forum jurisdiction. The consumer remedy is an additional statutory remedy, and a consumer forum is not required to refer the dispute to arbitration merely because an arbitration clause exists.',
    facts: [
      'Homebuyers pursued consumer proceedings concerning disputes arising from their dealings with a real-estate developer.',
      'The developer relied on an arbitration clause and sought reference under Section 8 of the Arbitration and Conciliation Act, 1996.',
      'The National Consumer Disputes Redressal Commission treated the consumer remedy as available notwithstanding the arbitration agreement.',
      'The Supreme Court considered whether the arbitration agreement compelled the consumer forum to refer the dispute to arbitration.'
    ],
    issues: [
      'Whether an arbitration agreement bars a complaint before a consumer forum.',
      'Whether Section 8 of the Arbitration and Conciliation Act requires a consumer forum to refer the dispute to arbitration.',
      'Whether the Consumer Protection Act remedy is additional to remedies under other laws.'
    ],
    arguments: {
      appellant: [
        'The developer contended that the arbitration agreement required reference under Section 8.',
        'It was argued that the contractual dispute-resolution mechanism should govern.'
      ],
      respondent: [
        'The consumer contended that the statutory consumer remedy remained available despite the arbitration clause.',
        'The consumer relied on the additional-remedy character of the Consumer Protection Act.'
      ]
    },
    provisions: [
      { actId: 'arbitration-and-conciliation-act-1996', actName: 'Arbitration and Conciliation Act, 1996', provisionId: 's-8', section: '8', title: 'Reference to arbitration where there is an arbitration agreement' },
      { actId: 'consumer-protection-act-1986', actName: 'Consumer Protection Act, 1986', provisionId: 's-3', section: '3', title: 'Act not in derogation of other laws' }
    ],
    reasoning: [
      { heading: 'Additional remedy', explanation: 'The consumer remedy operates in addition to remedies under other laws. An arbitration clause does not automatically extinguish the statutory consumer remedy.' },
      { heading: 'Section 8', explanation: 'Section 8 does not require a consumer forum to surrender its statutory jurisdiction merely because the underlying contract contains an arbitration agreement.' },
      { heading: 'Consumer protection', explanation: 'The consumer-protection framework provides a specialised statutory remedy, and an arbitral mechanism does not by itself displace that remedy.' }
    ],
    decision: 'The Supreme Court dismissed the review petitions and reaffirmed that consumer disputes could proceed before consumer fora notwithstanding an arbitration clause.',
    holding: 'An arbitration agreement does not by itself bar a consumer complaint; the consumer remedy is additional and a consumer forum is not automatically bound to refer the dispute to arbitration.',
    ratioDecidendi: 'The statutory consumer remedy is additional to remedies under other laws, and an arbitration clause does not, by itself, require a consumer forum to decline jurisdiction in favour of arbitration.',
    relatedCases: [
      { judgmentId: 'vidya-drolia-2020', caseName: 'Vidya Drolia v. Durga Trading Corporation', citation: '(2021) 2 SCC 1', relationship: 'Later arbitration authority concerning arbitrability and referral.' },
      { judgmentId: 'national-seeds-corporation-2012', caseName: 'National Seeds Corporation Ltd. v. M. Madhusudhan Reddy', citation: '(2012) 2 SCC 506', relationship: 'Consumer-law authority on the additional consumer remedy despite arbitration.' }
    ],
    examPoints: ['An arbitration clause does not automatically oust consumer-forum jurisdiction.', 'Section 3 makes the consumer remedy additional to other legal remedies.', 'Distinguish contractual arbitration from a statutory consumer remedy.'],
    mcqs: [{
      id: 'emaar-mgf-land-aftab-singh-2018-mcq-1',
      question: 'What did the Supreme Court hold about an arbitration clause in a consumer dispute?',
      options: ['It always bars a consumer complaint', 'It automatically transfers every consumer dispute to arbitration', 'It does not by itself bar the statutory consumer remedy', 'It makes the Consumer Protection Act inapplicable to contracts'],
      correctIndex: 2,
      explanation: 'The Court treated the consumer remedy as additional and held that an arbitration clause does not by itself require reference to arbitration.'
    }],
    source: { type: 'url', title: 'Emaar MGF Land Limited v. Aftab Singh — Indian Kanoon', sourceUrl: 'https://indiankanoon.org/doc/60243004/', verified: true },
    status: 'reviewed'
  },
  {
    id: 'bc-srinivasa-setty-1981',
    caseName: 'Commissioner of Income Tax, Bangalore v. B.C. Srinivasa Setty',
    shortName: 'B.C. Srinivasa Setty',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1981,
    judgmentDate: '1981-02-19',
    citation: '(1981) 2 SCC 460',
    neutralCitation: 'AIR 1981 SC 972',
    bench: 'Three-Judge Bench',
    judges: ['R.S. Pathak', 'P.N. Bhagwati', 'V.D. Tulzapurkar'],
    subject: 'Tax Law',
    topics: ['capital gains', 'goodwill', 'cost of acquisition', 'Sections 45 and 48'],
    tags: ['income-tax', 'capital-gains', 'goodwill', 'computation'],
    summary: 'The Supreme Court held, under the law then applicable, that self-generated goodwill of a newly commenced business could not be subjected to capital-gains tax where the statutory computation provisions could not operate because its cost of acquisition could not be determined. The charging and computation provisions were treated as an integrated code.',
    facts: [
      'A registered partnership firm had generated goodwill in the course of business.',
      'On dissolution, the goodwill was valued and transferred to a newly constituted partnership.',
      'The Revenue sought to bring the transfer within the capital-gains charge under Section 45 of the Income Tax Act, 1961.',
      'The Supreme Court considered whether the computation provisions could apply to self-generated goodwill whose acquisition cost could not be ascertained.'
    ],
    issues: [
      'Whether self-generated goodwill of a newly commenced business fell within the then applicable capital-gains scheme.',
      'Whether capital gains could be charged where the statutory computation of cost of acquisition could not be performed.',
      'Whether the charging and computation provisions operate as an integrated code.'
    ],
    arguments: {
      appellant: ['The Revenue contended that goodwill was property and fell within the capital-asset framework.', 'The Revenue sought to apply Section 45 to the transfer.'],
      respondent: ['The assessee contended that self-generated goodwill had no ascertainable acquisition cost for the statutory computation mechanism.', 'It was argued that the charge could not operate where computation failed.']
    },
    provisions: [
      { actId: 'income-tax-act-1961', actName: 'Income-tax Act, 1961', provisionId: 's-45', section: '45', title: 'Capital gains' },
      { actId: 'income-tax-act-1961', actName: 'Income-tax Act, 1961', provisionId: 's-48', section: '48', title: 'Mode of computation' },
      { actId: 'income-tax-act-1961', actName: 'Income-tax Act, 1961', provisionId: 's-55', section: '55', title: 'Meaning of adjusted cost, cost of improvement and cost of acquisition' }
    ],
    reasoning: [
      { heading: 'Goodwill', explanation: 'Self-generated goodwill arises from reputation and business connections and, in the circumstances considered, had no ascertainable historical acquisition cost.' },
      { heading: 'Integrated code', explanation: 'The charging and computation provisions operate together. The charging provision cannot be applied in isolation where the statutory computation mechanism cannot operate.' },
      { heading: 'Computation', explanation: 'Where the scheme requires a determinable acquisition cost and that cost cannot be ascertained for the asset in question, the capital-gains computation fails for the transfer under the law then in force.' }
    ],
    decision: 'The Supreme Court dismissed the Revenue appeals and held that the transfer of self-generated goodwill of the newly commenced business was not chargeable to capital-gains tax under the statutory scheme then applicable.',
    holding: 'Where the capital-gains computation provisions cannot operate because the cost of acquisition of self-generated goodwill cannot be determined, the charging provision cannot be applied to that transfer under the law considered.',
    ratioDecidendi: 'The charging and computation provisions form an integrated code; where the prescribed computation cannot be made for self-generated goodwill because its acquisition cost is incapable of determination, the charge under Section 45 cannot operate in the circumstances considered.',
    examPoints: ['Remember the integrated-code principle linking charging and computation provisions.', 'The case concerned the statutory position before later legislative changes to goodwill.', 'Do not treat the historical holding as the current tax treatment of every form of goodwill.'],
    mcqs: [{
      id: 'bc-srinivasa-setty-1981-mcq-1',
      question: 'What was central to B.C. Srinivasa Setty?',
      options: ['Every intangible asset is exempt from tax', 'A capital-gains charge applies even when computation is impossible', 'The charging and computation provisions operate as an integrated code', 'Goodwill can never be a capital asset'],
      correctIndex: 2,
      explanation: 'The Court emphasised the integrated relationship between the charging provision and the computation mechanism.'
    }],
    source: { type: 'url', title: 'CIT v. B.C. Srinivasa Setty — Indian Kanoon', sourceUrl: 'https://indiankanoon.org/doc/1411881/', verified: true },
    status: 'reviewed'
  },
  {
    id: 'barium-chemicals-1966',
    caseName: 'Barium Chemicals Ltd. v. Company Law Board',
    shortName: 'Barium Chemicals',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 1966,
    judgmentDate: '1966-05-04',
    citation: '1966 SCR 311',
    neutralCitation: 'AIR 1967 SC 295',
    bench: 'Five-Judge Bench',
    judges: ['J.R. Mudholkar', 'A.K. Sarkar', 'M. Hidayatullah', 'R.S. Bachawat', 'J.M. Shelat'],
    subject: 'Company Law',
    topics: ['company investigation', 'Section 237(b)', 'administrative discretion', 'judicial review'],
    tags: ['company-law', 'section-237', 'judicial-review', 'administrative-law'],
    summary: 'The Supreme Court examined the power to order investigation into a company under Section 237(b) of the Companies Act, 1956. The power involved an opinion based on circumstances suggesting specified misconduct, but the existence of statutory conditions and the legality of the decision remained open to judicial review. The investigation power was exploratory and did not itself constitute a final finding of fraud.',
    facts: [
      'The Company Law Board ordered an investigation into Barium Chemicals Ltd. under Section 237(b) of the Companies Act, 1956.',
      'The company and its managing director challenged the investigation order and the material relied upon.',
      'The challenge raised questions concerning administrative discretion and judicial review of the Board’s opinion.',
      'The Supreme Court considered whether the statutory power could be exercised without material capable of supporting the statutory grounds.'
    ],
    issues: [
      'Whether the statutory opinion under Section 237(b) was open to judicial review.',
      'Whether material capable of reasonably supporting the statutory circumstances was required.',
      'Whether an investigation order was a final finding of fraud or an exploratory inquiry.'
    ],
    arguments: {
      appellant: ['The appellants challenged the legality of the investigation order and the basis for the statutory opinion.', 'They contended that irrelevant or insufficient material could not sustain the statutory power.'],
      respondent: ['The Board relied on material suggesting circumstances covered by Section 237(b).', 'It was contended that the investigation power was exploratory and should not be replaced by the Court’s own assessment.']
    },
    provisions: [
      { actId: 'companies-act-1956', actName: 'Companies Act, 1956', provisionId: 's-237', section: '237(b)', title: 'Investigation of company affairs in other cases' }
    ],
    reasoning: [
      { heading: 'Judicial review', explanation: 'Although the statutory authority forms an opinion, the existence of relevant material and compliance with statutory conditions are not wholly immune from judicial scrutiny.' },
      { heading: 'Exploratory power', explanation: 'The investigation power is intended to discover facts where circumstances reasonably suggest the statutory grounds; the authority need not first prove the ultimate misconduct.' },
      { heading: 'Limits of discretion', explanation: 'Administrative discretion remains bounded by statute. Judicial review may examine whether relevant material exists and whether the authority acted within the statutory limits.' }
    ],
    decision: 'The Supreme Court analysed the statutory conditions governing investigation and affirmed that the exploratory power must nevertheless be exercised within the statute and on material capable of supporting the statutory opinion.',
    holding: 'A statutory power based on administrative opinion is not immune from judicial review; the Court may examine relevant material and statutory limits while recognising that an investigation order is exploratory rather than a final adjudication of fraud.',
    ratioDecidendi: 'The opinion required for the investigation power must have a rational statutory basis; judicial review can examine the existence and relevance of material and the statutory limits without requiring proof of the suspected misconduct before investigation.',
    examPoints: ['Barium Chemicals is a leading authority on judicial review of statutory administrative discretion.', 'Distinguish formation of an opinion for investigation from proof of ultimate misconduct.', 'The power remains bounded by statutory conditions and relevant material.'],
    mcqs: [{
      id: 'barium-chemicals-1966-mcq-1',
      question: 'What is a key principle from Barium Chemicals?',
      options: ['Administrative satisfaction is never reviewable', 'Every investigation order is a final finding of fraud', 'Statutory discretion must remain within statutory limits and can be judicially reviewed on recognised grounds', 'Company investigations require a criminal conviction first'],
      correctIndex: 2,
      explanation: 'The case recognised judicial review of the statutory basis and limits of the investigative power while treating the investigation as exploratory.'
    }],
    source: { type: 'url', title: 'Barium Chemicals Ltd. v. Company Law Board — Indian Kanoon', sourceUrl: 'https://indiankanoon.org/doc/1748256/', verified: true },
    status: 'reviewed'
  },
  {
    id: 'cadila-healthcare-2001',
    caseName: 'Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.',
    shortName: 'Cadila Healthcare',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2001,
    judgmentDate: '2001-03-26',
    citation: '(2001) 5 SCC 73',
    neutralCitation: 'AIR 2001 SC 1952',
    bench: 'Three-Judge Bench',
    judges: ['B.N. Kirpal', 'Doraswamy Raju', 'British Kumar'],
    subject: 'Intellectual Property Law',
    topics: ['trade marks', 'passing off', 'medicinal products', 'deceptive similarity'],
    tags: ['trademark', 'passing-off', 'medicines', 'deception'],
    summary: 'The Supreme Court laid down important principles for assessing deceptive similarity between marks, particularly for medicinal products. Courts must consider overall structural and phonetic similarity and the circumstances of the trade, including the nature of the goods and the characteristics of purchasers. Greater caution is warranted where confusion in medicinal products can have serious consequences.',
    facts: [
      'Two pharmaceutical companies used competing marks for medicinal products.',
      'The dispute concerned whether the defendant’s mark was deceptively similar and likely to cause confusion.',
      'The Supreme Court considered how similarity should be assessed in the context of medicinal goods and ordinary purchasers.',
      'The Court also discussed the distinction between infringement of a registered trade mark and passing off.'
    ],
    issues: [
      'How should deceptive similarity between medicinal trade marks be assessed?',
      'What factors are relevant to likelihood of confusion among ordinary purchasers?',
      'How do infringement and passing-off actions differ?',
      'Should medicinal marks receive stricter scrutiny because confusion may affect health and safety?'
    ],
    arguments: {
      appellant: ['The appellant contended that the competing mark was sufficiently similar to create a likelihood of deception or confusion.', 'It was argued that medicinal products require a cautious approach because consumers may rely on imperfect recollection.'],
      respondent: ['The respondent disputed the alleged similarity and relied on differences between the marks and their presentation.', 'It was argued that the marks should be assessed in their commercial context.']
    },
    provisions: [
      { actId: 'trade-marks-act-1999', actName: 'Trade Marks Act, 1999', provisionId: 's-29', section: '29', title: 'Infringement of registered trade marks' },
      { actId: 'trade-marks-act-1999', actName: 'Trade Marks Act, 1999', provisionId: 's-27', section: '27', title: 'No action for infringement of unregistered trade mark; passing off preserved' }
    ],
    reasoning: [
      { heading: 'Overall comparison', explanation: 'Competing marks should be considered as wholes. Courts should examine overall structural and phonetic similarity rather than dissecting words into isolated components.' },
      { heading: 'Imperfect recollection', explanation: 'The test considers an average purchaser with imperfect recollection and asks whether overall similarity is likely to deceive or cause confusion in the relevant market.' },
      { heading: 'Medicinal products', explanation: 'Because medicinal products affect health, the assessment of confusion requires particular caution. The nature of the goods and characteristics of purchasers are relevant.' },
      { heading: 'Infringement and passing off', explanation: 'Infringement is a statutory remedy protecting a registered mark, while passing off protects against misrepresentation causing or likely to cause damage to goodwill.' }
    ],
    decision: 'The Supreme Court applied a cautious likelihood-of-confusion approach appropriate to medicinal products and reaffirmed the need to assess marks as a whole in their commercial context.',
    holding: 'Deceptive similarity in medicinal marks must be assessed from the perspective of an ordinary purchaser with imperfect recollection, considering overall structural and phonetic similarity and the special risks associated with medicinal goods.',
    ratioDecidendi: 'Likelihood of deception or confusion is assessed by overall similarity and relevant commercial circumstances; medicinal marks require particular caution because confusion can have serious consequences.',
    examPoints: ['Use the overall-impression test rather than dissecting marks into isolated parts.', 'Medicinal products require heightened caution when assessing deceptive similarity.', 'Distinguish statutory infringement from passing off.'],
    mcqs: [{
      id: 'cadila-healthcare-2001-mcq-1',
      question: 'Which approach is central to Cadila Healthcare in medicinal trade-mark disputes?',
      options: ['Compare only dictionary meanings', 'Ignore the nature of the goods', 'Assess overall structural and phonetic similarity and likelihood of confusion in context', 'Require proof that every purchaser was actually deceived'],
      correctIndex: 2,
      explanation: 'The Court emphasised overall similarity, imperfect recollection and the special context of medicinal products.'
    }],
    source: { type: 'url', title: 'Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd. — Indian Kanoon', sourceUrl: 'https://indiankanoon.org/doc/1114158/?type=print', verified: true },
    status: 'reviewed'
  },
  {
    id: 'rambhau-namdeo-gajre-2004',
    caseName: 'Rambhau Namdeo Gajre v. Narayan Bapuji Dhotra',
    shortName: 'Rambhau Namdeo Gajre',
    court: 'Supreme Court of India',
    jurisdiction: 'India',
    year: 2004,
    judgmentDate: '2004-08-25',
    citation: '(2004) 8 SCC 614',
    neutralCitation: 'AIR 2004 SC 4342',
    bench: 'Two-Judge Bench',
    judges: ['Ashok Bhan', 'S.H. Kapadia'],
    subject: 'Property Law',
    topics: ['Section 53-A', 'part performance', 'Section 54', 'agreement to sell', 'privity'],
    tags: ['transfer-of-property', 'part-performance', 'section-53a', 'agreement-to-sell', 'privity'],
    summary: 'The Supreme Court held that the doctrine of part performance under Section 53-A of the Transfer of Property Act is a protective shield subject to its statutory conditions and cannot be invoked by a person lacking the required privity with the original owner. An agreement to sell does not itself create an interest in immovable property; title remains with the owner until legally conveyed.',
    facts: [
      'The original owner had agreed to sell agricultural land to Pishorrilal, who was put in possession under the agreement.',
      'Pishorrilal subsequently entered into another agreement with Rambhau Namdeo Gajre and put him in possession.',
      'The original owner sought possession, and Rambhau relied on Section 53-A to protect his possession.',
      'The issue was whether a subsequent purchaser in possession through a non-owner could invoke the doctrine against the original owner.'
    ],
    issues: [
      'Whether a person in possession under a subsequent agreement can invoke Section 53-A against the original owner with whom there is no privity.',
      'Whether an agreement to sell creates an interest or title in immovable property.',
      'Whether Section 53-A protection can operate against a third party outside the contractual relationship.'
    ],
    arguments: {
      appellant: ['The appellant relied on possession and the equitable doctrine of part performance under Section 53-A.', 'It was contended that possession acquired under the agreement should be protected.'],
      respondent: ['The original owner contended that the appellant had no agreement with the owner and lacked the privity necessary for Section 53-A protection.', 'It was contended that the intermediary had no title or transferable interest capable of being conveyed.']
    },
    provisions: [
      { actId: 'transfer-of-property-act-1882', actName: 'Transfer of Property Act, 1882', provisionId: 's-53a', section: '53-A', title: 'Part performance' },
      { actId: 'transfer-of-property-act-1882', actName: 'Transfer of Property Act, 1882', provisionId: 's-54', section: '54', title: 'Sale' }
    ],
    reasoning: [
      { heading: 'Section 53-A is a shield', explanation: 'Part performance protects possession against the transferor when statutory conditions are fulfilled. It is defensive and does not itself confer ownership.' },
      { heading: 'Privity', explanation: 'The appellant had no agreement with the original owner. The statutory protection could not therefore be used against the owner on the basis of an agreement to which the owner was not a party.' },
      { heading: 'Agreement to sell', explanation: 'An agreement to sell does not by itself create an interest in or charge on immovable property. Title remains with the owner until conveyed according to law.' },
      { heading: 'Limits of equity', explanation: 'Section 53-A cannot be transformed into transferable title through a chain of agreements where the intermediary itself had no title or transferable interest.' }
    ],
    decision: 'The Supreme Court dismissed the appeal and held that the appellant could not invoke Section 53-A against the original owner because there was no privity of contract and the intermediary had no title capable of being conveyed.',
    holding: 'Section 53-A protects possession subject to statutory and contractual requirements; an agreement to sell does not create title, and a person without privity cannot use the doctrine against the original owner.',
    ratioDecidendi: 'Part performance is a shield against the transferor and does not create ownership. A subsequent possessor without privity with the original owner cannot invoke Section 53-A merely through an agreement with an intermediary who had no title.',
    examPoints: ['Section 53-A protects possession; it does not confer title.', 'Privity matters when a transferee seeks Section 53-A protection against the original owner.', 'Section 54 states that a contract for sale does not itself create an interest or charge in the property.'],
    mcqs: [{
      id: 'rambhau-namdeo-gajre-2004-mcq-1',
      question: 'What is a key rule from Rambhau Namdeo Gajre?',
      options: ['Every agreement to sell creates title', 'Section 53-A always protects any person in possession', 'Section 53-A is a shield and cannot be used by a non-privy purchaser against the original owner', 'Possession under an agreement automatically transfers ownership'],
      correctIndex: 2,
      explanation: 'The Court held that the doctrine protects possession subject to statutory conditions and could not be invoked against the owner without privity.'
    }],
    source: { type: 'url', title: 'Rambhau Namdeo Gajre v. Narayan Bapuji Dhotra — Indian Kanoon', sourceUrl: 'https://indiankanoon.org/doc/1678794/', verified: true },
    status: 'reviewed'
  }
]
