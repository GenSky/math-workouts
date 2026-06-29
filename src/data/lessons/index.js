import variables from './variables.js'
import oneStepEquations from './one-step-equations.js'
import slopeIntercept from './slope-intercept.js'

// All fully-authored lessons. (More subjects exist in subjects.js as "coming
// soon"; their lessons land here as they're written.)
export const LESSONS = [variables, oneStepEquations, slopeIntercept]

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
