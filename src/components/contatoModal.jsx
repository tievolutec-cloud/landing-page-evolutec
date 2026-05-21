import { useState, useEffect, useRef } from 'react'
import './contatoModal.css'

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
  const modalRef = useRef(null)

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

        <div className={`matricula-modal-container ${status === 'success' ? 'matricula-modal-container--success' : ''}`}>

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
          )}
        </div>
      </div>
    </div>
  )
}

export default ContatoModal