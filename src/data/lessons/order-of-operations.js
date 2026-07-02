// Pre-Algebra · Lesson 2 — Order of Operations
export default {
  id: 'order-of-operations',
  subjectId: 'pre-algebra',
  order: 2,
  title: 'Order of Operations',
  icon: '🚦',
  estMinutes: 9,
  tagline: 'Socks before shoes. Multiply before add.',
  prereqs: ['number-line'],

  plainIdea:
    'When a math expression has several steps, everyone agrees to do them in the same order — parentheses first, then multiply/divide, then add/subtract — so everyone gets the same answer.',

  vocab: [
    {
      term: 'expression',
      means: 'A math phrase, like 2 + 3 × 4. No equals sign — it\'s a calculation waiting to happen.',
    },
    {
      term: 'parentheses',
      means: 'The curved brackets ( ). They mean "do THIS part first, no matter what."',
    },
    {
      term: 'operation',
      means: 'A math action: add, subtract, multiply, or divide.',
    },
    {
      term: 'PEMDAS',
      means: 'The agreed order: Parentheses, Exponents, Multiply/Divide (left to right), Add/Subtract (left to right).',
    },
  ],

  hook: "2 + 3 × 4. Half the internet swears it's 20. The other half says 14. This exact problem starts comment-section wars every single year — and after the next five minutes, you'll be able to end one.",

  analogy: {
    analogy:
      "Getting dressed has an order. Socks, THEN shoes. Do it backwards and the result is nonsense — shoes with socks stretched over them. Math expressions are the same: the operations are clothes, and there's an agreed dressing order. It's not optional style advice; if two people dress the expression in different orders, they walk out with two different answers, and math stops working as a language.",
    bridge:
      "The agreed order is PEMDAS: Parentheses first, then Exponents (powers — you'll meet them properly in Algebra II), then Multiplication and Division together in one pass from left to right, then Addition and Subtraction together, left to right. So in 2 + 3 × 4, the multiplication dresses first: 3 × 4 = 12, then 2 + 12 = 14. The internet's '20' crowd put the shoes on first.",
  },

  worked: {
    problem: 'Evaluate:  20 − 2 × (1 + 5)',
    steps: [
      {
        label: 'Parentheses first',
        do: 'Inside the parentheses: 1 + 5 = 6.',
        why: "Parentheses are a VIP pass — whatever's inside skips the whole line. The expression becomes 20 − 2 × 6.",
        result: '20 − 2 × 6',
      },
      {
        label: 'Multiplication before subtraction',
        do: 'Next in line: 2 × 6 = 12.',
        why: "Even though the subtraction sits further left, multiplication outranks it. Left-to-right only breaks ties between equals.",
        result: '20 − 12',
      },
      {
        label: 'Now the subtraction',
        do: '20 − 12 = 8.',
        why: 'With the higher-ranked operations done, addition and subtraction finally get their turn.',
        result: '8',
      },
      {
        label: 'See why the order mattered',
        do: 'Wrong order — subtracting first — gives (20 − 2) × 6 = 108. Not even close.',
        why: '8 vs 108 from the same symbols. The order isn\'t decoration; it\'s the difference between right and wildly wrong.',
        result: '20 − 2 × (1 + 5) = 8 ✓',
      },
    ],
    answer: '8',
  },

  yourTurn: [
    {
      id: 'p1',
      context: 'Confidence builder — one multiplication hiding in the middle.',
      prompt: 'Evaluate:  4 + 2 × 5',
      type: 'number',
      answer: 14,
      hint: 'Multiplication goes first: 2 × 5 = 10, then add the 4.',
    },
    {
      id: 'p2',
      context: 'Same numbers — but the parentheses change everything.',
      prompt: 'Evaluate:  (4 + 2) × 5',
      type: 'number',
      answer: 30,
      hint: 'Parentheses jump the line: 4 + 2 = 6 first, THEN multiply by 5.',
    },
    {
      id: 'p3',
      context: 'A twist — division, then a left-to-right finish.',
      prompt: 'Evaluate:  18 − 12 ÷ 3 + 1',
      type: 'number',
      answer: 15,
      hint: 'Division first: 12 ÷ 3 = 4. Then work left to right: 18 − 4 + 1.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'In 5 + 2 × 3, which piece do you compute FIRST?',
      choices: ['5 + 2', '2 × 3', '5 × 3', 'Always just left to right'],
      answer: 1,
      why: 'Right. Multiplication outranks addition, so 2 × 3 = 6 happens first, then 5 + 6 = 11.',
      reExplain: {
        analogy: 'Boarding a plane.',
        text: "Multiplication is boarding group 1; addition is group 2. It doesn't matter that the addition is standing closer to the gate (further left) — group 1 boards first. 2 × 3 = 6, then 5 + 6 = 11.",
      },
    },
    {
      id: 'c2',
      question: '(10 − 4) × 2 = ?',
      choices: ['2', '12', '16', '6'],
      answer: 1,
      why: 'Clean. Parentheses first: 10 − 4 = 6, then 6 × 2 = 12.',
      reExplain: {
        analogy: 'A VIP wristband.',
        text: 'Parentheses give (10 − 4) a wristband: it skips every line and computes first, becoming 6. Then the multiplication takes over: 6 × 2 = 12. Without the wristband, 10 − 4 × 2 would be 10 − 8 = 2 — a totally different answer.',
      },
    },
    {
      id: 'c3',
      question: 'Why does math need ONE agreed order of operations?',
      choices: [
        'To make problems harder',
        'So the same expression gives everyone the same answer',
        'Because calculators demand it',
        'Old tradition nobody questions',
      ],
      answer: 1,
      why: "That's the one. Math is a language — if word order changed the meaning per reader, nobody could communicate.",
      reExplain: {
        analogy: 'Traffic lights.',
        text: 'If every driver invented their own rule for red lights, intersections would be chaos. PEMDAS is the traffic law of arithmetic: one shared rule so that 2 + 3 × 4 means 14 to every person, calculator, and computer on Earth.',
      },
    },
    {
      id: 'c4',
      question: '16 ÷ 4 × 2 = ?',
      choices: ['2', '8', '32', '1'],
      answer: 1,
      why: 'Locked in. Division and multiplication are EQUAL rank, so you go left to right: 16 ÷ 4 = 4, then 4 × 2 = 8.',
      reExplain: {
        analogy: 'Reading a sentence.',
        text: "The 'M before D' in PEMDAS is the most common trap in all of arithmetic — they're actually tied. Ties break the way you read: left to right. 16 ÷ 4 happens first because it comes first: 4, then × 2 gives 8. Doing 4 × 2 first (getting 16 ÷ 8 = 2) is the classic mistake.",
      },
    },
    {
      id: 'c5',
      question: '3 + 3 × 3 − 3 = ?',
      choices: ['9', '15', '3', '12'],
      answer: 0,
      why: 'Exactly. Multiplication first: 3 × 3 = 9. Then left to right: 3 + 9 = 12, 12 − 3 = 9.',
      reExplain: {
        analogy: 'Dress the middle first.',
        text: 'Spot the highest-ranked operation and do it first: the × in the middle. 3 × 3 = 9, leaving 3 + 9 − 3. Now it\'s all equal-rank, so read like a sentence: 3 + 9 = 12, then 12 − 3 = 9.',
      },
    },
  ],
}
