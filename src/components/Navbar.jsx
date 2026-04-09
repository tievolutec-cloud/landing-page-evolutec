import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { categoriasCursos } from '../data/coursesData';
import './Navbar.css';
import ContatoModal from './contatoModal';
import NavbarMobile from './NavbarMobile';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownTimeout = useRef(null)
  const location = useLocation()
  const [contatoModalOpen, setContatoModalOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const DROPDOWN_DELAY = 150

  // Desktop: hover com delay — usado tanto no <li> quanto no dropdown-menu
  const openDropdownDelayed = (name) => {
    if (isMobile) return
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(name)
  }

  // Fecha somente depois de um delay, permitindo que o mouse
  // atravesse o gap entre o trigger e o menu sem fechar
  const closeDropdownDelayed = () => {
    if (isMobile) return
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, DROPDOWN_DELAY)
  }

  // Cancela o fechamento quando o mouse entra no menu (bridge gap)
  const cancelClose = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
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
      e.preventDefault()
      toggleDropdown(name)
    } else {
      if (linkAction) linkAction(e)
    }
  }

  const closeContatoModal = () => {
    setContatoModalOpen(false)
  }

  if (isMobile) {
    return <NavbarMobile />;
  }

  // Helper: props de hover para cada item de dropdown pai
  const dropdownProps = (name) => ({
    onMouseEnter: () => openDropdownDelayed(name),
    onMouseLeave: closeDropdownDelayed,
  })

  // Helper: props de hover para o próprio menu (cancela o fechamento)
  const dropdownMenuProps = () => ({
    onMouseEnter: cancelClose,
    onMouseLeave: closeDropdownDelayed,
  })

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
          <img
            src="/logo-evolutec.webp"
            alt="Evolutec Logo"
            className="logo-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="220"
            height="64"
          />
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
              {...dropdownProps('conteudos')}
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
              <ul className="dropdown-menu" {...dropdownMenuProps()}>
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
              {...dropdownProps('cursos')}
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
              <ul className="dropdown-menu" {...dropdownMenuProps()}>
                {categoriasCursos
                  .filter((categoria) => categoria !== 'Todos')
                  .map((categoria) => (
                  <li key={categoria}>
                    <Link
                      to={`/cursos?categoria=${categoria}`}
                      onClick={() => { closeMenu(); closeDropdown() }}
                    >
                      <strong>{categoria}</strong>
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
              {...dropdownProps('unidades')}
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
              <ul className="dropdown-menu" {...dropdownMenuProps()}>
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
      </nav>
      <ContatoModal
        isOpen={contatoModalOpen}
        onClose={closeContatoModal}
      />
    </>
  );
}

export default Navbar