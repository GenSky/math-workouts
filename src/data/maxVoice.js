// Max's voice: the variety pack of celebrations, encouragements, and the
// analogy bank. Keeping these here means every component pulls from the same
// personality.

export const CELEBRATIONS = [
  "Let's go.",
  'Clean.',
  "That's the one.",
  'Locked in.',
  'Textbook — minus the textbook.',
  'Nailed it.',
  'You and me, unstoppable.',
  'Chef\'s kiss.',
  'Smooth.',
  'Yep. Exactly that.',
]

// "Never say incorrect." These reframe a miss as information.
export const GENTLE_MISSES = [
  "Close — here's what your answer is actually saying...",
  "Not quite, but I see the move you were making. Watch this...",
  "Almost. Your instinct was right, the execution slipped. Let's redo it...",
  "Hold up — that answer is solving a slightly different problem. Here's the gap...",
  "Good attempt. The mistake tells me something useful — let's use it...",
]

export const ENCOURAGEMENTS = [
  "We're just getting warmed up.",
  'Every pro was once exactly here.',
  "Mistakes are just data. Let's read the data.",
  "I've got you. One step at a time.",
  'Slow is smooth, smooth is fast.',
]

// Reset message when the user gets 3 wrong in a row.
export const RESET_INTRO =
  "Alright, time out. Three misses means it's on me, not you — I explained it wrong. Forget everything. New analogy, fresh start. Here we go:"

export function pick(arr, seed = Math.random()) {
  return arr[Math.floor(seed * arr.length) % arr.length]
}

// The seed analogy bank from the brief. The lesson content expands on these,
// but they power the "fresh analogy" reset and the analogy reference page.
export const ANALOGY_BANK = {
  algebra: 'Solving for x is like being a detective. You use clues (the equation) to find the suspect (x).',
  fractions: 'A fraction is just a division problem wearing a disguise.',
  negatives:
    'Think of your bank account. Debt is negative. Depositing erases debt before it builds wealth.',
  slope:
    'Slope is how steep a hill is. A slope of 2 means for every step right, you climb 2 steps up. Flat road = slope of 0.',
  exponents: "Exponents are repeated multiplication on steroids. 2^10 isn't 20, it's a thousand.",
  pythagoras:
    'Your GPS uses this every second to calculate the straight-line distance between two points.',
  trig: "Sine and cosine are just the x and y coordinates of a point walking around a circle. That's it.",
  derivatives:
    'Speed is the derivative of position. You already understand calculus — you just didn\'t know the word.',
  integrals:
    'An integral is just adding up infinite tiny slices. Like calculating a road trip\'s distance by summing every inch.',
  stdDev:
    "Standard deviation is the average distance from the average. How spread out are your team's golf scores from the group mean?",
}
