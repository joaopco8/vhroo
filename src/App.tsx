/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X, ArrowRight, ArrowLeft, Instagram, Twitter, Facebook, Youtube, Linkedin, Zap } from "lucide-react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

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
import SimonSquibbImg from "./imgs/clients/Simon Squibb.jpg";
import ImanGadzhiImg from "./imgs/clients/Iman Gadzhi.jpg";
import AliAbdaalImg from "./imgs/clients/Ali Abdaal.jpg";
import PedroSobralImg from "./imgs/clients/Pedro Sobral.jpg";
import ThaisaLealImg from "./imgs/clients/Thaisa Leal.jpg";
import GrahamStephanImg from "./imgs/clients/Graham Stephan.jpg";
import RyanTrahanImg from "./imgs/clients/Ryan Trahan.jpg";

// Images – Article covers (blog highlights)
import CoverCompetitor from "./imgs/capas artigos/How To Steal Your Competition’s Best Ideas (Legally).jpg";
import CoverMonetization from "./imgs/capas artigos/How To Turn Your Channel Into A Revenue Machine.jpg";
import CoverAnalytics from "./imgs/capas artigos/How To Read Your YouTube Analytics Like A Pro.jpg";

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
          <button onClick={() => setIsOpen(!isOpen)}>
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Floating hero image on mobile */}
        <motion.img
          src={HeroMobileImage}
          alt="VHORO Media recording setup"
          className="mx-auto mb-8 w-[95%] block md:hidden"
          initial={{ y: -12 }}
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[4.2rem] font-bold text-black leading-[1.1] tracking-normal uppercase"
        >
          <span className="block">DOUBLE YOUR CTR.</span>
          <span className="block">TRIPLE YOUR RETENTION.</span>
          <span className="block">SCALE YOUR REVENUE.</span>
        </motion.h1>
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

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <p className="text-lg font-semibold leading-tight mb-8 max-w-md">
            We are architects of attention, transforming social relevance into your channel’s most valuable growth asset.
          </p>
          <Link 
            to="/#pricing"
            className="inline-block bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-colors"
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
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll">
            {[...row1, ...row1].map((item, i) => (
              <div key={i} className="w-[280px] md:w-[420px] aspect-video mx-2 bg-gray-100 overflow-hidden rounded-xl">
                <img src={item} alt={`Work ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll-reverse">
            {[...row2, ...row2].map((item, i) => (
              <div key={i} className="w-[280px] md:w-[420px] aspect-video mx-2 bg-gray-100 overflow-hidden rounded-xl">
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
  const containerRef = useState<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
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
          className="flex whitespace-nowrap"
        >
          <div className="flex animate-scroll py-10">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div 
                key={i} 
                className="inline-block w-[240px] md:w-[320px] aspect-[3/4] mx-4 relative rounded-3xl overflow-hidden shadow-xl group"
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
    <div className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900/70 border border-white/10 rounded-3xl px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center gap-10"
        >
          <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
            <div className="inline-flex items-center justify-center bg-brand/10 rounded-full p-3">
              <Youtube className="w-7 h-7 text-brand fill-current" />
            </div>
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand shadow-lg">
              <img 
                src={MrBeastImg} 
                alt="MrBeast" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-1">
              <p className="text-white font-bold uppercase tracking-widest text-xs">MrBeast</p>
              <p className="text-brand text-[10px] font-bold uppercase tracking-widest">Global YouTube Authority</p>
            </div>
          </div>

          <div className="flex-1 text-left">
            <blockquote className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-snug italic mb-4">
              “They understand the algorithm better than anyone I’ve worked with.”
            </blockquote>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
              Source: Private performance review from VHORO Media client portfolio
            </p>
          </div>
        </motion.div>
      </div>
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
      deliverables: [
        { item: "12 High-Performance Thumbnails (4 videos/month — 3 strategic variations per video)" },
        { item: "4 Full Long-Form Video Scripts (Structured for retention, clarity and audience progression)" },
        { item: "Advanced Metadata Optimization (CTR-focused titles, structured descriptions, tag architecture)" },
        { item: "Live A/B/C Testing (Real-time thumbnail & title swaps based on performance data)" },
        { item: "Post-Publish Optimization – First 7 Days (CTR monitoring, title refinements, packaging adjustments)" },
        { item: "Monthly Competitor Analysis" },
        { item: "Performance Report (CTR, impressions, subscriber velocity)" }
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
      system: "(The Watch-Time & Scale System)",
      bestFor: "Creators and brands ready to scale consistently and expand reach.",
      price: "$3,490",
      investmentNote: "/ month",
      totalValue: "$24,000",
      cta: "SCALE MY REACH",
      deliverables: [
        { item: "24 High-Performance Thumbnails (8 videos/month — 3 optimized variations per video)" },
        { item: "8 Advanced Long-Form Video Scripts (Story-driven, retention-focused, engineered for watch-time depth)" },
        { item: "Everything in CLICK ARCHITECT™ Framework" },
        { item: "Quarterly Content Strategy Roadmap (Positioning, topic architecture, authority planning)" },
        { item: "Monthly Retention Audit (Drop-off curve analysis and structural improvements)" },
        { item: "8 YouTube Shorts (Strategically produced to expand reach and feed discovery)" },
        { item: "Ongoing Post-Publish Optimization (Title shifts, thumbnail refresh cycles, session optimization)" }
      ],
      outcomes: [
        "Increased Average View Duration",
        "Higher session watch time",
        "Shorts-driven discovery growth",
        "Stronger authority positioning",
        "Continuous performance refinement"
      ],
      popular: true
    },
    {
      name: "PLAN 03",
      subtitle: "VHORO ELITE PARTNERSHIP™",
      system: "(Custom Growth Architecture)",
      bestFor: "High-level creators, personal brands and companies that require a fully customized YouTube growth operation.",
      price: "",
      investmentNote: "Custom pricing — starting at $8,000+ / month",
      totalValue: "",
      cta: "CONTACT US",
      deliverables: [
        { item: "Everything is built based on your specific growth objectives." },
        { item: "Unlimited thumbnail testing cycles" },
        { item: "Advanced packaging experimentation" },
        { item: "Full-service editing (scalable volume)" },
        { item: "Scriptwriting at scale" },
        { item: "Content strategy for authority domination" },
        { item: "Multi-format expansion (Shorts, clips, ecosystem distribution)" },
        { item: "Monetization architecture & funnel integration" },
        { item: "Launch campaign support" },
        { item: "Dedicated growth strategist" },
        { item: "Priority execution team" },
        { item: "Ongoing post-publish optimization (no time limit)" },
        { item: "Real-time performance monitoring" },
        { item: "Advanced KPI dashboard" }
      ],
      outcomes: [
        "Category leadership",
        "Predictable content velocity",
        "Scalable monetization engine",
        "YouTube as a core revenue channel",
        "Strategic growth moat"
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
                    {plan.deliverables.map((d, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="mt-1 w-3 h-3 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 leading-tight">{d.item}</span>
                      </div>
                    ))}
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
                <button className={`w-full py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${plan.popular ? 'bg-brand text-white hover:opacity-90' : 'bg-black text-white hover:bg-neutral-800'}`}>
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
          <Link to="/insights" className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-colors">
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
  const [viewsCount, setViewsCount] = useState(0);
  const [fontSize, setFontSize] = useState(100);
  const [hasStarted, setHasStarted] = useState(false);
  const numberRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const counterSectionRef = React.useRef<HTMLDivElement>(null);
  const targetViews = 1000000000; // 1 bilhão

  useEffect(() => {
    if (!hasStarted || !counterSectionRef.current) return;

    const duration = 5000; // 5 segundos
    const steps = 100;
    const increment = targetViews / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetViews) {
        setViewsCount(targetViews);
        clearInterval(timer);
      } else {
        setViewsCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted]);

  useEffect(() => {
    if (!counterSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(counterSectionRef.current);

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    const updateFontSize = () => {
      if (numberRef.current && containerRef.current) {
        // Get the actual available width (accounting for any padding)
        const containerWidth = containerRef.current.clientWidth || containerRef.current.offsetWidth;
        
        // Reset to a base size to measure natural width
        numberRef.current.style.fontSize = '100px';
        numberRef.current.style.letterSpacing = '0px';
        numberRef.current.style.width = 'auto';
        numberRef.current.style.maxWidth = 'none';
        
        // Force a reflow to get accurate measurements
        void numberRef.current.offsetHeight;
        
        const textWidth = numberRef.current.scrollWidth;
        
        // Calculate the font size needed to fill the container width
        if (textWidth > 0 && containerWidth > 0) {
          const scale = containerWidth / textWidth;
          const calculatedSize = 100 * scale;
          
          // Apply the calculated font size with reasonable limits
          // Lower minimum for mobile, higher max for desktop
          const minSize = window.innerWidth < 768 ? 20 : 30;
          const maxSize = window.innerWidth < 768 ? 200 : 800;
          setFontSize(Math.min(Math.max(calculatedSize, minSize), maxSize));
        }
      }
    };

    // Multiple attempts to ensure it works, especially on mobile
    const timeout1 = setTimeout(updateFontSize, 50);
    const timeout2 = setTimeout(updateFontSize, 200);
    const timeout3 = setTimeout(updateFontSize, 500);
    const timeout4 = setTimeout(updateFontSize, 1000);
    
    window.addEventListener('resize', updateFontSize);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateFontSize, 300);
    });
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      window.removeEventListener('resize', updateFontSize);
      window.removeEventListener('orientationchange', updateFontSize);
    };
  }, [viewsCount]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="bg-brand py-4 flex justify-center space-x-8">
        <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Instagram className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Youtube className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <Linkedin className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
      </div>
      
      {/* Views Counter Section */}
      <div 
        className="w-full py-16 border-b border-white/10 px-0 overflow-visible"
      >
        <motion.div
          ref={counterSectionRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full overflow-visible"
        >
          <p className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-400 mb-4 text-center px-6">
            Views Generated
          </p>
          <div className="w-full overflow-visible" ref={containerRef} style={{ minWidth: 0 }}>
            <motion.div
              ref={numberRef}
              key={viewsCount}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap text-center"
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: 'monospace',
                letterSpacing: '0px',
                lineHeight: 1,
                fontWeight: 900,
                display: 'block',
                width: '100%',
                overflow: 'visible',
                textAlign: 'center',
                wordBreak: 'keep-all',
                overflowWrap: 'normal'
              }}
            >
              {formatNumber(viewsCount)}
            </motion.div>
          </div>
        </motion.div>
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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
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
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-xl font-bold text-white tracking-tighter">YouTube</span>
              </div>
              <Menu className="w-6 h-6 text-white" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src={FounderPhoto} 
                alt="Marcus Vayner" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Interaction Bar */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center space-y-4 shadow-xl">
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-brand"><Zap className="w-4 h-4 fill-current" /></div>
                  <span className="text-[10px] font-bold text-black">1.7 K</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-400"><Zap className="w-4 h-4 rotate-180" /></div>
                  <span className="text-[10px] font-bold text-black">0</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-400"><ArrowRight className="w-4 h-4" /></div>
                  <span className="text-[8px] font-bold text-black uppercase">SHARE</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-gray-400"><Menu className="w-4 h-4" /></div>
                  <span className="text-[8px] font-bold text-black uppercase">SAVE</span>
                </div>
                <div className="text-gray-300">...</div>
              </div>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/20 blur-[120px] rounded-full" />
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
      <Services />
      <PricingSection />
      <Blog />
      <FAQSection />
      <FounderSection />
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-brand/20 flex flex-col">
        <Navbar />
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
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}
