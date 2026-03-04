import { motion } from "motion/react";
import { Link } from "react-router-dom";

// Article cover images
import CoverCompetitor from "../imgs/capas artigos/How To Steal Your Competition’s Best Ideas (Legally).jpg";
import CoverMonetization from "../imgs/capas artigos/How To Turn Your Channel Into A Revenue Machine.jpg";
import CoverAnalytics from "../imgs/capas artigos/How To Read Your YouTube Analytics Like A Pro.jpg";
import CoverEditing from "../imgs/capas artigos/How To Edit For Retention, Not Just For Looks.jpg";
import CoverShorts from "../imgs/capas artigos/How To Use Vertical Video To Fuel Your Long-Form Content.jpg";
import CoverSEO from "../imgs/capas artigos/How To Make Your Videos Searchable For Years.jpg";
import CoverRetention from "../imgs/capas artigos/How To Script Videos That People Actually Finishv.jpg";

export default function Insights() {
  const articles = [
    {
      title: "THE COMPETITOR ANALYSIS PLAYBOOK: HOW TO STEAL YOUR COMPETITION'S BEST IDEAS (LEGALLY)",
      category: "Strategy",
      date: "March 04, 2026",
      image: CoverCompetitor,
      slug: "competitor-analysis"
    },
    {
      title: "THE MONETIZATION MAP: HOW TO TURN YOUR CHANNEL INTO A REVENUE MACHINE",
      category: "Monetization",
      date: "March 04, 2026",
      image: CoverMonetization,
      slug: "monetization-map"
    },
    {
      title: "THE DATA DEEP-DIVE: HOW TO READ YOUR YOUTUBE ANALYTICS LIKE A PRO",
      category: "Analytics",
      date: "March 04, 2026",
      image: CoverAnalytics,
      slug: "data-deep-dive"
    },
    {
      title: "THE EDITING BLUEPRINT: HOW TO EDIT FOR RETENTION, NOT JUST FOR LOOKS",
      category: "Editing",
      date: "March 04, 2026",
      image: CoverEditing,
      slug: "editing-blueprint"
    },
    {
      title: "THE SHORTS ENGINE: HOW TO USE VERTICAL VIDEO TO FUEL YOUR LONG-FORM CONTENT",
      category: "Shorts",
      date: "March 03, 2026",
      image: CoverShorts,
      slug: "shorts-engine"
    },
    {
      title: "THE SEO BIBLE: HOW TO MAKE YOUR VIDEOS SEARCHABLE FOR YEARS",
      category: "SEO",
      date: "March 03, 2026",
      image: CoverSEO,
      slug: "seo-bible"
    },
    {
      title: "THE RETENTION CODE: HOW TO SCRIPT VIDEOS THAT PEOPLE ACTUALLY FINISH",
      category: "Retention",
      date: "March 03, 2026",
      image: CoverRetention,
      slug: "retention-code"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-8">
          The<br /><span className="text-brand">Insights.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Deep dives into the data, psychology, and technology behind high-performance creative.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {articles.map((article, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <Link to={`/insights/${article.slug}`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-8">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                <span>{article.date}</span>
                <div className="w-1 h-1 rounded-full bg-gray-300" />
                <span>5 min read</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-tight group-hover:text-brand transition-colors">
                {article.title}
              </h2>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
