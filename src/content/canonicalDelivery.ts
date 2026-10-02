export const DEFAULT_CANONICAL_CONTENT_BASE_URL =
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'

function envValue(name: string): string {
  try {
    const viteEnv =
      typeof import.meta !== 'undefined'
        ? (import.meta as { env?: Record<string, string | undefined> }).env?.[name]
        : undefined
    if (viteEnv) return viteEnv
  } catch {
    // Non-Vite execution.
  }

  try {
    const nodeEnv =
      typeof process !== 'undefined'
        ? process.env?.[name]
        : undefined
    if (nodeEnv) return nodeEnv
  } catch {
    // Browser execution without process.
  }

  return ''
}

export function getCanonicalContentBaseUrl(): string {
  return (
    envValue('VITE_LEGAL_CONTENT_BASE_URL') ||
    envValue('LEGAL_CONTENT_BASE_URL') ||
    DEFAULT_CANONICAL_CONTENT_BASE_URL
  ).replace(/\/$/, '')
}
