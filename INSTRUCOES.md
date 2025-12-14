## 🚀 Como executar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o projeto em modo desenvolvimento
```bash
npm run dev
```

### 3. Abrir no navegador
Acesse: http://localhost:3000

---

## ⚙️ Configurações Importantes

### 📱 Configurar o número do WhatsApp

Edite o arquivo `app/page.tsx` na linha 60:

```typescript
const whatsappNumber = "5511999999999"; // MUDE AQUI para seu número
```

**Formato do número:**
- Código do país (55 para Brasil)
- Código de área (11, 21, etc)
- Número do celular com 9 dígitos

**Exemplo:** 5511987654321

### 📧 Atualizar informações de contato

No arquivo `app/page.tsx`, procure pela seção de contato e atualize:

**Telefone** (linha ~224):
```typescript
<CardDescription className="text-base">
  (11) 9999-9999  // MUDE AQUI
</CardDescription>
```

**E-mail** (linha ~236):
```typescript
<CardDescription className="text-base">
  contato@construcao.com  // MUDE AQUI
</CardDescription>
```

**Localização** (linha ~251):
```typescript
<CardDescription>
  Atendemos toda a região metropolitana  // MUDE AQUI
</CardDescription>
```

### 🎨 Personalizar cores

Edite o arquivo `app/globals.css` para mudar o esquema de cores:

```css
--primary: 24 73% 53%;  /* Cor laranja principal */
```

---

## 🌐 Deploy

### Vercel (Recomendado)
1. Faça push do código para o GitHub
2. Acesse https://vercel.com
3. Importe o repositório
4. Deploy automático! ✨

### Outros servidores
```bash
npm run build
npm start
```

---

## 📱 Recursos Incluídos

✅ Header com navegação fixa
✅ Seção Hero com destaque
✅ 6 serviços de construção civil
✅ Diferenciais da empresa
✅ Seção de contato completa
✅ Botão flutuante do WhatsApp
✅ Design 100% responsivo
✅ Cores profissionais (laranja/cinza)
✅ Integração direta com WhatsApp
✅ Ícones profissionais (Lucide)

---

## 🆘 Problemas?

Se encontrar erros ao instalar:
```bash
rm -rf node_modules package-lock.json
npm install
```


