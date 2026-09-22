import { useState, useMemo } from 'react'
import { ArrowRight, BookOpen, Layers, ShieldCheck, FileText, Scale } from 'lucide-react'
import { SUBJECTS, type LawTopic } from '../../data/subjects'
import { SubjectGlyph } from '../icons'

interface LibraryWingsGridProps {
  onSelectSubject: (slug: string) => void
  onSelectTopic: (subjectSlug: string, topic: LawTopic) => void
}

type WingId = 'all' | 'wing-1' | 'wing-2' | 'wing-3' | 'wing-4'

interface WingMeta {
  id: WingId
  title: string
  subtitle: string
  icon: typeof Layers
  slugs: string[]
}

const WINGS: WingMeta[] = [
  {
    id: 'wing-1',
    title: 'Constitutional & Criminal Trilogy',
    subtitle: 'The foundational pillars of public justice and penal jurisprudence',
    icon: ShieldCheck,
    slugs: ['constitution', 'bnss', 'bns', 'bsa'],
  },
  {
    id: 'wing-2',
    title: 'Civil Procedure & Commercial Law',
    subtitle: 'Adjudication, contracts, tortious remedies, corporate governance & property',
    icon: Scale,
    slugs: ['cpc', 'tort', 'contract', 'company', 'ipr', 'taxation'],
  },
  {
    id: 'wing-3',
    title: 'Personal Laws & Specialized Jurisprudence',
    subtitle: 'Matrimony, succession, arbitration, mediation, labour, cyber & environment',
    icon: BookOpen,
    slugs: ['family', 'adr', 'labour', 'cyber', 'admin', 'environment', 'land'],
  },
  {
    id: 'wing-4',
    title: 'Courtroom Drafting, Ethics & PIL',
    subtitle: 'Authentic petition formats, Bar Council rules & constitutional advocacy',
    icon: FileText,
    slugs: ['petition-formats', 'ethics', 'pil'],
  },
]

export function LibraryWingsGrid({ onSelectSubject, onSelectTopic }: LibraryWingsGridProps) {
  const [activeWing, setActiveWing] = useState<WingId>('all')

  const displayedWings = useMemo(() => {
    if (activeWing === 'all') return WINGS
    return WINGS.filter((w) => w.id === activeWing)
  }, [activeWing])

  const totalTopics = useMemo(() => {
    return SUBJECTS.reduce((acc, s) => acc + s.topics.length, 0)
  }, [])

  return (
    <section className="space-y-6 scroll-mt-20" id="library-wings">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
            <Layers className="w-3.5 h-3.5" /> Curricular Library Wings
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
            Explore All 20 Legal Subjects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Organized into four standardized library wings covering {totalTopics} granular provisions, orders, doctrines, and drafting formats.
          </p>
        </div>

        {/* Wing Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveWing('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 ${
              activeWing === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Wings (20)
          </button>
          {WINGS.map((w, idx) => (
            <button
              key={w.id}
              type="button"
              onClick={() => setActiveWing(w.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                activeWing === w.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Wing {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Wings Iteration */}
      <div className="space-y-10">
        {displayedWings.map((wing) => {
          const WingIcon = wing.icon
          const wingSubjects = wing.slugs
            .map((slug) => SUBJECTS.find((s) => s.slug === slug))
            .filter(Boolean) as (typeof SUBJECTS)[number][]

          return (
            <div key={wing.id} className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                    <WingIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      Wing {WINGS.findIndex((w) => w.id === wing.id) + 1}: {wing.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {wing.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {wingSubjects.length} subjects
                </span>
              </div>

              {/* Grid of Subjects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {wingSubjects.map((s) => {
                  const highYieldTopics = s.topics.filter((t) => t.highYield).slice(0, 3)

                  return (
                    <div
                      key={s.id}
                      className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-5 flex flex-col justify-between hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-150 shadow-xs hover:shadow-md"
                    >
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                            <SubjectGlyph name={s.icon} className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900">
                              ~{s.aibeQuestions} AIBE Q
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                              {s.topics.length} topics
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <button
                          type="button"
                          onClick={() => onSelectSubject(s.slug)}
                          className="text-left w-full"
                        >
                          <h4 className="font-display text-lg font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150 leading-tight">
                            {s.name}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {s.description}
                          </p>
                        </button>

                        {/* Quick Provision Jump Chips */}
                        {highYieldTopics.length > 0 && (
                          <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              High-Yield Jump:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {highYieldTopics.map((topic) => (
                                <button
                                  key={topic.id}
                                  type="button"
                                  onClick={() => onSelectTopic(s.slug, topic)}
                                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 border border-slate-200 dark:border-slate-700 transition-colors duration-150 truncate max-w-full"
                                  title={topic.name}
                                >
                                  {topic.name.split('(')[0].trim()}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer Action */}
                      <button
                        type="button"
                        onClick={() => onSelectSubject(s.slug)}
                        className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-700 dark:text-blue-300 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all duration-150"
                      >
                        Open Subject Catalog <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
