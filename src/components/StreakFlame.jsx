import { motion } from 'framer-motion'
import { useProgress } from '../context/ProgressContext.jsx'

// Duolingo-style streak flame. Goes cold (gray) at 0, lights up otherwise.
export default function StreakFlame({ size = 'md' }) {
  const { streak } = useProgress()
  const lit = streak > 0
  const dims = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-base' : 'text-xl'

  return (
    <div className="flex items-center gap-1.5" title={`${streak}-day streak`}>
      <motion.span
        className={`${dims} ${lit ? '' : 'grayscale opacity-50'}`}
        animate={lit ? { scale: [1, 1.15, 1], rotate: [-2, 2, -2] } : {}}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
      >
        🔥
      </motion.span>
      <span
        className={`font-display ${size === 'lg' ? 'text-2xl' : 'text-lg'} ${
          lit ? 'text-flame' : 'text-ghost'
        }`}
      >
        {streak}
      </span>
    </div>
  )
}
