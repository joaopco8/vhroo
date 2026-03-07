# Configuração do Stripe

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Stripe Keys (obtenha em https://dashboard.stripe.com/test/apikeys)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_seu_publishable_key_aqui
STRIPE_SECRET_KEY=sk_test_seu_secret_key_aqui
STRIPE_WEBHOOK_SECRET=whsec_18c57592319b39032f4a90014b168fd1c5e6b45675ac32db8d256ee87540c002

# API URL
VITE_API_URL=http://localhost:3001

# Server Port
PORT=3001
```

## IDs de Produtos e Preços

- **Produto ID**: `prod_U5rSVIjWdmUnFn`
- **Plano $1,490**: `price_1T7fjMFjJxHsNvNGrMCie0NI`
- **Plano $3,490**: `price_1T7fjbFjJxHsNvNGS0VfkIlF`

## Como Rodar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar o servidor backend (em um terminal):**
   ```bash
   npm run server
   ```

3. **Rodar o frontend (em outro terminal):**
   ```bash
   npm run dev
   ```

## Configuração do Webhook no Stripe

1. Acesse https://dashboard.stripe.com/test/webhooks
2. Clique em "Add endpoint"
3. URL do endpoint: `http://localhost:3001/api/webhook` (ou sua URL de produção)
4. Selecione os eventos:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
5. Copie o "Signing secret" e adicione no `.env` como `STRIPE_WEBHOOK_SECRET`

## Fluxo de Pagamento

1. Usuário clica em "DOMINATE THE CLICK" ou "SCALE MY REACH" na seção de pricing
2. Frontend cria uma sessão de checkout via `/api/create-checkout-session`
3. Usuário é redirecionado para o checkout do Stripe
4. Após pagamento bem-sucedido, usuário é redirecionado para `/success`
5. Webhook confirma o pagamento no backend
