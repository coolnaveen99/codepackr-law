import {
  Search,
  ChevronRight,
  BookOpen,
  Sparkles,
} from 'lucide-react'
import {
  SUBJECTS,
  PRIORITY_ORDER,
  PRIORITY_LABELS,
  type LawSubjectMeta,
  type SubjectPriority,
} from '../../data/subjects'

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

  return (
    <div className="space-y-10">
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <BookOpen className="w-4 h-4" />
          AIBE & Judiciary syllabus map
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          All Law Subjects
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Browse by exam weightage. Open a subject to learn its topics, sections, and articles.
        </p>
      </div>

      <div className="relative max-w-2xl">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search subjects, articles, sections (e.g. Art 21, bail, BNS, CPC)..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {PRIORITY_ORDER.map((priority) => {
        const list = SUBJECTS.filter((s) => s.priority === priority).filter(filterSubject)
        if (list.length === 0) return null

        return (
          <section key={priority} className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {PRIORITY_LABELS[priority]}
              </h3>
              <span className="text-xs text-slate-400">{list.length} subjects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((subject) => (
                <div
                  key={subject.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col hover:border-blue-400 dark:hover:border-blue-600 transition"
                >
                  <button
                    type="button"
                    onClick={() => onSelectSubject(subject.slug)}
                    className="text-left flex-1 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600">
                        {subject.shortName}
                      </h4>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                          priorityBadgeClass(subject.priority)
                        }`}
                      >
                        ~{subject.aibeQuestions} Q
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {subject.description}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {subject.topics.length} topics
                      {subject.topics.some((t) => t.highYield) && (
                        <span className="ml-2 inline-flex items-center gap-0.5 text-amber-600 dark:text-amber-400">
                          <Sparkles className="w-3 h-3" /> High yield
                        </span>
                      )}
                    </p>
                  </button>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectSubject(subject.slug)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 hover:underline"
                    >
                      Topics <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
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
