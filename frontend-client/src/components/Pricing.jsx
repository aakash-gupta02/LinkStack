import { StarIcon, CheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for personal use",
    features: [
      "50 links/month",
      "Basic analytics",
      "Custom branding",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$9",
    description: "For growing creators",
    features: [
      "500 links/month",
      "Advanced analytics",
      "Custom domains",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$29",
    description: "For businesses",
    features: [
      "Unlimited links",
      "API access",
      "Team collaboration",
      "Dedicated manager",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="relative bg-[#0A1120] py-24 sm:py-32 overflow-hidden">
      {/* Radial gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#3B82F6_0%,transparent_70%)]" />
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
            Simple <span className="text-indigo-400">pricing</span>, no surprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-indigo-200"
          >
            Pay as you grow. Cancel anytime.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl p-8 relative overflow-hidden ${
                tier.featured
                  ? "bg-gradient-to-br from-indigo-900 to-indigo-800 border-2 border-indigo-500 shadow-xl shadow-indigo-500/20"
                  : "bg-indigo-900/30 border border-indigo-500/20"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-indigo-500 px-4 py-1 text-xs font-semibold text-white rounded-bl-lg">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold leading-8 text-white">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-indigo-200">
                  /month
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-indigo-200">
                {tier.description}
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={`h-5 w-5 flex-none ${
                        tier.featured ? "text-white" : "text-indigo-500"
                      }`}
                    />
                    <span className="text-sm leading-6 text-indigo-100">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold ${
                  tier.featured
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                Get started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}