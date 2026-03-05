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
