// Pre-Algebra · Lesson 1 — Negative Numbers & the Number Line
export default {
  id: 'number-line',
  subjectId: 'pre-algebra',
  order: 1,
  title: 'Negatives & the Number Line',
  icon: '🌡️',
  estMinutes: 8,
  tagline: 'Zero is home base. Negatives are just the other direction.',
  prereqs: [],

  plainIdea:
    'All numbers live on one long line. Zero sits in the middle, counting up moves right, and negative numbers are the same numbers mirrored on the left side of zero.',

  vocab: [
    {
      term: 'number line',
      means: 'A straight line where every number has a spot. Bigger numbers sit further right, smaller numbers further left.',
    },
    {
      term: 'negative number',
      means: 'A number below zero, written with a minus sign, like −3. Think "3 steps left of zero" or "$3 of debt."',
    },
    {
      term: 'opposites',
      means: 'Two numbers the same distance from zero on opposite sides, like 5 and −5. Add them and they cancel to 0.',
    },
  ],

  hook: "It's −3° when you wake up. The radio says it'll warm up 8 degrees by noon. Quick — what's the temperature at lunch? If you hesitated even for a second, this lesson is about to make that answer automatic, forever.",

  analogy: {
    analogy:
      "Think of your bank account. Money in the bank is positive. Debt is negative — you're below zero. If you owe $5, your balance is −5. Deposit money and it erases the debt FIRST, then starts building wealth. Deposit $5 into a −5 balance and you're at exactly 0 — even. Deposit $8 and you blow past zero to +3.",
    bridge:
      'In math, we draw this as a number line: zero in the middle, positives marching right, negatives marching left. Adding means walking RIGHT. Subtracting means walking LEFT. Every negative-number problem — every single one — is just a short walk on this line. −3 + 8? Start at −3, walk 8 steps right: three steps to reach zero, five more past it. You land on 5.',
  },

  worked: {
    problem: "It's −3° in the morning. It warms up 8 degrees by noon. What's the noon temperature?",
    steps: [
      {
        label: 'Find your starting spot',
        do: 'Put your finger on −3 on the number line — three steps left of zero.',
        why: "Every walk starts somewhere. −3 means 'three below zero,' so we start on the cold side of the line.",
        result: 'Start: −3',
      },
      {
        label: 'Decide which direction to walk',
        do: "'Warms up 8' means ADD 8 — walk 8 steps to the RIGHT.",
        why: 'Adding always moves right (up the line, toward warmer, richer, bigger). Subtracting would move left.',
        result: '−3 + 8',
      },
      {
        label: 'Walk to zero first',
        do: 'From −3, three steps right lands you on 0. You have 8 − 3 = 5 steps left to spend.',
        why: 'Zero is the border crossing. Getting there uses up 3 of your 8 steps — the debt gets erased before the wealth begins.',
        result: 'At 0 with 5 steps left',
      },
      {
        label: 'Spend the leftover steps',
        do: 'Walk the remaining 5 steps right: you land on +5.',
        why: "Past zero, every step is pure positive territory. So −3 + 8 = 5. It's noon and it's 5° out.",
        result: '−3 + 8 = 5',
      },
    ],
    answer: '5° at noon',
  },

  yourTurn: [
    {
      id: 'n1',
      context: 'Confidence builder — same walk, new story.',
      prompt: "You park on level −2 of an underground garage. The elevator takes you up 6 floors. What floor do you step out on?",
      type: 'number',
      answer: 4,
      hint: 'Start at −2, ride up (right) 6. Two floors to reach 0, then keep going.',
    },
    {
      id: 'n2',
      context: 'Same idea — watch what happens at zero.',
      prompt: "You're $5 in debt (balance −5). You deposit $5. What's your balance now?",
      type: 'number',
      answer: 0,
      hint: '−5 and +5 are opposites. Opposites cancel each other perfectly.',
    },
    {
      id: 'n3',
      context: 'A twist — which negative is smaller?',
      prompt: 'Which temperature is COLDER: −8° or −3°? Type the colder number (include the minus sign).',
      type: 'number',
      answer: -8,
      hint: "Colder = further LEFT on the line. −8 is further from zero than −3 on the cold side.",
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'On a number line, where do negative numbers live?',
      choices: ['To the right of zero', 'To the left of zero', 'Above zero', 'They aren\'t on the line'],
      answer: 1,
      why: 'Right — negatives sit to the left of zero, mirror images of the positives.',
      reExplain: {
        analogy: 'A hotel elevator panel.',
        text: 'Ground floor is 0. The floors above (1, 2, 3…) are positives. The basement levels (−1, −2, −3…) are below ground — the negative side. On a flat number line, "below ground" becomes "left of zero."',
      },
    },
    {
      id: 'c2',
      question: 'Which number is SMALLER: −10 or 2?',
      choices: ['−10', '2', "They're equal", "Can't compare them"],
      answer: 0,
      why: 'Locked in. −10 is way out on the left side of the line — smaller than 2, smaller than 0, smaller than −9.',
      reExplain: {
        analogy: 'Debt vs. pocket money.',
        text: "Would you rather have $2 or owe $10? Owing $10 (−10) is worse — you have LESS. On the number line, less = further left. −10 sits far left of 2, so −10 is smaller. Big-looking negatives are actually tiny.",
      },
    },
    {
      id: 'c3',
      question: '−4 + 4 = ?',
      choices: ['−8', '0', '8', '−16'],
      answer: 1,
      why: "That's the one. Opposites cancel: 4 steps left, then 4 steps right puts you back home at zero.",
      reExplain: {
        analogy: 'Walking your dog around the block.',
        text: 'Walk 4 blocks west (−4), then 4 blocks east (+4). Where are you? Right back at your front door — position 0. Any number plus its opposite lands on zero, every time.',
      },
    },
    {
      id: 'c4',
      question: 'You owe $7 (balance −7) and you pay back $3. What\'s your balance?',
      choices: ['−10', '−4', '4', '10'],
      answer: 1,
      why: 'Clean. −7 + 3 = −4. You chipped away at the debt but haven\'t cleared it yet.',
      reExplain: {
        analogy: 'Filling a hole.',
        text: "You're standing in a hole 7 feet deep (−7). You climb up 3 feet (+3). You're still in the hole — just only 4 feet deep now. −7 + 3 = −4. Not enough climbing to reach the surface (zero) yet.",
      },
    },
    {
      id: 'c5',
      question: 'Which move takes you LEFT on the number line?',
      choices: ['Adding a positive number', 'Subtracting a positive number', 'Adding zero', 'Counting up'],
      answer: 1,
      why: 'Exactly. Subtracting walks you left, toward (and past) the negatives. Adding walks you right.',
      reExplain: {
        analogy: 'Gas pedal and reverse.',
        text: 'On the number line, adding is the gas pedal (drive right), subtracting is reverse (roll left). 5 − 8 starts at 5 and reverses 8: you back up through 0 and land at −3. Direction is everything.',
      },
    },
  ],
}
