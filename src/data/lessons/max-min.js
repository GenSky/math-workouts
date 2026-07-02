// Calculus I · Lesson 4 — Optimization
export default {
  id: 'max-min',
  subjectId: 'calculus-1',
  order: 4,
  title: 'Optimization: Peaks & Valleys',
  icon: '🏔️',
  estMinutes: 12,
  tagline: 'The best of anything hides where the derivative hits zero.',
  prereqs: ['power-rule', 'quadratics'],

  plainIdea:
    'At the very top of a hill or the very bottom of a valley, the ground under your feet is flat — the slope is 0. So to find the biggest or smallest anything, take the derivative, set it to 0, and solve. That flat spot is your answer.',

  vocab: [
    {
      term: 'maximum (max)',
      means: 'The highest point — the peak. The biggest value the function reaches.',
    },
    {
      term: 'minimum (min)',
      means: 'The lowest point — the valley floor. The smallest value the function reaches.',
    },
    {
      term: 'flat spot',
      means: 'A point where the derivative equals 0 — the tangent line is perfectly horizontal. Peaks and valleys live exactly here.',
    },
    {
      term: 'optimize',
      means: 'Find the best possible value: most area, least cost, biggest profit. In calculus, "best" means hunting the flat spot.',
    },
  ],

  hook: "A company tweaks its price: too low and they give the product away, too high and nobody buys. Somewhere in between sits the price that earns the MOST. Engineers hunt the strongest beam, farmers the biggest field, airlines the cheapest route. Every one of these is the same math problem — and the power rule you just learned turns each into about three lines of work.",

  analogy: {
    analogy:
      "Hike over a hill and pay attention to the ground under your boots. On the way up, the trail tilts upward — positive slope. On the way down, it tilts downward — negative slope. At the exact summit, for one perfect step, the ground is FLAT: it has stopped going up and hasn't started going down. The bottom of a valley plays the same trick in reverse. Tops and bottoms are always, without exception, flat spots.",
    bridge:
      "The derivative is the tilt-o-meter for any function, so 'the ground is flat' translates to f′(x) = 0. That gives the whole optimization recipe: (1) write a formula for the thing you want to maximize or minimize, (2) differentiate it — power rule, autopilot — and (3) set the derivative to 0 and solve, which is usually a one-step equation. For A(x) = 10x − x², the tilt-o-meter reads A′(x) = 10 − 2x, and 10 − 2x = 0 pins the summit at x = 5. Three lines, best answer.",
  },

  worked: {
    problem: 'You have 20 m of fence for a rectangular garden. What shape gives the MOST area?',
    steps: [
      {
        label: 'Set up the area formula',
        do: 'Half the perimeter is 10, so the sides are x and (10 − x). Area: A(x) = x(10 − x) = 10x − x².',
        why: "Two of each side must total 20 m of fence, so one length plus one width is 10 — pick the length x and the width is forced to be 10 − x. Now 'best garden' is a question about one function.",
        result: 'A(x) = 10x − x²',
      },
      {
        label: 'Differentiate with the power rule',
        do: '10x → 10, and −x² → −2x. So A′(x) = 10 − 2x.',
        why: "This is the tilt-o-meter for area: it reports whether making x bigger currently grows the garden (positive) or shrinks it (negative). Power rule on autopilot — last lesson paying rent.",
        result: 'A′(x) = 10 − 2x',
      },
      {
        label: 'Find the flat spot',
        do: 'Set 10 − 2x = 0 → 2x = 10 → x = 5.',
        why: 'The best x is where area stops improving — where the tilt hits exactly 0. A one-step equation finds it: below 5, more x helps; above 5, more x hurts; at 5, perfection.',
        result: 'x = 5',
      },
      {
        label: 'Read the answer — and check peak vs. valley',
        do: 'Sides: 5 and 10 − 5 = 5. A square! Area = 5 × 5 = 25 m².',
        why: "The parabola 10x − x² has a negative x² term, so it opens DOWNWARD (quadratics callback) — its flat spot is the PEAK, not a valley. Long skinny rectangles waste fence on length; the square wastes nothing.",
        result: '5 × 5 square, 25 m² — the max',
      },
    ],
    answer: 'The 5 × 5 square, area 25 m²',
  },

  yourTurn: [
    {
      id: 'mm1',
      context: 'Confidence builder — solve for the flat spot.',
      prompt: 'A′(x) = 6 − 2x. Where is the flat spot (A′ = 0)?',
      type: 'number',
      answer: 3,
      hint: 'Set 6 − 2x = 0, so 2x = 6. One-step equation.',
    },
    {
      id: 'mm2',
      context: 'The core fact, straight up.',
      prompt: 'At the exact top of a hill, the derivative equals?',
      type: 'number',
      answer: 0,
      hint: 'The ground under your boots at the summit: how tilted is it?',
    },
    {
      id: 'mm3',
      context: 'A twist — rerun the garden with more fence.',
      prompt: 'Same garden problem with 40 m of fence: best side length?',
      type: 'number',
      answer: 10,
      hint: 'Half of 40 is 20, so A(x) = x(20 − x) = 20x − x², and A′(x) = 20 − 2x. Set it to 0.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'At a maximum or a minimum of a smooth function, the derivative is...',
      choices: ['0', '1', 'Undefined', 'Equal to the max value itself'],
      answer: 0,
      why: 'Right — peaks and valleys are flat spots. The tangent line lies perfectly horizontal there: slope 0.',
      reExplain: {
        analogy: 'The ball at the top of its throw.',
        text: 'Toss a ball straight up. It rises, slows, and for one instant at the very top its speed is exactly zero — then it falls. Height was still changing before and after, but AT the peak, the rate of change is 0. Every max and min works like that frozen instant: the function stops climbing before it starts dropping, and the derivative reads 0 at the handoff.',
      },
    },
    {
      id: 'c2',
      question: 'The optimization recipe, in order:',
      choices: [
        'Set the function itself to zero and solve',
        'Differentiate, set the derivative to zero, solve',
        'Graph it and eyeball the highest pixel',
        'Plug in numbers until one looks big',
      ],
      answer: 1,
      why: "Exactly. Derivative first, THEN set to zero — setting f itself to zero finds where the graph crosses the axis, not where it peaks.",
      reExplain: {
        analogy: 'Ask the tilt, not the height.',
        text: "Hunting a summit in fog, an altimeter (the function's value) can't tell you you've arrived — but a level laid on the ground can: flat means summit. Setting f(x) = 0 asks 'where is my altitude zero?' — sea level, not the peak. Setting f′(x) = 0 asks 'where is the ground flat?' — and that's where the best value hides.",
      },
    },
    {
      id: 'c3',
      question: 'A′(x) = 8 − 2x gives a flat spot at x = 4. The area formula A(x) = 8x − x² is a parabola opening DOWNWARD, so that flat spot is...',
      choices: ['A valley (minimum)', 'A peak (maximum)', 'An x-intercept', 'Impossible to classify'],
      answer: 1,
      why: 'Clean. Downward parabola = frown shape = the flat spot sits on top. (An upward, smiling parabola would make it a valley.)',
      reExplain: {
        analogy: 'Frown or smile.',
        text: 'From quadratics: a negative x² term flips the parabola into a frown ∩, and a frown wears its flat spot as a crown — a maximum. A positive x² term makes a smile ∪, whose flat spot is the bottom of the bowl — a minimum. Same equation-solving either way; the sign on x² tells you whether you found a peak or a valley.',
      },
    },
    {
      id: 'c4',
      question: 'With 12 m of fence, the maximum-area rectangle is...',
      choices: ['1 × 5 (area 5)', '2 × 4 (area 8)', '3 × 3 (area 9)', 'They all enclose the same area'],
      answer: 2,
      why: "That's the one. Sides x and 6 − x, A′(x) = 6 − 2x = 0 at x = 3: the square again. Same fence, most garden.",
      reExplain: {
        analogy: 'No wasted stretch.',
        text: 'A long skinny rectangle spends almost all its fence on two long walls that hug a sliver of ground — length hogging, width starving. Balance the sides and every meter of fence pulls equal weight. The calculus confirms the intuition: for any perimeter, the flat spot lands exactly where length = width. The answer to the fence problem is always a square.',
      },
    },
    {
      id: 'c5',
      question: 'Which of these is a real optimization problem — differentiate, set to zero, solve?',
      choices: [
        'Finding the price that maximizes a company\'s profit',
        'Adding up a column of expenses',
        'Sorting salaries to find the median',
        'Converting miles to kilometers',
      ],
      answer: 0,
      why: 'Locked in. "The price that maximizes profit" is a peak hunt: profit as a function of price, flat spot wanted. The others are arithmetic, not optimization.',
      reExplain: {
        analogy: 'The word "best" is the tell.',
        text: 'Optimization problems always smell the same: BIGGEST area, CHEAPEST route, STRONGEST beam, MOST profit. Any time a quantity depends on a choice and you want the best choice, you\'re standing at the base of a hill — write the function, differentiate, set to 0. Adding, sorting, converting: no hill, no summit, no calculus needed.',
      },
    },
  ],
}
