import { useEffect, useRef, useState } from 'react'
import './Estatisticas.css'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    value: 15,
    suffix: '+',
    label: 'Anos de História',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 50,
    suffix: '+',
    label: 'Profissionais',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    value: 5000,
    suffix: '+',
    label: 'Alunos Formados',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    value: 98,
    suffix: '%',
    label: 'Índice de Satisfação',
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

function StatItem({ icon, value, suffix, label, active }) {
  const count = useCountUp(value, 1800, active)
  return (
    <div className="estat-item">
      <div className="estat-icon">{icon}</div>
      <div className="estat-number">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="estat-label">{label}</div>
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
      <div className="estat-deco estat-deco--star estat-deco--tl">✦</div>
      <div className="estat-deco estat-deco--star estat-deco--tr">✦</div>
      <div className="estat-deco estat-deco--star estat-deco--bl">✦</div>
      <div className="estat-deco estat-deco--star estat-deco--br">✦</div>

      <div className="estat-inner">
        <div className="estat-header">
          <div className="estat-cap-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="estat-title">Evolutec em Números!</h2>
          <p className="estat-subtitle">Há mais de 15 anos transformando vidas através da educação profissional</p>
        </div>

        <div className="estat-grid">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
