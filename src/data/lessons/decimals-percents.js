// Pre-Algebra · Lesson 4 — Decimals & Percents: Fractions in New Outfits
export default {
  id: 'decimals-percents',
  subjectId: 'pre-algebra',
  order: 4,
  title: 'Decimals & Percents: Fractions in New Outfits',
  icon: '🏷️',
  estMinutes: 9,
  tagline: 'Same number, three costumes.',
  prereqs: ['fractions-disguise'],

  plainIdea:
    'Decimals and percents aren\'t new numbers — they\'re fractions wearing different outfits. 3/5, 0.6, and 60% are the exact same amount written three ways, and "percent" just means "out of 100."',

  vocab: [
    {
      term: 'decimal',
      means: 'A number written with a dot, like 0.6 — the digits after the dot count tenths, hundredths, and so on.',
    },
    {
      term: 'percent',
      means: 'Literally "per hundred." 60% means 60 out of every 100 — the fraction 60/100 in a fancy jacket.',
    },
    {
      term: 'convert',
      means: 'Rewrite the same amount in a different outfit: fraction to decimal, decimal to percent. The value never changes.',
    },
    {
      term: 'of (in percent problems)',
      means: 'A secret multiplication sign. "20% of 45" means 0.20 × 45.',
    },
  ],

  hook: "A jacket you've been eyeing is 40% off. The tag says $45. Your friend asks, 'So what do you actually pay?' Everyone at the rack goes quiet. By the end of this lesson, that silence is where you shine.",

  analogy: {
    analogy:
      "Think of one person with three outfits. In gym clothes, she's 3/5. In a work suit, she's 0.6. On the red carpet, she's 60%. Different looks, same person — you'd never say the suit made her a different human. Fractions, decimals, and percents are exactly that: three dress codes for one identical amount.",
    bridge:
      "Remember Fractions: Division in Disguise — a fraction bar is a lying-down division sign. Run the division and you get the decimal outfit: 3/5 = 3 ÷ 5 = 0.6. Then percent is just the amount recut into hundredths: 0.6 = 0.60 = 60/100 = 60%. To go percent → decimal, reverse it: divide by 100 (60% = 0.60). Same number every step of the way.",
  },

  worked: {
    problem: 'Write 3/5 as a decimal and a percent. Then use the percent skill to find 20% of 45.',
    steps: [
      {
        label: 'Fraction → decimal',
        do: 'Recut 3/5 into tenths: multiply top and bottom by 2 → 6/10 = 0.6.',
        why: 'Tenths are what the first decimal place counts. Same amount, finer slices — 3/5 and 6/10 are the same pizza, so 3/5 = 0.6.',
        result: '3/5 = 0.6',
      },
      {
        label: 'Decimal → percent',
        do: 'Write 0.6 as 0.60, which is 60/100 — that\'s 60 per hundred, so 60%.',
        why: 'Percent means "per hundred." Once the number is in hundredths, the percent just reads itself off: 0.60 = 60/100 = 60%.',
        result: '0.6 = 60%',
      },
      {
        label: 'Undress the 20%',
        do: 'Change 20% back into a usable number: 20% = 20/100 = 0.20.',
        why: 'You can\'t multiply by a costume. Percent → decimal means divide by 100, and 0.20 is the working outfit.',
        result: '20% = 0.20',
      },
      {
        label: '"Of" means multiply',
        do: 'Compute 0.20 × 45 = 9.',
        why: '"20% of 45" is a multiplication in disguise. One-fifth of 45 is 9 — the fraction outfit (20% = 1/5) confirms the same answer.',
        result: '20% of 45 = 9',
      },
    ],
    answer: '3/5 = 0.6 = 60%, and 20% of 45 = 9',
  },

  yourTurn: [
    {
      id: 'd1',
      context: 'Confidence builder — a fraction you already know by heart.',
      prompt: 'What is 1/4 as a percent? (just the number)',
      type: 'number',
      answer: 25,
      hint: 'Recut 1/4 into hundredths: multiply top and bottom by 25.',
    },
    {
      id: 'd2',
      context: 'Same skill, starting from the decimal outfit.',
      prompt: 'Write 0.35 as a percent (just the number).',
      type: 'number',
      answer: 35,
      hint: '0.35 = 35/100. Percent means per hundred — the number reads itself off.',
    },
    {
      id: 'd3',
      context: 'A twist — percent OF a number, no calculator needed.',
      prompt: 'What is 15% of 80?',
      type: 'number',
      answer: 12,
      hint: 'Break it down: 10% of 80 is 8, and 5% is half of that — 4. Add them.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The word "percent" literally means...',
      choices: ['Per ten', 'Per hundred', 'Per thousand', 'A really big number'],
      answer: 1,
      why: 'Right — "cent" as in century (100 years) or 100 cents in a dollar. Percent = per hundred.',
      reExplain: {
        analogy: 'A dollar in pennies.',
        text: 'A dollar is 100 pennies, so every penny is 1% of a dollar. Say "37%" and you\'re saying "37 pennies out of the dollar" — 37 out of 100. That\'s the whole word: per (out of every) cent (hundred).',
      },
    },
    {
      id: 'c2',
      question: '0.5 written as a percent is...',
      choices: ['0.5%', '5%', '50%', '500%'],
      answer: 2,
      why: 'Exactly. 0.5 = 0.50 = 50/100 = 50%. Half of anything is 50 out of every 100.',
      reExplain: {
        analogy: 'A glass of water.',
        text: 'A half-full glass is 0.5 of a glass. If the glass had 100 tick marks, the water would sit at mark 50 — 50 out of 100, so 50%. The trap answer 5% would be a nearly empty glass; 0.5 is clearly half.',
      },
    },
    {
      id: 'c3',
      question: 'Which is the biggest amount: 0.7, 65%, or 3/5?',
      choices: ['0.7', '65%', '3/5', 'They\'re all equal'],
      answer: 0,
      why: 'Clean. Put them all in the percent outfit: 0.7 = 70%, 65% = 65%, 3/5 = 60%. Seventy wins.',
      reExplain: {
        analogy: 'Judging a race by one finish line.',
        text: 'You can\'t compare runners on three different tracks. Move everyone to the same track — hundredths: 0.7 becomes 70/100, 65% is 65/100, 3/5 becomes 60/100. Now it\'s just 70 vs 65 vs 60, and 0.7 crosses the line first.',
      },
    },
    {
      id: 'c4',
      question: 'What is 10% of 250?',
      choices: ['2.5', '10', '25', '2500'],
      answer: 2,
      why: 'Locked in. 10% = 0.10, and 0.10 × 250 = 25. Ten percent is always one-tenth.',
      reExplain: {
        analogy: 'The tip trick.',
        text: 'Finding 10% is just sliding the decimal point one spot left: 250 becomes 25.0. That\'s why tipping math starts there — 10% of any bill is the bill with the point nudged left. One-tenth of 250 is 25.',
      },
    },
    {
      id: 'c5',
      question: 'To turn a percent into a decimal, you...',
      choices: [
        'Multiply by 100',
        'Divide by 100',
        'Add 100',
        'Remove the % sign and change nothing',
      ],
      answer: 1,
      why: 'That\'s the one. 45% = 45/100 = 0.45. The % sign was hiding a ÷ 100 the whole time.',
      reExplain: {
        analogy: 'Taking off the costume.',
        text: 'The % sign is a costume that secretly means "out of 100." To get the plain number back, undo it: divide by 100. So 8% = 8 ÷ 100 = 0.08 — not 8, and definitely not 800. Just dropping the sign without dividing makes the number 100 times too big.',
      },
    },
  ],
}
