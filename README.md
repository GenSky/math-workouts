# 📐 Math Workouts — coached by Max

A personal math tutoring web app with a Duolingo-inspired learning experience.
Your coach is **Max** — part Sherlock (breaks down logic), part drill sergeant
(keeps you moving), part storyteller (everything has an analogy). No dry
textbooks here. Just a smart friend who happens to be great at math.

![Brutalist dark · mobile-first · gamified](https://img.shields.io/badge/style-brutalist_dark-c6ff3a)

## ✨ What's inside

- **9-subject path** that unlocks in order (Pre-Algebra → Calculus II), each
  gated behind an **80%+ pass** on the previous subject.
- **Full 6-section lessons**: The Hook → Analogy Breakdown → Worked Example
  (step-by-step) → Your Turn (3 practice problems) → Max's Checkpoint
  (5-question quiz) → XP + Streak Reward.
- **Three complete Algebra I lessons**, fully scripted in Max's voice:
  1. What is a Variable?
  2. Solving One-Step Equations
  3. Graphing a Line (slope-intercept form)
- **Max never says "wrong."** A miss is reframed ("Here's what your answer is
  actually saying…") and the concept is re-taught with a **different analogy**.
  Three misses in a row triggers a full **concept reset** with a fresh analogy.
- **Gamification**: XP (10/correct, 25/lesson), daily streak flame, a 50-level
  curve, and a badge vault (First Blood, On a Roll, Boss Slayer…).
- **Stretch goals built in**: 🔊 voice mode (Web Speech API), a mistake journal
  that tracks your weakest concepts, ⚔️ timed **Boss Battle** gauntlets, and
  shareable score cards.
- **Mobile-first** brutalist dark UI: hard borders, offset shadows, bold type,
  electric-lime accents. Every screen works on a phone.

## 🛠 Tech stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| UI             | React 18 + Vite                 |
| Styling        | Tailwind CSS (custom brutalist theme) |
| Animation      | Framer Motion                   |
| Charts         | Recharts                        |
| Routing        | React Router                    |
| Persistence    | `localStorage`                  |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## 🗺 Project structure

```
src/
├── components/        # Dashboard, LessonViewer, Checkpoint, BossBattle, Profile, …
├── context/           # ProgressContext — XP, streaks, badges, unlocks (localStorage)
├── data/
│   ├── subjects.js    # the 9-subject progression + unlock rules
│   ├── badges.js      # badge definitions + earn predicates
│   ├── maxVoice.js    # Max's celebrations, gentle misses, analogy bank
│   └── lessons/       # fully-authored lesson content
├── hooks/             # useLocalStorage, useSpeech (voice mode)
└── lib/               # answer checking, level curve
```

## ➕ Adding a lesson

1. Create `src/data/lessons/<id>.js` following the shape of `variables.js`
   (hook, analogy, worked steps, 3 practice problems, 5 checkpoint questions —
   each checkpoint question carries a `reExplain` with a *different* analogy).
2. Register it in `src/data/lessons/index.js`.
3. List its id under the matching subject's `topics` in `subjects.js`.

Subjects with no authored lessons yet show as **Coming Soon** and don't block
progression, so the path stays playable while content grows.

---

Built mobile-first. Coached by Max. Now go throw the first punch. 🥊
