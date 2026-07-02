// Geometry · Lesson 1 — Angles & Triangles
export default {
  id: 'angles-triangles',
  subjectId: 'geometry',
  order: 1,
  title: 'Angles & Triangles: The 180° Budget',
  icon: '📐',
  estMinutes: 9,
  tagline: 'Every triangle ever drawn spends exactly 180° — no more, no less.',
  prereqs: ['order-of-operations'],

  plainIdea:
    'An angle measures how much something turns, counted in degrees. The three corners of ANY triangle always add up to exactly 180° — so if you know two corners, subtraction hands you the third.',

  vocab: [
    {
      term: 'angle (degrees)',
      means: 'A measure of turn. A full spin is 360°; half a spin is 180°; a quarter turn is 90°.',
    },
    {
      term: 'right angle',
      means: 'A perfect 90° corner — the corner of a piece of paper. Often marked with a little square.',
    },
    {
      term: 'equilateral triangle',
      means: 'A triangle with all three sides equal — and all three angles equal too.',
    },
    {
      term: 'isosceles triangle',
      means: 'A triangle with two equal sides — and the two angles across from them are equal too.',
    },
  ],

  hook: "Grab any triangle — draw one sloppy, cut one out of paper, sketch one on a napkin. Tear off its three corners and push them together, point to point. Every single time, they line up into a perfectly straight line. Skinny triangle, giant triangle, lopsided triangle: same straight line. That's not a coincidence — it's a law.",

  analogy: {
    analogy:
      "Every triangle is born with the same allowance: exactly 180 degrees to spend on its three corners, not a degree more or less. Big corner splurges eat into what the others can have — give one corner a fat 120° and the other two must survive on 60° between them. Three equal siblings splitting the allowance get 60° each. However the money is divided, the receipts always total exactly 180.",
    bridge:
      "In symbols: angle A + angle B + angle C = 180° for every triangle. That straight line from the torn-corner trick IS the proof — a straight line measures 180°, and the three angles rebuild it exactly. So the missing-angle recipe is pure arithmetic: third angle = 180 − (the two you know). Order of operations says handle the parentheses first: add the known pair, then subtract from the budget.",
  },

  worked: {
    problem: 'A triangle has angles of 65° and 45°. Find the third angle.',
    steps: [
      {
        label: 'State the unbreakable rule',
        do: 'The three angles of ANY triangle sum to 180°: 65 + 45 + ? = 180.',
        why: "This works on every triangle in the universe — no exceptions, no fine print. That's what makes it a budget: the total is fixed before you even look at the shape.",
        result: '65 + 45 + ? = 180',
      },
      {
        label: 'Add up what\'s already spent',
        do: '65 + 45 = 110.',
        why: 'Two corners have claimed their share of the budget. Parentheses first — order of operations — so total the known pair before touching the 180.',
        result: '110° spent',
      },
      {
        label: 'Subtract from the budget',
        do: '180 − 110 = 70.',
        why: 'Whatever the first two corners didn\'t spend belongs to the third. The leftover allowance is the missing angle.',
        result: 'Third angle = 70°',
      },
      {
        label: 'Check against the budget',
        do: '65 + 45 + 70 = 180 ✓.',
        why: 'One quick addition confirms the books balance. If your three angles total anything but 180, one of them is wrong — the budget never lies.',
        result: '70°, confirmed',
      },
    ],
    answer: 'The third angle is 70°',
  },

  yourTurn: [
    {
      id: 'a1',
      context: 'Confidence builder — one corner is the free square.',
      prompt: 'A right triangle has a 90° corner and a 30° corner. Third angle?',
      type: 'number',
      answer: 60,
      hint: '90 + 30 = 120 already spent. The budget is 180 — what\'s left?',
    },
    {
      id: 'a2',
      context: 'Same budget, no triangle needed.',
      prompt: 'Two angles sit on a straight line. One is 110°. The other?',
      type: 'number',
      answer: 70,
      hint: 'A straight line is a 180° budget too: 180 − 110.',
    },
    {
      id: 'a3',
      context: 'A twist — three equal siblings split the allowance.',
      prompt: "An equilateral triangle's angles are all equal. Each one is?",
      type: 'number',
      answer: 60,
      hint: 'Three equal shares of 180: divide 180 by 3.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The three angles of a triangle always add up to...',
      choices: ['90°', '180°', '360°', 'It depends on the triangle'],
      answer: 1,
      why: 'Right — 180°, every triangle ever, no exceptions. That\'s the whole budget.',
      reExplain: {
        analogy: 'Three puzzle pieces, one straight edge.',
        text: 'Tear the three corners off any paper triangle and snug them together point-to-point: they always assemble into a dead-straight edge. A straight edge is half a full turn — 180°. Since the corners rebuild it perfectly every time, their measures must total 180° every time.',
      },
    },
    {
      id: 'c2',
      question: 'A right angle measures...',
      choices: ['45°', '180°', '90°', '100°'],
      answer: 2,
      why: 'Clean. 90° — a quarter of a full turn, the corner of every sheet of paper.',
      reExplain: {
        analogy: 'The clock at 3:00.',
        text: 'At 3:00 the hands point straight up and straight right — a quarter of the way around the clock face. A full lap is 360°, so a quarter lap is 360 ÷ 4 = 90°. That crisp quarter-turn corner is the right angle, usually marked with a tiny square.',
      },
    },
    {
      id: 'c3',
      question: 'Two angles sit together on a straight line. One is 130°. The other is...',
      choices: ['130°', '230°', '30°', '50°'],
      answer: 3,
      why: "That's the one. A straight line is 180°, so 180 − 130 = 50.",
      reExplain: {
        analogy: 'Splitting one breadstick.',
        text: 'A straight line is a single 180° breadstick. Two angles sharing it split the whole thing — one bite plus the other bite equals the full stick. If one angle takes 130°, the other gets what remains: 180 − 130 = 50°. Adding to get 230 would need a bigger breadstick than exists.',
      },
    },
    {
      id: 'c4',
      question: 'An isosceles triangle has...',
      choices: [
        'Two equal sides and two equal base angles',
        'All three sides different',
        'Always a 90° corner',
        'Angles that sum to 360°',
      ],
      answer: 0,
      why: 'Exactly. Twin sides come with twin angles sitting across from them — matched pairs, always together.',
      reExplain: {
        analogy: 'An A-frame cabin.',
        text: 'Picture an A-frame cabin: two identical roof beams leaning together over a flat floor. Because the beams match, they meet the floor at identical tilts — twin sides force twin base angles. Equal sides and equal angles travel as a package: spot one pair and you\'ve found the other.',
      },
    },
    {
      id: 'c5',
      question: 'A triangle has angles of 50° and 60°. The third angle is...',
      choices: ['110°', '70°', '80°', '60°'],
      answer: 1,
      why: 'Locked in. 50 + 60 = 110 spent, and 180 − 110 = 70 left in the budget.',
      reExplain: {
        analogy: 'The last slice of the pie.',
        text: 'The whole pie is 180°. Two guests took slices of 50° and 60° — together 110° is gone. The third guest gets exactly what remains: 180 − 110 = 70°. The trap answer 110 is the amount EATEN, not the amount left — always finish with the subtraction.',
      },
    },
  ],
}
