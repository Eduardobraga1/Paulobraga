# 🖥️ Guia de Uso do Terminal no Cursor

## Como Abrir o Terminal Integrado

### Atalhos de Teclado
- **Linux**: `Ctrl + '` (Ctrl + aspas simples)
- **Windows**: `Ctrl + '`
- **Mac**: `Cmd + '`

### Pelo Menu
`View > Terminal` ou `Terminal > New Terminal`

---

## Comandos Úteis para Este Projeto

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm run start

# Verificar erros de lint
npm run lint
```

### Git
```bash
# Ver status
git status

# Ver diferenças
git diff

# Ver histórico
git log --oneline

# Ver branch atual
git branch
```

### Navegação
```bash
# Ver diretório atual
pwd

# Listar arquivos
ls -la

# Entrar em pasta
cd app/

# Voltar para raiz do projeto
cd /workspace
```

### Visualização de Arquivos
```bash
# Ver conteúdo de arquivo
cat package.json

# Ver primeiras linhas
head README.md

# Ver últimas linhas
tail -f arquivo.log
```

---

## Ambiente Configurado

✅ **Shell**: Bash  
✅ **Node.js**: v22.21.1  
✅ **NPM**: 10.9.4  
✅ **Diretório**: /workspace  

---

## Dicas Úteis

1. **Múltiplos Terminais**: Clique no `+` no painel do terminal para abrir múltiplas abas
2. **Dividir Terminal**: Clique no ícone de divisão para ter terminais lado a lado
3. **Limpar Terminal**: Digite `clear` ou use `Ctrl + L`
4. **Histórico**: Use as setas ↑ ↓ para navegar no histórico de comandos
5. **Auto-completar**: Pressione `Tab` para auto-completar nomes de arquivos/pastas

---

## Claude Terminal (Este Chat)

Você também pode pedir ao Claude (este chat) para executar comandos! Por exemplo:

- "Execute npm install"
- "Rode o servidor de desenvolvimento"
- "Verifique o status do git"
- "Liste os arquivos em app/"

O Claude executará os comandos para você e mostrará os resultados.

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (porta 3000) |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Verifica erros de código |

---

**Nota**: O terminal integrado do Cursor funciona como qualquer terminal bash normal. Você tem acesso completo ao sistema!
