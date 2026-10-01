import { useMemo, useState } from 'react'
import { Briefcase, Clipboard, Plus, RotateCcw, Trash2 } from 'lucide-react'
import { analyzeChronology, normalizeList, type ChronologyEntry } from '../../lib/casePrep'

type Tab = 'meta' | 'chrono' | 'issues' | 'law' | 'evidence' | 'witnesses' | 'arguments' | 'docs'

interface IssueRow { id: string; issue: string; test: string; elements: string; burden: string; defence: string; authorities: string; evidence: string; finding: string }
interface EvidenceRow { id: string; issue: string; element: string; evidence: string; witness: string; exhibit: string; status: string }
interface WitnessRow { id: string; witness: string; role: string; facts: string; documents: string; examination: string; cross: string }
interface ArgRow { id: string; issue: string; proposition: string; authority: string; facts: string; evidence: string; counter: string; reply: string }
interface LawRow { id: string; authority: string; proposition: string; source: string }

const rid = () => Math.random().toString(36).slice(2, 9)
const emptyChronology = (): ChronologyEntry => ({ id: rid(), date: '', event: '', source: '', disputed: false })
const emptyIssue = (): IssueRow => ({ id: rid(), issue: '', test: '', elements: '', burden: '', defence: '', authorities: '', evidence: '', finding: '' })
const emptyEvidence = (): EvidenceRow => ({ id: rid(), issue: '', element: '', evidence: '', witness: '', exhibit: '', status: 'to-collect' })
const emptyWitness = (): WitnessRow => ({ id: rid(), witness: '', role: '', facts: '', documents: '', examination: '', cross: '' })
const emptyArg = (): ArgRow => ({ id: rid(), issue: '', proposition: '', authority: '', facts: '', evidence: '', counter: '', reply: '' })
const emptyLaw = (): LawRow => ({ id: rid(), authority: '', proposition: '', source: '' })

export function CasePrepWorkbench() {
  const [tab, setTab] = useState<Tab>('meta')
  const [matter, setMatter] = useState('')
  const [parties, setParties] = useState('')
  const [court, setCourt] = useState('')
  const [caseNo, setCaseNo] = useState('')
  const [stage, setStage] = useState('')
  const [dates, setDates] = useState('')
  const [facts, setFacts] = useState('')
  const [law, setLaw] = useState('')
  const [documents, setDocuments] = useState('')
  const [hearingNotes, setHearingNotes] = useState('')
  const [gapThreshold, setGapThreshold] = useState(30)
  const [chrono, setChrono] = useState<ChronologyEntry[]>([emptyChronology()])
  const [issues, setIssues] = useState<IssueRow[]>([emptyIssue()])
  const [evidence, setEvidence] = useState<EvidenceRow[]>([emptyEvidence()])
  const [witnesses, setWitnesses] = useState<WitnessRow[]>([emptyWitness()])
  const [args, setArgs] = useState<ArgRow[]>([emptyArg()])
  const [authorities, setAuthorities] = useState<LawRow[]>([emptyLaw()])

  const analysis = useMemo(() => analyzeChronology(chrono, gapThreshold), [chrono, gapThreshold])
  const tabs: { id: Tab; label: string }[] = [
    { id: 'meta', label: 'Case' }, { id: 'chrono', label: 'Chronology' }, { id: 'issues', label: 'Issues' },
    { id: 'law', label: 'Law & Authorities' }, { id: 'evidence', label: 'Evidence' }, { id: 'witnesses', label: 'Witnesses' },
    { id: 'arguments', label: 'Arguments' }, { id: 'docs', label: 'Documents & Hearing' },
  ]

  const reset = () => {
    setMatter(''); setParties(''); setCourt(''); setCaseNo(''); setStage(''); setDates('')
    setFacts(''); setLaw(''); setDocuments(''); setHearingNotes('')
    setChrono([emptyChronology()]); setIssues([emptyIssue()]); setEvidence([emptyEvidence()])
    setWitnesses([emptyWitness()]); setArgs([emptyArg()]); setAuthorities([emptyLaw()]); setTab('meta')
  }

  const copySummary = async () => {
    const summary = [
      matter && 'Matter: ' + matter, parties && 'Parties: ' + parties, court && 'Court: ' + court,
      caseNo && 'Case number: ' + caseNo, stage && 'Stage: ' + stage, facts && 'Facts:\n' + facts, law && 'Law:\n' + law,
      'Chronology:\n' + analysis.ordered.map((x) => x.date + ' — ' + x.event + ' [' + x.source + ']' + (x.disputed ? ' [DISPUTED]' : '')).join('\n'),
      'Issues:\n' + issues.filter((x) => x.issue).map((x) => '- ' + x.issue + ' | Test: ' + x.test + ' | Finding: ' + x.finding).join('\n'),
      'Evidence:\n' + evidence.filter((x) => x.evidence).map((x) => '- ' + x.issue + ' | ' + x.element + ' | ' + x.evidence + ' | ' + x.witness + ' | ' + x.exhibit + ' | ' + x.status).join('\n'),
      'Witnesses:\n' + witnesses.filter((x) => x.witness).map((x) => '- ' + x.witness + ' | ' + x.role).join('\n'),
      'Arguments:\n' + args.filter((x) => x.issue || x.proposition).map((x) => '- ' + x.issue + ': ' + x.proposition + ' | Authority: ' + x.authority + ' | Counter: ' + x.counter + ' | Reply: ' + x.reply).join('\n'),
      documents && 'Documents:\n' + documents, hearingNotes && 'Hearing notes:\n' + hearingNotes,
    ].filter(Boolean).join('\n\n')
    try { await navigator.clipboard.writeText(summary) } catch { /* clipboard may be unavailable */ }
  }

  const updateChrono = (id: string, patch: Partial<ChronologyEntry>) => setChrono((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x))
  const updateIssue = (id: string, patch: Partial<IssueRow>) => setIssues((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x))
  const updateEvidence = (id: string, patch: Partial<EvidenceRow>) => setEvidence((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x))
  const updateWitness = (id: string, patch: Partial<WitnessRow>) => setWitnesses((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x))
  const updateArg = (id: string, patch: Partial<ArgRow>) => setArgs((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x))
  const updateLaw = (id: string, patch: Partial<LawRow>) => setAuthorities((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x))

  const field = (label: string, value: string, onChange: (value: string) => void, placeholder = '') => (
    <label className="text-xs font-bold">{label}
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="mt-1 w-full min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 text-sm" />
    </label>
  )

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><Briefcase className="size-4" /> Case Preparation Workbench</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Browser-only case workspace</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">Organize a matter for preparation: case structure, chronology, issues, law, authorities, evidence, witnesses, arguments, documents, and hearing notes. Data stays in this browser session and is not uploaded by this tool.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((t) => <button key={t.id} type="button" onClick={() => setTab(t.id)} className={'min-h-11 px-3 rounded-xl text-xs font-bold border ' + (tab === t.id ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200 dark:border-slate-700')}>{t.label}</button>)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={copySummary} className="min-h-11 inline-flex items-center gap-2 rounded-xl border px-3 text-xs font-bold"><Clipboard className="size-4" /> Copy workspace summary</button>
          <button type="button" onClick={reset} className="min-h-11 inline-flex items-center gap-2 rounded-xl border px-3 text-xs font-bold"><RotateCcw className="size-4" /> Reset</button>
        </div>
        <p className="mt-3 text-xs text-slate-500">Planning/organization utility only. Verify law, evidence, procedural requirements, filing rules, and hearing strategy against authoritative sources and professional advice.</p>
      </section>

      {tab === 'meta' && <div className="grid gap-4 sm:grid-cols-2">
        {field('Matter title', matter, setMatter)}
        {field('Parties', parties, setParties, 'Plaintiff / prosecution; defendant / respondent')}
        {field('Court', court, setCourt)} {field('Case number', caseNo, setCaseNo)}
        {field('Stage', stage, setStage, 'Investigation / Trial / Appeal / Revision…')}
        {field('Key dates', dates, setDates, 'Institution, incident, next hearing, limitation, etc.')}
        <label className="text-xs font-bold sm:col-span-2">Material facts<textarea value={facts} onChange={(e) => setFacts(e.target.value)} className="mt-1 w-full min-h-32 rounded-xl border px-3 py-2 text-sm" /></label>
        <label className="text-xs font-bold sm:col-span-2">Legal framework / law<textarea value={law} onChange={(e) => setLaw(e.target.value)} className="mt-1 w-full min-h-28 rounded-xl border px-3 py-2 text-sm" /></label>
      </div>}

      {tab === 'chrono' && <div className="space-y-3">
        <div className="rounded-2xl border p-4 text-xs"><div className="flex flex-wrap items-center gap-3">
          <label className="font-bold">Gap threshold (days)<input type="number" min="1" value={gapThreshold} onChange={(e) => setGapThreshold(Math.max(1, Number(e.target.value) || 1))} className="ml-2 w-20 min-h-11 rounded-lg border px-2" /></label>
          <span><strong>{analysis.gaps.length}</strong> material gap{analysis.gaps.length === 1 ? '' : 's'}</span>
          <span><strong>{analysis.disputed.length}</strong> disputed date{analysis.disputed.length === 1 ? '' : 's'}</span>
          <span><strong>{analysis.incomplete.length}</strong> incomplete source record{analysis.incomplete.length === 1 ? '' : 's'}</span>
        </div></div>
        {chrono.map((row) => <div key={row.id} className="rounded-2xl border p-3 grid gap-2 sm:grid-cols-[9rem_1fr_1fr_auto_auto]">
          <input type="date" aria-label="Event date" value={row.date} onChange={(e) => updateChrono(row.id, { date: e.target.value })} className="min-h-11 rounded-lg border px-2 text-xs" />
          <input aria-label="Event" placeholder="Event" value={row.event} onChange={(e) => updateChrono(row.id, { event: e.target.value })} className="min-h-11 rounded-lg border px-2 text-xs" />
          <input aria-label="Date source" placeholder="Date source / reference" value={row.source} onChange={(e) => updateChrono(row.id, { source: e.target.value })} className="min-h-11 rounded-lg border px-2 text-xs" />
          <label className="inline-flex items-center gap-2 min-h-11 text-xs font-bold"><input type="checkbox" checked={row.disputed} onChange={(e) => updateChrono(row.id, { disputed: e.target.checked })} /> Disputed</label>
          <button type="button" aria-label="Remove chronology entry" onClick={() => setChrono((p) => p.filter((x) => x.id !== row.id))} className="min-h-11 px-2 text-red-600"><Trash2 className="size-4" /></button>
        </div>)}
        <button type="button" onClick={() => setChrono((p) => [...p, emptyChronology()])} className="min-h-11 inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-4" /> Add event</button>
        {analysis.gaps.length > 0 && <div className="rounded-2xl border border-amber-300 bg-amber-50 dark:bg-amber-950/20 p-4 text-xs"><strong>Potential chronology gaps:</strong> {analysis.gaps.map((g) => g.from + ' → ' + g.to + ' (' + g.days + ' days)').join('; ')}. These are organizational signals, not findings that an event is missing.</div>}
      </div>}

      {tab === 'issues' && <div className="space-y-3">
        {issues.map((row) => <div key={row.id} className="rounded-2xl border p-4 grid gap-2 sm:grid-cols-2">
          {field('Issue', row.issue, (v) => updateIssue(row.id, { issue: v }), 'Legal question')}
          {field('Legal test', row.test, (v) => updateIssue(row.id, { test: v }))}
          {field('Elements', row.elements, (v) => updateIssue(row.id, { elements: v }))}
          {field('Plaintiff / prosecution burden', row.burden, (v) => updateIssue(row.id, { burden: v }))}
          {field('Defence / respondent answer', row.defence, (v) => updateIssue(row.id, { defence: v }))}
          {field('Authorities', row.authorities, (v) => updateIssue(row.id, { authorities: v }))}
          {field('Evidence required', row.evidence, (v) => updateIssue(row.id, { evidence: v }))}
          {field('Finding / current position', row.finding, (v) => updateIssue(row.id, { finding: v }))}
          <button type="button" onClick={() => setIssues((p) => p.filter((x) => x.id !== row.id))} className="min-h-11 text-xs font-bold text-red-600 sm:col-span-2">Remove issue</button>
        </div>)}
        <button type="button" onClick={() => setIssues((p) => [...p, emptyIssue()])} className="min-h-11 inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-4" /> Add issue</button>
      </div>}

      {tab === 'law' && <div className="space-y-4">
        <label className="text-xs font-bold block">Authority / statute notes<textarea value={law} onChange={(e) => setLaw(e.target.value)} className="mt-1 w-full min-h-28 rounded-xl border px-3 py-2 text-sm" /></label>
        <div className="space-y-2">{authorities.map((row) => <div key={row.id} className="rounded-2xl border p-3 grid gap-2 sm:grid-cols-3">
          {field('Authority', row.authority, (v) => updateLaw(row.id, { authority: v }), 'Case / statute / rule')}
          {field('Proposition', row.proposition, (v) => updateLaw(row.id, { proposition: v }))}
          {field('Source / citation', row.source, (v) => updateLaw(row.id, { source: v }))}
          <button type="button" onClick={() => setAuthorities((p) => p.filter((x) => x.id !== row.id))} className="min-h-11 text-xs font-bold text-red-600 sm:col-span-3">Remove authority</button>
        </div>)}</div>
        <button type="button" onClick={() => setAuthorities((p) => [...p, emptyLaw()])} className="min-h-11 inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-4" /> Add authority</button>
      </div>}

      {tab === 'evidence' && <div className="space-y-3">
        {evidence.map((row) => <div key={row.id} className="rounded-2xl border p-3 grid gap-2 sm:grid-cols-3">
          {field('Issue', row.issue, (v) => updateEvidence(row.id, { issue: v }))}
          {field('Element', row.element, (v) => updateEvidence(row.id, { element: v }))}
          {field('Evidence', row.evidence, (v) => updateEvidence(row.id, { evidence: v }))}
          {field('Witness', row.witness, (v) => updateEvidence(row.id, { witness: v }))}
          {field('Exhibit', row.exhibit, (v) => updateEvidence(row.id, { exhibit: v }))}
          {field('Status', row.status, (v) => updateEvidence(row.id, { status: v }), 'to-collect / available / challenged / admitted')}
          <button type="button" onClick={() => setEvidence((p) => p.filter((x) => x.id !== row.id))} className="min-h-11 text-xs font-bold text-red-600 sm:col-span-3">Remove evidence row</button>
        </div>)}
        <button type="button" onClick={() => setEvidence((p) => [...p, emptyEvidence()])} className="min-h-11 inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-4" /> Add evidence row</button>
      </div>}

      {tab === 'witnesses' && <div className="space-y-3">
        {witnesses.map((row) => <div key={row.id} className="rounded-2xl border p-4 grid gap-2 sm:grid-cols-2">
          {field('Witness', row.witness, (v) => updateWitness(row.id, { witness: v }))}
          {field('Role', row.role, (v) => updateWitness(row.id, { role: v }))}
          {field('Facts proved', row.facts, (v) => updateWitness(row.id, { facts: v }))}
          {field('Documents', row.documents, (v) => updateWitness(row.id, { documents: v }))}
          {field('Examination plan', row.examination, (v) => updateWitness(row.id, { examination: v }))}
          {field('Cross points', row.cross, (v) => updateWitness(row.id, { cross: v }))}
          <button type="button" onClick={() => setWitnesses((p) => p.filter((x) => x.id !== row.id))} className="min-h-11 text-xs font-bold text-red-600 sm:col-span-2">Remove witness</button>
        </div>)}
        <button type="button" onClick={() => setWitnesses((p) => [...p, emptyWitness()])} className="min-h-11 inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-4" /> Add witness</button>
      </div>}

      {tab === 'arguments' && <div className="space-y-3">
        {args.map((row) => <div key={row.id} className="rounded-2xl border p-4 grid gap-2 sm:grid-cols-2">
          {field('Issue', row.issue, (v) => updateArg(row.id, { issue: v }))}
          {field('Proposition', row.proposition, (v) => updateArg(row.id, { proposition: v }))}
          {field('Authority', row.authority, (v) => updateArg(row.id, { authority: v }))}
          {field('Facts', row.facts, (v) => updateArg(row.id, { facts: v }))}
          {field('Evidence', row.evidence, (v) => updateArg(row.id, { evidence: v }))}
          {field('Counterargument', row.counter, (v) => updateArg(row.id, { counter: v }))}
          {field('Reply', row.reply, (v) => updateArg(row.id, { reply: v }))}
          <button type="button" onClick={() => setArgs((p) => p.filter((x) => x.id !== row.id))} className="min-h-11 text-xs font-bold text-red-600 sm:col-span-2">Remove argument</button>
        </div>)}
        <button type="button" onClick={() => setArgs((p) => [...p, emptyArg()])} className="min-h-11 inline-flex items-center gap-1 text-xs font-bold"><Plus className="size-4" /> Add argument</button>
        <p className="text-xs text-slate-500">Structure arguments for preparation; this tool does not determine which proposition should prevail.</p>
      </div>}

      {tab === 'docs' && <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold">Documents<textarea value={documents} onChange={(e) => setDocuments(e.target.value)} placeholder={normalizeList('Pleading, affidavit, exhibit').join(', ')} className="mt-1 w-full min-h-40 rounded-xl border px-3 py-2 text-sm" /></label>
        <label className="text-xs font-bold">Hearing notes<textarea value={hearingNotes} onChange={(e) => setHearingNotes(e.target.value)} className="mt-1 w-full min-h-40 rounded-xl border px-3 py-2 text-sm" /></label>
      </div>}
    </div>
  )
}
