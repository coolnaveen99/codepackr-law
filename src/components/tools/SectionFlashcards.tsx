import React, { useState, useMemo, useEffect } from 'react'
import {
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Shuffle,
  BookOpen,
  Eye,
  EyeOff,
  Tag
} from 'lucide-react'
import { SECTION_FLASHCARDS } from '../../data/sections/flashcardData'
import { LawFlashcard } from '../../types'
import { Badge } from '../ui/Badge'
import { shuffleArray } from '../../lib/utils'

export const SectionFlashcards: React.FC = () => {
  const [selectedAct, setSelectedAct] = useState<string>('all')
  const [deck, setDeck] = useState<LawFlashcard[]>(() => [...SECTION_FLASHCARDS])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set())
  const [reviewIds, setReviewIds] = useState<Set<string>>(new Set())
  const [demoBanner, setDemoBanner] = useState(false)

  // Filter deck when Act changes
  useEffect(() => {
    let filtered = [...SECTION_FLASHCARDS]
    if (selectedAct !== 'all') {
      filtered = SECTION_FLASHCARDS.filter((f) => f.act.includes(selectedAct))
    }
    setDeck(filtered)
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [selectedAct])

  const currentCard: LawFlashcard | undefined = deck[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault()
        setIsFlipped((prev) => !prev)
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
        handleNext()
      } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
        handlePrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, deck.length])

  const handleNext = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setIsFlipped(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setIsFlipped(false)
    }
  }

  const handleShuffle = () => {
    setDeck(shuffleArray([...deck]))
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const handleMarkMastered = () => {
    if (!currentCard) return
    setMasteredIds((prev) => new Set(prev).add(currentCard.id))
    setReviewIds((prev) => {
      const next = new Set(prev)
      next.delete(currentCard.id)
      return next
    })
    handleNext()
  }

  const handleMarkReview = () => {
    if (!currentCard) return
    setReviewIds((prev) => new Set(prev).add(currentCard.id))
    setMasteredIds((prev) => {
      const next = new Set(prev)
      next.delete(currentCard.id)
      return next
    })
    handleNext()
  }

  const handleReset = () => {
    setSelectedAct('all')
    setDeck([...SECTION_FLASHCARDS])
    setCurrentIndex(0)
    setIsFlipped(false)
    setMasteredIds(new Set())
    setReviewIds(new Set())
    setDemoBanner(false)
  }

  const handleDemo = () => {
    setSelectedAct('Constitution')
    setCurrentIndex(1) // Article 21
    setIsFlipped(true)
    setDemoBanner(true)
  }

  const actsList = useMemo(() => {
    return [
      { id: 'all', label: 'All Bare Acts' },
      { id: 'Constitution', label: 'Constitution' },
      { id: 'Bharatiya Nyaya', label: 'BNS 2023' },
      { id: 'Bharatiya Nagarik', label: 'BNSS 2023' },
      { id: 'Civil Procedure', label: 'CPC 1908' },
      { id: 'Contract', label: 'Contract Act 1872' },
    ]
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Important Bare Act Flashcards
              </h2>
              <Badge variant="blue">Active Recall</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              High-yield sections and constitutional articles with key elements and landmark judicial precedents.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition"
              title="Load Article 21 demo card"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample: Art 21</span>
            </button>
            <button
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Shuffle the deck"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Shuffle</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {demoBanner && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
            <span>✨ Showing Article 21 (Constitution of India) with expanded landmark cases & elements.</span>
            <button onClick={() => setDemoBanner(false)} className="underline ml-2">Dismiss</button>
          </div>
        )}

        {/* Act Filter Tabs */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-medium whitespace-nowrap mr-1">Subject:</span>
          {actsList.map((act) => (
            <button
              key={act.id}
              onClick={() => setSelectedAct(act.id)}
              className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition ${
                selectedAct === act.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {act.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flashcard Display */}
      {currentCard ? (
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Card Counter & Score */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
            <span>
              Card {currentIndex + 1} of {deck.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                ✓ {masteredIds.size} Mastered
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-semibold">
                ↺ {reviewIds.size} Review
              </span>
            </div>
          </div>

          {/* Flashcard container (clickable to flip) */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[340px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 cursor-pointer shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition flex flex-col justify-between select-none relative group"
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                {currentCard.act}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-blue-600 transition">
                {isFlipped ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{isFlipped ? 'Click to show front' : 'Click / Space to flip'}</span>
              </div>
            </div>

            {/* Content: Front vs Back */}
            {!isFlipped ? (
              <div className="my-8 text-center space-y-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                  Bare Act Section / Article
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                  {currentCard.sectionOrArticle}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Can you recall the title, core doctrine, and key elements without looking?
                </p>
                <div className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900">
                  <Tag className="w-3 h-3" />
                  <span>{currentCard.tag}</span>
                </div>
              </div>
            ) : (
              <div className="my-4 space-y-4 text-left animate-in fade-in duration-200">
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    {currentCard.sectionOrArticle}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {currentCard.title}
                  </h4>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-l-2 border-blue-500 pl-3">
                  {currentCard.summary}
                </p>

                {currentCard.keyElements && currentCard.keyElements.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 block">
                      Core Elements / Principles:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {currentCard.keyElements.map((el, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentCard.landmarkCase && (
                  <div className="pt-2 text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Precedent: </span>
                    <span className="text-slate-600 dark:text-slate-400 italic">
                      {currentCard.landmarkCase}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Bottom reminder */}
            <div className="text-[11px] text-slate-400 text-center border-t border-slate-100 dark:border-slate-800/80 pt-3">
              Press <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Space</kbd> to flip • <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">←</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">→</kbd> to navigate
            </div>
          </div>

          {/* Action buttons: Know vs Review & Nav */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === deck.length - 1}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleMarkReview}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition"
              >
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Need Review</span>
              </button>
              <button
                onClick={handleMarkMastered}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Know It!</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center max-w-md mx-auto">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">No flashcards found</p>
          <button
            onClick={() => setSelectedAct('all')}
            className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
          >
            Show All Bare Acts
          </button>
        </div>
      )}
    </div>
  )
}
