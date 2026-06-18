import { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ContatoModal = lazy(() => import('./contatoModal'));
import './NavbarMobile.css';

function MenuIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function HomeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.8V21h14V9.8" />
    </svg>
  );
}

function GraduationCapIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11.5V16c0 1.8 2.7 3.3 6 3.3s6-1.5 6-3.3v-4.5" />
    </svg>
  );
}

function MapPinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BuildingIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 21V9h6v12" />
      <path d="M7 7h.01M12 7h.01M17 7h.01" />
    </svg>
  );
}

function BookOpenTextIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4H11v16H4.5A2.5 2.5 0 0 0 2 22V6.5Z" />
      <path d="M22 6.5A2.5 2.5 0 0 0 19.5 4H13v16h6.5A2.5 2.5 0 0 1 22 22V6.5Z" />
      <path d="M6 8h3M6 12h3" />
    </svg>
  );
}

function BookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function ArrowUpIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [contatoModalOpen, setContatoModalOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src="/logo topo nova.png"
            alt="Evolutec Logo"
            className="logo-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="220"
            height="64"
          />
          <button className="navbar-toggle" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Overlay escuro — fecha o menu ao clicar fora */}
        {menuOpen && <div className="navbar-overlay" onClick={closeMenu} />}

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="drawer-header">
            <img
              src="/logo-sidebar.webp"
              alt="Logo Evolutec"
              className="drawer-logo"
              loading="lazy"
              decoding="async"
              width="220"
              height="64"
            />
          </li>

          <DrawerItem to="/" icon={<HomeIcon size={20} />} title="Home" desc="Página principal" onClick={closeMenu} />
          <DrawerItem to="/cursos" icon={<GraduationCapIcon size={20} />} title="Cursos" desc="Grade de formações" onClick={closeMenu} />
          <DrawerItem to="/unidades" icon={<MapPinIcon size={20} />} title="Unidades" desc="Polos da Evolutec" onClick={closeMenu} />
          <DrawerItem to="/sobre" icon={<BuildingIcon size={20} />} title="Sobre nós" desc="Nossa história" onClick={closeMenu} />
          <DrawerItem to="/blog" icon={<BookOpenTextIcon size={20} />} title="Blog" desc="Blog e notícias" onClick={closeMenu} />
          <DrawerItem to="/ebooks" icon={<BookIcon size={20} />} title="E-books" desc="Materiais gratuitos" onClick={closeMenu} />

          <DrawerItem to="/validar-certificado" icon={<BookOpenTextIcon size={20} />} title="Validar certificado" desc="Consultar validade" onClick={closeMenu} />

          <li className="drawer-action-container">
            <button
              className="btn-matricula-drawer navbar-btn navbar-btn--yellow"
              onClick={e => { e.preventDefault(); setContatoModalOpen(true); closeMenu(); }}
              role="menuitem"
              tabIndex={0}
            >
              Matricule-se
            </button>
            <Link to="/trabalhe-conosco" className="btn-trabalhe-drawer" onClick={closeMenu}>
              Trabalhe conosco
            </Link>
          </li>
        </ul>
      </nav>
      {showScroll && (
        <button className="btn-scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">
          <ArrowUpIcon size={28} />
        </button>
      )}
      {contatoModalOpen ? (
        <Suspense fallback={null}>
          <ContatoModal isOpen={contatoModalOpen} onClose={() => setContatoModalOpen(false)} />
        </Suspense>
      ) : null}
    </>
  );
}

const DrawerItem = ({ to, icon, title, desc, onClick }) => (
  <li>
    <Link to={to} className="drawer-item" onClick={onClick}>
      <span className="drawer-item-icon">
        {icon}
      </span>
      <span className="drawer-item-text">
        <span className="drawer-item-title">{title}</span>
        <span className="drawer-item-desc">{desc}</span>
      </span>
    </Link>
  </li>
);


export default Navbar;
