import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { TOOLS } from '../../data/tools'
import { PRIMARY_SOURCES } from '../../data/primarySources'
import { TRANSITION_HIGHLIGHTS } from '../../data/transitionHighlights'
import { FILING_CHECKLISTS } from '../../data/filingChecklists'

type GroupKey = 'TOOLS' | 'SOURCES' | 'TRANSITION' | 'CHECKLISTS'

interface Hit {
  group: GroupKey
  title: string
  subtitle: string
  href?: string
}

export function GlobalSearchPanel() {
  const [q, setQ] = useState('')

  const hits = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (s.length < 2) return [] as Hit[]
    const out: Hit[] = []

    for (const t of TOOLS) {
      if (
        t.name.toLowerCase().includes(s) ||
        t.description.toLowerCase().includes(s) ||
        t.keywords.some((k) => k.toLowerCase().includes(s))
      ) {
        out.push({
          group: 'TOOLS',
          title: t.name,
          subtitle: t.description,
          href: t.slug === 'case-law' ? '/case-law' : t.slug === 'knowledge' ? '/knowledge' : `/tool/${t.slug}`,
        })
      }
    }

    for (const p of PRIMARY_SOURCES) {
      if (
        p.title.toLowerCase().includes(s) ||
        p.org.toLowerCase().includes(s) ||
        p.description.toLowerCase().includes(s)
      ) {
        out.push({
          group: 'SOURCES',
          title: p.title,
          subtitle: `${p.tierLabel} · ${p.org}`,
          href: p.url,
        })
      }
    }

    for (const h of TRANSITION_HIGHLIGHTS) {
      if (
        h.oldRef.toLowerCase().includes(s) ||
        h.newRef.toLowerCase().includes(s) ||
        h.relation.toLowerCase().includes(s)
      ) {
        out.push({
          group: 'TRANSITION',
          title: `${h.oldRef} → ${h.newRef}`,
          subtitle: h.relation,
          href: '/tool/transition-centre',
        })
      }
    }

    for (const c of FILING_CHECKLISTS) {
      if (c.title.toLowerCase().includes(s) || c.forum.toLowerCase().includes(s)) {
        out.push({
          group: 'CHECKLISTS',
          title: c.title,
          subtitle: c.forum,
          href: '/tool/filing-checklists',
        })
      }
    }

    return out.slice(0, 40)
  }, [q])

  const grouped = useMemo(() => {
    const map = new Map<GroupKey, Hit[]>()
    for (const h of hits) {
      const arr = map.get(h.group) || []
      arr.push(h)
      map.set(h.group, arr)
    }
    return map
  }, [hits])

  const order: GroupKey[] = ['TOOLS', 'SOURCES', 'TRANSITION', 'CHECKLISTS']

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Search className="size-4" /> Global Search
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">One entry point</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Search tools, primary sources, transition highlights and filing checklists. Subject/section/case corpus search
          remains available from the home and subjects browsers.
        </p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type at least 2 characters…"
          className="mt-4 w-full h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-4 text-sm"
          autoFocus
        />
      </section>

      {q.trim().length > 0 && q.trim().length < 2 && (
        <div className="text-sm text-slate-500 text-center">Keep typing…</div>
      )}

      {q.trim().length >= 2 && hits.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          No matches. Try another keyword, or open Subjects / Case Law for curriculum and judgments.
        </div>
      )}

      {order.map((g) => {
        const list = grouped.get(g)
        if (!list?.length) return null
        return (
          <section key={g} className="space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{g}</div>
            {list.map((h, i) => (
              <a
                key={`${g}-${i}`}
                href={h.href}
                target={h.href?.startsWith('http') ? '_blank' : undefined}
                rel={h.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:border-[#8B1E3F]/40 transition"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white">{h.title}</div>
                <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{h.subtitle}</div>
              </a>
            ))}
          </section>
        )
      })}
    </div>
  )
}
