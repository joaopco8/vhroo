# 🚀 Guia de Migração Stripe para Produção

Este guia detalha todos os passos necessários para migrar o sistema de pagamento do Stripe de **modo teste** para **modo produção**.

---

## ⚠️ IMPORTANTE: Checklist Pré-Migração

Antes de migrar, certifique-se de que:

- [ ] Você tem uma conta Stripe ativada para produção
- [ ] Seu domínio está configurado com HTTPS (obrigatório para Stripe em produção)
- [ ] Você tem acesso ao dashboard do Stripe em modo Live
- [ ] Você criou os produtos e preços em produção no Stripe

---

## 📋 Passo 1: Obter Chaves de Produção

### 1.1 Acesse o Dashboard do Stripe em Modo Live

1. Acesse: https://dashboard.stripe.com
2. **Certifique-se de estar em modo "Live"** (toggle no canto superior direito)
3. Vá em **Developers → API keys**

### 1.2 Obter as Chaves

Você precisará de:

- **Publishable Key** (começa com `pk_live_...`)
- **Secret Key** (começa com `sk_live_...`)

⚠️ **NUNCA compartilhe ou commite a Secret Key no Git!**

---

## 📋 Passo 2: Criar Produtos e Preços em Produção

### 2.1 Criar Produtos

1. No dashboard Stripe (modo Live), vá em **Products**
2. Crie os produtos correspondentes aos seus planos:
   - **PLAN 01** - VHORO CLICK ARCHITECT™ ($1,490/mês)
   - **PLAN 02** - VHORO RETENTION ENGINE™ ($3,490/mês)
   - **PLAN 03** - VHORO ELITE PARTNERSHIP™ (Custom)

### 2.2 Criar Preços (Prices)

Para cada produto, crie um preço recorrente mensal:

- **PLAN 01**: $1,490/mês → Copie o `price_id` (começa com `price_...`)
- **PLAN 02**: $3,490/mês → Copie o `price_id` (começa com `price_...`)

⚠️ **Os Price IDs de teste são diferentes dos de produção!**

---

## 📋 Passo 3: Configurar Variáveis de Ambiente

### 3.1 Criar Arquivo `.env` (se não existir)

Crie um arquivo `.env` na raiz do projeto:

```env
# Stripe Production Keys
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_SUA_CHAVE_AQUI
STRIPE_SECRET_KEY=sk_live_SUA_CHAVE_AQUI
STRIPE_WEBHOOK_SECRET=whsec_SEU_WEBHOOK_SECRET_AQUI

# Frontend URL (seu domínio em produção)
FRONTEND_URL=https://seudominio.com

# Porta do servidor (opcional)
PORT=3000
```

### 3.2 Atualizar `.gitignore`

Certifique-se de que `.env` está no `.gitignore`:

```
.env
.env.local
.env.production
```

---

## 📋 Passo 4: Atualizar Price IDs no Código

### 4.1 Atualizar `src/App.tsx`

Substitua os `priceId` dos planos pelos IDs de produção:

```typescript
// PLAN 01
priceId: "price_SEU_PRICE_ID_PRODUCAO_PLANO_1",

// PLAN 02
priceId: "price_SEU_PRICE_ID_PRODUCAO_PLANO_2",
```

**Localização no código:**
- Linha ~678: PLAN 01
- Linha ~717: PLAN 02

---

## 📋 Passo 5: Configurar Webhook em Produção

### 5.1 Criar Endpoint de Webhook no Stripe

1. No dashboard Stripe (modo Live), vá em **Developers → Webhooks**
2. Clique em **Add endpoint**
3. Configure:
   - **Endpoint URL**: `https://seudominio.com/webhook`
   - **Events to send**: Selecione os eventos necessários:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `invoice.paid`
     - `payment_intent.succeeded`

### 5.2 Obter Webhook Secret

1. Após criar o endpoint, clique nele
2. Na seção **Signing secret**, clique em **Reveal**
3. Copie o secret (começa com `whsec_...`)
4. Adicione no `.env` como `STRIPE_WEBHOOK_SECRET`

---

## 📋 Passo 6: Atualizar Código do Servidor

### 6.1 Verificar `server.js`

O código já está preparado para usar variáveis de ambiente. Certifique-se de que:

- ✅ Usa `process.env.STRIPE_SECRET_KEY` (linha 9)
- ✅ Usa `process.env.STRIPE_WEBHOOK_SECRET` (linha 30)
- ✅ Usa `process.env.FRONTEND_URL` para CORS (linha 20)

### 6.2 Remover Valores Padrão (Opcional mas Recomendado)

Para maior segurança, remova os valores padrão hardcoded:

```javascript
// ❌ ANTES (com fallback para teste)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_...');

// ✅ DEPOIS (sem fallback)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
```

⚠️ **Isso fará o servidor falhar se a variável não estiver configurada, mas é mais seguro.**

---

## 📋 Passo 7: Atualizar Frontend

### 7.1 Verificar `src/App.tsx`

O código já usa variável de ambiente:

```typescript
const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "...");
```

Certifique-se de que `VITE_STRIPE_PUBLISHABLE_KEY` está configurada no `.env`.

### 7.2 Build de Produção

Ao fazer build, as variáveis `VITE_*` são injetadas no código:

```bash
npm run build
```

---

## 📋 Passo 8: Testar em Produção

### 8.1 Teste com Cartão de Teste do Stripe

Mesmo em produção, você pode usar cartões de teste:

- **Sucesso**: `4242 4242 4242 4242`
- **Falha**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0027 6000 3184`

Use qualquer data futura e CVC.

### 8.2 Verificar Webhooks

1. No dashboard Stripe, vá em **Developers → Webhooks**
2. Clique no seu endpoint
3. Veja os eventos sendo recebidos em tempo real
4. Verifique os logs do servidor

---

## 📋 Passo 9: Deploy

### 9.1 Variáveis de Ambiente no Servidor de Produção

Configure as variáveis de ambiente no seu servidor/hosting:

**Vercel:**
```bash
vercel env add VITE_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
```

**Outros serviços:**
- Configure no painel do seu hosting
- Ou use um arquivo `.env` (não commite no Git!)

### 9.2 Build e Deploy

```bash
npm run build
# Deploy conforme sua plataforma
```

---

## 🔒 Segurança em Produção

### Checklist de Segurança

- [ ] ✅ HTTPS obrigatório (Stripe não funciona em HTTP em produção)
- [ ] ✅ Variáveis de ambiente configuradas (não hardcoded)
- [ ] ✅ `.env` no `.gitignore`
- [ ] ✅ Webhook secret configurado corretamente
- [ ] ✅ CORS configurado apenas para seu domínio
- [ ] ✅ Logs não expõem informações sensíveis

---

## 🐛 Troubleshooting

### Erro: "Stripe.js integrations must use HTTPS"

**Solução**: Certifique-se de que seu site está rodando em HTTPS em produção.

### Erro: "Webhook signature verification failed"

**Soluções**:
1. Verifique se o `STRIPE_WEBHOOK_SECRET` está correto
2. Certifique-se de que o webhook está recebendo o body raw (já configurado no código)
3. Verifique se o endpoint está acessível publicamente

### Erro: "Invalid API Key"

**Soluções**:
1. Verifique se está usando as chaves de **produção** (não teste)
2. Verifique se as variáveis de ambiente estão configuradas
3. Reinicie o servidor após alterar `.env`

### Webhooks não chegam

**Soluções**:
1. Use uma ferramenta como **ngrok** para testar localmente:
   ```bash
   ngrok http 3000
   ```
2. Configure o endpoint no Stripe com a URL do ngrok
3. Para produção, certifique-se de que o endpoint está acessível publicamente

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do servidor
2. Verifique os eventos no dashboard do Stripe
3. Consulte a documentação: https://stripe.com/docs

---

## ✅ Checklist Final

Antes de ir para produção, confirme:

- [ ] Chaves de produção configuradas no `.env`
- [ ] Price IDs atualizados no código
- [ ] Webhook configurado e secret copiado
- [ ] HTTPS configurado no domínio
- [ ] Teste realizado com cartão de teste
- [ ] Webhooks sendo recebidos corretamente
- [ ] Variáveis de ambiente configuradas no servidor de produção
- [ ] Build de produção testado localmente

---

**Boa sorte com o lançamento! 🚀**
