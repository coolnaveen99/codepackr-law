import type { ReactNode } from 'react'

interface PanelProps {
  title: string
  kicker?: string
  actions?: ReactNode
  children: ReactNode
  surface?: 'raised' | 'sunken'
  headingLevel?: 'h2' | 'h3'
}

export function Panel({
  title,
  kicker,
  actions,
  children,
  surface = 'raised',
  headingLevel = 'h2',
}: PanelProps) {
  const Heading = headingLevel
  return (
    <section className="cp-ds-panel" data-surface={surface}>
      <div className="cp-ds-panel-head">
        <div>
          {kicker ? <p className="cp-ds-kicker">{kicker}</p> : null}
          <Heading>{title}</Heading>
        </div>
        {actions ? <div>{actions}</div> : null}
      </div>
      <div>{children}</div>
    </section>
  )
}
