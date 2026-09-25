import { useState } from 'react'
import { BookOpen, GraduationCap, Briefcase, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react'
import { TOTAL_TOPICS_COUNT } from '../../data/liveSubjects'

interface DualTrackHeroProps {
  onOpenSubjects: () => void
}

export function DualTrackHero({ onOpenSubjects }: DualTrackHeroProps) {
  const [activeTrack, setActiveTrack] = useState<'student' | 'advocate'>('student')

  return (
    <section className="space-y-6 pt-2">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 shadow-xs">
          <ShieldCheck className="w-4 h-4" />
          Senior Counsel & PhD in Jurisprudence Standard
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
          The Authoritative Digital Law Library & Practice Reference.
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Engineered for <strong className="text-slate-900 dark:text-white font-bold">University LL.B/LL.M</strong>,{' '}
          <strong className="text-blue-700 dark:text-blue-300 font-bold">AIBE</strong>, and{' '}
          <strong className="text-slate-900 dark:text-white font-bold">State Judicial Services Mains</strong> preparation,
          with forensic trial roadmaps and drafting formats for chamber practice.
        </p>

        {/* CTA Actions */}
        <div className="flex items-center gap-3 flex-wrap pt-2">
          <button
            type="button"
            onClick={onOpenSubjects}
            className="inline-flex items-center gap-2.5 h-12 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/25 active:scale-[0.98] transition-all duration-150"
          >
            <BookOpen className="w-4 h-4" />
            Explore All 20 Subjects ({TOTAL_TOPICS_COUNT.toLocaleString()} Topics)
          </button>
          <a
            href="#tools"
            className="inline-flex items-center gap-2 h-12 px-5 rounded-2xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 transition-colors duration-150"
          >
            Practice Tools & Mappers <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Interactive Dual-Track Showcase Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-sm overflow-hidden">
        {/* Track Toggle Header */}
        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 p-2 bg-slate-50/60 dark:bg-slate-950/60">
          <button
            type="button"
            onClick={() => setActiveTrack('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-150 ${
              activeTrack === 'student'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Track A: Students & Judicial Aspirants</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTrack('advocate')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-150 ${
              activeTrack === 'advocate'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Track B: Advocates & Chamber Practice</span>
          </button>
        </div>

        {/* Track Content Body */}
        <div className="p-6 sm:p-8">
          {activeTrack === 'student' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Sparkles className="w-4 h-4" /> Chamber Briefs &amp; Written Arguments
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">IRAC / ILAC Doctrinal Structure</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every section and doctrine includes ready-to-use case briefs and courtroom written submissions with legislative intent, proving ingredients, and extracted case law ratios.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Check className="w-4 h-4" /> Zero Topic Omission
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Full University Syllabus Coverage</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cross-referenced against Bar Council of India (BCI) curricula and benchmark treatises (M.S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh).
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <BookOpen className="w-4 h-4" /> Extracted Case Ratios
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Ratio Decidendi vs Obiter Dicta</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clear, verified landmark holdings from Supreme Court constitutional benches and High Courts without hallucinated headnotes.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Briefcase className="w-4 h-4" /> Procedural Roadmaps
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Jurisdiction & Forum Checkpoints</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instant checkpoints for territorial, pecuniary, and subject-matter jurisdiction before Magistrates, District Courts, Tribunals, and High Courts.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  <Scale className="w-4 h-4" /> Evidentiary Standard
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">BSA Proof & S. 63 Certificate</h3>
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
    </section>
  )
}

function Scale(props: React.SVGProps<SVGSVGElement>) {
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
