import React, { useState } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'

interface GlobalLawBannerProps {
  onSelectTool: (slug: string) => void
}

export const GlobalLawBanner: React.FC<GlobalLawBannerProps> = ({ onSelectTool }) => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="alert"
      className="w-full border-b border-blue-500/30 bg-blue-50/90 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 py-1.5 px-3 sm:px-5 transition-all duration-200"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <span className="px-2 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider border shrink-0 bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-500/30">
            Sanhitas Transition
          </span>
          <p className="font-medium truncate sm:whitespace-normal">
            New Criminal Laws (BNS 2023, BNSS 2023 &amp; BSA 2023) in force: Concordance mappers, section conversions, and new offences fully active.
          </p>
          <button
            type="button"
            onClick={() => onSelectTool('bns-ipc-mapper')}
            className="inline-flex items-center gap-1 font-bold underline hover:opacity-80 transition-opacity shrink-0 ml-1 cursor-pointer"
          >
            <span>Launch Mapper</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
          title="Dismiss notification"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
