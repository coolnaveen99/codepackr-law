import { useMemo, useState } from 'react'
import { ArrowLeftRight, Copy, Check, Eraser, FileDiff } from 'lucide-react'

type DiffKind = 'same' | 'add' | 'del'
type DiffLine = { kind: DiffKind; text: string }

function normalize(text: string, ignoreWs: boolean, ignoreCase: boolean): string {
  let t = text.replace(/\r\n/g, '\n')
  if (ignoreCase) t = t.toLowerCase()
  if (ignoreWs) t = t.replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n')
  return t
}

function diffLines(a: string, b: string): DiffLine[] {
  const A = a.split('\n')
  const B = b.split('\n')
  const n = A.length
  const m = B.length
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
    }
  }
  const out: DiffLine[] = []
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (A[i] === B[j]) {
      out.push({ kind: 'same', text: A[i] })
      i++
      j++
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      out.push({ kind: 'del', text: A[i] })
      i++
    } else {
      out.push({ kind: 'add', text: B[j] })
      j++
    }
  }
  while (i < n) out.push({ kind: 'del', text: A[i++] })
  while (j < m) out.push({ kind: 'add', text: B[j++] })
  return out
}

const SAMPLE_A = `IN THE COURT OF THE SESSIONS JUDGE AT DELHI\n\nAPPLICATION UNDER SECTION 483 BNSS FOR REGULAR BAIL\n\n1. That the applicant was arrested on 01.08.2026.\n2. That the applicant undertakes to cooperate with investigation.\n3. That the applicant has no criminal antecedents.`

const SAMPLE_B = `IN THE COURT OF THE SESSIONS JUDGE AT DELHI\n\nAPPLICATION UNDER SECTION 483 BNSS FOR REGULAR BAIL\n\n1. That the applicant was arrested on 01.08.2026 and is in judicial custody since then.\n2. That the applicant undertakes to cooperate with investigation and appear as directed.\n3. That the applicant has no criminal antecedents.\n4. That investigation is substantially complete.`

export function DocumentCompare() {
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [ignoreWs, setIgnoreWs] = useState(true)
  const [ignoreCase, setIgnoreCase] = useState(false)
  const [unified, setUnified] = useState(false)
  const [copied, setCopied] = useState(false)

  const lines = useMemo(() => {
    if (!left.trim() && !right.trim()) return []
    return diffLines(normalize(left, ignoreWs, ignoreCase), normalize(right, ignoreWs, ignoreCase))
  }, [left, right, ignoreWs, ignoreCase])

  const stats = useMemo(() => {
    let add = 0, del = 0, same = 0
    for (const l of lines) {
      if (l.kind === 'add') add++
      else if (l.kind === 'del') del++
      else same++
    }
    return { add, del, same, identical: left.trim().length > 0 && add === 0 && del === 0 }
  }, [lines, left])

  const copySummary = async () => {
    const text = lines.map((l) => (l.kind === 'add' ? `+ ${l.text}` : l.kind === 'del' ? `- ${l.text}` : `  ${l.text}`)).join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-start gap-3 justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E3F] mb-2">
              <FileDiff className="size-4" /> Legal Document Compare
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[color:var(--ink)]">Compare two draft versions client-side</h1>
            <p className="mt-1 text-sm text-[color:var(--ink-muted)] max-w-2xl">
              Paste original and revised pleadings, notices, or contracts. Nothing leaves your browser. Educational comparison only.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => { setLeft(SAMPLE_A); setRight(SAMPLE_B) }} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-bold cursor-pointer">Load sample</button>
            <button type="button" onClick={() => { setLeft(''); setRight('') }} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"><Eraser className="size-3.5" /> Clear</button>
            <button type="button" onClick={() => { setLeft(right); setRight(left) }} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"><ArrowLeftRight className="size-3.5" /> Swap</button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-[color:var(--ink-muted)]">
          <label className="inline-flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={ignoreWs} onChange={(e) => setIgnoreWs(e.target.checked)} /> Ignore whitespace</label>
          <label className="inline-flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} /> Ignore case</label>
          <label className="inline-flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={unified} onChange={(e) => setUnified(e.target.checked)} /> Unified view</label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-[color:var(--ink-muted)]">Original</label>
          <textarea value={left} onChange={(e) => setLeft(e.target.value)} rows={14} placeholder="Paste original draft…" className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-sm font-mono focus:outline-none focus:border-[#8B1E3F]" />
        </div>
        <div>
          <label className="text-xs font-bold text-[color:var(--ink-muted)]">Revised</label>
          <textarea value={right} onChange={(e) => setRight(e.target.value)} rows={14} placeholder="Paste revised draft…" className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-sm font-mono focus:outline-none focus:border-[#8B1E3F]" />
        </div>
      </div>
      {(left.trim() || right.trim()) && (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[color:var(--border)] px-4 py-3">
            <div className="text-xs font-bold text-[color:var(--ink-muted)]">
              {stats.identical ? (
                <span className="text-[#8B1E3F] font-extrabold">The two texts are identical</span>
              ) : (
                <span><span className="text-emerald-700">+{stats.add}</span>{' · '}<span className="text-red-700">−{stats.del}</span>{' · '}<span>{stats.same} unchanged</span></span>
              )}
            </div>
            <button type="button" onClick={copySummary} className="inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] px-2.5 py-1.5 text-xs font-bold cursor-pointer">
              {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
              {copied ? 'Copied' : 'Copy diff'}
            </button>
          </div>
          {stats.identical && (
            <div className="mx-4 my-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-900">The two texts are identical</div>
          )}
          <div className="max-h-[28rem] overflow-auto p-2 font-mono text-xs sm:text-sm leading-relaxed">
            {unified ? lines.map((l, idx) => (
              <div key={idx} className={l.kind === 'add' ? 'bg-emerald-50 text-emerald-900 px-2 py-0.5' : l.kind === 'del' ? 'bg-red-50 text-red-900 px-2 py-0.5' : 'px-2 py-0.5 text-[color:var(--ink-muted)]'}>
                <span className="opacity-60 select-none mr-2">{l.kind === 'add' ? '+' : l.kind === 'del' ? '−' : ' '}</span>{l.text || ' '}
              </div>
            )) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div>{lines.filter((l) => l.kind !== 'add').map((l, idx) => (<div key={idx} className={l.kind === 'del' ? 'bg-red-50 text-red-900 px-2 py-0.5' : 'px-2 py-0.5 text-[color:var(--ink-muted)]'}>{l.text || ' '}</div>))}</div>
                <div>{lines.filter((l) => l.kind !== 'del').map((l, idx) => (<div key={idx} className={l.kind === 'add' ? 'bg-emerald-50 text-emerald-900 px-2 py-0.5' : 'px-2 py-0.5 text-[color:var(--ink-muted)]'}>{l.text || ' '}</div>))}</div>
              </div>
            )}
          </div>
        </div>
      )}
      <p className="text-[11px] text-[color:var(--ink-muted)]">Privacy: comparison runs entirely in your browser. No drafts are uploaded.</p>
    </div>
  )
}
