// Dados completos dos cursos
export const cursosData = [
  {
    id: 1,
    slug: "tecnologia",
    title: "Tecnologia",
    category: "TECNOLOGIA",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "12 meses",
    hours: "800h",
    tag: "Profissionalizante",
    description: "Aprenda as principais ferramentas e fundamentos de tecnologia para ingressar no mercado digital com segurança.",
    fullDescription: "O curso de Tecnologia da Evolutec oferece uma formação prática e atualizada para quem deseja ingressar no mundo digital. Você aprenderá desde o uso de computadores e internet até noções de programação, redes e segurança da informação, estando preparado para atuar em empresas de todos os segmentos.",
    objectives: [
      "Capacitar no uso de ferramentas digitais do cotidiano empresarial",
      "Introduzir conceitos de redes e infraestrutura de TI",
      "Desenvolver raciocínio lógico e noções de programação",
      "Preparar para o mercado de trabalho na área de tecnologia"
    ],
    curriculum: [
      { module: "Fundamentos de Informática", topics: ["Sistemas Operacionais", "Pacote Office", "Internet e E-mail"] },
      { module: "Redes e Conectividade", topics: ["Fundamentos de Redes", "Wi-Fi e Segurança", "Nuvem e Serviços Online"] },
      { module: "Lógica e Programação", topics: ["Lógica de Programação", "Algoritmos", "Introdução ao Desenvolvimento Web"] },
      { module: "Segurança Digital", topics: ["Proteção de Dados", "Boas Práticas Online", "LGPD"] },
      { module: "Projeto Prático", topics: ["Resolução de Problemas Reais", "Trabalho em Equipe", "Apresentação Final"] }
    ],
    careerOpportunities: [
      "Assistente de TI",
      "Suporte técnico",
      "Auxiliar de informática",
      "Operador de computador",
      "Técnico de suporte",
      "Monitor de laboratório"
    ],
    requirements: "Ensino Fundamental completo",
    certificationType: "Certificado de Conclusão Profissionalizante",
    salary: "R$ 1.800,00",
    marketInfo: "A área de tecnologia está em constante crescimento e oferece oportunidades em empresas de todos os portes, em cidades de qualquer tamanho do Brasil."
  },
  {
    id: 2,
    slug: "atendente-de-farmacia",
    title: "Atendente de Farmácia",
    category: "SAÚDE",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "6 meses",
    hours: "300h",
    tag: "Profissionalizante",
    description: "Capacite-se para atuar em farmácias e drogarias com segurança, ética e conhecimento técnico.",
    fullDescription: "O curso de Atendente de Farmácia prepara profissionais para o atendimento ao público em farmácias e drogarias. Você aprenderá sobre medicamentos, boas práticas de dispensação, legislação sanitária e atendimento humanizado ao cliente, estando apto a trabalhar em redes de farmácias e farmácias independentes.",
    objectives: [
      "Capacitar para atendimento ao cliente em farmácias e drogarias",
      "Desenvolver conhecimentos sobre medicamentos e dispensação",
      "Familiarizar com as normas da ANVISA e legislação sanitária",
      "Formar profissionais com postura ética e humanizada"
    ],
    curriculum: [
      { module: "Fundamentos em Saúde", topics: ["Anatomia Básica", "Primeiros Socorros", "Higiene e Saúde"] },
      { module: "Farmacologia Básica", topics: ["Classes de Medicamentos", "Princípios Ativos", "Interações Medicamentosas"] },
      { module: "Legislação Farmacêutica", topics: ["ANVISA", "Medicamentos Controlados", "Boas Práticas"] },
      { module: "Atendimento ao Cliente", topics: ["Técnicas de Vendas", "Comunicação", "Ética Profissional"] },
      { module: "Rotinas de Farmácia", topics: ["Estoque e Validade", "Dispensação", "Caixa e Pagamentos"] }
    ],
    careerOpportunities: [
      "Atendente de farmácia",
      "Auxiliar de farmácia",
      "Balconista de drogaria",
      "Operador de caixa em farmácia",
      "Assistente de estoque farmacêutico"
    ],
    requirements: "Ensino Fundamental completo",
    certificationType: "Certificado de Conclusão Profissionalizante",
    salary: "R$ 1.500,00",
    marketInfo: "O setor farmacêutico é um dos que mais empregam no Brasil, com farmácias e drogarias em todo o país demandando profissionais capacitados para atendimento ao público."
  },
  {
    id: 3,
    slug: "operador-de-caixa",
    title: "Operador de Caixa",
    category: "COMÉRCIO",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "3 meses",
    hours: "160h",
    tag: "Profissionalizante",
    description: "Prepare-se para atuar no comércio varejista operando sistemas de caixa com agilidade, precisão e excelência no atendimento.",
    fullDescription: "O curso de Operador de Caixa da Evolutec capacita profissionais para o mercado varejista, desenvolvendo habilidades práticas em operação de sistemas de ponto de venda (PDV), atendimento ao cliente, controle de numerário e técnicas de vendas. Uma formação rápida e com alta empregabilidade.",
    objectives: [
      "Capacitar para operação de caixas registradoras e sistemas PDV",
      "Desenvolver habilidades de atendimento ao cliente",
      "Familiarizar com técnicas de controle de numerário",
      "Preparar para o mercado varejista e de serviços"
    ],
    curriculum: [
      { module: "Atendimento ao Cliente", topics: ["Comunicação Eficaz", "Postura Profissional", "Resolução de Conflitos"] },
      { module: "Operação de Caixa", topics: ["Sistemas PDV", "Caixa Registradora", "Meios de Pagamento"] },
      { module: "Controle Financeiro", topics: ["Abertura e Fechamento de Caixa", "Conferência de Numerário", "Relatórios"] },
      { module: "Técnicas de Vendas", topics: ["Abordagem", "Argumentação", "Fidelização"] },
      { module: "Legislação do Consumidor", topics: ["Código do Consumidor", "Trocas e Devoluções", "Nota Fiscal"] }
    ],
    careerOpportunities: [
      "Operador de caixa",
      "Auxiliar de vendas",
      "Atendente de loja",
      "Assistente comercial",
      "Recepcionista"
    ],
    requirements: "Ensino Fundamental completo",
    certificationType: "Certificado de Conclusão Profissionalizante",
    salary: "R$ 1.400,00",
    marketInfo: "O setor varejista é um dos maiores empregadores do Brasil, com vagas em supermercados, lojas de departamentos, farmácias, postos de gasolina e inúmeros outros estabelecimentos comerciais."
  },
  {
    id: 4,
    slug: "hotelaria",
    title: "Hotelaria e Turismo",
    category: "TURISMO",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "12 meses",
    hours: "600h",
    tag: "Profissionalizante",
    description: "Qualifique-se para trabalhar em hotéis, pousadas e no setor turístico com excelência no atendimento e hospitalidade.",
    fullDescription: "O curso de Hotelaria e Turismo da Evolutec prepara profissionais para atuar com hospitalidade e qualidade no setor turístico. Você aprenderá sobre recepção, governança, alimentos e bebidas, reservas e gestão hoteleira, desenvolvendo as competências necessárias para oferecer experiências memoráveis aos hóspedes.",
    objectives: [
      "Capacitar para atendimento e recepção em meios de hospedagem",
      "Desenvolver competências em serviços de alimentos e bebidas",
      "Familiarizar com sistemas de gestão hoteleira",
      "Formar profissionais de hospitalidade com postura diferenciada"
    ],
    curriculum: [
      { module: "Fundamentos de Hotelaria", topics: ["História da Hotelaria", "Tipos de Meios de Hospedagem", "Organograma Hoteleiro"] },
      { module: "Recepção e Reservas", topics: ["Check-in e Check-out", "Sistemas de Reservas", "Atendimento ao Hóspede"] },
      { module: "Governança", topics: ["Arrumação de Apartamentos", "Rouparia", "Higiene e Limpeza"] },
      { module: "Alimentos e Bebidas", topics: ["Mise en Place", "Serviço de Mesa", "Café da Manhã"] },
      { module: "Turismo e Eventos", topics: ["Agências de Viagem", "Organização de Eventos", "Roteiros Turísticos"] }
    ],
    careerOpportunities: [
      "Recepcionista de hotel",
      "Camareira",
      "Auxiliar de eventos",
      "Atendente de pousada",
      "Assistente de agência de viagens",
      "Auxiliar de alimentos e bebidas"
    ],
    requirements: "Ensino Fundamental completo",
    certificationType: "Certificado de Conclusão Profissionalizante",
    salary: "R$ 1.600,00",
    marketInfo: "O turismo é um dos setores que mais cresce no Brasil e no mundo. Com o aumento do turismo regional e nacional, a demanda por profissionais de hotelaria qualificados só tende a crescer."
  },
  {
    id: 5,
    slug: "rotinas-administrativas",
    title: "Rotinas Administrativas",
    category: "GESTÃO",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "6 meses",
    hours: "360h",
    tag: "Profissionalizante",
    description: "Domine as principais atividades do setor administrativo e esteja pronto para atuar em escritórios e empresas de qualquer segmento.",
    fullDescription: "O curso de Rotinas Administrativas da Evolutec prepara profissionais para executar as atividades do dia a dia de um escritório com eficiência. Você aprenderá sobre gestão de documentos, controle financeiro básico, comunicação empresarial, informática aplicada ao trabalho e técnicas de organização.",
    objectives: [
      "Capacitar para execução das principais rotinas administrativas de um escritório",
      "Desenvolver habilidades em comunicação empresarial oral e escrita",
      "Familiarizar com ferramentas de informática para o ambiente de trabalho",
      "Preparar para atuar no setor administrativo de empresas públicas e privadas"
    ],
    curriculum: [
      { module: "Fundamentos Administrativos", topics: ["Organização Empresarial", "Departamentos", "Funções Administrativas"] },
      { module: "Comunicação Empresarial", topics: ["Redação Oficial", "E-mail Profissional", "Atendimento Telefônico"] },
      { module: "Informática Aplicada", topics: ["Word", "Excel", "Sistemas de Gestão (ERP)"] },
      { module: "Controle Financeiro", topics: ["Contas a Pagar e Receber", "Fluxo de Caixa", "Conciliação"] },
      { module: "Gestão de Documentos", topics: ["Arquivo e Protocolo", "Contratos", "Nota Fiscal e Tributação Básica"] }
    ],
    careerOpportunities: [
      "Assistente administrativo",
      "Auxiliar de escritório",
      "Recepcionista",
      "Auxiliar financeiro",
      "Assistente de recursos humanos",
      "Secretário(a)"
    ],
    requirements: "Ensino Fundamental completo",
    certificationType: "Certificado de Conclusão Profissionalizante",
    salary: "R$ 1.600,00",
    marketInfo: "A área administrativa é presente em empresas de todos os portes e segmentos. É uma das áreas com maior volume de vagas no mercado de trabalho brasileiro."
  },
  {
    id: 6,
    slug: "informatica-completo",
    title: "Informática Completo",
    category: "TECNOLOGIA",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "12 meses",
    hours: "120h",
    tag: "Profissionalizante",
    description: "Domine o computador do zero ao avançado: Windows, Office, Internet e muito mais.",
    fullDescription: "O curso de Informática Completo aborda desde os conceitos básicos de computação até ferramentas avançadas de produtividade. Ideal para quem busca qualificação rápida e essencial para qualquer área de atuação.",
    objectives: [
      "Dominar o Sistema Operacional",
      "Utilizar editores de texto e planilhas",
      "Navegar com segurança na internet"
    ],
    curriculum: [
      { module: "Introdução", topics: ["Hardware e Software", "Windows"] },
      { module: "Office", topics: ["Word", "Excel", "PowerPoint"] }
    ],
    careerOpportunities: [
      "Auxiliar Administrativo",
      "Recepcionista",
      "Atendente"
    ],
    requirements: "Nenhum",
    certificationType: "Certificado de Conclusão",
    salary: "R$ 1.500,00",
    marketInfo: "Essencial para qualquer currículo."
  },
  {
    id: 7,
    slug: "power-bi",
    title: "Power BI",
    category: "DADOS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "3 meses",
    hours: "60h",
    tag: "Especialização",
    description: "Transforme dados em insights visuais poderosos para tomada de decisão.",
    fullDescription: "Aprenda a analisar dados de negócios e criar dashboards interativos com o Microsoft Power BI. Ferramenta essencial para analistas e gestores.",
    objectives: [
      "Conectar fontes de dados",
      "Modelar dados",
      "Criar visualizações interativas"
    ],
    curriculum: [
      { module: "Introdução ao Power BI", topics: ["Interface", "Conexão de Dados"] },
      { module: "DAX e Visualização", topics: ["Funções DAX", "Gráficos e Mapas"] }
    ],
    careerOpportunities: [
      "Analista de Dados",
      "Analista de BI",
      "Consultor"
    ],
    requirements: "Conhecimento básico de Excel",
    certificationType: "Certificado de Especialização",
    salary: "R$ 3.500,00",
    marketInfo: "Alta demanda por profissionais que sabem analisar dados."
  },
  {
    id: 8,
    slug: "design-web",
    title: "Profissional Design Web",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "8 meses",
    hours: "160h",
    tag: "Profissionalizante",
    description: "Crie sites modernos e interfaces atraentes para a web.",
    fullDescription: "Desenvolva habilidades em design de interfaces (UI) e experiência do usuário (UX), além de criar layouts para sites e aplicações web.",
    objectives: [
      "Criar layouts responsivos",
      "Entender princípios de UI/UX",
      "Utilizar ferramentas de design"
    ],
    curriculum: [
      { module: "Fundamentos de Design", topics: ["Cor", "Tipografia", "Layout"] },
      { module: "Ferramentas", topics: ["Figma", "Adobe XD", "Photoshop para Web"] }
    ],
    careerOpportunities: [
      "Web Designer",
      "Designer UI/UX",
      "Front-end Developer"
    ],
    requirements: "Informática básica",
    certificationType: "Certificado Profissional",
    salary: "R$ 2.800,00",
    marketInfo: "O mercado digital precisa constantemente de bons designers."
  },
  {
    id: 9,
    slug: "informatica-operador-caixa",
    title: "Profissional em Informática e Operador de Caixa",
    category: "COMÉRCIO",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "5 meses",
    hours: "100h",
    tag: "Profissionalizante",
    description: "Combine habilidades de informática com técnicas de operação de caixa.",
    fullDescription: "Prepare-se para atuar no comércio com domínio de computadores e sistemas de caixa, além de técnicas de atendimento e vendas.",
    objectives: [
      "Operar sistemas comerciais",
      "Atender clientes com excelência",
      "Utilizar o computador no dia a dia"
    ],
    curriculum: [
      { module: "Informática Básica", topics: ["Windows", "Internet"] },
      { module: "Operação de Caixa", topics: ["Abertura/Fechamento", "Pagamentos", "Atendimento"] }
    ],
    careerOpportunities: [
      "Operador de Caixa",
      "Atendente de Loja",
      "Auxiliar Administrativo"
    ],
    requirements: "Ensino Fundamental",
    certificationType: "Certificado Profissional",
    salary: "R$ 1.600,00",
    marketInfo: "Vagas abundantes no comércio varejista."
  },
  {
    id: 10,
    slug: "desenvolvedor-games-apps",
    title: "Desenvolvedor Games e Apps",
    category: "PROGRAMAÇÃO",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "18 meses",
    hours: "300h",
    tag: "Tecnológico",
    description: "Aprenda a criar seus próprios jogos e aplicativos para celular.",
    fullDescription: "Entre no mundo da programação criando jogos 2D/3D e aplicativos móveis. Aprenda lógica de programação e as principais engines do mercado.",
    objectives: [
      "Desenvolver lógica de programação",
      "Criar jogos completos",
      "Publicar aplicativos"
    ],
    curriculum: [
      { module: "Lógica de Programação", topics: ["Algoritmos", "Estruturas de Dados"] },
      { module: "Desenvolvimento de Jogos", topics: ["Unity/Godot", "Física de Jogos", "Design de Níveis"] }
    ],
    careerOpportunities: [
      "Desenvolvedor de Jogos",
      "Programador Mobile",
      "Indie Developer"
    ],
    requirements: "Informática intermediária",
    certificationType: "Certificado Técnico",
    salary: "R$ 3.000,00+",
    marketInfo: "Indústria de games supera a do cinema em faturamento."
  },
  {
    id: 11,
    slug: "profissional-planilhas",
    title: "Profissional em Planilhas",
    category: "ADMINISTRAÇÃO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "2 meses",
    hours: "40h",
    tag: "Especialização",
    description: "Seja um expert em Excel e Google Sheets.",
    fullDescription: "Domine as planilhas eletrônicas, desde fórmulas básicas até tabelas dinâmicas e macros, otimizando seu trabalho administrativo.",
    objectives: [
      "Criar planilhas complexas",
      "Automatizar tarefas",
      "Analisar dados"
    ],
    curriculum: [
      { module: "Excel Básico", topics: ["Fórmulas", "Formatação"] },
      { module: "Excel Avançado", topics: ["Tabelas Dinâmicas", "VLOOKUP/PROCV", "Gráficos"] }
    ],
    careerOpportunities: [
      "Assistente Administrativo",
      "Analista Financeiro",
      "Auxiliar de Escritório"
    ],
    requirements: "Informática básica",
    certificationType: "Certificado de Especialização",
    salary: "R$ 2.000,00",
    marketInfo: "Excel é requisito para quase todas as vagas administrativas."
  },
  {
    id: 12,
    slug: "gerenciamento-pessoas",
    title: "Gerenciamento De Pessoas",
    category: "RH",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "6 meses",
    hours: "120h",
    tag: "Profissionalizante",
    description: "Desenvolva liderança e técnicas de gestão de equipes.",
    fullDescription: "Aprenda a liderar equipes, mediar conflitos, realizar processos de seleção e promover o desenvolvimento humano nas organizações.",
    objectives: [
      "Liderar equipes",
      "Gerir conflitos",
      "Realizar recrutamento e seleção"
    ],
    curriculum: [
      { module: "Liderança", topics: ["Estilos de Liderança", "Motivação"] },
      { module: "Rotinas de RH", topics: ["Recrutamento", "Treinamento", "Avaliação de Desempenho"] }
    ],
    careerOpportunities: [
      "Assistente de RH",
      "Supervisor de Equipe",
      "Analista de RH"
    ],
    requirements: "Ensino Médio completo",
    certificationType: "Certificado Profissional",
    salary: "R$ 2.500,00",
    marketInfo: "Empresas buscam líderes capacitados para gerir talentos."
  },
  {
    id: 13,
    slug: "redes-infraestrutura",
    title: "REDES & Infraestrutura",
    category: "TECNOLOGIA",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "10 meses",
    hours: "200h",
    tag: "Técnico",
    description: "Configure e mantenha redes de computadores e servidores.",
    fullDescription: "Formação técnica para instalação, configuração e manutenção de redes de computadores, servidores e infraestrutura de TI.",
    objectives: [
      "Configurar roteadores e switches",
      "Gerenciar redes locais",
      "Implementar segurança de rede"
    ],
    curriculum: [
      { module: "Fundamentos de Redes", topics: ["TCP/IP", "Cabeamento"] },
      { module: "Servidores", topics: ["Windows Server", "Linux", "Virtualização"] }
    ],
    careerOpportunities: [
      "Técnico de Redes",
      "Analista de Suporte",
      "Administrador de Redes"
    ],
    requirements: "Informática avançada",
    certificationType: "Certificado Técnico",
    salary: "R$ 3.000,00",
    marketInfo: "Infraestrutura é a base da TI em qualquer empresa."
  },
  {
    id: 14,
    slug: "animacao-3d",
    title: "Profissional em Animação 3D",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "12 meses",
    hours: "240h",
    tag: "Especialização",
    description: "Dê vida a personagens e cenários tridimensionais.",
    fullDescription: "Domine as técnicas de modelagem, texturização, iluminação e animação 3D para filmes, jogos e publicidade.",
    objectives: [
      "Modelar objetos e personagens 3D",
      "Criar animações fluidas",
      "Renderizar cenas realistas"
    ],
    curriculum: [
      { module: "Modelagem 3D", topics: ["Blender/Maya", "Escultura Digital"] },
      { module: "Animação", topics: ["Rigging", "Keyframes", "Curvas de Animação"] }
    ],
    careerOpportunities: [
      "Animador 3D",
      "Modelador 3D",
      "Artista de VFX"
    ],
    requirements: "Conhecimentos de design",
    certificationType: "Certificado Profissional",
    salary: "R$ 3.500,00+",
    marketInfo: "Mercado em expansão com streaming e jogos."
  },
  {
    id: 15,
    slug: "auxiliar-administrativo",
    title: "Auxiliar Administrativo",
    category: "ADMINISTRAÇÃO",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "6 meses",
    hours: "180h",
    tag: "Profissionalizante",
    description: "Aprenda a organizar e administrar rotinas de escritório.",
    fullDescription: "Curso completo para quem deseja atuar na área administrativa, com foco em organização, documentação, atendimento e rotinas financeiras.",
    objectives: [
      "Organizar arquivos e documentos",
      "Auxiliar em rotinas financeiras",
      "Atender clientes e fornecedores"
    ],
    curriculum: [
      { module: "Rotinas Administrativas", topics: ["Arquivo", "Protocolo", "Correspondência"] },
      { module: "Financeiro Básico", topics: ["Contas a Pagar/Receber", "Nota Fiscal"] }
    ],
    careerOpportunities: [
      "Auxiliar Administrativo",
      "Recepcionista",
      "Secretário(a)"
    ],
    requirements: "Ensino Fundamental",
    certificationType: "Certificado Profissional",
    salary: "R$ 1.600,00",
    marketInfo: "Vagas em todos os setores da economia."
  },
  {
    id: 16,
    slug: "marketing-digital",
    title: "Marketing Digital",
    category: "MARKETING",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "6 meses",
    hours: "140h",
    tag: "Profissionalizante",
    description: "Domine as estratégias para vender e promover marcas na internet.",
    fullDescription: "Aprenda a criar campanhas, gerenciar redes sociais, produzir conteúdo e analisar métricas para alavancar negócios no ambiente digital.",
    objectives: [
      "Gerenciar redes sociais",
      "Criar campanhas de anúncios",
      "Produzir conteúdo relevante"
    ],
    curriculum: [
      { module: "Redes Sociais", topics: ["Instagram", "Facebook", "TikTok"] },
      { module: "Tráfego Pago", topics: ["Google Ads", "Meta Ads"] }
    ],
    careerOpportunities: [
      "Social Media",
      "Analista de Marketing",
      "Gestor de Tráfego"
    ],
    requirements: "Informática básica",
    certificationType: "Certificado Profissional",
    salary: "R$ 2.200,00",
    marketInfo: "Qualquer empresa hoje precisa de presença digital."
  },
  {
    id: 17,
    slug: "manutencao-celulares",
    title: "Manutenção de Celulares",
    category: "TÉCNICO",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "4 meses",
    hours: "80h",
    tag: "Técnico",
    description: "Aprenda a consertar smartphones e tablets de diversas marcas.",
    fullDescription: "Curso prático voltado para o diagnóstico e reparo de dispositivos móveis. Aprenda a trocar telas, baterias, conectores e resolver problemas de software.",
    objectives: [
      "Diagnosticar defeitos",
      "Trocar componentes",
      "Realizar reparos em placas"
    ],
    curriculum: [
      { module: "Hardware Mobile", topics: ["Desmontagem", "Troca de Telas", "Solda"] },
      { module: "Software", topics: ["Android", "iOS", "Reset e Backup"] }
    ],
    careerOpportunities: [
      "Técnico de Celular",
      "Empreendedor (Loja Própria)",
      "Assistência Técnica"
    ],
    requirements: "Nenhum",
    certificationType: "Certificado Técnico",
    salary: "R$ 2.500,00 (Variável)",
    marketInfo: "Alta demanda por reparos rápidos e acessíveis."
  },
  {
    id: 18,
    slug: "google-workspace",
    title: "Google WorkSpace",
    category: "PRODUTIVIDADE",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "1 mês",
    hours: "20h",
    tag: "Especialização",
    description: "Produtividade máxima com as ferramentas do Google.",
    fullDescription: "Domine o Gmail, Google Drive, Agenda, Docs, Sheets e Meet para trabalhar de forma colaborativa e eficiente na nuvem.",
    objectives: [
      "Gerenciar e-mails e agenda",
      "Trabalhar com arquivos na nuvem",
      "Colaborar em tempo real"
    ],
    curriculum: [
      { module: "Comunicação", topics: ["Gmail", "Google Meet", "Chat"] },
      { module: "Colaboração", topics: ["Drive", "Docs", "Sheets", "Slides"] }
    ],
    careerOpportunities: [
      "Qualquer função administrativa",
      "Trabalho Remoto"
    ],
    requirements: "Informática básica",
    certificationType: "Certificado de Conclusão",
    salary: "N/A (Habilidade complementar)",
    marketInfo: "Ferramentas padrão em muitas startups e empresas modernas."
  },
  {
    id: 19,
    slug: "gestao-empresarial",
    title: "Gestão Empresarial",
    category: "GESTÃO",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
    mode: "Presencial",
    duration: "12 meses",
    hours: "300h",
    tag: "Profissionalizante",
    description: "Visão estratégica e prática para gerenciar negócios.",
    fullDescription: "Curso abrangente sobre gestão de empresas, envolvendo finanças, marketing, recursos humanos, logística e planejamento estratégico.",
    objectives: [
      "Entender o funcionamento de uma empresa",
      "Planejar estratégias de crescimento",
      "Gerenciar recursos"
    ],
    curriculum: [
      { module: "Administração Geral", topics: ["Teorias da Administração", "Organização"] },
      { module: "Gestão Estratégica", topics: ["Planejamento", "Marketing", "Finanças Corporativas"] }
    ],
    careerOpportunities: [
      "Gerente",
      "Supervisor",
      "Empreendedor"
    ],
    requirements: "Ensino Médio completo",
    certificationType: "Certificado Profissional",
    salary: "R$ 4.000,00+",
    marketInfo: "Profissionais com visão global do negócio são valorizados."
  }
];

// Função auxiliar para buscar curso por slug
export const getCourseBySlug = (slug) => {
  return cursosData.find(curso => curso.slug === slug);
};

// Função auxiliar para buscar curso por ID
export const getCourseById = (id) => {
  return cursosData.find(curso => curso.id === parseInt(id));
};
