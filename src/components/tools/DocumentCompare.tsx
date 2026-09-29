import { useMemo, useState } from 'react'
import { ArrowLeftRight, Check, Copy, Eraser, FileDiff, FileUp, ShieldCheck } from 'lucide-react'

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
      out.push({ kind: 'same', text: A[i] }); i++; j++
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      out.push({ kind: 'del', text: A[i++] })
    } else {
      out.push({ kind: 'add', text: B[j++] })
    }
  }
  while (i < n) out.push({ kind: 'del', text: A[i++] })
  while (j < m) out.push({ kind: 'add', text: B[j++] })
  return out
}

const SAMPLE_A = `IN THE COURT OF THE SESSIONS JUDGE AT DELHI

APPLICATION UNDER SECTION 483 BNSS FOR REGULAR BAIL

1. That the applicant was arrested on 01.08.2026.
2. That the applicant undertakes to cooperate with investigation.
3. That the applicant has no criminal antecedents.`

const SAMPLE_B = `IN THE COURT OF THE SESSIONS JUDGE AT DELHI

APPLICATION UNDER SECTION 483 BNSS FOR REGULAR BAIL

1. That the applicant was arrested on 01.08.2026 and is in judicial custody since then.
2. That the applicant undertakes to cooperate with investigation and appear as directed.
3. That the applicant has no criminal antecedents.
4. That investigation is substantially complete.`

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
    for (const line of lines) {
      if (line.kind === 'add') add++
      else if (line.kind === 'del') del++
      else same++
    }
    return { add, del, same, identical: left.trim().length > 0 && add === 0 && del === 0 }
  }, [lines, left])

  const diffText = useMemo(
    () => lines.map((line) => line.kind === 'add' ? `+ ${line.text}` : line.kind === 'del' ? `- ${line.text}` : `  ${line.text}`).join('\n'),
    [lines],
  )

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(diffText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const loadFile = async (file: File | undefined, side: 'left' | 'right') => {
    if (!file) return
    const text = await file.text()
    if (side === 'left') setLeft(text)
    else setRight(text)
  }

  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 py-6 sm:px-6">
      <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><FileDiff className="size-4" /> Document Compare</div>
            <h1 className="text-2xl font-black tracking-tight text-[color:var(--ink)] sm:text-3xl">Compare legal document versions</h1>
            <p className="mt-2 text-sm leading-6 text-[color:var(--ink-muted)]">Paste or upload the original and revised text and review additions, deletions and unchanged content.</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"><ShieldCheck className="size-4" /> Local browser comparison</div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[color:var(--border)] pt-4 text-xs font-semibold text-[color:var(--ink-muted)]">
          <label className="inline-flex cursor-pointer items-center gap-2"><input type="checkbox" checked={ignoreWs} onChange={(e) => setIgnoreWs(e.target.checked)} /> Ignore whitespace</label>
          <label className="inline-flex cursor-pointer items-center gap-2"><input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} /> Ignore case</label>
          <label className="inline-flex cursor-pointer items-center gap-2"><input type="checkbox" checked={unified} onChange={(e) => setUnified(e.target.checked)} /> Unified view</label>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {(['left', 'right'] as const).map((side) => {
          const value = side === 'left' ? left : right
          const label = side === 'left' ? 'Original document' : 'Revised document'
          return (
            <div key={side} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div><div className="text-sm font-black">{label}</div><div className="text-[11px] text-[color:var(--ink-muted)]">{value.length.toLocaleString()} characters</div></div>
                <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold">
                  <FileUp className="size-3.5" /> Upload
                  <input className="hidden" type="file" accept=".txt,.text,.md,.docx,.pdf" onChange={(e) => loadFile(e.target.files?.[0], side)} />
                </label>
              </div>
              <textarea value={value} onChange={(e) => side === 'left' ? setLeft(e.target.value) : setRight(e.target.value)} rows={15} placeholder={side === 'left' ? 'Paste the original document…' : 'Paste the revised document…'} className="w-full rounded-xl border border-[color:var(--border)] bg-transparent p-3 text-sm leading-6 font-mono outline-none focus:border-[#8B1E3F]" />
            </div>
          )
        })}
      </section>

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => { setLeft(SAMPLE_A); setRight(SAMPLE_B) }} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold">Load sample</button>
        <button type="button" onClick={() => { setLeft(''); setRight('') }} className="inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold"><Eraser className="size-3.5" /> Clear</button>
        <button type="button" onClick={() => { setLeft(right); setRight(left) }} className="inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold"><ArrowLeftRight className="size-3.5" /> Swap</button>
      </div>

      {(left.trim() || right.trim()) && (
        <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--border)] px-4 py-3">
            <div>
              <div className="text-xs font-extrabold text-[color:var(--ink-muted)] uppercase tracking-wide">Comparison summary</div>
              <div className="mt-1 flex flex-wrap gap-3 text-sm font-black"><span className="text-emerald-700">+{stats.add} added</span><span className="text-red-700">−{stats.del} removed</span><span>{stats.same} unchanged</span></div>
            </div>
            <button type="button" onClick={copySummary} disabled={!diffText.trim()} className="inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold disabled:opacity-50">{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}{copied ? 'Copied' : 'Copy diff'}</button>
          </div>

          {stats.identical && <div className="m-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-900">The two texts are identical.</div>}

          <div className="max-h-[34rem] overflow-auto p-3 font-mono text-xs leading-6 sm:text-sm">
            {unified ? lines.map((line, idx) => (
              <div key={idx} className={line.kind === 'add' ? 'bg-emerald-50 px-2 text-emerald-900' : line.kind === 'del' ? 'bg-red-50 px-2 text-red-900' : 'px-2 text-[color:var(--ink-muted)]'}>
                <span className="mr-2 select-none opacity-60">{line.kind === 'add' ? '+' : line.kind === 'del' ? '−' : ' '}</span>{line.text || ' '}
              </div>
            )) : (
              <div className="grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl border border-red-100 overflow-hidden"><div className="border-b border-red-100 bg-red-50 px-3 py-2 text-[11px] font-black uppercase text-red-800">Original</div>{lines.filter((l) => l.kind !== 'add').map((line, idx) => <div key={idx} className={line.kind === 'del' ? 'bg-red-50 px-3 text-red-900' : 'px-3 text-[color:var(--ink-muted)]'}>{line.text || ' '}</div>)}</div>
                <div className="rounded-xl border border-emerald-100 overflow-hidden"><div className="border-b border-emerald-100 bg-emerald-50 px-3 py-2 text-[11px] font-black uppercase text-emerald-800">Revised</div>{lines.filter((l) => l.kind !== 'del').map((line, idx) => <div key={idx} className={line.kind === 'add' ? 'bg-emerald-50 px-3 text-emerald-900' : 'px-3 text-[color:var(--ink-muted)]'}>{line.text || ' '}</div>)}</div>
              </div>
            )}
          </div>

        </section>
      )}

      <p className="text-[11px] leading-5 text-[color:var(--ink-muted)]">Privacy: comparison runs in your browser. Uploaded files are read locally and are not sent to CodePackr. This tool is for document review/reference and does not provide legal advice.</p>
    </div>
  )
}
