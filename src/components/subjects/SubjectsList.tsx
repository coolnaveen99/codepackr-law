import { Search, ChevronRight, BookOpen, Sparkles } from 'lucide-react'
import {
  SUBJECTS,
  PRIORITY_ORDER,
  PRIORITY_LABELS,
  type LawSubjectMeta,
  type SubjectPriority,
} from '../../data/subjects'
import { SubjectGlyph } from '../icons'

const FEATURED_SLUGS = new Set(['constitution', 'bns', 'bnss', 'bsa'])

interface SubjectsListProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  onSelectSubject: (slug: string) => void
}

function priorityBadgeClass(p: SubjectPriority) {
  if (p === 'high') return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
  if (p === 'medium') return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
  return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
}

function countLabel(s: LawSubjectMeta) {
  const articles = s.topics.filter((t) => t.type === 'article').length
  const sections = s.topics.filter((t) => t.type === 'section').length
  if (articles) return `${articles} articles`
  if (sections) return `${sections} sections`
  return `${s.topics.length} topics`
}

export function SubjectsList({
  searchQuery,
  onSearchChange,
  onSelectSubject,
}: SubjectsListProps) {
  const q = searchQuery.trim().toLowerCase()

  const filterSubject = (s: LawSubjectMeta) => {
    if (!q) return true
    return (
      s.name.toLowerCase().includes(q) ||
      s.shortName.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.includes(q)) ||
      s.bareActs.some((b) => b.toLowerCase().includes(q)) ||
      s.topics.some(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          (t.range ?? '').toLowerCase().includes(q) ||
          (t.keywords ?? []).some((k) => k.includes(q)),
      )
    )
  }

  const featured = SUBJECTS.filter((s) => FEATURED_SLUGS.has(s.slug)).filter(filterSubject)

  return (
    <div className="space-y-10">
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-blue-700 dark:text-blue-300">
          <BookOpen className="w-4 h-4" />
          AIBE & Judiciary map
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Every subject, one desk.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
          Open a code for its introduction and full catalog. Click any article or section for its comprehensive treatise, case law ratios, and practice roadmaps.
        </p>
      </div>

      <div className="relative max-w-2xl">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search subjects, articles, sections (e.g. Art 21, bail, BNS, CPC)..."
          className="w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {featured.length > 0 && !q && (
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">The four codes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((subject) => (
              <button
                key={subject.id}
                type="button"
                onClick={() => onSelectSubject(subject.slug)}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-left hover:border-blue-500 transition-colors duration-150"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                    <SubjectGlyph name={subject.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    ~{subject.aibeQuestions} AIBE Q
                  </span>
                </div>
                <h4 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{subject.shortName}</h4>
                <p className="mt-1 text-sm text-slate-500">{countLabel(subject)}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {PRIORITY_ORDER.map((priority) => {
        const list = SUBJECTS.filter((s) => s.priority === priority)
          .filter(filterSubject)
          .filter((s) => q || !FEATURED_SLUGS.has(s.slug))
        if (list.length === 0) return null

        return (
          <section key={priority} className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {q ? PRIORITY_LABELS[priority] : priority === 'high' ? 'More high-yield' : PRIORITY_LABELS[priority]}
              </h3>
              <span className="text-xs text-slate-400">{list.length}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((subject) => (
                <button
                  key={subject.id}
                  type="button"
                  onClick={() => onSelectSubject(subject.slug)}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-left hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-150 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <SubjectGlyph name={subject.icon} className="w-4 h-4 text-blue-700 dark:text-blue-300 shrink-0" />
                      <h4 className="font-semibold text-slate-900 dark:text-white truncate">{subject.shortName}</h4>
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${priorityBadgeClass(subject.priority)}`}
                    >
                      ~{subject.aibeQuestions} Q
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 flex-1">{subject.description}</p>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {countLabel(subject)}
                      {subject.topics.some((t) => t.highYield) && (
                        <span className="ml-2 inline-flex items-center gap-0.5 text-amber-700 dark:text-amber-400">
                          <Sparkles className="w-3 h-3" /> High yield
                        </span>
                      )}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 inline-flex items-center gap-1">
                      Open <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )
      })}

      {SUBJECTS.filter(filterSubject).length === 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-10 text-center text-sm text-slate-500">
          No subjects match &ldquo;{searchQuery}&rdquo;. Try &ldquo;bail&rdquo;, &ldquo;Art 21&rdquo;, or &ldquo;CPC&rdquo;.
        </div>
      )}
    </div>
  )
}
