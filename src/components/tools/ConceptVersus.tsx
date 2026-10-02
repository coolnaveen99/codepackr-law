import { useMemo, useState } from 'react'
import { ArrowLeftRight, BookOpen, Search, ShieldCheck } from 'lucide-react'
import { CONCEPTS } from '../../data/knowledge/concepts'
import type { CanonicalEntity } from '../../data/knowledge/types'

function ConceptSelect({ value, onChange, concepts, label }: { value: string; onChange: (value: string) => void; concepts: CanonicalEntity[]; label: string }) {
  return (
    <label className="block text-sm font-bold">
      <span className="mb-1.5 block text-xs uppercase tracking-wide text-[color:var(--ink-muted)]">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-3 text-sm font-semibold outline-none focus:border-[#8B1E3F]">
        <option value="">Select a concept…</option>
        {concepts.map((concept) => <option key={concept.id} value={concept.id}>{concept.title}</option>)}
      </select>
    </label>
  )
}

export function ConceptVersus() {
  const [leftId, setLeftId] = useState(CONCEPTS[0]?.id ?? '')
  const [rightId, setRightId] = useState(CONCEPTS[1]?.id ?? '')
  const [query, setQuery] = useState('')

  const concepts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q
      ? CONCEPTS.filter((c) => [c.title, c.summary, ...(c.tags || []), ...(c.aliases || [])].join(' ').toLowerCase().includes(q))
      : CONCEPTS
  }, [query])

  const left = CONCEPTS.find((c) => c.id === leftId)
  const right = CONCEPTS.find((c) => c.id === rightId)

  return (
    <div className="mx-auto max-w-6xl space-y-5 px-4 py-6 sm:px-6">
      <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><ArrowLeftRight className="size-4" /> Concept Versus</div>
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">Compare two legal concepts side by side</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--ink-muted)]">Use the canonical knowledge graph to study neighbouring concepts, definitions and exam distinctions. This is a comparison aid, not a legal conclusion.</p>
          </div>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"><ShieldCheck className="size-4" /> Browser-local</div>
        </div>
        <div className="mt-5 relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--ink-muted)]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter concepts…" className="w-full rounded-xl border border-[color:var(--border)] bg-transparent py-3 pl-9 pr-3 text-sm outline-none focus:border-[#8B1E3F]" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ConceptSelect value={leftId} onChange={setLeftId} concepts={concepts} label="Concept A" />
          <ConceptSelect value={rightId} onChange={setRightId} concepts={concepts} label="Concept B" />
        </div>
      </section>

      {left && right ? (
        <section className="grid gap-4 md:grid-cols-2">
          {[left, right].map((concept, index) => (
            <article key={concept.id} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[color:var(--ink-muted)]"><BookOpen className="size-4" /> {index === 0 ? 'Concept A' : 'Concept B'}</div>
              <h2 className="text-xl font-black">{concept.title}</h2>
              <p className="mt-3 text-sm leading-6">{concept.summary}</p>
              {concept.explanation && <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 dark:bg-slate-900">{concept.explanation}</div>}
              {concept.exam && <p className="mt-4 border-l-4 border-[#8B1E3F] pl-3 text-sm font-semibold leading-6">{concept.exam}</p>}
              {!!concept.tags?.length && <div className="mt-4 flex flex-wrap gap-1.5">{concept.tags.map((tag) => <span key={tag} className="rounded-full border border-[color:var(--border)] px-2.5 py-1 text-[10px] font-bold">{tag}</span>)}</div>}
            </article>
          ))}
        </section>
      ) : (
        <div className="rounded-2xl border border-dashed border-[color:var(--border)] p-8 text-center text-sm text-[color:var(--ink-muted)]">Select two concepts to compare.</div>
      )}

      <p className="text-[11px] leading-5 text-[color:var(--ink-muted)]">The comparison uses existing canonical knowledge records only. It does not invent authorities, rank legal arguments, or transmit your selections.</p>
    </div>
  )
}
