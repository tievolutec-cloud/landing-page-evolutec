import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CursosPage from './pages/CursosPage'
import CursoDetalhes from './pages/CursoDetalhes'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/curso/:slug" element={<CursoDetalhes />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
