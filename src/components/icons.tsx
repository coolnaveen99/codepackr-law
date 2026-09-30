import type { LucideIcon } from 'lucide-react'
import {
  AlertTriangle,
  ArrowLeftRight,
  BookMarked,
  BookOpenCheck,
  Briefcase,
  Building2,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  Copyright,
  Factory,
  FilePen,
  FileSignature,
  FileText,
  FileDiff,
  FlaskConical,
  Gavel,
  GitCompare,
  Handshake,
  Landmark,
  Layers,
  LayoutDashboard,
  Leaf,
  Library,
  ListOrdered,
  Map,
  Megaphone,
  Monitor,
  Network,
  Scale,
  ScrollText,
  Search,
  Shield,
  ShieldCheck,
  Timer,
  Users,
} from 'lucide-react'

const TOOL_ICONS: Record<string, LucideIcon> = {
  BookOpenCheck,
  ArrowLeftRight,
  Layers,
  Timer,
  ScrollText,
  Scale,
  Library,
  Network,
  FileDiff,
  FileText,
  FlaskConical,
  ShieldCheck,
  GitCompare,
  Briefcase,
  ClipboardCheck,
  Calculator,
  BookMarked,
  CalendarDays,
  LayoutDashboard,
  ListOrdered,
  Landmark,
  Shield,
  Search,
}

const SUBJECT_ICONS: Record<string, LucideIcon> = {
  Landmark,
  Gavel,
  FileText,
  Shield,
  Search,
  Users,
  FileSignature,
  FilePen,
  AlertTriangle,
  Handshake,
  Megaphone,
  Scale,
  Factory,
  Calculator,
  Building2,
  Briefcase,
  Leaf,
  Monitor,
  Map,
  Copyright,
}

export function ToolGlyph({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  const Icon = TOOL_ICONS[name] ?? BookOpenCheck
  return <Icon className={className} />
}

export function SubjectGlyph({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const Icon = SUBJECT_ICONS[name] ?? Landmark
  return <Icon className={className} />
}
