import { useState } from 'react'
import { Construction, CheckCircle2, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react'
import { TOTAL_TOPICS_COUNT } from '../../data/liveSubjects'

/** High-impact, authoritative Under Construction / Rollout Banner for CodePackr Law */
export function UnderConstructionBanner() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative overflow-hidden rounded-3xl border-3 border-amber-400 dark:border-amber-500 shadow-xl shadow-amber-500/10 bg-amber-50/90 dark:bg-slate-900/95 backdrop-blur-xs transition-all duration-200"
    >
      {/* Top Caution Ribbon */}
      <div
        className="h-4 sm:h-5 w-full opacity-90"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #f59e0b 0 16px, #0f172a 16px 32px)',
        }}
        aria-hidden
      />

      <div className="px-5 sm:px-8 py-6 sm:py-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 dark:bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
              <Construction className="w-6 h-6 animate-pulse" aria-hidden />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-black uppercase tracking-widest bg-amber-200 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                Phase-by-Phase Treatise Rollout
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-950 dark:text-amber-50 uppercase mt-0.5">
                Site Under Active Construction
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700/60 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {TOTAL_TOPICS_COUNT.toLocaleString()} Provisions Active
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700/60 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              10M & 16M Answers Live
            </span>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-colors duration-150"
            >
              {expanded ? (
                <>
                  Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Rollout Details <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
          <strong className="font-bold text-slate-900 dark:text-white">CodePackr Law</strong> is under active development by our legal research chamber. Every one of the <strong>20 legal subjects</strong> is structured to the Bar Council of India standard with <strong>{TOTAL_TOPICS_COUNT.toLocaleString()} active provisions</strong>, structured IRAC case briefs, comprehensive written submissions, and chamber practice blueprints. Book-chapter treatises with full case ratios are expanding daily.
        </p>

        {expanded && (
          <div className="pt-4 border-t border-amber-200/80 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 mb-1">
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Zero Topic Omission
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-normal">
                We work for student careers. Every single syllabus doctrine, defense, and statutory section is cataloged. No topic is omitted.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 mb-1">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Dual-Track Depth
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-normal">
                Every clicked topic delivers both Track A (University / AIBE / Judicial Mains) and Track B (Courtroom / Chamber Practice) guidance.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                100% Privacy First
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-normal">
                Zero telemetry, zero user tracking. All MCQs, flashcards, timers, and searches run entirely client-side in your browser.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Caution Ribbon */}
      <div
        className="h-2 sm:h-3 w-full opacity-90"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #f59e0b 0 16px, #0f172a 16px 32px)',
        }}
        aria-hidden
      />
    </div>
  )
}
