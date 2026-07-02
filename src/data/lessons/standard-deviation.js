// Statistics & Probability · Lesson 2 — Standard Deviation
export default {
  id: 'standard-deviation',
  subjectId: 'statistics',
  order: 3,
  title: 'Standard Deviation: The Spread',
  icon: '📏',
  estMinutes: 12,
  tagline: 'The average distance from the average. How wild is your data?',
  prereqs: ['mean-median-mode', 'exponents'],

  plainIdea:
    'Standard deviation measures how SPREAD OUT a set of numbers is — roughly, the typical distance of the data points from their average. Small SD: everything huddles near the mean. Big SD: the data is all over the place.',

  vocab: [
    {
      term: 'mean (average)',
      means: 'Add all the values, divide by how many there are. The balance point of the data.',
    },
    {
      term: 'deviation',
      means: 'How far one data point sits from the mean — its personal gap. Can be negative (below the mean) or positive (above).',
    },
    {
      term: 'variance',
      means: 'The average of the SQUARED deviations. A measure of spread, but in squared units.',
    },
    {
      term: 'standard deviation (SD)',
      means: 'The square root of the variance — spread measured back in the data\'s own units. The headline number.',
    },
  ],

  hook: "Two basketball players both average exactly 20 points a game. Player A scores 19, 21, 20, 20, 19… Player B scores 5, 35, 2, 38, 20… Same average. WILDLY different players. Whose jersey do you buy? The average can't answer that question — but one more number can, and it's on every scouting report in professional sports.",

  analogy: {
    analogy:
      "The mean tells you where the team's campfire is. Standard deviation tells you how far from the fire everyone pitched their tents. Player A's scores camp in a tight ring around 20 — you know exactly what you're getting every night. Player B's scores are scattered across the whole mountainside — same campfire, total chaos. Two datasets can share a mean and live completely different lives; SD is the number that tells them apart.",
    bridge:
      "The recipe has four moves: (1) find the mean; (2) measure each point's deviation from it; (3) SQUARE each deviation and average those squares — that's the variance. Why square? Below-the-mean gaps are negative and above-the-mean gaps are positive, so raw gaps would cancel to zero every single time (a useless spread-o-meter!). Squaring makes every gap positive — exponents doing real work. (4) Take the square root to undo the squaring and land back in normal units. That final number is the standard deviation.",
  },

  worked: {
    problem: 'Find the standard deviation of the dataset: 2, 4, 4, 4, 5, 5, 7, 9.',
    steps: [
      {
        label: 'Find the campfire (the mean)',
        do: 'Sum: 2+4+4+4+5+5+7+9 = 40. Count: 8 values. Mean = 40 ÷ 8 = 5.',
        why: 'Everything else is measured FROM the mean, so it comes first. The fraction bar strikes again: 40/8 = 5.',
        result: 'mean = 5',
      },
      {
        label: 'Measure each tent\'s distance (deviations)',
        do: 'Subtract 5 from each value: −3, −1, −1, −1, 0, 0, 2, 4.',
        why: "Each number's personal gap from the mean. Notice they'd sum to zero — the negatives exactly cancel the positives. That's why we can't just average these raw.",
        result: '−3, −1, −1, −1, 0, 0, 2, 4',
      },
      {
        label: 'Square them all, then average (variance)',
        do: 'Squares: 9, 1, 1, 1, 0, 0, 4, 16. Sum = 32. Variance = 32 ÷ 8 = 4.',
        why: 'Squaring kills every minus sign (quadratics taught you this), so gaps can no longer cancel. Averaging the squares gives the variance: spread, but in weird squared units.',
        result: 'variance = 4',
      },
      {
        label: 'Un-square to finish (standard deviation)',
        do: 'SD = √variance = √4 = 2.',
        why: 'The square root brings us back to the data\'s own units: these values sit typically about 2 away from the mean of 5. Small number → tight camp → consistent data.',
        result: 'SD = 2',
      },
    ],
    answer: 'Standard deviation = 2 (mean 5, typical gap of 2)',
  },

  yourTurn: [
    {
      id: 'sd1',
      context: 'Confidence builder — step one of the recipe.',
      prompt: 'Dataset: 3, 3, 7, 7. What is the mean?',
      type: 'number',
      answer: 5,
      hint: 'Add them (20), divide by how many (4).',
    },
    {
      id: 'sd2',
      context: 'Finish the recipe on the same data.',
      prompt: 'For 3, 3, 7, 7 (mean 5), every deviation is −2 or +2, so every squared deviation is 4. The variance is 4. What is the standard deviation?',
      type: 'number',
      answer: 2,
      hint: 'SD = the square root of the variance. √4 = ?',
    },
    {
      id: 'sd3',
      context: 'A twist — read SDs like a scout.',
      prompt: "Team A's game scores have SD 1.2. Team B's have SD 9.5. Which team is more CONSISTENT? Type A or B.",
      type: 'text',
      answer: 'a',
      accepted: ['team a', 'a team'],
      hint: 'Smaller spread = tents closer to the campfire = more predictable.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'Standard deviation measures...',
      choices: [
        'The average of the data',
        'How spread out the data is around its mean',
        'The largest value',
        'How many data points there are',
      ],
      answer: 1,
      why: 'Right — it\'s the spread-o-meter: the typical distance of points from their average.',
      reExplain: {
        analogy: 'Campfire and tents.',
        text: 'The mean is the campfire; SD is the typical tent-to-fire distance. Two campsites can have fires in the same spot (equal means) while one has tents huddled close (small SD) and the other has them scattered up the mountain (big SD). SD answers "how huddled?", not "where\'s the fire?".',
      },
    },
    {
      id: 'c2',
      question: 'Two players both average 20 points. Player A has SD 1; Player B has SD 12. Who is more predictable night to night?',
      choices: ['Player A', 'Player B', 'Equally predictable', 'Can\'t tell from SD'],
      answer: 0,
      why: 'Clean. SD 1 means scores hug 20 (19s and 21s). SD 12 means wild swings (8s and 32s). A is the safe bet.',
      reExplain: {
        analogy: 'Reading the scouting report.',
        text: 'Same campfire (mean 20), different camps. Player A\'s tents are pitched a single step from the fire — every game looks like the last. Player B\'s are scattered a dozen steps out in every direction — boom or bust. This is exactly why analysts report mean AND SD: the mean is the promise, the SD is how much to trust it.',
      },
    },
    {
      id: 'c3',
      question: 'Why does the recipe SQUARE the deviations before averaging?',
      choices: [
        'To make the numbers more impressive',
        'Because negative and positive gaps would otherwise cancel to zero',
        'Ancient tradition',
        'Calculators require it',
      ],
      answer: 1,
      why: "That's the one. Raw deviations always sum to zero — squaring makes every gap count as positive spread.",
      reExplain: {
        analogy: 'Distance, not direction.',
        text: 'A tent 3 steps NORTH of the fire and a tent 3 steps SOUTH are equally far away — but as raw deviations they\'re +3 and −3, and they cancel to zero, claiming a perfectly huddled camp. Squaring turns both into 9: direction erased, distance kept. (Negative × negative = positive — the same fact that gave parabolas their U shape.)',
      },
    },
    {
      id: 'c4',
      question: 'A dataset where every value is identical (say 7, 7, 7, 7) has standard deviation...',
      choices: ['1', '0', '−1', 'Undefined'],
      answer: 1,
      why: 'Exactly. Every deviation is 0, so the spread is 0. No spread, no deviation — the tents are IN the fire.',
      reExplain: {
        analogy: 'The robot player.',
        text: 'A player who scores exactly 7 points every single game: mean 7, and every game sits at distance 0 from that mean. Squares of zeros: zeros. Average: 0. Square root: 0. SD = 0 is the mathematical signature of perfect consistency — and it\'s the floor; SD can never be negative (it\'s built from squares).',
      },
    },
    {
      id: 'c5',
      question: 'Why take a square ROOT at the end of the recipe?',
      choices: [
        'To undo the earlier squaring and return to the data\'s original units',
        'To make the number smaller and less scary',
        'Pure style',
        'No reason — it\'s optional',
      ],
      answer: 0,
      why: 'Locked in. Squaring bailed us out but left us in squared units (points²?!). The root brings the answer home.',
      reExplain: {
        analogy: 'Translate back before reporting.',
        text: "Squaring was a working language we translated INTO so the gaps couldn't cancel. But 'variance = 4 points squared' answers a question nobody asked. Take √4 = 2 and you can finally say something humans understand: 'scores typically stray about 2 points from average.' Square in to do the math, root out to speak the answer.",
      },
    },
  ],
}
