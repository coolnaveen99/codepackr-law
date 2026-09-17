import { useState, useEffect } from 'react'
import {
  ArrowLeft,
  BookOpen,
  Scale,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Loader2,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic, CaseCitation } from '../../data/subjects'
import {
  loadTopicContent,
  type TopicContent,
} from '../../data/topics/loadTopicContent'
import { Badge } from '../ui/Badge'

interface TopicDetailProps {
  subject: LawSubjectMeta
  topic: LawTopic
  onBack: () => void
  /** Opens MCQ tool for this subject (optional) */
  onPracticeTopic?: () => void
}

function topicTypeLabel(type: LawTopic['type']) {
  switch (type) {
    case 'article':
      return 'Article'
    case 'section':
      return 'Section'
    case 'chapter':
      return 'Chapter'
    case 'doctrine':
      return 'Doctrine'
    case 'act':
      return 'Act'
    default:
      return 'Theme'
  }
}

export function TopicDetail({
  subject,
  topic,
  onBack,
  onPracticeTopic,
}: TopicDetailProps) {
  const [view, setView] = useState<'short' | 'detailed'>('short')
  const [copiedCaseId, setCopiedCaseId] = useState<string | null>(null)
  const [tipsOpen, setTipsOpen] = useState(true)
  const [content, setContent] = useState<TopicContent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setContent(null)
    setView('short')

    loadTopicContent(subject.slug, topic.id).then((data) => {
      if (!cancelled) {
        setContent(data)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [subject.slug, topic.id])

  const hasContent = Boolean(content?.short || content?.detailed)
  const hasCases = (content?.cases?.length ?? 0) > 0

  const handleCopyCase = (c: CaseCitation, idx: number) => {
    const text = [
      c.name,
      c.year ? `(${c.year})` : '',
      c.citation || '',
      '',
      `Holding: ${c.holding}`,
      c.relevance ? `Relevance: ${c.relevance}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    navigator.clipboard.writeText(text)
    setCopiedCaseId(String(idx))
    setTimeout(() => setCopiedCaseId(null), 2000)
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {subject.shortName}
        </button>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                {topicTypeLabel(topic.type)}
              </span>
              {topic.highYield && <Badge variant="amber">High yield</Badge>}
              {topic.range && (
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  {topic.range}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {topic.name}
            </h2>

            {topic.note && (
              <p className="text-sm text-slate-600 dark:text-slate-400">{topic.note}</p>
            )}
          </div>

          {onPracticeTopic && (
            <button
              type="button"
              onClick={onPracticeTopic}
              className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              Practice MCQs
            </button>
          )}
        </div>
      </div>

      {loading && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 flex flex-col items-center justify-center gap-3 text-slate-500">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <p className="text-sm">Loading notes…</p>
        </div>
      )}

      {!loading && hasContent && (
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit">
          <button
            type="button"
            onClick={() => setView('short')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              view === 'short'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Short Version
          </button>
          <button
            type="button"
            onClick={() => setView('detailed')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              view === 'detailed'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Detailed Version
          </button>
        </div>
      )}

      {!loading && hasContent && content && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
            {view === 'short' ? content.short : content.detailed || content.short}
          </p>

          {content.bareActPointers && content.bareActPointers.length > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                Bare Act Pointers
              </p>
              <div className="flex flex-wrap gap-1.5">
                {content.bareActPointers.map((ptr) => (
                  <span
                    key={ptr}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                  >
                    {ptr}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {!loading && !hasContent && (
        <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
          Learning notes for this topic are coming soon. Use Practice MCQs and the reference tools
          meanwhile.
        </div>
      )}

      {!loading && hasCases && content?.cases && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-blue-600" />
            Key Case Laws ({content.cases.length})
          </h3>

          <ul className="space-y-3">
            {content.cases.map((c, idx) => {
              const id = String(idx)
              const isCopied = copiedCaseId === id
              return (
                <li
                  key={id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                        {c.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                        {c.year && <span>{c.year}</span>}
                        {c.citation && (
                          <span className="font-mono text-[11px]">{c.citation}</span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCase(c, idx)}
                      className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition shrink-0"
                      title="Copy citation & holding"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide block mb-1">
                      Holding
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {c.holding}
                    </p>
                  </div>

                  {c.relevance && (
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Why it matters:{' '}
                      </span>
                      {c.relevance}
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {!loading && content?.examTips && content.examTips.length > 0 && (
        <section className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 overflow-hidden">
          <button
            type="button"
            onClick={() => setTipsOpen(!tipsOpen)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left"
          >
            <span className="text-sm font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Exam Tips
            </span>
            {tipsOpen ? (
              <ChevronUp className="w-4 h-4 text-amber-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-amber-600" />
            )}
          </button>

          {tipsOpen && (
            <ul className="px-4 pb-4 space-y-2">
              {content.examTips.map((tip, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/90 flex gap-2"
                >
                  <span className="text-amber-500 font-bold shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <p className="text-xs text-slate-400 dark:text-slate-500">
        Content is for exam preparation only. Always cross-check with the latest Bare Act.
      </p>
    </div>
  )
}
