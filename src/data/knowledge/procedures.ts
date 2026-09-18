import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const PROCEDURES: CanonicalEntity[] = [
  entity("PROCEDURE", "CONSTITUTION", "CONSTITUTIONAL-AMENDMENT", {
    title: "Constitutional Amendment Procedure",
    summary:
      "A Bill in either House, special majority in each House, no joint sitting, Presidential assent — plus State ratification for the federal provisions.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-368]] is the code. Steps: (1) Bill introduced in either House (not a joint sitting, not a Money Bill path). (2) Passed in each House by a majority of the total membership and a two-thirds majority of those present and voting. (3) Assent of the President (the 24th Amendment made refusal impossible). (4) For provisions listed in the proviso — including Seventh Schedule lists, the Supreme Court, and the representation of States in Parliament — ratification by not less than half the State Legislatures.\n\nThe power is wide, but [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]] is the judicial limit. An amendment that destroys identity is an [[REF:DOCTRINE:CONSTITUTIONAL-LAW:UNCONSTITUTIONAL-CONSTITUTIONAL-AMENDMENT|unconstitutional constitutional amendment]].",
    exam: "No joint sitting for an amendment Bill. Special majority is total membership + two-thirds of those present and voting. Federal clauses need half the States.",
    tags: ["constitutional-law", "article-368", "constitutional-amendment", "basic-structure"],
    aliases: ["amendment procedure", "article 368 procedure", "how to amend the constitution"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("PROCEDURE", "CONSTITUTION", "PRESIDENTIAL-IMPEACHMENT", {
    title: "Impeachment of the President",
    summary:
      "Charge of violation of the Constitution, preferred by one House with a two-thirds resolution after notice, investigated by the other House.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-61]] is the only removal path. Fourteen days’ notice signed by not less than one-fourth of the members of the originating House; a resolution passed by two-thirds of the total membership; investigation by the other House; and a two-thirds resolution there if the charge is sustained. The President has the right to appear. It has never been used.",
    exam: "Ground = violation of the Constitution. Both Houses, two-thirds of total membership, 14 days’ notice. Not ‘pleasure’, not a no-confidence motion.",
    tags: ["constitutional-law", "article-61", "union-executive", "president"],
    aliases: ["impeachment of the president", "article 61", "presidential impeachment"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("PROCEDURE", "CONSTITUTION", "JUDGE-REMOVAL", {
    title: "Removal of a Supreme Court or High Court Judge",
    summary:
      "Proved misbehaviour or incapacity, address by both Houses in the same session, special majority, then the President’s order.",
    explanation:
      "Article 124(4) (Supreme Court) and the corresponding High Court provision. The Judges (Inquiry) Act, 1968 supplies the inquiry committee. Grounds are only proved misbehaviour or incapacity. The same-session address and the special majority (majority of total membership + two-thirds of those present and voting) are mandatory. This is not impeachment in the Article 61 sense, though it is often called that in political speech.",
    exam: "Do not write ‘impeachment of a judge’ as if it were Article 61. Grounds: proved misbehaviour or incapacity only.",
    tags: ["constitutional-law", "judiciary", "article-124", "independence-of-judiciary"],
    aliases: ["removal of judges", "impeachment of judges", "article 124(4)"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("PROCEDURE", "CONSTITUTION", "ORDINANCE", {
    title: "Ordinance-making Power",
    summary:
      "When Houses are not in session, the President (or a Governor) may promulgate an Ordinance with the force of an Act, which must then be laid before the legislature.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-123]] (Union) and Article 213 (States). Conditions: Houses not in session; satisfaction that immediate action is necessary. An Ordinance ceases six weeks after reassembly unless approved, or earlier if disapproved. D.C. Wadhwa condemned re-promulgation as a fraud on the Constitution; Krishna Kumar Singh (2017) held re-promulgation generally unconstitutional.\n\nAn Ordinance is ‘law’ under Article 13 and can violate Part III like any Act.",
    exam: "Not a parallel Parliament. Six weeks after reassembly. Re-promulgation is the classic abuse (Wadhwa).",
    tags: ["constitutional-law", "article-123", "parliament", "ordinance"],
    aliases: ["ordinance", "ordinance making power", "article 123"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("PROCEDURE", "CONSTITUTION", "NATIONAL-EMERGENCY", {
    title: "National Emergency (Article 352)",
    summary:
      "War, external aggression or armed rebellion; written Cabinet advice; special-majority approval within one month; Articles 20 and 21 cannot be suspended.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-352]] after the 44th Amendment: the President needs the written advice of the Cabinet; ‘internal disturbance’ was replaced by ‘armed rebellion’; approval by both Houses by special majority within one month, then every six months. Article 358 suspends Article 19 automatically only for war or external aggression. Article 359 may suspend the enforcement of other Part III rights, except 20 and 21.\n\nThis is one of three emergencies; do not confuse it with [[REF:PROCEDURE:CONSTITUTION:PRESIDENTS-RULE|President’s rule]] (356) or financial emergency (360).",
    exam: "Grounds after 44th: war, external aggression, armed rebellion. 20 and 21 cannot be suspended. Cabinet written advice is mandatory.",
    tags: ["constitutional-law", "article-352", "emergency", "44th-amendment", "fundamental-rights"],
    aliases: ["national emergency", "article 352", "proclamation of emergency"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("PROCEDURE", "CONSTITUTION", "PRESIDENTS-RULE", {
    title: "President’s Rule (Article 356)",
    summary:
      "If a State’s constitutional machinery fails, the President may assume the State’s functions. The power is justiciable; the floor test is the proper check.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-356]] is the State emergency. A proclamation lasts two months unless approved by Parliament, then six months at a time, with a three-year outer limit subject to conditions. [[REF:CASE:CONSTITUTIONAL-LAW:SR-BOMMAI-1994|Bommai]] made the satisfaction justiciable, required material, restored a dismissed government if the proclamation fell, and placed the [[REF:CONCEPT:CONSTITUTIONAL-LAW:FLOOR-TEST|floor test]] at the centre. Secularism can be a relevant basis; a mere political loss of face cannot.",
    exam: "356 ≠ 352. Bommai is compulsory. Floor test, justiciability, and restoration of the ministry if the proclamation is struck.",
    tags: ["constitutional-law", "article-356", "emergency", "federalism", "governor"],
    aliases: ["president's rule", "presidents rule", "article 356", "state emergency"],
    sources: [
      SRC.case("S.R. Bommai v. Union of India", "(1994) 3 SCC 1"),
      SRC.constitution,
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("PROCEDURE", "CONSTITUTION", "MONEY-BILL", {
    title: "Passage of a Money Bill",
    summary:
      "Introduced only in the Lok Sabha on the President’s recommendation; Rajya Sabha has 14 days to recommend; Lok Sabha may reject those recommendations.",
    explanation:
      "Once a Bill is certified as a [[REF:DEFINITION:CONSTITUTION:MONEY-BILL|Money Bill]] under Article 110, Article 109 supplies the path. Rajya Sabha cannot reject or amend; it can only recommend. If it does not return the Bill in 14 days, it is deemed passed. There is no [[REF:PROCEDURE:CONSTITUTION:JOINT-SITTING|joint sitting]] for a Money Bill, and none for a Constitution Amendment Bill either — for different reasons.",
    exam: "Lok Sabha only to introduce. 14 days in Rajya Sabha. No joint sitting. Speaker’s certificate is the usual gate.",
    tags: ["constitutional-law", "article-110", "article-109", "parliament", "money-bill"],
    aliases: ["money bill procedure", "passage of money bill", "article 109"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("PROCEDURE", "CONSTITUTION", "JOINT-SITTING", {
    title: "Joint Sitting of Parliament",
    summary:
      "The President may summon both Houses to sit together on an ordinary Bill when they disagree — never for a Money Bill or a Constitution Amendment Bill.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-108]] : rejection by the other House, disagreement on amendments, or more than six months’ stall. Passage at the joint sitting is by a majority of members present and voting. The Speaker of the Lok Sabha presides. Used rarely (Dowry Prohibition, Banking Service Commission, POTA).\n\nArticle 368 amendments and Money Bills are excluded. That exclusion is a standard trap.",
    exam: "Article 108. Not for Money Bills, not for amendments under 368. Simple majority of those present and voting at the sitting.",
    tags: ["constitutional-law", "article-108", "parliament"],
    aliases: ["joint sitting", "joint session", "article 108"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
];
