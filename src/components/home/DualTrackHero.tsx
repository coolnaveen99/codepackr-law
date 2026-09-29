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
      <section className="relative overflow-hidden rounded-3xl border border-rose-500/20 bg-gradient-to-br from-white via-rose-500/[0.04] to-slate-100/80 dark:from-slate-900 dark:via-rose-950/20 dark:to-slate-950 shadow-lg">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-800 via-rose-500 to-slate-700" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-600/10 blur-3xl" />
          <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-slate-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="w-full max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-200 mb-6 shadow-xs">
              <Lock className="w-3.5 h-3.5 text-rose-700 dark:text-rose-300" />
              <span>100% Client-Side Execution • Senior Counsel & PhD Standard</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-5">
              The Authoritative Digital Law Library,<br />
              Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-[#c23b63] to-slate-700">
                Judicial Aspirants & Senior Advocates.
              </span>
            </h1>

            <div className="h-8 flex items-center gap-2 text-sm sm:text-base font-semibold text-rose-700 dark:text-rose-300 mb-4 min-w-0">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span key={sublineIndex} className="inline-block truncate">
                {ROTATING_SUBLINES[sublineIndex]}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
              Engineered for <strong className="text-slate-900 dark:text-white">University LL.B/LL.M</strong>,{' '}
              <strong className="text-rose-700 dark:text-rose-300">AIBE</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white">State Judicial Services Mains</strong> preparation, with forensic trial roadmaps, evidentiary burdens under BSA, and courtroom drafting formats for chamber practice.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenSubjects}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-rose-700 hover:bg-rose-800 shadow-lg shadow-rose-700/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2 group text-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore All 20 Subjects ({TOTAL_TOPICS_COUNT.toLocaleString()} Topics)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-rose-500/70 transition-all flex items-center justify-center gap-2.5 shadow-xs cursor-pointer text-sm"
              >
                <Search className="w-4 h-4 text-rose-600" />
                <span>Omni-Search</span>
                <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-500">
                  Ctrl K
                </kbd>
              </button>

              {onOpenCaseLaw && (
                <button
                  type="button"
                  onClick={onOpenCaseLaw}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold border border-rose-200 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 hover:bg-rose-100 transition-colors text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <ScaleIcon className="w-3.5 h-3.5 text-rose-600" />
                  <span>Case Law ({ALL_JUDGMENTS.length} Judgments)</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onSelectTool('bns-ipc-mapper')}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold border border-rose-200 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 hover:bg-rose-100 transition-colors text-xs sm:text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <ArrowLeftRight className="w-3.5 h-3.5 text-rose-600" />
                <span>Sanhitha Mapper</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-sm overflow-hidden">
        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 p-2 bg-slate-50/60 dark:bg-slate-950/60">
          <button
            type="button"
            onClick={() => setActiveTrack('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTrack === 'student'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Track A: Students & Judicial Aspirants</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTrack('advocate')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTrack === 'advocate'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Track B: Advocates & Chamber Practice</span>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTrack === 'student' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                  <GraduationCap className="w-4 h-4" /> Syllabus & Exam Coverage
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BCI / AIBE / Judiciary Syllabus Map</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every BCI core subject, AIBE paper weightage, and State Judiciary Mains doctrine is cataloged — so you never miss a section, article, or order on exam day.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                  <Check className="w-4 h-4" /> IRAC Study Structure
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Issue → Rule → Application → Conclusion</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Structured study notes with ingredients, dual illustrations, and extracted ratios — built for university answers and judicial service writing.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
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
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                  <Briefcase className="w-4 h-4" /> Procedural Roadmaps
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Jurisdiction & Forum Checkpoints</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instant checkpoints for territorial, pecuniary, and subject-matter jurisdiction before Magistrates, District Courts, Tribunals, and High Courts.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                  <ShieldCheck className="w-4 h-4" /> Evidentiary Standard
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BSA Proof & S. 63 Certificate</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Discharge burden under Section 104/106 BSA, with statutory checklists for digital and electronic records under Section 63 BSA.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
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
