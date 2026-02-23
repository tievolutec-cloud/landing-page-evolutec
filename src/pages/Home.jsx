import Banner from '../components/Banner'
import RedesSociais from '../components/RedesSociais'
import Cursos from './Cursos'
import Contato from './Contato'
import Estatisticas from '../components/Estatisticas'
import GaleriaFormatura from '../components/GaleriaFormatura'
import Blog from './Blog'
import Depoimentos from '../components/Depoimentos'
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
      <RedesSociais/>
      <Blog/>
      <Mapa/>
    </>
  )
}

export default Home
