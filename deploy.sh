#!/bin/bash

# 🚀 Script para Deploy do Site Paulo Braga na Vercel
# Execute este script para preparar e fazer o deploy

echo "🏗️  Site Paulo Braga - Construção Civil"
echo "=========================================="
echo ""

# Verificar se está na pasta correta
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script dentro da pasta /Users/eduardobraga/PB"
    exit 1
fi

echo "✅ Pasta correta encontrada!"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

echo ""
echo "🔨 Testando build de produção..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build bem-sucedido!"
    echo ""
    echo "🎉 Seu site está pronto para deploy!"
    echo ""
    echo "PRÓXIMOS PASSOS:"
    echo "================"
    echo ""
    echo "1. Criar conta no GitHub (se não tiver): https://github.com"
    echo ""
    echo "2. Subir para o GitHub (escolha uma opção):"
    echo ""
    echo "   OPÇÃO A - GitHub Desktop (Mais Fácil):"
    echo "   - Baixe: https://desktop.github.com"
    echo "   - Abra e clique em 'Add Local Repository'"
    echo "   - Selecione esta pasta: /Users/eduardobraga/PB"
    echo "   - Clique em 'Publish repository'"
    echo ""
    echo "   OPÇÃO B - Terminal (Para usuários avançados):"
    echo "   - Execute: git init"
    echo "   - Execute: git add ."
    echo "   - Execute: git commit -m 'Primeiro commit'"
    echo "   - Crie um repositório no GitHub e siga as instruções"
    echo ""
    echo "3. Deploy na Vercel:"
    echo "   - Acesse: https://vercel.com"
    echo "   - Faça login com sua conta do GitHub"
    echo "   - Clique em 'Import Project'"
    echo "   - Selecione o repositório 'PB'"
    echo "   - Clique em 'Deploy'"
    echo ""
    echo "4. Aguarde 2-3 minutos e seu site estará no ar! 🎉"
    echo ""
    echo "📱 O site terá um endereço tipo: paulo-braga.vercel.app"
    echo ""
    echo "Leia o arquivo COMO-PUBLICAR.md para mais detalhes!"
    echo ""
else
    echo ""
    echo "❌ Erro no build. Verifique os erros acima."
    echo ""
    echo "Tente executar 'npm run dev' para ver os erros em detalhes."
fi

