// Geometry · Lesson 4 — Circles
export default {
  id: 'circles',
  subjectId: 'geometry',
  order: 4,
  title: 'Circles: π and the Perfect Loop',
  icon: '🥧',
  estMinutes: 11,
  tagline: 'One weird number, 3.14…, unlocks every circle in the universe.',
  prereqs: ['area-perimeter'],

  plainIdea:
    'Every circle, from a coin to the Moon, obeys the same rule: its edge is always about 3.14 times as long as its width. That magic number is called π, and with it you can measure any circle\'s edge (circumference) and inside (area).',

  vocab: [
    {
      term: 'radius (r)',
      means: 'The distance from the center of a circle to its edge — one spoke of the wheel.',
    },
    {
      term: 'diameter (d)',
      means: 'The distance all the way across through the center. Always twice the radius: d = 2r.',
    },
    {
      term: 'circumference (C)',
      means: 'The distance around the circle — its perimeter, but curved. The crust of the pizza.',
    },
    {
      term: 'π (pi)',
      means: 'The number you get dividing ANY circle\'s circumference by its diameter: about 3.14. Same for every circle ever.',
    },
  ],

  hook: "Take any circular thing — a mug, a bike wheel, a pizza. Wrap a string around its edge, then stretch that string across its middle. The around-string is always just a bit more than 3 across-strings. Try it on a coin, try it on a trampoline: 3.14-ish, every single time. Humanity noticed, gave the number a name — π — and suddenly every circle in the universe was measurable.",

  analogy: {
    analogy:
      "Think of π as every circle's DNA — one ratio they all share, no matter their size. Roll a bike wheel through one full turn and mark where it started and stopped: the wheel travels exactly 3.14-ish diameters of road. A monster truck tire does the same. A pizza cutter's little wheel does the same. Scale changes everything about a circle EXCEPT this ratio — that's why one number handles them all.",
    bridge:
      "In symbols: π = C ÷ d ≈ 3.14, for every circle ever. Flip it around and the ratio becomes a tool: C = πd, or since d = 2r, C = 2πr. Area has its own formula: A = πr² — square the radius FIRST (that ² is an exponent doing its usual job), then multiply by π. Same split as rectangles in area-perimeter: circumference is the fence (plain units), area is the grass (square units).",
  },

  worked: {
    problem: 'A circular pizza has radius 5 in. How much crust edge (circumference) and how much pizza (area)? Use π ≈ 3.14.',
    steps: [
      {
        label: 'Get the diameter first',
        do: 'd = 2r = 2 × 5 = 10 in.',
        why: 'The radius is one spoke, center to crust. All the way across is two spokes — d = 2r, always. Many circle problems start with this one free move.',
        result: 'd = 10 in',
      },
      {
        label: 'Circumference — the crust',
        do: 'C = π · d = 3.14 × 10 = 31.4 in.',
        why: "That's π's actual definition at work: the edge is always π diameters long. This is the 'fence' from area-perimeter — same idea, now curved into a loop.",
        result: 'C = 31.4 in',
      },
      {
        label: 'Area — the pizza itself',
        do: 'A = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 in².',
        why: "Note the ² — exponents on duty. Square the radius FIRST (5² = 25), THEN multiply by π. The #1 circle mistake is doing 3.14 × 5 × 2 instead of 3.14 × 25.",
        result: 'A = 78.5 in²',
      },
      {
        label: 'Sanity-check the units',
        do: 'Area came out in in² (squared); circumference in plain inches. That\'s correct.',
        why: "Same fence-vs-grass distinction as rectangles: distance around is measured in units, surface inside is measured in square units. If your 'area' has no ² on it, a step went missing.",
        result: 'C = 31.4 in ✓, A = 78.5 in² ✓',
      },
    ],
    answer: 'C = 31.4 in of crust, A = 78.5 in² of pizza',
  },

  yourTurn: [
    {
      id: 'r1',
      context: 'Confidence builder — the two-spoke rule.',
      prompt: "Radius 7. What's the diameter?",
      type: 'number',
      answer: 14,
      hint: 'All the way across is two radii: d = 2r.',
    },
    {
      id: 'r2',
      context: 'Around the loop.',
      prompt: 'Radius 10, π ≈ 3.14. Circumference?',
      type: 'number',
      answer: 62.8,
      hint: 'C = 2πr: double the radius to get 20, then × 3.14.',
    },
    {
      id: 'r3',
      context: 'A twist — the inside, where the ² lives.',
      prompt: 'Radius 3, π ≈ 3.14. Area?',
      type: 'number',
      answer: 28.26,
      hint: 'Square FIRST: 3² = 9. Then × 3.14. (Not 3.14 × 3 × 2 — that\'s the circumference trap.)',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'What IS π, actually?',
      choices: [
        'The radius times 2',
        'Circumference ÷ diameter — the same ratio for every circle',
        'The area of a circle',
        'A number that only works for round pizzas',
      ],
      answer: 1,
      why: 'Right — π is what you get dividing any circle\'s edge by its width: about 3.14, whether it\'s a coin or a planet.',
      reExplain: {
        analogy: 'Every circle\'s fingerprint.',
        text: 'Wrap a string around any circular lid, then lay it across the lid\'s middle: the around-string always covers just over 3 across-strings. Sauce-jar lid or manhole cover, the ratio never budges. That universal around-to-across ratio is π — not a formula result, but a fact of round shapes themselves.',
      },
    },
    {
      id: 'c2',
      question: 'A circle has radius 6. Its diameter is...',
      choices: ['3', '12', '36', '18.84'],
      answer: 1,
      why: 'Clean. Diameter is twice the radius: d = 2r = 12.',
      reExplain: {
        analogy: 'Two spokes make a crossbar.',
        text: 'The radius is one bicycle spoke: hub to rim. To cross the whole wheel you ride one spoke out and one spoke\'s length beyond the hub to the far rim — two spokes total, so d = 2 × 6 = 12. Halving (3) goes the wrong direction, and 36 squared the radius — that move belongs to area, not width.',
      },
    },
    {
      id: 'c3',
      question: 'Which formula gives the AREA of a circle?',
      choices: ['A = 2πr', 'A = πd', 'A = πr²', 'A = r² alone'],
      answer: 2,
      why: "That's the one. Area is πr² — square the radius, then multiply by π. (2πr is the circumference, the other formula's job.)",
      reExplain: {
        analogy: 'Fence vs. grass, curved edition.',
        text: 'From area-perimeter: the fence is distance around, the grass is surface inside. For circles, 2πr walks the fence — one letter r, plain units. πr² measures the grass — and grass needs SQUARE units, which is your memory hook: the area formula is the one wearing the ². No square on the r, no area.',
      },
    },
    {
      id: 'c4',
      question: 'The digits of π (3.14159…) eventually...',
      choices: [
        'Stop at 3.14',
        'Start repeating in a pattern',
        'Turn into all zeros',
        'Go on forever without ever repeating',
      ],
      answer: 3,
      why: 'Exactly. π is irrational — infinite digits, no repeating pattern, ever. 3.14 is just a handy approximation for calculating.',
      reExplain: {
        analogy: 'A song with no chorus.',
        text: 'Some decimal numbers are songs stuck on loop: 1/3 = 0.3333… repeats forever. π is a song that never finds a chorus — trillions of digits have been computed and no pattern ever emerges, and mathematicians have PROVEN none ever will. We write ≈ 3.14 the way you\'d hum the opening bars: close enough for work, never the whole song.',
      },
    },
    {
      id: 'c5',
      question: 'Radius 4, π ≈ 3.14. What is the AREA?',
      choices: ['12.56', '50.24', '25.12', '16'],
      answer: 1,
      why: 'Locked in. Square first: 4² = 16. Then 3.14 × 16 = 50.24.',
      reExplain: {
        analogy: 'Ingredients before oven.',
        text: 'A = πr² is a recipe with a strict order: prep the ingredient (4² = 16), THEN bake with π (3.14 × 16 = 50.24). The trap answers skipped the prep: 12.56 is 3.14 × 4 with the square forgotten, and 25.12 is 2πr — the circumference recipe entirely. When a circle answer feels small, check whether the radius ever got squared.',
      },
    },
  ],
}
