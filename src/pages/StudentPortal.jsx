import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getStudentPortal } from '../data/studentPortals';
import './StudentPortal.css';

function ArrowLeftIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7" />
    </svg>
  );
}

function ShieldIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StudentPortal() {
  const { polo } = useParams();
  const portal = getStudentPortal(polo);
  const [loading, setLoading] = useState(true);

  if (!portal?.url) {
    return (
      <main className="student-portal-page student-portal-unavailable">
        <div className="student-portal-empty">
          <span>Área do Aluno</span>
          <h1>Portal ainda não disponível</h1>
          <p>O acesso deste polo ainda não foi cadastrado.</p>
          <Link to="/?area-aluno=1" className="student-portal-primary-action">
            <ArrowLeftIcon /> Escolher outro polo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="student-portal-page">
      <div className="student-portal-shell">
        <header className="student-portal-toolbar">
          <div className="student-portal-heading">
            <span className="student-portal-eyebrow">Área do Aluno</span>
            <h1>Portal de {portal.name}</h1>
            <p><ShieldIcon /> Ambiente acadêmico acessado com segurança.</p>
          </div>

          <div className="student-portal-actions">
            <Link to="/?area-aluno=1" className="student-portal-back">
              <ArrowLeftIcon />
              Escolher outro polo
            </Link>
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="student-portal-external"
            >
              Abrir em nova guia <ExternalLinkIcon />
            </a>
          </div>
        </header>

        <section className="student-portal-frame-wrap" aria-label={`Portal do aluno - ${portal.name}`}>
          {loading && (
            <div className="student-portal-loading" role="status">
              <span className="student-portal-spinner" />
              <strong>Carregando seu portal...</strong>
              <small>Isso pode levar alguns segundos.</small>
            </div>
          )}
          <iframe
            className={`student-portal-frame${loading ? ' is-loading' : ''}`}
            src={portal.url}
            title={`Portal do Aluno - ${portal.name}`}
            onLoad={() => setLoading(false)}
            allow="clipboard-read; clipboard-write"
          />
        </section>
      </div>
    </main>
  );
}

export default StudentPortal;
