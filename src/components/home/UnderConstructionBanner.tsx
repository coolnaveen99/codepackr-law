import { Construction } from 'lucide-react'

/** Large caution-tape under-construction notice for the Law home page */
export function UnderConstructionBanner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="relative overflow-hidden rounded-3xl border-4 border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-500/20"
    >
      <div
        className="h-10 sm:h-14 w-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #fbbf24 0 18px, #111827 18px 36px)',
        }}
        aria-hidden
      />

      <div className="bg-amber-50 dark:bg-slate-900 px-5 sm:px-10 py-10 sm:py-14 text-center space-y-6">
        <div className="mx-auto max-w-3xl">
          <svg
            viewBox="0 0 720 180"
            className="w-full h-auto drop-shadow-md"
            role="img"
            aria-label="Yellow and black caution tape: Site under construction"
          >
            <defs>
              <pattern
                id="cautionStripes"
                patternUnits="userSpaceOnUse"
                width="32"
                height="32"
                patternTransform="rotate(-45)"
              >
                <rect width="16" height="32" fill="#f59e0b" />
                <rect x="16" width="16" height="32" fill="#111827" />
              </pattern>
            </defs>
            <rect x="12" y="36" width="696" height="108" rx="10" fill="url(#cautionStripes)" stroke="#b45309" strokeWidth="5" />
            <rect x="70" y="54" width="580" height="72" rx="8" fill="#111827" opacity="0.94" />
            <text
              x="360"
              y="102"
              textAnchor="middle"
              fill="#fbbf24"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontWeight="900"
              fontSize="32"
              letterSpacing="3"
            >
              SITE UNDER CONSTRUCTION
            </text>
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-amber-950 dark:text-amber-50 uppercase leading-none">
          Site under construction
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-100 max-w-3xl mx-auto leading-snug">
          Codepackr Law is being expanded with more subjects, notes, and tools.
          <span className="block mt-2 text-xl sm:text-2xl font-black">
            Content may change — please check back soon.
          </span>
        </p>

        <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-amber-300 dark:bg-amber-800 text-amber-950 dark:text-amber-50 text-base sm:text-lg font-black uppercase tracking-widest">
          <Construction className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
          Work in progress
        </div>
      </div>

      <div
        className="h-10 sm:h-14 w-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #fbbf24 0 18px, #111827 18px 36px)',
        }}
        aria-hidden
      />
    </div>
  )
}
