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

function Home() {
  return (
    <>
      <Banner/>
      <Cursos/>
      <Contato/>
      <Estatisticas/>
      <GaleriaFormatura/>
      <Depoimentos/>
      <FAQ/>
      <RedesSociais/>
      <Blog/>
      <Mapa/>
    </>
  )
}

export default Home
