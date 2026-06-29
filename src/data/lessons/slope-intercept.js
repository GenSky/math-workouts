// Algebra I · Lesson 3 — Graphing a Line (slope-intercept form)
export default {
  id: 'slope-intercept',
  subjectId: 'algebra-1',
  order: 3,
  title: 'Graphing a Line (Slope-Intercept)',
  icon: '📈',
  estMinutes: 12,
  tagline: 'y = mx + b — where you start, and how fast you climb.',

  hook: "A streaming service charges $5 just to sign up, then $2 per month. Plot your total cost over time and you get a straight line. Where it starts and how steep it rises is the entire story — and y = mx + b tells it.",

  analogy: {
    analogy:
      "Picture hiking up a hill. The slope is how steep the climb is: a slope of 2 means for every 1 step you take to the right, you climb 2 steps up. Flat ground? Slope of 0. Going downhill? Negative slope. The y-intercept is simply where you're standing before you take a single step — your starting altitude at the trailhead.",
    bridge:
      "Every straight line is written y = mx + b. The m is the slope (the steepness — rise over run). The b is the y-intercept (where the line crosses the vertical y-axis, i.e. your starting point when x = 0). Give me m and b and I can draw the whole line: start at b, then use the slope to step my way across.",
  },

  worked: {
    problem: 'Graph the line  y = 2x + 1.  Identify the slope and y-intercept, then plot two points.',
    steps: [
      {
        label: 'Read off b (the starting point)',
        do: 'In y = 2x + 1, the b is +1.',
        why: 'b is the y-intercept: where the line sits when x = 0. So our first point is (0, 1) — start on the y-axis at height 1.',
        result: 'Start point: (0, 1)',
      },
      {
        label: 'Read off m (the steepness)',
        do: 'The m is 2, which means rise 2, run 1.',
        why: "Slope = rise/run = 2/1. For every 1 step right (run), go 2 steps up (rise). That's our climbing rule.",
        result: 'Slope: up 2, right 1',
      },
      {
        label: 'Step to a second point',
        do: 'From (0, 1): go right 1 → x = 1, up 2 → y = 3. New point (1, 3).',
        why: 'Applying the slope once from the start gives a second point. Two points are all you need to pin down a straight line.',
        result: 'Second point: (1, 3)',
      },
      {
        label: 'Draw the line',
        do: 'Connect (0, 1) and (1, 3) and extend in both directions.',
        why: 'A line is infinite — the two points set its direction and steepness; the ruler does the rest.',
        result: 'Line through (0,1) and (1,3)',
      },
    ],
    answer: 'slope m = 2, intercept b = 1, line through (0,1) & (1,3)',
  },

  yourTurn: [
    {
      id: 's1',
      context: 'Confidence builder — just read off the parts.',
      prompt: 'In  y = 3x + 4,  what is the slope (m)?',
      type: 'number',
      answer: 3,
      hint: 'The slope is the number multiplying x.',
    },
    {
      id: 's2',
      context: 'Same line, different part.',
      prompt: 'In  y = 3x + 4,  what is the y-intercept (b)?',
      type: 'number',
      answer: 4,
      hint: 'The y-intercept is the lone number added at the end — where the line crosses when x = 0.',
    },
    {
      id: 's3',
      context: 'A twist — plug in a value and compute y.',
      prompt: 'For  y = 2x + 1,  what is y when x = 4?',
      type: 'number',
      answer: 9,
      hint: 'Substitute: y = 2(4) + 1 = 8 + 1.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'In y = mx + b, what does m represent?',
      choices: ['The y-intercept', 'The slope (steepness)', 'The x value', 'A constant of zero'],
      answer: 1,
      why: 'Right. m is the slope — how steep the line is, rise over run.',
      reExplain: {
        analogy: 'Car speedometer.',
        text: "m is your rate of climb — like speed tells you miles per hour, slope tells you 'up per right.' In y = mx + b, m is glued to x because the steeper you climb, the more y changes for each step in x.",
      },
    },
    {
      id: 'c2',
      question: 'A slope of 0 describes a line that is...',
      choices: ['Vertical', 'Flat (horizontal)', 'Diagonal up', 'Diagonal down'],
      answer: 1,
      why: "Clean. Slope 0 = no rise = perfectly flat road.",
      reExplain: {
        analogy: 'Walking on level ground.',
        text: 'Rise over run with zero rise = 0/run = 0. No climbing at all, no matter how far right you walk. That\'s a flat, horizontal line.',
      },
    },
    {
      id: 'c3',
      question: 'For y = 4x − 2, where does the line cross the y-axis?',
      choices: ['(0, 4)', '(0, −2)', '(4, 0)', '(−2, 0)'],
      answer: 1,
      why: 'Locked in. b = −2, so it crosses at (0, −2).',
      reExplain: {
        analogy: 'Trailhead altitude.',
        text: 'The y-intercept is your starting altitude when x = 0. Here b = −2, so before taking any step right you\'re already 2 below zero: the crossing point is (0, −2). The y-axis crossing always happens at x = 0.',
      },
    },
    {
      id: 'c4',
      question: 'A slope of 5 means: for every 1 step right, you go...',
      choices: ['5 steps down', '1 step up', '5 steps up', '5 steps right'],
      answer: 2,
      why: "That's the one. Slope 5 = rise 5 for run 1. Up 5 for every 1 across.",
      reExplain: {
        analogy: 'Stairs.',
        text: 'Slope = rise / run. A slope of 5 is 5/1: a steep staircase where each single step forward lifts you 5 steps up. Bigger slope, steeper stairs.',
      },
    },
    {
      id: 'c5',
      question: 'For y = 2x + 1, what is y when x = 3?',
      choices: ['5', '6', '7', '8'],
      answer: 2,
      why: 'Exactly. y = 2(3) + 1 = 6 + 1 = 7.',
      reExplain: {
        analogy: 'Vending machine.',
        text: 'Feed the machine x = 3. It runs the rule: multiply by 2 → 6, then add 1 → 7. Out pops y = 7. A line is just a machine: put x in, get y out by following y = 2x + 1.',
      },
    },
  ],
}
