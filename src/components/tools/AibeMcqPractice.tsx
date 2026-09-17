import React, { useEffect, useMemo, useState } from 'react'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  ListFilter,
  RotateCcw,
  Sparkles,
  XCircle,
} from 'lucide-react'
import { ALL_QUESTIONS, SUBJECT_OPTIONS } from '../../data/questions'
import { LawSubject, McqQuestion } from '../../types'
import { Badge } from '../ui/Badge'
import { shuffleArray } from '../../lib/utils'

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

function QuestionPrompt({ text }: { text: string }) {
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

export const AibeMcqPractice: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<LawSubject>('all')
  const [mode, setMode] = useState<'practice' | 'exam'>('practice')
  const [currentQuestions, setCurrentQuestions] = useState<McqQuestion[]>(() => [...ALL_QUESTIONS])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({})
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set())
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showDemoFeedback, setShowDemoFeedback] = useState(false)

  useEffect(() => {
    const list = selectedSubject === 'all' ? [...ALL_QUESTIONS] : ALL_QUESTIONS.filter((q) => q.subject === selectedSubject)
    setCurrentQuestions(list)
    setCurrentIndex(0)
    setUserAnswers({})
    setMarkedForReview(new Set())
    setIsSubmitted(false)
  }, [selectedSubject])

  const currentQ = currentQuestions[currentIndex]
  const currentSelectedOption = currentQ ? userAnswers[currentQ.id] : undefined

  const selectOption = (idx: number) => {
    if (!currentQ || (isSubmitted && mode === 'exam')) return
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: idx }))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!currentQ) return
      if (/^[1-4]$/.test(e.key) && (!isSubmitted || mode === 'practice')) selectOption(Number(e.key) - 1)
      if (e.key.toLowerCase() === 'n') setCurrentIndex((i) => Math.min(currentQuestions.length - 1, i + 1))
      if (e.key.toLowerCase() === 'p') setCurrentIndex((i) => Math.max(0, i - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentQ, currentQuestions.length, isSubmitted, mode])

  const stats = useMemo(() => {
    const attempted = currentQuestions.filter((q) => userAnswers[q.id] !== undefined).length
    const correct = currentQuestions.filter((q) => userAnswers[q.id] === q.correctIndex).length
    const total = currentQuestions.length
    return { attempted, correct, incorrect: attempted - correct, unattempted: total - attempted, total, scorePct: total ? Math.round((correct / total) * 100) : 0 }
  }, [currentQuestions, userAnswers])

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) => {
    setter((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next })
  }

  const reset = () => { setUserAnswers({}); setMarkedForReview(new Set()); setIsSubmitted(false); setCurrentIndex(0); setShowDemoFeedback(false) }
  const loadDemo = () => {
    const demo = shuffleArray([...ALL_QUESTIONS]).slice(0, 5)
    setCurrentQuestions(demo); setCurrentIndex(0); setUserAnswers({ [demo[0].id]: demo[0].correctIndex }); setMarkedForReview(new Set(demo[1] ? [demo[1].id] : [])); setIsSubmitted(false); setShowDemoFeedback(true)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5"><h2 className="text-xl sm:text-2xl font-bold tracking-tight">AIBE & Judiciary MCQ Practice</h2><Badge variant="blue">Bare Act Focused</Badge></div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Practice high-weight Indian law questions with instant section explanations and Bare Act citations.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={loadDemo} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900"><Sparkles className="w-3.5 h-3.5"/>Sample Demo</button>
            <button onClick={reset} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700"><RotateCcw className="w-3.5 h-3.5"/>Reset Test</button>
          </div>
        </div>
        {showDemoFeedback && <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200">✨ Demo mode loaded: 5 sample questions.</div>}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2"><ListFilter className="w-4 h-4 text-slate-400"/><select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value as LawSubject)} className="text-xs sm:text-sm font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"><option value="all">All Subjects ({ALL_QUESTIONS.length})</option>{SUBJECT_OPTIONS.filter((s) => s.value !== 'all').map((s) => <option key={s.value} value={s.value}>{s.label} ({s.count})</option>)}</select></div>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl"><button onClick={() => setMode('practice')} className={`text-xs px-3 py-1.5 rounded-lg font-medium ${mode === 'practice' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm' : 'text-slate-600'}`}>Practice Mode</button><button onClick={() => setMode('exam')} className={`text-xs px-3 py-1.5 rounded-lg font-medium ${mode === 'exam' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm' : 'text-slate-600'}`}>Exam Simulation</button></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          {currentQ ? <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-100 dark:border-blue-900/60">Q {currentIndex + 1} of {currentQuestions.length}</span><span className="text-xs text-slate-500 dark:text-slate-400">{currentQ.subjectLabel}</span><span className="text-[11px] text-slate-400 hidden sm:inline">• {currentQ.examSource}</span></div>
              <div className="flex gap-2"><button onClick={() => toggleSet(setMarkedForReview, currentQ.id)} className={`text-xs px-2.5 py-1.5 rounded-xl border flex items-center gap-1 ${markedForReview.has(currentQ.id) ? 'border-amber-300 bg-amber-50 text-amber-800' : 'border-slate-200 dark:border-slate-700 text-slate-600'}`}><Clock className="w-3.5 h-3.5"/><span className="hidden sm:inline">Review Later</span></button><button onClick={() => toggleSet(setBookmarkedIds, currentQ.id)} className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400">{bookmarkedIds.has(currentQ.id) ? <BookmarkCheck className="w-4 h-4"/> : <Bookmark className="w-4 h-4"/>}</button></div>
            </div>

            <QuestionPrompt text={currentQ.question} />

            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const selected = currentSelectedOption === idx
                const correct = idx === currentQ.correctIndex
                const show = (mode === 'practice' && currentSelectedOption !== undefined) || (mode === 'exam' && isSubmitted)
                let cls = 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200'
                if (show && correct) cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200'
                else if (show && selected) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200'
                else if (selected) cls = 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600'
                return <button key={idx} onClick={() => selectOption(idx)} disabled={isSubmitted && mode === 'exam'} className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition ${cls}`}>
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${show && correct ? 'bg-emerald-600 text-white' : show && selected ? 'bg-rose-600 text-white' : selected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{String.fromCharCode(65 + idx)}</span>
                  <span className="flex-1 min-w-0 text-sm sm:text-base leading-relaxed break-words whitespace-normal">{option}</span>
                  {show && correct && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0"/>}{show && selected && !correct && <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0"/>}
                </button>
              })}
            </div>

            {((mode === 'practice' && currentSelectedOption !== undefined) || (mode === 'exam' && isSubmitted)) && <div className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 p-4 space-y-2"><div className="text-xs font-bold text-blue-800 dark:text-blue-300">📖 Bare Act Reference & Judicial Explanation</div>{currentQ.bareActSection && <div className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/80">{currentQ.bareActSection}</div>}<p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{currentQ.explanation}</p></div>}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3"><button onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))} disabled={currentIndex === 0} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40"><ArrowLeft className="w-4 h-4"/>Previous</button><div className="hidden sm:block text-xs text-slate-400">Keyboard: <kbd>1-4</kbd> answer · <kbd>N</kbd> next · <kbd>P</kbd> previous</div>{currentIndex < currentQuestions.length - 1 ? <button onClick={() => setCurrentIndex((i) => i + 1)} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-4 py-2 rounded-xl bg-blue-600 text-white"><span>Next Question</span><ArrowRight className="w-4 h-4"/></button> : <button onClick={() => setIsSubmitted(true)} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-emerald-600 text-white"><CheckCircle2 className="w-4 h-4"/>Finish & See Score</button>}</div>
          </div> : <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center"><AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-3"/><p>No questions found for this subject.</p></div>}
        </div>

        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-4 lg:self-start">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
            <div className="flex items-center justify-between"><h3 className="text-sm font-semibold">Progress</h3><span className="text-xs text-slate-500">{currentIndex + 1} / {stats.total}</span></div>
            <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"><div className="h-2 rounded-full bg-blue-600 transition-all" style={{ width: `${stats.total ? ((currentIndex + 1) / stats.total) * 100 : 0}%` }}/></div>
            <div className="grid grid-cols-3 gap-2 text-xs"><div className="rounded-xl border p-2 text-center"><b className="block text-emerald-600">{stats.correct}</b>Correct</div><div className="rounded-xl border p-2 text-center"><b className="block text-rose-500">{stats.incorrect}</b>Incorrect</div><div className="rounded-xl border p-2 text-center"><b className="block text-slate-500">{stats.unattempted}</b>Unattempted</div></div>
            <div><div className="text-xs font-semibold text-slate-500 mb-2">Question Palette</div><div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 max-h-64 overflow-y-auto p-1">{currentQuestions.map((q, idx) => { const answered = userAnswers[q.id] !== undefined; const review = markedForReview.has(q.id); const current = idx === currentIndex; return <button key={q.id} onClick={() => setCurrentIndex(idx)} className={`h-9 rounded-lg text-xs border transition relative ${review ? 'bg-amber-500 text-white border-amber-500' : answered ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'} ${current ? 'ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-slate-900' : ''}`}>{idx + 1}{bookmarkedIds.has(q.id) && <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-yellow-300"/>}</button> })}</div></div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-500"><span>🔵 Answered</span><span>🟠 Review Later</span><span>⚪ Unattempted</span><span>🔷 Current</span></div>
            {!isSubmitted && <button onClick={() => setIsSubmitted(true)} className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs flex items-center justify-center gap-1.5"><Award className="w-4 h-4"/>Submit & View Complete Analysis</button>}
          </div>
          <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-4 text-xs text-slate-600 dark:text-slate-400"><div className="flex items-center gap-1.5 font-semibold text-blue-700 dark:text-blue-300 mb-1.5"><HelpCircle className="w-3.5 h-3.5"/>AIBE Exam Tip</div><p>Practice identifying the exact section numbers and operative verbs.</p></div>
        </aside>
      </div>
    </div>
  )
}
