// Algebra II · Lesson 3 — Factoring
export default {
  id: 'factoring',
  subjectId: 'algebra-2',
  order: 3,
  title: 'Factoring: Multiplication in Reverse',
  icon: '🧩',
  estMinutes: 12,
  tagline: 'Un-multiply a quadratic, and two hidden answers fall right out.',
  prereqs: ['quadratics', 'distributive-property'],

  plainIdea:
    'Factoring means taking a math expression apart into the pieces that were multiplied to build it — like un-baking a cake back into flour and eggs. Once a quadratic is split into two pieces multiplied together, solving it gets easy.',

  vocab: [
    {
      term: 'factor',
      means: 'A piece that gets multiplied. 3 and 4 are factors of 12. (x + 2) can be a factor too.',
    },
    {
      term: 'factoring',
      means: 'Un-multiplying: rewriting something like x² + 5x + 6 as the product (x + 2)(x + 3).',
    },
    {
      term: 'zero-product property',
      means: 'If two things multiply to give zero, at least one of them IS zero. There is no other way to make zero by multiplying.',
    },
    {
      term: 'GCF (greatest common factor)',
      means: 'The biggest factor shared by every term — the piece you can pull out front, like 3 in 6x + 9 = 3(2x + 3).',
    },
  ],

  hook: "You know from last chapter that quadratics hide TWO answers. But x² + 5x + 6 = 0 doesn't hand them over — no amount of adding or subtracting isolates that x. Locksmiths don't force stubborn locks; they take them apart. Factoring is taking the equation apart, and the answers are sitting right inside.",

  analogy: {
    analogy:
      "Think of a zipped-up suitcase. Somebody packed two items — say, a jacket and a pair of shoes — zipped it shut, and now all you see is one lumpy bag. Factoring is unzipping: you recover exactly what was packed. And here's the payoff — the distributive property from way back is the ZIPPING. Distributing multiplies pieces together into one expression; factoring runs that same zipper in reverse.",
    bridge:
      "In symbols: distributing (x + 2)(x + 3) zips it into x² + 3x + 2x + 6 = x² + 5x + 6. Factoring unzips x² + 5x + 6 back into (x + 2)(x + 3). The unzipping trick for x² + bx + c: hunt for two numbers that MULTIPLY to c and ADD to b. Here 2 × 3 = 6 ✓ and 2 + 3 = 5 ✓. Then the zero-product property finishes the job: if (x + 2)(x + 3) = 0, one of those parentheses must BE zero — because nothing times something nonzero ever makes zero.",
  },

  worked: {
    problem: 'Solve for x:  x² + 5x + 6 = 0',
    steps: [
      {
        label: 'Hunt the magic pair',
        do: 'Find two numbers that MULTIPLY to 6 and ADD to 5. Try the factor pairs of 6: 1 & 6 add to 7 — no. 2 & 3 add to 5 — yes!',
        why: 'This is the whole secret of factoring x² + bx + c: the pair multiplies to c (the end number) and adds to b (the middle number). Only 2 and 3 pass both tests.',
        result: 'The pair: 2 and 3',
      },
      {
        label: 'Unzip into two factors',
        do: 'Rewrite: x² + 5x + 6 = (x + 2)(x + 3). Check by distributing back: x² + 3x + 2x + 6 = x² + 5x + 6 ✓.',
        why: 'Factoring is un-distributing, so the distributive property IS your answer key. If distributing your factors doesn\'t rebuild the original, the pair is wrong — go hunt again.',
        result: '(x + 2)(x + 3) = 0',
      },
      {
        label: 'Fire the zero-product property',
        do: 'Two things multiply to zero, so one of them must BE zero: x + 2 = 0  or  x + 3 = 0.',
        why: 'Multiply any two nonzero numbers and you never get zero — impossible. So a product of zero GUARANTEES a zero factor. One hard quadratic just became two baby equations.',
        result: 'x + 2 = 0  or  x + 3 = 0',
      },
      {
        label: 'Solve both, check both',
        do: 'x = −2 or x = −3. Verify: (−2)² + 5(−2) + 6 = 4 − 10 + 6 = 0 ✓ and (−3)² + 5(−3) + 6 = 9 − 15 + 6 = 0 ✓.',
        why: 'Two factors, two roots — exactly the two axis-crossings quadratics promised last chapter. Notice the sign flip: factors (x + 2)(x + 3), solutions −2 and −3.',
        result: 'x = −2 or x = −3',
      },
    ],
    answer: 'x = −2 or x = −3 (two solutions, straight out of the factors)',
  },

  yourTurn: [
    {
      id: 'f1',
      context: 'Confidence builder — just the number hunt.',
      prompt: 'Two numbers multiply to 10 and add to 7. What is the LARGER one?',
      type: 'number',
      answer: 5,
      hint: 'Factor pairs of 10: 1 & 10, 2 & 5. Which pair adds to 7?',
    },
    {
      id: 'f2',
      context: 'Fill in the missing factor.',
      prompt: 'x² + 7x + 10 = (x + 2)(x + ?). What goes in the blank?',
      type: 'number',
      answer: 5,
      hint: 'The blank times 2 must make 10, and the blank plus 2 must make 7. Same number both ways.',
    },
    {
      id: 'f3',
      context: 'A twist — factors with a minus sign inside.',
      prompt: '(x − 4)(x + 1) = 0 has two solutions. One is 4 — what is the other? (Include the sign.)',
      type: 'number',
      answer: -1,
      hint: 'Set the second factor to zero: x + 1 = 0. What x makes that true? Watch the sign flip.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'Two things multiply together and the result is zero. What do you know for sure?',
      choices: [
        'At least one of them is zero',
        'Both of them must be zero',
        'Both of them are negative',
        'Nothing — they could be anything',
      ],
      answer: 0,
      why: 'Right — that\'s the zero-product property. Zero can\'t be built from two nonzero pieces, so at least one factor IS zero.',
      reExplain: {
        analogy: 'A silent duet.',
        text: 'A duet\'s volume is like the two singers\' volumes multiplied. If the room is completely silent, at least one singer isn\'t singing — maybe both, but you\'re GUARANTEED one. Multiply anything nonzero by anything nonzero and you always get noise; total zero convicts at least one factor.',
      },
    },
    {
      id: 'c2',
      question: 'Factor x² + 6x + 8.',
      choices: [
        '(x + 1)(x + 8)',
        '(x + 6)(x + 8)',
        '(x + 2)(x + 4)',
        '(x + 3)(x + 3)',
      ],
      answer: 2,
      why: 'Clean. 2 × 4 = 8 and 2 + 4 = 6 — the pair passes both tests.',
      reExplain: {
        analogy: 'The two-question job interview.',
        text: 'Every candidate pair must ace BOTH questions: multiply to the end number (8) and add to the middle number (6). 1 & 8 multiply right but add to 9 — rejected. 6 & 8 just copies numbers out of the problem — rejected. 3 & 3 adds to 6 but multiplies to 9 — rejected. Only 2 & 4 passes both.',
      },
    },
    {
      id: 'c3',
      question: 'Why does factoring help you SOLVE a quadratic like x² + 5x + 6 = 0?',
      choices: [
        'It makes the numbers smaller',
        'It turns one hard equation into two easy one-step equations',
        'It removes the x² so it becomes a line',
        'It doesn\'t — you still have to guess',
      ],
      answer: 1,
      why: 'Exactly. Factored form plus the zero-product property splits one stubborn equation into x + 2 = 0 and x + 3 = 0 — each a one-move solve.',
      reExplain: {
        analogy: 'Untangling two knotted shoelaces.',
        text: 'Two laces knotted together look like one impossible tangle. Separate them and each lace is trivial to untie. x² + 5x + 6 = 0 is the tangle; (x + 2)(x + 3) = 0 is the separation; and each factor set to zero is a knot so simple it unties in one pull.',
      },
    },
    {
      id: 'c4',
      question: 'Factor out the GCF: 6x + 9 = ?',
      choices: [
        '3(2x + 3)',
        '3(2x + 9)',
        '6(x + 3)',
        '3(3x + 2)',
      ],
      answer: 0,
      why: 'That\'s the one. The biggest number dividing both 6x and 9 is 3, and 3(2x + 3) distributes back to 6x + 9 exactly.',
      reExplain: {
        analogy: 'Splitting the shared rent.',
        text: 'Both terms are "paying" a factor of 3: 6x is 3 · 2x, and 9 is 3 · 3. Pull the shared 3 out front and what\'s left inside is 2x + 3. The check is always the distributive property: 3(2x + 3) = 6x + 9 ✓, but 3(2x + 9) = 6x + 27 ✗ — a leftover 9 inside means you forgot it already paid its 3.',
      },
    },
    {
      id: 'c5',
      question: 'You factored something into (x + 3)(x + 4). Distribute it back to check — what should you get?',
      choices: [
        'x² + 12x + 7',
        'x² + 7x + 12',
        'x² + 7x + 7',
        '2x + 7',
      ],
      answer: 1,
      why: 'Locked in. (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12. The pair ADDS to the middle, MULTIPLIES to the end.',
      reExplain: {
        analogy: 'Rewind the tape.',
        text: 'Factoring and distributing are one tape played in opposite directions — the distributive property from way back is your built-in answer key. Each piece of (x + 3) multiplies each piece of (x + 4): x·x = x², x·4 + 3·x = 7x, 3·4 = 12. The trap swaps the pair\'s jobs: 3 and 4 ADD to the middle (7) and MULTIPLY to the end (12), never the other way around.',
      },
    },
  ],
}
