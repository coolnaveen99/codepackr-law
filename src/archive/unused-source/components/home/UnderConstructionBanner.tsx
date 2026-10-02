import { useState } from 'react'
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles, BookOpen, Library } from 'lucide-react'

/** Slim, authoritative Library Status & Daily Rollout Chip for CodePackr Law */
export function UnderConstructionBanner() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/20 backdrop-blur-xs p-3.5 sm:p-4 transition-all duration-200 shadow-2xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Library className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm">
            <span className="font-bold text-slate-950 dark:text-white">
              Digital Law Library
            </span>
            <span className="text-slate-400">·</span>
            <span className="font-semibold text-blue-700 dark:text-blue-300">
              3,552 topics across 20 subjects
            </span>
            <span className="text-slate-400 hidden md:inline">·</span>
            <span className="text-slate-600 dark:text-slate-400 hidden md:inline">
              Treatises &amp; practice modules expanding daily
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3 h-3" />
            100% Privacy First
          </span>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-1 rounded-lg hover:bg-white/60 dark:hover:bg-slate-800/60 transition min-h-[32px]"
          >
            <span>{expanded ? 'Less' : 'Details'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-blue-200/60 dark:border-blue-900/40 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100 mb-1">
              <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Sacred Student Covenant
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-normal text-[11px]">
              Zero syllabus omission. 3,552 topics registered across 20 Bar Council of India subjects with enacted wording, operative tests, and study blueprints.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Senior Counsel Standards
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-normal text-[11px]">
              Extracted case ratios, dual statutory illustrations, mandatory BSA 2023 evidentiary compliance, IRAC briefs, and written submissions.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Zero Data Egress
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-normal text-[11px]">
              Zero telemetry, zero user tracking. All MCQs, exam simulations, bookmarks, and search execute 100% in your local browser storage.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
