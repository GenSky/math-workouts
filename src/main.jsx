import React from 'react'
import ReactDOM from 'react-dom/client'
// HashRouter keeps client-side routing working on GitHub Pages, where there's
// no server to rewrite deep links back to index.html.
import { HashRouter } from 'react-router-dom'
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
