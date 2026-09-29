import React from 'react'
import {
  ArrowLeftRight,
  Scale,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText,
  Lock,
  HeartHandshake,
} from 'lucide-react'

interface FeatureBannerCardsProps {
  onSelectTool: (slug: string) => void
  onOpenSubjects: () => void
  onSelectSubject?: (slug: string) => void
  onOpenCaseLaw: () => void
}

/**
 * Flagship Feature Card — Matches codepackr-astro Section 2 (Featured Highlight Card)
 */
export const FlagshipFeatureCard: React.FC<FeatureBannerCardsProps> = ({
  onSelectTool,
}) => {
  return (
    <section className="rounded-2xl border border-blue-200 dark:border-blue-900/80 bg-gradient-to-r from-blue-50/80 via-white to-rose-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
            <ArrowLeftRight className="size-4 text-blue-600 dark:text-blue-400" />
            <span>Flagship Transition Engine • In Force July 2024</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            New Criminal Sanhitas Concordance Engine (BNS · BNSS · BSA)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Instant bidirectional mapping between Bharatiya Nyaya Sanhita ↔ IPC, BNSS ↔ CrPC, and BSA ↔ Evidence Act. Access proving ingredients, limitation periods, comparative concordance tables, and electronic record Section 63 certificate compliance.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSelectTool('bns-ipc-mapper')}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 font-bold text-white shadow-sm hover:shadow-md active:scale-95 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <span>Open Sanhita Mapper</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

/**
 * Popular Quick Strip — Matches codepackr-astro Section 3 (4-Card Popular Strip)
 */
export const PopularToolsStrip: React.FC<FeatureBannerCardsProps> = ({
  onSelectTool,
  onOpenSubjects,
  onOpenCaseLaw,
}) => {
  const items = [
    {
      id: 'sanhita-mapper',
      title: 'BNS ↔ IPC Sanhita Mapper',
      description: 'Penal concordance, mob lynching, organised crime & new criminal provisos.',
      badge: '2024 Transition',
      badgeColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white',
      icon: ArrowLeftRight,
      cta: 'Launch Mapper',
      onClick: () => onSelectTool('bns-ipc-mapper'),
    },
    {
      id: 'case-law',
      title: 'Landmark SC Case Law',
      description: '290+ Supreme Court rulings with extracted ratio decidendi, facts & bench strength.',
      badge: '290+ SC Ratios',
      badgeColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white',
      icon: Scale,
      cta: 'Explore Case Law',
      onClick: onOpenCaseLaw,
    },
    {
      id: 'aibe-mock',
      title: 'AIBE & Judiciary Simulator',
      description: 'Bar Council blueprint weightage, timed mock tests & negative marking analytics.',
      badge: 'Exam Simulator',
      badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      iconBg: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white',
      icon: GraduationCap,
      cta: 'Start Mock Exam',
      onClick: () => onSelectTool('aibe-mcq'),
    },
    {
      id: 'all-subjects',
      title: '20 Curricular Bare Acts',
      description: '3,552 cataloged sections with proving ingredients, case ratios & drafting formats.',
      badge: 'Zero Topic Omission',
      badgeColor: 'bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      iconBg: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 group-hover:bg-amber-600 group-hover:text-white',
      icon: BookOpen,
      cta: 'Browse 20 Subjects',
      onClick: onOpenSubjects,
    },
  ]

  return (
    <section className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Most Popular Practice Tools
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Instant entry points to high-frequency study aids, mappers, and precedents
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((tool) => {
          const Icon = tool.icon
          return (
            <div
              key={tool.id}
              onClick={tool.onClick}
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl transition-all duration-200 ${tool.iconBg}`}
                  >
                    <Icon className="size-5.5" />
                  </span>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 leading-snug">
                  {tool.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">
                <span>{tool.cta}</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/**
 * Chamber Standards & Technical Depth — Matches codepackr-astro Section 5 (6-Card Value Grid)
 */
export const ChamberStandardsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Senior Counsel & PhD Scholarship',
      description: 'Statutory provisions deconstructed with historical genesis, jurisprudential roots, extracted ratio decidendi, and courtroom application.',
      icon: Scale,
    },
    {
      title: '100% Client-Side Privacy Guarantee',
      description: 'Zero data egress. All exam simulators, mock score calculations, flashcards, and search queries execute strictly inside your local browser.',
      icon: Lock,
    },
    {
      title: 'The Sacred Student Career Covenant',
      description: 'Zero arbitrary topic omissions. Every BCI standard syllabus topic, state judicial exam question, and doctrine is cataloged with dedicated study notes.',
      icon: HeartHandshake,
    },
    {
      title: 'Mandatory BSA Evidentiary Burdens',
      description: 'Clear evidentiary requirements under Sections 104–106 and mandatory digital certificate checklists under Section 63 BSA for electronic records.',
      icon: ShieldCheck,
    },
    {
      title: 'Structured IRAC Examination Model',
      description: 'Issue → Rule → Application → Conclusion briefing standard for university LL.B/LL.M exams, AIBE, and Judicial Services Mains answer writing.',
      icon: CheckCircle2,
    },
    {
      title: 'Authentic Courtroom Drafting Formats',
      description: 'Ready-to-use chamber pleading skeletons: High Court Art. 226/32 Writs, Order VII Plaints, Order VIII Written Statements, and Bail Petitions.',
      icon: FileText,
    },
  ]

  return (
    <section className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
          <ShieldCheck className="size-4" />
          <span>Technical Depth &amp; Chamber Standards</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
          Engineered for Rigorous Legal Practice &amp; Academia
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Built to senior counsel benchmarks combining statutory precision with transparent, client-side tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <div
              key={pillar.title}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 space-y-2 shadow-2xs"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                <Icon className="size-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{pillar.title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// Keep backward compatibility export
export const FeatureBannerCards = PopularToolsStrip
