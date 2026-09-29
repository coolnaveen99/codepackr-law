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
          </div>
        </div>

        {/* Right Column: Hero Preview Cards */}
        <HeroPreviewCards
          onSelectTool={onSelectTool}
          onSelectSubject={onSelectSubject}
          onSelectTopic={onSelectTopic}
          visibleSlots={2}
          className="lg:col-span-5"
        />
      </div>

      {/* Decorative background glow matching Astro */}
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-rose-500/10 blur-3xl" />
    </section>
  )
}
