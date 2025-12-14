# 🚀 Como Colocar o Site Paulo Braga no Ar

## Opção 1: Vercel (RECOMENDADO - Mais Fácil) ⭐

A Vercel é gratuita e perfeita para Next.js. Deploy em 5 minutos!

### Passo a Passo:

**1. Criar conta no GitHub (se não tiver)**
- Acesse: https://github.com
- Clique em "Sign up" e crie sua conta gratuita

**2. Subir o projeto para o GitHub**

No terminal, dentro da pasta do projeto:

```bash
cd /Users/eduardobraga/PB

# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Site Paulo Braga - Construção Civil"

# Criar repositório no GitHub e conectar
# (Você precisará criar o repositório no site do GitHub primeiro)
```

**Ou use o GitHub Desktop (mais fácil):**
- Baixe: https://desktop.github.com
- Abra o app e faça "Add Local Repository"
- Selecione a pasta `/Users/eduardobraga/PB`
- Clique em "Publish repository"

**3. Deploy na Vercel**

1. Acesse: https://vercel.com
2. Clique em "Sign Up" e use sua conta do GitHub
3. Clique em "Import Project"
4. Selecione o repositório "PB" (ou nome que você deu)
5. Clique em "Deploy"

✅ **Pronto!** Em 2-3 minutos seu site estará no ar com um domínio tipo:
`paulo-braga.vercel.app`

---

## Opção 2: Netlify (Alternativa Gratuita)

Também muito boa e gratuita:

1. Acesse: https://netlify.com
2. Faça login com GitHub
3. "New site from Git"
4. Selecione o repositório
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

---

## Opção 3: Servidor Próprio (VPS)

Se você tem um servidor ou VPS:

### A. Preparar o projeto para produção:

```bash
cd /Users/eduardobraga/PB
npm run build
```

### B. No servidor (Linux):

```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Copiar projeto para o servidor (via FTP ou SCP)
# Depois:
cd /caminho/do/projeto
npm install
npm run build
npm start
```

O site rodará na porta 3000. Use Nginx para configurar o domínio.

---

## 🌐 Domínio Personalizado

Depois do deploy, você pode adicionar seu próprio domínio:

### Na Vercel:
1. Vá em "Settings" → "Domains"
2. Adicione seu domínio (ex: `paulobraga.com.br`)
3. Configure os DNS no Registro.br ou onde comprou o domínio:

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

---

## ✅ Checklist Antes do Deploy

Antes de colocar no ar, confira:

- ✅ Número do WhatsApp configurado: `5521975025882` ✅
- ✅ Imagens carregando corretamente
- ✅ Teste local funcionando: `npm run dev`
- [ ] E-mail de contato atualizado (se quiser mudar)
- [ ] Informações de localização corretas

---

## 🆘 Solução de Problemas

### Erro de build na Vercel?

Verifique se tem o arquivo `.gitignore` correto:
```
node_modules/
.next/
.env*.local
```

### Imagens não aparecem?

Certifique-se que o `next.config.js` está configurado:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

---

## 📱 Depois do Deploy

Quando o site estiver no ar:

1. **Teste no celular** - Acesse pelo WhatsApp e teste os botões
2. **Compartilhe o link** - Envie para clientes
3. **Google My Business** - Adicione o link lá
4. **Redes sociais** - Coloque no Instagram, Facebook

---

## 💰 Custos

- **Vercel/Netlify**: GRÁTIS (100% gratuito para sites pequenos)
- **Domínio próprio**: R$ 40-60/ano no Registro.br
- **Hospedagem**: Não precisa pagar nada com Vercel/Netlify!

---

## 🚀 Recomendação Final

**Use a Vercel!** É:
- ✅ Gratuita
- ✅ Super rápida
- ✅ Certificado SSL automático (HTTPS)
- ✅ Deploy automático quando você atualizar o código
- ✅ Perfeita para Next.js

**Link: https://vercel.com** 

Quer que eu crie os comandos git para você começar o deploy? 😊

