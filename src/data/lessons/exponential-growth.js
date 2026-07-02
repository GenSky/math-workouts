// Algebra II · Lesson 4 — Exponential Growth & Decay
export default {
  id: 'exponential-growth',
  subjectId: 'algebra-2',
  order: 4,
  title: 'Exponential Growth & Decay: The Snowball',
  icon: '🦠',
  estMinutes: 11,
  tagline: 'Adding walks. Multiplying snowballs. Guess which one always wins.',
  prereqs: ['exponents', 'slope-intercept'],

  plainIdea:
    'Linear growth ADDS the same amount every step, like saving $10 a week. Exponential growth MULTIPLIES by the same amount every step, like doubling — and multiplying always ends up crushing adding, no matter how slow it starts.',

  vocab: [
    {
      term: 'linear growth',
      means: 'Growing by ADDING the same amount each step — the y = mx + b treadmill from slope-intercept.',
    },
    {
      term: 'exponential growth',
      means: 'Growing by MULTIPLYING by the same factor each step, like doubling: 100, 200, 400, 800…',
    },
    {
      term: 'growth factor',
      means: 'The number you multiply by each step. Doubling has a growth factor of 2; tripling, 3.',
    },
    {
      term: 'decay (half-life)',
      means: 'Exponential shrinking — multiplying by a fraction like 1/2 each step. The half-life is how long one halving takes.',
    },
  ],

  hook: "Classic offer: a million dollars today, OR a penny that doubles every day for a month. Take the penny and you look foolish for two weeks — day 15 you're holding about $164. Then the doubling detonates: by day 31 the penny is worth more than ten million dollars. That's exponential growth, and your gut is terrible at predicting it.",

  analogy: {
    analogy:
      "Picture two ways down a snowy hill. A walker takes identical strides — every step covers the same ground. That's the treadmill from slope-intercept: steady, predictable, linear. Now pack a snowball and let it roll. Small at first… but every turn it picks up snow, and a bigger ball picks up MORE snow on the next turn. The growth itself grows. That's the exponential difference: the walker's steps never change; the snowball's 'steps' keep getting bigger.",
    bridge:
      "The walker is y = mx + b — add m every step, from the slope-intercept chapter. The snowball is y = a · 2ⁿ — start at a, multiply by 2 for each of the n steps (that's just 2ⁿ, repeated multiplication from the exponents chapter). And decay is the same machine in reverse: multiply by 1/2 each step instead of 2, and the amount halves, halves, halves — shrinking fast but never quite hitting zero.",
  },

  worked: {
    problem: "A bacteria colony of 100 doubles every hour. A rival colony starts at 100 and ADDS 100 per hour. Who's bigger after 4 hours?",
    steps: [
      {
        label: 'Run the linear rival (the treadmill)',
        do: 'Start at 100, add 100 each hour for 4 hours: 100 + 100 · 4 = 500.',
        why: "That's y = mx + b with slope m = 100 and start b = 100 — the treadmill from slope-intercept. Same stride every hour, no surprises.",
        result: 'Adder after 4 hours: 500',
      },
      {
        label: 'Run the doubler (the snowball)',
        do: 'Start at 100, multiply by 2 four times: 100 · 2⁴ = 100 · 16 = 1600.',
        why: '2⁴ is four doublings chained together — exponents doing their repeated-multiplication job. The formula is y = 100 · 2ⁿ with n = 4.',
        result: 'Doubler after 4 hours: 1600',
      },
      {
        label: 'Watch the race hour by hour',
        do: 'Doubler: 200, 400, 800, 1600. Adder: 200, 300, 400, 500. They tie at hour 1 — then the doubler runs away.',
        why: "Here's the engine: the adder gains a flat 100 every hour, but the doubler's gain GROWS — +100, then +200, then +400, then +800. Each doubling has more to double.",
        result: 'Tied at hour 1, then no contest',
      },
      {
        label: 'Zoom out and learn the lesson',
        do: 'By hour 10: doubler = 100 · 2¹⁰ = 102,400. Adder = 100 + 100 · 10 = 1,100.',
        why: 'Adding grows steadily; multiplying snowballs. Given enough steps, exponential growth beats ANY linear growth — it\'s not even close, it\'s nearly 100-to-1 here.',
        result: '102,400 vs 1,100 at hour 10',
      },
    ],
    answer: 'The doubler wins: 1600 vs 500 after 4 hours',
  },

  yourTurn: [
    {
      id: 'g1',
      context: 'Confidence builder — chain the doublings.',
      prompt: '200 bacteria double 3 times. How many now?',
      type: 'number',
      answer: 1600,
      hint: 'Double step by step: 200 → 400 → 800 → ?',
    },
    {
      id: 'g2',
      context: 'Use the formula.',
      prompt: 'A population follows 50 · 2ⁿ. What is it at n = 4?',
      type: 'number',
      answer: 800,
      hint: '2⁴ = 16 (not 2 × 4 — exponents count doublings). Then 50 × 16.',
    },
    {
      id: 'g3',
      context: 'A twist — the snowball in reverse.',
      prompt: '800 mg of medicine halves 3 times. How much is left (mg)?',
      type: 'number',
      answer: 100,
      hint: 'Decay is multiplying by 1/2 each step: 800 → 400 → 200 → ?',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'What makes growth LINEAR (like y = mx + b)?',
      choices: [
        'It adds the same amount each step',
        'It multiplies by the same factor each step',
        'It doubles each step',
        'It never grows',
      ],
      answer: 0,
      why: 'Right — linear means same-size steps: +m, +m, +m, forever. That\'s the treadmill from slope-intercept.',
      reExplain: {
        analogy: 'A dripping faucet.',
        text: 'A faucet dripping into a bucket adds the same splash every second — the water level climbs at one steady rate, drawing a straight line on a graph. That constant add-per-step is the m in y = mx + b. Multiplying each step is a different machine entirely: that one curves upward.',
      },
    },
    {
      id: 'c2',
      question: 'A colony follows 5 · 2ⁿ. What is it at n = 3?',
      choices: ['30', '40', '80', '1000'],
      answer: 1,
      why: 'Clean. 2³ = 2 × 2 × 2 = 8, then 5 × 8 = 40.',
      reExplain: {
        analogy: 'Fold the paper, then count.',
        text: 'Handle the exponent first, like folding paper: three doublings of 1 give 2³ = 8 — never 2 × 3 = 6, which is the trap behind 30. The exponent counts repeated multiplications (straight from the exponents chapter). Only then multiply by the starting 5: 5 × 8 = 40.',
      },
    },
    {
      id: 'c3',
      question: 'A linear grower and an exponential grower race forever. Who wins in the long run?',
      choices: [
        'Linear, because it starts faster',
        'They stay tied',
        'Exponential — its gains keep getting bigger while linear\'s stay the same',
        'Whoever has the bigger starting number',
      ],
      answer: 2,
      why: 'Exactly. The adder gains the same amount every step; the multiplier\'s gains grow. Given enough steps, exponential always overtakes — starting size can\'t save the linear runner.',
      reExplain: {
        analogy: 'Fixed salary vs. commission on everything you own.',
        text: 'One worker earns a flat $500 a week forever. Another earns 10% of her total wealth each week — so as her pile grows, her paycheck grows too. Early on the flat salary looks great, but the percentage-earner\'s income keeps rising while $500 stays $500. Any growth that feeds on its own size eventually laps any growth that doesn\'t.',
      },
    },
    {
      id: 'c4',
      question: 'Exponential DECAY means...',
      choices: [
        'Subtracting the same amount each step',
        'Multiplying by a fraction like 1/2 each step',
        'The amount instantly drops to zero',
        'Adding a negative exponent',
      ],
      answer: 1,
      why: "That's the one. Decay is the snowball in reverse: multiply by 1/2 (or any fraction under 1) each step, and the amount shrinks fast but never quite hits zero.",
      reExplain: {
        analogy: 'Biting half the sandwich.',
        text: 'Eat half of what\'s LEFT of a sandwich each minute: whole, half, quarter, eighth… Big bites early, crumbs later, but there\'s always something left to halve. That\'s multiplying by 1/2 repeatedly. Subtracting the same amount each step is different — that\'s linear shrinking, and it hits zero on schedule.',
      },
    },
    {
      id: 'c5',
      question: 'A savings account earns 10% interest every year, added to the balance. Why is that EXPONENTIAL growth?',
      choices: [
        'Because banks use computers',
        'Because the balance is multiplied by 1.1 each year, so the interest itself earns interest',
        'Because 10% is a big number',
        'It isn\'t — interest is linear',
      ],
      answer: 1,
      why: 'Locked in. Each year the whole balance — including last year\'s interest — gets multiplied by 1.1. Growth feeding on growth is the exponential signature.',
      reExplain: {
        analogy: 'Rabbits having rabbits.',
        text: 'Two rabbits have babies. Next season, the babies have babies too — the newcomers join the breeding, so each generation\'s increase is bigger than the last. Compound interest works the same way: this year\'s interest joins the balance and earns its own interest next year. A same-size deposit every year would be linear; a same-percentage multiply every year snowballs.',
      },
    },
  ],
}
