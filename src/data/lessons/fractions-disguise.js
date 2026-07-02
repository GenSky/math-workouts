// Pre-Algebra · Lesson 3 — Fractions: Division in Disguise
export default {
  id: 'fractions-disguise',
  subjectId: 'pre-algebra',
  order: 3,
  title: 'Fractions: Division in Disguise',
  icon: '🍕',
  estMinutes: 10,
  tagline: 'Every fraction is a division problem wearing a costume.',
  prereqs: ['number-line'],

  plainIdea:
    'A fraction like 3/4 just means "3 divided by 4" — or "3 pieces, when the whole thing is cut into 4 equal pieces." Top number: how many pieces you have. Bottom number: how many pieces make a whole.',

  vocab: [
    {
      term: 'fraction',
      means: 'A number written as one number over another, like 3/4. It describes part of a whole.',
    },
    {
      term: 'numerator',
      means: 'The TOP number — how many pieces you actually have. (Numerator = "counter.")',
    },
    {
      term: 'denominator',
      means: 'The BOTTOM number — how many equal pieces the whole was cut into. (Denominator = "namer of the piece size.")',
    },
    {
      term: 'equivalent fractions',
      means: 'Different-looking fractions worth the same amount, like 1/2 and 2/4 — same pizza, cut finer.',
    },
  ],

  hook: "Two pizzas arrive. Three of you are splitting them evenly. Nobody reaches for a calculator, but everyone at the table just did fraction math: 2 ÷ 3 of a pizza each. You already speak fraction — this lesson just shows you the grammar.",

  analogy: {
    analogy:
      "A fraction is a division problem wearing a disguise. 3/4 looks like a strange two-story number, but rip off the costume and it's just 3 ÷ 4. The pizza version: cut a pizza into 4 equal slices (that's the bottom number) and take 3 of them (that's the top number). Same slices, finer cut, same amount of food — that's why 1/2 and 2/4 and 4/8 are all the exact same lunch.",
    bridge:
      "The bottom number (denominator) names the SIZE of the pieces — quarters, thirds, eighths. The top number (numerator) COUNTS how many you've got. That's why you can only add fractions with the same denominator: you can't count apples and oranges together until they're the same kind of piece. And the fraction bar itself? A division sign lying flat: 3/4 = 3 ÷ 4 = 0.75. Always has been.",
  },

  worked: {
    problem: 'Which is bigger: 3/4 of a pizza, or 2/3 of a pizza?',
    steps: [
      {
        label: 'Spot the problem with comparing directly',
        do: 'Quarters and thirds are different-sized slices. 3 big-ish slices vs 2 bigger slices — too close to eyeball.',
        why: "You can't fairly compare counts of different-sized pieces. First we need both pizzas cut into the SAME size slice.",
        result: 'Need a common piece size',
      },
      {
        label: 'Find a size that works for both',
        do: 'Quarters can be re-cut into twelfths (4 × 3) and thirds can too (3 × 4). Twelfths it is.',
        why: '12 is a multiple of both 4 and 3 — the smallest slice size both pizzas can be evenly recut into (the common denominator).',
        result: 'Recut both into 12ths',
      },
      {
        label: 'Recut each fraction',
        do: '3/4: cut every quarter into 3 → 9 slices of 12. 2/3: cut every third into 4 → 8 slices of 12.',
        why: 'Multiply top and bottom by the SAME number and the amount of pizza doesn\'t change — only the slice count does. 3/4 = 9/12 and 2/3 = 8/12.',
        result: '9/12 vs 8/12',
      },
      {
        label: 'Now just compare the counts',
        do: '9 slices beats 8 slices. So 3/4 > 2/3.',
        why: 'Once the pieces are the same size, comparing fractions is just comparing whole numbers. That trick — same denominator, then compare tops — works every single time.',
        result: '3/4 is bigger ✓',
      },
    ],
    answer: '3/4 is bigger (9/12 vs 8/12)',
  },

  yourTurn: [
    {
      id: 'f1',
      context: 'Confidence builder — halves and quarters.',
      prompt: 'What is 1/2 + 1/4? Type it as a fraction like 3/4.',
      type: 'text',
      answer: '3/4',
      accepted: ['6/8', '0.75', '.75', '3 / 4'],
      hint: 'Recut the half into quarters first: 1/2 = 2/4. Now add same-sized pieces: 2/4 + 1/4.',
    },
    {
      id: 'f2',
      context: 'Fractions OF a number — "of" means multiply.',
      prompt: 'What is 3/4 of 20?',
      type: 'number',
      answer: 15,
      hint: 'Cut 20 into 4 equal pieces (20 ÷ 4 = 5), then take 3 of them.',
    },
    {
      id: 'f3',
      context: 'A twist — make the fraction as simple as possible.',
      prompt: 'Simplify 6/8 to its simplest form. Type it like a/b.',
      type: 'text',
      answer: '3/4',
      accepted: ['3 / 4'],
      hint: 'Both 6 and 8 can be divided by 2. Do it to top AND bottom.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'In the fraction 5/8, what does the 8 tell you?',
      choices: [
        'How many pieces you have',
        'How many equal pieces make one whole',
        'The answer to the division',
        'That the fraction is negative',
      ],
      answer: 1,
      why: 'Right — the denominator names the cut: the whole is sliced into 8 equal pieces, and you hold 5 of them.',
      reExplain: {
        analogy: 'A chocolate bar\'s grooves.',
        text: 'A chocolate bar molded into 8 squares: the 8 describes the bar\'s design — how many squares make the WHOLE bar. The 5 counts how many squares you actually broke off. Bottom = the design, top = your share.',
      },
    },
    {
      id: 'c2',
      question: 'The fraction bar in 3/4 secretly means...',
      choices: ['Addition', 'Multiplication', 'Division', 'Nothing — it\'s decoration'],
      answer: 2,
      why: 'Exactly. 3/4 IS 3 ÷ 4 = 0.75. Every fraction is an unfinished division problem.',
      reExplain: {
        analogy: 'The costume reveal.',
        text: 'Type 3 ÷ 4 into any calculator: 0.75. Now ask what 3/4 is as a decimal: 0.75. Same number, two outfits. The horizontal bar is literally a division sign that lay down — that\'s the whole disguise.',
      },
    },
    {
      id: 'c3',
      question: 'Which fraction equals 1/2?',
      choices: ['2/6', '3/6', '3/4', '1/4'],
      answer: 1,
      why: 'Clean. 3 out of 6 is exactly half — multiply top and bottom of 1/2 by 3 and you get 3/6.',
      reExplain: {
        analogy: 'Cutting the same sandwich finer.',
        text: 'Half a sandwich is half a sandwich whether you cut the whole thing into 2 pieces (1/2) or 6 pieces (3/6). Multiply top AND bottom by the same number and the amount never changes: 1×3 = 3, 2×3 = 6. Same lunch.',
      },
    },
    {
      id: 'c4',
      question: '1/3 + 1/3 = ?',
      choices: ['2/6', '1/6', '2/3', '1/9'],
      answer: 2,
      why: "That's the one. Same-sized pieces (thirds), so just count them: 1 third + 1 third = 2 thirds.",
      reExplain: {
        analogy: 'Counting apples.',
        text: "One apple plus one apple is two apples — the WORD 'apple' doesn't double. Same here: one third plus one third is two thirds. The denominator is the piece's name, not a quantity. Adding the bottoms (getting 2/6) would be like saying 'appleapple.'",
      },
    },
    {
      id: 'c5',
      question: 'Which is bigger: 2/5 or 1/2?',
      choices: ['2/5', '1/2', "They're equal", "Can't compare fractions"],
      answer: 1,
      why: 'Locked in. In tenths: 2/5 = 4/10 and 1/2 = 5/10. Five beats four.',
      reExplain: {
        analogy: 'The halfway test.',
        text: "1/2 is the halfway mark. Is 2/5 at least half? Half of 5 is 2.5, and you only have 2 pieces — just UNDER half. So 1/2 wins. Comparing any fraction to one-half is often as easy as asking: is the top more than half the bottom?",
      },
    },
  ],
}
