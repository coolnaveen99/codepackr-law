import React from 'react'
import { CheckCircle2, XCircle, BookOpen, ExternalLink } from 'lucide-react'
import { McqQuestion } from '../../types'

type MatchPair = { left: string; right: string }

function parseMatchQuestion(text: string): MatchPair[] | null {
  if (!/^\s*Match the following\s*:/i.test(text)) return null
  const body = text.replace(/^\s*Match the following\s*:\s*/i, '')
  const marker = body.search(/\s+1\.\s+/)
  if (marker < 0) return null
  const leftText = body.slice(0, marker).trim()
  const rightText = body.slice(marker).trim()
  const left = [...leftText.matchAll(/([A-D])\.\s*(.*?)(?=\s+[A-D]\.\s+|$)/g)].map((m) => ({ key: m[1], value: m[2].trim() }))
  const right = [...rightText.matchAll(/([1-4])\.\s*(.*?)(?=\s+[1-4]\.\s+|$)/g)].map((m) => ({ key: m[1], value: m[2].trim() }))
  if (left.length !== 4 || right.length !== 4) return null
  return left.map((item, i) => ({ left: `${item.key}. ${item.value}`, right: `${right[i].key}. ${right[i].value}` }))
}

function formatNumberedQuestion(text: string): React.ReactNode {
  if (/^\s*Match the following\s*:/i.test(text)) return null
  const matches = [...text.matchAll(/\s+(?=(?:1|2|3|4)\.\s)/g)]
  if (!matches.length) return text
  const first = matches[0].index ?? text.length
  const intro = text.slice(0, first).trim()
  const listText = text.slice(first).trim()
  const items = listText.split(/\s+(?=(?:1|2|3|4)\.\s)/).map((item) => item.trim()).filter(Boolean)
  if (items.length < 2) return text
  return (
    <>
      <span>{intro}</span>
      <span className="mt-3 block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-3.5 sm:p-4 space-y-2.5 text-sm sm:text-base font-normal">
        {items.map((item, index) => (
          <span key={index} className="block leading-relaxed pl-1">{item}</span>
        ))}
      </span>
    </>
  )
}

export function QuestionPrompt({ text }: { text: string }) {
  const pairs = parseMatchQuestion(text)
  if (pairs) {
    return (
      <div className="space-y-3">
        <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">Match the following:</div>
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
            <div className="px-3 py-2.5 border-r border-slate-200 dark:border-slate-700">List I</div>
            <div className="px-3 py-2.5">List II</div>
          </div>
          {pairs.map((pair, index) => (
            <div key={index} className="grid grid-cols-2 border-t border-slate-200 dark:border-slate-700 text-sm sm:text-base">
              <div className="px-3 py-3 leading-relaxed border-r border-slate-200 dark:border-slate-700 font-medium text-slate-800 dark:text-slate-200 break-words">{pair.left}</div>
              <div className="px-3 py-3 leading-relaxed text-slate-700 dark:text-slate-300 break-words">{pair.right}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed">{formatNumberedQuestion(text)}</div>
}

export interface QuestionRendererProps {
  question: McqQuestion
  selectedOptionIndex?: number
  onSelectOption: (index: number) => void
  showInstantFeedback?: boolean
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
  disabled?: boolean
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  selectedOptionIndex,
  onSelectOption,
  showInstantFeedback = true,
  onOpenTopic,
  disabled = false,
}) => {
  const isAnswered = selectedOptionIndex !== undefined
  const showFeedback = showInstantFeedback && isAnswered

  return (
    <div className="space-y-6">
      <QuestionPrompt text={question.question} />

      {/* Options List */}
      <div className="space-y-3" role="radiogroup" aria-label="Question options">
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionIndex === idx
          const isCorrect = idx === question.correctIndex

          let optionStyle =
            'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200'
          let badgeStyle =
            'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'

          if (showFeedback) {
            if (isCorrect) {
              optionStyle =
                'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-500'
              badgeStyle = 'bg-emerald-600 text-white'
            } else if (isSelected) {
              optionStyle =
                'border-rose-400 bg-rose-50/90 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100 ring-1 ring-rose-400'
              badgeStyle = 'bg-rose-600 text-white'
            }
          } else if (isSelected) {
            optionStyle =
              'border-blue-600 bg-blue-50/90 dark:bg-blue-950/60 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600'
            badgeStyle = 'bg-blue-600 text-white'
          }

          return (
            <button
              key={idx}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3.5 transition-all min-h-[44px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${optionStyle} ${
                disabled ? 'cursor-not-allowed opacity-90' : ''
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${badgeStyle}`}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1 min-w-0 text-sm sm:text-base leading-relaxed break-words whitespace-normal font-normal">
                {option}
              </span>
              {showFeedback && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              )}
              {showFeedback && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
              )}
            </button>
          )
        })}
      </div>

      {/* Instant Explanation Block (Practice mode only) */}
      {showFeedback && (
        <div className="rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 p-4 sm:p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                Bare Act Ratio & Judicial Explanation
              </span>
              {question.bareActSection && (
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/80 text-blue-900 dark:text-blue-200">
                  {question.bareActSection}
                </span>
              )}
            </div>
            {question.subjectSlug && question.topicId && onOpenTopic && (
              <button
                type="button"
                onClick={() => onOpenTopic(question.subjectSlug!, question.topicId!)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:underline min-h-[32px] px-2 py-1 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/40"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Study Topic Treatise</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </button>
            )}
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
