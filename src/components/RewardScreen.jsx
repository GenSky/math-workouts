import { motion } from 'framer-motion'
import { maxLessonXp } from '../data/lessons/index.js'
import { useProgress } from '../context/ProgressContext.jsx'
import { PASS_THRESHOLD } from '../data/subjects.js'
import MaxSays from './MaxSays.jsx'
import StreakFlame from './StreakFlame.jsx'
import XPBar from './XPBar.jsx'

// Section 6 — XP + streak reward. Celebrates the completion, shows the
// checkpoint score, the streak, and routes onward.
export default function RewardScreen({ lesson, result, nextLesson, onNext, onHome }) {
  const { streak } = useProgress()
  const pct = Math.round((result.correct / result.total) * 100)
  const passed = pct >= PASS_THRESHOLD * 100
  const earnedXp = maxLessonXp(lesson) // upper bound; exact XP already banked live

  return (
    <div className="space-y-5 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        className="mx-auto flex h-24 w-24 items-center justify-center border-2 border-black bg-lime text-5xl shadow-brutal"
      >
        {passed ? '🏆' : '💪'}
      </motion.div>

      <div>
        <h3 className="font-display text-3xl text-stroke text-lime">Lesson complete!</h3>
        <p className="mt-1 text-ghost">{lesson.title}</p>
      </div>

      <MaxSays tone="hype">
        {passed
          ? `${pct}% on the checkpoint — that's a pass and then some. You didn't just memorize it, you GET it. That's the difference.`
          : `${pct}% this round. Honest truth: you need ${PASS_THRESHOLD * 100}% to bank the win. But you finished, and every rep counts. Run it back and it'll click.`}
      </MaxSays>

      {/* Stat tiles */}
      <div className="grid grid-cols-3 gap-2">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="brutal-box p-3"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-ghost">Score</div>
          <div className={`font-display text-2xl ${passed ? 'text-lime' : 'text-gold'}`}>
            {result.correct}/{result.total}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="brutal-box p-3"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-ghost">XP this lesson</div>
          <div className="font-display text-2xl text-gold">+{earnedXp}</div>
        </motion.div>
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.26 }}
          className="brutal-box flex flex-col items-center justify-center p-3"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-ghost">Streak</div>
          <StreakFlame />
        </motion.div>
      </div>

      <div className="brutal-box p-4 text-left">
        <XPBar />
      </div>

      <div className="flex flex-col gap-2">
        <button onClick={onNext} className="brutal-btn-lime w-full">
          {nextLesson ? `Next: ${nextLesson.title} →` : 'Back to subject →'}
        </button>
        <button onClick={onHome} className="brutal-btn-ghost w-full">
          Dashboard
        </button>
      </div>
    </div>
  )
}
