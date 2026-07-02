// Statistics & Probability · Lesson 1 — Probability
export default {
  id: 'probability',
  subjectId: 'statistics',
  order: 2,
  title: 'Probability: Counting Your Chances',
  icon: '🎲',
  estMinutes: 10,
  tagline: 'How likely? Count the ways it CAN happen, over the ways anything can.',
  prereqs: ['fractions-disguise'],

  plainIdea:
    'Probability measures how likely something is, as a fraction: (ways your thing can happen) ÷ (all the ways anything can happen). It lives on a scale from 0 (impossible) to 1 (guaranteed).',

  vocab: [
    {
      term: 'probability',
      means: 'A number from 0 to 1 measuring how likely an event is. 0 = never, 1 = always, 1/2 = fifty-fifty.',
    },
    {
      term: 'outcome',
      means: 'One possible result — a die landing on 4 is one outcome. A standard die has 6 of them.',
    },
    {
      term: 'event',
      means: 'The thing you care about, which may cover several outcomes — "rolling an even number" is an event containing 2, 4, and 6.',
    },
  ],

  hook: "The forecast says 30% chance of rain. Your friend says the game is 'probably' going to overtime. A doctor says a treatment works 'in most cases.' One of these three actually tells you something precise — and by the end of this lesson you'll be able to turn the other two into real numbers too.",

  analogy: {
    analogy:
      "A bag holds 10 marbles: 3 red, 7 blue. Shake it, reach in blind, grab one. How worried should Team Red be? Simple: 3 of the 10 possible grabs are red. Your chance is 3 out of 10 — the fraction 3/10. That's ALL probability is: put the ways-you-win on top, the total-possible-grabs on the bottom, and read the fraction. (Told you fractions would keep showing up.)",
    bridge:
      "Formally: P(event) = (favorable outcomes) ÷ (total possible outcomes), when all outcomes are equally likely. The answer always lands between 0 and 1: P = 0 means no winning outcomes exist (impossible), P = 1 means every outcome wins (certain), P = 1/2 means a true coin flip. And 30% rain? That's P = 30/100 = 3/10 — same marble bag, bigger sky.",
  },

  worked: {
    problem: 'You roll one standard die. What is the probability of rolling a 5 or higher?',
    steps: [
      {
        label: 'Count EVERYTHING that can happen',
        do: 'A die has six faces: 1, 2, 3, 4, 5, 6. Total outcomes: 6.',
        why: 'The denominator is the whole universe of possibilities. Miss an outcome here and every probability you compute afterward is wrong.',
        result: 'Total: 6 outcomes',
      },
      {
        label: 'Count the outcomes YOU want',
        do: '"5 or higher" covers exactly two faces: 5 and 6.',
        why: 'The event is a club, and outcomes are members. Go face by face: does 4 qualify? No. Does 5? Yes. 6? Yes. Two members.',
        result: 'Favorable: 2 outcomes',
      },
      {
        label: 'Build the fraction',
        do: 'P(5 or higher) = 2/6 = 1/3.',
        why: 'Favorable over total — then simplify, dividing top and bottom by 2 (fraction skills on duty). One roll in three, on average, lands 5+.',
        result: 'P = 1/3',
      },
      {
        label: 'Sanity-check against the 0-to-1 scale',
        do: '1/3 ≈ 0.33 — between 0 and 1, and less than fifty-fifty. Feels right for 2 faces out of 6.',
        why: 'Always gut-check: a probability above 1 or below 0 means you counted wrong. And 1/3 being under 1/2 matches intuition — most rolls WON\'T be 5 or 6.',
        result: '0 ≤ 1/3 ≤ 1 ✓',
      },
    ],
    answer: 'P(5 or higher) = 2/6 = 1/3',
  },

  yourTurn: [
    {
      id: 'pr1',
      context: 'Confidence builder — the most famous probability on Earth.',
      prompt: 'You flip a fair coin. What is P(heads)? Type it as a fraction like 1/2.',
      type: 'text',
      answer: '1/2',
      accepted: ['0.5', '.5', '50%', '1 / 2'],
      hint: 'One favorable outcome (heads) out of two possible (heads, tails).',
    },
    {
      id: 'pr2',
      context: 'Same recipe, six outcomes now.',
      prompt: 'Roll one die. What is P(rolling exactly 3)? Type it like 1/6.',
      type: 'text',
      answer: '1/6',
      accepted: ['1 / 6'],
      hint: 'One winning face out of six total faces.',
    },
    {
      id: 'pr3',
      context: 'A twist — back to the marble bag.',
      prompt: 'A bag has 3 red and 7 blue marbles. You grab one blind. What is P(red)? Type it like 3/10.',
      type: 'text',
      answer: '3/10',
      accepted: ['0.3', '.3', '30%', '3 / 10'],
      hint: 'Favorable = red marbles. Total = ALL marbles (red + blue).',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'A probability of 0 means the event is...',
      choices: ['Certain', 'Impossible', 'Likely', 'Unlucky'],
      answer: 1,
      why: 'Right — zero favorable outcomes exist. P(rolling a 7 on one die) = 0/6 = 0. Can\'t happen.',
      reExplain: {
        analogy: 'The empty shelf.',
        text: 'Probability is favorable ÷ total. If the "favorable" shelf is empty — zero ways to win — the fraction is 0/total = 0. The scale reads: 0 = never, 1 = always, and everything real in between. There\'s no such thing as negative chance or a 110% chance.',
      },
    },
    {
      id: 'c2',
      question: 'Roll one die. P(even number) = ?',
      choices: ['1/6', '1/3', '1/2', '2/3'],
      answer: 2,
      why: 'Clean. Evens are 2, 4, 6 — three faces out of six. 3/6 = 1/2.',
      reExplain: {
        analogy: 'Sort the faces into two teams.',
        text: 'Line up the faces: 1, 2, 3, 4, 5, 6. Team Even gets 2, 4, 6; Team Odd gets 1, 3, 5. Three members each — a perfectly fair split. Three winners out of six total = 3/6 = 1/2, a coin flip in disguise.',
      },
    },
    {
      id: 'c3',
      question: 'The probability of an event equals...',
      choices: [
        'Total outcomes ÷ favorable outcomes',
        'Favorable outcomes ÷ total outcomes',
        'Favorable × total',
        'A lucky guess',
      ],
      answer: 1,
      why: "That's the one. Ways to win on top, all possible ways on the bottom.",
      reExplain: {
        analogy: 'Raffle tickets.',
        text: 'You hold 5 tickets in a raffle of 100. Your chance is 5/100 — YOUR tickets over ALL tickets. Flip the fraction (100/5 = 20) and you\'d have a "probability" of 20, which the 0-to-1 scale immediately calls nonsense. Winners on top, universe on the bottom.',
      },
    },
    {
      id: 'c4',
      question: 'Which of these CANNOT be a probability?',
      choices: ['0', '1/2', '1', '1.5'],
      answer: 3,
      why: 'Exactly. Probabilities live between 0 and 1 — you can\'t be MORE than certain. 1.5 is out of bounds.',
      reExplain: {
        analogy: 'The fraction can\'t overflow.',
        text: 'P = favorable ÷ total, and you can never have more winning outcomes than outcomes! The top of the fraction is at most equal to the bottom, so P maxes out at 1 (certainty). 1.5 would mean 150% sure — sounds confident, means nothing.',
      },
    },
    {
      id: 'c5',
      question: 'You flip 5 heads in a row. What is P(heads) on the NEXT flip?',
      choices: [
        'Nearly 0 — tails is overdue',
        '1/2 — the coin has no memory',
        'Nearly 1 — heads is on a hot streak',
        'Depends on your luck',
      ],
      answer: 1,
      why: 'Locked in. Every flip is a fresh 1/2. Past flips can\'t reach forward and push the coin.',
      reExplain: {
        analogy: 'The forgetful coin.',
        text: 'The coin is a flat metal disc — it stores no history, feels no guilt about streaks, and owes nobody a tails. Each flip: 1 favorable out of 2 possible = 1/2, always. Believing otherwise is called the Gambler\'s Fallacy, and casinos pay their light bills with it.',
      },
    },
  ],
}
