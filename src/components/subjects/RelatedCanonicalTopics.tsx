import { useEffect, useState } from 'react'
import { Link2, Loader2 } from 'lucide-react'
import {
  getCanonicalEntity,
  getRelatedEntityIds,
  getRelatedTopicIds,
} from '../../content/ContentGateway'
import { hrefForCanonicalTopicId, parseCanonicalTopicId } from '../../content/parseCanonicalTopicId'
import { SoftNavLink } from '../knowledge/SoftNavLink'

export interface RelatedLinkItem {
  id: string
  title: string
  href: string | null
  field: string
  kind: 'topic' | 'judgment' | 'doctrine' | 'other'
}

function kindFromId(id: string): RelatedLinkItem['kind'] {
  const prefix = id.split(':')[0]
  if (prefix === 'topic') return 'topic'
  if (prefix === 'judgment') return 'judgment'
  if (prefix === 'doctrine') return 'doctrine'
  return 'other'
}

function fieldLabel(field: string): string {
  switch (field) {
    case 'relatedTopics':
      return 'Related topic'
    case 'relatedJudgments':
      return 'Related judgment'
    case 'relatedDoctrines':
      return 'Related doctrine'
    case 'relatedProvisions':
      return 'Related provision'
    default:
      return field
  }
}

/**
 * Knowledge-graph related links for a topic, resolved only through ContentGateway
 * (manifest / relationship-index / entity body). No raw GitHub fetches in the UI.
 */
export function RelatedCanonicalTopics({
  subjectSlug,
  topicId,
  fallbackRelatedTopicIds,
  title = 'Related in the legal knowledge graph',
}: {
  subjectSlug: string
  topicId: string
  /** IDs already present on the mapped topic content (optional seed). */
  fallbackRelatedTopicIds?: string[]
  title?: string
}) {
  const [items, setItems] = useState<RelatedLinkItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    const canonicalId = `topic:india:${subjectSlug}-${topicId}`

    ;(async () => {
      const edges = await getRelatedEntityIds(canonicalId)
      const topicIds = await getRelatedTopicIds(canonicalId)

      const edgeMap = new Map<string, string>()
      for (const e of edges) {
        if (e.field === 'sources' || e.field === 'members') continue
        if (!edgeMap.has(e.to)) edgeMap.set(e.to, e.field)
      }
      for (const id of topicIds) {
        if (!edgeMap.has(id)) edgeMap.set(id, 'relatedTopics')
      }
      for (const id of fallbackRelatedTopicIds ?? []) {
        if (typeof id === 'string' && id.includes(':') && !edgeMap.has(id)) {
          edgeMap.set(id, 'relatedTopics')
        }
      }

      const resolved: RelatedLinkItem[] = []
      for (const [id, field] of edgeMap) {
        if (id === canonicalId) continue
        const kind = kindFromId(id)
        const entity = await getCanonicalEntity(id)
        const titleText =
          entity?.title ||
          (kind === 'topic'
            ? parseCanonicalTopicId(id)?.topicId.replace(/-/g, ' ') || id
            : id)
        const href = kind === 'topic' ? hrefForCanonicalTopicId(id) : null
        resolved.push({
          id,
          title: titleText,
          href,
          field,
          kind,
        })
      }

      // Prefer topics first, then doctrines, judgments
      const order = { topic: 0, doctrine: 1, judgment: 2, other: 3 }
      resolved.sort((a, b) => order[a.kind] - order[b.kind] || a.title.localeCompare(b.title))

      if (!cancelled) {
        setItems(resolved)
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [subjectSlug, topicId, fallbackRelatedTopicIds?.join('|')])

  if (loading) {
    return (
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading related topics…
        </div>
      </section>
    )
  }

  if (items.length === 0) return null

  return (
    <section
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3"
      aria-label={title}
    >
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
        <Link2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => {
          const meta = (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {fieldLabel(item.field)}
              {item.kind !== 'topic' ? ` · ${item.kind}` : ''}
            </span>
          )
          const body = (
            <>
              {meta}
              <span className="mt-0.5 block text-sm font-medium text-slate-900 dark:text-white">
                {item.title}
              </span>
              <span className="block text-[11px] text-slate-400 font-mono truncate">{item.id}</span>
            </>
          )
          if (item.href) {
            return (
              <li key={item.id}>
                <SoftNavLink
                  href={item.href}
                  className="block rounded-xl border border-slate-100 dark:border-slate-800 px-3.5 py-3 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition"
                >
                  {body}
                </SoftNavLink>
              </li>
            )
          }
          return (
            <li
              key={item.id}
              className="rounded-xl border border-slate-100 dark:border-slate-800 px-3.5 py-3 opacity-90"
            >
              {body}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
