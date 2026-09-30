import { useMemo, useState } from 'react'
import { Building2, ExternalLink } from 'lucide-react'
import { COURT_PROFILES, STATE_PROFILES, type CourtLevel } from '../../data/courtProfiles'

export function CourtForumDirectory() {
  const [q, setQ] = useState('')
  const [level, setLevel] = useState<CourtLevel | 'all'>('all')

  const courts = useMemo(() => {
    return COURT_PROFILES.filter((c) => {
      if (level !== 'all' && c.level !== level) return false
      if (!q.trim()) return true
      const s = q.toLowerCase()
      return (
        c.name.toLowerCase().includes(s) ||
        c.state.toLowerCase().includes(s) ||
        c.proceduralNotes.toLowerCase().includes(s)
      )
    })
  }, [q, level])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Building2 className="size-4" /> Court &amp; Forum Directory
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Verified seed profiles</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Small educational set of court and state profiles with official URLs. Not a complete national directory —
          always verify local rules.
        </p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search court or state…"
          className="mt-4 w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {(['all', 'supreme', 'high', 'district', 'tribunal', 'magistrate', 'other'] as const).map((lv) => (
            <button
              key={lv}
              type="button"
              onClick={() => setLevel(lv)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold border ${
                level === lv ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200'
              }`}
            >
              {lv}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="text-xs font-extrabold uppercase text-slate-500">States (seed)</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {STATE_PROFILES.map((s) => (
            <article key={s.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900">
              <div className="font-bold text-sm">
                {s.name} ({s.code})
              </div>
              <p className="text-xs text-slate-600 mt-1">{s.notes}</p>
              {s.officialPortal && (
                <a href={s.officialPortal} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#8B1E3F] mt-2">
                  Official portal <ExternalLink className="size-3" />
                </a>
              )}
              <div className="text-[10px] text-slate-400 mt-1">Verified: {s.lastVerified}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="text-xs font-extrabold uppercase text-slate-500">Courts / forums</div>
        {courts.map((c) => (
          <article key={c.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <div className="font-bold text-sm">{c.name}</div>
                <div className="text-xs text-slate-500">
                  {c.state} · {c.level}
                </div>
              </div>
              <a
                href={c.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#8B1E3F]"
              >
                Open <ExternalLink className="size-3" />
              </a>
            </div>
            <p className="text-xs mt-2 text-slate-700 dark:text-slate-300">{c.proceduralNotes}</p>
            <div className="text-[10px] text-slate-400 mt-1">
              Filing: {c.filingMethod} · Source: {c.source} · {c.lastVerified}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
