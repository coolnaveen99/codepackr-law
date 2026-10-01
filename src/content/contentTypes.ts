export type ContentEntityType =
  | 'topic'
  | 'provision'
  | 'judgment'
  | 'doctrine'
  | 'comparison'
  | 'illustration'
  | 'source'
  | 'collection'
  | 'sanhitaMapping'
  | 'seoRecord'

export type ContentStatus =
  | 'draft'
  | 'research'
  | 'review'
  | 'verified'
  | 'approved'
  | 'published'
  | 'review-due'
  | 'update'
  | 'archived'

export interface ContentEntityRef {
  id: string
  entityType: ContentEntityType
  version: number
}

export interface ContentEnvelope {
  schemaVersion: string
  entityType: ContentEntityType
  id: string
  version: number
  status: ContentStatus
  title: string
  jurisdiction: string
  content: Record<string, unknown>
  sources: string[]
  updatedAt: string
  effectiveFrom?: string | null
  effectiveTo?: string | null
  tags?: string[]
}

export interface ContentManifestEntry {
  id: string
  entityType: ContentEntityType
  path: string
  version: number
  status: ContentStatus
  sha256?: string | null
}

export interface ContentManifest {
  manifestVersion: string
  generatedAt: string
  repository: string
  entities: ContentManifestEntry[]
}

/** Optional adjacency index produced by legal-content `npm run graph:index`. */
export interface RelationshipEdgeRef {
  to?: string
  from?: string
  field: string
}

export interface RelationshipIndex {
  schemaVersion: string
  generatedAt: string
  repository: string
  edgeCount: number
  outbound: Record<string, Array<{ to: string; field: string }>>
  inbound: Record<string, Array<{ from: string; field: string }>>
}

export interface ContentRepository {
  get<T extends ContentEnvelope = ContentEnvelope>(
    entityType: ContentEntityType,
    id: string,
  ): Promise<T | null>
  getTopic(subjectSlug: string, topicId: string): Promise<TopicContentRecord | null>
  getManifest(): Promise<ContentManifest | null>
  /** Resolve any published entity by canonical ID via the manifest path. */
  getById?<T extends ContentEnvelope = ContentEnvelope>(id: string): Promise<T | null>
  /** Outbound relation edges for an entity (from relationship-index or entity body). */
  getOutboundRelations?(id: string): Promise<Array<{ to: string; field: string }>>
}

export interface TopicContentRecord extends ContentEnvelope {
  entityType: 'topic'
  content: Record<string, any>
}
