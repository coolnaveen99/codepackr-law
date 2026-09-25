import { BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import { getLastRead } from '../../lib/progress'
import { getTopic } from '../../data/liveSubjects'
import type { LawTopic } from '../../data/subjects'

const DEFAULT_JUMPS = [
  { label: 'Art. 21 — Life & Liberty', subject: 'constitution', topic: 'art-21' },
  { label: 'BNS s. 103 — Murder', subject: 'bns', topic: 's-103' },
  { label: 'BNSS s. 480 — Bail', subject: 'bnss', topic: 's-480' },
  { label: 'CPC Order 39 — Injunctions', subject: 'cpc', topic: 'order-39' },
] as const

interface ContinueLearningProps {
  onSelectTopic: (subjectSlug: string, topic: LawTopic) => void
  onSelectSubject: (slug: string) => void
}

export function ContinueLearning({ onSelectTopic, onSelectSubject }: ContinueLearningProps) {
  const last = typeof window !== 'undefined' ? getLastRead() : null
  const resolved =
    last != null
      ? getTopic(last.subjectSlug, last.topicId)
      : undefined

  if (resolved) {
    const { subject, topic } = resolved
    return (
      <section className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Continue learning
              </p>
              <p className="font-bold text-slate-950 dark:text-white truncate">{topic.name}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                {subject.name}
                {last?.sectionId ? ` · ${last.sectionId}` : ''}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectTopic(subject.slug, topic)}
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shrink-0"
          >
            Resume
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          High-yield jumps
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {DEFAULT_JUMPS.map((j) => {
          const hit = getTopic(j.subject, j.topic)
          return (
            <button
              key={`${j.subject}-${j.topic}`}
              type="button"
              onClick={() => {
                if (hit) onSelectTopic(j.subject, hit.topic)
                else onSelectSubject(j.subject)
              }}
              className="text-left rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2.5 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
            >
              <span className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">
                {j.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
