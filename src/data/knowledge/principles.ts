import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const PRINCIPLES: CanonicalEntity[] = [
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "RULE-OF-LAW", {
    title: "Rule of Law",
    summary:
      "Public power is exercised under law, not under will. No one, including the State, is above the Constitution.",
    explanation:
      "Dicey’s three classic ideas — supremacy of law, equality before the law, and the constitution as the result of ordinary law — are adapted, not copied, in India. [[REF:ARTICLE:CONSTITUTION:ARTICLE-14]] is the textual equality limb. [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:JUDICIAL-REVIEW|Judicial review]] is the enforcement limb. The Supreme Court has treated rule of law as part of the [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]] (Raj Narain, later cases).\n\nEmergency experience, especially ADM Jabalpur, is taught as the anti-canon; the 44th Amendment’s protection of Articles 20 and 21 is the textual reply.",
    exam: "Rule of law is a basic feature. Article 14 is the usual peg. ADM Jabalpur is the cautionary tale.",
    tags: ["constitutional-law", "rule-of-law", "article-14", "basic-structure"],
    aliases: ["rule of law", "supremacy of law"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "SEPARATION-OF-POWERS", {
    title: "Separation of Powers",
    summary:
      "The legislature, executive and judiciary occupy distinct centres. Encroachment on the core of another is unconstitutional.",
    explanation:
      "India does not follow a rigid American wall. The parliamentary executive sits in the legislature. Separation is still a [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic feature]]: the legislature cannot decide a specific case (Raj Narain), the executive cannot be a substitute High Court, and the judiciary cannot be packed by a commission that dilutes judicial primacy ([[REF:CASE:CONSTITUTIONAL-LAW:NJAC-2015|NJAC]]). [[REF:ARTICLE:CONSTITUTION:ARTICLE-50]] directs separation of the judiciary from the executive in the public services of the State.",
    exam: "Not a rigid Montesquieu wall. It is a basic feature that protects each organ’s core function.",
    tags: ["constitutional-law", "separation-of-powers", "basic-structure", "article-50"],
    aliases: ["separation of powers", "separation of powers doctrine"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "JUDICIAL-REVIEW", {
    title: "Judicial Review",
    summary:
      "Courts may examine the constitutionality of legislation, amendments, and executive action, and strike what cannot stand.",
    explanation:
      "Implied in Articles 13, 32, 136, 141, 142 and 226, and treated as a [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic feature]]. Minerva Mills struck the 42nd Amendment’s attempt to make amendments unreviewable. Coelho extended review to post-1973 Ninth Schedule laws. Review is not appeal on facts; the grounds (competence, Part III, basic structure, manifest arbitrariness, proportionality) must be named.",
    exam: "Judicial review is basic structure. A clause that says ‘this amendment shall not be questioned in any court’ is itself questionable.",
    tags: ["constitutional-law", "judicial-review", "basic-structure", "article-32", "article-226"],
    aliases: ["judicial review", "power of judicial review"],
    sources: [
      SRC.case("Minerva Mills v. Union of India", "(1980) 3 SCC 625"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "FEDERALISM", {
    title: "Federalism",
    summary:
      "A Union of States with divided powers, an independent judiciary, and (in India) a strong Centre — an indestructible Union of destructible States.",
    explanation:
      "The Constitution never uses the word ‘federation’. Ambedkar chose ‘Union’. States have no right to secede; Parliament may redraw them under [[REF:ARTICLE:CONSTITUTION:ARTICLE-3]]. Lists, [[REF:ARTICLE:CONSTITUTION:ARTICLE-254|repugnancy]], the Finance Commission, and GST are the working machinery. Federalism is still a [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic feature]] (Bommai). [[REF:CONCEPT:CONSTITUTIONAL-LAW:COOPERATIVE-FEDERALISM|Cooperative]] and [[REF:CONCEPT:CONSTITUTIONAL-LAW:ASYMMETRIC-FEDERALISM|asymmetric]] federalism are the current vocabulary.",
    exam: "‘Quasi-federal’ / ‘indestructible Union of destructible States’. Article 3 is the destructible-States clause.",
    tags: ["constitutional-law", "federalism", "article-1", "article-3", "basic-structure"],
    aliases: ["federalism", "quasi-federal", "federal structure"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "SECULARISM", {
    title: "Secularism",
    summary:
      "The State has no religion of its own, treats religions equally, and may still reform social practices. Added to the Preamble by the 42nd Amendment, treated as always implicit.",
    explanation:
      "The 42nd Amendment wrote ‘secular’ into the Preamble; the Court has said the value was already in Articles 25–28 and 14–15. [[REF:CASE:CONSTITUTIONAL-LAW:SR-BOMMAI-1994|Bommai]] made secularism a [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic feature]] and a ground on which a State government may be judged. Indian secularism is often described as equal respect, not a wall of separation: the State may regulate economic and secular aspects of religion and may enact social-reform laws.",
    exam: "Secularism is basic structure (Bommai). It was implicit before the 42nd; the 42nd named it.",
    tags: ["constitutional-law", "secularism", "preamble", "article-25", "basic-structure", "42nd-amendment"],
    aliases: ["secularism", "secular state", "secular"],
    sources: [
      SRC.case("S.R. Bommai v. Union of India", "(1994) 3 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "INDEPENDENCE-OF-JUDICIARY", {
    title: "Independence of the Judiciary",
    summary:
      "A basic feature: security of tenure, difficult removal, charge on the Consolidated Fund, and judicial primacy in appointments.",
    explanation:
      "Tenure, salary, contempt power, and the high bar for removal under [[REF:ARTICLE:CONSTITUTION:ARTICLE-124]] are the textual guarantees. The [[REF:CONCEPT:CONSTITUTIONAL-LAW:COLLEGIUM|collegium]] is the case-law guarantee of primacy in appointments. [[REF:CASE:CONSTITUTIONAL-LAW:NJAC-2015|NJAC]] held that transferring primacy to a commission with a political majority damaged this basic feature.",
    exam: "Independence is basic structure. NJAC (99th) is the appointment case. Removal is a parliamentary address, not pleasure.",
    tags: ["constitutional-law", "judiciary", "article-124", "basic-structure", "collegium"],
    aliases: ["independence of the judiciary", "judicial independence", "independent judiciary"],
    sources: [
      SRC.case("Supreme Court Advocates-on-Record Association v. Union of India", "(2016) 5 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "NATURAL-JUSTICE", {
    title: "Natural Justice",
    summary:
      "Fair hearing and no bias — implied into statutory and administrative procedure by Articles 14 and 21 unless clearly excluded.",
    explanation:
      "The two Latin pillars are [[REF:LEGAL-MAXIM:CONSTITUTIONAL-LAW:AUDI-ALTERAM-PARTEM|audi alteram partem]] and [[REF:LEGAL-MAXIM:CONSTITUTIONAL-LAW:NEMO-JUDEX|nemo judex]]. Maneka made fairness a constitutional requirement for any procedure that takes liberty. Exclusion is exceptional (urgency, confidentiality, a necessary implication). Reasoned orders are often treated as a third practical limb.",
    exam: "Two rules + (often) reasons. Peg to Articles 14 and 21, not to a missing ‘natural justice’ article.",
    tags: ["constitutional-law", "natural-justice", "article-14", "article-21", "administrative-law"],
    aliases: ["natural justice", "principles of natural justice", "PNJ"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "DEMOCRACY", {
    title: "Democracy and Republic",
    summary:
      "A sovereign democratic republic: adult suffrage, free and fair elections, and a President as head of State rather than a monarch.",
    explanation:
      "The Preamble names the values. Article 326 (adult suffrage, now 18) and Article 324 (Election Commission) are the machinery. Raj Narain treated free and fair elections as [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]]. The republican form means a chosen head of State under [[REF:ARTICLE:CONSTITUTION:ARTICLE-52]], removable only by the special [[REF:PROCEDURE:CONSTITUTION:PRESIDENTIAL-IMPEACHMENT|impeachment]] process.",
    exam: "Free and fair elections = basic structure (Raj Narain). Voting age 18 = 61st Amendment.",
    tags: ["constitutional-law", "democracy", "preamble", "elections", "basic-structure"],
    aliases: ["democracy", "democratic republic", "republican form"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "EQUALITY", {
    title: "Equality",
    summary:
      "Equality before the law and equal protection of the laws — a basic value that still allows reasonable classification, reservation, and special provision.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-14]] is the general clause. Articles 15–18 particularise it. [[REF:DOCTRINE:CONSTITUTIONAL-LAW:REASONABLE-CLASSIFICATION|Reasonable classification]] and [[REF:DOCTRINE:CONSTITUTIONAL-LAW:MANIFEST-ARBITRARINESS|manifest arbitrariness]] are the two judicial tests. Reservation is an equality device, not an exception that sits outside 14: it is authorised by 15(4)–(6) and 16(4)–(6), with the 50% rule and [[REF:DOCTRINE:CONSTITUTIONAL-LAW:CREAMY-LAYER|creamy layer]] as case-law fences (themselves qualified by the EWS holding in Janhit Abhiyan).",
    exam: "14 = general; 15–18 = specific. Classification is allowed; class legislation is not.",
    tags: ["constitutional-law", "equality", "article-14", "fundamental-rights", "reservation"],
    aliases: ["equality", "equality before law", "equal protection"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "PARLIAMENTARY-SYSTEM", {
    title: "Parliamentary System",
    summary:
      "A Council of Ministers, headed by the Prime Minister, collectively responsible to the Lok Sabha; the President acts on its advice.",
    explanation:
      "Articles 74 and 75 are the core. The 42nd Amendment made advice binding; the 44th added a one-time reconsideration. Collective responsibility, the 15% cap (91st Amendment), and the difference between legal (President) and political (Prime Minister) executive are standard exam points. Hung-House discretion of the President is a narrow residual pocket, not a general third power.",
    exam: "Aid and advice is binding (74). Collective responsibility is to the Lok Sabha (75). Hung House is the rare personal discretion.",
    tags: ["constitutional-law", "union-executive", "article-74", "article-75", "parliament"],
    aliases: ["parliamentary system", "parliamentary form of government", "cabinet system"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
];
