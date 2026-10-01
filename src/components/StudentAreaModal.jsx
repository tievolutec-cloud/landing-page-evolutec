import { useEffect, useRef } from 'react';
import './StudentAreaModal.css';

const STUDENT_PORTALS = [
  {
    name: 'Castanhal',
    url: 'https://dkportal.com.br/portal_aluno?i=OykhGj2_u--d3jQ6K0M3DS9ZdXlXL2VMRUpNWSsvMnhNb2pKaUE9PQ',
  },
  { name: 'Curuçá', url: null },
  { name: 'Igarapé-Açu', url: null },
  { name: 'Irituia', url: null },
  {
    name: 'Maracanã',
    url: 'https://dkportal.com.br/portal_aluno?i=zFUZx9eA2vGaQkq-q93df0lYOGJCQnFNZ0p4Qk9MenFGc1J1cWc9PQ',
  },
  { name: 'Marapanim', url: null },
  { name: 'São Domingos do Capim', url: null },
  { name: 'São Miguel do Guamá', url: null },
];

function CloseIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SchoolIcon({ size = 23 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18M6 21V9l6-4 6 4v12M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
    </svg>
  );
}

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function StudentAreaModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="student-area-overlay" onMouseDown={onClose}>
      <section
        className="student-area-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-area-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="student-area-accent" />
        <button
          ref={closeButtonRef}
          type="button"
          className="student-area-close"
          onClick={onClose}
          aria-label="Fechar Área do Aluno"
        >
          <CloseIcon />
        </button>

        <header className="student-area-header">
          <span className="student-area-header-icon"><SchoolIcon size={28} /></span>
          <div>
            <span className="student-area-eyebrow">Portal acadêmico</span>
            <h2 id="student-area-title">Área do Aluno</h2>
            <p>Selecione o polo onde você estuda para acessar o seu portal.</p>
          </div>
        </header>

        <div className="student-area-grid">
          {STUDENT_PORTALS.map((portal) => (
            portal.url ? (
              <a
                key={portal.name}
                className="student-area-card is-available"
                href={portal.url}
                onClick={onClose}
              >
                <span className="student-area-card-icon"><SchoolIcon /></span>
                <span className="student-area-card-copy">
                  <strong>{portal.name}</strong>
                  <small>Acessar portal</small>
                </span>
                <span className="student-area-card-arrow"><ArrowIcon /></span>
              </a>
            ) : (
              <div key={portal.name} className="student-area-card is-pending" aria-disabled="true">
                <span className="student-area-card-icon"><SchoolIcon /></span>
                <span className="student-area-card-copy">
                  <strong>{portal.name}</strong>
                  <small>Acesso em breve</small>
                </span>
              </div>
            )
          ))}
        </div>

        <p className="student-area-help">
          Em caso de dúvida, confirme com a secretaria qual é o seu polo de matrícula.
        </p>
      </section>
    </div>
  );
}

export default StudentAreaModal;
