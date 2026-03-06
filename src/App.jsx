import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CursosPage from './pages/CursosPage'
import CursoDetalhes from './pages/CursoDetalhes'
import Unidades from './pages/Unidades'
import Noticia from './pages/Noticia'
import BlogPage from './pages/BlogPage'
import Sobre from './pages/Sobre'
import TrabalheConosco from './pages/TrabalheConosco'
import Ebooks from './pages/Ebooks'

import './App.css'

function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
      <Router>
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
      </Router>
  )
}

export default App

