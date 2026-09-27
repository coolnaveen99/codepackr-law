import type { Judgment } from './types'

export const FAMOUS_LANDMARKS_BATCH_14A: Judgment[] = [
  {
    id: 'kedar-nath-1962',
    caseName: 'Kedar Nath Singh v. State of Bihar',
    shortName: 'Kedar Nath Singh',
    citation: 'AIR 1962 SC 955',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate / Constitutional Jurisdiction',
    year: 1962,
    bench: '5-Judge Constitution Bench',
    judges: ['B.P. Sinha, C.J.', 'K. Subba Rao, J.', 'N. Rajagopala Ayyangar, J.', 'J.R. Mudholkar, J.', 'J.C. Shah, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Sedition', 'Section 124A IPC', 'Freedom of Speech', 'Article 19(1)(a)', 'Incitement to Violence'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Constitution', 'Article 19', 'Sedition', 'Free Speech'],
    summary:
      'Foundational 5-judge Constitution Bench precedent upholding the constitutional validity of Section 124A IPC (Sedition, now s. 152 BNS). Held that mere criticism, strong words, or disapproval of government actions does not constitute sedition unless accompanied by an incitement to violence or public disorder, reading down the offense to save it under Article 19(2).',
    facts: [
      'Kedar Nath Singh, a member of the Forward Communist Party in Bihar, delivered a passionate political speech in 1953 in which he criticized the ruling Congress government as "CID agents and goondas" and urged the masses to drive them out through revolution.',
      'He was prosecuted and convicted by a Magistrate under Sections 124A and 505 IPC for sedition and public mischief.',
      'The Patna High Court dismissed his appeal.',
      'He appealed to the Supreme Court challenging the constitutional validity of Section 124A as an impermissible restriction on free speech under Article 19(1)(a).',
    ],
    issues: [
      'Whether Section 124A of the Indian Penal Code violates the fundamental right to freedom of speech and expression guaranteed by Article 19(1)(a).',
      'What are the permissible constitutional boundaries of sedition under the "public order" exception in Article 19(2).',
    ],
    arguments: {
      appellant: [
        'Section 124A is an archaic colonial provision that penalizes mere disaffection and feeling of hatred towards the government.',
        'The Federal Court in Niharendu Dutt Majumdar required incitement to violence, but the Privy Council in Sadashiv Narayan Bhalerao held mere bad feelings constituted sedition; hence s. 124A is unconstitutionally broad.',
      ],
      respondent: [
        'The security of the State and maintenance of public order justify penalizing subversive speech intended to overthrow established constitutional governance.',
        'Section 124A is saved by the First Constitutional Amendment inserting "public order" into Article 19(2).',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 's-152',
        section: 'Section 152 (legacy s. 124A IPC)',
        title: 'Act endangering sovereignty, unity and integrity of India',
        subjectSlug: 'bns',
        topicId: 's-152',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a) & 19(2)',
        title: 'Freedom of speech and expression and public order restrictions',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
    ],
    reasoning: [
      {
        heading: 'Reading down sedition to incitement to violence',
        explanation:
          'Sinha, C.J. held that between the conflicting interpretations of the Federal Court (requiring incitement to violence) and the Privy Council (penalizing mere disaffection), the Federal Court view is aligned with the constitutional scheme. Criticising government policies or advocating alternative political systems, however strong the language, is not sedition unless accompanied by an incitement to violence or public disorder.',
      },
      {
        heading: 'Distinction between Government and State',
        explanation:
          'The "Government established by law" is the visible symbol of the State. Subversion of the Government by violent means endangers the State itself. However, Section 124A contains explanations making it clear that comments expressing disapprobation of the measures of the government with a view to obtaining their alteration by lawful means do not constitute an offense.',
      },
    ],
    decision:
      'Conviction set aside on facts and Section 124A upheld as constitutionally valid. The Court held that Section 124A applies only to activities involving incitement to violence or public disorder.',
    holding:
      'Section 124A IPC is constitutionally valid. The offense of sedition is attracted only when spoken or written words have the pernicious tendency or intention of creating public disorder or inciting violence.',
    ratioDecidendi:
      'Section 124A of the Indian Penal Code is saved by Article 19(2) of the Constitution under the head of "public order". The provision must be read down to mean that acts or words are punishable only if they have the intention or tendency to create disorder, disturbance of public peace, or resort to violence. Mere expression of disapprobation of government action or administrative policies, however strong, does not constitute sedition.',
    obiterDicta:
      'Freedom of speech is the lifeblood of democracy, and citizens are fully entitled to criticize public administrators so long as they do not advocate violent rebellion.',
    relatedCases: [
      {
        judgmentId: 'shreya-singhal-2015',
        caseName: 'Shreya Singhal v. Union of India',
        citation: '(2015) 5 SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Approved the Federal Court view in Niharendu Dutt Majumdar over the Privy Council view in Sadashiv Bhalerao.',
      'Laid down the "incitement to violence or public disorder" test as mandatory for sedition.',
      'Key authority for interpreting Section 152 BNS and Article 19(2) public order.',
    ],
    mcqs: [
      {
        id: 'kedar-nath-mcq-1',
        question:
          'In Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld Section 124A IPC by interpreting that sedition requires:',
        options: [
          'Any verbal criticism of a government minister',
          'Incitement to violence or tendency to create public disorder',
          'Publication of false news in a registered newspaper',
          'Refusal to stand during the national anthem',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in Kedar Nath Singh read down Section 124A IPC, holding that it is attracted only when words involve an incitement to violence or public disorder.',
      },
    ],
  },
  {
    id: 'shirur-mutt-1954',
    caseName: 'Commr., Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt',
    shortName: 'Shirur Mutt Case',
    citation: 'AIR 1954 SC 282',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction',
    year: 1954,
    bench: '7-Judge Constitution Bench',
    judges: [
      'B.K. Mukherjea, J.',
      'M. Patanjali Sastri, C.J.',
      'M.C. Mahajan, J.',
      'S.R. Das, J.',
      'Vivian Bose, J.',
      'Ghulam Hasan, J.',
      'N.H. Bhagwati, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Essential Religious Practices', 'Article 25', 'Article 26', 'Religious Denominations', 'Mathadhipati Rights'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 25', 'Article 26', 'Religion', 'Shirur Mutt', 'ERP Doctrine'],
    summary:
      'Seminal 7-judge Constitution Bench decision formulating the "Essential Religious Practices" (ERP) doctrine. Held that what constitutes an essential part of a religion is primarily to be ascertained with reference to the doctrines and tenets of that religion itself. Distinguished between religious rituals protected under Articles 25 and 26 and secular administrative management subject to State regulation.',
    facts: [
      'The Madras Hindu Religious and Charitable Endowments Act, 1951 was enacted to regulate the administration and financial affairs of religious trusts and mathas.',
      'The Commissioner of Endowments intervened in the management of the Shirur Mutt, an ancient religious institution belonging to the Dvaita Vaishnava sect founded by Madhvacharya.',
      'The Commissioner sought to settle a administrative scheme, audit accounts, and appoint managers, curtailing the powers of the hereditary Mathadhipati.',
      'The Mathadhipati challenged the provisions of the Madras Act as violative of Articles 19(1)(f), 25, 26, and 27 of the Constitution.',
      'The Madras High Court struck down several provisions, and the Commissioner appealed to the Supreme Court.',
    ],
    issues: [
      'What is the scope and meaning of the term "religion" under Articles 25 and 26 of the Constitution.',
      'What constitutes an "essential religious practice" protected from legislative interference.',
      'What are the permissible limits of State regulatory control over the property and administration of religious denominations under Article 26(d).',
    ],
    arguments: {
      appellant: [
        'State regulation of endowment accounts, lease of lands, and audits relates purely to secular management and does not infringe religious beliefs.',
        'Article 25(2)(a) empowers the State to regulate economic, financial, and secular activities associated with religious practice.',
      ],
      respondent: [
        'A Mathadhipati is not a mere salaried manager; spiritual headship and management of Mutt properties are indissolubly blended.',
        'Extensive control over religious rituals, ceremonies, and expenditure destroys denominational autonomy under Article 26.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'freedom-religion',
        article: 'Articles 25 & 26',
        title: 'Freedom of conscience and free profession, practice and propagation of religion',
        subjectSlug: 'constitution',
        topicId: 'freedom-religion',
      },
    ],
    reasoning: [
      {
        heading: 'The Essential Religious Practices (ERP) Doctrine',
        explanation:
          'Mukherjea, J. held that religion is not merely a matter of personal belief or doctrine; it extends to acts done in pursuance of religion, including rituals, observances, ceremonies, and modes of worship. What constitutes the essential part of a religion is primarily to be ascertained with reference to the doctrines of that religion itself, according to what the religious community regards as essential.',
      },
      {
        heading: 'Distinction between religious matters and administration of property',
        explanation:
          'While a religious denomination has complete autonomy in deciding what rites and ceremonies are essential under Article 26(b), the administration of property under Article 26(d) is subject to regulation by law. However, regulation cannot be so excessive as to destroy the denomination administration altogether.',
      },
    ],
    decision:
      'Appeals dismissed in part. Several restrictive provisions of the Madras Act were struck down as unconstitutional for extinguishing the autonomy of the Mathadhipati. The Supreme Court laid down the ERP doctrine governing Indian secularism.',
    holding:
      'Religious freedom under Articles 25 and 26 protects both doctrines of belief and outward rituals that are essential to that religion. The State cannot regulate matters of religion under the guise of secular administration.',
    ratioDecidendi:
      'Religion under Article 25 covers not only beliefs but also outward practices, rituals, and ceremonies regarded as essential by the religious community. What constitutes an essential part of a religion must be decided with reference to the doctrines, tenets, and historical practices of that religion itself. The State can regulate secular administrative and economic aspects under Article 26(d), but cannot usurp the internal management of religious matters under Article 26(b).',
    obiterDicta:
      'The office of a Mathadhipati has a dual character: it is a spiritual office with personal property rights blended with public trust responsibilities.',
    relatedCases: [
      {
        judgmentId: 'bijoe-emmanuel-1986',
        caseName: 'Bijoe Emmanuel v. State of Kerala',
        citation: '(1986) 3 SCC 615',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Origin of the "Essential Religious Practices" (ERP) doctrine in Indian constitutional law.',
      'Defined the scope of "religion" under Article 25 to include both belief and outward rituals.',
      'Distinguished the absolute autonomy over religious rites (Art. 26(b)) from regulable property administration (Art. 26(d)).',
    ],
    mcqs: [
      {
        id: 'shirur-mutt-mcq-1',
        question:
          'Which foundational doctrine governing religious freedom under Articles 25 and 26 was established in the Shirur Mutt case (1954)?',
        options: [
          'Doctrine of Pith and Substance',
          'Essential Religious Practices (ERP) Doctrine',
          'Doctrine of Severe Immunity',
          'Doctrine of Promissory Estoppel',
        ],
        correctIndex: 1,
        explanation:
          'In the Shirur Mutt case (1954), the 7-judge Constitution Bench established the Essential Religious Practices (ERP) doctrine to determine constitutional protection for religious ceremonies.',
      },
    ],
  },
  {
    id: 'sabarimala-2018',
    caseName: 'Indian Young Lawyers Association v. State of Kerala (Sabarimala Case)',
    shortName: 'Sabarimala Case',
    citation: '(2019) 11 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2018,
    bench: '5-Judge Constitution Bench',
    judges: ['Dipak Misra, C.J.', 'A.M. Khanwilkar, J.', 'R.F. Nariman, J.', 'D.Y. Chandrachud, J.', 'Indu Malhotra, J.'],
    subject: 'Constitutional Law',
    topics: ['Sabarimala', 'Gender Equality', 'Article 25', 'Article 26', 'Untouchability', 'Article 17'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 14', 'Article 15', 'Article 21', 'Article 25', 'Gender Justice'],
    summary:
      'Historic 4:1 Constitution Bench ruling holding that the exclusionary custom preventing women aged 10 to 50 from entering the Sabarimala temple violates their fundamental rights to equality, non-discrimination, and freedom of worship under Articles 14, 15, 21, and 25. Held that physiological and biological factors such as menstruation cannot justify religious exclusion.',
    facts: [
      'Rule 3(b) of the Kerala Hindu Places of Public Worship (Authorisation of Entry) Rules, 1965 permitted the exclusion of women at such times during which by custom or usage they are not allowed to enter a place of public worship.',
      'In the Sabarimala Ayyappa Temple, women between the ages of 10 and 50 (the menstruating age group) were barred from entry based on the celibate character of Lord Ayyappa (Naishtika Brahmachari).',
      'The Indian Young Lawyers Association and other petitioners filed a writ petition under Article 32 challenging the ban as discriminatory, unconstitutional, and violative of human dignity.',
    ],
    issues: [
      'Whether the exclusionary practice of barring women aged 10-50 violates Articles 14, 15, and 21 of the Constitution.',
      'Whether the devotees of Lord Ayyappa constitute a separate "religious denomination" under Article 26 with autonomy to manage internal affairs.',
      'Whether the exclusion constitutes an "essential religious practice" protected under Article 25(1).',
      'Whether exclusionary practices based on menstruation violate Article 17 (abolition of untouchability).',
    ],
    arguments: {
      appellant: [
        'Barring women based on biological factors is a form of gender discrimination violating Articles 14, 15, and 21.',
        'Devotees of Ayyappa are Hindus and not a distinct denomination under Article 26; the temple receives state funds.',
      ],
      respondent: [
        'The deity Lord Ayyappa is a Naishtika Brahmachari; the exclusion is an ancient custom essential to the temple character.',
        'Courts should not interfere in matters of faith and centuries-old rituals under the ERP test.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'freedom-religion',
        article: 'Article 25',
        title: 'Freedom of conscience and free profession, practice and propagation of religion',
        subjectSlug: 'constitution',
        topicId: 'freedom-religion',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14 & 15',
        title: 'Right to equality and prohibition of discrimination on grounds of sex',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Gender equality and human dignity over archaic customs',
        explanation:
          'Dipak Misra, C.J. and Chandrachud, J. held that devotion cannot be subjected to gender discrimination. Treating women as pollutants or inferior beings due to a natural physiological process offends human dignity and bodily integrity under Article 21. Exclusion of women is not an essential religious practice of Hinduism.',
      },
      {
        heading: 'Rejection of religious denomination defense',
        explanation:
          'Ayyappa devotees do not have distinct theological doctrines or a separate community structure from general Hindu faith; they do not satisfy the Shirur Mutt test of a religious denomination under Article 26. Rule 3(b) of the Kerala Rules was struck down as ultra vires the parent Act.',
      },
    ],
    decision:
      'Writ petition allowed by 4:1 majority (Indu Malhotra, J. dissenting). Rule 3(b) held unconstitutional and women of all ages permitted entry into Sabarimala.',
    holding:
      'The exclusion of women between the ages of 10 and 50 from entering the Sabarimala temple is unconstitutional. Physiological factors cannot form the basis of religious discrimination under Articles 14, 15, 21, and 25.',
    ratioDecidendi:
      'Freedom of religion under Article 25(1) is guaranteed equally to all persons, men and women alike. An exclusionary practice based on gender or menstruation violates dignity and equality under Articles 14 and 21 and does not constitute an essential religious practice. Customs that subordinate women to second-class status must yield to constitutional morality.',
    obiterDicta:
      'Chandrachud, J. observed that notions of impurity associated with menstruation are a form of social untouchability offending the core value of Article 17.',
    relatedCases: [
      {
        judgmentId: 'shayara-bano-2017',
        caseName: 'Shayara Bano v. Union of India',
        citation: '(2017) 9 SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Struck down Sabarimala ban on women aged 10-50 under Articles 14, 15, 21, and 25.',
      'Invalidated Rule 3(b) of the Kerala Hindu Places of Public Worship Rules, 1965.',
      'Key application of constitutional morality over traditional religious custom.',
    ],
    mcqs: [
      {
        id: 'sabarimala-mcq-1',
        question:
          'In the Sabarimala case (Indian Young Lawyers Association v. State of Kerala, 2018), which judge delivered the lone dissenting judgment?',
        options: [
          'Justice D.Y. Chandrachud',
          'Justice Indu Malhotra',
          'Justice R.F. Nariman',
          'Chief Justice Dipak Misra',
        ],
        correctIndex: 1,
        explanation:
          'Justice Indu Malhotra was the sole dissenting judge in the 5-judge Constitution Bench, holding that notions of rationality cannot be imported into religious practices.',
      },
    ],
  },
  {
    id: 'mp-sharma-1954',
    caseName: 'M.P. Sharma v. Satish Chandra',
    shortName: 'M.P. Sharma',
    citation: 'AIR 1954 SC 300',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1954,
    bench: '8-Judge Constitution Bench',
    judges: [
      'M.C. Mahajan, C.J.',
      'B.K. Mukherjea, J.',
      'S.R. Das, J.',
      'Vivian Bose, J.',
      'Ghulam Hasan, J.',
      'N.H. Bhagwati, J.',
      'B. Jagannadhadas, J.',
      'T.L. Venkatarama Ayyar, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 20(3)', 'Self-Incrimination', 'Search and Seizure', 'Privacy', 'Police Investigation'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 20', 'Search and Seizure', 'Self-Incrimination', 'Privacy'],
    summary:
      'Historical 8-judge Constitution Bench decision holding that search and seizure of private documents by the police under warrant does not violate the privilege against self-incrimination under Article 20(3). The Court observed that the Indian Constitution does not explicitly recognize a fundamental right to privacy analogous to the Fourth Amendment of the US Constitution (an observation subsequently overruled in Puttaswamy).',
    facts: [
      'An FIR was registered against Dalmia Jain Airways Ltd. and its directors alleging massive fraud, embezzlement of public funds, and falsification of accounts.',
      'The District Magistrate issued search warrants under Section 96 CrPC (legacy code).',
      'The police conducted simultaneous searches across 34 offices and residential premises of the company and its management, seizing large quantities of books, records, and files.',
      'The company directors filed writ petitions under Article 32 challenging the search and seizure warrants as violative of Article 19(1)(f) and Article 20(3) right against self-incrimination.',
    ],
    issues: [
      'Whether a search and seizure conducted under a search warrant issued under Section 96 CrPC violates the protection against self-incrimination under Article 20(3).',
      'Whether search and seizure of private records infringes an implicit constitutional right to privacy.',
    ],
    arguments: {
      appellant: [
        'Seizing private records under compulsory police warrants forces the accused to furnish evidence against himself in violation of Article 20(3).',
        'Private documents are protected from arbitrary government intrusion.',
      ],
      respondent: [
        'A search by a police officer under a warrant is an act of the state and does not involve compelling the accused to give testimony.',
        'Effective investigation of corporate fraud requires recovery of original business documents.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-20',
        article: 'Article 20(3)',
        title: 'Protection against self-incrimination',
        subjectSlug: 'constitution',
        topicId: 'art-20',
      },
    ],
    reasoning: [
      {
        heading: 'Search and seizure does not constitute self-incrimination',
        explanation:
          'Jagannadhadas, J. held that Article 20(3) embodies the principle that no person accused of an offence shall be compelled to be a witness against himself. To be a witness means furnishing oral or written evidence from personal knowledge. A search and seizure under warrant is an act of the police; the accused is not compelled to produce anything or give testimony.',
      },
      {
        heading: 'Absence of express right to privacy in 1954',
        explanation:
          'The Court noted that the framers of the Indian Constitution did not incorporate a provision corresponding to the Fourth Amendment of the American Constitution guaranteeing immunity against unreasonable searches; hence a right to privacy could not be derived to invalidate statutory search powers.',
      },
    ],
    decision:
      'Writ petitions dismissed. Search and seizure under statutory warrants held constitutionally valid under Article 20(3).',
    holding:
      'A search and seizure under a warrant issued by a Magistrate does not violate Article 20(3). The accused is not compelled to be a witness against himself when documents are seized by the police.',
    ratioDecidendi:
      'Search and seizure of documents under Section 96 CrPC does not infringe Article 20(3). The constitutional protection against self-incrimination is directed against compelling an accused to give oral or documentary testimony from his own lips or pen, and does not prohibit statutory police searches of premises under lawful warrant.',
    obiterDicta:
      'The Constitution does not explicitly include a fundamental right to privacy like the Fourth Amendment (overruled in Puttaswamy 2017).',
    relatedCases: [
      {
        judgmentId: 'puttaswamy-2017',
        caseName: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        relationship: 'overruled',
      },
      {
        judgmentId: 'kathi-kalu-oghad-1961',
        caseName: 'State of Bombay v. Kathi Kalu Oghad',
        citation: 'AIR 1961 SC 1808',
        relationship: 'elaborated',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Held that search and seizure under warrant does not violate Article 20(3).',
      'Historical 8-judge bench precedent whose privacy observation was overruled in Puttaswamy (2017).',
      'Distinguished between personal testimony and physical seizure of records.',
    ],
    mcqs: [
      {
        id: 'mp-sharma-mcq-1',
        question:
          'In M.P. Sharma v. Satish Chandra (1954), what was the holding of the 8-judge bench regarding search warrants and Article 20(3)?',
        options: [
          'Search warrants violate Article 20(3) as self-incrimination',
          'Search and seizure by police under warrant does not violate Article 20(3)',
          'All searches require prior written approval of the President',
          'Police can never seize company financial records',
        ],
        correctIndex: 1,
        explanation:
          'The 8-judge bench in M.P. Sharma held that search and seizure under lawful warrant does not compel the accused to be a witness against himself and does not violate Article 20(3).',
      },
    ],
  },
  {
    id: 'kathi-kalu-oghad-1961',
    caseName: 'State of Bombay v. Kathi Kalu Oghad',
    shortName: 'Kathi Kalu Oghad',
    citation: 'AIR 1961 SC 1808',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate / Constitutional Jurisdiction',
    year: 1961,
    bench: '11-Judge Constitution Bench',
    judges: [
      'B.P. Sinha, C.J.',
      'S.K. Das, J.',
      'A.K. Sarkar, J.',
      'K. Subba Rao, J.',
      'K.N. Wanchoo, J.',
      'M. Hidayatullah, J.',
      'K.C. Das Gupta, J.',
      'J.C. Shah, J.',
      'N. Rajagopala Ayyangar, J.',
      'J.R. Mudholkar, J.',
      'T.L. Venkatarama Ayyar, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 20(3)', 'Self-Incrimination', 'Handwriting Exemplars', 'Fingerprints', 'Physical Evidence'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 20', 'Self-Incrimination', 'Evidence', 'Fingerprints'],
    summary:
      'Monumental 11-judge Constitution Bench ruling delineating the boundaries of Article 20(3). Held that compelling an accused person to provide specimen handwriting signatures, finger impressions, palm prints, or to show parts of his body for identification does not violate the privilege against self-incrimination under Article 20(3), as physical evidence is not "testimony from personal knowledge".',
    facts: [
      'In multiple criminal appeals before the Supreme Court, investigating police officers had directed accused persons during police custody to provide specimen signatures, handwriting exemplars, and thumb impressions for forensic comparison.',
      'Forensic handwriting and fingerprint experts testified at trial that the specimens matched crime scene documents and weapons.',
      'The accused challenged their convictions, arguing that being compelled by police to write specimens or give thumb prints violated the fundamental right guaranteed under Article 20(3).',
      'An 11-judge Constitution Bench was constituted to settle the scope of "to be a witness" under Article 20(3).',
    ],
    issues: [
      'Whether obtaining specimen handwriting signatures, thumb impressions, or bodily measurements of an accused under compulsion violates Article 20(3).',
      'What is the precise legal meaning of the expression "to be a witness against himself" in Article 20(3).',
    ],
    arguments: {
      appellant: [
        'The State contended that physical characteristics (fingerprints, signature habits, blood, scars) are unchanging objective facts, not subjective disclosures.',
        'Investigating authorities must be entitled to compare handwriting and prints to identify criminals.',
      ],
      respondent: [
        'Compelling an accused in custody to write text creates positive evidence from his person that leads directly to conviction.',
        'Article 20(3) protects an accused from being compelled to furnish any material that aids the prosecution.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-20',
        article: 'Article 20(3)',
        title: 'Protection against self-incrimination — "To be a witness"',
        subjectSlug: 'constitution',
        topicId: 'art-20',
      },
    ],
    reasoning: [
      {
        heading: 'Meaning of "to be a witness"',
        explanation:
          'Sinha, C.J. held that "to be a witness" means imparting knowledge in respect of relevant facts by an oral statement or by statement in writing made or given in court or to an authorized officer. Giving thumb impressions, specimen handwritings, or showing bodily marks does not amount to imparting personal knowledge about the crime.',
      },
      {
        heading: 'Distinction between personal knowledge and physical characteristics',
        explanation:
          'An accused cannot be compelled to disclose information derived from his mental consciousness regarding the commission of the offence. However, physical evidence such as handwriting exemplars or fingerprints are non-communicative physical traits used for comparison, outside the scope of Article 20(3).',
      },
    ],
    decision:
      'Appeals disposed of. The 11-judge Constitution Bench held that taking fingerprints, specimen signatures, and bodily measurements under Section 73 Evidence Act does not violate Article 20(3).',
    holding:
      'Compelling an accused to give specimen handwriting, thumb impressions, or palm impressions does not violate Article 20(3). Physical evidence and identifying marks do not constitute self-incrimination.',
    ratioDecidendi:
      '"To be a witness" in Article 20(3) means imparting knowledge in respect of relevant facts by oral or written testimony. Giving specimen handwriting, signatures, fingerprints, or displaying parts of the body for identification does not convey personal knowledge and is not testimony. Therefore, such compulsory procedures do not infringe Article 20(3).',
    obiterDicta:
      'Compulsion is an essential ingredient of Article 20(3); voluntary submissions of physical or oral evidence do not attract the constitutional guarantee.',
    relatedCases: [
      {
        judgmentId: 'selvi-2010',
        caseName: 'Selvi v. State of Karnataka',
        citation: '(2010) 7 SCC 263',
        relationship: 'followed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      '11-judge Constitution Bench ruling defining "to be a witness" under Article 20(3).',
      'Established that specimen handwriting, fingerprints, and bodily traits do not violate Art. 20(3).',
      'Distinguished testimonial communications (protected) from physical non-communicative evidence (unprotected).',
    ],
    mcqs: [
      {
        id: 'kathi-kalu-mcq-1',
        question:
          'In State of Bombay v. Kathi Kalu Oghad (1961), the 11-judge Constitution Bench held that taking specimen handwriting and fingerprints from an accused:',
        options: [
          'Violates Article 20(3) as unconstitutional self-incrimination',
          'Does not violate Article 20(3) as it is physical evidence and not testimonial communication',
          'Can only be done after the accused is convicted',
          'Requires prior presidential sanction',
        ],
        correctIndex: 1,
        explanation:
          'The 11-judge bench in Kathi Kalu Oghad held that fingerprints and handwriting exemplars do not constitute testimonial communication and therefore do not violate Article 20(3).',
      },
    ],
  },
  {
    id: 'basheshar-nath-1959',
    caseName: 'Basheshar Nath v. Commissioner of Income Tax',
    shortName: 'Basheshar Nath',
    citation: 'AIR 1959 SC 149',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1959,
    bench: '5-Judge Constitution Bench',
    judges: ['S.R. Das, C.J.', 'N.H. Bhagwati, J.', 'S.K. Das, J.', 'J.L. Kapur, J.', 'K. Subba Rao, J.'],
    subject: 'Constitutional Law',
    topics: ['Doctrine of Non-Waiver', 'Article 14', 'Fundamental Rights', 'Waiver', 'Public Policy'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 14', 'Waiver', 'Non-Waiver Doctrine', 'Fundamental Rights'],
    summary:
      'Authoritative 5-judge Constitution Bench precedent establishing the "Doctrine of Non-Waiver of Fundamental Rights". Held that a citizen cannot waive the fundamental rights guaranteed under Part III of the Constitution, particularly Article 14, as fundamental rights are not merely for personal benefit but are established as a matter of public policy and national constitutional obligation.',
    facts: [
      'Basheshar Nath was investigated by the Income Tax Investigation Commission under Section 5(1) of the Taxation on Income (Investigation Commission) Act, 1947.',
      'To avoid penal liability, the assessee entered into a settlement with the Commission under Section 8A to pay tax on concealed income in monthly installments.',
      'Subsequently, in Suraj Mall Mohta and Shree Meenakshi Mills, the Supreme Court struck down Section 5(1) of the Act as discriminatory and violative of Article 14.',
      'The assessee defaulted on installment payments and challenged the settlement, arguing that the proceedings under Section 5(1) were unconstitutional under Article 14.',
      'The Revenue contended that the assessee had voluntarily entered into a settlement and had thereby waived his fundamental right under Article 14.',
    ],
    issues: [
      'Whether a citizen can waive the fundamental right to equality guaranteed under Article 14 of the Constitution.',
      'Whether the American doctrine of waiver of constitutional rights applies to Part III of the Indian Constitution.',
    ],
    arguments: {
      appellant: [
        'Fundamental rights in India are commands issued to the State as a matter of public policy; a citizen cannot barter away or waive Article 14.',
        'Proceedings under a statute struck down under Article 13(2) are void ab initio.',
      ],
      respondent: [
        'The assessee willingly signed the settlement under Section 8A to settle tax disputes and cannot repudiate it after taking benefit of concession.',
        'A party can waive any constitutional protection enacted for his individual benefit.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'doctrine-waiver',
        title: 'Doctrine of Non-Waiver of Fundamental Rights',
        subjectSlug: 'constitution',
        topicId: 'doctrine-waiver',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Equality before law — Non-waivable command to the State',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Inapplicability of the American doctrine of waiver',
        explanation:
          'Das, C.J. and Subba Rao, J. held that the American doctrine of waiver cannot be introduced into the Indian Constitution. Fundamental rights in India were incorporated to protect citizens not only against executive excesses but also against legislative overreach. Unlike the US Constitution, Part III rights are framed as absolute prohibitions on the State.',
      },
      {
        heading: 'Article 14 is an injunction to the State founded on public policy',
        explanation:
          'Article 14 is an admonition addressed to the State: "The State shall not deny to any person equality before the law". It is a constitutional limitation based on public policy. No individual can relieve the State of its constitutional obligation by agreement, estoppel, or waiver.',
      },
    ],
    decision:
      'Appeal allowed. The settlement was held void and unenforceable. The Supreme Court ruled that a citizen cannot waive the fundamental rights guaranteed under Article 14.',
    holding:
      'A citizen cannot waive fundamental rights guaranteed under Part III of the Constitution, specifically Article 14. Fundamental rights are constitutional limitations on State power based on public policy.',
    ratioDecidendi:
      'The doctrine of waiver has no application to the fundamental rights enshrined in Part III of the Indian Constitution, especially Article 14. Article 14 imposes an absolute constitutional obligation upon the State. Fundamental rights are not created solely for the individual benefit of a person; they are established as a matter of public policy for the welfare of the collective nation, and no citizen can waive them.',
    obiterDicta:
      'Subba Rao, J. went further to hold that none of the fundamental rights in Part III (including Arts. 19 and 21) can be waived by any citizen in India.',
    relatedCases: [
      {
        judgmentId: 'olga-tellis-1985',
        caseName: 'Olga Tellis v. Bombay Municipal Corporation',
        citation: '(1985) 3 SCC 545',
        relationship: 'followed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Foundational precedent for the "Doctrine of Non-Waiver of Fundamental Rights".',
      'Distinguished the Indian constitutional approach from the American doctrine of waiver.',
      'Reaffirmed in Olga Tellis that estoppel or waiver cannot be pleaded against fundamental rights.',
    ],
    mcqs: [
      {
        id: 'basheshar-nath-mcq-1',
        question:
          'In Basheshar Nath v. CIT (1959), what did the Constitution Bench rule regarding the waiver of Article 14?',
        options: [
          'A citizen can freely waive Article 14 by entering into a valid private contract',
          'Fundamental rights like Article 14 are founded on public policy and cannot be waived by a citizen',
          'Only corporate entities can waive fundamental rights',
          'Waiver is permitted if approved by the High Court',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court in Basheshar Nath held that Article 14 is an absolute constitutional command based on public policy and cannot be waived by any citizen.',
      },
    ],
  },
  {
    id: 'state-of-rajasthan-1977',
    caseName: 'State of Rajasthan v. Union of India',
    shortName: 'State of Rajasthan v. UOI',
    citation: '(1977) 3 SCC 592',
    court: 'Supreme Court of India',
    jurisdiction: 'Original Jurisdiction (Article 131)',
    year: 1977,
    bench: '7-Judge Constitution Bench',
    judges: [
      'M.H. Beg, C.J.',
      'Y.V. Chandrachud, J.',
      'P.N. Bhagwati, J.',
      'P.K. Goswami, J.',
      'V.R. Krishna Iyer, J.',
      'N.L. Untwalia, J.',
      'P.S. Kailasam, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Article 356', 'Presidential Rule', 'Article 131', 'Federalism', 'Judicial Review'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 356', 'Article 131', 'Federalism', 'Emergency'],
    summary:
      'Historic 7-judge Constitution Bench decision exploring the scope of judicial review over Presidential proclamations under Article 356 and the maintainability of suits under Article 131. Held that the President’s satisfaction under Article 356 is subject to judicial review on limited grounds of mala fides or extraneous/irrelevant considerations, laying the groundwork for S.R. Bommai.',
    facts: [
      'Following the Sixth General Elections to the Lok Sabha in March 1977, the newly elected Janata Party swept the polls, while the ruling Congress Party was completely routed in Northern States.',
      'The Union Home Minister, Charan Singh, addressed a letter to the Chief Ministers of nine Congress-ruled States (including Rajasthan, Bihar, and Punjab) advising them to recommend dissolution of their State Legislative Assemblies and seek a fresh mandate from the electorate.',
      'Six State Governments filed original suits in the Supreme Court under Article 131 and writ petitions under Article 32, seeking declarations that the Home Minister letter was unconstitutional and an injunction against the invocation of Article 356.',
    ],
    issues: [
      'Whether a suit under Article 131 is maintainable by a State against the Union where legal rights of the State Government, as distinct from the State entity, are involved.',
      'Whether the satisfaction of the President under Article 356 is amenable to judicial review, or is an unreviewable political question.',
    ],
    arguments: {
      appellant: [
        'The Union Government was threatening unconstitutional dismissal of democratically elected State Assemblies, violating federalism.',
        'Lok Sabha election results cannot justify dissolving State Assemblies whose constitutional term has not expired.',
      ],
      respondent: [
        'Dissolution of assemblies and imposition of President Rule under Article 356 is a sovereign political decision not justiciable under Article 131.',
        'Complete rejection of the ruling party in Lok Sabha elections demonstrated that State governments had lost the confidence of the people.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-356',
        article: 'Article 356',
        title: 'Provisions in case of failure of constitutional machinery in States',
        subjectSlug: 'constitution',
        topicId: 'emergency',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-131',
        article: 'Article 131',
        title: 'Original jurisdiction of the Supreme Court in inter-governmental disputes',
        subjectSlug: 'constitution',
        topicId: 'judiciary',
      },
    ],
    reasoning: [
      {
        heading: 'Maintainability under Article 131 and judicial review of Article 356',
        explanation:
          'Beg, C.J. and Bhagwati, J. held that Article 131 is attracted only where a dispute involves any question on which the existence or extent of a legal right of the State depends. While the satisfaction of the President under Article 356 is subjective, it is not immune from judicial review. If the satisfaction is based on grounds which are wholly extraneous, mala fide, or irrelevant to constitutional machinery breakdown, courts have jurisdiction to strike down the proclamation.',
      },
      {
        heading: 'Political question doctrine rejected in part',
        explanation:
          'The Court rejected the absolute political question doctrine, holding that merely because a question has political complexion does not strip the court of its duty to determine constitutional limits. On facts, the complete rout of the ruling party could be viewed as a factor indicating loss of moral mandate.',
      },
    ],
    decision:
      'Suits and writ petitions dismissed. Proclamations under Article 356 were upheld. However, the Court firmly established that Presidential satisfaction under Article 356 is open to judicial scrutiny on grounds of mala fides.',
    holding:
      'Presidential satisfaction under Article 356 is subject to judicial review if it is shown to be mala fide or based on wholly extraneous considerations. Article 131 applies to disputes affecting the legal rights of the State as a political entity.',
    ratioDecidendi:
      'The satisfaction of the President under Article 356 is subjective, but not completely non-justiciable. If the proclamation is shown to be founded on mala fides or wholly irrelevant grounds having no nexus to the failure of constitutional machinery, courts have the jurisdiction to intervene. The political nature of a dispute does not deprive the Supreme Court of jurisdiction to interpret constitutional limitations.',
    obiterDicta:
      'Federalism under the Indian Constitution is qualified by strong unitary features designed to maintain national unity during political crises.',
    relatedCases: [
      {
        judgmentId: 'sr-bommai-1994',
        caseName: 'S.R. Bommai v. Union of India',
        citation: '(1994) 3 SCC 1',
        relationship: 'elaborated',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'First major Constitution Bench ruling subjecting Article 356 to judicial review on grounds of mala fides.',
      'Explored the scope of Supreme Court original jurisdiction under Article 131.',
      'Precursor to the landmark 9-judge bench ruling in S.R. Bommai (1994).',
    ],
    mcqs: [
      {
        id: 'state-of-rajasthan-mcq-1',
        question:
          'In State of Rajasthan v. Union of India (1977), what was the holding regarding judicial review of Article 356?',
        options: [
          'Presidential satisfaction under Article 356 is totally immune from judicial review under all circumstances',
          'Presidential satisfaction is open to judicial review on grounds of mala fides or extraneous considerations',
          'Only State Assemblies can review Article 356 proclamations',
          'Article 356 cannot be invoked during peace time',
        ],
        correctIndex: 1,
        explanation:
          'The 7-judge Constitution Bench held that while the President satisfaction is subjective, it is open to judicial review if challenged on grounds of mala fides or extraneous considerations.',
      },
    ],
  },
  {
    id: 'rk-garg-1981',
    caseName: 'R.K. Garg v. Union of India',
    shortName: 'R.K. Garg (Bearer Bonds)',
    citation: '(1981) 4 SCC 675',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1981,
    bench: '5-Judge Constitution Bench',
    judges: ['P.N. Bhagwati, J.', 'A.C. Gupta, J.', 'Syed Murtaza Fazal Ali, J.', 'V.D. Tulzapurkar, J.', 'A. Varadarajan, J.'],
    subject: 'Constitutional Law',
    topics: ['Economic Legislation', 'Article 14', 'Special Bearer Bonds', 'Play in the Joints', 'Presumption of Constitutionality'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 14', 'Taxation', 'Economic Laws', 'Presumption of Constitutionality'],
    summary:
      'Foundational 5-judge Constitution Bench decision establishing the doctrine of judicial restraint in economic legislation. Upheld the constitutional validity of the Special Bearer Bonds (Immunities and Exemptions) Act, 1981, holding that laws relating to economic activities must be viewed with greater latitude and "play in the joints", and that courts should not strike down economic experiments merely because better alternatives exist.',
    facts: [
      'To unearth unaccounted black money and channel it into productive economic development, the President promulgated the Special Bearer Bonds (Immunities and Exemptions) Ordinance, 1981, later enacted as an Act by Parliament.',
      'The Act permitted individuals to invest black money in Special Bearer Bonds without disclosing the source of acquisition, providing immunities from tax assessment, penalty, and prosecution under direct tax laws.',
      'R.K. Garg, a senior advocate, filed a writ petition under Article 32 challenging the Act as unconstitutional, arguing that it rewarded tax evaders and penalized honest taxpayers in violation of Article 14.',
    ],
    issues: [
      'Whether the Special Bearer Bonds Act violates Article 14 by creating an arbitrary classification that favors dishonest tax evaders over honest taxpayers.',
      'What is the standard of judicial review applied by Constitutional Courts when evaluating economic and fiscal legislation under Article 14.',
    ],
    arguments: {
      appellant: [
        'The Act grants immunity to tax evaders, legalizing black money and discriminating against honest taxpayers who pay regular taxes.',
        'The law violates the rule of law and encourages corruption in public and financial affairs.',
      ],
      respondent: [
        'Black money was operating as a parallel economy, causing severe inflation and loss of public revenue.',
        'Parliament has wide legislative discretion in economic experimentation to tackle acute financial crises.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 14',
        title: 'Equality before law — Standard of review in economic legislation',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Greater latitude and play in the joints in economic legislation',
        explanation:
          'Bhagwati, J. held that economic legislation involves complex problems of economic policy that do not admit of single dogmatic solutions. The legislature must be given greater latitude and "play in the joints" for experimentation. The court cannot sit in judgment over the economic wisdom of Parliament. Quoting Justice Holmes, the Court held that the legislature should be allowed some play in the joints because it has to deal with complex problems.',
      },
      {
        heading: 'Reasonable classification to tackle parallel economy',
        explanation:
          'Persons holding black money formed a distinct class whose assets were hidden from state revenue. Channelling these untaxed funds into state coffers served a legitimate public purpose. The classification had a rational nexus to the objective of mobilizing resources for national development.',
      },
    ],
    decision:
      'Writ petitions dismissed (Tulzapurkar, J. dissenting). The Special Bearer Bonds Act, 1981 was upheld as constitutionally valid under Article 14.',
    holding:
      'In economic matters, the legislature possesses wide discretion and experimentation powers. The Special Bearer Bonds Act does not violate Article 14, as economic laws must be granted latitude by courts.',
    ratioDecidendi:
      'Laws relating to economic activities should be viewed with greater latitude than laws touching civil rights like free speech. There is a strong presumption of constitutionality in favour of economic legislation. The judiciary does not possess the technical expertise to judge economic policies, and courts must allow "play in the joints" to the legislature unless the statute is blatantly arbitrary or capricious.',
    obiterDicta:
      'Immunity granted under the Act was strictly confined to tax laws and did not protect funds acquired through bribery, corruption, or violent crime.',
    relatedCases: [
      {
        judgmentId: 'ep-royappa-1974',
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        citation: '(1974) 4 SCC 3',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Establishes the doctrine of "play in the joints" and judicial restraint in economic matters under Article 14.',
      'Strong presumption of constitutionality accorded to fiscal and economic statutes.',
      'Distinguished scrutiny of civil liberties from scrutiny of economic policy.',
    ],
    mcqs: [
      {
        id: 'rk-garg-mcq-1',
        question:
          'In R.K. Garg v. Union of India (1981), what principle did the Supreme Court lay down regarding judicial review of economic legislation?',
        options: [
          'Economic laws must be subjected to strict judicial scrutiny and struck down if imperfect',
          'The legislature must be given greater latitude and "play in the joints" in economic experimentation',
          'Parliament has no power to enact tax laws with immunities',
          'Courts have absolute power to formulate taxation rates',
        ],
        correctIndex: 1,
        explanation:
          'In R.K. Garg, the Constitution Bench held that economic legislation must be allowed greater latitude and "play in the joints" for experimentation under Article 14.',
      },
    ],
  },
  {
    id: 'krishna-kumar-singh-2017',
    caseName: 'Krishna Kumar Singh v. State of Bihar',
    shortName: 'Krishna Kumar Singh',
    citation: '(2017) 3 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction',
    year: 2017,
    bench: '7-Judge Constitution Bench',
    judges: [
      'T.S. Thakur, C.J.',
      'Madan B. Lokur, J.',
      'S.A. Bobde, J.',
      'Adarsh Kumar Goel, J.',
      'U.U. Lalit, J.',
      'D.Y. Chandrachud, J.',
      'L. Nageswara Rao, J.',
    ],
    subject: 'Constitutional Law',
    topics: ['Ordinance Making Power', 'Article 213', 'Article 123', 'Re-promulgation', 'Fraud on the Constitution'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 213', 'Article 123', 'Ordinance', 'Separation of Powers'],
    summary:
      'Landmark 7-judge Constitution Bench decision comprehensively reviewing the ordinance-making power under Articles 123 and 213. Held that the requirement of placing an ordinance before the legislature is mandatory. Successive re-promulgation of ordinances without legislative approval is an unconstitutional fraud on the Constitution. Rights created under an ordinance that has ceased to operate do not survive unless protected under an enduring character test.',
    facts: [
      'The State of Bihar promulgated the Bihar Non-Government Sanskrit Schools (Taking Over of Management and Control) Ordinance in 1989 to take over 429 private Sanskrit schools.',
      'Over the next three years, the State Government repeatedly re-promulgated the ordinance seven times without ever tabling it before the Bihar State Legislature.',
      'Eventually, the eighth ordinance lapsed in 1992, and the State Government refused to pay salaries to the teachers, claiming that the taking over had lapsed.',
      'The teachers filed writ petitions claiming that once the schools were taken over by an ordinance, the transfer created permanent rights that survived the lapsing of the ordinance.',
      'A 7-judge Constitution Bench was constituted to determine the constitutional limits of ordinance promulgation and the effect of lapsed ordinances.',
    ],
    issues: [
      'Whether the constitutional requirement of laying an ordinance before the legislature under Article 213(2)(a) is mandatory or directory.',
      'Whether the mechanical re-promulgation of ordinances is unconstitutional and a fraud on the Constitution.',
      'Whether rights, privileges, or liabilities created under an ordinance survive after the ordinance ceases to operate.',
    ],
    arguments: {
      appellant: [
        'The taking over of schools was an irreversible completed transaction that could not be undone by the lapsing of the ordinance.',
        'Teachers acquired vested property rights to salary and service status under Article 21 and 300A.',
      ],
      respondent: [
        'Repeated re-promulgation was an unconstitutional subversion of the legislature; an ordinance is temporary and cannot create permanent fiscal burdens after it lapses.',
        'Laying the ordinance before the assembly was deliberately avoided, rendering the ordinance void.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'executive-ordinance-pardon',
        title: 'Executive Ordinance Powers — Mandatory legislative laying',
        subjectSlug: 'constitution',
        topicId: 'executive-ordinance-pardon',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-213',
        article: 'Article 213',
        title: 'Power of Governor to promulgate Ordinances — Mandatory constraints',
        subjectSlug: 'constitution',
        topicId: 'art-213',
      },
    ],
    reasoning: [
      {
        heading: 'Mandatory nature of laying ordinances before legislature',
        explanation:
          'Chandrachud, J. for the majority held that placing an ordinance before the legislature is a mandatory constitutional duty. The failure to lay an ordinance before the legislature constitutes a serious constitutional infraction, defeating legislative oversight. Re-promulgation of ordinances without legislative approval is an impermissible usurpation of legislative power and a fraud on the Constitution.',
      },
      {
        heading: 'The test of enduring rights under a lapsed ordinance',
        explanation:
          'An ordinance is by nature temporary and conditional. Rights created under an ordinance do not automatically survive its expiration. Whether an act done under an expired ordinance survives depends on whether the effects are irreversible, whether reversing them is impractical, and whether public interest requires their preservation (the enduring character test).',
      },
    ],
    decision:
      'Appeals dismissed. Re-promulgation held unconstitutional. The taking over of Sanskrit schools did not survive the lapsing of the ordinance, though unpaid salaries for the period of actual service were directed to be settled.',
    holding:
      'Laying an ordinance before the legislature under Article 213(2) is mandatory. Re-promulgation of ordinances is a fraud on the Constitution. Rights created under an ordinance cease upon its expiry unless they possess an irreversible and enduring character.',
    ratioDecidendi:
      'The requirement of placing an ordinance before the elected legislature is mandatory. The ordinance-making power under Article 123 and 213 cannot be utilized to subvert the legislative process. Repeated re-promulgation without legislative enactment is a subversion of the democratic process and a fraud on constitutional power. Rights created under an ordinance do not automatically survive its lapse.',
    obiterDicta:
      'The Court emphasized that the executive has no power to govern through decree in a constitutional democracy founded on the rule of law.',
    relatedCases: [
      {
        judgmentId: 'dc-wadhwa-1987',
        caseName: 'Dr. D.C. Wadhwa v. State of Bihar',
        citation: '(1987) 1 SCC 378',
        relationship: 'elaborated',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      '7-judge Constitution Bench ruling expanding on D.C. Wadhwa.',
      'Settled that laying an ordinance before the legislature is mandatory, not directory.',
      'Formulated the "enduring character test" for rights created under lapsed ordinances.',
    ],
    mcqs: [
      {
        id: 'krishna-kumar-singh-mcq-1',
        question:
          'In Krishna Kumar Singh v. State of Bihar (2017), the 7-judge Constitution Bench held that laying an ordinance before the legislature under Article 213 is:',
        options: [
          'Purely directory and can be omitted by the Governor',
          'Mandatory, and failure to lay constitutes a constitutional infraction',
          'Applicable only to financial ordinances',
          'Required only when Parliament is also in session',
        ],
        correctIndex: 1,
        explanation:
          'The 7-judge bench held that placing an ordinance before the legislature is a mandatory constitutional duty, and failure to do so violates the democratic constitutional scheme.',
      },
    ],
  },
  {
    id: 'anoop-baranwal-2023',
    caseName: 'Anoop Baranwal v. Union of India (Election Commission Appointments)',
    shortName: 'Anoop Baranwal',
    citation: '(2023) 6 SCC 161',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2023,
    bench: '5-Judge Constitution Bench',
    judges: ['K.M. Joseph, J.', 'Ajay Rastogi, J.', 'Aniruddha Bose, J.', 'Hrishikesh Roy, J.', 'C.T. Ravikumar, J.'],
    subject: 'Constitutional Law',
    topics: ['Election Commission', 'Article 324', 'Institutional Independence', 'Separation of Powers', 'Free and Fair Elections'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 324', 'Election Commission', 'Democracy', 'Separation of Powers'],
    summary:
      'Landmark 5-judge Constitution Bench ruling safeguarding the independence of the Election Commission of India. Held that until Parliament enacted a law under Article 324(2), the appointment of the Chief Election Commissioner (CEC) and Election Commissioners (ECs) shall be made by the President on the advice of a high-powered selection committee comprising the Prime Minister, the Leader of Opposition, and the Chief Justice of India.',
    facts: [
      'Under Article 324(2) of the Constitution, the appointment of the Chief Election Commissioner and Election Commissioners was to be made by the President, "subject to the provisions of any law made in that behalf by Parliament".',
      'For over seven decades, Parliament failed to enact any law governing appointments, leaving the executive in exclusive control of appointing election commissioners.',
      'Public interest writ petitions were filed under Article 32 challenging the executive monopoly over appointments as destructive of election commission independence and democracy.',
    ],
    issues: [
      'Whether the executive monopoly over appointments to the Election Commission of India under Article 324(2) violates democracy and the rule of law.',
      'Whether the Supreme Court can fill the legislative vacuum by prescribing an independent selection committee until Parliament enacts a law.',
    ],
    arguments: {
      appellant: [
        'An election commission beholden to the ruling executive cannot ensure free and fair elections, which is part of the basic structure.',
        'Parliament failure to enact a law for 73 years created an unconstitutional vacuum that the Court must remedy under Article 142.',
      ],
      respondent: [
        'The Constitution entrusts appointments to the President acting on the aid and advice of the Council of Ministers.',
        'Judicial creation of a selection committee violates separation of powers.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'elections-art-324',
        article: 'Article 324(2)',
        title: 'Superintendence, direction and control of elections — Appointment of CEC and ECs',
        subjectSlug: 'constitution',
        topicId: 'elections-art-324',
      },
    ],
    reasoning: [
      {
        heading: 'Independence of the Election Commission is vital for democracy',
        explanation:
          'K.M. Joseph, J. observed that a healthy democracy requires an Election Commission that is fiercely independent and insulated from the executive. A person beholden to the executive for his appointment cannot be expected to act with complete impartiality when supervising ruling party candidates. Free and fair elections are part of the basic structure.',
      },
      {
        heading: 'Filling legislative void via selection committee',
        explanation:
          'The framers used the words "subject to the provisions of any law made by Parliament" expecting Parliament to enact a selection statute. To maintain constitutional trust during legislative inaction, the Court directed that the appointment shall be made on the recommendation of a Committee consisting of the Prime Minister, the Leader of the Opposition (or single largest opposition party), and the Chief Justice of India.',
      },
    ],
    decision:
      'Writ petitions allowed. The 5-judge Constitution Bench instituted a tripartite selection committee (PM, Leader of Opposition, CJI) to select the CEC and ECs until Parliament enacted a law under Article 324(2).',
    holding:
      'The appointment of the Chief Election Commissioner and Election Commissioners must be insulated from executive monopoly. Appointments shall be made on the recommendation of a committee comprising the PM, CJI, and Leader of Opposition until statutory law is enacted.',
    ratioDecidendi:
      'Free and fair elections are an indispensable component of democracy and part of the basic structure of the Constitution. An Election Commission submissive to the executive strikes at the root of democratic governance. Until Parliament enacts a law under Article 324(2), the selection of the CEC and ECs must be made by a neutral committee consisting of the Prime Minister, the Leader of the Opposition, and the Chief Justice of India.',
    obiterDicta:
      'The Court called for parity in removal procedures between the Chief Election Commissioner and the other Election Commissioners to protect them from executive retribution.',
    relatedCases: [
      {
        judgmentId: 'indira-gandhi-election-1975',
        caseName: 'Indira Nehru Gandhi v. Raj Narain',
        citation: '1975 Supp SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Landmark Constitution Bench decision on Article 324(2) and independence of the Election Commission.',
      'Instituted a selection committee including the CJI to fill the 73-year legislative vacuum.',
      'Prompted the enactment of the Chief Election Commissioner and other Election Commissioners Act, 2023.',
    ],
    mcqs: [
      {
        id: 'anoop-baranwal-mcq-1',
        question:
          'In Anoop Baranwal v. Union of India (2023), who were the members of the selection committee prescribed by the Supreme Court for appointing the CEC and ECs?',
        options: [
          'President, Prime Minister, and Speaker of Lok Sabha',
          'Prime Minister, Leader of Opposition (or largest opposition party), and Chief Justice of India',
          'Law Minister, Attorney General, and Cabinet Secretary',
          'Chief Justice of India and four senior-most Supreme Court judges',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench directed that the selection committee shall comprise the Prime Minister, the Leader of the Opposition in the Lok Sabha, and the Chief Justice of India.',
      },
    ],
  },
  {
    id: 'supriyo-2023',
    caseName: 'Supriyo @ Supriya Chakraborty v. Union of India (Marriage Equality Case)',
    shortName: 'Supriyo v. Union of India',
    citation: '(2023) 11 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2023,
    bench: '5-Judge Constitution Bench',
    judges: ['D.Y. Chandrachud, C.J.', 'Sanjay Kishan Kaul, J.', 'S. Ravindra Bhat, J.', 'Hima Kohli, J.', 'P.S. Narasimha, J.'],
    subject: 'Constitutional Law',
    topics: ['Marriage Equality', 'Article 21', 'Special Marriage Act', 'Queer Rights', 'Separation of Powers'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 21', 'Article 14', 'LGBTQIA+', 'Marriage Equality', 'Special Marriage Act'],
    summary:
      'Constitution Bench decision on same-sex marriage equality. Unanimously recognized that queer persons have a fundamental right against discrimination, right to enter into relationships, and freedom from violence. However, by a 3:2 majority, held that there is no unqualified fundamental right to marry under the Constitution, and that reading gender-neutral language into the Special Marriage Act, 1954 would amount to judicial legislation, leaving statutory recognition of marriage to Parliament.',
    facts: [
      'Same-sex couples and queer activists filed writ petitions under Article 32 seeking legal recognition of same-sex marriages under the Special Marriage Act, 1954 (SMA) and Foreign Marriage Act, 1969.',
      'Petitioners contended that limiting marriage strictly to heterosexual couples (man and woman) violates their fundamental rights to equality (Art. 14), non-discrimination (Art. 15), freedom of expression (Art. 19(1)(a)), and personal dignity, autonomy, and privacy (Art. 21).',
      'The Union of India opposed the petitions, arguing that defining marriage is a core legislative domain rooted in cultural and religious values and that altering the SMA would destabilize diverse personal and succession statutes.',
    ],
    issues: [
      'Whether there is a fundamental right to marry under the Constitution of India.',
      'Whether the provisions of the Special Marriage Act, 1954 are unconstitutional for excluding same-sex couples, or can be read down to be gender-neutral.',
      'Whether queer couples have the legal right to joint adoption under the Juvenile Justice Act and CARA regulations.',
    ],
    arguments: {
      appellant: [
        'Exclusion from civil marriage denies queer couples vital consequential rights including succession, insurance, maintenance, and joint adoption.',
        'After Navtej Johar and Puttaswamy, personal autonomy and intimacy entitle queer citizens to equal marriage rights.',
      ],
      respondent: [
        'Marriage is an institution created and recognized by statute and societal norms, not an automatic common law fundamental right.',
        'Rewriting the Special Marriage Act would entail massive redrafting of intertwined personal, divorce, and maintenance laws.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to privacy, dignity, and autonomy — Scope of marriage rights',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
      {
        actId: 'family',
        actName: 'Special Marriage Act, 1954',
        provisionId: 'special-marriage',
        title: 'Civil marriage framework and heterosexual definition',
        subjectSlug: 'family',
        topicId: 'special-marriage',
      },
    ],
    reasoning: [
      {
        heading: 'No fundamental right to marry under Article 21',
        explanation:
          'Bhat, J. for the majority (joined by Kohli and Narasimha, JJ.) held that marriage is a social institution regulated by law. An entitlement to legal recognition of marriage cannot flow automatically from the right to personal liberty. A right to marry is not a fundamental right in itself, although the right of individuals to choose partners and live together is fully protected under Article 21.',
      },
      {
        heading: 'Limits of judicial review regarding the Special Marriage Act',
        explanation:
          'The Court held that reading the SMA as gender-neutral would create widespread anomalies across various provisions dealing with alimony, maintenance, domestic violence, and succession that were specifically enacted for the protection of women. It is for Parliament, not courts, to craft a comprehensive legal framework recognizing queer unions.',
      },
    ],
    decision:
      'Writ petitions dismissed regarding prayer for marriage equality under SMA. The Court recorded the Union Government assurance to set up a high-level Cabinet Committee to explore administrative and financial benefits for same-sex partners.',
    holding:
      'There is no fundamental right to marry under the Constitution of India. The Special Marriage Act cannot be judicially rewritten to include same-sex unions. Legal recognition of marriage equality falls within the domain of Parliament.',
    ratioDecidendi:
      'The Constitution does not expressly or implicitly guarantee a fundamental right to marry. While queer couples have the right to cohabit without state interference and are protected against discrimination under Articles 14 and 15, the creation of a legal status of marriage with attendant civil rights is exclusively within the legislative competence of Parliament and State Legislatures.',
    obiterDicta:
      'The Court unanimously condemned societal harassment of queer persons and directed police authorities to establish shelter homes and refrain from harassing same-sex couples.',
    relatedCases: [
      {
        judgmentId: 'navtej-johar-2018',
        caseName: 'Navtej Singh Johar v. Union of India',
        citation: '(2018) 1 SCC 791',
        relationship: 'elaborated',
      },
      {
        judgmentId: 'puttaswamy-2017',
        caseName: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Settled that there is no fundamental right to marry under Article 21 of the Indian Constitution.',
      'Refused to judicially rewrite the Special Marriage Act, 1954 to include same-sex couples.',
      'Separation of powers benchmark regarding judicial restraint in creating new civil statuses.',
    ],
    mcqs: [
      {
        id: 'supriyo-mcq-1',
        question:
          'In Supriyo @ Supriya Chakraborty v. Union of India (2023), the 5-judge Constitution Bench held that:',
        options: [
          'Same-sex marriage is guaranteed as an absolute fundamental right under Article 21',
          'There is no fundamental right to marry, and legal recognition of marriage falls within the domain of Parliament',
          'Same-sex couples cannot live together in India',
          'The Special Marriage Act is unconstitutional in its entirety',
        ],
        correctIndex: 1,
        explanation:
          'The majority held that there is no fundamental right to marry under the Constitution, and that legalizing same-sex marriage is a legislative task for Parliament.',
      },
    ],
  },
  {
    id: 'kaushal-kishor-2023',
    caseName: 'Kaushal Kishor v. State of Uttar Pradesh',
    shortName: 'Kaushal Kishor',
    citation: '(2023) 4 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2023,
    bench: '5-Judge Constitution Bench',
    judges: ['S. Abdul Nazeer, J.', 'B.R. Gavai, J.', 'A.S. Bopanna, J.', 'V. Ramasubramanian, J.', 'B.V. Nagarathna, J.'],
    subject: 'Constitutional Law',
    topics: ['Horizontal Application', 'Article 19', 'Article 21', 'Free Speech Limits', 'Minister Liability'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 19', 'Article 21', 'Horizontal Application', 'Fundamental Rights'],
    summary:
      'Constitution Bench precedent holding that the fundamental rights under Articles 19 and 21 are enforceable horizontally against non-State actors and private individuals, not merely vertically against the State. Held that no additional restrictions can be imposed on the free speech of Ministers and public functionaries beyond the exhaustive grounds in Article 19(2), and statements made by Ministers cannot be vicariously attributed to the State.',
    facts: [
      'In a sensational gang-rape case on the National Highway near Bulandshahr, Uttar Pradesh, a senior State Cabinet Minister made public statements to the press terming the incident a "political conspiracy" to malign the state government.',
      'The victims and their families approached the Supreme Court under Article 32, aggrieved that public statements by ministers undermined a fair investigation and violated their dignity under Article 21.',
      'Questions arose regarding whether restrictions beyond Article 19(2) can be placed on speech by persons holding high public office, and whether Articles 19 and 21 can be enforced horizontally against private persons.',
    ],
    issues: [
      'Whether the grounds of reasonable restriction on free speech in Article 19(2) are exhaustive, or can be supplemented by other fundamental rights like Article 21 dignity.',
      'Whether fundamental rights under Articles 19 and 21 can be enforced against persons other than the State (horizontal application).',
      'Whether a statement made by a Minister can be vicariously attributed to the Government under the principle of collective responsibility.',
    ],
    arguments: {
      appellant: [
        'Ministers holding public office owe a fiduciary constitutional duty to citizens; irresponsible speech violates Article 21 dignity.',
        'Fundamental rights must be enforceable horizontally against powerful private actors and individuals.',
      ],
      respondent: [
        'The grounds in Article 19(2) are strictly exhaustive; courts cannot create new speech restrictions.',
        'Collective responsibility under Article 75/164 applies to formal governmental decisions, not individual utterances.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-19',
        article: 'Article 19(1)(a) & 19(2)',
        title: 'Freedom of speech and exhaustive grounds of restriction',
        subjectSlug: 'constitution',
        topicId: 'art-19',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to life and dignity — Horizontal enforcement against private persons',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Horizontal application of Articles 19 and 21',
        explanation:
          'Ramasubramanian, J. for the majority held that a fundamental right under Article 19 or 21 can be enforced even against persons other than the State or its instrumentalities. Following global constitutional trends, where private power causes a grave violation of bodily autonomy or liberty, constitutional courts can grant relief under Article 32 and 226.',
      },
      {
        heading: 'Exhaustive nature of Article 19(2) and Minister statements',
        explanation:
          'The eight grounds of restriction in Article 19(2) are exhaustive; no additional restrictions can be judicially grafted on the speech of public functionaries. Furthermore, a statement made by a Minister cannot be vicariously attributed to the Government unless it represents official government policy approved by the Cabinet.',
      },
    ],
    decision:
      'Reference answered. Held that Articles 19 and 21 have horizontal application, restrictions under Article 19(2) are exhaustive, and minister statements are individual and not vicariously governmental.',
    holding:
      'Fundamental rights under Articles 19 and 21 can be enforced against non-state entities and individuals. The grounds of restriction on free speech under Article 19(2) are exhaustive. Statements made by a Minister are not vicariously attributable to the State.',
    ratioDecidendi:
      'A fundamental right under Article 19 or Article 21 can be enforced against persons other than the State or its instrumentalities. The grounds specified in Article 19(2) are exhaustive, and no additional restrictions can be imported on the free speech of Ministers. A statement made by a Minister, even if touching upon state affairs, cannot be vicariously attributed to the Government under collective responsibility unless endorsed by the Council of Ministers.',
    obiterDicta:
      'Nagarathna, J. in her concurring opinion highlighted that public functionaries must exercise self-restraint and avoid derogatory remarks that debase constitutional discourse.',
    relatedCases: [
      {
        judgmentId: 'puttaswamy-2017',
        caseName: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Affirmed the horizontal applicability of Articles 19 and 21 against private non-state actors.',
      'Settled that the grounds of reasonable restriction in Article 19(2) are completely exhaustive.',
      'Clarified that individual utterances of Ministers cannot be attributed to the State Government.',
    ],
    mcqs: [
      {
        id: 'kaushal-kishor-mcq-1',
        question:
          'In Kaushal Kishor v. State of U.P. (2023), what did the Constitution Bench hold regarding the enforcement of Articles 19 and 21 against private persons?',
        options: [
          'Articles 19 and 21 can be enforced only against the State under Article 12',
          'Articles 19 and 21 can be enforced horizontally even against persons other than the State',
          'Only the President can enforce Article 19',
          'Private individuals are immune from all constitutional writs',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that fundamental rights under Articles 19 and 21 are enforceable horizontally against persons other than the State.',
      },
    ],
  },
  {
    id: 'kailash-chand-2005',
    caseName: 'Kailash v. Nanhku',
    shortName: 'Kailash v. Nanhku',
    citation: '(2005) 4 SCC 480',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2005,
    bench: '3-Judge Bench',
    judges: ['R.C. Lahoti, C.J.', 'Ashok Bhan, J.', 'G.P. Mathur, J.'],
    subject: 'Code of Civil Procedure',
    topics: ['Order VIII Rule 1 CPC', 'Written Statement', 'Time Limit Directory', 'Procedural Law', 'Justice Over Form'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Order VIII', 'Written Statement', 'Procedural Law', 'Limitation'],
    summary:
      'Landmark 3-judge bench precedent holding that the 90-day time limit for filing a Written Statement under Order VIII Rule 1 CPC (as amended in 2002) is directory and not mandatory. Procedural law is a handmaid of justice, not its mistress; in exceptional and grave circumstances, the court has discretionary power to extend time beyond 90 days upon payment of costs.',
    facts: [
      'In an election petition under the Representation of the People Act, 1951, the respondent failed to file his written statement within the 90-day period prescribed under Order VIII Rule 1 CPC.',
      'The High Court allowed an application for extension of time and took the written statement on record on reasons showing unavoidable delay.',
      'The appellant challenged the order before the Supreme Court, contending that after the 2002 CPC amendment, the court had no jurisdiction to accept a written statement after the outer limit of 90 days.',
    ],
    issues: [
      'Whether the time limit of 30 days extendable up to 90 days for filing a written statement under Order VIII Rule 1 CPC is mandatory or directory.',
      'Whether the civil court retains inherent power to condone delay beyond 90 days in exceptional cases to prevent miscarriage of justice.',
    ],
    arguments: {
      appellant: [
        'The word "shall" in Order VIII Rule 1 and the fixation of a maximum 90-day ceiling indicate an absolute legislative prohibition.',
        'Permitting delayed written statements defeats the parliamentary objective of speedy civil trials.',
      ],
      respondent: [
        'Rules of procedure are designed to advance justice, not trap litigants due to circumstances beyond their control.',
        'The provision does not prescribe an automatic dismissal or striking off of defence if 90 days are exceeded.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 'pleadings',
        section: 'Order VIII Rule 1',
        title: 'Written statement — Time limit for filing and judicial discretion',
        subjectSlug: 'cpc',
        topicId: 'pleadings',
      },
    ],
    reasoning: [
      {
        heading: 'Procedure is the handmaid of justice',
        explanation:
          'Lahoti, C.J. famously reiterated that all the rules of procedure are the handmaids of justice. The language of Order VIII Rule 1, though couched in negative form, does not specify penal consequences like striking off the defence. The provision is directory and procedural, designed to curb dilatory tactics but not to tie the hands of the court when justice demands condonation.',
      },
      {
        heading: 'Exceptional circumstances and compensatory costs',
        explanation:
          'Extension beyond 90 days cannot be granted on mere asking; it must be supported by exceptional, unavoidable circumstances (such as sudden illness, strikes, or records lost). The court must record reasons in writing and compensate the plaintiff through heavy costs.',
      },
    ],
    decision:
      'Appeal dismissed. The Supreme Court upheld the extension of time, declaring Order VIII Rule 1 CPC to be directory in nature.',
    holding:
      'The 90-day time limit for filing a written statement under Order VIII Rule 1 CPC is directory. The court has power in exceptional circumstances to accept a written statement filed beyond 90 days upon payment of costs.',
    ratioDecidendi:
      'Order VIII Rule 1 of the Code of Civil Procedure, 1908 is directory and not mandatory. The prescription of a 90-day period does not take away the inherent power of the court to do justice between the parties. However, extension beyond 90 days must be an exception granted only in rare and extraordinary circumstances with reasons recorded in writing and upon imposition of costs.',
    obiterDicta:
      'Judges must not routinely grant adjournments on routine grounds, as the statutory purpose was to prevent endless delays in civil litigation.',
    relatedCases: [
      {
        judgmentId: 'manohar-lal-chopra-1962',
        caseName: 'Manohar Lal Chopra v. Rai Bahadur Rao Raja Seth Hiralal',
        citation: 'AIR 1962 SC 527',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Settled that Order VIII Rule 1 CPC 90-day limit for filing written statement is directory.',
      'Reaffirmed the maxim "Procedure is the handmaid of justice, not its mistress".',
      'Required exceptional circumstances, recorded reasons, and costs for extensions beyond 90 days.',
    ],
    mcqs: [
      {
        id: 'kailash-nanhku-mcq-1',
        question:
          'In Kailash v. Nanhku (2005), what was the holding of the Supreme Court regarding the 90-day time limit under Order VIII Rule 1 CPC?',
        options: [
          'It is strictly mandatory and the court has zero power to extend time after 90 days',
          'It is directory, and the court may extend time in exceptional circumstances upon payment of costs',
          'It applies only to suits where the Government is a party',
          'It has been repealed by the Supreme Court',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that the 90-day time limit under Order VIII Rule 1 CPC is directory and not mandatory, allowing courts to accept delayed written statements in exceptional cases.',
      },
    ],
  },
  {
    id: 'salem-advocate-bar-2005',
    caseName: 'Salem Advocate Bar Assn. (II) v. Union of India',
    shortName: 'Salem Bar Association (II)',
    citation: '(2005) 6 SCC 344',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 2005,
    bench: '3-Judge Bench',
    judges: ['Y.K. Sabharwal, J.', 'D.M. Dharmadhikari, J.', 'Tarun Chatterjee, J.'],
    subject: 'Code of Civil Procedure',
    topics: ['CPC Amendments', 'Section 89 CPC', 'ADR Mediation Rules', 'Costs under Section 35', 'Order VIII Rule 1'],
    tags: ['AIBE', 'Judiciary', 'CPC', 'Section 89', 'ADR', 'Mediation', 'Order VIII', 'Civil Reforms'],
    summary:
      'Landmark 3-judge bench decision upholding the 1999 and 2002 amendments to the Code of Civil Procedure, 1908. Formulated comprehensive model rules for court-referred Alternative Dispute Resolution (ADR) and mediation under Section 89 CPC, and provided operating guidelines for realistic costs under Section 35 CPC and written statements under Order VIII Rule 1.',
    facts: [
      'Following the report of the Malimath Committee, Parliament enacted substantial amendments to the CPC via the Code of Civil Procedure (Amendment) Acts of 1999 and 2002 to curb delays.',
      'The Salem Advocate Bar Association challenged the constitutional validity of numerous amended provisions, including Section 89 (mandatory referral to ADR), limits on written statements (Order VIII Rule 1), restrictions on cross-examination by commissioner, and capping adjournments.',
      'In Salem Bar (I) (2003), the Supreme Court upheld the constitutional validity of the amendments and appointed a Committee headed by Justice M. Jagannadha Rao to draft model rules.',
      'In Salem Bar (II) (2005), the Court considered the Committee report and issued authoritative nationwide guidelines.',
    ],
    issues: [
      'How should trial courts implement mandatory referral to Alternative Dispute Resolution under Section 89 CPC.',
      'What are the procedural safeguards for evidence recording by court commissioners under Order XVIII Rule 4.',
      'How should courts award realistic actual costs under Section 35 CPC to deter vexatious litigation.',
    ],
    arguments: {
      appellant: [
        'The amendments impose rigid mechanical deadlines that undermine judicial discretion and cause hardship to litigants.',
        'Section 89 lacks a statutory framework for mediation procedures.',
      ],
      respondent: [
        'Amendments were imperative to tackle backlogs of millions of pending civil suits.',
        'Court-annexed mediation and realistic costs are successful international practices.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Code of Civil Procedure, 1908',
        provisionId: 's-89',
        section: 'Section 89',
        title: 'Settlement of disputes outside the Court (Arbitration, Conciliation, Mediation, Lok Adalat)',
        subjectSlug: 'cpc',
        topicId: 's-89',
      },
    ],
    reasoning: [
      {
        heading: 'Operationalizing Section 89 and Model Mediation Rules',
        explanation:
          'Sabharwal, J. approved the model Civil Procedure Alternative Dispute Resolution and Mediation Rules drafted by the Jagannadha Rao Committee. Under Section 89, after pleadings are complete, the court must explore whether a case is suitable for ADR (arbitration, conciliation, judicial settlement, Lok Adalat, or mediation) and direct parties accordingly.',
      },
      {
        heading: 'Realistic actual costs to deter frivolous litigation',
        explanation:
          'Under Section 35 CPC, costs follow the event. The Court observed that awarding token nominal costs of a few hundred rupees encourages frivolous litigation. Courts must award actual realistic costs, including advocate fees, witness travel expenses, and compensation for time lost, to deter groundless claims.',
      },
    ],
    decision:
      'Writ petitions disposed of. The 1999 and 2002 CPC amendments were operationalized with comprehensive model rules for mediation under Section 89, evidence on affidavit, and realistic costs under Section 35.',
    holding:
      'Section 89 and the 1999/2002 CPC amendments are constitutionally valid and functional. Model ADR rules adopted nationwide to govern mediation, conciliation, and judicial dispute settlement.',
    ratioDecidendi:
      'Section 89 CPC is an essential mechanism for reducing civil court congestion by referring eligible cases to ADR methods. The model rules formulated by the Supreme Court provide a complete procedural code for court-referred mediation. Courts are empowered to award realistic costs under Section 35 CPC to penalize vexatious and false litigation.',
    obiterDicta:
      'All High Courts were directed to adopt the Model ADR and Mediation Rules within their respective jurisdictions to institutionalize court-annexed mediation.',
    relatedCases: [
      {
        judgmentId: 'kailash-chand-2005',
        caseName: 'Kailash v. Nanhku',
        citation: '(2005) 4 SCC 480',
        relationship: 'followed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Approved model rules for implementation of Section 89 CPC (ADR and Mediation).',
      'Directed High Courts to institutionalize court-annexed mediation centers.',
      'Advocated realistic costs under Section 35 CPC to deter vexatious litigation.',
    ],
    mcqs: [
      {
        id: 'salem-bar-mcq-1',
        question:
          'In Salem Advocate Bar Association (II) v. Union of India (2005), which major reform did the Supreme Court institutionalize under Section 89 CPC?',
        options: [
          'Abolition of all second appeals under Section 100',
          'Model Rules for court-referred Alternative Dispute Resolution and Mediation',
          'Mandatory trial by jury in civil cases',
          'Permanent stay of all recovery suits against farmers',
        ],
        correctIndex: 1,
        explanation:
          'In Salem Advocate Bar (II), the Supreme Court approved model rules for court-referred ADR and mediation under Section 89 CPC to resolve disputes out of court.',
      },
    ],
  },
  {
    id: 'suraj-lamp-2012',
    caseName: 'Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana',
    shortName: 'Suraj Lamp',
    citation: '(2012) 1 SCC 656',
    court: 'Supreme Court of India',
    jurisdiction: 'Special Leave Jurisdiction',
    year: 2011,
    bench: '3-Judge Bench',
    judges: ['R.V. Raveendran, J.', 'A.K. Patnaik, J.', 'H.L. Gokhale, J.'],
    subject: 'Code of Civil Procedure',
    topics: ['Property Transfer', 'Section 54 TPA', 'Power of Attorney Sale', 'Registration Act', 'Title Transfer'],
    tags: ['AIBE', 'Judiciary', 'Property Law', 'TPA', 'Registration', 'Power of Attorney', 'Suraj Lamp'],
    summary:
      'Authoritative 3-judge bench precedent putting an end to the illegal practice of "SA/GPA/WILL transfers". Held that immovable property can be legally transferred only by a registered deed of conveyance under Section 54 of the Transfer of Property Act, 1882 and the Registration Act, 1908. A general power of attorney (GPA), sale agreement, or will does not convey title or create any proprietary interest in immovable property.',
    facts: [
      'Across various States (notably Delhi, Haryana, and Uttar Pradesh), property sellers and buyers routinely executed sale transactions through an informal package of documents: Agreement to Sell (SA), General Power of Attorney (GPA), Special Power of Attorney (SPA), Affidavit, and Will, instead of registered sale deeds.',
      'This practice was devised to evade payment of stamp duty and registration fees, avoid capital gains tax, invest black money, and circumvent land ceiling restrictions.',
      'Suraj Lamp and Industries Pvt. Ltd. filed an appeal highlighting how GPA sales were spawning endless title litigation and criminal land grabbing.',
      'The Supreme Court treated the matter as a public interest issue to authoritatively decide whether SA/GPA/Will transactions confer legal title.',
    ],
    issues: [
      'Whether immovable property can be lawfully transferred or title conveyed through an Agreement to Sell, General Power of Attorney, and Will without a registered sale deed.',
      'What is the legal effect of SA/GPA/Will transactions executed prior to the date of the judgment.',
    ],
    arguments: {
      appellant: [
        'GPA sales create chaotic land records, promote fraudulent multiple sales of the same plot, and facilitate real estate mafias.',
        'Statutory laws mandate registration of deeds under Section 54 TPA and Section 17 Registration Act.',
      ],
      respondent: [
        'The practice was widely recognized for decades and formed the basis of possession for millions of middle-class home buyers.',
        'Revoking such transactions retrospectively would cause widespread hardship.',
      ],
    },
    provisions: [
      {
        actId: 'cpc',
        actName: 'Transfer of Property Act, 1882',
        provisionId: 'jurisdiction',
        section: 'Section 54 TPA & Section 17 Registration Act',
        title: 'Transfer of immovable property — Mandatory registered conveyance',
        subjectSlug: 'cpc',
        topicId: 'jurisdiction',
      },
    ],
    reasoning: [
      {
        heading: 'No transfer of title without registered conveyance',
        explanation:
          'Raveendran, J. held that an Agreement to Sell does not create any interest in or charge on property under Section 54 TPA. A power of attorney is a mere creation of agency authorizing the agent to do acts on behalf of the principal; it does not confer ownership or title on the agent. A will takes effect only after the death of the testator. Consequently, a bundle of SA/GPA/Will documents cannot be recognized as a deed of conveyance or transfer of title.',
      },
      {
        heading: 'Prospective clarification and bona fide transactions',
        explanation:
          'The Court clarified that the judgment will not affect genuine transactions where a GPA is executed in favor of a family member or developer to execute deeds, nor will it invalidate titles already perfected by registered deeds. However, courts and municipal authorities were directed not to treat GPA transactions as valid transfers of title.',
      },
    ],
    decision:
      'Directions issued. The Supreme Court declared that immovable property can be transferred only by a registered deed of conveyance. SA/GPA/Will transfers convey no title and do not constitute sales.',
    holding:
      'Immovable property can be transferred only by a registered deed of conveyance. Transactions entered into through Agreement to Sell, General Power of Attorney, and Will do not convey title or create ownership.',
    ratioDecidendi:
      'A transfer of immovable property by way of sale can only be effected by a deed of conveyance duly stamped and registered as required by law. An Agreement to Sell, Power of Attorney, or Will does not convey title and does not amount to a transfer or sale under Section 54 of the Transfer of Property Act, 1882 or Section 17 of the Registration Act, 1908. Municipal corporations and registration authorities cannot recognize GPA transactions as transfers of ownership.',
    obiterDicta:
      'State Governments were directed to reduce excessive stamp duties to encourage citizens to execute formal registered conveyance deeds.',
    relatedCases: [
      {
        judgmentId: 'k-t-plantation-2011',
        caseName: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka',
        citation: '(2011) 9 SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Settled that "GPA/SA/Will" transactions do NOT convey title or ownership in immovable property.',
      'Affirmed that Section 54 TPA and Section 17 Registration Act strictly mandate registered conveyance.',
      'Key reference for real estate, conveyancing, and property litigation.',
    ],
    mcqs: [
      {
        id: 'suraj-lamp-mcq-1',
        question:
          'What did the Supreme Court hold in Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana (2012) regarding property transfers?',
        options: [
          'Sale of immovable property can be legally completed via an unregistered General Power of Attorney',
          'Immovable property can be transferred only by a registered deed of conveyance, and GPA/Will sales convey no title',
          'Only public companies are exempt from paying stamp duty',
          'A Will immediately transfers title during the lifetime of the testator',
        ],
        correctIndex: 1,
        explanation:
          'In Suraj Lamp (2012), the Supreme Court ruled that SA/GPA/Will transactions do not convey title, and transfers can only be effected through registered deeds under Section 54 TPA.',
      },
    ],
  },
  {
    id: 'motilal-padampat-1979',
    caseName: 'Motilal Padampat Sugar Mills Co. Ltd. v. State of Uttar Pradesh',
    shortName: 'M.P. Sugar Mills',
    citation: '(1979) 2 SCC 409',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1979,
    bench: '2-Judge Bench',
    judges: ['P.N. Bhagwati, J.', 'V.D. Tulzapurkar, J.'],
    subject: 'Administrative Law',
    topics: ['Promissory Estoppel', 'State Liability', 'Section 115 Evidence Act', 'Equity', 'Executive Action'],
    tags: ['AIBE', 'Judiciary', 'Administrative Law', 'Promissory Estoppel', 'Contract', 'Evidence', 'Article 14'],
    summary:
      'Seminal Supreme Court precedent establishing the modern doctrine of Promissory Estoppel against the Government in India. Held that where the Government makes a clear and unequivocal representation intending to create legal relations and a citizen acts upon it to his detriment, the Government is bound by the promise and cannot arbitrarily resile from it, except by establishing a superior public interest.',
    facts: [
      'The State of Uttar Pradesh announced in newspaper advertisements and official statements that new industrial units set up in the State would be granted exemption from sales tax for a period of three years under the U.P. Sales Tax Act.',
      'Relying on this explicit representation, Motilal Padampat Sugar Mills Co. Ltd. established a vanaspati manufacturing plant at Kanpur, borrowing substantial loans from financial institutions.',
      'The company confirmed the exemption promise in official correspondence with the Chief Secretary and the Director of Industries.',
      'Later, when the factory was near completion, the State Government changed its policy and refused to grant the promised sales tax exemption.',
      'The company filed a writ petition before the Allahabad High Court, which was dismissed.',
      'The company appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the doctrine of promissory estoppel can be invoked against the Government to enforce an executive promise in the absence of a formal contract under Article 299.',
      'Whether promissory estoppel requires proof of actual financial damage or merely that the promisee altered his position in reliance upon the promise.',
      'What are the exceptions to the doctrine of promissory estoppel when public interest is pleaded by the State.',
    ],
    arguments: {
      appellant: [
        'The appellant altered its position by investing crores of rupees based on the unequivocal representation of the State.',
        'The Government cannot break its solemn promise to citizens on a whim without overriding public interest.',
      ],
      respondent: [
        'Promissory estoppel cannot override Article 299 which requires all government contracts to be in writing and signed by the Governor.',
        'Executive tax policy is sovereign and cannot be fettered by estoppel.',
      ],
    },
    provisions: [
      {
        actId: 'admin',
        actName: 'Administrative Law Principles',
        provisionId: 'admin-promissory-estoppel',
        title: 'Doctrine of Promissory Estoppel against the State',
        subjectSlug: 'admin',
        topicId: 'admin-promissory-estoppel',
      },
      {
        actId: 'bsa',
        actName: 'Bharatiya Sakshya Adhiniyam, 2023',
        provisionId: 'doctrine-estoppel',
        section: 'Section 121 (legacy s. 115 Evidence Act)',
        title: 'Estoppel and equitable estoppel against executive representations',
        subjectSlug: 'bsa',
        topicId: 'doctrine-estoppel',
      },
    ],
    reasoning: [
      {
        heading: 'Birth of promissory estoppel as an independent cause of action',
        explanation:
          'Bhagwati, J. held that promissory estoppel is an equitable principle evolved to prevent injustice. It is not constrained by traditional contract law rules of consideration or Article 299 formal requirements. It can form the basis of a cause of action (a sword and not merely a shield) where a party has altered his position relying upon an executive representation.',
      },
      {
        heading: 'Burden on the State to demonstrate superior public interest',
        explanation:
          'The Government cannot escape its promise on a mere claim of change of policy. To defeat promissory estoppel, the Government must place facts before the court showing that an overriding public interest arose which supervenes the equity in favor of the citizen. No such public interest was proved by the State of U.P.',
      },
    ],
    decision:
      'Appeal allowed. The State Government was directed to grant sales tax exemption to the appellant company for the promised three-year period. Promissory estoppel was held enforceable against the Government.',
    holding:
      'The doctrine of promissory estoppel is applicable against the Government. When the Government makes a clear promise intending it to be acted upon and a citizen alters his position, the Government is bound by the promise unless overriding public interest is proved.',
    ratioDecidendi:
      'The doctrine of promissory estoppel is not limited to contract law and does not require formal compliance with Article 299. Where the Government makes a clear and unequivocal promise knowing that it would be acted upon, and the promisee alters his position in reliance upon it, equity will bind the Government. The Government can resile from the promise only by demonstrating that a superior public interest justifies the change of policy.',
    obiterDicta:
      'Promissory estoppel cannot be invoked against the exercise of legislative functions or to compel the Government to act contrary to law.',
    relatedCases: [
      {
        judgmentId: 'ep-royappa-1974',
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        citation: '(1974) 4 SCC 3',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Leading authority on the Doctrine of Promissory Estoppel in Indian administrative law.',
      'Established that promissory estoppel can be a sword (cause of action) and not merely a shield.',
      'Clarified that overriding public interest is the only valid defense for the State to resile from its promise.',
    ],
    mcqs: [
      {
        id: 'mp-sugar-mills-mcq-1',
        question:
          'In Motilal Padampat Sugar Mills v. State of U.P. (1979), the Supreme Court ruled that promissory estoppel against the Government:',
        options: [
          'Can never be applied against any state instrumentality',
          'Is enforceable as an independent cause of action where a citizen altered his position relying on state promises',
          'Requires compliance with Article 299 written contracts in all cases',
          'Applies only to criminal prosecutions',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court held that promissory estoppel is an equitable doctrine that binds the Government when a citizen alters his position in reliance upon clear executive representations.',
      },
    ],
  },
  {
    id: 'ramana-dayaram-shetty-1979',
    caseName: 'Ramana Dayaram Shetty v. International Airport Authority of India',
    shortName: 'Ramana Dayaram Shetty',
    citation: '(1979) 3 SCC 489',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate / Constitutional Jurisdiction',
    year: 1979,
    bench: '3-Judge Bench',
    judges: ['P.N. Bhagwati, J.', 'V.D. Tulzapurkar, J.', 'R.S. Pathak, J.'],
    subject: 'Constitutional Law',
    topics: ['Article 12', 'State Instrumentality', 'Government Contracts', 'Article 14', 'Rule Against Arbitrariness'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 12', 'Article 14', 'Administrative Law', 'Tenders'],
    summary:
      'Seminal 3-judge bench precedent establishing the comprehensive tests for determining whether a statutory corporation or government company is an "instrumentality or agency of the State" under Article 12. Held that the State cannot act arbitrarily in awarding government contracts or tenders and is bound by the standards and norms it sets for itself.',
    facts: [
      'The International Airport Authority of India (IAAI) issued a public tender notice inviting tenders for running a restaurant and snack bars at Bombay Airport.',
      'The tender notice contained a mandatory condition of eligibility: the tenderer must be a registered second-class hotelier with at least 5 years experience in running a five-star hotel/restaurant.',
      'Respondent No. 4, who had no experience in running 5-star hotels, submitted a tender and was accepted by IAAI, which relaxed the condition in his favor.',
      'Ramana Dayaram Shetty, who did not bid because he assumed he was ineligible under the notice, challenged the award of the contract as arbitrary and discriminatory under Article 14.',
    ],
    issues: [
      'Whether the International Airport Authority of India, a statutory corporation, is an "Authority" and an instrumentality of the State under Article 12 of the Constitution.',
      'Whether the Government or its instrumentalities have unfettered discretion in awarding public contracts or are bound by the eligibility criteria published in the tender notice.',
    ],
    arguments: {
      appellant: [
        'IAAI is an agency of the Central Government whose actions are subject to Article 14.',
        'Accepting a tenderer who does not satisfy the published qualifications violates equality of opportunity for other potential bidders.',
      ],
      respondent: [
        'IAAI is an autonomous commercial corporation not bound by the constitutional restrictions of Article 12.',
        'The authority has commercial discretion to relax conditions to secure the best commercial offer.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-14',
        article: 'Article 12 & Article 14',
        title: 'Definition of "State" and prohibition of arbitrariness in government contracts',
        subjectSlug: 'constitution',
        topicId: 'art-14',
      },
    ],
    reasoning: [
      {
        heading: 'Cumulative tests for determining State instrumentality under Article 12',
        explanation:
          'Bhagwati, J. formulated the cumulative tests: (1) Entire share capital held by the Government; (2) Deep and pervasive State control; (3) Extensive financial assistance meeting expenditure; (4) Monopoly status conferred or protected by State; (5) Functions of public importance closely related to governmental functions; and (6) Department of Government transferred to a corporation. IAAI satisfied these tests and was held to be an "instrumentality of the State".',
      },
      {
        heading: 'An authority is bound by the rules it sets for itself',
        explanation:
          'The government cannot act like a private individual in giving largesse or awarding contracts. It is an established principle of administrative law that an authority is bound by the standards and norms it sets for itself. If it sets down an eligibility standard in a tender notice, it cannot arbitrarily depart from it to favor a preferred bidder.',
      },
    ],
    decision:
      'Appeal dismissed on the ground of delay and laches (the successful bidder had invested heavily and operated for over a year), but the legal challenge was fully upheld. The action of IAAI in relaxing the condition was declared arbitrary and violative of Article 14.',
    holding:
      'A statutory corporation is an instrumentality of the State under Article 12 if it satisfies the cumulative tests of financial and administrative control. In awarding contracts, the State is bound by its own published standards and cannot act arbitrarily.',
    ratioDecidendi:
      'A statutory corporation or government entity is an instrumentality of the State under Article 12 if the State exercises deep and pervasive control. The State and its instrumentalities do not possess unguided discretion in awarding contracts, tenders, or largesse; they are bound by the equality mandate of Article 14 and must adhere strictly to the eligibility criteria prescribed in the tender notice.',
    obiterDicta:
      'The modern welfare state is the distributor of vast wealth and opportunities; arbitrariness in distributing public wealth is the antithesis of the rule of law.',
    relatedCases: [
      {
        judgmentId: 'ajay-hasia-1981',
        caseName: 'Ajay Hasia v. Khalid Mujib Sehravardi',
        citation: '(1981) 1 SCC 722',
        relationship: 'followed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Laid down the 6 cumulative tests for determining "instrumentality of the State" under Article 12.',
      'Enunciated the principle that the executive is bound by the standards it sets for itself in tender notices.',
      'Adopted and summarized in Ajay Hasia (1981).',
    ],
    mcqs: [
      {
        id: 'ramana-shetty-mcq-1',
        question:
          'In Ramana Dayaram Shetty v. International Airport Authority of India (1979), the Supreme Court laid down tests to determine:',
        options: [
          'Whether a civil servant can be summarily dismissed',
          'Whether a statutory corporation is an instrumentality of the State under Article 12',
          'Whether an arbitral award is patently illegal',
          'Whether bail can be granted in economic offences',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court in Ramana Dayaram Shetty formulated the cumulative tests (financial assistance, deep control, monopoly, public functions) to determine if an entity is an instrumentality of the State under Article 12.',
      },
    ],
  },
  {
    id: 'maru-ram-1980',
    caseName: 'Maru Ram v. Union of India',
    shortName: 'Maru Ram',
    citation: '(1981) 1 SCC 107',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1980,
    bench: '5-Judge Constitution Bench',
    judges: [
      'Y.V. Chandrachud, C.J.',
      'P.N. Bhagwati, J.',
      'V.R. Krishna Iyer, J.',
      'S. Murtaza Fazal Ali, J.',
      'A.D. Koshal, J.',
    ],
    subject: 'Bharatiya Nagarik Suraksha Sanhita',
    topics: ['Section 433-A CrPC', 'Life Imprisonment', 'Pardon Powers', 'Article 72', 'Article 161'],
    tags: ['AIBE', 'Judiciary', 'BNSS', 'CrPC', 'Constitution', 'Article 72', 'Article 161', 'Life Imprisonment', 'Section 433-A'],
    summary:
      'Constitution Bench precedent upholding the constitutional validity of Section 433-A CrPC (now Section 475 BNSS). Held that Section 433-A, which mandates that a life convict whose death penalty was commuted or who was convicted of an offence carrying death penalty must serve at least 14 years of actual imprisonment before release on remission, is constitutional and does not fetter the constitutional pardon powers under Articles 72 and 161.',
    facts: [
      'Section 433-A was inserted into the Code of Criminal Procedure, 1973 by the 1978 Amendment Act.',
      'It mandated that where a sentence of imprisonment for life is imposed on conviction for an offence for which death is one of the punishments, or where a death sentence was commuted to life imprisonment, the person shall not be released unless he has served at least fourteen years of actual imprisonment.',
      'Hundreds of life convicts who had earned prison remissions under state prison manuals challenged Section 433-A as cruel, arbitrary, and violative of Articles 14, 20(1), 21, 72, and 161.',
    ],
    issues: [
      'Whether Section 433-A CrPC violates Articles 14 and 21 of the Constitution by requiring 14 years of actual incarceration notwithstanding remissions.',
      'Whether Section 433-A curbs or overrides the constitutional powers of the President under Article 72 and the Governor under Article 161.',
      'Whether Section 433-A can be applied retrospectively to persons convicted before its enactment.',
    ],
    arguments: {
      appellant: [
        'Mandating 14 years actual imprisonment destroys rehabilitative penology and prison good-behavior incentives.',
        'Parliament cannot curtail the constitutional clemency powers under Articles 72 and 161 through ordinary procedural legislation.',
      ],
      respondent: [
        'Parliament has legislative competence to ensure that grave offenders spend a minimum deterrent period in prison.',
        'Section 433-A governs statutory remissions and does not touch the sovereign constitutional pardon power.',
      ],
    },
    provisions: [
      {
        actId: 'bnss',
        actName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
        provisionId: 'bail',
        section: 'Section 475 (legacy s. 433-A CrPC)',
        title: 'Restriction on powers of remission or commutation in certain cases',
        subjectSlug: 'bnss',
        topicId: 'bail',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'executive-ordinance-pardon',
        article: 'Articles 72 & 161',
        title: 'Power of President and Governor to grant pardons and commute sentences',
        subjectSlug: 'constitution',
        topicId: 'executive-ordinance-pardon',
      },
    ],
    reasoning: [
      {
        heading: 'Constitutionality of Section 433-A CrPC',
        explanation:
          'Krishna Iyer, J. held that imprisonment for life means imprisonment for the rest of the natural life of the convict (Gopal Godse). Statutory remissions do not automatically reduce the judicial sentence. Parliament is competent to mandate that life convicts serve at least 14 years before executive remissions under Section 432 take effect. Section 433-A is constitutional and not arbitrary.',
      },
      {
        heading: 'Supremacy of Articles 72 and 161',
        explanation:
          'Section 433-A cannot fetter or control the constitutional pardon powers of the President under Article 72 or the Governor under Article 161. However, the power under Articles 72 and 161 cannot be exercised by the executive on whims; it is exercised on the aid and advice of the Council of Ministers and is subject to limited judicial review against mala fides.',
      },
    ],
    decision:
      'Writ petitions dismissed in part. Section 433-A CrPC upheld as constitutional, with the clarification that it applies only prospectively to persons convicted on or after December 18, 1978.',
    holding:
      'Section 433-A CrPC is constitutionally valid. A life convict must undergo at least 14 years of actual imprisonment before claiming statutory remission. The constitutional pardon powers under Articles 72 and 161 remain untouched by statutory limits.',
    ratioDecidendi:
      'Life imprisonment legally means incarceration for the entirety of natural life. Section 433-A CrPC validly sets a 14-year minimum threshold of actual jail time for statutory remission. The sovereign powers of the President under Article 72 and Governor under Article 161 are paramount and cannot be restricted by statutory law, but must be exercised on the advice of the cabinet and are subject to judicial review against arbitrariness.',
    obiterDicta:
      'The Court called for penal reforms that blend deterrence with compassionate rehabilitation inside Indian prisons.',
    relatedCases: [
      {
        judgmentId: 'kehar-singh-1989',
        caseName: 'Kehar Singh v. Union of India',
        citation: '(1989) 1 SCC 204',
        relationship: 'followed',
      },
      {
        judgmentId: 'epuru-sudhakar-2006',
        caseName: 'Epuru Sudhakar v. Govt. of A.P.',
        citation: '(2006) 8 SCC 161',
        relationship: 'elaborated',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Upheld the constitutional validity of Section 433-A CrPC (14 years mandatory actual jail term).',
      'Confirmed that life imprisonment means imprisonment for the remaining natural life of the convict.',
      'Reconciled statutory remissions under CrPC with constitutional pardoning powers under Arts. 72 and 161.',
    ],
    mcqs: [
      {
        id: 'maru-ram-mcq-1',
        question:
          'What did the Constitution Bench rule in Maru Ram v. Union of India (1980) regarding Section 433-A CrPC?',
        options: [
          'Section 433-A was struck down as unconstitutional and cruel',
          'Section 433-A is valid and mandates 14 years actual imprisonment for statutory remissions, without overriding Articles 72/161',
          'All life convicts must be released after 7 years',
          'Only the President can sentence a person to life imprisonment',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in Maru Ram upheld Section 433-A CrPC, ruling that life imprisonment lasts for natural life and requiring 14 years actual jail time before statutory release is constitutional.',
      },
    ],
  },
  {
    id: 'epuru-sudhakar-2006',
    caseName: 'Epuru Sudhakar v. Govt. of Andhra Pradesh',
    shortName: 'Epuru Sudhakar',
    citation: '(2006) 8 SCC 161',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate / Constitutional Jurisdiction',
    year: 2006,
    bench: '2-Judge Bench',
    judges: ['Arijit Pasayat, J.', 'S.H. Kapadia, J.'],
    subject: 'Constitutional Law',
    topics: ['Pardon Powers', 'Article 161', 'Article 72', 'Judicial Review', 'Rule of Law'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 161', 'Article 72', 'Pardon', 'Judicial Review', 'Mala Fides'],
    summary:
      'Landmark Supreme Court precedent subjecting the clemency and pardon powers of the President under Article 72 and the Governor under Article 161 to judicial review. Held that clemency cannot be granted on political, communal, or whimsical grounds; if the exercise of pardon power is tainted by mala fides, extraneous considerations, or non-application of mind, constitutional courts will strike down the order.',
    facts: [
      'Gowru Venkata Reddy, a political activist belonging to the ruling Congress party in Andhra Pradesh, was convicted under Section 302 IPC for the murder of a Telugu Desam Party (TDP) leader and his son, and sentenced to life imprisonment.',
      'After the change of government in the State, his wife (who was a Member of the Legislative Assembly) submitted a petition for clemency to the Governor.',
      'The Governor of Andhra Pradesh invoked Article 161 and granted remission of the unexpired sentence of over 7 years.',
      'The son of the deceased victim filed a writ petition challenging the remission order as an abuse of power motivated entirely by political favoritism.',
      'The High Court dismissed the petition, and the son appealed to the Supreme Court.',
    ],
    issues: [
      'Whether the pardoning and remission power of the Governor under Article 161 (and President under Article 72) is amenable to judicial review.',
      'What are the permissible legal grounds on which a constitutional court can review and quash a clemency order.',
    ],
    arguments: {
      appellant: [
        'The Governor acted on a one-sided political petition without consulting the trial record or police report, purely to favor a ruling party worker.',
        'Pardoning power cannot be converted into a tool of political patronage in violation of Article 14 and the rule of law.',
      ],
      respondent: [
        'The power of pardon under Article 161 is a high prerogative constitutional power not justiciable in a court of law.',
        'The Governor satisfaction is subjective and cannot be questioned.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'executive-ordinance-pardon',
        article: 'Article 161 & Article 72',
        title: 'Power of Governor and President to grant pardons and judicial review standards',
        subjectSlug: 'constitution',
        topicId: 'executive-ordinance-pardon',
      },
    ],
    reasoning: [
      {
        heading: 'Pardon is subject to limited judicial review',
        explanation:
          'Pasayat, J. held that the power under Articles 72 and 161 is a constitutional responsibility and not a personal favor. It is well settled that judicial review of the order of pardon or remission is available on specific grounds: (a) that the order has been passed without application of mind; (b) that the order is mala fide; (c) that the order has been passed on extraneous or wholly irrelevant considerations; (d) that relevant materials were kept out of consideration; or (e) that the order suffers from arbitrariness.',
      },
      {
        heading: 'Rule of law prevents political pardons',
        explanation:
          'Kapadia, J. in his concurring opinion emphasized that the Rule of Law is the basis of all constitutional provisions. If pardon power is exercised on political or communal considerations, it strikes at the foundation of the administration of justice. In the present case, relevant facts concerning 8 other criminal cases pending against the convict were concealed from the Governor.',
      },
    ],
    decision:
      'Appeal allowed. The remission order passed by the Governor under Article 161 was quashed and set aside for non-application of mind and consideration of extraneous political factors.',
    holding:
      'The clemency power under Articles 72 and 161 is subject to judicial review. An order of pardon passed on political favoritism, without application of mind, or based on extraneous grounds is unconstitutional and void.',
    ratioDecidendi:
      'The power of the President under Article 72 and the Governor under Article 161 is a constitutional power that must be exercised in accordance with public interest and the rule of law. It is open to judicial review on established grounds including mala fides, extraneous or irrelevant considerations, non-application of mind, or keeping relevant facts out of consideration. A pardon granted on political grounds violates Article 14.',
    obiterDicta:
      'Clemency is not an act of grace or favor; it is a constitutional duty to be exercised with highest circumspection.',
    relatedCases: [
      {
        judgmentId: 'maru-ram-1980',
        caseName: 'Maru Ram v. Union of India',
        citation: '(1981) 1 SCC 107',
        relationship: 'followed',
      },
      {
        judgmentId: 'kehar-singh-1989',
        caseName: 'Kehar Singh v. Union of India',
        citation: '(1989) 1 SCC 204',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Settled the 5 grounds of judicial review over Presidential and Gubernatorial pardons.',
      'Quashed a Governor clemency order granted on political party favoritism.',
      'Reinforced the supremacy of the Rule of Law over executive clemency under Articles 72 and 161.',
    ],
    mcqs: [
      {
        id: 'epuru-sudhakar-mcq-1',
        question:
          'In Epuru Sudhakar v. Govt. of A.P. (2006), what did the Supreme Court hold regarding the Governor pardon power under Article 161?',
        options: [
          'It is an absolute prerogative completely immune from judicial review',
          'It is subject to judicial review if exercised on mala fide, extraneous, or political considerations',
          'Only the Chief Justice of India can grant pardons in murder cases',
          'The Governor can pardon only after 20 years of incarceration',
        ],
        correctIndex: 1,
        explanation:
          'The Supreme Court in Epuru Sudhakar held that pardon orders under Article 72 and 161 are subject to judicial review on grounds of mala fides, non-application of mind, or extraneous considerations.',
      },
    ],
  },
  {
    id: 'kehar-singh-1989',
    caseName: 'Kehar Singh v. Union of India',
    shortName: 'Kehar Singh',
    citation: '(1989) 1 SCC 204',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1988,
    bench: '5-Judge Constitution Bench',
    judges: ['R.S. Pathak, C.J.', 'E.S. Venkataramiah, J.', 'Ranganath Misra, J.', 'M.N. Venkatachaliah, J.', 'N.D. Ojha, J.'],
    subject: 'Constitutional Law',
    topics: ['Pardon Powers', 'Article 72', 'Death Penalty Clemency', 'Oral Hearing', 'Judicial Review'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 72', 'Pardon', 'Death Penalty', 'Clemency', 'Indira Gandhi Assassination'],
    summary:
      'Authoritative 5-judge Constitution Bench precedent on the President’s pardon power under Article 72 in capital cases. Held that in exercising power under Article 72, the President can scrutinize the evidence on record afresh and come to a different conclusion from the court. However, the convict has no constitutional right to insist on an oral hearing before the President.',
    facts: [
      'Kehar Singh was convicted of criminal conspiracy under Section 120B read with Section 302 IPC in the assassination of Prime Minister Indira Gandhi and sentenced to death.',
      'His conviction and sentence were confirmed by the High Court and the Supreme Court dismissed his appeal and review petition.',
      'His son submitted a clemency petition to the President of India under Article 72, requesting an oral hearing and presenting arguments that evidence had been misappreciated by the courts.',
      'The President rejected the petition with a communication stating that the President cannot go into the merits of a case finally decided by the highest court of the land.',
      'Kehar Singh filed a writ petition under Article 32 contending that the President had declined to exercise constitutional jurisdiction under a misconception of law.',
    ],
    issues: [
      'What is the nature and scope of the President power under Article 72 of the Constitution.',
      'Whether the President has the power to examine the evidentiary record afresh and differ from the judicial verdict.',
      'Whether a condemned prisoner is entitled to an oral hearing before the President decides a clemency petition.',
    ],
    arguments: {
      appellant: [
        'The President rejected the petition under the erroneous belief that he was bound by the judicial findings of guilt.',
        'In matters of life and death, natural justice requires an opportunity of oral hearing before clemency is decided.',
      ],
      respondent: [
        'The judiciary is the final arbiter of guilt; the President cannot sit as a court of appeal over Supreme Court judgments.',
        'Article 72 does not contemplate oral advocacy before the President.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'executive-ordinance-pardon',
        article: 'Article 72',
        title: 'Power of President to grant pardons, reprieves, respites or remissions',
        subjectSlug: 'constitution',
        topicId: 'executive-ordinance-pardon',
      },
    ],
    reasoning: [
      {
        heading: 'Presidential power to scrutinize evidence afresh',
        explanation:
          'Pathak, C.J. held that the power under Article 72 is of the widest amplitude. It is entirely separate from the judicial power. In exercising power under Article 72, the President does not amend or alter the judicial record; the judicial verdict remains intact. However, the President can examine the evidence afresh and come to a different conclusion regarding the guilt or appropriateness of the sentence.',
      },
      {
        heading: 'No right to oral hearing in clemency petitions',
        explanation:
          'The Court held that there is no fundamental or natural justice right to an oral hearing before the President. The manner in which the clemency petition is disposed of is within the discretion of the President; written representations are entirely sufficient.',
      },
    ],
    decision:
      'Writ petition disposed of. The Supreme Court held that the President had misconstrued the scope of Article 72 in assuming he could not look into the merits, and directed that the clemency petition be reconsidered on its merits (which was subsequently reconsidered and rejected).',
    holding:
      'The President under Article 72 has the power to look into the evidence afresh and arrive at an independent conclusion. A petitioner has no constitutional right to claim an oral hearing before the President.',
    ratioDecidendi:
      'The power of the President under Article 72 is an executive constitutional power distinct from judicial adjudication. The President is entitled to scrutinize the evidence on record and determine whether the sentence should be executed, commuted, or pardoned. However, the convict has no legal or constitutional right to demand an oral hearing before the President.',
    obiterDicta:
      'The exercise of clemency powers under Article 72 is on the advice of the Union Cabinet and is subject to judicial review only within strict limits against arbitrary or mala fide action.',
    relatedCases: [
      {
        judgmentId: 'maru-ram-1980',
        caseName: 'Maru Ram v. Union of India',
        citation: '(1981) 1 SCC 107',
        relationship: 'followed',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Settled that the President under Article 72 can look into the merits of the case and differ from the court.',
      'Ruled that there is NO right to an oral hearing before the President under Article 72.',
      'Clarified that the judicial verdict remains intact; clemency is an executive act of mercy.',
    ],
    mcqs: [
      {
        id: 'kehar-singh-mcq-1',
        question:
          'In Kehar Singh v. Union of India (1988), what did the Constitution Bench rule regarding oral hearings before the President under Article 72?',
        options: [
          'An oral hearing is mandatory in all capital cases',
          'The convict has no right to insist on an oral hearing before the President',
          'Oral hearing must be conducted in the presence of the Chief Justice of India',
          'Only the Attorney General has a right to be heard orally',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench in Kehar Singh held that a convict has no constitutional or legal right to insist upon an oral hearing before the President under Article 72.',
      },
    ],
  },
  {
    id: 'p-rathinam-1994',
    caseName: 'P. Rathinam v. Union of India',
    shortName: 'P. Rathinam',
    citation: '(1994) 3 SCC 394',
    court: 'Supreme Court of India',
    jurisdiction: 'Constitutional Jurisdiction (Article 32)',
    year: 1994,
    bench: '2-Judge Bench',
    judges: ['B.L. Hansaria, J.', 'R.M. Sahai, J.'],
    subject: 'Bharatiya Nyaya Sanhita',
    topics: ['Attempt to Suicide', 'Section 309 IPC', 'Article 21', 'Right to Die', 'Mental Health'],
    tags: ['AIBE', 'Judiciary', 'BNS', 'IPC', 'Constitution', 'Article 21', 'Suicide', 'P. Rathinam'],
    summary:
      'Historical 2-judge bench decision which struck down Section 309 IPC (attempt to commit suicide) as cruel, irrational, and violative of Articles 14 and 21. Held that the right to live under Article 21 includes the right not to live or right to die. This decision was subsequently overruled by the 5-judge Constitution Bench in Gian Kaur v. State of Punjab (1996).',
    facts: [
      'P. Rathinam and Nagbhushan Patnaik filed writ petitions under Article 32 challenging the constitutional validity of Section 309 of the Indian Penal Code.',
      'Section 309 made an attempt to commit suicide a cognizable penal offense punishable with simple imprisonment up to one year or fine.',
      'Petitioners argued that a person who attempts suicide is suffering from acute mental depression, anguish, or psychological distress and needs medical and psychiatric assistance rather than penal incarceration in prison.',
    ],
    issues: [
      'Whether Section 309 IPC violates Article 21 of the Constitution by penalizing an attempt to terminate one own life.',
      'Whether the fundamental right to life under Article 21 includes within its ambit the right not to live or right to die.',
      'Whether Section 309 IPC is arbitrary and violative of Article 14.',
    ],
    arguments: {
      appellant: [
        'Fundamental rights have positive and negative dimensions: freedom of speech includes freedom of silence; hence right to live includes right to die.',
        'Penalizing a suicide attempt adds state torture to private agony and violates human dignity under Article 21.',
      ],
      respondent: [
        'The State has a vital interest in preserving the life of its citizens.',
        'Decriminalizing suicide attempts could encourage abetment of suicides and sati.',
      ],
    },
    provisions: [
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 's-108',
        section: 'Section 108 (legacy s. 306/309 IPC)',
        title: 'Attempt to commit suicide and abetment of suicide',
        subjectSlug: 'bns',
        topicId: 's-108',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to life — Negative right debate',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Negative aspect of fundamental rights',
        explanation:
          'Hansaria, J. reasoned that all fundamental rights contain negative aspects. The right to freedom of speech includes the right to remain silent; the right to carry on trade includes the right to close down a business. By analogy, the right to live under Article 21 includes the right not to live a forced life of suffering.',
      },
      {
        heading: 'Irrationality of Section 309 IPC',
        explanation:
          'The Court held that Section 309 IPC was cruel, irrational, and self-defeating. A person who attempts suicide needs psychiatric therapy, not incarceration. Section 309 was held to be violative of Articles 14 and 21.',
      },
    ],
    decision:
      'Writ petitions allowed. Section 309 IPC was declared unconstitutional and void. (Later overruled by 5-judge bench in Gian Kaur v. State of Punjab).',
    holding:
      'Section 309 IPC is cruel, irrational, and violative of Article 21. The right to live includes the right not to live or right to terminate one’s life. (Overruled in Gian Kaur).',
    ratioDecidendi:
      'The right to live under Article 21 has its negative counterpart in the right not to live a forced existence. Section 309 IPC, which penalizes an unsuccessful attempt to commit suicide, is an arbitrary and inhumane law that violates Articles 14 and 21 of the Constitution. (Note: Overruled in Gian Kaur 1996).',
    obiterDicta:
      'The Court noted the views of global sociologists and criminologists advocating that suicide attempts should be treated as mental health issues rather than crimes.',
    relatedCases: [
      {
        judgmentId: 'gian-kaur-1996',
        caseName: 'Gian Kaur v. State of Punjab',
        citation: '(1996) 2 SCC 648',
        relationship: 'overruled',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'First Indian Supreme Court ruling to strike down Section 309 IPC under Article 21.',
      'Explicitly overruled by the 5-judge Constitution Bench in Gian Kaur v. State of Punjab (1996).',
      'Historical stepping stone in the development of Indian suicide law and the Mental Healthcare Act, 2017.',
    ],
    mcqs: [
      {
        id: 'p-rathinam-mcq-1',
        question:
          'The 2-judge bench decision in P. Rathinam v. Union of India (1994), which struck down Section 309 IPC, was subsequently overruled by which Constitution Bench judgment?',
        options: [
          'Aruna Shanbaug v. Union of India',
          'Gian Kaur v. State of Punjab',
          'Common Cause v. Union of India',
          'Navtej Singh Johar v. Union of India',
        ],
        correctIndex: 1,
        explanation:
          'P. Rathinam was overruled by the 5-judge Constitution Bench in Gian Kaur v. State of Punjab (1996), which restored Section 309 IPC.',
      },
    ],
  },
  {
    id: 't-sareetha-1983',
    caseName: 'T. Sareetha v. T. Venkata Subbaiah',
    shortName: 'T. Sareetha',
    citation: 'AIR 1983 AP 356',
    court: 'High Court of Andhra Pradesh',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1983,
    bench: 'Single Judge',
    judges: ['P.A. Choudary, J.'],
    subject: 'Family Law',
    topics: ['Restitution of Conjugal Rights', 'Section 9 HMA', 'Bodily Autonomy', 'Article 21', 'Spousal Privacy'],
    tags: ['AIBE', 'Judiciary', 'Family Law', 'HMA', 'Restitution', 'Article 21', 'Privacy', 'Bodily Autonomy'],
    summary:
      'Celebrated historical judgment of the Andhra Pradesh High Court holding Section 9 of the Hindu Marriage Act, 1955 (Restitution of Conjugal Rights) unconstitutional and void for violating the fundamental right to privacy, bodily integrity, and human dignity under Article 21. Although subsequently overruled by the Supreme Court in Saroj Rani, this ruling laid the foundational framework for bodily autonomy and privacy in Indian constitutionalism.',
    facts: [
      'T. Sareetha, a well-known South Indian actress, was married to Venkata Subbaiah in 1975 according to Hindu rites.',
      'They separated shortly after the marriage and lived apart for several years.',
      'The husband filed a petition under Section 9 of the Hindu Marriage Act, 1955 before the Subordinate Judge, Cuddapah, for restitution of conjugal rights, seeking a decree compelling the wife to live with him.',
      'The wife challenged the constitutional validity of Section 9, contending that state coercion forcing an unwilling spouse into cohabitation and sexual intimacy violates Article 21.',
    ],
    issues: [
      'Whether Section 9 of the Hindu Marriage Act violates the fundamental right to personal liberty, privacy, and bodily autonomy guaranteed under Article 21.',
      'Whether a decree for restitution of conjugal rights amounts to state-enforced coitus violating human dignity.',
    ],
    arguments: {
      appellant: [
        'Coercing a woman into the matrimonial home against her choice deprives her of bodily integrity and control over her person.',
        'Section 9 is an engine of oppression that treats women as chattel.',
      ],
      respondent: [
        'Restitution of conjugal rights is an ancient matrimonial remedy intended to preserve marital stability.',
        'Marriage involves reciprocal consortium obligations, and enforcement is limited to financial property attachment under Order XXI Rule 32 CPC.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Hindu Marriage Act, 1955',
        provisionId: 'hma-s-9',
        section: 'Section 9',
        title: 'Restitution of conjugal rights — Constitutional challenge',
        subjectSlug: 'family',
        topicId: 'hma-s-9',
      },
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-21',
        article: 'Article 21',
        title: 'Right to privacy and bodily autonomy in matrimonial relations',
        subjectSlug: 'constitution',
        topicId: 'art-21',
      },
    ],
    reasoning: [
      {
        heading: 'Bodily integrity and spousal privacy under Article 21',
        explanation:
          'P.A. Choudary, J. delivered a pioneering analysis: The right to privacy is an essential ingredient of personal liberty under Article 21. An individual has total autonomy over their own body. A decree for restitution of conjugal rights coerces the unwilling spouse into state-enforced cohabitation and coitus, which constitutes a brutal invasion of bodily autonomy and human dignity.',
      },
      {
        heading: 'Barbarous and uncivilized nature of Section 9',
        explanation:
          'The Court described Section 9 as a "savage and barbarous remedy" originating from English ecclesiastical courts, holding that the State cannot use civil decrees to force two incompatible persons into sexual partnership.',
      },
    ],
    decision:
      'Petition allowed. Section 9 of the Hindu Marriage Act was struck down as unconstitutional and void. (Later overruled by the Supreme Court in Saroj Rani v. Sudarshan Kumar Chadha).',
    holding:
      'Section 9 of the Hindu Marriage Act is unconstitutional as it violates Article 21. Forcing an unwilling spouse to live with another violates bodily autonomy and privacy. (Overruled in Saroj Rani).',
    ratioDecidendi:
      'Section 9 of the Hindu Marriage Act violates the right to privacy and human dignity guaranteed by Article 21. A decree for restitution of conjugal rights forces cohabitation upon an unwilling spouse and violates bodily integrity. (Overruled in Saroj Rani 1984).',
    obiterDicta:
      'The Court observed that personal laws cannot stand immune from the progressive constitutional mandates of equality and personal liberty.',
    relatedCases: [
      {
        judgmentId: 'saroj-rani-1984',
        caseName: 'Saroj Rani v. Sudarshan Kumar Chadha',
        citation: '(1984) 4 SCC 90',
        relationship: 'overruled',
      },
      {
        judgmentId: 'puttaswamy-2017',
        caseName: 'K.S. Puttaswamy v. Union of India',
        citation: '(2017) 10 SCC 1',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'High Court of Andhra Pradesh Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Pioneering ruling on bodily integrity and privacy under Article 21 in family law.',
      'Explicitly overruled by the Supreme Court in Saroj Rani v. Sudarshan Kumar Chadha (1984).',
      'Regarded in modern jurisprudence (Puttaswamy) as ahead of its time on bodily privacy.',
    ],
    mcqs: [
      {
        id: 't-sareetha-mcq-1',
        question:
          'In T. Sareetha v. T. Venkata Subbaiah (1983), the Andhra Pradesh High Court struck down Section 9 of the Hindu Marriage Act on the ground of violating:',
        options: [
          'Right to property under Article 300A',
          'Right to privacy and bodily autonomy under Article 21',
          'Freedom of speech under Article 19(1)(a)',
          'Right against double jeopardy under Article 20(2)',
        ],
        correctIndex: 1,
        explanation:
          'The Andhra Pradesh High Court held in T. Sareetha that Section 9 HMA constitutes state-enforced cohabitation and violates the right to privacy and bodily autonomy under Article 21.',
      },
    ],
  },
  {
    id: 'harvinder-kaur-1984',
    caseName: 'Harvinder Kaur v. Harmander Singh Choudhry',
    shortName: 'Harvinder Kaur',
    citation: 'AIR 1984 Del 66',
    court: 'High Court of Delhi',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 1984,
    bench: 'Single Judge',
    judges: ['Avadh Behari Rohtagi, J.'],
    subject: 'Family Law',
    topics: ['Restitution of Conjugal Rights', 'Section 9 HMA', 'Marital Consortium', 'Constitutional Law in Home', 'Article 21'],
    tags: ['AIBE', 'Judiciary', 'Family Law', 'HMA', 'Restitution', 'Section 9', 'Harvinder Kaur', 'Article 21'],
    summary:
      'Celebrated Delhi High Court decision upholding the constitutional validity of Section 9 of the Hindu Marriage Act, 1955. Disagreed with the Andhra Pradesh High Court’s T. Sareetha decision and held that the primary aim of Section 9 is cohabitation and preserving the marital home, not forced sexual intercourse. Held that introducing constitutional law into the privacy of the home is like introducing a bull in a china shop. This decision was subsequently approved by the Supreme Court in Saroj Rani.',
    facts: [
      'Harmander Singh Choudhry filed a petition for restitution of conjugal rights under Section 9 of the Hindu Marriage Act, 1955 against his wife Harvinder Kaur.',
      'The wife resisted the petition, relying on the recently pronounced Andhra Pradesh High Court judgment in T. Sareetha to argue that Section 9 was unconstitutional and violated Article 14 and 21.',
      'The trial court granted a decree of restitution of conjugal rights in favor of the husband.',
      'The wife appealed to the Delhi High Court.',
    ],
    issues: [
      'Whether Section 9 of the Hindu Marriage Act violates Articles 14 and 21 of the Constitution.',
      'What is the true object and scope of restitution of conjugal rights in personal matrimonial relations.',
    ],
    arguments: {
      appellant: [
        'Following T. Sareetha, a decree of restitution forces cohabitation and sexual relations against the will of a spouse, violating Article 21.',
        'Section 9 is an antiquated remedy that violates individual equality and personal dignity.',
      ],
      respondent: [
        'Section 9 aims at reconciliation and preservation of the matrimonial home; it does not authorize physical force or rape.',
        'Order XXI Rule 32 CPC provides only for property attachment and does not permit physical arrest.',
      ],
    },
    provisions: [
      {
        actId: 'family',
        actName: 'Hindu Marriage Act, 1955',
        provisionId: 'hma-s-9',
        section: 'Section 9',
        title: 'Restitution of conjugal rights — Defense of marital consortium',
        subjectSlug: 'family',
        topicId: 'hma-s-9',
      },
    ],
    reasoning: [
      {
        heading: 'Section 9 aims at consortium and reconciliation, not forced coitus',
        explanation:
          'Rohtagi, J. held that the Andhra Pradesh High Court in T. Sareetha had taken an over-sexualised view of marriage and Section 9. Restitution of conjugal rights aims at consortium—living together, mutual comfort, and society. The court decree cannot enforce sexual intercourse; it merely requires parties to live under the same roof to afford an opportunity for reconciliation.',
      },
      {
        heading: 'Constitutional law in the domestic sphere',
        explanation:
          'The Court famously observed: "Introduction of constitutional law into the home is like introducing a bull into a china shop. It will prove to be a ruthless destroyer of the marriage institution." Marital disputes must be resolved through personal law reconciliation, not strict constitutional rights of privacy.',
      },
    ],
    decision:
      'Appeal dismissed. Section 9 held constitutionally valid. The reasoning of Rohtagi, J. was subsequently cited and approved by the Supreme Court in Saroj Rani v. Sudarshan Kumar Chadha.',
    holding:
      'Section 9 of the Hindu Marriage Act is constitutionally valid. The remedy of restitution of conjugal rights aims to preserve the marriage through consortium and does not violate Articles 14 or 21.',
    ratioDecidendi:
      'Section 9 of the Hindu Marriage Act does not violate Article 14 or Article 21. Restitution of conjugal rights is an aid to cohabitation and marital reconciliation. A decree under Section 9 cannot be executed by physical force or delivery of person. Personal law relations within the home are governed by consortium and matrimonial duty rather than the strict application of constitutional tort principles.',
    obiterDicta:
      'Marriage in India is a spiritual union and not a mere civil contract of convenience; preservation of marriage is a legitimate state interest.',
    relatedCases: [
      {
        judgmentId: 'saroj-rani-1984',
        caseName: 'Saroj Rani v. Sudarshan Kumar Chadha',
        citation: '(1984) 4 SCC 90',
        relationship: 'followed',
      },
      {
        judgmentId: 't-sareetha-1983',
        caseName: 'T. Sareetha v. T. Venkata Subbaiah',
        citation: 'AIR 1983 AP 356',
        relationship: 'distinguished',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'High Court of Delhi Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Famous for the metaphor: "Introduction of constitutional law into the home is like a bull in a china shop".',
      'Directly affirmed by the Supreme Court in Saroj Rani v. Sudarshan Kumar Chadha (1984).',
      'Distinguished consortium from physical enforcement under Order XXI Rule 32 CPC.',
    ],
    mcqs: [
      {
        id: 'harvinder-kaur-mcq-1',
        question:
          'In Harvinder Kaur v. Harmander Singh (1984), Avadh Behari Rohtagi, J. upheld Section 9 of the Hindu Marriage Act by observing that:',
        options: [
          'Restitution of conjugal rights aims at consortium and cohabitation, not forced sexual intercourse',
          'Wives have no independent legal rights after marriage',
          'Section 9 can be enforced by imprisoning the defaulting spouse',
          'Constitutional law completely replaces all personal laws',
        ],
        correctIndex: 0,
        explanation:
          'Rohtagi, J. held that Section 9 aims at consortium and reconciliation between spouses, rejecting the view that it involves forced sexual intercourse.',
      },
    ],
  },
  {
    id: 'm-karunanidhi-1979',
    caseName: 'M. Karunanidhi v. Union of India',
    shortName: 'M. Karunanidhi',
    citation: '(1979) 3 SCC 431',
    court: 'Supreme Court of India',
    jurisdiction: 'Criminal Appellate / Constitutional Jurisdiction',
    year: 1979,
    bench: '5-Judge Constitution Bench',
    judges: ['S. Murtaza Fazal Ali, J.', 'P.N. Bhagwati, J.', 'V.D. Tulzapurkar, J.', 'R.S. Pathak, J.', 'A.D. Koshal, J.'],
    subject: 'Constitutional Law',
    topics: ['Article 254', 'Repugnancy', 'Concurrent List', 'Three Conditions of Repugnancy', 'Public Servant'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 254', 'Repugnancy', 'Federalism', 'Centre-State'],
    summary:
      'Authoritative 5-judge Constitution Bench precedent on the Doctrine of Repugnancy under Article 254. Formulated the definitive three conditions for establishing repugnancy between Central and State laws on the Concurrent List: (1) clear and direct inconsistency; (2) irreconcilable conflict making it impossible to obey both; and (3) Parliament’s intent to occupy the entire field. Also established that a Chief Minister or Minister is a "public servant" under Section 21 IPC (s. 2(28) BNS).',
    facts: [
      'M. Karunanidhi, former Chief Minister of Tamil Nadu, was prosecuted under Section 161 IPC and the Prevention of Corruption Act, 1947 for corrupt acts during his tenure as Chief Minister.',
      'The Tamil Nadu Legislature had previously enacted the Tamil Nadu Public Men (Inquiries) Act, 1973, with Presidential assent under Article 254(2).',
      'The appellant contended that the State Act occupied the entire field regarding corruption inquiry against public men in the State, and that Central laws (IPC and Prevention of Corruption Act) were repugnant and inoperative in Tamil Nadu under Article 254(2).',
      'He further contended that a Chief Minister is not a "public servant" within the meaning of Section 21 IPC.',
    ],
    issues: [
      'What are the constitutional tests for establishing repugnancy under Article 254 between Central and State legislation on Concurrent List subjects.',
      'Whether a Chief Minister or Minister of a State is a "public servant" within the meaning of Section 21 IPC.',
    ],
    arguments: {
      appellant: [
        'The Tamil Nadu Public Men Act received Presidential assent under Art. 254(2) and displaced Central anti-corruption laws.',
        'A Chief Minister is a constitutional political dignitary and not a public servant employed by the State.',
      ],
      respondent: [
        'There is no direct conflict; the State Act created a commission of inquiry while IPC and PC Act provide for criminal prosecution.',
        'A Chief Minister receives a salary from public revenue and performs public duties, falling squarely under Section 21 IPC.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'doctrine-repugnancy',
        article: 'Article 254',
        title: 'Doctrine of Repugnancy — Inconsistency between parliamentary and state laws',
        subjectSlug: 'constitution',
        topicId: 'doctrine-repugnancy',
      },
      {
        actId: 'bns',
        actName: 'Bharatiya Nyaya Sanhita, 2023',
        provisionId: 'general-explanations',
        section: 'Section 2(28) (legacy s. 21 IPC)',
        title: 'Definition of "Public Servant"',
        subjectSlug: 'bns',
        topicId: 'general-explanations',
      },
    ],
    reasoning: [
      {
        heading: 'The Three Golden Rules of Repugnancy under Article 254',
        explanation:
          'Fazal Ali, J. synthesized the principles: (1) There must be a clear and direct inconsistency between the Central Act and the State Act; (2) Such inconsistency must be irreconcilable, such that both laws cannot stand together or be obeyed simultaneously; and (3) There must be an intention on the part of Parliament to occupy the entire field, leaving no room for state legislation. If the two statutes operate in different fields or can stand together without direct collision, there is no repugnancy.',
      },
      {
        heading: 'Chief Minister as a Public Servant',
        explanation:
          'The Court held that a Minister or Chief Minister is paid out of public revenue for performing public duties. Under Section 21(12) IPC, any person in the pay or service of the government is a public servant. Ministers are public servants under criminal law.',
      },
    ],
    decision:
      'Appeal dismissed. No repugnancy found between the Tamil Nadu Act and the Central Acts. Karunanidhi was held to be a public servant subject to trial under the Prevention of Corruption Act.',
    holding:
      'For Article 254 repugnancy, there must be a direct, irreconcilable conflict between Central and State laws on the Concurrent List. A Chief Minister is a public servant under criminal law.',
    ratioDecidendi:
      'Repugnancy between two statutes may be established only where there is a direct and irreconcilable conflict between a Central and a State enactment on the Concurrent List, such that obedience to one entails disobedience to the other, or where Parliament has occupied the entire legislative field. A Minister or Chief Minister is a public servant within the meaning of Section 21 IPC.',
    obiterDicta:
      'Every effort must be made by courts to harmonize concurrent legislation before declaring a state law repugnant and void.',
    relatedCases: [
      {
        judgmentId: 'fn-balsara-1951',
        caseName: 'State of Bombay v. F.N. Balsara',
        citation: 'AIR 1951 SC 318',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Formulated the 3 classical conditions for establishing Repugnancy under Article 254.',
      'Settled that a Chief Minister or Minister is a "public servant" under Section 21 IPC / s. 2(28) BNS.',
      'Standard reference in federalism and Centre-State relations examinations.',
    ],
    mcqs: [
      {
        id: 'karunanidhi-mcq-1',
        question:
          'In M. Karunanidhi v. Union of India (1979), which major proposition regarding ministers under criminal law was established?',
        options: [
          'Ministers are totally immune from criminal prosecution during their tenure',
          'A Chief Minister is a "public servant" within the meaning of Section 21 IPC',
          'State corruption laws automatically nullify Central laws without Presidential assent',
          'Article 254 applies only to List I Union subjects',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held in M. Karunanidhi that a Chief Minister or Minister is a public servant under Section 21 IPC, and formulated the three conditions of Article 254 repugnancy.',
      },
    ],
  },
  {
    id: 'k-t-plantation-2011',
    caseName: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka',
    shortName: 'K.T. Plantation',
    citation: '(2011) 9 SCC 1',
    court: 'Supreme Court of India',
    jurisdiction: 'Civil Appellate Jurisdiction',
    year: 2011,
    bench: '5-Judge Constitution Bench',
    judges: ['S.H. Kapadia, C.J.', 'K.S. Radhakrishnan, J.', 'Surinder Singh Nijjar, J.', 'Swatanter Kumar, J.', 'H.L. Dattu, J.'],
    subject: 'Constitutional Law',
    topics: ['Article 300A', 'Right to Property', 'Eminent Domain', 'Public Purpose', 'Human Rights'],
    tags: ['AIBE', 'Judiciary', 'Constitution', 'Article 300A', 'Property Rights', 'Eminent Domain', 'Land Acquisition'],
    summary:
      'Constitution Bench precedent on the constitutional status of the Right to Property under Article 300A. Held that while the right to property ceased to be a fundamental right after the 44th Amendment, it remains a valuable constitutional right and a human right. Deprivation of property under Article 300A can only be made by a valid law that satisfies the tests of public purpose and reasonable compensation.',
    facts: [
      'The Karnataka Legislature enacted the Roerich and Devika Rani Roerich Estate (Acquisition & Transfer) Act, 1996 to acquire the Tataguni Estate near Bangalore belonging to the famous Russian artist Svyatoslav Roerich and his actress wife Devika Rani.',
      'K.T. Plantation Pvt. Ltd. had entered into agreements to purchase 221 acres of the estate land.',
      'The company challenged the Acquisition Act under Article 300A, contending that the statute provided illusory compensation and that deprivation of property must satisfy the requirements of public purpose and just compensation.',
    ],
    issues: [
      'What is the true constitutional scope of the Right to Property under Article 300A after its deletion from Part III by the 44th Amendment.',
      'Whether a law depriving a person of property under Article 300A must satisfy the dual requirements of eminent domain: "public purpose" and "compensation".',
    ],
    arguments: {
      appellant: [
        'Article 300A incorporates the common law doctrine of eminent domain; any law taking away property without reasonable compensation is arbitrary and void.',
        'Right to property is a human right that cannot be extinguished by executive decree or confiscatory laws.',
      ],
      respondent: [
        'Parliament deliberately repealed Article 31 to eliminate compensation as a justiciable constitutional condition.',
        'Article 300A requires only "authority of law", and the legislature has plenary power to fix compensation.',
      ],
    },
    provisions: [
      {
        actId: 'constitution',
        actName: 'Constitution of India',
        provisionId: 'art-300a',
        article: 'Article 300A',
        title: 'Persons not to be deprived of property save by authority of law',
        subjectSlug: 'constitution',
        topicId: 'art-300a',
      },
    ],
    reasoning: [
      {
        heading: 'Constitutional and human rights status of property under Article 300A',
        explanation:
          'Radhakrishnan, J. held that although the right to property is no longer a fundamental right, it is a constitutional right and an internationally recognized human right. The "law" depriving a person of property under Article 300A cannot be an arbitrary or confiscatory decree; it must be a valid, just, fair, and reasonable law satisfying Article 14.',
      },
      {
        heading: 'Inbuilt requirements of public purpose and compensation',
        explanation:
          'Eminent domain has two essential elements: public purpose and compensation. Even though Article 300A does not contain explicit words like "compensation", the requirement of public purpose is an indispensable condition for expropriation. While market value compensation cannot be claimed as a fundamental right, compensation cannot be illusory or arbitrary.',
      },
    ],
    decision:
      'Appeals dismissed on merits (the acquisition of the Roerich estate for cultural and environmental preservation was held to be for public purpose with reasonable compensation). Article 300A was authoritatively defined.',
    holding:
      'Article 300A protects the right to property as a constitutional and human right. A law depriving a person of property must be just and fair, must serve a public purpose, and must provide reasonable (non-illusory) compensation.',
    ratioDecidendi:
      'Article 300A of the Constitution guarantees that no person shall be deprived of property save by authority of law. The "law" under Article 300A must be a valid law that satisfies the test of reasonableness under Article 14. Deprivation of property can take place only for a genuine public purpose, and the compensation provided cannot be illusory or a sham.',
    obiterDicta:
      'The State does not possess unfettered power of confiscation; private property cannot be expropriated for private gain under the guise of public interest.',
    relatedCases: [
      {
        judgmentId: 'kesavananda-bharati-1973',
        caseName: 'Kesavananda Bharati v. State of Kerala',
        citation: '(1973) 4 SCC 225',
        relationship: 'harmonized',
      },
    ],
    source: {
      type: 'url',
      sourceUrl: 'https://main.sci.gov.in/judgment',
      verified: true,
      title: 'Supreme Court of India Judgment',
    },
    status: 'reviewed',
    examPoints: [
      'Settled the constitutional parameters of Article 300A after the 44th Constitutional Amendment.',
      'Held that property is a constitutional and human right requiring public purpose.',
      'Ruled that compensation under Article 300A cannot be illusory or confiscatory.',
    ],
    mcqs: [
      {
        id: 'kt-plantation-mcq-1',
        question:
          'In K.T. Plantation Pvt. Ltd. v. State of Karnataka (2011), what did the 5-judge Constitution Bench hold regarding Article 300A?',
        options: [
          'The right to property was restored as a fundamental right under Part III',
          'Right to property under Article 300A is a constitutional and human right requiring a valid law, public purpose, and non-illusory compensation',
          'The State can confiscate any private property without paying any compensation',
          'Article 300A applies only to agricultural lands',
        ],
        correctIndex: 1,
        explanation:
          'The Constitution Bench held that Article 300A protects property as a constitutional and human right requiring valid law, public purpose, and non-illusory compensation.',
      },
    ],
  },
]
