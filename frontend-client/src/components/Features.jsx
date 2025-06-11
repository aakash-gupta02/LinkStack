import { BoltIcon, ShieldCheckIcon, ArrowsPointingOutIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const features = [
  {
    name: "Blazing Fast",
    description: "Instant link loading with edge caching and zero latency.",
    icon: BoltIcon,
  },
  {
    name: "Secure Links",
    description: "End-to-end encryption and spam protection.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Custom Domains",
    description: "Use your own domain for complete branding control.",
    icon: ArrowsPointingOutIcon,
  },
  {
    name: "Real-Time Analytics",
    description: "Track clicks, locations, and devices in your dashboard.",
    icon: ChartBarIcon,
  },
];

export default function Features() {
  return (
    <div className="relative bg-[#0F172A] py-24 sm:py-32 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute rounded-full bg-indigo-400"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Built for the <span className="text-indigo-400">power users</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-indigo-200"
          >
            Everything you need to dominate your link game.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-b from-indigo-900/30 to-indigo-900/10 rounded-2xl p-6 border border-indigo-500/20 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-sm text-indigo-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}