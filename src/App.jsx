import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
const Footer = lazy(() => import('./components/Footer'))
const WhatsappButton = lazy(() => import('./components/WhatsappButton'))
const CursosPage = lazy(() => import('./pages/CursosPage'))
const CursoDetalhes = lazy(() => import('./pages/CursoDetalhes'))
const Unidades = lazy(() => import('./pages/Unidades'))
const Noticia = lazy(() => import('./pages/Noticia'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const Sobre = lazy(() => import('./pages/Sobre'))
const TrabalheConosco = lazy(() => import('./pages/TrabalheConosco'))
const Ebooks = lazy(() => import('./pages/Ebooks'))

import './App.css'

function useIdleMount(delay = 1200) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let timeoutId
    let idleId

    const mount = () => setMounted(true)

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(mount, { timeout: delay })
    } else {
      timeoutId = window.setTimeout(mount, delay)
    }

    return () => {
      if (typeof window !== 'undefined' && idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [delay])

  return mounted
}

function SiteLayout() {
  const showNonCritical = useIdleMount(1400)

  return (
    <>
      <Navbar />
      <Outlet />
      {showNonCritical ? (
        <Suspense fallback={null}>
          <Footer />
          <WhatsappButton />
        </Suspense>
      ) : null}
    </>
  )
}

function App() {
  return (
      <Router>
        <Suspense fallback={null}>
          <Routes>
            {/* ── Site público (com Navbar + Footer) ── */}
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<CursosPage />} />
              <Route path="/curso/:slug" element={<CursoDetalhes />} />
              <Route path="/unidades" element={<Unidades />} />
              <Route path="/noticia/:id" element={<Noticia />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
              <Route path="/ebooks" element={<Ebooks />} />
            </Route>

          </Routes>
        </Suspense>
      </Router>
  )
}

export default App

