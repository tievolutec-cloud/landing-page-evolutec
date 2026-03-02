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

const Mapa = () => {
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
      position: [-1.2949, -47.9182],
      descricao: 'Conheça nossa unidade em Castanhal',
    },
    {
      id: 2,
      nome: 'Marapanim - PA',
      position: [-0.71315, -47.69749],
      descricao: 'Conheça nossa unidade em Marapanim',
    },
    {
      id: 3,
      nome: 'Curuçá - PA',
      position: [-0.728, -47.850], // Coordenadas aproximadas de Curuçá
      descricao: 'Conheça nossa unidade em Curuçá',
    },
    {
      id: 4,
      nome: 'Maracanã - PA',
      position: [-0.7578, -47.4506], // Coordenadas aproximadas de Maracanã
      descricao: 'Conheça nossa unidade em Maracanã',
    },
    {
      id: 5,
      nome: 'Irituia - PA',
      position: [-1.6144, -47.4740],
      descricao: 'Conheça nossa unidade em Irituia',
    },
    {
      id: 6,
      nome: 'São Domingos do Capim - PA',
      position: [-1.7081, -47.7431],
      descricao: 'Conheça nossa unidade em São Domingos do Capim',
    },
    {
      id: 7,
      nome: 'São Miguel do Guamá - PA',
      position: [-1.615, -47.483], // Ajustado para coordenadas mais precisas de São Miguel
      descricao: 'Conheça nossa unidade em São Miguel do Guamá',
    }
  ]

  const [poloSelecionado, setPoloSelecionado] = useState(polos[0])

  const handlePoloChange = (e) => {
    const polo = polos.find(p => p.id.toString() === e.target.value)
    setPoloSelecionado(polo)
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
                      <p>{polo.descricao}</p>
                    </div>
                  </Popup>
                </Marker>
              ))
            ) : (
              <Marker position={poloSelecionado.position} icon={customIcon}>
                <Popup>
                  <div className="popup-content">
                    <h3>{poloSelecionado.nome}</h3>
                    <p>{poloSelecionado.descricao}</p>
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
          
          {poloSelecionado && (
            <div className="polo-description">
              <h3>{poloSelecionado.nome}</h3>
              <p>{poloSelecionado.descricao}</p>
            </div>
          )}
        </div>
      </div>
    </div>
     
    </section>
  )
}

export default Mapa
