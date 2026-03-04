import { motion } from "motion/react";
import { MapPin, Globe } from "lucide-react";
import SaoPauloImage from "../imgs/istockphoto-878377556-612x612.jpg";
import OrlandoImage from "../imgs/aditya-vyas-HCKVHAEbkus-unsplash.jpg";

export default function Offices() {
  const offices = [
    {
      city: "Orlando",
      country: "United States",
      address: "Orlando, FL, USA",
      flag: "🇺🇸",
      timezone: "EST (UTC-5)",
      image: OrlandoImage
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "São Paulo, SP, Brazil",
      flag: "🇧🇷",
      timezone: "BRT (UTC-3)",
      image: SaoPauloImage
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
          Our<br /><span className="text-brand">Offices.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Two locations. One mission. Global YouTube growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {offices.map((office, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
              <motion.img
                src={office.image}
                alt={office.city}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Flag and City Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.3, type: "spring" }}
                  className="text-4xl"
                >
                  {office.flag}
                </motion.div>
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    {office.timezone}
                  </p>
                </div>
              </div>

              {/* City Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.4 }}
                  className="text-5xl md:text-6xl font-bold tracking-tight uppercase text-white mb-2"
                >
                  {office.city}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
                  className="text-white/80 font-medium text-lg"
                >
                  {office.country}
                </motion.p>
              </div>
            </div>

            {/* Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.6 }}
              className="bg-neutral-50 rounded-2xl p-6 border border-black/5 group-hover:border-brand/20 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Address
                    </p>
                    <p className="text-gray-700 font-medium">{office.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Timezone
                    </p>
                    <p className="text-gray-700 font-medium">{office.timezone}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 text-center"
      >
        <div className="bg-neutral-50 rounded-3xl p-12 border border-black/5">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
            Ready to Scale?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're in North America or South America, we're here to help you dominate YouTube.
          </p>
          <motion.a
            href="/#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand transition-colors"
          >
            View Pricing
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
