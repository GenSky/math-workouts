// Algebra II · Lesson 1 — Exponents
export default {
  id: 'exponents',
  subjectId: 'algebra-2',
  order: 1,
  title: 'Exponents: Repeated Multiplication',
  icon: '🚀',
  estMinutes: 10,
  tagline: 'Multiplication on steroids. 2¹⁰ isn\'t 20 — it\'s 1,024.',
  prereqs: ['order-of-operations', 'variables'],

  plainIdea:
    'An exponent counts how many times to multiply a number by itself. 2⁴ means 2 × 2 × 2 × 2 = 16 — NOT 2 × 4. That little raised number is a repeat counter, not a multiplier.',

  vocab: [
    {
      term: 'base',
      means: 'The big number being multiplied — in 2⁴, the base is 2.',
    },
    {
      term: 'exponent (or power)',
      means: 'The small raised number — in 2⁴, it\'s the 4. It counts HOW MANY copies of the base get multiplied together.',
    },
    {
      term: 'squared',
      means: 'To the power 2. "5 squared" = 5² = 5 × 5 = 25. (Named after the area of a square.)',
    },
    {
      term: 'cubed',
      means: 'To the power 3. "5 cubed" = 5³ = 5 × 5 × 5 = 125. (Named after the volume of a cube.)',
    },
  ],

  hook: "Fold a sheet of paper in half. Now again. Each fold DOUBLES the thickness. Fold it just 42 times — if you somehow could — and the stack reaches the Moon. That's not a typo; that's what repeated doubling does, and exponents are how we write it.",

  analogy: {
    analogy:
      "A rumor spreads through school: every hour, each person who knows tells exactly 2 new people, so the count doubles every hour. Hour 1: 2 people. Hour 2: 4. Hour 3: 8. It feels slow… then hour 10 hits and 1,024 people know. Doubling doesn't add — it SNOWBALLS. Exponents are the notation for snowballs.",
    bridge:
      "Instead of writing 2 × 2 × 2 × 2 × 2, we write 2⁵ (say '2 to the 5th'). The 2 is the base — the thing being multiplied. The 5 is the exponent — how many copies to multiply. The #1 trap in this topic: 2⁵ is NOT 2 × 5 = 10. It's 2 × 2 × 2 × 2 × 2 = 32. The exponent counts repeats of MULTIPLICATION, and that's why the numbers explode so fast.",
  },

  worked: {
    problem: 'A rumor doubles every hour, starting with 1 person at hour zero. How many people know after 5 hours — and how do we write that with an exponent?',
    steps: [
      {
        label: 'Watch the doubling happen',
        do: 'Hour by hour: 1 → 2 → 4 → 8 → 16 → 32.',
        why: 'Each hour multiplies by 2 again. After 5 hours we\'ve multiplied by 2 five separate times.',
        result: '1 × 2 × 2 × 2 × 2 × 2',
      },
      {
        label: 'Compress it into exponent notation',
        do: 'Five copies of "× 2" is written 2⁵.',
        why: 'The base (2) is what repeats; the exponent (5) counts the repeats. Notation exists because nobody wants to write fourteen ×2\'s.',
        result: '2⁵',
      },
      {
        label: 'Evaluate it',
        do: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
        why: 'Chain it: 2, 4, 8, 16, 32. Five doublings land on 32 people.',
        result: '2⁵ = 32',
      },
      {
        label: 'Dodge the classic trap',
        do: 'Check: 2⁵ = 32, but 2 × 5 = 10. Very different numbers.',
        why: 'If you ever catch yourself multiplying base × exponent, stop — the exponent is a repeat counter. This one mistake causes half of all exponent errors on Earth.',
        result: '2⁵ ≠ 10 ✓',
      },
    ],
    answer: '2⁵ = 32 people',
  },

  yourTurn: [
    {
      id: 'e1',
      context: 'Confidence builder — the most famous power there is.',
      prompt: 'What is 3² ("3 squared")?',
      type: 'number',
      answer: 9,
      hint: '3 × 3. (Not 3 × 2 — the exponent counts copies of the base.)',
    },
    {
      id: 'e2',
      context: 'One more copy each time.',
      prompt: 'What is 2⁴ (two to the fourth)?',
      type: 'number',
      answer: 16,
      hint: '2 × 2 × 2 × 2. Double your way up: 2, 4, 8, …',
    },
    {
      id: 'e3',
      context: 'A twist — powers of ten have a beautiful shortcut.',
      prompt: 'What is 10³?',
      type: 'number',
      answer: 1000,
      hint: '10 × 10 × 10. For powers of 10, the exponent counts the zeros in the answer.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'In 5³, what do we call the 3?',
      choices: ['The base', 'The exponent', 'The coefficient', 'The denominator'],
      answer: 1,
      why: 'Right — the raised number is the exponent. It says "multiply three copies of 5 together."',
      reExplain: {
        analogy: 'Instructions on a shampoo bottle.',
        text: '5³ reads like "5 — repeat ×3 times." The 5 is the ingredient (base); the little 3 is the instruction telling you how many times the 5 shows up in the multiplication: 5 × 5 × 5.',
      },
    },
    {
      id: 'c2',
      question: '2⁵ = ?',
      choices: ['10', '25', '32', '52'],
      answer: 2,
      why: 'Clean. Five doublings: 2, 4, 8, 16, 32.',
      reExplain: {
        analogy: 'The rumor, hour by hour.',
        text: "Don't jump — walk it. 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32. The 10 (2×5) is the trap answer; the exponent never multiplies the base directly, it counts multiplications.",
      },
    },
    {
      id: 'c3',
      question: '5² means...',
      choices: ['5 × 2', '5 + 5', '5 × 5', '2 × 2 × 2 × 2 × 2'],
      answer: 2,
      why: "That's the one. Squared = two copies of the base multiplied: 5 × 5 = 25.",
      reExplain: {
        analogy: 'A square rug.',
        text: 'A square rug 5 feet by 5 feet covers 5 × 5 = 25 square feet. That\'s literally why power-2 is called "squared" — it computes a square\'s area. 5² is the rug, not 5 × 2 = 10.',
      },
    },
    {
      id: 'c4',
      question: 'What is x¹ (any number to the power 1)?',
      choices: ['1', 'x itself', '0', 'x²'],
      answer: 1,
      why: 'Exactly. One copy of x, multiplied by nothing else, is just x.',
      reExplain: {
        analogy: 'A stack of one pancake.',
        text: 'The exponent counts copies in the stack. A stack of one pancake is… that pancake. x¹ = x. (And x² is a two-pancake stack: x × x.) The exponent 1 changes nothing — it\'s the "single copy" power.',
      },
    },
    {
      id: 'c5',
      question: 'Which is bigger: 3⁴ or 4³?',
      choices: ['3⁴ (= 81)', '4³ (= 64)', 'They\'re equal', 'Impossible to tell'],
      answer: 0,
      why: 'Locked in. 3⁴ = 3·3·3·3 = 81 beats 4³ = 4·4·4 = 64. Order matters with exponents!',
      reExplain: {
        analogy: 'More doublings beats a bigger start.',
        text: 'Work them out — never assume they match. 3⁴: 3, 9, 27, 81. 4³: 4, 16, 64. Swapping base and exponent usually changes the answer (2⁴ = 4² = 16 is the famous exception, not the rule). The EXTRA multiplication in 3⁴ wins.',
      },
    },
  ],
}
