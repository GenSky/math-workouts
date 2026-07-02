// Calculus I · Lesson 2 — The Chain Rule
export default {
  id: 'chain-rule',
  subjectId: 'calculus-1',
  order: 3,
  title: 'The Chain Rule: Rates Multiply',
  icon: '⛓️',
  estMinutes: 12,
  tagline: 'A function inside a function? Multiply the rates.',
  prereqs: ['power-rule', 'functions'],

  plainIdea:
    'The chain rule finds the derivative of a function INSIDE another function — like (3x)², where "3x" is fed into the squaring machine. The rule: multiply the outer machine\'s rate by the inner machine\'s rate. Rates multiply.',

  vocab: [
    {
      term: 'composite function',
      means: 'A machine fed into another machine: f(g(x)) means "run g first, feed its output into f."',
    },
    {
      term: 'inner function',
      means: 'The machine that runs FIRST — the g in f(g(x)). In (3x)², the inner function is 3x.',
    },
    {
      term: 'outer function',
      means: 'The machine that runs LAST — the f in f(g(x)). In (3x)², the outer function is "square it."',
    },
    {
      term: 'chain rule',
      means: 'The derivative of f(g(x)) is f′(g(x)) × g′(x): the outer rate (evaluated at the inner value) times the inner rate.',
    },
  ],

  hook: "You're biking. Each pedal stroke turns the wheel 3 times, and each wheel turn moves you 2 meters. Quick: how many meters does one pedal stroke buy you? You just said 6 — you multiplied the rates without blinking. Congratulations: you used the chain rule, the single most-used tool in all of calculus.",

  analogy: {
    analogy:
      "Think of connected gears, or a currency exchange chain. Dollars to euros at rate 2, euros to yen at rate 3: dollars to yen at rate 2 × 3 = 6. Whenever change flows through a middleman — pedal → wheel → road; dollars → euros → yen; x → g → f — the end-to-end rate is the PRODUCT of the step rates. Rates through a chain multiply. That's the entire theorem; everything else is bookkeeping.",
    bridge:
      "Composite functions are exactly this chain: in h(x) = (3x)², the input x flows through the inner machine (times 3) and the result flows through the outer machine (square it). The chain rule says: h′(x) = [outer\'s derivative, evaluated at the inner value] × [inner\'s derivative]. The outer machine is u² with derivative 2u — but the u it's squaring is 3x, so that piece is 2(3x). The inner machine 3x has derivative 3. Multiply: h′(x) = 2(3x) × 3 = 18x. The classic mistake is forgetting the ×3 — stopping after the outer derivative and leaving the inner rate unclaimed.",
  },

  worked: {
    problem: 'Differentiate h(x) = (3x)² using the chain rule — then verify the answer by expanding.',
    steps: [
      {
        label: 'Identify the chain: inner and outer',
        do: 'Inner machine: g(x) = 3x (runs first). Outer machine: square whatever arrives.',
        why: 'The chain rule needs to know who\'s who. Read composite functions inside-out, like a vending machine feeding a second vending machine.',
        result: 'inner: 3x · outer: (·)²',
      },
      {
        label: "Differentiate the outer, keeping the inner intact",
        do: 'The squaring machine u² has derivative 2u (power rule from last lesson). With u = 3x: that\'s 2(3x).',
        why: "Differentiate the OUTER machine at the value it actually receives — don't touch the inside yet. This is the 'outer rate at the inner value' piece.",
        result: '2(3x)',
      },
      {
        label: "Multiply by the inner machine's rate",
        do: 'The inner machine 3x has derivative 3. So h′(x) = 2(3x) × 3 = 18x.',
        why: "The inner gear is ALSO turning — x into 3x means change flows in 3× faster. Skip this factor and you've priced the trip dollars-to-euros but forgotten euros-to-yen.",
        result: 'h′(x) = 18x',
      },
      {
        label: 'Verify by brute force',
        do: 'Expand first instead: (3x)² = 9x². Its derivative (power rule): 18x. ✓ Same answer.',
        why: 'For simple chains you can check by expanding — and the chain rule always agrees. Its real power comes when expanding is impossible (think sin(x²)), which is most of real calculus.',
        result: '18x ✓ both ways',
      },
    ],
    answer: "h′(x) = 18x — outer rate × inner rate",
  },

  yourTurn: [
    {
      id: 'ch1',
      context: 'Confidence builder — rates multiplying, no symbols.',
      prompt: 'Each box holds 4 bags, and each bag holds 6 candies. How many candies per box?',
      type: 'number',
      answer: 24,
      hint: 'Candy per bag × bags per box. Rates through a chain multiply.',
    },
    {
      id: 'ch2',
      context: 'Run the two-step recipe.',
      prompt: "h(x) = (5x)². Chain rule: h′(x) = 2(5x) × 5 = 50x. What is h′(1)?",
      type: 'number',
      answer: 50,
      hint: 'Feed 1 into the slope formula 50x.',
    },
    {
      id: 'ch3',
      context: 'A twist — the pure idea, no formulas at all.',
      prompt: 'y changes 3 times as fast as u, and u changes 2 times as fast as x. How many times faster than x does y change?',
      type: 'number',
      answer: 6,
      hint: 'Two gears in a chain: multiply their rates.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The chain rule computes the derivative of...',
      choices: [
        'A sum of two functions',
        'A function nested inside another function',
        'Fractions only',
        'Constants',
      ],
      answer: 1,
      why: 'Right — composites, like (3x)² or sin(x²): one machine feeding another.',
      reExplain: {
        analogy: 'Spot the nesting doll.',
        text: 'The chain rule\'s calling card is a function INSIDE a function — a nesting doll. (3x)²: the 3x doll sits inside the squaring doll. Plain x² needs no chain rule (one doll). The moment you see something OTHER than a bare x being squared, sine\'d, or square-rooted — that\'s a chain.',
      },
    },
    {
      id: 'c2',
      question: 'The core idea of the chain rule is that rates...',
      choices: ['Add together', 'Subtract', 'Multiply together', 'Cancel out'],
      answer: 2,
      why: 'Exactly. Change flows through the chain, and each link scales it: the end-to-end rate is the product.',
      reExplain: {
        analogy: 'The currency chain.',
        text: 'Dollars→euros at 2, euros→yen at 3. One extra dollar becomes 2 extra euros becomes 6 extra yen. The rates multiplied (2 × 3), they didn\'t add (5) — adding would ignore that the second exchange scales the OUTPUT of the first. Every chain-rule computation is this exchange booth in disguise.',
      },
    },
    {
      id: 'c3',
      question: 'In (2x + 1)³, the INNER function is...',
      choices: ['Cubing', '2x + 1', 'The 3', 'x³'],
      answer: 1,
      why: "That's the one. 2x + 1 runs first; its output gets fed into the cubing machine.",
      reExplain: {
        analogy: 'Order of the assembly line.',
        text: 'Trace an input through: x arrives, gets doubled-plus-one FIRST (inner machine: 2x + 1), and that result is what gets cubed (outer machine). Inner = first to touch x = the thing wrapped inside the parentheses. Outer = the last operation applied = the wrapper.',
      },
    },
    {
      id: 'c4',
      question: 'A wheel turns 3 times per pedal stroke, and you pedal 2 strokes per second. How many wheel turns per second?',
      choices: ['5', '6', '1.5', '9'],
      answer: 1,
      why: 'Clean. 3 turns/stroke × 2 strokes/second = 6 turns/second. The chain rule with grease on it.',
      reExplain: {
        analogy: 'Follow one second of pedaling.',
        text: 'In one second you pedal 2 strokes. EACH stroke spins the wheel 3 times. Two strokes → 3 + 3 = 6 turns. That "each" is why it\'s multiplication: the second rate applies to every unit produced by the first. wheel-per-second = wheel-per-stroke × strokes-per-second — notice how "strokes" cancels, like units in a fraction.',
      },
    },
    {
      id: 'c5',
      question: 'h(x) = (4x)². Using the chain rule, h′(x) = ?',
      choices: ['8x', '16x', '32x', '4'],
      answer: 2,
      why: 'Locked in. Outer: 2(4x) = 8x… times the inner rate 4 → 32x. Check by expanding: (4x)² = 16x² → 32x ✓.',
      reExplain: {
        analogy: 'The forgotten gear.',
        text: '8x is the trap — that\'s the outer derivative 2(4x) with the inner rate abandoned. The inside isn\'t a bare x; it\'s 4x, turning 4 times faster, and the chain must bill for it: 2(4x) × 4 = 32x. Always verify when you can: (4x)² = 16x², and 16x² differentiates to 32x. The chain rule never disagrees with brute force — it just scales to problems brute force can\'t touch.',
      },
    },
  ],
}
