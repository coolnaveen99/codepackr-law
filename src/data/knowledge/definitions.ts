import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const DEFINITIONS: CanonicalEntity[] = [
  entity("DEFINITION", "CONSTITUTION", "THE-STATE", {
    title: "“The State” (Article 12)",
    summary:
      "For Part III: the Union and State governments and legislatures, and all local or other authorities in India or under Union control.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-12]] is the gateway definition. If a body is the State, Fundamental Rights bind it. The difficult limb is [[REF:CONCEPT:CONSTITUTIONAL-LAW:OTHER-AUTHORITIES|other authorities]], filled out by the [[REF:CONCEPT:CONSTITUTIONAL-LAW:INSTRUMENTALITY-TEST|instrumentality tests]]. Article 36 borrows the same meaning for Part IV.\n\nThis is a definition for Parts III and IV, not a definition of the Union for the whole Constitution.",
    exam: "Article 12 is not an all-Constitution definition. It is for Part III (and, via 36, Part IV).",
    tags: ["constitutional-law", "article-12", "fundamental-rights", "the-state"],
    aliases: ["the State", "article 12", "definition of state", "State under article 12"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DEFINITION", "CONSTITUTION", "LAW-ARTICLE-13", {
    title: "“Law” (Article 13)",
    summary:
      "Includes ordinances, orders, bye-laws, rules, regulations, notifications, custom or usage — and, after a long fight, does not by itself catch a constitutional amendment.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-13]] voids laws inconsistent with Part III. Clause (3) defines law widely. Clause (4), added by the 24th Amendment, says Article 13 does not apply to amendments made under 368. [[REF:CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973|Kesavananda]] accepted that, and controlled amendments through [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]] instead.\n\nGolaknath had treated an amendment as ‘law’ under 13. That specific holding does not survive Kesavananda.",
    exam: "After the 24th Amendment + Kesavananda, a constitutional amendment is not ‘law’ in Article 13. It is still reviewable on basic structure.",
    tags: ["constitutional-law", "article-13", "fundamental-rights", "constitutional-amendment"],
    aliases: ["law article 13", "definition of law", "article 13 law"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DEFINITION", "CONSTITUTION", "MONEY-BILL", {
    title: "Money Bill (Article 110)",
    summary:
      "A Bill that contains only the matters listed in Article 110(1) — tax, borrowing, the Consolidated and Contingency Funds, appropriation, and incidentals.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-110]] is exhaustive. If a Bill mixes those matters with other policy, it is not a Money Bill. The Speaker’s certificate is ordinarily conclusive, though the Court has been willing to examine whether the certificate was a fraud on the Constitution in extreme cases. Rajya Sabha cannot amend a Money Bill; it may recommend, and the Lok Sabha may reject the recommendations.\n\nThe passage rules live in [[REF:PROCEDURE:CONSTITUTION:MONEY-BILL|the Money Bill procedure]].",
    exam: "Only the listed heads, and ‘only’. A hybrid finance-plus-policy Bill is not a Money Bill. No joint sitting for Money Bills.",
    tags: ["constitutional-law", "article-110", "parliament", "money-bill"],
    aliases: ["money bill", "money bills", "article 110", "definition of money bill"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DEFINITION", "CONSTITUTION", "OFFICE-OF-PROFIT", {
    title: "Office of Profit",
    summary:
      "An office under the government that yields a financial gain or advantage. Holding one disqualifies a legislator unless Parliament or the State law exempts it.",
    explanation:
      "Articles 102 and 191 disqualify a person who holds an office of profit under the Government of India or a State, other than an office exempted by law. The tests (from Jaya Bachchan and related cases) look at control, appointment, removal, and whether profit actually attaches. A nominal allowance does not always make an office one of profit; a real pecuniary advantage does.",
    exam: "Office of profit = government office + profit, minus a statutory exemption. Profit is actual advantage, not a mere honorary title.",
    tags: ["constitutional-law", "parliament", "disqualification", "office-of-profit"],
    aliases: ["office of profit", "office-of-profit", "article 102"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DEFINITION", "CONSTITUTION", "EXISTING-LAW", {
    title: "Existing Law",
    summary:
      "A law in force before the commencement of the Constitution — the material on which Article 13(1) and the doctrine of eclipse operate.",
    explanation:
      "Article 366 and Article 13 together treat pre-commencement laws as ‘existing law’. They continue in force so far as consistent with the Constitution. Inconsistency with Part III brings [[REF:DOCTRINE:CONSTITUTIONAL-LAW:ECLIPSE|eclipse]] and [[REF:DOCTRINE:CONSTITUTIONAL-LAW:SEVERABILITY|severability]] into play. Post-Constitution laws are tested under Article 13(2) and are not ‘existing law’.",
    exam: "Existing law = pre-26 January 1950. That is the eclipse zone.",
    tags: ["constitutional-law", "article-13", "pre-constitution-law"],
    aliases: ["existing law", "existing laws", "pre-constitution law"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
];
