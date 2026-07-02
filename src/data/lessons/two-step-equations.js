// Algebra I · Lesson 3 — Two-Step Equations: Unwrap in Reverse
export default {
  id: 'two-step-equations',
  subjectId: 'algebra-1',
  order: 3,
  title: 'Two-Step Equations: Unwrap in Reverse',
  icon: '🪜',
  estMinutes: 10,
  tagline: 'Last layer on, first layer off.',
  prereqs: ['one-step-equations'],

  plainIdea:
    'A two-step equation like 3x + 5 = 20 has two things stuck to x. You peel them off one at a time — in REVERSE order from how they went on — using the same balance-scale moves you learned in Solving One-Step Equations.',

  vocab: [
    {
      term: 'two-step equation',
      means: 'An equation where the variable has two operations on it, like 3x + 5 = 20 — a multiply AND an add.',
    },
    {
      term: 'reverse order',
      means: 'Undo the last operation first. If x was multiplied then added to, you subtract first, then divide.',
    },
    {
      term: 'inverse operation',
      means: 'The undo move from one-step equations: subtraction undoes addition, division undoes multiplication.',
    },
  ],

  hook: "Someone gift-wraps a box, then drops it in a padded envelope. To get the gift, you don't tear the wrapping paper through the envelope — you open the envelope first, THEN unwrap the box. Last layer on, first layer off. That's every two-step equation ever.",

  analogy: {
    analogy:
      "Building the expression 3x + 5 is wrapping a present. Start with the gift (x), wrap it in paper (multiply by 3), then slide it into an envelope (add 5). Now you're on the receiving end and you want the gift back. You can't reach the wrapping paper while it's inside the envelope — the envelope came LAST, so it comes off FIRST.",
    bridge:
      "In notation: 3x + 5 = 20. The + 5 is the outer layer (the envelope), so subtract 5 from both sides first → 3x = 15. The × 3 is the inner layer (the paper), so divide both sides by 3 → x = 5. Each move is just a one-step equation from last lesson — same balance scale, same rules — you're simply doing two of them in the right order.",
  },

  worked: {
    problem: 'Solve for x:  3x + 5 = 20',
    steps: [
      {
        label: 'Read the layers',
        do: 'x was multiplied by 3, THEN 5 was added. To unwrap, reverse the order: peel the + 5 first.',
        why: 'The + 5 went on last, so it\'s the outer layer. You can\'t touch the × 3 while the + 5 is still wrapped around everything.',
        result: 'Plan: subtract 5, then divide by 3',
      },
      {
        label: 'Peel the outer layer',
        do: 'Subtract 5 from both sides:  3x + 5 − 5 = 20 − 5.',
        why: 'Same balance rule as one-step equations — the scale only stays true if both sides change together. The +5 and −5 cancel.',
        result: '3x = 15',
      },
      {
        label: 'Peel the inner layer',
        do: 'Divide both sides by 3:  3x ÷ 3 = 15 ÷ 3.',
        why: 'Division undoes multiplication. With the envelope gone, this is now a plain one-step equation you already know how to solve.',
        result: 'x = 5',
      },
      {
        label: 'Check by plugging back in',
        do: 'Substitute into the original: 3(5) + 5 = 15 + 5 = 20. ✓',
        why: 'The original equation holds, so the unwrapping was clean. Always turn the key in the lock.',
        result: 'x = 5 ✓',
      },
    ],
    answer: 'x = 5',
  },

  yourTurn: [
    {
      id: 't1',
      context: 'Confidence builder — same shape as the example.',
      prompt: 'Solve 2x + 3 = 11.  What is x?',
      type: 'number',
      answer: 4,
      hint: 'Envelope first: subtract 3 from both sides. Then divide by 2.',
    },
    {
      id: 't2',
      context: 'Same skill, but the outer layer is a subtraction.',
      prompt: 'Solve 5x − 4 = 21.  What is x?',
      type: 'number',
      answer: 5,
      hint: 'The opposite of − 4 is + 4. Add 4 to both sides, then divide by 5.',
    },
    {
      id: 't3',
      context: 'A twist — x is being divided this time.',
      prompt: 'Solve x/2 + 1 = 7.  What is x?',
      type: 'number',
      answer: 12,
      hint: 'Subtract 1 first (x/2 = 6), then multiply both sides by 2.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'To solve 4x + 9 = 17, which move comes FIRST?',
      choices: [
        'Divide both sides by 4',
        'Subtract 9 from both sides',
        'Add 9 to both sides',
        'Multiply both sides by 4',
      ],
      answer: 1,
      why: 'Right — the + 9 is the outer layer, so it comes off first. Subtract 9, then divide by 4.',
      reExplain: {
        analogy: 'Boots before socks?',
        text: 'You put socks on, then boots — so at night, boots come off first. In 4x + 9, the ×4 is the sock (it touched x first) and the +9 is the boot (it went on last). Undo in reverse: boot off (subtract 9), then sock off (divide by 4).',
      },
    },
    {
      id: 'c2',
      question: 'Solve:  4x + 1 = 13.  x = ?',
      choices: ['3', '4', '12', '48'],
      answer: 0,
      why: 'Clean. Subtract 1 to get 4x = 12, then divide by 4: x = 3.',
      reExplain: {
        analogy: 'A taxi fare.',
        text: 'A taxi charges a $1 flat fee plus $4 per mile, and the ride cost $13. Peel off the flat fee first: 13 − 1 = 12 went to miles. At $4 per mile, that\'s 12 ÷ 4 = 3 miles. x = 3.',
      },
    },
    {
      id: 'c3',
      question: 'Solve:  −2x + 7 = 1.  x = ?',
      choices: ['−3', '−4', '3', '4'],
      answer: 2,
      why: 'Exactly. Subtract 7: −2x = −6. Divide by −2: x = 3. A negative divided by a negative is positive.',
      reExplain: {
        analogy: 'Draining a pool.',
        text: 'Subtracting 7 from both sides leaves −2x = −6 — the pool is losing 2 gallons per minute and is down 6 gallons total. How many minutes? 6 ÷ 2 = 3. The two negatives describe the same downhill direction, so they cancel: x = 3, positive.',
      },
    },
    {
      id: 'c4',
      question: 'WHY do we undo the addition before the multiplication in 3x + 5 = 20?',
      choices: [
        'Addition is easier than division',
        'The + 5 is the outermost layer, so it must come off first',
        'It doesn\'t matter — any order works the same way',
        'Because 5 is bigger than 3',
      ],
      answer: 1,
      why: 'That\'s the one. Unwrapping happens in reverse: the operation applied LAST is peeled off FIRST.',
      reExplain: {
        analogy: 'Layers of a jawbreaker.',
        text: 'A jawbreaker is built core-first, layer by layer — and eaten outside-in. The expression 3x + 5 was built core-first too: x, then ×3, then +5. Solving is eating it: outer layer (+5) dissolves first, inner layer (×3) next, and the core x is what\'s left.',
      },
    },
    {
      id: 'c5',
      question: 'You solved 2x + 3 = 11 and got x = 4. What\'s the pro move to confirm it?',
      choices: [
        'Solve it a second time and hope for the same answer',
        'Round 4 to the nearest ten',
        'Plug it back in: 2(4) + 3 = 11 ✓',
        'Check that 4 is smaller than 11',
      ],
      answer: 2,
      why: 'Locked in. Substitute into the ORIGINAL equation: 2(4) + 3 = 8 + 3 = 11. It holds, so x = 4 is verified.',
      reExplain: {
        analogy: 'Test-driving the car.',
        text: 'A mechanic doesn\'t just hand you the keys — they start the engine to prove the fix worked. Plugging x = 4 back into the original equation is starting the engine: 2(4) + 3 runs, lands exactly on 11, and you drive off certain.',
      },
    },
  ],
}
