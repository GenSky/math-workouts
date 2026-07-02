import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { getLesson, maxLessonXp } from '../data/lessons/index.js'
import { learningPath } from '../lib/prereqs.js'
import { useProgress } from '../context/ProgressContext.jsx'
import { PASS_THRESHOLD } from '../data/subjects.js'
import MaxSays from './MaxSays.jsx'
import StreakFlame from './StreakFlame.jsx'
import XPBar from './XPBar.jsx'

// Section 6 — XP + streak reward. Celebrates the completion, shows the
// checkpoint score, the streak, and routes onward. When the learner is on a
// catch-up path, this screen is the trail marker: next stop, or the summit.
export default function RewardScreen({ lesson, result, nextLesson, onNext, onHome }) {
  const navigate = useNavigate()
  const { streak, pathTarget, completedLessons, clearPath } = useProgress()
  const pct = Math.round((result.correct / result.total) * 100)
  const passed = pct >= PASS_THRESHOLD * 100
  const earnedXp = maxLessonXp(lesson) // upper bound; exact XP already banked live

  // Catch-up path state (completedLessons already includes this lesson).
  const target = pathTarget ? getLesson(pathTarget) : null
  const remaining = target ? learningPath(pathTarget, completedLessons) : []
  const summitReached = target && remaining.length === 0
  const nextOnPath = target && remaining.length > 0 ? remaining[0] : null

  function continuePath() {
    navigate(`/lesson/${nextOnPath.id}`)
  }

  function finishPath(fn) {
    clearPath()
    fn()
  }

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

      {/* Catch-up path progress */}
      {summitReached && (
        <div className="border-2 border-gold bg-gold/10 p-4 text-left">
          <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gold">
            🏔 Catch-up path complete
          </div>
          <p className="text-sm leading-relaxed">
            THAT was the summit. You didn't skip to {target.title} — you built the whole staircase
            up to it, concept by concept. That knowledge is load-bearing now. Respect.
          </p>
        </div>
      )}
      {nextOnPath && (
        <div className="border-2 border-gold bg-gold/10 p-4 text-left">
          <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gold">
            🧗 Path to {target.icon} {target.title}
          </div>
          <p className="text-sm leading-relaxed">
            One stop banked. {remaining.length} to go — next up:{' '}
            <span className="text-gold">{nextOnPath.title}</span>.
          </p>
        </div>
      )}

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
        {nextOnPath ? (
          <>
            <button onClick={continuePath} className="brutal-btn-lime w-full">
              🧗 Continue path: {nextOnPath.title} →
            </button>
            {/* Pausing keeps the path — the dashboard offers a resume banner. */}
            <button onClick={onHome} className="brutal-btn-ghost w-full">
              Pause the path — Dashboard
            </button>
          </>
        ) : summitReached ? (
          <>
            <button onClick={() => finishPath(onNext)} className="brutal-btn-lime w-full">
              {nextLesson ? `Keep rolling: ${nextLesson.title} →` : 'Back to subject →'}
            </button>
            <button onClick={() => finishPath(onHome)} className="brutal-btn-ghost w-full">
              Dashboard
            </button>
          </>
        ) : (
          <>
            <button onClick={onNext} className="brutal-btn-lime w-full">
              {nextLesson ? `Next: ${nextLesson.title} →` : 'Back to subject →'}
            </button>
            <button onClick={onHome} className="brutal-btn-ghost w-full">
              Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  )
}
