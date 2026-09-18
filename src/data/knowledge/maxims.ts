import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const MAXIMS: CanonicalEntity[] = [
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "AUDI-ALTERAM-PARTEM", {
    title: "Audi alteram partem",
    summary: "Hear the other side. No one should be condemned unheard.",
    explanation:
      "One of the two pillars of [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:NATURAL-JUSTICE|natural justice]]. It requires notice of the case and a fair opportunity to answer before a civil consequence is imposed. Indian administrative law reads this into Articles 14 and 21. Statutory silence does not usually exclude it; express words or a necessary implication may.",
    exam: "Pair with nemo judex. Together they are the two rules of natural justice.",
    tags: ["natural-justice", "administrative-law", "article-14", "article-21"],
    aliases: ["audi alteram partem", "hear the other side", "right to be heard"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "NEMO-JUDEX", {
    title: "Nemo judex in causa sua",
    summary: "No one should be a judge in their own cause. Bias vitiates the decision.",
    explanation:
      "The second pillar of [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:NATURAL-JUSTICE|natural justice]]. Pecuniary bias, personal bias, and official bias are the usual heads. A reasonable apprehension of bias is enough; proof of actual crookedness is not required. Necessity can be a narrow exception when no other forum exists.",
    exam: "Reasonable apprehension of bias, not proven malice. Nemo judex + audi alteram partem = natural justice.",
    tags: ["natural-justice", "administrative-law", "bias"],
    aliases: ["nemo judex", "nemo judex in causa sua", "rule against bias"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "UBI-JUS-IBI-REMEDIUM", {
    title: "Ubi jus ibi remedium",
    summary: "Where there is a right, there is a remedy.",
    explanation:
      "The constitutional form is [[REF:ARTICLE:CONSTITUTION:ARTICLE-32]] — Ambedkar’s heart and soul — and the wider High Court writ under [[REF:ARTICLE:CONSTITUTION:ARTICLE-226]]. A Fundamental Right without a forum would be a promise on paper. This maxim is also why the Court fashioned new tools (continuing mandamus, [[REF:CONCEPT:CONSTITUTIONAL-LAW:PUBLIC-INTEREST-LITIGATION|PIL]]) when old forms ran out.",
    exam: "Article 32 is the constitutional ubi jus. Mention Ambedkar’s ‘heart and soul’ line in a remedies answer.",
    tags: ["article-32", "article-226", "writs", "fundamental-rights"],
    aliases: ["ubi jus ibi remedium", "where there is a right there is a remedy"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "NEMO-TENETUR", {
    title: "Nemo tenetur seipsum accusare",
    summary: "No one is bound to accuse themselves. The root of the protection against self-incrimination.",
    explanation:
      "Article 20(3) is the constitutional expression: no person accused of an offence shall be compelled to be a witness against himself. It is a person-right, not only a citizen-right. Selvi (2010) used it to restrict involuntary narco-analysis, polygraph and brain-mapping. It does not cover voluntary statements or purely physical evidence in the same way.",
    exam: "Article 20(3) = accused + compulsion + testimonial character. Not a general right of silence for every witness.",
    tags: ["article-20", "fundamental-rights", "self-incrimination", "criminal-procedure"],
    aliases: ["nemo tenetur", "nemo tenetur seipsum accusare", "right against self-incrimination"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "SALUS-POPULI", {
    title: "Salus populi suprema lex",
    summary: "The welfare of the people is the supreme law.",
    explanation:
      "Used to justify regulation in the public interest — health, emergency, environment — but it is not a clause that overrides Part III. After Maneka and the [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]] cases, public welfare is pursued through a reasonable, proportionate law, not by suspending the Constitution. Emergency provisions are the textual public-safety machinery, not this maxim.",
    exam: "A maxim, not an article. It cannot authorise an unconstitutional statute.",
    tags: ["public-interest", "interpretation", "emergency"],
    aliases: ["salus populi", "salus populi suprema lex"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "DELEGATUS-NON-POTEST-DELEGARE", {
    title: "Delegatus non potest delegare",
    summary: "A delegate cannot further delegate the essential legislative function.",
    explanation:
      "Parliament and State Legislatures may delegate the filling-in of details (conditional legislation, subordinate legislation) but not the essential legislative policy. Excessive delegation is a ground of invalidity. The maxim is the Latin form of that limit, read with [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:SEPARATION-OF-POWERS|separation of powers]].",
    exam: "Essential legislative function cannot be delegated; ancillary rule-making can. ‘Excessive delegation’ is the exam phrase.",
    tags: ["separation-of-powers", "delegated-legislation", "parliament"],
    aliases: ["delegatus non potest delegare", "delegatus", "excessive delegation"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "UT-RES-MAGIS-VALEAT", {
    title: "Ut res magis valeat quam pereat",
    summary: "A text should be interpreted so that it lives, rather than so that it perishes.",
    explanation:
      "The preference for a saving construction. It supports [[REF:DOCTRINE:CONSTITUTIONAL-LAW:READING-DOWN|reading down]] and [[REF:DOCTRINE:CONSTITUTIONAL-LAW:HARMONIOUS-CONSTRUCTION|harmonious construction]]. The Court will not rewrite a statute, but it will choose a meaning that keeps the law inside the Constitution if the words can bear it.",
    exam: "Saving construction maxim. Pair with reading down.",
    tags: ["interpretation", "reading-down"],
    aliases: ["ut res magis valeat quam pereat", "ut res magis valeat", "saving construction"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "EJUSDEM-GENERIS", {
    title: "Ejusdem generis",
    summary: "General words that follow specific words take their colour from the same class or genus.",
    explanation:
      "A construction canon used on lists in the Constitution and in statutes. If a provision says ‘factory, mine, or other hazardous employment’, the general tail is read in the genus of the named items. Related canons: noscitur a sociis (a word is known by its companions) and expressio unius (mention of one excludes the other).",
    exam: "Need a genus. If the listed words have no common class, ejusdem generis does not apply.",
    tags: ["interpretation", "construction"],
    aliases: ["ejusdem generis", "of the same kind"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "IGNORANTIA-JURIS", {
    title: "Ignorantia juris non excusat",
    summary: "Ignorance of law is no excuse.",
    explanation:
      "A general common-law maxim. In constitutional work it is a caution, not a rights-denying rule: publication of law, fair notice, and the voidness of secret or inaccessible norms still matter under Articles 14 and 21. Criminal law may distinguish ignorance of law from mistake of fact.",
    exam: "Do not use this maxim to defend an unpublished or vague criminal prohibition.",
    tags: ["interpretation", "rule-of-law"],
    aliases: ["ignorantia juris non excusat", "ignorantia juris", "ignorance of the law is no excuse"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "FIAT-JUSTITIA", {
    title: "Fiat justitia ruat caelum",
    summary: "Let justice be done though the heavens fall.",
    explanation:
      "A rhetorical commitment to deciding according to law even when the political weather is ugly. It is often invoked around emergency and basic-structure cases. It is not an operative clause. The Court’s real tools remain [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:JUDICIAL-REVIEW|judicial review]], proportionality, and the text.",
    exam: "Colour, not a holding. Do not cite it as if it were an article.",
    tags: ["judicial-review", "rule-of-law"],
    aliases: ["fiat justitia ruat caelum", "fiat justitia", "let justice be done"],
    sources: [SRC.educational("Codepackr study note")],
  }),
];
