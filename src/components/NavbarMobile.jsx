import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, GraduationCap, MapPin, Building2, BookOpenText, UserCircle2 } from 'lucide-react';
import './NavbarMobile.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/logo-evolutec.png" alt="Evolutec Logo" className="logo-img" />
        <button className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay escuro — fecha o menu ao clicar fora */}
      {menuOpen && <div className="navbar-overlay" onClick={closeMenu} />}

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li className="drawer-header">
          <img src="/logo-sidebar.png" alt="Logo Evolutec" className="drawer-logo" />
        </li>

        <DrawerItem to="/" icon={<Home size={20} />} title="Home" desc="Página principal" onClick={closeMenu} />
        <DrawerItem to="/cursos" icon={<GraduationCap size={20} />} title="Cursos" desc="Grade de formações" onClick={closeMenu} />
        <DrawerItem to="/unidades" icon={<MapPin size={20} />} title="Unidades" desc="Pólos e laboratórios" onClick={closeMenu} />
        <DrawerItem to="/sobre" icon={<Building2 size={20} />} title="Sobre Nós" desc="Nossa história" onClick={closeMenu} />
        <DrawerItem to="/blog" icon={<BookOpenText size={20} />} title="Conteúdos" desc="Blog e materiais" onClick={closeMenu} />

        <li className="drawer-action-container">
          <button className="btn-matricula-drawer">Matricule-se</button>
          <button className="btn-trabalhe-drawer">Trabalhe Conosco</button>
        </li>
      </ul>
    </nav>
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