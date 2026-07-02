// Trigonometry · Lesson 4 — Radians: Measuring Angles in Radius Lengths
export default {
  id: 'radians',
  subjectId: 'trigonometry',
  order: 4,
  title: 'Radians: Measuring Angles in Radius Lengths',
  icon: '🌀',
  estMinutes: 10,
  tagline: 'Measure angles by how far you WALK, in units of the radius.',
  prereqs: ['unit-circle', 'circles'],

  plainIdea:
    'A radian measures an angle by asking "how far did you walk along the circle\'s edge, counted in radius-lengths?" Walk an arc exactly one radius long and you\'ve turned 1 radian. A full lap is about 6.28 radius-lengths — that\'s where 2π comes from.',

  vocab: [
    {
      term: 'radian',
      means: 'The angle you turn when the arc you walk is exactly one radius long. It\'s a unit for angles, like degrees — just a smarter one.',
    },
    {
      term: 'arc length',
      means: 'The distance along the curved edge of the circle between two points — the path you\'d actually walk.',
    },
    {
      term: '2π (two pi)',
      means: 'About 6.28 — the number of radius-lengths in a full lap. It comes straight from circumference = 2πr.',
    },
    {
      term: 'π (pi)',
      means: 'About 3.14 — half a lap in radians, which is the same angle as 180°.',
    },
  ],

  hook: "Open any calculus book, physics engine, or game console's math library and search for degrees. You won't find them. Every sine and cosine under the hood runs on a different unit — one the circle itself invented. Meet the radian: the angle measure that makes the hard formulas fall apart into easy ones.",

  analogy: {
    analogy:
      "Imagine a circular running track, and your stride is magically calibrated so that ONE step covers exactly one radius of the track. Now angles become step-counting. Walked one step along the curve? You've turned 1 radian. Three steps and a bit (3.14, to be exact)? You're at the far side of the track — half a lap. A full lap takes 6.28 of your radius-steps, ALWAYS — tiny track or stadium, because a bigger track means proportionally bigger steps.",
    bridge:
      "In symbols: the circles lesson gave us circumference = 2πr — the full edge is 2π radiuses long, about 6.28. So a full turn = 2π radians, matching 360°. Half of each: 180° = π radians. Half again: 90° = π/2 radians. And the payoff formula: arc length = radius × angle (in radians). Walk 2 radians on a radius-5 circle and you've covered exactly 10 units of arc. Try writing THAT in degrees and you'll need a conversion factor of π/180 bolted on — radians make it clean.",
  },

  worked: {
    problem: 'Convert 90° to radians, and check that the answer makes sense.',
    steps: [
      {
        label: 'Plant the anchor fact',
        do: 'A full lap is 360° = 2π radians.',
        why: 'This comes straight from the circles lesson: the full edge of a circle is the circumference, 2πr — that\'s 2π radius-lengths of walking. Angle in radians = radius-lengths walked, so a full turn is 2π ≈ 6.28. Every conversion hangs off this one fact.',
        result: '360° = 2π rad',
      },
      {
        label: 'Cut it in half',
        do: 'Half a lap: 180° = π radians ≈ 3.14.',
        why: 'Halving both sides of the anchor keeps them equal — same angle, two labels. 180° = π is the conversion fact worth memorizing; everything else is fractions of it.',
        result: '180° = π ≈ 3.14 rad',
      },
      {
        label: 'Cut it in half again',
        do: 'Quarter lap: 90° = π/2 radians ≈ 1.57.',
        why: '90° is half of 180°, so its radian measure is half of π. On the unit circle, this is the walk from (1, 0) up to the top at (0, 1).',
        result: '90° = π/2 ≈ 1.57 rad',
      },
      {
        label: 'Sense check with the walking meaning',
        do: 'A quarter of a full lap should be a quarter of 6.28: 6.28 ÷ 4 = 1.57 ✓.',
        why: 'Locked in — and notice what the number MEANS: turn 90° on a unit circle and you have literally walked 1.57 radius-lengths of arc. The angle IS the distance walked. Degrees can never make that claim.',
        result: '90° = π/2 ≈ 1.57 rad ✓',
      },
    ],
    answer: '90° = π/2 ≈ 1.57 radians',
  },

  yourTurn: [
    {
      id: 'r1',
      context: 'Confidence builder — the anchor\'s better half.',
      prompt: '180° in radians ≈ ? (two decimals)',
      type: 'number',
      answer: 3.14,
      hint: 'Half a lap is π radians. π ≈ 3.14 — the most famous number in this app.',
    },
    {
      id: 'r2',
      context: 'Go all the way around.',
      prompt: 'A FULL circle in radians ≈ ? (two decimals)',
      type: 'number',
      answer: 6.28,
      hint: 'The full edge is 2π radius-lengths — double your answer from the last problem.',
    },
    {
      id: 'r3',
      context: 'A twist — convert the other direction.',
      prompt: 'π/2 radians = how many degrees?',
      type: 'number',
      answer: 90,
      hint: 'If π radians is 180°, then half of π is half of 180°.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'You walk along a circle\'s edge until the arc behind you is exactly one radius long. The angle you\'ve turned is...',
      choices: ['1 degree', '1 radian', 'π radians', '90°'],
      answer: 1,
      why: 'Right — that\'s the definition itself. Arc of one radius-length ⇒ angle of exactly 1 radian.',
      reExplain: {
        analogy: 'The string trick.',
        text: 'Cut a piece of string as long as the circle\'s radius. Now lay it along the circle\'s curved edge, starting anywhere. The wedge of angle it spans — from the center to each end of the string — is 1 radian. Works on a coin or a crater: bigger circle, longer string, same angle.',
      },
    },
    {
      id: 'c2',
      question: 'One full lap around any circle is...',
      choices: ['π radians', '360 radians', '2π radians', '2 radians'],
      answer: 2,
      why: 'Exactly. The full edge is the circumference, 2πr — that\'s 2π radius-lengths of walking, so a full turn is 2π ≈ 6.28 radians.',
      reExplain: {
        analogy: 'Wrapping the pizza crust.',
        text: 'Take a pizza and ask: how many radius-sticks does it take to lay along the whole crust? The circumference formula answers: 2π of them — six sticks and a bit of a seventh, about 6.28. Since radians count radius-lengths of edge, going all the way around costs exactly 2π. Not 360 — that\'s the degree count wearing the wrong uniform.',
      },
    },
    {
      id: 'c3',
      question: '180° equals...',
      choices: ['π/2 radians', '2π radians', 'π radians', '180 radians'],
      answer: 2,
      why: "That's the one. Half of a 2π lap is π radians ≈ 3.14 — the single most-used conversion in trig.",
      reExplain: {
        analogy: 'Two currencies, one price tag.',
        text: 'Degrees and radians are two currencies for the same thing, and 180° = π is the exchange rate. A U-turn costs 180 in degree-dollars or π ≈ 3.14 in radian-coins — same turn, different units. Every conversion is just scaling this rate: 90° is half the U-turn, so π/2; 360° is two U-turns, so 2π.',
      },
    },
    {
      id: 'c4',
      question: 'Why do mathematicians and physicists prefer radians over degrees?',
      choices: [
        'Radians are older than degrees',
        'With radians, arc length = radius × angle — no conversion factor needed',
        'Degrees only work on small circles',
        'Radians are always whole numbers',
      ],
      answer: 1,
      why: 'Clean. In radians the formulas shed their clutter: arc = r × θ, done. In degrees the same formula drags a π/180 correction everywhere.',
      reExplain: {
        analogy: 'Measuring in your own shoe size.',
        text: 'Measure a walk in "number of your own strides" and distance = stride × steps, effortlessly. Measure it in an unrelated unit and you need a conversion chart taped to your arm. Radians ARE the circle\'s own stride — the radius — so arc = radius × angle with nothing bolted on. A 2-radian turn on a radius-3 circle is a 6-unit walk. That effortlessness is why calculus runs on radians.',
      },
    },
    {
      id: 'c5',
      question: 'How big is 1 radian compared to 1 degree?',
      choices: [
        'Much bigger — about 57°',
        'Exactly the same size',
        'Much smaller — about 1/57 of a degree',
        'It depends on the size of the circle',
      ],
      answer: 0,
      why: 'Locked in. A full lap is 360° but only about 6.28 radians — so each radian is a hefty 360 ÷ 6.28 ≈ 57.3°.',
      reExplain: {
        analogy: 'Coarse slices vs. fine slices.',
        text: 'Degrees chop the lap into 360 slivers; radians chop the same lap into just 6.28 big wedges. Fewer slices from the same pie means each slice is bigger — about 57° per radian. And the size of the circle is irrelevant: a radian is a fraction OF a lap, and every circle\'s lap is a full lap.',
      },
    },
  ],
}
