// Calculus II · Lesson 1 — Integrals
export default {
  id: 'integrals',
  subjectId: 'calculus-2',
  order: 1,
  title: 'Integrals: Adding Infinite Slices',
  icon: '🍞',
  estMinutes: 12,
  tagline: 'The area under a curve — one impossibly thin slice at a time.',
  prereqs: ['derivatives', 'area-perimeter'],

  plainIdea:
    'An integral adds up infinitely many tiny slices to get a total — like finding the area under a curve by stacking skinny rectangles and shrinking their width to nothing. It\'s also the exact reverse of a derivative: one zooms into rates, the other accumulates totals.',

  vocab: [
    {
      term: 'integral',
      means: 'The total accumulated by a function over an interval — geometrically, the area under its curve. Written with the stretched-S symbol: ∫.',
    },
    {
      term: 'area under a curve',
      means: 'The region trapped between a function\'s graph and the x-axis. For a speed graph, this area IS the distance traveled.',
    },
    {
      term: 'slice',
      means: 'One skinny rectangle in the approximation. Width: a sliver of x. Height: the function\'s value there. Skinnier slices → better total.',
    },
  ],

  hook: "Your car's speedometer got recorded all trip — but the odometer is broken. Speed readings only: can you figure out how FAR you went? If the speed was steady, easy: 60 mph × 2 hours = 120 miles. But real speed wiggles constantly… so you'd need speed-times-time for every little moment, all added up. That 'all added up' has a name, a symbol, and a superpower: it's the integral — the derivative's mirror twin.",

  analogy: {
    analogy:
      "How do you find the area of a curvy, blobby lake on a map? Slice it into skinny vertical strips. Each strip is almost a rectangle — width times height, third-grade math (well… your area-and-perimeter lesson). Add up all the strips: pretty good estimate. Slice SKINNIER: the strips hug the curve better, the estimate improves. Now imagine slicing infinitely thin. The estimate stops being an estimate — it becomes the exact area. A loaf of bread is the same story: the loaf's curvy volume is just the sum of its flat slices.",
    bridge:
      "The integral symbol ∫ is literally a stretched letter S — for 'sum.' ∫ f(x) dx from a to b means: from x = a to x = b, add up slices of height f(x) and width dx (an infinitely thin sliver of x). And the connection to your speedometer problem: distance = speed × time = height × width = AREA under the speed curve. That's the punchline of all of Calc II: totals are areas, and areas come from infinite skinny slices. Bonus twist (the Fundamental Theorem of Calculus): integrating and differentiating undo each other — speed is the derivative of distance, and distance is the integral of speed. Same road, opposite directions.",
  },

  worked: {
    problem: 'A car drives at exactly 60 mph for 2 hours. Then a second car\'s speed climbs steadily from 0 to 60 mph over 2 hours. How far does each travel?',
    steps: [
      {
        label: 'Turn the question into a picture',
        do: 'Graph speed (y) against time (x). Car 1: a flat line at 60. Car 2: a straight ramp from 0 up to 60.',
        why: 'Distance = speed × time, and on this graph that product is height × width — an AREA. "How far?" becomes "how much area sits under the speed curve?"',
        result: 'distance = area under the speed graph',
      },
      {
        label: 'Car 1: the rectangle',
        do: 'Flat line at height 60, width 2 hours: area = 60 × 2 = 120.',
        why: 'Constant speed is the easy case — the region under the graph is a plain rectangle, and area-and-perimeter skills finish it instantly.',
        result: 'Car 1: 120 miles',
      },
      {
        label: 'Car 2: the triangle',
        do: 'The ramp forms a triangle: base 2, height 60. Area = ½ × 2 × 60 = 60.',
        why: 'Still no calculus needed — geometry handles straight edges. Notice the sanity check: smoothly accelerating 0→60 averages 30 mph, and 30 × 2 = 60 ✓.',
        result: 'Car 2: 60 miles',
      },
      {
        label: 'Now the real world: wiggly speed',
        do: 'For a curvy speed graph, no formula from geometry fits. So: slice the region into skinny rectangles, add them, and take the LIMIT as slice width → 0. That limit is ∫.',
        why: 'This is where integrals earn their keep — rectangles and triangles got us here, limits take us the last mile. Infinitely thin slices turn "approximately" into "exactly," the same way shrinking intervals defined the derivative.',
        result: 'curvy area = ∫ speed dt',
      },
    ],
    answer: 'Car 1: 120 miles (rectangle) · Car 2: 60 miles (triangle) · wiggly speeds: the integral',
  },

  yourTurn: [
    {
      id: 'i1',
      context: 'Confidence builder — the rectangle case.',
      prompt: 'A car holds a steady 60 mph for 3 hours. Distance = area under the flat speed line = ?  (miles)',
      type: 'number',
      answer: 180,
      hint: 'A rectangle: height 60, width 3.',
    },
    {
      id: 'i2',
      context: 'The triangle case — steady acceleration.',
      prompt: 'A train\'s speed climbs steadily from 0 to 40 mph over 2 hours. Distance = triangle area = ½ × base × height = ? (miles)',
      type: 'number',
      answer: 40,
      hint: '½ × 2 × 40. (Or: it averaged 20 mph for 2 hours.)',
    },
    {
      id: 'i3',
      context: 'A twist — read an integral as an area.',
      prompt: 'f(x) = 4, a flat line. What is ∫ f(x) dx from x = 0 to x = 5 — the area under the line between 0 and 5?',
      type: 'number',
      answer: 20,
      hint: 'Height 4, width 5. The scary ∫ symbol is asking for a rectangle.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'An integral computes...',
      choices: [
        'The slope at a point',
        'A total accumulated from infinitely many tiny slices — the area under the curve',
        'The vertex of a parabola',
        'The average of two numbers',
      ],
      answer: 1,
      why: 'Right — integrals ADD things up. Slope-at-a-point is the derivative, its mirror twin.',
      reExplain: {
        analogy: 'Zoom in vs. add up.',
        text: 'Calculus has exactly two superpowers. The derivative ZOOMS IN: what\'s the rate at this instant? The integral ADDS UP: what\'s the total over this whole stretch? Speedometer vs. odometer. If the question smells like "how fast right now," differentiate; if it smells like "how much in total," integrate.',
      },
    },
    {
      id: 'c2',
      question: 'The area under a speed-vs-time graph equals...',
      choices: ['Acceleration', 'Distance traveled', 'Fuel used', 'The slope'],
      answer: 1,
      why: 'Exactly. Speed × time = distance, and height × width = area. Same multiplication, same number.',
      reExplain: {
        analogy: 'The units tell the story.',
        text: 'Under a speed graph, each skinny slice has height in miles-per-hour and width in hours. Multiply: (miles/hour) × hours = miles — the hours cancel like a fraction, leaving pure distance. Every slice is a bit of distance covered in a moment; the total area is the whole trip. Units never lie.',
      },
    },
    {
      id: 'c3',
      question: 'The integral symbol ∫ is a stretched-out letter...',
      choices: ['I, for integral', 'S, for sum', 'L, for limit', 'J, just because'],
      answer: 1,
      why: "That's the one. Leibniz stretched an S because an integral IS a sum — of infinitely many tiny pieces.",
      reExplain: {
        analogy: 'The symbol is the recipe.',
        text: 'Read ∫ f(x) dx like a sentence: "Sum up (∫) slices of height f(x) and width dx." The dx is the infinitely-thin slice width, and the tall curvy S is literally the word "sum" from 1675 that never went out of style. The notation isn\'t decoration — it\'s the bread-slicing instructions written in shorthand.',
      },
    },
    {
      id: 'c4',
      question: 'Integrals and derivatives are...',
      choices: [
        'Completely unrelated tools',
        'Opposites — each undoes the other',
        'Two names for the same thing',
        'Both ways to measure slope',
      ],
      answer: 1,
      why: 'Clean. That\'s the Fundamental Theorem of Calculus: differentiate an integral (or integrate a derivative) and you\'re back where you started.',
      reExplain: {
        analogy: 'The round trip.',
        text: 'Position → (differentiate) → speed → (integrate) → position again. One direction asks "how fast is the total changing?", the other asks "what do the rates add back up to?". They\'re inverse moves, like squaring and square-rooting. This is THE theorem of calculus — it means every derivative fact you learned in Calc I is secretly an integration fact read backwards.',
      },
    },
    {
      id: 'c5',
      question: 'Why slice the area into MANY skinny rectangles instead of a few fat ones?',
      choices: [
        'Skinny slices hug the curve better — and in the limit, the answer becomes exact',
        'Fat rectangles are against the rules',
        'Skinny slices are easier to multiply',
        'No real reason — it\'s style',
      ],
      answer: 0,
      why: 'Locked in. Fat slices overshoot and undershoot the curve. Shrink the width and the error dies; the limit is exact.',
      reExplain: {
        analogy: 'Pixels on a screen.',
        text: 'Draw a circle with 20 fat pixels: blocky, wrong at every edge. With 20 million tiny pixels: a perfect-looking circle. Slices are pixels for area — each skinny rectangle misfits the curve by a sliver, and the slivers vanish as the width shrinks. The limit (the same limit from pre-calc!) is what turns "very good approximation" into "the exact area." That\'s the whole engine of the integral.',
      },
    },
  ],
}
