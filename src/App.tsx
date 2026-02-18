import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContributePage from './pages/ContributePage'
import DashboardPage from './pages/DashboardPage'

// When opened from /dist/index.html or /dist/ use that path as basename so routes match.
// At domain root (e.g. / or /about) basename stays ''.
function getBasename() {
  const pathname = window.location.pathname
  if (pathname.endsWith('/') && pathname !== '/') return pathname.slice(0, -1)
  if (pathname.includes('index.html')) return pathname.slice(0, pathname.indexOf('index.html') - 1)
  return ''
}

function App() {
  return (
    <Router basename={getBasename()}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
