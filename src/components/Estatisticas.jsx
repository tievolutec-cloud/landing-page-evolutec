import { useEffect, useRef, useState } from 'react'
import './Estatisticas.css'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    value: 15,
    suffix: '+',
    label: 'Anos de História',
    description: 'Tradição e excelência no ensino.' 
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 50,
    suffix: '+',
    label: 'Profissionais',
    description: 'Equipe qualificada e dedicada.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    value: 5000,
    suffix: '+',
    label: 'Alunos Formados',
    description: 'Carreiras transformadas com sucesso.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    value: 98,
    suffix: '%',
    label: 'Índice de Satisfação',
    description: 'Qualidade comprovada pelos alunos.'
  },
]

function useCountUp(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function StatItem({ icon, value, suffix, label, description, active }) {
  const count = useCountUp(value, 1800, active)
  
  return (
    <div className="estat-item">
      <div className="estat-icon-wrapper">
        {icon}
      </div>
      <div className="estat-content">
        <div className="estat-number">
          {count.toLocaleString('pt-BR')}{suffix}
        </div>
        <div className="estat-label">{label}</div>
        {/* description used to be hidden but structure supports it - kept hidden in CSS for now? Or enabled? */}
      </div>
    </div>
  )
}

export default function Estatisticas() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="estat-section" ref={ref}>
      <div className="estat-container">
        {stats.map((s, i) => (
          <div className="estat-wrapper" key={i}>
            <StatItem {...s} active={active} />
            {i < stats.length - 1 && <div className="estat-divider"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
