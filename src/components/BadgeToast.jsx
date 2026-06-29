import { AnimatePresence, motion } from 'framer-motion'
import { useProgress } from '../context/ProgressContext.jsx'

// Top-of-screen celebratory toast queue for newly-earned badges.
export default function BadgeToast() {
  const { pendingBadges, dismissBadge } = useProgress()
  const current = pendingBadges[0]

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-[60] flex justify-center px-3">
      <AnimatePresence mode="wait">
        {current && (
          <motion.button
            key={current.id}
            className="pointer-events-auto flex items-center gap-3 border-2 border-gold bg-slate px-4 py-3 shadow-brutal"
            initial={{ y: -60, opacity: 0, rotate: -2 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            onClick={() => dismissBadge(current.id)}
          >
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8 }}
            >
              {current.emoji}
            </motion.span>
            <div className="text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gold">
                Badge unlocked
              </div>
              <div className="font-display text-base leading-tight">{current.name}</div>
              <div className="text-xs text-ghost">{current.desc}</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
