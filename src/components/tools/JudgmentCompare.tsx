import { useMemo, useState } from 'react'
import { GitCompare } from 'lucide-react'

function tokens(s: string) {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 3),
  )
}

function overlap(a: Set<string>, b: Set<string>) {
  let n = 0
  for (const x of a) if (b.has(x)) n++
  return n
}

export function JudgmentCompare() {
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [leftLabel, setLeftLabel] = useState('Judgment / text A')
  const [rightLabel, setRightLabel] = useState('Judgment / text B')

  const report = useMemo(() => {
    if (!left.trim() && !right.trim()) return null
    const A = tokens(left)
    const B = tokens(right)
    const shared = [...A].filter((w) => B.has(w)).slice(0, 40)
    const onlyA = [...A].filter((w) => !B.has(w)).slice(0, 25)
    const onlyB = [...B].filter((w) => !A.has(w)).slice(0, 25)
    const o = overlap(A, B)
    const denom = Math.max(A.size + B.size - o, 1)
    const score = Math.round((100 * o) / denom)
    return { shared, onlyA, onlyB, score, sizeA: A.size, sizeB: B.size }
  }, [left, right])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <GitCompare className="size-4" /> Judgment Compare
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Compare two legal texts</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Lexical overlap report for two judgments, drafts, or submissions. Does not infer "overruled" from differences.
        </p>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <input value={leftLabel} onChange={(e) => setLeftLabel(e.target.value)} className="mb-2 w-full h-9 rounded-lg border border-slate-200 px-2 text-xs font-bold" />
          <textarea value={left} onChange={(e) => setLeft(e.target.value)} rows={12} className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 p-3 text-sm font-mono" placeholder="Paste text A…" />
        </div>
        <div>
          <input value={rightLabel} onChange={(e) => setRightLabel(e.target.value)} className="mb-2 w-full h-9 rounded-lg border border-slate-200 px-2 text-xs font-bold" />
          <textarea value={right} onChange={(e) => setRight(e.target.value)} rows={12} className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 p-3 text-sm font-mono" placeholder="Paste text B…" />
        </div>
      </div>

      {report && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
          <div className="text-sm font-black">Overlap score (lexical): {report.score}% · tokens {report.sizeA} vs {report.sizeB}</div>
          <div>
            <h3 className="text-xs font-extrabold uppercase text-slate-500">Shared terms (sample)</h3>
            <p className="mt-1 text-xs text-slate-700">{report.shared.join(', ') || '—'}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-xs font-extrabold uppercase text-red-700">More distinctive in {leftLabel}</h3>
              <p className="mt-1 text-xs">{report.onlyA.join(', ') || '—'}</p>
            </div>
            <div>
              <h3 className="text-xs font-extrabold uppercase text-emerald-700">More distinctive in {rightLabel}</h3>
              <p className="mt-1 text-xs">{report.onlyB.join(', ') || '—'}</p>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">
            Treatment labels (followed / distinguished / etc.) require human legal judgment — this tool only surfaces textual differences.
          </p>
        </section>
      )}
    </div>
  )
}
