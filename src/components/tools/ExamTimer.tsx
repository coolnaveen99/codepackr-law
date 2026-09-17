import React, { useState, useEffect, useRef, useMemo } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  Clock,
  Target,
  Maximize2,
  Minimize2,
  AlertTriangle
} from 'lucide-react'
import { formatDuration } from '../../lib/utils'
import { Badge } from '../ui/Badge'

interface Preset {
  id: string
  name: string
  durationMinutes: number
  questionCount: number
  description: string
}

const PRESETS: Preset[] = [
  {
    id: 'aibe',
    name: 'AIBE Full Mock',
    durationMinutes: 210, // 3h 30m
    questionCount: 100,
    description: '100 questions in 3h 30m (~2.1 mins / 126s per question)',
  },
  {
    id: 'judiciary-prelims',
    name: 'Judiciary Prelims Standard',
    durationMinutes: 120, // 2h
    questionCount: 100,
    description: '100 questions in 2 hours (~1.2 mins / 72s per question)',
  },
  {
    id: 'speed-drill',
    name: 'Section Speed Drill',
    durationMinutes: 30,
    questionCount: 25,
    description: '25 high-intensity questions in 30 minutes',
  },
]

export const ExamTimer: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState('aibe')
  const [totalSeconds, setTotalSeconds] = useState(210 * 60)
  const [remainingSeconds, setRemainingSeconds] = useState(210 * 60)
  const [questionCount, setQuestionCount] = useState(100)
  const [isRunning, setIsRunning] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [demoActive, setDemoActive] = useState(false)

  const timerRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sound synthesis via Web Audio API (100% client-side, zero network)
  const playChime = (freq = 600, duration = 0.25) => {
    if (!soundEnabled || typeof window === 'undefined') return
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      gain.gain.setValueAtTime(0.15, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + duration)
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  // Timer loop
  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!)
            setIsRunning(false)
            playChime(880, 0.8)
            return 0
          }
          // Chime at 15 minutes and 5 minutes remaining
          if (prev === 15 * 60 || prev === 5 * 60) {
            playChime(750, 0.4)
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRunning, soundEnabled])

  // Preset switch
  const handleSelectPreset = (p: Preset) => {
    setSelectedPresetId(p.id)
    const secs = p.durationMinutes * 60
    setTotalSeconds(secs)
    setRemainingSeconds(secs)
    setQuestionCount(p.questionCount)
    setIsRunning(false)
    setDemoActive(false)
  }

  const handleStartPause = () => {
    if (remainingSeconds === 0) {
      setRemainingSeconds(totalSeconds)
    }
    setIsRunning(!isRunning)
    playChime(520, 0.15)
  }

  const handleReset = () => {
    setIsRunning(false)
    setRemainingSeconds(totalSeconds)
    setDemoActive(false)
  }

  const handleDemo = () => {
    setIsRunning(false)
    setSelectedPresetId('demo')
    setTotalSeconds(60) // 1 minute demo
    setRemainingSeconds(60)
    setQuestionCount(5)
    setIsRunning(true)
    setDemoActive(true)
    playChime(580, 0.2)
  }

  // Pacing calculations
  const elapsedSeconds = totalSeconds - remainingSeconds
  const progressPct = totalSeconds > 0 ? (elapsedSeconds / totalSeconds) * 100 : 0
  const expectedQuestionNumber = useMemo(() => {
    if (totalSeconds <= 0 || questionCount <= 0) return 1
    const secPerQ = totalSeconds / questionCount
    const targetQ = Math.min(questionCount, Math.floor(elapsedSeconds / secPerQ) + 1)
    return targetQ
  }, [totalSeconds, remainingSeconds, questionCount, elapsedSeconds])

  const secondsPerQuestion = totalSeconds > 0 && questionCount > 0 ? (totalSeconds / questionCount).toFixed(0) : '0'

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                AIBE & Judiciary Exam Timer
              </h2>
              <Badge variant="blue">Pacing Calculator</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Exam stopwatch with real-time target question guidance to manage your time across 100+ Bare Act questions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition"
              title="Start 1-minute speed sample"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample: 1m Demo</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={soundEnabled ? 'Mute milestone bells' : 'Enable milestone bells'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>

        {demoActive && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
            <span>✨ 1-Minute demo timer running for 5 questions (12 seconds per question pacing).</span>
            <button onClick={handleReset} className="underline ml-2">Reset Preset</button>
          </div>
        )}

        {/* Preset selection tabs */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PRESETS.map((p) => {
            const isSelected = selectedPresetId === p.id
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                className={`p-3.5 rounded-xl border text-left transition ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {p.name}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {p.description}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Timer Display Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 text-center space-y-8 shadow-xs">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>{isRunning ? 'Exam In Progress' : remainingSeconds === 0 ? 'Time Expired' : 'Paused / Ready'}</span>
        </div>

        {/* Huge Digital Clock */}
        <div className="space-y-2">
          <div className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white font-mono select-none">
            {formatDuration(remainingSeconds)}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {formatDuration(elapsedSeconds)} elapsed of {formatDuration(totalSeconds)}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-xl mx-auto space-y-2">
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                remainingSeconds < 300
                  ? 'bg-rose-500'
                  : remainingSeconds < 900
                  ? 'bg-amber-500'
                  : 'bg-blue-600'
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Start</span>
            <span>{Math.round(progressPct)}% Complete</span>
            <span>Finish</span>
          </div>
        </div>

        {/* Pacing Guidance Card */}
        <div className="max-w-md mx-auto p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase text-blue-700 dark:text-blue-300 tracking-wide block">
                Target Question Pacing
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                You should be on Q #{expectedQuestionNumber} of {questionCount}
              </span>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Allotment</span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              ~{secondsPerQuestion}s / Q
            </span>
          </div>
        </div>

        {/* Warning if under 15 mins */}
        {remainingSeconds > 0 && remainingSeconds <= 900 && (
          <div className="max-w-md mx-auto p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Under 15 minutes remaining! Finalize OMR sheet marking and review flagged questions.</span>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleStartPause}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition ${
              isRunning
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause Timer</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{remainingSeconds < totalSeconds ? 'Resume Exam' : 'Start Exam'}</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition hidden sm:inline-flex"
            title="Toggle fullscreen distraction-free mode"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
