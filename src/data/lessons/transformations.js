// Pre-Calculus · Lesson 2 — Transforming Graphs: Shift, Flip, Stretch
export default {
  id: 'transformations',
  subjectId: 'pre-calculus',
  order: 2,
  title: 'Transforming Graphs: Shift, Flip, Stretch',
  icon: '🎛️',
  estMinutes: 11,
  tagline: 'One parent graph, four knobs: up, over, steeper, upside-down.',
  prereqs: ['functions', 'quadratics'],

  plainIdea:
    'Once you know one graph — like the U-shape of y = x² — small edits to its formula move, flip, or stretch that same shape around the plane. Add outside the rule and it slides up; subtract inside the parentheses and it slides sideways. Learn the four knobs once and you can read thousands of graphs on sight.',

  vocab: [
    {
      term: 'parent function',
      means: 'The plainest version of a graph family — for parabolas it\'s y = x², the U sitting at (0,0). Every fancier version is this one, relocated.',
    },
    {
      term: 'shift (translation)',
      means: 'Sliding the whole graph without changing its shape — up/down or left/right. Same U, new address.',
    },
    {
      term: 'stretch',
      means: 'Multiplying the rule by a number, which makes the graph steeper (skinnier U) or flatter (wider U).',
    },
    {
      term: 'vertex',
      means: 'The turning point of a parabola — the bottom of the U (or the top, if it\'s flipped). In y = (x − h)² + k, it sits at (h, k).',
    },
  ],

  hook: "Video game designers don't redraw a character for every spot on the screen — they draw it ONCE, then slide, flip, and scale that one sprite everywhere. Math graphs work the same way. You already own the sprite (the parabola from quadratics). Today you get the controller.",

  analogy: {
    analogy:
      "Think of the parent graph y = x² as a rubber-stamp of a U-shape, and the formula as the instructions for where and how to stamp it. Adding a number OUTSIDE the squaring is like lifting your stamp higher on the page — the whole U rides up. Tinkering INSIDE the parentheses slides the stamp sideways. Pressing harder (multiplying) stretches the U tall and skinny, and flipping the stamp over prints the U upside-down. One stamp, infinite placements.",
    bridge:
      "In symbols, each knob has an exact effect: y = x² + 3 lifts every output by 3 — the U slides UP 3. y = (x − 2)² slides RIGHT 2 (careful: minus inside means right — the trap we'll defuse in a moment). y = 2x² doubles every output, so the U grows steeper and skinnier. y = −x² flips every output negative: the U opens downward. Stack them and you can read the vertex straight off the formula: y = (x − h)² + k is the parent U parked at (h, k).",
  },

  worked: {
    problem: 'Describe y = (x − 2)² + 3 compared to the parent y = x², and give its vertex.',
    steps: [
      {
        label: 'Start from the parent',
        do: 'y = x² is the basic U from the quadratics lesson: vertex at (0, 0), opening upward.',
        why: 'Transformations are always a comparison — you need the "before" photo. Every piece of the new formula is an instruction applied to this U.',
        result: 'parent: U with vertex (0, 0)',
      },
      {
        label: 'Read the −2 INSIDE the parentheses',
        do: 'The (x − 2) shifts the graph RIGHT 2 — yes, minus means right.',
        why: 'Here\'s the trap defused: the vertex lives where the inside equals zero, and x − 2 = 0 when x = +2. The lowest point of the U — squaring can never go below zero — moved to x = 2. Inside changes work on the INPUT, and they always move opposite to the sign you see.',
        result: 'shift right 2',
      },
      {
        label: 'Read the +3 OUTSIDE',
        do: 'The + 3 shifts the graph UP 3.',
        why: 'Outside changes act on the OUTPUT — the machine from the functions lesson runs as usual, then 3 gets added to whatever comes out. Every point rises 3. Outside is plain and honest: plus means up, no tricks.',
        result: 'shift up 3',
      },
      {
        label: 'Land the vertex',
        do: 'The parent vertex (0, 0) rode right 2 and up 3: it now sits at (2, 3). No multiplying, no minus out front, so it\'s the same-width U, still opening upward.',
        why: 'Check it: at x = 2, y = (2 − 2)² + 3 = 0 + 3 = 3 ✓ — and any other x makes the squared part positive, so 3 is the minimum. Same U shape, new home.',
        result: 'vertex (2, 3)',
      },
    ],
    answer: 'Shifted right 2 and up 3; vertex at (2, 3)',
  },

  yourTurn: [
    {
      id: 'g1',
      context: 'Confidence builder — the honest outside knob.',
      prompt: 'y = x² + 5 shifts the parent parabola UP by how much?',
      type: 'number',
      answer: 5,
      hint: 'Outside the squaring, plus means up — exactly what it says. Every output gains 5.',
    },
    {
      id: 'g2',
      context: 'The sneaky inside knob.',
      prompt: 'The vertex of y = (x − 4)² + 1 has what x-coordinate?',
      type: 'number',
      answer: 4,
      hint: 'The vertex sits where the inside becomes zero: solve x − 4 = 0.',
    },
    {
      id: 'g3',
      context: 'A twist — run the transformed machine.',
      prompt: 'For y = x² − 3, what is y when x = 2?',
      type: 'number',
      answer: 1,
      hint: 'Square first, then apply the shift: 2² − 3. (Functions lesson: follow the rule in order.)',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'Compared to y = x², the graph of y = x² + 7 is...',
      choices: [
        'Shifted right 7',
        'Shifted up 7',
        'Shifted down 7',
        'Seven times steeper',
      ],
      answer: 1,
      why: 'Right — a number added OUTSIDE the squaring lifts every output by 7. Whole U up 7, shape untouched.',
      reExplain: {
        analogy: 'The elevator.',
        text: 'The +7 outside is an elevator ride: the machine computes x² as always, then the elevator raises the result 7 floors. Every point on the U goes up together — the shape can\'t change because every rider took the same trip. Sideways moves need to tamper with the INPUT, and that only happens inside the parentheses.',
      },
    },
    {
      id: 'c2',
      question: 'Compared to y = x², the graph of y = (x − 5)² is shifted...',
      choices: ['Left 5', 'Down 5', 'Right 5', 'Up 5'],
      answer: 2,
      why: "That's the one. Minus inside means RIGHT — the vertex moves to where x − 5 = 0, which is x = +5.",
      reExplain: {
        analogy: 'The party moved.',
        text: 'The parent U throws its big moment (the vertex) where the inside hits zero. It used to be at x = 0; now the invitation reads x − 5 = 0, so the party relocated to x = 5 — five blocks RIGHT. Inside changes always feel backwards because they say "to get the old result, bring me a bigger x." Don\'t trust the sign; solve the inside = 0.',
      },
    },
    {
      id: 'c3',
      question: 'Compared to y = x², the graph of y = 3x² is...',
      choices: [
        'Shifted up 3',
        'Wider and flatter',
        'Shifted right 3',
        'Steeper and skinnier',
      ],
      answer: 3,
      why: 'Exactly. Multiplying by 3 triples every output: at x = 2 the parent gives 4, this one gives 12. The U shoots up faster — skinnier.',
      reExplain: {
        analogy: 'The volume knob.',
        text: 'Multiplying outside is a volume knob on the outputs. Crank it to 3 and every height triples — small heights become medium, medium become huge, so the walls of the U steepen dramatically. (Between 0 and 1, the knob turns DOWN: y = ½x² is a wide, lazy U.) No sliding either way — the vertex, at height 0, is the one point 3 × 0 can\'t move.',
      },
    },
    {
      id: 'c4',
      question: 'What does the minus sign do in y = −x²?',
      choices: [
        'Shifts the graph down 1',
        'Flips the U upside down (opens downward)',
        'Shifts the graph left 1',
        'Makes the U skinnier',
      ],
      answer: 1,
      why: 'Clean. Every output gets its sign flipped: heights become depths. The U becomes a frown, peaking at (0, 0).',
      reExplain: {
        analogy: 'The mountain in the lake.',
        text: 'Picture the parent U as a valley and the x-axis as the waterline. The minus out front swaps every height for its mirror-depth: the point (2, 4) reflects to (2, −4). The whole valley becomes its upside-down reflection — a mountain. Nothing slid and nothing stretched; every point just traded sides of the waterline.',
      },
    },
    {
      id: 'c5',
      question: 'The vertex of y = (x − 1)² + 4 is at...',
      choices: ['(−1, 4)', '(1, −4)', '(1, 4)', '(4, 1)'],
      answer: 2,
      why: 'Locked in. Inside: x − 1 = 0 at x = 1 (right 1). Outside: +4 (up 4). Vertex (1, 4).',
      reExplain: {
        analogy: 'Street address, then floor number.',
        text: 'Read y = (x − h)² + k like a delivery label: the inside gives the street (set x − 1 = 0, so street x = 1 — flip that inside sign!), and the outside gives the floor (+4, taken at face value). One sneaky coordinate, one honest one: (1, 4). Sanity check: plug in x = 1 and you get y = 0 + 4 = 4, the lowest the graph ever goes.',
      },
    },
  ],
}
