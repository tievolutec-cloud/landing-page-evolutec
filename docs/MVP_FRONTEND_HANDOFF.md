# MVP Frontend Handoff - Contrato da API

## 1. Objetivo
Este arquivo e a referencia rapida para o agente de construcao do frontend.
Foco:
- quais endpoints consumir
- quais objetos enviar
- quais objetos a API retorna
- como os dados sao persistidos no backend

Fonte de verdade: implementacao em src/routes, src/controllers, src/schemas e src/services.

## 2. Base URL e autenticacao

### Base URL local
- http://localhost:3000/api

### Autenticacao de admin (rotas de escrita de conteudo)
- Tipo: HTTP Basic Auth
- Header: Authorization: Basic <base64(username:password)>
- Credenciais vem de variaveis de ambiente:
  - ADMIN_USERNAME
  - ADMIN_PASSWORD

Rotas que exigem admin:
- POST /courses
- PATCH /courses/:slug
- POST /blog-posts
- PATCH /blog-posts/:identifier
- POST /ebooks
- PATCH /ebooks/:id

## 3. Padrao de resposta da API

### Sucesso de listagem
- status 200
- formato:
{
  "data": [...],
  "count": 123
}

### Sucesso de detalhe
- status 200
- formato:
{
  "data": { ... }
}

### Sucesso de criacao
- status 201
- formato:
{
  "data": { ... }
}

### Erros
- status 400/401/403/404/409/500
- formato:
{
  "message": "texto",
  "details": ["...opcional..."]
}

## 4. Endpoints para frontend MVP

## 4.1 Health

### GET /health
Uso: checagem de disponibilidade da API.

Resposta 200:
{
  "status": "ok"
}

## 4.2 Cursos

### GET /courses
Lista cursos.

Query params opcionais:
- category (string)
- mode (string)
- search (string)
- destaque ("true" ou "false")

### GET /courses/:slug
Retorna 1 curso por slug.

### POST /courses (admin)
Cria curso.

Payload obrigatorio:
{
  "id": 1,
  "slug": "atendente-de-farmacia",
  "title": "Atendente de Farmacia",
  "category": "Saude",
  "image": "https://...",
  "mode": "Presencial",
  "duration": "Ate 12 meses",
  "hours": "Sob consulta",
  "tag": "Profissionalizante",
  "description": "Resumo",
  "fullDescription": "Descricao longa",
  "objectives": ["..."],
  "curriculum": [
    {
      "module": "Conteudos da Formacao",
      "description": "Descricao do modulo",
      "topics": [
        {
          "title": "Topico 1",
          "description": "Descricao do topico"
        }
      ]
    }
  ],
  "careerOpportunities": ["..."],
  "requirements": "Nao informado",
  "certificationType": "Profissionalizante",
  "salary": "A partir de R$ 1.400",
  "marketInfo": "Texto de mercado",
  "destaque": false
}

### PATCH /courses/:slug (admin)
Atualizacao parcial. Enviar apenas campos alterados.
Regras:
- ao menos 1 campo no body
- campos de array nao podem vir vazios
- destaque deve ser boolean

Persistencia no backend:
- tabela courses
- id e inteiro sem autoincrement
- curriculum e salvo como JSON
- requirements e string

## 4.3 Blog

### GET /blog-posts
Lista posts de blog.

Query params opcionais:
- tag (string)
- destaque ("true" ou "false")
- search (string)

### GET /blog-posts/:identifier
Busca por id do post.
Obs: atualmente o fluxo usa id como identificador principal.

### POST /blog-posts (admin)
Cria post.

Payload obrigatorio:
{
  "id": "caminhos-apos-ensino-medio",
  "imagem": "/imagem.webp",
  "tags": ["#CARREIRA", "#EDUCACAO"],
  "titulo": "Titulo",
  "subtitulo": "Subtitulo",
  "data": "15/03/2026",
  "conteudo": "<p>HTML permitido</p>",
  "destaque": false
}

### PATCH /blog-posts/:identifier (admin)
Atualizacao parcial. Enviar apenas campos alterados.

Persistencia no backend:
- tabela blog_posts
- id e string (PK)
- tags e array de strings
- conteudo e texto longo

## 4.4 E-books

### GET /ebooks
Lista e-books.

Query params opcionais:
- categoria (string)
- search (string)

### GET /ebooks/:id
Detalhe de e-book por id inteiro.

### GET /ebooks/download/:caminho
Download do arquivo PDF.
Normalmente caminho vem da ultima parte do downloadUrl.

### POST /ebooks (admin)
Cria e-book.
Aceita multipart/form-data.

Campos esperados:
- id (int, obrigatorio)
- titulo (string, obrigatorio)
- descricao (string, obrigatorio)
- categoria (string, obrigatorio)
- capa (string, obrigatorio)
- arquivo (file PDF, opcional)
- downloadUrl (string, obrigatorio se nao enviar arquivo)

Comportamento:
- se enviar arquivo, backend gera downloadUrl automaticamente:
  - /api/ebooks/download/<nome-do-arquivo>

### PATCH /ebooks/:id (admin)
Atualizacao parcial (multipart ou json).
Se enviar arquivo novo, downloadUrl e recalculado.

Persistencia no backend:
- tabela ebooks
- id e inteiro sem autoincrement
- downloadUrl e string obrigatoria

## 4.5 Site Settings

### GET /site-settings
Retorna configuracoes globais do site.

Formato esperado de data:
{
  "telefoneWhatsApp": "+55 91 99999-9999",
  "emailContato": "contato@...",
  "linksRedesSociais": { ...json... },
  "enderecoOuUnidades": [ ...json... ],
  "mapaLatitude": -1.293,
  "mapaLongitude": -47.928
}

## 4.6 Leads

### POST /leads/contact
Cria lead de contato.

Payload esperado:
{
  "nome": "Joao Silva",
  "telefone": "(11) 99999-9999",
  "curso": "Curso X",
  "cidade": "Cidade Y",
  "origem": "Meta Ads",
  "lgpdConsent": true
}

Resposta 201:
{
  "message": "Lead de contato salvo com sucesso.",
  "data": { ...lead... }
}

### POST /leads/ebook-download
Cria lead para download de e-book.

Payload esperado:
{
  "nome": "Maria",
  "email": "maria@email.com",
  "telefone": "(11) 99999-9999",
  "empresa": "Empresa Z",
  "ebookId": 1,
  "ebookTitulo": "Titulo do ebook",
  "origem": "Landing Page"
}

Resposta 201:
{
  "message": "Lead de download salvo com sucesso.",
  "data": {
    "...lead...": "...",
    "downloadUrl": "/api/ebooks/download/arquivo.pdf"
  }
}

## 5. Regras de validacao importantes para frontend

- Enviar sempre Content-Type correto:
  - application/json para json
  - multipart/form-data para upload de ebook
- Evitar strings vazias em campos obrigatorios.
- Campos array obrigatorios:
  - courses.objectives
  - courses.curriculum
  - courses.careerOpportunities
  - blog.tags
- Em atualizacao (PATCH), enviar apenas campos alterados.
- Se enviar PATCH sem nenhum campo valido, retorna 400.

## 6. Fluxo recomendado de integracao frontend

1. Consumir listagens publicas:
- GET /courses
- GET /blog-posts
- GET /ebooks
- GET /site-settings

2. Formularios de captacao:
- POST /leads/contact
- POST /leads/ebook-download

3. Area admin (com Basic Auth):
- CRUD parcial de courses/blog-posts/ebooks

4. Download de ebook:
- usar downloadUrl retornado no ebook ou no lead de ebook

## 7. Observacoes para o agente de frontend

- O swagger pode estar com exemplos antigos em alguns pontos.
- Para o MVP, usar este arquivo como contrato funcional.
- Quando houver conflito entre docs e runtime, priorizar payloads validados em src/schemas.
