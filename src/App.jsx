import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const Home = lazy(() => import('./pages/Home'))
const CursosPage = lazy(() => import('./pages/CursosPage'))
const CursoDetalhes = lazy(() => import('./pages/CursoDetalhes'))
const Unidades = lazy(() => import('./pages/Unidades'))
const Noticia = lazy(() => import('./pages/Noticia'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const Sobre = lazy(() => import('./pages/Sobre'))
const TrabalheConosco = lazy(() => import('./pages/TrabalheConosco'))
const Ebooks = lazy(() => import('./pages/Ebooks'))

import './App.css'
import WhatsappButton from './components/WhatsappButton';

function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* Botão flutuante WhatsApp */}
      <WhatsappButton />
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

