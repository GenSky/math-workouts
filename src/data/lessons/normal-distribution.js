// Statistics & Probability · Lesson 4 — The Normal Distribution
export default {
  id: 'normal-distribution',
  subjectId: 'statistics',
  order: 4,
  title: 'The Bell Curve: Where Everyone Lands',
  icon: '🔔',
  estMinutes: 11,
  tagline: 'Heights, test scores, lab errors — nature keeps drawing the same curve.',
  prereqs: ['standard-deviation'],

  plainIdea:
    'Lots of real-world measurements — heights, test scores — pile up near their average and thin out symmetrically on both sides, making a bell shape. Once you know the mean and the standard deviation, one simple rule tells you roughly where almost everyone lands.',

  vocab: [
    {
      term: 'normal distribution',
      means: 'The bell-shaped pile that data makes when most values huddle near the mean and extreme values get rarer the further out you go.',
    },
    {
      term: 'symmetric',
      means: 'The left half mirrors the right half. Being 10 above the mean is exactly as common as being 10 below it.',
    },
    {
      term: 'empirical rule (68-95-99.7)',
      means: 'On a bell curve, about 68% of the data lands within 1 SD of the mean, about 95% within 2 SDs, and about 99.7% within 3.',
    },
    {
      term: 'SDs above the mean',
      means: 'A universal ruler for "how unusual": (your value − mean) ÷ SD. Two SDs above is rare whether you\'re measuring height, IQ, or lab error.',
    },
  ],

  hook: "Measure the height of every adult in a stadium and dump the numbers into a chart. You'd expect chaos — thousands of strangers, thousands of stories. Instead you get the same smooth bell that shows up for test scores, blood pressure, and telescope measurement errors. Nature keeps sketching one shape, and last lesson's standard deviation turns out to be its measuring stick.",

  analogy: {
    analogy:
      "Drop a thousand balls down a peg board (a carnival Plinko machine). Each ball gets bounced randomly left and right on the way down — yet the pile at the bottom is never random. It's tallest dead center, sloping off evenly to both sides: a bell. Height works the same way: each person's height is thousands of little random nudges (genes, nutrition) added up, so most people land near the middle and extreme heights get rare fast. Anywhere the world adds up many small random pushes, the bell appears.",
    bridge:
      "The bell's center sits at the MEAN, and the standard deviation from last lesson sets its width — small SD, tall skinny bell; big SD, wide flat one. Then comes the gift, the empirical rule: about 68% of the data falls within 1 SD of the mean, about 95% within 2 SDs, about 99.7% within 3. So for heights with mean 170 cm and SD 10 cm: 68% of people are between 160 and 180, and 95% are between 150 and 190. Same rule for any bell — that's what makes 'she's 2 SDs above average' a sentence that works in every field.",
  },

  worked: {
    problem: 'Adult heights: mean 170 cm, SD 10 cm. Where do most people land, and how unusual is 190 cm?',
    steps: [
      {
        label: 'Build the 1-SD band',
        do: 'Mean ± 1 SD: 170 − 10 = 160 and 170 + 10 = 180. The band 160–180 cm holds about 68% of everyone.',
        why: "That's the crowded middle of the bell — roughly two out of three people live inside one SD of the mean. If you guess a stranger is 'within 10 cm of average,' you're right most of the time.",
        result: '160–180 cm ≈ 68% of people',
      },
      {
        label: 'Widen to the 2-SD band',
        do: 'Mean ± 2 SD: 170 − 20 = 150 and 170 + 20 = 190. That band holds about 95%.',
        why: 'Each extra SD sweeps in the next, thinner shell of the bell. Two SDs out and you\'ve captured 19 people out of every 20 — the tails beyond are genuinely rare territory.',
        result: '150–190 cm ≈ 95% of people',
      },
      {
        label: 'Locate 190 cm on the ruler',
        do: '190 = 170 + 2 × 10 — exactly 2 SDs above the mean. Taller than roughly 97.5% of people.',
        why: "If 95% sit inside the 2-SD band, 5% sit outside — and by symmetry, half of that leftover (2.5%) is on each tail. Someone at 190 cm has only the top 2.5% above them: 95% inside plus the 2.5% bottom tail below them.",
        result: '190 cm ≈ taller than 97.5%',
      },
      {
        label: 'One curve to rule them all',
        do: 'Swap in any bell-shaped data — test scores (mean 100, SD 15), lab errors, blood pressure — and the exact same 68-95-99.7 arithmetic runs unchanged.',
        why: "The SD from last lesson is the bell's measuring stick. Once you speak in SDs instead of raw units, every normal dataset becomes the same dataset — that's the superpower.",
        result: 'same rule, every bell',
      },
    ],
    answer: '68% of people land in 160–180 cm; 190 cm is 2 SDs above the mean — rare air.',
  },

  yourTurn: [
    {
      id: 'nd1',
      context: 'Confidence builder — the 1-SD band.',
      prompt: 'Test scores: mean 100, SD 15. About 68% of scores fall between 85 and ___?',
      type: 'number',
      answer: 115,
      hint: 'The band runs from mean − 1 SD to mean + 1 SD. 100 + 15 = ?',
    },
    {
      id: 'nd2',
      context: 'Widen the band.',
      prompt: 'Same test: about 95% of scores fall between 70 and ___?',
      type: 'number',
      answer: 130,
      hint: '95% means 2 SDs each way: 100 + 2 × 15.',
    },
    {
      id: 'nd3',
      context: 'A twist — read the ruler backwards.',
      prompt: 'A score of 130 is how many SDs above the mean of 100 (SD 15)?',
      type: 'number',
      answer: 2,
      hint: 'Gap = 130 − 100 = 30. How many 15s fit in 30?',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The normal curve is symmetric and reaches its peak...',
      choices: [
        'Exactly at the mean',
        'One SD above the mean',
        'At the largest data value',
        'At zero, always',
      ],
      answer: 0,
      why: 'Right — the bell is tallest at the mean and mirrors itself perfectly on both sides. The average is also the most common neighborhood.',
      reExplain: {
        analogy: 'The Plinko pile.',
        text: 'Balls bounced randomly left and right land most often straight below where they were dropped — the pile peaks at the center and falls away evenly on both sides. Data built from many small random nudges does the same: the peak of the pile IS the mean, and neither side is favored. That symmetry is the bell\'s signature.',
      },
    },
    {
      id: 'c2',
      question: 'On a bell curve, about what percentage of the data falls within 2 SDs of the mean?',
      choices: ['68%', '99.7%', '95%', '50%'],
      answer: 2,
      why: 'Exactly. The ladder is 68 → 95 → 99.7 for 1, 2, and 3 SDs. Two SDs out captures 19 of every 20 data points.',
      reExplain: {
        analogy: 'Three fences around a farmhouse.',
        text: 'Picture the mean as a farmhouse with three fences around it, one, two, and three SD-steps out. Inside the first fence you find about 68% of the animals; inside the second, about 95%; inside the third, about 99.7% — nearly everyone. Each fence is just one more SD-step, and the head-counts never change from farm to farm.',
      },
    },
    {
      id: 'c3',
      question: 'A machine fills bottles: mean 50 ml, SD 5 ml. "Within 1 SD of the mean" is the interval...',
      choices: ['45–55 ml', '40–60 ml', '50–55 ml', '35–65 ml'],
      answer: 0,
      why: "That's the one. Mean − 5 to mean + 5: 45 to 55. (40–60 is the 2-SD band — one fence further out.)",
      reExplain: {
        analogy: 'One step each way.',
        text: '"Within 1 SD" means one SD-step in BOTH directions from the center — like standing on the 50 and taking one 5-ml stride left (45) and one stride right (55). A common slip is striding only upward (50–55) or taking two strides (40–60). One SD, both directions: 45–55.',
      },
    },
    {
      id: 'c4',
      question: 'Which of these is roughly normal (bell-shaped)?',
      choices: [
        'Household salaries in a big city',
        'Adult heights',
        'Lottery jackpot winnings',
        'Number of cars a person owns',
      ],
      answer: 1,
      why: 'Clean. Heights come from many small random nudges adding up — classic bell. Salaries are skewed: a long tail of giant earners drags one side out.',
      reExplain: {
        analogy: 'Symmetric nudges vs. a long tail.',
        text: "The bell needs balance: overshooting the average must be about as easy as undershooting it. Heights qualify — nobody is 3 meters tall, nobody is 0.4. Salaries don't: you can't earn much less than zero, but a CEO can earn 1,000× the middle, stretching one tail out for miles. Skewed data breaks the 68-95-99.7 promises — which is why the mean-median-mode lesson told you to reach for the median there.",
      },
    },
    {
      id: 'c5',
      question: 'Two bells share a mean of 100. Bell A has SD 5; Bell B has SD 20. Compared to A, Bell B is...',
      choices: [
        'Taller and skinnier',
        'Shifted to the right',
        'Identical',
        'Wider and flatter',
      ],
      answer: 3,
      why: 'Locked in. Bigger SD = data roaming further from the mean = a wide, low bell. Same center, very different personality.',
      reExplain: {
        analogy: 'Campfire and tents, revisited.',
        text: "Same campfire (mean 100), two camps. Camp A's tents huddle within a few steps — pile them into a chart and you get a tall, narrow spike. Camp B's tents scatter twenty steps out — the chart smears into a low, wide mound. The SD from last lesson literally sets the bell's width; the mean only decides where it's parked.",
      },
    },
  ],
}
