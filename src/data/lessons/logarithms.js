// Pre-Calculus · Lesson 3 — Logarithms: The Exponent Detective
export default {
  id: 'logarithms',
  subjectId: 'pre-calculus',
  order: 3,
  title: 'Logarithms: The Exponent Detective',
  icon: '🔎',
  estMinutes: 11,
  tagline: 'One question, always: what exponent gets me there?',
  prereqs: ['exponential-growth', 'functions'],

  plainIdea:
    'A logarithm asks one question: "what exponent turns the base into this number?" log₂(32) = 5 because 2⁵ = 32 — the log hunts down the missing exponent. Logs undo exponentials the same way division undoes multiplication.',

  vocab: [
    {
      term: 'logarithm (log)',
      means: 'The missing-exponent finder. log₂(32) asks "2 to what power makes 32?" and answers 5.',
    },
    {
      term: 'base',
      means: 'The small number under the log — the number doing the multiplying. In log₂, the base is 2; in log₁₀, it\'s 10.',
    },
    {
      term: 'exponent',
      means: 'How many times the base multiplies itself. In 2⁵ = 32, the exponent is 5 — and that\'s exactly what the log digs up.',
    },
    {
      term: 'log scale',
      means: 'A ruler where each step means "times 10" instead of "plus 1." How scientists chart earthquakes and sound.',
    },
  ],

  hook: "A magnitude 7 earthquake isn't 'a bit worse' than a magnitude 5 — it shakes the ground one hundred times harder. That scale, the decibels on your headphones, and the pH in your shampoo all speak the same secret language. It's the reverse gear of the exponential growth you already know — and it's called a logarithm.",

  analogy: {
    analogy:
      "Exponentials and logarithms are the same ladder, climbed in opposite directions. Picture a ladder where every rung MULTIPLIES: standing on the ground with a 2, each rung up doubles you — 2, 4, 8, 16, 32. The exponential question climbs: 'if I take 5 rungs, where do I end up?' The logarithm question looks down from the destination: 'I'm standing at 32 — how many rungs did I climb?' Same ladder, one question per direction.",
    bridge:
      "In symbols: 2⁵ = 32 (climbing) and log₂(32) = 5 (counting rungs) are the SAME FACT written in two directions. In general, logₐ(N) = x means exactly aˣ = N. This is the undo-pair pattern you've seen since arithmetic: division undoes multiplication, and logs undo exponentials — feed the exponential machine's output into the log machine (base matching base) and your original exponent walks back out. Base 10 is the everyday favorite: log₁₀(1000) = 3, and notice that 1000 has exactly 3 zeros. Not a coincidence — base-10 logs count zeros.",
  },

  worked: {
    problem: 'The bacteria colony from exponential growth follows 2ⁿ. It hit 32 times its starting size — how many doublings happened? That question IS log₂(32).',
    steps: [
      {
        label: 'Restate it as an exponent hunt',
        do: 'We need the mystery exponent in 2^? = 32.',
        why: 'That\'s all a logarithm is — the question "what exponent?" wearing a trench coat. Spotting the hidden 2^? = 32 inside "how many doublings?" is the whole skill.',
        result: 'find ? where 2^? = 32',
      },
      {
        label: 'Climb the doubling ladder',
        do: 'Start at 2 and keep doubling: 2, 4, 8, 16, 32.',
        why: 'Each doubling is one rung — one more factor of 2. This is the same colony from exponential growth; we\'re just replaying its history rung by rung until we hit the target.',
        result: '2 → 4 → 8 → 16 → 32: five rungs',
      },
      {
        label: 'Count the rungs — that IS the log',
        do: 'Five rungs to reach 32, so log₂(32) = 5.',
        why: 'The log is the RUNG COUNT. Check by climbing back up: 2⁵ = 2×2×2×2×2 = 32 ✓. Exponential climbs, log counts — same ladder, opposite directions.',
        result: 'log₂(32) = 5',
      },
      {
        label: 'Same trick, base 10',
        do: 'log₁₀(1000) asks 10^? = 1000. Climb: 10, 100, 1000 — three rungs. log₁₀(1000) = 3.',
        why: 'New base, same detective work. And base 10 has a shortcut: 1000 has three zeros, and each zero is one factor of 10. For powers of 10, just count the zeros.',
        result: 'log₁₀(1000) = 3',
      },
    ],
    answer: 'log₂(32) = 5 — five doublings',
  },

  yourTurn: [
    {
      id: 'lg1',
      context: 'Confidence builder — a short ladder.',
      prompt: 'log₂(8) = ?',
      type: 'number',
      answer: 3,
      hint: 'Ask it as an exponent hunt: 2^? = 8. Climb: 2, 4, 8 — count the rungs.',
    },
    {
      id: 'lg2',
      context: 'Switch to base 10.',
      prompt: 'log₁₀(100) = ?',
      type: 'number',
      answer: 2,
      hint: '10^? = 100. Shortcut: count the zeros in 100.',
    },
    {
      id: 'lg3',
      context: 'A twist — a base you haven\'t used yet.',
      prompt: 'log₃(81) = ?',
      type: 'number',
      answer: 4,
      hint: 'Climb the tripling ladder: 3, 9, 27, 81 — count the rungs.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'log₂(16) is really asking...',
      choices: [
        'What is 2 × 16?',
        '2 raised to what exponent gives 16?',
        'What is 16 ÷ 2?',
        'What is 2 raised to the 16th power?',
      ],
      answer: 1,
      why: 'Right — every log is the same question: "base to WHAT power makes this number?" Here: 2⁴ = 16, so log₂(16) = 4.',
      reExplain: {
        analogy: 'The fill-in-the-blank.',
        text: 'A logarithm is an exponent equation with a blank in the exponent spot: 2^▢ = 16. The log IS the blank\'s value. It\'s not multiplication (2 × 16 = 32) and not division (16 ÷ 2 = 8) — those traps use the two numbers directly. The log\'s answer, 4, doesn\'t appear in the problem at all. It has to be hunted.',
      },
    },
    {
      id: 'c2',
      question: 'Logs and exponentials are related the way...',
      choices: [
        'Addition relates to multiplication',
        'Squares relate to cubes',
        'Division relates to multiplication — each undoes the other',
        'Fractions relate to decimals',
      ],
      answer: 2,
      why: 'Exactly. Multiply by 7, divide by 7 — you\'re home. Raise 2 to the 5th, take log base 2 — the 5 comes right back.',
      reExplain: {
        analogy: 'Zip and unzip.',
        text: 'The exponential machine zips an exponent into a big number: feed it 5, out comes 2⁵ = 32. The log machine (same base!) unzips it: feed it 32, out comes 5. Run one after the other and you get back exactly what you started with — the functions lesson would call them inverse machines. That undo power is why logs exist: they solve for exponents trapped inside equations.',
      },
    },
    {
      id: 'c3',
      question: 'log₁₀(10000) = ?',
      choices: ['3', '5', '1000', '4'],
      answer: 3,
      why: "That's the one. 10⁴ = 10,000 — four factors of 10, and sure enough, four zeros.",
      reExplain: {
        analogy: 'The zero odometer.',
        text: 'Every time you multiply by 10, you bolt one more zero onto the number: 10, 100, 1000, 10000. A base-10 log just reads that odometer — 10000 wears four zeros, so it took four multiplications: log₁₀(10000) = 4. (The trap answer 3 comes from miscounting — that\'s log of 1,000, one zero short.)',
      },
    },
    {
      id: 'c4',
      question: 'log₅(1) = ?',
      choices: ['0', '1', '5', 'It\'s undefined'],
      answer: 0,
      why: 'Clean. 5⁰ = 1, so the exponent that turns 5 into 1 is 0. Same in every base: the log of 1 is always 0.',
      reExplain: {
        analogy: 'Zero rungs climbed.',
        text: 'On the multiplying ladder, 1 is the ground floor — it\'s where you stand before ANY multiplying happens. "How many rungs did you climb to reach the ground floor?" Zero. Doesn\'t matter if the rungs are doublings, triplings, or times-fives: anything⁰ = 1, so logₐ(1) = 0 for every base a. The number 1 is the universal starting line.',
      },
    },
    {
      id: 'c5',
      question: 'Why do scientists use a log scale for earthquakes and sound?',
      choices: [
        'It makes the numbers look more impressive',
        'The quantities range so enormously that each scale step is set to mean "×10," squeezing huge ranges into small numbers',
        'Logs are easier to add than whole numbers',
        'Because measuring devices can only display one digit',
      ],
      answer: 1,
      why: 'Locked in. A whisper-to-jet-engine range spans trillions; on a log scale that whole spread fits between roughly 0 and 130 decibels.',
      reExplain: {
        analogy: 'Filing by zip code.',
        text: 'A mail room doesn\'t sort letters by street address first — it files by zip code to tame millions of addresses into a handful of bins. A log scale files numbers by their SIZE CLASS: each step up means ten times bigger. So magnitude 5 vs. magnitude 7 isn\'t "2 more" — it\'s two ×10 steps, 100 times the shaking. Log scales exist because nature\'s ranges are exponential, and logs are the tool that unwinds exponentials.',
      },
    },
  ],
}
