import type { ReactNode } from 'react'

type BadgeTone = 'neutral' | 'accent'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
}

/** Non-status label. Legal verification must use SourceStatus, not colour alone. */
export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span className="cp-ds-badge" data-tone={tone}>
      {children}
    </span>
  )
}
