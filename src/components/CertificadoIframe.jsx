import { useEffect, useState } from 'react'
import './CertificadoIframe.css'

export default function CertificadoIframe() {
  const [height, setHeight] = useState('700px')

  useEffect(() => {
    const update = () => {
      const banner = document.getElementById('home')
      const bannerHeight = banner ? banner.getBoundingClientRect().height : 0
      const h = Math.max(window.innerHeight - bannerHeight, 420)
      setHeight(`${h}px`)
    }

    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="certificado-iframe-container" id="certificado">
      <iframe
        title="Validar certificado"
        src="https://suportedksoft.com.br/certificado/"
        className="certificado-iframe"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        style={{ height }}
      />
    </div>
  )
}
