import { getLesson } from '../data/lessons/index.js'

// The concept graph. Every lesson may declare `prereqs: [lessonId, ...]` —
// concepts it stands on, possibly in earlier subjects. These helpers walk that
// graph so the UI can say "this builds on X and Y" and build a catch-up path.

// Direct prerequisites of a lesson, as lesson objects (unknown ids dropped).
export function directPrereqs(lessonId) {
  const lesson = getLesson(lessonId)
  if (!lesson) return []
  return (lesson.prereqs || []).map(getLesson).filter(Boolean)
}

// Every concept `lessonId` transitively stands on, ordered so that the most
// fundamental comes first (a valid learning order). Cycle-safe; excludes the
// target itself.
export function fullChain(lessonId) {
  const seen = new Set()
  const order = []
  function visit(id) {
    if (seen.has(id)) return
    seen.add(id)
    const lesson = getLesson(id)
    if (!lesson) return
    for (const p of lesson.prereqs || []) visit(p)
    if (id !== lessonId) order.push(lesson)
  }
  visit(lessonId)
  return order
}

// The catch-up path to `targetId`: every prerequisite the learner hasn't
// completed yet, in learning order, ending with the target itself (if it's
// not already complete). Empty array means they're fully ready and done.
export function learningPath(targetId, completedLessons) {
  const done = new Set(completedLessons)
  const path = fullChain(targetId).filter((l) => !done.has(l.id))
  const target = getLesson(targetId)
  if (target && !done.has(target.id)) path.push(target)
  return path
}

// Prereqs the learner is missing for a lesson (not the whole chain — just
// direct ones, each expanded only if itself incomplete deeper down).
export function missingPrereqs(lessonId, completedLessons) {
  const done = new Set(completedLessons)
  return fullChain(lessonId).filter((l) => !done.has(l.id))
}

// Rough time estimate for a list of lessons.
export function estimateMinutes(lessons) {
  return lessons.reduce((sum, l) => sum + (l.estMinutes || 10), 0)
}
