// Geometry · Lesson 2 — The Pythagorean Theorem
export default {
  id: 'pythagoras',
  subjectId: 'geometry',
  order: 3,
  title: 'Pythagoras: The Shortcut Theorem',
  icon: '🧭',
  estMinutes: 11,
  tagline: 'a² + b² = c² — the equation your GPS runs every second.',
  prereqs: ['exponents', 'area-perimeter'],

  plainIdea:
    'For any triangle with a square corner (a right angle): square the two short sides, add them, and you get the long side squared. a² + b² = c². It turns two sideways distances into one straight-line shortcut.',

  vocab: [
    {
      term: 'right triangle',
      means: 'A triangle with one perfect 90° corner — the corner of a piece of paper.',
    },
    {
      term: 'legs',
      means: 'The two sides that form the right angle — the "along" and the "up."',
    },
    {
      term: 'hypotenuse',
      means: 'The longest side, sitting opposite the right angle. It\'s always the diagonal shortcut.',
    },
    {
      term: 'square root (√)',
      means: 'The undo button for squaring. √25 asks "what times itself makes 25?" Answer: 5.',
    },
  ],

  hook: "Your GPS says the coffee shop is 3 blocks east and 4 blocks north. But the crow — and the app's 'distance' number — doesn't walk blocks. It cuts the diagonal. How does your phone know that diagonal is exactly 5 blocks, not roughly 5-ish? A theorem old enough to predate the alphabet's lowercase letters.",

  analogy: {
    analogy:
      "Picture a rectangular park. You need to get from the southwest corner to the northeast corner. The rule-follower walks the L: 3 blocks along the bottom, then 4 blocks up the side — 7 blocks total. The dog off its leash cuts straight across the grass. The dog's diagonal is obviously shorter than 7… but how much shorter? Pythagoras answers exactly: square each leg of the L, add them, and the diagonal is the square root of that sum.",
    bridge:
      "In symbols: legs a and b, diagonal (hypotenuse) c, and a² + b² = c². For the park: 3² + 4² = 9 + 16 = 25 = c², so c = √25 = 5 blocks. The squares aren't decoration — they're literal squares: build a square on each side of the triangle, and the two small squares' areas exactly fill the big one. One rule, every right triangle in the universe: know two sides, get the third. That's why GPS, architects, and every video-game engine run it constantly.",
  },

  worked: {
    problem: 'A park is 3 blocks by 4 blocks. How long is the diagonal shortcut across it?',
    steps: [
      {
        label: 'Spot the right triangle',
        do: 'The L-shaped walk (3 along, 4 up) plus the shortcut form a triangle with a square corner.',
        why: 'Pythagoras ONLY works with a right angle in the triangle. Street grids give you one for free — east and north meet at 90°.',
        result: 'Legs: 3 and 4. Hypotenuse: ?',
      },
      {
        label: 'Square both legs',
        do: '3² = 9 and 4² = 16.',
        why: "Exponents from last chapter earning their keep: 3² means 3 × 3. We're computing the area of the square built on each leg.",
        result: '9 and 16',
      },
      {
        label: 'Add them — that\'s the big square',
        do: '9 + 16 = 25. So c² = 25.',
        why: 'The theorem\'s whole claim: the two leg-squares together exactly equal the hypotenuse-square. 25 is the area of the square sitting on the shortcut.',
        result: 'c² = 25',
      },
      {
        label: 'Un-square to get the distance',
        do: 'c = √25 = 5.',
        why: 'We want the side, not the square, so we hit the undo button: the square root. The shortcut is 5 blocks — beating the 7-block L-walk by 2 full blocks.',
        result: 'c = 5 blocks',
      },
    ],
    answer: 'The diagonal is exactly 5 blocks (vs 7 walking the L)',
  },

  yourTurn: [
    {
      id: 'y1',
      context: 'Confidence builder — the famous triple, doubled.',
      prompt: 'A right triangle has legs 6 and 8. How long is the hypotenuse?',
      type: 'number',
      answer: 10,
      hint: '6² + 8² = 36 + 64 = 100. Now un-square it: √100 = ?',
    },
    {
      id: 'y2',
      context: 'Another famous one — trust the process.',
      prompt: 'Legs 5 and 12. What is the hypotenuse?',
      type: 'number',
      answer: 13,
      hint: '25 + 144 = 169. What number times itself is 169? (It\'s just above 12.)',
    },
    {
      id: 'y3',
      context: 'A twist — you KNOW the hypotenuse, find the missing leg.',
      prompt: 'A 10-ft ladder (the hypotenuse) leans against a wall, its foot 6 ft from the wall. How high up the wall does it reach?',
      type: 'number',
      answer: 8,
      hint: 'Now c is known: 6² + b² = 10². So b² = 100 − 36. Un-square that.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The hypotenuse of a right triangle is...',
      choices: [
        'The shortest side',
        'The longest side, opposite the right angle',
        'Whichever side you like',
        'The height',
      ],
      answer: 1,
      why: 'Right — it\'s the diagonal across from the 90° corner, and it\'s always the longest side.',
      reExplain: {
        analogy: 'The couch across the corner.',
        text: 'Put a couch diagonally across the corner of a room: it faces the corner and it\'s longer than either wall segment it spans. The hypotenuse is that couch — always opposite the right angle, always the longest of the three sides.',
      },
    },
    {
      id: 'c2',
      question: 'Legs 9 and 12. The hypotenuse is...',
      choices: ['15', '21', '13', '108'],
      answer: 0,
      why: 'Clean. 81 + 144 = 225 = 15². (It\'s the 3-4-5 triangle scaled up ×3.)',
      reExplain: {
        analogy: 'Recipe, step by step.',
        text: 'Three moves, always: square (81 and 144), add (225), un-square (√225 = 15). The trap answers: 21 just added the legs (9+12 — that\'s the L-walk, not the shortcut), and 108 multiplied them. Square, add, root — every time.',
      },
    },
    {
      id: 'c3',
      question: 'The Pythagorean theorem works for...',
      choices: [
        'Every triangle',
        'Only right triangles',
        'Only equilateral triangles',
        'Circles too',
      ],
      answer: 1,
      why: "That's the one. No 90° corner, no theorem — the balance between the squares breaks without it.",
      reExplain: {
        analogy: 'A key for one lock.',
        text: 'a² + b² = c² is a key cut for one lock: the right angle. Squash the triangle flatter or stretch it wider than 90° and the diagonal changes while the legs stay the same — so the equation stops being true. First question, always: is there a square corner?',
      },
    },
    {
      id: 'c4',
      question: '√64 = ?',
      choices: ['32', '8', '16', '6'],
      answer: 1,
      why: 'Locked in. 8 × 8 = 64, so the square root of 64 is 8.',
      reExplain: {
        analogy: 'The undo button.',
        text: 'Squaring and square-rooting are do/undo: 8² = 64, so √64 = 8. The trap is halving (32) — the root asks "what MULTIPLIED BY ITSELF makes 64," not "what\'s half of 64." Test your answer by squaring it: 8 × 8 = 64 ✓.',
      },
    },
    {
      id: 'c5',
      question: 'Why does your GPS use this theorem constantly?',
      choices: [
        'To draw the map colors',
        'To turn east-west and north-south differences into one straight-line distance',
        'To count how many turns you make',
        'It doesn\'t — GPS uses magic',
      ],
      answer: 1,
      why: 'Exactly. Two coordinate differences in, one true distance out — that IS a² + b² = c².',
      reExplain: {
        analogy: 'The crow\'s flight.',
        text: 'Your phone knows you\'re some amount east and some amount north of the coffee shop — two separate numbers. "Distance: 5 blocks" needs ONE number: the crow\'s straight flight. Square the east-gap, square the north-gap, add, root. Every distance your map ever shows you is Pythagoras running quietly in the background.',
      },
    },
  ],
}
