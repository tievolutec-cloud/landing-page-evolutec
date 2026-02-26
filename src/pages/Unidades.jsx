import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Mapa from '../components/Mapa';
import './Unidades.css';

function Unidades() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="unidades-page">
      <section className="unidades-hero">
        <div className="unidades-hero-content">
          <div className="unidades-hero-text">
            <h1>Conheça as nossas Unidades</h1>
            <p>Estamos localizados nas principais cidades do Pará</p>
          </div>
        </div>
      </section>

      <section className="unidades-content">
        <div className="unidades-mapa-wrapper">
          <Mapa />
        </div>
      </section>
    </div>
  );
}

export default Unidades;
