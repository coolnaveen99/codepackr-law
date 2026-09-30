import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'
import { isOnline, subscribeConnectivity } from '../lib/offline'

/** Phase 21 — visible offline state; cached shell is not "current law". */
export function OfflineBanner() {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    setOnline(isOnline())
    return subscribeConnectivity(setOnline)
  }, [])

  if (online) return null

  return (
    <div
      role="status"
      className="bg-amber-100 border-b border-amber-300 text-amber-950 text-xs font-semibold px-4 py-2 flex items-center justify-center gap-2"
    >
      <WifiOff className="size-3.5 shrink-0" aria-hidden />
      <span>
        You are offline. Shell tools may still work from cache — do not treat cached legal text as current primary
        authority.
      </span>
    </div>
  )
}
