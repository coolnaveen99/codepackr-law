import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const CONCEPTS: CanonicalEntity[] = [
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "GOLDEN-TRIANGLE", {
    title: "Golden Triangle of Articles 14, 19 and 21",
    summary:
      "Articles 14, 19 and 21 are read together. A law that takes liberty must also be non-arbitrary and must respect the freedoms of Article 19.",
    explanation:
      "[[REF:CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978|Maneka Gandhi]] fused the three articles. A deprivation of [[REF:CONCEPT:CONSTITUTIONAL-LAW:PERSONAL-LIBERTY|personal liberty]] under [[REF:ARTICLE:CONSTITUTION:ARTICLE-21]] must satisfy the equality of [[REF:ARTICLE:CONSTITUTION:ARTICLE-14]] and, where a freedom of [[REF:ARTICLE:CONSTITUTION:ARTICLE-19]] is also engaged, the reasonableness of that article.\n\n[[REF:CASE:CONSTITUTIONAL-LAW:IR-COELHO-2007|I.R. Coelho]] treated this triangle as part of the [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]], so even a Ninth Schedule law can be tested against it.",
    exam: "Golden triangle = 14 + 19 + 21, Maneka. Coelho puts it inside basic structure for post-1973 Ninth Schedule laws.",
    tags: ["constitutional-law", "fundamental-rights", "article-14", "article-19", "article-21", "basic-structure"],
    aliases: ["golden triangle", "golden triangle of rights", "14 19 21"],
    sources: [
      SRC.case("Maneka Gandhi v. Union of India", "(1978) 1 SCC 248"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "PERSONAL-LIBERTY", {
    title: "Personal Liberty",
    summary:
      "The residue of liberty not covered by Article 19 — including, after Maneka and later cases, dignity, privacy, travel, livelihood and more.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-21]] protects life and personal liberty. Gopalan had kept ‘personal liberty’ narrow. [[REF:CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978|Maneka]] opened it. The Court has since located in Article 21: livelihood, health, shelter, speedy trial, dignity, a clean environment, and [[REF:CASE:CONSTITUTIONAL-LAW:PUTTASWAMY-2017|privacy]].\n\nPersonal liberty is available to all persons, not only citizens — unlike most of Article 19.",
    exam: "Article 19 is mostly citizens; Article 21 is persons. Privacy is inside 21 (Puttaswamy), not a separate article.",
    tags: ["constitutional-law", "fundamental-rights", "article-21", "privacy", "personal-liberty"],
    aliases: ["personal liberty", "life and personal liberty", "article 21 liberty"],
    sources: [
      SRC.case("Maneka Gandhi v. Union of India", "(1978) 1 SCC 248"),
      SRC.case("Justice K.S. Puttaswamy v. Union of India", "(2017) 10 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "OTHER-AUTHORITIES", {
    title: "Other Authorities under Article 12",
    summary:
      "Bodies other than governments and legislatures that still count as ‘the State’ for Fundamental Rights — statutory corporations, government companies, and instrumentalities.",
    explanation:
      "[[REF:DEFINITION:CONSTITUTION:THE-STATE|Article 12]] ends with ‘and all local or other authorities’. The Court uses the [[REF:CONCEPT:CONSTITUTIONAL-LAW:INSTRUMENTALITY-TEST|instrumentality / agency tests]] (Ajay Hasia, Pradeep Kumar Biswas) to decide if a body is an other authority: government control, public function, deep and pervasive State presence, and similar factors.\n\nIf it is the State, Part III binds it. If it is not, Fundamental Rights generally do not, though some horizontal effects exist in later case law.",
    exam: "Always start a Part III problem with Article 12. Private bodies are outside unless they meet the instrumentality tests.",
    tags: ["constitutional-law", "fundamental-rights", "article-12", "the-state"],
    aliases: ["other authorities", "other authorities article 12", "instrumentality of the state"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "PROCEDURE-ESTABLISHED-BY-LAW", {
    title: "Procedure Established by Law",
    summary:
      "The Article 21 phrase. After Maneka it means a fair, just and reasonable procedure enacted by a competent legislature — not any procedure at all.",
    explanation:
      "The framers chose ‘procedure established by law’ over the American ‘due process of law’. For a generation Gopalan treated that as a deliberate thinning. [[REF:DOCTRINE:CONSTITUTIONAL-LAW:DUE-PROCESS|Maneka]] read fairness back in, through Articles 14 and 19 as well as 21. The words on the page did not change; the meaning did.",
    exam: "Do not write that India has no due process. After Maneka, Article 21 carries a fairness requirement even without the American phrase.",
    tags: ["constitutional-law", "fundamental-rights", "article-21", "due-process"],
    aliases: ["procedure established by law", "procedure established by law article 21"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "NINTH-SCHEDULE", {
    title: "Ninth Schedule",
    summary:
      "A schedule of laws placed beyond Article 13 challenge by Article 31B — but after 24 April 1973 they can still be tested on basic structure.",
    explanation:
      "The 1st Amendment inserted Article 31B and the Ninth Schedule to protect zamindari abolition. Any law listed there is protected from Article 13. [[REF:CASE:CONSTITUTIONAL-LAW:WAMAN-RAO-1981|Waman Rao]] and [[REF:CASE:CONSTITUTIONAL-LAW:IR-COELHO-2007|I.R. Coelho]] drew a line at 24 April 1973 (Kesavananda): later insertions can be struck if they damage the [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]], especially the [[REF:CONCEPT:CONSTITUTIONAL-LAW:GOLDEN-TRIANGLE|golden triangle]].",
    exam: "Ninth Schedule is not a total safe house after 24 April 1973. Coelho is the case.",
    tags: ["constitutional-law", "ninth-schedule", "basic-structure", "article-13", "first-amendment"],
    aliases: ["ninth schedule", "9th schedule", "article 31B"],
    sources: [
      SRC.case("I.R. Coelho v. State of Tamil Nadu", "(2007) 2 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "ANTI-DEFECTION", {
    title: "Anti-Defection (Tenth Schedule)",
    summary:
      "A legislator who voluntarily gives up party membership or votes against the whip is disqualified, subject to judicial review of the Speaker’s decision.",
    explanation:
      "The 52nd Amendment inserted the Tenth Schedule. [[REF:CASE:CONSTITUTIONAL-LAW:KIHOTO-HOLLOHAN-1992|Kihoto Hollohan]] upheld it but struck the Speakers’ finality clause — the decision is justiciable. The 91st Amendment later barred defectors from ministerial office and capped Council size at 15% of the House.\n\nMerger (two-thirds of the legislature party) remains a defence. Split as a defence was removed.",
    exam: "Whip + voluntary giving-up = disqualification. Speaker’s order is reviewable (Kihoto). 91st ended the split defence.",
    tags: ["constitutional-law", "anti-defection", "tenth-schedule", "parliament", "52nd-amendment"],
    aliases: ["anti-defection", "anti defection", "tenth schedule", "10th schedule"],
    sources: [
      SRC.case("Kihoto Hollohan v. Zachillhu", "1992 Supp (2) SCC 651"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "PUBLIC-INTEREST-LITIGATION", {
    title: "Public Interest Litigation",
    summary:
      "Relaxed standing so that a public-spirited petitioner can move the Court for the rights of those who cannot reach it themselves.",
    explanation:
      "PIL grew from Articles [[REF:ARTICLE:CONSTITUTION:ARTICLE-32|32]] and [[REF:ARTICLE:CONSTITUTION:ARTICLE-226|226]] in the late 1970s and 1980s. The Court relaxed locus standi, accepted letters as petitions, and used continuing mandamus. It is a procedure, not a separate right. Abuse — publicity interest litigation — is a live judicial concern, and the Court now polices maintainability more tightly.",
    exam: "PIL is a standing/procedure innovation under 32/226, not an article of its own.",
    tags: ["constitutional-law", "article-32", "article-226", "judicial-review", "writs"],
    aliases: ["PIL", "public interest litigation", "public interest petition"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "COLLEGIUM", {
    title: "Collegium System",
    summary:
      "Appointment and transfer of the higher judiciary by a judicial collegium, after the Three Judges Cases and the striking down of the NJAC.",
    explanation:
      "The text of [[REF:ARTICLE:CONSTITUTION:ARTICLE-124]] says the President appoints judges after consultation. The Three Judges Cases read consultation as concurrence of the Chief Justice and a collegium of senior judges. The 99th Amendment’s NJAC was struck in [[REF:CASE:CONSTITUTIONAL-LAW:NJAC-2015|SCAORA]] as damaging [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:INDEPENDENCE-OF-JUDICIARY|judicial independence]], a [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic feature]]. The collegium revived.",
    exam: "NJAC = 99th Amendment, struck in 2015. Collegium is judge-made, not a word in Article 124.",
    tags: ["constitutional-law", "judiciary", "article-124", "basic-structure", "99th-amendment"],
    aliases: ["collegium", "collegium system", "NJAC", "judges cases"],
    sources: [
      SRC.case("Supreme Court Advocates-on-Record Association v. Union of India", "(2016) 5 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "INSTRUMENTALITY-TEST", {
    title: "Instrumentality / Agency Test",
    summary:
      "The Ajay Hasia / Pradeep Kumar Biswas factors used to decide whether a body is ‘the State’ under Article 12.",
    explanation:
      "Typical factors: shareholding and financial control, monopoly status, deep and pervasive State control, public function, and whether the body is really a government department in corporate dress. No single factor is conclusive. This is how [[REF:CONCEPT:CONSTITUTIONAL-LAW:OTHER-AUTHORITIES|other authorities]] are identified for [[REF:DEFINITION:CONSTITUTION:THE-STATE|Article 12]].",
    exam: "Name Ajay Hasia / Pradeep Kumar Biswas. Do not treat every aided private college as automatically Article 12.",
    tags: ["constitutional-law", "article-12", "the-state", "fundamental-rights"],
    aliases: ["instrumentality test", "agency test", "Ajay Hasia test"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "FLOOR-TEST", {
    title: "Floor Test",
    summary:
      "The proper way to decide whether a government has the confidence of the House is a vote on the floor, not Raj Bhavan arithmetic.",
    explanation:
      "[[REF:CASE:CONSTITUTIONAL-LAW:SR-BOMMAI-1994|S.R. Bommai]] made the floor test central to Article 356 cases and to hung-House situations. Majority is demonstrated in the Assembly, not inferred from letters to the Governor. Later Constitution Bench directions (including Shivraj Singh Chouhan) have pressed for an immediate, recorded floor test when the claim of majority is in doubt.",
    exam: "Bommai + floor test. Governor cannot dismiss a ministry on private soundings when the House can be asked.",
    tags: ["constitutional-law", "federalism", "article-356", "governor", "emergency"],
    aliases: ["floor test", "composite floor test", "confidence vote"],
    sources: [
      SRC.case("S.R. Bommai v. Union of India", "(1994) 3 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "COOPERATIVE-FEDERALISM", {
    title: "Cooperative Federalism",
    summary:
      "Union and States are designed to work together — shared taxes, the GST Council, the Inter-State Council — not only to police exclusive lists.",
    explanation:
      "India is often called quasi-federal: an indestructible Union of destructible States. Cooperative federalism emphasises institutions of joint working, notably the GST Council under [[REF:ARTICLE:CONSTITUTION:ARTICLE-279A]] and the Inter-State Council under [[REF:ARTICLE:CONSTITUTION:ARTICLE-263]]. It sits beside, and sometimes in tension with, Union override powers (256, 356) and [[REF:CONCEPT:CONSTITUTIONAL-LAW:ASYMMETRIC-FEDERALISM|asymmetric]] special provisions.",
    exam: "GST Council (279A) is the stock example of cooperative federalism in a current-affairs answer.",
    tags: ["constitutional-law", "federalism", "gst", "article-263", "article-279A"],
    aliases: ["cooperative federalism", "quasi-federal", "collaborative federalism"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "ASYMMETRIC-FEDERALISM", {
    title: "Asymmetric Federalism",
    summary:
      "Not every State has the same bargain with the Union — special provisions, Sixth Schedule areas, and Union Territories sit on different tracks.",
    explanation:
      "Articles 371 to 371J, the Sixth Schedule, and the National Capital Territory under [[REF:ARTICLE:CONSTITUTION:ARTICLE-239AA]] are the usual illustrations. [[REF:ARTICLE:CONSTITUTION:ARTICLE-370]] was the most famous asymmetry; the 2019 orders, upheld in 2023, made it inoperative. Asymmetry is a design choice, not a defect, so long as [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:FEDERALISM|federalism]] as a basic feature is not emptied out.",
    exam: "371A (Nagaland), 371G (Mizoram), 239AA (Delhi), Sixth Schedule — ready examples of asymmetry.",
    tags: ["constitutional-law", "federalism", "article-370", "article-371A", "sixth-schedule"],
    aliases: ["asymmetric federalism", "asymmetrical federalism", "special provisions for states"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "BASIC-STRUCTURE-FEATURES", {
    title: "Illustrative Basic Features",
    summary:
      "An open list of features the Court has treated as basic — not a schedule in the Constitution, and not frozen in Kesavananda itself.",
    explanation:
      "Commonly listed: supremacy of the Constitution; [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:RULE-OF-LAW|rule of law]]; [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:SEPARATION-OF-POWERS|separation of powers]]; republican and democratic form; [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:FEDERALISM|federalism]]; [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:SECULARISM|secularism]]; [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:JUDICIAL-REVIEW|judicial review]]; independence of the judiciary; free and fair elections; dignity of the individual; harmony of Parts III and IV; and the [[REF:CONCEPT:CONSTITUTIONAL-LAW:GOLDEN-TRIANGLE|golden triangle]].\n\nKesavananda did not publish this as a code. Later benches added to it. That openness is the point of [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|the doctrine]].",
    exam: "Do not claim Kesavananda gave a closed list of eight or nine features. Name five or six and say the list is illustrative.",
    tags: ["constitutional-law", "basic-structure", "constitutional-amendment"],
    aliases: ["basic features", "basic structure features", "list of basic features"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "CONSTITUTIONAL-RIGHT", {
    title: "Constitutional Right (not Fundamental)",
    summary:
      "A right in the Constitution that is not in Part III — enforceable, but through Article 226, not as a Fundamental Right under 32.",
    explanation:
      "The stock example is [[REF:ARTICLE:CONSTITUTION:ARTICLE-300A|Article 300A]] (property), inserted when the 44th Amendment deleted the Fundamental Right to property. It is a constitutional right: the State needs legal authority to deprive a person of property, but the remedy is not Article 32. Other constitutional (non-fundamental) protections include some institutional rules and Directive Principles, which are not rights at all.",
    exam: "300A = constitutional right, not Fundamental Right. Cannot move the Supreme Court under 32 for property alone.",
    tags: ["constitutional-law", "article-300A", "property", "44th-amendment", "article-32"],
    aliases: ["constitutional right", "legal right to property", "300A"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "WRITS", {
    title: "Constitutional Writs",
    summary:
      "Habeas corpus, mandamus, prohibition, quo warranto and certiorari — the five named writs under Articles 32 and 226.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-32]] is the guaranteed right to move the Supreme Court for Part III. [[REF:ARTICLE:CONSTITUTION:ARTICLE-226]] is wider: High Courts may issue writs for Fundamental Rights and ‘for any other purpose’. Habeas corpus frees the body; mandamus commands public duty; prohibition stops an inferior court mid-way; certiorari quashes a finished decision; quo warranto asks by what authority an office is held.",
    exam: "32 is a Fundamental Right (heart and soul). 226 is wider but not itself a Fundamental Right. Name all five writs.",
    tags: ["constitutional-law", "article-32", "article-226", "writs", "judicial-review"],
    aliases: ["writs", "five writs", "prerogative writs", "habeas corpus mandamus"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("CONCEPT", "CONSTITUTIONAL-LAW", "LIVING-CONSTITUTION", {
    title: "Living Constitution",
    summary:
      "The Constitution is read as a document that grows — through amendment, through interpretation, and through the expansion of Article 21 — rather than as a frozen 1950 snapshot.",
    explanation:
      "The phrase is interpretive. It explains how privacy, dignity and environmental rights entered Article 21 without a new clause, and how [[REF:DOCTRINE:CONSTITUTIONAL-LAW:CONSTITUTIONAL-MORALITY|constitutional morality]] is used against majoritarian morality. It is not a licence to ignore text. Amendment under [[REF:ARTICLE:CONSTITUTION:ARTICLE-368]] remains the democratic path for structural change, fenced by [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]].",
    exam: "Use ‘living Constitution’ to explain Article 21 expansion. Do not use it to argue that the Court can amend Article 368.",
    tags: ["constitutional-law", "article-21", "interpretation", "judicial-review"],
    aliases: ["living constitution", "living tree", "transformative constitutionalism"],
    sources: [SRC.educational("Codepackr study note")],
  }),
];
