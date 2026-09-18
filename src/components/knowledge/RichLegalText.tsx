import { Fragment, type ReactNode } from 'react'
import { getEntity, hrefFor, parseRefs } from '../../data/knowledge'
import { SoftNavLink } from './SoftNavLink'

export function RichLegalText({ text, className }: { text: string; className?: string }) {
  const blocks = text.split('\n').filter((p) => p.length > 0)
  return (
    <div className={className}>
      {blocks.map((block, i) => (
        <p key={i} className={i === 0 ? 'leading-relaxed' : 'mt-3 leading-relaxed'}>
          {renderLine(block)}
        </p>
      ))}
    </div>
  )
}

function renderLine(text: string): ReactNode {
  const refs = parseRefs(text)
  if (refs.length === 0) return text
  const nodes: ReactNode[] = []
  let cursor = 0
  refs.forEach((ref, i) => {
    if (ref.start > cursor) nodes.push(text.slice(cursor, ref.start))
    const entity = getEntity(ref.id)
    const label = ref.label || entity?.title || ref.id
    if (entity) {
      nodes.push(
        <SoftNavLink
          key={`${ref.id}-${i}`}
          href={hrefFor(entity)}
          className="font-medium text-blue-600 dark:text-blue-400 underline-offset-2 hover:underline"
        >
          {label}
        </SoftNavLink>,
      )
    } else {
      nodes.push(
        <span key={`${ref.id}-${i}`} className="text-slate-500">
          {label}
        </span>,
      )
    }
    cursor = ref.end
  })
  if (cursor < text.length) nodes.push(text.slice(cursor))
  return nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>)
}
