import React, { useState, useEffect, useRef, useMemo } from 'react'
import {
  Scale,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowLeftRight,
  Layers,
  ScrollText,
  Library,
  Landmark,
  Gavel,
  FileText,
  CheckCircle2,
} from 'lucide-react'
import { SUBJECTS, type LawTopic } from '../../data/subjects'

// Mini Sparkline Component
interface MiniSparklineProps {
  id: string
  strokeColor: string
  gradientColor: string
  pathD: string
  areaD: string
  height?: number
}

const MiniSparkline: React.FC<MiniSparklineProps> = ({
  id,
  strokeColor,
  gradientColor,
  pathD,
  areaD,
  height = 28,
}) => (
  <div className="w-full relative overflow-hidden" style={{ height }}>
    <svg className="w-full h-full" viewBox="0 0 200 28" fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientColor} stopOpacity="0.35" />
          <stop offset="100%" stopColor={gradientColor} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        className="animate-draw-line"
      />
      <path d={areaD} fill={`url(#grad-${id})`} className="animate-fade-chart-area" />
    </svg>
  </div>
)

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
  visibleSlots = 3,
}) => {
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null)

  // Rotating pool of 16 authentic Law Library & Practice cards
  const adPool: HeroLawAd[] = useMemo(() => [
    {
      id: 'ad-bns-concordance',
      toolSlug: 'bns-ipc-mapper',
      title: 'BNS ↔ IPC Sanhita Mapper',
      badge: 'In Force July 2024',
      badgeTone: 'seal',
      icon: ArrowLeftRight,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between items-center text-[11px]">
            <span className="font-bold text-blue-700 dark:text-blue-300">
              BNS s. 103 ↔ IPC s. 302
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">
              Murder
            </span>
          </div>
          <MiniSegmentedBar
            segments={[
              { width: '65%', color: 'bg-blue-600', label: 's. 103(1) Death / LI', dotColor: 'bg-blue-600' },
              { width: '35%', color: 'bg-rose-500', label: 's. 103(2) Mob Lynching', dotColor: 'bg-rose-500' },
            ]}
          />
        </div>
      ),
      footerLeft: 'Complete penal concordance',
      cta: 'Launch Sanhita Mapper',
    },
    {
      id: 'ad-kesavananda',
      toolSlug: 'case-law',
      title: 'Kesavananda Bharati (1973)',
      badge: '13-Judge Bench',
      badgeTone: 'purple',
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
              <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
                Parliament cannot alter the essential identity of the Constitution.
              </p>
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
      badgeTone: 'teal',
      icon: Layers,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between items-center text-[11px]">
            <span className="font-bold text-teal-700 dark:text-teal-300">
              BNSS s. 480 ↔ CrPC s. 437
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold">
              Regular Bail
            </span>
          </div>
          <MiniSegmentedBar
            segments={[
              { width: '40%', color: 'bg-teal-600', label: 'Zero FIR: 24h', dotColor: 'bg-teal-600' },
              { width: '60%', color: 'bg-slate-400', label: 'Police Custody: 15-60d', dotColor: 'bg-slate-400' },
            ]}
          />
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
      badgeTone: 'seal',
      icon: Scale,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-600 dark:text-slate-400">Arts. 14 + 19 + 21 Interlock</span>
            <span className="font-bold text-blue-700 dark:text-blue-300">Due Process</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-300">
            <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold">
              Fair & Just
            </span>
            <span>+</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold">
              Non-Arbitrary
            </span>
            <span>+</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-semibold">
              Reasonable
            </span>
          </div>
        </div>
      ),
      footerLeft: 'Maneka Gandhi procedural test',
      cta: 'Open Art. 21 Notes',
    },
    {
      id: 'ad-bsa-concordance',
      toolSlug: 'bsa-iea-mapper',
      title: 'BSA ↔ Evidence Sanhita Mapper',
      badge: 'S. 63 Certificate',
      badgeTone: 'blue',
      icon: ShieldCheck,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between items-center text-[11px]">
            <span className="font-bold text-blue-700 dark:text-blue-300">
              BSA s. 63 ↔ IEA s. 65B
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-bold">
              Digital Evidence
            </span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-3 h-3" /> Hash Verification
            </span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-3 h-3" /> Custody Chain
            </span>
          </div>
        </div>
      ),
      footerLeft: 'Mandatory proving standards',
      cta: 'Open BSA Mapper',
    },
    {
      id: 'ad-maneka',
      toolSlug: 'case-law',
      title: 'Maneka Gandhi v. UOI (1978)',
      badge: '7-Judge Bench',
      badgeTone: 'amber',
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
              <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
                Law depriving personal liberty must be just, fair and reasonable.
              </p>
            </div>
          </div>
        </div>
      ),
      footerLeft: 'Overruled A.K. Gopalan stricture',
      cta: 'View Maneka Ratio',
    },
    {
      id: 'ad-cpc-injunction',
      subjectSlug: 'cpc',
      topicId: 'order-39',
      title: 'Order 39 Rules 1 & 2 CPC',
      badge: 'Tripartite Test',
      badgeTone: 'teal',
      icon: FileText,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-teal-700 dark:text-teal-300">Temporary Injunctions</span>
            <span className="text-[10px] text-slate-500 font-semibold">Civil Trial</span>
          </div>
          <MiniSegmentedBar
            segments={[
              { width: '34%', color: 'bg-teal-600', label: '1. Prima Facie', dotColor: 'bg-teal-600' },
              { width: '33%', color: 'bg-blue-500', label: '2. Balance of Conv.', dotColor: 'bg-blue-500' },
              { width: '33%', color: 'bg-rose-500', label: '3. Irreparable Injury', dotColor: 'bg-rose-500' },
            ]}
          />
        </div>
      ),
      footerLeft: 'Mandatory proving ingredients',
      cta: 'Explore Order 39',
    },
    {
      id: 'ad-aibe-mock',
      toolSlug: 'aibe-mcq',
      title: 'AIBE & Judiciary MCQ Practice',
      badge: '100 MCQs · 3h 30m',
      badgeTone: 'emerald',
      icon: GraduationCap,
      body: (
        <div className="space-y-1 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Syllabus Benchmark:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Pass Target: 45%</span>
          </div>
          {/* Real-time score sparkline */}
          <MiniSparkline
            id="aibe"
            strokeColor="#059669"
            gradientColor="#10b981"
            pathD="M0 26 Q 50 20, 100 12 T 200 4"
            areaD="M0 26 Q 50 20, 100 12 T 200 4 L 200 28 L 0 28 Z"
          />
          <div className="flex items-center justify-between text-[10px] text-slate-500">
            <span>Timed Mock Simulation</span>
            <span className="font-bold text-emerald-600">Zero Telemetry</span>
          </div>
        </div>
      ),
      footerLeft: 'Subject-wise analytics & timer',
      cta: 'Start AIBE Practice',
    },
    {
      id: 'ad-tort-defences',
      subjectSlug: 'tort',
      topicId: 'tort-general-defences',
      title: 'Tort General Defences',
      badge: 'BCI High-Yield',
      badgeTone: 'purple',
      icon: ShieldCheck,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-purple-700 dark:text-purple-300">Volenti Non Fit Injuria</span>
            <span className="text-[10px] text-slate-500 font-semibold">Consent Rule</span>
          </div>
          <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
            Knowledge is not consent (Smith v. Baker). Dual illustrations: Sports vs rescue.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-0.5">
            <span className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold">
              Vis Major
            </span>
            <span className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold">
              Inevitable Accident
            </span>
          </div>
        </div>
      ),
      footerLeft: 'Complete doctrinal treatise',
      cta: 'Study Tort Defences',
    },
    {
      id: 'ad-puttaswamy',
      toolSlug: 'case-law',
      title: 'Justice K.S. Puttaswamy (2017)',
      badge: '9-Judge Bench',
      badgeTone: 'seal',
      icon: Landmark,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex items-center gap-3">
            <MiniProgressRing percent={100} strokeColor="stroke-blue-700" sublabel="9:0 Verdict" />
            <div className="flex-1 space-y-0.5 min-w-0">
              <div className="flex justify-between text-[11px]">
                <span className="font-bold text-blue-700 dark:text-blue-300">Fundamental Right to Privacy</span>
                <span className="text-[10px] text-slate-500">9:0 Bench</span>
              </div>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
                Privacy is an intrinsic facet of Art. 21; Proportionality test mandated.
              </p>
            </div>
          </div>
        </div>
      ),
      footerLeft: 'Overruled MP Sharma & Kharak Singh',
      cta: 'Explore Privacy Ratio',
    },
    {
      id: 'ad-legal-maxims',
      toolSlug: 'legal-maxims',
      title: 'Legal Maxims & Jurisprudence',
      badge: 'Latin Ratio',
      badgeTone: 'amber',
      icon: ScrollText,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-amber-700 dark:text-amber-300">Ubi jus ibi remedium</span>
            <span className="text-[10px] text-slate-500 font-semibold">Remedy Exists</span>
          </div>
          <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
            Where there is a right, there is a remedy (Ashby v. White · Injuria sine damno).
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
              Res ipsa loquitur
            </span>
            <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
              Actus non facit reum
            </span>
          </div>
        </div>
      ),
      footerLeft: 'AIBE tested Latin vocabulary',
      cta: 'Open Legal Maxims',
    },
    {
      id: 'ad-s138-ni',
      subjectSlug: 'contract',
      topicId: 's-138-ni',
      title: 'S. 138 NI Act: Cheque Dishonour',
      badge: 'Commercial Trial',
      badgeTone: 'blue',
      icon: FileText,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-blue-700 dark:text-blue-300">Statutory Limitation Roadmap</span>
            <span className="text-[10px] text-slate-500 font-semibold">s. 138-142</span>
          </div>
          <MiniSegmentedBar
            segments={[
              { width: '25%', color: 'bg-blue-600', label: 'Dishonour Memo', dotColor: 'bg-blue-600' },
              { width: '35%', color: 'bg-teal-500', label: '30d Legal Notice', dotColor: 'bg-teal-500' },
              { width: '40%', color: 'bg-rose-500', label: '15d Cure / Complaint', dotColor: 'bg-rose-500' },
            ]}
          />
        </div>
      ),
      footerLeft: 'Section 139 statutory presumption',
      cta: 'View S. 138 Checklist',
    },
    {
      id: 'ad-chamber-formats',
      subjectSlug: 'petition-formats',
      topicId: 'format-writ-petition',
      title: 'Courtroom Drafting Formats',
      badge: 'Chamber Practice',
      badgeTone: 'seal',
      icon: Library,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-blue-700 dark:text-blue-300">High Court Art. 226 Writs</span>
            <span className="text-[10px] text-slate-500 font-semibold">Ready Skeleton</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 truncate">
              ✓ Order VII Plaint
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 truncate">
              ✓ Order VIII W.S.
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 truncate">
              ✓ Bail Petition (s. 480)
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 truncate">
              ✓ S. 138 NI Notice
            </span>
          </div>
        </div>
      ),
      footerLeft: 'Verified pleading clauses',
      cta: 'Open Chamber Formats',
    },
    {
      id: 'ad-flashcards',
      toolSlug: 'section-flashcards',
      title: 'Important Section Flashcards',
      badge: 'Active Recall',
      badgeTone: 'emerald',
      icon: Sparkles,
      body: (
        <div className="space-y-1 font-mono text-xs">
          <div className="flex items-center gap-3">
            <MiniProgressRing percent={84} strokeColor="stroke-emerald-600" sublabel="Memory Retention" />
            <div className="flex-1 space-y-0.5 min-w-0">
              <div className="flex justify-between text-[11px]">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">3,552 Bare Act Sections</span>
                <span className="text-[10px] text-slate-500">Recall Drill</span>
              </div>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
                Decks for BNS, BNSS, BSA, CPC, and Constitution with spaced revision.
              </p>
            </div>
          </div>
        </div>
      ),
      footerLeft: 'Client-side spaced repetition',
      cta: 'Practice Flashcards',
    },
    {
      id: 'ad-bns-s69',
      subjectSlug: 'bns',
      topicId: 's-69',
      title: 'BNS S. 69: Deceitful Promise',
      badge: 'New Penal Offence',
      badgeTone: 'seal',
      icon: Scale,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-blue-700 dark:text-blue-300">Sexual Intercourse on False Promise</span>
            <span className="text-[10px] text-slate-500 font-semibold">Up to 10y RI</span>
          </div>
          <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
            Distinct from rape: Proving ingredients require deceit from inception (s. 69 BNS).
          </p>
        </div>
      ),
      footerLeft: 'Statutory ingredients & case ratios',
      cta: 'Read S. 69 BNS',
    },
    {
      id: 'ad-navtej',
      toolSlug: 'case-law',
      title: 'Navtej Singh Johar (2018)',
      badge: '5-Judge Bench',
      badgeTone: 'purple',
      icon: Gavel,
      body: (
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex items-center gap-3">
            <MiniProgressRing percent={100} strokeColor="stroke-purple-600" sublabel="5:0 Unanimous" />
            <div className="flex-1 space-y-0.5 min-w-0">
              <div className="flex justify-between text-[11px]">
                <span className="font-bold text-purple-700 dark:text-purple-300">Decriminalisation of S. 377</span>
                <span className="text-[10px] text-slate-500">5:0 Verdict</span>
              </div>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 line-clamp-1">
                Constitutional morality prevails over majoritarian morality.
              </p>
            </div>
          </div>
        </div>
      ),
      footerLeft: 'Overruled Suresh Kumar Koushal',
      cta: 'View Navtej Ratio',
    },
  ], [])

  const numSlots = visibleSlots === 2 ? 2 : 3

  // Active indices for each visible slot
  const [slotIndices, setSlotIndices] = useState<number[]>(() => {
    return Array.from({ length: numSlots }, (_, i) => i % 16)
  })

  // Track fade state per slot
  const [fadingSlots, setFadingSlots] = useState<boolean[]>(() => {
    return Array.from({ length: numSlots }, () => false)
  })

  // Check reduced motion preference
  const isReducedMotion = useRef<boolean>(false)
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      }
    } catch {}
  }, [])

  // Staggered rotation intervals matching codepackr-finance
  useEffect(() => {
    if (isReducedMotion.current) return

    const baseInterval = 5800
    const staggerOffset = 1900
    const timeouts: NodeJS.Timeout[] = []
    const intervals: NodeJS.Timeout[] = []

    const rotateSlot = (slotIdx: number) => {
      // Pause if slot is hovered or document not visible
      if (hoveredSlot === slotIdx) return
      if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return

      // Trigger fade out
      setFadingSlots((prev) => {
        const next = [...prev]
        next[slotIdx] = true
        return next
      })

      // Change card after 180ms fade
      setTimeout(() => {
        setSlotIndices((prevIndices) => {
          const currentOccupied = new Set(prevIndices)
          let candidate = (prevIndices[slotIdx] + 1) % adPool.length
          let attempts = 0
          while (currentOccupied.has(candidate) && attempts < adPool.length) {
            candidate = (candidate + 1) % adPool.length
            attempts++
          }

          const nextIndices = [...prevIndices]
          nextIndices[slotIdx] = candidate
          return nextIndices
        })

        // Fade back in
        setTimeout(() => {
          setFadingSlots((prev) => {
            const next = [...prev]
            next[slotIdx] = false
            return next
          })
        }, 40)
      }, 180)
    }

    for (let slot = 0; slot < numSlots; slot++) {
      const initialDelay = slot * staggerOffset
      const t = setTimeout(() => {
        rotateSlot(slot)
        const inv = setInterval(() => rotateSlot(slot), baseInterval)
        intervals.push(inv)
      }, initialDelay + baseInterval)
      timeouts.push(t)
    }

    return () => {
      timeouts.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [adPool.length, hoveredSlot, numSlots])

  const handleCardClick = (ad: HeroLawAd) => {
    if (ad.toolSlug) {
      onSelectTool(ad.toolSlug)
      return
    }
    if (ad.subjectSlug && ad.topicId && onSelectTopic) {
      const subj = SUBJECTS.find((s) => s.slug === ad.subjectSlug)
      const topic = subj?.topics.find((t) => t.id === ad.topicId)
      if (subj && topic) {
        onSelectTopic(subj.slug, topic)
        return
      }
    }
    if (ad.subjectSlug && onSelectSubject) {
      onSelectSubject(ad.subjectSlug)
    }
  }

  const getBadgeClass = (tone: HeroLawAd['badgeTone']) => {
    switch (tone) {
      case 'seal':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
      case 'teal':
        return 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20'
      case 'purple':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20'
      case 'blue':
        return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20'
      case 'amber':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
      default:
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
    }
  }

  const getSlotMargin = (index: number) => {
    if (numSlots === 2) {
      return index === 0 ? 'ml-3' : 'mr-3'
    }
    if (index === 0) return 'ml-4'
    if (index === 1) return 'mr-2'
    return 'ml-6'
  }

  const getFloatingClass = (slotIdx: number) => {
    if (slotIdx === 0) return 'animate-float-card-1'
    if (slotIdx === 1) return 'animate-float-card-2'
    return 'animate-float-card-3'
  }

  return (
    <div
      id="hero-preview-cards-stack"
      className="hero-floating-cards hidden lg:flex lg:col-span-5 flex-col gap-4 relative"
    >
      {/* Ambient gradient glow behind stack */}
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
            className={`group cursor-pointer p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-blue-500/25 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.035] hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200 ease-out relative overflow-hidden min-h-[148px] flex flex-col justify-between ${getFloatingClass(
              slotIdx
            )} ${getSlotMargin(slotIdx)}`}
          >
            {/* Inner Content with smooth cross-fade */}
            <div
              className={`transition-opacity duration-200 flex flex-col justify-between h-full ${
                isFading ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
              }`}
            >
              <div>
                {/* Header: Icon chip + Title + Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-700 dark:text-blue-300 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight truncate">
                      {ad.title}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border shrink-0 ${getBadgeClass(
                      ad.badgeTone
                    )}`}
                  >
                    {ad.badge}
                  </span>
                </div>

                {/* Body: Elevated mono block with rich visual bars/pills */}
                <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 mb-2">
                  {ad.body}
                </div>
              </div>

              {/* Footer: Muted left text + Brand CTA with ArrowRight */}
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
