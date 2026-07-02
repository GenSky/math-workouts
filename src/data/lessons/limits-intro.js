// Pre-Calculus · Lesson 2 — Limits: The Art of Getting Close
export default {
  id: 'limits-intro',
  subjectId: 'pre-calculus',
  order: 2,
  title: 'Limits: The Art of Getting Close',
  icon: '🚶',
  estMinutes: 11,
  tagline: 'Where is the function HEADING — even if it never arrives?',
  prereqs: ['functions'],

  plainIdea:
    'A limit asks: as the input sneaks closer and closer to some value, what output is the function heading toward? It cares about the DESTINATION, not whether the function ever actually arrives. This one idea is the foundation under all of calculus.',

  vocab: [
    {
      term: 'limit',
      means: 'The value a function\'s outputs approach as the inputs approach some target. Written lim x→2 f(x).',
    },
    {
      term: 'approaches (→)',
      means: 'Gets closer and closer to, without necessarily reaching. "x → 2" means x takes values like 1.9, 1.99, 1.999…',
    },
    {
      term: 'undefined',
      means: 'A spot where the function has no value — like 0/0, which arithmetic refuses to answer. A hole in the machine\'s menu.',
    },
  ],

  hook: "Stand ten feet from a wall. Walk half the distance. Now half of what's left. Then half again, forever. Here's the ancient riddle: you'll NEVER touch the wall — yet if I ask 'where are you headed?', everyone on Earth gives the same answer instantly. You already think in limits. Calculus just wrote it down.",

  analogy: {
    analogy:
      "You're driving toward a bridge, but the bridge's center plank is missing — a hole exactly one plank wide. Approaching from the left, your GPS altitude reads: 99 ft, 99.9 ft, 99.99 ft… Approaching from the right: 100.01, 100.001… Both sides agree: the road is heading to 100 ft at that spot. The plank itself? Genuinely missing — stand ON it and there's nothing. But nobody doubts what height the plank WOULD be. That height is the limit.",
    bridge:
      "In symbols: lim x→2 f(x) = 4 reads 'the limit of f as x approaches 2 is 4' — as inputs crowd around 2, the outputs crowd around 4. The magic: this works even when f(2) itself is broken. The classic is f(x) = (x² − 4)/(x − 2). Feed it exactly 2 and you get 0/0 — undefined, a missing plank. Feed it 1.999 or 2.001 and you get outputs hugging 4. The function never arrives at 2, but its destination is beyond doubt: the limit is 4.",
  },

  worked: {
    problem: 'What happens to f(x) = (x² − 4)/(x − 2) as x approaches 2?',
    steps: [
      {
        label: 'Try the direct approach — and hit the hole',
        do: 'Plug in x = 2: (4 − 4)/(2 − 2) = 0/0. Undefined.',
        why: "Dividing zero by zero has no answer — arithmetic shrugs. The machine has no button for exactly 2. But 'no value AT 2' doesn't mean 'no destination NEAR 2.'",
        result: 'f(2) = 0/0 — a hole',
      },
      {
        label: 'Sneak up from the left',
        do: 'f(1.9) = (3.61 − 4)/(1.9 − 2) = (−0.39)/(−0.1) = 3.9. And f(1.99) = 3.99.',
        why: "Inputs just below 2 give outputs just below 4 — and the closer we creep, the tighter they hug 4. That's a trend, and limits are all about trends.",
        result: '1.9 → 3.9, 1.99 → 3.99',
      },
      {
        label: 'Sneak up from the right',
        do: 'f(2.1) = (4.41 − 4)/(2.1 − 2) = 0.41/0.1 = 4.1. And f(2.01) = 4.01.',
        why: 'Both directions must agree for the limit to exist. Left says "heading to 4," right says "heading to 4." Unanimous.',
        result: '2.1 → 4.1, 2.01 → 4.01',
      },
      {
        label: 'See WHY it heads to 4',
        do: 'Factor the top: x² − 4 = (x − 2)(x + 2). So f(x) = (x − 2)(x + 2)/(x − 2) = x + 2 everywhere except x = 2.',
        why: "Away from 2, the (x − 2)s cancel and f is secretly the simple line y = x + 2 — with one missing point at x = 2. The line heads to 2 + 2 = 4. So: lim x→2 f(x) = 4, even though f(2) doesn't exist.",
        result: 'lim x→2 f(x) = 4',
      },
    ],
    answer: 'The limit is 4 — even though f(2) itself is undefined',
  },

  yourTurn: [
    {
      id: 'l1',
      context: 'Confidence builder — a polite function with no holes.',
      prompt: 'What is lim x→3 of (2x + 1)?',
      type: 'number',
      answer: 7,
      hint: 'No hole here — for smooth functions the destination is just the value: plug in 3.',
    },
    {
      id: 'l2',
      context: 'Probe near a hole, like in the example.',
      prompt: 'For f(x) = (x² − 9)/(x − 3), compute f(2.9). (It factors to x + 3 away from the hole.)',
      type: 'number',
      answer: 5.9,
      hint: 'Away from x = 3, f(x) is secretly x + 3. So f(2.9) = 2.9 + 3.',
    },
    {
      id: 'l3',
      context: 'A twist — a limit at infinity.',
      prompt: 'As x grows enormous (x → ∞), what value does 1/x approach?',
      type: 'number',
      answer: 0,
      hint: '1/10 = 0.1, 1/1000 = 0.001, 1/1000000 = 0.000001… Where is this parade heading?',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'A limit describes...',
      choices: [
        'Only the function\'s value exactly at the point',
        'The value the outputs head toward as inputs approach the point',
        'The biggest value the function ever reaches',
        'The slope of the function',
      ],
      answer: 1,
      why: 'Right — the limit is the destination of the trend, whether or not the function actually gets there.',
      reExplain: {
        analogy: 'The missing plank.',
        text: 'The bridge heads to 100 ft at the gap — from both sides. Whether the plank is present (function defined), missing (0/0 hole), or even nailed in at the wrong height, the ROAD\'s destination is the same. Limit = where the road is going. Value = what\'s at the spot. Different questions!',
      },
    },
    {
      id: 'c2',
      question: 'lim x→5 (x + 2) = ?',
      choices: ['7', '5', '2', 'Undefined'],
      answer: 0,
      why: 'Clean. x + 2 is a smooth, unbroken line — the destination at 5 is just the value: 5 + 2 = 7.',
      reExplain: {
        analogy: 'A bridge with no holes.',
        text: 'For a well-behaved function (no holes, no jumps), sneaking up is unnecessary: the destination equals the arrival. Inputs near 5 give outputs near 7, and f(5) IS 7. Limits only get interesting where the function is broken — everywhere else, just plug in.',
      },
    },
    {
      id: 'c3',
      question: 'For f(x) = (x² − 4)/(x − 2): what is true AT exactly x = 2?',
      choices: [
        'f(2) = 4, no drama',
        'f(2) = 0',
        'f(2) is undefined (0/0) — but the limit there is 4',
        'f(2) = −4',
      ],
      answer: 2,
      why: "That's the one. The point itself is a hole, but both sides of the road head to 4.",
      reExplain: {
        analogy: 'Value vs. destination, one more time.',
        text: 'Two separate questions: (1) What is f AT 2? Answer: nothing — 0/0, the plank is missing. (2) What does f approach NEAR 2? Answer: 4 — probe 1.99 and 2.01 and watch the outputs hug 4. The limit exists precisely so we can answer question 2 when question 1 has no answer. This exact trick powers derivatives, next subject over.',
      },
    },
    {
      id: 'c4',
      question: 'As x → ∞, what does 1/x approach?',
      choices: ['∞', '1', '0', '−1'],
      answer: 2,
      why: 'Locked in. One pizza split among ever more people: everyone\'s slice shrinks toward zero.',
      reExplain: {
        analogy: 'The shrinking slice.',
        text: '1/x is one pizza divided among x people. Ten people: decent slices (0.1). A thousand: crumbs (0.001). A billion: molecules. No one ever gets EXACTLY zero pizza — but the slices head unmistakably toward 0. So lim x→∞ 1/x = 0: a destination that\'s approached forever and reached never.',
      },
    },
    {
      id: 'c5',
      question: 'Why do limits matter so much for calculus?',
      choices: [
        'They don\'t — they\'re just a warm-up',
        'Derivatives and integrals are literally DEFINED as limits',
        'They replace addition',
        'They make graphs prettier',
      ],
      answer: 1,
      why: 'Exactly. "Slope at a single instant" and "area from infinite slices" are both impossible-sounding — until limits make them precise.',
      reExplain: {
        analogy: 'The tool behind the tools.',
        text: 'Calculus asks paradoxical questions: your speed at one frozen instant (movement in zero time?), the area under a curve (adding infinitely many zero-width slices?). Limits resolve both: compute over a tiny interval, then take the limit as the interval shrinks to nothing. Every derivative and every integral you\'ll ever meet is a limit under the hood — that\'s why this lesson sits at the gate of Calculus I.',
      },
    },
  ],
}
