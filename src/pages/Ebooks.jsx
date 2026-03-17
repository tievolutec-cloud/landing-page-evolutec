import { useState, useEffect, useCallback } from 'react';
import { BookOpen, Tag } from 'lucide-react';
import { ebooksData, categorias } from '../data/ebooksData';
import DownloadModal from '../components/DownloadModal';
import './Ebooks.css';
import '../components/DownloadModal.css';

/* ── estado inicial do formulário ── */
const FORM_INICIAL = { nome: '', email: '', telefone: '', empresa: '' };

/* ── validação ── */
function validar(formData) {
  const erros = {};

  if (!formData.nome.trim())
    erros.nome = 'Por favor, informe seu nome completo.';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim())
    erros.email = 'Por favor, informe seu e-mail.';
  else if (!emailRegex.test(formData.email))
    erros.email = 'Informe um e-mail válido.';

  const telLimpo = formData.telefone.replace(/\D/g, '');
  if (!formData.telefone.trim())
    erros.telefone = 'Por favor, informe seu telefone.';
  else if (telLimpo.length < 10)
    erros.telefone = 'Informe um telefone válido (com DDD).';

  return erros;
}

function Ebooks() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  /* modal */
  const [ebookSelecionado, setEbookSelecionado] = useState(null);
  const [formData, setFormData]   = useState(FORM_INICIAL);
  const [errors, setErrors]       = useState({});
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ebooksFiltrados =
    categoriaAtiva === 'Todos'
      ? ebooksData
      : ebooksData.filter((e) => e.categoria === categoriaAtiva);

  /* ── abre o modal ── */
  const abrirModal = (ebook) => {
    setEbookSelecionado(ebook);
    setFormData(FORM_INICIAL);
    setErrors({});
  };

  /* ── fecha o modal ── */
  const fecharModal = useCallback(() => {
    setEbookSelecionado(null);
    setLoading(false);
  }, []);

  /* ── atualiza campo do formulário ── */
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // limpa o erro do campo ao digitar
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  /* ── submete o formulário e dispara o download ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const erros = validar(formData);
    if (Object.keys(erros).length > 0) {
      setErrors(erros);
      return;
    }

    setLoading(true);

    try {
      /*
       * 🔌 Aqui você pode chamar sua API / CRM / planilha para salvar o lead.
       *    Exemplo:
       *
       *    await fetch('/api/leads', {
       *      method: 'POST',
       *      headers: { 'Content-Type': 'application/json' },
       *      body: JSON.stringify({ ...formData, ebook: ebookSelecionado.titulo }),
       *    });
       *
       * Por ora, simulamos um delay de 800ms.
       */
      await new Promise((res) => setTimeout(res, 800));

      // dispara o download programaticamente
      const link = document.createElement('a');
      link.href     = ebookSelecionado.downloadUrl;
      link.download = '';
      link.rel      = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      fecharModal();
    } catch (err) {
      console.error('Erro ao processar download:', err);
      setLoading(false);
    }
  };

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

                  {/*
                   * ⚡ Substituímos o <a download> por um <button> que
                   *    abre o modal. O download só ocorre após o formulário
                   *    ser validado e enviado.
                   */}
                  <button
                    className="ebook-download-btn"
                    onClick={() => abrirModal(ebook)}
                    aria-label={`Baixar e-book: ${ebook.titulo}`}
                  >
                    Baixar Grátis
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de captura */}
      <DownloadModal
        ebook={ebookSelecionado}
        onClose={fecharModal}
        formData={formData}
        onChange={handleChange}
        errors={errors}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Ebooks;