# Especificação do Painel Administrativo — Evolutec CMS

> **Objetivo:** Documento de referência para a criação de todas as páginas de gerenciamento de conteúdo (POST, PUT, DELETE) do painel admin/editor da Evolutec.
> Utilize este documento como prompt para um agente de IA ou como guia de desenvolvimento.

---

## 1. Contexto do Projeto

- **Backend:** Node.js + Express + Prisma (PostgreSQL) rodando em `http://localhost:3333`
- **Autenticação:** JWT via `POST /api/auth/login` — token enviado em todas as requisições protegidas como `Authorization: Bearer <token>`
- **Roles:**
  - `ADMIN` — acesso total (criar usuários, deletar qualquer registro)
  - `EDITOR` — pode criar e editar conteúdo, **não** pode deletar nem gerenciar usuários

---

## 2. Mapa de Páginas do Painel

```
/admin
  /login                    ← Pública
  /dashboard                ← ADMIN + EDITOR

  /cursos                   ← ADMIN + EDITOR
    /novo                   ← POST /api/courses
    /:id/editar             ← PUT  /api/courses/:id
    (delete inline)         ← DELETE /api/courses/:id  [apenas ADMIN]

  /blog                     ← ADMIN + EDITOR
    /novo                   ← POST /api/blog
    /:id/editar             ← PUT  /api/blog/:id
    (delete inline)         ← DELETE /api/blog/:id  [apenas ADMIN]

  /depoimentos              ← ADMIN + EDITOR
    /novo                   ← POST /api/testimonials
    (delete inline)         ← DELETE /api/testimonials/:id  [apenas ADMIN]

  /faq                      ← ADMIN + EDITOR
    /novo                   ← POST /api/faq
    /:id/editar             ← PUT  /api/faq/:id
    (delete inline)         ← DELETE /api/faq/:id  [apenas ADMIN]

  /unidades                 ← ADMIN + EDITOR
    /novo                   ← POST /api/units
    (delete inline)         ← DELETE /api/units/:id  [apenas ADMIN]

  /estatisticas             ← ADMIN
    (gerenciar inline)      ← POST / DELETE /api/stats

  /curriculos               ← ADMIN
    (listar candidaturas)   ← GET /api/jobs  [visualização + mudança de status]

  /usuarios                 ← ADMIN apenas
    /novo                   ← POST /api/auth/register
    (delete inline)         ← DELETE /api/users/:id
```

---

## 3. Especificação de Cada Página

---

### 3.1 — `/admin/login`

**Acesso:** Público  
**Endpoint:** `POST /api/auth/login`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| email | email | sim |
| password | password | sim |

**Comportamento:**
- Ao submeter, salvar o `token` JWT no `localStorage` (chave: `evolutec_token`) e redirecionar para `/admin/dashboard`.
- Em caso de erro 401, exibir mensagem "E-mail ou senha inválidos".

---

### 3.2 — `/admin/cursos/novo` e `/admin/cursos/:id/editar`

**Acesso:** ADMIN + EDITOR  
**Endpoints:** `POST /api/courses` / `PUT /api/courses/:id`

**Campos do formulário:**
| Campo | Tipo | Obrigatório | Observação |
|-------|------|-------------|------------|
| title | text | sim | |
| slug | text | sim | Auto-gerado a partir do título |
| category | text | sim | Ex: TECNOLOGIA, SAÚDE |
| tag | text | não | Ex: Profissionalizante, Técnico |
| mode | select | sim | `EAD` / `PRESENCIAL` / `HIBRIDO` |
| duration | text | sim | Ex: "6 meses" |
| hours | text | sim | Ex: "200h" |
| imageUrl | text / upload | não | URL da imagem ou upload |
| description | textarea | sim | Descrição curta |
| fullDescription | textarea (rich) | sim | Descrição completa |
| requirements | textarea | não | |
| certificationType | text | não | |
| salary | text | não | Ex: "R$ 2.000 – R$ 4.000" |
| marketInfo | textarea | não | |
| objectives | lista dinâmica | não | Array de `{ text }` |
| curriculum | lista dinâmica | não | Array de `{ title, topics: [{ name }] }` |
| careerOpportunities | lista dinâmica | não | Array de `{ name }` |

**Payload JSON enviado:**
```json
{
  "title": "Marketing Digital",
  "slug": "marketing-digital",
  "category": "MARKETING",
  "tag": "Profissionalizante",
  "mode": "EAD",
  "duration": "6 meses",
  "hours": "200h",
  "imageUrl": "https://...",
  "description": "Descrição curta...",
  "fullDescription": "Descrição completa...",
  "objectives": [{ "text": "Objetivo 1" }],
  "curriculum": [{ "title": "Módulo 1", "topics": [{ "name": "Tópico 1" }] }],
  "careerOpportunities": [{ "name": "Analista de Marketing" }]
}
```

**DELETE** (botão na listagem, apenas ADMIN):
- Exibir modal de confirmação antes de chamar `DELETE /api/courses/:id`.

---

### 3.3 — `/admin/blog/novo` e `/admin/blog/:id/editar`

**Acesso:** ADMIN + EDITOR  
**Endpoints:** `POST /api/blog` / `PUT /api/blog/:id`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| title | text | sim |
| slug | text | sim |
| subtitle | text | não |
| content | textarea (rich text) | sim |
| imageUrl | text / upload | não |
| featured | checkbox | não |
| tags | input com chips | não |
| publishDate | datetime-local | não |

**Payload JSON:**
```json
{
  "title": "Título do post",
  "slug": "titulo-do-post",
  "subtitle": "Subtítulo opcional",
  "content": "<p>HTML do post</p>",
  "imageUrl": "https://...",
  "featured": false,
  "tags": ["tecnologia", "educação"],
  "publishDate": "2026-03-06T12:00:00.000Z"
}
```

---

### 3.4 — `/admin/depoimentos/novo`

**Acesso:** ADMIN + EDITOR  
**Endpoint:** `POST /api/testimonials`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| name | text | sim |
| courseName | text | não |
| text | textarea | sim |
| videoId | text | não | ID do YouTube |
| imageUrl | text / upload | não |
| active | checkbox | não |

**Payload JSON:**
```json
{
  "name": "Maria Silva",
  "courseName": "Marketing Digital",
  "text": "O curso mudou minha vida...",
  "videoId": "dQw4w9WgXcQ",
  "imageUrl": "https://...",
  "active": true
}
```

---

### 3.5 — `/admin/faq`

**Acesso:** ADMIN + EDITOR  
**Endpoints:** `POST /api/faq` / `PUT /api/faq/:id` / `DELETE /api/faq/:id`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| question | text | sim |
| answer | textarea | sim |
| order | number | não | Define a ordem de exibição |

**Payload JSON:**
```json
{
  "question": "Quais são os requisitos?",
  "answer": "Não há requisitos prévios...",
  "order": 1
}
```

> **Sugestão de UX:** Listar todos os FAQs com drag-and-drop para reordenar, atualizando o campo `order` via `PUT`.

---

### 3.6 — `/admin/unidades/novo`

**Acesso:** ADMIN + EDITOR  
**Endpoint:** `POST /api/units`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| name | text | sim | Ex: "Polo Castanhal" |
| description | textarea | não | |
| latitude | number | sim | |
| longitude | number | sim | |
| address | text | não | |
| phone | text | não | |
| whatsapp | text | não | |

> **Sugestão:** Usar um mapa clicável (Leaflet.js ou Google Maps) para preencher `latitude` e `longitude` automaticamente.

---

### 3.7 — `/admin/estatisticas` (somente ADMIN)

**Endpoint:** `POST /api/stats` / `DELETE /api/stats/:id`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| label | text | sim | Ex: "Alunos Formados" |
| value | text | sim | Ex: "5k+" |
| icon | text | não | Nome do ícone (ex: classe CSS ou emoji) |

---

### 3.8 — `/admin/curriculos` (somente ADMIN)

**Endpoint:** `GET /api/jobs`

- Página de **listagem somente**, sem formulário de criação (candidatos se cadastram pelo site público).
- Exibir: nome, e-mail, cargo pretendido, cidade, data, status (`PENDING` / `REVIEWED` / `ARCHIVED`).
- Botão para **alterar status** via `PUT /api/jobs/:id` `{ "status": "REVIEWED" }`.
- Link para download do currículo (`cvFileUrl`).

---

### 3.9 — `/admin/usuarios` (somente ADMIN)

**Endpoint:** `POST /api/auth/register`

**Campos do formulário:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| name | text | sim |
| email | email | sim |
| password | password | sim |
| role | select | sim | `ADMIN` / `EDITOR` |

**Payload JSON:**
```json
{
  "name": "João Editor",
  "email": "joao@evolutec.com.br",
  "password": "senha_segura",
  "role": "EDITOR"
}
```

> **Atenção:** Este endpoint **deve ser protegido no backend** verificando que o usuário logado tem `role === 'ADMIN'` antes de criar novos usuários.

---

## 4. Controle de Acesso por Página (Resumo)

| Página | ADMIN | EDITOR |
|--------|-------|--------|
| Login | ✅ | ✅ |
| Dashboard | ✅ | ✅ |
| Cursos — criar/editar | ✅ | ✅ |
| Cursos — deletar | ✅ | ❌ |
| Blog — criar/editar | ✅ | ✅ |
| Blog — deletar | ✅ | ❌ |
| Depoimentos — criar | ✅ | ✅ |
| Depoimentos — deletar | ✅ | ❌ |
| FAQ — criar/editar | ✅ | ✅ |
| FAQ — deletar | ✅ | ❌ |
| Unidades — criar | ✅ | ✅ |
| Unidades — deletar | ✅ | ❌ |
| Estatísticas | ✅ | ❌ |
| Currículos (visualizar) | ✅ | ❌ |
| Usuários | ✅ | ❌ |

---

## 5. Padrão de Requisição Autenticada

Todas as rotas protegidas exigem o header:

```
Authorization: Bearer <JWT_TOKEN>
```

**Exemplo com fetch:**
```js
const token = localStorage.getItem('evolutec_token');

await fetch('http://localhost:3333/api/courses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify(payload),
});
```

---

## 6. Tratamento de Erros Padrão

| Status HTTP | Significado | Ação na UI |
|-------------|-------------|------------|
| 400 | Dados inválidos | Exibir mensagem de erro nos campos |
| 401 | Token ausente/expirado | Redirecionar para `/admin/login` |
| 403 | Sem permissão (role insuficiente) | Exibir "Acesso negado" |
| 404 | Recurso não encontrado | Exibir "Não encontrado" |
| 500 | Erro interno | Exibir "Erro inesperado. Tente novamente." |
