import { useMemo, useState } from 'react'
import { FlaskConical, Plus, Trash2 } from 'lucide-react'

interface AuthorityRow {
  id: string
  caseName: string
  court: string
  citation: string
  statute: string
  issue: string
  holding: string
  verification: 'verified' | 'needs-review' | 'user-provided'
}

const emptyRow = (): AuthorityRow => ({
  id: Math.random().toString(36).slice(2, 9),
  caseName: '',
  court: '',
  citation: '',
  statute: '',
  issue: '',
  holding: '',
  verification: 'user-provided',
})

export function ResearchWorkbench() {
  const [question, setQuestion] = useState('')
  const [jurisdiction, setJurisdiction] = useState('India — All courts')
  const [subject, setSubject] = useState('')
  const [primaryIssue, setPrimaryIssue] = useState('')
  const [secondary, setSecondary] = useState('')
  const [statutoryQ, setStatutoryQ] = useState('')
  const [rows, setRows] = useState<AuthorityRow[]>([emptyRow()])
  const [analysis, setAnalysis] = useState('')
  const [unresolved, setUnresolved] = useState('')

  const note = useMemo(() => {
    const lines = [
      '# Research Note (browser-local)',
      '',
      '## 1. Question Presented',
      question || '—',
      '',
      `Jurisdiction: ${jurisdiction}`,
      subject ? `Subject / Act focus: ${subject}` : '',
      '',
      '## 2. Issues',
      `Primary: ${primaryIssue || '—'}`,
      secondary ? `Secondary: ${secondary}` : '',
      statutoryQ ? `Statutory: ${statutoryQ}` : '',
      '',
      '## 3. Authorities',
      ...rows
        .filter((r) => r.caseName || r.citation)
        .map(
          (r, i) =>
            `${i + 1}. ${r.caseName || 'Unnamed'} | ${r.court} | ${r.citation} | ${r.statute} | Issue: ${r.issue} | Holding: ${r.holding} | Status: ${r.verification}`,
        ),
      '',
      '## 4. Analysis',
      analysis || '—',
      '',
      '## 5. Unresolved questions',
      unresolved || '—',
      '',
      '## 6. Verification checklist',
      '- [ ] Primary statute text checked on India Code / official source',
      '- [ ] Citations opened on court site or reliable reporter',
      '- [ ] Ratio distinguished from obiter',
      '- [ ] Current-law / amendment status confirmed',
      '',
      '_AI-free structured note. Not legal advice._',
    ]
    return lines.filter((l) => l !== '').join('\n')
  }, [question, jurisdiction, subject, primaryIssue, secondary, statutoryQ, rows, analysis, unresolved])

  const updateRow = (id: string, patch: Partial<AuthorityRow>) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <FlaskConical className="size-4" /> Legal Research Workbench
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Question → issues → authorities → note</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Structured research workflow. All fields stay in your browser. Suggestions are manual — nothing is invented as authority.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2 text-xs font-bold">
          Research question
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm" placeholder="e.g. When can anticipatory bail be denied for economic offences under BNSS?" />
        </label>
        <label className="text-xs font-bold">
          Jurisdiction
          <input value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)} className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm" />
        </label>
        <label className="text-xs font-bold">
          Subject / Act
          <input value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm" placeholder="BNSS / Constitution / CPC…" />
        </label>
        <label className="text-xs font-bold">
          Primary issue
          <input value={primaryIssue} onChange={(e) => setPrimaryIssue(e.target.value)} className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm" />
        </label>
        <label className="text-xs font-bold">
          Secondary issues
          <input value={secondary} onChange={(e) => setSecondary(e.target.value)} className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm" />
        </label>
        <label className="sm:col-span-2 text-xs font-bold">
          Statutory questions
          <input value={statutoryQ} onChange={(e) => setStatutoryQ(e.target.value)} className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm" />
        </label>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-sm">Authority matrix</h2>
          <button type="button" onClick={() => setRows((p) => [...p, emptyRow()])} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-bold">
            <Plus className="size-3.5" /> Add row
          </button>
        </div>
        {rows.map((r) => (
          <div key={r.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-3 grid gap-2 sm:grid-cols-2">
            <input placeholder="Case name" value={r.caseName} onChange={(e) => updateRow(r.id, { caseName: e.target.value })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs" />
            <input placeholder="Court" value={r.court} onChange={(e) => updateRow(r.id, { court: e.target.value })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs" />
            <input placeholder="Citation" value={r.citation} onChange={(e) => updateRow(r.id, { citation: e.target.value })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs" />
            <input placeholder="Statute / section" value={r.statute} onChange={(e) => updateRow(r.id, { statute: e.target.value })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs" />
            <input placeholder="Issue addressed" value={r.issue} onChange={(e) => updateRow(r.id, { issue: e.target.value })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs sm:col-span-2" />
            <input placeholder="Holding (your note)" value={r.holding} onChange={(e) => updateRow(r.id, { holding: e.target.value })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs sm:col-span-2" />
            <div className="flex items-center justify-between sm:col-span-2">
              <select value={r.verification} onChange={(e) => updateRow(r.id, { verification: e.target.value as AuthorityRow['verification'] })} className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs">
                <option value="user-provided">user-provided</option>
                <option value="needs-review">needs-review</option>
                <option value="verified">verified</option>
              </select>
              <button type="button" onClick={() => setRows((p) => p.filter((x) => x.id !== r.id))} className="text-xs font-bold text-red-600 inline-flex items-center gap-1">
                <Trash2 className="size-3.5" /> Remove
              </button>
            </div>
          </div>
        ))}
      </section>

      <label className="block text-xs font-bold">
        Analysis
        <textarea value={analysis} onChange={(e) => setAnalysis(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm" />
      </label>
      <label className="block text-xs font-bold">
        Unresolved questions
        <textarea value={unresolved} onChange={(e) => setUnresolved(e.target.value)} rows={2} className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm" />
      </label>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-black text-sm">Research note preview</h2>
          <button
            type="button"
            className="text-xs font-bold rounded-xl border border-slate-200 px-3 py-1.5"
            onClick={() => navigator.clipboard.writeText(note)}
          >
            Copy note
          </button>
        </div>
        <pre className="text-[11px] whitespace-pre-wrap font-mono text-slate-700 dark:text-slate-300 max-h-80 overflow-auto">{note}</pre>
      </section>
    </div>
  )
}
