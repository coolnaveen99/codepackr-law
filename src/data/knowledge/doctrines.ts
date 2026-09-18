import { SRC, entity } from "./schema";
import type { CanonicalEntity } from "./types";

export const DOCTRINES: CanonicalEntity[] = [
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "BASIC-STRUCTURE", {
    title: "Doctrine of Basic Structure",
    summary:
      "Parliament may amend any part of the Constitution, including Fundamental Rights, but cannot damage or destroy its basic structure.",
    explanation:
      "The basic structure doctrine is the central limit on the amending power in [[REF:ARTICLE:CONSTITUTION:ARTICLE-368]]. It was laid down by a 13-judge bench in [[REF:CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973|Kesavananda Bharati]] (1973). Earlier, [[REF:CASE:CONSTITUTIONAL-LAW:GOLAKNATH-1967|Golaknath]] had barred any amendment of Fundamental Rights. Kesavananda overruled that total bar, and held instead that the power to amend is wide but not unlimited.\n\nThere is no closed list of basic features. The Court has, in later cases, treated as basic: supremacy of the Constitution, [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:RULE-OF-LAW|rule of law]], [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:SEPARATION-OF-POWERS|separation of powers]], [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:JUDICIAL-REVIEW|judicial review]], [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:FEDERALISM|federalism]], [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:SECULARISM|secularism]], free and fair elections, independence of the judiciary, and the harmony between Fundamental Rights and Directive Principles.\n\nThe doctrine was applied to strike parts of the 39th Amendment in [[REF:CASE:CONSTITUTIONAL-LAW:INDIRA-GANDHI-RAJ-NARAIN-1975|Indira Gandhi v. Raj Narain]], the 42nd Amendment’s attempt to immunise amendments in [[REF:CASE:CONSTITUTIONAL-LAW:MINERVA-MILLS-1980|Minerva Mills]], Ninth Schedule insertions after 24 April 1973 in [[REF:CASE:CONSTITUTIONAL-LAW:IR-COELHO-2007|I.R. Coelho]], and the NJAC in [[REF:CASE:CONSTITUTIONAL-LAW:NJAC-2015|the NJAC case]].",
    exam: "Kesavananda did not freeze Fundamental Rights. It allowed amendment of Part III, subject to basic structure. Golaknath is the case that had imposed a total bar.",
    tags: ["constitutional-law", "constitutional-amendment", "basic-structure", "article-368", "judicial-review"],
    aliases: [
      "basic structure",
      "basic structure doctrine",
      "doctrine of basic structure",
      "basic features doctrine",
    ],
    sources: [
      SRC.case("Kesavananda Bharati v. State of Kerala", "(1973) 4 SCC 225"),
      SRC.constitution,
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "ECLIPSE", {
    title: "Doctrine of Eclipse",
    summary:
      "A pre-Constitution law that clashes with a Fundamental Right is not dead — it is overshadowed, and revives if the shadow is removed.",
    explanation:
      "If a law made before 26 January 1950 is inconsistent with Part III, [[REF:ARTICLE:CONSTITUTION:ARTICLE-13]] makes it void to the extent of the inconsistency. The doctrine of eclipse treats that inconsistency as a shadow, not a repeal. The law remains on the statute book for situations the right does not cover (for example, against non-citizens where the right is citizens-only), and it revives if the Fundamental Right is later amended so that the inconsistency disappears.\n\nThe classic authority is Bhikaji Narain Dhakras (1955). The doctrine is generally applied to pre-Constitution laws. A post-Constitution law that violates Part III is stillborn under Article 13(2) and is not merely eclipsed.",
    exam: "Eclipse = pre-Constitution law, shadowed, can revive. A post-Constitution law that abridges Part III is void ab initio under Article 13(2) — do not apply eclipse there.",
    tags: ["constitutional-law", "fundamental-rights", "article-13", "pre-constitution-law"],
    aliases: ["doctrine of eclipse", "eclipse doctrine"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "SEVERABILITY", {
    title: "Doctrine of Severability",
    summary:
      "If part of a statute is unconstitutional, the valid remainder can stand if it can operate independently of the bad part.",
    explanation:
      "Also called separability. When a provision is void under [[REF:ARTICLE:CONSTITUTION:ARTICLE-13]], the Court asks whether the valid and invalid parts are so tangled that the legislature would not have enacted one without the other. If they can be separated, only the offending part is struck. If not, the whole falls.\n\nR.M.D. Chamarbaugwala is the leading case. The test is intention plus workability, not a mechanical blue-pencil. Contrast [[REF:DOCTRINE:CONSTITUTIONAL-LAW:ECLIPSE|eclipse]], which is about pre-Constitution laws being overshadowed rather than about cutting a statute in two.",
    exam: "Severability cuts a statute. Eclipse shadows a pre-Constitution law. Do not swap the two in a Part III answer.",
    tags: ["constitutional-law", "fundamental-rights", "article-13", "judicial-review"],
    aliases: ["doctrine of severability", "separability", "doctrine of separability"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "PROSPECTIVE-OVERRULING", {
    title: "Doctrine of Prospective Overruling",
    summary:
      "The Court may announce a new constitutional rule to apply only from the date of the judgment, leaving past transactions untouched.",
    explanation:
      "Borrowed from American practice and first used in India in [[REF:CASE:CONSTITUTIONAL-LAW:GOLAKNATH-1967|Golaknath]] (1967). The eleven-judge bench held that Parliament could not amend Fundamental Rights, but applied that holding only to future amendments so that the 1st, 4th and 17th Amendments already made would stand.\n\nKesavananda later replaced Golaknath’s total bar with [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]]. Prospective overruling remains a tool the Supreme Court may use when a sudden change of law would cause chaos. It is not available to High Courts.",
    exam: "Prospective overruling is a Supreme Court device. High Courts cannot use it. Golaknath is the Indian origin case.",
    tags: ["constitutional-law", "judicial-review", "article-13", "article-368"],
    aliases: ["prospective overruling", "prospective over-ruling"],
    sources: [
      SRC.case("I.C. Golaknath v. State of Punjab", "AIR 1967 SC 1643"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "HARMONIOUS-CONSTRUCTION", {
    title: "Doctrine of Harmonious Construction",
    summary:
      "Two provisions of the Constitution should be read so that both live, rather than one destroying the other.",
    explanation:
      "Where two articles appear to clash, the Court prefers a reading that gives effect to both. The leading modern illustration is the relationship between Part III and Part IV. [[REF:CASE:CONSTITUTIONAL-LAW:MINERVA-MILLS-1980|Minerva Mills]] held that Fundamental Rights and Directive Principles have to be balanced; the 42nd Amendment’s attempt to give Directive Principles absolute primacy was struck as damaging the [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]].\n\nThe same idea is used inside a single article (clauses read together) and between lists in the Seventh Schedule, alongside [[REF:DOCTRINE:CONSTITUTIONAL-LAW:PITH-AND-SUBSTANCE|pith and substance]].",
    exam: "Minerva Mills is the case for harmony of Parts III and IV. Do not write that DPSPs always yield to Fundamental Rights, or the reverse.",
    tags: ["constitutional-law", "directive-principles", "fundamental-rights", "interpretation"],
    aliases: ["harmonious construction", "doctrine of harmonious construction"],
    sources: [
      SRC.case("Minerva Mills v. Union of India", "(1980) 3 SCC 625"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "PITH-AND-SUBSTANCE", {
    title: "Doctrine of Pith and Substance",
    summary:
      "A law is classified by its true nature and character, not by incidental trespass into another legislative list.",
    explanation:
      "Union, State and Concurrent Lists divide subjects under [[REF:ARTICLE:CONSTITUTION:ARTICLE-246]]. A State law that incidentally touches a Union subject is not void if, in pith and substance, it belongs to a State entry. The incidental encroachment is tolerated.\n\nThe doctrine protects federal competence from a hyper-technical reading of the lists. It is complemented by [[REF:DOCTRINE:CONSTITUTIONAL-LAW:COLOURABLE-LEGISLATION|colourable legislation]] (you cannot do indirectly what you cannot do directly) and by [[REF:DOCTRINE:CONSTITUTIONAL-LAW:REPUGNANCY|repugnancy]] on the Concurrent List.",
    exam: "Ask: what is the law really about? Incidental overlap with another list does not kill it.",
    tags: ["constitutional-law", "federalism", "article-246", "seventh-schedule"],
    aliases: ["pith and substance", "doctrine of pith and substance"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "COLOURABLE-LEGISLATION", {
    title: "Doctrine of Colourable Legislation",
    summary:
      "What the legislature cannot do directly, it cannot do indirectly by dressing the law in another form.",
    explanation:
      "Colourable legislation is a competence doctrine, not a malice doctrine. The question is not whether the legislature acted in bad faith, but whether the enactment, in substance, occupies a field the legislature does not have. If the pith of the law lies outside its list, the colour of the label will not save it.\n\nIt is the other side of [[REF:DOCTRINE:CONSTITUTIONAL-LAW:PITH-AND-SUBSTANCE|pith and substance]]. Used more often in federal (list) disputes than in Fundamental Rights cases.",
    exam: "Colourable legislation = want of legislative competence, not ‘bad motive’. Quote: cannot do indirectly what cannot be done directly.",
    tags: ["constitutional-law", "federalism", "article-246", "legislative-competence"],
    aliases: ["colourable legislation", "colorable legislation", "doctrine of colourable legislation"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "OCCUPIED-FIELD", {
    title: "Doctrine of Occupied Field",
    summary:
      "When a Union law exhaustively covers a Concurrent subject, a State law on the same matter gives way even without a head-on clash of text.",
    explanation:
      "On the Concurrent List both Parliament and a State Legislature may make law. If the Union law is intended to be a complete code, the field is occupied and the State law is inoperative to that extent. This is a cousin of [[REF:DOCTRINE:CONSTITUTIONAL-LAW:REPUGNANCY|repugnancy]] under [[REF:ARTICLE:CONSTITUTION:ARTICLE-254]], but occupied field can be found even where the two texts do not literally contradict each other.",
    exam: "Occupied field is about exhaustive Union coverage of a Concurrent subject. Direct textual clash is classic repugnancy under Article 254.",
    tags: ["constitutional-law", "federalism", "article-254", "concurrent-list"],
    aliases: ["occupied field", "doctrine of occupied field"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "REPUGNANCY", {
    title: "Doctrine of Repugnancy",
    summary:
      "If a State law on a Concurrent subject conflicts with a Union law, the Union law prevails — unless the State law had Presidential assent.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-254]] states the rule. Direct conflict, or a Union law occupying the field, makes the State law void to the extent of repugnancy. The exception: if the State Bill was reserved for the President and received his assent, it prevails in that State, but Parliament can still legislate further and override it.\n\nRepugnancy does not apply to exclusive Union or State List entries — those are competence questions, answered with [[REF:DOCTRINE:CONSTITUTIONAL-LAW:PITH-AND-SUBSTANCE|pith and substance]].",
    exam: "Article 254 + Concurrent List. Presidential assent is a State-specific exception, not a general shield.",
    tags: ["constitutional-law", "federalism", "article-254", "concurrent-list"],
    aliases: ["repugnancy", "doctrine of repugnancy", "article 254"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "PLEASURE", {
    title: "Doctrine of Pleasure",
    summary:
      "Union and State civil servants hold office during the pleasure of the President or Governor, subject to the constitutional safeguards on dismissal.",
    explanation:
      "Article 310 states the pleasure doctrine; Article 311 hedges it. A civil servant may be dismissed, removed or reduced in rank only after a reasonable opportunity of being heard, with limited exceptions (conviction, impracticability, security of the State). Pleasure is not a royal whim — it is a constitutional tenure rule read with [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:NATURAL-JUSTICE|natural justice]].\n\nMinisters hold office during the pleasure of the President under [[REF:ARTICLE:CONSTITUTION:ARTICLE-75]], but they are politically accountable to the Lok Sabha, not through Article 311.",
    exam: "Pleasure (310) is qualified by 311 for civil servants. Ministers are a different channel — Article 75, collective responsibility.",
    tags: ["constitutional-law", "services", "natural-justice", "article-75"],
    aliases: ["doctrine of pleasure", "pleasure doctrine", "during pleasure"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "TERRITORIAL-NEXUS", {
    title: "Doctrine of Territorial Nexus",
    summary:
      "A State law may have extra-territorial reach if there is a real connection between the State and the subject-matter.",
    explanation:
      "[[REF:ARTICLE:CONSTITUTION:ARTICLE-245]] lets a State legislate for the whole or any part of the State. A tax or regulation that bites outside the State is still valid if a territorial nexus is shown — for example, a business connection or property inside the State. Union laws are expressly allowed extra-territorial operation.\n\nThe nexus must be real, not illusory. This is often tested in tax cases.",
    exam: "State extra-territoriality needs a real nexus. Union laws may operate extra-territorially without that hurdle.",
    tags: ["constitutional-law", "federalism", "article-245", "taxation"],
    aliases: ["territorial nexus", "doctrine of territorial nexus"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "MANIFEST-ARBITRARINESS", {
    title: "Doctrine of Manifest Arbitrariness",
    summary:
      "A law can fail Article 14 if it is arbitrary in the excessive sense — capricious, excessive, or without adequate determining principle.",
    explanation:
      "After a long debate, the Supreme Court in Shayara Bano (triple talaq, 2017) revived manifest arbitrariness as a ground to strike primary legislation under [[REF:ARTICLE:CONSTITUTION:ARTICLE-14]]. It sits beside [[REF:DOCTRINE:CONSTITUTIONAL-LAW:REASONABLE-CLASSIFICATION|reasonable classification]]. Classification asks whether likes are treated alike; manifest arbitrariness asks whether the law is so capricious that it is not law in the Article 14 sense.\n\nIt is a high threshold. Not every unwise policy is manifestly arbitrary.",
    exam: "Shayara Bano is the revival case. Use it as a second Article 14 path, not a substitute for classification when classification is the issue.",
    tags: ["constitutional-law", "fundamental-rights", "article-14", "equality"],
    aliases: ["manifest arbitrariness", "doctrine of manifest arbitrariness"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "PROPORTIONALITY", {
    title: "Doctrine of Proportionality",
    summary:
      "A restriction on a right must pursue a legitimate aim by means that are suitable, necessary, and not excessive.",
    explanation:
      "Proportionality is the modern structured test for reasonableness under Articles [[REF:ARTICLE:CONSTITUTION:ARTICLE-19|19]] and [[REF:ARTICLE:CONSTITUTION:ARTICLE-21|21]], and often under [[REF:ARTICLE:CONSTITUTION:ARTICLE-14|14]]. Courts ask: is the aim proper; is the measure connected to it; is a less restrictive alternative available; do the benefits outweigh the burden.\n\nIt has largely replaced a loose ‘reasonableness’ intuition in speech, privacy ([[REF:CASE:CONSTITUTIONAL-LAW:PUTTASWAMY-2017|Puttaswamy]]) and administrative-action cases. It is not a blank cheque to re-make policy.",
    exam: "Four-step proportionality is the expected structure in a rights-restriction answer. Name the aim, the fit, the necessity, and the balance.",
    tags: ["constitutional-law", "fundamental-rights", "article-19", "article-21", "privacy"],
    aliases: ["proportionality", "doctrine of proportionality", "proportionality test"],
    sources: [
      SRC.case("Justice K.S. Puttaswamy v. Union of India", "(2017) 10 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "REASONABLE-CLASSIFICATION", {
    title: "Doctrine of Reasonable Classification",
    summary:
      "Article 14 permits treating different groups differently if the classification is based on an intelligible differentia that has a rational nexus to the object.",
    explanation:
      "Equality before the law is not identity of treatment. The State may classify, but the class must rest on an intelligible differentia, and that differentia must have a rational relation to the statute’s object. Class legislation — picking a person or a closed group without a principle — is forbidden.\n\nThis is the classic two-limb test under [[REF:ARTICLE:CONSTITUTION:ARTICLE-14]]. Later cases added non-arbitrariness and [[REF:DOCTRINE:CONSTITUTIONAL-LAW:MANIFEST-ARBITRARINESS|manifest arbitrariness]] as further faces of equality. Reservation is a constitutionally authorised classification, fenced by provisions such as Articles 15(4)–(6) and 16(4)–(6).",
    exam: "Two limbs: intelligible differentia + rational nexus. ‘Equals must be treated equally’ is the slogan; classification is the mechanism.",
    tags: ["constitutional-law", "fundamental-rights", "article-14", "equality"],
    aliases: ["reasonable classification", "intelligible differentia", "article 14 classification"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "CREAMY-LAYER", {
    title: "Doctrine of Creamy Layer",
    summary:
      "The more advanced members of a backward class are excluded from reservation so that the benefit reaches those who remain backward.",
    explanation:
      "[[REF:CASE:CONSTITUTIONAL-LAW:INDRA-SAWHNEY-1992|Indra Sawhney]] (1992) imposed creamy-layer exclusion for OBCs in [[REF:ARTICLE:CONSTITUTION:ARTICLE-16|Article 16(4)]] reservations. The idea is that once a family has crossed into social and economic advancement, it is no longer ‘backward’ for the purpose of the quota.\n\nThe Court has not applied the same exclusion to Scheduled Castes and Scheduled Tribes in the same way, though later benches have debated it. Creamy layer is a part of the equality architecture, not a statutory phrase in the Constitution itself.",
    exam: "Creamy layer = OBC (Indra Sawhney). Do not write that it automatically applies to SC/ST — that is a live and different debate.",
    tags: ["constitutional-law", "reservation", "article-16", "equality"],
    aliases: ["creamy layer", "creamy-layer doctrine", "exclusion of creamy layer"],
    sources: [
      SRC.case("Indra Sawhney v. Union of India", "1992 Supp (3) SCC 217"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "ESSENTIAL-RELIGIOUS-PRACTICES", {
    title: "Doctrine of Essential Religious Practices",
    summary:
      "What is essential to a religion is protected as ‘matters of religion’; secular and extra-essential practices may be regulated.",
    explanation:
      "Under Articles [[REF:ARTICLE:CONSTITUTION:ARTICLE-25|25]] and [[REF:ARTICLE:CONSTITUTION:ARTICLE-26|26]], denominations may manage their own affairs in matters of religion. The Court decides what is essential, beginning with the Shirur Mutt line of cases. Essential practices receive stronger protection; economic, commercial or superstitious accretions do not.\n\nThe test is controversial — judges, not the denomination, often decide what is essential — but it remains the working doctrine in Indian religious-freedom cases.",
    exam: "ERP is a judicial test, not a clause in Article 25. Public order, morality and health still limit even essential practices.",
    tags: ["constitutional-law", "fundamental-rights", "article-25", "article-26", "religion"],
    aliases: ["essential religious practices", "ERP doctrine", "essential practices test"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "WAIVER-OF-FUNDAMENTAL-RIGHTS", {
    title: "No Waiver of Fundamental Rights",
    summary:
      "A person cannot contract out of, or waive, a Fundamental Right. The rights are a matter of public policy, not a private bargain.",
    explanation:
      "Basheshar Nath held that Fundamental Rights cannot be waived. They bind [[REF:DEFINITION:CONSTITUTION:THE-STATE|the State]] for the benefit of the constitutional order, not merely the individual who happens to be before the Court. A signed consent, an undertaking, or a service rule cannot legalise a Part III violation.\n\nThis is why a ‘voluntary’ confession obtained under compulsion still collides with Article 20(3), and why an employee cannot agree to be dismissed in a manner that defeats Article 14 or 16.",
    exam: "Fundamental Rights cannot be waived. Directive Principles are a different category — they are not ‘waived’; they are not directly enforceable.",
    tags: ["constitutional-law", "fundamental-rights", "article-13", "public-policy"],
    aliases: ["waiver of fundamental rights", "no waiver doctrine", "Basheshar Nath"],
    sources: [SRC.constitution, SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "READING-DOWN", {
    title: "Doctrine of Reading Down",
    summary:
      "If a provision can reasonably be given a narrower meaning that saves it from unconstitutionality, the Court prefers that meaning to striking it down.",
    explanation:
      "Reading down is a saving construction. The Court assumes the legislature intended to stay within the Constitution, and trims the width of the words to a constitutional compass. It is used only where the language can bear the narrower meaning. If it cannot, the provision must be struck, perhaps with [[REF:DOCTRINE:CONSTITUTIONAL-LAW:SEVERABILITY|severability]] of the rest.\n\nRelated tools: reading in (adding words, used sparingly) and [[REF:LEGAL-MAXIM:CONSTITUTIONAL-LAW:UT-RES-MAGIS-VALEAT|ut res magis valeat quam pereat]].",
    exam: "Reading down saves; striking down kills. Do not ‘read down’ a text that cannot honestly bear the narrower sense.",
    tags: ["constitutional-law", "interpretation", "judicial-review"],
    aliases: ["reading down", "doctrine of reading down", "saving construction"],
    sources: [SRC.educational("Codepackr study note")],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "DUE-PROCESS", {
    title: "Substantive Due Process (Maneka)",
    summary:
      "‘Procedure established by law’ in Article 21 is not any procedure — it must be fair, just and reasonable, and it must also satisfy Articles 14 and 19.",
    explanation:
      "A.K. Gopalan had read Article 21 as requiring only a procedure enacted by a competent legislature. [[REF:CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978|Maneka Gandhi]] (1978) discarded that silo. The procedure must be fair, just and reasonable; Articles 14, 19 and 21 form the [[REF:CONCEPT:CONSTITUTIONAL-LAW:GOLDEN-TRIANGLE|golden triangle]]; and the content of [[REF:CONCEPT:CONSTITUTIONAL-LAW:PERSONAL-LIBERTY|personal liberty]] is wide.\n\nThis is India’s path to substantive due process without those three words appearing in the text. Later expansions — privacy, dignity, livelihood, clean environment — rest on this reading of [[REF:ARTICLE:CONSTITUTION:ARTICLE-21]].",
    exam: "After Maneka, ‘procedure established by law’ ≠ Gopalan’s thin reading. Always mention fairness + the golden triangle.",
    tags: ["constitutional-law", "fundamental-rights", "article-21", "article-14", "article-19", "due-process"],
    aliases: ["due process", "substantive due process", "procedure established by law", "Maneka doctrine"],
    sources: [
      SRC.case("Maneka Gandhi v. Union of India", "(1978) 1 SCC 248"),
      SRC.constitution,
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "CONSTITUTIONAL-MORALITY", {
    title: "Constitutional Morality",
    summary:
      "Public power, and sometimes private prejudice, is measured against the Constitution’s values — dignity, equality, liberty — not against majoritarian morality.",
    explanation:
      "The phrase is used in recent Fundamental Rights cases, notably [[REF:CASE:CONSTITUTIONAL-LAW:NAVTEJ-SINGH-JOHAR-2018|Navtej Singh Johar]] (Section 377). Constitutional morality is not a separate justiciable right. It is a way of reading the [[REF:LEGAL-PRINCIPLE:CONSTITUTIONAL-LAW:EQUALITY|equality]] and liberty guarantees so that popular morality cannot shrink them.\n\nIt sits close to transformative constitutionalism and to the idea of a [[REF:CONCEPT:CONSTITUTIONAL-LAW:LIVING-CONSTITUTION|living Constitution]]. Handle it as an interpretive value, not as a free-standing article.",
    exam: "Constitutional morality is a reading tool, not an article. Pair it with 14/15/19/21 and a named case (Navtej, often).",
    tags: ["constitutional-law", "fundamental-rights", "equality", "dignity", "article-14"],
    aliases: ["constitutional morality", "doctrine of constitutional morality"],
    sources: [
      SRC.case("Navtej Singh Johar v. Union of India", "(2018) 10 SCC 1"),
      SRC.educational("Codepackr study note"),
    ],
  }),
  entity("DOCTRINE", "CONSTITUTIONAL-LAW", "UNCONSTITUTIONAL-CONSTITUTIONAL-AMENDMENT", {
    title: "Unconstitutional Constitutional Amendment",
    summary:
      "A constitutional amendment that damages the basic structure is itself unconstitutional and can be struck down.",
    explanation:
      "This is the operational form of [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE|basic structure]]. The Court does not deny that the text was amended through [[REF:PROCEDURE:CONSTITUTION:CONSTITUTIONAL-AMENDMENT|Article 368 procedure]]; it denies that the amending power includes the power to destroy identity. [[REF:CASE:CONSTITUTIONAL-LAW:MINERVA-MILLS-1980|Minerva Mills]] struck Articles 368(4) and (5) as inserted by the 42nd Amendment. [[REF:CASE:CONSTITUTIONAL-LAW:NJAC-2015|NJAC]] struck the 99th. [[REF:CASE:CONSTITUTIONAL-LAW:IR-COELHO-2007|Coelho]] held that even a Ninth Schedule insertion after 24 April 1973 can be tested on this ground.",
    exam: "An amendment Act can be valid as a procedure and still void as a basic-structure violation. Name Kesavananda as the source, then a striking-down case.",
    tags: ["constitutional-law", "constitutional-amendment", "basic-structure", "article-368", "judicial-review"],
    aliases: [
      "unconstitutional constitutional amendment",
      "invalid amendment",
      "striking down a constitutional amendment",
    ],
    sources: [
      SRC.case("Kesavananda Bharati v. State of Kerala", "(1973) 4 SCC 225"),
      SRC.educational("Codepackr study note"),
    ],
  }),
];
