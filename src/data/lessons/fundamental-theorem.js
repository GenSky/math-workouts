// Calculus II · Lesson 2 — The Fundamental Theorem of Calculus
export default {
  id: 'fundamental-theorem',
  subjectId: 'calculus-2',
  order: 2,
  title: 'The Fundamental Theorem: Calculus, United',
  icon: '🌉',
  estMinutes: 12,
  tagline: 'Areas without slicing: run the power rule in reverse and subtract.',
  prereqs: ['integrals', 'power-rule'],

  plainIdea:
    'To find the exact area under a curve, you don\'t have to add infinite slices — just find a function whose derivative is your curve (an antiderivative), plug in both endpoints, and subtract. Derivatives and integrals turn out to be the same road driven in opposite directions.',

  vocab: [
    {
      term: 'antiderivative',
      means: 'A function whose derivative is the one you started with. x² is an antiderivative of 2x, because (x²)′ = 2x. It\'s the power rule in reverse.',
    },
    {
      term: 'Fundamental Theorem of Calculus',
      means: 'The area under f from a to b equals the antiderivative evaluated at b minus at a: F(b) − F(a). No slicing needed.',
    },
    {
      term: 'evaluate at the endpoints',
      means: 'Plug b into the antiderivative, plug a in, subtract the second from the first. The subtraction is not optional.',
    },
    {
      term: 'inverse operations',
      means: 'Two moves that undo each other, like squaring and square-rooting. The theorem proves differentiating and integrating are such a pair.',
    },
  ],

  hook: "The integrals lesson left you with a beautiful but sweaty method: slice the area into skinny rectangles, add millions of them, take a limit. Meanwhile, over in Calc I, the power rule spits out derivatives in two seconds flat. Here's the bombshell that took humanity until Newton and Leibniz to see: those two worlds are the same world. Run the power rule BACKWARD and areas fall out of a single subtraction.",

  analogy: {
    analogy:
      "Want to know how much water flowed into a bathtub between 2:00 and 2:10? One way: watch the faucet the whole time and add up every second's trickle — that's slicing, honest and exhausting. The other way: glance at the water LEVEL at 2:00, glance again at 2:10, and subtract. Two readings, one subtraction, exact answer. The water level is the 'total so far,' and the faucet's flow is its rate of change — so the level function is precisely the thing whose derivative is the flow.",
    bridge:
      "In notation: the flow is f, the water level is the antiderivative F (a function with F′ = f), and the theorem says ∫ from a to b of f(x) dx = F(b) − F(a). Finding F is the power rule run in reverse: the derivatives lesson turned x² into 2x, so integrating 2x means asking 'what differentiates to 2x?' — answer, x². Then the whole infinite-slice sum from the integrals lesson collapses into two plug-ins and a subtraction. Calc I and Calc II were never two subjects; they're the two directions on one bridge.",
  },

  worked: {
    problem: 'Find the exact area under f(x) = 2x from x = 0 to x = 3 — twice: by geometry, and by the theorem.',
    steps: [
      {
        label: 'Road 1 — geometry first',
        do: 'The region under y = 2x from 0 to 3 is a triangle: base 3, height f(3) = 6. Area = ½ · 3 · 6 = 9.',
        why: "Pure integrals-lesson move: straight edges mean geometry can still handle it. This gives us a trusted answer to test the new method against.",
        result: 'area = 9 (triangle)',
      },
      {
        label: 'Road 2 — find an antiderivative',
        do: 'What differentiates to 2x? Reverse the power rule: x². Check: the derivative of x² is 2x ✓.',
        why: "Antiderivatives are a guess-and-check game where the check is the power rule you already own. The exponent that would 'hop down' as a 2 must have been sitting at 2 — so F(x) = x².",
        result: 'F(x) = x²',
      },
      {
        label: 'Apply the theorem',
        do: 'Area = F(3) − F(0) = 3² − 0² = 9 − 0 = 9.',
        why: 'Two bathtub-level readings and a subtraction — no slices, no limits, no sweat. F(3) is the total accumulated by x = 3; F(0) is the total at the start; the difference is what accumulated in between.',
        result: 'F(3) − F(0) = 9',
      },
      {
        label: 'Compare the roads',
        do: 'Geometry says 9. The theorem says 9. Same region, same answer.',
        why: "But here's the point: geometry only worked because the edges were straight. Make the curve wiggly — x², sin x, anything — and geometry gives up while the theorem keeps working exactly the same way. A tool that replaces infinite sums with one subtraction earns the name FUNDAMENTAL.",
        result: '9 both ways — the bridge holds',
      },
    ],
    answer: 'Area = 9, by triangle geometry AND by F(3) − F(0) = 9 − 0',
  },

  yourTurn: [
    {
      id: 'ft1',
      context: 'Confidence builder — same setup, new endpoint.',
      prompt: '∫ from 0 to 4 of 2x dx: antiderivative is x², so the answer is 4² − 0² = ?',
      type: 'number',
      answer: 16,
      hint: 'Plug in the top endpoint, plug in the bottom, subtract: 16 − 0.',
    },
    {
      id: 'ft2',
      context: 'A curvier customer — geometry can\'t touch this one.',
      prompt: '∫ from 0 to 2 of 3x² dx: antiderivative is x³. Answer?',
      type: 'number',
      answer: 8,
      hint: 'x³ at 2 minus x³ at 0: 2³ − 0³.',
    },
    {
      id: 'ft3',
      context: 'A twist — cross the bridge the other way.',
      prompt: 'The theorem says derivative and integral undo each other: the derivative of x² at x = 5 is?',
      type: 'number',
      answer: 10,
      hint: 'Power rule, forward direction this time: (x²)′ = 2x. Evaluate at 5.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'An antiderivative of f is...',
      choices: [
        'A function whose derivative is f',
        'The derivative of f',
        'The negative of f',
        'The largest value of f',
      ],
      answer: 0,
      why: 'Right — it answers "what differentiates INTO f?" x² is an antiderivative of 2x because (x²)′ = 2x.',
      reExplain: {
        analogy: 'Un-baking the cake.',
        text: 'Differentiating is baking: batter in, cake out (x² in, 2x out). An antiderivative asks the reverse question — here\'s the cake, what was the batter? You verify by re-baking: if your candidate\'s derivative gives back the original function, you found it. The power rule forward is the oven; antiderivatives are reading the recipe backward.',
      },
    },
    {
      id: 'c2',
      question: 'The Fundamental Theorem: the area under f from a to b equals...',
      choices: ['F(a) − F(b)', 'F(b) × F(a)', 'F(b) − F(a)', 'F(b) + F(a)'],
      answer: 2,
      why: 'Exactly. Antiderivative at the TOP endpoint minus at the bottom: F(b) − F(a). Order matters — b first.',
      reExplain: {
        analogy: 'Odometer readings.',
        text: 'To know how far you drove today, you don\'t log every second of speed — you read the odometer tonight and subtract this morning\'s reading. The antiderivative F is the odometer for f: it tracks "total accumulated so far." Ending total minus starting total = what happened in between. End minus start, always in that order.',
      },
    },
    {
      id: 'c3',
      question: '∫ from 0 to 1 of 2x dx = ? (antiderivative: x²)',
      choices: ['2', '1', '0', 'x²'],
      answer: 1,
      why: "Clean. 1² − 0² = 1 − 0 = 1. (Answer choice x² is the antiderivative itself — a definite integral ends as a NUMBER, not a formula.)",
      reExplain: {
        analogy: 'The recipe, in three beats.',
        text: 'Find, plug, subtract. Find the antiderivative (x²). Plug in the top endpoint (1² = 1) and the bottom (0² = 0). Subtract: 1. When both endpoints are actual numbers, the x\'s must disappear — you\'re reporting a quantity of area, like square meters of garden, not another function.',
      },
    },
    {
      id: 'c4',
      question: 'Why does this theorem deserve the name FUNDAMENTAL?',
      choices: [
        'It was the first theorem ever proved',
        'It welds derivatives and integrals into inverse operations — Calc I and Calc II become one subject',
        'It only works for straight lines',
        'It is the longest theorem in mathematics',
      ],
      answer: 1,
      why: "That's the one. Slopes and areas looked like separate universes; the theorem reveals them as opposite directions on the same road.",
      reExplain: {
        analogy: 'Two trailheads, one trail.',
        text: 'For centuries, "how steep?" (tangent problems) and "how much area?" (slicing problems) were studied by different people with different tools — two trailheads presumed to lead up different mountains. The theorem is the discovery that it\'s one trail: integrate f and differentiate the result, and you\'re back at f. Every power-rule fact instantly becomes an area fact read backward. That merger IS calculus.',
      },
    },
    {
      id: 'c5',
      question: '∫ from 1 to 3 of 2x dx = ? (antiderivative: x²)',
      choices: ['8', '9', '2', '10'],
      answer: 0,
      why: 'Locked in. F(3) − F(1) = 9 − 1 = 8. Answering 9 means you plugged in the top and forgot to subtract F(1) — the classic slip.',
      reExplain: {
        analogy: 'Don\'t bill for the whole odometer.',
        text: "A taxi fare covers the distance driven during YOUR ride — the meter reading at drop-off minus the reading at pickup. Reporting F(3) = 9 alone is billing the passenger for every mile the taxi ever drove, including before they got in. The area from 1 to 3 starts accumulating at x = 1, so the F(1) = 1 that piled up beforehand must come off: 9 − 1 = 8. Two plug-ins, one subtraction — always both.",
      },
    },
  ],
}
