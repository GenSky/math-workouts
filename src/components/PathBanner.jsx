import { getLesson } from '../data/lessons/index.js'
import { learningPath } from '../lib/prereqs.js'
import { useProgress } from '../context/ProgressContext.jsx'

// Slim banner shown while the learner is on a catch-up path — keeps the
// destination visible ("why am I in this lesson?") and offers a way out.
export default function PathBanner({ currentLessonId }) {
  const { pathTarget, completedLessons, clearPath } = useProgress()
  const target = pathTarget ? getLesson(pathTarget) : null
  if (!target) return null

  const remaining = learningPath(pathTarget, completedLessons)
  if (remaining.length === 0) return null // path finished — nothing to show

  const isDestination = target.id === currentLessonId
  const stopsAfterThis = Math.max(0, remaining.length - 2) // minus this lesson and the summit

  return (
    <div className="mb-4 flex items-center gap-2 border-2 border-gold/70 bg-gold/10 px-3 py-2">
      <span className="text-lg">🧗</span>
      <div className="min-w-0 flex-1">
        <div className="truncate font-mono text-[10px] uppercase tracking-widest text-gold">
          {isDestination
            ? 'Final stop on your path'
            : `Catch-up path → ${target.icon} ${target.title}`}
        </div>
        <div className="font-mono text-[10px] text-ghost">
          {isDestination
            ? 'Everything below this is banked. Summit time.'
            : stopsAfterThis === 0
              ? 'Last stop before the summit'
              : `${stopsAfterThis} more stop${stopsAfterThis === 1 ? '' : 's'} after this one, then the summit`}
        </div>
      </div>
      <button
        onClick={clearPath}
        className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ghost hover:text-chalk"
        title="Abandon the catch-up path"
      >
        ✕ quit
      </button>
    </div>
  )
}
