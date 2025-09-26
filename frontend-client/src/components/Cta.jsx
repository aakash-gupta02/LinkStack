import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Background from "./laningPageCompo/Background";
import { useNavigate } from "react-router-dom";

export default function Cta() {

  const navigate = useNavigate();

  return (
    <div className="relative bg-[#0F172A] overflow-hidden isolate py-16 sm:py-24">
      {/* Cosmic Background */}
      <Background />

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
            onClick={() => navigate('/link/dashboard')}
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