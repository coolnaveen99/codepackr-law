import { useMemo } from 'react'
import { ArrowRight, BookOpen, Search, ShieldCheck } from 'lucide-react'
import { SUBJECTS, type LawTopic } from '../../data/subjects'
import type { ToolCategory, ToolMetadata } from '../../types'
import { Badge } from '../ui/Badge'
import { UnderConstructionBanner } from './UnderConstructionBanner'
import { SubjectGlyph, ToolGlyph } from '../icons'

const FEATURED_SLUGS = ['constitution', 'bns', 'bnss', 'bsa'] as const
const MORE_SLUGS = ['cpc', 'contract', 'family', 'tort', 'petition-formats'] as const

const QUICK = [
  { label: 'Art 21', subject: 'constitution', topic: 'art-21' },
  { label: 'Art 32', subject: 'constitution', topic: 'art-32' },
  { label: 'BNS s. 103', subject: 'bns', topic: 's-103' },
  { label: 'BNSS bail', subject: 'bnss', topic: 'bail' },
  { label: 'FIR', subject: 'bnss', topic: 'fir-investigation' },
  { label: 'BSA confession', subject: 'bsa', topic: 'admissions-confessions' },
] as const

interface HomePageProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  selectedCategory: ToolCategory | 'all'
  onCategoryChange: (c: ToolCategory | 'all') => void
  filteredTools: ToolMetadata[]
  subjectSearchResults: {
    subjects: typeof SUBJECTS
    topics: { subject: (typeof SUBJECTS)[number]; topic: LawTopic }[]
  } | null
  onOpenSubjects: () => void
  onSelectSubject: (slug: string) => void
  onSelectTopic: (subjectSlug: string, topic: LawTopic) => void
  onSelectTool: (slug: string) => void
}

function provisionCount(slug: string) {
  const s = SUBJECTS.find((x) => x.slug === slug)
  if (!s) return 0
  const n = s.topics.filter((t) => t.type === 'section' || t.type === 'article').length
  return n || s.topics.length
}

function provisionLabel(slug: string) {
  if (slug === 'constitution') return 'articles'
  return 'sections'
}

const CATEGORIES: { id: ToolCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All tools' },
  { id: 'mcq', label: 'MCQs' },
  { id: 'bare-acts', label: 'Mappers' },
  { id: 'study-aids', label: 'Study aids' },
  { id: 'reference', label: 'Reference' },
]

export function HomePage({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  filteredTools,
  subjectSearchResults,
  onOpenSubjects,
  onSelectSubject,
  onSelectTopic,
  onSelectTool,
}: HomePageProps) {
  const featured = useMemo(
    () => FEATURED_SLUGS.map((slug) => SUBJECTS.find((s) => s.slug === slug)).filter(Boolean),
    [],
  )
  const more = useMemo(
    () => MORE_SLUGS.map((slug) => SUBJECTS.find((s) => s.slug === slug)).filter(Boolean),
    [],
  )

  return (
    <div className="space-y-14">
      <UnderConstructionBanner />

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-end pt-2 sm:pt-4">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
            <ShieldCheck className="w-3.5 h-3.5" />
            Student corner
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.08] max-w-2xl">
            Indian law, written for full marks.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Section-wise notes and 10-mark / 16-mark answers for{' '}
            <strong className="text-blue-700 dark:text-blue-300 font-semibold">AIBE</strong> and{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">Judiciary</strong>. Open a
            code, click a section, write the answer.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={onOpenSubjects}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-2xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors duration-150 shadow-sm shadow-blue-600/20 active:scale-[0.96]"
            >
              <BookOpen className="w-4 h-4" />
              All subjects
            </button>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-900 transition-colors duration-150"
            >
              Practice tools
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 mb-3">Jump in</p>
          <div className="flex flex-wrap gap-2">
            {QUICK.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  const pair = SUBJECTS.find((s) => s.slug === item.subject)?.topics.find((t) => t.id === item.topic)
                  if (pair) onSelectTopic(item.subject, pair)
                  else onSelectSubject(item.subject)
                }}
                className="h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-3 max-w-4xl">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search subjects, articles, sections, tools (Art 21, bail, BNS, AIBE)…"
            className="w-full h-12 pl-12 pr-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700"
            >
              Clear
            </button>
          ) : null}
        </div>

        {subjectSearchResults &&
          (subjectSearchResults.subjects.length > 0 || subjectSearchResults.topics.length > 0) && (
            <div className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 p-4 space-y-3">
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">Subjects & topics</p>
              <div className="flex flex-wrap gap-2">
                {subjectSearchResults.subjects.slice(0, 6).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onSelectSubject(s.slug)}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                  >
                    {s.shortName}
                  </button>
                ))}
                {subjectSearchResults.topics.slice(0, 8).map(({ subject, topic }) => (
                  <button
                    key={`${subject.id}-${topic.id}`}
                    type="button"
                    onClick={() => onSelectTopic(subject.slug, topic)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {topic.name}
                    <span className="text-slate-400 ml-1">· {subject.shortName}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">Study</p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">The four codes</h3>
          </div>
          <button
            type="button"
            onClick={onOpenSubjects}
            className="text-sm font-semibold text-blue-700 dark:text-blue-300 inline-flex items-center gap-1 hover:underline"
          >
            All subjects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((s) =>
            s ? (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectSubject(s.slug)}
                className="group text-left rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-150"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                    <SubjectGlyph name={s.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    ~{s.aibeQuestions} AIBE Q
                  </span>
                </div>
                <h4 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{s.shortName}</h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {provisionCount(s.slug)} {provisionLabel(s.slug)} · click any one for the full note
                </p>
              </button>
            ) : null,
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {more.map((s) =>
            s ? (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectSubject(s.slug)}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 text-left hover:border-blue-400 transition-colors duration-150"
              >
                <SubjectGlyph name={s.icon} className="w-4 h-4 text-blue-700 dark:text-blue-300 mb-2" />
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{s.shortName}</p>
                <p className="text-[11px] text-slate-500">{s.topics.length} topics</p>
              </button>
            ) : null,
          )}
        </div>
      </section>

      <section id="tools" className="space-y-4 scroll-mt-24">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">Practice</p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Exam tools</h3>
          </div>
          <span className="text-xs text-slate-500">{filteredTools.length} tools</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`h-9 px-3.5 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-150 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelectTool(tool.slug)}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-left hover:border-blue-500 transition-colors duration-150 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                  <ToolGlyph name={tool.icon} className="w-5 h-5" />
                </div>
                {tool.badge ? (
                  <Badge variant="blue" className="text-[11px]">
                    {tool.badge}
                  </Badge>
                ) : null}
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">{tool.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{tool.description}</p>
              <span className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-700 dark:text-blue-300 inline-flex items-center gap-1">
                Launch <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </span>
            </button>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="font-semibold text-slate-800 dark:text-slate-200">No tools match your search</p>
            <button
              type="button"
              onClick={() => {
                onSearchChange('')
                onCategoryChange('all')
              }}
              className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Private, on this device</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Scores, flashcards and answers never leave the browser. No account required. Built for AIBE and State Judiciary with the 2023 codes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
