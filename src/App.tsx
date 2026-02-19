import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contribute from './pages/Contribute'
import Dashboard from './pages/Dashboard'

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
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
