import { useState, useEffect } from 'react'
import {
  BookOpen,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { TOTAL_TOPICS_COUNT } from '../../data/liveSubjects'
import { type LawTopic } from '../../data/subjects'
import { HeroPreviewCards } from './HeroPreviewCards'

interface DualTrackHeroProps {
  onOpenSubjects: () => void
  onSelectTool: (slug: string) => void
  onSelectSubject?: (slug: string) => void
  onSelectTopic?: (subjectSlug: string, topic: LawTopic) => void
  onFocusSearch?: () => void
}

const ROTATING_SUBLINES = [
  'Statutory concordance: BNS ↔ IPC, BNSS ↔ CrPC, BSA ↔ IEA',
  '290+ Supreme Court judgments with extracted case ratios',
  'Structured IRAC briefs for AIBE & Judicial Services Mains',
  'All 20 curricular subjects cataloged with zero topic omission',
  'Evidentiary burdens under ss. 104–106 & Section 63 BSA certificate',
  'Procedural trial roadmaps, limitation periods & courtroom drafting',
]

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}

export function DualTrackHero({
  onOpenSubjects,
  onSelectTool,
  onSelectSubject,
  onSelectTopic,
  onFocusSearch,
}: DualTrackHeroProps) {
  const [sublineIndex, setSublineIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSublineIndex((prev) => (prev + 1) % ROTATING_SUBLINES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
<<<<<<< Updated upstream
    <div className="space-y-3 pt-0">
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-white via-blue-500/[0.04] to-rose-500/[0.07] dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-950 shadow-lg shadow-blue-500/[0.03]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-rose-500 to-blue-600" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 p-4 sm:p-5 lg:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
            <div className="col-span-1 lg:col-span-7 w-full max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200 mb-3 shadow-xs backdrop-blur-xs">
                <Lock className="w-3.5 h-3.5 text-blue-700 dark:text-blue-300 animate-pulse" />
                <span>100% Client-Side Execution • Senior Counsel &amp; PhD Standard</span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15] mb-2">
                The Authoritative Digital Law Library,<br />
                Built for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-[#c23b63] to-blue-600 dark:from-blue-300 dark:via-rose-300 dark:to-blue-400">
                  Judicial Aspirants &amp; Senior Advocates.
                </span>
              </h1>

              <div className="h-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 min-w-0">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span key={sublineIndex} className="animate-fade-in-up inline-block truncate">
                  {ROTATING_SUBLINES[sublineIndex]}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed max-w-xl line-clamp-2">
                Engineered for <strong className="text-slate-900 dark:text-white">University LL.B/LL.M</strong>,{' '}
                <strong className="text-blue-700 dark:text-blue-300">AIBE</strong>, and{' '}
                <strong className="text-slate-900 dark:text-white">State Judicial Services Mains</strong> preparation, with forensic trial roadmaps, evidentiary burdens under BSA, and courtroom drafting formats for chamber practice.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenSubjects}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer inline-flex items-center justify-center gap-2 group text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore All 20 Subjects ({TOTAL_TOPICS_COUNT.toLocaleString()} Topics)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onFocusSearch) onFocusSearch()
                    else {
                      const el = document.getElementById('omni-search-input') as HTMLInputElement | null
                      el?.focus()
                    }
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-500/70 hover:bg-blue-50/20 hover:scale-[1.01] transition-all duration-200 ease-out flex items-center justify-center gap-2.5 shadow-xs cursor-pointer text-sm"
                >
                  <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Omni-Search</span>
                  <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {typeof navigator !== 'undefined' && navigator.userAgent.includes('Mac') ? '⌘' : 'Ctrl'} K
                  </kbd>
                </button>

                {onOpenCaseLaw && (
                  <button
                    type="button"
                    onClick={onOpenCaseLaw}
                    className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl font-semibold border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <ScaleIcon className="w-3.5 h-3.5 text-blue-600" />
                    <span>Case Law ({ALL_JUDGMENTS.length} Judgments)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onSelectTool('bns-ipc-mapper')}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl font-semibold border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5 text-blue-600" />
                  <span>Sanhitha Mapper</span>
                </button>
              </div>
=======
    <section className="relative overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-50/80 via-white to-rose-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 p-5 sm:p-7 lg:p-8 shadow-card">
      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Headlines, Dynamic Rotating Subline, Value Props & CTAs */}
        <div className="space-y-3.5 sm:space-y-4 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold tracking-wide text-blue-800 dark:text-blue-200">
            <Sparkles className="size-3.5 text-blue-600 dark:text-blue-400" />
            <span>100% Client-Side Privacy • Senior Counsel &amp; PhD Standard</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            CodePackr Law
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-rose-600 to-blue-600 dark:from-blue-300 dark:via-rose-300 dark:to-blue-400 text-xl sm:text-3xl lg:text-[2.1rem] mt-1 font-bold">
              Digital Law Library &amp; Practice Reference
            </span>
          </h1>

          {/* Dynamic Rotating Sub-line */}
          <div className="h-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 min-w-0">
            <span key={sublineIndex} className="animate-fade-in-up inline-block truncate">
              {ROTATING_SUBLINES[sublineIndex]}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            Engineered for University LL.B/LL.M, AIBE, and State Judicial Services Mains preparation with authoritative statutory deconstruction, extracted case ratios, mandatory BSA 2023 evidentiary compliance, and authentic courtroom drafting formats.
          </p>

          {/* Value Props Strip */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-1.5 rounded-lg bg-white/85 dark:bg-slate-800/85 border border-slate-200/90 dark:border-slate-700 px-2.5 py-1 shadow-2xs">
              <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>3,552 Bare Act Sections</span>
>>>>>>> Stashed changes
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-white/85 dark:bg-slate-800/85 border border-slate-200/90 dark:border-slate-700 px-2.5 py-1 shadow-2xs">
              <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>290+ Landmark SC Ratios</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-white/85 dark:bg-slate-800/85 border border-slate-200/90 dark:border-slate-700 px-2.5 py-1 shadow-2xs">
              <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>100% Client-Side Privacy</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-white/85 dark:bg-slate-800/85 border border-slate-200/90 dark:border-slate-700 px-2.5 py-1 shadow-2xs">
              <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>All 20 Curricular Subjects</span>
            </div>
          </div>

<<<<<<< Updated upstream
            <HeroPreviewCards
              onSelectTool={onSelectTool}
              onSelectSubject={onSelectSubject}
              onSelectTopic={onSelectTopic}
              visibleSlots={2}
            />
=======
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenSubjects}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <BookOpen className="size-4" />
              <span>Explore All 20 Subjects ({TOTAL_TOPICS_COUNT.toLocaleString()})</span>
              <ArrowRight className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                if (onFocusSearch) onFocusSearch()
                else {
                  const el = document.getElementById('omni-search-input') as HTMLInputElement
                  el?.focus()
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 active:scale-95 cursor-pointer"
            >
              <Search className="size-4 text-blue-600 dark:text-blue-400" />
              <span>Omni-Search</span>
              <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500">
                {typeof navigator !== 'undefined' && navigator.userAgent.includes('Mac') ? '⌘' : 'Ctrl'} K
              </kbd>
            </button>
>>>>>>> Stashed changes
          </div>
        </div>

<<<<<<< Updated upstream
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-sm overflow-hidden">
        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 p-2 bg-slate-50/60 dark:bg-slate-950/60">
          <button
            type="button"
            onClick={() => setActiveTrack('student')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              activeTrack === 'student'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Student Track
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack('advocate')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              activeTrack === 'advocate'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Advocate Track
            </span>
          </button>
        </div>

        <div className="p-3 sm:p-4">
          {activeTrack === 'student' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <GraduationCap className="w-4 h-4" /> Syllabus &amp; Exam Coverage
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BCI / AIBE / Judiciary Syllabus Map</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Full curriculum alignment across 20 subjects so nothing examinable is left off the map.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Check className="w-4 h-4" /> IRAC Study Structure
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Issue → Rule → Application → Conclusion</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Topic notes structured for answer-writing and viva, not loose commentary.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <BookOpen className="w-4 h-4" /> Zero Topic Omission
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Full Catalog, Not a Shortlist</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {TOTAL_TOPICS_COUNT.toLocaleString()} registered topics with enacted wording and study blueprints.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Briefcase className="w-4 h-4" /> Procedural Roadmaps
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Jurisdiction &amp; Forum Checkpoints</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Chamber-ready checkpoints for forum, limitation, and relief selection.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <ShieldCheck className="w-4 h-4" /> Evidentiary Standard
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BSA Proof &amp; S. 63 Certificate</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Proving standards and digital evidence burdens under the new Sanhitas.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Sparkles className="w-4 h-4" /> Drafting Practice
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Notices, Bail &amp; Checklists</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Educational skeletons and case-file checklists for chamber workflows.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
=======
        {/* Right Column: Hero Preview Cards */}
        <HeroPreviewCards
          onSelectTool={onSelectTool}
          onSelectSubject={onSelectSubject}
          onSelectTopic={onSelectTopic}
          className="lg:col-span-5"
        />
      </div>

      {/* Decorative background glow matching Astro */}
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-rose-500/10 blur-3xl" />
    </section>
>>>>>>> Stashed changes
  )
}
