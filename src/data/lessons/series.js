// Calculus II · Lesson 2 — Infinite Series
export default {
  id: 'series',
  subjectId: 'calculus-2',
  order: 2,
  title: 'Series: Adding Forever',
  icon: '🪜',
  estMinutes: 12,
  tagline: 'Add infinitely many numbers… and sometimes get a normal answer.',
  prereqs: ['limits-intro', 'exponents'],

  plainIdea:
    'A series is what you get when you add up an endless list of numbers. The shocker: some infinite sums settle on a perfectly finite answer — ½ + ¼ + ⅛ + … adds up to exactly 1. Others blow up to infinity. Telling the two apart is the game.',

  vocab: [
    {
      term: 'sequence',
      means: 'An ordered, endless list of numbers: ½, ¼, ⅛, … (Just the list — nothing added yet.)',
    },
    {
      term: 'series',
      means: 'The SUM of a sequence: ½ + ¼ + ⅛ + … The plus signs are the whole difference.',
    },
    {
      term: 'converge',
      means: 'To settle on a finite value. The running totals home in on one number and stay there.',
    },
    {
      term: 'diverge',
      means: 'To NOT settle — the running totals grow without bound (or bounce forever). 1 + 1 + 1 + … diverges.',
    },
  ],

  hook: "Eat half a cake. Then half of what's left. Then half of THAT. You take infinitely many bites — an actual infinite number of them — yet you never eat more than one cake. Infinitely many positive amounts, adding to exactly 1. If that doesn't feel slightly illegal, read it again. Proving it's legal is this lesson.",

  analogy: {
    analogy:
      "The cake bites are ½, ¼, ⅛, 1/16, … — each bite half the previous one (halving = dividing by 2 over and over: exponents running in reverse, since bite #n is 1/2ⁿ). Now watch your running total after each bite: ½, then ¾, then ⅞, then 15/16… Each total halves the remaining gap to 1 — but never crosses it, because there's always half-a-gap left. The totals march toward 1 like the walker toward the wall in the limits lesson. Destination: 1. Arrival: never. Sum: exactly 1.",
    bridge:
      "That's the formal definition, straight up: the value of an infinite series IS the limit of its partial sums (the running totals). Partial sums ½, ¾, ⅞, 15/16, … approach 1, so we say the series CONVERGES to 1. No limit, no sum: for 1 + 1 + 1 + …, the partial sums are 1, 2, 3, 4, … — heading to infinity, settling nowhere — so that series DIVERGES. The entire subject of series is asking one question over and over: do the partial sums have a destination?",
  },

  worked: {
    problem: 'Show that ½ + ¼ + ⅛ + 1/16 + … adds up to exactly 1.',
    steps: [
      {
        label: 'Write out the running totals (partial sums)',
        do: 'After 1 term: ½. After 2: ½ + ¼ = ¾. After 3: ⅞. After 4: 15/16.',
        why: 'An infinite sum can\'t be computed by "just adding forever" — nobody finishes. Instead we study the partial sums: real, finite numbers we CAN compute, one per step.',
        result: '½, ¾, ⅞, 15/16, …',
      },
      {
        label: 'Spot the pattern in the gap',
        do: 'Distance to 1 after each step: ½, ¼, ⅛, 1/16 — the gap HALVES every time.',
        why: 'Each new bite is exactly half the remaining cake, so it closes half the remaining gap. The leftover after n bites is 1/2ⁿ — an exponent driving the gap toward 0.',
        result: 'gap after n bites = 1/2ⁿ',
      },
      {
        label: 'Take the limit of the partial sums',
        do: 'As n grows, 1/2ⁿ → 0, so the partial sums 1 − 1/2ⁿ → 1.',
        why: 'This is the limits lesson cashing its check: the partial sums form a parade, and the parade\'s destination is 1. By definition, that destination IS the series\' value.',
        result: 'partial sums → 1',
      },
      {
        label: 'Say it precisely',
        do: 'The series converges, and ½ + ¼ + ⅛ + … = 1. Not "approximately 1" — exactly 1.',
        why: 'The sum never "finishes," but its value is still perfectly defined — as a limit. Infinitely many positive numbers, one finite total. This is how calculus adds forever without breaking.',
        result: '½ + ¼ + ⅛ + … = 1 ✓',
      },
    ],
    answer: 'The partial sums approach 1, so the infinite sum IS 1',
  },

  yourTurn: [
    {
      id: 'se1',
      context: 'Confidence builder — the first two bites.',
      prompt: 'What is ½ + ¼? Type it as a fraction like 3/4.',
      type: 'text',
      answer: '3/4',
      accepted: ['0.75', '.75', '6/8', '3 / 4'],
      hint: 'Recut the half into quarters: 2/4 + 1/4. (Fraction skills — still undefeated.)',
    },
    {
      id: 'se2',
      context: 'Read the parade of partial sums.',
      prompt: 'The running totals of the cake series are ½, ¾, ⅞, 15/16, 31/32, … What single number are they approaching?',
      type: 'number',
      answer: 1,
      hint: 'Look at the gap to the next whole number: ½, ¼, ⅛, … shrinking to nothing.',
    },
    {
      id: 'se3',
      context: 'A twist — not every series behaves.',
      prompt: 'Does 1 + 1 + 1 + 1 + … settle on a finite number? Type yes or no.',
      type: 'text',
      answer: 'no',
      accepted: ['n', 'nope', 'diverges', 'it diverges'],
      hint: 'Partial sums: 1, 2, 3, 4, … Is that parade heading anywhere in particular?',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'A series is...',
      choices: [
        'An ordered list of numbers',
        'The SUM of an endless list of numbers',
        'A type of graph',
        'Another name for a function',
      ],
      answer: 1,
      why: 'Right — the list alone is a sequence; put plus signs between the terms and it becomes a series.',
      reExplain: {
        analogy: 'Playlist vs. total runtime.',
        text: 'A sequence is the playlist: track 1, track 2, track 3, … A series asks one question about it: what\'s the TOTAL runtime? Same songs, different object — the sequence is the list, the series is the sum. (An infinite playlist can still have finite runtime, if the tracks shrink fast enough. That\'s the whole surprise of this lesson.)',
      },
    },
    {
      id: 'c2',
      question: '½ + ¼ + ⅛ + 1/16 + … converges to...',
      choices: ['2', '1', '½', 'It diverges to infinity'],
      answer: 1,
      why: 'Clean. Each bite halves the remaining gap to 1 — the partial sums ½, ¾, ⅞, … have destination exactly 1.',
      reExplain: {
        analogy: 'One cake, forever.',
        text: 'You only ever had one cake. Every bite comes out of what\'s LEFT of it — half the remainder each time — so no amount of bites, even infinitely many, can total more than the one cake. And since the leftover shrinks to zero, the total climbs to the full cake: exactly 1. Not 2 (you\'d need a second cake) and not infinity.',
      },
    },
    {
      id: 'c3',
      question: 'A series whose partial sums settle on a finite value is said to...',
      choices: ['Diverge', 'Converge', 'Oscillate', 'Terminate'],
      answer: 1,
      why: "That's the one. Converge = come together on a destination. It's the series version of a limit existing.",
      reExplain: {
        analogy: 'The landing plane.',
        text: 'Watch the partial sums like a plane\'s altitude: ½, ¾, ⅞, 15/16 … descending smoothly onto the runway at 1 — that\'s convergence, a safe landing at a definite spot. A diverging series never lands: 1, 2, 3, 4, … climbs forever. "Converge" is just Latin for "lean together" — the totals lean into their destination.',
      },
    },
    {
      id: 'c4',
      question: 'What about 1 + 2 + 4 + 8 + 16 + … (each term doubling)?',
      choices: [
        'Converges to 16',
        'Converges to 0',
        'Diverges — the total grows without bound',
        'Equals exactly −1',
      ],
      answer: 2,
      why: 'Exactly. The terms GROW (powers of 2!), so the partial sums 1, 3, 7, 15, 31, … rocket off to infinity.',
      reExplain: {
        analogy: 'Shrinking bites vs. growing bites.',
        text: 'The cake series worked because bites SHRANK fast enough to fit inside one cake. Here the bites double — the paper-folding explosion from the exponents lesson, running in fast-forward. Partial sums 1, 3, 7, 15, … (always one less than the next power of 2) have no ceiling and no destination. Rule of thumb: a series can only hope to converge if its terms shrink toward zero.',
      },
    },
    {
      id: 'c5',
      question: 'The value of an infinite series is DEFINED as...',
      choices: [
        'The last term you write down',
        'The limit of its partial sums',
        'The biggest partial sum',
        'Whatever the calculator says',
      ],
      answer: 1,
      why: 'Locked in. There is no "last term" — the running totals\' destination IS the sum. Limits, one more time, holding up the roof.',
      reExplain: {
        analogy: 'The destination, not the arrival.',
        text: 'Nobody can finish an infinite addition — so math defines the answer as a destination instead: compute the running totals, watch where they head, and call THAT the sum. It\'s the wall-walker from the limits lesson one final time: never arrives, destination undeniable. Every "infinite sum" in mathematics — and they power everything from π calculations to your phone\'s signal processing — is secretly a limit of finite sums.',
      },
    },
  ],
}
