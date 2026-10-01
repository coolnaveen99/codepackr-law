import { useEffect, useMemo, useState } from 'react'
import { FlaskConical, Plus, Trash2 } from 'lucide-react'
import {
  type AuthorityRow,
  type ResearchSession,
  type VerificationStatus,
  clearResearchSession,
  emptyAuthorityRow,
  emptyResearchSession,
  loadResearchSession,
  researchNoteFromSession,
  saveResearchSession,
} from '../../lib/researchSession'

export function ResearchWorkbench() {
  const [session, setSession] = useState<ResearchSession>(() =>
    typeof window !== 'undefined' ? loadResearchSession() : emptyResearchSession(),
  )
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setSession(loadResearchSession())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    saveResearchSession(session)
  }, [session, hydrated])

  const note = useMemo(() => researchNoteFromSession(session), [session])

  const patchQuestion = (patch: Partial<ResearchSession['question']>) => {
    setSession((s) => ({ ...s, question: { ...s.question, ...patch } }))
  }

  const patchIssues = (patch: Partial<ResearchSession['issues']>) => {
    setSession((s) => ({ ...s, issues: { ...s.issues, ...patch } }))
  }

  const updateRow = (id: string, patch: Partial<AuthorityRow>) => {
    setSession((s) => ({
      ...s,
      authorities: s.authorities.map((r) => (r.id === id ? { ...r, ...patch } : r)),
    }))
  }

  const secondaryText = session.issues.secondary.join('\n')
  const statutoryText = session.issues.statutory.join('\n')

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200">
          <FlaskConical className="size-3.5" /> Research Workbench · browser-local
        </div>
        <h1 className="font-display text-2xl font-black text-slate-950 dark:text-white">
          Legal Research Workbench
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Structured workflow from question → issues → authority matrix → research note. Session saves
          automatically in this browser (PH3-010/020). Not legal advice.
        </p>
        {hydrated && session.updatedAt && (
          <p className="text-[11px] text-slate-500">
            Last saved locally: {new Date(session.updatedAt).toLocaleString()}
          </p>
        )}
      </header>

      <label className="block text-xs font-bold">
        Research question
        <textarea
          value={session.question.question}
          onChange={(e) => patchQuestion({ question: e.target.value })}
          rows={3}
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
          placeholder="What is the legal question?"
        />
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-bold">
          Jurisdiction
          <input
            value={session.question.jurisdiction}
            onChange={(e) => patchQuestion({ jurisdiction: e.target.value })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
            placeholder="e.g. India — All courts"
          />
        </label>
        <label className="block text-xs font-bold">
          Court level
          <select
            value={session.question.courtLevel || ''}
            onChange={(e) => patchQuestion({ courtLevel: e.target.value || undefined })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm bg-white dark:bg-slate-900"
          >
            <option value="">Any / not specified</option>
            <option value="Supreme Court">Supreme Court</option>
            <option value="High Court">High Court</option>
            <option value="District Court">District Court</option>
            <option value="Tribunal">Tribunal</option>
            <option value="Trial court">Trial court</option>
            <option value="Appellate">Appellate (general)</option>
          </select>
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-bold">
          Date from
          <input
            type="date"
            value={session.question.dateFrom || ''}
            onChange={(e) => patchQuestion({ dateFrom: e.target.value || undefined })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
          />
        </label>
        <label className="block text-xs font-bold">
          Date to
          <input
            type="date"
            value={session.question.dateTo || ''}
            onChange={(e) => patchQuestion({ dateTo: e.target.value || undefined })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block text-xs font-bold">
          Subject
          <input
            value={session.question.subjectSlug || ''}
            onChange={(e) => patchQuestion({ subjectSlug: e.target.value || undefined })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
            placeholder="e.g. cpc, constitution"
          />
        </label>
        <label className="block text-xs font-bold">
          Act
          <input
            value={session.question.act || ''}
            onChange={(e) => patchQuestion({ act: e.target.value || undefined })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
            placeholder="e.g. CPC, 1908"
          />
        </label>
        <label className="block text-xs font-bold">
          Section
          <input
            value={session.question.section || ''}
            onChange={(e) => patchQuestion({ section: e.target.value || undefined })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
            placeholder="e.g. s. 32 / Art. 21"
          />
        </label>
      </div>

      <label className="block text-xs font-bold">
        Short answer (optional)
        <textarea
          value={session.shortAnswer || ''}
          onChange={(e) => setSession((s) => ({ ...s, shortAnswer: e.target.value }))}
          rows={2}
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
        />
      </label>

      <section className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
        <h2 className="text-sm font-black">Issue decomposition</h2>
        <label className="block text-xs font-bold">
          Primary issue
          <input
            value={session.issues.primary}
            onChange={(e) => patchIssues({ primary: e.target.value })}
            className="mt-1 h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-sm"
          />
        </label>
        <label className="block text-xs font-bold">
          Secondary issues (one per line)
          <textarea
            value={secondaryText}
            onChange={(e) =>
              patchIssues({
                secondary: e.target.value
                  .split('\n')
                  .map((x) => x.trim())
                  .filter(Boolean),
              })
            }
            rows={2}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
          />
        </label>
        <label className="block text-xs font-bold">
          Statutory questions (one per line)
          <textarea
            value={statutoryText}
            onChange={(e) =>
              patchIssues({
                statutory: e.target.value
                  .split('\n')
                  .map((x) => x.trim())
                  .filter(Boolean),
              })
            }
            rows={2}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
          />
        </label>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-black">Authority matrix</h2>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 px-2 py-1 text-xs font-bold"
            onClick={() =>
              setSession((s) => ({ ...s, authorities: [...s.authorities, emptyAuthorityRow()] }))
            }
          >
            <Plus className="size-3.5" /> Add row
          </button>
        </div>
        {session.authorities.map((r) => (
          <div
            key={r.id}
            className="space-y-2 rounded-2xl border border-slate-200 dark:border-slate-800 p-3"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                value={r.caseName}
                onChange={(e) => updateRow(r.id, { caseName: e.target.value })}
                placeholder="Case name"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm"
              />
              <input
                value={r.court}
                onChange={(e) => updateRow(r.id, { court: e.target.value })}
                placeholder="Court"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm"
              />
              <input
                value={r.citation}
                onChange={(e) => updateRow(r.id, { citation: e.target.value })}
                placeholder="Citation"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm"
              />
              <input
                value={r.statute}
                onChange={(e) => updateRow(r.id, { statute: e.target.value })}
                placeholder="Statute / section"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm"
              />
              <input
                value={r.issue}
                onChange={(e) => updateRow(r.id, { issue: e.target.value })}
                placeholder="Issue"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm sm:col-span-2"
              />
              <textarea
                value={r.holding}
                onChange={(e) => updateRow(r.id, { holding: e.target.value })}
                placeholder="Holding / ratio (your notes)"
                rows={2}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-sm sm:col-span-2"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <select
                value={r.verification}
                onChange={(e) =>
                  updateRow(r.id, { verification: e.target.value as VerificationStatus })
                }
                className="h-8 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs bg-white dark:bg-slate-900"
              >
                <option value="user-provided">user-provided</option>
                <option value="verified">verified</option>
                <option value="partial">partial</option>
                <option value="not-verified">not-verified</option>
                <option value="conflict">conflict</option>
                <option value="needs-review">needs-review</option>
              </select>
              <button
                type="button"
                onClick={() =>
                  setSession((s) => ({
                    ...s,
                    authorities: s.authorities.filter((x) => x.id !== r.id),
                  }))
                }
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600"
              >
                <Trash2 className="size-3.5" /> Remove
              </button>
            </div>
          </div>
        ))}
      </section>

      <label className="block text-xs font-bold">
        Analysis
        <textarea
          value={session.analysis}
          onChange={(e) => setSession((s) => ({ ...s, analysis: e.target.value }))}
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
        />
      </label>
      <label className="block text-xs font-bold">
        Counter-authorities
        <textarea
          value={session.counterAuthorities}
          onChange={(e) => setSession((s) => ({ ...s, counterAuthorities: e.target.value }))}
          rows={2}
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
        />
      </label>
      <label className="block text-xs font-bold">
        Unresolved questions
        <textarea
          value={session.unresolved}
          onChange={(e) => setSession((s) => ({ ...s, unresolved: e.target.value }))}
          rows={2}
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm"
        />
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-bold"
          onClick={() => navigator.clipboard.writeText(note)}
        >
          Copy note
        </button>
        <button
          type="button"
          className="rounded-xl border border-red-200 text-red-700 dark:border-red-900 px-3 py-1.5 text-xs font-bold"
          onClick={() => {
            clearResearchSession()
            setSession(emptyResearchSession())
          }}
        >
          Clear local session
        </button>
      </div>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
        <h2 className="mb-2 text-sm font-black">Research note preview</h2>
        <pre className="max-h-80 overflow-auto whitespace-pre-wrap font-mono text-[11px] text-slate-700 dark:text-slate-300">
          {note}
        </pre>
      </section>
    </div>
  )
}
