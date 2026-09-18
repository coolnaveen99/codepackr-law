import {
  getRelated,
  hrefFor,
  RELATION_LABEL,
  TYPE_LABEL,
  type KnowledgeType,
} from '../../data/knowledge'
import { SoftNavLink } from './SoftNavLink'

const DEFAULT_TYPES: KnowledgeType[] = [
  'DOCTRINE',
  'CONCEPT',
  'LEGAL-PRINCIPLE',
  'LEGAL-MAXIM',
  'DEFINITION',
  'PROCEDURE',
  'TOPIC',
  'CASE',
  'ARTICLE',
  'STATUTE',
]

export function RelatedKnowledge({
  entityId,
  types = DEFAULT_TYPES,
  title = 'Related legal knowledge',
  limit = 12,
}: {
  entityId: string
  types?: KnowledgeType[]
  title?: string
  limit?: number
}) {
  const related = getRelated(entityId, { types, limit })
  if (related.length === 0) return null

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
      <ul className="space-y-2">
        {related.map((r) => {
          const label = RELATION_LABEL[r.kind][r.direction]
          return (
            <li key={`${r.direction}-${r.kind}-${r.entity.id}`}>
              <SoftNavLink
                href={hrefFor(r.entity)}
                className="block rounded-xl border border-slate-100 dark:border-slate-800 px-3.5 py-3 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {label} · {TYPE_LABEL[r.entity.type]}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-slate-900 dark:text-white">
                  {r.entity.title}
                </span>
                {r.context ? (
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{r.context}</span>
                ) : null}
              </SoftNavLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
