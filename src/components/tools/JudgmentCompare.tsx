import { useMemo, useState } from 'react'
import { FileUp, GitCompare, ShieldCheck } from 'lucide-react'
import * as mammoth from 'mammoth'
import { categoryLabel, compareJudgments, type AuthorityTreatment, type ComparisonCategory } from '../../lib/judgmentCompare'
import { limitUserText, validateLocalUpload } from '../../lib/sanitize'

const SAMPLE_A = `ISSUES:
Whether Section 10 permits the impugned order.

STATUTORY PROVISIONS:
Section 10 of the Act.
Article 21.

AUTHORITIES CITED:
AIR 1978 SC 597.

FACTS:
The authority passed the order without prior hearing.

EVIDENCE:
The record contained the impugned order.

REASONING:
The Court followed AIR 1978 SC 597 and held that fair procedure was required.

RATIO:
The procedure must be fair.

FINAL ORDER:
The order was set aside.`

const SAMPLE_B = `ISSUES:
Whether Section 10 permits the order on the evidence available.

STATUTORY PROVISIONS:
Section 10 of the Act.
Article 21.

AUTHORITIES CITED:
AIR 1978 SC 597.

FACTS:
The authority gave a limited opportunity to respond before the order.

EVIDENCE:
The record contained the notice and response.

REASONING:
The Court considered AIR 1978 SC 597 but distinguished it on the different procedural record.

RATIO:
The procedure must be assessed against the facts and statutory framework.

FINAL ORDER:
The appeal was dismissed.`

const treatmentLabel: Record<AuthorityTreatment, string> = { followed: 'Followed', 'relied-upon': 'Relied upon', distinguished: 'Distinguished', considered: 'Considered', 'not-addressed': 'Not addressed', unverified: 'Unverified' }

async function readFile(file: File): Promise<string> {
  const validationError = validateLocalUpload(file, ['txt', 'docx'])
  if (validationError) throw new Error(validationError)
  if (file.name.toLowerCase().endsWith('.docx')) return limitUserText((await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() })).value)
  return limitUserText(await file.text())
}

export function JudgmentCompare() {
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [leftLabel, setLeftLabel] = useState('Judgment A')
  const [rightLabel, setRightLabel] = useState('Judgment B')
  const [error, setError] = useState('')

  const report = useMemo(() => compareJudgments(left, right), [left, right])
  const load = async (file: File | undefined, side: 'left' | 'right') => {
    if (!file) return
    try { setError(''); const value = await readFile(file); side === 'left' ? setLeft(value) : setRight(value) }
    catch (error) { setError(error instanceof Error ? error.message : 'The document could not be read locally.') }
  }

  return (
    <div className="space-y-5 w-full overflow-x-hidden">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><GitCompare className="size-4" /> Judgment Compare</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Compare judgments as legal-analysis evidence</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">Compare judgments, old/new law, trial/appellate decisions, or submissions. Common material, structural differences, and explicit authority-treatment wording are shown separately.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"><ShieldCheck className="size-4" /> Browser-local comparison — no document upload</div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {(['left','right'] as const).map((side) => {
          const isLeft = side === 'left'
          const value = isLeft ? left : right
          const label = isLeft ? leftLabel : rightLabel
          return <div key={side} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
            <input value={label} onChange={(e) => isLeft ? setLeftLabel(e.target.value) : setRightLabel(e.target.value)} className="mb-2 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-xs font-bold" aria-label={`${side} document label`} />
            <textarea value={value} onChange={(e) => isLeft ? setLeft(e.target.value) : setRight(e.target.value)} rows={14} className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent p-3 text-sm font-mono" placeholder={`Paste ${label}…`} aria-label={`${label} text`} />
            <label className="mt-2 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-extrabold"><FileUp className="size-3.5" /> Load TXT / DOCX
              <input className="sr-only" type="file" accept=".txt,text/plain,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => { void load(e.target.files?.[0], side); e.currentTarget.value = '' }} />
            </label>
          </div>
        })}
      </section>

      <div className="flex flex-wrap gap-2">
        <button type="button" className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-extrabold" onClick={() => { setLeft(SAMPLE_A); setRight(SAMPLE_B) }}>Load sample</button>
        <button type="button" className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-extrabold" onClick={() => { setLeft(''); setRight(''); setError('') }}>Clear</button>
      </div>
      {error && <p role="alert" className="text-xs font-bold text-red-700">{error}</p>}

      {(left.trim() || right.trim()) && <>
        <section className="grid gap-3 sm:grid-cols-3">
          {(['issues','statutes','authorities'] as const).map((key) => <div key={key} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"><div className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">Common {categoryLabel(key)}</div><div className="mt-2 text-xs leading-5">{report.common[key].length ? report.common[key].join(' · ') : 'No common terms detected'}</div></div>)}
        </section>

        <section className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 p-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-blue-900 dark:text-blue-100">Authority treatment</h2>
          <p className="mt-1 text-[11px] text-blue-900 dark:text-blue-100">Only explicit source wording is classified. The tool never infers “overruled” or precedential effect from a difference.</p>
          <div className="mt-3 space-y-2">{report.authorityTreatment.length ? report.authorityTreatment.map((item) => <div key={item.authority} className="rounded-xl border border-blue-200/70 dark:border-blue-800 bg-white/70 dark:bg-slate-900/50 p-3">
            <div className="font-mono text-xs font-bold">{item.authority}</div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2 text-[11px]"><div><b>{leftLabel}:</b> {treatmentLabel[item.treatmentA]}</div><div><b>{rightLabel}:</b> {treatmentLabel[item.treatmentB]}</div></div>
            {item.evidence.length > 0 && <div className="mt-2 text-[10px] text-slate-500">Evidence: {item.evidence.map((e) => `${e.source === 'judgment-a' ? leftLabel : rightLabel} line ${e.line}`).join(' · ')}</div>}
          </div>) : <p className="text-xs text-slate-600">No recognizable citation detected.</p>}</div>
        </section>

        <section className="space-y-3">
          {(['facts','legalRules','evidence','reasoning','outcomes'] as ComparisonCategory[]).map((key) => {
            const items = report.differences[key as keyof typeof report.differences]
            return <article key={key} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5"><h2 className="text-sm font-extrabold">{categoryLabel(key)}</h2><div className="mt-2 space-y-2">{items.length ? items.map((item, index) => <div key={`${item.source}-${index}`} className="rounded-xl border border-slate-100 dark:border-slate-800 p-3 text-xs"><div className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">{item.source === 'judgment-a' ? leftLabel : rightLabel} · source line {item.line}</div><p className="mt-1 whitespace-pre-wrap break-words">{item.text}</p></div>) : <p className="text-xs text-slate-500">No structural difference signal detected from labelled sections.</p>}</div></article>
          })}
        </section>

        <section className="rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50/60 dark:bg-amber-950/30 p-4"><h2 className="text-xs font-extrabold uppercase tracking-wide text-amber-900">Interpretation limits</h2><ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-amber-900">{report.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul></section>
      </>}

      <p className="text-[11px] leading-5 text-slate-500">TXT and DOCX are processed locally. PDF remains out of scope until genuine local PDF extraction exists. Legal effect and precedent require human verification.</p>
    </div>
  )
}
