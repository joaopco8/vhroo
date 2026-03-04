import { motion } from "motion/react";

export default function Connect() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-8">
            Let's<br /><span className="text-brand">Connect.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-md">
            Ready to stop burning cash and start scaling? Reach out and let's dominate the feed together.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email Us</h3>
              <p className="text-2xl font-bold tracking-tight">hello@hooklab.ai</p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">New Business</h3>
              <p className="text-2xl font-bold tracking-tight">+1 (555) 000-HOOK</p>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-neutral-50 p-8 md:p-12 rounded-3xl border border-black/5"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Name</label>
                <input type="text" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
                <input type="email" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Monthly Ad Spend</label>
              <select className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors">
                <option>$10k - $30k</option>
                <option>$30k - $100k</option>
                <option>$100k+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors h-32" placeholder="Tell us about your brand..."></textarea>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
