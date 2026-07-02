import numberLine from './number-line.js'
import orderOfOperations from './order-of-operations.js'
import fractionsDisguise from './fractions-disguise.js'
import variables from './variables.js'
import oneStepEquations from './one-step-equations.js'
import slopeIntercept from './slope-intercept.js'
import exponents from './exponents.js'
import quadratics from './quadratics.js'
import areaPerimeter from './area-perimeter.js'
import pythagoras from './pythagoras.js'
import unitCircle from './unit-circle.js'
import sineCosine from './sine-cosine.js'
import functions from './functions.js'
import limitsIntro from './limits-intro.js'
import probability from './probability.js'
import standardDeviation from './standard-deviation.js'
import derivatives from './derivatives.js'
import chainRule from './chain-rule.js'
import integrals from './integrals.js'
import series from './series.js'

// Every fully-authored lesson, Pre-Algebra through Calc II. Each lesson may
// declare `prereqs` (lesson ids it builds on) — see src/lib/prereqs.js for the
// graph walking that powers catch-up paths.
export const LESSONS = [
  numberLine,
  orderOfOperations,
  fractionsDisguise,
  variables,
  oneStepEquations,
  slopeIntercept,
  exponents,
  quadratics,
  areaPerimeter,
  pythagoras,
  unitCircle,
  sineCosine,
  functions,
  limitsIntro,
  probability,
  standardDeviation,
  derivatives,
  chainRule,
  integrals,
  series,
]

export function getLesson(id) {
  return LESSONS.find((l) => l.id === id)
}

export function lessonsForSubject(subjectId) {
  return LESSONS.filter((l) => l.subjectId === subjectId).sort((a, b) => a.order - b.order)
}

// XP economy
export const XP_PER_CORRECT = 10
export const XP_PER_LESSON = 25

// Each correct "Your Turn" + each correct checkpoint answer is worth XP_PER_CORRECT.
// Completing the lesson adds XP_PER_LESSON on top.
export function maxLessonXp(lesson) {
  const correctSlots = lesson.yourTurn.length + lesson.checkpoint.length
  return correctSlots * XP_PER_CORRECT + XP_PER_LESSON
}
