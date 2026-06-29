import { useCallback, useEffect, useRef, useState } from 'react'

// Thin wrapper over the Web Speech API so Max can read explanations aloud.
// Degrades gracefully when the browser has no speechSynthesis.
export function useSpeech() {
  const supported =
    typeof window !== 'undefined' && 'speechSynthesis' in window
  const [speaking, setSpeaking] = useState(false)
  const utterRef = useRef(null)

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  const speak = useCallback(
    (text) => {
      if (!supported || !text) return
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.rate = 1.02
      u.pitch = 1.0
      u.onend = () => setSpeaking(false)
      u.onerror = () => setSpeaking(false)
      utterRef.current = u
      setSpeaking(true)
      window.speechSynthesis.speak(u)
    },
    [supported],
  )

  // Clean up any in-flight speech on unmount.
  useEffect(() => () => supported && window.speechSynthesis.cancel(), [supported])

  return { supported, speaking, speak, stop }
}
