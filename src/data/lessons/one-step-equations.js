// Algebra I · Lesson 2 — Solving One-Step Equations
export default {
  id: 'one-step-equations',
  subjectId: 'algebra-1',
  order: 2,
  title: 'Solving One-Step Equations',
  icon: '⚖️',
  estMinutes: 10,
  tagline: 'Keep the scale balanced and isolate the suspect.',
  prereqs: ['variables'],

  plainIdea:
    'Solving an equation means getting the variable alone on one side to reveal its value. The one rule: an equation is a balance scale — whatever you do to one side, you must do to the other.',

  vocab: [
    {
      term: 'solve',
      means: 'Find the number the variable is hiding. "Solve for x" = "open the locker."',
    },
    {
      term: 'isolate',
      means: 'Get the variable completely alone on one side of the equals sign: from x + 7 = 12 to x = 5.',
    },
    {
      term: 'inverse operation',
      means: 'The undo move: subtraction undoes addition, division undoes multiplication. The key that peels things off the variable.',
    },
  ],

  hook: "You're negotiating a salary. Every year you stay, you get $3K more, and you want to know exactly how many years until you hit a $15K raise. One equation, one move, one answer. That's a one-step equation.",

  analogy: {
    analogy:
      "An equation is a balance scale. The equals sign is the pivot in the middle. Whatever sits on the left weighs exactly the same as whatever sits on the right. The golden rule: whatever you do to one side, you MUST do to the other — otherwise the scale tips and the truth breaks.",
    bridge:
      "Solving means getting the variable alone on one side — isolating the suspect. To strip away whatever's attached to x, you do the opposite operation to BOTH sides. Added 7? Subtract 7 from both. Multiplied by 4? Divide both by 4. The opposite operation is the key that unlocks the locker.",
  },

  worked: {
    problem: 'Solve for x:  x + 7 = 12',
    steps: [
      {
        label: 'Spot what\'s clinging to x',
        do: 'x has a + 7 attached.',
        why: 'To isolate x we need to peel off that + 7. The opposite of adding 7 is subtracting 7.',
        result: 'x + 7 = 12',
      },
      {
        label: 'Do the opposite — to BOTH sides',
        do: 'Subtract 7 from each side:  x + 7 − 7 = 12 − 7.',
        why: 'The balance rule: subtract from one side only and the scale tips. Subtract from both and it stays true.',
        result: 'x + 7 − 7 = 12 − 7',
      },
      {
        label: 'Simplify',
        do: 'On the left, +7 − 7 cancels to 0. On the right, 12 − 7 = 5.',
        why: 'The +7 and −7 are opposites that annihilate each other, leaving x alone. The suspect is exposed.',
        result: 'x = 5',
      },
      {
        label: 'Check by plugging back in',
        do: 'Put x = 5 into the original: 5 + 7 = 12. ✓',
        why: 'Always test. If the original equation is still true, the locker is open and the answer is real.',
        result: 'x = 5 ✓',
      },
    ],
    answer: 'x = 5',
  },

  yourTurn: [
    {
      id: 'o1',
      context: 'Confidence builder — same shape as the example.',
      prompt: 'Solve for x:  x + 4 = 9.  What is x?',
      type: 'number',
      answer: 5,
      hint: 'Subtract 4 from both sides.',
    },
    {
      id: 'o2',
      context: 'Same skill, but now it\'s a multiplication you must undo.',
      prompt: 'Solve for x:  3x = 21.  What is x?',
      type: 'number',
      answer: 7,
      hint: 'x is multiplied by 3. The opposite of multiplying is dividing — divide both sides by 3.',
    },
    {
      id: 'o3',
      context: 'A twist — the variable is being subtracted from, and the answer is negative.',
      prompt: 'Solve for x:  x − 8 = −3.  What is x?',
      type: 'number',
      answer: 5,
      hint: 'Add 8 to both sides. Remember: −3 + 8 = 5.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'To solve x − 6 = 10, what do you do to both sides?',
      choices: ['Subtract 6', 'Add 6', 'Divide by 6', 'Multiply by 10'],
      answer: 1,
      why: 'Right. The opposite of subtracting 6 is adding 6. Add it to both sides and x = 16.',
      reExplain: {
        analogy: 'Undoing a backpack.',
        text: "x − 6 means '6 was taken off x.' To get x back to full, you put the 6 back — you ADD 6. And to keep the scale honest, you add it to both sides. x = 10 + 6 = 16.",
      },
    },
    {
      id: 'c2',
      question: 'Solve:  5x = 35.  x = ?',
      choices: ['7', '30', '40', '175'],
      answer: 0,
      why: 'Clean. Divide both sides by 5: x = 7.',
      reExplain: {
        analogy: 'Pizza slices.',
        text: '5x = 35 says "5 equal groups make 35." How big is one group? 35 ÷ 5 = 7. Dividing undoes multiplying. x = 7.',
      },
    },
    {
      id: 'c3',
      question: 'Why must you do the same operation to both sides?',
      choices: [
        'To make the numbers bigger',
        'To keep the equation balanced and true',
        "Because it's a tradition",
        'To change what x equals',
      ],
      answer: 1,
      why: "That's the one. Equal weight on both pans keeps the scale level — and the equation true.",
      reExplain: {
        analogy: 'A seesaw with a friend.',
        text: "If you hop off the seesaw but your friend doesn't, it slams down — no longer balanced. An equation is the same: change one side only and it stops being true. Match the move on both sides to keep it level.",
      },
    },
    {
      id: 'c4',
      question: 'Solve:  x + 11 = 4.  x = ?',
      choices: ['15', '7', '−7', '−15'],
      answer: 2,
      why: 'Locked in. Subtract 11 from both sides: x = 4 − 11 = −7.',
      reExplain: {
        analogy: 'Bank account.',
        text: "x + 11 = 4 means after a $11 deposit you have $4. So you started below zero: 4 − 11 = −7. You were $7 in debt. Negative answers are fine — they're just below the waterline.",
      },
    },
    {
      id: 'c5',
      question: 'You solve and get x = 5 for "x + 7 = 12". How do you KNOW it\'s right?',
      choices: [
        'You guess',
        'Plug 5 back in: 5 + 7 = 12 ✓',
        'Ask a friend',
        "You can't ever be sure",
      ],
      answer: 1,
      why: 'Exactly. Substitute it back. If the original equation holds, your answer is verified — no guessing.',
      reExplain: {
        analogy: 'Trying the key in the lock.',
        text: "Found a key (x = 5)? Don't just trust it — try it. Plug it into the original door: 5 + 7 = 12. The lock clicks. Checking your answer is turning the key to confirm it fits.",
      },
    },
  ],
}
