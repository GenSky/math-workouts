import { motion } from 'framer-motion'
import LineViz from './LineViz.jsx'

// Step-by-step worked solution. Each step is numbered and narrated in plain
// English; the "result" line is highlighted to show what changed.
export default function WorkedExample({ lesson }) {
  const { worked } = lesson

  return (
    <div>
      <div className="brutal-box mb-4 border-electric bg-coal p-4">
        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-electric">
          The problem
        </div>
        <p className="font-mono text-lg text-chalk">{worked.problem}</p>
      </div>

      {lesson.id === 'slope-intercept' && (
        <div className="mb-4">
          <LineViz m={2} b={1} points={[{ x: 0, y: 1 }, { x: 1, y: 3 }]} />
        </div>
      )}

      <ol className="space-y-3">
        {worked.steps.map((step, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.05 }}
            className="brutal-box p-4"
          >
            <div className="flex items-start gap-3">
              <span className="section-num">{i + 1}</span>
              <div className="flex-1">
                <div className="mb-1 font-display text-sm uppercase tracking-wide text-chalk">
                  {step.label}
                </div>
                <p className="mb-2 text-[15px] text-chalk">{step.do}</p>
                <p className="mb-2 text-sm leading-relaxed text-ghost">{step.why}</p>
                <div className="inline-block border-2 border-lime bg-lime/10 px-3 py-1 font-mono text-sm text-lime">
                  {step.result}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-4 flex items-center gap-3 border-2 border-lime bg-lime/10 p-4"
      >
        <span className="text-2xl">🎯</span>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-lime">Answer</div>
          <div className="font-display text-lg">{worked.answer}</div>
        </div>
      </motion.div>
    </div>
  )
}
