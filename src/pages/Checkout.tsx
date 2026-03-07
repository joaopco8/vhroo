import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const priceId = searchParams.get("priceId");

  const handleCheckout = async () => {
    if (!priceId) {
      alert("Price ID não encontrado");
      return;
    }

    setLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe não inicializado");
      }

      // Criar sessão de checkout
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: priceId,
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      // Redirecionar para o checkout usando a URL da sessão
      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error("URL de checkout não disponível");
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
      alert("Erro ao processar pagamento. Tente novamente.");
      setLoading(false);
    }
  };

  // Auto-redirect quando a página carregar
  useState(() => {
    if (priceId) {
      handleCheckout();
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Loader2 className="w-12 h-12 animate-spin text-brand mx-auto mb-4" />
        <p className="text-gray-600">Redirecionando para o checkout...</p>
      </motion.div>
    </div>
  );
}
