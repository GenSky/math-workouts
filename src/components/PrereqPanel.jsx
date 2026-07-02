import { useNavigate } from 'react-router-dom'
import { fullChain, estimateMinutes } from '../lib/prereqs.js'
import { useProgress } from '../context/ProgressContext.jsx'
import MaxSays from './MaxSays.jsx'

// "This builds on" panel, shown at the top of a lesson. Renders the lesson's
// full concept chain (most fundamental first) with done/missing state. When
// pieces are missing, Max offers a catch-up path: walk the missing prereqs in
// order, then come back and take this lesson.
export default function PrereqPanel({ lesson }) {
  const navigate = useNavigate()
  const { completedLessons, startPath } = useProgress()

  const chain = fullChain(lesson.id)
  if (chain.length === 0) return null // a true foundation lesson — nothing beneath it

  const missing = chain.filter((l) => !completedLessons.includes(l.id))
  const minutes = estimateMinutes(missing)

  function beginPath() {
    startPath(lesson.id)
    navigate(`/lesson/${missing[0].id}`)
  }

  return (
    <div className="space-y-3">
      <div className="brutal-box p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-violet">
            This builds on
          </span>
          <span className="font-mono text-[10px] text-ghost">
            {chain.length - missing.length}/{chain.length} banked
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {chain.map((p, i) => {
            const done = completedLessons.includes(p.id)
            return (
              <span key={p.id} className="flex items-center gap-1.5">
                {i > 0 && <span className="font-mono text-[10px] text-ghost">→</span>}
                <button
                  onClick={() => navigate(`/lesson/${p.id}`)}
                  className={`tag transition-colors hover:border-chalk hover:text-chalk ${
                    done ? 'border-lime/70 text-lime' : 'border-gold/70 text-gold'
                  }`}
                  title={done ? 'Completed — tap to revisit' : 'Not learned yet — tap to jump in'}
                >
                  {done ? '✓' : '○'} {p.title}
                </button>
              </span>
            )
          })}
        </div>
      </div>

      {missing.length > 0 && (
        <>
          <MaxSays tone="info">
            Real talk: this lesson stands on{' '}
            <span className="text-gold">
              {missing.map((m) => m.title).join(', ')}
            </span>{' '}
            — {missing.length === 1 ? "and you haven't banked it yet" : `${missing.length} concepts you haven't banked yet`}. We can blitz{' '}
            {missing.length === 1 ? 'it' : 'them'} first (~{minutes} min, in the right order) and
            come straight back here. Or dive in cold — your call, no judgment.
          </MaxSays>
          <button onClick={beginPath} className="brutal-btn-lime w-full">
            🧗 Build me up first — {missing.length} quick{' '}
            {missing.length === 1 ? 'lesson' : 'lessons'} →
          </button>
        </>
      )}

      {missing.length === 0 && (
        <MaxSays tone="hype">
          You've already banked everything this lesson stands on. Fully loaded — let's go.
        </MaxSays>
      )}
    </div>
  )
}
