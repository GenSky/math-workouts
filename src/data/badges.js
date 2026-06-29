// Badges. Each badge has a `check(stats)` predicate run after every progress
// update. `stats` is the live progress snapshot from ProgressContext.

export const BADGES = [
  {
    id: 'first-blood',
    name: 'First Blood',
    emoji: '🩸',
    desc: 'Completed your very first lesson.',
    check: (s) => s.completedLessons.length >= 1,
  },
  {
    id: 'on-a-roll',
    name: 'On a Roll',
    emoji: '🔥',
    desc: 'Hit a 5-day streak.',
    check: (s) => s.streak >= 5,
  },
  {
    id: 'sharp-shooter',
    name: 'Sharp Shooter',
    emoji: '🎯',
    desc: 'Aced a checkpoint with a perfect 5/5.',
    check: (s) => s.perfectCheckpoints >= 1,
  },
  {
    id: 'century',
    name: 'Century Club',
    emoji: '💯',
    desc: 'Banked 100 XP.',
    check: (s) => s.xp >= 100,
  },
  {
    id: 'detective',
    name: 'The Detective',
    emoji: '🕵️',
    desc: 'Finished Algebra I — case closed.',
    check: (s) => s.passedSubjects.includes('algebra-1'),
  },
  {
    id: 'geometry-god',
    name: 'Geometry God',
    emoji: '📐',
    desc: 'Passed Geometry at 80%+.',
    check: (s) => s.passedSubjects.includes('geometry'),
  },
  {
    id: 'calc-survivor',
    name: 'Calc Survivor',
    emoji: '🏁',
    desc: 'Lived through Calculus I.',
    check: (s) => s.passedSubjects.includes('calculus-1'),
  },
  {
    id: 'boss-slayer',
    name: 'Boss Slayer',
    emoji: '⚔️',
    desc: 'Won a Boss Battle gauntlet.',
    check: (s) => s.bossWins >= 1,
  },
  {
    id: 'comeback-kid',
    name: 'Comeback Kid',
    emoji: '🌀',
    desc: 'Bounced back after Max reset a concept for you.',
    check: (s) => s.resets >= 1,
  },
  {
    id: 'level-10',
    name: 'Double Digits',
    emoji: '🚀',
    desc: 'Reached Level 10.',
    check: (s) => s.level >= 10,
  },
]

export function getBadge(id) {
  return BADGES.find((b) => b.id === id)
}
