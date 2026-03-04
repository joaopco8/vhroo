import { motion } from "motion/react";
import { Zap, FileText, Video, TrendingUp, Film, Target, DollarSign, BarChart3 } from "lucide-react";

export default function Services() {
  const capabilities = [
    {
      number: "01",
      title: "Performance Packaging",
      tagline: "We engineer the click.",
      description: "If you don't win the click, nothing else matters.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "High-performance thumbnail design",
        "Title architecture and curiosity frameworks",
        "CTR optimization strategy",
        "Competitive packaging intelligence",
        "Structured A/B testing cycles"
      ]
    },
    {
      number: "02",
      title: "Strategic Scriptwriting",
      tagline: "We design retention from the first second.",
      description: "We don't write content. We build controlled attention flow.",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Full long-form video scripts",
        "Strong opening sequences",
        "Structured narrative progression",
        "Retention loops and viewer re-engagement",
        "Authority positioning inside your niche"
      ]
    },
    {
      number: "03",
      title: "Retention-Driven Video Editing",
      tagline: "Editing determines watch time.",
      description: "Good editing looks nice. Strategic editing holds attention.",
      icon: <Video className="w-6 h-6" />,
      features: [
        "Retention-first pacing",
        "Strategic cuts and pattern interrupts",
        "Sound design and dynamic flow",
        "Motion graphics for clarity and engagement",
        "Viewer psychology-based sequencing"
      ]
    },
    {
      number: "04",
      title: "Post-Publish Optimization",
      tagline: "Upload is not the finish line.",
      description: "We optimize based on real data, not guesses.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        "First 7-day monitoring",
        "Title and thumbnail swap cycles",
        "CTR and retention analysis",
        "Drop-off diagnostics",
        "Continuous performance refinement"
      ]
    },
    {
      number: "05",
      title: "Shorts & Multi-Format Expansion",
      tagline: "We expand discovery channels.",
      description: "Short-form feeds long-form growth.",
      icon: <Film className="w-6 h-6" />,
      features: [
        "Shorts scripting and structure",
        "Long-form repurposing strategy",
        "Hook compression frameworks",
        "Reach-focused editing",
        "Discovery loop integration"
      ]
    },
    {
      number: "06",
      title: "Channel Positioning & Authority Strategy",
      tagline: "Clarity scales channels.",
      description: "Growth without positioning creates noise. We build dominance.",
      icon: <Target className="w-6 h-6" />,
      features: [
        "Niche positioning",
        "Topic architecture planning",
        "Content roadmap development",
        "Competitive gap analysis",
        "Authority mapping"
      ]
    },
    {
      number: "07",
      title: "Monetization & Revenue Alignment",
      tagline: "Views are leverage. Revenue is the objective.",
      description: "We turn audience into business impact.",
      icon: <DollarSign className="w-6 h-6" />,
      features: [
        "Offer integration strategy",
        "Funnel alignment",
        "High-ticket positioning",
        "Launch content architecture",
        "Conversion-focused content strategy"
      ]
    },
    {
      number: "08",
      title: "Performance Intelligence & Reporting",
      tagline: "What gets measured gets scaled.",
      description: "We operate with clarity, not intuition.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        "CTR tracking",
        "Average View Duration analysis",
        "Retention curve breakdown",
        "Subscriber velocity tracking",
        "KPI performance dashboards"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-8">
          OUR<br /><span className="text-brand">CAPABILITIES</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
          <p className="font-semibold">
            We don't provide isolated services.<br />
            We build complete YouTube growth systems.
          </p>
          <p>
            Every capability below exists to support one outcome: scalable, measurable performance.
          </p>
        </div>
      </motion.div>

      <div className="space-y-16">
        {capabilities.map((capability, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left: Number and Icon */}
              <div className="md:col-span-2 flex items-start gap-4 md:flex-col md:items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="text-brand text-6xl md:text-7xl font-bold tracking-tight leading-none"
                >
                  {capability.number}
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3, type: "spring" }}
                  className="text-brand group-hover:scale-110 transition-transform duration-300"
                >
                  {capability.icon}
                </motion.div>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-10 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-3 group-hover:text-brand transition-colors">
                    {capability.title}
                  </h2>
                  <p className="text-brand text-lg md:text-xl font-semibold mb-2 italic">
                    {capability.tagline}
                  </p>
                  <p className="text-gray-500 font-medium text-sm md:text-base">
                    {capability.description}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  className="space-y-3 pt-4 border-t border-black/5"
                >
                  {capability.features.map((feature, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.5 + j * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-brand flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
