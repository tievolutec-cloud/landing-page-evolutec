import { useState } from 'react'
import './TrabalheConosco.css'
import { vagas, areas } from '../data/trabalheConoscoData'

const areaIcons = {
  'Educação': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  'Comercial': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  'Marketing': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
    </svg>
  ),
  'Administrativo': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
}

function IconLocation() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconBriefcase() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function IconArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  )
}

function IconShare() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
}

function VagaListItem({ vaga, isSelected, onClick }) {
  return (
    <button className={`vaga-list-item ${isSelected ? 'vaga-list-item--selected' : ''}`} onClick={onClick}>
      {vaga.destaque && <span className="vli-destaque-dot" title="Vaga em destaque" />}
      <div className="vli-top">
        <span className="vli-area-badge">
          {areaIcons[vaga.area]}
          {vaga.area}
        </span>
        {vaga.destaque && <span className="vli-badge">Destaque</span>}
      </div>
      <h3 className="vli-cargo">{vaga.cargo}</h3>
      <p className="vli-resumo">{vaga.resumo}</p>
      <div className="vli-meta">
        <span className="vli-meta-item">
          <IconLocation />
          {vaga.cidades.length > 1 ? `${vaga.cidades[0].split(' -')[0]} +${vaga.cidades.length - 1}` : vaga.cidades[0]}
        </span>
        <span className="vli-meta-item">
          <IconBriefcase />
          {vaga.tipo}
        </span>
        <span className="vli-meta-item">
          <IconClock />
          {vaga.cargaHoraria}
        </span>
      </div>
    </button>
  )
}

function VagaDetalhePanel({ vaga }) {
  if (!vaga) {
    return (
      <div className="vd-empty">
        <div className="vd-empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <p>Selecione uma vaga para ver os detalhes</p>
      </div>
    )
  }

  return (
    <div className="vd-panel">
      <div className="vd-panel-header">
        <div className="vd-panel-header-top">
          <span className="vd-area-badge">
            {areaIcons[vaga.area]}
            {vaga.area}
          </span>
          <button className="vd-share-btn" title="Compartilhar">
            <IconShare />
          </button>
        </div>

        <h1 className="vd-cargo">{vaga.cargo}</h1>
        <p className="vd-empresa">Evolutec • Norte do Brasil</p>

        <div className="vd-tags">
          <span className="vd-tag">
            <IconBriefcase />
            {vaga.tipo}
          </span>
          <span className="vd-tag">
            <IconClock />
            {vaga.cargaHoraria}
          </span>
          <span className="vd-tag">
            <IconLocation />
            {vaga.cidades.length} {vaga.cidades.length === 1 ? 'cidade' : 'cidades'}
          </span>
        </div>

        <a href="https://rhevolutec.base44.app/InscricaoCandidato" className="btn-candidatar-main">
          Candidatar-me a esta vaga
        </a>
      </div>

      <div className="vd-panel-body">
        <section className="vd-secao">
          <h2>Sobre a vaga</h2>
          <p className="vd-descricao-texto">{vaga.descricao}</p>
        </section>

        <section className="vd-secao">
          <h2>Responsabilidades</h2>
          <ul className="vd-checklist">
            {vaga.responsabilidades.map((r, i) => (
              <li key={i}>
                <span className="vd-check-icon"><IconCheck /></span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="vd-secao">
          <h2>Requisitos</h2>
          <ul className="vd-checklist vd-checklist--requisitos">
            {vaga.requisitos.map((r, i) => (
              <li key={i}>
                <span className="vd-check-icon"><IconCheck /></span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="vd-secao">
          <h2>Benefícios</h2>
          <div className="vd-beneficios-chips">
            {vaga.beneficios.map((b, i) => (
              <span key={i} className="vd-beneficio-chip">{b}</span>
            ))}
          </div>
        </section>

        <section className="vd-secao">
          <h2>Localidades</h2>
          <div className="vd-cidades-lista">
            {vaga.cidades.map((c, i) => (
              <span key={i} className="vd-cidade-chip">
                <IconLocation />
                {c}
              </span>
            ))}
          </div>
        </section>

        <div className="vd-cta-bottom">
          <div>
            <p className="vd-cta-label">Gostou dessa oportunidade?</p>
            <p className="vd-cta-sub">Envie sua candidatura agora mesmo.</p>
          </div>
          <a href="https://rhevolutec.base44.app/InscricaoCandidato" className="btn-candidatar-main btn-candidatar-main--sm">
            Candidatar-me
          </a>
        </div>
      </div>
    </div>
  )
}

function TrabalheConosco() {
  const [filtro, setFiltro] = useState('Todas')
  const [busca, setBusca] = useState('')
  const [vagaSelecionada, setVagaSelecionada] = useState(vagas[0])
  const [mobileView, setMobileView] = useState('lista') // 'lista' | 'detalhe'

  const vagasFiltradas = vagas.filter(v => {
    const matchArea = filtro === 'Todas' || v.area === filtro
    const matchBusca = busca === '' ||
      v.cargo.toLowerCase().includes(busca.toLowerCase()) ||
      v.area.toLowerCase().includes(busca.toLowerCase()) ||
      v.cidades.some(c => c.toLowerCase().includes(busca.toLowerCase()))
    return matchArea && matchBusca
  })

  const handleSelectVaga = (vaga) => {
    setVagaSelecionada(vaga)
    setMobileView('detalhe')
  }

  return (
    <div className="trabalhe-conosco-page">
      {/* HERO COMPACTO */}
      <section className="tc-hero">
        <div className="tc-hero-content">
          <span className="tc-hero-pretitle">Evolutec • Carreiras</span>
          <h1>Trabalhe Conosco</h1>
          <p className="tc-hero-sub">Faça parte do maior ecossistema de educação do Norte do Brasil</p>

          <div className="tc-hero-stats">
            <div className="tc-hero-stat">
              <strong>8+</strong>
              <span>Unidades</span>
            </div>
            <div className="tc-stat-div" />
            <div className="tc-hero-stat">
              <strong>70+</strong>
              <span>Cursos</span>
            </div>
            <div className="tc-stat-div" />
            <div className="tc-hero-stat">
              <strong>10k+</strong>
              <span>Alunos</span>
            </div>
            <div className="tc-stat-div" />
            <div className="tc-hero-stat">
              <strong>{vagas.length}</strong>
              <span>Vagas abertas</span>
            </div>
          </div>
        </div>
      </section>

      {/* BARRA DE BUSCA + FILTROS */}
      <div className="tc-search-bar">
        <div className="tc-inner">
          <div className="tc-search-row">
            <div className="tc-search-input-wrap">
              <svg className="tc-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="tc-search-input"
                placeholder="Buscar por cargo, área ou cidade..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
              />
            </div>
            <div className="tc-filtros">
              {areas.map(a => (
                <button
                  key={a}
                  className={`filtro-btn ${filtro === a ? 'filtro-btn--ativo' : ''}`}
                  onClick={() => setFiltro(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
          <p className="tc-results-count">
            {vagasFiltradas.length} {vagasFiltradas.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}
          </p>
        </div>
      </div>

      {/* LAYOUT PRINCIPAL: LISTA + DETALHE */}
      <div className="tc-main-layout tc-inner">

        {/* Mobile nav */}
        {mobileView === 'detalhe' && vagaSelecionada && (
          <button className="mobile-back-btn" onClick={() => setMobileView('lista')}>
            <IconArrowLeft />
            Voltar às vagas
          </button>
        )}

        <div className={`tc-jobs-list ${mobileView === 'detalhe' ? 'tc-jobs-list--hidden-mobile' : ''}`}>
          {vagasFiltradas.length === 0 ? (
            <div className="tc-no-results">
              <p>Nenhuma vaga encontrada.</p>
              <button onClick={() => { setBusca(''); setFiltro('Todas') }}>Limpar filtros</button>
            </div>
          ) : (
            vagasFiltradas.map(vaga => (
              <VagaListItem
                key={vaga.id}
                vaga={vaga}
                isSelected={vagaSelecionada?.id === vaga.id}
                onClick={() => handleSelectVaga(vaga)}
              />
            ))
          )}

          {/* Currículo espontâneo */}
          <div className="tc-espontaneo">
            <p>Não encontrou a vaga ideal?</p>
            <a href="https://rhevolutec.base44.app/InscricaoCandidato" className="btn-espontaneo">
              Enviar currículo espontâneo
            </a>
          </div>
        </div>

        <div className={`tc-jobs-detail ${mobileView === 'lista' ? 'tc-jobs-detail--hidden-mobile' : ''}`}>
          <VagaDetalhePanel vaga={vagaSelecionada} />
        </div>
      </div>
    </div>
  )
}

export default TrabalheConosco
