import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useProgress } from '../context/ProgressContext.jsx'
import { pick, CELEBRATIONS } from '../data/maxVoice.js'
import WrongAnswerModal from './WrongAnswerModal.jsx'
import MaxSays from './MaxSays.jsx'
import XPGain from './XPGain.jsx'

// Max's Checkpoint: a 5-question quiz. You must answer correctly to advance, but
// the score that gates the next subject reflects FIRST attempts — so retries
// teach without inflating the grade. Three misses in a row triggers a reset.
export default function Checkpoint({ lesson, onComplete }) {
  const { awardCorrect, recordMiss, recordReset } = useProgress()
  const questions = lesson.checkpoint

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [phase, setPhase] = useState('answering') // answering | correct
  const [modal, setModal] = useState({ open: false, item: null, isReset: false })
  const [xpFlash, setXpFlash] = useState(false)

  // First-attempt correctness per question, for the gating score.
  const firstResults = useRef([])
  // Track which questions already paid out XP / recorded a first attempt.
  const scored = useRef(new Set())
  const wrongStreak = useRef(0)

  const q = questions[idx]
  const isLast = idx === questions.length - 1

  function check() {
    if (selected == null || phase === 'correct') return
    const correct = selected === q.answer
    const firstTime = !scored.current.has(q.id)

    if (correct) {
      if (firstTime) {
        firstResults.current[idx] = true
        scored.current.add(q.id)
      }
      wrongStreak.current = 0
      awardCorrect()
      setXpFlash(true)
      setTimeout(() => setXpFlash(false), 750)
      setPhase('correct')
    } else {
      if (firstTime) {
        firstResults.current[idx] = false
        scored.current.add(q.id)
      }
      recordMiss(lesson.id)
      wrongStreak.current += 1
      const isReset = wrongStreak.current >= 3
      if (isReset) {
        recordReset()
        wrongStreak.current = 0
      }
      setModal({ open: true, item: q, isReset })
    }
  }

  function next() {
    if (isLast) {
      const correctCount = firstResults.current.filter(Boolean).length
      onComplete({ correct: correctCount, total: questions.length })
      return
    }
    setIdx((i) => i + 1)
    setSelected(null)
    setPhase('answering')
  }

  const progressPct = Math.round(((idx + (phase === 'correct' ? 1 : 0)) / questions.length) * 100)

  return (
    <div className="relative">
      <XPGain amount={10} show={xpFlash} anchor="right" />

      {/* progress dots */}
      <div className="mb-4 flex items-center gap-2">
        {questions.map((quest, i) => (
          <div
            key={quest.id}
            className={`h-2 flex-1 border border-black ${
              i < idx || (i === idx && phase === 'correct')
                ? firstResults.current[i]
                  ? 'bg-lime'
                  : 'bg-flame'
                : i === idx
                  ? 'bg-gold'
                  : 'bg-coal'
            }`}
          />
        ))}
      </div>
      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ghost">
        Question {idx + 1} / {questions.length} · {progressPct}% through
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          <p className="mb-4 text-lg font-semibold leading-snug">{q.question}</p>

          <div className="grid gap-2">
            {q.choices.map((choice, i) => {
              const isSel = selected === i
              const isCorrect = i === q.answer
              const reveal = phase === 'correct'
              let cls = 'border-border bg-slate hover:border-ghost'
              if (reveal && isCorrect) cls = 'border-lime bg-lime/10 text-lime'
              else if (isSel && !reveal) cls = 'border-electric bg-electric/10'
              else if (isSel && reveal) cls = 'border-lime bg-lime/10'
              return (
                <button
                  key={i}
                  disabled={reveal}
                  onClick={() => setSelected(i)}
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

          {phase === 'correct' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <MaxSays tone="hype" speakText={q.why}>
                <span className="font-display text-lime">{pick(CELEBRATIONS, (idx + 1) / 6)} </span>
                {q.why}
              </MaxSays>
            </motion.div>
          )}

          <div className="mt-5">
            {phase === 'answering' ? (
              <button onClick={check} disabled={selected == null} className="brutal-btn-lime w-full">
                Check answer
              </button>
            ) : (
              <button onClick={next} className="brutal-btn-lime w-full">
                {isLast ? 'Finish checkpoint →' : 'Next question →'}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <WrongAnswerModal
        open={modal.open}
        item={modal.item}
        isReset={modal.isReset}
        onClose={() => {
          setModal({ open: false, item: null, isReset: false })
          setSelected(null)
        }}
      />
    </div>
  )
}
