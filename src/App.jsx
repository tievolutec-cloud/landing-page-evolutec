import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/curso/:slug" element={<CursoDetalhes />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/noticia/:id" element={<Noticia />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
