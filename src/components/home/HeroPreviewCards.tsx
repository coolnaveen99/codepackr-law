import React, { useState, useEffect, useRef, useMemo } from 'react'
import {
  Scale,
  ArrowRight,
  ShieldCheck,
  ArrowLeftRight,
  Layers,
  Landmark,
  Gavel,
  CheckCircle2,
} from 'lucide-react'
import { SUBJECTS, type LawTopic } from '../../data/subjects'

// Mini Segmented Bar Component
interface Segment {
  width: string
  color: string
  label?: string
  dotColor?: string
}

const MiniSegmentedBar: React.FC<{
  segments: Segment[]
  className?: string
}> = ({ segments, className = '' }) => (
  <div className={`space-y-1 ${className}`}>
    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
      {segments.map((s, idx) => (
        <div
          key={idx}
          className={`${s.color} h-full transition-all duration-700 ease-out`}
          style={{ width: s.width }}
          title={s.label}
        />
      ))}
    </div>
    <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
      {segments.map((s, idx) => (
        <span key={idx} className="flex items-center gap-1 truncate">
          <span className={`w-1.5 h-1.5 rounded-full ${s.dotColor || s.color}`} />
          {s.label}
        </span>
      ))}
    </div>
  </div>
)

// Mini Progress Ring Component
const MiniProgressRing: React.FC<{
  percent: number
  strokeColor: string
  sublabel?: string
  size?: number
}> = ({ percent, strokeColor, sublabel, size = 36 }) => {
  const radius = 14
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className="stroke-slate-200 dark:stroke-slate-700"
          strokeWidth="3.5"
        />
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className={`${strokeColor} transition-all duration-1000 ease-out`}
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
      </svg>
      <span className="absolute text-[9px] font-black text-slate-900 dark:text-white tabular-nums">
        {percent}%
      </span>
      {sublabel && (
        <span className="sr-only">{sublabel}</span>
      )}
    </div>
  )
}

export type HeroLawAd = {
  id: string
  title: string
  badge: string
  badgeTone: 'seal' | 'teal' | 'purple' | 'blue' | 'amber' | 'emerald'
  icon: React.ComponentType<{ className?: string }>
  body: React.ReactNode
  footerLeft: string
  cta: string
  toolSlug?: string
  subjectSlug?: string
  topicId?: string
}

interface HeroPreviewCardsProps {
  onSelectTool: (slug: string) => void
  onSelectSubject?: (slug: string) => void
  onSelectTopic?: (subjectSlug: string, topic: LawTopic) => void
  visibleSlots?: 2 | 3
}

export const HeroPreviewCards: React.FC<HeroPreviewCardsProps> = ({
  onSelectTool,
  onSelectSubject,
  onSelectTopic,
  visibleSlots = 2,
}) => {
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null)

  const adPool: HeroLawAd[] = useMemo(() => {
    return [
      {
        id: 'ad-bsa-concordance',
        toolSlug: 'bsa-iea-mapper',
        title: 'BSA ↔ Evidence Sanhita Mapper',
        badge: 'S. 63 Certificate',
        badgeTone: 'blue' as const,
        icon: ShieldCheck,
        body: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-[11px]">
              <span className="font-bold text-blue-700 dark:text-blue-300">BSA s. 63 ↔ IEA s. 65B</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-bold">Digital Evidence</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold"><CheckCircle2 className="w-3 h-3" /> Hash Verification</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold"><CheckCircle2 className="w-3 h-3" /> Custody Chain</span>
            </div>
          </div>
        ),
        footerLeft: 'Mandatory proving standards',
        cta: 'Open BSA Mapper',
      },
      {
        id: 'ad-kesavananda',
        toolSlug: 'case-law',
        title: 'Kesavananda Bharati (1973)',
        badge: '13-Judge Bench',
        badgeTone: 'purple' as const,
        icon: Landmark,
        body: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex items-center gap-3">
              <MiniProgressRing percent={54} strokeColor="stroke-purple-600" sublabel="7:6 Majority" />
              <div className="flex-1 space-y-0.5 min-w-0">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold text-purple-700 dark:text-purple-300">Basic Structure Doctrine</span>
                  <span className="text-[10px] text-slate-500">7:6 Split</span>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">Parliament cannot alter the essential identity of the Constitution.</p>
              </div>
            </div>
          </div>
        ),
        footerLeft: 'Full ratio, facts & pleadings',
        cta: 'Read Judgment Ratio',
      },
      {
        id: 'ad-bnss-concordance',
        toolSlug: 'bnss-crpc-mapper',
        title: 'BNSS ↔ CrPC Sanhita Mapper',
        badge: 'Bail & Custody',
        badgeTone: 'teal' as const,
        icon: Layers,
        body: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-[11px]">
              <span className="font-bold text-teal-700 dark:text-teal-300">BNSS s. 480 ↔ CrPC s. 437</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold">Regular Bail</span>
            </div>
            <MiniSegmentedBar segments={[{ width: '40%', color: 'bg-teal-600', label: 'Zero FIR: 24h', dotColor: 'bg-teal-600' }, { width: '60%', color: 'bg-slate-400', label: 'Police Custody: 15-60d', dotColor: 'bg-slate-400' }]} />
          </div>
        ),
        footerLeft: 'Remand & arrest safeguards',
        cta: 'Explore BNSS Bail',
      },
      {
        id: 'ad-art-21',
        subjectSlug: 'constitution',
        topicId: 'art-21',
        title: 'Article 21: Life & Liberty',
        badge: 'Golden Triangle',
        badgeTone: 'seal' as const,
        icon: Scale,
        body: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-600 dark:text-slate-400">Arts. 14 + 19 + 21 Interlock</span>
              <span className="font-bold text-blue-700 dark:text-blue-300">Due Process</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-300">
              <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold">Fair & Just</span>
              <span>+</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold">Non-Arbitrary</span>
              <span>+</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold">Reasonable</span>
            </div>
          </div>
        ),
        footerLeft: 'Maneka Gandhi procedural test',
        cta: 'Open Art. 21 Notes',
      },
      {
        id: 'ad-bns-concordance',
        toolSlug: 'bns-ipc-mapper',
        title: 'BNS ↔ IPC Sanhita Mapper',
        badge: 'In Force July 2024',
        badgeTone: 'seal' as const,
        icon: ArrowLeftRight,
        body: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-[11px]">
              <span className="font-bold text-blue-700 dark:text-blue-300">BNS s. 103 ↔ IPC s. 302</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">Murder</span>
            </div>
            <MiniSegmentedBar segments={[{ width: '65%', color: 'bg-blue-600', label: 's. 103(1) Death / LI', dotColor: 'bg-blue-600' }, { width: '35%', color: 'bg-rose-500', label: 's. 103(2) Mob Lynching', dotColor: 'bg-rose-500' }]} />
          </div>
        ),
        footerLeft: 'Complete penal concordance',
        cta: 'Launch Sanhita Mapper',
      },
      {
        id: 'ad-maneka',
        toolSlug: 'case-law',
        title: 'Maneka Gandhi v. UOI (1978)',
        badge: '7-Judge Bench',
        badgeTone: 'amber' as const,
        icon: Gavel,
        body: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex items-center gap-3">
              <MiniProgressRing percent={100} strokeColor="stroke-amber-500" sublabel="Unanimous" />
              <div className="flex-1 space-y-0.5 min-w-0">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold text-amber-700 dark:text-amber-300">Natural Justice in Art. 21</span>
                  <span className="text-[10px] text-slate-500">7:0 Verdict</span>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">Law depriving personal liberty must be just, fair and reasonable.</p>
              </div>
            </div>
          </div>
        ),
        footerLeft: 'Overruled A.K. Gopalan stricture',
        cta: 'View Maneka Ratio',
      },
    ]
  }, [])

  const numSlots = visibleSlots === 2 ? 2 : 3
  const [slotIndices, setSlotIndices] = useState(() =>
    Array.from({ length: numSlots }, (_, i) => i % Math.max(adPool.length, 1)),
  )
  const [fadingSlots, setFadingSlots] = useState<Record<number, boolean>>({})
  const hoverRef = useRef(hoveredSlot)
  hoverRef.current = hoveredSlot

  useEffect(() => {
    setSlotIndices(Array.from({ length: numSlots }, (_, i) => i % Math.max(adPool.length, 1)))
  }, [numSlots, adPool.length])

  useEffect(() => {
    const timer = setInterval(() => {
      if (hoverRef.current !== null) return
      setFadingSlots((prev) => {
        const next = { ...prev }
        for (let i = 0; i < numSlots; i++) next[i] = true
        return next
      })
      setTimeout(() => {
        setSlotIndices((prev) => prev.map((idx) => (idx + numSlots) % Math.max(adPool.length, 1)))
        setFadingSlots({})
      }, 180)
    }, 4500)
    return () => clearInterval(timer)
  }, [numSlots, adPool.length])

  const getBadgeClass = (tone: HeroLawAd['badgeTone']) => {
    const map: Record<HeroLawAd['badgeTone'], string> = {
      seal: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800',
      teal: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800',
      purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800',
      blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800',
      amber: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
      emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
    }
    return map[tone]
  }

  const handleCardClick = (ad: HeroLawAd) => {
    if (ad.toolSlug) {
      onSelectTool(ad.toolSlug)
      return
    }
    if (ad.subjectSlug && ad.topicId && onSelectTopic) {
      const subject = SUBJECTS.find((s) => s.slug === ad.subjectSlug)
      const topic = subject?.topics.find((t) => t.id === ad.topicId)
      if (subject && topic) {
        onSelectTopic(subject.slug, topic)
        return
      }
    }
    if (ad.subjectSlug && onSelectSubject) onSelectSubject(ad.subjectSlug)
  }

  const getFloatingClass = (slotIdx: number) => {
    if (slotIdx === 0) return 'animate-float-card-1'
    if (slotIdx === 1) return 'animate-float-card-2'
    return 'animate-float-card-3'
  }

  const getSlotMargin = (index: number) => {
    if (numSlots === 2) return index === 0 ? 'ml-3' : 'mr-3'
    if (index === 0) return 'ml-4'
    if (index === 1) return 'mr-2'
    return 'ml-6'
  }

  return (
    <div
      id="hero-preview-cards-stack"
      className="hero-floating-cards hidden lg:flex lg:col-span-5 flex-col gap-2.5 relative"
    >
      <div
        className="absolute -inset-2 bg-gradient-to-tr from-blue-600/15 via-pink-500/10 to-blue-700/15 rounded-3xl blur-2xl pointer-events-none opacity-80"
        aria-hidden="true"
      />

      {slotIndices.map((adIndex, slotIdx) => {
        const ad = adPool[adIndex] || adPool[0]
        const isFading = fadingSlots[slotIdx]
        const IconComponent = ad.icon

        return (
          <article
            key={`slot-${slotIdx}`}
            id={`hero-law-ad-slot-${slotIdx}`}
            onMouseEnter={() => setHoveredSlot(slotIdx)}
            onMouseLeave={() => setHoveredSlot(null)}
            onClick={() => handleCardClick(ad)}
            className={`group cursor-pointer p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-blue-500/25 shadow-lg hover:shadow-xl hover:shadow-blue-500/15 hover:scale-[1.02] hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200 ease-out relative overflow-hidden min-h-[112px] flex flex-col justify-between ${getFloatingClass(
              slotIdx,
            )} ${getSlotMargin(slotIdx)}`}
          >
            <div
              className={`transition-opacity duration-200 flex flex-col justify-between h-full ${
                isFading ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-700 dark:text-blue-300 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight truncate">{ad.title}</h3>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border shrink-0 ${getBadgeClass(ad.badgeTone)}`}>{ad.badge}</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 mb-2">{ad.body}</div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">
                <span className="truncate max-w-[170px]">{ad.footerLeft}</span>
                <span className="text-blue-700 dark:text-blue-300 font-bold group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-0.5 shrink-0">
                  {ad.cta}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
