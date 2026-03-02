import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './GaleriaFormatura.css'

const images = [
  { id: 1, src: '/formatura.jpeg', title: 'Turma de 2024', desc: 'Conquiste seu diploma' },
  { id: 2, src: '/formatura2.jpeg', title: 'Momentos Especiais', desc: 'Celebre cada vitória' },
  { id: 3, src: '/formatura3.jpeg', title: 'Novos Profissionais', desc: 'Prontos para o mercado' },
  { id: 4, src: '/formatura4.jpeg', title: 'Orgulho Evolutec', desc: 'Transformando vidas' },
]

export default function GaleriaFormatura() {
  const [current, setCurrent] = useState(0)

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((c) => (c + 1) % images.length)
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))

  return (
    <section className="galeria-minimalista">
      <div className="galeria-container">
        
        <div className="galeria-text-content">
          <span className="galeria-badge">Nossa História</span>
          <h2 className="galeria-title">Transformando Sonhos em Realidade</h2>
          <p className="galeria-desc">
            Cada formatura representa centenas de histórias de superação. 
            Junte-se à próxima turma de profissionais de sucesso.
          </p>
          <a href="#matricule" className="galeria-cta">
            Garanta Sua Vaga
          </a>
        </div>

        <div className="galeria-slider">
          <div 
            className="galeria-track" 
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img) => (
              <div key={img.id} className="galeria-slide">
                <img src={img.src} alt={img.title} />
                <div className="galeria-caption">
                  <h3>{img.title}</h3>
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="galeria-nav prev" onClick={prev} aria-label="Imagem anterior">
            <ChevronLeft size={24} />
          </button>
          <button className="galeria-nav next" onClick={next} aria-label="Próxima imagem">
            <ChevronRight size={24} />
          </button>
          
          <div className="galeria-dots">
            {images.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${current === idx ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Ir para imagem ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
