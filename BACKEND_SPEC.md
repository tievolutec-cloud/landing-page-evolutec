# Especificação do Backend - Landing Page Evolutec

Esta documentação descreve a estrutura do backend em formato **MVC (Model-View-Controller)** utilizando **Prisma ORM** e **PostgreSQL**, projetada para atender às necessidades dinâmicas do projeto `landing-page-evolutec`.

## 1. Visão Geral da Arquitetura

O backend será estruturado para suportar o gerenciamento de conteúdo do site (CMS) e a captura de dados de visitantes.

*   **Linguagem:** Node.js (TypeScript recomendado) ou Python.
*   **Banco de Dados:** PostgreSQL.
*   **ORM:** Prisma.
*   **Níveis de Usuário:**
    *   **ADMIN:** Acesso total (criar usuários, configurações, deletar registros sensíveis).
    *   **EDITOR:** Gerenciar conteúdo (Blogs, Cursos, Depoimentos, FAQs).
    *   **PUBLIC:** Acesso de leitura (Site) e escrita restrita (Formulários de contato/trabalhe conosco).

---

## 2. Modelagem de Dados (Prisma Schema)

Este schema cobre todas as seções dinâmicas identificadas no código frontend (`src/data`, `src/components`, etc.).

```prisma
// schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// ---------------------------------------------------------
// USUÁRIOS E AUTENTICAÇÃO
// ---------------------------------------------------------

enum UserRole {
  ADMIN
  EDITOR
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String   // Hash da senha
  name      String
  role      UserRole @default(EDITOR)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// ---------------------------------------------------------
// CONTEÚDO DO SITE (CMS)
// ---------------------------------------------------------

// 1. Blog (Referência: src/data/blogData.js)
model BlogPost {
  id          String   @id @default(uuid()) // Usar UUID para slugs ou manter ID numérico
  slug        String   @unique
  title       String
  subtitle    String?
  content     String   @db.Text // HTML ou Markdown
  imageUrl    String?
  publishDate DateTime @default(now())
  featured    Boolean  @default(false) // 'destaque'
  tags        String[] // Array de strings (Suportado no Postgres)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// 2. Cursos (Referência: src/data/coursesData.js)
enum CourseMode {
  EAD
  PRESENCIAL
  HIBRIDO
}

model Course {
  id                  Int      @id @default(autoincrement())
  slug                String   @unique
  title               String
  category            String   // Ex: GESTÃO, SAÚDE
  imageUrl            String?
  mode                CourseMode
  duration            String   // Ex: "2 anos"
  hours               String   // Ex: "1600h"
  tag                 String?  // Ex: "Graduação"
  description         String   @db.Text // Descrição curta
  fullDescription     String   @db.Text // Descrição completa
  requirements        String?
  certificationType   String?
  salary              String?
  marketInfo          String?  @db.Text

  // Relacionamentos
  objectives          CourseObjective[]
  curriculum          CourseModule[]
  careerOpportunities CourseOpportunity[]

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}
  
model CourseObjective {
  id        Int    @id @default(autoincrement())
  text      String
  courseId  Int
  course    Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
}

model CourseModule {
  id        Int           @id @default(autoincrement())
  title     String        // Nome do módulo
  courseId  Int
  course    Course        @relation(fields: [courseId], references: [id], onDelete: Cascade)
  topics    CourseTopic[]
}

model CourseTopic {
  id        Int          @id @default(autoincrement())
  name      String
  moduleId  Int
  module    CourseModule @relation(fields: [moduleId], references: [id], onDelete: Cascade)
}

model CourseOpportunity {
  id        Int    @id @default(autoincrement())
  name      String // Ex: "Gestor de empresas"
  courseId  Int
  course    Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
}

// 3. Depoimentos (Referência: src/components/Depoimentos.jsx)
model Testimonial {
  id        Int      @id @default(autoincrement())
  name      String
  courseName String? // Texto livre ou relação opcional com Course
  text      String   @db.Text
  videoId   String?  // ID do Youtube
  imageUrl  String?
  active    Boolean  @default(true)
}

// 4. FAQ (Referência: src/components/FAQ.jsx)
model FAQ {
  id        Int     @id @default(autoincrement())
  question  String
  answer    String  @db.Text
  order     Int     @default(0) // Para ordenar na tela
}

// 5. Unidades/Mapa (Referência: src/components/Mapa.jsx)
model Unit {
  id          Int     @id @default(autoincrement())
  name        String  // Ex: "Polo Castanhal"
  description String?
  latitude    Float
  longitude   Float
  address     String?
  phone       String?
  whatsapp    String?
}

// 6. Galeria e Autoridade (src/components/GaleriaFormatura.jsx, src/components/autoridade.jsx)
model GalleryImage {
  id        Int      @id @default(autoincrement())
  title     String?
  imageUrl  String
  category  String?  // Ex: "Formatura", "Estrutura"
}

model Stat {
  id        Int     @id @default(autoincrement())
  label     String  // Ex: "Alunos Formados"
  value     String  // Ex: "5k+"
  icon      String?
}

// ---------------------------------------------------------
// CAPTURA DE DADOS (FORMULÁRIOS)
// ---------------------------------------------------------

// 7. Trabalhe Conosco (Referência: src/pages/TrabalheConosco.jsx)
model JobApplication {
  id          Int      @id @default(autoincrement())
  firstName   String
  lastName    String
  phone       String
  email       String
  role        String
  city        String
  cvFileUrl   String?  // URL do arquivo de currículo (upload)
  status      ApplicationStatus @default(PENDING)
  createdAt   DateTime @default(now())
}

enum ApplicationStatus {
  PENDING
  REVIEWED
  ARCHIVED
}

// 8. Leads / Contato Geral (Opção para salvar contatos ao invés de só mandar p/ WhatsApp)
model Lead {
  id        Int      @id @default(autoincrement())
  name      String
  phone     String
  courseInterest String?
  city      String?
  createdAt DateTime @default(now())
}
```

---

## 3. Estrutura de Pastas do Backend (Sugestão)

```text
/backend
  /src
    /controllers    # Lógica de entrada/saída (req, res)
    /services       # Regras de negócio e chamadas ao Prisma
    /routes         # Definição das rotas da API
    /middlewares    # Autenticação (JWT), Validação, Uploads
    /utils          # Funções auxiliares
    server.ts       # Entry point
```

---

## 4. Definição das Rotas da API (Endpoints)

Aqui estão os endpoints necessários para conectar seu frontend ao backend.

### **Autenticação (Auth)**
*   `POST /api/auth/login`: Login de Admin/Editor (Retorna JWT).
*   `POST /api/auth/register`: Criar novo usuário (Apenas Admin).

### **Cursos (Courses)**
*   `GET /api/courses`: Listar todos os cursos (Frontend: Página Cursos).
*   `GET /api/courses/:slug`: Detalhes de um curso (Frontend: Página CursoDetalhes).
*   `POST /api/courses`: Criar novo curso (Protegido: Admin/Editor).
*   `PUT /api/courses/:id`: Atualizar curso (Protegido).
*   `DELETE /api/courses/:id`: Remover curso (Protegido).

### **Blog**
*   `GET /api/blog`: Listar posts (com paginação e filtro por tag).
*   `GET /api/blog/:slug`: Ler post completo.
*   `POST /api/blog`: Criar post (Protegido).
*   `PUT /api/blog/:id`: Editar post (Protegido).

### **Institucional (Conteúdo Dinâmico)**
*   `GET /api/testimonials`: Listar depoimentos.
*   `POST /api/testimonials`: Adicionar depoimento (Protegido).
*   `GET /api/faq`: Listar perguntas frequentes.
*   `GET /api/units`: Listar unidades para o mapa.
*   `POST /api/units`: Gerenciar unidades (Protegido).
*   `GET /api/stats`: Pegar números (Ex: 5k+ alunos) para o componente Autoridade.

### **Formulários (Escrita Pública)**
*   `POST /api/jobs`: Enviar currículo ("Trabalhe Conosco").
    *   *Nota:* Este endpoint precisará de suporte a Upload de Arquivos (Multer/S3).
*   `POST /api/leads`: Salvar contato (Opcional, se quiser salvar além de mandar pro WhatsApp).
