/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X, ArrowRight, ArrowLeft, Instagram, Twitter, Facebook, Youtube, Linkedin, Zap } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

// Import Pages
import Connect from "./pages/Connect";
import ServicesPage from "./pages/Services";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import Offices from "./pages/Offices";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import Terms from "./pages/Terms";
import CookiesPolicy from "./pages/CookiesPolicy";
import Success from "./pages/Success";

// Images – Hero & Founder
import HeroBg from "./imgs/bg-2.jpg";
import FounderBg from "./imgs/bg joao.jpg";
import FounderPhoto from "./imgs/fotolp.jpg";
import HeroMobileImage from "./imgs/IOMAGEM HEADER SITE.png";
import HeroBgMobile from "./imgs/hero mobile.jpg";

// Images – How we scale you
import Step1Image from "./imgs/How we scale you/01. THE STRATEGIC BLUEPRINT (AUDIT & RESEARCH).jpg";
import Step2Image from "./imgs/How we scale you/02. HIGH-VELOCITY ELITE PRODUCTION (EXECUTION).jpg";
import Step3Image from "./imgs/How we scale you/03. DATA-DRIVEN OPTIMIZATION (SCALE).jpg";

// Images – A glimpse at our work
import WorkImg1 from "./imgs/works/77621b219424965.67b28f2ca7f22.jpg";
import WorkImg2 from "./imgs/works/4d2382219424731.69274794d4511.jpg";
import WorkImg3 from "./imgs/works/maxresdefault.jpg";
import WorkImg4 from "./imgs/works/maxresdefault (1).jpg";
import WorkImg5 from "./imgs/works/maxresdefault (2).jpg";
import WorkImg6 from "./imgs/works/maxresdefault (3).jpg";
import WorkImg7 from "./imgs/works/maxresdefault (4).jpg";
import WorkImg8 from "./imgs/works/maxresdefault (5).jpg";

// Images – Clients
import MrBeastImg from "./imgs/clients/Mr. Beast.jpg";
import MrBeastPhoto from "./imgs/foto com mr beast.png";
import MrBeastScaled from "./imgs/MrBeast-scaled-860x507-1.jpg";
import SimonSquibbImg from "./imgs/clients/Simon Squibb.jpg";
import ImanGadzhiImg from "./imgs/clients/Iman Gadzhi.jpg";
import AliAbdaalImg from "./imgs/clients/Ali Abdaal.jpg";
import PedroSobralImg from "./imgs/clients/Pedro Sobral.jpg";
import ThaisaLealImg from "./imgs/clients/Thaisa Leal.jpg";
import GrahamStephanImg from "./imgs/clients/Graham Stephan.jpg";
import RyanTrahanImg from "./imgs/clients/Ryan Trahan.jpg";

// Images – Article covers (blog highlights)
// Using dynamic imports to handle special characters in filenames
const CoverCompetitor = new URL("./imgs/capas artigos/How To Steal Your Competition's Best Ideas (Legally).jpg", import.meta.url).href;
const CoverMonetization = new URL("./imgs/capas artigos/How To Turn Your Channel Into A Revenue Machine.jpg", import.meta.url).href;
const CoverAnalytics = new URL("./imgs/capas artigos/How To Read Your YouTube Analytics Like A Pro.jpg", import.meta.url).href;

// Images – Instagram
import InstagramImg from "./imgs/instagram.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl md:text-4xl font-bold tracking-tight">
          VHORO<span className="font-normal">MEDIA</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-semibold tracking-widest uppercase">
          <a href="/#pricing" className="hover:text-brand transition-colors">Pricing</a>
          <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
          <Link to="/insights" className="hover:text-brand transition-colors">Insights</Link>
          <Link to="/offices" className="hover:text-brand transition-colors">Offices</Link>
          <Link to="/careers" className="hover:text-brand transition-colors">Careers</Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="hover:opacity-70 transition-opacity"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/5 px-6 py-8 space-y-6 flex flex-col text-[11px] font-semibold tracking-widest uppercase"
        >
          <a href="/#pricing" className="hover:text-brand transition-colors">Pricing</a>
          <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
          <Link to="/insights" className="hover:text-brand transition-colors">Insights</Link>
          <Link to="/offices" className="hover:text-brand transition-colors">Offices</Link>
          <Link to="/careers" className="hover:text-brand transition-colors">Careers</Link>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "ON YOUTUBE.";
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Start typing animation after headline appears
    const timer = setTimeout(() => {
      setIsTyping(true);
      setDisplayedText("");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100); // Speed of typing

      return () => clearTimeout(timer);
    }
  }, [displayedText, isTyping, fullText]);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden md:h-[65vh] md:flex md:items-center md:justify-center">
      {/* Desktop / tablet background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={HeroBg}
          alt="VHORO Media hero background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile background as full-width image */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <img
          src={HeroBgMobile}
          alt="VHORO Media hero background mobile"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto md:px-6 text-center">
        {/* Floating hero image on mobile */}
        <motion.img
          src={HeroMobileImage}
          alt="VHORO Media recording setup"
          className="mb-8 w-full block md:hidden"
          style={{ maxWidth: 'none', height: 'auto', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
          initial={{ y: -12 }}
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[4.2rem] font-bold text-black leading-[1.1] tracking-normal uppercase relative z-20"
        >
          <span className="block">DOUBLE YOUR CTR.</span>
          <span className="block">TRIPLE YOUR RETENTION.</span>
          <span className="block">SCALE YOUR REVENUE.</span>
        </motion.h1>
        <p
          className="text-2xl md:text-4xl text-brand relative z-20 mt-4 font-black"
          style={{ 
            fontFamily: '"Rock Salt", cursive',
            fontWeight: 900
          }}
        >
          {displayedText}
          {displayedText.length < fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      </div>
    </section>
  );
};

const Ticker = () => {
  return (
    <div className="bg-brand py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="inline-block animate-scroll">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-white font-bold text-2xl tracking-widest uppercase mx-4">
            WE ARCHITECT ATTENTION. WE MAXIMIZE RETENTION. WE SCALE REVENUE.
          </span>
        ))}
      </div>
    </div>
  );
};

const WorkSection = () => {
  const row1 = [
    WorkImg1,
    WorkImg2,
    WorkImg3,
    WorkImg4,
  ];

  const row2 = [
    WorkImg5,
    WorkImg6,
    WorkImg7,
    WorkImg8,
  ];

  const [isInteracting1, setIsInteracting1] = useState(false);
  const [isInteracting2, setIsInteracting2] = useState(false);


  const handleInteractionStart1 = () => {
    setIsInteracting1(true);
  };

  const handleInteractionEnd1 = () => {
    // Retomar após um pequeno delay
    setTimeout(() => {
      setIsInteracting1(false);
    }, 200);
  };

  const handleInteractionStart2 = () => {
    setIsInteracting2(true);
  };

  const handleInteractionEnd2 = () => {
    // Retomar após um pequeno delay
    setTimeout(() => {
      setIsInteracting2(false);
    }, 200);
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <p className="text-lg font-semibold leading-tight mb-8 max-w-md">
            We are architects of attention, transforming social relevance into your channel's most valuable growth asset.
          </p>
          <Link 
            to="/#pricing"
            className="inline-block bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
          >
            CHOOSE YOUR PLAN
          </Link>
        </div>
        <div className="text-right">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.8]">
            A glimpse at<br />our work
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {/* Row 1 - Forward */}
        <div 
          className="flex whitespace-nowrap overflow-hidden scrollbar-hide"
          onTouchStart={handleInteractionStart1}
          onTouchEnd={handleInteractionEnd1}
          onMouseDown={handleInteractionStart1}
          onMouseUp={handleInteractionEnd1}
          onMouseLeave={handleInteractionEnd1}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="flex animate-scroll"
            style={{ 
              animationPlayState: isInteracting1 ? 'paused' : 'running'
            }}
          >
            {[...row1, ...row1, ...row1].map((item, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[420px] flex-shrink-0 aspect-video mx-2 bg-gray-100 overflow-hidden rounded-xl"
              >
                <img src={item} alt={`Work ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div 
          className="flex whitespace-nowrap overflow-hidden scrollbar-hide"
          onTouchStart={handleInteractionStart2}
          onTouchEnd={handleInteractionEnd2}
          onMouseDown={handleInteractionStart2}
          onMouseUp={handleInteractionEnd2}
          onMouseLeave={handleInteractionEnd2}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="flex animate-scroll-reverse"
            style={{ 
              animationPlayState: isInteracting2 ? 'paused' : 'running'
            }}
          >
            {[...row2, ...row2, ...row2].map((item, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[420px] flex-shrink-0 aspect-video mx-2 bg-gray-100 overflow-hidden rounded-xl"
              >
                <img src={item} alt={`Work ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const clients = [
    { name: "MrBeast", country: "USA", image: MrBeastImg },
    { name: "Simon Squibb", country: "UK", image: SimonSquibbImg },
    { name: "Iman Gadzhi", country: "Dubai", image: ImanGadzhiImg },
    { name: "Ali Abdaal", country: "UK", image: AliAbdaalImg },
    { name: "Pedro Sobral", country: "Brazil", image: PedroSobralImg },
    { name: "Thaisa Leal", country: "Brazil", image: ThaisaLealImg },
    { name: "Graham Stephan", country: "USA", image: GrahamStephanImg },
    { name: "Ryan Trahan", country: "USA", image: RyanTrahanImg },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);


  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    // Retomar após um pequeno delay
    setTimeout(() => {
      setIsInteracting(false);
    }, 200);
  };

  return (
    <section 
      className="py-24 bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-800 leading-tight max-w-4xl mb-8">
          We operate strategically for companies, entrepreneurs, and digital creators who want to maximize their online presence, scale their sales, and dominate their market.
        </h2>
        <p className="text-brand text-xl md:text-2xl font-bold">
          These are just a few of the names we've partnered with:
        </p>
      </div>

      <motion.div 
        style={{
          perspective: "1000px",
        }}
        className="relative"
      >
        <motion.div 
          animate={{
            rotateY: mousePos.x * 10,
            rotateX: -mousePos.y * 5,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="flex whitespace-nowrap overflow-hidden scrollbar-hide"
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="flex animate-scroll py-10"
            style={{ 
              animationPlayState: isInteracting ? 'paused' : 'running'
            }}
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div 
                key={i} 
                className="inline-block flex-shrink-0 w-[240px] md:w-[320px] aspect-[3/4] mx-4 relative rounded-3xl overflow-hidden shadow-xl group"
              >
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Logos = () => {
  return (
    <section className="bg-black py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[860/507] overflow-hidden rounded-lg">
              <img 
                src={MrBeastScaled} 
                alt="MrBeast" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-white/60 font-bold uppercase tracking-widest text-xs">MrBeast</p>
              <p className="text-brand text-[10px] font-bold uppercase tracking-widest">Global YouTube Authority</p>
            </div>
            
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight italic">
              “They understand the algorithm better than anyone I've worked with.”
            </blockquote>
            
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold pt-4">
              Source: Private performance review from VHORO Media client portfolio
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  return (
    <div className="bg-white">
      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Texto centralizado */}
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight uppercase">
              ON{" "}
              <span 
                style={{ 
                  fontFamily: '"Rock Salt", cursive',
                  color: '#FF0033',
                  fontWeight: 900,
                  textTransform: 'none'
                }}
              >
                Instagram
              </span>
              , YOUR CONTENT DISAPPEARS IN 24 HOURS. ON{" "}
              <span 
                style={{ 
                  fontFamily: '"Rock Salt", cursive',
                  color: '#FF0033',
                  fontWeight: 900,
                  textTransform: 'none'
                }}
              >
                YouTube
              </span>
              , IT CONTINUES TO SELL FOR MONTHS (OR YEARS).
            </p>

            {/* Imagem embaixo */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src={InstagramImg} 
                  alt="Instagram to YouTube transition" 
                  className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Linha divisória */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "01. THE STRATEGIC BLUEPRINT (AUDIT & RESEARCH)",
      label: "STEP 1",
      image: Step1Image,
      description: "We don’t guess; we engineer. Every project starts with a deep-dive audit of your channel’s historical data and your competitors' winning patterns. We identify exactly where you’re losing clicks and where your retention is bleeding. Before we touch a single frame, we build your custom Growth Blueprint—a data-backed roadmap designed to dominate your specific niche."
    },
    {
      title: "02. HIGH-VELOCITY ELITE PRODUCTION (EXECUTION)",
      label: "STEP 2",
      image: Step2Image,
      description: "Once the strategy is locked, our production engine starts. We deliver high-CTR thumbnails, data-backed script hooks, and retention-focused editing in a relentless 48 to 72-hour cycle. You get a constant stream of \"ready-to-post\" assets, each meticulously crafted by our expert team to feed the algorithm exactly what it demands: Attention and Retention."
    },
    {
      title: "03. DATA-DRIVEN OPTIMIZATION (SCALE)",
      label: "STEP 3",
      image: Step3Image,
      description: "We launch, we track, and we optimize. We use real-time performance metrics to double down on what’s working and ruthlessly cut what isn’t. Your channel stops being a guessing game and starts being a predictable revenue and attention machine. We provide monthly deep-dive reports and scale your winners until you own your category."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.8]">
          How we<br />scale you
        </h2>
        <div className="max-w-sm">
          <p className="text-sm font-semibold mb-6">
            We are completely focused on one thing: transforming your content into a high-performance growth engine that dominates the algorithm.
          </p>
          <Link 
            to="/#pricing"
            className="inline-block bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-colors"
          >
            CHOOSE YOUR PLAN
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <div key={i} className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">{service.label}</span>
              <h3 className="text-3xl font-bold tracking-tight uppercase mt-1 mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PricingSection = () => {
  const handleCheckout = async (priceId: string) => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      if (!stripe) {
        alert("Stripe não configurado. Verifique as variáveis de ambiente.");
        return;
      }

      console.log('Iniciando checkout com priceId:', priceId);
      
      const response = await fetch(`/api/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: priceId,
        }),
      }).catch((fetchError) => {
        console.error('Erro na requisição fetch:', fetchError);
        throw new Error(`Erro de conexão: ${fetchError.message}. Verifique se o servidor está rodando.`);
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao criar sessão de checkout");
      }

      const session = await response.json();
      
      console.log('Resposta do servidor:', session);
      
      // Redirecionar para o checkout usando a URL da sessão
      if (session.url) {
        window.location.href = session.url;
      } else {
        console.error('URL não encontrada na resposta:', session);
        throw new Error("URL de checkout não disponível. Resposta: " + JSON.stringify(session));
      }
    } catch (error: any) {
      console.error("Erro no checkout:", error);
      alert(error.message || "Erro ao processar pagamento. Por favor, tente novamente.");
    }
  };

  const plans = [
    {
      name: "PLAN 01",
      subtitle: "VHORO CLICK ARCHITECT™",
      system: "(The Packaging & Performance System)",
      bestFor: "Creators with strong content that underperforms on impressions.",
      price: "$1,490",
      investmentNote: "/ month",
      totalValue: "$9,500",
      cta: "DOMINATE THE CLICK",
      priceId: "price_1T7IOgFjJxHsNvNGn01NsM8e",
      deliverables: [
        { item: "Thumbnails & Packaging" },
        { item: "12 High-Performance Thumbnails" },
        { item: "4 videos per month with 3 strategic thumbnail variations per video, engineered to maximize CTR and stand out in the YouTube feed." },
        { item: "Live A/B/C Testing" },
        { item: "Real-time thumbnail and title swaps based on performance data to continuously improve click-through rate." },
        { item: "Scriptwriting & Content Structure" },
        { item: "4 Full Long-Form Video Scripts" },
        { item: "Structured scripts optimized for viewer retention, clarity, and audience progression throughout the video." },
        { item: "Channel Optimization" },
        { item: "Advanced Metadata Optimization" },
        { item: "CTR-focused titles, structured descriptions, and strategic tag architecture designed for discoverability and search positioning." },
        { item: "Performance Intelligence" },
        { item: "Monthly Competitor Analysis" },
        { item: "Breakdown of competitor content strategy, packaging patterns, and performance opportunities within your niche." },
        { item: "Performance Report" },
        { item: "Monthly report covering CTR, impressions growth, and subscriber velocity." },
        { item: "Post-Publish Optimization" },
        { item: "Post-Publish Optimization — First 7 Days" },
        { item: "Active monitoring of CTR and performance signals with title refinements and packaging adjustments during the critical launch window." }
      ],
      outcomes: [
        "Higher CTR",
        "Stronger first-week performance",
        "Improved audience retention",
        "Faster growth momentum"
      ],
      popular: false
    },
    {
      name: "PLAN 02",
      subtitle: "VHORO RETENTION ENGINE™",
      system: "The Watch-Time & Scale System",
      bestFor: "Creators and brands ready to scale their channel with consistent publishing, stronger storytelling, and deeper audience retention.",
      price: "$3,490",
      investmentNote: "/ month",
      totalValue: "$24,000",
      cta: "SCALE MY REACH",
      priceId: "price_1T7IOwFjJxHsNvNG6G2q2B8y",
      deliverables: [
        { item: "Thumbnails & Packaging" },
        { item: "24 High-Performance Thumbnails" },
        { item: "8 videos per month with 3 optimized thumbnail variations each, designed to maximize CTR and capture attention in competitive feeds." },
        { item: "Scriptwriting & Content Architecture" },
        { item: "8 Advanced Long-Form Video Scripts" },
        { item: "Story-driven scripts engineered for viewer retention, watch-time depth, and binge potential." },
        { item: "CLICK ARCHITECT™ Framework" },
        { item: "Our proprietary system for structuring videos to maximize clicks, retention, and algorithm performance." },
        { item: "Video Editing" },
        { item: "8 Long-Form Video Edits" },
        { item: "Clean, high-retention editing optimized for pacing, clarity, and viewer engagement." },
        { item: "Simple editing structure focused on performance without complex motion graphics." },
        { item: "Growth Strategy" },
        { item: "Quarterly Content Strategy Roadmap" },
        { item: "Strategic planning covering positioning, topic architecture, and authority growth." },
        { item: "Monthly Retention Audit" },
        { item: "Detailed drop-off curve analysis with structural improvements to increase viewer retention." },
        { item: "Discovery Expansion" },
        { item: "8 YouTube Shorts" },
        { item: "Strategically produced to expand reach, discovery, and feed the long-form content ecosystem." },
        { item: "Post-Publish Optimization" },
        { item: "Ongoing Post-Publish Optimization" },
        { item: "Title adjustments, thumbnail refresh cycles, and session optimization after publishing to continuously improve video performance." }
      ],
      outcomes: [
        "Increased Average View Duration",
        "Higher session watch time",
        "Shorts-driven discovery growth",
        "Stronger authority positioning",
        "A scalable publishing system for consistent growth"
      ],
      popular: true
    },
    {
      name: "PLAN 03",
      subtitle: "VHORO ELITE PARTNERSHIP™",
      system: "Custom YouTube Growth Architecture",
      bestFor: "High-level creators, personal brands, and companies that require a fully customized YouTube growth operation built around their exact objectives.",
      price: "",
      investmentNote: "Custom engagement — Pricing is determined after evaluating your channel stage, production volume, and growth goals.",
      totalValue: "",
      cta: "CONTACT US",
      deliverables: [
        { item: "Every engagement is engineered around the specific needs of your channel and growth strategy." },
        { item: "This partnership can include any combination of the following services:" },
        { item: "• Custom thumbnail production and testing cycles" },
        { item: "• Advanced packaging strategy (titles + CTR experimentation)" },
        { item: "• Long-form video editing" },
        { item: "• Short-form editing and content repurposing" },
        { item: "• Scriptwriting and storytelling development" },
        { item: "• Content ideation and research" },
        { item: "• Channel positioning and growth strategy" },
        { item: "• Upload optimization (SEO, metadata, publishing systems)" },
        { item: "• Post-publish optimization and performance monitoring" },
        { item: "• Content ecosystem expansion (Shorts, clips, multi-platform distribution)" },
        { item: "• Monetization architecture and funnel integration" },
        { item: "• Launch and campaign support for major videos" },
        { item: "• Dedicated growth strategist overseeing the channel" },
        { item: "• Priority production team for faster execution" },
        { item: "All services are modular and scalable, meaning we design the production capacity based on what your channel actually needs." }
      ],
      outcomes: [
        "Category leadership in your niche",
        "A scalable and predictable content system",
        "High-performance packaging and retention optimization",
        "YouTube operating as a primary growth and revenue channel",
        "A long-term strategic moat built around your content ecosystem"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
            Pick Your<br />
            <span className="text-brand">Growth Path.</span>
          </h2>
          <p className="text-gray-500 font-semibold tracking-widest uppercase text-xs">CHOOSE THE PERFORMANCE PLAN THAT SCALES YOUR REVENUE.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col bg-white border ${plan.popular ? 'border-brand shadow-2xl scale-105 z-10' : 'border-black/5 shadow-xl'} p-8 rounded-2xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-1">{plan.name}</h3>
                <p className="text-brand text-[10px] font-bold uppercase tracking-widest mb-1">{plan.subtitle}</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">{plan.system}</p>
                <p className="text-sm text-gray-500 font-medium leading-tight mb-6">
                  <span className="block text-[10px] font-bold text-black mb-1">BEST FOR:</span>
                  {plan.bestFor}
                </p>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">YOUR INVESTMENT:</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price || "Custom"}
                    </span>
                    {plan.investmentNote && (
                      <span className="text-gray-400 text-sm font-medium">
                        {plan.investmentNote}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-grow space-y-8 mb-8">
                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-black/5 pb-2">
                    What We Engineer
                  </div>
                  <div className="space-y-3">
                    {plan.deliverables.map((d, j) => {
                      // Categorias são títulos de seção (sem bullet, em negrito)
                      const isCategory = !d.item.startsWith('•') && !d.item.startsWith('(') && 
                                        (d.item === "Thumbnails & Packaging" || 
                                         d.item === "Scriptwriting & Content Architecture" || 
                                         d.item === "Video Editing" || 
                                         d.item === "Growth Strategy" || 
                                         d.item === "Discovery Expansion" || 
                                         d.item === "Post-Publish Optimization" ||
                                         d.item === "CLICK ARCHITECT™ Framework" ||
                                         d.item === "Scriptwriting & Content Structure" ||
                                         d.item === "Channel Optimization" ||
                                         d.item === "Performance Intelligence");
                      
                      if (isCategory) {
                        return (
                          <div key={j} className="pt-4 first:pt-0">
                            <span className="text-xs font-bold text-black uppercase tracking-wide">{d.item}</span>
                          </div>
                        );
                      }
                      
                      return (
                        <div key={j} className="flex items-start gap-2">
                          <div className="mt-1 w-3 h-3 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                          </div>
                          <span className="text-xs font-semibold text-gray-700 leading-tight">{d.item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-black/5 pb-2">
                    Strategic Outcome
                  </div>
                  <div className="space-y-2">
                    {plan.outcomes.map((outcome, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="text-brand text-xs">✔</span>
                        <span className="text-xs font-bold text-gray-800">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 mt-auto">
                {plan.totalValue && (
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">TOTAL STRATEGIC VALUE</span>
                    <span className="text-lg font-bold tracking-tight line-through text-gray-300">{plan.totalValue}</span>
                  </div>
                )}
                <button 
                  onClick={() => plan.priceId ? handleCheckout(plan.priceId) : window.location.href = '/connect'}
                  className={`w-full py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${plan.popular ? 'bg-brand text-white hover:opacity-90 hover:scale-105' : 'bg-black text-white hover:bg-neutral-800 hover:scale-105'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    {
      date: "MARCH 04, 2026",
      title: "THE COMPETITOR ANALYSIS PLAYBOOK: HOW TO STEAL YOUR COMPETITION'S BEST IDEAS (LEGALLY)",
      image: CoverCompetitor,
      slug: "competitor-analysis"
    },
    {
      date: "MARCH 04, 2026",
      title: "THE MONETIZATION MAP: HOW TO TURN YOUR CHANNEL INTO A REVENUE MACHINE",
      image: CoverMonetization,
      slug: "monetization-map"
    },
    {
      date: "MARCH 04, 2026",
      title: "THE DATA DEEP-DIVE: HOW TO READ YOUR YOUTUBE ANALYTICS LIKE A PRO",
      image: CoverAnalytics,
      slug: "data-deep-dive"
    }
  ];

  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="h-px bg-white/20 flex-grow mr-8"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">Read the latest</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 group cursor-pointer"
            >
              <Link to={`/insights/${post.slug}`}>
                <div className="aspect-video overflow-hidden mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">{post.date}</span>
                <h3 className="text-xl font-bold tracking-tight uppercase mt-2 leading-tight group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-px bg-white/20 mb-12"></div>
          <Link to="/insights" className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all cursor-pointer">
            Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const categories = [
    {
      name: "The Process",
      faqs: [
        {
          question: "What happens immediately after I make the payment?",
          answer: "The moment your payment is confirmed, you’ll be automatically redirected to our Elite Onboarding Portal. There, you’ll complete a deep-dive brand questionnaire so we can understand your voice and goals. Within 24 hours, you’ll receive your personalized access links to Slack for real-time communication and ClickUp to track every single one of your deliverables. No waiting, no guessing—we start engineering your growth the same day."
        },
        {
          question: "What happens during the Onboarding & Briefing phase?",
          answer: "This is where the magic happens. We spend the first week auditing your channel, your competitors, and your audience’s psychological triggers. We build a Content Blueprint with you. Once you approve the direction, we execute. This alignment is why we don't need multiple revisions."
        },
        {
          question: "How do we communicate and give feedback?",
          answer: "We use Slack for daily syncs and Frame.io for video feedback. You leave your comments directly on the video timeline. It’s fast, transparent, and ensures nothing gets lost in translation. One consolidated feedback session, one final version."
        },
        {
          question: "What is the turnaround time for a full video and thumbnail?",
          answer: "From the moment we have the raw footage and the approved brief, we deliver within 48 to 72 hours. We move at the speed of social. We don't miss deadlines, and we don't compromise on quality. We are built for high-volume, high-impact creators."
        }
      ]
    },
    {
      name: "Strategy & Performance",
      faqs: [
        {
          question: "How do you research my niche before designing a thumbnail?",
          answer: "We analyze the top 50 videos in your category from the last 90 days. We look at color patterns, font styles, and \"Hook-Angles\" that are currently winning the click. Your thumbnail isn't just a design; it’s a data-backed weapon built to beat your specific competition."
        },
        {
          question: "What is your process for video editing and retention?",
          answer: "We don't just \"cut out the pauses.\" We map your raw footage against retention heatmaps from similar successful videos. We edit for pace, tension, and clarity. Our goal is to keep your Average View Duration (AVD) as high as possible by following a proven storytelling structure."
        },
        {
          question: "How do you handle SEO and Title strategy?",
          answer: "We balance Search Intent with Click-Through Psychology. We research high-volume keywords but wrap them in titles that demand a click. We optimize your metadata (tags, descriptions, chapters) so the algorithm knows exactly who your \"Ideal Viewer\" is."
        },
        {
          question: "Do you provide script and hook optimization?",
          answer: "Yes. If your intro is weak, your video is dead. We review your hooks and provide feedback to ensure the first 30 seconds are unskippable. We align the script with the thumbnail promise to prevent \"Click-Bait Disappointment\" and keep people watching."
        },
        {
          question: "What exactly is in the Monthly Performance Report?",
          answer: "We provide a Strategic Audit of your channel’s health. We don't just show you views; we show you why they happened. We analyze CTR, AVD, and Traffic Sources. Most importantly, we give you a Action Plan for the next 30 days based on those cold, hard facts."
        },
        {
          question: "Do you offer consulting on channel growth and monetization?",
          answer: "Yes. We are your YouTube Growth Department. If you’re thinking about a new product launch, a sponsorship, or a pivot in your content, we’re here to consult. We provide ongoing strategic support to ensure your channel is a revenue-generating asset."
        }
      ]
    },
    {
      name: "Policies & Revisions",
      faqs: [
        {
          question: "Why do you only allow one round of revisions per asset?",
          answer: "Because we don’t guess. Every thumbnail and edit is built on a Deep-Dive Briefing and our proprietary research into your niche’s performance data. We don't make \"pretty\" things; we make high-performance assets. If the briefing is solid, the first version is the winner. One round is for polish, not for changing the strategy."
        },
        {
          question: "What if I really need a second revision?",
          answer: "If we missed a technical detail from the agreed-upon briefing, we fix it instantly. However, if you want to change the strategy or the \"vibe\" after the work is done, that falls outside the scope. We trust our data, and we need you to trust the process."
        },
        {
          question: "Can I change the creative direction mid-project?",
          answer: "Once the briefing is signed off and production starts, the direction is locked. If you want to pivot, we do it in the next video’s briefing. This keeps the machine moving fast and ensures we don't waste time on \"creative indecision.\""
        },
        {
          question: "How do you ensure the editing style stays consistent?",
          answer: "We build a Brand Style Guide for your channel during onboarding. This includes your specific fonts, color grading, transition styles, and music \"vibe.\" Every editor on our team follows this guide to ensure your brand is recognizable in every frame."
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[0.9] mb-4">
            Got Questions?<br />
            We've Got Answers. <span className="text-brand">(No BS.)</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-brand font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-brand" />
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.faqs.map((faq, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-black/5 pb-6"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h4 className="text-xl md:text-2xl font-bold tracking-tight uppercase group-open:text-brand transition-colors">
                          "{faq.question}"
                        </h4>
                        <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="mt-4 text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="bg-brand py-4 flex justify-center space-x-8">
        <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Instagram className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Youtube className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Linkedin className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="col-span-2">
            <div className="text-4xl font-bold tracking-tight mb-12">VHORO<span className="font-normal">MEDIA</span></div>
            <Link 
              to="/#pricing"
              className="inline-block border border-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              CHOOSE YOUR PLAN
            </Link>
          </div>
          
          <div className="space-y-2 text-[10px] font-semibold tracking-widest uppercase text-gray-400">
            <p className="text-white mb-4">LEGAL</p>
            <Link to="/legal/privacy-policy" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/legal/copyright-policy" className="block hover:text-white">
              Copyright Policy
            </Link>
            <Link to="/legal/terms" className="block hover:text-white">
              Terms
            </Link>
            <Link to="/legal/cookies-policy" className="block hover:text-white">
              Cookies Policy
            </Link>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 text-[10px] text-gray-500 font-medium text-center">
          © 2026 VhoroMedia LLC. All Rights Reserved. VhoroMedia is a global performance creative and growth engineering agency.
        </div>
      </div>
    </footer>
  );
};

const FounderSection = () => {
  return (
    <section className="py-24 px-6 bg-neutral-950 overflow-hidden relative">
      {/* Background image for the section */}
      <div className="absolute inset-0 opacity-100 pointer-events-none">
        <img
          src={FounderBg}
          alt="Founder background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 md:order-1"
        >
          <div className="flex items-center space-x-3">
            <div className="w-1 h-4 bg-brand" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">WHO IS BEHIND VHORO MEDIA</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase leading-[0.9]">
            João Camargo
          </h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
            <p>
              Four years ago, I started designing thumbnails trying to understand why some videos explode while others disappear. That curiosity turned into an obsession with the YouTube algorithm and what truly makes a video succeed. After scaling more than 30 channels through testing, strategy and relentless optimization, I realized growth on YouTube is engineered, not guessed.
            </p>
            <p>
              Today, through VhoroMedia, I apply everything I’ve learned about performance packaging, strategic scripting and post-publish optimization to help creators turn attention into authority and channels into scalable growth assets.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative bg-neutral-900/50 border border-white/5 rounded-3xl p-4 md:p-8 shadow-2xl">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src={FounderPhoto} 
                alt="João Camargo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/20 blur-[120px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const ViewsCounter = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const targetValue = 1000000000; // 1 bilhão
  const duration = 5000; // 5 segundos
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            startCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  const startCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-black py-16 md:py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <p className="text-white/60 text-sm md:text-base font-semibold uppercase tracking-widest">
            Views Generated
          </p>
          <div className="w-full">
            <motion.div
              key={count}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-brand font-bold leading-none"
              style={{
                fontSize: 'clamp(3rem, 15vw, 12rem)',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: '1',
              }}
            >
              {formatNumber(count)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = window.localStorage.getItem("vhoro_cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("vhoro_cookie_consent", "accepted");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-black/5 p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
            Cookies & Analytics
          </p>
          <p className="text-sm text-gray-700">
            We use essential cookies and privacy‑safe analytics to understand how people use this site and to improve performance. We never sell your data.
          </p>
          <div className="mt-2">
            <Link
              to="/legal/cookies-policy"
              className="text-[11px] font-semibold underline text-gray-500 hover:text-black"
            >
              Read our cookies policy
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <WorkSection />
      <ClientsSection />
      <Logos />
      <InstagramSection />
      <Services />
      <PricingSection />
      <Blog />
      <FAQSection />
      <FounderSection />
      <ViewsCounter />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isSuccessPage = location.pathname === '/success';

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-brand/20 flex flex-col">
        {!isSuccessPage && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/copyright-policy" element={<CopyrightPolicy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        {!isSuccessPage && <Footer />}
        {!isSuccessPage && <CookieBanner />}
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
