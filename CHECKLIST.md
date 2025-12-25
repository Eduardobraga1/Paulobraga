# ✅ Educlass - Checklist de Verificação

Use este checklist para verificar se tudo está funcionando corretamente.

## 📦 Instalação

- [x] Node.js 18+ instalado
- [x] Dependências instaladas (`npm install`)
- [x] Prisma Client gerado (`npx prisma generate`)
- [ ] Arquivo `.env` criado (copie `.env.example`)
- [ ] Variáveis mínimas configuradas:
  - [ ] `DATABASE_URL`
  - [ ] `NEXTAUTH_URL`
  - [ ] `NEXTAUTH_SECRET`

## 🗄️ Banco de Dados

- [ ] PostgreSQL instalado OU usando SQLite
- [ ] Banco de dados criado
- [ ] Migrations executadas (`npx prisma db push`)
- [ ] (Opcional) Seed executado (`npm run db:seed`)

## 🔐 Autenticação

- [ ] NextAuth configurado
- [ ] Página de login acessível (`/auth/login`)
- [ ] Página de cadastro acessível (`/auth/signup`)
- [ ] (Opcional) Google OAuth configurado:
  - [ ] `GOOGLE_CLIENT_ID`
  - [ ] `GOOGLE_CLIENT_SECRET`

## 🎨 Interface

- [ ] Landing page carregando (`/`)
- [ ] Tema claro/escuro funcionando
- [ ] Design responsivo em mobile
- [ ] Ícones carregando corretamente

## 🏠 Dashboard

Faça login e verifique:

- [ ] Dashboard carregando (`/dashboard`)
- [ ] Sidebar visível com navegação
- [ ] Header com avatar e menu
- [ ] Cards de métricas exibindo (mesmo que zerados)

### Páginas do Dashboard

- [ ] **Lições** (`/dashboard/lessons`)
  - [ ] Lista vazia ou com lições (se fez seed)
  - [ ] Botão "Nova Lição" funcionando
  
- [ ] **Nova Lição** (`/dashboard/lessons/new`)
  - [ ] Form carregando
  - [ ] Editor de texto funcionando
  - [ ] Preview em tempo real
  - [ ] Gravador de áudio carregando
  - [ ] Botão de gravação funciona (pede permissão)
  - [ ] Upload de áudio funciona
  - [ ] Opções de exercício (texto/áudio)
  - [ ] Select de turmas carregando
  
- [ ] **Alunos** (`/dashboard/students`)
  - [ ] Lista de alunos carregando
  - [ ] Modal de adicionar aluno abre
  - [ ] Form de adicionar funciona
  
- [ ] **Turmas** (`/dashboard/classes`)
  - [ ] Lista de turmas carregando
  - [ ] Modal de criar turma abre
  - [ ] Form de criar turma funciona
  
- [ ] **Respostas** (`/dashboard/responses`)
  - [ ] Lista de respostas carregando (vazia se sem dados)
  - [ ] Layout correto
  
- [ ] **Configurações** (`/dashboard/settings`)
  - [ ] Form de WhatsApp carregando
  - [ ] Campos de input funcionando
  - [ ] Instruções visíveis

## 🔌 APIs

Teste as APIs (use Postman, Insomnia ou browser):

### Autenticação
- [ ] `GET /api/auth/signin` - Página de login
- [ ] `POST /api/auth/signup` - Criar conta

### Dashboard
- [ ] `GET /api/dashboard/stats` - Retorna estatísticas

### Turmas
- [ ] `GET /api/classes` - Lista turmas
- [ ] `POST /api/classes` - Cria turma

### Alunos
- [ ] `GET /api/students` - Lista alunos
- [ ] `POST /api/students` - Cria aluno

### Lições
- [ ] `GET /api/lessons` - Lista lições
- [ ] `POST /api/lessons` - Cria lição
- [ ] `GET /api/lessons/[id]` - Busca lição
- [ ] `DELETE /api/lessons/[id]` - Deleta lição

### Respostas
- [ ] `GET /api/responses` - Lista respostas

## 📱 WhatsApp Integration (Opcional)

Configure apenas se for testar o envio real:

- [ ] Conta no Meta for Developers criada
- [ ] App criado com produto WhatsApp
- [ ] Phone Number ID obtido
- [ ] Access Token (permanente) obtido
- [ ] Variáveis de ambiente configuradas:
  - [ ] `WHATSAPP_PHONE_NUMBER_ID`
  - [ ] `WHATSAPP_ACCESS_TOKEN`
  - [ ] `WHATSAPP_VERIFY_TOKEN`
- [ ] Webhook configurado (após deploy)
- [ ] Webhook verificado pelo Meta

### Testes WhatsApp
- [ ] Lição enviada com sucesso
- [ ] Mensagem recebida no WhatsApp do aluno
- [ ] Áudio enviado corretamente (se incluído)
- [ ] Resposta do aluno recebida via webhook
- [ ] Resposta aparece no dashboard

## ☁️ Storage (Opcional)

Configure apenas se for usar upload de áudio:

- [ ] Conta Vercel criada
- [ ] Blob Storage criado
- [ ] Token obtido
- [ ] Variável configurada:
  - [ ] `BLOB_READ_WRITE_TOKEN`

### Testes Storage
- [ ] Upload de áudio funciona
- [ ] URL do áudio gerada
- [ ] Áudio acessível via URL

## 🧪 Testes Funcionais

### Fluxo Completo (sem WhatsApp):

1. [ ] Criar conta
2. [ ] Fazer login
3. [ ] Criar uma turma
4. [ ] Adicionar um aluno
5. [ ] Criar uma lição
6. [ ] Salvar como rascunho
7. [ ] Editar lição
8. [ ] Visualizar preview
9. [ ] Ver lista de lições
10. [ ] Deletar lição

### Fluxo Completo (com WhatsApp):

1. [ ] Configurar WhatsApp em Settings
2. [ ] Criar turma e alunos
3. [ ] Criar lição com áudio
4. [ ] Marcar "Enviar agora"
5. [ ] Verificar envio (logs)
6. [ ] Receber mensagem no WhatsApp
7. [ ] Aluno responde (texto ou áudio)
8. [ ] Resposta aparece em Dashboard → Respostas
9. [ ] Dar feedback
10. [ ] Feedback enviado pelo WhatsApp
11. [ ] Marcar como corrigido

## 🚀 Deploy (Opcional)

Se for fazer deploy:

- [ ] Repositório Git criado
- [ ] Código commitado
- [ ] Conta Vercel criada
- [ ] Projeto importado no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Build executado com sucesso
- [ ] Site acessível via URL
- [ ] Database configurado (PostgreSQL)
- [ ] Migrations executadas no banco de produção
- [ ] WhatsApp webhook atualizado para URL de produção

## 🐛 Troubleshooting

Se algo não funcionar:

### Erro de Build/Instalação
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro Prisma
```bash
# Regenerar cliente
npx prisma generate

# Recriar banco (CUIDADO: apaga dados!)
npx prisma db push --force-reset
```

### Erro de Autenticação
- [ ] Verificar `NEXTAUTH_SECRET` está definido
- [ ] Verificar `NEXTAUTH_URL` está correto
- [ ] Limpar cookies do navegador

### Erro de WhatsApp
- [ ] Verificar credenciais estão corretas
- [ ] Verificar token não expirou
- [ ] Verificar webhook está acessível publicamente
- [ ] Verificar logs do Meta for Developers

### Erro de Upload
- [ ] Verificar `BLOB_READ_WRITE_TOKEN` está correto
- [ ] Verificar permissões do navegador (microfone)
- [ ] Usar HTTPS (ou localhost)

## 📊 Checklist Final

### Mínimo para rodar localmente:
- [x] Instalação completa
- [ ] `.env` configurado (mínimo: DATABASE, NEXTAUTH)
- [ ] Banco criado e migrado
- [ ] App rodando em `localhost:3000`
- [ ] Login funcionando
- [ ] Dashboard acessível

### Para funcionalidade completa:
- [ ] WhatsApp configurado
- [ ] Storage configurado
- [ ] Turmas e alunos criados
- [ ] Lições sendo enviadas
- [ ] Respostas sendo recebidas

### Para produção:
- [ ] Deploy na Vercel
- [ ] PostgreSQL configurado
- [ ] Todas integrações configuradas
- [ ] Webhook funcionando
- [ ] SSL/HTTPS ativo
- [ ] Domínio personalizado (opcional)

---

## ✅ Status Final

Marque quando tudo estiver funcionando:

- [ ] ✅ Instalação completa
- [ ] ✅ Autenticação funcionando
- [ ] ✅ Dashboard acessível
- [ ] ✅ CRUD de turmas/alunos/lições funcionando
- [ ] ✅ Preview de lições funcionando
- [ ] ✅ Gravador de áudio funcionando
- [ ] ✅ (Opcional) WhatsApp enviando mensagens
- [ ] ✅ (Opcional) Webhook recebendo respostas
- [ ] ✅ (Opcional) Deploy em produção

---

**Tudo funcionando? Parabéns! 🎉**

Agora você tem um sistema completo de ensino de inglês via WhatsApp!

Próximos passos:
1. Adicione seus alunos reais
2. Crie suas primeiras lições
3. Comece a ensinar!

**Boa aula! 🎓📚**
