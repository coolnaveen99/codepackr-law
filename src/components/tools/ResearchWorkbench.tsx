import { useEffect, useMemo, useState } from 'react'
import {
  Check,
  ExternalLink,
  FlaskConical,
  Loader2,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
} from 'lucide-react'
import {
  type AuthorityRow,
  type ResearchSession,
  type VerificationStatus,
  clearResearchSession,
  emptyAuthorityRow,
  emptyResearchSession,
  loadResearchSession,
  researchNoteFromSession,
  downloadResearchNoteMarkdown,
  saveResearchSession,
} from '../../lib/researchSession'
import {
  suggestAuthorities,
  authorityRowFromSuggestion,
  type AuthoritySuggestion,
} from '../../content/suggestions'
import { hrefForCanonicalTopicId } from '../../content/parseCanonicalTopicId'
import {
  buildCitationPayload,
  buildCitationVerifierUrl,
  saveCitationHandoff,
} from '../../lib/citationHandoff'

export function ResearchWorkbench() {
  const [session, setSession] = useState<ResearchSession>(() =>
    typeof window !== 'undefined' ? loadResearchSession() : emptyResearchSession(),
  )
  const [hydrated, setHydrated] = useState(false)
  const [suggestions, setSuggestions] = useState<AuthoritySuggestion[]>([])
  const [loadingSuggestions, setLoadingSuggestions] = useState(false)
  const [suggestionsQuery, setSuggestionsQuery] = useState('')
  const [hasSearchedSuggestions, setHasSearchedSuggestions] = useState(false)

  useEffect(() => {
    setSession(loadResearchSession())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    saveResearchSession(session)
  }, [session, hydrated])

  const handleFetchSuggestions = async (kw?: string) => {
    setLoadingSuggestions(true)
    try {
      const results = await suggestAuthorities({
        subjectSlug: session.question.subjectSlug,
        act: session.question.act,
        section: session.question.section,
        keywords: kw !== undefined ? kw : suggestionsQuery || session.question.question,
      })
      setSuggestions(results)
      setHasSearchedSuggestions(true)
    } catch (err) {
      console.error('Failed to suggest authorities:', err)
    } finally {
      setLoadingSuggestions(false)
    }
  }

  useEffect(() => {
    if (!hydrated) return
    const hasSubject = Boolean(session.question.subjectSlug || session.question.act)
    const hasSection = Boolean(session.question.section)
    if (hasSubject || hasSection) {
      const timer = setTimeout(() => {
        handleFetchSuggestions()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [session.question.subjectSlug, session.question.act, session.question.section, hydrated])

  const note = useMemo(() => researchNoteFromSession(session), [session])

  const hasCitationsToVerify = useMemo(
    () => session.authorities.some((r) => (r.citation || '').trim() || (r.caseName || '').trim()),
    [session.authorities],
  )

  const handleVerifyCitations = (items: (string | AuthorityRow)[], newTab = false) => {
    const payload = buildCitationPayload(items)
    if (!payload) return
    saveCitationHandoff(payload)
    const url = buildCitationVerifierUrl(payload)
    if (newTab) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
  }

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
          automatically in this browser (PH3-010/020/030/040). Not legal advice.
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

      <section className="space-y-3 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-blue-800 dark:text-blue-300" />
              <h2 className="text-sm font-black text-slate-950 dark:text-white">
                Authority & Topic Suggestions
              </h2>
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200">
                ContentGateway · Read-only
              </span>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-400">
              Suggestion — verify before reliance. Resolved from the canonical legal knowledge graph.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleFetchSuggestions()}
            disabled={loadingSuggestions}
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-3 py-1.5 text-xs font-bold disabled:opacity-50"
          >
            {loadingSuggestions ? (
              <Loader2 className="size-3.5 animate-spin" />
            ) : (
              <Search className="size-3.5" />
            )}
            Find suggestions
          </button>
        </div>

        <div className="flex gap-2">
          <input
            value={suggestionsQuery}
            onChange={(e) => setSuggestionsQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleFetchSuggestions(suggestionsQuery)
              }
            }}
            placeholder="Search knowledge graph (e.g. summons, locus standi, arrest, Art. 21)..."
            className="h-9 flex-1 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-xs bg-white dark:bg-slate-900"
          />
          <button
            type="button"
            onClick={() => handleFetchSuggestions(suggestionsQuery)}
            disabled={loadingSuggestions}
            className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Search
          </button>
        </div>

        {loadingSuggestions && (
          <div className="flex items-center gap-2 py-3 text-xs text-slate-500">
            <Loader2 className="size-4 animate-spin text-blue-600" />
            Resolving canonical provisions, topics, and judgments…
          </div>
        )}

        {!loadingSuggestions && suggestions.length > 0 && (
          <div className="space-y-2 pt-1">
            {suggestions.map((s) => {
              const inMatrix = session.authorities.some((a) => a.canonicalEntityId === s.id)
              const badgeColors: Record<string, string> = {
                judgment: 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800',
                provision: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
                topic: 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
                doctrine: 'bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800',
              }
              const badgeClass =
                badgeColors[s.entityType] ||
                'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'

              return (
                <div
                  key={s.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-xs space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${badgeClass}`}
                      >
                        {s.entityType}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-slate-100 truncate">
                        {s.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {s.href && (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-[11px] font-bold text-blue-700 hover:text-blue-900 dark:text-blue-400"
                        >
                          Treatise <ExternalLink className="size-3" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() =>
                          setSession((prev) => ({
                            ...prev,
                            authorities: [...prev.authorities, authorityRowFromSuggestion(s)],
                          }))
                        }
                        disabled={inMatrix}
                        className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold ${
                          inMatrix
                            ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'
                            : 'bg-[#8B1E3F] text-white hover:opacity-90'
                        }`}
                      >
                        {inMatrix ? (
                          <>
                            <Check className="size-3" /> In matrix
                          </>
                        ) : (
                          <>
                            <Plus className="size-3" /> Add to matrix
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {s.citation && s.citation !== s.title && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      <strong className="font-semibold text-slate-700 dark:text-slate-300">
                        Citation / Ref:
                      </strong>{' '}
                      {s.citation}
                    </p>
                  )}

                  {s.holding && (
                    <p className="line-clamp-2 text-[11px] text-slate-600 dark:text-slate-400">
                      {s.holding}
                    </p>
                  )}

                  <div className="text-[10px] text-slate-400 font-mono">
                    ID: {s.id}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!loadingSuggestions && hasSearchedSuggestions && suggestions.length === 0 && (
          <p className="text-[11px] text-slate-500 italic py-1">
            No published canonical entities found for this query. User-entered authorities remain valid.
          </p>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-black">Authority matrix</h2>
          <div className="flex flex-wrap items-center gap-2">
            {hasCitationsToVerify && (
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-950/40 px-2.5 py-1 text-xs font-bold text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60"
                onClick={() => handleVerifyCitations(session.authorities, true)}
                title="Hand off all citations in matrix to Citation Verifier (opens in new tab)"
              >
                <ShieldCheck className="size-3.5 text-blue-700 dark:text-blue-300" /> Verify in Citation Verifier ↗
              </button>
            )}
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
                type="date"
                value={r.date || ''}
                onChange={(e) => updateRow(r.id, { date: e.target.value || undefined })}
                title="Decision date"
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
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm"
              />
              <textarea
                value={r.holding}
                onChange={(e) => updateRow(r.id, { holding: e.target.value })}
                placeholder="Holding / ratio (your notes)"
                rows={2}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-sm sm:col-span-2"
              />
              <input
                value={r.paragraph || ''}
                onChange={(e) => updateRow(r.id, { paragraph: e.target.value || undefined })}
                placeholder="Relevant paragraph / pin cite"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm"
              />
              <select
                value={r.treatment || ''}
                onChange={(e) => updateRow(r.id, { treatment: e.target.value || undefined })}
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm bg-white dark:bg-slate-900"
                title="Treatment of this authority"
              >
                <option value="">Treatment — not set</option>
                <option value="followed">followed</option>
                <option value="applied">applied</option>
                <option value="distinguished">distinguished</option>
                <option value="overruled">overruled</option>
                <option value="doubted">doubted</option>
                <option value="cited">cited</option>
                <option value="persuasive">persuasive</option>
              </select>
              <input
                value={r.source || ''}
                onChange={(e) => updateRow(r.id, { source: e.target.value || undefined })}
                placeholder="Source URL or reporter (optional)"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-sm sm:col-span-2"
              />
              <input
                value={r.canonicalEntityId || ''}
                onChange={(e) =>
                  updateRow(r.id, { canonicalEntityId: e.target.value || undefined })
                }
                placeholder="Canonical entity ID (optional, e.g. topic:india:cpc-s-32 or judgment:india:...)"
                className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 px-2 text-xs font-mono sm:col-span-2"
              />
              {r.canonicalEntityId && (
                <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] text-blue-800 dark:text-blue-300 sm:col-span-2">
                  <span className="rounded bg-blue-50 dark:bg-blue-950 px-2 py-0.5 font-mono">
                    Linked: {r.canonicalEntityId}
                  </span>
                  {hrefForCanonicalTopicId(r.canonicalEntityId) && (
                    <a
                      href={hrefForCanonicalTopicId(r.canonicalEntityId)!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline hover:text-blue-950 dark:hover:text-white"
                    >
                      Open in Library ↗
                    </a>
                  )}
                </div>
              )}
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
              <div className="inline-flex items-center gap-3">
                {(r.citation?.trim() || r.caseName?.trim()) && (
                  <button
                    type="button"
                    onClick={() => handleVerifyCitations([r], true)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200"
                    title="Hand off this citation to Citation Verifier"
                  >
                    <ShieldCheck className="size-3.5" /> Verify ↗
                  </button>
                )}
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
          className="rounded-xl bg-[#8B1E3F] text-white px-3 py-1.5 text-xs font-bold"
          onClick={() => downloadResearchNoteMarkdown(session)}
        >
          Download .md
        </button>
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
        <h2 className="mb-1 text-sm font-black">Research note preview</h2>
        <p className="mb-2 text-[11px] text-slate-500 dark:text-slate-400">
          Structured Markdown with labelled sections. Export stays on-device until you save or share the file.
        </p>
        <pre className="max-h-80 overflow-auto whitespace-pre-wrap font-mono text-[11px] text-slate-700 dark:text-slate-300">
          {note}
        </pre>
      </section>
    </div>
  )
}
