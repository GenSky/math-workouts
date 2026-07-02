import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { SUBJECTS } from '../data/subjects.js'
import { getLesson } from '../data/lessons/index.js'
import { learningPath } from '../lib/prereqs.js'
import { useProgress } from '../context/ProgressContext.jsx'
import SubjectCard from './SubjectCard.jsx'
import MaxSays from './MaxSays.jsx'
import StreakFlame from './StreakFlame.jsx'
import XPBar from './XPBar.jsx'

export default function Dashboard() {
  const navigate = useNavigate()
  const { completedLessons, levelInfo, passedSubjects, pathTarget, clearPath } = useProgress()
  const firstName = 'champ'
  const fresh = completedLessons.length === 0

  // Paused catch-up path, if any.
  const pathLesson = pathTarget ? getLesson(pathTarget) : null
  const pathRemaining = pathLesson ? learningPath(pathTarget, completedLessons) : []
  const hasActivePath = pathLesson && pathRemaining.length > 0

  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-5">
      {/* Hero header */}
      <div className="mb-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ghost">
              Math Workouts
            </p>
            <h1 className="font-display text-3xl leading-none text-stroke">
              Coached by <span className="text-lime">Max</span>
            </h1>
          </div>
          <StreakFlame size="lg" />
        </div>
        <div className="brutal-box mt-4 p-4">
          <XPBar />
        </div>
      </div>

      {/* Max greeting */}
      <div className="mb-6">
        <MaxSays tone="hype">
          {fresh ? (
            <>
              Welcome in, {firstName}. I'm Max — think of me as your math corner-coach. We don't
              memorize here, we <span className="text-lime">get it</span>. Start at{' '}
              <span className="text-lime">{SUBJECTS[0].name}</span> below — or scout ahead to
              anything that looks exciting, and I'll chain you back through what it's built on.
            </>
          ) : (
            <>
              Back for more — I like it. You're Level {levelInfo.level} with{' '}
              {passedSubjects.length} subject{passedSubjects.length === 1 ? '' : 's'} in the bag.
              Pick up where we left off.
            </>
          )}
        </MaxSays>
      </div>

      {/* Resume a paused catch-up path */}
      {hasActivePath && (
        <div className="mb-6 flex items-center gap-3 border-2 border-gold bg-gold/10 p-4">
          <span className="text-2xl">🧗</span>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-gold">
              Path in progress → {pathLesson.icon} {pathLesson.title}
            </div>
            <p className="text-xs text-ghost">
              {pathRemaining.length} stop{pathRemaining.length === 1 ? '' : 's'} left. Next:{' '}
              {pathRemaining[0].title}.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-1">
            <button
              onClick={() => navigate(`/lesson/${pathRemaining[0].id}`)}
              className="brutal-btn-lime px-3 py-1.5 text-xs"
            >
              Resume →
            </button>
            <button
              onClick={clearPath}
              className="font-mono text-[10px] uppercase tracking-widest text-ghost hover:text-chalk"
            >
              ✕ drop it
            </button>
          </div>
        </div>
      )}

      {/* Subject map */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-lg uppercase tracking-wide">The Path</h2>
        <span className="font-mono text-[10px] uppercase tracking-widest text-ghost">
          Climb in order · scout anywhere
        </span>
      </div>

      <div className="relative space-y-3">
        {/* spine line behind the cards */}
        <div className="pointer-events-none absolute bottom-6 left-[26px] top-6 w-0.5 bg-border" />
        {SUBJECTS.map((s, i) => (
          <SubjectCard key={s.id} subject={s} index={i} prevName={SUBJECTS[i - 1]?.name || ''} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-center font-mono text-[11px] text-ghost"
      >
        {SUBJECTS.length} mountains to climb · every one connected · one rep at a time
      </motion.p>
    </div>
  )
}
