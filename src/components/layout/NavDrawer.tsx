import { useEffect, useRef, type ReactNode } from 'react'
import {
  BookOpen,
  Home,
  Library,
  Network,
  ShieldCheck,
  ExternalLink,
  Moon,
  Sun,
  MessageSquare,
} from 'lucide-react'
import { SUBJECTS } from '../../data/subjects'
import { TOOLS } from '../../data/tools'
import { SubjectGlyph, ToolGlyph } from '../icons'

const CODE_SLUGS = ['constitution', 'bns', 'bnss', 'bsa'] as const
const MORE_SLUGS = [
  'cpc',
  'contract',
  'family',
  'tort',
  'adr',
  'pil',
  'ethics',
  'labour',
  'taxation',
  'admin',
  'company',
  'environment',
  'cyber',
  'land',
  'ipr',
  'petition-formats',
] as const

export interface NavDrawerProps {
  open: boolean
  onClose: () => void
  dark: boolean
  onToggleDark: () => void
  onHome: () => void
  onOpenSubjects: () => void
  onSelectSubject: (slug: string) => void
  onSelectTool: (slug: string) => void
  onOpenKnowledge: () => void
  onOpenCaseLaw: () => void
  onOpenContact?: () => void
  activeKey?: string
}

function Row({
  active,
  onClick,
  icon,
  label,
  hint,
}: {
  active?: boolean
  onClick: () => void
  icon: ReactNode
  label: string
  hint?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`nav-row w-full flex items-center gap-3 rounded-xl px-3 h-11 text-left transition-colors duration-150 ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
      }`}
    >
      <span className={active ? 'text-white' : 'text-blue-700 dark:text-blue-300'}>{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold truncate">{label}</span>
        {hint ? (
          <span className={`block text-[11px] truncate ${active ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>
            {hint}
          </span>
        ) : null}
      </span>
    </button>
  )
}

export function NavDrawer({
  open,
  onClose,
  dark,
  onToggleDark,
  onHome,
  onOpenSubjects,
  onSelectSubject,
  onSelectTool,
  onOpenKnowledge,
  onOpenCaseLaw,
  onOpenContact,
  activeKey,
}: NavDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const codes = CODE_SLUGS.map((slug) => SUBJECTS.find((s) => s.slug === slug)).filter(Boolean)
  const more = MORE_SLUGS.map((slug) => SUBJECTS.find((s) => s.slug === slug)).filter(Boolean)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <div className={`nav-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <button type="button" className="nav-drawer-backdrop" aria-label="Close menu" onClick={onClose} tabIndex={open ? 0 : -1} />
      <aside
        className="nav-drawer-panel"
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"

      >
        <div className="flex items-center justify-between gap-3 px-4 h-16 border-b border-slate-200 dark:border-slate-800">
          <div>
            <p className="font-extrabold text-sm text-slate-900 dark:text-white leading-none">
              CodePackr <span className="font-display italic font-semibold text-blue-700 dark:text-blue-300">Law</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">Student corner</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            aria-label="Close menu"
          >
            <span className="hamburger is-open" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          <section className="space-y-1">
            <Row active={activeKey === 'home'} onClick={onHome} icon={<Home className="w-4 h-4" />} label="Home" />
            <Row
              active={activeKey === 'subjects'}
              onClick={onOpenSubjects}
              icon={<BookOpen className="w-4 h-4" />}
              label="All subjects"
              hint="Syllabus map"
            />
          </section>

          <section className="space-y-1">
            <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">The codes</p>
            {codes.map((s) =>
              s ? (
                <Row
                  key={s.id}
                  active={activeKey === `subject:${s.slug}`}
                  onClick={() => onSelectSubject(s.slug)}
                  icon={<SubjectGlyph name={s.icon} className="w-4 h-4" />}
                  label={s.shortName}
                  hint={`${s.topics.filter((t) => t.type === 'section' || t.type === 'article').length || s.topics.length} topics`}
                />
              ) : null,
            )}
          </section>

          <section className="space-y-1">
            <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">High yield</p>
            {more.map((s) =>
              s ? (
                <Row
                  key={s.id}
                  active={activeKey === `subject:${s.slug}`}
                  onClick={() => onSelectSubject(s.slug)}
                  icon={<SubjectGlyph name={s.icon} className="w-4 h-4" />}
                  label={s.shortName}
                />
              ) : null,
            )}
            <button
              type="button"
              onClick={onOpenSubjects}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:underline"
            >
              Every AIBE subject →
            </button>
          </section>

          <section className="space-y-1">
            <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Practice tools</p>
            {TOOLS.map((tool) => (
              <Row
                key={tool.id}
                active={activeKey === `tool:${tool.slug}`}
                onClick={() => onSelectTool(tool.slug)}
                icon={<ToolGlyph name={tool.icon} className="w-4 h-4" />}
                label={tool.name.replace('AIBE & Judiciary ', '').replace(' & Pacing Helper', '')}
              />
            ))}
          </section>

          <section className="space-y-1">
            <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Library</p>
            <Row
              active={activeKey === 'knowledge'}
              onClick={onOpenKnowledge}
              icon={<Network className="w-4 h-4" />}
              label="Legal knowledge"
              hint="Doctrines & maxims"
            />
            <Row
              active={activeKey === 'case-law'}
              onClick={onOpenCaseLaw}
              icon={<Library className="w-4 h-4" />}
              label="Case law library"
            />
          </section>

          {onOpenContact && (
            <section className="space-y-1">
              <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Support
              </p>
              <Row
                active={activeKey === 'contact'}
                onClick={onOpenContact}
                icon={<MessageSquare className="w-4 h-4" />}
                label="Contact & feedback"
                hint="Direct suggestions & questions"
              />
            </section>
          )}
        </nav>

        <div className="border-t border-slate-200 dark:border-slate-800 p-3 space-y-2">
          <button
            type="button"
            onClick={onToggleDark}
            className="w-full flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 px-3 h-11 text-sm font-semibold text-slate-800 dark:text-slate-100"
          >
            <span className="inline-flex items-center gap-2">
              {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              {dark ? 'Light mode' : 'Dark mode'}
            </span>
          </button>
          <p className="flex items-center gap-1.5 px-1 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Stays on this device
          </p>
          <a
            href="https://www.codepackr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-1 text-[11px] text-slate-500 hover:text-blue-700"
          >
            Codepackr family <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </aside>
    </div>
  )
}
