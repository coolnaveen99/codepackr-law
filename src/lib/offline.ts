/**
 * Phase 21 — offline / PWA helpers.
 * Cached shell must never be presented as current legal authority.
 */

export function isOnline(): boolean {
  if (typeof navigator === 'undefined') return true
  return navigator.onLine
}

export function registerServiceWorker(): void {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* silent — SW optional on some hosts */
    })
  })
}

export type ConnectivityListener = (online: boolean) => void

export function subscribeConnectivity(listener: ConnectivityListener): () => void {
  if (typeof window === 'undefined') return () => {}
  const on = () => listener(true)
  const off = () => listener(false)
  window.addEventListener('online', on)
  window.addEventListener('offline', off)
  return () => {
    window.removeEventListener('online', on)
    window.removeEventListener('offline', off)
  }
}
