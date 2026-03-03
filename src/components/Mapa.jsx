import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'
import L from 'leaflet'

// Criar um ícone customizado usando a imagem pin.png
const customIcon = L.icon({
  iconUrl: '/pin.png',
  iconSize: [45, 45],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
})

// Componente para atualizar o centro do mapa
const MapUpdater = ({ center, zoom }) => {
  const map = useMap()
  
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 13, { duration: 1.5 })
    }
  }, [center, zoom, map])
  
  return null
}

const Mapa = ({ initialPoloId, onPoloChange }) => {
  const polos = [
    {
      id: 'todos',
      nome: 'Todos os Polos',
      position: [-1.2949, -47.9182],
      descricao: 'Visualize todos os nossos polos de ensino.',
      zoom: 8
    },
    {
      id: 1,
      nome: 'Castanhal - PA',
      position: [-1.2904867452288942, -47.927698915342106],
      descricao: 'Conheça nossa unidade em Castanhal',
      endereco: 'Tv. Cônego Luíz Leitão, 2479 - Centro, Castanhal - PA, 68743-020',
    },
    {
      id: 2,
      nome: 'Marapanim - PA',
      position: [-0.7129983384339472, -47.69613518032469],
      descricao: 'Conheça nossa unidade em Marapanim',
      endereco: 'R. Edmundo Botelho, 544 - Centro, Marapanim - PA, 68760-000',
    },
    {
      id: 3,
      nome: 'Curuçá - PA',
      position: [-0.7314956080193113, -47.85028899692766],
      descricao: 'Conheça nossa unidade em Curuçá',
      endereco: 'Tv. Sete de Setembro, 151 - Centro, Curuçá - PA, 68750-000',
    },
    {
      id: 4,
      nome: 'Maracanã - PA',
      position: [-0.7644489541998982, -47.456059412414234],
      descricao: 'Conheça nossa unidade em Maracanã',
      endereco: 'Rua Cantidio Guimarães, Tv. Ernesto Gomes, 53 - Qd 44 - Centro, Maracanã - PA, 68710-000',
    },
    {
      id: 5,
      nome: 'Irituia - PA',
      position: [-1.7696900394870572, -47.44180260081108],
      descricao: 'Conheça nossa unidade em Irituia',
      endereco: 'Tv. Ceará - Centro, Irituia - PA, 68655-000',
    },
    {
      id: 6,
      nome: 'São Domingos do Capim - PA',
      position: [-1.6742720646956826, -47.77274371713776],
      descricao: 'Conheça nossa unidade em São Domingos do Capim',
      endereco: 'Av. Dr. Lauro Sodré, 70 - Centro, São Domingos do Capim - PA, 68635-000',
    },
    {
      id: 7,
      nome: 'São Miguel do Guamá - PA',
      position: [-1.6224162787634167, -47.482412474973565],
      descricao: 'Conheça nossa unidade em São Miguel do Guamá',
      endereco: 'Tv. Américo Lopes, 297 - São Manoel, São Miguel do Guamá - PA, 68660-000',
    }
  ]

  const [poloSelecionado, setPoloSelecionado] = useState(polos[0])

  // Seleciona polo vindo de prop externa (ex: navbar dropdown)
  useEffect(() => {
    if (initialPoloId) {
      const polo = polos.find(p => p.id.toString() === initialPoloId.toString())
      if (polo) {
        setPoloSelecionado(polo)
        onPoloChange && onPoloChange(polo)
      }
    }
  }, [initialPoloId])

  const handlePoloChange = (e) => {
    const polo = polos.find(p => p.id.toString() === e.target.value)
    setPoloSelecionado(polo)
    onPoloChange && onPoloChange(polo)
  }

  return (
    <section className="mapa-section">
      <div className="mapa-container">
        <div className="mapa-layout">
          <div className="mapa-content">
          <MapContainer 
            center={poloSelecionado.position} 
            zoom={poloSelecionado.zoom || 13} 
            scrollWheelZoom={true}
            className="mapa-leaflet"
          >
            <MapUpdater center={poloSelecionado.position} zoom={poloSelecionado.zoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {poloSelecionado.id === 'todos' ? (
              polos.slice(1).map((polo) => (
                <Marker key={polo.id} position={polo.position} icon={customIcon}>
                  <Popup>
                    <div className="popup-content">
                      <h3>{polo.nome}</h3>
                      {polo.endereco && (
                        <p className="popup-endereco">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                          {polo.endereco}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))
            ) : (
              <Marker position={poloSelecionado.position} icon={customIcon}>
                <Popup>
                  <div className="popup-content">
                    <h3>{poloSelecionado.nome}</h3>
                    {poloSelecionado.endereco && (
                      <p className="popup-endereco">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {poloSelecionado.endereco}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        
        <div className="mapa-sidebar">
          <div className="polo-selector-container">
            <label htmlFor="polo-select" className="polo-selector-label">
              Selecione seu estado
            </label>
            <select 
              id="polo-select"
              className="polo-selector"
              value={poloSelecionado.id}
              onChange={handlePoloChange}
            >
              <option value="todos" disabled hidden>Estado</option>
              {polos.map((polo) => (
                <option key={polo.id} value={polo.id}>
                  {polo.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
     
    </section>
  )
}

export default Mapa
