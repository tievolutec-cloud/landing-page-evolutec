import { useState, useEffect } from 'react';
import { BookOpen, Download, Tag } from 'lucide-react';
import { ebooksData, categorias } from '../data/ebooksData';
import './Ebooks.css';

function Ebooks() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ebooksFiltrados =
    categoriaAtiva === 'Todos'
      ? ebooksData
      : ebooksData.filter((e) => e.categoria === categoriaAtiva);

  return (
    <div className="ebooks-page">
      {/* Header */}
      <div className="ebooks-header">
        <div className="ebooks-header-overlay" />
        <div className="ebooks-header-content">
          <h1>E-books Gratuitos</h1>
          <p>
            Amplie seus conhecimentos com nossos materiais exclusivos. Baixe
            gratuitamente e estude no seu ritmo.
          </p>
        </div>
      </div>

      {/* Filtro de categorias */}
      <div className="ebooks-filtros-wrapper">
        <div className="ebooks-filtros">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`ebooks-filtro-btn${categoriaAtiva === cat ? ' ativo' : ''}`}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="ebooks-container">
        {ebooksFiltrados.length === 0 ? (
          <p className="ebooks-vazio">Nenhum e-book encontrado nessa categoria.</p>
        ) : (
          <div className="ebooks-grid">
            {ebooksFiltrados.map((ebook) => (
              <div key={ebook.id} className="ebook-card">
                <div className="ebook-card-capa">
                  <img src={ebook.capa} alt={ebook.titulo} />
                </div>
                <div className="ebook-card-body">
                  <span className="ebook-categoria">
                    <Tag size={13} />
                    {ebook.categoria}
                  </span>
                  <h3 className="ebook-titulo">{ebook.titulo}</h3>
                  <p className="ebook-descricao">{ebook.descricao}</p>
                  <span className="ebook-paginas">{ebook.paginas} páginas</span>
                  <a
                    href={ebook.downloadUrl}
                    className="ebook-download-btn"
                    download
                    aria-label={`Baixar e-book: ${ebook.titulo}`}
                  >
                    <Download size={16} />
                    Baixar Grátis
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ebooks;
