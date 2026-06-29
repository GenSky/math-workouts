import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getSubject } from '../data/subjects.js'
import { lessonsForSubject } from '../data/lessons/index.js'
import { useProgress } from '../context/ProgressContext.jsx'
import MaxSays from './MaxSays.jsx'

const TIME_LIMIT = 90 // seconds for the whole gauntlet
const WIN_AT = 0.8 // 80% correct to win

// Pull a question pool from a subject's checkpoints, then take up to 10.
function buildGauntlet(subjectId) {
  const pool = lessonsForSubject(subjectId).flatMap((l) =>
    l.checkpoint.map((q) => ({ ...q, lessonTitle: l.title })),
  )
  // Deterministic shuffle (index-based) so it's stable within a mount.
  const shuffled = [...pool].sort((a, b) => (a.id > b.id ? 1 : -1))
  return shuffled.slice(0, 10)
}

export default function BossBattle() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const { recordBossWin } = useProgress()
  const subject = getSubject(subjectId)
  const questions = useMemo(() => buildGauntlet(subjectId), [subjectId])

  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [picked, setPicked] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [over, setOver] = useState(false)
  const recordedRef = useRef(false)

  const total = questions.length
  const q = questions[idx]

  // Countdown timer.
  useEffect(() => {
    if (!started || over) return
    if (timeLeft <= 0) {
      setOver(true)
      return
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [started, over, timeLeft])

  const won = correct / Math.max(1, total) >= WIN_AT

  // Record a win exactly once when the battle ends.
  useEffect(() => {
    if (over && !recordedRef.current) {
      recordedRef.current = true
      recordBossWin(subjectId, correct / Math.max(1, total) >= WIN_AT)
    }
  }, [over])

  if (!subject || total === 0) {
    return (
      <div className="p-6 text-center">
        <p className="font-display text-2xl">No boss here yet.</p>
        <button onClick={() => navigate('/')} className="brutal-btn-lime mt-4">
          Dashboard
        </button>
      </div>
    )
  }

  function answer(i) {
    if (picked != null) return
    setPicked(i)
    const isRight = i === q.answer
    if (isRight) setCorrect((c) => c + 1)
    setTimeout(() => {
      if (idx + 1 >= total) setOver(true)
      else {
        setIdx((n) => n + 1)
        setPicked(null)
      }
    }, 450)
  }

  // ---- Intro ----
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-28 pt-6">
        <button
          onClick={() => navigate(`/subject/${subjectId}`)}
          className="mb-4 font-mono text-[11px] uppercase tracking-widest text-ghost hover:text-chalk"
        >
          ← {subject.short}
        </button>
        <div className="border-2 border-flame bg-flame/10 p-6 text-center shadow-brutal-flame">
          <div className="text-6xl">⚔️</div>
          <h1 className="mt-2 font-display text-3xl text-flame">Boss Battle</h1>
          <p className="mt-1 font-mono text-sm text-ghost">{subject.name}</p>
        </div>
        <div className="mt-5">
          <MaxSays tone="info">
            Here's the deal: {total} questions, {TIME_LIMIT} seconds on the clock, no re-teaches, no
            mercy. Land {Math.ceil(total * WIN_AT)} or more and you've proven it's in your bones.
            Breathe. Trust the reps. Go.
          </MaxSays>
        </div>
        <button onClick={() => setStarted(true)} className="brutal-btn-flame mt-5 w-full">
          Start the gauntlet ⚔️
        </button>
      </div>
    )
  }

  // ---- Results ----
  if (over) {
    const pct = Math.round((correct / total) * 100)
    return (
      <div className="mx-auto max-w-2xl px-4 pb-28 pt-8 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="mx-auto flex h-24 w-24 items-center justify-center border-2 border-black bg-flame text-5xl shadow-brutal"
        >
          {won ? '👑' : '💀'}
        </motion.div>
        <h1 className="mt-4 font-display text-3xl text-stroke text-flame">
          {won ? 'Boss down!' : 'Boss wins… this time'}
        </h1>
        <p className="mt-1 font-display text-5xl">{correct}/{total}</p>
        <p className="font-mono text-sm text-ghost">{pct}% · {timeLeft > 0 ? `${TIME_LIMIT - timeLeft}s` : 'time up'}</p>

        <div className="mt-5">
          <MaxSays tone={won ? 'hype' : 'miss'}>
            {won
              ? `That's mastery, plain and simple. +50 XP and the Boss Slayer badge is yours. You earned the swagger.`
              : `So close I can taste it. The gauntlet's brutal on purpose. Review the lessons, sharpen the timing, and come take the crown.`}
          </MaxSays>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <button
            onClick={() => navigate(`/subject/${subjectId}`)}
            className="brutal-btn-lime w-full"
          >
            Back to {subject.short}
          </button>
          <button onClick={() => navigate('/')} className="brutal-btn-ghost w-full">
            Dashboard
          </button>
        </div>
      </div>
    )
  }

  // ---- Live battle ----
  const timePct = (timeLeft / TIME_LIMIT) * 100
  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-4">
      <div className="sticky top-0 z-30 -mx-4 mb-5 border-b-2 border-border bg-ink/95 px-4 py-3 backdrop-blur">
        <div className="mb-2 flex items-center justify-between font-mono text-xs">
          <span className="text-flame">⚔️ {subject.short}</span>
          <span>
            Q{idx + 1}/{total} · ✓{correct}
          </span>
          <span className={timeLeft <= 15 ? 'animate-pulse text-flame' : 'text-chalk'}>
            ⏱ {timeLeft}s
          </span>
        </div>
        <div className="h-2 w-full border-2 border-black bg-ink">
          <motion.div
            className={`h-full ${timeLeft <= 15 ? 'bg-flame' : 'bg-gold'}`}
            animate={{ width: `${timePct}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
        >
          <span className="tag mb-2 border-flame text-flame">{q.lessonTitle}</span>
          <p className="mb-4 text-lg font-semibold leading-snug">{q.question}</p>
          <div className="grid gap-2">
            {q.choices.map((choice, i) => {
              let cls = 'border-border bg-slate hover:border-ghost'
              if (picked != null) {
                if (i === q.answer) cls = 'border-lime bg-lime/10 text-lime'
                else if (i === picked) cls = 'border-flame bg-flame/10 text-flame'
                else cls = 'border-border bg-slate opacity-50'
              }
              return (
                <button
                  key={i}
                  disabled={picked != null}
                  onClick={() => answer(i)}
                  className={`flex items-center gap-3 border-2 px-4 py-3 text-left transition-all ${cls}`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-current font-mono text-xs">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-[15px]">{choice}</span>
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
