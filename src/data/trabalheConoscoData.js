const CIDADES_POLOS = [
  'Castanhal - PA',
  'Marapanim - PA',
  'Curuçá - PA',
  'Maracanã - PA',
  'Irituia - PA',
  'São Domingos do Capim - PA',
  'São Miguel do Guamá - PA',
]

const BENEFICIOS_PROCESSO_SELETIVO = ['Os benefícios serão destacados durante o processo seletivo.']

export const vagas = [
  {
    id: 1,
    cargo: 'Instrutor',
    area: 'Educação',
    cidades: CIDADES_POLOS,
    tipo: 'CLT',
    nivel: 'Pleno',
    salario: 'A combinar',
    modalidade: 'Presencial',
    escolaridadeMinima: 'Ensino superior (completo ou em andamento)',
    encerramentoEm: null,
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
    beneficios: BENEFICIOS_PROCESSO_SELETIVO,
  },
  {
    id: 2,
    cargo: 'Vendedor Externo',
    area: 'Comercial',
    cidades: [...CIDADES_POLOS, 'Igarapé-Açú - PA'],
    tipo: 'CLT + Comissão',
    remuneracao: 'Salário base + comissões (vendedores chegam a R$ 3.500–R$ 4.000/mês)',
    nivel: 'Júnior',
    salario: 'A combinar',
    modalidade: 'Presencial',
    escolaridadeMinima: 'Ensino médio completo',
    encerramentoEm: null,
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
    beneficios: BENEFICIOS_PROCESSO_SELETIVO,
  },
  {
    id: 3,
    cargo: 'Panfleteiro',
    area: 'Marketing',
    cidades: CIDADES_POLOS,
    tipo: 'PJ / Temporário',
    nivel: 'Júnior',
    salario: 'A combinar',
    modalidade: 'Presencial',
    escolaridadeMinima: 'Ensino fundamental completo',
    encerramentoEm: null,
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
    beneficios: BENEFICIOS_PROCESSO_SELETIVO,
  },
  {
    id: 4,
    cargo: 'Recepcionista',
    area: 'Administrativo',
    cidades: CIDADES_POLOS,
    tipo: 'CLT',
    nivel: 'Júnior',
    salario: 'A combinar',
    modalidade: 'Presencial',
    escolaridadeMinima: 'Ensino médio completo',
    encerramentoEm: null,
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
    beneficios: BENEFICIOS_PROCESSO_SELETIVO,
  },
  {
    id: 5,
    cargo: 'Auxiliar de Marketing',
    area: 'Marketing',
    cidades: ['Castanhal - PA'],
    tipo: 'CLT',
    nivel: 'Júnior',
    salario: 'A combinar',
    modalidade: 'Presencial',
    escolaridadeMinima: 'Ensino médio completo',
    encerramentoEm: null,
    destaque: false,
    imagem: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80',
    resumo: 'Apoiar criação de conteúdos e operações de social media da unidade Evolutec em Castanhal.',
    cargaHoraria: 'A combinar',
    descricao: `Buscamos uma pessoa criativa, comunicativa e proativa para atuar como Auxiliar de Marketing, com foco em Social Media. O profissional será responsável por apoiar a criação de conteúdos para as redes sociais da Evolutec, contribuindo com ideias, gravação de vídeos, edição de materiais e ações de divulgação da unidade.`,
    responsabilidades: [
      'Gravar vídeos e criar conteúdos para redes sociais',
      'Apoiar na produção de posts, stories, reels e materiais digitais',
      'Auxiliar na comunicação da Evolutec nos canais digitais',
      'Contribuir com ideias criativas para campanhas e divulgações',
      'Apoiar na edição de imagens e vídeos',
      'Acompanhar interações e demandas nos canais como Instagram, Facebook e WhatsApp',
      'Colaborar com a equipe em ações de marketing e divulgação da unidade',
    ],
    requisitos: [
      'Conhecimento em Instagram, Facebook e WhatsApp',
      'Noções de edição de imagem e vídeo',
      'Criatividade para criação de conteúdos digitais',
      'Boa comunicação',
      'Proatividade e vontade de aprender',
      'Facilidade para gravar vídeos e produzir conteúdos para redes sociais',
    ],
    beneficios: BENEFICIOS_PROCESSO_SELETIVO,
  },
  {
    id: 6,
    cargo: 'Vendas e Atendimento Interno',
    area: 'Comercial',
    cidades: ['Castanhal - PA'],
    tipo: 'A combinar',
    nivel: 'Júnior',
    salario: 'A combinar',
    modalidade: 'Presencial',
    escolaridadeMinima: 'Ensino médio completo',
    encerramentoEm: null,
    destaque: false,
    imagem: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    resumo: 'Atue no atendimento de leads, follow-up, negociação de matrículas e relacionamento com alunos e responsáveis.',
    cargaHoraria: 'A combinar',
    descricao: `Buscamos uma pessoa comunicativa, proativa e com perfil comercial para atuar com Vendas e Atendimento Interno na Evolutec. O profissional será responsável por atender leads gerados pelas campanhas, realizar contatos com interessados, fazer follow-up, negociar matrículas e apoiar no relacionamento com alunos e responsáveis.`,
    responsabilidades: [
      'Atender leads que chegam pelas campanhas',
      'Realizar ligações para interessados, alunos e responsáveis',
      'Fazer follow-up de contatos e oportunidades de venda',
      'Apresentar os cursos e serviços da Evolutec de forma clara e objetiva',
      'Utilizar WhatsApp, computador e canais digitais para atendimento',
      'Apoiar no processo de vendas e fechamento de matrículas',
      'Realizar cobranças e negociação de inadimplência',
      'Registrar e acompanhar os atendimentos realizados',
      'Contribuir para o alcance das metas da unidade',
    ],
    requisitos: [
      'Boa comunicação',
      'Poder de negociação',
      'Facilidade com WhatsApp, computador e atendimento digital',
      'Habilidade para realizar ligações e follow-up',
      'Organização no acompanhamento de contatos e atendimentos',
      'Proatividade e foco em resultados',
      'Facilidade para lidar com atendimento ao público',
      'Comprometimento com metas e qualidade no atendimento',
    ],
    beneficios: ['Informações sobre benefícios serão repassadas durante o processo seletivo.'],
  },
  {
id: 7,

cargo: 'Analista de T.I. e Operações',

area: 'Administrativo',

cidades: CIDADES_POLOS,

tipo: 'CLT',

nivel: 'Pleno',

salario: 'A combinar',

modalidade: 'Presencial',

escolaridadeMinima: 'Ensino técnico ou superior em andamento/completo na área de Tecnologia',

encerramentoEm: null,

destaque: true,

imagem: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',

resumo: 'Responsável pelo suporte técnico dos polos, infraestrutura, sistemas, estoque, certificados e apoio operacional da empresa.',

cargaHoraria: 'a combinar',

descricao: 'Buscamos um profissional organizado, proativo e resolutivo para atuar como referência em tecnologia e apoio operacional da Evolutec. Será responsável pelo suporte técnico dos polos, manutenção de equipamentos, infraestrutura de rede, sistemas internos, controle de estoque, emissão de certificados, apoio em eventos e implementação de melhorias operacionais.',

responsabilidades: [

'Prestar suporte técnico remoto e presencial para todos os polos',

'Resolver problemas relacionados a internet, computadores, impressoras, celulares e rede',

'Configurar sistemas, acessos, chips, telefonia VOIP e ferramentas da empresa',

'Apoiar colaboradores na utilização dos sistemas internos',

'Controlar entrada e saída de equipamentos e materiais em estoque',

'Emitir certificados quando necessário',

'Auxiliar na organização de formaturas, eventos e treinamentos',

'Realizar visitas técnicas aos polos quando necessário',

'Pesquisar e implementar soluções para melhoria de processos e redução de custos',

'Acompanhar indicadores e demandas operacionais relacionadas à tecnologia'

],

requisitos: [

'Conhecimento em manutenção e configuração de computadores e programação essencial',

'Conhecimento em redes, internet, roteadores e impressoras',

'Facilidade com sistemas e ferramentas digitais',

'Organização e controle de informações',

'Boa comunicação e atendimento ao usuário',

'Disponibilidade para viagens',

'Capacidade de resolver problemas com autonomia',

'Perfil proativo e responsável',

'Facilidade para aprender novas tecnologias',

'CNH será considerada diferencial'

],

beneficios: [

'Salário compatível com a função',

'Possibilidade de crescimento profissional',

'Treinamentos e capacitações',

'Participação em projetos de expansão da empresa',

'Atuação estratégica junto à diretoria'

]

},
];

export const areas = [
  'Todas',
  ...Array.from(new Set(vagas.map((v) => v.area))).sort((a, b) => a.localeCompare(b, 'pt-BR')),
]
