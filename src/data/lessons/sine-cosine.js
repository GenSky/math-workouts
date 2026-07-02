// Trigonometry · Lesson 2 — Sine & Cosine
export default {
  id: 'sine-cosine',
  subjectId: 'trigonometry',
  order: 3,
  title: 'Sine & Cosine: The Coordinates',
  icon: '🌊',
  estMinutes: 12,
  tagline: 'sin and cos are just the y and x of the walking point. That\'s it.',
  prereqs: ['unit-circle'],

  plainIdea:
    'Sine and cosine sound mysterious, but they\'re just names for the coordinates of the point walking the unit circle: cosine is its x (how far right/left), sine is its y (how high/low). Every value of sin and cos ever computed is someone reading a coordinate off that circle.',

  vocab: [
    {
      term: 'cosine (cos)',
      means: 'The x-coordinate of the unit-circle point at a given angle. cos(0°) = 1 because the point starts at (1, 0).',
    },
    {
      term: 'sine (sin)',
      means: 'The y-coordinate of that same point. sin(90°) = 1 because at 90° the point is at the top, (0, 1).',
    },
    {
      term: 'wave',
      means: 'What you get if you graph sine (or cosine) over time: an endless smooth up-down curve. Sound, light, tides — all waves.',
    },
  ],

  hook: "Ride the Ferris wheel again, but this time only track your HEIGHT as the wheel turns. Up… peak… down… bottom… up again. Plot that height against time and you draw a perfect endless wave. That wave is the sine function — and it's literally the shape of every musical note your ears have ever heard.",

  analogy: {
    analogy:
      "The point walking the unit circle casts two shadows. A lamp overhead throws its shadow onto the floor (the x-axis) — that floor shadow slides left and right as the point circles. A lamp from the side throws a shadow onto the wall (the y-axis) — that wall shadow slides up and down. The floor shadow's position is COSINE. The wall shadow's position is SINE. Two shadows of one circular walk — no triangles harmed, no mystery involved.",
    bridge:
      "Formally: for a point at angle θ on the unit circle, its coordinates are (cos θ, sin θ). Read the milestones straight off last lesson's map — 0°: point at (1, 0), so cos 0° = 1, sin 0° = 0. 90°: point at (0, 1), so cos 90° = 0, sin 90° = 1. 180°: (−1, 0) → cos = −1, sin = 0. And since every circle point obeys x² + y² = 1, you get the most famous identity in trig for free: sin²θ + cos²θ = 1. It's just Pythagoras wearing a trig costume.",
  },

  worked: {
    problem: 'Without a calculator, find sin and cos at 0°, 90°, and 180°.',
    steps: [
      {
        label: 'Set up the reading rule',
        do: 'At any angle θ, the point sits at (cos θ, sin θ). Cosine first (x), sine second (y).',
        why: "This is the entire method: don't compute anything — just find where the point IS and read its address. Memory hook: 'cos' and 'x' both come before 'sin' and 'y' — alphabetical order.",
        result: 'point = (cos θ, sin θ)',
      },
      {
        label: 'Read 0°',
        do: 'At 0° the point is at (1, 0). So cos 0° = 1 and sin 0° = 0.',
        why: 'Starting position: fully right (x = 1), zero height (y = 0). Cosine maxed out, sine flat.',
        result: 'cos 0° = 1, sin 0° = 0',
      },
      {
        label: 'Read 90°',
        do: 'At 90° the point is at the top: (0, 1). So cos 90° = 0 and sin 90° = 1.',
        why: 'Straight above the center: zero sideways (x = 0), full height (y = 1). The values traded places — as one coordinate grows along the circle, the other shrinks.',
        result: 'cos 90° = 0, sin 90° = 1',
      },
      {
        label: 'Read 180°, then pocket the free identity',
        do: 'At 180°: (−1, 0). So cos 180° = −1, sin 180° = 0. And check: (−1)² + 0² = 1.',
        why: "Far-left edge: cosine goes NEGATIVE (left of center — number-line thinking), sine back to zero. That final check is sin² + cos² = 1, true at every single angle, because the point never leaves the unit circle.",
        result: 'cos 180° = −1, sin 180° = 0',
      },
    ],
    answer: '(cos, sin): 0° → (1, 0) · 90° → (0, 1) · 180° → (−1, 0)',
  },

  yourTurn: [
    {
      id: 't1',
      context: 'Confidence builder — read the starting point.',
      prompt: 'What is sin(0°)?',
      type: 'number',
      answer: 0,
      hint: 'At 0° the point is at (1, 0). Sine is the y-coordinate — the height.',
    },
    {
      id: 't2',
      context: 'Half a lap around — watch the sign.',
      prompt: 'What is cos(180°)? (Include the sign.)',
      type: 'number',
      answer: -1,
      hint: 'At 180° the point is on the far LEFT: (−1, 0). Cosine is the x-coordinate.',
    },
    {
      id: 't3',
      context: 'A twist — a real height between the milestones.',
      prompt: 'It turns out sin(30°) = 0.5 exactly. On a unit-radius Ferris wheel, how high above the axle is your cabin at 30°?',
      type: 'number',
      answer: 0.5,
      hint: 'Sine IS the height above center. No conversion needed — that\'s the whole beauty of it.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'On the unit circle, cosine is...',
      choices: ['The y-coordinate', 'The x-coordinate', 'The angle itself', 'The radius'],
      answer: 1,
      why: 'Right — cos is the x: how far right (positive) or left (negative) of center the point sits.',
      reExplain: {
        analogy: 'The floor shadow.',
        text: 'Lamp above, shadow on the floor: as the point circles, its floor shadow slides along the x-axis. Cosine is where that shadow is. Alphabet trick: c before s, x before y — cos↔x, sin↔y.',
      },
    },
    {
      id: 'c2',
      question: 'sin(90°) = ?',
      choices: ['0', '1', '−1', '0.5'],
      answer: 1,
      why: 'Clean. At 90° the point is at the very top, (0, 1). Sine reads the y: 1 — the maximum sine can ever be.',
      reExplain: {
        analogy: 'Top of the Ferris wheel.',
        text: 'A quarter-lap in, your cabin is at the wheel\'s peak — one full radius above the axle. Height = 1, and sine IS that height. (This is also why sine can never exceed 1: you can\'t be higher than the top of the wheel.)',
      },
    },
    {
      id: 'c3',
      question: 'Why is sin²θ + cos²θ = 1 true at EVERY angle?',
      choices: [
        'Lucky coincidence',
        'Because (cos θ, sin θ) is on the unit circle, and Pythagoras says x² + y² = 1 there',
        'It only works for special angles',
        'It isn\'t always true',
      ],
      answer: 1,
      why: 'Exactly. The identity is x² + y² = 1 with the coordinates renamed. Pythagoras in a trench coat.',
      reExplain: {
        analogy: 'Same rule, new nametags.',
        text: 'Last lesson: every unit-circle point passes the test x² + y² = 1 (legs x and y, hypotenuse 1). This lesson renamed x to cos θ and y to sin θ. Swap the nametags into the old rule and you get sin²θ + cos²θ = 1. Nothing new happened — that\'s why it never fails.',
      },
    },
    {
      id: 'c4',
      question: 'Just past 180°, the point dips below the x-axis. What happens to sine there?',
      choices: ['It turns positive', 'It turns negative', 'It stays zero forever', 'It becomes undefined'],
      answer: 1,
      why: "That's the one. Below the axis means negative height — sine goes negative for the whole bottom half of the lap.",
      reExplain: {
        analogy: 'Below the waterline.',
        text: 'Think of the x-axis as the water\'s surface and sine as your height relative to it. For angles 0°–180° you\'re above water (sine positive); from 180° to 360° you\'re submerged (sine negative). At exactly 180° and 360° you\'re AT the surface: sine = 0.',
      },
    },
    {
      id: 'c5',
      question: 'If you graph sin θ as θ keeps growing, the picture looks like...',
      choices: ['A straight line', 'A U-shaped parabola', 'An endless smooth wave', 'A staircase'],
      answer: 2,
      why: 'Locked in. Around and around the circle, the height rises and falls forever: a wave.',
      reExplain: {
        analogy: 'The Ferris wheel diary.',
        text: 'Write down your height every second for ten laps and plot it: up to the peak, down through center, bottom, back up — repeating identically every lap (every 360°). That endless repeating curve is the sine wave, and it\'s the shape of sound, tides, alternating current, and heartbeat monitors.',
      },
    },
  ],
}
