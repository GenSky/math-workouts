import React from 'react'
import ReactDOM from 'react-dom/client'
// HashRouter keeps client-side routing working on GitHub Pages, where there's
// no server to rewrite deep links back to index.html.
import { HashRouter } from 'react-router-dom'
// Self-hosted fonts (instead of the Google Fonts CDN) so the installed PWA
// renders identically with zero network.
import '@fontsource/archivo-black/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import '@fontsource/jetbrains-mono/700.css'
import App from './App.jsx'
import { ProgressProvider } from './context/ProgressContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </HashRouter>
  </React.StrictMode>,
)
