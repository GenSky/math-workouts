// Geometry · Lesson 1 — Area & Perimeter
export default {
  id: 'area-perimeter',
  subjectId: 'geometry',
  order: 2,
  title: 'Area & Perimeter: Fence vs. Grass',
  icon: '🏡',
  estMinutes: 9,
  tagline: 'The fence around it, and the grass inside it.',
  prereqs: ['variables'],

  plainIdea:
    'Perimeter is the distance AROUND a shape — how much fence you\'d need. Area is the space INSIDE it — how much grass fills it. Two different questions, two different numbers, two different units.',

  vocab: [
    {
      term: 'perimeter',
      means: 'The total distance around the edge of a shape. Walk the border and count your steps — that\'s perimeter. Measured in plain units (meters, feet).',
    },
    {
      term: 'area',
      means: 'How much flat space a shape covers inside. Measured in SQUARE units (m², ft²) — literally the count of 1×1 squares that fit inside.',
    },
    {
      term: 'dimensions',
      means: 'The measurements that describe a shape — for a rectangle, its length and width.',
    },
  ],

  hook: "You're fixing up a backyard: a fence around the outside, and fresh sod (grass) covering the inside. The fence store and the sod farm ask you the SAME question — 'how big is the yard?' — but they mean completely different things. Mix them up and you'll buy triple the fence or a third of the grass.",

  analogy: {
    analogy:
      "Perimeter is the FENCE: walk the border of the yard and add up every side you walk along. Area is the GRASS: imagine tiling the whole yard with 1-meter-by-1-meter grass squares and counting them. The fence only cares about the edge. The grass only cares about the inside. A long skinny yard can need lots of fence but very little grass — the two numbers measure genuinely different things.",
    bridge:
      "For a rectangle with length l and width w (see the variables doing work?): Perimeter = l + w + l + w, which tidies up to P = 2(l + w) — you walk each dimension twice. Area = l × w — stacking w rows of l unit squares. And watch the units: perimeter comes out in meters (a distance), area in square meters, m² (a count of squares). The little ² on the unit is your receipt that you multiplied two lengths.",
  },

  worked: {
    problem: 'A rectangular yard is 12 m long and 5 m wide. How much fence does it need (perimeter), and how much sod (area)?',
    steps: [
      {
        label: 'Sketch and label',
        do: 'Draw the rectangle: length l = 12, width w = 5.',
        why: 'Geometry rewards a 5-second sketch. Label the dimensions with their variables so the formulas have something to grab.',
        result: 'l = 12, w = 5',
      },
      {
        label: 'Fence = perimeter',
        do: 'P = 2(l + w) = 2(12 + 5) = 2 × 17.',
        why: 'Walking the border you cover the length twice and the width twice. Parentheses first (order of operations!): 12 + 5 = 17, then double it.',
        result: 'P = 34 m of fence',
      },
      {
        label: 'Sod = area',
        do: 'A = l × w = 12 × 5.',
        why: 'Picture 5 rows of grass squares, each row holding 12 squares: 5 × 12 = 60 unit squares fill the yard.',
        result: 'A = 60 m² of sod',
      },
      {
        label: 'Sanity-check the units',
        do: 'Fence: 34 m (a length). Sod: 60 m² (a count of squares).',
        why: "If your 'area' answer has no ², something went wrong. Different units = different questions answered. 34 and 60 aren't comparable — one is a walk, the other is a carpet.",
        result: '34 m fence, 60 m² sod ✓',
      },
    ],
    answer: 'Perimeter 34 m · Area 60 m²',
  },

  yourTurn: [
    {
      id: 'a1',
      context: 'Confidence builder — walk the border.',
      prompt: 'A rectangle is 8 m by 3 m. What is its PERIMETER in meters?',
      type: 'number',
      answer: 22,
      hint: 'P = 2(l + w) = 2(8 + 3). Parentheses first.',
    },
    {
      id: 'a2',
      context: 'Same rectangle — now count the squares inside.',
      prompt: 'The same 8 m by 3 m rectangle. What is its AREA in square meters?',
      type: 'number',
      answer: 24,
      hint: 'A = l × w. Three rows of eight squares.',
    },
    {
      id: 'a3',
      context: 'A twist — work backwards from the fence to the grass.',
      prompt: 'A SQUARE garden has a perimeter of 20 m. What is its area in square meters?',
      type: 'number',
      answer: 25,
      hint: 'A square has 4 equal sides, so each side is 20 ÷ 4 = 5. Then area = side × side.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'Which job needs you to calculate AREA?',
      choices: [
        'Buying a fence for the yard',
        'Buying paint to cover a wall',
        'Walking once around the block',
        'Framing a picture',
      ],
      answer: 1,
      why: 'Right — paint covers the INSIDE surface of the wall. Coverage = area. The other three all follow edges.',
      reExplain: {
        analogy: 'Cover vs. outline.',
        text: 'Ask: am I COVERING a surface, or TRACING its edge? Paint covers → area. Fences, laps around the block, and picture frames all trace the border → perimeter. One word to check: "cover" means area, "around" means perimeter.',
      },
    },
    {
      id: 'c2',
      question: 'A rectangle is 10 m by 4 m. Its perimeter is...',
      choices: ['14 m', '28 m', '40 m', '48 m'],
      answer: 1,
      why: 'Clean. P = 2(10 + 4) = 2 × 14 = 28 m.',
      reExplain: {
        analogy: 'Walk the lap.',
        text: 'Walk it: 10 along the top, 4 down the side, 10 along the bottom, 4 back up. 10 + 4 + 10 + 4 = 28. The formula 2(l + w) is just that lap written compactly. (14 forgot to walk back; 40 is the area sneaking in.)',
      },
    },
    {
      id: 'c3',
      question: 'That same 10 m by 4 m rectangle. Its area is...',
      choices: ['14 m²', '28 m²', '40 m²', '44 m²'],
      answer: 2,
      why: "That's the one. A = 10 × 4 = 40 m².",
      reExplain: {
        analogy: 'Rows of tiles.',
        text: 'Tile the floor: each row holds 10 one-meter tiles, and there are 4 rows. 4 rows × 10 tiles = 40 tiles = 40 m². Multiplying length × width is just fast tile-counting.',
      },
    },
    {
      id: 'c4',
      question: 'Why is area measured in SQUARE units, like m²?',
      choices: [
        'Tradition from ancient Rome',
        'Because area literally counts 1×1 squares filling the shape',
        'Because most shapes are squares',
        'It\'s a typo that stuck',
      ],
      answer: 1,
      why: 'Exactly. Area = how many unit squares fit inside. The unit is "squares," so we write m².',
      reExplain: {
        analogy: 'Graph paper.',
        text: 'Draw any shape on graph paper and shade it in — its area is the number of little grid squares you shaded. Each square is 1 m by 1 m: a "square meter." That\'s why the ² is on the unit: you\'re counting squares, not lengths.',
      },
    },
    {
      id: 'c5',
      question: 'A square has an area of 36 m². How long is each side?',
      choices: ['9 m', '6 m', '18 m', '4 m'],
      answer: 1,
      why: 'Locked in. side × side = 36, and 6 × 6 = 36. Each side is 6 m.',
      reExplain: {
        analogy: 'Un-squaring.',
        text: 'A square\'s area is side², so going backwards means asking "what times itself is 36?" That\'s 6 (the square root of 36). Check it: a 6×6 grid holds 36 tiles. ✓ (9 came from 36 ÷ 4 — that\'s treating 36 like a perimeter.)',
      },
    },
  ],
}
