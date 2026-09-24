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
              className="flex items-center gap-2.5 min-w-0 text-left"
              aria-label="CodePackr Law home"
            >
              <div className="w-9 h-9 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-600/25 shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <span className="min-w-0">
                <span className="block leading-none text-slate-900 dark:text-white">
                  <span className="font-extrabold text-[15px] tracking-tight">CodePackr</span>{' '}
                  <span className="font-semibold text-[15px] text-blue-700 dark:text-blue-300">Law</span>
                </span>
                {currentLabel ? (
                  <span className="mt-1 block truncate text-[11px] font-medium text-slate-500 dark:text-slate-400 max-w-[42vw] sm:max-w-xs">
                    {currentLabel}
                  </span>
                ) : (
                  <span className="mt-1 hidden sm:block text-[10px] font-medium tracking-[0.14em] uppercase text-slate-500 dark:text-slate-400">
                    Student corner
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
              className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors duration-150"
              title={dark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            >
              {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
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
