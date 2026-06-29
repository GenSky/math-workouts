import { motion } from 'framer-motion'
import { useProgress } from '../context/ProgressContext.jsx'
import { useSpeech } from '../hooks/useSpeech.js'

// Max's signature speech bubble. `tone` tweaks the accent color; `speakable`
// adds a tiny voice button when voice mode is on.
const TONES = {
  default: 'border-lime',
  hype: 'border-lime',
  miss: 'border-flame',
  info: 'border-electric',
  reset: 'border-violet',
}

export default function MaxSays({ children, tone = 'default', label = 'Max', speakText }) {
  const { voiceEnabled } = useProgress()
  const { supported, speaking, speak, stop } = useSpeech()
  const accent = TONES[tone] || TONES.default

  // Pull plain text for speech: prefer explicit speakText, else children if string.
  const text = speakText || (typeof children === 'string' ? children : null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className={`flex items-start gap-3`}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-lime text-lg shadow-brutal-sm">
          🧠
        </div>
        <div className={`relative flex-1 border-2 ${accent} bg-coal px-4 py-3 shadow-brutal-sm`}>
          {/* speech-bubble tail */}
          <span
            className={`absolute -left-2 top-3 h-3 w-3 rotate-45 border-b-2 border-l-2 ${accent} bg-coal`}
          />
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ghost">
              {label} says
            </span>
            {voiceEnabled && supported && text && (
              <button
                onClick={() => (speaking ? stop() : speak(text))}
                className="font-mono text-[10px] uppercase tracking-widest text-lime hover:underline"
                aria-label={speaking ? 'Stop reading' : 'Read aloud'}
              >
                {speaking ? '◼ stop' : '▶ play'}
              </button>
            )}
          </div>
          <div className="text-[15px] leading-relaxed text-chalk">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}
