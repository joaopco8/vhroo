# Script de Deploy para Vercel
# Execute: .\deploy.ps1

Write-Host "🚀 Iniciando deploy do VHORO..." -ForegroundColor Green

# Verificar se está logado no Vercel
Write-Host "`n📋 Verificando login no Vercel..." -ForegroundColor Yellow
vercel whoami 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Você não está logado no Vercel." -ForegroundColor Red
    Write-Host "🔐 Fazendo login..." -ForegroundColor Yellow
    vercel login
}

# Build do projeto
Write-Host "`n🔨 Fazendo build do projeto..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro no build!" -ForegroundColor Red
    exit 1
}

# Deploy
Write-Host "`n🚀 Fazendo deploy..." -ForegroundColor Yellow
Write-Host "💡 Se for a primeira vez, siga as instruções:" -ForegroundColor Cyan
Write-Host "   - Link to existing project? N" -ForegroundColor Cyan
Write-Host "   - Project name: vhoro (ou o nome que preferir)" -ForegroundColor Cyan
Write-Host "   - Directory: . (raiz)" -ForegroundColor Cyan
Write-Host "   - Override settings? N" -ForegroundColor Cyan
Write-Host ""

vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host "`n⚠️  IMPORTANTE: Configure as variáveis de ambiente no Vercel:" -ForegroundColor Yellow
    Write-Host "   1. Acesse: https://vercel.com/dashboard" -ForegroundColor Cyan
    Write-Host "   2. Vá em Settings → Environment Variables" -ForegroundColor Cyan
    Write-Host "   3. Adicione:" -ForegroundColor Cyan
    Write-Host "      - VITE_STRIPE_PUBLISHABLE_KEY" -ForegroundColor White
    Write-Host "      - STRIPE_SECRET_KEY" -ForegroundColor White
    Write-Host "      - STRIPE_WEBHOOK_SECRET" -ForegroundColor White
    Write-Host "      - FRONTEND_URL" -ForegroundColor White
    Write-Host "`n📖 Veja DEPLOY.md para instruções completas" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Erro no deploy!" -ForegroundColor Red
    exit 1
}
