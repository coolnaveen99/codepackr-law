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

function parseInlineMarkdown(text: string): ReactNode[] {
  // Matches: **bold**, *italic*, `code`, [label](url)
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  const parts = text.split(regex)
  if (parts.length === 1) return [text]

  return parts.map((part, idx) => {
    if (!part) return null
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={idx} className="font-bold text-slate-950 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={idx} className="italic text-slate-800 dark:text-slate-200">
          {part.slice(1, -1)}
        </em>
      )
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={idx}
          className="rounded-md bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-700"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const [, label, url] = linkMatch
      const isInternal = url.startsWith('/')
      if (isInternal) {
        return (
          <SoftNavLink
            key={idx}
            href={url}
            className="font-medium text-blue-600 dark:text-blue-400 underline-offset-2 hover:underline"
          >
            {label}
          </SoftNavLink>
        )
      }
      return (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 dark:text-blue-400 underline-offset-2 hover:underline"
        >
          {label}
        </a>
      )
    }
    return part
  })
}

export function renderRichText(text: string): ReactNode {
  return renderLine(text)
}

function renderLine(text: string): ReactNode {
  const refs = parseRefs(text)
  if (refs.length === 0) return parseInlineMarkdown(text)

  const nodes: ReactNode[] = []
  let cursor = 0

  refs.forEach((ref, i) => {
    if (ref.start > cursor) {
      nodes.push(...parseInlineMarkdown(text.slice(cursor, ref.start)))
    }
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

  if (cursor < text.length) {
    nodes.push(...parseInlineMarkdown(text.slice(cursor)))
  }

  return nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>)
}
