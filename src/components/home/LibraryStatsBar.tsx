import { BookOpen, ShieldCheck, Scale, Award, Sparkles } from 'lucide-react'

export function LibraryStatsBar() {
  const stats = [
    {
      icon: BookOpen,
      value: '20',
      label: 'Core Subjects',
      subtext: 'BCI & Judiciary Standard',
    },
    {
      icon: Scale,
      value: '2,078',
      label: 'Clickable Topics',
      subtext: 'Every Section & Order Cataloged',
    },
    {
      icon: Sparkles,
      value: '10M & 16M',
      label: 'Dual Answer Models',
      subtext: 'IRAC / ILAC with Scoring Rubrics',
    },
    {
      icon: Award,
      value: '2024 Acts',
      label: 'Sanhitas Transition',
      subtext: 'BNS, BNSS & BSA Concordance',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Client-Side Privacy',
      subtext: 'Zero Data Egress / Zero Tracking',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all duration-150 hover:border-blue-300 dark:hover:border-blue-800 ${
              idx === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                {stat.subtext}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
