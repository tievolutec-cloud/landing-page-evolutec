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
            <a href="#cta2" className="top-bar-btn btn-yellow">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/evolutec-logo.png" alt="" className="logo-img"/>
          <svg width="138" height="35" viewBox="0 0 138 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.88071 34.5258V11.2531H18.108V15.8213H7.50571V20.594H17.2784V25.1736H7.50571V29.9576H18.108V34.5258H1.88071ZM38.5625 17.0713L32.5739 34.5258H26.2103L20.233 17.0713H26.0853L29.3012 29.094H29.483L32.7103 17.0713H38.5625ZM48.2784 34.8554C46.4451 34.8554 44.8694 34.4804 43.5512 33.7304C42.2406 32.9728 41.2292 31.9198 40.5171 30.5713C39.8125 29.2152 39.4603 27.6432 39.4603 25.8554C39.4603 24.0599 39.8125 22.4879 40.5171 21.1395C41.2292 19.7834 42.2406 18.7304 43.5512 17.9804C44.8694 17.2228 46.4451 16.844 48.2784 16.844C50.1118 16.844 51.6837 17.2228 52.9944 17.9804C54.3125 18.7304 55.3239 19.7834 56.0284 21.1395C56.7406 22.4879 57.0966 24.0599 57.0966 25.8554C57.0966 27.6432 56.7406 29.2152 56.0284 30.5713C55.3239 31.9198 54.3125 32.9728 52.9944 33.7304C51.6837 34.4804 50.1118 34.8554 48.2784 34.8554ZM48.3125 30.6622C48.9792 30.6622 49.5436 30.4576 50.0057 30.0486C50.4678 29.6395 50.8201 29.0713 51.0625 28.344C51.3125 27.6167 51.4375 26.7758 51.4375 25.8213C51.4375 24.8516 51.3125 24.0031 51.0625 23.2758C50.8201 22.5486 50.4678 21.9804 50.0057 21.5713C49.5436 21.1622 48.9792 20.9576 48.3125 20.9576C47.6231 20.9576 47.0398 21.1622 46.5625 21.5713C46.0928 21.9804 45.733 22.5486 45.483 23.2758C45.2406 24.0031 45.1194 24.8516 45.1194 25.8213C45.1194 26.7758 45.2406 27.6167 45.483 28.344C45.733 29.0713 46.0928 29.6395 46.5625 30.0486C47.0398 30.4576 47.6231 30.6622 48.3125 30.6622ZM65.5 11.2531V34.5258H59.9432V11.2531H65.5ZM80.2983 26.9917V17.0713H85.8438V34.5258H80.5483V31.2758H80.3665C79.9801 32.344 79.3211 33.1925 78.3892 33.8213C77.465 34.4425 76.3476 34.7531 75.037 34.7531C73.8476 34.7531 72.8021 34.4804 71.9006 33.9349C70.9991 33.3895 70.2983 32.6281 69.7983 31.6508C69.2983 30.666 69.0445 29.5145 69.037 28.1963V17.0713H74.5938V27.1054C74.6014 28.0523 74.8514 28.7986 75.3438 29.344C75.8362 29.8895 76.5067 30.1622 77.3551 30.1622C77.9082 30.1622 78.4044 30.041 78.8438 29.7986C79.2908 29.5486 79.643 29.1887 79.9006 28.719C80.1658 28.2417 80.2983 27.666 80.2983 26.9917ZM99.233 17.0713V21.1622H88.2216V17.0713H99.233ZM90.5284 12.8895H96.0853V29.0372C96.0853 29.3781 96.1383 29.6546 96.2444 29.8667C96.358 30.0713 96.5209 30.219 96.733 30.3099C96.9451 30.3932 97.1989 30.4349 97.4944 30.4349C97.7065 30.4349 97.93 30.416 98.1648 30.3781C98.4072 30.3326 98.589 30.2948 98.7103 30.2645L99.5512 34.2758C99.286 34.3516 98.911 34.4463 98.4262 34.5599C97.9489 34.6736 97.3769 34.7455 96.7103 34.7758C95.4072 34.8364 94.2898 34.6849 93.358 34.3213C92.4337 33.9501 91.7254 33.3743 91.233 32.594C90.7481 31.8137 90.5133 30.8326 90.5284 29.6508V12.8895ZM110.04 34.8554C108.214 34.8554 106.638 34.4955 105.313 33.7758C103.994 33.0486 102.979 32.0145 102.267 30.6736C101.563 29.3251 101.21 27.7228 101.21 25.8667C101.21 24.0637 101.566 22.4879 102.278 21.1395C102.991 19.7834 103.994 18.7304 105.29 17.9804C106.585 17.2228 108.112 16.844 109.869 16.844C111.112 16.844 112.248 17.0372 113.278 17.4236C114.309 17.8099 115.199 18.3819 115.949 19.1395C116.699 19.897 117.282 20.8326 117.699 21.9463C118.116 23.0523 118.324 24.3213 118.324 25.7531V27.1395H103.153V23.9122H113.153C113.146 23.3213 113.006 22.7948 112.733 22.3326C112.46 21.8705 112.085 21.5107 111.608 21.2531C111.138 20.9879 110.597 20.8554 109.983 20.8554C109.362 20.8554 108.805 20.9955 108.313 21.2758C107.82 21.5486 107.43 21.9236 107.142 22.4008C106.854 22.8705 106.703 23.4046 106.688 24.0031V27.2872C106.688 27.9993 106.828 28.6243 107.108 29.1622C107.388 29.6925 107.786 30.1054 108.301 30.4008C108.816 30.6963 109.43 30.844 110.142 30.844C110.635 30.844 111.081 30.7758 111.483 30.6395C111.885 30.5031 112.229 30.3023 112.517 30.0372C112.805 29.772 113.021 29.4463 113.165 29.0599L118.267 29.2076C118.055 30.3516 117.589 31.3478 116.869 32.1963C116.157 33.0372 115.222 33.6925 114.063 34.1622C112.903 34.6243 111.563 34.8554 110.04 34.8554ZM129.31 34.8554C127.469 34.8554 125.889 34.4766 124.571 33.719C123.26 32.9614 122.253 31.9084 121.548 30.5599C120.844 29.2039 120.492 27.6357 120.492 25.8554C120.492 24.0675 120.844 22.4993 121.548 21.1508C122.26 19.7948 123.272 18.7379 124.582 17.9804C125.901 17.2228 127.473 16.844 129.298 16.844C130.912 16.844 132.317 17.1357 133.514 17.719C134.719 18.3023 135.658 19.1281 136.332 20.1963C137.014 21.2569 137.374 22.5031 137.412 23.9349H132.219C132.113 23.041 131.81 22.3402 131.31 21.8326C130.817 21.3251 130.173 21.0713 129.378 21.0713C128.734 21.0713 128.17 21.2531 127.685 21.6167C127.2 21.9728 126.821 22.5031 126.548 23.2076C126.283 23.9046 126.151 24.7682 126.151 25.7986C126.151 26.8289 126.283 27.7001 126.548 28.4122C126.821 29.1167 127.2 29.6508 127.685 30.0145C128.17 30.3705 128.734 30.5486 129.378 30.5486C129.893 30.5486 130.348 30.4387 130.742 30.219C131.143 29.9993 131.473 29.6773 131.73 29.2531C131.988 28.8213 132.151 28.2986 132.219 27.6849H137.412C137.359 29.1243 136.999 30.3819 136.332 31.4576C135.673 32.5334 134.745 33.3705 133.548 33.969C132.359 34.5599 130.946 34.8554 129.31 34.8554Z" fill="#00375E"/>
          <path d="M4.224 7.968C2.848 7.968 1.8 7.632 1.08 6.96C0.360001 6.28 7.6741e-07 5.312 7.6741e-07 4.056C7.6741e-07 2.76 0.372001 1.76 1.116 1.056C1.86 0.351999 2.948 -9.53674e-07 4.38 -9.53674e-07C4.86 -9.53674e-07 5.292 0.0279992 5.676 0.0839994C6.068 0.139999 6.436 0.223999 6.78 0.335999V2.268C6.428 2.132 6.064 2.04 5.688 1.992C5.312 1.944 4.928 1.92 4.536 1.92C3.792 1.92 3.232 2.088 2.856 2.424C2.488 2.76 2.304 3.304 2.304 4.056C2.304 4.76 2.464 5.268 2.784 5.58C3.112 5.892 3.592 6.048 4.224 6.048C4.432 6.048 4.628 6.036 4.812 6.012C4.996 5.98 5.168 5.94 5.328 5.892V4.764H3.792V3.372H7.212V7.26C6.916 7.444 6.52 7.608 6.024 7.752C5.536 7.896 4.936 7.968 4.224 7.968ZM8.05641 7.848V2.16H10.2284L10.2884 2.616C10.5204 2.48 10.8164 2.356 11.1764 2.244C11.5364 2.132 11.9004 2.064 12.2684 2.04V3.72C12.0604 3.736 11.8324 3.764 11.5844 3.804C11.3444 3.844 11.1084 3.896 10.8764 3.96C10.6524 4.016 10.4644 4.08 10.3124 4.152V7.848H8.05641ZM14.972 7.968C14.308 7.968 13.788 7.78 13.412 7.404C13.036 7.028 12.848 6.476 12.848 5.748V2.16H15.104V5.568C15.104 6.064 15.356 6.312 15.86 6.312C16.044 6.312 16.224 6.272 16.4 6.192C16.576 6.112 16.716 6.012 16.82 5.892V2.16H19.076V7.848H16.964L16.904 7.416C16.68 7.576 16.404 7.708 16.076 7.812C15.756 7.916 15.388 7.968 14.972 7.968ZM20.1502 10.44V2.16H22.1062L22.2142 2.616C22.4462 2.432 22.6982 2.292 22.9702 2.196C23.2502 2.092 23.5742 2.04 23.9422 2.04C24.7902 2.04 25.4422 2.256 25.8982 2.688C26.3622 3.112 26.5942 3.836 26.5942 4.86C26.5942 5.876 26.3502 6.648 25.8622 7.176C25.3742 7.704 24.7022 7.968 23.8462 7.968C23.2782 7.968 22.7982 7.86 22.4062 7.644V10.44H20.1502ZM23.2702 6.324C23.5982 6.324 23.8502 6.208 24.0262 5.976C24.2022 5.744 24.2902 5.384 24.2902 4.896C24.2902 4.424 24.2062 4.104 24.0382 3.936C23.8782 3.768 23.6302 3.684 23.2942 3.684C22.9582 3.684 22.6622 3.796 22.4062 4.02V6.036C22.5342 6.132 22.6622 6.204 22.7902 6.252C22.9182 6.3 23.0782 6.324 23.2702 6.324ZM30.5232 7.968C29.3872 7.968 28.5472 7.716 28.0032 7.212C27.4672 6.708 27.1992 5.972 27.1992 5.004C27.1992 4.044 27.4712 3.312 28.0152 2.808C28.5592 2.296 29.3952 2.04 30.5232 2.04C31.6592 2.04 32.4992 2.296 33.0432 2.808C33.5952 3.312 33.8712 4.044 33.8712 5.004C33.8712 5.972 33.5992 6.708 33.0552 7.212C32.5112 7.716 31.6672 7.968 30.5232 7.968ZM30.5232 6.324C30.8912 6.324 31.1552 6.22 31.3152 6.012C31.4832 5.804 31.5672 5.468 31.5672 5.004C31.5672 4.548 31.4832 4.216 31.3152 4.008C31.1552 3.792 30.8912 3.684 30.5232 3.684C30.1632 3.684 29.9032 3.792 29.7432 4.008C29.5832 4.216 29.5032 4.548 29.5032 5.004C29.5032 5.468 29.5832 5.804 29.7432 6.012C29.9032 6.22 30.1632 6.324 30.5232 6.324Z" fill="#EC1922"/>
          </svg>

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
          <li><Link to="/#unidades" onClick={(e) => handleAnchorClick(e, '#unidades')}>UNIDADES</Link></li>
          <li><Link to="/#sobre" onClick={(e) => handleAnchorClick(e, '#sobre')}>SOBRE EVOLUTEC</Link></li>
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
