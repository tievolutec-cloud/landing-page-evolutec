import { useState, useEffect, useCallback } from 'react'
import './Banner.css'

const slides = [
  {
    id: 2,
    imageDesktop: '/banner2.webp',
    imageMobile: '/banner2.webp', // Substitua depois pela versão mobile
    title: 'Educação que Transforma',
    subtitle: 'Metodologia inovadora com foco em resultados e aprendizado real.',
    cta: 'Saiba Mais',
    ctaLink: '#sobre',
  },
  {
    id: 3,
    imageDesktop: '/banner3.webp',
    imageMobile: '/banner3.webp', // Substitua depois pela versão mobile
    title: 'Matricule-se Agora',
    subtitle: 'Vagas limitadas! Garanta sua vaga e comece sua jornada na tecnologia.',
    cta: 'Matricule-se',
    ctaLink: '#matricule',
  },
]

function Banner() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length)
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length)
  }, [current, goToSlide])

  // Habilita animacoes apenas apos o primeiro frame para nao atrasar LCP.
  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => setIsReady(true))
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  // Auto-play
  useEffect(() => {
    let intervalId
    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (!document.hidden) nextSlide()
      }, 6000)
    }, 2500)

    return () => {
      window.clearTimeout(startDelay)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [nextSlide])

  return (
    <section className={`banner${isReady ? ' is-ready' : ''}`} id="home">
      <div className="banner-track">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`banner-slide${index === current ? ' active' : ''}`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.imageMobile} />
                <img
                  src={slide.imageDesktop}
                  alt={slide.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding="async"
                  width="1920"
                  height="1080"
                  className="banner-image"
              />
            </picture>
            
            {/* <div className="banner-overlay" />
            <div className="banner-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div> */}
          </div>
        ))}
      </div>

      <button className="banner-arrow banner-arrow--left" onClick={prevSlide} aria-label="Anterior">
        &#10094;
      </button>
      <button className="banner-arrow banner-arrow--right" onClick={nextSlide} aria-label="Próximo">
        &#10095;
      </button>

      <div className="banner-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`banner-dot${index === current ? ' active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner
