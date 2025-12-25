# 🚀 Guia Rápido de Setup - Educlass

Este guia vai te ajudar a configurar o Educlass em **5 minutos**.

## ⚡ Quick Start

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Banco de Dados

**Opção A: SQLite (mais rápido para testar)**

```bash
# Criar arquivo .env
cp .env.example .env

# Editar .env e usar:
DATABASE_URL="file:./dev.db"
```

No arquivo `prisma/schema.prisma`, altere:

```prisma
datasource db {
  provider = "sqlite"  // era "postgresql"
  url      = env("DATABASE_URL")
}
```

**Opção B: PostgreSQL (recomendado para produção)**

```bash
# Instale PostgreSQL no seu sistema
# Crie um banco chamado "educlass"

# No .env:
DATABASE_URL="postgresql://postgres:senha@localhost:5432/educlass?schema=public"
```

### 3. Gerar Prisma Client e Criar Tabelas

```bash
npx prisma generate
npx prisma db push
```

### 4. Popular com Dados de Exemplo (Opcional)

```bash
npm run db:seed
```

Isso criará:
- 1 professor (email: `teacher@educlass.com`, senha: `demo123`)
- 1 turma: "Turma Iniciante - Seg/Qua 20h"
- 2 alunos de exemplo
- 1 lição de exemplo

### 5. Configurar Variáveis de Ambiente Mínimas

Edite o arquivo `.env`:

```env
# Database (já configurado no passo 2)
DATABASE_URL="file:./dev.db"

# NextAuth (gere uma chave secreta)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="cole-aqui-resultado-do-comando-abaixo"
```

Gere a chave secreta:

```bash
# No Linux/Mac:
openssl rand -base64 32

# No Windows (PowerShell):
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

### 6. Iniciar o Servidor

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

## 🎉 Pronto!

Você agora tem o Educlass rodando localmente!

### Credenciais de Login (se usou seed)

- **Email:** teacher@educlass.com
- **Senha:** demo123

---

## 🔧 Configuração Avançada (Opcional)

### WhatsApp Business API

Para enviar lições pelo WhatsApp, você precisa:

#### 1. Criar App no Meta for Developers

1. Acesse: https://developers.facebook.com/
2. Vá em **My Apps** → **Create App** → **Business**
3. Adicione o produto **WhatsApp**

#### 2. Obter Credenciais

No painel do WhatsApp:

1. **Phone Number ID:**
   - Vá em **Getting Started**
   - Copie o `Phone Number ID`

2. **Access Token:**
   - Clique em **Generate Token**
   - Selecione permissões: `whatsapp_business_messaging`, `whatsapp_business_management`
   - **Importante:** Para produção, gere um System User Token (permanente)

3. **Verify Token:**
   - Escolha qualquer string (ex: `meu-token-secreto-123`)

#### 3. Adicionar ao .env

```env
WHATSAPP_PHONE_NUMBER_ID="seu-phone-number-id"
WHATSAPP_ACCESS_TOKEN="seu-access-token"
WHATSAPP_VERIFY_TOKEN="meu-token-secreto-123"
```

#### 4. Configurar Webhook (após deploy)

Após fazer o deploy (Vercel, etc.):

1. No painel do WhatsApp → **Configuration** → **Webhook**
2. URL: `https://seu-dominio.com/api/webhook`
3. Verify Token: (o mesmo do .env)
4. Inscreva-se em: **messages**

### Google OAuth (Opcional)

1. Acesse: https://console.cloud.google.com/
2. Crie um projeto → **APIs & Services** → **Credentials**
3. **Create Credentials** → **OAuth 2.0 Client ID**
4. Tipo: **Web application**
5. Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

```env
GOOGLE_CLIENT_ID="seu-google-client-id"
GOOGLE_CLIENT_SECRET="seu-google-client-secret"
```

### Vercel Blob Storage (para áudios)

1. Acesse: https://vercel.com/dashboard
2. **Storage** → **Create Database** → **Blob**
3. Copie o token

```env
BLOB_READ_WRITE_TOKEN="seu-vercel-blob-token"
```

---

## 📝 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Iniciar servidor dev

# Banco de Dados
npm run db:push          # Atualizar schema do banco
npm run db:seed          # Popular com dados de exemplo
npm run db:studio        # Abrir Prisma Studio (GUI)

# Build
npm run build            # Criar build de produção
npm start                # Executar build de produção

# Linter
npm run lint             # Verificar código
```

---

## 🐛 Solução de Problemas

### Erro: "PrismaClient is unable to connect"

**Solução:** Verifique se o PostgreSQL está rodando ou se a `DATABASE_URL` está correta.

```bash
# Verificar PostgreSQL (Linux/Mac)
sudo service postgresql status

# Verificar PostgreSQL (Windows)
# Services → PostgreSQL
```

### Erro: "NEXTAUTH_SECRET environment variable not configured"

**Solução:** Gere e adicione a chave ao `.env`:

```bash
openssl rand -base64 32
```

### Erro ao gravar áudio no navegador

**Solução:** 
- Use HTTPS (ou localhost)
- Verifique permissões do navegador (microfone)
- Teste em Chrome/Edge (melhor suporte)

### WhatsApp não está enviando mensagens

**Verificações:**
1. ✅ Credenciais corretas no `.env`?
2. ✅ Webhook configurado e verificado?
3. ✅ Número de telefone do aluno tem código do país? (ex: `+5511999999999`)
4. ✅ Token é permanente (System User Token)?

---

## 🚀 Deploy Rápido na Vercel

```bash
# 1. Instale a Vercel CLI
npm i -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel

# 4. Configure variáveis de ambiente no dashboard
# https://vercel.com/seu-usuario/educlass/settings/environment-variables

# 5. Execute migrations
vercel env pull .env.local
npx prisma db push
```

---

## 📚 Próximos Passos

1. ✅ Configure o WhatsApp Business API
2. ✅ Crie sua primeira turma
3. ✅ Adicione alunos
4. ✅ Crie e envie sua primeira lição
5. ✅ Explore o dashboard e métricas

---

## 💬 Precisa de Ajuda?

- 📖 [README completo](./README.md)
- 🐛 [Reportar bug](https://github.com/seu-usuario/educlass/issues)
- 💡 [Solicitar feature](https://github.com/seu-usuario/educlass/issues/new)

---

**Boa aula! 🎓**
