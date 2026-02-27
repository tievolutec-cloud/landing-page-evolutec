import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../components/Banner'
import RedesSociais from '../components/RedesSociais'
import Cursos from './Cursos'
import Contato from './Contato'
import Estatisticas from '../components/Estatisticas'
import GaleriaFormatura from '../components/GaleriaFormatura'
import Blog from './Blog'
import Depoimentos from '../components/Depoimentos'
import FAQ from '../components/FAQ'
import Mapa from '../components/Mapa'
import ChamadaMatricula from '../components/ChamadaMatricula'

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
      <Estatisticas/>
      <Cursos/>
      <Contato/>
      <GaleriaFormatura/>
      <Depoimentos/>
      <Blog/>
      <RedesSociais/>
      <FAQ/>
      <Mapa/>
    </>
  )
}

export default Home
