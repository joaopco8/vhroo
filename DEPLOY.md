# 🚀 Guia de Deploy - VHORO

Este guia explica como fazer deploy do projeto no Vercel.

---

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Git configurado (GitHub, GitLab ou Bitbucket)
3. Projeto commitado no repositório

---

## 🔧 Passo 1: Preparar o Projeto

### 1.1 Verificar Build

Teste o build localmente:

```bash
npm run build
```

Se funcionar, está pronto para deploy.

---

## 📤 Passo 2: Deploy no Vercel

### Opção A: Via CLI (Recomendado)

1. **Instalar Vercel CLI** (se ainda não tiver):

```bash
npm i -g vercel
```

2. **Login no Vercel**:

```bash
vercel login
```

3. **Deploy**:

```bash
vercel
```

Siga as instruções:
- Link to existing project? **N** (primeira vez)
- Project name: **vhoro** (ou o nome que preferir)
- Directory: **.** (raiz)
- Override settings? **N**

4. **Deploy de Produção**:

```bash
vercel --prod
```

### Opção B: Via Dashboard (Mais Fácil)

1. Acesse: https://vercel.com/new
2. Conecte seu repositório (GitHub/GitLab/Bitbucket)
3. Configure o projeto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Clique em **Deploy**

---

## 🔐 Passo 3: Configurar Variáveis de Ambiente

### 3.1 No Dashboard do Vercel

1. Vá em **Settings → Environment Variables**
2. Adicione as seguintes variáveis:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_SUA_CHAVE_PUBLICA_AQUI

STRIPE_SECRET_KEY=sk_live_SUA_CHAVE_SECRETA_AQUI

STRIPE_WEBHOOK_SECRET=whsec_SEU_WEBHOOK_SECRET_AQUI

FRONTEND_URL=https://seu-dominio.vercel.app
```

### 3.2 Via CLI

```bash
vercel env add VITE_STRIPE_PUBLISHABLE_KEY
# Cole sua chave pública do Stripe (pk_live_...)

vercel env add STRIPE_SECRET_KEY
# Cole sua chave secreta do Stripe (sk_live_...)

vercel env add STRIPE_WEBHOOK_SECRET
# Cole seu webhook secret do Stripe (whsec_...)

vercel env add FRONTEND_URL
# Cole: https://seu-dominio.vercel.app (ou o domínio que você configurar)
```

**Importante**: Selecione **Production**, **Preview** e **Development** para cada variável.

---

## 🔗 Passo 4: Configurar Webhook no Stripe

1. Acesse: https://dashboard.stripe.com/webhooks (modo **Live**)
2. Clique em **Add endpoint**
3. Configure:
   - **Endpoint URL**: `https://seu-dominio.vercel.app/webhook`
   - **Events to send**: Selecione:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `invoice.paid`
     - `payment_intent.succeeded`
4. Clique em **Add endpoint**
5. Copie o **Signing secret** (começa com `whsec_...`)
6. Atualize a variável `STRIPE_WEBHOOK_SECRET` no Vercel com esse valor

---

## 🌐 Passo 5: Configurar Domínio Personalizado (Opcional)

1. No Vercel, vá em **Settings → Domains**
2. Adicione seu domínio
3. Siga as instruções para configurar DNS
4. Atualize `FRONTEND_URL` com o novo domínio
5. Atualize o webhook no Stripe com a nova URL

---

## ✅ Passo 6: Verificar Deploy

1. Acesse sua URL do Vercel
2. Teste o checkout com um cartão de teste:
   - **Número**: `4242 4242 4242 4242`
   - **Data**: Qualquer data futura
   - **CVC**: Qualquer 3 dígitos
3. Verifique os logs no Vercel: **Deployments → [seu deploy] → Functions**
4. Verifique os webhooks no Stripe: **Developers → Webhooks → [seu endpoint] → Recent events**

---

## 🔄 Atualizações Futuras

Para fazer deploy de atualizações:

```bash
git add .
git commit -m "Descrição da atualização"
git push
```

O Vercel fará deploy automaticamente se estiver conectado ao Git.

Ou manualmente:

```bash
vercel --prod
```

---

## 🐛 Troubleshooting

### Erro: "Module not found"

- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente e commit o `package-lock.json`

### Erro: "Function timeout"

- Verifique os logs no Vercel
- Aumente o timeout nas configurações do Vercel (Settings → Functions)

### Webhooks não funcionam

1. Verifique se a URL do webhook está correta no Stripe
2. Verifique se `STRIPE_WEBHOOK_SECRET` está configurado corretamente
3. Verifique os logs no Vercel para ver erros

### Build falha

1. Teste localmente: `npm run build`
2. Verifique os logs de build no Vercel
3. Certifique-se de que todas as variáveis de ambiente estão configuradas

---

## 📞 Suporte

- Documentação Vercel: https://vercel.com/docs
- Documentação Stripe: https://stripe.com/docs

---

**Deploy concluído! 🎉**
