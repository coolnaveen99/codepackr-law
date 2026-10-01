import { useMemo, useState } from 'react'
import { CheckCircle2, ExternalLink, Landmark, Search } from 'lucide-react'
import { PRIMARY_SOURCES, SOURCE_TIER_EXPLAIN, type SourceTier } from '../../data/primarySources'
import { filterPrimarySources, getPrimarySourceStats } from '../../lib/primarySourceFinder'

const REVIEW_DATE = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'Asia/Kolkata',
})

export function PrimarySourceFinder() {
  const [q, setQ] = useState('')
  const [tier, setTier] = useState<SourceTier | 'all'>('all')
  const [category, setCategory] = useState<'all' | string>('all')

  const categories = useMemo(
    () => [...new Set(PRIMARY_SOURCES.map((source) => source.category))].sort(),
    [],
  )

  const rows = useMemo(
    () => filterPrimarySources(PRIMARY_SOURCES, { query: q, tier, category }),
    [q, tier, category],
  )

  const stats = useMemo(() => getPrimarySourceStats(PRIMARY_SOURCES), [])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Landmark className="size-4" /> Primary Source Finder
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Reach authoritative sources</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Find official government and court sources first, then reported research services. CodePackr links to sources;
          it does not mirror copyrighted full text or certify the legal proposition you are researching.
        </p>

        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <div className="font-black">Official-first directory</div>
            <div className="mt-1 text-slate-500">{stats.officialFirst} government / court or statute entries</div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <div className="font-black">Link verification</div>
            <div className="mt-1 text-slate-500">{stats.linkChecked}/{stats.total} directory links checked on 01 Oct 2026</div>
          </div>
        </div>

        <label className="mt-4 block">
          <span className="sr-only">Search primary sources</span>
          <span className="relative block">
            <Search className="absolute left-3 top-3 size-4 text-slate-400" aria-hidden="true" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search statutes, courts, eCourts, authorities, Acts…"
              className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent pl-9 pr-3 text-sm"
            />
          </span>
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTier('all')}
            aria-pressed={tier === 'all'}
            className={`min-h-11 rounded-xl px-3 py-2 text-xs font-bold border ${tier === 'all' ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200 dark:border-slate-700'}`}
          >
            All tiers
          </button>
          {([1, 2, 3, 4, 5] as SourceTier[]).map((t) => (
            <button
              key={t}
              type="button"
              title={SOURCE_TIER_EXPLAIN[t]}
              aria-pressed={tier === t}
              onClick={() => setTier(t)}
              className={`min-h-11 rounded-xl px-3 py-2 text-xs font-bold border ${tier === t ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200 dark:border-slate-700'}`}
            >
              Tier {t}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory('all')}
            aria-pressed={category === 'all'}
            className={`min-h-11 rounded-xl px-3 py-2 text-xs font-bold border ${category === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'border-slate-200 dark:border-slate-700'}`}
          >
            All types
          </button>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`min-h-11 rounded-xl px-3 py-2 text-xs font-bold border capitalize ${category === item ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'border-slate-200 dark:border-slate-700'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-xs text-blue-950">
        <div className="font-black">Verification boundary</div>
        <p className="mt-1">
          “Link checked” means the directory destination was checked. It does not mean that every Act, judgment,
          citation, amendment, or legal proposition on the linked service has been independently verified.
        </p>
      </section>

      <div className="space-y-3">
        {rows.map((source) => (
          <article
            key={source.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-black text-base text-slate-900 dark:text-white">{source.title}</h2>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    Tier {source.tier}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-slate-500">{source.category}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">{source.org} · {source.authorityType}</div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">{source.description}</p>

                <dl className="mt-3 grid sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <dt className="font-extrabold text-slate-500">Date</dt>
                    <dd className="mt-0.5">{REVIEW_DATE.format(new Date(source.date + 'T00:00:00+05:30'))}</dd>
                  </div>
                  <div>
                    <dt className="font-extrabold text-slate-500">Relevant Act / Section</dt>
                    <dd className="mt-0.5">{source.relevantActSection}</dd>
                  </div>
                  <div>
                    <dt className="font-extrabold text-slate-500">Source</dt>
                    <dd className="mt-0.5">{source.tierLabel}</dd>
                  </div>
                  <div>
                    <dt className="font-extrabold text-slate-500">Verification status</dt>
                    <dd className="mt-0.5 inline-flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" aria-hidden="true" />
                      {source.verificationStatus === 'link-checked' ? 'Link checked' : 'Review needed'}
                    </dd>
                  </div>
                </dl>

                {source.notes && (
                  <p className="mt-3 text-[11px] text-slate-500">
                    <span className="font-bold">Note:</span> {source.notes}
                  </p>
                )}
              </div>

              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${source.title} source`}
                className="inline-flex min-h-11 items-center gap-1.5 shrink-0 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold"
              >
                Open source <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}

        {rows.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
            No source matches those filters. Try a broader term or clear the tier/type filters.
          </div>
        )}
      </div>

      <p className="text-[11px] text-slate-500">
        Source directory reviewed {REVIEW_DATE.format(new Date('2026-10-01T00:00:00+05:30'))}. External links open in a new tab.
      </p>
    </div>
  )
}
