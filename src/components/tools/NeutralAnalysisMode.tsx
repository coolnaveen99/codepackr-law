import { Scale } from 'lucide-react'

export function NeutralAnalysisMode() {
  const allowed = [
    { label: 'Judgment structure analysis', href: '/tool/judgment-analyzer' },
    { label: 'Authority extraction / organisation', href: '/tool/judgment-analyzer' },
    { label: 'Chronology extraction / organisation', href: '/tool/judgment-analyzer' },
    { label: 'Issue and statute extraction', href: '/tool/judgment-analyzer' },
    { label: 'Citation verification', href: '/tool/citation-verifier' },
    { label: 'Judgment comparison', href: '/tool/judgment-compare' },
    { label: 'Document organisation / compare', href: '/tool/document-compare' },
    { label: 'Research workbench', href: '/tool/research-workbench' },
    { label: 'Case preparation matrices', href: '/tool/case-prep' },
  ]

  const forbidden = [
    'Judge-decision prediction',
    'Judge-bias scores',
    'Conviction prediction',
    'Winner prediction',
    'Personal competence or fitness scores',
  ]

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Scale className="size-4" /> Neutral Analysis Mode
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Assistive, not predictive</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Utilities that structure, extract and organise legal materials while remaining neutral. CodePackr supports
          human legal judgment — it does not replace it.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 space-y-2">
        <div className="text-xs font-extrabold uppercase text-emerald-900 dark:text-emerald-200">Allowed utilities</div>
        <ul className="space-y-1">
          {allowed.map((a) => (
            <li key={a.href}>
              <a href={a.href} className="text-sm font-bold text-[#8B1E3F] hover:underline">{a.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-red-200 bg-red-50/50 p-4 space-y-2">
        <div className="text-xs font-extrabold uppercase text-red-900">Not built / not offered</div>
        <ul className="list-disc pl-5 text-sm text-red-950 space-y-1">
          {forbidden.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <p className="text-[11px] text-slate-500">
        When analysing user-pasted judgments, treat all extractions as user-provided until independently verified against primary sources.
      </p>
    </div>
  )
}
