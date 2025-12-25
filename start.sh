#!/bin/bash

# Script para rodar o Medical English Learning App localmente

echo "🏥 Medical English Learning App - Setup"
echo "========================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "Por favor, instale o Node.js de: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js encontrado: $(node -v)"
echo "✓ npm encontrado: $(npm -v)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependências instaladas com sucesso!"
    echo ""
    echo "🚀 Iniciando servidor..."
    echo ""
    echo "Após iniciar, acesse no navegador:"
    echo "👉 http://localhost:3000/learn"
    echo ""
    npm run dev
else
    echo "❌ Erro ao instalar dependências"
    exit 1
fi
