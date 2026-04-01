import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Mapa from '../components/Mapa';
import './Unidades.css';

function Unidades() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const unidadeId = searchParams.get('unidade');
  const [poloAtivo, setPoloAtivo] = useState(null);

  useEffect(() => {
    if (unidadeId) {
      setTimeout(() => {
        const el = document.querySelector('.mapa-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="unidades-page">
      <section className="unidades-hero">
        <div className="unidades-hero-content">
          <div className="unidades-hero-text">
            <h1>Conheça as nossas Unidades</h1>
            <p className="unidades-hero-tagline">Evolutec • Unidades</p>
            <p className="unidades-hero-subtext">Encontre a unidade Evolutec mais próxima de você.</p>
            {poloAtivo && poloAtivo.id !== 'todos' && (
              <div className="hero-polo-endereco">
                <strong>{poloAtivo.nome}</strong>
                <span>
                  <a
                    href={poloAtivo.endereco ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(poloAtivo.endereco)}` : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                  >
                    {poloAtivo.endereco || 'Endereço em breve'}
                  </a>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="unidades-content">
        <div className="unidades-mapa-wrapper">
          <Mapa initialPoloId={unidadeId} onPoloChange={setPoloAtivo} />
        </div>
      </section>
    </div>
  );
}

export default Unidades;
