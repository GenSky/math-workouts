import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import SubjectDetail from './components/SubjectDetail.jsx'
import LessonViewer from './components/LessonViewer.jsx'
import BadgeShowcase from './components/BadgeShowcase.jsx'
import Profile from './components/Profile.jsx'
import BossBattle from './components/BossBattle.jsx'
import BadgeToast from './components/BadgeToast.jsx'

const TABS = [
  { to: '/', label: 'Train', icon: '🎯', end: true },
  { to: '/badges', label: 'Badges', icon: '🏅' },
  { to: '/profile', label: 'Profile', icon: '🧑‍🚀' },
]

export default function App() {
  return (
    <div className="min-h-full">
      <BadgeToast />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subject/:subjectId" element={<SubjectDetail />} />
          <Route path="/lesson/:lessonId" element={<LessonViewer />} />
          <Route path="/boss/:subjectId" element={<BossBattle />} />
          <Route path="/badges" element={<BadgeShowcase />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>

      {/* Mobile-first bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-border bg-coal/95 backdrop-blur pad-safe-b">
        <div className="mx-auto flex max-w-2xl">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-0.5 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  isActive ? 'text-lime' : 'text-ghost hover:text-chalk'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`text-xl ${isActive ? 'scale-110' : ''} transition-transform`}>
                    {tab.icon}
                  </span>
                  {tab.label}
                  <span
                    className={`mt-0.5 h-0.5 w-6 ${isActive ? 'bg-lime' : 'bg-transparent'}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
