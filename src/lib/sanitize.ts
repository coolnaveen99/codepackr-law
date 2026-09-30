/**
 * Phase 29 — security helpers for user-provided text rendering.
 * Prefer textContent / escaped output; never execute uploaded content.
 */

const HTML_ESCAPE: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function escapeHtml(input: string): string {
  return String(input).replace(/[&<>"']/g, (ch) => HTML_ESCAPE[ch] || ch)
}

export function stripTags(input: string): string {
  return String(input)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const MAX_PASTE_CHARS = 500_000

export function limitUserText(input: string, max = MAX_PASTE_CHARS): string {
  if (input.length <= max) return input
  return input.slice(0, max)
}

const BLOCKED_EXT = new Set([
  'exe', 'bat', 'cmd', 'com', 'msi', 'scr', 'js', 'mjs', 'vbs', 'ps1', 'sh', 'php', 'jar',
])

export function isBlockedExtension(filename: string): boolean {
  const parts = filename.toLowerCase().split('.')
  if (parts.length < 2) return false
  return BLOCKED_EXT.has(parts[parts.length - 1] || '')
}

export function allowedTextMime(mime: string): boolean {
  const m = mime.toLowerCase()
  return (
    m === 'text/plain' ||
    m === 'text/markdown' ||
    m === 'application/json' ||
    m === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    m === ''
  )
}
