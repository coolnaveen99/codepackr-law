import { makeId } from "./ids";
import type { CanonicalEntity, KnowledgeSource, KnowledgeType } from "./types";

const CONSTITUTION: KnowledgeSource = {
  title: "Constitution of India",
  kind: "primary",
};

export const SRC = {
  constitution: CONSTITUTION,
  educational: (title: string): KnowledgeSource => ({ title, kind: "educational" }),
  case: (title: string, citation: string): KnowledgeSource => ({
    title,
    citation,
    kind: "primary",
  }),
};

type EntityBody = {
  title: string;
  summary: string;
  explanation?: string;
  exam?: string;
  tags: string[];
  aliases?: string[];
  parent?: string;
  sources?: KnowledgeSource[];
  href?: string;
};

export function entity(
  type: KnowledgeType,
  category: string,
  slug: string,
  body: EntityBody,
  origin: CanonicalEntity["origin"] = "canonical",
): CanonicalEntity {
  return {
    id: makeId(type, category, slug),
    type,
    category,
    slug,
    origin,
    ...body,
  };
}
