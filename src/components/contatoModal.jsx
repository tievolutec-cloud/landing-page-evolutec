import { useState, useEffect, useRef } from 'react'
import './ContatoModal.css'

// 🔴 Cole aqui a URL gerada pelo Google Apps Script
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzqDRXs5jyX4bYAvT0W6FZ3e_3c03oiWyJTZqfmHrdbnQMyF-UnEDYo-xiqT6dauuNffg/exec'

const cursosOpcoes = [
  'Técnico em Operador de Caixa',
  'Conectividade e Tecnologia',
  'Técnico em Enfermagem',
  'Técnico em Hotelaria e Turismo',
  'Profissional em Vendas',
  'Atendente de Farmácia',
]

function ContatoModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    curso: '',
    cidade: '',
    lgpd: false,
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [isVisible, setIsVisible] = useState(false)
  const avatarRef = useRef(null)
  const modalRef = useRef(null)

  // Anima o avatar quando o modal abre
  useEffect(() => {
    if (isOpen) {
      // Pequeno delay para a transição de entrada do modal ocorrer primeiro
      const timer = setTimeout(() => setIsVisible(true), 300)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  // Fecha ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Bloqueia o scroll do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reseta o status ao fechar
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStatus('idle')
        setForm({ nome: '', telefone: '', curso: '', cidade: '', lgpd: false })
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          telefone: form.telefone,
          curso: form.curso,
          cidade: form.cidade,
        }),
      })

      setStatus('success')
      setForm({ nome: '', telefone: '', curso: '', cidade: '', lgpd: false })
    } catch (err) {
      console.error('Erro ao enviar para o Sheets:', err)
      setStatus('error')
    }
  }

  // Clique no backdrop fecha o modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'modal-backdrop--open' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de contato"
    >
      <div className="modal-box" ref={modalRef}>
        {/* Botão fechar */}
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
          ✕
        </button>

        {/* Conteúdo do modal — mesma estrutura do Contato.jsx */}
        <div className={`contato-container ${status === 'success' ? 'contato-container--success' : ''}`}>

          {status === 'success' ? (
            <div className="contato-success">
              <div className="contato-success__icon">✅</div>
              <h2 className="contato-success__titulo">Recebemos seu contato!</h2>
              <p className="contato-success__texto">
                Em breve nossa equipe entrará em contato com você pelo WhatsApp.
              </p>
              <button
                className="contato-btn"
                onClick={() => setStatus('idle')}
              >
                Enviar outro contato
              </button>
            </div>
          ) : (
            <>
              {/* Lado esquerdo — ilustração + ícones sociais */}
              <div className="contato-visual">
                <div className="contato-card-bg" />
                <img
                  ref={avatarRef}
                  src="/mascote.png"
                  alt="Mascote Evolutec"
                  className={`contato-avatar ${isVisible ? 'visible' : ''}`}
                />

                <div className="contato-social contato-social--whatsapp">
                  <svg viewBox="0 0 24 24" fill="#fff" width="32" height="32">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <div className="contato-social contato-social--facebook">
                  <svg viewBox="0 0 24 24" fill="#fff" width="32" height="32">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>

                <div className="contato-social contato-social--instagram">
                  <svg viewBox="0 0 24 24" fill="#fff" width="32" height="32">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
                  </svg>
                </div>
              </div>

              {/* Lado direito — formulário */}
              <div className="contato-form-wrapper">
                <h2 className="contato-titulo">Entraremos em contato com você</h2>

                <form className="contato-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome:"
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />

                  <div className="contato-row">
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone:"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                    />
                    <select name="curso" value={form.curso} onChange={handleChange} required>
                      <option value="" disabled>curso de interesse</option>
                      {cursosOpcoes.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <input
                    type="text"
                    name="cidade"
                    placeholder="De qual cidade você fala ?"
                    value={form.cidade}
                    onChange={handleChange}
                    required
                  />

                  <label className="contato-lgpd">
                    <input
                      type="checkbox"
                      name="lgpd"
                      checked={form.lgpd}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      Concordo que os dados pessoais fornecidos acima serão utilizados para envio de conteúdo
                      informativo, analítico e publicitário sobre produtos, serviços e assuntos gerais, nos termos
                      da Lei Geral de Proteção de Dados.
                    </span>
                  </label>

                  {status === 'error' && (
                    <p className="contato-erro">
                      Ocorreu um erro ao enviar. Tente novamente.
                    </p>
                  )}

                  <button type="submit" className="contato-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Enviando...' : 'Quero me matricular!'}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContatoModal