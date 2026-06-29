import { AnimatePresence, motion } from 'framer-motion'
import { pick, GENTLE_MISSES, RESET_INTRO } from '../data/maxVoice.js'
import MaxSays from './MaxSays.jsx'

// Shown when a checkpoint answer is wrong. Never says "incorrect" — it reframes
// the mistake and re-teaches with a DIFFERENT analogy. When `isReset` is true
// (3 misses in a row) it leads with Max's full concept reset.
export default function WrongAnswerModal({ open, item, isReset, onClose }) {
  if (!item) return null
  const missLine = pick(GENTLE_MISSES, (item.id?.length || 3) / 7)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg border-2 border-flame bg-slate p-5 shadow-brutal pad-safe-b"
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="tag border-flame text-flame">
                {isReset ? 'Concept reset' : "Let's reframe"}
              </span>
            </div>

            {isReset && (
              <div className="mb-4">
                <MaxSays tone="reset">{RESET_INTRO}</MaxSays>
              </div>
            )}

            <div className="mb-4">
              <MaxSays tone="miss" speakText={`${missLine} ${item.reExplain.text}`}>
                <p className="mb-2 font-semibold">{missLine}</p>
                <p className="mb-2 text-sm text-ghost">
                  Here's what your answer reveals about the thinking — and a fresh way to see it.
                </p>
                <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-violet">
                  New analogy · {item.reExplain.analogy}
                </p>
                <p className="leading-relaxed">{item.reExplain.text}</p>
              </MaxSays>
            </div>

            <button onClick={onClose} className="brutal-btn-lime w-full">
              Got it — try again
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
