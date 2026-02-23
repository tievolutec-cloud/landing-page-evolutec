import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCourseBySlug } from '../data/coursesData';
import './CursoDetalhes.css';

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
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

  if (!curso) {
    return (
      <div className="curso-detalhes-container">
        <div className="curso-not-found">
          <h2>Curso não encontrado</h2>
          <button onClick={() => navigate('/')} className="btn-voltar">
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  const handleMatriculaClick = () => {
    // Scroll para seção de contato
    navigate('/#matricule');
    setTimeout(() => {
      const contatoSection = document.getElementById('matricule');
      if (contatoSection) {
        contatoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="curso-detalhes-container">
      {/* Botão Voltar */}
      <button onClick={() => navigate('/')} className="btn-voltar-flutuante">
        <ArrowLeft />
        <span>Voltar</span>
      </button>

      {/* Hero Section */}
      <section className="curso-hero">
        <div className="curso-hero-overlay" />
        <img src={curso.image} alt={curso.title} className="curso-hero-image" />
        <div className="curso-hero-content">
          <div className="curso-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#cursos">Cursos</Link>
            <span>/</span>
            <span>{curso.title}</span>
          </div>
          <span className="curso-hero-category">{curso.category}</span>
          <h1 className="curso-hero-title">{curso.title}</h1>
          <p className="curso-hero-description">{curso.description}</p>
          
          <div className="curso-hero-info">
            <div className="curso-hero-info-item">
              <ClockIcon />
              <div>
                <span className="label">Duração</span>
                <span className="value">{curso.duration}</span>
              </div>
            </div>
            <div className="curso-hero-info-item">
              <BookIcon />
              <div>
                <span className="label">Carga Horária</span>
                <span className="value">{curso.hours}</span>
              </div>
            </div>
            <div className="curso-hero-info-item">
              <AwardIcon />
              <div>
                <span className="label">Certificação</span>
                <span className="value">{curso.tag}</span>
              </div>
            </div>
          </div>

          <div className="curso-hero-actions">
            <button className="btn-matricula" onClick={handleMatriculaClick}>
              Matricule-se Agora
            </button>
            <span className="curso-mode-badge">{curso.mode}</span>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="curso-content">
        {/* Sobre o Curso */}
        <section className="curso-section">
          <h2 className="section-title">Sobre o Curso</h2>
          <p className="section-text">{curso.fullDescription}</p>
        </section>

        {/* Objetivos */}
        <section className="curso-section">
          <h2 className="section-title">Objetivos do Curso</h2>
          <div className="objectives-grid">
            {curso.objectives.map((objective, index) => (
              <div key={index} className="objective-item">
                <CheckIcon />
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grade Curricular */}
        <section className="curso-section">
          <h2 className="section-title">Grade Curricular</h2>
          <div className="curriculum-list">
            {curso.curriculum.map((item, index) => (
              <div key={index} className="curriculum-module">
                <h3 className="module-title">{item.module}</h3>
                <ul className="module-topics">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>
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
        <section className="curso-section">
          <h2 className="section-title">
            <BriefcaseIcon />
            Oportunidades de Carreira
          </h2>
          <div className="career-grid">
            {curso.careerOpportunities.map((career, index) => (
              <div key={index} className="career-item">
                {career}
              </div>
            ))}
          </div>
        </section>

        {/* Requisitos e Certificação */}
        <section className="curso-section">
          <div className="info-cards">
            <div className="info-card">
              <h3>Requisitos</h3>
              <p>{curso.requirements}</p>
            </div>
            <div className="info-card">
              <h3>Certificação</h3>
              <p>{curso.certificationType}</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="curso-cta">
          <h2>Pronto para começar sua jornada?</h2>
          <p>Matricule-se agora e dê o próximo passo na sua carreira!</p>
          <button className="btn-matricula-cta" onClick={handleMatriculaClick}>
            Quero me Matricular
          </button>
        </section>
      </div>
    </div>
  );
}

export default CursoDetalhes;
