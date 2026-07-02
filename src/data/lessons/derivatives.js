// Calculus I · Lesson 1 — Derivatives
export default {
  id: 'derivatives',
  subjectId: 'calculus-1',
  order: 1,
  title: 'Derivatives: Speed at an Instant',
  icon: '🏎️',
  estMinutes: 12,
  tagline: 'You already do this when you drive. Now we write it down.',
  prereqs: ['limits-intro', 'slope-intercept'],

  plainIdea:
    'A derivative is the slope at one single point — how fast something is changing at this exact instant. Your speedometer reads the derivative of your position. Slope-intercept gave you the slope of a LINE; derivatives give you the slope of ANYTHING.',

  vocab: [
    {
      term: 'derivative',
      means: 'The instantaneous rate of change of a function — its slope at one exact point. Written f′(x), said "f prime of x."',
    },
    {
      term: 'rate of change',
      means: 'How fast one thing changes as another changes — miles per hour, dollars per day, degrees per minute.',
    },
    {
      term: 'tangent line',
      means: 'The straight line that just kisses a curve at one point, matching its direction there. The derivative is that line\'s slope.',
    },
    {
      term: 'instantaneous',
      means: 'At one frozen moment — not averaged over a stretch. The speedometer\'s reading NOW, not the trip average.',
    },
  ],

  hook: "Glance at your speedometer: 43 mph. Obvious, right? Now think about what it's claiming — your speed AT THIS FROZEN INSTANT. But speed is distance ÷ time, and in a frozen instant you travel zero distance in zero time. 0/0! Your dashboard casually solves a paradox that stumped humanity for two thousand years. The solution is called the derivative.",

  analogy: {
    analogy:
      "Your odometer knows WHERE you are (position). Your speedometer knows how fast that's CHANGING (speed). Speed is the derivative of position — one dial is the rate-of-change of the other. And here's the key move: to estimate your speed right now, you could average over the last minute (rough), the last second (better), the last millisecond (nearly perfect)… shrink the window and the averages home in on one number. Sound familiar? That's a LIMIT — last chapter, doing exactly the job it was hired for.",
    bridge:
      "In graph language: a line y = mx + b has one slope, m, everywhere — that was Algebra I. A curve like f(x) = x² has a DIFFERENT steepness at every point: shallow near the bottom, steep out on the arms. The derivative f′(x) is a formula for the slope at any point x: it's the limit of average slopes measured over shrinking intervals. For f(x) = x², that recipe produces f′(x) = 2x — at x = 3 the curve climbs at rate 6; at x = 0 (the vertex) it's momentarily flat, slope 0. One formula, every instant's speed.",
  },

  worked: {
    problem: 'How steep is the curve f(x) = x² exactly at x = 3?',
    steps: [
      {
        label: 'Try an average slope first (a secant)',
        do: 'From x = 3 to x = 4: slope = (f(4) − f(3)) / (4 − 3) = (16 − 9)/1 = 7.',
        why: 'Slope = rise over run — pure Algebra I. But this is the AVERAGE steepness across a whole interval, like your average speed over a full hour. We want the instant.',
        result: 'average slope 3→4: 7',
      },
      {
        label: 'Shrink the window',
        do: 'From 3 to 3.1: (9.61 − 9)/0.1 = 6.1. From 3 to 3.01: (9.0601 − 9)/0.01 = 6.01.',
        why: 'Smaller windows give averages closer to the instant. Watch the parade: 7, 6.1, 6.01… the destination is unmistakable.',
        result: '6.1, then 6.01…',
      },
      {
        label: 'Take the limit',
        do: 'As the window shrinks to nothing, the average slopes approach exactly 6.',
        why: "This is THE move of calculus: we can't divide 0 by 0, but limits tell us the destination of the shrinking averages. The slope of x² at x = 3 is exactly 6 — no approximation.",
        result: "f′(3) = 6",
      },
      {
        label: 'Meet the shortcut formula',
        do: 'Running this recipe at a general point gives f′(x) = 2x for f(x) = x². Check: 2 × 3 = 6 ✓.',
        why: "The limit dance produces a clean pattern (this one's called the power rule — bring the exponent down, drop it by one). Mathematicians did the limit once so you get slope-at-any-instant for the price of a multiplication.",
        result: "f′(x) = 2x",
      },
    ],
    answer: 'The slope of x² at x = 3 is exactly 6 (and in general f′(x) = 2x)',
  },

  yourTurn: [
    {
      id: 'd1',
      context: 'Confidence builder — use the shortcut.',
      prompt: "f(x) = x² has derivative f′(x) = 2x. What is the slope of the curve at x = 5?",
      type: 'number',
      answer: 10,
      hint: 'Feed 5 into the slope formula: 2 × 5.',
    },
    {
      id: 'd2',
      context: 'Derivatives of lines — you secretly already know this.',
      prompt: 'A car\'s position is p(t) = 3t (miles after t hours). What is its speed — the derivative — in mph?',
      type: 'number',
      answer: 3,
      hint: 'p(t) = 3t is a line with slope 3. A line\'s rate of change is its slope, everywhere, always.',
    },
    {
      id: 'd3',
      context: 'A twist — hunt for the flat spot.',
      prompt: "For f(x) = x² with f′(x) = 2x: at what x-value is the slope exactly 0?",
      type: 'number',
      answer: 0,
      hint: 'Solve 2x = 0 (one-step equation!). Bonus: that flat spot is the parabola\'s vertex — the bottom of the U.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The derivative of a function at a point tells you...',
      choices: [
        'The total distance traveled',
        'The instantaneous rate of change — the slope right there',
        'The y-intercept',
        'The area under the curve',
      ],
      answer: 1,
      why: 'Right — the derivative is the "how fast, right now" number: the slope at that exact spot.',
      reExplain: {
        analogy: 'The kissing line.',
        text: 'Zoom into any smooth curve far enough and it looks straight. The tangent line is that straight look — it kisses the curve at one point, matching its direction. The derivative is the slope of that kissing line. Different point, different kiss, different slope: that\'s why the derivative is a whole function, not one number.',
      },
    },
    {
      id: 'c2',
      question: "Your car's speedometer displays the derivative of your...",
      choices: ['Speed', 'Position', 'Fuel level', 'Engine temperature'],
      answer: 1,
      why: 'Exactly. Speed IS the rate of change of position. The speedometer differentiates your odometer, live.',
      reExplain: {
        analogy: 'Two dials, one relationship.',
        text: 'The odometer answers "where are you along the road?" (position). The speedometer answers "how quickly is that answer changing?" — which is, by definition, the derivative of position. Fun chain to ponder: the rate of change of SPEED is acceleration — the derivative of a derivative. Calculus stacks.',
      },
    },
    {
      id: 'c3',
      question: 'f(x) = x², so f′(x) = 2x. The slope at x = 4 is...',
      choices: ['16', '8', '4', '2'],
      answer: 1,
      why: 'Clean. f′(4) = 2 × 4 = 8. (16 is f(4), the HEIGHT — the trap. Slope and height are different questions.)',
      reExplain: {
        analogy: 'Altitude vs. steepness.',
        text: 'Standing on a mountain trail at x = 4: your GPS says altitude 16 (that\'s f(4) — how HIGH). The derivative answers a different question: how STEEP is the trail underfoot? f′(4) = 8 — for each step forward, you climb 8. Two instruments, two readings. The checkpoint classic is mixing them up.',
      },
    },
    {
      id: 'c4',
      question: 'The straight line y = 5x + 2. Its derivative is...',
      choices: ['Always 5', 'Always 2', '5x', 'Different at every point'],
      answer: 0,
      why: "That's the one. A line climbs at the same rate everywhere — slope 5, so derivative 5, constant.",
      reExplain: {
        analogy: 'Cruise control.',
        text: 'A line is a car on cruise control: the same climb rate at every moment. Its rate of change is just its slope m — here 5 — at every single x. (The +2 is the y-intercept, WHERE you started, and starting points don\'t affect speed: that\'s why the 2 vanishes when you differentiate.) Curves are the interesting case — their "speedometer" reading changes as you move.',
      },
    },
    {
      id: 'c5',
      question: 'Why are limits needed to define the derivative?',
      choices: [
        "They aren't — it's just division",
        'Instant slope = the limit of average slopes over shrinking intervals; plain division would give 0/0',
        'To make calculus harder',
        'Limits compute the area instead',
      ],
      answer: 1,
      why: 'Locked in. Zero distance over zero time is 0/0 — undefined. The limit reads the destination of the shrinking averages instead.',
      reExplain: {
        analogy: 'The paradox, dissolved.',
        text: 'Average speed needs a time window: distance ÷ time. Shrink the window to a single instant and both hit zero — 0/0, the missing plank from the limits lesson. The fix is pure limits: compute averages over windows of 1s, 0.1s, 0.001s… and report where they\'re HEADING (7, 6.1, 6.01 → 6). The derivative IS that limit. No limits, no derivative — which is exactly why limits guard the gate to calculus.',
      },
    },
  ],
}
