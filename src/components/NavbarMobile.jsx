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


      {/* Removido overlay escuro para manter fundo claro */}


      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li className="drawer-header" style={{ background: '#fff', padding: 0, margin: 0 }}>
          <img src="/logo-evolutec.png" alt="Logo Evolutec" className="drawer-logo" style={{ width: '100%', background: '#fff', padding: '1.5rem 0', objectFit: 'contain' }} />
        </li>


        <DrawerItem to="/" icon={<Home size={24} />} title="Home" desc="Página principal" onClick={closeMenu} />
        <DrawerItem to="/cursos" icon={<GraduationCap size={24} />} title="Cursos" desc="Grade de formações" onClick={closeMenu} />
        <DrawerItem to="/unidades" icon={<MapPin size={24} />} title="Unidades" desc="Pólos e laboratórios" onClick={closeMenu} />
        <DrawerItem to="/sobre" icon={<Building2 size={24} />} title="Sobre Nós" desc="Nossa história" onClick={closeMenu} />
        <DrawerItem to="/blog" icon={<BookOpenText size={24} />} title="Conteúdos" desc="Blog e materiais" onClick={closeMenu} />

        <li className="drawer-action-container">
          <button className="btn-matricula-drawer"><UserCircle2 size={20} /> Matricule-se</button>
          <Link to="/trabalhe-conosco" className="btn-trabalhe-drawer" onClick={closeMenu}>Trabalhe Conosco</Link>
        </li>
      </ul>
    </nav>
  );
}


// Sub-componente para manter o alinhamento correto
const DrawerItem = ({ to, icon, title, desc, onClick }) => (
  <li style={{ alignItems: 'flex-start' }}>
    <Link to={to} className="navbar-mobile-link" onClick={onClick} style={{ flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 0 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
        {icon}
        <span className="navbar-link-title">{title}</span>
      </span>
      <span className="navbar-link-subtitle">{desc}</span>
    </Link>
  </li>
);

export default Navbar;