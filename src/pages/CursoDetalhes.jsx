import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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
  const timelineSectionRef = useRef(null);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const timelineSection = timelineSectionRef.current;

    if (!timelineSection) {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTimelineVisible(true);
      return undefined;
    }

    setIsTimelineVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(timelineSection);

    return () => observer.disconnect();
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

  const curriculumTimelineItems = curso.curriculum.flatMap((moduleItem, moduleIndex) =>
    moduleItem.topics.map((topic, topicIndex) => ({
      id: `${moduleIndex}-${topicIndex}-${typeof topic === 'string' ? topic : topic.title}`,
      module: moduleItem.module,
      topicTitle: typeof topic === 'string' ? topic : topic.title,
      topicDescription:
        typeof topic === 'string'
          ? ''
          : topic.description || '',
      step: topicIndex + 1,
    }))
  );

  return (
    <div className="curso-detalhes-container">
      {/* Botão Voltar */}
      <button onClick={() => navigate('/cursos')} className="btn-voltar-flutuante">
        <ArrowLeft />
        <span>Voltar</span>
      </button>

      {/* Hero Section */}
      <section 
        className="curso-hero-verde"
        style={{ backgroundImage: `url(${curso.image})` }}
      >
        <div className="curso-hero-overlay"></div>
        <div className="curso-hero-verde-content">
          <div className="curso-hero-left">
            <div className="curso-badges">
              <span className="badge-categoria">{curso.category}</span>
              <span className="badge-inscricao">{curso.tag}</span>
            </div>
            
            <h1 className="curso-titulo-principal">{curso.title}</h1>

            <p className="curso-subtitulo-principal">{curso.description}</p>

            <div className="curso-meta-hero">
              <span>{curso.duration}</span>
              <span>{curso.hours}</span>
              <span>{curso.mode}</span>
            </div>
            
            <div className="curso-salario">
              <span className="salario-label">Faixa de entrada no mercado</span>
              <span className="salario-valor">{curso.salary}</span>
            </div>

          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="curso-content-wrapper">
        <div className="curso-main-grid">
          <div className="curso-main-content">
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
          </div>

          <aside className="curso-side-panel">
            <div className="curso-info-cards">
              <div className="info-card-verde">
                <ClockIcon />
                <div className="info-card-content">
                  <span className="info-card-label">Duracao</span>
                  <span className="info-card-value">{curso.duration}</span>
                </div>
              </div>

              <div className="info-card-verde">
                <AwardIcon />
                <div className="info-card-content">
                  <span className="info-card-label">Certificacao</span>
                  <span className="info-card-value">{curso.tag}</span>
                </div>
              </div>

              <div className="info-card-verde">
                <BookIcon />
                <div className="info-card-content">
                  <span className="info-card-label">Modalidade</span>
                  <span className="info-card-value">{curso.mode}</span>
                </div>
              </div>
            </div>

            {/* Conheça Outros Cursos - Sidebar */}
            <div className="curso-conheca-sidebar">
              <h3 className="sidebar-cursos-titulo">Conheça outros cursos</h3>
              <div className="sidebar-cursos-list">
                {cursosRelacionados.map(cursoItem => (
                  <Link
                    key={cursoItem.id}
                    to={`/curso/${cursoItem.slug}`}
                    className="sidebar-curso-item"
                  >
                    <div className="sidebar-curso-imagem">
                      <img src={cursoItem.image} alt={cursoItem.title} loading="lazy" decoding="async"/>
                    </div>
                    <div className="sidebar-curso-info">
                      <h4 className="sidebar-curso-titulo-item">{cursoItem.title}</h4>
                      <span className="sidebar-curso-categoria">{cursoItem.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/cursos" className="sidebar-ver-todos">
                Ver todos os cursos <ArrowRight />
              </Link>
            </div>

            <div className="curso-side-cta">
              <h3>Pronto para comecar?</h3>
              <p>Garanta sua vaga e receba o contato da nossa equipe para orientacao da matricula.</p>
              <button className="btn-inscreva-se side" onClick={handleMatriculaClick}>
                Falar com consultor
              </button>
            </div>
          </aside>
        </div>

        {/* Conteudos da Formacao - Timeline */}
        <section
          ref={timelineSectionRef}
          className={`curriculum-timeline-section ${isTimelineVisible ? 'is-visible' : ''}`.trim()}
        >
          <h2 className="section-title-destaque">Conteudos da Formacao</h2>
          <div className="curriculum-timeline">
            {curriculumTimelineItems.map((item, index) => (
              <article
                key={item.id}
                className="curriculum-timeline-item"
                style={{ '--item-index': index }}
              >
                <span className="curriculum-timeline-module">{item.module}</span>
                <h3 className="curriculum-timeline-topic">{item.topicTitle}</h3>
                <div className="curriculum-timeline-meta">
                  {item.topicDescription && (
                    <p className="curriculum-timeline-description">{item.topicDescription}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CursoDetalhes;
