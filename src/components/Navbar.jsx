import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(prev => {
      console.log('Menu toggle:', !prev)
      return !prev
    })
  }
  const closeMenu = () => setMenuOpen(false)

  // Detecta mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      if (!mobile && menuOpen) {
        closeMenu()
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number(scroll))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll para seção quando a URL contém hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  // Fecha o menu ao clicar fora dele em mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-container')) {
        closeMenu()
      }
    }

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen])

  // Função para lidar com navegação de âncoras
  const handleAnchorClick = (e, anchor) => {
    closeMenu()
    
    // Se o link for para a página de unidades, não faz scroll, apenas redireciona
    if (anchor === '#unidades') {
      return;
    }
    
    // Se já estamos na home
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Se não estamos na home, deixa o Link redirecionar
  }

  // Função especial para link de cursos
  const handleCursosClick = (e) => {
    closeMenu()
    
    // Se estamos na home, scroll para seção
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector('#cursos')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Se não estamos na home, vai para página de cursos
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <a href="https://wa.me/" className="top-bar-link whatsapp-link">
            <MessageCircle size={16} />
            Matricule-se pelo WhatsApp
          </a>
          <div className="top-bar-right">
            <a href="cta0" className="top-bar-link">
              VENHA VOCÊ TAMBÉM FAZER PARTE DO EVOLUTEC!
            </a>
            <a href="#cta1" className="top-bar-btn btn-outline">
              Área do Aluno
            </a>
            <Link to="/trabalhe-conosco" className="top-bar-btn btn-yellow" onClick={closeMenu}>
              Trabalhe conosco
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-evolutec.png" alt="Evolutec Logo" className="logo-img"/>
        </Link>

        <button 
          className={`navbar-toggle${menuOpen ? ' open' : ''}`} 
          onClick={toggleMenu} 
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul 
          id="navbar-menu"
          className={`navbar-links${menuOpen ? ' active' : ''}`}
          role="navigation"
        >
          <li><Link to="/#home" onClick={(e) => handleAnchorClick(e, '#home')}>HOME</Link></li>
          <li><Link to="/#conteudos" onClick={(e) => handleAnchorClick(e, '#conteudos')}>CONTEÚDOS</Link></li>
          <li>
            <Link 
              to={location.pathname === '/' ? '/#cursos' : '/cursos'} 
              onClick={handleCursosClick}
            >
              CURSOS
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>UNIDADES</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>Castanhal - PA</strong>
                 
                </Link>
              </li>
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>Marapanim - PA</strong>
                 
                </Link>
              </li>
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>Curuçá - PA</strong>
                 
                </Link>
              </li>
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>Maracanã - PA</strong>
                 
                </Link>
              </li>
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>Irituia - PA</strong>
                 
                </Link>
              </li>
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>São Domingos do Capim - PA</strong>
                 
                </Link>
              </li>
              <li>
                <Link to="/unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>
                  <strong>São Miguel do Guamá - PA</strong>
                 
                </Link>
              </li>
            </ul>
          </li>
          <li><Link to="/sobre" onClick={closeMenu}>SOBRE EVOLUTEC</Link></li>
          <li><Link to="/#matricule" onClick={(e) => handleAnchorClick(e, '#matricule')}>MATRICULE-SE</Link></li>
        </ul>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
