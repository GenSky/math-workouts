import { useState } from 'react'
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { SUBJECTS } from '../data/subjects.js'
import { getLesson } from '../data/lessons/index.js'
import { useProgress } from '../context/ProgressContext.jsx'
import { useSpeech } from '../hooks/useSpeech.js'
import MaxSays from './MaxSays.jsx'
import StreakFlame from './StreakFlame.jsx'
import XPBar from './XPBar.jsx'

export default function Profile() {
  const {
    xp,
    levelInfo,
    streak,
    earnedBadges,
    completedLessons,
    passedSubjects,
    mistakeJournal,
    voiceEnabled,
    setVoiceEnabled,
    subjectProgress,
    resetAll,
  } = useProgress()
  const { supported } = useSpeech()
  const [confirmReset, setConfirmReset] = useState(false)
  const [shared, setShared] = useState(false)

  // Progress-per-subject for the chart (only subjects with authored content).
  const chartData = SUBJECTS.map((s) => ({
    name: s.short,
    pct: subjectProgress(s.id).pct,
    color: s.color,
    hasContent: subjectProgress(s.id).hasContent,
  })).filter((d) => d.hasContent)

  // Mistake journal: which concepts trip you up most.
  const misses = Object.entries(mistakeJournal)
    .map(([id, n]) => ({ title: getLesson(id)?.title || id, n }))
    .sort((a, b) => b.n - a.n)

  async function share() {
    const card = `📐 My Math Workouts card\n★ Level ${levelInfo.level} · ${xp} XP\n🔥 ${streak}-day streak\n🏅 ${earnedBadges.length} badges · ${completedLessons.length} lessons\nCoached by Max.`
    try {
      if (navigator.share) await navigator.share({ text: card })
      else await navigator.clipboard.writeText(card)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch {
      /* user cancelled */
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pb-28 pt-5">
      <h1 className="font-display text-3xl text-stroke">Your Profile</h1>

      {/* Score card (shareable) */}
      <div className="my-4 border-2 border-black bg-gradient-to-br from-slate to-coal p-5 shadow-brutal">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ghost">
              Trainee
            </div>
            <div className="font-display text-2xl">Level {levelInfo.level}</div>
          </div>
          <StreakFlame size="lg" />
        </div>
        <div className="mt-4">
          <XPBar />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat label="XP" value={xp} />
          <Stat label="Lessons" value={completedLessons.length} />
          <Stat label="Badges" value={earnedBadges.length} />
        </div>
        <button onClick={share} className="brutal-btn-lime mt-4 w-full">
          {shared ? '✓ Copied score card' : '↗ Share score card'}
        </button>
      </div>

      {/* Subject progress chart */}
      <h2 className="mb-2 mt-6 font-display text-lg uppercase tracking-wide">Mastery Map</h2>
      {chartData.length > 0 ? (
        <div className="brutal-box p-3">
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -22 }}>
                <XAxis
                  dataKey="name"
                  stroke="#8a8a99"
                  tick={{ fontSize: 10, fontFamily: 'monospace' }}
                />
                <YAxis
                  domain={[0, 100]}
                  stroke="#8a8a99"
                  tick={{ fontSize: 10, fontFamily: 'monospace' }}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{
                    background: '#141417',
                    border: '2px solid #c6ff3a',
                    borderRadius: 0,
                    fontFamily: 'monospace',
                    fontSize: 12,
                  }}
                  formatter={(v) => [`${v}%`, 'complete']}
                />
                <Bar dataKey="pct" radius={0}>
                  {chartData.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <MaxSays>Start a lesson and this chart lights up. Promise.</MaxSays>
      )}

      {/* Mistake journal */}
      <h2 className="mb-2 mt-6 font-display text-lg uppercase tracking-wide">Mistake Journal</h2>
      {misses.length === 0 ? (
        <MaxSays tone="info">
          Clean record so far — nothing to log. When you do slip, I'll track which concepts to
          revisit. Mistakes are just data, remember?
        </MaxSays>
      ) : (
        <div className="space-y-2">
          {misses.map((m) => (
            <div
              key={m.title}
              className="flex items-center justify-between border-2 border-border bg-slate px-4 py-2"
            >
              <span className="text-sm">{m.title}</span>
              <span className="font-mono text-xs text-flame">
                {m.n} miss{m.n === 1 ? '' : 'es'}
              </span>
            </div>
          ))}
          <p className="pt-1 font-mono text-[11px] text-ghost">
            Most-missed sits on top. That's your next rep.
          </p>
        </div>
      )}

      {/* Settings */}
      <h2 className="mb-2 mt-6 font-display text-lg uppercase tracking-wide">Settings</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between border-2 border-border bg-slate px-4 py-3">
          <div>
            <div className="font-semibold">🔊 Voice mode</div>
            <div className="text-xs text-ghost">
              {supported ? 'Let Max read explanations aloud' : 'Not supported on this browser'}
            </div>
          </div>
          <button
            disabled={!supported}
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`h-7 w-12 border-2 border-black transition-colors disabled:opacity-40 ${
              voiceEnabled ? 'bg-lime' : 'bg-coal'
            }`}
            aria-pressed={voiceEnabled}
          >
            <span
              className={`block h-5 w-5 bg-ink transition-transform ${
                voiceEnabled ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {!confirmReset ? (
          <button onClick={() => setConfirmReset(true)} className="brutal-btn-ghost w-full">
            Reset all progress
          </button>
        ) : (
          <div className="border-2 border-flame bg-flame/10 p-4">
            <p className="mb-3 text-sm">
              This wipes XP, streak, badges, everything. Max won't be mad, but there's no undo.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  resetAll()
                  setConfirmReset(false)
                }}
                className="brutal-btn-flame flex-1"
              >
                Wipe it
              </button>
              <button onClick={() => setConfirmReset(false)} className="brutal-btn-ghost flex-1">
                Keep it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="border border-border bg-ink py-2">
      <div className="font-display text-xl text-lime">{value}</div>
      <div className="font-mono text-[9px] uppercase tracking-widest text-ghost">{label}</div>
    </div>
  )
}
