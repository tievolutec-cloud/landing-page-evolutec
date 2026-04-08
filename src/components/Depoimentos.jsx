import { useState, useEffect, useRef, useCallback } from 'react'
import './Depoimentos.css'

const videos = [
  {
    id: 1,
    titulo: 'Depoimento Evolutec (Shorts)',
    videoId: 'cnAxO-xCS64',
  },
  {
    id: 2,
    titulo: 'Depoimento Evolutec (Shorts)',
    videoId: '3dx35FkCzF8',
  },
  {
    id: 3,
    titulo: 'Depoimento Evolutec (Shorts)',
    videoId: 't8xSaN7sl6M',
  },
  {
    id: 4,
    titulo: 'Taiana de Souza: Conectividade e Tecnologia na Evolutec',
    videoId: 'lOUrBKfGwhk',
  },
]

const PlayIcon = () => (
  <svg viewBox="0 0 68 48" width="68" height="48" className="dep-yt-play-svg">
    <path className="dep-yt-play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"/>
    <path className="dep-yt-play-arrow" d="M 45,24 27,14 27,34"/>
  </svg>
)

const VISIBLE_DESKTOP = 3
const VISIBLE_TABLET  = 2
const VISIBLE_MOBILE  = 1

function useVisible() {
  const [visible, setVisible] = useState(VISIBLE_DESKTOP)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(VISIBLE_MOBILE)
      else if (window.innerWidth < 1024) setVisible(VISIBLE_TABLET)
      else setVisible(VISIBLE_DESKTOP)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return visible
}

const depoimentos = [
]

export default function Depoimentos() {
  const [offset, setOffset]       = useState(0)
  const [modalId, setModalId]     = useState(null)
  const visible                   = useVisible()
  const maxOffset                 = videos.length - visible

  const prev = () => setOffset(o => Math.max(0, o - 1))
  const next = () => setOffset(o => Math.min(maxOffset, o + 1))

  // fechar modal com Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModalId(null) }
    if (modalId !== null) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalId])

  // corrige offset ao redimensionar
  useEffect(() => {
    setOffset(o => Math.min(o, Math.max(0, videos.length - visible)))
  }, [visible])

  return (
    <>
      <section className="dep-section" id="depoimentos">
        <h1 className="dep-heading">O que nossos alunos dizem sobre a escola</h1>

        <div className="dep-carousel-wrapper">
          {/* Seta esquerda */}
          <button
            className="dep-arrow dep-arrow--left"
            onClick={prev}
            disabled={offset === 0}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20" height="20">
              <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Track */}
          <div className="dep-track-clip">
            <ul
              className="dep-track"
              style={{ transform: `translateX(calc(-${offset} * (100% / ${visible}) - ${offset} * var(--dep-gap)))` }}
            >
              {videos.map((v) => (
                <li key={v.id} className="dep-card" style={{ flex: `0 0 calc(100% / ${visible} - var(--dep-gap) * ${visible - 1} / ${visible})` }}>
                  <button
                    className="dep-card-btn"
                    onClick={() => setModalId(v.videoId)}
                    aria-label={`Assistir: ${v.titulo}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                      alt={v.titulo}
                      className="dep-thumb"
                     loading="lazy" decoding="async"/>
                    <div className="dep-card-overlay">
                      <PlayIcon />
                      <span className="dep-yt-logo">
                        <svg viewBox="0 0 90 20" height="16" fill="white">
                          <path d="M27.97 3.11c-.32-1.2-1.28-2.14-2.49-2.45C23.28 0 14.34 0 14.34 0S5.4 0 3.2.66C1.99.97 1.03 1.91.71 3.11 0 5.3 0 9.89 0 9.89s0 4.6.71 6.78c.32 1.2 1.28 2.14 2.49 2.45C5.4 19.78 14.34 19.78 14.34 19.78s8.94 0 11.14-.66c1.21-.31 2.17-1.25 2.49-2.45.71-2.18.71-6.78.71-6.78s0-4.59-.71-6.78zM11.47 13.97V5.81l7.45 4.08-7.45 4.08z"/>
                          <text x="32" y="15" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold" fill="white">YouTube</text>
                        </svg>
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Seta direita */}
          <button
            className="dep-arrow dep-arrow--right"
            onClick={next}
            disabled={offset >= maxOffset}
            aria-label="Próximo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20" height="20">
              <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="dep-dots" role="tablist">
          {videos.map((v, i) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={i >= offset && i < offset + visible}
              className={`dep-dot${i >= offset && i < offset + visible ? ' active' : ''}`}
              onClick={() => setOffset(Math.min(Math.max(0, i), maxOffset))}
              aria-label={`Ir para o vídeo ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalId !== null && (
        <div className="dep-modal" onClick={() => setModalId(null)}>
          <div className="dep-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="dep-modal-close" onClick={() => setModalId(null)} aria-label="Fechar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round"/>
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${modalId}?autoplay=1`}
              title="Depoimento Evolutec"
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

