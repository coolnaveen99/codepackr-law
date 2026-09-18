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
  getStudyBody,
  type TopicContent,
} from '../../data/topics/loadTopicContent'
import { Badge } from '../ui/Badge'
import { RelatedKnowledge } from '../knowledge/RelatedKnowledge'
import { RichLegalText } from '../knowledge/RichLegalText'
import { knowledgeIdForTopic } from '../../data/knowledge'

const TOPIC_PROGRESS_KEY = 'codepackr-law-topic-progress'

interface TopicDetailProps {
  subject: LawSubjectMeta
  topic: LawTopic
  onBack: () => void
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
    case 'format':
      return 'Format'
    default:
      return 'Theme'
  }
}

export function TopicDetail({
  subject,
  topic,
  onBack,
}: TopicDetailProps) {
  const [copiedCaseId, setCopiedCaseId] = useState<string | null>(null)
  const [tipsOpen, setTipsOpen] = useState(true)
  const [content, setContent] = useState<TopicContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [studyComplete, setStudyComplete] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(TOPIC_PROGRESS_KEY) || '{}') as Record<string, boolean>
      setStudyComplete(Boolean(saved[`${subject.slug}/${topic.id}`]))
    } catch {
      setStudyComplete(false)
    }
  }, [subject.slug, topic.id])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setContent(null)

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

  const studyContent = getStudyBody(content)
  const hasContent = Boolean(studyContent)
  const hasCases = (content?.cases?.length ?? 0) > 0
  const knowledgeId = knowledgeIdForTopic(subject.slug, topic.id)

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

  const toggleStudyComplete = () => {
    const key = `${subject.slug}/${topic.id}`
    const nextValue = !studyComplete
    setStudyComplete(nextValue)
    try {
      const saved = JSON.parse(localStorage.getItem(TOPIC_PROGRESS_KEY) || '{}') as Record<string, boolean>
      localStorage.setItem(TOPIC_PROGRESS_KEY, JSON.stringify({ ...saved, [key]: nextValue }))
    } catch {
    }
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
          <div className="space-y-2 min-w-0">
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

          <button
            type="button"
            onClick={toggleStudyComplete}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition shrink-0 ${studyComplete ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:hover:bg-blue-950/40'}`}
          >
            {studyComplete ? 'Study completed' : 'Mark study complete'}
          </button>
        </div>
      </div>

      {loading && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 flex flex-col items-center justify-center gap-3 text-slate-500">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <p className="text-sm">Loading notes…</p>
        </div>
      )}

      {!loading && content?.glance && (
        <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/20 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-1">
            Topic at a glance
          </p>
          <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">{content.glance}</p>
        </section>
      )}

      {!loading && hasContent && content && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Study Topic</h3>
          </div>
          <StudyBody text={studyContent} />

          {content.bareActPointers && content.bareActPointers.length > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                Legal source pointers
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

      {!loading && content?.sections && content.sections.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Study Sections</h3>
          {content.sections.slice().sort((a, b) => a.order - b.order).map((section) => (
            <article key={section.id} id={section.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
              <h4 className="font-semibold text-slate-900 dark:text-white">{section.title}</h4>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </article>
          ))}
        </section>
      )}

      {!loading && content?.provisions && content.provisions.length > 0 && (
        <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Relevant Provisions</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">{content.provisions.map((provision) => <div key={provision.provisionId} className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-white dark:bg-slate-900 p-4"><p className="text-xs font-semibold text-blue-600">{provision.article || provision.section || provision.provisionId}</p><p className="mt-1 text-sm font-semibold">{provision.title || provision.actName}</p><p className="mt-1 text-xs text-slate-500">{provision.actName}</p></div>)}</div>
        </section>
      )}

      {!loading && content?.examples && content.examples.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Examples</h3>
          <div className="grid gap-3 sm:grid-cols-2">{content.examples.map((example) => <article key={example.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"><h4 className="font-semibold text-sm">{example.title || 'Illustration'}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{example.description}</p></article>)}</div>
        </section>
      )}

      {!loading && content?.hypotheticals && content.hypotheticals.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hypothetical problem + application</h3>
          {content.hypotheticals.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
              {item.title && <h4 className="font-semibold text-sm">{item.title}</h4>}
              <HypoBlock label="Facts" text={item.facts} />
              <HypoBlock label="Legal question" text={item.question} />
              <HypoBlock label="Applicable law" text={item.applicableLaw} />
              <HypoBlock label="Analysis" text={item.analysis} />
              <HypoBlock label="Conclusion" text={item.conclusion} />
            </article>
          ))}
        </section>
      )}

      {!loading && content?.distinctions && content.distinctions.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Important distinctions</h3>
          {content.distinctions.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-semibold text-sm">{item.title}</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/60 text-left">
                      <th className="px-4 py-2 font-semibold">Point</th>
                      <th className="px-4 py-2 font-semibold">{item.left}</th>
                      <th className="px-4 py-2 font-semibold">{item.right}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row) => (
                      <tr key={row.point} className="border-t border-slate-100 dark:border-slate-800 align-top">
                        <td className="px-4 py-2 font-medium text-slate-700 dark:text-slate-300">{row.point}</td>
                        <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{row.left}</td>
                        <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{row.right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </section>
      )}

      {!loading && content?.misconceptions && content.misconceptions.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Common misconceptions / exam traps</h3>
          {content.misconceptions.map((item) => (
            <article key={item.id} className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-4">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">Trap: {item.trap}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.correction}</p>
            </article>
          ))}
        </section>
      )}

      {!loading && content?.questionsAndAnswers && content.questionsAndAnswers.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Questions & Answers</h3>
          {content.questionsAndAnswers.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"><h4 className="font-semibold text-sm text-slate-900 dark:text-white">Q. {item.question}</h4><p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"><strong>Answer:</strong> {item.answer}</p>{item.explanation && <p className="mt-2 text-xs leading-relaxed text-slate-500"><strong>Explanation:</strong> {item.explanation}</p>}</article>)}
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

      {!loading && content?.examFrameworks && content.examFrameworks.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">How to write this in the examination</h3>
          {content.examFrameworks.map((fw) => (
            <article key={fw.marks} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
              <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300">{fw.marks}-mark answer framework</h4>
              {fw.question && <p className="mt-2 text-sm italic text-slate-600 dark:text-slate-400">Typical question: {fw.question}</p>}
              <ol className="mt-3 space-y-2 list-decimal list-inside text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {fw.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </article>
          ))}
        </section>
      )}

      {!loading && content?.answerSkeleton && content.answerSkeleton.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Model answer skeleton</h3>
          <ol className="mt-3 space-y-2 list-decimal list-inside text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content.answerSkeleton.map((step) => <li key={step}>{step}</li>)}
          </ol>
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

      {!loading && content?.revisionPoints && content.revisionPoints.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Quick revision points</h3>
          <ul className="mt-3 space-y-2">
            {content.revisionPoints.map((point) => (
              <li key={point} className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 flex gap-2">
                <span className="text-blue-500 font-bold shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!loading && content?.relatedTopics && content.relatedTopics.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Related Topics</h3>
          <div className="mt-3 flex flex-wrap gap-2">{content.relatedTopics.map((relatedTopic) => <span key={relatedTopic} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300">{relatedTopic}</span>)}</div>
        </section>
      )}

      {!loading && knowledgeId && (
        <RelatedKnowledge entityId={knowledgeId} />
      )}

      <p className="text-xs text-slate-400 dark:text-slate-500">
        Content is for exam preparation only. Always cross-check with the latest Bare Act.
      </p>
    </div>
  )
}

function StudyBody({ text }: { text: string }) {
  const blocks = text.split('\n')
  return (
    <div className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-3">
      {blocks.map((line, i) => {
        if (!line.trim()) return null
        const heading = line.length < 72 && !/[.?!”]$/.test(line.trim()) && !line.startsWith('•') && !/^\d+\./.test(line.trim())
        if (heading) {
          return (
            <h4 key={i} className="pt-2 font-semibold text-slate-900 dark:text-white">
              {line}
            </h4>
          )
        }
        return <RichLegalText key={i} text={line} className="[&>p]:mt-0" />
      })}
    </div>
  )
}

function HypoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{text}</p>
    </div>
  )
}
