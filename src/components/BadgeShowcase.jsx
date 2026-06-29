import { motion } from 'framer-motion'
import { BADGES } from '../data/badges.js'
import { useProgress } from '../context/ProgressContext.jsx'
import MaxSays from './MaxSays.jsx'

export default function BadgeShowcase() {
  const { earnedBadges } = useProgress()
  const earnedCount = earnedBadges.length

  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-5">
      <h1 className="font-display text-3xl text-stroke">Badge Vault</h1>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ghost">
        {earnedCount}/{BADGES.length} unlocked
      </p>

      <div className="my-5">
        <MaxSays tone="hype">
          {earnedCount === 0
            ? "Empty shelf — for now. Finish your first lesson and 'First Blood' is yours. We'll fill this wall together."
            : `${earnedCount} down. Each one of these is a receipt for work you actually did. Keep stacking.`}
        </MaxSays>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {BADGES.map((badge, i) => {
          const earned = earnedBadges.includes(badge.id)
          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              className={`flex flex-col items-center border-2 p-4 text-center ${
                earned
                  ? 'border-gold bg-gold/10 shadow-brutal-sm'
                  : 'border-border bg-coal opacity-70'
              }`}
            >
              <div className={`text-4xl ${earned ? '' : 'grayscale'}`}>
                {earned ? badge.emoji : '🔒'}
              </div>
              <div className="mt-2 font-display text-sm leading-tight">{badge.name}</div>
              <div className="mt-1 text-[11px] leading-snug text-ghost">{badge.desc}</div>
              {earned && (
                <div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-gold">
                  ✓ earned
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
