import React from 'react';
import { Link } from 'react-router-dom';
import { cursosData } from '../data/coursesData';
import './Cursos.css';

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
          {cursosData.map((curso) => (
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