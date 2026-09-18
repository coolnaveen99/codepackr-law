import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const HUB_TOPICS: CanonicalEntity[] = [
  entity("TOPIC", "CONSTITUTIONAL-LAW", "FUNDAMENTAL-RIGHTS", {
    title: "Fundamental Rights",
    summary:
      "Justiciable rights against the State in Part III — equality, freedom, against exploitation, religion, culture, and constitutional remedies.",
    explanation:
      "Part III is enforceable against [[REF:DEFINITION:CONSTITUTION:THE-STATE|the State]]. The clusters in this digest are: foundation (Articles 12–13), equality (14–18), freedom (19–22), exploitation (23–24), religion (25–28), culture (29–30), and remedies (32). Property left Part III in the 44th Amendment and now lives as a [[REF:CONCEPT:CONSTITUTIONAL-LAW:CONSTITUTIONAL-RIGHT|constitutional right]] in Article 300A.\n\nRead the article lessons for the black-letter text. Use this hub for the doctrines that cut across articles: [[REF:DOCTRINE:CONSTITUTIONAL-LAW:DUE-PROCESS|due process]], the [[REF:CONCEPT:CONSTITUTIONAL-LAW:GOLDEN-TRIANGLE|golden triangle]], [[REF:DOCTRINE:CONSTITUTIONAL-LAW:WAIVER-OF-FUNDAMENTAL-RIGHTS|no waiver]], and [[REF:CONCEPT:CONSTITUTIONAL-LAW:WRITS|writs]].",
    exam: "Part III is justiciable; Part IV is not. Article 32 is itself a Fundamental Right.",
    tags: ["constitutional-law", "fundamental-rights", "part-iii", "article-12", "article-32"],
    aliases: ["fundamental rights", "part iii", "FRs"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("TOPIC", "CONSTITUTIONAL-LAW", "DIRECTIVE-PRINCIPLES", {
    title: "Directive Principles of State Policy",
    summary:
      "Part IV — fundamental in governance, not enforceable in court. Social, Gandhian and liberal directives that must be balanced with Part III.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-37]] says the directives are not justiciable but are fundamental in governance. [[REF:CASE:CONSTITUTIONAL-LAW:MINERVA-MILLS-1980|Minerva Mills]] made the harmony of Parts III and IV a [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic feature]]. Article 31C protects laws giving effect to 39(b) and (c); the 42nd’s attempt to expand that shield was struck.\n\nSome directives have later become rights (education, 21A) or institutions (panchayats, 73rd Amendment from Article 40).",
    exam: "Non-justiciable, not non-binding. Minerva Mills is the harmony case. Do not write that DPSPs override Fundamental Rights.",
    tags: ["constitutional-law", "directive-principles", "part-iv", "article-37"],
    aliases: ["directive principles", "DPSPs", "part iv", "directive principles of state policy"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("TOPIC", "CONSTITUTIONAL-LAW", "CONSTITUTIONAL-AMENDMENT", {
    title: "Constitutional Amendment",
    summary:
      "How the Constitution is changed — Article 368 procedure, the 24th Amendment, and the basic-structure limit.",
    explanation:
      "The path is [[REF:PROCEDURE:CONSTITUTION:CONSTITUTIONAL-AMENDMENT|the amendment procedure]]. The limit is [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]]. The story of the cases — Shankari Prasad, Golaknath, Kesavananda, Minerva Mills, Coelho — is the usual essay. Open those case records rather than copying their holdings here.",
    exam: "Procedure (368) and limit (basic structure) are two different answers. Write both.",
    tags: ["constitutional-law", "constitutional-amendment", "article-368", "basic-structure"],
    aliases: ["constitutional amendment", "amendment of the constitution", "article 368"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
];
