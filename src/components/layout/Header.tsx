import { useState } from 'react'
import { Moon, Sun, Scale, Menu } from 'lucide-react'
import { NavDrawer } from './NavDrawer'

interface HeaderProps {
  dark: boolean
  onToggleDark: () => void
  currentLabel?: string | null
  activeKey?: string
  onHome: () => void
  onOpenSubjects: () => void
  onSelectSubject: (slug: string) => void
  onSelectTool: (slug: string) => void
  onOpenKnowledge: () => void
  onOpenCaseLaw: () => void
  onOpenContact?: () => void
}

export function Header({
  dark,
  onToggleDark,
  currentLabel,
  activeKey,
  onHome,
  onOpenSubjects,
  onSelectSubject,
  onSelectTool,
  onOpenKnowledge,
  onOpenCaseLaw,
  onOpenContact,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (fn: () => void) => {
    setMenuOpen(false)
    fn()
  }

  return (
    <>
      <header className="border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-[70] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              id="sidebar-toggle-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => go(onHome)}
              className="flex items-center gap-2.5 min-w-0 text-left focus:outline-none"
              aria-label="CodePackr Law home"
            >
              <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-center shadow-xs ring-1 ring-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 leading-none text-slate-900 dark:text-white">
                  <span className="font-extrabold text-[16px] tracking-tight">CodePackr</span>{' '}
                  <span className="font-semibold text-[16px] text-amber-600 dark:text-amber-400">Law</span>
                  <span className="hidden sm:inline-block ml-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded-full border border-amber-500/20">
                    Bare Acts
                  </span>
                </span>
                {currentLabel ? (
                  <span className="mt-1 block truncate text-[11px] font-medium text-slate-500 dark:text-slate-400 max-w-[42vw] sm:max-w-xs">
                    {currentLabel}
                  </span>
                ) : (
                  <span className="mt-1 hidden sm:block text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                    Indian Bare Acts & Exam Prep
                  </span>
                )}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onToggleDark}
              aria-label="Toggle theme"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-150 shadow-2xs hover:scale-105"
              title={dark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            >
              {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      <NavDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        dark={dark}
        onToggleDark={onToggleDark}
        onHome={() => go(onHome)}
        onOpenSubjects={() => go(onOpenSubjects)}
        onSelectSubject={(slug) => go(() => onSelectSubject(slug))}
        onSelectTool={(slug) => go(() => onSelectTool(slug))}
        onOpenKnowledge={() => go(onOpenKnowledge)}
        onOpenCaseLaw={() => go(onOpenCaseLaw)}
        onOpenContact={onOpenContact ? () => go(onOpenContact) : undefined}
        activeKey={activeKey}
      />
    </>
  )
}
