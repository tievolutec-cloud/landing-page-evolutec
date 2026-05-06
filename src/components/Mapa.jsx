import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'
import L from 'leaflet'

const PIN_SIZE = [45, 45]

function createPinIcon() {
  return L.divIcon({
    className: 'map-pin-wrapper',
    html: '<img src="/pin.webp" alt="Pin" class="map-pin-image"/>',
    iconSize: PIN_SIZE,
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  })
}

// Componente para atualizar centro e garantir zoom travado
const MapUpdater = ({ center, dynamicZoom }) => {
  const map = useMap()

  useEffect(() => {
    map.scrollWheelZoom.disable()
    map.doubleClickZoom.disable()
    map.touchZoom.disable()
    map.boxZoom.disable()
    map.keyboard.disable()
  }, [map])
  
  useEffect(() => {
    if (center) {
      map.setView(center, dynamicZoom, { animate: true })
    }
  }, [center, dynamicZoom, map])
  
  return null
}

const FIXED_MAP_ZOOM = 8
const ZOOM_UNIT_SELECTED = 16

const POLOS = [
  {
    id: 'todos',
    nome: 'Todos os Polos',
    position: [-1.2949, -47.9182],
    descricao: 'Visualize todos os nossos polos de ensino.',
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
  },
  {
    id: 8,
    nome: 'Igarapé Açu - PA',
    position: [-1.1299804636521684, -47.62362676416905],
    descricao: 'Conheça nossa unidade em Igarapé Açu',
    endereco: 'Evolutec Educação, Av. Magalhães Barata, 4034 - CENTRO, Igarapé-Açu - PA, 68725-000',
  }
]

const Mapa = ({ initialPoloId, onPoloChange, poloSelecionado }) => {
  // Usar poloSelecionado da prop, ou 'todos' como padrão
  const poloAtualState = poloSelecionado || 'todos';
  const poloChosen = POLOS.find(p => p.id.toString() === poloAtualState.toString()) || POLOS[0];
  
  // Calcular zoom dinâmico baseado na unidade selecionada
  const [dynamicZoom, setDynamicZoom] = useState(FIXED_MAP_ZOOM);

  useEffect(() => {
    onPoloChange && onPoloChange(poloChosen)
  }, [onPoloChange, poloChosen])

  // Atualizar zoom quando a unidade muda
  useEffect(() => {
    if (poloChosen.id === 'todos') {
      setDynamicZoom(FIXED_MAP_ZOOM)
    } else {
      setDynamicZoom(ZOOM_UNIT_SELECTED)
    }
  }, [poloChosen])

  // Seleciona polo vindo de prop externa (ex: navbar dropdown)
  useEffect(() => {
    if (initialPoloId) {
      const polo = POLOS.find(p => p.id.toString() === initialPoloId.toString())
      if (polo) {
        onPoloChange && onPoloChange(polo)
      }
    }
  }, [initialPoloId, onPoloChange])

  return (
    <section className="mapa-section">
      <div className="mapa-container">
        <div className="mapa-layout">
          <div className="mapa-content">
          <MapContainer 
            center={poloChosen.position} 
            zoom={dynamicZoom} 
            minZoom={FIXED_MAP_ZOOM}
            maxZoom={ZOOM_UNIT_SELECTED}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
            keyboard={false}
            className="mapa-leaflet"
          >
            <MapUpdater center={poloChosen.position} dynamicZoom={dynamicZoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {poloChosen.id === 'todos' ? (
              POLOS.slice(1).map((polo) => (
                <Marker
                  key={polo.id}
                  position={polo.position}
                  icon={createPinIcon()}
                >
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
              <Marker
                position={poloChosen.position}
                icon={createPinIcon()}
              >
                <Popup>
                  <div className="popup-content">
                    <h3>{poloChosen.nome}</h3>
                    {poloChosen.endereco && (
                      <p className="popup-endereco">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {poloChosen.endereco}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        
        <div className="mapa-sidebar">
          {/* Sidebar vazia - seletor agora está no header */}
        </div>
      </div>
    </div>
     
    </section>
  )
}

export default Mapa
