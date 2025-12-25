# Educlass - Ensine Inglês pelo WhatsApp

<div align="center">

![Educlass](https://img.shields.io/badge/Educlass-v1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

**Uma plataforma poderosa e simples para professores ensinarem inglês diretamente pelo WhatsApp de forma estruturada e escalável.**

[Demo](https://educlass.vercel.app) • [Documentação](#documentação) • [Suporte](#suporte)

</div>

---

## 📚 Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Deploy](#deploy)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎯 Sobre

O **Educlass** é uma ferramenta completa que permite professores de inglês criarem e enviarem lições estruturadas diretamente pelo WhatsApp. Com suporte a texto, áudio e exercícios interativos, você pode:

- ✍️ Criar lições com conteúdo em Markdown
- 🎤 Gravar ou fazer upload de áudios explicativos
- 📝 Definir exercícios com respostas em texto ou áudio
- 📲 Enviar automaticamente para suas turmas via WhatsApp Business API
- 💬 Receber e corrigir respostas dos alunos
- 📊 Acompanhar métricas e progresso

---

## ✨ Funcionalidades

### 🏠 Landing Page
- Hero section atraente com CTA
- Seção "Como funciona" com 3 passos
- Design moderno e responsivo (mobile-first)
- Tema claro/escuro automático

### 🔐 Autenticação
- Login com Google OAuth
- Login com email/senha (credentials)
- Registro de novos usuários
- Sessões seguras com NextAuth.js

### 📖 Criação de Lições
- Editor de texto com suporte a Markdown
- Preview em tempo real (formato WhatsApp)
- Gravação de áudio diretamente no navegador
- Upload de arquivos de áudio (MP3, WAV, etc.)
- Criação de exercícios (texto ou áudio)
- Opção de salvar como rascunho ou enviar imediatamente
- Geração de links públicos para lições

### 👥 Gerenciamento
- Criação e organização de turmas
- Cadastro de alunos (manual ou importação CSV)
- Acompanhamento de status dos alunos
- Métricas do dashboard (alunos ativos, lições enviadas, respostas pendentes)

### 💬 Respostas e Feedback
- Visualização de respostas em texto e áudio
- Player de áudio integrado
- Sistema de correção e feedback
- Envio de feedback direto pelo WhatsApp
- Marcação de respostas como corrigidas

### ⚙️ Configurações
- Integração com WhatsApp Business Cloud API
- Configuração de Phone Number ID e Access Token
- Status de verificação da conta WhatsApp

---

## 🛠 Tecnologias

### Core
- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[React 18](https://react.dev/)** - Biblioteca UI

### Database & ORM
- **[Prisma](https://www.prisma.io/)** - ORM TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional (ou SQLite para dev)

### Autenticação
- **[NextAuth.js](https://next-auth.js.org/)** - Autenticação completa
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Hash de senhas

### UI/UX
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Shadcn/UI](https://ui.shadcn.com/)** - Componentes React reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos acessíveis
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos
- **[Framer Motion](https://www.framer.com/motion/)** - Animações

### Validação & Forms
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários

### Integrations
- **[WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)** - Envio de mensagens
- **[Vercel Blob](https://vercel.com/docs/storage/vercel-blob)** - Storage para áudios
- **[Axios](https://axios-http.com/)** - Cliente HTTP

### Utilities
- **[react-markdown](https://github.com/remarkjs/react-markdown)** - Renderização de Markdown
- **[date-fns](https://date-fns.org/)** - Manipulação de datas

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.x ou superior ([Download](https://nodejs.org/))
- **npm** ou **yarn** (vem com Node.js)
- **PostgreSQL** 14+ ([Download](https://www.postgresql.org/download/)) ou use SQLite para desenvolvimento
- **Conta no Meta for Developers** ([Criar conta](https://developers.facebook.com/))
- **WhatsApp Business Account** (configurado no Meta)
- **Conta Vercel** (para deploy e blob storage) ([Criar conta](https://vercel.com/signup))

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/educlass.git
cd educlass
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais (veja [Configuração](#configuração)).

### 4. Configure o banco de dados

```bash
# Gerar cliente Prisma
npx prisma generate

# Criar tabelas no banco
npx prisma db push

# Popular com dados de exemplo (opcional)
npx prisma db seed
```

### 5. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## ⚙️ Configuração

### Database

Para **PostgreSQL** (produção recomendada):

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/educlass?schema=public"
```

Para **SQLite** (desenvolvimento):

```env
DATABASE_URL="file:./dev.db"
```

> **Nota:** Se usar SQLite, altere o `provider` em `prisma/schema.prisma` de `postgresql` para `sqlite`.

### NextAuth.js

```env
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-super-segura"
```

Gere uma chave secreta forte:

```bash
openssl rand -base64 32
```

### Google OAuth (Opcional)

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a **Google+ API**
4. Em **Credenciais**, crie um **OAuth 2.0 Client ID**
5. Adicione as URLs autorizadas:
   - **Authorized JavaScript origins:** `http://localhost:3000`
   - **Authorized redirect URIs:** `http://localhost:3000/api/auth/callback/google`

```env
GOOGLE_CLIENT_ID="seu-google-client-id"
GOOGLE_CLIENT_SECRET="seu-google-client-secret"
```

### WhatsApp Cloud API

#### Passo 1: Criar App no Meta for Developers

1. Acesse [Meta for Developers](https://developers.facebook.com/)
2. Clique em **My Apps** → **Create App**
3. Selecione **Business** como tipo de app
4. Preencha os detalhes do app
5. Adicione o produto **WhatsApp** ao seu app

#### Passo 2: Configurar WhatsApp Business

1. No painel do WhatsApp, vá para **Getting Started**
2. Copie o **Phone Number ID**
3. Gere um **Access Token** permanente:
   - Clique em **Generate Token**
   - Selecione as permissões: `whatsapp_business_messaging`, `whatsapp_business_management`
   - **Importante:** Use um System User Token para produção (permanente)

```env
WHATSAPP_PHONE_NUMBER_ID="seu-phone-number-id"
WHATSAPP_ACCESS_TOKEN="seu-access-token-permanente"
WHATSAPP_VERIFY_TOKEN="escolha-uma-string-qualquer"
```

#### Passo 3: Configurar Webhook

1. No painel do WhatsApp, vá para **Configuration** → **Webhook**
2. Clique em **Edit**
3. Adicione a URL do webhook:
   ```
   https://seu-dominio.com/api/webhook
   ```
4. Cole o **Verify Token** (o mesmo do `.env`)
5. Clique em **Verify and Save**
6. Inscreva-se nos seguintes campos webhook:
   - `messages`

### Vercel Blob Storage

1. Acesse seu [Vercel Dashboard](https://vercel.com/dashboard)
2. Vá para **Storage** → **Create Database** → **Blob**
3. Crie um novo Blob store
4. Copie o **BLOB_READ_WRITE_TOKEN**

```env
BLOB_READ_WRITE_TOKEN="seu-vercel-blob-token"
```

### App URL

```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Em produção, altere para seu domínio:

```env
NEXT_PUBLIC_APP_URL="https://seu-dominio.com"
```

---

## 💻 Uso

### Primeiro Acesso

1. Acesse `http://localhost:3000`
2. Clique em **Começar Grátis**
3. Crie sua conta ou faça login com Google
4. Configure seu WhatsApp Business em **Dashboard** → **Configurações**

### Criar uma Turma

1. Vá para **Dashboard** → **Turmas**
2. Clique em **Nova Turma**
3. Preencha o nome, descrição e horário
4. Clique em **Criar Turma**

### Adicionar Alunos

1. Vá para **Dashboard** → **Alunos**
2. Clique em **Adicionar Aluno**
3. Preencha nome, telefone (com código do país, ex: `+5511999999999`), nível e turma
4. Clique em **Adicionar**

### Criar e Enviar uma Lição

1. Vá para **Dashboard** → **Lições** → **Nova Lição**
2. Preencha:
   - **Título:** "Lesson 1: Greetings"
   - **Conteúdo:** Use Markdown para formatar
   - **Áudio:** Grave ou faça upload de um áudio explicativo
   - **Exercício:** Defina a pergunta e tipo de resposta (texto/áudio)
3. Selecione a **Turma**
4. Ative **Enviar agora pelo WhatsApp** se quiser enviar imediatamente
5. Clique em **Publicar e Enviar** ou **Salvar Rascunho**

### Corrigir Respostas

1. Vá para **Dashboard** → **Respostas**
2. Visualize as respostas enviadas pelos alunos
3. Clique em **Dar Feedback**
4. Escreva sua correção
5. Clique em **Enviar pelo WhatsApp**
6. Marque como **Corrigido**

---

## 🚢 Deploy

### Deploy na Vercel (Recomendado)

1. **Fork este repositório**

2. **Conecte ao Vercel:**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Importe seu repositório
   - Configure as variáveis de ambiente (todas do `.env`)

3. **Configure o PostgreSQL:**
   - Crie um banco PostgreSQL (Vercel Postgres, Supabase, Railway, etc.)
   - Adicione a `DATABASE_URL` nas variáveis de ambiente

4. **Deploy:**
   ```bash
   git push origin main
   ```

5. **Após o deploy:**
   ```bash
   # Execute as migrations no banco de produção
   npx prisma db push --preview-feature
   ```

6. **Atualize o webhook do WhatsApp:**
   - Vá para o painel do WhatsApp no Meta
   - Atualize a URL do webhook para: `https://seu-app.vercel.app/api/webhook`

### Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm run start

# Linter
npm run lint

# Prisma Studio (GUI do banco)
npx prisma studio

# Reset do banco (cuidado!)
npx prisma migrate reset
```

---

## 📁 Estrutura do Projeto

```
educlass/
├── app/
│   ├── (auth)/           # Rotas de autenticação
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/        # Área logada
│   │   ├── classes/      # Gerenciar turmas
│   │   ├── lessons/      # Criar/editar lições
│   │   ├── responses/    # Ver e corrigir respostas
│   │   ├── settings/     # Configurações
│   │   ├── students/     # Gerenciar alunos
│   │   ├── layout.tsx    # Layout do dashboard
│   │   └── page.tsx      # Dashboard home
│   ├── api/              # API Routes
│   │   ├── auth/         # NextAuth + signup
│   │   ├── classes/      # CRUD turmas
│   │   ├── dashboard/    # Estatísticas
│   │   ├── lessons/      # CRUD lições
│   │   ├── responses/    # CRUD respostas
│   │   ├── settings/     # Configurações
│   │   ├── students/     # CRUD alunos
│   │   ├── upload/       # Upload de áudios
│   │   └── webhook/      # Webhook WhatsApp
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Landing page
├── components/
│   ├── dashboard/        # Componentes do dashboard
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   ├── ui/               # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   ├── tabs.tsx
│   │   ├── table.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   └── audio-recorder.tsx # Gravador de áudio
├── hooks/
│   └── use-toast.ts      # Hook de toast
├── lib/
│   ├── auth.ts           # Configuração NextAuth
│   ├── prisma.ts         # Cliente Prisma
│   ├── utils.ts          # Utilitários
│   └── whatsapp.ts       # Cliente WhatsApp
├── prisma/
│   ├── schema.prisma     # Schema do banco
│   └── seed.ts           # Dados de exemplo
├── types/
│   └── next-auth.d.ts    # Tipos NextAuth
├── .env.example          # Exemplo de variáveis
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Diretrizes

- Siga os padrões de código TypeScript
- Adicione testes quando aplicável
- Atualize a documentação se necessário
- Mantenha commits claros e descritivos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- [Shadcn](https://twitter.com/shadcn) pelos componentes UI
- [Vercel](https://vercel.com) pela plataforma de deploy
- [Meta](https://developers.facebook.com/) pela WhatsApp Cloud API
- Comunidade Next.js e React

---

## 📞 Suporte

Precisa de ajuda? Entre em contato:

- **Email:** suporte@educlass.app
- **GitHub Issues:** [Criar issue](https://github.com/seu-usuario/educlass/issues)
- **Documentação:** [Wiki](https://github.com/seu-usuario/educlass/wiki)

---

<div align="center">

**Feito com ❤️ para professores que transformam vidas**

[⬆ Voltar ao topo](#educlass---ensine-inglês-pelo-whatsapp)

</div>
