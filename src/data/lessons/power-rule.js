// Calculus I · Lesson 2 — The Power Rule
export default {
  id: 'power-rule',
  subjectId: 'calculus-1',
  order: 2,
  title: 'The Power Rule: Derivatives on Autopilot',
  icon: '⚡',
  estMinutes: 10,
  tagline: 'The limit dance, pre-computed. Slopes for the price of a multiplication.',
  prereqs: ['derivatives', 'exponents'],

  plainIdea:
    'For any power of x, there\'s a shortcut to its derivative: bring the exponent down in front as a multiplier, then lower the exponent by one. x³ becomes 3x², x⁵ becomes 5x⁴ — instant slope formulas, no shrinking windows required.',

  vocab: [
    {
      term: 'power rule',
      means: 'The shortcut xⁿ → n·xⁿ⁻¹: the exponent hops down front as a multiplier, and the power drops by one.',
    },
    {
      term: 'constant',
      means: 'A plain number with no x attached, like 7. Its graph is a flat line, so its rate of change — its derivative — is 0.',
    },
    {
      term: 'sum rule',
      means: 'To differentiate terms added together, differentiate each term separately and add the results. Term by term, no drama.',
    },
    {
      term: 'coefficient',
      means: 'The number multiplying a power of x (the 5 in 5x²). It rides along: the derivative of 5x² is 5 × 2x = 10x.',
    },
  ],

  hook: "Last lesson you found the slope of x² at one point the honest way: average slopes over shrinking windows — 7, 6.1, 6.01… — then a limit. Beautiful. Also exhausting. Imagine doing that ritual for x³, then x⁴, then x⁵, at every point you ever care about. Good news: mathematicians ran the limit once, spotted the pattern, and left you the keys. Today you drive on autopilot.",

  analogy: {
    analogy:
      "The exponent is a kid sitting up on the top bunk. The power rule is bedtime: the kid hops down to the floor (becomes a multiplier out front), and whoever's left in the bunk slides down one level (the exponent drops by one). x³: the 3 hops down, a 2 stays up top — 3x². x⁵: the 5 hops down, leaving 4 — 5x⁴. Same two moves every single time, no matter how tall the bunk bed.",
    bridge:
      "In notation: if f(x) = xⁿ, then f′(x) = n·xⁿ⁻¹. Watch it reproduce what you already earned the hard way: x² → 2x¹ = 2x — exactly the slope formula the derivatives lesson built with limits. Friends of the rule: a constant like 7 graphs as a flat line, so its derivative is 0 (nothing changing, no rate). Sums split up term by term: (x³ + x²)′ = 3x² + 2x. And coefficients multiply through: (5x²)′ = 5 · 2x = 10x. Those four facts differentiate every polynomial you'll ever meet.",
  },

  worked: {
    problem: 'Find the slope of f(x) = x³ at x = 2.',
    steps: [
      {
        label: 'State the rule',
        do: 'For xⁿ: bring the exponent down front, knock the exponent down by one. xⁿ → n·xⁿ⁻¹.',
        why: "This isn't a new idea — it's the derivatives lesson's shrinking-window limit, run once in general and bottled. The exponents lesson gave the n and n−1 their meaning; calculus gave them a job.",
        result: 'xⁿ → n·xⁿ⁻¹',
      },
      {
        label: 'Apply it to x³',
        do: 'The 3 hops down front; the exponent drops 3 → 2: f′(x) = 3x².',
        why: 'Two mechanical moves and you hold a slope FORMULA — the steepness of x³ at every point at once, not just one.',
        result: 'f′(x) = 3x²',
      },
      {
        label: 'Evaluate at x = 2',
        do: 'f′(2) = 3 · (2²) = 3 · 4 = 12.',
        why: 'Plugging a point into the derivative reads the speedometer there: at x = 2 the curve climbs 12-to-1 — twelve units up for each unit across.',
        result: 'f′(2) = 12',
      },
      {
        label: 'Sanity-check against the hard way',
        do: 'The limits lesson built the slope of x² as 2x by shrinking windows. Power rule: x² → 2x¹ = 2x. Same answer, instantly.',
        why: "The shortcut agrees with the honest method — that's what makes it trustworthy. One rule, every power: x², x³, x¹⁰⁰, all on autopilot.",
        result: 'x² → 2x ✓ — rule confirmed',
      },
    ],
    answer: 'f′(x) = 3x², so f′(2) = 12',
  },

  yourTurn: [
    {
      id: 'pr1',
      context: 'Confidence builder — evaluate the derivative.',
      prompt: 'f(x) = x³, so f′(x) = 3x². What is f′(2)?',
      type: 'number',
      answer: 12,
      hint: 'Square the 2 first (2² = 4), then multiply by 3.',
    },
    {
      id: 'pr2',
      context: 'A taller bunk bed.',
      prompt: 'f(x) = x⁵ gives f′(x) = 5x⁴. What is f′(1)?',
      type: 'number',
      answer: 5,
      hint: '1 to any power is 1, so this is just 5 × 1.',
    },
    {
      id: 'pr3',
      context: 'A twist — no x at all.',
      prompt: 'What is the derivative of the constant function f(x) = 7? (a number)',
      type: 'number',
      answer: 0,
      hint: 'Graph y = 7: a perfectly flat line. What is the slope of flat?',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The power rule says the derivative of xⁿ is...',
      choices: ['xⁿ⁻¹', 'n·xⁿ⁻¹', 'n·xⁿ', 'n·xⁿ⁺¹'],
      answer: 1,
      why: 'Right — BOTH moves happen: the exponent hops down front AND the power drops by one. Skipping either move is the classic slip.',
      reExplain: {
        analogy: 'Hop down, slide down.',
        text: 'Bedtime has two steps: the kid on the top bunk hops down to the floor (the n multiplies out front), and the bunk itself drops a level (n becomes n − 1). Do only the hop and you get n·xⁿ; do only the slide and you get xⁿ⁻¹. The rule is a two-step, every time: x⁴ → 4x³, x⁷ → 7x⁶.',
      },
    },
    {
      id: 'c2',
      question: 'By the power rule, the derivative of x² is...',
      choices: ['x', '2', '2x', 'x³/3'],
      answer: 2,
      why: 'Exactly. The 2 hops down, the exponent drops to 1: 2x¹ = 2x — the very formula the derivatives lesson built with shrinking windows.',
      reExplain: {
        analogy: 'The receipt matches the register.',
        text: 'Last lesson you computed this the slow, honest way: average slopes 7, 6.1, 6.01 → 6 at x = 3, and 2x in general. The power rule is the register printing that same receipt instantly: exponent 2 down front, power drops to 1, done. When a shortcut reproduces the hard-earned answer, you can trust it on curves you\'ve never met.',
      },
    },
    {
      id: 'c3',
      question: 'The derivative of f(x) = 5x is...',
      choices: ['5', '0', '5x', 'x'],
      answer: 0,
      why: "Clean. 5x is a straight line with slope 5 — and a line's rate of change is its slope, everywhere. (Power rule view: 5x¹ → 5 · 1 · x⁰ = 5.)",
      reExplain: {
        analogy: 'Cruise control, again.',
        text: 'y = 5x is a car on cruise control from the derivatives lesson: 5 units of climb for every unit forward, at every single moment. Its speedometer is pinned at 5 — constant. The power rule agrees: the exponent 1 hops down, x¹ drops to x⁰ = 1, leaving just the 5. Lines are the one case where you already knew the derivative before calculus had a name.',
      },
    },
    {
      id: 'c4',
      question: 'The derivative of x³ + x² is...',
      choices: ['x⁴ + x³', '3x² + 2x', '6x³', '3x + 2'],
      answer: 1,
      why: "That's the one. Differentiate term by term: x³ → 3x², x² → 2x, then keep the plus sign. Sums stay sums.",
      reExplain: {
        analogy: 'Two runners, one scoreboard.',
        text: 'Two runners on parallel tracks: their combined distance changes at their combined speeds — you\'d never multiply their speedometers together. Functions added behave the same way: the rate of a sum is the sum of the rates. Run the power rule on each term separately (3x² and 2x) and add. That\'s the whole sum rule.',
      },
    },
    {
      id: 'c5',
      question: 'The derivative of the constant function f(x) = 12 is...',
      choices: ['12', '12x', 'Undefined', '0'],
      answer: 3,
      why: 'Locked in. y = 12 graphs as a flat horizontal line — nothing changes, so the rate of change is 0 everywhere.',
      reExplain: {
        analogy: 'A parked car.',
        text: "A parked car's position is constant: p(t) = 12 meters from the corner, all afternoon. What does its speedometer read? Zero — position isn't changing, so its rate of change is 0. Every constant is a parked car: flat graph, zero slope, derivative 0. That's also why the +2 in y = 5x + 2 vanished when you differentiated last lesson.",
      },
    },
  ],
}
