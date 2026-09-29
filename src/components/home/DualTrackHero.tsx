import { useState, useEffect } from 'react'
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Check,
  Search,
  Sparkles,
  Lock,
  ArrowLeftRight,
} from 'lucide-react'
import { TOTAL_TOPICS_COUNT } from '../../data/liveSubjects'
import { ALL_JUDGMENTS } from '../../data/judgments'
import { type LawTopic } from '../../data/subjects'
import { HeroPreviewCards } from './HeroPreviewCards'

interface DualTrackHeroProps {
  onOpenSubjects: () => void
  onOpenCaseLaw?: () => void
  onSelectTool: (slug: string) => void
  onSelectSubject?: (slug: string) => void
  onSelectTopic?: (subjectSlug: string, topic: LawTopic) => void
  onFocusSearch?: () => void
}

const ROTATING_SUBLINES = [
  'Instant statutory concordance: BNS ↔ IPC, BNSS ↔ CrPC, BSA ↔ IEA...',
  'Search 290+ Supreme Court judgments with extracted case ratios...',
  'Master AIBE & Judicial Services Mains with structured IRAC briefs...',
  'Explore all 20 curricular subjects with zero topic omission...',
  'Mandatory BSA evidentiary burdens & Section 63 digital certification...',
  'Forensic trial roadmaps, limitation periods & courtroom drafting formats...',
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
  onOpenCaseLaw,
  onSelectTool,
  onSelectSubject,
  onSelectTopic,
  onFocusSearch,
}: DualTrackHeroProps) {
  const [activeTrack, setActiveTrack] = useState<'student' | 'advocate'>('student')
  const [sublineIndex, setSublineIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSublineIndex((prev) => (prev + 1) % ROTATING_SUBLINES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4 pt-0">
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-white via-blue-500/[0.04] to-rose-500/[0.07] dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-950 shadow-lg shadow-blue-500/[0.03]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-rose-500 to-blue-600" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 p-5 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
            <div className="col-span-1 lg:col-span-7 w-full max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200 mb-3 shadow-xs backdrop-blur-xs">
                <Lock className="w-3.5 h-3.5 text-blue-700 dark:text-blue-300 animate-pulse" />
                <span>100% Client-Side Execution • Senior Counsel &amp; PhD Standard</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15] mb-3">
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

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed max-w-xl">
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
            </div>

            <HeroPreviewCards
              onSelectTool={onSelectTool}
              onSelectSubject={onSelectSubject}
              onSelectTopic={onSelectTopic}
              visibleSlots={3}
            />
          </div>
        </div>
      </section>

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

        <div className="p-5 sm:p-6">
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
  )
}
