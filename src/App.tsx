/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView, useAnimation } from "motion/react";
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
const CoverCompetitor = new URL("./imgs/capas artigos/How To Steal Your Competition’s Best Ideas (Legally).jpg", import.meta.url).href;
const CoverMonetization = new URL("./imgs/capas artigos/How To Turn Your Channel Into A Revenue Machine.jpg", import.meta.url).href;
const CoverAnalytics = new URL("./imgs/capas artigos/How To Read Your YouTube Analytics Like A Pro.jpg", import.meta.url).href;
const CoverScriptRetention = new URL("./imgs/capas artigos/How To Script Videos That People Actually Finishv.jpg", import.meta.url).href;

// Images – Instagram
import InstagramImg from "./imgs/instagram.png";

// Componente wrapper para animações de scroll
const ScrollReveal = ({ children, delay = 0, direction = "up", className = "", ...props }: { children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" | "fade"; className?: string; [key: string]: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      scale: direction === "fade" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

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

const HeroBenefitsStrip = () => {
  return (
    <section className="bg-brand px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-lg font-semibold text-white text-center md:text-left leading-snug">
          NO CALLS REQUIRED
          <span className="opacity-60 mx-3">·</span>
          NO MEETINGS
          <span className="opacity-60 mx-3">·</span>
          WE ENGINEER THE GROWTH.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-[11px] md:text-xs font-medium text-white/90 text-center md:text-left">
          <div>✓ First assets in 7 days</div>
          <div>✓ Cancel anytime</div>
          <div>✓ 60-day guarantee</div>
        </div>
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
      <ScrollReveal direction="up" delay={0.1}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-lg font-semibold leading-tight mb-8 max-w-md">
              We help creators turn YouTube into their main growth engine through high-CTR packaging, retention-optimized editing, and data-driven strategy.
            </p>
            <a 
              href="https://tally.so/r/1AK2eg"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
            >
              Get Your Free Channel Diagnostic
            </a>
          </div>
          <div className="text-right">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.95]">
              A glimpse at<br />our work
            </h2>
          </div>
        </div>
      </ScrollReveal>

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
      <ScrollReveal direction="up" delay={0.1}>
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-neutral-800 leading-tight max-w-4xl mb-8">
            We operate strategically for companies, entrepreneurs, and digital creators who want to maximize their online presence, scale their sales, and dominate their market.
          </h2>
          <p className="text-brand text-xl md:text-2xl font-bold">
            These are just a few of the names we've partnered with:
          </p>
        </div>
      </ScrollReveal>

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
    <section className="bg-brand py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight uppercase">
                THEY UNDERSTAND THE ALGORITHM BETTER THAN ANYONE I'VE WORKED WITH.
              </h2>
              
              <p className="text-sm md:text-base text-white/60 uppercase tracking-wide">
                IMAN GADZHI — Entrepreneur, 5M subscribers · VHORO Client Since 2024
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cases = [
    {
      number: "01",
      channel: "Iman Gadzhi",
      niche: "Entrepreneurship · 4.8M subs",
      image: ImanGadzhiImg,
      metrics: [
        {
          label: "CTR: 3.2% →",
          value: "9.1%",
          desc: "+184% in 60 days"
        },
        {
          label: "Views/video: 180k →",
          value: "620k",
          desc: "Thumbnail + hook overhaul"
        }
      ]
    },
    {
      number: "02",
      channel: "Thaisa Leal",
      niche: "Personal Development · 890k subs",
      image: ThaisaLealImg,
      metrics: [
        {
          label: "Avg retention: 31% →",
          value: "61%",
          desc: "+97% watch time"
        },
        {
          label: "Monthly views: 900k →",
          value: "3.4M",
          desc: "Script + niche repositioning"
        }
      ]
    },
    {
      number: "03",
      channel: "Ryan Trahan",
      niche: "Lifestyle · 12M subs",
      image: RyanTrahanImg,
      metrics: [
        {
          label: "CTR: 4.1% →",
          value: "11.3%",
          desc: "+175% click velocity"
        },
        {
          label: "Subs/month: 80k →",
          value: "390k",
          desc: "Full packaging strategy rebuild"
        }
      ]
    }
  ];

  return (
    <section id="cases" className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-8">
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-brand block mb-5">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-[0.95]">
              CHANNELS WE'VE<br />
              TRANSFORMED.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 border border-white/10">
          {cases.map((caseItem, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <div
                className="case-item grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-8 md:gap-12 p-8 md:p-12 border-b border-white/10 last:border-b-0 transition-colors"
                style={{
                  backgroundColor: hoveredIndex === index ? 'rgba(255, 0, 51, 0.04)' : 'transparent'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Case Number */}
                <span className="case-num text-xs md:text-sm font-semibold text-brand tracking-[2px] uppercase">
                  {caseItem.number}
                </span>

                {/* Creator Info + Photo */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-neutral-900 flex-shrink-0">
                    <img
                      src={caseItem.image}
                      alt={caseItem.channel}
                  className="w-full h-full object-cover"
                />
              </div>
                  <div>
                    <div className="case-channel text-lg md:text-xl font-semibold text-white mb-1">
                      {caseItem.channel}
            </div>
                    <div className="text-[11px] text-gray-400 mt-1 tracking-wide uppercase font-medium">
                      {caseItem.niche}
                    </div>
                  </div>
                </div>

                {/* Metric 1 */}
                <div>
                  <div className="case-before text-xs md:text-sm text-gray-400 font-medium mb-2">
                    {caseItem.metrics[0].label}
                  </div>
                  <div className="case-after text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                    {caseItem.metrics[0].value}
                  </div>
                  <div className="case-desc text-[11px] text-gray-400 uppercase tracking-wide">
                    {caseItem.metrics[0].desc}
                  </div>
            </div>
            
                {/* Metric 2 */}
                <div>
                  <div className="case-before text-xs md:text-sm text-gray-400 font-medium mb-2">
                    {caseItem.metrics[1].label}
                  </div>
                  <div className="case-after text-3xl md:text-4xl font-bold text-brand leading-none mb-2">
                    {caseItem.metrics[1].value}
                  </div>
                  <div className="case-desc text-[11px] text-gray-400 uppercase tracking-wide">
                    {caseItem.metrics[1].desc}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Anonymization Footnote */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-8">
            <p className="text-[11px] text-gray-400 tracking-wide">
              * Data shared with creator permission. Full analytics available on call.
            </p>
            </div>
          </ScrollReveal>
      </div>
    </section>
  );
};

const DarkGridBackground = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(245,242,236,0.02) 1px,transparent 1px), linear-gradient(90deg,rgba(245,242,236,0.02) 1px,transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />
);

const InstagramSection = () => {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10 relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Grid background texture */}
      <DarkGridBackground />

      {/* Red glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-[10%] -translate-y-1/2"
                style={{ 
          width: 500,
          height: 500,
          background:
            "radial-gradient(ellipse,rgba(224,58,47,0.07) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto">
        {/* Label */}
        <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand block mb-12">
          The Platform Decision
              </span>

        <div className="grid md:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white tracking-tight">
              HOW MANY HOURS<br />
              DID YOU SPEND ON<br />
              <span className="text-brand">INSTAGRAM</span>
              <br />
              LAST MONTH?
            </h2>

            <p className="mt-7 text-sm md:text-base text-neutral-400 leading-relaxed max-w-md">
              Now tell me how many of those posts are still generating revenue
              today. That silence is the cost of building on the wrong
              platform.
            </p>

            <div className="w-12 h-px bg-brand my-10" />

            {/* Comparison table */}
            <div className="border border-white/10 text-sm text-neutral-300">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="px-5 py-3" />
                <div className="px-5 py-3 border-l border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-neutral-500">
                  Instagram
                </div>
                <div className="px-5 py-3 border-l border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-brand">
                  YouTube
                </div>
              </div>

              {[
                {
                  label: "Content lifespan",
                  ig: "24 to 48 hours",
                  yt: "Months or years",
                },
                {
                  label: "Organic reach",
                  ig: "Resets every post",
                  yt: "Compounds over time",
                },
                {
                  label: "Passive revenue",
                  ig: "None",
                  yt: "AdSense runs 24/7",
                },
                {
                  label: "Search discovery",
                  ig: "Not indexed on Google",
                  yt: "Ranked on Google",
                },
                {
                  label: "ROI over time",
                  ig: "Diminishing",
                  yt: "Exponential",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 border-b last:border-b-0 border-white/10"
                >
                  <div className="px-5 py-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-neutral-500 flex items-center">
                    {row.label}
                  </div>
                  <div className="px-5 py-4 border-l border-white/10 text-neutral-500 flex items-center">
                    {row.ig}
                  </div>
                  <div className="px-5 py-4 border-l border-white/10 text-white font-medium flex items-center">
                    {row.yt}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: image in dark frame */}
          <div className="relative">
            <div className="border border-white/10 p-10 bg-white/5 relative">
              {/* Corner accents */}
              <div className="absolute -top-px -right-px w-10 h-10 border-t-2 border-r-2 border-brand" />
              <div className="absolute -bottom-px -left-px w-10 h-10 border-b-2 border-l-2 border-brand" />

              <img
                src={InstagramImg}
                alt="Instagram dies. YouTube compounds."
                className="w-full block"
                style={{ 
                  filter: "drop-shadow(0 24px 48px rgba(224,58,47,0.25))",
                }}
              />

              <div className="mt-6 pt-6 border-t border-white/10 text-[11px] text-neutral-500 tracking-[0.08em] uppercase text-center">
                Instagram 2010 — 2026 &nbsp;·&nbsp; YouTube: Still Running
              </div>
            </div>

            <div className="mt-1 bg-brand/10 border border-white/10 px-8 py-6 flex items-center gap-6">
              <div className="text-4xl md:text-5xl font-bold text-brand leading-none">
                60%
              </div>
              <div className="text-[11px] text-neutral-200 tracking-[0.08em] uppercase leading-relaxed">
                Of total views on established YouTube channels
                <br />
                come from videos older than 6 months
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="bg-white border-t-4 border-black py-24 md:py-32 px-6 md:px-12">
      {/* Top header row */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-end mb-20 pb-20 border-b border-black/10">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand block mb-5">
            The Method
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] text-black tracking-tight">
            HOW WE
            <br />
            <span className="text-brand">SCALE</span>
            <br />
            YOU.
          </h2>
        </div>

        <div className="flex flex-col justify-end gap-8">
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-md">
            We are completely focused on one thing: transforming your content into a
            high-performance growth engine that dominates the algorithm. Every step is
            engineered, not guessed.
          </p>
          <Link
            to="/#pricing"
            className="inline-block bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-colors"
          >
            Start Growing My Channel
          </Link>
        </div>
      </div>

      {/* 3 steps */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {/* STEP 01 */}
          <div className="bg-white flex flex-col">
            <div className="relative overflow-hidden aspect-[4/3] group">
              <img
                src={Step1Image}
                alt="Strategic Blueprint"
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03] group-hover:grayscale-0 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 left-5 bg-brand px-3 py-1.5">
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white">
                  Step 01
              </span>
              </div>
            </div>

            <div className="p-10 flex-1 flex flex-col border-t border-black/10">
              <h3 className="font-bold uppercase text-black text-2xl tracking-[0.06em] leading-tight mb-4">
                THE STRATEGIC
                <br />
                BLUEPRINT
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                We do not guess. We engineer. Every project starts with a deep-dive audit of your
                channel&apos;s historical data and your competitors&apos; winning patterns. We
                identify exactly where you are losing clicks and where your retention is bleeding.
                Before we touch a single frame, we build your custom Growth Blueprint, a
                data-backed roadmap designed to dominate your specific niche.
              </p>
              <div className="mt-7 pt-6 border-t border-black/10 flex flex-col gap-2.5">
                {[
                  "90-day channel audit",
                  "Competitor pattern mapping",
                  "Custom Growth Blueprint",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-[11px] tracking-[0.08em] uppercase text-neutral-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="bg-white flex flex-col">
            <div className="relative overflow-hidden aspect-[4/3] group">
              <img
                src={Step2Image}
                alt="Elite Production"
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03] group-hover:grayscale-0 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 left-5 bg-brand px-3 py-1.5">
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white">
                  Step 02
                </span>
              </div>
            </div>

            <div className="p-10 flex-1 flex flex-col border-t border-black/10">
              <h3 className="font-bold uppercase text-black text-2xl tracking-[0.06em] leading-tight mb-4">
                HIGH-VELOCITY
                <br />
                PRODUCTION
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                Once the strategy is locked, our production engine starts. We deliver high-CTR
                thumbnails, data-backed script hooks, and retention-focused editing in a relentless
                48 to 72 hour cycle. You get a constant stream of ready-to-post assets, each
                engineered to feed the algorithm exactly what it demands: attention and retention.
              </p>
              <div className="mt-7 pt-6 border-t border-black/10 flex flex-col gap-2.5">
                {[
                  "48–72 hour delivery cycle",
                  "Thumbnails, scripts, editing",
                  "Ready to post on arrival",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-[11px] tracking-[0.08em] uppercase text-neutral-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="bg-white flex flex-col">
            <div className="relative overflow-hidden aspect-[4/3] group">
              <img
                src={Step3Image}
                alt="Data-Driven Optimization"
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03] group-hover:grayscale-0 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 left-5 bg-brand px-3 py-1.5">
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white">
                  Step 03
                </span>
            </div>
            </div>

            <div className="p-10 flex-1 flex flex-col border-t border-black/10">
              <h3 className="font-bold uppercase text-black text-2xl tracking-[0.06em] leading-tight mb-4">
                DATA-DRIVEN
                <br />
                OPTIMIZATION
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                We launch, we track, and we optimize. We use real-time performance metrics to double
                down on what is working and ruthlessly cut what is not. Your channel stops being a
                guessing game and starts being a predictable revenue and attention machine. We scale
                your winners until you own your category.
              </p>
              <div className="mt-7 pt-6 border-t border-black/10 flex flex-col gap-2.5">
                {[
                  "Real-time CTR monitoring",
                  "Active post-publish swaps",
                  "Monthly deep-dive reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-[11px] tracking-[0.08em] uppercase text-neutral-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
      
        {/* Bottom stat bar */}
        <div className="mt-1 bg-black text-white grid md:grid-cols-3 border border-black/10 border-t-0">
          <div className="px-10 py-7 md:py-8 border-r border-white/10 flex items-center gap-4">
            <span className="text-4xl md:text-5xl font-bold text-brand leading-none">7</span>
            <span className="text-[11px] tracking-[0.08em] uppercase text-neutral-300 leading-snug">
              Days to first
              <br />
              asset delivery
            </span>
    </div>
          <div className="px-10 py-7 md:py-8 border-r border-white/10 flex items-center gap-4">
            <span className="text-4xl md:text-5xl font-bold text-brand leading-none">48h</span>
            <span className="text-[11px] tracking-[0.08em] uppercase text-neutral-300 leading-snug">
              Active monitoring
              <br />
              after every publish
            </span>
          </div>
          <div className="px-10 py-7 md:py-8 flex items-center gap-4">
            <span className="text-4xl md:text-5xl font-bold text-brand leading-none">60</span>
            <span className="text-[11px] tracking-[0.08em] uppercase text-neutral-300 leading-snug">
              Day CTR guarantee
              <br />
              or you don&apos;t pay
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const PostSignupTimelineSection = () => {
  const steps = [
    {
      day: "01",
      label: "Day One",
      title: "You complete the onboarding form",
      description:
        "After signing up, you receive a short onboarding form. You share your channel link, your content goals, your niche, your target audience, and any reference channels you admire. No call needed. The form takes under 15 minutes.",
      tag: "You do this once",
    },
    {
      day: "03",
      label: "Day Three",
      title: "You receive your channel audit and Growth Blueprint",
      description:
        "We run a full diagnostic of your channel: thumbnail patterns, CTR signals, retention behavior, niche positioning, and competitor analysis. You receive a written document showing exactly where you are losing clicks and what we fix first.",
      tag: "No fluff. Just data and a clear action plan.",
    },
    {
      day: "07",
      label: "Day Seven",
      title: "First thumbnails and scripts delivered for your approval",
      description:
        "Your first batch of assets lands in your shared workspace. Three thumbnail variations for your next video, the full script with hook architecture mapped out, and your optimized title options. You review, leave feedback, and we refine within 24 hours.",
      tag: "One round of revisions included per asset",
    },
    {
      day: "14",
      label: "Day Fourteen",
      title: "First optimized video goes live on your channel",
      description:
        "Your first video with VHORO packaging is published. We monitor CTR in real time. If performance signals underperform in the first 48 hours, we swap the thumbnail and title immediately without waiting for you to notice.",
      tag: "Active monitoring starts the moment you publish",
    },
    {
      day: "30",
      label: "Day Thirty",
      title: "First performance report and month two strategy",
      description:
        "You receive a full report covering CTR before and after, impressions growth, subscriber velocity, and the top three opportunities we identified for the next month. This is where most clients start seeing the data shift in their own YouTube Studio dashboard.",
      tag: "Results you can verify yourself",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand block mb-5">
              From Payment to First Results
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-neutral-900 uppercase mb-4">
              HERE IS EXACTLY<br />
              WHAT HAPPENS<br />
              AFTER YOU SIGN UP.
        </h2>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl">
              No ambiguity. No waiting for someone to reply. This is the exact sequence from the moment you
              sign up to the moment your first optimized video goes live.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 border border-neutral-300/60 divide-y divide-neutral-300/60 bg-neutral-100/30">
          {steps.map((step, index) => (
            <ScrollReveal key={step.day} direction="up" delay={0.15 + index * 0.08}>
              <div className="grid md:grid-cols-[140px_1fr]">
                <div className="border-b md:border-b-0 md:border-r border-neutral-300/60 px-8 md:px-10 py-10 md:py-12">
                  <div className="text-5xl md:text-6xl font-bold text-brand leading-none">
                    {step.day}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1 font-semibold">
                    {step.label}
                  </div>
                </div>
                <div className="px-8 md:px-12 py-10 md:py-12">
                  <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-neutral-700 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  <span className="inline-block mt-4 text-[10px] tracking-[0.16em] uppercase text-brand bg-brand/10 px-3 py-1 font-semibold">
                    {step.tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const DivisionOfWorkSection = () => {
  const whatYouSend = [
    "Your raw footage or recorded video file",
    "A brief description of what the video is about",
    "Any specific talking points or structure you want kept",
    "Your brand references on the first video only",
    "Approval or feedback within 48 hours when we send drafts",
  ];

  const whatWeDeliver = [
    "Three thumbnail variations engineered for maximum CTR",
    "Full script or hook rewrite optimized for retention",
    "Three title variations with A/B testing strategy",
    "Complete metadata: description, tags, chapters, cards",
    "Edited video with retention-optimized pacing (Plan 02 and above)",
    "YouTube Shorts cut from the long-form (Plan 02 and above)",
    "7-day post-publish monitoring with active swaps if needed",
    "Monthly performance report with next month strategy",
  ];

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10 relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      <DarkGridBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-4xl ml-auto text-right">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white block mb-5">
              The Division of Work
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight uppercase">
              YOU FOCUS ON<br />
              <span className="text-brand">RECORDING.</span>
              <br />
              WE HANDLE<br />
              <span className="text-white">EVERYTHING ELSE.</span>
            </h2>
        </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.18}>
          <div className="mt-16 md:mt-20 border border-white/10 bg-white/5">
            <div className="grid md:grid-cols-2 gap-px bg-white/10">
              {/* What you send us */}
              <div className="bg-neutral-950 px-8 md:px-12 py-10 md:py-13">
                <div className="text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-400 pb-6 mb-0 border-b border-white/10">
                  What you send us
                </div>
                <ul className="list-none divide-y divide-white/10">
                  {whatYouSend.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start py-4 text-sm text-neutral-400 leading-relaxed"
                    >
                      <span className="text-xs text-neutral-400 mt-1 flex-shrink-0">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
      </div>

              {/* What we deliver back */}
              <div className="bg-neutral-950 px-8 md:px-12 py-10 md:py-13">
                <div className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand pb-6 mb-0 border-b border-white/10">
                  What we deliver back
            </div>
                <ul className="list-none divide-y divide-white/10">
                  {whatWeDeliver.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start py-4 text-sm text-white leading-relaxed"
                    >
                      <span className="text-xs text-brand font-bold mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-brand/5 border-t border-white/10 px-8 md:px-12 py-6 md:py-7">
              <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                <span className="font-semibold">
                  No calls required at any stage of the process.
                </span>{" "}
                All communication happens asynchronously through a shared workspace. You record. We
                engineer the growth. That is the entire arrangement.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const CtaAssurancesStrip = () => {
  const points = [
    "No long-term contracts",
    "Cancel anytime",
    "First assets in 7 days",
    "60-day CTR guarantee",
    "No calls or meetings required",
    "Results visible in YouTube Studio",
  ];

  return (
    <div className="w-full border-y border-white/10 bg-white/5 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {points.map((text) => (
          <div
            key={text}
            className="flex items-center gap-2 text-[11px] md:text-xs font-medium text-neutral-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ObjectionsSection = () => {
  const items = [
    {
      question: '"I tried agencies before and got nothing."',
      answer:
        "Most agencies sell production volume. We sell performance engineering. The difference is that every asset we deliver is built around your channel data, not a generic template. If we do not improve your CTR in 60 days, you do not pay for month two. That is how confident we are in the work.",
      highlight:
        "performance engineering.",
    },
    {
      question: '"I am not sure my channel is ready for this."',
      answer:
        "If you have at least 10,000 subscribers and you are uploading consistently, your channel is ready. The creators who benefit most are not the ones with the biggest channels. They are the ones with good content that the algorithm is not pushing. That is a packaging problem, and that is exactly what we fix.",
      highlight:
        "good content that the algorithm is not pushing.",
    },
    {
      question: '"I do not have time to manage another vendor."',
      answer:
        "You will spend under two hours per month interacting with us. You fill out the onboarding form once, you approve assets when they land in your workspace, and you read the monthly report. Everything else is on our side. No calls. No check-ins. No meetings.",
      highlight:
        "Everything else is on our side.",
    },
    {
      question: '"What if my niche is too specific for this to work?"',
      answer:
        "Niche specificity is an advantage, not a problem. The more specific your niche, the easier it is to identify the exact packaging patterns that win in your feed. We have scaled channels in finance, business, lifestyle, tech, and personal development. The engineering principles are the same. Only the creative execution changes.",
      highlight:
        "We have scaled channels in finance, business, lifestyle, tech, and personal development.",
    },
  ];

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10 relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      <DarkGridBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-4xl">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand block mb-5">
              Still On The Fence
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight uppercase">
              WE HAVE HEARD<br />
              <span className="text-brand">EVERY OBJECTION.</span>
              <br />
              HERE ARE<br />
              THE ANSWERS.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.18}>
          <div className="mt-16 md:mt-20 border border-white/10 bg-white/5">
            <div className="grid md:grid-cols-2 gap-px bg-white/10">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-neutral-950 px-8 md:px-12 py-10 md:py-12 ${
                    idx >= 2 ? "border-t border-white/10" : ""
                  }`}
                >
                  <p className="text-sm md:text-[15px] italic text-neutral-400 mb-5 leading-relaxed">
                    {item.question}
                  </p>
                  <p className="text-sm md:text-[15px] text-white leading-relaxed font-normal">
                    {item.answer.split(item.highlight)[0]}
                    <span className="text-brand font-semibold">
                      {item.highlight}
                    </span>
                    {item.answer.split(item.highlight)[1]}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-8 pt-6">
              <CtaAssurancesStrip />
            </div>
          </div>
        </ScrollReveal>
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
      system: "The Packaging & Performance System",
      bestFor:
        "Creators with strong content that underperforms in the feed. Your problem is not the video. It is the packaging.",
      price: "$1,490",
      investmentNote: "/ month",
      cta: "DOMINATE THE CLICK",
      priceId: "price_1T7IOgFjJxHsNvNGn01NsM8e",
      deliverables: [
        { item: "Thumbnails & Packaging" },
        {
          item:
            "12 high-performance thumbnails per month. 4 videos with 3 strategic variations each, engineered to maximize CTR and stop the scroll."
        },
        {
          item:
            "Live A/B/C testing with real-time swaps based on performance signals. We do not wait. We act on data."
        },
        { item: "Scriptwriting & Hook Engineering" },
        {
          item:
            "4 full long-form video scripts per month, structured for clarity, retention, and audience progression."
        },
        {
          item:
            "Hook architecture for the first 30 seconds of every video, engineered to hold attention before the algorithm decides your video is worth pushing."
        },
        { item: "Channel Optimization" },
        {
          item:
            "Advanced metadata on every upload: CTR-focused titles, structured descriptions, tags, chapters, cards, and end screens."
        },
        {
          item:
            "90-day channel audit on kickoff. We diagnose exactly where you are losing clicks and attention before we touch anything."
        },
        { item: "Performance Monitoring" },
        {
          item:
            "7-day active post-publish monitoring on every video. If CTR underperforms in the first 48 hours, we swap the thumbnail and title immediately."
        },
        {
          item:
            "Monthly competitor analysis: breakdown of 2 direct competitors' packaging patterns and content strategy."
        },
        { item: "Reporting & Strategy" },
        {
          item:
            "Monthly performance report covering CTR, impressions growth, and subscriber velocity."
        },
        {
          item:
            "30-minute monthly strategy call to review performance and plan the next month."
        }
      ],
      outcomes: [
        "Higher CTR within the first 2 to 3 videos.",
        "Stronger first-week algorithm performance.",
        "Scripts that hold viewers instead of losing them at the 30-second mark.",
        "A packaging system that compounds over time."
      ],
      popular: false
    },
    {
      name: "PLAN 02",
      subtitle: "VHORO RETENTION ENGINE™",
      system: "The Watch-Time & Scale System",
      bestFor:
        "Creators between 50k and 500k subscribers who are ready to turn their channel into a predictable growth and revenue machine. You have an audience. You need a system.",
      price: "$3,490",
      investmentNote: "/ month",
      cta: "SCALE MY REACH",
      priceId: "price_1T7IOwFjJxHsNvNG6G2q2B8y",
      deliverables: [
        { item: "Thumbnails & Packaging" },
        {
          item:
            "24 high-performance thumbnails per month. 8 videos with 3 optimized variations each."
        },
        {
          item:
            "Continuous A/B/C testing with weekly optimization cycles."
        },
        {
          item:
            "Title framework applied to every video: pattern-interrupt headlines engineered for curiosity and clicks."
        },
        { item: "Scriptwriting & Content Architecture" },
        {
          item:
            "8 full long-form video scripts per month, story-driven and engineered for watch time, binge potential, and audience progression."
        },
        {
          item:
            "Hook architecture for the first 30 to 60 seconds of every video."
        },
        {
          item:
            "Retention map per video: we map exactly where to place open loops, pattern interrupts, and re-engagement points to keep viewers watching."
        },
        { item: "Content Ideation" },
        {
          item:
            "16 video ideas per month ranked by performance potential, so you never waste a video on a topic that will not grow the channel."
        },
        { item: "Video Editing" },
        {
          item:
            "8 long-form video edits per month, pacing optimized for retention, clarity, and engagement."
        },
        {
          item:
            "Clean, high-performance editing structure focused on holding viewers, not on complex motion graphics."
        },
        { item: "Discovery Expansion" },
        {
          item:
            "8 YouTube Shorts per month, strategically produced to expand reach and feed viewers into your long-form content ecosystem."
        },
        { item: "Growth Strategy" },
        {
          item:
            "Quarterly content strategy roadmap covering positioning, topic architecture, and niche authority growth."
        },
        {
          item:
            "Monthly retention audit with detailed drop-off curve analysis and structural fixes."
        },
        {
          item:
            "Weekly competitor intelligence: top 5 channels in your niche tracked and analyzed every week."
        },
        { item: "Post-Publish Optimization" },
        {
          item:
            "Unlimited post-publish monitoring on every video with refresh cycles if a video underperforms within 72 hours."
        },
        {
          item:
            "Session optimization: playlist structure and video sequencing to maximize watch time per session."
        },
        { item: "Reporting & Access" },
        {
          item:
            "Full monthly performance report across all key metrics."
        },
        {
          item:
            "60-minute monthly strategy call with the founder."
        },
        {
          item:
            "Direct Slack access during business hours. No ticket system, no delays."
        }
      ],
      outcomes: [
        "Increased average view duration across all videos.",
        "Higher session watch time and binge rate.",
        "Shorts-driven discovery feeding long-form growth.",
        "A content system that runs on data, not guesswork.",
        "Stronger niche authority and algorithm positioning."
      ],
      popular: true
    },
    {
      name: "PLAN 03",
      subtitle: "VHORO ELITE PARTNERSHIP™",
      system: "Custom YouTube Growth Architecture",
      bestFor:
        "High-level creators, personal brands, and companies that need a fully custom YouTube operation built around specific business outcomes. You are not looking for a service. You are looking for a growth partner.",
      price: "",
      investmentNote: "Custom pricing, scoped after strategy call.",
      totalValue: "",
      cta: "CONTACT US",
      deliverables: [
        { item: "Everything in the Retention Engine, plus:" },
        { item: "Advanced Production" },
        {
          item:
            "Custom video volume, up to 16 or more videos per month based on your publishing goals."
        },
        {
          item:
            "Premium editing with motion graphics if required, including series and recurring format production."
        },
        {
          item:
            "Full content repurposing: clips, reels, and carousels extracted from every long-form video."
        },
        { item: "Monetization Architecture" },
        {
          item:
            "YouTube-to-revenue funnel design: channel to email list to product or service."
        },
        {
          item:
            "Sponsorship positioning strategy and revenue diversification roadmap across AdSense, memberships, merchandise, and affiliates."
        },
        {
          item:
            "CTA engineering inside scripts so every video is scripted to convert, not just entertain."
        },
        { item: "Full Channel Operation" },
        {
          item:
            "Complete upload management: thumbnail, title, description, tags, and scheduling handled. You only record."
        },
        {
          item:
            "Publishing system with editorial calendar, briefings, approvals, and feedback in 48-hour cycles."
        },
        {
          item:
            "Deep SEO strategy: keyword research, topic clusters, and search vs browse content balance."
        },
        { item: "Accelerated Growth" },
        {
          item:
            "Collaboration and cross-promotion strategy plus launch support for anchor videos."
        },
        {
          item:
            "Multi-platform distribution: YouTube content repurposed for podcast, newsletter, and LinkedIn."
        },
        { item: "Dedicated Access" },
        {
          item:
            "Dedicated growth strategist and priority production team with 24–48 hour delivery."
        },
        {
          item:
            "Direct founder access and weekly strategy calls instead of monthly."
        },
        {
          item:
            "Dedicated Slack channel with 4-hour response time during business hours."
        }
      ],
      outcomes: [
        "Category leadership in your niche.",
        "YouTube operating as a primary revenue and growth channel.",
        "A scalable, predictable content operation, not a content hamster wheel.",
        "High-performance packaging and retention running as a system.",
        "A long-term strategic moat built around your content ecosystem."
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
              Pick Your<br />
              <span className="text-brand">Growth Path.</span>
            </h2>
            <p className="text-gray-500 font-semibold tracking-widest uppercase text-xs">CHOOSE THE PERFORMANCE PLAN THAT SCALES YOUR REVENUE.</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} direction="up" delay={0.2 + i * 0.15}>
              <div 
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
              </div>

              <div className="pt-6 border-t border-black/5 mt-auto">
                <button 
                  onClick={() => plan.priceId ? handleCheckout(plan.priceId) : window.location.href = '/connect'}
                  className={`w-full py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${plan.popular ? 'bg-brand text-white hover:opacity-90 hover:scale-105' : 'bg-black text-white hover:bg-neutral-800 hover:scale-105'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const PerformanceGuaranteeSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-left max-w-4xl">
            {/* Number 60 DAY with Rock Salt font */}
            <div className="mb-6">
              <span 
                className="text-7xl md:text-9xl font-black text-white leading-none block"
                style={{ 
                  fontFamily: '"Rock Salt", cursive',
                  fontWeight: 900
                }}
              >
                60 DAY
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-tight mb-8">
              Performance Guarantee
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Across all plans: if we do not measurably improve your CTR within the first 60 days, you do not pay for month two. We keep clients because of results, not contracts.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    {
      date: "MARCH 04, 2026",
      title: "THE RETENTION CODE: HOW TO SCRIPT VIDEOS THAT PEOPLE ACTUALLY FINISH",
      image: CoverScriptRetention,
      slug: "retention-code"
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
    <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
      <DarkGridBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center justify-between mb-16">
            <div className="h-px bg-white/20 flex-grow mr-8"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase">Read the latest</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, i) => (
            <ScrollReveal key={i} direction="up" delay={0.2 + i * 0.1}>
              <motion.div 
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
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-col items-center">
            <div className="w-full h-px bg-white/20 mb-8"></div>
            <Link to="/insights" className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all cursor-pointer">
              Our Blog
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const categories = [
    {
      id: "01",
      title: "THE PROCESS",
      questions: [
        {
          q: "What happens immediately after I make the payment?",
          a: "Within 24 hours you receive your onboarding form and access to your shared workspace. Within 72 hours we deliver your channel audit and Growth Blueprint. Within 7 days your first assets are ready for approval. No call required at any point in the process.",
        },
        {
          q: "What happens during the Onboarding & Briefing phase?",
          a: "You fill out one form. We ask for your channel link, your content goals, your target audience, your niche, and any reference channels you admire. That is everything we need to start. From that information we build your Growth Blueprint and begin production. You never have to explain yourself twice.",
        },
        {
          q: "How do we communicate and give feedback?",
          a: "Everything happens asynchronously through your shared workspace. When assets are ready, you leave written feedback directly on the files. We return the revised version within 24 hours. No scheduled calls. No meetings. No email chains. Most clients spend under two hours per month communicating with us.",
        },
        {
          q: "What is the turnaround time for thumbnails and scripts?",
          a: "First delivery happens within 7 days of onboarding. After that, thumbnails and scripts follow a 48 to 72 hour production cycle. Video edits take 5 to 7 business days from the moment we receive your raw footage. Every cycle has a clear deadline. Nothing sits waiting.",
        },
        {
          q: "Do I need to share access to my YouTube Studio?",
          a: "For Plan 01 we only need your public channel link. For Plan 02 and above, we request view-level analytics access so we can read your retention curves and CTR data directly. We never need posting access unless you want us to handle uploads as part of the Elite Partnership.",
        },
      ],
    },
    {
      id: "02",
      title: "STRATEGY & PERFORMANCE",
      questions: [
        {
          q: "How quickly will I see results?",
          a: "Most clients see measurable CTR improvement within the first 2 to 3 videos. Significant channel-wide growth typically becomes visible between day 30 and day 60, depending on your upload frequency and niche competitiveness. We track every signal from day one so you can see the trajectory moving before the big numbers shift.",
        },
        {
          q: "How do you research my niche before touching anything?",
          a: "Before we design anything, we audit the last 90 days of your channel's public performance signals, map the thumbnail and title patterns of your top 5 competitors, and identify the visual gaps in your niche feed. We find what is winning in your category and engineer your packaging to stand out against it specifically, not against YouTube in general.",
        },
        {
          q: "What makes your thumbnails different from what a freelancer would make?",
          a: "A freelancer makes what looks good. We engineer what performs. Every thumbnail starts with a competitive analysis of your niche feed, a CTR hypothesis based on your channel's historical signals, and a three-variation testing structure. We then monitor performance after publish and swap actively if the data tells us to. A freelancer delivers a file. We deliver a system.",
        },
        {
          q: "How do you write scripts that actually hold retention?",
          a: "Every script is built around a retention map. We identify the moments most likely to cause drop-off and restructure the pacing around them. The first 30 seconds are engineered as a hook with an open loop that only closes near the end of the video. We place pattern interrupts at strategic intervals throughout. The goal is not a well-written script. The goal is a script the algorithm rewards.",
        },
        {
          q: "What exactly is in the Monthly Performance Report?",
          a: "CTR before and after our involvement. Impressions growth month over month. Subscriber velocity. Average view duration trends. A breakdown of which videos overperformed and the structural reasons why. A competitor snapshot showing what shifted in your niche that month. And the top three strategic opportunities we identified for the following month.",
        },
        {
          q: "Can you guarantee I will grow?",
          a: "We guarantee measurable CTR improvement within 60 days or you do not pay for month two. CTR is entirely within our control. Subscriber growth depends on additional variables like your upload frequency, your content quality, and your niche size. We engineer everything on our side of the equation as hard as possible. The rest depends on you showing up consistently.",
        },
      ],
    },
    {
      id: "03",
      title: "PRICING & COMMITMENT",
      questions: [
        {
          q: "Is there a contract or minimum commitment?",
          a: "No contracts. No minimum commitment. Month to month, cancel anytime. We keep clients because of results, not lock-in clauses. The average client stays for 8 months because the data keeps improving, not because they are obligated to.",
        },
        {
          q: "Why is Plan 01 $1,490 and not cheaper?",
          a: "Below that price point you get freelancers who deliver files without strategy, testing, or post-publish monitoring. What we charge includes the audit, the Growth Blueprint, the A/B testing infrastructure, the active monitoring, the monthly reporting, and the strategy call.",
        },
        {
          q: "What is the difference between Plan 01 and Plan 02 in practice?",
          a: "Plan 01 fixes your packaging. Plan 02 fixes your entire content operation. If your problem is that good videos are not getting clicked, Plan 01 solves that. If your problem is that you need more videos, stronger retention, Shorts-driven discovery, and a quarterly strategy that compounds over time, Plan 02 is the right tool.",
        },
        {
          q: "Do you work with channels outside the United States?",
          a: "Yes. We work with creators globally. The only requirement is that your content is in English or that your target audience is English-speaking, since our niche research and competitor analysis are built around the English-language YouTube ecosystem.",
        },
      ],
    },
    {
      id: "04",
      title: "POLICIES & REVISIONS",
      questions: [
        {
          q: "Why do you only allow one round of revisions per asset?",
          a: "Because unlimited revisions create loops that delay your publishing schedule and dilute the original strategic intent. Every asset we deliver is built on data. One round is enough to address factual corrections, brand alignment, and reasonable creative adjustments.",
        },
        {
          q: "What if I really need a second revision?",
          a: "Contact your account manager directly. We will assess whether the issue is a misalignment in the original brief or a scope change on your end. If it is on us, we fix it at no cost. If it is a new direction you want to take, we scope it as an additional asset.",
        },
        {
          q: "Can I change the creative direction mid-project?",
          a: "Yes, but with a two-week notice window. Changing direction mid-cycle affects thumbnails, scripts, and the editorial calendar simultaneously. Two weeks lets us realign everything without disrupting your publishing schedule.",
        },
        {
          q: "What happens if I am not happy with the results after 60 days?",
          a: "If we have not measurably moved your CTR box-plot in 60 days, you do not pay for month two. If you are unhappy for reasons outside of CTR, we have a direct conversation about what is not working and either fix the strategy or part ways without friction.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<{ cat: number; q: number } | null>(null);

  const handleToggleCategory = (idx: number) => {
    setOpenCategory((prev) => (prev === idx ? null : idx));
    setOpenQuestion(null);
  };

  const handleToggleQuestion = (catIdx: number, qIdx: number) => {
    setOpenQuestion((prev) =>
      prev && prev.cat === catIdx && prev.q === qIdx ? null : { cat: catIdx, q: qIdx }
    );
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10 relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      <DarkGridBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand block mb-5">
              FAQ
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white uppercase">
              GOT QUESTIONS?
              <br />
              <span className="text-brand" style={{ WebkitTextStroke: "1px rgba(245,242,236,0.15)" }}>
                WE'VE GOT
              </span>
              <br />
              ANSWERS.
          </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.18}>
          <div className="mt-16 md:mt-20 border border-white/10" id="faq-root">
            {categories.map((cat, catIdx) => {
              const isCatOpen = openCategory === catIdx;
              return (
                <div
                  key={cat.id}
                  className="border-b border-white/10 last:border-b-0 faq-category"
                >
                  {/* Category trigger */}
                  <button
                    type="button"
                    onClick={() => handleToggleCategory(catIdx)}
                    className="w-full grid grid-cols-[1fr_auto] items-center px-6 md:px-12 py-8 md:py-10 text-left transition-colors"
                    style={{
                      backgroundColor: isCatOpen ? "rgba(245,242,236,0.02)" : "transparent",
                    }}
                  >
                    <div className="flex items-center gap-6 md:gap-8">
                      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand">
                        {cat.id}
                      </span>
                      <span className="text-2xl md:text-[28px] font-bold tracking-[0.06em] text-white uppercase">
                        {cat.title}
                      </span>
                      <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-neutral-400 hidden md:inline">
                        {cat.questions.length} questions
                      </span>
                      </div>
                    <span
                      className="text-2xl text-brand"
                      style={{ transform: isCatOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                    >
                      +
                    </span>
                  </button>

                  {/* Category body */}
                  {isCatOpen && (
                    <div className="border-t border-white/10 faq-cat-body">
                      {cat.questions.map((q, qIdx) => {
                        const isQOpen =
                          openQuestion && openQuestion.cat === catIdx && openQuestion.q === qIdx;
                        return (
                          <div
                            key={q.q}
                            className="border-b border-white/5 last:border-b-0 faq-item"
                          >
                            <button
                              type="button"
                              onClick={() => handleToggleQuestion(catIdx, qIdx)}
                              className="w-full flex items-start justify-between gap-6 px-6 md:px-12 py-7 text-left transition-colors"
                              style={{
                                backgroundColor: isQOpen
                                  ? "rgba(245,242,236,0.02)"
                                  : "transparent",
                              }}
                            >
                              <span className="text-sm md:text-[15px] text-neutral-400 leading-relaxed">
                                {q.q}
                              </span>
                              <span
                                className="text-base md:text-lg text-brand q-icon flex-shrink-0 mt-1"
                                style={{
                                  transform: isQOpen ? "rotate(45deg)" : "rotate(0deg)",
                                  transition: "transform 0.2s ease, color 0.2s ease",
                                  color: isQOpen ? "#f5f2ec" : "#FF0033",
                                }}
                              >
                                +
                              </span>
                            </button>
                            {isQOpen && (
                              <div className="px-6 md:px-12 pb-7 pt-1 faq-answer">
                                <p className="text-sm md:text-[15px] text-neutral-400 leading-relaxed max-w-3xl">
                                  {q.a}
                                </p>
              </div>
                            )}
            </div>
                        );
                      })}
        </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
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
              Start Growing My Channel
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

      <DarkGridBackground />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="space-y-8 order-2 md:order-1">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-4 bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">WHO IS BEHIND VHORO MEDIA</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-[0.9]">
              João Camargo
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
              <p>
                Four years ago, I started designing thumbnails trying to understand why some videos explode while others disappear. That curiosity turned into an obsession with the YouTube algorithm and what truly makes a video succeed. After scaling more than 30 channels through testing, strategy and relentless optimization, I realized growth on YouTube is engineered, not guessed.
              </p>
              <p>
                Today, through VhoroMedia, I apply everything I've learned about performance packaging, strategic scripting and post-publish optimization to help creators turn attention into authority and channels into scalable growth assets.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative order-1 md:order-2">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ViewsCounter = () => {
  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center space-y-8 md:space-y-10">
            {/* Headline */}
            <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] uppercase">
                STOP UPLOADING<br />
                INTO THE <span 
                  className="text-brand"
              style={{
                    fontFamily: '"Rock Salt", cursive',
                    fontWeight: 900
                  }}
                >
                  VOID.
                </span>
              </h2>
          </div>

            {/* Body Text */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Your content deserves to be seen.
                <br />
                Request a professional channel diagnostic and uncover the exact bottlenecks limiting your growth.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="https://tally.so/r/1AK2eg"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
              >
                Get Your Free Channel Diagnostic
              </a>
            </div>

            {/* Disclaimers */}
            <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto">
              <p className="text-sm text-white/60 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <span>No long-term contracts</span>
                <span className="text-white/30">•</span>
                <span>Cancel anytime</span>
                <span className="text-white/30">•</span>
                <span>First assets in 7 days</span>
                <span className="text-white/30">•</span>
                <span>60-day CTR guarantee</span>
                <span className="text-white/30">•</span>
                <span>No calls or meetings required</span>
                <span className="text-white/30">•</span>
                <span>Results visible in YouTube Studio</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
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
      <CaseStudiesSection />
      <Services />
      <PostSignupTimelineSection />
      <DivisionOfWorkSection />
      <HeroBenefitsStrip />
      <ObjectionsSection />
      <PricingSection />
      <PerformanceGuaranteeSection />
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
