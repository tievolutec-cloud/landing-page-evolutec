import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContatoModal from './contatoModal';
import { Menu, X, Home, GraduationCap, MapPin, Building2, BookOpenText, UserCircle2, Book, ArrowUp } from 'lucide-react';
import './NavbarMobile.css';


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
            src="/logo-evolutec.webp"
            alt="Evolutec Logo"
            className="logo-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="220"
            height="64"
          />
          <button className="navbar-toggle" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
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

          <DrawerItem to="/" icon={<Home size={20} />} title="Home" desc="Página principal" onClick={closeMenu} />
          <DrawerItem to="/cursos" icon={<GraduationCap size={20} />} title="Cursos" desc="Grade de formações" onClick={closeMenu} />
          <DrawerItem to="/unidades" icon={<MapPin size={20} />} title="Unidades" desc="Polos do evolutec" onClick={closeMenu} />
          <DrawerItem to="/sobre" icon={<Building2 size={20} />} title="Sobre Nós" desc="Nossa história" onClick={closeMenu} />
          <DrawerItem to="/blog" icon={<BookOpenText size={20} />} title="Blog" desc="Blog e notícias" onClick={closeMenu} />
          <DrawerItem to="/ebooks" icon={<Book size={20} />} title="Ebooks" desc="Materiais Gratuitos" onClick={closeMenu} />

          <li className="drawer-action-container">
            <button
              className="btn-matricula-drawer navbar-btn navbar-btn--yellow"
              onClick={e => { e.preventDefault(); setContatoModalOpen(true); closeMenu(); }}
              role="menuitem"
              tabIndex={0}
            >
              Matricule-se
            </button>
            <button className="btn-trabalhe-drawer">Trabalhe Conosco</button>
          </li>
        </ul>
      </nav>
      {showScroll && (
        <button className="btn-scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">
          <ArrowUp size={28} />
        </button>
      )}
      <ContatoModal isOpen={contatoModalOpen} onClose={() => setContatoModalOpen(false)} />
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