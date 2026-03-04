import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Users, MapPin, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    message: ""
  });

  const roles = [
    "YouTube Growth Strategist",
    "Senior Video Editor",
    "Thumbnail Designer",
    "Long-Form Scriptwriter",
    "Short-Form Video Editor",
    "Channel Performance Analyst",
    "Operations Manager"
  ];

  const locations = ["São Paulo", "Orlando"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          location: "",
          message: ""
        });
      }, 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-8">
          JOIN THE<br /><span className="text-brand">FUTURE</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
          <p className="font-semibold">
            We're building the next generation of YouTube growth.
          </p>
          <p>
            At VHORO, we don't just produce content.<br />
            We engineer performance.
          </p>
          <p>
            From packaging and scripting to editing and post-publish optimization, everything we do is built around one objective: measurable channel growth.
          </p>
          <p>
            If you're obsessed with YouTube, attention psychology and building channels that actually scale, we want to work with you.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8 mb-24"
      >
        <div className="text-center p-8 bg-neutral-50 rounded-3xl border border-black/5">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4"
          >
            <Users className="w-8 h-8" />
          </motion.div>
          <p className="text-5xl font-bold tracking-tight mb-2">45+</p>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Team Members
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Strategists, editors, designers and growth operators working as one performance unit.
          </p>
        </div>

        <div className="text-center p-8 bg-neutral-50 rounded-3xl border border-black/5">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4"
          >
            <MapPin className="w-8 h-8" />
          </motion.div>
          <p className="text-5xl font-bold tracking-tight mb-2">2</p>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Strategic Hubs
          </p>
          <p className="text-xs text-gray-500 mt-2">
            São Paulo and Orlando.
          </p>
        </div>

        <div className="text-center p-8 bg-neutral-50 rounded-3xl border border-black/5">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4"
          >
            <TrendingUp className="w-8 h-8" />
          </motion.div>
          <p className="text-5xl font-bold tracking-tight mb-2">100%</p>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            YouTube Focused
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Every role exists to grow channels.
          </p>
        </div>
      </motion.div>

      {/* Open Roles Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
          Open Roles
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          São Paulo & Orlando
        </p>
        <p className="text-gray-500 mb-12">
          We are currently hiring for on-site and hybrid positions in our YouTube growth team.
        </p>
      </motion.div>

      <div className="space-y-6 mb-16">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 bg-neutral-50 rounded-2xl border border-black/5 hover:border-brand/20 transition-all"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
              {role}
            </h3>
            {i === 0 && <p className="text-sm text-gray-500 mt-2">Develop channel strategy, analyze performance and lead optimization cycles.</p>}
            {i === 1 && <p className="text-sm text-gray-500 mt-2">Edit long-form content focused on retention and watch time.</p>}
            {i === 2 && <p className="text-sm text-gray-500 mt-2">Create high-CTR thumbnails engineered for performance.</p>}
            {i === 3 && <p className="text-sm text-gray-500 mt-2">Write full strategic scripts built for retention and authority positioning.</p>}
            {i === 4 && <p className="text-sm text-gray-500 mt-2">Produce Shorts designed for reach and discovery.</p>}
            {i === 5 && <p className="text-sm text-gray-500 mt-2">Track CTR, retention curves, subscriber velocity and growth metrics.</p>}
            {i === 6 && <p className="text-sm text-gray-500 mt-2">Oversee workflow, delivery timelines and team coordination.</p>}
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-neutral-50 rounded-3xl p-12 border border-black/5">
          <div className="space-y-4 mb-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600">
              If YouTube is more than content to you
            </p>
            <p className="text-xl text-gray-600">
              If growth excites you more than views
            </p>
            <p className="text-xl font-semibold text-gray-800 mt-6">
              Apply below.
            </p>
          </div>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand transition-colors"
          >
            APPLY NOW
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitted && setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {!isSubmitted ? (
                  <>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="p-8 md:p-12">
                      <h2 className="text-4xl font-bold tracking-tight uppercase mb-2">
                        Apply Now
                      </h2>
                      <p className="text-gray-500 mb-8">
                        Fill out the form below and we'll get back to you soon.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                              Location *
                            </label>
                            <select
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand focus:outline-none transition-colors"
                            >
                              <option value="">Select Location</option>
                              {locations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Role *
                          </label>
                          <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand focus:outline-none transition-colors"
                          >
                            <option value="">Select Role</option>
                            {roles.map((role) => (
                              <option key={role} value={role}>{role}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-black text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-brand transition-colors"
                        >
                          Submit Application
                        </motion.button>
                      </form>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 md:p-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand/10 text-brand mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold tracking-tight uppercase mb-4"
                    >
                      Application Submitted!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 text-lg"
                    >
                      We'll be in touch soon.
                    </motion.p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
