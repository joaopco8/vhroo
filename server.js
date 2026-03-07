import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

// Middleware para logar todas as requisições
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', process.env.FRONTEND_URL].filter(Boolean),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'stripe-signature']
}));

// IMPORTANTE: Webhooks devem ser processados ANTES do express.json()
// porque precisam do corpo raw para verificação de assinatura
const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  console.log('=== WEBHOOK RECEBIDO ===');
  console.log('Path:', req.path);
  console.log('Headers stripe-signature:', sig ? 'Presente' : 'Ausente');
  console.log('Content-Type:', req.headers['content-type']);
  console.log('Body type:', typeof req.body);
  console.log('Body is Buffer:', Buffer.isBuffer(req.body));

  let event;

  try {
    if (!sig) {
      throw new Error('Missing stripe-signature header');
    }

    if (!Buffer.isBuffer(req.body)) {
      console.error('ERRO: Body não é um Buffer. Tipo:', typeof req.body);
      throw new Error('Webhook body must be raw buffer for signature verification');
    }

    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    console.log('✅ Webhook verificado com sucesso. Tipo:', event.type);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    console.error('Erro completo:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('✅ Pagamento confirmado:', session.id);
      console.log('Customer:', session.customer);
      console.log('Amount:', session.amount_total);
      // Aqui você pode salvar no banco de dados, enviar email, etc.
      break;
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      console.log('✅ Assinatura criada/atualizada:', subscription.id);
      console.log('Status:', subscription.status);
      break;
    default:
      console.log(`ℹ️  Evento não tratado: ${event.type}`);
  }

  res.json({ received: true });
};

// Rotas de webhook - devem processar raw body
app.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);
app.post('/api/webhook', express.raw({ type: 'application/json' }), handleWebhook);

// Middleware JSON para outras rotas (DEPOIS dos webhooks)
app.use(express.json());
app.use(express.static('dist'));

// Criar sessão de checkout
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    console.log('=== REQUISIÇÃO RECEBIDA ===');
    console.log('Body:', req.body);
    console.log('Headers:', req.headers);
    
    const { priceId } = req.body;
    
    console.log('Criando sessão de checkout com priceId:', priceId);
    console.log('Origin:', req.headers.origin);

    if (!priceId) {
      return res.status(400).json({ error: 'priceId é obrigatório' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'http://localhost:3000'}/#pricing`,
    });

    console.log('Sessão criada - ID:', session.id);
    console.log('Sessão criada - URL:', session.url);
    console.log('Tipo de session.url:', typeof session.url);
    console.log('Sessão completa (primeiros campos):', {
      id: session.id,
      url: session.url,
      mode: session.mode,
      status: session.status,
      payment_status: session.payment_status
    });
    
    // Garantir que sempre temos uma URL
    let checkoutUrl = session.url;
    
    // Se não tiver URL, construir manualmente usando o ID da sessão
    if (!checkoutUrl) {
      console.log('URL não encontrada, construindo manualmente...');
      checkoutUrl = `https://checkout.stripe.com/c/pay/${session.id}`;
    }

    const responseData = { 
      id: session.id, 
      url: checkoutUrl 
    };
    
    console.log('=== RESPOSTA FINAL ===');
    console.log('ID:', responseData.id);
    console.log('URL:', responseData.url);
    console.log('JSON:', JSON.stringify(responseData));
    
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Erro ao criar sessão:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verificar sessão de checkout
app.get('/api/verify-session', async (req, res) => {
  try {
    const { session_id } = req.query;
    if (!session_id) {
      return res.status(400).json({ error: 'Session ID required' });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.json({ verified: session.payment_status === 'paid' });
  } catch (error) {
    console.error('Erro ao verificar sessão:', error);
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
