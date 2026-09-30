import { useMemo, useState } from 'react'
import { ExternalLink, Landmark } from 'lucide-react'
import { PRIMARY_SOURCES, SOURCE_TIER_EXPLAIN, type SourceTier } from '../../data/primarySources'

export function PrimarySourceFinder() {
  const [q, setQ] = useState('')
  const [tier, setTier] = useState<SourceTier | 'all'>('all')

  const rows = useMemo(() => {
    return PRIMARY_SOURCES.filter((s) => {
      if (tier !== 'all' && s.tier !== tier) return false
      if (!q.trim()) return true
      const t = q.toLowerCase()
      return (
        s.title.toLowerCase().includes(t) ||
        s.org.toLowerCase().includes(t) ||
        s.description.toLowerCase().includes(t) ||
        s.category.toLowerCase().includes(t)
      )
    }).sort((a, b) => a.tier - b.tier || a.title.localeCompare(b.title))
  }, [q, tier])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Landmark className="size-4" /> Primary Source Finder
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Reach authoritative sources</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Prefer official government and court sources before reported databases or commentary. CodePackr does not
          mirror copyrighted full-text databases.
        </p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search statutes, courts, eCourts, databases…"
          className="mt-4 w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTier('all')}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold border ${tier === 'all' ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200'}`}
          >
            All tiers
          </button>
          {([1, 2, 3, 4, 5] as SourceTier[]).map((t) => (
            <button
              key={t}
              type="button"
              title={SOURCE_TIER_EXPLAIN[t]}
              onClick={() => setTier(t)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold border ${tier === t ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200'}`}
            >
              Tier {t}
            </button>
          ))}
        </div>
      </section>

      <div className="space-y-3">
        {rows.map((s) => (
          <article
            key={s.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-black text-base text-slate-900 dark:text-white">{s.title}</h2>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50">
                    Tier {s.tier}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-slate-500">{s.category}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {s.org} · {s.tierLabel}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">{s.description}</p>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 shrink-0 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold"
              >
                Open source <ExternalLink className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="text-[11px] text-slate-500">
        Verification status is always yours to confirm on the official host. External links open in a new tab.
      </p>
    </div>
  )
}
