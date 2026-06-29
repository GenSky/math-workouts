import { motion } from 'framer-motion'
import { useProgress } from '../context/ProgressContext.jsx'

// Level + XP progress bar. `compact` is used in the top nav.
export default function XPBar({ compact = false }) {
  const { levelInfo, xp } = useProgress()

  return (
    <div className={compact ? 'w-full' : 'w-full'}>
      <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ghost">
        <span className="text-gold">
          ★ LVL {levelInfo.level}
          {levelInfo.isMax && ' · MAX'}
        </span>
        <span>{xp} XP</span>
      </div>
      <div className="relative h-3 w-full overflow-hidden border-2 border-black bg-ink">
        <motion.div
          className="h-full bg-gold"
          initial={false}
          animate={{ width: `${levelInfo.pct}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        />
        {/* hash marks for that arcade feel */}
        <div className="pointer-events-none absolute inset-0 flex justify-between opacity-30">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="h-full w-px bg-black" />
          ))}
        </div>
      </div>
      {!compact && !levelInfo.isMax && (
        <div className="mt-1 text-right font-mono text-[10px] text-ghost">
          {levelInfo.xpForNext} XP to LVL {levelInfo.level + 1}
        </div>
      )}
    </div>
  )
}
