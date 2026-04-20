import { useEffect, useRef, useState, Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../components/Banner'

const Estatisticas = lazy(() => import('../components/Estatisticas'))
const Cursos = lazy(() => import('./Cursos'))
const Contato = lazy(() => import('./Contato'))

const GaleriaFormatura = lazy(() => import('../components/GaleriaFormatura'))
const Depoimentos = lazy(() => import('../components/Depoimentos'))
const Blog = lazy(() => import('./Blog'))
const RedesSociais = lazy(() => import('../components/RedesSociais'))
const FAQ = lazy(() => import('../components/FAQ'))
const Mapa = lazy(() => import('../components/Mapa'))

function DeferredSection({ children, minHeight = 220 }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || isVisible) return

    if (!(typeof window !== 'undefined' && 'IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '900px 0px' }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) return undefined

    let timeoutId
    let idleId
    const reveal = () => setIsVisible(true)

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(reveal, { timeout: 2500 })
    } else {
      timeoutId = window.setTimeout(reveal, 2500)
    }

    return () => {
      if (typeof window !== 'undefined' && idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} style={!isVisible ? { minHeight } : undefined}>
      {isVisible ? (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  )
}

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#matricule') {
      const element = document.getElementById('matricule')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <>
      <Banner/>
      <DeferredSection minHeight={160}>
        <Estatisticas/>
      </DeferredSection>
      <DeferredSection minHeight={640}>
        <Cursos/>
      </DeferredSection>
      <DeferredSection minHeight={520}>
        <Contato/>
      </DeferredSection>
      <DeferredSection minHeight={380}>
        <GaleriaFormatura/>
      </DeferredSection>
      <DeferredSection minHeight={280}>
        <Depoimentos/>
      </DeferredSection>
      <DeferredSection minHeight={340}>
        <Blog/>
      </DeferredSection>
      <DeferredSection minHeight={300}>
        <RedesSociais/>
      </DeferredSection>
      <DeferredSection minHeight={240}>
        <FAQ/>
      </DeferredSection>
      <DeferredSection minHeight={280}>
        <Mapa/>
      </DeferredSection>
    </>
  )
}

export default Home
