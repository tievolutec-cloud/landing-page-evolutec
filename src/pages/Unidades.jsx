import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Mapa from '../components/Mapa';
import './Unidades.css';

function Unidades() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const unidadeId = searchParams.get('unidade');
  const [poloAtivo, setPoloAtivo] = useState(null);
  const [poloSelecionado, setPoloSelecionado] = useState('todos');

  const polos = [
    {
      id: 'todos',
      nome: 'Todos os Polos',
    },
    { id: 1, nome: 'Castanhal - PA' },
    { id: 2, nome: 'Marapanim - PA' },
    { id: 3, nome: 'Curuçá - PA' },
    { id: 4, nome: 'Maracanã - PA' },
    { id: 5, nome: 'Irituia - PA' },
    { id: 6, nome: 'São Domingos do Capim - PA' },
    { id: 7, nome: 'São Miguel do Guamá - PA' },
  ];

  const handlePoloChange = (e) => {
    setPoloSelecionado(e.target.value);
  };

  useEffect(() => {
    if (unidadeId) {
      setPoloSelecionado(unidadeId);
      return;
    }

    setPoloSelecionado('todos');
  }, [unidadeId]);

  useEffect(() => {
    if (unidadeId) {
      setTimeout(() => {
        const el = document.querySelector('.mapa-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, unidadeId]);

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
          <div className="hero-selector-container">
            <label htmlFor="polo-select-header" className="polo-selector-label">
              Selecione sua cidade:
            </label>
            <select 
              id="polo-select-header"
              className="polo-selector"
              value={poloSelecionado}
              onChange={handlePoloChange}
            >
              <option value="todos" disabled hidden>Cidade</option>
              {polos.map((polo) => (
                <option key={polo.id} value={polo.id}>
                  {polo.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="unidades-content">
        <div className="unidades-mapa-wrapper">
          <Mapa
            initialPoloId={unidadeId}
            onPoloChange={setPoloAtivo}
            poloSelecionado={poloSelecionado}
          />
        </div>
      </section>
    </div>
  );
}

export default Unidades;
