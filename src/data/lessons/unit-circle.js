// Trigonometry · Lesson 1 — The Unit Circle
export default {
  id: 'unit-circle',
  subjectId: 'trigonometry',
  order: 2,
  title: 'The Unit Circle',
  icon: '🎡',
  estMinutes: 12,
  tagline: 'One circle, radius 1. All of trig lives on it.',
  prereqs: ['right-triangle-trig', 'slope-intercept'],

  plainIdea:
    'The unit circle is a circle of radius 1 drawn around the point (0,0). Imagine a point walking counterclockwise around its edge — describing WHERE that point is, using angles and coordinates, is what trigonometry actually is.',

  vocab: [
    {
      term: 'unit circle',
      means: 'A circle with radius exactly 1, centered at (0,0) on the coordinate plane. "Unit" just means "one."',
    },
    {
      term: 'radius',
      means: 'The distance from the circle\'s center to its edge. On the unit circle, always 1.',
    },
    {
      term: 'angle',
      means: 'How far around the circle you\'ve rotated, measured in degrees. 0° is the 3 o\'clock position; you walk counterclockwise.',
    },
    {
      term: 'coordinates (x, y)',
      means: 'The address of the walking point: x is how far right/left of center, y is how far above/below.',
    },
  ],

  hook: "Every video game character that walks in a circle, every clock hand, every planet in orbit, every Ferris wheel cabin — a computer is tracking its position with the same tool: one humble circle of radius 1. Learn this single picture and ALL of trigonometry becomes 'just read the coordinates.'",

  analogy: {
    analogy:
      "You board a Ferris wheel whose radius is exactly 1 (one what? doesn't matter — one radius). The wheel's axle is the center point (0,0). Your cabin's position at any moment can be fully described by ONE number: the angle you've rotated from the boarding platform, which sits at 3 o'clock. A quarter of a lap is 90°, half a lap is 180°, a full lap brings you home at 360°. Given the angle, your exact (x, y) position — how far right of the axle, how far above it — is completely determined.",
    bridge:
      "On paper: the unit circle is centered at (0,0), and the walking point starts at (1, 0) — the 3 o'clock spot, angle 0°. Rotate counterclockwise: at 90° you're at the top, (0, 1). At 180°, the far left: (−1, 0). At 270°, the bottom: (0, −1). And here's your old friend Pythagoras: EVERY point (x, y) on this circle satisfies x² + y² = 1, because x and y are the legs of a right triangle whose hypotenuse is the radius, 1. That one equation IS the circle.",
  },

  worked: {
    problem: 'A point walks counterclockwise around the unit circle starting at 0°. Find its coordinates at 0°, 90°, 180°, and 270°.',
    steps: [
      {
        label: 'Start at the boarding platform (0°)',
        do: 'At 0°, the point sits on the positive x-axis, one radius from the center: (1, 0).',
        why: 'No rotation yet — it\'s exactly 1 unit right of the center and 0 units up. Remember this starting point; every angle is measured from here.',
        result: '0° → (1, 0)',
      },
      {
        label: 'Quarter lap (90°)',
        do: 'A quarter turn counterclockwise puts the point at the very top of the circle: (0, 1).',
        why: 'Now it\'s directly above the center: 0 units sideways, 1 unit up. Notice the coordinates traded places as the point swung around.',
        result: '90° → (0, 1)',
      },
      {
        label: 'Half lap (180°)',
        do: 'Halfway around lands on the far-left edge: (−1, 0).',
        why: 'Directly LEFT of the center now — that\'s a negative x (number-line thinking: left of zero!) and height 0.',
        result: '180° → (−1, 0)',
      },
      {
        label: 'Three-quarter lap (270°), and the safety check',
        do: 'At 270° the point hangs at the bottom: (0, −1). Check any of these with x² + y² : e.g. 0² + (−1)² = 1 ✓.',
        why: 'Below center → negative y. And every stop passes the Pythagoras test x² + y² = 1, because the point never leaves the radius-1 circle. If a point fails that test, it\'s not on the circle — period.',
        result: '270° → (0, −1), all satisfy x² + y² = 1',
      },
    ],
    answer: '(1,0) → (0,1) → (−1,0) → (0,−1), one quarter-lap apart',
  },

  yourTurn: [
    {
      id: 'u1',
      context: 'Confidence builder — read the compass.',
      prompt: 'At 180°, what is the x-coordinate of the point on the unit circle? (Include the sign.)',
      type: 'number',
      answer: -1,
      hint: 'Half a lap from (1, 0) puts you on the far LEFT of the circle. Left of center means negative x.',
    },
    {
      id: 'u2',
      context: 'Same skill, other coordinate.',
      prompt: 'At 90°, what is the y-coordinate of the point?',
      type: 'number',
      answer: 1,
      hint: 'A quarter lap counterclockwise is the TOP of the circle — one full radius above center.',
    },
    {
      id: 'u3',
      context: 'A twist — the Pythagoras membership test.',
      prompt: 'The point (0.6, 0.8) claims to be on the unit circle. Compute 0.6² + 0.8² to check its ID. What do you get?',
      type: 'number',
      answer: 1,
      hint: '0.36 + 0.64 = ? If it equals 1, the point is a legitimate resident of the circle.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The radius of the unit circle is...',
      choices: ['0', '1', '2', 'Whatever you want'],
      answer: 1,
      why: 'Right — "unit" means one. Radius 1, centered at (0,0). That simplicity is the whole point.',
      reExplain: {
        analogy: 'The metric ruler of circles.',
        text: 'We pick radius 1 for the same reason rulers mark a "1": it\'s the cleanest reference. Any real circle (a Ferris wheel, an orbit) is just the unit circle scaled up — so we study the radius-1 version once and multiply later.',
      },
    },
    {
      id: 'c2',
      question: 'Where do angles start, and which way do they grow?',
      choices: [
        'At the top, clockwise',
        'At the 3 o\'clock position, counterclockwise',
        'At the bottom, clockwise',
        'Anywhere you like',
      ],
      answer: 1,
      why: 'Exactly. 0° is the point (1, 0) — 3 o\'clock — and positive angles rotate counterclockwise.',
      reExplain: {
        analogy: 'The agreed starting line.',
        text: 'Like runners starting a race from the same line, all of math agrees: begin at (1, 0) and walk counterclockwise. It\'s a convention — but ONE convention means sin(90°) is the same number in every book, app, and calculator ever made.',
      },
    },
    {
      id: 'c3',
      question: 'At 270°, the walking point is at...',
      choices: ['(0, 1)', '(−1, 0)', '(0, −1)', '(1, 0)'],
      answer: 2,
      why: "That's the one. Three quarter-laps: right → top → left → BOTTOM. Below center means y = −1.",
      reExplain: {
        analogy: 'Walk it like a clock (in reverse).',
        text: 'Count quarter-laps counterclockwise from 3 o\'clock: 90° is 12 o\'clock (0,1), 180° is 9 o\'clock (−1,0), 270° is 6 o\'clock — straight DOWN from the center, at (0, −1). Hanging below the axle: no sideways offset, one radius down.',
      },
    },
    {
      id: 'c4',
      question: 'Every point (x, y) on the unit circle satisfies...',
      choices: ['x + y = 1', 'x² + y² = 1', 'x × y = 1', 'x − y = 0'],
      answer: 1,
      why: 'Locked in. x and y are the legs, the radius (1) is the hypotenuse: Pythagoras gives x² + y² = 1².',
      reExplain: {
        analogy: 'The membership card.',
        text: 'Drop a vertical line from any point on the circle to the x-axis: you\'ve drawn a right triangle with legs x and y and hypotenuse = radius = 1. Pythagoras (a² + b² = c²) becomes x² + y² = 1. Any point that fails this test is off the circle; any point that passes is on it. It\'s the circle\'s ID check.',
      },
    },
    {
      id: 'c5',
      question: 'One full lap around the circle is...',
      choices: ['90°', '180°', '270°', '360°'],
      answer: 3,
      why: 'Clean. Four quarter-turns of 90° each: 360° brings you back to (1, 0), good as new.',
      reExplain: {
        analogy: 'The world\'s oldest pie chart.',
        text: 'Ancient astronomers split the circle into 360 slices (they liked 360 — it divides evenly by 2, 3, 4, 5, 6, 8, 9, 10, 12…). Go 360 slices and you\'ve eaten the whole pie: you\'re back where you started. 361° is just 1° into your second lap.',
      },
    },
  ],
}
