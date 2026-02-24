// Dados completos dos cursos
export const cursosData = [
  {
    id: 1,
    slug: "administracao",
    title: "Administração",
    category: "GESTÃO",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "2 anos",
    hours: "1600h",
    tag: "Graduação",
    description: "Forme-se como um profissional completo em Administração, preparado para gerir empresas e liderar equipes com excelência.",
    fullDescription: "O curso de Administração da Evolutec forma profissionais capacitados para atuar em diversos setores da economia, desenvolvendo competências essenciais para gestão de negócios, liderança de equipes e tomada de decisões estratégicas. Com uma metodologia moderna e corpo docente qualificado, você estará preparado para os desafios do mercado.",
    objectives: [
      "Desenvolver visão estratégica e habilidades de liderança",
      "Capacitar para gestão de recursos humanos e financeiros",
      "Formar empreendedores e gestores inovadores",
      "Preparar para atuar em organizações públicas e privadas"
    ],
    curriculum: [
      { module: "Fundamentos da Administração", topics: ["Introdução à Administração", "Teoria das Organizações", "Ambiente Empresarial"] },
      { module: "Gestão de Pessoas", topics: ["Recursos Humanos", "Liderança", "Comportamento Organizacional"] },
      { module: "Finanças", topics: ["Contabilidade Gerencial", "Gestão Financeira", "Análise de Investimentos"] },
      { module: "Marketing e Vendas", topics: ["Marketing Estratégico", "Gestão de Vendas", "Marketing Digital"] },
      { module: "Operações e Logística", topics: ["Gestão de Operações", "Logística Empresarial", "Cadeia de Suprimentos"] }
    ],
    careerOpportunities: [
      "Gestor de empresas",
      "Consultor empresarial",
      "Analista administrativo",
      "Empreendedor",
      "Gerente de projetos",
      "Coordenador de equipes"
    ],
    requirements: "Ensino Médio completo",
    certificationType: "Diploma de Graduação reconhecido pelo MEC",
    salary: "R$ 3.500,00",
    marketInfo: "O mercado de trabalho para administradores é amplo e diversificado, com oportunidades em empresas de todos os portes e segmentos, desde startups até grandes corporações, atuar em consultorias empresariais e empreender seu próprio negócio."
  },
  {
    id: 2,
    slug: "enfermagem",
    title: "Enfermagem",
    category: "SAÚDE",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    mode: "Presencial",
    duration: "4 anos",
    hours: "4000h",
    tag: "Graduação",
    description: "Torne-se um profissional de enfermagem qualificado para cuidar da saúde e bem-estar das pessoas com humanização e técnica.",
    fullDescription: "O curso de Enfermagem da Evolutec forma profissionais comprometidos com o cuidado humanizado e técnico de pacientes. Com laboratórios equipados e aulas práticas em instituições de saúde parceiras, você terá uma formação completa e estará pronto para atuar em hospitais, clínicas, unidades de saúde e diversos outros ambientes.",
    objectives: [
      "Capacitar para assistência integral à saúde",
      "Desenvolver competências em procedimentos técnicos de enfermagem",
      "Formar profissionais humanizados e éticos",
      "Preparar para gestão em serviços de saúde"
    ],
    curriculum: [
      { module: "Fundamentos de Enfermagem", topics: ["Anatomia e Fisiologia", "Semiologia", "Técnicas Básicas"] },
      { module: "Enfermagem Clínica", topics: ["Enfermagem Médica", "Enfermagem Cirúrgica", "UTI"] },
      { module: "Saúde da Mulher e da Criança", topics: ["Obstetrícia", "Neonatologia", "Pediatria"] },
      { module: "Saúde Pública", topics: ["Epidemiologia", "Saúde Coletiva", "Vigilância Sanitária"] },
      { module: "Gestão em Enfermagem", topics: ["Administração em Enfermagem", "Auditoria", "Ética Profissional"] }
    ],
    careerOpportunities: [
      "Enfermeiro(a) hospitalar",
      "Enfermeiro(a) de UTI",
      "Enfermeiro(a) da família",
      "Enfermeiro(a) do trabalho",
      "Gestor de serviços de saúde",
      "Enfermeiro(a) docente"
    ],
    requirements: "Ensino Médio completo",
    certificationType: "Diploma de Graduação reconhecido pelo MEC + Registro no COREN",
    salary: "R$ 4.200,00",
    marketInfo: "A área de enfermagem possui alta demanda em todo o país, com oportunidades em hospitais públicos e privados, clínicas especializadas, unidades de saúde da família, home care, empresas na área de saúde ocupacional e instituições de ensino."
  },
  {
    id: 3,
    slug: "tecnico-informatica",
    title: "Técnico em Informática",
    category: "TECNOLOGIA",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "18 meses",
    hours: "1200h",
    tag: "Técnico",
    description: "Domine as tecnologias essenciais para atuar com suporte técnico, redes, programação e soluções de TI.",
    fullDescription: "O curso Técnico em Informática prepara profissionais para atuar em um dos setores que mais cresce no mercado. Você aprenderá desde manutenção de computadores até desenvolvimento de software, redes e segurança da informação, estando apto para trabalhar em empresas de diversos segmentos.",
    objectives: [
      "Formar técnicos em suporte e manutenção de computadores",
      "Capacitar em redes e infraestrutura de TI",
      "Desenvolver habilidades em programação e desenvolvimento web",
      "Preparar para atuar com segurança da informação"
    ],
    curriculum: [
      { module: "Hardware e Manutenção", topics: ["Arquitetura de Computadores", "Montagem e Manutenção", "Troubleshooting"] },
      { module: "Sistemas Operacionais", topics: ["Windows", "Linux", "Virtualização"] },
      { module: "Redes de Computadores", topics: ["Fundamentos de Redes", "Cabeamento", "Protocolos TCP/IP"] },
      { module: "Programação", topics: ["Lógica de Programação", "Python", "JavaScript", "Desenvolvimento Web"] },
      { module: "Segurança da Informação", topics: ["Conceitos de Segurança", "Backup", "Antivírus"] }
    ],
    careerOpportunities: [
      "Técnico de suporte",
      "Técnico em redes",
      "Desenvolvedor júnior",
      "Analista de suporte",
      "Técnico em manutenção",
      "Assistente de TI"
    ],
    salary: "R$ 2.800,00",
    marketInfo: "A área de tecnologia da informação está em constante crescimento, com grande demanda por técnicos em informática em empresas de todos os segmentos, consultorias de TI, assistências técnicas e oportunidades de trabalho autônomo.",
    requirements: "Ensino Médio em andamento ou completo",
    certificationType: "Certificado de Curso Técnico"
  },
  {
    id: 4,
    slug: "marketing-digital",
    title: "Marketing Digital",
    category: "MARKETING",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "6 meses",
    hours: "200h",
    tag: "Curso Livre",
    description: "Aprenda as estratégias de marketing digital mais eficazes para alavancar negócios na era digital.",
    fullDescription: "O curso de Marketing Digital é ideal para quem deseja dominar as ferramentas e estratégias essenciais para promover produtos e serviços na internet. Você aprenderá desde gestão de redes sociais até tráfego pago, SEO, e-mail marketing e análise de métricas.",
    objectives: [
      "Capacitar em estratégias de marketing digital",
      "Desenvolver habilidades em gestão de redes sociais",
      "Ensinar técnicas de tráfego pago e orgânico",
      "Formar profissionais em análise de dados e métricas"
    ],
    curriculum: [
      { module: "Fundamentos do Marketing Digital", topics: ["Introdução", "Funil de Vendas", "Persona"] },
      { module: "Redes Sociais", topics: ["Facebook e Instagram", "LinkedIn", "TikTok", "Criação de Conteúdo"] },
      { module: "Tráfego Pago", topics: ["Google Ads", "Facebook Ads", "Instagram Ads"] },
      { module: "SEO e Conteúdo", topics: ["Otimização para Buscadores", "Marketing de Conteúdo", "Copywriting"] },
      { module: "Análise e Métricas", topics: ["Google Analytics", "Métricas de Performance", "Relatórios"] }
    ],
    careerOpportunities: [
      "Gestor de mídias sociais",
      "Analista de tráfego",
      "Especialista em SEO",
      "Produtor de conteúdo digital",
      "Consultor de marketing digital",
      "Gestor de e-commerce"
    ],
    salary: "R$ 3.200,00",
    marketInfo: "O marketing digital é uma das áreas que mais cresce no mercado, com oportunidades em agências de marketing, empresas de e-commerce, startups, assessorias de comunicação e possibilidade de atuar como freelancer ou consultoria.",
    requirements: "Nenhum pré-requisito",
    certificationType: "Certificado de Conclusão"
  },
  {
    id: 5,
    slug: "seguranca-trabalho",
    title: "Segurança do Trabalho",
    category: "SEGURANÇA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    mode: "Presencial",
    duration: "2 anos",
    hours: "1500h",
    tag: "Técnico",
    description: "Torne-se um técnico em segurança do trabalho e atue na prevenção de acidentes e promoção da saúde ocupacional.",
    fullDescription: "O curso Técnico em Segurança do Trabalho forma profissionais essenciais para qualquer empresa. Você aprenderá sobre prevenção de acidentes, normas regulamentadoras, primeiros socorros, ergonomia e muito mais, estando apto para atuar em indústrias, construção civil, hospitais e diversos outros setores.",
    objectives: [
      "Formar técnicos em prevenção de acidentes de trabalho",
      "Capacitar em normas regulamentadoras (NRs)",
      "Desenvolver competências em saúde ocupacional",
      "Preparar para gestão de segurança e meio ambiente"
    ],
    curriculum: [
      { module: "Fundamentos de Segurança", topics: ["Introdução à Segurança", "Legislação", "Acidentologia"] },
      { module: "Normas Regulamentadoras", topics: ["NR-6 (EPIs)", "NR-10 (Eletricidade)", "NR-35 (Trabalho em Altura)"] },
      { module: "Saúde Ocupacional", topics: ["Doenças Ocupacionais", "Ergonomia", "Toxicologia"] },
      { module: "Prevenção e Controle", topics: ["Combate a Incêndios", "Primeiros Socorros", "Análise de Riscos"] },
      { module: "Gestão Ambiental", topics: ["SGA", "Resíduos", "Sustentabilidade"] }
    ],
    careerOpportunities: [
      "Técnico de segurança do trabalho",
      "Técnico em SESMT",
      "Inspetor de segurança",
      "Técnico em meio ambiente",
      "Coordenador de segurança",
      "Consultor de SST"
    ],
    salary: "R$ 3.100,00",
    marketInfo: "A segurança do trabalho é obrigatória em empresas de diversos segmentos. O mercado oferece oportunidades em indústrias, construção civil, hospitais, empresas de logística e consultorias especializadas em segurança e meio ambiente.",
    requirements: "Ensino Médio completo",
    certificationType: "Certificado de Curso Técnico + Registro no MTE"
  },
  {
    id: 6,
    slug: "design-grafico",
    title: "Design Gráfico",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "1 ano",
    hours: "800h",
    tag: "Profissionalizante",
    description: "Aprenda a criar projetos visuais impactantes e desenvolva sua criatividade no mundo do design gráfico.",
    fullDescription: "O curso de Design Gráfico oferece formação completa em criação visual, abordando desde teoria das cores e tipografia até ferramentas profissionais como Adobe Photoshop, Illustrator e InDesign. Você desenvolverá projetos reais e construirá um portfólio robusto para o mercado.",
    objectives: [
      "Desenvolver habilidades criativas e técnicas em design",
      "Capacitar no uso de ferramentas profissionais de design",
      "Formar profissionais em identidade visual e branding",
      "Preparar para o mercado de comunicação visual"
    ],
    curriculum: [
      { module: "Fundamentos do Design", topics: ["Teoria das Cores", "Tipografia", "Composição Visual"] },
      { module: "Adobe Photoshop", topics: ["Edição de Imagens", "Manipulação Fotográfica", "Criação de Artes"] },
      { module: "Adobe Illustrator", topics: ["Desenho Vetorial", "Logotipos", "Ilustração Digital"] },
      { module: "Adobe InDesign", topics: ["Diagramação", "Editorial", "Impressos"] },
      { module: "Design Digital", topics: ["UI/UX", "Design para Redes Sociais", "Motion Graphics"] }
    ],
    careerOpportunities: [
      "Designer gráfico",
      "Designer de marca",
      "Designer editorial",
      "Designer digital",
      "Ilustrador",
      "Freelancer em design"
    ],
    requirements: "Nenhum pré-requisito",
    certificationType: "Certificado de Profissionalização",
    salary: "R$ 2.900,00",
    marketInfo: "O mercado de design gráfico oferece diversas oportunidades em agências de publicidade, estúdios de design, editoras, gráficas, empresas de comunicação visual e grandes possibilidades de trabalho freelancer com variados clientes."
  },
  {
    id: 7,
    slug: "tecnico-radiologia",
    title: "Técnico em Radiologia",
    category: "SAÚDE",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
    mode: "Presencial",
    duration: "24 meses",
    hours: "1800h",
    tag: "Técnico",
    description: "Forme-se como técnico em radiologia e atue realizando exames radiográficos convencionais, processando filmes radiológicos e preparando soluções químicas.",
    fullDescription: "Dentre outras atividades, o Técnico em Radiologia realiza exames radiográficos convencionais, processa filmes radiológicos, imagens e gráficos, e prepara soluções químicas, além de organizar a sala de processamento. Ele também prepara o paciente e o ambiente para a realização de exames de radiologia e diagnóstico por imagem, como mamografia, hemodinâmica, tomografia computadorizada e ressonância magnética nuclear.",
    objectives: [
      "Capacitar para realização de exames radiográficos",
      "Formar profissionais em proteção radiológica",
      "Desenvolver competências em diagnóstico por imagem",
      "Preparar para atuar em hospitais e clínicas"
    ],
    curriculum: [
      { module: "Fundamentos da Radiologia", topics: ["Física das Radiações", "Equipamentos Radiológicos", "Segurança Radiológica"] },
      { module: "Técnicas Radiográficas", topics: ["Radiologia Convencional", "Posicionamento", "Processamento de Imagens"] },
      { module: "Diagnóstico por Imagem", topics: ["Tomografia", "Ressonância Magnética", "Ultrassonografia"] },
      { module: "Anatomia e Fisiologia", topics: ["Anatomia Humana", "Fisiologia", "Patologia"] },
      { module: "Proteção Radiológica", topics: ["Normas de Segurança", "Dosimetria", "Radioproteção"] }
    ],
    careerOpportunities: [
      "Técnico em radiologia",
      "Técnico em tomografia",
      "Técnico em ressonância magnética",
      "Técnico em mamografia",
      "Técnico em hemodinâmica",
      "Auxiliar em diagnóstico por imagem"
    ],
    requirements: "Ensino Médio completo",
    certificationType: "Certificado de Curso Técnico + Registro no CONTER",
    salary: "R$ 2.881,62",
    marketInfo: "Serviços de radiologia e diagnóstico por imagem em hospitais, clínicas e unidades básicas de saúde."
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
