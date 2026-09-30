import { useMemo, useState } from 'react'
import { Briefcase, Plus, Trash2 } from 'lucide-react'

type Tab = 'meta' | 'chrono' | 'issues' | 'evidence' | 'arguments'

interface ChronoRow {
  id: string
  date: string
  event: string
  source: string
}

interface IssueRow {
  id: string
  issue: string
  test: string
  burden: string
  defence: string
}

interface EvidenceRow {
  id: string
  issue: string
  element: string
  evidence: string
  witness: string
  status: string
}

interface ArgRow {
  id: string
  issue: string
  proposition: string
  authority: string
  counter: string
}

const rid = () => Math.random().toString(36).slice(2, 9)

export function CasePrepWorkbench() {
  const [tab, setTab] = useState<Tab>('meta')
  const [matter, setMatter] = useState('')
  const [court, setCourt] = useState('')
  const [caseNo, setCaseNo] = useState('')
  const [stage, setStage] = useState('')
  const [chrono, setChrono] = useState<ChronoRow[]>([{ id: rid(), date: '', event: '', source: '' }])
  const [issues, setIssues] = useState<IssueRow[]>([{ id: rid(), issue: '', test: '', burden: '', defence: '' }])
  const [evidence, setEvidence] = useState<EvidenceRow[]>([{ id: rid(), issue: '', element: '', evidence: '', witness: '', status: 'to-collect' }])
  const [args, setArgs] = useState<ArgRow[]>([{ id: rid(), issue: '', proposition: '', authority: '', counter: '' }])

  const sortedChrono = useMemo(
    () => [...chrono].sort((a, b) => (a.date || '9999').localeCompare(b.date || '9999')),
    [chrono],
  )

  const tabs: { id: Tab; label: string }[] = [
    { id: 'meta', label: 'Case' },
    { id: 'chrono', label: 'Chronology' },
    { id: 'issues', label: 'Issues' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'arguments', label: 'Arguments' },
  ]

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Briefcase className="size-4" /> Case Preparation Workbench
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Browser-only case workspace</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Chronology, issues, evidence matrix, and argument matrix. Data stays local to this session (export by copy). Do not store privileged client secrets in shared browsers.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`h-9 px-3 rounded-xl text-xs font-bold border ${
                tab === t.id ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {tab === 'meta' && (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs font-bold sm:col-span-2">Matter title<input value={matter} onChange={(e) => setMatter(e.target.value)} className="mt-1 w-full h-10 rounded-xl border px-3 text-sm" /></label>
          <label className="text-xs font-bold">Court<input value={court} onChange={(e) => setCourt(e.target.value)} className="mt-1 w-full h-10 rounded-xl border px-3 text-sm" /></label>
          <label className="text-xs font-bold">Case number<input value={caseNo} onChange={(e) => setCaseNo(e.target.value)} className="mt-1 w-full h-10 rounded-xl border px-3 text-sm" /></label>
          <label className="text-xs font-bold sm:col-span-2">Stage<input value={stage} onChange={(e) => setStage(e.target.value)} className="mt-1 w-full h-10 rounded-xl border px-3 text-sm" placeholder="Investigation / Trial / Appeal…" /></label>
        </div>
      )}

      {tab === 'chrono' && (
        <div className="space-y-2">
          {sortedChrono.map((row) => (
            <div key={row.id} className="grid gap-2 sm:grid-cols-4">
              <input type="date" value={row.date} onChange={(e) => setChrono((p) => p.map((x) => (x.id === row.id ? { ...x, date: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Event" value={row.event} onChange={(e) => setChrono((p) => p.map((x) => (x.id === row.id ? { ...x, event: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs sm:col-span-2" />
              <div className="flex gap-1">
                <input placeholder="Source" value={row.source} onChange={(e) => setChrono((p) => p.map((x) => (x.id === row.id ? { ...x, source: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs flex-1" />
                <button type="button" onClick={() => setChrono((p) => p.filter((x) => x.id !== row.id))} className="text-red-600"><Trash2 className="size-4" /></button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => setChrono((p) => [...p, { id: rid(), date: '', event: '', source: '' }])} className="inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-3.5" /> Add event</button>
        </div>
      )}

      {tab === 'issues' && (
        <div className="space-y-2">
          {issues.map((row) => (
            <div key={row.id} className="rounded-xl border p-3 grid gap-2 sm:grid-cols-2">
              <input placeholder="Issue (legal question)" value={row.issue} onChange={(e) => setIssues((p) => p.map((x) => (x.id === row.id ? { ...x, issue: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs sm:col-span-2" />
              <input placeholder="Legal test / elements" value={row.test} onChange={(e) => setIssues((p) => p.map((x) => (x.id === row.id ? { ...x, test: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Burden" value={row.burden} onChange={(e) => setIssues((p) => p.map((x) => (x.id === row.id ? { ...x, burden: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Defence answer" value={row.defence} onChange={(e) => setIssues((p) => p.map((x) => (x.id === row.id ? { ...x, defence: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs sm:col-span-2" />
            </div>
          ))}
          <button type="button" onClick={() => setIssues((p) => [...p, { id: rid(), issue: '', test: '', burden: '', defence: '' }])} className="text-xs font-bold inline-flex items-center gap-1"><Plus className="size-3.5" /> Add issue</button>
        </div>
      )}

      {tab === 'evidence' && (
        <div className="space-y-2">
          {evidence.map((row) => (
            <div key={row.id} className="grid gap-2 sm:grid-cols-5">
              <input placeholder="Issue" value={row.issue} onChange={(e) => setEvidence((p) => p.map((x) => (x.id === row.id ? { ...x, issue: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Element" value={row.element} onChange={(e) => setEvidence((p) => p.map((x) => (x.id === row.id ? { ...x, element: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Evidence" value={row.evidence} onChange={(e) => setEvidence((p) => p.map((x) => (x.id === row.id ? { ...x, evidence: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Witness" value={row.witness} onChange={(e) => setEvidence((p) => p.map((x) => (x.id === row.id ? { ...x, witness: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Status" value={row.status} onChange={(e) => setEvidence((p) => p.map((x) => (x.id === row.id ? { ...x, status: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
            </div>
          ))}
          <button type="button" onClick={() => setEvidence((p) => [...p, { id: rid(), issue: '', element: '', evidence: '', witness: '', status: 'to-collect' }])} className="text-xs font-bold inline-flex items-center gap-1"><Plus className="size-3.5" /> Add row</button>
        </div>
      )}

      {tab === 'arguments' && (
        <div className="space-y-2">
          {args.map((row) => (
            <div key={row.id} className="rounded-xl border p-3 grid gap-2 sm:grid-cols-2">
              <input placeholder="Issue" value={row.issue} onChange={(e) => setArgs((p) => p.map((x) => (x.id === row.id ? { ...x, issue: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Authority" value={row.authority} onChange={(e) => setArgs((p) => p.map((x) => (x.id === row.id ? { ...x, authority: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs" />
              <input placeholder="Proposition" value={row.proposition} onChange={(e) => setArgs((p) => p.map((x) => (x.id === row.id ? { ...x, proposition: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs sm:col-span-2" />
              <input placeholder="Counter-argument" value={row.counter} onChange={(e) => setArgs((p) => p.map((x) => (x.id === row.id ? { ...x, counter: e.target.value } : x)))} className="h-9 rounded-lg border px-2 text-xs sm:col-span-2" />
            </div>
          ))}
          <button type="button" onClick={() => setArgs((p) => [...p, { id: rid(), issue: '', proposition: '', authority: '', counter: '' }])} className="text-xs font-bold inline-flex items-center gap-1"><Plus className="size-3.5" /> Add argument</button>
        </div>
      )}
    </div>
  )
}
