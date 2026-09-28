import React from 'react'
import {
  ArrowLeftRight,
  Scale,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  FileText,
  ArrowRight,
} from 'lucide-react'

interface FeatureBannerCardsProps {
  onSelectTool: (slug: string) => void
  onOpenSubjects: () => void
  onSelectSubject: (slug: string) => void
  onOpenCaseLaw: () => void
}

interface BannerCardItem {
  id: string
  title: string
  description: string
  badge: string
  badgeTone: 'seal' | 'teal' | 'purple' | 'blue' | 'amber' | 'emerald'
  icon: React.ComponentType<{ className?: string }>
  cta: string
  onClick: () => void
}

export const FeatureBannerCards: React.FC<FeatureBannerCardsProps> = ({
  onSelectTool,
  onOpenSubjects,
  onSelectSubject,
  onOpenCaseLaw,
}) => {
  const cards: BannerCardItem[] = [
    {
      id: 'sanhitas-mapper',
      title: 'Map New Criminal Sanhitas',
      description: 'Instant penal, procedural & evidentiary concordance between BNS ↔ IPC, BNSS ↔ CrPC, and BSA ↔ IEA with new offence provisos.',
      badge: '2024 Transition',
      badgeTone: 'seal',
      icon: ArrowLeftRight,
      cta: 'Open Sanhita Mapper',
      onClick: () => onSelectTool('bns-ipc-mapper'),
    },
    {
      id: 'landmark-judgments',
      title: 'Study Landmark SC Judgments',
      description: '290+ Supreme Court rulings with bench strength, facts, issues, ratio decidendi, and courtroom arguments ready for study and citation.',
      badge: '290+ Ratios',
      badgeTone: 'purple',
      icon: Scale,
      cta: 'Explore Case Law',
      onClick: onOpenCaseLaw,
    },
    {
      id: 'all-subjects',
      title: 'Explore All 20 Curriculum Subjects',
      description: '3,142 registered topics across Constitution, CPC, Criminal, Commercial, Family, and Allied Statutes with statutory deconstruction.',
      badge: 'Zero Topic Omission',
      badgeTone: 'blue',
      icon: BookOpen,
      cta: 'Browse 20 Subjects',
      onClick: onOpenSubjects,
    },
    {
      id: 'aibe-prep',
      title: 'AIBE & Judicial Services Prep',
      description: 'Bar Council blueprint weightage matrix, IRAC answer structure, timed MCQ mocks, and negative marking analytics for aspirants.',
      badge: 'Exam Simulator',
      badgeTone: 'emerald',
      icon: GraduationCap,
      cta: 'Start Mock Exam',
      onClick: () => onSelectTool('aibe-mcq'),
    },
    {
      id: 'bsa-proof',
      title: 'Evidentiary Proof & BSA S. 63',
      description: 'Mandatory proving ingredients, electronic records Section 63 compliance checklists, and burden of proof standards under ss. 104–106.',
      badge: 'Evidence Rules',
      badgeTone: 'amber',
      icon: ShieldCheck,
      cta: 'View Evidence Standard',
      onClick: () => onSelectTool('bsa-iea-mapper'),
    },
    {
      id: 'courtroom-drafting',
      title: 'Chamber Pleading Skeletons',
      description: 'Authentic courtroom drafting formats: High Court Art. 226 Writs, Order VII Plaints, Order VIII Written Statements, and Bail Petitions.',
      badge: 'Chamber Formats',
      badgeTone: 'teal',
      icon: FileText,
      cta: 'Open Pleading Skeletons',
      onClick: () => onSelectSubject('petition-formats'),
    },
  ]

  const getBadgeClass = (tone: BannerCardItem['badgeTone']) => {
    switch (tone) {
      case 'seal':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
      case 'teal':
        return 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20'
      case 'purple':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20'
      case 'blue':
        return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20'
      case 'amber':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
      default:
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
    }
  }

  return (
    <section id="signature-planning-banners" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Practice &amp; Study Workflows
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
            Start with an authoritative workflow
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Dedicated client-side tools and catalogs engineered for trial advocates, judicial aspirants, and law students.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, idx) => {
          const Icon = card.icon
          return (
            <button
              key={card.id}
              type="button"
              style={{ animationDelay: `${idx * 80}ms` }}
              onClick={card.onClick}
              className="animate-fade-in-up group flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-transparent hover:border-l-blue-600 bg-white dark:bg-slate-900 p-5 text-left transition-all duration-[220ms] ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-[220ms] ease-out shadow-xs">
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors truncate">
                    {card.title}
                  </h3>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border shrink-0 ${getBadgeClass(
                      card.badgeTone
                    )}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
                  {card.description}
                </p>

                <div className="flex items-center text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200 gap-1">
                  <span>{card.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
