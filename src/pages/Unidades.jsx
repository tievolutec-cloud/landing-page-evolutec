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
            <p>Estamos localizados nas principais cidades do Pará</p>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
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
