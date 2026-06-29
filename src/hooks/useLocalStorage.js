import { useEffect, useRef, useState } from 'react'

// Persist a piece of state to localStorage, surviving reloads. Defensive about
// SSR / private-mode quota errors so the app never hard-crashes on storage.
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw == null) return initial
      const parsed = JSON.parse(raw)
      // Shallow-merge so newly added fields get their defaults on upgrade.
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return { ...initial, ...parsed }
      }
      return parsed
    } catch {
      return initial
    }
  })

  const keyRef = useRef(key)
  keyRef.current = key

  useEffect(() => {
    try {
      window.localStorage.setItem(keyRef.current, JSON.stringify(value))
    } catch {
      /* storage full or unavailable — fail silently */
    }
  }, [value])

  return [value, setValue]
}
