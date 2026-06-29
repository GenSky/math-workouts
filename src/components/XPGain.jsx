import { AnimatePresence, motion } from 'framer-motion'

// A floating "+10 XP" that pops and drifts up. Render with a unique key so each
// award re-triggers the animation.
export default function XPGain({ amount, show, anchor = 'center' }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`${amount}-${show}`}
          className={`pointer-events-none absolute z-20 font-display text-2xl text-gold ${
            anchor === 'center' ? 'left-1/2 -translate-x-1/2' : 'right-2'
          }`}
          initial={{ opacity: 0, y: 10, scale: 0.6 }}
          animate={{ opacity: 1, y: -28, scale: 1 }}
          exit={{ opacity: 0, y: -52 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          +{amount} XP
        </motion.div>
      )}
    </AnimatePresence>
  )
}
