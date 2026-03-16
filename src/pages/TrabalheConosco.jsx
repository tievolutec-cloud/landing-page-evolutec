import { useState } from 'react'
import './TrabalheConosco.css'

const vagas = [
  {
    id: 1,
    cargo: 'Instrutor',
    area: 'Educação',
    cidades: [
      'Castanhal - PA',
      'Marapanim - PA',
      'Curuçá - PA',
      'Maracanã - PA',
      'Irituia - PA',
      'São Domingos do Capim - PA',
      'São Miguel do Guamá - PA',
    ],
    tipo: 'CLT',
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    resumo: 'Conduza aulas e acompanhe o desenvolvimento dos alunos nos cursos da Evolutec.',
    cargaHoraria: '40 horas semanais',
    descricao: `Buscamos profissionais apaixonados por ensino e tecnologia para compor nosso time de instrutores. Você será responsável por conduzir aulas dinâmicas e práticas, acompanhar o progresso individual dos alunos e contribuir para a melhoria contínua do material didático.`,
    responsabilidades: [
      'Ministrar aulas presenciais e/ou online nos cursos da Evolutec',
      'Elaborar planos de aula e materiais complementares',
      'Avaliar e acompanhar o desenvolvimento dos alunos',
      'Participar de reuniões pedagógicas e treinamentos internos',
      'Propor melhorias nos conteúdos e metodologias de ensino',
    ],
    requisitos: [
      'Ensino superior completo ou em andamento na área de atuação',
      'Experiência com ensino ou treinamentos',
      'Boa comunicação e didática',
      'Domínio do conteúdo a ser ministrado',
      'Proatividade e comprometimento com resultados pedagógicos',
    ],
    beneficios: ['Vale-refeição', 'Plano de saúde', 'Acesso a cursos Evolutec', 'Treinamentos internos'],
  },
  {
    id: 2,
    cargo: 'Vendedor Externo',
    area: 'Comercial',
    cidades: [
      'Castanhal - PA',
      'Curuçá - PA',
      'Marapanim - PA',
      'Maracanã - PA',
      'Igarapé-Açú - PA',
      'São Domingos do Capim - PA',
      'São Miguel do Guamá - PA',
      'Irituia - PA',
    ],
    tipo: 'CLT + Comissão',
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    resumo: 'Se você é comunicativo, faz amizade rápido, é proativo, determinado e ambicioso, essa vaga é para você! Aqui você não vende cursos — você vende mudança de vida e realiza sonhos.',
    cargaHoraria: '44 horas semanais',
    descricao: `O Vendedor Evolutec é uma pessoa comunicativa, que faz amizade rápido onde chega, é proativa, determinada e ambiciosa — alguém que tem vontade de conquistar sua própria casa, moto, carro e viagens, e que não teme médios e grandes desafios.

Aqui você não venderá cursos. Você venderá mudança de vida e sonhos para jovens e adultos que querem trabalhar, ganhar seu próprio dinheiro e evoluir. São 70 opções de cursos disponíveis. Ao mesmo tempo em que ganha dinheiro, você colabora de forma significativa para o sucesso de inúmeras pessoas — e isso é o que torna o time Evolutec único.

A Evolutec está crescendo a cada dia para se tornar a maior rede de ensino do Norte do Brasil. Para crescer ainda mais, precisamos de pessoas que querem evoluir e se tornar grandes como nossa marca.`,
    responsabilidades: [
      'Vender "mudança de vida" — entre as 70 opções de cursos da Evolutec',
      'Realizar visitas a domicílio, percorrendo rua por rua em bairros, vilas e cidades do interior',
      'Atuar em ramais (estradas de chão) e municípios próximos das 8 unidades',
      'Apresentar a marca Evolutec e ajudar jovens e adultos a mudarem de vida através da educação',
      'Bater e superar metas mensais de vendas estipuladas pela gerência',
      'Participar de treinamentos trimestrais sobre vendas, atendimento e relações interpessoais',
      'Ser exemplo de determinação, ambição e proatividade dentro do time',
    ],
    requisitos: [
      'Ser comunicativo — não ter vergonha de falar com pessoas desconhecidas',
      'Fazer amizade rápido: chegar a um local e se conectar com todos naturalmente',
      'Ser proativo — não se contentar com resultados baixos, sempre querer entregar mais',
      'Ser determinado — encarar dificuldades sem medo, pois sabe que são o caminho para o sucesso',
      'Ter ambição — saber que quanto mais vende, mais conquista: casa, carro, moto, viagens',
      'Estar disposto a viajar pelas 8 unidades e cidades adjacentes (podendo ficar a semana toda fora)',
      'Experiência em vendas externas (chips, planos, produtos naturais, etc.) é diferencial, mas não obrigatória — primeiro emprego também é bem-vindo!',
    ],
    beneficios: [
      'Salário inicial de R$ 1.621,00 + comissões (vendedores chegam a R$ 3.500–R$ 4.000/mês)',
      'Prêmio em dinheiro ao bater a meta mensal',
      'Prêmios por desafios alcançados propostos pela gerência',
      'Viagens para lugares paradisíacos com hospedagem e alimentação pagos pela Evolutec',
      'Treinamentos trimestrais sobre vendas, atendimento e relações interpessoais',
      'Desconto de até 40% em procedimentos odontológicos (Centro de Saúde Estelita — Grupo Evolutec)',
      'Cursos Evolutec gratuitos com certificação internacional (Faculdade Evolutec)',
      'Plano de carreira: Vendedor → Supervisor de Vendas → Gerente Comercial → Diretor Comercial',
      'Cartão de crédito para compras em supermercados (ajuda de custos alimentícios)',
      'Veículo disponibilizado pela empresa para deslocamentos, com combustível e manutenção pagos (para habilitados)',
    ],
  },
  {
    id: 3,
    cargo: 'Panfleteiro',
    area: 'Marketing',
    cidades: [
      'Castanhal - PA',
      'Marapanim - PA',
      'Curuçá - PA',
      'Maracanã - PA',
      'Irituia - PA',
      'São Domingos do Capim - PA',
      'São Miguel do Guamá - PA',
    ],
    tipo: 'PJ / Temporário',
    destaque: false,
    imagem: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80',
    resumo: 'Distribua materiais de divulgação em pontos estratégicos da cidade.',
    cargaHoraria: 'Flexível',
    descricao: `O Panfleteiro Evolutec é o responsável por levar a mensagem da escola diretamente para as pessoas em locais estratégicos da cidade, contribuindo para o crescimento da nossa base de alunos.`,
    responsabilidades: [
      'Distribuir materiais de divulgação em pontos de alto fluxo',
      'Abordar o público de forma simpática e objetiva',
      'Reportar ao supervisor o número de materiais distribuídos',
      'Zelar pela imagem da empresa durante a atividade',
    ],
    requisitos: [
      'Ensino fundamental completo',
      'Boa comunicação e disposição física',
      'Pontualidade e responsabilidade',
      'Disponibilidade para trabalhar em diferentes pontos da cidade',
    ],
    beneficios: ['Pagamento por produção', 'Vale-transporte', 'Flexibilidade de horários'],
  },
  {
    id: 4,
    cargo: 'Recepcionista',
    area: 'Administrativo',
    cidades: [
      'Castanhal - PA',
      'Marapanim - PA',
      'Curuçá - PA',
      'Maracanã - PA',
      'Irituia - PA',
      'São Domingos do Capim - PA',
      'São Miguel do Guamá - PA',
    ],
    tipo: 'CLT',
    destaque: false,
    imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    resumo: 'Recepcione alunos e visitantes, gerencie agendas e apoie as rotinas administrativas.',
    cargaHoraria: '44 horas semanais',
    descricao: `O Recepcionista da Evolutec é o ponto de contato que cria a primeira impressão para alunos, responsáveis e visitantes. Se você é organizado, cordial e gosta de gente, essa vaga é para você.`,
    responsabilidades: [
      'Recepcionar e orientar alunos, pais e visitantes',
      'Gerenciar agendas, salas de aula e recursos da unidade',
      'Realizar matrículas, rematrículas e controle de frequência',
      'Apoiar nas rotinas administrativas e financeiras da unidade',
      'Manter o ambiente da recepção organizado e acolhedor',
    ],
    requisitos: [
      'Ensino médio completo (superior em andamento é diferencial)',
      'Experiência com atendimento ao público',
      'Conhecimento em pacote Office e sistemas de gestão',
      'Excelente comunicação verbal e escrita',
      'Organização, proatividade e empatia',
    ],
    beneficios: ['Vale-refeição', 'Plano de saúde', 'Plano odontológico', 'Acesso a cursos Evolutec'],
  },
]

const areas = ['Todas', ...Array.from(new Set(vagas.map(v => v.area)))]

function VagaDetalhe({ vaga, onVoltar }) {
  return (
    <div className="vaga-detalhe-page">
      <button className="btn-voltar" onClick={onVoltar}>
        &#8592; Voltar às vagas
      </button>

      <div className="vd-hero">
        <img src={vaga.imagem} alt={vaga.cargo} className="vd-hero-img" />
        <div className="vd-hero-overlay" />
        <div className="vd-hero-content">
          <span className="vd-badge-area">{vaga.area}</span>
          <h1>{vaga.cargo}</h1>
          <div className="vd-meta">
            <span className="vd-meta-item">{vaga.tipo}</span>
            <span className="vd-meta-sep">·</span>
            {vaga.cidades.map((c, i) => (
              <span key={i} className="vd-meta-item">
                {c}{i < vaga.cidades.length - 1 ? ', ' : ''}
              </span>
            ))}
            <span className="vd-meta-sep">·</span>
            <span className="vd-meta-item">{vaga.cargaHoraria}</span>
          </div>
        </div>
      </div>

      <div className="vd-body">
        <div className="vd-col-main">
          <section className="vd-secao">
            <h2>Sobre a vaga</h2>
            <p>{vaga.descricao}</p>
          </section>

          <section className="vd-secao">
            <h2>Responsabilidades</h2>
            <ul className="vd-lista">
              {vaga.responsabilidades.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </section>

          <section className="vd-secao">
            <h2>Requisitos</h2>
            <ul className="vd-lista">
              {vaga.requisitos.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </section>
        </div>

        <aside className="vd-col-aside">
          <div className="vd-aside-card">
            <h3>Informações da Vaga</h3>
            <div className="vd-info-lista">
              <div className="vd-info-row">
                <span className="vd-info-label">Área</span>
                <span className="vd-info-valor">{vaga.area}</span>
              </div>
              <div className="vd-info-row">
                <span className="vd-info-label">Regime</span>
                <span className="vd-info-valor">{vaga.tipo}</span>
              </div>
              <div className="vd-info-row">
                <span className="vd-info-label">Carga horária</span>
                <span className="vd-info-valor">{vaga.cargaHoraria}</span>
              </div>
              <div className="vd-info-row">
                <span className="vd-info-label">Localidades</span>
                <span className="vd-info-valor">{vaga.cidades.join(', ')}</span>
              </div>
            </div>
          </div>

          <div className="vd-aside-card">
            <h3>Benefícios</h3>
            <ul className="vd-beneficios-lista">
              {vaga.beneficios.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="vd-aside-cta">
            <h3>Interessado nesta vaga?</h3>
            <p>Envie seu currículo para nossa equipe de Recursos Humanos.</p>
            <a
              href={`mailto:rh@evolutec.com.br?subject=Candidatura: ${vaga.cargo} - ${vaga.cidades[0]}`}
              className="btn-candidatar"
            >
              Candidatar-me
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}

function VagaCard({ vaga, onClick }) {
  return (
    <article className="vaga-card" onClick={onClick}>
      <div className="vaga-card-img-wrap">
        <img src={vaga.imagem} alt={vaga.cargo} className="vaga-card-img" />
        {vaga.destaque && <span className="vaga-badge-destaque">Destaque</span>}
      </div>
      <div className="vaga-card-body">
        <span className="vaga-card-area">{vaga.area.toUpperCase()}</span>
        <h3 className="vaga-card-titulo">{vaga.cargo}</h3>
        <p className="vaga-card-resumo">{vaga.resumo}</p>
        <div className="vaga-card-footer">
          <span className="vaga-card-carga">{vaga.cargaHoraria}</span>
          <button className="btn-ver-vaga">Ver Vaga</button>
        </div>
      </div>
    </article>
  )
}

function TrabalheConosco() {
  const [filtro, setFiltro] = useState('Todas')
  const [vagaSelecionada, setVagaSelecionada] = useState(null)

  const vagasFiltradas = filtro === 'Todas' ? vagas : vagas.filter(v => v.area === filtro)

  if (vagaSelecionada) {
    return (
      <div className="trabalhe-conosco-page">
        <div className="tc-inner">
          <VagaDetalhe vaga={vagaSelecionada} onVoltar={() => setVagaSelecionada(null)} />
        </div>
      </div>
    )
  }

  return (
    <div className="trabalhe-conosco-page">
      <section className="tc-hero">
        <div className="tc-hero-content">
          <span className="hero-pretitle">Junte-se ao nosso time</span>
          <h1>Trabalhe Conosco</h1>
          <p>Faça parte de uma empresa que transforma vidas através da tecnologia e da educação. Encontre a vaga ideal e construa uma carreira de sucesso com a Evolutec.</p>
          <div className="hero-stats">
            <div className="stat"><strong>{vagas.length}</strong><span>Vagas Abertas</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>4</strong><span>Cidades</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>100%</strong><span>Oportunidades Reais</span></div>
          </div>
        </div>
      </section>

      <section className="tc-section">
        <div className="tc-inner">
          <div className="filtros-area">
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

          <div className="vagas-grid">
            {vagasFiltradas.map(vaga => (
              <VagaCard key={vaga.id} vaga={vaga} onClick={() => setVagaSelecionada(vaga)} />
            ))}
          </div>

          <div className="contato-geral">
            <div>
              <h3>Não encontrou a vaga ideal?</h3>
              <p>Envie seu currículo para o nosso banco de talentos. Quando surgir uma oportunidade alinhada ao seu perfil, entraremos em contato.</p>
            </div>
            <a href="mailto:rh@evolutec.com.br?subject=Currículo Espontâneo" className="btn-curriculo">
              Enviar Currículo Espontâneo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrabalheConosco