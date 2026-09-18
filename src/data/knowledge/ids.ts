import type { KnowledgeType } from "./types";

export const ID_RE = /^[A-Z][A-Z0-9-]*:[A-Z][A-Z0-9-]*:[A-Z0-9][A-Z0-9-]*$/;

export function makeId(type: KnowledgeType, category: string, slug: string) {
  return `${type}:${category}:${slug}`;
}

export function parseId(id: string): { type: string; category: string; slug: string } | null {
  const parts = id.split(":");
  if (parts.length !== 3) return null;
  const [type, category, slug] = parts;
  if (!type || !category || !slug) return null;
  return { type, category, slug };
}

export function encodeKnowledgeId(id: string) {
  return id.replace(/:/g, "~");
}

export function decodeKnowledgeId(param: string) {
  return decodeURIComponent(param).replace(/~/g, ":");
}

export function articleEntityId(articleId: string) {
  return makeId("ARTICLE", "CONSTITUTION", `ARTICLE-${articleId.toUpperCase()}`);
}

export function amendmentEntityId(n: number) {
  return makeId("STATUTE", "CONSTITUTION", `AMENDMENT-${n}`);
}

export function topicEntityId(topicId: string) {
  return makeId("TOPIC", "CONSTITUTIONAL-LAW", topicId.toUpperCase().replace(/[^A-Z0-9]+/g, "-"));
}

export function partEntityId(roman: string) {
  return makeId("TOPIC", "CONSTITUTION", `PART-${roman.toUpperCase()}`);
}

export function scheduleEntityId(n: number) {
  return makeId("STATUTE", "CONSTITUTION", `SCHEDULE-${n}`);
}

export function bnsSectionEntityId(sectionId: string) {
  return makeId("SECTION", "BNS", `SECTION-${sectionId.toUpperCase()}`);
}

export function bnsCaseEntityId(caseId: string) {
  if (caseId === "navtej") return caseEntityId("navtej");
  const slug = BNS_CASE_SLUG[caseId];
  if (!slug) throw new Error(`Missing canonical BNS case slug for "${caseId}"`);
  return makeId("CASE", "CRIMINAL-LAW", slug);
}

export const BNS_CASE_SLUG: Record<string, string> = {
  govinda: "REGINA-GOVINDA-1876",
  "virsa-singh": "VIRSA-SINGH-1958",
  nanavati: "NANAVATI-1962",
  "bachan-singh": "BACHAN-SINGH-1980",
  "machhi-singh": "MACHHI-SINGH-1983",
  "independent-thought": "INDEPENDENT-THOUGHT-2017",
  "joseph-shine": "JOSEPH-SHINE-2019",
  kedarnath: "KEDAR-NATH-SINGH-1962",
  "barendra-kumar": "BARENDRA-KUMAR-GHOSH-1925",
  "mehboob-shah": "MAHBUB-SHAH-1945",
  tukaram: "TUKARAM-1979",
  mukesh: "MUKESH-NIRBHAYA-2017",
  laxmi: "LAXMI-2014",
  "pyare-lal": "PYARE-LAL-BHARGAVA-1963",
  "hira-lal": "HIRA-LAL-2003",
};



export function bnsTopicEntityId(topicId: string) {
  return makeId("TOPIC", "CRIMINAL-LAW", `BNS-${topicId.toUpperCase().replace(/[^A-Z0-9]+/g, "-")}`);
}

export function bnsChapterEntityId(chapterId: string) {
  return makeId("TOPIC", "BNS", `CHAPTER-${chapterId.toUpperCase()}`);
}

/** Stable slugs matching the architecture examples (Kesavananda, Maneka, …). */
export const CASE_SLUG: Record<string, string> = {
  "shankari-prasad": "SHANKARI-PRASAD-1951",
  "sajjan-singh": "SAJJAN-SINGH-1965",
  golaknath: "GOLAKNATH-1967",
  kesavananda: "KESAVANANDA-BHARATI-1973",
  "raj-narain": "INDIRA-GANDHI-RAJ-NARAIN-1975",
  maneka: "MANEKA-GANDHI-1978",
  "minerva-mills": "MINERVA-MILLS-1980",
  "waman-rao": "WAMAN-RAO-1981",
  "indra-sawhney": "INDRA-SAWHNEY-1992",
  bommai: "SR-BOMMAI-1994",
  kihoto: "KIHOTO-HOLLOHAN-1992",
  vishaka: "VISHAKA-1997",
  coelho: "IR-COELHO-2007",
  nagaraaj: "M-NAGARAJ-2006",
  puttaswamy: "PUTTASWAMY-2017",
  navtej: "NAVTEJ-SINGH-JOHAR-2018",
  njac: "NJAC-2015",
  janhit: "JANHIT-ABHIYAN-2022",
  "article-370": "ARTICLE-370-2023",
  "electoral-bonds": "ELECTORAL-BONDS-2024",
};

export function caseEntityId(caseId: string) {
  const slug = CASE_SLUG[caseId];
  if (!slug) throw new Error(`Missing canonical case slug for "${caseId}"`);
  return makeId("CASE", "CONSTITUTIONAL-LAW", slug);
}

export const IDS = {
  basicStructure: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "BASIC-STRUCTURE"),
  eclipse: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "ECLIPSE"),
  severability: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "SEVERABILITY"),
  prospectiveOverruling: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "PROSPECTIVE-OVERRULING"),
  harmonious: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "HARMONIOUS-CONSTRUCTION"),
  pith: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "PITH-AND-SUBSTANCE"),
  colourable: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "COLOURABLE-LEGISLATION"),
  occupiedField: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "OCCUPIED-FIELD"),
  repugnancy: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "REPUGNANCY"),
  pleasure: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "PLEASURE"),
  territorialNexus: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "TERRITORIAL-NEXUS"),
  manifestArbitrariness: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "MANIFEST-ARBITRARINESS"),
  proportionality: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "PROPORTIONALITY"),
  reasonableClassification: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "REASONABLE-CLASSIFICATION"),
  creamyLayer: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "CREAMY-LAYER"),
  erp: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "ESSENTIAL-RELIGIOUS-PRACTICES"),
  waiver: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "WAIVER-OF-FUNDAMENTAL-RIGHTS"),
  readingDown: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "READING-DOWN"),
  dueProcess: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "DUE-PROCESS"),
  constitutionalMorality: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "CONSTITUTIONAL-MORALITY"),
  uca: makeId("DOCTRINE", "CONSTITUTIONAL-LAW", "UNCONSTITUTIONAL-CONSTITUTIONAL-AMENDMENT"),
  goldenTriangle: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "GOLDEN-TRIANGLE"),
  personalLiberty: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "PERSONAL-LIBERTY"),
  otherAuthorities: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "OTHER-AUTHORITIES"),
  procedureEstablished: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "PROCEDURE-ESTABLISHED-BY-LAW"),
  ninthSchedule: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "NINTH-SCHEDULE"),
  antiDefection: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "ANTI-DEFECTION"),
  pil: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "PUBLIC-INTEREST-LITIGATION"),
  collegium: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "COLLEGIUM"),
  instrumentality: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "INSTRUMENTALITY-TEST"),
  floorTest: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "FLOOR-TEST"),
  cooperativeFederalism: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "COOPERATIVE-FEDERALISM"),
  asymmetricFederalism: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "ASYMMETRIC-FEDERALISM"),
  basicFeatures: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "BASIC-STRUCTURE-FEATURES"),
  constitutionalRight: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "CONSTITUTIONAL-RIGHT"),
  writs: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "WRITS"),
  livingConstitution: makeId("CONCEPT", "CONSTITUTIONAL-LAW", "LIVING-CONSTITUTION"),
  defState: makeId("DEFINITION", "CONSTITUTION", "THE-STATE"),
  defLaw: makeId("DEFINITION", "CONSTITUTION", "LAW-ARTICLE-13"),
  defMoneyBill: makeId("DEFINITION", "CONSTITUTION", "MONEY-BILL"),
  defOfficeOfProfit: makeId("DEFINITION", "CONSTITUTION", "OFFICE-OF-PROFIT"),
  defExistingLaw: makeId("DEFINITION", "CONSTITUTION", "EXISTING-LAW"),
  maximAudi: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "AUDI-ALTERAM-PARTEM"),
  maximNemoJudex: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "NEMO-JUDEX"),
  maximUbiJus: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "UBI-JUS-IBI-REMEDIUM"),
  maximNemoTenetur: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "NEMO-TENETUR"),
  maximSalus: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "SALUS-POPULI"),
  maximDelegatus: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "DELEGATUS-NON-POTEST-DELEGARE"),
  maximUtRes: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "UT-RES-MAGIS-VALEAT"),
  maximEjusdem: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "EJUSDEM-GENERIS"),
  maximIgnorantia: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "IGNORANTIA-JURIS"),
  maximFiat: makeId("LEGAL-MAXIM", "CONSTITUTIONAL-LAW", "FIAT-JUSTITIA"),
  ruleOfLaw: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "RULE-OF-LAW"),
  separation: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "SEPARATION-OF-POWERS"),
  judicialReview: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "JUDICIAL-REVIEW"),
  federalism: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "FEDERALISM"),
  secularism: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "SECULARISM"),
  independence: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "INDEPENDENCE-OF-JUDICIARY"),
  naturalJustice: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "NATURAL-JUSTICE"),
  democracy: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "DEMOCRACY"),
  equality: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "EQUALITY"),
  parliamentary: makeId("LEGAL-PRINCIPLE", "CONSTITUTIONAL-LAW", "PARLIAMENTARY-SYSTEM"),
  procAmendment: makeId("PROCEDURE", "CONSTITUTION", "CONSTITUTIONAL-AMENDMENT"),
  procImpeach: makeId("PROCEDURE", "CONSTITUTION", "PRESIDENTIAL-IMPEACHMENT"),
  procJudgeRemoval: makeId("PROCEDURE", "CONSTITUTION", "JUDGE-REMOVAL"),
  procOrdinance: makeId("PROCEDURE", "CONSTITUTION", "ORDINANCE"),
  procEmergency: makeId("PROCEDURE", "CONSTITUTION", "NATIONAL-EMERGENCY"),
  procPresidentsRule: makeId("PROCEDURE", "CONSTITUTION", "PRESIDENTS-RULE"),
  procMoneyBill: makeId("PROCEDURE", "CONSTITUTION", "MONEY-BILL"),
  procJointSitting: makeId("PROCEDURE", "CONSTITUTION", "JOINT-SITTING"),
  topicFR: makeId("TOPIC", "CONSTITUTIONAL-LAW", "FUNDAMENTAL-RIGHTS"),
  topicDPSP: makeId("TOPIC", "CONSTITUTIONAL-LAW", "DIRECTIVE-PRINCIPLES"),
  topicAmendment: makeId("TOPIC", "CONSTITUTIONAL-LAW", "CONSTITUTIONAL-AMENDMENT"),
  bns: makeId("STATUTE", "CRIMINAL-LAW", "BHARATIYA-NYAYA-SANHITA"),
  bnsTopic: makeId("TOPIC", "CRIMINAL-LAW", "BNS"),
  commonIntention: makeId("DOCTRINE", "CRIMINAL-LAW", "COMMON-INTENTION"),
  commonObject: makeId("DOCTRINE", "CRIMINAL-LAW", "COMMON-OBJECT"),
  privateDefence: makeId("DOCTRINE", "CRIMINAL-LAW", "PRIVATE-DEFENCE"),
  mensRea: makeId("DOCTRINE", "CRIMINAL-LAW", "MENS-REA"),
  culpableHomicide: makeId("CONCEPT", "CRIMINAL-LAW", "CULPABLE-HOMICIDE"),
  doliIncapax: makeId("CONCEPT", "CRIMINAL-LAW", "DOLI-INCAPAX"),
  defChild: makeId("DEFINITION", "CRIMINAL-LAW", "CHILD"),
  procIpcToBns: makeId("PROCEDURE", "CRIMINAL-LAW", "IPC-TO-BNS"),
} as const;
