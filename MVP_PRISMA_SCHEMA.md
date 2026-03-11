# MVP — Schema Prisma para o Banco de Dados Evolutec

> Documento de referência para a construção do schema Prisma com base no estado atual do site.

---

## 📌 Visão Geral

Este documento descreve os modelos (tabelas) necessários para migrar os dados atualmente **hardcoded** no frontend para um banco de dados relacional gerenciado pelo **Prisma ORM**. O objetivo é permitir um painel administrativo futuro e persistência de formulários.

---

## 🗂️ Modelos do Schema

---

### 1. `Course` — Cursos

Dados atualmente em `src/data/coursesData.js`.

| Campo              | Tipo Prisma         | Obrigatório | Descrição                                       |
| ------------------ | ------------------- | ----------- | ----------------------------------------------- |
| `id`               | `Int @id @default(autoincrement())` | ✅ | PK auto gerada                         |
| `slug`             | `String @unique`    | ✅          | Identificador URL-friendly                      |
| `title`            | `String`            | ✅          | Nome do curso                                   |
| `category`         | `String`            | ✅          | Categoria (Tecnologia, Saúde, etc.)             |
| `image`            | `String`            | ✅          | URL da imagem                                   |
| `mode`             | `String`            | ✅          | Modalidade (Presencial, EAD, etc.)              |
| `duration`         | `String`            | ✅          | Duração (ex: "12 meses")                        |
| `hours`            | `String`            | ✅          | Carga horária (ex: "800h")                      |
| `tag`              | `String`            | ✅          | Tipo (Profissionalizante, Técnico, etc.)        |
| `description`      | `String`            | ✅          | Descrição curta                                 |
| `fullDescription`  | `String @db.Text`   | ✅          | Descrição completa                              |
| `requirements`     | `String`            | ❌          | Pré-requisitos                                  |
| `certificationType`| `String`            | ❌          | Tipo de certificação                            |
| `salary`           | `String`            | ❌          | Faixa salarial média                            |
| `marketInfo`       | `String @db.Text`   | ❌          | Informações do mercado de trabalho              |
| `objectives`       | `String[]`          | ❌          | Objetivos de aprendizagem                       |
| `careerOpportunities` | `String[]`       | ❌          | Oportunidades de carreira                       |
| `createdAt`        | `DateTime @default(now())` | ✅   | Data de criação                                 |
| `updatedAt`        | `DateTime @updatedAt`      | ✅   | Data de atualização                             |

**Relações:** `modules`, `enrollments`

```prisma
model Course {
  id                  Int       @id @default(autoincrement())
  slug                String    @unique
  title               String
  category            String
  image               String
  mode                String
  duration            String
  hours               String
  tag                 String
  description         String
  fullDescription     String    @db.Text
  requirements        String?
  certificationType   String?
  salary              String?
  marketInfo          String?   @db.Text
  objectives          String[]
  careerOpportunities String[]
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt

  modules     CourseModule[]
  enrollments Enrollment[]
}
```

---

### 2. `CourseModule` — Módulos do Currículo

Cada curso possui uma grade curricular com módulos e tópicos.

| Campo     | Tipo Prisma         | Obrigatório | Descrição                  |
| --------- | ------------------- | ----------- | -------------------------- |
| `id`      | `Int @id @default(autoincrement())` | ✅ | PK                |
| `courseId` | `Int`              | ✅          | FK para `Course`           |
| `name`    | `String`            | ✅          | Nome do módulo             |
| `topics`  | `String[]`          | ✅          | Tópicos do módulo          |
| `order`   | `Int`               | ✅          | Ordem de exibição          |

```prisma
model CourseModule {
  id       Int      @id @default(autoincrement())
  courseId  Int
  name     String
  topics   String[]
  order    Int      @default(0)

  course   Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
}
```

---

### 3. `BlogPost` — Posts do Blog

Dados atualmente em `src/data/blogData.js`.

| Campo       | Tipo Prisma         | Obrigatório | Descrição                         |
| ----------- | ------------------- | ----------- | --------------------------------- |
| `id`        | `String @id`        | ✅          | Identificador único (slug-like)   |
| `image`     | `String`            | ✅          | URL da imagem de capa             |
| `tags`      | `String[]`          | ✅          | Tags / categorias                 |
| `title`     | `String`            | ✅          | Título do post                    |
| `subtitle`  | `String`            | ✅          | Subtítulo / resumo                |
| `date`      | `DateTime`          | ✅          | Data de publicação                |
| `content`   | `String @db.Text`   | ✅          | Conteúdo HTML                     |
| `featured`  | `Boolean`           | ✅          | Post em destaque                  |
| `published` | `Boolean`           | ✅          | Post publicado                    |
| `createdAt` | `DateTime @default(now())` | ✅   | Data de criação no sistema        |
| `updatedAt` | `DateTime @updatedAt`      | ✅   | Última atualização                |

```prisma
model BlogPost {
  id        String   @id
  image     String
  tags      String[]
  title     String
  subtitle  String
  date      DateTime
  content   String   @db.Text
  featured  Boolean  @default(false)
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

### 4. `Ebook` — E-books

Dados atualmente em `src/data/ebooksData.js`.

| Campo         | Tipo Prisma         | Obrigatório | Descrição                    |
| ------------- | ------------------- | ----------- | ---------------------------- |
| `id`          | `Int @id @default(autoincrement())` | ✅ | PK                  |
| `title`       | `String`            | ✅          | Título do e-book             |
| `description` | `String`            | ✅          | Descrição                    |
| `category`    | `String`            | ✅          | Categoria                    |
| `pages`       | `Int`               | ✅          | Número de páginas            |
| `coverImage`  | `String`            | ✅          | URL da capa                  |
| `downloadUrl` | `String`            | ✅          | Link para download           |
| `createdAt`   | `DateTime @default(now())` | ✅   | Data de criação              |

```prisma
model Ebook {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  category    String
  pages       Int
  coverImage  String
  downloadUrl String
  createdAt   DateTime @default(now())
}
```

---

### 5. `Unit` — Unidades / Polos

Dados atualmente hardcoded em `src/components/Mapa.jsx`.

| Campo        | Tipo Prisma         | Obrigatório | Descrição                    |
| ------------ | ------------------- | ----------- | ---------------------------- |
| `id`         | `Int @id @default(autoincrement())` | ✅ | PK                  |
| `name`       | `String`            | ✅          | Nome da unidade              |
| `description`| `String`            | ❌          | Descrição                    |
| `address`    | `String`            | ✅          | Endereço completo            |
| `latitude`   | `Float`             | ✅          | Latitude                     |
| `longitude`  | `Float`             | ✅          | Longitude                    |
| `zoom`       | `Int`               | ❌          | Nível de zoom no mapa        |
| `active`     | `Boolean`           | ✅          | Unidade ativa                |

```prisma
model Unit {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  address     String
  latitude    Float
  longitude   Float
  zoom        Int      @default(13)
  active      Boolean  @default(true)
}
```

---

### 6. `Testimonial` — Depoimentos / Vídeos

Dados atualmente hardcoded em `src/components/Depoimentos.jsx`.

| Campo      | Tipo Prisma         | Obrigatório | Descrição                    |
| ---------- | ------------------- | ----------- | ---------------------------- |
| `id`       | `Int @id @default(autoincrement())` | ✅ | PK                  |
| `title`    | `String`            | ✅          | Título do depoimento         |
| `videoId`  | `String`            | ✅          | ID do vídeo no YouTube       |
| `courseId`  | `Int?`             | ❌          | FK para curso relacionado    |
| `active`   | `Boolean`           | ✅          | Exibir no site               |
| `order`    | `Int`               | ❌          | Ordem de exibição            |

```prisma
model Testimonial {
  id       Int      @id @default(autoincrement())
  title    String
  videoId  String
  courseId  Int?
  active   Boolean  @default(true)
  order    Int      @default(0)
}
```

---

### 7. `FAQ` — Perguntas Frequentes

Dados atualmente hardcoded em `src/components/FAQ.jsx`.

| Campo      | Tipo Prisma         | Obrigatório | Descrição                    |
| ---------- | ------------------- | ----------- | ---------------------------- |
| `id`       | `Int @id @default(autoincrement())` | ✅ | PK                  |
| `question` | `String`            | ✅          | Pergunta                     |
| `answer`   | `String @db.Text`   | ✅          | Resposta                     |
| `order`    | `Int`               | ✅          | Ordem de exibição            |
| `active`   | `Boolean`           | ✅          | Exibir no site               |

```prisma
model FAQ {
  id       Int      @id @default(autoincrement())
  question String
  answer   String   @db.Text
  order    Int      @default(0)
  active   Boolean  @default(true)
}
```

---

### 8. `GalleryImage` — Galeria de Formaturas

Dados atualmente hardcoded em `src/components/GaleriaFormatura.jsx`.

| Campo    | Tipo Prisma         | Obrigatório | Descrição                    |
| -------- | ------------------- | ----------- | ---------------------------- |
| `id`     | `Int @id @default(autoincrement())` | ✅ | PK                  |
| `src`    | `String`            | ✅          | URL da imagem                |
| `alt`    | `String`            | ✅          | Texto alternativo            |
| `type`   | `String`            | ✅          | Tipo de layout (large/standard) |
| `active` | `Boolean`           | ✅          | Exibir no site               |

```prisma
model GalleryImage {
  id     Int      @id @default(autoincrement())
  src    String
  alt    String
  type   String   @default("standard")
  active Boolean  @default(true)
}
```

---

### 9. `Enrollment` — Matrículas / Leads

Formulário em `src/pages/Contato.jsx`. Atualmente enviado via WhatsApp, sem persistência.

| Campo       | Tipo Prisma         | Obrigatório | Descrição                         |
| ----------- | ------------------- | ----------- | --------------------------------- |
| `id`        | `Int @id @default(autoincrement())` | ✅ | PK                       |
| `name`      | `String`            | ✅          | Nome completo                     |
| `phone`     | `String`            | ✅          | Telefone                          |
| `courseId`   | `Int`              | ✅          | FK para o curso escolhido         |
| `city`      | `String`            | ✅          | Cidade                            |
| `lgpdConsent` | `Boolean`         | ✅          | Aceite LGPD                       |
| `status`    | `EnrollmentStatus`  | ✅          | Status do lead                    |
| `notes`     | `String?`           | ❌          | Observações internas              |
| `createdAt` | `DateTime @default(now())` | ✅   | Data de submissão                 |
| `updatedAt` | `DateTime @updatedAt`      | ✅   | Última atualização                |

```prisma
enum EnrollmentStatus {
  PENDING
  CONTACTED
  ENROLLED
  REJECTED
}

model Enrollment {
  id          Int              @id @default(autoincrement())
  name        String
  phone       String
  courseId     Int
  city        String
  lgpdConsent Boolean
  status      EnrollmentStatus @default(PENDING)
  notes       String?
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt

  course      Course           @relation(fields: [courseId], references: [id])
}
```

---

### 10. `JobApplication` — Trabalhe Conosco

Formulário em `src/pages/TrabalheConosco.jsx`. Atualmente apenas `console.log`, sem persistência.

| Campo         | Tipo Prisma         | Obrigatório | Descrição                       |
| ------------- | ------------------- | ----------- | ------------------------------- |
| `id`          | `Int @id @default(autoincrement())` | ✅ | PK                     |
| `firstName`   | `String`            | ✅          | Primeiro nome                   |
| `lastName`    | `String`            | ✅          | Sobrenome                       |
| `phone`       | `String`            | ✅          | Telefone                        |
| `email`       | `String`            | ✅          | Email                           |
| `role`        | `String`            | ✅          | Tipo (Business, Candidate, etc.)|
| `companyName` | `String?`           | ❌          | Nome da empresa                 |
| `city`        | `String?`           | ❌          | Cidade                          |
| `postcode`    | `String?`           | ❌          | CEP                             |
| `resumePath`  | `String`            | ✅          | Caminho do arquivo de currículo |
| `policyConsent` | `Boolean`         | ✅          | Aceite de política de privacidade |
| `status`      | `ApplicationStatus` | ✅          | Status da candidatura           |
| `createdAt`   | `DateTime @default(now())` | ✅   | Data de envio                   |
| `updatedAt`   | `DateTime @updatedAt`      | ✅   | Última atualização              |

```prisma
enum ApplicationStatus {
  SUBMITTED
  REVIEWED
  INTERVIEW
  REJECTED
  HIRED
}

model JobApplication {
  id            Int               @id @default(autoincrement())
  firstName     String
  lastName      String
  phone         String
  email         String
  role          String
  companyName   String?
  city          String?
  postcode      String?
  resumePath    String
  policyConsent Boolean
  status        ApplicationStatus @default(SUBMITTED)
  createdAt     DateTime          @default(now())
  updatedAt     DateTime          @updatedAt
}
```

---

## 🧩 Schema Prisma Completo

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================
// ENUMS
// ============================

enum EnrollmentStatus {
  PENDING
  CONTACTED
  ENROLLED
  REJECTED
}

enum ApplicationStatus {
  SUBMITTED
  REVIEWED
  INTERVIEW
  REJECTED
  HIRED
}

// ============================
// CONTEÚDO DO SITE
// ============================

model Course {
  id                  Int            @id @default(autoincrement())
  slug                String         @unique
  title               String
  category            String
  image               String
  mode                String
  duration            String
  hours               String
  tag                 String
  description         String
  fullDescription     String         @db.Text
  requirements        String?
  certificationType   String?
  salary              String?
  marketInfo          String?        @db.Text
  objectives          String[]
  careerOpportunities String[]
  createdAt           DateTime       @default(now())
  updatedAt           DateTime       @updatedAt

  modules     CourseModule[]
  enrollments Enrollment[]
}

model CourseModule {
  id       Int      @id @default(autoincrement())
  courseId  Int
  name     String
  topics   String[]
  order    Int      @default(0)

  course   Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
}

model BlogPost {
  id        String   @id
  image     String
  tags      String[]
  title     String
  subtitle  String
  date      DateTime
  content   String   @db.Text
  featured  Boolean  @default(false)
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Ebook {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  category    String
  pages       Int
  coverImage  String
  downloadUrl String
  createdAt   DateTime @default(now())
}

model Unit {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  address     String
  latitude    Float
  longitude   Float
  zoom        Int      @default(13)
  active      Boolean  @default(true)
}

model Testimonial {
  id       Int      @id @default(autoincrement())
  title    String
  videoId  String
  courseId  Int?
  active   Boolean  @default(true)
  order    Int      @default(0)
}

model FAQ {
  id       Int      @id @default(autoincrement())
  question String
  answer   String   @db.Text
  order    Int      @default(0)
  active   Boolean  @default(true)
}

model GalleryImage {
  id     Int      @id @default(autoincrement())
  src    String
  alt    String
  type   String   @default("standard")
  active Boolean  @default(true)
}

// ============================
// FORMULÁRIOS / LEADS
// ============================

model Enrollment {
  id          Int              @id @default(autoincrement())
  name        String
  phone       String
  courseId     Int
  city        String
  lgpdConsent Boolean
  status      EnrollmentStatus @default(PENDING)
  notes       String?
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt

  course      Course           @relation(fields: [courseId], references: [id])
}

model JobApplication {
  id            Int               @id @default(autoincrement())
  firstName     String
  lastName      String
  phone         String
  email         String
  role          String
  companyName   String?
  city          String?
  postcode      String?
  resumePath    String
  policyConsent Boolean
  status        ApplicationStatus @default(SUBMITTED)
  createdAt     DateTime          @default(now())
  updatedAt     DateTime          @updatedAt
}
```

---

## 📊 Diagrama de Relações

```
┌──────────────┐       ┌────────────────┐
│   Course     │──1:N──│ CourseModule    │
│              │       └────────────────┘
│              │
│              │──1:N──┌────────────────┐
└──────────────┘       │  Enrollment    │
                       └────────────────┘

┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  BlogPost    │   │    Ebook     │   │     Unit     │
└──────────────┘   └──────────────┘   └──────────────┘

┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ Testimonial  │   │     FAQ      │   │ GalleryImage │
└──────────────┘   └──────────────┘   └──────────────┘

┌──────────────────┐
│  JobApplication  │
└──────────────────┘
```

---

## 🚀 Próximos Passos (Pós-MVP)

| Passo | Descrição |
| ----- | --------- |
| 1     | Instalar Prisma: `npm install prisma @prisma/client` |
| 2     | Inicializar Prisma: `npx prisma init` |
| 3     | Configurar `DATABASE_URL` no `.env` |
| 4     | Copiar o schema acima para `prisma/schema.prisma` |
| 5     | Rodar a migration: `npx prisma migrate dev --name init` |
| 6     | Criar seed script para popular dados existentes dos arquivos `.js` |
| 7     | Criar API (Next.js API Routes, Express, ou Fastify) para servir dados |
| 8     | Substituir imports de dados estáticos por chamadas à API |

---

## 🔮 Modelos para Fases Futuras

| Modelo         | Descrição                                     | Fase  |
| -------------- | --------------------------------------------- | ----- |
| `User`         | Usuários admin para painel de gestão          | v2    |
| `Student`      | Alunos matriculados com dados completos       | v2    |
| `Payment`      | Registros de pagamento / parcelas             | v2    |
| `Certificate`  | Certificados emitidos digitalmente            | v2    |
| `Attendance`   | Controle de presença                          | v3    |
| `Grade`        | Notas e avaliações                            | v3    |
| `Notification` | Notificações e comunicados                    | v3    |
| `AuditLog`     | Log de ações administrativas                  | v3    |
