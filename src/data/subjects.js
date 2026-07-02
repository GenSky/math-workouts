// The full progression. Subjects unlock in order; each requires 80%+ on the
// previous one. `topics` lists the lesson ids that belong to the subject so the
// dashboard can compute "% complete" even for subjects whose lessons are still
// stubs (coming soon).

export const SUBJECTS = [
  {
    id: 'pre-algebra',
    name: 'Pre-Algebra',
    short: 'Pre-Alg',
    blurb: 'Fractions, negatives, and the grammar of numbers.',
    color: '#5b8cff',
    emoji: '🧱',
    topics: ['number-line', 'order-of-operations', 'fractions-disguise'],
  },
  {
    id: 'algebra-1',
    name: 'Algebra I',
    short: 'Alg I',
    blurb: 'Variables, equations, and the line that started it all.',
    color: '#c6ff3a',
    emoji: '🕵️',
    topics: ['variables', 'one-step-equations', 'slope-intercept'],
  },
  {
    id: 'algebra-2',
    name: 'Algebra II',
    short: 'Alg II',
    blurb: 'Quadratics, exponents on steroids, and curves that bite back.',
    color: '#b06bff',
    emoji: '📈',
    topics: ['exponents', 'quadratics'],
  },
  {
    id: 'geometry',
    name: 'Geometry',
    short: 'Geo',
    blurb: 'Shapes, proofs, and the theorem your GPS lives by.',
    color: '#ff5e3a',
    emoji: '📐',
    topics: ['area-perimeter', 'pythagoras'],
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    short: 'Trig',
    blurb: 'A point walks around a circle. That walk is sine and cosine.',
    color: '#ffc83a',
    emoji: '🔺',
    topics: ['unit-circle', 'sine-cosine'],
  },
  {
    id: 'pre-calculus',
    name: 'Pre-Calculus',
    short: 'Pre-Calc',
    blurb: 'Functions warming up for the main event.',
    color: '#5b8cff',
    emoji: '🌉',
    topics: ['functions', 'limits-intro'],
  },
  {
    id: 'statistics',
    name: 'Statistics & Probability',
    short: 'Stats',
    blurb: 'How spread out, how likely, how sure.',
    color: '#c6ff3a',
    emoji: '🎲',
    topics: ['probability', 'standard-deviation'],
  },
  {
    id: 'calculus-1',
    name: 'Calculus I',
    short: 'Calc I',
    blurb: 'Derivatives: you already do this when you drive.',
    color: '#b06bff',
    emoji: '🏎️',
    topics: ['derivatives', 'chain-rule'],
  },
  {
    id: 'calculus-2',
    name: 'Calculus II',
    short: 'Calc II',
    blurb: 'Integrals: adding up infinite tiny slices.',
    color: '#ff5e3a',
    emoji: '∫',
    topics: ['integrals', 'series'],
  },
]

export const PASS_THRESHOLD = 0.8 // 80% to unlock the next subject

export function getSubject(id) {
  return SUBJECTS.find((s) => s.id === id)
}

export function subjectIndex(id) {
  return SUBJECTS.findIndex((s) => s.id === id)
}
