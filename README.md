# Paulo Braga - Construção Civil

Site profissional desenvolvido com Next.js, React e Tailwind CSS com componentes shadcn/ui.

## 🚀 Características

- ✅ Design moderno e responsivo (mobile/desktop)
- ✅ Integração direta com WhatsApp para orçamentos
- ✅ Múltiplas seções informativas
- ✅ Botão flutuante do WhatsApp
- ✅ Cores sofisticadas e profissionais
- ✅ Performance otimizada com Next.js 14

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

## ⚙️ Configuração

### WhatsApp
Edite o arquivo `app/page.tsx` e altere o número do WhatsApp:

```typescript
const whatsappNumber = "5511999999999"; // Substitua pelo seu número
```

### Informações de Contato
Edite também no arquivo `app/page.tsx`:
- Telefone
- E-mail
- Localização

### Cores e Estilo
As cores podem ser personalizadas no arquivo `app/globals.css` nas variáveis CSS.

## 📱 Seções do Site

1. **Header** - Navegação fixa com botão de orçamento
2. **Hero** - Seção principal com chamada para ação
3. **Serviços** - Grid com 6 serviços principais
4. **Diferenciais** - Benefícios da empresa
5. **Contato** - Formas de contato (WhatsApp, telefone, e-mail)
6. **CTA Final** - Chamada para ação destacada
7. **Footer** - Rodapé informativo
8. **Botão Flutuante** - WhatsApp fixo no canto inferior direito

## 🎨 Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

## 📄 Licença

Este projeto está sob a licença MIT.

