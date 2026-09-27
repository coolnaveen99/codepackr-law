import { BookOpen, ShieldCheck, Scale, Award, FileText, Landmark } from 'lucide-react'
import { TOTAL_TOPICS_COUNT, LIVE_SUBJECTS } from '../../data/liveSubjects'
import { ALL_JUDGMENTS } from '../../data/judgments'

function estimateDepth() {
  let notes = 0
  for (const s of LIVE_SUBJECTS) {
    for (const t of s.topics) {
      if (t.hasNotes !== false) notes++
    }
  }
  return notes
}

interface LibraryStatsBarProps {
  onOpenCaseLaw?: () => void
}

export function LibraryStatsBar({ onOpenCaseLaw }: LibraryStatsBarProps = {}) {
  const notes = estimateDepth()
  const stats = [
    { icon: BookOpen, value: '20', label: 'Core Subjects', subtext: 'BCI & Judiciary Standard' },
    { icon: Scale, value: TOTAL_TOPICS_COUNT.toLocaleString(), label: 'Clickable Topics', subtext: 'Every Section & Order Cataloged' },
    { icon: FileText, value: notes.toLocaleString(), label: 'Catalog Notes', subtext: 'Treatises expanding (not 100% yet)' },
    {
      icon: Landmark,
      value: ALL_JUDGMENTS.length.toLocaleString(),
      label: 'Landmark Judgments',
      subtext: 'Extracted SC Ratios & Precedents',
      onClick: onOpenCaseLaw,
    },
    { icon: Award, value: '2024 Acts', label: 'Sanhitas Transition', subtext: 'BNS, BNSS & BSA Concordance' },
    { icon: ShieldCheck, value: '100%', label: 'Client-Side Privacy', subtext: 'Zero Data Egress / Zero Tracking' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            onClick={stat.onClick}
            role={stat.onClick ? 'button' : undefined}
            tabIndex={stat.onClick ? 0 : undefined}
            onKeyDown={
              stat.onClick
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      stat.onClick?.()
                    }
                  }
                : undefined
            }
            className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all duration-150 hover:border-blue-300 dark:hover:border-blue-800 ${
              stat.onClick
                ? 'cursor-pointer hover:shadow-md hover:border-blue-500/80 dark:hover:border-blue-500/80 group'
                : ''
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.label}
              </span>
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">{stat.subtext}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
