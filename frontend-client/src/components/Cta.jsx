import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Cta() {
  return (
    <div className="relative bg-[#0F172A] overflow-hidden isolate py-16 sm:py-24">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {/* Grid Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          
          {/* Floating Orbs */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500 blur-xl opacity-40"
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Unlock the Power of AI, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-100">
            Create Your SmartBio Now!
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
          Join thousands of professionals who have already transformed their online presence with our innovative platform.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="/get-started"
            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
          >
            Get Started Free
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}