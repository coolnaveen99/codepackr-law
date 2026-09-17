import React from 'react'
import { Moon, Sun, ShieldCheck, ArrowLeft, Scale } from 'lucide-react'

interface HeaderProps {
  dark: boolean
  onToggleDark: () => void
  currentToolName?: string | null
  onBackToHome: () => void
}

export const Header: React.FC<HeaderProps> = ({
  dark,
  onToggleDark,
  currentToolName,
  onBackToHome,
}) => {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="https://www.codepackr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex-shrink-0"
            title="Return to Codepackr Dev Suite"
          >
            ← Codepackr Dev Suite
          </a>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          {currentToolName ? (
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition truncate"
            >
              <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
              <span>All Tools</span>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span className="text-slate-900 dark:text-slate-100 font-semibold truncate">
                {currentToolName}
              </span>
            </button>
          ) : (
            <div
              onClick={onBackToHome}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-500/20">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h1 className="font-bold text-lg tracking-tight leading-none text-slate-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400">Codepackr</span> Law
                </h1>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden md:block">
                  AIBE & Judiciary Learning Suite
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>100% Client-Side & Private</span>
          </div>

          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
            title={dark ? 'Switch to Light mode' : 'Switch to Dark mode'}
          >
            {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  )
}
