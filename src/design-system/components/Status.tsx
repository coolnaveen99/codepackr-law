import type { ReactNode } from 'react'
import {
  inForceLabel,
  sourceKindLabel,
  verificationLabel,
  type InForceStatusToken,
  type SourceKindToken,
  type VerificationStatusToken,
} from '../tokens'

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg className="cp-ds-mark" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

function StatusMark({ status }: { status: VerificationStatusToken }) {
  if (status === 'verified') {
    return (
      <Mark>
        <path d="M2 6.2 4.6 8.8 10 3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </Mark>
    )
  }
  if (status === 'conflict') {
    return (
      <Mark>
        <path d="M6 2.2 10.2 9.8H1.8L6 2.2Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </Mark>
    )
  }
  if (status === 'partial' || status === 'parsed') {
    return (
      <Mark>
        <path d="M2 6h8" stroke="currentColor" strokeWidth="1.6" />
      </Mark>
    )
  }
  return (
    <Mark>
      <circle cx="6" cy="6" r="2" fill="currentColor" />
    </Mark>
  )
}

interface SourceStatusProps {
  status: VerificationStatusToken
  children?: ReactNode
}

/** Verification chip. Label and mark are required; colour is never the only signal. */
export function SourceStatus({ status, children }: SourceStatusProps) {
  return (
    <span className="cp-ds-status" data-status={status}>
      <StatusMark status={status} />
      <span>{children ?? verificationLabel[status]}</span>
    </span>
  )
}

interface SourceKindProps {
  kind: SourceKindToken
}

export function SourceKind({ kind }: SourceKindProps) {
  return (
    <span className="cp-ds-kind" data-kind={kind}>
      {sourceKindLabel[kind]}
    </span>
  )
}

interface InForceBadgeProps {
  status: InForceStatusToken
}

export function InForceBadge({ status }: InForceBadgeProps) {
  return (
    <span className="cp-ds-force" data-force={status}>
      {inForceLabel[status]}
    </span>
  )
}

interface CitationProps {
  children: ReactNode
}

export function Citation({ children }: CitationProps) {
  return <span className="cp-ds-citation">{children}</span>
}
