import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCourseBySlug, cursosData } from '../data/coursesData';
import './CursoDetalhes.css';

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

function CursoDetalhes() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const curso = getCourseBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!curso) {
    return (
      <div className="curso-detalhes-container">
        <div className="curso-not-found">
          <h2>Curso não encontrado</h2>
          <button onClick={() => navigate('/cursos')} className="btn-voltar">
            Voltar para Cursos
          </button>
        </div>
      </div>
    );
  }

  const handleMatriculaClick = () => {
    navigate('/#matricule');
  };

  // Pegar cursos relacionados (mesma categoria ou aleatórios)
  const cursosRelacionados = cursosData
    .filter(c => c.id !== curso.id)
    .slice(0, 3);

  return (
    <div className="curso-detalhes-container">
      {/* Botão Voltar */}
      <button onClick={() => navigate('/cursos')} className="btn-voltar-flutuante">
        <ArrowLeft />
        <span>Voltar</span>
      </button>

      {/* Hero Section Verde */}
      <section 
        className="curso-hero-verde"
        style={{ backgroundImage: `url(${curso.image})` }}
      >
        <div className="curso-hero-overlay"></div>
        <div className="curso-hero-verde-content">
          <div className="curso-hero-left">
            <div className="curso-badges">
              <span className="badge-categoria">{curso.category}</span>
              <span className="badge-inscricao">Inscreva-se</span>
            </div>
            
            <h1 className="curso-titulo-principal">{curso.title}</h1>
            
            <div className="curso-salario">
              <span className="salario-label">Média salarial nacional</span>
              <span className="salario-valor">{curso.salary}</span>
            </div>

            <button className="btn-inscreva-se" onClick={handleMatriculaClick}>
              Inscreva-se →
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="curso-content-wrapper">
        {/* Sobre o Curso */}
        <section className="curso-section-info">
          <h2 className="section-title-novo">Sobre o curso</h2>
          <p className="section-text-novo">{curso.fullDescription}</p>
        </section>

        {/* Mercado de Trabalho */}
        <section className="curso-section-info">
          <h2 className="section-title-novo">Mercado de trabalho</h2>
          <p className="section-text-novo">{curso.marketInfo}</p>
        </section>

        {/* Cards de Informações */}
        <div className="curso-info-cards">
          <div className="info-card-verde">
            <ClockIcon />
            <div className="info-card-content">
              <span className="info-card-label">Duração</span>
              <span className="info-card-value">{curso.duration}</span>
            </div>
          </div>

          <div className="info-card-verde">
            <AwardIcon />
            <div className="info-card-content">
              <span className="info-card-label">Certificação conferida</span>
              <span className="info-card-value">{curso.tag}</span>
            </div>
          </div>

          <div className="info-card-verde">
            <BookIcon />
            <div className="info-card-content">
              <span className="info-card-label">Modelo de Ensino</span>
              <span className="info-card-value">{curso.mode}</span>
            </div>
          </div>
        </div>

        {/* Objetivos do Curso */}
        <section className="curso-section-detalhes">
          <h2 className="section-title-destaque">Objetivos do Curso</h2>
          <div className="objectives-list">
            {curso.objectives.map((objective, index) => (
              <div key={index} className="objective-item-novo">
                <CheckIcon />
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grade Curricular */}
        <section className="curso-section-detalhes">
          <h2 className="section-title-destaque">Grade Curricular</h2>
          <div className="curriculum-grid">
            {curso.curriculum.map((item, index) => (
              <div key={index} className="curriculum-card">
                <h3 className="curriculum-module-title">{item.module}</h3>
                <ul className="curriculum-topics curriculum-topics-horizontal">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={`${topicIndex}-${topic}`}>
                      <CheckIcon />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Oportunidades de Carreira */}
        <section className="curso-section-detalhes">
          <h2 className="section-title-destaque">
            <BriefcaseIcon />
            Oportunidades de Carreira
          </h2>
          <div className="career-tags">
            {curso.careerOpportunities.map((career, index) => (
              <span key={index} className="career-tag">
                {career}
              </span>
            ))}
          </div>
        </section>

        {/* Seção de Cursos Relacionados */}
        <section className="outros-cursos-section">
          <h2 className="section-title-outros-cursos">Conheça outros cursos</h2>
          <p className="section-subtitle-cursos">Explore mais opções de formação disponíveis</p>
          
          <div className="outros-cursos-grid">
            {cursosRelacionados.map(cursoItem => (
              <Link
                key={cursoItem.id}
                to={`/curso/${cursoItem.slug}`}
                className="curso-card-mini"
              >
                <div className="curso-card-mini-image">
                  <img src={cursoItem.image} alt={cursoItem.title}  loading="lazy" decoding="async"/>
                  <span className="curso-card-mini-badge">{cursoItem.mode}</span>
                </div>
                
                <div className="curso-card-mini-content">
                  <span className="curso-card-mini-category">{cursoItem.category}</span>
                  <h3 className="curso-card-mini-title">{cursoItem.title}</h3>
                  <p className="curso-card-mini-description">{cursoItem.description}</p>
                  
                  <div className="curso-card-mini-footer">
                    <div className="curso-card-mini-info">
                      <ClockIcon />
                      <span>{cursoItem.duration}</span>
                    </div>
                    <span className="ver-mais">
                      Ver mais <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="btn-ver-todos-container">
            <Link to="/cursos" className="btn-ver-todos-cursos">
              Ver todos os cursos
            </Link>
          </div>
        </section>

    
      </div>
    </div>
  );
}

export default CursoDetalhes;
