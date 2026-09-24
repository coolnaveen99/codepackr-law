import { renderRichText } from '../knowledge/RichLegalText'
import { Bookmark, ChevronRight, Info } from 'lucide-react'

interface ModularStudyRendererProps {
  text: string
  className?: string
  defaultCardTitle?: string
}

interface BlockItem {
  type: 'heading' | 'subheading' | 'callout' | 'list-numbered' | 'list-bullet' | 'paragraph' | 'divider'
  content: string
  items?: string[]
}

interface SectionModule {
  id: string
  title: string
  badge?: string
  blocks: BlockItem[]
}

export function ModularStudyRenderer({
  text,
  className,
  defaultCardTitle,
}: ModularStudyRendererProps) {
  if (!text || !text.trim()) return null

  const sections = parseModularSections(text, defaultCardTitle)

  return (
    <div className={className || 'space-y-6'}>
      {sections.map((section, sIdx) => (
        <article
          key={section.id || `sec-${sIdx}`}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs space-y-4"
        >
          {section.title && (
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                {section.badge ? (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                    {section.badge}
                  </span>
                ) : (
                  <span className="p-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Bookmark className="w-3.5 h-3.5" />
                  </span>
                )}
                <h4 className="font-display text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                  {renderRichText(section.title)}
                </h4>
              </div>
            </div>
          )}

          <div className="space-y-4 text-base sm:text-lg leading-8 text-slate-800 dark:text-slate-200">
            {section.blocks.map((block, bIdx) => (
              <RenderBlock key={bIdx} block={block} />
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

function RenderBlock({ block }: { block: BlockItem }) {
  switch (block.type) {
    case 'subheading':
      return (
        <div className="pt-2">
          <h5 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
            <span>{renderRichText(block.content)}</span>
          </h5>
        </div>
      )

    case 'callout':
      return (
        <div className="rounded-xl border-l-4 border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-blue-950 dark:text-blue-100 space-y-1 my-2">
          <div className="flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-300 text-xs uppercase tracking-wide">
            <Info className="w-3.5 h-3.5" />
            <span>Note / Judicial Commentary</span>
          </div>
          <div className="pt-1 whitespace-pre-line">
            {renderRichText(block.content)}
          </div>
        </div>
      )

    case 'list-numbered':
      return (
        <ol className="space-y-2.5 my-2">
          {block.items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800 mt-1">
                {idx + 1}
              </span>
              <div className="flex-1 text-base sm:text-lg leading-8 text-slate-800 dark:text-slate-200">
                {renderRichText(item)}
              </div>
            </li>
          ))}
        </ol>
      )

    case 'list-bullet':
      return (
        <ul className="space-y-2 my-2">
          {block.items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-blue-500 dark:text-blue-400 mt-2 shrink-0">
                <ChevronRight className="w-4 h-4" />
              </span>
              <div className="flex-1 text-base sm:text-lg leading-8 text-slate-800 dark:text-slate-200">
                {renderRichText(item)}
              </div>
            </li>
          ))}
        </ul>
      )

    case 'divider':
      return <hr className="border-t border-slate-100 dark:border-slate-800 my-4" />

    case 'paragraph':
    default:
      return (
        <p className="text-base sm:text-lg leading-8 text-slate-800 dark:text-slate-200">
          {renderRichText(block.content)}
        </p>
      )
  }
}

function parseModularSections(rawText: string, defaultCardTitle?: string): SectionModule[] {
  const lines = rawText.split('\n')
  const sections: SectionModule[] = []

  let currentSection: SectionModule = {
    id: 'sec-0',
    title: defaultCardTitle || '',
    blocks: [],
  }

  let currentList: { type: 'numbered' | 'bullet'; items: string[] } | null = null
  let currentCallout: string[] | null = null

  function flushList() {
    if (!currentList) return
    currentSection.blocks.push({
      type: currentList.type === 'numbered' ? 'list-numbered' : 'list-bullet',
      content: '',
      items: currentList.items,
    })
    currentList = null
  }

  function flushCallout() {
    if (!currentCallout) return
    currentSection.blocks.push({
      type: 'callout',
      content: currentCallout.join('\n'),
    })
    currentCallout = null
  }

  function flushAll() {
    flushList()
    flushCallout()
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i]
    const trimmed = rawLine.trim()

    if (!trimmed) {
      flushAll()
      continue
    }

    // Horizontal Rule: --- or ***
    if (/^(?:---|___|\*\*\*)$/.test(trimmed)) {
      flushAll()
      // A horizontal rule between sections can cleanly separate them
      continue
    }

    // Markdown Heading 1, 2, or 3: #, ##, ###
    const hMatch = trimmed.match(/^(#{1,3})\s+(.+)$/)
    // Or plain legal headings (e.g. "Topic at a glance", "Essential Ingredients", "1. Introduction", "Meaning and concept")
    const isNumberedHeading = /^\d+\.\s+[A-Z][^.?!”]{3,60}$/.test(trimmed)
    const isNamedLegalHeading =
      /^(Topic at a glance|Introduction|Meaning and concept|Why the rule exists|Definitions|Essential ingredients|How the rule operates|Exceptions|Distinctions|Current-law close|Statutory Anatomy|Evolution of Judicial Scrutiny|Procedural & (?:Forum Anchor|Courtroom Anchors)|Evidentiary (?:Proving Standards|Burden)|Adversarial (?:Submissions|Courtroom Submissions)|Exceptions, Provisos & Limitations|2024 Transitional Status)\b/i.test(
        trimmed,
      ) && trimmed.length < 80

    if (hMatch || (isNumberedHeading && !trimmed.includes(':')) || isNamedLegalHeading) {
      flushAll()
      const rawTitle = hMatch ? hMatch[2] : trimmed
      const title = rawTitle.replace(/^#+\s*/, '').trim()

      // Extract optional badge from numbered title e.g. "1. Overview" -> badge "Part 1" or "Section 1"
      let badge: string | undefined
      const numMatch = title.match(/^(\d+)\.\s*(.+)$/)
      let cleanTitle = title
      if (numMatch) {
        badge = `Module ${numMatch[1]}`
        cleanTitle = numMatch[2]
      }

      // If current section already has content, push and start a new section
      if (currentSection.blocks.length > 0 || currentSection.title) {
        sections.push(currentSection)
        currentSection = {
          id: `sec-${sections.length}`,
          title: cleanTitle,
          badge,
          blocks: [],
        }
      } else {
        currentSection.title = cleanTitle
        currentSection.badge = badge
      }
      continue
    }

    // Subheadings: #### or specific bold markers e.g. "#### Track A — ..."
    const subHMatch = trimmed.match(/^(?:#{4,6})\s+(.+)$/)
    if (subHMatch) {
      flushAll()
      currentSection.blocks.push({
        type: 'subheading',
        content: subHMatch[1].trim(),
      })
      continue
    }

    // Blockquotes / Callout lines: > ...
    if (trimmed.startsWith('>')) {
      flushList()
      const calloutText = trimmed.replace(/^>\s?/, '').trim()
      if (!currentCallout) currentCallout = []
      currentCallout.push(calloutText)
      continue
    }

    // Numbered list item: 1. ... or 2) ...
    const numListMatch = trimmed.match(/^(\d+)[\.\)]\s+(.+)$/)
    if (numListMatch && numListMatch[2].length > 0) {
      flushCallout()
      if (!currentList || currentList.type !== 'numbered') {
        flushList()
        currentList = { type: 'numbered', items: [] }
      }
      currentList.items.push(numListMatch[2])
      continue
    }

    // Bullet list item: - ... or * ... or • ...
    const bulletListMatch = trimmed.match(/^[-*•]\s+(.+)$/)
    if (bulletListMatch && bulletListMatch[1].length > 0) {
      flushCallout()
      if (!currentList || currentList.type !== 'bullet') {
        flushList()
        currentList = { type: 'bullet', items: [] }
      }
      currentList.items.push(bulletListMatch[1])
      continue
    }

    // Normal paragraph line
    flushAll()
    currentSection.blocks.push({
      type: 'paragraph',
      content: trimmed,
    })
  }

  flushAll()

  if (currentSection.blocks.length > 0 || currentSection.title) {
    sections.push(currentSection)
  }

  // Fallback: if no sections were parsed, return single section with entire content
  if (sections.length === 0) {
    sections.push({
      id: 'sec-fallback',
      title: defaultCardTitle || '',
      blocks: [{ type: 'paragraph', content: rawText }],
    })
  }

  return sections
}
