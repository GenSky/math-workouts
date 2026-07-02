import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'

// One node on the subject map. Subjects ahead of the learner's path are shown
// in "scout mode": dimmed but tappable — every lesson inside declares its
// prerequisites, so Max can chain a scout back through what they're missing.
export default function SubjectCard({ subject, index, prevName }) {
  const navigate = useNavigate()
  const { isSubjectUnlocked, subjectProgress, passedSubjects } = useProgress()
  const unlocked = isSubjectUnlocked(subject.id)
  const prog = subjectProgress(subject.id)
  const passed = passedSubjects.includes(subject.id)

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/subject/${subject.id}`)}
      className={`group relative w-full overflow-hidden border-2 p-4 text-left transition-all ${
        unlocked
          ? 'border-black bg-slate shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal'
          : 'border-border bg-coal opacity-75 hover:opacity-100 hover:border-ghost'
      }`}
      style={unlocked ? { borderLeftColor: subject.color, borderLeftWidth: 8 } : {}}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black text-2xl ${
            unlocked ? '' : 'grayscale'
          }`}
          style={{ background: unlocked ? subject.color : '#1d1d22' }}
        >
          {subject.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-ghost">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="truncate font-display text-base">{subject.name}</h3>
            {passed && <span className="tag border-lime text-lime">✓ passed</span>}
            {!unlocked && <span className="tag border-gold/60 text-gold">🔭 scout</span>}
          </div>
          <p className="mt-0.5 line-clamp-1 text-xs text-ghost">
            {unlocked
              ? subject.blurb
              : `Ahead of your path — tap to scout. Pass ${prevName} (80%+) to train here officially.`}
          </p>

          {prog.hasContent && (unlocked || prog.done > 0) && (
            <div className="mt-2">
              <div className="h-2 w-full border border-black bg-ink">
                <div
                  className="h-full"
                  style={{ width: `${prog.pct}%`, background: subject.color }}
                />
              </div>
              <div className="mt-1 font-mono text-[10px] text-ghost">
                {prog.done}/{prog.total} lessons · {prog.pct}%
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.button>
  )
}
