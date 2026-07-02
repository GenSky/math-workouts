import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getLesson, lessonsForSubject } from '../data/lessons/index.js'
import { getSubject } from '../data/subjects.js'
import { missingPrereqs } from '../lib/prereqs.js'
import { useProgress } from '../context/ProgressContext.jsx'
import MaxSays from './MaxSays.jsx'
import WorkedExample from './WorkedExample.jsx'
import ProblemCard from './ProblemCard.jsx'
import Checkpoint from './Checkpoint.jsx'
import RewardScreen from './RewardScreen.jsx'
import PrereqPanel from './PrereqPanel.jsx'
import PathBanner from './PathBanner.jsx'

const STAGES = ['Hook', 'Analogy', 'Worked Example', 'Your Turn', 'Checkpoint', 'Reward']

export default function LessonViewer() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { completeLesson, completedLessons } = useProgress()
  const lesson = getLesson(lessonId)

  const [stage, setStage] = useState(0)
  const [solvedSet, setSolvedSet] = useState(new Set())
  const [checkpointResult, setCheckpointResult] = useState(null)

  // When navigating to a different lesson (e.g. "next lesson"), start fresh.
  useEffect(() => {
    setStage(0)
    setSolvedSet(new Set())
    setCheckpointResult(null)
    window.scrollTo({ top: 0 })
  }, [lessonId])

  const subject = lesson && getSubject(lesson.subjectId)
  const nextLesson = useMemo(() => {
    if (!lesson) return null
    const siblings = lessonsForSubject(lesson.subjectId)
    const i = siblings.findIndex((l) => l.id === lesson.id)
    return siblings[i + 1] || null
  }, [lesson])

  if (!lesson) {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <p className="font-display text-2xl">Lesson not found.</p>
        <button onClick={() => navigate('/')} className="brutal-btn-lime mt-4">
          Back to dashboard
        </button>
      </div>
    )
  }

  const allSolved = lesson.yourTurn.every((p) => solvedSet.has(p.id))
  const hasMissingPrereqs = missingPrereqs(lesson.id, completedLessons).length > 0

  function go(n) {
    setStage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function finishCheckpoint(result) {
    setCheckpointResult(result)
    completeLesson(lesson.id, result)
    go(5)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-4">
      {/* Header + progress indicator */}
      <div className="sticky top-0 z-30 -mx-4 mb-5 border-b-2 border-border bg-ink/95 px-4 py-3 backdrop-blur">
        <div className="mb-2 flex items-center justify-between gap-2">
          <button
            onClick={() => navigate(`/subject/${lesson.subjectId}`)}
            className="font-mono text-[11px] uppercase tracking-widest text-ghost hover:text-chalk"
          >
            ← {subject?.short}
          </button>
          <span className="truncate font-display text-sm">
            {lesson.icon} {lesson.title}
          </span>
          <span className="font-mono text-[11px] text-ghost">
            {stage + 1}/{STAGES.length}
          </span>
        </div>
        <div className="flex gap-1">
          {STAGES.map((s, i) => (
            <div
              key={s}
              className={`h-1.5 flex-1 border border-black ${
                i < stage ? 'bg-lime' : i === stage ? 'bg-gold' : 'bg-coal'
              }`}
              title={s}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="section-num">{stage + 1}</span>
            <h2 className="font-display text-xl uppercase tracking-wide">{STAGES[stage]}</h2>
          </div>

          {/* 1 — HOOK */}
          {stage === 0 && (
            <div className="space-y-4">
              <PathBanner currentLessonId={lesson.id} />
              <MaxSays tone="info" speakText={lesson.hook}>
                {lesson.hook}
              </MaxSays>
              {lesson.plainIdea && (
                <div className="brutal-box border-gold p-4">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                    In plain words
                  </div>
                  <p className="text-[15px] leading-relaxed">{lesson.plainIdea}</p>
                </div>
              )}
              <PrereqPanel lesson={lesson} />
              <button
                onClick={() => go(1)}
                className={`${hasMissingPrereqs ? 'brutal-btn-ghost border-2' : 'brutal-btn-lime'} w-full`}
              >
                {hasMissingPrereqs ? 'I know this stuff — dive in anyway →' : 'Show me the trick →'}
              </button>
            </div>
          )}

          {/* 2 — ANALOGY */}
          {stage === 1 && (
            <div className="space-y-4">
              <MaxSays speakText={lesson.analogy.analogy}>{lesson.analogy.analogy}</MaxSays>
              {lesson.vocab?.length > 0 && (
                <div className="brutal-box p-4">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gold">
                    Words to know — plain English, no gatekeeping
                  </div>
                  <dl className="space-y-2.5">
                    {lesson.vocab.map((v) => (
                      <div key={v.term} className="border-l-2 border-gold pl-3">
                        <dt className="font-display text-sm text-gold">{v.term}</dt>
                        <dd className="text-sm leading-relaxed text-ghost">{v.means}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              <div className="brutal-box border-electric p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  Now the math
                </div>
                <p className="text-[15px] leading-relaxed">{lesson.analogy.bridge}</p>
              </div>
              <button onClick={() => go(2)} className="brutal-btn-lime w-full">
                Walk me through one →
              </button>
            </div>
          )}

          {/* 3 — WORKED EXAMPLE */}
          {stage === 2 && (
            <div className="space-y-4">
              <WorkedExample lesson={lesson} />
              <button onClick={() => go(3)} className="brutal-btn-lime w-full">
                My turn — let me try →
              </button>
            </div>
          )}

          {/* 4 — YOUR TURN */}
          {stage === 3 && (
            <div className="space-y-4">
              <MaxSays>
                Three problems. First one's a layup, then we ramp. Solve all three to unlock the
                checkpoint.
              </MaxSays>
              {lesson.yourTurn.map((p, i) => (
                <ProblemCard
                  key={p.id}
                  item={p}
                  index={i}
                  lessonId={lesson.id}
                  onSolved={(id) => setSolvedSet((prev) => new Set(prev).add(id))}
                />
              ))}
              <button
                onClick={() => go(4)}
                disabled={!allSolved}
                className="brutal-btn-lime w-full"
              >
                {allSolved
                  ? "To the checkpoint →"
                  : `Solve all 3 to continue (${solvedSet.size}/3)`}
              </button>
            </div>
          )}

          {/* 5 — CHECKPOINT */}
          {stage === 4 && (
            <div className="space-y-4">
              <MaxSays tone="info">
                Five questions. Get one wrong and I'll re-teach it a brand-new way — no shame, that's
                the whole point. Let's go.
              </MaxSays>
              <Checkpoint lesson={lesson} onComplete={finishCheckpoint} />
            </div>
          )}

          {/* 6 — REWARD */}
          {stage === 5 && checkpointResult && (
            <RewardScreen
              lesson={lesson}
              result={checkpointResult}
              nextLesson={nextLesson}
              onNext={() =>
                nextLesson
                  ? navigate(`/lesson/${nextLesson.id}`)
                  : navigate(`/subject/${lesson.subjectId}`)
              }
              onHome={() => navigate('/')}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
