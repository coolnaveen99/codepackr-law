import { useMemo, useState } from 'react'
import { ArrowLeft, Network, Search } from 'lucide-react'
import {
  TYPE_LABEL,
  canonicalEntities,
  decodeKnowledgeId,
  getEntity,
  type CanonicalEntity,
  type KnowledgeType,
} from '../../data/knowledge'
import { RichLegalText } from './RichLegalText'
import { RelatedKnowledge } from './RelatedKnowledge'
import { SoftNavLink } from './SoftNavLink'

const FILTERS: Array<{ id: KnowledgeType | 'all'; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'DOCTRINE', label: 'Doctrines' },
  { id: 'CONCEPT', label: 'Concepts' },
  { id: 'LEGAL-PRINCIPLE', label: 'Principles' },
  { id: 'LEGAL-MAXIM', label: 'Maxims' },
  { id: 'DEFINITION', label: 'Definitions' },
  { id: 'PROCEDURE', label: 'Procedures' },
  { id: 'TOPIC', label: 'Topics' },
]

export function KnowledgeBrowser({
  entityId,
  onBack,
  onOpenEntity,
}: {
  entityId?: string
  onBack: () => void
  onOpenEntity: (id: string) => void
}) {
  const decoded = entityId ? decodeKnowledgeId(entityId) : undefined
  const entity = decoded ? getEntity(decoded) : undefined
  if (entity) {
    return <KnowledgeDetail entity={entity} onBack={onBack} />
  }
  return <KnowledgeIndex onOpenEntity={onOpenEntity} />
}

function KnowledgeIndex({ onOpenEntity }: { onOpenEntity: (id: string) => void }) {
  const [type, setType] = useState<KnowledgeType | 'all'>('all')
  const [query, setQuery] = useState('')
  const entities = useMemo(() => {
    const q = query.trim().toLowerCase()
    return canonicalEntities().filter((e) => {
      if (type !== 'all' && e.type !== type) return false
      if (!q) return true
      return (
        e.title.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q) ||
        e.aliases?.some((a) => a.toLowerCase().includes(q)) ||
        e.tags.some((t) => t.includes(q)) ||
        e.id.toLowerCase().includes(q)
      )
    })
  }, [type, query])

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Network className="w-3.5 h-3.5 text-blue-600" />
          <span className="uppercase tracking-wide font-semibold">Reusable legal knowledge</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Knowledge graph
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          One canonical explanation for each doctrine, concept, maxim, definition, and procedure.
          Article pages and study topics reuse these records instead of duplicating them. Educational
          notes — not official legal advice.
        </p>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search doctrines, cases, articles, aliases…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setType(f.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              type === f.id
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {entities.map((e) => (
          <li key={e.id}>
            <button
              type="button"
              onClick={() => onOpenEntity(e.id)}
              className="w-full text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:border-blue-500 transition"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {TYPE_LABEL[e.type]}
              </span>
              <span className="mt-1 block font-semibold text-slate-900 dark:text-white">{e.title}</span>
              <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {e.summary}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {entities.length === 0 && (
        <p className="text-sm text-slate-500 text-center py-8">No matching knowledge records.</p>
      )}
    </div>
  )
}

function KnowledgeDetail({ entity, onBack }: { entity: CanonicalEntity; onBack: () => void }) {
  const studyHref = entity.href && !entity.href.startsWith('/knowledge/') ? entity.href : undefined

  return (
    <div className="space-y-6 max-w-3xl">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        All knowledge
      </button>

      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300">
          {TYPE_LABEL[entity.type]}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{entity.title}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">{entity.summary}</p>
        <p className="text-[11px] font-mono text-slate-400">{entity.id}</p>
      </div>

      {entity.explanation && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Explanation</h3>
          <RichLegalText
            text={entity.explanation}
            className="text-sm sm:text-[15px] text-slate-700 dark:text-slate-300"
          />
        </section>
      )}

      {entity.exam && (
        <section className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-5">
          <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-2">Exam trap</h3>
          <p className="text-sm text-amber-900/90 dark:text-amber-200/90 leading-relaxed">{entity.exam}</p>
        </section>
      )}

      {entity.aliases && entity.aliases.length > 0 && (
        <p className="text-xs text-slate-500">
          Also known as: {entity.aliases.join(' · ')}
        </p>
      )}

      {studyHref && (
        <SoftNavLink
          href={studyHref}
          className="inline-flex text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          Open full Study Topic →
        </SoftNavLink>
      )}

      {entity.sources && entity.sources.length > 0 && (
        <section className="text-xs text-slate-500 space-y-1">
          <p className="font-semibold uppercase tracking-wide">Sources</p>
          {entity.sources.map((s) => (
            <p key={`${s.title}-${s.citation ?? ''}`}>
              {s.title}
              {s.citation ? ` — ${s.citation}` : ''}
              <span className="ml-1 text-slate-400">({s.kind})</span>
            </p>
          ))}
        </section>
      )}

      <RelatedKnowledge entityId={entity.id} />

      <p className="text-xs text-slate-400">
        Educational material. Canonical IDs are stable; update this record instead of creating a duplicate.
      </p>
    </div>
  )
}
