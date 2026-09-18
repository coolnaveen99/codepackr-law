import { BNS_CHAPTERS } from "./chapters";
import { BNS_SECTIONS, type BnsSection } from "./sections";

export type BnsTopic = {
  id: string;
  title: string;
  chapter?: string;
  blurb: string;
  sectionIds: string[];
  kind: "chapter" | "cluster";
};

function rangeIds(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => String(from + i));
}

const CHAPTER_TOPICS: BnsTopic[] = BNS_CHAPTERS.map((c) => ({
  id: c.id,
  title: `Chapter ${c.roman} · ${c.title}`,
  chapter: c.id,
  blurb: c.blurb,
  sectionIds: rangeIds(c.from, c.to),
  kind: "chapter",
}));

const CLUSTER_TOPICS: BnsTopic[] = [
  {
    id: "new",
    title: "New offences",
    blurb: "Provisions with no IPC predecessor — organised crime, terrorism, snatching, deceitful sex, hiring a child, s. 152.",
    sectionIds: BNS_SECTIONS.filter((s) => s.flags.includes("new")).map((s) => s.id),
    kind: "cluster",
  },
  {
    id: "exam",
    title: "Exam first",
    blurb: "The sections that turn up in judiciary, APO and university papers — homicide, rape, 498A, property, conspiracy.",
    sectionIds: BNS_SECTIONS.filter((s) => s.flags.includes("exam")).map((s) => s.id),
    kind: "cluster",
  },
  {
    id: "homicide",
    title: "Homicide cluster",
    blurb: "Culpable homicide, murder, 103(2) lynching, negligence, attempt, organised crime, terrorist act.",
    sectionIds: rangeIds(100, 113),
    kind: "cluster",
  },
  {
    id: "sexual",
    title: "Sexual offences",
    blurb: "Definition, punishment, deceitful means, gang rape, victim-identity protection.",
    sectionIds: rangeIds(63, 73),
    kind: "cluster",
  },
  {
    id: "women",
    title: "Women — assault and marriage",
    blurb: "Modesty, harassment, disrobe, voyeurism, stalking, dowry death, cruelty.",
    sectionIds: rangeIds(74, 87),
    kind: "cluster",
  },
  {
    id: "property",
    title: "Property — theft to cheating",
    blurb: "Theft, snatching, extortion, robbery, dacoity, misappropriation, trust, stolen property, cheating.",
    sectionIds: rangeIds(303, 319),
    kind: "cluster",
  },
  {
    id: "inchoate",
    title: "Abetment, conspiracy, attempt",
    blurb: "The three inchoate heads, including extra-territorial abetment.",
    sectionIds: rangeIds(45, 62),
    kind: "cluster",
  },
  {
    id: "defence",
    title: "Private defence",
    blurb: "When the right exists, when it extends to death, and when it begins and ends.",
    sectionIds: rangeIds(34, 44),
    kind: "cluster",
  },
  {
    id: "community",
    title: "Community service",
    blurb: "The new sixth punishment, and the petty offences that can draw it.",
    sectionIds: BNS_SECTIONS.filter((s) => s.flags.includes("community-service") || s.id === "4").map((s) => s.id),
    kind: "cluster",
  },
];

export const BNS_TOPICS: BnsTopic[] = [...CLUSTER_TOPICS, ...CHAPTER_TOPICS];

export function bnsTopicById(id: string) {
  return BNS_TOPICS.find((t) => t.id === id);
}

export function bnsTopicForSection(sectionId: string) {
  return CLUSTER_TOPICS.find((t) => t.sectionIds.includes(sectionId)) ?? CHAPTER_TOPICS.find((t) => t.sectionIds.includes(sectionId));
}

export function bnsChapterTopicForSection(sectionId: string) {
  return CHAPTER_TOPICS.find((t) => t.sectionIds.includes(sectionId));
}

export function bnsSectionsInTopic(topicId: string): BnsSection[] {
  const topic = bnsTopicById(topicId);
  if (!topic) return [];
  return topic.sectionIds.map((id) => BNS_SECTIONS.find((s) => s.id === id)).filter((s): s is BnsSection => Boolean(s));
}

export function bnsNeighboursInTopic(sectionId: string, topicId?: string) {
  const topic = (topicId ? bnsTopicById(topicId) : undefined) ?? bnsChapterTopicForSection(sectionId);
  if (!topic) return { topic: undefined, prev: undefined, next: undefined, index: -1 };
  const i = topic.sectionIds.indexOf(sectionId);
  return {
    topic,
    index: i,
    prev: i > 0 ? topic.sectionIds[i - 1] : undefined,
    next: i >= 0 && i < topic.sectionIds.length - 1 ? topic.sectionIds[i + 1] : undefined,
  };
}
