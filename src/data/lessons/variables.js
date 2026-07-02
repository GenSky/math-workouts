// Algebra I · Lesson 1 — What is a Variable?
export default {
  id: 'variables',
  subjectId: 'algebra-1',
  order: 1,
  title: 'What is a Variable?',
  icon: '🔓',
  estMinutes: 8,
  tagline: 'The locker that always holds the same thing.',
  prereqs: ['order-of-operations'],

  plainIdea:
    'A variable is a letter (like x) standing in for a number we don\'t know yet. It\'s not scary — it\'s just a labeled box with a number hiding inside, and algebra is the game of figuring out what\'s in the box.',

  vocab: [
    {
      term: 'variable',
      means: 'A letter that stands in for a number — unknown for now, but findable. The x in x + 3 = 10.',
    },
    {
      term: 'coefficient',
      means: 'The number stuck to a variable by multiplication. In 4x, the 4 — it means "four of the thing called x."',
    },
    {
      term: 'expression',
      means: 'A math phrase built from numbers, variables, and operations, like 4x or t + 5. No equals sign yet.',
    },
    {
      term: 'equation',
      means: 'Two expressions declared equal, like 4x = 20. It\'s a complete sentence: "four x\'s make twenty."',
    },
  ],

  hook: "You walk into a gym you've never been to. Locker #47 has your stuff in it — your phone, your keys, your life. You don't know what's inside until you open it, but #47 always points to the same locker. That number is a variable.",

  analogy: {
    analogy:
      "A variable is like a locker at the gym. You don't know what's inside until you open it — but the locker number (we'll call it x) always points to the same thing within a problem. If x is locker #47 at the start of a problem, it's still #47 at the end. It doesn't sneak off and become something else halfway through.",
    bridge:
      "In math, a variable is a letter that stands in for a number we don't know yet (or one that can change). When you see 'x + 3 = 10', the x is a sealed locker. Our whole job in algebra is to open it and find out what number is hiding inside.",
  },

  worked: {
    problem: 'A coffee costs $4. You buy some number of coffees, x, and spend $20. Write that as an expression, then figure out what x represents.',
    steps: [
      {
        label: 'Name the unknown',
        do: 'Let x = the number of coffees.',
        why: "We don't know how many coffees yet, so we put a letter on it. x is now our sealed locker.",
        result: 'x = number of coffees',
      },
      {
        label: 'Translate words into math',
        do: 'Each coffee is $4, so the total cost is 4 · x, written 4x.',
        why: "'4 times the number of coffees' becomes 4x. The number stuck to the variable (the 4) is called a coefficient — it's how many of that locker you have.",
        result: '4x',
      },
      {
        label: 'Set it equal to what we know',
        do: 'You spent $20, so 4x = 20.',
        why: 'An equation is a balance scale: the left side (cost) must equal the right side ($20).',
        result: '4x = 20',
      },
      {
        label: 'Open the locker',
        do: 'What number times 4 gives 20? That\'s 5. So x = 5.',
        why: "We're not formally solving yet — just recognizing that x had a real value hiding inside the whole time: 5 coffees.",
        result: 'x = 5',
      },
    ],
    answer: 'x = 5 coffees',
  },

  // type: 'number' compares numerically; 'text' compares normalized strings.
  yourTurn: [
    {
      id: 'v1',
      context: 'Confidence builder — almost identical to the example.',
      prompt: 'A muffin costs $3. You buy x muffins and spend $18. The equation is 3x = 18. What is x?',
      type: 'number',
      answer: 6,
      hint: 'What number times 3 lands on 18?',
    },
    {
      id: 'v2',
      context: 'Same idea, new context.',
      prompt: "Let t = your age. In words, '5 more than your age' becomes which expression? Type it like t+5 (no spaces).",
      type: 'text',
      answer: 't+5',
      accepted: ['5+t', 't + 5', '5 + t'],
      hint: "'More than' means addition. Stick the 5 onto t.",
    },
    {
      id: 'v3',
      context: 'A slight twist — read carefully.',
      prompt: "A variable x stands for one fixed number inside a problem. True or false: x can secretly be 2 on the left side of an equation and 9 on the right side at the same time. Answer 'true' or 'false'.",
      type: 'text',
      answer: 'false',
      accepted: ['f', 'no'],
      hint: 'Locker #47 is the same locker on both sides. The value of x is consistent everywhere in one problem.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: "In the expression 7y, what do we call the 7?",
      choices: ['The variable', 'The coefficient', 'The exponent', 'The sum'],
      answer: 1,
      why: 'Right — the number multiplying the variable is the coefficient. It tells you how many of that locker you have.',
      reExplain: {
        analogy: 'Think of a shopping cart.',
        text: "7y means 'seven of the thing called y.' The y is the item; the 7 is the quantity on your receipt. That quantity number is the coefficient. The variable is the item itself (y).",
      },
    },
    {
      id: 'c2',
      question: "Which of these is a variable?",
      choices: ['8', 'x', '+', '='],
      answer: 1,
      why: "Exactly — x is a letter standing in for an unknown number. That's a variable.",
      reExplain: {
        analogy: 'Sort the junk drawer.',
        text: "Numbers (8) are known. Symbols (+, =) are instructions. A variable is the one mystery item — a letter holding a number we haven't opened yet. Only x fits that description here.",
      },
    },
    {
      id: 'c3',
      question: "'Twice a number n' translates to which expression?",
      choices: ['n + 2', 'n - 2', '2n', 'n²'],
      answer: 2,
      why: "Clean. 'Twice' means times two, so 2n.",
      reExplain: {
        analogy: 'Photocopy machine.',
        text: "'Twice' = make 2 copies and stack them = 2 × n = 2n. It's not adding 2 (that's 'two more'), and it's not squaring (that's 'n times itself'). Doubling is multiplication by 2.",
      },
    },
    {
      id: 'c4',
      question: 'If 4x = 20, what number is hiding in the locker x?',
      choices: ['80', '16', '5', '24'],
      answer: 2,
      why: 'Locked in. 4 times 5 is 20, so x = 5.',
      reExplain: {
        analogy: 'Splitting a bill.',
        text: 'Four friends split a $20 tab evenly. Each pays $20 ÷ 4 = $5. The locker x holds the share: 5. To undo "times 4," you divide by 4.',
      },
    },
    {
      id: 'c5',
      question: 'Within a single problem, the value of a variable...',
      choices: [
        'changes every time you use it',
        'stays the same everywhere it appears',
        'is always zero',
        'must be a letter, never a number',
      ],
      answer: 1,
      why: "That's the one. Same locker, same contents, start to finish.",
      reExplain: {
        analogy: 'Your house key.',
        text: 'Your key opens your front door this morning and tonight — same key, same lock. A variable is consistent within one problem. It holds one value the whole way through; we just have to find it.',
      },
    },
  ],
}
