# 📸 Imagens do Site Paulo Braga - Construção Civil

## ✅ Imagens Profissionais Incluídas

O site agora conta com imagens profissionais e de alta qualidade do setor de construção civil.

### 🏠 Seção Hero (Principal)
- **Imagem grande de destaque** mostrando construção em andamento
- Posicionada ao lado do texto principal
- Tamanho: 400px (mobile) / 500px (desktop)

### 🔧 Seção de Serviços (6 cards)
Cada serviço agora tem uma imagem específica:

1. **Construção Residencial** - Casa moderna
2. **Construção Comercial** - Edifício corporativo
3. **Reformas e Ampliações** - Obra em andamento
4. **Manutenção Predial** - Trabalhador em ação
5. **Acabamentos** - Detalhes internos
6. **Projetos Personalizados** - Plantas e projetos

**Efeitos visuais:**
- Zoom suave ao passar o mouse
- Gradiente escuro na parte inferior
- Ícone do serviço sobre a imagem

### 🏗️ Galeria de Projetos (4 imagens)
Seção exclusiva mostrando:

1. **Obra em Execução** - Construção ativa
2. **Estrutura** - Estrutura de concreto
3. **Planejamento** - Plantas arquitetônicas
4. **Projeto Finalizado** - Casa moderna entregue

**Efeitos interativos:**
- Hover com zoom e escurecimento
- Texto descritivo aparece ao passar o mouse
- Layout em grid responsivo (1 col mobile, 4 cols desktop)

---

## 🎨 Características Técnicas

### Next.js Image Optimization
- Uso do componente `<Image>` do Next.js
- Carregamento otimizado e lazy loading automático
- Imagens responsivas para diferentes tamanhos de tela

### Performance
- Imagens do Unsplash otimizadas (formato WebP automático)
- Parâmetros: `q=80&w=800-1200&auto=format&fit=crop`
- Primeira imagem (Hero) com `priority` para carregamento imediato

### Responsividade
- Desktop: Imagens grandes e em grid
- Mobile: Imagens adaptadas e empilhadas
- Transições suaves em todos os tamanhos

---

## 🔄 Como Substituir as Imagens

Se quiser usar suas próprias fotos de obras:

### Opção 1: Usar imagens locais

1. Crie a pasta `public/images/` no projeto
2. Coloque suas fotos lá
3. No arquivo `app/page.tsx`, substitua as URLs:

```typescript
// De:
image: "https://images.unsplash.com/photo-..."

// Para:
image: "/images/sua-foto.jpg"
```

### Opção 2: Usar outro serviço de imagens

1. Faça upload das fotos em um serviço (ex: Cloudinary, ImgBB)
2. Atualize o `next.config.js` para permitir o domínio:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'seu-dominio.com',
      port: '',
      pathname: '/**',
    },
  ],
}
```

3. Substitua as URLs no `app/page.tsx`

---

## 📱 Navegação Atualizada

A navegação no header agora inclui:
- ✅ Serviços
- ✅ **Projetos** (nova seção)
- ✅ Diferenciais
- ✅ Contato

---

## 🎯 Benefícios das Imagens

✅ **Visual profissional** - Site mais atraente e confiável
✅ **Credibilidade** - Mostra o tipo de trabalho realizado
✅ **Engajamento** - Mantém o visitante interessado
✅ **Conversão** - Ajuda a gerar mais orçamentos
✅ **SEO** - Alt texts melhoram o posicionamento no Google

---

## 🚀 Resultado Final

O site agora tem:
- **1 imagem Hero** grande e impactante
- **6 imagens de serviços** com overlay e efeitos
- **4 imagens na galeria** de projetos
- **Total: 11 imagens profissionais** de construção civil

Todas com carregamento otimizado, efeitos modernos e totalmente responsivas! 🎉

