// Algebra I · Lesson 4 — Distributive Property & Like Terms
export default {
  id: 'distributive-property',
  subjectId: 'algebra-1',
  order: 4,
  title: 'Distributive Property & Like Terms',
  icon: '📦',
  estMinutes: 10,
  tagline: 'Deliver to every door, then stack matching boxes.',
  prereqs: ['variables', 'order-of-operations'],

  plainIdea:
    'When a number sits outside parentheses, like 2(x + 5), it multiplies EVERYTHING inside — every resident gets the delivery. Then "like terms" (terms with the same variable) can be stacked together: 2x + 3x = 5x.',

  vocab: [
    {
      term: 'distribute',
      means: 'Multiply the outside number by EVERY term inside the parentheses: a(b + c) = ab + ac.',
    },
    {
      term: 'term',
      means: 'One chunk of an expression, separated by + or − signs. In 2x + 10 + 3x, the terms are 2x, 10, and 3x.',
    },
    {
      term: 'like terms',
      means: 'Terms with the exact same variable part — 2x and 3x match; 5x and 10 don\'t; x and x² don\'t either.',
    },
    {
      term: 'simplify',
      means: 'Rewrite an expression in its shortest honest form: distribute, then combine like terms.',
    },
  ],

  hook: "You're the mail carrier for a duplex: two residents behind one front door. A package addressed to 'everyone at 2(x + 5)' doesn't go to just the first resident — both x AND 5 get a copy. Skip a door, and someone files a complaint. In algebra, that complaint costs you the whole problem.",

  analogy: {
    analogy:
      "The number outside the parentheses is a delivery driver, and every term inside is a house on the street. The driver's rule is absolute: EVERY house gets the package — no skipping the second house because it's farther from the curb. Then, back at the warehouse, you stack boxes: boxes of x go with boxes of x, loose numbers go with loose numbers. You'd never stack a box of apples on the invoice line for oranges.",
    bridge:
      "In notation: a(b + c) = ab + ac. So 2(x + 5) = 2·x + 2·5 = 2x + 10 — the 2 visited both residents. Combining like terms uses the coefficients you met in What is a Variable?: 2x + 3x means 2 boxes of x plus 3 boxes of x, which is 5 boxes — 5x. But 5x + 10 stays as it is: an x-box and a plain number are different species, and different species don't stack.",
  },

  worked: {
    problem: 'Simplify:  2(x + 5) + 3x',
    steps: [
      {
        label: 'Distribute — deliver to every door',
        do: 'The 2 multiplies both residents inside: 2·x + 2·5 = 2x + 10.',
        why: 'a(b + c) = ab + ac. The classic mistake is delivering only to the first house and writing 2x + 5 — the 5 gets multiplied too.',
        result: '2x + 10',
      },
      {
        label: 'Rewrite the whole expression',
        do: 'Replace the parentheses with the delivered version: 2x + 10 + 3x.',
        why: 'Nothing else changed — the + 3x that was waiting outside just tags along. Now every term is out in the open.',
        result: '2x + 10 + 3x',
      },
      {
        label: 'Combine like terms',
        do: 'Stack the x-boxes: 2x + 3x = 5x.',
        why: '2 boxes of x plus 3 boxes of x is 5 boxes of x. Only the coefficients add — the label on the box (x) stays the same.',
        result: '5x + 10',
      },
      {
        label: 'Check that nothing else stacks',
        do: '5x and 10 are different species — one has an x, one doesn\'t. Done.',
        why: 'You can\'t combine an x-term with a plain number; you don\'t know what x is, so 5x + 10 is as short as the truth gets.',
        result: '5x + 10 ✓',
      },
    ],
    answer: '5x + 10',
  },

  yourTurn: [
    {
      id: 'p1',
      context: 'Confidence builder — one delivery, two doors.',
      prompt: 'Expand 4(x + 2). Type it like 4x+8.',
      type: 'text',
      answer: '4x+8',
      accepted: ['4x + 8', '8+4x', '8 + 4x'],
      hint: 'The 4 multiplies BOTH the x and the 2.',
    },
    {
      id: 'p2',
      context: 'Same skill — stacking boxes, this time with a subtraction.',
      prompt: 'Combine like terms: 7y − 2y. Type your answer.',
      type: 'text',
      answer: '5y',
      accepted: ['5 y'],
      hint: '7 boxes of y, take away 2 boxes of y. Only the coefficients change.',
    },
    {
      id: 'p3',
      context: 'A twist — distribute first, then tidy up the numbers.',
      prompt: 'Simplify 5(2x + 1) − 3. Type it like 10x+2.',
      type: 'text',
      answer: '10x+2',
      accepted: ['10x + 2', '2+10x'],
      hint: 'Deliver the 5 to both terms: 10x + 5. Then handle the loose numbers: 5 − 3 = 2.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: '6(x + 3) = ?',
      choices: ['6x + 3', '6x + 18', 'x + 18', '6x + 9'],
      answer: 1,
      why: 'Right — the 6 delivers to BOTH terms: 6·x + 6·3 = 6x + 18.',
      reExplain: {
        analogy: 'Buying rounds for a table.',
        text: 'You buy 6 combo meals, and each combo is one sandwich (x) plus 3 fries. You go home with 6 sandwiches AND 18 fries — not 6 sandwiches and 3 fries. The multiplier hits every item in the combo: 6(x + 3) = 6x + 18.',
      },
    },
    {
      id: 'c2',
      question: 'Which pair are like terms?',
      choices: ['3x and 3y', '4x and 4', '2x and 7x', 'x and x²'],
      answer: 2,
      why: 'Exactly. 2x and 7x have the same variable part (x), so they stack: 2x + 7x = 9x.',
      reExplain: {
        analogy: 'Sorting laundry.',
        text: 'Socks stack with socks, shirts with shirts. The variable part is the clothing type: 2x and 7x are both "x-socks," so they fold into one pile. 3x and 3y are different garments, 4x and 4 aren\'t even both clothes, and x vs x² is a sock vs a sock factory — different powers, different piles.',
      },
    },
    {
      id: 'c3',
      question: '3x + 4x = ?',
      choices: ['7x²', '12x', '7x', '7 + x'],
      answer: 2,
      why: 'Clean. Add the coefficients, keep the label: 3 + 4 = 7, so 7x. The x doesn\'t get squared — nothing multiplied x by x.',
      reExplain: {
        analogy: 'Egg cartons.',
        text: '3 cartons of eggs plus 4 cartons of eggs is 7 cartons — the eggs don\'t turn into egg-squared. Adding like terms only counts the cartons (coefficients); the contents (x) stay exactly what they were. Squaring would need x TIMES x, and there\'s no multiplication between them here.',
      },
    },
    {
      id: 'c4',
      question: 'A classmate writes 2(x + 5) = 2x + 5. What went wrong?',
      choices: [
        'Nothing — that\'s correct',
        'The 2 should also multiply the 5: it\'s 2x + 10',
        'The x should be doubled twice',
        'The parentheses mean addition, not multiplication',
      ],
      answer: 1,
      why: 'That\'s the one. The most classic error in algebra: the 2 delivered to x but skipped the 5. Every term inside gets multiplied: 2x + 10.',
      reExplain: {
        analogy: 'The forgotten plus-one.',
        text: 'You book "2 tickets per invitation" and each invitation covers a guest AND their plus-one. Ordering doubles only for the guests strands every plus-one at the door. The 5 is the plus-one: 2(x + 5) means the 2 covers both, giving 2x + 10. Quick test with x = 1: 2(1 + 5) = 12, but 2x + 5 gives 7. Busted.',
      },
    },
    {
      id: 'c5',
      question: 'Mental-math superpower: 7 × 102 is easiest as...',
      choices: [
        '7(100 + 2) = 700 + 14 = 714',
        '7 × 100 = 700, done',
        '7(100 + 2) = 700 + 2 = 702',
        '7 × 102 can only be done on paper',
      ],
      answer: 0,
      why: 'Locked in. Split 102 into friendly pieces, deliver the 7 to both: 7·100 + 7·2 = 700 + 14 = 714.',
      reExplain: {
        analogy: 'Paying with big bills and coins.',
        text: 'Buying 7 items at $1.02 each: pay the dollars first (7 × $1 = $7), then the pennies (7 × 2¢ = 14¢), total $7.14. That\'s distribution working for YOU — break the awkward number into easy parts, multiply each, add. Skipping the ×2 on the small part (getting 702) shortchanges the register by 12 cents.',
      },
    },
  ],
}
