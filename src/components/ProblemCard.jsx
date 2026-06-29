import { useState } from 'react'
import { motion } from 'framer-motion'
import { checkAnswer } from '../lib/checkAnswer.js'
import { pick, CELEBRATIONS, GENTLE_MISSES } from '../data/maxVoice.js'
import { useProgress } from '../context/ProgressContext.jsx'
import XPGain from './XPGain.jsx'

// A single practice problem with a flip-on-reveal effect. Correct answers flip
// the card to a celebratory back face and award XP once.
export default function ProblemCard({ item, index, lessonId, onSolved }) {
  const { awardCorrect, recordMiss } = useProgress()
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | wrong | solved
  const [showHint, setShowHint] = useState(false)
  const [xpFlash, setXpFlash] = useState(false)
  const [shake, setShake] = useState(0)

  const solved = status === 'solved'

  function submit(e) {
    e.preventDefault()
    if (solved) return
    if (checkAnswer(item, value)) {
      setStatus('solved')
      awardCorrect()
      setXpFlash(true)
      setTimeout(() => setXpFlash(false), 750)
      onSolved?.(item.id)
    } else {
      setStatus('wrong')
      setShowHint(true)
      setShake((s) => s + 1)
      recordMiss(lessonId)
    }
  }

  const celebrate = pick(CELEBRATIONS, (index + 1) / 7)
  const miss = pick(GENTLE_MISSES, (index + 2) / 9)

  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <XPGain amount={10} show={xpFlash} anchor="right" />
      <motion.div
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: solved ? 180 : 0 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
      >
        {/* FRONT */}
        <motion.div
          className="brutal-box p-4"
          style={{ backfaceVisibility: 'hidden' }}
          animate={shake ? { x: [0, -8, 8, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
          key={shake}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="tag">Problem {index + 1}</span>
            <span className="font-mono text-[10px] text-ghost">{item.context}</span>
          </div>
          <p className="mb-3 text-[15px] leading-relaxed">{item.prompt}</p>
          <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                if (status === 'wrong') setStatus('idle')
              }}
              inputMode={item.type === 'number' ? 'text' : 'text'}
              placeholder="Your answer…"
              className="flex-1 border-2 border-border bg-ink px-3 py-2 font-mono text-chalk outline-none focus:border-lime"
              aria-label={`Answer for problem ${index + 1}`}
            />
            <button type="submit" className="brutal-btn-lime shrink-0">
              Check
            </button>
          </form>

          {status === 'wrong' && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 border-l-2 border-flame bg-coal px-3 py-2 text-sm"
            >
              <span className="font-semibold text-flame">{miss}</span>
              {showHint && <p className="mt-1 text-ghost">💡 {item.hint}</p>}
            </motion.div>
          )}
        </motion.div>

        {/* BACK (revealed on solve) */}
        <div
          className="brutal-box absolute inset-0 flex flex-col items-center justify-center border-lime bg-coal p-4 text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="mb-1 text-3xl">✅</span>
          <p className="font-display text-xl text-lime">{celebrate}</p>
          <p className="mt-1 font-mono text-sm text-chalk">
            {item.type === 'number' ? `${item.answer}` : `${item.answer}`} — correct.
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-gold">+10 XP</p>
        </div>
      </motion.div>
    </div>
  )
}
