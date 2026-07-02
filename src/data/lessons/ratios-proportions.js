// Pre-Algebra · Lesson 5 — Ratios & Proportions: The Recipe Rule
export default {
  id: 'ratios-proportions',
  subjectId: 'pre-algebra',
  order: 5,
  title: 'Ratios & Proportions: The Recipe Rule',
  icon: '🍹',
  estMinutes: 10,
  tagline: 'Scale the recipe, never the flavor.',
  prereqs: ['fractions-disguise'],

  plainIdea:
    'A ratio compares two amounts, like 2 cups of strawberries for every 3 cups of yogurt. As long as you scale BOTH numbers by the same amount, the mix stays the same — and a proportion is how you find the missing number.',

  vocab: [
    {
      term: 'ratio',
      means: 'A comparison of two quantities, written 2:3 or 2/3 — "2 of this for every 3 of that."',
    },
    {
      term: 'equivalent ratios',
      means: 'Ratios that describe the same mix, like 2:3 and 4:6 — a doubled recipe, identical taste.',
    },
    {
      term: 'proportion',
      means: 'Two ratios declared equal, like 2/3 = x/9. It\'s the equation you solve to find the missing amount.',
    },
    {
      term: 'unit rate',
      means: 'A ratio scaled down until the second number is 1 — like $4 per 1 item, or 60 miles per 1 hour.',
    },
  ],

  hook: "You nailed a smoothie recipe last week — perfect balance, everyone asked for seconds. Now six friends are coming over and you need triple the batch. Add fruit at random and you've got pink milk. Scale it right and it tastes identical. That scaling is a proportion.",

  analogy: {
    analogy:
      "A ratio is a recipe. 2 cups strawberries to 3 cups yogurt isn't really about 2 and 3 — it's about the RELATIONSHIP between them. Double both and you get more smoothie, same taste. Triple both, same taste. But double just the yogurt and the flavor breaks. The recipe rule: whatever you do to one ingredient, you do to the other.",
    bridge:
      "You already know this move from Fractions: Division in Disguise — multiply top and bottom by the same number and the fraction's value doesn't change. A ratio written as a fraction works identically: 2/3 = 4/6 = 6/9. A proportion just sets two of those equal with one number missing — 2/3 = x/9 — and asks you to find the scale factor that connects them.",
  },

  worked: {
    problem: 'A smoothie recipe uses 2 cups of strawberries per 3 cups of yogurt. You have 9 cups of yogurt — how many cups of strawberries keep the taste identical?',
    steps: [
      {
        label: 'Write the ratio as a fraction',
        do: 'Strawberries to yogurt is 2:3, which we write as 2/3.',
        why: 'Fraction form lets us use everything we know about equivalent fractions. Top = strawberries, bottom = yogurt — keep the roles consistent.',
        result: '2/3',
      },
      {
        label: 'Set up the proportion',
        do: 'The new batch must have the same ratio: 2/3 = x/9, where x is the strawberries we need.',
        why: 'A proportion says "old mix = new mix." Same positions on both sides: strawberries on top, yogurt on the bottom.',
        result: '2/3 = x/9',
      },
      {
        label: 'Find the scale factor and apply it',
        do: 'The yogurt went from 3 to 9 — it tripled. So triple the strawberries too: x = 2 × 3 = 6.',
        why: 'The recipe rule: whatever you do to one ingredient, do to the other. Scale both numbers by 3 and the taste can\'t change.',
        result: 'x = 6',
      },
      {
        label: 'Check by simplifying',
        do: 'Does 6/9 really equal 2/3? Divide top and bottom by 3: 6/9 = 2/3. ✓',
        why: 'If the big batch simplifies back to the original recipe, the ratios are equivalent — the taste is locked in.',
        result: '6 cups ✓',
      },
    ],
    answer: '6 cups of strawberries',
  },

  yourTurn: [
    {
      id: 'r1',
      context: 'Confidence builder — one clean scale factor.',
      prompt: 'A map scale is 1 cm : 5 km. A trail is 7 cm on the map. How many km is the real trail?',
      type: 'number',
      answer: 35,
      hint: 'Every 1 cm stands for 5 km. You have 7 of them: 7 × 5.',
    },
    {
      id: 'r2',
      context: 'Same skill, new kitchen.',
      prompt: '2 pizzas feed 5 people. How many pizzas do you need for 20 people?',
      type: 'number',
      answer: 8,
      hint: 'People went from 5 to 20 — that\'s times 4. Do the same to the pizzas.',
    },
    {
      id: 'r3',
      context: 'A twist — the missing number is on top this time.',
      prompt: 'Solve the proportion x/6 = 10/12. x = ?',
      type: 'number',
      answer: 5,
      hint: 'Going from 12 down to 6 means dividing by 2. Do the same to the 10.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'A ratio like 3:4 is a way of...',
      choices: [
        'Adding two numbers together',
        'Comparing two quantities',
        'Rounding to the nearest whole number',
        'Writing a number less than 1',
      ],
      answer: 1,
      why: 'Right — a ratio compares two quantities: 3 of one thing for every 4 of another.',
      reExplain: {
        analogy: 'A dance pairing.',
        text: 'Say a class dances in groups of 3 kids per 4 chairs. The ratio 3:4 isn\'t a total and it isn\'t a sum — it\'s the pairing rule between kids and chairs. Ratios are always about the relationship BETWEEN two amounts, not either amount alone.',
      },
    },
    {
      id: 'c2',
      question: '$12 buys 3 identical items. What is the unit rate — the cost of 1 item?',
      choices: ['$36', '$9', '$4', '$3'],
      answer: 2,
      why: 'Clean. 12 ÷ 3 = 4. Unit rate means scaling down until the second number is 1: $4 per item.',
      reExplain: {
        analogy: 'Splitting a cab fare.',
        text: 'Three friends split a $12 cab ride evenly — each chips in 12 ÷ 3 = $4. A unit rate is that same move: shrink the ratio $12:3 down until the right side is 1, giving $4:1. "Per one" is always a division.',
      },
    },
    {
      id: 'c3',
      question: 'The ratio 2:5 is scaled up so the 5 becomes 15. To keep the ratio equivalent, the 2 must become...',
      choices: ['2 (leave it alone)', '12', '6', '15'],
      answer: 2,
      why: 'Exactly. The 5 was multiplied by 3, so the 2 gets multiplied by 3 too: 2 × 3 = 6.',
      reExplain: {
        analogy: 'Enlarging a photo.',
        text: 'Stretch a photo 3× wider but leave the height alone and everyone in it looks like a pancake. Scaling a ratio is the same: BOTH numbers take the same multiplier or the picture distorts. 5 tripled to 15, so 2 triples to 6 — and adding (2 + 10 = 12) is the pancake move.',
      },
    },
    {
      id: 'c4',
      question: 'A proportion is...',
      choices: [
        'Two ratios set equal to each other',
        'Any fraction bigger than 1',
        'A ratio with three numbers',
        'The answer to a division problem',
      ],
      answer: 0,
      why: 'That\'s the one. A proportion like 2/3 = 6/9 declares two ratios equal — usually with one number missing for you to find.',
      reExplain: {
        analogy: 'Two batches, one taste test.',
        text: 'Yesterday\'s small batch and today\'s big batch should taste identical — that claim, written in math, is a proportion: small-batch ratio = big-batch ratio. It\'s a full equation with an equals sign, which is exactly what makes it solvable.',
      },
    },
    {
      id: 'c5',
      question: '"Miles per hour" is an example of...',
      choices: ['A proportion', 'A rate', 'A percent', 'An equation'],
      answer: 1,
      why: 'Locked in. A rate is a ratio comparing two DIFFERENT kinds of units — miles and hours. At 60 miles per hour, that\'s the unit rate 60:1.',
      reExplain: {
        analogy: 'The price tag on speed.',
        text: 'A grocery tag says "$4 per pound" — dollars compared to pounds, two different units. Speed is the same kind of tag: miles compared to hours. Any "something PER something-else" comparison is a rate, and "per one hour" makes it a unit rate.',
      },
    },
  ],
}
