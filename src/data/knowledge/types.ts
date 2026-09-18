export const KNOWLEDGE_TYPES = [
  "TOPIC",
  "SUBTOPIC",
  "DOCTRINE",
  "LEGAL-PRINCIPLE",
  "CONCEPT",
  "CASE",
  "STATUTE",
  "SECTION",
  "ARTICLE",
  "RULE",
  "REGULATION",
  "DEFINITION",
  "LEGAL-MAXIM",
  "PROCEDURE",
] as const;

export type KnowledgeType = (typeof KNOWLEDGE_TYPES)[number];

export const RELATION_KINDS = [
  "related-topic",
  "related-subtopic",
  "related-doctrine",
  "related-principle",
  "related-case",
  "related-statute",
  "related-section",
  "related-article",
  "interpreted-by",
  "established-by",
  "applied-in",
  "overruled-by",
  "distinguished-by",
  "referred-by",
  "depends-on",
  "see-also",
] as const;

export type RelationKind = (typeof RELATION_KINDS)[number];

export type SourceKind = "primary" | "secondary" | "educational" | "ai-explanation";

export type KnowledgeSource = {
  title: string;
  citation?: string;
  url?: string;
  kind: SourceKind;
};

export type CanonicalEntity = {
  id: string;
  type: KnowledgeType;
  category: string;
  slug: string;
  title: string;
  summary: string;
  explanation?: string;
  exam?: string;
  tags: string[];
  aliases?: string[];
  parent?: string;
  sources?: KnowledgeSource[];
  /** Primary reading page. Hub types omit this and use /knowledge/$id. */
  href?: string;
  origin: "canonical" | "wrapped";
};

export type KnowledgeRelation = {
  from: string;
  to: string;
  kind: RelationKind;
  context?: string;
};

export type RelatedLink = {
  entity: CanonicalEntity;
  kind: RelationKind;
  direction: "out" | "in";
  context?: string;
};

export const HUB_TYPES: KnowledgeType[] = [
  "DOCTRINE",
  "CONCEPT",
  "LEGAL-PRINCIPLE",
  "LEGAL-MAXIM",
  "DEFINITION",
  "PROCEDURE",
];

export const TYPE_LABEL: Record<KnowledgeType, string> = {
  TOPIC: "Topic",
  SUBTOPIC: "Subtopic",
  DOCTRINE: "Doctrine",
  "LEGAL-PRINCIPLE": "Principle",
  CONCEPT: "Concept",
  CASE: "Case",
  STATUTE: "Statute",
  SECTION: "Section",
  ARTICLE: "Article",
  RULE: "Rule",
  REGULATION: "Regulation",
  DEFINITION: "Definition",
  "LEGAL-MAXIM": "Maxim",
  PROCEDURE: "Procedure",
};

export const RELATION_LABEL: Record<RelationKind, { out: string; in: string }> = {
  "related-topic": { out: "Related topic", in: "Appears in" },
  "related-subtopic": { out: "Subtopic", in: "Parent topic" },
  "related-doctrine": { out: "Related doctrine", in: "Related doctrine" },
  "related-principle": { out: "Related principle", in: "Related principle" },
  "related-case": { out: "Related case", in: "Related case" },
  "related-statute": { out: "Related statute", in: "Touches" },
  "related-section": { out: "Related section", in: "Related section" },
  "related-article": { out: "Related article", in: "Related topic" },
  "interpreted-by": { out: "Interpreted by", in: "Interprets" },
  "established-by": { out: "Established by", in: "Established" },
  "applied-in": { out: "Applied in", in: "Applies" },
  "overruled-by": { out: "Overruled by", in: "Overruled" },
  "distinguished-by": { out: "Distinguished by", in: "Distinguished" },
  "referred-by": { out: "Referred by", in: "Refers to" },
  "depends-on": { out: "Depends on", in: "Supports" },
  "see-also": { out: "See also", in: "See also" },
};
