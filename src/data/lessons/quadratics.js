// Algebra II · Lesson 2 — Quadratics & Parabolas
export default {
  id: 'quadratics',
  subjectId: 'algebra-2',
  order: 2,
  title: 'Quadratics: The Curve That Bites Back',
  icon: '🏀',
  estMinutes: 12,
  tagline: 'x² enters the chat, and straight lines become arcs.',
  prereqs: ['exponents', 'slope-intercept'],

  plainIdea:
    'A quadratic is an equation with an x² in it. Its graph is a U-shaped curve called a parabola — the exact shape of every thrown ball\'s flight. And because squaring erases minus signs, quadratics usually have TWO answers.',

  vocab: [
    {
      term: 'quadratic',
      means: 'An equation or expression whose biggest power of x is x² (x squared), like y = x² + 2.',
    },
    {
      term: 'parabola',
      means: 'The U-shaped (or upside-down-U) curve you get when you graph a quadratic.',
    },
    {
      term: 'vertex',
      means: 'The turning point of the parabola — the very bottom of the U, or the very top of the arc.',
    },
    {
      term: 'roots (or solutions)',
      means: 'The x-values that make the quadratic equal zero — where the curve crosses the x-axis.',
    },
  ],

  hook: "Watch any basketball shot in slow motion. Up… slowing… a weightless pause at the top… then down, faster and faster. That arc isn't random — it's a parabola, and every single thrown object in the universe flies along one. The equation behind it has an x² in it, and that little ² changes everything.",

  analogy: {
    analogy:
      "A line (last chapter's y = mx + b) is a treadmill: same climb rate forever. A quadratic is a thrown ball: it rises, levels off, TURNS, and comes back down. That turn is what x² buys you — lines can't turn around, parabolas can. The turning point is called the vertex, and the arc is perfectly symmetric: the way down mirrors the way up.",
    bridge:
      "In symbols, a quadratic looks like y = x² or y = x² + 2 or the general y = ax² + bx + c. The other superpower of x²: squaring destroys minus signs (3² = 9, and (−3)² = 9 too). So when you ask 'what x makes x² = 9?', there are TWO honest answers: 3 and −3. Quadratics almost always have two solutions — that's the curve crossing the axis in two places.",
  },

  worked: {
    problem: 'Solve for x:  x² − 9 = 0',
    steps: [
      {
        label: 'Isolate the x² (balance scale, like always)',
        do: 'Add 9 to both sides:  x² = 9.',
        why: 'Same golden rule as one-step equations — whatever you do to one side, do to the other. Now the question is bare: what number squares to 9?',
        result: 'x² = 9',
      },
      {
        label: 'Find the obvious answer',
        do: '3 × 3 = 9, so x = 3 works.',
        why: 'Undoing a square means asking "what multiplied by itself gives this?" — that\'s the square root. √9 = 3.',
        result: 'x = 3 ✓',
      },
      {
        label: 'Find the answer everyone forgets',
        do: '(−3) × (−3) = 9 too. So x = −3 also works.',
        why: 'A negative times a negative is positive, so squaring wipes out minus signs. The equation can\'t tell 3 and −3 apart — both are true solutions.',
        result: 'x = −3 ✓',
      },
      {
        label: 'Check both, state both',
        do: '3² − 9 = 0 ✓ and (−3)² − 9 = 0 ✓. Answer: x = 3 or x = −3.',
        why: 'On the graph, the parabola y = x² − 9 dips below the axis and crosses it TWICE — at −3 and 3. Two crossings, two roots. Writing only x = 3 is half an answer.',
        result: 'x = 3 or x = −3',
      },
    ],
    answer: 'x = 3 or x = −3 (two solutions!)',
  },

  yourTurn: [
    {
      id: 'q1',
      context: 'Confidence builder — feed the machine.',
      prompt: 'For y = x², what is y when x = 4?',
      type: 'number',
      answer: 16,
      hint: 'Square it: 4 × 4.',
    },
    {
      id: 'q2',
      context: 'The answer everyone forgets.',
      prompt: 'x² = 25 has two solutions. One is 5. What is the other? (Include the minus sign.)',
      type: 'number',
      answer: -5,
      hint: 'What OTHER number times itself gives 25? Remember: negative × negative = positive.',
    },
    {
      id: 'q3',
      context: 'A twist — squaring a negative input.',
      prompt: 'For y = x² + 2, what is y when x = −3?',
      type: 'number',
      answer: 11,
      hint: 'Square first (order of operations!): (−3)² = 9. Then add 2.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The graph of a quadratic is called a...',
      choices: ['Line', 'Circle', 'Parabola', 'Triangle'],
      answer: 2,
      why: 'Right — the U-shaped curve is a parabola, the signature of x².',
      reExplain: {
        analogy: 'Water from a fountain.',
        text: 'Watch a fountain jet or a garden hose arc: up, over, down in a perfect symmetric curve. Physics draws that shape because gravity works on the square of time — it\'s a parabola. Any equation with x² as its biggest power draws the same family of curve.',
      },
    },
    {
      id: 'c2',
      question: 'What makes an equation "quadratic"?',
      choices: [
        'It contains an x',
        'Its highest power of x is x²',
        'It has an equals sign',
        'It has two numbers in it',
      ],
      answer: 1,
      why: 'Exactly. The x² term is the defining feature — "quad" comes from the Latin for square.',
      reExplain: {
        analogy: 'The engine defines the car.',
        text: 'y = 3x + 1 has an x, but its biggest power is x¹ — that\'s a line (linear). Put an x² under the hood — y = x² + 3x + 1 — and the whole behavior changes: it can turn around. The highest power is the engine, and x² makes it quadratic.',
      },
    },
    {
      id: 'c3',
      question: 'x² = 49. What are the solutions?',
      choices: ['Only 7', 'Only −7', 'Both 7 and −7', 'No solution'],
      answer: 2,
      why: "That's the one. 7² = 49 and (−7)² = 49. Two answers, always report both.",
      reExplain: {
        analogy: 'Two roads to the same town.',
        text: 'Squaring is a road that merges: 7 and −7 both drive into 49, because a negative times itself turns positive. So when you reverse the trip and ask "who could have arrived at 49?", you must name BOTH travelers: x = 7 or x = −7.',
      },
    },
    {
      id: 'c4',
      question: "A ball's height over time follows a parabola. The vertex of that parabola is...",
      choices: [
        'The launch point',
        'The highest point, where it turns around',
        'Where it hits the ground',
        'The hoop',
      ],
      answer: 1,
      why: 'Clean. The vertex is the turnaround — the peak of the flight, where rising becomes falling.',
      reExplain: {
        analogy: 'The weightless moment.',
        text: "Toss your keys straight up and watch: there's one instant at the top where they hang, moving neither up nor down. That's the vertex — the turning point of the U. Everything before it mirrors everything after it.",
      },
    },
    {
      id: 'c5',
      question: 'For y = x², what is y when x = −3?',
      choices: ['−9', '9', '−6', '6'],
      answer: 1,
      why: 'Locked in. (−3)² = (−3)(−3) = +9. Squaring annihilates the minus sign.',
      reExplain: {
        analogy: 'Two lefts make a right... er, a positive.',
        text: 'Squaring −3 means (−3) × (−3). Negative times negative is positive, so the answer is +9, not −9. This is why a parabola is a U: inputs on the left (negative x) produce the same heights as inputs on the right. −9 would mean the curve dips for negatives — it doesn\'t.',
      },
    },
  ],
}
