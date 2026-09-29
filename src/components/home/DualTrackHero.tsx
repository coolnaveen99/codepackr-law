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
    <div className="space-y-6 pt-2">
      {/* Hero Section — Prestige Gradient Container with Floating Preview Cards */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-white via-blue-500/[0.04] to-rose-500/[0.07] dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-950 shadow-lg shadow-blue-500/[0.03]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-rose-500 to-blue-600" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg
            className="absolute -right-12 top-0 w-[580px] h-full text-blue-500/10 dark:text-blue-400/[0.07]"
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 380C120 360 220 280 320 180C420 80 480 20 500 0"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            <path
              d="M50 400C160 370 260 270 370 150C440 70 490 10 500 0"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="320" cy="180" r="6" fill="currentColor" />
            <circle cx="420" cy="80" r="5" fill="currentColor" />
          </svg>
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="col-span-1 lg:col-span-7 w-full max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200 mb-6 shadow-xs backdrop-blur-xs">
                <Lock className="w-3.5 h-3.5 text-blue-700 dark:text-blue-300 animate-pulse" />
                <span>100% Client-Side Execution • Senior Counsel &amp; PhD Standard</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-5">
                The Authoritative Digital Law Library,<br />
                Built for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-[#c23b63] to-blue-600 dark:from-blue-300 dark:via-rose-300 dark:to-blue-400">
                  Judicial Aspirants &amp; Senior Advocates.
                </span>
              </h1>

              <div className="h-8 flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-300 mb-4 min-w-0">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span key={sublineIndex} className="animate-fade-in-up inline-block truncate">
                  {ROTATING_SUBLINES[sublineIndex]}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
                Engineered for <strong className="text-slate-900 dark:text-white">University LL.B/LL.M</strong>,{' '}
                <strong className="text-blue-700 dark:text-blue-300">AIBE</strong>, and{' '}
                <strong className="text-slate-900 dark:text-white">State Judicial Services Mains</strong> preparation, with forensic trial roadmaps, evidentiary burdens under BSA, and courtroom drafting formats for chamber practice.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenSubjects}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer inline-flex items-center justify-center gap-2 group text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore All 20 Subjects ({TOTAL_TOPICS_COUNT.toLocaleString()} Topics)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onFocusSearch) onFocusSearch()
                    else {
                      const el = document.querySelector('input[type="search"]') as HTMLInputElement
                      el?.focus()
                    }
                  }}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-500/70 hover:bg-blue-50/20 hover:scale-[1.01] transition-all duration-200 ease-out flex items-center justify-center gap-2.5 shadow-xs cursor-pointer text-sm"
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
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <ScaleIcon className="w-3.5 h-3.5 text-blue-600" />
                    <span>Case Law ({ALL_JUDGMENTS.length} Judgments)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onSelectTool('bns-ipc-mapper')}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
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
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
              activeTrack === 'student'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Track A: Students &amp; Judicial Aspirants</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTrack('advocate')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
              activeTrack === 'advocate'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Track B: Advocates &amp; Chamber Practice</span>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTrack === 'student' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <GraduationCap className="w-4 h-4" /> Syllabus &amp; Exam Coverage
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BCI / AIBE / Judiciary Syllabus Map</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every BCI core subject, AIBE paper weightage, and State Judiciary Mains doctrine is cataloged — so you never miss a section, article, or order on exam day.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Check className="w-4 h-4" /> IRAC Study Structure
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Issue → Rule → Application → Conclusion</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Structured study notes with ingredients, dual illustrations, and extracted ratios — built for university answers and judicial service writing.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <BookOpen className="w-4 h-4" /> Zero Topic Omission
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Full Catalog, Not a Shortlist</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cross-referenced against Bar Council curricula. Click any article, section, or Order and open a real learning page — not a bare-act dump.
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
                  Instant checkpoints for territorial, pecuniary, and subject-matter jurisdiction before Magistrates, District Courts, Tribunals, and High Courts.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <ShieldCheck className="w-4 h-4" /> Evidentiary Standard
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BSA Proof &amp; S. 63 Certificate</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Discharge burden under Section 104/106 BSA, with statutory checklists for digital and electronic records under Section 63 BSA.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <ArrowRight className="w-4 h-4" /> Courtroom Drafting Formats
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Ready Chamber Pleading Skeletons</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Standard High Court writ petitions (Art 226/32), Order VII Plaints, Order VIII Written Statements, Bail Applications, and S. 138 NI notices.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ScaleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}
