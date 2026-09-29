import { Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx'
import { jsPDF } from 'jspdf'

export type ExportKind = 'txt' | 'docx' | 'pdf'

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function safeName(name: string): string {
  return (name || 'document').replace(/[\\/:*?"<>|]+/g, '-').replace(/\\s+/g, ' ').trim().slice(0, 80) || 'document'
}

function paragraphsFromText(text: string): string[] {
  return text.replace(/\\r\\n/g, '\\n').split('\\n')
}

export function downloadText(text: string, filename = 'document.txt') {
  downloadBlob(new Blob([text], { type: 'text/plain;charset=utf-8' }), filename)
}

export async function downloadDocx(text: string, filename = 'document.docx', title?: string) {
  const lines = paragraphsFromText(text)
  const children = lines.map((line, index) => {
    const trimmed = line.trim()
    if (!trimmed) return new Paragraph({ spacing: { after: 120 } })
    const looksHeading =
      trimmed === trimmed.toUpperCase() &&
      trimmed.length <= 120 &&
      !/^[-—]/.test(trimmed)

    return new Paragraph({
      heading: looksHeading ? HeadingLevel.HEADING_2 : undefined,
      spacing: { after: 140, line: 276 },
      children: [new TextRun({ text: line, font: 'Times New Roman', size: 24 })],
      keepNext: looksHeading && index < lines.length - 1,
    })
  })

  const doc = new Document({
    creator: 'CodePackr Law',
    title: title || 'Legal Document',
    description: 'Document generated locally by CodePackr Law.',
    sections: [{
      properties: {
        page: {
          margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
        },
      },
      children,
    }],
  })

  const blob = await Packer.toBlob(doc)
  downloadBlob(blob, filename)
}

export function printAsPdf(text: string, title = 'CodePackr Law Document') {
  const printable = document.createElement('iframe')
  printable.setAttribute('aria-hidden', 'true')
  printable.style.position = 'fixed'
  printable.style.right = '0'
  printable.style.bottom = '0'
  printable.style.width = '0'
  printable.style.height = '0'
  printable.style.border = '0'
  document.body.appendChild(printable)

  const frameDocument = printable.contentDocument
  if (!frameDocument) {
    printable.remove()
    throw new Error('Unable to prepare PDF print view.')
  }

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

  const html = paragraphsFromText(text)
    .map((line) => line ? `<p>${escapeHtml(line)}</p>` : '<div class="spacer"></div>')
    .join('')

  frameDocument.open()
  frameDocument.write(`<!doctype html><html><head><title>${escapeHtml(title)}</title><style>
    @page { size: A4; margin: 25mm 20mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; background: #fff; font-family: "Times New Roman", Times, serif; font-size: 13pt; line-height: 1.55; }
    h1 { font-family: Arial, sans-serif; font-size: 14pt; text-align: center; margin: 0 0 18pt; }
    p { margin: 0 0 10pt; white-space: pre-wrap; }
    .spacer { height: 8pt; }
  </style></head><body><h1>${escapeHtml(title)}</h1>${html}</body></html>`)
  frameDocument.close()

  const cleanup = () => window.setTimeout(() => printable.remove(), 500)
  printable.onload = () => {
    printable.contentWindow?.focus()
    printable.contentWindow?.print()
    cleanup()
  }

  window.setTimeout(() => {
    printable.contentWindow?.focus()
    printable.contentWindow?.print()
    cleanup()
  }, 150)
}

export function downloadPdf(text: string, filename = 'document.pdf', title = 'CodePackr Law Document') {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 56
  let y = 56

  doc.setFont('times', 'normal')
  doc.setFontSize(12)
  doc.text(title, pageWidth / 2, y, { align: 'center' })
  y += 28

  const lines = doc.splitTextToSize(text.replace(/\\r\\n/g, '\\n'), pageWidth - margin * 2) as string[]
  for (const line of lines) {
    if (y > pageHeight - margin) {
      doc.addPage()
      y = margin
      doc.setFont('times', 'normal')
      doc.setFontSize(12)
    }
    doc.text(line, margin, y)
    y += 17
  }

  doc.save(filename)
}

export async function downloadLegalDocument(
  text: string,
  baseName: string,
  kind: ExportKind,
  title?: string,
) {
  const name = safeName(baseName)
  if (kind === 'txt') downloadText(text, `${name}.txt`)
  else if (kind === 'docx') await downloadDocx(text, `${name}.docx`, title || name)
  else downloadPdf(text, `${name}.pdf`, title || name)
}
