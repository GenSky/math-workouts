import numberLine from './number-line.js'
import orderOfOperations from './order-of-operations.js'
import fractionsDisguise from './fractions-disguise.js'
import decimalsPercents from './decimals-percents.js'
import ratiosProportions from './ratios-proportions.js'
import variables from './variables.js'
import oneStepEquations from './one-step-equations.js'
import twoStepEquations from './two-step-equations.js'
import distributiveProperty from './distributive-property.js'
import slopeIntercept from './slope-intercept.js'
import exponents from './exponents.js'
import quadratics from './quadratics.js'
import factoring from './factoring.js'
import exponentialGrowth from './exponential-growth.js'
import anglesTriangles from './angles-triangles.js'
import areaPerimeter from './area-perimeter.js'
import pythagoras from './pythagoras.js'
import circles from './circles.js'
import rightTriangleTrig from './right-triangle-trig.js'
import unitCircle from './unit-circle.js'
import sineCosine from './sine-cosine.js'
import radians from './radians.js'
import functions from './functions.js'
import transformations from './transformations.js'
import logarithms from './logarithms.js'
import limitsIntro from './limits-intro.js'
import meanMedianMode from './mean-median-mode.js'
import probability from './probability.js'
import standardDeviation from './standard-deviation.js'
import normalDistribution from './normal-distribution.js'
import derivatives from './derivatives.js'
import powerRule from './power-rule.js'
import chainRule from './chain-rule.js'
import maxMin from './max-min.js'
import integrals from './integrals.js'
import fundamentalTheorem from './fundamental-theorem.js'
import series from './series.js'

// Every fully-authored lesson, Pre-Algebra through Calc II. Each lesson may
// declare `prereqs` (lesson ids it builds on) — see src/lib/prereqs.js for the
// graph walking that powers catch-up paths.
export const LESSONS = [
  numberLine,
  orderOfOperations,
  fractionsDisguise,
  decimalsPercents,
  ratiosProportions,
  variables,
  oneStepEquations,
  twoStepEquations,
  distributiveProperty,
  slopeIntercept,
  exponents,
  quadratics,
  factoring,
  exponentialGrowth,
  anglesTriangles,
  areaPerimeter,
  pythagoras,
  circles,
  rightTriangleTrig,
  unitCircle,
  sineCosine,
  radians,
  functions,
  transformations,
  logarithms,
  limitsIntro,
  meanMedianMode,
  probability,
  standardDeviation,
  normalDistribution,
  derivatives,
  powerRule,
  chainRule,
  maxMin,
  integrals,
  fundamentalTheorem,
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
