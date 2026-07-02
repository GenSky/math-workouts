// Statistics & Probability · Lesson 1 — Mean, Median, Mode
export default {
  id: 'mean-median-mode',
  subjectId: 'statistics',
  order: 1,
  title: 'Mean, Median, Mode: Three Kinds of Average',
  icon: '📊',
  estMinutes: 9,
  tagline: 'One dataset, three honest summaries. Learn which one to trust.',
  prereqs: ['fractions-disguise'],

  plainIdea:
    'An "average" is one number that stands in for a whole pile of numbers — and there are three ways to pick it: the mean (add everything, split it evenly), the median (line the numbers up and take the middle one), and the mode (the number that shows up most).',

  vocab: [
    {
      term: 'mean',
      means: 'Add all the values, divide by how many there are. The balance point — what everyone would get if the total were shared evenly.',
    },
    {
      term: 'median',
      means: 'Sort the values smallest to largest, then take the one in the middle. Half the data sits below it, half above.',
    },
    {
      term: 'mode',
      means: 'The value that appears most often. The crowd favorite — no adding or sorting required, just counting.',
    },
    {
      term: 'outlier',
      means: 'A value wildly far from the rest of the pack. One outlier can yank the mean around while the median barely blinks.',
    },
  ],

  hook: "A headline screams: 'Average salary at this company: $250,000!' You take the job… and everyone around you earns $40,000. Nobody lied. The CEO makes millions, and that one paycheck dragged the 'average' into fantasyland. There are three different numbers that can legally call themselves the average — and knowing which one you're being shown is a life skill.",

  analogy: {
    analogy:
      "Picture your whole dataset as kids lined up by height for a class photo. The MEDIAN is the kid standing dead center of the sorted line — half the class on each side, simple as that. The MODE is the height you see most often when you scan the row — the one that keeps repeating. And the MEAN? Imagine melting the whole class down and re-pouring everyone at identical height so the total height stays the same — that shared, evened-out height is the mean. Three photographs of the same class, three different stories.",
    bridge:
      "In math clothes: mean = sum ÷ count — for 3, 7, 7, 2, 6 that's 25/5 = 5 (the fraction bar from fractions-in-disguise, doing what it always does: splitting a total evenly). Median: sort first — 2, 3, 6, 7, 7 — then grab the middle value, 6. Mode: tally the repeats — 7 appears twice, so mode = 7. One dataset just gave three different answers, and each one is telling the truth about a different question.",
  },

  worked: {
    problem: 'Find the mean, median, and mode of the dataset 3, 7, 7, 2, 6.',
    steps: [
      {
        label: 'Mean — share the total evenly',
        do: 'Sum: 3 + 7 + 7 + 2 + 6 = 25. Count: 5 values. Mean = 25 ÷ 5 = 5.',
        why: "The mean is the balance point: if these five numbers pooled everything and split it fairly, each would hold 5. It's just a fraction — 25/5 — wearing a statistics costume.",
        result: 'mean = 5',
      },
      {
        label: 'Median — SORT first, then take the middle',
        do: 'Sort: 2, 3, 6, 7, 7. Five values, so the middle is the 3rd one: 6.',
        why: "Sorting is not optional. The middle of the UNSORTED list (7) is meaningless — the median is about rank, and rank only exists once the line is in order. With 5 values, the 3rd has exactly two below and two above.",
        result: 'median = 6',
      },
      {
        label: 'Mode — count the repeats',
        do: 'Tally: 2 once, 3 once, 6 once, 7 twice. The most frequent value is 7.',
        why: 'The mode asks the simplest question of the three: which value shows up most? No arithmetic at all — just a popularity contest.',
        result: 'mode = 7',
      },
      {
        label: 'Three answers, zero contradictions',
        do: 'Mean 5, median 6, mode 7 — all from the same five numbers.',
        why: "None of them is 'wrong.' Each summarizes a different thing: the mean balances the total, the median marks the center of the line, the mode names the crowd favorite. Choosing which to report is where the real skill lives.",
        result: 'mean 5 · median 6 · mode 7',
      },
    ],
    answer: 'Mean = 5, median = 6, mode = 7',
  },

  yourTurn: [
    {
      id: 'mmm1',
      context: 'Confidence builder — run the mean recipe.',
      prompt: 'What is the mean of 4, 8, 6, 2?',
      type: 'number',
      answer: 5,
      hint: 'Add them (20), divide by how many (4).',
    },
    {
      id: 'mmm2',
      context: 'The median — do not skip the first move.',
      prompt: 'What is the median of 1, 9, 5? (careful — sort first)',
      type: 'number',
      answer: 5,
      hint: 'Sorted: 1, 5, 9. Now take the middle of THAT line.',
    },
    {
      id: 'mmm3',
      context: 'A twist — the popularity contest.',
      prompt: 'What is the mode of 2, 4, 4, 7?',
      type: 'number',
      answer: 4,
      hint: 'Which value appears more than once? Count, don\'t compute.',
    },
  ],

  checkpoint: [
    {
      id: 'c1',
      question: 'The mean of 10, 20, 30 is...',
      choices: ['15', '60', '20', '25'],
      answer: 2,
      why: 'Right — sum is 60, count is 3, and 60 ÷ 3 = 20. (60 is the total, not the average — the classic step-skip.)',
      reExplain: {
        analogy: 'Splitting the bill.',
        text: 'Three friends at dinner spend 10, 20, and 30 dollars, then decide to split the bill evenly. Total on the table: 60. Split three ways: 20 each. The mean is exactly that even split — the total is only halfway to the answer; you still have to divide by the head count.',
      },
    },
    {
      id: 'c2',
      question: 'What is the median of 8, 1, 5?',
      choices: ['1 — the middle value as written', '5', '8', '4'],
      answer: 1,
      why: "That's the one. Sort first — 1, 5, 8 — and THEN take the middle: 5. The unsorted middle is a decoy.",
      reExplain: {
        analogy: 'Line up before you pick.',
        text: "Imagine picking the middle-height kid for a photo while the class is milling around randomly — you'd just get whoever happened to be standing in the center. The median only means something after everyone lines up shortest-to-tallest. Sort 8, 1, 5 into 1, 5, 8, and the true middle — 5 — steps forward.",
      },
    },
    {
      id: 'c3',
      question: 'Ten regulars in a bar each earn about $50k. A billionaire walks in. Which summary of "income in this bar" barely moves?',
      choices: ['The median', 'The mean', 'Both move equally', 'Neither moves at all'],
      answer: 0,
      why: 'Exactly. The median only cares who\'s in the MIDDLE of the sorted line — one giant at the end barely shifts it. The mean gets dragged into the millions.',
      reExplain: {
        analogy: 'The seesaw and the line.',
        text: 'The mean is a seesaw balance point: park a billionaire on one end and the balance point lurches violently toward them. The median is just the person standing mid-line — add one more person at the far end and the middle position shifts by half a spot at most. Outliers own the mean; the median shrugs them off.',
      },
    },
    {
      id: 'c4',
      question: 'What is the mode of 3, 5, 5, 5, 9?',
      choices: ['3', '9', '5.4', '5'],
      answer: 3,
      why: 'Clean. 5 appears three times; nothing else repeats. (5.4 is the mean — a different tool answering a different question.)',
      reExplain: {
        analogy: 'The bestseller list.',
        text: "A bookshop doesn't average its sales to find the hit of the week — it counts copies sold and crowns the title that moved the most. That's the mode: pure frequency, zero arithmetic. In 3, 5, 5, 5, 9, the number 5 'sold' three copies while everything else sold one. Bestseller: 5.",
      },
    },
    {
      id: 'c5',
      question: 'A news report wants ONE honest headline number for salaries in a city (a few earners are enormous). Best pick?',
      choices: ['The mean', 'The median', 'The largest salary', 'The mode of everyone\'s rent'],
      answer: 1,
      why: 'Locked in. Salaries are skewed — a handful of giants inflate the mean. The median reports the middle person\'s reality.',
      reExplain: {
        analogy: 'The typical customer.',
        text: 'If nine customers spend $10 and one spends $10,000, saying "our average customer spends over $1,000" is technically true and totally misleading. The median customer — the one in the middle of the sorted receipts — spent $10, and that\'s the honest picture of a typical visit. Skewed data (salaries, home prices, wait times): lead with the median.',
      },
    },
  ],
}
