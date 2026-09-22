import { ArrowRight, Search, Sparkles, HeartHandshake, ShieldCheck, BookOpenCheck } from 'lucide-react'
import { SUBJECTS, type LawTopic } from '../../data/subjects'
import type { ToolCategory, ToolMetadata } from '../../types'
import { Badge } from '../ui/Badge'
import { UnderConstructionBanner } from './UnderConstructionBanner'
import { LibraryStatsBar } from './LibraryStatsBar'
import { DualTrackHero } from './DualTrackHero'
import { LibraryWingsGrid } from './LibraryWingsGrid'
import { AibeWeightageMatrix } from './AibeWeightageMatrix'
import { ToolGlyph } from '../icons'

const QUICK_JUMP_TARGETS = [
  { label: 'Art. 21 (Life & Liberty)', subject: 'constitution', topic: 'art-21' },
  { label: 'Art. 32 (Writs)', subject: 'constitution', topic: 'art-32-226' },
  { label: 'BNS s. 103 (Murder)', subject: 'bns', topic: 's-103' },
  { label: 'BNSS s. 480 (Bail)', subject: 'bnss', topic: 's-480' },
  { label: 'Order 39 CPC (Injunctions)', subject: 'cpc', topic: 'order-39' },
  { label: 'S. 138 NI Act', subject: 'contract', topic: 's-138-ni' },
  { label: 'Tort Defences', subject: 'tort', topic: 'tort-general-defences' },
  { label: 'MACT Claims', subject: 'tort', topic: 'mact-claims' },
  { label: 'Format: Writ Petition', subject: 'petition-formats', topic: 'format-writ-petition' },
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

const CATEGORIES: { id: ToolCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Practice Tools' },
  { id: 'mcq', label: 'MCQs & Mocks' },
  { id: 'bare-acts', label: 'Sanhita Mappers' },
  { id: 'study-aids', label: 'Flashcards & Timers' },
  { id: 'reference', label: 'Maxims & Cases' },
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
  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* 1. Site Under Active Construction Banner (Preserved and Refined) */}
      <UnderConstructionBanner />

      {/* 2. Prestige Dual-Track Hero */}
      <DualTrackHero onOpenSubjects={onOpenSubjects} />

      {/* 3. Live Library Metrics Ticker */}
      <LibraryStatsBar />

      {/* 4. Universal Legal Omni-Search & Quick Jumps */}
      <section className="space-y-4 max-w-4xl mx-auto w-full pt-2">
        <div className="text-center space-y-1 mb-2">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Universal Legal Omni-Search
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Instant search across all 2,078 sections, articles, landmark doctrines, and courtroom drafting formats
          </p>
        </div>

        <div className="relative shadow-md rounded-2xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search any article, section, doctrine, or case (e.g. Art 21, Bail 480, Injunctions Order 39, S. 138 NI Act, Volenti non fit injuria)..."
            className="w-full h-14 pl-12 pr-16 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              Clear
            </button>
          ) : null}
        </div>

        {/* Live Search Results Dropdown */}
        {subjectSearchResults &&
          (subjectSearchResults.subjects.length > 0 || subjectSearchResults.topics.length > 0) && (
            <div className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/80 dark:bg-blue-950/40 p-5 space-y-4 shadow-lg">
              {subjectSearchResults.subjects.length > 0 && (
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-2">
                    Matching Subjects ({subjectSearchResults.subjects.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subjectSearchResults.subjects.slice(0, 6).map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => onSelectSubject(s.slug)}
                        className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-colors duration-150 shadow-xs"
                      >
                        {s.name} ({s.topics.length} topics)
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {subjectSearchResults.topics.length > 0 && (
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-2">
                    Matching Sections, Doctrines & Topics ({subjectSearchResults.topics.length})
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
                    {subjectSearchResults.topics.slice(0, 16).map(({ subject, topic }) => (
                      <button
                        key={`${subject.id}-${topic.id}`}
                        type="button"
                        onClick={() => onSelectTopic(subject.slug, topic)}
                        className="text-left p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150 flex items-center justify-between gap-2 text-xs"
                      >
                        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {topic.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold shrink-0">
                          {subject.shortName}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        {/* High-Yield Quick Jump Chips */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> High-Yield Jumps:
          </span>
          {QUICK_JUMP_TARGETS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                const s = SUBJECTS.find((sub) => sub.slug === item.subject)
                const t = s?.topics.find((top) => top.id === item.topic)
                if (s && t) onSelectTopic(s.slug, t)
                else onSelectSubject(item.subject)
              }}
              className="text-xs px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150 shadow-2xs"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* 5. Four Curricular Library Wings (20 Legal Subjects) */}
      <LibraryWingsGrid
        onSelectSubject={onSelectSubject}
        onSelectTopic={onSelectTopic}
      />

      {/* 6. Official AIBE & State Judicial Services Weightage Matrix */}
      <AibeWeightageMatrix
        onSelectSubject={onSelectSubject}
        onSelectTool={onSelectTool}
      />

      {/* 7. Forensic Chamber & Practice Reference Tools Deck */}
      <section id="tools" className="space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
              <BookOpenCheck className="w-4 h-4" /> Practice Reference Tools
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white">
              Legal Study Aids & Forensic Chamber Utilities
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Interactive examination simulators, statutory concordance mappers, and reference databases.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
            {filteredTools.length} tools available
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`h-10 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelectTool(tool.slug)}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-left hover:border-blue-500/80 dark:hover:border-blue-500/80 transition-all duration-150 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                    <ToolGlyph name={tool.icon} className="w-5 h-5" />
                  </div>
                  {tool.badge ? (
                    <Badge variant="blue" className="text-[10px] font-black uppercase">
                      {tool.badge}
                    </Badge>
                  ) : null}
                </div>
                <h4 className="font-bold text-base text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-bold text-blue-700 dark:text-blue-300 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all duration-150">
                Launch Tool <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="font-bold text-slate-800 dark:text-slate-200 text-base">No tools match your search criteria</p>
            <button
              type="button"
              onClick={() => {
                onSearchChange('')
                onCategoryChange('all')
              }}
              className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              Reset Filters & View All Tools
            </button>
          </div>
        )}
      </section>

      {/* 8. The Sacred Student Career Covenant & Client-Side Privacy Guarantee */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 p-8 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              <HeartHandshake className="w-4 h-4" /> The Sacred Student Career Covenant
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
              We Work for Student Careers, University Degrees & Life Goals.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We never arbitrarily compress or drop syllabus topics. Every doctrine, capacity rule, specific wrong, defense, and statutory section is cataloged with 10-mark and 16-mark IRAC/ILAC blueprints so that you walk into every exam or courtroom completely prepared.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              100% Client-Side Privacy Architecture
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Zero practice data, mock scores, flashcard decks, or search queries leave your device. Everything executes strictly in your browser with zero telemetry. Free and open to every student, aspirant, and advocate.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[11px] font-semibold text-slate-500">
              <span>✓ No Account Required</span>
              <span>✓ No Tracking Cookies</span>
              <span>✓ Works Offline</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
