import type { ReactNode } from 'react'

interface WorkspaceProps {
  rail?: ReactNode
  inspector?: ReactNode
  children: ReactNode
  label?: string
}

export function Workspace({ rail, inspector, children, label = 'Workspace' }: WorkspaceProps) {
  return (
    <div
      className="cp-ds-workspace"
      data-rail={rail ? 'true' : 'false'}
      data-inspector={inspector ? 'true' : 'false'}
      aria-label={label}
    >
      {rail}
      {children}
      {inspector}
    </div>
  )
}

interface RegionProps {
  title: string
  children: ReactNode
}

export function WorkspaceRail({ title, children }: RegionProps) {
  return (
    <aside className="cp-ds-rail" aria-label={title}>
      <p className="cp-ds-kicker">{title}</p>
      {children}
    </aside>
  )
}

export function WorkspaceCanvas({ title, children }: RegionProps) {
  return (
    <section className="cp-ds-canvas" aria-label={title}>
      {children}
    </section>
  )
}

export function WorkspaceInspector({ title, children }: RegionProps) {
  return (
    <aside className="cp-ds-inspector" aria-label={title}>
      <p className="cp-ds-kicker">{title}</p>
      {children}
    </aside>
  )
}

export function WorkspaceToolbar({ children, label = 'Workspace actions' }: { children: ReactNode; label?: string }) {
  return (
    <div className="cp-ds-toolbar" role="toolbar" aria-label={label}>
      {children}
    </div>
  )
}
