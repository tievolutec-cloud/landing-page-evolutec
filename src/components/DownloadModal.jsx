import { useEffect, useRef } from 'react';
import { X, Download, User, Mail, Phone, Building2, Loader2 } from 'lucide-react';
import '../components/DownloadModal.css';

/**
 * DownloadModal
 *
 * Props:
 *  - ebook        : objeto do e-book selecionado (ou null para fechar)
 *  - onClose      : fn para fechar o modal
 *  - formData     : { nome, email, telefone, empresa }
 *  - onChange     : fn(field, value)
 *  - errors       : { nome?, email?, telefone? }
 *  - loading      : boolean
 *  - onSubmit     : fn(e) — valida e dispara o download
 */
function DownloadModal({ ebook, onClose, formData, onChange, errors, loading, onSubmit }) {
  const firstInputRef = useRef(null);

  /* foca o primeiro campo ao abrir */
  useEffect(() => {
    if (ebook) {
      setTimeout(() => firstInputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [ebook]);

  /* fecha com Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!ebook) return null;

  return (
    <div
      className="dm-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dm-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="dm-panel">

        {/* Cabeçalho */}
        <div className="dm-header">
          <div className="dm-header-icon">
            <Download size={22} />
          </div>
          <div className="dm-header-text">
            <p className="dm-header-label">Download gratuito</p>
            <h2 id="dm-title" className="dm-header-title">{ebook.titulo}</h2>
          </div>
          <button
            className="dm-close-btn"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Imagem do livro */}
        {ebook.capa && (
          <div className="dm-ebook-capa">
            <img src={ebook.capa} alt={ebook.titulo} className="dm-ebook-capa-img"  loading="lazy" decoding="async"/>
          </div>
        )}

        {/* Corpo */}
        <form className="dm-form" onSubmit={onSubmit} noValidate>
          {/* Nome */}
          <div className={`dm-field${errors.nome ? ' dm-field--error' : ''}`}>
            <label className="dm-label" htmlFor="dm-nome">
              <User size={14} /> Nome completo <span className="dm-required-star">*</span>
            </label>
            <input
              ref={firstInputRef}
              id="dm-nome"
              className="dm-input"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => onChange('nome', e.target.value)}
              autoComplete="name"
            />
            {errors.nome && <span className="dm-error-msg">{errors.nome}</span>}
          </div>

          {/* E-mail */}
          <div className={`dm-field${errors.email ? ' dm-field--error' : ''}`}>
            <label className="dm-label" htmlFor="dm-email">
              <Mail size={14} /> E-mail <span className="dm-required-star">*</span>
            </label>
            <input
              id="dm-email"
              className="dm-input"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              autoComplete="email"
            />
            {errors.email && <span className="dm-error-msg">{errors.email}</span>}
          </div>

          {/* Telefone */}
          <div className={`dm-field${errors.telefone ? ' dm-field--error' : ''}`}>
            <label className="dm-label" htmlFor="dm-telefone">
              <Phone size={14} /> Telefone / WhatsApp <span className="dm-required-star">*</span>
            </label>
            <input
              id="dm-telefone"
              className="dm-input"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={(e) => onChange('telefone', e.target.value)}
              autoComplete="tel"
            />
            {errors.telefone && <span className="dm-error-msg">{errors.telefone}</span>}
          </div>

          <button
            type="submit"
            className="dm-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <><Loader2 size={18} className="dm-spinner" /> Preparando download…</>
            ) : (
              <><Download size={18} /> Baixar E-book Grátis</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DownloadModal;
