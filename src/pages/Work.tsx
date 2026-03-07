import { motion } from "motion/react";

export default function Work() {
  const workItems = [
    {
      title: "Lumina Skin",
      category: "Beauty & Wellness",
      metric: "+142% ROAS",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "FlexFit Gear",
      category: "Fitness Apparel",
      metric: "3.2x CTR",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Nova Tech",
      category: "Consumer Electronics",
      metric: "$0.45 CPC",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "EcoHome",
      category: "Sustainable Living",
      metric: "12% Conv. Rate",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Zenith Watches",
      category: "Luxury Goods",
      metric: "+85% AOV",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Urban Eats",
      category: "Food Delivery",
      metric: "50k+ Installs",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-8">
            The<br /><span className="text-brand">Results.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-md">
            We don't just make ads. We build growth engines. Here's what happens when AI meets performance.
          </p>
        </div>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 hover:scale-105 transition-all cursor-pointer">All Work</button>
          <button className="px-6 py-3 bg-neutral-100 text-gray-400 rounded-full hover:bg-neutral-200 hover:scale-105 transition-all cursor-pointer">E-commerce</button>
          <button className="px-6 py-3 bg-neutral-100 text-gray-400 rounded-full hover:bg-neutral-200 hover:scale-105 transition-all cursor-pointer">SaaS</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workItems.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-tight">
                {item.metric}
              </div>
            </div>
            <h3 className="text-2xl font-bold tracking-tight uppercase mb-1">{item.title}</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{item.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
