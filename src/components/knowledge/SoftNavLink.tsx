import type { MouseEvent, ReactNode } from 'react'

interface SoftNavLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export function SoftNavLink({ href, className, children }: SoftNavLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
