import type { LucideIcon } from 'lucide-react'
import {
  AlertTriangle,
  ArrowLeftRight,
  BookOpenCheck,
  Briefcase,
  Building2,
  Calculator,
  Copyright,
  Factory,
  FilePen,
  FileSignature,
  FileText,
  Gavel,
  Handshake,
  Landmark,
  Layers,
  Leaf,
  Library,
  Map,
  Megaphone,
  Monitor,
  Network,
  Scale,
  ScrollText,
  Search,
  Shield,
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
