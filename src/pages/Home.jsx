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
  return (
    <>
      <Banner/>
      <ChamadaMatricula/>
      <Cursos/>
      <Contato/>
      <Estatisticas/>
      <GaleriaFormatura/>
      <Depoimentos/>
      <RedesSociais/>
      <Blog/>
      <FAQ/>
      <Mapa/>
    </>
  )
}

export default Home
