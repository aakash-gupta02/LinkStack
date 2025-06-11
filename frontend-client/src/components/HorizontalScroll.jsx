import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LinkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const horizontalItems = [
  {
    title: "Link Stack",
    subtitle: "Your Digital Identity",
    description: "One link to rule them all. Share everything you are in a single, beautiful stack.",
    cta: "Create yours"
  },
  {
    title: "Smart Organization",
    subtitle: "AI-Powered Sorting",
    description: "Our system automatically categorizes your links for maximum impact.",
    cta: "Try it free"
  },
  {
    title: "Real Analytics",
    subtitle: "Data That Matters",
    description: "See exactly who's clicking and when. Make informed decisions.",
    cta: "View demo"
  },
  {
    title: "Custom Domains",
    subtitle: "Branded Links",
    description: "Use your own domain for complete control over your digital presence.",
    cta: "Learn more"
  },  {
    title: "Link Stack",
    subtitle: "Your Digital Identity",
    description: "One link to rule them all. Share everything you are in a single, beautiful stack.",
    cta: "Create yours"
  },
  {
    title: "Smart Organization",
    subtitle: "AI-Powered Sorting",
    description: "Our system automatically categorizes your links for maximum impact.",
    cta: "Try it free"
  },
];

export default function HorizontalScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  return (
    <section ref={ref} className="relative h-[300vh] bg-[#0F172A] overflow-hidden">
      {/* Fixed container that pins during scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 will-change-transform">
          {horizontalItems.map((item, index) => (
            <div 
              key={index} 
              className="w-[80vw] md:w-[50vw] flex-shrink-0 px-8 py-12 bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 border border-indigo-500/20 rounded-3xl backdrop-blur-sm"
            >
              <div className="max-w-md mx-auto">
                <LinkIcon className="h-8 w-8 text-indigo-400 mb-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-indigo-300 font-medium mb-4">
                  {item.subtitle}
                </p>
                <p className="text-indigo-100 mb-6">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-indigo-300 hover:text-white group transition-colors">
                  {item.cta}
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress indicator (minimal) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-indigo-900/50 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-indigo-500" 
          style={{ 
            scaleX: scrollYProgress,
            transformOrigin: 'left center'
          }} 
        />
      </div>
    </section>
  );
}