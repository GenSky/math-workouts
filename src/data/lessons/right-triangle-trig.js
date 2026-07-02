// Trigonometry · Lesson 1 — SOH-CAH-TOA: Triangle Ratios
export default {
  id: 'right-triangle-trig',
  subjectId: 'trigonometry',
  order: 1,
  title: 'SOH-CAH-TOA: Triangle Ratios',
  icon: '🗼',
  estMinutes: 12,
  tagline: 'Three sides, three ratios — and they only care about the angle.',
  prereqs: ['pythagoras', 'fractions-disguise'],

  plainIdea:
    'Pick an angle in a right triangle, and its three sides get names: the side across from your angle (opposite), the side next to it (adjacent), and the longest side (hypotenuse). Sine, cosine, and tangent are just three fractions built from those sides — and they come out the same no matter how big the triangle is.',

  vocab: [
    {
      term: 'hypotenuse',
      means: 'The longest side of a right triangle — always the one directly across from the right angle. Your old friend from Pythagoras.',
    },
    {
      term: 'opposite',
      means: 'The side across the triangle from the angle you picked. Stand at your angle and point across — that\'s it.',
    },
    {
      term: 'adjacent',
      means: 'The side touching your angle that ISN\'T the hypotenuse. "Adjacent" just means "next to."',
    },
    {
      term: 'SOH-CAH-TOA',
      means: 'The memory trick: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.',
    },
  ],

  hook: "A surveyor stands 100 feet from a radio tower, tilts her scope up to the top, and reads the angle. Thirty seconds later she knows the tower's exact height — without a tape measure, without leaving the ground. Her secret weapon is three fractions and a five-syllable magic word: SOH-CAH-TOA.",

  analogy: {
    analogy:
      "Think of a wheelchair ramp. The ramp surface itself is the long slanted piece — the hypotenuse. The height it climbs is one leg; the ground it covers is the other. Now here's the insight: the STEEPNESS of the ramp isn't about its size. A 3-foot-rise-over-4-foot-run ramp and a 30-over-40 ramp feel exactly as steep under your wheels — same tilt, same angle. What captures that steepness isn't any single side; it's the RATIOS between sides.",
    bridge:
      "In symbols: pick an angle θ at the bottom of the ramp. sin(θ) = opposite/hypotenuse (rise ÷ ramp surface), cos(θ) = adjacent/hypotenuse (run ÷ ramp surface), tan(θ) = opposite/adjacent (rise ÷ run — steepness itself, a fraction in disguise doing honest work). Double every side and each fraction's top and bottom both double — the ratio doesn't budge. That's why sin, cos, and tan are functions OF THE ANGLE: feed in θ, get the ratio, any size triangle.",
  },

  worked: {
    problem: 'A right triangle has legs 3 and 4 and hypotenuse 5 (the Pythagoras classic: 3² + 4² = 5²). For the angle whose opposite side is 3, find sin, cos, and tan.',
    steps: [
      {
        label: 'Label the sides relative to YOUR angle',
        do: 'Hypotenuse = 5 (always the longest side, across from the right angle). Opposite = 3 (across from our angle). Adjacent = 4 (touching our angle, not the hypotenuse).',
        why: 'Everything hinges on this labeling — and it\'s relative. The hypotenuse never changes, but "opposite" and "adjacent" swap if you switch to the other acute angle. Always start by asking: whose angle are we talking about?',
        result: 'opp = 3, adj = 4, hyp = 5',
      },
      {
        label: 'SOH: sine',
        do: 'sin = opposite/hypotenuse = 3/5 = 0.6.',
        why: 'Sine answers: "of the full slanted length, what fraction is the rise?" Here, the climb is six-tenths of the ramp itself.',
        result: 'sin = 3/5 = 0.6',
      },
      {
        label: 'CAH: cosine',
        do: 'cos = adjacent/hypotenuse = 4/5 = 0.8.',
        why: 'Cosine is sine\'s partner: same denominator (the hypotenuse), but measuring the sideways share instead of the rise.',
        result: 'cos = 4/5 = 0.8',
      },
      {
        label: 'TOA: tangent — and the size test',
        do: 'tan = opposite/adjacent = 3/4 = 0.75. Now double the triangle to 6-8-10: sin = 6/10 = 0.6, cos = 8/10 = 0.8, tan = 6/8 = 0.75. Identical.',
        why: 'Same shape, doubled size, same three ratios — because top and bottom of each fraction doubled together. The ratios belong to the ANGLE, not the triangle. That\'s the entire reason trig works.',
        result: 'tan = 3/4 = 0.75; size doesn\'t matter, angle does',
      },
    ],
    answer: 'sin = 0.6, cos = 0.8, tan = 0.75',
  },

  yourTurn: [
    {
      id: 't1',
      context: 'Confidence builder — straight SOH.',
      prompt: 'A right triangle has opposite side 6 and hypotenuse 10 (relative to your angle). sin = ? (as a decimal)',
      type: 'number',
      answer: 0.6,
      hint: 'SOH: sine = opposite ÷ hypotenuse = 6/10. Fractions in disguise: that\'s a division problem.',
    },
    {
      id: 't2',
      context: 'Same triangle family, different ratio.',
      prompt: 'Adjacent side 8, hypotenuse 10. cos = ? (as a decimal)',
      type: 'number',
      answer: 0.8,
      hint: 'CAH: cosine = adjacent ÷ hypotenuse = 8/10.',
    },
    {
      id: 't3',
      context: 'A twist — no hypotenuse needed.',
      prompt: 'Opposite 9, adjacent 12. tan = ? (as a decimal)',
      type: 'number',
      answer: 0.75,
      hint: 'TOA: tangent = opposite ÷ adjacent = 9/12. Simplify the fraction (÷3 top and bottom) or just divide.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'In SOH-CAH-TOA, the "SOH" stands for...',
      choices: [
        'Sine = Opposite/Hypotenuse',
        'Sine = Hypotenuse/Opposite',
        'Sine = Adjacent/Hypotenuse',
        'Side Of Hypotenuse',
      ],
      answer: 0,
      why: 'Right — S-O-H: Sine equals Opposite over Hypotenuse. The mnemonic even puts them in fraction order: top, then bottom.',
      reExplain: {
        analogy: 'Reading the recipe card.',
        text: 'Each three-letter chunk is a tiny recipe: first letter names the dish (Sine), the next two are the ingredients in order — Opposite on top, Hypotenuse on the bottom. CAH and TOA read exactly the same way. If you can spell it, you can compute it.',
      },
    },
    {
      id: 'c2',
      question: 'For BOTH sine and cosine, the denominator (bottom of the fraction) is always...',
      choices: ['The opposite side', 'The adjacent side', 'The hypotenuse', 'Whichever side is shortest'],
      answer: 2,
      why: 'Exactly. SOH and CAH both end in H — sine and cosine always divide by the hypotenuse. Only tangent skips it.',
      reExplain: {
        analogy: 'Percent of the whole trip.',
        text: 'Sine and cosine both answer "what share of the full slanted trip?" — the rise share and the run share. Shares are always measured against the whole, and the hypotenuse IS the whole trip. Tangent is the odd one out: it compares the two legs to each other and ignores the hypotenuse entirely.',
      },
    },
    {
      id: 'c3',
      question: 'Relative to some angle, a right triangle has opposite = 5 and adjacent = 10. What is tan?',
      choices: ['2', '0.5', '0.05', '5'],
      answer: 1,
      why: 'Clean. TOA: tan = opposite/adjacent = 5/10 = 0.5. Opposite goes on top — order matters.',
      reExplain: {
        analogy: 'Rise over run, upgraded.',
        text: 'Tangent is exactly the slope idea: rise ÷ run. The rise (opposite) is 5, the run (adjacent) is 10, so the ramp climbs half a foot for every foot forward: 0.5. Flipping the fraction gives 2 — that\'s the trap, and it describes a much steeper ramp than this one. Opposite on top, always.',
      },
    },
    {
      id: 'c4',
      question: 'Why can the sine of an angle in a right triangle never be bigger than 1?',
      choices: [
        'Because calculators refuse to show it',
        'Because the opposite side (a leg) can never be longer than the hypotenuse',
        'Because sine is always negative',
        'It can — sin can be any number',
      ],
      answer: 1,
      why: "That's the one. sin = opposite/hypotenuse, and the hypotenuse is the longest side. A fraction with the bigger number on the bottom stays at 1 or below.",
      reExplain: {
        analogy: 'The shortcut always wins.',
        text: 'The hypotenuse is the straight-line shortcut across the triangle; each leg is a longer-route piece that can\'t beat it. So opposite ÷ hypotenuse is always a smaller number divided by a bigger one — at most 1, and that only in the extreme. Same logic caps cosine at 1. Tangent, with no hypotenuse in sight, is free to grow as large as it likes.',
      },
    },
    {
      id: 'c5',
      question: 'A 3-4-5 triangle and a 30-40-50 triangle have the same angles. Their sin, cos, and tan values are...',
      choices: [
        'Ten times bigger in the large triangle',
        'Ten times smaller in the large triangle',
        'Exactly the same',
        'Impossible to compare',
      ],
      answer: 2,
      why: 'Locked in. 3/5 and 30/50 are the same fraction: 0.6. The ratios track the ANGLE, and the angles are identical.',
      reExplain: {
        analogy: 'Zooming a photo.',
        text: 'Enlarge a photo of a triangle 10× and every side grows 10× — but nothing about its SHAPE changes; the corners are just as sharp. Since sin, cos, and tan are side ÷ side, the 10s cancel: 30/50 = 3/5. This is the superpower — measure an angle, and you know the ratios for every triangle of that shape ever built, from a doorstop to a radio tower.',
      },
    },
  ],
}
