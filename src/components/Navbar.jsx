
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, ChevronDown } from 'lucide-react';
import './Navbar.css';
import ContatoModal from './contatoModal';
import NavbarMobile from './NavbarMobile';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownTimeout = useRef(null)
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)
  const [contatoModalOpen, setContatoModalOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }
  const closeMenu = () => setMenuOpen(false)

  const DROPDOWN_DELAY = 200

  // Desktop: hover com delay
  const openDropdownDelayed = (name) => {
    if (isMobile) return
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(name)
    }, DROPDOWN_DELAY)
  }

  const closeDropdownDelayed = () => {
    if (isMobile) return
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, DROPDOWN_DELAY)
  }

  // Mobile: toggle por tap
  const toggleDropdown = (name) => {
    if (!isMobile) return
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(prev => (prev === name ? null : name))
  }

  const closeDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(null)
  }

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
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number(scroll))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // Fecha o menu ao clicar fora (mobile)
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

  // Trava o scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, isMobile])

  // Fecha dropdown ao navegar
  useEffect(() => {
    setOpenDropdown(null)
  }, [location])

  const handleAnchorClick = (e, anchor) => {
    closeMenu()
    if (anchor === '#unidades') {
      return
    }
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleCursosClick = (e) => {
    closeMenu()
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector('#cursos')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Handler para item de dropdown com link + seta no mobile
  const handleDropdownLinkClick = (e, name, linkAction) => {
    if (isMobile) {
      // No mobile, o toque na seta ou no texto do pai abre/fecha o submenu
      // apenas o link filho navega
      e.preventDefault()
      toggleDropdown(name)
    } else {
      // Desktop: executa a ação normal do link
      if (linkAction) linkAction(e)
    }
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openContatoModal = () => {
    setContatoModalOpen(true)
  }

  const closeContatoModal = () => {
    setContatoModalOpen(false)
  }

  if (isMobile) {
    return <NavbarMobile />;
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <a href="https://wa.me/559140424250" className="top-bar-link whatsapp-link">
            <MessageCircle size={16} />
            Matricule-se pelo WhatsApp
          </a>
          <div className="top-bar-right">
            <a href="cta0" className="top-bar-link">
              Venha você também fazer parte do Evolutec!
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <img src="/logo-evolutec.png" alt="Evolutec Logo" className="logo-img" />
          <Link to="/" className="navbar-logo"></Link>
          <ul
            id="navbar-menu"
            className={`navbar-links`}
            role="navigation"
          >
            <li>
              <Link to="/#home" onClick={(e) => handleAnchorClick(e, '#home')}>
                Home
              </Link>
            </li>
            {/* Dropdown: Conteúdos */}
            <li
              className={`dropdown${openDropdown === 'conteudos' ? ' is-open' : ''}`}
              onMouseEnter={() => openDropdownDelayed('conteudos')}
              onMouseLeave={closeDropdownDelayed}
            >
              <div className="dropdown-trigger">
                <Link
                  onClick={(e) => handleDropdownLinkClick(e, 'conteudos', null)}
                >
                  Conteúdos
                </Link>
                <button
                  className="dropdown-chevron"
                  onClick={() => toggleDropdown('conteudos')}
                  aria-label="Abrir submenu Conteúdos"
                  tabIndex={-1}
                >
                  <ChevronDown size={16} />
                </button>
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/blog" onClick={() => { closeMenu(); closeDropdown() }}>
                    <strong>Blog</strong>
                  </Link>
                </li>
                <li>
                  <Link to="/ebooks" onClick={() => { closeMenu(); closeDropdown() }}>
                    <strong>E-books</strong>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Dropdown: Cursos */}
            <li
              className={`dropdown${openDropdown === 'cursos' ? ' is-open' : ''}`}
              onMouseEnter={() => openDropdownDelayed('cursos')}
              onMouseLeave={closeDropdownDelayed}
            >
              <div className="dropdown-trigger">
                <Link
                  to={location.pathname === '/' ? '/#cursos' : '/cursos'}
                  onClick={handleCursosClick}
                >
                  Cursos
                </Link>
                <button
                  className="dropdown-chevron"
                  onClick={() => toggleDropdown('cursos')}
                  aria-label="Abrir submenu Cursos"
                  tabIndex={-1}
                >
                  <ChevronDown size={16} />
                </button>
              </div>
              <ul className="dropdown-menu">
                {[
                  { categoria: 'GESTÃO', label: 'Gestão' },
                  { categoria: 'SAÚDE', label: 'Saúde' },
                  { categoria: 'TECNOLOGIA', label: 'Tecnologia' },
                  { categoria: 'MARKETING', label: 'Marketing' },
                  { categoria: 'SEGURANÇA', label: 'Segurança' },
                  { categoria: 'DESIGN', label: 'Design' },
                ].map(({ categoria, label }) => (
                  <li key={categoria}>
                    <Link
                      to={`/cursos?categoria=${categoria}`}
                      onClick={() => { closeMenu(); closeDropdown() }}
                    >
                      <strong>{label}</strong>
                    </Link>
                  </li>
                ))}
                <li className="dropdown-ver-todos">
                  <Link to="/cursos" onClick={() => { closeMenu(); closeDropdown() }}>
                    <strong>Ver todos os cursos →</strong>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Dropdown: Unidades */}
            <li
              className={`dropdown${openDropdown === 'unidades' ? ' is-open' : ''}`}
              onMouseEnter={() => openDropdownDelayed('unidades')}
              onMouseLeave={closeDropdownDelayed}
            >
              <div className="dropdown-trigger">
                <Link
                  to="/unidades"
                  onClick={(e) => handleAnchorClick(e, '#unidades')}
                >
                  Unidades
                </Link>
                <button
                  className="dropdown-chevron"
                  onClick={() => toggleDropdown('unidades')}
                  aria-label="Abrir submenu Unidades"
                  tabIndex={-1}
                >
                  <ChevronDown size={16} />
                </button>
              </div>
              <ul className="dropdown-menu">
                {[
                  { id: 1, label: 'Castanhal - PA' },
                  { id: 2, label: 'Marapanim - PA' },
                  { id: 3, label: 'Curuçá - PA' },
                  { id: 4, label: 'Maracanã - PA' },
                  { id: 5, label: 'Irituia - PA' },
                  { id: 6, label: 'São Domingos do Capim - PA' },
                  { id: 7, label: 'São Miguel do Guamá - PA' },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <Link
                      to={`/unidades?unidade=${id}`}
                      onClick={() => { closeMenu(); closeDropdown() }}
                    >
                      <strong>{label}</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/sobre" onClick={closeMenu}>
                Sobre Evolutec
              </Link>
            </li>
            <li className='navbar-btn-item'>
              <a
                href="#abrir-matricula"
                className="navbar-btn navbar-btn--yellow"
                onClick={e => { e.preventDefault(); setContatoModalOpen(true); closeMenu(); }}
                role="menuitem"
                tabIndex={0}
              >
                Matricule-se
              </a>
            </li>
            <li className="navbar-btn-item">
              <Link
                to="/trabalhe-conosco"
                className="navbar-btn navbar-btn--blue"
                onClick={closeMenu}
              >
                Trabalhe Conosco
              </Link>
            </li>
          </ul>
        </div>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </nav>
      <ContatoModal
        isOpen={contatoModalOpen}
        onClose={closeContatoModal}
      />
    </>
  );
}

export default Navbar