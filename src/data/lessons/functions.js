// Pre-Calculus · Lesson 1 — Functions
export default {
  id: 'functions',
  subjectId: 'pre-calculus',
  order: 1,
  title: 'Functions: Math\'s Vending Machines',
  icon: '🎰',
  estMinutes: 10,
  tagline: 'Input goes in, rule runs, exactly one output comes out.',
  prereqs: ['slope-intercept', 'quadratics'],

  plainIdea:
    'A function is a machine with a rule inside: feed it an input, it applies the rule, and exactly ONE output comes out. f(x) = 2x + 1 is a machine named f whose rule is "double it, add one." You\'ve already used functions — every line and parabola was one.',

  vocab: [
    {
      term: 'function',
      means: 'A rule that assigns each input exactly one output. Same input in, same output out — every time.',
    },
    {
      term: 'input & output',
      means: 'What you feed in (usually called x) and what comes out (the value of the function).',
    },
    {
      term: 'f(x) notation',
      means: 'Read "f of x" — the machine named f, fed the input x. f(3) means "run the machine on 3." It does NOT mean f times x.',
    },
    {
      term: 'domain',
      means: 'The set of inputs the machine accepts. (You can\'t divide by zero, so x = 0 isn\'t in the domain of 1/x.)',
    },
  ],

  hook: "Press B4 on a vending machine and you get the same bag of chips. Every time. Press it tomorrow: same chips. A machine that sometimes drops chips and sometimes drops a soda when you press B4 is a BROKEN machine. Congratulations — you now understand the single most important definition in all of higher math.",

  analogy: {
    analogy:
      "A function is a vending machine. The button you press is the input. The snack that drops is the output. The wiring inside — 'B4 releases chips' — is the rule. The one law of function-hood: each button gives exactly ONE snack, reliably. Different buttons may drop the SAME snack (that's fine — two buttons for water), but one button may never surprise you with different snacks on different days.",
    bridge:
      "In symbols: f(x) = 2x + 1 defines a machine named f. The rule: take the input, double it, add 1. 'f(3)' means 'press the 3 button': f(3) = 2(3) + 1 = 7. One input, one output, forever. And here's the plot twist — you've been using functions all along: y = mx + b is a machine (input x, output the height of the line), and y = x² is a machine (input x, output its square). The f(x) notation just gives the machine a NAME, so we can talk about several at once: f, g, h…",
  },

  worked: {
    problem: 'Given f(x) = x² − 3, find f(4) and f(−2).',
    steps: [
      {
        label: 'Read the machine\'s rule',
        do: 'f\'s rule: take the input, square it, then subtract 3.',
        why: "The 'x' in the definition is a placeholder — a labeled slot where the input will go. It's the locker idea from algebra, working a full-time job now.",
        result: 'rule: square, then − 3',
      },
      {
        label: 'Press the 4 button',
        do: 'f(4) = (4)² − 3 = 16 − 3 = 13.',
        why: 'Substitute 4 into every x-slot, then follow order of operations: exponent first, then subtract.',
        result: 'f(4) = 13',
      },
      {
        label: 'Press the −2 button',
        do: 'f(−2) = (−2)² − 3 = 4 − 3 = 1.',
        why: 'Negative inputs are welcome. Keep the parentheses! (−2)² = +4, because squaring wipes the minus sign (quadratics flashback).',
        result: 'f(−2) = 1',
      },
      {
        label: 'Confirm it behaves like a function',
        do: 'Each input produced exactly one output: 4 → 13, −2 → 1. Ask again tomorrow, get the same answers.',
        why: "That reliability is the entire definition. If f(4) could be 13 today and 9 tomorrow, no formula, graph, or physics equation could ever be trusted.",
        result: '4 → 13, −2 → 1 ✓',
      },
    ],
    answer: 'f(4) = 13 and f(−2) = 1',
  },

  yourTurn: [
    {
      id: 'fn1',
      context: 'Confidence builder — run the machine.',
      prompt: 'If f(x) = 3x − 2, what is f(5)?',
      type: 'number',
      answer: 13,
      hint: 'Drop 5 into the x-slot: 3(5) − 2. Multiply first.',
    },
    {
      id: 'fn2',
      context: 'A machine with a square inside.',
      prompt: 'If f(x) = x² + 1, what is f(3)?',
      type: 'number',
      answer: 10,
      hint: 'Square the input first (3² = 9), then add 1.',
    },
    {
      id: 'fn3',
      context: 'A twist — run the machine BACKWARDS.',
      prompt: 'If g(x) = 10 − x, what input x makes g(x) = 4?',
      type: 'number',
      answer: 6,
      hint: 'You know the output (4); find the button. Solve 10 − x = 4 — one-step equation skills.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'If f(x) = 5x, what is f(2)?',
      choices: ['10', '52', '7', '25'],
      answer: 0,
      why: 'Right. Feed 2 into the rule "multiply by 5": f(2) = 5 × 2 = 10.',
      reExplain: {
        analogy: 'The x-slot.',
        text: 'f(x) = 5x means "whatever lands in the x-slot gets multiplied by 5." Put 2 in the slot: 5(2) = 10. Careful: f(2) is not "f times 2" and 52 is not "5 next to 2" — the notation means RUN the machine on 2.',
      },
    },
    {
      id: 'c2',
      question: 'To count as a function, a rule must give...',
      choices: [
        'Many outputs for each input',
        'Exactly one output for each input',
        'No outputs at all',
        'Only positive outputs',
      ],
      answer: 1,
      why: 'Exactly. One input → one output, dependably. That predictability is the entire definition.',
      reExplain: {
        analogy: 'The broken vending machine.',
        text: "Press B4, get chips. Press B4 again, get… a soda? That machine is broken, and as a math rule it's disqualified. Note the direction: two DIFFERENT buttons can drop the same snack (f(2) = f(−2) = 4 for the squaring machine — totally legal). What's illegal is one button dropping different snacks.",
      },
    },
    {
      id: 'c3',
      question: 'In f(x) = x + 3, the x is...',
      choices: ['The output', 'The input (a placeholder for what you feed in)', 'The function\'s name', 'Always equal to 3'],
      answer: 1,
      why: "That's the one. x is the labeled slot where the input goes; f is the machine's name; x + 3 is what comes out.",
      reExplain: {
        analogy: 'A form with a blank.',
        text: 'f(x) = x + 3 is like a form that reads: "Dear ____, your total is ____ + 3." The x is the blank. Fill it with 10 and the form reads f(10) = 13. The letter never had a secret value — it\'s a reusable blank, same as the variable-as-locker from Algebra I.',
      },
    },
    {
      id: 'c4',
      question: 'Which everyday thing behaves most like a function?',
      choices: [
        'Rolling a die',
        'A vending machine button',
        'A lottery ticket',
        'A coin flip',
      ],
      answer: 1,
      why: 'Clean. Same button, same snack, every time. Dice, lotteries, and coins give different outputs for the same "input" — not functions.',
      reExplain: {
        analogy: 'Predictable vs. random.',
        text: 'The function test: if I repeat the same input, am I GUARANTEED the same output? Vending machine: yes (B4 → chips, always). Die roll: no (same throw motion → 1 through 6, who knows). Functions are the predictable machines; randomness belongs to probability class — which, fun fact, is also on your path.',
      },
    },
    {
      id: 'c5',
      question: 'If f(x) = x², what is f(−5)?',
      choices: ['−25', '25', '−10', '10'],
      answer: 1,
      why: 'Locked in. (−5)² = (−5)(−5) = +25. The squaring machine erases minus signs.',
      reExplain: {
        analogy: 'Parentheses are armor.',
        text: 'Substituting a negative input, wrap it in parentheses: f(−5) = (−5)². That\'s (−5) × (−5) = +25, since negative × negative = positive. Without the armor you might read it as −(5²) = −25 — a different (and wrong) machine. Quadratics taught this; functions never forget it.',
      },
    },
  ],
}
