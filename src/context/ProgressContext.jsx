import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { levelFromXp } from '../lib/leveling.js'
import { SUBJECTS, PASS_THRESHOLD } from '../data/subjects.js'
import { lessonsForSubject, XP_PER_CORRECT, XP_PER_LESSON } from '../data/lessons/index.js'
import { BADGES } from '../data/badges.js'

const STORAGE_KEY = 'math-workouts:v1'

const DEFAULT = {
  xp: 0,
  streak: 0,
  lastActive: null, // 'YYYY-MM-DD'
  completedLessons: [], // lesson ids
  lessonScores: {}, // id -> { correct, total, pct }
  earnedBadges: [], // badge ids
  mistakeJournal: {}, // lessonId -> miss count
  perfectCheckpoints: 0,
  bossWins: 0,
  resets: 0,
  voiceEnabled: false,
  // Active catch-up path: the lesson id the learner is climbing toward via
  // its prerequisite chain (null when not on a path).
  pathTarget: null,
}

const ProgressContext = createContext(null)

function todayKey() {
  // Local date as YYYY-MM-DD
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
}

function daysBetween(a, b) {
  const da = new Date(a + 'T00:00:00')
  const db = new Date(b + 'T00:00:00')
  return Math.round((db - da) / 86400000)
}

export function ProgressProvider({ children }) {
  const [state, setState] = useLocalStorage(STORAGE_KEY, DEFAULT)
  // Badges newly earned this session, surfaced as a toast by the shell.
  const [pendingBadges, setPendingBadges] = useState([])

  // ---- Derived values -------------------------------------------------------
  const levelInfo = useMemo(() => levelFromXp(state.xp), [state.xp])

  const passedSubjects = useMemo(() => {
    return SUBJECTS.filter((s) => {
      const lessons = lessonsForSubject(s.id)
      if (lessons.length === 0) return false
      const allDone = lessons.every((l) => state.completedLessons.includes(l.id))
      if (!allDone) return false
      const avg =
        lessons.reduce((sum, l) => sum + (state.lessonScores[l.id]?.pct ?? 0), 0) / lessons.length
      return avg >= PASS_THRESHOLD
    }).map((s) => s.id)
  }, [state.completedLessons, state.lessonScores])

  const isSubjectUnlocked = useCallback(
    (subjectId) => {
      const idx = SUBJECTS.findIndex((s) => s.id === subjectId)
      if (idx <= 0) return true // first subject always open
      // Gate only on prior subjects that actually have authored content.
      for (let i = 0; i < idx; i++) {
        const prior = SUBJECTS[i]
        const hasContent = lessonsForSubject(prior.id).length > 0
        if (hasContent && !passedSubjects.includes(prior.id)) return false
      }
      return true
    },
    [passedSubjects],
  )

  const subjectProgress = useCallback(
    (subjectId) => {
      const lessons = lessonsForSubject(subjectId)
      if (lessons.length === 0) return { pct: 0, done: 0, total: 0, hasContent: false }
      const done = lessons.filter((l) => state.completedLessons.includes(l.id)).length
      return {
        pct: Math.round((done / lessons.length) * 100),
        done,
        total: lessons.length,
        hasContent: true,
      }
    },
    [state.completedLessons],
  )

  // Snapshot used by badge predicates.
  const statsSnapshot = useMemo(
    () => ({
      ...state,
      level: levelInfo.level,
      passedSubjects,
    }),
    [state, levelInfo.level, passedSubjects],
  )

  // Run badge checks against a freshly-computed snapshot and queue any newly
  // earned ones. Called after each mutation that could earn a badge.
  const evaluateBadges = useCallback((snapshot, alreadyEarned) => {
    const newly = BADGES.filter((b) => !alreadyEarned.includes(b.id) && b.check(snapshot))
    if (newly.length) {
      setPendingBadges((prev) => [...prev, ...newly])
    }
    return newly.map((b) => b.id)
  }, [])

  // ---- Mutations ------------------------------------------------------------

  const addXp = useCallback(
    (amount) => {
      setState((prev) => {
        const next = { ...prev, xp: prev.xp + amount }
        const snap = {
          ...next,
          level: levelFromXp(next.xp).level,
          passedSubjects: [], // recomputed below if needed; xp badges don't need it
        }
        // Recompute passedSubjects for badge accuracy.
        snap.passedSubjects = SUBJECTS.filter((s) => {
          const lessons = lessonsForSubject(s.id)
          if (!lessons.length) return false
          const allDone = lessons.every((l) => next.completedLessons.includes(l.id))
          if (!allDone) return false
          const avg =
            lessons.reduce((sum, l) => sum + (next.lessonScores[l.id]?.pct ?? 0), 0) / lessons.length
          return avg >= PASS_THRESHOLD
        }).map((s) => s.id)
        const earned = evaluateBadges(snap, prev.earnedBadges)
        return earned.length ? { ...next, earnedBadges: [...prev.earnedBadges, ...earned] } : next
      })
    },
    [setState, evaluateBadges],
  )

  // Update the daily streak. Returns nothing; mutates state.
  const registerActivity = useCallback(() => {
    setState((prev) => {
      const today = todayKey()
      if (prev.lastActive === today) return prev // already counted today
      let streak = 1
      if (prev.lastActive) {
        const gap = daysBetween(prev.lastActive, today)
        if (gap === 1) streak = prev.streak + 1
        else if (gap <= 0) streak = prev.streak || 1
        // gap > 1 -> streak resets to 1
      }
      const next = { ...prev, streak, lastActive: today }
      const snap = { ...next, level: levelFromXp(next.xp).level, passedSubjects }
      const earned = evaluateBadges(snap, prev.earnedBadges)
      return earned.length ? { ...next, earnedBadges: [...prev.earnedBadges, ...earned] } : next
    })
  }, [setState, evaluateBadges, passedSubjects])

  // Award XP for a single correct answer (Your Turn or Checkpoint).
  const awardCorrect = useCallback(() => addXp(XP_PER_CORRECT), [addXp])

  // Record a miss against the mistake journal.
  const recordMiss = useCallback(
    (lessonId) => {
      setState((prev) => ({
        ...prev,
        mistakeJournal: {
          ...prev.mistakeJournal,
          [lessonId]: (prev.mistakeJournal[lessonId] || 0) + 1,
        },
      }))
    },
    [setState],
  )

  const recordReset = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, resets: prev.resets + 1 }
      const snap = { ...next, level: levelFromXp(next.xp).level, passedSubjects }
      const earned = evaluateBadges(snap, prev.earnedBadges)
      return earned.length ? { ...next, earnedBadges: [...prev.earnedBadges, ...earned] } : next
    })
  }, [setState, evaluateBadges, passedSubjects])

  // Finalize a lesson: store checkpoint score, mark complete, grant lesson XP,
  // bump streak, and re-check badges (perfect checkpoint, subject pass, etc).
  const completeLesson = useCallback(
    (lessonId, { correct, total }) => {
      setState((prev) => {
        const pct = total > 0 ? correct / total : 0
        const lessonScores = { ...prev.lessonScores, [lessonId]: { correct, total, pct } }
        const completedLessons = prev.completedLessons.includes(lessonId)
          ? prev.completedLessons
          : [...prev.completedLessons, lessonId]
        const perfectCheckpoints =
          correct === total && total > 0 ? prev.perfectCheckpoints + 1 : prev.perfectCheckpoints

        const today = todayKey()
        let streak = prev.streak
        let lastActive = prev.lastActive
        if (prev.lastActive !== today) {
          if (!prev.lastActive) streak = 1
          else {
            const gap = daysBetween(prev.lastActive, today)
            streak = gap === 1 ? prev.streak + 1 : gap <= 0 ? prev.streak || 1 : 1
          }
          lastActive = today
        }

        const next = {
          ...prev,
          xp: prev.xp + XP_PER_LESSON,
          lessonScores,
          completedLessons,
          perfectCheckpoints,
          streak,
          lastActive,
        }

        // Recompute passedSubjects with the new scores for accurate badges.
        const newPassed = SUBJECTS.filter((s) => {
          const lessons = lessonsForSubject(s.id)
          if (!lessons.length) return false
          const allDone = lessons.every((l) => next.completedLessons.includes(l.id))
          if (!allDone) return false
          const avg =
            lessons.reduce((sum, l) => sum + (next.lessonScores[l.id]?.pct ?? 0), 0) / lessons.length
          return avg >= PASS_THRESHOLD
        }).map((s) => s.id)

        const snap = { ...next, level: levelFromXp(next.xp).level, passedSubjects: newPassed }
        const earned = evaluateBadges(snap, prev.earnedBadges)
        return earned.length ? { ...next, earnedBadges: [...prev.earnedBadges, ...earned] } : next
      })
    },
    [setState, evaluateBadges],
  )

  const recordBossWin = useCallback(
    (subjectId, won) => {
      setState((prev) => {
        if (!won) return prev
        const next = { ...prev, bossWins: prev.bossWins + 1, xp: prev.xp + 50 }
        const snap = { ...next, level: levelFromXp(next.xp).level, passedSubjects }
        const earned = evaluateBadges(snap, prev.earnedBadges)
        return earned.length ? { ...next, earnedBadges: [...prev.earnedBadges, ...earned] } : next
      })
    },
    [setState, evaluateBadges, passedSubjects],
  )

  const setVoiceEnabled = useCallback(
    (on) => setState((prev) => ({ ...prev, voiceEnabled: on })),
    [setState],
  )

  // Catch-up path: aim the learner at an advanced lesson; the UI walks them
  // through its unfinished prerequisites in order until the target is done.
  const startPath = useCallback(
    (targetLessonId) => setState((prev) => ({ ...prev, pathTarget: targetLessonId })),
    [setState],
  )

  const clearPath = useCallback(
    () => setState((prev) => ({ ...prev, pathTarget: null })),
    [setState],
  )

  const resetAll = useCallback(() => {
    setState(DEFAULT)
    setPendingBadges([])
  }, [setState])

  const dismissBadge = useCallback((id) => {
    setPendingBadges((prev) => prev.filter((b) => b.id !== id))
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      levelInfo,
      passedSubjects,
      statsSnapshot,
      pendingBadges,
      // queries
      isSubjectUnlocked,
      subjectProgress,
      // mutations
      addXp,
      awardCorrect,
      registerActivity,
      recordMiss,
      recordReset,
      completeLesson,
      recordBossWin,
      setVoiceEnabled,
      startPath,
      clearPath,
      resetAll,
      dismissBadge,
    }),
    [
      state,
      levelInfo,
      passedSubjects,
      statsSnapshot,
      pendingBadges,
      isSubjectUnlocked,
      subjectProgress,
      addXp,
      awardCorrect,
      registerActivity,
      recordMiss,
      recordReset,
      completeLesson,
      recordBossWin,
      setVoiceEnabled,
      startPath,
      clearPath,
      resetAll,
      dismissBadge,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
