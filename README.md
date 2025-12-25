# 🏥 Medical English Learning App

## 🚀 Como Rodar no Seu Computador (Mac)

### **PASSO 1: Baixar os arquivos**

Você precisa ter os arquivos do projeto no seu Mac. Se você está usando o Cursor com workspace remoto, você precisa:

1. **Salvar/baixar** o projeto completo do Cursor para uma pasta local no seu Mac

OU

2. **Clonar** do repositório git (se estiver versionado)

---

### **PASSO 2: Abrir o Terminal no Mac**

1. Abra o **Terminal** (Aplicativos → Utilitários → Terminal)
2. Navegue até a pasta do projeto:

```bash
cd /caminho/para/a/pasta/do/projeto
```

---

### **PASSO 3: Instalar dependências**

No terminal, execute:

```bash
npm install
```

Aguarde a instalação completar (pode demorar 1-2 minutos).

---

### **PASSO 4: Iniciar o servidor**

```bash
npm run dev
```

Você verá algo como:

```
✓ Ready in 1s
- Local:    http://localhost:3000
```

---

### **PASSO 5: Abrir no navegador**

Abra seu navegador e acesse:

```
http://localhost:3000/learn
```

---

## 📁 Estrutura do Projeto

```
workspace/
├── app/
│   ├── page.tsx              (Home)
│   ├── learn/page.tsx        (Dashboard principal)
│   ├── lesson/[id]/page.tsx  (Página de lição)
│   └── layout.tsx
├── components/
│   ├── exercises/            (4 tipos de exercícios)
│   ├── LessonView.tsx
│   └── ui/
├── lib/
│   ├── data/                 (30 lições + exercícios)
│   └── contexts/             (Sistema de progresso)
└── package.json
```

---

## ✅ Requisitos

- Node.js 18+ instalado
- npm ou yarn

---

## 🎯 URLs do App

Depois de rodar `npm run dev`:

- 🏠 **Home**: `http://localhost:3000`
- 📚 **Dashboard**: `http://localhost:3000/learn` ← **COMECE AQUI**
- 🎮 **Lição exemplo**: `http://localhost:3000/lesson/anatomy-1`
- 🔍 **Ver todas**: `http://localhost:3000/test-lessons`

---

## 🆘 Problemas?

### Erro: "npm: command not found"
- Você precisa instalar o Node.js: https://nodejs.org/

### Erro: "Port 3000 is in use"
- Outro app está usando a porta. O Next.js tentará usar 3001 automaticamente.

### Erro ao instalar dependências
- Tente: `rm -rf node_modules package-lock.json && npm install`

---

## 📊 Conteúdo do App

- ✅ **30 lições** (5 módulos × 6 lições)
- ✅ **270+ exercícios** interativos
- ✅ **4 tipos** de exercícios funcionando
- ✅ **Sistema de XP** e progressão
- ✅ **5 corações** (vidas)
- ✅ **Progresso salvo** no navegador

---

## 🎮 Como Usar

1. Acesse `/learn`
2. Clique em "Começar Lição" 
3. Complete os exercícios
4. Ganhe XP e desbloqueie novas lições!

**Divirta-se aprendendo! 🏥📚**
