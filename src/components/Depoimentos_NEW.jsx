import { useState, useEffect } from 'react'
import './Depoimentos.css'

const depoimentos = [
  {
    nome: 'Taiana de Souza',
    curso: 'Conectividade e Tecnologia',
    texto:
      'A jornada de Taiana, uma jovem que enfrenta grandes desafios de locomoção e financeiros para estudar informática, mostrando a importância da perseverança e do apoio familiar para alcançar seus sonhos. Ela é um exemplo de dedicação, superando obstáculos diários para construir seu futuro.',
    videoId: 'lOUrBKfGwhk',
    imagem: '/banner-video-depoimento.webp',
  },
  {
    nome: 'Maria Clara Figueiredo',
    curso: 'Técnico em Enfermagem',
    texto:
      'Com apenas 16 anos, já sabia em qual área seguir no mercado de trabalho: Enfermagem. Através da Evolutec, iniciou sua formação técnica e teve a oportunidade de aprender sobre o corpo humano e processos clínicos nas aulas teóricas e práticas.',
    videoId: 'lOUrBKfGwhk',
    imagem: '/formatura.webp',
  },
  {
    nome: 'João Victor Andrade',
    curso: 'Profissional em Vendas',
    texto:
      'O curso mudou completamente minha visão sobre o mercado. Hoje trabalho numa grande empresa do setor e devo muito ao aprendizado que tive aqui. A Evolutec me preparou de verdade para o mundo profissional.',
    videoId: 'lOUrBKfGwhk',
    imagem: '/formatura2.webp',
  },
]

export default function Depoimentos() {
  const [index, setIndex] = useState(0)
  const [modal, setModal] = useState(false)
  const [animating, setAnimating] = useState(false)

  const goTo = (next) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setIndex(next)
      setAnimating(false)
    }, 350)
  }

  const prev = () => goTo(index === 0 ? depoimentos.length - 1 : index - 1)
  const next = () => goTo(index === depoimentos.length - 1 ? 0 : index + 1)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModal(false) }
    if (modal) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modal])

  const dep = depoimentos[index]

  return (
    <>
      <section className="dep-section" id="depoimentos">

        {/* Painel esquerdo — texto */}
        <div className={`dep-panel dep-panel--left ${animating ? 'dep-fade' : ''}`}>
          <span className="dep-label">Depoimentos</span>
          <h2 className="dep-title">
            Evolutec —<br />
            <span>Um lugar especial</span><br />
            para aprender
          </h2>

          <blockquote className="dep-quote">
            "{dep.texto}"
          </blockquote>

          <div className="dep-author">
            <div className="dep-author-info">
              <strong>{dep.nome}</strong>
              <span>{dep.curso}</span>
            </div>
          </div>

          <div className="dep-actions">
            <button
              className="dep-play"
              onClick={() => setModal(true)}
              aria-label="Ver depoimento em vídeo"
            >
              <span className="dep-play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Assistir depoimento
            </button>

            <div className="dep-nav">
              <button className="dep-arrow" onClick={prev} aria-label="Anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                  <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="dep-counter">{index + 1} / {depoimentos.length}</span>
              <button className="dep-arrow" onClick={next} aria-label="Próximo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Painel direito — imagem */}
        <div className={`dep-panel dep-panel--right ${animating ? 'dep-fade' : ''}`}>
          <img src={dep.imagem} alt={dep.nome} className="dep-img" />
        </div>

      </section>

      {/* Modal vídeo */}
      {modal && (
        <div className="dep-modal" onClick={() => setModal(false)}>
          <div className="dep-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="dep-modal-close" onClick={() => setModal(false)} aria-label="Fechar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round"/>
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${dep.videoId}?autoplay=1`}
              title={`Depoimento de ${dep.nome}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
