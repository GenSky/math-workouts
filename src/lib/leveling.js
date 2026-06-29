// Level curve: 1–50. Each level costs a bit more XP than the last so the bar
// always feels like it's moving early and earns respect later.

const MAX_LEVEL = 50
const BASE = 100 // XP for level 1 -> 2
const GROWTH = 1.18

// Total XP required to have *reached* a given level (level 1 = 0 XP).
function xpToReachLevel(level) {
  let total = 0
  for (let l = 1; l < level; l++) {
    total += Math.round(BASE * Math.pow(GROWTH, l - 1))
  }
  return total
}

export function levelFromXp(xp) {
  let level = 1
  while (level < MAX_LEVEL && xp >= xpToReachLevel(level + 1)) {
    level++
  }
  const floor = xpToReachLevel(level)
  const ceil = level >= MAX_LEVEL ? floor : xpToReachLevel(level + 1)
  const intoLevel = xp - floor
  const span = Math.max(1, ceil - floor)
  return {
    level,
    intoLevel,
    span,
    pct: level >= MAX_LEVEL ? 100 : Math.min(100, Math.round((intoLevel / span) * 100)),
    isMax: level >= MAX_LEVEL,
    xpForNext: level >= MAX_LEVEL ? 0 : ceil - xp,
  }
}

export { MAX_LEVEL }
