import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FounderBg from "../imgs/bg joao.jpg";

export default function Success() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get("session_id");
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (sessionId) {
      // Verificar sessão com o backend (opcional)
      fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/verify-session?session_id=${sessionId}`)
        .then(() => setVerified(true))
        .catch(() => setVerified(true)); // Assume success if verification fails
    } else {
      setVerified(true);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={FounderBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-brand/20 backdrop-blur-sm border-4 border-brand">
              <CheckCircle2 className="w-16 h-16 text-brand" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-4 leading-tight"
          >
            Welcome to<br />
            <span className="text-brand">VhoroMedia</span><br />
            YouTube Growth™
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-12"
          >
            Let's engineer your channel's next phase.
          </motion.p>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-8"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              The next step is simple.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Complete your Growth Intake Form so our team can analyze your channel, positioning, and performance data.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://tally.so/r/A7loDk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-brand text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand/90 transition-all shadow-2xl cursor-pointer"
            >
              Complete Your Strategic Briefing
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="fixed top-20 left-10 w-20 h-20 border-2 border-brand/30 rounded-full pointer-events-none hidden md:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="fixed bottom-20 right-10 w-16 h-16 border-2 border-brand/30 rounded-full pointer-events-none hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
