import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getSubject, PASS_THRESHOLD } from '../data/subjects.js'
import { lessonsForSubject } from '../data/lessons/index.js'
import { useProgress } from '../context/ProgressContext.jsx'
import MaxSays from './MaxSays.jsx'

export default function SubjectDetail() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const { completedLessons, lessonScores, subjectProgress } = useProgress()
  const subject = getSubject(subjectId)
  const lessons = lessonsForSubject(subjectId)
  const prog = subjectProgress(subjectId)

  if (!subject) {
    return (
      <div className="p-6 text-center">
        <p className="font-display text-2xl">Unknown subject.</p>
        <button onClick={() => navigate('/')} className="brutal-btn-lime mt-4">
          Dashboard
        </button>
      </div>
    )
  }

  const allDone = lessons.length > 0 && lessons.every((l) => completedLessons.includes(l.id))

  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-4">
      <button
        onClick={() => navigate('/')}
        className="mb-4 font-mono text-[11px] uppercase tracking-widest text-ghost hover:text-chalk"
      >
        ← Dashboard
      </button>

      <div
        className="mb-5 border-2 border-black p-5 shadow-brutal-sm"
        style={{ background: subject.color }}
      >
        <div className="text-4xl">{subject.emoji}</div>
        <h1 className="mt-2 font-display text-3xl text-ink">{subject.name}</h1>
        <p className="mt-1 max-w-md text-sm font-medium text-ink/80">{subject.blurb}</p>
        {prog.hasContent && (
          <div className="mt-3 font-mono text-xs text-ink/70">
            {prog.done}/{prog.total} lessons complete · {prog.pct}%
          </div>
        )}
      </div>

      {lessons.length === 0 ? (
        <MaxSays tone="info">
          This subject is on the way. I'm still writing the lessons — fully scripted, analogy-first,
          no filler. For now, go crush Algebra I and I'll have these ready before you climb back up.
        </MaxSays>
      ) : (
        <>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-lg uppercase tracking-wide">Lessons</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ghost">
              Top to bottom
            </span>
          </div>

          <div className="space-y-3">
            {lessons.map((lesson, i) => {
              const done = completedLessons.includes(lesson.id)
              const score = lessonScores[lesson.id]
              return (
                <motion.button
                  key={lesson.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                  className="flex w-full items-center gap-3 border-2 border-black bg-slate p-4 text-left shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black text-xl ${
                      done ? 'bg-lime' : 'bg-coal'
                    }`}
                  >
                    {done ? '✓' : lesson.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-ghost">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="truncate font-display text-base">{lesson.title}</h3>
                    </div>
                    <p className="truncate text-xs text-ghost">{lesson.tagline}</p>
                    <div className="mt-1 flex items-center gap-2 font-mono text-[10px] text-ghost">
                      <span>~{lesson.estMinutes} min</span>
                      {score && (
                        <span className={score.pct >= PASS_THRESHOLD ? 'text-lime' : 'text-gold'}>
                          · checkpoint {Math.round(score.pct * 100)}%
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-display text-lg text-ghost">›</span>
                </motion.button>
              )
            })}
          </div>

          {/* Boss Battle entry */}
          <div className="mt-6">
            <button
              onClick={() => navigate(`/boss/${subject.id}`)}
              disabled={!allDone}
              className={`flex w-full items-center gap-3 border-2 p-4 text-left transition-all ${
                allDone
                  ? 'border-flame bg-flame/10 shadow-brutal-flame hover:-translate-y-0.5'
                  : 'cursor-not-allowed border-border bg-coal opacity-60'
              }`}
            >
              <span className="text-3xl">{allDone ? '⚔️' : '🔒'}</span>
              <div className="flex-1">
                <h3 className="font-display text-lg text-flame">Boss Battle</h3>
                <p className="text-xs text-ghost">
                  {allDone
                    ? 'Timed 10-question gauntlet. Beat it to flex your mastery.'
                    : 'Finish every lesson to summon the boss.'}
                </p>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
