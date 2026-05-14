import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cursosData } from '../data/coursesData';
import './Cursos.css';

const COURSES_PER_PAGE = 6;

const getPageNumbers = (currentPage, totalPages) => {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages];
  if (currentPage >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

// Ícones SVG simples para não depender de bibliotecas externas
const ClockIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const BookIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

const CourseCard = ({ 
  slug,
  title, 
  category, 
  image, 
  mode,
  duration, 
  hours, 
  tag
}) => {
  return (
    <Link to={`/curso/${slug}`} className="card-container-link">
      <div className="card-container">
        {/* Imagem e Badge */}
        <div className="image-wrapper">
          <div className="badge">
            <span className="badge-dot"></span>
            {mode}
          </div>
          <img
            src={image}
            alt={title}
            className="card-image"
            loading="lazy"
            decoding="async"
            width="640"
            height="360"
          />
        </div>

        {/* Conteúdo */}
        <div className="card-content">
          <span className="category">{category}</span>
          <h3 className="card-title">{title}</h3>

          {/* Info Meta: Tempo e Horas */}
          <div className="meta-info">
            <div className="meta-item">
              <ClockIcon />
              <span>{duration}</span>
            </div>
            <div className="meta-item">
              <BookIcon />
              <span>{hours}</span>
            </div>
          </div>

          {/* Footer: Tag e Botão */}
          <div className="card-footer">
            <span className="tag">{tag}</span>
            <button className="btn-details">
              Ver detalhes <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Cursos() {
  const cursos = cursosData;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cursos.length / COURSES_PER_PAGE);
  const paginatedCursos = cursos.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    setCurrentPage(page);

    const section = document.getElementById('cursos');
    if (section) {
      window.requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  return (
    <section className="cursos-section" id="cursos">
      <div className="cursos-container">
        <div className="cursos-header">
          <h2 className="cursos-titulo">Nossos Cursos</h2>
          <p className="cursos-subtitulo">
            Encontre o curso ideal para sua carreira profissional
          </p>
        </div>
        
        <div className="cursos-grid">
          {paginatedCursos.map((curso) => (
            <CourseCard
              key={curso.id}
              slug={curso.slug}
              title={curso.title}
              category={curso.category}
              image={curso.image}
              mode={curso.mode}
              duration={curso.duration}
              hours={curso.hours}
              tag={curso.tag}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="cursos-home-pagination" aria-label="Paginação dos cursos da página inicial">
            <button
              type="button"
              className="cursos-home-pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            <div className="cursos-home-pagination-pages">
              {getPageNumbers(currentPage, totalPages).map((page, index) =>
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="cursos-home-pagination-ellipsis">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    className={`cursos-home-pagination-page${currentPage === page ? ' active' : ''}`}
                    onClick={() => handlePageChange(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              type="button"
              className="cursos-home-pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Próxima
            </button>
          </nav>
        )}

        <div className="cursos-cta">
          <Link to="/cursos" className="btn-ver-todos-cursos">
            Ver Todos os Cursos <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cursos;
